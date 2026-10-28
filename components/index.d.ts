// SFZ Design System – typy komponentov (window.SFZ / import z components/src)
import * as React from "react";

// ---- icons ----
/** Lucide ikony (ISC licencia), 24×24, stroke 2. Podmnožina pre SFZ UI. */
export const ICON_PATHS: Record<string, string>;
export type IconName = keyof typeof ICON_PATHS;
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
    /** Názov ikony z ICON_PATHS (Lucide). */
    name: IconName | string;
    /** Veľkosť v px, predvolené 20. */
    size?: number;
    /** Popis pre čítačku; bez neho je ikona dekoratívna (aria-hidden). */
    label?: string;
}
export function Icon({ name, size, label, className, ...rest }: IconProps): React.JSX.Element;

// ---- controls ----
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** primary = plná modrá; secondary = modrý tint; tertiary = len text; danger = červená. */
    variant?: "primary" | "secondary" | "tertiary" | "danger";
    /** md = 44 px (dotyk), sm = 36 px, lg = 52 px. */
    size?: "sm" | "md" | "lg";
    /** Ikona pred textom. */
    icon?: IconName | string;
    /** Spinner namiesto ikony, tlačidlo neaktívne. */
    loading?: boolean;
    /** Roztiahne na celú šírku rodiča (mobil). */
    block?: boolean;
}
export const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconName | string;
    /** Povinný popis pre čítačku a tooltip. */
    label: string;
    variant?: "primary" | "secondary" | "tertiary" | "danger";
    size?: "sm" | "md" | "lg";
}
export const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
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
export function Field({ label, hint, error, required, id, children, className }: FieldProps): React.JSX.Element;
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    hint?: string;
    error?: string;
    /** Ikona vľavo (napr. search). */
    icon?: IconName | string;
}
export const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    hint?: string;
    error?: string;
}
export const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    label?: string;
    hint?: string;
    error?: string;
    options: SelectOption[];
    /** Prázdna prvá položka. */
    placeholder?: string;
}
export const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: React.ReactNode;
    description?: string;
}
export const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: React.ReactNode;
    description?: string;
}
export const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLInputElement>>;

// ---- display ----
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
export function Card({ title, action, variant, footer, flush, className, children, ...rest }: CardProps): React.JSX.Element;
export type Tone = "neutral" | "info" | "success" | "warning" | "danger" | "brand";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    tone?: Tone;
    /** Bodka pred textom (stavový indikátor). */
    dot?: boolean;
}
export function Badge({ tone, dot, className, children, ...rest }: BadgeProps): React.JSX.Element;
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Aktívny filter / vybraná položka. */
    selected?: boolean;
    icon?: IconName | string;
    /** Zobrazí krížik; volá sa namiesto onClick. */
    onRemove?: () => void;
}
export function Chip({ selected, icon, onRemove, className, children, type, ...rest }: ChipProps): React.JSX.Element;
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    tone?: Exclude<Tone, "neutral" | "brand">;
    title?: string;
    onClose?: () => void;
    /** Akčné tlačidlo vpravo / pod textom na mobile. */
    action?: React.ReactNode;
}
export function Alert({ tone, title, onClose, action, className, children, ...rest }: AlertProps): React.JSX.Element;
export interface ToastItem {
    id: string | number;
    message: string;
    tone?: Exclude<Tone, "neutral" | "brand">;
    actionLabel?: string;
    onAction?: () => void;
}
export interface ToastProps {
    items: ToastItem[];
    onDismiss: (id: ToastItem["id"]) => void;
    /** Umiestnenie; na mobile vždy dole nad TabBarom. */
    position?: "bottom" | "top";
}
export function Toast({ items, onDismiss, position }: ToastProps): React.JSX.Element;
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
    name: string;
    src?: string;
    size?: "sm" | "md" | "lg" | "xl";
    /** Stavová bodka (online, aktívny). */
    status?: "online" | "offline" | "busy";
}
export function Avatar({ name, src, size, status, className, ...rest }: AvatarProps): React.JSX.Element;
export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** text = riadok textu; circle = avatar; rect = obrázok/karta. */
    shape?: "text" | "circle" | "rect";
    width?: number | string;
    height?: number | string;
    /** Počet riadkov pri shape=text. */
    lines?: number;
}
export function Skeleton({ shape, width, height, lines, className, style, ...rest }: SkeletonProps): React.JSX.Element;
export interface EmptyStateProps {
    icon?: IconName | string;
    title: string;
    description?: string;
    /** Primárna akcia (Button). */
    action?: React.ReactNode;
    className?: string;
}
export function EmptyState({ icon, title, description, action, className }: EmptyStateProps): React.JSX.Element;
export interface Step {
    label: string;
    description?: string;
}
export interface StepperProps {
    steps: Step[];
    /** Index aktívneho kroku (0-based). Kroky pred ním sú hotové. */
    current: number;
    /** horizontal na desktope, na mobile sa automaticky skladá vertikálne. */
    orientation?: "horizontal" | "vertical";
    className?: string;
}
export function Stepper({ steps, current, orientation, className }: StepperProps): React.JSX.Element;
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export function Accordion({ className, children, ...rest }: AccordionProps): React.JSX.Element;
export interface AccordionItemProps extends Omit<React.DetailsHTMLAttributes<HTMLElement>, "title"> {
    title: React.ReactNode;
    /** Druhý riadok pod nadpisom (napr. pre koho je sekcia). */
    subtitle?: React.ReactNode;
    /** Otvorená pri prvom zobrazení. */
    defaultOpen?: boolean;
    children: React.ReactNode;
}
export function AccordionItem({ title, subtitle, defaultOpen, className, children, ...rest }: AccordionItemProps): React.JSX.Element;
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
export function ProgressBar({ value, max, label, valueText, tone, className, ...rest }: ProgressBarProps): React.JSX.Element;

// ---- navigation ----
export interface TabItem {
    id: string;
    label: string;
    icon?: IconName | string;
    count?: number;
    disabled?: boolean;
}
export interface TabsProps {
    items: TabItem[];
    value: string;
    onChange: (id: string) => void;
    /** segmented = iOS segmented control (max. 4 položky); underline = podčiarknuté záložky (viac položiek, posúvateľné). */
    variant?: "underline" | "segmented";
    className?: string;
    "aria-label"?: string;
}
export function Tabs({ items, value, onChange, variant, className, ...rest }: TabsProps): React.JSX.Element;
export interface NavItem {
    id: string;
    label: string;
    href?: string;
    icon?: IconName | string;
    active?: boolean;
    onClick?: () => void;
}
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
export function NavBar({ brand, brandHref, items, actions, tone, onMenu, className }: NavBarProps): React.JSX.Element;
export interface TabBarItem {
    id: string;
    label: string;
    icon: IconName | string;
    href?: string;
    badge?: number;
    onClick?: () => void;
}
export interface TabBarProps {
    items: TabBarItem[];
    value: string;
    onChange?: (id: string) => void;
    className?: string;
}
export function TabBar({ items, value, onChange, className }: TabBarProps): React.JSX.Element;
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
export function Modal({ open, onClose, title, children, footer, size, sheetOnMobile }: ModalProps): React.JSX.Element | null;
export interface DrawerProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    side?: "left" | "right";
    children: React.ReactNode;
    /** Šírka na desktope v px (predvolené 320); na mobile 85 % šírky. */
    width?: number;
}
export function Drawer({ open, onClose, title, side, children, width }: DrawerProps): React.JSX.Element | null;

// ---- data ----
export interface Column<T> {
    key: keyof T & string;
    header: string;
    /** right pre čísla (tabular-nums). */
    align?: "left" | "right" | "center";
    width?: string;
    render?: (row: T) => React.ReactNode;
    /** Zoraďovateľný stĺpec (DataTable). */
    sortable?: boolean;
    /** Skryť pod bp-md; stĺpec sa ukáže až na tablete. */
    hideOnMobile?: boolean;
}
export interface TableProps<T> {
    columns: Column<T>[];
    rows: T[];
    rowKey: (row: T) => string | number;
    /** Zvýrazniť riadok pri hoveri a kliknúť. */
    onRowClick?: (row: T) => void;
    /** compact = 36 px riadky. */
    density?: "comfortable" | "compact";
    caption?: string;
    /** Na mobile zobrazí každý riadok ako kartu (label: hodnota). */
    stackOnMobile?: boolean;
    /** Aktívne zoradenie (DataTable ho riadi; dá sa použiť aj samostatne). */
    sort?: {
        key: string;
        dir: "asc" | "desc";
    } | null;
    onSort?: (key: string) => void;
    className?: string;
}
export function Table<T>({ columns, rows, rowKey, onRowClick, density, caption, stackOnMobile, sort, onSort, className }: TableProps<T>): React.JSX.Element;
export interface DataTableProps<T> extends Omit<TableProps<T>, "rows"> {
    rows: T[];
    /** Hľadá vo všetkých textových stĺpcoch. */
    searchable?: boolean;
    searchPlaceholder?: string;
    /** Výberové filtre: kľúč stĺpca → zoznam hodnôt. */
    filters?: Array<{
        key: keyof T & string;
        label: string;
        options: string[];
    }>;
    pageSize?: number;
    /** Panel nástrojov vpravo (export, nový záznam). */
    toolbar?: React.ReactNode;
    emptyTitle?: string;
}
export function DataTable<T>({ rows, columns, searchable, searchPlaceholder, filters, pageSize, toolbar, emptyTitle, ...tableProps }: DataTableProps<T>): React.JSX.Element;
export interface CalendarEvent {
    date: string;
    label?: string;
    tone?: "brand" | "success" | "warning" | "danger";
}
export interface CalendarProps {
    /** Vybraný dátum ISO (YYYY-MM-DD). */
    value?: string;
    onChange?: (iso: string) => void;
    /** Zobrazený mesiac ISO (YYYY-MM); predvolene mesiac value alebo dnešok. */
    month?: string;
    onMonthChange?: (iso: string) => void;
    events?: CalendarEvent[];
    min?: string;
    max?: string;
    className?: string;
}
export function Calendar({ value, onChange, month, onMonthChange, events, min, max, className }: CalendarProps): React.JSX.Element;
