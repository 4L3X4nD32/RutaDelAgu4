function Pp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const a = Object.getOwnPropertyDescriptor(r, i);
                    a && Object.defineProperty(e, i, a.get ? a : {
                        enumerable: !0,
                        get: ()=>r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const a of i)
            if (a.type === "childList")
                for (const l of a.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const a = {};
        return i.integrity && (a.integrity = i.integrity),
        i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const a = n(i);
        fetch(i.href, a)
    }
}
)();
function xc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Sc = {
    exports: {}
}
  , oa = {}
  , Ec = {
    exports: {}
}
  , M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr = Symbol.for("react.element")
  , _p = Symbol.for("react.portal")
  , Np = Symbol.for("react.fragment")
  , Op = Symbol.for("react.strict_mode")
  , Tp = Symbol.for("react.profiler")
  , jp = Symbol.for("react.provider")
  , Ip = Symbol.for("react.context")
  , zp = Symbol.for("react.forward_ref")
  , Ap = Symbol.for("react.suspense")
  , Lp = Symbol.for("react.memo")
  , Rp = Symbol.for("react.lazy")
  , Is = Symbol.iterator;
function Mp(e) {
    return e === null || typeof e != "object" ? null : (e = Is && e[Is] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Cc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Pc = Object.assign
  , _c = {};
function Fn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = _c,
    this.updater = n || Cc
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Fn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Nc() {}
Nc.prototype = Fn.prototype;
function So(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = _c,
    this.updater = n || Cc
}
var Eo = So.prototype = new Nc;
Eo.constructor = So;
Pc(Eo, Fn.prototype);
Eo.isPureReactComponent = !0;
var zs = Array.isArray
  , Oc = Object.prototype.hasOwnProperty
  , Co = {
    current: null
}
  , Tc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function jc(e, t, n) {
    var r, i = {}, a = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (a = "" + t.key),
        t)
            Oc.call(t, r) && !Tc.hasOwnProperty(r) && (i[r] = t[r]);
    var o = arguments.length - 2;
    if (o === 1)
        i.children = n;
    else if (1 < o) {
        for (var s = Array(o), u = 0; u < o; u++)
            s[u] = arguments[u + 2];
        i.children = s
    }
    if (e && e.defaultProps)
        for (r in o = e.defaultProps,
        o)
            i[r] === void 0 && (i[r] = o[r]);
    return {
        $$typeof: Rr,
        type: e,
        key: a,
        ref: l,
        props: i,
        _owner: Co.current
    }
}
function Fp(e, t) {
    return {
        $$typeof: Rr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Po(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Rr
}
function bp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var As = /\/+/g;
function La(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? bp("" + e.key) : t.toString(36)
}
function gi(e, t, n, r, i) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (a) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Rr:
            case _p:
                l = !0
            }
        }
    if (l)
        return l = e,
        i = i(l),
        e = r === "" ? "." + La(l, 0) : r,
        zs(i) ? (n = "",
        e != null && (n = e.replace(As, "$&/") + "/"),
        gi(i, t, n, "", function(u) {
            return u
        })) : i != null && (Po(i) && (i = Fp(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(As, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    zs(e))
        for (var o = 0; o < e.length; o++) {
            a = e[o];
            var s = r + La(a, o);
            l += gi(a, t, n, s, i)
        }
    else if (s = Mp(e),
    typeof s == "function")
        for (e = s.call(e),
        o = 0; !(a = e.next()).done; )
            a = a.value,
            s = r + La(a, o++),
            l += gi(a, t, n, s, i);
    else if (a === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function Vr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return gi(e, r, "", "", function(a) {
        return t.call(n, a, i++)
    }),
    r
}
function Dp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ve = {
    current: null
}
  , yi = {
    transition: null
}
  , Up = {
    ReactCurrentDispatcher: ve,
    ReactCurrentBatchConfig: yi,
    ReactCurrentOwner: Co
};
M.Children = {
    map: Vr,
    forEach: function(e, t, n) {
        Vr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Vr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Vr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Po(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
M.Component = Fn;
M.Fragment = Np;
M.Profiler = Tp;
M.PureComponent = So;
M.StrictMode = Op;
M.Suspense = Ap;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Up;
M.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Pc({}, e.props)
      , i = e.key
      , a = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref,
        l = Co.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var o = e.type.defaultProps;
        for (s in t)
            Oc.call(t, s) && !Tc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && o !== void 0 ? o[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        o = Array(s);
        for (var u = 0; u < s; u++)
            o[u] = arguments[u + 2];
        r.children = o
    }
    return {
        $$typeof: Rr,
        type: e.type,
        key: i,
        ref: a,
        props: r,
        _owner: l
    }
}
;
M.createContext = function(e) {
    return e = {
        $$typeof: Ip,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: jp,
        _context: e
    },
    e.Consumer = e
}
;
M.createElement = jc;
M.createFactory = function(e) {
    var t = jc.bind(null, e);
    return t.type = e,
    t
}
;
M.createRef = function() {
    return {
        current: null
    }
}
;
M.forwardRef = function(e) {
    return {
        $$typeof: zp,
        render: e
    }
}
;
M.isValidElement = Po;
M.lazy = function(e) {
    return {
        $$typeof: Rp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Dp
    }
}
;
M.memo = function(e, t) {
    return {
        $$typeof: Lp,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
M.startTransition = function(e) {
    var t = yi.transition;
    yi.transition = {};
    try {
        e()
    } finally {
        yi.transition = t
    }
}
;
M.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
M.useCallback = function(e, t) {
    return ve.current.useCallback(e, t)
}
;
M.useContext = function(e) {
    return ve.current.useContext(e)
}
;
M.useDebugValue = function() {}
;
M.useDeferredValue = function(e) {
    return ve.current.useDeferredValue(e)
}
;
M.useEffect = function(e, t) {
    return ve.current.useEffect(e, t)
}
;
M.useId = function() {
    return ve.current.useId()
}
;
M.useImperativeHandle = function(e, t, n) {
    return ve.current.useImperativeHandle(e, t, n)
}
;
M.useInsertionEffect = function(e, t) {
    return ve.current.useInsertionEffect(e, t)
}
;
M.useLayoutEffect = function(e, t) {
    return ve.current.useLayoutEffect(e, t)
}
;
M.useMemo = function(e, t) {
    return ve.current.useMemo(e, t)
}
;
M.useReducer = function(e, t, n) {
    return ve.current.useReducer(e, t, n)
}
;
M.useRef = function(e) {
    return ve.current.useRef(e)
}
;
M.useState = function(e) {
    return ve.current.useState(e)
}
;
M.useSyncExternalStore = function(e, t, n) {
    return ve.current.useSyncExternalStore(e, t, n)
}
;
M.useTransition = function() {
    return ve.current.useTransition()
}
;
M.version = "18.2.0";
Ec.exports = M;
var I = Ec.exports;
const sa = xc(I)
  , $p = Pp({
    __proto__: null,
    default: sa
}, [I]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bp = I
  , Wp = Symbol.for("react.element")
  , Hp = Symbol.for("react.fragment")
  , Vp = Object.prototype.hasOwnProperty
  , Yp = Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Qp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ic(e, t, n) {
    var r, i = {}, a = null, l = null;
    n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        Vp.call(t, r) && !Qp.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Wp,
        type: e,
        key: a,
        ref: l,
        props: i,
        _owner: Yp.current
    }
}
oa.Fragment = Hp;
oa.jsx = Ic;
oa.jsxs = Ic;
Sc.exports = oa;
var h = Sc.exports
  , fl = {}
  , zc = {
    exports: {}
}
  , Ne = {}
  , Ac = {
    exports: {}
}
  , Lc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(O, z) {
        var A = O.length;
        O.push(z);
        e: for (; 0 < A; ) {
            var Z = A - 1 >>> 1
              , re = O[Z];
            if (0 < i(re, z))
                O[Z] = z,
                O[A] = re,
                A = Z;
            else
                break e
        }
    }
    function n(O) {
        return O.length === 0 ? null : O[0]
    }
    function r(O) {
        if (O.length === 0)
            return null;
        var z = O[0]
          , A = O.pop();
        if (A !== z) {
            O[0] = A;
            e: for (var Z = 0, re = O.length, Wr = re >>> 1; Z < Wr; ) {
                var bt = 2 * (Z + 1) - 1
                  , Aa = O[bt]
                  , Dt = bt + 1
                  , Hr = O[Dt];
                if (0 > i(Aa, A))
                    Dt < re && 0 > i(Hr, Aa) ? (O[Z] = Hr,
                    O[Dt] = A,
                    Z = Dt) : (O[Z] = Aa,
                    O[bt] = A,
                    Z = bt);
                else if (Dt < re && 0 > i(Hr, A))
                    O[Z] = Hr,
                    O[Dt] = A,
                    Z = Dt;
                else
                    break e
            }
        }
        return z
    }
    function i(O, z) {
        var A = O.sortIndex - z.sortIndex;
        return A !== 0 ? A : O.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var l = Date
          , o = l.now();
        e.unstable_now = function() {
            return l.now() - o
        }
    }
    var s = []
      , u = []
      , f = 1
      , d = null
      , v = 3
      , g = !1
      , w = !1
      , k = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(O) {
        for (var z = n(u); z !== null; ) {
            if (z.callback === null)
                r(u);
            else if (z.startTime <= O)
                r(u),
                z.sortIndex = z.expirationTime,
                t(s, z);
            else
                break;
            z = n(u)
        }
    }
    function y(O) {
        if (k = !1,
        m(O),
        !w)
            if (n(s) !== null)
                w = !0,
                Ia(E);
            else {
                var z = n(u);
                z !== null && za(y, z.startTime - O)
            }
    }
    function E(O, z) {
        w = !1,
        k && (k = !1,
        p(j),
        j = -1),
        g = !0;
        var A = v;
        try {
            for (m(z),
            d = n(s); d !== null && (!(d.expirationTime > z) || O && !Me()); ) {
                var Z = d.callback;
                if (typeof Z == "function") {
                    d.callback = null,
                    v = d.priorityLevel;
                    var re = Z(d.expirationTime <= z);
                    z = e.unstable_now(),
                    typeof re == "function" ? d.callback = re : d === n(s) && r(s),
                    m(z)
                } else
                    r(s);
                d = n(s)
            }
            if (d !== null)
                var Wr = !0;
            else {
                var bt = n(u);
                bt !== null && za(y, bt.startTime - z),
                Wr = !1
            }
            return Wr
        } finally {
            d = null,
            v = A,
            g = !1
        }
    }
    var _ = !1
      , N = null
      , j = -1
      , b = 5
      , L = -1;
    function Me() {
        return !(e.unstable_now() - L < b)
    }
    function $n() {
        if (N !== null) {
            var O = e.unstable_now();
            L = O;
            var z = !0;
            try {
                z = N(!0, O)
            } finally {
                z ? Bn() : (_ = !1,
                N = null)
            }
        } else
            _ = !1
    }
    var Bn;
    if (typeof c == "function")
        Bn = function() {
            c($n)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var js = new MessageChannel
          , Cp = js.port2;
        js.port1.onmessage = $n,
        Bn = function() {
            Cp.postMessage(null)
        }
    } else
        Bn = function() {
            S($n, 0)
        }
        ;
    function Ia(O) {
        N = O,
        _ || (_ = !0,
        Bn())
    }
    function za(O, z) {
        j = S(function() {
            O(e.unstable_now())
        }, z)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(O) {
        O.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || g || (w = !0,
        Ia(E))
    }
    ,
    e.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < O ? Math.floor(1e3 / O) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return v
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(O) {
        switch (v) {
        case 1:
        case 2:
        case 3:
            var z = 3;
            break;
        default:
            z = v
        }
        var A = v;
        v = z;
        try {
            return O()
        } finally {
            v = A
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(O, z) {
        switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            O = 3
        }
        var A = v;
        v = O;
        try {
            return z()
        } finally {
            v = A
        }
    }
    ,
    e.unstable_scheduleCallback = function(O, z, A) {
        var Z = e.unstable_now();
        switch (typeof A == "object" && A !== null ? (A = A.delay,
        A = typeof A == "number" && 0 < A ? Z + A : Z) : A = Z,
        O) {
        case 1:
            var re = -1;
            break;
        case 2:
            re = 250;
            break;
        case 5:
            re = 1073741823;
            break;
        case 4:
            re = 1e4;
            break;
        default:
            re = 5e3
        }
        return re = A + re,
        O = {
            id: f++,
            callback: z,
            priorityLevel: O,
            startTime: A,
            expirationTime: re,
            sortIndex: -1
        },
        A > Z ? (O.sortIndex = A,
        t(u, O),
        n(s) === null && O === n(u) && (k ? (p(j),
        j = -1) : k = !0,
        za(y, A - Z))) : (O.sortIndex = re,
        t(s, O),
        w || g || (w = !0,
        Ia(E))),
        O
    }
    ,
    e.unstable_shouldYield = Me,
    e.unstable_wrapCallback = function(O) {
        var z = v;
        return function() {
            var A = v;
            v = z;
            try {
                return O.apply(this, arguments)
            } finally {
                v = A
            }
        }
    }
}
)(Lc);
Ac.exports = Lc;
var Kp = Ac.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc = I
  , _e = Kp;
function x(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Mc = new Set
  , pr = {};
function nn(e, t) {
    Tn(e, t),
    Tn(e + "Capture", t)
}
function Tn(e, t) {
    for (pr[e] = t,
    e = 0; e < t.length; e++)
        Mc.add(t[e])
}
var nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , dl = Object.prototype.hasOwnProperty
  , Xp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ls = {}
  , Rs = {};
function Gp(e) {
    return dl.call(Rs, e) ? !0 : dl.call(Ls, e) ? !1 : Xp.test(e) ? Rs[e] = !0 : (Ls[e] = !0,
    !1)
}
function Zp(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function qp(e, t, n, r) {
    if (t === null || typeof t > "u" || Zp(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function he(e, t, n, r, i, a, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = a,
    this.removeEmptyString = l
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    se[e] = new he(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    se[t] = new he(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    se[e] = new he(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    se[e] = new he(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    se[e] = new he(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    se[e] = new he(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    se[e] = new he(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    se[e] = new he(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    se[e] = new he(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var _o = /[\-:]([a-z])/g;
function No(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(_o, No);
    se[t] = new he(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(_o, No);
    se[t] = new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(_o, No);
    se[t] = new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    se[e] = new he(e,1,!1,e.toLowerCase(),null,!1,!1)
});
se.xlinkHref = new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    se[e] = new he(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Oo(e, t, n, r) {
    var i = se.hasOwnProperty(t) ? se[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (qp(t, n, i, r) && (n = null),
    r || i === null ? Gp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var ut = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Yr = Symbol.for("react.element")
  , ln = Symbol.for("react.portal")
  , on = Symbol.for("react.fragment")
  , To = Symbol.for("react.strict_mode")
  , pl = Symbol.for("react.profiler")
  , Fc = Symbol.for("react.provider")
  , bc = Symbol.for("react.context")
  , jo = Symbol.for("react.forward_ref")
  , ml = Symbol.for("react.suspense")
  , vl = Symbol.for("react.suspense_list")
  , Io = Symbol.for("react.memo")
  , pt = Symbol.for("react.lazy")
  , Dc = Symbol.for("react.offscreen")
  , Ms = Symbol.iterator;
function Wn(e) {
    return e === null || typeof e != "object" ? null : (e = Ms && e[Ms] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var K = Object.assign, Ra;
function Zn(e) {
    if (Ra === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ra = t && t[1] || ""
        }
    return `
` + Ra + e
}
var Ma = !1;
function Fa(e, t) {
    if (!e || Ma)
        return "";
    Ma = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), a = r.stack.split(`
`), l = i.length - 1, o = a.length - 1; 1 <= l && 0 <= o && i[l] !== a[o]; )
                o--;
            for (; 1 <= l && 0 <= o; l--,
            o--)
                if (i[l] !== a[o]) {
                    if (l !== 1 || o !== 1)
                        do
                            if (l--,
                            o--,
                            0 > o || i[l] !== a[o]) {
                                var s = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= l && 0 <= o);
                    break
                }
        }
    } finally {
        Ma = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Zn(e) : ""
}
function Jp(e) {
    switch (e.tag) {
    case 5:
        return Zn(e.type);
    case 16:
        return Zn("Lazy");
    case 13:
        return Zn("Suspense");
    case 19:
        return Zn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Fa(e.type, !1),
        e;
    case 11:
        return e = Fa(e.type.render, !1),
        e;
    case 1:
        return e = Fa(e.type, !0),
        e;
    default:
        return ""
    }
}
function hl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case on:
        return "Fragment";
    case ln:
        return "Portal";
    case pl:
        return "Profiler";
    case To:
        return "StrictMode";
    case ml:
        return "Suspense";
    case vl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case bc:
            return (e.displayName || "Context") + ".Consumer";
        case Fc:
            return (e._context.displayName || "Context") + ".Provider";
        case jo:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Io:
            return t = e.displayName || null,
            t !== null ? t : hl(e.type) || "Memo";
        case pt:
            t = e._payload,
            e = e._init;
            try {
                return hl(e(t))
            } catch {}
        }
    return null
}
function em(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return hl(t);
    case 8:
        return t === To ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function jt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Uc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function tm(e) {
    var t = Uc(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , a = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(l) {
                r = "" + l,
                a.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Qr(e) {
    e._valueTracker || (e._valueTracker = tm(e))
}
function $c(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Uc(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ii(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function gl(e, t) {
    var n = t.checked;
    return K({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Fs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = jt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Bc(e, t) {
    t = t.checked,
    t != null && Oo(e, "checked", t, !1)
}
function yl(e, t) {
    Bc(e, t);
    var n = jt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? wl(e, t.type, n) : t.hasOwnProperty("defaultValue") && wl(e, t.type, jt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function bs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function wl(e, t, n) {
    (t !== "number" || Ii(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var qn = Array.isArray;
function xn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + jt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function kl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(x(91));
    return K({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ds(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(x(92));
            if (qn(n)) {
                if (1 < n.length)
                    throw Error(x(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: jt(n)
    }
}
function Wc(e, t) {
    var n = jt(t.value)
      , r = jt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Us(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Hc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function xl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Hc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Kr, Vc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Kr = Kr || document.createElement("div"),
        Kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Kr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function mr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var nr = {
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
    strokeWidth: !0
}
  , nm = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function(e) {
    nm.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        nr[t] = nr[e]
    })
});
function Yc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px"
}
function Qc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Yc(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var rm = K({
    menuitem: !0
}, {
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
    wbr: !0
});
function Sl(e, t) {
    if (t) {
        if (rm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(x(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(x(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(x(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(x(62))
    }
}
function El(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var Cl = null;
function zo(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Pl = null
  , Sn = null
  , En = null;
function $s(e) {
    if (e = br(e)) {
        if (typeof Pl != "function")
            throw Error(x(280));
        var t = e.stateNode;
        t && (t = pa(t),
        Pl(e.stateNode, e.type, t))
    }
}
function Kc(e) {
    Sn ? En ? En.push(e) : En = [e] : Sn = e
}
function Xc() {
    if (Sn) {
        var e = Sn
          , t = En;
        if (En = Sn = null,
        $s(e),
        t)
            for (e = 0; e < t.length; e++)
                $s(t[e])
    }
}
function Gc(e, t) {
    return e(t)
}
function Zc() {}
var ba = !1;
function qc(e, t, n) {
    if (ba)
        return e(t, n);
    ba = !0;
    try {
        return Gc(e, t, n)
    } finally {
        ba = !1,
        (Sn !== null || En !== null) && (Zc(),
        Xc())
    }
}
function vr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = pa(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(x(231, t, typeof n));
    return n
}
var _l = !1;
if (nt)
    try {
        var Hn = {};
        Object.defineProperty(Hn, "passive", {
            get: function() {
                _l = !0
            }
        }),
        window.addEventListener("test", Hn, Hn),
        window.removeEventListener("test", Hn, Hn)
    } catch {
        _l = !1
    }
function im(e, t, n, r, i, a, l, o, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var rr = !1
  , zi = null
  , Ai = !1
  , Nl = null
  , am = {
    onError: function(e) {
        rr = !0,
        zi = e
    }
};
function lm(e, t, n, r, i, a, l, o, s) {
    rr = !1,
    zi = null,
    im.apply(am, arguments)
}
function om(e, t, n, r, i, a, l, o, s) {
    if (lm.apply(this, arguments),
    rr) {
        if (rr) {
            var u = zi;
            rr = !1,
            zi = null
        } else
            throw Error(x(198));
        Ai || (Ai = !0,
        Nl = u)
    }
}
function rn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Jc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Bs(e) {
    if (rn(e) !== e)
        throw Error(x(188))
}
function sm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = rn(e),
        t === null)
            throw Error(x(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var a = i.alternate;
        if (a === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === a.child) {
            for (a = i.child; a; ) {
                if (a === n)
                    return Bs(i),
                    e;
                if (a === r)
                    return Bs(i),
                    t;
                a = a.sibling
            }
            throw Error(x(188))
        }
        if (n.return !== r.return)
            n = i,
            r = a;
        else {
            for (var l = !1, o = i.child; o; ) {
                if (o === n) {
                    l = !0,
                    n = i,
                    r = a;
                    break
                }
                if (o === r) {
                    l = !0,
                    r = i,
                    n = a;
                    break
                }
                o = o.sibling
            }
            if (!l) {
                for (o = a.child; o; ) {
                    if (o === n) {
                        l = !0,
                        n = a,
                        r = i;
                        break
                    }
                    if (o === r) {
                        l = !0,
                        r = a,
                        n = i;
                        break
                    }
                    o = o.sibling
                }
                if (!l)
                    throw Error(x(189))
            }
        }
        if (n.alternate !== r)
            throw Error(x(190))
    }
    if (n.tag !== 3)
        throw Error(x(188));
    return n.stateNode.current === n ? e : t
}
function ef(e) {
    return e = sm(e),
    e !== null ? tf(e) : null
}
function tf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = tf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var nf = _e.unstable_scheduleCallback
  , Ws = _e.unstable_cancelCallback
  , um = _e.unstable_shouldYield
  , cm = _e.unstable_requestPaint
  , q = _e.unstable_now
  , fm = _e.unstable_getCurrentPriorityLevel
  , Ao = _e.unstable_ImmediatePriority
  , rf = _e.unstable_UserBlockingPriority
  , Li = _e.unstable_NormalPriority
  , dm = _e.unstable_LowPriority
  , af = _e.unstable_IdlePriority
  , ua = null
  , Xe = null;
function pm(e) {
    if (Xe && typeof Xe.onCommitFiberRoot == "function")
        try {
            Xe.onCommitFiberRoot(ua, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Be = Math.clz32 ? Math.clz32 : hm
  , mm = Math.log
  , vm = Math.LN2;
function hm(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (mm(e) / vm | 0) | 0
}
var Xr = 64
  , Gr = 4194304;
function Jn(e) {
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
        return e
    }
}
function Ri(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , a = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var o = l & ~i;
        o !== 0 ? r = Jn(o) : (a &= l,
        a !== 0 && (r = Jn(a)))
    } else
        l = n & ~i,
        l !== 0 ? r = Jn(l) : a !== 0 && (r = Jn(a));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    a = t & -t,
    i >= a || i === 16 && (a & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Be(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function gm(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
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
        return t + 5e3;
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
        return -1
    }
}
function ym(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
        var l = 31 - Be(a)
          , o = 1 << l
          , s = i[l];
        s === -1 ? (!(o & n) || o & r) && (i[l] = gm(o, t)) : s <= t && (e.expiredLanes |= o),
        a &= ~o
    }
}
function Ol(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function lf() {
    var e = Xr;
    return Xr <<= 1,
    !(Xr & 4194240) && (Xr = 64),
    e
}
function Da(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Mr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Be(t),
    e[t] = n
}
function wm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Be(n)
          , a = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~a
    }
}
function Lo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Be(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var D = 0;
function of(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var sf, Ro, uf, cf, ff, Tl = !1, Zr = [], St = null, Et = null, Ct = null, hr = new Map, gr = new Map, vt = [], km = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Hs(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        St = null;
        break;
    case "dragenter":
    case "dragleave":
        Et = null;
        break;
    case "mouseover":
    case "mouseout":
        Ct = null;
        break;
    case "pointerover":
    case "pointerout":
        hr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        gr.delete(t.pointerId)
    }
}
function Vn(e, t, n, r, i, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i]
    },
    t !== null && (t = br(t),
    t !== null && Ro(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function xm(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return St = Vn(St, e, t, n, r, i),
        !0;
    case "dragenter":
        return Et = Vn(Et, e, t, n, r, i),
        !0;
    case "mouseover":
        return Ct = Vn(Ct, e, t, n, r, i),
        !0;
    case "pointerover":
        var a = i.pointerId;
        return hr.set(a, Vn(hr.get(a) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return a = i.pointerId,
        gr.set(a, Vn(gr.get(a) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function df(e) {
    var t = Bt(e.target);
    if (t !== null) {
        var n = rn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Jc(n),
                t !== null) {
                    e.blockedOn = t,
                    ff(e.priority, function() {
                        uf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function wi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Cl = r,
            n.target.dispatchEvent(r),
            Cl = null
        } else
            return t = br(n),
            t !== null && Ro(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Vs(e, t, n) {
    wi(e) && n.delete(t)
}
function Sm() {
    Tl = !1,
    St !== null && wi(St) && (St = null),
    Et !== null && wi(Et) && (Et = null),
    Ct !== null && wi(Ct) && (Ct = null),
    hr.forEach(Vs),
    gr.forEach(Vs)
}
function Yn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Tl || (Tl = !0,
    _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Sm)))
}
function yr(e) {
    function t(i) {
        return Yn(i, e)
    }
    if (0 < Zr.length) {
        Yn(Zr[0], e);
        for (var n = 1; n < Zr.length; n++) {
            var r = Zr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (St !== null && Yn(St, e),
    Et !== null && Yn(Et, e),
    Ct !== null && Yn(Ct, e),
    hr.forEach(t),
    gr.forEach(t),
    n = 0; n < vt.length; n++)
        r = vt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < vt.length && (n = vt[0],
    n.blockedOn === null); )
        df(n),
        n.blockedOn === null && vt.shift()
}
var Cn = ut.ReactCurrentBatchConfig
  , Mi = !0;
function Em(e, t, n, r) {
    var i = D
      , a = Cn.transition;
    Cn.transition = null;
    try {
        D = 1,
        Mo(e, t, n, r)
    } finally {
        D = i,
        Cn.transition = a
    }
}
function Cm(e, t, n, r) {
    var i = D
      , a = Cn.transition;
    Cn.transition = null;
    try {
        D = 4,
        Mo(e, t, n, r)
    } finally {
        D = i,
        Cn.transition = a
    }
}
function Mo(e, t, n, r) {
    if (Mi) {
        var i = jl(e, t, n, r);
        if (i === null)
            Xa(e, t, r, Fi, n),
            Hs(e, r);
        else if (xm(i, e, t, n, r))
            r.stopPropagation();
        else if (Hs(e, r),
        t & 4 && -1 < km.indexOf(e)) {
            for (; i !== null; ) {
                var a = br(i);
                if (a !== null && sf(a),
                a = jl(e, t, n, r),
                a === null && Xa(e, t, r, Fi, n),
                a === i)
                    break;
                i = a
            }
            i !== null && r.stopPropagation()
        } else
            Xa(e, t, r, null, n)
    }
}
var Fi = null;
function jl(e, t, n, r) {
    if (Fi = null,
    e = zo(r),
    e = Bt(e),
    e !== null)
        if (t = rn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Jc(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Fi = e,
    null
}
function pf(e) {
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
        switch (fm()) {
        case Ao:
            return 1;
        case rf:
            return 4;
        case Li:
        case dm:
            return 16;
        case af:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var gt = null
  , Fo = null
  , ki = null;
function mf() {
    if (ki)
        return ki;
    var e, t = Fo, n = t.length, r, i = "value"in gt ? gt.value : gt.textContent, a = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[a - r]; r++)
        ;
    return ki = i.slice(e, 1 < r ? 1 - r : void 0)
}
function xi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function qr() {
    return !0
}
function Ys() {
    return !1
}
function Oe(e) {
    function t(n, r, i, a, l) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = a,
        this.target = l,
        this.currentTarget = null;
        for (var o in e)
            e.hasOwnProperty(o) && (n = e[o],
            this[o] = n ? n(a) : a[o]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? qr : Ys,
        this.isPropagationStopped = Ys,
        this
    }
    return K(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = qr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = qr)
        },
        persist: function() {},
        isPersistent: qr
    }),
    t
}
var bn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, bo = Oe(bn), Fr = K({}, bn, {
    view: 0,
    detail: 0
}), Pm = Oe(Fr), Ua, $a, Qn, ca = K({}, Fr, {
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
    getModifierState: Do,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Qn && (Qn && e.type === "mousemove" ? (Ua = e.screenX - Qn.screenX,
        $a = e.screenY - Qn.screenY) : $a = Ua = 0,
        Qn = e),
        Ua)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : $a
    }
}), Qs = Oe(ca), _m = K({}, ca, {
    dataTransfer: 0
}), Nm = Oe(_m), Om = K({}, Fr, {
    relatedTarget: 0
}), Ba = Oe(Om), Tm = K({}, bn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), jm = Oe(Tm), Im = K({}, bn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), zm = Oe(Im), Am = K({}, bn, {
    data: 0
}), Ks = Oe(Am), Lm = {
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
    MozPrintableKey: "Unidentified"
}, Rm = {
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
    224: "Meta"
}, Mm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Fm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Mm[e]) ? !!t[e] : !1
}
function Do() {
    return Fm
}
var bm = K({}, Fr, {
    key: function(e) {
        if (e.key) {
            var t = Lm[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = xi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rm[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Do,
    charCode: function(e) {
        return e.type === "keypress" ? xi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Dm = Oe(bm)
  , Um = K({}, ca, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Xs = Oe(Um)
  , $m = K({}, Fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Do
})
  , Bm = Oe($m)
  , Wm = K({}, bn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Hm = Oe(Wm)
  , Vm = K({}, ca, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Ym = Oe(Vm)
  , Qm = [9, 13, 27, 32]
  , Uo = nt && "CompositionEvent"in window
  , ir = null;
nt && "documentMode"in document && (ir = document.documentMode);
var Km = nt && "TextEvent"in window && !ir
  , vf = nt && (!Uo || ir && 8 < ir && 11 >= ir)
  , Gs = " "
  , Zs = !1;
function hf(e, t) {
    switch (e) {
    case "keyup":
        return Qm.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function gf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var sn = !1;
function Xm(e, t) {
    switch (e) {
    case "compositionend":
        return gf(t);
    case "keypress":
        return t.which !== 32 ? null : (Zs = !0,
        Gs);
    case "textInput":
        return e = t.data,
        e === Gs && Zs ? null : e;
    default:
        return null
    }
}
function Gm(e, t) {
    if (sn)
        return e === "compositionend" || !Uo && hf(e, t) ? (e = mf(),
        ki = Fo = gt = null,
        sn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return vf && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Zm = {
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
    week: !0
};
function qs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Zm[e.type] : t === "textarea"
}
function yf(e, t, n, r) {
    Kc(r),
    t = bi(t, "onChange"),
    0 < t.length && (n = new bo("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ar = null
  , wr = null;
function qm(e) {
    Tf(e, 0)
}
function fa(e) {
    var t = fn(e);
    if ($c(t))
        return e
}
function Jm(e, t) {
    if (e === "change")
        return t
}
var wf = !1;
if (nt) {
    var Wa;
    if (nt) {
        var Ha = "oninput"in document;
        if (!Ha) {
            var Js = document.createElement("div");
            Js.setAttribute("oninput", "return;"),
            Ha = typeof Js.oninput == "function"
        }
        Wa = Ha
    } else
        Wa = !1;
    wf = Wa && (!document.documentMode || 9 < document.documentMode)
}
function eu() {
    ar && (ar.detachEvent("onpropertychange", kf),
    wr = ar = null)
}
function kf(e) {
    if (e.propertyName === "value" && fa(wr)) {
        var t = [];
        yf(t, wr, e, zo(e)),
        qc(qm, t)
    }
}
function ev(e, t, n) {
    e === "focusin" ? (eu(),
    ar = t,
    wr = n,
    ar.attachEvent("onpropertychange", kf)) : e === "focusout" && eu()
}
function tv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return fa(wr)
}
function nv(e, t) {
    if (e === "click")
        return fa(t)
}
function rv(e, t) {
    if (e === "input" || e === "change")
        return fa(t)
}
function iv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var He = typeof Object.is == "function" ? Object.is : iv;
function kr(e, t) {
    if (He(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!dl.call(t, i) || !He(e[i], t[i]))
            return !1
    }
    return !0
}
function tu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function nu(e, t) {
    var n = tu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = tu(n)
    }
}
function xf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Sf() {
    for (var e = window, t = Ii(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ii(e.document)
    }
    return t
}
function $o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function av(e) {
    var t = Sf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && xf(n.ownerDocument.documentElement, n)) {
        if (r !== null && $o(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , a = Math.min(r.start, i);
                r = r.end === void 0 ? a : Math.min(r.end, i),
                !e.extend && a > r && (i = r,
                r = a,
                a = i),
                i = nu(n, a);
                var l = nu(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                a > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var lv = nt && "documentMode"in document && 11 >= document.documentMode
  , un = null
  , Il = null
  , lr = null
  , zl = !1;
function ru(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zl || un == null || un !== Ii(r) || (r = un,
    "selectionStart"in r && $o(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    lr && kr(lr, r) || (lr = r,
    r = bi(Il, "onSelect"),
    0 < r.length && (t = new bo("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = un)))
}
function Jr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var cn = {
    animationend: Jr("Animation", "AnimationEnd"),
    animationiteration: Jr("Animation", "AnimationIteration"),
    animationstart: Jr("Animation", "AnimationStart"),
    transitionend: Jr("Transition", "TransitionEnd")
}
  , Va = {}
  , Ef = {};
nt && (Ef = document.createElement("div").style,
"AnimationEvent"in window || (delete cn.animationend.animation,
delete cn.animationiteration.animation,
delete cn.animationstart.animation),
"TransitionEvent"in window || delete cn.transitionend.transition);
function da(e) {
    if (Va[e])
        return Va[e];
    if (!cn[e])
        return e;
    var t = cn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ef)
            return Va[e] = t[n];
    return e
}
var Cf = da("animationend")
  , Pf = da("animationiteration")
  , _f = da("animationstart")
  , Nf = da("transitionend")
  , Of = new Map
  , iu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Rt(e, t) {
    Of.set(e, t),
    nn(t, [e])
}
for (var Ya = 0; Ya < iu.length; Ya++) {
    var Qa = iu[Ya]
      , ov = Qa.toLowerCase()
      , sv = Qa[0].toUpperCase() + Qa.slice(1);
    Rt(ov, "on" + sv)
}
Rt(Cf, "onAnimationEnd");
Rt(Pf, "onAnimationIteration");
Rt(_f, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(Nf, "onTransitionEnd");
Tn("onMouseEnter", ["mouseout", "mouseover"]);
Tn("onMouseLeave", ["mouseout", "mouseover"]);
Tn("onPointerEnter", ["pointerout", "pointerover"]);
Tn("onPointerLeave", ["pointerout", "pointerover"]);
nn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
nn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
nn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
nn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , uv = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function au(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    om(r, t, void 0, e),
    e.currentTarget = null
}
function Tf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var o = r[l]
                      , s = o.instance
                      , u = o.currentTarget;
                    if (o = o.listener,
                    s !== a && i.isPropagationStopped())
                        break e;
                    au(i, o, u),
                    a = s
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (o = r[l],
                    s = o.instance,
                    u = o.currentTarget,
                    o = o.listener,
                    s !== a && i.isPropagationStopped())
                        break e;
                    au(i, o, u),
                    a = s
                }
        }
    }
    if (Ai)
        throw e = Nl,
        Ai = !1,
        Nl = null,
        e
}
function $(e, t) {
    var n = t[Fl];
    n === void 0 && (n = t[Fl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (jf(t, e, 2, !1),
    n.add(r))
}
function Ka(e, t, n) {
    var r = 0;
    t && (r |= 4),
    jf(n, e, r, t)
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);
function xr(e) {
    if (!e[ei]) {
        e[ei] = !0,
        Mc.forEach(function(n) {
            n !== "selectionchange" && (uv.has(n) || Ka(n, !1, e),
            Ka(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ei] || (t[ei] = !0,
        Ka("selectionchange", !1, t))
    }
}
function jf(e, t, n, r) {
    switch (pf(t)) {
    case 1:
        var i = Em;
        break;
    case 4:
        i = Cm;
        break;
    default:
        i = Mo
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !_l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Xa(e, t, n, r, i) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var o = r.stateNode.containerInfo;
                if (o === i || o.nodeType === 8 && o.parentNode === i)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var s = l.tag;
                        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo,
                        s === i || s.nodeType === 8 && s.parentNode === i))
                            return;
                        l = l.return
                    }
                for (; o !== null; ) {
                    if (l = Bt(o),
                    l === null)
                        return;
                    if (s = l.tag,
                    s === 5 || s === 6) {
                        r = a = l;
                        continue e
                    }
                    o = o.parentNode
                }
            }
            r = r.return
        }
    qc(function() {
        var u = a
          , f = zo(n)
          , d = [];
        e: {
            var v = Of.get(e);
            if (v !== void 0) {
                var g = bo
                  , w = e;
                switch (e) {
                case "keypress":
                    if (xi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = Dm;
                    break;
                case "focusin":
                    w = "focus",
                    g = Ba;
                    break;
                case "focusout":
                    w = "blur",
                    g = Ba;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = Ba;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = Qs;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = Nm;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = Bm;
                    break;
                case Cf:
                case Pf:
                case _f:
                    g = jm;
                    break;
                case Nf:
                    g = Hm;
                    break;
                case "scroll":
                    g = Pm;
                    break;
                case "wheel":
                    g = Ym;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = zm;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = Xs
                }
                var k = (t & 4) !== 0
                  , S = !k && e === "scroll"
                  , p = k ? v !== null ? v + "Capture" : null : v;
                k = [];
                for (var c = u, m; c !== null; ) {
                    m = c;
                    var y = m.stateNode;
                    if (m.tag === 5 && y !== null && (m = y,
                    p !== null && (y = vr(c, p),
                    y != null && k.push(Sr(c, y, m)))),
                    S)
                        break;
                    c = c.return
                }
                0 < k.length && (v = new g(v,w,null,n,f),
                d.push({
                    event: v,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                v && n !== Cl && (w = n.relatedTarget || n.fromElement) && (Bt(w) || w[rt]))
                    break e;
                if ((g || v) && (v = f.window === f ? f : (v = f.ownerDocument) ? v.defaultView || v.parentWindow : window,
                g ? (w = n.relatedTarget || n.toElement,
                g = u,
                w = w ? Bt(w) : null,
                w !== null && (S = rn(w),
                w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null,
                w = u),
                g !== w)) {
                    if (k = Qs,
                    y = "onMouseLeave",
                    p = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = Xs,
                    y = "onPointerLeave",
                    p = "onPointerEnter",
                    c = "pointer"),
                    S = g == null ? v : fn(g),
                    m = w == null ? v : fn(w),
                    v = new k(y,c + "leave",g,n,f),
                    v.target = S,
                    v.relatedTarget = m,
                    y = null,
                    Bt(f) === u && (k = new k(p,c + "enter",w,n,f),
                    k.target = m,
                    k.relatedTarget = S,
                    y = k),
                    S = y,
                    g && w)
                        t: {
                            for (k = g,
                            p = w,
                            c = 0,
                            m = k; m; m = an(m))
                                c++;
                            for (m = 0,
                            y = p; y; y = an(y))
                                m++;
                            for (; 0 < c - m; )
                                k = an(k),
                                c--;
                            for (; 0 < m - c; )
                                p = an(p),
                                m--;
                            for (; c--; ) {
                                if (k === p || p !== null && k === p.alternate)
                                    break t;
                                k = an(k),
                                p = an(p)
                            }
                            k = null
                        }
                    else
                        k = null;
                    g !== null && lu(d, v, g, k, !1),
                    w !== null && S !== null && lu(d, S, w, k, !0)
                }
            }
            e: {
                if (v = u ? fn(u) : window,
                g = v.nodeName && v.nodeName.toLowerCase(),
                g === "select" || g === "input" && v.type === "file")
                    var E = Jm;
                else if (qs(v))
                    if (wf)
                        E = rv;
                    else {
                        E = tv;
                        var _ = ev
                    }
                else
                    (g = v.nodeName) && g.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = nv);
                if (E && (E = E(e, u))) {
                    yf(d, E, n, f);
                    break e
                }
                _ && _(e, v, u),
                e === "focusout" && (_ = v._wrapperState) && _.controlled && v.type === "number" && wl(v, "number", v.value)
            }
            switch (_ = u ? fn(u) : window,
            e) {
            case "focusin":
                (qs(_) || _.contentEditable === "true") && (un = _,
                Il = u,
                lr = null);
                break;
            case "focusout":
                lr = Il = un = null;
                break;
            case "mousedown":
                zl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                zl = !1,
                ru(d, n, f);
                break;
            case "selectionchange":
                if (lv)
                    break;
            case "keydown":
            case "keyup":
                ru(d, n, f)
            }
            var N;
            if (Uo)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                sn ? hf(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (vf && n.locale !== "ko" && (sn || j !== "onCompositionStart" ? j === "onCompositionEnd" && sn && (N = mf()) : (gt = f,
            Fo = "value"in gt ? gt.value : gt.textContent,
            sn = !0)),
            _ = bi(u, j),
            0 < _.length && (j = new Ks(j,e,null,n,f),
            d.push({
                event: j,
                listeners: _
            }),
            N ? j.data = N : (N = gf(n),
            N !== null && (j.data = N)))),
            (N = Km ? Xm(e, n) : Gm(e, n)) && (u = bi(u, "onBeforeInput"),
            0 < u.length && (f = new Ks("onBeforeInput","beforeinput",null,n,f),
            d.push({
                event: f,
                listeners: u
            }),
            f.data = N))
        }
        Tf(d, t)
    })
}
function Sr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function bi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , a = i.stateNode;
        i.tag === 5 && a !== null && (i = a,
        a = vr(e, n),
        a != null && r.unshift(Sr(e, a, i)),
        a = vr(e, t),
        a != null && r.push(Sr(e, a, i))),
        e = e.return
    }
    return r
}
function an(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function lu(e, t, n, r, i) {
    for (var a = t._reactName, l = []; n !== null && n !== r; ) {
        var o = n
          , s = o.alternate
          , u = o.stateNode;
        if (s !== null && s === r)
            break;
        o.tag === 5 && u !== null && (o = u,
        i ? (s = vr(n, a),
        s != null && l.unshift(Sr(n, s, o))) : i || (s = vr(n, a),
        s != null && l.push(Sr(n, s, o)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var cv = /\r\n?/g
  , fv = /\u0000|\uFFFD/g;
function ou(e) {
    return (typeof e == "string" ? e : "" + e).replace(cv, `
`).replace(fv, "")
}
function ti(e, t, n) {
    if (t = ou(t),
    ou(e) !== t && n)
        throw Error(x(425))
}
function Di() {}
var Al = null
  , Ll = null;
function Rl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ml = typeof setTimeout == "function" ? setTimeout : void 0
  , dv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , su = typeof Promise == "function" ? Promise : void 0
  , pv = typeof queueMicrotask == "function" ? queueMicrotask : typeof su < "u" ? function(e) {
    return su.resolve(null).then(e).catch(mv)
}
: Ml;
function mv(e) {
    setTimeout(function() {
        throw e
    })
}
function Ga(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    yr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    yr(t)
}
function Pt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function uu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Dn = Math.random().toString(36).slice(2)
  , Qe = "__reactFiber$" + Dn
  , Er = "__reactProps$" + Dn
  , rt = "__reactContainer$" + Dn
  , Fl = "__reactEvents$" + Dn
  , vv = "__reactListeners$" + Dn
  , hv = "__reactHandles$" + Dn;
function Bt(e) {
    var t = e[Qe];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[rt] || n[Qe]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = uu(e); e !== null; ) {
                    if (n = e[Qe])
                        return n;
                    e = uu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function br(e) {
    return e = e[Qe] || e[rt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function fn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(x(33))
}
function pa(e) {
    return e[Er] || null
}
var bl = []
  , dn = -1;
function Mt(e) {
    return {
        current: e
    }
}
function W(e) {
    0 > dn || (e.current = bl[dn],
    bl[dn] = null,
    dn--)
}
function U(e, t) {
    dn++,
    bl[dn] = e.current,
    e.current = t
}
var It = {}
  , de = Mt(It)
  , we = Mt(!1)
  , Xt = It;
function jn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return It;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, a;
    for (a in n)
        i[a] = t[a];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function ke(e) {
    return e = e.childContextTypes,
    e != null
}
function Ui() {
    W(we),
    W(de)
}
function cu(e, t, n) {
    if (de.current !== It)
        throw Error(x(168));
    U(de, t),
    U(we, n)
}
function If(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(x(108, em(e) || "Unknown", i));
    return K({}, n, r)
}
function $i(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || It,
    Xt = de.current,
    U(de, e),
    U(we, we.current),
    !0
}
function fu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(x(169));
    n ? (e = If(e, t, Xt),
    r.__reactInternalMemoizedMergedChildContext = e,
    W(we),
    W(de),
    U(de, e)) : W(we),
    U(we, n)
}
var qe = null
  , ma = !1
  , Za = !1;
function zf(e) {
    qe === null ? qe = [e] : qe.push(e)
}
function gv(e) {
    ma = !0,
    zf(e)
}
function Ft() {
    if (!Za && qe !== null) {
        Za = !0;
        var e = 0
          , t = D;
        try {
            var n = qe;
            for (D = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            qe = null,
            ma = !1
        } catch (i) {
            throw qe !== null && (qe = qe.slice(e + 1)),
            nf(Ao, Ft),
            i
        } finally {
            D = t,
            Za = !1
        }
    }
    return null
}
var pn = []
  , mn = 0
  , Bi = null
  , Wi = 0
  , je = []
  , Ie = 0
  , Gt = null
  , Je = 1
  , et = "";
function Ut(e, t) {
    pn[mn++] = Wi,
    pn[mn++] = Bi,
    Bi = e,
    Wi = t
}
function Af(e, t, n) {
    je[Ie++] = Je,
    je[Ie++] = et,
    je[Ie++] = Gt,
    Gt = e;
    var r = Je;
    e = et;
    var i = 32 - Be(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var a = 32 - Be(t) + i;
    if (30 < a) {
        var l = i - i % 5;
        a = (r & (1 << l) - 1).toString(32),
        r >>= l,
        i -= l,
        Je = 1 << 32 - Be(t) + i | n << i | r,
        et = a + e
    } else
        Je = 1 << a | n << i | r,
        et = e
}
function Bo(e) {
    e.return !== null && (Ut(e, 1),
    Af(e, 1, 0))
}
function Wo(e) {
    for (; e === Bi; )
        Bi = pn[--mn],
        pn[mn] = null,
        Wi = pn[--mn],
        pn[mn] = null;
    for (; e === Gt; )
        Gt = je[--Ie],
        je[Ie] = null,
        et = je[--Ie],
        je[Ie] = null,
        Je = je[--Ie],
        je[Ie] = null
}
var Pe = null
  , Ce = null
  , V = !1
  , Ue = null;
function Lf(e, t) {
    var n = ze(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function du(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Pe = e,
        Ce = Pt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Pe = e,
        Ce = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Gt !== null ? {
            id: Je,
            overflow: et
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ze(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Pe = e,
        Ce = null,
        !0) : !1;
    default:
        return !1
    }
}
function Dl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ul(e) {
    if (V) {
        var t = Ce;
        if (t) {
            var n = t;
            if (!du(e, t)) {
                if (Dl(e))
                    throw Error(x(418));
                t = Pt(n.nextSibling);
                var r = Pe;
                t && du(e, t) ? Lf(r, n) : (e.flags = e.flags & -4097 | 2,
                V = !1,
                Pe = e)
            }
        } else {
            if (Dl(e))
                throw Error(x(418));
            e.flags = e.flags & -4097 | 2,
            V = !1,
            Pe = e
        }
    }
}
function pu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Pe = e
}
function ni(e) {
    if (e !== Pe)
        return !1;
    if (!V)
        return pu(e),
        V = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Rl(e.type, e.memoizedProps)),
    t && (t = Ce)) {
        if (Dl(e))
            throw Rf(),
            Error(x(418));
        for (; t; )
            Lf(e, t),
            t = Pt(t.nextSibling)
    }
    if (pu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(x(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ce = Pt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ce = null
        }
    } else
        Ce = Pe ? Pt(e.stateNode.nextSibling) : null;
    return !0
}
function Rf() {
    for (var e = Ce; e; )
        e = Pt(e.nextSibling)
}
function In() {
    Ce = Pe = null,
    V = !1
}
function Ho(e) {
    Ue === null ? Ue = [e] : Ue.push(e)
}
var yv = ut.ReactCurrentBatchConfig;
function be(e, t) {
    if (e && e.defaultProps) {
        t = K({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Hi = Mt(null)
  , Vi = null
  , vn = null
  , Vo = null;
function Yo() {
    Vo = vn = Vi = null
}
function Qo(e) {
    var t = Hi.current;
    W(Hi),
    e._currentValue = t
}
function $l(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Pn(e, t) {
    Vi = e,
    Vo = vn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ye = !0),
    e.firstContext = null)
}
function Le(e) {
    var t = e._currentValue;
    if (Vo !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        vn === null) {
            if (Vi === null)
                throw Error(x(308));
            vn = e,
            Vi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            vn = vn.next = e;
    return t
}
var Wt = null;
function Ko(e) {
    Wt === null ? Wt = [e] : Wt.push(e)
}
function Mf(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Ko(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    it(e, r)
}
function it(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var mt = !1;
function Xo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ff(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function tt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function _t(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    F & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        it(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Ko(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    it(e, n)
}
function Si(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Lo(e, n)
    }
}
function mu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , a = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                a === null ? i = a = l : a = a.next = l,
                n = n.next
            } while (n !== null);
            a === null ? i = a = t : a = a.next = t
        } else
            i = a = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Yi(e, t, n, r) {
    var i = e.updateQueue;
    mt = !1;
    var a = i.firstBaseUpdate
      , l = i.lastBaseUpdate
      , o = i.shared.pending;
    if (o !== null) {
        i.shared.pending = null;
        var s = o
          , u = s.next;
        s.next = null,
        l === null ? a = u : l.next = u,
        l = s;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        o = f.lastBaseUpdate,
        o !== l && (o === null ? f.firstBaseUpdate = u : o.next = u,
        f.lastBaseUpdate = s))
    }
    if (a !== null) {
        var d = i.baseState;
        l = 0,
        f = u = s = null,
        o = a;
        do {
            var v = o.lane
              , g = o.eventTime;
            if ((r & v) === v) {
                f !== null && (f = f.next = {
                    eventTime: g,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                });
                e: {
                    var w = e
                      , k = o;
                    switch (v = t,
                    g = n,
                    k.tag) {
                    case 1:
                        if (w = k.payload,
                        typeof w == "function") {
                            d = w.call(g, d, v);
                            break e
                        }
                        d = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = k.payload,
                        v = typeof w == "function" ? w.call(g, d, v) : w,
                        v == null)
                            break e;
                        d = K({}, d, v);
                        break e;
                    case 2:
                        mt = !0
                    }
                }
                o.callback !== null && o.lane !== 0 && (e.flags |= 64,
                v = i.effects,
                v === null ? i.effects = [o] : v.push(o))
            } else
                g = {
                    eventTime: g,
                    lane: v,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                },
                f === null ? (u = f = g,
                s = d) : f = f.next = g,
                l |= v;
            if (o = o.next,
            o === null) {
                if (o = i.shared.pending,
                o === null)
                    break;
                v = o,
                o = v.next,
                v.next = null,
                i.lastBaseUpdate = v,
                i.shared.pending = null
            }
        } while (!0);
        if (f === null && (s = d),
        i.baseState = s,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = f,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                l |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            a === null && (i.shared.lanes = 0);
        qt |= l,
        e.lanes = l,
        e.memoizedState = d
    }
}
function vu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(x(191, i));
                i.call(r)
            }
        }
}
var bf = new Rc.Component().refs;
function Bl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : K({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var va = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? rn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = me()
          , i = Ot(e)
          , a = tt(r, i);
        a.payload = t,
        n != null && (a.callback = n),
        t = _t(e, a, i),
        t !== null && (We(t, e, i, r),
        Si(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = me()
          , i = Ot(e)
          , a = tt(r, i);
        a.tag = 1,
        a.payload = t,
        n != null && (a.callback = n),
        t = _t(e, a, i),
        t !== null && (We(t, e, i, r),
        Si(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = me()
          , r = Ot(e)
          , i = tt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = _t(e, i, r),
        t !== null && (We(t, e, r, n),
        Si(t, e, r))
    }
};
function hu(e, t, n, r, i, a, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, l) : t.prototype && t.prototype.isPureReactComponent ? !kr(n, r) || !kr(i, a) : !0
}
function Df(e, t, n) {
    var r = !1
      , i = It
      , a = t.contextType;
    return typeof a == "object" && a !== null ? a = Le(a) : (i = ke(t) ? Xt : de.current,
    r = t.contextTypes,
    a = (r = r != null) ? jn(e, i) : It),
    t = new t(n,a),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = va,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = a),
    t
}
function gu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && va.enqueueReplaceState(t, t.state, null)
}
function Wl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = bf,
    Xo(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? i.context = Le(a) : (a = ke(t) ? Xt : de.current,
    i.context = jn(e, a)),
    i.state = e.memoizedState,
    a = t.getDerivedStateFromProps,
    typeof a == "function" && (Bl(e, t, a, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && va.enqueueReplaceState(i, i.state, null),
    Yi(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Kn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(x(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(x(147, e));
            var i = r
              , a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(l) {
                var o = i.refs;
                o === bf && (o = i.refs = {}),
                l === null ? delete o[a] : o[a] = l
            }
            ,
            t._stringRef = a,
            t)
        }
        if (typeof e != "string")
            throw Error(x(284));
        if (!n._owner)
            throw Error(x(290, e))
    }
    return e
}
function ri(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function yu(e) {
    var t = e._init;
    return t(e._payload)
}
function Uf(e) {
    function t(p, c) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [c],
            p.flags |= 16) : m.push(c)
        }
    }
    function n(p, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(p, c),
            c = c.sibling;
        return null
    }
    function r(p, c) {
        for (p = new Map; c !== null; )
            c.key !== null ? p.set(c.key, c) : p.set(c.index, c),
            c = c.sibling;
        return p
    }
    function i(p, c) {
        return p = Tt(p, c),
        p.index = 0,
        p.sibling = null,
        p
    }
    function a(p, c, m) {
        return p.index = m,
        e ? (m = p.alternate,
        m !== null ? (m = m.index,
        m < c ? (p.flags |= 2,
        c) : m) : (p.flags |= 2,
        c)) : (p.flags |= 1048576,
        c)
    }
    function l(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function o(p, c, m, y) {
        return c === null || c.tag !== 6 ? (c = il(m, p.mode, y),
        c.return = p,
        c) : (c = i(c, m),
        c.return = p,
        c)
    }
    function s(p, c, m, y) {
        var E = m.type;
        return E === on ? f(p, c, m.props.children, y, m.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === pt && yu(E) === c.type) ? (y = i(c, m.props),
        y.ref = Kn(p, c, m),
        y.return = p,
        y) : (y = Oi(m.type, m.key, m.props, null, p.mode, y),
        y.ref = Kn(p, c, m),
        y.return = p,
        y)
    }
    function u(p, c, m, y) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = al(m, p.mode, y),
        c.return = p,
        c) : (c = i(c, m.children || []),
        c.return = p,
        c)
    }
    function f(p, c, m, y, E) {
        return c === null || c.tag !== 7 ? (c = Kt(m, p.mode, y, E),
        c.return = p,
        c) : (c = i(c, m),
        c.return = p,
        c)
    }
    function d(p, c, m) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = il("" + c, p.mode, m),
            c.return = p,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case Yr:
                return m = Oi(c.type, c.key, c.props, null, p.mode, m),
                m.ref = Kn(p, null, c),
                m.return = p,
                m;
            case ln:
                return c = al(c, p.mode, m),
                c.return = p,
                c;
            case pt:
                var y = c._init;
                return d(p, y(c._payload), m)
            }
            if (qn(c) || Wn(c))
                return c = Kt(c, p.mode, m, null),
                c.return = p,
                c;
            ri(p, c)
        }
        return null
    }
    function v(p, c, m, y) {
        var E = c !== null ? c.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return E !== null ? null : o(p, c, "" + m, y);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Yr:
                return m.key === E ? s(p, c, m, y) : null;
            case ln:
                return m.key === E ? u(p, c, m, y) : null;
            case pt:
                return E = m._init,
                v(p, c, E(m._payload), y)
            }
            if (qn(m) || Wn(m))
                return E !== null ? null : f(p, c, m, y, null);
            ri(p, m)
        }
        return null
    }
    function g(p, c, m, y, E) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return p = p.get(m) || null,
            o(c, p, "" + y, E);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Yr:
                return p = p.get(y.key === null ? m : y.key) || null,
                s(c, p, y, E);
            case ln:
                return p = p.get(y.key === null ? m : y.key) || null,
                u(c, p, y, E);
            case pt:
                var _ = y._init;
                return g(p, c, m, _(y._payload), E)
            }
            if (qn(y) || Wn(y))
                return p = p.get(m) || null,
                f(c, p, y, E, null);
            ri(c, y)
        }
        return null
    }
    function w(p, c, m, y) {
        for (var E = null, _ = null, N = c, j = c = 0, b = null; N !== null && j < m.length; j++) {
            N.index > j ? (b = N,
            N = null) : b = N.sibling;
            var L = v(p, N, m[j], y);
            if (L === null) {
                N === null && (N = b);
                break
            }
            e && N && L.alternate === null && t(p, N),
            c = a(L, c, j),
            _ === null ? E = L : _.sibling = L,
            _ = L,
            N = b
        }
        if (j === m.length)
            return n(p, N),
            V && Ut(p, j),
            E;
        if (N === null) {
            for (; j < m.length; j++)
                N = d(p, m[j], y),
                N !== null && (c = a(N, c, j),
                _ === null ? E = N : _.sibling = N,
                _ = N);
            return V && Ut(p, j),
            E
        }
        for (N = r(p, N); j < m.length; j++)
            b = g(N, p, j, m[j], y),
            b !== null && (e && b.alternate !== null && N.delete(b.key === null ? j : b.key),
            c = a(b, c, j),
            _ === null ? E = b : _.sibling = b,
            _ = b);
        return e && N.forEach(function(Me) {
            return t(p, Me)
        }),
        V && Ut(p, j),
        E
    }
    function k(p, c, m, y) {
        var E = Wn(m);
        if (typeof E != "function")
            throw Error(x(150));
        if (m = E.call(m),
        m == null)
            throw Error(x(151));
        for (var _ = E = null, N = c, j = c = 0, b = null, L = m.next(); N !== null && !L.done; j++,
        L = m.next()) {
            N.index > j ? (b = N,
            N = null) : b = N.sibling;
            var Me = v(p, N, L.value, y);
            if (Me === null) {
                N === null && (N = b);
                break
            }
            e && N && Me.alternate === null && t(p, N),
            c = a(Me, c, j),
            _ === null ? E = Me : _.sibling = Me,
            _ = Me,
            N = b
        }
        if (L.done)
            return n(p, N),
            V && Ut(p, j),
            E;
        if (N === null) {
            for (; !L.done; j++,
            L = m.next())
                L = d(p, L.value, y),
                L !== null && (c = a(L, c, j),
                _ === null ? E = L : _.sibling = L,
                _ = L);
            return V && Ut(p, j),
            E
        }
        for (N = r(p, N); !L.done; j++,
        L = m.next())
            L = g(N, p, j, L.value, y),
            L !== null && (e && L.alternate !== null && N.delete(L.key === null ? j : L.key),
            c = a(L, c, j),
            _ === null ? E = L : _.sibling = L,
            _ = L);
        return e && N.forEach(function($n) {
            return t(p, $n)
        }),
        V && Ut(p, j),
        E
    }
    function S(p, c, m, y) {
        if (typeof m == "object" && m !== null && m.type === on && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Yr:
                e: {
                    for (var E = m.key, _ = c; _ !== null; ) {
                        if (_.key === E) {
                            if (E = m.type,
                            E === on) {
                                if (_.tag === 7) {
                                    n(p, _.sibling),
                                    c = i(_, m.props.children),
                                    c.return = p,
                                    p = c;
                                    break e
                                }
                            } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === pt && yu(E) === _.type) {
                                n(p, _.sibling),
                                c = i(_, m.props),
                                c.ref = Kn(p, _, m),
                                c.return = p,
                                p = c;
                                break e
                            }
                            n(p, _);
                            break
                        } else
                            t(p, _);
                        _ = _.sibling
                    }
                    m.type === on ? (c = Kt(m.props.children, p.mode, y, m.key),
                    c.return = p,
                    p = c) : (y = Oi(m.type, m.key, m.props, null, p.mode, y),
                    y.ref = Kn(p, c, m),
                    y.return = p,
                    p = y)
                }
                return l(p);
            case ln:
                e: {
                    for (_ = m.key; c !== null; ) {
                        if (c.key === _)
                            if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                                n(p, c.sibling),
                                c = i(c, m.children || []),
                                c.return = p,
                                p = c;
                                break e
                            } else {
                                n(p, c);
                                break
                            }
                        else
                            t(p, c);
                        c = c.sibling
                    }
                    c = al(m, p.mode, y),
                    c.return = p,
                    p = c
                }
                return l(p);
            case pt:
                return _ = m._init,
                S(p, c, _(m._payload), y)
            }
            if (qn(m))
                return w(p, c, m, y);
            if (Wn(m))
                return k(p, c, m, y);
            ri(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        c !== null && c.tag === 6 ? (n(p, c.sibling),
        c = i(c, m),
        c.return = p,
        p = c) : (n(p, c),
        c = il(m, p.mode, y),
        c.return = p,
        p = c),
        l(p)) : n(p, c)
    }
    return S
}
var zn = Uf(!0)
  , $f = Uf(!1)
  , Dr = {}
  , Ge = Mt(Dr)
  , Cr = Mt(Dr)
  , Pr = Mt(Dr);
function Ht(e) {
    if (e === Dr)
        throw Error(x(174));
    return e
}
function Go(e, t) {
    switch (U(Pr, t),
    U(Cr, e),
    U(Ge, Dr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : xl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = xl(t, e)
    }
    W(Ge),
    U(Ge, t)
}
function An() {
    W(Ge),
    W(Cr),
    W(Pr)
}
function Bf(e) {
    Ht(Pr.current);
    var t = Ht(Ge.current)
      , n = xl(t, e.type);
    t !== n && (U(Cr, e),
    U(Ge, n))
}
function Zo(e) {
    Cr.current === e && (W(Ge),
    W(Cr))
}
var Y = Mt(0);
function Qi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var qa = [];
function qo() {
    for (var e = 0; e < qa.length; e++)
        qa[e]._workInProgressVersionPrimary = null;
    qa.length = 0
}
var Ei = ut.ReactCurrentDispatcher
  , Ja = ut.ReactCurrentBatchConfig
  , Zt = 0
  , Q = null
  , ee = null
  , ie = null
  , Ki = !1
  , or = !1
  , _r = 0
  , wv = 0;
function ue() {
    throw Error(x(321))
}
function Jo(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!He(e[n], t[n]))
            return !1;
    return !0
}
function es(e, t, n, r, i, a) {
    if (Zt = a,
    Q = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ei.current = e === null || e.memoizedState === null ? Ev : Cv,
    e = n(r, i),
    or) {
        a = 0;
        do {
            if (or = !1,
            _r = 0,
            25 <= a)
                throw Error(x(301));
            a += 1,
            ie = ee = null,
            t.updateQueue = null,
            Ei.current = Pv,
            e = n(r, i)
        } while (or)
    }
    if (Ei.current = Xi,
    t = ee !== null && ee.next !== null,
    Zt = 0,
    ie = ee = Q = null,
    Ki = !1,
    t)
        throw Error(x(300));
    return e
}
function ts() {
    var e = _r !== 0;
    return _r = 0,
    e
}
function Ye() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ie === null ? Q.memoizedState = ie = e : ie = ie.next = e,
    ie
}
function Re() {
    if (ee === null) {
        var e = Q.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ee.next;
    var t = ie === null ? Q.memoizedState : ie.next;
    if (t !== null)
        ie = t,
        ee = e;
    else {
        if (e === null)
            throw Error(x(310));
        ee = e,
        e = {
            memoizedState: ee.memoizedState,
            baseState: ee.baseState,
            baseQueue: ee.baseQueue,
            queue: ee.queue,
            next: null
        },
        ie === null ? Q.memoizedState = ie = e : ie = ie.next = e
    }
    return ie
}
function Nr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function el(e) {
    var t = Re()
      , n = t.queue;
    if (n === null)
        throw Error(x(311));
    n.lastRenderedReducer = e;
    var r = ee
      , i = r.baseQueue
      , a = n.pending;
    if (a !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = a.next,
            a.next = l
        }
        r.baseQueue = i = a,
        n.pending = null
    }
    if (i !== null) {
        a = i.next,
        r = r.baseState;
        var o = l = null
          , s = null
          , u = a;
        do {
            var f = u.lane;
            if ((Zt & f) === f)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (o = s = d,
                l = r) : s = s.next = d,
                Q.lanes |= f,
                qt |= f
            }
            u = u.next
        } while (u !== null && u !== a);
        s === null ? l = r : s.next = o,
        He(r, t.memoizedState) || (ye = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            a = i.lane,
            Q.lanes |= a,
            qt |= a,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function tl(e) {
    var t = Re()
      , n = t.queue;
    if (n === null)
        throw Error(x(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , a = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do
            a = e(a, l.action),
            l = l.next;
        while (l !== i);
        He(a, t.memoizedState) || (ye = !0),
        t.memoizedState = a,
        t.baseQueue === null && (t.baseState = a),
        n.lastRenderedState = a
    }
    return [a, r]
}
function Wf() {}
function Hf(e, t) {
    var n = Q
      , r = Re()
      , i = t()
      , a = !He(r.memoizedState, i);
    if (a && (r.memoizedState = i,
    ye = !0),
    r = r.queue,
    ns(Qf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || ie !== null && ie.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Or(9, Yf.bind(null, n, r, i, t), void 0, null),
        ae === null)
            throw Error(x(349));
        Zt & 30 || Vf(n, t, i)
    }
    return i
}
function Vf(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Q.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Yf(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Kf(t) && Xf(e)
}
function Qf(e, t, n) {
    return n(function() {
        Kf(t) && Xf(e)
    })
}
function Kf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !He(e, n)
    } catch {
        return !0
    }
}
function Xf(e) {
    var t = it(e, 1);
    t !== null && We(t, e, 1, -1)
}
function wu(e) {
    var t = Ye();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Sv.bind(null, Q, e),
    [t.memoizedState, e]
}
function Or(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Q.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Gf() {
    return Re().memoizedState
}
function Ci(e, t, n, r) {
    var i = Ye();
    Q.flags |= e,
    i.memoizedState = Or(1 | t, n, void 0, r === void 0 ? null : r)
}
function ha(e, t, n, r) {
    var i = Re();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (ee !== null) {
        var l = ee.memoizedState;
        if (a = l.destroy,
        r !== null && Jo(r, l.deps)) {
            i.memoizedState = Or(t, n, a, r);
            return
        }
    }
    Q.flags |= e,
    i.memoizedState = Or(1 | t, n, a, r)
}
function ku(e, t) {
    return Ci(8390656, 8, e, t)
}
function ns(e, t) {
    return ha(2048, 8, e, t)
}
function Zf(e, t) {
    return ha(4, 2, e, t)
}
function qf(e, t) {
    return ha(4, 4, e, t)
}
function Jf(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function ed(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ha(4, 4, Jf.bind(null, t, e), n)
}
function rs() {}
function td(e, t) {
    var n = Re();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Jo(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function nd(e, t) {
    var n = Re();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Jo(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function rd(e, t, n) {
    return Zt & 21 ? (He(n, t) || (n = lf(),
    Q.lanes |= n,
    qt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    ye = !0),
    e.memoizedState = n)
}
function kv(e, t) {
    var n = D;
    D = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ja.transition;
    Ja.transition = {};
    try {
        e(!1),
        t()
    } finally {
        D = n,
        Ja.transition = r
    }
}
function id() {
    return Re().memoizedState
}
function xv(e, t, n) {
    var r = Ot(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    ad(e))
        ld(t, n);
    else if (n = Mf(e, t, n, r),
    n !== null) {
        var i = me();
        We(n, e, r, i),
        od(n, t, r)
    }
}
function Sv(e, t, n) {
    var r = Ot(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (ad(e))
        ld(t, i);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
        a !== null))
            try {
                var l = t.lastRenderedState
                  , o = a(l, n);
                if (i.hasEagerState = !0,
                i.eagerState = o,
                He(o, l)) {
                    var s = t.interleaved;
                    s === null ? (i.next = i,
                    Ko(t)) : (i.next = s.next,
                    s.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Mf(e, t, i, r),
        n !== null && (i = me(),
        We(n, e, r, i),
        od(n, t, r))
    }
}
function ad(e) {
    var t = e.alternate;
    return e === Q || t !== null && t === Q
}
function ld(e, t) {
    or = Ki = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function od(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Lo(e, n)
    }
}
var Xi = {
    readContext: Le,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1
}
  , Ev = {
    readContext: Le,
    useCallback: function(e, t) {
        return Ye().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Le,
    useEffect: ku,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ci(4194308, 4, Jf.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ci(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ci(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ye();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ye();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = xv.bind(null, Q, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ye();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: wu,
    useDebugValue: rs,
    useDeferredValue: function(e) {
        return Ye().memoizedState = e
    },
    useTransition: function() {
        var e = wu(!1)
          , t = e[0];
        return e = kv.bind(null, e[1]),
        Ye().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Q
          , i = Ye();
        if (V) {
            if (n === void 0)
                throw Error(x(407));
            n = n()
        } else {
            if (n = t(),
            ae === null)
                throw Error(x(349));
            Zt & 30 || Vf(r, t, n)
        }
        i.memoizedState = n;
        var a = {
            value: n,
            getSnapshot: t
        };
        return i.queue = a,
        ku(Qf.bind(null, r, a, e), [e]),
        r.flags |= 2048,
        Or(9, Yf.bind(null, r, a, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ye()
          , t = ae.identifierPrefix;
        if (V) {
            var n = et
              , r = Je;
            n = (r & ~(1 << 32 - Be(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = _r++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = wv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Cv = {
    readContext: Le,
    useCallback: td,
    useContext: Le,
    useEffect: ns,
    useImperativeHandle: ed,
    useInsertionEffect: Zf,
    useLayoutEffect: qf,
    useMemo: nd,
    useReducer: el,
    useRef: Gf,
    useState: function() {
        return el(Nr)
    },
    useDebugValue: rs,
    useDeferredValue: function(e) {
        var t = Re();
        return rd(t, ee.memoizedState, e)
    },
    useTransition: function() {
        var e = el(Nr)[0]
          , t = Re().memoizedState;
        return [e, t]
    },
    useMutableSource: Wf,
    useSyncExternalStore: Hf,
    useId: id,
    unstable_isNewReconciler: !1
}
  , Pv = {
    readContext: Le,
    useCallback: td,
    useContext: Le,
    useEffect: ns,
    useImperativeHandle: ed,
    useInsertionEffect: Zf,
    useLayoutEffect: qf,
    useMemo: nd,
    useReducer: tl,
    useRef: Gf,
    useState: function() {
        return tl(Nr)
    },
    useDebugValue: rs,
    useDeferredValue: function(e) {
        var t = Re();
        return ee === null ? t.memoizedState = e : rd(t, ee.memoizedState, e)
    },
    useTransition: function() {
        var e = tl(Nr)[0]
          , t = Re().memoizedState;
        return [e, t]
    },
    useMutableSource: Wf,
    useSyncExternalStore: Hf,
    useId: id,
    unstable_isNewReconciler: !1
};
function Ln(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Jp(r),
            r = r.return;
        while (r);
        var i = n
    } catch (a) {
        i = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function nl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Hl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var _v = typeof WeakMap == "function" ? WeakMap : Map;
function sd(e, t, n) {
    n = tt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Zi || (Zi = !0,
        eo = r),
        Hl(e, t)
    }
    ,
    n
}
function ud(e, t, n) {
    n = tt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Hl(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
        Hl(e, t),
        typeof r != "function" && (Nt === null ? Nt = new Set([this]) : Nt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function xu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new _v;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = Uv.bind(null, e, t, n),
    t.then(e, e))
}
function Su(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Eu(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tt(-1, 1),
    t.tag = 2,
    _t(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Nv = ut.ReactCurrentOwner
  , ye = !1;
function pe(e, t, n, r) {
    t.child = e === null ? $f(t, null, n, r) : zn(t, e.child, n, r)
}
function Cu(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return Pn(t, i),
    r = es(e, t, n, r, a, i),
    n = ts(),
    e !== null && !ye ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    at(e, t, i)) : (V && n && Bo(t),
    t.flags |= 1,
    pe(e, t, r, i),
    t.child)
}
function Pu(e, t, n, r, i) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" && !fs(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = a,
        cd(e, t, a, r, i)) : (e = Oi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (a = e.child,
    !(e.lanes & i)) {
        var l = a.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : kr,
        n(l, r) && e.ref === t.ref)
            return at(e, t, i)
    }
    return t.flags |= 1,
    e = Tt(a, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function cd(e, t, n, r, i) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (kr(a, r) && e.ref === t.ref)
            if (ye = !1,
            t.pendingProps = r = a,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (ye = !0);
            else
                return t.lanes = e.lanes,
                at(e, t, i)
    }
    return Vl(e, t, n, r, i)
}
function fd(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            U(gn, Ee),
            Ee |= n;
        else {
            if (!(n & 1073741824))
                return e = a !== null ? a.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                U(gn, Ee),
                Ee |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = a !== null ? a.baseLanes : n,
            U(gn, Ee),
            Ee |= r
        }
    else
        a !== null ? (r = a.baseLanes | n,
        t.memoizedState = null) : r = n,
        U(gn, Ee),
        Ee |= r;
    return pe(e, t, i, n),
    t.child
}
function dd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Vl(e, t, n, r, i) {
    var a = ke(n) ? Xt : de.current;
    return a = jn(t, a),
    Pn(t, i),
    n = es(e, t, n, r, a, i),
    r = ts(),
    e !== null && !ye ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    at(e, t, i)) : (V && r && Bo(t),
    t.flags |= 1,
    pe(e, t, n, i),
    t.child)
}
function _u(e, t, n, r, i) {
    if (ke(n)) {
        var a = !0;
        $i(t)
    } else
        a = !1;
    if (Pn(t, i),
    t.stateNode === null)
        Pi(e, t),
        Df(t, n, r),
        Wl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , o = t.memoizedProps;
        l.props = o;
        var s = l.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Le(u) : (u = ke(n) ? Xt : de.current,
        u = jn(t, u));
        var f = n.getDerivedStateFromProps
          , d = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== r || s !== u) && gu(t, l, r, u),
        mt = !1;
        var v = t.memoizedState;
        l.state = v,
        Yi(t, r, l, i),
        s = t.memoizedState,
        o !== r || v !== s || we.current || mt ? (typeof f == "function" && (Bl(t, n, f, r),
        s = t.memoizedState),
        (o = mt || hu(t, n, o, r, v, s, u)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        l.props = r,
        l.state = s,
        l.context = u,
        r = o) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        Ff(e, t),
        o = t.memoizedProps,
        u = t.type === t.elementType ? o : be(t.type, o),
        l.props = u,
        d = t.pendingProps,
        v = l.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = Le(s) : (s = ke(n) ? Xt : de.current,
        s = jn(t, s));
        var g = n.getDerivedStateFromProps;
        (f = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== d || v !== s) && gu(t, l, r, s),
        mt = !1,
        v = t.memoizedState,
        l.state = v,
        Yi(t, r, l, i);
        var w = t.memoizedState;
        o !== d || v !== w || we.current || mt ? (typeof g == "function" && (Bl(t, n, g, r),
        w = t.memoizedState),
        (u = mt || hu(t, n, u, r, v, w, s) || !1) ? (f || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, s),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, s)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        l.props = r,
        l.state = w,
        l.context = s,
        r = u) : (typeof l.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Yl(e, t, n, r, a, i)
}
function Yl(e, t, n, r, i, a) {
    dd(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return i && fu(t, n, !1),
        at(e, t, a);
    r = t.stateNode,
    Nv.current = t;
    var o = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = zn(t, e.child, null, a),
    t.child = zn(t, null, o, a)) : pe(e, t, o, a),
    t.memoizedState = r.state,
    i && fu(t, n, !0),
    t.child
}
function pd(e) {
    var t = e.stateNode;
    t.pendingContext ? cu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cu(e, t.context, !1),
    Go(e, t.containerInfo)
}
function Nu(e, t, n, r, i) {
    return In(),
    Ho(i),
    t.flags |= 256,
    pe(e, t, n, r),
    t.child
}
var Ql = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Kl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function md(e, t, n) {
    var r = t.pendingProps, i = Y.current, a = !1, l = (t.flags & 128) !== 0, o;
    if ((o = l) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o ? (a = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    U(Y, i & 1),
    e === null)
        return Ul(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        a ? (r = t.mode,
        a = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && a !== null ? (a.childLanes = 0,
        a.pendingProps = l) : a = wa(l, r, 0, null),
        e = Kt(e, r, n, null),
        a.return = t,
        e.return = t,
        a.sibling = e,
        t.child = a,
        t.child.memoizedState = Kl(n),
        t.memoizedState = Ql,
        e) : is(t, l));
    if (i = e.memoizedState,
    i !== null && (o = i.dehydrated,
    o !== null))
        return Ov(e, t, l, r, o, i, n);
    if (a) {
        a = r.fallback,
        l = t.mode,
        i = e.child,
        o = i.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = Tt(i, s),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        o !== null ? a = Tt(o, a) : (a = Kt(a, l, n, null),
        a.flags |= 2),
        a.return = t,
        r.return = t,
        r.sibling = a,
        t.child = r,
        r = a,
        a = t.child,
        l = e.child.memoizedState,
        l = l === null ? Kl(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        a.memoizedState = l,
        a.childLanes = e.childLanes & ~n,
        t.memoizedState = Ql,
        r
    }
    return a = e.child,
    e = a.sibling,
    r = Tt(a, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function is(e, t) {
    return t = wa({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ii(e, t, n, r) {
    return r !== null && Ho(r),
    zn(t, e.child, null, n),
    e = is(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Ov(e, t, n, r, i, a, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = nl(Error(x(422))),
        ii(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (a = r.fallback,
        i = t.mode,
        r = wa({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        a = Kt(a, i, l, null),
        a.flags |= 2,
        r.return = t,
        a.return = t,
        r.sibling = a,
        t.child = r,
        t.mode & 1 && zn(t, e.child, null, l),
        t.child.memoizedState = Kl(l),
        t.memoizedState = Ql,
        a);
    if (!(t.mode & 1))
        return ii(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var o = r.dgst;
        return r = o,
        a = Error(x(419)),
        r = nl(a, r, void 0),
        ii(e, t, l, r)
    }
    if (o = (l & e.childLanes) !== 0,
    ye || o) {
        if (r = ae,
        r !== null) {
            switch (l & -l) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
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
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i,
            i !== 0 && i !== a.retryLane && (a.retryLane = i,
            it(e, i),
            We(r, e, i, -1))
        }
        return cs(),
        r = nl(Error(x(421))),
        ii(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = $v.bind(null, e),
    i._reactRetry = t,
    null) : (e = a.treeContext,
    Ce = Pt(i.nextSibling),
    Pe = t,
    V = !0,
    Ue = null,
    e !== null && (je[Ie++] = Je,
    je[Ie++] = et,
    je[Ie++] = Gt,
    Je = e.id,
    et = e.overflow,
    Gt = t),
    t = is(t, r.children),
    t.flags |= 4096,
    t)
}
function Ou(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    $l(e.return, t, n)
}
function rl(e, t, n, r, i) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (a.isBackwards = t,
    a.rendering = null,
    a.renderingStartTime = 0,
    a.last = r,
    a.tail = n,
    a.tailMode = i)
}
function vd(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , a = r.tail;
    if (pe(e, t, r.children, n),
    r = Y.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Ou(e, n, t);
                else if (e.tag === 19)
                    Ou(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (U(Y, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Qi(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            rl(t, !1, i, n, a);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Qi(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            rl(t, !0, n, null, a);
            break;
        case "together":
            rl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Pi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function at(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    qt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(x(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Tt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Tt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Tv(e, t, n) {
    switch (t.tag) {
    case 3:
        pd(t),
        In();
        break;
    case 5:
        Bf(t);
        break;
    case 1:
        ke(t.type) && $i(t);
        break;
    case 4:
        Go(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        U(Hi, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (U(Y, Y.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? md(e, t, n) : (U(Y, Y.current & 1),
            e = at(e, t, n),
            e !== null ? e.sibling : null);
        U(Y, Y.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return vd(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        U(Y, Y.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        fd(e, t, n)
    }
    return at(e, t, n)
}
var hd, Xl, gd, yd;
hd = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Xl = function() {}
;
gd = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Ht(Ge.current);
        var a = null;
        switch (n) {
        case "input":
            i = gl(e, i),
            r = gl(e, r),
            a = [];
            break;
        case "select":
            i = K({}, i, {
                value: void 0
            }),
            r = K({}, r, {
                value: void 0
            }),
            a = [];
            break;
        case "textarea":
            i = kl(e, i),
            r = kl(e, r),
            a = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Di)
        }
        Sl(n, r);
        var l;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var o = i[u];
                    for (l in o)
                        o.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (pr.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (o = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && s !== o && (s != null || o != null))
                if (u === "style")
                    if (o) {
                        for (l in o)
                            !o.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in s)
                            s.hasOwnProperty(l) && o[l] !== s[l] && (n || (n = {}),
                            n[l] = s[l])
                    } else
                        n || (a || (a = []),
                        a.push(u, n)),
                        n = s;
                else
                    u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    o = o ? o.__html : void 0,
                    s != null && o !== s && (a = a || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (a = a || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (pr.hasOwnProperty(u) ? (s != null && u === "onScroll" && $("scroll", e),
                    a || o === s || (a = [])) : (a = a || []).push(u, s))
        }
        n && (a = a || []).push("style", n);
        var u = a;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
yd = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Xn(e, t) {
    if (!V)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ce(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function jv(e, t, n) {
    var r = t.pendingProps;
    switch (Wo(t),
    t.tag) {
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
        return ce(t),
        null;
    case 1:
        return ke(t.type) && Ui(),
        ce(t),
        null;
    case 3:
        return r = t.stateNode,
        An(),
        W(we),
        W(de),
        qo(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ue !== null && (ro(Ue),
        Ue = null))),
        Xl(e, t),
        ce(t),
        null;
    case 5:
        Zo(t);
        var i = Ht(Pr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            gd(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(x(166));
                return ce(t),
                null
            }
            if (e = Ht(Ge.current),
            ni(t)) {
                r = t.stateNode,
                n = t.type;
                var a = t.memoizedProps;
                switch (r[Qe] = t,
                r[Er] = a,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    $("cancel", r),
                    $("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    $("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < er.length; i++)
                        $(er[i], r);
                    break;
                case "source":
                    $("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    $("error", r),
                    $("load", r);
                    break;
                case "details":
                    $("toggle", r);
                    break;
                case "input":
                    Fs(r, a),
                    $("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!a.multiple
                    },
                    $("invalid", r);
                    break;
                case "textarea":
                    Ds(r, a),
                    $("invalid", r)
                }
                Sl(n, a),
                i = null;
                for (var l in a)
                    if (a.hasOwnProperty(l)) {
                        var o = a[l];
                        l === "children" ? typeof o == "string" ? r.textContent !== o && (a.suppressHydrationWarning !== !0 && ti(r.textContent, o, e),
                        i = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (a.suppressHydrationWarning !== !0 && ti(r.textContent, o, e),
                        i = ["children", "" + o]) : pr.hasOwnProperty(l) && o != null && l === "onScroll" && $("scroll", r)
                    }
                switch (n) {
                case "input":
                    Qr(r),
                    bs(r, a, !0);
                    break;
                case "textarea":
                    Qr(r),
                    Us(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof a.onClick == "function" && (r.onclick = Di)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Hc(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[Qe] = t,
                e[Er] = r,
                hd(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = El(n, r),
                    n) {
                    case "dialog":
                        $("cancel", e),
                        $("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        $("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < er.length; i++)
                            $(er[i], e);
                        i = r;
                        break;
                    case "source":
                        $("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        $("error", e),
                        $("load", e),
                        i = r;
                        break;
                    case "details":
                        $("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Fs(e, r),
                        i = gl(e, r),
                        $("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = K({}, r, {
                            value: void 0
                        }),
                        $("invalid", e);
                        break;
                    case "textarea":
                        Ds(e, r),
                        i = kl(e, r),
                        $("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Sl(n, i),
                    o = i;
                    for (a in o)
                        if (o.hasOwnProperty(a)) {
                            var s = o[a];
                            a === "style" ? Qc(e, s) : a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && Vc(e, s)) : a === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && mr(e, s) : typeof s == "number" && mr(e, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (pr.hasOwnProperty(a) ? s != null && a === "onScroll" && $("scroll", e) : s != null && Oo(e, a, s, l))
                        }
                    switch (n) {
                    case "input":
                        Qr(e),
                        bs(e, r, !1);
                        break;
                    case "textarea":
                        Qr(e),
                        Us(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + jt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        a = r.value,
                        a != null ? xn(e, !!r.multiple, a, !1) : r.defaultValue != null && xn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Di)
                    }
                    switch (n) {
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ce(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            yd(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(x(166));
            if (n = Ht(Pr.current),
            Ht(Ge.current),
            ni(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Qe] = t,
                (a = r.nodeValue !== n) && (e = Pe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ti(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ti(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                a && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Qe] = t,
                t.stateNode = r
        }
        return ce(t),
        null;
    case 13:
        if (W(Y),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (V && Ce !== null && t.mode & 1 && !(t.flags & 128))
                Rf(),
                In(),
                t.flags |= 98560,
                a = !1;
            else if (a = ni(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!a)
                        throw Error(x(318));
                    if (a = t.memoizedState,
                    a = a !== null ? a.dehydrated : null,
                    !a)
                        throw Error(x(317));
                    a[Qe] = t
                } else
                    In(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ce(t),
                a = !1
            } else
                Ue !== null && (ro(Ue),
                Ue = null),
                a = !0;
            if (!a)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Y.current & 1 ? te === 0 && (te = 3) : cs())),
        t.updateQueue !== null && (t.flags |= 4),
        ce(t),
        null);
    case 4:
        return An(),
        Xl(e, t),
        e === null && xr(t.stateNode.containerInfo),
        ce(t),
        null;
    case 10:
        return Qo(t.type._context),
        ce(t),
        null;
    case 17:
        return ke(t.type) && Ui(),
        ce(t),
        null;
    case 19:
        if (W(Y),
        a = t.memoizedState,
        a === null)
            return ce(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = a.rendering,
        l === null)
            if (r)
                Xn(a, !1);
            else {
                if (te !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = Qi(e),
                        l !== null) {
                            for (t.flags |= 128,
                            Xn(a, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                a = n,
                                e = r,
                                a.flags &= 14680066,
                                l = a.alternate,
                                l === null ? (a.childLanes = 0,
                                a.lanes = e,
                                a.child = null,
                                a.subtreeFlags = 0,
                                a.memoizedProps = null,
                                a.memoizedState = null,
                                a.updateQueue = null,
                                a.dependencies = null,
                                a.stateNode = null) : (a.childLanes = l.childLanes,
                                a.lanes = l.lanes,
                                a.child = l.child,
                                a.subtreeFlags = 0,
                                a.deletions = null,
                                a.memoizedProps = l.memoizedProps,
                                a.memoizedState = l.memoizedState,
                                a.updateQueue = l.updateQueue,
                                a.type = l.type,
                                e = l.dependencies,
                                a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return U(Y, Y.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                a.tail !== null && q() > Rn && (t.flags |= 128,
                r = !0,
                Xn(a, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Qi(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Xn(a, !0),
                    a.tail === null && a.tailMode === "hidden" && !l.alternate && !V)
                        return ce(t),
                        null
                } else
                    2 * q() - a.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Xn(a, !1),
                    t.lanes = 4194304);
            a.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = a.last,
            n !== null ? n.sibling = l : t.child = l,
            a.last = l)
        }
        return a.tail !== null ? (t = a.tail,
        a.rendering = t,
        a.tail = t.sibling,
        a.renderingStartTime = q(),
        t.sibling = null,
        n = Y.current,
        U(Y, r ? n & 1 | 2 : n & 1),
        t) : (ce(t),
        null);
    case 22:
    case 23:
        return us(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ee & 1073741824 && (ce(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ce(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(x(156, t.tag))
}
function Iv(e, t) {
    switch (Wo(t),
    t.tag) {
    case 1:
        return ke(t.type) && Ui(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return An(),
        W(we),
        W(de),
        qo(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Zo(t),
        null;
    case 13:
        if (W(Y),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(x(340));
            In()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return W(Y),
        null;
    case 4:
        return An(),
        null;
    case 10:
        return Qo(t.type._context),
        null;
    case 22:
    case 23:
        return us(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ai = !1
  , fe = !1
  , zv = typeof WeakSet == "function" ? WeakSet : Set
  , P = null;
function hn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                X(e, t, r)
            }
        else
            n.current = null
}
function Gl(e, t, n) {
    try {
        n()
    } catch (r) {
        X(e, t, r)
    }
}
var Tu = !1;
function Av(e, t) {
    if (Al = Mi,
    e = Sf(),
    $o(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , a = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        a.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , o = -1
                      , s = -1
                      , u = 0
                      , f = 0
                      , d = e
                      , v = null;
                    t: for (; ; ) {
                        for (var g; d !== n || i !== 0 && d.nodeType !== 3 || (o = l + i),
                        d !== a || r !== 0 && d.nodeType !== 3 || (s = l + r),
                        d.nodeType === 3 && (l += d.nodeValue.length),
                        (g = d.firstChild) !== null; )
                            v = d,
                            d = g;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (v === n && ++u === i && (o = l),
                            v === a && ++f === r && (s = l),
                            (g = d.nextSibling) !== null)
                                break;
                            d = v,
                            v = d.parentNode
                        }
                        d = g
                    }
                    n = o === -1 || s === -1 ? null : {
                        start: o,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ll = {
        focusedElem: e,
        selectionRange: n
    },
    Mi = !1,
    P = t; P !== null; )
        if (t = P,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            P = e;
        else
            for (; P !== null; ) {
                t = P;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps
                                  , S = w.memoizedState
                                  , p = t.stateNode
                                  , c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? k : be(t.type, k), S);
                                p.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(x(163))
                        }
                } catch (y) {
                    X(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    P = e;
                    break
                }
                P = t.return
            }
    return w = Tu,
    Tu = !1,
    w
}
function sr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var a = i.destroy;
                i.destroy = void 0,
                a !== void 0 && Gl(t, n, a)
            }
            i = i.next
        } while (i !== r)
    }
}
function ga(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Zl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function wd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    wd(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Qe],
    delete t[Er],
    delete t[Fl],
    delete t[vv],
    delete t[hv])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function kd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ju(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || kd(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ql(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Di));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ql(e, t, n),
        e = e.sibling; e !== null; )
            ql(e, t, n),
            e = e.sibling
}
function Jl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Jl(e, t, n),
        e = e.sibling; e !== null; )
            Jl(e, t, n),
            e = e.sibling
}
var le = null
  , De = !1;
function ft(e, t, n) {
    for (n = n.child; n !== null; )
        xd(e, t, n),
        n = n.sibling
}
function xd(e, t, n) {
    if (Xe && typeof Xe.onCommitFiberUnmount == "function")
        try {
            Xe.onCommitFiberUnmount(ua, n)
        } catch {}
    switch (n.tag) {
    case 5:
        fe || hn(n, t);
    case 6:
        var r = le
          , i = De;
        le = null,
        ft(e, t, n),
        le = r,
        De = i,
        le !== null && (De ? (e = le,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
        break;
    case 18:
        le !== null && (De ? (e = le,
        n = n.stateNode,
        e.nodeType === 8 ? Ga(e.parentNode, n) : e.nodeType === 1 && Ga(e, n),
        yr(e)) : Ga(le, n.stateNode));
        break;
    case 4:
        r = le,
        i = De,
        le = n.stateNode.containerInfo,
        De = !0,
        ft(e, t, n),
        le = r,
        De = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!fe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var a = i
                  , l = a.destroy;
                a = a.tag,
                l !== void 0 && (a & 2 || a & 4) && Gl(n, t, l),
                i = i.next
            } while (i !== r)
        }
        ft(e, t, n);
        break;
    case 1:
        if (!fe && (hn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (o) {
                X(n, t, o)
            }
        ft(e, t, n);
        break;
    case 21:
        ft(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (fe = (r = fe) || n.memoizedState !== null,
        ft(e, t, n),
        fe = r) : ft(e, t, n);
        break;
    default:
        ft(e, t, n)
    }
}
function Iu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new zv),
        t.forEach(function(r) {
            var i = Bv.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Fe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var a = e
                  , l = t
                  , o = l;
                e: for (; o !== null; ) {
                    switch (o.tag) {
                    case 5:
                        le = o.stateNode,
                        De = !1;
                        break e;
                    case 3:
                        le = o.stateNode.containerInfo,
                        De = !0;
                        break e;
                    case 4:
                        le = o.stateNode.containerInfo,
                        De = !0;
                        break e
                    }
                    o = o.return
                }
                if (le === null)
                    throw Error(x(160));
                xd(a, l, i),
                le = null,
                De = !1;
                var s = i.alternate;
                s !== null && (s.return = null),
                i.return = null
            } catch (u) {
                X(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Sd(t, e),
            t = t.sibling
}
function Sd(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Fe(t, e),
        Ve(e),
        r & 4) {
            try {
                sr(3, e, e.return),
                ga(3, e)
            } catch (k) {
                X(e, e.return, k)
            }
            try {
                sr(5, e, e.return)
            } catch (k) {
                X(e, e.return, k)
            }
        }
        break;
    case 1:
        Fe(t, e),
        Ve(e),
        r & 512 && n !== null && hn(n, n.return);
        break;
    case 5:
        if (Fe(t, e),
        Ve(e),
        r & 512 && n !== null && hn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                mr(i, "")
            } catch (k) {
                X(e, e.return, k)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var a = e.memoizedProps
              , l = n !== null ? n.memoizedProps : a
              , o = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    o === "input" && a.type === "radio" && a.name != null && Bc(i, a),
                    El(o, l);
                    var u = El(o, a);
                    for (l = 0; l < s.length; l += 2) {
                        var f = s[l]
                          , d = s[l + 1];
                        f === "style" ? Qc(i, d) : f === "dangerouslySetInnerHTML" ? Vc(i, d) : f === "children" ? mr(i, d) : Oo(i, f, d, u)
                    }
                    switch (o) {
                    case "input":
                        yl(i, a);
                        break;
                    case "textarea":
                        Wc(i, a);
                        break;
                    case "select":
                        var v = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!a.multiple;
                        var g = a.value;
                        g != null ? xn(i, !!a.multiple, g, !1) : v !== !!a.multiple && (a.defaultValue != null ? xn(i, !!a.multiple, a.defaultValue, !0) : xn(i, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    i[Er] = a
                } catch (k) {
                    X(e, e.return, k)
                }
        }
        break;
    case 6:
        if (Fe(t, e),
        Ve(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(x(162));
            i = e.stateNode,
            a = e.memoizedProps;
            try {
                i.nodeValue = a
            } catch (k) {
                X(e, e.return, k)
            }
        }
        break;
    case 3:
        if (Fe(t, e),
        Ve(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                yr(t.containerInfo)
            } catch (k) {
                X(e, e.return, k)
            }
        break;
    case 4:
        Fe(t, e),
        Ve(e);
        break;
    case 13:
        Fe(t, e),
        Ve(e),
        i = e.child,
        i.flags & 8192 && (a = i.memoizedState !== null,
        i.stateNode.isHidden = a,
        !a || i.alternate !== null && i.alternate.memoizedState !== null || (os = q())),
        r & 4 && Iu(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (fe = (u = fe) || f,
        Fe(t, e),
        fe = u) : Fe(t, e),
        Ve(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
                for (P = e,
                f = e.child; f !== null; ) {
                    for (d = P = f; P !== null; ) {
                        switch (v = P,
                        g = v.child,
                        v.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            sr(4, v, v.return);
                            break;
                        case 1:
                            hn(v, v.return);
                            var w = v.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = v,
                                n = v.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (k) {
                                    X(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            hn(v, v.return);
                            break;
                        case 22:
                            if (v.memoizedState !== null) {
                                Au(d);
                                continue
                            }
                        }
                        g !== null ? (g.return = v,
                        P = g) : Au(d)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (f === null) {
                        f = d;
                        try {
                            i = d.stateNode,
                            u ? (a = i.style,
                            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (o = d.stateNode,
                            s = d.memoizedProps.style,
                            l = s != null && s.hasOwnProperty("display") ? s.display : null,
                            o.style.display = Yc("display", l))
                        } catch (k) {
                            X(e, e.return, k)
                        }
                    }
                } else if (d.tag === 6) {
                    if (f === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (k) {
                            X(e, e.return, k)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    f === d && (f = null),
                    d = d.return
                }
                f === d && (f = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Fe(t, e),
        Ve(e),
        r & 4 && Iu(e);
        break;
    case 21:
        break;
    default:
        Fe(t, e),
        Ve(e)
    }
}
function Ve(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (kd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(x(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (mr(i, ""),
                r.flags &= -33);
                var a = ju(e);
                Jl(e, a, i);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , o = ju(e);
                ql(e, o, l);
                break;
            default:
                throw Error(x(161))
            }
        } catch (s) {
            X(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Lv(e, t, n) {
    P = e,
    Ed(e)
}
function Ed(e, t, n) {
    for (var r = (e.mode & 1) !== 0; P !== null; ) {
        var i = P
          , a = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || ai;
            if (!l) {
                var o = i.alternate
                  , s = o !== null && o.memoizedState !== null || fe;
                o = ai;
                var u = fe;
                if (ai = l,
                (fe = s) && !u)
                    for (P = i; P !== null; )
                        l = P,
                        s = l.child,
                        l.tag === 22 && l.memoizedState !== null ? Lu(i) : s !== null ? (s.return = l,
                        P = s) : Lu(i);
                for (; a !== null; )
                    P = a,
                    Ed(a),
                    a = a.sibling;
                P = i,
                ai = o,
                fe = u
            }
            zu(e)
        } else
            i.subtreeFlags & 8772 && a !== null ? (a.return = i,
            P = a) : zu(e)
    }
}
function zu(e) {
    for (; P !== null; ) {
        var t = P;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        fe || ga(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !fe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && vu(t, a, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            vu(t, l, n)
                        }
                        break;
                    case 5:
                        var o = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = o;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
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
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var d = f.dehydrated;
                                    d !== null && yr(d)
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
                        throw Error(x(163))
                    }
                fe || t.flags & 512 && Zl(t)
            } catch (v) {
                X(t, t.return, v)
            }
        }
        if (t === e) {
            P = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            P = n;
            break
        }
        P = t.return
    }
}
function Au(e) {
    for (; P !== null; ) {
        var t = P;
        if (t === e) {
            P = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            P = n;
            break
        }
        P = t.return
    }
}
function Lu(e) {
    for (; P !== null; ) {
        var t = P;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ga(4, t)
                } catch (s) {
                    X(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        X(t, i, s)
                    }
                }
                var a = t.return;
                try {
                    Zl(t)
                } catch (s) {
                    X(t, a, s)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    Zl(t)
                } catch (s) {
                    X(t, l, s)
                }
            }
        } catch (s) {
            X(t, t.return, s)
        }
        if (t === e) {
            P = null;
            break
        }
        var o = t.sibling;
        if (o !== null) {
            o.return = t.return,
            P = o;
            break
        }
        P = t.return
    }
}
var Rv = Math.ceil
  , Gi = ut.ReactCurrentDispatcher
  , as = ut.ReactCurrentOwner
  , Ae = ut.ReactCurrentBatchConfig
  , F = 0
  , ae = null
  , J = null
  , oe = 0
  , Ee = 0
  , gn = Mt(0)
  , te = 0
  , Tr = null
  , qt = 0
  , ya = 0
  , ls = 0
  , ur = null
  , ge = null
  , os = 0
  , Rn = 1 / 0
  , Ze = null
  , Zi = !1
  , eo = null
  , Nt = null
  , li = !1
  , yt = null
  , qi = 0
  , cr = 0
  , to = null
  , _i = -1
  , Ni = 0;
function me() {
    return F & 6 ? q() : _i !== -1 ? _i : _i = q()
}
function Ot(e) {
    return e.mode & 1 ? F & 2 && oe !== 0 ? oe & -oe : yv.transition !== null ? (Ni === 0 && (Ni = lf()),
    Ni) : (e = D,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : pf(e.type)),
    e) : 1
}
function We(e, t, n, r) {
    if (50 < cr)
        throw cr = 0,
        to = null,
        Error(x(185));
    Mr(e, n, r),
    (!(F & 2) || e !== ae) && (e === ae && (!(F & 2) && (ya |= n),
    te === 4 && ht(e, oe)),
    xe(e, r),
    n === 1 && F === 0 && !(t.mode & 1) && (Rn = q() + 500,
    ma && Ft()))
}
function xe(e, t) {
    var n = e.callbackNode;
    ym(e, t);
    var r = Ri(e, e === ae ? oe : 0);
    if (r === 0)
        n !== null && Ws(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Ws(n),
        t === 1)
            e.tag === 0 ? gv(Ru.bind(null, e)) : zf(Ru.bind(null, e)),
            pv(function() {
                !(F & 6) && Ft()
            }),
            n = null;
        else {
            switch (of(r)) {
            case 1:
                n = Ao;
                break;
            case 4:
                n = rf;
                break;
            case 16:
                n = Li;
                break;
            case 536870912:
                n = af;
                break;
            default:
                n = Li
            }
            n = Id(n, Cd.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Cd(e, t) {
    if (_i = -1,
    Ni = 0,
    F & 6)
        throw Error(x(327));
    var n = e.callbackNode;
    if (_n() && e.callbackNode !== n)
        return null;
    var r = Ri(e, e === ae ? oe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ji(e, r);
    else {
        t = r;
        var i = F;
        F |= 2;
        var a = _d();
        (ae !== e || oe !== t) && (Ze = null,
        Rn = q() + 500,
        Qt(e, t));
        do
            try {
                bv();
                break
            } catch (o) {
                Pd(e, o)
            }
        while (!0);
        Yo(),
        Gi.current = a,
        F = i,
        J !== null ? t = 0 : (ae = null,
        oe = 0,
        t = te)
    }
    if (t !== 0) {
        if (t === 2 && (i = Ol(e),
        i !== 0 && (r = i,
        t = no(e, i))),
        t === 1)
            throw n = Tr,
            Qt(e, 0),
            ht(e, r),
            xe(e, q()),
            n;
        if (t === 6)
            ht(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !Mv(i) && (t = Ji(e, r),
            t === 2 && (a = Ol(e),
            a !== 0 && (r = a,
            t = no(e, a))),
            t === 1))
                throw n = Tr,
                Qt(e, 0),
                ht(e, r),
                xe(e, q()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(x(345));
            case 2:
                $t(e, ge, Ze);
                break;
            case 3:
                if (ht(e, r),
                (r & 130023424) === r && (t = os + 500 - q(),
                10 < t)) {
                    if (Ri(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        me(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Ml($t.bind(null, e, ge, Ze), t);
                    break
                }
                $t(e, ge, Ze);
                break;
            case 4:
                if (ht(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var l = 31 - Be(r);
                    a = 1 << l,
                    l = t[l],
                    l > i && (i = l),
                    r &= ~a
                }
                if (r = i,
                r = q() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Rv(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ml($t.bind(null, e, ge, Ze), r);
                    break
                }
                $t(e, ge, Ze);
                break;
            case 5:
                $t(e, ge, Ze);
                break;
            default:
                throw Error(x(329))
            }
        }
    }
    return xe(e, q()),
    e.callbackNode === n ? Cd.bind(null, e) : null
}
function no(e, t) {
    var n = ur;
    return e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    e = Ji(e, t),
    e !== 2 && (t = ge,
    ge = n,
    t !== null && ro(t)),
    e
}
function ro(e) {
    ge === null ? ge = e : ge.push.apply(ge, e)
}
function Mv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , a = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!He(a(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function ht(e, t) {
    for (t &= ~ls,
    t &= ~ya,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Be(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Ru(e) {
    if (F & 6)
        throw Error(x(327));
    _n();
    var t = Ri(e, 0);
    if (!(t & 1))
        return xe(e, q()),
        null;
    var n = Ji(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ol(e);
        r !== 0 && (t = r,
        n = no(e, r))
    }
    if (n === 1)
        throw n = Tr,
        Qt(e, 0),
        ht(e, t),
        xe(e, q()),
        n;
    if (n === 6)
        throw Error(x(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    $t(e, ge, Ze),
    xe(e, q()),
    null
}
function ss(e, t) {
    var n = F;
    F |= 1;
    try {
        return e(t)
    } finally {
        F = n,
        F === 0 && (Rn = q() + 500,
        ma && Ft())
    }
}
function Jt(e) {
    yt !== null && yt.tag === 0 && !(F & 6) && _n();
    var t = F;
    F |= 1;
    var n = Ae.transition
      , r = D;
    try {
        if (Ae.transition = null,
        D = 1,
        e)
            return e()
    } finally {
        D = r,
        Ae.transition = n,
        F = t,
        !(F & 6) && Ft()
    }
}
function us() {
    Ee = gn.current,
    W(gn)
}
function Qt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    dv(n)),
    J !== null)
        for (n = J.return; n !== null; ) {
            var r = n;
            switch (Wo(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ui();
                break;
            case 3:
                An(),
                W(we),
                W(de),
                qo();
                break;
            case 5:
                Zo(r);
                break;
            case 4:
                An();
                break;
            case 13:
                W(Y);
                break;
            case 19:
                W(Y);
                break;
            case 10:
                Qo(r.type._context);
                break;
            case 22:
            case 23:
                us()
            }
            n = n.return
        }
    if (ae = e,
    J = e = Tt(e.current, null),
    oe = Ee = t,
    te = 0,
    Tr = null,
    ls = ya = qt = 0,
    ge = ur = null,
    Wt !== null) {
        for (t = 0; t < Wt.length; t++)
            if (n = Wt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , a = n.pending;
                if (a !== null) {
                    var l = a.next;
                    a.next = i,
                    r.next = l
                }
                n.pending = r
            }
        Wt = null
    }
    return e
}
function Pd(e, t) {
    do {
        var n = J;
        try {
            if (Yo(),
            Ei.current = Xi,
            Ki) {
                for (var r = Q.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Ki = !1
            }
            if (Zt = 0,
            ie = ee = Q = null,
            or = !1,
            _r = 0,
            as.current = null,
            n === null || n.return === null) {
                te = 1,
                Tr = t,
                J = null;
                break
            }
            e: {
                var a = e
                  , l = n.return
                  , o = n
                  , s = t;
                if (t = oe,
                o.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s
                      , f = o
                      , d = f.tag;
                    if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var v = f.alternate;
                        v ? (f.updateQueue = v.updateQueue,
                        f.memoizedState = v.memoizedState,
                        f.lanes = v.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var g = Su(l);
                    if (g !== null) {
                        g.flags &= -257,
                        Eu(g, l, o, a, t),
                        g.mode & 1 && xu(a, u, t),
                        t = g,
                        s = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(s),
                            t.updateQueue = k
                        } else
                            w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            xu(a, u, t),
                            cs();
                            break e
                        }
                        s = Error(x(426))
                    }
                } else if (V && o.mode & 1) {
                    var S = Su(l);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        Eu(S, l, o, a, t),
                        Ho(Ln(s, o));
                        break e
                    }
                }
                a = s = Ln(s, o),
                te !== 4 && (te = 2),
                ur === null ? ur = [a] : ur.push(a),
                a = l;
                do {
                    switch (a.tag) {
                    case 3:
                        a.flags |= 65536,
                        t &= -t,
                        a.lanes |= t;
                        var p = sd(a, s, t);
                        mu(a, p);
                        break e;
                    case 1:
                        o = s;
                        var c = a.type
                          , m = a.stateNode;
                        if (!(a.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Nt === null || !Nt.has(m)))) {
                            a.flags |= 65536,
                            t &= -t,
                            a.lanes |= t;
                            var y = ud(a, o, t);
                            mu(a, y);
                            break e
                        }
                    }
                    a = a.return
                } while (a !== null)
            }
            Od(n)
        } catch (E) {
            t = E,
            J === n && n !== null && (J = n = n.return);
            continue
        }
        break
    } while (!0)
}
function _d() {
    var e = Gi.current;
    return Gi.current = Xi,
    e === null ? Xi : e
}
function cs() {
    (te === 0 || te === 3 || te === 2) && (te = 4),
    ae === null || !(qt & 268435455) && !(ya & 268435455) || ht(ae, oe)
}
function Ji(e, t) {
    var n = F;
    F |= 2;
    var r = _d();
    (ae !== e || oe !== t) && (Ze = null,
    Qt(e, t));
    do
        try {
            Fv();
            break
        } catch (i) {
            Pd(e, i)
        }
    while (!0);
    if (Yo(),
    F = n,
    Gi.current = r,
    J !== null)
        throw Error(x(261));
    return ae = null,
    oe = 0,
    te
}
function Fv() {
    for (; J !== null; )
        Nd(J)
}
function bv() {
    for (; J !== null && !um(); )
        Nd(J)
}
function Nd(e) {
    var t = jd(e.alternate, e, Ee);
    e.memoizedProps = e.pendingProps,
    t === null ? Od(e) : J = t,
    as.current = null
}
function Od(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Iv(n, t),
            n !== null) {
                n.flags &= 32767,
                J = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                te = 6,
                J = null;
                return
            }
        } else if (n = jv(n, t, Ee),
        n !== null) {
            J = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            J = t;
            return
        }
        J = t = e
    } while (t !== null);
    te === 0 && (te = 5)
}
function $t(e, t, n) {
    var r = D
      , i = Ae.transition;
    try {
        Ae.transition = null,
        D = 1,
        Dv(e, t, n, r)
    } finally {
        Ae.transition = i,
        D = r
    }
    return null
}
function Dv(e, t, n, r) {
    do
        _n();
    while (yt !== null);
    if (F & 6)
        throw Error(x(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(x(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (wm(e, a),
    e === ae && (J = ae = null,
    oe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || li || (li = !0,
    Id(Li, function() {
        return _n(),
        null
    })),
    a = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || a) {
        a = Ae.transition,
        Ae.transition = null;
        var l = D;
        D = 1;
        var o = F;
        F |= 4,
        as.current = null,
        Av(e, n),
        Sd(n, e),
        av(Ll),
        Mi = !!Al,
        Ll = Al = null,
        e.current = n,
        Lv(n),
        cm(),
        F = o,
        D = l,
        Ae.transition = a
    } else
        e.current = n;
    if (li && (li = !1,
    yt = e,
    qi = i),
    a = e.pendingLanes,
    a === 0 && (Nt = null),
    pm(n.stateNode),
    xe(e, q()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Zi)
        throw Zi = !1,
        e = eo,
        eo = null,
        e;
    return qi & 1 && e.tag !== 0 && _n(),
    a = e.pendingLanes,
    a & 1 ? e === to ? cr++ : (cr = 0,
    to = e) : cr = 0,
    Ft(),
    null
}
function _n() {
    if (yt !== null) {
        var e = of(qi)
          , t = Ae.transition
          , n = D;
        try {
            if (Ae.transition = null,
            D = 16 > e ? 16 : e,
            yt === null)
                var r = !1;
            else {
                if (e = yt,
                yt = null,
                qi = 0,
                F & 6)
                    throw Error(x(331));
                var i = F;
                for (F |= 4,
                P = e.current; P !== null; ) {
                    var a = P
                      , l = a.child;
                    if (P.flags & 16) {
                        var o = a.deletions;
                        if (o !== null) {
                            for (var s = 0; s < o.length; s++) {
                                var u = o[s];
                                for (P = u; P !== null; ) {
                                    var f = P;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        sr(8, f, a)
                                    }
                                    var d = f.child;
                                    if (d !== null)
                                        d.return = f,
                                        P = d;
                                    else
                                        for (; P !== null; ) {
                                            f = P;
                                            var v = f.sibling
                                              , g = f.return;
                                            if (wd(f),
                                            f === u) {
                                                P = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = g,
                                                P = v;
                                                break
                                            }
                                            P = g
                                        }
                                }
                            }
                            var w = a.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var S = k.sibling;
                                        k.sibling = null,
                                        k = S
                                    } while (k !== null)
                                }
                            }
                            P = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && l !== null)
                        l.return = a,
                        P = l;
                    else
                        e: for (; P !== null; ) {
                            if (a = P,
                            a.flags & 2048)
                                switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    sr(9, a, a.return)
                                }
                            var p = a.sibling;
                            if (p !== null) {
                                p.return = a.return,
                                P = p;
                                break e
                            }
                            P = a.return
                        }
                }
                var c = e.current;
                for (P = c; P !== null; ) {
                    l = P;
                    var m = l.child;
                    if (l.subtreeFlags & 2064 && m !== null)
                        m.return = l,
                        P = m;
                    else
                        e: for (l = c; P !== null; ) {
                            if (o = P,
                            o.flags & 2048)
                                try {
                                    switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ga(9, o)
                                    }
                                } catch (E) {
                                    X(o, o.return, E)
                                }
                            if (o === l) {
                                P = null;
                                break e
                            }
                            var y = o.sibling;
                            if (y !== null) {
                                y.return = o.return,
                                P = y;
                                break e
                            }
                            P = o.return
                        }
                }
                if (F = i,
                Ft(),
                Xe && typeof Xe.onPostCommitFiberRoot == "function")
                    try {
                        Xe.onPostCommitFiberRoot(ua, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            D = n,
            Ae.transition = t
        }
    }
    return !1
}
function Mu(e, t, n) {
    t = Ln(n, t),
    t = sd(e, t, 1),
    e = _t(e, t, 1),
    t = me(),
    e !== null && (Mr(e, 1, t),
    xe(e, t))
}
function X(e, t, n) {
    if (e.tag === 3)
        Mu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Mu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nt === null || !Nt.has(r))) {
                    e = Ln(n, e),
                    e = ud(t, e, 1),
                    t = _t(t, e, 1),
                    e = me(),
                    t !== null && (Mr(t, 1, e),
                    xe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Uv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = me(),
    e.pingedLanes |= e.suspendedLanes & n,
    ae === e && (oe & n) === n && (te === 4 || te === 3 && (oe & 130023424) === oe && 500 > q() - os ? Qt(e, 0) : ls |= n),
    xe(e, t)
}
function Td(e, t) {
    t === 0 && (e.mode & 1 ? (t = Gr,
    Gr <<= 1,
    !(Gr & 130023424) && (Gr = 4194304)) : t = 1);
    var n = me();
    e = it(e, t),
    e !== null && (Mr(e, t, n),
    xe(e, n))
}
function $v(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Td(e, n)
}
function Bv(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(x(314))
    }
    r !== null && r.delete(t),
    Td(e, n)
}
var jd;
jd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || we.current)
            ye = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ye = !1,
                Tv(e, t, n);
            ye = !!(e.flags & 131072)
        }
    else
        ye = !1,
        V && t.flags & 1048576 && Af(t, Wi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Pi(e, t),
        e = t.pendingProps;
        var i = jn(t, de.current);
        Pn(t, n),
        i = es(null, t, r, e, i, n);
        var a = ts();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ke(r) ? (a = !0,
        $i(t)) : a = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Xo(t),
        i.updater = va,
        t.stateNode = i,
        i._reactInternals = t,
        Wl(t, r, e, n),
        t = Yl(null, t, r, !0, a, n)) : (t.tag = 0,
        V && a && Bo(t),
        pe(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Pi(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = Hv(r),
            e = be(r, e),
            i) {
            case 0:
                t = Vl(null, t, r, e, n);
                break e;
            case 1:
                t = _u(null, t, r, e, n);
                break e;
            case 11:
                t = Cu(null, t, r, e, n);
                break e;
            case 14:
                t = Pu(null, t, r, be(r.type, e), n);
                break e
            }
            throw Error(x(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        Vl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        _u(e, t, r, i, n);
    case 3:
        e: {
            if (pd(t),
            e === null)
                throw Error(x(387));
            r = t.pendingProps,
            a = t.memoizedState,
            i = a.element,
            Ff(e, t),
            Yi(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            a.isDehydrated)
                if (a = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = a,
                t.memoizedState = a,
                t.flags & 256) {
                    i = Ln(Error(x(423)), t),
                    t = Nu(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Ln(Error(x(424)), t),
                    t = Nu(e, t, r, n, i);
                    break e
                } else
                    for (Ce = Pt(t.stateNode.containerInfo.firstChild),
                    Pe = t,
                    V = !0,
                    Ue = null,
                    n = $f(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (In(),
                r === i) {
                    t = at(e, t, n);
                    break e
                }
                pe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Bf(t),
        e === null && Ul(t),
        r = t.type,
        i = t.pendingProps,
        a = e !== null ? e.memoizedProps : null,
        l = i.children,
        Rl(r, i) ? l = null : a !== null && Rl(r, a) && (t.flags |= 32),
        dd(e, t),
        pe(e, t, l, n),
        t.child;
    case 6:
        return e === null && Ul(t),
        null;
    case 13:
        return md(e, t, n);
    case 4:
        return Go(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = zn(t, null, r, n) : pe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        Cu(e, t, r, i, n);
    case 7:
        return pe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return pe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return pe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            a = t.memoizedProps,
            l = i.value,
            U(Hi, r._currentValue),
            r._currentValue = l,
            a !== null)
                if (He(a.value, l)) {
                    if (a.children === i.children && !we.current) {
                        t = at(e, t, n);
                        break e
                    }
                } else
                    for (a = t.child,
                    a !== null && (a.return = t); a !== null; ) {
                        var o = a.dependencies;
                        if (o !== null) {
                            l = a.child;
                            for (var s = o.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (a.tag === 1) {
                                        s = tt(-1, n & -n),
                                        s.tag = 2;
                                        var u = a.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? s.next = s : (s.next = f.next,
                                            f.next = s),
                                            u.pending = s
                                        }
                                    }
                                    a.lanes |= n,
                                    s = a.alternate,
                                    s !== null && (s.lanes |= n),
                                    $l(a.return, n, t),
                                    o.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (a.tag === 10)
                            l = a.type === t.type ? null : a.child;
                        else if (a.tag === 18) {
                            if (l = a.return,
                            l === null)
                                throw Error(x(341));
                            l.lanes |= n,
                            o = l.alternate,
                            o !== null && (o.lanes |= n),
                            $l(l, n, t),
                            l = a.sibling
                        } else
                            l = a.child;
                        if (l !== null)
                            l.return = a;
                        else
                            for (l = a; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (a = l.sibling,
                                a !== null) {
                                    a.return = l.return,
                                    l = a;
                                    break
                                }
                                l = l.return
                            }
                        a = l
                    }
            pe(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Pn(t, n),
        i = Le(i),
        r = r(i),
        t.flags |= 1,
        pe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = be(r, t.pendingProps),
        i = be(r.type, i),
        Pu(e, t, r, i, n);
    case 15:
        return cd(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        Pi(e, t),
        t.tag = 1,
        ke(r) ? (e = !0,
        $i(t)) : e = !1,
        Pn(t, n),
        Df(t, r, i),
        Wl(t, r, i, n),
        Yl(null, t, r, !0, e, n);
    case 19:
        return vd(e, t, n);
    case 22:
        return fd(e, t, n)
    }
    throw Error(x(156, t.tag))
}
;
function Id(e, t) {
    return nf(e, t)
}
function Wv(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ze(e, t, n, r) {
    return new Wv(e,t,n,r)
}
function fs(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Hv(e) {
    if (typeof e == "function")
        return fs(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === jo)
            return 11;
        if (e === Io)
            return 14
    }
    return 2
}
function Tt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ze(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Oi(e, t, n, r, i, a) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        fs(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case on:
            return Kt(n.children, i, a, t);
        case To:
            l = 8,
            i |= 8;
            break;
        case pl:
            return e = ze(12, n, t, i | 2),
            e.elementType = pl,
            e.lanes = a,
            e;
        case ml:
            return e = ze(13, n, t, i),
            e.elementType = ml,
            e.lanes = a,
            e;
        case vl:
            return e = ze(19, n, t, i),
            e.elementType = vl,
            e.lanes = a,
            e;
        case Dc:
            return wa(n, i, a, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Fc:
                    l = 10;
                    break e;
                case bc:
                    l = 9;
                    break e;
                case jo:
                    l = 11;
                    break e;
                case Io:
                    l = 14;
                    break e;
                case pt:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(x(130, e == null ? e : typeof e, ""))
        }
    return t = ze(l, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = a,
    t
}
function Kt(e, t, n, r) {
    return e = ze(7, e, r, t),
    e.lanes = n,
    e
}
function wa(e, t, n, r) {
    return e = ze(22, e, r, t),
    e.elementType = Dc,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function il(e, t, n) {
    return e = ze(6, e, null, t),
    e.lanes = n,
    e
}
function al(e, t, n) {
    return t = ze(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Vv(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Da(0),
    this.expirationTimes = Da(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Da(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function ds(e, t, n, r, i, a, l, o, s) {
    return e = new Vv(e,t,n,o,s),
    t === 1 ? (t = 1,
    a === !0 && (t |= 8)) : t = 0,
    a = ze(3, null, null, t),
    e.current = a,
    a.stateNode = e,
    a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Xo(a),
    e
}
function Yv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ln,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function zd(e) {
    if (!e)
        return It;
    e = e._reactInternals;
    e: {
        if (rn(e) !== e || e.tag !== 1)
            throw Error(x(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ke(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(x(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ke(n))
            return If(e, n, t)
    }
    return t
}
function Ad(e, t, n, r, i, a, l, o, s) {
    return e = ds(n, r, !0, e, i, a, l, o, s),
    e.context = zd(null),
    n = e.current,
    r = me(),
    i = Ot(n),
    a = tt(r, i),
    a.callback = t ?? null,
    _t(n, a, i),
    e.current.lanes = i,
    Mr(e, i, r),
    xe(e, r),
    e
}
function ka(e, t, n, r) {
    var i = t.current
      , a = me()
      , l = Ot(i);
    return n = zd(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = tt(a, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = _t(i, t, l),
    e !== null && (We(e, i, l, a),
    Si(e, i, l)),
    l
}
function ea(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Fu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ps(e, t) {
    Fu(e, t),
    (e = e.alternate) && Fu(e, t)
}
function Qv() {
    return null
}
var Ld = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ms(e) {
    this._internalRoot = e
}
xa.prototype.render = ms.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(x(409));
    ka(e, t, null, null)
}
;
xa.prototype.unmount = ms.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Jt(function() {
            ka(null, e, null, null)
        }),
        t[rt] = null
    }
}
;
function xa(e) {
    this._internalRoot = e
}
xa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = cf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < vt.length && t !== 0 && t < vt[n].priority; n++)
            ;
        vt.splice(n, 0, e),
        n === 0 && df(e)
    }
}
;
function vs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Sa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function bu() {}
function Kv(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var a = r;
            r = function() {
                var u = ea(l);
                a.call(u)
            }
        }
        var l = Ad(t, r, e, 0, null, !1, !1, "", bu);
        return e._reactRootContainer = l,
        e[rt] = l.current,
        xr(e.nodeType === 8 ? e.parentNode : e),
        Jt(),
        l
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var o = r;
        r = function() {
            var u = ea(s);
            o.call(u)
        }
    }
    var s = ds(e, 0, !1, null, null, !1, !1, "", bu);
    return e._reactRootContainer = s,
    e[rt] = s.current,
    xr(e.nodeType === 8 ? e.parentNode : e),
    Jt(function() {
        ka(t, s, n, r)
    }),
    s
}
function Ea(e, t, n, r, i) {
    var a = n._reactRootContainer;
    if (a) {
        var l = a;
        if (typeof i == "function") {
            var o = i;
            i = function() {
                var s = ea(l);
                o.call(s)
            }
        }
        ka(t, l, e, i)
    } else
        l = Kv(n, t, e, i, r);
    return ea(l)
}
sf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Jn(t.pendingLanes);
            n !== 0 && (Lo(t, n | 1),
            xe(t, q()),
            !(F & 6) && (Rn = q() + 500,
            Ft()))
        }
        break;
    case 13:
        Jt(function() {
            var r = it(e, 1);
            if (r !== null) {
                var i = me();
                We(r, e, 1, i)
            }
        }),
        ps(e, 1)
    }
}
;
Ro = function(e) {
    if (e.tag === 13) {
        var t = it(e, 134217728);
        if (t !== null) {
            var n = me();
            We(t, e, 134217728, n)
        }
        ps(e, 134217728)
    }
}
;
uf = function(e) {
    if (e.tag === 13) {
        var t = Ot(e)
          , n = it(e, t);
        if (n !== null) {
            var r = me();
            We(n, e, t, r)
        }
        ps(e, t)
    }
}
;
cf = function() {
    return D
}
;
ff = function(e, t) {
    var n = D;
    try {
        return D = e,
        t()
    } finally {
        D = n
    }
}
;
Pl = function(e, t, n) {
    switch (t) {
    case "input":
        if (yl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = pa(r);
                    if (!i)
                        throw Error(x(90));
                    $c(r),
                    yl(r, i)
                }
            }
        }
        break;
    case "textarea":
        Wc(e, n);
        break;
    case "select":
        t = n.value,
        t != null && xn(e, !!n.multiple, t, !1)
    }
}
;
Gc = ss;
Zc = Jt;
var Xv = {
    usingClientEntryPoint: !1,
    Events: [br, fn, pa, Kc, Xc, ss]
}
  , Gn = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , Gv = {
    bundleType: Gn.bundleType,
    version: Gn.version,
    rendererPackageName: Gn.rendererPackageName,
    rendererConfig: Gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = ef(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Gn.findFiberByHostInstance || Qv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oi.isDisabled && oi.supportsFiber)
        try {
            ua = oi.inject(Gv),
            Xe = oi
        } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xv;
Ne.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vs(t))
        throw Error(x(200));
    return Yv(e, t, null, n)
}
;
Ne.createRoot = function(e, t) {
    if (!vs(e))
        throw Error(x(299));
    var n = !1
      , r = ""
      , i = Ld;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = ds(e, 1, !1, null, null, n, !1, r, i),
    e[rt] = t.current,
    xr(e.nodeType === 8 ? e.parentNode : e),
    new ms(t)
}
;
Ne.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","),
        Error(x(268, e)));
    return e = ef(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ne.flushSync = function(e) {
    return Jt(e)
}
;
Ne.hydrate = function(e, t, n) {
    if (!Sa(t))
        throw Error(x(200));
    return Ea(null, e, t, !0, n)
}
;
Ne.hydrateRoot = function(e, t, n) {
    if (!vs(e))
        throw Error(x(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , a = ""
      , l = Ld;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = Ad(t, null, e, 1, n ?? null, i, !1, a, l),
    e[rt] = t.current,
    xr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new xa(t)
}
;
Ne.render = function(e, t, n) {
    if (!Sa(t))
        throw Error(x(200));
    return Ea(null, e, t, !1, n)
}
;
Ne.unmountComponentAtNode = function(e) {
    if (!Sa(e))
        throw Error(x(40));
    return e._reactRootContainer ? (Jt(function() {
        Ea(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[rt] = null
        })
    }),
    !0) : !1
}
;
Ne.unstable_batchedUpdates = ss;
Ne.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Sa(n))
        throw Error(x(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(x(38));
    return Ea(e, t, n, !1, r)
}
;
Ne.version = "18.2.0-next-9e3b772b8-20220608";
function Rd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rd)
        } catch (e) {
            console.error(e)
        }
}
Rd(),
zc.exports = Ne;
var Zv = zc.exports
  , Du = Zv;
fl.createRoot = Du.createRoot,
fl.hydrateRoot = Du.hydrateRoot;
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ta() {
    return ta = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ta.apply(this, arguments)
}
var wt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(wt || (wt = {}));
const Uu = "popstate";
function qv(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: a, search: l, hash: o} = r.location;
        return io("", {
            pathname: a,
            search: l,
            hash: o
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : Fd(i)
    }
    return eh(t, n, null, e)
}
function Se(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Md(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Jv() {
    return Math.random().toString(36).substr(2, 8)
}
function $u(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function io(e, t, n, r) {
    return n === void 0 && (n = null),
    ta({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ca(t) : t, {
        state: n,
        key: t && t.key || r || Jv()
    })
}
function Fd(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Ca(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function eh(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: a=!1} = r
      , l = i.history
      , o = wt.Pop
      , s = null
      , u = f();
    u == null && (u = 0,
    l.replaceState(ta({}, l.state, {
        idx: u
    }), ""));
    function f() {
        return (l.state || {
            idx: null
        }).idx
    }
    function d() {
        o = wt.Pop;
        let S = f()
          , p = S == null ? null : S - u;
        u = S,
        s && s({
            action: o,
            location: k.location,
            delta: p
        })
    }
    function v(S, p) {
        o = wt.Push;
        let c = io(k.location, S, p);
        n && n(c, S),
        u = f() + 1;
        let m = $u(c, u)
          , y = k.createHref(c);
        try {
            l.pushState(m, "", y)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            i.location.assign(y)
        }
        a && s && s({
            action: o,
            location: k.location,
            delta: 1
        })
    }
    function g(S, p) {
        o = wt.Replace;
        let c = io(k.location, S, p);
        n && n(c, S),
        u = f();
        let m = $u(c, u)
          , y = k.createHref(c);
        l.replaceState(m, "", y),
        a && s && s({
            action: o,
            location: k.location,
            delta: 0
        })
    }
    function w(S) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href
          , c = typeof S == "string" ? S : Fd(S);
        return c = c.replace(/ $/, "%20"),
        Se(p, "No window.location.(origin|href) available to create URL for href: " + c),
        new URL(c,p)
    }
    let k = {
        get action() {
            return o
        },
        get location() {
            return e(i, l)
        },
        listen(S) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Uu, d),
            s = S,
            ()=>{
                i.removeEventListener(Uu, d),
                s = null
            }
        },
        createHref(S) {
            return t(i, S)
        },
        createURL: w,
        encodeLocation(S) {
            let p = w(S);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: v,
        replace: g,
        go(S) {
            return l.go(S)
        }
    };
    return k
}
var Bu;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Bu || (Bu = {}));
function th(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Ca(t) : t
      , i = Ud(r.pathname || "/", n);
    if (i == null)
        return null;
    let a = bd(e);
    nh(a);
    let l = null;
    for (let o = 0; l == null && o < a.length; ++o) {
        let s = mh(i);
        l = fh(a[o], s)
    }
    return l
}
function bd(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (a,l,o)=>{
        let s = {
            relativePath: o === void 0 ? a.path || "" : o,
            caseSensitive: a.caseSensitive === !0,
            childrenIndex: l,
            route: a
        };
        s.relativePath.startsWith("/") && (Se(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(r.length));
        let u = Nn([r, s.relativePath])
          , f = n.concat(s);
        a.children && a.children.length > 0 && (Se(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        bd(a.children, t, f, u)),
        !(a.path == null && !a.index) && t.push({
            path: u,
            score: uh(u, a.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach((a,l)=>{
        var o;
        if (a.path === "" || !((o = a.path) != null && o.includes("?")))
            i(a, l);
        else
            for (let s of Dd(a.path))
                i(a, l, s)
    }
    ),
    t
}
function Dd(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , a = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [a, ""] : [a];
    let l = Dd(r.join("/"))
      , o = [];
    return o.push(...l.map(s=>s === "" ? a : [a, s].join("/"))),
    i && o.push(...l),
    o.map(s=>e.startsWith("/") && s === "" ? "/" : s)
}
function nh(e) {
    e.sort((t,n)=>t.score !== n.score ? n.score - t.score : ch(t.routesMeta.map(r=>r.childrenIndex), n.routesMeta.map(r=>r.childrenIndex)))
}
const rh = /^:[\w-]+$/
  , ih = 3
  , ah = 2
  , lh = 1
  , oh = 10
  , sh = -2
  , Wu = e=>e === "*";
function uh(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Wu) && (r += sh),
    t && (r += ah),
    n.filter(i=>!Wu(i)).reduce((i,a)=>i + (rh.test(a) ? ih : a === "" ? lh : oh), r)
}
function ch(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r,i)=>r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function fh(e, t) {
    let {routesMeta: n} = e
      , r = {}
      , i = "/"
      , a = [];
    for (let l = 0; l < n.length; ++l) {
        let o = n[l]
          , s = l === n.length - 1
          , u = i === "/" ? t : t.slice(i.length) || "/"
          , f = dh({
            path: o.relativePath,
            caseSensitive: o.caseSensitive,
            end: s
        }, u);
        if (!f)
            return null;
        Object.assign(r, f.params);
        let d = o.route;
        a.push({
            params: r,
            pathname: Nn([i, f.pathname]),
            pathnameBase: vh(Nn([i, f.pathnameBase])),
            route: d
        }),
        f.pathnameBase !== "/" && (i = Nn([i, f.pathnameBase]))
    }
    return a
}
function dh(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = ph(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let a = i[0]
      , l = a.replace(/(.)\/+$/, "$1")
      , o = i.slice(1);
    return {
        params: r.reduce((u,f,d)=>{
            let {paramName: v, isOptional: g} = f;
            if (v === "*") {
                let k = o[d] || "";
                l = a.slice(0, a.length - k.length).replace(/(.)\/+$/, "$1")
            }
            const w = o[d];
            return g && !w ? u[v] = void 0 : u[v] = (w || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: a,
        pathnameBase: l,
        pattern: e
    }
}
function ph(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Md(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l,o,s)=>(r.push({
        paramName: o,
        isOptional: s != null
    }),
    s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function mh(e) {
    try {
        return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Md(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Ud(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Nn = e=>e.join("/").replace(/\/\/+/g, "/")
  , vh = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/");
function hh(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const $d = ["post", "put", "patch", "delete"];
new Set($d);
const gh = ["get", ...$d];
new Set(gh);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function na() {
    return na = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    na.apply(this, arguments)
}
const yh = I.createContext(null)
  , wh = I.createContext(null)
  , Bd = I.createContext(null)
  , Pa = I.createContext(null)
  , _a = I.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Wd = I.createContext(null);
function hs() {
    return I.useContext(Pa) != null
}
function kh() {
    return hs() || Se(!1),
    I.useContext(Pa).location
}
function xh(e, t) {
    return Sh(e, t)
}
function Sh(e, t, n, r) {
    hs() || Se(!1);
    let {navigator: i} = I.useContext(Bd)
      , {matches: a} = I.useContext(_a)
      , l = a[a.length - 1]
      , o = l ? l.params : {};
    l && l.pathname;
    let s = l ? l.pathnameBase : "/";
    l && l.route;
    let u = kh(), f;
    if (t) {
        var d;
        let S = typeof t == "string" ? Ca(t) : t;
        s === "/" || (d = S.pathname) != null && d.startsWith(s) || Se(!1),
        f = S
    } else
        f = u;
    let v = f.pathname || "/"
      , g = v;
    if (s !== "/") {
        let S = s.replace(/^\//, "").split("/");
        g = "/" + v.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let w = th(e, {
        pathname: g
    })
      , k = Nh(w && w.map(S=>Object.assign({}, S, {
        params: Object.assign({}, o, S.params),
        pathname: Nn([s, i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? s : Nn([s, i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), a, n, r);
    return t && k ? I.createElement(Pa.Provider, {
        value: {
            location: na({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, f),
            navigationType: wt.Pop
        }
    }, k) : k
}
function Eh() {
    let e = Ih()
      , t = hh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return I.createElement(I.Fragment, null, I.createElement("h2", null, "Unexpected Application Error!"), I.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? I.createElement("pre", {
        style: i
    }, n) : null, null)
}
const Ch = I.createElement(Eh, null);
class Ph extends I.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? I.createElement(_a.Provider, {
            value: this.props.routeContext
        }, I.createElement(Wd.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function _h(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = I.useContext(yh);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    I.createElement(_a.Provider, {
        value: t
    }, r)
}
function Nh(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var a;
        if ((a = n) != null && a.errors)
            e = n.matches;
        else
            return null
    }
    let l = e
      , o = (i = n) == null ? void 0 : i.errors;
    if (o != null) {
        let f = l.findIndex(d=>d.route.id && (o == null ? void 0 : o[d.route.id]));
        f >= 0 || Se(!1),
        l = l.slice(0, Math.min(l.length, f + 1))
    }
    let s = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < l.length; f++) {
            let d = l[f];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
            d.route.id) {
                let {loaderData: v, errors: g} = n
                  , w = d.route.loader && v[d.route.id] === void 0 && (!g || g[d.route.id] === void 0);
                if (d.route.lazy || w) {
                    s = !0,
                    u >= 0 ? l = l.slice(0, u + 1) : l = [l[0]];
                    break
                }
            }
        }
    return l.reduceRight((f,d,v)=>{
        let g, w = !1, k = null, S = null;
        n && (g = o && d.route.id ? o[d.route.id] : void 0,
        k = d.route.errorElement || Ch,
        s && (u < 0 && v === 0 ? (zh("route-fallback", !1),
        w = !0,
        S = null) : u === v && (w = !0,
        S = d.route.hydrateFallbackElement || null)));
        let p = t.concat(l.slice(0, v + 1))
          , c = ()=>{
            let m;
            return g ? m = k : w ? m = S : d.route.Component ? m = I.createElement(d.route.Component, null) : d.route.element ? m = d.route.element : m = f,
            I.createElement(_h, {
                match: d,
                routeContext: {
                    outlet: f,
                    matches: p,
                    isDataRoute: n != null
                },
                children: m
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || v === 0) ? I.createElement(Ph, {
            location: n.location,
            revalidation: n.revalidation,
            component: k,
            error: g,
            children: c(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : c()
    }
    , null)
}
var ao = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(ao || {});
function Oh(e) {
    let t = I.useContext(wh);
    return t || Se(!1),
    t
}
function Th(e) {
    let t = I.useContext(_a);
    return t || Se(!1),
    t
}
function jh(e) {
    let t = Th()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Se(!1),
    n.route.id
}
function Ih() {
    var e;
    let t = I.useContext(Wd)
      , n = Oh(ao.UseRouteError)
      , r = jh(ao.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
const Hu = {};
function zh(e, t, n) {
    !t && !Hu[e] && (Hu[e] = !0)
}
function Hd(e) {
    Se(!1)
}
function Ah(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=wt.Pop, navigator: a, static: l=!1, future: o} = e;
    hs() && Se(!1);
    let s = t.replace(/^\/*/, "/")
      , u = I.useMemo(()=>({
        basename: s,
        navigator: a,
        static: l,
        future: na({
            v7_relativeSplatPath: !1
        }, o)
    }), [s, o, a, l]);
    typeof r == "string" && (r = Ca(r));
    let {pathname: f="/", search: d="", hash: v="", state: g=null, key: w="default"} = r
      , k = I.useMemo(()=>{
        let S = Ud(f, s);
        return S == null ? null : {
            location: {
                pathname: S,
                search: d,
                hash: v,
                state: g,
                key: w
            },
            navigationType: i
        }
    }
    , [s, f, d, v, g, w, i]);
    return k == null ? null : I.createElement(Bd.Provider, {
        value: u
    }, I.createElement(Pa.Provider, {
        children: n,
        value: k
    }))
}
function Lh(e) {
    let {children: t, location: n} = e;
    return xh(lo(t), n)
}
new Promise(()=>{}
);
function lo(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return I.Children.forEach(e, (r,i)=>{
        if (!I.isValidElement(r))
            return;
        let a = [...t, i];
        if (r.type === I.Fragment) {
            n.push.apply(n, lo(r.props.children, a));
            return
        }
        r.type !== Hd && Se(!1),
        !r.props.index || !r.props.children || Se(!1);
        let l = {
            id: r.props.id || a.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (l.children = lo(r.props.children, a)),
        n.push(l)
    }
    ),
    n
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Rh = "6";
try {
    window.__reactRouterVersion = Rh
} catch {}
const Mh = "startTransition"
  , Vu = $p[Mh];
function Fh(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , a = I.useRef();
    a.current == null && (a.current = qv({
        window: i,
        v5Compat: !0
    }));
    let l = a.current
      , [o,s] = I.useState({
        action: l.action,
        location: l.location
    })
      , {v7_startTransition: u} = r || {}
      , f = I.useCallback(d=>{
        u && Vu ? Vu(()=>s(d)) : s(d)
    }
    , [s, u]);
    return I.useLayoutEffect(()=>l.listen(f), [l, f]),
    I.createElement(Ah, {
        basename: t,
        children: n,
        location: o.location,
        navigationType: o.action,
        navigator: l,
        future: r
    })
}
var Yu;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Yu || (Yu = {}));
var Qu;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Qu || (Qu = {}));
function bh() {
    return h.jsx(h.Fragment, {
        children: h.jsxs("div", {
            className: "footer-wrapper",
            children: [h.jsxs("div", {
                className: "footer-data",
                children: [h.jsx("div", {
                    className: "footer-data-email-and-icons",
                    children: h.jsxs("div", {
                        className: "footer-data-logo-wrapper",
                        children: [h.jsx("div", {
                            className: "footer-data-logo-image-wrapper",
                            children: h.jsx("img", {
                                src: "/images/logo/logo-transparent.png",
                                alt: "logo image"
                            })
                        }), h.jsx("div", {
                            className: "footer-data-logo-text-wrapper",
                            children: h.jsx("span", {
                                children: h.jsx("strong", {
                                    children: "Ruta del Agua de Telde"
                                })
                            })
                        })]
                    })
                }), h.jsxs("div", {
                    className: "footer-data-columns-fotos",
                    children: [h.jsx("h2", {
                        children: "fotos"
                    }), h.jsx("p", {
                        children: "En la Guagua"
                    }), h.jsx("p", {
                        children: "Introducción"
                    }), h.jsx("p", {
                        children: "Bajo el puente"
                    }), h.jsx("p", {
                        children: "En la acequia"
                    }), h.jsx("p", {
                        children: "Con las gallinas"
                    }), h.jsx("p", {
                        children: "Máquina de Azúcar"
                    }), h.jsx("p", {
                        children: "Puente de los 7 ojos"
                    }), h.jsx("p", {
                        children: "Final de trayecto"
                    })]
                }), h.jsxs("div", {
                    className: "footer-data-columns-videos",
                    children: [h.jsx("h2", {
                        children: "Guagua"
                    }), h.jsx("p", {
                        children: "Introducción"
                    }), h.jsx("p", {
                        children: "Introducción"
                    }), h.jsx("p", {
                        children: "Bajo el puente"
                    }), h.jsx("p", {
                        children: "En la acequia"
                    }), h.jsx("p", {
                        children: "Con las gallinas"
                    }), h.jsx("p", {
                        children: "Máquina de Azúcar"
                    }), h.jsx("p", {
                        children: "Puente de los 7 ojos"
                    }), h.jsx("p", {
                        children: "Final de trayecto"
                    })]
                }), h.jsxs("div", {
                    className: "footer-data-columns-outstanding",
                    children: [h.jsx("h2", {
                        children: "Destacados"
                    }), h.jsx("p", {
                        children: "Introducción"
                    }), h.jsx("p", {
                        children: "Introducción"
                    }), h.jsx("p", {
                        children: "Bajo el puente"
                    }), h.jsx("p", {
                        children: "En la acequia"
                    }), h.jsx("p", {
                        children: "Con las gallinas"
                    }), h.jsx("p", {
                        children: "Máquina de Azúcar"
                    }), h.jsx("p", {
                        children: "Puente de los 7 ojos"
                    }), h.jsx("p", {
                        children: "Final de trayecto"
                    })]
                })]
            }), h.jsxs("div", {
                className: "footer-conditions-wrapper",
                children: [h.jsx("div", {
                    className: "footer-conditions-copyright",
                    children: h.jsx("p", {
                        children: "@2024 Interface. No rights reserved"
                    })
                }), h.jsxs("div", {
                    className: "footer-conditions-data",
                    children: [h.jsx("p", {
                        children: "Terms and Conditions"
                    }), h.jsx("p", {
                        children: "Privacy Policy"
                    }), h.jsx("p", {
                        children: "Cookies"
                    })]
                })]
            })]
        })
    })
}
function Dh() {
    return h.jsxs("div", {
        className: "foto-and-text-with-background-wrapper",
        children: [h.jsxs("div", {
            className: "foto-and-text-with-background-text",
            children: [h.jsx("h2", {
                children: "La ruta del agua de Telde"
            }), h.jsx("p", {
                children: "Se trata de una ruta muy importante desde tiempos de la conquista de la Isla de Gran Canaria por parte de los castellanos."
            }), h.jsx("button", {
                children: "Leer más..."
            })]
        }), h.jsx("div", {
            className: "foto-and-text-with-background-image",
            children: h.jsx("img", {
                src: "/images/route/20240126_084119.jpg",
                alt: "presentación"
            })
        })]
    })
}
function Ku(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ku(Object(n), !0).forEach(function(r) {
            ne(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ku(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function ra(e) {
    "@babel/helpers - typeof";
    return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ra(e)
}
function Uh(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Xu(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
}
function $h(e, t, n) {
    return t && Xu(e.prototype, t),
    n && Xu(e, n),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function ne(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function gs(e, t) {
    return Wh(e) || Vh(e, t) || Vd(e, t) || Qh()
}
function Ur(e) {
    return Bh(e) || Hh(e) || Vd(e) || Yh()
}
function Bh(e) {
    if (Array.isArray(e))
        return oo(e)
}
function Wh(e) {
    if (Array.isArray(e))
        return e
}
function Hh(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function Vh(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
        var r = [], i = !0, a = !1, l, o;
        try {
            for (n = n.call(e); !(i = (l = n.next()).done) && (r.push(l.value),
            !(t && r.length === t)); i = !0)
                ;
        } catch (s) {
            a = !0,
            o = s
        } finally {
            try {
                !i && n.return != null && n.return()
            } finally {
                if (a)
                    throw o
            }
        }
        return r
    }
}
function Vd(e, t) {
    if (e) {
        if (typeof e == "string")
            return oo(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return oo(e, t)
    }
}
function oo(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Yh() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Qh() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Gu = function() {}
  , ys = {}
  , Yd = {}
  , Qd = null
  , Kd = {
    mark: Gu,
    measure: Gu
};
try {
    typeof window < "u" && (ys = window),
    typeof document < "u" && (Yd = document),
    typeof MutationObserver < "u" && (Qd = MutationObserver),
    typeof performance < "u" && (Kd = performance)
} catch {}
var Kh = ys.navigator || {}
  , Zu = Kh.userAgent
  , qu = Zu === void 0 ? "" : Zu
  , zt = ys
  , H = Yd
  , Ju = Qd
  , si = Kd;
zt.document;
var ct = !!H.documentElement && !!H.head && typeof H.addEventListener == "function" && typeof H.createElement == "function", Xd = ~qu.indexOf("MSIE") || ~qu.indexOf("Trident/"), ui, ci, fi, di, pi, lt = "___FONT_AWESOME___", so = 16, Gd = "fa", Zd = "svg-inline--fa", en = "data-fa-i2svg", uo = "data-fa-pseudo-element", Xh = "data-fa-pseudo-element-pending", ws = "data-prefix", ks = "data-icon", ec = "fontawesome-i2svg", Gh = "async", Zh = ["HTML", "HEAD", "STYLE", "SCRIPT"], qd = function() {
    try {
        return !0
    } catch {
        return !1
    }
}(), B = "classic", G = "sharp", xs = [B, G];
function $r(e) {
    return new Proxy(e,{
        get: function(n, r) {
            return r in n ? n[r] : n[B]
        }
    })
}
var jr = $r((ui = {},
ne(ui, B, {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands",
    fak: "kit",
    fakd: "kit",
    "fa-kit": "kit",
    "fa-kit-duotone": "kit"
}),
ne(ui, G, {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
}),
ui))
  , Ir = $r((ci = {},
ne(ci, B, {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab",
    kit: "fak"
}),
ne(ci, G, {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
}),
ci))
  , zr = $r((fi = {},
ne(fi, B, {
    fab: "fa-brands",
    fad: "fa-duotone",
    fak: "fa-kit",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
}),
ne(fi, G, {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
}),
fi))
  , qh = $r((di = {},
ne(di, B, {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-kit": "fak",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
}),
ne(di, G, {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
}),
di))
  , Jh = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/
  , Jd = "fa-layers-text"
  , e1 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i
  , t1 = $r((pi = {},
ne(pi, B, {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
}),
ne(pi, G, {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
}),
pi))
  , ep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  , n1 = ep.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  , r1 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
  , Vt = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}
  , Ar = new Set;
Object.keys(Ir[B]).map(Ar.add.bind(Ar));
Object.keys(Ir[G]).map(Ar.add.bind(Ar));
var i1 = [].concat(xs, Ur(Ar), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Vt.GROUP, Vt.SWAP_OPACITY, Vt.PRIMARY, Vt.SECONDARY]).concat(ep.map(function(e) {
    return "".concat(e, "x")
})).concat(n1.map(function(e) {
    return "w-".concat(e)
}))
  , fr = zt.FontAwesomeConfig || {};
function a1(e) {
    var t = H.querySelector("script[" + e + "]");
    if (t)
        return t.getAttribute(e)
}
function l1(e) {
    return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e
}
if (H && typeof H.querySelector == "function") {
    var o1 = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
    o1.forEach(function(e) {
        var t = gs(e, 2)
          , n = t[0]
          , r = t[1]
          , i = l1(a1(n));
        i != null && (fr[r] = i)
    })
}
var tp = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: Gd,
    replacementClass: Zd,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
};
fr.familyPrefix && (fr.cssPrefix = fr.familyPrefix);
var Mn = C(C({}, tp), fr);
Mn.autoReplaceSvg || (Mn.observeMutations = !1);
var T = {};
Object.keys(tp).forEach(function(e) {
    Object.defineProperty(T, e, {
        enumerable: !0,
        set: function(n) {
            Mn[e] = n,
            dr.forEach(function(r) {
                return r(T)
            })
        },
        get: function() {
            return Mn[e]
        }
    })
});
Object.defineProperty(T, "familyPrefix", {
    enumerable: !0,
    set: function(t) {
        Mn.cssPrefix = t,
        dr.forEach(function(n) {
            return n(T)
        })
    },
    get: function() {
        return Mn.cssPrefix
    }
});
zt.FontAwesomeConfig = T;
var dr = [];
function s1(e) {
    return dr.push(e),
    function() {
        dr.splice(dr.indexOf(e), 1)
    }
}
var dt = so
  , Ke = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
};
function u1(e) {
    if (!(!e || !ct)) {
        var t = H.createElement("style");
        t.setAttribute("type", "text/css"),
        t.innerHTML = e;
        for (var n = H.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
            var a = n[i]
              , l = (a.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(l) > -1 && (r = a)
        }
        return H.head.insertBefore(t, r),
        e
    }
}
var c1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Lr() {
    for (var e = 12, t = ""; e-- > 0; )
        t += c1[Math.random() * 62 | 0];
    return t
}
function Un(e) {
    for (var t = [], n = (e || []).length >>> 0; n--; )
        t[n] = e[n];
    return t
}
function Ss(e) {
    return e.classList ? Un(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
        return t
    })
}
function np(e) {
    return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function f1(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t + "".concat(n, '="').concat(np(e[n]), '" ')
    }, "").trim()
}
function Na(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t + "".concat(n, ": ").concat(e[n].trim(), ";")
    }, "")
}
function Es(e) {
    return e.size !== Ke.size || e.x !== Ke.x || e.y !== Ke.y || e.rotate !== Ke.rotate || e.flipX || e.flipY
}
function d1(e) {
    var t = e.transform
      , n = e.containerWidth
      , r = e.iconWidth
      , i = {
        transform: "translate(".concat(n / 2, " 256)")
    }
      , a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") ")
      , l = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") ")
      , o = "rotate(".concat(t.rotate, " 0 0)")
      , s = {
        transform: "".concat(a, " ").concat(l, " ").concat(o)
    }
      , u = {
        transform: "translate(".concat(r / 2 * -1, " -256)")
    };
    return {
        outer: i,
        inner: s,
        path: u
    }
}
function p1(e) {
    var t = e.transform
      , n = e.width
      , r = n === void 0 ? so : n
      , i = e.height
      , a = i === void 0 ? so : i
      , l = e.startCentered
      , o = l === void 0 ? !1 : l
      , s = "";
    return o && Xd ? s += "translate(".concat(t.x / dt - r / 2, "em, ").concat(t.y / dt - a / 2, "em) ") : o ? s += "translate(calc(-50% + ".concat(t.x / dt, "em), calc(-50% + ").concat(t.y / dt, "em)) ") : s += "translate(".concat(t.x / dt, "em, ").concat(t.y / dt, "em) "),
    s += "scale(".concat(t.size / dt * (t.flipX ? -1 : 1), ", ").concat(t.size / dt * (t.flipY ? -1 : 1), ") "),
    s += "rotate(".concat(t.rotate, "deg) "),
    s
}
var m1 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function rp() {
    var e = Gd
      , t = Zd
      , n = T.cssPrefix
      , r = T.replacementClass
      , i = m1;
    if (n !== e || r !== t) {
        var a = new RegExp("\\.".concat(e, "\\-"),"g")
          , l = new RegExp("\\--".concat(e, "\\-"),"g")
          , o = new RegExp("\\.".concat(t),"g");
        i = i.replace(a, ".".concat(n, "-")).replace(l, "--".concat(n, "-")).replace(o, ".".concat(r))
    }
    return i
}
var tc = !1;
function ll() {
    T.autoAddCss && !tc && (u1(rp()),
    tc = !0)
}
var v1 = {
    mixout: function() {
        return {
            dom: {
                css: rp,
                insertCss: ll
            }
        }
    },
    hooks: function() {
        return {
            beforeDOMElementCreation: function() {
                ll()
            },
            beforeI2svg: function() {
                ll()
            }
        }
    }
}
  , ot = zt || {};
ot[lt] || (ot[lt] = {});
ot[lt].styles || (ot[lt].styles = {});
ot[lt].hooks || (ot[lt].hooks = {});
ot[lt].shims || (ot[lt].shims = []);
var $e = ot[lt]
  , ip = []
  , h1 = function e() {
    H.removeEventListener("DOMContentLoaded", e),
    ia = 1,
    ip.map(function(t) {
        return t()
    })
}
  , ia = !1;
ct && (ia = (H.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(H.readyState),
ia || H.addEventListener("DOMContentLoaded", h1));
function g1(e) {
    ct && (ia ? setTimeout(e, 0) : ip.push(e))
}
function Br(e) {
    var t = e.tag
      , n = e.attributes
      , r = n === void 0 ? {} : n
      , i = e.children
      , a = i === void 0 ? [] : i;
    return typeof e == "string" ? np(e) : "<".concat(t, " ").concat(f1(r), ">").concat(a.map(Br).join(""), "</").concat(t, ">")
}
function nc(e, t, n) {
    if (e && e[t] && e[t][n])
        return {
            prefix: t,
            iconName: n,
            icon: e[t][n]
        }
}
var y1 = function(t, n) {
    return function(r, i, a, l) {
        return t.call(n, r, i, a, l)
    }
}
  , ol = function(t, n, r, i) {
    var a = Object.keys(t), l = a.length, o = i !== void 0 ? y1(n, i) : n, s, u, f;
    for (r === void 0 ? (s = 1,
    f = t[a[0]]) : (s = 0,
    f = r); s < l; s++)
        u = a[s],
        f = o(f, t[u], u, t);
    return f
};
function w1(e) {
    for (var t = [], n = 0, r = e.length; n < r; ) {
        var i = e.charCodeAt(n++);
        if (i >= 55296 && i <= 56319 && n < r) {
            var a = e.charCodeAt(n++);
            (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i),
            n--)
        } else
            t.push(i)
    }
    return t
}
function co(e) {
    var t = w1(e);
    return t.length === 1 ? t[0].toString(16) : null
}
function k1(e, t) {
    var n = e.length, r = e.charCodeAt(t), i;
    return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1),
    i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r
}
function rc(e) {
    return Object.keys(e).reduce(function(t, n) {
        var r = e[n]
          , i = !!r.icon;
        return i ? t[r.iconName] = r.icon : t[n] = r,
        t
    }, {})
}
function fo(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , r = n.skipHooks
      , i = r === void 0 ? !1 : r
      , a = rc(t);
    typeof $e.hooks.addPack == "function" && !i ? $e.hooks.addPack(e, rc(t)) : $e.styles[e] = C(C({}, $e.styles[e] || {}), a),
    e === "fas" && fo("fa", t)
}
var mi, vi, hi, yn = $e.styles, x1 = $e.shims, S1 = (mi = {},
ne(mi, B, Object.values(zr[B])),
ne(mi, G, Object.values(zr[G])),
mi), Cs = null, ap = {}, lp = {}, op = {}, sp = {}, up = {}, E1 = (vi = {},
ne(vi, B, Object.keys(jr[B])),
ne(vi, G, Object.keys(jr[G])),
vi);
function C1(e) {
    return ~i1.indexOf(e)
}
function P1(e, t) {
    var n = t.split("-")
      , r = n[0]
      , i = n.slice(1).join("-");
    return r === e && i !== "" && !C1(i) ? i : null
}
var cp = function() {
    var t = function(a) {
        return ol(yn, function(l, o, s) {
            return l[s] = ol(o, a, {}),
            l
        }, {})
    };
    ap = t(function(i, a, l) {
        if (a[3] && (i[a[3]] = l),
        a[2]) {
            var o = a[2].filter(function(s) {
                return typeof s == "number"
            });
            o.forEach(function(s) {
                i[s.toString(16)] = l
            })
        }
        return i
    }),
    lp = t(function(i, a, l) {
        if (i[l] = l,
        a[2]) {
            var o = a[2].filter(function(s) {
                return typeof s == "string"
            });
            o.forEach(function(s) {
                i[s] = l
            })
        }
        return i
    }),
    up = t(function(i, a, l) {
        var o = a[2];
        return i[l] = l,
        o.forEach(function(s) {
            i[s] = l
        }),
        i
    });
    var n = "far"in yn || T.autoFetchSvg
      , r = ol(x1, function(i, a) {
        var l = a[0]
          , o = a[1]
          , s = a[2];
        return o === "far" && !n && (o = "fas"),
        typeof l == "string" && (i.names[l] = {
            prefix: o,
            iconName: s
        }),
        typeof l == "number" && (i.unicodes[l.toString(16)] = {
            prefix: o,
            iconName: s
        }),
        i
    }, {
        names: {},
        unicodes: {}
    });
    op = r.names,
    sp = r.unicodes,
    Cs = Oa(T.styleDefault, {
        family: T.familyDefault
    })
};
s1(function(e) {
    Cs = Oa(e.styleDefault, {
        family: T.familyDefault
    })
});
cp();
function Ps(e, t) {
    return (ap[e] || {})[t]
}
function _1(e, t) {
    return (lp[e] || {})[t]
}
function Yt(e, t) {
    return (up[e] || {})[t]
}
function fp(e) {
    return op[e] || {
        prefix: null,
        iconName: null
    }
}
function N1(e) {
    var t = sp[e]
      , n = Ps("fas", e);
    return t || (n ? {
        prefix: "fas",
        iconName: n
    } : null) || {
        prefix: null,
        iconName: null
    }
}
function At() {
    return Cs
}
var _s = function() {
    return {
        prefix: null,
        iconName: null,
        rest: []
    }
};
function Oa(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , n = t.family
      , r = n === void 0 ? B : n
      , i = jr[r][e]
      , a = Ir[r][e] || Ir[r][i]
      , l = e in $e.styles ? e : null;
    return a || l || null
}
var ic = (hi = {},
ne(hi, B, Object.keys(zr[B])),
ne(hi, G, Object.keys(zr[G])),
hi);
function Ta(e) {
    var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, i = r === void 0 ? !1 : r, a = (t = {},
    ne(t, B, "".concat(T.cssPrefix, "-").concat(B)),
    ne(t, G, "".concat(T.cssPrefix, "-").concat(G)),
    t), l = null, o = B;
    (e.includes(a[B]) || e.some(function(u) {
        return ic[B].includes(u)
    })) && (o = B),
    (e.includes(a[G]) || e.some(function(u) {
        return ic[G].includes(u)
    })) && (o = G);
    var s = e.reduce(function(u, f) {
        var d = P1(T.cssPrefix, f);
        if (yn[f] ? (f = S1[o].includes(f) ? qh[o][f] : f,
        l = f,
        u.prefix = f) : E1[o].indexOf(f) > -1 ? (l = f,
        u.prefix = Oa(f, {
            family: o
        })) : d ? u.iconName = d : f !== T.replacementClass && f !== a[B] && f !== a[G] && u.rest.push(f),
        !i && u.prefix && u.iconName) {
            var v = l === "fa" ? fp(u.iconName) : {}
              , g = Yt(u.prefix, u.iconName);
            v.prefix && (l = null),
            u.iconName = v.iconName || g || u.iconName,
            u.prefix = v.prefix || u.prefix,
            u.prefix === "far" && !yn.far && yn.fas && !T.autoFetchSvg && (u.prefix = "fas")
        }
        return u
    }, _s());
    return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
    !s.prefix && o === G && (yn.fass || T.autoFetchSvg) && (s.prefix = "fass",
    s.iconName = Yt(s.prefix, s.iconName) || s.iconName),
    (s.prefix === "fa" || l === "fa") && (s.prefix = At() || "fas"),
    s
}
var O1 = function() {
    function e() {
        Uh(this, e),
        this.definitions = {}
    }
    return $h(e, [{
        key: "add",
        value: function() {
            for (var n = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                i[a] = arguments[a];
            var l = i.reduce(this._pullDefinitions, {});
            Object.keys(l).forEach(function(o) {
                n.definitions[o] = C(C({}, n.definitions[o] || {}), l[o]),
                fo(o, l[o]);
                var s = zr[B][o];
                s && fo(s, l[o]),
                cp()
            })
        }
    }, {
        key: "reset",
        value: function() {
            this.definitions = {}
        }
    }, {
        key: "_pullDefinitions",
        value: function(n, r) {
            var i = r.prefix && r.iconName && r.icon ? {
                0: r
            } : r;
            return Object.keys(i).map(function(a) {
                var l = i[a]
                  , o = l.prefix
                  , s = l.iconName
                  , u = l.icon
                  , f = u[2];
                n[o] || (n[o] = {}),
                f.length > 0 && f.forEach(function(d) {
                    typeof d == "string" && (n[o][d] = u)
                }),
                n[o][s] = u
            }),
            n
        }
    }]),
    e
}()
  , ac = []
  , wn = {}
  , On = {}
  , T1 = Object.keys(On);
function j1(e, t) {
    var n = t.mixoutsTo;
    return ac = e,
    wn = {},
    Object.keys(On).forEach(function(r) {
        T1.indexOf(r) === -1 && delete On[r]
    }),
    ac.forEach(function(r) {
        var i = r.mixout ? r.mixout() : {};
        if (Object.keys(i).forEach(function(l) {
            typeof i[l] == "function" && (n[l] = i[l]),
            ra(i[l]) === "object" && Object.keys(i[l]).forEach(function(o) {
                n[l] || (n[l] = {}),
                n[l][o] = i[l][o]
            })
        }),
        r.hooks) {
            var a = r.hooks();
            Object.keys(a).forEach(function(l) {
                wn[l] || (wn[l] = []),
                wn[l].push(a[l])
            })
        }
        r.provides && r.provides(On)
    }),
    n
}
function po(e, t) {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
        r[i - 2] = arguments[i];
    var a = wn[e] || [];
    return a.forEach(function(l) {
        t = l.apply(null, [t].concat(r))
    }),
    t
}
function tn(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    var i = wn[e] || [];
    i.forEach(function(a) {
        a.apply(null, n)
    })
}
function st() {
    var e = arguments[0]
      , t = Array.prototype.slice.call(arguments, 1);
    return On[e] ? On[e].apply(null, t) : void 0
}
function mo(e) {
    e.prefix === "fa" && (e.prefix = "fas");
    var t = e.iconName
      , n = e.prefix || At();
    if (t)
        return t = Yt(n, t) || t,
        nc(dp.definitions, n, t) || nc($e.styles, n, t)
}
var dp = new O1
  , I1 = function() {
    T.autoReplaceSvg = !1,
    T.observeMutations = !1,
    tn("noAuto")
}
  , z1 = {
    i2svg: function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return ct ? (tn("beforeI2svg", t),
        st("pseudoElements2svg", t),
        st("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.")
    },
    watch: function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = t.autoReplaceSvgRoot;
        T.autoReplaceSvg === !1 && (T.autoReplaceSvg = !0),
        T.observeMutations = !0,
        g1(function() {
            L1({
                autoReplaceSvgRoot: n
            }),
            tn("watch", t)
        })
    }
}
  , A1 = {
    icon: function(t) {
        if (t === null)
            return null;
        if (ra(t) === "object" && t.prefix && t.iconName)
            return {
                prefix: t.prefix,
                iconName: Yt(t.prefix, t.iconName) || t.iconName
            };
        if (Array.isArray(t) && t.length === 2) {
            var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1]
              , r = Oa(t[0]);
            return {
                prefix: r,
                iconName: Yt(r, n) || n
            }
        }
        if (typeof t == "string" && (t.indexOf("".concat(T.cssPrefix, "-")) > -1 || t.match(Jh))) {
            var i = Ta(t.split(" "), {
                skipLookups: !0
            });
            return {
                prefix: i.prefix || At(),
                iconName: Yt(i.prefix, i.iconName) || i.iconName
            }
        }
        if (typeof t == "string") {
            var a = At();
            return {
                prefix: a,
                iconName: Yt(a, t) || t
            }
        }
    }
}
  , Te = {
    noAuto: I1,
    config: T,
    dom: z1,
    parse: A1,
    library: dp,
    findIconDefinition: mo,
    toHtml: Br
}
  , L1 = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , n = t.autoReplaceSvgRoot
      , r = n === void 0 ? H : n;
    (Object.keys($e.styles).length > 0 || T.autoFetchSvg) && ct && T.autoReplaceSvg && Te.dom.i2svg({
        node: r
    })
};
function ja(e, t) {
    return Object.defineProperty(e, "abstract", {
        get: t
    }),
    Object.defineProperty(e, "html", {
        get: function() {
            return e.abstract.map(function(r) {
                return Br(r)
            })
        }
    }),
    Object.defineProperty(e, "node", {
        get: function() {
            if (ct) {
                var r = H.createElement("div");
                return r.innerHTML = e.html,
                r.children
            }
        }
    }),
    e
}
function R1(e) {
    var t = e.children
      , n = e.main
      , r = e.mask
      , i = e.attributes
      , a = e.styles
      , l = e.transform;
    if (Es(l) && n.found && !r.found) {
        var o = n.width
          , s = n.height
          , u = {
            x: o / s / 2,
            y: .5
        };
        i.style = Na(C(C({}, a), {}, {
            "transform-origin": "".concat(u.x + l.x / 16, "em ").concat(u.y + l.y / 16, "em")
        }))
    }
    return [{
        tag: "svg",
        attributes: i,
        children: t
    }]
}
function M1(e) {
    var t = e.prefix
      , n = e.iconName
      , r = e.children
      , i = e.attributes
      , a = e.symbol
      , l = a === !0 ? "".concat(t, "-").concat(T.cssPrefix, "-").concat(n) : a;
    return [{
        tag: "svg",
        attributes: {
            style: "display: none;"
        },
        children: [{
            tag: "symbol",
            attributes: C(C({}, i), {}, {
                id: l
            }),
            children: r
        }]
    }]
}
function Ns(e) {
    var t = e.icons
      , n = t.main
      , r = t.mask
      , i = e.prefix
      , a = e.iconName
      , l = e.transform
      , o = e.symbol
      , s = e.title
      , u = e.maskId
      , f = e.titleId
      , d = e.extra
      , v = e.watchable
      , g = v === void 0 ? !1 : v
      , w = r.found ? r : n
      , k = w.width
      , S = w.height
      , p = i === "fak"
      , c = [T.replacementClass, a ? "".concat(T.cssPrefix, "-").concat(a) : ""].filter(function(b) {
        return d.classes.indexOf(b) === -1
    }).filter(function(b) {
        return b !== "" || !!b
    }).concat(d.classes).join(" ")
      , m = {
        children: [],
        attributes: C(C({}, d.attributes), {}, {
            "data-prefix": i,
            "data-icon": a,
            class: c,
            role: d.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(k, " ").concat(S)
        })
    }
      , y = p && !~d.classes.indexOf("fa-fw") ? {
        width: "".concat(k / S * 16 * .0625, "em")
    } : {};
    g && (m.attributes[en] = ""),
    s && (m.children.push({
        tag: "title",
        attributes: {
            id: m.attributes["aria-labelledby"] || "title-".concat(f || Lr())
        },
        children: [s]
    }),
    delete m.attributes.title);
    var E = C(C({}, m), {}, {
        prefix: i,
        iconName: a,
        main: n,
        mask: r,
        maskId: u,
        transform: l,
        symbol: o,
        styles: C(C({}, y), d.styles)
    })
      , _ = r.found && n.found ? st("generateAbstractMask", E) || {
        children: [],
        attributes: {}
    } : st("generateAbstractIcon", E) || {
        children: [],
        attributes: {}
    }
      , N = _.children
      , j = _.attributes;
    return E.children = N,
    E.attributes = j,
    o ? M1(E) : R1(E)
}
function lc(e) {
    var t = e.content
      , n = e.width
      , r = e.height
      , i = e.transform
      , a = e.title
      , l = e.extra
      , o = e.watchable
      , s = o === void 0 ? !1 : o
      , u = C(C(C({}, l.attributes), a ? {
        title: a
    } : {}), {}, {
        class: l.classes.join(" ")
    });
    s && (u[en] = "");
    var f = C({}, l.styles);
    Es(i) && (f.transform = p1({
        transform: i,
        startCentered: !0,
        width: n,
        height: r
    }),
    f["-webkit-transform"] = f.transform);
    var d = Na(f);
    d.length > 0 && (u.style = d);
    var v = [];
    return v.push({
        tag: "span",
        attributes: u,
        children: [t]
    }),
    a && v.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [a]
    }),
    v
}
function F1(e) {
    var t = e.content
      , n = e.title
      , r = e.extra
      , i = C(C(C({}, r.attributes), n ? {
        title: n
    } : {}), {}, {
        class: r.classes.join(" ")
    })
      , a = Na(r.styles);
    a.length > 0 && (i.style = a);
    var l = [];
    return l.push({
        tag: "span",
        attributes: i,
        children: [t]
    }),
    n && l.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [n]
    }),
    l
}
var sl = $e.styles;
function vo(e) {
    var t = e[0]
      , n = e[1]
      , r = e.slice(4)
      , i = gs(r, 1)
      , a = i[0]
      , l = null;
    return Array.isArray(a) ? l = {
        tag: "g",
        attributes: {
            class: "".concat(T.cssPrefix, "-").concat(Vt.GROUP)
        },
        children: [{
            tag: "path",
            attributes: {
                class: "".concat(T.cssPrefix, "-").concat(Vt.SECONDARY),
                fill: "currentColor",
                d: a[0]
            }
        }, {
            tag: "path",
            attributes: {
                class: "".concat(T.cssPrefix, "-").concat(Vt.PRIMARY),
                fill: "currentColor",
                d: a[1]
            }
        }]
    } : l = {
        tag: "path",
        attributes: {
            fill: "currentColor",
            d: a
        }
    },
    {
        found: !0,
        width: t,
        height: n,
        icon: l
    }
}
var b1 = {
    found: !1,
    width: 512,
    height: 512
};
function D1(e, t) {
    !qd && !T.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
}
function ho(e, t) {
    var n = t;
    return t === "fa" && T.styleDefault !== null && (t = At()),
    new Promise(function(r, i) {
        if (st("missingIconAbstract"),
        n === "fa") {
            var a = fp(e) || {};
            e = a.iconName || e,
            t = a.prefix || t
        }
        if (e && t && sl[t] && sl[t][e]) {
            var l = sl[t][e];
            return r(vo(l))
        }
        D1(e, t),
        r(C(C({}, b1), {}, {
            icon: T.showMissingIcons && e ? st("missingIconAbstract") || {} : {}
        }))
    }
    )
}
var oc = function() {}
  , go = T.measurePerformance && si && si.mark && si.measure ? si : {
    mark: oc,
    measure: oc
}
  , tr = 'FA "6.5.1"'
  , U1 = function(t) {
    return go.mark("".concat(tr, " ").concat(t, " begins")),
    function() {
        return pp(t)
    }
}
  , pp = function(t) {
    go.mark("".concat(tr, " ").concat(t, " ends")),
    go.measure("".concat(tr, " ").concat(t), "".concat(tr, " ").concat(t, " begins"), "".concat(tr, " ").concat(t, " ends"))
}
  , Os = {
    begin: U1,
    end: pp
}
  , Ti = function() {};
function sc(e) {
    var t = e.getAttribute ? e.getAttribute(en) : null;
    return typeof t == "string"
}
function $1(e) {
    var t = e.getAttribute ? e.getAttribute(ws) : null
      , n = e.getAttribute ? e.getAttribute(ks) : null;
    return t && n
}
function B1(e) {
    return e && e.classList && e.classList.contains && e.classList.contains(T.replacementClass)
}
function W1() {
    if (T.autoReplaceSvg === !0)
        return ji.replace;
    var e = ji[T.autoReplaceSvg];
    return e || ji.replace
}
function H1(e) {
    return H.createElementNS("http://www.w3.org/2000/svg", e)
}
function V1(e) {
    return H.createElement(e)
}
function mp(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , n = t.ceFn
      , r = n === void 0 ? e.tag === "svg" ? H1 : V1 : n;
    if (typeof e == "string")
        return H.createTextNode(e);
    var i = r(e.tag);
    Object.keys(e.attributes || []).forEach(function(l) {
        i.setAttribute(l, e.attributes[l])
    });
    var a = e.children || [];
    return a.forEach(function(l) {
        i.appendChild(mp(l, {
            ceFn: r
        }))
    }),
    i
}
function Y1(e) {
    var t = " ".concat(e.outerHTML, " ");
    return t = "".concat(t, "Font Awesome fontawesome.com "),
    t
}
var ji = {
    replace: function(t) {
        var n = t[0];
        if (n.parentNode)
            if (t[1].forEach(function(i) {
                n.parentNode.insertBefore(mp(i), n)
            }),
            n.getAttribute(en) === null && T.keepOriginalSource) {
                var r = H.createComment(Y1(n));
                n.parentNode.replaceChild(r, n)
            } else
                n.remove()
    },
    nest: function(t) {
        var n = t[0]
          , r = t[1];
        if (~Ss(n).indexOf(T.replacementClass))
            return ji.replace(t);
        var i = new RegExp("".concat(T.cssPrefix, "-.*"));
        if (delete r[0].attributes.id,
        r[0].attributes.class) {
            var a = r[0].attributes.class.split(" ").reduce(function(o, s) {
                return s === T.replacementClass || s.match(i) ? o.toSvg.push(s) : o.toNode.push(s),
                o
            }, {
                toNode: [],
                toSvg: []
            });
            r[0].attributes.class = a.toSvg.join(" "),
            a.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", a.toNode.join(" "))
        }
        var l = r.map(function(o) {
            return Br(o)
        }).join(`
`);
        n.setAttribute(en, ""),
        n.innerHTML = l
    }
};
function uc(e) {
    e()
}
function vp(e, t) {
    var n = typeof t == "function" ? t : Ti;
    if (e.length === 0)
        n();
    else {
        var r = uc;
        T.mutateApproach === Gh && (r = zt.requestAnimationFrame || uc),
        r(function() {
            var i = W1()
              , a = Os.begin("mutate");
            e.map(i),
            a(),
            n()
        })
    }
}
var Ts = !1;
function hp() {
    Ts = !0
}
function yo() {
    Ts = !1
}
var aa = null;
function cc(e) {
    if (Ju && T.observeMutations) {
        var t = e.treeCallback
          , n = t === void 0 ? Ti : t
          , r = e.nodeCallback
          , i = r === void 0 ? Ti : r
          , a = e.pseudoElementsCallback
          , l = a === void 0 ? Ti : a
          , o = e.observeMutationsRoot
          , s = o === void 0 ? H : o;
        aa = new Ju(function(u) {
            if (!Ts) {
                var f = At();
                Un(u).forEach(function(d) {
                    if (d.type === "childList" && d.addedNodes.length > 0 && !sc(d.addedNodes[0]) && (T.searchPseudoElements && l(d.target),
                    n(d.target)),
                    d.type === "attributes" && d.target.parentNode && T.searchPseudoElements && l(d.target.parentNode),
                    d.type === "attributes" && sc(d.target) && ~r1.indexOf(d.attributeName))
                        if (d.attributeName === "class" && $1(d.target)) {
                            var v = Ta(Ss(d.target))
                              , g = v.prefix
                              , w = v.iconName;
                            d.target.setAttribute(ws, g || f),
                            w && d.target.setAttribute(ks, w)
                        } else
                            B1(d.target) && i(d.target)
                })
            }
        }
        ),
        ct && aa.observe(s, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        })
    }
}
function Q1() {
    aa && aa.disconnect()
}
function K1(e) {
    var t = e.getAttribute("style")
      , n = [];
    return t && (n = t.split(";").reduce(function(r, i) {
        var a = i.split(":")
          , l = a[0]
          , o = a.slice(1);
        return l && o.length > 0 && (r[l] = o.join(":").trim()),
        r
    }, {})),
    n
}
function X1(e) {
    var t = e.getAttribute("data-prefix")
      , n = e.getAttribute("data-icon")
      , r = e.innerText !== void 0 ? e.innerText.trim() : ""
      , i = Ta(Ss(e));
    return i.prefix || (i.prefix = At()),
    t && n && (i.prefix = t,
    i.iconName = n),
    i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = _1(i.prefix, e.innerText) || Ps(i.prefix, co(e.innerText))),
    !i.iconName && T.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)),
    i
}
function G1(e) {
    var t = Un(e.attributes).reduce(function(i, a) {
        return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value),
        i
    }, {})
      , n = e.getAttribute("title")
      , r = e.getAttribute("data-fa-title-id");
    return T.autoA11y && (n ? t["aria-labelledby"] = "".concat(T.replacementClass, "-title-").concat(r || Lr()) : (t["aria-hidden"] = "true",
    t.focusable = "false")),
    t
}
function Z1() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: Ke,
        symbol: !1,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    }
}
function fc(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        styleParser: !0
    }
      , n = X1(e)
      , r = n.iconName
      , i = n.prefix
      , a = n.rest
      , l = G1(e)
      , o = po("parseNodeAttributes", {}, e)
      , s = t.styleParser ? K1(e) : [];
    return C({
        iconName: r,
        title: e.getAttribute("title"),
        titleId: e.getAttribute("data-fa-title-id"),
        prefix: i,
        transform: Ke,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
            classes: a,
            styles: s,
            attributes: l
        }
    }, o)
}
var q1 = $e.styles;
function gp(e) {
    var t = T.autoReplaceSvg === "nest" ? fc(e, {
        styleParser: !1
    }) : fc(e);
    return ~t.extra.classes.indexOf(Jd) ? st("generateLayersText", e, t) : st("generateSvgReplacementMutation", e, t)
}
var Lt = new Set;
xs.map(function(e) {
    Lt.add("fa-".concat(e))
});
Object.keys(jr[B]).map(Lt.add.bind(Lt));
Object.keys(jr[G]).map(Lt.add.bind(Lt));
Lt = Ur(Lt);
function dc(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!ct)
        return Promise.resolve();
    var n = H.documentElement.classList
      , r = function(d) {
        return n.add("".concat(ec, "-").concat(d))
    }
      , i = function(d) {
        return n.remove("".concat(ec, "-").concat(d))
    }
      , a = T.autoFetchSvg ? Lt : xs.map(function(f) {
        return "fa-".concat(f)
    }).concat(Object.keys(q1));
    a.includes("fa") || a.push("fa");
    var l = [".".concat(Jd, ":not([").concat(en, "])")].concat(a.map(function(f) {
        return ".".concat(f, ":not([").concat(en, "])")
    })).join(", ");
    if (l.length === 0)
        return Promise.resolve();
    var o = [];
    try {
        o = Un(e.querySelectorAll(l))
    } catch {}
    if (o.length > 0)
        r("pending"),
        i("complete");
    else
        return Promise.resolve();
    var s = Os.begin("onTree")
      , u = o.reduce(function(f, d) {
        try {
            var v = gp(d);
            v && f.push(v)
        } catch (g) {
            qd || g.name === "MissingIcon" && console.error(g)
        }
        return f
    }, []);
    return new Promise(function(f, d) {
        Promise.all(u).then(function(v) {
            vp(v, function() {
                r("active"),
                r("complete"),
                i("pending"),
                typeof t == "function" && t(),
                s(),
                f()
            })
        }).catch(function(v) {
            s(),
            d(v)
        })
    }
    )
}
function J1(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    gp(e).then(function(n) {
        n && vp([n], t)
    })
}
function e0(e) {
    return function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , r = (t || {}).icon ? t : mo(t || {})
          , i = n.mask;
        return i && (i = (i || {}).icon ? i : mo(i || {})),
        e(r, C(C({}, n), {}, {
            mask: i
        }))
    }
}
var t0 = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , r = n.transform
      , i = r === void 0 ? Ke : r
      , a = n.symbol
      , l = a === void 0 ? !1 : a
      , o = n.mask
      , s = o === void 0 ? null : o
      , u = n.maskId
      , f = u === void 0 ? null : u
      , d = n.title
      , v = d === void 0 ? null : d
      , g = n.titleId
      , w = g === void 0 ? null : g
      , k = n.classes
      , S = k === void 0 ? [] : k
      , p = n.attributes
      , c = p === void 0 ? {} : p
      , m = n.styles
      , y = m === void 0 ? {} : m;
    if (t) {
        var E = t.prefix
          , _ = t.iconName
          , N = t.icon;
        return ja(C({
            type: "icon"
        }, t), function() {
            return tn("beforeDOMElementCreation", {
                iconDefinition: t,
                params: n
            }),
            T.autoA11y && (v ? c["aria-labelledby"] = "".concat(T.replacementClass, "-title-").concat(w || Lr()) : (c["aria-hidden"] = "true",
            c.focusable = "false")),
            Ns({
                icons: {
                    main: vo(N),
                    mask: s ? vo(s.icon) : {
                        found: !1,
                        width: null,
                        height: null,
                        icon: {}
                    }
                },
                prefix: E,
                iconName: _,
                transform: C(C({}, Ke), i),
                symbol: l,
                title: v,
                maskId: f,
                titleId: w,
                extra: {
                    attributes: c,
                    styles: y,
                    classes: S
                }
            })
        })
    }
}
  , n0 = {
    mixout: function() {
        return {
            icon: e0(t0)
        }
    },
    hooks: function() {
        return {
            mutationObserverCallbacks: function(n) {
                return n.treeCallback = dc,
                n.nodeCallback = J1,
                n
            }
        }
    },
    provides: function(t) {
        t.i2svg = function(n) {
            var r = n.node
              , i = r === void 0 ? H : r
              , a = n.callback
              , l = a === void 0 ? function() {}
            : a;
            return dc(i, l)
        }
        ,
        t.generateSvgReplacementMutation = function(n, r) {
            var i = r.iconName
              , a = r.title
              , l = r.titleId
              , o = r.prefix
              , s = r.transform
              , u = r.symbol
              , f = r.mask
              , d = r.maskId
              , v = r.extra;
            return new Promise(function(g, w) {
                Promise.all([ho(i, o), f.iconName ? ho(f.iconName, f.prefix) : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {}
                })]).then(function(k) {
                    var S = gs(k, 2)
                      , p = S[0]
                      , c = S[1];
                    g([n, Ns({
                        icons: {
                            main: p,
                            mask: c
                        },
                        prefix: o,
                        iconName: i,
                        transform: s,
                        symbol: u,
                        maskId: d,
                        title: a,
                        titleId: l,
                        extra: v,
                        watchable: !0
                    })])
                }).catch(w)
            }
            )
        }
        ,
        t.generateAbstractIcon = function(n) {
            var r = n.children
              , i = n.attributes
              , a = n.main
              , l = n.transform
              , o = n.styles
              , s = Na(o);
            s.length > 0 && (i.style = s);
            var u;
            return Es(l) && (u = st("generateAbstractTransformGrouping", {
                main: a,
                transform: l,
                containerWidth: a.width,
                iconWidth: a.width
            })),
            r.push(u || a.icon),
            {
                children: r,
                attributes: i
            }
        }
    }
}
  , r0 = {
    mixout: function() {
        return {
            layer: function(n) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , i = r.classes
                  , a = i === void 0 ? [] : i;
                return ja({
                    type: "layer"
                }, function() {
                    tn("beforeDOMElementCreation", {
                        assembler: n,
                        params: r
                    });
                    var l = [];
                    return n(function(o) {
                        Array.isArray(o) ? o.map(function(s) {
                            l = l.concat(s.abstract)
                        }) : l = l.concat(o.abstract)
                    }),
                    [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(T.cssPrefix, "-layers")].concat(Ur(a)).join(" ")
                        },
                        children: l
                    }]
                })
            }
        }
    }
}
  , i0 = {
    mixout: function() {
        return {
            counter: function(n) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , i = r.title
                  , a = i === void 0 ? null : i
                  , l = r.classes
                  , o = l === void 0 ? [] : l
                  , s = r.attributes
                  , u = s === void 0 ? {} : s
                  , f = r.styles
                  , d = f === void 0 ? {} : f;
                return ja({
                    type: "counter",
                    content: n
                }, function() {
                    return tn("beforeDOMElementCreation", {
                        content: n,
                        params: r
                    }),
                    F1({
                        content: n.toString(),
                        title: a,
                        extra: {
                            attributes: u,
                            styles: d,
                            classes: ["".concat(T.cssPrefix, "-layers-counter")].concat(Ur(o))
                        }
                    })
                })
            }
        }
    }
}
  , a0 = {
    mixout: function() {
        return {
            text: function(n) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , i = r.transform
                  , a = i === void 0 ? Ke : i
                  , l = r.title
                  , o = l === void 0 ? null : l
                  , s = r.classes
                  , u = s === void 0 ? [] : s
                  , f = r.attributes
                  , d = f === void 0 ? {} : f
                  , v = r.styles
                  , g = v === void 0 ? {} : v;
                return ja({
                    type: "text",
                    content: n
                }, function() {
                    return tn("beforeDOMElementCreation", {
                        content: n,
                        params: r
                    }),
                    lc({
                        content: n,
                        transform: C(C({}, Ke), a),
                        title: o,
                        extra: {
                            attributes: d,
                            styles: g,
                            classes: ["".concat(T.cssPrefix, "-layers-text")].concat(Ur(u))
                        }
                    })
                })
            }
        }
    },
    provides: function(t) {
        t.generateLayersText = function(n, r) {
            var i = r.title
              , a = r.transform
              , l = r.extra
              , o = null
              , s = null;
            if (Xd) {
                var u = parseInt(getComputedStyle(n).fontSize, 10)
                  , f = n.getBoundingClientRect();
                o = f.width / u,
                s = f.height / u
            }
            return T.autoA11y && !i && (l.attributes["aria-hidden"] = "true"),
            Promise.resolve([n, lc({
                content: n.innerHTML,
                width: o,
                height: s,
                transform: a,
                title: i,
                extra: l,
                watchable: !0
            })])
        }
    }
}
  , l0 = new RegExp('"',"ug")
  , pc = [1105920, 1112319];
function o0(e) {
    var t = e.replace(l0, "")
      , n = k1(t, 0)
      , r = n >= pc[0] && n <= pc[1]
      , i = t.length === 2 ? t[0] === t[1] : !1;
    return {
        value: co(i ? t[0] : t),
        isSecondary: r || i
    }
}
function mc(e, t) {
    var n = "".concat(Xh).concat(t.replace(":", "-"));
    return new Promise(function(r, i) {
        if (e.getAttribute(n) !== null)
            return r();
        var a = Un(e.children)
          , l = a.filter(function(N) {
            return N.getAttribute(uo) === t
        })[0]
          , o = zt.getComputedStyle(e, t)
          , s = o.getPropertyValue("font-family").match(e1)
          , u = o.getPropertyValue("font-weight")
          , f = o.getPropertyValue("content");
        if (l && !s)
            return e.removeChild(l),
            r();
        if (s && f !== "none" && f !== "") {
            var d = o.getPropertyValue("content")
              , v = ~["Sharp"].indexOf(s[2]) ? G : B
              , g = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? Ir[v][s[2].toLowerCase()] : t1[v][u]
              , w = o0(d)
              , k = w.value
              , S = w.isSecondary
              , p = s[0].startsWith("FontAwesome")
              , c = Ps(g, k)
              , m = c;
            if (p) {
                var y = N1(k);
                y.iconName && y.prefix && (c = y.iconName,
                g = y.prefix)
            }
            if (c && !S && (!l || l.getAttribute(ws) !== g || l.getAttribute(ks) !== m)) {
                e.setAttribute(n, m),
                l && e.removeChild(l);
                var E = Z1()
                  , _ = E.extra;
                _.attributes[uo] = t,
                ho(c, g).then(function(N) {
                    var j = Ns(C(C({}, E), {}, {
                        icons: {
                            main: N,
                            mask: _s()
                        },
                        prefix: g,
                        iconName: m,
                        extra: _,
                        watchable: !0
                    }))
                      , b = H.createElementNS("http://www.w3.org/2000/svg", "svg");
                    t === "::before" ? e.insertBefore(b, e.firstChild) : e.appendChild(b),
                    b.outerHTML = j.map(function(L) {
                        return Br(L)
                    }).join(`
`),
                    e.removeAttribute(n),
                    r()
                }).catch(i)
            } else
                r()
        } else
            r()
    }
    )
}
function s0(e) {
    return Promise.all([mc(e, "::before"), mc(e, "::after")])
}
function u0(e) {
    return e.parentNode !== document.head && !~Zh.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(uo) && (!e.parentNode || e.parentNode.tagName !== "svg")
}
function vc(e) {
    if (ct)
        return new Promise(function(t, n) {
            var r = Un(e.querySelectorAll("*")).filter(u0).map(s0)
              , i = Os.begin("searchPseudoElements");
            hp(),
            Promise.all(r).then(function() {
                i(),
                yo(),
                t()
            }).catch(function() {
                i(),
                yo(),
                n()
            })
        }
        )
}
var c0 = {
    hooks: function() {
        return {
            mutationObserverCallbacks: function(n) {
                return n.pseudoElementsCallback = vc,
                n
            }
        }
    },
    provides: function(t) {
        t.pseudoElements2svg = function(n) {
            var r = n.node
              , i = r === void 0 ? H : r;
            T.searchPseudoElements && vc(i)
        }
    }
}
  , hc = !1
  , f0 = {
    mixout: function() {
        return {
            dom: {
                unwatch: function() {
                    hp(),
                    hc = !0
                }
            }
        }
    },
    hooks: function() {
        return {
            bootstrap: function() {
                cc(po("mutationObserverCallbacks", {}))
            },
            noAuto: function() {
                Q1()
            },
            watch: function(n) {
                var r = n.observeMutationsRoot;
                hc ? yo() : cc(po("mutationObserverCallbacks", {
                    observeMutationsRoot: r
                }))
            }
        }
    }
}
  , gc = function(t) {
    var n = {
        size: 16,
        x: 0,
        y: 0,
        flipX: !1,
        flipY: !1,
        rotate: 0
    };
    return t.toLowerCase().split(" ").reduce(function(r, i) {
        var a = i.toLowerCase().split("-")
          , l = a[0]
          , o = a.slice(1).join("-");
        if (l && o === "h")
            return r.flipX = !0,
            r;
        if (l && o === "v")
            return r.flipY = !0,
            r;
        if (o = parseFloat(o),
        isNaN(o))
            return r;
        switch (l) {
        case "grow":
            r.size = r.size + o;
            break;
        case "shrink":
            r.size = r.size - o;
            break;
        case "left":
            r.x = r.x - o;
            break;
        case "right":
            r.x = r.x + o;
            break;
        case "up":
            r.y = r.y - o;
            break;
        case "down":
            r.y = r.y + o;
            break;
        case "rotate":
            r.rotate = r.rotate + o;
            break
        }
        return r
    }, n)
}
  , d0 = {
    mixout: function() {
        return {
            parse: {
                transform: function(n) {
                    return gc(n)
                }
            }
        }
    },
    hooks: function() {
        return {
            parseNodeAttributes: function(n, r) {
                var i = r.getAttribute("data-fa-transform");
                return i && (n.transform = gc(i)),
                n
            }
        }
    },
    provides: function(t) {
        t.generateAbstractTransformGrouping = function(n) {
            var r = n.main
              , i = n.transform
              , a = n.containerWidth
              , l = n.iconWidth
              , o = {
                transform: "translate(".concat(a / 2, " 256)")
            }
              , s = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") ")
              , u = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") ")
              , f = "rotate(".concat(i.rotate, " 0 0)")
              , d = {
                transform: "".concat(s, " ").concat(u, " ").concat(f)
            }
              , v = {
                transform: "translate(".concat(l / 2 * -1, " -256)")
            }
              , g = {
                outer: o,
                inner: d,
                path: v
            };
            return {
                tag: "g",
                attributes: C({}, g.outer),
                children: [{
                    tag: "g",
                    attributes: C({}, g.inner),
                    children: [{
                        tag: r.icon.tag,
                        children: r.icon.children,
                        attributes: C(C({}, r.icon.attributes), g.path)
                    }]
                }]
            }
        }
    }
}
  , ul = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
};
function yc(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"),
    e
}
function p0(e) {
    return e.tag === "g" ? e.children : [e]
}
var m0 = {
    hooks: function() {
        return {
            parseNodeAttributes: function(n, r) {
                var i = r.getAttribute("data-fa-mask")
                  , a = i ? Ta(i.split(" ").map(function(l) {
                    return l.trim()
                })) : _s();
                return a.prefix || (a.prefix = At()),
                n.mask = a,
                n.maskId = r.getAttribute("data-fa-mask-id"),
                n
            }
        }
    },
    provides: function(t) {
        t.generateAbstractMask = function(n) {
            var r = n.children
              , i = n.attributes
              , a = n.main
              , l = n.mask
              , o = n.maskId
              , s = n.transform
              , u = a.width
              , f = a.icon
              , d = l.width
              , v = l.icon
              , g = d1({
                transform: s,
                containerWidth: d,
                iconWidth: u
            })
              , w = {
                tag: "rect",
                attributes: C(C({}, ul), {}, {
                    fill: "white"
                })
            }
              , k = f.children ? {
                children: f.children.map(yc)
            } : {}
              , S = {
                tag: "g",
                attributes: C({}, g.inner),
                children: [yc(C({
                    tag: f.tag,
                    attributes: C(C({}, f.attributes), g.path)
                }, k))]
            }
              , p = {
                tag: "g",
                attributes: C({}, g.outer),
                children: [S]
            }
              , c = "mask-".concat(o || Lr())
              , m = "clip-".concat(o || Lr())
              , y = {
                tag: "mask",
                attributes: C(C({}, ul), {}, {
                    id: c,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [w, p]
            }
              , E = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: m
                    },
                    children: p0(v)
                }, y]
            };
            return r.push(E, {
                tag: "rect",
                attributes: C({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(m, ")"),
                    mask: "url(#".concat(c, ")")
                }, ul)
            }),
            {
                children: r,
                attributes: i
            }
        }
    }
}
  , v0 = {
    provides: function(t) {
        var n = !1;
        zt.matchMedia && (n = zt.matchMedia("(prefers-reduced-motion: reduce)").matches),
        t.missingIconAbstract = function() {
            var r = []
              , i = {
                fill: "currentColor"
            }
              , a = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
            };
            r.push({
                tag: "path",
                attributes: C(C({}, i), {}, {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                })
            });
            var l = C(C({}, a), {}, {
                attributeName: "opacity"
            })
              , o = {
                tag: "circle",
                attributes: C(C({}, i), {}, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: []
            };
            return n || o.children.push({
                tag: "animate",
                attributes: C(C({}, a), {}, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                })
            }, {
                tag: "animate",
                attributes: C(C({}, l), {}, {
                    values: "1;0;1;1;0;1;"
                })
            }),
            r.push(o),
            r.push({
                tag: "path",
                attributes: C(C({}, i), {}, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: n ? [] : [{
                    tag: "animate",
                    attributes: C(C({}, l), {}, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }),
            n || r.push({
                tag: "path",
                attributes: C(C({}, i), {}, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: C(C({}, l), {}, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }),
            {
                tag: "g",
                attributes: {
                    class: "missing"
                },
                children: r
            }
        }
    }
}
  , h0 = {
    hooks: function() {
        return {
            parseNodeAttributes: function(n, r) {
                var i = r.getAttribute("data-fa-symbol")
                  , a = i === null ? !1 : i === "" ? !0 : i;
                return n.symbol = a,
                n
            }
        }
    }
}
  , g0 = [v1, n0, r0, i0, a0, c0, f0, d0, m0, v0, h0];
j1(g0, {
    mixoutsTo: Te
});
Te.noAuto;
Te.config;
Te.library;
Te.dom;
var wo = Te.parse;
Te.findIconDefinition;
Te.toHtml;
var y0 = Te.icon;
Te.layer;
Te.text;
Te.counter;
var yp = {
    exports: {}
}
  , w0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , k0 = w0
  , x0 = k0;
function wp() {}
function kp() {}
kp.resetWarningCache = wp;
var S0 = function() {
    function e(r, i, a, l, o, s) {
        if (s !== x0) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: kp,
        resetWarningCache: wp
    };
    return n.PropTypes = n,
    n
};
yp.exports = S0();
var E0 = yp.exports;
const R = xc(E0);
function wc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function kt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? wc(Object(n), !0).forEach(function(r) {
            kn(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function la(e) {
    "@babel/helpers - typeof";
    return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    la(e)
}
function kn(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function C0(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, a;
    for (a = 0; a < r.length; a++)
        i = r[a],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function P0(e, t) {
    if (e == null)
        return {};
    var n = C0(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            r = a[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function ko(e) {
    return _0(e) || N0(e) || O0(e) || T0()
}
function _0(e) {
    if (Array.isArray(e))
        return xo(e)
}
function N0(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function O0(e, t) {
    if (e) {
        if (typeof e == "string")
            return xo(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return xo(e, t)
    }
}
function xo(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function T0() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function j0(e) {
    var t, n = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, l = e.shake, o = e.flash, s = e.spin, u = e.spinPulse, f = e.spinReverse, d = e.pulse, v = e.fixedWidth, g = e.inverse, w = e.border, k = e.listItem, S = e.flip, p = e.size, c = e.rotation, m = e.pull, y = (t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": a,
        "fa-shake": l,
        "fa-flash": o,
        "fa-spin": s,
        "fa-spin-reverse": f,
        "fa-spin-pulse": u,
        "fa-pulse": d,
        "fa-fw": v,
        "fa-inverse": g,
        "fa-border": w,
        "fa-li": k,
        "fa-flip": S === !0,
        "fa-flip-horizontal": S === "horizontal" || S === "both",
        "fa-flip-vertical": S === "vertical" || S === "both"
    },
    kn(t, "fa-".concat(p), typeof p < "u" && p !== null),
    kn(t, "fa-rotate-".concat(c), typeof c < "u" && c !== null && c !== 0),
    kn(t, "fa-pull-".concat(m), typeof m < "u" && m !== null),
    kn(t, "fa-swap-opacity", e.swapOpacity),
    t);
    return Object.keys(y).map(function(E) {
        return y[E] ? E : null
    }).filter(function(E) {
        return E
    })
}
function I0(e) {
    return e = e - 0,
    e === e
}
function xp(e) {
    return I0(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
        return n ? n.toUpperCase() : ""
    }),
    e.substr(0, 1).toLowerCase() + e.substr(1))
}
var z0 = ["style"];
function A0(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
function L0(e) {
    return e.split(";").map(function(t) {
        return t.trim()
    }).filter(function(t) {
        return t
    }).reduce(function(t, n) {
        var r = n.indexOf(":")
          , i = xp(n.slice(0, r))
          , a = n.slice(r + 1).trim();
        return i.startsWith("webkit") ? t[A0(i)] = a : t[i] = a,
        t
    }, {})
}
function Sp(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof t == "string")
        return t;
    var r = (t.children || []).map(function(s) {
        return Sp(e, s)
    })
      , i = Object.keys(t.attributes || {}).reduce(function(s, u) {
        var f = t.attributes[u];
        switch (u) {
        case "class":
            s.attrs.className = f,
            delete t.attributes.class;
            break;
        case "style":
            s.attrs.style = L0(f);
            break;
        default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? s.attrs[u.toLowerCase()] = f : s.attrs[xp(u)] = f
        }
        return s
    }, {
        attrs: {}
    })
      , a = n.style
      , l = a === void 0 ? {} : a
      , o = P0(n, z0);
    return i.attrs.style = kt(kt({}, i.attrs.style), l),
    e.apply(void 0, [t.tag, kt(kt({}, i.attrs), o)].concat(ko(r)))
}
var Ep = !1;
try {
    Ep = !0
} catch {}
function R0() {
    if (!Ep && console && typeof console.error == "function") {
        var e;
        (e = console).error.apply(e, arguments)
    }
}
function kc(e) {
    if (e && la(e) === "object" && e.prefix && e.iconName && e.icon)
        return e;
    if (wo.icon)
        return wo.icon(e);
    if (e === null)
        return null;
    if (e && la(e) === "object" && e.prefix && e.iconName)
        return e;
    if (Array.isArray(e) && e.length === 2)
        return {
            prefix: e[0],
            iconName: e[1]
        };
    if (typeof e == "string")
        return {
            prefix: "fas",
            iconName: e
        }
}
function cl(e, t) {
    return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? kn({}, e, t) : {}
}
var xt = sa.forwardRef(function(e, t) {
    var n = e.icon
      , r = e.mask
      , i = e.symbol
      , a = e.className
      , l = e.title
      , o = e.titleId
      , s = e.maskId
      , u = kc(n)
      , f = cl("classes", [].concat(ko(j0(e)), ko(a.split(" "))))
      , d = cl("transform", typeof e.transform == "string" ? wo.transform(e.transform) : e.transform)
      , v = cl("mask", kc(r))
      , g = y0(u, kt(kt(kt(kt({}, f), d), v), {}, {
        symbol: i,
        title: l,
        titleId: o,
        maskId: s
    }));
    if (!g)
        return R0("Could not find icon", u),
        null;
    var w = g.abstract
      , k = {
        ref: t
    };
    return Object.keys(e).forEach(function(S) {
        xt.defaultProps.hasOwnProperty(S) || (k[S] = e[S])
    }),
    M0(w[0], k)
});
xt.displayName = "FontAwesomeIcon";
xt.propTypes = {
    beat: R.bool,
    border: R.bool,
    beatFade: R.bool,
    bounce: R.bool,
    className: R.string,
    fade: R.bool,
    flash: R.bool,
    mask: R.oneOfType([R.object, R.array, R.string]),
    maskId: R.string,
    fixedWidth: R.bool,
    inverse: R.bool,
    flip: R.oneOf([!0, !1, "horizontal", "vertical", "both"]),
    icon: R.oneOfType([R.object, R.array, R.string]),
    listItem: R.bool,
    pull: R.oneOf(["right", "left"]),
    pulse: R.bool,
    rotation: R.oneOf([0, 90, 180, 270]),
    shake: R.bool,
    size: R.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
    spin: R.bool,
    spinPulse: R.bool,
    spinReverse: R.bool,
    symbol: R.oneOfType([R.bool, R.string]),
    title: R.string,
    titleId: R.string,
    transform: R.oneOfType([R.string, R.object]),
    swapOpacity: R.bool
};
xt.defaultProps = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1
};
var M0 = Sp.bind(null, sa.createElement)
  , F0 = {
    prefix: "fab",
    iconName: "github",
    icon: [496, 512, [], "f09b", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]
}
  , b0 = {
    prefix: "fas",
    iconName: "bars",
    icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]
}
  , D0 = {
    prefix: "fas",
    iconName: "house",
    icon: [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]
}
  , U0 = {
    prefix: "far",
    iconName: "user",
    icon: [448, 512, [128100, 62144], "f007", "M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]
};
function $0() {
    return h.jsx(h.Fragment, {
        children: h.jsxs("div", {
            className: "header-wrapper",
            children: [h.jsxs("div", {
                className: "header-logo-wrapper",
                children: [h.jsx("div", {
                    className: "header-logo-image-wrapper",
                    children: h.jsx("img", {
                        src: "/images/logo/logo-transparent.png",
                        alt: "logo image"
                    })
                }), h.jsx("span", {
                    className: "header-logo-text-wrapper",
                    children: h.jsx("strong", {
                        children: "Ruta del Agua de Telde"
                    })
                })]
            }), h.jsxs("div", {
                className: "header-menu-options",
                children: [h.jsx("span", {
                    className: "active",
                    children: "Inicio"
                }), h.jsx("span", {
                    children: "Paradas"
                }), h.jsx("span", {
                    children: "Contacto"
                })]
            }), h.jsxs("div", {
                className: "header-icons",
                children: [h.jsx(xt, {
                    className: "header-icons-desktop",
                    icon: F0
                }), h.jsx(xt, {
                    className: "header-icons-desktop",
                    icon: D0
                }), h.jsx(xt, {
                    className: "header-icons-desktop",
                    icon: U0
                }), h.jsx(xt, {
                    id: "header-icons-menu",
                    icon: b0
                })]
            })]
        })
    })
}
let B0 = [{
    src: "20240126_084119",
    title: "conoce Telde",
    description: "Acompañanos a descubrir las viejas costumbres que aun caminan en la ciudad de Telde."
}, {
    src: "20240126_084249",
    title: "Rúbrica",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_115015",
    title: "Naturaleza",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_113628",
    title: "Historia",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_120356",
    title: "Convivencia",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_120531",
    title: "Raíces de un pueblo",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}];
function W0() {
    return h.jsx(h.Fragment, {
        children: h.jsxs("div", {
            className: "image-array-full-wrapper",
            children: [h.jsx("div", {
                className: "image-array-full-little-title",
                children: "La ruta del agua de Telde"
            }), h.jsx("div", {
                className: "image-array-full-big-title",
                children: "un proyecto, dos centros..."
            }), h.jsx("div", {
                className: "image-array-full-tiny-title",
                children: "un proyecto, dos centros, tres logos"
            }), h.jsx("div", {
                className: "image-array-full-images-wrapper",
                children: B0.map((e,t)=>h.jsxs("div", {
                    className: "image-array-full-unit",
                    children: [h.jsx("div", {
                        className: "image-array-full-unit-image-wrapper",
                        children: h.jsx("img", {
                            src: `/images/route/${e.src}.jpg`,
                            alt: "array image"
                        })
                    }), h.jsxs("div", {
                        className: "image-array-full-unit-text",
                        children: [h.jsx("h3", {
                            children: e.title
                        }), h.jsxs("p", {
                            children: [e.description, " ", h.jsx("a", {
                                href: "#",
                                children: "Leer más..."
                            })]
                        })]
                    })]
                }, t))
            })]
        })
    })
}
let H0 = [{
    src: "20240126_084119",
    title: "Presentación",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_084249",
    title: "Rúbrica",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_115015",
    title: "Naturaleza",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_113628",
    title: "Historia",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_120356",
    title: "Convivencia",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_120531",
    title: "Raíces de un pueblo",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}];
function V0() {
    return h.jsx(h.Fragment, {
        children: h.jsxs("div", {
            className: "image-array-image-and-text-wrapper",
            children: [h.jsx("div", {
                className: "image-array-image-and-text-little-title",
                children: "La ruta del agua de Telde"
            }), h.jsx("div", {
                className: "image-array-image-and-text-big-title",
                children: "un proyecto, dos centros, tres logos..."
            }), h.jsx("div", {
                className: "image-array-image-and-text-tiny-title",
                children: "un proyecto, dos centros, tres logos, dos profesores y mucho alumnado."
            }), h.jsx("div", {
                className: "image-array-image-and-text-images-wrapper",
                children: H0.map((e,t)=>h.jsxs("div", {
                    className: "image-array-image-and-text-unit",
                    children: [h.jsx("div", {
                        className: "image-array-image-and-text-unit-image-wrapper",
                        children: h.jsx("img", {
                            src: `/images/route/${e.src}.jpg`,
                            alt: "array image"
                        })
                    }), h.jsxs("div", {
                        className: "image-array-image-and-text-unit-text",
                        children: [h.jsx("h2", {
                            children: e.title
                        }), h.jsx("p", {
                            children: e.description
                        }), h.jsx("button", {
                            children: "Leer más..."
                        })]
                    })]
                }, t))
            })]
        })
    })
}
let Y0 = [{
    src: "logo-ies-el-rincon.png",
    title: "IES El Rincón",
    description: "Su alumnado realiza el sitio web."
}, {
    src: "logo-cifp-san-cristobal.png",
    title: "CIFP San Cristóbal",
    description: "Su alumnado realiza la ruta turística."
}, {
    src: "logo-transparent.png",
    title: "IES El Rincón",
    description: "Su alumnado realiza el sitio web."
}];
function Q0() {
    return h.jsx(h.Fragment, {
        children: h.jsxs("div", {
            className: "image-array-logos-wrapper",
            children: [h.jsx("div", {
                className: "image-array-logos-little-title",
                children: "La ruta del agua de Telde"
            }), h.jsx("div", {
                className: "image-array-logos-big-title",
                children: "un proyecto, dos centros, tres logos..."
            }), h.jsx("div", {
                className: "image-array-logos-images-wrapper",
                children: Y0.map((e,t)=>h.jsx("div", {
                    className: "image-array-logos-unit",
                    children: h.jsx("div", {
                        className: "image-array-logos-unit-image-wrapper",
                        children: h.jsx("img", {
                            src: `/images/logo/${e.src}`,
                            alt: "array image"
                        })
                    })
                }, t))
            })]
        })
    })
}
let K0 = [{
    src: "20240126_084119",
    title: "Presentación",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_084249",
    title: "Rúbrica",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_115015",
    title: "Naturaleza",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_113628",
    title: "Historia",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_120356",
    title: "Convivencia",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}, {
    src: "20240126_120531",
    title: "Raíces de un pueblo",
    description: "Una descripción de la imagen que sea de dos líneas o así."
}];
function X0() {
    return h.jsx(h.Fragment, {
        children: h.jsxs("div", {
            className: "image-array-wrapper",
            children: [h.jsx("div", {
                className: "image-array-little-title",
                children: "La ruta del agua de Telde"
            }), h.jsx("div", {
                className: "image-array-big-title",
                children: "una historia contada en seis imágenes"
            }), h.jsx("div", {
                className: "image-array-images-wrapper",
                children: K0.map((e,t)=>h.jsxs("div", {
                    className: "image-array-unit",
                    children: [h.jsx("div", {
                        className: "image-array-unit-image-wrapper",
                        children: h.jsx("img", {
                            src: `/images/route/${e.src}.jpg`,
                            alt: "array image"
                        })
                    }), h.jsx("h5", {
                        children: e.title
                    }), h.jsx("p", {
                        children: e.description
                    })]
                }, t))
            })]
        })
    })
}
function G0() {
    return h.jsx("div", {
        className: "loader"
    })
}
function Z0({imageUrl: e}) {
    const [t,n] = I.useState(!0)
      , r = ()=>{
        n(!1)
    }
    ;
    return h.jsxs(h.Fragment, {
        children: [h.jsx("div", {
            className: t ? "image-with-spinner-spinner-shown" : "image-with-spinner-spinner-hidden",
            children: h.jsx(G0, {})
        }), h.jsx("img", {
            className: t ? "image-with-spinner-image-hidden" : "image-with-spinner-image-shown",
            src: e,
            alt: "image",
            onLoad: r
        })]
    })
}
function q0() {
    return h.jsx("div", {
        className: "landing-image-wrapper",
        children: h.jsx(Z0, {
            imageUrl: "/images/route/20240126_115435.jpg"
        })
    })
}
function J0() {
    return h.jsx("a", {
        href: "#",
        className: "stt",
        title: "scroll to top"
    })
}
function eg() {
    return h.jsxs(h.Fragment, {
        children: [h.jsx($0, {}), h.jsx(q0, {}), h.jsx(Q0, {}), h.jsx(W0, {}), h.jsx(X0, {}), h.jsx(Dh, {}), h.jsx(V0, {}), h.jsx(bh, {}), h.jsx(J0, {})]
    })
}
function tg() {
    return h.jsx(h.Fragment, {
        children: h.jsx(Fh, {
            children: h.jsx(Lh, {
                children: h.jsx(Hd, {
                    path: "/",
                    element: h.jsx(eg, {})
                })
            })
        })
    })
}
fl.createRoot(document.getElementById("root")).render(h.jsx(sa.StrictMode, {
    children: h.jsx(tg, {})
}));
