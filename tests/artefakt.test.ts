import { describe, expect, it } from "vitest";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const dir = join(process.cwd(), "docs/artefakt/components");
const comps = readdirSync(dir);

describe("zdroje artefaktu", () => {
  it("obsahujú náhľad každého komponentu z components/docs a docs/prezentacie", () => {
    const web = readdirSync(join(process.cwd(), "components/docs")).map((f) => f.replace(/\.md$/, ""));
    const slides = readdirSync(join(process.cwd(), "docs/prezentacie")).filter((f) => f !== "README.md").map((f) => f.replace(/\.md$/, ""));
    const charts = readdirSync(join(process.cwd(), "docs/grafy")).filter((f) => f !== "README.md").map((f) => f.replace(/\.md$/, ""));
    expect(charts.length).toBeGreaterThan(0);
    for (const c of [...web, ...slides, ...charts, "Cover"]) expect(comps, c).toContain(c);
  });
  for (const c of comps) {
    it(`${c}: náhľad nemá odkazy na úložisko artefaktu a jeho logá existujú`, () => {
      const f = join(dir, c, "preview.html");
      const html = readFileSync(f, "utf8");
      expect(html).not.toContain("/_blob/");
      for (const m of html.matchAll(/src[=:]\s*"([^"#]+)"/g)) {
        if (/^https?:/.test(m[1])) continue;
        expect(existsSync(resolve(dirname(f), m[1])), m[1]).toBe(true);
      }
    });
  }
  it("skill pre prezentácie má hlavičku name a description", () => {
    const s = readFileSync(join(process.cwd(), "docs/skills/sfz-prezentacia/SKILL.md"), "utf8");
    expect(s).toMatch(/^---\nname: sfz-prezentacia\ndescription: .+\n---/);
  });
});
