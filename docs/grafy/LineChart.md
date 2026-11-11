# LineChart

Čiarový graf na vývoj v čase: zápasy po mesiacoch, registrácie po sezónach, forma hráča. Os x je čas, os y začína na nule.

- Najviac 3 série: `chart-1` (aktuálna / hlavná), `chart-2` (porovnanie), `chart-3` len ak si séria zaslúži pozornosť. Priemer alebo cieľ `chart-4` prerušovanou čiarou – je to kontext, nie séria.
- Čiara 2 px, zaoblené spoje. Body nekreslite všade; len posledný bod hlavnej série (8 px s 2 px okrajom farby karty) a pri ňom popis.
- Legenda pod grafom vždy pri 2 a viac sériách; hlavnú sériu popíšte aj priamo na konci čiary.
- Pri prejdení myšou zvislá čiara `border-strong` cez všetky série a bublina so všetkými hodnotami daného bodu.
- Jedna os y. Dve veličiny s inou mierkou = dva grafy pod sebou, nikdy dve osi.
- Neúplné obdobie (aktuálna sezóna) nechajte skončiť, nedokresľujte nuly.
