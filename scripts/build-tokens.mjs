// Generuje tokens/tokens.css z tokens/tokens.json.
// Formát zodpovedá tomu, čo generuje artefakt SFZ Design System:
//   :root, [data-theme="light"] { farby a tiene svetlej témy }
//   [data-theme="dark"] { farby a tiene tmavej témy }
//   @media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { … } }
//   :root { spacing, radius, breakpoint, zIndex, duration…, --font-* }
//   .<štýl> { typografické triedy }
import { readFileSync, realpathSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

/** Prevedie hodnotu tokenu na CSS (alias {meno} → var(--meno)). */
function cssValue(v) {
  const m = typeof v === "string" && /^\{(.+)\}$/.exec(v);
  return m ? `var(--${m[1]})` : v;
}

/** Vráti hodnotu tokenu pre danú tému; chýbajúca téma dedí prvú. */
export function valueFor(token, theme, firstTheme) {
  const v = token.value;
  if (v && typeof v === "object") return v[theme] ?? v[firstTheme];
  return v;
}

export function buildCss(tokens) {
  const themes = tokens.color.themes.map((t) => t.id);
  const first = themes[0];
  const themed = [...tokens.color.tokens, ...(tokens.shadow?.tokens ?? [])];
  const block = (theme, onlyOverrides) =>
    themed
      .filter((t) => !onlyOverrides || (t.value && typeof t.value === "object" && theme in t.value))
      .map((t) => `  --${t.name}: ${cssValue(valueFor(t, theme, first))};`)
      .join("\n");

  const out = [`/* SFZ Design System — generované z tokens.json (npm run build:tokens). Needitujte ručne. */`];
  out.push(`:root, [data-theme="${first}"] {\n${block(first, false)}\n}`);
  for (const th of themes.slice(1)) {
    const b = block(th, true);
    out.push(`[data-theme="${th}"] {\n${b}\n  color-scheme: ${th};\n}`);
    out.push(`@media (prefers-color-scheme: ${th}) {\n  :root:not([data-theme="${first}"]) {\n${b.replace(/^/gm, "  ")}\n    color-scheme: ${th};\n  }\n}`);
  }

  const skip = new Set(["name", "version", "meta", "color", "type", "shadow"]);
  const rootVars = [];
  for (const [family, body] of Object.entries(tokens)) {
    if (skip.has(family) || !body || !Array.isArray(body.tokens)) continue;
    for (const t of body.tokens) rootVars.push(`  --${t.name.replace(/\./g, "\\.")}: ${t.value};`);
  }
  for (const [k, v] of Object.entries(tokens.type.families)) rootVars.push(`  --font-${k}: ${v};`);
  out.push(`:root {\n${rootVars.join("\n")}\n}`);

  for (const g of tokens.type.groups) {
    for (const s of g.styles) {
      const fam = s.family ?? g.family;
      const decl = [`font-family: var(--font-${fam})`, `font-size: ${s.fontSize}`];
      if (s.lineHeight !== undefined) decl.push(`line-height: ${s.lineHeight}`);
      if (s.fontWeight !== undefined) decl.push(`font-weight: ${s.fontWeight}`);
      if (s.letterSpacing !== undefined) decl.push(`letter-spacing: ${s.letterSpacing}`);
      out.push(`.${s.name} { ${decl.join("; ")}; }`);
    }
  }
  return out.join("\n\n") + "\n";
}

if (import.meta.url.startsWith("file:") && process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const tokens = JSON.parse(readFileSync(join(root, "tokens/tokens.json"), "utf8"));
  writeFileSync(join(root, "tokens/tokens.css"), buildCss(tokens));
  console.log("tokens/tokens.css vygenerovaný");
}
