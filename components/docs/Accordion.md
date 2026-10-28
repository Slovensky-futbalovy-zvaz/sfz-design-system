# Accordion

Zoskupené rozbaľovacie sekcie: metodika, FAQ, história zmien, voliteľné detaily. `Accordion` obaľuje položky
`AccordionItem` (`title`, `subtitle?`, `defaultOpen?`).

- Natívny `<details>` / `<summary>` – funguje bez JavaScriptu, s klávesnicou aj čítačkou; dotyková plocha min. 44 px.
- Vzhľad zoskupeného zoznamu (iOS Settings): `surface-raised`, `radius-md`, položky oddelené `hairline`.
- Otvorená položka otočí šípku; animácia sa vypne pri `prefers-reduced-motion`.
- Nepoužívajte na hlavnú navigáciu ani na kroky procesu (na to sú `Tabs` a `Stepper`). Dôležitý obsah nenechávajte
  zbalený – prvú alebo odporúčanú sekciu otvorte cez `defaultOpen`.
