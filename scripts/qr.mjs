// QR kód SFZ z príkazového riadka (od v1.4.0).
// Použitie: npm run qr -- "https://www.linkedin.com/in/meno/" [--tvar kruh|stvorec] [--farba modra|cierna] [--bez-loga] [-o subor.svg]
import { readFileSync, realpathSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

/** Načíta knižnicu qrcode-generator, logo a renderer do izolovaného kontextu a vráti SFZQR. */
export function nacitajSfzQr(root = process.cwd()) {
  const ctx = vm.createContext({ Math });
  for (const f of ["tools/qr/vendor/qrcode-generator-1.4.4.js", "tools/qr/logo-sfz-a.js", "tools/qr/sfz-qr.js"]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx, { filename: f });
  }
  return ctx.SFZQR;
}

function main(argv) {
  const args = [...argv];
  const opt = { tvar: "kruh", farba: "modra", logo: true };
  let text = "";
  let out = "";
  while (args.length) {
    const a = args.shift();
    if (a === "--tvar") opt.tvar = args.shift();
    else if (a === "--farba") opt.farba = args.shift();
    else if (a === "--bez-loga") opt.logo = false;
    else if (a === "-o" || a === "--out") out = args.shift();
    else text = a;
  }
  if (!text) {
    console.error('Použitie: npm run qr -- "https://…" [--tvar kruh|stvorec] [--farba modra|cierna] [--bez-loga] [-o subor.svg]');
    process.exit(1);
  }
  const svg = nacitajSfzQr().svg(text, opt);
  const file = out || `qr-${opt.tvar}.svg`;
  writeFileSync(file, svg);
  console.log(`${file} vygenerovaný (${text})`);
}

// import.meta.url je URL-kódovaná (medzera = %20) a so skutočnou cestou (bez symlinkov), process.argv[1] je cesta tak, ako bola zadaná.
if (process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) main(process.argv.slice(2));
