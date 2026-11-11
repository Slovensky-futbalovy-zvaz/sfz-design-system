# KpiCard

Karta kľúčového ukazovateľa pre dashboardy aplikácií: jedno číslo, zmena a minigraf. Webová obdoba vzoru `StatTile` zo slajdov.

- Popis `footnote` v `ink-muted`, číslo `title-1` s `tabular-nums`, pod ním zmena so šípkou, slovom a obdobím („+3,2 % oproti minulej sezóne“).
- Farba zmeny podľa toho, či je dobrá, nie podľa smeru: rast hráčov `success-ink`, pokles zápasov `danger-ink`, pokles neuhradených faktúr `success-ink`. Stav vždy aj šípkou a textom.
- Minigraf 40 px vysoký, čiara `chart-1` 2 px a jemná výplň s krytím 12 %, bez osí a popisov; ukazuje len smer posledných 12 období.
- Karta `surface-raised`, rádius `radius-lg`, odstup `space-4`. Na mobile pod sebou, od 640 px tri vedľa seba.
- Najviac 4 karty v rade; viac ukazovateľov = tabuľka.
