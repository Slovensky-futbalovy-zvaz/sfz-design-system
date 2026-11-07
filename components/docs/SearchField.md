# SearchField

Pole hľadania v tvare pilulky s ikonou lupy. Prijíma všetky atribúty `<input>` (a `ref`), navyše `label` (pre čítačku, zároveň placeholder), `shortcut` (napr. „⌘K“, zobrazí sa od 768 px) a `size` (`md` 40 px v hlavičke, `lg` 44 px na mobile).

- V hlavičke na desktope v strede (`flex: 0 1 560px`); na mobile ikona lupy, ktorá otvorí hľadanie cez celú obrazovku s poľom `size="lg"`.
- Pre okamžité výsledky ho spojte so `SearchResults` ako combobox: `role="combobox"`, `aria-expanded`, `aria-controls={listId}`, `aria-autocomplete="list"`, `aria-activedescendant={`${listId}-${index}`}`; šípky menia `activeIndex`, Enter otvorí zvýraznený výsledok, Esc zatvorí.
- Obaľte ho do `<form role="search" action="/hladat" method="get">` s `name="q"` – bez JavaScriptu funguje ako obyčajné hľadanie.
- Načítanie výsledkov (fetch, oneskorenie) je vecou aplikácie; komponent rieši len vzhľad.
