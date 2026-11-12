# Button

Hlavné tlačidlo akcie. Dodáte text (sloveso v neurčitku alebo rozkaze: „Uložiť“, „Odoslať podanie“), voliteľne `icon`, `variant`, `size`, `loading`, `block`.

- Jedno `primary` na obrazovku (hlavná akcia); ostatné `secondary` alebo `tertiary`. `danger` len pre nevratné kroky (zmazať, zrušiť registráciu). Pozadie `danger-solid` (#dc1a21) – biela na ňom má 4,98 : 1, teda spĺňa WCAG AA aj pri 17 px texte; červená SFZ `brand-red` ostáva pre značku a akcenty.
- Výška `md` = 44 px (touch target); `sm` iba v tabuľkách a toolbaroch.
- `sm` (aj `IconButton size="sm"`) vyzerá na 36 px, no na dotykovom zariadení (`pointer: coarse`) má neviditeľnú dotykovú plochu 44 × 44 px (`::after`). Medzi susednými `sm` tlačidlami nechajte medzeru aspoň 8 px; pseudo-element `::after` na `sfz-btn--sm` nepoužívajte na iný účel.
- Na mobile pod 640 px používajte `block` pre akcie formulára; v Modal päte sa tlačidlá skladajú automaticky.
- `loading` zablokuje tlačidlo a ukáže spinner; text zmeňte na priebehový („Ukladám“).
- Nikdy nepoužívajte tlačidlo ako odkaz na inú stránku – na to je `<a>` so štýlom `sfz-btn`.
