# ScatterChart

Bodový graf na vzťah dvoch veličín: odohrané minúty a góly, vek a počet zápasov, rozpočet klubu a počet družstiev.

- Jedna séria `chart-1` s krytím 75 % (prekrývajúce sa body ostanú čitateľné) a 1,5 px okrajom farby karty. Jedného hráča alebo klub zvýraznite `chart-3` s priamym popisom.
- Najviac 3 skupiny (`chart-1`, `chart-2`, `chart-3`); každý bod môže stáť pri každom, takže viac skupín splynie – použite malé grafy vedľa seba.
- Bod 10 px (polomer 5), pri prejdení myšou plná farba, obrys `ink` a bublina s menom a oboma hodnotami.
- Priemer oboch osí čiarkovane `chart-4` – rozdelí graf na štvrtiny („veľa minút, málo gólov“). Názvy osí so šípkou na konci osí.
- Nad ~5 000 bodov kreslite cez canvas (ECharts) alebo prejdite na `Heatmap` (počty v mriežke).
