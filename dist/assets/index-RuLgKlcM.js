(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
function sc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Zs = { exports: {} },
  rl = {},
  Xs = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gt = Symbol.for("react.element"),
  uc = Symbol.for("react.portal"),
  ac = Symbol.for("react.fragment"),
  cc = Symbol.for("react.strict_mode"),
  dc = Symbol.for("react.profiler"),
  fc = Symbol.for("react.provider"),
  pc = Symbol.for("react.context"),
  mc = Symbol.for("react.forward_ref"),
  hc = Symbol.for("react.suspense"),
  vc = Symbol.for("react.memo"),
  gc = Symbol.for("react.lazy"),
  Io = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Io && e[Io]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Js = Object.assign,
  qs = {};
function st(e, n, t) {
  ((this.props = e),
    (this.context = n),
    (this.refs = qs),
    (this.updater = t || Gs));
}
st.prototype.isReactComponent = {};
st.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
st.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bs() {}
bs.prototype = st.prototype;
function Vi(e, n, t) {
  ((this.props = e),
    (this.context = n),
    (this.refs = qs),
    (this.updater = t || Gs));
}
var Wi = (Vi.prototype = new bs());
Wi.constructor = Vi;
Js(Wi, st.prototype);
Wi.isPureReactComponent = !0;
var Ao = Array.isArray,
  eu = Object.prototype.hasOwnProperty,
  Hi = { current: null },
  nu = { key: !0, ref: !0, __self: !0, __source: !0 };
function tu(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (i = "" + n.key),
    n))
      eu.call(n, r) && !nu.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var a = Array(u), d = 0; d < u; d++) a[d] = arguments[d + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Gt,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Hi.current,
  };
}
function xc(e, n) {
  return {
    $$typeof: Gt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gt;
}
function wc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Uo = /\/+/g;
function kl(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? wc("" + e.key)
    : n.toString(36);
}
function Sr(e, n, t, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gt:
          case uc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + kl(o, 0) : r),
      Ao(l)
        ? ((t = ""),
          e != null && (t = e.replace(Uo, "$&/") + "/"),
          Sr(l, n, t, "", function (d) {
            return d;
          }))
        : l != null &&
          (Bi(l) &&
            (l = xc(
              l,
              t +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Uo, "$&/") + "/") +
                e,
            )),
          n.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ao(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + kl(i, u);
      o += Sr(i, n, t, a, l);
    }
  else if (((a = yc(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      ((i = i.value), (a = r + kl(i, u++)), (o += Sr(i, n, t, a, l)));
  else if (i === "object")
    throw (
      (n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function rr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Sr(e, r, "", "", function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function Sc(e) {
  if (e._status === -1) {
    var n = e._result;
    ((n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = n)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  kr = { transition: null },
  kc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: kr,
    ReactCurrentOwner: Hi,
  };
function ru() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: rr,
  forEach: function (e, n, t) {
    rr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t,
    );
  },
  count: function (e) {
    var n = 0;
    return (
      rr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      rr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Bi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
T.Component = st;
T.Fragment = ac;
T.Profiler = dc;
T.PureComponent = Vi;
T.StrictMode = cc;
T.Suspense = hc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kc;
T.act = ru;
T.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Js({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (o = Hi.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in n)
      eu.call(n, a) &&
        !nu.hasOwnProperty(a) &&
        (r[a] = n[a] === void 0 && u !== void 0 ? u[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    u = Array(a);
    for (var d = 0; d < a; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Gt, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: pc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = tu;
T.createFactory = function (e) {
  var n = tu.bind(null, e);
  return ((n.type = e), n);
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: mc, render: e };
};
T.isValidElement = Bi;
T.lazy = function (e) {
  return { $$typeof: gc, _payload: { _status: -1, _result: e }, _init: Sc };
};
T.memo = function (e, n) {
  return { $$typeof: vc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function (e) {
  var n = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = n;
  }
};
T.unstable_act = ru;
T.useCallback = function (e, n) {
  return ue.current.useCallback(e, n);
};
T.useContext = function (e) {
  return ue.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
T.useEffect = function (e, n) {
  return ue.current.useEffect(e, n);
};
T.useId = function () {
  return ue.current.useId();
};
T.useImperativeHandle = function (e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function (e, n) {
  return ue.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function (e, n) {
  return ue.current.useLayoutEffect(e, n);
};
T.useMemo = function (e, n) {
  return ue.current.useMemo(e, n);
};
T.useReducer = function (e, n, t) {
  return ue.current.useReducer(e, n, t);
};
T.useRef = function (e) {
  return ue.current.useRef(e);
};
T.useState = function (e) {
  return ue.current.useState(e);
};
T.useSyncExternalStore = function (e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function () {
  return ue.current.useTransition();
};
T.version = "18.3.1";
Xs.exports = T;
var Be = Xs.exports;
const jc = sc(Be);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ec = Be,
  Nc = Symbol.for("react.element"),
  _c = Symbol.for("react.fragment"),
  Cc = Object.prototype.hasOwnProperty,
  Pc = Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function lu(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  (t !== void 0 && (i = "" + t),
    n.key !== void 0 && (i = "" + n.key),
    n.ref !== void 0 && (o = n.ref));
  for (r in n) Cc.call(n, r) && !zc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Nc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Pc.current,
  };
}
rl.Fragment = _c;
rl.jsx = lu;
rl.jsxs = lu;
Zs.exports = rl;
var s = Zs.exports,
  Zl = {},
  iu = { exports: {} },
  xe = {},
  ou = { exports: {} },
  su = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(E, P) {
    var z = E.length;
    E.push(P);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        G = E[Q];
      if (0 < l(G, P)) ((E[Q] = P), (E[z] = G), (z = Q));
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var P = E[0],
      z = E.pop();
    if (z !== P) {
      E[0] = z;
      e: for (var Q = 0, G = E.length, nr = G >>> 1; Q < nr; ) {
        var yn = 2 * (Q + 1) - 1,
          Sl = E[yn],
          xn = yn + 1,
          tr = E[xn];
        if (0 > l(Sl, z))
          xn < G && 0 > l(tr, Sl)
            ? ((E[Q] = tr), (E[xn] = z), (Q = xn))
            : ((E[Q] = Sl), (E[yn] = z), (Q = yn));
        else if (xn < G && 0 > l(tr, z)) ((E[Q] = tr), (E[xn] = z), (Q = xn));
        else break e;
      }
    }
    return P;
  }
  function l(E, P) {
    var z = E.sortIndex - P.sortIndex;
    return z !== 0 ? z : E.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    d = [],
    v = 1,
    h = null,
    m = 3,
    x = !1,
    w = !1,
    S = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var P = t(d); P !== null; ) {
      if (P.callback === null) r(d);
      else if (P.startTime <= E)
        (r(d), (P.sortIndex = P.expirationTime), n(a, P));
      else break;
      P = t(d);
    }
  }
  function g(E) {
    if (((S = !1), p(E), !w))
      if (t(a) !== null) ((w = !0), xl(j));
      else {
        var P = t(d);
        P !== null && wl(g, P.startTime - E);
      }
  }
  function j(E, P) {
    ((w = !1), S && ((S = !1), f(C), (C = -1)), (x = !0));
    var z = m;
    try {
      for (
        p(P), h = t(a);
        h !== null && (!(h.expirationTime > P) || (E && !Ce()));
      ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          ((h.callback = null), (m = h.priorityLevel));
          var G = Q(h.expirationTime <= P);
          ((P = e.unstable_now()),
            typeof G == "function" ? (h.callback = G) : h === t(a) && r(a),
            p(P));
        } else r(a);
        h = t(a);
      }
      if (h !== null) var nr = !0;
      else {
        var yn = t(d);
        (yn !== null && wl(g, yn.startTime - P), (nr = !1));
      }
      return nr;
    } finally {
      ((h = null), (m = z), (x = !1));
    }
  }
  var N = !1,
    _ = null,
    C = -1,
    B = 5,
    L = -1;
  function Ce() {
    return !(e.unstable_now() - L < B);
  }
  function ct() {
    if (_ !== null) {
      var E = e.unstable_now();
      L = E;
      var P = !0;
      try {
        P = _(!0, E);
      } finally {
        P ? dt() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var dt;
  if (typeof c == "function")
    dt = function () {
      c(ct);
    };
  else if (typeof MessageChannel < "u") {
    var Do = new MessageChannel(),
      oc = Do.port2;
    ((Do.port1.onmessage = ct),
      (dt = function () {
        oc.postMessage(null);
      }));
  } else
    dt = function () {
      A(ct, 0);
    };
  function xl(E) {
    ((_ = E), N || ((N = !0), dt()));
  }
  function wl(E, P) {
    C = A(function () {
      E(e.unstable_now());
    }, P);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), xl(j));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (B = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(a);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var z = m;
      m = P;
      try {
        return E();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, P) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var z = m;
      m = E;
      try {
        return P();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, P, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
          : (z = Q),
        E)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (E = {
          id: v++,
          callback: P,
          priorityLevel: E,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > Q
          ? ((E.sortIndex = z),
            n(d, E),
            t(a) === null &&
              E === t(d) &&
              (S ? (f(C), (C = -1)) : (S = !0), wl(g, z - Q)))
          : ((E.sortIndex = G), n(a, E), w || x || ((w = !0), xl(j))),
        E
      );
    }),
    (e.unstable_shouldYield = Ce),
    (e.unstable_wrapCallback = function (E) {
      var P = m;
      return function () {
        var z = m;
        m = P;
        try {
          return E.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    }));
})(su);
ou.exports = su;
var Tc = ou.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lc = Be,
  ye = Tc;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var uu = new Set(),
  Mt = {};
function Fn(e, n) {
  (bn(e, n), bn(e + "Capture", n));
}
function bn(e, n) {
  for (Mt[e] = n, e = 0; e < n.length; e++) uu.add(n[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xl = Object.prototype.hasOwnProperty,
  Fc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $o = {},
  Vo = {};
function Mc(e) {
  return Xl.call(Vo, e)
    ? !0
    : Xl.call($o, e)
      ? !1
      : Fc.test(e)
        ? (Vo[e] = !0)
        : (($o[e] = !0), !1);
}
function Rc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Oc(e, n, t, r) {
  if (n === null || typeof n > "u" || Rc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ae(e, n, t, r, l, i, o) {
  ((this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ne[n] = new ae(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Qi, Ki);
    ne[n] = new ae(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Qi, Ki);
    ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Qi, Ki);
  ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yi(e, n, t, r) {
  var l = ne.hasOwnProperty(n) ? ne[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Oc(n, t, l, r) && (t = null),
    r || l === null
      ? Mc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
        ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
        : ((n = l.attributeName),
          (r = l.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((l = l.type),
              (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ge = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  Dn = Symbol.for("react.fragment"),
  Zi = Symbol.for("react.strict_mode"),
  Gl = Symbol.for("react.profiler"),
  au = Symbol.for("react.provider"),
  cu = Symbol.for("react.context"),
  Xi = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  Gi = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  du = Symbol.for("react.offscreen"),
  Wo = Symbol.iterator;
function ft(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wo && e[Wo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  jl;
function wt(e) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      jl = (n && n[1]) || "";
    }
  return (
    `
` +
    jl +
    e
  );
}
var El = !1;
function Nl(e, n) {
  if (!e || El) return "";
  El = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          r = d;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];
      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    ((El = !1), (Error.prepareStackTrace = t));
  }
  return (e = e ? e.displayName || e.name : "") ? wt(e) : "";
}
function Dc(e) {
  switch (e.tag) {
    case 5:
      return wt(e.type);
    case 16:
      return wt("Lazy");
    case 13:
      return wt("Suspense");
    case 19:
      return wt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Nl(e.type, !1)), e);
    case 11:
      return ((e = Nl(e.type.render, !1)), e);
    case 1:
      return ((e = Nl(e.type, !0)), e);
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case On:
      return "Portal";
    case Gl:
      return "Profiler";
    case Zi:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cu:
        return (e.displayName || "Context") + ".Consumer";
      case au:
        return (e._context.displayName || "Context") + ".Provider";
      case Xi:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gi:
        return (
          (n = e.displayName || null),
          n !== null ? n : bl(e.type) || "Memo"
        );
      case qe:
        ((n = e._payload), (e = e._init));
        try {
          return bl(e(n));
        } catch {}
    }
  return null;
}
function Ic(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(n);
    case 8:
      return n === Zi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fu(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Ac(e) {
  var n = fu(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[n]);
        },
      }
    );
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = Ac(e));
}
function pu(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = fu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Mr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ei(e, n) {
  var t = n.checked;
  return W({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Ho(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  ((t = pn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    }));
}
function mu(e, n) {
  ((n = n.checked), n != null && Yi(e, "checked", n, !1));
}
function ni(e, n) {
  mu(e, n);
  var t = pn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (n.hasOwnProperty("value")
    ? ti(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && ti(e, n.type, pn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked));
}
function Bo(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    ((n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n));
  }
  ((t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t));
}
function ti(e, n, t) {
  (n !== "number" || Mr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var St = Array.isArray;
function Yn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      ((l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0));
  } else {
    for (t = "" + pn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ri(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return W({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Qo(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (St(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    (n == null && (n = ""), (t = n));
  }
  e._wrapperState = { initialValue: pn(t) };
}
function hu(e, n) {
  var t = pn(n.value),
    r = pn(n.defaultValue);
  (t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r));
}
function Ko(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function vu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function li(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vu(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var or,
  gu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        or = or || document.createElement("div"),
          or.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = or.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Rt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Et = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Uc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Et).forEach(function (e) {
  Uc.forEach(function (n) {
    ((n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Et[n] = Et[e]));
  });
});
function yu(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (Et.hasOwnProperty(e) && Et[e])
      ? ("" + n).trim()
      : n + "px";
}
function xu(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = yu(t, n[t], r);
      (t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l));
    }
}
var $c = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ii(e, n) {
  if (n) {
    if ($c[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function oi(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var si = null;
function Ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ui = null,
  Zn = null,
  Xn = null;
function Yo(e) {
  if ((e = bt(e))) {
    if (typeof ui != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = ul(n)), ui(e.stateNode, e.type, n));
  }
}
function wu(e) {
  Zn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Zn = e);
}
function Su() {
  if (Zn) {
    var e = Zn,
      n = Xn;
    if (((Xn = Zn = null), Yo(e), n)) for (e = 0; e < n.length; e++) Yo(n[e]);
  }
}
function ku(e, n) {
  return e(n);
}
function ju() {}
var _l = !1;
function Eu(e, n, t) {
  if (_l) return e(n, t);
  _l = !0;
  try {
    return ku(e, n, t);
  } finally {
    ((_l = !1), (Zn !== null || Xn !== null) && (ju(), Su()));
  }
}
function Ot(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = ul(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var ai = !1;
if (Ke)
  try {
    var pt = {};
    (Object.defineProperty(pt, "passive", {
      get: function () {
        ai = !0;
      },
    }),
      window.addEventListener("test", pt, pt),
      window.removeEventListener("test", pt, pt));
  } catch {
    ai = !1;
  }
function Vc(e, n, t, r, l, i, o, u, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, d);
  } catch (v) {
    this.onError(v);
  }
}
var Nt = !1,
  Rr = null,
  Or = !1,
  ci = null,
  Wc = {
    onError: function (e) {
      ((Nt = !0), (Rr = e));
    },
  };
function Hc(e, n, t, r, l, i, o, u, a) {
  ((Nt = !1), (Rr = null), Vc.apply(Wc, arguments));
}
function Bc(e, n, t, r, l, i, o, u, a) {
  if ((Hc.apply(this, arguments), Nt)) {
    if (Nt) {
      var d = Rr;
      ((Nt = !1), (Rr = null));
    } else throw Error(y(198));
    Or || ((Or = !0), (ci = d));
  }
}
function Mn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do ((n = e), n.flags & 4098 && (t = n.return), (e = n.return));
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Nu(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Zo(e) {
  if (Mn(e) !== e) throw Error(y(188));
}
function Qc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Mn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return (Zo(l), e);
        if (i === r) return (Zo(l), n);
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) ((t = l), (r = i));
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          ((o = !0), (t = l), (r = i));
          break;
        }
        if (u === r) {
          ((o = !0), (r = l), (t = i));
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === t) {
            ((o = !0), (t = i), (r = l));
            break;
          }
          if (u === r) {
            ((o = !0), (r = i), (t = l));
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function _u(e) {
  return ((e = Qc(e)), e !== null ? Cu(e) : null);
}
function Cu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Cu(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Pu = ye.unstable_scheduleCallback,
  Xo = ye.unstable_cancelCallback,
  Kc = ye.unstable_shouldYield,
  Yc = ye.unstable_requestPaint,
  K = ye.unstable_now,
  Zc = ye.unstable_getCurrentPriorityLevel,
  qi = ye.unstable_ImmediatePriority,
  zu = ye.unstable_UserBlockingPriority,
  Dr = ye.unstable_NormalPriority,
  Xc = ye.unstable_LowPriority,
  Tu = ye.unstable_IdlePriority,
  ll = null,
  Ae = null;
function Gc(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : bc,
  Jc = Math.log,
  qc = Math.LN2;
function bc(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Jc(e) / qc) | 0)) | 0);
}
var sr = 64,
  ur = 4194304;
function kt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = kt(u)) : ((i &= o), i !== 0 && (r = kt(i)));
  } else ((o = t & ~l), o !== 0 ? (r = kt(o)) : i !== 0 && (r = kt(i)));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      ((t = 31 - Fe(n)), (l = 1 << t), (r |= e[t]), (n &= ~l));
  return r;
}
function ed(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function nd(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var o = 31 - Fe(i),
      u = 1 << o,
      a = l[o];
    (a === -1
      ? (!(u & t) || u & r) && (l[o] = ed(u, n))
      : a <= n && (e.expiredLanes |= u),
      (i &= ~u));
  }
}
function di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Lu() {
  var e = sr;
  return ((sr <<= 1), !(sr & 4194240) && (sr = 64), e);
}
function Cl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Jt(e, n, t) {
  ((e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Fe(n)),
    (e[n] = t));
}
function td(e, n) {
  var t = e.pendingLanes & ~n;
  ((e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Fe(t),
      i = 1 << l;
    ((n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i));
  }
}
function bi(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Fe(t),
      l = 1 << r;
    ((l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l));
  }
}
var R = 0;
function Fu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Mu,
  eo,
  Ru,
  Ou,
  Du,
  fi = !1,
  ar = [],
  ln = null,
  on = null,
  sn = null,
  Dt = new Map(),
  It = new Map(),
  en = [],
  rd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Go(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      Dt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      It.delete(n.pointerId);
  }
}
function mt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = bt(n)), n !== null && eo(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function ld(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return ((ln = mt(ln, e, n, t, r, l)), !0);
    case "dragenter":
      return ((on = mt(on, e, n, t, r, l)), !0);
    case "mouseover":
      return ((sn = mt(sn, e, n, t, r, l)), !0);
    case "pointerover":
      var i = l.pointerId;
      return (Dt.set(i, mt(Dt.get(i) || null, e, n, t, r, l)), !0);
    case "gotpointercapture":
      return (
        (i = l.pointerId),
        It.set(i, mt(It.get(i) || null, e, n, t, r, l)),
        !0
      );
  }
  return !1;
}
function Iu(e) {
  var n = kn(e.target);
  if (n !== null) {
    var t = Mn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Nu(t)), n !== null)) {
          ((e.blockedOn = n),
            Du(e.priority, function () {
              Ru(t);
            }));
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = pi(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      ((si = r), t.target.dispatchEvent(r), (si = null));
    } else return ((n = bt(t)), n !== null && eo(n), (e.blockedOn = t), !1);
    n.shift();
  }
  return !0;
}
function Jo(e, n, t) {
  jr(e) && t.delete(n);
}
function id() {
  ((fi = !1),
    ln !== null && jr(ln) && (ln = null),
    on !== null && jr(on) && (on = null),
    sn !== null && jr(sn) && (sn = null),
    Dt.forEach(Jo),
    It.forEach(Jo));
}
function ht(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    fi ||
      ((fi = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, id)));
}
function At(e) {
  function n(l) {
    return ht(l, e);
  }
  if (0 < ar.length) {
    ht(ar[0], e);
    for (var t = 1; t < ar.length; t++) {
      var r = ar[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ln !== null && ht(ln, e),
      on !== null && ht(on, e),
      sn !== null && ht(sn, e),
      Dt.forEach(n),
      It.forEach(n),
      t = 0;
    t < en.length;
    t++
  )
    ((r = en[t]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < en.length && ((t = en[0]), t.blockedOn === null); )
    (Iu(t), t.blockedOn === null && en.shift());
}
var Gn = Ge.ReactCurrentBatchConfig,
  Ar = !0;
function od(e, n, t, r) {
  var l = R,
    i = Gn.transition;
  Gn.transition = null;
  try {
    ((R = 1), no(e, n, t, r));
  } finally {
    ((R = l), (Gn.transition = i));
  }
}
function sd(e, n, t, r) {
  var l = R,
    i = Gn.transition;
  Gn.transition = null;
  try {
    ((R = 4), no(e, n, t, r));
  } finally {
    ((R = l), (Gn.transition = i));
  }
}
function no(e, n, t, r) {
  if (Ar) {
    var l = pi(e, n, t, r);
    if (l === null) (Il(e, n, r, Ur, t), Go(e, r));
    else if (ld(l, e, n, t, r)) r.stopPropagation();
    else if ((Go(e, r), n & 4 && -1 < rd.indexOf(e))) {
      for (; l !== null; ) {
        var i = bt(l);
        if (
          (i !== null && Mu(i),
          (i = pi(e, n, t, r)),
          i === null && Il(e, n, r, Ur, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Il(e, n, r, null, t);
  }
}
var Ur = null;
function pi(e, n, t, r) {
  if (((Ur = null), (e = Ji(r)), (e = kn(e)), e !== null))
    if (((n = Mn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Nu(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return ((Ur = e), null);
}
function Au(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Zc()) {
        case qi:
          return 1;
        case zu:
          return 4;
        case Dr:
        case Xc:
          return 16;
        case Tu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  to = null,
  Er = null;
function Uu() {
  if (Er) return Er;
  var e,
    n = to,
    t = n.length,
    r,
    l = "value" in tn ? tn.value : tn.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
  return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cr() {
  return !0;
}
function qo() {
  return !1;
}
function we(e) {
  function n(t, r, l, i, o) {
    ((this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? cr
        : qo),
      (this.isPropagationStopped = qo),
      this
    );
  }
  return (
    W(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = cr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = cr));
      },
      persist: function () {},
      isPersistent: cr,
    }),
    n
  );
}
var ut = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ro = we(ut),
  qt = W({}, ut, { view: 0, detail: 0 }),
  ud = we(qt),
  Pl,
  zl,
  vt,
  il = W({}, qt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vt &&
            (vt && e.type === "mousemove"
              ? ((Pl = e.screenX - vt.screenX), (zl = e.screenY - vt.screenY))
              : (zl = Pl = 0),
            (vt = e)),
          Pl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  bo = we(il),
  ad = W({}, il, { dataTransfer: 0 }),
  cd = we(ad),
  dd = W({}, qt, { relatedTarget: 0 }),
  Tl = we(dd),
  fd = W({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pd = we(fd),
  md = W({}, ut, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  hd = we(md),
  vd = W({}, ut, { data: 0 }),
  es = we(vd),
  gd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  yd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  xd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wd(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = xd[e]) ? !!n[e] : !1;
}
function lo() {
  return wd;
}
var Sd = W({}, qt, {
    key: function (e) {
      if (e.key) {
        var n = gd[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = Nr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? yd[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lo,
    charCode: function (e) {
      return e.type === "keypress" ? Nr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  kd = we(Sd),
  jd = W({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ns = we(jd),
  Ed = W({}, qt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lo,
  }),
  Nd = we(Ed),
  _d = W({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cd = we(_d),
  Pd = W({}, il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zd = we(Pd),
  Td = [9, 13, 27, 32],
  io = Ke && "CompositionEvent" in window,
  _t = null;
Ke && "documentMode" in document && (_t = document.documentMode);
var Ld = Ke && "TextEvent" in window && !_t,
  $u = Ke && (!io || (_t && 8 < _t && 11 >= _t)),
  ts = " ",
  rs = !1;
function Vu(e, n) {
  switch (e) {
    case "keyup":
      return Td.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var In = !1;
function Fd(e, n) {
  switch (e) {
    case "compositionend":
      return Wu(n);
    case "keypress":
      return n.which !== 32 ? null : ((rs = !0), ts);
    case "textInput":
      return ((e = n.data), e === ts && rs ? null : e);
    default:
      return null;
  }
}
function Md(e, n) {
  if (In)
    return e === "compositionend" || (!io && Vu(e, n))
      ? ((e = Uu()), (Er = to = tn = null), (In = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return $u && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Rd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ls(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Rd[e.type] : n === "textarea";
}
function Hu(e, n, t, r) {
  (wu(r),
    (n = $r(n, "onChange")),
    0 < n.length &&
      ((t = new ro("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n })));
}
var Ct = null,
  Ut = null;
function Od(e) {
  ea(e, 0);
}
function ol(e) {
  var n = $n(e);
  if (pu(n)) return e;
}
function Dd(e, n) {
  if (e === "change") return n;
}
var Bu = !1;
if (Ke) {
  var Ll;
  if (Ke) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var is = document.createElement("div");
      (is.setAttribute("oninput", "return;"),
        (Fl = typeof is.oninput == "function"));
    }
    Ll = Fl;
  } else Ll = !1;
  Bu = Ll && (!document.documentMode || 9 < document.documentMode);
}
function os() {
  Ct && (Ct.detachEvent("onpropertychange", Qu), (Ut = Ct = null));
}
function Qu(e) {
  if (e.propertyName === "value" && ol(Ut)) {
    var n = [];
    (Hu(n, Ut, e, Ji(e)), Eu(Od, n));
  }
}
function Id(e, n, t) {
  e === "focusin"
    ? (os(), (Ct = n), (Ut = t), Ct.attachEvent("onpropertychange", Qu))
    : e === "focusout" && os();
}
function Ad(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ol(Ut);
}
function Ud(e, n) {
  if (e === "click") return ol(n);
}
function $d(e, n) {
  if (e === "input" || e === "change") return ol(n);
}
function Vd(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Re = typeof Object.is == "function" ? Object.is : Vd;
function $t(e, n) {
  if (Re(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Xl.call(n, l) || !Re(e[l], n[l])) return !1;
  }
  return !0;
}
function ss(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function us(e, n) {
  var t = ss(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ss(t);
  }
}
function Ku(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
          ? Ku(e, n.parentNode)
          : "contains" in e
            ? e.contains(n)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(n) & 16)
              : !1
    : !1;
}
function Yu() {
  for (var e = window, n = Mr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Mr(e.document);
  }
  return n;
}
function oo(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Wd(e) {
  var n = Yu(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Ku(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && oo(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        ((t.selectionStart = n),
          (t.selectionEnd = Math.min(e, t.value.length)));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        ((r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = us(t, i)));
        var o = us(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      ((e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Hd = Ke && "documentMode" in document && 11 >= document.documentMode,
  An = null,
  mi = null,
  Pt = null,
  hi = !1;
function as(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  hi ||
    An == null ||
    An !== Mr(r) ||
    ((r = An),
    "selectionStart" in r && oo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pt && $t(Pt, r)) ||
      ((Pt = r),
      (r = $r(mi, "onSelect")),
      0 < r.length &&
        ((n = new ro("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = An))));
}
function dr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var Un = {
    animationend: dr("Animation", "AnimationEnd"),
    animationiteration: dr("Animation", "AnimationIteration"),
    animationstart: dr("Animation", "AnimationStart"),
    transitionend: dr("Transition", "TransitionEnd"),
  },
  Ml = {},
  Zu = {};
Ke &&
  ((Zu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Un.animationend.animation,
    delete Un.animationiteration.animation,
    delete Un.animationstart.animation),
  "TransitionEvent" in window || delete Un.transitionend.transition);
function sl(e) {
  if (Ml[e]) return Ml[e];
  if (!Un[e]) return e;
  var n = Un[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Zu) return (Ml[e] = n[t]);
  return e;
}
var Xu = sl("animationend"),
  Gu = sl("animationiteration"),
  Ju = sl("animationstart"),
  qu = sl("transitionend"),
  bu = new Map(),
  cs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function hn(e, n) {
  (bu.set(e, n), Fn(n, [e]));
}
for (var Rl = 0; Rl < cs.length; Rl++) {
  var Ol = cs[Rl],
    Bd = Ol.toLowerCase(),
    Qd = Ol[0].toUpperCase() + Ol.slice(1);
  hn(Bd, "on" + Qd);
}
hn(Xu, "onAnimationEnd");
hn(Gu, "onAnimationIteration");
hn(Ju, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(qu, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Fn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Fn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Fn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Fn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var jt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Kd = new Set("cancel close invalid load scroll toggle".split(" ").concat(jt));
function ds(e, n, t) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = t), Bc(r, n, void 0, e), (e.currentTarget = null));
}
function ea(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          (ds(l, u, d), (i = a));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          (ds(l, u, d), (i = a));
        }
    }
  }
  if (Or) throw ((e = ci), (Or = !1), (ci = null), e);
}
function D(e, n) {
  var t = n[wi];
  t === void 0 && (t = n[wi] = new Set());
  var r = e + "__bubble";
  t.has(r) || (na(n, e, 2, !1), t.add(r));
}
function Dl(e, n, t) {
  var r = 0;
  (n && (r |= 4), na(t, e, r, n));
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function Vt(e) {
  if (!e[fr]) {
    ((e[fr] = !0),
      uu.forEach(function (t) {
        t !== "selectionchange" && (Kd.has(t) || Dl(t, !1, e), Dl(t, !0, e));
      }));
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[fr] || ((n[fr] = !0), Dl("selectionchange", !1, n));
  }
}
function na(e, n, t, r) {
  switch (Au(n)) {
    case 1:
      var l = od;
      break;
    case 4:
      l = sd;
      break;
    default:
      l = no;
  }
  ((t = l.bind(null, n, t, e)),
    (l = void 0),
    !ai ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
        ? e.addEventListener(n, t, { passive: l })
        : e.addEventListener(n, t, !1));
}
function Il(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = kn(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Eu(function () {
    var d = i,
      v = Ji(t),
      h = [];
    e: {
      var m = bu.get(e);
      if (m !== void 0) {
        var x = ro,
          w = e;
        switch (e) {
          case "keypress":
            if (Nr(t) === 0) break e;
          case "keydown":
          case "keyup":
            x = kd;
            break;
          case "focusin":
            ((w = "focus"), (x = Tl));
            break;
          case "focusout":
            ((w = "blur"), (x = Tl));
            break;
          case "beforeblur":
          case "afterblur":
            x = Tl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = bo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = cd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Nd;
            break;
          case Xu:
          case Gu:
          case Ju:
            x = pd;
            break;
          case qu:
            x = Cd;
            break;
          case "scroll":
            x = ud;
            break;
          case "wheel":
            x = zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = hd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ns;
        }
        var S = (n & 4) !== 0,
          A = !S && e === "scroll",
          f = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = Ot(c, f)), g != null && S.push(Wt(c, g, p)))),
            A)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((m = new x(m, w, null, t, v)), h.push({ event: m, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            t !== si &&
            (w = t.relatedTarget || t.fromElement) &&
            (kn(w) || w[Ye]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          x
            ? ((w = t.relatedTarget || t.toElement),
              (x = d),
              (w = w ? kn(w) : null),
              w !== null &&
                ((A = Mn(w)), w !== A || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = d)),
          x !== w)
        ) {
          if (
            ((S = bo),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = ns),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (A = x == null ? m : $n(x)),
            (p = w == null ? m : $n(w)),
            (m = new S(g, c + "leave", x, t, v)),
            (m.target = A),
            (m.relatedTarget = p),
            (g = null),
            kn(v) === d &&
              ((S = new S(f, c + "enter", w, t, v)),
              (S.target = p),
              (S.relatedTarget = A),
              (g = S)),
            (A = g),
            x && w)
          )
            n: {
              for (S = x, f = w, c = 0, p = S; p; p = Rn(p)) c++;
              for (p = 0, g = f; g; g = Rn(g)) p++;
              for (; 0 < c - p; ) ((S = Rn(S)), c--);
              for (; 0 < p - c; ) ((f = Rn(f)), p--);
              for (; c--; ) {
                if (S === f || (f !== null && S === f.alternate)) break n;
                ((S = Rn(S)), (f = Rn(f)));
              }
              S = null;
            }
          else S = null;
          (x !== null && fs(h, m, x, S, !1),
            w !== null && A !== null && fs(h, A, w, S, !0));
        }
      }
      e: {
        if (
          ((m = d ? $n(d) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var j = Dd;
        else if (ls(m))
          if (Bu) j = $d;
          else {
            j = Ad;
            var N = Id;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (j = Ud);
        if (j && (j = j(e, d))) {
          Hu(h, j, t, v);
          break e;
        }
        (N && N(e, m, d),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            ti(m, "number", m.value));
      }
      switch (((N = d ? $n(d) : window), e)) {
        case "focusin":
          (ls(N) || N.contentEditable === "true") &&
            ((An = N), (mi = d), (Pt = null));
          break;
        case "focusout":
          Pt = mi = An = null;
          break;
        case "mousedown":
          hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((hi = !1), as(h, t, v));
          break;
        case "selectionchange":
          if (Hd) break;
        case "keydown":
        case "keyup":
          as(h, t, v);
      }
      var _;
      if (io)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        In
          ? Vu(e, t) && (C = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (C = "onCompositionStart");
      (C &&
        ($u &&
          t.locale !== "ko" &&
          (In || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && In && (_ = Uu())
            : ((tn = v),
              (to = "value" in tn ? tn.value : tn.textContent),
              (In = !0))),
        (N = $r(d, C)),
        0 < N.length &&
          ((C = new es(C, e, null, t, v)),
          h.push({ event: C, listeners: N }),
          _ ? (C.data = _) : ((_ = Wu(t)), _ !== null && (C.data = _)))),
        (_ = Ld ? Fd(e, t) : Md(e, t)) &&
          ((d = $r(d, "onBeforeInput")),
          0 < d.length &&
            ((v = new es("onBeforeInput", "beforeinput", null, t, v)),
            h.push({ event: v, listeners: d }),
            (v.data = _))));
    }
    ea(h, n);
  });
}
function Wt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function $r(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Ot(e, t)),
      i != null && r.unshift(Wt(e, i, l)),
      (i = Ot(e, n)),
      i != null && r.push(Wt(e, i, l))),
      (e = e.return));
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fs(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t,
      a = u.alternate,
      d = u.stateNode;
    if (a !== null && a === r) break;
    (u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((a = Ot(t, i)), a != null && o.unshift(Wt(t, a, u)))
        : l || ((a = Ot(t, i)), a != null && o.push(Wt(t, a, u)))),
      (t = t.return));
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var Yd = /\r\n?/g,
  Zd = /\u0000|\uFFFD/g;
function ps(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Yd,
      `
`,
    )
    .replace(Zd, "");
}
function pr(e, n, t) {
  if (((n = ps(n)), ps(e) !== n && t)) throw Error(y(425));
}
function Vr() {}
var vi = null,
  gi = null;
function yi(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var xi = typeof setTimeout == "function" ? setTimeout : void 0,
  Xd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ms = typeof Promise == "function" ? Promise : void 0,
  Gd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ms < "u"
        ? function (e) {
            return ms.resolve(null).then(e).catch(Jd);
          }
        : xi;
function Jd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          (e.removeChild(l), At(n));
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  At(n);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function hs(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var at = Math.random().toString(36).slice(2),
  Ie = "__reactFiber$" + at,
  Ht = "__reactProps$" + at,
  Ye = "__reactContainer$" + at,
  wi = "__reactEvents$" + at,
  qd = "__reactListeners$" + at,
  bd = "__reactHandles$" + at;
function kn(e) {
  var n = e[Ie];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Ye] || t[Ie])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = hs(e); e !== null; ) {
          if ((t = e[Ie])) return t;
          e = hs(e);
        }
      return n;
    }
    ((e = t), (t = e.parentNode));
  }
  return null;
}
function bt(e) {
  return (
    (e = e[Ie] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ul(e) {
  return e[Ht] || null;
}
var Si = [],
  Vn = -1;
function vn(e) {
  return { current: e };
}
function I(e) {
  0 > Vn || ((e.current = Si[Vn]), (Si[Vn] = null), Vn--);
}
function O(e, n) {
  (Vn++, (Si[Vn] = e.current), (e.current = n));
}
var mn = {},
  ie = vn(mn),
  fe = vn(!1),
  Cn = mn;
function et(e, n) {
  var t = e.type.contextTypes;
  if (!t) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return ((e = e.childContextTypes), e != null);
}
function Wr() {
  (I(fe), I(ie));
}
function vs(e, n, t) {
  if (ie.current !== mn) throw Error(y(168));
  (O(ie, n), O(fe, t));
}
function ta(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Ic(e) || "Unknown", l));
  return W({}, t, r);
}
function Hr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (Cn = ie.current),
    O(ie, e),
    O(fe, fe.current),
    !0
  );
}
function gs(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  (t
    ? ((e = ta(e, n, Cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(fe),
      I(ie),
      O(ie, e))
    : I(fe),
    O(fe, t));
}
var Ve = null,
  al = !1,
  Ul = !1;
function ra(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function ef(e) {
  ((al = !0), ra(e));
}
function gn() {
  if (!Ul && Ve !== null) {
    Ul = !0;
    var e = 0,
      n = R;
    try {
      var t = Ve;
      for (R = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ve = null), (al = !1));
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Pu(qi, gn), l);
    } finally {
      ((R = n), (Ul = !1));
    }
  }
  return null;
}
var Wn = [],
  Hn = 0,
  Br = null,
  Qr = 0,
  Se = [],
  ke = 0,
  Pn = null,
  We = 1,
  He = "";
function wn(e, n) {
  ((Wn[Hn++] = Qr), (Wn[Hn++] = Br), (Br = e), (Qr = n));
}
function la(e, n, t) {
  ((Se[ke++] = We), (Se[ke++] = He), (Se[ke++] = Pn), (Pn = e));
  var r = We;
  e = He;
  var l = 32 - Fe(r) - 1;
  ((r &= ~(1 << l)), (t += 1));
  var i = 32 - Fe(n) + l;
  if (30 < i) {
    var o = l - (l % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Fe(n) + l)) | (t << l) | r),
      (He = i + e));
  } else ((We = (1 << i) | (t << l) | r), (He = e));
}
function so(e) {
  e.return !== null && (wn(e, 1), la(e, 1, 0));
}
function uo(e) {
  for (; e === Br; )
    ((Br = Wn[--Hn]), (Wn[Hn] = null), (Qr = Wn[--Hn]), (Wn[Hn] = null));
  for (; e === Pn; )
    ((Pn = Se[--ke]),
      (Se[ke] = null),
      (He = Se[--ke]),
      (Se[ke] = null),
      (We = Se[--ke]),
      (Se[ke] = null));
}
var ge = null,
  ve = null,
  U = !1,
  Le = null;
function ia(e, n) {
  var t = je(5, null, null, 0);
  ((t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t));
}
function ys(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ge = e), (ve = un(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ge = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Pn !== null ? { id: We, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = je(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ge = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ji(e) {
  if (U) {
    var n = ve;
    if (n) {
      var t = n;
      if (!ys(e, n)) {
        if (ki(e)) throw Error(y(418));
        n = un(t.nextSibling);
        var r = ge;
        n && ys(e, n)
          ? ia(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e));
      }
    } else {
      if (ki(e)) throw Error(y(418));
      ((e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e));
    }
  }
}
function xs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function mr(e) {
  if (e !== ge) return !1;
  if (!U) return (xs(e), (U = !0), !1);
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !yi(e.type, e.memoizedProps))),
    n && (n = ve))
  ) {
    if (ki(e)) throw (oa(), Error(y(418)));
    for (; n; ) (ia(e, n), (n = un(n.nextSibling)));
  }
  if ((xs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              ve = un(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ge ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function oa() {
  for (var e = ve; e; ) e = un(e.nextSibling);
}
function nt() {
  ((ve = ge = null), (U = !1));
}
function ao(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var nf = Ge.ReactCurrentBatchConfig;
function gt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, n) {
  throw (
    (e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ws(e) {
  var n = e._init;
  return n(e._payload);
}
function sa(e) {
  function n(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function t(f, c) {
    if (!e) return null;
    for (; c !== null; ) (n(f, c), (c = c.sibling));
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      (c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling));
    return f;
  }
  function l(f, c) {
    return ((f = fn(f, c)), (f.index = 0), (f.sibling = null), f);
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function u(f, c, p, g) {
    return c === null || c.tag !== 6
      ? ((c = Kl(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function a(f, c, p, g) {
    var j = p.type;
    return j === Dn
      ? v(f, c, p.props.children, g, p.key)
      : c !== null &&
          (c.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === qe &&
              ws(j) === c.type))
        ? ((g = l(c, p.props)), (g.ref = gt(f, c, p)), (g.return = f), g)
        : ((g = Fr(p.type, p.key, p.props, null, f.mode, g)),
          (g.ref = gt(f, c, p)),
          (g.return = f),
          g);
  }
  function d(f, c, p, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Yl(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function v(f, c, p, g, j) {
    return c === null || c.tag !== 7
      ? ((c = _n(p, f.mode, g, j)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return ((c = Kl("" + c, f.mode, p)), (c.return = f), c);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case lr:
          return (
            (p = Fr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = gt(f, null, c)),
            (p.return = f),
            p
          );
        case On:
          return ((c = Yl(c, f.mode, p)), (c.return = f), c);
        case qe:
          var g = c._init;
          return h(f, g(c._payload), p);
      }
      if (St(c) || ft(c))
        return ((c = _n(c, f.mode, p, null)), (c.return = f), c);
      hr(f, c);
    }
    return null;
  }
  function m(f, c, p, g) {
    var j = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return j !== null ? null : u(f, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case lr:
          return p.key === j ? a(f, c, p, g) : null;
        case On:
          return p.key === j ? d(f, c, p, g) : null;
        case qe:
          return ((j = p._init), m(f, c, j(p._payload), g));
      }
      if (St(p) || ft(p)) return j !== null ? null : v(f, c, p, g, null);
      hr(f, p);
    }
    return null;
  }
  function x(f, c, p, g, j) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return ((f = f.get(p) || null), u(c, f, "" + g, j));
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case lr:
          return (
            (f = f.get(g.key === null ? p : g.key) || null),
            a(c, f, g, j)
          );
        case On:
          return (
            (f = f.get(g.key === null ? p : g.key) || null),
            d(c, f, g, j)
          );
        case qe:
          var N = g._init;
          return x(f, c, p, N(g._payload), j);
      }
      if (St(g) || ft(g)) return ((f = f.get(p) || null), v(c, f, g, j, null));
      hr(c, g);
    }
    return null;
  }
  function w(f, c, p, g) {
    for (
      var j = null, N = null, _ = c, C = (c = 0), B = null;
      _ !== null && C < p.length;
      C++
    ) {
      _.index > C ? ((B = _), (_ = null)) : (B = _.sibling);
      var L = m(f, _, p[C], g);
      if (L === null) {
        _ === null && (_ = B);
        break;
      }
      (e && _ && L.alternate === null && n(f, _),
        (c = i(L, c, C)),
        N === null ? (j = L) : (N.sibling = L),
        (N = L),
        (_ = B));
    }
    if (C === p.length) return (t(f, _), U && wn(f, C), j);
    if (_ === null) {
      for (; C < p.length; C++)
        ((_ = h(f, p[C], g)),
          _ !== null &&
            ((c = i(_, c, C)),
            N === null ? (j = _) : (N.sibling = _),
            (N = _)));
      return (U && wn(f, C), j);
    }
    for (_ = r(f, _); C < p.length; C++)
      ((B = x(_, f, C, p[C], g)),
        B !== null &&
          (e && B.alternate !== null && _.delete(B.key === null ? C : B.key),
          (c = i(B, c, C)),
          N === null ? (j = B) : (N.sibling = B),
          (N = B)));
    return (
      e &&
        _.forEach(function (Ce) {
          return n(f, Ce);
        }),
      U && wn(f, C),
      j
    );
  }
  function S(f, c, p, g) {
    var j = ft(p);
    if (typeof j != "function") throw Error(y(150));
    if (((p = j.call(p)), p == null)) throw Error(y(151));
    for (
      var N = (j = null), _ = c, C = (c = 0), B = null, L = p.next();
      _ !== null && !L.done;
      C++, L = p.next()
    ) {
      _.index > C ? ((B = _), (_ = null)) : (B = _.sibling);
      var Ce = m(f, _, L.value, g);
      if (Ce === null) {
        _ === null && (_ = B);
        break;
      }
      (e && _ && Ce.alternate === null && n(f, _),
        (c = i(Ce, c, C)),
        N === null ? (j = Ce) : (N.sibling = Ce),
        (N = Ce),
        (_ = B));
    }
    if (L.done) return (t(f, _), U && wn(f, C), j);
    if (_ === null) {
      for (; !L.done; C++, L = p.next())
        ((L = h(f, L.value, g)),
          L !== null &&
            ((c = i(L, c, C)),
            N === null ? (j = L) : (N.sibling = L),
            (N = L)));
      return (U && wn(f, C), j);
    }
    for (_ = r(f, _); !L.done; C++, L = p.next())
      ((L = x(_, f, C, L.value, g)),
        L !== null &&
          (e && L.alternate !== null && _.delete(L.key === null ? C : L.key),
          (c = i(L, c, C)),
          N === null ? (j = L) : (N.sibling = L),
          (N = L)));
    return (
      e &&
        _.forEach(function (ct) {
          return n(f, ct);
        }),
      U && wn(f, C),
      j
    );
  }
  function A(f, c, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Dn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case lr:
          e: {
            for (var j = p.key, N = c; N !== null; ) {
              if (N.key === j) {
                if (((j = p.type), j === Dn)) {
                  if (N.tag === 7) {
                    (t(f, N.sibling),
                      (c = l(N, p.props.children)),
                      (c.return = f),
                      (f = c));
                    break e;
                  }
                } else if (
                  N.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === qe &&
                    ws(j) === N.type)
                ) {
                  (t(f, N.sibling),
                    (c = l(N, p.props)),
                    (c.ref = gt(f, N, p)),
                    (c.return = f),
                    (f = c));
                  break e;
                }
                t(f, N);
                break;
              } else n(f, N);
              N = N.sibling;
            }
            p.type === Dn
              ? ((c = _n(p.props.children, f.mode, g, p.key)),
                (c.return = f),
                (f = c))
              : ((g = Fr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = gt(f, c, p)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case On:
          e: {
            for (N = p.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  (t(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c));
                  break e;
                } else {
                  t(f, c);
                  break;
                }
              else n(f, c);
              c = c.sibling;
            }
            ((c = Yl(p, f.mode, g)), (c.return = f), (f = c));
          }
          return o(f);
        case qe:
          return ((N = p._init), A(f, c, N(p._payload), g));
      }
      if (St(p)) return w(f, c, p, g);
      if (ft(p)) return S(f, c, p, g);
      hr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (t(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (t(f, c), (c = Kl(p, f.mode, g)), (c.return = f), (f = c)),
        o(f))
      : t(f, c);
  }
  return A;
}
var tt = sa(!0),
  ua = sa(!1),
  Kr = vn(null),
  Yr = null,
  Bn = null,
  co = null;
function fo() {
  co = Bn = Yr = null;
}
function po(e) {
  var n = Kr.current;
  (I(Kr), (e._currentValue = n));
}
function Ei(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Jn(e, n) {
  ((Yr = e),
    (co = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (de = !0), (e.firstContext = null)));
}
function Ne(e) {
  var n = e._currentValue;
  if (co !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Bn === null)) {
      if (Yr === null) throw Error(y(308));
      ((Bn = e), (Yr.dependencies = { lanes: 0, firstContext: e }));
    } else Bn = Bn.next = e;
  return n;
}
var jn = null;
function mo(e) {
  jn === null ? (jn = [e]) : jn.push(e);
}
function aa(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), mo(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ze(e, r)
  );
}
function Ze(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    ((e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return));
  return t.tag === 3 ? t.stateNode : null;
}
var be = !1;
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ca(e, n) {
  ((e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Qe(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ze(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), mo(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ze(e, t)
  );
}
function _r(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    ((r &= e.pendingLanes), (t |= r), (n.lanes = t), bi(e, t));
  }
}
function Ss(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        (i === null ? (l = i = o) : (i = i.next = o), (t = t.next));
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    ((t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t));
    return;
  }
  ((e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n));
}
function Zr(e, n, t, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      d = a.next;
    ((a.next = null), o === null ? (i = d) : (o.next = d), (o = a));
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = d) : (u.next = d),
        (v.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var h = l.baseState;
    ((o = 0), (v = d = a = null), (u = i));
    do {
      var m = u.lane,
        x = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: x,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            S = u;
          switch (((m = n), (x = t), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                h = w.call(x, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (m = typeof w == "function" ? w.call(x, h, m) : w),
                m == null)
              )
                break e;
              h = W({}, h, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        ((x = {
          eventTime: x,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((d = v = x), (a = h)) : (v = v.next = x),
          (o |= m));
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        ((m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (v === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = v),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do ((o |= l.lane), (l = l.next));
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    ((Tn |= o), (e.lanes = o), (e.memoizedState = h));
  }
}
function ks(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var er = {},
  Ue = vn(er),
  Bt = vn(er),
  Qt = vn(er);
function En(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function vo(e, n) {
  switch ((O(Qt, n), O(Bt, e), O(Ue, er), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : li(null, "");
      break;
    default:
      ((e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = li(n, e)));
  }
  (I(Ue), O(Ue, n));
}
function rt() {
  (I(Ue), I(Bt), I(Qt));
}
function da(e) {
  En(Qt.current);
  var n = En(Ue.current),
    t = li(n, e.type);
  n !== t && (O(Bt, e), O(Ue, t));
}
function go(e) {
  Bt.current === e && (I(Ue), I(Bt));
}
var $ = vn(0);
function Xr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
  return null;
}
var $l = [];
function yo() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Cr = Ge.ReactCurrentDispatcher,
  Vl = Ge.ReactCurrentBatchConfig,
  zn = 0,
  V = null,
  Z = null,
  J = null,
  Gr = !1,
  zt = !1,
  Kt = 0,
  tf = 0;
function te() {
  throw Error(y(321));
}
function xo(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Re(e[t], n[t])) return !1;
  return !0;
}
function wo(e, n, t, r, l, i) {
  if (
    ((zn = i),
    (V = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Cr.current = e === null || e.memoizedState === null ? sf : uf),
    (e = t(r, l)),
    zt)
  ) {
    i = 0;
    do {
      if (((zt = !1), (Kt = 0), 25 <= i)) throw Error(y(301));
      ((i += 1),
        (J = Z = null),
        (n.updateQueue = null),
        (Cr.current = af),
        (e = t(r, l)));
    } while (zt);
  }
  if (
    ((Cr.current = Jr),
    (n = Z !== null && Z.next !== null),
    (zn = 0),
    (J = Z = V = null),
    (Gr = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function So() {
  var e = Kt !== 0;
  return ((Kt = 0), e);
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (J === null ? (V.memoizedState = J = e) : (J = J.next = e), J);
}
function _e() {
  if (Z === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var n = J === null ? V.memoizedState : J.next;
  if (n !== null) ((J = n), (Z = e));
  else {
    if (e === null) throw Error(y(310));
    ((Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      J === null ? (V.memoizedState = J = e) : (J = J.next = e));
  }
  return J;
}
function Yt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Wl(e) {
  var n = _e(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      ((l.next = i.next), (i.next = o));
    }
    ((r.baseQueue = l = i), (t.pending = null));
  }
  if (l !== null) {
    ((i = l.next), (r = r.baseState));
    var u = (o = null),
      a = null,
      d = i;
    do {
      var v = d.lane;
      if ((zn & v) === v)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action)));
      else {
        var h = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        (a === null ? ((u = a = h), (o = r)) : (a = a.next = h),
          (V.lanes |= v),
          (Tn |= v));
      }
      d = d.next;
    } while (d !== null && d !== i);
    (a === null ? (o = r) : (a.next = u),
      Re(r, n.memoizedState) || (de = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = a),
      (t.lastRenderedState = r));
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (V.lanes |= i), (Tn |= i), (l = l.next));
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Hl(e) {
  var n = _e(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== l);
    (Re(i, n.memoizedState) || (de = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i));
  }
  return [i, r];
}
function fa() {}
function pa(e, n) {
  var t = V,
    r = _e(),
    l = n(),
    i = !Re(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    ko(va.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Zt(9, ha.bind(null, t, r, l, n), void 0, null),
      q === null)
    )
      throw Error(y(349));
    zn & 30 || ma(t, n, l);
  }
  return l;
}
function ma(e, n, t) {
  ((e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = V.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (V.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e)));
}
function ha(e, n, t, r) {
  ((n.value = t), (n.getSnapshot = r), ga(n) && ya(e));
}
function va(e, n, t) {
  return t(function () {
    ga(n) && ya(e);
  });
}
function ga(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Re(e, t);
  } catch {
    return !0;
  }
}
function ya(e) {
  var n = Ze(e, 1);
  n !== null && Me(n, e, 1, -1);
}
function js(e) {
  var n = De();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = of.bind(null, V, e)),
    [n.memoizedState, e]
  );
}
function Zt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = V.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (V.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function xa() {
  return _e().memoizedState;
}
function Pr(e, n, t, r) {
  var l = De();
  ((V.flags |= e),
    (l.memoizedState = Zt(1 | n, t, void 0, r === void 0 ? null : r)));
}
function cl(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((i = o.destroy), r !== null && xo(r, o.deps))) {
      l.memoizedState = Zt(n, t, i, r);
      return;
    }
  }
  ((V.flags |= e), (l.memoizedState = Zt(1 | n, t, i, r)));
}
function Es(e, n) {
  return Pr(8390656, 8, e, n);
}
function ko(e, n) {
  return cl(2048, 8, e, n);
}
function wa(e, n) {
  return cl(4, 2, e, n);
}
function Sa(e, n) {
  return cl(4, 4, e, n);
}
function ka(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function ja(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null),
    cl(4, 4, ka.bind(null, n, e), t)
  );
}
function jo() {}
function Ea(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && xo(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Na(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && xo(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function _a(e, n, t) {
  return zn & 21
    ? (Re(t, n) || ((t = Lu()), (V.lanes |= t), (Tn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = t));
}
function rf(e, n) {
  var t = R;
  ((R = t !== 0 && 4 > t ? t : 4), e(!0));
  var r = Vl.transition;
  Vl.transition = {};
  try {
    (e(!1), n());
  } finally {
    ((R = t), (Vl.transition = r));
  }
}
function Ca() {
  return _e().memoizedState;
}
function lf(e, n, t) {
  var r = dn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pa(e))
  )
    za(n, t);
  else if (((t = aa(e, n, t, r)), t !== null)) {
    var l = se();
    (Me(t, e, r, l), Ta(t, n, r));
  }
}
function of(e, n, t) {
  var r = dn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Pa(e)) za(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var o = n.lastRenderedState,
          u = i(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Re(u, o))) {
          var a = n.interleaved;
          (a === null
            ? ((l.next = l), mo(n))
            : ((l.next = a.next), (a.next = l)),
            (n.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((t = aa(e, n, l, r)),
      t !== null && ((l = se()), Me(t, e, r, l), Ta(t, n, r)));
  }
}
function Pa(e) {
  var n = e.alternate;
  return e === V || (n !== null && n === V);
}
function za(e, n) {
  zt = Gr = !0;
  var t = e.pending;
  (t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n));
}
function Ta(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    ((r &= e.pendingLanes), (t |= r), (n.lanes = t), bi(e, t));
  }
}
var Jr = {
    readContext: Ne,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  sf = {
    readContext: Ne,
    useCallback: function (e, n) {
      return ((De().memoizedState = [e, n === void 0 ? null : n]), e);
    },
    useContext: Ne,
    useEffect: Es,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Pr(4194308, 4, ka.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Pr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Pr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = De();
      return (
        (n = n === void 0 ? null : n),
        (e = e()),
        (t.memoizedState = [e, n]),
        e
      );
    },
    useReducer: function (e, n, t) {
      var r = De();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = lf.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = De();
      return ((e = { current: e }), (n.memoizedState = e));
    },
    useState: js,
    useDebugValue: jo,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = js(!1),
        n = e[0];
      return ((e = rf.bind(null, e[1])), (De().memoizedState = e), [n, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = V,
        l = De();
      if (U) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), q === null)) throw Error(y(349));
        zn & 30 || ma(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        Es(va.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Zt(9, ha.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = De(),
        n = q.identifierPrefix;
      if (U) {
        var t = He,
          r = We;
        ((t = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Kt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":"));
      } else ((t = tf++), (n = ":" + n + "r" + t.toString(32) + ":"));
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  uf = {
    readContext: Ne,
    useCallback: Ea,
    useContext: Ne,
    useEffect: ko,
    useImperativeHandle: ja,
    useInsertionEffect: wa,
    useLayoutEffect: Sa,
    useMemo: Na,
    useReducer: Wl,
    useRef: xa,
    useState: function () {
      return Wl(Yt);
    },
    useDebugValue: jo,
    useDeferredValue: function (e) {
      var n = _e();
      return _a(n, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Yt)[0],
        n = _e().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: pa,
    useId: Ca,
    unstable_isNewReconciler: !1,
  },
  af = {
    readContext: Ne,
    useCallback: Ea,
    useContext: Ne,
    useEffect: ko,
    useImperativeHandle: ja,
    useInsertionEffect: wa,
    useLayoutEffect: Sa,
    useMemo: Na,
    useReducer: Hl,
    useRef: xa,
    useState: function () {
      return Hl(Yt);
    },
    useDebugValue: jo,
    useDeferredValue: function (e) {
      var n = _e();
      return Z === null ? (n.memoizedState = e) : _a(n, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Yt)[0],
        n = _e().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: pa,
    useId: Ca,
    unstable_isNewReconciler: !1,
  };
function ze(e, n) {
  if (e && e.defaultProps) {
    ((n = W({}, n)), (e = e.defaultProps));
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Ni(e, n, t, r) {
  ((n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : W({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t));
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = se(),
      l = dn(e),
      i = Qe(r, l);
    ((i.payload = n),
      t != null && (i.callback = t),
      (n = an(e, i, l)),
      n !== null && (Me(n, e, l, r), _r(n, e, l)));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = se(),
      l = dn(e),
      i = Qe(r, l);
    ((i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = an(e, i, l)),
      n !== null && (Me(n, e, l, r), _r(n, e, l)));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = se(),
      r = dn(e),
      l = Qe(t, r);
    ((l.tag = 2),
      n != null && (l.callback = n),
      (n = an(e, l, r)),
      n !== null && (Me(n, e, r, t), _r(n, e, r)));
  },
};
function Ns(e, n, t, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : n.prototype && n.prototype.isPureReactComponent
        ? !$t(t, r) || !$t(l, i)
        : !0
  );
}
function La(e, n, t) {
  var r = !1,
    l = mn,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = pe(n) ? Cn : ie.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? et(e, l) : mn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = dl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function _s(e, n, t, r) {
  ((e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && dl.enqueueReplaceState(n, n.state, null));
}
function _i(e, n, t, r) {
  var l = e.stateNode;
  ((l.props = t), (l.state = e.memoizedState), (l.refs = {}), ho(e));
  var i = n.contextType;
  (typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = pe(n) ? Cn : ie.current), (l.context = et(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (Ni(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && dl.enqueueReplaceState(l, l.state, null),
      Zr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function lt(e, n) {
  try {
    var t = "",
      r = n;
    do ((t += Dc(r)), (r = r.return));
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Bl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Ci(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var cf = typeof WeakMap == "function" ? WeakMap : Map;
function Fa(e, n, t) {
  ((t = Qe(-1, t)), (t.tag = 3), (t.payload = { element: null }));
  var r = n.value;
  return (
    (t.callback = function () {
      (br || ((br = !0), (Ii = r)), Ci(e, n));
    }),
    t
  );
}
function Ma(e, n, t) {
  ((t = Qe(-1, t)), (t.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    ((t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Ci(e, n);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        (Ci(e, n),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this)));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    t
  );
}
function Cs(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cf();
    var l = new Set();
    r.set(n, l);
  } else ((l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l)));
  l.has(t) || (l.add(t), (e = Ef.bind(null, e, n, t)), n.then(e, e));
}
function Ps(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zs(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = Qe(-1, 1)), (n.tag = 2), an(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var df = Ge.ReactCurrentOwner,
  de = !1;
function oe(e, n, t, r) {
  n.child = e === null ? ua(n, null, t, r) : tt(n, e.child, t, r);
}
function Ts(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    Jn(n, l),
    (r = wo(e, n, t, r, i, l)),
    (t = So()),
    e !== null && !de
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, n, l))
      : (U && t && so(n), (n.flags |= 1), oe(e, n, r, l), n.child)
  );
}
function Ls(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" &&
      !Lo(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Ra(e, n, i, r, l))
      : ((e = Fr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : $t), t(o, r) && e.ref === n.ref)
    )
      return Xe(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = fn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ra(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($t(i, r) && e.ref === n.ref)
      if (((de = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return ((n.lanes = e.lanes), Xe(e, n, l));
  }
  return Pi(e, n, t, r, l);
}
function Oa(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      ((n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(Kn, he),
        (he |= t));
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          O(Kn, he),
          (he |= e),
          null
        );
      ((n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        O(Kn, he),
        (he |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      O(Kn, he),
      (he |= r));
  return (oe(e, n, l, t), n.child);
}
function Da(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Pi(e, n, t, r, l) {
  var i = pe(t) ? Cn : ie.current;
  return (
    (i = et(n, i)),
    Jn(n, l),
    (t = wo(e, n, t, r, i, l)),
    (r = So()),
    e !== null && !de
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, n, l))
      : (U && r && so(n), (n.flags |= 1), oe(e, n, t, l), n.child)
  );
}
function Fs(e, n, t, r, l) {
  if (pe(t)) {
    var i = !0;
    Hr(n);
  } else i = !1;
  if ((Jn(n, l), n.stateNode === null))
    (zr(e, n), La(n, t, r), _i(n, t, r, l), (r = !0));
  else if (e === null) {
    var o = n.stateNode,
      u = n.memoizedProps;
    o.props = u;
    var a = o.context,
      d = t.contextType;
    typeof d == "object" && d !== null
      ? (d = Ne(d))
      : ((d = pe(t) ? Cn : ie.current), (d = et(n, d)));
    var v = t.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== d) && _s(n, o, r, d)),
      (be = !1));
    var m = n.memoizedState;
    ((o.state = m),
      Zr(n, r, o, l),
      (a = n.memoizedState),
      u !== r || m !== a || fe.current || be
        ? (typeof v == "function" && (Ni(n, t, v, r), (a = n.memoizedState)),
          (u = be || Ns(n, t, u, r, m, a, d))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = d),
          (r = u))
        : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = n.stateNode),
      ca(e, n),
      (u = n.memoizedProps),
      (d = n.type === n.elementType ? u : ze(n.type, u)),
      (o.props = d),
      (h = n.pendingProps),
      (m = o.context),
      (a = t.contextType),
      typeof a == "object" && a !== null
        ? (a = Ne(a))
        : ((a = pe(t) ? Cn : ie.current), (a = et(n, a))));
    var x = t.getDerivedStateFromProps;
    ((v =
      typeof x == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || m !== a) && _s(n, o, r, a)),
      (be = !1),
      (m = n.memoizedState),
      (o.state = m),
      Zr(n, r, o, l));
    var w = n.memoizedState;
    u !== h || m !== w || fe.current || be
      ? (typeof x == "function" && (Ni(n, t, x, r), (w = n.memoizedState)),
        (d = be || Ns(n, t, d, r, m, w, a) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, a)),
            typeof o.componentDidUpdate == "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = a),
        (r = d))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return zi(e, n, t, r, i, l);
}
function zi(e, n, t, r, l, i) {
  Da(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return (l && gs(n, t, !1), Xe(e, n, i));
  ((r = n.stateNode), (df.current = n));
  var u =
    o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = tt(n, e.child, null, i)), (n.child = tt(n, null, u, i)))
      : oe(e, n, u, i),
    (n.memoizedState = r.state),
    l && gs(n, t, !0),
    n.child
  );
}
function Ia(e) {
  var n = e.stateNode;
  (n.pendingContext
    ? vs(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && vs(e, n.context, !1),
    vo(e, n.containerInfo));
}
function Ms(e, n, t, r, l) {
  return (nt(), ao(l), (n.flags |= 256), oe(e, n, t, r), n.child);
}
var Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function Li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Aa(e, n, t) {
  var r = n.pendingProps,
    l = $.current,
    i = !1,
    o = (n.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O($, l & 1),
    e === null)
  )
    return (
      ji(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ml(o, r, 0, null)),
              (e = _n(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = Li(t)),
              (n.memoizedState = Ti),
              e)
            : Eo(n, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ff(e, n, o, r, u, l, t);
  if (i) {
    ((i = r.fallback), (o = n.mode), (l = e.child), (u = l.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (n.deletions = null))
        : ((r = fn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = fn(u, i)) : ((i = _n(i, o, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Li(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = Ti),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = fn(i, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Eo(e, n) {
  return (
    (n = ml({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function vr(e, n, t, r) {
  return (
    r !== null && ao(r),
    tt(n, e.child, null, t),
    (e = Eo(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function ff(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Bl(Error(y(422)))), vr(e, n, o, r))
      : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((i = r.fallback),
          (l = n.mode),
          (r = ml({ mode: "visible", children: r.children }, l, 0, null)),
          (i = _n(i, l, o, null)),
          (i.flags |= 2),
          (r.return = n),
          (i.return = n),
          (r.sibling = i),
          (n.child = r),
          n.mode & 1 && tt(n, e.child, null, o),
          (n.child.memoizedState = Li(o)),
          (n.memoizedState = Ti),
          i);
  if (!(n.mode & 1)) return vr(e, n, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (
      (r = u),
      (i = Error(y(419))),
      (r = Bl(i, r, void 0)),
      vr(e, n, o, r)
    );
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      ((l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ze(e, l), Me(r, e, l, -1)));
    }
    return (To(), (r = Bl(Error(y(421)))), vr(e, n, o, r));
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Nf.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (ve = un(l.nextSibling)),
      (ge = n),
      (U = !0),
      (Le = null),
      e !== null &&
        ((Se[ke++] = We),
        (Se[ke++] = He),
        (Se[ke++] = Pn),
        (We = e.id),
        (He = e.overflow),
        (Pn = n)),
      (n = Eo(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Rs(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  (r !== null && (r.lanes |= n), Ei(e.return, n, t));
}
function Ql(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function Ua(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, n, r.children, t), (r = $.current), r & 2))
    ((r = (r & 1) | 2), (n.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rs(e, t, n);
        else if (e.tag === 19) Rs(e, t, n);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((O($, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          ((e = t.alternate),
            e !== null && Xr(e) === null && (l = t),
            (t = t.sibling));
        ((t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Ql(n, !1, l, t, i));
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Xr(e) === null)) {
            n.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = t), (t = l), (l = e));
        }
        Ql(n, !0, t, null, i);
        break;
      case "together":
        Ql(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function zr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Xe(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Tn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = fn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (t = t.sibling = fn(e, e.pendingProps)),
        (t.return = n));
    t.sibling = null;
  }
  return n.child;
}
function pf(e, n, t) {
  switch (n.tag) {
    case 3:
      (Ia(n), nt());
      break;
    case 5:
      da(n);
      break;
    case 1:
      pe(n.type) && Hr(n);
      break;
    case 4:
      vo(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      (O(Kr, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O($, $.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
            ? Aa(e, n, t)
            : (O($, $.current & 1),
              (e = Xe(e, n, t)),
              e !== null ? e.sibling : null);
      O($, $.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ua(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((n.lanes = 0), Oa(e, n, t));
  }
  return Xe(e, n, t);
}
var $a, Fi, Va, Wa;
$a = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
};
Fi = function () {};
Va = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = n.stateNode), En(Ue.current));
    var i = null;
    switch (t) {
      case "input":
        ((l = ei(e, l)), (r = ei(e, r)), (i = []));
        break;
      case "select":
        ((l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((l = ri(e, l)), (r = ri(e, r)), (i = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vr);
    }
    ii(t, r);
    var o;
    t = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (o in u) u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Mt.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var a = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && a !== u && (a != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (t || (t = {}), (t[o] = a[o]));
          } else (t || (i || (i = []), i.push(d, t)), (t = a));
        else
          d === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(d, a))
            : d === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(d, "" + a)
              : d !== "suppressContentEditableWarning" &&
                d !== "suppressHydrationWarning" &&
                (Mt.hasOwnProperty(d)
                  ? (a != null && d === "onScroll" && D("scroll", e),
                    i || u === a || (i = []))
                  : (i = i || []).push(d, a));
    }
    t && (i = i || []).push("style", t);
    var d = i;
    (n.updateQueue = d) && (n.flags |= 4);
  }
};
Wa = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function yt(e, n) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          (n.alternate !== null && (t = n), (n = n.sibling));
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          (t.alternate !== null && (r = t), (t = t.sibling));
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      ((t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = t), n);
}
function mf(e, n, t) {
  var r = n.pendingProps;
  switch ((uo(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (re(n), null);
    case 1:
      return (pe(n.type) && Wr(), re(n), null);
    case 3:
      return (
        (r = n.stateNode),
        rt(),
        I(fe),
        I(ie),
        yo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Le !== null && ($i(Le), (Le = null)))),
        Fi(e, n),
        re(n),
        null
      );
    case 5:
      go(n);
      var l = En(Qt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        (Va(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152)));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return (re(n), null);
        }
        if (((e = En(Ue.current)), mr(n))) {
          ((r = n.stateNode), (t = n.type));
          var i = n.memoizedProps;
          switch (((r[Ie] = n), (r[Ht] = i), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              (D("cancel", r), D("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jt.length; l++) D(jt[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (D("error", r), D("load", r));
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              (Ho(r, i), D("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r));
              break;
            case "textarea":
              (Qo(r, i), D("invalid", r));
          }
          (ii(t, i), (l = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Mt.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  D("scroll", r);
            }
          switch (t) {
            case "input":
              (ir(r), Bo(r, i, !0));
              break;
            case "textarea":
              (ir(r), Ko(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Vr);
          }
          ((r = l), (n.updateQueue = r), r !== null && (n.flags |= 4));
        } else {
          ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vu(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(t, { is: r.is }))
                  : ((e = o.createElement(t)),
                    t === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Ie] = n),
            (e[Ht] = r),
            $a(e, n, !1, !1),
            (n.stateNode = e));
          e: {
            switch (((o = oi(t, r)), t)) {
              case "dialog":
                (D("cancel", e), D("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (D("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < jt.length; l++) D(jt[l], e);
                l = r;
                break;
              case "source":
                (D("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (D("error", e), D("load", e), (l = r));
                break;
              case "details":
                (D("toggle", e), (l = r));
                break;
              case "input":
                (Ho(e, r), (l = ei(e, r)), D("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  D("invalid", e));
                break;
              case "textarea":
                (Qo(e, r), (l = ri(e, r)), D("invalid", e));
                break;
              default:
                l = r;
            }
            (ii(t, l), (u = l));
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? xu(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && gu(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (t !== "textarea" || a !== "") && Rt(e, a)
                        : typeof a == "number" && Rt(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Mt.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && D("scroll", e)
                          : a != null && Yi(e, i, a, o));
              }
            switch (t) {
              case "input":
                (ir(e), Bo(e, r, !1));
                break;
              case "textarea":
                (ir(e), Ko(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return (re(n), null);
    case 6:
      if (e && n.stateNode != null) Wa(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = En(Qt.current)), En(Ue.current), mr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Ie] = n),
            (i = r.nodeValue !== t) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          ((r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Ie] = n),
            (n.stateNode = r));
      }
      return (re(n), null);
    case 13:
      if (
        (I($),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && n.mode & 1 && !(n.flags & 128))
          (oa(), nt(), (n.flags |= 98560), (i = !1));
        else if (((i = mr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Ie] = n;
          } else
            (nt(),
              !(n.flags & 128) && (n.memoizedState = null),
              (n.flags |= 4));
          (re(n), (i = !1));
        } else (Le !== null && ($i(Le), (Le = null)), (i = !0));
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : To())),
          n.updateQueue !== null && (n.flags |= 4),
          re(n),
          null);
    case 4:
      return (
        rt(),
        Fi(e, n),
        e === null && Vt(n.stateNode.containerInfo),
        re(n),
        null
      );
    case 10:
      return (po(n.type._context), re(n), null);
    case 17:
      return (pe(n.type) && Wr(), re(n), null);
    case 19:
      if ((I($), (i = n.memoizedState), i === null)) return (re(n), null);
      if (((r = (n.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yt(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = Xr(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    yt(i, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;
                )
                  ((i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling));
                return (O($, ($.current & 1) | 2), n.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > it &&
            ((n.flags |= 128), (r = !0), yt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xr(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              yt(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return (re(n), null);
          } else
            2 * K() - i.renderingStartTime > it &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), yt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = i.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = K()),
          (n.sibling = null),
          (t = $.current),
          O($, r ? (t & 1) | 2 : t & 1),
          n)
        : (re(n), null);
    case 22:
    case 23:
      return (
        zo(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? he & 1073741824 && (re(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : re(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function hf(e, n) {
  switch ((uo(n), n.tag)) {
    case 1:
      return (
        pe(n.type) && Wr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        rt(),
        I(fe),
        I(ie),
        yo(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return (go(n), null);
    case 13:
      if ((I($), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        nt();
      }
      return (
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return (I($), null);
    case 4:
      return (rt(), null);
    case 10:
      return (po(n.type._context), null);
    case 22:
    case 23:
      return (zo(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var gr = !1,
  le = !1,
  vf = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Qn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        H(e, n, r);
      }
    else t.current = null;
}
function Mi(e, n, t) {
  try {
    t();
  } catch (r) {
    H(e, n, r);
  }
}
var Os = !1;
function gf(e, n) {
  if (((vi = Ar), (e = Yu()), oo(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (t.nodeType, i.nodeType);
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            d = 0,
            v = 0,
            h = e,
            m = null;
          n: for (;;) {
            for (
              var x;
              h !== t || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (a = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (x = h.firstChild) !== null;
            )
              ((m = h), (h = x));
            for (;;) {
              if (h === e) break n;
              if (
                (m === t && ++d === l && (u = o),
                m === i && ++v === r && (a = o),
                (x = h.nextSibling) !== null)
              )
                break;
              ((h = m), (m = h.parentNode));
            }
            h = x;
          }
          t = u === -1 || a === -1 ? null : { start: u, end: a };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (gi = { focusedElem: e, selectionRange: t }, Ar = !1, k = n; k !== null; )
    if (((n = k), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = n), (k = e));
    else
      for (; k !== null; ) {
        n = k;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    A = w.memoizedState,
                    f = n.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? S : ze(n.type, S),
                      A,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = n.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          H(n, n.return, g);
        }
        if (((e = n.sibling), e !== null)) {
          ((e.return = n.return), (k = e));
          break;
        }
        k = n.return;
      }
  return ((w = Os), (Os = !1), w);
}
function Tt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && Mi(n, t, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function fl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Ri(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Ha(e) {
  var n = e.alternate;
  (n !== null && ((e.alternate = null), Ha(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Ie], delete n[Ht], delete n[wi], delete n[qd], delete n[bd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Ba(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ds(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ba(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Vr)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oi(e, n, t), e = e.sibling; e !== null; )
      (Oi(e, n, t), (e = e.sibling));
}
function Di(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Di(e, n, t), e = e.sibling; e !== null; )
      (Di(e, n, t), (e = e.sibling));
}
var b = null,
  Te = !1;
function Je(e, n, t) {
  for (t = t.child; t !== null; ) (Qa(e, n, t), (t = t.sibling));
}
function Qa(e, n, t) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(ll, t);
    } catch {}
  switch (t.tag) {
    case 5:
      le || Qn(t, n);
    case 6:
      var r = b,
        l = Te;
      ((b = null),
        Je(e, n, t),
        (b = r),
        (Te = l),
        b !== null &&
          (Te
            ? ((e = b),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : b.removeChild(t.stateNode)));
      break;
    case 18:
      b !== null &&
        (Te
          ? ((e = b),
            (t = t.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, t)
              : e.nodeType === 1 && Al(e, t),
            At(e))
          : Al(b, t.stateNode));
      break;
    case 4:
      ((r = b),
        (l = Te),
        (b = t.stateNode.containerInfo),
        (Te = !0),
        Je(e, n, t),
        (b = r),
        (Te = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Mi(t, n, o),
            (l = l.next));
        } while (l !== r);
      }
      Je(e, n, t);
      break;
    case 1:
      if (
        !le &&
        (Qn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount());
        } catch (u) {
          H(t, n, u);
        }
      Je(e, n, t);
      break;
    case 21:
      Je(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((le = (r = le) || t.memoizedState !== null), Je(e, n, t), (le = r))
        : Je(e, n, t);
      break;
    default:
      Je(e, n, t);
  }
}
function Is(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    (t === null && (t = e.stateNode = new vf()),
      n.forEach(function (r) {
        var l = _f.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      }));
  }
}
function Pe(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          o = n,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ((b = u.stateNode), (Te = !1));
              break e;
            case 3:
              ((b = u.stateNode.containerInfo), (Te = !0));
              break e;
            case 4:
              ((b = u.stateNode.containerInfo), (Te = !0));
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        (Qa(i, o, l), (b = null), (Te = !1));
        var a = l.alternate;
        (a !== null && (a.return = null), (l.return = null));
      } catch (d) {
        H(l, n, d);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) (Ka(n, e), (n = n.sibling));
}
function Ka(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(n, e), Oe(e), r & 4)) {
        try {
          (Tt(3, e, e.return), fl(3, e));
        } catch (S) {
          H(e, e.return, S);
        }
        try {
          Tt(5, e, e.return);
        } catch (S) {
          H(e, e.return, S);
        }
      }
      break;
    case 1:
      (Pe(n, e), Oe(e), r & 512 && t !== null && Qn(t, t.return));
      break;
    case 5:
      if (
        (Pe(n, e),
        Oe(e),
        r & 512 && t !== null && Qn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rt(l, "");
        } catch (S) {
          H(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (u === "input" && i.type === "radio" && i.name != null && mu(l, i),
              oi(u, o));
            var d = oi(u, i);
            for (o = 0; o < a.length; o += 2) {
              var v = a[o],
                h = a[o + 1];
              v === "style"
                ? xu(l, h)
                : v === "dangerouslySetInnerHTML"
                  ? gu(l, h)
                  : v === "children"
                    ? Rt(l, h)
                    : Yi(l, v, h, d);
            }
            switch (u) {
              case "input":
                ni(l, i);
                break;
              case "textarea":
                hu(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Yn(l, !!i.multiple, x, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yn(l, !!i.multiple, i.defaultValue, !0)
                      : Yn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Ht] = i;
          } catch (S) {
            H(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Pe(n, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (S) {
          H(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Pe(n, e), Oe(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          At(n.containerInfo);
        } catch (S) {
          H(e, e.return, S);
        }
      break;
    case 4:
      (Pe(n, e), Oe(e));
      break;
    case 13:
      (Pe(n, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Co = K())),
        r & 4 && Is(e));
      break;
    case 22:
      if (
        ((v = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((le = (d = le) || v), Pe(n, e), (le = d)) : Pe(n, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (k = e, v = e.child; v !== null; ) {
            for (h = k = v; k !== null; ) {
              switch (((m = k), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tt(4, m, m.return);
                  break;
                case 1:
                  Qn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = m), (t = m.return));
                    try {
                      ((n = r),
                        (w.props = n.memoizedProps),
                        (w.state = n.memoizedState),
                        w.componentWillUnmount());
                    } catch (S) {
                      H(r, t, S);
                    }
                  }
                  break;
                case 5:
                  Qn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Us(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (k = x)) : Us(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                ((l = h.stateNode),
                  d
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = yu("display", o))));
              } catch (S) {
                H(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (S) {
                H(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (v === h && (v = null), (h = h.return));
          }
          (v === h && (v = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (Pe(n, e), Oe(e), r & 4 && Is(e));
      break;
    case 21:
      break;
    default:
      (Pe(n, e), Oe(e));
  }
}
function Oe(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ba(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rt(l, ""), (r.flags &= -33));
          var i = Ds(e);
          Di(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Ds(e);
          Oi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (a) {
      H(e, e.return, a);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function yf(e, n, t) {
  ((k = e), Ya(e));
}
function Ya(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || gr;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || le;
        u = gr;
        var d = le;
        if (((gr = o), (le = a) && !d))
          for (k = l; k !== null; )
            ((o = k),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? $s(l)
                : a !== null
                  ? ((a.return = o), (k = a))
                  : $s(l));
        for (; i !== null; ) ((k = i), Ya(i), (i = i.sibling));
        ((k = l), (gr = u), (le = d));
      }
      As(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (k = i)) : As(e);
  }
}
function As(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              le || fl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !le)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : ze(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = n.updateQueue;
              i !== null && ks(n, i, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                ks(n, o, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var a = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && t.focus();
                    break;
                  case "img":
                    a.src && (t.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && At(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (n.flags & 512 && Ri(n));
      } catch (m) {
        H(n, n.return, m);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      ((t.return = n.return), (k = t));
      break;
    }
    k = n.return;
  }
}
function Us(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      ((t.return = n.return), (k = t));
      break;
    }
    k = n.return;
  }
}
function $s(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            fl(4, n);
          } catch (a) {
            H(n, t, a);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (a) {
              H(n, l, a);
            }
          }
          var i = n.return;
          try {
            Ri(n);
          } catch (a) {
            H(n, i, a);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Ri(n);
          } catch (a) {
            H(n, o, a);
          }
      }
    } catch (a) {
      H(n, n.return, a);
    }
    if (n === e) {
      k = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      ((u.return = n.return), (k = u));
      break;
    }
    k = n.return;
  }
}
var xf = Math.ceil,
  qr = Ge.ReactCurrentDispatcher,
  No = Ge.ReactCurrentOwner,
  Ee = Ge.ReactCurrentBatchConfig,
  M = 0,
  q = null,
  Y = null,
  ee = 0,
  he = 0,
  Kn = vn(0),
  X = 0,
  Xt = null,
  Tn = 0,
  pl = 0,
  _o = 0,
  Lt = null,
  ce = null,
  Co = 0,
  it = 1 / 0,
  $e = null,
  br = !1,
  Ii = null,
  cn = null,
  yr = !1,
  rn = null,
  el = 0,
  Ft = 0,
  Ai = null,
  Tr = -1,
  Lr = 0;
function se() {
  return M & 6 ? K() : Tr !== -1 ? Tr : (Tr = K());
}
function dn(e) {
  return e.mode & 1
    ? M & 2 && ee !== 0
      ? ee & -ee
      : nf.transition !== null
        ? (Lr === 0 && (Lr = Lu()), Lr)
        : ((e = R),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Au(e.type))),
          e)
    : 1;
}
function Me(e, n, t, r) {
  if (50 < Ft) throw ((Ft = 0), (Ai = null), Error(y(185)));
  (Jt(e, t, r),
    (!(M & 2) || e !== q) &&
      (e === q && (!(M & 2) && (pl |= t), X === 4 && nn(e, ee)),
      me(e, r),
      t === 1 && M === 0 && !(n.mode & 1) && ((it = K() + 500), al && gn())));
}
function me(e, n) {
  var t = e.callbackNode;
  nd(e, n);
  var r = Ir(e, e === q ? ee : 0);
  if (r === 0)
    (t !== null && Xo(t), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Xo(t), n === 1))
      (e.tag === 0 ? ef(Vs.bind(null, e)) : ra(Vs.bind(null, e)),
        Gd(function () {
          !(M & 6) && gn();
        }),
        (t = null));
    else {
      switch (Fu(r)) {
        case 1:
          t = qi;
          break;
        case 4:
          t = zu;
          break;
        case 16:
          t = Dr;
          break;
        case 536870912:
          t = Tu;
          break;
        default:
          t = Dr;
      }
      t = nc(t, Za.bind(null, e));
    }
    ((e.callbackPriority = n), (e.callbackNode = t));
  }
}
function Za(e, n) {
  if (((Tr = -1), (Lr = 0), M & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (qn() && e.callbackNode !== t) return null;
  var r = Ir(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = nl(e, r);
  else {
    n = r;
    var l = M;
    M |= 2;
    var i = Ga();
    (q !== e || ee !== n) && (($e = null), (it = K() + 500), Nn(e, n));
    do
      try {
        kf();
        break;
      } catch (u) {
        Xa(e, u);
      }
    while (!0);
    (fo(),
      (qr.current = i),
      (M = l),
      Y !== null ? (n = 0) : ((q = null), (ee = 0), (n = X)));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = di(e)), l !== 0 && ((r = l), (n = Ui(e, l)))), n === 1)
    )
      throw ((t = Xt), Nn(e, 0), nn(e, r), me(e, K()), t);
    if (n === 6) nn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !wf(l) &&
          ((n = nl(e, r)),
          n === 2 && ((i = di(e)), i !== 0 && ((r = i), (n = Ui(e, i)))),
          n === 1))
      )
        throw ((t = Xt), Nn(e, 0), nn(e, r), me(e, K()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Sn(e, ce, $e);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((n = Co + 500 - K()), 10 < n))
          ) {
            if (Ir(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (se(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = xi(Sn.bind(null, e, ce, $e), n);
            break;
          }
          Sn(e, ce, $e);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Fe(r);
            ((i = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~i));
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * xf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xi(Sn.bind(null, e, ce, $e), r);
            break;
          }
          Sn(e, ce, $e);
          break;
        case 5:
          Sn(e, ce, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return (me(e, K()), e.callbackNode === t ? Za.bind(null, e) : null);
}
function Ui(e, n) {
  var t = Lt;
  return (
    e.current.memoizedState.isDehydrated && (Nn(e, n).flags |= 256),
    (e = nl(e, n)),
    e !== 2 && ((n = ce), (ce = t), n !== null && $i(n)),
    e
  );
}
function $i(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function wf(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Re(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      ((t.return = n), (n = t));
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }
  return !0;
}
function nn(e, n) {
  for (
    n &= ~_o,
      n &= ~pl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;
  ) {
    var t = 31 - Fe(n),
      r = 1 << t;
    ((e[t] = -1), (n &= ~r));
  }
}
function Vs(e) {
  if (M & 6) throw Error(y(327));
  qn();
  var n = Ir(e, 0);
  if (!(n & 1)) return (me(e, K()), null);
  var t = nl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = di(e);
    r !== 0 && ((n = r), (t = Ui(e, r)));
  }
  if (t === 1) throw ((t = Xt), Nn(e, 0), nn(e, n), me(e, K()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    Sn(e, ce, $e),
    me(e, K()),
    null
  );
}
function Po(e, n) {
  var t = M;
  M |= 1;
  try {
    return e(n);
  } finally {
    ((M = t), M === 0 && ((it = K() + 500), al && gn()));
  }
}
function Ln(e) {
  rn !== null && rn.tag === 0 && !(M & 6) && qn();
  var n = M;
  M |= 1;
  var t = Ee.transition,
    r = R;
  try {
    if (((Ee.transition = null), (R = 1), e)) return e();
  } finally {
    ((R = r), (Ee.transition = t), (M = n), !(M & 6) && gn());
  }
}
function zo() {
  ((he = Kn.current), I(Kn));
}
function Nn(e, n) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Xd(t)), Y !== null))
    for (t = Y.return; t !== null; ) {
      var r = t;
      switch ((uo(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Wr());
          break;
        case 3:
          (rt(), I(fe), I(ie), yo());
          break;
        case 5:
          go(r);
          break;
        case 4:
          rt();
          break;
        case 13:
          I($);
          break;
        case 19:
          I($);
          break;
        case 10:
          po(r.type._context);
          break;
        case 22:
        case 23:
          zo();
      }
      t = t.return;
    }
  if (
    ((q = e),
    (Y = e = fn(e.current, null)),
    (ee = he = n),
    (X = 0),
    (Xt = null),
    (_o = pl = Tn = 0),
    (ce = Lt = null),
    jn !== null)
  ) {
    for (n = 0; n < jn.length; n++)
      if (((t = jn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = l), (r.next = o));
        }
        t.pending = r;
      }
    jn = null;
  }
  return e;
}
function Xa(e, n) {
  do {
    var t = Y;
    try {
      if ((fo(), (Cr.current = Jr), Gr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        Gr = !1;
      }
      if (
        ((zn = 0),
        (J = Z = V = null),
        (zt = !1),
        (Kt = 0),
        (No.current = null),
        t === null || t.return === null)
      ) {
        ((X = 1), (Xt = n), (Y = null));
        break;
      }
      e: {
        var i = e,
          o = t.return,
          u = t,
          a = n;
        if (
          ((n = ee),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var d = a,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var x = Ps(o);
          if (x !== null) {
            ((x.flags &= -257),
              zs(x, o, u, i, n),
              x.mode & 1 && Cs(i, d, n),
              (n = x),
              (a = d));
            var w = n.updateQueue;
            if (w === null) {
              var S = new Set();
              (S.add(a), (n.updateQueue = S));
            } else w.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              (Cs(i, d, n), To());
              break e;
            }
            a = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var A = Ps(o);
          if (A !== null) {
            (!(A.flags & 65536) && (A.flags |= 256),
              zs(A, o, u, i, n),
              ao(lt(a, u)));
            break e;
          }
        }
        ((i = a = lt(a, u)),
          X !== 4 && (X = 2),
          Lt === null ? (Lt = [i]) : Lt.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (n &= -n), (i.lanes |= n));
              var f = Fa(i, a, n);
              Ss(i, f);
              break e;
            case 1:
              u = a;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (cn === null || !cn.has(p))))
              ) {
                ((i.flags |= 65536), (n &= -n), (i.lanes |= n));
                var g = Ma(i, u, n);
                Ss(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      qa(t);
    } catch (j) {
      ((n = j), Y === t && t !== null && (Y = t = t.return));
      continue;
    }
    break;
  } while (!0);
}
function Ga() {
  var e = qr.current;
  return ((qr.current = Jr), e === null ? Jr : e);
}
function To() {
  ((X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Tn & 268435455) && !(pl & 268435455)) || nn(q, ee));
}
function nl(e, n) {
  var t = M;
  M |= 2;
  var r = Ga();
  (q !== e || ee !== n) && (($e = null), Nn(e, n));
  do
    try {
      Sf();
      break;
    } catch (l) {
      Xa(e, l);
    }
  while (!0);
  if ((fo(), (M = t), (qr.current = r), Y !== null)) throw Error(y(261));
  return ((q = null), (ee = 0), X);
}
function Sf() {
  for (; Y !== null; ) Ja(Y);
}
function kf() {
  for (; Y !== null && !Kc(); ) Ja(Y);
}
function Ja(e) {
  var n = ec(e.alternate, e, he);
  ((e.memoizedProps = e.pendingProps),
    n === null ? qa(e) : (Y = n),
    (No.current = null));
}
function qa(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = hf(t, n)), t !== null)) {
        ((t.flags &= 32767), (Y = t));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((X = 6), (Y = null));
        return;
      }
    } else if (((t = mf(t, n, he)), t !== null)) {
      Y = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      Y = n;
      return;
    }
    Y = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function Sn(e, n, t) {
  var r = R,
    l = Ee.transition;
  try {
    ((Ee.transition = null), (R = 1), jf(e, n, t, r));
  } finally {
    ((Ee.transition = l), (R = r));
  }
  return null;
}
function jf(e, n, t, r) {
  do qn();
  while (rn !== null);
  if (M & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = t.lanes | t.childLanes;
  if (
    (td(e, i),
    e === q && ((Y = q = null), (ee = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      yr ||
      ((yr = !0),
      nc(Dr, function () {
        return (qn(), null);
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    ((i = Ee.transition), (Ee.transition = null));
    var o = R;
    R = 1;
    var u = M;
    ((M |= 4),
      (No.current = null),
      gf(e, t),
      Ka(t, e),
      Wd(gi),
      (Ar = !!vi),
      (gi = vi = null),
      (e.current = t),
      yf(t),
      Yc(),
      (M = u),
      (R = o),
      (Ee.transition = i));
  } else e.current = t;
  if (
    (yr && ((yr = !1), (rn = e), (el = l)),
    (i = e.pendingLanes),
    i === 0 && (cn = null),
    Gc(t.stateNode),
    me(e, K()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      ((l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (br) throw ((br = !1), (e = Ii), (Ii = null), e);
  return (
    el & 1 && e.tag !== 0 && qn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ai ? Ft++ : ((Ft = 0), (Ai = e))) : (Ft = 0),
    gn(),
    null
  );
}
function qn() {
  if (rn !== null) {
    var e = Fu(el),
      n = Ee.transition,
      t = R;
    try {
      if (((Ee.transition = null), (R = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (el = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if (k.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var d = u[a];
                for (k = d; k !== null; ) {
                  var v = k;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tt(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) ((h.return = v), (k = h));
                  else
                    for (; k !== null; ) {
                      v = k;
                      var m = v.sibling,
                        x = v.return;
                      if ((Ha(v), v === d)) {
                        k = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = x), (k = m));
                        break;
                      }
                      k = x;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var A = S.sibling;
                    ((S.sibling = null), (S = A));
                  } while (S !== null);
                }
              }
              k = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (k = o));
          else
            e: for (; k !== null; ) {
              if (((i = k), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tt(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                ((f.return = i.return), (k = f));
                break e;
              }
              k = i.return;
            }
        }
        var c = e.current;
        for (k = c; k !== null; ) {
          o = k;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) ((p.return = o), (k = p));
          else
            e: for (o = c; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, u);
                  }
                } catch (j) {
                  H(u, u.return, j);
                }
              if (u === o) {
                k = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                ((g.return = u.return), (k = g));
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((M = l), gn(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
        )
          try {
            Ae.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((R = t), (Ee.transition = n));
    }
  }
  return !1;
}
function Ws(e, n, t) {
  ((n = lt(t, n)),
    (n = Fa(e, n, 1)),
    (e = an(e, n, 1)),
    (n = se()),
    e !== null && (Jt(e, 1, n), me(e, n)));
}
function H(e, n, t) {
  if (e.tag === 3) Ws(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Ws(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          ((e = lt(t, e)),
            (e = Ma(n, e, 1)),
            (n = an(n, e, 1)),
            (e = se()),
            n !== null && (Jt(n, 1, e), me(n, e)));
          break;
        }
      }
      n = n.return;
    }
}
function Ef(e, n, t) {
  var r = e.pingCache;
  (r !== null && r.delete(n),
    (n = se()),
    (e.pingedLanes |= e.suspendedLanes & t),
    q === e &&
      (ee & t) === t &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > K() - Co)
        ? Nn(e, 0)
        : (_o |= t)),
    me(e, n));
}
function ba(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
      : (n = 1));
  var t = se();
  ((e = Ze(e, n)), e !== null && (Jt(e, n, t), me(e, t)));
}
function Nf(e) {
  var n = e.memoizedState,
    t = 0;
  (n !== null && (t = n.retryLane), ba(e, t));
}
function _f(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  (r !== null && r.delete(n), ba(e, t));
}
var ec;
ec = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current) de = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return ((de = !1), pf(e, n, t));
      de = !!(e.flags & 131072);
    }
  else ((de = !1), U && n.flags & 1048576 && la(n, Qr, n.index));
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      (zr(e, n), (e = n.pendingProps));
      var l = et(n, ie.current);
      (Jn(n, t), (l = wo(null, n, r, e, l, t)));
      var i = So();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            pe(r) ? ((i = !0), Hr(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ho(n),
            (l.updater = dl),
            (n.stateNode = l),
            (l._reactInternals = n),
            _i(n, r, e, t),
            (n = zi(null, n, r, !0, i, t)))
          : ((n.tag = 0), U && i && so(n), oe(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (zr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Pf(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            n = Pi(null, n, r, e, t);
            break e;
          case 1:
            n = Fs(null, n, r, e, t);
            break e;
          case 11:
            n = Ts(null, n, r, e, t);
            break e;
          case 14:
            n = Ls(null, n, r, ze(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Pi(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Fs(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Ia(n), e === null)) throw Error(y(387));
        ((r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          ca(e, n),
          Zr(n, r, null, t));
        var o = n.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            ((l = lt(Error(y(423)), n)), (n = Ms(e, n, r, t, l)));
            break e;
          } else if (r !== l) {
            ((l = lt(Error(y(424)), n)), (n = Ms(e, n, r, t, l)));
            break e;
          } else
            for (
              ve = un(n.stateNode.containerInfo.firstChild),
                ge = n,
                U = !0,
                Le = null,
                t = ua(n, null, r, t),
                n.child = t;
              t;
            )
              ((t.flags = (t.flags & -3) | 4096), (t = t.sibling));
        else {
          if ((nt(), r === l)) {
            n = Xe(e, n, t);
            break e;
          }
          oe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        da(n),
        e === null && ji(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        yi(r, l) ? (o = null) : i !== null && yi(r, i) && (n.flags |= 32),
        Da(e, n),
        oe(e, n, o, t),
        n.child
      );
    case 6:
      return (e === null && ji(n), null);
    case 13:
      return Aa(e, n, t);
    case 4:
      return (
        vo(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = tt(n, null, r, t)) : oe(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Ts(e, n, r, l, t)
      );
    case 7:
      return (oe(e, n, n.pendingProps, t), n.child);
    case 8:
      return (oe(e, n, n.pendingProps.children, t), n.child);
    case 12:
      return (oe(e, n, n.pendingProps.children, t), n.child);
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (o = l.value),
          O(Kr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Re(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              n = Xe(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ((a = Qe(-1, t & -t)), (a.tag = 2));
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        (v === null
                          ? (a.next = a)
                          : ((a.next = v.next), (v.next = a)),
                          (d.pending = a));
                      }
                    }
                    ((i.lanes |= t),
                      (a = i.alternate),
                      a !== null && (a.lanes |= t),
                      Ei(i.return, t, n),
                      (u.lanes |= t));
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                ((o.lanes |= t),
                  (u = o.alternate),
                  u !== null && (u.lanes |= t),
                  Ei(o, t, n),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (oe(e, n, l.children, t), (n = n.child));
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Jn(n, t),
        (l = Ne(l)),
        (r = r(l)),
        (n.flags |= 1),
        oe(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = ze(r, n.pendingProps)),
        (l = ze(r.type, l)),
        Ls(e, n, r, l, t)
      );
    case 15:
      return Ra(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        zr(e, n),
        (n.tag = 1),
        pe(r) ? ((e = !0), Hr(n)) : (e = !1),
        Jn(n, t),
        La(n, r, l),
        _i(n, r, l, t),
        zi(null, n, r, !0, e, t)
      );
    case 19:
      return Ua(e, n, t);
    case 22:
      return Oa(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function nc(e, n) {
  return Pu(e, n);
}
function Cf(e, n, t, r) {
  ((this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function je(e, n, t, r) {
  return new Cf(e, n, t, r);
}
function Lo(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Pf(e) {
  if (typeof e == "function") return Lo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xi)) return 11;
    if (e === Gi) return 14;
  }
  return 2;
}
function fn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = je(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Fr(e, n, t, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Lo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Dn:
        return _n(t.children, l, i, n);
      case Zi:
        ((o = 8), (l |= 8));
        break;
      case Gl:
        return (
          (e = je(12, t, n, l | 2)),
          (e.elementType = Gl),
          (e.lanes = i),
          e
        );
      case Jl:
        return ((e = je(13, t, n, l)), (e.elementType = Jl), (e.lanes = i), e);
      case ql:
        return ((e = je(19, t, n, l)), (e.elementType = ql), (e.lanes = i), e);
      case du:
        return ml(t, l, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case au:
              o = 10;
              break e;
            case cu:
              o = 9;
              break e;
            case Xi:
              o = 11;
              break e;
            case Gi:
              o = 14;
              break e;
            case qe:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = je(o, t, n, l)),
    (n.elementType = e),
    (n.type = r),
    (n.lanes = i),
    n
  );
}
function _n(e, n, t, r) {
  return ((e = je(7, e, r, n)), (e.lanes = t), e);
}
function ml(e, n, t, r) {
  return (
    (e = je(22, e, r, n)),
    (e.elementType = du),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, n, t) {
  return ((e = je(6, e, null, n)), (e.lanes = t), e);
}
function Yl(e, n, t) {
  return (
    (n = je(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function zf(e, n, t, r, l) {
  ((this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Cl(0)),
    (this.expirationTimes = Cl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Cl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function Fo(e, n, t, r, l, i, o, u, a) {
  return (
    (e = new zf(e, n, t, u, a)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = je(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(i),
    e
  );
}
function Tf(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function tc(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (pe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (pe(t)) return ta(e, t, n);
  }
  return n;
}
function rc(e, n, t, r, l, i, o, u, a) {
  return (
    (e = Fo(t, r, !0, e, l, i, o, u, a)),
    (e.context = tc(null)),
    (t = e.current),
    (r = se()),
    (l = dn(t)),
    (i = Qe(r, l)),
    (i.callback = n ?? null),
    an(t, i, l),
    (e.current.lanes = l),
    Jt(e, l, r),
    me(e, r),
    e
  );
}
function hl(e, n, t, r) {
  var l = n.current,
    i = se(),
    o = dn(l);
  return (
    (t = tc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = Qe(i, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = an(l, n, o)),
    e !== null && (Me(e, l, o, i), _r(e, l, o)),
    o
  );
}
function tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hs(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Mo(e, n) {
  (Hs(e, n), (e = e.alternate) && Hs(e, n));
}
function Lf() {
  return null;
}
var lc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ro(e) {
  this._internalRoot = e;
}
vl.prototype.render = Ro.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  hl(e, n, null, null);
};
vl.prototype.unmount = Ro.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    (Ln(function () {
      hl(null, e, null, null);
    }),
      (n[Ye] = null));
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Ou();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < en.length && n !== 0 && n < en[t].priority; t++);
    (en.splice(t, 0, e), t === 0 && Iu(e));
  }
};
function Oo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bs() {}
function Ff(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = tl(o);
        i.call(d);
      };
    }
    var o = rc(n, r, e, 0, null, !1, !1, "", Bs);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Vt(e.nodeType === 8 ? e.parentNode : e),
      Ln(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = tl(a);
      u.call(d);
    };
  }
  var a = Fo(e, 0, !1, null, null, !1, !1, "", Bs);
  return (
    (e._reactRootContainer = a),
    (e[Ye] = a.current),
    Vt(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      hl(n, a, t, r);
    }),
    a
  );
}
function yl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = tl(o);
        u.call(a);
      };
    }
    hl(n, o, e, l);
  } else o = Ff(t, n, e, l, r);
  return tl(o);
}
Mu = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = kt(n.pendingLanes);
        t !== 0 &&
          (bi(n, t | 1), me(n, K()), !(M & 6) && ((it = K() + 500), gn()));
      }
      break;
    case 13:
      (Ln(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = se();
          Me(r, e, 1, l);
        }
      }),
        Mo(e, 1));
  }
};
eo = function (e) {
  if (e.tag === 13) {
    var n = Ze(e, 134217728);
    if (n !== null) {
      var t = se();
      Me(n, e, 134217728, t);
    }
    Mo(e, 134217728);
  }
};
Ru = function (e) {
  if (e.tag === 13) {
    var n = dn(e),
      t = Ze(e, n);
    if (t !== null) {
      var r = se();
      Me(t, e, n, r);
    }
    Mo(e, n);
  }
};
Ou = function () {
  return R;
};
Du = function (e, n) {
  var t = R;
  try {
    return ((R = e), n());
  } finally {
    R = t;
  }
};
ui = function (e, n, t) {
  switch (n) {
    case "input":
      if ((ni(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = ul(r);
            if (!l) throw Error(y(90));
            (pu(r), ni(r, l));
          }
        }
      }
      break;
    case "textarea":
      hu(e, t);
      break;
    case "select":
      ((n = t.value), n != null && Yn(e, !!t.multiple, n, !1));
  }
};
ku = Po;
ju = Ln;
var Mf = { usingClientEntryPoint: !1, Events: [bt, $n, ul, wu, Su, Po] },
  xt = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rf = {
    bundleType: xt.bundleType,
    version: xt.version,
    rendererPackageName: xt.rendererPackageName,
    rendererConfig: xt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = _u(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: xt.findFiberByHostInstance || Lf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xr.isDisabled && xr.supportsFiber)
    try {
      ((ll = xr.inject(Rf)), (Ae = xr));
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mf;
xe.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oo(n)) throw Error(y(200));
  return Tf(e, n, null, t);
};
xe.createRoot = function (e, n) {
  if (!Oo(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = lc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Fo(e, 1, !1, null, null, t, !1, r, l)),
    (e[Ye] = n.current),
    Vt(e.nodeType === 8 ? e.parentNode : e),
    new Ro(n)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return ((e = _u(n)), (e = e === null ? null : e.stateNode), e);
};
xe.flushSync = function (e) {
  return Ln(e);
};
xe.hydrate = function (e, n, t) {
  if (!gl(n)) throw Error(y(200));
  return yl(null, e, n, !0, t);
};
xe.hydrateRoot = function (e, n, t) {
  if (!Oo(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = "",
    o = lc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = rc(n, null, e, 1, t ?? null, l, !1, i, o)),
    (e[Ye] = n.current),
    Vt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l));
  return new vl(n);
};
xe.render = function (e, n, t) {
  if (!gl(n)) throw Error(y(200));
  return yl(null, e, n, !1, t);
};
xe.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Ln(function () {
        yl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ye] = null));
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = Po;
xe.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!gl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return yl(e, n, t, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function ic() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic);
    } catch (e) {
      console.error(e);
    }
}
(ic(), (iu.exports = xe));
var Of = iu.exports,
  Qs = Of;
((Zl.createRoot = Qs.createRoot), (Zl.hydrateRoot = Qs.hydrateRoot));
const Df = "12 99739-6650",
  If = "5512997396650",
  ot = (
    e = "Olá, Fernando Silva! Gostaria de solicitar uma avaliação para um enxame.",
  ) => `https://wa.me/${If}?text=${encodeURIComponent(e)}`,
  Ks = {
    tiktok: "https://vm.tiktok.com/ZS9yuX4w3hTh8-BVz9g/",
    facebook: "https://www.facebook.com/profile.php?id=100025757838606",
  },
  Af = [
    {
      title: "Remoção de enxames de abelhas",
      description:
        "Avaliação da situação e manejo cuidadoso de enxames em imóveis e áreas externas.",
      icon: "hive",
    },
    {
      title: "Manejo de marimbondos e vespas",
      description:
        "Atendimento para ocorrências envolvendo marimbondos e vespas, com orientação responsável.",
      icon: "shield",
    },
    {
      title: "Telhados e forros",
      description:
        "Atuação em beirais, telhados, forros e espaços de difícil acesso, conforme avaliação.",
      icon: "roof",
    },
    {
      title: "Árvores e áreas externas",
      description:
        "Avaliação de enxames instalados em árvores, jardins e outros ambientes externos.",
      icon: "leaf",
    },
    {
      title: "Paredes e estruturas",
      description:
        "Inspeção de estruturas e pontos de instalação para definir a melhor abordagem.",
      icon: "home",
    },
    {
      title: "Resgate e realocação de colônias",
      description:
        "Quando tecnicamente possível, manejo orientado ao resgate e à realocação responsável.",
      icon: "flower",
    },
  ],
  Uf = [
    {
      src: "/images/02_enxame_sob_telhas.jpg",
      title: "Enxame sob telhas",
      category: "Telhados e beirais",
    },
    {
      src: "/images/05_abelhas_em_area_de_telhado.jpg",
      title: "Abelhas em área de telhado",
      category: "Estruturas residenciais",
    },
    {
      src: "/images/06_abelhas_em_estrutura_de_madeira.jpg",
      title: "Colônia em estrutura de madeira",
      category: "Manejo em estruturas",
    },
    {
      src: "/images/01_favos_de_cera_e_abelhas.jpg",
      title: "Favos de cera e abelhas",
      category: "Detalhes do enxame",
    },
    {
      src: "/images/07_detalhe_do_enxame.jpg",
      title: "Detalhe do enxame",
      category: "Registro de atendimento",
    },
    {
      src: "/images/03_apicultor_com_material_de_manejo.jpg",
      title: "Materiais de manejo",
      category: "Rotina profissional",
    },
    {
      src: "/images/04_enxame_em_estrutura.jpg",
      title: "Enxame em estrutura",
      category: "Manejo em imóvel",
    },
  ],
  $f = [
    {
      q: "Quais cidades são atendidas?",
      a: "Fernando Silva atende Ubatuba e Caraguatatuba. Consulte pelo WhatsApp a disponibilidade para o seu endereço.",
    },
    {
      q: "Como faço para solicitar uma avaliação?",
      a: "Entre em contato pelo WhatsApp e, se possível, envie fotos ou vídeos do local e informe o endereço aproximado. Se necessário, a avaliação presencial é combinada diretamente.",
    },
    {
      q: "A avaliação presencial tem custo?",
      a: "Não. A avaliação presencial não tem cobrança. O valor do serviço, quando necessário, é informado após entender a situação.",
    },
    {
      q: "Fernando Silva atende enxames em telhados, forros e paredes?",
      a: "Sim. O atendimento inclui avaliação de ocorrências em telhados, forros, árvores, paredes e outras estruturas.",
    },
    {
      q: "O que devo fazer ao encontrar um enxame?",
      a: "Mantenha distância, afaste crianças e animais e não tente tocar, espantar ou remover o enxame. Entre em contato para receber orientação.",
    },
  ];
function F({ name: e, size: n = 20, ...t }) {
  const r = {
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.8,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": !0,
      ...t,
    },
    l = {
      menu: s.jsx(s.Fragment, {
        children: s.jsx("path", { d: "M4 7h16M4 12h16M4 17h16" }),
      }),
      close: s.jsx(s.Fragment, {
        children: s.jsx("path", { d: "m6 6 12 12M18 6 6 18" }),
      }),
      whatsapp: s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", {
            d: "M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z",
          }),
          s.jsx("path", {
            d: "M8.5 8.2c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.3 1.6 2.2 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.6-.6.5-1.4.6-2.2.4-1-.2-2.2-.8-3.4-1.9-1.2-1.1-2-2.5-2.2-3.5-.2-.9.1-1.8.5-2.4Z",
          }),
        ],
      }),
      arrow: s.jsx(s.Fragment, {
        children: s.jsx("path", { d: "M4 12h15M13 5l7 7-7 7" }),
      }),
      pin: s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", {
            d: "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z",
          }),
          s.jsx("circle", { cx: "12", cy: "10", r: "2.5" }),
        ],
      }),
      leaf: s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", {
            d: "M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16Z",
          }),
          s.jsx("path", { d: "M4 21c3-5 7-8 12-11" }),
        ],
      }),
      shield: s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", { d: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" }),
          s.jsx("path", { d: "m9 12 2 2 4-4" }),
        ],
      }),
      hive: s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", { d: "m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2Z" }),
          s.jsx("path", { d: "m4 6.5 8 4.5 8-4.5M12 11v9" }),
          s.jsx("path", { d: "m8 4.2 8 4.5" }),
        ],
      }),
      roof: s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", { d: "m3 11 9-8 9 8" }),
          s.jsx("path", { d: "M5 10v10h14V10M9 20v-6h6v6" }),
        ],
      }),
      home: s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", { d: "m3 10 9-7 9 7v10H3Z" }),
          s.jsx("path", { d: "M9 20v-6h6v6" }),
        ],
      }),
      flower: s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", {
            d: "M12 12c-4-1-5-5-2-7 2-1 4 1 2 7Zm0 0c1-4 5-5 7-2 1 2-1 4-7 2Zm0 0c4 1 5 5 2 7-2 1-4-1-2-7Zm0 0c-1 4-5 5-7 2-1-2 1-4 7-2Z",
          }),
          s.jsx("circle", { cx: "12", cy: "12", r: "2" }),
          s.jsx("path", { d: "M12 14v8" }),
        ],
      }),
      check: s.jsx(s.Fragment, {
        children: s.jsx("path", { d: "m5 12 4 4L19 6" }),
      }),
      clock: s.jsxs(s.Fragment, {
        children: [
          s.jsx("circle", { cx: "12", cy: "12", r: "9" }),
          s.jsx("path", { d: "M12 7v5l3 2" }),
        ],
      }),
      camera: s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", { d: "M4 7h3l2-3h6l2 3h3v13H4Z" }),
          s.jsx("circle", { cx: "12", cy: "13", r: "4" }),
        ],
      }),
      plus: s.jsx(s.Fragment, {
        children: s.jsx("path", { d: "M12 5v14M5 12h14" }),
      }),
      facebook: s.jsx(s.Fragment, {
        children: s.jsx("path", {
          d: "M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z",
        }),
      }),
      play: s.jsx(s.Fragment, {
        children: s.jsx("path", { d: "m8 5 11 7-11 7V5Z" }),
      }),
      award: s.jsxs(s.Fragment, {
        children: [
          s.jsx("circle", { cx: "12", cy: "8", r: "6" }),
          s.jsx("path", { d: "m8 13-2 9 6-3 6 3-2-9" }),
        ],
      }),
      message: s.jsx(s.Fragment, {
        children: s.jsx("path", {
          d: "M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.5-4A7.5 7.5 0 1 1 20 11.5Z",
        }),
      }),
      phone: s.jsx(s.Fragment, {
        children: s.jsx("path", {
          d: "M6 3h3l2 5-2 2a15 15 0 0 0 5 5l2-2 5 2v3a2 2 0 0 1-2 2C10 20 4 14 4 5a2 2 0 0 1 2-2Z",
        }),
      }),
    };
  return s.jsx("svg", { ...r, children: l[e] });
}
const Vf = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Como funciona", "#processo"],
  ["Trabalhos", "#trabalhos"],
  ["Contato", "#contato"],
];
function Wf() {
  const [e, n] = Be.useState(!1);
  return s.jsx("header", {
    className: "site-header",
    children: s.jsxs("div", {
      className: "header-inner",
      children: [
        s.jsxs("a", {
          href: "#inicio",
          className: "brand",
          "aria-label": "Fernando Silva, apicultor — início",
          children: [
            s.jsx("span", {
              className: "brand-mark",
              children: s.jsx("img", {
                src: "/images/simbolo-apicultura.jpg",
                alt: "",
              }),
            }),
            s.jsxs("span", {
              className: "brand-type",
              children: [
                s.jsx("strong", { children: "Fernando Silva" }),
                s.jsx("b", { children: "APICULTOR" }),
                s.jsx("small", { children: "MANEJO RESPONSÁVEL DE ENXAMES" }),
              ],
            }),
          ],
        }),
        s.jsxs("nav", {
          className: `main-nav ${e ? "is-open" : ""}`,
          "aria-label": "Navegação principal",
          children: [
            Vf.map(([t, r]) =>
              s.jsx("a", { href: r, onClick: () => n(!1), children: t }, r),
            ),
            s.jsxs("a", {
              className: "mobile-nav-cta",
              href: ot(),
              target: "_blank",
              rel: "noreferrer",
              children: [s.jsx(F, { name: "whatsapp" }), " Falar no WhatsApp"],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "header-actions",
          children: [
            s.jsxs("span", {
              className: "location-chip",
              children: [
                s.jsx(F, { name: "pin", size: 17 }),
                s.jsxs("span", {
                  children: [
                    "Atendimento em",
                    s.jsx("br", {}),
                    s.jsx("b", { children: "Ubatuba e Caraguatatuba" }),
                  ],
                }),
              ],
            }),
            s.jsxs("a", {
              className: "button button-amber header-cta",
              href: ot(),
              target: "_blank",
              rel: "noreferrer",
              children: [s.jsx(F, { name: "whatsapp" }), " Falar no WhatsApp"],
            }),
          ],
        }),
        s.jsx("button", {
          className: "menu-toggle",
          onClick: () => n(!e),
          "aria-label": e ? "Fechar menu" : "Abrir menu",
          "aria-expanded": e,
          children: s.jsx(F, { name: e ? "close" : "menu", size: 24 }),
        }),
      ],
    }),
  });
}
const Hf = ["hive", "shield", "roof", "leaf", "home", "flower"];
function Bf() {
  return s.jsx("section", {
    id: "servicos",
    className: "section section-cream",
    children: s.jsxs("div", {
      className: "container",
      children: [
        s.jsxs("div", {
          className: "section-heading split-heading",
          children: [
            s.jsxs("div", {
              children: [
                s.jsx("span", {
                  className: "eyebrow",
                  children: "Como posso ajudar?",
                }),
                s.jsxs("h2", {
                  children: [
                    "Manejo responsável,",
                    s.jsx("br", {}),
                    s.jsx("em", { children: "do jeito certo." }),
                  ],
                }),
              ],
            }),
            s.jsx("p", {
              children:
                "Atendimento para ocorrências com abelhas, marimbondos e vespas em residências, telhados, árvores e outras estruturas.",
            }),
          ],
        }),
        s.jsx("div", {
          className: "service-grid",
          children: Af.map((e, n) =>
            s.jsxs(
              "article",
              {
                className: "service-card",
                children: [
                  s.jsx("div", {
                    className: "service-icon",
                    children: s.jsx(F, { name: Hf[n], size: 26 }),
                  }),
                  s.jsxs("span", {
                    className: "service-number",
                    children: ["0", n + 1],
                  }),
                  s.jsx("h3", { children: e.title }),
                  s.jsx("p", { children: e.description }),
                  s.jsxs("a", {
                    href: ot(
                      `Olá, Fernando Silva! Gostaria de informações sobre: ${e.title.toLowerCase()}.`,
                    ),
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": `Consultar sobre ${e.title}`,
                    children: [
                      "Consultar serviço ",
                      s.jsx(F, { name: "arrow", size: 16 }),
                    ],
                  }),
                ],
              },
              e.title,
            ),
          ),
        }),
      ],
    }),
  });
}
const Qf = [
  {
    n: "01",
    icon: "message",
    title: "Entre em contato",
    text: "Conte o que está acontecendo e informe a localização aproximada.",
  },
  {
    n: "02",
    icon: "camera",
    title: "Envie fotos ou solicite uma visita",
    text: "As imagens ajudam na primeira avaliação. Se necessário, combinamos uma visita presencial gratuita.",
  },
  {
    n: "03",
    icon: "check",
    title: "Combine o atendimento",
    text: "Fernando Silva explica a situação, alinha as condições e combina os próximos passos.",
  },
];
function Kf() {
  return s.jsxs("section", {
    id: "processo",
    className: "section section-forest process-section",
    children: [
      s.jsxs("div", {
        className: "container",
        children: [
          s.jsxs("div", {
            className: "section-heading section-heading-light",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("span", {
                    className: "eyebrow eyebrow-gold",
                    children: "Simples e transparente",
                  }),
                  s.jsxs("h2", {
                    children: [
                      "Como funciona",
                      s.jsx("br", {}),
                      s.jsx("em", { children: "o atendimento." }),
                    ],
                  }),
                ],
              }),
              s.jsx("p", {
                children:
                  "Da primeira conversa à definição do serviço, tudo é explicado com clareza.",
              }),
            ],
          }),
          s.jsx("div", {
            className: "steps-grid",
            children: Qf.map((e, n) =>
              s.jsxs(
                "article",
                {
                  className: "step-card",
                  children: [
                    s.jsxs("div", {
                      className: "step-top",
                      children: [
                        s.jsx("span", { children: e.n }),
                        s.jsx("div", {
                          className: "step-icon",
                          children: s.jsx(F, { name: e.icon, size: 25 }),
                        }),
                      ],
                    }),
                    s.jsx("h3", { children: e.title }),
                    s.jsx("p", { children: e.text }),
                    n < 2 &&
                      s.jsx("span", {
                        className: "step-connector",
                        "aria-hidden": "true",
                        children: "›",
                      }),
                  ],
                },
                e.n,
              ),
            ),
          }),
          s.jsxs("div", {
            className: "free-visit",
            children: [
              s.jsx(F, { name: "check", size: 20 }),
              s.jsxs("span", {
                children: [
                  s.jsx("strong", {
                    children: "Avaliação presencial sem custo.",
                  }),
                  " O atendimento é combinado diretamente pelo WhatsApp.",
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className: "honeycomb-outline",
        "aria-hidden": "true",
        children: ["⬡ ⬡", s.jsx("br", {}), " ⬡ ⬡ ⬡"],
      }),
    ],
  });
}
function wr({
  children: e = "Falar no WhatsApp",
  message: n,
  className: t = "",
}) {
  return s.jsxs("a", {
    className: t,
    href: ot(n),
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "Conversar com Fernando Silva pelo WhatsApp",
    children: [
      s.jsx(F, { name: "whatsapp", size: 19 }),
      s.jsx("span", { children: e }),
      s.jsx(F, { name: "arrow", size: 16 }),
    ],
  });
}
const Ys = "fernando-evaluation-invite-dismissed";
function Yf() {
  const [e, n] = Be.useState(!1);
  Be.useEffect(() => {
    if (window.sessionStorage.getItem(Ys) === "true") return;
    const l = window.setTimeout(() => n(!0), 7e3);
    return () => window.clearTimeout(l);
  }, []);
  const t = () => {
    (window.sessionStorage.setItem(Ys, "true"), n(!1));
  };
  return e
    ? s.jsxs("aside", {
        className: "evaluation-invite",
        "aria-label": "Solicite uma avaliação",
        children: [
          s.jsx("button", {
            className: "evaluation-invite-close",
            type: "button",
            onClick: t,
            "aria-label": "Fechar convite",
            children: s.jsx(F, { name: "close", size: 16 }),
          }),
          s.jsxs("div", {
            className: "evaluation-invite-heading",
            children: [
              s.jsx("span", {
                className: "evaluation-invite-mark",
                children: s.jsx(F, { name: "hive", size: 18 }),
              }),
              s.jsxs("span", {
                children: [
                  "FERNANDO SILVA ",
                  s.jsx("i", {}),
                  " ATENDIMENTO DIRETO",
                ],
              }),
            ],
          }),
          s.jsx("p", {
            className: "evaluation-invite-title",
            children: "Encontrou um enxame?",
          }),
          s.jsx("p", {
            className: "evaluation-invite-copy",
            children:
              "Solicite uma avaliação e receba orientação para a sua situação.",
          }),
          s.jsxs("a", {
            className: "evaluation-invite-action",
            href: ot(
              "Olá, Fernando Silva! Gostaria de solicitar uma avaliação para um enxame.",
            ),
            target: "_blank",
            rel: "noreferrer",
            "aria-label":
              "Solicitar avaliação com Fernando Silva pelo WhatsApp",
            children: [
              s.jsx(F, { name: "whatsapp", size: 18 }),
              s.jsx("span", { children: "Solicitar avaliação" }),
              s.jsx(F, { name: "arrow", size: 15 }),
            ],
          }),
        ],
      })
    : null;
}
function Zf() {
  const [e, n] = Be.useState(null),
    [t, r] = Be.useState(0);
  return (
    Be.useEffect(() => {
      const l = document.querySelectorAll(
        ".section .container > *, .hero-copy, .hero-person-wrap, .contact-inner > *",
      );
      l.forEach((o, u) => {
        (o.classList.add("reveal-ready"),
          o.style.setProperty("--reveal-delay", `${(u % 3) * 90}ms`));
      });
      const i = new IntersectionObserver(
        (o) => {
          o.forEach((u) => {
            u.isIntersecting &&
              (u.target.classList.add("is-visible"), i.unobserve(u.target));
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      return (l.forEach((o) => i.observe(o)), () => i.disconnect());
    }, []),
    s.jsxs(s.Fragment, {
      children: [
        s.jsx(Wf, {}),
        s.jsxs("main", {
          children: [
            s.jsxs("section", {
              id: "inicio",
              className: "hero-section",
              children: [
                s.jsx("div", {
                  className: "hero-photo",
                  "aria-hidden": "true",
                  children: s.jsx("img", {
                    src: "/images/05_abelhas_em_area_de_telhado.jpg",
                    alt: "",
                  }),
                }),
                s.jsx("div", {
                  className: "hero-shade",
                  "aria-hidden": "true",
                }),
                s.jsxs("div", {
                  className: "hero-honeycomb",
                  "aria-hidden": "true",
                  children: ["⬡", s.jsx("br", {}), " ⬡ ⬡"],
                }),
                s.jsxs("div", {
                  className: "container hero-content",
                  children: [
                    s.jsxs("div", {
                      className: "hero-copy",
                      children: [
                        s.jsx("span", {
                          className: "eyebrow eyebrow-gold",
                          children:
                            "Manejo de enxames • Ubatuba e Caraguatatuba",
                        }),
                        s.jsxs("h1", {
                          children: [
                            "Encontrou um",
                            s.jsx("br", {}),
                            s.jsx("em", { children: "enxame por perto?" }),
                          ],
                        }),
                        s.jsx("p", {
                          className: "hero-lead",
                          children:
                            "Cuidado profissional com as abelhas, respeito à natureza e atenção à segurança de pessoas e animais.",
                        }),
                        s.jsx("p", {
                          className: "hero-support",
                          children:
                            "Manejo responsável de abelhas, marimbondos e vespas, com orientação clara do primeiro contato ao atendimento.",
                        }),
                        s.jsx(wr, {
                          className: "button button-amber hero-button",
                          message:
                            "Olá, Fernando Silva! Encontrei um enxame e gostaria de solicitar uma avaliação.",
                          children: "Solicitar atendimento",
                        }),
                        s.jsxs("div", {
                          className: "hero-benefits",
                          children: [
                            s.jsxs("span", {
                              children: [
                                s.jsx(F, { name: "shield" }),
                                "Atendimento",
                                s.jsx("br", {}),
                                "responsável",
                              ],
                            }),
                            s.jsxs("span", {
                              children: [
                                s.jsx(F, { name: "leaf" }),
                                "Respeito à",
                                s.jsx("br", {}),
                                "natureza",
                              ],
                            }),
                            s.jsxs("span", {
                              children: [
                                s.jsx(F, { name: "hive" }),
                                "Manejo",
                                s.jsx("br", {}),
                                "cuidadoso",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "hero-person-wrap",
                      children: [
                        s.jsx("div", { className: "hero-glow" }),
                        s.jsx("img", {
                          className: "hero-person",
                          src: "/images/fernando-recortado.png",
                          alt: "Fernando Silva, apicultor, usando roupa de proteção e segurando materiais de manejo",
                        }),
                        s.jsxs("div", {
                          className: "hero-note",
                          children: [
                            s.jsx("span", { children: "Desde 2011" }),
                            s.jsxs("strong", {
                              children: [
                                "Experiência",
                                s.jsx("br", {}),
                                "e compromisso",
                              ],
                            }),
                            s.jsx("small", {
                              children: "Um cuidado em cada atendimento.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "hero-bottomline",
                  children: [
                    s.jsx("span", { children: "Respeito às abelhas" }),
                    s.jsx("i", {}),
                    " ",
                    s.jsx("span", { children: "Compromisso com a natureza" }),
                    s.jsx("i", {}),
                    " ",
                    s.jsx("span", { children: "Transparência com você" }),
                  ],
                }),
              ],
            }),
            s.jsx("section", {
              id: "sobre",
              className: "section about-section",
              children: s.jsxs("div", {
                className: "container about-grid",
                children: [
                  s.jsxs("div", {
                    className: "about-image-wrap",
                    children: [
                      s.jsx("div", {
                        className: "about-image-frame",
                        children: s.jsx("img", {
                          src: "/images/03_apicultor_com_material_de_manejo.jpg",
                          alt: "Fernando Silva com equipamentos utilizados no manejo de enxames",
                          loading: "lazy",
                        }),
                      }),
                      s.jsxs("div", {
                        className: "experience-stamp",
                        children: [
                          s.jsx("strong", { children: "2011" }),
                          s.jsxs("span", {
                            children: [
                              "início da",
                              s.jsx("br", {}),
                              "trajetória",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "about-copy",
                    children: [
                      s.jsx("span", {
                        className: "eyebrow",
                        children: "Sobre o profissional",
                      }),
                      s.jsxs("h2", {
                        children: [
                          "Experiência, respeito",
                          s.jsx("br", {}),
                          s.jsx("em", { children: "e compromisso." }),
                        ],
                      }),
                      s.jsx("p", {
                        children:
                          "Fernando Silva trabalha com apicultura desde 2011, realizando manejo e remoção de enxames com atenção aos detalhes, transparência e respeito pelo cliente.",
                      }),
                      s.jsx("p", {
                        children:
                          "Seu compromisso é oferecer um serviço eficiente e bem executado, explicar cada etapa sem complicações e cuidar do ambiente durante o atendimento.",
                      }),
                      s.jsx("blockquote", {
                        children:
                          "“Trabalho bem feito, sem surpresas e com máximo profissionalismo.”",
                      }),
                      s.jsxs("div", {
                        className: "about-points",
                        children: [
                          s.jsxs("span", {
                            children: [
                              s.jsx(F, { name: "check" }),
                              "Explicações claras",
                            ],
                          }),
                          s.jsxs("span", {
                            children: [
                              s.jsx(F, { name: "check" }),
                              "Capricho técnico",
                            ],
                          }),
                          s.jsxs("span", {
                            children: [
                              s.jsx(F, { name: "check" }),
                              "Preço justo e honesto",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx(Bf, {}),
            s.jsx(Kf, {}),
            s.jsx("section", {
              className: "section credentials-section",
              children: s.jsxs("div", {
                className: "container credentials-grid",
                children: [
                  s.jsxs("div", {
                    className: "credentials-copy",
                    children: [
                      s.jsx("span", {
                        className: "eyebrow",
                        children: "Formação e qualificação",
                      }),
                      s.jsxs("h2", {
                        children: [
                          "Conhecimento que",
                          s.jsx("br", {}),
                          s.jsx("em", { children: "vem da experiência." }),
                        ],
                      }),
                      s.jsx("p", {
                        children:
                          "Fernando Silva possui treinamento específico em apicultura pelo Serviço Nacional de Aprendizagem Rural — SENAR/AR-SP.",
                      }),
                      s.jsxs("div", {
                        className: "credential-facts",
                        children: [
                          s.jsxs("div", {
                            children: [
                              s.jsx("strong", { children: "168h" }),
                              s.jsx("span", { children: "de carga horária" }),
                            ],
                          }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("strong", { children: "2011" }),
                              s.jsx("span", {
                                children: "conclusão do treinamento",
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("strong", { children: "Desde 2011" }),
                              s.jsx("span", {
                                children: "atuação profissional informada",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("button", {
                    className: "certificate-card",
                    onClick: () =>
                      n({
                        src: "/images/certificado-senar-168h.png",
                        title: "Certificado de Treinamento em Apicultura",
                        category: "SENAR-AR/SP • 168 horas",
                      }),
                    "aria-label": "Ampliar certificado SENAR",
                    children: [
                      s.jsx("img", {
                        src: "/images/certificado-senar-168h.png",
                        alt: "Certificado de treinamento em apicultura pelo SENAR, com dados pessoais ocultados",
                        loading: "lazy",
                      }),
                      s.jsxs("span", {
                        children: [
                          s.jsx(F, { name: "camera", size: 16 }),
                          " Visualizar certificado",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx("section", {
              id: "trabalhos",
              className: "section gallery-section",
              children: s.jsxs("div", {
                className: "container",
                children: [
                  s.jsxs("div", {
                    className: "section-heading split-heading",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("span", {
                            className: "eyebrow",
                            children: "Registros de atendimentos",
                          }),
                          s.jsxs("h2", {
                            children: [
                              "Trabalho real,",
                              s.jsx("br", {}),
                              s.jsx("em", {
                                children: "cuidado em cada detalhe.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        children:
                          "Alguns registros de enxames e estruturas atendidas. As imagens mostram situações diferentes encontradas no manejo.",
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "gallery-grid",
                    children: Uf.map((l, i) =>
                      s.jsxs(
                        "button",
                        {
                          className: `gallery-item gallery-item-${i + 1}`,
                          onClick: () => n(l),
                          "aria-label": `Ampliar foto: ${l.title}`,
                          children: [
                            s.jsx("img", {
                              src: l.src,
                              alt: l.title,
                              loading: "lazy",
                            }),
                            s.jsxs("span", {
                              className: "gallery-caption",
                              children: [
                                s.jsx("small", { children: l.category }),
                                s.jsx("strong", { children: l.title }),
                                s.jsx("i", {
                                  children: s.jsx(F, {
                                    name: "arrow",
                                    size: 16,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        l.src,
                      ),
                    ),
                  }),
                  s.jsx("p", {
                    className: "gallery-note",
                    children:
                      "Fotografias de registros de trabalho e materiais de manejo. A avaliação de cada ocorrência depende das condições encontradas no local.",
                  }),
                ],
              }),
            }),
            s.jsx("section", {
              className: "section values-section",
              children: s.jsxs("div", {
                className: "container values-layout",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", {
                        className: "eyebrow eyebrow-gold",
                        children: "O jeito Fernando Silva de trabalhar",
                      }),
                      s.jsxs("h2", {
                        children: [
                          "Transparência do",
                          s.jsx("br", {}),
                          s.jsx("em", { children: "começo ao fim." }),
                        ],
                      }),
                      s.jsx("p", {
                        children:
                          "Sem soluções mirabolantes ou termos difíceis. Você entende o que está acontecendo, quais são as possibilidades e como será conduzido o atendimento.",
                      }),
                      s.jsx(wr, {
                        className: "button button-outline-light",
                        message:
                          "Olá, Fernando Silva! Gostaria de conversar sobre um atendimento.",
                        children: "Converse com o Fernando Silva",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "values-cards",
                    children: [
                      s.jsxs("article", {
                        children: [
                          s.jsx(F, { name: "shield" }),
                          s.jsx("h3", { children: "Capricho técnico" }),
                          s.jsx("p", {
                            children:
                              "Atenção aos detalhes e ao manejo adequado.",
                          }),
                        ],
                      }),
                      s.jsxs("article", {
                        children: [
                          s.jsx(F, { name: "message" }),
                          s.jsx("h3", { children: "Transparência" }),
                          s.jsx("p", {
                            children: "Orientações claras, sem complicação.",
                          }),
                        ],
                      }),
                      s.jsxs("article", {
                        children: [
                          s.jsx(F, { name: "leaf" }),
                          s.jsx("h3", { children: "Respeito" }),
                          s.jsx("p", {
                            children:
                              "Cuidado com as pessoas, as abelhas e o ambiente.",
                          }),
                        ],
                      }),
                      s.jsxs("article", {
                        children: [
                          s.jsx(F, { name: "check" }),
                          s.jsx("h3", { children: "Preço honesto" }),
                          s.jsx("p", {
                            children:
                              "Condições explicadas antes da realização do serviço.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx("section", {
              id: "faq",
              className: "section faq-section",
              children: s.jsxs("div", {
                className: "container faq-layout",
                children: [
                  s.jsxs("div", {
                    className: "faq-intro",
                    children: [
                      s.jsx("span", {
                        className: "eyebrow",
                        children: "Dúvidas frequentes",
                      }),
                      s.jsxs("h2", {
                        children: [
                          "Vamos esclarecer",
                          s.jsx("br", {}),
                          s.jsx("em", { children: "suas dúvidas?" }),
                        ],
                      }),
                      s.jsx("p", {
                        children:
                          "Se precisar de mais informações, fale diretamente com Fernando Silva.",
                      }),
                      s.jsx(wr, {
                        className: "button button-dark",
                        message:
                          "Olá, Fernando Silva! Tenho uma dúvida sobre o atendimento.",
                        children: "Tirar uma dúvida",
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "faq-list",
                    children: $f.map((l, i) =>
                      s.jsxs(
                        "article",
                        {
                          className: `faq-item ${t === i ? "active" : ""}`,
                          children: [
                            s.jsxs("button", {
                              onClick: () => r(t === i ? null : i),
                              "aria-expanded": t === i,
                              children: [
                                s.jsx("span", { children: l.q }),
                                s.jsx(F, { name: "plus", size: 18 }),
                              ],
                            }),
                            t === i && s.jsx("p", { children: l.a }),
                          ],
                        },
                        l.q,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            s.jsx("section", {
              id: "contato",
              className: "contact-section",
              children: s.jsxs("div", {
                className: "container contact-inner",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", {
                        className: "eyebrow eyebrow-gold",
                        children: "Atendimento em Ubatuba e Caraguatatuba",
                      }),
                      s.jsxs("h2", {
                        children: [
                          "Encontrou um enxame?",
                          s.jsx("br", {}),
                          s.jsx("em", { children: "Fale com Fernando Silva." }),
                        ],
                      }),
                      s.jsx("p", {
                        children:
                          "Envie uma mensagem, conte o que está acontecendo e combine a melhor forma de avaliação.",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "contact-action",
                    children: [
                      s.jsx(wr, {
                        className: "button button-amber contact-button",
                        message:
                          "Olá, Fernando Silva! Encontrei um enxame e gostaria de combinar uma avaliação.",
                        children: "Solicitar avaliação pelo WhatsApp",
                      }),
                      s.jsxs("span", {
                        children: [
                          s.jsx(F, { name: "check", size: 16 }),
                          " Avaliação presencial sem custo",
                        ],
                      }),
                      s.jsx("small", {
                        children: "Atendimento mediante agendamento.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        s.jsxs("footer", {
          className: "site-footer",
          children: [
            s.jsxs("div", {
              className: "container footer-main",
              children: [
                s.jsxs("a", {
                  href: "#inicio",
                  className: "brand brand-footer",
                  children: [
                    s.jsx("span", {
                      className: "brand-mark",
                      children: s.jsx("img", {
                        src: "/images/simbolo-apicultura.jpg",
                        alt: "",
                      }),
                    }),
                    s.jsxs("span", {
                      className: "brand-type",
                      children: [
                        s.jsx("strong", { children: "Fernando Silva" }),
                        s.jsx("b", { children: "APICULTOR" }),
                        s.jsx("small", {
                          children: "MANEJO RESPONSÁVEL DE ENXAMES",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("nav", {
                  className: "footer-nav",
                  "aria-label": "Links do rodapé",
                  children: [
                    ["Início", "#inicio"],
                    ["Sobre", "#sobre"],
                    ["Serviços", "#servicos"],
                    ["Trabalhos", "#trabalhos"],
                    ["Contato", "#contato"],
                  ].map(([l, i]) => s.jsx("a", { href: i, children: l }, i)),
                }),
                s.jsxs("div", {
                  className: "footer-contact",
                  children: [
                    s.jsxs("span", {
                      children: [
                        s.jsx(F, { name: "pin" }),
                        " Ubatuba e Caraguatatuba",
                      ],
                    }),
                    s.jsxs("a", {
                      href: ot(),
                      target: "_blank",
                      rel: "noreferrer",
                      children: [s.jsx(F, { name: "whatsapp" }), " ", Df],
                    }),
                    s.jsxs("div", {
                      className: "social-links",
                      children: [
                        s.jsx("a", {
                          href: Ks.facebook,
                          target: "_blank",
                          rel: "noreferrer",
                          "aria-label": "Facebook de Fernando Silva",
                          children: s.jsx(F, { name: "facebook" }),
                        }),
                        s.jsx("a", {
                          href: Ks.tiktok,
                          target: "_blank",
                          rel: "noreferrer",
                          "aria-label": "TikTok de Fernando Silva",
                          children: s.jsx(F, { name: "play" }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: "footer-bottom",
              children: s.jsxs("div", {
                className: "container",
                children: [
                  s.jsxs("span", {
                    children: [
                      "© ",
                      new Date().getFullYear(),
                      " Fernando Silva Apicultor. Todos os direitos reservados.",
                    ],
                  }),
                  s.jsx("span", {
                    children:
                      "Site desenvolvido com foco em informação e contato direto.",
                  }),
                ],
              }),
            }),
          ],
        }),
        s.jsx(Yf, {}),
        e &&
          s.jsxs("div", {
            className: "lightbox",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title,
            onClick: () => n(null),
            children: [
              s.jsx("button", {
                className: "lightbox-close",
                onClick: () => n(null),
                "aria-label": "Fechar imagem",
                children: s.jsx(F, { name: "close", size: 26 }),
              }),
              s.jsxs("div", {
                className: "lightbox-content",
                onClick: (l) => l.stopPropagation(),
                children: [
                  s.jsx("img", { src: e.src, alt: e.title }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("strong", { children: e.title }),
                      s.jsx("span", { children: e.category }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    })
  );
}
Zl.createRoot(document.getElementById("root")).render(
  s.jsx(jc.StrictMode, { children: s.jsx(Zf, {}) }),
);
