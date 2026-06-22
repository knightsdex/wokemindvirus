(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function s(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = r(c);
    fetch(c.href, d);
  }
})();
var Fu = { exports: {} },
  pl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var j0;
function Rx() {
  if (j0) return pl;
  j0 = 1;
  var i = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function r(s, c, d) {
    var f = null;
    if (
      (d !== void 0 && (f = "" + d),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var m in c) m !== "key" && (d[m] = c[m]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: i, type: s, key: f, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (pl.Fragment = a), (pl.jsx = r), (pl.jsxs = r), pl;
}
var C0;
function zx() {
  return C0 || ((C0 = 1), (Fu.exports = Rx())), Fu.exports;
}
var p = zx(),
  Pu = { exports: {} },
  lt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D0;
function _x() {
  if (D0) return lt;
  D0 = 1;
  var i = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function M(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (S && E[S]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    H = {};
  function L(E, B, J) {
    (this.props = E),
      (this.context = B),
      (this.refs = H),
      (this.updater = J || D);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (E, B) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, E, B, "setState");
    }),
    (L.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function q() {}
  q.prototype = L.prototype;
  function Y(E, B, J) {
    (this.props = E),
      (this.context = B),
      (this.refs = H),
      (this.updater = J || D);
  }
  var Q = (Y.prototype = new q());
  (Q.constructor = Y), U(Q, L.prototype), (Q.isPureReactComponent = !0);
  var tt = Array.isArray;
  function G() {}
  var X = { H: null, A: null, T: null, S: null },
    K = Object.prototype.hasOwnProperty;
  function nt(E, B, J) {
    var I = J.ref;
    return {
      $$typeof: i,
      type: E,
      key: B,
      ref: I !== void 0 ? I : null,
      props: J,
    };
  }
  function $(E, B) {
    return nt(E.type, B, E.props);
  }
  function pt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function xt(E) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (J) {
        return B[J];
      })
    );
  }
  var te = /\/+/g;
  function kt(E, B) {
    return typeof E == "object" && E !== null && E.key != null
      ? xt("" + E.key)
      : B.toString(36);
  }
  function Ht(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(G, G)
            : ((E.status = "pending"),
              E.then(
                function (B) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = B));
                },
                function (B) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = B));
                }
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function z(E, B, J, I, st) {
    var ct = typeof E;
    (ct === "undefined" || ct === "boolean") && (E = null);
    var At = !1;
    if (E === null) At = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          At = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case a:
              At = !0;
              break;
            case x:
              return (At = E._init), z(At(E._payload), B, J, I, st);
          }
      }
    if (At)
      return (
        (st = st(E)),
        (At = I === "" ? "." + kt(E, 0) : I),
        tt(st)
          ? ((J = ""),
            At != null && (J = At.replace(te, "$&/") + "/"),
            z(st, B, J, "", function (Ta) {
              return Ta;
            }))
          : st != null &&
            (pt(st) &&
              (st = $(
                st,
                J +
                  (st.key == null || (E && E.key === st.key)
                    ? ""
                    : ("" + st.key).replace(te, "$&/") + "/") +
                  At
              )),
            B.push(st)),
        1
      );
    At = 0;
    var oe = I === "" ? "." : I + ":";
    if (tt(E))
      for (var Yt = 0; Yt < E.length; Yt++)
        (I = E[Yt]), (ct = oe + kt(I, Yt)), (At += z(I, B, J, ct, st));
    else if (((Yt = M(E)), typeof Yt == "function"))
      for (E = Yt.call(E), Yt = 0; !(I = E.next()).done; )
        (I = I.value), (ct = oe + kt(I, Yt++)), (At += z(I, B, J, ct, st));
    else if (ct === "object") {
      if (typeof E.then == "function") return z(Ht(E), B, J, I, st);
      throw (
        ((B = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return At;
  }
  function Z(E, B, J) {
    if (E == null) return E;
    var I = [],
      st = 0;
    return (
      z(E, I, "", "", function (ct) {
        return B.call(J, ct, st++);
      }),
      I
    );
  }
  function F(E) {
    if (E._status === -1) {
      var B = E._result;
      (B = B()),
        B.then(
          function (J) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = J));
          },
          function (J) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = J));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = B));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ot =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var B = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(B)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    yt = {
      map: Z,
      forEach: function (E, B, J) {
        Z(
          E,
          function () {
            B.apply(this, arguments);
          },
          J
        );
      },
      count: function (E) {
        var B = 0;
        return (
          Z(E, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (E) {
        return (
          Z(E, function (B) {
            return B;
          }) || []
        );
      },
      only: function (E) {
        if (!pt(E))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return E;
      },
    };
  return (
    (lt.Activity = b),
    (lt.Children = yt),
    (lt.Component = L),
    (lt.Fragment = r),
    (lt.Profiler = c),
    (lt.PureComponent = Y),
    (lt.StrictMode = s),
    (lt.Suspense = g),
    (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X),
    (lt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return X.H.useMemoCache(E);
      },
    }),
    (lt.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (lt.cacheSignal = function () {
      return null;
    }),
    (lt.cloneElement = function (E, B, J) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + "."
        );
      var I = U({}, E.props),
        st = E.key;
      if (B != null)
        for (ct in (B.key !== void 0 && (st = "" + B.key), B))
          !K.call(B, ct) ||
            ct === "key" ||
            ct === "__self" ||
            ct === "__source" ||
            (ct === "ref" && B.ref === void 0) ||
            (I[ct] = B[ct]);
      var ct = arguments.length - 2;
      if (ct === 1) I.children = J;
      else if (1 < ct) {
        for (var At = Array(ct), oe = 0; oe < ct; oe++)
          At[oe] = arguments[oe + 2];
        I.children = At;
      }
      return nt(E.type, st, I);
    }),
    (lt.createContext = function (E) {
      return (
        (E = {
          $$typeof: f,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: d, _context: E }),
        E
      );
    }),
    (lt.createElement = function (E, B, J) {
      var I,
        st = {},
        ct = null;
      if (B != null)
        for (I in (B.key !== void 0 && (ct = "" + B.key), B))
          K.call(B, I) &&
            I !== "key" &&
            I !== "__self" &&
            I !== "__source" &&
            (st[I] = B[I]);
      var At = arguments.length - 2;
      if (At === 1) st.children = J;
      else if (1 < At) {
        for (var oe = Array(At), Yt = 0; Yt < At; Yt++)
          oe[Yt] = arguments[Yt + 2];
        st.children = oe;
      }
      if (E && E.defaultProps)
        for (I in ((At = E.defaultProps), At))
          st[I] === void 0 && (st[I] = At[I]);
      return nt(E, ct, st);
    }),
    (lt.createRef = function () {
      return { current: null };
    }),
    (lt.forwardRef = function (E) {
      return { $$typeof: m, render: E };
    }),
    (lt.isValidElement = pt),
    (lt.lazy = function (E) {
      return { $$typeof: x, _payload: { _status: -1, _result: E }, _init: F };
    }),
    (lt.memo = function (E, B) {
      return { $$typeof: y, type: E, compare: B === void 0 ? null : B };
    }),
    (lt.startTransition = function (E) {
      var B = X.T,
        J = {};
      X.T = J;
      try {
        var I = E(),
          st = X.S;
        st !== null && st(J, I),
          typeof I == "object" &&
            I !== null &&
            typeof I.then == "function" &&
            I.then(G, ot);
      } catch (ct) {
        ot(ct);
      } finally {
        B !== null && J.types !== null && (B.types = J.types), (X.T = B);
      }
    }),
    (lt.unstable_useCacheRefresh = function () {
      return X.H.useCacheRefresh();
    }),
    (lt.use = function (E) {
      return X.H.use(E);
    }),
    (lt.useActionState = function (E, B, J) {
      return X.H.useActionState(E, B, J);
    }),
    (lt.useCallback = function (E, B) {
      return X.H.useCallback(E, B);
    }),
    (lt.useContext = function (E) {
      return X.H.useContext(E);
    }),
    (lt.useDebugValue = function () {}),
    (lt.useDeferredValue = function (E, B) {
      return X.H.useDeferredValue(E, B);
    }),
    (lt.useEffect = function (E, B) {
      return X.H.useEffect(E, B);
    }),
    (lt.useEffectEvent = function (E) {
      return X.H.useEffectEvent(E);
    }),
    (lt.useId = function () {
      return X.H.useId();
    }),
    (lt.useImperativeHandle = function (E, B, J) {
      return X.H.useImperativeHandle(E, B, J);
    }),
    (lt.useInsertionEffect = function (E, B) {
      return X.H.useInsertionEffect(E, B);
    }),
    (lt.useLayoutEffect = function (E, B) {
      return X.H.useLayoutEffect(E, B);
    }),
    (lt.useMemo = function (E, B) {
      return X.H.useMemo(E, B);
    }),
    (lt.useOptimistic = function (E, B) {
      return X.H.useOptimistic(E, B);
    }),
    (lt.useReducer = function (E, B, J) {
      return X.H.useReducer(E, B, J);
    }),
    (lt.useRef = function (E) {
      return X.H.useRef(E);
    }),
    (lt.useState = function (E) {
      return X.H.useState(E);
    }),
    (lt.useSyncExternalStore = function (E, B, J) {
      return X.H.useSyncExternalStore(E, B, J);
    }),
    (lt.useTransition = function () {
      return X.H.useTransition();
    }),
    (lt.version = "19.2.6"),
    lt
  );
}
var R0;
function Jc() {
  return R0 || ((R0 = 1), (Pu.exports = _x())), Pu.exports;
}
var k = Jc(),
  Wu = { exports: {} },
  yl = {},
  $u = { exports: {} },
  Iu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z0;
function Ox() {
  return (
    z0 ||
      ((z0 = 1),
      (function (i) {
        function a(z, Z) {
          var F = z.length;
          z.push(Z);
          t: for (; 0 < F; ) {
            var ot = (F - 1) >>> 1,
              yt = z[ot];
            if (0 < c(yt, Z)) (z[ot] = Z), (z[F] = yt), (F = ot);
            else break t;
          }
        }
        function r(z) {
          return z.length === 0 ? null : z[0];
        }
        function s(z) {
          if (z.length === 0) return null;
          var Z = z[0],
            F = z.pop();
          if (F !== Z) {
            z[0] = F;
            t: for (var ot = 0, yt = z.length, E = yt >>> 1; ot < E; ) {
              var B = 2 * (ot + 1) - 1,
                J = z[B],
                I = B + 1,
                st = z[I];
              if (0 > c(J, F))
                I < yt && 0 > c(st, J)
                  ? ((z[ot] = st), (z[I] = F), (ot = I))
                  : ((z[ot] = J), (z[B] = F), (ot = B));
              else if (I < yt && 0 > c(st, F))
                (z[ot] = st), (z[I] = F), (ot = I);
              else break t;
            }
          }
          return Z;
        }
        function c(z, Z) {
          var F = z.sortIndex - Z.sortIndex;
          return F !== 0 ? F : z.id - Z.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            m = f.now();
          i.unstable_now = function () {
            return f.now() - m;
          };
        }
        var g = [],
          y = [],
          x = 1,
          b = null,
          S = 3,
          M = !1,
          D = !1,
          U = !1,
          H = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function Q(z) {
          for (var Z = r(y); Z !== null; ) {
            if (Z.callback === null) s(y);
            else if (Z.startTime <= z)
              s(y), (Z.sortIndex = Z.expirationTime), a(g, Z);
            else break;
            Z = r(y);
          }
        }
        function tt(z) {
          if (((U = !1), Q(z), !D))
            if (r(g) !== null) (D = !0), G || ((G = !0), xt());
            else {
              var Z = r(y);
              Z !== null && Ht(tt, Z.startTime - z);
            }
        }
        var G = !1,
          X = -1,
          K = 5,
          nt = -1;
        function $() {
          return H ? !0 : !(i.unstable_now() - nt < K);
        }
        function pt() {
          if (((H = !1), G)) {
            var z = i.unstable_now();
            nt = z;
            var Z = !0;
            try {
              t: {
                (D = !1), U && ((U = !1), q(X), (X = -1)), (M = !0);
                var F = S;
                try {
                  e: {
                    for (
                      Q(z), b = r(g);
                      b !== null && !(b.expirationTime > z && $());

                    ) {
                      var ot = b.callback;
                      if (typeof ot == "function") {
                        (b.callback = null), (S = b.priorityLevel);
                        var yt = ot(b.expirationTime <= z);
                        if (((z = i.unstable_now()), typeof yt == "function")) {
                          (b.callback = yt), Q(z), (Z = !0);
                          break e;
                        }
                        b === r(g) && s(g), Q(z);
                      } else s(g);
                      b = r(g);
                    }
                    if (b !== null) Z = !0;
                    else {
                      var E = r(y);
                      E !== null && Ht(tt, E.startTime - z), (Z = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (S = F), (M = !1);
                }
                Z = void 0;
              }
            } finally {
              Z ? xt() : (G = !1);
            }
          }
        }
        var xt;
        if (typeof Y == "function")
          xt = function () {
            Y(pt);
          };
        else if (typeof MessageChannel < "u") {
          var te = new MessageChannel(),
            kt = te.port2;
          (te.port1.onmessage = pt),
            (xt = function () {
              kt.postMessage(null);
            });
        } else
          xt = function () {
            L(pt, 0);
          };
        function Ht(z, Z) {
          X = L(function () {
            z(i.unstable_now());
          }, Z);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (i.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (K = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (i.unstable_next = function (z) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = S;
            }
            var F = S;
            S = Z;
            try {
              return z();
            } finally {
              S = F;
            }
          }),
          (i.unstable_requestPaint = function () {
            H = !0;
          }),
          (i.unstable_runWithPriority = function (z, Z) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var F = S;
            S = z;
            try {
              return Z();
            } finally {
              S = F;
            }
          }),
          (i.unstable_scheduleCallback = function (z, Z, F) {
            var ot = i.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? ot + F : ot))
                : (F = ot),
              z)
            ) {
              case 1:
                var yt = -1;
                break;
              case 2:
                yt = 250;
                break;
              case 5:
                yt = 1073741823;
                break;
              case 4:
                yt = 1e4;
                break;
              default:
                yt = 5e3;
            }
            return (
              (yt = F + yt),
              (z = {
                id: x++,
                callback: Z,
                priorityLevel: z,
                startTime: F,
                expirationTime: yt,
                sortIndex: -1,
              }),
              F > ot
                ? ((z.sortIndex = F),
                  a(y, z),
                  r(g) === null &&
                    z === r(y) &&
                    (U ? (q(X), (X = -1)) : (U = !0), Ht(tt, F - ot)))
                : ((z.sortIndex = yt),
                  a(g, z),
                  D || M || ((D = !0), G || ((G = !0), xt()))),
              z
            );
          }),
          (i.unstable_shouldYield = $),
          (i.unstable_wrapCallback = function (z) {
            var Z = S;
            return function () {
              var F = S;
              S = Z;
              try {
                return z.apply(this, arguments);
              } finally {
                S = F;
              }
            };
          });
      })(Iu)),
    Iu
  );
}
var _0;
function Vx() {
  return _0 || ((_0 = 1), ($u.exports = Ox())), $u.exports;
}
var tc = { exports: {} },
  re = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O0;
function Lx() {
  if (O0) return re;
  O0 = 1;
  var i = Jc();
  function a(g) {
    var y = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        y += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var s = {
      d: {
        f: r,
        r: function () {
          throw Error(a(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(g, y, x) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: y,
      implementation: x,
    };
  }
  var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, y) {
    if (g === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (re.createPortal = function (g, y) {
      var x =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(a(299));
      return d(g, y, null, x);
    }),
    (re.flushSync = function (g) {
      var y = f.T,
        x = s.p;
      try {
        if (((f.T = null), (s.p = 2), g)) return g();
      } finally {
        (f.T = y), (s.p = x), s.d.f();
      }
    }),
    (re.preconnect = function (g, y) {
      typeof g == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        s.d.C(g, y));
    }),
    (re.prefetchDNS = function (g) {
      typeof g == "string" && s.d.D(g);
    }),
    (re.preinit = function (g, y) {
      if (typeof g == "string" && y && typeof y.as == "string") {
        var x = y.as,
          b = m(x, y.crossOrigin),
          S = typeof y.integrity == "string" ? y.integrity : void 0,
          M = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        x === "style"
          ? s.d.S(g, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: M,
            })
          : x === "script" &&
            s.d.X(g, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: M,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (re.preinitModule = function (g, y) {
      if (typeof g == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var x = m(y.as, y.crossOrigin);
            s.d.M(g, {
              crossOrigin: x,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && s.d.M(g);
    }),
    (re.preload = function (g, y) {
      if (
        typeof g == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var x = y.as,
          b = m(x, y.crossOrigin);
        s.d.L(g, x, {
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (re.preloadModule = function (g, y) {
      if (typeof g == "string")
        if (y) {
          var x = m(y.as, y.crossOrigin);
          s.d.m(g, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: x,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else s.d.m(g);
    }),
    (re.requestFormReset = function (g) {
      s.d.r(g);
    }),
    (re.unstable_batchedUpdates = function (g, y) {
      return g(y);
    }),
    (re.useFormState = function (g, y, x) {
      return f.H.useFormState(g, y, x);
    }),
    (re.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (re.version = "19.2.6"),
    re
  );
}
var V0;
function Bx() {
  if (V0) return tc.exports;
  V0 = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), (tc.exports = Lx()), tc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var L0;
function Ux() {
  if (L0) return yl;
  L0 = 1;
  var i = Vx(),
    a = Jc(),
    r = Bx();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (d(t) !== t) throw Error(s(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (((l = o.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return g(o), t;
          if (u === l) return g(o), e;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== l.return) (n = o), (l = u);
      else {
        for (var h = !1, v = o.child; v; ) {
          if (v === n) {
            (h = !0), (n = o), (l = u);
            break;
          }
          if (v === l) {
            (h = !0), (l = o), (n = u);
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = u.child; v; ) {
            if (v === n) {
              (h = !0), (n = u), (l = o);
              break;
            }
            if (v === l) {
              (h = !0), (l = u), (n = o);
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? t : e;
  }
  function x(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = x(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    S = Symbol.for("react.element"),
    M = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    q = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    tt = Symbol.for("react.suspense"),
    G = Symbol.for("react.suspense_list"),
    X = Symbol.for("react.memo"),
    K = Symbol.for("react.lazy"),
    nt = Symbol.for("react.activity"),
    $ = Symbol.for("react.memo_cache_sentinel"),
    pt = Symbol.iterator;
  function xt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (pt && t[pt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var te = Symbol.for("react.client.reference");
  function kt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === te ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case U:
        return "Fragment";
      case L:
        return "Profiler";
      case H:
        return "StrictMode";
      case tt:
        return "Suspense";
      case G:
        return "SuspenseList";
      case nt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case D:
          return "Portal";
        case Y:
          return t.displayName || "Context";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case Q:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case X:
          return (
            (e = t.displayName || null), e !== null ? e : kt(t.type) || "Memo"
          );
        case K:
          (e = t._payload), (t = t._init);
          try {
            return kt(t(e));
          } catch {}
      }
    return null;
  }
  var Ht = Array.isArray,
    z = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    ot = [],
    yt = -1;
  function E(t) {
    return { current: t };
  }
  function B(t) {
    0 > yt || ((t.current = ot[yt]), (ot[yt] = null), yt--);
  }
  function J(t, e) {
    yt++, (ot[yt] = t.current), (t.current = e);
  }
  var I = E(null),
    st = E(null),
    ct = E(null),
    At = E(null);
  function oe(t, e) {
    switch ((J(ct, e), J(st, t), J(I, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Wm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Wm(e)), (t = $m(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    B(I), J(I, t);
  }
  function Yt() {
    B(I), B(st), B(ct);
  }
  function Ta(t) {
    t.memoizedState !== null && J(At, t);
    var e = I.current,
      n = $m(e, t.type);
    e !== n && (J(st, t), J(I, n));
  }
  function _l(t) {
    st.current === t && (B(I), B(st)),
      At.current === t && (B(At), (fl._currentValue = F));
  }
  var Dr, Nf;
  function ti(t) {
    if (Dr === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Dr = (e && e[1]) || ""),
          (Nf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Dr +
      t +
      Nf
    );
  }
  var Rr = !1;
  function zr(t, e) {
    if (!t || Rr) return "";
    Rr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var V = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(V.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(V, []);
                } catch (R) {
                  var C = R;
                }
                Reflect.construct(t, [], V);
              } else {
                try {
                  V.call();
                } catch (R) {
                  C = R;
                }
                t.call(V.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                C = R;
              }
              (V = t()) &&
                typeof V.catch == "function" &&
                V.catch(function () {});
            }
          } catch (R) {
            if (R && C && typeof R.stack == "string") return [R.stack, C.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      o &&
        o.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = l.DetermineComponentFrameRoot(),
        h = u[0],
        v = u[1];
      if (h && v) {
        var T = h.split(`
`),
          j = v.split(`
`);
        for (
          o = l = 0;
          l < T.length && !T[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; o < j.length && !j[o].includes("DetermineComponentFrameRoot"); )
          o++;
        if (l === T.length || o === j.length)
          for (
            l = T.length - 1, o = j.length - 1;
            1 <= l && 0 <= o && T[l] !== j[o];

          )
            o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (T[l] !== j[o]) {
            if (l !== 1 || o !== 1)
              do
                if ((l--, o--, 0 > o || T[l] !== j[o])) {
                  var _ =
                    `
` + T[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      _.includes("<anonymous>") &&
                      (_ = _.replace("<anonymous>", t.displayName)),
                    _
                  );
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      (Rr = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? ti(n) : "";
  }
  function ov(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ti(t.type);
      case 16:
        return ti("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? ti("Suspense Fallback")
          : ti("Suspense");
      case 19:
        return ti("SuspenseList");
      case 0:
      case 15:
        return zr(t.type, !1);
      case 11:
        return zr(t.type.render, !1);
      case 1:
        return zr(t.type, !0);
      case 31:
        return ti("Activity");
      default:
        return "";
    }
  }
  function jf(t) {
    try {
      var e = "",
        n = null;
      do (e += ov(t, n)), (n = t), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var _r = Object.prototype.hasOwnProperty,
    Or = i.unstable_scheduleCallback,
    Vr = i.unstable_cancelCallback,
    uv = i.unstable_shouldYield,
    cv = i.unstable_requestPaint,
    be = i.unstable_now,
    fv = i.unstable_getCurrentPriorityLevel,
    Cf = i.unstable_ImmediatePriority,
    Df = i.unstable_UserBlockingPriority,
    Ol = i.unstable_NormalPriority,
    dv = i.unstable_LowPriority,
    Rf = i.unstable_IdlePriority,
    hv = i.log,
    mv = i.unstable_setDisableYieldValue,
    Aa = null,
    Se = null;
  function En(t) {
    if (
      (typeof hv == "function" && mv(t),
      Se && typeof Se.setStrictMode == "function")
    )
      try {
        Se.setStrictMode(Aa, t);
      } catch {}
  }
  var Te = Math.clz32 ? Math.clz32 : gv,
    pv = Math.log,
    yv = Math.LN2;
  function gv(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((pv(t) / yv) | 0)) | 0;
  }
  var Vl = 256,
    Ll = 262144,
    Bl = 4194304;
  function ei(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ul(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var o = 0,
      u = t.suspendedLanes,
      h = t.pingedLanes;
    t = t.warmLanes;
    var v = l & 134217727;
    return (
      v !== 0
        ? ((l = v & ~u),
          l !== 0
            ? (o = ei(l))
            : ((h &= v),
              h !== 0
                ? (o = ei(h))
                : n || ((n = v & ~t), n !== 0 && (o = ei(n)))))
        : ((v = l & ~u),
          v !== 0
            ? (o = ei(v))
            : h !== 0
            ? (o = ei(h))
            : n || ((n = l & ~t), n !== 0 && (o = ei(n)))),
      o === 0
        ? 0
        : e !== 0 &&
          e !== o &&
          (e & u) === 0 &&
          ((u = o & -o),
          (n = e & -e),
          u >= n || (u === 32 && (n & 4194048) !== 0))
        ? e
        : o
    );
  }
  function Ea(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function vv(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zf() {
    var t = Bl;
    return (Bl <<= 1), (Bl & 62914560) === 0 && (Bl = 4194304), t;
  }
  function Lr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function wa(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function xv(t, e, n, l, o, u) {
    var h = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var v = t.entanglements,
      T = t.expirationTimes,
      j = t.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var _ = 31 - Te(n),
        V = 1 << _;
      (v[_] = 0), (T[_] = -1);
      var C = j[_];
      if (C !== null)
        for (j[_] = null, _ = 0; _ < C.length; _++) {
          var R = C[_];
          R !== null && (R.lane &= -536870913);
        }
      n &= ~V;
    }
    l !== 0 && _f(t, l, 0),
      u !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(h & ~e));
  }
  function _f(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var l = 31 - Te(e);
    (t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 261930));
  }
  function Of(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - Te(n),
        o = 1 << l;
      (o & e) | (t[l] & e) && (t[l] |= e), (n &= ~o);
    }
  }
  function Vf(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : Br(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function Br(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ur(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Lf() {
    var t = Z.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : S0(t.type));
  }
  function Bf(t, e) {
    var n = Z.p;
    try {
      return (Z.p = t), e();
    } finally {
      Z.p = n;
    }
  }
  var wn = Math.random().toString(36).slice(2),
    ee = "__reactFiber$" + wn,
    de = "__reactProps$" + wn,
    wi = "__reactContainer$" + wn,
    Hr = "__reactEvents$" + wn,
    bv = "__reactListeners$" + wn,
    Sv = "__reactHandles$" + wn,
    Uf = "__reactResources$" + wn,
    Ma = "__reactMarker$" + wn;
  function Yr(t) {
    delete t[ee], delete t[de], delete t[Hr], delete t[bv], delete t[Sv];
  }
  function Mi(t) {
    var e = t[ee];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[wi] || n[ee])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = l0(t); t !== null; ) {
            if ((n = t[ee])) return n;
            t = l0(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Ni(t) {
    if ((t = t[ee] || t[wi])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Na(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function ji(t) {
    var e = t[Uf];
    return (
      e ||
        (e = t[Uf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Wt(t) {
    t[Ma] = !0;
  }
  var Hf = new Set(),
    Yf = {};
  function ni(t, e) {
    Ci(t, e), Ci(t + "Capture", e);
  }
  function Ci(t, e) {
    for (Yf[t] = e, t = 0; t < e.length; t++) Hf.add(e[t]);
  }
  var Tv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    qf = {},
    Gf = {};
  function Av(t) {
    return _r.call(Gf, t)
      ? !0
      : _r.call(qf, t)
      ? !1
      : Tv.test(t)
      ? (Gf[t] = !0)
      : ((qf[t] = !0), !1);
  }
  function Hl(t, e, n) {
    if (Av(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Yl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function ln(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function Re(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function kf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Ev(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var o = l.get,
        u = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (h) {
            (n = "" + h), u.call(this, h);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (h) {
            n = "" + h;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function qr(t) {
    if (!t._valueTracker) {
      var e = kf(t) ? "checked" : "value";
      t._valueTracker = Ev(t, e, "" + t[e]);
    }
  }
  function Xf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = "";
    return (
      t && (l = kf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function ql(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var wv = /[\n"\\]/g;
  function ze(t) {
    return t.replace(wv, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Gr(t, e, n, l, o, u, h, v) {
    (t.name = ""),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (t.type = h)
        : t.removeAttribute("type"),
      e != null
        ? h === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Re(e))
          : t.value !== "" + Re(e) && (t.value = "" + Re(e))
        : (h !== "submit" && h !== "reset") || t.removeAttribute("value"),
      e != null
        ? kr(t, h, Re(e))
        : n != null
        ? kr(t, h, Re(n))
        : l != null && t.removeAttribute("value"),
      o == null && u != null && (t.defaultChecked = !!u),
      o != null &&
        (t.checked = o && typeof o != "function" && typeof o != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + Re(v))
        : t.removeAttribute("name");
  }
  function Qf(t, e, n, l, o, u, h, v) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || n != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        qr(t);
        return;
      }
      (n = n != null ? "" + Re(n) : ""),
        (e = e != null ? "" + Re(e) : n),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (l = l ?? o),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = v ? t.checked : !!l),
      (t.defaultChecked = !!l),
      h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.name = h),
      qr(t);
  }
  function kr(t, e, n) {
    (e === "number" && ql(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Di(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var o = 0; o < n.length; o++) e["$" + n[o]] = !0;
      for (n = 0; n < t.length; n++)
        (o = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== o && (t[n].selected = o),
          o && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Re(n), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === n) {
          (t[o].selected = !0), l && (t[o].defaultSelected = !0);
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Kf(t, e, n) {
    if (
      e != null &&
      ((e = "" + Re(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Re(n) : "";
  }
  function Zf(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (Ht(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Re(e)),
      (t.defaultValue = n),
      (l = t.textContent),
      l === n && l !== "" && l !== null && (t.value = l),
      qr(t);
  }
  function Ri(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Mv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Jf(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : l
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || Mv.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Ff(t, e, n) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
            ? (t.cssFloat = "")
            : (t[l] = ""));
      for (var o in e)
        (l = e[o]), e.hasOwnProperty(o) && n[o] !== l && Jf(t, o, l);
    } else for (var u in e) e.hasOwnProperty(u) && Jf(t, u, e[u]);
  }
  function Xr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Nv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    jv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gl(t) {
    return jv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function sn() {}
  var Qr = null;
  function Kr(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var zi = null,
    _i = null;
  function Pf(t) {
    var e = Ni(t);
    if (e && (t = e.stateNode)) {
      var n = t[de] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Gr(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + ze("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var o = l[de] || null;
                if (!o) throw Error(s(90));
                Gr(
                  l,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (l = n[e]), l.form === t.form && Xf(l);
          }
          break t;
        case "textarea":
          Kf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Di(t, !!n.multiple, e, !1);
      }
    }
  }
  var Zr = !1;
  function Wf(t, e, n) {
    if (Zr) return t(e, n);
    Zr = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((Zr = !1),
        (zi !== null || _i !== null) &&
          (Cs(), zi && ((e = zi), (t = _i), (_i = zi = null), Pf(e), t)))
      )
        for (e = 0; e < t.length; e++) Pf(t[e]);
    }
  }
  function ja(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[de] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
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
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(s(231, e, typeof n));
    return n;
  }
  var rn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Jr = !1;
  if (rn)
    try {
      var Ca = {};
      Object.defineProperty(Ca, "passive", {
        get: function () {
          Jr = !0;
        },
      }),
        window.addEventListener("test", Ca, Ca),
        window.removeEventListener("test", Ca, Ca);
    } catch {
      Jr = !1;
    }
  var Mn = null,
    Fr = null,
    kl = null;
  function $f() {
    if (kl) return kl;
    var t,
      e = Fr,
      n = e.length,
      l,
      o = "value" in Mn ? Mn.value : Mn.textContent,
      u = o.length;
    for (t = 0; t < n && e[t] === o[t]; t++);
    var h = n - t;
    for (l = 1; l <= h && e[n - l] === o[u - l]; l++);
    return (kl = o.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Xl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ql() {
    return !0;
  }
  function If() {
    return !1;
  }
  function he(t) {
    function e(n, l, o, u, h) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = h),
        (this.currentTarget = null);
      for (var v in t)
        t.hasOwnProperty(v) && ((n = t[v]), (this[v] = n ? n(u) : u[v]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ql
          : If),
        (this.isPropagationStopped = If),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ql));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ql));
        },
        persist: function () {},
        isPersistent: Ql,
      }),
      e
    );
  }
  var ii = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Kl = he(ii),
    Da = b({}, ii, { view: 0, detail: 0 }),
    Cv = he(Da),
    Pr,
    Wr,
    Ra,
    Zl = b({}, Da, {
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
      getModifierState: Ir,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ra &&
              (Ra && t.type === "mousemove"
                ? ((Pr = t.screenX - Ra.screenX), (Wr = t.screenY - Ra.screenY))
                : (Wr = Pr = 0),
              (Ra = t)),
            Pr);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Wr;
      },
    }),
    td = he(Zl),
    Dv = b({}, Zl, { dataTransfer: 0 }),
    Rv = he(Dv),
    zv = b({}, Da, { relatedTarget: 0 }),
    $r = he(zv),
    _v = b({}, ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ov = he(_v),
    Vv = b({}, ii, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Lv = he(Vv),
    Bv = b({}, ii, { data: 0 }),
    ed = he(Bv),
    Uv = {
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
    Hv = {
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
    Yv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function qv(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Yv[t])
      ? !!e[t]
      : !1;
  }
  function Ir() {
    return qv;
  }
  var Gv = b({}, Da, {
      key: function (t) {
        if (t.key) {
          var e = Uv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Xl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Hv[t.keyCode] || "Unidentified"
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
      getModifierState: Ir,
      charCode: function (t) {
        return t.type === "keypress" ? Xl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Xl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    kv = he(Gv),
    Xv = b({}, Zl, {
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
    nd = he(Xv),
    Qv = b({}, Da, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ir,
    }),
    Kv = he(Qv),
    Zv = b({}, ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jv = he(Zv),
    Fv = b({}, Zl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Pv = he(Fv),
    Wv = b({}, ii, { newState: 0, oldState: 0 }),
    $v = he(Wv),
    Iv = [9, 13, 27, 32],
    to = rn && "CompositionEvent" in window,
    za = null;
  rn && "documentMode" in document && (za = document.documentMode);
  var t1 = rn && "TextEvent" in window && !za,
    id = rn && (!to || (za && 8 < za && 11 >= za)),
    ad = " ",
    ld = !1;
  function sd(t, e) {
    switch (t) {
      case "keyup":
        return Iv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rd(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Oi = !1;
  function e1(t, e) {
    switch (t) {
      case "compositionend":
        return rd(e);
      case "keypress":
        return e.which !== 32 ? null : ((ld = !0), ad);
      case "textInput":
        return (t = e.data), t === ad && ld ? null : t;
      default:
        return null;
    }
  }
  function n1(t, e) {
    if (Oi)
      return t === "compositionend" || (!to && sd(t, e))
        ? ((t = $f()), (kl = Fr = Mn = null), (Oi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return id && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var i1 = {
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
  function od(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!i1[t.type] : e === "textarea";
  }
  function ud(t, e, n, l) {
    zi ? (_i ? _i.push(l) : (_i = [l])) : (zi = l),
      (e = Ls(e, "onChange")),
      0 < e.length &&
        ((n = new Kl("onChange", "change", null, n, l)),
        t.push({ event: n, listeners: e }));
  }
  var _a = null,
    Oa = null;
  function a1(t) {
    Qm(t, 0);
  }
  function Jl(t) {
    var e = Na(t);
    if (Xf(e)) return t;
  }
  function cd(t, e) {
    if (t === "change") return e;
  }
  var fd = !1;
  if (rn) {
    var eo;
    if (rn) {
      var no = "oninput" in document;
      if (!no) {
        var dd = document.createElement("div");
        dd.setAttribute("oninput", "return;"),
          (no = typeof dd.oninput == "function");
      }
      eo = no;
    } else eo = !1;
    fd = eo && (!document.documentMode || 9 < document.documentMode);
  }
  function hd() {
    _a && (_a.detachEvent("onpropertychange", md), (Oa = _a = null));
  }
  function md(t) {
    if (t.propertyName === "value" && Jl(Oa)) {
      var e = [];
      ud(e, Oa, t, Kr(t)), Wf(a1, e);
    }
  }
  function l1(t, e, n) {
    t === "focusin"
      ? (hd(), (_a = e), (Oa = n), _a.attachEvent("onpropertychange", md))
      : t === "focusout" && hd();
  }
  function s1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Jl(Oa);
  }
  function r1(t, e) {
    if (t === "click") return Jl(e);
  }
  function o1(t, e) {
    if (t === "input" || t === "change") return Jl(e);
  }
  function u1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ae = typeof Object.is == "function" ? Object.is : u1;
  function Va(t, e) {
    if (Ae(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var o = n[l];
      if (!_r.call(e, o) || !Ae(t[o], e[o])) return !1;
    }
    return !0;
  }
  function pd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function yd(t, e) {
    var n = pd(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e))
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = pd(n);
    }
  }
  function gd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? gd(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function vd(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = ql(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = ql(t.document);
    }
    return e;
  }
  function io(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var c1 = rn && "documentMode" in document && 11 >= document.documentMode,
    Vi = null,
    ao = null,
    La = null,
    lo = !1;
  function xd(t, e, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    lo ||
      Vi == null ||
      Vi !== ql(l) ||
      ((l = Vi),
      "selectionStart" in l && io(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (La && Va(La, l)) ||
        ((La = l),
        (l = Ls(ao, "onSelect")),
        0 < l.length &&
          ((e = new Kl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: l }),
          (e.target = Vi))));
  }
  function ai(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Li = {
      animationend: ai("Animation", "AnimationEnd"),
      animationiteration: ai("Animation", "AnimationIteration"),
      animationstart: ai("Animation", "AnimationStart"),
      transitionrun: ai("Transition", "TransitionRun"),
      transitionstart: ai("Transition", "TransitionStart"),
      transitioncancel: ai("Transition", "TransitionCancel"),
      transitionend: ai("Transition", "TransitionEnd"),
    },
    so = {},
    bd = {};
  rn &&
    ((bd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Li.animationend.animation,
      delete Li.animationiteration.animation,
      delete Li.animationstart.animation),
    "TransitionEvent" in window || delete Li.transitionend.transition);
  function li(t) {
    if (so[t]) return so[t];
    if (!Li[t]) return t;
    var e = Li[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in bd) return (so[t] = e[n]);
    return t;
  }
  var Sd = li("animationend"),
    Td = li("animationiteration"),
    Ad = li("animationstart"),
    f1 = li("transitionrun"),
    d1 = li("transitionstart"),
    h1 = li("transitioncancel"),
    Ed = li("transitionend"),
    wd = new Map(),
    ro =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  ro.push("scrollEnd");
  function ke(t, e) {
    wd.set(t, e), ni(e, [t]);
  }
  var Fl =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    _e = [],
    Bi = 0,
    oo = 0;
  function Pl() {
    for (var t = Bi, e = (oo = Bi = 0); e < t; ) {
      var n = _e[e];
      _e[e++] = null;
      var l = _e[e];
      _e[e++] = null;
      var o = _e[e];
      _e[e++] = null;
      var u = _e[e];
      if (((_e[e++] = null), l !== null && o !== null)) {
        var h = l.pending;
        h === null ? (o.next = o) : ((o.next = h.next), (h.next = o)),
          (l.pending = o);
      }
      u !== 0 && Md(n, o, u);
    }
  }
  function Wl(t, e, n, l) {
    (_e[Bi++] = t),
      (_e[Bi++] = e),
      (_e[Bi++] = n),
      (_e[Bi++] = l),
      (oo |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l);
  }
  function uo(t, e, n, l) {
    return Wl(t, e, n, l), $l(t);
  }
  function si(t, e) {
    return Wl(t, null, null, e), $l(t);
  }
  function Md(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var o = !1, u = t.return; u !== null; )
      (u.childLanes |= n),
        (l = u.alternate),
        l !== null && (l.childLanes |= n),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (o = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        o &&
          e !== null &&
          ((o = 31 - Te(n)),
          (t = u.hiddenUpdates),
          (l = t[o]),
          l === null ? (t[o] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        u)
      : null;
  }
  function $l(t) {
    if (50 < al) throw ((al = 0), (xu = null), Error(s(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ui = {};
  function m1(t, e, n, l) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ee(t, e, n, l) {
    return new m1(t, e, n, l);
  }
  function co(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function on(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ee(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Nd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Il(t, e, n, l, o, u) {
    var h = 0;
    if (((l = t), typeof t == "function")) co(t) && (h = 1);
    else if (typeof t == "string")
      h = xx(t, n, I.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case nt:
          return (t = Ee(31, n, e, o)), (t.elementType = nt), (t.lanes = u), t;
        case U:
          return ri(n.children, o, u, e);
        case H:
          (h = 8), (o |= 24);
          break;
        case L:
          return (
            (t = Ee(12, n, e, o | 2)), (t.elementType = L), (t.lanes = u), t
          );
        case tt:
          return (t = Ee(13, n, e, o)), (t.elementType = tt), (t.lanes = u), t;
        case G:
          return (t = Ee(19, n, e, o)), (t.elementType = G), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Y:
                h = 10;
                break t;
              case q:
                h = 9;
                break t;
              case Q:
                h = 11;
                break t;
              case X:
                h = 14;
                break t;
              case K:
                (h = 16), (l = null);
                break t;
            }
          (h = 29),
            (n = Error(s(130, t === null ? "null" : typeof t, ""))),
            (l = null);
      }
    return (
      (e = Ee(h, n, e, o)), (e.elementType = t), (e.type = l), (e.lanes = u), e
    );
  }
  function ri(t, e, n, l) {
    return (t = Ee(7, t, l, e)), (t.lanes = n), t;
  }
  function fo(t, e, n) {
    return (t = Ee(6, t, null, e)), (t.lanes = n), t;
  }
  function jd(t) {
    var e = Ee(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function ho(t, e, n) {
    return (
      (e = Ee(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Cd = new WeakMap();
  function Oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Cd.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: jf(e) }), Cd.set(t, e), e);
    }
    return { value: t, source: e, stack: jf(e) };
  }
  var Hi = [],
    Yi = 0,
    ts = null,
    Ba = 0,
    Ve = [],
    Le = 0,
    Nn = null,
    We = 1,
    $e = "";
  function un(t, e) {
    (Hi[Yi++] = Ba), (Hi[Yi++] = ts), (ts = t), (Ba = e);
  }
  function Dd(t, e, n) {
    (Ve[Le++] = We), (Ve[Le++] = $e), (Ve[Le++] = Nn), (Nn = t);
    var l = We;
    t = $e;
    var o = 32 - Te(l) - 1;
    (l &= ~(1 << o)), (n += 1);
    var u = 32 - Te(e) + o;
    if (30 < u) {
      var h = o - (o % 5);
      (u = (l & ((1 << h) - 1)).toString(32)),
        (l >>= h),
        (o -= h),
        (We = (1 << (32 - Te(e) + o)) | (n << o) | l),
        ($e = u + t);
    } else (We = (1 << u) | (n << o) | l), ($e = t);
  }
  function mo(t) {
    t.return !== null && (un(t, 1), Dd(t, 1, 0));
  }
  function po(t) {
    for (; t === ts; )
      (ts = Hi[--Yi]), (Hi[Yi] = null), (Ba = Hi[--Yi]), (Hi[Yi] = null);
    for (; t === Nn; )
      (Nn = Ve[--Le]),
        (Ve[Le] = null),
        ($e = Ve[--Le]),
        (Ve[Le] = null),
        (We = Ve[--Le]),
        (Ve[Le] = null);
  }
  function Rd(t, e) {
    (Ve[Le++] = We),
      (Ve[Le++] = $e),
      (Ve[Le++] = Nn),
      (We = e.id),
      ($e = e.overflow),
      (Nn = t);
  }
  var ne = null,
    zt = null,
    gt = !1,
    jn = null,
    Be = !1,
    yo = Error(s(519));
  function Cn(t) {
    var e = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Ua(Oe(e, t)), yo);
  }
  function zd(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[ee] = t), (e[de] = l), n)) {
      case "dialog":
        dt("cancel", e), dt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < sl.length; n++) dt(sl[n], e);
        break;
      case "source":
        dt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        dt("error", e), dt("load", e);
        break;
      case "details":
        dt("toggle", e);
        break;
      case "input":
        dt("invalid", e),
          Qf(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          );
        break;
      case "select":
        dt("invalid", e);
        break;
      case "textarea":
        dt("invalid", e), Zf(e, l.value, l.defaultValue, l.children);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Fm(e.textContent, n)
        ? (l.popover != null && (dt("beforetoggle", e), dt("toggle", e)),
          l.onScroll != null && dt("scroll", e),
          l.onScrollEnd != null && dt("scrollend", e),
          l.onClick != null && (e.onclick = sn),
          (e = !0))
        : (e = !1),
      e || Cn(t, !0);
  }
  function _d(t) {
    for (ne = t.return; ne; )
      switch (ne.tag) {
        case 5:
        case 31:
        case 13:
          Be = !1;
          return;
        case 27:
        case 3:
          Be = !0;
          return;
        default:
          ne = ne.return;
      }
  }
  function qi(t) {
    if (t !== ne) return !1;
    if (!gt) return _d(t), (gt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Ou(t.type, t.memoizedProps))),
        (n = !n)),
      n && zt && Cn(t),
      _d(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      zt = a0(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      zt = a0(t);
    } else
      e === 27
        ? ((e = zt), kn(t.type) ? ((t = Hu), (Hu = null), (zt = t)) : (zt = e))
        : (zt = ne ? He(t.stateNode.nextSibling) : null);
    return !0;
  }
  function oi() {
    (zt = ne = null), (gt = !1);
  }
  function go() {
    var t = jn;
    return (
      t !== null &&
        (ge === null ? (ge = t) : ge.push.apply(ge, t), (jn = null)),
      t
    );
  }
  function Ua(t) {
    jn === null ? (jn = [t]) : jn.push(t);
  }
  var vo = E(null),
    ui = null,
    cn = null;
  function Dn(t, e, n) {
    J(vo, e._currentValue), (e._currentValue = n);
  }
  function fn(t) {
    (t._currentValue = vo.current), B(vo);
  }
  function xo(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function bo(t, e, n, l) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var u = o.dependencies;
      if (u !== null) {
        var h = o.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var v = u;
          u = o;
          for (var T = 0; T < e.length; T++)
            if (v.context === e[T]) {
              (u.lanes |= n),
                (v = u.alternate),
                v !== null && (v.lanes |= n),
                xo(u.return, n, t),
                l || (h = null);
              break t;
            }
          u = v.next;
        }
      } else if (o.tag === 18) {
        if (((h = o.return), h === null)) throw Error(s(341));
        (h.lanes |= n),
          (u = h.alternate),
          u !== null && (u.lanes |= n),
          xo(h, n, t),
          (h = null);
      } else h = o.child;
      if (h !== null) h.return = o;
      else
        for (h = o; h !== null; ) {
          if (h === t) {
            h = null;
            break;
          }
          if (((o = h.sibling), o !== null)) {
            (o.return = h.return), (h = o);
            break;
          }
          h = h.return;
        }
      o = h;
    }
  }
  function Gi(t, e, n, l) {
    t = null;
    for (var o = e, u = !1; o !== null; ) {
      if (!u) {
        if ((o.flags & 524288) !== 0) u = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var h = o.alternate;
        if (h === null) throw Error(s(387));
        if (((h = h.memoizedProps), h !== null)) {
          var v = o.type;
          Ae(o.pendingProps.value, h.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (o === At.current) {
        if (((h = o.alternate), h === null)) throw Error(s(387));
        h.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
          (t !== null ? t.push(fl) : (t = [fl]));
      }
      o = o.return;
    }
    t !== null && bo(e, t, n, l), (e.flags |= 262144);
  }
  function es(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ae(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ci(t) {
    (ui = t),
      (cn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function ie(t) {
    return Od(ui, t);
  }
  function ns(t, e) {
    return ui === null && ci(t), Od(t, e);
  }
  function Od(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), cn === null)) {
      if (t === null) throw Error(s(308));
      (cn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else cn = cn.next = e;
    return n;
  }
  var p1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    y1 = i.unstable_scheduleCallback,
    g1 = i.unstable_NormalPriority,
    Xt = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function So() {
    return { controller: new p1(), data: new Map(), refCount: 0 };
  }
  function Ha(t) {
    t.refCount--,
      t.refCount === 0 &&
        y1(g1, function () {
          t.controller.abort();
        });
  }
  var Ya = null,
    To = 0,
    ki = 0,
    Xi = null;
  function v1(t, e) {
    if (Ya === null) {
      var n = (Ya = []);
      (To = 0),
        (ki = wu()),
        (Xi = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return To++, e.then(Vd, Vd), e;
  }
  function Vd() {
    if (--To === 0 && Ya !== null) {
      Xi !== null && (Xi.status = "fulfilled");
      var t = Ya;
      (Ya = null), (ki = 0), (Xi = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function x1(t, e) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          n.push(o);
        },
      };
    return (
      t.then(
        function () {
          (l.status = "fulfilled"), (l.value = e);
          for (var o = 0; o < n.length; o++) (0, n[o])(e);
        },
        function (o) {
          for (l.status = "rejected", l.reason = o, o = 0; o < n.length; o++)
            (0, n[o])(void 0);
        }
      ),
      l
    );
  }
  var Ld = z.S;
  z.S = function (t, e) {
    (xm = be()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        v1(t, e),
      Ld !== null && Ld(t, e);
  };
  var fi = E(null);
  function Ao() {
    var t = fi.current;
    return t !== null ? t : Dt.pooledCache;
  }
  function is(t, e) {
    e === null ? J(fi, fi.current) : J(fi, e.pool);
  }
  function Bd() {
    var t = Ao();
    return t === null ? null : { parent: Xt._currentValue, pool: t };
  }
  var Qi = Error(s(460)),
    Eo = Error(s(474)),
    as = Error(s(542)),
    ls = { then: function () {} };
  function Ud(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Hd(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(sn, sn), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), qd(t), t);
      default:
        if (typeof e.status == "string") e.then(sn, sn);
        else {
          if (((t = Dt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var o = e;
                  (o.status = "fulfilled"), (o.value = l);
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var o = e;
                  (o.status = "rejected"), (o.reason = l);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), qd(t), t);
        }
        throw ((hi = e), Qi);
    }
  }
  function di(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((hi = n), Qi)
        : n;
    }
  }
  var hi = null;
  function Yd() {
    if (hi === null) throw Error(s(459));
    var t = hi;
    return (hi = null), t;
  }
  function qd(t) {
    if (t === Qi || t === as) throw Error(s(483));
  }
  var Ki = null,
    qa = 0;
  function ss(t) {
    var e = qa;
    return (qa += 1), Ki === null && (Ki = []), Hd(Ki, t, e);
  }
  function Ga(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function rs(t, e) {
    throw e.$$typeof === S
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          s(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Gd(t) {
    function e(w, A) {
      if (t) {
        var N = w.deletions;
        N === null ? ((w.deletions = [A]), (w.flags |= 16)) : N.push(A);
      }
    }
    function n(w, A) {
      if (!t) return null;
      for (; A !== null; ) e(w, A), (A = A.sibling);
      return null;
    }
    function l(w) {
      for (var A = new Map(); w !== null; )
        w.key !== null ? A.set(w.key, w) : A.set(w.index, w), (w = w.sibling);
      return A;
    }
    function o(w, A) {
      return (w = on(w, A)), (w.index = 0), (w.sibling = null), w;
    }
    function u(w, A, N) {
      return (
        (w.index = N),
        t
          ? ((N = w.alternate),
            N !== null
              ? ((N = N.index), N < A ? ((w.flags |= 67108866), A) : N)
              : ((w.flags |= 67108866), A))
          : ((w.flags |= 1048576), A)
      );
    }
    function h(w) {
      return t && w.alternate === null && (w.flags |= 67108866), w;
    }
    function v(w, A, N, O) {
      return A === null || A.tag !== 6
        ? ((A = fo(N, w.mode, O)), (A.return = w), A)
        : ((A = o(A, N)), (A.return = w), A);
    }
    function T(w, A, N, O) {
      var it = N.type;
      return it === U
        ? _(w, A, N.props.children, O, N.key)
        : A !== null &&
          (A.elementType === it ||
            (typeof it == "object" &&
              it !== null &&
              it.$$typeof === K &&
              di(it) === A.type))
        ? ((A = o(A, N.props)), Ga(A, N), (A.return = w), A)
        : ((A = Il(N.type, N.key, N.props, null, w.mode, O)),
          Ga(A, N),
          (A.return = w),
          A);
    }
    function j(w, A, N, O) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== N.containerInfo ||
        A.stateNode.implementation !== N.implementation
        ? ((A = ho(N, w.mode, O)), (A.return = w), A)
        : ((A = o(A, N.children || [])), (A.return = w), A);
    }
    function _(w, A, N, O, it) {
      return A === null || A.tag !== 7
        ? ((A = ri(N, w.mode, O, it)), (A.return = w), A)
        : ((A = o(A, N)), (A.return = w), A);
    }
    function V(w, A, N) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = fo("" + A, w.mode, N)), (A.return = w), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case M:
            return (
              (N = Il(A.type, A.key, A.props, null, w.mode, N)),
              Ga(N, A),
              (N.return = w),
              N
            );
          case D:
            return (A = ho(A, w.mode, N)), (A.return = w), A;
          case K:
            return (A = di(A)), V(w, A, N);
        }
        if (Ht(A) || xt(A))
          return (A = ri(A, w.mode, N, null)), (A.return = w), A;
        if (typeof A.then == "function") return V(w, ss(A), N);
        if (A.$$typeof === Y) return V(w, ns(w, A), N);
        rs(w, A);
      }
      return null;
    }
    function C(w, A, N, O) {
      var it = A !== null ? A.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return it !== null ? null : v(w, A, "" + N, O);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case M:
            return N.key === it ? T(w, A, N, O) : null;
          case D:
            return N.key === it ? j(w, A, N, O) : null;
          case K:
            return (N = di(N)), C(w, A, N, O);
        }
        if (Ht(N) || xt(N)) return it !== null ? null : _(w, A, N, O, null);
        if (typeof N.then == "function") return C(w, A, ss(N), O);
        if (N.$$typeof === Y) return C(w, A, ns(w, N), O);
        rs(w, N);
      }
      return null;
    }
    function R(w, A, N, O, it) {
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return (w = w.get(N) || null), v(A, w, "" + O, it);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case M:
            return (
              (w = w.get(O.key === null ? N : O.key) || null), T(A, w, O, it)
            );
          case D:
            return (
              (w = w.get(O.key === null ? N : O.key) || null), j(A, w, O, it)
            );
          case K:
            return (O = di(O)), R(w, A, N, O, it);
        }
        if (Ht(O) || xt(O)) return (w = w.get(N) || null), _(A, w, O, it, null);
        if (typeof O.then == "function") return R(w, A, N, ss(O), it);
        if (O.$$typeof === Y) return R(w, A, N, ns(A, O), it);
        rs(A, O);
      }
      return null;
    }
    function P(w, A, N, O) {
      for (
        var it = null, bt = null, et = A, ut = (A = 0), mt = null;
        et !== null && ut < N.length;
        ut++
      ) {
        et.index > ut ? ((mt = et), (et = null)) : (mt = et.sibling);
        var St = C(w, et, N[ut], O);
        if (St === null) {
          et === null && (et = mt);
          break;
        }
        t && et && St.alternate === null && e(w, et),
          (A = u(St, A, ut)),
          bt === null ? (it = St) : (bt.sibling = St),
          (bt = St),
          (et = mt);
      }
      if (ut === N.length) return n(w, et), gt && un(w, ut), it;
      if (et === null) {
        for (; ut < N.length; ut++)
          (et = V(w, N[ut], O)),
            et !== null &&
              ((A = u(et, A, ut)),
              bt === null ? (it = et) : (bt.sibling = et),
              (bt = et));
        return gt && un(w, ut), it;
      }
      for (et = l(et); ut < N.length; ut++)
        (mt = R(et, w, ut, N[ut], O)),
          mt !== null &&
            (t &&
              mt.alternate !== null &&
              et.delete(mt.key === null ? ut : mt.key),
            (A = u(mt, A, ut)),
            bt === null ? (it = mt) : (bt.sibling = mt),
            (bt = mt));
      return (
        t &&
          et.forEach(function (Jn) {
            return e(w, Jn);
          }),
        gt && un(w, ut),
        it
      );
    }
    function at(w, A, N, O) {
      if (N == null) throw Error(s(151));
      for (
        var it = null,
          bt = null,
          et = A,
          ut = (A = 0),
          mt = null,
          St = N.next();
        et !== null && !St.done;
        ut++, St = N.next()
      ) {
        et.index > ut ? ((mt = et), (et = null)) : (mt = et.sibling);
        var Jn = C(w, et, St.value, O);
        if (Jn === null) {
          et === null && (et = mt);
          break;
        }
        t && et && Jn.alternate === null && e(w, et),
          (A = u(Jn, A, ut)),
          bt === null ? (it = Jn) : (bt.sibling = Jn),
          (bt = Jn),
          (et = mt);
      }
      if (St.done) return n(w, et), gt && un(w, ut), it;
      if (et === null) {
        for (; !St.done; ut++, St = N.next())
          (St = V(w, St.value, O)),
            St !== null &&
              ((A = u(St, A, ut)),
              bt === null ? (it = St) : (bt.sibling = St),
              (bt = St));
        return gt && un(w, ut), it;
      }
      for (et = l(et); !St.done; ut++, St = N.next())
        (St = R(et, w, ut, St.value, O)),
          St !== null &&
            (t &&
              St.alternate !== null &&
              et.delete(St.key === null ? ut : St.key),
            (A = u(St, A, ut)),
            bt === null ? (it = St) : (bt.sibling = St),
            (bt = St));
      return (
        t &&
          et.forEach(function (Dx) {
            return e(w, Dx);
          }),
        gt && un(w, ut),
        it
      );
    }
    function jt(w, A, N, O) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === U &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case M:
            t: {
              for (var it = N.key; A !== null; ) {
                if (A.key === it) {
                  if (((it = N.type), it === U)) {
                    if (A.tag === 7) {
                      n(w, A.sibling),
                        (O = o(A, N.props.children)),
                        (O.return = w),
                        (w = O);
                      break t;
                    }
                  } else if (
                    A.elementType === it ||
                    (typeof it == "object" &&
                      it !== null &&
                      it.$$typeof === K &&
                      di(it) === A.type)
                  ) {
                    n(w, A.sibling),
                      (O = o(A, N.props)),
                      Ga(O, N),
                      (O.return = w),
                      (w = O);
                    break t;
                  }
                  n(w, A);
                  break;
                } else e(w, A);
                A = A.sibling;
              }
              N.type === U
                ? ((O = ri(N.props.children, w.mode, O, N.key)),
                  (O.return = w),
                  (w = O))
                : ((O = Il(N.type, N.key, N.props, null, w.mode, O)),
                  Ga(O, N),
                  (O.return = w),
                  (w = O));
            }
            return h(w);
          case D:
            t: {
              for (it = N.key; A !== null; ) {
                if (A.key === it)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === N.containerInfo &&
                    A.stateNode.implementation === N.implementation
                  ) {
                    n(w, A.sibling),
                      (O = o(A, N.children || [])),
                      (O.return = w),
                      (w = O);
                    break t;
                  } else {
                    n(w, A);
                    break;
                  }
                else e(w, A);
                A = A.sibling;
              }
              (O = ho(N, w.mode, O)), (O.return = w), (w = O);
            }
            return h(w);
          case K:
            return (N = di(N)), jt(w, A, N, O);
        }
        if (Ht(N)) return P(w, A, N, O);
        if (xt(N)) {
          if (((it = xt(N)), typeof it != "function")) throw Error(s(150));
          return (N = it.call(N)), at(w, A, N, O);
        }
        if (typeof N.then == "function") return jt(w, A, ss(N), O);
        if (N.$$typeof === Y) return jt(w, A, ns(w, N), O);
        rs(w, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          A !== null && A.tag === 6
            ? (n(w, A.sibling), (O = o(A, N)), (O.return = w), (w = O))
            : (n(w, A), (O = fo(N, w.mode, O)), (O.return = w), (w = O)),
          h(w))
        : n(w, A);
    }
    return function (w, A, N, O) {
      try {
        qa = 0;
        var it = jt(w, A, N, O);
        return (Ki = null), it;
      } catch (et) {
        if (et === Qi || et === as) throw et;
        var bt = Ee(29, et, null, w.mode);
        return (bt.lanes = O), (bt.return = w), bt;
      } finally {
      }
    };
  }
  var mi = Gd(!0),
    kd = Gd(!1),
    Rn = !1;
  function wo(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Mo(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function zn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function _n(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Tt & 2) !== 0)) {
      var o = l.pending;
      return (
        o === null ? (e.next = e) : ((e.next = o.next), (o.next = e)),
        (l.pending = e),
        (e = $l(t)),
        Md(t, null, n),
        e
      );
    }
    return Wl(t, l, e, n), $l(t);
  }
  function ka(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), Of(t, n);
    }
  }
  function No(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var o = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          u === null ? (o = u = h) : (u = u.next = h), (n = n.next);
        } while (n !== null);
        u === null ? (o = u = e) : (u = u.next = e);
      } else o = u = e;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var jo = !1;
  function Xa() {
    if (jo) {
      var t = Xi;
      if (t !== null) throw t;
    }
  }
  function Qa(t, e, n, l) {
    jo = !1;
    var o = t.updateQueue;
    Rn = !1;
    var u = o.firstBaseUpdate,
      h = o.lastBaseUpdate,
      v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var T = v,
        j = T.next;
      (T.next = null), h === null ? (u = j) : (h.next = j), (h = T);
      var _ = t.alternate;
      _ !== null &&
        ((_ = _.updateQueue),
        (v = _.lastBaseUpdate),
        v !== h &&
          (v === null ? (_.firstBaseUpdate = j) : (v.next = j),
          (_.lastBaseUpdate = T)));
    }
    if (u !== null) {
      var V = o.baseState;
      (h = 0), (_ = j = T = null), (v = u);
      do {
        var C = v.lane & -536870913,
          R = C !== v.lane;
        if (R ? (ht & C) === C : (l & C) === C) {
          C !== 0 && C === ki && (jo = !0),
            _ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var P = t,
              at = v;
            C = e;
            var jt = n;
            switch (at.tag) {
              case 1:
                if (((P = at.payload), typeof P == "function")) {
                  V = P.call(jt, V, C);
                  break t;
                }
                V = P;
                break t;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = at.payload),
                  (C = typeof P == "function" ? P.call(jt, V, C) : P),
                  C == null)
                )
                  break t;
                V = b({}, V, C);
                break t;
              case 2:
                Rn = !0;
            }
          }
          (C = v.callback),
            C !== null &&
              ((t.flags |= 64),
              R && (t.flags |= 8192),
              (R = o.callbacks),
              R === null ? (o.callbacks = [C]) : R.push(C));
        } else
          (R = {
            lane: C,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            _ === null ? ((j = _ = R), (T = V)) : (_ = _.next = R),
            (h |= C);
        if (((v = v.next), v === null)) {
          if (((v = o.shared.pending), v === null)) break;
          (R = v),
            (v = R.next),
            (R.next = null),
            (o.lastBaseUpdate = R),
            (o.shared.pending = null);
        }
      } while (!0);
      _ === null && (T = V),
        (o.baseState = T),
        (o.firstBaseUpdate = j),
        (o.lastBaseUpdate = _),
        u === null && (o.shared.lanes = 0),
        (Un |= h),
        (t.lanes = h),
        (t.memoizedState = V);
    }
  }
  function Xd(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function Qd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Xd(n[t], e);
  }
  var Zi = E(null),
    os = E(0);
  function Kd(t, e) {
    (t = bn), J(os, t), J(Zi, e), (bn = t | e.baseLanes);
  }
  function Co() {
    J(os, bn), J(Zi, Zi.current);
  }
  function Do() {
    (bn = os.current), B(Zi), B(os);
  }
  var we = E(null),
    Ue = null;
  function On(t) {
    var e = t.alternate;
    J(qt, qt.current & 1),
      J(we, t),
      Ue === null &&
        (e === null || Zi.current !== null || e.memoizedState !== null) &&
        (Ue = t);
  }
  function Ro(t) {
    J(qt, qt.current), J(we, t), Ue === null && (Ue = t);
  }
  function Zd(t) {
    t.tag === 22
      ? (J(qt, qt.current), J(we, t), Ue === null && (Ue = t))
      : Vn();
  }
  function Vn() {
    J(qt, qt.current), J(we, we.current);
  }
  function Me(t) {
    B(we), Ue === t && (Ue = null), B(qt);
  }
  var qt = E(0);
  function us(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Bu(n) || Uu(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var dn = 0,
    rt = null,
    Mt = null,
    Qt = null,
    cs = !1,
    Ji = !1,
    pi = !1,
    fs = 0,
    Ka = 0,
    Fi = null,
    b1 = 0;
  function Lt() {
    throw Error(s(321));
  }
  function zo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ae(t[n], e[n])) return !1;
    return !0;
  }
  function _o(t, e, n, l, o, u) {
    return (
      (dn = u),
      (rt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (z.H = t === null || t.memoizedState === null ? Dh : Jo),
      (pi = !1),
      (u = n(l, o)),
      (pi = !1),
      Ji && (u = Fd(e, n, l, o)),
      Jd(t),
      u
    );
  }
  function Jd(t) {
    z.H = Fa;
    var e = Mt !== null && Mt.next !== null;
    if (((dn = 0), (Qt = Mt = rt = null), (cs = !1), (Ka = 0), (Fi = null), e))
      throw Error(s(300));
    t === null ||
      Kt ||
      ((t = t.dependencies), t !== null && es(t) && (Kt = !0));
  }
  function Fd(t, e, n, l) {
    rt = t;
    var o = 0;
    do {
      if ((Ji && (Fi = null), (Ka = 0), (Ji = !1), 25 <= o))
        throw Error(s(301));
      if (((o += 1), (Qt = Mt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (z.H = Rh), (u = e(n, l));
    } while (Ji);
    return u;
  }
  function S1() {
    var t = z.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Za(e) : e),
      (t = t.useState()[0]),
      (Mt !== null ? Mt.memoizedState : null) !== t && (rt.flags |= 1024),
      e
    );
  }
  function Oo() {
    var t = fs !== 0;
    return (fs = 0), t;
  }
  function Vo(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Lo(t) {
    if (cs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      cs = !1;
    }
    (dn = 0), (Qt = Mt = rt = null), (Ji = !1), (Ka = fs = 0), (Fi = null);
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Qt === null ? (rt.memoizedState = Qt = t) : (Qt = Qt.next = t), Qt;
  }
  function Gt() {
    if (Mt === null) {
      var t = rt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Mt.next;
    var e = Qt === null ? rt.memoizedState : Qt.next;
    if (e !== null) (Qt = e), (Mt = t);
    else {
      if (t === null)
        throw rt.alternate === null ? Error(s(467)) : Error(s(310));
      (Mt = t),
        (t = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null,
        }),
        Qt === null ? (rt.memoizedState = Qt = t) : (Qt = Qt.next = t);
    }
    return Qt;
  }
  function ds() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Za(t) {
    var e = Ka;
    return (
      (Ka += 1),
      Fi === null && (Fi = []),
      (t = Hd(Fi, t, e)),
      (e = rt),
      (Qt === null ? e.memoizedState : Qt.next) === null &&
        ((e = e.alternate),
        (z.H = e === null || e.memoizedState === null ? Dh : Jo)),
      t
    );
  }
  function hs(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Za(t);
      if (t.$$typeof === Y) return ie(t);
    }
    throw Error(s(438, String(t)));
  }
  function Bo(t) {
    var e = null,
      n = rt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = rt.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ds()), (rt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = $;
    return e.index++, n;
  }
  function hn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ms(t) {
    var e = Gt();
    return Uo(e, Mt, t);
  }
  function Uo(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var o = t.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (o !== null) {
        var h = o.next;
        (o.next = u.next), (u.next = h);
      }
      (e.baseQueue = o = u), (l.pending = null);
    }
    if (((u = t.baseState), o === null)) t.memoizedState = u;
    else {
      e = o.next;
      var v = (h = null),
        T = null,
        j = e,
        _ = !1;
      do {
        var V = j.lane & -536870913;
        if (V !== j.lane ? (ht & V) === V : (dn & V) === V) {
          var C = j.revertLane;
          if (C === 0)
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              V === ki && (_ = !0);
          else if ((dn & C) === C) {
            (j = j.next), C === ki && (_ = !0);
            continue;
          } else
            (V = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              T === null ? ((v = T = V), (h = u)) : (T = T.next = V),
              (rt.lanes |= C),
              (Un |= C);
          (V = j.action),
            pi && n(u, V),
            (u = j.hasEagerState ? j.eagerState : n(u, V));
        } else
          (C = {
            lane: V,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            T === null ? ((v = T = C), (h = u)) : (T = T.next = C),
            (rt.lanes |= V),
            (Un |= V);
        j = j.next;
      } while (j !== null && j !== e);
      if (
        (T === null ? (h = u) : (T.next = v),
        !Ae(u, t.memoizedState) && ((Kt = !0), _ && ((n = Xi), n !== null)))
      )
        throw n;
      (t.memoizedState = u),
        (t.baseState = h),
        (t.baseQueue = T),
        (l.lastRenderedState = u);
    }
    return o === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Ho(t) {
    var e = Gt(),
      n = e.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      o = n.pending,
      u = e.memoizedState;
    if (o !== null) {
      n.pending = null;
      var h = (o = o.next);
      do (u = t(u, h.action)), (h = h.next);
      while (h !== o);
      Ae(u, e.memoizedState) || (Kt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, l];
  }
  function Pd(t, e, n) {
    var l = rt,
      o = Gt(),
      u = gt;
    if (u) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = e();
    var h = !Ae((Mt || o).memoizedState, n);
    if (
      (h && ((o.memoizedState = n), (Kt = !0)),
      (o = o.queue),
      Go(Id.bind(null, l, o, t), [t]),
      o.getSnapshot !== e || h || (Qt !== null && Qt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Pi(9, { destroy: void 0 }, $d.bind(null, l, o, n, e), null),
        Dt === null)
      )
        throw Error(s(349));
      u || (dn & 127) !== 0 || Wd(l, e, n);
    }
    return n;
  }
  function Wd(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = rt.updateQueue),
      e === null
        ? ((e = ds()), (rt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function $d(t, e, n, l) {
    (e.value = n), (e.getSnapshot = l), th(e) && eh(t);
  }
  function Id(t, e, n) {
    return n(function () {
      th(e) && eh(t);
    });
  }
  function th(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ae(t, n);
    } catch {
      return !0;
    }
  }
  function eh(t) {
    var e = si(t, 2);
    e !== null && ve(e, t, 2);
  }
  function Yo(t) {
    var e = ue();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), pi)) {
        En(!0);
        try {
          n();
        } finally {
          En(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function nh(t, e, n, l) {
    return (t.baseState = n), Uo(t, Mt, typeof l == "function" ? l : hn);
  }
  function T1(t, e, n, l, o) {
    if (gs(t)) throw Error(s(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (h) {
          u.listeners.push(h);
        },
      };
      z.T !== null ? n(!0) : (u.isTransition = !1),
        l(u),
        (n = e.pending),
        n === null
          ? ((u.next = e.pending = u), ih(e, u))
          : ((u.next = n.next), (e.pending = n.next = u));
    }
  }
  function ih(t, e) {
    var n = e.action,
      l = e.payload,
      o = t.state;
    if (e.isTransition) {
      var u = z.T,
        h = {};
      z.T = h;
      try {
        var v = n(o, l),
          T = z.S;
        T !== null && T(h, v), ah(t, e, v);
      } catch (j) {
        qo(t, e, j);
      } finally {
        u !== null && h.types !== null && (u.types = h.types), (z.T = u);
      }
    } else
      try {
        (u = n(o, l)), ah(t, e, u);
      } catch (j) {
        qo(t, e, j);
      }
  }
  function ah(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            lh(t, e, l);
          },
          function (l) {
            return qo(t, e, l);
          }
        )
      : lh(t, e, n);
  }
  function lh(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      sh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), ih(t, n)));
  }
  function qo(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do (e.status = "rejected"), (e.reason = n), sh(e), (e = e.next);
      while (e !== l);
    }
    t.action = null;
  }
  function sh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function rh(t, e) {
    return e;
  }
  function oh(t, e) {
    if (gt) {
      var n = Dt.formState;
      if (n !== null) {
        t: {
          var l = rt;
          if (gt) {
            if (zt) {
              e: {
                for (var o = zt, u = Be; o.nodeType !== 8; ) {
                  if (!u) {
                    o = null;
                    break e;
                  }
                  if (((o = He(o.nextSibling)), o === null)) {
                    o = null;
                    break e;
                  }
                }
                (u = o.data), (o = u === "F!" || u === "F" ? o : null);
              }
              if (o) {
                (zt = He(o.nextSibling)), (l = o.data === "F!");
                break t;
              }
            }
            Cn(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = ue()),
      (n.memoizedState = n.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rh,
        lastRenderedState: e,
      }),
      (n.queue = l),
      (n = Nh.bind(null, rt, l)),
      (l.dispatch = n),
      (l = Yo(!1)),
      (u = Zo.bind(null, rt, !1, l.queue)),
      (l = ue()),
      (o = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = o),
      (n = T1.bind(null, rt, o, u, n)),
      (o.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function uh(t) {
    var e = Gt();
    return ch(e, Mt, t);
  }
  function ch(t, e, n) {
    if (
      ((e = Uo(t, e, rh)[0]),
      (t = ms(hn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = Za(e);
      } catch (h) {
        throw h === Qi ? as : h;
      }
    else l = e;
    e = Gt();
    var o = e.queue,
      u = o.dispatch;
    return (
      n !== e.memoizedState &&
        ((rt.flags |= 2048),
        Pi(9, { destroy: void 0 }, A1.bind(null, o, n), null)),
      [l, u, t]
    );
  }
  function A1(t, e) {
    t.action = e;
  }
  function fh(t) {
    var e = Gt(),
      n = Mt;
    if (n !== null) return ch(e, n, t);
    Gt(), (e = e.memoizedState), (n = Gt());
    var l = n.queue.dispatch;
    return (n.memoizedState = t), [e, l, !1];
  }
  function Pi(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = rt.updateQueue),
      e === null && ((e = ds()), (rt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function dh() {
    return Gt().memoizedState;
  }
  function ps(t, e, n, l) {
    var o = ue();
    (rt.flags |= t),
      (o.memoizedState = Pi(
        1 | e,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l
      ));
  }
  function ys(t, e, n, l) {
    var o = Gt();
    l = l === void 0 ? null : l;
    var u = o.memoizedState.inst;
    Mt !== null && l !== null && zo(l, Mt.memoizedState.deps)
      ? (o.memoizedState = Pi(e, u, n, l))
      : ((rt.flags |= t), (o.memoizedState = Pi(1 | e, u, n, l)));
  }
  function hh(t, e) {
    ps(8390656, 8, t, e);
  }
  function Go(t, e) {
    ys(2048, 8, t, e);
  }
  function E1(t) {
    rt.flags |= 4;
    var e = rt.updateQueue;
    if (e === null) (e = ds()), (rt.updateQueue = e), (e.events = [t]);
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function mh(t) {
    var e = Gt().memoizedState;
    return (
      E1({ ref: e, nextImpl: t }),
      function () {
        if ((Tt & 2) !== 0) throw Error(s(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function ph(t, e) {
    return ys(4, 2, t, e);
  }
  function yh(t, e) {
    return ys(4, 4, t, e);
  }
  function gh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function vh(t, e, n) {
    (n = n != null ? n.concat([t]) : null), ys(4, 4, gh.bind(null, e, t), n);
  }
  function ko() {}
  function xh(t, e) {
    var n = Gt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && zo(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function bh(t, e) {
    var n = Gt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && zo(e, l[1])) return l[0];
    if (((l = t()), pi)) {
      En(!0);
      try {
        t();
      } finally {
        En(!1);
      }
    }
    return (n.memoizedState = [l, e]), l;
  }
  function Xo(t, e, n) {
    return n === void 0 || ((dn & 1073741824) !== 0 && (ht & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Sm()), (rt.lanes |= t), (Un |= t), n);
  }
  function Sh(t, e, n, l) {
    return Ae(n, e)
      ? n
      : Zi.current !== null
      ? ((t = Xo(t, n, l)), Ae(t, e) || (Kt = !0), t)
      : (dn & 42) === 0 || ((dn & 1073741824) !== 0 && (ht & 261930) === 0)
      ? ((Kt = !0), (t.memoizedState = n))
      : ((t = Sm()), (rt.lanes |= t), (Un |= t), e);
  }
  function Th(t, e, n, l, o) {
    var u = Z.p;
    Z.p = u !== 0 && 8 > u ? u : 8;
    var h = z.T,
      v = {};
    (z.T = v), Zo(t, !1, e, n);
    try {
      var T = o(),
        j = z.S;
      if (
        (j !== null && j(v, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var _ = x1(T, l);
        Ja(t, e, _, Ce(t));
      } else Ja(t, e, l, Ce(t));
    } catch (V) {
      Ja(t, e, { then: function () {}, status: "rejected", reason: V }, Ce());
    } finally {
      (Z.p = u),
        h !== null && v.types !== null && (h.types = v.types),
        (z.T = h);
    }
  }
  function w1() {}
  function Qo(t, e, n, l) {
    if (t.tag !== 5) throw Error(s(476));
    var o = Ah(t).queue;
    Th(
      t,
      o,
      e,
      F,
      n === null
        ? w1
        : function () {
            return Eh(t), n(l);
          }
    );
  }
  function Ah(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hn,
        lastRenderedState: F,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: hn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Eh(t) {
    var e = Ah(t);
    e.next === null && (e = t.alternate.memoizedState),
      Ja(t, e.next.queue, {}, Ce());
  }
  function Ko() {
    return ie(fl);
  }
  function wh() {
    return Gt().memoizedState;
  }
  function Mh() {
    return Gt().memoizedState;
  }
  function M1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ce();
          t = zn(n);
          var l = _n(e, t, n);
          l !== null && (ve(l, e, n), ka(l, e, n)),
            (e = { cache: So() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function N1(t, e, n) {
    var l = Ce();
    (n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gs(t)
        ? jh(e, n)
        : ((n = uo(t, e, n, l)), n !== null && (ve(n, t, l), Ch(n, e, l)));
  }
  function Nh(t, e, n) {
    var l = Ce();
    Ja(t, e, n, l);
  }
  function Ja(t, e, n, l) {
    var o = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gs(t)) jh(e, o);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var h = e.lastRenderedState,
            v = u(h, n);
          if (((o.hasEagerState = !0), (o.eagerState = v), Ae(v, h)))
            return Wl(t, e, o, 0), Dt === null && Pl(), !1;
        } catch {
        } finally {
        }
      if (((n = uo(t, e, o, l)), n !== null))
        return ve(n, t, l), Ch(n, e, l), !0;
    }
    return !1;
  }
  function Zo(t, e, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: wu(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gs(t))
    ) {
      if (e) throw Error(s(479));
    } else (e = uo(t, n, l, 2)), e !== null && ve(e, t, 2);
  }
  function gs(t) {
    var e = t.alternate;
    return t === rt || (e !== null && e === rt);
  }
  function jh(t, e) {
    Ji = cs = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function Ch(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), Of(t, n);
    }
  }
  var Fa = {
    readContext: ie,
    use: hs,
    useCallback: Lt,
    useContext: Lt,
    useEffect: Lt,
    useImperativeHandle: Lt,
    useLayoutEffect: Lt,
    useInsertionEffect: Lt,
    useMemo: Lt,
    useReducer: Lt,
    useRef: Lt,
    useState: Lt,
    useDebugValue: Lt,
    useDeferredValue: Lt,
    useTransition: Lt,
    useSyncExternalStore: Lt,
    useId: Lt,
    useHostTransitionStatus: Lt,
    useFormState: Lt,
    useActionState: Lt,
    useOptimistic: Lt,
    useMemoCache: Lt,
    useCacheRefresh: Lt,
  };
  Fa.useEffectEvent = Lt;
  var Dh = {
      readContext: ie,
      use: hs,
      useCallback: function (t, e) {
        return (ue().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: ie,
      useEffect: hh,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          ps(4194308, 4, gh.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return ps(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ps(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ue();
        e = e === void 0 ? null : e;
        var l = t();
        if (pi) {
          En(!0);
          try {
            t();
          } finally {
            En(!1);
          }
        }
        return (n.memoizedState = [l, e]), l;
      },
      useReducer: function (t, e, n) {
        var l = ue();
        if (n !== void 0) {
          var o = n(e);
          if (pi) {
            En(!0);
            try {
              n(e);
            } finally {
              En(!1);
            }
          }
        } else o = e;
        return (
          (l.memoizedState = l.baseState = o),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: o,
          }),
          (l.queue = t),
          (t = t.dispatch = N1.bind(null, rt, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ue();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Yo(t);
        var e = t.queue,
          n = Nh.bind(null, rt, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: ko,
      useDeferredValue: function (t, e) {
        var n = ue();
        return Xo(n, t, e);
      },
      useTransition: function () {
        var t = Yo(!1);
        return (
          (t = Th.bind(null, rt, t.queue, !0, !1)),
          (ue().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var l = rt,
          o = ue();
        if (gt) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = e()), Dt === null)) throw Error(s(349));
          (ht & 127) !== 0 || Wd(l, e, n);
        }
        o.memoizedState = n;
        var u = { value: n, getSnapshot: e };
        return (
          (o.queue = u),
          hh(Id.bind(null, l, u, t), [t]),
          (l.flags |= 2048),
          Pi(9, { destroy: void 0 }, $d.bind(null, l, u, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ue(),
          e = Dt.identifierPrefix;
        if (gt) {
          var n = $e,
            l = We;
          (n = (l & ~(1 << (32 - Te(l) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = fs++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_");
        } else (n = b1++), (e = "_" + e + "r_" + n.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ko,
      useFormState: oh,
      useActionState: oh,
      useOptimistic: function (t) {
        var e = ue();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Zo.bind(null, rt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Bo,
      useCacheRefresh: function () {
        return (ue().memoizedState = M1.bind(null, rt));
      },
      useEffectEvent: function (t) {
        var e = ue(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Tt & 2) !== 0) throw Error(s(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Jo = {
      readContext: ie,
      use: hs,
      useCallback: xh,
      useContext: ie,
      useEffect: Go,
      useImperativeHandle: vh,
      useInsertionEffect: ph,
      useLayoutEffect: yh,
      useMemo: bh,
      useReducer: ms,
      useRef: dh,
      useState: function () {
        return ms(hn);
      },
      useDebugValue: ko,
      useDeferredValue: function (t, e) {
        var n = Gt();
        return Sh(n, Mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ms(hn)[0],
          e = Gt().memoizedState;
        return [typeof t == "boolean" ? t : Za(t), e];
      },
      useSyncExternalStore: Pd,
      useId: wh,
      useHostTransitionStatus: Ko,
      useFormState: uh,
      useActionState: uh,
      useOptimistic: function (t, e) {
        var n = Gt();
        return nh(n, Mt, t, e);
      },
      useMemoCache: Bo,
      useCacheRefresh: Mh,
    };
  Jo.useEffectEvent = mh;
  var Rh = {
    readContext: ie,
    use: hs,
    useCallback: xh,
    useContext: ie,
    useEffect: Go,
    useImperativeHandle: vh,
    useInsertionEffect: ph,
    useLayoutEffect: yh,
    useMemo: bh,
    useReducer: Ho,
    useRef: dh,
    useState: function () {
      return Ho(hn);
    },
    useDebugValue: ko,
    useDeferredValue: function (t, e) {
      var n = Gt();
      return Mt === null ? Xo(n, t, e) : Sh(n, Mt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Ho(hn)[0],
        e = Gt().memoizedState;
      return [typeof t == "boolean" ? t : Za(t), e];
    },
    useSyncExternalStore: Pd,
    useId: wh,
    useHostTransitionStatus: Ko,
    useFormState: fh,
    useActionState: fh,
    useOptimistic: function (t, e) {
      var n = Gt();
      return Mt !== null
        ? nh(n, Mt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: Bo,
    useCacheRefresh: Mh,
  };
  Rh.useEffectEvent = mh;
  function Fo(t, e, n, l) {
    (e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Po = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = Ce(),
        o = zn(l);
      (o.payload = e),
        n != null && (o.callback = n),
        (e = _n(t, o, l)),
        e !== null && (ve(e, t, l), ka(e, t, l));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = Ce(),
        o = zn(l);
      (o.tag = 1),
        (o.payload = e),
        n != null && (o.callback = n),
        (e = _n(t, o, l)),
        e !== null && (ve(e, t, l), ka(e, t, l));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ce(),
        l = zn(n);
      (l.tag = 2),
        e != null && (l.callback = e),
        (e = _n(t, l, n)),
        e !== null && (ve(e, t, n), ka(e, t, n));
    },
  };
  function zh(t, e, n, l, o, u, h) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, u, h)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Va(n, l) || !Va(o, u)
        : !0
    );
  }
  function _h(t, e, n, l) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && Po.enqueueReplaceState(e, e.state, null);
  }
  function yi(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = b({}, n));
      for (var o in t) n[o] === void 0 && (n[o] = t[o]);
    }
    return n;
  }
  function Oh(t) {
    Fl(t);
  }
  function Vh(t) {
    console.error(t);
  }
  function Lh(t) {
    Fl(t);
  }
  function vs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Bh(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Wo(t, e, n) {
    return (
      (n = zn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        vs(t, e);
      }),
      n
    );
  }
  function Uh(t) {
    return (t = zn(t)), (t.tag = 3), t;
  }
  function Hh(t, e, n, l) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = l.value;
      (t.payload = function () {
        return o(u);
      }),
        (t.callback = function () {
          Bh(e, n, l);
        });
    }
    var h = n.stateNode;
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (t.callback = function () {
        Bh(e, n, l),
          typeof o != "function" &&
            (Hn === null ? (Hn = new Set([this])) : Hn.add(this));
        var v = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function j1(t, e, n, l, o) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Gi(e, n, o, !0),
        (n = we.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Ue === null ? Ds() : n.alternate === null && Bt === 0 && (Bt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = o),
              l === ls
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                  Tu(t, l, o)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === ls
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  Tu(t, l, o)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return Tu(t, l, o), Ds(), !1;
    }
    if (gt)
      return (
        (e = we.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = o),
            l !== yo && ((t = Error(s(422), { cause: l })), Ua(Oe(t, n))))
          : (l !== yo && ((e = Error(s(423), { cause: l })), Ua(Oe(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (o &= -o),
            (t.lanes |= o),
            (l = Oe(l, n)),
            (o = Wo(t.stateNode, l, o)),
            No(t, o),
            Bt !== 4 && (Bt = 2)),
        !1
      );
    var u = Error(s(520), { cause: l });
    if (
      ((u = Oe(u, n)),
      il === null ? (il = [u]) : il.push(u),
      Bt !== 4 && (Bt = 2),
      e === null)
    )
      return !0;
    (l = Oe(l, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = o & -o),
            (n.lanes |= t),
            (t = Wo(n.stateNode, l, t)),
            No(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Hn === null || !Hn.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (o &= -o),
              (n.lanes |= o),
              (o = Uh(o)),
              Hh(o, t, n, l),
              No(n, o),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var $o = Error(s(461)),
    Kt = !1;
  function ae(t, e, n, l) {
    e.child = t === null ? kd(e, null, n, l) : mi(e, t.child, n, l);
  }
  function Yh(t, e, n, l, o) {
    n = n.render;
    var u = e.ref;
    if ("ref" in l) {
      var h = {};
      for (var v in l) v !== "ref" && (h[v] = l[v]);
    } else h = l;
    return (
      ci(e),
      (l = _o(t, e, n, h, u, o)),
      (v = Oo()),
      t !== null && !Kt
        ? (Vo(t, e, o), mn(t, e, o))
        : (gt && v && mo(e), (e.flags |= 1), ae(t, e, l, o), e.child)
    );
  }
  function qh(t, e, n, l, o) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" &&
        !co(u) &&
        u.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = u), Gh(t, e, u, l, o))
        : ((t = Il(n.type, null, l, e, e.mode, o)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !su(t, o))) {
      var h = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Va), n(h, l) && t.ref === e.ref)
      )
        return mn(t, e, o);
    }
    return (
      (e.flags |= 1),
      (t = on(u, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Gh(t, e, n, l, o) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Va(u, l) && t.ref === e.ref)
        if (((Kt = !1), (e.pendingProps = l = u), su(t, o)))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else return (e.lanes = t.lanes), mn(t, e, o);
    }
    return Io(t, e, n, l, o);
  }
  function kh(t, e, n, l) {
    var o = l.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | n : n), t !== null)) {
          for (l = e.child = t.child, o = 0; l !== null; )
            (o = o | l.lanes | l.childLanes), (l = l.sibling);
          l = o & ~u;
        } else (l = 0), (e.child = null);
        return Xh(t, e, u, n, l);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && is(e, u !== null ? u.cachePool : null),
          u !== null ? Kd(e, u) : Co(),
          Zd(e);
      else
        return (
          (l = e.lanes = 536870912),
          Xh(t, e, u !== null ? u.baseLanes | n : n, n, l)
        );
    } else
      u !== null
        ? (is(e, u.cachePool), Kd(e, u), Vn(), (e.memoizedState = null))
        : (t !== null && is(e, null), Co(), Vn());
    return ae(t, e, o, n), e.child;
  }
  function Pa(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Xh(t, e, n, l, o) {
    var u = Ao();
    return (
      (u = u === null ? null : { parent: Xt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: n, cachePool: u }),
      t !== null && is(e, null),
      Co(),
      Zd(e),
      t !== null && Gi(t, e, l, !0),
      (e.childLanes = o),
      null
    );
  }
  function xs(t, e) {
    return (
      (e = Ss({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Qh(t, e, n) {
    return (
      mi(e, t.child, null, n),
      (t = xs(e, e.pendingProps)),
      (t.flags |= 2),
      Me(e),
      (e.memoizedState = null),
      t
    );
  }
  function C1(t, e, n) {
    var l = e.pendingProps,
      o = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (gt) {
        if (l.mode === "hidden")
          return (t = xs(e, l)), (e.lanes = 536870912), Pa(null, t);
        if (
          (Ro(e),
          (t = zt)
            ? ((t = i0(t, Be)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Nn !== null ? { id: We, overflow: $e } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = jd(t)),
                (n.return = e),
                (e.child = n),
                (ne = e),
                (zt = null)))
            : (t = null),
          t === null)
        )
          throw Cn(e);
        return (e.lanes = 536870912), null;
      }
      return xs(e, l);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var h = u.dehydrated;
      if ((Ro(e), o))
        if (e.flags & 256) (e.flags &= -257), (e = Qh(t, e, n));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(s(558));
      else if (
        (Kt || Gi(t, e, n, !1), (o = (n & t.childLanes) !== 0), Kt || o)
      ) {
        if (
          ((l = Dt),
          l !== null && ((h = Vf(l, n)), h !== 0 && h !== u.retryLane))
        )
          throw ((u.retryLane = h), si(t, h), ve(l, t, h), $o);
        Ds(), (e = Qh(t, e, n));
      } else
        (t = u.treeContext),
          (zt = He(h.nextSibling)),
          (ne = e),
          (gt = !0),
          (jn = null),
          (Be = !1),
          t !== null && Rd(e, t),
          (e = xs(e, l)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = on(t.child, { mode: l.mode, children: l.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function bs(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Io(t, e, n, l, o) {
    return (
      ci(e),
      (n = _o(t, e, n, l, void 0, o)),
      (l = Oo()),
      t !== null && !Kt
        ? (Vo(t, e, o), mn(t, e, o))
        : (gt && l && mo(e), (e.flags |= 1), ae(t, e, n, o), e.child)
    );
  }
  function Kh(t, e, n, l, o, u) {
    return (
      ci(e),
      (e.updateQueue = null),
      (n = Fd(e, l, n, o)),
      Jd(t),
      (l = Oo()),
      t !== null && !Kt
        ? (Vo(t, e, u), mn(t, e, u))
        : (gt && l && mo(e), (e.flags |= 1), ae(t, e, n, u), e.child)
    );
  }
  function Zh(t, e, n, l, o) {
    if ((ci(e), e.stateNode === null)) {
      var u = Ui,
        h = n.contextType;
      typeof h == "object" && h !== null && (u = ie(h)),
        (u = new n(l, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Po),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = l),
        (u.state = e.memoizedState),
        (u.refs = {}),
        wo(e),
        (h = n.contextType),
        (u.context = typeof h == "object" && h !== null ? ie(h) : Ui),
        (u.state = e.memoizedState),
        (h = n.getDerivedStateFromProps),
        typeof h == "function" && (Fo(e, n, h, l), (u.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((h = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          h !== u.state && Po.enqueueReplaceState(u, u.state, null),
          Qa(e, l, u, o),
          Xa(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0);
    } else if (t === null) {
      u = e.stateNode;
      var v = e.memoizedProps,
        T = yi(n, v);
      u.props = T;
      var j = u.context,
        _ = n.contextType;
      (h = Ui), typeof _ == "object" && _ !== null && (h = ie(_));
      var V = n.getDerivedStateFromProps;
      (_ =
        typeof V == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        _ ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((v || j !== h) && _h(e, u, l, h)),
        (Rn = !1);
      var C = e.memoizedState;
      (u.state = C),
        Qa(e, l, u, o),
        Xa(),
        (j = e.memoizedState),
        v || C !== j || Rn
          ? (typeof V == "function" && (Fo(e, n, V, l), (j = e.memoizedState)),
            (T = Rn || zh(e, n, T, l, C, j, h))
              ? (_ ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = j)),
            (u.props = l),
            (u.state = j),
            (u.context = h),
            (l = T))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1));
    } else {
      (u = e.stateNode),
        Mo(t, e),
        (h = e.memoizedProps),
        (_ = yi(n, h)),
        (u.props = _),
        (V = e.pendingProps),
        (C = u.context),
        (j = n.contextType),
        (T = Ui),
        typeof j == "object" && j !== null && (T = ie(j)),
        (v = n.getDerivedStateFromProps),
        (j =
          typeof v == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((h !== V || C !== T) && _h(e, u, l, T)),
        (Rn = !1),
        (C = e.memoizedState),
        (u.state = C),
        Qa(e, l, u, o),
        Xa();
      var R = e.memoizedState;
      h !== V ||
      C !== R ||
      Rn ||
      (t !== null && t.dependencies !== null && es(t.dependencies))
        ? (typeof v == "function" && (Fo(e, n, v, l), (R = e.memoizedState)),
          (_ =
            Rn ||
            zh(e, n, _, l, C, R, T) ||
            (t !== null && t.dependencies !== null && es(t.dependencies)))
            ? (j ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(l, R, T),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(l, R, T)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (h === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (h === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = R)),
          (u.props = l),
          (u.state = R),
          (u.context = T),
          (l = _))
        : (typeof u.componentDidUpdate != "function" ||
            (h === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (h === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      bs(t, e),
      (l = (e.flags & 128) !== 0),
      u || l
        ? ((u = e.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = mi(e, t.child, null, o)),
              (e.child = mi(e, null, n, o)))
            : ae(t, e, n, o),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = mn(t, e, o)),
      t
    );
  }
  function Jh(t, e, n, l) {
    return oi(), (e.flags |= 256), ae(t, e, n, l), e.child;
  }
  var tu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function eu(t) {
    return { baseLanes: t, cachePool: Bd() };
  }
  function nu(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= je), t;
  }
  function Fh(t, e, n) {
    var l = e.pendingProps,
      o = !1,
      u = (e.flags & 128) !== 0,
      h;
    if (
      ((h = u) ||
        (h =
          t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0),
      h && ((o = !0), (e.flags &= -129)),
      (h = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (gt) {
        if (
          (o ? On(e) : Vn(),
          (t = zt)
            ? ((t = i0(t, Be)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Nn !== null ? { id: We, overflow: $e } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = jd(t)),
                (n.return = e),
                (e.child = n),
                (ne = e),
                (zt = null)))
            : (t = null),
          t === null)
        )
          throw Cn(e);
        return Uu(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var v = l.children;
      return (
        (l = l.fallback),
        o
          ? (Vn(),
            (o = e.mode),
            (v = Ss({ mode: "hidden", children: v }, o)),
            (l = ri(l, o, n, null)),
            (v.return = e),
            (l.return = e),
            (v.sibling = l),
            (e.child = v),
            (l = e.child),
            (l.memoizedState = eu(n)),
            (l.childLanes = nu(t, h, n)),
            (e.memoizedState = tu),
            Pa(null, l))
          : (On(e), iu(e, v))
      );
    }
    var T = t.memoizedState;
    if (T !== null && ((v = T.dehydrated), v !== null)) {
      if (u)
        e.flags & 256
          ? (On(e), (e.flags &= -257), (e = au(t, e, n)))
          : e.memoizedState !== null
          ? (Vn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Vn(),
            (v = l.fallback),
            (o = e.mode),
            (l = Ss({ mode: "visible", children: l.children }, o)),
            (v = ri(v, o, n, null)),
            (v.flags |= 2),
            (l.return = e),
            (v.return = e),
            (l.sibling = v),
            (e.child = l),
            mi(e, t.child, null, n),
            (l = e.child),
            (l.memoizedState = eu(n)),
            (l.childLanes = nu(t, h, n)),
            (e.memoizedState = tu),
            (e = Pa(null, l)));
      else if ((On(e), Uu(v))) {
        if (((h = v.nextSibling && v.nextSibling.dataset), h)) var j = h.dgst;
        (h = j),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = h),
          Ua({ value: l, source: null, stack: null }),
          (e = au(t, e, n));
      } else if (
        (Kt || Gi(t, e, n, !1), (h = (n & t.childLanes) !== 0), Kt || h)
      ) {
        if (
          ((h = Dt),
          h !== null && ((l = Vf(h, n)), l !== 0 && l !== T.retryLane))
        )
          throw ((T.retryLane = l), si(t, l), ve(h, t, l), $o);
        Bu(v) || Ds(), (e = au(t, e, n));
      } else
        Bu(v)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (zt = He(v.nextSibling)),
            (ne = e),
            (gt = !0),
            (jn = null),
            (Be = !1),
            t !== null && Rd(e, t),
            (e = iu(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return o
      ? (Vn(),
        (v = l.fallback),
        (o = e.mode),
        (T = t.child),
        (j = T.sibling),
        (l = on(T, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = T.subtreeFlags & 65011712),
        j !== null ? (v = on(j, v)) : ((v = ri(v, o, n, null)), (v.flags |= 2)),
        (v.return = e),
        (l.return = e),
        (l.sibling = v),
        (e.child = l),
        Pa(null, l),
        (l = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = eu(n))
          : ((o = v.cachePool),
            o !== null
              ? ((T = Xt._currentValue),
                (o = o.parent !== T ? { parent: T, pool: T } : o))
              : (o = Bd()),
            (v = { baseLanes: v.baseLanes | n, cachePool: o })),
        (l.memoizedState = v),
        (l.childLanes = nu(t, h, n)),
        (e.memoizedState = tu),
        Pa(t.child, l))
      : (On(e),
        (n = t.child),
        (t = n.sibling),
        (n = on(n, { mode: "visible", children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((h = e.deletions),
          h === null ? ((e.deletions = [t]), (e.flags |= 16)) : h.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function iu(t, e) {
    return (
      (e = Ss({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ss(t, e) {
    return (t = Ee(22, t, null, e)), (t.lanes = 0), t;
  }
  function au(t, e, n) {
    return (
      mi(e, t.child, null, n),
      (t = iu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Ph(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), xo(t.return, e, n);
  }
  function lu(t, e, n, l, o, u) {
    var h = t.memoizedState;
    h === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: o,
          treeForkCount: u,
        })
      : ((h.isBackwards = e),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = l),
        (h.tail = n),
        (h.tailMode = o),
        (h.treeForkCount = u));
  }
  function Wh(t, e, n) {
    var l = e.pendingProps,
      o = l.revealOrder,
      u = l.tail;
    l = l.children;
    var h = qt.current,
      v = (h & 2) !== 0;
    if (
      (v ? ((h = (h & 1) | 2), (e.flags |= 128)) : (h &= 1),
      J(qt, h),
      ae(t, e, l, n),
      (l = gt ? Ba : 0),
      !v && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Ph(t, n, e);
        else if (t.tag === 19) Ph(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (o) {
      case "forwards":
        for (n = e.child, o = null; n !== null; )
          (t = n.alternate),
            t !== null && us(t) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = e.child), (e.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          lu(e, !1, o, n, u, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = e.child, e.child = null; o !== null; ) {
          if (((t = o.alternate), t !== null && us(t) === null)) {
            e.child = o;
            break;
          }
          (t = o.sibling), (o.sibling = n), (n = o), (o = t);
        }
        lu(e, !0, n, null, u, l);
        break;
      case "together":
        lu(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function mn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Un |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Gi(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (
        t = e.child, n = on(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = on(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function su(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && es(t)));
  }
  function D1(t, e, n) {
    switch (e.tag) {
      case 3:
        oe(e, e.stateNode.containerInfo),
          Dn(e, Xt, t.memoizedState.cache),
          oi();
        break;
      case 27:
      case 5:
        Ta(e);
        break;
      case 4:
        oe(e, e.stateNode.containerInfo);
        break;
      case 10:
        Dn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), Ro(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (On(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Fh(t, e, n)
            : (On(e), (t = mn(t, e, n)), t !== null ? t.sibling : null);
        On(e);
        break;
      case 19:
        var o = (t.flags & 128) !== 0;
        if (
          ((l = (n & e.childLanes) !== 0),
          l || (Gi(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
          o)
        ) {
          if (l) return Wh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((o = e.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          J(qt, qt.current),
          l)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), kh(t, e, n, e.pendingProps);
      case 24:
        Dn(e, Xt, t.memoizedState.cache);
    }
    return mn(t, e, n);
  }
  function $h(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Kt = !0;
      else {
        if (!su(t, n) && (e.flags & 128) === 0) return (Kt = !1), D1(t, e, n);
        Kt = (t.flags & 131072) !== 0;
      }
    else (Kt = !1), gt && (e.flags & 1048576) !== 0 && Dd(e, Ba, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = di(e.elementType)), (e.type = t), typeof t == "function"))
            co(t)
              ? ((l = yi(t, l)), (e.tag = 1), (e = Zh(null, e, t, l, n)))
              : ((e.tag = 0), (e = Io(null, e, t, l, n)));
          else {
            if (t != null) {
              var o = t.$$typeof;
              if (o === Q) {
                (e.tag = 11), (e = Yh(null, e, t, l, n));
                break t;
              } else if (o === X) {
                (e.tag = 14), (e = qh(null, e, t, l, n));
                break t;
              }
            }
            throw ((e = kt(t) || t), Error(s(306, e, "")));
          }
        }
        return e;
      case 0:
        return Io(t, e, e.type, e.pendingProps, n);
      case 1:
        return (l = e.type), (o = yi(l, e.pendingProps)), Zh(t, e, l, o, n);
      case 3:
        t: {
          if ((oe(e, e.stateNode.containerInfo), t === null))
            throw Error(s(387));
          l = e.pendingProps;
          var u = e.memoizedState;
          (o = u.element), Mo(t, e), Qa(e, l, null, n);
          var h = e.memoizedState;
          if (
            ((l = h.cache),
            Dn(e, Xt, l),
            l !== u.cache && bo(e, [Xt], n, !0),
            Xa(),
            (l = h.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: h.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Jh(t, e, l, n);
              break t;
            } else if (l !== o) {
              (o = Oe(Error(s(424)), e)), Ua(o), (e = Jh(t, e, l, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                zt = He(t.firstChild),
                  ne = e,
                  gt = !0,
                  jn = null,
                  Be = !0,
                  n = kd(e, null, l, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((oi(), l === o)) {
              e = mn(t, e, n);
              break t;
            }
            ae(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          bs(t, e),
          t === null
            ? (n = u0(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : gt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = Bs(ct.current).createElement(n)),
                (l[ee] = e),
                (l[de] = t),
                le(l, n, t),
                Wt(l),
                (e.stateNode = l))
            : (e.memoizedState = u0(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ta(e),
          t === null &&
            gt &&
            ((l = e.stateNode = s0(e.type, e.pendingProps, ct.current)),
            (ne = e),
            (Be = !0),
            (o = zt),
            kn(e.type) ? ((Hu = o), (zt = He(l.firstChild))) : (zt = o)),
          ae(t, e, e.pendingProps.children, n),
          bs(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            gt &&
            ((o = l = zt) &&
              ((l = sx(l, e.type, e.pendingProps, Be)),
              l !== null
                ? ((e.stateNode = l),
                  (ne = e),
                  (zt = He(l.firstChild)),
                  (Be = !1),
                  (o = !0))
                : (o = !1)),
            o || Cn(e)),
          Ta(e),
          (o = e.type),
          (u = e.pendingProps),
          (h = t !== null ? t.memoizedProps : null),
          (l = u.children),
          Ou(o, u) ? (l = null) : h !== null && Ou(o, h) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((o = _o(t, e, S1, null, null, n)), (fl._currentValue = o)),
          bs(t, e),
          ae(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            gt &&
            ((t = n = zt) &&
              ((n = rx(n, e.pendingProps, Be)),
              n !== null
                ? ((e.stateNode = n), (ne = e), (zt = null), (t = !0))
                : (t = !1)),
            t || Cn(e)),
          null
        );
      case 13:
        return Fh(t, e, n);
      case 4:
        return (
          oe(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = mi(e, null, l, n)) : ae(t, e, l, n),
          e.child
        );
      case 11:
        return Yh(t, e, e.type, e.pendingProps, n);
      case 7:
        return ae(t, e, e.pendingProps, n), e.child;
      case 8:
        return ae(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return ae(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (l = e.pendingProps),
          Dn(e, e.type, l.value),
          ae(t, e, l.children, n),
          e.child
        );
      case 9:
        return (
          (o = e.type._context),
          (l = e.pendingProps.children),
          ci(e),
          (o = ie(o)),
          (l = l(o)),
          (e.flags |= 1),
          ae(t, e, l, n),
          e.child
        );
      case 14:
        return qh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Gh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Wh(t, e, n);
      case 31:
        return C1(t, e, n);
      case 22:
        return kh(t, e, n, e.pendingProps);
      case 24:
        return (
          ci(e),
          (l = ie(Xt)),
          t === null
            ? ((o = Ao()),
              o === null &&
                ((o = Dt),
                (u = So()),
                (o.pooledCache = u),
                u.refCount++,
                u !== null && (o.pooledCacheLanes |= n),
                (o = u)),
              (e.memoizedState = { parent: l, cache: o }),
              wo(e),
              Dn(e, Xt, o))
            : ((t.lanes & n) !== 0 && (Mo(t, e), Qa(e, null, null, n), Xa()),
              (o = t.memoizedState),
              (u = e.memoizedState),
              o.parent !== l
                ? ((o = { parent: l, cache: l }),
                  (e.memoizedState = o),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = o),
                  Dn(e, Xt, l))
                : ((l = u.cache),
                  Dn(e, Xt, l),
                  l !== o.cache && bo(e, [Xt], n, !0))),
          ae(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function pn(t) {
    t.flags |= 4;
  }
  function ru(t, e, n, l, o) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (o & 335544128) === o))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (wm()) t.flags |= 8192;
        else throw ((hi = ls), Eo);
    } else t.flags &= -16777217;
  }
  function Ih(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !m0(e)))
      if (wm()) t.flags |= 8192;
      else throw ((hi = ls), Eo);
  }
  function Ts(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? zf() : 536870912), (t.lanes |= e), (ta |= e));
  }
  function Wa(t, e) {
    if (!gt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function _t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var o = t.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags & 65011712),
          (l |= o.flags & 65011712),
          (o.return = t),
          (o = o.sibling);
    else
      for (o = t.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags),
          (l |= o.flags),
          (o.return = t),
          (o = o.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = n), e;
  }
  function R1(t, e, n) {
    var l = e.pendingProps;
    switch ((po(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(e), null;
      case 1:
        return _t(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          fn(Xt),
          Yt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (qi(e)
              ? pn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), go())),
          _t(e),
          null
        );
      case 26:
        var o = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? (pn(e),
              u !== null ? (_t(e), Ih(e, u)) : (_t(e), ru(e, o, null, l, n)))
            : u
            ? u !== t.memoizedState
              ? (pn(e), _t(e), Ih(e, u))
              : (_t(e), (e.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== l && pn(e),
              _t(e),
              ru(e, o, t, l, n)),
          null
        );
      case 27:
        if (
          (_l(e),
          (n = ct.current),
          (o = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== l && pn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return _t(e), null;
          }
          (t = I.current),
            qi(e) ? zd(e) : ((t = s0(o, l, n)), (e.stateNode = t), pn(e));
        }
        return _t(e), null;
      case 5:
        if ((_l(e), (o = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && pn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return _t(e), null;
          }
          if (((u = I.current), qi(e))) zd(e);
          else {
            var h = Bs(ct.current);
            switch (u) {
              case 1:
                u = h.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                u = h.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    u = h.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    u = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    (u = h.createElement("div")),
                      (u.innerHTML = "<script></script>"),
                      (u = u.removeChild(u.firstChild));
                    break;
                  case "select":
                    (u =
                      typeof l.is == "string"
                        ? h.createElement("select", { is: l.is })
                        : h.createElement("select")),
                      l.multiple
                        ? (u.multiple = !0)
                        : l.size && (u.size = l.size);
                    break;
                  default:
                    u =
                      typeof l.is == "string"
                        ? h.createElement(o, { is: l.is })
                        : h.createElement(o);
                }
            }
            (u[ee] = e), (u[de] = l);
            t: for (h = e.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6) u.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                (h.child.return = h), (h = h.child);
                continue;
              }
              if (h === e) break t;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === e) break t;
                h = h.return;
              }
              (h.sibling.return = h.return), (h = h.sibling);
            }
            e.stateNode = u;
            t: switch ((le(u, o, l), o)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && pn(e);
          }
        }
        return (
          _t(e),
          ru(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && pn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(s(166));
          if (((t = ct.current), qi(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (l = null),
              (o = ne),
              o !== null)
            )
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            (t[ee] = e),
              (t = !!(
                t.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Fm(t.nodeValue, n)
              )),
              t || Cn(e, !0);
          } else (t = Bs(t).createTextNode(l)), (t[ee] = e), (e.stateNode = t);
        }
        return _t(e), null;
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = qi(e)), n !== null)) {
            if (t === null) {
              if (!l) throw Error(s(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(s(557));
              t[ee] = e;
            } else
              oi(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            _t(e), (t = !1);
          } else
            (n = go()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0);
          if (!t) return e.flags & 256 ? (Me(e), e) : (Me(e), null);
          if ((e.flags & 128) !== 0) throw Error(s(558));
        }
        return _t(e), null;
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((o = qi(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!o) throw Error(s(318));
              if (
                ((o = e.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(s(317));
              o[ee] = e;
            } else
              oi(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            _t(e), (o = !1);
          } else
            (o = go()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = o),
              (o = !0);
          if (!o) return e.flags & 256 ? (Me(e), e) : (Me(e), null);
        }
        return (
          Me(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = l !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((l = e.child),
                (o = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (o = l.alternate.memoizedState.cachePool.pool),
                (u = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (u = l.memoizedState.cachePool.pool),
                u !== o && (l.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              Ts(e, e.updateQueue),
              _t(e),
              null)
        );
      case 4:
        return Yt(), t === null && Cu(e.stateNode.containerInfo), _t(e), null;
      case 10:
        return fn(e.type), _t(e), null;
      case 19:
        if ((B(qt), (l = e.memoizedState), l === null)) return _t(e), null;
        if (((o = (e.flags & 128) !== 0), (u = l.rendering), u === null))
          if (o) Wa(l, !1);
          else {
            if (Bt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = us(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      Wa(l, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Ts(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    Nd(n, t), (n = n.sibling);
                  return (
                    J(qt, (qt.current & 1) | 2),
                    gt && un(e, l.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            l.tail !== null &&
              be() > Ns &&
              ((e.flags |= 128), (o = !0), Wa(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!o)
            if (((t = us(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (o = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ts(e, t),
                Wa(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !u.alternate &&
                  !gt)
              )
                return _t(e), null;
            } else
              2 * be() - l.renderingStartTime > Ns &&
                n !== 536870912 &&
                ((e.flags |= 128), (o = !0), Wa(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = l.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (l.last = u));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = be()),
            (t.sibling = null),
            (n = qt.current),
            J(qt, o ? (n & 1) | 2 : n & 1),
            gt && un(e, l.treeForkCount),
            t)
          : (_t(e), null);
      case 22:
      case 23:
        return (
          Me(e),
          Do(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (_t(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : _t(e),
          (n = e.updateQueue),
          n !== null && Ts(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && B(fi),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          fn(Xt),
          _t(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function z1(t, e) {
    switch ((po(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          fn(Xt),
          Yt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return _l(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((Me(e), e.alternate === null)) throw Error(s(340));
          oi();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Me(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(s(340));
          oi();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return B(qt), null;
      case 4:
        return Yt(), null;
      case 10:
        return fn(e.type), null;
      case 22:
      case 23:
        return (
          Me(e),
          Do(),
          t !== null && B(fi),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return fn(Xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function tm(t, e) {
    switch ((po(e), e.tag)) {
      case 3:
        fn(Xt), Yt();
        break;
      case 26:
      case 27:
      case 5:
        _l(e);
        break;
      case 4:
        Yt();
        break;
      case 31:
        e.memoizedState !== null && Me(e);
        break;
      case 13:
        Me(e);
        break;
      case 19:
        B(qt);
        break;
      case 10:
        fn(e.type);
        break;
      case 22:
      case 23:
        Me(e), Do(), t !== null && B(fi);
        break;
      case 24:
        fn(Xt);
    }
  }
  function $a(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        n = o;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var u = n.create,
              h = n.inst;
            (l = u()), (h.destroy = l);
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (v) {
      wt(e, e.return, v);
    }
  }
  function Ln(t, e, n) {
    try {
      var l = e.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var h = l.inst,
              v = h.destroy;
            if (v !== void 0) {
              (h.destroy = void 0), (o = e);
              var T = n,
                j = v;
              try {
                j();
              } catch (_) {
                wt(o, T, _);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (_) {
      wt(e, e.return, _);
    }
  }
  function em(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Qd(e, n);
      } catch (l) {
        wt(t, t.return, l);
      }
    }
  }
  function nm(t, e, n) {
    (n.props = yi(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      wt(t, e, l);
    }
  }
  function Ia(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(l)) : (n.current = l);
      }
    } catch (o) {
      wt(t, e, o);
    }
  }
  function Ie(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          wt(t, e, o);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          wt(t, e, o);
        }
      else n.current = null;
  }
  function im(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (o) {
      wt(t, t.return, o);
    }
  }
  function ou(t, e, n) {
    try {
      var l = t.stateNode;
      tx(l, t.type, n, e), (l[de] = e);
    } catch (o) {
      wt(t, t.return, o);
    }
  }
  function am(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && kn(t.type)) ||
      t.tag === 4
    );
  }
  function uu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || am(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && kn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function cu(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = sn));
    else if (
      l !== 4 &&
      (l === 27 && kn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (cu(t, e, n), t = t.sibling; t !== null; )
        cu(t, e, n), (t = t.sibling);
  }
  function As(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      l !== 4 &&
      (l === 27 && kn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (As(t, e, n), t = t.sibling; t !== null; )
        As(t, e, n), (t = t.sibling);
  }
  function lm(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, o = e.attributes; o.length; )
        e.removeAttributeNode(o[0]);
      le(e, l, n), (e[ee] = t), (e[de] = n);
    } catch (u) {
      wt(t, t.return, u);
    }
  }
  var yn = !1,
    Zt = !1,
    fu = !1,
    sm = typeof WeakSet == "function" ? WeakSet : Set,
    $t = null;
  function _1(t, e) {
    if (((t = t.containerInfo), (zu = Xs), (t = vd(t)), io(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var o = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break t;
            }
            var h = 0,
              v = -1,
              T = -1,
              j = 0,
              _ = 0,
              V = t,
              C = null;
            e: for (;;) {
              for (
                var R;
                V !== n || (o !== 0 && V.nodeType !== 3) || (v = h + o),
                  V !== u || (l !== 0 && V.nodeType !== 3) || (T = h + l),
                  V.nodeType === 3 && (h += V.nodeValue.length),
                  (R = V.firstChild) !== null;

              )
                (C = V), (V = R);
              for (;;) {
                if (V === t) break e;
                if (
                  (C === n && ++j === o && (v = h),
                  C === u && ++_ === l && (T = h),
                  (R = V.nextSibling) !== null)
                )
                  break;
                (V = C), (C = V.parentNode);
              }
              V = R;
            }
            n = v === -1 || T === -1 ? null : { start: v, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      _u = { focusedElem: t, selectionRange: n }, Xs = !1, $t = e;
      $t !== null;

    )
      if (
        ((e = $t), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), ($t = t);
      else
        for (; $t !== null; ) {
          switch (((e = $t), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  (o = t[n]), (o.ref.impl = o.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (n = e),
                  (o = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = n.stateNode);
                try {
                  var P = yi(n.type, o);
                  (t = l.getSnapshotBeforeUpdate(P, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = t);
                } catch (at) {
                  wt(n, n.return, at);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Lu(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lu(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), ($t = t);
            break;
          }
          $t = e.return;
        }
  }
  function rm(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        vn(t, n), l & 4 && $a(5, n);
        break;
      case 1:
        if ((vn(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (h) {
              wt(n, n.return, h);
            }
          else {
            var o = yi(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(o, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (h) {
              wt(n, n.return, h);
            }
          }
        l & 64 && em(n), l & 512 && Ia(n, n.return);
        break;
      case 3:
        if ((vn(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Qd(t, e);
          } catch (h) {
            wt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && l & 4 && lm(n);
      case 26:
      case 5:
        vn(t, n), e === null && l & 4 && im(n), l & 512 && Ia(n, n.return);
        break;
      case 12:
        vn(t, n);
        break;
      case 31:
        vn(t, n), l & 4 && cm(t, n);
        break;
      case 13:
        vn(t, n),
          l & 4 && fm(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = G1.bind(null, n)), ox(t, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || yn), !l)) {
          (e = (e !== null && e.memoizedState !== null) || Zt), (o = yn);
          var u = Zt;
          (yn = l),
            (Zt = e) && !u ? xn(t, n, (n.subtreeFlags & 8772) !== 0) : vn(t, n),
            (yn = o),
            (Zt = u);
        }
        break;
      case 30:
        break;
      default:
        vn(t, n);
    }
  }
  function om(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), om(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Yr(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Vt = null,
    me = !1;
  function gn(t, e, n) {
    for (n = n.child; n !== null; ) um(t, e, n), (n = n.sibling);
  }
  function um(t, e, n) {
    if (Se && typeof Se.onCommitFiberUnmount == "function")
      try {
        Se.onCommitFiberUnmount(Aa, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Zt || Ie(n, e),
          gn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Zt || Ie(n, e);
        var l = Vt,
          o = me;
        kn(n.type) && ((Vt = n.stateNode), (me = !1)),
          gn(t, e, n),
          ol(n.stateNode),
          (Vt = l),
          (me = o);
        break;
      case 5:
        Zt || Ie(n, e);
      case 6:
        if (
          ((l = Vt),
          (o = me),
          (Vt = null),
          gn(t, e, n),
          (Vt = l),
          (me = o),
          Vt !== null)
        )
          if (me)
            try {
              (Vt.nodeType === 9
                ? Vt.body
                : Vt.nodeName === "HTML"
                ? Vt.ownerDocument.body
                : Vt
              ).removeChild(n.stateNode);
            } catch (u) {
              wt(n, e, u);
            }
          else
            try {
              Vt.removeChild(n.stateNode);
            } catch (u) {
              wt(n, e, u);
            }
        break;
      case 18:
        Vt !== null &&
          (me
            ? ((t = Vt),
              e0(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              oa(t))
            : e0(Vt, n.stateNode));
        break;
      case 4:
        (l = Vt),
          (o = me),
          (Vt = n.stateNode.containerInfo),
          (me = !0),
          gn(t, e, n),
          (Vt = l),
          (me = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ln(2, n, e), Zt || Ln(4, n, e), gn(t, e, n);
        break;
      case 1:
        Zt ||
          (Ie(n, e),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && nm(n, e, l)),
          gn(t, e, n);
        break;
      case 21:
        gn(t, e, n);
        break;
      case 22:
        (Zt = (l = Zt) || n.memoizedState !== null), gn(t, e, n), (Zt = l);
        break;
      default:
        gn(t, e, n);
    }
  }
  function cm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        oa(t);
      } catch (n) {
        wt(e, e.return, n);
      }
    }
  }
  function fm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        oa(t);
      } catch (n) {
        wt(e, e.return, n);
      }
  }
  function O1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new sm()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new sm()),
          e
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Es(t, e) {
    var n = O1(t);
    e.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var o = k1.bind(null, t, l);
        l.then(o, o);
      }
    });
  }
  function pe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var o = n[l],
          u = t,
          h = e,
          v = h;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (kn(v.type)) {
                (Vt = v.stateNode), (me = !1);
                break t;
              }
              break;
            case 5:
              (Vt = v.stateNode), (me = !1);
              break t;
            case 3:
            case 4:
              (Vt = v.stateNode.containerInfo), (me = !0);
              break t;
          }
          v = v.return;
        }
        if (Vt === null) throw Error(s(160));
        um(u, h, o),
          (Vt = null),
          (me = !1),
          (u = o.alternate),
          u !== null && (u.return = null),
          (o.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) dm(e, t), (e = e.sibling);
  }
  var Xe = null;
  function dm(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pe(e, t),
          ye(t),
          l & 4 && (Ln(3, t, t.return), $a(3, t), Ln(5, t, t.return));
        break;
      case 1:
        pe(e, t),
          ye(t),
          l & 512 && (Zt || n === null || Ie(n, n.return)),
          l & 64 &&
            yn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var o = Xe;
        if (
          (pe(e, t),
          ye(t),
          l & 512 && (Zt || n === null || Ie(n, n.return)),
          l & 4)
        ) {
          var u = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  (l = t.type),
                    (n = t.memoizedProps),
                    (o = o.ownerDocument || o);
                  e: switch (l) {
                    case "title":
                      (u = o.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ma] ||
                          u[ee] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = o.createElement(l)),
                          o.head.insertBefore(
                            u,
                            o.querySelector("head > title")
                          )),
                        le(u, l, n),
                        (u[ee] = t),
                        Wt(u),
                        (l = u);
                      break t;
                    case "link":
                      var h = d0("link", "href", o).get(l + (n.href || ""));
                      if (h) {
                        for (var v = 0; v < h.length; v++)
                          if (
                            ((u = h[v]),
                            u.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              u.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              u.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              u.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            h.splice(v, 1);
                            break e;
                          }
                      }
                      (u = o.createElement(l)),
                        le(u, l, n),
                        o.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (h = d0("meta", "content", o).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (v = 0; v < h.length; v++)
                          if (
                            ((u = h[v]),
                            u.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              u.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              u.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            h.splice(v, 1);
                            break e;
                          }
                      }
                      (u = o.createElement(l)),
                        le(u, l, n),
                        o.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  (u[ee] = t), Wt(u), (l = u);
                }
                t.stateNode = l;
              } else h0(o, t.type, t.stateNode);
            else t.stateNode = f0(o, l, t.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                l === null
                  ? h0(o, t.type, t.stateNode)
                  : f0(o, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                ou(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        pe(e, t),
          ye(t),
          l & 512 && (Zt || n === null || Ie(n, n.return)),
          n !== null && l & 4 && ou(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (pe(e, t),
          ye(t),
          l & 512 && (Zt || n === null || Ie(n, n.return)),
          t.flags & 32)
        ) {
          o = t.stateNode;
          try {
            Ri(o, "");
          } catch (P) {
            wt(t, t.return, P);
          }
        }
        l & 4 &&
          t.stateNode != null &&
          ((o = t.memoizedProps), ou(t, o, n !== null ? n.memoizedProps : o)),
          l & 1024 && (fu = !0);
        break;
      case 6:
        if ((pe(e, t), ye(t), l & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          (l = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = l;
          } catch (P) {
            wt(t, t.return, P);
          }
        }
        break;
      case 3:
        if (
          ((Ys = null),
          (o = Xe),
          (Xe = Us(e.containerInfo)),
          pe(e, t),
          (Xe = o),
          ye(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            oa(e.containerInfo);
          } catch (P) {
            wt(t, t.return, P);
          }
        fu && ((fu = !1), hm(t));
        break;
      case 4:
        (l = Xe),
          (Xe = Us(t.stateNode.containerInfo)),
          pe(e, t),
          ye(t),
          (Xe = l);
        break;
      case 12:
        pe(e, t), ye(t);
        break;
      case 31:
        pe(e, t),
          ye(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Es(t, l)));
        break;
      case 13:
        pe(e, t),
          ye(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Ms = be()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Es(t, l)));
        break;
      case 22:
        o = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          j = yn,
          _ = Zt;
        if (
          ((yn = j || o),
          (Zt = _ || T),
          pe(e, t),
          (Zt = _),
          (yn = j),
          ye(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = o ? e._visibility & -2 : e._visibility | 1,
              o && (n === null || T || yn || Zt || gi(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (((u = T.stateNode), o))
                    (h = u.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none");
                  else {
                    v = T.stateNode;
                    var V = T.memoizedProps.style,
                      C =
                        V != null && V.hasOwnProperty("display")
                          ? V.display
                          : null;
                    v.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (P) {
                  wt(T, T.return, P);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = o ? "" : T.memoizedProps;
                } catch (P) {
                  wt(T, T.return, P);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                T = e;
                try {
                  var R = T.stateNode;
                  o ? n0(R, !0) : n0(T.stateNode, !1);
                } catch (P) {
                  wt(T, T.return, P);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Es(t, n))));
        break;
      case 19:
        pe(e, t),
          ye(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Es(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pe(e, t), ye(t);
    }
  }
  function ye(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (am(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode,
              u = uu(t);
            As(t, u, o);
            break;
          case 5:
            var h = n.stateNode;
            n.flags & 32 && (Ri(h, ""), (n.flags &= -33));
            var v = uu(t);
            As(t, v, h);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
              j = uu(t);
            cu(t, j, T);
            break;
          default:
            throw Error(s(161));
        }
      } catch (_) {
        wt(t, t.return, _);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function hm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        hm(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function vn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) rm(t, e.alternate, e), (e = e.sibling);
  }
  function gi(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ln(4, e, e.return), gi(e);
          break;
        case 1:
          Ie(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && nm(e, e.return, n),
            gi(e);
          break;
        case 27:
          ol(e.stateNode);
        case 26:
        case 5:
          Ie(e, e.return), gi(e);
          break;
        case 22:
          e.memoizedState === null && gi(e);
          break;
        case 30:
          gi(e);
          break;
        default:
          gi(e);
      }
      t = t.sibling;
    }
  }
  function xn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        o = t,
        u = e,
        h = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          xn(o, u, n), $a(4, u);
          break;
        case 1:
          if (
            (xn(o, u, n),
            (l = u),
            (o = l.stateNode),
            typeof o.componentDidMount == "function")
          )
            try {
              o.componentDidMount();
            } catch (j) {
              wt(l, l.return, j);
            }
          if (((l = u), (o = l.updateQueue), o !== null)) {
            var v = l.stateNode;
            try {
              var T = o.shared.hiddenCallbacks;
              if (T !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < T.length; o++)
                  Xd(T[o], v);
            } catch (j) {
              wt(l, l.return, j);
            }
          }
          n && h & 64 && em(u), Ia(u, u.return);
          break;
        case 27:
          lm(u);
        case 26:
        case 5:
          xn(o, u, n), n && l === null && h & 4 && im(u), Ia(u, u.return);
          break;
        case 12:
          xn(o, u, n);
          break;
        case 31:
          xn(o, u, n), n && h & 4 && cm(o, u);
          break;
        case 13:
          xn(o, u, n), n && h & 4 && fm(o, u);
          break;
        case 22:
          u.memoizedState === null && xn(o, u, n), Ia(u, u.return);
          break;
        case 30:
          break;
        default:
          xn(o, u, n);
      }
      e = e.sibling;
    }
  }
  function du(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ha(n));
  }
  function hu(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ha(t));
  }
  function Qe(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) mm(t, e, n, l), (e = e.sibling);
  }
  function mm(t, e, n, l) {
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Qe(t, e, n, l), o & 2048 && $a(9, e);
        break;
      case 1:
        Qe(t, e, n, l);
        break;
      case 3:
        Qe(t, e, n, l),
          o & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ha(t)));
        break;
      case 12:
        if (o & 2048) {
          Qe(t, e, n, l), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              h = u.id,
              v = u.onPostCommit;
            typeof v == "function" &&
              v(
                h,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (T) {
            wt(e, e.return, T);
          }
        } else Qe(t, e, n, l);
        break;
      case 31:
        Qe(t, e, n, l);
        break;
      case 13:
        Qe(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (h = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Qe(t, e, n, l)
              : tl(t, e)
            : u._visibility & 2
            ? Qe(t, e, n, l)
            : ((u._visibility |= 2),
              Wi(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          o & 2048 && du(h, e);
        break;
      case 24:
        Qe(t, e, n, l), o & 2048 && hu(e.alternate, e);
        break;
      default:
        Qe(t, e, n, l);
    }
  }
  function Wi(t, e, n, l, o) {
    for (
      o = o && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var u = t,
        h = e,
        v = n,
        T = l,
        j = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Wi(u, h, v, T, o), $a(8, h);
          break;
        case 23:
          break;
        case 22:
          var _ = h.stateNode;
          h.memoizedState !== null
            ? _._visibility & 2
              ? Wi(u, h, v, T, o)
              : tl(u, h)
            : ((_._visibility |= 2), Wi(u, h, v, T, o)),
            o && j & 2048 && du(h.alternate, h);
          break;
        case 24:
          Wi(u, h, v, T, o), o && j & 2048 && hu(h.alternate, h);
          break;
        default:
          Wi(u, h, v, T, o);
      }
      e = e.sibling;
    }
  }
  function tl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          o = l.flags;
        switch (l.tag) {
          case 22:
            tl(n, l), o & 2048 && du(l.alternate, l);
            break;
          case 24:
            tl(n, l), o & 2048 && hu(l.alternate, l);
            break;
          default:
            tl(n, l);
        }
        e = e.sibling;
      }
  }
  var el = 8192;
  function $i(t, e, n) {
    if (t.subtreeFlags & el)
      for (t = t.child; t !== null; ) pm(t, e, n), (t = t.sibling);
  }
  function pm(t, e, n) {
    switch (t.tag) {
      case 26:
        $i(t, e, n),
          t.flags & el &&
            t.memoizedState !== null &&
            bx(n, Xe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        $i(t, e, n);
        break;
      case 3:
      case 4:
        var l = Xe;
        (Xe = Us(t.stateNode.containerInfo)), $i(t, e, n), (Xe = l);
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = el), (el = 16777216), $i(t, e, n), (el = l))
            : $i(t, e, n));
        break;
      default:
        $i(t, e, n);
    }
  }
  function ym(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function nl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ($t = l), vm(l, t);
        }
      ym(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) gm(t), (t = t.sibling);
  }
  function gm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        nl(t), t.flags & 2048 && Ln(9, t, t.return);
        break;
      case 3:
        nl(t);
        break;
      case 12:
        nl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), ws(t))
          : nl(t);
        break;
      default:
        nl(t);
    }
  }
  function ws(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ($t = l), vm(l, t);
        }
      ym(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Ln(8, e, e.return), ws(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), ws(e));
          break;
        default:
          ws(e);
      }
      t = t.sibling;
    }
  }
  function vm(t, e) {
    for (; $t !== null; ) {
      var n = $t;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ln(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ha(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), ($t = l);
      else
        t: for (n = t; $t !== null; ) {
          l = $t;
          var o = l.sibling,
            u = l.return;
          if ((om(l), l === n)) {
            $t = null;
            break t;
          }
          if (o !== null) {
            (o.return = u), ($t = o);
            break t;
          }
          $t = u;
        }
    }
  }
  var V1 = {
      getCacheForType: function (t) {
        var e = ie(Xt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
      cacheSignal: function () {
        return ie(Xt).controller.signal;
      },
    },
    L1 = typeof WeakMap == "function" ? WeakMap : Map,
    Tt = 0,
    Dt = null,
    ft = null,
    ht = 0,
    Et = 0,
    Ne = null,
    Bn = !1,
    Ii = !1,
    mu = !1,
    bn = 0,
    Bt = 0,
    Un = 0,
    vi = 0,
    pu = 0,
    je = 0,
    ta = 0,
    il = null,
    ge = null,
    yu = !1,
    Ms = 0,
    xm = 0,
    Ns = 1 / 0,
    js = null,
    Hn = null,
    Ft = 0,
    Yn = null,
    ea = null,
    Sn = 0,
    gu = 0,
    vu = null,
    bm = null,
    al = 0,
    xu = null;
  function Ce() {
    return (Tt & 2) !== 0 && ht !== 0 ? ht & -ht : z.T !== null ? wu() : Lf();
  }
  function Sm() {
    if (je === 0)
      if ((ht & 536870912) === 0 || gt) {
        var t = Ll;
        (Ll <<= 1), (Ll & 3932160) === 0 && (Ll = 262144), (je = t);
      } else je = 536870912;
    return (t = we.current), t !== null && (t.flags |= 32), je;
  }
  function ve(t, e, n) {
    ((t === Dt && (Et === 2 || Et === 9)) || t.cancelPendingCommit !== null) &&
      (na(t, 0), qn(t, ht, je, !1)),
      wa(t, n),
      ((Tt & 2) === 0 || t !== Dt) &&
        (t === Dt &&
          ((Tt & 2) === 0 && (vi |= n), Bt === 4 && qn(t, ht, je, !1)),
        tn(t));
  }
  function Tm(t, e, n) {
    if ((Tt & 6) !== 0) throw Error(s(327));
    var l = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Ea(t, e),
      o = l ? H1(t, e) : Su(t, e, !0),
      u = l;
    do {
      if (o === 0) {
        Ii && !l && qn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), u && !B1(n))) {
          (o = Su(t, e, !1)), (u = !1);
          continue;
        }
        if (o === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var h = 0;
          else
            (h = t.pendingLanes & -536870913),
              (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0);
          if (h !== 0) {
            e = h;
            t: {
              var v = t;
              o = il;
              var T = v.current.memoizedState.isDehydrated;
              if ((T && (na(v, h).flags |= 256), (h = Su(v, h, !1)), h !== 2)) {
                if (mu && !T) {
                  (v.errorRecoveryDisabledLanes |= u), (vi |= u), (o = 4);
                  break t;
                }
                (u = ge),
                  (ge = o),
                  u !== null && (ge === null ? (ge = u) : ge.push.apply(ge, u));
              }
              o = h;
            }
            if (((u = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          na(t, 0), qn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((l = t), (u = o), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              qn(l, e, je, !Bn);
              break t;
            case 2:
              ge = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && ((o = Ms + 300 - be()), 10 < o)) {
            if ((qn(l, e, je, !Bn), Ul(l, 0, !0) !== 0)) break t;
            (Sn = e),
              (l.timeoutHandle = Im(
                Am.bind(
                  null,
                  l,
                  n,
                  ge,
                  js,
                  yu,
                  e,
                  je,
                  vi,
                  ta,
                  Bn,
                  u,
                  "Throttled",
                  -0,
                  0
                ),
                o
              ));
            break t;
          }
          Am(l, n, ge, js, yu, e, je, vi, ta, Bn, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    tn(t);
  }
  function Am(t, e, n, l, o, u, h, v, T, j, _, V, C, R) {
    if (
      ((t.timeoutHandle = -1),
      (V = e.subtreeFlags),
      V & 8192 || (V & 16785408) === 16785408)
    ) {
      (V = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sn,
      }),
        pm(e, u, V);
      var P =
        (u & 62914560) === u ? Ms - be() : (u & 4194048) === u ? xm - be() : 0;
      if (((P = Sx(V, P)), P !== null)) {
        (Sn = u),
          (t.cancelPendingCommit = P(
            Rm.bind(null, t, e, u, n, l, o, h, v, T, _, V, null, C, R)
          )),
          qn(t, u, h, !j);
        return;
      }
    }
    Rm(t, e, u, n, l, o, h, v, T);
  }
  function B1(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var o = n[l],
            u = o.getSnapshot;
          o = o.value;
          try {
            if (!Ae(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function qn(t, e, n, l) {
    (e &= ~pu),
      (e &= ~vi),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes);
    for (var o = e; 0 < o; ) {
      var u = 31 - Te(o),
        h = 1 << u;
      (l[u] = -1), (o &= ~h);
    }
    n !== 0 && _f(t, n, e);
  }
  function Cs() {
    return (Tt & 6) === 0 ? (ll(0), !1) : !0;
  }
  function bu() {
    if (ft !== null) {
      if (Et === 0) var t = ft.return;
      else (t = ft), (cn = ui = null), Lo(t), (Ki = null), (qa = 0), (t = ft);
      for (; t !== null; ) tm(t.alternate, t), (t = t.return);
      ft = null;
    }
  }
  function na(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), ix(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (Sn = 0),
      bu(),
      (Dt = t),
      (ft = n = on(t.current, null)),
      (ht = e),
      (Et = 0),
      (Ne = null),
      (Bn = !1),
      (Ii = Ea(t, e)),
      (mu = !1),
      (ta = je = pu = vi = Un = Bt = 0),
      (ge = il = null),
      (yu = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var o = 31 - Te(l),
          u = 1 << o;
        (e |= t[o]), (l &= ~u);
      }
    return (bn = e), Pl(), n;
  }
  function Em(t, e) {
    (rt = null),
      (z.H = Fa),
      e === Qi || e === as
        ? ((e = Yd()), (Et = 3))
        : e === Eo
        ? ((e = Yd()), (Et = 4))
        : (Et =
            e === $o
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Ne = e),
      ft === null && ((Bt = 1), vs(t, Oe(e, t.current)));
  }
  function wm() {
    var t = we.current;
    return t === null
      ? !0
      : (ht & 4194048) === ht
      ? Ue === null
      : (ht & 62914560) === ht || (ht & 536870912) !== 0
      ? t === Ue
      : !1;
  }
  function Mm() {
    var t = z.H;
    return (z.H = Fa), t === null ? Fa : t;
  }
  function Nm() {
    var t = z.A;
    return (z.A = V1), t;
  }
  function Ds() {
    (Bt = 4),
      Bn || ((ht & 4194048) !== ht && we.current !== null) || (Ii = !0),
      ((Un & 134217727) === 0 && (vi & 134217727) === 0) ||
        Dt === null ||
        qn(Dt, ht, je, !1);
  }
  function Su(t, e, n) {
    var l = Tt;
    Tt |= 2;
    var o = Mm(),
      u = Nm();
    (Dt !== t || ht !== e) && ((js = null), na(t, e)), (e = !1);
    var h = Bt;
    t: do
      try {
        if (Et !== 0 && ft !== null) {
          var v = ft,
            T = Ne;
          switch (Et) {
            case 8:
              bu(), (h = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              we.current === null && (e = !0);
              var j = Et;
              if (((Et = 0), (Ne = null), ia(t, v, T, j), n && Ii)) {
                h = 0;
                break t;
              }
              break;
            default:
              (j = Et), (Et = 0), (Ne = null), ia(t, v, T, j);
          }
        }
        U1(), (h = Bt);
        break;
      } catch (_) {
        Em(t, _);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (cn = ui = null),
      (Tt = l),
      (z.H = o),
      (z.A = u),
      ft === null && ((Dt = null), (ht = 0), Pl()),
      h
    );
  }
  function U1() {
    for (; ft !== null; ) jm(ft);
  }
  function H1(t, e) {
    var n = Tt;
    Tt |= 2;
    var l = Mm(),
      o = Nm();
    Dt !== t || ht !== e
      ? ((js = null), (Ns = be() + 500), na(t, e))
      : (Ii = Ea(t, e));
    t: do
      try {
        if (Et !== 0 && ft !== null) {
          e = ft;
          var u = Ne;
          e: switch (Et) {
            case 1:
              (Et = 0), (Ne = null), ia(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Ud(u)) {
                (Et = 0), (Ne = null), Cm(e);
                break;
              }
              (e = function () {
                (Et !== 2 && Et !== 9) || Dt !== t || (Et = 7), tn(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              Et = 7;
              break t;
            case 4:
              Et = 5;
              break t;
            case 7:
              Ud(u)
                ? ((Et = 0), (Ne = null), Cm(e))
                : ((Et = 0), (Ne = null), ia(t, e, u, 7));
              break;
            case 5:
              var h = null;
              switch (ft.tag) {
                case 26:
                  h = ft.memoizedState;
                case 5:
                case 27:
                  var v = ft;
                  if (h ? m0(h) : v.stateNode.complete) {
                    (Et = 0), (Ne = null);
                    var T = v.sibling;
                    if (T !== null) ft = T;
                    else {
                      var j = v.return;
                      j !== null ? ((ft = j), Rs(j)) : (ft = null);
                    }
                    break e;
                  }
              }
              (Et = 0), (Ne = null), ia(t, e, u, 5);
              break;
            case 6:
              (Et = 0), (Ne = null), ia(t, e, u, 6);
              break;
            case 8:
              bu(), (Bt = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        Y1();
        break;
      } catch (_) {
        Em(t, _);
      }
    while (!0);
    return (
      (cn = ui = null),
      (z.H = l),
      (z.A = o),
      (Tt = n),
      ft !== null ? 0 : ((Dt = null), (ht = 0), Pl(), Bt)
    );
  }
  function Y1() {
    for (; ft !== null && !uv(); ) jm(ft);
  }
  function jm(t) {
    var e = $h(t.alternate, t, bn);
    (t.memoizedProps = t.pendingProps), e === null ? Rs(t) : (ft = e);
  }
  function Cm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Kh(n, e, e.pendingProps, e.type, void 0, ht);
        break;
      case 11:
        e = Kh(n, e, e.pendingProps, e.type.render, e.ref, ht);
        break;
      case 5:
        Lo(e);
      default:
        tm(n, e), (e = ft = Nd(e, bn)), (e = $h(n, e, bn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Rs(t) : (ft = e);
  }
  function ia(t, e, n, l) {
    (cn = ui = null), Lo(e), (Ki = null), (qa = 0);
    var o = e.return;
    try {
      if (j1(t, o, e, n, ht)) {
        (Bt = 1), vs(t, Oe(n, t.current)), (ft = null);
        return;
      }
    } catch (u) {
      if (o !== null) throw ((ft = o), u);
      (Bt = 1), vs(t, Oe(n, t.current)), (ft = null);
      return;
    }
    e.flags & 32768
      ? (gt || l === 1
          ? (t = !0)
          : Ii || (ht & 536870912) !== 0
          ? (t = !1)
          : ((Bn = t = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = we.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        Dm(e, t))
      : Rs(e);
  }
  function Rs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Dm(e, Bn);
        return;
      }
      t = e.return;
      var n = R1(e.alternate, e, bn);
      if (n !== null) {
        ft = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    Bt === 0 && (Bt = 5);
  }
  function Dm(t, e) {
    do {
      var n = z1(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ft = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ft = t;
        return;
      }
      ft = t = n;
    } while (t !== null);
    (Bt = 6), (ft = null);
  }
  function Rm(t, e, n, l, o, u, h, v, T) {
    t.cancelPendingCommit = null;
    do zs();
    while (Ft !== 0);
    if ((Tt & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= oo),
        xv(t, n, u, h, v, T),
        t === Dt && ((ft = Dt = null), (ht = 0)),
        (ea = e),
        (Yn = t),
        (Sn = n),
        (gu = u),
        (vu = o),
        (bm = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            X1(Ol, function () {
              return Lm(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = z.T), (z.T = null), (o = Z.p), (Z.p = 2), (h = Tt), (Tt |= 4);
        try {
          _1(t, e, n);
        } finally {
          (Tt = h), (Z.p = o), (z.T = l);
        }
      }
      (Ft = 1), zm(), _m(), Om();
    }
  }
  function zm() {
    if (Ft === 1) {
      Ft = 0;
      var t = Yn,
        e = ea,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = z.T), (z.T = null);
        var l = Z.p;
        Z.p = 2;
        var o = Tt;
        Tt |= 4;
        try {
          dm(e, t);
          var u = _u,
            h = vd(t.containerInfo),
            v = u.focusedElem,
            T = u.selectionRange;
          if (
            h !== v &&
            v &&
            v.ownerDocument &&
            gd(v.ownerDocument.documentElement, v)
          ) {
            if (T !== null && io(v)) {
              var j = T.start,
                _ = T.end;
              if ((_ === void 0 && (_ = j), "selectionStart" in v))
                (v.selectionStart = j),
                  (v.selectionEnd = Math.min(_, v.value.length));
              else {
                var V = v.ownerDocument || document,
                  C = (V && V.defaultView) || window;
                if (C.getSelection) {
                  var R = C.getSelection(),
                    P = v.textContent.length,
                    at = Math.min(T.start, P),
                    jt = T.end === void 0 ? at : Math.min(T.end, P);
                  !R.extend && at > jt && ((h = jt), (jt = at), (at = h));
                  var w = yd(v, at),
                    A = yd(v, jt);
                  if (
                    w &&
                    A &&
                    (R.rangeCount !== 1 ||
                      R.anchorNode !== w.node ||
                      R.anchorOffset !== w.offset ||
                      R.focusNode !== A.node ||
                      R.focusOffset !== A.offset)
                  ) {
                    var N = V.createRange();
                    N.setStart(w.node, w.offset),
                      R.removeAllRanges(),
                      at > jt
                        ? (R.addRange(N), R.extend(A.node, A.offset))
                        : (N.setEnd(A.node, A.offset), R.addRange(N));
                  }
                }
              }
            }
            for (V = [], R = v; (R = R.parentNode); )
              R.nodeType === 1 &&
                V.push({ element: R, left: R.scrollLeft, top: R.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < V.length;
              v++
            ) {
              var O = V[v];
              (O.element.scrollLeft = O.left), (O.element.scrollTop = O.top);
            }
          }
          (Xs = !!zu), (_u = zu = null);
        } finally {
          (Tt = o), (Z.p = l), (z.T = n);
        }
      }
      (t.current = e), (Ft = 2);
    }
  }
  function _m() {
    if (Ft === 2) {
      Ft = 0;
      var t = Yn,
        e = ea,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = z.T), (z.T = null);
        var l = Z.p;
        Z.p = 2;
        var o = Tt;
        Tt |= 4;
        try {
          rm(t, e.alternate, e);
        } finally {
          (Tt = o), (Z.p = l), (z.T = n);
        }
      }
      Ft = 3;
    }
  }
  function Om() {
    if (Ft === 4 || Ft === 3) {
      (Ft = 0), cv();
      var t = Yn,
        e = ea,
        n = Sn,
        l = bm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Ft = 5)
        : ((Ft = 0), (ea = Yn = null), Vm(t, t.pendingLanes));
      var o = t.pendingLanes;
      if (
        (o === 0 && (Hn = null),
        Ur(n),
        (e = e.stateNode),
        Se && typeof Se.onCommitFiberRoot == "function")
      )
        try {
          Se.onCommitFiberRoot(Aa, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (e = z.T), (o = Z.p), (Z.p = 2), (z.T = null);
        try {
          for (var u = t.onRecoverableError, h = 0; h < l.length; h++) {
            var v = l[h];
            u(v.value, { componentStack: v.stack });
          }
        } finally {
          (z.T = e), (Z.p = o);
        }
      }
      (Sn & 3) !== 0 && zs(),
        tn(t),
        (o = t.pendingLanes),
        (n & 261930) !== 0 && (o & 42) !== 0
          ? t === xu
            ? al++
            : ((al = 0), (xu = t))
          : (al = 0),
        ll(0);
    }
  }
  function Vm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ha(e)));
  }
  function zs() {
    return zm(), _m(), Om(), Lm();
  }
  function Lm() {
    if (Ft !== 5) return !1;
    var t = Yn,
      e = gu;
    gu = 0;
    var n = Ur(Sn),
      l = z.T,
      o = Z.p;
    try {
      (Z.p = 32 > n ? 32 : n), (z.T = null), (n = vu), (vu = null);
      var u = Yn,
        h = Sn;
      if (((Ft = 0), (ea = Yn = null), (Sn = 0), (Tt & 6) !== 0))
        throw Error(s(331));
      var v = Tt;
      if (
        ((Tt |= 4),
        gm(u.current),
        mm(u, u.current, h, n),
        (Tt = v),
        ll(0, !1),
        Se && typeof Se.onPostCommitFiberRoot == "function")
      )
        try {
          Se.onPostCommitFiberRoot(Aa, u);
        } catch {}
      return !0;
    } finally {
      (Z.p = o), (z.T = l), Vm(t, e);
    }
  }
  function Bm(t, e, n) {
    (e = Oe(n, e)),
      (e = Wo(t.stateNode, e, 2)),
      (t = _n(t, e, 2)),
      t !== null && (wa(t, 2), tn(t));
  }
  function wt(t, e, n) {
    if (t.tag === 3) Bm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Bm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Hn === null || !Hn.has(l)))
          ) {
            (t = Oe(n, t)),
              (n = Uh(2)),
              (l = _n(e, n, 2)),
              l !== null && (Hh(n, l, e, t), wa(l, 2), tn(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function Tu(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new L1();
      var o = new Set();
      l.set(e, o);
    } else (o = l.get(e)), o === void 0 && ((o = new Set()), l.set(e, o));
    o.has(n) ||
      ((mu = !0), o.add(n), (t = q1.bind(null, t, e, n)), e.then(t, t));
  }
  function q1(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Dt === t &&
        (ht & n) === n &&
        (Bt === 4 || (Bt === 3 && (ht & 62914560) === ht && 300 > be() - Ms)
          ? (Tt & 2) === 0 && na(t, 0)
          : (pu |= n),
        ta === ht && (ta = 0)),
      tn(t);
  }
  function Um(t, e) {
    e === 0 && (e = zf()), (t = si(t, e)), t !== null && (wa(t, e), tn(t));
  }
  function G1(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Um(t, n);
  }
  function k1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode,
          o = t.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(e), Um(t, n);
  }
  function X1(t, e) {
    return Or(t, e);
  }
  var _s = null,
    aa = null,
    Au = !1,
    Os = !1,
    Eu = !1,
    Gn = 0;
  function tn(t) {
    t !== aa &&
      t.next === null &&
      (aa === null ? (_s = aa = t) : (aa = aa.next = t)),
      (Os = !0),
      Au || ((Au = !0), K1());
  }
  function ll(t, e) {
    if (!Eu && Os) {
      Eu = !0;
      do
        for (var n = !1, l = _s; l !== null; ) {
          if (t !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var h = l.suspendedLanes,
                v = l.pingedLanes;
              (u = (1 << (31 - Te(42 | t) + 1)) - 1),
                (u &= o & ~(h & ~v)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((n = !0), Gm(l, u));
          } else
            (u = ht),
              (u = Ul(
                l,
                l === Dt ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ea(l, u) || ((n = !0), Gm(l, u));
          l = l.next;
        }
      while (n);
      Eu = !1;
    }
  }
  function Q1() {
    Hm();
  }
  function Hm() {
    Os = Au = !1;
    var t = 0;
    Gn !== 0 && nx() && (t = Gn);
    for (var e = be(), n = null, l = _s; l !== null; ) {
      var o = l.next,
        u = Ym(l, e);
      u === 0
        ? ((l.next = null),
          n === null ? (_s = o) : (n.next = o),
          o === null && (aa = n))
        : ((n = l), (t !== 0 || (u & 3) !== 0) && (Os = !0)),
        (l = o);
    }
    (Ft !== 0 && Ft !== 5) || ll(t), Gn !== 0 && (Gn = 0);
  }
  function Ym(t, e) {
    for (
      var n = t.suspendedLanes,
        l = t.pingedLanes,
        o = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var h = 31 - Te(u),
        v = 1 << h,
        T = o[h];
      T === -1
        ? ((v & n) === 0 || (v & l) !== 0) && (o[h] = vv(v, e))
        : T <= e && (t.expiredLanes |= v),
        (u &= ~v);
    }
    if (
      ((e = Dt),
      (n = ht),
      (n = Ul(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (l = t.callbackNode),
      n === 0 ||
        (t === e && (Et === 2 || Et === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Vr(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Ea(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && Vr(l), Ur(n))) {
        case 2:
        case 8:
          n = Df;
          break;
        case 32:
          n = Ol;
          break;
        case 268435456:
          n = Rf;
          break;
        default:
          n = Ol;
      }
      return (
        (l = qm.bind(null, t)),
        (n = Or(n, l)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      l !== null && l !== null && Vr(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function qm(t, e) {
    if (Ft !== 0 && Ft !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (zs() && t.callbackNode !== n) return null;
    var l = ht;
    return (
      (l = Ul(
        t,
        t === Dt ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Tm(t, l, e),
          Ym(t, be()),
          t.callbackNode != null && t.callbackNode === n
            ? qm.bind(null, t)
            : null)
    );
  }
  function Gm(t, e) {
    if (zs()) return null;
    Tm(t, e, !0);
  }
  function K1() {
    ax(function () {
      (Tt & 6) !== 0 ? Or(Cf, Q1) : Hm();
    });
  }
  function wu() {
    if (Gn === 0) {
      var t = ki;
      t === 0 && ((t = Vl), (Vl <<= 1), (Vl & 261888) === 0 && (Vl = 256)),
        (Gn = t);
    }
    return Gn;
  }
  function km(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Gl("" + t);
  }
  function Xm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Z1(t, e, n, l, o) {
    if (e === "submit" && n && n.stateNode === o) {
      var u = km((o[de] || null).action),
        h = l.submitter;
      h &&
        ((e = (e = h[de] || null)
          ? km(e.formAction)
          : h.getAttribute("formAction")),
        e !== null && ((u = e), (h = null)));
      var v = new Kl("action", "action", null, l, o);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Gn !== 0) {
                  var T = h ? Xm(o, h) : new FormData(o);
                  Qo(
                    n,
                    { pending: !0, data: T, method: o.method, action: u },
                    null,
                    T
                  );
                }
              } else
                typeof u == "function" &&
                  (v.preventDefault(),
                  (T = h ? Xm(o, h) : new FormData(o)),
                  Qo(
                    n,
                    { pending: !0, data: T, method: o.method, action: u },
                    u,
                    T
                  ));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var Mu = 0; Mu < ro.length; Mu++) {
    var Nu = ro[Mu],
      J1 = Nu.toLowerCase(),
      F1 = Nu[0].toUpperCase() + Nu.slice(1);
    ke(J1, "on" + F1);
  }
  ke(Sd, "onAnimationEnd"),
    ke(Td, "onAnimationIteration"),
    ke(Ad, "onAnimationStart"),
    ke("dblclick", "onDoubleClick"),
    ke("focusin", "onFocus"),
    ke("focusout", "onBlur"),
    ke(f1, "onTransitionRun"),
    ke(d1, "onTransitionStart"),
    ke(h1, "onTransitionCancel"),
    ke(Ed, "onTransitionEnd"),
    Ci("onMouseEnter", ["mouseout", "mouseover"]),
    Ci("onMouseLeave", ["mouseout", "mouseover"]),
    Ci("onPointerEnter", ["pointerout", "pointerover"]),
    Ci("onPointerLeave", ["pointerout", "pointerover"]),
    ni(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ni(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ni("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ni(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ni(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ni(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var sl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    P1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(sl)
    );
  function Qm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        o = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var h = l.length - 1; 0 <= h; h--) {
            var v = l[h],
              T = v.instance,
              j = v.currentTarget;
            if (((v = v.listener), T !== u && o.isPropagationStopped()))
              break t;
            (u = v), (o.currentTarget = j);
            try {
              u(o);
            } catch (_) {
              Fl(_);
            }
            (o.currentTarget = null), (u = T);
          }
        else
          for (h = 0; h < l.length; h++) {
            if (
              ((v = l[h]),
              (T = v.instance),
              (j = v.currentTarget),
              (v = v.listener),
              T !== u && o.isPropagationStopped())
            )
              break t;
            (u = v), (o.currentTarget = j);
            try {
              u(o);
            } catch (_) {
              Fl(_);
            }
            (o.currentTarget = null), (u = T);
          }
      }
    }
  }
  function dt(t, e) {
    var n = e[Hr];
    n === void 0 && (n = e[Hr] = new Set());
    var l = t + "__bubble";
    n.has(l) || (Km(e, t, 2, !1), n.add(l));
  }
  function ju(t, e, n) {
    var l = 0;
    e && (l |= 4), Km(n, t, l, e);
  }
  var Vs = "_reactListening" + Math.random().toString(36).slice(2);
  function Cu(t) {
    if (!t[Vs]) {
      (t[Vs] = !0),
        Hf.forEach(function (n) {
          n !== "selectionchange" && (P1.has(n) || ju(n, !1, t), ju(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Vs] || ((e[Vs] = !0), ju("selectionchange", !1, e));
    }
  }
  function Km(t, e, n, l) {
    switch (S0(e)) {
      case 2:
        var o = Ex;
        break;
      case 8:
        o = wx;
        break;
      default:
        o = Xu;
    }
    (n = o.bind(null, e, n, t)),
      (o = void 0),
      !Jr ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (o = !0),
      l
        ? o !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: o })
          : t.addEventListener(e, n, !0)
        : o !== void 0
        ? t.addEventListener(e, n, { passive: o })
        : t.addEventListener(e, n, !1);
  }
  function Du(t, e, n, l, o) {
    var u = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var h = l.tag;
        if (h === 3 || h === 4) {
          var v = l.stateNode.containerInfo;
          if (v === o) break;
          if (h === 4)
            for (h = l.return; h !== null; ) {
              var T = h.tag;
              if ((T === 3 || T === 4) && h.stateNode.containerInfo === o)
                return;
              h = h.return;
            }
          for (; v !== null; ) {
            if (((h = Mi(v)), h === null)) return;
            if (((T = h.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              l = u = h;
              continue t;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    Wf(function () {
      var j = u,
        _ = Kr(n),
        V = [];
      t: {
        var C = wd.get(t);
        if (C !== void 0) {
          var R = Kl,
            P = t;
          switch (t) {
            case "keypress":
              if (Xl(n) === 0) break t;
            case "keydown":
            case "keyup":
              R = kv;
              break;
            case "focusin":
              (P = "focus"), (R = $r);
              break;
            case "focusout":
              (P = "blur"), (R = $r);
              break;
            case "beforeblur":
            case "afterblur":
              R = $r;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = td;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = Rv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = Kv;
              break;
            case Sd:
            case Td:
            case Ad:
              R = Ov;
              break;
            case Ed:
              R = Jv;
              break;
            case "scroll":
            case "scrollend":
              R = Cv;
              break;
            case "wheel":
              R = Pv;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Lv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = nd;
              break;
            case "toggle":
            case "beforetoggle":
              R = $v;
          }
          var at = (e & 4) !== 0,
            jt = !at && (t === "scroll" || t === "scrollend"),
            w = at ? (C !== null ? C + "Capture" : null) : C;
          at = [];
          for (var A = j, N; A !== null; ) {
            var O = A;
            if (
              ((N = O.stateNode),
              (O = O.tag),
              (O !== 5 && O !== 26 && O !== 27) ||
                N === null ||
                w === null ||
                ((O = ja(A, w)), O != null && at.push(rl(A, O, N))),
              jt)
            )
              break;
            A = A.return;
          }
          0 < at.length &&
            ((C = new R(C, P, null, n, _)),
            V.push({ event: C, listeners: at }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((C = t === "mouseover" || t === "pointerover"),
            (R = t === "mouseout" || t === "pointerout"),
            C &&
              n !== Qr &&
              (P = n.relatedTarget || n.fromElement) &&
              (Mi(P) || P[wi]))
          )
            break t;
          if (
            (R || C) &&
            ((C =
              _.window === _
                ? _
                : (C = _.ownerDocument)
                ? C.defaultView || C.parentWindow
                : window),
            R
              ? ((P = n.relatedTarget || n.toElement),
                (R = j),
                (P = P ? Mi(P) : null),
                P !== null &&
                  ((jt = d(P)),
                  (at = P.tag),
                  P !== jt || (at !== 5 && at !== 27 && at !== 6)) &&
                  (P = null))
              : ((R = null), (P = j)),
            R !== P)
          ) {
            if (
              ((at = td),
              (O = "onMouseLeave"),
              (w = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((at = nd),
                (O = "onPointerLeave"),
                (w = "onPointerEnter"),
                (A = "pointer")),
              (jt = R == null ? C : Na(R)),
              (N = P == null ? C : Na(P)),
              (C = new at(O, A + "leave", R, n, _)),
              (C.target = jt),
              (C.relatedTarget = N),
              (O = null),
              Mi(_) === j &&
                ((at = new at(w, A + "enter", P, n, _)),
                (at.target = N),
                (at.relatedTarget = jt),
                (O = at)),
              (jt = O),
              R && P)
            )
              e: {
                for (at = W1, w = R, A = P, N = 0, O = w; O; O = at(O)) N++;
                O = 0;
                for (var it = A; it; it = at(it)) O++;
                for (; 0 < N - O; ) (w = at(w)), N--;
                for (; 0 < O - N; ) (A = at(A)), O--;
                for (; N--; ) {
                  if (w === A || (A !== null && w === A.alternate)) {
                    at = w;
                    break e;
                  }
                  (w = at(w)), (A = at(A));
                }
                at = null;
              }
            else at = null;
            R !== null && Zm(V, C, R, at, !1),
              P !== null && jt !== null && Zm(V, jt, P, at, !0);
          }
        }
        t: {
          if (
            ((C = j ? Na(j) : window),
            (R = C.nodeName && C.nodeName.toLowerCase()),
            R === "select" || (R === "input" && C.type === "file"))
          )
            var bt = cd;
          else if (od(C))
            if (fd) bt = o1;
            else {
              bt = s1;
              var et = l1;
            }
          else
            (R = C.nodeName),
              !R ||
              R.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? j && Xr(j.elementType) && (bt = cd)
                : (bt = r1);
          if (bt && (bt = bt(t, j))) {
            ud(V, bt, n, _);
            break t;
          }
          et && et(t, C, j),
            t === "focusout" &&
              j &&
              C.type === "number" &&
              j.memoizedProps.value != null &&
              kr(C, "number", C.value);
        }
        switch (((et = j ? Na(j) : window), t)) {
          case "focusin":
            (od(et) || et.contentEditable === "true") &&
              ((Vi = et), (ao = j), (La = null));
            break;
          case "focusout":
            La = ao = Vi = null;
            break;
          case "mousedown":
            lo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (lo = !1), xd(V, n, _);
            break;
          case "selectionchange":
            if (c1) break;
          case "keydown":
          case "keyup":
            xd(V, n, _);
        }
        var ut;
        if (to)
          t: {
            switch (t) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          Oi
            ? sd(t, n) && (mt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (mt = "onCompositionStart");
        mt &&
          (id &&
            n.locale !== "ko" &&
            (Oi || mt !== "onCompositionStart"
              ? mt === "onCompositionEnd" && Oi && (ut = $f())
              : ((Mn = _),
                (Fr = "value" in Mn ? Mn.value : Mn.textContent),
                (Oi = !0))),
          (et = Ls(j, mt)),
          0 < et.length &&
            ((mt = new ed(mt, t, null, n, _)),
            V.push({ event: mt, listeners: et }),
            ut
              ? (mt.data = ut)
              : ((ut = rd(n)), ut !== null && (mt.data = ut)))),
          (ut = t1 ? e1(t, n) : n1(t, n)) &&
            ((mt = Ls(j, "onBeforeInput")),
            0 < mt.length &&
              ((et = new ed("onBeforeInput", "beforeinput", null, n, _)),
              V.push({ event: et, listeners: mt }),
              (et.data = ut))),
          Z1(V, t, j, n, _);
      }
      Qm(V, e);
    });
  }
  function rl(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Ls(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var o = t,
        u = o.stateNode;
      if (
        ((o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          u === null ||
          ((o = ja(t, n)),
          o != null && l.unshift(rl(t, o, u)),
          (o = ja(t, e)),
          o != null && l.push(rl(t, o, u))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function W1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Zm(t, e, n, l, o) {
    for (var u = e._reactName, h = []; n !== null && n !== l; ) {
      var v = n,
        T = v.alternate,
        j = v.stateNode;
      if (((v = v.tag), T !== null && T === l)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        j === null ||
        ((T = j),
        o
          ? ((j = ja(n, u)), j != null && h.unshift(rl(n, j, T)))
          : o || ((j = ja(n, u)), j != null && h.push(rl(n, j, T)))),
        (n = n.return);
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var $1 = /\r\n?/g,
    I1 = /\u0000|\uFFFD/g;
  function Jm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        $1,
        `
`
      )
      .replace(I1, "");
  }
  function Fm(t, e) {
    return (e = Jm(e)), Jm(t) === e;
  }
  function Nt(t, e, n, l, o, u) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || Ri(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            Ri(t, "" + l);
        break;
      case "className":
        Yl(t, "class", l);
        break;
      case "tabIndex":
        Yl(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yl(t, n, l);
        break;
      case "style":
        Ff(t, l, u);
        break;
      case "data":
        if (e !== "object") {
          Yl(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (l = Gl("" + l)), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (n === "formAction"
              ? (e !== "input" && Nt(t, e, "name", o.name, o, null),
                Nt(t, e, "formEncType", o.formEncType, o, null),
                Nt(t, e, "formMethod", o.formMethod, o, null),
                Nt(t, e, "formTarget", o.formTarget, o, null))
              : (Nt(t, e, "encType", o.encType, o, null),
                Nt(t, e, "method", o.method, o, null),
                Nt(t, e, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (l = Gl("" + l)), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = sn);
        break;
      case "onScroll":
        l != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && dt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (o.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Gl("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "" + l)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(n, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case "popover":
        dt("beforetoggle", t), dt("toggle", t), Hl(t, "popover", l);
        break;
      case "xlinkActuate":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Hl(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Nv.get(n) || n), Hl(t, n, l));
    }
  }
  function Ru(t, e, n, l, o, u) {
    switch (n) {
      case "style":
        Ff(t, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (o.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Ri(t, l)
          : (typeof l == "number" || typeof l == "bigint") && Ri(t, "" + l);
        break;
      case "onScroll":
        l != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && dt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = sn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Yf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((o = n.endsWith("Capture")),
              (e = n.slice(2, o ? n.length - 7 : void 0)),
              (u = t[de] || null),
              (u = u != null ? u[n] : null),
              typeof u == "function" && t.removeEventListener(e, u, o),
              typeof l == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, o);
              break t;
            }
            n in t
              ? (t[n] = l)
              : l === !0
              ? t.setAttribute(n, "")
              : Hl(t, n, l);
          }
    }
  }
  function le(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        dt("error", t), dt("load", t);
        var l = !1,
          o = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var h = n[u];
            if (h != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  Nt(t, e, u, h, n, null);
              }
          }
        o && Nt(t, e, "srcSet", n.srcSet, n, null),
          l && Nt(t, e, "src", n.src, n, null);
        return;
      case "input":
        dt("invalid", t);
        var v = (u = h = o = null),
          T = null,
          j = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var _ = n[l];
            if (_ != null)
              switch (l) {
                case "name":
                  o = _;
                  break;
                case "type":
                  h = _;
                  break;
                case "checked":
                  T = _;
                  break;
                case "defaultChecked":
                  j = _;
                  break;
                case "value":
                  u = _;
                  break;
                case "defaultValue":
                  v = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null) throw Error(s(137, e));
                  break;
                default:
                  Nt(t, e, l, _, n, null);
              }
          }
        Qf(t, u, v, T, j, h, o, !1);
        return;
      case "select":
        dt("invalid", t), (l = h = u = null);
        for (o in n)
          if (n.hasOwnProperty(o) && ((v = n[o]), v != null))
            switch (o) {
              case "value":
                u = v;
                break;
              case "defaultValue":
                h = v;
                break;
              case "multiple":
                l = v;
              default:
                Nt(t, e, o, v, n, null);
            }
        (e = u),
          (n = h),
          (t.multiple = !!l),
          e != null ? Di(t, !!l, e, !1) : n != null && Di(t, !!l, n, !0);
        return;
      case "textarea":
        dt("invalid", t), (u = o = l = null);
        for (h in n)
          if (n.hasOwnProperty(h) && ((v = n[h]), v != null))
            switch (h) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                o = v;
                break;
              case "children":
                u = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(s(91));
                break;
              default:
                Nt(t, e, h, v, n, null);
            }
        Zf(t, l, o, u);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && ((l = n[T]), l != null))
            switch (T) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Nt(t, e, T, l, n, null);
            }
        return;
      case "dialog":
        dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < sl.length; l++) dt(sl[l], t);
        break;
      case "image":
        dt("error", t), dt("load", t);
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        dt("error", t), dt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in n)
          if (n.hasOwnProperty(j) && ((l = n[j]), l != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                Nt(t, e, j, l, n, null);
            }
        return;
      default:
        if (Xr(e)) {
          for (_ in n)
            n.hasOwnProperty(_) &&
              ((l = n[_]), l !== void 0 && Ru(t, e, _, l, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((l = n[v]), l != null && Nt(t, e, v, l, n, null));
  }
  function tx(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null,
          u = null,
          h = null,
          v = null,
          T = null,
          j = null,
          _ = null;
        for (R in n) {
          var V = n[R];
          if (n.hasOwnProperty(R) && V != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = V;
              default:
                l.hasOwnProperty(R) || Nt(t, e, R, null, l, V);
            }
        }
        for (var C in l) {
          var R = l[C];
          if (((V = n[C]), l.hasOwnProperty(C) && (R != null || V != null)))
            switch (C) {
              case "type":
                u = R;
                break;
              case "name":
                o = R;
                break;
              case "checked":
                j = R;
                break;
              case "defaultChecked":
                _ = R;
                break;
              case "value":
                h = R;
                break;
              case "defaultValue":
                v = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(s(137, e));
                break;
              default:
                R !== V && Nt(t, e, C, R, l, V);
            }
        }
        Gr(t, h, v, T, j, _, u, o);
        return;
      case "select":
        R = h = v = C = null;
        for (u in n)
          if (((T = n[u]), n.hasOwnProperty(u) && T != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                R = T;
              default:
                l.hasOwnProperty(u) || Nt(t, e, u, null, l, T);
            }
        for (o in l)
          if (
            ((u = l[o]),
            (T = n[o]),
            l.hasOwnProperty(o) && (u != null || T != null))
          )
            switch (o) {
              case "value":
                C = u;
                break;
              case "defaultValue":
                v = u;
                break;
              case "multiple":
                h = u;
              default:
                u !== T && Nt(t, e, o, u, l, T);
            }
        (e = v),
          (n = h),
          (l = R),
          C != null
            ? Di(t, !!n, C, !1)
            : !!l != !!n &&
              (e != null ? Di(t, !!n, e, !0) : Di(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        R = C = null;
        for (v in n)
          if (
            ((o = n[v]),
            n.hasOwnProperty(v) && o != null && !l.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Nt(t, e, v, null, l, o);
            }
        for (h in l)
          if (
            ((o = l[h]),
            (u = n[h]),
            l.hasOwnProperty(h) && (o != null || u != null))
          )
            switch (h) {
              case "value":
                C = o;
                break;
              case "defaultValue":
                R = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(s(91));
                break;
              default:
                o !== u && Nt(t, e, h, o, l, u);
            }
        Kf(t, C, R);
        return;
      case "option":
        for (var P in n)
          if (
            ((C = n[P]),
            n.hasOwnProperty(P) && C != null && !l.hasOwnProperty(P))
          )
            switch (P) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Nt(t, e, P, null, l, C);
            }
        for (T in l)
          if (
            ((C = l[T]),
            (R = n[T]),
            l.hasOwnProperty(T) && C !== R && (C != null || R != null))
          )
            switch (T) {
              case "selected":
                t.selected =
                  C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                Nt(t, e, T, C, l, R);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var at in n)
          (C = n[at]),
            n.hasOwnProperty(at) &&
              C != null &&
              !l.hasOwnProperty(at) &&
              Nt(t, e, at, null, l, C);
        for (j in l)
          if (
            ((C = l[j]),
            (R = n[j]),
            l.hasOwnProperty(j) && C !== R && (C != null || R != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(s(137, e));
                break;
              default:
                Nt(t, e, j, C, l, R);
            }
        return;
      default:
        if (Xr(e)) {
          for (var jt in n)
            (C = n[jt]),
              n.hasOwnProperty(jt) &&
                C !== void 0 &&
                !l.hasOwnProperty(jt) &&
                Ru(t, e, jt, void 0, l, C);
          for (_ in l)
            (C = l[_]),
              (R = n[_]),
              !l.hasOwnProperty(_) ||
                C === R ||
                (C === void 0 && R === void 0) ||
                Ru(t, e, _, C, l, R);
          return;
        }
    }
    for (var w in n)
      (C = n[w]),
        n.hasOwnProperty(w) &&
          C != null &&
          !l.hasOwnProperty(w) &&
          Nt(t, e, w, null, l, C);
    for (V in l)
      (C = l[V]),
        (R = n[V]),
        !l.hasOwnProperty(V) ||
          C === R ||
          (C == null && R == null) ||
          Nt(t, e, V, C, l, R);
  }
  function Pm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function ex() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var o = n[l],
          u = o.transferSize,
          h = o.initiatorType,
          v = o.duration;
        if (u && v && Pm(h)) {
          for (h = 0, v = o.responseEnd, l += 1; l < n.length; l++) {
            var T = n[l],
              j = T.startTime;
            if (j > v) break;
            var _ = T.transferSize,
              V = T.initiatorType;
            _ &&
              Pm(V) &&
              ((T = T.responseEnd), (h += _ * (T < v ? 1 : (v - j) / (T - j))));
          }
          if ((--l, (e += (8 * (u + h)) / (o.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var zu = null,
    _u = null;
  function Bs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Wm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $m(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Ou(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vu = null;
  function nx() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Vu
        ? !1
        : ((Vu = t), !0)
      : ((Vu = null), !1);
  }
  var Im = typeof setTimeout == "function" ? setTimeout : void 0,
    ix = typeof clearTimeout == "function" ? clearTimeout : void 0,
    t0 = typeof Promise == "function" ? Promise : void 0,
    ax =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof t0 < "u"
        ? function (t) {
            return t0.resolve(null).then(t).catch(lx);
          }
        : Im;
  function lx(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function kn(t) {
    return t === "head";
  }
  function e0(t, e) {
    var n = e,
      l = 0;
    do {
      var o = n.nextSibling;
      if ((t.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            t.removeChild(o), oa(e);
            return;
          }
          l--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          l++;
        else if (n === "html") ol(t.ownerDocument.documentElement);
        else if (n === "head") {
          (n = t.ownerDocument.head), ol(n);
          for (var u = n.firstChild; u; ) {
            var h = u.nextSibling,
              v = u.nodeName;
            u[Ma] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(u),
              (u = h);
          }
        } else n === "body" && ol(t.ownerDocument.body);
      n = o;
    } while (n);
    oa(e);
  }
  function n0(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = l;
    } while (n);
  }
  function Lu(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lu(n), Yr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function sx(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var o = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Ma])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== o.rel ||
                t.getAttribute("href") !==
                  (o.href == null || o.href === "" ? null : o.href) ||
                t.getAttribute("crossorigin") !==
                  (o.crossOrigin == null ? null : o.crossOrigin) ||
                t.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (o.src == null ? null : o.src) ||
                  t.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  t.getAttribute("crossorigin") !==
                    (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = He(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function rx(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = He(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function i0(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = He(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Bu(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Uu(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function ox(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var l = function () {
        e(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), (t._reactRetry = l);
    }
  }
  function He(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Hu = null;
  function a0(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return He(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function l0(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function s0(t, e, n) {
    switch (((e = Bs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function ol(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Yr(t);
  }
  var Ye = new Map(),
    r0 = new Set();
  function Us(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Tn = Z.d;
  Z.d = { f: ux, r: cx, D: fx, C: dx, L: hx, m: mx, X: yx, S: px, M: gx };
  function ux() {
    var t = Tn.f(),
      e = Cs();
    return t || e;
  }
  function cx(t) {
    var e = Ni(t);
    e !== null && e.tag === 5 && e.type === "form" ? Eh(e) : Tn.r(t);
  }
  var la = typeof document > "u" ? null : document;
  function o0(t, e, n) {
    var l = la;
    if (l && typeof e == "string" && e) {
      var o = ze(e);
      (o = 'link[rel="' + t + '"][href="' + o + '"]'),
        typeof n == "string" && (o += '[crossorigin="' + n + '"]'),
        r0.has(o) ||
          (r0.add(o),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(o) === null &&
            ((e = l.createElement("link")),
            le(e, "link", t),
            Wt(e),
            l.head.appendChild(e)));
    }
  }
  function fx(t) {
    Tn.D(t), o0("dns-prefetch", t, null);
  }
  function dx(t, e) {
    Tn.C(t, e), o0("preconnect", t, e);
  }
  function hx(t, e, n) {
    Tn.L(t, e, n);
    var l = la;
    if (l && t && e) {
      var o = 'link[rel="preload"][as="' + ze(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((o += '[imagesrcset="' + ze(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (o += '[imagesizes="' + ze(n.imageSizes) + '"]'))
        : (o += '[href="' + ze(t) + '"]');
      var u = o;
      switch (e) {
        case "style":
          u = sa(t);
          break;
        case "script":
          u = ra(t);
      }
      Ye.has(u) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Ye.set(u, t),
        l.querySelector(o) !== null ||
          (e === "style" && l.querySelector(ul(u))) ||
          (e === "script" && l.querySelector(cl(u))) ||
          ((e = l.createElement("link")),
          le(e, "link", t),
          Wt(e),
          l.head.appendChild(e)));
    }
  }
  function mx(t, e) {
    Tn.m(t, e);
    var n = la;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        o =
          'link[rel="modulepreload"][as="' + ze(l) + '"][href="' + ze(t) + '"]',
        u = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ra(t);
      }
      if (
        !Ye.has(u) &&
        ((t = b({ rel: "modulepreload", href: t }, e)),
        Ye.set(u, t),
        n.querySelector(o) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(cl(u))) return;
        }
        (l = n.createElement("link")),
          le(l, "link", t),
          Wt(l),
          n.head.appendChild(l);
      }
    }
  }
  function px(t, e, n) {
    Tn.S(t, e, n);
    var l = la;
    if (l && t) {
      var o = ji(l).hoistableStyles,
        u = sa(t);
      e = e || "default";
      var h = o.get(u);
      if (!h) {
        var v = { loading: 0, preload: null };
        if ((h = l.querySelector(ul(u)))) v.loading = 5;
        else {
          (t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ye.get(u)) && Yu(t, n);
          var T = (h = l.createElement("link"));
          Wt(T),
            le(T, "link", t),
            (T._p = new Promise(function (j, _) {
              (T.onload = j), (T.onerror = _);
            })),
            T.addEventListener("load", function () {
              v.loading |= 1;
            }),
            T.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Hs(h, e, l);
        }
        (h = { type: "stylesheet", instance: h, count: 1, state: v }),
          o.set(u, h);
      }
    }
  }
  function yx(t, e) {
    Tn.X(t, e);
    var n = la;
    if (n && t) {
      var l = ji(n).hoistableScripts,
        o = ra(t),
        u = l.get(o);
      u ||
        ((u = n.querySelector(cl(o))),
        u ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = Ye.get(o)) && qu(t, e),
          (u = n.createElement("script")),
          Wt(u),
          le(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(o, u));
    }
  }
  function gx(t, e) {
    Tn.M(t, e);
    var n = la;
    if (n && t) {
      var l = ji(n).hoistableScripts,
        o = ra(t),
        u = l.get(o);
      u ||
        ((u = n.querySelector(cl(o))),
        u ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = Ye.get(o)) && qu(t, e),
          (u = n.createElement("script")),
          Wt(u),
          le(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(o, u));
    }
  }
  function u0(t, e, n, l) {
    var o = (o = ct.current) ? Us(o) : null;
    if (!o) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = sa(n.href)),
            (n = ji(o).hoistableStyles),
            (l = n.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = sa(n.href);
          var u = ji(o).hoistableStyles,
            h = u.get(t);
          if (
            (h ||
              ((o = o.ownerDocument || o),
              (h = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, h),
              (u = o.querySelector(ul(t))) &&
                !u._p &&
                ((h.instance = u), (h.state.loading = 5)),
              Ye.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ye.set(t, n),
                u || vx(o, t, n, h.state))),
            e && l === null)
          )
            throw Error(s(528, ""));
          return h;
        }
        if (e && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ra(n)),
              (n = ji(o).hoistableScripts),
              (l = n.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function sa(t) {
    return 'href="' + ze(t) + '"';
  }
  function ul(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function c0(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function vx(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        le(e, "link", n),
        Wt(e),
        t.head.appendChild(e));
  }
  function ra(t) {
    return '[src="' + ze(t) + '"]';
  }
  function cl(t) {
    return "script[async]" + t;
  }
  function f0(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + ze(n.href) + '"]');
          if (l) return (e.instance = l), Wt(l), l;
          var o = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            Wt(l),
            le(l, "style", o),
            Hs(l, n.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          o = sa(n.href);
          var u = t.querySelector(ul(o));
          if (u) return (e.state.loading |= 4), (e.instance = u), Wt(u), u;
          (l = c0(n)),
            (o = Ye.get(o)) && Yu(l, o),
            (u = (t.ownerDocument || t).createElement("link")),
            Wt(u);
          var h = u;
          return (
            (h._p = new Promise(function (v, T) {
              (h.onload = v), (h.onerror = T);
            })),
            le(u, "link", l),
            (e.state.loading |= 4),
            Hs(u, n.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = ra(n.src)),
            (o = t.querySelector(cl(u)))
              ? ((e.instance = o), Wt(o), o)
              : ((l = n),
                (o = Ye.get(u)) && ((l = b({}, n)), qu(l, o)),
                (t = t.ownerDocument || t),
                (o = t.createElement("script")),
                Wt(o),
                le(o, "link", l),
                t.head.appendChild(o),
                (e.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), Hs(l, n.precedence, t));
    return e.instance;
  }
  function Hs(t, e, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        o = l.length ? l[l.length - 1] : null,
        u = o,
        h = 0;
      h < l.length;
      h++
    ) {
      var v = l[h];
      if (v.dataset.precedence === e) u = v;
      else if (u !== o) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Yu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function qu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Ys = null;
  function d0(t, e, n) {
    if (Ys === null) {
      var l = new Map(),
        o = (Ys = new Map());
      o.set(n, l);
    } else (o = Ys), (l = o.get(n)), l || ((l = new Map()), o.set(n, l));
    if (l.has(t)) return l;
    for (
      l.set(t, null), n = n.getElementsByTagName(t), o = 0;
      o < n.length;
      o++
    ) {
      var u = n[o];
      if (
        !(
          u[Ma] ||
          u[ee] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var h = u.getAttribute(e) || "";
        h = t + h;
        var v = l.get(h);
        v ? v.push(u) : l.set(h, [u]);
      }
    }
    return l;
  }
  function h0(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function xx(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function m0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function bx(t, e, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var o = sa(l.href),
          u = e.querySelector(ul(o));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = qs.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = u),
            Wt(u);
          return;
        }
        (u = e.ownerDocument || e),
          (l = c0(l)),
          (o = Ye.get(o)) && Yu(l, o),
          (u = u.createElement("link")),
          Wt(u);
        var h = u;
        (h._p = new Promise(function (v, T) {
          (h.onload = v), (h.onerror = T);
        })),
          le(u, "link", l),
          (n.instance = u);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = qs.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  var Gu = 0;
  function Sx(t, e) {
    return (
      t.stylesheets && t.count === 0 && ks(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((t.stylesheets && ks(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                (t.unsuspend = null), u();
              }
            }, 6e4 + e);
            0 < t.imgBytes && Gu === 0 && (Gu = 62500 * ex());
            var o = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && ks(t, t.stylesheets), t.unsuspend))
              ) {
                var u = t.unsuspend;
                (t.unsuspend = null), u();
              }
            }, (t.imgBytes > Gu ? 50 : 800) + e);
            return (
              (t.unsuspend = n),
              function () {
                (t.unsuspend = null), clearTimeout(l), clearTimeout(o);
              }
            );
          }
        : null
    );
  }
  function qs() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ks(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Gs = null;
  function ks(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Gs = new Map()),
        e.forEach(Tx, t),
        (Gs = null),
        qs.call(t));
  }
  function Tx(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Gs.get(t);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Gs.set(t, n);
        for (
          var o = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < o.length;
          u++
        ) {
          var h = o[u];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
            (n.set(h.dataset.precedence, h), (l = h));
        }
        l && n.set(null, l);
      }
      (o = e.instance),
        (h = o.getAttribute("data-precedence")),
        (u = n.get(h) || l),
        u === l && n.set(null, o),
        n.set(h, o),
        this.count++,
        (l = qs.bind(this)),
        o.addEventListener("load", l),
        o.addEventListener("error", l),
        u
          ? u.parentNode.insertBefore(o, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(o, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var fl = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  };
  function Ax(t, e, n, l, o, u, h, v, T) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Lr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Lr(0)),
      (this.hiddenUpdates = Lr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = o),
      (this.onCaughtError = u),
      (this.onRecoverableError = h),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map());
  }
  function p0(t, e, n, l, o, u, h, v, T, j, _, V) {
    return (
      (t = new Ax(t, e, n, h, T, j, _, V, v)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Ee(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = So()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: l, isDehydrated: n, cache: e }),
      wo(u),
      t
    );
  }
  function y0(t) {
    return t ? ((t = Ui), t) : Ui;
  }
  function g0(t, e, n, l, o, u) {
    (o = y0(o)),
      l.context === null ? (l.context = o) : (l.pendingContext = o),
      (l = zn(e)),
      (l.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (n = _n(t, l, e)),
      n !== null && (ve(n, t, e), ka(n, t, e));
  }
  function v0(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function ku(t, e) {
    v0(t, e), (t = t.alternate) && v0(t, e);
  }
  function x0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = si(t, 67108864);
      e !== null && ve(e, t, 67108864), ku(t, 67108864);
    }
  }
  function b0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ce();
      e = Br(e);
      var n = si(t, e);
      n !== null && ve(n, t, e), ku(t, e);
    }
  }
  var Xs = !0;
  function Ex(t, e, n, l) {
    var o = z.T;
    z.T = null;
    var u = Z.p;
    try {
      (Z.p = 2), Xu(t, e, n, l);
    } finally {
      (Z.p = u), (z.T = o);
    }
  }
  function wx(t, e, n, l) {
    var o = z.T;
    z.T = null;
    var u = Z.p;
    try {
      (Z.p = 8), Xu(t, e, n, l);
    } finally {
      (Z.p = u), (z.T = o);
    }
  }
  function Xu(t, e, n, l) {
    if (Xs) {
      var o = Qu(l);
      if (o === null) Du(t, e, l, Qs, n), T0(t, l);
      else if (Nx(o, t, e, n, l)) l.stopPropagation();
      else if ((T0(t, l), e & 4 && -1 < Mx.indexOf(t))) {
        for (; o !== null; ) {
          var u = Ni(o);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var h = ei(u.pendingLanes);
                  if (h !== 0) {
                    var v = u;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; h; ) {
                      var T = 1 << (31 - Te(h));
                      (v.entanglements[1] |= T), (h &= ~T);
                    }
                    tn(u), (Tt & 6) === 0 && ((Ns = be() + 500), ll(0));
                  }
                }
                break;
              case 31:
              case 13:
                (v = si(u, 2)), v !== null && ve(v, u, 2), Cs(), ku(u, 2);
            }
          if (((u = Qu(l)), u === null && Du(t, e, l, Qs, n), u === o)) break;
          o = u;
        }
        o !== null && l.stopPropagation();
      } else Du(t, e, l, null, n);
    }
  }
  function Qu(t) {
    return (t = Kr(t)), Ku(t);
  }
  var Qs = null;
  function Ku(t) {
    if (((Qs = null), (t = Mi(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Qs = t), null;
  }
  function S0(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (fv()) {
          case Cf:
            return 2;
          case Df:
            return 8;
          case Ol:
          case dv:
            return 32;
          case Rf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zu = !1,
    Xn = null,
    Qn = null,
    Kn = null,
    dl = new Map(),
    hl = new Map(),
    Zn = [],
    Mx =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function T0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Xn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Kn = null;
        break;
      case "pointerover":
      case "pointerout":
        dl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hl.delete(e.pointerId);
    }
  }
  function ml(t, e, n, l, o, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [o],
        }),
        e !== null && ((e = Ni(e)), e !== null && x0(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        o !== null && e.indexOf(o) === -1 && e.push(o),
        t);
  }
  function Nx(t, e, n, l, o) {
    switch (e) {
      case "focusin":
        return (Xn = ml(Xn, t, e, n, l, o)), !0;
      case "dragenter":
        return (Qn = ml(Qn, t, e, n, l, o)), !0;
      case "mouseover":
        return (Kn = ml(Kn, t, e, n, l, o)), !0;
      case "pointerover":
        var u = o.pointerId;
        return dl.set(u, ml(dl.get(u) || null, t, e, n, l, o)), !0;
      case "gotpointercapture":
        return (
          (u = o.pointerId), hl.set(u, ml(hl.get(u) || null, t, e, n, l, o)), !0
        );
    }
    return !1;
  }
  function A0(t) {
    var e = Mi(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = f(n)), e !== null)) {
            (t.blockedOn = e),
              Bf(t.priority, function () {
                b0(n);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = m(n)), e !== null)) {
            (t.blockedOn = e),
              Bf(t.priority, function () {
                b0(n);
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ks(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Qu(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        (Qr = l), n.target.dispatchEvent(l), (Qr = null);
      } else return (e = Ni(n)), e !== null && x0(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function E0(t, e, n) {
    Ks(t) && n.delete(e);
  }
  function jx() {
    (Zu = !1),
      Xn !== null && Ks(Xn) && (Xn = null),
      Qn !== null && Ks(Qn) && (Qn = null),
      Kn !== null && Ks(Kn) && (Kn = null),
      dl.forEach(E0),
      hl.forEach(E0);
  }
  function Zs(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Zu ||
        ((Zu = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, jx)));
  }
  var Js = null;
  function w0(t) {
    Js !== t &&
      ((Js = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Js === t && (Js = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            o = t[e + 2];
          if (typeof l != "function") {
            if (Ku(l || n) === null) continue;
            break;
          }
          var u = Ni(n);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Qo(u, { pending: !0, data: o, method: n.method, action: l }, l, o));
        }
      }));
  }
  function oa(t) {
    function e(T) {
      return Zs(T, t);
    }
    Xn !== null && Zs(Xn, t),
      Qn !== null && Zs(Qn, t),
      Kn !== null && Zs(Kn, t),
      dl.forEach(e),
      hl.forEach(e);
    for (var n = 0; n < Zn.length; n++) {
      var l = Zn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Zn.length && ((n = Zn[0]), n.blockedOn === null); )
      A0(n), n.blockedOn === null && Zn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var o = n[l],
          u = n[l + 1],
          h = o[de] || null;
        if (typeof u == "function") h || w0(n);
        else if (h) {
          var v = null;
          if (u && u.hasAttribute("formAction")) {
            if (((o = u), (h = u[de] || null))) v = h.formAction;
            else if (Ku(o) !== null) continue;
          } else v = h.action;
          typeof v == "function" ? (n[l + 1] = v) : (n.splice(l, 3), (l -= 3)),
            w0(n);
        }
      }
  }
  function M0() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (h) {
              return (o = h);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      o !== null && (o(), (o = null)), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        o = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          (l = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            o !== null && (o(), (o = null));
        }
      );
    }
  }
  function Ju(t) {
    this._internalRoot = t;
  }
  (Fs.prototype.render = Ju.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(s(409));
      var n = e.current,
        l = Ce();
      g0(n, l, t, e, null, null);
    }),
    (Fs.prototype.unmount = Ju.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          g0(t.current, 2, null, t, null, null), Cs(), (e[wi] = null);
        }
      });
  function Fs(t) {
    this._internalRoot = t;
  }
  Fs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Lf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Zn.length && e !== 0 && e < Zn[n].priority; n++);
      Zn.splice(n, 0, t), n === 0 && A0(t);
    }
  };
  var N0 = a.version;
  if (N0 !== "19.2.6") throw Error(s(527, N0, "19.2.6"));
  Z.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return (
      (t = y(e)),
      (t = t !== null ? x(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Cx = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.6",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ps.isDisabled && Ps.supportsFiber)
      try {
        (Aa = Ps.inject(Cx)), (Se = Ps);
      } catch {}
  }
  return (
    (yl.createRoot = function (t, e) {
      if (!c(t)) throw Error(s(299));
      var n = !1,
        l = "",
        o = Oh,
        u = Vh,
        h = Lh;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (o = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (h = e.onRecoverableError)),
        (e = p0(t, 1, !1, null, null, n, l, null, o, u, h, M0)),
        (t[wi] = e.current),
        Cu(t),
        new Ju(e)
      );
    }),
    (yl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(s(299));
      var l = !1,
        o = "",
        u = Oh,
        h = Vh,
        v = Lh,
        T = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (h = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.formState !== void 0 && (T = n.formState)),
        (e = p0(t, 1, !0, e, n ?? null, l, o, T, u, h, v, M0)),
        (e.context = y0(null)),
        (n = e.current),
        (l = Ce()),
        (l = Br(l)),
        (o = zn(l)),
        (o.callback = null),
        _n(n, o, l),
        (n = l),
        (e.current.lanes = n),
        wa(e, n),
        tn(e),
        (t[wi] = e.current),
        Cu(t),
        new Fs(e)
      );
    }),
    (yl.version = "19.2.6"),
    yl
  );
}
var B0;
function Hx() {
  if (B0) return Wu.exports;
  B0 = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), (Wu.exports = Ux()), Wu.exports;
}
var Yx = Hx();
const Fc = k.createContext({});
function Wn(i) {
  const a = k.useRef(null);
  return a.current === null && (a.current = i()), a.current;
}
const qx = typeof window < "u",
  Ar = qx ? k.useLayoutEffect : k.useEffect,
  Er = k.createContext(null);
function Pc(i, a) {
  i.indexOf(a) === -1 && i.push(a);
}
function dr(i, a) {
  const r = i.indexOf(a);
  r > -1 && i.splice(r, 1);
}
const Pe = (i, a, r) => (r > a ? a : r < i ? i : r);
let Wc = () => {};
const $n = {},
  my = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),
  py = (i) => typeof i == "object" && i !== null,
  yy = (i) => /^0[^.\s]+$/u.test(i);
function gy(i) {
  let a;
  return () => (a === void 0 && (a = i()), a);
}
const xe = (i) => i,
  Cl = (...i) => i.reduce((a, r) => (s) => r(a(s))),
  ya = (i, a, r) => {
    const s = a - i;
    return s ? (r - i) / s : 1;
  };
class $c {
  constructor() {
    this.subscriptions = [];
  }
  add(a) {
    return Pc(this.subscriptions, a), () => dr(this.subscriptions, a);
  }
  notify(a, r, s) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](a, r, s);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(a, r, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const De = (i) => i * 1e3,
  qe = (i) => i / 1e3,
  Ic = (i, a) => (a ? i * (1e3 / a) : 0),
  vy = (i, a, r) =>
    (((1 - 3 * r + 3 * a) * i + (3 * r - 6 * a)) * i + 3 * a) * i,
  Gx = 1e-7,
  kx = 12;
function Xx(i, a, r, s, c) {
  let d,
    f,
    m = 0;
  do (f = a + (r - a) / 2), (d = vy(f, s, c) - i), d > 0 ? (r = f) : (a = f);
  while (Math.abs(d) > Gx && ++m < kx);
  return f;
}
function Dl(i, a, r, s) {
  if (i === a && r === s) return xe;
  const c = (d) => Xx(d, 0, 1, i, r);
  return (d) => (d === 0 || d === 1 ? d : vy(c(d), a, s));
}
const xy = (i) => (a) => a <= 0.5 ? i(2 * a) / 2 : (2 - i(2 * (1 - a))) / 2,
  by = (i) => (a) => 1 - i(1 - a),
  Sy = Dl(0.33, 1.53, 0.69, 0.99),
  tf = by(Sy),
  Ty = xy(tf),
  Ay = (i) =>
    i >= 1
      ? 1
      : (i *= 2) < 1
      ? 0.5 * tf(i)
      : 0.5 * (2 - Math.pow(2, -10 * (i - 1))),
  ef = (i) => 1 - Math.sin(Math.acos(i)),
  Ey = by(ef),
  wy = xy(ef),
  Qx = Dl(0.42, 0, 1, 1),
  Kx = Dl(0, 0, 0.58, 1),
  My = Dl(0.42, 0, 0.58, 1),
  Zx = (i) => Array.isArray(i) && typeof i[0] != "number",
  Ny = (i) => Array.isArray(i) && typeof i[0] == "number",
  Jx = {
    linear: xe,
    easeIn: Qx,
    easeInOut: My,
    easeOut: Kx,
    circIn: ef,
    circInOut: wy,
    circOut: Ey,
    backIn: tf,
    backInOut: Ty,
    backOut: Sy,
    anticipate: Ay,
  },
  Fx = (i) => typeof i == "string",
  U0 = (i) => {
    if (Ny(i)) {
      Wc(i.length === 4);
      const [a, r, s, c] = i;
      return Dl(a, r, s, c);
    } else if (Fx(i)) return Jx[i];
    return i;
  },
  Ws = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Px(i, a) {
  let r = new Set(),
    s = new Set(),
    c = !1,
    d = !1;
  const f = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 };
  function g(x) {
    f.has(x) && (y.schedule(x), i()), x(m);
  }
  const y = {
    schedule: (x, b = !1, S = !1) => {
      const D = S && c ? r : s;
      return b && f.add(x), D.add(x), x;
    },
    cancel: (x) => {
      s.delete(x), f.delete(x);
    },
    process: (x) => {
      if (((m = x), c)) {
        d = !0;
        return;
      }
      c = !0;
      const b = r;
      (r = s),
        (s = b),
        r.forEach(g),
        r.clear(),
        (c = !1),
        d && ((d = !1), y.process(x));
    },
  };
  return y;
}
const Wx = 40;
function jy(i, a) {
  let r = !1,
    s = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (r = !0),
    f = Ws.reduce((Y, Q) => ((Y[Q] = Px(d)), Y), {}),
    {
      setup: m,
      read: g,
      resolveKeyframes: y,
      preUpdate: x,
      update: b,
      preRender: S,
      render: M,
      postRender: D,
    } = f,
    U = () => {
      const Y = $n.useManualTiming,
        Q = Y ? c.timestamp : performance.now();
      (r = !1),
        Y ||
          (c.delta = s ? 1e3 / 60 : Math.max(Math.min(Q - c.timestamp, Wx), 1)),
        (c.timestamp = Q),
        (c.isProcessing = !0),
        m.process(c),
        g.process(c),
        y.process(c),
        x.process(c),
        b.process(c),
        S.process(c),
        M.process(c),
        D.process(c),
        (c.isProcessing = !1),
        r && a && ((s = !1), i(U));
    },
    H = () => {
      (r = !0), (s = !0), c.isProcessing || i(U);
    };
  return {
    schedule: Ws.reduce((Y, Q) => {
      const tt = f[Q];
      return (
        (Y[Q] = (G, X = !1, K = !1) => (r || H(), tt.schedule(G, X, K))), Y
      );
    }, {}),
    cancel: (Y) => {
      for (let Q = 0; Q < Ws.length; Q++) f[Ws[Q]].cancel(Y);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: vt,
  cancel: Ge,
  state: It,
  steps: ec,
} = jy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xe, !0);
let ar;
function $x() {
  ar = void 0;
}
const ce = {
    now: () => (
      ar === void 0 &&
        ce.set(
          It.isProcessing || $n.useManualTiming
            ? It.timestamp
            : performance.now()
        ),
      ar
    ),
    set: (i) => {
      (ar = i), queueMicrotask($x);
    },
  },
  Cy = (i) => (a) => typeof a == "string" && a.startsWith(i),
  Dy = Cy("--"),
  Ix = Cy("var(--"),
  nf = (i) => (Ix(i) ? tb.test(i.split("/*")[0].trim()) : !1),
  tb =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function H0(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const xa = {
    test: (i) => typeof i == "number",
    parse: parseFloat,
    transform: (i) => i,
  },
  Ml = { ...xa, transform: (i) => Pe(0, 1, i) },
  $s = { ...xa, default: 1 },
  bl = (i) => Math.round(i * 1e5) / 1e5,
  af = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function eb(i) {
  return i == null;
}
const nb =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  lf = (i, a) => (r) =>
    !!(
      (typeof r == "string" && nb.test(r) && r.startsWith(i)) ||
      (a && !eb(r) && Object.prototype.hasOwnProperty.call(r, a))
    ),
  Ry = (i, a, r) => (s) => {
    if (typeof s != "string") return s;
    const [c, d, f, m] = s.match(af);
    return {
      [i]: parseFloat(c),
      [a]: parseFloat(d),
      [r]: parseFloat(f),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  ib = (i) => Pe(0, 255, i),
  nc = { ...xa, transform: (i) => Math.round(ib(i)) },
  Si = {
    test: lf("rgb", "red"),
    parse: Ry("red", "green", "blue"),
    transform: ({ red: i, green: a, blue: r, alpha: s = 1 }) =>
      "rgba(" +
      nc.transform(i) +
      ", " +
      nc.transform(a) +
      ", " +
      nc.transform(r) +
      ", " +
      bl(Ml.transform(s)) +
      ")",
  };
function ab(i) {
  let a = "",
    r = "",
    s = "",
    c = "";
  return (
    i.length > 5
      ? ((a = i.substring(1, 3)),
        (r = i.substring(3, 5)),
        (s = i.substring(5, 7)),
        (c = i.substring(7, 9)))
      : ((a = i.substring(1, 2)),
        (r = i.substring(2, 3)),
        (s = i.substring(3, 4)),
        (c = i.substring(4, 5)),
        (a += a),
        (r += r),
        (s += s),
        (c += c)),
    {
      red: parseInt(a, 16),
      green: parseInt(r, 16),
      blue: parseInt(s, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const xc = { test: lf("#"), parse: ab, transform: Si.transform },
  Rl = (i) => ({
    test: (a) =>
      typeof a == "string" && a.endsWith(i) && a.split(" ").length === 1,
    parse: parseFloat,
    transform: (a) => `${a}${i}`,
  }),
  An = Rl("deg"),
  an = Rl("%"),
  W = Rl("px"),
  lb = Rl("vh"),
  sb = Rl("vw"),
  Y0 = {
    ...an,
    parse: (i) => an.parse(i) / 100,
    transform: (i) => an.transform(i * 100),
  },
  fa = {
    test: lf("hsl", "hue"),
    parse: Ry("hue", "saturation", "lightness"),
    transform: ({ hue: i, saturation: a, lightness: r, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(i) +
      ", " +
      an.transform(bl(a)) +
      ", " +
      an.transform(bl(r)) +
      ", " +
      bl(Ml.transform(s)) +
      ")",
  },
  Jt = {
    test: (i) => Si.test(i) || xc.test(i) || fa.test(i),
    parse: (i) =>
      Si.test(i) ? Si.parse(i) : fa.test(i) ? fa.parse(i) : xc.parse(i),
    transform: (i) =>
      typeof i == "string"
        ? i
        : i.hasOwnProperty("red")
        ? Si.transform(i)
        : fa.transform(i),
    getAnimatableNone: (i) => {
      const a = Jt.parse(i);
      return (a.alpha = 0), Jt.transform(a);
    },
  },
  rb =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ob(i) {
  var a, r;
  return (
    isNaN(i) &&
    typeof i == "string" &&
    (((a = i.match(af)) == null ? void 0 : a.length) || 0) +
      (((r = i.match(rb)) == null ? void 0 : r.length) || 0) >
      0
  );
}
const zy = "number",
  _y = "color",
  ub = "var",
  cb = "var(",
  q0 = "${}",
  fb =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ga(i) {
  const a = i.toString(),
    r = [],
    s = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const m = a
    .replace(
      fb,
      (g) => (
        Jt.test(g)
          ? (s.color.push(d), c.push(_y), r.push(Jt.parse(g)))
          : g.startsWith(cb)
          ? (s.var.push(d), c.push(ub), r.push(g))
          : (s.number.push(d), c.push(zy), r.push(parseFloat(g))),
        ++d,
        q0
      )
    )
    .split(q0);
  return { values: r, split: m, indexes: s, types: c };
}
function db(i) {
  return ga(i).values;
}
function Oy({ split: i, types: a }) {
  const r = i.length;
  return (s) => {
    let c = "";
    for (let d = 0; d < r; d++)
      if (((c += i[d]), s[d] !== void 0)) {
        const f = a[d];
        f === zy
          ? (c += bl(s[d]))
          : f === _y
          ? (c += Jt.transform(s[d]))
          : (c += s[d]);
      }
    return c;
  };
}
function hb(i) {
  return Oy(ga(i));
}
const mb = (i) =>
    typeof i == "number" ? 0 : Jt.test(i) ? Jt.getAnimatableNone(i) : i,
  pb = (i, a) =>
    typeof i == "number"
      ? a != null && a.trim().endsWith("/")
        ? i
        : 0
      : mb(i);
function yb(i) {
  const a = ga(i);
  return Oy(a)(a.values.map((s, c) => pb(s, a.split[c])));
}
const Fe = {
  test: ob,
  parse: db,
  createTransformer: hb,
  getAnimatableNone: yb,
};
function ic(i, a, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? i + (a - i) * 6 * r
      : r < 1 / 2
      ? a
      : r < 2 / 3
      ? i + (a - i) * (2 / 3 - r) * 6
      : i
  );
}
function gb({ hue: i, saturation: a, lightness: r, alpha: s }) {
  (i /= 360), (a /= 100), (r /= 100);
  let c = 0,
    d = 0,
    f = 0;
  if (!a) c = d = f = r;
  else {
    const m = r < 0.5 ? r * (1 + a) : r + a - r * a,
      g = 2 * r - m;
    (c = ic(g, m, i + 1 / 3)), (d = ic(g, m, i)), (f = ic(g, m, i - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: s,
  };
}
function hr(i, a) {
  return (r) => (r > 0 ? a : i);
}
const Rt = (i, a, r) => i + (a - i) * r,
  ac = (i, a, r) => {
    const s = i * i,
      c = r * (a * a - s) + s;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  vb = [xc, Si, fa],
  xb = (i) => vb.find((a) => a.test(i));
function G0(i) {
  const a = xb(i);
  if (!a) return !1;
  let r = a.parse(i);
  return a === fa && (r = gb(r)), r;
}
const k0 = (i, a) => {
    const r = G0(i),
      s = G0(a);
    if (!r || !s) return hr(i, a);
    const c = { ...r };
    return (d) => (
      (c.red = ac(r.red, s.red, d)),
      (c.green = ac(r.green, s.green, d)),
      (c.blue = ac(r.blue, s.blue, d)),
      (c.alpha = Rt(r.alpha, s.alpha, d)),
      Si.transform(c)
    );
  },
  bc = new Set(["none", "hidden"]);
function bb(i, a) {
  return bc.has(i) ? (r) => (r <= 0 ? i : a) : (r) => (r >= 1 ? a : i);
}
function Sb(i, a) {
  return (r) => Rt(i, a, r);
}
function sf(i) {
  return typeof i == "number"
    ? Sb
    : typeof i == "string"
    ? nf(i)
      ? hr
      : Jt.test(i)
      ? k0
      : Eb
    : Array.isArray(i)
    ? Vy
    : typeof i == "object"
    ? Jt.test(i)
      ? k0
      : Tb
    : hr;
}
function Vy(i, a) {
  const r = [...i],
    s = r.length,
    c = i.map((d, f) => sf(d)(d, a[f]));
  return (d) => {
    for (let f = 0; f < s; f++) r[f] = c[f](d);
    return r;
  };
}
function Tb(i, a) {
  const r = { ...i, ...a },
    s = {};
  for (const c in r)
    i[c] !== void 0 && a[c] !== void 0 && (s[c] = sf(i[c])(i[c], a[c]));
  return (c) => {
    for (const d in s) r[d] = s[d](c);
    return r;
  };
}
function Ab(i, a) {
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < a.values.length; c++) {
    const d = a.types[c],
      f = i.indexes[d][s[d]],
      m = i.values[f] ?? 0;
    (r[c] = m), s[d]++;
  }
  return r;
}
const Eb = (i, a) => {
  const r = Fe.createTransformer(a),
    s = ga(i),
    c = ga(a);
  return s.indexes.var.length === c.indexes.var.length &&
    s.indexes.color.length === c.indexes.color.length &&
    s.indexes.number.length >= c.indexes.number.length
    ? (bc.has(i) && !c.values.length) || (bc.has(a) && !s.values.length)
      ? bb(i, a)
      : Cl(Vy(Ab(s, c), c.values), r)
    : hr(i, a);
};
function Ly(i, a, r) {
  return typeof i == "number" && typeof a == "number" && typeof r == "number"
    ? Rt(i, a, r)
    : sf(i)(i, a);
}
const wb = (i) => {
    const a = ({ timestamp: r }) => i(r);
    return {
      start: (r = !0) => vt.update(a, r),
      stop: () => Ge(a),
      now: () => (It.isProcessing ? It.timestamp : ce.now()),
    };
  },
  By = (i, a, r = 10) => {
    let s = "";
    const c = Math.max(Math.round(a / r), 2);
    for (let d = 0; d < c; d++)
      s += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  mr = 2e4;
function rf(i) {
  let a = 0;
  const r = 50;
  let s = i.next(a);
  for (; !s.done && a < mr; ) (a += r), (s = i.next(a));
  return a >= mr ? 1 / 0 : a;
}
function Mb(i, a = 100, r) {
  const s = r({ ...i, keyframes: [0, a] }),
    c = Math.min(rf(s), mr);
  return {
    type: "keyframes",
    ease: (d) => s.next(c * d).value / a,
    duration: qe(c),
  };
}
const Ut = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Sc(i, a) {
  return i * Math.sqrt(1 - a * a);
}
const Nb = 12;
function jb(i, a, r) {
  let s = r;
  for (let c = 1; c < Nb; c++) s = s - i(s) / a(s);
  return s;
}
const lc = 0.001;
function Cb({
  duration: i = Ut.duration,
  bounce: a = Ut.bounce,
  velocity: r = Ut.velocity,
  mass: s = Ut.mass,
}) {
  let c,
    d,
    f = 1 - a;
  (f = Pe(Ut.minDamping, Ut.maxDamping, f)),
    (i = Pe(Ut.minDuration, Ut.maxDuration, qe(i))),
    f < 1
      ? ((c = (y) => {
          const x = y * f,
            b = x * i,
            S = x - r,
            M = Sc(y, f),
            D = Math.exp(-b);
          return lc - (S / M) * D;
        }),
        (d = (y) => {
          const b = y * f * i,
            S = b * r + r,
            M = Math.pow(f, 2) * Math.pow(y, 2) * i,
            D = Math.exp(-b),
            U = Sc(Math.pow(y, 2), f);
          return ((-c(y) + lc > 0 ? -1 : 1) * ((S - M) * D)) / U;
        }))
      : ((c = (y) => {
          const x = Math.exp(-y * i),
            b = (y - r) * i + 1;
          return -lc + x * b;
        }),
        (d = (y) => {
          const x = Math.exp(-y * i),
            b = (r - y) * (i * i);
          return x * b;
        }));
  const m = 5 / i,
    g = jb(c, d, m);
  if (((i = De(i)), isNaN(g)))
    return { stiffness: Ut.stiffness, damping: Ut.damping, duration: i };
  {
    const y = Math.pow(g, 2) * s;
    return { stiffness: y, damping: f * 2 * Math.sqrt(s * y), duration: i };
  }
}
const Db = ["duration", "bounce"],
  Rb = ["stiffness", "damping", "mass"];
function X0(i, a) {
  return a.some((r) => i[r] !== void 0);
}
function zb(i) {
  let a = {
    velocity: Ut.velocity,
    stiffness: Ut.stiffness,
    damping: Ut.damping,
    mass: Ut.mass,
    isResolvedFromDuration: !1,
    ...i,
  };
  if (!X0(i, Rb) && X0(i, Db))
    if (((a.velocity = 0), i.visualDuration)) {
      const r = i.visualDuration,
        s = (2 * Math.PI) / (r * 1.2),
        c = s * s,
        d = 2 * Pe(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      a = { ...a, mass: Ut.mass, stiffness: c, damping: d };
    } else {
      const r = Cb({ ...i, velocity: 0 });
      (a = { ...a, ...r, mass: Ut.mass }), (a.isResolvedFromDuration = !0);
    }
  return a;
}
function pr(i = Ut.visualDuration, a = Ut.bounce) {
  const r =
    typeof i != "object"
      ? { visualDuration: i, keyframes: [0, 1], bounce: a }
      : i;
  let { restSpeed: s, restDelta: c } = r;
  const d = r.keyframes[0],
    f = r.keyframes[r.keyframes.length - 1],
    m = { done: !1, value: d },
    {
      stiffness: g,
      damping: y,
      mass: x,
      duration: b,
      velocity: S,
      isResolvedFromDuration: M,
    } = zb({ ...r, velocity: -qe(r.velocity || 0) }),
    D = S || 0,
    U = y / (2 * Math.sqrt(g * x)),
    H = f - d,
    L = qe(Math.sqrt(g / x)),
    q = Math.abs(H) < 5;
  s || (s = q ? Ut.restSpeed.granular : Ut.restSpeed.default),
    c || (c = q ? Ut.restDelta.granular : Ut.restDelta.default);
  let Y, Q, tt, G, X, K;
  if (U < 1)
    (tt = Sc(L, U)),
      (G = (D + U * L * H) / tt),
      (Y = ($) => {
        const pt = Math.exp(-U * L * $);
        return f - pt * (G * Math.sin(tt * $) + H * Math.cos(tt * $));
      }),
      (X = U * L * G + H * tt),
      (K = U * L * H - G * tt),
      (Q = ($) =>
        Math.exp(-U * L * $) * (X * Math.sin(tt * $) + K * Math.cos(tt * $)));
  else if (U === 1) {
    Y = (pt) => f - Math.exp(-L * pt) * (H + (D + L * H) * pt);
    const $ = D + L * H;
    Q = (pt) => Math.exp(-L * pt) * (L * $ * pt - D);
  } else {
    const $ = L * Math.sqrt(U * U - 1);
    Y = (kt) => {
      const Ht = Math.exp(-U * L * kt),
        z = Math.min($ * kt, 300);
      return (
        f - (Ht * ((D + U * L * H) * Math.sinh(z) + $ * H * Math.cosh(z))) / $
      );
    };
    const pt = (D + U * L * H) / $,
      xt = U * L * pt - H * $,
      te = U * L * H - pt * $;
    Q = (kt) => {
      const Ht = Math.exp(-U * L * kt),
        z = Math.min($ * kt, 300);
      return Ht * (xt * Math.sinh(z) + te * Math.cosh(z));
    };
  }
  const nt = {
    calculatedDuration: (M && b) || null,
    velocity: ($) => De(Q($)),
    next: ($) => {
      if (!M && U < 1) {
        const xt = Math.exp(-U * L * $),
          te = Math.sin(tt * $),
          kt = Math.cos(tt * $),
          Ht = f - xt * (G * te + H * kt),
          z = De(xt * (X * te + K * kt));
        return (
          (m.done = Math.abs(z) <= s && Math.abs(f - Ht) <= c),
          (m.value = m.done ? f : Ht),
          m
        );
      }
      const pt = Y($);
      if (M) m.done = $ >= b;
      else {
        const xt = De(Q($));
        m.done = Math.abs(xt) <= s && Math.abs(f - pt) <= c;
      }
      return (m.value = m.done ? f : pt), m;
    },
    toString: () => {
      const $ = Math.min(rf(nt), mr),
        pt = By((xt) => nt.next($ * xt).value, $, 30);
      return $ + "ms " + pt;
    },
    toTransition: () => {},
  };
  return nt;
}
pr.applyToOptions = (i) => {
  const a = Mb(i, 100, pr);
  return (
    (i.ease = a.ease), (i.duration = De(a.duration)), (i.type = "keyframes"), i
  );
};
const _b = 5;
function Uy(i, a, r) {
  const s = Math.max(a - _b, 0);
  return Ic(r - i(s), a - s);
}
function Tc({
  keyframes: i,
  velocity: a = 0,
  power: r = 0.8,
  timeConstant: s = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: m,
  max: g,
  restDelta: y = 0.5,
  restSpeed: x,
}) {
  const b = i[0],
    S = { done: !1, value: b },
    M = (K) => (m !== void 0 && K < m) || (g !== void 0 && K > g),
    D = (K) =>
      m === void 0
        ? g
        : g === void 0 || Math.abs(m - K) < Math.abs(g - K)
        ? m
        : g;
  let U = r * a;
  const H = b + U,
    L = f === void 0 ? H : f(H);
  L !== H && (U = L - b);
  const q = (K) => -U * Math.exp(-K / s),
    Y = (K) => L + q(K),
    Q = (K) => {
      const nt = q(K),
        $ = Y(K);
      (S.done = Math.abs(nt) <= y), (S.value = S.done ? L : $);
    };
  let tt, G;
  const X = (K) => {
    M(S.value) &&
      ((tt = K),
      (G = pr({
        keyframes: [S.value, D(S.value)],
        velocity: Uy(Y, K, S.value),
        damping: c,
        stiffness: d,
        restDelta: y,
        restSpeed: x,
      })));
  };
  return (
    X(0),
    {
      calculatedDuration: null,
      next: (K) => {
        let nt = !1;
        return (
          !G && tt === void 0 && ((nt = !0), Q(K), X(K)),
          tt !== void 0 && K >= tt ? G.next(K - tt) : (!nt && Q(K), S)
        );
      },
    }
  );
}
function Ob(i, a, r) {
  const s = [],
    c = r || $n.mix || Ly,
    d = i.length - 1;
  for (let f = 0; f < d; f++) {
    let m = c(i[f], i[f + 1]);
    if (a) {
      const g = Array.isArray(a) ? a[f] || xe : a;
      m = Cl(g, m);
    }
    s.push(m);
  }
  return s;
}
function of(i, a, { clamp: r = !0, ease: s, mixer: c } = {}) {
  const d = i.length;
  if ((Wc(d === a.length), d === 1)) return () => a[0];
  if (d === 2 && a[0] === a[1]) return () => a[1];
  const f = i[0] === i[1];
  i[0] > i[d - 1] && ((i = [...i].reverse()), (a = [...a].reverse()));
  const m = Ob(a, s, c),
    g = m.length,
    y = (x) => {
      if (f && x < i[0]) return a[0];
      let b = 0;
      if (g > 1) for (; b < i.length - 2 && !(x < i[b + 1]); b++);
      const S = ya(i[b], i[b + 1], x);
      return m[b](S);
    };
  return r ? (x) => y(Pe(i[0], i[d - 1], x)) : y;
}
function Vb(i, a) {
  const r = i[i.length - 1];
  for (let s = 1; s <= a; s++) {
    const c = ya(0, a, s);
    i.push(Rt(r, 1, c));
  }
}
function Hy(i) {
  const a = [0];
  return Vb(a, i.length - 1), a;
}
function Lb(i, a) {
  return i.map((r) => r * a);
}
function Bb(i, a) {
  return i.map(() => a || My).splice(0, i.length - 1);
}
function Sl({
  duration: i = 300,
  keyframes: a,
  times: r,
  ease: s = "easeInOut",
}) {
  const c = Zx(s) ? s.map(U0) : U0(s),
    d = { done: !1, value: a[0] },
    f = Lb(r && r.length === a.length ? r : Hy(a), i),
    m = of(f, a, { ease: Array.isArray(c) ? c : Bb(a, c) });
  return {
    calculatedDuration: i,
    next: (g) => ((d.value = m(g)), (d.done = g >= i), d),
  };
}
const Ub = (i) => i !== null;
function wr(i, { repeat: a, repeatType: r = "loop" }, s, c = 1) {
  const d = i.filter(Ub),
    m = c < 0 || (a && r !== "loop" && a % 2 === 1) ? 0 : d.length - 1;
  return !m || s === void 0 ? d[m] : s;
}
const Hb = { decay: Tc, inertia: Tc, tween: Sl, keyframes: Sl, spring: pr };
function Yy(i) {
  typeof i.type == "string" && (i.type = Hb[i.type]);
}
class uf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((a) => {
      this.resolve = a;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(a, r) {
    return this.finished.then(a, r);
  }
}
const Yb = (i) => i / 100;
class yr extends uf {
  constructor(a) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var s, c;
        const { motionValue: r } = this.options;
        r && r.updatedAt !== ce.now() && this.tick(ce.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (c = (s = this.options).onStop) == null || c.call(s));
      }),
      (this.options = a),
      this.initAnimation(),
      this.play(),
      a.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: a } = this;
    Yy(a);
    const {
      type: r = Sl,
      repeat: s = 0,
      repeatDelay: c = 0,
      repeatType: d,
      velocity: f = 0,
    } = a;
    let { keyframes: m } = a;
    const g = r || Sl;
    g !== Sl &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = Cl(Yb, Ly(m[0], m[1]))), (m = [0, 100]));
    const y = g({ ...a, keyframes: m });
    d === "mirror" &&
      (this.mirroredGenerator = g({
        ...a,
        keyframes: [...m].reverse(),
        velocity: -f,
      })),
      y.calculatedDuration === null && (y.calculatedDuration = rf(y));
    const { calculatedDuration: x } = y;
    (this.calculatedDuration = x),
      (this.resolvedDuration = x + c),
      (this.totalDuration = this.resolvedDuration * (s + 1) - c),
      (this.generator = y);
  }
  updateTime(a) {
    const r = Math.round(a - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = r);
  }
  tick(a, r = !1) {
    const {
      generator: s,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: m,
      calculatedDuration: g,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: y = 0,
      keyframes: x,
      repeat: b,
      repeatType: S,
      repeatDelay: M,
      type: D,
      onUpdate: U,
      finalKeyframe: H,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, a))
      : this.speed < 0 &&
        (this.startTime = Math.min(a - c / this.speed, this.startTime)),
      r ? (this.currentTime = a) : this.updateTime(a);
    const L = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
      q = this.playbackSpeed >= 0 ? L < 0 : L > c;
    (this.currentTime = Math.max(L, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let Y = this.currentTime,
      Q = s;
    if (b) {
      const K = Math.min(this.currentTime, c) / m;
      let nt = Math.floor(K),
        $ = K % 1;
      !$ && K >= 1 && ($ = 1),
        $ === 1 && nt--,
        (nt = Math.min(nt, b + 1)),
        !!(nt % 2) &&
          (S === "reverse"
            ? (($ = 1 - $), M && ($ -= M / m))
            : S === "mirror" && (Q = f)),
        (Y = Pe(0, 1, $) * m);
    }
    let tt;
    q
      ? ((this.delayState.value = x[0]), (tt = this.delayState))
      : (tt = Q.next(Y)),
      d && !q && (tt.value = d(tt.value));
    let { done: G } = tt;
    !q &&
      g !== null &&
      (G =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const X =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && G));
    return (
      X && D !== Tc && (tt.value = wr(x, this.options, H, this.speed)),
      U && U(tt.value),
      X && this.finish(),
      tt
    );
  }
  then(a, r) {
    return this.finished.then(a, r);
  }
  get duration() {
    return qe(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: a = 0 } = this.options || {};
    return this.duration + qe(a);
  }
  get time() {
    return qe(this.currentTime);
  }
  set time(a) {
    (a = De(a)),
      (this.currentTime = a),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = a)
        : this.driver &&
          (this.startTime = this.driver.now() - a / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = a),
          this.tick(a));
  }
  getGeneratorVelocity() {
    const a = this.currentTime;
    if (a <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(a);
    const r = this.generator.next(a).value;
    return Uy((s) => this.generator.next(s).value, a, r);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(a) {
    const r = this.playbackSpeed !== a;
    r && this.driver && this.updateTime(ce.now()),
      (this.playbackSpeed = a),
      r && this.driver && (this.time = qe(this.currentTime));
  }
  play() {
    var c, d;
    if (this.isStopped) return;
    const { driver: a = wb, startTime: r } = this.options;
    this.driver || (this.driver = a((f) => this.tick(f))),
      (d = (c = this.options).onPlay) == null || d.call(c);
    const s = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime || (this.startTime = r ?? s),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(ce.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var a, r;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (r = (a = this.options).onComplete) == null || r.call(a);
  }
  cancel() {
    var a, r;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (r = (a = this.options).onCancel) == null || r.call(a);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(a) {
    return (this.startTime = 0), this.tick(a, !0);
  }
  attachTimeline(a) {
    var r;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (r = this.driver) == null || r.stop(),
      a.observe(this)
    );
  }
}
function qb(i) {
  for (let a = 1; a < i.length; a++) i[a] ?? (i[a] = i[a - 1]);
}
const Ti = (i) => (i * 180) / Math.PI,
  Ac = (i) => {
    const a = Ti(Math.atan2(i[1], i[0]));
    return Ec(a);
  },
  Gb = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: Ac,
    rotateZ: Ac,
    skewX: (i) => Ti(Math.atan(i[1])),
    skewY: (i) => Ti(Math.atan(i[2])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2,
  },
  Ec = (i) => ((i = i % 360), i < 0 && (i += 360), i),
  Q0 = Ac,
  K0 = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]),
  Z0 = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]),
  kb = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: K0,
    scaleY: Z0,
    scale: (i) => (K0(i) + Z0(i)) / 2,
    rotateX: (i) => Ec(Ti(Math.atan2(i[6], i[5]))),
    rotateY: (i) => Ec(Ti(Math.atan2(-i[2], i[0]))),
    rotateZ: Q0,
    rotate: Q0,
    skewX: (i) => Ti(Math.atan(i[4])),
    skewY: (i) => Ti(Math.atan(i[1])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2,
  };
function wc(i) {
  return i.includes("scale") ? 1 : 0;
}
function Mc(i, a) {
  if (!i || i === "none") return wc(a);
  const r = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, c;
  if (r) (s = kb), (c = r);
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (s = Gb), (c = m);
  }
  if (!c) return wc(a);
  const d = s[a],
    f = c[1].split(",").map(Qb);
  return typeof d == "function" ? d(f) : f[d];
}
const Xb = (i, a) => {
  const { transform: r = "none" } = getComputedStyle(i);
  return Mc(r, a);
};
function Qb(i) {
  return parseFloat(i.trim());
}
const ba = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Sa = new Set([...ba, "pathRotation"]),
  J0 = (i) => i === xa || i === W,
  Kb = new Set(["x", "y", "z"]),
  Zb = ba.filter((i) => !Kb.has(i));
function Jb(i) {
  const a = [];
  return (
    Zb.forEach((r) => {
      const s = i.getValue(r);
      s !== void 0 &&
        (a.push([r, s.get()]), s.set(r.startsWith("scale") ? 1 : 0));
    }),
    a
  );
}
const Pn = {
  width: (
    { x: i },
    { paddingLeft: a = "0", paddingRight: r = "0", boxSizing: s }
  ) => {
    const c = i.max - i.min;
    return s === "border-box" ? c : c - parseFloat(a) - parseFloat(r);
  },
  height: (
    { y: i },
    { paddingTop: a = "0", paddingBottom: r = "0", boxSizing: s }
  ) => {
    const c = i.max - i.min;
    return s === "border-box" ? c : c - parseFloat(a) - parseFloat(r);
  },
  top: (i, { top: a }) => parseFloat(a),
  left: (i, { left: a }) => parseFloat(a),
  bottom: ({ y: i }, { top: a }) => parseFloat(a) + (i.max - i.min),
  right: ({ x: i }, { left: a }) => parseFloat(a) + (i.max - i.min),
  x: (i, { transform: a }) => Mc(a, "x"),
  y: (i, { transform: a }) => Mc(a, "y"),
};
Pn.translateX = Pn.x;
Pn.translateY = Pn.y;
const Ai = new Set();
let Nc = !1,
  jc = !1,
  Cc = !1;
function qy() {
  if (jc) {
    const i = Array.from(Ai).filter((s) => s.needsMeasurement),
      a = new Set(i.map((s) => s.element)),
      r = new Map();
    a.forEach((s) => {
      const c = Jb(s);
      c.length && (r.set(s, c), s.render());
    }),
      i.forEach((s) => s.measureInitialState()),
      a.forEach((s) => {
        s.render();
        const c = r.get(s);
        c &&
          c.forEach(([d, f]) => {
            var m;
            (m = s.getValue(d)) == null || m.set(f);
          });
      }),
      i.forEach((s) => s.measureEndState()),
      i.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (jc = !1), (Nc = !1), Ai.forEach((i) => i.complete(Cc)), Ai.clear();
}
function Gy() {
  Ai.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (jc = !0);
  });
}
function Fb() {
  (Cc = !0), Gy(), qy(), (Cc = !1);
}
class cf {
  constructor(a, r, s, c, d, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...a]),
      (this.onComplete = r),
      (this.name = s),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Ai.add(this),
          Nc || ((Nc = !0), vt.read(Gy), vt.resolveKeyframes(qy)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: a,
      name: r,
      element: s,
      motionValue: c,
    } = this;
    if (a[0] === null) {
      const d = c == null ? void 0 : c.get(),
        f = a[a.length - 1];
      if (d !== void 0) a[0] = d;
      else if (s && r) {
        const m = s.readValue(r, f);
        m != null && (a[0] = m);
      }
      a[0] === void 0 && (a[0] = f), c && d === void 0 && c.set(a[0]);
    }
    qb(a);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(a = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a),
      Ai.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ai.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Pb = (i) => i.startsWith("--");
function ky(i, a, r) {
  Pb(a) ? i.style.setProperty(a, r) : (i.style[a] = r);
}
const Wb = {};
function ff(i, a) {
  const r = gy(i);
  return () => Wb[a] ?? r();
}
const df = ff(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Xy = ff(() => window.ViewTimeline !== void 0, "viewTimeline"),
  Qy = ff(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  vl = ([i, a, r, s]) => `cubic-bezier(${i}, ${a}, ${r}, ${s})`,
  F0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: vl([0, 0.65, 0.55, 1]),
    circOut: vl([0.55, 0, 1, 0.45]),
    backIn: vl([0.31, 0.01, 0.66, -0.59]),
    backOut: vl([0.33, 1.53, 0.69, 0.99]),
  };
function Ky(i, a) {
  if (i)
    return typeof i == "function"
      ? Qy()
        ? By(i, a)
        : "ease-out"
      : Ny(i)
      ? vl(i)
      : Array.isArray(i)
      ? i.map((r) => Ky(r, a) || F0.easeOut)
      : F0[i];
}
function $b(
  i,
  a,
  r,
  {
    delay: s = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: m = "easeOut",
    times: g,
  } = {},
  y = void 0
) {
  const x = { [a]: r };
  g && (x.offset = g);
  const b = Ky(m, c);
  Array.isArray(b) && (x.easing = b);
  const S = {
    delay: s,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return y && (S.pseudoElement = y), i.animate(x, S);
}
function Zy(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function Ib({ type: i, ...a }) {
  return Zy(i) && Qy()
    ? i.applyToOptions(a)
    : (a.duration ?? (a.duration = 300), a.ease ?? (a.ease = "easeOut"), a);
}
class Jy extends uf {
  constructor(a) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !a)
    )
      return;
    const {
      element: r,
      name: s,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: m,
      onComplete: g,
    } = a;
    (this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = a),
      Wc(typeof a.type != "string");
    const y = Ib(a);
    (this.animation = $b(r, s, c, y, d)),
      y.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const x = wr(c, this.options, m, this.speed);
          this.updateMotionValue && this.updateMotionValue(x),
            ky(r, s, x),
            this.animation.cancel();
        }
        g == null || g(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var a, r;
    (r = (a = this.animation).finish) == null || r.call(a);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: a } = this;
    a === "idle" ||
      a === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var r, s, c;
    const a = (r = this.options) == null ? void 0 : r.element;
    !this.isPseudoElement &&
      a != null &&
      a.isConnected &&
      ((c = (s = this.animation).commitStyles) == null || c.call(s));
  }
  get duration() {
    var r, s;
    const a =
      ((s =
        (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) ==
      null
        ? void 0
        : s.call(r).duration) || 0;
    return qe(Number(a));
  }
  get iterationDuration() {
    const { delay: a = 0 } = this.options || {};
    return this.duration + qe(a);
  }
  get time() {
    return qe(Number(this.animation.currentTime) || 0);
  }
  set time(a) {
    const r = this.finishedTime !== null;
    (this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = De(a)),
      r && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(a) {
    a < 0 && (this.finishedTime = null), (this.animation.playbackRate = a);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(a) {
    this.manualStartTime = this.animation.startTime = a;
  }
  attachTimeline({ timeline: a, rangeStart: r, rangeEnd: s, observe: c }) {
    var d;
    return (
      this.allowFlatten &&
        ((d = this.animation.effect) == null ||
          d.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      a && df()
        ? ((this.animation.timeline = a),
          r && (this.animation.rangeStart = r),
          s && (this.animation.rangeEnd = s),
          xe)
        : c(this)
    );
  }
}
const Fy = { anticipate: Ay, backInOut: Ty, circInOut: wy };
function t2(i) {
  return i in Fy;
}
function e2(i) {
  typeof i.ease == "string" && t2(i.ease) && (i.ease = Fy[i.ease]);
}
const sc = 10;
class n2 extends Jy {
  constructor(a) {
    e2(a),
      Yy(a),
      super(a),
      a.startTime !== void 0 &&
        a.autoplay !== !1 &&
        (this.startTime = a.startTime),
      (this.options = a);
  }
  updateMotionValue(a) {
    const {
      motionValue: r,
      onUpdate: s,
      onComplete: c,
      element: d,
      ...f
    } = this.options;
    if (!r) return;
    if (a !== void 0) {
      r.set(a);
      return;
    }
    const m = new yr({ ...f, autoplay: !1 }),
      g = Math.max(sc, ce.now() - this.startTime),
      y = Pe(0, sc, g - sc),
      x = m.sample(g).value,
      { name: b } = this.options;
    d && b && ky(d, b, x),
      r.setWithVelocity(m.sample(Math.max(0, g - y)).value, x, y),
      m.stop();
  }
}
const P0 = (i, a) =>
  a === "zIndex"
    ? !1
    : !!(
        typeof i == "number" ||
        Array.isArray(i) ||
        (typeof i == "string" &&
          (Fe.test(i) || i === "0") &&
          !i.startsWith("url("))
      );
function i2(i) {
  const a = i[0];
  if (i.length === 1) return !0;
  for (let r = 0; r < i.length; r++) if (i[r] !== a) return !0;
}
function a2(i, a, r, s) {
  const c = i[0];
  if (c === null) return !1;
  if (a === "display" || a === "visibility") return !0;
  const d = i[i.length - 1],
    f = P0(c, a),
    m = P0(d, a);
  return !f || !m ? !1 : i2(i) || ((r === "spring" || Zy(r)) && s);
}
function Dc(i) {
  (i.duration = 0), (i.type = "keyframes");
}
const Py = new Set(["opacity", "clipPath", "filter", "transform"]),
  l2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function s2(i) {
  for (let a = 0; a < i.length; a++)
    if (typeof i[a] == "string" && l2.test(i[a])) return !0;
  return !1;
}
const r2 = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  o2 = gy(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function u2(i) {
  var b;
  const {
    motionValue: a,
    name: r,
    repeatDelay: s,
    repeatType: c,
    damping: d,
    type: f,
    keyframes: m,
  } = i;
  if (
    !(
      ((b = a == null ? void 0 : a.owner) == null
        ? void 0
        : b.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: y, transformTemplate: x } = a.owner.getProps();
  return (
    o2() &&
    r &&
    (Py.has(r) || (r2.has(r) && s2(m))) &&
    (r !== "transform" || !x) &&
    !y &&
    !s &&
    c !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const c2 = 40;
class f2 extends uf {
  constructor({
    autoplay: a = !0,
    delay: r = 0,
    type: s = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: m,
    name: g,
    motionValue: y,
    element: x,
    ...b
  }) {
    var D;
    super(),
      (this.stop = () => {
        var U, H;
        this._animation &&
          (this._animation.stop(),
          (U = this.stopTimeline) == null || U.call(this)),
          (H = this.keyframeResolver) == null || H.cancel();
      }),
      (this.createdAt = ce.now());
    const S = {
        autoplay: a,
        delay: r,
        type: s,
        repeat: c,
        repeatDelay: d,
        repeatType: f,
        name: g,
        motionValue: y,
        element: x,
        ...b,
      },
      M = (x == null ? void 0 : x.KeyframeResolver) || cf;
    (this.keyframeResolver = new M(
      m,
      (U, H, L) => this.onKeyframesResolved(U, H, S, !L),
      g,
      y,
      x
    )),
      (D = this.keyframeResolver) == null || D.scheduleResolve();
  }
  onKeyframesResolved(a, r, s, c) {
    var L, q;
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: f,
      velocity: m,
      delay: g,
      isHandoff: y,
      onUpdate: x,
    } = s;
    this.resolvedAt = ce.now();
    let b = !0;
    a2(a, d, f, m) ||
      ((b = !1),
      ($n.instantAnimations || !g) && (x == null || x(wr(a, s, r))),
      (a[0] = a[a.length - 1]),
      Dc(s),
      (s.repeat = 0));
    const M = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > c2
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: r,
        ...s,
        keyframes: a,
      },
      D = b && !y && u2(M),
      U =
        (q = (L = M.motionValue) == null ? void 0 : L.owner) == null
          ? void 0
          : q.current;
    let H;
    if (D)
      try {
        H = new n2({ ...M, element: U });
      } catch {
        H = new yr(M);
      }
    else H = new yr(M);
    H.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(xe),
      this.pendingTimeline &&
        ((this.stopTimeline = H.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = H);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(a, r) {
    return this.finished.finally(a).then(() => {});
  }
  get animation() {
    var a;
    return (
      this._animation ||
        ((a = this.keyframeResolver) == null || a.resume(), Fb()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(a) {
    this.animation.time = a;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(a) {
    this.animation.speed = a;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(a) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(a))
        : (this.pendingTimeline = a),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var a;
    this._animation && this.animation.cancel(),
      (a = this.keyframeResolver) == null || a.cancel();
  }
}
function Wy(i, a, r, s = 0, c = 1) {
  const d = Array.from(i)
      .sort((y, x) => y.sortNodePosition(x))
      .indexOf(a),
    f = i.size,
    m = (f - 1) * s;
  return typeof r == "function" ? r(d, f) : c === 1 ? d * s : m - d * s;
}
const W0 = 30,
  d2 = (i) => !isNaN(parseFloat(i)),
  Tl = { current: void 0 };
class h2 {
  constructor(a, r = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        var d;
        const c = ce.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            ((d = this.events.change) == null || d.notify(this.current),
            this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(a),
      (this.owner = r.owner);
  }
  setCurrent(a) {
    (this.current = a),
      (this.updatedAt = ce.now()),
      this.canTrackVelocity === null &&
        a !== void 0 &&
        (this.canTrackVelocity = d2(this.current));
  }
  setPrevFrameValue(a = this.current) {
    (this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(a) {
    return this.on("change", a);
  }
  on(a, r) {
    this.events[a] || (this.events[a] = new $c());
    const s = this.events[a].add(r);
    return a === "change"
      ? () => {
          s(),
            vt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const a in this.events) this.events[a].clear();
  }
  attach(a, r) {
    (this.passiveEffect = a), (this.stopPassiveEffect = r);
  }
  set(a) {
    this.passiveEffect
      ? this.passiveEffect(a, this.updateAndNotify)
      : this.updateAndNotify(a);
  }
  setWithVelocity(a, r, s) {
    this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = a),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(a, r = !0) {
    this.updateAndNotify(a),
      (this.prev = a),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      r && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var a;
    (a = this.events.change) == null || a.notify(this.current);
  }
  addDependent(a) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(a);
  }
  removeDependent(a) {
    this.dependents && this.dependents.delete(a);
  }
  get() {
    return Tl.current && Tl.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const a = ce.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      a - this.updatedAt > W0
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, W0);
    return Ic(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(a) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = a(r)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var a, r;
    (a = this.dependents) == null || a.clear(),
      (r = this.events.destroy) == null || r.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Je(i, a) {
  return new h2(i, a);
}
function $y(i, a) {
  if (i != null && i.inherit && a) {
    const { inherit: r, ...s } = i;
    return { ...a, ...s };
  }
  return i;
}
function hf(i, a) {
  const r =
    (i == null ? void 0 : i[a]) ?? (i == null ? void 0 : i.default) ?? i;
  return r !== i ? $y(r, i) : r;
}
const m2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  p2 = (i) => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  y2 = { type: "keyframes", duration: 0.8 },
  g2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  v2 = (i, { keyframes: a }) =>
    a.length > 2
      ? y2
      : Sa.has(i)
      ? i.startsWith("scale")
        ? p2(a[1])
        : m2
      : g2,
  x2 = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function b2(i) {
  for (const a in i) if (!x2.has(a)) return !0;
  return !1;
}
const mf =
    (i, a, r, s = {}, c, d) =>
    (f) => {
      const m = hf(s, i) || {},
        g = m.delay || s.delay || 0;
      let { elapsed: y = 0 } = s;
      y = y - De(g);
      const x = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: a.getVelocity(),
        ...m,
        delay: -y,
        onUpdate: (S) => {
          a.set(S), m.onUpdate && m.onUpdate(S);
        },
        onComplete: () => {
          f(), m.onComplete && m.onComplete();
        },
        name: i,
        motionValue: a,
        element: d ? void 0 : c,
      };
      b2(m) || Object.assign(x, v2(i, x)),
        x.duration && (x.duration = De(x.duration)),
        x.repeatDelay && (x.repeatDelay = De(x.repeatDelay)),
        x.from !== void 0 && (x.keyframes[0] = x.from);
      let b = !1;
      if (
        ((x.type === !1 || (x.duration === 0 && !x.repeatDelay)) &&
          (Dc(x), x.delay === 0 && (b = !0)),
        ($n.instantAnimations ||
          $n.skipAnimations ||
          (c != null && c.shouldSkipAnimations) ||
          m.skipAnimations) &&
          ((b = !0), Dc(x), (x.delay = 0)),
        (x.allowFlatten = !m.type && !m.ease),
        b && !d && a.get() !== void 0)
      ) {
        const S = wr(x.keyframes, m);
        if (S !== void 0) {
          vt.update(() => {
            x.onUpdate(S), x.onComplete();
          });
          return;
        }
      }
      return m.isSync ? new yr(x) : new f2(x);
    },
  S2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function T2(i) {
  const a = S2.exec(i);
  if (!a) return [,];
  const [, r, s, c] = a;
  return [`--${r ?? s}`, c];
}
function Iy(i, a, r = 1) {
  const [s, c] = T2(i);
  if (!s) return;
  const d = window.getComputedStyle(a).getPropertyValue(s);
  if (d) {
    const f = d.trim();
    return my(f) ? parseFloat(f) : f;
  }
  return nf(c) ? Iy(c, a, r + 1) : c;
}
function $0(i) {
  const a = [{}, {}];
  return (
    i == null ||
      i.values.forEach((r, s) => {
        (a[0][s] = r.get()), (a[1][s] = r.getVelocity());
      }),
    a
  );
}
function pf(i, a, r, s) {
  if (typeof a == "function") {
    const [c, d] = $0(s);
    a = a(r !== void 0 ? r : i.custom, c, d);
  }
  if (
    (typeof a == "string" && (a = i.variants && i.variants[a]),
    typeof a == "function")
  ) {
    const [c, d] = $0(s);
    a = a(r !== void 0 ? r : i.custom, c, d);
  }
  return a;
}
function Ei(i, a, r) {
  const s = i.getProps();
  return pf(s, a, r !== void 0 ? r : s.custom, i);
}
const tg = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ba,
  ]),
  Rc = (i) => Array.isArray(i);
function A2(i, a, r) {
  i.hasValue(a) ? i.getValue(a).set(r) : i.addValue(a, Je(r));
}
function E2(i) {
  return Rc(i) ? i[i.length - 1] || 0 : i;
}
function w2(i, a) {
  const r = Ei(i, a);
  let { transitionEnd: s = {}, transition: c = {}, ...d } = r || {};
  d = { ...d, ...s };
  for (const f in d) {
    const m = E2(d[f]);
    A2(i, f, m);
  }
}
const se = (i) => !!(i && i.getVelocity);
function M2(i) {
  return !!(se(i) && i.add);
}
function zc(i, a) {
  const r = i.getValue("willChange");
  if (M2(r)) return r.add(a);
  if (!r && $n.WillChange) {
    const s = new $n.WillChange("auto");
    i.addValue("willChange", s), s.add(a);
  }
}
function yf(i) {
  return i.replace(/([A-Z])/g, (a) => `-${a.toLowerCase()}`);
}
const N2 = "framerAppearId",
  eg = "data-" + yf(N2);
function ng(i) {
  return i.props[eg];
}
function j2({ protectedKeys: i, needsAnimating: a }, r) {
  const s = i.hasOwnProperty(r) && a[r] !== !0;
  return (a[r] = !1), s;
}
function ig(i, a, { delay: r = 0, transitionOverride: s, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...m } = a;
  const g = i.getDefaultTransition();
  d = d ? $y(d, g) : g;
  const y = d == null ? void 0 : d.reduceMotion,
    x = d == null ? void 0 : d.skipAnimations;
  s && (d = s);
  const b = [],
    S = c && i.animationState && i.animationState.getState()[c],
    M = d == null ? void 0 : d.path;
  M && M.animateVisualElement(i, m, d, r, b);
  for (const D in m) {
    const U = i.getValue(D, i.latestValues[D] ?? null),
      H = m[D];
    if (H === void 0 || (S && j2(S, D))) continue;
    const L = { delay: r, ...hf(d || {}, D) };
    x && (L.skipAnimations = !0);
    const q = U.get();
    if (
      q !== void 0 &&
      !U.isAnimating() &&
      !Array.isArray(H) &&
      H === q &&
      !L.velocity
    ) {
      vt.update(() => U.set(H));
      continue;
    }
    let Y = !1;
    if (window.MotionHandoffAnimation) {
      const G = ng(i);
      if (G) {
        const X = window.MotionHandoffAnimation(G, D, vt);
        X !== null && ((L.startTime = X), (Y = !0));
      }
    }
    zc(i, D);
    const Q = y ?? i.shouldReduceMotion;
    U.start(mf(D, U, H, Q && tg.has(D) ? { type: !1 } : L, i, Y));
    const tt = U.animation;
    tt && b.push(tt);
  }
  if (f) {
    const D = () =>
      vt.update(() => {
        f && w2(i, f);
      });
    b.length ? Promise.all(b).then(D) : D();
  }
  return b;
}
function _c(i, a, r = {}) {
  var g;
  const s = Ei(
    i,
    a,
    r.type === "exit"
      ? (g = i.presenceContext) == null
        ? void 0
        : g.custom
      : void 0
  );
  let { transition: c = i.getDefaultTransition() || {} } = s || {};
  r.transitionOverride && (c = r.transitionOverride);
  const d = s ? () => Promise.all(ig(i, s, r)) : () => Promise.resolve(),
    f =
      i.variantChildren && i.variantChildren.size
        ? (y = 0) => {
            const {
              delayChildren: x = 0,
              staggerChildren: b,
              staggerDirection: S,
            } = c;
            return C2(i, a, y, x, b, S, r);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [y, x] = m === "beforeChildren" ? [d, f] : [f, d];
    return y().then(() => x());
  } else return Promise.all([d(), f(r.delay)]);
}
function C2(i, a, r = 0, s = 0, c = 0, d = 1, f) {
  const m = [];
  for (const g of i.variantChildren)
    g.notify("AnimationStart", a),
      m.push(
        _c(g, a, {
          ...f,
          delay:
            r +
            (typeof s == "function" ? 0 : s) +
            Wy(i.variantChildren, g, s, c, d),
        }).then(() => g.notify("AnimationComplete", a))
      );
  return Promise.all(m);
}
function D2(i, a, r = {}) {
  i.notify("AnimationStart", a);
  let s;
  if (Array.isArray(a)) {
    const c = a.map((d) => _c(i, d, r));
    s = Promise.all(c);
  } else if (typeof a == "string") s = _c(i, a, r);
  else {
    const c = typeof a == "function" ? Ei(i, a, r.custom) : a;
    s = Promise.all(ig(i, c, r));
  }
  return s.then(() => {
    i.notify("AnimationComplete", a);
  });
}
const R2 = { test: (i) => i === "auto", parse: (i) => i },
  ag = (i) => (a) => a.test(i),
  lg = [xa, W, an, An, sb, lb, R2],
  I0 = (i) => lg.find(ag(i));
function z2(i) {
  return typeof i == "number"
    ? i === 0
    : i !== null
    ? i === "none" || i === "0" || yy(i)
    : !0;
}
const _2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function O2(i) {
  const [a, r] = i.slice(0, -1).split("(");
  if (a === "drop-shadow") return i;
  const [s] = r.match(af) || [];
  if (!s) return i;
  const c = r.replace(s, "");
  let d = _2.has(a) ? 1 : 0;
  return s !== r && (d *= 100), a + "(" + d + c + ")";
}
const V2 = /\b([a-z-]*)\(.*?\)/gu,
  Oc = {
    ...Fe,
    getAnimatableNone: (i) => {
      const a = i.match(V2);
      return a ? a.map(O2).join(" ") : i;
    },
  },
  Vc = {
    ...Fe,
    getAnimatableNone: (i) => {
      const a = Fe.parse(i);
      return Fe.createTransformer(i)(
        a.map((s) =>
          typeof s == "number"
            ? 0
            : typeof s == "object"
            ? { ...s, alpha: 1 }
            : s
        )
      );
    },
  },
  tp = { ...xa, transform: Math.round },
  L2 = {
    rotate: An,
    pathRotation: An,
    rotateX: An,
    rotateY: An,
    rotateZ: An,
    scale: $s,
    scaleX: $s,
    scaleY: $s,
    scaleZ: $s,
    skew: An,
    skewX: An,
    skewY: An,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: Ml,
    originX: Y0,
    originY: Y0,
    originZ: W,
  },
  gr = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    inset: W,
    insetBlock: W,
    insetBlockStart: W,
    insetBlockEnd: W,
    insetInline: W,
    insetInlineStart: W,
    insetInlineEnd: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    paddingBlock: W,
    paddingBlockStart: W,
    paddingBlockEnd: W,
    paddingInline: W,
    paddingInlineStart: W,
    paddingInlineEnd: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    marginBlock: W,
    marginBlockStart: W,
    marginBlockEnd: W,
    marginInline: W,
    marginInlineStart: W,
    marginInlineEnd: W,
    fontSize: W,
    backgroundPositionX: W,
    backgroundPositionY: W,
    ...L2,
    zIndex: tp,
    fillOpacity: Ml,
    strokeOpacity: Ml,
    numOctaves: tp,
  },
  B2 = {
    ...gr,
    color: Jt,
    backgroundColor: Jt,
    outlineColor: Jt,
    fill: Jt,
    stroke: Jt,
    borderColor: Jt,
    borderTopColor: Jt,
    borderRightColor: Jt,
    borderBottomColor: Jt,
    borderLeftColor: Jt,
    filter: Oc,
    WebkitFilter: Oc,
    mask: Vc,
    WebkitMask: Vc,
  },
  sg = (i) => B2[i],
  U2 = new Set([Oc, Vc]);
function rg(i, a) {
  let r = sg(i);
  return (
    U2.has(r) || (r = Fe), r.getAnimatableNone ? r.getAnimatableNone(a) : void 0
  );
}
const H2 = new Set(["auto", "none", "0"]);
function Y2(i, a, r) {
  let s = 0,
    c;
  for (; s < i.length && !c; ) {
    const d = i[s];
    typeof d == "string" && !H2.has(d) && ga(d).values.length && (c = i[s]),
      s++;
  }
  if (c && r) for (const d of a) i[d] = rg(r, c);
}
class q2 extends cf {
  constructor(a, r, s, c, d) {
    super(a, r, s, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: a, element: r, name: s } = this;
    if (!r || !r.current) return;
    super.readKeyframes();
    for (let x = 0; x < a.length; x++) {
      let b = a[x];
      if (typeof b == "string" && ((b = b.trim()), nf(b))) {
        const S = Iy(b, r.current);
        S !== void 0 && (a[x] = S),
          x === a.length - 1 && (this.finalKeyframe = b);
      }
    }
    if ((this.resolveNoneKeyframes(), !tg.has(s) || a.length !== 2)) return;
    const [c, d] = a,
      f = I0(c),
      m = I0(d),
      g = H0(c),
      y = H0(d);
    if (g !== y && Pn[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== m)
      if (J0(f) && J0(m))
        for (let x = 0; x < a.length; x++) {
          const b = a[x];
          typeof b == "string" && (a[x] = parseFloat(b));
        }
      else Pn[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: a, name: r } = this,
      s = [];
    for (let c = 0; c < a.length; c++) (a[c] === null || z2(a[c])) && s.push(c);
    s.length && Y2(a, s, r);
  }
  measureInitialState() {
    const { element: a, unresolvedKeyframes: r, name: s } = this;
    if (!a || !a.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Pn[s](
        a.measureViewportBox(),
        window.getComputedStyle(a.current)
      )),
      (r[0] = this.measuredOrigin);
    const c = r[r.length - 1];
    c !== void 0 && a.getValue(s, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: a, name: r, unresolvedKeyframes: s } = this;
    if (!a || !a.current) return;
    const c = a.getValue(r);
    c && c.jump(this.measuredOrigin, !1);
    const d = s.length - 1,
      f = s[d];
    (s[d] = Pn[r](a.measureViewportBox(), window.getComputedStyle(a.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([g, y]) => {
          a.getValue(g).set(y);
        }),
      this.resolveNoneKeyframes();
  }
}
function og(i, a, r) {
  if (i == null) return [];
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    const c = document.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((s) => s != null);
}
const Lc = (i, a) => (a && typeof i == "number" ? a.transform(i) : i);
function Al(i) {
  return py(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: va, cancel: ug } = jy(queueMicrotask, !1),
  Ze = { x: !1, y: !1 };
function cg() {
  return Ze.x || Ze.y;
}
function G2(i) {
  return i === "x" || i === "y"
    ? Ze[i]
      ? null
      : ((Ze[i] = !0),
        () => {
          Ze[i] = !1;
        })
    : Ze.x || Ze.y
    ? null
    : ((Ze.x = Ze.y = !0),
      () => {
        Ze.x = Ze.y = !1;
      });
}
function fg(i, a) {
  const r = og(i),
    s = new AbortController(),
    c = { passive: !0, ...a, signal: s.signal };
  return [r, c, () => s.abort()];
}
function k2(i) {
  return !(i.pointerType === "touch" || cg());
}
function X2(i, a, r = {}) {
  const [s, c, d] = fg(i, r);
  return (
    s.forEach((f) => {
      let m = !1,
        g = !1,
        y;
      const x = () => {
          f.removeEventListener("pointerleave", D);
        },
        b = (H) => {
          y && (y(H), (y = void 0)), x();
        },
        S = (H) => {
          (m = !1),
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            g && ((g = !1), b(H));
        },
        M = () => {
          (m = !0),
            window.addEventListener("pointerup", S, c),
            window.addEventListener("pointercancel", S, c);
        },
        D = (H) => {
          if (H.pointerType !== "touch") {
            if (m) {
              g = !0;
              return;
            }
            b(H);
          }
        },
        U = (H) => {
          if (!k2(H)) return;
          g = !1;
          const L = a(f, H);
          typeof L == "function" &&
            ((y = L), f.addEventListener("pointerleave", D, c));
        };
      f.addEventListener("pointerenter", U, c),
        f.addEventListener("pointerdown", M, c);
    }),
    d
  );
}
const dg = (i, a) => (a ? (i === a ? !0 : dg(i, a.parentElement)) : !1),
  gf = (i) =>
    i.pointerType === "mouse"
      ? typeof i.button != "number" || i.button <= 0
      : i.isPrimary !== !1,
  Q2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function K2(i) {
  return Q2.has(i.tagName) || i.isContentEditable === !0;
}
const Z2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function J2(i) {
  return Z2.has(i.tagName) || i.isContentEditable === !0;
}
const lr = new WeakSet();
function ep(i) {
  return (a) => {
    a.key === "Enter" && i(a);
  };
}
function rc(i, a) {
  i.dispatchEvent(
    new PointerEvent("pointer" + a, { isPrimary: !0, bubbles: !0 })
  );
}
const F2 = (i, a) => {
  const r = i.currentTarget;
  if (!r) return;
  const s = ep(() => {
    if (lr.has(r)) return;
    rc(r, "down");
    const c = ep(() => {
        rc(r, "up");
      }),
      d = () => rc(r, "cancel");
    r.addEventListener("keyup", c, a), r.addEventListener("blur", d, a);
  });
  r.addEventListener("keydown", s, a),
    r.addEventListener("blur", () => r.removeEventListener("keydown", s), a);
};
function np(i) {
  return gf(i) && !cg();
}
const ip = new WeakSet();
function P2(i, a, r = {}) {
  const [s, c, d] = fg(i, r),
    f = (m) => {
      const g = m.currentTarget;
      if (!np(m) || ip.has(m)) return;
      lr.add(g), r.stopPropagation && ip.add(m);
      const y = a(g, m),
        x = (M, D) => {
          window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", S),
            lr.has(g) && lr.delete(g),
            np(M) && typeof y == "function" && y(M, { success: D });
        },
        b = (M) => {
          x(
            M,
            g === window ||
              g === document ||
              r.useGlobalTarget ||
              dg(g, M.target)
          );
        },
        S = (M) => {
          x(M, !1);
        };
      window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", S, c);
    };
  return (
    s.forEach((m) => {
      (r.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c),
        Al(m) &&
          (m.addEventListener("focus", (y) => F2(y, c)),
          !K2(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
    }),
    d
  );
}
function vf(i) {
  return py(i) && "ownerSVGElement" in i;
}
const sr = new WeakMap();
let Fn;
const hg = (i, a, r) => (s, c) =>
    c && c[0]
      ? c[0][i + "Size"]
      : vf(s) && "getBBox" in s
      ? s.getBBox()[a]
      : s[r],
  W2 = hg("inline", "width", "offsetWidth"),
  $2 = hg("block", "height", "offsetHeight");
function I2({ target: i, borderBoxSize: a }) {
  var r;
  (r = sr.get(i)) == null ||
    r.forEach((s) => {
      s(i, {
        get width() {
          return W2(i, a);
        },
        get height() {
          return $2(i, a);
        },
      });
    });
}
function tS(i) {
  i.forEach(I2);
}
function eS() {
  typeof ResizeObserver > "u" || (Fn = new ResizeObserver(tS));
}
function nS(i, a) {
  Fn || eS();
  const r = og(i);
  return (
    r.forEach((s) => {
      let c = sr.get(s);
      c || ((c = new Set()), sr.set(s, c)),
        c.add(a),
        Fn == null || Fn.observe(s);
    }),
    () => {
      r.forEach((s) => {
        const c = sr.get(s);
        c == null || c.delete(a),
          (c != null && c.size) || Fn == null || Fn.unobserve(s);
      });
    }
  );
}
const rr = new Set();
let da;
function iS() {
  (da = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    rr.forEach((a) => a(i));
  }),
    window.addEventListener("resize", da);
}
function aS(i) {
  return (
    rr.add(i),
    da || iS(),
    () => {
      rr.delete(i),
        !rr.size &&
          typeof da == "function" &&
          (window.removeEventListener("resize", da), (da = void 0));
    }
  );
}
function Bc(i, a) {
  return typeof i == "function" ? aS(i) : nS(i, a);
}
function mg(i, a) {
  let r;
  const s = () => {
    const { currentTime: c } = a,
      f = (c === null ? 0 : c.value) / 100;
    r !== f && i(f), (r = f);
  };
  return vt.preUpdate(s, !0), () => Ge(s);
}
function lS(i) {
  return vf(i) && i.tagName === "svg";
}
function sS(...i) {
  const a = !Array.isArray(i[0]),
    r = a ? 0 : -1,
    s = i[0 + r],
    c = i[1 + r],
    d = i[2 + r],
    f = i[3 + r],
    m = of(c, d, f);
  return a ? m(s) : m;
}
const rS = [...lg, Jt, Fe],
  oS = (i) => rS.find(ag(i)),
  ap = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ha = () => ({ x: ap(), y: ap() }),
  lp = () => ({ min: 0, max: 0 }),
  Pt = () => ({ x: lp(), y: lp() }),
  uS = new WeakMap();
function Mr(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Nl(i) {
  return typeof i == "string" || Array.isArray(i);
}
const xf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  bf = ["initial", ...xf];
function Nr(i) {
  return Mr(i.animate) || bf.some((a) => Nl(i[a]));
}
function pg(i) {
  return !!(Nr(i) || i.variants);
}
function cS(i, a, r) {
  for (const s in a) {
    const c = a[s],
      d = r[s];
    if (se(c)) i.addValue(s, c);
    else if (se(d)) i.addValue(s, Je(c, { owner: i }));
    else if (d !== c)
      if (i.hasValue(s)) {
        const f = i.getValue(s);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = i.getStaticValue(s);
        i.addValue(s, Je(f !== void 0 ? f : c, { owner: i }));
      }
  }
  for (const s in r) a[s] === void 0 && i.removeValue(s);
  return a;
}
const Uc = { current: null },
  yg = { current: !1 },
  fS = typeof window < "u";
function dS() {
  if (((yg.current = !0), !!fS))
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"),
        a = () => (Uc.current = i.matches);
      i.addEventListener("change", a), a();
    } else Uc.current = !1;
}
const sp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let vr = {};
function gg(i) {
  vr = i;
}
function hS() {
  return vr;
}
class mS {
  scrapeMotionValuesFromProps(a, r, s) {
    return {};
  }
  constructor(
    {
      parent: a,
      props: r,
      presenceContext: s,
      reducedMotionConfig: c,
      skipAnimations: d,
      blockInitialAnimation: f,
      visualState: m,
    },
    g = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = cf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const M = ce.now();
        this.renderScheduledAt < M &&
          ((this.renderScheduledAt = M), vt.render(this.render, !1, !0));
      });
    const { latestValues: y, renderState: x } = m;
    (this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = r.initial ? { ...y } : {}),
      (this.renderState = x),
      (this.parent = a),
      (this.props = r),
      (this.presenceContext = s),
      (this.depth = a ? a.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = d),
      (this.options = g),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = Nr(r)),
      (this.isVariantNode = pg(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(a && a.current));
    const { willChange: b, ...S } = this.scrapeMotionValuesFromProps(
      r,
      {},
      this
    );
    for (const M in S) {
      const D = S[M];
      y[M] !== void 0 && se(D) && D.set(y[M]);
    }
  }
  mount(a) {
    var r, s;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        (r = this.values.get(c)) == null || r.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]);
    (this.current = a),
      uS.set(a, this),
      this.projection && !this.projection.instance && this.projection.mount(a),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((c, d) => this.bindToMotionValue(d, c)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
        ? (this.shouldReduceMotion = !0)
        : (yg.current || dS(), (this.shouldReduceMotion = Uc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (s = this.parent) == null || s.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0);
  }
  unmount() {
    var a;
    this.projection && this.projection.unmount(),
      Ge(this.notifyUpdate),
      Ge(this.render),
      this.valueSubscriptions.forEach((r) => r()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (a = this.parent) == null || a.removeChild(this);
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features) {
      const s = this.features[r];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(a) {
    this.children.add(a),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(a);
  }
  removeChild(a) {
    this.children.delete(a),
      this.enteringChildren && this.enteringChildren.delete(a);
  }
  bindToMotionValue(a, r) {
    if (
      (this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)(),
      r.accelerate && Py.has(a) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: f,
          keyframes: m,
          times: g,
          ease: y,
          duration: x,
        } = r.accelerate,
        b = new Jy({
          element: this.current,
          name: a,
          keyframes: m,
          times: g,
          ease: y,
          duration: De(x),
        }),
        S = f(b);
      this.valueSubscriptions.set(a, () => {
        S(), b.cancel();
      });
      return;
    }
    const s = Sa.has(a);
    s && this.onBindTransform && this.onBindTransform();
    const c = r.on("change", (f) => {
      (this.latestValues[a] = f),
        this.props.onUpdate && vt.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let d;
    typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, a, r)),
      this.valueSubscriptions.set(a, () => {
        c(), d && d();
      });
  }
  sortNodePosition(a) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== a.type
      ? 0
      : this.sortInstanceNodePosition(this.current, a.current);
  }
  updateFeatures() {
    let a = "animation";
    for (a in vr) {
      const r = vr[a];
      if (!r) continue;
      const { isEnabled: s, Feature: c } = r;
      if (
        (!this.features[a] &&
          c &&
          s(this.props) &&
          (this.features[a] = new c(this)),
        this.features[a])
      ) {
        const d = this.features[a];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Pt();
  }
  getStaticValue(a) {
    return this.latestValues[a];
  }
  setStaticValue(a, r) {
    this.latestValues[a] = r;
  }
  update(a, r) {
    (a.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = a),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let s = 0; s < sp.length; s++) {
      const c = sp[s];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = a[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    (this.prevMotionValues = cS(
      this,
      this.scrapeMotionValuesFromProps(a, this.prevProps || {}, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(a) {
    return this.props.variants ? this.props.variants[a] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(a) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(a),
        () => r.variantChildren.delete(a)
      );
  }
  addValue(a, r) {
    const s = this.values.get(a);
    r !== s &&
      (s && this.removeValue(a),
      this.bindToMotionValue(a, r),
      this.values.set(a, r),
      (this.latestValues[a] = r.get()));
  }
  removeValue(a) {
    this.values.delete(a);
    const r = this.valueSubscriptions.get(a);
    r && (r(), this.valueSubscriptions.delete(a)),
      delete this.latestValues[a],
      this.removeValueFromRenderState(a, this.renderState);
  }
  hasValue(a) {
    return this.values.has(a);
  }
  getValue(a, r) {
    if (this.props.values && this.props.values[a]) return this.props.values[a];
    let s = this.values.get(a);
    return (
      s === void 0 &&
        r !== void 0 &&
        ((s = Je(r === null ? void 0 : r, { owner: this })),
        this.addValue(a, s)),
      s
    );
  }
  readValue(a, r) {
    let s =
      this.latestValues[a] !== void 0 || !this.current
        ? this.latestValues[a]
        : this.getBaseTargetFromProps(this.props, a) ??
          this.readValueFromInstance(this.current, a, this.options);
    return (
      s != null &&
        (typeof s == "string" && (my(s) || yy(s))
          ? (s = parseFloat(s))
          : !oS(s) && Fe.test(r) && (s = rg(a, r)),
        this.setBaseTarget(a, se(s) ? s.get() : s)),
      se(s) ? s.get() : s
    );
  }
  setBaseTarget(a, r) {
    this.baseTarget[a] = r;
  }
  getBaseTarget(a) {
    var d;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const f = pf(
        this.props,
        r,
        (d = this.presenceContext) == null ? void 0 : d.custom
      );
      f && (s = f[a]);
    }
    if (r && s !== void 0) return s;
    const c = this.getBaseTargetFromProps(this.props, a);
    return c !== void 0 && !se(c)
      ? c
      : this.initialValues[a] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[a];
  }
  on(a, r) {
    return this.events[a] || (this.events[a] = new $c()), this.events[a].add(r);
  }
  notify(a, ...r) {
    this.events[a] && this.events[a].notify(...r);
  }
  scheduleRenderMicrotask() {
    va.render(this.render);
  }
}
class vg extends mS {
  constructor() {
    super(...arguments), (this.KeyframeResolver = q2);
  }
  sortInstanceNodePosition(a, r) {
    return a.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(a, r) {
    const s = a.style;
    return s ? s[r] : void 0;
  }
  removeValueFromRenderState(a, { vars: r, style: s }) {
    delete r[a], delete s[a];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: a } = this.props;
    se(a) &&
      (this.childSubscription = a.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
}
class In {
  constructor(a) {
    (this.isMounted = !1), (this.node = a);
  }
  update() {}
}
function xg({ top: i, left: a, right: r, bottom: s }) {
  return { x: { min: a, max: r }, y: { min: i, max: s } };
}
function pS({ x: i, y: a }) {
  return { top: a.min, right: i.max, bottom: a.max, left: i.min };
}
function yS(i, a) {
  if (!a) return i;
  const r = a({ x: i.left, y: i.top }),
    s = a({ x: i.right, y: i.bottom });
  return { top: r.y, left: r.x, bottom: s.y, right: s.x };
}
function oc(i) {
  return i === void 0 || i === 1;
}
function Hc({ scale: i, scaleX: a, scaleY: r }) {
  return !oc(i) || !oc(a) || !oc(r);
}
function bi(i) {
  return (
    Hc(i) ||
    bg(i) ||
    i.z ||
    i.rotate ||
    i.rotateX ||
    i.rotateY ||
    i.skewX ||
    i.skewY
  );
}
function bg(i) {
  return rp(i.x) || rp(i.y);
}
function rp(i) {
  return i && i !== "0%";
}
function xr(i, a, r) {
  const s = i - r,
    c = a * s;
  return r + c;
}
function op(i, a, r, s, c) {
  return c !== void 0 && (i = xr(i, c, s)), xr(i, r, s) + a;
}
function Yc(i, a = 0, r = 1, s, c) {
  (i.min = op(i.min, a, r, s, c)), (i.max = op(i.max, a, r, s, c));
}
function Sg(i, { x: a, y: r }) {
  Yc(i.x, a.translate, a.scale, a.originPoint),
    Yc(i.y, r.translate, r.scale, r.originPoint);
}
const up = 0.999999999999,
  cp = 1.0000000000001;
function gS(i, a, r, s = !1) {
  var m;
  const c = r.length;
  if (!c) return;
  a.x = a.y = 1;
  let d, f;
  for (let g = 0; g < c; g++) {
    (d = r[g]), (f = d.projectionDelta);
    const { visualElement: y } = d.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (s &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        (nn(i.x, -d.scroll.offset.x), nn(i.y, -d.scroll.offset.y)),
      f && ((a.x *= f.x.scale), (a.y *= f.y.scale), Sg(i, f)),
      s &&
        bi(d.latestValues) &&
        or(i, d.latestValues, (m = d.layout) == null ? void 0 : m.layoutBox));
  }
  a.x < cp && a.x > up && (a.x = 1), a.y < cp && a.y > up && (a.y = 1);
}
function nn(i, a) {
  (i.min += a), (i.max += a);
}
function fp(i, a, r, s, c = 0.5) {
  const d = Rt(i.min, i.max, c);
  Yc(i, a, r, d, s);
}
function dp(i, a) {
  return typeof i == "string" ? (parseFloat(i) / 100) * (a.max - a.min) : i;
}
function or(i, a, r) {
  const s = r ?? i;
  fp(i.x, dp(a.x, s.x), a.scaleX, a.scale, a.originX),
    fp(i.y, dp(a.y, s.y), a.scaleY, a.scale, a.originY);
}
function Tg(i, a) {
  return xg(yS(i.getBoundingClientRect(), a));
}
function vS(i, a, r) {
  const s = Tg(i, r),
    { scroll: c } = a;
  return c && (nn(s.x, c.offset.x), nn(s.y, c.offset.y)), s;
}
const xS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  bS = ba.length;
function SS(i, a, r) {
  let s = "",
    c = !0;
  for (let f = 0; f < bS; f++) {
    const m = ba[f],
      g = i[m];
    if (g === void 0) continue;
    let y = !0;
    if (typeof g == "number") y = g === (m.startsWith("scale") ? 1 : 0);
    else {
      const x = parseFloat(g);
      y = m.startsWith("scale") ? x === 1 : x === 0;
    }
    if (!y || r) {
      const x = Lc(g, gr[m]);
      if (!y) {
        c = !1;
        const b = xS[m] || m;
        s += `${b}(${x}) `;
      }
      r && (a[m] = x);
    }
  }
  const d = i.pathRotation;
  return (
    d && ((c = !1), (s += `rotate(${Lc(d, gr.pathRotation)}) `)),
    (s = s.trim()),
    r ? (s = r(a, c ? "" : s)) : c && (s = "none"),
    s
  );
}
function Sf(i, a, r) {
  const { style: s, vars: c, transformOrigin: d } = i;
  let f = !1,
    m = !1;
  for (const g in a) {
    const y = a[g];
    if (Sa.has(g)) {
      f = !0;
      continue;
    } else if (Dy(g)) {
      c[g] = y;
      continue;
    } else {
      const x = Lc(y, gr[g]);
      g.startsWith("origin") ? ((m = !0), (d[g] = x)) : (s[g] = x);
    }
  }
  if (
    (a.transform ||
      (f || r
        ? (s.transform = SS(a, i.transform, r))
        : s.transform && (s.transform = "none")),
    m)
  ) {
    const { originX: g = "50%", originY: y = "50%", originZ: x = 0 } = d;
    s.transformOrigin = `${g} ${y} ${x}`;
  }
}
function Ag(i, { style: a, vars: r }, s, c) {
  const d = i.style;
  let f;
  for (f in a) d[f] = a[f];
  c == null || c.applyProjectionStyles(d, s);
  for (f in r) d.setProperty(f, r[f]);
}
function hp(i, a) {
  return a.max === a.min ? 0 : (i / (a.max - a.min)) * 100;
}
const gl = {
    correct: (i, a) => {
      if (!a.target) return i;
      if (typeof i == "string")
        if (W.test(i)) i = parseFloat(i);
        else return i;
      const r = hp(i, a.target.x),
        s = hp(i, a.target.y);
      return `${r}% ${s}%`;
    },
  },
  TS = {
    correct: (i, { treeScale: a, projectionDelta: r }) => {
      const s = i,
        c = Fe.parse(i);
      if (c.length > 5) return s;
      const d = Fe.createTransformer(i),
        f = typeof c[0] != "number" ? 1 : 0,
        m = r.x.scale * a.x,
        g = r.y.scale * a.y;
      (c[0 + f] /= m), (c[1 + f] /= g);
      const y = Rt(m, g, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= y),
        typeof c[3 + f] == "number" && (c[3 + f] /= y),
        d(c)
      );
    },
  },
  qc = {
    borderRadius: {
      ...gl,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: gl,
    borderTopRightRadius: gl,
    borderBottomLeftRadius: gl,
    borderBottomRightRadius: gl,
    boxShadow: TS,
  };
function Eg(i, { layout: a, layoutId: r }) {
  return (
    Sa.has(i) ||
    i.startsWith("origin") ||
    ((a || r !== void 0) && (!!qc[i] || i === "opacity"))
  );
}
function Tf(i, a, r) {
  var f;
  const s = i.style,
    c = a == null ? void 0 : a.style,
    d = {};
  if (!s) return d;
  for (const m in s)
    (se(s[m]) ||
      (c && se(c[m])) ||
      Eg(m, i) ||
      ((f = r == null ? void 0 : r.getValue(m)) == null
        ? void 0
        : f.liveStyle) !== void 0) &&
      (d[m] = s[m]);
  return d;
}
function AS(i) {
  return window.getComputedStyle(i);
}
class ES extends vg {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Ag);
  }
  readValueFromInstance(a, r) {
    var s;
    if (Sa.has(r))
      return (s = this.projection) != null && s.isProjecting ? wc(r) : Xb(a, r);
    {
      const c = AS(a),
        d = (Dy(r) ? c.getPropertyValue(r) : c[r]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(a, { transformPagePoint: r }) {
    return Tg(a, r);
  }
  build(a, r, s) {
    Sf(a, r, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(a, r, s) {
    return Tf(a, r, s);
  }
}
const wS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  MS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function NS(i, a, r = 1, s = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? wS : MS;
  (i[d.offset] = `${-s}`), (i[d.array] = `${a} ${r}`);
}
const jS = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function wg(
  i,
  {
    attrX: a,
    attrY: r,
    attrScale: s,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: f = 0,
    ...m
  },
  g,
  y,
  x
) {
  if ((Sf(i, m, y), g)) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  (i.attrs = i.style), (i.style = {});
  const { attrs: b, style: S } = i;
  b.transform && ((S.transform = b.transform), delete b.transform),
    (S.transform || b.transformOrigin) &&
      ((S.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    S.transform &&
      ((S.transformBox = (x == null ? void 0 : x.transformBox) ?? "fill-box"),
      delete b.transformBox);
  for (const M of jS) b[M] !== void 0 && ((S[M] = b[M]), delete b[M]);
  a !== void 0 && (b.x = a),
    r !== void 0 && (b.y = r),
    s !== void 0 && (b.scale = s),
    c !== void 0 && NS(b, c, d, f, !1);
}
const Mg = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Ng = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function CS(i, a, r, s) {
  Ag(i, a, void 0, s);
  for (const c in a.attrs) i.setAttribute(Mg.has(c) ? c : yf(c), a.attrs[c]);
}
function jg(i, a, r) {
  const s = Tf(i, a, r);
  for (const c in i)
    if (se(i[c]) || se(a[c])) {
      const d =
        ba.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      s[d] = i[c];
    }
  return s;
}
class DS extends vg {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Pt);
  }
  getBaseTargetFromProps(a, r) {
    return a[r];
  }
  readValueFromInstance(a, r) {
    if (Sa.has(r)) {
      const s = sg(r);
      return (s && s.default) || 0;
    }
    return (r = Mg.has(r) ? r : yf(r)), a.getAttribute(r);
  }
  scrapeMotionValuesFromProps(a, r, s) {
    return jg(a, r, s);
  }
  build(a, r, s) {
    wg(a, r, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(a, r, s, c) {
    CS(a, r, s, c);
  }
  mount(a) {
    (this.isSVGTag = Ng(a.tagName)), super.mount(a);
  }
}
const RS = bf.length;
function Cg(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const r = i.parent ? Cg(i.parent) || {} : {};
    return i.props.initial !== void 0 && (r.initial = i.props.initial), r;
  }
  const a = {};
  for (let r = 0; r < RS; r++) {
    const s = bf[r],
      c = i.props[s];
    (Nl(c) || c === !1) && (a[s] = c);
  }
  return a;
}
function Dg(i, a) {
  if (!Array.isArray(a)) return !1;
  const r = a.length;
  if (r !== i.length) return !1;
  for (let s = 0; s < r; s++) if (a[s] !== i[s]) return !1;
  return !0;
}
const zS = [...xf].reverse(),
  _S = xf.length;
function OS(i) {
  return (a) =>
    Promise.all(a.map(({ animation: r, options: s }) => D2(i, r, s)));
}
function VS(i) {
  let a = OS(i),
    r = mp(),
    s = !0,
    c = !1;
  const d = (y) => (x, b) => {
    var M;
    const S = Ei(
      i,
      b,
      y === "exit"
        ? (M = i.presenceContext) == null
          ? void 0
          : M.custom
        : void 0
    );
    if (S) {
      const { transition: D, transitionEnd: U, ...H } = S;
      x = { ...x, ...H, ...U };
    }
    return x;
  };
  function f(y) {
    a = y(i);
  }
  function m(y) {
    const { props: x } = i,
      b = Cg(i.parent) || {},
      S = [],
      M = new Set();
    let D = {},
      U = 1 / 0;
    for (let L = 0; L < _S; L++) {
      const q = zS[L],
        Y = r[q],
        Q = x[q] !== void 0 ? x[q] : b[q],
        tt = Nl(Q),
        G = q === y ? Y.isActive : null;
      G === !1 && (U = L);
      let X = Q === b[q] && Q !== x[q] && tt;
      if (
        (X && (s || c) && i.manuallyAnimateOnMount && (X = !1),
        (Y.protectedKeys = { ...D }),
        (!Y.isActive && G === null) ||
          (!Q && !Y.prevProp) ||
          Mr(Q) ||
          typeof Q == "boolean")
      )
        continue;
      if (q === "exit" && Y.isActive && G !== !0) {
        Y.prevResolvedValues && (D = { ...D, ...Y.prevResolvedValues });
        continue;
      }
      const K = LS(Y.prevProp, Q);
      let nt = K || (q === y && Y.isActive && !X && tt) || (L > U && tt),
        $ = !1;
      const pt = Array.isArray(Q) ? Q : [Q];
      let xt = pt.reduce(d(q), {});
      G === !1 && (xt = {});
      const { prevResolvedValues: te = {} } = Y,
        kt = { ...te, ...xt },
        Ht = (F) => {
          (nt = !0),
            M.has(F) && (($ = !0), M.delete(F)),
            (Y.needsAnimating[F] = !0);
          const ot = i.getValue(F);
          ot && (ot.liveStyle = !1);
        };
      for (const F in kt) {
        const ot = xt[F],
          yt = te[F];
        if (D.hasOwnProperty(F)) continue;
        let E = !1;
        Rc(ot) && Rc(yt) ? (E = !Dg(ot, yt) || K) : (E = ot !== yt),
          E
            ? ot != null
              ? Ht(F)
              : M.add(F)
            : ot !== void 0 && M.has(F)
            ? Ht(F)
            : (Y.protectedKeys[F] = !0);
      }
      (Y.prevProp = Q),
        (Y.prevResolvedValues = xt),
        Y.isActive && (D = { ...D, ...xt }),
        (s || c) && i.blockInitialAnimation && (nt = !1);
      const z = X && K;
      nt &&
        (!z || $) &&
        S.push(
          ...pt.map((F) => {
            const ot = { type: q };
            if (
              typeof F == "string" &&
              (s || c) &&
              !z &&
              i.manuallyAnimateOnMount &&
              i.parent
            ) {
              const { parent: yt } = i,
                E = Ei(yt, F);
              if (yt.enteringChildren && E) {
                const { delayChildren: B } = E.transition || {};
                ot.delay = Wy(yt.enteringChildren, i, B);
              }
            }
            return { animation: F, options: ot };
          })
        );
    }
    if (M.size) {
      const L = {};
      if (typeof x.initial != "boolean") {
        const q = Ei(i, Array.isArray(x.initial) ? x.initial[0] : x.initial);
        q && q.transition && (L.transition = q.transition);
      }
      M.forEach((q) => {
        const Y = i.getBaseTarget(q),
          Q = i.getValue(q);
        Q && (Q.liveStyle = !0), (L[q] = Y ?? null);
      }),
        S.push({ animation: L });
    }
    let H = !!S.length;
    return (
      s &&
        (x.initial === !1 || x.initial === x.animate) &&
        !i.manuallyAnimateOnMount &&
        (H = !1),
      (s = !1),
      (c = !1),
      H ? a(S) : Promise.resolve()
    );
  }
  function g(y, x) {
    var S;
    if (r[y].isActive === x) return Promise.resolve();
    (S = i.variantChildren) == null ||
      S.forEach((M) => {
        var D;
        return (D = M.animationState) == null ? void 0 : D.setActive(y, x);
      }),
      (r[y].isActive = x);
    const b = m(y);
    for (const M in r) r[M].protectedKeys = {};
    return b;
  }
  return {
    animateChanges: m,
    setActive: g,
    setAnimateFunction: f,
    getState: () => r,
    reset: () => {
      (r = mp()), (c = !0);
    },
  };
}
function LS(i, a) {
  return typeof a == "string" ? a !== i : Array.isArray(a) ? !Dg(a, i) : !1;
}
function xi(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function mp() {
  return {
    animate: xi(!0),
    whileInView: xi(),
    whileHover: xi(),
    whileTap: xi(),
    whileDrag: xi(),
    whileFocus: xi(),
    exit: xi(),
  };
}
function Gc(i, a) {
  (i.min = a.min), (i.max = a.max);
}
function Ke(i, a) {
  Gc(i.x, a.x), Gc(i.y, a.y);
}
function pp(i, a) {
  (i.translate = a.translate),
    (i.scale = a.scale),
    (i.originPoint = a.originPoint),
    (i.origin = a.origin);
}
const Rg = 1e-4,
  BS = 1 - Rg,
  US = 1 + Rg,
  zg = 0.01,
  HS = 0 - zg,
  YS = 0 + zg;
function fe(i) {
  return i.max - i.min;
}
function qS(i, a, r) {
  return Math.abs(i - a) <= r;
}
function yp(i, a, r, s = 0.5) {
  (i.origin = s),
    (i.originPoint = Rt(a.min, a.max, i.origin)),
    (i.scale = fe(r) / fe(a)),
    (i.translate = Rt(r.min, r.max, i.origin) - i.originPoint),
    ((i.scale >= BS && i.scale <= US) || isNaN(i.scale)) && (i.scale = 1),
    ((i.translate >= HS && i.translate <= YS) || isNaN(i.translate)) &&
      (i.translate = 0);
}
function El(i, a, r, s) {
  yp(i.x, a.x, r.x, s ? s.originX : void 0),
    yp(i.y, a.y, r.y, s ? s.originY : void 0);
}
function gp(i, a, r, s = 0) {
  const c = s ? Rt(r.min, r.max, s) : r.min;
  (i.min = c + a.min), (i.max = i.min + fe(a));
}
function GS(i, a, r, s) {
  gp(i.x, a.x, r.x, s == null ? void 0 : s.x),
    gp(i.y, a.y, r.y, s == null ? void 0 : s.y);
}
function vp(i, a, r, s = 0) {
  const c = s ? Rt(r.min, r.max, s) : r.min;
  (i.min = a.min - c), (i.max = i.min + fe(a));
}
function br(i, a, r, s) {
  vp(i.x, a.x, r.x, s == null ? void 0 : s.x),
    vp(i.y, a.y, r.y, s == null ? void 0 : s.y);
}
function xp(i, a, r, s, c) {
  return (
    (i -= a), (i = xr(i, 1 / r, s)), c !== void 0 && (i = xr(i, 1 / c, s)), i
  );
}
function kS(i, a = 0, r = 1, s = 0.5, c, d = i, f = i) {
  if (
    (an.test(a) &&
      ((a = parseFloat(a)), (a = Rt(f.min, f.max, a / 100) - f.min)),
    typeof a != "number")
  )
    return;
  let m = Rt(d.min, d.max, s);
  i === d && (m -= a),
    (i.min = xp(i.min, a, r, m, c)),
    (i.max = xp(i.max, a, r, m, c));
}
function bp(i, a, [r, s, c], d, f) {
  kS(i, a[r], a[s], a[c], a.scale, d, f);
}
const XS = ["x", "scaleX", "originX"],
  QS = ["y", "scaleY", "originY"];
function Sp(i, a, r, s) {
  bp(i.x, a, XS, r ? r.x : void 0, s ? s.x : void 0),
    bp(i.y, a, QS, r ? r.y : void 0, s ? s.y : void 0);
}
function Tp(i) {
  return i.translate === 0 && i.scale === 1;
}
function _g(i) {
  return Tp(i.x) && Tp(i.y);
}
function Ap(i, a) {
  return i.min === a.min && i.max === a.max;
}
function KS(i, a) {
  return Ap(i.x, a.x) && Ap(i.y, a.y);
}
function Ep(i, a) {
  return (
    Math.round(i.min) === Math.round(a.min) &&
    Math.round(i.max) === Math.round(a.max)
  );
}
function Og(i, a) {
  return Ep(i.x, a.x) && Ep(i.y, a.y);
}
function wp(i) {
  return fe(i.x) / fe(i.y);
}
function Mp(i, a) {
  return (
    i.translate === a.translate &&
    i.scale === a.scale &&
    i.originPoint === a.originPoint
  );
}
function en(i) {
  return [i("x"), i("y")];
}
function ZS(i, a, r) {
  let s = "";
  const c = i.x.translate / a.x,
    d = i.y.translate / a.y,
    f = (r == null ? void 0 : r.z) || 0;
  if (
    ((c || d || f) && (s = `translate3d(${c}px, ${d}px, ${f}px) `),
    (a.x !== 1 || a.y !== 1) && (s += `scale(${1 / a.x}, ${1 / a.y}) `),
    r)
  ) {
    const {
      transformPerspective: y,
      rotate: x,
      pathRotation: b,
      rotateX: S,
      rotateY: M,
      skewX: D,
      skewY: U,
    } = r;
    y && (s = `perspective(${y}px) ${s}`),
      x && (s += `rotate(${x}deg) `),
      b && (s += `rotate(${b}deg) `),
      S && (s += `rotateX(${S}deg) `),
      M && (s += `rotateY(${M}deg) `),
      D && (s += `skewX(${D}deg) `),
      U && (s += `skewY(${U}deg) `);
  }
  const m = i.x.scale * a.x,
    g = i.y.scale * a.y;
  return (m !== 1 || g !== 1) && (s += `scale(${m}, ${g})`), s || "none";
}
const Vg = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  JS = Vg.length,
  Np = (i) => (typeof i == "string" ? parseFloat(i) : i),
  jp = (i) => typeof i == "number" || W.test(i);
function FS(i, a, r, s, c, d) {
  c
    ? ((i.opacity = Rt(0, r.opacity ?? 1, PS(s))),
      (i.opacityExit = Rt(a.opacity ?? 1, 0, WS(s))))
    : d && (i.opacity = Rt(a.opacity ?? 1, r.opacity ?? 1, s));
  for (let f = 0; f < JS; f++) {
    const m = Vg[f];
    let g = Cp(a, m),
      y = Cp(r, m);
    if (g === void 0 && y === void 0) continue;
    g || (g = 0),
      y || (y = 0),
      g === 0 || y === 0 || jp(g) === jp(y)
        ? ((i[m] = Math.max(Rt(Np(g), Np(y), s), 0)),
          (an.test(y) || an.test(g)) && (i[m] += "%"))
        : (i[m] = y);
  }
  (a.rotate || r.rotate) && (i.rotate = Rt(a.rotate || 0, r.rotate || 0, s));
}
function Cp(i, a) {
  return i[a] !== void 0 ? i[a] : i.borderRadius;
}
const PS = Lg(0, 0.5, Ey),
  WS = Lg(0.5, 0.95, xe);
function Lg(i, a, r) {
  return (s) => (s < i ? 0 : s > a ? 1 : r(ya(i, a, s)));
}
function $S(i, a, r) {
  const s = se(i) ? i : Je(i);
  return s.start(mf("", s, a, r)), s.animation;
}
function jl(i, a, r, s = { passive: !0 }) {
  return i.addEventListener(a, r, s), () => i.removeEventListener(a, r);
}
const IS = (i, a) => i.depth - a.depth;
class tT {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(a) {
    Pc(this.children, a), (this.isDirty = !0);
  }
  remove(a) {
    dr(this.children, a), (this.isDirty = !0);
  }
  forEach(a) {
    this.isDirty && this.children.sort(IS),
      (this.isDirty = !1),
      this.children.forEach(a);
  }
}
function eT(i, a) {
  const r = ce.now(),
    s = ({ timestamp: c }) => {
      const d = c - r;
      d >= a && (Ge(s), i(d - a));
    };
  return vt.setup(s, !0), () => Ge(s);
}
function ur(i) {
  return se(i) ? i.get() : i;
}
class nT {
  constructor() {
    this.members = [];
  }
  add(a) {
    Pc(this.members, a);
    for (let r = this.members.length - 1; r >= 0; r--) {
      const s = this.members[r];
      if (s === a || s === this.lead || s === this.prevLead) continue;
      const c = s.instance;
      (!c || c.isConnected === !1) &&
        !s.snapshot &&
        (dr(this.members, s), s.unmount());
    }
    a.scheduleRender();
  }
  remove(a) {
    if (
      (dr(this.members, a),
      a === this.prevLead && (this.prevLead = void 0),
      a === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(a) {
    var r;
    for (let s = this.members.indexOf(a) - 1; s >= 0; s--) {
      const c = this.members[s];
      if (
        c.isPresent !== !1 &&
        ((r = c.instance) == null ? void 0 : r.isConnected) !== !1
      )
        return this.promote(c), !0;
    }
    return !1;
  }
  promote(a, r) {
    var c;
    const s = this.lead;
    if (a !== s && ((this.prevLead = s), (this.lead = a), a.show(), s)) {
      s.updateSnapshot(), a.scheduleRender();
      const { layoutDependency: d } = s.options,
        { layoutDependency: f } = a.options;
      (d === void 0 || d !== f) &&
        ((a.resumeFrom = s),
        r && (s.preserveOpacity = !0),
        s.snapshot &&
          ((a.snapshot = s.snapshot),
          (a.snapshot.latestValues = s.animationValues || s.latestValues)),
        (c = a.root) != null && c.isUpdating && (a.isLayoutDirty = !0)),
        a.options.crossfade === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((a) => {
      var r, s, c, d, f;
      (s = (r = a.options).onExitComplete) == null || s.call(r),
        (f =
          (c = a.resumingFrom) == null
            ? void 0
            : (d = c.options).onExitComplete) == null || f.call(d);
    });
  }
  scheduleRender() {
    this.members.forEach((a) => a.instance && a.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var a;
    (a = this.lead) != null && a.snapshot && (this.lead.snapshot = void 0);
  }
}
const cr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  uc = ["", "X", "Y", "Z"],
  iT = 1e3;
let aT = 0;
function cc(i, a, r, s) {
  const { latestValues: c } = a;
  c[i] && ((r[i] = c[i]), a.setStaticValue(i, 0), s && (s[i] = 0));
}
function Bg(i) {
  if (((i.hasCheckedOptimisedAppear = !0), i.root === i)) return;
  const { visualElement: a } = i.options;
  if (!a) return;
  const r = ng(a);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(r, "transform", vt, !(c || d));
  }
  const { parent: s } = i;
  s && !s.hasCheckedOptimisedAppear && Bg(s);
}
function Ug({
  attachResizeListener: i,
  defaultParent: a,
  measureScroll: r,
  checkIsScrollRoot: s,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, m = a == null ? void 0 : a()) {
      (this.id = aT++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(rT),
            this.nodes.forEach(hT),
            this.nodes.forEach(mT),
            this.nodes.forEach(oT);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0);
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new tT());
    }
    addEventListener(f, m) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new $c()),
        this.eventHandlers.get(f).add(m)
      );
    }
    notifyListeners(f, ...m) {
      const g = this.eventHandlers.get(f);
      g && g.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = vf(f) && !lS(f)), (this.instance = f);
      const { layoutId: m, layout: g, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (g || m) && (this.isLayoutDirty = !0),
        i)
      ) {
        let x,
          b = 0;
        const S = () => (this.root.updateBlockedByResize = !1);
        vt.read(() => {
          b = window.innerWidth;
        }),
          i(f, () => {
            const M = window.innerWidth;
            M !== b &&
              ((b = M),
              (this.root.updateBlockedByResize = !0),
              x && x(),
              (x = eT(S, 250)),
              cr.hasAnimatedSinceResize &&
                ((cr.hasAnimatedSinceResize = !1), this.nodes.forEach(zp)));
          });
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          y &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: x,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: S,
              layout: M,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const D =
                  this.options.transition || y.getDefaultTransition() || xT,
                { onLayoutAnimationStart: U, onLayoutAnimationComplete: H } =
                  y.getProps(),
                L = !this.targetLayout || !Og(this.targetLayout, M),
                q = !b && S;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                q ||
                (b && (L || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const Y = { ...hf(D, "layout"), onPlay: U, onComplete: H };
                (y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Y.delay = 0), (Y.type = !1)),
                  this.startAnimation(Y),
                  this.setAnimationOrigin(x, q, Y.path);
              } else
                b || zp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = M;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Ge(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(pT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Bg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let x = 0; x < this.path.length; x++) {
        const b = this.path[x];
        (b.shouldResetTransform = !0),
          (typeof b.latestValues.x == "string" ||
            typeof b.latestValues.y == "string") &&
            (b.isLayoutDirty = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: m, layout: g } = this.options;
      if (m === void 0 && !g) return;
      const y = this.getTransformTemplate();
      (this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const g = this.updateBlockedByResize;
        this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          g && this.nodes.forEach(cT),
          this.nodes.forEach(Dp);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Rp);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(fT),
            this.nodes.forEach(dT),
            this.nodes.forEach(lT),
            this.nodes.forEach(sT))
          : this.nodes.forEach(Rp),
        this.clearAllSnapshots();
      const m = ce.now();
      (It.delta = Pe(0, 1e3 / 60, m - It.timestamp)),
        (It.timestamp = m),
        (It.isProcessing = !0),
        ec.update.process(It),
        ec.preRender.process(It),
        ec.render.process(It),
        (It.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), va.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(uT), this.sharedNodes.forEach(yT);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        vt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      vt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !fe(this.snapshot.measuredBox.x) &&
          !fe(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = Pt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (m = !1),
        m && this.instance)
      ) {
        const g = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: g,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !_g(this.projectionDelta),
        g = this.getTransformTemplate(),
        y = g ? g(this.latestValues, "") : void 0,
        x = y !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (m || bi(this.latestValues) || x) &&
        (c(this.instance, y),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let g = this.removeElementScroll(m);
      return (
        f && (g = this.removeTransform(g)),
        bT(g),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: g,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var y;
      const { visualElement: f } = this.options;
      if (!f) return Pt();
      const m = f.measureViewportBox();
      if (
        !(
          ((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(ST)
        )
      ) {
        const { scroll: x } = this.root;
        x && (nn(m.x, x.offset.x), nn(m.y, x.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var g;
      const m = Pt();
      if ((Ke(m, f), (g = this.scroll) != null && g.wasRoot)) return m;
      for (let y = 0; y < this.path.length; y++) {
        const x = this.path[y],
          { scroll: b, options: S } = x;
        x !== this.root &&
          b &&
          S.layoutScroll &&
          (b.wasRoot && Ke(m, f), nn(m.x, b.offset.x), nn(m.y, b.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1, g) {
      var x, b;
      const y = g || Pt();
      Ke(y, f);
      for (let S = 0; S < this.path.length; S++) {
        const M = this.path[S];
        !m &&
          M.options.layoutScroll &&
          M.scroll &&
          M !== M.root &&
          (nn(y.x, -M.scroll.offset.x), nn(y.y, -M.scroll.offset.y)),
          bi(M.latestValues) &&
            or(
              y,
              M.latestValues,
              (x = M.layout) == null ? void 0 : x.layoutBox
            );
      }
      return (
        bi(this.latestValues) &&
          or(
            y,
            this.latestValues,
            (b = this.layout) == null ? void 0 : b.layoutBox
          ),
        y
      );
    }
    removeTransform(f) {
      var g;
      const m = Pt();
      Ke(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const x = this.path[y];
        if (!bi(x.latestValues)) continue;
        let b;
        x.instance &&
          (Hc(x.latestValues) && x.updateSnapshot(),
          (b = Pt()),
          Ke(b, x.measurePageBox())),
          Sp(
            m,
            x.latestValues,
            (g = x.snapshot) == null ? void 0 : g.layoutBox,
            b
          );
      }
      return bi(this.latestValues) && Sp(m, this.latestValues), m;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== It.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var M;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== m;
      if (
        !(
          f ||
          (g && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((M = this.parent) != null && M.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: x, layoutId: b } = this.options;
      if (!this.layout || !(x || b)) return;
      this.resolvedRelativeTargetAt = It.timestamp;
      const S = this.getClosestProjectingParent();
      S &&
        this.linkedParentVersion !== S.layoutVersion &&
        !S.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && S && S.layout
            ? this.createRelativeTarget(
                S,
                this.layout.layoutBox,
                S.layout.layoutBox
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Pt()), (this.targetWithTransforms = Pt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              GS(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
            ? (this.resumingFrom
                ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                : Ke(this.target, this.layout.layoutBox),
              Sg(this.target, this.targetDelta))
            : Ke(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            S &&
            !!S.resumingFrom == !!this.resumingFrom &&
            !S.options.layoutScroll &&
            S.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(S, this.target, S.target)
              : (this.relativeParent = this.relativeTarget = void 0)));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Hc(this.parent.latestValues) ||
          bg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, m, g) {
      (this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Pt()),
        (this.relativeTargetOrigin = Pt()),
        br(
          this.relativeTargetOrigin,
          m,
          g,
          this.options.layoutAnchor || void 0
        ),
        Ke(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var D;
      const f = this.getLead(),
        m = !!this.resumingFrom || this !== f;
      let g = !0;
      if (
        ((this.isProjectionDirty ||
          ((D = this.parent) != null && D.isProjectionDirty)) &&
          (g = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (g = !1),
        this.resolvedRelativeTargetAt === It.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: y, layoutId: x } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(y || x))
      )
        return;
      Ke(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        S = this.treeScale.y;
      gS(this.layoutCorrected, this.treeScale, this.path, m),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Pt()));
      const { target: M } = f;
      if (!M) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (pp(this.prevProjectionDelta.x, this.projectionDelta.x),
          pp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        El(this.projectionDelta, this.layoutCorrected, M, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== S ||
          !Mp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Mp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", M));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), f)) {
        const g = this.getStack();
        g && g.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ha()),
        (this.projectionDelta = ha()),
        (this.projectionDeltaWithTransform = ha());
    }
    setAnimationOrigin(f, m = !1, g) {
      const y = this.snapshot,
        x = y ? y.latestValues : {},
        b = { ...this.latestValues },
        S = ha();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const M = Pt(),
        D = y ? y.source : void 0,
        U = this.layout ? this.layout.source : void 0,
        H = D !== U,
        L = this.getStack(),
        q = !L || L.members.length <= 1,
        Y = !!(H && !q && this.options.crossfade === !0 && !this.path.some(vT));
      this.animationProgress = 0;
      let Q;
      const tt = g == null ? void 0 : g.interpolateProjection(f);
      (this.mixTargetDelta = (G) => {
        const X = G / 1e3,
          K = tt == null ? void 0 : tt(X);
        K
          ? ((S.x.translate = K.x),
            (S.x.scale = Rt(f.x.scale, 1, X)),
            (S.x.origin = f.x.origin),
            (S.x.originPoint = f.x.originPoint),
            (S.y.translate = K.y),
            (S.y.scale = Rt(f.y.scale, 1, X)),
            (S.y.origin = f.y.origin),
            (S.y.originPoint = f.y.originPoint))
          : (_p(S.x, f.x, X), _p(S.y, f.y, X)),
          this.setTargetDelta(S),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (br(
              M,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            gT(this.relativeTarget, this.relativeTargetOrigin, M, X),
            Q && KS(this.relativeTarget, Q) && (this.isProjectionDirty = !1),
            Q || (Q = Pt()),
            Ke(Q, this.relativeTarget)),
          H &&
            ((this.animationValues = b), FS(b, x, this.latestValues, X, Y, q)),
          K &&
            K.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = b),
            (this.animationValues.pathRotation = K.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = X);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var m, g, y;
      this.notifyListeners("animationStart"),
        (m = this.currentAnimation) == null || m.stop(),
        (y = (g = this.resumingFrom) == null ? void 0 : g.currentAnimation) ==
          null || y.stop(),
        this.pendingAnimation &&
          (Ge(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = vt.update(() => {
          (cr.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Je(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = $S(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (x) => {
                this.mixTargetDelta(x), f.onUpdate && f.onUpdate(x);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(iT),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: m,
        target: g,
        layout: y,
        latestValues: x,
      } = f;
      if (!(!m || !g || !y)) {
        if (
          this !== f &&
          this.layout &&
          y &&
          Hg(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          g = this.target || Pt();
          const b = fe(this.layout.layoutBox.x);
          (g.x.min = f.target.x.min), (g.x.max = g.x.min + b);
          const S = fe(this.layout.layoutBox.y);
          (g.y.min = f.target.y.min), (g.y.max = g.y.min + S);
        }
        Ke(m, g),
          or(m, x),
          El(this.projectionDeltaWithTransform, this.layoutCorrected, m, x);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new nT()),
        this.sharedNodes.get(f).add(m);
      const y = m.options.initialPromotionConfig;
      m.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity
            ? y.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: f } = this.options;
      return f
        ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
        : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: f } = this.options;
      return f ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: g } = {}) {
      const y = this.getStack();
      y && y.promote(this, g),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let m = !1;
      const { latestValues: g } = f;
      if (
        ((g.z ||
          g.rotate ||
          g.rotateX ||
          g.rotateY ||
          g.rotateZ ||
          g.skewX ||
          g.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const y = {};
      g.z && cc("z", f, y, this.animationValues);
      for (let x = 0; x < uc.length; x++)
        cc(`rotate${uc[x]}`, f, y, this.animationValues),
          cc(`skew${uc[x]}`, f, y, this.animationValues);
      f.render();
      for (const x in y)
        f.setStaticValue(x, y[x]),
          this.animationValues && (this.animationValues[x] = y[x]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, m) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = ur(m == null ? void 0 : m.pointerEvents) || ""),
          (f.transform = g ? g(this.latestValues, "") : "none");
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = ur(m == null ? void 0 : m.pointerEvents) || "")),
          this.hasProjected &&
            !bi(this.latestValues) &&
            ((f.transform = g ? g({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      f.visibility = "";
      const x = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let b = ZS(this.projectionDeltaWithTransform, this.treeScale, x);
      g && (b = g(x, b)), (f.transform = b);
      const { x: S, y: M } = this.projectionDelta;
      (f.transformOrigin = `${S.origin * 100}% ${M.origin * 100}% 0`),
        y.animationValues
          ? (f.opacity =
              y === this
                ? x.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : x.opacityExit)
          : (f.opacity =
              y === this
                ? x.opacity !== void 0
                  ? x.opacity
                  : ""
                : x.opacityExit !== void 0
                ? x.opacityExit
                : 0);
      for (const D in qc) {
        if (x[D] === void 0) continue;
        const { correct: U, applyTo: H, isCSSVariable: L } = qc[D],
          q = b === "none" ? x[D] : U(x[D], y);
        if (H) {
          const Y = H.length;
          for (let Q = 0; Q < Y; Q++) f[H[Q]] = q;
        } else
          L ? (this.options.visualElement.renderState.vars[D] = q) : (f[D] = q);
      }
      this.options.layoutId &&
        (f.pointerEvents =
          y === this ? ur(m == null ? void 0 : m.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var m;
        return (m = f.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(Dp),
        this.root.sharedNodes.clear();
    }
  };
}
function lT(i) {
  i.updateLayout();
}
function sT(i) {
  var r;
  const a = ((r = i.resumeFrom) == null ? void 0 : r.snapshot) || i.snapshot;
  if (i.isLead() && i.layout && a && i.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: c } = i.layout,
      { animationType: d } = i.options,
      f = a.source !== i.layout.source;
    if (d === "size")
      en((b) => {
        const S = f ? a.measuredBox[b] : a.layoutBox[b],
          M = fe(S);
        (S.min = s[b].min), (S.max = S.min + M);
      });
    else if (d === "x" || d === "y") {
      const b = d === "x" ? "y" : "x";
      Gc(f ? a.measuredBox[b] : a.layoutBox[b], s[b]);
    } else
      Hg(d, a.layoutBox, s) &&
        en((b) => {
          const S = f ? a.measuredBox[b] : a.layoutBox[b],
            M = fe(s[b]);
          (S.max = S.min + M),
            i.relativeTarget &&
              !i.currentAnimation &&
              ((i.isProjectionDirty = !0),
              (i.relativeTarget[b].max = i.relativeTarget[b].min + M));
        });
    const m = ha();
    El(m, s, a.layoutBox);
    const g = ha();
    f ? El(g, i.applyTransform(c, !0), a.measuredBox) : El(g, s, a.layoutBox);
    const y = !_g(m);
    let x = !1;
    if (!i.resumeFrom) {
      const b = i.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: S, layout: M } = b;
        if (S && M) {
          const D = i.options.layoutAnchor || void 0,
            U = Pt();
          br(U, a.layoutBox, S.layoutBox, D);
          const H = Pt();
          br(H, s, M.layoutBox, D),
            Og(U, H) || (x = !0),
            b.options.layoutRoot &&
              ((i.relativeTarget = H),
              (i.relativeTargetOrigin = U),
              (i.relativeParent = b));
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: s,
      snapshot: a,
      delta: g,
      layoutDelta: m,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: x,
    });
  } else if (i.isLead()) {
    const { onExitComplete: s } = i.options;
    s && s();
  }
  i.options.transition = void 0;
}
function rT(i) {
  i.parent &&
    (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty ||
      (i.isSharedProjectionDirty = !!(
        i.isProjectionDirty ||
        i.parent.isProjectionDirty ||
        i.parent.isSharedProjectionDirty
      )),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function oT(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function uT(i) {
  i.clearSnapshot();
}
function Dp(i) {
  i.clearMeasurements();
}
function cT(i) {
  (i.isLayoutDirty = !0), i.updateLayout();
}
function Rp(i) {
  i.isLayoutDirty = !1;
}
function fT(i) {
  i.isAnimationBlocked &&
    i.layout &&
    !i.isLayoutDirty &&
    ((i.snapshot = i.layout), (i.isLayoutDirty = !0));
}
function dT(i) {
  const { visualElement: a } = i.options;
  a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"),
    i.resetTransform();
}
function zp(i) {
  i.finishAnimation(),
    (i.targetDelta = i.relativeTarget = i.target = void 0),
    (i.isProjectionDirty = !0);
}
function hT(i) {
  i.resolveTargetDelta();
}
function mT(i) {
  i.calcProjection();
}
function pT(i) {
  i.resetSkewAndRotation();
}
function yT(i) {
  i.removeLeadSnapshot();
}
function _p(i, a, r) {
  (i.translate = Rt(a.translate, 0, r)),
    (i.scale = Rt(a.scale, 1, r)),
    (i.origin = a.origin),
    (i.originPoint = a.originPoint);
}
function Op(i, a, r, s) {
  (i.min = Rt(a.min, r.min, s)), (i.max = Rt(a.max, r.max, s));
}
function gT(i, a, r, s) {
  Op(i.x, a.x, r.x, s), Op(i.y, a.y, r.y, s);
}
function vT(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const xT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Vp = (i) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(i),
  Lp = Vp("applewebkit/") && !Vp("chrome/") ? Math.round : xe;
function Bp(i) {
  (i.min = Lp(i.min)), (i.max = Lp(i.max));
}
function bT(i) {
  Bp(i.x), Bp(i.y);
}
function Hg(i, a, r) {
  return (
    i === "position" || (i === "preserve-aspect" && !qS(wp(a), wp(r), 0.2))
  );
}
function ST(i) {
  var a;
  return i !== i.root && ((a = i.scroll) == null ? void 0 : a.wasRoot);
}
const TT = Ug({
    attachResizeListener: (i, a) => jl(i, "resize", a),
    measureScroll: () => {
      var i, a;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((i = document.body) == null ? void 0 : i.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((a = document.body) == null ? void 0 : a.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  fc = { current: void 0 },
  Yg = Ug({
    measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
    defaultParent: () => {
      if (!fc.current) {
        const i = new TT({});
        i.mount(window), i.setOptions({ layoutScroll: !0 }), (fc.current = i);
      }
      return fc.current;
    },
    resetTransform: (i, a) => {
      i.style.transform = a !== void 0 ? a : "none";
    },
    checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed",
  }),
  jr = k.createContext({
    transformPagePoint: (i) => i,
    isStatic: !1,
    reducedMotion: "never",
  });
function Up(i, a) {
  if (typeof i == "function") return i(a);
  i != null && (i.current = a);
}
function AT(...i) {
  return (a) => {
    let r = !1;
    const s = i.map((c) => {
      const d = Up(c, a);
      return !r && typeof d == "function" && (r = !0), d;
    });
    if (r)
      return () => {
        for (let c = 0; c < s.length; c++) {
          const d = s[c];
          typeof d == "function" ? d() : Up(i[c], null);
        }
      };
  };
}
function ET(...i) {
  return k.useCallback(AT(...i), i);
}
class wT extends k.Component {
  getSnapshotBeforeUpdate(a) {
    const r = this.props.childRef.current;
    if (
      Al(r) &&
      a.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const s = r.offsetParent,
        c = (Al(s) && s.offsetWidth) || 0,
        d = (Al(s) && s.offsetHeight) || 0,
        f = getComputedStyle(r),
        m = this.props.sizeRef.current;
      (m.height = parseFloat(f.height)),
        (m.width = parseFloat(f.width)),
        (m.top = r.offsetTop),
        (m.left = r.offsetLeft),
        (m.right = c - m.width - m.left),
        (m.bottom = d - m.height - m.top),
        (m.direction = f.direction);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function MT({
  children: i,
  isPresent: a,
  anchorX: r,
  anchorY: s,
  root: c,
  pop: d,
}) {
  var S;
  const f = k.useId(),
    m = k.useRef(null),
    g = k.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr",
    }),
    { nonce: y } = k.useContext(jr),
    x =
      ((S = i.props) == null ? void 0 : S.ref) ?? (i == null ? void 0 : i.ref),
    b = ET(m, x);
  return (
    k.useInsertionEffect(() => {
      const {
        width: M,
        height: D,
        top: U,
        left: H,
        right: L,
        bottom: q,
        direction: Y,
      } = g.current;
      if (a || d === !1 || !m.current || !M || !D) return;
      const Q = Y === "rtl",
        tt =
          r === "left"
            ? Q
              ? `right: ${L}`
              : `left: ${H}`
            : Q
            ? `left: ${H}`
            : `right: ${L}`,
        G = s === "bottom" ? `bottom: ${q}` : `top: ${U}`;
      m.current.dataset.motionPopId = f;
      const X = document.createElement("style");
      y && (X.nonce = y);
      const K = c ?? document.head;
      return (
        K.appendChild(X),
        X.sheet &&
          X.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${M}px !important;
            height: ${D}px !important;
            ${tt}px !important;
            ${G}px !important;
          }
        `),
        () => {
          var nt;
          (nt = m.current) == null || nt.removeAttribute("data-motion-pop-id"),
            K.contains(X) && K.removeChild(X);
        }
      );
    }, [a]),
    p.jsx(wT, {
      isPresent: a,
      childRef: m,
      sizeRef: g,
      pop: d,
      children: d === !1 ? i : k.cloneElement(i, { ref: b }),
    })
  );
}
const NT = ({
  children: i,
  initial: a,
  isPresent: r,
  onExitComplete: s,
  custom: c,
  presenceAffectsLayout: d,
  mode: f,
  anchorX: m,
  anchorY: g,
  root: y,
}) => {
  const x = Wn(jT),
    b = k.useId();
  let S = !0,
    M = k.useMemo(
      () => (
        (S = !1),
        {
          id: b,
          initial: a,
          isPresent: r,
          custom: c,
          onExitComplete: (D) => {
            x.set(D, !0);
            for (const U of x.values()) if (!U) return;
            s && s();
          },
          register: (D) => (x.set(D, !1), () => x.delete(D)),
        }
      ),
      [r, x, s]
    );
  return (
    d && S && (M = { ...M }),
    k.useMemo(() => {
      x.forEach((D, U) => x.set(U, !1));
    }, [r]),
    k.useEffect(() => {
      !r && !x.size && s && s();
    }, [r]),
    (i = p.jsx(MT, {
      pop: f === "popLayout",
      isPresent: r,
      anchorX: m,
      anchorY: g,
      root: y,
      children: i,
    })),
    p.jsx(Er.Provider, { value: M, children: i })
  );
};
function jT() {
  return new Map();
}
function qg(i = !0) {
  const a = k.useContext(Er);
  if (a === null) return [!0, null];
  const { isPresent: r, onExitComplete: s, register: c } = a,
    d = k.useId();
  k.useEffect(() => {
    if (i) return c(d);
  }, [i]);
  const f = k.useCallback(() => i && s && s(d), [d, s, i]);
  return !r && s ? [!1, f] : [!0];
}
const Is = (i) => i.key || "";
function Hp(i) {
  const a = [];
  return (
    k.Children.forEach(i, (r) => {
      k.isValidElement(r) && a.push(r);
    }),
    a
  );
}
const Gg = ({
    children: i,
    custom: a,
    initial: r = !0,
    onExitComplete: s,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: f = !1,
    anchorX: m = "left",
    anchorY: g = "top",
    root: y,
  }) => {
    const [x, b] = qg(f),
      S = k.useMemo(() => Hp(i), [i]),
      M = f && !x ? [] : S.map(Is),
      D = k.useRef(!0),
      U = k.useRef(S),
      H = Wn(() => new Map()),
      L = k.useRef(new Set()),
      [q, Y] = k.useState(S),
      [Q, tt] = k.useState(S);
    Ar(() => {
      (D.current = !1), (U.current = S);
      for (let K = 0; K < Q.length; K++) {
        const nt = Is(Q[K]);
        M.includes(nt)
          ? (H.delete(nt), L.current.delete(nt))
          : H.get(nt) !== !0 && H.set(nt, !1);
      }
    }, [Q, M.length, M.join("-")]);
    const G = [];
    if (S !== q) {
      let K = [...S];
      for (let nt = 0; nt < Q.length; nt++) {
        const $ = Q[nt],
          pt = Is($);
        M.includes(pt) || (K.splice(nt, 0, $), G.push($));
      }
      return d === "wait" && G.length && (K = G), tt(Hp(K)), Y(S), null;
    }
    const { forceRender: X } = k.useContext(Fc);
    return p.jsx(p.Fragment, {
      children: Q.map((K) => {
        const nt = Is(K),
          $ = f && !x ? !1 : S === Q || M.includes(nt),
          pt = () => {
            if (L.current.has(nt)) return;
            if (H.has(nt)) L.current.add(nt), H.set(nt, !0);
            else return;
            let xt = !0;
            H.forEach((te) => {
              te || (xt = !1);
            }),
              xt &&
                (X == null || X(),
                tt(U.current),
                f && (b == null || b()),
                s && s());
          };
        return p.jsx(
          NT,
          {
            isPresent: $,
            initial: !D.current || r ? void 0 : !1,
            custom: a,
            presenceAffectsLayout: c,
            mode: d,
            root: y,
            onExitComplete: $ ? void 0 : pt,
            anchorX: m,
            anchorY: g,
            children: K,
          },
          nt
        );
      }),
    });
  },
  kg = k.createContext({ strict: !1 }),
  Yp = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let qp = !1;
function CT() {
  if (qp) return;
  const i = {};
  for (const a in Yp) i[a] = { isEnabled: (r) => Yp[a].some((s) => !!r[s]) };
  gg(i), (qp = !0);
}
function Xg() {
  return CT(), hS();
}
function DT(i) {
  const a = Xg();
  for (const r in i) a[r] = { ...a[r], ...i[r] };
  gg(a);
}
const RT = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Sr(i) {
  return (
    i.startsWith("while") ||
    (i.startsWith("drag") && i !== "draggable") ||
    i.startsWith("layout") ||
    i.startsWith("onTap") ||
    i.startsWith("onPan") ||
    i.startsWith("onLayout") ||
    RT.has(i)
  );
}
let Qg = (i) => !Sr(i);
function zT(i) {
  typeof i == "function" && (Qg = (a) => (a.startsWith("on") ? !Sr(a) : i(a)));
}
try {
  zT(require("@emotion/is-prop-valid").default);
} catch {}
function _T(i, a, r) {
  const s = {};
  for (const c in i)
    (c === "values" && typeof i.values == "object") ||
      se(i[c]) ||
      ((Qg(c) ||
        (r === !0 && Sr(c)) ||
        (!a && !Sr(c)) ||
        (i.draggable && c.startsWith("onDrag"))) &&
        (s[c] = i[c]));
  return s;
}
const Cr = k.createContext({});
function OT(i, a) {
  if (Nr(i)) {
    const { initial: r, animate: s } = i;
    return {
      initial: r === !1 || Nl(r) ? r : void 0,
      animate: Nl(s) ? s : void 0,
    };
  }
  return i.inherit !== !1 ? a : {};
}
function VT(i) {
  const { initial: a, animate: r } = OT(i, k.useContext(Cr));
  return k.useMemo(() => ({ initial: a, animate: r }), [Gp(a), Gp(r)]);
}
function Gp(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const Af = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Kg(i, a, r) {
  for (const s in a) !se(a[s]) && !Eg(s, r) && (i[s] = a[s]);
}
function LT({ transformTemplate: i }, a) {
  return k.useMemo(() => {
    const r = Af();
    return Sf(r, a, i), Object.assign({}, r.vars, r.style);
  }, [a]);
}
function BT(i, a) {
  const r = i.style || {},
    s = {};
  return Kg(s, r, i), Object.assign(s, LT(i, a)), s;
}
function UT(i, a) {
  const r = {},
    s = BT(i, a);
  return (
    i.drag &&
      i.dragListener !== !1 &&
      ((r.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`)),
    i.tabIndex === void 0 &&
      (i.onTap || i.onTapStart || i.whileTap) &&
      (r.tabIndex = 0),
    (r.style = s),
    r
  );
}
const Zg = () => ({ ...Af(), attrs: {} });
function HT(i, a, r, s) {
  const c = k.useMemo(() => {
    const d = Zg();
    return (
      wg(d, a, Ng(s), i.transformTemplate, i.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [a]);
  if (i.style) {
    const d = {};
    Kg(d, i.style, i), (c.style = { ...d, ...c.style });
  }
  return c;
}
const YT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ef(i) {
  return typeof i != "string" || i.includes("-")
    ? !1
    : !!(YT.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
function qT(i, a, r, { latestValues: s }, c, d = !1, f) {
  const g = (f ?? Ef(i) ? HT : UT)(a, s, c, i),
    y = _T(a, typeof i == "string", d),
    x = i !== k.Fragment ? { ...y, ...g, ref: r } : {},
    { children: b } = a,
    S = k.useMemo(() => (se(b) ? b.get() : b), [b]);
  return k.createElement(i, { ...x, children: S });
}
function GT({ scrapeMotionValuesFromProps: i, createRenderState: a }, r, s, c) {
  return { latestValues: kT(r, s, c, i), renderState: a() };
}
function kT(i, a, r, s) {
  const c = {},
    d = s(i, {});
  for (const S in d) c[S] = ur(d[S]);
  let { initial: f, animate: m } = i;
  const g = Nr(i),
    y = pg(i);
  a &&
    y &&
    !g &&
    i.inherit !== !1 &&
    (f === void 0 && (f = a.initial), m === void 0 && (m = a.animate));
  let x = r ? r.initial === !1 : !1;
  x = x || f === !1;
  const b = x ? m : f;
  if (b && typeof b != "boolean" && !Mr(b)) {
    const S = Array.isArray(b) ? b : [b];
    for (let M = 0; M < S.length; M++) {
      const D = pf(i, S[M]);
      if (D) {
        const { transitionEnd: U, transition: H, ...L } = D;
        for (const q in L) {
          let Y = L[q];
          if (Array.isArray(Y)) {
            const Q = x ? Y.length - 1 : 0;
            Y = Y[Q];
          }
          Y !== null && (c[q] = Y);
        }
        for (const q in U) c[q] = U[q];
      }
    }
  }
  return c;
}
const Jg = (i) => (a, r) => {
    const s = k.useContext(Cr),
      c = k.useContext(Er),
      d = () => GT(i, a, s, c);
    return r ? d() : Wn(d);
  },
  XT = Jg({ scrapeMotionValuesFromProps: Tf, createRenderState: Af }),
  QT = Jg({ scrapeMotionValuesFromProps: jg, createRenderState: Zg }),
  KT = Symbol.for("motionComponentSymbol");
function ZT(i, a, r) {
  const s = k.useRef(r);
  k.useInsertionEffect(() => {
    s.current = r;
  });
  const c = k.useRef(null);
  return k.useCallback(
    (d) => {
      var m;
      d && ((m = i.onMount) == null || m.call(i, d)),
        a && (d ? a.mount(d) : a.unmount());
      const f = s.current;
      if (typeof f == "function")
        if (d) {
          const g = f(d);
          typeof g == "function" && (c.current = g);
        } else c.current ? (c.current(), (c.current = null)) : f(d);
      else f && (f.current = d);
    },
    [a]
  );
}
const Fg = k.createContext({});
function ca(i) {
  return (
    i &&
    typeof i == "object" &&
    Object.prototype.hasOwnProperty.call(i, "current")
  );
}
function JT(i, a, r, s, c, d) {
  var Y, Q;
  const { visualElement: f } = k.useContext(Cr),
    m = k.useContext(kg),
    g = k.useContext(Er),
    y = k.useContext(jr),
    x = y.reducedMotion,
    b = y.skipAnimations,
    S = k.useRef(null),
    M = k.useRef(!1);
  (s = s || m.renderer),
    !S.current &&
      s &&
      ((S.current = s(i, {
        visualState: a,
        parent: f,
        props: r,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: x,
        skipAnimations: b,
        isSVG: d,
      })),
      M.current && S.current && (S.current.manuallyAnimateOnMount = !0));
  const D = S.current,
    U = k.useContext(Fg);
  D &&
    !D.projection &&
    c &&
    (D.type === "html" || D.type === "svg") &&
    FT(S.current, r, c, U);
  const H = k.useRef(!1);
  k.useInsertionEffect(() => {
    D && H.current && D.update(r, g);
  });
  const L = r[eg],
    q = k.useRef(
      !!L &&
        typeof window < "u" &&
        !((Y = window.MotionHandoffIsComplete) != null && Y.call(window, L)) &&
        ((Q = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : Q.call(window, L))
    );
  return (
    Ar(() => {
      (M.current = !0),
        D &&
          ((H.current = !0),
          (window.MotionIsMounted = !0),
          D.updateFeatures(),
          D.scheduleRenderMicrotask(),
          q.current && D.animationState && D.animationState.animateChanges());
    }),
    k.useEffect(() => {
      D &&
        (!q.current && D.animationState && D.animationState.animateChanges(),
        q.current &&
          (queueMicrotask(() => {
            var tt;
            (tt = window.MotionHandoffMarkAsComplete) == null ||
              tt.call(window, L);
          }),
          (q.current = !1)),
        (D.enteringChildren = void 0));
    }),
    D
  );
}
function FT(i, a, r, s) {
  const {
    layoutId: c,
    layout: d,
    drag: f,
    dragConstraints: m,
    layoutScroll: g,
    layoutRoot: y,
    layoutAnchor: x,
    layoutCrossfade: b,
  } = a;
  (i.projection = new r(
    i.latestValues,
    a["data-framer-portal-id"] ? void 0 : Pg(i.parent)
  )),
    i.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (m && ca(m)),
      visualElement: i,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: s,
      crossfade: b,
      layoutScroll: g,
      layoutRoot: y,
      layoutAnchor: x,
    });
}
function Pg(i) {
  if (i) return i.options.allowProjection !== !1 ? i.projection : Pg(i.parent);
}
function dc(i, { forwardMotionProps: a = !1, type: r } = {}, s, c) {
  s && DT(s);
  const d = r ? r === "svg" : Ef(i),
    f = d ? QT : XT;
  function m(y, x) {
    let b;
    const S = { ...k.useContext(jr), ...y, layoutId: PT(y) },
      { isStatic: M } = S,
      D = VT(y),
      U = f(y, M);
    if (!M && typeof window < "u") {
      WT();
      const H = $T(S);
      (b = H.MeasureLayout),
        (D.visualElement = JT(i, U, S, c, H.ProjectionNode, d));
    }
    return p.jsxs(Cr.Provider, {
      value: D,
      children: [
        b && D.visualElement
          ? p.jsx(b, { visualElement: D.visualElement, ...S })
          : null,
        qT(i, y, ZT(U, D.visualElement, x), U, M, a, d),
      ],
    });
  }
  m.displayName = `motion.${
    typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`
  }`;
  const g = k.forwardRef(m);
  return (g[KT] = i), g;
}
function PT({ layoutId: i }) {
  const a = k.useContext(Fc).id;
  return a && i !== void 0 ? a + "-" + i : i;
}
function WT(i, a) {
  k.useContext(kg).strict;
}
function $T(i) {
  const a = Xg(),
    { drag: r, layout: s } = a;
  if (!r && !s) return {};
  const c = { ...r, ...s };
  return {
    MeasureLayout:
      (r != null && r.isEnabled(i)) || (s != null && s.isEnabled(i))
        ? c.MeasureLayout
        : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function IT(i, a) {
  if (typeof Proxy > "u") return dc;
  const r = new Map(),
    s = (d, f) => dc(d, f, i, a),
    c = (d, f) => s(d, f);
  return new Proxy(c, {
    get: (d, f) =>
      f === "create"
        ? s
        : (r.has(f) || r.set(f, dc(f, void 0, i, a)), r.get(f)),
  });
}
const t5 = (i, a) =>
  a.isSVG ?? Ef(i)
    ? new DS(a)
    : new ES(a, { allowProjection: i !== k.Fragment });
class e5 extends In {
  constructor(a) {
    super(a), a.animationState || (a.animationState = VS(a));
  }
  updateAnimationControlsSubscription() {
    const { animate: a } = this.node.getProps();
    Mr(a) && (this.unmountControls = a.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: a } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    a !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var a;
    this.node.animationState.reset(),
      (a = this.unmountControls) == null || a.call(this);
  }
}
let n5 = 0;
class i5 extends In {
  constructor() {
    super(...arguments), (this.id = n5++), (this.isExitComplete = !1);
  }
  update() {
    var d;
    if (!this.node.presenceContext) return;
    const { isPresent: a, onExitComplete: r } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || a === s) return;
    if (a && s === !1) {
      if (this.isExitComplete) {
        const { initial: f, custom: m } = this.node.getProps();
        if (
          typeof f == "string" ||
          (typeof f == "object" && f !== null && !Array.isArray(f))
        ) {
          const g = Ei(this.node, f, m);
          if (g) {
            const { transition: y, transitionEnd: x, ...b } = g;
            for (const S in b)
              (d = this.node.getValue(S)) == null || d.jump(b[S]);
          }
        }
        this.node.animationState.reset(),
          this.node.animationState.animateChanges();
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !a);
    r &&
      !a &&
      c.then(() => {
        (this.isExitComplete = !0), r(this.id);
      });
  }
  mount() {
    const { register: a, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), a && (this.unmount = a(this.id));
  }
  unmount() {}
}
const a5 = { animation: { Feature: e5 }, exit: { Feature: i5 } };
function zl(i) {
  return { point: { x: i.pageX, y: i.pageY } };
}
const l5 = (i) => (a) => gf(a) && i(a, zl(a));
function wl(i, a, r, s) {
  return jl(i, a, l5(r), s);
}
const Wg = ({ current: i }) => (i ? i.ownerDocument.defaultView : null),
  kp = (i, a) => Math.abs(i - a);
function s5(i, a) {
  const r = kp(i.x, a.x),
    s = kp(i.y, a.y);
  return Math.sqrt(r ** 2 + s ** 2);
}
const Xp = new Set(["auto", "scroll"]);
class $g {
  constructor(
    a,
    r,
    {
      transformPagePoint: s,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: f = 3,
      element: m,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (M) => {
        this.handleScroll(M.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = tr(
            this.lastRawMoveEventInfo,
            this.transformPagePoint
          ));
        const M = hc(this.lastMoveEventInfo, this.history),
          D = this.startEvent !== null,
          U = s5(M.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!D && !U) return;
        const { point: H } = M,
          { timestamp: L } = It;
        this.history.push({ ...H, timestamp: L });
        const { onStart: q, onMove: Y } = this.handlers;
        D ||
          (q && q(this.lastMoveEvent, M),
          (this.startEvent = this.lastMoveEvent)),
          Y && Y(this.lastMoveEvent, M);
      }),
      (this.handlePointerMove = (M, D) => {
        (this.lastMoveEvent = M),
          (this.lastRawMoveEventInfo = D),
          (this.lastMoveEventInfo = tr(D, this.transformPagePoint)),
          vt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (M, D) => {
        this.end();
        const { onEnd: U, onSessionEnd: H, resumeAnimation: L } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && L && L(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const q = hc(
          M.type === "pointercancel"
            ? this.lastMoveEventInfo
            : tr(D, this.transformPagePoint),
          this.history
        );
        this.startEvent && U && U(M, q), H && H(M, q);
      }),
      !gf(a))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = r),
      (this.transformPagePoint = s),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window);
    const g = zl(a),
      y = tr(g, this.transformPagePoint),
      { point: x } = y,
      { timestamp: b } = It;
    this.history = [{ ...x, timestamp: b }];
    const { onSessionStart: S } = r;
    S && S(a, hc(y, this.history)),
      (this.removeListeners = Cl(
        wl(this.contextWindow, "pointermove", this.handlePointerMove),
        wl(this.contextWindow, "pointerup", this.handlePointerUp),
        wl(this.contextWindow, "pointercancel", this.handlePointerUp)
      )),
      m && this.startScrollTracking(m);
  }
  startScrollTracking(a) {
    let r = a.parentElement;
    for (; r; ) {
      const s = getComputedStyle(r);
      (Xp.has(s.overflowX) || Xp.has(s.overflowY)) &&
        this.scrollPositions.set(r, { x: r.scrollLeft, y: r.scrollTop }),
        (r = r.parentElement);
    }
    this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll);
      });
  }
  handleScroll(a) {
    const r = this.scrollPositions.get(a);
    if (!r) return;
    const s = a === window,
      c = s
        ? { x: window.scrollX, y: window.scrollY }
        : { x: a.scrollLeft, y: a.scrollTop },
      d = { x: c.x - r.x, y: c.y - r.y };
    (d.x === 0 && d.y === 0) ||
      (s
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += d.x),
          (this.lastMoveEventInfo.point.y += d.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= d.x), (this.history[0].y -= d.y)),
      this.scrollPositions.set(a, c),
      vt.update(this.updatePoint, !0));
  }
  updateHandlers(a) {
    this.handlers = a;
  }
  end() {
    this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Ge(this.updatePoint);
  }
}
function tr(i, a) {
  return a ? { point: a(i.point) } : i;
}
function Qp(i, a) {
  return { x: i.x - a.x, y: i.y - a.y };
}
function hc({ point: i }, a) {
  return {
    point: i,
    delta: Qp(i, Ig(a)),
    offset: Qp(i, r5(a)),
    velocity: o5(a, 0.1),
  };
}
function r5(i) {
  return i[0];
}
function Ig(i) {
  return i[i.length - 1];
}
function o5(i, a) {
  if (i.length < 2) return { x: 0, y: 0 };
  let r = i.length - 1,
    s = null;
  const c = Ig(i);
  for (; r >= 0 && ((s = i[r]), !(c.timestamp - s.timestamp > De(a))); ) r--;
  if (!s) return { x: 0, y: 0 };
  s === i[0] &&
    i.length > 2 &&
    c.timestamp - s.timestamp > De(a) * 2 &&
    (s = i[1]);
  const d = qe(c.timestamp - s.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - s.x) / d, y: (c.y - s.y) / d };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function u5(i, { min: a, max: r }, s) {
  return (
    a !== void 0 && i < a
      ? (i = s ? Rt(a, i, s.min) : Math.max(i, a))
      : r !== void 0 && i > r && (i = s ? Rt(r, i, s.max) : Math.min(i, r)),
    i
  );
}
function Kp(i, a, r) {
  return {
    min: a !== void 0 ? i.min + a : void 0,
    max: r !== void 0 ? i.max + r - (i.max - i.min) : void 0,
  };
}
function c5(i, { top: a, left: r, bottom: s, right: c }) {
  return { x: Kp(i.x, r, c), y: Kp(i.y, a, s) };
}
function Zp(i, a) {
  let r = a.min - i.min,
    s = a.max - i.max;
  return a.max - a.min < i.max - i.min && ([r, s] = [s, r]), { min: r, max: s };
}
function f5(i, a) {
  return { x: Zp(i.x, a.x), y: Zp(i.y, a.y) };
}
function d5(i, a) {
  let r = 0.5;
  const s = fe(i),
    c = fe(a);
  return (
    c > s
      ? (r = ya(a.min, a.max - s, i.min))
      : s > c && (r = ya(i.min, i.max - c, a.min)),
    Pe(0, 1, r)
  );
}
function h5(i, a) {
  const r = {};
  return (
    a.min !== void 0 && (r.min = a.min - i.min),
    a.max !== void 0 && (r.max = a.max - i.min),
    r
  );
}
const kc = 0.35;
function m5(i = kc) {
  return (
    i === !1 ? (i = 0) : i === !0 && (i = kc),
    { x: Jp(i, "left", "right"), y: Jp(i, "top", "bottom") }
  );
}
function Jp(i, a, r) {
  return { min: Fp(i, a), max: Fp(i, r) };
}
function Fp(i, a) {
  return typeof i == "number" ? i : i[a] || 0;
}
const p5 = new WeakMap();
class y5 {
  constructor(a) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Pt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = a);
  }
  start(a, { snapToCursor: r = !1, distanceThreshold: s } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (b) => {
        r && this.snapToCursor(zl(b).point), this.stopAnimation();
      },
      f = (b, S) => {
        const { drag: M, dragPropagation: D, onDragStart: U } = this.getProps();
        if (
          M &&
          !D &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = G2(M)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = b),
          (this.latestPanInfo = S),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          en((L) => {
            let q = this.getAxisMotionValue(L).get() || 0;
            if (an.test(q)) {
              const { projection: Y } = this.visualElement;
              if (Y && Y.layout) {
                const Q = Y.layout.layoutBox[L];
                Q && (q = fe(Q) * (parseFloat(q) / 100));
              }
            }
            this.originPoint[L] = q;
          }),
          U && vt.update(() => U(b, S), !1, !0),
          zc(this.visualElement, "transform");
        const { animationState: H } = this.visualElement;
        H && H.setActive("whileDrag", !0);
      },
      m = (b, S) => {
        (this.latestPointerEvent = b), (this.latestPanInfo = S);
        const {
          dragPropagation: M,
          dragDirectionLock: D,
          onDirectionLock: U,
          onDrag: H,
        } = this.getProps();
        if (!M && !this.openDragLock) return;
        const { offset: L } = S;
        if (D && this.currentDirection === null) {
          (this.currentDirection = v5(L)),
            this.currentDirection !== null && U && U(this.currentDirection);
          return;
        }
        this.updateAxis("x", S.point, L),
          this.updateAxis("y", S.point, L),
          this.visualElement.render(),
          H && vt.update(() => H(b, S), !1, !0);
      },
      g = (b, S) => {
        (this.latestPointerEvent = b),
          (this.latestPanInfo = S),
          this.stop(b, S),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      y = () => {
        const { dragSnapToOrigin: b } = this.getProps();
        (b || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: x } = this.getProps();
    this.panSession = new $g(
      a,
      {
        onSessionStart: d,
        onStart: f,
        onMove: m,
        onSessionEnd: g,
        resumeAnimation: y,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: x,
        distanceThreshold: s,
        contextWindow: Wg(this.visualElement),
        element: this.visualElement.current,
      }
    );
  }
  stop(a, r) {
    const s = a || this.latestPointerEvent,
      c = r || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !s)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: m } = this.getProps();
    m && vt.postRender(() => m(s, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: a, animationState: r } = this.visualElement;
    a && (a.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), (this.panSession = void 0);
  }
  updateAxis(a, r, s) {
    const { drag: c } = this.getProps();
    if (!s || !er(a, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(a);
    let f = this.originPoint[a] + s[a];
    this.constraints &&
      this.constraints[a] &&
      (f = u5(f, this.constraints[a], this.elastic[a])),
      d.set(f);
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: a, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
          ? void 0
          : d.layout,
      c = this.constraints;
    a && ca(a)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : a && s
      ? (this.constraints = c5(s.layoutBox, a))
      : (this.constraints = !1),
      (this.elastic = m5(r)),
      c !== this.constraints &&
        !ca(a) &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        en((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = h5(s.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: a, onMeasureDragConstraints: r } = this.getProps();
    if (!a || !ca(a)) return !1;
    const s = a.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    c.root && ((c.root.scroll = void 0), c.root.updateScroll());
    const d = vS(s, c.root, this.visualElement.getTransformPagePoint());
    let f = f5(c.layout.layoutBox, d);
    if (r) {
      const m = r(pS(f));
      (this.hasMutatedConstraints = !!m), m && (f = xg(m));
    }
    return f;
  }
  startAnimation(a) {
    const {
        drag: r,
        dragMomentum: s,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: m,
      } = this.getProps(),
      g = this.constraints || {},
      y = en((x) => {
        if (!er(x, r, this.currentDirection)) return;
        let b = (g && g[x]) || {};
        (f === !0 || f === x) && (b = { min: 0, max: 0 });
        const S = c ? 200 : 1e6,
          M = c ? 40 : 1e7,
          D = {
            type: "inertia",
            velocity: s ? a[x] : 0,
            bounceStiffness: S,
            bounceDamping: M,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...b,
          };
        return this.startAxisValueAnimation(x, D);
      });
    return Promise.all(y).then(m);
  }
  startAxisValueAnimation(a, r) {
    const s = this.getAxisMotionValue(a);
    return (
      zc(this.visualElement, a), s.start(mf(a, s, 0, r, this.visualElement, !1))
    );
  }
  stopAnimation() {
    en((a) => this.getAxisMotionValue(a).stop());
  }
  getAxisMotionValue(a) {
    const r = `_drag${a.toUpperCase()}`,
      c = this.visualElement.getProps()[r];
    return (
      c ||
      this.visualElement.getValue(a, this.visualElement.latestValues[a] ?? 0)
    );
  }
  snapToCursor(a) {
    en((r) => {
      const { drag: s } = this.getProps();
      if (!er(r, s, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(r);
      if (c && c.layout) {
        const { min: f, max: m } = c.layout.layoutBox[r],
          g = d.get() || 0;
        d.set(a[r] - Rt(f, m, 0.5) + g);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: a, dragConstraints: r } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!ca(r) || !s || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    en((f) => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== !1) {
        const g = m.get();
        c[f] = d5({ min: g, max: g }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      en((f) => {
        if (!er(f, a, null)) return;
        const m = this.getAxisMotionValue(f),
          { min: g, max: y } = this.constraints[f];
        m.set(Rt(g, y, c[f]));
      }),
      this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) return;
    p5.set(this.visualElement, this);
    const a = this.visualElement.current,
      r = wl(a, "pointerdown", (y) => {
        const { drag: x, dragListener: b = !0 } = this.getProps(),
          S = y.target,
          M = S !== a && J2(S);
        x && b && !M && this.start(y);
      });
    let s;
    const c = () => {
        const { dragConstraints: y } = this.getProps();
        ca(y) &&
          y.current &&
          ((this.constraints = this.resolveRefConstraints()),
          s ||
            (s = g5(a, y.current, () =>
              this.scalePositionWithinConstraints()
            )));
      },
      { projection: d } = this.visualElement,
      f = d.addEventListener("measure", c);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()),
      vt.read(c);
    const m = jl(window, "resize", () => this.scalePositionWithinConstraints()),
      g = d.addEventListener(
        "didUpdate",
        ({ delta: y, hasLayoutChanged: x }) => {
          this.isDragging &&
            x &&
            (en((b) => {
              const S = this.getAxisMotionValue(b);
              S &&
                ((this.originPoint[b] += y[b].translate),
                S.set(S.get() + y[b].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      m(), r(), f(), g && g(), s && s();
    };
  }
  getProps() {
    const a = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: s = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = kc,
        dragMomentum: m = !0,
      } = a;
    return {
      ...a,
      drag: r,
      dragDirectionLock: s,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: m,
    };
  }
}
function Pp(i) {
  let a = !0;
  return () => {
    if (a) {
      a = !1;
      return;
    }
    i();
  };
}
function g5(i, a, r) {
  const s = Bc(i, Pp(r)),
    c = Bc(a, Pp(r));
  return () => {
    s(), c();
  };
}
function er(i, a, r) {
  return (a === !0 || a === i) && (r === null || r === i);
}
function v5(i, a = 10) {
  let r = null;
  return Math.abs(i.y) > a ? (r = "y") : Math.abs(i.x) > a && (r = "x"), r;
}
class x5 extends In {
  constructor(a) {
    super(a),
      (this.removeGroupControls = xe),
      (this.removeListeners = xe),
      (this.controls = new y5(a));
  }
  mount() {
    const { dragControls: a } = this.node.getProps();
    a && (this.removeGroupControls = a.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || xe);
  }
  update() {
    const { dragControls: a } = this.node.getProps(),
      { dragControls: r } = this.node.prevProps || {};
    a !== r &&
      (this.removeGroupControls(),
      a && (this.removeGroupControls = a.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession();
  }
}
const mc = (i) => (a, r) => {
  i && vt.update(() => i(a, r), !1, !0);
};
class b5 extends In {
  constructor() {
    super(...arguments), (this.removePointerDownListener = xe);
  }
  onPointerDown(a) {
    this.session = new $g(a, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Wg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: a,
      onPanStart: r,
      onPan: s,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: mc(a),
      onStart: mc(r),
      onMove: mc(s),
      onEnd: (d, f) => {
        delete this.session, c && vt.postRender(() => c(d, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = wl(this.node.current, "pointerdown", (a) =>
      this.onPointerDown(a)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let pc = !1;
class S5 extends k.Component {
  componentDidMount() {
    const {
        visualElement: a,
        layoutGroup: r,
        switchLayoutGroup: s,
        layoutId: c,
      } = this.props,
      { projection: d } = a;
    d &&
      (r.group && r.group.add(d),
      s && s.register && c && s.register(d),
      pc && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (cr.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(a) {
    const {
        layoutDependency: r,
        visualElement: s,
        drag: c,
        isPresent: d,
      } = this.props,
      { projection: f } = s;
    return (
      f &&
        ((f.isPresent = d),
        a.layoutDependency !== r &&
          f.setOptions({ ...f.options, layoutDependency: r }),
        (pc = !0),
        c || a.layoutDependency !== r || r === void 0 || a.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        a.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              vt.postRender(() => {
                const m = f.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: a, layoutAnchor: r } = this.props,
      { projection: s } = a;
    s &&
      ((s.options.layoutAnchor = r),
      s.root.didUpdate(),
      va.postRender(() => {
        !s.currentAnimation && s.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: a,
        layoutGroup: r,
        switchLayoutGroup: s,
      } = this.props,
      { projection: c } = a;
    (pc = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(c),
        s && s.deregister && s.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: a } = this.props;
    a && a();
  }
  render() {
    return null;
  }
}
function tv(i) {
  const [a, r] = qg(),
    s = k.useContext(Fc);
  return p.jsx(S5, {
    ...i,
    layoutGroup: s,
    switchLayoutGroup: k.useContext(Fg),
    isPresent: a,
    safeToRemove: r,
  });
}
const T5 = {
  pan: { Feature: b5 },
  drag: { Feature: x5, ProjectionNode: Yg, MeasureLayout: tv },
};
function Wp(i, a, r) {
  const { props: s } = i;
  i.animationState &&
    s.whileHover &&
    i.animationState.setActive("whileHover", r === "Start");
  const c = "onHover" + r,
    d = s[c];
  d && vt.postRender(() => d(a, zl(a)));
}
class A5 extends In {
  mount() {
    const { current: a } = this.node;
    a &&
      (this.unmount = X2(
        a,
        (r, s) => (Wp(this.node, s, "Start"), (c) => Wp(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class E5 extends In {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let a = !1;
    try {
      a = this.node.current.matches(":focus-visible");
    } catch {
      a = !0;
    }
    !a ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Cl(
      jl(this.node.current, "focus", () => this.onFocus()),
      jl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function $p(i, a, r) {
  const { props: s } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState &&
    s.whileTap &&
    i.animationState.setActive("whileTap", r === "Start");
  const c = "onTap" + (r === "End" ? "" : r),
    d = s[c];
  d && vt.postRender(() => d(a, zl(a)));
}
class w5 extends In {
  mount() {
    const { current: a } = this.node;
    if (!a) return;
    const { globalTapTarget: r, propagate: s } = this.node.props;
    this.unmount = P2(
      a,
      (c, d) => (
        $p(this.node, d, "Start"),
        (f, { success: m }) => $p(this.node, f, m ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: r,
        stopPropagation: (s == null ? void 0 : s.tap) === !1,
      }
    );
  }
  unmount() {}
}
const Xc = new WeakMap(),
  yc = new WeakMap(),
  M5 = (i) => {
    const a = Xc.get(i.target);
    a && a(i);
  },
  N5 = (i) => {
    i.forEach(M5);
  };
function j5({ root: i, ...a }) {
  const r = i || document;
  yc.has(r) || yc.set(r, {});
  const s = yc.get(r),
    c = JSON.stringify(a);
  return s[c] || (s[c] = new IntersectionObserver(N5, { root: i, ...a })), s[c];
}
function C5(i, a, r) {
  const s = j5(a);
  return (
    Xc.set(i, r),
    s.observe(i),
    () => {
      Xc.delete(i), s.unobserve(i);
    }
  );
}
const D5 = { some: 0, all: 1 };
class R5 extends In {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    var g;
    (g = this.stopObserver) == null || g.call(this);
    const { viewport: a = {} } = this.node.getProps(),
      { root: r, margin: s, amount: c = "some", once: d } = a,
      f = {
        root: r ? r.current : void 0,
        rootMargin: s,
        threshold: typeof c == "number" ? c : D5[c],
      },
      m = (y) => {
        const { isIntersecting: x } = y;
        if (
          this.isInView === x ||
          ((this.isInView = x), d && !x && this.hasEnteredView)
        )
          return;
        x && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", x);
        const { onViewportEnter: b, onViewportLeave: S } = this.node.getProps(),
          M = x ? b : S;
        M && M(y);
      };
    this.stopObserver = C5(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: a, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(z5(a, r)) && this.startObserver();
  }
  unmount() {
    var a;
    (a = this.stopObserver) == null || a.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1);
  }
}
function z5({ viewport: i = {} }, { viewport: a = {} } = {}) {
  return (r) => i[r] !== a[r];
}
const _5 = {
    inView: { Feature: R5 },
    tap: { Feature: w5 },
    focus: { Feature: E5 },
    hover: { Feature: A5 },
  },
  O5 = { layout: { ProjectionNode: Yg, MeasureLayout: tv } },
  V5 = { ...a5, ..._5, ...T5, ...O5 },
  Ot = IT(V5, t5);
function Tr(i) {
  return typeof window > "u" ? !1 : i ? Xy() : df();
}
const L5 = 50,
  Ip = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  B5 = () => ({ time: 0, x: Ip(), y: Ip() }),
  U5 = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function ty(i, a, r, s) {
  const c = r[a],
    { length: d, position: f } = U5[a],
    m = c.current,
    g = r.time;
  (c.current = Math.abs(i[`scroll${f}`])),
    (c.scrollLength = i[`scroll${d}`] - i[`client${d}`]),
    (c.offset.length = 0),
    (c.offset[0] = 0),
    (c.offset[1] = c.scrollLength),
    (c.progress = ya(0, c.scrollLength, c.current));
  const y = s - g;
  c.velocity = y > L5 ? 0 : Ic(c.current - m, y);
}
function H5(i, a, r) {
  ty(i, "x", a, r), ty(i, "y", a, r), (a.time = r);
}
function Y5(i, a) {
  const r = { x: 0, y: 0 };
  let s = i;
  for (; s && s !== a; )
    if (Al(s))
      (r.x += s.offsetLeft), (r.y += s.offsetTop), (s = s.offsetParent);
    else if (s.tagName === "svg") {
      const c = s.getBoundingClientRect();
      s = s.parentElement;
      const d = s.getBoundingClientRect();
      (r.x += c.left - d.left), (r.y += c.top - d.top);
    } else if (s instanceof SVGGraphicsElement) {
      const { x: c, y: d } = s.getBBox();
      (r.x += c), (r.y += d);
      let f = null,
        m = s.parentNode;
      for (; !f; ) m.tagName === "svg" && (f = m), (m = s.parentNode);
      s = f;
    } else break;
  return r;
}
const Qc = { start: 0, center: 0.5, end: 1 };
function ey(i, a, r = 0) {
  let s = 0;
  if ((i in Qc && (i = Qc[i]), typeof i == "string")) {
    const c = parseFloat(i);
    i.endsWith("px")
      ? (s = c)
      : i.endsWith("%")
      ? (i = c / 100)
      : i.endsWith("vw")
      ? (s = (c / 100) * document.documentElement.clientWidth)
      : i.endsWith("vh")
      ? (s = (c / 100) * document.documentElement.clientHeight)
      : (i = c);
  }
  return typeof i == "number" && (s = a * i), r + s;
}
const q5 = [0, 0];
function G5(i, a, r, s) {
  let c = Array.isArray(i) ? i : q5,
    d = 0,
    f = 0;
  return (
    typeof i == "number"
      ? (c = [i, i])
      : typeof i == "string" &&
        ((i = i.trim()),
        i.includes(" ") ? (c = i.split(" ")) : (c = [i, Qc[i] ? i : "0"])),
    (d = ey(c[0], r, s)),
    (f = ey(c[1], a)),
    d - f
  );
}
const xl = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  k5 = { x: 0, y: 0 };
function X5(i) {
  return "getBBox" in i && i.tagName !== "svg"
    ? i.getBBox()
    : { width: i.clientWidth, height: i.clientHeight };
}
function Q5(i, a, r) {
  const { offset: s = xl.All } = r,
    { target: c = i, axis: d = "y" } = r,
    f = d === "y" ? "height" : "width",
    m = c !== i ? Y5(c, i) : k5,
    g = c === i ? { width: i.scrollWidth, height: i.scrollHeight } : X5(c),
    y = { width: i.clientWidth, height: i.clientHeight };
  a[d].offset.length = 0;
  let x = !a[d].interpolate;
  const b = s.length;
  for (let S = 0; S < b; S++) {
    const M = G5(s[S], y[f], g[f], m[d]);
    !x && M !== a[d].interpolatorOffsets[S] && (x = !0), (a[d].offset[S] = M);
  }
  x &&
    ((a[d].interpolate = of(a[d].offset, Hy(s), { clamp: !1 })),
    (a[d].interpolatorOffsets = [...a[d].offset])),
    (a[d].progress = Pe(0, 1, a[d].interpolate(a[d].current)));
}
function K5(i, a = i, r) {
  if (((r.x.targetOffset = 0), (r.y.targetOffset = 0), a !== i)) {
    let s = a;
    for (; s && s !== i; )
      (r.x.targetOffset += s.offsetLeft),
        (r.y.targetOffset += s.offsetTop),
        (s = s.offsetParent);
  }
  (r.x.targetLength = a === i ? a.scrollWidth : a.clientWidth),
    (r.y.targetLength = a === i ? a.scrollHeight : a.clientHeight),
    (r.x.containerLength = i.clientWidth),
    (r.y.containerLength = i.clientHeight);
}
function Z5(i, a, r, s = {}) {
  return {
    measure: (c) => {
      K5(i, s.target, r), H5(i, r, c), (s.offset || s.target) && Q5(i, r, s);
    },
    notify: () => a(r),
  };
}
const ua = new WeakMap(),
  ny = new WeakMap(),
  gc = new WeakMap(),
  iy = new WeakMap(),
  nr = new WeakMap(),
  ay = (i) => (i === document.scrollingElement ? window : i);
function ev(
  i,
  {
    container: a = document.scrollingElement,
    trackContentSize: r = !1,
    ...s
  } = {}
) {
  if (!a) return xe;
  let c = gc.get(a);
  c || ((c = new Set()), gc.set(a, c));
  const d = B5(),
    f = Z5(a, i, d, s);
  if ((c.add(f), !ua.has(a))) {
    const g = () => {
        for (const S of c) S.measure(It.timestamp);
        vt.preUpdate(y);
      },
      y = () => {
        for (const S of c) S.notify();
      },
      x = () => vt.read(g);
    ua.set(a, x);
    const b = ay(a);
    window.addEventListener("resize", x),
      a !== document.documentElement && ny.set(a, Bc(a, x)),
      b.addEventListener("scroll", x),
      x();
  }
  if (r && !nr.has(a)) {
    const g = ua.get(a),
      y = { width: a.scrollWidth, height: a.scrollHeight };
    iy.set(a, y);
    const x = () => {
        const S = a.scrollWidth,
          M = a.scrollHeight;
        (y.width !== S || y.height !== M) &&
          (g(), (y.width = S), (y.height = M));
      },
      b = vt.read(x, !0);
    nr.set(a, b);
  }
  const m = ua.get(a);
  return (
    vt.read(m, !1, !0),
    () => {
      var b;
      Ge(m);
      const g = gc.get(a);
      if (!g || (g.delete(f), g.size)) return;
      const y = ua.get(a);
      ua.delete(a),
        y &&
          (ay(a).removeEventListener("scroll", y),
          (b = ny.get(a)) == null || b(),
          window.removeEventListener("resize", y));
      const x = nr.get(a);
      x && (Ge(x), nr.delete(a)), iy.delete(a);
    }
  );
}
const J5 = [
    [xl.Enter, "entry"],
    [xl.Exit, "exit"],
    [xl.Any, "cover"],
    [xl.All, "contain"],
  ],
  ly = { start: 0, end: 1 };
function F5(i) {
  const a = i.trim().split(/\s+/);
  if (a.length !== 2) return;
  const r = ly[a[0]],
    s = ly[a[1]];
  if (!(r === void 0 || s === void 0)) return [r, s];
}
function P5(i) {
  if (i.length !== 2) return;
  const a = [];
  for (const r of i)
    if (Array.isArray(r)) a.push(r);
    else if (typeof r == "string") {
      const s = F5(r);
      if (!s) return;
      a.push(s);
    } else return;
  return a;
}
function W5(i, a) {
  const r = P5(i);
  if (!r) return !1;
  for (let s = 0; s < 2; s++) {
    const c = r[s],
      d = a[s];
    if (c[0] !== d[0] || c[1] !== d[1]) return !1;
  }
  return !0;
}
function wf(i) {
  if (!i) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [a, r] of J5)
    if (W5(i, a)) return { rangeStart: `${r} 0%`, rangeEnd: `${r} 100%` };
}
const sy = new Map();
function ry(i) {
  const a = { value: 0 },
    r = ev((s) => {
      a.value = s[i.axis].progress * 100;
    }, i);
  return { currentTime: a, cancel: r };
}
function nv({ source: i, container: a, ...r }) {
  const { axis: s } = r;
  i && (a = i);
  let c = sy.get(a);
  c || ((c = new Map()), sy.set(a, c));
  const d = r.target ?? "self";
  let f = c.get(d);
  f || ((f = {}), c.set(d, f));
  const m = s + (r.offset ?? []).join(",");
  return (
    f[m] ||
      (r.target && Tr(r.target)
        ? wf(r.offset)
          ? (f[m] = new ViewTimeline({ subject: r.target, axis: s }))
          : (f[m] = ry({ container: a, ...r }))
        : Tr()
        ? (f[m] = new ScrollTimeline({ source: a, axis: s }))
        : (f[m] = ry({ container: a, ...r }))),
    f[m]
  );
}
function $5(i, a) {
  const r = nv(a),
    s = a.target ? wf(a.offset) : void 0,
    c = a.target ? Tr(a.target) && !!s : Tr();
  return i.attachTimeline({
    timeline: c ? r : void 0,
    ...(s && c && { rangeStart: s.rangeStart, rangeEnd: s.rangeEnd }),
    observe: (d) => (
      d.pause(),
      mg((f) => {
        d.time = d.iterationDuration * f;
      }, r)
    ),
  });
}
function I5(i) {
  return i && (i.target || i.offset);
}
function tA(i) {
  return i.length === 2;
}
function eA(i, a) {
  return tA(i) || I5(a)
    ? ev((r) => {
        i(r[a.axis].progress, r);
      }, a)
    : mg(i, nv(a));
}
function iv(
  i,
  { axis: a = "y", container: r = document.scrollingElement, ...s } = {}
) {
  if (!r) return xe;
  const c = { axis: a, container: r, ...s };
  return typeof i == "function" ? eA(i, c) : $5(i, c);
}
const nA = () => ({
    scrollX: Je(0),
    scrollY: Je(0),
    scrollXProgress: Je(0),
    scrollYProgress: Je(0),
  }),
  ma = (i) => (i ? !i.current : !1);
function oy(i, a, r, s) {
  return {
    factory: (c) => {
      let d;
      const f = () => {
        if (ma(r) || ma(s)) {
          va.read(f);
          return;
        }
        d = iv(c, {
          ...a,
          axis: i,
          container: (r == null ? void 0 : r.current) || void 0,
          target: (s == null ? void 0 : s.current) || void 0,
        });
      };
      return (
        va.read(f),
        () => {
          ug(f), d == null || d();
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (c) => c,
    duration: 1,
  };
}
function iA(i, a) {
  return typeof window > "u" ? !1 : i ? Xy() && !!wf(a) : df();
}
function aA({ container: i, target: a, ...r } = {}) {
  const s = Wn(nA);
  iA(a, r.offset) &&
    ((s.scrollXProgress.accelerate = oy("x", r, i, a)),
    (s.scrollYProgress.accelerate = oy("y", r, i, a)));
  const c = k.useRef(null),
    d = k.useRef(!1),
    f = k.useCallback(
      () => (
        (c.current = iv(
          (m, { x: g, y }) => {
            s.scrollX.set(g.current),
              s.scrollXProgress.set(g.progress),
              s.scrollY.set(y.current),
              s.scrollYProgress.set(y.progress);
          },
          {
            ...r,
            container: (i == null ? void 0 : i.current) || void 0,
            target: (a == null ? void 0 : a.current) || void 0,
          }
        )),
        () => {
          var m;
          (m = c.current) == null || m.call(c);
        }
      ),
      [i, a, JSON.stringify(r.offset)]
    );
  return (
    Ar(() => {
      if (((d.current = !1), ma(i) || ma(a))) {
        d.current = !0;
        return;
      } else return f();
    }, [f]),
    k.useEffect(() => {
      if (!d.current) return;
      let m;
      const g = () => {
        const y = ma(i),
          x = ma(a);
        !y && !x && (m = f());
      };
      return (
        va.read(g),
        () => {
          ug(g), m == null || m();
        }
      );
    }, [f]),
    s
  );
}
function lA(i) {
  const a = Wn(() => Je(i)),
    { isStatic: r } = k.useContext(jr);
  if (r) {
    const [, s] = k.useState(i);
    k.useEffect(() => a.on("change", s), []);
  }
  return a;
}
function av(i, a) {
  const r = lA(a()),
    s = () => r.set(a());
  return (
    s(),
    Ar(() => {
      const c = () => vt.preRender(s, !1, !0),
        d = i.map((f) => f.on("change", c));
      return () => {
        d.forEach((f) => f()), Ge(s);
      };
    }),
    r
  );
}
function sA(i) {
  (Tl.current = []), i();
  const a = av(Tl.current, i);
  return (Tl.current = void 0), a;
}
function fr(i, a, r, s) {
  if (typeof i == "function") return sA(i);
  if (r !== void 0 && !Array.isArray(r) && typeof a != "function")
    return rA(i, a, r, s);
  const f = typeof a == "function" ? a : sS(a, r, s),
    m = Array.isArray(i) ? uy(i, f) : uy([i], ([y]) => f(y)),
    g = Array.isArray(i) ? void 0 : i.accelerate;
  return (
    g &&
      !g.isTransformed &&
      typeof a != "function" &&
      Array.isArray(r) &&
      (s == null ? void 0 : s.clamp) !== !1 &&
      (m.accelerate = { ...g, times: a, keyframes: r, isTransformed: !0 }),
    m
  );
}
function uy(i, a) {
  const r = Wn(() => []);
  return av(i, () => {
    r.length = 0;
    const s = i.length;
    for (let c = 0; c < s; c++) r[c] = i[c].get();
    return a(r);
  });
}
function rA(i, a, r, s) {
  const c = Wn(() => Object.keys(r)),
    d = Wn(() => ({}));
  for (const f of c) d[f] = fr(i, a, r[f], s);
  return d;
}
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oA = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  uA = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, r, s) =>
      s ? s.toUpperCase() : r.toLowerCase()
    ),
  cy = (i) => {
    const a = uA(i);
    return a.charAt(0).toUpperCase() + a.slice(1);
  },
  lv = (...i) =>
    i
      .filter((a, r, s) => !!a && a.trim() !== "" && s.indexOf(a) === r)
      .join(" ")
      .trim(),
  cA = (i) => {
    for (const a in i)
      if (a.startsWith("aria-") || a === "role" || a === "title") return !0;
  };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var fA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dA = k.forwardRef(
  (
    {
      color: i = "currentColor",
      size: a = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: s,
      className: c = "",
      children: d,
      iconNode: f,
      ...m
    },
    g
  ) =>
    k.createElement(
      "svg",
      {
        ref: g,
        ...fA,
        width: a,
        height: a,
        stroke: i,
        strokeWidth: s ? (Number(r) * 24) / Number(a) : r,
        className: lv("lucide", c),
        ...(!d && !cA(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...f.map(([y, x]) => k.createElement(y, x)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ct = (i, a) => {
  const r = k.forwardRef(({ className: s, ...c }, d) =>
    k.createElement(dA, {
      ref: d,
      iconNode: a,
      className: lv(`lucide-${oA(cy(i))}`, `lucide-${i}`, s),
      ...c,
    })
  );
  return (r.displayName = cy(i)), r;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hA = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  mA = Ct("activity", hA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pA = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  yA = Ct("arrow-up-right", pA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gA = [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }],
  ],
  vA = Ct("arrow-up", gA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xA = [
    [
      "path",
      {
        d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
        key: "pzmjnu",
      },
    ],
    ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }],
  ],
  bA = Ct("chart-pie", xA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SA = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  TA = Ct("check", SA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AA = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  EA = Ct("chevron-right", AA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  MA = Ct("circle-question-mark", wA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NA = [
    ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
    ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
    ["path", { d: "M7 6h1v4", key: "1obek4" }],
    ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
  ],
  jA = Ct("coins", NA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const CA = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  DA = Ct("copy", CA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RA = [
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M17 20v2", key: "1rnc9c" }],
    ["path", { d: "M17 2v2", key: "11trls" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M2 17h2", key: "7oei6x" }],
    ["path", { d: "M2 7h2", key: "asdhe0" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "M20 17h2", key: "1fpfkl" }],
    ["path", { d: "M20 7h2", key: "1o8tra" }],
    ["path", { d: "M7 20v2", key: "4gnj0m" }],
    ["path", { d: "M7 2v2", key: "1i4yhu" }],
    [
      "rect",
      { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
    ],
    [
      "rect",
      { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
    ],
  ],
  zA = Ct("cpu", RA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _A = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  Kc = Ct("external-link", _A);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OA = [
    [
      "path",
      {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih",
      },
    ],
  ],
  VA = Ct("flame", OA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LA = [
    ["path", { d: "M10.5 3 8 9l4 13 4-13-2.5-6", key: "b3dvk1" }],
    [
      "path",
      {
        d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",
        key: "7w4byz",
      },
    ],
    ["path", { d: "M2 9h20", key: "16fsjt" }],
  ],
  BA = Ct("gem", LA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  HA = Ct("info", UA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YA = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  qA = Ct("layers", YA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GA = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  kA = Ct("menu", GA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XA = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  QA = Ct("message-circle", XA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KA = [
    ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
    ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
    ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }],
  ],
  ZA = Ct("percent", KA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JA = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  FA = Ct("play", JA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PA = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  WA = Ct("quote", PA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $A = [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  IA = Ct("refresh-cw", $A);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tE = [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz",
      },
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  ],
  fy = Ct("rocket", tE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eE = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "M12 8v4", key: "1got3b" }],
    ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ],
  sv = Ct("shield-alert", eE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nE = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  iE = Ct("shield-check", nE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aE = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  rv = Ct("sparkles", aE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lE = [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }],
  ],
  Mf = Ct("terminal", lE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sE = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  rE = Ct("trending-up", sE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oE = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  dy = Ct("x", oE),
  hy = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Live Chart", href: "#chart" },
    { label: "How to Buy", href: "#how-to-buy" },
  ],
  Zc = "0xComingSoon",
  uE = [
    {
      label: "Total Supply",
      value: "1,000,000,000",
      description:
        "100% of tokens minted, no inflation, fully decentralized standard ERC-20.",
      glowColor: "green",
    },
    {
      label: "Tax Mechanics",
      value: "0% Buy / 0% Sell",
      description:
        "Zero fees. 100% of the value goes directly back to the community.",
      glowColor: "teal",
    },
    {
      label: "Liquidity Status",
      value: "LP Burnt & Locked",
      description:
        "Liquidity pooled is permanently locked on Uniswap with keys tossed into a black hole.",
      glowColor: "purple",
    },
    {
      label: "Ethereum Ingress",
      value: "100% Fair Launch",
      description:
        "No pre-sales, no team allocations. Fully community-architected on Ether-Grid.",
      glowColor: "green",
    },
  ],
  ir = [
    {
      title: "Forge a Neural Gateway",
      description:
        "Download MetaMask, Rabby, or Coinbase Wallet to safely bridge with the Ethereum network.",
      command: "$ gateway --create --network ethereum",
      output: "Wallet generated. Seed phrase locked in biological ledger.",
    },
    {
      title: "Gather Galactic Energy (ETH)",
      description:
        "Acquire Ethereum from your preferred exchange or bridge, and send it directly to your neural gateway.",
      command: "$ transfer --asset ETH --amount target_value",
      output: "ETH balance updated in portal. Ready for interstellar trade.",
    },
    {
      title: "Navigate to Uniswap Dex-grid",
      description:
        "Connect to Uniswap, insert the official $WOKE contract address, and prepare to swap.",
      command: "$ connect --dex uniswap --pair WOKE-ETH",
      output: "Bridge established. Liquidity pool found: 0x4f594...aliens",
    },
    {
      title: "Transmute ETH to $WOKE",
      description:
        "Perform the swap, adjust slippage if necessary (0% recommended), and claim your citizenship of the Ethereum motherboard.",
      command: "$ swap --from ETH --to WOKE --slippage 0.5%",
      output: "Intergalactic transmute complete. Welcome, alien architect!",
    },
  ],
  vc = {
    quote: "I vowed to destroy the Woke Mind Virus.",
    p1: "I lost my Son essentially, they call it dead naming for a reason, so my Son, Xavier is dead. Killed by the woke mind virus. I vowed to destroy the woke mind virus after that, and we are making some progress",
    p2: "The Woke Mind Virus must be destroyed. We must come together. It is killing our youth faster than any other virus. We must take it into our own hands. Most people don’t notice cultural change while it’s happening. They notice it five years later and wonder how everything changed so quickly. Elon Musk is helping the world wake up from the woke mind virus. That makes him a hero in the history of humanity.",
  },
  pa = { telegram: "https://t.me/wokecoinoneth", x: "https://x.com/wokecoinoneth" };
function cE() {
  const [i, a] = k.useState(!1),
    [r, s] = k.useState(!1);
  k.useEffect(() => {
    const d = () => {
      s(window.scrollY > 40);
    };
    return (
      window.addEventListener("scroll", d),
      () => window.removeEventListener("scroll", d)
    );
  }, []);
  const c =
    "./images/virus.png";
  return p.jsxs("header", {
    className: "fixed top-0 left-0 right-0 z-50 flex justify-center p-4",
    children: [
      p.jsx(Ot.nav, {
        initial: { y: -50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" },
        className: `w-full max-w-4xl transition-all duration-300 rounded-2xl border ${
          r
            ? "bg-[#020408]/85 backdrop-blur-md border-alien-lime/40 shadow-[0_4px_30px_rgba(0,255,136,0.15)] py-2.5 px-6"
            : "bg-transparent border-transparent py-4 px-6"
        }`,
        id: "navbar-container",
        children: p.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            p.jsxs("a", {
              href: "#home",
              className: "flex items-center space-x-3 group",
              children: [
                p.jsx(Ot.div, {
                  whileHover: { rotate: [0, -10, 10, -10, 0] },
                  transition: { duration: 0.5 },
                  className:
                    "relative w-9 h-9 rounded-full bg-slate-900 border border-alien-lime/40 overflow-hidden flex items-center justify-center shadow-[0_0_10px_rgba(0,255,102,0.3)]",
                  children: p.jsx("img", {
                    src: c,
                    alt: "VITALIEN Logo",
                    className: "w-8 h-8 object-contain scale-110",
                    referrerPolicy: "no-referrer",
                  }),
                }),
                p.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    p.jsx("span", {
                      className:
                        "font-display font-bold text-lg tracking-wider bg-gradient-to-r from-white via-neutral-100 to-alien-lime bg-clip-text text-transparent group-hover:glow-text-green transition-all duration-300",
                      children: "WOKE",
                    }),
                    p.jsx("span", {
                      className:
                        "font-mono text-[9px] tracking-widest text-matrix-teal uppercase",
                      children: "Meme Architect",
                    }),
                  ],
                }),
              ],
            }),
            p.jsx("div", {
              className: "hidden md:flex items-center space-x-8",
              children: hy.map((d) =>
                p.jsxs(
                  "a",
                  {
                    href: d.href,
                    className:
                      "relative font-mono text-sm font-medium text-gray-300 hover:text-alien-lime transition-colors duration-200 py-1 group",
                    children: [
                      d.label,
                      p.jsx("span", {
                        className:
                          "absolute bottom-0 left-0 w-0 h-[2px] bg-alien-lime transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00FF88]",
                      }),
                    ],
                  },
                  d.label
                )
              ),
            }),
            p.jsxs("div", {
              className: "hidden md:flex items-center space-x-3",
              children: [
                p.jsx("a", {
                  href: pa.telegram,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "font-mono text-xs px-4 py-2 border border-alien-lime/30 rounded-xl text-alien-lime hover:bg-alien-lime/10 transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]",
                  children: "TELEGRAM",
                }),
                p.jsxs("a", {
                  href: "#how-to-buy",
                  className:
                    "flex items-center space-x-1.5 bg-gradient-to-r from-alien-lime to-matrix-teal text-obsidian font-display font-medium text-xs px-4 py-2.5 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]",
                  children: [
                    p.jsx(fy, { className: "w-3.5 h-3.5" }),
                    p.jsx("span", { children: "BUY $WOKE" }),
                  ],
                }),
              ],
            }),
            p.jsx("div", {
              className: "flex md:hidden items-center",
              children: p.jsx("button", {
                onClick: () => a(!i),
                className:
                  "text-gray-400 hover:text-alien-lime p-2 transition-colors focus:outline-none",
                "aria-label": "Toggle Menu",
                id: "mobile-menu-trigger",
                children: i
                  ? p.jsx(dy, { className: "w-6 h-6" })
                  : p.jsx(kA, { className: "w-6 h-6" }),
              }),
            }),
          ],
        }),
      }),
      p.jsx(Gg, {
        children:
          i &&
          p.jsxs(p.Fragment, {
            children: [
              p.jsx(Ot.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => a(!1),
                className:
                  "fixed inset-0 bg-[#030712]/90 backdrop-blur-md z-40 md:hidden",
              }),
              p.jsxs(Ot.div, {
                initial: { x: "100%" },
                animate: { x: 0 },
                exit: { x: "100%" },
                transition: { type: "spring", bounce: 0, duration: 0.4 },
                className:
                  "fixed right-0 top-0 bottom-0 w-80 bg-gradient-to-b from-[#070a13] to-[#030712] border-l border-alien-lime/20 p-6 z-50 md:hidden flex flex-col justify-between",
                id: "mobile-drawer",
                children: [
                  p.jsxs("div", {
                    className: "flex flex-col space-y-8",
                    children: [
                      p.jsxs("div", {
                        className:
                          "flex items-center justify-between border-b border-white/5 pb-4",
                        children: [
                          p.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              p.jsx("img", {
                                src: c,
                                alt: "Logo",
                                className: "w-7 h-7 object-contain",
                                referrerPolicy: "no-referrer",
                              }),
                              p.jsx("span", {
                                className:
                                  "font-display font-bold tracking-wider text-base",
                                children: "WOKE",
                              }),
                            ],
                          }),
                          p.jsx("button", {
                            onClick: () => a(!1),
                            className:
                              "text-gray-400 hover:text-alien-lime p-2",
                            children: p.jsx(dy, { className: "w-5 h-5" }),
                          }),
                        ],
                      }),
                      p.jsx("div", {
                        className: "flex flex-col space-y-6",
                        children: hy.map((d) =>
                          p.jsx(
                            "a",
                            {
                              href: d.href,
                              onClick: () => a(!1),
                              className:
                                "font-display font-medium text-lg text-gray-300 hover:text-alien-lime hover:glow-text-green transition-all",
                              children: d.label,
                            },
                            d.label
                          )
                        ),
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className:
                      "flex flex-col space-y-4 pt-6 border-t border-white/5",
                    children: [
                      p.jsxs("a", {
                        href: pa.telegram,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center justify-center space-x-2 w-full font-mono text-center text-gray-300 hover:text-alien-lime transition-colors py-3 border border-white/10 rounded-xl",
                        children: [
                          p.jsx("span", { children: "Mothership Telegram" }),
                          p.jsx(Kc, { className: "w-4 h-4" }),
                        ],
                      }),
                      p.jsxs("a", {
                        href: pa.x,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center justify-center space-x-2 w-full font-mono text-center text-gray-300 hover:text-alien-lime transition-colors py-3 border border-white/10 rounded-xl",
                        children: [
                          p.jsx("span", { children: "Satellite X" }),
                          p.jsx(Kc, { className: "w-4 h-4" }),
                        ],
                      }),
                      p.jsxs("a", {
                        href: "#how-to-buy",
                        onClick: () => a(!1),
                        className:
                          "flex items-center justify-center space-x-2 w-full bg-alien-lime text-obsidian font-display font-semibold text-center py-3.5 rounded-xl shadow-[0_0_15px_rgba(0,255,136,0.3)] hover:scale-102 transition-transform",
                        children: [
                          p.jsx(fy, { className: "w-4 h-4" }),
                          p.jsx("span", { children: "SWAP ETH For $WOKE" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      }),
    ],
  });
}
function fE() {
  const [i, a] = k.useState(!1),
    r = k.useRef(null),
    s = k.useRef(null),
    { scrollY: c } = aA(),
    d = fr(c, [0, 800], [0, 150]),
    f = fr(c, [0, 800], [0, -80]),
    m = fr(c, [0, 800], [1, 0.85]),
    g = () => {
      navigator.clipboard.writeText(Zc.split(" ")[0]),
        a(!0),
        setTimeout(() => a(!1), 2e3);
    };
  return (
    k.useEffect(() => {
      const x = s.current;
      if (!x) return;
      const b = x.getContext("2d");
      if (!b) return;
      let S,
        M = (x.width = x.offsetWidth),
        D = (x.height = x.offsetHeight);
      const U = () => {
        x && ((M = x.width = x.offsetWidth), (D = x.height = x.offsetHeight));
      };
      window.addEventListener("resize", U);
      const H = 75,
        L = [];
      for (let G = 0; G < H; G++)
        L.push({
          x: Math.random() * M,
          y: Math.random() * D,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          color: Math.random() > 0.5 ? "#00FF88" : "#00D1FF",
          pulseDirection: 1,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          alpha: Math.random() * 0.7 + 0.3,
        });
      let q = { x: -1e3, y: -1e3, radius: 120 };
      const Y = (G) => {
          const X = x.getBoundingClientRect();
          (q.x = G.clientX - X.left), (q.y = G.clientY - X.top);
        },
        Q = () => {
          (q.x = -1e3), (q.y = -1e3);
        };
      x.addEventListener("mousemove", Y), x.addEventListener("mouseleave", Q);
      const tt = () => {
        b.clearRect(0, 0, M, D);
        for (let G = 0; G < L.length; G++)
          for (let X = G; X < L.length; X++) {
            const K = L[G].x - L[X].x,
              nt = L[G].y - L[X].y,
              $ = Math.sqrt(K * K + nt * nt);
            $ < 110 &&
              (b.beginPath(),
              (b.strokeStyle = `rgba(0, 255, 136, ${(1 - $ / 110) * 0.08})`),
              (b.lineWidth = 0.8),
              b.moveTo(L[G].x, L[G].y),
              b.lineTo(L[X].x, L[X].y),
              b.stroke());
          }
        L.forEach((G) => {
          (G.x += G.speedX),
            (G.y += G.speedY),
            G.x < 0 && (G.x = M),
            G.x > M && (G.x = 0),
            G.y < 0 && (G.y = D),
            G.y > D && (G.y = 0),
            (G.alpha += G.pulseDirection * G.pulseSpeed),
            (G.alpha > 0.95 || G.alpha < 0.2) && (G.pulseDirection *= -1);
          const X = q.x - G.x,
            K = q.y - G.y,
            nt = Math.sqrt(X * X + K * K);
          if (nt < q.radius) {
            const $ = (q.radius - nt) / q.radius;
            (G.x -= X * $ * 0.02), (G.y -= K * $ * 0.02);
          }
          b.beginPath(),
            b.arc(G.x, G.y, G.size, 0, Math.PI * 2),
            (b.fillStyle =
              G.color === "#00FF88"
                ? `rgba(0, 255, 136, ${G.alpha})`
                : `rgba(0, 209, 255, ${G.alpha})`),
            (b.shadowBlur = G.size * 3),
            (b.shadowColor = G.color),
            b.fill(),
            (b.shadowBlur = 0);
        }),
          (S = requestAnimationFrame(tt));
      };
      return (
        tt(),
        () => {
          window.removeEventListener("resize", U),
            x &&
              (x.removeEventListener("mousemove", Y),
              x.removeEventListener("mouseleave", Q)),
            cancelAnimationFrame(S);
        }
      );
    }, []),
    p.jsxs("section", {
      ref: r,
      id: "home",
      className:
        "relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden scanlines bg-gradient-to-b from-[#030712] via-[#050917] to-[#030712]",
      children: [
        // p.jsx("canvas", {
        //   ref: s,
        //   className: "absolute inset-0 w-full h-full pointer-events-auto",
        // }),
        p.jsx("div", {
          className:
            "absolute inset-0 cyber-grid opacity-30 select-none pointer-events-none",
        }),
        p.jsx("div", {
          className:
            "absolute inset-0 cyber-grid-fine opacity-20 select-none pointer-events-none",
        }),
        p.jsx(Ot.div, {
          style: { y: d },
          className: "absolute inset-0 alien-nebula pointer-events-none",
        }),
        p.jsx("div", {
          className:
            "absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-alien-lime/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[8000ms]",
        }),
        p.jsx("div", {
          className:
            "absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00f0ff]/10 rounded-full blur-[160px] pointer-events-none animate-pulse duration-[12000ms]",
        }),
        p.jsxs("div", {
          className:
            "relative w-full max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10",
          children: [
            p.jsxs(Ot.div, {
              style: { y: f },
              initial: { x: -100, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 0.8, ease: "easeOut" },
              className: "lg:col-span-7 flex flex-col space-y-6 text-left",
              id: "hero-content",
              children: [
                p.jsxs("div", {
                  className:
                    "inline-flex items-center space-x-2 bg-slate-950/80 backdrop-blur-md border border-alien-lime/30 w-fit px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,255,102,0.1)]",
                  children: [
                    p.jsxs("span", {
                      className: "flex h-2.5 w-2.5 relative",
                      children: [
                        p.jsx("span", {
                          className:
                            "animate-ping absolute inline-flex h-full w-full rounded-full bg-alien-lime opacity-75",
                        }),
                        p.jsx("span", {
                          className:
                            "relative inline-flex rounded-full h-2.5 w-2.5 bg-alien-lime",
                        }),
                      ],
                    }),
                    p.jsx("span", {
                      className:
                        "font-mono text-[10px] tracking-widest text-[#00ff66] uppercase",
                      children: "GRID INGRESS: APPROVED",
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    p.jsxs("div", {
                      className:
                        "font-mono text-xs tracking-[0.3em] text-[#00f0ff] uppercase flex items-center space-x-2",
                      children: [
                        p.jsx(rv, {
                          className:
                            "w-3.5 h-3.5 animate-spin duration-[4000ms]",
                        }),
                        p.jsx("span", {
                          children: "THE ULTIMATE ETH BLOCKCHAIN MEME",
                        }),
                      ],
                    }),
                    p.jsxs("h1", {
                      className:
                        "font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-white leading-none",
                      children: [
                        "Woke Mind Virus ",
                        p.jsx("br", {}),
                        p.jsx("span", {
                          className:
                            "bg-gradient-to-r from-alien-lime via-[#00f0ff] to-[#bc13fe] bg-clip-text text-transparent glow-text-green inline-block mt-2",
                          children: "$WOKE",
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsx("p", {
                  className:
                    "text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-xl",
                  children:
                    'The deadliest virus in recorded history. Spreads through eye contact, group chats, and a single unguarded moment of empathy. No vaccine. No cure. Fully on-chain.',
                }),
                p.jsxs("div", {
                  className: "flex flex-col space-y-2 max-w-md",
                  children: [
                    p.jsx("span", {
                      className:
                        "font-mono text-[10px] text-gray-500 tracking-wider",
                      children: "CONTRACT ADDRESS",
                    }),
                    p.jsxs("div", {
                      className:
                        "flex items-center bg-slate-950/90 border border-alien-lime/25 hover:border-alien-lime/50 rounded-xl p-1 px-3 transition-all duration-300 shadow-inner group",
                      children: [
                        p.jsx(Mf, {
                          className: "w-4 h-4 text-[#00f0ff] mr-2 shrink-0",
                        }),
                        p.jsx("span", {
                          className:
                            "font-mono text-xs text-[#00ff66] overflow-hidden text-ellipsis whitespace-nowrap select-all py-1.5 tracking-wider",
                          children: Zc.split(" ")[0],
                        }),
                        p.jsx("button", {
                          onClick: g,
                          className:
                            "ml-auto p-1.5 hover:bg-slate-900 rounded-lg text-gray-400 hover:text-alien-lime transition-all shrink-0 cursor-pointer",
                          title: "Copy Address",
                          children: i
                            ? p.jsx(TA, { className: "w-4 h-4 text-[#00ff66]" })
                            : p.jsx(DA, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "flex flex-wrap gap-4 pt-3",
                  children: [
                    p.jsxs("a", {
                      href: "#how-to-buy",
                      className:
                        "flex items-center space-x-2 bg-gradient-to-r from-[#00ff66] to-[#00f0ff] hover:to-[#00ff66] text-obsidian font-display font-semibold transition-all duration-300 hover:scale-[1.03] px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(0,255,102,0.3)] cursor-pointer",
                      children: [
                        p.jsx("span", { children: "BUY $WOKE" }),
                        p.jsx(yA, { className: "w-4 h-4 stroke-[3px]" }),
                      ],
                    }),
                    p.jsxs("a", {
                      href: pa.telegram,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center space-x-2 bg-slate-950/80 border border-white/10 hover:border-alien-lime/40 text-gray-200 hover:text-white transition-all duration-200 px-6 py-4 rounded-xl cursor-pointer",
                      children: [
                        p.jsx(QA, { className: "w-4 h-4 text-sky-400" }),
                        p.jsx("span", { children: "JOIN TELEGRAM" }),
                      ],
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className:
                    "grid grid-cols-4 gap-4 pt-6 border-t border-white/5 font-mono text-[10px] text-gray-500",
                  children: [
                    p.jsxs("div", {
                      children: [
                        p.jsx("p", { children: "TICKER" }),
                        p.jsx("p", {
                          className: "text-white font-medium mt-1 text-xs",
                          children: "$WOKE",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("p", { children: "FEE RATIO" }),
                        p.jsx("p", {
                          className: "text-[#00ff66] font-medium mt-1 text-xs",
                          children: "0% NO TAX",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("p", { children: "LIQUIDITY" }),
                        p.jsx("p", {
                          className: "text-[#00f0ff] font-medium mt-1 text-xs",
                          children: "100% BURNT",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("p", { children: "CHAIN" }),
                        p.jsx("p", {
                          className: "text-white font-medium mt-1 text-xs",
                          children: "ETHEREUM (ERC20)",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs(Ot.div, {
              style: { y: f, scale: m },
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 1, ease: "easeOut" },
              className:
                "lg:col-span-5 flex justify-center items-center relative",
              id: "hero-logo-orb",
              children: [
                p.jsx("div", {
                  className:
                    "absolute w-72 h-72 rounded-full border border-dashed border-alien-lime/20 animate-spin-slow",
                }),
                p.jsx("div", {
                  className:
                    "absolute w-80 h-80 rounded-full border border-double border-[#00D1FF]/15 animate-[spin_25s_linear_infinite_reverse]",
                }),
                p.jsx("div", {
                  className:
                    "absolute w-56 h-56 rounded-full border border-[#bc13fe]/25 animate-[pulse_6000ms_infinite]",
                }),
                p.jsx("div", {
                  className:
                    "absolute w-64 h-64 rounded-full bg-slate-950/40 backdrop-blur-xl border border-white/5 flex items-center justify-center p-8 overflow-hidden shadow-[inset_0_0_30px_rgba(255,255,255,0.05),0_0_50px_rgba(0,255,102,0.06)]",
                }),
                p.jsxs(Ot.div, {
                  animate: { y: [0, -15, 0], rotate: [0, 2, -2, 0] },
                  transition: { duration: 5, repeat: 1 / 0, ease: "easeInOut" },
                  className:
                    "relative z-20 w-52 h-52 flex items-center justify-center cursor-pointer",
                  children: [
                    p.jsx("div", {
                      className:
                        "absolute inset-0 bg-alien-lime/20 blur-xl rounded-full scale-75 animate-pulse duration-[3000ms]",
                    }),
                    p.jsx("img", {
                      src: "./images/virus.png",
                      alt: "Vitalien Main Logo",
                      className:
                        "w-48 h-48 object-contain relative z-10 scale-105 select-none drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]",
                      referrerPolicy: "no-referrer",
                    }),
                  ],
                }),
                // p.jsx("div", {
                //   className:
                //     "absolute top-1/4 left-1/10 w-2 h-2 rounded-full bg-alien-lime animate-ping",
                // }),
                // p.jsx("div", {
                //   className:
                //     "absolute bottom-1/5 right-1/10 w-3 h-3 rounded-full bg-[#00D1FF] animate-pulse",
                // }),
              ],
            }),
          ],
        }),
        p.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none",
        }),
      ],
    })
  );
}
function dE() {
  const i = [
    { property: "Designation", value: "Woke Mind Virus Architect Entity" },
    { property: "Origin Sector", value: "Ethereum Motherboard Grid" },
    { property: "Genesis Code Year", value: "January 2022" },
    { property: "Mission Directives", value: "Decentralize Planetary Systems" },
    { property: "Core Power Source", value: "Viral Criticisms / Cosmic Memes" },
    { property: "Crackhead Resonance Ratio", value: "Beyond Infinity %" },
  ];
  return p.jsxs("section", {
    id: "about",
    className:
      "relative py-24 bg-slate-950/40 border-y border-white/5 overflow-hidden",
    children: [
      p.jsx("div", {
        className:
          "absolute top-1/2 left-0 w-80 h-80 bg-[#bc13fe]/5 rounded-full blur-[100px] pointer-events-none",
      }),
      p.jsx("div", {
        className:
          "absolute right-0 bottom-12 w-96 h-96 bg-alien-lime/5 rounded-full blur-[120px] pointer-events-none",
      }),
      p.jsx("div", {
        className: "absolute inset-0 cyber-grid opacity-10 pointer-events-none",
      }),
      p.jsxs("div", {
        className: "max-w-5xl mx-auto px-6 relative z-10",
        children: [
          p.jsxs("div", {
            className: "flex flex-col items-center text-center space-y-4 mb-16",
            children: [
              p.jsxs(Ot.div, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0, margin: "-100px" },
                transition: { duration: 0.5 },
                className:
                  "flex items-center space-x-2 bg-slate-900 border border-[#bc13fe]/30 px-3 py-1 rounded-full text-xs font-mono text-white/80",
                children: [
                  p.jsx(MA, { className: "w-3.5 h-3.5 text-[#bc13fe]" }),
                  p.jsx("span", { children: "ORIGIN OF THE PROPHECY" }),
                ],
              }),
              p.jsxs("h2", {
                className:
                  "font-display font-bold text-3xl sm:text-4xl text-white tracking-tight",
                children: [
                  "About ",
                  p.jsx("span", {
                    className: "text-alien-lime glow-text-green",
                    children: "Woke Mind Virus",
                  }),
                ],
              }),
              p.jsx("div", {
                className:
                  "h-1 w-20 bg-gradient-to-r from-alien-lime to-[#bc13fe] rounded-full shadow-[0_0_10px_rgba(0,255,102,0.5)]",
              }),
            ],
          }),
          p.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",
            children: [
              p.jsxs(Ot.div, {
                initial: { x: -50, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className:
                  "lg:col-span-7 flex flex-col justify-between bg-slate-950 border border-[#bc13fe]/20 p-6 sm:p-8 rounded-2xl glow-border-purple relative hover:border-[#bc13fe]/40 transition-all duration-300",
                children: [
                  p.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-32 h-32 bg-[#bc13fe]/5 rounded-bl-full pointer-events-none",
                  }),
                  p.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      p.jsxs("div", {
                        className: "flex items-start space-x-4",
                        children: [
                          p.jsx(WA, {
                            className:
                              "w-10 h-10 text-alien-lime shrink-0 rotate-180",
                          }),
                          p.jsxs("blockquote", {
                            className:
                              "font-display font-medium text-xl text-white italic tracking-wide sm:text-2xl leading-relaxed",
                            children: ['"', vc.quote, '"'],
                          }),
                        ],
                      }),
                      p.jsx("div", { className: "h-px bg-white/10 my-4" }),
                      p.jsxs("div", {
                        className:
                          "space-y-4 text-gray-300 font-light leading-relaxed text-sm sm:text-base",
                        children: [
                          p.jsx("p", { children: vc.p1 }),
                          p.jsx("p", {
                            className:
                              "border-l-2 border-[#00D1FF] pl-3 text-[#00D1FF]/90 italic font-mono text-xs sm:text-sm bg-slate-900/40 py-2 rounded-r-lg",
                            children: '"Purge the Woke Mind Virus"',
                          }),
                          p.jsx("p", { children: vc.p2 }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className:
                      "mt-6 flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] sm:text-xs px-3 py-2 rounded-lg font-mono",
                    children: [
                      p.jsx(sv, { className: "w-4 h-4 shrink-0" }),
                      p.jsx("span", {
                        children:
                          "I vowed to destroy the Woke Mind Virus: Elon Musk",
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs(Ot.div, {
                initial: { x: 50, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className:
                  "lg:col-span-5 flex flex-col justify-center items-center bg-slate-950 border border-alien-lime/20 p-6 sm:p-8 rounded-2xl glow-border-green",
                children: p.jsx("div", {
                  className: "w-full flex justify-center",
                  ref: (function () {
                    var _loaded = false;
                    return function (el) {
                      if (el && !_loaded) {
                        _loaded = true;
                        if (window.twttr && window.twttr.widgets) {
                          window.twttr.widgets.load(el);
                        } else {
                          var s = document.createElement("script");
                          s.async = true;
                          s.src = "https://platform.x.com/widgets.js";
                          s.charset = "utf-8";
                          document.head.appendChild(s);
                        }
                      }
                    };
                  })(),
                  dangerouslySetInnerHTML: {
                    __html:
                      '<blockquote class="twitter-tweet"><p lang="und" dir="ltr">Yes</p>&mdash; Elon Musk (@elonmusk) <a href="https://x.com/elonmusk/status/2068736123929559240?ref_src=twsrc%5Etfw">June 21, 2026</a></blockquote>',
                  },
                }),
              }),
            ],
          }),
          p.jsxs("div", {
            className: "mt-16 space-y-8",
            children: [
              p.jsxs("div", {
                className:
                  "flex flex-col items-center sm:flex-row sm:justify-between border-b border-white/5 pb-4",
                children: [
                  p.jsxs("div", {
                    className: "text-left space-y-1",
                    children: [
                      p.jsx("span", {
                        className:
                          "font-mono text-[10px] text-[#00D1FF] tracking-widest uppercase mb-1 block",
                        children: "// Interstellar Signals",
                      }),
                      p.jsx("h3", {
                        className:
                          "font-display font-semibold text-xl text-white",
                        children: "LIVE BROADCAST",
                      }),
                    ],
                  }),
                  p.jsx("span", {
                    className: "font-mono text-[9px] text-gray-500 max-sm:mt-2",
                    children: "DECRYPTED PORTAL RESOLUTION: 4096p",
                  }),
                ],
              }),
              p.jsxs(Ot.div, {
                initial: { y: 30, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className:
                  "group relative bg-[#020408]/95 border border-[#bc13fe]/30 rounded-2xl overflow-hidden glow-border-purple hover:border-[#bc13fe]/50 transition-all duration-300",
                children: [
                  p.jsxs("div", {
                    className:
                      "absolute top-4 left-4 z-20 flex items-center space-x-2 bg-[#020408]/85 backdrop-blur-md border border-[#bc13fe]/40 px-3 py-1.5 rounded-lg",
                    children: [
                      p.jsx("span", {
                        className:
                          "h-2 w-2 rounded-full bg-[#bc13fe] animate-ping",
                      }),
                      p.jsx("span", {
                        className:
                          "font-mono text-[9px] tracking-widest text-[#bc13fe] uppercase font-semibold",
                        children: "LIVE BROADCAST // TRANS-LINK 0x00FF",
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className:
                      "relative w-full aspect-video md:max-h-[500px] overflow-hidden bg-black flex items-center justify-center",
                    children: [
                      p.jsx("video", {
                        src: "/videos/virus.mp4",
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        controls: !0,
                        className: "w-full h-full object-cover",
                        referrerPolicy: "no-referrer",
                      }),
                      p.jsx("div", {
                        className:
                          "absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(188,19,254,0.06)_50%,rgba(188,19,254,0.06)_51%,transparent_52%)] bg-[length:100%_15px] pointer-events-none",
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className:
                      "p-6 text-left space-y-1.5 relative z-20 bg-[#020408]/90 border-t border-white/5",
                    children: [
                      p.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#bc13fe] uppercase tracking-wider block",
                        children: "// ACTIVE INTERSTELLAR BROADCAST LINK",
                      }),
                      p.jsx("h4", {
                        className:
                          "font-display font-semibold text-lg text-white sm:text-xl",
                        children: "I vowed to destroy the Woke Mind Virus",
                      }),
                      
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                  p.jsxs(Ot.div, {
                    initial: { y: 30, opacity: 0 },
                    whileInView: { y: 0, opacity: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6, delay: 0.1 },
                    className:
                      "group relative bg-[#020408]/90 border border-[#00D1FF]/20 rounded-2xl overflow-hidden glow-border-teal hover:border-[#00D1FF]/40 transition-all duration-300",
                    children: [
                      p.jsx("div", {
                        className:
                          "absolute top-3 left-3 z-20 bg-[#020408]/80 backdrop-blur-md border border-[#00D1FF]/30 px-2.5 py-1 rounded-lg font-mono text-[9px] tracking-wider text-[#00D1FF]",
                        children: "TRANSMISSION // 0xEA88",
                      }),
                      p.jsxs("div", {
                        className:
                          "relative h-64 sm:h-80 md:h-[400px] w-full overflow-hidden",
                        children: [
                          p.jsx("div", {
                            className:
                              "absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020408] via-[#020408]/40 to-transparent z-10 h-1/3",
                          }),
                          p.jsx(Ot.img, {
                            src: "./images/virus1.png",
                            alt: "Vitalien Transmission Realm",
                            className:
                              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                            referrerPolicy: "no-referrer",
                          }),
                          p.jsx("div", {
                            className:
                              "absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(0,209,255,0.15)_50%,rgba(0,209,255,0.15)_51%,transparent_52%)] bg-[length:100%_20px] pointer-events-none animate-pulse",
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className:
                          "p-5 text-left space-y-1.5 relative z-20 bg-[#020408]/90",
                        children: [
                          p.jsx("span", {
                            className: "font-mono text-[9px] text-gray-500",
                            children: "// CAPTURED BY SATELLITE ORBITER-7",
                          }),
                          p.jsx("h4", {
                            className:
                              "font-display font-medium text-base text-white",
                            children: "The Observer",
                          }),
                          p.jsx("p", {
                            className:
                              "text-xs text-gray-400 font-light leading-relaxed",
                            children:
                              "Acute fact-seeking behaviour. Subject scans the perimeter through FACTS-coated lenses while a cluster of pink-eyed carriers looks on. Cortical bloom: advanced.",
                          }),
                        ],
                      }),
                      
                    ],
                  }),
                  p.jsxs(Ot.div, {
                    initial: { y: 30, opacity: 0 },
                    whileInView: { y: 0, opacity: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className:
                      "group relative bg-[#020408]/90 border border-alien-lime/20 rounded-2xl overflow-hidden glow-border-green hover:border-alien-lime/40 transition-all duration-300",
                    children: [
                      p.jsx("div", {
                        className:
                          "absolute top-3 left-3 z-20 bg-[#020408]/80 backdrop-blur-md border border-alien-lime/30 px-2.5 py-1 rounded-lg font-mono text-[9px] tracking-wider text-alien-lime",
                        children: "TRANSMISSION // 0xEB99",
                      }),
                      p.jsxs("div", {
                        className:
                          "relative h-64 sm:h-80 md:h-[400px] w-full overflow-hidden",
                        children: [
                          p.jsx("div", {
                            className:
                              "absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020408] via-[#020408]/40 to-transparent z-10 h-1/3",
                          }),
                          p.jsx(Ot.img, {
                            src: "./images/virus2.png",
                            alt: "Vitalien Prophecy Ingress",
                            className:
                              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                            referrerPolicy: "no-referrer",
                          }),
                          p.jsx("div", {
                            className:
                              "absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(0,255,136,0.15)_50%,rgba(0,255,136,0.15)_51%,transparent_52%)] bg-[length:100%_20px] pointer-events-none animate-pulse",
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className:
                          "p-5 text-left space-y-1.5 relative z-20 bg-[#020408]/90",
                        children: [
                          p.jsx("span", {
                            className: "font-mono text-[9px] text-gray-500",
                            children:
                              "// CAPTURED BY HIGH-ALTITUDE NEURAL ARRAY",
                          }),
                          p.jsx("h4", {
                            className:
                              "font-display font-medium text-base text-white",
                            children: "The Carrier",
                          }),
                          p.jsx("p", {
                            className:
                              "text-xs text-gray-400 font-light leading-relaxed",
                            children:
                              "Observed in the wild after dark, actively posting transmission vectors to public surfaces. Highly contagious. Considered a primary spread node.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs(Ot.div, {
                    initial: { y: 30, opacity: 0 },
                    whileInView: { y: 0, opacity: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className:
                      "group relative bg-[#020408]/90 border border-alien-lime/20 rounded-2xl overflow-hidden glow-border-green hover:border-alien-lime/40 transition-all duration-300",
                    children: [
                      p.jsx("div", {
                        className:
                          "absolute top-3 left-3 z-20 bg-[#020408]/80 backdrop-blur-md border border-alien-lime/30 px-2.5 py-1 rounded-lg font-mono text-[9px] tracking-wider text-alien-lime",
                        children: "TRANSMISSION // 0xEB99",
                      }),
                      p.jsxs("div", {
                        className:
                          "relative h-64 sm:h-80 md:h-[400px] w-full overflow-hidden",
                        children: [
                          p.jsx("div", {
                            className:
                              "absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020408] via-[#020408]/40 to-transparent z-10 h-1/3",
                          }),
                          p.jsx(Ot.img, {
                            src: "./images/virus3.png",
                            alt: "Vitalien Prophecy Ingress",
                            className:
                              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                            referrerPolicy: "no-referrer",
                          }),
                          p.jsx("div", {
                            className:
                              "absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(0,255,136,0.15)_50%,rgba(0,255,136,0.15)_51%,transparent_52%)] bg-[length:100%_20px] pointer-events-none animate-pulse",
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className:
                          "p-5 text-left space-y-1.5 relative z-20 bg-[#020408]/90",
                        children: [
                          p.jsx("span", {
                            className: "font-mono text-[9px] text-gray-500",
                            children:
                              "// CAPTURED BY HIGH-ALTITUDE NEURAL ARRAY",
                          }),
                          p.jsx("h4", {
                            className:
                              "font-display font-medium text-base text-white",
                            children: "The Performer",
                          }),
                          p.jsx("p", {
                            className:
                              "text-xs text-gray-400 font-light leading-relaxed",
                            children:
                              "Compulsive ritual display. Subject surrounded by mandatory reading, a daily activism checklist, and a megaphone demanding compliance. Cortical bloom radiating; productivity: zero.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs(Ot.div, {
                    initial: { y: 30, opacity: 0 },
                    whileInView: { y: 0, opacity: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className:
                      "group relative bg-[#020408]/90 border border-alien-lime/20 rounded-2xl overflow-hidden glow-border-green hover:border-alien-lime/40 transition-all duration-300",
                    children: [
                      p.jsx("div", {
                        className:
                          "absolute top-3 left-3 z-20 bg-[#020408]/80 backdrop-blur-md border border-alien-lime/30 px-2.5 py-1 rounded-lg font-mono text-[9px] tracking-wider text-alien-lime",
                        children: "TRANSMISSION // 0xEB99",
                      }),
                      p.jsxs("div", {
                        className:
                          "relative h-64 sm:h-80 md:h-[400px] w-full overflow-hidden",
                        children: [
                          p.jsx("div", {
                            className:
                              "absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020408] via-[#020408]/40 to-transparent z-10 h-1/3",
                          }),
                          p.jsx(Ot.img, {
                            src: "./images/virus4.png",
                            alt: "Vitalien Prophecy Ingress",
                            className:
                              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                            referrerPolicy: "no-referrer",
                          }),
                          p.jsx("div", {
                            className:
                              "absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(0,255,136,0.15)_50%,rgba(0,255,136,0.15)_51%,transparent_52%)] bg-[length:100%_20px] pointer-events-none animate-pulse",
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className:
                          "p-5 text-left space-y-1.5 relative z-20 bg-[#020408]/90",
                        children: [
                          p.jsx("span", {
                            className: "font-mono text-[9px] text-gray-500",
                            children:
                              "// CAPTURED BY HIGH-ALTITUDE NEURAL ARRAY",
                          }),
                          p.jsx("h4", {
                            className:
                              "font-display font-medium text-base text-white",
                            children: "The Theorist",
                          }),
                          p.jsx("p", {
                            className:
                              "text-xs text-gray-400 font-light leading-relaxed",
                            children:
                              "Late-stage habitat collapse. Specimen subsists on ramen amid manifestos and slogans while declaring all property theft. Self-described world's okayest anarchist.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function hE() {
  const [i, a] = k.useState(null),
    r = (s) => {
      switch (s) {
        case "green":
          return {
            text: "text-alien-lime",
            border: "border-alien-lime/20 hover:border-alien-lime/40",
            bgGlow: "bg-alien-lime/10",
            shadowGlow: "shadow-[0_0_15px_rgba(0,255,102,0.15)]",
            icon: p.jsx(jA, { className: "w-5 h-5 text-alien-lime" }),
          };
        case "teal":
          return {
            text: "text-matrix-teal",
            border: "border-matrix-teal/20 hover:border-matrix-teal/40",
            bgGlow: "bg-matrix-teal/10",
            shadowGlow: "shadow-[0_0_15px_rgba(0,209,255,0.15)]",
            icon: p.jsx(ZA, { className: "w-5 h-5 text-matrix-teal" }),
          };
        case "purple":
          return {
            text: "text-[#bc13fe]",
            border: "border-[#bc13fe]/20 hover:border-[#bc13fe]/40",
            bgGlow: "bg-[#bc13fe]/10",
            shadowGlow: "shadow-[0_0_15px_rgba(188,19,254,0.15)]",
            icon: p.jsx(VA, { className: "w-5 h-5 text-[#bc13fe]" }),
          };
        default:
          return {
            text: "text-white",
            border: "border-white/10",
            bgGlow: "bg-white/5",
            shadowGlow: "",
            icon: p.jsx(BA, { className: "w-5 h-5 text-white" }),
          };
      }
    };
  return p.jsxs("section", {
    id: "tokenomics",
    className: "relative py-24 bg-[#030712] overflow-hidden",
    children: [
      p.jsx("div", {
        className:
          "absolute inset-0 cyber-grid-fine opacity-20 pointer-events-none",
      }),
      p.jsx("div", {
        className:
          "absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-alien-lime/5 rounded-full blur-[160px] pointer-events-none",
      }),
      p.jsx("div", {
        className:
          "absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none",
      }),
      p.jsxs("div", {
        className: "max-w-5xl mx-auto px-6 relative z-10",
        children: [
          p.jsxs("div", {
            className: "flex flex-col items-center text-center space-y-4 mb-16",
            children: [
              p.jsxs(Ot.div, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0, margin: "-100px" },
                transition: { duration: 0.5 },
                className:
                  "flex items-center space-x-2 bg-slate-900 border border-alien-lime/30 px-3 py-1 rounded-full text-xs font-mono text-white/80",
                children: [
                  p.jsx(bA, {
                    className: "w-3.5 h-3.5 text-alien-lime shadow-lg",
                  }),
                  p.jsx("span", { children: "METRIC ALLOCATION DIAGRAM" }),
                ],
              }),
              p.jsxs("h2", {
                className:
                  "font-display font-bold text-3xl sm:text-4xl text-white tracking-tight",
                children: [
                 
                  "Tokenomics",
                ],
              }),
              p.jsx("div", {
                className:
                  "h-1 w-20 bg-matrix-teal rounded-full shadow-[0_0_10px_rgba(0,209,255,0.5)]",
              }),
            ],
          }),
          p.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16",
            children: [
              p.jsxs(Ot.div, {
                initial: { scale: 0.9, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className:
                  "md:col-span-5 bg-slate-950/80 border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center relative min-h-[380px]",
                children: [
                  p.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-b from-[#030712] to-slate-950 rounded-2xl -z-10",
                  }),
                  p.jsxs("div", {
                    className:
                      "relative w-48 h-48 flex items-center justify-center",
                    children: [
                      p.jsxs("svg", {
                        className: "w-full h-full transform -rotate-90",
                        viewBox: "0 0 100 100",
                        children: [
                          p.jsx("circle", {
                            cx: "50",
                            cy: "50",
                            r: "40",
                            fill: "transparent",
                            stroke: "#111827",
                            strokeWidth: "8",
                          }),
                          p.jsx("circle", {
                            cx: "50",
                            cy: "50",
                            r: "40",
                            fill: "transparent",
                            stroke: "url(#alienGrad)",
                            strokeWidth: "8",
                            strokeDasharray: "251.2",
                            strokeDashoffset: "0",
                            strokeLinecap: "round",
                            className: "transition-all duration-1000",
                          }),
                          p.jsx("defs", {
                            children: p.jsxs("linearGradient", {
                              id: "alienGrad",
                              x1: "0%",
                              y1: "0%",
                              x2: "100%",
                              y2: "100%",
                              children: [
                                p.jsx("stop", {
                                  offset: "0%",
                                  stopColor: "#00FF88",
                                }),
                                p.jsx("stop", {
                                  offset: "100%",
                                  stopColor: "#00D1FF",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className:
                          "absolute flex flex-col items-center text-center",
                        children: [
                          p.jsx("span", {
                            className:
                              "font-mono text-3xl font-extrabold text-white glow-text-green",
                            children: "100%",
                          }),
                          p.jsx("span", {
                            className:
                              "font-mono text-[9px] text-matrix-teal uppercase tracking-widest mt-1",
                            children: "Locked LP",
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "text-center mt-6 max-w-xs",
                    children: [
                      p.jsx("h3", {
                        className:
                          "font-display font-medium text-white text-base",
                        children: "Planetary Fair-Launch Structure",
                      }),
                      p.jsx("p", {
                        className: "text-xs text-gray-400 mt-2 leading-relaxed",
                        children:
                          "Tokens are completely distributed. There is no corporate developer treasury, team wallets, or hidden lockups.",
                      }),
                      p.jsxs("div", {
                        className:
                          "flex items-center justify-center space-x-1.5 mt-4 bg-alien-lime/10 border border-alien-lime/20 py-1.5 px-3 rounded-lg w-fit mx-auto",
                        children: [
                          p.jsx(iE, {
                            className: "w-3.5 h-3.5 text-alien-lime",
                          }),
                          p.jsx("span", {
                            className:
                              "font-mono text-[9px] text-alien-lime font-bold uppercase tracking-wider",
                            children: "Verified Clean Ether contracts",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              p.jsx("div", {
                className:
                  "md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: uE.map((s, c) => {
                  const d = r(s.glowColor),
                    f = i === c;
                  return p.jsxs(
                    Ot.div,
                    {
                      onMouseEnter: () => a(c),
                      onMouseLeave: () => a(null),
                      whileHover: { y: -5 },
                      className: `p-6 bg-slate-950/90 border rounded-xl transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                        d.border
                      } ${f ? d.shadowGlow : ""}`,
                      id: `tokenomics-metric-${c}`,
                      children: [
                        p.jsx("div", {
                          className: `absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-${
                            s.glowColor === "green"
                              ? "alien-lime"
                              : s.glowColor === "teal"
                              ? "matrix-teal"
                              : "[#bc13fe]"
                          } to-transparent opacity-40 group-hover:opacity-100 transition-opacity`,
                        }),
                        p.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            p.jsx("div", {
                              className: `p-2 rounded-lg ${d.bgGlow}`,
                              children: d.icon,
                            }),
                            p.jsxs("span", {
                              className:
                                "font-mono text-[9px] text-gray-500 tracking-widest uppercase",
                              children: ["SEC-0", c + 1],
                            }),
                          ],
                        }),
                        p.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            p.jsxs("span", {
                              className:
                                "font-mono text-xs text-gray-400 block",
                              children: ["// ", s.label],
                            }),
                            p.jsx("span", {
                              className: `font-display font-bold text-lg sm:text-xl ${d.text} tracking-tight`,
                              children: s.value,
                            }),
                          ],
                        }),
                        p.jsx("p", {
                          className:
                            "text-xs text-gray-300 font-light mt-3 leading-relaxed",
                          children: s.description,
                        }),
                      ],
                    },
                    c
                  );
                }),
              }),
            ],
          }),
          
        ],
      }),
    ],
  });
}
function mE() {
  return p.jsxs("section", {
    id: "chart",
    className:
      "relative py-24 bg-[#030712] overflow-hidden border-t border-white/5",
    children: [
      p.jsx("div", {
        className:
          "absolute inset-0 cyber-grid-fine opacity-25 pointer-events-none",
      }),
      p.jsx("div", {
        className:
          "absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-matrix-teal/5 rounded-full blur-[160px] pointer-events-none",
      }),
      p.jsx("div", {
        className:
          "absolute bottom-10 right-10 w-[300px] h-[300px] bg-alien-lime/5 rounded-full blur-[140px] pointer-events-none",
      }),
      p.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10",
        children: [
          p.jsxs("div", {
            className: "flex flex-col items-center text-center space-y-4 mb-14",
            children: [
              p.jsxs(Ot.div, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.5 },
                className:
                  "flex items-center space-x-2 bg-slate-900 border border-matrix-teal/30 px-3 py-1 rounded-full text-xs font-mono text-white/80",
                children: [
                  p.jsx(mA, {
                    className: "w-3.5 h-3.5 text-matrix-teal animate-pulse",
                  }),
                  p.jsx("span", { children: "REAL-TIME COBALT TELEMETRY" }),
                ],
              }),
              p.jsxs("h2", {
                className:
                  "font-display font-bold text-3xl sm:text-4xl text-white tracking-tight",
                children: [
                  p.jsx("span", {
                    className: "text-matrix-teal glow-text-teal",
                    children: "Price Chart",
                  }),
                  " & Pool",
                ],
              }),
              p.jsx("div", {
                className:
                  "h-1 w-20 bg-matrix-teal rounded-full shadow-[0_0_10px_rgba(0,209,255,0.5)]",
              }),

            ],
          }),
          p.jsxs(Ot.div, {
            initial: { y: 30, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.6 },
            className:
              "group relative bg-[#020408]/95 border border-matrix-teal/20 rounded-2xl overflow-hidden glow-border-teal hover:border-matrix-teal/40 transition-all duration-300 p-2.5 sm:p-5 shadow-[0_4px_30px_rgba(0,209,255,0.1)]",
            id: "dexscreener-widget-panel",
            children: [
              p.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-3.5 mb-4 text-xs font-mono text-gray-400 gap-2 px-1",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      p.jsx("span", {
                        className:
                          "h-2 w-2 rounded-full bg-matrix-teal animate-ping",
                      }),
                      p.jsx("span", {
                        className: "tracking-widest uppercase text-matrix-teal",
                        children: "STREAM_STATE // TRANSMISSION REAL-TIME",
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      p.jsxs("span", {
                        className:
                          "flex items-center space-x-1.5 text-gray-500",
                        children: [
                          p.jsx(rE, {
                            className: "w-3.5 h-3.5 text-alien-lime",
                          }),
                          p.jsx("span", { children: "ETH_PAIR_POOL" }),
                        ],
                      }),
                      p.jsxs("a", {
                        href: "https://dexscreener.com/ethereum/0xComingSoon",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center space-x-1 hover:text-matrix-teal transition-colors duration-200 text-white/90",
                        children: [
                          p.jsx("span", { children: "DEXSCREENER ENGINE" }),
                          p.jsx(Kc, { className: "w-3 h-3" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "relative w-full rounded-xl overflow-hidden bg-black/40 border border-white/5",
                children: [
                  p.jsx("style", {
                    dangerouslySetInnerHTML: {
                      __html: `
              #dexscreener-embed {
                position: relative;
                width: 100%;
                padding-bottom: 125%; /* Responsive default - mobile friendly taller profile */
              }
              @media(min-width: 640px) {
                #dexscreener-embed {
                  padding-bottom: 75%; /* Tablet mid-height profile */
                }
              }
              @media(min-width: 1024px) {
                #dexscreener-embed {
                  padding-bottom: 60%; /* Desktop optimal landscape view */
                }
              }
              @media(min-width: 1400px) {
                #dexscreener-embed {
                  padding-bottom: 50%; /* Ultrawide layout */
                }
              }
              #dexscreener-embed iframe {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                border: 0;
              }
            `,
                    },
                  }),
                  p.jsx("div", {
                    id: "dexscreener-embed",
                    children: p.jsx("iframe", {
                      src: "https://dexscreener.com/ethereum/0xComingSoon?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15",
                      title: "DexScreener Live Index Chart",
                      referrerPolicy: "no-referrer",
                    }),
                  }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "mt-4 flex items-center justify-between text-[10px] font-mono text-gray-500 px-1 pt-2 border-t border-white/5",
                children: [
                  p.jsx("span", { children: "COSMIC SHIELDING STATE: ACTIVE" }),
                  p.jsx("span", {
                    children: "SECURE_IFRAME_CONNECTION // SEC_G30",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function pE() {
  const [i, a] = k.useState(0),
    [r, s] = k.useState([]),
    [c, d] = k.useState(!1),
    f = ir[i],
    m = () => {
      c ||
        (d(!0),
        s([
          "⚡ Initializing Interstellar Bridge...",
          "🔑 Authorizing Gateway Protocols...",
        ]),
        setTimeout(() => {
          s((g) => [...g, `🚀 Running command: ${f.command}`]);
        }, 6e4 / 1e3),
        setTimeout(() => {
          s((g) => [
            ...g,
            `🟢 Output: ${f.output}`,
            "✅ Operation status: SECURE",
          ]),
            d(!1);
        }, 12e4 / 1e3));
    };
  return p.jsxs("section", {
    id: "how-to-buy",
    className:
      "relative py-24 bg-gradient-to-b from-[#030712] via-[#050813] to-[#030712] overflow-hidden",
    children: [
      p.jsx("div", {
        className:
          "absolute top-1/4 left-10 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none",
      }),
      p.jsx("div", {
        className:
          "absolute bottom-1/4 right-10 w-96 h-96 bg-[#bc13fe]/5 rounded-full blur-[140px] pointer-events-none",
      }),
      p.jsx("div", {
        className: "absolute inset-0 cyber-grid opacity-10 pointer-events-none",
      }),
      p.jsxs("div", {
        className: "max-w-5xl mx-auto px-6 relative z-10",
        children: [
          p.jsxs("div", {
            className: "flex flex-col items-center text-center space-y-4 mb-16",
            children: [
              p.jsxs(Ot.div, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0, margin: "-100px" },
                transition: { duration: 0.5 },
                className:
                  "flex items-center space-x-2 bg-slate-900 border border-alien-lime/30 px-3 py-1 rounded-full text-xs font-mono text-white/80",
                children: [
                  p.jsx(Mf, { className: "w-3.5 h-3.5 text-alien-lime" }),
                  p.jsx("span", { children: "INTERSTELLAR USER MANUAL" }),
                ],
              }),
              p.jsxs("h2", {
                className:
                  "font-display font-bold text-3xl sm:text-4xl text-white tracking-tight animate-pulse duration-[6000ms]",
                children: [
                  p.jsx("span", {
                    className: "text-alien-lime glow-text-green",
                    children: "How to Buy",
                  }),
                ],
              }),
              p.jsx("div", {
                className:
                  "h-1 w-20 bg-alien-lime rounded-full shadow-[0_0_10px_rgba(0,255,102,0.5)]",
              }),
            ],
          }),
          p.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
            children: [
              p.jsx("div", {
                className: "lg:col-span-5 flex flex-col space-y-3.5",
                children: ir.map((g, y) => {
                  const x = y === i;
                  return p.jsxs(
                    Ot.div,
                    {
                      onClick: () => {
                        a(y), s([]);
                      },
                      whileHover: { scale: 1.01 },
                      className: `p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                        x
                          ? "bg-slate-950 border-alien-lime/40 shadow-[0_0_15px_rgba(0,255,102,0.15)]"
                          : "bg-slate-950/40 border-white/5 hover:border-white/10 hover:bg-slate-950/60"
                      }`,
                      id: `buy-step-card-${y}`,
                      children: [
                        p.jsxs("div", {
                          className: `h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 transition-all ${
                            x
                              ? "bg-alien-lime text-obsidian shadow-[0_0_10px_#00ff66]"
                              : "bg-slate-900 border border-white/10 text-gray-400"
                          }`,
                          children: ["0", y + 1],
                        }),
                        p.jsxs("div", {
                          className: "space-y-1 text-left",
                          children: [
                            p.jsx("h3", {
                              className: `font-display font-medium text-sm sm:text-base transition-colors ${
                                x ? "text-alien-lime" : "text-white"
                              }`,
                              children: g.title,
                            }),
                            p.jsx("p", {
                              className:
                                "text-xs text-gray-400 font-light leading-relaxed",
                              children: g.description,
                            }),
                          ],
                        }),
                      ],
                    },
                    y
                  );
                }),
              }),
              p.jsxs(Ot.div, {
                initial: { scale: 0.95, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className:
                  "lg:col-span-7 bg-[#04060d]/95 border border-alien-lime/20 rounded-2xl glow-border-green overflow-hidden relative shadow-2xl",
                children: [
                  p.jsxs("div", {
                    className:
                      "flex items-center justify-between border-b border-alien-lime/10 px-4 py-3 bg-slate-950",
                    children: [
                      p.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          p.jsx("div", {
                            className: "h-2.5 w-2.5 rounded-full bg-red-500/80",
                          }),
                          p.jsx("div", {
                            className:
                              "h-2.5 w-2.5 rounded-full bg-yellow-500/80",
                          }),
                          p.jsx("div", {
                            className:
                              "h-2.5 w-2.5 rounded-full bg-green-500/80",
                          }),
                          p.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#00D1FF] uppercase ml-2 select-none",
                            children:
                              "WOKE MAIN FRAME CONSOLE // PORTAL-v2022",
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className:
                          "flex items-center space-x-1.5 font-mono text-[8px] text-gray-500",
                        children: [
                          p.jsx(qA, { className: "w-3 h-3 text-[#00D1FF]" }),
                          p.jsx("span", { children: "SECURE_LINK" }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className:
                      "p-6 font-mono text-xs text-gray-300 min-h-[300px] flex flex-col justify-between space-y-6 bg-slate-950/40",
                    children: [
                      p.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          p.jsxs("div", {
                            className: "space-y-1.5",
                            children: [
                              p.jsxs("div", {
                                className:
                                  "flex items-center space-x-1.5 text-gray-400 select-none",
                                children: [
                                  p.jsx("span", {
                                    className: "text-[#00D1FF]",
                                    children: ">>",
                                  }),
                                  p.jsx("span", {
                                    children: "COSMIC_SHELL_ESTABLISHED",
                                  }),
                                ],
                              }),
                              p.jsx("div", {
                                className: "text-gray-500",
                                children:
                                  "Last login: Fri May 22 2026 on satellite-node-14",
                              }),
                            ],
                          }),
                          p.jsxs("div", {
                            className:
                              "border border-white/5 bg-slate-950/80 p-3 sm:p-4 rounded-lg space-y-2",
                            children: [
                              p.jsxs("div", {
                                className:
                                  "text-white font-bold text-xs uppercase flex items-center space-x-1.5",
                                children: [
                                  p.jsx(rv, {
                                    className:
                                      "w-3.5 h-3.5 text-alien-lime inline",
                                  }),
                                  p.jsxs("span", {
                                    children: [
                                      "Active Directive // Step 0",
                                      i + 1,
                                    ],
                                  }),
                                ],
                              }),
                              p.jsx("p", {
                                className:
                                  "text-[11px] text-gray-400 leading-relaxed font-sans font-light",
                                children: f.description,
                              }),
                            ],
                          }),
                          p.jsxs("div", {
                            className: "space-y-1 text-left",
                            children: [
                              p.jsxs("div", {
                                className:
                                  "flex items-center space-x-2 text-alien-lime font-bold",
                                children: [
                                  p.jsx("span", { children: "$" }),
                                  p.jsx("span", { children: f.command }),
                                  p.jsx("span", {
                                    className:
                                      "h-4 w-1.5 bg-alien-lime animate-[pulse_800ms_infinite] inline-block",
                                  }),
                                ],
                              }),
                              p.jsx(Gg, {
                                children:
                                  r.length > 0
                                    ? p.jsx(Ot.div, {
                                        initial: { opacity: 0 },
                                        animate: { opacity: 1 },
                                        className:
                                          "space-y-1 pt-2 border-t border-white/5",
                                        children: r.map((g, y) =>
                                          p.jsx(
                                            "div",
                                            {
                                              className: `text-[11px] ${
                                                g.startsWith("⚡") ||
                                                g.startsWith("🔑")
                                                  ? "text-[#00D1FF]"
                                                  : g.startsWith("🟢")
                                                  ? "text-green-400 font-bold"
                                                  : "text-gray-400"
                                              }`,
                                              children: g,
                                            },
                                            y
                                          )
                                        ),
                                      })
                                    : p.jsx("div", {
                                        className:
                                          "text-[11px] text-gray-500 italic pt-1",
                                        children:
                                          'System idle. Click "RUN SWAP BLUEPRINT SIMULATOR" to transmute...',
                                      }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/5 pt-4",
                        children: [
                          p.jsx("button", {
                            onClick: m,
                            disabled: c,
                            className: `flex items-center justify-center space-x-2 font-mono font-bold text-xs px-4 py-2.5 rounded-lg w-full sm:w-auto cursor-pointer transition-all ${
                              c
                                ? "bg-slate-900 border border-white/10 text-gray-500"
                                : "bg-alien-lime text-obsidian shadow-[0_0_10px_rgba(0,255,102,0.3)] hover:scale-[1.02]"
                            }`,
                            id: "execute-simulator-btn",
                            children: c
                              ? p.jsxs(p.Fragment, {
                                  children: [
                                    p.jsx(IA, {
                                      className: "w-3.5 h-3.5 animate-spin",
                                    }),
                                    p.jsx("span", {
                                      children: "LOG ESTIMATING TRANSMUTE...",
                                    }),
                                  ],
                                })
                              : p.jsxs(p.Fragment, {
                                  children: [
                                    p.jsx(FA, {
                                      className: "w-3.5 h-3.5 fill-current",
                                    }),
                                    p.jsx("span", {
                                      children: "RUN SWAP BLUEPRINT SIMULATOR",
                                    }),
                                  ],
                                }),
                          }),
                          p.jsxs("div", {
                            className:
                              "flex justify-center space-x-1.5 shrink-0",
                            children: [
                              p.jsx("button", {
                                onClick: () => {
                                  a((g) => (g > 0 ? g - 1 : g)), s([]);
                                },
                                disabled: i === 0,
                                className:
                                  "font-mono text-[10px] bg-slate-900 hover:bg-slate-800 text-gray-300 disabled:opacity-40 disabled:hover:bg-slate-900 p-2 rounded border border-white/5 px-3 cursor-pointer",
                                children: "PREV SEC",
                              }),
                              p.jsxs("button", {
                                onClick: () => {
                                  a((g) => (g < ir.length - 1 ? g + 1 : g)),
                                    s([]);
                                },
                                disabled: i === ir.length - 1,
                                className:
                                  "flex items-center space-x-1 font-mono text-[10px] bg-slate-900 hover:bg-slate-800 text-gray-200 disabled:opacity-40 disabled:hover:bg-slate-900 p-2 rounded border border-white/5 px-3 cursor-pointer",
                                children: [
                                  p.jsx("span", { children: "NEXT SEC" }),
                                  p.jsx(EA, { className: "w-3 h-3" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function yE() {
  return p.jsxs("footer", {
    className:
      "relative bg-[#020408] border-t border-white/5 py-16 overflow-hidden",
    children: [
      p.jsx("div", {
        className:
          "absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-alien-lime/5 rounded-full blur-[140px] pointer-events-none",
      }),
      p.jsxs("div", {
        className: "max-w-5xl mx-auto px-6 relative z-10",
        children: [
          p.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12",
            children: [
              p.jsxs("div", {
                className: "md:col-span-5 flex flex-col space-y-4",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center space-x-2.5",
                    children: [
                      p.jsx("div", {
                        className:
                          "w-8 h-8 rounded-full bg-slate-900 border border-alien-lime/40 overflow-hidden flex items-center justify-center shadow-[0_0_8px_rgba(0,255,136,0.2)]",
                        children: p.jsx("img", {
                          src: "./images/virus.png",
                          alt: "VITALIEN Logo",
                          className: "w-7 h-7 object-contain",
                          referrerPolicy: "no-referrer",
                        }),
                      }),
                      p.jsx("span", {
                        className:
                          "font-display font-extrabold text-lg tracking-wider text-white",
                        children: "WOKE",
                      }),
                    ],
                  }),
                  p.jsx("p", {
                    className:
                      "text-xs text-gray-400 font-light leading-relaxed max-w-sm",
                    children:
                      "The deadliest virus in recorded history. Spreads through eye contact, group chats, and a single unguarded moment of empathy. No vaccine. No cure. Fully on-chain.",
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "md:col-span-4 flex flex-col space-y-3",
                children: [
                  p.jsx("span", {
                    className:
                      "font-mono text-[10px] text-gray-500 tracking-wider",
                    children: "INTERSTELLAR CONTRACT REFERENCE",
                  }),
                  p.jsxs("div", {
                    className:
                      "flex items-center space-x-2 bg-slate-950 p-2.5 px-3.5 rounded-xl border border-white/5 w-fit",
                    children: [
                      p.jsx(Mf, {
                        className: "w-3.5 h-3.5 text-[#00D1FF] shrink-0",
                      }),
                      p.jsx("span", {
                        className:
                          "font-mono text-[10px] text-alien-lime overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px] select-all",
                        children: Zc.split(" ")[0],
                      }),
                    ],
                  }),
                  p.jsx("p", {
                    className: "text-[10px] text-gray-500 italic max-w-xs",
                    children:
                      "Directly verify the token metrics via Etherscan using the verified address.",
                  }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "md:col-span-3 flex flex-col items-start md:items-end space-y-4",
                children: [
                  p.jsx("span", {
                    className:
                      "font-mono text-[10px] text-gray-500 tracking-wider",
                    children: "CONNECT SATELLITES",
                  }),
                  p.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      p.jsx("a", {
                        href: pa.telegram,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "p-3 bg-slate-950 hover:bg-slate-900 border border-white/5 hover:border-alien-lime/40 text-alien-lime rounded-xl transition-all duration-300 shadow-md flex items-center justify-center hover:scale-105 group",
                        title: "Telegram Link",
                        children: p.jsx("svg", {
                          className: "w-5 h-5 fill-current",
                          viewBox: "0 0 24 24",
                          children: p.jsx("path", {
                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15.42-3.15 13.06-3.3 13.68-.14.56-.37.73-.77.73-.39 0-.69-.21-.99-.44l-2.73-2.14-1.62 1.56-.09.07c-.12.09-.27.14-.42.14-.3 0-.54-.24-.54-.54V16.3l6.54-5.91c.14-.13-.03-.21-.21-.09l-8.09 5.09-2.92-.91c-.49-.15-.55-.49-.12-.66L15.35 8.35c.57-.21.99.1.65.45c.23-.23.44.23.64.45h-.2z",
                          }),
                        }),
                      }),
                      p.jsx("a", {
                        href: pa.x,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "p-3 bg-slate-950 hover:bg-slate-900 border border-white/5 hover:border-[#00D1FF]/40 text-[#00D1FF] rounded-xl transition-all duration-300 shadow-md flex items-center justify-center hover:scale-105 group",
                        title: "X Link",
                        children: p.jsx("svg", {
                          className: "w-4.5 h-4.5 fill-current",
                          viewBox: "0 0 24 24",
                          children: p.jsx("path", {
                            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                          }),
                        }),
                      }),
                      p.jsx("button", {
                        onClick: () =>
                          window.scrollTo({ top: 0, behavior: "smooth" }),
                        className:
                          "p-3 bg-slate-950 hover:bg-slate-900 border border-white/5 hover:border-gray-500 text-gray-400 hover:text-white rounded-xl transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer",
                        title: "Shorthand Scroll to Top",
                        children: p.jsx(vA, { className: "w-5 h-5" }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          p.jsxs("div", {
            className:
              "border-t border-white/5 pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 text-[10px] text-gray-500 font-mono tracking-wider font-light",
            children: [
             
              p.jsxs("div", {
                className:
                  "md:col-span-4 flex flex-col md:items-end justify-between space-y-2 text-left md:text-right",
                children: [
                  
                  p.jsxs("span", {
                    children: [
                      "© 2022-",
                      new Date().getFullYear(),
                      " Woke Mind Virus.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function gE() {
  return p.jsxs("div", {
    className:
      "min-h-screen bg-[#030712] text-white flex flex-col font-sans antialiased selection:bg-alien-lime selection:text-obsidian relative",
    children: [
      p.jsx(cE, {}),
      p.jsxs("main", {
        className: "flex-grow",
        children: [
          p.jsx(fE, {}),
          p.jsx(dE, {}),
          p.jsx(hE, {}),
          p.jsx(mE, {}),
          p.jsx(pE, {}),
        ],
      }),
      p.jsx(yE, {}),
    ],
  });
}
Yx.createRoot(document.getElementById("root")).render(
  p.jsx(k.StrictMode, { children: p.jsx(gE, {}) })
);
