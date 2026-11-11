# ADR 0004 – Farby grafov podľa úlohy

- **Stav:** navrhnuté
- **Dátum:** 2026-11-11
- **Rozhodol:** Ján Letko

## Kontext

Do verzie 1.7.1 mal systém štyri farby grafov v poradí modrá (`chart-1`), červená (`chart-2`), sivá (`chart-3`) a svetlomodrá (`chart-4`). Interný *Katalóg vizualizácií* (170 typov grafov) potreboval viac: škálu pre heatmapy a škálu pre odchýlky od priemeru. Kontrola paliet ukázala tri problémy:

- Svetlomodrá `#7a9cf5` má na karte `surface-raised` kontrast 2,46 : 1, pod hranicou 3 : 1 pre grafické objekty (WCAG 1.4.11).
- `chart-1` v tmavej téme (`#1450df` na `#161b26`) je pod 3 : 1.
- Červená ako druhá séria odporuje pravidlu „červená je signál, nie dekorácia“: v každom grafe s dvoma sériami by bola červená.

Sivá nemá sýtosť, takže nenesie identitu série, len kontext.

## Rozhodnutie

Farby grafov sa delia podľa úlohy:

- **Identita série:** `chart-1` modrá, `chart-2` svetlejšia modrá (`#6189ee`, tmavá `#7a9cf5`), `chart-3` červená SFZ. Najviac tri série. Poradie a kroky sú overené na rozlíšenie pri protanopii a deuteranopii (ΔE OKLab ≥ 8) aj pri bežnom videní (ΔE ≥ 15) a na kontrast ≥ 3 : 1 na `surface` aj `surface-raised` v oboch témach.
- **Kontext:** `chart-4` sivá – priemer, cieľ, „Ostatné“.
- **Množstvo:** sekvenčná modrá škála `chart-seq-1` až `chart-seq-5`; v tmavej téme otočená (viac = svetlejšie).
- **Smer:** rozbiehavá škála `chart-div-neg-2` … `chart-div-pos-2`, červená pod a modrá nad sivým stredom.

Mapový podklad má vlastné tlmené tokeny `map-land`, `map-water`, `map-road`, `map-boundary`; údaje na mape (body, trasy, regióny, hustota) používajú rovnaké farby grafov. Značky `chart-1` a `chart-3` majú na pevnine aj vode ≥ 3 : 1.

Grafy a mapy nie sú React komponenty v bundli, ale vzory v `docs/grafy/` s náhľadmi; knižnice (ECharts, Recharts…) čítajú tokeny z CSS premenných.

## Dôsledky

- **Zmena významu tokenov:** kto používal `chart-2` ako červenú, dostane svetlomodrú; červená je teraz `chart-3`, sivá `chart-4`. V komponentoch systému sa `chart-*` nepoužívajú, zmena sa týka len aplikácií – v CHANGELOG je popísaná ako zmena.
- V tmavej téme mierne presahuje odporúčané pásmo svetlosti `chart-2` (`#7a9cf5`, L 0,71); je to existujúca `brand-blue-ink` a ostatné kontroly prechádzajú.
- Svetlé kroky sekvenčnej škály (1 – 2) sú blízko pozadia zámerne (málo = takmer nič); poradové škály používajú kroky 3 – 5.
- Kontrast a poradie stráži `tests/tokens.test.ts`.
