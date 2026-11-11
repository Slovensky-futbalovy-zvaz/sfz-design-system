# Grafy

Vzory grafov a máp pre webové aplikácie SFZ (ISSF, sportnet.online, ClubUp, futbalnet). Nie sú to React komponenty: určujú farby, rozmery a správanie, ktoré dodrží každá knižnica (ECharts, Recharts, D3, vlastné SVG). Náhľady sú v `docs/artefakt/components/<Vzor>/preview.html` a v `docs/ukazky/index.html` (skupiny **Grafy** a **Mapy**). Rozhodnutie o farbách: [ADR 0004](../decisions/0004-farby-grafov.md).

| Vzor | Na čo |
| --- | --- |
| [`BarChart`](BarChart.md) | Porovnanie a poradie, Top N |
| [`LineChart`](LineChart.md) | Vývoj v čase, max. 3 série + priemer |
| [`StackedBarChart`](StackedBarChart.md) | Podiely v skupinách (výhra – remíza – prehra) |
| [`DonutChart`](DonutChart.md) | Jeden podiel s číslom v strede |
| [`RadarChart`](RadarChart.md) | Profil hráča, max. 2 profily |
| [`Heatmap`](Heatmap.md) | Hodnoty v mriežke, sekvenčná škála |
| [`DivergingBarChart`](DivergingBarChart.md) | Odchýlka od priemeru alebo cieľa |
| [`KpiCard`](KpiCard.md) | Číslo, zmena a minigraf na dashboarde |
| [`ScatterChart`](ScatterChart.md) | Vzťah dvoch veličín (minúty a góly) |
| [`SankeyChart`](SankeyChart.md) | Toky medzi skupinami (prestupy) |
| [`MapMarkers`](MapMarkers.md) | Body na mape: kluby, ihriská, zhluky, detail |
| [`ChoroplethMap`](ChoroplethMap.md) | Regióny vyfarbené podľa hodnoty |
| [`RouteMap`](RouteMap.md) | Trasa: cesta na zápas, delegácia |
| [`DensityMap`](DensityMap.md) | Hustota bez presných bodov |

## Farby podľa úlohy

| Úloha | Tokeny | Pravidlo |
| --- | --- | --- |
| Identita série | `chart-1`, `chart-2`, `chart-3` | Prideľujte vždy v tomto poradí. Najviac 3 série; viac = „Ostatné“ (`chart-4`) alebo malé grafy vedľa seba. |
| Kontext | `chart-4` | Priemer, cieľ, minulé obdobie, „Ostatné“. Sivá, vždy s popisom. |
| Množstvo | `chart-seq-1` … `chart-seq-5` | Jeden odtieň modrej, viac = výraznejšie. Heatmapa, kartogram. |
| Smer od stredu | `chart-div-neg-2` … `chart-div-pos-2` | Červená pod, sivý stred `chart-div-mid`, modrá nad. |
| Stav | `success`, `warning`, `danger` (+ `*-ink`) | Len keď hodnota znamená dobre / zle, vždy so šípkou alebo slovom. Nikdy ako „séria 4“. |

- `chart-1` a `chart-2` sa líšia svetlosťou, takže ich rozlíši aj človek s poruchou farbocitu. `chart-3` je červená SFZ: je to signál, v grafe najviac jedna červená séria.
- Farba patrí entite, nie poradiu: keď filter skryje sériu, ostatné farbu nemenia.
- Text (hodnoty, popisy, legenda) je vždy `ink` alebo `ink-muted`, nikdy vo farbe série.
- Farby z tokenov platia v oboch témach; tmavá téma má vlastné odtiene (svetlejšia `chart-1`, otočená sekvenčná škála).

## Anatómia

- Graf stojí v karte `surface-raised`, rádius `radius-lg`, odstup 20 px. Nadpis `headline`, podnadpis `footnote` v `ink-muted` (čo, kde, kedy, jednotka), pod grafom zdroj `caption-1`.
- Mriežka `hairline` 1 px, os s nulou `border-strong`, popisy osí `caption-1` v `ink-muted`, čísla `tabular-nums` v slovenskom formáte (`toLocaleString("sk-SK")`: 18 420, 3,2 %).
- Tenké značky: pruh 20 px, čiara 2 px, bod ≥ 8 px. Zaoblený (4 px) je len koniec s hodnotou, začiatok sedí na osi. Medzi susednými plochami 2 px medzera farby karty.
- Legenda pri 2 a viac sériách vždy; pri najviac 4 sériách aj priamy popis pri čiare alebo pruhu. Číslo nepíšte ku každému bodu.
- Jedna os y. Dve veličiny s inou mierkou = dva grafy, nikdy dve osi.

## Interakcia a prístupnosť

- Pri prejdení myšou: bublina (`surface`, `shadow-float`, `radius-sm`, `footnote`) s presnou hodnotou; pri čiarovom grafe zvislá čiara cez všetky série. Cieľ pre myš je väčší ako značka.
- `<svg role="img">` s `<title>`, ktorý povie, čo graf ukazuje. Pre presné hodnoty ponúknite tabuľku (`Table` / `DataTable`) – napr. prepínačom „Graf / Tabuľka“.
- Filtre (sezóna, súťaž, kraj) v jednom rade nad grafmi, rovnaké pre všetky grafy na obrazovke.
- `prefers-reduced-motion` vypína animácie nábehu.

## Mapový podklad

Podklad je tlmený, aby vynikli údaje: sivá pevnina `map-land`, tlmená modrá voda `map-water`, cesty `map-road` (vo svetlej téme biele s okrajom `hairline`), hranice krajov a okresov `map-boundary` čiarkovane, názvy miest `ink-muted` s obrysom farby pevniny. Žiadne farebné body záujmu (obchody, reštaurácie), žiadny reliéf ani satelit ako predvolený.

- Údaje sú vždy nad podkladom vo farbách grafov (`chart-*`, `chart-seq-*`); farba podkladu nikdy nenesie význam.
- Mapa v karte s rádiusom `radius-md`, ovládanie priblíženia vpravo hore (`surface`, `shadow-float`), atribúcia vpravo dole (`caption-2`) – pri OpenStreetMap je povinná.
- Tmavá téma má vlastný tmavý podklad (tokeny `map-*`), nie invertovanú svetlú mapu.
- Každá mapa má alternatívu bez mapy (zoznam, tabuľka) a ovláda sa aj klávesnicou.

Príklad štýlu pre MapLibre GL nad vektorovými dlaždicami OpenMapTiles (napr. OpenFreeMap); rovnaké farby nastavte aj v Google Maps (cloudový štýl) či Mapbox Studio:

```js
const css = getComputedStyle(document.documentElement);
const t = (n) => css.getPropertyValue(`--${n}`).trim();

const sfzMapStyle = {
  version: 8,
  glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  sources: { omt: { type: "vector", url: "https://tiles.openfreemap.org/planet" } },
  layers: [
    { id: "pevnina", type: "background", paint: { "background-color": t("map-land") } },
    { id: "voda", type: "fill", source: "omt", "source-layer": "water", paint: { "fill-color": t("map-water") } },
    { id: "rieky", type: "line", source: "omt", "source-layer": "waterway", paint: { "line-color": t("map-water"), "line-width": 1.5 } },
    { id: "cesty-okraj", type: "line", source: "omt", "source-layer": "transportation", paint: { "line-color": t("hairline"), "line-width": ["interpolate", ["linear"], ["zoom"], 8, 1.5, 14, 8] } },
    { id: "cesty", type: "line", source: "omt", "source-layer": "transportation", paint: { "line-color": t("map-road"), "line-width": ["interpolate", ["linear"], ["zoom"], 8, 0.8, 14, 6] } },
    { id: "hranice", type: "line", source: "omt", "source-layer": "boundary", filter: ["<=", ["get", "admin_level"], 8], paint: { "line-color": t("map-boundary"), "line-dasharray": [2, 2] } },
    { id: "obce", type: "symbol", source: "omt", "source-layer": "place", layout: { "text-field": ["get", "name"], "text-font": ["Noto Sans Regular"], "text-size": 11 }, paint: { "text-color": t("ink-muted"), "text-halo-color": t("map-land"), "text-halo-width": 1.5 } },
  ],
};
// body klubov: circle-color t("chart-1"), circle-stroke-color t("surface"); hustota: heatmap-color z chart-seq-*
```

## Knižnice

Tokeny čítajte z CSS premenných, nie ako skopírované hexy – inak graf nezmení farby v tmavej téme. Príklad pre ECharts (rovnako pre Recharts, Nivo, D3):

```js
const css = getComputedStyle(document.documentElement);
const t = (n) => css.getPropertyValue(`--${n}`).trim();

const sfzTheme = {
  color: [t("chart-1"), t("chart-2"), t("chart-3"), t("chart-4")],
  backgroundColor: "transparent",
  textStyle: { fontFamily: t("font-sans"), color: t("ink-muted") },
  categoryAxis: { axisLine: { lineStyle: { color: t("border-strong") } }, axisTick: { show: false }, splitLine: { show: false } },
  valueAxis: { axisLine: { show: false }, splitLine: { lineStyle: { color: t("hairline") } } },
  line: { lineStyle: { width: 2 }, symbol: "none" },
  bar: { itemStyle: { borderRadius: [0, 4, 4, 0] } },
  visualMap: { inRange: { color: [1, 2, 3, 4, 5].map((i) => t(`chart-seq-${i}`)) } },
  tooltip: { backgroundColor: t("surface"), borderWidth: 0, textStyle: { color: t("ink") } },
};
echarts.registerTheme("sfz", sfzTheme);
// pri zmene témy (data-theme, prefers-color-scheme) tému znova zaregistrujte a graf prekreslite
```

Odporúčanie knižníc pre stack Next.js + MongoDB: bežné grafy ECharts alebo Recharts, veľké dáta (desaťtisíce bodov) ECharts s canvasom, tabuľky `DataTable`. Pred výberom typu grafu pomôže interný *Katalóg vizualizácií* (170 typov s odhadom škálovateľnosti).
