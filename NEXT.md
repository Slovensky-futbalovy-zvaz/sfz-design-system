# NEXT – otvorené body

Stav k 22. 10. 2026 (v1.5.0). Pred tvrdením, že bod je otvorený, overte `git log`.

## Rozhodnúť
- [ ] **Podmienky použitia (`LICENSE.md`)**: dať na kontrolu právnemu oddeleniu SFZ. Od 17. 11. 2026 (Ján Letko) bez súhlasu SFZ smú obsah používať a upravovať len zamestnanci SFZ; zmluvní partneri potrebujú písomný súhlas.

## Doplniť
- [ ] **Ročníkové logá generátorom pre ľubovoľný rok** (Futbalista roka, Grassroots Gala, aj čierne a biele): ročník je text v písme, ktoré nie je v podkladoch (nie je to BauPro z manuálu; zo súborov 2023/2024 máme len číslice 0, 2, 3, 4). Potrebujeme od grafika názov a súbor písma ročníka alebo číslice 0 – 9 v krivkách a schválenie čiernej a bielej verzie; potom generátor `npm run rocnik`.
- [ ] Build skript pre `components/bundle.js` (napr. esbuild) – dnes sa zmeny v `components/src` prenášajú do bundla ručne.

## Synchronizácia s artefaktom
- [ ] Zmeny tokenov a komponentov robiť tu; do artefaktu SFZ Design System ich prenášať pri vydaní novej verzie.
