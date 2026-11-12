import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(process.cwd(), "components/bundle.css"), "utf8");

// jsdom nepočíta rozloženie, preto sa kontroluje priamo pravidlo v bundle.css.
function pravidlo(selektor: string): string {
  const m = new RegExp(`(?:^|\\n)${selektor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\{([^}]*)\\}`).exec(css);
  if (!m) throw new Error(`Pravidlo ${selektor} v bundle.css chýba`);
  return m[1]!;
}

describe("štýly komponentov (bundle.css)", () => {
  it("Avatar má pevnú bunku mriežky – fotka na výšku ho nenatiahne do oválu", () => {
    // Bez pevnej bunky by automatický riadok mriežky zväčšila fotka 28 × 37 px
    // a img s height:100% by pretiekol mimo kruhu (hlásené z Rozvoja klubu, 11. 11. 2026).
    expect(pravidlo(".sfz-avatar")).toMatch(/grid-template:\s*100%\s*\/\s*100%/);
    expect(pravidlo(".sfz-avatar img")).toMatch(/width:100%;height:100%/);
  });

  it("SectionTabs: kapsule s dotykovou plochou, pás sa posúva bez posuvníka", () => {
    expect(pravidlo(".sfz-sectiontab")).toMatch(/min-height:var\(--touch-target\)/);
    expect(pravidlo(".sfz-sectiontab")).toMatch(/border-radius:var\(--radius-pill\)/);
    expect(pravidlo(".sfz-sectiontabs__scroll")).toMatch(/overflow-x:auto/);
    expect(pravidlo(".sfz-sectiontab.is-active")).toMatch(/color:var\(--brand-blue-ink\)/);
  });

  it("MenuPanel list: jeden stĺpec a riadky aspoň 48 px", () => {
    expect(pravidlo(".sfz-menupanel--list")).toMatch(/grid-template-columns:minmax\(0,1fr\)/);
    expect(pravidlo(".sfz-menupanel--list .sfz-menupanel__link")).toMatch(/min-height:48px/);
  });

  it("Button sm a Chip: na dotyku plocha 44 px, vzhľad ostáva 36 px", () => {
    // Vzhľad sa nemení – výška 36 px platí pre myš aj dotyk.
    expect(pravidlo(".sfz-btn--sm")).toMatch(/min-height:36px/);
    expect(pravidlo(".sfz-btn--icon.sfz-btn--sm")).toMatch(/width:36px/);
    expect(pravidlo(".sfz-chip")).toMatch(/height:36px/);
    // Neviditeľná plocha len pod pointer:coarse.
    const dotyk = [...css.matchAll(/@media \(pointer:coarse\)\{(.*)\}\n/g)].map((m) => m[1]!).join("");
    for (const sel of [".sfz-btn--sm::after", ".sfz-chip::after"]) {
      expect(dotyk).toContain(`${sel}{`);
      const telo = dotyk.split(`${sel}{`)[1]!.split("}")[0]!;
      expect(telo).toMatch(/position:absolute/);
      expect(telo).toMatch(/min-width:var\(--touch-target\);min-height:var\(--touch-target\)/);
    }
    expect(dotyk).toMatch(/\.sfz-btn--sm\{position:relative\}/);
    expect(dotyk).toMatch(/\.sfz-chip\{position:relative\}/);
    // Krížik v chipe musí ostať nad plochou, inak by ťuknutie naň zachytil chip.
    expect(dotyk).toMatch(/\.sfz-chip__remove\{position:relative;z-index:1\}/);
    // Mimo pointer:coarse žiadny pseudo-element – myš sa správa ako doteraz.
    expect(css.replace(/@media \(pointer:coarse\)\{.*\}\n/g, "")).not.toMatch(/sfz-(btn|chip)[^{]*::after/);
  });
});
