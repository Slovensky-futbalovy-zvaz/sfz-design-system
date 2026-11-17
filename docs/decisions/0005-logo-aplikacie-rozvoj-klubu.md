# ADR 0005 – Logo aplikácie Rozvoj klubu

- **Stav:** prijaté
- **Dátum:** 2026-11-17
- **Rozhodol:** Ján Letko

## Kontext

Webová aplikácia Rozvoj klubu (https://klub.futbalsfz.sk) dosiaľ v hlavičke používala logo SFZ variant D a vedľa neho názov aplikácie ako text. Logo SFZ nehovorí, o akú aplikáciu ide, a text vedľa neho sa na mobile nezmestí. Aplikácia potrebuje vlastné logo – v hlavičke, na prihlásení, vo favicone, na ikone telefónu a v prezentáciách.

V SFZ Design Manual 2024‑01 také logo nie je. Všetky súbory v `brand/logos/` sú dosiaľ kópie z manuálu. Manuál ale ukazuje vzor podznačky: „Vzdelávanie trénerov SFZ“ a „Grassroots program SFZ“ majú rovnakú skladbu – znak SFZ vľavo, názov v dvoch riadkoch riedkymi verzálkami a pod ním veľké „SFZ“, všetko v jednom reze písma.

Ján Letko vybral z návrhov A, B, C, samostatného znaku a ikony (porovnanie vo svetlej a tmavej téme, favicon, hlavička na 375 px) variant A, B a ikonu.

## Rozhodnutie

- Logo Rozvoj klubu je v `brand/logos/Rozvoj-klubu/` ako prvá skupina **mimo manuálu**. Je poskladané **z kriviek manuálu a písma jeho log** (Gill Sans), nič nie je prekreslené od oka:
  - znak SFZ a „SFZ“ z `Vzdelavanie-trenerov/` (čierna verzia; farebná má znak z farebnej verzie vrátane bieleho disku),
  - písmená R, O, Z, V, L z názvu „Vzdelávanie trénerov“, písmená K, U, B z podtitulu loga SFZ D – ten istý rez, prepočítaný na rovnakú výšku verzálok (10,17 vs. 4,78 jednotky),
  - písmo názvov podznačiek aj podtitulu loga SFZ je Gill Sans SemiBold – v PDF manuálu 2024 sú vložené Gill Sans Nova SemiBold a Bold (spolu s Bau Pro a Graphik) a sadzba Gill Sans SemiBold sa s krivkami log zhoduje (šírky V, O, R do 2 %),
  - písmeno J v logách manuálu nie je a vložená Gill Sans Nova SemiBold ho v podmnožine nemá; J je preto krivka z Gill Sans SemiBold (klasický rez dodávaný s macOS) v rovnakej výške verzálok – zostupuje pod účiarie ako v sadzbe.
- **A – podznačka:** presne skladba „Vzdelávanie trénerov SFZ“ – rovnaká veľkosť a pozícia názvu aj „SFZ“, len iný text. Oficiálne logo (prihlásenie, prezentácie, tlač, e-maily).
- **B – kompaktný:** znak a názov v dvoch riadkoch, väčší (×2,2) a bez „SFZ“, box tesne okolo znaku. Len pre hlavičku webovej aplikácie: pri výške 36 px majú verzálky ≈ 11 px, pri A by mali ≈ 4 px. Príslušnosť k SFZ nesie znak.
- **Ikona:** biely znak (podľa bielej verzie z manuálu – štít obrysom, kríž a trojvršie) na štvorci `brand-blue` so zaoblením 22,5 %. Favicon a ikona na ploche telefónu.
- Každý variant ako ostatné skupiny: farebný, biely, čierny; SVG + PNG; README s ochrannou zónou a minimálnou veľkosťou.
- Pravidlo „logá sú kópie z manuálu“ (CLAUDE.md, brand book) platí ďalej; výnimkou je len skupina `Rozvoj-klubu` podľa tohto ADR. Ďalšie logo aplikácie sa skladá rovnako a má vlastné ADR.

## Dôsledky

- Aplikácia Rozvoj klubu berie logo z balíka (`brand/logos/Rozvoj-klubu/`) rovnako ako dnes logo SFZ; po vydaní novej verzie sa v nej nahradí logo v hlavičke, na prihlásení, favicon a ikona.
- J je z klasického Gill Sans, nie z Gill Sans Nova; rozdiel je do 1 – 2 %. Keď bude k dispozícii Gill Sans Nova SemiBold (licencia SFZ / grafik), J sa nahradí jej krivkou (`NEXT.md`). Krivka jedného znaku z písma dodávaného so systémom je v logu bežná prax, licenčné podmienky Gill Sans (Monotype) ale nikto z nás neoveril – rieši to aj náhrada za Gill Sans Nova s licenciou SFZ.
- Logo neprešlo schválením marketingu SFZ ako vlastník manuálu; ak ho bude chcieť do manuálu, nahradí sa jeho verziou.
- Biely disk vo farebnom znaku (ako v originále) je na `surface-raised` viditeľný ako biely kruh – rovnako ako pri ostatných podznačkách.

## Zamietnuté alternatívy a prečo

- **Variant C (vertikálny: znak, názov, „SFZ“ pod sebou):** aplikácia nemá úzky formát, kde by ho potrebovala; doplní sa, keď vznikne potreba.
- **Samostatný farebný znak ako favicon:** je to favicon všetkých webov SFZ, aplikáciu neodlíši; pri 16 px sa farebný štít zlieva.
- **Znak a názov ako živý text písmom aplikácie (SF Pro):** čitateľné, ale nie je to logo – v e-mailoch, PDF a na iných zariadeniach sa písmo zmení.
- **J odvodené z U (pravý ťah a spodný oblúk):** prvá verzia; Ján ho zamietol – nezodpovedalo písmu (Gill Sans má J pod účiarím).
- **Nový tvar alebo monogram „RK“:** manuál nepozná značky mimo znaku SFZ; kreslenie nového tvaru odporuje pravidlu „logo nikdy nekresliť“.
