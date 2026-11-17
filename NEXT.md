# NEXT – otvorené body

Stav k 22. 10. 2026 (v1.5.0). Pred tvrdením, že bod je otvorený, overte `git log`.

## Rozhodnúť
- [ ] **Podmienky použitia (`LICENSE.md`)**: dať na kontrolu právnemu oddeleniu SFZ, najmä vymedzenie „zmluvného partnera“.

## Doplniť
- [ ] **Ročníkové logá generátorom pre ľubovoľný rok** (Futbalista roka, Grassroots Gala, aj čierne a biele): ročník je text v písme, ktoré nie je v podkladoch (nie je to BauPro z manuálu; zo súborov 2023/2024 máme len číslice 0, 2, 3, 4). Potrebujeme od grafika názov a súbor písma ročníka alebo číslice 0 – 9 v krivkách a schválenie čiernej a bielej verzie; potom generátor `npm run rocnik`.
  - 17. 11. 2026: číslice ročníka **nie sú Gill Sans Nova** (porovnaných 29 rezov, ani klasický Gill Sans) ani písmo názvov podznačiek. Podľa podmnožín písiem vložených v PDF manuálu 2024 je to takmer iste **Graphik** (Commercial Type): Graphik Regular obsahuje práve číslice 0, 2, 3, 4, Graphik Black písmená A G L O R S T („GRASSROOTS GALA“), Graphik Medium a Bold písmená „TURNAJ“ a „REGIONÁLNY“. Krivkami overiť nejde, kým nemáme font Graphik – vyžiadať od Codes (autor manuálu) spolu s licenciou.
- [ ] Build skript pre `components/bundle.js` (napr. esbuild) – dnes sa zmeny v `components/src` prenášajú do bundla ručne.

## Logo Rozvoj klubu (ADR 0005)
- [x] **Písmeno J** v logu Rozvoj klubu je z Gill Sans Nova SemiBold – písma log manuálu (17. 11. 2026).
- [x] Licencia Gill Sans Nova – potvrdil Ján Letko 17. 11. 2026 (SFZ, manuál od Codes); fonty v `brand/fonts/Gill-Sans-Nova/`.
- [ ] Ukázať logo marketingu SFZ (vlastník manuálu) – ak ho prevezme do manuálu, nahradiť jeho verziou.

## Synchronizácia s artefaktom
- [ ] Zmeny tokenov a komponentov robiť tu; do artefaktu SFZ Design System ich prenášať pri vydaní novej verzie.
