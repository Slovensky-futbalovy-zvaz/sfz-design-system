# SearchResults

Zoznam okamžitých výsledkov pod `SearchField` (panel pod poľom na desktope, celá obrazovka na mobile). `hits` (`{id,href,title,overline?,snippet?}`), `status` (`idle` | `loading` | `done` | `error`), `listId`, `activeIndex`, `onPick`, `allLink` (`{href,label}`), texty `idleText`, `emptyText`, `errorText`, `statusText`, `label`, `linkAs`.

- `role="listbox"`, možnosti majú id `${listId}-${index}` pre `aria-activedescendant` poľa; posledná možnosť (index `hits.length`) je odkaz „všetky výsledky“.
- `overline` = druh a zaradenie (napr. „Oblasť · 3 Mládež“), `snippet` jeden riadok z textu.
- Počas `loading` nechajte staré výsledky – zoznam neblikne. `statusText` (napr. „3 výsledky pre „tréner““) sa po `done` ohlási čítačke.
- Bez vlastného pozadia a tieňa: panel pod poľom zložte z `--surface`, `--radius-md` a `--shadow-modal`.
