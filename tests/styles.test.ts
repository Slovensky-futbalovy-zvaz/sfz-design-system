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
});
