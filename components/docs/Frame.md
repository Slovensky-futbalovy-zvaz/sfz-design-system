# Frame

Rám okolo jedného bloku obsahu: okraj `border`, rádius `radius-md`, pozadie `surface`, odstup 16 px (`space-4`). Nemá nadpis, pätu ani vlastné rozloženie – obsah si poskladáte sami (nadpis, `fieldset`, zoznam).

- Každý samostatný blok obsahu na obrazovke má vlastný rám, aby bolo jasné, čo k čomu patrí: skupina otázok, stĺpec formulára, zhrnutie kroku.
- Keď je blok skupina polí formulára, vložte do rámu `<fieldset>` s `<legend>`; rám sám sémantiku nepridáva (je to `div`).
- Rozdiel oproti `Card`: karta je zoskupený obsah s nadpisom, akciou a pätou na `surface-raised`; `Frame` je len ohraničenie. Rámy do seba nevnárajte.
- Na mobile sú rámy pod sebou na celú šírku s medzerou `space-3` až `space-4`; od 768 px môžu stáť vedľa seba v mriežke.
- Podnet: aplikácia Rozvoj klubu (jej ADR 0046 – každý blok obsahu má rám, cesta späť je `Button variant="outline"`).
