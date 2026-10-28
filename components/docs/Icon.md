# Icon

Ikony Lucide (ISC) vložené v bundli ako cesty; `name`, `size`, `label`. Bez `label` je ikona dekoratívna (`aria-hidden`).

- Sada v `ICON_PATHS` je zámerne malá (~37; okrem iného `map`, `map-pin`, `compass`, `book-open`, `star`). Ďalšie ikony pridajte z lucide.dev do `src/icons.tsx`, nie ako obrázky.
- Veľkosti 16 / 20 / 24 px; hrúbka ťahu 2 px; farba `currentColor`.
- Na Macu v natívnych aplikáciách používajte SF Symbols s rovnakým významom.
