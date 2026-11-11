# ChoroplethMap

Kartogram: kraje, okresy alebo ObFZ vyfarbené podľa hodnoty – hráči na obyvateľa, počet klubov, návštevnosť.

- Sekvenčná škála `chart-seq-1` až `chart-seq-5` v 5 pásmach s okrúhlymi hranicami; pod mapou stupnica s popisom oboch koncov. Odchýlka od priemeru SR = rozbiehavá škála `chart-div-*`.
- Vždy prepočítajte na obyvateľa, plochu alebo počet klubov – inak mapa ukáže len veľkosť regiónu.
- Hranice regiónov 1,5 px `surface`, nad výplňou len rieky (`map-water`) a názvy; cesty a podrobnosti podkladu skryte.
- Hodnota v strede regiónu `ink` s obrysom `surface` (číta sa na svetlej aj tmavej výplni); pri prejdení myšou obrys `ink` a bublina s názvom a hodnotou.
- Malé regióny (mestské okresy) sa na mape strácajú – pridajte `BarChart` alebo tabuľku s rovnakými údajmi.
