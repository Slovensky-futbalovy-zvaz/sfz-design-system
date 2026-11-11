# RouteMap

Trasa na mapovom podklade: cesta na zápas, delegácia rozhodcov, vzdialenosť klubu od štadióna.

- Trasa 4 px `chart-1` so 4 px okrajom `surface` po oboch stranách (vynikne nad cestami podkladu). Náhradná trasa 3 px `chart-4` čiarkovane.
- Štart prázdny krúžok s okrajom `chart-1`, cieľ plný krúžok `chart-1`. Červenú nepoužívajte – trasa nie je chyba.
- Vzdialenosť a čas v štítku na trase (`surface`, tieň, tučne, `tabular-nums`); pod mapou súhrn: vzdialenosť, čas jazdy, cestovné.
- Mapa sa po načítaní priblíži tak, aby bola vidieť celá trasa s okrajom 40 px.
- Výpočet trasy (OSRM, Google Directions…) je vecou aplikácie; vzor rieši len vzhľad.
