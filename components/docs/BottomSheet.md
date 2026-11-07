# BottomSheet

Spodná plachta na mobile nad TabBarom, vzor iOS sheet. `open`, `onClose`, `title`, `children`, `closeLabel` (predvolené „Zavrieť“), `id`, `aboveTabBar` (predvolené `true`).

- S `aboveTabBar` sedí nad TabBarom, ktorý ostáva viditeľný a ovládateľný; pozadie prekryje stránku nad plachtou. Od 768 px (TabBar skrytý) sedí pri spodnom okraji.
- Zatvorí sa tlačidlom ×, klikom na pozadie, klávesom Esc a ťahom za úchyt nadol (viac než 80 px). Fokus vojde na tlačidlo × a po zatvorení sa vráti.
- Výška najviac 78 % obrazovky, obsah sa posúva; hlavička s úchytom ostáva.
- Typické použitie: celé menu na mobile (`MenuPanel columns="two"`), filtre, krátky výber. Na potvrdenie použite `Modal`.
