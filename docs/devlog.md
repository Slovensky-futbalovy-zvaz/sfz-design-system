# Devlog

Pracovný denník repozitára. Najnovší záznam hore. E‑maily, tokeny a ID sú v zápisoch maskované.

## 2026-11-12 – v1.10.0: SectionTabs a MenuPanel ako zoznam

**Čo sa urobilo**
- `SectionTabs` a `MenuPanel columns="list"` z aplikácie Rozvoj klubu (tam dočasne zložené z tokenov, `CapsuleTabs` a `MenuList`) – v `components/src/navigation.tsx`, `index.d.ts`, `bundle.js` aj `bundle.css`; dokumentácia, náhľad, pregenerované ukážky a testy (správanie aj pravidlá v `bundle.css`).
- `BottomSheet` a `MenuSheet` v dokumentácii a náhľade odporúčajú na mobile `columns="list"`.

**Čo treba vedieť**
- `bundle.js` stále ručne – nové funkcie dopísané podľa výstupu esbuildu a overené parsovaním.
- Náhľady neboli vizuálne skontrolované v prehliadači; vzhľad zodpovedá overenej verzii v aplikácii (375 px aj desktop, obe témy). Overí sa znovu, keď aplikácia prejde na komponenty z balíka.

## 2026-11-11 – v1.9.1: skripty v ceste s medzerou

**Čo sa urobilo**
- `npm run qr` potichu nič nevygeneroval v ceste s medzerou (`…/SFZ Design system`). Skripty `qr`, `build:ukazky` a `build:tokens` teraz porovnávajú `realpathSync(process.argv[1])` s `fileURLToPath(import.meta.url)`.
- Regresný test v `tests/qr.test.ts` spúšťa `qr.mjs` z dočasného priečinka s medzerou.

**Čo treba vedieť**
- Test odhalil aj symlinky: Node dáva do `import.meta.url` skutočnú cestu (na macOS `/var` → `/private/var`), `process.argv[1]` nie. Oprava `build:ukazky` z 1.9.0 (len `fileURLToPath`) by pri spustení cez symlink zlyhala.

## 2026-11-11 – v1.9.0: grafy, mapy a päta slajdu

**Čo sa urobilo**
- Vzory grafov (10) a máp (4) v `docs/grafy/` s náhľadmi v artefakte a v ukážkach (skupiny Grafy a Mapy); podnet: interný Katalóg vizualizácií (170 typov grafov).
- Farby grafov podľa úlohy (ADR 0004): séria `chart-1`–`chart-3`, kontext `chart-4`, sekvenčná `chart-seq-*`, rozbiehavá `chart-div-*`, mapový podklad `map-*`. Palety overené na kontrast ≥ 3 : 1 a rozlíšenie pri poruchách farbocitu; testy v `tests/tokens.test.ts`.
- Päta slajdu s autorom a dátumom verzie (RRRR-MM) v brand booku, šablónach `templates/prezentacie/` a náhľadoch slajdov – pravidlo bolo predtým len v artefakte.
- Oprava `npm run build:ukazky` pri ceste s medzerou.

**Čo treba vedieť**
- `chart-2` už nie je červená a `chart-3` už nie je sivá. Komponenty systému `chart-*` nepoužívajú; aplikácie, ktoré ich používajú, treba skontrolovať. Vydané ako 1.9.0, nie 2.0.0 – názvy tokenov ostali.
- Štýl mapového podkladu pre MapLibre v `docs/grafy/README.md` nebol spustený nad reálnymi dlaždicami.
- `npm run qr` má rovnakú chybu s medzerou v ceste ako mal `build:ukazky`.
- Riadky s inštaláciou v README boli pri v1.8.0 vynechané (ostali na 1.7.1); teraz ukazujú 1.9.0.

## 2026-11-11 – v1.8.0: ikony míľnikov

**Čo sa urobilo**
- Ikony `flag`, `handshake`, `clipboard-list`, `file-check` z Lucide 1.70 v `components/src/icons.tsx` aj `bundle.js`. Prvky ikony (obdĺžnik, viac ciest) sú zlúčené do jednej cesty; počiatočné relatívne `m` je prevedené na absolútne `M` s relatívnym `l`, aby sa časti neposunuli.

**Čo treba vedieť**
- Podnet: míľniky sezóny vo Vizitke aplikácie Rozvoj klubu (dovtedy z lucide-react).

## 2026-11-11 – v1.7.1: Avatar ako kruh aj pri fotke na výšku

**Čo sa urobilo**
- Oprava `Avatar`: `.sfz-avatar` (inline-grid) mal automatický riadok, fotka na výšku ho natiahla a avatar bol ovál (28 × 37 px namiesto 28 × 28 pri `sm`). Pevná bunka `grid-template: 100% / 100%` – overené v Chromium na ukážkach (fotka 3 : 4 v `sm` aj `lg`: 28 × 28 a 56 × 56 px, bez opravy 28 × 37 a 56 × 75).
- Náhľad Avatar s fotkou na výšku, pregenerované ukážky, test pravidla v `bundle.css`.

**Čo treba vedieť**
- Podnet: fotka používateľa v hlavičke aplikácie Rozvoj klubu; tá má dočasnú obchádzku v `globals.css`, ktorú po prechode na `^1.7.1` odstráni.
- `npm run build:ukazky` nič nezapíše, keď cesta k repozitáru obsahuje medzeru (`import.meta.url` je URL-kódovaná, `process.argv[1]` nie) – ukážky boli pregenerované priamym volaním `vytvorStranku(nacitajUkazky())`.

## 2026-11-08 – v1.7.0

**Čo sa urobilo**
- Navigačné komponenty MenuSheet, MenuPanel, BottomSheet, Breadcrumbs, SearchField a SearchResults zlúčené v #5 (podnet: hlavička aplikácie Rozvoj klubu, ADR 0035 v jej repozitári).
- Vydanie v1.7.0 cez GitHub Releases.

**Čo treba vedieť**
- Aplikácia Rozvoj klubu môže prejsť na balík `^1.7.0` a zrušiť vlastné kópie týchto komponentov.

## 2026-11-07 – navigácia: plachty, cesta, hľadanie

**Čo sa urobilo**
- Pridané `MenuSheet` / `MenuPanel`, `BottomSheet`, `Breadcrumbs`, `SearchField` a `SearchResults` – v `components/src/navigation.tsx`, `index.d.ts`, `bundle.js` aj `bundle.css`; dokumentácia, náhľady, pregenerované ukážky a testy (vrátane fokusu, Esc a ťahu za úchyt).

**Čo treba vedieť**
- Podnet: hlavička aplikácie Rozvoj klubu podľa contineo.app (jej ADR 0035, PR cyriljanosko/RozvojKlubu#162) – komponenty tam vznikli dočasne z tokenov; po vydaní verzie ich prevezme z balíka.
- Komponenty nezávisia od Next.js: odkaz routera sa podáva cez `linkAs`. Texty sú props so slovenskými predvolenými hodnotami.
- `SearchResults` je len vzhľad zoznamu; načítanie (fetch, oneskorenie), klávesnicu combobox a skratku ⌘K rieši aplikácia (postup v `components/docs/SearchField.md`).
- `bundle.js` stále ručne – nové funkcie preložené esbuildom z `node_modules` (závislosť vitestu) a vložené, overené vykreslením cez `window.SFZ`.

## 2026-11-06 – v1.6.0

**Čo sa urobilo**
- Brand book v repozitári a v artefakte SFZ Design System zjednotený (#2).
- Komponenty Accordion, ProgressBar a nové ikony z #1 (autor Cyril Janoško) dokončené a zlúčené v #3: výplň ProgressBar `brand-blue-ink` (tmavá téma 1,99 → 4,84 : 1), komponenty v zozname v brand booku a README.
- Artefakt SFZ Design System aktualizovaný: Accordion, ProgressBar, bundle, typy, zdroje a brand book; zhoda s `main` overená porovnaním súborov.
- Vydanie v1.6.0 cez GitHub Releases.

**Čo treba vedieť**
- Aplikácia Rozvoj klubu môže prejsť na balík `^1.6.0` a zrušiť vlastné kópie Accordion a ProgressBar.

## 2026-10-28 – Accordion, ProgressBar, nové ikony

**Čo sa urobilo**
- Pridané `Accordion` / `AccordionItem`, `ProgressBar` a ikony `map`, `map-pin`, `compass`, `book-open`, `star` – v `components/src`, `index.d.ts`, `bundle.js` aj `bundle.css`.
- Dokumentácia v `components/docs`, náhľady v `docs/artefakt/components`, pregenerované `docs/ukazky/index.html`, testy vykreslenia a správania.

**Čo treba vedieť**
- Podnet: aplikácia Rozvoj klubu (redesign na SFZ Design System) ich mala dočasne vo vlastnej vrstve; po vydaní verzie ich prevezme z balíka.
- `bundle.js` je stále udržiavaný ručne – zmeny prenesené ručne a overené parsovaním.

**Ďalej**
- Vydať verziu (minor) cez GitHub Releases.

## 2026-10-22 (večer) – v1.5.1, premenovanie repozitára

**Čo sa urobilo**
- v1.5.0 zverejnená cez GitHub Releases.
- Repozitár premenovaný na `sfz-design-system`; prepnutý `origin` a prepísané odkazy (README, `package.json`, `CLAUDE.md`, skill `sfz-prezentacia`, návod na prenos) aj README v artefakte SFZ Design System.

**Čo treba vedieť**
- Staré adresy `design-system-sfz` GitHub presmerúva, kým niekto nevytvorí repozitár so starým názvom.
- Publikovanie do GitHub Packages po premenovaní overí až najbližší release.
- Skill `sfz-prezentacia` uložený v konte Claude treba aktualizovať (nový odkaz na repozitár).
- v1.5.1: tag sa vytvára cez GitHub Releases (push tagov z prostredia Claude neprechádza).

## 2026-10-22 – v1.5.0

**Čo sa urobilo**
- `danger-solid` (#dc1a21) pre plné červené tlačidlo a odznak – WCAG AA; `brand-red` ostáva pre značku.
- `docs/ukazky/index.html`: ukážky všetkých webových komponentov (generované z náhľadov artefaktu, lokálny React), overené na 390 a 1280 px v oboch témach.
- ESLint (TS, React, Hooks, jsx-a11y) – opravené nálezy (`any`, výraz ako príkaz, `role="presentation"` na pozadí dialógov; zmena prenesená aj do `bundle.js`).
- GitHub Actions CI a publikovanie do GitHub Packages; balík premenovaný na `@slovensky-futbalovy-zvaz/design-system`.
- QR generátor s lokálnou kópiou knižnice.

**Čo treba vedieť**
- `bundle.js` nemá v repozitári build skript; zmeny v `components/src` treba preniesť do bundla ručne (alebo doplniť build, napr. esbuild).
- GitHub Packages vyžaduje token s `read:packages` aj pre verejný balík.

**Čo nefungovalo a prečo**
- Ročníkové logá sa nedajú spoľahlivo generovať pre ľubovoľný rok: ročník je v písme, ktoré v podkladoch nemáme (porovnané s BauPro z manuálu – iný tvar aj hrúbka); k dispozícii sú len číslice 0, 2, 3, 4.

## 2026-10-21 (večer) – v1.4.0

**Čo sa urobilo**
- Generátor QR kódu SFZ (`tools/qr/`): jeden renderer `sfz-qr.js` pre prehliadač aj Node (cez `vm`), logo A vkladané bez úprav z `brand/` (`npm run build:qr-logo`), tvar kruh/štvorec, modrá/čierna.
- Vzory z prezentácie pre Fakultu ekonomiky a manažmentu SPU v Nitre: zvislá časová os, čísla s rozpisom, karta „Lekcia“, záver s QR kódom; šablóny 08 a 09.
- Pravidlo nedeliteľnej medzery do brand booku a skillu.

**Čo treba vedieť**
- Čitateľnosť QR overená dekóderom ZXing (zxing-cpp) pri 150 – 1024 px; dlhé odkazy (~100 znakov) pri malej veľkosti a natočení zlyhávajú občas → v dokumentácii odporúčanie skracovať odkazy, min. 280 px na slajde / 3 cm v tlači. OpenCV QRCodeDetector okrúhle body nečíta (nie je cieľový dekodér).
- Webový nástroj načítava `qrcode-generator` z cdnjs (pinovaná 1.4.4); bez internetu funguje len `npm run qr`.

**Ďalej**
- QR kód SFZ (kruh, odkaz na LinkedIn) nasadený ako PNG na záverečný slajd prezentácie pre Fakultu ekonomiky a manažmentu SPU v Nitre; overený ZXing pri 200 – 1024 px.
- v1.3.1 a v1.4.0 tagy overené proti commitom.

**Čo nefungovalo a prečo**
- Úložisko assetov artefaktu odstránilo z nahraného SVG vložené logo (sanitizácia `href` s data URI); v artefakte je preto náhľad QR ako PNG a dokumentácia odporúča PNG pre takéto systémy.
- Pri polomere bodu 0,43 modulu zlyhávali dlhé odkazy častejšie; zväčšené na 0,46.

## 2026-10-21

**Čo sa urobilo**
- v1.0.0 – v1.2.0: tokeny, React komponenty, logá, šablóny slajdov, skill `sfz-prezentacia`, zdroje artefaktu a návod na prenos do firemného konta.
- v1.3.0: modrý pás v hlavičke obsahového slajdu a vzor `LinkList` (zoznam s linkou namiesto klasických odrážok) podľa spätnej väzby na prezentáciu „Digitalizácia slovenského futbalu“ (Fakulta ekonomiky a manažmentu SPU v Nitre, 22. 10. 2026). Nové tokeny `slide-band`, `slide-list-title`, `slide-list-text`, `slide-band-height`.
- Repozitár prepnutý na public; pridané podmienky použitia `LICENSE.md` (zamestnanci a zmluvní partneri SFZ, ostatní len so súhlasom; kontakt o***@futbalsfz.sk).
- Tagy v1.0.0 – v1.3.0 vytvorené cez GitHub Releases a overené proti commitom.

**Čo treba vedieť**
- Artefakt SFZ Design System na claude.ai je synchronizovaný s v1.3.0 (LinkList, SlideContent s pásom, tokeny). Podmienky použitia sa artefaktu netýkajú.
- Push tagov z prostredia Claude cez proxy neprechádza; tagy sa robia cez Releases.

**Čo nefungovalo a prečo**
- `import.meta.url` v testoch pod jsdom – nahradené `process.cwd()`.
- Biela na `brand-red` má 4,41 : 1, nie 4,6 : 1, ako uvádzal pôvodný text; otvorené rozhodnutie `danger-solid` v `NEXT.md`.
