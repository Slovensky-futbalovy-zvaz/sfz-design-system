# DivergingBarChart

Rozbiehavý pruhový graf na odchýlku od priemeru, cieľa alebo nuly: návštevnosť oproti priemeru SR, góly oproti očakávaniu, rozpočet oproti plánu.

- Nad = `chart-div-pos-2` (modrá), pod = `chart-div-neg-2` (červená). Stred / nula je čiara `border-strong` 1,5 px.
- Hodnoty so znamienkom „+18 %“, „−6 %“ (pravé mínus U+2212) pri konci pruhu; zaoblený je len vonkajší koniec.
- Zoraďte od najväčšej kladnej po najväčšiu zápornú odchýlku. Os symetrická okolo nuly.
- Legenda „Nad priemerom / Pod priemerom“ – smer nesmie byť len vo farbe.
- Pre jemnejšie odstupňovanie (mapa, heatmapa) použite aj `chart-div-pos-1`, `chart-div-mid`, `chart-div-neg-1`.
