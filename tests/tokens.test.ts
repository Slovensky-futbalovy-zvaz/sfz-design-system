import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buildCss, valueFor } from "../scripts/build-tokens.mjs";

const tokens = JSON.parse(readFileSync(join(process.cwd(), "tokens/tokens.json"), "utf8"));
const themes: string[] = tokens.color.themes.map((t: { id: string }) => t.id);
type Tok = { name: string; value: unknown };
const colors = new Map<string, Tok>(tokens.color.tokens.map((t: Tok) => [t.name, t]));

/** Vyrieši farbu pre tému vrátane aliasov {meno}. */
function resolve(name: string, theme: string, depth = 0): string {
  if (depth > 16) throw new Error(`Cyklus aliasov: ${name}`);
  const t = colors.get(name);
  if (!t) throw new Error(`Neznámy token: ${name}`);
  const v = String(valueFor(t, theme, themes[0]));
  const m = /^\{(.+)\}$/.exec(v);
  return m ? resolve(m[1], theme, depth + 1) : v;
}

function luminance(hex: string): number {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const f = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function contrast(a: string, b: string): number {
  const [la, lb] = [luminance(a), luminance(b)];
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

describe("tokens.json", () => {
  it("má unikátne názvy tokenov naprieč rodinami", () => {
    const names: string[] = [];
    for (const v of Object.values(tokens) as Array<{ tokens?: Array<{ name: string }> }>) if (v && Array.isArray(v.tokens)) names.push(...v.tokens.map((t) => t.name));
    expect(new Set(names).size).toBe(names.length);
  });

  it("každý farebný alias odkazuje na existujúci token v každej téme", () => {
    for (const name of colors.keys()) for (const th of themes) expect(() => resolve(name, th)).not.toThrow();
  });

  it("brand farby zodpovedajú SFZ Design Manual 2024-01", () => {
    expect(resolve("brand-blue", "light")).toBe("#1450df");
    expect(resolve("brand-red", "light")).toBe("#ec1c24");
  });

  // [text, pozadie, minimálny kontrast]
  const pairs: Array<[string, string, number]> = [
    ["ink", "surface", 4.5],
    ["ink", "surface-raised", 4.5],
    ["ink-muted", "surface", 4.5],
    ["ink-muted", "surface-raised", 4.5],
    ["on-brand", "brand-blue", 4.5],
    // Červená SFZ z manuálu (#ec1c24) má s bielou 4.41:1 – len pre veľký/tučný text (≥ 3:1).
    ["on-brand", "brand-red", 3],
    // Plné červené plochy s textom (tlačidlo danger, odznak) používajú danger-solid: AA pre bežný text.
    ["on-brand", "danger-solid", 4.5],
    ["brand-blue-ink", "surface", 4.5],
    ["brand-blue-ink", "surface-raised", 4.5],
    ["brand-blue-ink", "brand-blue-tint", 4.5],
    ["success-ink", "success-tint", 4.5],
    ["warning-ink", "warning-tint", 4.5],
    ["danger-ink", "danger-tint", 4.5],
    ["info-ink", "info-tint", 4.5],
    ["border-strong", "surface", 3],
    ["border-strong", "surface-raised", 3],
    ["focus", "surface", 3],
    // Grafy: série a póly rozbiehavej škály sú grafické objekty (WCAG 1.4.11) ≥ 3:1 na ploche aj karte.
    ...["chart-1", "chart-2", "chart-3", "chart-4", "chart-div-neg-2", "chart-div-pos-2"].flatMap(
      (c): Array<[string, string, number]> => [
        [c, "surface", 3],
        [c, "surface-raised", 3],
      ],
    ),
    // Mapy: značky a trasy v sériových farbách musia byť viditeľné na pevnine aj vode podkladu.
    ...["chart-1", "chart-3"].flatMap((c): Array<[string, string, number]> => [
      [c, "map-land", 3],
      [c, "map-water", 3],
    ]),
    // Popisy miest na podklade.
    ["ink-muted", "map-land", 4.5],
  ];
  for (const th of ["light", "dark"]) {
    for (const [fg, bg, min] of pairs) {
      it(`kontrast ${fg} na ${bg} (${th}) ≥ ${min}:1`, () => {
        expect(contrast(resolve(fg, th), resolve(bg, th))).toBeGreaterThanOrEqual(min);
      });
    }
  }
});

describe("farby grafov", () => {
  const seq = [1, 2, 3, 4, 5].map((n) => `chart-seq-${n}`);
  it("sekvenčná škála tmavne vo svetlej téme a svetlie v tmavej (viac = výraznejšie)", () => {
    const light = seq.map((c) => luminance(resolve(c, "light")));
    const dark = seq.map((c) => luminance(resolve(c, "dark")));
    for (let i = 1; i < seq.length; i++) {
      expect(light[i]).toBeLessThan(light[i - 1]);
      expect(dark[i]).toBeGreaterThan(dark[i - 1]);
    }
  });
  it("rozbiehavá škála: ramená sú výraznejšie ďalej od stredu", () => {
    for (const th of themes) {
      const mid = resolve("chart-div-mid", th);
      for (const side of ["neg", "pos"]) {
        const c1 = contrast(resolve(`chart-div-${side}-1`, th), mid);
        const c2 = contrast(resolve(`chart-div-${side}-2`, th), mid);
        expect(c2, `${side} ${th}`).toBeGreaterThan(c1);
      }
    }
  });
  it("prvé dve série sa dajú rozlíšiť svetlosťou (≥ 1,4 : 1 medzi sebou)", () => {
    for (const th of themes) expect(contrast(resolve("chart-1", th), resolve("chart-2", th))).toBeGreaterThanOrEqual(1.4);
  });
});

describe("build-tokens", () => {
  const css = buildCss(tokens);
  it("vygeneruje premennú pre každý farebný token", () => {
    for (const name of colors.keys()) expect(css).toContain(`--${name}:`);
  });
  it("obsahuje tmavú tému cez atribút aj cez prefers-color-scheme", () => {
    expect(css).toContain('[data-theme="dark"]');
    expect(css).toContain("@media (prefers-color-scheme: dark)");
  });
  it("tokens.css v repozitári je aktuálny (spustite npm run build:tokens)", () => {
    const committed = readFileSync(join(process.cwd(), "tokens/tokens.css"), "utf8");
    expect(committed).toBe(css);
  });
});
