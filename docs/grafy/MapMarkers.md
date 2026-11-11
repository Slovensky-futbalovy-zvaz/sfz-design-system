# MapMarkers

Body na mapovom podklade: kluby, ihriská, štadióny, sídla ObFZ. Pri oddialení sa body spájajú do zhlukov, po kliknutí sa otvorí detail.

- Bod 12 px s 2 px okrajom `surface`. Druh miesta nesie tvar aj farba: klub krúžok `chart-1`, ihrisko štvorec `chart-2`. Najviac 3 druhy.
- Zhluk: krúžok `chart-1` s počtom (`on-brand`, tučne), veľkosť v 2 – 3 krokoch podľa počtu (32 / 40 px) a svetlejší lem. Klik priblíži.
- Vybraný bod je väčší (18 px) s lemom; detail v bubline `surface` s `shadow-float` a `radius-md`: názov `subheadline` tučne, údaje `footnote`, odkaz `brand-blue-ink`. Na mobile namiesto bubliny `BottomSheet`.
- Cieľ pre prst aspoň 44 px aj pri malom bode; ovládanie priblíženia vpravo hore, atribúcia podkladu vpravo dole (povinná pri OSM).
- Mapa má vždy alternatívu: zoznam miest (`Table` alebo `SearchResults`) pod mapou alebo na prepínači „Mapa / Zoznam“.
