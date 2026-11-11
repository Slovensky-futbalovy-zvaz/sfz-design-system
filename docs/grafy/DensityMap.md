# DensityMap

Hustota na mapovom podklade: kde bývajú hráči, kde sa hrá najviac zápasov, odkiaľ chodia diváci. Ukazuje sústredenie bez presných bodov.

- Farby sekvenčnej škály `chart-seq-2` až `chart-seq-5` s krytím ~85 %, vo svetlej téme tmavšie = viac, v tmavej svetlejšie = viac (tokeny to riešia samy). Stupnica „menej – viac“ pod mapou.
- Polomer rozmazania 30 – 40 px; názvy miest nad vrstvou hustoty.
- Osobné údaje (adresy hráčov) zobrazujte len ako hustotu, nikdy body – a len pri oddialení. Pri priblížení prepnite na `MapMarkers` s verejnými miestami (kluby, ihriská).
- Hustota ukazuje kde, nie koľko: presné počty patria do `ChoroplethMap` alebo tabuľky.
