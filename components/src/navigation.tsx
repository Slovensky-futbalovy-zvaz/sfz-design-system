import * as React from "react";
import { Icon, IconName } from "./icons";
import { IconButton } from "./controls";

const cx = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(" ");

/* ---------- Tabs ---------- */
export interface TabItem { id: string; label: string; icon?: IconName | string; count?: number; disabled?: boolean }
export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  /** segmented = iOS segmented control (max. 4 položky); underline = podčiarknuté záložky (viac položiek, posúvateľné). */
  variant?: "underline" | "segmented";
  className?: string;
  "aria-label"?: string;
}

export function Tabs({ items, value, onChange, variant = "underline", className, ...rest }: TabsProps) {
  const refs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const enabled = items.map((it, idx) => (!it.disabled ? idx : -1)).filter((x) => x >= 0);
    const pos = enabled.indexOf(i);
    let next = -1;
    if (e.key === "ArrowRight") next = enabled[(pos + 1) % enabled.length]!;
    if (e.key === "ArrowLeft") next = enabled[(pos - 1 + enabled.length) % enabled.length]!;
    if (e.key === "Home") next = enabled[0]!;
    if (e.key === "End") next = enabled[enabled.length - 1]!;
    if (next >= 0) { e.preventDefault(); onChange(items[next]!.id); refs.current[next]?.focus(); }
  };
  return (
    <div className={cx("sfz-tabs", `sfz-tabs--${variant}`, className)} role="tablist" aria-label={rest["aria-label"]}>
      {items.map((it, i) => (
        <button
          key={it.id}
          ref={(el) => { refs.current[i] = el; }}
          type="button"
          role="tab"
          id={`tab-${it.id}`}
          aria-selected={value === it.id}
          aria-controls={`panel-${it.id}`}
          tabIndex={value === it.id ? 0 : -1}
          disabled={it.disabled}
          className={cx("sfz-tab", value === it.id && "is-active")}
          onClick={() => onChange(it.id)}
          onKeyDown={(e) => onKey(e, i)}
        >
          {it.icon && <Icon name={it.icon} size={18} />}
          <span>{it.label}</span>
          {typeof it.count === "number" && <span className="sfz-tab__count">{it.count}</span>}
        </button>
      ))}
    </div>
  );
}

/* ---------- NavBar (desktop, ≥768 px) ---------- */
export interface NavItem { id: string; label: string; href?: string; icon?: IconName | string; active?: boolean; onClick?: () => void }
export interface NavBarProps {
  /** Logo: obrázok (napr. sfz-D-farebne.svg) alebo text. */
  brand: React.ReactNode;
  brandHref?: string;
  items: NavItem[];
  /** Pravá strana: avatar, tlačidlá, vyhľadávanie. */
  actions?: React.ReactNode;
  /** Modrý variant pre verejné weby; light pre aplikácie. */
  tone?: "light" | "brand";
  /** Zobrazí hamburger pod 768 px a volá tento handler (otvorí Drawer). */
  onMenu?: () => void;
  className?: string;
}

export function NavBar({ brand, brandHref = "/", items, actions, tone = "light", onMenu, className }: NavBarProps) {
  return (
    <header className={cx("sfz-navbar", `sfz-navbar--${tone}`, className)}>
      <div className="sfz-navbar__inner">
        {onMenu && (
          <button type="button" className="sfz-navbar__menu" aria-label="Menu" onClick={onMenu}><Icon name="menu" size={22} /></button>
        )}
        <a className="sfz-navbar__brand" href={brandHref}>{brand}</a>
        <nav className="sfz-navbar__nav" aria-label="Hlavná navigácia">
          {items.map((it) => (
            <a key={it.id} href={it.href ?? "#"} onClick={it.onClick} className={cx("sfz-navbar__link", it.active && "is-active")} aria-current={it.active ? "page" : undefined}>
              {it.icon && <Icon name={it.icon} size={18} />}
              {it.label}
            </a>
          ))}
        </nav>
        {actions && <div className="sfz-navbar__actions">{actions}</div>}
      </div>
    </header>
  );
}

/* ---------- TabBar (mobil, <768 px) ---------- */
export interface TabBarItem { id: string; label: string; icon: IconName | string; href?: string; badge?: number; onClick?: () => void }
export interface TabBarProps {
  items: TabBarItem[];
  value: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function TabBar({ items, value, onChange, className }: TabBarProps) {
  return (
    <nav className={cx("sfz-tabbar", className)} aria-label="Navigácia">
      {items.slice(0, 5).map((it) => {
        const active = it.id === value;
        return (
          <a
            key={it.id}
            href={it.href ?? "#"}
            className={cx("sfz-tabbar__item", active && "is-active")}
            aria-current={active ? "page" : undefined}
            onClick={(e) => { if (!it.href) e.preventDefault(); it.onClick?.(); onChange?.(it.id); }}
          >
            <span className="sfz-tabbar__icon">
              <Icon name={it.icon} size={24} />
              {it.badge ? <span className="sfz-tabbar__badge">{it.badge > 99 ? "99+" : it.badge}</span> : null}
            </span>
            <span className="sfz-tabbar__label">{it.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

/* ---------- Modal ---------- */
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  /** Tlačidlá v päte; na mobile sa skladajú pod seba. */
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  /** Na mobile vysunie zdola ako iOS sheet (predvolené). */
  sheetOnMobile?: boolean;
}

function useLockBody(open: boolean) {
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);
}

function useEscape(open: boolean, onClose: () => void) {
  React.useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, onClose]);
}

export function Modal({ open, onClose, title, children, footer, size = "md", sheetOnMobile = true }: ModalProps) {
  useLockBody(open);
  useEscape(open, onClose);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => { if (open) ref.current?.focus(); }, [open]);
  if (!open) return null;
  const id = `sfz-modal-${title.replace(/\W+/g, "-").toLowerCase()}`;
  return (
    <div className="sfz-overlay" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby={id} className={cx("sfz-modal", `sfz-modal--${size}`, sheetOnMobile && "sfz-modal--sheet")}>
        <header className="sfz-modal__head">
          <h2 id={id} className="sfz-modal__title">{title}</h2>
          <button type="button" className="sfz-modal__close" aria-label="Zavrieť" onClick={onClose}><Icon name="x" size={20} /></button>
        </header>
        <div className="sfz-modal__body">{children}</div>
        {footer && <footer className="sfz-modal__foot">{footer}</footer>}
      </div>
    </div>
  );
}

/* ---------- Drawer ---------- */
export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  side?: "left" | "right";
  children: React.ReactNode;
  /** Šírka na desktope v px (predvolené 320); na mobile 85 % šírky. */
  width?: number;
}

export function Drawer({ open, onClose, title, side = "left", children, width = 320 }: DrawerProps) {
  useLockBody(open);
  useEscape(open, onClose);
  if (!open) return null;
  return (
    <div className="sfz-overlay sfz-overlay--drawer" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <aside role="dialog" aria-modal="true" aria-label={title ?? "Panel"} className={cx("sfz-drawer", `sfz-drawer--${side}`)} style={{ width: `min(85vw, ${width}px)` }}>
        <header className="sfz-drawer__head">
          {title && <h2 className="sfz-drawer__title">{title}</h2>}
          <button type="button" className="sfz-modal__close" aria-label="Zavrieť" onClick={onClose}><Icon name="x" size={20} /></button>
        </header>
        <div className="sfz-drawer__body">{children}</div>
      </aside>
    </div>
  );
}

/* ---------- Spoločné pre odkazy a plachty ---------- */
/**
 * Komponent odkazu: predvolene `<a>`, v aplikácii s routerom napr. `Link` z Next.js.
 * Dostane `href`, `className`, `onClick`, `aria-current`, `id`, `tabIndex` a `children`.
 */
export type LinkComponent = React.ElementType;

/** Esc zatvorí plachtu; fokus pri otvorení vojde dnu a pri zatvorení sa vráti tam, odkiaľ prišiel. */
function useSheetFocus(open: boolean, panel: React.RefObject<HTMLElement | null>, onClose: () => void, initialFocus: string) {
  const close = React.useRef(onClose);
  React.useEffect(() => { close.current = onClose; });
  React.useEffect(() => {
    if (!open) return;
    const from = document.activeElement as HTMLElement | null;
    const node = panel.current;
    node?.querySelector<HTMLElement>(initialFocus)?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close.current(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      // fokus sa vráti, len ak ostal v plachte – kto klikol inam, ten ho tam má
      const now = document.activeElement;
      if (!now || now === document.body || node?.contains(now)) from?.focus?.();
    };
  }, [open, panel, initialFocus]);
}

/* ---------- MenuPanel a MenuSheet (celé menu pod hlavičkou) ---------- */
export interface MenuLink { id: string; label: string; href: string; icon?: IconName | string; active?: boolean }
export interface MenuSection { id: string; title: string; items: MenuLink[] }
export interface MenuPanelProps {
  sections: MenuSection[];
  /** auto = toľko stĺpcov, koľko sa zmestí (desktop); two = dva stĺpce (mobil v BottomSheet). */
  columns?: "auto" | "two";
  /** Volá sa po výbere položky (zatvorí plachtu). */
  onPick?: () => void;
  linkAs?: LinkComponent;
  className?: string;
}

export function MenuPanel({ sections, columns = "auto", onPick, linkAs: L = "a", className }: MenuPanelProps) {
  const uid = React.useId();
  return (
    <div className={cx("sfz-menupanel", `sfz-menupanel--${columns}`, className)}>
      {sections.map((s) => (
        <section key={s.id} className="sfz-menupanel__section" aria-labelledby={`${uid}-${s.id}`}>
          <h3 id={`${uid}-${s.id}`} className="sfz-menupanel__title">{s.title}</h3>
          <ul className="sfz-menupanel__list">
            {s.items.map((it) => (
              <li key={it.id}>
                <L href={it.href} onClick={onPick} aria-current={it.active ? "page" : undefined} className={cx("sfz-menupanel__link", it.active && "is-active")}>
                  {it.icon && <Icon name={it.icon} size={18} />}
                  <span>{it.label}</span>
                </L>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export interface MenuSheetProps {
  open: boolean;
  onClose: () => void;
  /** Názov menu pre čítačku (napr. „Celé menu“). */
  title: string;
  sections: MenuSection[];
  /** Text za klávesom Esc v päte; null pätu skryje. */
  escHint?: string | null;
  /** id plachty pre `aria-controls` tlačidla, ktoré ju otvára. */
  id?: string;
  linkAs?: LinkComponent;
}

export function MenuSheet({ open, onClose, title, sections, escHint = "zavrie", id, linkAs }: MenuSheetProps) {
  const panel = React.useRef<HTMLDivElement>(null);
  useSheetFocus(open, panel, onClose, "a[href]");
  if (!open) return null;
  return (
    <>
      <div className="sfz-menusheet__scrim" aria-hidden="true" onClick={onClose} />
      <div ref={panel} id={id} role="dialog" aria-label={title} className="sfz-menusheet">
        <MenuPanel sections={sections} onPick={onClose} linkAs={linkAs} />
        {escHint !== null && (
          <p className="sfz-menusheet__foot"><kbd className="sfz-kbd">Esc</kbd>{escHint}</p>
        )}
      </div>
    </>
  );
}

/* ---------- BottomSheet (mobil, nad TabBarom) ---------- */
export interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  closeLabel?: string;
  id?: string;
  /** Plachta sedí nad TabBarom, ktorý ostáva viditeľný (predvolené). */
  aboveTabBar?: boolean;
}

/** Ťah za úchyt nadol o viac než toľko px plachtu zatvorí. */
const SHEET_CLOSE_DRAG = 80;

export function BottomSheet({ open, onClose, title, children, closeLabel = "Zavrieť", id, aboveTabBar = true }: BottomSheetProps) {
  const panel = React.useRef<HTMLDivElement>(null);
  const drag = React.useRef<{ y: number; dy: number } | null>(null);
  const titleId = React.useId();
  useSheetFocus(open, panel, onClose, "button");
  if (!open) return null;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // tlačidlo Zavrieť si nechá klik
    if ((e.target as HTMLElement).closest("button")) return;
    drag.current = { y: e.clientY, dy: 0 };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !panel.current) return;
    drag.current.dy = Math.max(0, e.clientY - drag.current.y);
    panel.current.style.transform = `translateY(${drag.current.dy}px)`;
  };
  const onPointerUp = () => {
    const moved = drag.current?.dy ?? 0;
    drag.current = null;
    if (panel.current) panel.current.style.transform = "";
    if (moved > SHEET_CLOSE_DRAG) onClose();
  };

  return (
    <>
      <div className={cx("sfz-bottomsheet__scrim", aboveTabBar && "is-above-tabbar")} aria-hidden="true" onClick={onClose} />
      <div ref={panel} id={id} role="dialog" aria-modal="true" aria-labelledby={titleId} className={cx("sfz-bottomsheet", aboveTabBar && "is-above-tabbar")}>
        <div className="sfz-bottomsheet__head" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
          <span className="sfz-bottomsheet__grip" aria-hidden="true" />
          <div className="sfz-bottomsheet__bar">
            <h2 id={titleId} className="sfz-bottomsheet__title">{title}</h2>
            <IconButton icon="x" label={closeLabel} onClick={onClose} />
          </div>
        </div>
        <div className="sfz-bottomsheet__body">{children}</div>
      </div>
    </>
  );
}

/* ---------- Breadcrumbs (cesta pod hlavičkou) ---------- */
export interface BreadcrumbItem {
  label: string;
  /** Bez href je položka obyčajný text (sekcia bez vlastnej stránky). Posledná položka je vždy aktuálna stránka. */
  href?: string | null;
}
export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Názov navigácie pre čítačku. */
  label?: string;
  linkAs?: LinkComponent;
  className?: string;
}

export function Breadcrumbs({ items, label = "Cesta k stránke", linkAs: L = "a", className }: BreadcrumbsProps) {
  if (items.length < 2) return null;
  const parent = items.length - 2;
  return (
    <nav aria-label={label} className={cx("sfz-breadcrumbs", className)}>
      <ol className="sfz-breadcrumbs__list">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${i}-${it.label}`} className={cx("sfz-breadcrumbs__item", i < parent && "is-collapsed")}>
              {i > 0 && <span aria-hidden="true" className="sfz-breadcrumbs__sep"><Icon name="chevron-right" size={14} /></span>}
              {i === parent && <span aria-hidden="true" className="sfz-breadcrumbs__back"><Icon name="chevron-left" size={14} /></span>}
              {last ? (
                <span aria-current="page" className="sfz-breadcrumbs__current">{it.label}</span>
              ) : it.href ? (
                <L href={it.href} className="sfz-breadcrumbs__link">{it.label}</L>
              ) : (
                <span className="sfz-breadcrumbs__text">{it.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* ---------- SearchField a SearchResults (hľadanie v hlavičke) ---------- */
export interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Popis poľa pre čítačku; bez placeholder aj zástupný text. */
  label: string;
  /** Skratka zobrazená v poli, napr. „⌘K“ (len desktop). */
  shortcut?: string;
  /** md = 40 px v hlavičke na desktope; lg = 44 px (mobil, celá obrazovka). */
  size?: "md" | "lg";
  className?: string;
}

export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(function SearchField(
  { label, shortcut, size = "md", className, id, placeholder, type = "search", autoComplete = "off", ...rest },
  ref
) {
  const auto = React.useId();
  const fieldId = id ?? auto;
  return (
    <span className={cx("sfz-search", `sfz-search--${size}`, shortcut && "has-shortcut", className)}>
      <label htmlFor={fieldId} className="sfz-visually-hidden">{label}</label>
      <span className="sfz-search__icon" aria-hidden="true"><Icon name="search" size={18} /></span>
      <input ref={ref} id={fieldId} type={type} autoComplete={autoComplete} placeholder={placeholder ?? label} className="sfz-search__input" {...rest} />
      {shortcut && <kbd className="sfz-kbd sfz-search__kbd" aria-hidden="true">{shortcut}</kbd>}
    </span>
  );
});

export interface SearchHit {
  id: string;
  href: string;
  title: string;
  /** Riadok nad názvom: druh a zaradenie výsledku. */
  overline?: string;
  snippet?: string;
}
export interface SearchResultsProps {
  hits: SearchHit[];
  /** idle = ešte sa nehľadá; loading drží staré výsledky, aby zoznam neblikal. */
  status: "idle" | "loading" | "done" | "error";
  /** id zoznamu (`aria-controls` poľa); možnosti majú id `${listId}-${index}`. */
  listId: string;
  /** Zvýraznená možnosť (šípky); index hits.length = odkaz „všetky výsledky“. */
  activeIndex?: number;
  onPick?: () => void;
  /** Odkaz na stránku so všetkými výsledkami, posledný v zozname. */
  allLink?: { href: string; label: string };
  label?: string;
  idleText?: string;
  emptyText?: string;
  errorText?: string;
  /** Hlásenie pre čítačku po dokončení hľadania (napr. „3 výsledky pre …“). */
  statusText?: string;
  linkAs?: LinkComponent;
  className?: string;
}

export function SearchResults({
  hits, status, listId, activeIndex = -1, onPick, allLink, label = "Výsledky hľadania", idleText,
  emptyText = "Nič sa nenašlo.", errorText = "Hľadanie zlyhalo. Skúste to znova.", statusText, linkAs: L = "a", className,
}: SearchResultsProps) {
  if (status === "idle") {
    return <div className={cx("sfz-searchresults", className)}>{idleText && <p className="sfz-searchresults__note">{idleText}</p>}</div>;
  }
  return (
    <div className={cx("sfz-searchresults", className)}>
      <p className="sfz-visually-hidden" role="status">{status === "done" ? statusText ?? "" : ""}</p>
      {status === "error" && <p className="sfz-searchresults__note">{errorText}</p>}
      {status === "done" && hits.length === 0 && <p className="sfz-searchresults__note">{emptyText}</p>}
      <ul id={listId} role="listbox" aria-label={label} className="sfz-searchresults__list">
        {hits.map((hit, i) => (
          <li key={hit.id} role="option" aria-selected={i === activeIndex}>
            <L id={`${listId}-${i}`} href={hit.href} onClick={onPick} tabIndex={-1} className={cx("sfz-searchresults__hit", i === activeIndex && "is-active")}>
              {hit.overline && <span className="sfz-searchresults__overline">{hit.overline}</span>}
              <span className="sfz-searchresults__title">{hit.title}</span>
              {hit.snippet && <span className="sfz-searchresults__snippet">{hit.snippet}</span>}
            </L>
          </li>
        ))}
      </ul>
      {allLink && (
        <L id={`${listId}-${hits.length}`} href={allLink.href} onClick={onPick} tabIndex={-1} className={cx("sfz-searchresults__all", activeIndex === hits.length && "is-active")}>
          <Icon name="search" size={18} />
          {allLink.label}
        </L>
      )}
    </div>
  );
}
