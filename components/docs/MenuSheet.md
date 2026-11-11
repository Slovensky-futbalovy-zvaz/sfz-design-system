# MenuSheet

Celé menu aplikácie v plachte pod hlavičkou (desktop), vzor „sections sheet“. `open`, `onClose`, `title`, `sections` (`{id,title,items:[{id,label,href,icon?,active?}]}`), `escHint`, `id`, `linkAs`.

- Plachta sa otvára tlačidlom v NavBare (`IconButton icon="menu"` s `aria-expanded` a `aria-controls={id}`); hlavička ostáva viditeľná, stránku pod ňou prekryje `--overlay`.
- Stĺpce sú sekcie menu; vedľa seba ich je toľko, koľko sa zmestí (min. 180 px). Aktívnu položku (`active`) určuje aplikácia – zvýrazní sa `brand-blue-tint` a `brand-blue-ink`.
- Zatvorí sa klávesom Esc, klikom na pozadie a výberom položky; fokus vojde na prvý odkaz a po zatvorení sa vráti na tlačidlo. Zmenu stránky (router) má zatvoriť aplikácia.
- Rovnaké stĺpce bez plachty: `MenuPanel`. Na mobile v `BottomSheet` použite `columns="list"` – jeden stĺpec zoskupených riadkov ako Nastavenia v iOS (nadpis skupiny, riadky 48 px s ikonou a šípkou, oddelené `hairline`). `columns="two"` ostáva kvôli kompatibilite, pri viacerých sekciách je neprehľadné.
- `linkAs`: komponent odkazu routera (napr. `Link` z Next.js); predvolene `<a>`.
- Bez JavaScriptu nech tlačidlo vedie na stránku s rovnakým menu (napr. „Viac“).
