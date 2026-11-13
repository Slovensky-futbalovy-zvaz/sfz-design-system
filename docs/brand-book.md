# SFZ Design System – brand book

Design systém Slovenského futbalového zväzu pre prezentácie, dokumenty a webové aplikácie SFZ (ISSF, sportnet.online, ClubUp, futbalnet). Farby a logá všetkých 16 značiek preberá presne z **SFZ Design Manual 2024‑01**; typografiu, mriežku, rádiusy a skladbu obrazovky preberá z **Apple Human Interface Guidelines** (SF Pro, 8‑bodová mriežka, zoskupené karty, hairline linky, Tab Bar). Výsledok má pôsobiť ako natívna aplikácia na iPhone a iPade: veľa vzduchu, jedna modrá, jeden červený signál, žiadne gradienty.

## Ako to má pôsobiť

- **Jedna farba vládne.** `brand-blue` je identita; na slajde je buď celoplošná (titul, sekcia, záver), alebo sa objaví iba v jednom prvku (číslo, linka, chip, primárne tlačidlo). Nikdy obe naraz.
- **Červená je signál, nie dekorácia.** `brand-red` = `danger`. Najviac raz na obrazovku: zvýraznené číslo, neuhradená faktúra, nevratná akcia. Celoplošná červená je zakázaná.
- **Svetlo je predvolené.** Bežné obrazovky stoja na `surface`, karty na `surface-raised`. Tmavá téma je hlboká modročierna, nie invertovaná svetlá; aplikácie ju zapínajú podľa systému (`prefers-color-scheme`) a atribútom `data-theme="dark"`.
- **Text je krátky a ľudský.** Slovenčina, 1. osoba množného čísla pri SFZ („zaviedli sme“), 2. osoba pri používateľovi („uvidíte“). Žiadne „implementácia“, „fulltime“, „rollout“. Tlačidlá sú slovesá („Uložiť“, „Odoslať podanie“). Čísla s medzerou ako oddeľovačom tisícov (47 957 400 €), desatinná čiarka, dátumy 21. 10. 2026. Medzi číslom a jednotkou (10 399 €, 78 %, 9,57 TB), v skupinách tisícov (44 000) a v dátumoch (1. 7. 2012) je nedeliteľná medzera (U+00A0, `&nbsp;`), aby sa nerozdelili na konci riadku.
- **Žiadne emoji, žiadne klipartové ikony.** Na webe Lucide ikony z bundla (`Icon`), na Macu SF Symbols.

## Farby

- Pozadie: `surface`; karty `surface-raised`; zvýraznená karta `brand-blue-tint`. Text `ink`, sekundárny `ink-muted`.
- Modrý text a ikony (odkazy, sekundárne a textové tlačidlá, aktívna záložka, vybraný chip) vždy `brand-blue-ink`, nikdy `brand-blue`: v tmavej téme je `brand-blue` na tmavom pozadí nečitateľná (3:1). `brand-blue` ostáva pre plochy a výplne (primárne tlačidlo, checkbox, vybraný deň).
- Modré plochy: `surface-brand` + `on-brand` / `on-brand-muted`, logo biely variant.
- Linky a okraje: `hairline` / `border` 1 px pre deliace čiary a karty; okraj nesúci význam `border-strong` (≥ 3:1) – vstupné polia, checkbox, krokovač.
- Stavy: `success`, `warning`, `danger`, `info` s podkladmi `*-tint` a textom `*-ink`. Plné červené plochy s bielym textom (tlačidlo `danger`, odznak) používajú `danger-solid` (#dc1a21, 4,98 : 1); `brand-red` (#ec1c24) s bielym textom len pri veľkom alebo tučnom písme. Stav vždy pomenujte slovom alebo ikonou; `success` a `danger` sa líšia svetlosťou aj odtieňom.
- Grafy: série `chart-1` (modrá), `chart-2` (svetlejšia modrá) a `chart-3` (červená, najviac jedna), kontext `chart-4` (sivá: priemer, „Ostatné“); množstvo sekvenčná škála `chart-seq-1`–`5`, odchýlka rozbiehavá `chart-div-*` (červená pod, modrá nad). Podrobne v časti Grafy.
- Farby programov (`gold`, `program-green`, `program-sky`, `program-yellow`, `program-cyan`) patria len k logám daných programov (Futbalista roka, Sieň slávy, Regionálny turnaj…), nie do UI.
- Kontrast: `ink`/`surface` 18:1, `ink-muted` 5.6:1 a viac, `on-brand`/`brand-blue` 6.5:1, `on-brand`/`brand-red` 4.4:1 (len veľký alebo tučný text ≥ 19 px), `on-brand`/`danger-solid` 4.98:1 (plné červené tlačidlo a odznak), `brand-blue-ink` 5.6–7.2:1 na všetkých povrchoch a na `brand-blue-tint`, `border-strong` 3.3–4.0:1, všetky `*-ink`/`*-tint` ≥ 7:1, v oboch témach. Nedeľa v kalendári `danger-ink`.

## Typografia

- Rodina `sans` je systémové písmo Apple (SF Pro Display/Text); na Windows Segoe UI, na Androide Roboto. Žiadne webfonty sa nesťahujú – zámer, aby web vyzeral ako natívna aplikácia zariadenia. (Prezentácie exportované do PDF/PPTX používajú Inter / Inter Tight ako prenosnú náhradu.)
- Prezentácia (1920×1080): `slide-eyebrow` → `slide-h1` → `slide-body`, čísla `slide-stat`, zdroje `slide-caption`. Jeden slajd = jedna myšlienka.
- Dokument a web: `large-title` → `caption-2` sú presne Apple HIG (iOS Large). Bežný text `body` 17 px, nadpisy `title-1`/`title-2`.
- Web komponenty: `control` 17 px (tlačidlá, vstupy – 17 px zabráni zoomu Safari pri fokuse), `label` 13 px nad vstupom, `table-cell` 15 px, `tabbar` 10 px.
- Nadpisy záporný tracking, verzálkové štítky kladný. Čísla v stĺpcoch `font-variant-numeric: tabular-nums`.
- Zdôraznenie tučným rezom alebo `brand-blue`; nikdy podčiarknutie ani kurzíva.

## Rozloženie: mobile first

- Štýly píšte pre šírku 390 px, `min-width` media queries pridávajú stĺpce: `bp-sm` 640 (2 stĺpce kariet), `bp-md` 768 (TabBar → NavBar, Drawer → bočný panel, tabuľka z kariet na riadky), `bp-lg` 1024 (max. šírka 960 px), `bp-xl` 1280 (tabuľkové aplikácie 1200 px).
- Okraje: `space-4` (16 px) na mobile s `max(16px, env(safe-area-inset-*))`, `space-6` od 1024 px. Obsah nad TabBarom potrebuje spodný odstup `tabbar-height` + `safe-area-inset-bottom`.
- Dotykové ciele min. `touch-target` 44 px. Zoskupené zoznamy ako iOS Settings: `surface-raised`, `radius-md`, riadky oddelené `hairline`.
- Rádiusy: `radius-xs` 6 (checkbox), `radius-sm` 8 (chip), `radius-md` 14 (tlačidlá, vstupy), `radius-lg` 24 (karty), `radius-xl` 40 (veľké panely), `radius-pill`.
- Tiene takmer nepoužívame; hierarchiu robí `surface-raised`. `shadow-float` pre plávajúce prvky, `shadow-modal` pre dialógy.
- Slajd: okraje 128 px zľava/sprava, päta 64 px od spodku, logo D v päte 56 px. Každý slajd má v päte autora a dátum verzie v tvare RRRR-MM: obsahový slajd druhým riadkom „Autor: Ján Letko, 2026-11“, titul a záver za menom autora („Ján Letko · 2026-11“). Dátum verzie je mesiac poslednej úpravy prezentácie, nie „stav k“ dát. Obsahový slajd má hore modrý pás `slide-band-height` (104 px) s textom `slide-band`; obsah začína 80 px pod ním.

## Komponenty pre web (React)

Bundle `components/bundle.js` vystavuje `window.SFZ` (React 18, bez ďalších závislostí); štýly v `components/bundle.css` používajú výhradne CSS premenné z `tokens.css`; typy v `components/index.d.ts`; zdrojové `.tsx` v `components/src/`.

- **Ovládacie prvky:** `Button`, `IconButton`
- **Formuláre:** `Input`, `Textarea`, `Select`, `Checkbox`, `Toggle` (všetky s `label`, `hint`, `error`; obal `Field`)
- **Obsah:** `Card`, `Frame` (rám bloku obsahu), `Badge`, `Chip`, `Avatar`, `Accordion`, `Icon`
- **Spätná väzba:** `Alert`, `Toast`, `Skeleton`, `EmptyState`, `ProgressBar`
- **Navigácia:** `Tabs`, `SectionTabs` (podstránky sekcie ako kapsule), `NavBar` (desktop), `TabBar` (mobil), `Stepper`, `MenuSheet` / `MenuPanel` (celé menu), `Breadcrumbs`, `SearchField` a `SearchResults` (hľadanie v hlavičke)
- **Prekrytia:** `Modal` (na mobile sheet zdola), `Drawer`, `BottomSheet` (mobil, nad TabBarom)
- **Dáta:** `Table`, `DataTable` (hľadanie, filter, zoradenie, stránkovanie), `Calendar`

Pravidlá: jedno `primary` tlačidlo na obrazovku; stav vždy slovom + farbou; popisok nad vstupom; chyby pri poli, nie v Toaste; `NavBar` + `TabBar` sú jedna navigácia v dvoch šírkach; tabuľky sa na mobile skladajú do kariet. Každý komponent má README s props a do/don't. Živé ukážky všetkých komponentov mimo artefaktu: `docs/ukazky/index.html` v repozitári; balík `@slovensky-futbalovy-zvaz/design-system` v GitHub Packages.

### Použitie v Next.js (App Router)

1. Skopírujte `components/src/*.tsx` do `components/ui/` projektu (odporúčané – typované, tree‑shaking, bez globálu). Alebo načítajte `bundle.js` ako `<Script>` a používajte `window.SFZ`.
2. `tokens.css` a `components/bundle.css` importujte v `app/layout.tsx`; na `<html>` nastavte `data-theme` podľa používateľa (bez atribútu platí `prefers-color-scheme`).
3. Logá: stiahnite SVG z assetov do `public/brand/` a vkladajte cez `next/image` alebo `<img>`; biele varianty na modrej, farebné na bielej.
4. Ikony: `Icon` z bundla; chýbajúcu ikonu doplňte z lucide.dev do `icons.tsx`.
5. Layout: `NavBar` + `TabBar` v `layout.tsx`, obsah s `padding-bottom` pre TabBar; `Toast` región raz v layoute s kontextom.

## Grafy

Vzory (nie React komponenty, platia pre ECharts, Recharts aj vlastné SVG): `BarChart` (poradie, Top N), `LineChart` (vývoj v čase), `StackedBarChart` (podiely), `DonutChart` (jeden podiel), `RadarChart` (profil hráča), `Heatmap` (mriežka hodnôt), `DivergingBarChart` (odchýlka od priemeru), `KpiCard` (číslo, zmena, minigraf), `ScatterChart` (vzťah dvoch veličín), `SankeyChart` (toky, prestupy). Mapy: `MapMarkers` (kluby, ihriská, zhluky), `ChoroplethMap` (regióny podľa hodnoty, vždy prepočítanej na obyvateľa), `RouteMap` (cesta na zápas), `DensityMap` (hustota bez osobných údajov).

- Farba podľa úlohy: identita série `chart-1` → `chart-2` → `chart-3` v tomto poradí, najviac 3 série, viac = „Ostatné“ v `chart-4` alebo malé grafy vedľa seba. Farba patrí entite, nie poradiu.
- Jedna os y, nikdy dve. Tenké značky: pruh 20 px, čiara 2 px, bod ≥ 8 px; zaoblený len koniec s hodnotou (4 px); 2 px medzera medzi plochami.
- Graf v karte `surface-raised` s nadpisom `headline`, podnadpisom (čo, kde, kedy, jednotka) a zdrojom. Mriežka `hairline`, os `border-strong`, popisy `caption-1` v `ink-muted`; text nikdy vo farbe série.
- Legenda pri 2 a viac sériách vždy, priame popisy výberovo; pri prejdení myšou bublina s presnou hodnotou; `<svg role="img">` s `<title>` a tabuľka pre presné hodnoty.
- Mapový podklad je tlmený: pevnina `map-land`, voda `map-water`, cesty `map-road`, hranice `map-boundary` čiarkovane, názvy `ink-muted`; tmavá téma má vlastný tmavý podklad. Údaje nad ním vo farbách `chart-*`, ovládanie priblíženia vpravo hore, atribúcia vpravo dole, vždy aj zoznam bez mapy.
- Knižnice čítajú tokeny z CSS premenných (`getComputedStyle`), aby graf menil farby s témou; príklad témy pre ECharts a štýlu mapy pre MapLibre je v `docs/grafy/README.md` v repozitári.

## Prístupnosť

- Každý ovládací prvok má viditeľný fokus: `shadow-focus` (2 px odsadenie + 2 px `focus`).
- `IconButton` má povinný `label`; `Table` má `caption`; `Tabs` sú `role="tablist"` s klávesnicou; `Modal`/`Drawer` sú `aria-modal` a zatvárajú sa Esc.
- Text 4.5:1 (3:1 od 24 px) v oboch témach; stav nikdy len farbou.
- `prefers-reduced-motion` vypína animácie; prechody `duration-fast`/`duration-base` s `easing-standard`.
- Jazyk rozhrania `lang="sk"`, dátumy a čísla v slovenskom formáte.

## Logá a assety

- **Loga‑SFZ**: štyri varianty (A kruhový, B bez disku, C vertikálny, D horizontálny) × farebný/čierny/biely, SVG + PNG.
- Programy a projekty z manuálu, každý farebný/čierny/biely, SVG + PNG: **Narodny‑tim** (Sokoli, 30 rokov), **Regionalny‑turnaj**, **Skolsky‑pohar**, **Dajme‑spolu‑gol**, **Futbalista‑roka** (+ ročník 2023), **Grassroots‑gala** (+ ročníky 2023, 2024), **Konferencia‑sport‑a‑spolocnost** (A vertikálny, B horizontálny), **Sien‑slavy**, **Slovakia‑cup‑U18**, **Nadacia‑SFZ**, **Asociacia‑rozhodcov**, **Grassroots‑program**, **Konferencia‑SFZ**, **Vzdelavanie‑trenerov**.
- Vždy použite súbor zo systému; logo nikdy nekreslite ani neprefarbujte. Farebný variant iba na bielej alebo `surface-raised`; na modrej, fotografii a v tmavej téme biely; čierny do čiernobielej tlače. Ochranné zóny a farby sú v README každej skupiny.
- Ročníkové varianty (Futbalista roka, Grassroots Gala) treba každý rok doplniť z aktuálneho manuálu.

## QR kód

QR kód SFZ má okrúhle body, zaoblené rohové značky a v strede logo SFZ (variant A) na bielom kruhu; tvar kruh alebo štvorec, farba `brand-blue` alebo `ink`, pozadie vždy biele. Odkaz si zadá každý sám v generátore `tools/qr/index.html` v repozitári Slovensky-futbalovy-zvaz/sfz-design-system alebo cez `npm run qr`. Na modrej ploche len v bielej karte, na slajde aspoň 280 px, v tlači aspoň 3 cm; dlhé odkazy skráťte a kód pred použitím naskenujte.

## Komponenty pre slajdy

HTML vzory 1920×1080 (nie React): `SlideTitle`, `SlideSection`, `SlideContent` (s modrým pásom hore), `LinkList`, `LessonCard`, `StatTile`, `StatBreakdown`, `Timeline`, `TimelineVertical`, `QrCode`, `LogoLockup`. Na slajdoch nepoužívame klasické odrážky: zoznam je vždy `LinkList` – zvislá linka, tučný začiatok (`slide-list-title`) a vysvetlenie (`slide-list-text`). Karta a chip na slajde sú webové `Card` a `Chip` v mierke ×1,6 (rádius `radius-lg`, odstup `space-7`, text `slide-body`); pravidlá sú v ich README.
