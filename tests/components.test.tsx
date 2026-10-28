import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import * as SFZ from "../components/src";

afterEach(cleanup);

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

  it("nové ikony sú v sade", () => {
    for (const n of ["map", "map-pin", "compass", "book-open", "star"]) expect(SFZ.ICON_PATHS[n], n).toBeTruthy();
  });
});
