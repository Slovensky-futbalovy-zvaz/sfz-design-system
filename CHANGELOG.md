# Changelog

Formát podľa [Keep a Changelog](https://keepachangelog.com/sk/1.1.0/), verzie podľa [SemVer](https://semver.org/lang/sk/).

## [Unreleased]

### Pridané
- `Accordion` a `AccordionItem`: zoskupené rozbaľovacie sekcie na natívnom `<details>` (bez JavaScriptu, prístupné), `defaultOpen`, podnadpis; dokumentácia, ukážka a testy.
- `ProgressBar`: ukazovateľ postupu (`role="progressbar"`, percentá orezané na 0 – 100, `valueText` pre čítačku, tón `brand` / `success`); dokumentácia, ukážka a testy.
- Ikony `map`, `map-pin`, `compass`, `book-open`, `star` (Lucide) v `Icon` aj v `bundle.js`.

## [1.5.1] – 2026-10-22

### Zmenené
- Repozitár premenovaný na `Slovensky-futbalovy-zvaz/sfz-design-system` (predtým `design-system-sfz`; GitHub staré adresy presmerúva). Aktualizované odkazy v README, `package.json`, `CLAUDE.md`, skille a návode na prenos. Názov npm balíka sa nemení.
- Ukážka titulného slajdu (`SlideTitle`): správny názov „Fakulta ekonomiky a manažmentu SPU v Nitre“.

## [1.5.0] – 2026-10-22

### Pridané
- Token `danger-solid` (#dc1a21) pre plné červené plochy s textom: biela na ňom 4,98 : 1 (WCAG AA aj pre bežný text). Používa ho `Button variant="danger"` a odznak v `TabBar`; test kontrastu.
- Ukážky komponentov `docs/ukazky/index.html` (vygenerované `npm run build:ukazky` z náhľadov artefaktu): všetky webové komponenty, svetlá a tmavá téma, mobile first, lokálny React 18.3.1 – funguje bez internetu.
- ESLint (TypeScript, React, React Hooks, jsx-a11y) v `npm run lint` a v `npm run check`.
- GitHub Actions: CI (`npm run check` na pull requesty a push do `main`) a publikovanie balíka do GitHub Packages pri releasi.
- Lokálna kópia `qrcode-generator` 1.4.4 v `tools/qr/vendor/` – generátor QR funguje bez internetu.

### Zmenené
- Balík premenovaný na `@slovensky-futbalovy-zvaz/design-system` (požiadavka GitHub Packages); pod starým menom ho možno inštalovať aliasom `@sfz/design-system@npm:@slovensky-futbalovy-zvaz/design-system`. README s návodom pre `.npmrc`.
- `Modal` a `Drawer`: pozadie s `role="presentation"` (prístupnosť); `DataTable` bez `any`; `Calendar` bez výrazu ako príkazu. Bez zmeny správania.
- Brand book, `on-brand` a `danger`: správne kontrasty (`brand-red` 4,41 : 1 len pre veľký text).

### Odstránené
- Závislosť `qrcode-generator` z `devDependencies` (nahradená lokálnou kópiou).

## [1.4.0] – 2026-10-21

### Pridané
- Generátor QR kódu SFZ `tools/qr/`: okrúhle body, zaoblené rohové značky, logo SFZ (A) v strede, tvar kruh (s dekoratívnym vzorom a obrysom) alebo štvorec, farba modrá alebo čierna. Webový nástroj `tools/qr/index.html` (mobile first, SVG aj PNG 2048 px) a príkaz `npm run qr`. Úroveň korekcie H; čitateľnosť overená dekóderom ZXing.
- Vzory slajdov `TimelineVertical` (zvislá časová os s krúžkami, šablóna `08-casova-os-zvisla.html`), `StatBreakdown` (čísla s rozpisom, `09-cisla-rozpis.html`), `LessonCard` (karta „Lekcia“) a `QrCode` – dokumentácia v `docs/prezentacie/`, náhľady v `docs/artefakt/components/`.
- Pravidlo nedeliteľnej medzery v číslach, jednotkách a dátumoch (brand book, skill `sfz-prezentacia`).
- Testy generátora QR (zhoda loga so súborom SFZ, determinizmus, varianty).
- Závislosť na vývoj `qrcode-generator` 1.4.4 (MIT).

### Zmenené
- Šablóna `03-obsah.html` má kartu „Lekcia“ a tri položky zoznamu; `07-zaver.html` má riadok LinkedIn a QR kód v bielej karte.
- Prehľad šablón: 9 šablón a odkaz na generátor QR; náhľady pregenerované.
- Skill `sfz-prezentacia`: zvislá os, čísla s rozpisom, lekcia, záver s QR kódom; QR kód do prezentácií a systémov, ktoré čistia SVG, vkladať ako PNG (logo by zo SVG zmizlo).

## [1.3.1] – 2026-10-21

### Pridané
- Podmienky použitia `LICENSE.md`: zamestnanci a zmluvní partneri SFZ môžu obsah používať na prácu pre SFZ, ostatní len s predchádzajúcim písomným súhlasom SFZ (žiadosti na office@futbalsfz.sk); logá ostávajú ochrannými známkami.
- Pracovný denník `docs/devlog.md`.

### Zmenené
- Repozitár je verejný: README (licencie, inštalácia z `#v1.3.1`), `package.json` (`SEE LICENSE IN LICENSE.md`) a návod na prenos do firemného konta zosúladené.
- `NEXT.md`: kontrola podmienok použitia a kandidáti na vzory slajdov v1.4.0.

## [1.3.0] – 2026-10-21

### Pridané
- Vzor slajdu `LinkList` – zoznam s linkou namiesto klasických odrážok: zvislá linka, tučný začiatok a vysvetlenie (`docs/prezentacie/LinkList.md`, náhľad v `docs/artefakt/components/LinkList/`, trieda `.linklist` v šablónach).
- Tokeny `slide-band`, `slide-list-title`, `slide-list-text` (typografia) a `slide-band-height` (104 px).

### Zmenené
- Obsahový slajd má hore modrý pás na celú šírku s bielym textom „Blok · téma“ namiesto modrého eyebrow (`SlideContent`, šablóny 03 – 06, trieda `.slide--content` a `.band`); náhľady šablón pregenerované.
- Brand book a skill `sfz-prezentacia`: pravidlá pre modrý pás a zákaz klasických odrážok.

### Zastarané
- `ul.bullets` v `slide.css` – používajte `.linklist`.

## [1.2.0] – 2026-10-21

### Pridané
- Skill pre Claude `docs/skills/sfz-prezentacia/SKILL.md`: prezentácie SFZ v Claude Slides so SFZ Design Systemom.
- Zdroje artefaktu `docs/artefakt/`: 32 živých náhľadov komponentov a obálky (odkazy na logá prepísané na `brand/logos/`) a mapovanie súborov na artefakt.
- Návod `docs/prenos-do-firemneho-konta.md`: obnova artefaktu a skillu v inom konte Claude z tohto repozitára.
- Test zdrojov artefaktu (úplnosť náhľadov, platné odkazy na logá, hlavička skillu).

## [1.1.0] – 2026-10-21

### Pridané
- Šablóny slajdov 1920×1080 v `templates/prezentacie/`: titul, predel bloku, obsahový slajd, kľúčové čísla, časová os, citát a karty, záver. Používajú `tokens.css` a logá z `brand/logos/`, zmenšujú sa podľa okna a tlačia sa do PDF v plnej veľkosti.
- Prehľad šablón `templates/prezentacie/index.html` (mobile first) a náhľady PNG.
- Test, že šablóny odkazujú len na existujúce súbory a nepoužívajú pevné farby.

## [1.0.0] – 2026-10-21

### Pridané
- Tokeny (`tokens/tokens.json`): farby SFZ z Design Manualu 2024‑01, svetlá a tmavá téma, stavové farby, typografia Apple HIG (prezentácia, dokument/web, komponenty), medzery, rádiusy, tiene, breakpointy, z‑index, animácie.
- Generátor `scripts/build-tokens.mjs` → `tokens/tokens.css` vrátane `prefers-color-scheme`.
- 25 React komponentov (`components/src/`), štýly `components/bundle.css`, typy `components/index.d.ts`, UMD bundle `components/bundle.js`.
- Dokumentácia komponentov (`components/docs/`), brand book (`docs/brand-book.md`), vzory slajdov (`docs/prezentacie/`).
- Logá 16 značiek z manuálu (SFZ A–D, Národný tím, 30 rokov NT, Slovakia Cup U18, Regionálny turnaj, Školský pohár, Dajme spolu gól, Grassroots program, Vzdelávanie trénerov, Asociácia rozhodcov, Nadácia SFZ, Futbalista roka + ročník, Grassroots Gala + ročníky, Sieň slávy, Konferencia SFZ, Konferencia Šport a spoločnosť A/B) vo farebnej, čiernej a bielej verzii, SVG + PNG.
- Testy (Vitest): integrita a kontrast tokenov v oboch témach, aktuálnosť `tokens.css`, render a správanie komponentov.

### Opravené (oproti verzii v artefakte z 21. 10. 2026 16:52)
- Tmavá téma: modrý text a ikony používajú nový token `brand-blue-ink` (kontrast 5,6–7,2 : 1 namiesto 2,3–3,0 : 1).
- `border-strong` zvýšený na ≥ 3 : 1 v oboch témach; okraj vstupných polí používa `border-strong`.
- Nedeľa v kalendári používa `danger-ink`.
- Brand book: opravený údaj o kontraste bielej na červenej SFZ (4,4 : 1, nie 4,6 : 1).
