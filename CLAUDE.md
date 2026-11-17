# CLAUDE.md – pravidlá repozitára sfz-design-system

- Jazyk dokumentácie, komentárov a commitov: slovenčina.
- Hodnoty farieb, typografie a medzier meniť **len v `tokens/tokens.json`**, potom `npm run build:tokens`. `tokens/tokens.css` neupravovať ručne.
- Komponenty v `components/src/` používajú výhradne CSS premenné z tokenov, žiadne pevné farby.
- Modrý text a ikony: `brand-blue-ink`, nie `brand-blue` (tmavá téma).
- Logá v `brand/logos/` sú kópie z SFZ Design Manualu; nikdy ich neprekresľovať ani neprefarbovať. Výnimka: `Rozvoj-klubu/` je poskladané z kriviek manuálu (ADR 0005); ďalšie logo aplikácie len rovnakým spôsobom a s vlastným ADR.
- Mobile first: štýly pre 390 px, `min-width` media queries (`bp-sm` 640, `bp-md` 768, `bp-lg` 1024, `bp-xl` 1280); dotykové ciele min. 44 px.
- Pred commitom: `npm run check` (tokeny, typy, ESLint, testy) musí prejsť; rovnako ho spúšťa CI.
- Zmena verzie: `CHANGELOG.md` + tag `vX.Y.Z`. Väčšie rozhodnutia: ADR v `docs/decisions/`.
- Commity: `typ(oblasť): popis` – napr. `feat(tokens): …`, `fix(button): …`, `docs: …`.
