import { describe, expect, it } from "vitest";
import { cpSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
// @ts-expect-error – .mjs skript bez typov
import { nacitajSfzQr } from "../scripts/qr.mjs";

const root = process.cwd();

describe("QR kód SFZ", () => {
  const qr = nacitajSfzQr(root);

  it("logo v generátore je presná kópia brand/logos/Loga-SFZ/sfz-A-farebne.svg", () => {
    const js = readFileSync(join(root, "tools/qr/logo-sfz-a.js"), "utf8");
    const b64 = readFileSync(join(root, "brand/logos/Loga-SFZ/sfz-A-farebne.svg")).toString("base64");
    expect(js).toContain(`data:image/svg+xml;base64,${b64}"`);
  });

  for (const tvar of ["kruh", "stvorec"]) {
    it(`tvar ${tvar}: vytvorí SVG s logom, je deterministický`, () => {
      const a = qr.svg("https://futbalsfz.sk", { tvar });
      expect(a).toMatch(/^<svg xmlns="http:\/\/www.w3.org\/2000\/svg"/);
      expect(a).toContain("data:image/svg+xml;base64,");
      expect(a).toContain("#1450df");
      expect(qr.svg("https://futbalsfz.sk", { tvar })).toBe(a);
    });
  }

  it("čierny variant a variant bez loga", () => {
    const s = qr.svg("https://futbalsfz.sk", { farba: "cierna", logo: false });
    expect(s).toContain("#0c0f16");
    expect(s).not.toContain("<image");
  });

  it("prázdny odkaz je chyba", () => {
    expect(() => qr.svg("  ")).toThrow("Zadajte odkaz.");
  });

  it("vzorový súbor pre šablónu záveru je aktuálny", () => {
    const f = readFileSync(join(root, "tools/qr/priklad-futbalsfz-sk.svg"), "utf8");
    expect(f).toBe(qr.svg("https://futbalsfz.sk", {}));
  });

  it("npm run qr funguje aj v ceste s medzerou", () => {
    // CI beží v ceste bez medzery – skript preto skopírujeme do priečinka s medzerou.
    const dir = mkdtempSync(join(tmpdir(), "sfz qr "));
    try {
      cpSync(join(root, "scripts/qr.mjs"), join(dir, "qr.mjs"));
      const out = join(dir, "kod.svg");
      execFileSync(process.execPath, [join(dir, "qr.mjs"), "https://futbalsfz.sk", "-o", out], { cwd: root });
      expect(readFileSync(out, "utf8")).toBe(qr.svg("https://futbalsfz.sk", {}));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
