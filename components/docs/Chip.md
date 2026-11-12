# Chip

Klikateľný štítok pre filtre a vybrané hodnoty. `selected` pre aktívny filter (`aria-pressed`), `onRemove` pridá krížik.

- Výška 36 px, pill tvar. Na dotykovom zariadení (`pointer: coarse`) má chip neviditeľnú dotykovú plochu 44 px (`::after`), vzhľad sa nemení; krížik `onRemove` ostáva nad ňou. V riadku najviac jeden `selected` na skupinu, ak ide o výber jedného.
- Na mobile riadok chipov nechajte posúvať vodorovne (`overflow-x:auto`).
