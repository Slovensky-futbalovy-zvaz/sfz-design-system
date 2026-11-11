import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import * as SFZ from "../components/src";

afterEach(cleanup);

// jsdom nemá PointerEvent – bez neho by udalosti ťahu nemali súradnice
if (typeof window.PointerEvent === "undefined") {
  class PointerEventPolyfill extends MouseEvent {
    pointerId: number;
    constructor(type: string, init: PointerEventInit = {}) { super(type, init); this.pointerId = init.pointerId ?? 0; }
  }
  (window as unknown as { PointerEvent: typeof MouseEvent }).PointerEvent = PointerEventPolyfill;
}

type Row = { klub: string; hraci: number; stav: string };
const rows: Row[] = [
  { klub: "MŠK Žilina", hraci: 120, stav: "Čaká" },
  { klub: "Spartak Trnava", hraci: 137, stav: "Uhradené" },
  { klub: "ŠK Slovan Bratislava", hraci: 154, stav: "Uhradené" },
];
const columns = [
  { key: "klub" as const, header: "Klub", sortable: true },
  { key: "hraci" as const, header: "Hráči", align: "right" as const, sortable: true },
  { key: "stav" as const, header: "Stav" },
];

const sections = [
  { id: "klub", title: "Klub", items: [{ id: "p", label: "Prehľad", href: "/", icon: "home", active: true }, { id: "o", label: "Oblasti", href: "#oblasti" }] },
  { id: "ucet", title: "Účet", items: [{ id: "u", label: "Môj účet", href: "/ucet" }] },
];
const hits = [
  { id: "1", href: "/oblasti/3", title: "Tréneri mládeže", overline: "Oblasť", snippet: "Licencie" },
  { id: "2", href: "/metodika", title: "Licencie trénerov" },
];

describe("komponenty sa vyrenderujú", () => {
  const cases: Array<[string, () => JSX.Element]> = [
    ["Icon", () => <SFZ.Icon name="check" label="Hotovo" />],
    ["Button", () => <SFZ.Button icon="plus">Nový zápas</SFZ.Button>],
    ["IconButton", () => <SFZ.IconButton icon="edit" label="Upraviť" />],
    ["Input", () => <SFZ.Input label="E-mail" error="Neplatný e-mail" />],
    ["Textarea", () => <SFZ.Textarea label="Poznámka" hint="Max. 500 znakov" />],
    ["Select", () => <SFZ.Select label="Súťaž" options={[{ value: "1", label: "Niké liga" }]} placeholder="Vyberte" />],
    ["Checkbox", () => <SFZ.Checkbox label="Súhlasím" />],
    ["Toggle", () => <SFZ.Toggle label="Notifikácie" />],
    ["Card", () => <SFZ.Card title="Zberná faktúra">1 240,50 €</SFZ.Card>],
    ["Badge", () => <SFZ.Badge tone="success" dot>Uhradené</SFZ.Badge>],
    ["Chip", () => <SFZ.Chip selected>Muži</SFZ.Chip>],
    ["Alert", () => <SFZ.Alert tone="warning" title="Blíži sa termín">Faktúra je splatná o 3 dni.</SFZ.Alert>],
    ["Toast", () => <SFZ.Toast items={[{ id: 1, message: "Uložené", tone: "success" }]} onDismiss={() => {}} />],
    ["Avatar", () => <SFZ.Avatar name="Ján Letko" status="online" />],
    ["Skeleton", () => <SFZ.Skeleton lines={3} />],
    ["EmptyState", () => <SFZ.EmptyState title="Žiadne podania" description="Keď klub odošle podanie, zobrazí sa tu." />],
    ["Stepper", () => <SFZ.Stepper steps={[{ label: "Údaje" }, { label: "Klub" }, { label: "Platba" }]} current={1} />],
    ["Tabs", () => <SFZ.Tabs items={[{ id: "a", label: "Zápasy" }, { id: "b", label: "Tabuľka" }]} value="a" onChange={() => {}} />],
    ["NavBar", () => <SFZ.NavBar brand="SFZ" items={[{ id: "a", label: "Prehľad", active: true }]} />],
    ["TabBar", () => <SFZ.TabBar items={[{ id: "a", label: "Prehľad", icon: "home" }]} value="a" />],
    ["Modal", () => <SFZ.Modal open title="Potvrdiť" onClose={() => {}}>Naozaj?</SFZ.Modal>],
    ["Drawer", () => <SFZ.Drawer open title="Menu" onClose={() => {}}>Obsah</SFZ.Drawer>],
    ["Table", () => <SFZ.Table caption="Kluby" columns={columns} rows={rows} rowKey={(r) => r.klub} />],
    ["DataTable", () => <SFZ.DataTable caption="Kluby" columns={columns} rows={rows} rowKey={(r) => r.klub} />],
    ["Calendar", () => <SFZ.Calendar value="2026-10-24" month="2026-10" events={[{ date: "2026-10-24" }]} />],
    ["Accordion", () => <SFZ.Accordion><SFZ.AccordionItem title="Metodika">Text</SFZ.AccordionItem></SFZ.Accordion>],
    ["ProgressBar", () => <SFZ.ProgressBar value={8} max={11} label="Vyplnené oblasti" />],
    ["MenuPanel", () => <SFZ.MenuPanel sections={sections} />],
    ["MenuSheet", () => <SFZ.MenuSheet open title="Celé menu" sections={sections} onClose={() => {}} />],
    ["BottomSheet", () => <SFZ.BottomSheet open title="Celé menu" onClose={() => {}}>Obsah</SFZ.BottomSheet>],
    ["Breadcrumbs", () => <SFZ.Breadcrumbs items={[{ label: "Prehľad", href: "/" }, { label: "Oblasti" }]} />],
    ["SearchField", () => <SFZ.SearchField label="Hľadať" shortcut="⌘K" />],
    ["SearchResults", () => <SFZ.SearchResults listId="v" status="done" hits={hits} />],
  ];
  for (const [name, el] of cases) {
    it(name, () => {
      const { container } = render(el());
      expect(container.firstChild ?? document.body.lastChild).toBeTruthy();
    });
  }
});

describe("správanie", () => {
  it("Input s chybou nastaví aria-invalid a prepojí popis", () => {
    render(<SFZ.Input label="Registračné číslo" error="Toto číslo už existuje." />);
    const input = screen.getByLabelText("Registračné číslo");
    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(screen.getByRole("alert").textContent).toContain("Toto číslo už existuje.");
  });

  it("IconButton má prístupný názov", () => {
    render(<SFZ.IconButton icon="trash" label="Zmazať" />);
    expect(screen.getByRole("button", { name: "Zmazať" })).toBeTruthy();
  });

  it("Button v stave loading je neaktívny", () => {
    render(<SFZ.Button loading>Ukladám</SFZ.Button>);
    expect((screen.getByRole("button") as HTMLButtonElement).disabled).toBe(true);
  });

  it("DataTable filtruje podľa hľadania", () => {
    render(<SFZ.DataTable caption="Kluby" columns={columns} rows={rows} rowKey={(r) => r.klub} />);
    fireEvent.change(screen.getByLabelText("Hľadať"), { target: { value: "Žilina" } });
    expect(screen.getByText("1 záznamov")).toBeTruthy();
  });

  it("Modal sa zatvorí klávesom Esc", () => {
    const onClose = vi.fn();
    render(<SFZ.Modal open title="Potvrdiť" onClose={onClose}>Naozaj?</SFZ.Modal>);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });

  it("Calendar začína týždeň pondelkom a píše mesiace po slovensky", () => {
    render(<SFZ.Calendar month="2026-10" />);
    expect(screen.getByText("október 2026")).toBeTruthy();
    expect(screen.getAllByRole("columnheader")[0].textContent).toBe("Po");
  });

  it("AccordionItem je natívny details a defaultOpen ho otvorí", () => {
    const { container } = render(
      <SFZ.Accordion>
        <SFZ.AccordionItem title="Otvorená" subtitle="Pre trénera" defaultOpen>Obsah A</SFZ.AccordionItem>
        <SFZ.AccordionItem title="Zatvorená">Obsah B</SFZ.AccordionItem>
      </SFZ.Accordion>,
    );
    const items = container.querySelectorAll("details");
    expect(items).toHaveLength(2);
    expect(items[0].open).toBe(true);
    expect(items[1].open).toBe(false);
    expect(screen.getByText("Pre trénera")).toBeTruthy();
  });

  it("ProgressBar hlási percentá, text pre čítačku a drží rozsah 0 – 100", () => {
    render(<SFZ.ProgressBar value={8} max={11} label="Vyplnené oblasti" valueText="8 z 11 oblastí" />);
    const bar = screen.getByRole("progressbar", { name: "Vyplnené oblasti" });
    expect(bar.getAttribute("aria-valuenow")).toBe("73");
    expect(bar.getAttribute("aria-valuetext")).toBe("8 z 11 oblastí");
    cleanup();
    render(<SFZ.ProgressBar value={150} label="Nad maximum" />);
    expect(screen.getByRole("progressbar").getAttribute("aria-valuenow")).toBe("100");
    cleanup();
    render(<SFZ.ProgressBar value={Number.NaN} label="Bez hodnoty" />);
    expect(screen.getByRole("progressbar").getAttribute("aria-valuenow")).toBe("0");
  });

  it("MenuSheet: aktívna položka, fokus na prvý odkaz, Esc, pozadie a výber zatvoria", () => {
    const onClose = vi.fn();
    const { container } = render(<SFZ.MenuSheet open title="Celé menu" sections={sections} onClose={onClose} id="menu" />);
    const dialog = screen.getByRole("dialog", { name: "Celé menu" });
    expect(dialog.id).toBe("menu");
    expect(screen.getByRole("link", { name: "Prehľad" }).getAttribute("aria-current")).toBe("page");
    expect(screen.getByRole("link", { name: "Oblasti" }).getAttribute("aria-current")).toBeNull();
    expect(document.activeElement).toBe(screen.getByRole("link", { name: "Prehľad" }));
    expect(screen.getByRole("heading", { name: "Účet" })).toBeTruthy();
    fireEvent.keyDown(document, { key: "Escape" });
    fireEvent.click(container.querySelector(".sfz-menusheet__scrim")!);
    fireEvent.click(screen.getByRole("link", { name: "Oblasti" }));
    expect(onClose).toHaveBeenCalledTimes(3);
  });

  it("MenuSheet vráti fokus na tlačidlo a zatvorený sa nevykreslí", () => {
    function Demo() {
      const [open, setOpen] = React.useState(false);
      return (
        <>
          <button type="button" onClick={() => setOpen(true)}>Menu</button>
          <SFZ.MenuSheet open={open} title="Celé menu" sections={sections} onClose={() => setOpen(false)} />
        </>
      );
    }
    render(<Demo />);
    expect(screen.queryByRole("dialog")).toBeNull();
    const button = screen.getByRole("button", { name: "Menu" });
    button.focus();
    fireEvent.click(button);
    expect(document.activeElement?.textContent).toBe("Prehľad");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.activeElement).toBe(button);
  });

  it("MenuPanel použije komponent odkazu z linkAs", () => {
    const RouterLink = ({ href, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a href={href} data-router="" {...rest}>{children}</a>
    );
    render(<SFZ.MenuPanel sections={sections} columns="two" linkAs={RouterLink} />);
    expect(screen.getByRole("link", { name: "Môj účet" }).hasAttribute("data-router")).toBe(true);
  });

  it("BottomSheet: modálny dialóg s názvom, × a ťah za úchyt zatvoria, krátky ťah nie", () => {
    const onClose = vi.fn();
    const { container } = render(<SFZ.BottomSheet open title="Celé menu" closeLabel="Zavrieť menu" onClose={onClose}>Obsah</SFZ.BottomSheet>);
    const dialog = screen.getByRole("dialog", { name: "Celé menu" });
    expect(dialog.getAttribute("aria-modal")).toBe("true");
    expect(dialog.classList.contains("is-above-tabbar")).toBe(true);
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Zavrieť menu" }));
    fireEvent.click(screen.getByRole("button", { name: "Zavrieť menu" }));
    expect(onClose).toHaveBeenCalledTimes(1);
    const head = container.querySelector(".sfz-bottomsheet__head")!;
    fireEvent.pointerDown(head, { clientY: 100, pointerId: 1 });
    fireEvent.pointerMove(head, { clientY: 140, pointerId: 1 });
    fireEvent.pointerUp(head, { pointerId: 1 });
    expect(onClose).toHaveBeenCalledTimes(1);
    fireEvent.pointerDown(head, { clientY: 100, pointerId: 1 });
    fireEvent.pointerMove(head, { clientY: 200, pointerId: 1 });
    fireEvent.pointerUp(head, { pointerId: 1 });
    expect(onClose).toHaveBeenCalledTimes(2);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(3);
  });

  it("Breadcrumbs: aktuálna stránka, text bez odkazu, na mobile skryje vzdialené položky", () => {
    const { container } = render(
      <SFZ.Breadcrumbs items={[{ label: "Prehľad", href: "/" }, { label: "Oblasti", href: "/oblasti" }, { label: "Mládež" }, { label: "Tréneri" }]} />
    );
    expect(screen.getByRole("navigation", { name: "Cesta k stránke" })).toBeTruthy();
    expect(screen.getByText("Tréneri").getAttribute("aria-current")).toBe("page");
    expect(screen.queryByRole("link", { name: "Mládež" })).toBeNull();
    const items = container.querySelectorAll("li");
    expect([...items].map((li) => li.classList.contains("is-collapsed"))).toEqual([true, true, false, false]);
    expect(items[2].querySelector(".sfz-breadcrumbs__back")).toBeTruthy();
    cleanup();
    const { container: one } = render(<SFZ.Breadcrumbs items={[{ label: "Prehľad" }]} />);
    expect(one.firstChild).toBeNull();
  });

  it("SearchField má popis pre čítačku a posiela ref na input", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<SFZ.SearchField ref={ref} label="Hľadať v klube" name="q" />);
    const input = screen.getByRole("searchbox", { name: "Hľadať v klube" });
    expect(ref.current).toBe(input);
    expect(input.getAttribute("placeholder")).toBe("Hľadať v klube");
    expect(input.getAttribute("autocomplete")).toBe("off");
  });

  it("SearchResults: id možností, zvýraznenie, odkaz na všetky výsledky a stavy", () => {
    const onPick = vi.fn();
    render(<SFZ.SearchResults listId="v" status="done" hits={hits} activeIndex={2} onPick={onPick} statusText="2 výsledky" allLink={{ href: "#hladat", label: "Všetky výsledky" }} />);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(2);
    expect(options[0].getAttribute("aria-selected")).toBe("false");
    expect(screen.getByRole("link", { name: /Tréneri mládeže/ }).id).toBe("v-0");
    const all = screen.getByRole("link", { name: "Všetky výsledky" });
    expect(all.id).toBe("v-2");
    expect(all.classList.contains("is-active")).toBe(true);
    expect(screen.getByRole("status").textContent).toBe("2 výsledky");
    fireEvent.click(all);
    expect(onPick).toHaveBeenCalled();
    cleanup();
    render(<SFZ.SearchResults listId="v" status="done" hits={[]} emptyText="Nič" />);
    expect(screen.getByText("Nič")).toBeTruthy();
    cleanup();
    render(<SFZ.SearchResults listId="v" status="error" hits={[]} errorText="Chyba" />);
    expect(screen.getByText("Chyba")).toBeTruthy();
    cleanup();
    render(<SFZ.SearchResults listId="v" status="idle" hits={hits} idleText="Píšte" />);
    expect(screen.queryByRole("listbox")).toBeNull();
    expect(screen.getByText("Píšte")).toBeTruthy();
  });

  it("nové ikony sú v sade", () => {
    for (const n of ["map", "map-pin", "compass", "book-open", "star", "flag", "handshake", "clipboard-list", "file-check"]) expect(SFZ.ICON_PATHS[n], n).toBeTruthy();
  });
});
