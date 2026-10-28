/* @ds-bundle: {"format":4,"namespace":"SFZ","components":[{"name":"Button"},{"name":"IconButton"},{"name":"Input"},{"name":"Textarea"},{"name":"Select"},{"name":"Checkbox"},{"name":"Toggle"},{"name":"Card"},{"name":"Badge"},{"name":"Chip"},{"name":"Alert"},{"name":"Toast"},{"name":"Avatar"},{"name":"Skeleton"},{"name":"EmptyState"},{"name":"Stepper"},{"name":"Accordion"},{"name":"AccordionItem"},{"name":"ProgressBar"},{"name":"Tabs"},{"name":"NavBar"},{"name":"TabBar"},{"name":"Modal"},{"name":"Drawer"},{"name":"Table"},{"name":"DataTable"},{"name":"Calendar"},{"name":"Icon"}]} */

var SFZ = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // g:react
  var require_react = __commonJS({
    "g:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // ../ds/project/components/src/index.ts
  var index_exports = {};
  __export(index_exports, {
    Accordion: () => Accordion,
    AccordionItem: () => AccordionItem,
    Alert: () => Alert,
    Avatar: () => Avatar,
    Badge: () => Badge,
    Button: () => Button,
    Calendar: () => Calendar,
    Card: () => Card,
    Checkbox: () => Checkbox,
    Chip: () => Chip,
    DataTable: () => DataTable,
    Drawer: () => Drawer,
    EmptyState: () => EmptyState,
    Field: () => Field,
    ICON_PATHS: () => ICON_PATHS,
    Icon: () => Icon,
    IconButton: () => IconButton,
    Input: () => Input,
    Modal: () => Modal,
    ProgressBar: () => ProgressBar,
    NavBar: () => NavBar,
    Select: () => Select,
    Skeleton: () => Skeleton,
    Stepper: () => Stepper,
    TabBar: () => TabBar,
    Table: () => Table,
    Tabs: () => Tabs,
    Textarea: () => Textarea,
    Toast: () => Toast,
    Toggle: () => Toggle
  });

  // ../ds/project/components/src/icons.tsx
  var React = __toESM(require_react());
  var ICON_PATHS = {
    check: "M20 6 9 17l-5-5",
    x: "M18 6 6 18M6 6l12 12",
    search: "M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
    "chevron-down": "m6 9 6 6 6-6",
    "chevron-up": "m18 15-6-6-6 6",
    "chevron-left": "m15 18-6-6 6-6",
    "chevron-right": "m9 18 6-6-6-6",
    "arrow-up-down": "m21 16-4 4-4-4M17 20V4M3 8l4-4 4 4M7 4v16",
    plus: "M5 12h14M12 5v14",
    minus: "M5 12h14",
    menu: "M4 6h16M4 12h16M4 18h16",
    home: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",
    trophy: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z",
    calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    user: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    settings: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    bell: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0",
    info: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01",
    "alert-triangle": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3zM12 9v4M12 17h.01",
    "check-circle": "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3",
    "x-circle": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM15 9l-6 6M9 9l6 6",
    inbox: "M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
    "file-text": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
    "log-out": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
    "more-horizontal": "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
    download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
    edit: "M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
    trash: "M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    loader: "M21 12a9 9 0 1 1-6.22-8.56",
    "map": "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zM15 5.764v15M9 3.236v15",
    "map-pin": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "compass": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
    "book-open": "M12 7v14M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    "star": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
  };
  function Icon({ name, size = 20, label, className, ...rest }) {
    var _a;
    const d = (_a = ICON_PATHS[name]) != null ? _a : ICON_PATHS.info;
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        className: ["sfz-icon", className].filter(Boolean).join(" "),
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        role: label ? "img" : void 0,
        "aria-label": label,
        "aria-hidden": label ? void 0 : true,
        ...rest
      },
      /* @__PURE__ */ React.createElement("path", { d })
    );
  }

  // ../ds/project/components/src/controls.tsx
  var React2 = __toESM(require_react());
  var cx = (...a) => a.filter(Boolean).join(" ");
  var Button = React2.forwardRef(function Button2({ variant = "primary", size = "md", icon, loading, block, className, children, disabled, type = "button", ...rest }, ref) {
    return /* @__PURE__ */ React2.createElement(
      "button",
      {
        ref,
        type,
        className: cx("sfz-btn", `sfz-btn--${variant}`, `sfz-btn--${size}`, block && "sfz-btn--block", loading && "is-loading", className),
        disabled: disabled || loading,
        "aria-busy": loading || void 0,
        ...rest
      },
      loading ? /* @__PURE__ */ React2.createElement(Icon, { name: "loader", className: "sfz-spin", size: size === "sm" ? 16 : 20 }) : icon ? /* @__PURE__ */ React2.createElement(Icon, { name: icon, size: size === "sm" ? 16 : 20 }) : null,
      children && /* @__PURE__ */ React2.createElement("span", { className: "sfz-btn__label" }, children)
    );
  });
  var IconButton = React2.forwardRef(function IconButton2({ icon, label, variant = "tertiary", size = "md", className, type = "button", ...rest }, ref) {
    return /* @__PURE__ */ React2.createElement("button", { ref, type, className: cx("sfz-btn", "sfz-btn--icon", `sfz-btn--${variant}`, `sfz-btn--${size}`, className), "aria-label": label, title: label, ...rest }, /* @__PURE__ */ React2.createElement(Icon, { name: icon, size: size === "sm" ? 16 : size === "lg" ? 24 : 20 }));
  });
  function Field({ label, hint, error, required, id, children, className }) {
    return /* @__PURE__ */ React2.createElement("div", { className: cx("sfz-field", error && "has-error", className) }, label && /* @__PURE__ */ React2.createElement("label", { className: "sfz-field__label", htmlFor: id }, label, required && /* @__PURE__ */ React2.createElement("span", { className: "sfz-field__req", "aria-hidden": "true" }, " *")), children, error ? /* @__PURE__ */ React2.createElement("p", { className: "sfz-field__error", role: "alert", id: id ? `${id}-error` : void 0 }, /* @__PURE__ */ React2.createElement(Icon, { name: "alert-triangle", size: 14 }), " ", error) : hint ? /* @__PURE__ */ React2.createElement("p", { className: "sfz-field__hint", id: id ? `${id}-hint` : void 0 }, hint) : null);
  }
  var Input = React2.forwardRef(function Input2({ label, hint, error, icon, id, className, required, ...rest }, ref) {
    const autoId = React2.useId();
    const inputId = id != null ? id : `sfz-in-${autoId}`;
    return /* @__PURE__ */ React2.createElement(Field, { label, hint, error, required, id: inputId, className }, /* @__PURE__ */ React2.createElement("div", { className: cx("sfz-input", icon && "has-icon") }, icon && /* @__PURE__ */ React2.createElement(Icon, { name: icon, size: 18, className: "sfz-input__icon" }), /* @__PURE__ */ React2.createElement(
      "input",
      {
        ref,
        id: inputId,
        required,
        "aria-invalid": error ? true : void 0,
        "aria-describedby": error ? `${inputId}-error` : hint ? `${inputId}-hint` : void 0,
        ...rest
      }
    )));
  });
  var Textarea = React2.forwardRef(function Textarea2({ label, hint, error, id, className, required, rows = 4, ...rest }, ref) {
    const autoId = React2.useId();
    const inputId = id != null ? id : `sfz-ta-${autoId}`;
    return /* @__PURE__ */ React2.createElement(Field, { label, hint, error, required, id: inputId, className }, /* @__PURE__ */ React2.createElement("div", { className: "sfz-input sfz-input--textarea" }, /* @__PURE__ */ React2.createElement("textarea", { ref, id: inputId, rows, required, "aria-invalid": error ? true : void 0, ...rest })));
  });
  var Select = React2.forwardRef(function Select2({ label, hint, error, options, placeholder, id, className, required, ...rest }, ref) {
    const autoId = React2.useId();
    const inputId = id != null ? id : `sfz-sel-${autoId}`;
    return /* @__PURE__ */ React2.createElement(Field, { label, hint, error, required, id: inputId, className }, /* @__PURE__ */ React2.createElement("div", { className: "sfz-input sfz-input--select" }, /* @__PURE__ */ React2.createElement("select", { ref, id: inputId, required, "aria-invalid": error ? true : void 0, ...rest }, placeholder && /* @__PURE__ */ React2.createElement("option", { value: "" }, placeholder), options.map((o) => /* @__PURE__ */ React2.createElement("option", { key: o.value, value: o.value, disabled: o.disabled }, o.label))), /* @__PURE__ */ React2.createElement(Icon, { name: "chevron-down", size: 18, className: "sfz-input__chevron" })));
  });
  var Checkbox = React2.forwardRef(function Checkbox2({ label, description, className, id, ...rest }, ref) {
    const autoId = React2.useId();
    const inputId = id != null ? id : `sfz-cb-${autoId}`;
    return /* @__PURE__ */ React2.createElement("label", { className: cx("sfz-check", className), htmlFor: inputId }, /* @__PURE__ */ React2.createElement("input", { ref, type: "checkbox", id: inputId, ...rest }), /* @__PURE__ */ React2.createElement("span", { className: "sfz-check__box", "aria-hidden": "true" }, /* @__PURE__ */ React2.createElement(Icon, { name: "check", size: 14 })), /* @__PURE__ */ React2.createElement("span", { className: "sfz-check__text" }, /* @__PURE__ */ React2.createElement("span", { className: "sfz-check__label" }, label), description && /* @__PURE__ */ React2.createElement("span", { className: "sfz-check__desc" }, description)));
  });
  var Toggle = React2.forwardRef(function Toggle2({ label, description, className, id, ...rest }, ref) {
    const autoId = React2.useId();
    const inputId = id != null ? id : `sfz-tg-${autoId}`;
    return /* @__PURE__ */ React2.createElement("label", { className: cx("sfz-toggle", className), htmlFor: inputId }, /* @__PURE__ */ React2.createElement("span", { className: "sfz-check__text" }, /* @__PURE__ */ React2.createElement("span", { className: "sfz-check__label" }, label), description && /* @__PURE__ */ React2.createElement("span", { className: "sfz-check__desc" }, description)), /* @__PURE__ */ React2.createElement("input", { ref, type: "checkbox", role: "switch", id: inputId, ...rest }), /* @__PURE__ */ React2.createElement("span", { className: "sfz-toggle__track", "aria-hidden": "true" }, /* @__PURE__ */ React2.createElement("span", { className: "sfz-toggle__thumb" })));
  });

  // ../ds/project/components/src/display.tsx
  var React3 = __toESM(require_react());
  var cx2 = (...a) => a.filter(Boolean).join(" ");
  function Card({ title, action, variant = "raised", footer, flush, className, children, ...rest }) {
    return /* @__PURE__ */ React3.createElement("section", { className: cx2("sfz-card", `sfz-card--${variant}`, flush && "sfz-card--flush", className), ...rest }, (title || action) && /* @__PURE__ */ React3.createElement("header", { className: "sfz-card__head" }, title && /* @__PURE__ */ React3.createElement("h3", { className: "sfz-card__title" }, title), action && /* @__PURE__ */ React3.createElement("div", { className: "sfz-card__action" }, action)), /* @__PURE__ */ React3.createElement("div", { className: "sfz-card__body" }, children), footer && /* @__PURE__ */ React3.createElement("footer", { className: "sfz-card__foot" }, footer));
  }
  function Badge({ tone = "neutral", dot, className, children, ...rest }) {
    return /* @__PURE__ */ React3.createElement("span", { className: cx2("sfz-badge", `sfz-badge--${tone}`, className), ...rest }, dot && /* @__PURE__ */ React3.createElement("span", { className: "sfz-badge__dot", "aria-hidden": "true" }), children);
  }
  function Chip({ selected, icon, onRemove, className, children, type = "button", ...rest }) {
    return /* @__PURE__ */ React3.createElement("button", { type, className: cx2("sfz-chip", selected && "is-selected", className), "aria-pressed": onRemove ? void 0 : selected, ...rest }, icon && /* @__PURE__ */ React3.createElement(Icon, { name: icon, size: 16 }), /* @__PURE__ */ React3.createElement("span", null, children), onRemove && /* @__PURE__ */ React3.createElement(
      "span",
      {
        className: "sfz-chip__remove",
        role: "button",
        "aria-label": "Odstr\xE1ni\u0165",
        tabIndex: 0,
        onClick: (e) => {
          e.stopPropagation();
          onRemove();
        },
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation();
            onRemove();
          }
        }
      },
      /* @__PURE__ */ React3.createElement(Icon, { name: "x", size: 14 })
    ));
  }
  var toneIcon = { info: "info", success: "check-circle", warning: "alert-triangle", danger: "x-circle" };
  function Alert({ tone = "info", title, onClose, action, className, children, ...rest }) {
    return /* @__PURE__ */ React3.createElement("div", { className: cx2("sfz-alert", `sfz-alert--${tone}`, className), role: tone === "danger" || tone === "warning" ? "alert" : "status", ...rest }, /* @__PURE__ */ React3.createElement(Icon, { name: toneIcon[tone], size: 20, className: "sfz-alert__icon" }), /* @__PURE__ */ React3.createElement("div", { className: "sfz-alert__body" }, title && /* @__PURE__ */ React3.createElement("p", { className: "sfz-alert__title" }, title), /* @__PURE__ */ React3.createElement("div", { className: "sfz-alert__text" }, children), action && /* @__PURE__ */ React3.createElement("div", { className: "sfz-alert__action" }, action)), onClose && /* @__PURE__ */ React3.createElement("button", { type: "button", className: "sfz-alert__close", "aria-label": "Zavrie\u0165", onClick: onClose }, /* @__PURE__ */ React3.createElement(Icon, { name: "x", size: 18 })));
  }
  function Toast({ items, onDismiss, position = "bottom" }) {
    return /* @__PURE__ */ React3.createElement("div", { className: cx2("sfz-toast-region", `sfz-toast-region--${position}`), "aria-live": "polite", "aria-relevant": "additions" }, items.map((t) => /* @__PURE__ */ React3.createElement("div", { key: t.id, className: cx2("sfz-toast", t.tone && `sfz-toast--${t.tone}`), role: "status" }, t.tone && /* @__PURE__ */ React3.createElement(Icon, { name: toneIcon[t.tone], size: 18 }), /* @__PURE__ */ React3.createElement("span", { className: "sfz-toast__msg" }, t.message), t.actionLabel && /* @__PURE__ */ React3.createElement("button", { type: "button", className: "sfz-toast__action", onClick: t.onAction }, t.actionLabel), /* @__PURE__ */ React3.createElement("button", { type: "button", className: "sfz-toast__close", "aria-label": "Zavrie\u0165", onClick: () => onDismiss(t.id) }, /* @__PURE__ */ React3.createElement(Icon, { name: "x", size: 16 })))));
  }
  function Avatar({ name, src, size = "md", status, className, ...rest }) {
    const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
    return /* @__PURE__ */ React3.createElement("span", { className: cx2("sfz-avatar", `sfz-avatar--${size}`, className), title: name, ...rest }, src ? /* @__PURE__ */ React3.createElement("img", { src, alt: name }) : /* @__PURE__ */ React3.createElement("span", { "aria-label": name, role: "img" }, initials), status && /* @__PURE__ */ React3.createElement("span", { className: cx2("sfz-avatar__status", `is-${status}`), "aria-hidden": "true" }));
  }
  function Skeleton({ shape = "text", width, height, lines = 1, className, style, ...rest }) {
    if (shape === "text" && lines > 1) {
      return /* @__PURE__ */ React3.createElement("span", { className: cx2("sfz-skeleton-group", className), "aria-hidden": "true", ...rest }, Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ React3.createElement("span", { key: i, className: "sfz-skeleton sfz-skeleton--text", style: { width: i === lines - 1 ? "60%" : width != null ? width : "100%" } })));
    }
    return /* @__PURE__ */ React3.createElement("span", { className: cx2("sfz-skeleton", `sfz-skeleton--${shape}`, className), style: { width, height, ...style }, "aria-hidden": "true", ...rest });
  }
  function EmptyState({ icon = "inbox", title, description, action, className }) {
    return /* @__PURE__ */ React3.createElement("div", { className: cx2("sfz-empty", className) }, /* @__PURE__ */ React3.createElement("span", { className: "sfz-empty__icon" }, /* @__PURE__ */ React3.createElement(Icon, { name: icon, size: 28 })), /* @__PURE__ */ React3.createElement("h3", { className: "sfz-empty__title" }, title), description && /* @__PURE__ */ React3.createElement("p", { className: "sfz-empty__desc" }, description), action && /* @__PURE__ */ React3.createElement("div", { className: "sfz-empty__action" }, action));
  }
  function Stepper({ steps, current, orientation = "horizontal", className }) {
    return /* @__PURE__ */ React3.createElement("ol", { className: cx2("sfz-stepper", `sfz-stepper--${orientation}`, className) }, steps.map((s, i) => {
      const state = i < current ? "done" : i === current ? "current" : "todo";
      return /* @__PURE__ */ React3.createElement("li", { key: i, className: cx2("sfz-step", `is-${state}`), "aria-current": state === "current" ? "step" : void 0 }, /* @__PURE__ */ React3.createElement("span", { className: "sfz-step__marker", "aria-hidden": "true" }, state === "done" ? /* @__PURE__ */ React3.createElement(Icon, { name: "check", size: 14 }) : i + 1), /* @__PURE__ */ React3.createElement("span", { className: "sfz-step__text" }, /* @__PURE__ */ React3.createElement("span", { className: "sfz-step__label" }, s.label), s.description && /* @__PURE__ */ React3.createElement("span", { className: "sfz-step__desc" }, s.description)));
    }));
  }

  function Accordion({ className, children, ...rest }) {
    return /* @__PURE__ */ React3.createElement("div", { className: cx2("sfz-accordion", className), ...rest }, children);
  }
  function AccordionItem({ title, subtitle, defaultOpen, className, children, ...rest }) {
    return /* @__PURE__ */ React3.createElement("details", { className: cx2("sfz-accordion__item", className), open: defaultOpen, ...rest }, /* @__PURE__ */ React3.createElement("summary", { className: "sfz-accordion__summary" }, /* @__PURE__ */ React3.createElement("span", { className: "sfz-accordion__text" }, /* @__PURE__ */ React3.createElement("span", { className: "sfz-accordion__title" }, title), subtitle && /* @__PURE__ */ React3.createElement("span", { className: "sfz-accordion__subtitle" }, subtitle)), /* @__PURE__ */ React3.createElement("span", { className: "sfz-accordion__chevron", "aria-hidden": "true" }, /* @__PURE__ */ React3.createElement(Icon, { name: "chevron-down", size: 18 }))), /* @__PURE__ */ React3.createElement("div", { className: "sfz-accordion__body" }, children));
  }
  function ProgressBar({ value, max = 100, label, valueText, tone = "brand", className, ...rest }) {
    const pct = Math.max(0, Math.min(100, Math.round(value / max * 100))) || 0;
    return /* @__PURE__ */ React3.createElement(
      "div",
      {
        role: "progressbar",
        "aria-label": label,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": pct,
        "aria-valuetext": valueText,
        className: cx2("sfz-progress", `sfz-progress--${tone}`, className),
        ...rest
      },
      /* @__PURE__ */ React3.createElement("span", { className: "sfz-progress__bar", style: { width: `${pct}%` } })
    );
  }

  // ../ds/project/components/src/navigation.tsx
  var React4 = __toESM(require_react());
  var cx3 = (...a) => a.filter(Boolean).join(" ");
  function Tabs({ items, value, onChange, variant = "underline", className, ...rest }) {
    const refs = React4.useRef([]);
    const onKey = (e, i) => {
      var _a;
      const enabled = items.map((it, idx) => !it.disabled ? idx : -1).filter((x) => x >= 0);
      const pos = enabled.indexOf(i);
      let next = -1;
      if (e.key === "ArrowRight") next = enabled[(pos + 1) % enabled.length];
      if (e.key === "ArrowLeft") next = enabled[(pos - 1 + enabled.length) % enabled.length];
      if (e.key === "Home") next = enabled[0];
      if (e.key === "End") next = enabled[enabled.length - 1];
      if (next >= 0) {
        e.preventDefault();
        onChange(items[next].id);
        (_a = refs.current[next]) == null ? void 0 : _a.focus();
      }
    };
    return /* @__PURE__ */ React4.createElement("div", { className: cx3("sfz-tabs", `sfz-tabs--${variant}`, className), role: "tablist", "aria-label": rest["aria-label"] }, items.map((it, i) => /* @__PURE__ */ React4.createElement(
      "button",
      {
        key: it.id,
        ref: (el) => {
          refs.current[i] = el;
        },
        type: "button",
        role: "tab",
        id: `tab-${it.id}`,
        "aria-selected": value === it.id,
        "aria-controls": `panel-${it.id}`,
        tabIndex: value === it.id ? 0 : -1,
        disabled: it.disabled,
        className: cx3("sfz-tab", value === it.id && "is-active"),
        onClick: () => onChange(it.id),
        onKeyDown: (e) => onKey(e, i)
      },
      it.icon && /* @__PURE__ */ React4.createElement(Icon, { name: it.icon, size: 18 }),
      /* @__PURE__ */ React4.createElement("span", null, it.label),
      typeof it.count === "number" && /* @__PURE__ */ React4.createElement("span", { className: "sfz-tab__count" }, it.count)
    )));
  }
  function NavBar({ brand, brandHref = "/", items, actions, tone = "light", onMenu, className }) {
    return /* @__PURE__ */ React4.createElement("header", { className: cx3("sfz-navbar", `sfz-navbar--${tone}`, className) }, /* @__PURE__ */ React4.createElement("div", { className: "sfz-navbar__inner" }, onMenu && /* @__PURE__ */ React4.createElement("button", { type: "button", className: "sfz-navbar__menu", "aria-label": "Menu", onClick: onMenu }, /* @__PURE__ */ React4.createElement(Icon, { name: "menu", size: 22 })), /* @__PURE__ */ React4.createElement("a", { className: "sfz-navbar__brand", href: brandHref }, brand), /* @__PURE__ */ React4.createElement("nav", { className: "sfz-navbar__nav", "aria-label": "Hlavn\xE1 navig\xE1cia" }, items.map((it) => {
      var _a;
      return /* @__PURE__ */ React4.createElement("a", { key: it.id, href: (_a = it.href) != null ? _a : "#", onClick: it.onClick, className: cx3("sfz-navbar__link", it.active && "is-active"), "aria-current": it.active ? "page" : void 0 }, it.icon && /* @__PURE__ */ React4.createElement(Icon, { name: it.icon, size: 18 }), it.label);
    })), actions && /* @__PURE__ */ React4.createElement("div", { className: "sfz-navbar__actions" }, actions)));
  }
  function TabBar({ items, value, onChange, className }) {
    return /* @__PURE__ */ React4.createElement("nav", { className: cx3("sfz-tabbar", className), "aria-label": "Navig\xE1cia" }, items.slice(0, 5).map((it) => {
      var _a;
      const active = it.id === value;
      return /* @__PURE__ */ React4.createElement(
        "a",
        {
          key: it.id,
          href: (_a = it.href) != null ? _a : "#",
          className: cx3("sfz-tabbar__item", active && "is-active"),
          "aria-current": active ? "page" : void 0,
          onClick: (e) => {
            var _a2;
            if (!it.href) e.preventDefault();
            (_a2 = it.onClick) == null ? void 0 : _a2.call(it);
            onChange == null ? void 0 : onChange(it.id);
          }
        },
        /* @__PURE__ */ React4.createElement("span", { className: "sfz-tabbar__icon" }, /* @__PURE__ */ React4.createElement(Icon, { name: it.icon, size: 24 }), it.badge ? /* @__PURE__ */ React4.createElement("span", { className: "sfz-tabbar__badge" }, it.badge > 99 ? "99+" : it.badge) : null),
        /* @__PURE__ */ React4.createElement("span", { className: "sfz-tabbar__label" }, it.label)
      );
    }));
  }
  function useLockBody(open) {
    React4.useEffect(() => {
      if (!open) return;
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }, [open]);
  }
  function useEscape(open, onClose) {
    React4.useEffect(() => {
      if (!open) return;
      const h = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", h);
      return () => document.removeEventListener("keydown", h);
    }, [open, onClose]);
  }
  function Modal({ open, onClose, title, children, footer, size = "md", sheetOnMobile = true }) {
    useLockBody(open);
    useEscape(open, onClose);
    const ref = React4.useRef(null);
    React4.useEffect(() => {
      var _a;
      if (open) (_a = ref.current) == null ? void 0 : _a.focus();
    }, [open]);
    if (!open) return null;
    const id = `sfz-modal-${title.replace(/\W+/g, "-").toLowerCase()}`;
    return /* @__PURE__ */ React4.createElement("div", { className: "sfz-overlay", role: "presentation", onMouseDown: (e) => {
      if (e.target === e.currentTarget) onClose();
    } }, /* @__PURE__ */ React4.createElement("div", { ref, tabIndex: -1, role: "dialog", "aria-modal": "true", "aria-labelledby": id, className: cx3("sfz-modal", `sfz-modal--${size}`, sheetOnMobile && "sfz-modal--sheet") }, /* @__PURE__ */ React4.createElement("header", { className: "sfz-modal__head" }, /* @__PURE__ */ React4.createElement("h2", { id, className: "sfz-modal__title" }, title), /* @__PURE__ */ React4.createElement("button", { type: "button", className: "sfz-modal__close", "aria-label": "Zavrie\u0165", onClick: onClose }, /* @__PURE__ */ React4.createElement(Icon, { name: "x", size: 20 }))), /* @__PURE__ */ React4.createElement("div", { className: "sfz-modal__body" }, children), footer && /* @__PURE__ */ React4.createElement("footer", { className: "sfz-modal__foot" }, footer)));
  }
  function Drawer({ open, onClose, title, side = "left", children, width = 320 }) {
    useLockBody(open);
    useEscape(open, onClose);
    if (!open) return null;
    return /* @__PURE__ */ React4.createElement("div", { className: "sfz-overlay sfz-overlay--drawer", role: "presentation", onMouseDown: (e) => {
      if (e.target === e.currentTarget) onClose();
    } }, /* @__PURE__ */ React4.createElement("aside", { role: "dialog", "aria-modal": "true", "aria-label": title != null ? title : "Panel", className: cx3("sfz-drawer", `sfz-drawer--${side}`), style: { width: `min(85vw, ${width}px)` } }, /* @__PURE__ */ React4.createElement("header", { className: "sfz-drawer__head" }, title && /* @__PURE__ */ React4.createElement("h2", { className: "sfz-drawer__title" }, title), /* @__PURE__ */ React4.createElement("button", { type: "button", className: "sfz-modal__close", "aria-label": "Zavrie\u0165", onClick: onClose }, /* @__PURE__ */ React4.createElement(Icon, { name: "x", size: 20 }))), /* @__PURE__ */ React4.createElement("div", { className: "sfz-drawer__body" }, children)));
  }

  // ../ds/project/components/src/data.tsx
  var React5 = __toESM(require_react());
  var cx4 = (...a) => a.filter(Boolean).join(" ");
  function Table({ columns, rows, rowKey, onRowClick, density = "comfortable", caption, stackOnMobile = true, sort, onSort, className }) {
    return /* @__PURE__ */ React5.createElement("div", { className: cx4("sfz-table-wrap", className) }, /* @__PURE__ */ React5.createElement("table", { className: cx4("sfz-table", `sfz-table--${density}`, stackOnMobile && "sfz-table--stack", onRowClick && "is-clickable") }, caption && /* @__PURE__ */ React5.createElement("caption", { className: "sfz-visually-hidden" }, caption), /* @__PURE__ */ React5.createElement("thead", null, /* @__PURE__ */ React5.createElement("tr", null, columns.map((c) => /* @__PURE__ */ React5.createElement("th", { key: c.key, scope: "col", style: { width: c.width, textAlign: c.align }, className: cx4(c.hideOnMobile && "sfz-hide-mobile"), "aria-sort": c.sortable && (sort == null ? void 0 : sort.key) === c.key ? sort.dir === "asc" ? "ascending" : "descending" : void 0 }, c.sortable && onSort ? /* @__PURE__ */ React5.createElement("button", { type: "button", className: cx4("sfz-table__sort", (sort == null ? void 0 : sort.key) === c.key && "is-active"), onClick: () => onSort(c.key) }, c.header, /* @__PURE__ */ React5.createElement(Icon, { name: (sort == null ? void 0 : sort.key) === c.key ? sort.dir === "asc" ? "chevron-up" : "chevron-down" : "arrow-up-down", size: 14 })) : c.header)))), /* @__PURE__ */ React5.createElement("tbody", null, rows.map((r) => /* @__PURE__ */ React5.createElement("tr", { key: rowKey(r), onClick: onRowClick ? () => onRowClick(r) : void 0, tabIndex: onRowClick ? 0 : void 0, onKeyDown: onRowClick ? (e) => {
      if (e.key === "Enter") onRowClick(r);
    } : void 0 }, columns.map((c) => {
      var _a;
      return /* @__PURE__ */ React5.createElement("td", { key: c.key, "data-label": c.header, style: { textAlign: c.align }, className: cx4(c.align === "right" && "is-num", c.hideOnMobile && "sfz-hide-mobile") }, c.render ? c.render(r) : String((_a = r[c.key]) != null ? _a : ""));
    }))))));
  }
  function DataTable({ rows, columns, searchable = true, searchPlaceholder = "H\u013Eada\u0165", filters = [], pageSize = 10, toolbar, emptyTitle = "\u017Diadne z\xE1znamy", ...tableProps }) {
    const [q, setQ] = React5.useState("");
    const [sort, setSort] = React5.useState(null);
    const [page, setPage] = React5.useState(0);
    const [fvals, setFvals] = React5.useState({});
    const filtered = React5.useMemo(() => {
      let out = rows;
      if (q.trim()) {
        const needle = q.toLowerCase();
        out = out.filter((r) => columns.some((c) => {
          var _a;
          return String((_a = r[c.key]) != null ? _a : "").toLowerCase().includes(needle);
        }));
      }
      for (const [k, v] of Object.entries(fvals)) if (v) out = out.filter((r) => String(r[k]) === v);
      if (sort) {
        const dir = sort.dir === "asc" ? 1 : -1;
        out = [...out].sort((a, b) => {
          const av = a[sort.key], bv = b[sort.key];
          if (typeof av === "number" && typeof bv === "number") return (av - bv) * dir;
          return String(av != null ? av : "").localeCompare(String(bv != null ? bv : ""), "sk") * dir;
        });
      }
      return out;
    }, [rows, q, fvals, sort, columns]);
    const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const safePage = Math.min(page, pages - 1);
    const slice = filtered.slice(safePage * pageSize, safePage * pageSize + pageSize);
    return /* @__PURE__ */ React5.createElement("div", { className: "sfz-datatable" }, /* @__PURE__ */ React5.createElement("div", { className: "sfz-datatable__bar" }, searchable && /* @__PURE__ */ React5.createElement(Input, { icon: "search", placeholder: searchPlaceholder, value: q, onChange: (e) => {
      setQ(e.target.value);
      setPage(0);
    }, "aria-label": searchPlaceholder }), filters.map((f) => {
      var _a;
      return /* @__PURE__ */ React5.createElement(Select, { key: f.key, placeholder: f.label, "aria-label": f.label, options: f.options.map((o) => ({ value: o, label: o })), value: (_a = fvals[f.key]) != null ? _a : "", onChange: (e) => {
        setFvals({ ...fvals, [f.key]: e.target.value });
        setPage(0);
      } });
    }), toolbar && /* @__PURE__ */ React5.createElement("div", { className: "sfz-datatable__tools" }, toolbar)), slice.length === 0 ? /* @__PURE__ */ React5.createElement(EmptyState, { icon: "search", title: emptyTitle, description: q ? `Pre \u201E${q}\u201C sa ni\u010D nena\u0161lo.` : void 0 }) : /* @__PURE__ */ React5.createElement(
      Table,
      {
        ...tableProps,
        rows: slice,
        columns,
        sort,
        onSort: (key) => setSort((s) => (s == null ? void 0 : s.key) === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" })
      }
    ), /* @__PURE__ */ React5.createElement("div", { className: "sfz-datatable__foot" }, /* @__PURE__ */ React5.createElement("span", { className: "sfz-datatable__count" }, filtered.length, " z\xE1znamov"), /* @__PURE__ */ React5.createElement("div", { className: "sfz-datatable__pager" }, /* @__PURE__ */ React5.createElement(IconButton, { icon: "chevron-left", label: "Predch\xE1dzaj\xFAca strana", size: "sm", disabled: safePage === 0, onClick: () => setPage(safePage - 1) }), /* @__PURE__ */ React5.createElement("span", { className: "sfz-datatable__page" }, safePage + 1, " / ", pages), /* @__PURE__ */ React5.createElement(IconButton, { icon: "chevron-right", label: "\u010Eal\u0161ia strana", size: "sm", disabled: safePage >= pages - 1, onClick: () => setPage(safePage + 1) }))));
  }
  var SK_MONTHS = ["janu\xE1r", "febru\xE1r", "marec", "apr\xEDl", "m\xE1j", "j\xFAn", "j\xFAl", "august", "september", "okt\xF3ber", "november", "december"];
  var SK_DAYS = ["Po", "Ut", "St", "\u0160t", "Pi", "So", "Ne"];
  var iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  function Calendar({ value, onChange, month, onMonthChange, events = [], min, max, className }) {
    const today = iso(/* @__PURE__ */ new Date());
    const [innerMonth, setInnerMonth] = React5.useState(() => {
      var _a;
      return ((_a = month != null ? month : value) != null ? _a : today).slice(0, 7);
    });
    const m = month != null ? month : innerMonth;
    const [y, mo] = m.split("-").map(Number);
    const first = new Date(y, mo - 1, 1);
    const offset = (first.getDay() + 6) % 7;
    const daysIn = new Date(y, mo, 0).getDate();
    const cells = [...Array(offset).fill(null), ...Array.from({ length: daysIn }, (_, i) => new Date(y, mo - 1, i + 1))];
    while (cells.length % 7) cells.push(null);
    const evByDay = React5.useMemo(() => {
      var _a, _b;
      const map = {};
      for (const e of events) ((_b = map[_a = e.date]) != null ? _b : map[_a] = []).push(e);
      return map;
    }, [events]);
    const setMonth = (delta) => {
      const d = new Date(y, mo - 1 + delta, 1);
      const next = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      onMonthChange ? onMonthChange(next) : setInnerMonth(next);
    };
    return /* @__PURE__ */ React5.createElement("div", { className: cx4("sfz-calendar", className) }, /* @__PURE__ */ React5.createElement("div", { className: "sfz-calendar__head" }, /* @__PURE__ */ React5.createElement(IconButton, { icon: "chevron-left", label: "Predch\xE1dzaj\xFAci mesiac", size: "sm", onClick: () => setMonth(-1) }), /* @__PURE__ */ React5.createElement("span", { className: "sfz-calendar__month", "aria-live": "polite" }, SK_MONTHS[mo - 1], " ", y), /* @__PURE__ */ React5.createElement(IconButton, { icon: "chevron-right", label: "Nasleduj\xFAci mesiac", size: "sm", onClick: () => setMonth(1) })), /* @__PURE__ */ React5.createElement("div", { className: "sfz-calendar__grid", role: "grid" }, SK_DAYS.map((d) => /* @__PURE__ */ React5.createElement("span", { key: d, className: "sfz-calendar__dow", role: "columnheader" }, d)), cells.map((d, i) => {
      var _a;
      if (!d) return /* @__PURE__ */ React5.createElement("span", { key: i, className: "sfz-calendar__cell is-empty" });
      const k = iso(d);
      const disabled = min && k < min || max && k > max;
      const evs = (_a = evByDay[k]) != null ? _a : [];
      return /* @__PURE__ */ React5.createElement(
        "button",
        {
          key: k,
          type: "button",
          role: "gridcell",
          className: cx4("sfz-calendar__cell", k === value && "is-selected", k === today && "is-today", d.getDay() === 0 && "is-sunday"),
          disabled: !!disabled,
          "aria-selected": k === value,
          "aria-label": `${d.getDate()}. ${SK_MONTHS[mo - 1]} ${y}${evs.length ? `, ${evs.length} udalost\xED` : ""}`,
          onClick: () => onChange == null ? void 0 : onChange(k)
        },
        /* @__PURE__ */ React5.createElement("span", { className: "sfz-calendar__num" }, d.getDate()),
        evs.length > 0 && /* @__PURE__ */ React5.createElement("span", { className: "sfz-calendar__dots", "aria-hidden": "true" }, evs.slice(0, 3).map((e, j) => {
          var _a2;
          return /* @__PURE__ */ React5.createElement("span", { key: j, className: cx4("sfz-calendar__dot", `is-${(_a2 = e.tone) != null ? _a2 : "brand"}`) });
        }))
      );
    })));
  }
  return __toCommonJS(index_exports);
})();
