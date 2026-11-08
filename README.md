# SFZ Design System

Design systém Slovenského futbalového zväzu pre webové aplikácie (ISSF, sportnet.online, ClubUp, futbalnet), dokumenty a prezentácie.

- **Farby a logá** presne podľa *SFZ Design Manual 2024‑01*.
- **Typografia, mriežka a skladba obrazovky** podľa *Apple Human Interface Guidelines*: systémové písmo SF Pro, 8‑bodová mriežka, zoskupené karty, Tab Bar na mobile.
- **Mobile first**: každý komponent je navrhnutý najprv pre šírku 390 px.
- Svetlá aj tmavá téma, kontrast podľa WCAG 2.1 AA overený testami.

Prehliadateľná verzia (brand book so živými náhľadmi): artefakt **SFZ Design System** na claude.ai. Zdrojom pravdy pre kód je **tento repozitár**.

## Obsah

| Priečinok | Čo obsahuje |
| --- | --- |
| `tokens/tokens.json` | Zdroj pravdy: farby (svetlá + tmavá téma), typografia, medzery, rádiusy, tiene, breakpointy, z‑index, animácie |
| `tokens/tokens.css` | CSS premenné generované z `tokens.json` (`npm run build:tokens`), needitovať ručne |
| `components/src/` | 25 React komponentov v TypeScripte (bez ďalších závislostí okrem Reactu) |
| `components/bundle.css` | Štýly komponentov, používajú výhradne premenné z `tokens.css` |
| `components/bundle.js` | UMD bundle `window.SFZ` pre stránky bez buildu (React 18 z CDN) |
| `components/docs/` | Pravidlá použitia každého komponentu (props, kedy použiť, do/don't) |
| `brand/logos/` | 16 značiek SFZ × farebná/čierna/biela, SVG + PNG; README každej skupiny má ochranné zóny |
| `docs/brand-book.md` | Pravidlá farieb, typografie, rozloženia, prístupnosti a tónu textu |
| `docs/prezentacie/` | Pravidlá pre slajdy 1920×1080 (titul, predel, obsah, čísla, časová os, logá) |
| `templates/prezentacie/` | 9 hotových HTML šablón slajdov s logami SFZ, prehľad `index.html` |
| `tools/qr/` | Generátor QR kódu SFZ (okrúhle body, logo v strede, kruh alebo štvorec) – `index.html` v prehliadači alebo `npm run qr` |
| `docs/decisions/` | Architektonické rozhodnutia (ADR) |
| `docs/ukazky/` | Ukážky všetkých webových komponentov v prehliadači (svetlá aj tmavá téma, funguje aj z disku) – `index.html` |
| `docs/artefakt/` | Náhľady a mapovanie na artefakt SFZ Design System na claude.ai |
| `docs/skills/sfz-prezentacia/` | Skill pre Claude na tvorbu prezentácií SFZ |
| `docs/prenos-do-firemneho-konta.md` | Ako postaviť artefakt a skill v inom konte Claude |

## Komponenty

- **Ovládacie prvky:** `Button`, `IconButton`
- **Formuláre:** `Input`, `Textarea`, `Select`, `Checkbox`, `Toggle`, obal `Field`
- **Obsah:** `Card`, `Badge`, `Chip`, `Avatar`, `Accordion`, `Icon` (Lucide)
- **Spätná väzba:** `Alert`, `Toast`, `Skeleton`, `EmptyState`, `ProgressBar`
- **Navigácia:** `Tabs`, `NavBar` (desktop), `TabBar` (mobil), `Stepper`, `MenuSheet` / `MenuPanel` (celé menu), `Breadcrumbs`, `SearchField` a `SearchResults` (hľadanie v hlavičke)
- **Prekrytia:** `Modal` (na mobile sheet zdola), `Drawer`, `BottomSheet` (mobil, nad TabBarom)
- **Dáta:** `Table`, `DataTable` (hľadanie, filtre, zoradenie, stránkovanie), `Calendar`

## Použitie v Next.js (App Router)

### Varianta A – balík z GitHub Packages (odporúčané)

Balík `@slovensky-futbalovy-zvaz/design-system` sa publikuje automaticky pri každom releasi. GitHub Packages vyžaduje prihlásenie aj pri verejnom balíku: vytvorte si [osobný token](https://github.com/settings/tokens) s právom `read:packages` a do `.npmrc` projektu (necommitujte token, použite premennú prostredia) pridajte:

```ini
@slovensky-futbalovy-zvaz:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Inštalácia pod skráteným menom `@sfz/design-system` (alias, importy v kóde ostávajú rovnaké):

```bash
npm install @sfz/design-system@npm:@slovensky-futbalovy-zvaz/design-system@^1.7.0
```

### Varianta B – priamo z gitu (bez tokenu)

```bash
npm install github:Slovensky-futbalovy-zvaz/sfz-design-system#v1.7.0
```

```js
// next.config.mjs – zdrojáky sú v TypeScripte, Next ich prekompiluje
const nextConfig = { transpilePackages: ["@sfz/design-system"] };
export default nextConfig;
```

```tsx
// app/layout.tsx
import "@sfz/design-system/tokens.css";
import "@sfz/design-system/components.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/page.tsx
"use client";
import { Button, Card, Badge } from "@sfz/design-system";

export default function Page() {
  return (
    <Card title="Zberná faktúra" action={<Badge tone="warning" dot>Čaká</Badge>}>
      <Button>Uhradiť</Button>
    </Card>
  );
}
```

Komponenty používajú React hooky, preto ich vkladajte do klientskych komponentov (`"use client"`).

### Varianta B – skopírovať do projektu

Skopírujte `components/src/*` do `components/ui/` projektu a `tokens/tokens.css` + `components/bundle.css` do `app/`. Hodí sa, ak potrebujete komponent upraviť pre jeden projekt. Zmeny, ktoré sa týkajú všetkých, vráťte sem cez pull request.

### Témy

Bez atribútu sa téma riadi systémom (`prefers-color-scheme`). Vynútiť ju môžete na `<html data-theme="light">` alebo `<html data-theme="dark">`.

### Logá

Skopírujte potrebné súbory z `brand/logos/<skupina>/` do `public/brand/` a vkladajte cez `next/image` alebo `<img>`. Farebný variant patrí na bielu, biely na modrú, fotografiu a do tmavej témy. Pravidlá a ochranné zóny sú v README skupiny.

## Prezentácie

![Šablóny slajdov](templates/prezentacie/nahlady/01-titul.png)

V `templates/prezentacie/` je 9 šablón slajdov 1920×1080 (titul, predel, obsah s lekciou, čísla, časová os, citát, záver s QR kódom, zvislá časová os, čísla s rozpisom). Otvorte `index.html` v prehliadači, vyberte šablónu, nahraďte texty v [hranatých zátvorkách] a uložte do PDF cez Tlačiť → Uložiť ako PDF.

V Claude sa prezentácie tvoria v Claude Slides s artefaktom SFZ Design System. Skill [`sfz-prezentacia`](docs/skills/sfz-prezentacia/SKILL.md) zabezpečí, že Claude systém použije automaticky. Prenos artefaktu a skillu do iného konta (napr. firemného) popisuje [`docs/prenos-do-firemneho-konta.md`](docs/prenos-do-firemneho-konta.md).

## Vývoj

Každý pull request a push do `main` kontroluje GitHub Actions (`.github/workflows/ci.yml`: `npm run check`). Pri zverejnení releasu sa balík automaticky publikuje do GitHub Packages (`.github/workflows/publish.yml`); verzia v `package.json` musí sedieť s tagom.

```bash
npm install
npm run build:tokens   # tokens.json → tokens.css
npm run typecheck      # TypeScript
npm run lint           # ESLint: TypeScript, React, Hooks, prístupnosť (jsx-a11y)
npm run build:ukazky   # po zmene náhľadov: obnoví docs/ukazky/index.html
npm test               # Vitest: tokeny, kontrast, render a správanie komponentov
npm run check          # všetko naraz
npm run qr -- "https://futbalsfz.sk" --tvar kruh -o qr.svg   # QR kód SFZ (alebo tools/qr/index.html)
npm run build:qr-logo  # po zmene loga A: obnoví tools/qr/logo-sfz-a.js
```

Zmenu tokenov robte **len v `tokens/tokens.json`**, potom spustite `npm run build:tokens` a commitnite oba súbory. Test zlyhá, ak `tokens.css` nie je aktuálny alebo ak niektorá farba nesplní kontrast.

Pravidlá práce v repozitári sú v [`CLAUDE.md`](CLAUDE.md), história zmien v [`CHANGELOG.md`](CHANGELOG.md) a otvorené body v [`NEXT.md`](NEXT.md).

## Licencie

- Repozitár je verejne viditeľný, ale nie je voľne použiteľný: © Slovenský futbalový zväz, všetky práva vyhradené. Zamestnanci a zmluvní partneri SFZ ho môžu používať na prácu pre SFZ; ostatní len s predchádzajúcim písomným súhlasom SFZ (žiadosti na office@futbalsfz.sk). Podrobnosti v [`LICENSE.md`](LICENSE.md).
- Logá: ochranné známky SFZ, použitie podľa SFZ Design Manual 2024‑01.
- Ikony: [Lucide](https://lucide.dev) (ISC licencia), vložené ako SVG cesty v `components/src/icons.tsx`.
