import { defineComponent as u, openBlock as c, createElementBlock as i, createElementVNode as a, computed as f, normalizeClass as C, normalizeStyle as M, toDisplayString as d, withDirectives as L, vModelCheckbox as S, createTextVNode as h, Fragment as I, renderList as O, createCommentVNode as v, renderSlot as _, withModifiers as E, inject as N, resolveComponent as V, createBlock as k, withCtx as $, ref as D, vModelText as B } from "vue";
const A = {
  viewBox: "0 0 316 316",
  xmlns: "http://www.w3.org/2000/svg",
  class: "application-logo"
}, me = /* @__PURE__ */ u({
  __name: "ApplicationLogo",
  setup(e) {
    return (o, t) => (c(), i("svg", A, t[0] || (t[0] = [
      a("path", { d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" }, null, -1)
    ])));
  }
}), fe = /* @__PURE__ */ u({
  __name: "Button",
  props: {
    label: {},
    primary: { type: Boolean },
    secondary: { type: Boolean },
    danger: { type: Boolean },
    size: {},
    backgroundColor: {}
  },
  emits: ["click"],
  setup(e, { emit: o }) {
    const t = e, l = o, r = f(() => ({
      button: !0,
      "button-primary": t.primary && !t.danger && !t.secondary,
      "button-secondary": t.secondary && !t.primary && !t.danger,
      "button-danger": t.danger && !t.primary && !t.secondary,
      [`button-${t.size || "medium"}`]: !0
    })), s = f(() => ({
      backgroundColor: t.backgroundColor
    })), n = () => {
      l("click");
    };
    return (p, x) => (c(), i("button", {
      type: "button",
      class: C(r.value),
      onClick: n,
      style: M(s.value)
    }, d(p.label), 7));
  }
}), Z = { class: "flex items-center" }, q = ["value"], z = { class: "checkbox-value" }, _e = /* @__PURE__ */ u({
  __name: "Checkbox",
  props: {
    checked: { type: Boolean },
    value: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: o }) {
    const t = o, l = e, r = f({
      get() {
        return l.checked;
      },
      set(s) {
        t("update:checked", s);
      }
    });
    return (s, n) => (c(), i("label", Z, [
      L(a("input", {
        type: "checkbox",
        value: s.value,
        "onUpdate:modelValue": n[0] || (n[0] = (p) => r.value = p),
        class: "checkbox-input"
      }, null, 8, q), [
        [S, r.value]
      ]),
      a("span", z, d(s.value), 1)
    ]));
  }
}), m = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [l, r] of o)
    t[l] = r;
  return t;
}, R = {
  name: "Dropdown",
  props: {
    options: {
      type: Array,
      required: !0
    },
    label: {
      type: String,
      default: "Select an option"
    }
  },
  data() {
    return {
      isOpen: !1,
      selectedOption: null
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(e) {
      this.selectedOption = e, this.isOpen = !1, this.$emit("option-selected", e);
    }
  }
}, T = { class: "dropdown-toggle" }, U = {
  key: 0,
  class: "dropdown-menu"
}, j = ["onClick"];
function H(e, o, t, l, r, s) {
  return c(), i("div", {
    class: "dropdown",
    onClick: o[0] || (o[0] = (...n) => s.toggleDropdown && s.toggleDropdown(...n))
  }, [
    a("button", T, [
      h(d(r.selectedOption || t.label) + " ", 1),
      a("span", {
        class: C(["arrow", { "is-active": r.isOpen }])
      }, "▼", 2)
    ]),
    r.isOpen ? (c(), i("ul", U, [
      (c(!0), i(I, null, O(t.options, (n, p) => (c(), i("li", {
        key: p,
        class: "dropdown-item",
        onClick: (x) => s.selectOption(n)
      }, d(n), 9, j))), 128))
    ])) : v("", !0)
  ]);
}
const Ce = /* @__PURE__ */ m(R, [["render", H], ["__scopeId", "data-v-46b28075"]]), K = u({
  name: "InputError",
  props: {
    message: {
      type: String,
      default: null
    }
  }
}), G = {
  key: 0,
  class: "input-error text-red-500 text-sm"
};
function J(e, o, t, l, r, s) {
  return e.message ? (c(), i("div", G, d(e.message), 1)) : v("", !0);
}
const ve = /* @__PURE__ */ m(K, [["render", J], ["__scopeId", "data-v-5a6d786c"]]), P = u({
  name: "InputLabel",
  props: {
    forId: {
      type: String,
      required: !0
    },
    value: {
      type: String,
      required: !0
    }
  }
}), Q = ["for"];
function W(e, o, t, l, r, s) {
  return c(), i("label", {
    for: e.forId,
    class: "input-label text-gray-700 text-sm"
  }, [
    h(d(e.value) + " ", 1),
    _(e.$slots, "default", {}, void 0, !0)
  ], 8, Q);
}
const be = /* @__PURE__ */ m(P, [["render", W], ["__scopeId", "data-v-e0ffd222"]]), X = {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: "Modal Title"
    },
    isVisible: {
      type: Boolean,
      default: !1
    }
  },
  methods: {
    closeModal() {
      this.$emit("update:isVisible", !1);
    },
    confirmAction() {
      this.$emit("confirm"), this.closeModal();
    }
  }
}, Y = { class: "modal-content" }, F = { class: "modal-header" }, ee = { class: "modal-body" }, te = { class: "modal-footer" };
function oe(e, o, t, l, r, s) {
  return t.isVisible ? (c(), i("div", {
    key: 0,
    class: "modal-overlay",
    onClick: o[3] || (o[3] = E((...n) => s.closeModal && s.closeModal(...n), ["self"]))
  }, [
    a("div", Y, [
      a("header", F, [
        a("h3", null, d(t.title), 1),
        a("button", {
          class: "close-button",
          onClick: o[0] || (o[0] = (...n) => s.closeModal && s.closeModal(...n))
        }, "✖")
      ]),
      a("main", ee, [
        _(e.$slots, "default", {}, void 0, !0)
      ]),
      a("footer", te, [
        a("button", {
          class: "cancel-button",
          onClick: o[1] || (o[1] = (...n) => s.closeModal && s.closeModal(...n))
        }, "Cancel"),
        a("button", {
          class: "confirm-button",
          onClick: o[2] || (o[2] = (...n) => s.confirmAction && s.confirmAction(...n))
        }, "Confirm")
      ])
    ])
  ])) : v("", !0);
}
const ye = /* @__PURE__ */ m(X, [["render", oe], ["__scopeId", "data-v-0165dce0"]]);
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var b;
(function(e) {
  e.pop = "pop", e.push = "push";
})(b || (b = {}));
var y;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(y || (y = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var g;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(g || (g = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const ne = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function w(e) {
  return N(ne);
}
const se = u({
  name: "NavLink",
  props: {
    to: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const o = w();
    return { isActive: f(() => o.path === e.to) };
  }
});
function re(e, o, t, l, r, s) {
  const n = V("router-link");
  return c(), k(n, {
    to: e.to,
    class: "nav-link"
  }, {
    default: $(({ isActive: p }) => [
      _(e.$slots, "default", { isActive: p }, void 0, !0)
    ]),
    _: 3
  }, 8, ["to"]);
}
const ge = /* @__PURE__ */ m(se, [["render", re], ["__scopeId", "data-v-868ef88c"]]), ae = /* @__PURE__ */ u({
  __name: "ResponsiveNavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const o = e, t = w(), l = f(() => t.path === o.href || o.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");
    return (r, s) => {
      const n = V("router-link");
      return c(), k(n, {
        to: r.href,
        class: C(l.value),
        "exact-active-class": "active"
      }, {
        default: $(() => [
          _(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
}), Le = /* @__PURE__ */ m(ae, [["__scopeId", "data-v-0af4dc29"]]), le = u({
  name: "TextInput",
  props: {
    label: {
      type: String,
      required: !0
    },
    placeholder: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      required: !0
    }
  },
  setup(e, { emit: o }) {
    const t = D(e.modelValue);
    return {
      inputValue: t,
      updateValue: () => {
        o("update:modelValue", t.value);
      }
    };
  }
}), ce = { class: "text-input" }, ie = ["for"], de = ["id", "placeholder"];
function ue(e, o, t, l, r, s) {
  return c(), i("div", ce, [
    a("label", {
      for: e.id,
      class: "input-label text-gray-700 text-sm"
    }, d(e.label), 9, ie),
    L(a("input", {
      id: e.id,
      type: "text",
      class: "input-field border-gray-300 rounded-md",
      "onUpdate:modelValue": o[0] || (o[0] = (n) => e.inputValue = n),
      onInput: o[1] || (o[1] = (...n) => e.updateValue && e.updateValue(...n)),
      placeholder: e.placeholder
    }, null, 40, de), [
      [B, e.inputValue]
    ])
  ]);
}
const he = /* @__PURE__ */ m(le, [["render", ue], ["__scopeId", "data-v-f3708ee6"]]);
export {
  me as VueApplicationLogo,
  fe as VueButton,
  _e as VueCheckbox,
  Ce as VueDropdown,
  ve as VueInputError,
  be as VueInputLabel,
  ye as VueModal,
  ge as VueNavLink,
  Le as VueResponsiveNavLink,
  he as VueTextInput
};
