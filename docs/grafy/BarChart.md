# BarChart

Pruhový graf na porovnanie a poradie: Top N strelcov, hráči podľa kraja, kluby podľa počtu odchovancov. Vodorovné pruhy, názvy vľavo, hodnota za koncom pruhu.

- Jedna séria = jedna farba `chart-1` pre všetky pruhy; farbou nekódujte hodnotu (to robí dĺžka). Jeden pruh môžete zvýrazniť `chart-3` (váš klub, váš kraj) a povedať to v podnadpise.
- Zoraďte od najväčšieho. Viac ako ~12 položiek = Top N alebo `DataTable`.
- Pruh 20 px, rozostup 14 px, zaoblený len koniec s hodnotou (4 px), začiatok sedí na osi `border-strong`. Mriežka `hairline`, popisy osí `caption-1` v `ink-muted`.
- Hodnoty pri pruhoch (`tabular-nums`, nedeliteľná medzera v tisícoch), pri prejdení myšou bublina s detailom.
- Pre kategórie s poradím v čase (ročníky, sezóny) použite stĺpce zvislo; dlhé názvy vždy vodorovne.
