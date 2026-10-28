# ProgressBar

Ukazovateľ postupu: vyplnené oblasti formulára, splnené ciele, priebeh kurzu. `value`, `max` (predvolene 100),
`label` (povinný prístupný názov), `valueText?`, `tone` (`brand` | `success`).

- `role="progressbar"` s `aria-valuenow` v percentách; `valueText` prečíta čítačka namiesto percent
  („8 z 11 oblastí“).
- Výška 8 px, dráha `hairline`, výplň `brand-blue` (postup) alebo `success` (splnené).
- Číslo alebo text postupu píšte vedľa ukazovateľa – samotná farba stav nevysvetlí.
- Neurčitý priebeh (načítavanie) riešte `Skeleton` alebo spinnerom v `Button`, nie týmto komponentom.
