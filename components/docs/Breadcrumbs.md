# Breadcrumbs

Pás s cestou k stránke pod hlavičkou. `items` (`{label, href?}`; posledná položka je aktuálna stránka), `label` (pre čítačku, predvolené „Cesta k stránke“), `linkAs`.

- Od 768 px celá cesta; na mobile len nadradená stránka so šípkou späť a aktuálna stránka – šetrí miesto a slúži ako „späť“.
- Položka bez `href` je obyčajný text (sekcia bez vlastnej stránky). Aktuálna stránka má `aria-current="page"`.
- Menej ako dve položky = nič sa nevykreslí. Dlhé názvy sa skracujú „…“.
- Obyčajné odkazy, funguje bez JavaScriptu; `linkAs` pre odkaz routera.
