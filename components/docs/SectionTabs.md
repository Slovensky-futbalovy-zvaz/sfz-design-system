# SectionTabs

Podstránky jednej sekcie ako kapsule na spoločnom podklade (štýl Apple), napr. Správa: Prehľad · Kluby · Osoby · Číselníky. `items` (`{id,label,href,icon?,active?}`), `aria-label`, `linkAs`, `className`.

- Sú to odkazy na stránky: `nav` s `aria-current="page"` na aktívnej, nie `tablist`. Na prepínanie pohľadov bez zmeny URL použite `Tabs`.
- Aktívnu položku (`active`) určuje aplikácia podľa adresy – zvýrazní sa `brand-blue-tint` a `brand-blue-ink`, ikony ostatných sú `ink-muted`.
- Rovnaké na všetkých šírkach a nezaberajú šírku obsahu (na rozdiel od bočného menu). Na úzkej obrazovke sa pás posúva bez posuvníka a aktívna sa posunie do pohľadu; názvy neskracujte.
- Výška kapsule 44 px (dotyková plocha). Ikona je voliteľná, odporúča sa pri 5 a viac položkách.
- `linkAs`: komponent odkazu routera (napr. `Link` z Next.js); predvolene `<a>`.
