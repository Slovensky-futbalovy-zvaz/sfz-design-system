import * as React from "react";
import { Icon, IconName } from "./icons";

const cx = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(" ");

/* ---------- Card ---------- */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  /** Pravý horný roh hlavičky (tlačidlo, badge). */
  action?: React.ReactNode;
  /** raised = surface-raised (predvolené); highlight = brand-blue-tint; outline = biela s okrajom. */
  variant?: "raised" | "highlight" | "outline";
  /** Päta oddelená hairline. */
  footer?: React.ReactNode;
  /** Bez vnútorného odstupu (pre tabuľky a zoznamy). */
  flush?: boolean;
}

export function Card({ title, action, variant = "raised", footer, flush, className, children, ...rest }: CardProps) {
  return (
    <section className={cx("sfz-card", `sfz-card--${variant}`, flush && "sfz-card--flush", className)} {...rest}>
      {(title || action) && (
        <header className="sfz-card__head">
          {title && <h3 className="sfz-card__title">{title}</h3>}
          {action && <div className="sfz-card__action">{action}</div>}
        </header>
      )}
      <div className="sfz-card__body">{children}</div>
      {footer && <footer className="sfz-card__foot">{footer}</footer>}
    </section>
  );
}

/* ---------- Badge ---------- */
export type Tone = "neutral" | "info" | "success" | "warning" | "danger" | "brand";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  /** Bodka pred textom (stavový indikátor). */
  dot?: boolean;
}

export function Badge({ tone = "neutral", dot, className, children, ...rest }: BadgeProps) {
  return (
    <span className={cx("sfz-badge", `sfz-badge--${tone}`, className)} {...rest}>
      {dot && <span className="sfz-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}

/* ---------- Chip ---------- */
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Aktívny filter / vybraná položka. */
  selected?: boolean;
  icon?: IconName | string;
  /** Zobrazí krížik; volá sa namiesto onClick. */
  onRemove?: () => void;
}

export function Chip({ selected, icon, onRemove, className, children, type = "button", ...rest }: ChipProps) {
  return (
    <button type={type} className={cx("sfz-chip", selected && "is-selected", className)} aria-pressed={onRemove ? undefined : selected} {...rest}>
      {icon && <Icon name={icon} size={16} />}
      <span>{children}</span>
      {onRemove && (
        <span
          className="sfz-chip__remove"
          role="button"
          aria-label="Odstrániť"
          tabIndex={0}
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); onRemove(); } }}
        >
          <Icon name="x" size={14} />
        </span>
      )}
    </button>
  );
}

/* ---------- Alert ---------- */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: Exclude<Tone, "neutral" | "brand">;
  title?: string;
  onClose?: () => void;
  /** Akčné tlačidlo vpravo / pod textom na mobile. */
  action?: React.ReactNode;
}

const toneIcon: Record<string, IconName> = { info: "info", success: "check-circle", warning: "alert-triangle", danger: "x-circle" };

export function Alert({ tone = "info", title, onClose, action, className, children, ...rest }: AlertProps) {
  return (
    <div className={cx("sfz-alert", `sfz-alert--${tone}`, className)} role={tone === "danger" || tone === "warning" ? "alert" : "status"} {...rest}>
      <Icon name={toneIcon[tone]} size={20} className="sfz-alert__icon" />
      <div className="sfz-alert__body">
        {title && <p className="sfz-alert__title">{title}</p>}
        <div className="sfz-alert__text">{children}</div>
        {action && <div className="sfz-alert__action">{action}</div>}
      </div>
      {onClose && (
        <button type="button" className="sfz-alert__close" aria-label="Zavrieť" onClick={onClose}><Icon name="x" size={18} /></button>
      )}
    </div>
  );
}

/* ---------- Toast ---------- */
export interface ToastItem { id: string | number; message: string; tone?: Exclude<Tone, "neutral" | "brand">; actionLabel?: string; onAction?: () => void }
export interface ToastProps {
  items: ToastItem[];
  onDismiss: (id: ToastItem["id"]) => void;
  /** Umiestnenie; na mobile vždy dole nad TabBarom. */
  position?: "bottom" | "top";
}

export function Toast({ items, onDismiss, position = "bottom" }: ToastProps) {
  return (
    <div className={cx("sfz-toast-region", `sfz-toast-region--${position}`)} aria-live="polite" aria-relevant="additions">
      {items.map((t) => (
        <div key={t.id} className={cx("sfz-toast", t.tone && `sfz-toast--${t.tone}`)} role="status">
          {t.tone && <Icon name={toneIcon[t.tone]} size={18} />}
          <span className="sfz-toast__msg">{t.message}</span>
          {t.actionLabel && <button type="button" className="sfz-toast__action" onClick={t.onAction}>{t.actionLabel}</button>}
          <button type="button" className="sfz-toast__close" aria-label="Zavrieť" onClick={() => onDismiss(t.id)}><Icon name="x" size={16} /></button>
        </div>
      ))}
    </div>
  );
}

/* ---------- Avatar ---------- */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg" | "xl";
  /** Stavová bodka (online, aktívny). */
  status?: "online" | "offline" | "busy";
}

export function Avatar({ name, src, size = "md", status, className, ...rest }: AvatarProps) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]!.toUpperCase()).join("");
  return (
    <span className={cx("sfz-avatar", `sfz-avatar--${size}`, className)} title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : <span aria-label={name} role="img">{initials}</span>}
      {status && <span className={cx("sfz-avatar__status", `is-${status}`)} aria-hidden="true" />}
    </span>
  );
}

/* ---------- Skeleton ---------- */
export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** text = riadok textu; circle = avatar; rect = obrázok/karta. */
  shape?: "text" | "circle" | "rect";
  width?: number | string;
  height?: number | string;
  /** Počet riadkov pri shape=text. */
  lines?: number;
}

export function Skeleton({ shape = "text", width, height, lines = 1, className, style, ...rest }: SkeletonProps) {
  if (shape === "text" && lines > 1) {
    return (
      <span className={cx("sfz-skeleton-group", className)} aria-hidden="true" {...rest}>
        {Array.from({ length: lines }).map((_, i) => (
          <span key={i} className="sfz-skeleton sfz-skeleton--text" style={{ width: i === lines - 1 ? "60%" : width ?? "100%" }} />
        ))}
      </span>
    );
  }
  return <span className={cx("sfz-skeleton", `sfz-skeleton--${shape}`, className)} style={{ width, height, ...style }} aria-hidden="true" {...rest} />;
}

/* ---------- EmptyState ---------- */
export interface EmptyStateProps {
  icon?: IconName | string;
  title: string;
  description?: string;
  /** Primárna akcia (Button). */
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ icon = "inbox", title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cx("sfz-empty", className)}>
      <span className="sfz-empty__icon"><Icon name={icon} size={28} /></span>
      <h3 className="sfz-empty__title">{title}</h3>
      {description && <p className="sfz-empty__desc">{description}</p>}
      {action && <div className="sfz-empty__action">{action}</div>}
    </div>
  );
}

/* ---------- Stepper ---------- */
export interface Step { label: string; description?: string }
export interface StepperProps {
  steps: Step[];
  /** Index aktívneho kroku (0-based). Kroky pred ním sú hotové. */
  current: number;
  /** horizontal na desktope, na mobile sa automaticky skladá vertikálne. */
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({ steps, current, orientation = "horizontal", className }: StepperProps) {
  return (
    <ol className={cx("sfz-stepper", `sfz-stepper--${orientation}`, className)}>
      {steps.map((s, i) => {
        const state = i < current ? "done" : i === current ? "current" : "todo";
        return (
          <li key={i} className={cx("sfz-step", `is-${state}`)} aria-current={state === "current" ? "step" : undefined}>
            <span className="sfz-step__marker" aria-hidden="true">{state === "done" ? <Icon name="check" size={14} /> : i + 1}</span>
            <span className="sfz-step__text">
              <span className="sfz-step__label">{s.label}</span>
              {s.description && <span className="sfz-step__desc">{s.description}</span>}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

/* ---------- Accordion ---------- */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/** Zoskupené rozbaľovacie sekcie (vzor iOS zoskupeného zoznamu). Položky sú `AccordionItem`. */
export function Accordion({ className, children, ...rest }: AccordionProps) {
  return (
    <div className={cx("sfz-accordion", className)} {...rest}>
      {children}
    </div>
  );
}

export interface AccordionItemProps extends Omit<React.DetailsHTMLAttributes<HTMLElement>, "title"> {
  title: React.ReactNode;
  /** Druhý riadok pod nadpisom (napr. pre koho je sekcia). */
  subtitle?: React.ReactNode;
  /** Otvorená pri prvom zobrazení. */
  defaultOpen?: boolean;
  children: React.ReactNode;
}

/** Natívny `<details>`: funguje bez JavaScriptu, klávesnica a čítačky ho poznajú. */
export function AccordionItem({ title, subtitle, defaultOpen, className, children, ...rest }: AccordionItemProps) {
  return (
    <details className={cx("sfz-accordion__item", className)} open={defaultOpen} {...rest}>
      <summary className="sfz-accordion__summary">
        <span className="sfz-accordion__text">
          <span className="sfz-accordion__title">{title}</span>
          {subtitle && <span className="sfz-accordion__subtitle">{subtitle}</span>}
        </span>
        <span className="sfz-accordion__chevron" aria-hidden="true">
          <Icon name="chevron-down" size={18} />
        </span>
      </summary>
      <div className="sfz-accordion__body">{children}</div>
    </details>
  );
}

/* ---------- ProgressBar ---------- */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Hodnota od 0 po `max`. */
  value: number;
  max?: number;
  /** Prístupný názov, napr. „Vyplnené oblasti“. */
  label: string;
  /** Text pre čítačku namiesto percent, napr. „8 z 11 oblastí“. */
  valueText?: string;
  /** brand = modrá (postup), success = zelená (splnené). */
  tone?: "brand" | "success";
}

export function ProgressBar({ value, max = 100, label, valueText, tone = "brand", className, ...rest }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100))) || 0;
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      aria-valuetext={valueText}
      className={cx("sfz-progress", `sfz-progress--${tone}`, className)}
      {...rest}
    >
      <span className="sfz-progress__bar" style={{ width: `${pct}%` }} />
    </div>
  );
}
