import { openBlock as d, createElementBlock as i, createElementVNode as a, defineComponent as p, computed as m, withDirectives as L, vModelCheckbox as x, toDisplayString as u, createTextVNode as y, normalizeClass as C, Fragment as M, renderList as S, createCommentVNode as v, renderSlot as _, withModifiers as I, inject as O, resolveComponent as $, createBlock as k, withCtx as V, ref as E, vModelText as N } from "vue";
const c = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, r] of t)
    s[l] = r;
  return s;
}, D = {}, B = {
  viewBox: "0 0 316 316",
  xmlns: "http://www.w3.org/2000/svg"
};
function A(e, t) {
  return d(), i("svg", B, t[0] || (t[0] = [
    a("path", { d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" }, null, -1)
  ]));
}
const ve = /* @__PURE__ */ c(D, [["render", A]]), Z = { class: "flex items-center" }, q = ["value"], H = { class: "ml-2 text-white" }, R = /* @__PURE__ */ p({
  __name: "Checkbox",
  props: {
    checked: { type: Boolean },
    value: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const s = t, l = e, r = m({
      get() {
        return l.checked;
      },
      set(o) {
        s("update:checked", o);
      }
    });
    return (o, n) => (d(), i("label", Z, [
      L(a("input", {
        type: "checkbox",
        value: o.value,
        "onUpdate:modelValue": n[0] || (n[0] = (f) => r.value = f),
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 accent-[#f39c12] transition-transform duration-200 ease-in-out"
      }, null, 8, q), [
        [x, r.value]
      ]),
      a("span", H, u(o.value), 1)
    ]));
  }
}), be = /* @__PURE__ */ c(R, [["__scopeId", "data-v-6b375724"]]), U = {
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
}, j = { class: "dropdown-toggle" }, z = {
  key: 0,
  class: "dropdown-menu"
}, K = ["onClick"];
function T(e, t, s, l, r, o) {
  return d(), i("div", {
    class: "dropdown",
    onClick: t[0] || (t[0] = (...n) => o.toggleDropdown && o.toggleDropdown(...n))
  }, [
    a("button", j, [
      y(u(r.selectedOption || s.label) + " ", 1),
      a("span", {
        class: C(["arrow", { "is-active": r.isOpen }])
      }, "▼", 2)
    ]),
    r.isOpen ? (d(), i("ul", z, [
      (d(!0), i(M, null, S(s.options, (n, f) => (d(), i("li", {
        key: f,
        class: "dropdown-item",
        onClick: (me) => o.selectOption(n)
      }, u(n), 9, K))), 128))
    ])) : v("", !0)
  ]);
}
const he = /* @__PURE__ */ c(U, [["render", T], ["__scopeId", "data-v-8ed073d5"]]), F = {
  name: "HF_Button",
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "secondary", "danger"].includes(e)
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
function G(e, t, s, l, r, o) {
  return d(), i("button", {
    class: C(["hf-button", s.variant]),
    onClick: t[0] || (t[0] = (...n) => o.handleClick && o.handleClick(...n))
  }, [
    _(e.$slots, "default", {}, void 0, !0)
  ], 2);
}
const ge = /* @__PURE__ */ c(F, [["render", G], ["__scopeId", "data-v-40613781"]]), J = p({
  name: "InputError",
  props: {
    message: {
      type: String,
      default: null
    }
  }
}), P = {
  key: 0,
  class: "input-error text-red-500 text-sm"
};
function Q(e, t, s, l, r, o) {
  return e.message ? (d(), i("div", P, u(e.message), 1)) : v("", !0);
}
const Le = /* @__PURE__ */ c(J, [["render", Q], ["__scopeId", "data-v-0977776d"]]), W = p({
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
}), X = ["for"];
function Y(e, t, s, l, r, o) {
  return d(), i("label", {
    for: e.forId,
    class: "input-label text-gray-700 text-sm"
  }, [
    y(u(e.value) + " ", 1),
    _(e.$slots, "default", {}, void 0, !0)
  ], 8, X);
}
const ye = /* @__PURE__ */ c(W, [["render", Y], ["__scopeId", "data-v-9ee5a66a"]]), ee = {
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
}, te = { class: "modal-content" }, oe = { class: "modal-header" }, ne = { class: "modal-body" }, se = { class: "modal-footer" };
function re(e, t, s, l, r, o) {
  return s.isVisible ? (d(), i("div", {
    key: 0,
    class: "modal-overlay",
    onClick: t[3] || (t[3] = I((...n) => o.closeModal && o.closeModal(...n), ["self"]))
  }, [
    a("div", te, [
      a("header", oe, [
        a("h3", null, u(s.title), 1),
        a("button", {
          class: "close-button",
          onClick: t[0] || (t[0] = (...n) => o.closeModal && o.closeModal(...n))
        }, "✖")
      ]),
      a("main", ne, [
        _(e.$slots, "default", {}, void 0, !0)
      ]),
      a("footer", se, [
        a("button", {
          class: "cancel-button",
          onClick: t[1] || (t[1] = (...n) => o.closeModal && o.closeModal(...n))
        }, "Cancel"),
        a("button", {
          class: "confirm-button",
          onClick: t[2] || (t[2] = (...n) => o.confirmAction && o.confirmAction(...n))
        }, "Confirm")
      ])
    ])
  ])) : v("", !0);
}
const $e = /* @__PURE__ */ c(ee, [["render", re], ["__scopeId", "data-v-f435dd9e"]]);
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var b;
(function(e) {
  e.pop = "pop", e.push = "push";
})(b || (b = {}));
var h;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(h || (h = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var g;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(g || (g = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const ae = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function w(e) {
  return O(ae);
}
const le = p({
  name: "NavLink",
  props: {
    to: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = w();
    return { isActive: m(() => t.path === e.to) };
  }
});
function de(e, t, s, l, r, o) {
  const n = $("router-link");
  return d(), k(n, {
    to: e.to,
    class: "nav-link"
  }, {
    default: V(({ isActive: f }) => [
      _(e.$slots, "default", { isActive: f }, void 0, !0)
    ]),
    _: 3
  }, 8, ["to"]);
}
const ke = /* @__PURE__ */ c(le, [["render", de], ["__scopeId", "data-v-b2548b8c"]]), ie = /* @__PURE__ */ p({
  __name: "ResponsiveNavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, s = w(), l = m(() => s.path === t.href || t.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");
    return (r, o) => {
      const n = $("router-link");
      return d(), k(n, {
        to: r.href,
        class: C(l.value),
        "exact-active-class": "active"
      }, {
        default: V(() => [
          _(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
}), Ve = /* @__PURE__ */ c(ie, [["__scopeId", "data-v-ba762689"]]), ce = p({
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
  setup(e, { emit: t }) {
    const s = E(e.modelValue);
    return {
      inputValue: s,
      updateValue: () => {
        t("update:modelValue", s.value);
      }
    };
  }
}), ue = { class: "text-input" }, pe = ["for"], fe = ["id", "placeholder"];
function _e(e, t, s, l, r, o) {
  return d(), i("div", ue, [
    a("label", {
      for: e.id,
      class: "input-label text-gray-700 text-sm"
    }, u(e.label), 9, pe),
    L(a("input", {
      id: e.id,
      type: "text",
      class: "input-field border-gray-300 rounded-md",
      "onUpdate:modelValue": t[0] || (t[0] = (n) => e.inputValue = n),
      onInput: t[1] || (t[1] = (...n) => e.updateValue && e.updateValue(...n)),
      placeholder: e.placeholder
    }, null, 40, fe), [
      [N, e.inputValue]
    ])
  ]);
}
const we = /* @__PURE__ */ c(ce, [["render", _e], ["__scopeId", "data-v-5163474f"]]);
export {
  ve as ApplicationLogo,
  be as Checkbox,
  he as Dropdown,
  ge as HF_Button,
  Le as InputError,
  ye as InputLabel,
  $e as Modal,
  ke as NavLink,
  Ve as ResponsiveNavLink,
  we as TextInput
};
