# RadarChart

Radarový graf na profil hráča alebo družstva v 5 – 8 ukazovateľoch: góly, asistencie, prihrávky, súboje, zisky lopty.

- Najviac 2 profily: `chart-1` a `chart-2`, výplň s krytím 18 %, obrys 2 px. Tretí profil = druhý graf vedľa.
- Osi musia byť porovnateľné: percentily 0 – 100 alebo hodnoty prepočítané na rovnakú mierku. Mierku napíšte do podnadpisu.
- Kruhy mriežky na 25 / 50 / 75 / 100 v `hairline`, názvy osí `caption-1` v `ink-muted`.
- Body na vrcholoch 8 px s okrajom farby karty; pri prejdení myšou bublina s hodnotou.
- Pre presné porovnanie čísel pridajte tabuľku; radar ukazuje tvar, nie presné hodnoty.
