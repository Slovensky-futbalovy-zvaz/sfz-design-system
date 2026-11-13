# Card

Zoskupený blok obsahu na `surface-raised`. Dodáte `title`, voliteľne `action` (badge, tlačidlo), `footer`, `variant` (`raised` | `highlight` | `outline`), `flush` pre tabuľku vnútri.

- Karta nemá tieň ani okraj (okrem `outline` na bielom pozadí dokumentu).
- `highlight` (modrý tint) najviac raz na obrazovku: zvýraznené číslo, upozornenie.
- Blok obsahu bez nadpisu a päty (skupina otázok, stĺpec formulára) patrí do `Frame`, nie do karty.
- Na mobile sú karty pod sebou na celú šírku; od 640 px mriežka `repeat(auto-fit, minmax(280px, 1fr))`.
