// Vygeneruje docs/ukazky/index.html – ukážky všetkých webových komponentov v repozitári (bez artefaktu).
// Zdroj: náhľady docs/artefakt/components/<Komponent>/preview.html (okrem slajdov a obálky).
// Spustenie: npm run build:ukazky
import { readFileSync, readdirSync, writeFileSync, existsSync, realpathSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = process.cwd();
const src = join(root, "docs/artefakt/components");
const VYNECHAT_SKUPINY = new Set(["Slajdy"]);
const PORADIE = ["Ovládacie prvky", "Formuláre", "Obsah", "Spätná väzba", "Navigácia", "Prekrytia", "Dáta", "Grafy", "Mapy", "Logá"];

export function nacitajUkazky() {
  const out = [];
  for (const comp of readdirSync(src).sort()) {
    const f = join(src, comp, "preview.html");
    if (comp === "Cover" || !existsSync(f)) continue;
    const html = readFileSync(f, "utf8");
    const m = /^<!-- @dsCard ([^>]*)-->/.exec(html);
    const attr = (k) => (m && new RegExp(`${k}="?([^"\\s]+(?: [^"=]+(?="))?)"?`).exec(m[1]))?.[1];
    const group = (m && /group="([^"]+)"/.exec(m[1])?.[1]) || "Ostatné";
    if (VYNECHAT_SKUPINY.has(group)) continue;
    const subtitle = (m && /subtitle="([^"]+)"/.exec(m[1])?.[1]) || "";
    const height = Number(attr("height")) || 200;
    // odkazy na logá z pohľadu docs/ukazky/index.html
    const body = html.replace(/^<!-- @dsCard[^>]*-->\n?/, "").replaceAll("../../../../brand/", "../../brand/");
    out.push({ comp, group, subtitle, height, body });
  }
  const i = (g) => (PORADIE.includes(g) ? PORADIE.indexOf(g) : PORADIE.length);
  return out.sort((a, b) => i(a.group) - i(b.group) || a.comp.localeCompare(b.comp));
}

export function vytvorStranku(ukazky) {
  const data = JSON.stringify(ukazky).replaceAll("</", "<\\/");
  const skupiny = [...new Set(ukazky.map((u) => u.group))];
  return `<!doctype html>
<html lang="sk">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Ukážky komponentov – SFZ Design System</title>
<!-- Vygenerované skriptom scripts/build-ukazky.mjs (npm run build:ukazky). Needitujte ručne. -->
<link rel="stylesheet" href="../../tokens/tokens.css">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; }
  body { font-family: var(--font-sans); background: var(--surface); color: var(--ink); -webkit-font-smoothing: antialiased; padding: max(var(--space-4), env(safe-area-inset-top)) max(var(--space-4), env(safe-area-inset-right)) max(var(--space-7), env(safe-area-inset-bottom)) max(var(--space-4), env(safe-area-inset-left)); }
  main { max-width: 1200px; margin: 0 auto; display: grid; gap: var(--space-6); }
  header { display: grid; gap: var(--space-3); }
  .brand { display: flex; align-items: center; gap: var(--space-3); }
  .brand img { height: 40px; width: auto; }
  .muted { color: var(--ink-muted); }
  .bar { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; }
  .bar a, .bar button { font: inherit; font-size: 15px; min-height: 44px; display: inline-flex; align-items: center; padding: 0 var(--space-4); border-radius: var(--radius-pill); border: 1px solid var(--border-strong); background: var(--surface); color: var(--ink); text-decoration: none; cursor: pointer; }
  .bar button[aria-pressed="true"] { background: var(--brand-blue); border-color: var(--brand-blue); color: var(--on-brand); }
  a:focus-visible, button:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
  section { display: grid; gap: var(--space-4); scroll-margin-top: var(--space-4); }
  .grid { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }
  .card { background: var(--surface-raised); border-radius: var(--radius-lg); padding: var(--space-4); display: grid; gap: var(--space-3); min-width: 0; }
  .card iframe { width: 100%; border: 0; border-radius: var(--radius-md); background: var(--surface); display: block; }
  @media (min-width: 1024px) { .grid { grid-template-columns: 1fr 1fr; } }
</style>
</head>
<body>
<main>
  <header>
    <div class="brand"><img id="logo" src="../../brand/logos/Loga-SFZ/sfz-D-farebne.svg" alt="Slovenský futbalový zväz"><h1 class="title-1">Ukážky komponentov</h1></div>
    <p class="callout muted">Živé React komponenty z <code>components/bundle.js</code> s tokenmi <code>tokens.css</code>. Vzory slajdov sú v <a href="../../templates/prezentacie/index.html">šablónach prezentácií</a>, QR kód v <a href="../../tools/qr/index.html">generátore</a>.</p>
    <div class="bar" role="group" aria-label="Téma">
      <button type="button" data-theme-btn="light" aria-pressed="true">Svetlá</button>
      <button type="button" data-theme-btn="dark" aria-pressed="false">Tmavá</button>
    </div>
    <nav class="bar" aria-label="Skupiny">${skupiny.map((g) => `<a href="#${encodeURIComponent(g)}">${g}</a>`).join("")}</nav>
  </header>
  <div id="obsah"></div>
</main>
<script>
  var UKAZKY = ${data};
  var tema = "light";
  function shell(u) {
    return '<!doctype html><html lang="sk" data-theme="' + tema + '"><head><meta charset="utf-8">' +
      '<link rel="stylesheet" href="../../tokens/tokens.css"><link rel="stylesheet" href="../../components/bundle.css">' +
      '<script src="vendor/react-18.3.1.production.min.js"><\\/script><script src="vendor/react-dom-18.3.1.production.min.js"><\\/script>' +
      '<script src="../../components/bundle.js"><\\/script></head><body>' + u.body + '</body></html>';
  }
  function kresli() {
    var obsah = document.getElementById("obsah");
    obsah.innerHTML = "";
    var podla = {};
    UKAZKY.forEach(function (u) { (podla[u.group] = podla[u.group] || []).push(u); });
    Object.keys(podla).forEach(function (g) {
      var s = document.createElement("section"); s.id = g;
      var h = document.createElement("h2"); h.className = "title-2"; h.textContent = g; s.appendChild(h);
      var grid = document.createElement("div"); grid.className = "grid";
      podla[g].forEach(function (u) {
        var c = document.createElement("article"); c.className = "card";
        var t = document.createElement("h3"); t.className = "headline"; t.textContent = u.comp; c.appendChild(t);
        if (u.subtitle) { var p = document.createElement("p"); p.className = "footnote muted"; p.textContent = u.subtitle; c.appendChild(p); }
        var f = document.createElement("iframe"); f.title = "Ukážka " + u.comp; f.loading = "lazy"; f.style.height = (u.height + 40) + "px"; f.srcdoc = shell(u);
        c.appendChild(f); grid.appendChild(c);
      });
      s.appendChild(grid); obsah.appendChild(s);
    });
  }
  document.querySelectorAll("[data-theme-btn]").forEach(function (b) {
    b.addEventListener("click", function () {
      tema = b.getAttribute("data-theme-btn");
      document.documentElement.setAttribute("data-theme", tema);
      document.getElementById("logo").src = "../../brand/logos/Loga-SFZ/sfz-D-" + (tema === "dark" ? "biele" : "farebne") + ".svg";
      document.querySelectorAll("[data-theme-btn]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      kresli();
    });
  });
  document.documentElement.setAttribute("data-theme", tema);
  kresli();
</script>
</body>
</html>
`;
}

// import.meta.url je URL-kódovaná (medzera = %20) a so skutočnou cestou (bez symlinkov), process.argv[1] je cesta tak, ako bola zadaná.
if (process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const out = join(root, "docs/ukazky/index.html");
  writeFileSync(out, vytvorStranku(nacitajUkazky()));
  console.log("docs/ukazky/index.html vygenerovaný");
}
