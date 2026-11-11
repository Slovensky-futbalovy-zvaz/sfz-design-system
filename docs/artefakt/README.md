# Artefakt SFZ Design System – zdroje pre obnovu

Tento priečinok spolu so zvyškom repozitára obsahuje všetko, čo treba na vytvorenie artefaktu **SFZ Design System** na claude.ai (napr. vo firemnom konte) v rovnakej podobe ako originál.

## Mapovanie súborov

| Súbor v artefakte (`project/…`) | Zdroj v repozitári |
| --- | --- |
| `README.md` (brand book) | `docs/brand-book.md` (bez prvého riadku s nadpisom) |
| `tokens.json` | `tokens/tokens.json` |
| `components/bundle.js`, `bundle.css`, `index.d.ts` | `components/` |
| `components/src/*` | `components/src/*` |
| `components/<Komponent>/README.md` | `components/docs/<Komponent>.md`, pre slajdy `docs/prezentacie/<Vzor>.md`, pre grafy `docs/grafy/<Vzor>.md` |
| `components/<Komponent>/preview.html` | `docs/artefakt/components/<Komponent>/preview.html` |
| `components/Cover/preview.html` | `docs/artefakt/components/Cover/preview.html` |
| `assets/<Skupina>/*` (logá ako uploady) + `README.md` | `brand/logos/<Skupina>/*` |

Názov systému: **SFZ Design System**, namespace `SFZ`, knižnice: žiadne (React 18 sa načíta automaticky).

## Odkazy na logá v náhľadoch

V originálnom artefakte náhľady odkazujú na nahraté logá (`/_blob/<id>`). Tu sú prepísané na súbory v `brand/logos/Loga-SFZ/`. Pri obnove artefaktu sa logá nahrajú znova a Claude odkazy prepíše na nové `/_blob/` adresy.

Náhľady sa samostatne v prehliadači nezobrazia: potrebujú rámec artefaktu, ktorý pred nimi načíta `tokens.css`, `bundle.css`, React a `bundle.js`. Na rýchle prezretie slajdov použite `templates/prezentacie/index.html`.

## Postup obnovy

Pozri [`docs/prenos-do-firemneho-konta.md`](../prenos-do-firemneho-konta.md).
