# Heatmap

Teplotná mapa pre hodnoty v mriežke dvoch kategórií: dochádzka podľa kategórie a mesiaca, góly podľa minúty a kola, zápasy podľa dňa a hodiny.

- Sekvenčná škála `chart-seq-1` až `chart-seq-5`: jeden odtieň modrej, viac = výraznejšie. Vo svetlej téme tmavšie, v tmavej svetlejšie – tokeny to riešia samy.
- Hodnoty rozdeľte do 5 pásiem s okrúhlymi hranicami (napr. pod 60 %, 60 – 70 %, …, 90 % a viac). Pod mapou stupnica s popisom oboch koncov.
- Bunky s medzerou 2 px a rádiusom 4 px, pri prejdení myšou obrys `ink` a bublina s presnou hodnotou.
- Hodnota s významom „dobre – zle“ okolo stredu (odchýlka od priemeru) patrí na rozbiehavú škálu `chart-div-*`, nie na sekvenčnú.
- Pre poradové škály (fázy, vekové pásma) použite len kroky 3 – 5: kroky 1 a 2 sa strácajú na pozadí.
