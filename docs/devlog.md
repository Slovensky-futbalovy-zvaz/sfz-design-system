# Devlog

Pracovný denník repozitára. Najnovší záznam hore. E‑maily, tokeny a ID sú v zápisoch maskované.

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
