import * as React from "react";
import { Icon, IconName } from "./icons";

const cx = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(" ");

/* ---------- Button ---------- */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = plná modrá; secondary = modrý tint; outline = modrý tint s okrajom (cesta späť); tertiary = len text; danger = červená. */
  variant?: "primary" | "secondary" | "outline" | "tertiary" | "danger";
  /** md = 44 px (dotyk), sm = 36 px, lg = 52 px. */
  size?: "sm" | "md" | "lg";
  /** Ikona pred textom. */
  icon?: IconName | string;
  /** Spinner namiesto ikony, tlačidlo neaktívne. */
  loading?: boolean;
  /** Roztiahne na celú šírku rodiča (mobil). */
  block?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", icon, loading, block, className, children, disabled, type = "button", ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx("sfz-btn", `sfz-btn--${variant}`, `sfz-btn--${size}`, block && "sfz-btn--block", loading && "is-loading", className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <Icon name="loader" className="sfz-spin" size={size === "sm" ? 16 : 20} /> : icon ? <Icon name={icon} size={size === "sm" ? 16 : 20} /> : null}
      {children && <span className="sfz-btn__label">{children}</span>}
    </button>
  );
});

/* ---------- IconButton ---------- */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName | string;
  /** Povinný popis pre čítačku a tooltip. */
  label: string;
  variant?: "primary" | "secondary" | "outline" | "tertiary" | "danger";
  size?: "sm" | "md" | "lg";
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, label, variant = "tertiary", size = "md", className, type = "button", ...rest },
  ref
) {
  return (
    <button ref={ref} type={type} className={cx("sfz-btn", "sfz-btn--icon", `sfz-btn--${variant}`, `sfz-btn--${size}`, className)} aria-label={label} title={label} {...rest}>
      <Icon name={icon} size={size === "sm" ? 16 : size === "lg" ? 24 : 20} />
    </button>
  );
});

/* ---------- Field (spoločný obal) ---------- */
export interface FieldProps {
  label?: string;
  /** Pomocný text pod vstupom. */
  hint?: string;
  /** Chybová správa; prepne vstup do stavu error. */
  error?: string;
  required?: boolean;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Field({ label, hint, error, required, id, children, className }: FieldProps) {
  return (
    <div className={cx("sfz-field", error && "has-error", className)}>
      {label && (
        <label className="sfz-field__label" htmlFor={id}>
          {label}
          {required && <span className="sfz-field__req" aria-hidden="true"> *</span>}
        </label>
      )}
      {children}
      {error ? (
        <p className="sfz-field__error" role="alert" id={id ? `${id}-error` : undefined}>
          <Icon name="alert-triangle" size={14} /> {error}
        </p>
      ) : hint ? (
        <p className="sfz-field__hint" id={id ? `${id}-hint` : undefined}>{hint}</p>
      ) : null}
    </div>
  );
}

/* ---------- Input ---------- */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  /** Ikona vľavo (napr. search). */
  icon?: IconName | string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, icon, id, className, required, ...rest },
  ref
) {
  const autoId = React.useId();
  const inputId = id ?? `sfz-in-${autoId}`;
  return (
    <Field label={label} hint={hint} error={error} required={required} id={inputId} className={className}>
      <div className={cx("sfz-input", icon && "has-icon")}>
        {icon && <Icon name={icon} size={18} className="sfz-input__icon" />}
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...rest}
        />
      </div>
    </Field>
  );
});

/* ---------- Textarea ---------- */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, hint, error, id, className, required, rows = 4, ...rest },
  ref
) {
  const autoId = React.useId();
  const inputId = id ?? `sfz-ta-${autoId}`;
  return (
    <Field label={label} hint={hint} error={error} required={required} id={inputId} className={className}>
      <div className="sfz-input sfz-input--textarea">
        <textarea ref={ref} id={inputId} rows={rows} required={required} aria-invalid={error ? true : undefined} {...rest} />
      </div>
    </Field>
  );
});

/* ---------- Select ---------- */
export interface SelectOption { value: string; label: string; disabled?: boolean }
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  /** Prázdna prvá položka. */
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, hint, error, options, placeholder, id, className, required, ...rest },
  ref
) {
  const autoId = React.useId();
  const inputId = id ?? `sfz-sel-${autoId}`;
  return (
    <Field label={label} hint={hint} error={error} required={required} id={inputId} className={className}>
      <div className="sfz-input sfz-input--select">
        <select ref={ref} id={inputId} required={required} aria-invalid={error ? true : undefined} {...rest}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>
          ))}
        </select>
        <Icon name="chevron-down" size={18} className="sfz-input__chevron" />
      </div>
    </Field>
  );
});

/* ---------- Checkbox ---------- */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, description, className, id, ...rest },
  ref
) {
  const autoId = React.useId();
  const inputId = id ?? `sfz-cb-${autoId}`;
  return (
    <label className={cx("sfz-check", className)} htmlFor={inputId}>
      <input ref={ref} type="checkbox" id={inputId} {...rest} />
      <span className="sfz-check__box" aria-hidden="true"><Icon name="check" size={14} /></span>
      <span className="sfz-check__text">
        <span className="sfz-check__label">{label}</span>
        {description && <span className="sfz-check__desc">{description}</span>}
      </span>
    </label>
  );
});

/* ---------- Toggle (iOS switch) ---------- */
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
  description?: string;
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  { label, description, className, id, ...rest },
  ref
) {
  const autoId = React.useId();
  const inputId = id ?? `sfz-tg-${autoId}`;
  return (
    <label className={cx("sfz-toggle", className)} htmlFor={inputId}>
      <span className="sfz-check__text">
        <span className="sfz-check__label">{label}</span>
        {description && <span className="sfz-check__desc">{description}</span>}
      </span>
      <input ref={ref} type="checkbox" role="switch" id={inputId} {...rest} />
      <span className="sfz-toggle__track" aria-hidden="true"><span className="sfz-toggle__thumb" /></span>
    </label>
  );
});
