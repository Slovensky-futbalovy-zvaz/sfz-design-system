# SankeyChart

Tokový graf (Sankey) na presuny medzi skupinami: prestupy medzi úrovňami súťaží, krajmi alebo klubmi, prechod hráčov z mládeže do dospelých.

- Uzly sú úzke stĺpce `border-strong` (10 px), názov a súčet pri uzle. Vľavo „Odkiaľ“, vpravo „Kam“, nadpisy stĺpcov `caption-2` verzálkami.
- Farba toku nesie smer, nie zdroj: do vyššej súťaže `chart-1`, na rovnakú úroveň `chart-4`, do nižšej `chart-2`. Krytie 42 %, pri prejdení myšou 80 % a bublina „odkiaľ → kam, počet“.
- Najviac 5 – 6 uzlov na strane; menšie spojte do „Ostatné“. Najviac 2 kroky (stĺpce) – viac krokov je ťažko čitateľných.
- Šírka toku je úmerná počtu v celom grafe; súčty uzlov napíšte číslom, šírka sa zle porovnáva.
- Pre prestupy medzi konkrétnymi klubmi na mape použite `RouteMap` alebo tabuľku; Sankey ukazuje celkové presuny.
