# Avatar

Iniciály alebo fotografia osoby (hráč, tréner, funkcionár). `name` je povinné (iniciály a alt), `src`, `size`, `status`.

- Veľkosť `sm` v NavBare a tabuľkách, `md` v zoznamoch, `xl` na profile.
- Stavová bodka má význam len s textom vedľa (napr. „Online“).
- Fotka sa oreže do kruhu (`object-fit: cover`) aj pri pomere strán na výšku alebo na šírku; avatar si drží rozmer podľa `size`.
