import { openBlock as i, createElementBlock as d, createElementVNode as c, defineComponent as f, computed as y, withDirectives as p, vModelCheckbox as N, renderSlot as u, onMounted as x, onUnmounted as $, ref as E, vShow as v, createVNode as _, Transition as C, withCtx as b, normalizeClass as m, toDisplayString as B, watch as z, createBlock as w, Teleport as D, createCommentVNode as I, inject as O, resolveComponent as S, useModel as Z, vModelText as A } from "vue";
const g = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, R = {}, U = {
  viewBox: "0 0 316 316",
  xmlns: "http://www.w3.org/2000/svg"
};
function W(e, t) {
  return i(), d("svg", U, t[0] || (t[0] = [
    c("path", { d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" }, null, -1)
  ]));
}
const ie = /* @__PURE__ */ g(R, [["render", W]]), P = ["value"], de = /* @__PURE__ */ f({
  __name: "Checkbox",
  props: {
    checked: { type: Boolean },
    value: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const o = t, r = e, n = y({
      get() {
        return r.checked;
      },
      set(s) {
        o("update:checked", s);
      }
    });
    return (s, a) => p((i(), d("input", {
      type: "checkbox",
      value: s.value,
      "onUpdate:modelValue": a[0] || (a[0] = (l) => n.value = l),
      class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
    }, null, 8, P)), [
      [N, n.value]
    ]);
  }
}), j = {}, q = { class: "inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700" };
function H(e, t) {
  return i(), d("button", q, [
    u(e.$slots, "default")
  ]);
}
const ce = /* @__PURE__ */ g(j, [["render", H]]), K = { class: "relative" }, ue = /* @__PURE__ */ f({
  __name: "Dropdown",
  props: {
    align: { default: "right" },
    width: { default: "48" },
    contentClasses: { default: "py-1 bg-white" }
  },
  setup(e) {
    const t = e, o = (a) => {
      s.value && a.key === "Escape" && (s.value = !1);
    };
    x(() => document.addEventListener("keydown", o)), $(() => document.removeEventListener("keydown", o));
    const r = y(() => ({
      48: "w-48"
    })[t.width.toString()]), n = y(() => t.align === "left" ? "ltr:origin-top-left rtl:origin-top-right start-0" : t.align === "right" ? "ltr:origin-top-right rtl:origin-top-left end-0" : "origin-top"), s = E(!1);
    return (a, l) => (i(), d("div", K, [
      c("div", {
        onClick: l[0] || (l[0] = (h) => s.value = !s.value)
      }, [
        u(a.$slots, "trigger")
      ]),
      p(c("div", {
        class: "fixed inset-0 z-40",
        onClick: l[1] || (l[1] = (h) => s.value = !1)
      }, null, 512), [
        [v, s.value]
      ]),
      _(C, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: b(() => [
          p(c("div", {
            class: m(["absolute z-50 mt-2 rounded-md shadow-lg", [r.value, n.value]]),
            style: { display: "none" },
            onClick: l[2] || (l[2] = (h) => s.value = !1)
          }, [
            c("div", {
              class: m(["rounded-md ring-1 ring-black ring-opacity-5", a.contentClasses])
            }, [
              u(a.$slots, "content")
            ], 2)
          ], 2), [
            [v, s.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), T = { class: "text-sm text-red-600" }, pe = /* @__PURE__ */ f({
  __name: "InputError",
  props: {
    message: {}
  },
  setup(e) {
    return (t, o) => p((i(), d("div", null, [
      c("p", T, B(t.message), 1)
    ], 512)), [
      [v, t.message]
    ]);
  }
}), G = { class: "block text-sm font-medium text-gray-700" }, J = { key: 0 }, Q = { key: 1 }, fe = /* @__PURE__ */ f({
  __name: "InputLabel",
  props: {
    value: {}
  },
  setup(e) {
    return (t, o) => (i(), d("label", G, [
      t.value ? (i(), d("span", J, B(t.value), 1)) : (i(), d("span", Q, [
        u(t.$slots, "default")
      ]))
    ]));
  }
}), X = {
  class: "fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0",
  "scroll-region": ""
}, me = /* @__PURE__ */ f({
  __name: "Modal",
  props: {
    show: { type: Boolean, default: !1 },
    maxWidth: { default: "2xl" },
    closeable: { type: Boolean, default: !0 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, r = t;
    z(
      () => o.show,
      () => {
        o.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
      }
    );
    const n = () => {
      o.closeable && r("close");
    }, s = (l) => {
      l.key === "Escape" && o.show && n();
    };
    x(() => document.addEventListener("keydown", s)), $(() => {
      document.removeEventListener("keydown", s), document.body.style.overflow = "visible";
    });
    const a = y(() => ({
      sm: "sm:max-w-sm",
      md: "sm:max-w-md",
      lg: "sm:max-w-lg",
      xl: "sm:max-w-xl",
      "2xl": "sm:max-w-2xl"
    })[o.maxWidth]);
    return (l, h) => (i(), w(D, { to: "body" }, [
      _(C, { "leave-active-class": "duration-200" }, {
        default: b(() => [
          p(c("div", X, [
            _(C, {
              "enter-active-class": "ease-out duration-300",
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": "ease-in duration-200",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: b(() => [
                p(c("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: n
                }, h[0] || (h[0] = [
                  c("div", { class: "absolute inset-0 bg-gray-500 opacity-75" }, null, -1)
                ]), 512), [
                  [v, l.show]
                ])
              ]),
              _: 1
            }),
            _(C, {
              "enter-active-class": "ease-out duration-300",
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": "ease-in duration-200",
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: b(() => [
                p(c("div", {
                  class: m(["mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", a.value])
                }, [
                  l.show ? u(l.$slots, "default", { key: 0 }) : I("", !0)
                ], 2), [
                  [v, l.show]
                ])
              ]),
              _: 3
            })
          ], 512), [
            [v, l.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
});
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var k;
(function(e) {
  e.pop = "pop", e.push = "push";
})(k || (k = {}));
var L;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(L || (L = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var V;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(V || (V = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const Y = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function M(e) {
  return O(Y);
}
const F = /* @__PURE__ */ f({
  __name: "NavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, o = M(), r = y(() => o.path === t.href || t.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");
    return (n, s) => {
      const a = S("router-link");
      return i(), w(a, {
        to: n.href,
        class: m(r.value),
        "exact-active-class": "active"
      }, {
        default: b(() => [
          u(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
}), ve = /* @__PURE__ */ g(F, [["__scopeId", "data-v-09939e8b"]]), ee = {
  name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "button"
      // Can be 'submit', 'reset', or 'button'
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "md",
      // Can be 'sm', 'md', or 'lg' for button sizes
      validator: (e) => ["sm", "md", "lg"].includes(e)
      // Ensure valid size
    },
    block: {
      type: Boolean,
      default: !1
      // True for full-width button
    }
  },
  computed: {
    buttonClass() {
      return [
        "bg-blue-500",
        // Tailwind class for primary button color
        "hover:bg-blue-700",
        // Hover effect
        "text-white",
        // Button text color
        "font-bold",
        "py-2",
        "px-4",
        "rounded",
        this.sizeClass,
        // Handle dynamic sizing
        { "w-full": this.block, "cursor-not-allowed": this.disabled }
        // Handle block and disabled states
      ];
    },
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "text-sm";
        case "lg":
          return "text-lg";
        default:
          return "text-md";
      }
    }
  },
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}, te = ["type", "disabled", "aria-disabled"];
function se(e, t, o, r, n, s) {
  return i(), d("button", {
    class: m(s.buttonClass),
    type: o.type,
    disabled: o.disabled,
    "aria-disabled": o.disabled.toString(),
    onClick: t[0] || (t[0] = (...a) => s.handleClick && s.handleClick(...a))
  }, [
    u(e.$slots, "default", {}, void 0, !0)
  ], 10, te);
}
const be = /* @__PURE__ */ g(ee, [["render", se], ["__scopeId", "data-v-a6428f29"]]), oe = /* @__PURE__ */ f({
  __name: "ResponsiveNavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, o = M(), r = y(() => o.path === t.href || t.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");
    return (n, s) => {
      const a = S("router-link");
      return i(), w(a, {
        to: n.href,
        class: m(r.value),
        "exact-active-class": "active"
      }, {
        default: b(() => [
          u(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
}), ye = /* @__PURE__ */ g(oe, [["__scopeId", "data-v-c40ed661"]]), ne = {
  name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
      // Can be 'submit', 'reset', or 'button'
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "md",
      // Can be 'sm', 'md', or 'lg' for button sizes
      validator: (e) => ["sm", "md", "lg"].includes(e)
      // Ensure valid size
    },
    block: {
      type: Boolean,
      default: !1
      // True for full-width button
    }
  },
  computed: {
    buttonClass() {
      return [
        "bg-gray-500",
        // Tailwind class for secondary button color
        "hover:bg-gray-700",
        // Hover effect
        "text-white",
        // Button text color
        "font-bold",
        "py-2",
        "px-4",
        "rounded",
        this.sizeClass,
        // Handle dynamic sizing
        { "w-full": this.block, "cursor-not-allowed": this.disabled }
        // Handle block and disabled states
      ];
    },
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "text-sm";
        case "lg":
          return "text-lg";
        default:
          return "text-md";
      }
    }
  },
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}, ae = ["type", "disabled", "aria-disabled"];
function re(e, t, o, r, n, s) {
  return i(), d("button", {
    class: m(s.buttonClass),
    type: o.type,
    disabled: o.disabled,
    "aria-disabled": o.disabled.toString(),
    onClick: t[0] || (t[0] = (...a) => s.handleClick && s.handleClick(...a))
  }, [
    u(e.$slots, "default", {}, void 0, !0)
  ], 10, ae);
}
const ge = /* @__PURE__ */ g(ne, [["render", re], ["__scopeId", "data-v-977f816a"]]), he = /* @__PURE__ */ f({
  __name: "TextInput",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const o = Z(e, "modelValue"), r = E(null);
    return x(() => {
      var n, s;
      (n = r.value) != null && n.hasAttribute("autofocus") && ((s = r.value) == null || s.focus());
    }), t({ focus: () => {
      var n;
      return (n = r.value) == null ? void 0 : n.focus();
    } }), (n, s) => p((i(), d("input", {
      class: "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
      "onUpdate:modelValue": s[0] || (s[0] = (a) => o.value = a),
      ref_key: "input",
      ref: r
    }, null, 512)), [
      [A, o.value]
    ]);
  }
});
export {
  ie as ApplicationLogo,
  de as Checkbox,
  ce as DangerButton,
  ue as Dropdown,
  pe as InputError,
  fe as InputLabel,
  me as Modal,
  ve as NavLink,
  be as PrimaryButton,
  ye as ResponsiveNavLink,
  ge as SecondaryButton,
  he as TextInput
};
