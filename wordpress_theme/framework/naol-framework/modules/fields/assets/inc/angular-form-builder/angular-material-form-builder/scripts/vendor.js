/**
 * @license AngularJS v1.6.9
 * (c) 2010-2018 Google, Inc. http://angularjs.org
 * License: MIT
 */
! function(e) {
    "use strict";

    function t(e) {
        return y(e) ? void(E(e.objectMaxDepth) && (Qr.objectMaxDepth = n(e.objectMaxDepth) ? e.objectMaxDepth : 0 / 0)) : Qr
    }

    function n(e) {
        return w(e) && e > 0
    }

    function r(e, t) {
        return t = t || Error,
            function() {
                var n, r, i = arguments[0],
                    o = arguments[1],
                    a = "[" + (e ? e + ":" : "") + i + "] ",
                    s = Y(arguments, 2).map(function(e) {
                        return xe(e, Qr.objectMaxDepth)
                    });
                for (a += o.replace(/\{\d+\}/g, function(e) {
                        var t = +e.slice(1, -1);
                        return t < s.length ? s[t] : e
                    }), a += "\nhttp://errors.angularjs.org/1.6.9/" + (e ? e + "/" : "") + i, r = 0, n = "?"; r < s.length; r++, n = "&") a += n + "p" + r + "=" + encodeURIComponent(s[r]);
                return new t(a)
            }
    }

    function i(e) {
        if (null == e || S(e)) return !1;
        if (Ei(e) || C(e) || ci && e instanceof ci) return !0;
        var t = "length" in Object(e) && e.length;
        return w(t) && (t >= 0 && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
    }

    function o(e, t, n) {
        var r, a;
        if (e)
            if (k(e))
                for (r in e) "prototype" !== r && "length" !== r && "name" !== r && e.hasOwnProperty(r) && t.call(n, e[r], r, e);
            else if (Ei(e) || i(e)) {
            var s = "object" != typeof e;
            for (r = 0, a = e.length; a > r; r++)(s || r in e) && t.call(n, e[r], r, e)
        } else if (e.forEach && e.forEach !== o) e.forEach(t, n, e);
        else if (M(e))
            for (r in e) t.call(n, e[r], r, e);
        else if ("function" == typeof e.hasOwnProperty)
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        else
            for (r in e) ni.call(e, r) && t.call(n, e[r], r, e);
        return e
    }

    function a(e, t, n) {
        for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
        return r
    }

    function s(e) {
        return function(t, n) {
            e(n, t)
        }
    }

    function c() {
        return ++$i
    }

    function l(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function d(e, t, n) {
        for (var r = e.$$hashKey, i = 0, o = t.length; o > i; ++i) {
            var a = t[i];
            if (y(a) || k(a))
                for (var s = Object.keys(a), c = 0, u = s.length; u > c; c++) {
                    var m = s[c],
                        f = a[m];
                    n && y(f) ? x(f) ? e[m] = new Date(f.valueOf()) : T(f) ? e[m] = new RegExp(f) : f.nodeName ? e[m] = f.cloneNode(!0) : L(f) ? e[m] = f.clone() : (y(e[m]) || (e[m] = Ei(f) ? [] : {}), d(e[m], [f], !0)) : e[m] = f
                }
        }
        return l(e, r), e
    }

    function u(e) {
        return d(e, ui.call(arguments, 1), !1)
    }

    function m(e) {
        return d(e, ui.call(arguments, 1), !0)
    }

    function f(e) {
        return parseInt(e, 10)
    }

    function h(e, t) {
        return u(Object.create(e), t)
    }

    function p() {}

    function g(e) {
        return e
    }

    function v(e) {
        return function() {
            return e
        }
    }

    function $(e) {
        return k(e.toString) && e.toString !== hi
    }

    function b(e) {
        return "undefined" == typeof e
    }

    function E(e) {
        return "undefined" != typeof e
    }

    function y(e) {
        return null !== e && "object" == typeof e
    }

    function M(e) {
        return null !== e && "object" == typeof e && !pi(e)
    }

    function C(e) {
        return "string" == typeof e
    }

    function w(e) {
        return "number" == typeof e
    }

    function x(e) {
        return "[object Date]" === hi.call(e)
    }

    function A(e) {
        var t = hi.call(e);
        switch (t) {
            case "[object Error]":
                return !0;
            case "[object Exception]":
                return !0;
            case "[object DOMException]":
                return !0;
            default:
                return e instanceof Error
        }
    }

    function k(e) {
        return "function" == typeof e
    }

    function T(e) {
        return "[object RegExp]" === hi.call(e)
    }

    function S(e) {
        return e && e.window === e
    }

    function N(e) {
        return e && e.$evalAsync && e.$watch
    }

    function D(e) {
        return "[object File]" === hi.call(e)
    }

    function _(e) {
        return "[object FormData]" === hi.call(e)
    }

    function O(e) {
        return "[object Blob]" === hi.call(e)
    }

    function H(e) {
        return "boolean" == typeof e
    }

    function I(e) {
        return e && k(e.then)
    }

    function R(e) {
        return e && w(e.length) && yi.test(hi.call(e))
    }

    function P(e) {
        return "[object ArrayBuffer]" === hi.call(e)
    }

    function L(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function V(e) {
        var t, n = {},
            r = e.split(",");
        for (t = 0; t < r.length; t++) n[r[t]] = !0;
        return n
    }

    function j(e) {
        return ri(e.nodeName || e[0] && e[0].nodeName)
    }

    function F(e, t) {
        return -1 !== Array.prototype.indexOf.call(e, t)
    }

    function q(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1), n
    }

    function B(e, t, r) {
        function i(e, t, n) {
            if (n--, 0 > n) return "...";
            var r, i = t.$$hashKey;
            if (Ei(e))
                for (var o = 0, s = e.length; s > o; o++) t.push(a(e[o], n));
            else if (M(e))
                for (r in e) t[r] = a(e[r], n);
            else if (e && "function" == typeof e.hasOwnProperty)
                for (r in e) e.hasOwnProperty(r) && (t[r] = a(e[r], n));
            else
                for (r in e) ni.call(e, r) && (t[r] = a(e[r], n));
            return l(t, i), t
        }

        function a(e, t) {
            if (!y(e)) return e;
            var n = c.indexOf(e);
            if (-1 !== n) return d[n];
            if (S(e) || N(e)) throw gi("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var r = !1,
                o = s(e);
            return void 0 === o && (o = Ei(e) ? [] : Object.create(pi(e)), r = !0), c.push(e), d.push(o), r ? i(e, o, t) : o
        }

        function s(e) {
            switch (hi.call(e)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new e.constructor(a(e.buffer), e.byteOffset, e.length);
                case "[object ArrayBuffer]":
                    if (!e.slice) {
                        var t = new ArrayBuffer(e.byteLength);
                        return new Uint8Array(t).set(new Uint8Array(e)), t
                    }
                    return e.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new e.constructor(e.valueOf());
                case "[object RegExp]":
                    var n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]);
                    return n.lastIndex = e.lastIndex, n;
                case "[object Blob]":
                    return new e.constructor([e], {
                        type: e.type
                    })
            }
            return k(e.cloneNode) ? e.cloneNode(!0) : void 0
        }
        var c = [],
            d = [];
        if (r = n(r) ? r : 0 / 0, t) {
            if (R(t) || P(t)) throw gi("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (e === t) throw gi("cpi", "Can't copy! Source and destination are identical.");
            return Ei(t) ? t.length = 0 : o(t, function(e, n) {
                "$$hashKey" !== n && delete t[n]
            }), c.push(e), d.push(t), i(e, t, r)
        }
        return a(e, r)
    }

    function U(e, t) {
        return e === t || e !== e && t !== t
    }

    function z(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e !== e && t !== t) return !0;
        var n, r, i, o = typeof e,
            a = typeof t;
        if (o === a && "object" === o) {
            if (!Ei(e)) {
                if (x(e)) return x(t) ? U(e.getTime(), t.getTime()) : !1;
                if (T(e)) return T(t) ? e.toString() === t.toString() : !1;
                if (N(e) || N(t) || S(e) || S(t) || Ei(t) || x(t) || T(t)) return !1;
                i = Ee();
                for (r in e)
                    if ("$" !== r.charAt(0) && !k(e[r])) {
                        if (!z(e[r], t[r])) return !1;
                        i[r] = !0
                    }
                for (r in t)
                    if (!(r in i) && "$" !== r.charAt(0) && E(t[r]) && !k(t[r])) return !1;
                return !0
            }
            if (!Ei(t)) return !1;
            if ((n = e.length) === t.length) {
                for (r = 0; n > r; r++)
                    if (!z(e[r], t[r])) return !1;
                return !0
            }
        }
        return !1
    }

    function W(e, t, n) {
        return e.concat(ui.call(t, n))
    }

    function Y(e, t) {
        return ui.call(e, t || 0)
    }

    function K(e, t) {
        var n = arguments.length > 2 ? Y(arguments, 2) : [];
        return !k(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, W(n, arguments, 0)) : t.apply(e, n)
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function G(t, n) {
        var r = n;
        return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? r = void 0 : S(n) ? r = "$WINDOW" : n && e.document === n ? r = "$DOCUMENT" : N(n) && (r = "$SCOPE"), r
    }

    function X(e, t) {
        return b(e) ? void 0 : (w(t) || (t = t ? 2 : null), JSON.stringify(e, G, t))
    }

    function J(e) {
        return C(e) ? JSON.parse(e) : e
    }

    function Z(e, t) {
        e = e.replace(Ai, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return bi(n) ? t : n
    }

    function Q(e, t) {
        return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
    }

    function ee(e, t, n) {
        n = n ? -1 : 1;
        var r = e.getTimezoneOffset(),
            i = Z(t, r);
        return Q(e, n * (i - r))
    }

    function te(e) {
        e = ci(e).clone().empty();
        var t = ci("<div>").append(e).html();
        try {
            return e[0].nodeType === Oi ? ri(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(e, t) {
                return "<" + ri(t)
            })
        } catch (n) {
            return ri(t)
        }
    }

    function ne(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {}
    }

    function re(e) {
        var t = {};
        return o((e || "").split("&"), function(e) {
            var n, r, i;
            e && (r = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), -1 !== n && (r = e.substring(0, n), i = e.substring(n + 1)), r = ne(r), E(r) && (i = E(i) ? ne(i) : !0, ni.call(t, r) ? Ei(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
        }), t
    }

    function ie(e) {
        var t = [];
        return o(e, function(e, n) {
            Ei(e) ? o(e, function(e) {
                t.push(ae(n, !0) + (e === !0 ? "" : "=" + ae(e, !0)))
            }) : t.push(ae(n, !0) + (e === !0 ? "" : "=" + ae(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function oe(e) {
        return ae(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function ae(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function se(e, t) {
        var n, r, i = ki.length;
        for (r = 0; i > r; ++r)
            if (n = ki[r] + t, C(n = e.getAttribute(n))) return n;
        return null
    }

    function ce(t) {
        var n = t.currentScript;
        if (!n) return !0;
        if (!(n instanceof e.HTMLScriptElement || n instanceof e.SVGScriptElement)) return !1;
        var r = n.attributes,
            i = [r.getNamedItem("src"), r.getNamedItem("href"), r.getNamedItem("xlink:href")];
        return i.every(function(e) {
            if (!e) return !0;
            if (!e.value) return !1;
            var n = t.createElement("a");
            if (n.href = e.value, t.location.origin === n.origin) return !0;
            switch (n.protocol) {
                case "http:":
                case "https:":
                case "ftp:":
                case "blob:":
                case "file:":
                case "data:":
                    return !0;
                default:
                    return !1
            }
        })
    }

    function le(t, n) {
        var r, i, a = {};
        if (o(ki, function(e) {
                var n = e + "app";
                !r && t.hasAttribute && t.hasAttribute(n) && (r = t, i = t.getAttribute(n))
            }), o(ki, function(e) {
                var n, o = e + "app";
                !r && (n = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (r = n, i = n.getAttribute(o))
            }), r) {
            if (!Ti) return void e.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.");
            a.strictDi = null !== se(r, "strict-di"), n(r, i ? [i] : [], a)
        }
    }

    function de(t, n, r) {
        y(r) || (r = {});
        var i = {
            strictDi: !1
        };
        r = u(i, r);
        var a = function() {
                if (t = ci(t), t.injector()) {
                    var i = t[0] === e.document ? "document" : te(t);
                    throw gi("btstrpd", "App already bootstrapped with this element '{0}'", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                n = n || [], n.unshift(["$provide", function(e) {
                    e.value("$rootElement", t)
                }]), r.debugInfoEnabled && n.push(["$compileProvider", function(e) {
                    e.debugInfoEnabled(!0)
                }]), n.unshift("ng");
                var o = mt(n, r.strictDi);
                return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                    e.$apply(function() {
                        t.data("$injector", r), n(t)(e)
                    })
                }]), o
            },
            s = /^NG_ENABLE_DEBUG_INFO!/,
            c = /^NG_DEFER_BOOTSTRAP!/;
        return e && s.test(e.name) && (r.debugInfoEnabled = !0, e.name = e.name.replace(s, "")), e && !c.test(e.name) ? a() : (e.name = e.name.replace(c, ""), vi.resumeBootstrap = function(e) {
            return o(e, function(e) {
                n.push(e)
            }), a()
        }, void(k(vi.resumeDeferredBootstrap) && vi.resumeDeferredBootstrap()))
    }

    function ue() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function me(e) {
        var t = vi.element(e).injector();
        if (!t) throw gi("test", "no injector found for element argument to getTestability");
        return t.get("$$testability")
    }

    function fe(e, t) {
        return t = t || "_", e.replace(Si, function(e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function he() {
        var t;
        if (!Ni) {
            var n = xi();
            li = b(n) ? e.jQuery : n ? e[n] : void 0, li && li.fn.on ? (ci = li, u(li.fn, {
                scope: Xi.scope,
                isolateScope: Xi.isolateScope,
                controller: Xi.controller,
                injector: Xi.injector,
                inheritedData: Xi.inheritedData
            }), t = li.cleanData, li.cleanData = function(e) {
                for (var n, r, i = 0; null != (r = e[i]); i++) n = li._data(r, "events"), n && n.$destroy && li(r).triggerHandler("$destroy");
                t(e)
            }) : ci = Pe, vi.element = ci, Ni = !0
        }
    }

    function pe(e, t, n) {
        if (!e) throw gi("areq", "Argument '{0}' is {1}", t || "?", n || "required");
        return e
    }

    function ge(e, t, n) {
        return n && Ei(e) && (e = e[e.length - 1]), pe(k(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function ve(e, t) {
        if ("hasOwnProperty" === e) throw gi("badname", "hasOwnProperty is not a valid {0} name", t)
    }

    function $e(e, t, n) {
        if (!t) return e;
        for (var r, i = t.split("."), o = e, a = i.length, s = 0; a > s; s++) r = i[s], e && (e = (o = e)[r]);
        return !n && k(e) ? K(o, e) : e
    }

    function be(e) {
        for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(t || e[i] !== n) && (t || (t = ci(ui.call(e, 0, i))), t.push(n));
        return t || e
    }

    function Ee() {
        return Object.create(null)
    }

    function ye(e) {
        if (null == e) return "";
        switch (typeof e) {
            case "string":
                break;
            case "number":
                e = "" + e;
                break;
            default:
                e = !$(e) || Ei(e) || x(e) ? X(e) : e.toString()
        }
        return e
    }

    function Me(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n())
        }
        var n = r("$injector"),
            i = r("ng"),
            o = t(e, "angular", Object);
        return o.$$minErr = o.$$minErr || r, t(o, "module", function() {
            var e = {};
            return function(r, o, a) {
                var s = {},
                    c = function(e, t) {
                        if ("hasOwnProperty" === e) throw i("badname", "hasOwnProperty is not a valid {0} name", t)
                    };
                return c(r, "module"), o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
                    function e(e, t, n, r) {
                        return r || (r = c),
                            function() {
                                return r[n || "push"]([e, t, arguments]), m
                            }
                    }

                    function t(e, t, n) {
                        return n || (n = c),
                            function(i, o) {
                                return o && k(o) && (o.$$moduleName = r), n.push([e, t, arguments]), m
                            }
                    }
                    if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                    var c = [],
                        l = [],
                        d = [],
                        u = e("$injector", "invoke", "push", l),
                        m = {
                            _invokeQueue: c,
                            _configBlocks: l,
                            _runBlocks: d,
                            info: function(e) {
                                if (E(e)) {
                                    if (!y(e)) throw i("aobj", "Argument '{0}' must be an object", "value");
                                    return s = e, this
                                }
                                return s
                            },
                            requires: o,
                            name: r,
                            provider: t("$provide", "provider"),
                            factory: t("$provide", "factory"),
                            service: t("$provide", "service"),
                            value: e("$provide", "value"),
                            constant: e("$provide", "constant", "unshift"),
                            decorator: t("$provide", "decorator", l),
                            animation: t("$animateProvider", "register"),
                            filter: t("$filterProvider", "register"),
                            controller: t("$controllerProvider", "register"),
                            directive: t("$compileProvider", "directive"),
                            component: t("$compileProvider", "component"),
                            config: u,
                            run: function(e) {
                                return d.push(e), this
                            }
                        };
                    return a && u(a), m
                })
            }
        })
    }

    function Ce(e, t) {
        if (Ei(e)) {
            t = t || [];
            for (var n = 0, r = e.length; r > n; n++) t[n] = e[n]
        } else if (y(e)) {
            t = t || {};
            for (var i in e)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (t[i] = e[i])
        }
        return t || e
    }

    function we(e, t) {
        var r = [];
        return n(t) && (e = vi.copy(e, null, t)), JSON.stringify(e, function(e, t) {
            if (t = G(e, t), y(t)) {
                if (r.indexOf(t) >= 0) return "...";
                r.push(t)
            }
            return t
        })
    }

    function xe(e, t) {
        return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : b(e) ? "undefined" : "string" != typeof e ? we(e, t) : e
    }

    function Ae(n) {
        u(n, {
            errorHandlingConfig: t,
            bootstrap: de,
            copy: B,
            extend: u,
            merge: m,
            equals: z,
            element: ci,
            forEach: o,
            injector: mt,
            noop: p,
            bind: K,
            toJson: X,
            fromJson: J,
            identity: g,
            isUndefined: b,
            isDefined: E,
            isString: C,
            isFunction: k,
            isObject: y,
            isNumber: w,
            isElement: L,
            isArray: Ei,
            version: Pi,
            isDate: x,
            lowercase: ri,
            uppercase: ii,
            callbacks: {
                $$counter: 0
            },
            getTestability: me,
            reloadWithDebugInfo: ue,
            $$minErr: r,
            $$csp: wi,
            $$encodeUriSegment: oe,
            $$encodeUriQuery: ae,
            $$stringify: ye
        }), di = Me(e), di("ng", ["ngLocale"], ["$provide", function(e) {
            e.provider({
                $$sanitizeUri: Rn
            }), e.provider("$compile", Ct).directive({
                a: sa,
                input: ka,
                textarea: ka,
                form: fa,
                script: ys,
                select: ws,
                option: xs,
                ngBind: Na,
                ngBindHtml: _a,
                ngBindTemplate: Da,
                ngClass: Ha,
                ngClassEven: Ra,
                ngClassOdd: Ia,
                ngCloak: Pa,
                ngController: La,
                ngForm: ha,
                ngHide: hs,
                ngIf: Fa,
                ngInclude: qa,
                ngInit: Ua,
                ngNonBindable: os,
                ngPluralize: ls,
                ngRepeat: ds,
                ngShow: fs,
                ngStyle: ps,
                ngSwitch: gs,
                ngSwitchWhen: vs,
                ngSwitchDefault: $s,
                ngOptions: cs,
                ngTransclude: Es,
                ngModel: ns,
                ngList: za,
                ngChange: Oa,
                pattern: ks,
                ngPattern: ks,
                required: As,
                ngRequired: As,
                minlength: Ss,
                ngMinlength: Ss,
                maxlength: Ts,
                ngMaxlength: Ts,
                ngValue: Sa,
                ngModelOptions: is
            }).directive({
                ngInclude: Ba
            }).directive(ca).directive(Va), e.provider({
                $anchorScroll: ft,
                $animate: po,
                $animateCss: $o,
                $$animateJs: fo,
                $$animateQueue: ho,
                $$AnimateRunner: vo,
                $$animateAsyncRun: go,
                $browser: bt,
                $cacheFactory: Et,
                $controller: St,
                $document: Nt,
                $$isDocumentHidden: Dt,
                $exceptionHandler: _t,
                $filter: Jn,
                $$forceReflow: xo,
                $interpolate: Wt,
                $interval: Yt,
                $http: qt,
                $httpParamSerializer: Ht,
                $httpParamSerializerJQLike: It,
                $httpBackend: Ut,
                $xhrFactory: Bt,
                $jsonpCallbacks: Oo,
                $location: dn,
                $log: un,
                $parse: kn,
                $rootScope: In,
                $q: Tn,
                $$q: Sn,
                $sce: Fn,
                $sceDelegate: jn,
                $sniffer: qn,
                $templateCache: yt,
                $templateRequest: Bn,
                $$testability: Un,
                $timeout: zn,
                $window: Kn,
                $$rAF: Hn,
                $$jqLite: ot,
                $$Map: no,
                $$cookieReader: Xn
            })
        }]).info({
            angularVersion: "1.6.9"
        })
    }

    function ke() {
        return ++Vi
    }

    function Te(e) {
        return Ne(e.replace(Fi, "ms-"))
    }

    function Se(e, t) {
        return t.toUpperCase()
    }

    function Ne(e) {
        return e.replace(ji, Se)
    }

    function De(e) {
        return !zi.test(e)
    }

    function _e(e) {
        var t = e.nodeType;
        return t === Di || !t || t === Ii
    }

    function Oe(e) {
        for (var t in Li[e.ng339]) return !0;
        return !1
    }

    function He(e, t) {
        var n, r, i, a, s = t.createDocumentFragment(),
            c = [];
        if (De(e)) c.push(t.createTextNode(e));
        else {
            for (n = s.appendChild(t.createElement("div")), r = (Wi.exec(e) || ["", ""])[1].toLowerCase(), i = Ki[r] || Ki._default, n.innerHTML = i[1] + e.replace(Yi, "<$1></$2>") + i[2], a = i[0]; a--;) n = n.lastChild;
            c = W(c, n.childNodes), n = s.firstChild, n.textContent = ""
        }
        return s.textContent = "", s.innerHTML = "", o(c, function(e) {
            s.appendChild(e)
        }), s
    }

    function Ie(t, n) {
        n = n || e.document;
        var r;
        return (r = Ui.exec(t)) ? [n.createElement(r[1])] : (r = He(t, n)) ? r.childNodes : []
    }

    function Re(e, t) {
        var n = e.parentNode;
        n && n.replaceChild(t, e), t.appendChild(e)
    }

    function Pe(e) {
        if (e instanceof Pe) return e;
        var t;
        if (C(e) && (e = Mi(e), t = !0), !(this instanceof Pe)) {
            if (t && "<" !== e.charAt(0)) throw Bi("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Pe(e)
        }
        t ? Ye(this, Ie(e)) : k(e) ? Qe(e) : Ye(this, e)
    }

    function Le(e) {
        return e.cloneNode(!0)
    }

    function Ve(e, t) {
        !t && _e(e) && ci.cleanData([e]), e.querySelectorAll && ci.cleanData(e.querySelectorAll("*"))
    }

    function je(e, t, n, r) {
        if (E(r)) throw Bi("offargs", "jqLite#off() does not support the `selector` argument");
        var i = qe(e),
            a = i && i.events,
            s = i && i.handle;
        if (s)
            if (t) {
                var c = function(t) {
                    var r = a[t];
                    E(n) && q(r || [], n), E(n) && r && r.length > 0 || (e.removeEventListener(t, s), delete a[t])
                };
                o(t.split(" "), function(e) {
                    c(e), qi[e] && c(qi[e])
                })
            } else
                for (t in a) "$destroy" !== t && e.removeEventListener(t, s), delete a[t]
    }

    function Fe(e, t) {
        var n = e.ng339,
            r = n && Li[n];
        if (r) {
            if (t) return void delete r.data[t];
            r.handle && (r.events.$destroy && r.handle({}, "$destroy"), je(e)), delete Li[n], e.ng339 = void 0
        }
    }

    function qe(e, t) {
        var n = e.ng339,
            r = n && Li[n];
        return t && !r && (e.ng339 = n = ke(), r = Li[n] = {
            events: {},
            data: {},
            handle: void 0
        }), r
    }

    function Be(e, t, n) {
        if (_e(e)) {
            var r, i = E(n),
                o = !i && t && !y(t),
                a = !t,
                s = qe(e, !o),
                c = s && s.data;
            if (i) c[Ne(t)] = n;
            else {
                if (a) return c;
                if (o) return c && c[Ne(t)];
                for (r in t) c[Ne(r)] = t[r]
            }
        }
    }

    function Ue(e, t) {
        return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
    }

    function ze(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                r = n;
            o(t.split(" "), function(e) {
                e = Mi(e), r = r.replace(" " + e + " ", " ")
            }), r !== n && e.setAttribute("class", Mi(r))
        }
    }

    function We(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                r = n;
            o(t.split(" "), function(e) {
                e = Mi(e), -1 === r.indexOf(" " + e + " ") && (r += e + " ")
            }), r !== n && e.setAttribute("class", Mi(r))
        }
    }

    function Ye(e, t) {
        if (t)
            if (t.nodeType) e[e.length++] = t;
            else {
                var n = t.length;
                if ("number" == typeof n && t.window !== t) {
                    if (n)
                        for (var r = 0; n > r; r++) e[e.length++] = t[r]
                } else e[e.length++] = t
            }
    }

    function Ke(e, t) {
        return Ge(e, "$" + (t || "ngController") + "Controller")
    }

    function Ge(e, t, n) {
        e.nodeType === Ii && (e = e.documentElement);
        for (var r = Ei(t) ? t : [t]; e;) {
            for (var i = 0, o = r.length; o > i; i++)
                if (E(n = ci.data(e, r[i]))) return n;
            e = e.parentNode || e.nodeType === Ri && e.host
        }
    }

    function Xe(e) {
        for (Ve(e, !0); e.firstChild;) e.removeChild(e.firstChild)
    }

    function Je(e, t) {
        t || Ve(e);
        var n = e.parentNode;
        n && n.removeChild(e)
    }

    function Ze(t, n) {
        n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : ci(n).on("load", t)
    }

    function Qe(t) {
        function n() {
            e.document.removeEventListener("DOMContentLoaded", n), e.removeEventListener("load", n), t()
        }
        "complete" === e.document.readyState ? e.setTimeout(t) : (e.document.addEventListener("DOMContentLoaded", n), e.addEventListener("load", n))
    }

    function et(e, t) {
        var n = Ji[t.toLowerCase()];
        return n && Zi[j(e)] && n
    }

    function tt(e) {
        return Qi[e]
    }

    function nt(e, t) {
        var n = function(n, r) {
            n.isDefaultPrevented = function() {
                return n.defaultPrevented
            };
            var i = t[r || n.type],
                o = i ? i.length : 0;
            if (o) {
                if (b(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function() {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function() {
                    return n.immediatePropagationStopped === !0
                };
                var s = i.specialHandlerWrapper || rt;
                o > 1 && (i = Ce(i));
                for (var c = 0; o > c; c++) n.isImmediatePropagationStopped() || s(e, n, i[c])
            }
        };
        return n.elem = e, n
    }

    function rt(e, t, n) {
        n.call(e, t)
    }

    function it(e, t, n) {
        var r = t.relatedTarget;
        (!r || r !== e && !Gi.call(e, r)) && n.call(e, t)
    }

    function ot() {
        this.$get = function() {
            return u(Pe, {
                hasClass: function(e, t) {
                    return e.attr && (e = e[0]), Ue(e, t)
                },
                addClass: function(e, t) {
                    return e.attr && (e = e[0]), We(e, t)
                },
                removeClass: function(e, t) {
                    return e.attr && (e = e[0]), ze(e, t)
                }
            })
        }
    }

    function at(e, t) {
        var n = e && e.$$hashKey;
        if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
        var r = typeof e;
        return n = "function" === r || "object" === r && null !== e ? e.$$hashKey = r + ":" + (t || c)() : r + ":" + e
    }

    function st() {
        this._keys = [], this._values = [], this._lastKey = 0 / 0, this._lastIndex = -1
    }

    function ct(e) {
        return Function.prototype.toString.call(e)
    }

    function lt(e) {
        var t = ct(e).replace(so, ""),
            n = t.match(ro) || t.match(io);
        return n
    }

    function dt(e) {
        var t = lt(e);
        return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function ut(e, t, n) {
        var r, i, a;
        if ("function" == typeof e) {
            if (!(r = e.$inject)) {
                if (r = [], e.length) {
                    if (t) throw C(n) && n || (n = e.name || dt(e)), co("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                    i = lt(e), o(i[1].split(oo), function(e) {
                        e.replace(ao, function(e, t, n) {
                            r.push(n)
                        })
                    })
                }
                e.$inject = r
            }
        } else Ei(e) ? (a = e.length - 1, ge(e[a], "fn"), r = e.slice(0, a)) : ge(e, "fn", !0);
        return r
    }

    function mt(e, t) {
        function n(e) {
            return function(t, n) {
                return y(t) ? void o(t, s(e)) : e(t, n)
            }
        }

        function r(e, t) {
            if (ve(e, "service"), (k(t) || Ei(t)) && (t = M.instantiate(t)), !t.$get) throw co("pget", "Provider '{0}' must define $get factory method.", e);
            return E[e + p] = t
        }

        function i(e, t) {
            return function() {
                var n = A.invoke(t, this);
                if (b(n)) throw co("undef", "Provider '{0}' must return a value from $get factory method.", e);
                return n
            }
        }

        function a(e, t, n) {
            return r(e, {
                $get: n !== !1 ? i(e, t) : t
            })
        }

        function c(e, t) {
            return a(e, ["$injector", function(e) {
                return e.instantiate(t)
            }])
        }

        function l(e, t) {
            return a(e, v(t), !1)
        }

        function d(e, t) {
            ve(e, "constant"), E[e] = t, w[e] = t
        }

        function u(e, t) {
            var n = M.get(e + p),
                r = n.$get;
            n.$get = function() {
                var e = A.invoke(r, n);
                return A.invoke(t, null, {
                    $delegate: e
                })
            }
        }

        function m(e) {
            pe(b(e) || Ei(e), "modulesToLoad", "not an array");
            var t, n = [];
            return o(e, function(e) {
                function r(e) {
                    var t, n;
                    for (t = 0, n = e.length; n > t; t++) {
                        var r = e[t],
                            i = M.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }
                if (!$.get(e)) {
                    $.set(e, !0);
                    try {
                        C(e) ? (t = di(e), A.modules[e] = t, n = n.concat(m(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : k(e) ? n.push(M.invoke(e)) : Ei(e) ? n.push(M.invoke(e)) : ge(e, "module")
                    } catch (i) {
                        throw Ei(e) && (e = e[e.length - 1]), i.message && i.stack && -1 === i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), co("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, i.stack || i.message || i)
                    }
                }
            }), n
        }

        function f(e, n) {
            function r(t, r) {
                if (e.hasOwnProperty(t)) {
                    if (e[t] === h) throw co("cdep", "Circular dependency found: {0}", t + " <- " + g.join(" <- "));
                    return e[t]
                }
                try {
                    return g.unshift(t), e[t] = h, e[t] = n(t, r), e[t]
                } catch (i) {
                    throw e[t] === h && delete e[t], i
                } finally {
                    g.shift()
                }
            }

            function i(e, n, i) {
                for (var o = [], a = mt.$$annotate(e, t, i), s = 0, c = a.length; c > s; s++) {
                    var l = a[s];
                    if ("string" != typeof l) throw co("itkn", "Incorrect injection token! Expected service name as string, got {0}", l);
                    o.push(n && n.hasOwnProperty(l) ? n[l] : r(l, i))
                }
                return o
            }

            function o(e) {
                if (si || "function" != typeof e) return !1;
                var t = e.$$ngIsClass;
                return H(t) || (t = e.$$ngIsClass = /^(?:class\b|constructor\()/.test(ct(e))), t
            }

            function a(e, t, n, r) {
                "string" == typeof n && (r = n, n = null);
                var a = i(e, n, r);
                return Ei(e) && (e = e[e.length - 1]), o(e) ? (a.unshift(null), new(Function.prototype.bind.apply(e, a))) : e.apply(t, a)
            }

            function s(e, t, n) {
                var r = Ei(e) ? e[e.length - 1] : e,
                    o = i(e, t, n);
                return o.unshift(null), new(Function.prototype.bind.apply(r, o))
            }
            return {
                invoke: a,
                instantiate: s,
                get: r,
                annotate: mt.$$annotate,
                has: function(t) {
                    return E.hasOwnProperty(t + p) || e.hasOwnProperty(t)
                }
            }
        }
        t = t === !0;
        var h = {},
            p = "Provider",
            g = [],
            $ = new to,
            E = {
                $provide: {
                    provider: n(r),
                    factory: n(a),
                    service: n(c),
                    value: n(l),
                    constant: n(d),
                    decorator: u
                }
            },
            M = E.$injector = f(E, function(e, t) {
                throw vi.isString(t) && g.push(t), co("unpr", "Unknown provider: {0}", g.join(" <- "))
            }),
            w = {},
            x = f(w, function(e, t) {
                var n = M.get(e + p, t);
                return A.invoke(n.$get, n, void 0, e)
            }),
            A = x;
        E["$injector" + p] = {
            $get: v(x)
        }, A.modules = M.modules = Ee();
        var T = m(e);
        return A = x.get("$injector"), A.strictDi = t, o(T, function(e) {
            e && A.invoke(e)
        }), A.loadNewModules = function(e) {
            o(m(e), function(e) {
                e && A.invoke(e)
            })
        }, A
    }

    function ft() {
        var e = !0;
        this.disableAutoScrolling = function() {
            e = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
            function i(e) {
                var t = null;
                return Array.prototype.some.call(e, function(e) {
                    return "a" === j(e) ? (t = e, !0) : void 0
                }), t
            }

            function o() {
                var e = s.yOffset;
                if (k(e)) e = e();
                else if (L(e)) {
                    var n = e[0],
                        r = t.getComputedStyle(n);
                    e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                } else w(e) || (e = 0);
                return e
            }

            function a(e) {
                if (e) {
                    e.scrollIntoView();
                    var n = o();
                    if (n) {
                        var r = e.getBoundingClientRect().top;
                        t.scrollBy(0, r - n)
                    }
                } else t.scrollTo(0, 0)
            }

            function s(e) {
                e = C(e) ? e : w(e) ? e.toString() : n.hash();
                var t;
                e ? (t = c.getElementById(e)) ? a(t) : (t = i(c.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
            }
            var c = t.document;
            return e && r.$watch(function() {
                return n.hash()
            }, function(e, t) {
                (e !== t || "" !== e) && Ze(function() {
                    r.$evalAsync(s)
                })
            }), s
        }]
    }

    function ht(e, t) {
        return e || t ? e ? t ? (Ei(e) && (e = e.join(" ")), Ei(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
    }

    function pt(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (n.nodeType === uo) return n
        }
    }

    function gt(e) {
        C(e) && (e = e.split(" "));
        var t = Ee();
        return o(e, function(e) {
            e.length && (t[e] = !0)
        }), t
    }

    function vt(e) {
        return y(e) ? e : {}
    }

    function $t(e, t, n, r) {
        function i(e) {
            try {
                e.apply(null, Y(arguments, 1))
            } finally {
                if (v--, 0 === v)
                    for (; $.length;) try {
                        $.pop()()
                    } catch (t) {
                        n.error(t)
                    }
            }
        }

        function a(e) {
            var t = e.indexOf("#");
            return -1 === t ? "" : e.substr(t)
        }

        function s() {
            w = null, l()
        }

        function c() {
            E = x(), E = b(E) ? null : E, z(E, T) && (E = T), T = E, y = E
        }

        function l() {
            var e = y;
            c(), (M !== d.url() || e !== E) && (M = d.url(), y = E, o(A, function(e) {
                e(d.url(), E)
            }))
        }
        var d = this,
            u = e.location,
            m = e.history,
            f = e.setTimeout,
            h = e.clearTimeout,
            g = {};
        d.isMock = !1;
        var v = 0,
            $ = [];
        d.$$completeOutstandingRequest = i, d.$$incOutstandingRequestCount = function() {
            v++
        }, d.notifyWhenNoOutstandingRequests = function(e) {
            0 === v ? e() : $.push(e)
        };
        var E, y, M = u.href,
            C = t.find("base"),
            w = null,
            x = r.history ? function() {
                try {
                    return m.state
                } catch (e) {}
            } : p;
        c(), d.url = function(t, n, i) {
            if (b(i) && (i = null), u !== e.location && (u = e.location), m !== e.history && (m = e.history), t) {
                var o = y === i;
                if (M === t && (!r.history || o)) return d;
                var s = M && en(M) === en(t);
                return M = t, y = i, !r.history || s && o ? (s || (w = t), n ? u.replace(t) : s ? u.hash = a(t) : u.href = t, u.href !== t && (w = t)) : (m[n ? "replaceState" : "pushState"](i, "", t), c()), w && (w = t), d
            }
            return w || u.href.replace(/%27/g, "'")
        }, d.state = function() {
            return E
        };
        var A = [],
            k = !1,
            T = null;
        d.onUrlChange = function(t) {
            return k || (r.history && ci(e).on("popstate", s), ci(e).on("hashchange", s), k = !0), A.push(t), t
        }, d.$$applicationDestroyed = function() {
            ci(e).off("hashchange popstate", s)
        }, d.$$checkUrlChange = l, d.baseHref = function() {
            var e = C.attr("href");
            return e ? e.replace(/^(https?:)?\/\/[^\/]*/, "") : ""
        }, d.defer = function(e, t) {
            var n;
            return v++, n = f(function() {
                delete g[n], i(e)
            }, t || 0), g[n] = !0, n
        }, d.defer.cancel = function(e) {
            return g[e] ? (delete g[e], h(e), i(p), !0) : !1
        }
    }

    function bt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
            return new $t(e, r, t, n)
        }]
    }

    function Et() {
        this.$get = function() {
            function e(e, n) {
                function i(e) {
                    e !== m && (f ? f === e && (f = e.n) : f = e, o(e.n, e.p), o(e, m), m = e, m.n = null)
                }

                function o(e, t) {
                    e !== t && (e && (e.p = t), t && (t.n = e))
                }
                if (e in t) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                var a = 0,
                    s = u({}, n, {
                        id: e
                    }),
                    c = Ee(),
                    l = n && n.capacity || Number.MAX_VALUE,
                    d = Ee(),
                    m = null,
                    f = null;
                return t[e] = {
                    put: function(e, t) {
                        if (!b(t)) {
                            if (l < Number.MAX_VALUE) {
                                var n = d[e] || (d[e] = {
                                    key: e
                                });
                                i(n)
                            }
                            return e in c || a++, c[e] = t, a > l && this.remove(f.key), t
                        }
                    },
                    get: function(e) {
                        if (l < Number.MAX_VALUE) {
                            var t = d[e];
                            if (!t) return;
                            i(t)
                        }
                        return c[e]
                    },
                    remove: function(e) {
                        if (l < Number.MAX_VALUE) {
                            var t = d[e];
                            if (!t) return;
                            t === m && (m = t.p), t === f && (f = t.n), o(t.n, t.p), delete d[e]
                        }
                        e in c && (delete c[e], a--)
                    },
                    removeAll: function() {
                        c = Ee(), a = 0, d = Ee(), m = f = null
                    },
                    destroy: function() {
                        c = null, s = null, d = null, delete t[e]
                    },
                    info: function() {
                        return u({}, s, {
                            size: a
                        })
                    }
                }
            }
            var t = {};
            return e.info = function() {
                var e = {};
                return o(t, function(t, n) {
                    e[n] = t.info()
                }), e
            }, e.get = function(e) {
                return t[e]
            }, e
        }
    }

    function yt() {
        this.$get = ["$cacheFactory", function(e) {
            return e("templates")
        }]
    }

    function Mt() {}

    function Ct(t, n) {
        function r(e, t, n) {
            var r = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,
                i = Ee();
            return o(e, function(e, o) {
                if (e in T) return void(i[o] = T[e]);
                var a = e.match(r);
                if (!a) throw bo("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, o, e, n ? "controller bindings definition" : "isolate scope definition");
                i[o] = {
                    mode: a[1][0],
                    collection: "*" === a[2],
                    optional: "?" === a[3],
                    attrName: a[4] || o
                }, a[4] && (T[e] = i[o])
            }), i
        }

        function i(e, t) {
            var n = {
                isolateScope: null,
                bindToController: null
            };
            if (y(e.scope) && (e.bindToController === !0 ? (n.bindToController = r(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = r(e.scope, t, !1)), y(e.bindToController) && (n.bindToController = r(e.bindToController, t, !0)), n.bindToController && !e.controller) throw bo("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
            return n
        }

        function a(e) {
            var t = e.charAt(0);
            if (!t || t !== ri(t)) throw bo("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
            if (e !== e.trim()) throw bo("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
        }

        function c(e) {
            var t = e.require || e.controller && e.name;
            return !Ei(t) && y(t) && o(t, function(e, n) {
                var r = e.match(w),
                    i = e.substring(r[0].length);
                i || (t[n] = r[0] + n)
            }), t
        }

        function l(e, t) {
            if (e && (!C(e) || !/[EACM]/.test(e))) throw bo("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", e, t);
            return e || "EA"
        }
        var d = {},
            m = "Directive",
            f = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
            $ = /(([\w-]+)(?::([^;]+))?;?)/,
            M = V("ngSrc,ngSrcset,src,srcset"),
            w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            x = /^(on[a-z]+|formaction)$/,
            T = Ee();
        this.directive = function P(e, n) {
            return pe(e, "name"), ve(e, "directive"), C(e) ? (a(e), pe(n, "directiveFactory"), d.hasOwnProperty(e) || (d[e] = [], t.factory(e + m, ["$injector", "$exceptionHandler", function(t, n) {
                var r = [];
                return o(d[e], function(i, o) {
                    try {
                        var a = t.invoke(i);
                        k(a) ? a = {
                            compile: v(a)
                        } : !a.compile && a.link && (a.compile = v(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || e, a.require = c(a), a.restrict = l(a.restrict, e), a.$$moduleName = i.$$moduleName, r.push(a)
                    } catch (s) {
                        n(s)
                    }
                }), r
            }])), d[e].push(n)) : o(e, s(P)), this
        }, this.component = function L(e, t) {
            function n(e) {
                function n(t) {
                    return k(t) || Ei(t) ? function(n, r) {
                        return e.invoke(t, this, {
                            $element: n,
                            $attrs: r
                        })
                    } : t
                }
                var i = t.template || t.templateUrl ? t.template : "",
                    a = {
                        controller: r,
                        controllerAs: Tt(t.controller) || t.controllerAs || "$ctrl",
                        template: n(i),
                        templateUrl: n(t.templateUrl),
                        transclude: t.transclude,
                        scope: {},
                        bindToController: t.bindings || {},
                        restrict: "E",
                        require: t.require
                    };
                return o(t, function(e, t) {
                    "$" === t.charAt(0) && (a[t] = e)
                }), a
            }
            if (!C(e)) return o(e, s(K(this, L))), this;
            var r = t.controller || function() {};
            return o(t, function(e, t) {
                "$" === t.charAt(0) && (n[t] = e, k(r) && (r[t] = e))
            }), n.$inject = ["$injector"], this.directive(e, n)
        }, this.aHrefSanitizationWhitelist = function(e) {
            return E(e) ? (n.aHrefSanitizationWhitelist(e), this) : n.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return E(e) ? (n.imgSrcSanitizationWhitelist(e), this) : n.imgSrcSanitizationWhitelist()
        };
        var S = !0;
        this.debugInfoEnabled = function(e) {
            return E(e) ? (S = e, this) : S
        };
        var D = !1;
        this.preAssignBindingsEnabled = function(e) {
            return E(e) ? (D = e, this) : D
        };
        var _ = !1;
        this.strictComponentBindingsEnabled = function(e) {
            return E(e) ? (_ = e, this) : _
        };
        var O = 10;
        this.onChangesTtl = function(e) {
            return arguments.length ? (O = e, this) : O
        };
        var I = !0;
        this.commentDirectivesEnabled = function(e) {
            return arguments.length ? (I = e, this) : I
        };
        var R = !0;
        this.cssClassDirectivesEnabled = function(e) {
            return arguments.length ? (R = e, this) : R
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(t, n, r, a, s, c, l, v, T, P) {
            function L() {
                try {
                    if (!--Oe) throw ke = void 0, bo("infchng", "{0} $onChanges() iterations reached. Aborting!\n", O);
                    l.$apply(function() {
                        for (var e = [], t = 0, n = ke.length; n > t; ++t) try {
                            ke[t]()
                        } catch (r) {
                            e.push(r)
                        }
                        if (ke = void 0, e.length) throw e
                    })
                } finally {
                    Oe++
                }
            }

            function V(e, t) {
                if (t) {
                    var n, r, i, o = Object.keys(t);
                    for (n = 0, r = o.length; r > n; n++) i = o[n], this[i] = t[i]
                } else this.$attr = {};
                this.$$element = e
            }

            function F(e, t, n) {
                Se.innerHTML = "<span " + t + ">";
                var r = Se.firstChild.attributes,
                    i = r[0];
                r.removeNamedItem(i.name), i.value = n, e.attributes.setNamedItem(i)
            }

            function B(e, t) {
                try {
                    e.addClass(t)
                } catch (n) {}
            }

            function W(e, t, n, r, i) {
                e instanceof ci || (e = ci(e));
                var o = X(e, t, e, n, r, i);
                W.$$addScopeClass(e);
                var a = null;
                return function(t, n, r) {
                    if (!e) throw bo("multilink", "This element has already been linked.");
                    pe(t, "scope"), i && i.needsNewScope && (t = t.$parent.$new()),
                        r = r || {};
                    var s = r.parentBoundTranscludeFn,
                        c = r.transcludeControllers,
                        l = r.futureParentElement;
                    s && s.$$boundTransclude && (s = s.$$boundTransclude), a || (a = G(l));
                    var d;
                    if (d = "html" !== a ? ci($e(a, ci("<div>").append(e).html())) : n ? Xi.clone.call(e) : e, c)
                        for (var u in c) d.data("$" + u + "Controller", c[u].instance);
                    return W.$$addScopeInfo(d, t), n && n(d, t), o && o(t, d, d, s), n || (e = o = null), d
                }
            }

            function G(e) {
                var t = e && e[0];
                return t && "foreignobject" !== j(t) && hi.call(t).match(/SVG/) ? "svg" : "html"
            }

            function X(e, t, n, r, i, o) {
                function a(e, n, r, i) {
                    var o, a, s, c, l, d, u, m, p;
                    if (f) {
                        var g = n.length;
                        for (p = new Array(g), l = 0; l < h.length; l += 3) u = h[l], p[u] = n[u]
                    } else p = n;
                    for (l = 0, d = h.length; d > l;) s = p[h[l++]], o = h[l++], a = h[l++], o ? (o.scope ? (c = e.$new(), W.$$addScopeInfo(ci(s), c)) : c = e, m = o.transcludeOnThisElement ? Z(e, o.transclude, i) : !o.templateOnThisElement && i ? i : !i && t ? Z(e, t) : null, o(a, c, s, r, m)) : a && a(e, s.childNodes, void 0, i)
                }
                for (var s, c, l, d, u, m, f, h = [], p = Ei(e) || e instanceof ci, g = 0; g < e.length; g++) s = new V, 11 === si && J(e, g, p), c = Q(e[g], [], s, 0 === g ? r : void 0, i), l = c.length ? oe(c, e[g], s, t, n, null, [], [], o) : null, l && l.scope && W.$$addScopeClass(s.$$element), u = l && l.terminal || !(d = e[g].childNodes) || !d.length ? null : X(d, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : t), (l || u) && (h.push(g, l, u), m = !0, f = f || l), o = null;
                return m ? a : null
            }

            function J(e, t, n) {
                var r, i = e[t],
                    o = i.parentNode;
                if (i.nodeType === Oi)
                    for (;;) {
                        if (r = o ? i.nextSibling : e[t + 1], !r || r.nodeType !== Oi) break;
                        i.nodeValue = i.nodeValue + r.nodeValue, r.parentNode && r.parentNode.removeChild(r), n && r === e[t + 1] && e.splice(t + 1, 1)
                    }
            }

            function Z(e, t, n) {
                function r(r, i, o, a, s) {
                    return r || (r = e.$new(!1, s), r.$$transcluded = !0), t(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                }
                var i = r.$$slots = Ee();
                for (var o in t.$$slots) i[o] = t.$$slots[o] ? Z(e, t.$$slots[o], n) : null;
                return r
            }

            function Q(e, t, n, r, i) {
                var o, a, s, c = e.nodeType,
                    l = n.$attr;
                switch (c) {
                    case Di:
                        a = j(e), le(t, xt(a), "E", r, i);
                        for (var d, u, m, f, h, p, g = e.attributes, v = 0, b = g && g.length; b > v; v++) {
                            var E = !1,
                                M = !1;
                            d = g[v], u = d.name, h = d.value, f = xt(u), p = Pe.test(f), p && (u = u.replace(yo, "").substr(8).replace(/_(.)/g, function(e, t) {
                                return t.toUpperCase()
                            }));
                            var w = f.match(Ve);
                            w && de(w[1]) && (E = u, M = u.substr(0, u.length - 5) + "end", u = u.substr(0, u.length - 6)), m = xt(u.toLowerCase()), l[m] = u, (p || !n.hasOwnProperty(m)) && (n[m] = h, et(e, m) && (n[m] = !0)), ye(e, t, h, m, p), le(t, m, "A", r, i, E, M)
                        }
                        if ("input" === a && "hidden" === e.getAttribute("type") && e.setAttribute("autocomplete", "off"), !_e) break;
                        if (s = e.className, y(s) && (s = s.animVal), C(s) && "" !== s)
                            for (; o = $.exec(s);) m = xt(o[2]), le(t, m, "C", r, i) && (n[m] = Mi(o[3])), s = s.substr(o.index + o[0].length);
                        break;
                    case Oi:
                        ve(t, e.nodeValue);
                        break;
                    case Hi:
                        if (!Ne) break;
                        ee(e, t, n, r, i)
                }
                return t.sort(he), t
            }

            function ee(e, t, n, r, i) {
                try {
                    var o = f.exec(e.nodeValue);
                    if (o) {
                        var a = xt(o[1]);
                        le(t, a, "M", r, i) && (n[a] = Mi(o[2]))
                    }
                } catch (s) {}
            }

            function ne(e, t, n) {
                var r = [],
                    i = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e) throw bo("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                        e.nodeType === Di && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                    } while (i > 0)
                } else r.push(e);
                return ci(r)
            }

            function re(e, t, n) {
                return function(r, i, o, a, s) {
                    return i = ne(i[0], t, n), e(r, i, o, a, s)
                }
            }

            function ie(e, t, n, r, i, o) {
                var a;
                return e ? W(t, n, r, i, o) : function() {
                    return a || (a = W(t, n, r, i, o), t = n = o = null), a.apply(this, arguments)
                }
            }

            function oe(e, t, n, i, a, s, c, l, d) {
                function m(e, t, n, r) {
                    e && (n && (e = re(e, n, r)), e.require = h.require, e.directiveName = p, (w === h || h.$$isolateScope) && (e = Ce(e, {
                        isolateScope: !0
                    })), c.push(e)), t && (n && (t = re(t, n, r)), t.require = h.require, t.directiveName = p, (w === h || h.$$isolateScope) && (t = Ce(t, {
                        isolateScope: !0
                    })), l.push(t))
                }

                function f(e, i, a, s, d) {
                    function m(e, t, n, r) {
                        var i;
                        if (N(e) || (r = n, n = t, t = e, e = void 0), _ && (i = $), n || (n = _ ? A.parent() : A), !r) return d(e, t, i, n, L);
                        var o = d.$$slots[r];
                        if (o) return o(e, t, i, n, L);
                        if (b(o)) throw bo("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, te(A))
                    }
                    var f, h, p, g, v, $, E, A, T, S;
                    t === a ? (T = n, A = n.$$element) : (A = ci(a), T = new V(A, n)), v = i, w ? g = i.$new(!0) : M && (v = i.$parent), d && (E = m, E.$$boundTransclude = d, E.isSlotFilled = function(e) {
                        return !!d.$$slots[e]
                    }), C && ($ = se(A, T, E, C, g, i, w)), w && (W.$$addScopeInfo(A, g, !0, !(x && (x === w || x === w.$$originalDirective))), W.$$addScopeClass(A, !0), g.$$isolateBindings = w.$$isolateBindings, S = Ae(i, T, g, g.$$isolateBindings, w), S.removeWatches && g.$on("$destroy", S.removeWatches));
                    for (var O in $) {
                        var H = C[O],
                            I = $[O],
                            R = H.$$bindings.bindToController;
                        if (D) {
                            I.bindingInfo = R ? Ae(v, T, I.instance, R, H) : {};
                            var P = I();
                            P !== I.instance && (I.instance = P, A.data("$" + H.name + "Controller", P), I.bindingInfo.removeWatches && I.bindingInfo.removeWatches(), I.bindingInfo = Ae(v, T, I.instance, R, H))
                        } else I.instance = I(), A.data("$" + H.name + "Controller", I.instance), I.bindingInfo = Ae(v, T, I.instance, R, H)
                    }
                    for (o(C, function(e, t) {
                            var n = e.require;
                            e.bindToController && !Ei(n) && y(n) && u($[t].instance, ae(t, n, A, $))
                        }), o($, function(e) {
                            var t = e.instance;
                            if (k(t.$onChanges)) try {
                                t.$onChanges(e.bindingInfo.initialChanges)
                            } catch (n) {
                                r(n)
                            }
                            if (k(t.$onInit)) try {
                                t.$onInit()
                            } catch (n) {
                                r(n)
                            }
                            k(t.$doCheck) && (v.$watch(function() {
                                t.$doCheck()
                            }), t.$doCheck()), k(t.$onDestroy) && v.$on("$destroy", function() {
                                t.$onDestroy()
                            })
                        }), f = 0, h = c.length; h > f; f++) p = c[f], we(p, p.isolateScope ? g : i, A, T, p.require && ae(p.directiveName, p.require, A, $), E);
                    var L = i;
                    for (w && (w.template || null === w.templateUrl) && (L = g), e && e(L, a.childNodes, void 0, d), f = l.length - 1; f >= 0; f--) p = l[f], we(p, p.isolateScope ? g : i, A, T, p.require && ae(p.directiveName, p.require, A, $), E);
                    o($, function(e) {
                        var t = e.instance;
                        k(t.$postLink) && t.$postLink()
                    })
                }
                d = d || {};
                for (var h, p, g, v, $, E = -Number.MAX_VALUE, M = d.newScopeDirective, C = d.controllerDirectives, w = d.newIsolateScopeDirective, x = d.templateDirective, A = d.nonTlbTranscludeDirective, T = !1, S = !1, _ = d.hasElementTranscludeDirective, O = n.$$element = ci(t), H = s, I = i, R = !1, P = !1, L = 0, F = e.length; F > L; L++) {
                    h = e[L];
                    var q = h.$$start,
                        B = h.$$end;
                    if (q && (O = ne(t, q, B)), g = void 0, E > h.priority) break;
                    if ($ = h.scope, $ && (h.templateUrl || (y($) ? (ge("new/isolated scope", w || M, h, O), w = h) : ge("new/isolated scope", w, h, O)), M = M || h), p = h.name, !R && (h.replace && (h.templateUrl || h.template) || h.transclude && !h.$$tlb)) {
                        for (var U, z = L + 1; U = e[z++];)
                            if (U.transclude && !U.$$tlb || U.replace && (U.templateUrl || U.template)) {
                                P = !0;
                                break
                            }
                        R = !0
                    }
                    if (!h.templateUrl && h.controller && (C = C || Ee(), ge("'" + p + "' controller", C[p], h, O), C[p] = h), $ = h.transclude)
                        if (T = !0, h.$$tlb || (ge("transclusion", A, h, O), A = h), "element" === $) _ = !0, E = h.priority, g = O, O = n.$$element = ci(W.$$createComment(p, n[p])), t = O[0], Me(a, Y(g), t), g[0].$$parentNode = g[0].parentNode, I = ie(P, g, i, E, H && H.name, {
                            nonTlbTranscludeDirective: A
                        });
                        else {
                            var G = Ee();
                            if (y($)) {
                                g = [];
                                var X = Ee(),
                                    J = Ee();
                                o($, function(e, t) {
                                    var n = "?" === e.charAt(0);
                                    e = n ? e.substring(1) : e, X[e] = t, G[t] = null, J[t] = n
                                }), o(O.contents(), function(e) {
                                    var t = X[xt(j(e))];
                                    t ? (J[t] = !0, G[t] = G[t] || [], G[t].push(e)) : g.push(e)
                                }), o(J, function(e, t) {
                                    if (!e) throw bo("reqslot", "Required transclusion slot `{0}` was not filled.", t)
                                });
                                for (var Z in G) G[Z] && (G[Z] = ie(P, G[Z], i))
                            } else g = ci(Le(t)).contents();
                            O.empty(), I = ie(P, g, i, void 0, void 0, {
                                needsNewScope: h.$$isolateScope || h.$$newScope
                            }), I.$$slots = G
                        }
                    if (h.template)
                        if (S = !0, ge("template", x, h, O), x = h, $ = k(h.template) ? h.template(O, n) : h.template, $ = Re($), h.replace) {
                            if (H = h, g = De($) ? [] : kt($e(h.templateNamespace, Mi($))), t = g[0], 1 !== g.length || t.nodeType !== Di) throw bo("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p, "");
                            Me(a, O, t);
                            var ee = {
                                    $attr: {}
                                },
                                oe = Q(t, [], ee),
                                le = e.splice(L + 1, e.length - (L + 1));
                            (w || M) && ce(oe, w, M), e = e.concat(oe).concat(le), ue(n, ee), F = e.length
                        } else O.html($);
                    if (h.templateUrl) S = !0, ge("template", x, h, O), x = h, h.replace && (H = h), f = me(e.splice(L, e.length - L), O, n, a, T && I, c, l, {
                        controllerDirectives: C,
                        newScopeDirective: M !== h && M,
                        newIsolateScopeDirective: w,
                        templateDirective: x,
                        nonTlbTranscludeDirective: A
                    }), F = e.length;
                    else if (h.compile) try {
                        v = h.compile(O, n, I);
                        var de = h.$$originalDirective || h;
                        k(v) ? m(null, K(de, v), q, B) : v && m(K(de, v.pre), K(de, v.post), q, B)
                    } catch (fe) {
                        r(fe, te(O))
                    }
                    h.terminal && (f.terminal = !0, E = Math.max(E, h.priority))
                }
                return f.scope = M && M.scope === !0, f.transcludeOnThisElement = T, f.templateOnThisElement = S, f.transclude = I, d.hasElementTranscludeDirective = _, f
            }

            function ae(e, t, n, r) {
                var i;
                if (C(t)) {
                    var a = t.match(w),
                        s = t.substring(a[0].length),
                        c = a[1] || a[3],
                        l = "?" === a[2];
                    if ("^^" === c ? n = n.parent() : (i = r && r[s], i = i && i.instance), !i) {
                        var d = "$" + s + "Controller";
                        i = c ? n.inheritedData(d) : n.data(d)
                    }
                    if (!i && !l) throw bo("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", s, e)
                } else if (Ei(t)) {
                    i = [];
                    for (var u = 0, m = t.length; m > u; u++) i[u] = ae(e, t[u], n, r)
                } else y(t) && (i = {}, o(t, function(t, o) {
                    i[o] = ae(e, t, n, r)
                }));
                return i || null
            }

            function se(e, t, n, r, i, o, a) {
                var s = Ee();
                for (var l in r) {
                    var d = r[l],
                        u = {
                            $scope: d === a || d.$$isolateScope ? i : o,
                            $element: e,
                            $attrs: t,
                            $transclude: n
                        },
                        m = d.controller;
                    "@" === m && (m = t[d.name]);
                    var f = c(m, u, !0, d.controllerAs);
                    s[d.name] = f, e.data("$" + d.name + "Controller", f.instance)
                }
                return s
            }

            function ce(e, t, n) {
                for (var r = 0, i = e.length; i > r; r++) e[r] = h(e[r], {
                    $$isolateScope: t,
                    $$newScope: n
                })
            }

            function le(e, n, r, o, a, s, c) {
                if (n === a) return null;
                var l = null;
                if (d.hasOwnProperty(n))
                    for (var u, f = t.get(n + m), p = 0, g = f.length; g > p; p++)
                        if (u = f[p], (b(o) || o > u.priority) && -1 !== u.restrict.indexOf(r)) {
                            if (s && (u = h(u, {
                                    $$start: s,
                                    $$end: c
                                })), !u.$$bindings) {
                                var v = u.$$bindings = i(u, u.name);
                                y(v.isolateScope) && (u.$$isolateBindings = v.isolateScope)
                            }
                            e.push(u), l = u
                        }
                return l
            }

            function de(e) {
                if (d.hasOwnProperty(e))
                    for (var n, r = t.get(e + m), i = 0, o = r.length; o > i; i++)
                        if (n = r[i], n.multiElement) return !0;
                return !1
            }

            function ue(e, t) {
                var n = t.$attr,
                    r = e.$attr;
                o(e, function(r, i) {
                    "$" !== i.charAt(0) && (t[i] && t[i] !== r && (r.length ? r += ("style" === i ? ";" : " ") + t[i] : r = t[i]), e.$set(i, r, !0, n[i]))
                }), o(t, function(t, i) {
                    e.hasOwnProperty(i) || "$" === i.charAt(0) || (e[i] = t, "class" !== i && "style" !== i && (r[i] = n[i]))
                })
            }

            function me(e, t, n, i, s, c, l, d) {
                var u, m, f = [],
                    p = t[0],
                    g = e.shift(),
                    v = h(g, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: g
                    }),
                    $ = k(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl,
                    b = g.templateNamespace;
                return t.empty(), a($).then(function(r) {
                        var a, h, E, M;
                        if (r = Re(r), g.replace) {
                            if (E = De(r) ? [] : kt($e(b, Mi(r))), a = E[0], 1 !== E.length || a.nodeType !== Di) throw bo("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, $);
                            h = {
                                $attr: {}
                            }, Me(i, t, a);
                            var C = Q(a, [], h);
                            y(g.scope) && ce(C, !0), e = C.concat(e), ue(n, h)
                        } else a = p, t.html(r);
                        for (e.unshift(v), u = oe(e, a, n, s, t, g, c, l, d), o(i, function(e, n) {
                                e === a && (i[n] = t[0])
                            }), m = X(t[0].childNodes, s); f.length;) {
                            var w = f.shift(),
                                x = f.shift(),
                                A = f.shift(),
                                k = f.shift(),
                                T = t[0];
                            if (!w.$$destroyed) {
                                if (x !== p) {
                                    var S = x.className;
                                    d.hasElementTranscludeDirective && g.replace || (T = Le(a)), Me(A, ci(x), T), B(ci(T), S)
                                }
                                M = u.transcludeOnThisElement ? Z(w, u.transclude, k) : k, u(m, w, T, i, M)
                            }
                        }
                        f = null
                    })["catch"](function(e) {
                        A(e) && r(e)
                    }),
                    function(e, t, n, r, i) {
                        var o = i;
                        t.$$destroyed || (f ? f.push(t, n, r, o) : (u.transcludeOnThisElement && (o = Z(t, u.transclude, i)), u(m, t, n, r, o)))
                    }
            }

            function he(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function ge(e, t, n, r) {
                function i(e) {
                    return e ? " (module: " + e + ")" : ""
                }
                if (t) throw bo("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, te(r))
            }

            function ve(e, t) {
                var r = n(t, !0);
                r && e.push({
                    priority: 0,
                    compile: function(e) {
                        var t = e.parent(),
                            n = !!t.length;
                        return n && W.$$addBindingClass(t),
                            function(e, t) {
                                var i = t.parent();
                                n || W.$$addBindingClass(i), W.$$addBindingInfo(i, r.expressions), e.$watch(r, function(e) {
                                    t[0].nodeValue = e
                                })
                            }
                    }
                })
            }

            function $e(t, n) {
                switch (t = ri(t || "html")) {
                    case "svg":
                    case "math":
                        var r = e.document.createElement("div");
                        return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function be(e, t) {
                if ("srcdoc" === t) return v.HTML;
                var n = j(e);
                if ("src" === t || "ngSrc" === t) {
                    if (-1 === ["img", "video", "audio", "source", "track"].indexOf(n)) return v.RESOURCE_URL
                } else if ("xlinkHref" === t || "form" === n && "action" === t || "link" === n && "href" === t) return v.RESOURCE_URL
            }

            function ye(e, t, r, i, o) {
                var a = be(e, i),
                    s = !o,
                    c = M[i] || o,
                    l = n(r, s, a, c);
                if (l) {
                    if ("multiple" === i && "select" === j(e)) throw bo("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", te(e));
                    if (x.test(i)) throw bo("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                    t.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, t, o) {
                                    var s = o.$$observers || (o.$$observers = Ee()),
                                        d = o[i];
                                    d !== r && (l = d && n(d, !0, a, c), r = d), l && (o[i] = l(e), (s[i] || (s[i] = [])).$$inter = !0, (o.$$observers && o.$$observers[i].$$scope || e).$watch(l, function(e, t) {
                                        "class" === i && e !== t ? o.$updateClass(e, t) : o.$set(i, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function Me(t, n, r) {
                var i, o, a = n[0],
                    s = n.length,
                    c = a.parentNode;
                if (t)
                    for (i = 0, o = t.length; o > i; i++)
                        if (t[i] === a) {
                            t[i++] = r;
                            for (var l = i, d = l + s - 1, u = t.length; u > l; l++, d++) u > d ? t[l] = t[d] : delete t[l];
                            t.length -= s - 1, t.context === a && (t.context = r);
                            break
                        }
                c && c.replaceChild(r, a);
                var m = e.document.createDocumentFragment();
                for (i = 0; s > i; i++) m.appendChild(n[i]);
                for (ci.hasData(a) && (ci.data(r, ci.data(a)), ci(a).off("$destroy")), ci.cleanData(m.querySelectorAll("*")), i = 1; s > i; i++) delete n[i];
                n[0] = r, n.length = 1
            }

            function Ce(e, t) {
                return u(function() {
                    return e.apply(null, arguments)
                }, e, t)
            }

            function we(e, t, n, i, o, a) {
                try {
                    e(t, n, i, o, a)
                } catch (s) {
                    r(s, te(n))
                }
            }

            function xe(e, t) {
                if (_) throw bo("missingattr", "Attribute '{0}' of '{1}' is non-optional and must be set!", e, t)
            }

            function Ae(e, t, r, i, a) {
                function c(t, n, i) {
                    k(r.$onChanges) && !U(n, i) && (ke || (e.$$postDigest(L), ke = []), d || (d = {}, ke.push(l)), d[t] && (i = d[t].previousValue), d[t] = new wt(i, n))
                }

                function l() {
                    r.$onChanges(d), d = void 0
                }
                var d, u = [],
                    m = {};
                return o(i, function(i, o) {
                    var l, d, f, h, g, v = i.attrName,
                        $ = i.optional,
                        b = i.mode;
                    switch (b) {
                        case "@":
                            $ || ni.call(t, v) || (xe(v, a.name), r[o] = t[v] = void 0), g = t.$observe(v, function(e) {
                                if (C(e) || H(e)) {
                                    var t = r[o];
                                    c(o, e, t), r[o] = e
                                }
                            }), t.$$observers[v].$$scope = e, l = t[v], C(l) ? r[o] = n(l)(e) : H(l) && (r[o] = l), m[o] = new wt(Eo, r[o]), u.push(g);
                            break;
                        case "=":
                            if (!ni.call(t, v)) {
                                if ($) break;
                                xe(v, a.name), t[v] = void 0
                            }
                            if ($ && !t[v]) break;
                            d = s(t[v]), h = d.literal ? z : U, f = d.assign || function() {
                                throw l = r[o] = d(e), bo("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[v], v, a.name)
                            }, l = r[o] = d(e);
                            var E = function(t) {
                                return h(t, r[o]) || (h(t, l) ? f(e, t = r[o]) : r[o] = t), l = t
                            };
                            E.$stateful = !0, g = i.collection ? e.$watchCollection(t[v], E) : e.$watch(s(t[v], E), null, d.literal), u.push(g);
                            break;
                        case "<":
                            if (!ni.call(t, v)) {
                                if ($) break;
                                xe(v, a.name), t[v] = void 0
                            }
                            if ($ && !t[v]) break;
                            d = s(t[v]);
                            var y = d.literal,
                                M = r[o] = d(e);
                            m[o] = new wt(Eo, r[o]), g = e.$watch(d, function(e, t) {
                                if (t === e) {
                                    if (t === M || y && z(t, M)) return;
                                    t = M
                                }
                                c(o, e, t), r[o] = e
                            }, y), u.push(g);
                            break;
                        case "&":
                            if ($ || ni.call(t, v) || xe(v, a.name), d = t.hasOwnProperty(v) ? s(t[v]) : p, d === p && $) break;
                            r[o] = function(t) {
                                return d(e, t)
                            }
                    }
                }), {
                    initialChanges: m,
                    removeWatches: u.length && function() {
                        for (var e = 0, t = u.length; t > e; ++e) u[e]()
                    }
                }
            }
            var ke, Te = /^\w/,
                Se = e.document.createElement("div"),
                Ne = I,
                _e = R,
                Oe = O;
            V.prototype = {
                $normalize: xt,
                $addClass: function(e) {
                    e && e.length > 0 && T.addClass(this.$$element, e)
                },
                $removeClass: function(e) {
                    e && e.length > 0 && T.removeClass(this.$$element, e)
                },
                $updateClass: function(e, t) {
                    var n = At(e, t);
                    n && n.length && T.addClass(this.$$element, n);
                    var r = At(t, e);
                    r && r.length && T.removeClass(this.$$element, r)
                },
                $set: function(e, t, n, i) {
                    var a, s = this.$$element[0],
                        c = et(s, e),
                        l = tt(e),
                        d = e;
                    if (c ? (this.$$element.prop(e, t), i = c) : l && (this[l] = t, d = l), this[e] = t, i ? this.$attr[e] = i : (i = this.$attr[e], i || (this.$attr[e] = i = fe(e, "-"))), a = j(this.$$element), "a" === a && ("href" === e || "xlinkHref" === e) || "img" === a && "src" === e) this[e] = t = P(t, "src" === e);
                    else if ("img" === a && "srcset" === e && E(t)) {
                        for (var u = "", m = Mi(t), f = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, h = /\s/.test(m) ? f : /(,)/, p = m.split(h), g = Math.floor(p.length / 2), v = 0; g > v; v++) {
                            var $ = 2 * v;
                            u += P(Mi(p[$]), !0), u += " " + Mi(p[$ + 1])
                        }
                        var y = Mi(p[2 * v]).split(/\s/);
                        u += P(Mi(y[0]), !0), 2 === y.length && (u += " " + Mi(y[1])), this[e] = t = u
                    }
                    n !== !1 && (null === t || b(t) ? this.$$element.removeAttr(i) : Te.test(i) ? this.$$element.attr(i, t) : F(this.$$element[0], i, t));
                    var M = this.$$observers;
                    M && o(M[d], function(e) {
                        try {
                            e(t)
                        } catch (n) {
                            r(n)
                        }
                    })
                },
                $observe: function(e, t) {
                    var n = this,
                        r = n.$$observers || (n.$$observers = Ee()),
                        i = r[e] || (r[e] = []);
                    return i.push(t), l.$evalAsync(function() {
                            i.$$inter || !n.hasOwnProperty(e) || b(n[e]) || t(n[e])
                        }),
                        function() {
                            q(i, t)
                        }
                }
            };
            var He = n.startSymbol(),
                Ie = n.endSymbol(),
                Re = "{{" === He && "}}" === Ie ? g : function(e) {
                    return e.replace(/\{\{/g, He).replace(/}}/g, Ie)
                },
                Pe = /^ngAttr[A-Z]/,
                Ve = /^(.+)Start$/;
            return W.$$addBindingInfo = S ? function(e, t) {
                var n = e.data("$binding") || [];
                Ei(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
            } : p, W.$$addBindingClass = S ? function(e) {
                B(e, "ng-binding")
            } : p, W.$$addScopeInfo = S ? function(e, t, n, r) {
                var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                e.data(i, t)
            } : p, W.$$addScopeClass = S ? function(e, t) {
                B(e, t ? "ng-isolate-scope" : "ng-scope")
            } : p, W.$$createComment = function(t, n) {
                var r = "";
                return S && (r = " " + (t || "") + ": ", n && (r += n + " ")), e.document.createComment(r)
            }, W
        }]
    }

    function wt(e, t) {
        this.previousValue = e, this.currentValue = t
    }

    function xt(e) {
        return e.replace(yo, "").replace(Mo, function(e, t, n) {
            return n ? t.toUpperCase() : t
        })
    }

    function At(e, t) {
        var n = "",
            r = e.split(/\s+/),
            i = t.split(/\s+/);
        e: for (var o = 0; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++)
                if (a === i[s]) continue e;
            n += (n.length > 0 ? " " : "") + a
        }
        return n
    }

    function kt(e) {
        e = ci(e);
        var t = e.length;
        if (1 >= t) return e;
        for (; t--;) {
            var n = e[t];
            (n.nodeType === Hi || n.nodeType === Oi && "" === n.nodeValue.trim()) && mi.call(e, t, 1)
        }
        return e
    }

    function Tt(e, t) {
        if (t && C(t)) return t;
        if (C(e)) {
            var n = wo.exec(e);
            if (n) return n[3]
        }
    }

    function St() {
        var e = {},
            t = !1;
        this.has = function(t) {
            return e.hasOwnProperty(t)
        }, this.register = function(t, n) {
            ve(t, "controller"), y(t) ? u(e, t) : e[t] = n
        }, this.allowGlobals = function() {
            t = !0
        }, this.$get = ["$injector", "$window", function(n, i) {
            function o(e, t, n, i) {
                if (!e || !y(e.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                e.$scope[t] = n
            }
            return function(r, a, s, c) {
                var l, d, m, f;
                if (s = s === !0, c && C(c) && (f = c), C(r)) {
                    if (d = r.match(wo), !d) throw Co("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                    if (m = d[1], f = f || d[3], r = e.hasOwnProperty(m) ? e[m] : $e(a.$scope, m, !0) || (t ? $e(i, m, !0) : void 0), !r) throw Co("ctrlreg", "The controller with the name '{0}' is not registered.", m);
                    ge(r, m, !0)
                }
                if (s) {
                    var h = (Ei(r) ? r[r.length - 1] : r).prototype;
                    return l = Object.create(h || null), f && o(a, f, l, m || r.name), u(function() {
                        var e = n.invoke(r, l, a, m);
                        return e !== l && (y(e) || k(e)) && (l = e, f && o(a, f, l, m || r.name)), l
                    }, {
                        instance: l,
                        identifier: f
                    })
                }
                return l = n.instantiate(r, a, m), f && o(a, f, l, m || r.name), l
            }
        }]
    }

    function Nt() {
        this.$get = ["$window", function(e) {
            return ci(e.document)
        }]
    }

    function Dt() {
        this.$get = ["$document", "$rootScope", function(e, t) {
            function n() {
                i = r.hidden
            }
            var r = e[0],
                i = r && r.hidden;
            return e.on("visibilitychange", n), t.$on("$destroy", function() {
                    e.off("visibilitychange", n)
                }),
                function() {
                    return i
                }
        }]
    }

    function _t() {
        this.$get = ["$log", function(e) {
            return function(t, n) {
                e.error.apply(e, arguments)
            }
        }]
    }

    function Ot(e) {
        return y(e) ? x(e) ? e.toISOString() : X(e) : e
    }

    function Ht() {
        this.$get = function() {
            return function(e) {
                if (!e) return "";
                var t = [];
                return a(e, function(e, n) {
                    null === e || b(e) || k(e) || (Ei(e) ? o(e, function(e) {
                        t.push(ae(n) + "=" + ae(Ot(e)))
                    }) : t.push(ae(n) + "=" + ae(Ot(e))))
                }), t.join("&")
            }
        }
    }

    function It() {
        this.$get = function() {
            return function(e) {
                function t(e, r, i) {
                    null === e || b(e) || (Ei(e) ? o(e, function(e, n) {
                        t(e, r + "[" + (y(e) ? n : "") + "]")
                    }) : y(e) && !x(e) ? a(e, function(e, n) {
                        t(e, r + (i ? "" : "[") + n + (i ? "" : "]"))
                    }) : n.push(ae(r) + "=" + ae(Ot(e))))
                }
                if (!e) return "";
                var n = [];
                return t(e, "", !0), n.join("&")
            }
        }
    }

    function Rt(e, t) {
        if (C(e)) {
            var n = e.replace(No, "").trim();
            if (n) {
                var r = t("Content-Type"),
                    i = r && 0 === r.indexOf(Ao);
                if (i || Pt(n)) try {
                    e = J(n)
                } catch (o) {
                    if (!i) return e;
                    throw Do("baddata", 'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"', e, o)
                }
            }
        }
        return e
    }

    function Pt(e) {
        var t = e.match(To);
        return t && So[t[0]].test(e)
    }

    function Lt(e) {
        function t(e, t) {
            e && (r[e] = r[e] ? r[e] + ", " + t : t)
        }
        var n, r = Ee();
        return C(e) ? o(e.split("\n"), function(e) {
            n = e.indexOf(":"), t(ri(Mi(e.substr(0, n))), Mi(e.substr(n + 1)))
        }) : y(e) && o(e, function(e, n) {
            t(ri(n), Mi(e))
        }), r
    }

    function Vt(e) {
        var t;
        return function(n) {
            if (t || (t = Lt(e)), n) {
                var r = t[ri(n)];
                return void 0 === r && (r = null), r
            }
            return t
        }
    }

    function jt(e, t, n, r) {
        return k(r) ? r(e, t, n) : (o(r, function(r) {
            e = r(e, t, n)
        }), e)
    }

    function Ft(e) {
        return e >= 200 && 300 > e
    }

    function qt() {
        var e = this.defaults = {
                transformResponse: [Rt],
                transformRequest: [function(e) {
                    return !y(e) || D(e) || O(e) || _(e) ? e : X(e)
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: Ce(ko),
                    put: Ce(ko),
                    patch: Ce(ko)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer",
                jsonpCallbackParam: "callback"
            },
            t = !1;
        this.useApplyAsync = function(e) {
            return E(e) ? (t = !!e, this) : t
        };
        var n = this.interceptors = [];
        this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function(i, a, s, c, l, d, m, f) {
            function h(t) {
                function n(e, t) {
                    for (var n = 0, r = t.length; r > n;) {
                        var i = t[n++],
                            o = t[n++];
                        e = e.then(i, o)
                    }
                    return t.length = 0, e
                }

                function a() {
                    i.$$completeOutstandingRequest(p)
                }

                function s(e, t) {
                    var n, r = {};
                    return o(e, function(e, i) {
                        k(e) ? (n = e(t), null != n && (r[i] = n)) : r[i] = e
                    }), r
                }

                function c(t) {
                    var n, r, i, o = e.headers,
                        a = u({}, t.headers);
                    o = u({}, o.common, o[ri(t.method)]);
                    e: for (n in o) {
                        r = ri(n);
                        for (i in a)
                            if (ri(i) === r) continue e;
                        a[n] = o[n]
                    }
                    return s(a, Ce(t))
                }

                function l(t) {
                    var n = t.headers,
                        r = jt(t.data, Vt(n), void 0, t.transformRequest);
                    return b(r) && o(n, function(e, t) {
                        "content-type" === ri(t) && delete n[t]
                    }), b(t.withCredentials) && !b(e.withCredentials) && (t.withCredentials = e.withCredentials), $(t, r).then(h, h)
                }

                function h(e) {
                    var t = u({}, e);
                    return t.data = jt(e.data, e.headers, e.status, g.transformResponse), Ft(e.status) ? t : d.reject(t)
                }
                if (!y(t)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
                if (!C(f.valueOf(t.url))) throw r("$http")("badreq", "Http request configuration url must be a string or a $sce trusted object.  Received: {0}", t.url);
                var g = u({
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse,
                    paramSerializer: e.paramSerializer,
                    jsonpCallbackParam: e.jsonpCallbackParam
                }, t);
                g.headers = c(t), g.method = ii(g.method), g.paramSerializer = C(g.paramSerializer) ? m.get(g.paramSerializer) : g.paramSerializer, i.$$incOutstandingRequestCount();
                var v = [],
                    E = [],
                    M = d.resolve(g);
                return o(A, function(e) {
                    (e.request || e.requestError) && v.unshift(e.request, e.requestError), (e.response || e.responseError) && E.push(e.response, e.responseError)
                }), M = n(M, v), M = M.then(l), M = n(M, E), M = M["finally"](a)
            }

            function g(e) {
                o(arguments, function(e) {
                    h[e] = function(t, n) {
                        return h(u({}, n || {}, {
                            method: e,
                            url: t
                        }))
                    }
                })
            }

            function v(e) {
                o(arguments, function(e) {
                    h[e] = function(t, n, r) {
                        return h(u({}, r || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                })
            }

            function $(n, r) {
                function i(e) {
                    if (e) {
                        var n = {};
                        return o(e, function(e, r) {
                            n[r] = function(n) {
                                function r() {
                                    e(n)
                                }
                                t ? l.$applyAsync(r) : l.$$phase ? r() : l.$apply(r)
                            }
                        }), n
                    }
                }

                function c(e, n, r, i, o) {
                    function a() {
                        u(n, e, r, i, o)
                    }
                    g && (Ft(e) ? g.put(S, [e, n, Lt(r), i, o]) : g.remove(S)), t ? l.$applyAsync(a) : (a(), l.$$phase || l.$apply())
                }

                function u(e, t, r, i, o) {
                    t = t >= -1 ? t : 0, (Ft(t) ? $.resolve : $.reject)({
                        data: e,
                        status: t,
                        headers: Vt(r),
                        config: n,
                        statusText: i,
                        xhrStatus: o
                    })
                }

                function m(e) {
                    u(e.data, e.status, Ce(e.headers()), e.statusText, e.xhrStatus)
                }

                function p() {
                    var e = h.pendingRequests.indexOf(n); - 1 !== e && h.pendingRequests.splice(e, 1)
                }
                var g, v, $ = d.defer(),
                    A = $.promise,
                    k = n.headers,
                    T = "jsonp" === ri(n.method),
                    S = n.url;
                if (T ? S = f.getTrustedResourceUrl(S) : C(S) || (S = f.valueOf(S)), S = M(S, n.paramSerializer(n.params)), T && (S = w(S, n.jsonpCallbackParam)), h.pendingRequests.push(n), A.then(p, p), !n.cache && !e.cache || n.cache === !1 || "GET" !== n.method && "JSONP" !== n.method || (g = y(n.cache) ? n.cache : y(e.cache) ? e.cache : x), g && (v = g.get(S), E(v) ? I(v) ? v.then(m, m) : Ei(v) ? u(v[1], v[0], Ce(v[2]), v[3], v[4]) : u(v, 200, {}, "OK", "complete") : g.put(S, A)), b(v)) {
                    var N = Yn(n.url) ? s()[n.xsrfCookieName || e.xsrfCookieName] : void 0;
                    N && (k[n.xsrfHeaderName || e.xsrfHeaderName] = N), a(n.method, S, r, c, k, n.timeout, n.withCredentials, n.responseType, i(n.eventHandlers), i(n.uploadEventHandlers))
                }
                return A
            }

            function M(e, t) {
                return t.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            }

            function w(e, t) {
                var n = e.split("?");
                if (n.length > 2) throw Do("badjsonp", 'Illegal use more than one "?", in url, "{1}"', e);
                var r = re(n[1]);
                return o(r, function(n, r) {
                    if ("JSON_CALLBACK" === n) throw Do("badjsonp", 'Illegal use of JSON_CALLBACK in url, "{0}"', e);
                    if (r === t) throw Do("badjsonp", 'Illegal use of callback param, "{0}", in url, "{1}"', t, e)
                }), e += (-1 === e.indexOf("?") ? "?" : "&") + t + "=JSON_CALLBACK"
            }
            var x = c("$http");
            e.paramSerializer = C(e.paramSerializer) ? m.get(e.paramSerializer) : e.paramSerializer;
            var A = [];
            return o(n, function(e) {
                A.unshift(C(e) ? m.get(e) : m.invoke(e))
            }), h.pendingRequests = [], g("get", "delete", "head", "jsonp"), v("post", "put", "patch"), h.defaults = e, h
        }]
    }

    function Bt() {
        this.$get = function() {
            return function() {
                return new e.XMLHttpRequest
            }
        }
    }

    function Ut() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(e, t, n, r) {
            return zt(e, r, e.defer, t, n[0])
        }]
    }

    function zt(e, t, n, r, i) {
        function a(e, t, n) {
            e = e.replace("JSON_CALLBACK", t);
            var o = i.createElement("script"),
                a = null;
            return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
                o.removeEventListener("load", a), o.removeEventListener("error", a), i.body.removeChild(o), o = null;
                var s = -1,
                    c = "unknown";
                e && ("load" !== e.type || r.wasCalled(t) || (e = {
                    type: "error"
                }), c = e.type, s = "error" === e.type ? 404 : 200), n && n(s, c)
            }, o.addEventListener("load", a), o.addEventListener("error", a), i.body.appendChild(o), a
        }
        return function(i, s, c, l, d, u, m, f, h, p) {
            function g() {
                y && y(), M && M.abort()
            }

            function v(e, t, r, i, o, a) {
                E(k) && n.cancel(k), y = M = null, e(t, r, i, o, a)
            }
            if (s = s || e.url(), "jsonp" === ri(i)) var $ = r.createCallback(s),
                y = a(s, $, function(e, t) {
                    var n = 200 === e && r.getResponse($);
                    v(l, e, n, "", t, "complete"), r.removeCallback($)
                });
            else {
                var M = t(i, s);
                M.open(i, s, !0), o(d, function(e, t) {
                    E(e) && M.setRequestHeader(t, e)
                }), M.onload = function() {
                    var e = M.statusText || "",
                        t = "response" in M ? M.response : M.responseText,
                        n = 1223 === M.status ? 204 : M.status;
                    0 === n && (n = t ? 200 : "file" === Wn(s).protocol ? 404 : 0), v(l, n, t, M.getAllResponseHeaders(), e, "complete")
                };
                var C = function() {
                        v(l, -1, null, null, "", "error")
                    },
                    w = function() {
                        v(l, -1, null, null, "", "abort")
                    },
                    x = function() {
                        v(l, -1, null, null, "", "timeout")
                    };
                if (M.onerror = C, M.onabort = w, M.ontimeout = x, o(h, function(e, t) {
                        M.addEventListener(t, e)
                    }), o(p, function(e, t) {
                        M.upload.addEventListener(t, e)
                    }), m && (M.withCredentials = !0), f) try {
                    M.responseType = f
                } catch (A) {
                    if ("json" !== f) throw A
                }
                M.send(b(c) ? null : c)
            }
            if (u > 0) var k = n(g, u);
            else I(u) && u.then(g)
        }
    }

    function Wt() {
        var e = "{{",
            t = "}}";
        this.startSymbol = function(t) {
            return t ? (e = t, this) : e
        }, this.endSymbol = function(e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
            function o(e) {
                return "\\\\\\" + e
            }

            function a(n) {
                return n.replace(m, e).replace(f, t)
            }

            function s(e, t, n, r) {
                var i = e.$watch(function(e) {
                    return i(), r(e)
                }, t, n);
                return i
            }

            function c(o, c, m, f) {
                function h(e) {
                    try {
                        return e = N(e), f && !E(e) ? e : ye(e)
                    } catch (t) {
                        r(_o.interr(o, t))
                    }
                }
                if (!o.length || -1 === o.indexOf(e)) {
                    var p;
                    if (!c) {
                        var g = a(o);
                        p = v(g), p.exp = o, p.expressions = [], p.$$watchDelegate = s
                    }
                    return p
                }
                f = !!f;
                for (var $, y, M, C = 0, w = [], x = [], A = o.length, k = [], T = []; A > C;) {
                    if (-1 === ($ = o.indexOf(e, C)) || -1 === (y = o.indexOf(t, $ + l))) {
                        C !== A && k.push(a(o.substring(C)));
                        break
                    }
                    C !== $ && k.push(a(o.substring(C, $))), M = o.substring($ + l, y), w.push(M), x.push(n(M, h)), C = y + d, T.push(k.length), k.push("")
                }
                if (m && k.length > 1 && _o.throwNoconcat(o), !c || w.length) {
                    var S = function(e) {
                            for (var t = 0, n = w.length; n > t; t++) {
                                if (f && b(e[t])) return;
                                k[T[t]] = e[t]
                            }
                            return k.join("")
                        },
                        N = function(e) {
                            return m ? i.getTrusted(m, e) : i.valueOf(e)
                        };
                    return u(function(e) {
                        var t = 0,
                            n = w.length,
                            i = new Array(n);
                        try {
                            for (; n > t; t++) i[t] = x[t](e);
                            return S(i)
                        } catch (a) {
                            r(_o.interr(o, a))
                        }
                    }, {
                        exp: o,
                        expressions: w,
                        $$watchDelegate: function(e, t) {
                            var n;
                            return e.$watchGroup(x, function(r, i) {
                                var o = S(r);
                                t.call(this, o, r !== i ? n : o, e), n = o
                            })
                        }
                    })
                }
            }
            var l = e.length,
                d = t.length,
                m = new RegExp(e.replace(/./g, o), "g"),
                f = new RegExp(t.replace(/./g, o), "g");
            return c.startSymbol = function() {
                return e
            }, c.endSymbol = function() {
                return t
            }, c
        }]
    }

    function Yt() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(e, t, n, r, i) {
            function o(o, s, c, l) {
                function d() {
                    u ? o.apply(null, m) : o(p)
                }
                var u = arguments.length > 4,
                    m = u ? Y(arguments, 4) : [],
                    f = t.setInterval,
                    h = t.clearInterval,
                    p = 0,
                    g = E(l) && !l,
                    v = (g ? r : n).defer(),
                    $ = v.promise;
                return c = E(c) ? c : 0, $.$$intervalId = f(function() {
                    g ? i.defer(d) : e.$evalAsync(d), v.notify(p++), c > 0 && p >= c && (v.resolve(p), h($.$$intervalId), delete a[$.$$intervalId]), g || e.$apply()
                }, s), a[$.$$intervalId] = v, $
            }
            var a = {};
            return o.cancel = function(e) {
                return e && e.$$intervalId in a ? (On(a[e.$$intervalId].promise), a[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete a[e.$$intervalId], !0) : !1
            }, o
        }]
    }

    function Kt(e) {
        for (var t = e.split("/"), n = t.length; n--;) t[n] = oe(t[n].replace(/%2F/g, "/"));
        return t.join("/")
    }

    function Gt(e, t) {
        for (var n = e.split("/"), r = n.length; r--;) n[r] = decodeURIComponent(n[r]), t && (n[r] = n[r].replace(/\//g, "%2F"));
        return n.join("/")
    }

    function Xt(e, t) {
        var n = Wn(e);
        t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = f(n.port) || Io[n.protocol] || null
    }

    function Jt(e, t, n) {
        if (Po.test(e)) throw Ro("badpath", 'Invalid url "{0}".', e);
        var r = "/" !== e.charAt(0);
        r && (e = "/" + e);
        var i = Wn(e),
            o = r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname;
        t.$$path = Gt(o, n), t.$$search = re(i.search), t.$$hash = decodeURIComponent(i.hash), t.$$path && "/" !== t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function Zt(e, t) {
        return e.slice(0, t.length) === t
    }

    function Qt(e, t) {
        return Zt(t, e) ? t.substr(e.length) : void 0
    }

    function en(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.substr(0, t)
    }

    function tn(e) {
        return e.replace(/(#.+)|#$/, "$1")
    }

    function nn(e) {
        return e.substr(0, en(e).lastIndexOf("/") + 1)
    }

    function rn(e) {
        return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
    }

    function on(e, t, n) {
        this.$$html5 = !0, n = n || "", Xt(e, this), this.$$parse = function(e) {
            var n = Qt(t, e);
            if (!C(n)) throw Ro("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
            Jt(n, this, !0), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var e = ie(this.$$search),
                n = this.$$hash ? "#" + oe(this.$$hash) : "";
            this.$$url = Kt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1), this.$$urlUpdatedByLocation = !0
        }, this.$$parseLinkUrl = function(r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var o, a, s;
            return E(o = Qt(e, r)) ? (a = o, s = n && E(o = Qt(n, o)) ? t + (Qt("/", o) || o) : e + a) : E(o = Qt(t, r)) ? s = t + o : t === r + "/" && (s = t), s && this.$$parse(s), !!s
        }
    }

    function an(e, t, n) {
        Xt(e, this), this.$$parse = function(r) {
            function i(e, t, n) {
                var r, i = /^\/[A-Z]:(\/.*)/;
                return Zt(t, n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
            }
            var o, a = Qt(e, r) || Qt(t, r);
            b(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", b(a) && (e = r, this.replace())) : (o = Qt(n, a), b(o) && (o = a)), Jt(o, this, !1), this.$$path = i(this.$$path, o, e), this.$$compose()
        }, this.$$compose = function() {
            var t = ie(this.$$search),
                r = this.$$hash ? "#" + oe(this.$$hash) : "";
            this.$$url = Kt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + (this.$$url ? n + this.$$url : ""), this.$$urlUpdatedByLocation = !0
        }, this.$$parseLinkUrl = function(t, n) {
            return en(e) === en(t) ? (this.$$parse(t), !0) : !1
        }
    }

    function sn(e, t, n) {
        this.$$html5 = !0, an.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var o, a;
            return e === en(r) ? o = r : (a = Qt(t, r)) ? o = e + n + a : t === r + "/" && (o = t), o && this.$$parse(o), !!o
        }, this.$$compose = function() {
            var t = ie(this.$$search),
                r = this.$$hash ? "#" + oe(this.$$hash) : "";
            this.$$url = Kt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + n + this.$$url, this.$$urlUpdatedByLocation = !0
        }
    }

    function cn(e) {
        return function() {
            return this[e]
        }
    }

    function ln(e, t) {
        return function(n) {
            return b(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function dn() {
        var e = "!",
            t = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(t) {
            return E(t) ? (e = t, this) : e
        }, this.html5Mode = function(e) {
            return H(e) ? (t.enabled = e, this) : y(e) ? (H(e.enabled) && (t.enabled = e.enabled), H(e.requireBase) && (t.requireBase = e.requireBase), (H(e.rewriteLinks) || C(e.rewriteLinks)) && (t.rewriteLinks = e.rewriteLinks), this) : t
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
            function s(e, t, n) {
                var i = l.url(),
                    o = l.$$state;
                try {
                    r.url(e, t, n), l.$$state = r.state()
                } catch (a) {
                    throw l.url(i), l.$$state = o, a
                }
            }

            function c(e, t) {
                n.$broadcast("$locationChangeSuccess", l.absUrl(), e, l.$$state, t)
            }
            var l, d, u, m = r.baseHref(),
                f = r.url();
            if (t.enabled) {
                if (!m && t.requireBase) throw Ro("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                u = rn(f) + (m || "/"), d = i.history ? on : sn
            } else u = en(f), d = an;
            var h = nn(u);
            l = new d(u, h, "#" + e), l.$$parseLinkUrl(f, f),
                l.$$state = r.state();
            var p = /^\s*(javascript|mailto):/i;
            o.on("click", function(e) {
                var i = t.rewriteLinks;
                if (i && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 !== e.which && 2 !== e.button) {
                    for (var s = ci(e.target);
                        "a" !== j(s[0]);)
                        if (s[0] === o[0] || !(s = s.parent())[0]) return;
                    if (!C(i) || !b(s.attr(i))) {
                        var c = s.prop("href"),
                            d = s.attr("href") || s.attr("xlink:href");
                        y(c) && "[object SVGAnimatedString]" === c.toString() && (c = Wn(c.animVal).href), p.test(c) || !c || s.attr("target") || e.isDefaultPrevented() || l.$$parseLinkUrl(c, d) && (e.preventDefault(), l.absUrl() !== r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                    }
                }
            }), tn(l.absUrl()) !== tn(f) && r.url(l.absUrl(), !0);
            var g = !0;
            return r.onUrlChange(function(e, t) {
                return Zt(e, h) ? (n.$evalAsync(function() {
                    var r, i = l.absUrl(),
                        o = l.$$state;
                    e = tn(e), l.$$parse(e), l.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, l.absUrl() === e && (r ? (l.$$parse(i), l.$$state = o, s(i, !1, o)) : (g = !1, c(i, o)))
                }), void(n.$$phase || n.$digest())) : void(a.location.href = e)
            }), n.$watch(function() {
                if (g || l.$$urlUpdatedByLocation) {
                    l.$$urlUpdatedByLocation = !1;
                    var e = tn(r.url()),
                        t = tn(l.absUrl()),
                        o = r.state(),
                        a = l.$$replace,
                        d = e !== t || l.$$html5 && i.history && o !== l.$$state;
                    (g || d) && (g = !1, n.$evalAsync(function() {
                        var t = l.absUrl(),
                            r = n.$broadcast("$locationChangeStart", t, e, l.$$state, o).defaultPrevented;
                        l.absUrl() === t && (r ? (l.$$parse(e), l.$$state = o) : (d && s(t, a, o === l.$$state ? null : l.$$state), c(e, o)))
                    }))
                }
                l.$$replace = !1
            }), l
        }]
    }

    function un() {
        var e = !0,
            t = this;
        this.debugEnabled = function(t) {
            return E(t) ? (e = t, this) : e
        }, this.$get = ["$window", function(n) {
            function r(e) {
                return A(e) && (e.stack && a ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
            }

            function i(e) {
                var t = n.console || {},
                    i = t[e] || t.log || p;
                return function() {
                    var e = [];
                    return o(arguments, function(t) {
                        e.push(r(t))
                    }), Function.prototype.apply.call(i, t, e)
                }
            }
            var a = si || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
            return {
                log: i("log"),
                info: i("info"),
                warn: i("warn"),
                error: i("error"),
                debug: function() {
                    var n = i("debug");
                    return function() {
                        e && n.apply(t, arguments)
                    }
                }()
            }
        }]
    }

    function mn(e) {
        return e + ""
    }

    function fn(e, t) {
        return "undefined" != typeof e ? e : t
    }

    function hn(e, t) {
        return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e + t
    }

    function pn(e, t) {
        var n = e(t);
        return !n.$stateful
    }

    function gn(e, t) {
        switch (e.type) {
            case Uo.MemberExpression:
                if (e.computed) return !1;
                break;
            case Uo.UnaryExpression:
                return zo;
            case Uo.BinaryExpression:
                return "+" !== e.operator ? zo : !1;
            case Uo.CallExpression:
                return !1
        }
        return void 0 === t ? Wo : t
    }

    function vn(e, t, n) {
        var r, i, a, s = e.isPure = gn(e, n);
        switch (e.type) {
            case Uo.Program:
                r = !0, o(e.body, function(e) {
                    vn(e.expression, t, s), r = r && e.expression.constant
                }), e.constant = r;
                break;
            case Uo.Literal:
                e.constant = !0, e.toWatch = [];
                break;
            case Uo.UnaryExpression:
                vn(e.argument, t, s), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                break;
            case Uo.BinaryExpression:
                vn(e.left, t, s), vn(e.right, t, s), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                break;
            case Uo.LogicalExpression:
                vn(e.left, t, s), vn(e.right, t, s), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case Uo.ConditionalExpression:
                vn(e.test, t, s), vn(e.alternate, t, s), vn(e.consequent, t, s), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case Uo.Identifier:
                e.constant = !1, e.toWatch = [e];
                break;
            case Uo.MemberExpression:
                vn(e.object, t, s), e.computed && vn(e.property, t, s), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = e.constant ? [] : [e];
                break;
            case Uo.CallExpression:
                a = e.filter ? pn(t, e.callee.name) : !1, r = a, i = [], o(e.arguments, function(e) {
                    vn(e, t, s), r = r && e.constant, i.push.apply(i, e.toWatch)
                }), e.constant = r, e.toWatch = a ? i : [e];
                break;
            case Uo.AssignmentExpression:
                vn(e.left, t, s), vn(e.right, t, s), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                break;
            case Uo.ArrayExpression:
                r = !0, i = [], o(e.elements, function(e) {
                    vn(e, t, s), r = r && e.constant, i.push.apply(i, e.toWatch)
                }), e.constant = r, e.toWatch = i;
                break;
            case Uo.ObjectExpression:
                r = !0, i = [], o(e.properties, function(e) {
                    vn(e.value, t, s), r = r && e.value.constant, i.push.apply(i, e.value.toWatch), e.computed && (vn(e.key, t, !1), r = r && e.key.constant, i.push.apply(i, e.key.toWatch))
                }), e.constant = r, e.toWatch = i;
                break;
            case Uo.ThisExpression:
                e.constant = !1, e.toWatch = [];
                break;
            case Uo.LocalsExpression:
                e.constant = !1, e.toWatch = []
        }
    }

    function $n(e) {
        if (1 === e.length) {
            var t = e[0].expression,
                n = t.toWatch;
            return 1 !== n.length ? n : n[0] !== t ? n : void 0
        }
    }

    function bn(e) {
        return e.type === Uo.Identifier || e.type === Uo.MemberExpression
    }

    function En(e) {
        return 1 === e.body.length && bn(e.body[0].expression) ? {
            type: Uo.AssignmentExpression,
            left: e.body[0].expression,
            right: {
                type: Uo.NGValueParameter
            },
            operator: "="
        } : void 0
    }

    function yn(e) {
        return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === Uo.Literal || e.body[0].expression.type === Uo.ArrayExpression || e.body[0].expression.type === Uo.ObjectExpression)
    }

    function Mn(e) {
        return e.constant
    }

    function Cn(e) {
        this.$filter = e
    }

    function wn(e) {
        this.$filter = e
    }

    function xn(e, t, n) {
        this.ast = new Uo(e, n), this.astCompiler = n.csp ? new wn(t) : new Cn(t)
    }

    function An(e) {
        return k(e.valueOf) ? e.valueOf() : jo.call(e)
    }

    function kn() {
        var e, t, n = Ee(),
            r = {
                "true": !0,
                "false": !1,
                "null": null,
                undefined: void 0
            };
        this.addLiteral = function(e, t) {
            r[e] = t
        }, this.setIdentifierFns = function(n, r) {
            return e = n, t = r, this
        }, this.$get = ["$filter", function(i) {
            function a(e, t) {
                var r, o;
                switch (typeof e) {
                    case "string":
                        if (e = e.trim(), o = e, r = n[o], !r) {
                            var a = new Bo(g),
                                s = new xn(a, i, g);
                            r = s.parse(e), r.constant ? r.$$watchDelegate = m : r.oneTime ? r.$$watchDelegate = r.literal ? u : d : r.inputs && (r.$$watchDelegate = l), n[o] = r
                        }
                        return f(r, t);
                    case "function":
                        return f(e, t);
                    default:
                        return f(p, t)
                }
            }

            function s(e) {
                var t = new Bo(g),
                    n = new xn(t, i, g);
                return n.getAst(e).ast
            }

            function c(e, t, n) {
                return null == e || null == t ? e === t : "object" != typeof e || (e = An(e), "object" != typeof e || n) ? e === t || e !== e && t !== t : !1
            }

            function l(e, t, n, r, i) {
                var o, a = r.inputs;
                if (1 === a.length) {
                    var s = c;
                    return a = a[0], e.$watch(function(e) {
                        var t = a(e);
                        return c(t, s, a.isPure) || (o = r(e, void 0, void 0, [t]), s = t && An(t)), o
                    }, t, n, i)
                }
                for (var l = [], d = [], u = 0, m = a.length; m > u; u++) l[u] = c, d[u] = null;
                return e.$watch(function(e) {
                    for (var t = !1, n = 0, i = a.length; i > n; n++) {
                        var s = a[n](e);
                        (t || (t = !c(s, l[n], a[n].isPure))) && (d[n] = s, l[n] = s && An(s))
                    }
                    return t && (o = r(e, void 0, void 0, d)), o
                }, t, n, i)
            }

            function d(e, t, n, r, i) {
                function o(e) {
                    return r(e)
                }

                function a(e, n, r) {
                    c = e, k(t) && t(e, n, r), E(e) && r.$$postDigest(function() {
                        E(c) && s()
                    })
                }
                var s, c;
                return s = r.inputs ? l(e, a, n, r, i) : e.$watch(o, a, n)
            }

            function u(e, t, n, r) {
                function i(e) {
                    var t = !0;
                    return o(e, function(e) {
                        E(e) || (t = !1)
                    }), t
                }
                var a, s;
                return a = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    s = e, k(t) && t(e, n, r), i(e) && r.$$postDigest(function() {
                        i(s) && a()
                    })
                }, n)
            }

            function m(e, t, n, r) {
                var i = e.$watch(function(e) {
                    return i(), r(e)
                }, t, n);
                return i
            }

            function f(e, t) {
                if (!t) return e;
                var n = e.$$watchDelegate,
                    r = !1,
                    i = n !== u && n !== d,
                    o = i ? function(n, i, o, a) {
                        var s = r && a ? a[0] : e(n, i, o, a);
                        return t(s, n, i)
                    } : function(n, r, i, o) {
                        var a = e(n, r, i, o),
                            s = t(a, n, r);
                        return E(a) ? s : a
                    };
                return r = !e.inputs, n && n !== l ? (o.$$watchDelegate = n, o.inputs = e.inputs) : t.$stateful || (o.$$watchDelegate = l, o.inputs = e.inputs ? e.inputs : [e]), o.inputs && (o.inputs = o.inputs.map(function(e) {
                    return e.isPure === Wo ? function(t) {
                        return e(t)
                    } : e
                })), o
            }
            var h = wi().noUnsafeEval,
                g = {
                    csp: h,
                    literals: B(r),
                    isIdentifierStart: k(e) && e,
                    isIdentifierContinue: k(t) && t
                };
            return a.$$getAst = s, a
        }]
    }

    function Tn() {
        var e = !0;
        this.$get = ["$rootScope", "$exceptionHandler", function(t, n) {
            return Nn(function(e) {
                t.$evalAsync(e)
            }, n, e)
        }], this.errorOnUnhandledRejections = function(t) {
            return E(t) ? (e = t, this) : e
        }
    }

    function Sn() {
        var e = !0;
        this.$get = ["$browser", "$exceptionHandler", function(t, n) {
            return Nn(function(e) {
                t.defer(e)
            }, n, e)
        }], this.errorOnUnhandledRejections = function(t) {
            return E(t) ? (e = t, this) : e
        }
    }

    function Nn(e, t, n) {
        function i() {
            return new a
        }

        function a() {
            var e = this.promise = new s;
            this.resolve = function(t) {
                m(e, t)
            }, this.reject = function(t) {
                h(e, t)
            }, this.notify = function(t) {
                g(e, t)
            }
        }

        function s() {
            this.$$state = {
                status: 0
            }
        }

        function c(r) {
            var i, o, a;
            a = r.pending, r.processScheduled = !1, r.pending = void 0;
            try {
                for (var s = 0, c = a.length; c > s; ++s) {
                    _n(r), o = a[s][0], i = a[s][r.status];
                    try {
                        k(i) ? m(o, i(r.value)) : 1 === r.status ? m(o, r.value) : h(o, r.value)
                    } catch (d) {
                        h(o, d), d && d.$$passToExceptionHandler === !0 && t(d)
                    }
                }
            } finally {
                --T, n && 0 === T && e(l)
            }
        }

        function l() {
            for (; !T && S.length;) {
                var e = S.shift();
                if (!Dn(e)) {
                    _n(e);
                    var n = "Possibly unhandled rejection: " + xe(e.value);
                    A(e.value) ? t(e.value, n) : t(n)
                }
            }
        }

        function d(t) {
            !n || t.pending || 2 !== t.status || Dn(t) || (0 === T && 0 === S.length && e(l), S.push(t)), !t.processScheduled && t.pending && (t.processScheduled = !0, ++T, e(function() {
                c(t)
            }))
        }

        function m(e, t) {
            e.$$state.status || (t === e ? p(e, x("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : f(e, t))
        }

        function f(e, t) {
            function n(t) {
                a || (a = !0, f(e, t))
            }

            function r(t) {
                a || (a = !0, p(e, t))
            }

            function i(t) {
                g(e, t)
            }
            var o, a = !1;
            try {
                (y(t) || k(t)) && (o = t.then), k(o) ? (e.$$state.status = -1, o.call(t, n, r, i)) : (e.$$state.value = t, e.$$state.status = 1, d(e.$$state))
            } catch (s) {
                r(s)
            }
        }

        function h(e, t) {
            e.$$state.status || p(e, t)
        }

        function p(e, t) {
            e.$$state.value = t, e.$$state.status = 2, d(e.$$state)
        }

        function g(n, r) {
            var i = n.$$state.pending;
            n.$$state.status <= 0 && i && i.length && e(function() {
                for (var e, n, o = 0, a = i.length; a > o; o++) {
                    n = i[o][0], e = i[o][3];
                    try {
                        g(n, k(e) ? e(r) : r)
                    } catch (s) {
                        t(s)
                    }
                }
            })
        }

        function v(e) {
            var t = new s;
            return h(t, e), t
        }

        function $(e, t, n) {
            var r = null;
            try {
                k(n) && (r = n())
            } catch (i) {
                return v(i)
            }
            return I(r) ? r.then(function() {
                return t(e)
            }, v) : t(e)
        }

        function E(e, t, n, r) {
            var i = new s;
            return m(i, e), i.then(t, n, r)
        }

        function M(e) {
            var t = new s,
                n = 0,
                r = Ei(e) ? [] : {};
            return o(e, function(e, i) {
                n++, E(e).then(function(e) {
                    r[i] = e, --n || m(t, r)
                }, function(e) {
                    h(t, e)
                })
            }), 0 === n && m(t, r), t
        }

        function C(e) {
            var t = i();
            return o(e, function(e) {
                E(e).then(t.resolve, t.reject)
            }), t.promise
        }

        function w(e) {
            function t(e) {
                m(r, e)
            }

            function n(e) {
                h(r, e)
            }
            if (!k(e)) throw x("norslvr", "Expected resolverFn, got '{0}'", e);
            var r = new s;
            return e(t, n), r
        }
        var x = r("$q", TypeError),
            T = 0,
            S = [];
        u(s.prototype, {
            then: function(e, t, n) {
                if (b(e) && b(t) && b(n)) return this;
                var r = new s;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && d(this.$$state), r
            },
            "catch": function(e) {
                return this.then(null, e)
            },
            "finally": function(e, t) {
                return this.then(function(t) {
                    return $(t, N, e)
                }, function(t) {
                    return $(t, v, e)
                }, t)
            }
        });
        var N = E;
        return w.prototype = s.prototype, w.defer = i, w.reject = v, w.when = E, w.resolve = N, w.all = M, w.race = C, w
    }

    function Dn(e) {
        return !!e.pur
    }

    function _n(e) {
        e.pur = !0
    }

    function On(e) {
        _n(e.$$state)
    }

    function Hn() {
        this.$get = ["$window", "$timeout", function(e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                i = !!n,
                o = i ? function(e) {
                    var t = n(e);
                    return function() {
                        r(t)
                    }
                } : function(e) {
                    var n = t(e, 16.66, !1);
                    return function() {
                        t.cancel(n)
                    }
                };
            return o.supported = i, o
        }]
    }

    function In() {
        function e(e) {
            function t() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = c(), this.$$ChildScope = null
            }
            return t.prototype = e, t
        }
        var t = 10,
            n = r("$rootScope"),
            a = null,
            s = null;
        this.digestTtl = function(e) {
            return arguments.length && (t = e), t
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function(r, l, d) {
            function u(e) {
                e.currentScope.$$destroyed = !0
            }

            function m(e) {
                9 === si && (e.$$childHead && m(e.$$childHead), e.$$nextSibling && m(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
            }

            function f() {
                this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function h(e) {
                if (w.$$phase) throw n("inprog", "{0} already in progress", w.$$phase);
                w.$$phase = e
            }

            function g() {
                w.$$phase = null
            }

            function v(e, t) {
                do e.$$watchersCount += t; while (e = e.$parent)
            }

            function $(e, t, n) {
                do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
            }

            function E() {}

            function M() {
                for (; T.length;) try {
                    T.shift()()
                } catch (e) {
                    r(e)
                }
                s = null
            }

            function C() {
                null === s && (s = d.defer(function() {
                    w.$apply(M)
                }))
            }
            f.prototype = {
                constructor: f,
                $new: function(t, n) {
                    var r;
                    return n = n || this, t ? (r = new f, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (t || n !== this) && r.$on("$destroy", u), r
                },
                $watch: function(e, t, n, r) {
                    var i = l(e),
                        o = k(t) ? t : p;
                    if (i.$$watchDelegate) return i.$$watchDelegate(this, o, n, i, e);
                    var s = this,
                        c = s.$$watchers,
                        d = {
                            fn: o,
                            last: E,
                            get: i,
                            exp: r || e,
                            eq: !!n
                        };
                    return a = null, c || (c = s.$$watchers = [], c.$$digestWatchIndex = -1), c.unshift(d), c.$$digestWatchIndex++, v(this, 1),
                        function() {
                            var e = q(c, d);
                            e >= 0 && (v(s, -1), e < c.$$digestWatchIndex && c.$$digestWatchIndex--), a = null
                        }
                },
                $watchGroup: function(e, t) {
                    function n() {
                        c = !1, l ? (l = !1, t(i, i, s)) : t(i, r, s)
                    }
                    var r = new Array(e.length),
                        i = new Array(e.length),
                        a = [],
                        s = this,
                        c = !1,
                        l = !0;
                    if (!e.length) {
                        var d = !0;
                        return s.$evalAsync(function() {
                                d && t(i, i, s)
                            }),
                            function() {
                                d = !1
                            }
                    }
                    return 1 === e.length ? this.$watch(e[0], function(e, n, o) {
                        i[0] = e, r[0] = n, t(i, e === n ? i : r, o)
                    }) : (o(e, function(e, t) {
                        var o = s.$watch(e, function(e, o) {
                            i[t] = e, r[t] = o, c || (c = !0, s.$evalAsync(n))
                        });
                        a.push(o)
                    }), function() {
                        for (; a.length;) a.shift()()
                    })
                },
                $watchCollection: function(e, t) {
                    function n(e) {
                        o = e;
                        var t, n, r, s, c;
                        if (!b(o)) {
                            if (y(o))
                                if (i(o)) {
                                    a !== f && (a = f, g = a.length = 0, u++), t = o.length, g !== t && (u++, a.length = g = t);
                                    for (var l = 0; t > l; l++) c = a[l], s = o[l], r = c !== c && s !== s, r || c === s || (u++, a[l] = s)
                                } else {
                                    a !== h && (a = h = {}, g = 0, u++), t = 0;
                                    for (n in o) ni.call(o, n) && (t++, s = o[n], c = a[n], n in a ? (r = c !== c && s !== s, r || c === s || (u++, a[n] = s)) : (g++, a[n] = s, u++));
                                    if (g > t) {
                                        u++;
                                        for (n in a) ni.call(o, n) || (g--, delete a[n])
                                    }
                                }
                            else a !== o && (a = o, u++);
                            return u
                        }
                    }

                    function r() {
                        if (p ? (p = !1, t(o, o, c)) : t(o, s, c), d)
                            if (y(o))
                                if (i(o)) {
                                    s = new Array(o.length);
                                    for (var e = 0; e < o.length; e++) s[e] = o[e]
                                } else {
                                    s = {};
                                    for (var n in o) ni.call(o, n) && (s[n] = o[n])
                                }
                        else s = o
                    }
                    n.$stateful = !0;
                    var o, a, s, c = this,
                        d = t.length > 1,
                        u = 0,
                        m = l(e, n),
                        f = [],
                        h = {},
                        p = !0,
                        g = 0;
                    return this.$watch(m, r)
                },
                $digest: function() {
                    var e, i, o, c, l, u, m, f, p, v, $, b = t,
                        y = this,
                        C = [];
                    h("$digest"), d.$$checkUrlChange(), this === w && null !== s && (d.defer.cancel(s), M()), a = null;
                    do {
                        m = !1, p = y;
                        for (var T = 0; T < x.length; T++) {
                            try {
                                $ = x[T], c = $.fn, c($.scope, $.locals)
                            } catch (N) {
                                r(N)
                            }
                            a = null
                        }
                        x.length = 0;
                        e: do {
                            if (u = p.$$watchers)
                                for (u.$$digestWatchIndex = u.length; u.$$digestWatchIndex--;) try {
                                    if (e = u[u.$$digestWatchIndex])
                                        if (l = e.get, (i = l(p)) === (o = e.last) || (e.eq ? z(i, o) : bi(i) && bi(o))) {
                                            if (e === a) {
                                                m = !1;
                                                break e
                                            }
                                        } else m = !0, a = e, e.last = e.eq ? B(i, null) : i, c = e.fn, c(i, o === E ? i : o, p), 5 > b && (v = 4 - b, C[v] || (C[v] = []), C[v].push({
                                            msg: k(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                            newVal: i,
                                            oldVal: o
                                        }))
                                } catch (N) {
                                    r(N)
                                }
                            if (!(f = p.$$watchersCount && p.$$childHead || p !== y && p.$$nextSibling))
                                for (; p !== y && !(f = p.$$nextSibling);) p = p.$parent
                        } while (p = f);
                        if ((m || x.length) && !b--) throw g(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, C)
                    } while (m || x.length);
                    for (g(); S < A.length;) try {
                        A[S++]()
                    } catch (N) {
                        r(N)
                    }
                    A.length = S = 0, d.$$checkUrlChange()
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === w && d.$$applicationDestroyed(), v(this, -this.$$watchersCount);
                        for (var t in this.$$listenerCount) $(this, this.$$listenerCount[t], t);
                        e && e.$$childHead === this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail === this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
                            return p
                        }, this.$$listeners = {}, this.$$nextSibling = null, m(this)
                    }
                },
                $eval: function(e, t) {
                    return l(e)(this, t)
                },
                $evalAsync: function(e, t) {
                    w.$$phase || x.length || d.defer(function() {
                        x.length && w.$digest()
                    }), x.push({
                        scope: this,
                        fn: l(e),
                        locals: t
                    })
                },
                $$postDigest: function(e) {
                    A.push(e)
                },
                $apply: function(e) {
                    try {
                        h("$apply");
                        try {
                            return this.$eval(e)
                        } finally {
                            g()
                        }
                    } catch (t) {
                        r(t)
                    } finally {
                        try {
                            w.$digest()
                        } catch (t) {
                            throw r(t), t
                        }
                    }
                },
                $applyAsync: function(e) {
                    function t() {
                        n.$eval(e)
                    }
                    var n = this;
                    e && T.push(t), e = l(e), C()
                },
                $on: function(e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var r = this;
                    do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                    var i = this;
                    return function() {
                        var r = n.indexOf(t); - 1 !== r && (delete n[r], $(i, 1, e))
                    }
                },
                $emit: function(e, t) {
                    var n, i, o, a = [],
                        s = this,
                        c = !1,
                        l = {
                            name: e,
                            targetScope: s,
                            stopPropagation: function() {
                                c = !0
                            },
                            preventDefault: function() {
                                l.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        d = W([l], arguments, 1);
                    do {
                        for (n = s.$$listeners[e] || a, l.currentScope = s, i = 0, o = n.length; o > i; i++)
                            if (n[i]) try {
                                n[i].apply(null, d)
                            } catch (u) {
                                r(u)
                            } else n.splice(i, 1), i--, o--;
                        if (c) break;
                        s = s.$parent
                    } while (s);
                    return l.currentScope = null, l
                },
                $broadcast: function(e, t) {
                    var n = this,
                        i = n,
                        o = n,
                        a = {
                            name: e,
                            targetScope: n,
                            preventDefault: function() {
                                a.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!n.$$listenerCount[e]) return a;
                    for (var s, c, l, d = W([a], arguments, 1); i = o;) {
                        for (a.currentScope = i, s = i.$$listeners[e] || [], c = 0, l = s.length; l > c; c++)
                            if (s[c]) try {
                                s[c].apply(null, d)
                            } catch (u) {
                                r(u)
                            } else s.splice(c, 1), c--, l--;
                        if (!(o = i.$$listenerCount[e] && i.$$childHead || i !== n && i.$$nextSibling))
                            for (; i !== n && !(o = i.$$nextSibling);) i = i.$parent
                    }
                    return a.currentScope = null, a
                }
            };
            var w = new f,
                x = w.$$asyncQueue = [],
                A = w.$$postDigestQueue = [],
                T = w.$$applyAsyncQueue = [],
                S = 0;
            return w
        }]
    }

    function Rn() {
        var e = /^\s*(https?|s?ftp|mailto|tel|file):/,
            t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) {
            return E(t) ? (e = t, this) : e
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return E(e) ? (t = e, this) : t
        }, this.$get = function() {
            return function(n, r) {
                var i, o = r ? t : e;
                return i = Wn(n && n.trim()).href, "" === i || i.match(o) ? n : "unsafe:" + i
            }
        }
    }

    function Pn(e) {
        return e.replace(Go, Se)
    }

    function Ln(e) {
        if ("self" === e) return e;
        if (C(e)) {
            if (e.indexOf("***") > -1) throw Yo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
            return e = Ci(e).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + e + "$")
        }
        if (T(e)) return new RegExp("^" + e.source + "$");
        throw Yo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Vn(e) {
        var t = [];
        return E(e) && o(e, function(e) {
            t.push(Ln(e))
        }), t
    }

    function jn() {
        this.SCE_CONTEXTS = Ko;
        var e = ["self"],
            t = [];
        this.resourceUrlWhitelist = function(t) {
            return arguments.length && (e = Vn(t)), e
        }, this.resourceUrlBlacklist = function(e) {
            return arguments.length && (t = Vn(e)), t
        }, this.$get = ["$injector", function(n) {
            function r(e, t) {
                return "self" === e ? Yn(t) : !!e.exec(t.href)
            }

            function i(n) {
                var i, o, a = Wn(n.toString()),
                    s = !1;
                for (i = 0, o = e.length; o > i; i++)
                    if (r(e[i], a)) {
                        s = !0;
                        break
                    }
                if (s)
                    for (i = 0, o = t.length; o > i; i++)
                        if (r(t[i], a)) {
                            s = !1;
                            break
                        }
                return s
            }

            function o(e) {
                var t = function(e) {
                    this.$$unwrapTrustedValue = function() {
                        return e
                    }
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }

            function a(e, t) {
                var n = u.hasOwnProperty(e) ? u[e] : null;
                if (!n) throw Yo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                if (null === t || b(t) || "" === t) return t;
                if ("string" != typeof t) throw Yo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                return new n(t)
            }

            function s(e) {
                return e instanceof d ? e.$$unwrapTrustedValue() : e
            }

            function c(e, t) {
                if (null === t || b(t) || "" === t) return t;
                var n = u.hasOwnProperty(e) ? u[e] : null;
                if (n && t instanceof n) return t.$$unwrapTrustedValue();
                if (e === Ko.RESOURCE_URL) {
                    if (i(t)) return t;
                    throw Yo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                }
                if (e === Ko.HTML) return l(t);
                throw Yo("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var l = function(e) {
                throw Yo("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            n.has("$sanitize") && (l = n.get("$sanitize"));
            var d = o(),
                u = {};
            return u[Ko.HTML] = o(d), u[Ko.CSS] = o(d), u[Ko.URL] = o(d), u[Ko.JS] = o(d), u[Ko.RESOURCE_URL] = o(u[Ko.URL]), {
                trustAs: a,
                getTrusted: c,
                valueOf: s
            }
        }]
    }

    function Fn() {
        var e = !0;
        this.enabled = function(t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sceDelegate", function(t, n) {
            if (e && 8 > si) throw Yo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var r = Ce(Ko);
            r.isEnabled = function() {
                return e
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                return t
            }, r.valueOf = g), r.parseAs = function(e, n) {
                var i = t(n);
                return i.literal && i.constant ? i : t(n, function(t) {
                    return r.getTrusted(e, t)
                })
            };
            var i = r.parseAs,
                a = r.getTrusted,
                s = r.trustAs;
            return o(Ko, function(e, t) {
                var n = ri(t);
                r[Pn("parse_as_" + n)] = function(t) {
                    return i(e, t)
                }, r[Pn("get_trusted_" + n)] = function(t) {
                    return a(e, t)
                }, r[Pn("trust_as_" + n)] = function(t) {
                    return s(e, t)
                }
            }), r
        }]
    }

    function qn() {
        this.$get = ["$window", "$document", function(e, t) {
            var n = {},
                r = e.nw && e.nw.process,
                i = !r && e.chrome && (e.chrome.app && e.chrome.app.runtime || !e.chrome.app && e.chrome.runtime && e.chrome.runtime.id),
                o = !i && e.history && e.history.pushState,
                a = f((/android (\d+)/.exec(ri((e.navigator || {}).userAgent)) || [])[1]),
                s = /Boxee/i.test((e.navigator || {}).userAgent),
                c = t[0] || {},
                l = c.body && c.body.style,
                d = !1,
                u = !1;
            return l && (d = !!("transition" in l || "webkitTransition" in l), u = !!("animation" in l || "webkitAnimation" in l)), {
                history: !(!o || 4 > a || s),
                hasEvent: function(e) {
                    if ("input" === e && si) return !1;
                    if (b(n[e])) {
                        var t = c.createElement("div");
                        n[e] = "on" + e in t
                    }
                    return n[e]
                },
                csp: wi(),
                transitions: d,
                animations: u,
                android: a
            }
        }]
    }

    function Bn() {
        var e;
        this.httpOptions = function(t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function(t, n, r, i, o) {
            function a(s, c) {
                function l(e) {
                    return c || (e = Xo("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", s, e.status, e.statusText), t(e)), i.reject(e)
                }
                a.totalPendingRequests++, (!C(s) || b(n.get(s))) && (s = o.getTrustedResourceUrl(s));
                var d = r.defaults && r.defaults.transformResponse;
                return Ei(d) ? d = d.filter(function(e) {
                    return e !== Rt
                }) : d === Rt && (d = null), r.get(s, u({
                    cache: n,
                    transformResponse: d
                }, e))["finally"](function() {
                    a.totalPendingRequests--
                }).then(function(e) {
                    return n.put(s, e.data), e.data
                }, l)
            }
            return a.totalPendingRequests = 0, a
        }]
    }

    function Un() {
        this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
            var r = {};
            return r.findBindings = function(e, t, n) {
                var r = e.getElementsByClassName("ng-binding"),
                    i = [];
                return o(r, function(e) {
                    var r = vi.element(e).data("$binding");
                    r && o(r, function(r) {
                        if (n) {
                            var o = new RegExp("(^|\\s)" + Ci(t) + "(\\s|\\||$)");
                            o.test(r) && i.push(e)
                        } else -1 !== r.indexOf(t) && i.push(e)
                    })
                }), i
            }, r.findModels = function(e, t, n) {
                for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                    var o = n ? "=" : "*=",
                        a = "[" + r[i] + "model" + o + '"' + t + '"]',
                        s = e.querySelectorAll(a);
                    if (s.length) return s
                }
            }, r.getLocation = function() {
                return n.url()
            }, r.setLocation = function(t) {
                t !== n.url() && (n.url(t), e.$digest())
            }, r.whenStable = function(e) {
                t.notifyWhenNoOutstandingRequests(e)
            }, r
        }]
    }

    function zn() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
            function o(o, s, c) {
                k(o) || (c = s, s = o, o = p);
                var l, d = Y(arguments, 3),
                    u = E(c) && !c,
                    m = (u ? r : n).defer(),
                    f = m.promise;
                return l = t.defer(function() {
                    try {
                        m.resolve(o.apply(null, d))
                    } catch (t) {
                        m.reject(t), i(t)
                    } finally {
                        delete a[f.$$timeoutId]
                    }
                    u || e.$apply()
                }, s), f.$$timeoutId = l, a[l] = m, f
            }
            var a = {};
            return o.cancel = function(e) {
                return e && e.$$timeoutId in a ? (On(a[e.$$timeoutId].promise), a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
            }, o
        }]
    }

    function Wn(e) {
        var t = e;
        return si && (Jo.setAttribute("href", t), t = Jo.href), Jo.setAttribute("href", t), {
            href: Jo.href,
            protocol: Jo.protocol ? Jo.protocol.replace(/:$/, "") : "",
            host: Jo.host,
            search: Jo.search ? Jo.search.replace(/^\?/, "") : "",
            hash: Jo.hash ? Jo.hash.replace(/^#/, "") : "",
            hostname: Jo.hostname,
            port: Jo.port,
            pathname: "/" === Jo.pathname.charAt(0) ? Jo.pathname : "/" + Jo.pathname
        }
    }

    function Yn(e) {
        var t = C(e) ? Wn(e) : e;
        return t.protocol === Zo.protocol && t.host === Zo.host
    }

    function Kn() {
        this.$get = v(e)
    }

    function Gn(e) {
        function t(e) {
            try {
                return e.cookie || ""
            } catch (t) {
                return ""
            }
        }

        function n(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        var r = e[0] || {},
            i = {},
            o = "";
        return function() {
            var e, a, s, c, l, d = t(r);
            if (d !== o)
                for (o = d, e = o.split("; "), i = {}, s = 0; s < e.length; s++) a = e[s], c = a.indexOf("="), c > 0 && (l = n(a.substring(0, c)), b(i[l]) && (i[l] = n(a.substring(c + 1))));
            return i
        }
    }

    function Xn() {
        this.$get = Gn
    }

    function Jn(e) {
        function t(r, i) {
            if (y(r)) {
                var a = {};
                return o(r, function(e, n) {
                    a[n] = t(n, e)
                }), a
            }
            return e.factory(r + n, i)
        }
        var n = "Filter";
        this.register = t, this.$get = ["$injector", function(e) {
            return function(t) {
                return e.get(t + n)
            }
        }], t("currency", nr), t("date", vr), t("filter", Zn), t("json", $r), t("limitTo", br), t("lowercase", oa), t("number", rr), t("orderBy", yr), t("uppercase", aa)
    }

    function Zn() {
        return function(e, t, n, o) {
            if (!i(e)) {
                if (null == e) return e;
                throw r("filter")("notarray", "Expected array but received: {0}", e)
            }
            o = o || "$";
            var a, s, c = tr(t);
            switch (c) {
                case "function":
                    a = t;
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    s = !0;
                case "object":
                    a = Qn(t, n, o, s);
                    break;
                default:
                    return e
            }
            return Array.prototype.filter.call(e, a)
        }
    }

    function Qn(e, t, n, r) {
        var i, o = y(e) && n in e;
        return t === !0 ? t = z : k(t) || (t = function(e, t) {
            return b(e) ? !1 : null === e || null === t ? e === t : y(t) || y(e) && !$(e) ? !1 : (e = ri("" + e), t = ri("" + t), -1 !== e.indexOf(t))
        }), i = function(i) {
            return o && !y(i) ? er(i, e[n], t, n, !1) : er(i, e, t, n, r)
        }
    }

    function er(e, t, n, r, i, o) {
        var a = tr(e),
            s = tr(t);
        if ("string" === s && "!" === t.charAt(0)) return !er(e, t.substring(1), n, r, i);
        if (Ei(e)) return e.some(function(e) {
            return er(e, t, n, r, i)
        });
        switch (a) {
            case "object":
                var c;
                if (i) {
                    for (c in e)
                        if (c.charAt && "$" !== c.charAt(0) && er(e[c], t, n, r, !0)) return !0;
                    return o ? !1 : er(e, t, n, r, !1)
                }
                if ("object" === s) {
                    for (c in t) {
                        var l = t[c];
                        if (!k(l) && !b(l)) {
                            var d = c === r,
                                u = d ? e : e[c];
                            if (!er(u, l, n, r, d, d)) return !1
                        }
                    }
                    return !0
                }
                return n(e, t);
            case "function":
                return !1;
            default:
                return n(e, t)
        }
    }

    function tr(e) {
        return null === e ? "null" : typeof e
    }

    function nr(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n, r) {
            b(n) && (n = t.CURRENCY_SYM), b(r) && (r = t.PATTERNS[1].maxFrac);
            var i = n ? /\u00A4/g : /\s*\u00A4\s*/g;
            return null == e ? e : ar(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(i, n)
        }
    }

    function rr(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return null == e ? e : ar(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function ir(e) {
        var t, n, r, i, o, a = 0;
        for ((n = e.indexOf(ea)) > -1 && (e = e.replace(ea, "")), (r = e.search(/e/i)) > 0 ? (0 > n && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : 0 > n && (n = e.length), r = 0; e.charAt(r) === ta; r++);
        if (r === (o = e.length)) t = [0], n = 1;
        else {
            for (o--; e.charAt(o) === ta;) o--;
            for (n -= r, t = [], i = 0; o >= r; r++, i++) t[i] = +e.charAt(r)
        }
        return n > Qo && (t = t.splice(0, Qo - 1), a = n - 1, n = 1), {
            d: t,
            e: a,
            i: n
        }
    }

    function or(e, t, n, r) {
        var i = e.d,
            o = i.length - e.i;
        t = b(t) ? Math.min(Math.max(n, o), r) : +t;
        var a = t + e.i,
            s = i[a];
        if (a > 0) {
            i.splice(Math.max(e.i, a));
            for (var c = a; c < i.length; c++) i[c] = 0
        } else {
            o = Math.max(0, o), e.i = 1, i.length = Math.max(1, a = t + 1), i[0] = 0;
            for (var l = 1; a > l; l++) i[l] = 0
        }
        if (s >= 5)
            if (0 > a - 1) {
                for (var d = 0; d > a; d--) i.unshift(0), e.i++;
                i.unshift(1), e.i++
            } else i[a - 1]++;
        for (; o < Math.max(0, t); o++) i.push(0);
        var u = i.reduceRight(function(e, t, n, r) {
            return t += e, r[n] = t % 10, Math.floor(t / 10)
        }, 0);
        u && (i.unshift(u), e.i++)
    }

    function ar(e, t, n, r, i) {
        if (!C(e) && !w(e) || isNaN(e)) return "";
        var o, a = !isFinite(e),
            s = !1,
            c = Math.abs(e) + "",
            l = "";
        if (a) l = "∞";
        else {
            o = ir(c), or(o, i, t.minFrac, t.maxFrac);
            var d = o.d,
                u = o.i,
                m = o.e,
                f = [];
            for (s = d.reduce(function(e, t) {
                    return e && !t
                }, !0); 0 > u;) d.unshift(0), u++;
            u > 0 ? f = d.splice(u, d.length) : (f = d, d = [0]);
            var h = [];
            for (d.length >= t.lgSize && h.unshift(d.splice(-t.lgSize, d.length).join("")); d.length > t.gSize;) h.unshift(d.splice(-t.gSize, d.length).join(""));
            d.length && h.unshift(d.join("")), l = h.join(n), f.length && (l += r + f.join("")), m && (l += "e+" + m)
        }
        return 0 > e && !s ? t.negPre + l + t.negSuf : t.posPre + l + t.posSuf
    }

    function sr(e, t, n, r) {
        var i = "";
        for ((0 > e || r && 0 >= e) && (r ? e = -e + 1 : (e = -e, i = "-")), e = "" + e; e.length < t;) e = ta + e;
        return n && (e = e.substr(e.length - t)), i + e
    }

    function cr(e, t, n, r, i) {
        return n = n || 0,
            function(o) {
                var a = o["get" + e]();
                return (n > 0 || a > -n) && (a += n), 0 === a && -12 === n && (a = 12), sr(a, t, r, i)
            }
    }

    function lr(e, t, n) {
        return function(r, i) {
            var o = r["get" + e](),
                a = (n ? "STANDALONE" : "") + (t ? "SHORT" : ""),
                s = ii(a + e);
            return i[s][o]
        }
    }

    function dr(e, t, n) {
        var r = -1 * n,
            i = r >= 0 ? "+" : "";
        return i += sr(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + sr(Math.abs(r % 60), 2)
    }

    function ur(e) {
        var t = new Date(e, 0, 1).getDay();
        return new Date(e, 0, (4 >= t ? 5 : 12) - t)
    }

    function mr(e) {
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
    }

    function fr(e) {
        return function(t) {
            var n = ur(t.getFullYear()),
                r = mr(t),
                i = +r - +n,
                o = 1 + Math.round(i / 6048e5);
            return sr(o, e)
        }
    }

    function hr(e, t) {
        return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
    }

    function pr(e, t) {
        return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
    }

    function gr(e, t) {
        return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
    }

    function vr(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                var r = new Date(0),
                    i = 0,
                    o = 0,
                    a = t[8] ? r.setUTCFullYear : r.setFullYear,
                    s = t[8] ? r.setUTCHours : r.setHours;
                t[9] && (i = f(t[9] + t[10]), o = f(t[9] + t[11])), a.call(r, f(t[1]), f(t[2]) - 1, f(t[3]));
                var c = f(t[4] || 0) - i,
                    l = f(t[5] || 0) - o,
                    d = f(t[6] || 0),
                    u = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                return s.call(r, c, l, d, u), r
            }
            return e
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r, i) {
            var a, s, c = "",
                l = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, C(n) && (n = ia.test(n) ? f(n) : t(n)), w(n) && (n = new Date(n)), !x(n) || !isFinite(n.getTime())) return n;
            for (; r;) s = ra.exec(r), s ? (l = W(l, s, 1), r = l.pop()) : (l.push(r), r = null);
            var d = n.getTimezoneOffset();
            return i && (d = Z(i, d), n = ee(n, i, !0)), o(l, function(t) {
                a = na[t], c += a ? a(n, e.DATETIME_FORMATS, d) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), c
        }
    }

    function $r() {
        return function(e, t) {
            return b(t) && (t = 2), X(e, t)
        }
    }

    function br() {
        return function(e, t, n) {
            return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : f(t), bi(t) ? e : (w(e) && (e = e.toString()), i(e) ? (n = !n || isNaN(n) ? 0 : f(n), n = 0 > n ? Math.max(0, e.length + n) : n, t >= 0 ? Er(e, n, n + t) : 0 === n ? Er(e, t, e.length) : Er(e, Math.max(0, n + t), n)) : e)
        }
    }

    function Er(e, t, n) {
        return C(e) ? e.slice(t, n) : ui.call(e, t, n)
    }

    function yr(e) {
        function t(t) {
            return t.map(function(t) {
                var n = 1,
                    r = g;
                if (k(t)) r = t;
                else if (C(t) && (("+" === t.charAt(0) || "-" === t.charAt(0)) && (n = "-" === t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (r = e(t), r.constant))) {
                    var i = r();
                    r = function(e) {
                        return e[i]
                    }
                }
                return {
                    get: r,
                    descending: n
                }
            })
        }

        function n(e) {
            switch (typeof e) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        function o(e) {
            return k(e.valueOf) && (e = e.valueOf(), n(e)) ? e : $(e) && (e = e.toString(), n(e)) ? e : e
        }

        function a(e, t) {
            var n = typeof e;
            return null === e ? (n = "string", e = "null") : "object" === n && (e = o(e)), {
                value: e,
                type: n,
                index: t
            }
        }

        function s(e, t) {
            var n = 0,
                r = e.type,
                i = t.type;
            if (r === i) {
                var o = e.value,
                    a = t.value;
                "string" === r ? (o = o.toLowerCase(), a = a.toLowerCase()) : "object" === r && (y(o) && (o = e.index), y(a) && (a = t.index)), o !== a && (n = a > o ? -1 : 1)
            } else n = i > r ? -1 : 1;
            return n
        }
        return function(e, n, o, c) {
            function l(e, t) {
                return {
                    value: e,
                    tieBreaker: {
                        value: t,
                        type: "number",
                        index: t
                    },
                    predicateValues: u.map(function(n) {
                        return a(n.get(e), t)
                    })
                }
            }

            function d(e, t) {
                for (var n = 0, r = u.length; r > n; n++) {
                    var i = f(e.predicateValues[n], t.predicateValues[n]);
                    if (i) return i * u[n].descending * m
                }
                return (f(e.tieBreaker, t.tieBreaker) || s(e.tieBreaker, t.tieBreaker)) * m
            }
            if (null == e) return e;
            if (!i(e)) throw r("orderBy")("notarray", "Expected array but received: {0}", e);
            Ei(n) || (n = [n]), 0 === n.length && (n = ["+"]);
            var u = t(n),
                m = o ? -1 : 1,
                f = k(c) ? c : s,
                h = Array.prototype.map.call(e, l);
            return h.sort(d), e = h.map(function(e) {
                return e.value
            })
        }
    }

    function Mr(e) {
        return k(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", v(e)
    }

    function Cr(e, t) {
        e.$name = t
    }

    function wr(e, t, n, r, i) {
        this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = i(t.name || t.ngForm || "")(n), this.$dirty = !1, this.$pristine = !0, this.$valid = !0, this.$invalid = !1, this.$submitted = !1, this.$$parentForm = la, this.$$element = e, this.$$animate = r, xr(this)
    }

    function xr(e) {
        e.$$classCache = {}, e.$$classCache[Ya] = !(e.$$classCache[Wa] = e.$$element.hasClass(Wa))
    }

    function Ar(e) {
        function t(e, t, n, r) {
            e[t] || (e[t] = {}), a(e[t], n, r)
        }

        function n(e, t, n, r) {
            e[t] && s(e[t], n, r), kr(e[t]) && (e[t] = void 0)
        }

        function r(e, t, n) {
            n && !e.$$classCache[t] ? (e.$$animate.addClass(e.$$element, t), e.$$classCache[t] = !0) : !n && e.$$classCache[t] && (e.$$animate.removeClass(e.$$element, t), e.$$classCache[t] = !1)
        }

        function i(e, t, n) {
            t = t ? "-" + fe(t, "-") : "", r(e, Wa + t, n === !0), r(e, Ya + t, n === !1)
        }
        var o = e.clazz,
            a = e.set,
            s = e.unset;
        o.prototype.$setValidity = function(e, o, c) {
            b(o) ? t(this, "$pending", e, c) : n(this, "$pending", e, c), H(o) ? o ? (s(this.$error, e, c), a(this.$$success, e, c)) : (a(this.$error, e, c), s(this.$$success, e, c)) : (s(this.$error, e, c), s(this.$$success, e, c)), this.$pending ? (r(this, da, !0), this.$valid = this.$invalid = void 0, i(this, "", null)) : (r(this, da, !1), this.$valid = kr(this.$error), this.$invalid = !this.$valid, i(this, "", this.$valid));
            var l;
            l = this.$pending && this.$pending[e] ? void 0 : this.$error[e] ? !1 : this.$$success[e] ? !0 : null, i(this, e, l), this.$$parentForm.$setValidity(e, l, this)
        }
    }

    function kr(e) {
        if (e)
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
        return !0
    }

    function Tr(e) {
        e.$formatters.push(function(t) {
            return e.$isEmpty(t) ? t : t.toString()
        })
    }

    function Sr(e, t, n, r, i, o) {
        Nr(e, t, n, r, i, o), Tr(r)
    }

    function Nr(e, t, n, r, i, o) {
        var a = ri(t[0].type);
        if (!i.android) {
            var s = !1;
            t.on("compositionstart", function() {
                s = !0
            }), t.on("compositionend", function() {
                s = !1, l()
            })
        }
        var c, l = function(e) {
            if (c && (o.defer.cancel(c), c = null), !s) {
                var i = t.val(),
                    l = e && e.type;
                "password" === a || n.ngTrim && "false" === n.ngTrim || (i = Mi(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, l)
            }
        };
        if (i.hasEvent("input")) t.on("input", l);
        else {
            var d = function(e, t, n) {
                c || (c = o.defer(function() {
                    c = null, t && t.value === n || l(e)
                }))
            };
            t.on("keydown", function(e) {
                var t = e.keyCode;
                91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || d(e, this, this.value)
            }), i.hasEvent("paste") && t.on("paste cut drop", d)
        }
        t.on("change", l), xa[a] && r.$$hasNativeValidators && a === n.type && t.on(wa, function(e) {
            if (!c) {
                var t = this[ti],
                    n = t.badInput,
                    r = t.typeMismatch;
                c = o.defer(function() {
                    c = null, (t.badInput !== n || t.typeMismatch !== r) && l(e)
                })
            }
        }), r.$render = function() {
            var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
            t.val() !== e && t.val(e)
        }
    }

    function Dr(e, t) {
        if (x(e)) return e;
        if (C(e)) {
            ya.lastIndex = 0;
            var n = ya.exec(e);
            if (n) {
                var r = +n[1],
                    i = +n[2],
                    o = 0,
                    a = 0,
                    s = 0,
                    c = 0,
                    l = ur(r),
                    d = 7 * (i - 1);
                return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), c = t.getMilliseconds()), new Date(r, 0, l.getDate() + d, o, a, s, c)
            }
        }
        return 0 / 0
    }

    function _r(e, t) {
        return function(n, r) {
            var i, a;
            if (x(n)) return n;
            if (C(n)) {
                if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), pa.test(n)) return new Date(n);
                if (e.lastIndex = 0, i = e.exec(n)) return i.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, o(i, function(e, n) {
                    n < t.length && (a[t[n]] = +e)
                }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
            }
            return 0 / 0
        }
    }

    function Or(e, t, n, r) {
        return function(i, o, a, s, c, l, d) {
            function u(e) {
                return e && !(e.getTime && e.getTime() !== e.getTime())
            }

            function m(e) {
                return E(e) && !x(e) ? n(e) || void 0 : e
            }
            Hr(i, o, a, s), Nr(i, o, a, s, c, l);
            var f, h = s && s.$options.getOption("timezone");
            if (s.$$parserName = e, s.$parsers.push(function(e) {
                    if (s.$isEmpty(e)) return null;
                    if (t.test(e)) {
                        var r = n(e, f);
                        return h && (r = ee(r, h)), r
                    }
                    return void 0
                }), s.$formatters.push(function(e) {
                    if (e && !x(e)) throw es("datefmt", "Expected `{0}` to be a date", e);
                    return u(e) ? (f = e, f && h && (f = ee(f, h, !0)), d("date")(e, r, h)) : (f = null, "")
                }), E(a.min) || a.ngMin) {
                var p;
                s.$validators.min = function(e) {
                    return !u(e) || b(p) || n(e) >= p
                }, a.$observe("min", function(e) {
                    p = m(e), s.$validate()
                })
            }
            if (E(a.max) || a.ngMax) {
                var g;
                s.$validators.max = function(e) {
                    return !u(e) || b(g) || n(e) <= g
                }, a.$observe("max", function(e) {
                    g = m(e), s.$validate()
                })
            }
        }
    }

    function Hr(e, t, n, r) {
        var i = t[0],
            o = r.$$hasNativeValidators = y(i.validity);
        o && r.$parsers.push(function(e) {
            var n = t.prop(ti) || {};
            return n.badInput || n.typeMismatch ? void 0 : e
        })
    }

    function Ir(e) {
        e.$$parserName = "number", e.$parsers.push(function(t) {
            return e.$isEmpty(t) ? null : $a.test(t) ? parseFloat(t) : void 0
        }), e.$formatters.push(function(t) {
            if (!e.$isEmpty(t)) {
                if (!w(t)) throw es("numfmt", "Expected `{0}` to be a number", t);
                t = t.toString()
            }
            return t
        })
    }

    function Rr(e) {
        return E(e) && !w(e) && (e = parseFloat(e)), bi(e) ? void 0 : e
    }

    function Pr(e) {
        return (0 | e) === e
    }

    function Lr(e) {
        var t = e.toString(),
            n = t.indexOf(".");
        if (-1 === n) {
            if (e > -1 && 1 > e) {
                var r = /e-(\d+)$/.exec(t);
                if (r) return Number(r[1])
            }
            return 0
        }
        return t.length - n - 1
    }

    function Vr(e, t, n) {
        var r = Number(e),
            i = !Pr(r),
            o = !Pr(t),
            a = !Pr(n);
        if (i || o || a) {
            var s = i ? Lr(r) : 0,
                c = o ? Lr(t) : 0,
                l = a ? Lr(n) : 0,
                d = Math.max(s, c, l),
                u = Math.pow(10, d);
            r *= u, t *= u, n *= u, i && (r = Math.round(r)), o && (t = Math.round(t)), a && (n = Math.round(n))
        }
        return (r - t) % n === 0
    }

    function jr(e, t, n, r, i, o) {
        Hr(e, t, n, r), Ir(r), Nr(e, t, n, r, i, o);
        var a, s;
        if ((E(n.min) || n.ngMin) && (r.$validators.min = function(e) {
                return r.$isEmpty(e) || b(a) || e >= a
            }, n.$observe("min", function(e) {
                a = Rr(e), r.$validate()
            })), (E(n.max) || n.ngMax) && (r.$validators.max = function(e) {
                return r.$isEmpty(e) || b(s) || s >= e
            }, n.$observe("max", function(e) {
                s = Rr(e), r.$validate()
            })), E(n.step) || n.ngStep) {
            var c;
            r.$validators.step = function(e, t) {
                return r.$isEmpty(t) || b(c) || Vr(t, a || 0, c)
            }, n.$observe("step", function(e) {
                c = Rr(e), r.$validate()
            })
        }
    }

    function Fr(e, t, n, r, i, o) {
        function a(e, r) {
            t.attr(e, n[e]), n.$observe(e, r)
        }

        function s(e) {
            if (u = Rr(e), !bi(r.$modelValue))
                if (d) {
                    var n = t.val();
                    u > n && (n = u, t.val(n)), r.$setViewValue(n)
                } else r.$validate()
        }

        function c(e) {
            if (m = Rr(e), !bi(r.$modelValue))
                if (d) {
                    var n = t.val();
                    n > m && (t.val(m), n = u > m ? u : m), r.$setViewValue(n)
                } else r.$validate()
        }

        function l(e) {
            f = Rr(e), bi(r.$modelValue) || (d && r.$viewValue !== t.val() ? r.$setViewValue(t.val()) : r.$validate())
        }
        Hr(e, t, n, r), Ir(r), Nr(e, t, n, r, i, o);
        var d = r.$$hasNativeValidators && "range" === t[0].type,
            u = d ? 0 : void 0,
            m = d ? 100 : void 0,
            f = d ? 1 : void 0,
            h = t[0].validity,
            p = E(n.min),
            g = E(n.max),
            v = E(n.step),
            $ = r.$render;
        r.$render = d && E(h.rangeUnderflow) && E(h.rangeOverflow) ? function() {
            $(), r.$setViewValue(t.val())
        } : $, p && (r.$validators.min = d ? function() {
            return !0
        } : function(e, t) {
            return r.$isEmpty(t) || b(u) || t >= u
        }, a("min", s)), g && (r.$validators.max = d ? function() {
            return !0
        } : function(e, t) {
            return r.$isEmpty(t) || b(m) || m >= t
        }, a("max", c)), v && (r.$validators.step = d ? function() {
            return !h.stepMismatch
        } : function(e, t) {
            return r.$isEmpty(t) || b(f) || Vr(t, u || 0, f)
        }, a("step", l))
    }

    function qr(e, t, n, r, i, o) {
        Nr(e, t, n, r, i, o), Tr(r), r.$$parserName = "url", r.$validators.url = function(e, t) {
            var n = e || t;
            return r.$isEmpty(n) || ga.test(n)
        }
    }

    function Br(e, t, n, r, i, o) {
        Nr(e, t, n, r, i, o), Tr(r), r.$$parserName = "email", r.$validators.email = function(e, t) {
            var n = e || t;
            return r.$isEmpty(n) || va.test(n)
        }
    }

    function Ur(e, t, n, r) {
        var i = !n.ngTrim || "false" !== Mi(n.ngTrim);
        b(n.name) && t.attr("name", c());
        var o = function(e) {
            var o;
            t[0].checked && (o = n.value, i && (o = Mi(o)), r.$setViewValue(o, e && e.type))
        };
        t.on("click", o), r.$render = function() {
            var e = n.value;
            i && (e = Mi(e)), t[0].checked = e === r.$viewValue
        }, n.$observe("value", r.$render)
    }

    function zr(e, t, n, r, i) {
        var o;
        if (E(r)) {
            if (o = e(r), !o.constant) throw es("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
            return o(t)
        }
        return i
    }

    function Wr(e, t, n, r, i, o, a, s) {
        var c = zr(s, e, "ngTrueValue", n.ngTrueValue, !0),
            l = zr(s, e, "ngFalseValue", n.ngFalseValue, !1),
            d = function(e) {
                r.$setViewValue(t[0].checked, e && e.type)
            };
        t.on("click", d), r.$render = function() {
            t[0].checked = r.$viewValue
        }, r.$isEmpty = function(e) {
            return e === !1
        }, r.$formatters.push(function(e) {
            return z(e, c)
        }), r.$parsers.push(function(e) {
            return e ? c : l
        })
    }

    function Yr(e, t) {
        function n(e, t) {
            if (!e || !e.length) return [];
            if (!t || !t.length) return e;
            var n = [];
            e: for (var r = 0; r < e.length; r++) {
                for (var i = e[r], o = 0; o < t.length; o++)
                    if (i === t[o]) continue e;
                n.push(i)
            }
            return n
        }

        function r(e) {
            return e && e.split(" ")
        }

        function i(e) {
            var t = e;
            return Ei(e) ? t = e.map(i).join(" ") : y(e) && (t = Object.keys(e).filter(function(t) {
                return e[t]
            }).join(" ")), t
        }

        function a(e) {
            var t = e;
            if (Ei(e)) t = e.map(a);
            else if (y(e)) {
                var n = !1;
                t = Object.keys(e).filter(function(t) {
                    var r = e[t];
                    return !n && b(r) && (n = !0), r
                }), n && t.push(void 0)
            }
            return t
        }
        e = "ngClass" + e;
        var s;
        return ["$parse", function(c) {
            return {
                restrict: "AC",
                link: function(l, d, u) {
                    function m(e) {
                        e = p(r(e), 1), u.$addClass(e)
                    }

                    function f(e) {
                        e = p(r(e), -1), u.$removeClass(e)
                    }

                    function h(e, t) {
                        var i = r(e),
                            o = r(t),
                            a = n(i, o),
                            s = n(o, i),
                            c = p(a, -1),
                            l = p(s, 1);
                        u.$addClass(l), u.$removeClass(c)
                    }

                    function p(e, t) {
                        var n = [];
                        return o(e, function(e) {
                            (t > 0 || x[e]) && (x[e] = (x[e] || 0) + t, x[e] === +(t > 0) && n.push(e))
                        }), n.join(" ")
                    }

                    function g(e) {
                        e === t ? m(b) : f(b), A = e
                    }

                    function v(e) {
                        var t = i(e);
                        t !== b && $(t)
                    }

                    function $(e) {
                        A === t && h(b, e), b = e
                    }
                    var b, E = u[e].trim(),
                        y = ":" === E.charAt(0) && ":" === E.charAt(1),
                        M = y ? a : i,
                        C = c(E, M),
                        w = y ? v : $,
                        x = d.data("$classCounts"),
                        A = !0;
                    x || (x = Ee(), d.data("$classCounts", x)), "ngClass" !== e && (s || (s = c("$index", function(e) {
                        return 1 & e
                    })), l.$watch(s, g)), l.$watch(C, w, y)
                }
            }
        }]
    }

    function Kr(e, t, n, r, i, o, a, s, c) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = c(n.name || "", !1)(e), this.$$parentForm = la, this.$options = ts, this.$$updateEvents = "", this.$$updateEventHandler = this.$$updateEventHandler.bind(this), this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$currentValidationRunId = 0, Object.defineProperty(this, "$$scope", {
            value: e
        }), this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, this.$$parse = i, this.$$q = s, this.$$exceptionHandler = t, xr(this), Gr(this)
    }

    function Gr(e) {
        e.$$scope.$watch(function(t) {
            var n = e.$$ngModelGet(t);
            return n === e.$modelValue || e.$modelValue !== e.$modelValue && n !== n || e.$$setModelValue(n), n
        })
    }

    function Xr(e) {
        this.$$options = e
    }

    function Jr(e, t) {
        o(t, function(t, n) {
            E(e[n]) || (e[n] = t)
        })
    }

    function Zr(e, t) {
        e.prop("selected", t), e.attr("selected", t)
    }
    var Qr = {
            objectMaxDepth: 5
        },
        ei = /^\/(.+)\/([a-z]*)$/,
        ti = "validity",
        ni = Object.prototype.hasOwnProperty,
        ri = function(e) {
            return C(e) ? e.toLowerCase() : e
        },
        ii = function(e) {
            return C(e) ? e.toUpperCase() : e
        },
        oi = function(e) {
            return C(e) ? e.replace(/[A-Z]/g, function(e) {
                return String.fromCharCode(32 | e.charCodeAt(0))
            }) : e
        },
        ai = function(e) {
            return C(e) ? e.replace(/[a-z]/g, function(e) {
                return String.fromCharCode(-33 & e.charCodeAt(0))
            }) : e
        };
    "i" !== "I".toLowerCase() && (ri = oi, ii = ai);
    var si, ci, li, di, ui = [].slice,
        mi = [].splice,
        fi = [].push,
        hi = Object.prototype.toString,
        pi = Object.getPrototypeOf,
        gi = r("ng"),
        vi = e.angular || (e.angular = {}),
        $i = 0;
    si = e.document.documentMode;
    var bi = Number.isNaN || function(e) {
        return e !== e
    };
    p.$inject = [], g.$inject = [];
    var Ei = Array.isArray,
        yi = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
        Mi = function(e) {
            return C(e) ? e.trim() : e
        },
        Ci = function(e) {
            return e.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        wi = function() {
            function t() {
                try {
                    return new Function(""), !1
                } catch (e) {
                    return !0
                }
            }
            if (!E(wi.rules)) {
                var n = e.document.querySelector("[ng-csp]") || e.document.querySelector("[data-ng-csp]");
                if (n) {
                    var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
                    wi.rules = {
                        noUnsafeEval: !r || -1 !== r.indexOf("no-unsafe-eval"),
                        noInlineStyle: !r || -1 !== r.indexOf("no-inline-style")
                    }
                } else wi.rules = {
                    noUnsafeEval: t(),
                    noInlineStyle: !1
                }
            }
            return wi.rules
        },
        xi = function() {
            if (E(xi.name_)) return xi.name_;
            var t, n, r, i, o = ki.length;
            for (n = 0; o > n; ++n)
                if (r = ki[n], t = e.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                    i = t.getAttribute(r + "jq");
                    break
                }
            return xi.name_ = i
        },
        Ai = /:/g,
        ki = ["ng-", "data-ng-", "ng:", "x-ng-"],
        Ti = ce(e.document),
        Si = /[A-Z]/g,
        Ni = !1,
        Di = 1,
        _i = 2,
        Oi = 3,
        Hi = 8,
        Ii = 9,
        Ri = 11,
        Pi = {
            full: "1.6.9",
            major: 1,
            minor: 6,
            dot: 9,
            codeName: "fiery-basilisk"
        };
    Pe.expando = "ng339";
    var Li = Pe.cache = {},
        Vi = 1;
    Pe._data = function(e) {
        return this.cache[e[this.expando]] || {}
    };
    var ji = /-([a-z])/g,
        Fi = /^-ms-/,
        qi = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        Bi = r("jqLite"),
        Ui = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        zi = /<|&#?\w+;/,
        Wi = /<([\w:-]+)/,
        Yi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Ki = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ki.optgroup = Ki.option, Ki.tbody = Ki.tfoot = Ki.colgroup = Ki.caption = Ki.thead, Ki.th = Ki.td;
    var Gi = e.Node.prototype.contains || function(e) {
            return !!(16 & this.compareDocumentPosition(e))
        },
        Xi = Pe.prototype = {
            ready: Qe,
            toString: function() {
                var e = [];
                return o(this, function(t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            },
            eq: function(e) {
                return ci(e >= 0 ? this[e] : this[this.length + e])
            },
            length: 0,
            push: fi,
            sort: [].sort,
            splice: [].splice
        },
        Ji = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
        Ji[ri(e)] = e
    });
    var Zi = {};
    o("input,select,option,textarea,button,form,details".split(","), function(e) {
        Zi[e] = !0
    });
    var Qi = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern",
        ngStep: "step"
    };
    o({
        data: Be,
        removeData: Fe,
        hasData: Oe,
        cleanData: function(e) {
            for (var t = 0, n = e.length; n > t; t++) Fe(e[t])
        }
    }, function(e, t) {
        Pe[t] = e
    }), o({
        data: Be,
        inheritedData: Ge,
        scope: function(e) {
            return ci.data(e, "$scope") || Ge(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function(e) {
            return ci.data(e, "$isolateScope") || ci.data(e, "$isolateScopeNoTemplate")
        },
        controller: Ke,
        injector: function(e) {
            return Ge(e, "$injector")
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t)
        },
        hasClass: Ue,
        css: function(e, t, n) {
            return t = Te(t), E(n) ? void(e.style[t] = n) : e.style[t]
        },
        attr: function(e, t, n) {
            var r, i = e.nodeType;
            if (i !== Oi && i !== _i && i !== Hi && e.getAttribute) {
                var o = ri(t),
                    a = Ji[o];
                return E(n) ? void(null === n || n === !1 && a ? e.removeAttribute(t) : e.setAttribute(t, a ? o : n)) : (r = e.getAttribute(t), a && null !== r && (r = o), null === r ? void 0 : r)
            }
        },
        prop: function(e, t, n) {
            return E(n) ? void(e[t] = n) : e[t]
        },
        text: function() {
            function e(e, t) {
                if (b(t)) {
                    var n = e.nodeType;
                    return n === Di || n === Oi ? e.textContent : ""
                }
                e.textContent = t
            }
            return e.$dv = "", e
        }(),
        val: function(e, t) {
            if (b(t)) {
                if (e.multiple && "select" === j(e)) {
                    var n = [];
                    return o(e.options, function(e) {
                        e.selected && n.push(e.value || e.text)
                    }), n
                }
                return e.value
            }
            e.value = t
        },
        html: function(e, t) {
            return b(t) ? e.innerHTML : (Ve(e, !0), void(e.innerHTML = t))
        },
        empty: Xe
    }, function(e, t) {
        Pe.prototype[t] = function(t, n) {
            var r, i, o = this.length;
            if (e !== Xe && b(2 === e.length && e !== Ue && e !== Ke ? t : n)) {
                if (y(t)) {
                    for (r = 0; o > r; r++)
                        if (e === Be) e(this[r], t);
                        else
                            for (i in t) e(this[r], i, t[i]);
                    return this
                }
                for (var a = e.$dv, s = b(a) ? Math.min(o, 1) : o, c = 0; s > c; c++) {
                    var l = e(this[c], t, n);
                    a = a ? a + l : l
                }
                return a
            }
            for (r = 0; o > r; r++) e(this[r], t, n);
            return this
        }
    }), o({
        removeData: Fe,
        on: function(e, t, n, r) {
            if (E(r)) throw Bi("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (_e(e)) {
                var i = qe(e, !0),
                    o = i.events,
                    a = i.handle;
                a || (a = i.handle = nt(e, o));
                for (var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t], c = s.length, l = function(t, r, i) {
                        var s = o[t];
                        s || (s = o[t] = [], s.specialHandlerWrapper = r, "$destroy" === t || i || e.addEventListener(t, a)), s.push(n)
                    }; c--;) t = s[c], qi[t] ? (l(qi[t], it), l(t, void 0, !0)) : l(t)
            }
        },
        off: je,
        one: function(e, t, n) {
            e = ci(e), e.on(t, function r() {
                e.off(t, n), e.off(t, r)
            }), e.on(t, n)
        },
        replaceWith: function(e, t) {
            var n, r = e.parentNode;
            Ve(e), o(new Pe(t), function(t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        },
        children: function(e) {
            var t = [];
            return o(e.childNodes, function(e) {
                e.nodeType === Di && t.push(e)
            }), t
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function(e, t) {
            var n = e.nodeType;
            if (n === Di || n === Ri) {
                t = new Pe(t);
                for (var r = 0, i = t.length; i > r; r++) {
                    var o = t[r];
                    e.appendChild(o)
                }
            }
        },
        prepend: function(e, t) {
            if (e.nodeType === Di) {
                var n = e.firstChild;
                o(new Pe(t), function(t) {
                    e.insertBefore(t, n)
                })
            }
        },
        wrap: function(e, t) {
            Re(e, ci(t).eq(0).clone()[0])
        },
        remove: Je,
        detach: function(e) {
            Je(e, !0)
        },
        after: function(e, t) {
            var n = e,
                r = e.parentNode;
            if (r) {
                t = new Pe(t);
                for (var i = 0, o = t.length; o > i; i++) {
                    var a = t[i];
                    r.insertBefore(a, n.nextSibling), n = a
                }
            }
        },
        addClass: We,
        removeClass: ze,
        toggleClass: function(e, t, n) {
            t && o(t.split(" "), function(t) {
                var r = n;
                b(r) && (r = !Ue(e, t)), (r ? We : ze)(e, t)
            })
        },
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== Ri ? t : null
        },
        next: function(e) {
            return e.nextElementSibling
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: Le,
        triggerHandler: function(e, t, n) {
            var r, i, a, s = t.type || t,
                c = qe(e),
                l = c && c.events,
                d = l && l[s];
            d && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: p,
                type: s,
                target: e
            }, t.type && (r = u(r, t)), i = Ce(d), a = n ? [r].concat(n) : [r], o(i, function(t) {
                r.isImmediatePropagationStopped() || t.apply(e, a)
            }))
        }
    }, function(e, t) {
        Pe.prototype[t] = function(t, n, r) {
            for (var i, o = 0, a = this.length; a > o; o++) b(i) ? (i = e(this[o], t, n, r), E(i) && (i = ci(i))) : Ye(i, e(this[o], t, n, r));
            return E(i) ? i : this
        }
    }), Pe.prototype.bind = Pe.prototype.on, Pe.prototype.unbind = Pe.prototype.off;
    var eo = Object.create(null);
    st.prototype = {
        _idx: function(e) {
            return e === this._lastKey ? this._lastIndex : (this._lastKey = e, this._lastIndex = this._keys.indexOf(e), this._lastIndex)
        },
        _transformKey: function(e) {
            return bi(e) ? eo : e
        },
        get: function(e) {
            e = this._transformKey(e);
            var t = this._idx(e);
            return -1 !== t ? this._values[t] : void 0
        },
        set: function(e, t) {
            e = this._transformKey(e);
            var n = this._idx(e); - 1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = e, this._values[n] = t
        },
        "delete": function(e) {
            e = this._transformKey(e);
            var t = this._idx(e);
            return -1 === t ? !1 : (this._keys.splice(t, 1), this._values.splice(t, 1), this._lastKey = 0 / 0, this._lastIndex = -1, !0)
        }
    };
    var to = st,
        no = [function() {
            this.$get = [function() {
                return to
            }]
        }],
        ro = /^([^(]+?)=>/,
        io = /^[^(]*\(\s*([^)]*)\)/m,
        oo = /,/,
        ao = /^\s*(_?)(\S+?)\1\s*$/,
        so = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        co = r("$injector");
    mt.$$annotate = ut;
    var lo = r("$animate"),
        uo = 1,
        mo = "ng-animate",
        fo = function() {
            this.$get = p
        },
        ho = function() {
            var e = new to,
                t = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
                function i(e, t, n) {
                    var r = !1;
                    return t && (t = C(t) ? t.split(" ") : Ei(t) ? t : [], o(t, function(t) {
                        t && (r = !0, e[t] = n)
                    })), r
                }

                function a() {
                    o(t, function(t) {
                        var n = e.get(t);
                        if (n) {
                            var r = gt(t.attr("class")),
                                i = "",
                                a = "";
                            o(n, function(e, t) {
                                var n = !!r[t];
                                e !== n && (e ? i += (i.length ? " " : "") + t : a += (a.length ? " " : "") + t)
                            }), o(t, function(e) {
                                i && We(e, i), a && ze(e, a)
                            }), e["delete"](t)
                        }
                    }), t.length = 0
                }

                function s(n, o, s) {
                    var c = e.get(n) || {},
                        l = i(c, o, !0),
                        d = i(c, s, !1);
                    (l || d) && (e.set(n, c), t.push(n), 1 === t.length && r.$$postDigest(a))
                }
                return {
                    enabled: p,
                    on: p,
                    off: p,
                    pin: p,
                    push: function(e, t, r, i) {
                        i && i(), r = r || {}, r.from && e.css(r.from), r.to && e.css(r.to), (r.addClass || r.removeClass) && s(e, r.addClass, r.removeClass);
                        var o = new n;
                        return o.complete(), o
                    }
                }
            }]
        },
        po = ["$provide", function(e) {
            var t = this,
                n = null,
                r = null;
            this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                if (n && "." !== n.charAt(0)) throw lo("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                var i = n + "-animation";
                t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
            }, this.customFilter = function(e) {
                return 1 === arguments.length && (r = k(e) ? e : null), r
            }, this.classNameFilter = function(e) {
                if (1 === arguments.length && (n = e instanceof RegExp ? e : null)) {
                    var t = new RegExp("[(\\s|\\/)]" + mo + "[(\\s|\\/)]");
                    if (t.test(n.toString())) throw n = null, lo("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', mo)
                }
                return n
            }, this.$get = ["$$animateQueue", function(e) {
                function t(e, t, n) {
                    if (n) {
                        var r = pt(n);
                        !r || r.parentNode || r.previousElementSibling || (n = null)
                    }
                    n ? n.after(e) : t.prepend(e)
                }
                return {
                    on: e.on,
                    off: e.off,
                    pin: e.pin,
                    enabled: e.enabled,
                    cancel: function(e) {
                        e.end && e.end()
                    },
                    enter: function(n, r, i, o) {
                        return r = r && ci(r), i = i && ci(i), r = r || i.parent(), t(n, r, i), e.push(n, "enter", vt(o))
                    },
                    move: function(n, r, i, o) {
                        return r = r && ci(r), i = i && ci(i), r = r || i.parent(), t(n, r, i), e.push(n, "move", vt(o))
                    },
                    leave: function(t, n) {
                        return e.push(t, "leave", vt(n), function() {
                            t.remove()
                        })
                    },
                    addClass: function(t, n, r) {
                        return r = vt(r), r.addClass = ht(r.addclass, n), e.push(t, "addClass", r)
                    },
                    removeClass: function(t, n, r) {
                        return r = vt(r), r.removeClass = ht(r.removeClass, n), e.push(t, "removeClass", r)
                    },
                    setClass: function(t, n, r, i) {
                        return i = vt(i), i.addClass = ht(i.addClass, n), i.removeClass = ht(i.removeClass, r), e.push(t, "setClass", i)
                    },
                    animate: function(t, n, r, i, o) {
                        return o = vt(o), o.from = o.from ? u(o.from, n) : n, o.to = o.to ? u(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = ht(o.tempClasses, i), e.push(t, "animate", o)
                    }
                }
            }]
        }],
        go = function() {
            this.$get = ["$$rAF", function(e) {
                function t(t) {
                    n.push(t), n.length > 1 || e(function() {
                        for (var e = 0; e < n.length; e++) n[e]();
                        n = []
                    })
                }
                var n = [];
                return function() {
                    var e = !1;
                    return t(function() {
                            e = !0
                        }),
                        function(n) {
                            e ? n() : t(n)
                        }
                }
            }]
        },
        vo = function() {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function(e, t, n, r, i) {
                function a(e) {
                    this.setHost(e);
                    var t = n(),
                        o = function(e) {
                            i(e, 0, !1)
                        };
                    this._doneCallbacks = [], this._tick = function(e) {
                        r() ? o(e) : t(e)
                    }, this._state = 0
                }
                var s = 0,
                    c = 1,
                    l = 2;
                return a.chain = function(e, t) {
                    function n() {
                        return r === e.length ? void t(!0) : void e[r](function(e) {
                            return e === !1 ? void t(!1) : (r++, void n())
                        })
                    }
                    var r = 0;
                    n()
                }, a.all = function(e, t) {
                    function n(n) {
                        i = i && n, ++r === e.length && t(i)
                    }
                    var r = 0,
                        i = !0;
                    o(e, function(e) {
                        e.done(n)
                    })
                }, a.prototype = {
                    setHost: function(e) {
                        this.host = e || {}
                    },
                    done: function(e) {
                        this._state === l ? e() : this._doneCallbacks.push(e)
                    },
                    progress: p,
                    getPromise: function() {
                        if (!this.promise) {
                            var t = this;
                            this.promise = e(function(e, n) {
                                t.done(function(t) {
                                    t === !1 ? n() : e()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function(e, t) {
                        return this.getPromise().then(e, t)
                    },
                    "catch": function(e) {
                        return this.getPromise()["catch"](e)
                    },
                    "finally": function(e) {
                        return this.getPromise()["finally"](e)
                    },
                    pause: function() {
                        this.host.pause && this.host.pause()
                    },
                    resume: function() {
                        this.host.resume && this.host.resume()
                    },
                    end: function() {
                        this.host.end && this.host.end(), this._resolve(!0)
                    },
                    cancel: function() {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    },
                    complete: function(e) {
                        var t = this;
                        t._state === s && (t._state = c, t._tick(function() {
                            t._resolve(e)
                        }))
                    },
                    _resolve: function(e) {
                        this._state !== l && (o(this._doneCallbacks, function(t) {
                            t(e)
                        }), this._doneCallbacks.length = 0, this._state = l)
                    }
                }, a
            }]
        },
        $o = function() {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(e, t, n) {
                return function(t, r) {
                    function i() {
                        return e(function() {
                            o(), s || c.complete(), s = !0
                        }), c
                    }

                    function o() {
                        a.addClass && (t.addClass(a.addClass), a.addClass = null), a.removeClass && (t.removeClass(a.removeClass), a.removeClass = null), a.to && (t.css(a.to), a.to = null)
                    }
                    var a = r || {};
                    a.$$prepared || (a = B(a)), a.cleanupStyles && (a.from = a.to = null), a.from && (t.css(a.from), a.from = null);
                    var s, c = new n;
                    return {
                        start: i,
                        end: i
                    }
                }
            }]
        },
        bo = r("$compile"),
        Eo = new Mt;
    Ct.$inject = ["$provide", "$$sanitizeUriProvider"], wt.prototype.isFirstChange = function() {
        return this.previousValue === Eo
    };
    var yo = /^((?:x|data)[:\-_])/i,
        Mo = /[:\-_]+(.)/g,
        Co = r("$controller"),
        wo = /^(\S+)(\s+as\s+([\w$]+))?$/,
        xo = function() {
            this.$get = ["$document", function(e) {
                return function(t) {
                    return t ? !t.nodeType && t instanceof ci && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                }
            }]
        },
        Ao = "application/json",
        ko = {
            "Content-Type": Ao + ";charset=utf-8"
        },
        To = /^\[|^\{(?!\{)/,
        So = {
            "[": /]$/,
            "{": /}$/
        },
        No = /^\)]\}',?\n/,
        Do = r("$http"),
        _o = vi.$interpolateMinErr = r("$interpolate");
    _o.throwNoconcat = function(e) {
        throw _o("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
    }, _o.interr = function(e, t) {
        return _o("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
    };
    var Oo = function() {
            this.$get = function() {
                function e(e) {
                    var t = function(e) {
                        t.data = e, t.called = !0
                    };
                    return t.id = e, t
                }
                var t = vi.callbacks,
                    n = {};
                return {
                    createCallback: function(r) {
                        var i = "_" + (t.$$counter++).toString(36),
                            o = "angular.callbacks." + i,
                            a = e(i);
                        return n[o] = t[i] = a, o
                    },
                    wasCalled: function(e) {
                        return n[e].called
                    },
                    getResponse: function(e) {
                        return n[e].data
                    },
                    removeCallback: function(e) {
                        var r = n[e];
                        delete t[r.id], delete n[e]
                    }
                }
            }
        },
        Ho = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
        Io = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Ro = r("$location"),
        Po = /^\s*[\\\/]{2,}/,
        Lo = {
            $$absUrl: "",
            $$html5: !1,
            $$replace: !1,
            absUrl: cn("$$absUrl"),
            url: function(e) {
                if (b(e)) return this.$$url;
                var t = Ho.exec(e);
                return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
            },
            protocol: cn("$$protocol"),
            host: cn("$$host"),
            port: cn("$$port"),
            path: ln("$$path", function(e) {
                return e = null !== e ? e.toString() : "", "/" === e.charAt(0) ? e : "/" + e
            }),
            search: function(e, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (C(e) || w(e)) e = e.toString(), this.$$search = re(e);
                        else {
                            if (!y(e)) throw Ro("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            e = B(e, {}), o(e, function(t, n) {
                                null == t && delete e[n]
                            }), this.$$search = e
                        }
                        break;
                    default:
                        b(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                }
                return this.$$compose(), this
            },
            hash: ln("$$hash", function(e) {
                return null !== e ? e.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    o([sn, an, on], function(e) {
        e.prototype = Object.create(Lo), e.prototype.state = function(t) {
            if (!arguments.length) return this.$$state;
            if (e !== on || !this.$$html5) throw Ro("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = b(t) ? null : t, this.$$urlUpdatedByLocation = !0, this
        }
    });
    var Vo = r("$parse"),
        jo = {}.constructor.prototype.valueOf,
        Fo = Ee();
    o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
        Fo[e] = !0
    });
    var qo = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "",
            "'": "'",
            '"': '"'
        },
        Bo = function(e) {
            this.options = e
        };
    Bo.prototype = {
        constructor: Bo,
        lex: function(e) {
            for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if ('"' === t || "'" === t) this.readString(t);
                else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
                else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: t
                }), this.index++;
                else if (this.isWhitespace(t)) this.index++;
                else {
                    var n = t + this.peek(),
                        r = n + this.peek(2),
                        i = Fo[t],
                        o = Fo[n],
                        a = Fo[r];
                    if (i || o || a) {
                        var s = a ? r : o ? n : t;
                        this.tokens.push({
                            index: this.index,
                            text: s,
                            operator: !0
                        }), this.index += s.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },
        is: function(e, t) {
            return -1 !== t.indexOf(e)
        },
        peek: function(e) {
            var t = e || 1;
            return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
        },
        isNumber: function(e) {
            return e >= "0" && "9" >= e && "string" == typeof e
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "	" === e || "\n" === e || "" === e || " " === e
        },
        isIdentifierStart: function(e) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
        },
        isValidIdentifierStart: function(e) {
            return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
        },
        isIdentifierContinue: function(e) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
        },
        isValidIdentifierContinue: function(e, t) {
            return this.isValidIdentifierStart(e, t) || this.isNumber(e)
        },
        codePointAt: function(e) {
            return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
        },
        peekMultichar: function() {
            var e = this.text.charAt(this.index),
                t = this.peek();
            if (!t) return e;
            var n = e.charCodeAt(0),
                r = t.charCodeAt(0);
            return n >= 55296 && 56319 >= n && r >= 56320 && 57343 >= r ? e + t : e
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function(e, t, n) {
            n = n || this.index;
            var r = E(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
            throw Vo("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = ri(this.text.charAt(this.index));
                if ("." === n || this.isNumber(n)) e += n;
                else {
                    var r = this.peek();
                    if ("e" === n && this.isExpOperator(r)) e += n;
                    else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === e.charAt(e.length - 1)) e += n;
                    else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: t,
                text: e,
                constant: !0,
                value: Number(e)
            })
        },
        readIdent: function() {
            var e = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var t = this.peekMultichar();
                if (!this.isIdentifierContinue(t)) break;
                this.index += t.length
            }
            this.tokens.push({
                index: e,
                text: this.text.slice(e, this.index),
                identifier: !0
            })
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                if (r += o, i) {
                    if ("u" === o) {
                        var a = this.text.substring(this.index + 1, this.index + 5);
                        a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                    } else {
                        var s = qo[o];
                        n += s || o
                    }
                    i = !1
                } else if ("\\" === o) i = !0;
                else {
                    if (o === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: r,
                        constant: !0,
                        value: n
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var Uo = function(e, t) {
        this.lexer = e, this.options = t
    };
    Uo.Program = "Program", Uo.ExpressionStatement = "ExpressionStatement", Uo.AssignmentExpression = "AssignmentExpression", Uo.ConditionalExpression = "ConditionalExpression", Uo.LogicalExpression = "LogicalExpression", Uo.BinaryExpression = "BinaryExpression", Uo.UnaryExpression = "UnaryExpression", Uo.CallExpression = "CallExpression", Uo.MemberExpression = "MemberExpression", Uo.Identifier = "Identifier", Uo.Literal = "Literal", Uo.ArrayExpression = "ArrayExpression", Uo.Property = "Property", Uo.ObjectExpression = "ObjectExpression", Uo.ThisExpression = "ThisExpression", Uo.LocalsExpression = "LocalsExpression", Uo.NGValueParameter = "NGValueParameter", Uo.prototype = {
        ast: function(e) {
            this.text = e, this.tokens = this.lexer.lex(e);
            var t = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
        },
        program: function() {
            for (var e = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
                    type: Uo.Program,
                    body: e
                }
        },
        expressionStatement: function() {
            return {
                type: Uo.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function() {
            for (var e = this.expression(); this.expect("|");) e = this.filter(e);
            return e
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var e = this.ternary();
            if (this.expect("=")) {
                if (!bn(e)) throw Vo("lval", "Trying to assign a value to a non l-value");
                e = {
                    type: Uo.AssignmentExpression,
                    left: e,
                    right: this.assignment(),
                    operator: "="
                }
            }
            return e
        },
        ternary: function() {
            var e, t, n = this.logicalOR();
            return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
                type: Uo.ConditionalExpression,
                test: n,
                alternate: e,
                consequent: t
            }) : n
        },
        logicalOR: function() {
            for (var e = this.logicalAND(); this.expect("||");) e = {
                type: Uo.LogicalExpression,
                operator: "||",
                left: e,
                right: this.logicalAND()
            };
            return e
        },
        logicalAND: function() {
            for (var e = this.equality(); this.expect("&&");) e = {
                type: Uo.LogicalExpression,
                operator: "&&",
                left: e,
                right: this.equality()
            };
            return e
        },
        equality: function() {
            for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
                type: Uo.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.relational()
            };
            return t
        },
        relational: function() {
            for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
                type: Uo.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.additive()
            };
            return t
        },
        additive: function() {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
                type: Uo.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.multiplicative()
            };
            return t
        },
        multiplicative: function() {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
                type: Uo.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.unary()
            };
            return t
        },
        unary: function() {
            var e;
            return (e = this.expect("+", "-", "!")) ? {
                type: Uo.UnaryExpression,
                operator: e.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function() {
            var e;
            this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = B(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
                type: Uo.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var t; t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
                type: Uo.CallExpression,
                callee: e,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === t.text ? (e = {
                type: Uo.MemberExpression,
                object: e,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === t.text ? e = {
                type: Uo.MemberExpression,
                object: e,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return e
        },
        filter: function(e) {
            for (var t = [e], n = {
                    type: Uo.CallExpression,
                    callee: this.identifier(),
                    arguments: t,
                    filter: !0
                }; this.expect(":");) t.push(this.expression());
            return n
        },
        parseArguments: function() {
            var e = [];
            if (")" !== this.peekToken().text)
                do e.push(this.filterChain()); while (this.expect(","));
            return e
        },
        identifier: function() {
            var e = this.consume();
            return e.identifier || this.throwError("is not a valid identifier", e), {
                type: Uo.Identifier,
                name: e.text
            }
        },
        constant: function() {
            return {
                type: Uo.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function() {
            var e = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    e.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: Uo.ArrayExpression,
                elements: e
            }
        },
        object: function() {
            var e, t = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    e = {
                        type: Uo.Property,
                        kind: "init"
                    }, this.peek().constant ? (e.key = this.constant(), e.computed = !1, this.consume(":"), e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(), e.computed = !1, this.peek(":") ? (this.consume(":"), e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["), e.key = this.expression(), this.consume("]"), e.computed = !0, this.consume(":"), e.value = this.expression()) : this.throwError("invalid key", this.peek()), t.push(e)
                } while (this.expect(","));
            return this.consume("}"), {
                type: Uo.ObjectExpression,
                properties: t
            }
        },
        throwError: function(e, t) {
            throw Vo("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        consume: function(e) {
            if (0 === this.tokens.length) throw Vo("ueoe", "Unexpected end of expression: {0}", this.text);
            var t = this.expect(e);
            return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Vo("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(e, t, n, r) {
            return this.peekAhead(0, e, t, n, r)
        },
        peekAhead: function(e, t, n, r, i) {
            if (this.tokens.length > e) {
                var o = this.tokens[e],
                    a = o.text;
                if (a === t || a === n || a === r || a === i || !t && !n && !r && !i) return o
            }
            return !1
        },
        expect: function(e, t, n, r) {
            var i = this.peek(e, t, n, r);
            return i ? (this.tokens.shift(), i) : !1
        },
        selfReferential: {
            "this": {
                type: Uo.ThisExpression
            },
            $locals: {
                type: Uo.LocalsExpression
            }
        }
    };
    var zo = 1,
        Wo = 2;
    Cn.prototype = {
        compile: function(e) {
            var t = this;
            this.state = {
                nextId: 0,
                filters: {},
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, vn(e, t.$filter);
            var n, r = "";
            if (this.stage = "assign", n = En(e)) {
                this.state.computing = "assign";
                var i = this.nextId();
                this.recurse(n, i), this.return_(i), r = "fn.assign=" + this.generateFunction("assign", "s,v,l")
            }
            var a = $n(e.body);
            t.stage = "inputs", o(a, function(e, n) {
                var r = "fn" + n;
                t.state[r] = {
                    vars: [],
                    body: [],
                    own: {}
                }, t.state.computing = r;
                var i = t.nextId();
                t.recurse(e, i), t.return_(i), t.state.inputs.push({
                    name: r,
                    isPure: e.isPure
                }), e.watchId = n
            }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
            var s = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + r + this.watchFns() + "return fn;",
                c = new Function("$filter", "getStringValue", "ifDefined", "plus", s)(this.$filter, mn, fn, hn);
            return this.state = this.stage = void 0, c
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var e = [],
                t = this.state.inputs,
                n = this;
            return o(t, function(t) {
                e.push("var " + t.name + "=" + n.generateFunction(t.name, "s")), t.isPure && e.push(t.name, ".isPure=" + JSON.stringify(t.isPure) + ";")
            }), t.length && e.push("fn.inputs=[" + t.map(function(e) {
                return e.name
            }).join(",") + "];"), e.join("")
        },
        generateFunction: function(e, t) {
            return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
        },
        filterPrefix: function() {
            var e = [],
                t = this;
            return o(this.state.filters, function(n, r) {
                e.push(n + "=$filter(" + t.escape(r) + ")")
            }), e.length ? "var " + e.join(",") + ";" : ""
        },
        varsPrefix: function(e) {
            return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
        },
        body: function(e) {
            return this.state[e].body.join("")
        },
        recurse: function(e, t, n, r, i, a) {
            var s, c, l, d, u, m = this;
            if (r = r || p, !a && E(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, r, i, !0));
            switch (e.type) {
                case Uo.Program:
                    o(e.body, function(t, n) {
                        m.recurse(t.expression, void 0, void 0, function(e) {
                            c = e
                        }), n !== e.body.length - 1 ? m.current().body.push(c, ";") : m.return_(c)
                    });
                    break;
                case Uo.Literal:
                    d = this.escape(e.value), this.assign(t, d), r(t || d);
                    break;
                case Uo.UnaryExpression:
                    this.recurse(e.argument, void 0, void 0, function(e) {
                        c = e
                    }), d = e.operator + "(" + this.ifDefined(c, 0) + ")", this.assign(t, d), r(d);
                    break;
                case Uo.BinaryExpression:
                    this.recurse(e.left, void 0, void 0, function(e) {
                        s = e
                    }), this.recurse(e.right, void 0, void 0, function(e) {
                        c = e
                    }), d = "+" === e.operator ? this.plus(s, c) : "-" === e.operator ? this.ifDefined(s, 0) + e.operator + this.ifDefined(c, 0) : "(" + s + ")" + e.operator + "(" + c + ")", this.assign(t, d), r(d);
                    break;
                case Uo.LogicalExpression:
                    t = t || this.nextId(), m.recurse(e.left, t), m.if_("&&" === e.operator ? t : m.not(t), m.lazyRecurse(e.right, t)), r(t);
                    break;
                case Uo.ConditionalExpression:
                    t = t || this.nextId(), m.recurse(e.test, t), m.if_(t, m.lazyRecurse(e.alternate, t), m.lazyRecurse(e.consequent, t)), r(t);
                    break;
                case Uo.Identifier:
                    t = t || this.nextId(), n && (n.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), n.computed = !1, n.name = e.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", e.name)), function() {
                        m.if_("inputs" === m.stage || "s", function() {
                            i && 1 !== i && m.if_(m.isNull(m.nonComputedMember("s", e.name)), m.lazyAssign(m.nonComputedMember("s", e.name), "{}")), m.assign(t, m.nonComputedMember("s", e.name))
                        })
                    }, t && m.lazyAssign(t, m.nonComputedMember("l", e.name))), r(t);
                    break;
                case Uo.MemberExpression:
                    s = n && (n.context = this.nextId()) || this.nextId(), t = t || this.nextId(), m.recurse(e.object, s, void 0, function() {
                        m.if_(m.notNull(s), function() {
                            e.computed ? (c = m.nextId(), m.recurse(e.property, c), m.getStringValue(c), i && 1 !== i && m.if_(m.not(m.computedMember(s, c)), m.lazyAssign(m.computedMember(s, c), "{}")), d = m.computedMember(s, c), m.assign(t, d), n && (n.computed = !0, n.name = c)) : (i && 1 !== i && m.if_(m.isNull(m.nonComputedMember(s, e.property.name)), m.lazyAssign(m.nonComputedMember(s, e.property.name), "{}")), d = m.nonComputedMember(s, e.property.name), m.assign(t, d), n && (n.computed = !1, n.name = e.property.name))
                        }, function() {
                            m.assign(t, "undefined")
                        }), r(t)
                    }, !!i);
                    break;
                case Uo.CallExpression:
                    t = t || this.nextId(), e.filter ? (c = m.filter(e.callee.name), l = [], o(e.arguments, function(e) {
                        var t = m.nextId();
                        m.recurse(e, t), l.push(t)
                    }), d = c + "(" + l.join(",") + ")", m.assign(t, d), r(t)) : (c = m.nextId(), s = {}, l = [], m.recurse(e.callee, c, s, function() {
                        m.if_(m.notNull(c), function() {
                            o(e.arguments, function(t) {
                                m.recurse(t, e.constant ? void 0 : m.nextId(), void 0, function(e) {
                                    l.push(e)
                                })
                            }), d = s.name ? m.member(s.context, s.name, s.computed) + "(" + l.join(",") + ")" : c + "(" + l.join(",") + ")", m.assign(t, d)
                        }, function() {
                            m.assign(t, "undefined")
                        }), r(t)
                    }));
                    break;
                case Uo.AssignmentExpression:
                    c = this.nextId(), s = {}, this.recurse(e.left, void 0, s, function() {
                        m.if_(m.notNull(s.context), function() {
                            m.recurse(e.right, c), d = m.member(s.context, s.name, s.computed) + e.operator + c, m.assign(t, d), r(t || d)
                        })
                    }, 1);
                    break;
                case Uo.ArrayExpression:
                    l = [], o(e.elements, function(t) {
                        m.recurse(t, e.constant ? void 0 : m.nextId(), void 0, function(e) {
                            l.push(e)
                        })
                    }), d = "[" + l.join(",") + "]", this.assign(t, d), r(t || d);
                    break;
                case Uo.ObjectExpression:
                    l = [], u = !1, o(e.properties, function(e) {
                        e.computed && (u = !0)
                    }), u ? (t = t || this.nextId(), this.assign(t, "{}"), o(e.properties, function(e) {
                        e.computed ? (s = m.nextId(), m.recurse(e.key, s)) : s = e.key.type === Uo.Identifier ? e.key.name : "" + e.key.value, c = m.nextId(), m.recurse(e.value, c), m.assign(m.member(t, s, e.computed), c)
                    })) : (o(e.properties, function(t) {
                        m.recurse(t.value, e.constant ? void 0 : m.nextId(), void 0, function(e) {
                            l.push(m.escape(t.key.type === Uo.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
                        })
                    }), d = "{" + l.join(",") + "}", this.assign(t, d)), r(t || d);
                    break;
                case Uo.ThisExpression:
                    this.assign(t, "s"), r(t || "s");
                    break;
                case Uo.LocalsExpression:
                    this.assign(t, "l"), r(t || "l");
                    break;
                case Uo.NGValueParameter:
                    this.assign(t, "v"), r(t || "v")
            }
        },
        getHasOwnProperty: function(e, t) {
            var n = e + "." + t,
                r = this.current().own;
            return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
        },
        assign: function(e, t) {
            return e ? (this.current().body.push(e, "=", t, ";"), e) : void 0
        },
        filter: function(e) {
            return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
        },
        ifDefined: function(e, t) {
            return "ifDefined(" + e + "," + this.escape(t) + ")"
        },
        plus: function(e, t) {
            return "plus(" + e + "," + t + ")"
        },
        return_: function(e) {
            this.current().body.push("return ", e, ";")
        },
        if_: function(e, t, n) {
            if (e === !0) t();
            else {
                var r = this.current().body;
                r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
            }
        },
        not: function(e) {
            return "!(" + e + ")"
        },
        isNull: function(e) {
            return e + "==null"
        },
        notNull: function(e) {
            return e + "!=null"
        },
        nonComputedMember: function(e, t) {
            var n = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/,
                r = /[^$_a-zA-Z0-9]/g;
            return n.test(t) ? e + "." + t : e + '["' + t.replace(r, this.stringEscapeFn) + '"]'
        },
        computedMember: function(e, t) {
            return e + "[" + t + "]"
        },
        member: function(e, t, n) {
            return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
        },
        getStringValue: function(e) {
            this.assign(e, "getStringValue(" + e + ")")
        },
        lazyRecurse: function(e, t, n, r, i, o) {
            var a = this;
            return function() {
                a.recurse(e, t, n, r, i, o)
            }
        },
        lazyAssign: function(e, t) {
            var n = this;
            return function() {
                n.assign(e, t)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(e) {
            if (C(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (w(e)) return e.toString();
            if (e === !0) return "true";
            if (e === !1) return "false";
            if (null === e) return "null";
            if ("undefined" == typeof e) return "undefined";
            throw Vo("esc", "IMPOSSIBLE")
        },
        nextId: function(e, t) {
            var n = "v" + this.state.nextId++;
            return e || this.current().vars.push(n + (t ? "=" + t : "")), n
        },
        current: function() {
            return this.state[this.state.computing]
        }
    }, wn.prototype = {
        compile: function(e) {
            var t = this;
            vn(e, t.$filter);
            var n, r;
            (n = En(e)) && (r = this.recurse(n));
            var i, a = $n(e.body);
            a && (i = [], o(a, function(e, n) {
                var r = t.recurse(e);
                r.isPure = e.isPure, e.input = r, i.push(r), e.watchId = n
            }));
            var s = [];
            o(e.body, function(e) {
                s.push(t.recurse(e.expression))
            });
            var c = 0 === e.body.length ? p : 1 === e.body.length ? s[0] : function(e, t) {
                var n;
                return o(s, function(r) {
                    n = r(e, t)
                }), n
            };
            return r && (c.assign = function(e, t, n) {
                return r(e, n, t)
            }), i && (c.inputs = i), c
        },
        recurse: function(e, t, n) {
            var r, i, a, s = this;
            if (e.input) return this.inputs(e.input, e.watchId);
            switch (e.type) {
                case Uo.Literal:
                    return this.value(e.value, t);
                case Uo.UnaryExpression:
                    return i = this.recurse(e.argument), this["unary" + e.operator](i, t);
                case Uo.BinaryExpression:
                    return r = this.recurse(e.left), i = this.recurse(e.right), this["binary" + e.operator](r, i, t);
                case Uo.LogicalExpression:
                    return r = this.recurse(e.left), i = this.recurse(e.right), this["binary" + e.operator](r, i, t);
                case Uo.ConditionalExpression:
                    return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                case Uo.Identifier:
                    return s.identifier(e.name, t, n);
                case Uo.MemberExpression:
                    return r = this.recurse(e.object, !1, !!n), e.computed || (i = e.property.name), e.computed && (i = this.recurse(e.property)), e.computed ? this.computedMember(r, i, t, n) : this.nonComputedMember(r, i, t, n);
                case Uo.CallExpression:
                    return a = [], o(e.arguments, function(e) {
                        a.push(s.recurse(e))
                    }), e.filter && (i = this.$filter(e.callee.name)), e.filter || (i = this.recurse(e.callee, !0)), e.filter ? function(e, n, r, o) {
                        for (var s = [], c = 0; c < a.length; ++c) s.push(a[c](e, n, r, o));
                        var l = i.apply(void 0, s, o);
                        return t ? {
                            context: void 0,
                            name: void 0,
                            value: l
                        } : l
                    } : function(e, n, r, o) {
                        var s, c = i(e, n, r, o);
                        if (null != c.value) {
                            for (var l = [], d = 0; d < a.length; ++d) l.push(a[d](e, n, r, o));
                            s = c.value.apply(c.context, l)
                        }
                        return t ? {
                            value: s
                        } : s
                    };
                case Uo.AssignmentExpression:
                    return r = this.recurse(e.left, !0, 1), i = this.recurse(e.right),
                        function(e, n, o, a) {
                            var s = r(e, n, o, a),
                                c = i(e, n, o, a);
                            return s.context[s.name] = c, t ? {
                                value: c
                            } : c
                        };
                case Uo.ArrayExpression:
                    return a = [], o(e.elements, function(e) {
                            a.push(s.recurse(e))
                        }),
                        function(e, n, r, i) {
                            for (var o = [], s = 0; s < a.length; ++s) o.push(a[s](e, n, r, i));
                            return t ? {
                                value: o
                            } : o
                        };
                case Uo.ObjectExpression:
                    return a = [], o(e.properties, function(e) {
                            a.push(e.computed ? {
                                key: s.recurse(e.key),
                                computed: !0,
                                value: s.recurse(e.value)
                            } : {
                                key: e.key.type === Uo.Identifier ? e.key.name : "" + e.key.value,
                                computed: !1,
                                value: s.recurse(e.value)
                            })
                        }),
                        function(e, n, r, i) {
                            for (var o = {}, s = 0; s < a.length; ++s) a[s].computed ? o[a[s].key(e, n, r, i)] = a[s].value(e, n, r, i) : o[a[s].key] = a[s].value(e, n, r, i);
                            return t ? {
                                value: o
                            } : o
                        };
                case Uo.ThisExpression:
                    return function(e) {
                        return t ? {
                            value: e
                        } : e
                    };
                case Uo.LocalsExpression:
                    return function(e, n) {
                        return t ? {
                            value: n
                        } : n
                    };
                case Uo.NGValueParameter:
                    return function(e, n, r) {
                        return t ? {
                            value: r
                        } : r
                    }
            }
        },
        "unary+": function(e, t) {
            return function(n, r, i, o) {
                var a = e(n, r, i, o);
                return a = E(a) ? +a : 0, t ? {
                    value: a
                } : a
            }
        },
        "unary-": function(e, t) {
            return function(n, r, i, o) {
                var a = e(n, r, i, o);
                return a = E(a) ? -a : -0, t ? {
                    value: a
                } : a
            }
        },
        "unary!": function(e, t) {
            return function(n, r, i, o) {
                var a = !e(n, r, i, o);
                return t ? {
                    value: a
                } : a
            }
        },
        "binary+": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a),
                    c = t(r, i, o, a),
                    l = hn(s, c);
                return n ? {
                    value: l
                } : l
            }
        },
        "binary-": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a),
                    c = t(r, i, o, a),
                    l = (E(s) ? s : 0) - (E(c) ? c : 0);
                return n ? {
                    value: l
                } : l
            }
        },
        "binary*": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) * t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary/": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) / t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary%": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) % t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary===": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) === t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary!==": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) !== t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary==": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) == t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary!=": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) != t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary<": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) < t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary>": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) > t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary<=": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) <= t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary>=": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) >= t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary&&": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) && t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary||": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) || t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "ternary?:": function(e, t, n, r) {
            return function(i, o, a, s) {
                var c = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
                return r ? {
                    value: c
                } : c
            }
        },
        value: function(e, t) {
            return function() {
                return t ? {
                    context: void 0,
                    name: void 0,
                    value: e
                } : e
            }
        },
        identifier: function(e, t, n) {
            return function(r, i, o, a) {
                var s = i && e in i ? i : r;
                n && 1 !== n && s && null == s[e] && (s[e] = {});
                var c = s ? s[e] : void 0;
                return t ? {
                    context: s,
                    name: e,
                    value: c
                } : c
            }
        },
        computedMember: function(e, t, n, r) {
            return function(i, o, a, s) {
                var c, l, d = e(i, o, a, s);
                return null != d && (c = t(i, o, a, s), c = mn(c), r && 1 !== r && d && !d[c] && (d[c] = {}), l = d[c]), n ? {
                    context: d,
                    name: c,
                    value: l
                } : l
            }
        },
        nonComputedMember: function(e, t, n, r) {
            return function(i, o, a, s) {
                var c = e(i, o, a, s);
                r && 1 !== r && c && null == c[t] && (c[t] = {});
                var l = null != c ? c[t] : void 0;
                return n ? {
                    context: c,
                    name: t,
                    value: l
                } : l
            }
        },
        inputs: function(e, t) {
            return function(n, r, i, o) {
                return o ? o[t] : e(n, r, i)
            }
        }
    }, xn.prototype = {
        constructor: xn,
        parse: function(e) {
            var t = this.getAst(e),
                n = this.astCompiler.compile(t.ast);
            return n.literal = yn(t.ast), n.constant = Mn(t.ast), n.oneTime = t.oneTime, n
        },
        getAst: function(e) {
            var t = !1;
            return e = e.trim(), ":" === e.charAt(0) && ":" === e.charAt(1) && (t = !0, e = e.substring(2)), {
                ast: this.ast.ast(e),
                oneTime: t
            }
        }
    };
    var Yo = r("$sce"),
        Ko = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Go = /_([a-z])/g,
        Xo = r("$compile"),
        Jo = e.document.createElement("a"),
        Zo = Wn(e.location.href);
    Gn.$inject = ["$document"], Jn.$inject = ["$provide"];
    var Qo = 22,
        ea = ".",
        ta = "0";
    nr.$inject = ["$locale"], rr.$inject = ["$locale"];
    var na = {
            yyyy: cr("FullYear", 4, 0, !1, !0),
            yy: cr("FullYear", 2, 0, !0, !0),
            y: cr("FullYear", 1, 0, !1, !0),
            MMMM: lr("Month"),
            MMM: lr("Month", !0),
            MM: cr("Month", 2, 1),
            M: cr("Month", 1, 1),
            LLLL: lr("Month", !1, !0),
            dd: cr("Date", 2),
            d: cr("Date", 1),
            HH: cr("Hours", 2),
            H: cr("Hours", 1),
            hh: cr("Hours", 2, -12),
            h: cr("Hours", 1, -12),
            mm: cr("Minutes", 2),
            m: cr("Minutes", 1),
            ss: cr("Seconds", 2),
            s: cr("Seconds", 1),
            sss: cr("Milliseconds", 3),
            EEEE: lr("Day"),
            EEE: lr("Day", !0),
            a: hr,
            Z: dr,
            ww: fr(2),
            w: fr(1),
            G: pr,
            GG: pr,
            GGG: pr,
            GGGG: gr
        },
        ra = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
        ia = /^-?\d+$/;
    vr.$inject = ["$locale"];
    var oa = v(ri),
        aa = v(ii);
    yr.$inject = ["$parse"];
    var sa = v({
            restrict: "E",
            compile: function(e, t) {
                return t.href || t.xlinkHref ? void 0 : function(e, t) {
                    if ("a" === t[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === hi.call(t.prop("href")) ? "xlink:href" : "href";
                        t.on("click", function(e) {
                            t.attr(n) || e.preventDefault()
                        })
                    }
                }
            }
        }),
        ca = {};
    o(Ji, function(e, t) {
        function n(e, n, i) {
            e.$watch(i[r], function(e) {
                i.$set(t, !!e)
            })
        }
        if ("multiple" !== e) {
            var r = xt("ng-" + t),
                i = n;
            "checked" === e && (i = function(e, t, i) {
                i.ngModel !== i[r] && n(e, t, i)
            }), ca[r] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: i
                }
            }
        }
    }), o(Qi, function(e, t) {
        ca[t] = function() {
            return {
                priority: 100,
                link: function(e, n, r) {
                    if ("ngPattern" === t && "/" === r.ngPattern.charAt(0)) {
                        var i = r.ngPattern.match(ei);
                        if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                    }
                    e.$watch(r[t], function(e) {
                        r.$set(t, e)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function(e) {
        var t = xt("ng-" + e);
        ca[t] = function() {
            return {
                priority: 99,
                link: function(n, r, i) {
                    var o = e,
                        a = e;
                    "href" === e && "[object SVGAnimatedString]" === hi.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function(t) {
                        return t ? (i.$set(a, t), void(si && o && r.prop(o, i[a]))) : void("href" === e && i.$set(a, null))
                    })
                }
            }
        }
    });
    var la = {
            $addControl: p,
            $$renameControl: Cr,
            $removeControl: p,
            $setValidity: p,
            $setDirty: p,
            $setPristine: p,
            $setSubmitted: p
        },
        da = "ng-pending",
        ua = "ng-submitted";
    wr.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"], wr.prototype = {
        $rollbackViewValue: function() {
            o(this.$$controls, function(e) {
                e.$rollbackViewValue()
            })
        },
        $commitViewValue: function() {
            o(this.$$controls, function(e) {
                e.$commitViewValue()
            })
        },
        $addControl: function(e) {
            ve(e.$name, "input"), this.$$controls.push(e), e.$name && (this[e.$name] = e), e.$$parentForm = this
        },
        $$renameControl: function(e, t) {
            var n = e.$name;
            this[n] === e && delete this[n], this[t] = e, e.$name = t
        },
        $removeControl: function(e) {
            e.$name && this[e.$name] === e && delete this[e.$name], o(this.$pending, function(t, n) {
                this.$setValidity(n, null, e)
            }, this), o(this.$error, function(t, n) {
                this.$setValidity(n, null, e)
            }, this), o(this.$$success, function(t, n) {
                this.$setValidity(n, null, e)
            }, this), q(this.$$controls, e), e.$$parentForm = la
        },
        $setDirty: function() {
            this.$$animate.removeClass(this.$$element, Ka), this.$$animate.addClass(this.$$element, Ga), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty()
        },
        $setPristine: function() {
            this.$$animate.setClass(this.$$element, Ka, Ga + " " + ua), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, o(this.$$controls, function(e) {
                e.$setPristine()
            })
        },
        $setUntouched: function() {
            o(this.$$controls, function(e) {
                e.$setUntouched()
            })
        },
        $setSubmitted: function() {
            this.$$animate.addClass(this.$$element, ua), this.$submitted = !0, this.$$parentForm.$setSubmitted()
        }
    }, Ar({
        clazz: wr,
        set: function(e, t, n) {
            var r = e[t];
            if (r) {
                var i = r.indexOf(n); - 1 === i && r.push(n)
            } else e[t] = [n]
        },
        unset: function(e, t, n) {
            var r = e[t];
            r && (q(r, n), 0 === r.length && delete e[t])
        }
    });
    var ma = function(e) {
            return ["$timeout", "$parse", function(t, n) {
                function r(e) {
                    return "" === e ? n('this[""]').assign : n(e).assign || p
                }
                var i = {
                    name: "form",
                    restrict: e ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: wr,
                    compile: function(n, i) {
                        n.addClass(Ka).addClass(Wa);
                        var o = i.name ? "name" : e && i.ngForm ? "ngForm" : !1;
                        return {
                            pre: function(e, n, i, a) {
                                var s = a[0];
                                if (!("action" in i)) {
                                    var c = function(t) {
                                        e.$apply(function() {
                                            s.$commitViewValue(), s.$setSubmitted()
                                        }), t.preventDefault()
                                    };
                                    n[0].addEventListener("submit", c), n.on("$destroy", function() {
                                        t(function() {
                                            n[0].removeEventListener("submit", c)
                                        }, 0, !1)
                                    })
                                }
                                var l = a[1] || s.$$parentForm;
                                l.$addControl(s);
                                var d = o ? r(s.$name) : p;
                                o && (d(e, s), i.$observe(o, function(t) {
                                    s.$name !== t && (d(e, void 0), s.$$parentForm.$$renameControl(s, t), (d = r(s.$name))(e, s))
                                })), n.on("$destroy", function() {
                                    s.$$parentForm.$removeControl(s), d(e, void 0), u(s, la)
                                })
                            }
                        }
                    }
                };
                return i
            }]
        },
        fa = ma(),
        ha = ma(!0),
        pa = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        ga = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        va = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        $a = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        ba = /^(\d{4,})-(\d{2})-(\d{2})$/,
        Ea = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        ya = /^(\d{4,})-W(\d\d)$/,
        Ma = /^(\d{4,})-(\d\d)$/,
        Ca = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        wa = "keydown wheel mousedown",
        xa = Ee();
    o("date,datetime-local,month,time,week".split(","), function(e) {
        xa[e] = !0
    });
    var Aa = {
            text: Sr,
            date: Or("date", ba, _r(ba, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": Or("datetimelocal", Ea, _r(Ea, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: Or("time", Ca, _r(Ca, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: Or("week", ya, Dr, "yyyy-Www"),
            month: Or("month", Ma, _r(Ma, ["yyyy", "MM"]), "yyyy-MM"),
            number: jr,
            url: qr,
            email: Br,
            radio: Ur,
            range: Fr,
            checkbox: Wr,
            hidden: p,
            button: p,
            submit: p,
            reset: p,
            file: p
        },
        ka = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(i, o, a, s) {
                        s[0] && (Aa[ri(a.type)] || Aa.text)(i, o, a, s[0], t, e, n, r)
                    }
                }
            }
        }],
        Ta = /^(true|false|\d+)$/,
        Sa = function() {
            function e(e, t, n) {
                var r = E(n) ? n : 9 === si ? "" : null;
                e.prop("value", r), t.$set("value", n)
            }
            return {
                restrict: "A",
                priority: 100,
                compile: function(t, n) {
                    return Ta.test(n.ngValue) ? function(t, n, r) {
                        var i = t.$eval(r.ngValue);
                        e(n, r, i)
                    } : function(t, n, r) {
                        t.$watch(r.ngValue, function(t) {
                            e(n, r, t)
                        })
                    }
                }
            }
        },
        Na = ["$compile", function(e) {
            return {
                restrict: "AC",
                compile: function(t) {
                    return e.$$addBindingClass(t),
                        function(t, n, r) {
                            e.$$addBindingInfo(n, r.ngBind), n = n[0], t.$watch(r.ngBind, function(e) {
                                n.textContent = ye(e)
                            })
                        }
                }
            }
        }],
        Da = ["$interpolate", "$compile", function(e, t) {
            return {
                compile: function(n) {
                    return t.$$addBindingClass(n),
                        function(n, r, i) {
                            var o = e(r.attr(i.$attr.ngBindTemplate));
                            t.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function(e) {
                                r.textContent = b(e) ? "" : e
                            })
                        }
                }
            }
        }],
        _a = ["$sce", "$parse", "$compile", function(e, t, n) {
            return {
                restrict: "A",
                compile: function(r, i) {
                    var o = t(i.ngBindHtml),
                        a = t(i.ngBindHtml, function(t) {
                            return e.valueOf(t)
                        });
                    return n.$$addBindingClass(r),
                        function(t, r, i) {
                            n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function() {
                                var n = o(t);
                                r.html(e.getTrustedHtml(n) || "")
                            })
                        }
                }
            }
        }],
        Oa = v({
            restrict: "A",
            require: "ngModel",
            link: function(e, t, n, r) {
                r.$viewChangeListeners.push(function() {
                    e.$eval(n.ngChange)
                })
            }
        }),
        Ha = Yr("", !0),
        Ia = Yr("Odd", 0),
        Ra = Yr("Even", 1),
        Pa = Mr({
            compile: function(e, t) {
                t.$set("ngCloak", void 0), e.removeClass("ng-cloak")
            }
        }),
        La = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Va = {},
        ja = {
            blur: !0,
            focus: !0
        };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
        var t = xt("ng-" + e);
        Va[t] = ["$parse", "$rootScope", function(n, r) {
            return {
                restrict: "A",
                compile: function(i, o) {
                    var a = n(o[t]);
                    return function(t, n) {
                        n.on(e, function(n) {
                            var i = function() {
                                a(t, {
                                    $event: n
                                })
                            };
                            ja[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var Fa = ["$animate", "$compile", function(e, t) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, r, i, o, a) {
                    var s, c, l;
                    n.$watch(i.ngIf, function(n) {
                        n ? c || a(function(n, o) {
                            c = o, n[n.length++] = t.$$createComment("end ngIf", i.ngIf), s = {
                                clone: n
                            }, e.enter(n, r.parent(), r)
                        }) : (l && (l.remove(), l = null), c && (c.$destroy(), c = null), s && (l = be(s.clone), e.leave(l).done(function(e) {
                            e !== !1 && (l = null)
                        }), s = null))
                    })
                }
            }
        }],
        qa = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: vi.noop,
                compile: function(r, i) {
                    var o = i.ngInclude || i.src,
                        a = i.onload || "",
                        s = i.autoscroll;
                    return function(r, i, c, l, d) {
                        var u, m, f, h = 0,
                            p = function() {
                                m && (m.remove(), m = null), u && (u.$destroy(), u = null), f && (n.leave(f).done(function(e) {
                                    e !== !1 && (m = null)
                                }), m = f, f = null)
                            };
                        r.$watch(o, function(o) {
                            var c = function(e) {
                                    e === !1 || !E(s) || s && !r.$eval(s) || t()
                                },
                                m = ++h;
                            o ? (e(o, !0).then(function(e) {
                                if (!r.$$destroyed && m === h) {
                                    var t = r.$new();
                                    l.template = e;
                                    var s = d(t, function(e) {
                                        p(), n.enter(e, null, i).done(c)
                                    });
                                    u = t, f = s, u.$emit("$includeContentLoaded", o), r.$eval(a)
                                }
                            }, function() {
                                r.$$destroyed || m === h && (p(), r.$emit("$includeContentError", o))
                            }), r.$emit("$includeContentRequested", o)) : (p(), l.template = null)
                        })
                    }
                }
            }
        }],
        Ba = ["$compile", function(t) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(n, r, i, o) {
                    return hi.call(r[0]).match(/SVG/) ? (r.empty(), void t(He(o.template, e.document).childNodes)(n, function(e) {
                        r.append(e)
                    }, {
                        futureParentElement: r
                    })) : (r.html(o.template), void t(r.contents())(n))
                }
            }
        }],
        Ua = Mr({
            priority: 450,
            compile: function() {
                return {
                    pre: function(e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }),
        za = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(e, t, n, r) {
                    var i = n.ngList || ", ",
                        a = "false" !== n.ngTrim,
                        s = a ? Mi(i) : i,
                        c = function(e) {
                            if (!b(e)) {
                                var t = [];
                                return e && o(e.split(s), function(e) {
                                    e && t.push(a ? Mi(e) : e)
                                }), t
                            }
                        };
                    r.$parsers.push(c), r.$formatters.push(function(e) {
                        return Ei(e) ? e.join(i) : void 0
                    }), r.$isEmpty = function(e) {
                        return !e || !e.length
                    }
                }
            }
        },
        Wa = "ng-valid",
        Ya = "ng-invalid",
        Ka = "ng-pristine",
        Ga = "ng-dirty",
        Xa = "ng-untouched",
        Ja = "ng-touched",
        Za = "ng-empty",
        Qa = "ng-not-empty",
        es = r("ngModel");
    Kr.$inject = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$q", "$interpolate"], Kr.prototype = {
        $$initGetterSetters: function() {
            if (this.$options.getOption("getterSetter")) {
                var e = this.$$parse(this.$$attr.ngModel + "()"),
                    t = this.$$parse(this.$$attr.ngModel + "($$$p)");
                this.$$ngModelGet = function(t) {
                    var n = this.$$parsedNgModel(t);
                    return k(n) && (n = e(t)), n
                }, this.$$ngModelSet = function(e, n) {
                    k(this.$$parsedNgModel(e)) ? t(e, {
                        $$$p: n
                    }) : this.$$parsedNgModelAssign(e, n)
                }
            } else if (!this.$$parsedNgModel.assign) throw es("nonassign", "Expression '{0}' is non-assignable. Element: {1}", this.$$attr.ngModel, te(this.$$element))
        },
        $render: p,
        $isEmpty: function(e) {
            return b(e) || "" === e || null === e || e !== e
        },
        $$updateEmptyClasses: function(e) {
            this.$isEmpty(e) ? (this.$$animate.removeClass(this.$$element, Qa), this.$$animate.addClass(this.$$element, Za)) : (this.$$animate.removeClass(this.$$element, Za), this.$$animate.addClass(this.$$element, Qa))
        },
        $setPristine: function() {
            this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, Ga), this.$$animate.addClass(this.$$element, Ka)
        },
        $setDirty: function() {
            this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, Ka), this.$$animate.addClass(this.$$element, Ga), this.$$parentForm.$setDirty()
        },
        $setUntouched: function() {
            this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, Xa, Ja)
        },
        $setTouched: function() {
            this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, Ja, Xa)
        },
        $rollbackViewValue: function() {
            this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render()
        },
        $validate: function() {
            if (!bi(this.$modelValue)) {
                var e = this.$$lastCommittedViewValue,
                    t = this.$$rawModelValue,
                    n = this.$valid,
                    r = this.$modelValue,
                    i = this.$options.getOption("allowInvalid"),
                    o = this;
                this.$$runValidators(t, e, function(e) {
                    i || n === e || (o.$modelValue = e ? t : void 0, o.$modelValue !== r && o.$$writeModelToScope())
                })
            }
        },
        $$runValidators: function(e, t, n) {
            function r() {
                var e = d.$$parserName || "parse";
                return b(d.$$parserValid) ? (s(e, null), !0) : (d.$$parserValid || (o(d.$validators, function(e, t) {
                    s(t, null)
                }), o(d.$asyncValidators, function(e, t) {
                    s(t, null)
                })), s(e, d.$$parserValid), d.$$parserValid)
            }

            function i() {
                var n = !0;
                return o(d.$validators, function(r, i) {
                    var o = Boolean(r(e, t));
                    n = n && o, s(i, o)
                }), n ? !0 : (o(d.$asyncValidators, function(e, t) {
                    s(t, null)
                }), !1)
            }

            function a() {
                var n = [],
                    r = !0;
                o(d.$asyncValidators, function(i, o) {
                    var a = i(e, t);
                    if (!I(a)) throw es("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
                    s(o, void 0), n.push(a.then(function() {
                        s(o, !0)
                    }, function() {
                        r = !1, s(o, !1)
                    }))
                }), n.length ? d.$$q.all(n).then(function() {
                    c(r)
                }, p) : c(!0)
            }

            function s(e, t) {
                l === d.$$currentValidationRunId && d.$setValidity(e, t)
            }

            function c(e) {
                l === d.$$currentValidationRunId && n(e)
            }
            this.$$currentValidationRunId++;
            var l = this.$$currentValidationRunId,
                d = this;
            return r() && i() ? void a() : void c(!1)
        },
        $commitViewValue: function() {
            var e = this.$viewValue;
            this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== e || "" === e && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(e), this.$$lastCommittedViewValue = e, this.$pristine && this.$setDirty(), this.$$parseAndValidate())
        },
        $$parseAndValidate: function() {
            function e() {
                r.$modelValue !== o && r.$$writeModelToScope()
            }
            var t = this.$$lastCommittedViewValue,
                n = t,
                r = this;
            if (this.$$parserValid = b(n) ? void 0 : !0, this.$$parserValid)
                for (var i = 0; i < this.$parsers.length; i++)
                    if (n = this.$parsers[i](n), b(n)) {
                        this.$$parserValid = !1;
                        break
                    }
            bi(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
            var o = this.$modelValue,
                a = this.$options.getOption("allowInvalid");
            this.$$rawModelValue = n, a && (this.$modelValue = n, e()), this.$$runValidators(n, this.$$lastCommittedViewValue, function(t) {
                a || (r.$modelValue = t ? n : void 0, e())
            })
        },
        $$writeModelToScope: function() {
            this.$$ngModelSet(this.$$scope, this.$modelValue), o(this.$viewChangeListeners, function(e) {
                try {
                    e()
                } catch (t) {
                    this.$$exceptionHandler(t)
                }
            }, this)
        },
        $setViewValue: function(e, t) {
            this.$viewValue = e, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(t)
        },
        $$debounceViewValueCommit: function(e) {
            var t = this.$options.getOption("debounce");
            w(t[e]) ? t = t[e] : w(t["default"]) && (t = t["default"]), this.$$timeout.cancel(this.$$pendingDebounce);
            var n = this;
            t > 0 ? this.$$pendingDebounce = this.$$timeout(function() {
                n.$commitViewValue()
            }, t) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function() {
                n.$commitViewValue()
            })
        },
        $overrideModelOptions: function(e) {
            this.$options = this.$options.createChild(e), this.$$setUpdateOnEvents()
        },
        $processModelValue: function() {
            var e = this.$$format();
            this.$viewValue !== e && (this.$$updateEmptyClasses(e), this.$viewValue = this.$$lastCommittedViewValue = e, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, p))
        },
        $$format: function() {
            for (var e = this.$formatters, t = e.length, n = this.$modelValue; t--;) n = e[t](n);
            return n
        },
        $$setModelValue: function(e) {
            this.$modelValue = this.$$rawModelValue = e, this.$$parserValid = void 0, this.$processModelValue()
        },
        $$setUpdateOnEvents: function() {
            this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler), this.$$updateEvents = this.$options.getOption("updateOn"), this.$$updateEvents && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
        },
        $$updateEventHandler: function(e) {
            this.$$debounceViewValueCommit(e && e.type)
        }
    }, Ar({
        clazz: Kr,
        set: function(e, t) {
            e[t] = !0
        },
        unset: function(e, t) {
            delete e[t]
        }
    });
    var ts, ns = ["$rootScope", function(e) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Kr,
                priority: 1,
                compile: function(t) {
                    return t.addClass(Ka).addClass(Xa).addClass(Wa), {
                        pre: function(e, t, n, r) {
                            var i = r[0],
                                o = r[1] || i.$$parentForm,
                                a = r[2];
                            a && (i.$options = a.$options), i.$$initGetterSetters(), o.$addControl(i), n.$observe("name", function(e) {
                                i.$name !== e && i.$$parentForm.$$renameControl(i, e)
                            }), e.$on("$destroy", function() {
                                i.$$parentForm.$removeControl(i)
                            })
                        },
                        post: function(t, n, r, i) {
                            function o() {
                                a.$setTouched()
                            }
                            var a = i[0];
                            a.$$setUpdateOnEvents(), n.on("blur", function() {
                                a.$touched || (e.$$phase ? t.$evalAsync(o) : t.$apply(o));
                            })
                        }
                    }
                }
            }
        }],
        rs = /(\s+|^)default(\s+|$)/;
    Xr.prototype = {
        getOption: function(e) {
            return this.$$options[e]
        },
        createChild: function(e) {
            var t = !1;
            return e = u({}, e), o(e, function(n, r) {
                "$inherit" === n ? "*" === r ? t = !0 : (e[r] = this.$$options[r], "updateOn" === r && (e.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === r && (e.updateOnDefault = !1, e[r] = Mi(n.replace(rs, function() {
                    return e.updateOnDefault = !0, " "
                })))
            }, this), t && (delete e["*"], Jr(e, this.$$options)), Jr(e, ts.$$options), new Xr(e)
        }
    }, ts = new Xr({
        updateOn: "",
        updateOnDefault: !0,
        debounce: 0,
        getterSetter: !1,
        allowInvalid: !1,
        timezone: null
    });
    var is = function() {
            function e(e, t) {
                this.$$attrs = e, this.$$scope = t
            }
            return e.$inject = ["$attrs", "$scope"], e.prototype = {
                $onInit: function() {
                    var e = this.parentCtrl ? this.parentCtrl.$options : ts,
                        t = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                    this.$options = e.createChild(t)
                }
            }, {
                restrict: "A",
                priority: 10,
                require: {
                    parentCtrl: "?^^ngModelOptions"
                },
                bindToController: !0,
                controller: e
            }
        },
        os = Mr({
            terminal: !0,
            priority: 1e3
        }),
        as = r("ngOptions"),
        ss = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        cs = ["$compile", "$document", "$parse", function(t, n, r) {
            function a(e, t, n) {
                function o(e, t, n, r, i) {
                    this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
                }

                function a(e) {
                    var t;
                    if (!l && i(e)) t = e;
                    else {
                        t = [];
                        for (var n in e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n)
                    }
                    return t
                }
                var s = e.match(ss);
                if (!s) throw as("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, te(t));
                var c = s[5] || s[7],
                    l = s[6],
                    d = / as /.test(s[0]) && s[1],
                    u = s[9],
                    m = r(s[2] ? s[1] : c),
                    f = d && r(d),
                    h = f || m,
                    p = u && r(u),
                    g = u ? function(e, t) {
                        return p(n, t)
                    } : function(e) {
                        return at(e)
                    },
                    v = function(e, t) {
                        return g(e, C(e, t))
                    },
                    $ = r(s[2] || s[1]),
                    b = r(s[3] || ""),
                    E = r(s[4] || ""),
                    y = r(s[8]),
                    M = {},
                    C = l ? function(e, t) {
                        return M[l] = t, M[c] = e, M
                    } : function(e) {
                        return M[c] = e, M
                    };
                return {
                    trackBy: u,
                    getTrackByValue: v,
                    getWatchables: r(y, function(e) {
                        var t = [];
                        e = e || [];
                        for (var r = a(e), i = r.length, o = 0; i > o; o++) {
                            var c = e === r ? o : r[o],
                                l = e[c],
                                d = C(l, c),
                                u = g(l, d);
                            if (t.push(u), s[2] || s[1]) {
                                var m = $(n, d);
                                t.push(m)
                            }
                            if (s[4]) {
                                var f = E(n, d);
                                t.push(f)
                            }
                        }
                        return t
                    }),
                    getOptions: function() {
                        for (var e = [], t = {}, r = y(n) || [], i = a(r), s = i.length, c = 0; s > c; c++) {
                            var l = r === i ? c : i[c],
                                d = r[l],
                                m = C(d, l),
                                f = h(n, m),
                                p = g(f, m),
                                M = $(n, m),
                                w = b(n, m),
                                x = E(n, m),
                                A = new o(p, f, M, w, x);
                            e.push(A), t[p] = A
                        }
                        return {
                            items: e,
                            selectValueMap: t,
                            getOptionFromViewValue: function(e) {
                                return t[v(e)]
                            },
                            getViewValueFromOption: function(e) {
                                return u ? B(e.viewValue) : e.viewValue
                            }
                        }
                    }
                }
            }

            function s(e, r, i, s) {
                function d(e, t) {
                    var n = c.cloneNode(!1);
                    t.appendChild(n), m(e, n)
                }

                function u(e) {
                    var t = C.getOptionFromViewValue(e),
                        n = t && t.element;
                    return n && !n.selected && (n.selected = !0), t
                }

                function m(e, t) {
                    e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), t.value = e.selectValue
                }

                function f() {
                    var e = C && h.readValue();
                    if (C)
                        for (var t = C.items.length - 1; t >= 0; t--) {
                            var n = C.items[t];
                            Je(E(n.group) ? n.element.parentNode : n.element)
                        }
                    C = w.getOptions();
                    var i = {};
                    if (C.items.forEach(function(e) {
                            var t;
                            E(e.group) ? (t = i[e.group], t || (t = l.cloneNode(!1), x.appendChild(t), t.label = null === e.group ? "null" : e.group, i[e.group] = t), d(e, t)) : d(e, x)
                        }), r[0].appendChild(x), p.$render(), !p.$isEmpty(e)) {
                        var o = h.readValue(),
                            a = w.trackBy || g;
                        (a ? z(e, o) : e === o) || (p.$setViewValue(o), p.$render())
                    }
                }
                for (var h = s[0], p = s[1], g = i.multiple, v = 0, $ = r.children(), b = $.length; b > v; v++)
                    if ("" === $[v].value) {
                        h.hasEmptyOption = !0, h.emptyOption = $.eq(v);
                        break
                    }
                r.empty();
                var y = !!h.emptyOption,
                    M = ci(c.cloneNode(!1));
                M.val("?");
                var C, w = a(i.ngOptions, r, e),
                    x = n[0].createDocumentFragment();
                h.generateUnknownOptionValue = function(e) {
                    return "?"
                }, g ? (h.writeValue = function(e) {
                    if (C) {
                        var t = e && e.map(u) || [];
                        C.items.forEach(function(e) {
                            e.element.selected && !F(t, e) && (e.element.selected = !1)
                        })
                    }
                }, h.readValue = function() {
                    var e = r.val() || [],
                        t = [];
                    return o(e, function(e) {
                        var n = C.selectValueMap[e];
                        n && !n.disabled && t.push(C.getViewValueFromOption(n))
                    }), t
                }, w.trackBy && e.$watchCollection(function() {
                    return Ei(p.$viewValue) ? p.$viewValue.map(function(e) {
                        return w.getTrackByValue(e)
                    }) : void 0
                }, function() {
                    p.$render()
                })) : (h.writeValue = function(e) {
                    if (C) {
                        var t = r[0].options[r[0].selectedIndex],
                            n = C.getOptionFromViewValue(e);
                        t && t.removeAttribute("selected"), n ? (r[0].value !== n.selectValue && (h.removeUnknownOption(), r[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : h.selectUnknownOrEmptyOption(e)
                    }
                }, h.readValue = function() {
                    var e = C.selectValueMap[r.val()];
                    return e && !e.disabled ? (h.unselectEmptyOption(), h.removeUnknownOption(), C.getViewValueFromOption(e)) : null
                }, w.trackBy && e.$watch(function() {
                    return w.getTrackByValue(p.$viewValue)
                }, function() {
                    p.$render()
                })), y && (t(h.emptyOption)(e), r.prepend(h.emptyOption), h.emptyOption[0].nodeType === Hi ? (h.hasEmptyOption = !1, h.registerOption = function(e, t) {
                    "" === t.val() && (h.hasEmptyOption = !0, h.emptyOption = t, h.emptyOption.removeClass("ng-scope"), p.$render(), t.on("$destroy", function() {
                        var e = h.$isEmptyOptionSelected();
                        h.hasEmptyOption = !1, h.emptyOption = void 0, e && p.$render()
                    }))
                }) : h.emptyOption.removeClass("ng-scope")), e.$watchCollection(w.getWatchables, f)
            }
            var c = e.document.createElement("option"),
                l = e.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                    pre: function(e, t, n, r) {
                        r[0].registerOption = p
                    },
                    post: s
                }
            }
        }],
        ls = ["$locale", "$interpolate", "$log", function(e, t, n) {
            var r = /{}/g,
                i = /^when(Minus)?(.+)$/;
            return {
                link: function(a, s, c) {
                    function l(e) {
                        s.text(e || "")
                    }
                    var d, u = c.count,
                        m = c.$attr.when && s.attr(c.$attr.when),
                        f = c.offset || 0,
                        h = a.$eval(m) || {},
                        g = {},
                        v = t.startSymbol(),
                        $ = t.endSymbol(),
                        E = v + u + "-" + f + $,
                        y = vi.noop;
                    o(c, function(e, t) {
                        var n = i.exec(t);
                        if (n) {
                            var r = (n[1] ? "-" : "") + ri(n[2]);
                            h[r] = s.attr(c.$attr[t])
                        }
                    }), o(h, function(e, n) {
                        g[n] = t(e.replace(r, E))
                    }), a.$watch(u, function(t) {
                        var r = parseFloat(t),
                            i = bi(r);
                        if (i || r in h || (r = e.pluralCat(r - f)), !(r === d || i && bi(d))) {
                            y();
                            var o = g[r];
                            b(o) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + m), y = p, l()) : y = a.$watch(o, l), d = r
                        }
                    })
                }
            }
        }],
        ds = ["$parse", "$animate", "$compile", function(e, t, n) {
            var a = "$$NG_REMOVED",
                s = r("ngRepeat"),
                c = function(e, t, n, r, i, o, a) {
                    e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
                },
                l = function(e) {
                    return e.clone[0]
                },
                d = function(e) {
                    return e.clone[e.clone.length - 1]
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(r, u) {
                    var m = u.ngRepeat,
                        f = n.$$createComment("end ngRepeat", m),
                        h = m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!h) throw s("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", m);
                    var p = h[1],
                        g = h[2],
                        v = h[3],
                        $ = h[4];
                    if (h = p.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/), !h) throw s("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", p);
                    var b = h[3] || h[1],
                        E = h[2];
                    if (v && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(v) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(v))) throw s("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", v);
                    var y, M, C, w, x = {
                        $id: at
                    };
                    return $ ? y = e($) : (C = function(e, t) {
                            return at(t)
                        }, w = function(e) {
                            return e
                        }),
                        function(e, n, r, u, h) {
                            y && (M = function(t, n, r) {
                                return E && (x[E] = t), x[b] = n, x.$index = r, y(e, x)
                            });
                            var p = Ee();
                            e.$watchCollection(g, function(r) {
                                var u, g, $, y, x, A, k, T, S, N, D, _, O = n[0],
                                    H = Ee();
                                if (v && (e[v] = r), i(r)) S = r, T = M || C;
                                else {
                                    T = M || w, S = [];
                                    for (var I in r) ni.call(r, I) && "$" !== I.charAt(0) && S.push(I)
                                }
                                for (y = S.length, D = new Array(y), u = 0; y > u; u++)
                                    if (x = r === S ? u : S[u], A = r[x], k = T(x, A, u), p[k]) N = p[k], delete p[k], H[k] = N, D[u] = N;
                                    else {
                                        if (H[k]) throw o(D, function(e) {
                                            e && e.scope && (p[e.id] = e)
                                        }), s("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", m, k, A);
                                        D[u] = {
                                            id: k,
                                            scope: void 0,
                                            clone: void 0
                                        }, H[k] = !0
                                    }
                                for (var R in p) {
                                    if (N = p[R], _ = be(N.clone), t.leave(_), _[0].parentNode)
                                        for (u = 0, g = _.length; g > u; u++) _[u][a] = !0;
                                    N.scope.$destroy()
                                }
                                for (u = 0; y > u; u++)
                                    if (x = r === S ? u : S[u], A = r[x], N = D[u], N.scope) {
                                        $ = O;
                                        do $ = $.nextSibling; while ($ && $[a]);
                                        l(N) !== $ && t.move(be(N.clone), null, O), O = d(N), c(N.scope, u, b, A, E, x, y)
                                    } else h(function(e, n) {
                                        N.scope = n;
                                        var r = f.cloneNode(!1);
                                        e[e.length++] = r, t.enter(e, null, O), O = r, N.clone = e, H[N.id] = N, c(N.scope, u, b, A, E, x, y)
                                    });
                                p = H
                            })
                        }
                }
            }
        }],
        us = "ng-hide",
        ms = "ng-hide-animate",
        fs = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngShow, function(t) {
                        e[t ? "removeClass" : "addClass"](n, us, {
                            tempClasses: ms
                        })
                    })
                }
            }
        }],
        hs = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngHide, function(t) {
                        e[t ? "addClass" : "removeClass"](n, us, {
                            tempClasses: ms
                        })
                    })
                }
            }
        }],
        ps = Mr(function(e, t, n) {
            e.$watch(n.ngStyle, function(e, n) {
                n && e !== n && o(n, function(e, n) {
                    t.css(n, "")
                }), e && t.css(e)
            }, !0)
        }),
        gs = ["$animate", "$compile", function(e, t) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(n, r, i, a) {
                    var s = i.ngSwitch || i.on,
                        c = [],
                        l = [],
                        d = [],
                        u = [],
                        m = function(e, t) {
                            return function(n) {
                                n !== !1 && e.splice(t, 1)
                            }
                        };
                    n.$watch(s, function(n) {
                        for (var r, i; d.length;) e.cancel(d.pop());
                        for (r = 0, i = u.length; i > r; ++r) {
                            var s = be(l[r].clone);
                            u[r].$destroy();
                            var f = d[r] = e.leave(s);
                            f.done(m(d, r))
                        }
                        l.length = 0, u.length = 0, (c = a.cases["!" + n] || a.cases["?"]) && o(c, function(n) {
                            n.transclude(function(r, i) {
                                u.push(i);
                                var o = n.element;
                                r[r.length++] = t.$$createComment("end ngSwitchWhen");
                                var a = {
                                    clone: r
                                };
                                l.push(a), e.enter(r, o.parent(), o)
                            })
                        })
                    })
                }
            }
        }],
        vs = Mr({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, i) {
                var a = n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(e, t, n) {
                    return n[t - 1] !== e
                });
                o(a, function(e) {
                    r.cases["!" + e] = r.cases["!" + e] || [], r.cases["!" + e].push({
                        transclude: i,
                        element: t
                    })
                })
            }
        }),
        $s = Mr({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: i,
                    element: t
                })
            }
        }),
        bs = r("ngTransclude"),
        Es = ["$compile", function(e) {
            return {
                restrict: "EAC",
                compile: function(t) {
                    var n = e(t.contents());
                    return t.empty(),
                        function(e, t, r, i, o) {
                            function a(e, n) {
                                e.length && c(e) ? t.append(e) : (s(), n.$destroy())
                            }

                            function s() {
                                n(e, function(e) {
                                    t.append(e)
                                })
                            }

                            function c(e) {
                                for (var t = 0, n = e.length; n > t; t++) {
                                    var r = e[t];
                                    if (r.nodeType !== Oi || r.nodeValue.trim()) return !0
                                }
                            }
                            if (!o) throw bs("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", te(t));
                            r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = "");
                            var l = r.ngTransclude || r.ngTranscludeSlot;
                            o(a, null, l), l && !o.isSlotFilled(l) && s()
                        }
                }
            }
        }],
        ys = ["$templateCache", function(e) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(t, n) {
                    if ("text/ng-template" === n.type) {
                        var r = n.id,
                            i = t[0].text;
                        e.put(r, i)
                    }
                }
            }
        }],
        Ms = {
            $setViewValue: p,
            $render: p
        },
        Cs = ["$element", "$scope", function(t, n) {
            function r() {
                s || (s = !0, n.$$postDigest(function() {
                    s = !1, o.ngModelCtrl.$render()
                }))
            }

            function i(e) {
                c || (c = !0, n.$$postDigest(function() {
                    n.$$destroyed || (c = !1, o.ngModelCtrl.$setViewValue(o.readValue()), e && o.ngModelCtrl.$render())
                }))
            }
            var o = this,
                a = new to;
            o.selectValueMap = {}, o.ngModelCtrl = Ms, o.multiple = !1, o.unknownOption = ci(e.document.createElement("option")), o.hasEmptyOption = !1, o.emptyOption = void 0, o.renderUnknownOption = function(e) {
                var n = o.generateUnknownOptionValue(e);
                o.unknownOption.val(n), t.prepend(o.unknownOption), Zr(o.unknownOption, !0), t.val(n)
            }, o.updateUnknownOption = function(e) {
                var n = o.generateUnknownOptionValue(e);
                o.unknownOption.val(n), Zr(o.unknownOption, !0), t.val(n)
            }, o.generateUnknownOptionValue = function(e) {
                return "? " + at(e) + " ?"
            }, o.removeUnknownOption = function() {
                o.unknownOption.parent() && o.unknownOption.remove()
            }, o.selectEmptyOption = function() {
                o.emptyOption && (t.val(""), Zr(o.emptyOption, !0))
            }, o.unselectEmptyOption = function() {
                o.hasEmptyOption && Zr(o.emptyOption, !1)
            }, n.$on("$destroy", function() {
                o.renderUnknownOption = p
            }), o.readValue = function() {
                var e = t.val(),
                    n = e in o.selectValueMap ? o.selectValueMap[e] : e;
                return o.hasOption(n) ? n : null
            }, o.writeValue = function(e) {
                var n = t[0].options[t[0].selectedIndex];
                if (n && Zr(ci(n), !1), o.hasOption(e)) {
                    o.removeUnknownOption();
                    var r = at(e);
                    t.val(r in o.selectValueMap ? r : e);
                    var i = t[0].options[t[0].selectedIndex];
                    Zr(ci(i), !0)
                } else o.selectUnknownOrEmptyOption(e)
            }, o.addOption = function(e, t) {
                if (t[0].nodeType !== Hi) {
                    ve(e, '"option value"'), "" === e && (o.hasEmptyOption = !0, o.emptyOption = t);
                    var n = a.get(e) || 0;
                    a.set(e, n + 1), r()
                }
            }, o.removeOption = function(e) {
                var t = a.get(e);
                t && (1 === t ? (a["delete"](e), "" === e && (o.hasEmptyOption = !1, o.emptyOption = void 0)) : a.set(e, t - 1))
            }, o.hasOption = function(e) {
                return !!a.get(e)
            }, o.$hasEmptyOption = function() {
                return o.hasEmptyOption
            }, o.$isUnknownOptionSelected = function() {
                return t[0].options[0] === o.unknownOption[0]
            }, o.$isEmptyOptionSelected = function() {
                return o.hasEmptyOption && t[0].options[t[0].selectedIndex] === o.emptyOption[0]
            }, o.selectUnknownOrEmptyOption = function(e) {
                null == e && o.emptyOption ? (o.removeUnknownOption(), o.selectEmptyOption()) : o.unknownOption.parent().length ? o.updateUnknownOption(e) : o.renderUnknownOption(e)
            };
            var s = !1,
                c = !1;
            o.registerOption = function(e, t, n, a, s) {
                if (n.$attr.ngValue) {
                    var c, l = 0 / 0;
                    n.$observe("value", function(e) {
                        var n, r = t.prop("selected");
                        E(l) && (o.removeOption(c), delete o.selectValueMap[l], n = !0), l = at(e), c = e, o.selectValueMap[l] = e, o.addOption(e, t), t.attr("value", l), n && r && i()
                    })
                } else a ? n.$observe("value", function(e) {
                    o.readValue();
                    var n, r = t.prop("selected");
                    E(c) && (o.removeOption(c), n = !0), c = e, o.addOption(e, t), n && r && i()
                }) : s ? e.$watch(s, function(e, r) {
                    n.$set("value", e);
                    var a = t.prop("selected");
                    r !== e && o.removeOption(r), o.addOption(e, t), r && a && i()
                }) : o.addOption(n.value, t);
                n.$observe("disabled", function(e) {
                    ("true" === e || e && t.prop("selected")) && (o.multiple ? i(!0) : (o.ngModelCtrl.$setViewValue(null), o.ngModelCtrl.$render()))
                }), t.on("$destroy", function() {
                    var e = o.readValue(),
                        t = n.value;
                    o.removeOption(t), r(), (o.multiple && e && -1 !== e.indexOf(t) || e === t) && i(!0)
                })
            }
        }],
        ws = function() {
            function e(e, t, n, r) {
                var i = r[0],
                    a = r[1];
                if (!a) return void(i.registerOption = p);
                if (i.ngModelCtrl = a, t.on("change", function() {
                        i.removeUnknownOption(), e.$apply(function() {
                            a.$setViewValue(i.readValue())
                        })
                    }), n.multiple) {
                    i.multiple = !0, i.readValue = function() {
                        var e = [];
                        return o(t.find("option"), function(t) {
                            if (t.selected && !t.disabled) {
                                var n = t.value;
                                e.push(n in i.selectValueMap ? i.selectValueMap[n] : n)
                            }
                        }), e
                    }, i.writeValue = function(e) {
                        o(t.find("option"), function(t) {
                            var n = !!e && (F(e, t.value) || F(e, i.selectValueMap[t.value])),
                                r = t.selected;
                            n !== r && Zr(ci(t), n)
                        })
                    };
                    var s, c = 0 / 0;
                    e.$watch(function() {
                        c !== a.$viewValue || z(s, a.$viewValue) || (s = Ce(a.$viewValue), a.$render()), c = a.$viewValue
                    }), a.$isEmpty = function(e) {
                        return !e || 0 === e.length
                    }
                }
            }

            function t(e, t, n, r) {
                var i = r[1];
                if (i) {
                    var o = r[0];
                    i.$render = function() {
                        o.writeValue(i.$viewValue)
                    }
                }
            }
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Cs,
                priority: 1,
                link: {
                    pre: e,
                    post: t
                }
            }
        },
        xs = ["$interpolate", function(e) {
            return {
                restrict: "E",
                priority: 100,
                compile: function(t, n) {
                    var r, i;
                    return E(n.ngValue) || (E(n.value) ? r = e(n.value, !0) : (i = e(t.text(), !0), i || n.$set("value", t.text()))),
                        function(e, t, n) {
                            var o = "$selectController",
                                a = t.parent(),
                                s = a.data(o) || a.parent().data(o);
                            s && s.registerOption(e, t, n, r, i)
                        }
                }
            }
        }],
        As = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    r && (n.required = !0, r.$validators.required = function(e, t) {
                        return !n.required || !r.$isEmpty(t)
                    }, n.$observe("required", function() {
                        r.$validate()
                    }))
                }
            }
        },
        ks = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, i) {
                    if (i) {
                        var o, a = n.ngPattern || n.pattern;
                        n.$observe("pattern", function(e) {
                            if (C(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, e, te(t));
                            o = e || void 0, i.$validate()
                        }), i.$validators.pattern = function(e, t) {
                            return i.$isEmpty(t) || b(o) || o.test(t)
                        }
                    }
                }
            }
        },
        Ts = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var i = -1;
                        n.$observe("maxlength", function(e) {
                            var t = f(e);
                            i = bi(t) ? -1 : t, r.$validate()
                        }), r.$validators.maxlength = function(e, t) {
                            return 0 > i || r.$isEmpty(t) || t.length <= i
                        }
                    }
                }
            }
        },
        Ss = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var i = 0;
                        n.$observe("minlength", function(e) {
                            i = f(e) || 0, r.$validate()
                        }), r.$validators.minlength = function(e, t) {
                            return r.$isEmpty(t) || t.length >= i
                        }
                    }
                }
            }
        };
    return e.angular.bootstrap ? void(e.console && console.log("WARNING: Tried to load AngularJS more than once.")) : (he(), Ae(vi), vi.module("ngLocale", [], ["$provide", function(e) {
        function t(e) {
            e += "";
            var t = e.indexOf(".");
            return -1 == t ? 0 : e.length - t - 1
        }

        function n(e, n) {
            var r = n;
            void 0 === r && (r = Math.min(t(e), 3));
            var i = Math.pow(10, r),
                o = (e * i | 0) % i;
            return {
                v: r,
                f: o
            }
        }
        var r = {
            ZERO: "zero",
            ONE: "one",
            TWO: "two",
            FEW: "few",
            MANY: "many",
            OTHER: "other"
        };
        e.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function(e, t) {
                var i = 0 | e,
                    o = n(e, t);
                return 1 == i && 0 == o.v ? r.ONE : r.OTHER
            }
        })
    }]), void ci(function() {
        le(e.document, de)
    }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
    /**
     * @license AngularJS v1.6.9
     * (c) 2010-2018 Google, Inc. http://angularjs.org
     * License: MIT
     */
    function(e, t) {
        "use strict";

        function n(e, t, n) {
            if (!e) throw pe("areq", "Argument '{0}' is {1}", t || "?", n || "required");
            return e
        }

        function r(e, t) {
            return e || t ? e ? t ? (G(e) && (e = e.join(" ")), G(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
        }

        function i(e) {
            var t = {};
            return e && (e.to || e.from) && (t.to = e.to, t.from = e.from), t
        }

        function o(e, t, n) {
            var r = "";
            return e = G(e) ? e : e && ee(e) && e.length ? e.split(/\s+/) : [], K(e, function(e, i) {
                e && e.length > 0 && (r += i > 0 ? " " : "", r += n ? t + e : e + t)
            }), r
        }

        function a(e, t) {
            var n = e.indexOf(t);
            t >= 0 && e.splice(n, 1)
        }

        function s(e) {
            if (e instanceof ne) switch (e.length) {
                case 0:
                    return e;
                case 1:
                    if (e[0].nodeType === P) return e;
                    break;
                default:
                    return ne(c(e))
            }
            return e.nodeType === P ? ne(e) : void 0
        }

        function c(e) {
            if (!e[0]) return e;
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.nodeType === P) return n
            }
        }

        function l(e, t, n) {
            K(t, function(t) {
                e.addClass(t, n)
            })
        }

        function d(e, t, n) {
            K(t, function(t) {
                e.removeClass(t, n)
            })
        }

        function u(e) {
            return function(t, n) {
                n.addClass && (l(e, t, n.addClass), n.addClass = null), n.removeClass && (d(e, t, n.removeClass), n.removeClass = null)
            }
        }

        function m(e) {
            if (e = e || {}, !e.$$prepared) {
                var t = e.domOperation || re;
                e.domOperation = function() {
                    e.$$domOperationFired = !0, t(), t = re
                }, e.$$prepared = !0
            }
            return e
        }

        function f(e, t) {
            h(e, t), p(e, t)
        }

        function h(e, t) {
            t.from && (e.css(t.from), t.from = null)
        }

        function p(e, t) {
            t.to && (e.css(t.to), t.to = null)
        }

        function g(e, t, n) {
            var r = t.options || {},
                i = n.options || {},
                o = (r.addClass || "") + " " + (i.addClass || ""),
                a = (r.removeClass || "") + " " + (i.removeClass || ""),
                s = v(e.attr("class"), o, a);
            i.preparationClasses && (r.preparationClasses = w(i.preparationClasses, r.preparationClasses), delete i.preparationClasses);
            var c = r.domOperation !== re ? r.domOperation : null;
            return Y(r, i), c && (r.domOperation = c), r.addClass = s.addClass ? s.addClass : null, r.removeClass = s.removeClass ? s.removeClass : null, t.addClass = r.addClass, t.removeClass = r.removeClass, r
        }

        function v(e, t, n) {
            function r(e) {
                ee(e) && (e = e.split(" "));
                var t = {};
                return K(e, function(e) {
                    e.length && (t[e] = !0)
                }), t
            }
            var i = 1,
                o = -1,
                a = {};
            e = r(e), t = r(t), K(t, function(e, t) {
                a[t] = i
            }), n = r(n), K(n, function(e, t) {
                a[t] = a[t] === i ? null : o
            });
            var s = {
                addClass: "",
                removeClass: ""
            };
            return K(a, function(t, n) {
                var r, a;
                t === i ? (r = "addClass", a = !e[n] || e[n + V]) : t === o && (r = "removeClass", a = e[n] || e[n + L]), a && (s[r].length && (s[r] += " "), s[r] += n)
            }), s
        }

        function $(e) {
            return e instanceof ne ? e[0] : e
        }

        function b(e, t, n) {
            var r = "";
            t && (r = o(t, j, !0)), n.addClass && (r = w(r, o(n.addClass, L))), n.removeClass && (r = w(r, o(n.removeClass, V))), r.length && (n.preparationClasses = r, e.addClass(r))
        }

        function E(e, t) {
            t.preparationClasses && (e.removeClass(t.preparationClasses), t.preparationClasses = null), t.activeClasses && (e.removeClass(t.activeClasses), t.activeClasses = null)
        }

        function y(e, t) {
            var n = t ? "-" + t + "s" : "";
            return C(e, [fe, n]), [fe, n]
        }

        function M(e, t) {
            var n = t ? "paused" : "",
                r = I + le;
            return C(e, [r, n]), [r, n]
        }

        function C(e, t) {
            var n = t[0],
                r = t[1];
            e.style[n] = r
        }

        function w(e, t) {
            return e ? t ? e + " " + t : e : t
        }

        function x(e) {
            return [me, e + "s"]
        }

        function A(e, t) {
            var n = t ? ue : fe;
            return [n, e + "s"]
        }

        function k(e, t, n) {
            var r = Object.create(null),
                i = e.getComputedStyle(t) || {};
            return K(n, function(e, t) {
                var n = i[e];
                if (n) {
                    var o = n.charAt(0);
                    ("-" === o || "+" === o || o >= 0) && (n = T(n)), 0 === n && (n = null), r[t] = n
                }
            }), r
        }

        function T(e) {
            var t = 0,
                n = e.split(/\s*,\s*/);
            return K(n, function(e) {
                "s" === e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, t = t ? Math.max(e, t) : e
            }), t
        }

        function S(e) {
            return 0 === e || null != e
        }

        function N(e, t) {
            var n = O,
                r = e + "s";
            return t ? n += ie : r += " linear all", [n, r]
        }

        function D() {
            var e = Object.create(null);
            return {
                flush: function() {
                    e = Object.create(null)
                },
                count: function(t) {
                    var n = e[t];
                    return n ? n.total : 0
                },
                get: function(t) {
                    var n = e[t];
                    return n && n.value
                },
                put: function(t, n) {
                    e[t] ? e[t].total++ : e[t] = {
                        total: 1,
                        value: n
                    }
                }
            }
        }

        function _(e, t, n) {
            K(n, function(n) {
                e[n] = X(e[n]) ? e[n] : t.style.getPropertyValue(n)
            })
        }
        var O, H, I, R, P = 1,
            L = "-add",
            V = "-remove",
            j = "ng-",
            F = "-active",
            q = "-prepare",
            B = "ng-animate",
            U = "$$ngAnimateChildren",
            z = "";
        void 0 === e.ontransitionend && void 0 !== e.onwebkittransitionend ? (z = "-webkit-", O = "WebkitTransition", H = "webkitTransitionEnd transitionend") : (O = "transition", H = "transitionend"), void 0 === e.onanimationend && void 0 !== e.onwebkitanimationend ? (z = "-webkit-", I = "WebkitAnimation", R = "webkitAnimationEnd animationend") : (I = "animation", R = "animationend");
        var W, Y, K, G, X, J, Z, Q, ee, te, ne, re, ie = "Duration",
            oe = "Property",
            ae = "Delay",
            se = "TimingFunction",
            ce = "IterationCount",
            le = "PlayState",
            de = 9999,
            ue = I + ae,
            me = I + ie,
            fe = O + ae,
            he = O + ie,
            pe = t.$$minErr("ng"),
            ge = ["$$rAF", function(e) {
                function t(e) {
                    r = r.concat(e), n()
                }

                function n() {
                    if (r.length) {
                        for (var t = r.shift(), o = 0; o < t.length; o++) t[o]();
                        i || e(function() {
                            i || n()
                        })
                    }
                }
                var r, i;
                return r = t.queue = [], t.waitUntilQuiet = function(t) {
                    i && i(), i = e(function() {
                        i = null, t(), n()
                    })
                }, t
            }],
            ve = ["$interpolate", function(e) {
                return {
                    link: function(t, n, r) {
                        function i(e) {
                            e = "on" === e || "true" === e, n.data(U, e)
                        }
                        var o = r.ngAnimateChildren;
                        ee(o) && 0 === o.length ? n.data(U, !0) : (i(e(o)(t)), r.$observe("ngAnimateChildren", i))
                    }
                }
            }],
            $e = "$$animateCss",
            be = 1e3,
            Ee = 3,
            ye = 1.5,
            Me = {
                transitionDuration: he,
                transitionDelay: fe,
                transitionProperty: O + oe,
                animationDuration: me,
                animationDelay: ue,
                animationIterationCount: I + ce
            },
            Ce = {
                transitionDuration: he,
                transitionDelay: fe,
                animationDuration: me,
                animationDelay: ue
            },
            we = ["$animateProvider", function(e) {
                var t = D(),
                    n = D();
                this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function(e, r, s, c, l, d, g, v) {
                    function b(e, t) {
                        var n = "$$ngAnimateParentKey",
                            r = e.parentNode,
                            i = r[n] || (r[n] = ++q);
                        return i + "-" + e.getAttribute("class") + "-" + t
                    }

                    function E(n, r, i, o) {
                        var a = t.get(i);
                        return a || (a = k(e, n, o), "infinite" === a.animationIterationCount && (a.animationIterationCount = 1)), t.put(i, a), a
                    }

                    function w(i, a, s, c) {
                        var l;
                        if (t.count(s) > 0 && (l = n.get(s), !l)) {
                            var d = o(a, "-stagger");
                            r.addClass(i, d), l = k(e, i, c), l.animationDuration = Math.max(l.animationDuration, 0), l.transitionDuration = Math.max(l.transitionDuration, 0), r.removeClass(i, d), n.put(s, l)
                        }
                        return l || {}
                    }

                    function T(e) {
                        B.push(e), g.waitUntilQuiet(function() {
                            t.flush(), n.flush();
                            for (var e = l(), r = 0; r < B.length; r++) B[r](e);
                            B.length = 0
                        })
                    }

                    function D(e, t, n) {
                        var r = E(e, t, n, Me),
                            i = r.animationDelay,
                            o = r.transitionDelay;
                        return r.maxDelay = i && o ? Math.max(i, o) : i || o, r.maxDuration = Math.max(r.animationDuration * r.animationIterationCount, r.transitionDuration), r
                    }
                    var P = u(r),
                        q = 0,
                        B = [];
                    return function(e, n) {
                        function l() {
                            g()
                        }

                        function u() {
                            g(!0)
                        }

                        function g(t) {
                            if (!(X || Z && J)) {
                                X = !0, J = !1, U.$$skipPreparationClasses || r.removeClass(e, Me), r.removeClass(e, xe), M(Y, !1), y(Y, !1), K(le, function(e) {
                                    Y.style[e[0]] = ""
                                }), P(e, U), f(e, U), Object.keys(z).length && K(z, function(e, t) {
                                    e ? Y.style.setProperty(t, e) : Y.style.removeProperty(t)
                                }), U.onDone && U.onDone(), fe && fe.length && e.off(fe.join(" "), q);
                                var n = e.data($e);
                                n && (c.cancel(n[0].timer), e.removeData($e)), Q && Q.complete(!t)
                            }
                        }

                        function E(e) {
                            Ve.blockTransition && y(Y, e), Ve.blockKeyframeAnimation && M(Y, !!e)
                        }

                        function k() {
                            return Q = new s({
                                end: l,
                                cancel: u
                            }), T(re), g(), {
                                $$willAnimate: !1,
                                start: function() {
                                    return Q
                                },
                                end: l
                            }
                        }

                        function q(e) {
                            e.stopPropagation();
                            var t = e.originalEvent || e;
                            if (t.target === Y) {
                                var n = t.$manualTimeStamp || Date.now(),
                                    r = parseFloat(t.elapsedTime.toFixed(Ee));
                                Math.max(n - ce, 0) >= ne && r >= ie && (Z = !0, g())
                            }
                        }

                        function B() {
                            function t() {
                                if (!X) {
                                    if (E(!1), K(le, function(e) {
                                            var t = e[0],
                                                n = e[1];
                                            Y.style[t] = n
                                        }), P(e, U), r.addClass(e, xe), Ve.recalculateTimingStyles) {
                                        if (we = Y.getAttribute("class") + " " + Me, Te = b(Y, we), Pe = D(Y, we, Te), Le = Pe.maxDelay, te = Math.max(Le, 0), ie = Pe.maxDuration, 0 === ie) return void g();
                                        Ve.hasTransitions = Pe.transitionDuration > 0, Ve.hasAnimations = Pe.animationDuration > 0
                                    }
                                    if (Ve.applyAnimationDelay && (Le = "boolean" != typeof U.delay && S(U.delay) ? parseFloat(U.delay) : Le, te = Math.max(Le, 0), Pe.animationDelay = Le, je = A(Le, !0), le.push(je), Y.style[je[0]] = je[1]), ne = te * be, ae = ie * be, U.easing) {
                                        var t, i = U.easing;
                                        Ve.hasTransitions && (t = O + se, le.push([t, i]), Y.style[t] = i), Ve.hasAnimations && (t = I + se, le.push([t, i]), Y.style[t] = i)
                                    }
                                    Pe.transitionDuration && fe.push(H), Pe.animationDuration && fe.push(R), ce = Date.now();
                                    var o = ne + ye * ae,
                                        a = ce + o,
                                        s = e.data($e) || [],
                                        l = !0;
                                    if (s.length) {
                                        var d = s[0];
                                        l = a > d.expectedEndTime, l ? c.cancel(d.timer) : s.push(g)
                                    }
                                    if (l) {
                                        var u = c(n, o, !1);
                                        s[0] = {
                                            timer: u,
                                            expectedEndTime: a
                                        }, s.push(g), e.data($e, s)
                                    }
                                    fe.length && e.on(fe.join(" "), q), U.to && (U.cleanupStyles && _(z, Y, Object.keys(U.to)), p(e, U))
                                }
                            }

                            function n() {
                                var t = e.data($e);
                                if (t) {
                                    for (var n = 1; n < t.length; n++) t[n]();
                                    e.removeData($e)
                                }
                            }
                            if (!X) {
                                if (!Y.parentNode) return void g();
                                var i = function(e) {
                                        if (Z) J && e && (J = !1, g());
                                        else if (J = !e, Pe.animationDuration) {
                                            var t = M(Y, J);
                                            J ? le.push(t) : a(le, t)
                                        }
                                    },
                                    o = Ie > 0 && (Pe.transitionDuration && 0 === Se.transitionDuration || Pe.animationDuration && 0 === Se.animationDuration) && Math.max(Se.animationDelay, Se.transitionDelay);
                                o ? c(t, Math.floor(o * Ie * be), !1) : t(), ee.resume = function() {
                                    i(!0)
                                }, ee.pause = function() {
                                    i(!1)
                                }
                            }
                        }
                        var U = n || {};
                        U.$$prepared || (U = m(W(U)));
                        var z = {},
                            Y = $(e);
                        if (!Y || !Y.parentNode || !v.enabled()) return k();
                        var X, J, Z, Q, ee, te, ne, ie, ae, ce, le = [],
                            ue = e.attr("class"),
                            me = i(U),
                            fe = [];
                        if (0 === U.duration || !d.animations && !d.transitions) return k();
                        var he = U.event && G(U.event) ? U.event.join(" ") : U.event,
                            pe = he && U.structural,
                            ge = "",
                            ve = "";
                        pe ? ge = o(he, j, !0) : he && (ge = he), U.addClass && (ve += o(U.addClass, L)), U.removeClass && (ve.length && (ve += " "), ve += o(U.removeClass, V)), U.applyClassesEarly && ve.length && P(e, U);
                        var Me = [ge, ve].join(" ").trim(),
                            we = ue + " " + Me,
                            xe = o(Me, F),
                            Ae = me.to && Object.keys(me.to).length > 0,
                            ke = (U.keyframeStyle || "").length > 0;
                        if (!ke && !Ae && !Me) return k();
                        var Te, Se;
                        if (U.stagger > 0) {
                            var Ne = parseFloat(U.stagger);
                            Se = {
                                transitionDelay: Ne,
                                animationDelay: Ne,
                                transitionDuration: 0,
                                animationDuration: 0
                            }
                        } else Te = b(Y, we), Se = w(Y, Me, Te, Ce);
                        U.$$skipPreparationClasses || r.addClass(e, Me);
                        var De;
                        if (U.transitionStyle) {
                            var _e = [O, U.transitionStyle];
                            C(Y, _e), le.push(_e)
                        }
                        if (U.duration >= 0) {
                            De = Y.style[O].length > 0;
                            var Oe = N(U.duration, De);
                            C(Y, Oe), le.push(Oe)
                        }
                        if (U.keyframeStyle) {
                            var He = [I, U.keyframeStyle];
                            C(Y, He), le.push(He)
                        }
                        var Ie = Se ? U.staggerIndex >= 0 ? U.staggerIndex : t.count(Te) : 0,
                            Re = 0 === Ie;
                        Re && !U.skipBlocking && y(Y, de);
                        var Pe = D(Y, we, Te),
                            Le = Pe.maxDelay;
                        te = Math.max(Le, 0), ie = Pe.maxDuration;
                        var Ve = {};
                        if (Ve.hasTransitions = Pe.transitionDuration > 0, Ve.hasAnimations = Pe.animationDuration > 0, Ve.hasTransitionAll = Ve.hasTransitions && "all" === Pe.transitionProperty, Ve.applyTransitionDuration = Ae && (Ve.hasTransitions && !Ve.hasTransitionAll || Ve.hasAnimations && !Ve.hasTransitions), Ve.applyAnimationDuration = U.duration && Ve.hasAnimations, Ve.applyTransitionDelay = S(U.delay) && (Ve.applyTransitionDuration || Ve.hasTransitions), Ve.applyAnimationDelay = S(U.delay) && Ve.hasAnimations, Ve.recalculateTimingStyles = ve.length > 0, (Ve.applyTransitionDuration || Ve.applyAnimationDuration) && (ie = U.duration ? parseFloat(U.duration) : ie, Ve.applyTransitionDuration && (Ve.hasTransitions = !0, Pe.transitionDuration = ie, De = Y.style[O + oe].length > 0, le.push(N(ie, De))), Ve.applyAnimationDuration && (Ve.hasAnimations = !0, Pe.animationDuration = ie, le.push(x(ie)))), 0 === ie && !Ve.recalculateTimingStyles) return k();
                        if (null != U.delay) {
                            var je;
                            "boolean" != typeof U.delay && (je = parseFloat(U.delay), te = Math.max(je, 0)), Ve.applyTransitionDelay && le.push(A(je)), Ve.applyAnimationDelay && le.push(A(je, !0))
                        }
                        return null == U.duration && Pe.transitionDuration > 0 && (Ve.recalculateTimingStyles = Ve.recalculateTimingStyles || Re), ne = te * be, ae = ie * be, U.skipBlocking || (Ve.blockTransition = Pe.transitionDuration > 0, Ve.blockKeyframeAnimation = Pe.animationDuration > 0 && Se.animationDelay > 0 && 0 === Se.animationDuration), U.from && (U.cleanupStyles && _(z, Y, Object.keys(U.from)), h(e, U)), Ve.blockTransition || Ve.blockKeyframeAnimation ? E(ie) : U.skipBlocking || y(Y, !1), {
                            $$willAnimate: !0,
                            end: l,
                            start: function() {
                                return X ? void 0 : (ee = {
                                    end: l,
                                    cancel: u,
                                    resume: null,
                                    pause: null
                                }, Q = new s(ee), T(B), Q)
                            }
                        }
                    }
                }]
            }],
            xe = ["$$animationProvider", function(e) {
                function t(e) {
                    return e.parentNode && 11 === e.parentNode.nodeType
                }
                e.drivers.push("$$animateCssDriver");
                var n = "ng-animate-shim",
                    r = "ng-anchor",
                    i = "ng-anchor-out",
                    o = "ng-anchor-in";
                this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(e, a, s, c, l, d, u) {
                    function m(e) {
                        return e.replace(/\bng-\S+\b/g, "")
                    }

                    function f(e, t) {
                        return ee(e) && (e = e.split(" ")), ee(t) && (t = t.split(" ")), e.filter(function(e) {
                            return -1 === t.indexOf(e)
                        }).join(" ")
                    }

                    function h(t, a, c) {
                        function l(e) {
                            var t = {},
                                n = $(e).getBoundingClientRect();
                            return K(["width", "height", "top", "left"], function(e) {
                                var r = n[e];
                                switch (e) {
                                    case "top":
                                        r += v.scrollTop;
                                        break;
                                    case "left":
                                        r += v.scrollLeft
                                }
                                t[e] = Math.floor(r) + "px"
                            }), t
                        }

                        function d() {
                            var t = e(g, {
                                addClass: i,
                                delay: !0,
                                from: l(a)
                            });
                            return t.$$willAnimate ? t : null
                        }

                        function u(e) {
                            return e.attr("class") || ""
                        }

                        function h() {
                            var t = m(u(c)),
                                n = f(t, b),
                                r = f(b, t),
                                a = e(g, {
                                    to: l(c),
                                    addClass: o + " " + n,
                                    removeClass: i + " " + r,
                                    delay: !0
                                });
                            return a.$$willAnimate ? a : null
                        }

                        function p() {
                            g.remove(), a.removeClass(n), c.removeClass(n)
                        }
                        var g = ne($(a).cloneNode(!0)),
                            b = m(u(g));
                        a.addClass(n), c.addClass(n), g.addClass(r), E.append(g);
                        var y, M = d();
                        if (!M && (y = h(), !y)) return p();
                        var C = M || y;
                        return {
                            start: function() {
                                function e() {
                                    n && n.end()
                                }
                                var t, n = C.start();
                                return n.done(function() {
                                    return n = null, !y && (y = h()) ? (n = y.start(), n.done(function() {
                                        n = null, p(), t.complete()
                                    }), n) : (p(), void t.complete())
                                }), t = new s({
                                    end: e,
                                    cancel: e
                                })
                            }
                        }
                    }

                    function p(e, t, n, r) {
                        var i = g(e, re),
                            o = g(t, re),
                            a = [];
                        return K(r, function(e) {
                            var t = e.out,
                                r = e["in"],
                                i = h(n, t, r);
                            i && a.push(i)
                        }), i || o || 0 !== a.length ? {
                            start: function() {
                                function e() {
                                    K(t, function(e) {
                                        e.end()
                                    })
                                }
                                var t = [];
                                i && t.push(i.start()), o && t.push(o.start()), K(a, function(e) {
                                    t.push(e.start())
                                });
                                var n = new s({
                                    end: e,
                                    cancel: e
                                });
                                return s.all(t, function(e) {
                                    n.complete(e)
                                }), n
                            }
                        } : void 0
                    }

                    function g(t) {
                        var n = t.element,
                            r = t.options || {};
                        t.structural && (r.event = t.event, r.structural = !0, r.applyClassesEarly = !0, "leave" === t.event && (r.onDone = r.domOperation)), r.preparationClasses && (r.event = w(r.event, r.preparationClasses));
                        var i = e(n, r);
                        return i.$$willAnimate ? i : null
                    }
                    if (!l.animations && !l.transitions) return re;
                    var v = u[0].body,
                        b = $(c),
                        E = ne(t(b) || v.contains(b) ? b : v);
                    return function(e) {
                        return e.from && e.to ? p(e.from, e.to, e.classes, e.anchors) : g(e)
                    }
                }]
            }],
            Ae = ["$animateProvider", function(e) {
                this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(t, n, r) {
                    function i(n) {
                        n = G(n) ? n : n.split(" ");
                        for (var r = [], i = {}, o = 0; o < n.length; o++) {
                            var a = n[o],
                                s = e.$$registeredAnimations[a];
                            s && !i[a] && (r.push(t.get(s)), i[a] = !0)
                        }
                        return r
                    }
                    var o = u(r);
                    return function(e, t, r, a) {
                        function s() {
                            a.domOperation(), o(e, a)
                        }

                        function c() {
                            h = !0, s(), f(e, a)
                        }

                        function l(e, t, r, i, o) {
                            var a;
                            switch (r) {
                                case "animate":
                                    a = [t, i.from, i.to, o];
                                    break;
                                case "setClass":
                                    a = [t, v, $, o];
                                    break;
                                case "addClass":
                                    a = [t, v, o];
                                    break;
                                case "removeClass":
                                    a = [t, $, o];
                                    break;
                                default:
                                    a = [t, o]
                            }
                            a.push(i);
                            var s = e.apply(e, a);
                            if (s)
                                if (Z(s.start) && (s = s.start()), s instanceof n) s.done(o);
                                else if (Z(s)) return s;
                            return re
                        }

                        function d(e, t, r, i, o) {
                            var a = [];
                            return K(i, function(i) {
                                var s = i[o];
                                s && a.push(function() {
                                    var i, o, a = !1,
                                        c = function(e) {
                                            a || (a = !0, (o || re)(e), i.complete(!e))
                                        };
                                    return i = new n({
                                        end: function() {
                                            c()
                                        },
                                        cancel: function() {
                                            c(!0)
                                        }
                                    }), o = l(s, e, t, r, function(e) {
                                        var t = e === !1;
                                        c(t)
                                    }), i
                                })
                            }), a
                        }

                        function u(e, t, r, i, o) {
                            var a = d(e, t, r, i, o);
                            if (0 === a.length) {
                                var s, c;
                                "beforeSetClass" === o ? (s = d(e, "removeClass", r, i, "beforeRemoveClass"), c = d(e, "addClass", r, i, "beforeAddClass")) : "setClass" === o && (s = d(e, "removeClass", r, i, "removeClass"), c = d(e, "addClass", r, i, "addClass")), s && (a = a.concat(s)), c && (a = a.concat(c))
                            }
                            if (0 !== a.length) return function(e) {
                                var t = [];
                                return a.length && K(a, function(e) {
                                        t.push(e())
                                    }), t.length ? n.all(t, e) : e(),
                                    function(e) {
                                        K(t, function(t) {
                                            e ? t.cancel() : t.end()
                                        })
                                    }
                            }
                        }
                        var h = !1;
                        3 === arguments.length && Q(r) && (a = r, r = null), a = m(a), r || (r = e.attr("class") || "", a.addClass && (r += " " + a.addClass), a.removeClass && (r += " " + a.removeClass));
                        var p, g, v = a.addClass,
                            $ = a.removeClass,
                            b = i(r);
                        if (b.length) {
                            var E, y;
                            "leave" === t ? (y = "leave", E = "afterLeave") : (y = "before" + t.charAt(0).toUpperCase() + t.substr(1), E = t), "enter" !== t && "move" !== t && (p = u(e, t, a, b, y)), g = u(e, t, a, b, E)
                        }
                        if (p || g) {
                            var M;
                            return {
                                $$willAnimate: !0,
                                end: function() {
                                    return M ? M.end() : (c(), M = new n, M.complete(!0)), M
                                },
                                start: function() {
                                    function e(e) {
                                        c(e), M.complete(e)
                                    }

                                    function t(t) {
                                        h || ((r || re)(t), e(t))
                                    }
                                    if (M) return M;
                                    M = new n;
                                    var r, i = [];
                                    return p && i.push(function(e) {
                                        r = p(e)
                                    }), i.length ? i.push(function(e) {
                                        s(), e(!0)
                                    }) : s(), g && i.push(function(e) {
                                        r = g(e)
                                    }), M.setHost({
                                        end: function() {
                                            t()
                                        },
                                        cancel: function() {
                                            t(!0)
                                        }
                                    }), n.chain(i, e), M
                                }
                            }
                        }
                    }
                }]
            }],
            ke = ["$$animationProvider", function(e) {
                e.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function(e, t) {
                    function n(t) {
                        var n = t.element,
                            r = t.event,
                            i = t.options,
                            o = t.classes;
                        return e(n, r, o, i)
                    }
                    return function(e) {
                        if (e.from && e.to) {
                            var r = n(e.from),
                                i = n(e.to);
                            if (!r && !i) return;
                            return {
                                start: function() {
                                    function e() {
                                        return function() {
                                            K(o, function(e) {
                                                e.end()
                                            })
                                        }
                                    }

                                    function n(e) {
                                        a.complete(e)
                                    }
                                    var o = [];
                                    r && o.push(r.start()), i && o.push(i.start()), t.all(o, n);
                                    var a = new t({
                                        end: e(),
                                        cancel: e()
                                    });
                                    return a
                                }
                            }
                        }
                        return n(e)
                    }
                }]
            }],
            Te = "data-ng-animate",
            Se = "$ngAnimatePin",
            Ne = ["$animateProvider", function(t) {
                function r(e) {
                    if (!e) return null;
                    var t = e.split(h),
                        n = Object.create(null);
                    return K(t, function(e) {
                        n[e] = !0
                    }), n
                }

                function i(e, t) {
                    if (e && t) {
                        var n = r(t);
                        return e.split(h).some(function(e) {
                            return n[e]
                        })
                    }
                }

                function o(e, t, n) {
                    return p[e].some(function(e) {
                        return e(t, n)
                    })
                }

                function a(e, t) {
                    var n = (e.addClass || "").length > 0,
                        r = (e.removeClass || "").length > 0;
                    return t ? n && r : n || r
                }
                var l = 1,
                    d = 2,
                    h = " ",
                    p = this.rules = {
                        skip: [],
                        cancel: [],
                        join: []
                    };
                p.join.push(function(e, t) {
                    return !e.structural && a(e)
                }), p.skip.push(function(e, t) {
                    return !e.structural && !a(e)
                }), p.skip.push(function(e, t) {
                    return "leave" === t.event && e.structural
                }), p.skip.push(function(e, t) {
                    return t.structural && t.state === d && !e.structural
                }), p.cancel.push(function(e, t) {
                    return t.structural && e.structural
                }), p.cancel.push(function(e, t) {
                    return t.state === d && e.structural
                }), p.cancel.push(function(e, t) {
                    if (t.structural) return !1;
                    var n = e.addClass,
                        r = e.removeClass,
                        o = t.addClass,
                        a = t.removeClass;
                    return te(n) && te(r) || te(o) && te(a) ? !1 : i(n, a) || i(r, o)
                }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$Map", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", "$$isDocumentHidden", function(r, i, h, p, v, y, M, C, w, x, A) {
                    function k() {
                        var e = !1;
                        return function(t) {
                            e ? t() : i.$$postDigest(function() {
                                e = !0, t()
                            })
                        }
                    }

                    function T(e, t) {
                        return g(e, t, {})
                    }

                    function S(e, t, n) {
                        var r = [],
                            i = q[n];
                        return i && K(i, function(i) {
                            ae.call(i.node, t) ? r.push(i.callback) : "leave" === n && ae.call(i.node, e) && r.push(i.callback)
                        }), r
                    }

                    function N(e, t, n) {
                        var r = c(t);
                        return e.filter(function(e) {
                            var t = e.node === r && (!n || e.callback === n);
                            return !t
                        })
                    }

                    function D(e, t) {
                        "close" !== e || t.parentNode || se.off(t)
                    }

                    function _(e, t, n) {
                        function c(e, t, n, i) {
                            x(function() {
                                var e = S(C, v, t);
                                e.length ? r(function() {
                                    K(e, function(e) {
                                        e(p, n, i)
                                    }), D(n, v)
                                }) : D(n, v)
                            }), e.progress(t, n, i)
                        }

                        function u(e) {
                            E(p, h), oe(p, h), f(p, h), h.domOperation(), w.complete(!e)
                        }
                        var h = W(n),
                            p = s(e),
                            v = $(p),
                            C = v && v.parentNode;
                        h = m(h);
                        var w = new M,
                            x = k();
                        if (G(h.addClass) && (h.addClass = h.addClass.join(" ")), h.addClass && !ee(h.addClass) && (h.addClass = null), G(h.removeClass) && (h.removeClass = h.removeClass.join(" ")), h.removeClass && !ee(h.removeClass) && (h.removeClass = null), h.from && !Q(h.from) && (h.from = null), h.to && !Q(h.to) && (h.to = null), !(j && v && re(v, t, n) && ie(v, h))) return u(), w;
                        var N = ["enter", "move", "leave"].indexOf(t) >= 0,
                            _ = A(),
                            P = _ || V.get(v),
                            F = !P && L.get(v) || {},
                            q = !!F.state;
                        if (P || q && F.state === l || (P = !I(v, C, t)), P) return _ && c(w, t, "start"), u(), _ && c(w, t, "close"), w;
                        N && O(v);
                        var B = {
                            structural: N,
                            element: p,
                            event: t,
                            addClass: h.addClass,
                            removeClass: h.removeClass,
                            close: u,
                            options: h,
                            runner: w
                        };
                        if (q) {
                            var U = o("skip", B, F);
                            if (U) return F.state === d ? (u(), w) : (g(p, F, B), F.runner);
                            var z = o("cancel", B, F);
                            if (z)
                                if (F.state === d) F.runner.end();
                                else {
                                    if (!F.structural) return g(p, F, B), F.runner;
                                    F.close()
                                }
                            else {
                                var Y = o("join", B, F);
                                if (Y) {
                                    if (F.state !== d) return b(p, N ? t : null, h), t = B.event = F.event, h = g(p, F, B), F.runner;
                                    T(p, B)
                                }
                            }
                        } else T(p, B);
                        var X = B.structural;
                        if (X || (X = "animate" === B.event && Object.keys(B.options.to || {}).length > 0 || a(B)), !X) return u(), H(v), w;
                        var J = (F.counter || 0) + 1;
                        return B.counter = J, R(v, l, B), i.$$postDigest(function() {
                            p = s(e);
                            var n = L.get(v),
                                r = !n;
                            n = n || {};
                            var i = p.parent() || [],
                                o = i.length > 0 && ("animate" === n.event || n.structural || a(n));
                            if (r || n.counter !== J || !o) return r && (oe(p, h), f(p, h)), (r || N && n.event !== t) && (h.domOperation(), w.end()), void(o || H(v));
                            t = !n.structural && a(n, !0) ? "setClass" : n.event, R(v, d);
                            var l = y(p, t, n.options);
                            w.setHost(l), c(w, t, "start", {}), l.done(function(e) {
                                u(!e);
                                var n = L.get(v);
                                n && n.counter === J && H(v), c(w, t, "close", {})
                            })
                        }), w
                    }

                    function O(e) {
                        var t = e.querySelectorAll("[" + Te + "]");
                        K(t, function(e) {
                            var t = parseInt(e.getAttribute(Te), 10),
                                n = L.get(e);
                            if (n) switch (t) {
                                case d:
                                    n.runner.end();
                                case l:
                                    L["delete"](e)
                            }
                        })
                    }

                    function H(e) {
                        e.removeAttribute(Te), L["delete"](e)
                    }

                    function I(e, t, n) {
                        var r, i = p[0].body,
                            o = $(h),
                            a = e === i || "HTML" === e.nodeName,
                            s = e === o,
                            c = !1,
                            l = V.get(e),
                            d = ne.data(e, Se);
                        for (d && (t = $(d)); t && (s || (s = t === o), t.nodeType === P);) {
                            var u = L.get(t) || {};
                            if (!c) {
                                var m = V.get(t);
                                if (m === !0 && l !== !1) {
                                    l = !0;
                                    break
                                }
                                m === !1 && (l = !1), c = u.structural
                            }
                            if (te(r) || r === !0) {
                                var f = ne.data(t, U);
                                X(f) && (r = f)
                            }
                            if (c && r === !1) break;
                            if (a || (a = t === i), a && s) break;
                            t = s || !(d = ne.data(t, Se)) ? t.parentNode : $(d)
                        }
                        var g = (!c || r) && l !== !0;
                        return g && s && a
                    }

                    function R(e, t, n) {
                        n = n || {}, n.state = t, e.setAttribute(Te, t);
                        var r = L.get(e),
                            i = r ? Y(r, n) : n;
                        L.set(e, i)
                    }
                    var L = new v,
                        V = new v,
                        j = null,
                        F = i.$watch(function() {
                            return 0 === C.totalPendingRequests
                        }, function(e) {
                            e && (F(), i.$$postDigest(function() {
                                i.$$postDigest(function() {
                                    null === j && (j = !0)
                                })
                            }))
                        }),
                        q = Object.create(null),
                        B = t.customFilter(),
                        z = t.classNameFilter(),
                        Z = function() {
                            return !0
                        },
                        re = B || Z,
                        ie = z ? function(e, t) {
                            var n = [e.getAttribute("class"), t.addClass, t.removeClass].join(" ");
                            return z.test(n)
                        } : Z,
                        oe = u(w),
                        ae = e.Node.prototype.contains || function(e) {
                            return this === e || !!(16 & this.compareDocumentPosition(e))
                        },
                        se = {
                            on: function(e, t, n) {
                                var r = c(t);
                                q[e] = q[e] || [], q[e].push({
                                    node: r,
                                    callback: n
                                }), ne(t).on("$destroy", function() {
                                    var i = L.get(r);
                                    i || se.off(e, t, n)
                                })
                            },
                            off: function(e, t, n) {
                                if (1 !== arguments.length || ee(arguments[0])) {
                                    var r = q[e];
                                    r && (q[e] = 1 === arguments.length ? null : N(r, t, n))
                                } else {
                                    t = arguments[0];
                                    for (var i in q) q[i] = N(q[i], t)
                                }
                            },
                            pin: function(e, t) {
                                n(J(e), "element", "not an element"), n(J(t), "parentElement", "not an element"), e.data(Se, t)
                            },
                            push: function(e, t, n, r) {
                                return n = n || {}, n.domOperation = r, _(e, t, n)
                            },
                            enabled: function(e, t) {
                                var n = arguments.length;
                                if (0 === n) t = !!j;
                                else {
                                    var r = J(e);
                                    if (r) {
                                        var i = $(e);
                                        1 === n ? t = !V.get(i) : V.set(i, !t)
                                    } else t = j = !!e
                                }
                                return t
                            }
                        };
                    return se
                }]
            }],
            De = ["$animateProvider", function(e) {
                function t(e, t) {
                    e.data(s, t)
                }

                function n(e) {
                    e.removeData(s)
                }

                function i(e) {
                    return e.data(s)
                }
                var o = "ng-animate-ref",
                    a = this.drivers = [],
                    s = "$$animationRunner";
                this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$Map", "$$rAFScheduler", function(e, s, c, l, d, h) {
                    function p(e) {
                        function t(e) {
                            if (e.processed) return e;
                            e.processed = !0;
                            var n = e.domNode,
                                r = n.parentNode;
                            o.set(n, e);
                            for (var a; r;) {
                                if (a = o.get(r)) {
                                    a.processed || (a = t(a));
                                    break
                                }
                                r = r.parentNode
                            }
                            return (a || i).children.push(e), e
                        }

                        function n(e) {
                            var t, n = [],
                                r = [];
                            for (t = 0; t < e.children.length; t++) r.push(e.children[t]);
                            var i = r.length,
                                o = 0,
                                a = [];
                            for (t = 0; t < r.length; t++) {
                                var s = r[t];
                                0 >= i && (i = o, o = 0, n.push(a), a = []), a.push(s.fn), s.children.forEach(function(e) {
                                    o++, r.push(e)
                                }), i--
                            }
                            return a.length && n.push(a), n
                        }
                        var r, i = {
                                children: []
                            },
                            o = new d;
                        for (r = 0; r < e.length; r++) {
                            var a = e[r];
                            o.set(a.domNode, e[r] = {
                                domNode: a.domNode,
                                fn: a.fn,
                                children: []
                            })
                        }
                        for (r = 0; r < e.length; r++) t(e[r]);
                        return n(i)
                    }
                    var g = [],
                        v = u(e);
                    return function(d, u, b) {
                        function E(e) {
                            var t = "[" + o + "]",
                                n = e.hasAttribute(o) ? [e] : e.querySelectorAll(t),
                                r = [];
                            return K(n, function(e) {
                                var t = e.getAttribute(o);
                                t && t.length && r.push(e)
                            }), r
                        }

                        function y(e) {
                            var t = [],
                                n = {};
                            K(e, function(e, r) {
                                var i = e.element,
                                    a = $(i),
                                    s = e.event,
                                    c = ["enter", "move"].indexOf(s) >= 0,
                                    l = e.structural ? E(a) : [];
                                if (l.length) {
                                    var d = c ? "to" : "from";
                                    K(l, function(e) {
                                        var t = e.getAttribute(o);
                                        n[t] = n[t] || {}, n[t][d] = {
                                            animationID: r,
                                            element: ne(e)
                                        }
                                    })
                                } else t.push(e)
                            });
                            var r = {},
                                i = {};
                            return K(n, function(n, o) {
                                var a = n.from,
                                    s = n.to;
                                if (!a || !s) {
                                    var c = a ? a.animationID : s.animationID,
                                        l = c.toString();
                                    return void(r[l] || (r[l] = !0, t.push(e[c])))
                                }
                                var d = e[a.animationID],
                                    u = e[s.animationID],
                                    m = a.animationID.toString();
                                if (!i[m]) {
                                    var f = i[m] = {
                                        structural: !0,
                                        beforeStart: function() {
                                            d.beforeStart(), u.beforeStart()
                                        },
                                        close: function() {
                                            d.close(), u.close()
                                        },
                                        classes: M(d.classes, u.classes),
                                        from: d,
                                        to: u,
                                        anchors: []
                                    };
                                    f.classes.length ? t.push(f) : (t.push(d), t.push(u))
                                }
                                i[m].anchors.push({
                                    out: a.element,
                                    "in": s.element
                                })
                            }), t
                        }

                        function M(e, t) {
                            e = e.split(" "), t = t.split(" ");
                            for (var n = [], r = 0; r < e.length; r++) {
                                var i = e[r];
                                if ("ng-" !== i.substring(0, 3))
                                    for (var o = 0; o < t.length; o++)
                                        if (i === t[o]) {
                                            n.push(i);
                                            break
                                        }
                            }
                            return n.join(" ")
                        }

                        function C(e) {
                            for (var t = a.length - 1; t >= 0; t--) {
                                var n = a[t],
                                    r = c.get(n),
                                    i = r(e);
                                if (i) return i
                            }
                        }

                        function w() {
                            d.addClass(B), D && e.addClass(d, D), _ && (e.removeClass(d, _), _ = null)
                        }

                        function x(e, t) {
                            function n(e) {
                                var n = i(e);
                                n && n.setHost(t)
                            }
                            e.from && e.to ? (n(e.from.element), n(e.to.element)) : n(e.element)
                        }

                        function A() {
                            var e = i(d);
                            !e || "leave" === u && b.$$domOperationFired || e.end()
                        }

                        function k(t) {
                            d.off("$destroy", A), n(d), v(d, b), f(d, b), b.domOperation(), D && e.removeClass(d, D), d.removeClass(B), S.complete(!t)
                        }
                        b = m(b);
                        var T = ["enter", "move", "leave"].indexOf(u) >= 0,
                            S = new l({
                                end: function() {
                                    k()
                                },
                                cancel: function() {
                                    k(!0)
                                }
                            });
                        if (!a.length) return k(), S;
                        t(d, S);
                        var N = r(d.attr("class"), r(b.addClass, b.removeClass)),
                            D = b.tempClasses;
                        D && (N += " " + D, b.tempClasses = null);
                        var _;
                        return T && (_ = "ng-" + u + q, e.addClass(d, _)), g.push({
                            element: d,
                            classes: N,
                            event: u,
                            structural: T,
                            options: b,
                            beforeStart: w,
                            close: k
                        }), d.on("$destroy", A), g.length > 1 ? S : (s.$$postDigest(function() {
                            var e = [];
                            K(g, function(t) {
                                i(t.element) ? e.push(t) : t.close()
                            }), g.length = 0;
                            var t = y(e),
                                n = [];
                            K(t, function(e) {
                                n.push({
                                    domNode: $(e.from ? e.from.element : e.element),
                                    fn: function() {
                                        e.beforeStart();
                                        var t, n = e.close,
                                            r = e.anchors ? e.from.element || e.to.element : e.element;
                                        if (i(r)) {
                                            var o = C(e);
                                            o && (t = o.start)
                                        }
                                        if (t) {
                                            var a = t();
                                            a.done(function(e) {
                                                n(!e)
                                            }), x(e, a)
                                        } else n()
                                    }
                                })
                            }), h(p(n))
                        }), S)
                    }
                }]
            }],
            _e = ["$animate", "$rootScope", function(e, t) {
                return {
                    restrict: "A",
                    transclude: "element",
                    terminal: !0,
                    priority: 600,
                    link: function(t, n, r, i, o) {
                        var a, s;
                        t.$watchCollection(r.ngAnimateSwap || r["for"], function(r) {
                            a && e.leave(a), s && (s.$destroy(), s = null), (r || 0 === r) && (s = t.$new(), o(s, function(t) {
                                a = t, e.enter(t, null, n)
                            }))
                        })
                    }
                }
            }];
        t.module("ngAnimate", [], function() {
            re = t.noop, W = t.copy, Y = t.extend, ne = t.element, K = t.forEach, G = t.isArray, ee = t.isString, Q = t.isObject, te = t.isUndefined, X = t.isDefined, Z = t.isFunction, J = t.isElement
        }).info({
            angularVersion: "1.6.9"
        }).directive("ngAnimateSwap", _e).directive("ngAnimateChildren", ve).factory("$$rAFScheduler", ge).provider("$$animateQueue", Ne).provider("$$animation", De).provider("$animateCss", we).provider("$$animateCssDriver", xe).provider("$$animateJs", Ae).provider("$$animateJsDriver", ke)
    }(window, window.angular),
    /**
     * @license AngularJS v1.6.9
     * (c) 2010-2018 Google, Inc. http://angularjs.org
     * License: MIT
     */
    function(e, t) {
        "use strict";

        function n() {
            function e(e, t, r, i) {
                return function(a, s, c) {
                    var l = c.$normalize(t);
                    !n[l] || o(s, r) || c[l] || a.$watch(c[e], function(e) {
                        e = i ? !e : !!e, s.attr(t, e)
                    })
                }
            }
            var n = {
                ariaHidden: !0,
                ariaChecked: !0,
                ariaReadonly: !0,
                ariaDisabled: !0,
                ariaRequired: !0,
                ariaInvalid: !0,
                ariaValue: !0,
                tabindex: !0,
                bindKeydown: !0,
                bindRoleForClick: !0
            };
            this.config = function(e) {
                n = t.extend(n, e)
            }, this.$get = function() {
                return {
                    config: function(e) {
                        return n[e]
                    },
                    $$watchExpr: e
                }
            }
        }
        var r = t.module("ngAria", ["ng"]).info({
                angularVersion: "1.6.9"
            }).provider("$aria", n),
            i = ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT", "DETAILS", "SUMMARY"],
            o = function(e, t) {
                return -1 !== t.indexOf(e[0].nodeName) ? !0 : void 0
            };
        r.directive("ngShow", ["$aria", function(e) {
            return e.$$watchExpr("ngShow", "aria-hidden", [], !0)
        }]).directive("ngHide", ["$aria", function(e) {
            return e.$$watchExpr("ngHide", "aria-hidden", [], !1)
        }]).directive("ngValue", ["$aria", function(e) {
            return e.$$watchExpr("ngValue", "aria-checked", i, !1)
        }]).directive("ngChecked", ["$aria", function(e) {
            return e.$$watchExpr("ngChecked", "aria-checked", i, !1)
        }]).directive("ngReadonly", ["$aria", function(e) {
            return e.$$watchExpr("ngReadonly", "aria-readonly", i, !1)
        }]).directive("ngRequired", ["$aria", function(e) {
            return e.$$watchExpr("ngRequired", "aria-required", i, !1)
        }]).directive("ngModel", ["$aria", function(e) {
            function t(t, n, r, a) {
                return e.config(n) && !r.attr(t) && (a || !o(r, i))
            }

            function n(e, t) {
                return !t.attr("role") && t.attr("type") === e && !o(t, i)
            }

            function r(e, t) {
                var n = e.type,
                    r = e.role;
                return "checkbox" === (n || r) || "menuitemcheckbox" === r ? "checkbox" : "radio" === (n || r) || "menuitemradio" === r ? "radio" : "range" === n || "progressbar" === r || "slider" === r ? "range" : ""
            }
            return {
                restrict: "A",
                require: "ngModel",
                priority: 200,
                compile: function(i, o) {
                    var a = r(o, i);
                    return {
                        post: function(r, i, o, s) {
                            function c() {
                                return s.$modelValue
                            }

                            function l(e) {
                                var t = o.value == s.$viewValue;
                                i.attr("aria-checked", t)
                            }

                            function d() {
                                i.attr("aria-checked", !s.$isEmpty(s.$viewValue))
                            }
                            var u = t("tabindex", "tabindex", i, !1);
                            switch (a) {
                                case "radio":
                                case "checkbox":
                                    n(a, i) && i.attr("role", a), t("aria-checked", "ariaChecked", i, !1) && r.$watch(c, "radio" === a ? l : d), u && i.attr("tabindex", 0);
                                    break;
                                case "range":
                                    if (n(a, i) && i.attr("role", "slider"), e.config("ariaValue")) {
                                        var m = !i.attr("aria-valuemin") && (o.hasOwnProperty("min") || o.hasOwnProperty("ngMin")),
                                            f = !i.attr("aria-valuemax") && (o.hasOwnProperty("max") || o.hasOwnProperty("ngMax")),
                                            h = !i.attr("aria-valuenow");
                                        m && o.$observe("min", function(e) {
                                            i.attr("aria-valuemin", e)
                                        }), f && o.$observe("max", function(e) {
                                            i.attr("aria-valuemax", e)
                                        }), h && r.$watch(c, function(e) {
                                            i.attr("aria-valuenow", e)
                                        })
                                    }
                                    u && i.attr("tabindex", 0)
                            }!o.hasOwnProperty("ngRequired") && s.$validators.required && t("aria-required", "ariaRequired", i, !1) && o.$observe("required", function() {
                                i.attr("aria-required", !!o.required)
                            }), t("aria-invalid", "ariaInvalid", i, !0) && r.$watch(function() {
                                return s.$invalid
                            }, function(e) {
                                i.attr("aria-invalid", !!e)
                            })
                        }
                    }
                }
            }
        }]).directive("ngDisabled", ["$aria", function(e) {
            return e.$$watchExpr("ngDisabled", "aria-disabled", i, !1)
        }]).directive("ngMessages", function() {
            return {
                restrict: "A",
                require: "?ngMessages",
                link: function(e, t, n, r) {
                    t.attr("aria-live") || t.attr("aria-live", "assertive")
                }
            }
        }).directive("ngClick", ["$aria", "$parse", function(e, t) {
            return {
                restrict: "A",
                compile: function(n, r) {
                    var a = t(r.ngClick);
                    return function(t, n, r) {
                        o(n, i) || (e.config("bindRoleForClick") && !n.attr("role") && n.attr("role", "button"), e.config("tabindex") && !n.attr("tabindex") && n.attr("tabindex", 0), !e.config("bindKeydown") || r.ngKeydown || r.ngKeypress || r.ngKeyup || n.on("keydown", function(e) {
                            function n() {
                                a(t, {
                                    $event: e
                                })
                            }
                            var r = e.which || e.keyCode;
                            (32 === r || 13 === r) && t.$apply(n)
                        }))
                    }
                }
            }
        }]).directive("ngDblclick", ["$aria", function(e) {
            return function(t, n, r) {
                !e.config("tabindex") || n.attr("tabindex") || o(n, i) || n.attr("tabindex", 0)
            }
        }])
    }(window, window.angular),
    /*!
     * Angular Material Design
     * https://github.com/angular/material
     * @license MIT
     * v0.11.4
     */
    function(e, t, n) {
        "use strict";
        ! function() {
            t.module("ngMaterial", ["ng", "ngAnimate", "ngAria", "material.core", "material.core.gestures", "material.core.layout", "material.core.theming.palette", "material.core.theming", "material.core.animate", "material.components.autocomplete", "material.components.backdrop", "material.components.bottomSheet", "material.components.button", "material.components.card", "material.components.checkbox", "material.components.chips", "material.components.content", "material.components.dialog", "material.components.divider", "material.components.datepicker", "material.components.fabActions", "material.components.fabShared", "material.components.fabSpeedDial", "material.components.fabToolbar", "material.components.fabTrigger", "material.components.gridList", "material.components.icon", "material.components.input", "material.components.list", "material.components.menu", "material.components.menuBar", "material.components.progressCircular", "material.components.radioButton", "material.components.progressLinear", "material.components.select", "material.components.sidenav", "material.components.slider", "material.components.sticky", "material.components.subheader", "material.components.swipe", "material.components.switch", "material.components.toast", "material.components.tabs", "material.components.toolbar", "material.components.tooltip", "material.components.virtualRepeat", "material.components.whiteframe"])
        }(),
        function() {
            function e(e, t) {
                e.decorator("$$rAF", ["$delegate", r]), t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")
            }

            function n(e) {
                return {
                    restrict: "A",
                    scope: {
                        template: "=mdTemplate"
                    },
                    link: function(t, n) {
                        function r(r) {
                            n.html(r), e(n.contents())(t)
                        }
                        t.$watch("template", r)
                    }
                }
            }

            function r(e) {
                return e.throttle = function(t) {
                    var n, r, i, o;
                    return function() {
                        n = arguments, o = this, i = t, r || (r = !0, e(function() {
                            i.apply(o, Array.prototype.slice.call(n)), r = !1
                        }))
                    }
                }, e
            }
            t.module("material.core", ["ngAnimate", "material.core.animate", "material.core.layout", "material.core.gestures", "material.core.theming"]).directive("mdTemplate", n).config(e), e.$inject = ["$provide", "$mdThemingProvider"], n.$inject = ["$compile"]
        }(),
        function() {
            function e(e) {
                function t(e) {
                    return n ? "webkit" + e.charAt(0).toUpperCase() + e.substring(1) : e
                }
                var n = /webkit/i.test(e.vendorPrefix);
                return {
                    KEY_CODE: {
                        ENTER: 13,
                        ESCAPE: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT_ARROW: 37,
                        UP_ARROW: 38,
                        RIGHT_ARROW: 39,
                        DOWN_ARROW: 40,
                        TAB: 9,
                        BACKSPACE: 8,
                        DELETE: 46
                    },
                    CSS: {
                        TRANSITIONEND: "transitionend" + (n ? " webkitTransitionEnd" : ""),
                        ANIMATIONEND: "animationend" + (n ? " webkitAnimationEnd" : ""),
                        TRANSFORM: t("transform"),
                        TRANSFORM_ORIGIN: t("transformOrigin"),
                        TRANSITION: t("transition"),
                        TRANSITION_DURATION: t("transitionDuration"),
                        ANIMATION_PLAY_STATE: t("animationPlayState"),
                        ANIMATION_DURATION: t("animationDuration"),
                        ANIMATION_NAME: t("animationName"),
                        ANIMATION_TIMING: t("animationTimingFunction"),
                        ANIMATION_DIRECTION: t("animationDirection")
                    },
                    MEDIA: {
                        sm: "(max-width: 599px)",
                        "gt-sm": "(min-width: 600px)",
                        md: "(min-width: 600px) and (max-width: 959px)",
                        "gt-md": "(min-width: 960px)",
                        lg: "(min-width: 960px) and (max-width: 1199px)",
                        "gt-lg": "(min-width: 1200px)"
                    },
                    MEDIA_PRIORITY: ["gt-lg", "lg", "gt-md", "md", "gt-sm", "sm"]
                }
            }
            t.module("material.core").factory("$mdConstant", e), e.$inject = ["$sniffer"]
        }(),
        function() {
            function e(e, n) {
                function r() {
                    return [].concat($)
                }

                function i() {
                    return $.length
                }

                function o(e) {
                    return $.length && e > -1 && e < $.length
                }

                function a(e) {
                    return e ? o(m(e) + 1) : !1
                }

                function s(e) {
                    return e ? o(m(e) - 1) : !1
                }

                function c(e) {
                    return o(e) ? $[e] : null
                }

                function l(e, t) {
                    return $.filter(function(n) {
                        return n[e] === t
                    })
                }

                function d(e, n) {
                    return e ? (t.isNumber(n) || (n = $.length), $.splice(n, 0, e), m(e)) : -1
                }

                function u(e) {
                    f(e) && $.splice(m(e), 1)
                }

                function m(e) {
                    return $.indexOf(e)
                }

                function f(e) {
                    return e && m(e) > -1
                }

                function h() {
                    return $.length ? $[0] : null
                }

                function p() {
                    return $.length ? $[$.length - 1] : null
                }

                function g(e, r, i, a) {
                    i = i || v;
                    for (var s = m(r);;) {
                        if (!o(s)) return null;
                        var c = s + (e ? -1 : 1),
                            l = null;
                        if (o(c) ? l = $[c] : n && (l = e ? p() : h(), c = m(l)), null === l || c === a) return null;
                        if (i(l)) return l;
                        t.isUndefined(a) && (a = c), s = c
                    }
                }
                var v = function() {
                    return !0
                };
                e && !t.isArray(e) && (e = Array.prototype.slice.call(e)), n = !!n;
                var $ = e || [];
                return {
                    items: r,
                    count: i,
                    inRange: o,
                    contains: f,
                    indexOf: m,
                    itemAt: c,
                    findBy: l,
                    add: d,
                    remove: u,
                    first: h,
                    last: p,
                    next: t.bind(null, g, !1),
                    previous: t.bind(null, g, !0),
                    hasPrevious: s,
                    hasNext: a
                }
            }
            t.module("material.core").config(["$provide", function(t) {
                t.decorator("$mdUtil", ["$delegate", function(t) {
                    return t.iterator = e, t
                }])
            }])
        }(),
        function() {
            function e(e, n, r) {
                function i(e) {
                    var n = m[e];
                    t.isUndefined(n) && (n = m[e] = o(e));
                    var r = h[n];
                    return t.isUndefined(r) && (r = a(n)), r
                }

                function o(t) {
                    return e.MEDIA[t] || ("(" !== t.charAt(0) ? "(" + t + ")" : t)
                }

                function a(e) {
                    var t = f[e] = r.matchMedia(e);
                    return t.addListener(s), h[t.media] = !!t.matches
                }

                function s(e) {
                    n.$evalAsync(function() {
                        h[e.media] = !!e.matches
                    })
                }

                function c(e) {
                    return f[e]
                }

                function l(t, n) {
                    for (var r = 0; r < e.MEDIA_PRIORITY.length; r++) {
                        var i = e.MEDIA_PRIORITY[r];
                        if (f[m[i]].matches) {
                            var o = u(t, n + "-" + i);
                            if (t[o]) return t[o]
                        }
                    }
                    return t[u(t, n)]
                }

                function d(n, r, i) {
                    var o = [];
                    return n.forEach(function(n) {
                            var a = u(r, n);
                            t.isDefined(r[a]) && o.push(r.$observe(a, t.bind(void 0, i, null)));
                            for (var s in e.MEDIA) a = u(r, n + "-" + s), t.isDefined(r[a]) && o.push(r.$observe(a, t.bind(void 0, i, s)))
                        }),
                        function() {
                            o.forEach(function(e) {
                                e()
                            })
                        }
                }

                function u(e, t) {
                    return p[t] || (p[t] = e.$normalize(t))
                }
                var m = {},
                    f = {},
                    h = {},
                    p = {};
                return i.getResponsiveAttribute = l, i.getQuery = c, i.watchResponsiveAttributes = d, i
            }
            t.module("material.core").factory("$mdMedia", e), e.$inject = ["$mdConstant", "$rootScope", "$window"]
        }(),
        function() {
            function r(r, o, a, s, c, l, d) {
                function u(e) {
                    return e[0] || e
                }
                var m = l.startSymbol(),
                    f = l.endSymbol(),
                    h = "{{" === m && "}}" === f,
                    p = {
                        dom: {},
                        now: e.performance ? t.bind(e.performance, e.performance.now) : Date.now || function() {
                            return (new Date).getTime()
                        },
                        clientRect: function(e, t, n) {
                            var r = u(e);
                            t = u(t || r.offsetParent || document.body);
                            var i = r.getBoundingClientRect(),
                                o = n ? t.getBoundingClientRect() : {
                                    left: 0,
                                    top: 0,
                                    width: 0,
                                    height: 0
                                };
                            return {
                                left: i.left - o.left,
                                top: i.top - o.top,
                                width: i.width,
                                height: i.height
                            }
                        },
                        offsetRect: function(e, t) {
                            return p.clientRect(e, t, !0)
                        },
                        nodesToArray: function(e) {
                            e = e || [];
                            for (var t = [], n = 0; n < e.length; ++n) t.push(e.item(n));
                            return t
                        },
                        scrollTop: function(e) {
                            e = t.element(e || r[0].body);
                            var i = e[0] == r[0].body ? r[0].body : n,
                                o = i ? i.scrollTop + i.parentElement.scrollTop : 0;
                            return o || Math.abs(e[0].getBoundingClientRect().top)
                        },
                        findFocusTarget: function(e, n) {
                            function r(e, n) {
                                var r, i = e[0].querySelectorAll(n);
                                if (i && i.length) {
                                    var o = /\s*\[?([\-a-z]*)\]?\s*/i,
                                        a = o.exec(n),
                                        s = a ? a[1] : null;
                                    i.length && t.forEach(i, function(e) {
                                        e = t.element(e);
                                        var n = e[0].getAttribute(s),
                                            i = n && p.validateScope(e) ? e.scope().$eval(n) !== !1 : !0;
                                        i && (r = e)
                                    })
                                }
                                return r
                            }
                            var i, o = "[md-autofocus]";
                            return i = r(e, n || o), i || n == o || (i = r(e, "[md-auto-focus]"), i || (i = r(e, o))), i
                        },
                        disableScrollAround: function(e, n) {
                            function i(e) {
                                function n(e) {}

                                function i(e) {
                                    e.preventDefault()
                                }
                                e = t.element(e || s)[0];
                                var o = 50,
                                    a = t.element('<div class="md-scroll-mask" style="z-index: ' + o + '">  <div class="md-scroll-mask-bar"></div></div>');
                                return e.appendChild(a[0]), a.on("wheel", i), a.on("touchmove", i), r.on("keydown", n),
                                    function() {
                                        a.off("wheel"), a.off("touchmove"), a[0].parentNode.removeChild(a[0]), r.off("keydown", n), delete p.disableScrollAround._enableScrolling
                                    }
                            }

                            function o() {
                                var e = s.parentNode,
                                    t = e.getAttribute("style") || "",
                                    n = s.getAttribute("style") || "",
                                    r = p.scrollTop(s),
                                    i = s.clientWidth;
                                return s.scrollHeight > s.clientHeight && (a(s, {
                                        position: "fixed",
                                        width: "100%",
                                        top: -r + "px"
                                    }), a(e, {
                                        overflowY: "scroll"
                                    })), s.clientWidth < i && a(s, {
                                        overflow: "hidden"
                                    }),
                                    function() {
                                        s.setAttribute("style", n), e.setAttribute("style", t), s.scrollTop = r
                                    }
                            }

                            function a(e, t) {
                                for (var n in t) e.style[n] = t[n]
                            }
                            if (p.disableScrollAround._count = p.disableScrollAround._count || 0, ++p.disableScrollAround._count, p.disableScrollAround._enableScrolling) return p.disableScrollAround._enableScrolling;
                            e = t.element(e);
                            var s = r[0].body,
                                c = o(),
                                l = i(n);
                            return p.disableScrollAround._enableScrolling = function() {
                                --p.disableScrollAround._count || (c(), l(), delete p.disableScrollAround._enableScrolling)
                            }
                        },
                        enableScrolling: function() {
                            var e = this.disableScrollAround._enableScrolling;
                            e && e()
                        },
                        floatingScrollbars: function() {
                            if (this.floatingScrollbars.cached === n) {
                                var e = t.element('<div style="width: 100%; z-index: -1; position: absolute; height: 35px; overflow-y: scroll"><div style="height: 60;"></div></div>');
                                r[0].body.appendChild(e[0]), this.floatingScrollbars.cached = e[0].offsetWidth == e[0].childNodes[0].offsetWidth, e.remove()
                            }
                            return this.floatingScrollbars.cached
                        },
                        forceFocus: function(t) {
                            var n = t[0] || t;
                            document.addEventListener("click", function i(e) {
                                e.target === n && e.$focus && (n.focus(), e.stopImmediatePropagation(), e.preventDefault(), n.removeEventListener("click", i))
                            }, !0);
                            var r = document.createEvent("MouseEvents");
                            r.initMouseEvent("click", !1, !0, e, {}, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), r.$material = !0, r.$focus = !0, n.dispatchEvent(r)
                        },
                        createBackdrop: function(e, t) {
                            return a(p.supplant('<md-backdrop class="{0}">', [t]))(e)
                        },
                        supplant: function(e, t, n) {
                            return n = n || /\{([^\{\}]*)\}/g, e.replace(n, function(e, n) {
                                var r = n.split("."),
                                    i = t;
                                try {
                                    for (var o in r) r.hasOwnProperty(o) && (i = i[r[o]])
                                } catch (a) {
                                    i = e
                                }
                                return "string" == typeof i || "number" == typeof i ? i : e
                            })
                        },
                        fakeNgModel: function() {
                            return {
                                $fake: !0,
                                $setTouched: t.noop,
                                $setViewValue: function(e) {
                                    this.$viewValue = e, this.$render(e), this.$viewChangeListeners.forEach(function(e) {
                                        e()
                                    })
                                },
                                $isEmpty: function(e) {
                                    return 0 === ("" + e).length
                                },
                                $parsers: [],
                                $formatters: [],
                                $viewChangeListeners: [],
                                $render: t.noop
                            }
                        },
                        debounce: function(e, t, r, i) {
                            var a;
                            return function() {
                                var s = r,
                                    c = Array.prototype.slice.call(arguments);
                                o.cancel(a), a = o(function() {
                                    a = n, e.apply(s, c)
                                }, t || 10, i)
                            }
                        },
                        throttle: function(e, t) {
                            var n;
                            return function() {
                                var r = this,
                                    i = arguments,
                                    o = p.now();
                                (!n || o - n > t) && (e.apply(r, i), n = o)
                            }
                        },
                        time: function(e) {
                            var t = p.now();
                            return e(), p.now() - t
                        },
                        valueOnUse: function(e, t, n) {
                            var r = null,
                                i = Array.prototype.slice.call(arguments),
                                o = i.length > 3 ? i.slice(3) : [];
                            Object.defineProperty(e, t, {
                                get: function() {
                                    return null === r && (r = n.apply(e, o)), r
                                }
                            })
                        },
                        nextUid: function() {
                            return "" + i++
                        },
                        validateScope: function(e) {
                            var n = e && t.isDefined(e.scope());
                            return n || d.warn("element.scope() is not available when 'debug mode' == false. @see https://docs.angularjs.org/guide/production!"), n
                        },
                        disconnectScope: function(e) {
                            if (e && e.$root !== e && !e.$$destroyed) {
                                var t = e.$parent;
                                e.$$disconnected = !0, t.$$childHead === e && (t.$$childHead = e.$$nextSibling), t.$$childTail === e && (t.$$childTail = e.$$prevSibling), e.$$prevSibling && (e.$$prevSibling.$$nextSibling = e.$$nextSibling), e.$$nextSibling && (e.$$nextSibling.$$prevSibling = e.$$prevSibling), e.$$nextSibling = e.$$prevSibling = null
                            }
                        },
                        reconnectScope: function(e) {
                            if (e && e.$root !== e && e.$$disconnected) {
                                var t = e,
                                    n = t.$parent;
                                t.$$disconnected = !1, t.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = t, n.$$childTail = t) : n.$$childHead = n.$$childTail = t
                            }
                        },
                        getClosest: function(e, n, r) {
                            if (e instanceof t.element && (e = e[0]), n = n.toUpperCase(), r && (e = e.parentNode), !e) return null;
                            do
                                if (e.nodeName === n) return e; while (e = e.parentNode);
                            return null
                        },
                        elementContains: function(n, r) {
                            var i = e.Node && e.Node.prototype && Node.prototype.contains,
                                o = i ? t.bind(n, n.contains) : t.bind(n, function(e) {
                                    return n === r || !!(16 & this.compareDocumentPosition(e))
                                });
                            return o(r)
                        },
                        extractElementByName: function(e, n, r, i) {
                            function o(e) {
                                return a(e) || (r ? s(e) : null)
                            }

                            function a(e) {
                                if (e)
                                    for (var t = 0, r = e.length; r > t; t++)
                                        if (e[t].nodeName.toLowerCase() === n) return e[t];
                                return null
                            }

                            function s(e) {
                                var t;
                                if (e)
                                    for (var n = 0, r = e.length; r > n; n++) {
                                        var i = e[n];
                                        if (!t)
                                            for (var a = 0, s = i.childNodes.length; s > a; a++) t = t || o([i.childNodes[a]])
                                    }
                                return t
                            }
                            var c = o(e);
                            return !c && i && d.warn(p.supplant("Unable to find node '{0}' in element '{1}'.", [n, e[0].outerHTML])), t.element(c || e)
                        },
                        initOptionalProperties: function(e, n, r) {
                            r = r || {}, t.forEach(e.$$isolateBindings, function(i, o) {
                                if (i.optional && t.isUndefined(e[o])) {
                                    var a = t.isDefined(n[i.attrName]);
                                    e[o] = t.isDefined(r[o]) ? r[o] : a
                                }
                            })
                        },
                        nextTick: function(e, t, n) {
                            function r() {
                                var e = n && n.$$destroyed,
                                    t = e ? [] : i.queue,
                                    r = e ? null : i.digest;
                                i.queue = [], i.timeout = null, i.digest = !1, t.forEach(function(e) {
                                    e()
                                }), r && s.$digest()
                            }
                            var i = p.nextTick,
                                a = i.timeout,
                                c = i.queue || [];
                            return c.push(e), null == t && (t = !0), i.digest = i.digest || t, i.queue = c, a || (i.timeout = o(r, 0, !1))
                        },
                        processTemplate: function(e) {
                            return h ? e : e && t.isString(e) ? e.replace(/\{\{/g, m).replace(/}}/g, f) : e
                        }
                    };
                return p.dom.animator = c(p), p
            }
            var i = 0;
            t.module("material.core").factory("$mdUtil", r), r.$inject = ["$document", "$timeout", "$compile", "$rootScope", "$$mdAnimate", "$interpolate", "$log"], t.element.prototype.focus = t.element.prototype.focus || function() {
                return this.length && this[0].focus(), this
            }, t.element.prototype.blur = t.element.prototype.blur || function() {
                return this.length && this[0].blur(), this
            }
        }(),
        function() {
            function e(e, n, r) {
                function i(e, r, i) {
                    var o = t.element(e)[0] || e;
                    !o || o.hasAttribute(r) && 0 !== o.getAttribute(r).length || c(o, r) || (i = t.isString(i) ? i.trim() : "", i.length ? e.attr(r, i) : n.warn('ARIA: Attribute "', r, '", required for accessibility, is missing on node:', o))
                }

                function o(t, n, r) {
                    e(function() {
                        i(t, n, r())
                    })
                }

                function a(e, t) {
                    o(e, t, function() {
                        return s(e)
                    })
                }

                function s(e) {
                    return e.text().trim()
                }

                function c(e, t) {
                    function n(e) {
                        var t = e.currentStyle ? e.currentStyle : r.getComputedStyle(e);
                        return "none" === t.display
                    }
                    var i = e.hasChildNodes(),
                        o = !1;
                    if (i)
                        for (var a = e.childNodes, s = 0; s < a.length; s++) {
                            var c = a[s];
                            1 === c.nodeType && c.hasAttribute(t) && (n(c) || (o = !0))
                        }
                    return o
                }
                return {
                    expect: i,
                    expectAsync: o,
                    expectWithText: a
                }
            }
            t.module("material.core").service("$mdAria", e), e.$inject = ["$$rAF", "$log", "$window"]
        }(),
        function() {
            function e(e, n, r, i, o, a) {
                this.compile = function(s) {
                    var c = s.templateUrl,
                        l = s.template || "",
                        d = s.controller,
                        u = s.controllerAs,
                        m = t.extend({}, s.resolve || {}),
                        f = t.extend({}, s.locals || {}),
                        h = s.transformTemplate || t.identity,
                        p = s.bindToController;
                    return t.forEach(m, function(e, n) {
                        m[n] = t.isString(e) ? r.get(e) : r.invoke(e)
                    }), t.extend(m, f), m.$template = c ? n.get(c, {
                        cache: a
                    }).then(function(e) {
                        return e.data
                    }) : e.when(l), e.all(m).then(function(e) {
                        var n, r = h(e.$template),
                            a = s.element || t.element("<div>").html(r.trim()).contents(),
                            c = i(a);
                        return n = {
                            locals: e,
                            element: a,
                            link: function(r) {
                                if (e.$scope = r, d) {
                                    var i = o(d, e, !0);
                                    p && t.extend(i.instance, e);
                                    var s = i();
                                    a.data("$ngControllerController", s), a.children().data("$ngControllerController", s), u && (r[u] = s), n.controller = s
                                }
                                return c(r)
                            }
                        }
                    })
                }
            }
            t.module("material.core").service("$mdCompiler", e), e.$inject = ["$q", "$http", "$injector", "$compile", "$controller", "$templateCache"]
        }(),
        function() {
            function n() {}

            function r(n, r, i) {
                function o(e, t, n) {
                    var r = h[t.replace(/^\$md./, "")];
                    if (!r) throw new Error("Failed to register element with handler " + t + ". Available handlers: " + Object.keys(h).join(", "));
                    return r.registerElement(e, n)
                }

                function a(e, r) {
                    var i = new n(e);
                    return t.extend(i, r), h[e] = i, f
                }
                var c = navigator.userAgent || navigator.vendor || e.opera,
                    l = c.match(/ipad|iphone|ipod/i),
                    u = c.match(/android/i),
                    m = "undefined" != typeof e.jQuery && t.element === e.jQuery,
                    f = {
                        handler: a,
                        register: o,
                        isHijackingClicks: (l || u) && !m && !p
                    };
                return f.isHijackingClicks && f.handler("click", {
                    options: {
                        maxDistance: 6
                    },
                    onEnd: function(e, t) {
                        t.distance < this.state.options.maxDistance && this.dispatchEvent(e, "click")
                    }
                }), f.handler("press", {
                    onStart: function(e, t) {
                        this.dispatchEvent(e, "$md.pressdown")
                    },
                    onEnd: function(e, t) {
                        this.dispatchEvent(e, "$md.pressup")
                    }
                }).handler("hold", {
                    options: {
                        maxDistance: 6,
                        delay: 500
                    },
                    onCancel: function() {
                        i.cancel(this.state.timeout)
                    },
                    onStart: function(e, n) {
                        return this.state.registeredParent ? (this.state.pos = {
                            x: n.x,
                            y: n.y
                        }, void(this.state.timeout = i(t.bind(this, function() {
                            this.dispatchEvent(e, "$md.hold"), this.cancel()
                        }), this.state.options.delay, !1))) : this.cancel()
                    },
                    onMove: function(e, t) {
                        e.preventDefault();
                        var n = this.state.pos.x - t.x,
                            r = this.state.pos.y - t.y;
                        Math.sqrt(n * n + r * r) > this.options.maxDistance && this.cancel()
                    },
                    onEnd: function() {
                        this.onCancel()
                    }
                }).handler("drag", {
                    options: {
                        minDistance: 6,
                        horizontal: !0,
                        cancelMultiplier: 1.5
                    },
                    onStart: function(e) {
                        this.state.registeredParent || this.cancel()
                    },
                    onMove: function(e, t) {
                        var n, r;
                        e.preventDefault(), this.state.dragPointer ? this.dispatchDragMove(e) : (this.state.options.horizontal ? (n = Math.abs(t.distanceX) > this.state.options.minDistance, r = Math.abs(t.distanceY) > this.state.options.minDistance * this.state.options.cancelMultiplier) : (n = Math.abs(t.distanceY) > this.state.options.minDistance, r = Math.abs(t.distanceX) > this.state.options.minDistance * this.state.options.cancelMultiplier), n ? (this.state.dragPointer = s(e), d(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragstart", this.state.dragPointer)) : r && this.cancel())
                    },
                    dispatchDragMove: r.throttle(function(e) {
                        this.state.isRunning && (d(e, this.state.dragPointer), this.dispatchEvent(e, "$md.drag", this.state.dragPointer))
                    }),
                    onEnd: function(e, t) {
                        this.state.dragPointer && (d(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragend", this.state.dragPointer))
                    }
                }).handler("swipe", {
                    options: {
                        minVelocity: .65,
                        minDistance: 10
                    },
                    onEnd: function(e, t) {
                        if (Math.abs(t.velocityX) > this.state.options.minVelocity && Math.abs(t.distanceX) > this.state.options.minDistance) {
                            var n = "left" == t.directionX ? "$md.swipeleft" : "$md.swiperight";
                            this.dispatchEvent(e, n)
                        }
                    }
                })
            }

            function i(e) {
                this.name = e, this.state = {}
            }

            function o() {
                function n(e, n, r) {
                    r = r || m;
                    var i = new t.element.Event(n);
                    i.$material = !0, i.pointer = r, i.srcEvent = e, t.extend(i, {
                        clientX: r.x,
                        clientY: r.y,
                        screenX: r.x,
                        screenY: r.y,
                        pageX: r.x,
                        pageY: r.y,
                        ctrlKey: e.ctrlKey,
                        altKey: e.altKey,
                        shiftKey: e.shiftKey,
                        metaKey: e.metaKey
                    }), t.element(r.target).trigger(i)
                }

                function r(t, n, r) {
                    r = r || m;
                    var i;
                    "click" === n ? (i = document.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, e, t.detail, r.x, r.y, r.x, r.y, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, t.button, t.relatedTarget || null)) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(n, !0, !0, {})), i.$material = !0, i.pointer = r, i.srcEvent = t, r.target.dispatchEvent(i)
                }
                var o = "undefined" != typeof e.jQuery && t.element === e.jQuery;
                return i.prototype = {
                    options: {},
                    dispatchEvent: o ? n : r,
                    onStart: t.noop,
                    onMove: t.noop,
                    onEnd: t.noop,
                    onCancel: t.noop,
                    start: function(e, n) {
                        if (!this.state.isRunning) {
                            var r = this.getNearestParent(e.target),
                                i = r && r.$mdGesture[this.name] || {};
                            this.state = {
                                isRunning: !0,
                                options: t.extend({}, this.options, i),
                                registeredParent: r
                            }, this.onStart(e, n)
                        }
                    },
                    move: function(e, t) {
                        this.state.isRunning && this.onMove(e, t)
                    },
                    end: function(e, t) {
                        this.state.isRunning && (this.onEnd(e, t), this.state.isRunning = !1)
                    },
                    cancel: function(e, t) {
                        this.onCancel(e, t), this.state = {}
                    },
                    getNearestParent: function(e) {
                        for (var t = e; t;) {
                            if ((t.$mdGesture || {})[this.name]) return t;
                            t = t.parentNode
                        }
                        return null
                    },
                    registerElement: function(e, t) {
                        function n() {
                            delete e[0].$mdGesture[r.name], e.off("$destroy", n)
                        }
                        var r = this;
                        return e[0].$mdGesture = e[0].$mdGesture || {}, e[0].$mdGesture[this.name] = t || {}, e.on("$destroy", n), n
                    }
                }, i
            }

            function a(e, n) {
                function r(e, t) {
                    var r;
                    for (var i in h) r = h[i], r instanceof n && ("start" === e && r.cancel(), r[e](t, m))
                }

                function i(e) {
                    if (!m) {
                        var t = +Date.now();
                        f && !c(e, f) && t - f.endTime < 1500 || (m = s(e), r("start", e))
                    }
                }

                function o(e) {
                    m && c(e, m) && (d(e, m), r("move", e))
                }

                function a(e) {
                    m && c(e, m) && (d(e, m), m.endTime = +Date.now(), r("end", e), f = m, m = null)
                }
                document.contains || (document.contains = function(e) {
                    return document.body.contains(e)
                }), !v && e.isHijackingClicks && (document.addEventListener("click", function(e) {
                    var t = 0 === e.clientX && 0 === e.clientY;
                    t || e.$material || e.isIonicTap || l(e) ? (g = null, "label" == e.target.tagName.toLowerCase() && (g = {
                        x: e.x,
                        y: e.y
                    })) : (e.preventDefault(), e.stopPropagation(), g = null)
                }, !0), v = !0);
                var u = "mousedown touchstart pointerdown",
                    p = "mousemove touchmove pointermove",
                    $ = "mouseup mouseleave touchend touchcancel pointerup pointercancel";
                t.element(document).on(u, i).on(p, o).on($, a).on("$$mdGestureReset", function() {
                    f = m = null
                })
            }

            function s(e) {
                var t = u(e),
                    n = {
                        startTime: +Date.now(),
                        target: e.target,
                        type: e.type.charAt(0)
                    };
                return n.startX = n.x = t.pageX, n.startY = n.y = t.pageY, n
            }

            function c(e, t) {
                return e && t && e.type.charAt(0) === t.type
            }

            function l(e) {
                return g && g.x == e.x && g.y == e.y
            }

            function d(e, t) {
                var n = u(e),
                    r = t.x = n.pageX,
                    i = t.y = n.pageY;
                t.distanceX = r - t.startX, t.distanceY = i - t.startY, t.distance = Math.sqrt(t.distanceX * t.distanceX + t.distanceY * t.distanceY), t.directionX = t.distanceX > 0 ? "right" : t.distanceX < 0 ? "left" : "", t.directionY = t.distanceY > 0 ? "up" : t.distanceY < 0 ? "down" : "", t.duration = +Date.now() - t.startTime, t.velocityX = t.distanceX / t.duration, t.velocityY = t.distanceY / t.duration
            }

            function u(e) {
                return e = e.originalEvent || e, e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e
            }
            var m, f, h = {},
                p = !1,
                g = null,
                v = !1;
            t.module("material.core.gestures", []).provider("$mdGesture", n).factory("$$MdGestureHandler", o).run(a), n.prototype = {
                skipClickHijack: function() {
                    return p = !0
                },
                $get: ["$$MdGestureHandler", "$$rAF", "$timeout", function(e, t, n) {
                    return new r(e, t, n)
                }]
            }, r.$inject = ["$$MdGestureHandler", "$$rAF", "$timeout"], a.$inject = ["$mdGesture", "$$MdGestureHandler"]
        }(),
        function() {
            function e() {
                function e(e) {
                    function n(e) {
                        return c.optionsFactory = e.options, c.methods = (e.methods || []).concat(a), l
                    }

                    function r(e, t) {
                        return s[e] = t, l
                    }

                    function i(t, n) {
                        if (n = n || {}, n.methods = n.methods || [], n.options = n.options || function() {
                                return {}
                            }, /^cancel|hide|show$/.test(t)) throw new Error("Preset '" + t + "' in " + e + " is reserved!");
                        if (n.methods.indexOf("_options") > -1) throw new Error("Method '_options' in " + e + " is reserved!");
                        return c.presets[t] = {
                            methods: n.methods.concat(a),
                            optionsFactory: n.options,
                            argOption: n.argOption
                        }, l
                    }

                    function o(n, r) {
                        function i(e) {
                            return e = e || {}, e._options && (e = e._options), u.show(t.extend({}, d, e))
                        }

                        function o(e) {
                            return u.destroy(e)
                        }

                        function a(t, n) {
                            var i = {};
                            return i[e] = m, r.invoke(t || function() {
                                return n
                            }, {}, i)
                        }
                        var l, d, u = n(),
                            m = {
                                hide: u.hide,
                                cancel: u.cancel,
                                show: i,
                                destroy: o
                            };
                        return l = c.methods || [], d = a(c.optionsFactory, {}), t.forEach(s, function(e, t) {
                            m[t] = e
                        }), t.forEach(c.presets, function(e, n) {
                            function r(e) {
                                this._options = t.extend({}, i, e)
                            }
                            var i = a(e.optionsFactory, {}),
                                o = (e.methods || []).concat(l);
                            if (t.extend(i, {
                                    $type: n
                                }), t.forEach(o, function(e) {
                                    r.prototype[e] = function(t) {
                                        return this._options[e] = t, this
                                    }
                                }), e.argOption) {
                                var s = "show" + n.charAt(0).toUpperCase() + n.slice(1);
                                m[s] = function(e) {
                                    var t = m[n](e);
                                    return m.show(t)
                                }
                            }
                            m[n] = function(n) {
                                return arguments.length && e.argOption && !t.isObject(n) && !t.isArray(n) ? (new r)[e.argOption](n) : new r(n)
                            }
                        }), m
                    }
                    var a = ["onHide", "onShow", "onRemove"],
                        s = {},
                        c = {
                            presets: {}
                        },
                        l = {
                            setDefaults: n,
                            addPreset: i,
                            addMethod: r,
                            $get: o
                        };
                    return l.addPreset("build", {
                        methods: ["controller", "controllerAs", "resolve", "template", "templateUrl", "themable", "transformTemplate", "parent"]
                    }), o.$inject = ["$$interimElement", "$injector"], l
                }

                function r(e, r, i, o, a, s, c, l, d, u, m) {
                    return function() {
                        function m(e) {
                            e = e || {};
                            var t = new g(e || {}),
                                n = !e.skipHide && b.length ? v.hide() : r.when(!0);
                            return n["finally"](function() {
                                b.push(t), t.show()["catch"](function(e) {
                                    return e
                                })
                            }), t.deferred.promise
                        }

                        function f(e, t) {
                            function i(n) {
                                return n.remove(e, !1, t || {})["catch"](function(e) {
                                    return e
                                }), n.deferred.promise
                            }
                            if (!b.length) return r.when(e);
                            if (t = t || {}, t.closeAll) {
                                var o = r.all(b.reverse().map(i));
                                return b = [], o
                            }
                            if (t.closeTo !== n) return r.all(b.splice(t.closeTo).map(i));
                            var a = b.pop();
                            return i(a)
                        }

                        function h(e, t) {
                            var n = b.shift();
                            return n ? (n.remove(e, !0, t || {})["catch"](function(e) {
                                return e
                            }), n.deferred.promise) : r.when(e)
                        }

                        function p() {
                            var e = b.shift();
                            return e ? e.remove($, !1, {
                                $destroy: !0
                            }) : r.when($)
                        }

                        function g(m) {
                            function f() {
                                return r(function(e, t) {
                                    function n(e) {
                                        C.deferred.reject(e), t(e)
                                    }
                                    g(m).then(function(t) {
                                        w = $(t, m), x = y(w, m, t.controller).then(e, n)
                                    }, n)
                                })
                            }

                            function h(e, n, i) {
                                function o(e) {
                                    C.deferred.resolve(e)
                                }

                                function a(e) {
                                    C.deferred.reject(e)
                                }
                                return w ? (m = t.extend(m || {}, i || {}), m.cancelAutoHide && m.cancelAutoHide(), m.element.triggerHandler("$mdInterimElementRemove"), m.$destroy === !0 ? M(m.element, m) : (r.when(x)["finally"](function() {
                                    M(m.element, m).then(function() {
                                        n && a(e) || o(e)
                                    }, a)
                                }), C.deferred.promise)) : r.when(!1)
                            }

                            function p(e) {
                                return e = e || {}, e.template && (e.template = l.processTemplate(e.template)), t.extend({
                                    preserveScope: !1,
                                    cancelAutoHide: t.noop,
                                    scope: e.scope || o.$new(e.isolateScope),
                                    onShow: function(e, t, n) {
                                        return c.enter(t, n.parent)
                                    },
                                    onRemove: function(e, t) {
                                        return t && c.leave(t) || r.when()
                                    }
                                }, e)
                            }

                            function g(e) {
                                var t = e.skipCompile ? null : d.compile(e);
                                return t || r(function(t) {
                                    t({
                                        locals: {},
                                        link: function() {
                                            return e.element
                                        }
                                    })
                                })
                            }

                            function $(e, n) {
                                t.extend(e.locals, n);
                                var r = e.link(n.scope);
                                return n.element = r, n.parent = b(r, n), n.themable && u(r), r
                            }

                            function b(n, r) {
                                var i = r.parent;
                                if (i = t.isFunction(i) ? i(r.scope, n, r) : t.element(t.isString(i) ? e[0].querySelector(i) : i), !(i || {}).length) {
                                    var o;
                                    return s[0] && s[0].querySelector && (o = s[0].querySelector(":not(svg) > body")), o || (o = s[0]), "#comment" == o.nodeName && (o = e[0].body), t.element(o)
                                }
                                return i
                            }

                            function E() {
                                var e, r = t.noop;
                                m.hideDelay && (e = a(v.hide, m.hideDelay), r = function() {
                                    a.cancel(e)
                                }), m.cancelAutoHide = function() {
                                    r(), m.cancelAutoHide = n
                                }
                            }

                            function y(e, n, i) {
                                var o = n.onShowing || t.noop,
                                    a = n.onComplete || t.noop;
                                return r(function(t, s) {
                                    try {
                                        o(n.scope, e, n), r.when(n.onShow(n.scope, e, n, i)).then(function() {
                                            a(n.scope, e, n), E(), t(e)
                                        }, s)
                                    } catch (c) {
                                        s(c.message)
                                    }
                                })
                            }

                            function M(e, n) {
                                var r = n.onRemoving || t.noop;
                                return i(function(t, o) {
                                    try {
                                        var a = i.when(n.onRemove(n.scope, e, n) || !0);
                                        r(e, a), 1 == n.$destroy ? t(e) : a.then(function() {
                                            !n.preserveScope && n.scope && n.scope.$destroy(), t(e)
                                        }, o)
                                    } catch (s) {
                                        o(s.message)
                                    }
                                })
                            }
                            var C, w, x = r.when(!0);
                            return m = p(m), C = {
                                options: m,
                                deferred: r.defer(),
                                show: f,
                                remove: h
                            }
                        }
                        var v, $ = !1,
                            b = [];
                        return v = {
                            show: m,
                            hide: f,
                            cancel: h,
                            destroy: p
                        }
                    }
                }
                return e.$get = r, r.$inject = ["$document", "$q", "$$q", "$rootScope", "$timeout", "$rootElement", "$animate", "$mdUtil", "$mdCompiler", "$mdTheming", "$log"], e
            }
            t.module("material.core").provider("$$interimElement", e)
        }(),
        function() {
            function e(e, n) {
                function r(e) {
                    return e && "" !== e
                }
                var i, o = [],
                    a = {};
                return i = {
                    notFoundError: function(t) {
                        e.error("No instance found for handle", t)
                    },
                    getInstances: function() {
                        return o
                    },
                    get: function(e) {
                        if (!r(e)) return null;
                        var t, n, i;
                        for (t = 0, n = o.length; n > t; t++)
                            if (i = o[t], i.$$mdHandle === e) return i;
                        return null
                    },
                    register: function(e, n) {
                        function r() {
                            var t = o.indexOf(e); - 1 !== t && o.splice(t, 1)
                        }

                        function i() {
                            var t = a[n];
                            t && (t.resolve(e), delete a[n])
                        }
                        return n ? (e.$$mdHandle = n, o.push(e), i(), r) : t.noop
                    },
                    when: function(e) {
                        if (r(e)) {
                            var t = n.defer(),
                                o = i.get(e);
                            return o ? t.resolve(o) : a[e] = t, t.promise
                        }
                        return n.reject("Invalid `md-component-id` value.")
                    }
                }
            }
            t.module("material.core").factory("$mdComponentRegistry", e), e.$inject = ["$log", "$q"]
        }(),
        function() {
            ! function() {
                function e() {
                    return {
                        restrict: "A",
                        priority: "900",
                        compile: function(e, n) {
                            return $.enabled = !1, t.noop
                        }
                    }
                }

                function n(e) {
                    function n(t, n, r) {
                        var o = i(n, e, r),
                            a = r.$observe(r.$normalize(e), o);
                        o(l(e, r, "")), t.$on("$destroy", function() {
                            a()
                        }), $.removeAttributes && n.removeAttr(e)
                    }
                    return ["$mdUtil", "$interpolate", function(r, i) {
                        return u = r, m = i, {
                            restrict: "A",
                            compile: function(r, i) {
                                var o;
                                return $.enabled && (a(e, l(e, i, ""), s(r, e, i)), o = n), o || t.noop
                            }
                        }
                    }]
                }

                function r(e) {
                    function n(t, n) {
                        n.addClass(e), $.removeAttributes && n.removeAttr(e)
                    }
                    return ["$interpolate", function(r) {
                        return m = r, {
                            restrict: "A",
                            compile: function(r, i) {
                                var o;
                                return $.enabled && (a(e, l(e, i, ""), s(r, e, i)), n(null, r), o = n), o || t.noop
                            }
                        }
                    }]
                }

                function i(e, n) {
                    var r;
                    return function(i) {
                        var o = a(n, i || "");
                        t.isDefined(o) && (e.removeClass(r), r = o ? n + "-" + o.replace(h, "-") : n, e.addClass(r))
                    }
                }

                function o(e) {
                    var n = e.split("-");
                    return ["$log", function(r) {
                        return r.warn(e + "has been deprecated. Please use a `" + n[0] + "-gt-<xxx>` variant."), t.noop
                    }]
                }

                function a(e, n, r) {
                    var i = n;
                    if (!c(n)) {
                        switch (e.replace(f, "")) {
                            case "layout":
                                d(n, g) || (n = g[0]);
                                break;
                            case "flex":
                                d(n, p) || isNaN(n) && (n = "");
                                break;
                            case "flex-offset":
                            case "flex-order":
                                (!n || isNaN(+n)) && (n = "0");
                                break;
                            case "layout-align":
                                d(n, v, "-") || (n = v[0]);
                                break;
                            case "layout-padding":
                            case "layout-margin":
                            case "layout-fill":
                            case "layout-wrap":
                            case "layout-no-wrap":
                                n = ""
                        }
                        n != i && (r || t.noop)(n)
                    }
                    return n
                }

                function s(e, t, n) {
                    return function(r) {
                        c(r) || (e.attr(t, r), n[n.$normalize(t)] = r)
                    }
                }

                function c(e) {
                    return (e || "").indexOf(m.startSymbol()) > -1
                }

                function l(e, t, n) {
                    var r = t.$normalize(e);
                    return t[r] ? t[r].replace(h, "-") : n || null
                }

                function d(e, t, n) {
                    e = n && e ? e.replace(h, n) : e;
                    var r = !1;
                    return e && t.forEach(function(t) {
                        t = n ? t.replace(h, n) : t, r = r || t === e
                    }), r
                }
                var u, m, f = /(-gt)?-(sm|md|lg)/g,
                    h = /\s+/g,
                    p = ["grow", "initial", "auto", "none"],
                    g = ["row", "column"],
                    v = ["start start", "start center", "start end", "center", "center center", "center start", "center end", "end", "end center", "end start", "end end", "space-around", "space-around center", "space-around start", "space-around end", "space-between", "space-between center", "space-between start", "space-between end"],
                    $ = {
                        enabled: !0,
                        removeAttributes: !0,
                        breakpoints: []
                    };
                t.module("material.core.layout", ["ng"]).directive("mdLayoutCss", e).directive("layout", n("layout")).directive("layoutSm", n("layout-sm")).directive("layoutGtSm", n("layout-gt-sm")).directive("layoutMd", n("layout-md")).directive("layoutGtMd", n("layout-gt-md")).directive("layoutLg", n("layout-lg")).directive("layoutGtLg", n("layout-gt-lg")).directive("flex", n("flex")).directive("flexSm", n("flex-sm")).directive("flexGtSm", n("flex-gt-sm")).directive("flexMd", n("flex-md")).directive("flexGtMd", n("flex-gt-md")).directive("flexLg", n("flex-lg")).directive("flexGtLg", n("flex-gt-lg")).directive("flexOrder", n("flex-order")).directive("flexOrderSm", n("flex-order-sm")).directive("flexOrderGtSm", n("flex-order-gt-sm")).directive("flexOrderMd", n("flex-order-md")).directive("flexOrderGtMd", n("flex-order-gt-md")).directive("flexOrderLg", n("flex-order-lg")).directive("flexOrderGtLg", n("flex-order-gt-lg")).directive("flexOffset", n("flex-offset")).directive("flexOffsetSm", n("flex-offset-sm")).directive("flexOffsetGtSm", n("flex-offset-gt-sm")).directive("flexOffsetMd", n("flex-offset-md")).directive("flexOffsetGtMd", n("flex-offset-gt-md")).directive("flexOffsetLg", n("flex-offset-lg")).directive("flexOffsetGtLg", n("flex-offset-gt-lg")).directive("layoutAlign", n("layout-align")).directive("layoutAlignSm", n("layout-align-sm")).directive("layoutAlignGtSm", n("layout-align-gt-sm")).directive("layoutAlignMd", n("layout-align-md")).directive("layoutAlignGtMd", n("layout-align-gt-md")).directive("layoutAlignLg", n("layout-align-lg")).directive("layoutAlignGtLg", n("layout-align-gt-lg")).directive("hide", r("hide")).directive("hideSm", r("hide-sm")).directive("hideGtSm", r("hide-gt-sm")).directive("hideMd", r("hide-md")).directive("hideGtMd", r("hide-gt-md")).directive("hideLg", r("hide-lg")).directive("hideGtLg", r("hide-gt-lg")).directive("show", r("show")).directive("showSm", r("show-sm")).directive("showGtSm", r("show-gt-sm")).directive("showMd", r("show-md")).directive("showGtMd", r("show-gt-md")).directive("showLg", r("show-lg")).directive("showGtLg", r("show-gt-lg")).directive("layoutMargin", r("layout-margin")).directive("layoutPadding", r("layout-padding")).directive("layoutWrap", r("layout-wrap")).directive("layoutNoWrap", r("layout-no-wrap")).directive("layoutFill", r("layout-fill")).directive("layoutLtMd", o("layout-lt-md", !0)).directive("layoutLtLg", o("layout-lt-lg", !0)).directive("flexLtMd", o("flex-lt-md", !0)).directive("flexLtLg", o("flex-lt-lg", !0)).directive("layoutAlignLtMd", o("layout-align-lt-md")).directive("layoutAlignLtLg", o("layout-align-lt-lg")).directive("flexOrderLtMd", o("flex-order-lt-md")).directive("flexOrderLtLg", o("flex-order-lt-lg")).directive("offsetLtMd", o("flex-offset-lt-md")).directive("offsetLtLg", o("flex-offset-lt-lg")).directive("hideLtMd", o("hide-lt-md")).directive("hideLtLg", o("hide-lt-lg")).directive("showLtMd", o("show-lt-md")).directive("showLtLg", o("show-lt-lg"))
            }()
        }(),
        function() {
            ! function() {
                function e(e) {
                    function n(e) {
                        return e.hasClass("md-icon-button") ? {
                            isMenuItem: e.hasClass("md-menu-item"),
                            fitRipple: !0,
                            center: !0
                        } : {
                            isMenuItem: e.hasClass("md-menu-item"),
                            dimBackground: !0
                        }
                    }
                    return {
                        attach: function(r, i, o) {
                            return o = t.extend(n(i), o), e.attach(r, i, o)
                        }
                    }
                }
                t.module("material.core").factory("$mdButtonInkRipple", e), e.$inject = ["$mdInkRipple"]
            }()
        }(),
        function() {
            ! function() {
                function e(e) {
                    function n(n, r, i) {
                        return e.attach(n, r, t.extend({
                            center: !0,
                            dimBackground: !1,
                            fitRipple: !0
                        }, i))
                    }
                    return {
                        attach: n
                    }
                }
                t.module("material.core").factory("$mdCheckboxInkRipple", e), e.$inject = ["$mdInkRipple"]
            }()
        }(),
        function() {
            ! function() {
                function e(e) {
                    function n(n, r, i) {
                        return e.attach(n, r, t.extend({
                            center: !1,
                            dimBackground: !0,
                            outline: !1,
                            rippleSize: "full"
                        }, i))
                    }
                    return {
                        attach: n
                    }
                }
                t.module("material.core").factory("$mdListInkRipple", e), e.$inject = ["$mdInkRipple"]
            }()
        }(),
        function() {
            function n(e, n) {
                return {
                    controller: t.noop,
                    link: function(t, r, i) {
                        i.hasOwnProperty("mdInkRippleCheckbox") ? n.attach(t, r) : e.attach(t, r)
                    }
                }
            }

            function r(e) {
                function n(n, r, o) {
                    return r.controller("mdNoInk") ? t.noop : e.instantiate(i, {
                        $scope: n,
                        $element: r,
                        rippleOptions: o
                    })
                }
                return {
                    attach: n
                }
            }

            function i(e, n, r, i, o, a) {
                this.$window = i, this.$timeout = o, this.$mdUtil = a, this.$scope = e, this.$element = n, this.options = r, this.mousedown = !1, this.ripples = [], this.timeout = null, this.lastRipple = null, a.valueOnUse(this, "container", this.createContainer), a.valueOnUse(this, "background", this.getColor, .5), this.color = this.getColor(1), this.$element.addClass("md-ink-ripple"), (n.controller("mdInkRipple") || {}).createRipple = t.bind(this, this.createRipple), (n.controller("mdInkRipple") || {}).setColor = t.bind(this, this.setColor), this.bindEvents()
            }

            function o() {
                return {
                    controller: t.noop
                }
            }
            t.module("material.core").factory("$mdInkRipple", r).directive("mdInkRipple", n).directive("mdNoInk", o).directive("mdNoBar", o).directive("mdNoStretch", o);
            var a = 450;
            n.$inject = ["$mdButtonInkRipple", "$mdCheckboxInkRipple"], r.$inject = ["$injector"], i.$inject = ["$scope", "$element", "rippleOptions", "$window", "$timeout", "$mdUtil"], i.prototype.getColor = function() {
                function e() {
                    var e = this.options.colorElement && this.options.colorElement[0];
                    return e = e || this.$element[0], e ? this.$window.getComputedStyle(e).color : "rgb(0,0,0)"
                }
                return this._parseColor(this.$element.attr("md-ink-ripple")) || this._parseColor(e.call(this))
            }, i.prototype._parseColor = function(e, t) {
                function n(e) {
                    var t = "#" === e[0] ? e.substr(1) : e,
                        n = t.length / 3,
                        r = t.substr(0, n),
                        i = t.substr(n, n),
                        o = t.substr(2 * n);
                    return 1 === n && (r += r, i += i, o += o), "rgba(" + parseInt(r, 16) + "," + parseInt(i, 16) + "," + parseInt(o, 16) + ",0.1)"
                }

                function r(e) {
                    return e.replace(")", ", 0.1)").replace("(", "a(")
                }
                return t = t || 1, e ? 0 === e.indexOf("rgba") ? e.replace(/\d?\.?\d*\s*\)\s*$/, (.1 * t).toString() + ")") : 0 === e.indexOf("rgb") ? r(e) : 0 === e.indexOf("#") ? n(e) : void 0 : void 0
            }, i.prototype.bindEvents = function() {
                this.$element.on("mousedown", t.bind(this, this.handleMousedown)), this.$element.on("mouseup", t.bind(this, this.handleMouseup)), this.$element.on("mouseleave", t.bind(this, this.handleMouseup))
            }, i.prototype.handleMousedown = function(t) {
                this.mousedown || (this.setColor(e.getComputedStyle(this.$element[0]).color), t.hasOwnProperty("originalEvent") && (t = t.originalEvent), this.mousedown = !0, this.options.center ? this.createRipple(this.container.prop("clientWidth") / 2, this.container.prop("clientWidth") / 2) : this.createRipple(t.layerX, t.layerY))
            }, i.prototype.handleMouseup = function() {
                if (this.mousedown || this.lastRipple) {
                    var e = this;
                    this.mousedown = !1, this.$mdUtil.nextTick(function() {
                        e.clearRipples()
                    }, !1)
                }
            }, i.prototype.clearRipples = function() {
                for (var e = 0; e < this.ripples.length; e++) this.fadeInComplete(this.ripples[e])
            }, i.prototype.createContainer = function() {
                var e = t.element('<div class="md-ripple-container"></div>');
                return this.$element.append(e), e
            }, i.prototype.clearTimeout = function() {
                this.timeout && (this.$timeout.cancel(this.timeout), this.timeout = null)
            }, i.prototype.isRippleAllowed = function() {
                var e = this.$element[0];
                do {
                    if (!e.tagName || "BODY" === e.tagName) break;
                    if (e && e.hasAttribute && e.hasAttribute("disabled")) return !1
                } while (e = e.parentNode);
                return !0
            }, i.prototype.createRipple = function(e, n) {
                function r(e) {
                    return e ? e.replace("rgba", "rgb").replace(/,[^\),]+\)/, ")") : "rgb(0,0,0)"
                }

                function i(e, t, n) {
                    return e ? Math.max(t, n) : Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2))
                }
                if (this.isRippleAllowed()) {
                    var o = this,
                        s = t.element('<div class="md-ripple"></div>'),
                        c = this.$element.prop("clientWidth"),
                        l = this.$element.prop("clientHeight"),
                        d = 2 * Math.max(Math.abs(c - e), e),
                        u = 2 * Math.max(Math.abs(l - n), n),
                        m = i(this.options.fitRipple, d, u);
                    s.css({
                        left: e + "px",
                        top: n + "px",
                        background: "black",
                        width: m + "px",
                        height: m + "px",
                        backgroundColor: r(this.color),
                        borderColor: r(this.color)
                    }), this.lastRipple = s, this.clearTimeout(), this.timeout = this.$timeout(function() {
                        o.clearTimeout(), o.mousedown || o.fadeInComplete(s)
                    }, .35 * a, !1), this.options.dimBackground && this.container.css({
                        backgroundColor: this.background
                    }), this.container.append(s), this.ripples.push(s), s.addClass("md-ripple-placed"), this.$mdUtil.nextTick(function() {
                        s.addClass("md-ripple-scaled md-ripple-active"), o.$timeout(function() {
                            o.clearRipples()
                        }, a, !1)
                    }, !1)
                }
            }, i.prototype.setColor = function(e) {
                this.color = this._parseColor(e)
            }, i.prototype.fadeInComplete = function(e) {
                this.lastRipple === e ? this.timeout || this.mousedown || this.removeRipple(e) : this.removeRipple(e)
            }, i.prototype.removeRipple = function(e) {
                var t = this,
                    n = this.ripples.indexOf(e);
                0 > n || (this.ripples.splice(this.ripples.indexOf(e), 1), e.removeClass("md-ripple-active"), 0 === this.ripples.length && this.container.css({
                    backgroundColor: ""
                }), this.$timeout(function() {
                    t.fadeOutComplete(e)
                }, a, !1))
            }, i.prototype.fadeOutComplete = function(e) {
                e.remove(), this.lastRipple = null
            }
        }(),
        function() {
            ! function() {
                function e(e) {
                    function n(n, r, i) {
                        return e.attach(n, r, t.extend({
                            center: !1,
                            dimBackground: !0,
                            outline: !1,
                            rippleSize: "full"
                        }, i))
                    }
                    return {
                        attach: n
                    }
                }
                t.module("material.core").factory("$mdTabInkRipple", e), e.$inject = ["$mdInkRipple"]
            }()
        }(),
        function() {
            t.module("material.core.theming.palette", []).constant("$mdColorPalette", {
                red: {
                    50: "#ffebee",
                    100: "#ffcdd2",
                    200: "#ef9a9a",
                    300: "#e57373",
                    400: "#ef5350",
                    500: "#f44336",
                    600: "#e53935",
                    700: "#d32f2f",
                    800: "#c62828",
                    900: "#b71c1c",
                    A100: "#ff8a80",
                    A200: "#ff5252",
                    A400: "#ff1744",
                    A700: "#d50000",
                    contrastDefaultColor: "light",
                    contrastDarkColors: "50 100 200 300 A100",
                    contrastStrongLightColors: "400 500 600 700 A200 A400 A700"
                },
                pink: {
                    50: "#fce4ec",
                    100: "#f8bbd0",
                    200: "#f48fb1",
                    300: "#f06292",
                    400: "#ec407a",
                    500: "#e91e63",
                    600: "#d81b60",
                    700: "#c2185b",
                    800: "#ad1457",
                    900: "#880e4f",
                    A100: "#ff80ab",
                    A200: "#ff4081",
                    A400: "#f50057",
                    A700: "#c51162",
                    contrastDefaultColor: "light",
                    contrastDarkColors: "50 100 200 A100",
                    contrastStrongLightColors: "500 600 A200 A400 A700"
                },
                purple: {
                    50: "#f3e5f5",
                    100: "#e1bee7",
                    200: "#ce93d8",
                    300: "#ba68c8",
                    400: "#ab47bc",
                    500: "#9c27b0",
                    600: "#8e24aa",
                    700: "#7b1fa2",
                    800: "#6a1b9a",
                    900: "#4a148c",
                    A100: "#ea80fc",
                    A200: "#e040fb",
                    A400: "#d500f9",
                    A700: "#aa00ff",
                    contrastDefaultColor: "light",
                    contrastDarkColors: "50 100 200 A100",
                    contrastStrongLightColors: "300 400 A200 A400 A700"
                },
                "deep-purple": {
                    50: "#ede7f6",
                    100: "#d1c4e9",
                    200: "#b39ddb",
                    300: "#9575cd",
                    400: "#7e57c2",
                    500: "#673ab7",
                    600: "#5e35b1",
                    700: "#512da8",
                    800: "#4527a0",
                    900: "#311b92",
                    A100: "#b388ff",
                    A200: "#7c4dff",
                    A400: "#651fff",
                    A700: "#6200ea",
                    contrastDefaultColor: "light",
                    contrastDarkColors: "50 100 200 A100",
                    contrastStrongLightColors: "300 400 A200"
                },
                indigo: {
                    50: "#e8eaf6",
                    100: "#c5cae9",
                    200: "#9fa8da",
                    300: "#7986cb",
                    400: "#5c6bc0",
                    500: "#3f51b5",
                    600: "#3949ab",
                    700: "#303f9f",
                    800: "#283593",
                    900: "#1a237e",
                    A100: "#8c9eff",
                    A200: "#536dfe",
                    A400: "#3d5afe",
                    A700: "#304ffe",
                    contrastDefaultColor: "light",
                    contrastDarkColors: "50 100 200 A100",
                    contrastStrongLightColors: "300 400 A200 A400"
                },
                blue: {
                    50: "#e3f2fd",
                    100: "#bbdefb",
                    200: "#90caf9",
                    300: "#64b5f6",
                    400: "#42a5f5",
                    500: "#2196f3",
                    600: "#1e88e5",
                    700: "#1976d2",
                    800: "#1565c0",
                    900: "#0d47a1",
                    A100: "#82b1ff",
                    A200: "#448aff",
                    A400: "#2979ff",
                    A700: "#2962ff",
                    contrastDefaultColor: "light",
                    contrastDarkColors: "50 100 200 300 400 A100",
                    contrastStrongLightColors: "500 600 700 A200 A400 A700"
                },
                "light-blue": {
                    50: "#e1f5fe",
                    100: "#b3e5fc",
                    200: "#81d4fa",
                    300: "#4fc3f7",
                    400: "#29b6f6",
                    500: "#03a9f4",
                    600: "#039be5",
                    700: "#0288d1",
                    800: "#0277bd",
                    900: "#01579b",
                    A100: "#80d8ff",
                    A200: "#40c4ff",
                    A400: "#00b0ff",
                    A700: "#0091ea",
                    contrastDefaultColor: "dark",
                    contrastLightColors: "600 700 800 900 A700",
                    contrastStrongLightColors: "600 700 800 A700"
                },
                cyan: {
                    50: "#e0f7fa",
                    100: "#b2ebf2",
                    200: "#80deea",
                    300: "#4dd0e1",
                    400: "#26c6da",
                    500: "#00bcd4",
                    600: "#00acc1",
                    700: "#0097a7",
                    800: "#00838f",
                    900: "#006064",
                    A100: "#84ffff",
                    A200: "#18ffff",
                    A400: "#00e5ff",
                    A700: "#00b8d4",
                    contrastDefaultColor: "dark",
                    contrastLightColors: "700 800 900",
                    contrastStrongLightColors: "700 800 900"
                },
                teal: {
                    50: "#e0f2f1",
                    100: "#b2dfdb",
                    200: "#80cbc4",
                    300: "#4db6ac",
                    400: "#26a69a",
                    500: "#009688",
                    600: "#00897b",
                    700: "#00796b",
                    800: "#00695c",
                    900: "#004d40",
                    A100: "#a7ffeb",
                    A200: "#64ffda",
                    A400: "#1de9b6",
                    A700: "#00bfa5",
                    contrastDefaultColor: "dark",
                    contrastLightColors: "500 600 700 800 900",
                    contrastStrongLightColors: "500 600 700"
                },
                green: {
                    50: "#e8f5e9",
                    100: "#c8e6c9",
                    200: "#a5d6a7",
                    300: "#81c784",
                    400: "#66bb6a",
                    500: "#4caf50",
                    600: "#43a047",
                    700: "#388e3c",
                    800: "#2e7d32",
                    900: "#1b5e20",
                    A100: "#b9f6ca",
                    A200: "#69f0ae",
                    A400: "#00e676",
                    A700: "#00c853",
                    contrastDefaultColor: "dark",
                    contrastLightColors: "600 700 800 900",
                    contrastStrongLightColors: "600 700"
                },
                "light-green": {
                    50: "#f1f8e9",
                    100: "#dcedc8",
                    200: "#c5e1a5",
                    300: "#aed581",
                    400: "#9ccc65",
                    500: "#8bc34a",
                    600: "#7cb342",
                    700: "#689f38",
                    800: "#558b2f",
                    900: "#33691e",
                    A100: "#ccff90",
                    A200: "#b2ff59",
                    A400: "#76ff03",
                    A700: "#64dd17",
                    contrastDefaultColor: "dark",
                    contrastLightColors: "700 800 900",
                    contrastStrongLightColors: "700 800 900"
                },
                lime: {
                    50: "#f9fbe7",
                    100: "#f0f4c3",
                    200: "#e6ee9c",
                    300: "#dce775",
                    400: "#d4e157",
                    500: "#cddc39",
                    600: "#c0ca33",
                    700: "#afb42b",
                    800: "#9e9d24",
                    900: "#827717",
                    A100: "#f4ff81",
                    A200: "#eeff41",
                    A400: "#c6ff00",
                    A700: "#aeea00",
                    contrastDefaultColor: "dark",
                    contrastLightColors: "900",
                    contrastStrongLightColors: "900"
                },
                yellow: {
                    50: "#fffde7",
                    100: "#fff9c4",
                    200: "#fff59d",
                    300: "#fff176",
                    400: "#ffee58",
                    500: "#ffeb3b",
                    600: "#fdd835",
                    700: "#fbc02d",
                    800: "#f9a825",
                    900: "#f57f17",
                    A100: "#ffff8d",
                    A200: "#ffff00",
                    A400: "#ffea00",
                    A700: "#ffd600",
                    contrastDefaultColor: "dark"
                },
                amber: {
                    50: "#fff8e1",
                    100: "#ffecb3",
                    200: "#ffe082",
                    300: "#ffd54f",
                    400: "#ffca28",
                    500: "#ffc107",
                    600: "#ffb300",
                    700: "#ffa000",
                    800: "#ff8f00",
                    900: "#ff6f00",
                    A100: "#ffe57f",
                    A200: "#ffd740",
                    A400: "#ffc400",
                    A700: "#ffab00",
                    contrastDefaultColor: "dark"
                },
                orange: {
                    50: "#fff3e0",
                    100: "#ffe0b2",
                    200: "#ffcc80",
                    300: "#ffb74d",
                    400: "#ffa726",
                    500: "#ff9800",
                    600: "#fb8c00",
                    700: "#f57c00",
                    800: "#ef6c00",
                    900: "#e65100",
                    A100: "#ffd180",
                    A200: "#ffab40",
                    A400: "#ff9100",
                    A700: "#ff6d00",
                    contrastDefaultColor: "dark",
                    contrastLightColors: "800 900",
                    contrastStrongLightColors: "800 900"
                },
                "deep-orange": {
                    50: "#fbe9e7",
                    100: "#ffccbc",
                    200: "#ffab91",
                    300: "#ff8a65",
                    400: "#ff7043",
                    500: "#ff5722",
                    600: "#f4511e",
                    700: "#e64a19",
                    800: "#d84315",
                    900: "#bf360c",
                    A100: "#ff9e80",
                    A200: "#ff6e40",
                    A400: "#ff3d00",
                    A700: "#dd2c00",
                    contrastDefaultColor: "light",
                    contrastDarkColors: "50 100 200 300 400 A100 A200",
                    contrastStrongLightColors: "500 600 700 800 900 A400 A700"
                },
                brown: {
                    50: "#efebe9",
                    100: "#d7ccc8",
                    200: "#bcaaa4",
                    300: "#a1887f",
                    400: "#8d6e63",
                    500: "#795548",
                    600: "#6d4c41",
                    700: "#5d4037",
                    800: "#4e342e",
                    900: "#3e2723",
                    A100: "#d7ccc8",
                    A200: "#bcaaa4",
                    A400: "#8d6e63",
                    A700: "#5d4037",
                    contrastDefaultColor: "light",
                    contrastDarkColors: "50 100 200",
                    contrastStrongLightColors: "300 400"
                },
                grey: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#eeeeee",
                    300: "#e0e0e0",
                    400: "#bdbdbd",
                    500: "#9e9e9e",
                    600: "#757575",
                    700: "#616161",
                    800: "#424242",
                    900: "#212121",
                    1000: "#000000",
                    A100: "#ffffff",
                    A200: "#eeeeee",
                    A400: "#bdbdbd",
                    A700: "#616161",
                    contrastDefaultColor: "dark",
                    contrastLightColors: "600 700 800 900"
                },
                "blue-grey": {
                    50: "#eceff1",
                    100: "#cfd8dc",
                    200: "#b0bec5",
                    300: "#90a4ae",
                    400: "#78909c",
                    500: "#607d8b",
                    600: "#546e7a",
                    700: "#455a64",
                    800: "#37474f",
                    900: "#263238",
                    A100: "#cfd8dc",
                    A200: "#b0bec5",
                    A400: "#78909c",
                    A700: "#455a64",
                    contrastDefaultColor: "light",
                    contrastDarkColors: "50 100 200 300",
                    contrastStrongLightColors: "400 500"
                }
            })
        }(),
        function() {
            function e(e) {
                function r(e, t) {
                    return t = t || {}, d[e] = a(e, t), v
                }

                function i(e, n) {
                    return a(e, t.extend({}, d[e] || {}, n))
                }

                function a(e, t) {
                    var n = w.filter(function(e) {
                        return !t[e]
                    });
                    if (n.length) throw new Error("Missing colors %1 in palette %2!".replace("%1", n.join(", ")).replace("%2", e));
                    return t
                }

                function s(e, n) {
                    if (u[e]) return u[e];
                    n = n || "default";
                    var r = "string" == typeof n ? u[n] : n,
                        i = new c(e);
                    return r && t.forEach(r.colors, function(e, n) {
                        i.colors[n] = {
                            name: e.name,
                            hues: t.extend({}, e.hues)
                        }
                    }), u[e] = i, i
                }

                function c(e) {
                    function n(e) {
                        if (e = 0 === arguments.length ? !0 : !!e, e !== r.isDark) {
                            r.isDark = e, r.foregroundPalette = r.isDark ? h : f, r.foregroundShadow = r.isDark ? p : g;
                            var n = r.isDark ? C : M,
                                i = r.isDark ? M : C;
                            return t.forEach(n, function(e, t) {
                                var n = r.colors[t],
                                    o = i[t];
                                if (n)
                                    for (var a in n.hues) n.hues[a] === o[a] && (n.hues[a] = e[a])
                            }), r
                        }
                    }
                    var r = this;
                    r.name = e, r.colors = {}, r.dark = n, n(!1), E.forEach(function(e) {
                        var n = (r.isDark ? C : M)[e];
                        r[e + "Palette"] = function(i, o) {
                            var a = r.colors[e] = {
                                name: i,
                                hues: t.extend({}, n, o)
                            };
                            return Object.keys(a.hues).forEach(function(e) {
                                if (!n[e]) throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1", e).replace("%2", r.name).replace("%3", i).replace("%4", Object.keys(n).join(", ")))
                            }), Object.keys(a.hues).map(function(e) {
                                return a.hues[e]
                            }).forEach(function(t) {
                                if (-1 == w.indexOf(t)) throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1", t).replace("%2", r.name).replace("%3", e).replace("%4", i).replace("%5", w.join(", ")))
                            }), r
                        }, r[e + "Color"] = function() {
                            var t = Array.prototype.slice.call(arguments);
                            return console.warn("$mdThemingProviderTheme." + e + "Color() has been deprecated. Use $mdThemingProviderTheme." + e + "Palette() instead."), r[e + "Palette"].apply(r, t)
                        }
                    })
                }

                function m(e, r) {
                    function i(e) {
                        return e === n || "" === e ? !0 : o.THEMES[e] !== n
                    }

                    function o(t, r) {
                        r === n && (r = t, t = n), t === n && (t = e), o.inherit(r, r)
                    }
                    return o.inherit = function(n, o) {
                        function a(e) {
                            if (e) {
                                i(e) || r.warn("Attempted to use unregistered theme '" + e + "'. Register it with $mdThemingProvider.theme().");
                                var t = n.data("$mdThemeName");
                                t && n.removeClass("md-" + t + "-theme"), n.addClass("md-" + e + "-theme"), n.data("$mdThemeName", e), s && n.data("$mdThemeController", s)
                            }
                        }
                        var s = o.controller("mdTheme"),
                            c = n.attr("md-theme-watch");
                        if ((b || t.isDefined(c)) && "false" != c) {
                            var l = e.$watch(function() {
                                return s && s.$mdTheme || ("default" == $ ? "" : $)
                            }, a);
                            n.on("$destroy", l)
                        } else {
                            var d = s && s.$mdTheme || ("default" == $ ? "" : $);
                            a(d)
                        }
                    }, o.THEMES = t.extend({}, u), o.defaultTheme = function() {
                        return $
                    }, o.registered = i, o
                }
                d = {}, u = {};
                var v, $ = "default",
                    b = !1;
                return t.extend(d, e), m.$inject = ["$rootScope", "$log"], v = {
                    definePalette: r,
                    extendPalette: i,
                    theme: s,
                    setDefaultTheme: function(e) {
                        $ = e
                    },
                    alwaysWatchTheme: function(e) {
                        b = e
                    },
                    $get: m,
                    _LIGHT_DEFAULT_HUES: M,
                    _DARK_DEFAULT_HUES: C,
                    _PALETTES: d,
                    _THEMES: u,
                    _parseRules: o,
                    _rgba: l
                }
            }

            function r(e, t, n) {
                return {
                    priority: 100,
                    link: {
                        pre: function(r, i, o) {
                            var a = {
                                $setTheme: function(t) {
                                    e.registered(t) || n.warn("attempted to use unregistered theme '" + t + "'"), a.$mdTheme = t
                                }
                            };
                            i.data("$mdThemeController", a), a.$setTheme(t(o.mdTheme)(r)), o.$observe("mdTheme", a.$setTheme)
                        }
                    }
                }
            }

            function i(e) {
                return e
            }

            function o(e, n, r) {
                s(e, n), r = r.replace(/THEME_NAME/g, e.name);
                var i = [],
                    o = e.colors[n],
                    a = new RegExp(".md-" + e.name + "-theme", "g"),
                    c = new RegExp("('|\")?{{\\s*(" + n + ")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?", "g"),
                    u = /'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,
                    m = d[o.name];
                return r = r.replace(u, function(t, n, r, i, o) {
                    return "foreground" === n ? "shadow" == r ? e.foregroundShadow : e.foregroundPalette[r] || e.foregroundPalette[1] : (0 === r.indexOf("hue") && (r = e.colors[n].hues[r]), l((d[e.colors[n].name][r] || "")[o ? "contrast" : "value"], i))
                }), t.forEach(o.hues, function(t, n) {
                    var o = r.replace(c, function(e, n, r, i, o) {
                        return l(m[t]["color" === i ? "value" : "contrast"], o)
                    });
                    "default" !== n && (o = o.replace(a, ".md-" + e.name + "-theme.md-" + n)), "default" == e.name && (o = o.replace(/((\w|\.|-)+)\.md-default-theme((\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g, "$&, $1$3")), i.push(o)
                }), i
            }

            function a(e) {
                function n(e) {
                    var n = e.contrastDefaultColor,
                        r = e.contrastLightColors || [],
                        i = e.contrastStrongLightColors || [],
                        o = e.contrastDarkColors || [];
                    "string" == typeof r && (r = r.split(" ")), "string" == typeof i && (i = i.split(" ")), "string" == typeof o && (o = o.split(" ")), delete e.contrastDefaultColor, delete e.contrastLightColors, delete e.contrastStrongLightColors, delete e.contrastDarkColors, t.forEach(e, function(a, s) {
                        function l() {
                            return "light" === n ? o.indexOf(s) > -1 ? v : i.indexOf(s) > -1 ? b : $ : r.indexOf(s) > -1 ? i.indexOf(s) > -1 ? b : $ : v
                        }
                        if (!t.isObject(a)) {
                            var d = c(a);
                            if (!d) throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1", a).replace("%2", e.name).replace("%3", s));
                            e[s] = {
                                value: d,
                                contrast: l()
                            }
                        }
                    })
                }
                var r = document.getElementsByTagName("head")[0],
                    i = r ? r.firstElementChild : null,
                    a = e.has("$MD_THEME_CSS") ? e.get("$MD_THEME_CSS") : "";
                if (i && 0 !== a.length) {
                    t.forEach(d, n);
                    var s = {},
                        l = a.split(/\}(?!(\}|'|"|;))/).filter(function(e) {
                            return e && e.length
                        }).map(function(e) {
                            return e.trim() + "}"
                        }),
                        f = new RegExp("md-(" + E.join("|") + ")", "g");
                    E.forEach(function(e) {
                        s[e] = ""
                    }), l.forEach(function(e) {
                        for (var t, n = (e.match(f), 0); t = E[n]; n++)
                            if (e.indexOf(".md-" + t) > -1) return s[t] += e;
                        for (n = 0; t = E[n]; n++)
                            if (e.indexOf(t) > -1) return s[t] += e;
                        return s[y] += e
                    }), t.forEach(u, function(e) {
                        m[e.name] || (E.forEach(function(t) {
                            for (var n = o(e, t, s[t]); n.length;) {
                                var a = document.createElement("style");
                                a.setAttribute("type", "text/css"), a.appendChild(document.createTextNode(n.shift())), r.insertBefore(a, i)
                            }
                        }), e.colors.primary.name == e.colors.accent.name && console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec."), m[e.name] = !0)
                    })
                }
            }

            function s(e, t) {
                if (!d[(e.colors[t] || {}).name]) throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1", e.name).replace("%2", t).replace("%3", Object.keys(d).join(", ")))
            }

            function c(e) {
                if (t.isArray(e) && 3 == e.length) return e;
                if (/^rgb/.test(e)) return e.replace(/(^\s*rgba?\(|\)\s*$)/g, "").split(",").map(function(e, t) {
                    return 3 == t ? parseFloat(e, 10) : parseInt(e, 10)
                });
                if ("#" == e.charAt(0) && (e = e.substring(1)), /^([a-fA-F0-9]{3}){1,2}$/g.test(e)) {
                    var n = e.length / 3,
                        r = e.substr(0, n),
                        i = e.substr(n, n),
                        o = e.substr(2 * n);
                    return 1 === n && (r += r, i += i, o += o), [parseInt(r, 16), parseInt(i, 16), parseInt(o, 16)]
                }
            }

            function l(e, n) {
                return e ? (4 == e.length && (e = t.copy(e), n ? e.pop() : n = e.pop()), n && ("number" == typeof n || "string" == typeof n && n.length) ? "rgba(" + e.join(",") + "," + n + ")" : "rgb(" + e.join(",") + ")") : "rgb('0,0,0')"
            }
            t.module("material.core.theming", ["material.core.theming.palette"]).directive("mdTheme", r).directive("mdThemable", i).provider("$mdTheming", e).run(a);
            var d, u, m = {},
                f = {
                    name: "dark",
                    1: "rgba(0,0,0,0.87)",
                    2: "rgba(0,0,0,0.54)",
                    3: "rgba(0,0,0,0.26)",
                    4: "rgba(0,0,0,0.12)"
                },
                h = {
                    name: "light",
                    1: "rgba(255,255,255,1.0)",
                    2: "rgba(255,255,255,0.7)",
                    3: "rgba(255,255,255,0.3)",
                    4: "rgba(255,255,255,0.12)"
                },
                p = "1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",
                g = "",
                v = c("rgba(0,0,0,0.87)"),
                $ = c("rgba(255,255,255,0.87"),
                b = c("rgb(255,255,255)"),
                E = ["primary", "accent", "warn", "background"],
                y = "primary",
                M = {
                    accent: {
                        "default": "A200",
                        "hue-1": "A100",
                        "hue-2": "A400",
                        "hue-3": "A700"
                    },
                    background: {
                        "default": "A100",
                        "hue-1": "300",
                        "hue-2": "800",
                        "hue-3": "900"
                    }
                },
                C = {
                    background: {
                        "default": "800",
                        "hue-1": "600",
                        "hue-2": "300",
                        "hue-3": "900"
                    }
                };
            E.forEach(function(e) {
                var t = {
                    "default": "500",
                    "hue-1": "300",
                    "hue-2": "800",
                    "hue-3": "A100"
                };
                M[e] || (M[e] = t), C[e] || (C[e] = t)
            });
            var w = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "A100", "A200", "A400", "A700"];
            e.$inject = ["$mdColorPalette"], r.$inject = ["$mdTheming", "$interpolate", "$log"], i.$inject = ["$mdTheming"], a.$inject = ["$injector"]
        }(),
        function() {
            function e(e, n, r, i, o) {
                var a;
                return a = {
                    translate3d: function(e, t, n, r) {
                        function i(n) {
                            return o(e, {
                                to: n || t,
                                addClass: r.transitionOutClass,
                                removeClass: r.transitionInClass
                            }).start()
                        }
                        return o(e, {
                            from: t,
                            to: n,
                            addClass: r.transitionInClass
                        }).start().then(function() {
                            return i
                        })
                    },
                    waitTransitionEnd: function(e, t) {
                        var o = 3e3;
                        return n(function(n, a) {
                            function s(t) {
                                t && t.target !== e[0] || (t && r.cancel(c), e.off(i.CSS.TRANSITIONEND, s), n())
                            }
                            t = t || {};
                            var c = r(s, t.timeout || o);
                            e.on(i.CSS.TRANSITIONEND, s)
                        })
                    },
                    calculateZoomToOrigin: function(n, r) {
                        var i = r.element,
                            o = "translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",
                            s = t.bind(null, e.supplant, o),
                            c = s({
                                centerX: 0,
                                centerY: 0,
                                scaleX: .5,
                                scaleY: .5
                            });
                        if (i) {
                            var l = a.clientRect(i) || a.copyRect(r.bounds),
                                d = a.copyRect(n[0].getBoundingClientRect()),
                                u = a.centerPointFor(d),
                                m = a.centerPointFor(l);
                            c = s({
                                centerX: m.x - u.x,
                                centerY: m.y - u.y,
                                scaleX: Math.round(100 * Math.min(.5, l.width / d.width)) / 100,
                                scaleY: Math.round(100 * Math.min(.5, l.height / d.height)) / 100
                            })
                        }
                        return c
                    },
                    toCss: function(e) {
                        function n(e, n, i) {
                            t.forEach(n.split(" "), function(e) {
                                r[e] = i
                            })
                        }
                        var r = {},
                            o = "left top right bottom width height x y min-width min-height max-width max-height";
                        return t.forEach(e, function(e, a) {
                            if (!t.isUndefined(e))
                                if (o.indexOf(a) >= 0) r[a] = e + "px";
                                else switch (a) {
                                    case "transition":
                                        n(a, i.CSS.TRANSITION, e);
                                        break;
                                    case "transform":
                                        n(a, i.CSS.TRANSFORM, e);
                                        break;
                                    case "transformOrigin":
                                        n(a, i.CSS.TRANSFORM_ORIGIN, e)
                                }
                        }), r
                    },
                    toTransformCss: function(e, n, r) {
                        var o = {};
                        return t.forEach(i.CSS.TRANSFORM.split(" "), function(t) {
                            o[t] = e
                        }), n && (r = r || "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important", o.transition = r), o
                    },
                    copyRect: function(e, n) {
                        return e ? (n = n || {}, t.forEach("left top right bottom width height".split(" "), function(t) {
                            n[t] = Math.round(e[t])
                        }), n.width = n.width || n.right - n.left, n.height = n.height || n.bottom - n.top, n) : null
                    },
                    clientRect: function(e) {
                        var n = t.element(e)[0].getBoundingClientRect(),
                            r = function(e) {
                                return e && e.width > 0 && e.height > 0
                            };
                        return r(n) ? a.copyRect(n) : null
                    },
                    centerPointFor: function(e) {
                        return {
                            x: Math.round(e.left + e.width / 2),
                            y: Math.round(e.top + e.height / 2)
                        }
                    }
                }
            }
            t.module("material.core").factory("$$mdAnimate", ["$q", "$timeout", "$mdConstant", "$animateCss", function(t, n, r, i) {
                return function(o) {
                    return e(o, t, n, r, i)
                }
            }])
        }(),
        function() {
            t.version.minor >= 4 ? t.module("material.core.animate", []) : ! function() {
                function e(e) {
                    return e.replace(/-[a-z]/g, function(e) {
                        return e.charAt(1).toUpperCase()
                    })
                }
                var n = t.forEach,
                    r = t.isDefined(document.documentElement.style.WebkitAppearance),
                    i = r ? "-webkit-" : "",
                    o = (r ? "webkitTransitionEnd " : "") + "transitionend",
                    a = (r ? "webkitAnimationEnd " : "") + "animationend",
                    s = ["$document", function(e) {
                        return function() {
                            return e[0].body.clientWidth + 1
                        }
                    }],
                    c = ["$$rAF", function(e) {
                        return function() {
                            var t = !1;
                            return e(function() {
                                    t = !0
                                }),
                                function(n) {
                                    t ? n() : e(n)
                                }
                        }
                    }],
                    l = ["$q", "$$rAFMutex", function(e, r) {
                        function i(e) {
                            this.setHost(e), this._doneCallbacks = [], this._runInAnimationFrame = r(), this._state = 0
                        }
                        var o = 0,
                            a = 1,
                            s = 2;
                        return i.prototype = {
                            setHost: function(e) {
                                this.host = e || {}
                            },
                            done: function(e) {
                                this._state === s ? e() : this._doneCallbacks.push(e)
                            },
                            progress: t.noop,
                            getPromise: function() {
                                if (!this.promise) {
                                    var t = this;
                                    this.promise = e(function(e, n) {
                                        t.done(function(t) {
                                            t === !1 ? n() : e()
                                        })
                                    })
                                }
                                return this.promise
                            },
                            then: function(e, t) {
                                return this.getPromise().then(e, t)
                            },
                            "catch": function(e) {
                                return this.getPromise()["catch"](e)
                            },
                            "finally": function(e) {
                                return this.getPromise()["finally"](e)
                            },
                            pause: function() {
                                this.host.pause && this.host.pause()
                            },
                            resume: function() {
                                this.host.resume && this.host.resume()
                            },
                            end: function() {
                                this.host.end && this.host.end(), this._resolve(!0)
                            },
                            cancel: function() {
                                this.host.cancel && this.host.cancel(), this._resolve(!1)
                            },
                            complete: function(e) {
                                var t = this;
                                t._state === o && (t._state = a, t._runInAnimationFrame(function() {
                                    t._resolve(e)
                                }))
                            },
                            _resolve: function(e) {
                                this._state !== s && (n(this._doneCallbacks, function(t) {
                                    t(e)
                                }), this._doneCallbacks.length = 0, this._state = s)
                            }
                        }, i
                    }];
                t.module("material.core.animate", []).factory("$$forceReflow", s).factory("$$AnimateRunner", l).factory("$$rAFMutex", c).factory("$animateCss", ["$window", "$$rAF", "$$AnimateRunner", "$$forceReflow", "$$jqLite", "$timeout", function(t, s, c, l, d, u) {
                    function m(r, s) {
                        var l = [],
                            d = E(r);
                        s.transitionStyle && l.push([i + "transition", s.transitionStyle]), s.keyframeStyle && l.push([i + "animation", s.keyframeStyle]), s.delay && l.push([i + "transition-delay", s.delay + "s"]), s.duration && l.push([i + "transition-duration", s.duration + "s"]);
                        var m = s.keyframeStyle || s.to && (s.duration > 0 || s.transitionStyle),
                            p = !!s.addClass || !!s.removeClass,
                            M = m || p;
                        y(r, !0), $(r, s);
                        var C, w, x = !1;
                        return {
                            close: t.close,
                            start: function() {
                                function t() {
                                    return x ? void 0 : (x = !0, C && w && r.off(C, w), f(r, s), v(r, s), n(l, function(t) {
                                        d.style[e(t[0])] = ""
                                    }), m.complete(!0), m)
                                }
                                var m = new c;
                                return g(function() {
                                    if (y(r, !1), !M) return t();
                                    n(l, function(t) {
                                        var n = t[0],
                                            r = t[1];
                                        d.style[e(n)] = r
                                    }), f(r, s);
                                    var c = h(r);
                                    if (0 === c.duration) return t();
                                    var m = [];
                                    s.easing && (c.transitionDuration && m.push([i + "transition-timing-function", s.easing]), c.animationDuration && m.push([i + "animation-timing-function", s.easing])), s.delay && c.animationDelay && m.push([i + "animation-delay", s.delay + "s"]), s.duration && c.animationDuration && m.push([i + "animation-duration", s.duration + "s"]), n(m, function(t) {
                                        var n = t[0],
                                            r = t[1];
                                        d.style[e(n)] = r, l.push(t)
                                    });
                                    var p = c.delay,
                                        g = 1e3 * p,
                                        v = c.duration,
                                        $ = 1e3 * v,
                                        E = Date.now();
                                    C = [], c.transitionDuration && C.push(o), c.animationDuration && C.push(a), C = C.join(" "), w = function(e) {
                                        e.stopPropagation();
                                        var n = e.originalEvent || e,
                                            r = n.timeStamp || Date.now(),
                                            i = parseFloat(n.elapsedTime.toFixed(3));
                                        Math.max(r - E, 0) >= g && i >= v && t()
                                    }, r.on(C, w), b(r, s), u(t, g + 1.5 * $, !1)
                                }), m
                            }
                        }
                    }

                    function f(e, t) {
                        t.addClass && (d.addClass(e, t.addClass), t.addClass = null), t.removeClass && (d.removeClass(e, t.removeClass), t.removeClass = null)
                    }

                    function h(e) {
                        function n(e) {
                            return r ? "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) : e
                        }
                        var i = E(e),
                            o = t.getComputedStyle(i),
                            a = p(o[n("transitionDuration")]),
                            s = p(o[n("animationDuration")]),
                            c = p(o[n("transitionDelay")]),
                            l = p(o[n("animationDelay")]);
                        s *= parseInt(o[n("animationIterationCount")], 10) || 1;
                        var d = Math.max(s, a),
                            u = Math.max(l, c);
                        return {
                            duration: d,
                            delay: u,
                            animationDuration: s,
                            transitionDuration: a,
                            animationDelay: l,
                            transitionDelay: c
                        }
                    }

                    function p(e) {
                        var t = 0,
                            r = (e || "").split(/\s*,\s*/);
                        return n(r, function(e) {
                            "s" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, t = t ? Math.max(e, t) : e
                        }), t
                    }

                    function g(e) {
                        M && M(), C.push(e), M = s(function() {
                            M = null;
                            for (var e = l(), t = 0; t < C.length; t++) C[t](e);
                            C.length = 0
                        })
                    }

                    function v(e, t) {
                        $(e, t), b(e, t)
                    }

                    function $(e, t) {
                        t.from && (e.css(t.from), t.from = null)
                    }

                    function b(e, t) {
                        t.to && (e.css(t.to), t.to = null)
                    }

                    function E(e) {
                        for (var t = 0; t < e.length; t++)
                            if (1 === e[t].nodeType) return e[t]
                    }

                    function y(t, n) {
                        var r = E(t),
                            o = e(i + "transition-delay");
                        r.style[o] = n ? "-9999s" : ""
                    }
                    var M, C = [];
                    return m
                }])
            }()
        }(),
        function() {
            t.module("material.components.autocomplete", ["material.core", "material.components.icon", "material.components.virtualRepeat"])
        }(),
        function() {
            t.module("material.components.backdrop", ["material.core"]).directive("mdBackdrop", ["$mdTheming", "$animate", "$rootElement", "$window", "$log", "$$rAF", "$document", function(e, t, n, r, i, o, a) {
                function s(s, l, d) {
                    var u = r.getComputedStyle(a[0].body);
                    if ("fixed" == u.position) {
                        var m = parseInt(u.height, 10) + Math.abs(parseInt(u.top, 10));
                        l.css({
                            height: m + "px"
                        })
                    }
                    t.pin && t.pin(l, n), o(function() {
                        var t = l.parent()[0];
                        if (t) {
                            var n = r.getComputedStyle(t);
                            "static" == n.position && i.warn(c)
                        }
                        e.inherit(l, l.parent())
                    })
                }
                var c = "<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";
                return {
                    restrict: "E",
                    link: s
                }
            }])
        }(),
        function() {
            function e(e) {
                return {
                    restrict: "E",
                    link: function(t, n, r) {
                        t.$on("$destroy", function() {
                            e.destroy()
                        })
                    }
                }
            }

            function n(e) {
                function n(e, n, o, a, s, c, l) {
                    function d(r, i, l, d) {
                        i = o.extractElementByName(i, "md-bottom-sheet"), f = o.createBackdrop(r, "md-bottom-sheet-backdrop md-opaque"), l.clickOutsideToClose && f.on("click", function() {
                            o.nextTick(s.cancel, !0)
                        }), a.inherit(f, l.parent), e.enter(f, l.parent, null);
                        var u = new m(i, l.parent);
                        return l.bottomSheet = u, a.inherit(u.element, l.parent), l.disableParentScroll && (l.restoreScroll = o.disableScrollAround(u.element, l.parent)), e.enter(u.element, l.parent).then(function() {
                            var e = o.findFocusTarget(i) || t.element(i[0].querySelector("button") || i[0].querySelector("a") || i[0].querySelector("[ng-click]"));
                            e.focus(), l.escapeToClose && (l.rootElementKeyupCallback = function(e) {
                                e.keyCode === n.KEY_CODE.ESCAPE && o.nextTick(s.cancel, !0)
                            }, c.on("keyup", l.rootElementKeyupCallback))
                        })
                    }

                    function u(t, n, r) {
                        var i = r.bottomSheet;
                        return e.leave(f), e.leave(i.element).then(function() {
                            r.disableParentScroll && (r.restoreScroll(), delete r.restoreScroll), i.cleanup()
                        })
                    }

                    function m(e, t) {
                        function a(t) {
                            e.css(n.CSS.TRANSITION_DURATION, "0ms")
                        }

                        function c(t) {
                            var r = t.pointer.distanceY;
                            5 > r && (r = Math.max(-i, r / 2)), e.css(n.CSS.TRANSFORM, "translate3d(0," + (i + r) + "px,0)")
                        }

                        function d(t) {
                            if (t.pointer.distanceY > 0 && (t.pointer.distanceY > 20 || Math.abs(t.pointer.velocityY) > r)) {
                                var i = e.prop("offsetHeight") - t.pointer.distanceY,
                                    a = Math.min(i / t.pointer.velocityY * .75, 500);
                                e.css(n.CSS.TRANSITION_DURATION, a + "ms"), o.nextTick(s.cancel, !0)
                            } else e.css(n.CSS.TRANSITION_DURATION, ""), e.css(n.CSS.TRANSFORM, "")
                        }
                        var u = l.register(t, "drag", {
                            horizontal: !1
                        });
                        return t.on("$md.dragstart", a).on("$md.drag", c).on("$md.dragend", d), {
                            element: e,
                            cleanup: function() {
                                u(), t.off("$md.dragstart", a), t.off("$md.drag", c), t.off("$md.dragend", d)
                            }
                        }
                    }
                    var f;
                    return {
                        themable: !0,
                        onShow: d,
                        onRemove: u,
                        escapeToClose: !0,
                        clickOutsideToClose: !0,
                        disableParentScroll: !0
                    }
                }
                var r = .5,
                    i = 80;
                return n.$inject = ["$animate", "$mdConstant", "$mdUtil", "$mdTheming", "$mdBottomSheet", "$rootElement", "$mdGesture"], e("$mdBottomSheet").setDefaults({
                    methods: ["disableParentScroll", "escapeToClose", "clickOutsideToClose"],
                    options: n
                })
            }
            t.module("material.components.bottomSheet", ["material.core", "material.components.backdrop"]).directive("mdBottomSheet", e).provider("$mdBottomSheet", n), e.$inject = ["$mdBottomSheet"], n.$inject = ["$$interimElementProvider"]
        }(),
        function() {
            function e(e, n, r, i) {
                function o(e) {
                    return t.isDefined(e.href) || t.isDefined(e.ngHref) || t.isDefined(e.ngLink) || t.isDefined(e.uiSref)
                }

                function a(e, t) {
                    return o(t) ? '<a class="md-button" ng-transclude></a>' : '<button class="md-button" ng-transclude></button>'
                }

                function s(a, s, c) {
                    var l = s[0];
                    n(s), e.attach(a, s);
                    var d = l.textContent.trim();
                    d || r.expect(s, "aria-label"), o(c) && t.isDefined(c.ngDisabled) && a.$watch(c.ngDisabled, function(e) {
                        s.attr("tabindex", e ? -1 : 0)
                    }), s.on("click", function(e) {
                        c.disabled === !0 && (e.preventDefault(), e.stopImmediatePropagation())
                    }), a.mouseActive = !1, s.on("mousedown", function() {
                        a.mouseActive = !0, i(function() {
                            a.mouseActive = !1
                        }, 100)
                    }).on("focus", function() {
                        a.mouseActive === !1 && s.addClass("md-focused")
                    }).on("blur", function(e) {
                        s.removeClass("md-focused")
                    })
                }
                return {
                    restrict: "EA",
                    replace: !0,
                    transclude: !0,
                    template: a,
                    link: s
                }
            }
            t.module("material.components.button", ["material.core"]).directive("mdButton", e), e.$inject = ["$mdButtonInkRipple", "$mdTheming", "$mdAria", "$timeout"]
        }(),
        function() {
            function e(e) {
                return {
                    restrict: "E",
                    link: function(t, n, r) {
                        e(n)
                    }
                }
            }
            t.module("material.components.card", ["material.core"]).directive("mdCard", e), e.$inject = ["$mdTheming"]
        }(),
        function() {
            function e(e, n, r, i, o, a) {
                function s(s, l) {
                    return l.type = "checkbox", l.tabindex = l.tabindex || "0", s.attr("role", l.type), s.on("click", function(e) {
                            this.hasAttribute("disabled") && e.stopImmediatePropagation()
                        }),
                        function(s, l, d, u) {
                            function m(e, t, n) {
                                d[e] && s.$watch(d[e], function(e) {
                                    n[e] && l.attr(t, n[e])
                                })
                            }

                            function f(e) {
                                var t = e.which || e.keyCode;
                                (t === r.KEY_CODE.SPACE || t === r.KEY_CODE.ENTER) && (e.preventDefault(), l.hasClass("md-focused") || l.addClass("md-focused"), h(e))
                            }

                            function h(e) {
                                l[0].hasAttribute("disabled") || s.$apply(function() {
                                    var t = d.ngChecked ? d.checked : !u.$viewValue;
                                    u.$setViewValue(t, e && e.type), u.$render()
                                })
                            }

                            function p() {
                                u.$viewValue ? l.addClass(c) : l.removeClass(c)
                            }
                            u = u || o.fakeNgModel(), i(l), d.ngChecked && s.$watch(s.$eval.bind(s, d.ngChecked), u.$setViewValue.bind(u)), m("ngDisabled", "tabindex", {
                                "true": "-1",
                                "false": d.tabindex
                            }), n.expectWithText(l, "aria-label"), e.link.pre(s, {
                                on: t.noop,
                                0: {}
                            }, d, [u]), s.mouseActive = !1, l.on("click", h).on("keypress", f).on("mousedown", function() {
                                s.mouseActive = !0, a(function() {
                                    s.mouseActive = !1
                                }, 100)
                            }).on("focus", function() {
                                s.mouseActive === !1 && l.addClass("md-focused")
                            }).on("blur", function() {
                                l.removeClass("md-focused")
                            }), u.$render = p
                        }
                }
                e = e[0];
                var c = "md-checked";
                return {
                    restrict: "E",
                    transclude: !0,
                    require: "?ngModel",
                    priority: 210,
                    template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',
                    compile: s
                }
            }
            t.module("material.components.checkbox", ["material.core"]).directive("mdCheckbox", e), e.$inject = ["inputDirective", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil", "$timeout"]
        }(),
        function() {
            t.module("material.components.chips", ["material.core", "material.components.autocomplete"])
        }(),
        function() {
            function e(e) {
                function t(e, t) {
                    this.$scope = e, this.$element = t
                }
                return {
                    restrict: "E",
                    controller: ["$scope", "$element", t],
                    link: function(t, r, i) {
                        r[0];
                        e(r), t.$broadcast("$mdContentLoaded", r), n(r[0])
                    }
                }
            }

            function n(e) {
                t.element(e).on("$md.pressdown", function(t) {
                    "t" === t.pointer.type && (t.$materialScrollFixed || (t.$materialScrollFixed = !0, 0 === e.scrollTop ? e.scrollTop = 1 : e.scrollHeight === e.scrollTop + e.offsetHeight && (e.scrollTop -= 1)))
                })
            }
            t.module("material.components.content", ["material.core"]).directive("mdContent", e), e.$inject = ["$mdTheming"]
        }(),
        function() {
            function e(e, n, r) {
                return {
                    restrict: "E",
                    link: function(i, o, a) {
                        n(o), e(function() {
                            function e() {
                                o.toggleClass("md-content-overflow", a.scrollHeight > a.clientHeight)
                            }
                            var n, a = o[0].querySelector("md-dialog-content");
                            a && (n = a.getElementsByTagName("img"), e(), t.element(n).on("load", e)), i.$on("$destroy", function() {
                                r.destroy()
                            })
                        })
                    }
                }
            }

            function n(e) {
                function n(e, t) {
                    return {
                        template: ['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">', ' <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">', '   <h2 class="md-title">{{ dialog.title }}</h2>', '   <div class="md-dialog-content-body" md-template="::dialog.mdContent"></div>', " </md-dialog-content>", ' <div class="md-actions">', '   <md-button ng-if="dialog.$type == \'confirm\'"     ng-click="dialog.abort()" class="md-primary">', "     {{ dialog.cancel }}", "   </md-button>", '   <md-button ng-click="dialog.hide()" class="md-primary" md-autofocus="dialog.$type!=\'confirm\'">', "     {{ dialog.ok }}", "   </md-button>", " </div>", "</md-dialog>"].join("").replace(/\s\s+/g, ""),
                        controller: function() {
                            this.hide = function() {
                                e.hide(!0)
                            }, this.abort = function() {
                                e.cancel()
                            }
                        },
                        controllerAs: "dialog",
                        bindToController: !0,
                        theme: t.defaultTheme()
                    }
                }

                function r(e, n, r, i, o, a, s, c) {
                    function l(e, n, i, o) {
                        function s() {
                            function e() {
                                var e = n[0].querySelector(".dialog-close");
                                if (!e) {
                                    var r = n[0].querySelectorAll(".md-actions button");
                                    e = r[r.length - 1]
                                }
                                return t.element(e)
                            }
                            if (i.focusOnOpen) {
                                var o = r.findFocusTarget(n) || e();
                                o.focus()
                            }
                        }

                        function c() {
                            if (o) {
                                var e = /<\/[\w-]*>/gm,
                                    t = o.content || i.content || "",
                                    n = e.test(t);
                                n || (t = r.supplant("<p>{0}</p>", [t])), o.mdContent = t
                            }
                        }
                        return t.element(a[0].body).addClass("md-dialog-is-showing"), c(), u(n, i), h(n.find("md-dialog"), i), f(e, n, i), v(n, i).then(function() {
                            m(n, i), p(n, i), s()
                        })
                    }

                    function d(e, n, r) {
                        function i() {
                            return $(n, r)
                        }

                        function o() {
                            t.element(a[0].body).removeClass("md-dialog-is-showing"), n.remove(), r.$destroy || r.origin.focus()
                        }
                        return r.deactivateListeners(), r.unlockScreenReader(), r.hideBackdrop(r.$destroy), r.$destroy ? o() : i().then(o)
                    }

                    function u(e, n) {
                        n.origin = t.extend({
                            element: null,
                            bounds: null,
                            focus: t.noop
                        }, n.origin || {});
                        var r = t.element((n.targetEvent || {}).target);
                        if (r && r.length && (n.origin.element = r, n.origin.bounds = r[0].getBoundingClientRect(), n.origin.focus = function() {
                                r.focus()
                            }), t.isString(n.parent)) {
                            var i = n.parent,
                                o = a[0].querySelectorAll(i);
                            n.parent = o.length ? o[0] : null
                        }
                        n.parent = t.element(n.parent || c)
                    }

                    function m(n, o) {
                        var a = t.element(s),
                            c = r.debounce(function() {
                                g(n, o)
                            }, 60),
                            l = [],
                            d = function() {
                                var t = "alert" == o.$type ? e.hide : e.cancel;
                                r.nextTick(t, !0)
                            };
                        if (o.escapeToClose) {
                            var u = o.parent,
                                m = function(e) {
                                    e.keyCode === i.KEY_CODE.ESCAPE && (e.stopPropagation(), e.preventDefault(), d())
                                };
                            n.on("keydown", m), u.on("keydown", m), a.on("resize", c), l.push(function() {
                                n.off("keydown", m), u.off("keydown", m), a.off("resize", c)
                            })
                        }
                        if (o.clickOutsideToClose) {
                            var f, u = n,
                                h = function(e) {
                                    f = e.target
                                },
                                p = function(e) {
                                    f === u[0] && e.target === u[0] && (e.stopPropagation(), e.preventDefault(), d())
                                };
                            u.on("mousedown", h), u.on("mouseup", p), l.push(function() {
                                u.off("mousedown", h), u.off("mouseup", p)
                            })
                        }
                        o.deactivateListeners = function() {
                            l.forEach(function(e) {
                                e()
                            }), o.deactivateListeners = null
                        }
                    }

                    function f(e, t, n) {
                        n.disableParentScroll && (n.restoreScroll = r.disableScrollAround(t, n.parent)), n.hasBackdrop && (n.backdrop = r.createBackdrop(e, "md-dialog-backdrop md-opaque"), o.enter(n.backdrop, n.parent)), n.hideBackdrop = function(e) {
                            n.backdrop && (e ? n.backdrop.remove() : o.leave(n.backdrop)), n.disableParentScroll && (n.restoreScroll(), delete n.restoreScroll), n.hideBackdrop = null
                        }
                    }

                    function h(e, t) {
                        var i = "alert" === t.$type ? "alertdialog" : "dialog",
                            o = e.find("md-dialog-content"),
                            a = e.attr("id") || "dialog_" + r.nextUid();
                        e.attr({
                            role: i,
                            tabIndex: "-1"
                        }), 0 === o.length && (o = e), o.attr("id", a), e.attr("aria-describedby", a), t.ariaLabel ? n.expect(e, "aria-label", t.ariaLabel) : n.expectAsync(e, "aria-label", function() {
                            var e = o.text().split(/\s+/);
                            return e.length > 3 && (e = e.slice(0, 3).concat("...")), e.join(" ")
                        })
                    }

                    function p(e, t) {
                        function n(e) {
                            for (; e.parentNode;) {
                                if (e === document.body) return;
                                for (var t = e.parentNode.children, i = 0; i < t.length; i++) e === t[i] || b(t[i], ["SCRIPT", "STYLE"]) || t[i].setAttribute("aria-hidden", r);
                                n(e = e.parentNode)
                            }
                        }
                        var r = !0;
                        n(e[0]), t.unlockScreenReader = function() {
                            r = !1, n(e[0]), t.unlockScreenReader = null
                        }
                    }

                    function g(e, t) {
                        var n = "fixed" == s.getComputedStyle(a[0].body).position,
                            i = t.backdrop ? s.getComputedStyle(t.backdrop[0]) : null,
                            o = i ? Math.min(a[0].body.clientHeight, Math.ceil(Math.abs(parseInt(i.height, 10)))) : 0;
                        return e.css({
                            top: (n ? r.scrollTop(t.parent) : 0) + "px",
                            height: o ? o + "px" : "100%"
                        }), e
                    }

                    function v(e, t) {
                        t.parent.append(e), g(e, t);
                        var n = e.find("md-dialog"),
                            i = r.dom.animator,
                            o = i.calculateZoomToOrigin,
                            a = {
                                transitionInClass: "md-transition-in",
                                transitionOutClass: "md-transition-out"
                            },
                            s = i.toTransformCss(o(n, t.origin)),
                            c = i.toTransformCss("");
                        return i.translate3d(n, s, c, a).then(function(e) {
                            return t.reverseAnimate = function() {
                                return delete t.reverseAnimate, e(i.toTransformCss(o(n, t.origin)))
                            }, !0
                        })
                    }

                    function $(e, t) {
                        return t.reverseAnimate()
                    }

                    function b(e, t) {
                        return -1 !== t.indexOf(e.nodeName) ? !0 : void 0
                    }
                    return {
                        hasBackdrop: !0,
                        isolateScope: !0,
                        onShow: l,
                        onRemove: d,
                        clickOutsideToClose: !1,
                        escapeToClose: !0,
                        targetEvent: null,
                        focusOnOpen: !0,
                        disableParentScroll: !0,
                        transformTemplate: function(e) {
                            function t(e) {
                                return /<\/md-dialog>/g.test(e) ? e : "<md-dialog>" + e + "</md-dialog>"
                            }
                            return '<div class="md-dialog-container">' + t(e) + "</div>"
                        }
                    }
                }
                return n.$inject = ["$mdDialog", "$mdTheming"], r.$inject = ["$mdDialog", "$mdAria", "$mdUtil", "$mdConstant", "$animate", "$document", "$window", "$rootElement"], e("$mdDialog").setDefaults({
                    methods: ["disableParentScroll", "hasBackdrop", "clickOutsideToClose", "escapeToClose", "targetEvent", "parent"],
                    options: r
                }).addPreset("alert", {
                    methods: ["title", "content", "ariaLabel", "ok", "theme", "css"],
                    options: n
                }).addPreset("confirm", {
                    methods: ["title", "content", "ariaLabel", "ok", "cancel", "theme", "css"],
                    options: n
                })
            }
            t.module("material.components.dialog", ["material.core", "material.components.backdrop"]).directive("mdDialog", e).provider("$mdDialog", n), e.$inject = ["$$rAF", "$mdTheming", "$mdDialog"], n.$inject = ["$$interimElementProvider"]
        }(),
        function() {
            function e(e) {
                return {
                    restrict: "E",
                    link: e
                }
            }
            t.module("material.components.divider", ["material.core"]).directive("mdDivider", e), e.$inject = ["$mdTheming"]
        }(),
        function() {
            ! function() {
                function e() {
                    return {
                        template: '<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="' + (i - r) + '"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody role="rowgroup" md-virtual-repeat="i in ctrl.items" md-calendar-month md-month-offset="$index" class="md-calendar-month" md-start-index="ctrl.getSelectedMonthIndex()" md-item-size="' + r + '"></tbody></table></md-virtual-repeat-container></div>',
                        scope: {
                            minDate: "=mdMinDate",
                            maxDate: "=mdMaxDate"
                        },
                        require: ["ngModel", "mdCalendar"],
                        controller: n,
                        controllerAs: "ctrl",
                        bindToController: !0,
                        link: function(e, t, n, r) {
                            var i = r[0],
                                o = r[1];
                            o.configureNgModel(i)
                        }
                    }
                }

                function n(e, t, n, r, i, o, a, c, l, d, u) {
                    if (a(e), this.items = {
                            length: 2e3
                        }, this.maxDate && this.minDate) {
                        var m = c.getMonthDistance(this.minDate, this.maxDate) + 1;
                        m = Math.max(m, 1), m += 1, this.items.length = m
                    }
                    if (this.$animate = r, this.$q = i, this.$mdInkRipple = d, this.$mdUtil = u, this.keyCode = o.KEY_CODE, this.dateUtil = c, this.dateLocale = l, this.$element = e, this.$scope = n, this.calendarElement = e[0].querySelector(".md-calendar"), this.calendarScroller = e[0].querySelector(".md-virtual-repeat-scroller"), this.today = this.dateUtil.createDateAtMidnight(), this.firstRenderableDate = this.dateUtil.incrementMonths(this.today, -this.items.length / 2), this.minDate && this.minDate > this.firstRenderableDate) this.firstRenderableDate = this.minDate;
                    else if (this.maxDate) {
                        {
                            this.items.length - 2
                        }
                        this.firstRenderableDate = this.dateUtil.incrementMonths(this.maxDate, -(this.items.length - 2))
                    }
                    this.id = s++, this.ngModelCtrl = null, this.selectedDate = null, this.displayDate = null, this.focusDate = null, this.isInitialized = !1, this.isMonthTransitionInProgress = !1, t.tabindex || e.attr("tabindex", "-1");
                    var f = this;
                    this.cellClickHandler = function() {
                        var e = this;
                        this.hasAttribute("data-timestamp") && n.$apply(function() {
                            var t = Number(e.getAttribute("data-timestamp"));
                            f.setNgModelValue(f.dateUtil.createDateAtMidnight(t))
                        })
                    }, this.attachCalendarEventListeners()
                }
                t.module("material.components.datepicker", ["material.core", "material.components.icon", "material.components.virtualRepeat"]).directive("mdCalendar", e);
                var r = 265,
                    i = 45,
                    o = "md-calendar-selected-date",
                    a = "md-focus",
                    s = 0;
                n.$inject = ["$element", "$attrs", "$scope", "$animate", "$q", "$mdConstant", "$mdTheming", "$$mdDateUtil", "$mdDateLocale", "$mdInkRipple", "$mdUtil"], n.prototype.configureNgModel = function(e) {
                    this.ngModelCtrl = e;
                    var t = this;
                    e.$render = function() {
                        t.changeSelectedDate(t.ngModelCtrl.$viewValue)
                    }
                }, n.prototype.buildInitialCalendarDisplay = function() {
                    this.buildWeekHeader(), this.hideVerticalScrollbar(), this.displayDate = this.selectedDate || this.today, this.isInitialized = !0
                }, n.prototype.hideVerticalScrollbar = function() {
                    var e = this.$element[0],
                        t = e.querySelector(".md-calendar-scroll-mask"),
                        n = this.calendarScroller,
                        r = e.querySelector(".md-calendar-day-header").clientWidth,
                        i = n.offsetWidth - n.clientWidth;
                    t.style.width = r + "px", n.style.width = r + i + "px", n.style.paddingRight = i + "px"
                }, n.prototype.attachCalendarEventListeners = function() {
                    this.$element.on("keydown", t.bind(this, this.handleKeyEvent))
                }, n.prototype.handleKeyEvent = function(e) {
                    var t = this;
                    this.$scope.$apply(function() {
                        if (e.which == t.keyCode.ESCAPE || e.which == t.keyCode.TAB) return t.$scope.$emit("md-calendar-close"), void(e.which == t.keyCode.TAB && e.preventDefault());
                        if (e.which === t.keyCode.ENTER) return t.setNgModelValue(t.displayDate), void e.preventDefault();
                        var n = t.getFocusDateFromKeyEvent(e);
                        n && (n = t.boundDateByMinAndMax(n), e.preventDefault(), e.stopPropagation(), t.changeDisplayDate(n).then(function() {
                            t.focus(n)
                        }))
                    })
                }, n.prototype.getFocusDateFromKeyEvent = function(e) {
                    var t = this.dateUtil,
                        n = this.keyCode;
                    switch (e.which) {
                        case n.RIGHT_ARROW:
                            return t.incrementDays(this.displayDate, 1);
                        case n.LEFT_ARROW:
                            return t.incrementDays(this.displayDate, -1);
                        case n.DOWN_ARROW:
                            return e.metaKey ? t.incrementMonths(this.displayDate, 1) : t.incrementDays(this.displayDate, 7);
                        case n.UP_ARROW:
                            return e.metaKey ? t.incrementMonths(this.displayDate, -1) : t.incrementDays(this.displayDate, -7);
                        case n.PAGE_DOWN:
                            return t.incrementMonths(this.displayDate, 1);
                        case n.PAGE_UP:
                            return t.incrementMonths(this.displayDate, -1);
                        case n.HOME:
                            return t.getFirstDateOfMonth(this.displayDate);
                        case n.END:
                            return t.getLastDateOfMonth(this.displayDate);
                        default:
                            return null
                    }
                }, n.prototype.getSelectedMonthIndex = function() {
                    return this.dateUtil.getMonthDistance(this.firstRenderableDate, this.selectedDate || this.today)
                }, n.prototype.scrollToMonth = function(e) {
                    if (this.dateUtil.isValidDate(e)) {
                        var t = this.dateUtil.getMonthDistance(this.firstRenderableDate, e);
                        this.calendarScroller.scrollTop = t * r
                    }
                }, n.prototype.setNgModelValue = function(e) {
                    this.$scope.$emit("md-calendar-change", e), this.ngModelCtrl.$setViewValue(e), this.ngModelCtrl.$render()
                }, n.prototype.focus = function(e) {
                    var t = e || this.selectedDate || this.today,
                        n = this.calendarElement.querySelector(".md-focus");
                    n && n.classList.remove(a);
                    var r = this.getDateId(t),
                        i = document.getElementById(r);
                    i ? (i.classList.add(a), i.focus()) : this.focusDate = t
                }, n.prototype.boundDateByMinAndMax = function(e) {
                    var t = e;
                    return this.minDate && e < this.minDate && (t = new Date(this.minDate.getTime())), this.maxDate && e > this.maxDate && (t = new Date(this.maxDate.getTime())), t
                }, n.prototype.changeSelectedDate = function(e) {
                    var t = this,
                        n = this.selectedDate;
                    this.selectedDate = e, this.changeDisplayDate(e).then(function() {
                        if (n) {
                            var r = document.getElementById(t.getDateId(n));
                            r && (r.classList.remove(o), r.setAttribute("aria-selected", "false"))
                        }
                        if (e) {
                            var i = document.getElementById(t.getDateId(e));
                            i && (i.classList.add(o), i.setAttribute("aria-selected", "true"))
                        }
                    })
                }, n.prototype.changeDisplayDate = function(e) {
                    if (!this.isInitialized) return this.buildInitialCalendarDisplay(), this.$q.when();
                    if (!this.dateUtil.isValidDate(e) || this.isMonthTransitionInProgress) return this.$q.when();
                    this.isMonthTransitionInProgress = !0;
                    var t = this.animateDateChange(e);
                    this.displayDate = e;
                    var n = this;
                    return t.then(function() {
                        n.isMonthTransitionInProgress = !1
                    }), t
                }, n.prototype.animateDateChange = function(e) {
                    return this.scrollToMonth(e), this.$q.when()
                }, n.prototype.buildWeekHeader = function() {
                    for (var e = this.dateLocale.firstDayOfWeek, t = this.dateLocale.shortDays, n = document.createElement("tr"), r = 0; 7 > r; r++) {
                        var i = document.createElement("th");
                        i.textContent = t[(r + e) % 7], n.appendChild(i)
                    }
                    this.$element.find("thead").append(n)
                }, n.prototype.getDateId = function(e) {
                    return ["md", this.id, e.getFullYear(), e.getMonth(), e.getDate()].join("-")
                }
            }()
        }(),
        function() {
            ! function() {
                function e() {
                    return {
                        require: ["^^mdCalendar", "mdCalendarMonth"],
                        scope: {
                            offset: "=mdMonthOffset"
                        },
                        controller: n,
                        controllerAs: "mdMonthCtrl",
                        bindToController: !0,
                        link: function(e, t, n, r) {
                            var i = r[0],
                                o = r[1];
                            o.calendarCtrl = i, o.generateContent(), e.$watch(function() {
                                return o.offset
                            }, function(e, t) {
                                e != t && o.generateContent()
                            })
                        }
                    }
                }

                function n(e, t, n) {
                    this.dateUtil = t, this.dateLocale = n, this.$element = e, this.calendarCtrl = null, this.offset, this.focusAfterAppend = null
                }
                t.module("material.components.datepicker").directive("mdCalendarMonth", e);
                var r = "md-calendar-date-today",
                    i = "md-calendar-selected-date",
                    o = "md-focus";
                n.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], n.prototype.generateContent = function() {
                    var e = this.calendarCtrl,
                        t = this.dateUtil.incrementMonths(e.firstRenderableDate, this.offset);
                    this.$element.empty(), this.$element.append(this.buildCalendarForMonth(t)), this.focusAfterAppend && (this.focusAfterAppend.classList.add(o), this.focusAfterAppend.focus(), this.focusAfterAppend = null)
                }, n.prototype.buildDateCell = function(e) {
                    var t = this.calendarCtrl,
                        n = document.createElement("td");
                    if (n.tabIndex = -1, n.classList.add("md-calendar-date"), n.setAttribute("role", "gridcell"), e) {
                        n.setAttribute("tabindex", "-1"), n.setAttribute("aria-label", this.dateLocale.longDateFormatter(e)), n.id = t.getDateId(e), n.setAttribute("data-timestamp", e.getTime()), this.dateUtil.isSameDay(e, t.today) && n.classList.add(r), this.dateUtil.isValidDate(t.selectedDate) && this.dateUtil.isSameDay(e, t.selectedDate) && (n.classList.add(i), n.setAttribute("aria-selected", "true"));
                        var o = this.dateLocale.dates[e.getDate()];
                        if (this.dateUtil.isDateWithinRange(e, this.calendarCtrl.minDate, this.calendarCtrl.maxDate)) {
                            var a = document.createElement("span");
                            n.appendChild(a), a.classList.add("md-calendar-date-selection-indicator"), a.textContent = o, n.addEventListener("click", t.cellClickHandler), t.focusDate && this.dateUtil.isSameDay(e, t.focusDate) && (this.focusAfterAppend = n)
                        } else n.classList.add("md-calendar-date-disabled"), n.textContent = o
                    }
                    return n
                }, n.prototype.buildDateRow = function(e) {
                    var t = document.createElement("tr");
                    return t.setAttribute("role", "row"), t.setAttribute("aria-label", this.dateLocale.weekNumberFormatter(e)), t
                }, n.prototype.buildCalendarForMonth = function(e) {
                    var t = this.dateUtil.isValidDate(e) ? e : new Date,
                        n = this.dateUtil.getFirstDateOfMonth(t),
                        r = this.getLocaleDay_(n),
                        i = this.dateUtil.getNumberOfDaysInMonth(t),
                        o = document.createDocumentFragment(),
                        a = 1,
                        s = this.buildDateRow(a);
                    o.appendChild(s);
                    var c = this.offset === this.calendarCtrl.items.length - 1,
                        l = 0,
                        d = document.createElement("td");
                    if (d.classList.add("md-calendar-month-label"), this.calendarCtrl.maxDate && n > this.calendarCtrl.maxDate && d.classList.add("md-calendar-month-label-disabled"), d.textContent = this.dateLocale.monthHeaderFormatter(t), 2 >= r) {
                        d.setAttribute("colspan", "7");
                        var u = this.buildDateRow();
                        if (u.appendChild(d), o.insertBefore(u, s), c) return o
                    } else l = 2, d.setAttribute("colspan", "2"), s.appendChild(d);
                    for (var m = l; r > m; m++) s.appendChild(this.buildDateCell());
                    for (var f = r, h = n, p = 1; i >= p; p++) {
                        if (7 === f) {
                            if (c) return o;
                            f = 0, a++, s = this.buildDateRow(a), o.appendChild(s)
                        }
                        h.setDate(p);
                        var g = this.buildDateCell(h);
                        s.appendChild(g), f++
                    }
                    for (; s.childNodes.length < 7;) s.appendChild(this.buildDateCell());
                    for (; o.childNodes.length < 6;) {
                        for (var v = this.buildDateRow(), m = 0; 7 > m; m++) v.appendChild(this.buildDateCell());
                        o.appendChild(v)
                    }
                    return o
                }, n.prototype.getLocaleDay_ = function(e) {
                    return (e.getDay() + (7 - this.dateLocale.firstDayOfWeek)) % 7
                }
            }()
        }(),
        function() {
            ! function() {
                t.module("material.components.datepicker").config(["$provide", function(e) {
                    function t() {
                        this.months = null, this.shortMonths = null, this.days = null, this.shortDays = null, this.dates = null, this.firstDayOfWeek = 0, this.formatDate = null, this.parseDate = null, this.monthHeaderFormatter = null, this.weekNumberFormatter = null, this.longDateFormatter = null, this.msgCalendar = "", this.msgOpenCalendar = ""
                    }
                    t.prototype.$get = function(e) {
                        function t(e) {
                            if (!e) return "";
                            var t = e.toLocaleTimeString(),
                                n = e;
                            return 0 != e.getHours() || -1 === t.indexOf("11:") && -1 === t.indexOf("23:") || (n = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 1, 0, 0)), n.toLocaleDateString()
                        }

                        function n(e) {
                            return new Date(e)
                        }

                        function r(e) {
                            e = e.trim();
                            var t = /^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;
                            return t.test(e)
                        }

                        function i(e) {
                            return m.shortMonths[e.getMonth()] + " " + e.getFullYear()
                        }

                        function o(e) {
                            return "Week " + e
                        }

                        function a(e) {
                            return [m.days[e.getDay()], m.months[e.getMonth()], m.dates[e.getDate()], e.getFullYear()].join(" ")
                        }
                        for (var s = e.DATETIME_FORMATS.DAY.map(function(e) {
                                return e[0]
                            }), c = Array(32), l = 1; 31 >= l; l++) c[l] = l;
                        var d = "Calendar",
                            u = "Open calendar",
                            m = {
                                months: this.months || e.DATETIME_FORMATS.MONTH,
                                shortMonths: this.shortMonths || e.DATETIME_FORMATS.SHORTMONTH,
                                days: this.days || e.DATETIME_FORMATS.DAY,
                                shortDays: this.shortDays || s,
                                dates: this.dates || c,
                                firstDayOfWeek: this.firstDayOfWeek || 0,
                                formatDate: this.formatDate || t,
                                parseDate: this.parseDate || n,
                                isDateComplete: this.isDateComplete || r,
                                monthHeaderFormatter: this.monthHeaderFormatter || i,
                                weekNumberFormatter: this.weekNumberFormatter || o,
                                longDateFormatter: this.longDateFormatter || a,
                                msgCalendar: this.msgCalendar || d,
                                msgOpenCalendar: this.msgOpenCalendar || u
                            };
                        return m
                    }, t.prototype.$get.$inject = ["$locale"], e.provider("$mdDateLocale", new t)
                }])
            }()
        }(),
        function() {
            ! function() {
                function n() {
                    return {
                        template: '<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" md-svg-icon="md-calendar"></md-icon></md-button><div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"><md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button></div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-min-date="ctrl.minDate" md-max-date="ctrl.maxDate"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>',
                        require: ["ngModel", "mdDatepicker"],
                        scope: {
                            minDate: "=mdMinDate",
                            maxDate: "=mdMaxDate",
                            placeholder: "@mdPlaceholder"
                        },
                        controller: r,
                        controllerAs: "ctrl",
                        bindToController: !0,
                        link: function(e, t, n, r) {
                            var i = r[0],
                                o = r[1];
                            o.configureNgModel(i)
                        }
                    }
                }

                function r(e, n, r, i, o, a, s, c, l, d, u, m) {
                    this.$compile = i, this.$timeout = o, this.$window = a, this.dateLocale = d, this.dateUtil = u, this.$mdConstant = s, this.$mdUtil = l, this.$$rAF = m, this.ngModelCtrl = null, this.inputElement = n[0].querySelector("input"), this.ngInputElement = t.element(this.inputElement), this.inputContainer = n[0].querySelector(".md-datepicker-input-container"), this.calendarPane = n[0].querySelector(".md-datepicker-calendar-pane"), this.calendarButton = n[0].querySelector(".md-datepicker-button"), this.inputMask = n[0].querySelector(".md-datepicker-input-mask-opaque"), this.$element = n, this.$attrs = r, this.$scope = e, this.date = null, this.isFocused = !1, this.isDisabled, this.setDisabled(n[0].disabled || t.isString(r.disabled)), this.isCalendarOpen = !1, this.calendarPaneOpenedFrom = null, this.calendarPane.id = "md-date-pane" + l.nextUid(), c(n), this.bodyClickHandler = t.bind(this, this.handleBodyClick), this.windowResizeHandler = l.debounce(t.bind(this, this.closeCalendarPane), 100), r.tabindex || n.attr("tabindex", "-1"), this.installPropertyInterceptors(), this.attachChangeListeners(), this.attachInteractionListeners();
                    var f = this;
                    e.$on("$destroy", function() {
                        f.detachCalendarPane()
                    })
                }
                t.module("material.components.datepicker").directive("mdDatepicker", n);
                var i = 3,
                    o = "md-datepicker-invalid",
                    a = 500,
                    s = 368,
                    c = 360;
                r.$inject = ["$scope", "$element", "$attrs", "$compile", "$timeout", "$window", "$mdConstant", "$mdTheming", "$mdUtil", "$mdDateLocale", "$$mdDateUtil", "$$rAF"], r.prototype.configureNgModel = function(e) {
                    this.ngModelCtrl = e;
                    var t = this;
                    e.$render = function() {
                        t.date = t.ngModelCtrl.$viewValue, t.inputElement.value = t.dateLocale.formatDate(t.date), t.resizeInputElement(), t.setErrorFlags()
                    }
                }, r.prototype.attachChangeListeners = function() {
                    var e = this;
                    e.$scope.$on("md-calendar-change", function(t, n) {
                        e.ngModelCtrl.$setViewValue(n), e.date = n, e.inputElement.value = e.dateLocale.formatDate(n), e.closeCalendarPane(), e.resizeInputElement(), e.inputContainer.classList.remove(o)
                    }), e.ngInputElement.on("input", t.bind(e, e.resizeInputElement)), e.ngInputElement.on("input", e.$mdUtil.debounce(e.handleInputEvent, a, e))
                }, r.prototype.attachInteractionListeners = function() {
                    var e = this,
                        t = this.$scope,
                        n = this.$mdConstant.KEY_CODE;
                    e.ngInputElement.on("keydown", function(r) {
                        r.altKey && r.keyCode == n.DOWN_ARROW && (e.openCalendarPane(r), t.$digest())
                    }), t.$on("md-calendar-close", function() {
                        e.closeCalendarPane()
                    })
                }, r.prototype.installPropertyInterceptors = function() {
                    var e = this;
                    if (this.$attrs.ngDisabled) {
                        var t = this.$mdUtil.validateScope(this.$element) ? this.$element.scope() : null;
                        t && t.$watch(this.$attrs.ngDisabled, function(t) {
                            e.setDisabled(t)
                        })
                    }
                    Object.defineProperty(this, "placeholder", {
                        get: function() {
                            return e.inputElement.placeholder
                        },
                        set: function(t) {
                            e.inputElement.placeholder = t || ""
                        }
                    })
                }, r.prototype.setDisabled = function(e) {
                    this.isDisabled = e, this.inputElement.disabled = e, this.calendarButton.disabled = e
                }, r.prototype.setErrorFlags = function() {
                    this.dateUtil.isValidDate(this.date) && (this.dateUtil.isValidDate(this.minDate) && (this.ngModelCtrl.$error.mindate = this.date < this.minDate), this.dateUtil.isValidDate(this.maxDate) && (this.ngModelCtrl.$error.maxdate = this.date > this.maxDate))
                }, r.prototype.resizeInputElement = function() {
                    this.inputElement.size = this.inputElement.value.length + i
                }, r.prototype.handleInputEvent = function() {
                    var e = this.inputElement.value,
                        t = this.dateLocale.parseDate(e);
                    this.dateUtil.setDateTimeToMidnight(t), "" === e ? (this.ngModelCtrl.$setViewValue(null), this.date = null, this.inputContainer.classList.remove(o)) : this.dateUtil.isValidDate(t) && this.dateLocale.isDateComplete(e) && this.dateUtil.isDateWithinRange(t, this.minDate, this.maxDate) ? (this.ngModelCtrl.$setViewValue(t), this.date = t, this.inputContainer.classList.remove(o)) : this.inputContainer.classList.toggle(o, e)
                }, r.prototype.attachCalendarPane = function() {
                    var e = this.calendarPane;
                    e.style.transform = "", this.$element.addClass("md-datepicker-open");
                    var t = this.inputContainer.getBoundingClientRect(),
                        n = document.body.getBoundingClientRect(),
                        r = t.top - n.top,
                        i = t.left - n.left,
                        o = document.body.scrollTop,
                        a = o + this.$window.innerHeight,
                        l = document.body.scrollLeft,
                        d = document.body.scrollLeft + this.$window.innerWidth;
                    if (i + c > d) {
                        if (d - c > 0) i = d - c;
                        else {
                            i = l;
                            var u = this.$window.innerWidth / c;
                            e.style.transform = "scale(" + u + ")"
                        }
                        e.classList.add("md-datepicker-pos-adjusted")
                    }
                    r + s > a && a - s > o && (r = a - s, e.classList.add("md-datepicker-pos-adjusted")), e.style.left = i + "px", e.style.top = r + "px", document.body.appendChild(e), this.inputMask.style.left = t.width + "px", this.$$rAF(function() {
                        e.classList.add("md-pane-open")
                    })
                }, r.prototype.detachCalendarPane = function() {
                    this.$element.removeClass("md-datepicker-open"), this.calendarPane.classList.remove("md-pane-open"), this.calendarPane.classList.remove("md-datepicker-pos-adjusted"), this.calendarPane.parentNode && this.calendarPane.parentNode.removeChild(this.calendarPane)
                }, r.prototype.openCalendarPane = function(t) {
                    if (!this.isCalendarOpen && !this.isDisabled) {
                        this.isCalendarOpen = !0, this.calendarPaneOpenedFrom = t.target, this.attachCalendarPane(), this.focusCalendar(), this.$mdUtil.disableScrollAround(this.calendarPane);
                        var n = this;
                        this.$mdUtil.nextTick(function() {
                            document.body.addEventListener("click", n.bodyClickHandler)
                        }, !1), e.addEventListener("resize", this.windowResizeHandler)
                    }
                }, r.prototype.closeCalendarPane = function() {
                    this.isCalendarOpen && (this.isCalendarOpen = !1, this.detachCalendarPane(), this.calendarPaneOpenedFrom.focus(), this.calendarPaneOpenedFrom = null, this.$mdUtil.enableScrolling(), document.body.removeEventListener("click", this.bodyClickHandler), e.removeEventListener("resize", this.windowResizeHandler))
                }, r.prototype.getCalendarCtrl = function() {
                    return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")
                }, r.prototype.focusCalendar = function() {
                    var e = this;
                    this.$mdUtil.nextTick(function() {
                        e.getCalendarCtrl().focus()
                    }, !1)
                }, r.prototype.setFocused = function(e) {
                    this.isFocused = e
                }, r.prototype.handleBodyClick = function(e) {
                    if (this.isCalendarOpen) {
                        var t = this.$mdUtil.getClosest(e.target, "md-calendar");
                        t || this.closeCalendarPane(), this.$scope.$digest()
                    }
                }
            }()
        }(),
        function() {
            ! function() {
                t.module("material.components.datepicker").factory("$$mdDateUtil", function() {
                    function e(e) {
                        return new Date(e.getFullYear(), e.getMonth(), 1)
                    }

                    function n(e) {
                        return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()
                    }

                    function r(e) {
                        return new Date(e.getFullYear(), e.getMonth() + 1, 1)
                    }

                    function i(e) {
                        return new Date(e.getFullYear(), e.getMonth() - 1, 1)
                    }

                    function o(e, t) {
                        return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()
                    }

                    function a(e, t) {
                        return e.getDate() == t.getDate() && o(e, t)
                    }

                    function s(e, t) {
                        var n = r(e);
                        return o(n, t)
                    }

                    function c(e, t) {
                        var n = i(e);
                        return o(t, n)
                    }

                    function l(e, t) {
                        return v((e.getTime() + t.getTime()) / 2)
                    }

                    function d(t) {
                        var n = e(t);
                        return Math.floor((n.getDay() + t.getDate() - 1) / 7)
                    }

                    function u(e, t) {
                        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t)
                    }

                    function m(e, t) {
                        var r = new Date(e.getFullYear(), e.getMonth() + t, 1),
                            i = n(r);
                        return r.setDate(i < e.getDate() ? i : e.getDate()), r
                    }

                    function f(e, t) {
                        return 12 * (t.getFullYear() - e.getFullYear()) + (t.getMonth() - e.getMonth())
                    }

                    function h(e) {
                        return new Date(e.getFullYear(), e.getMonth(), n(e))
                    }

                    function p(e) {
                        return null != e && e.getTime && !isNaN(e.getTime())
                    }

                    function g(e) {
                        p(e) && e.setHours(0, 0, 0, 0)
                    }

                    function v(e) {
                        var n;
                        return n = t.isUndefined(e) ? new Date : new Date(e), g(n), n
                    }

                    function $(e, n, r) {
                        return (!t.isDate(n) || e >= n) && (!t.isDate(r) || r >= e)
                    }
                    return {
                        getFirstDateOfMonth: e,
                        getNumberOfDaysInMonth: n,
                        getDateInNextMonth: r,
                        getDateInPreviousMonth: i,
                        isInNextMonth: s,
                        isInPreviousMonth: c,
                        getDateMidpoint: l,
                        isSameMonthAndYear: o,
                        getWeekOfMonth: d,
                        incrementDays: u,
                        incrementMonths: m,
                        getLastDateOfMonth: h,
                        isSameDay: a,
                        getMonthDistance: f,
                        isValidDate: p,
                        setDateTimeToMidnight: g,
                        createDateAtMidnight: v,
                        isDateWithinRange: $
                    }
                })
            }()
        }(),
        function() {
            ! function() {
                function e() {
                    return {
                        restrict: "E",
                        require: ["^?mdFabSpeedDial", "^?mdFabToolbar"],
                        compile: function(e, n) {
                            var r = e.children(),
                                i = !1;
                            t.forEach(["", "data-", "x-"], function(e) {
                                i = i || (r.attr(e + "ng-repeat") ? !0 : !1)
                            }), i ? r.addClass("md-fab-action-item") : r.wrap('<div class="md-fab-action-item">')
                        }
                    }
                }
                t.module("material.components.fabActions", ["material.core"]).directive("mdFabActions", e)
            }()
        }(),
        function() {
            ! function() {
                function n(n, r, i, o, a) {
                    function s() {
                        _.direction = _.direction || "down", _.isOpen = _.isOpen || !1, h()
                    }

                    function c() {
                        var e = ["mousedown", "mouseup", "click", "touchstart", "touchend", "focusin", "focusout"];
                        t.forEach(e, function(e) {
                            r.on(e, m)
                        }), n.$on("$destroy", function() {
                            t.forEach(e, function(e) {
                                r.off(e, m)
                            }), $()
                        })
                    }

                    function l() {
                        H = []
                    }

                    function d(e) {
                        var n, r, i, o = 0;
                        do r = e.map(function(e) {
                            return e.replace("?", "")
                        }), n = t.equals(H, r), n || (e = u(e), i = e.length >= H.length && e.length !== r.length); while (10 > o && !n && i);
                        return n
                    }

                    function u(e) {
                        var t = !1;
                        return e.filter(function(e) {
                            return t || -1 === e.indexOf("?") ? !0 : (t = !0, !1)
                        })
                    }

                    function m(e) {
                        return H.push(e.type), d(["mousedown", "focusout?", "focusin?", "mouseup", "click"]) ? (S(e), void l()) : d(["touchstart?", "touchend?", "click"]) ? (S(e), void l()) : d(["focusin"]) ? (_.open(), void l()) : d(["focusout"]) ? (_.close(), void l()) : void f()
                    }

                    function f() {
                        O && e.clearTimeout(O), O = e.setTimeout(function() {
                            l()
                        }, 250)
                    }

                    function h() {
                        _.currentActionIndex = -1
                    }

                    function p() {
                        n.$watch("vm.direction", function(e, t) {
                            i.removeClass(r, "md-" + t), i.addClass(r, "md-" + e), h()
                        });
                        var e, t;
                        n.$watch("vm.isOpen", function(n) {
                            h(), e && t || (e = N(), t = D()), n ? v() : $();
                            var o = n ? "md-is-open" : "",
                                a = n ? "" : "md-is-open";
                            e.attr("aria-haspopup", !0), e.attr("aria-expanded", n), t.attr("aria-hidden", !n), i.setClass(r, o, a)
                        })
                    }

                    function g() {
                        o.nextTick(function() {
                            i.addClass(r, "md-noop")
                        })
                    }

                    function v() {
                        t.element(document).on("keydown", b)
                    }

                    function $() {
                        t.element(document).off("keydown", b)
                    }

                    function b(e) {
                        switch (e.which) {
                            case a.KEY_CODE.SPACE:
                                return e.preventDefault(), !1;
                            case a.KEY_CODE.ESCAPE:
                                return _.close(), e.preventDefault(), !1;
                            case a.KEY_CODE.LEFT_ARROW:
                                return C(e), !1;
                            case a.KEY_CODE.UP_ARROW:
                                return w(e), !1;
                            case a.KEY_CODE.RIGHT_ARROW:
                                return x(e), !1;
                            case a.KEY_CODE.DOWN_ARROW:
                                return A(e), !1
                        }
                    }

                    function E(e) {
                        M(e, -1)
                    }

                    function y(e) {
                        M(e, 1)
                    }

                    function M(e, n) {
                        var r = D()[0].querySelectorAll(".md-fab-action-item");
                        t.forEach(r, function(e) {
                            t.element(t.element(e).children()[0]).attr("tabindex", -1)
                        }), _.currentActionIndex = _.currentActionIndex + n, _.currentActionIndex = Math.min(r.length - 1, _.currentActionIndex), _.currentActionIndex = Math.max(0, _.currentActionIndex);
                        var i = t.element(r[_.currentActionIndex]).children()[0];
                        t.element(i).attr("tabindex", 0), i.focus(), e.preventDefault(), e.stopImmediatePropagation()
                    }

                    function C(e) {
                        "left" === _.direction ? y(e) : E(e)
                    }

                    function w(e) {
                        "down" === _.direction ? E(e) : y(e)
                    }

                    function x(e) {
                        "left" === _.direction ? E(e) : y(e)
                    }

                    function A(e) {
                        "up" === _.direction ? E(e) : y(e)
                    }

                    function k(e) {
                        return o.getClosest(e, "md-fab-trigger")
                    }

                    function T(e) {
                        return o.getClosest(e, "md-fab-actions")
                    }

                    function S(e) {
                        k(e.target) && _.toggle(), T(e.target) && _.close()
                    }

                    function N() {
                        return r.find("md-fab-trigger")
                    }

                    function D() {
                        return r.find("md-fab-actions")
                    }
                    var _ = this;
                    _.open = function() {
                        n.$evalAsync("vm.isOpen = true")
                    }, _.close = function() {
                        n.$evalAsync("vm.isOpen = false"), r.find("md-fab-trigger")[0].focus()
                    }, _.toggle = function() {
                        n.$evalAsync("vm.isOpen = !vm.isOpen")
                    }, s(), c(), p(), g();
                    var O, H = []
                }
                t.module("material.components.fabShared", ["material.core"]).controller("FabController", n), n.$inject = ["$scope", "$element", "$animate", "$mdUtil", "$mdConstant"]
            }()
        }(),
        function() {
            ! function() {
                function n() {
                    function e(e, t) {
                        t.prepend('<div class="md-css-variables"></div>')
                    }
                    return {
                        restrict: "E",
                        scope: {
                            direction: "@?mdDirection",
                            isOpen: "=?mdOpen"
                        },
                        bindToController: !0,
                        controller: "FabController",
                        controllerAs: "vm",
                        link: e
                    }
                }

                function r() {
                    function n(n) {
                        var r = n[0],
                            i = n.controller("mdFabSpeedDial"),
                            o = r.querySelectorAll(".md-fab-action-item"),
                            a = r.querySelector("md-fab-trigger"),
                            s = r.querySelector(".md-css-variables"),
                            c = parseInt(e.getComputedStyle(s).zIndex);
                        t.forEach(o, function(e, t) {
                            var n = e.style;
                            n.transform = n.webkitTransform = "", n.transitionDelay = "", n.opacity = 1, n.zIndex = o.length - t + c
                        }), a.style.zIndex = c + o.length + 1, i.isOpen || t.forEach(o, function(e, t) {
                            var n, r, o = e.style;
                            switch (i.direction) {
                                case "up":
                                    n = e.scrollHeight * (t + 1), r = "Y";
                                    break;
                                case "down":
                                    n = -e.scrollHeight * (t + 1), r = "Y";
                                    break;
                                case "left":
                                    n = e.scrollWidth * (t + 1), r = "X";
                                    break;
                                case "right":
                                    n = -e.scrollWidth * (t + 1), r = "X"
                            }
                            var a = "translate" + r + "(" + n + "px)";
                            o.transform = o.webkitTransform = a
                        })
                    }
                    return {
                        addClass: function(e, t, r) {
                            e.hasClass("md-fling") && (n(e), r())
                        },
                        removeClass: function(e, t, r) {
                            n(e), r()
                        }
                    }
                }

                function i() {
                    function n(n) {
                        var i = n[0],
                            o = n.controller("mdFabSpeedDial"),
                            a = i.querySelectorAll(".md-fab-action-item"),
                            s = i.querySelector(".md-css-variables"),
                            c = parseInt(e.getComputedStyle(s).zIndex);
                        t.forEach(a, function(e, t) {
                            var n = e.style,
                                i = t * r;
                            n.opacity = o.isOpen ? 1 : 0, n.transform = n.webkitTransform = o.isOpen ? "scale(1)" : "scale(0)", n.transitionDelay = (o.isOpen ? i : a.length - i) + "ms", n.zIndex = a.length - t + c
                        })
                    }
                    var r = 65;
                    return {
                        addClass: function(e, t, r) {
                            n(e), r()
                        },
                        removeClass: function(e, t, r) {
                            n(e), r()
                        }
                    }
                }
                t.module("material.components.fabSpeedDial", ["material.core", "material.components.fabShared", "material.components.fabTrigger", "material.components.fabActions"]).directive("mdFabSpeedDial", n).animation(".md-fling", r).animation(".md-scale", i).service("mdFabSpeedDialFlingAnimation", r).service("mdFabSpeedDialScaleAnimation", i)
            }()
        }(),
        function() {
            ! function() {
                function n() {
                    function e(e, t, n) {
                        t.addClass("md-fab-toolbar"), t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')
                    }
                    return {
                        restrict: "E",
                        transclude: !0,
                        template: '<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',
                        scope: {
                            direction: "@?mdDirection",
                            isOpen: "=?mdOpen"
                        },
                        bindToController: !0,
                        controller: "FabController",
                        controllerAs: "vm",
                        link: e
                    }
                }

                function r() {
                    function n(n, r, i) {
                        if (r) {
                            var o = n[0],
                                a = n.controller("mdFabToolbar"),
                                s = o.querySelector(".md-fab-toolbar-background"),
                                c = o.querySelector("md-fab-trigger button"),
                                l = o.querySelector("md-toolbar"),
                                d = o.querySelector("md-fab-trigger button md-icon"),
                                u = n.find("md-fab-actions").children();
                            if (c && s) {
                                var m = e.getComputedStyle(c).getPropertyValue("background-color"),
                                    f = o.offsetWidth,
                                    h = (o.offsetHeight, 2 * (f / c.offsetWidth));
                                s.style.backgroundColor = m, s.style.borderRadius = f + "px", a.isOpen ? (l.style.pointerEvents = "initial", s.style.width = c.offsetWidth + "px", s.style.height = c.offsetHeight + "px", s.style.transform = "scale(" + h + ")", s.style.transitionDelay = "0ms", d && (d.style.transitionDelay = ".3s"), t.forEach(u, function(e, t) {
                                    e.style.transitionDelay = 25 * (u.length - t) + "ms"
                                })) : (l.style.pointerEvents = "none", s.style.transform = "scale(1)", s.style.top = "0", n.hasClass("md-right") && (s.style.left = "0", s.style.right = null), n.hasClass("md-left") && (s.style.right = "0", s.style.left = null), s.style.transitionDelay = "200ms", d && (d.style.transitionDelay = "0ms"), t.forEach(u, function(e, t) {
                                    e.style.transitionDelay = 200 + 25 * t + "ms"
                                }))
                            }
                        }
                    }
                    return {
                        addClass: function(e, t, r) {
                            n(e, t, r), r()
                        },
                        removeClass: function(e, t, r) {
                            n(e, t, r), r()
                        }
                    }
                }
                t.module("material.components.fabToolbar", ["material.core", "material.components.fabShared", "material.components.fabTrigger", "material.components.fabActions"]).directive("mdFabToolbar", n).animation(".md-fab-toolbar", r).service("mdFabToolbarAnimation", r)
            }()
        }(),
        function() {
            ! function() {
                function e() {
                    return {
                        restrict: "E",
                        require: ["^?mdFabSpeedDial", "^?mdFabToolbar"]
                    }
                }
                t.module("material.components.fabTrigger", ["material.core"]).directive("mdFabTrigger", e)
            }()
        }(),
        function() {
            function e(e, r, i, o) {
                function a(n, a, s, c) {
                    function l() {
                        for (var e in r.MEDIA) o(e), o.getQuery(r.MEDIA[e]).addListener(C);
                        return o.watchResponsiveAttributes(["md-cols", "md-row-height", "md-gutter"], s, u)
                    }

                    function d() {
                        c.layoutDelegate = t.noop, w();
                        for (var e in r.MEDIA) o.getQuery(r.MEDIA[e]).removeListener(C)
                    }

                    function u(e) {
                        null == e ? c.invalidateLayout() : o(e) && c.invalidateLayout()
                    }

                    function m(e) {
                        var r = g(),
                            o = {
                                tileSpans: v(r),
                                colCount: $(),
                                rowMode: y(),
                                rowHeight: E(),
                                gutter: b()
                            };
                        if (e || !t.equals(o, x)) {
                            var s = i(o.colCount, o.tileSpans, r).map(function(e, n) {
                                return {
                                    grid: {
                                        element: a,
                                        style: p(o.colCount, n, o.gutter, o.rowMode, o.rowHeight)
                                    },
                                    tiles: e.map(function(e, i) {
                                        return {
                                            element: t.element(r[i]),
                                            style: h(e.position, e.spans, o.colCount, n, o.gutter, o.rowMode, o.rowHeight)
                                        }
                                    })
                                }
                            }).reflow().performance();
                            n.mdOnLayout({
                                $event: {
                                    performance: s
                                }
                            }), x = o
                        }
                    }

                    function f(e) {
                        return A + e + k
                    }

                    function h(e, t, n, r, i, o, a) {
                        var s = 1 / n * 100,
                            c = (n - 1) / n,
                            l = T({
                                share: s,
                                gutterShare: c,
                                gutter: i
                            }),
                            d = {
                                left: S({
                                    unit: l,
                                    offset: e.col,
                                    gutter: i
                                }),
                                width: N({
                                    unit: l,
                                    span: t.col,
                                    gutter: i
                                }),
                                paddingTop: "",
                                marginTop: "",
                                top: "",
                                height: ""
                            };
                        switch (o) {
                            case "fixed":
                                d.top = S({
                                    unit: a,
                                    offset: e.row,
                                    gutter: i
                                }), d.height = N({
                                    unit: a,
                                    span: t.row,
                                    gutter: i
                                });
                                break;
                            case "ratio":
                                var u = s / a,
                                    m = T({
                                        share: u,
                                        gutterShare: c,
                                        gutter: i
                                    });
                                d.paddingTop = N({
                                    unit: m,
                                    span: t.row,
                                    gutter: i
                                }), d.marginTop = S({
                                    unit: m,
                                    offset: e.row,
                                    gutter: i
                                });
                                break;
                            case "fit":
                                var f = (r - 1) / r,
                                    u = 1 / r * 100,
                                    m = T({
                                        share: u,
                                        gutterShare: f,
                                        gutter: i
                                    });
                                d.top = S({
                                    unit: m,
                                    offset: e.row,
                                    gutter: i
                                }), d.height = N({
                                    unit: m,
                                    span: t.row,
                                    gutter: i
                                })
                        }
                        return d
                    }

                    function p(e, t, n, r, i) {
                        var o = {};
                        switch (r) {
                            case "fixed":
                                o.height = N({
                                    unit: i,
                                    span: t,
                                    gutter: n
                                }), o.paddingBottom = "";
                                break;
                            case "ratio":
                                var a = 1 === e ? 0 : (e - 1) / e,
                                    s = 1 / e * 100,
                                    c = s * (1 / i),
                                    l = T({
                                        share: c,
                                        gutterShare: a,
                                        gutter: n
                                    });
                                o.height = "", o.paddingBottom = N({
                                    unit: l,
                                    span: t,
                                    gutter: n
                                });
                                break;
                            case "fit":
                        }
                        return o
                    }

                    function g() {
                        return [].filter.call(a.children(), function(e) {
                            return "MD-GRID-TILE" == e.tagName && !e.$$mdDestroyed
                        })
                    }

                    function v(e) {
                        return [].map.call(e, function(e) {
                            var n = t.element(e).controller("mdGridTile");
                            return {
                                row: parseInt(o.getResponsiveAttribute(n.$attrs, "md-rowspan"), 10) || 1,
                                col: parseInt(o.getResponsiveAttribute(n.$attrs, "md-colspan"), 10) || 1
                            }
                        })
                    }

                    function $() {
                        var e = parseInt(o.getResponsiveAttribute(s, "md-cols"), 10);
                        if (isNaN(e)) throw "md-grid-list: md-cols attribute was not found, or contained a non-numeric value";
                        return e
                    }

                    function b() {
                        return M(o.getResponsiveAttribute(s, "md-gutter") || 1)
                    }

                    function E() {
                        var e = o.getResponsiveAttribute(s, "md-row-height");
                        switch (y()) {
                            case "fixed":
                                return M(e);
                            case "ratio":
                                var t = e.split(":");
                                return parseFloat(t[0]) / parseFloat(t[1]);
                            case "fit":
                                return 0
                        }
                    }

                    function y() {
                        var e = o.getResponsiveAttribute(s, "md-row-height");
                        return "fit" == e ? "fit" : -1 !== e.indexOf(":") ? "ratio" : "fixed"
                    }

                    function M(e) {
                        return /\D$/.test(e) ? e : e + "px"
                    }
                    a.attr("role", "list"), c.layoutDelegate = m;
                    var C = t.bind(c, c.invalidateLayout),
                        w = l();
                    n.$on("$destroy", d);
                    var x, A = e.startSymbol(),
                        k = e.endSymbol(),
                        T = e(f("share") + "% - (" + f("gutter") + " * " + f("gutterShare") + ")"),
                        S = e("calc((" + f("unit") + " + " + f("gutter") + ") * " + f("offset") + ")"),
                        N = e("calc((" + f("unit") + ") * " + f("span") + " + (" + f("span") + " - 1) * " + f("gutter") + ")")
                }
                return {
                    restrict: "E",
                    controller: n,
                    scope: {
                        mdOnLayout: "&"
                    },
                    link: a
                }
            }

            function n(e) {
                this.layoutInvalidated = !1, this.tilesInvalidated = !1, this.$timeout_ = e.nextTick, this.layoutDelegate = t.noop
            }

            function r(e) {
                function n(t, n) {
                    var r, a, s, c, l, d;
                    return c = e.time(function() {
                        a = i(t, n)
                    }), r = {
                        layoutInfo: function() {
                            return a
                        },
                        map: function(t) {
                            return l = e.time(function() {
                                var e = r.layoutInfo();
                                s = t(e.positioning, e.rowCount)
                            }), r
                        },
                        reflow: function(t) {
                            return d = e.time(function() {
                                var e = t || o;
                                e(s.grid, s.tiles)
                            }), r
                        },
                        performance: function() {
                            return {
                                tileCount: n.length,
                                layoutTime: c,
                                mapTime: l,
                                reflowTime: d,
                                totalTime: c + l + d
                            }
                        }
                    }
                }

                function r(e, t) {
                    e.element.css(e.style), t.forEach(function(e) {
                        e.element.css(e.style)
                    })
                }

                function i(e, t) {
                    function n(t, n) {
                        if (t.col > e) throw "md-grid-list: Tile at position " + n + " has a colspan (" + t.col + ") that exceeds the column count (" + e + ")";
                        for (var a = 0, d = 0; d - a < t.col;) s >= e ? r() : (a = l.indexOf(0, s), -1 !== a && -1 !== (d = o(a + 1)) ? s = d + 1 : (a = d = 0, r()));
                        return i(a, t.col, t.row), s = a + t.col, {
                            col: a,
                            row: c
                        }
                    }

                    function r() {
                        s = 0, c++, i(0, e, -1)
                    }

                    function i(e, t, n) {
                        for (var r = e; e + t > r; r++) l[r] = Math.max(l[r] + n, 0)
                    }

                    function o(e) {
                        var t;
                        for (t = e; t < l.length; t++)
                            if (0 !== l[t]) return t;
                        return t === l.length ? t : void 0
                    }

                    function a() {
                        for (var t = [], n = 0; e > n; n++) t.push(0);
                        return t
                    }
                    var s = 0,
                        c = 0,
                        l = a();
                    return {
                        positioning: t.map(function(e, t) {
                            return {
                                spans: e,
                                position: n(e, t)
                            }
                        }),
                        rowCount: c + Math.max.apply(Math, l)
                    }
                }
                var o = r;
                return n.animateWith = function(e) {
                    o = t.isFunction(e) ? e : r
                }, n
            }

            function i(e) {
                function n(n, r, i, o) {
                    r.attr("role", "listitem");
                    var a = e.watchResponsiveAttributes(["md-colspan", "md-rowspan"], i, t.bind(o, o.invalidateLayout));
                    o.invalidateTiles(), n.$on("$destroy", function() {
                        r[0].$$mdDestroyed = !0, a(), o.invalidateLayout()
                    }), t.isDefined(n.$parent.$index) && n.$watch(function() {
                        return n.$parent.$index
                    }, function(e, t) {
                        e !== t && o.invalidateTiles()
                    })
                }
                return {
                    restrict: "E",
                    require: "^mdGridList",
                    template: "<figure ng-transclude></figure>",
                    transclude: !0,
                    scope: {},
                    controller: ["$attrs", function(e) {
                        this.$attrs = e
                    }],
                    link: n
                }
            }

            function o() {
                return {
                    template: "<figcaption ng-transclude></figcaption>",
                    transclude: !0
                }
            }
            t.module("material.components.gridList", ["material.core"]).directive("mdGridList", e).directive("mdGridTile", i).directive("mdGridTileFooter", o).directive("mdGridTileHeader", o).factory("$mdGridLayout", r), e.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia"], n.$inject = ["$mdUtil"], n.prototype = {
                invalidateTiles: function() {
                    this.tilesInvalidated = !0, this.invalidateLayout()
                },
                invalidateLayout: function() {
                    this.layoutInvalidated || (this.layoutInvalidated = !0, this.$timeout_(t.bind(this, this.layout)))
                },
                layout: function() {
                    try {
                        this.layoutDelegate(this.tilesInvalidated)
                    } finally {
                        this.layoutInvalidated = !1, this.tilesInvalidated = !1
                    }
                }
            }, r.$inject = ["$mdUtil"], i.$inject = ["$mdMedia"]
        }(),
        function() {
            t.module("material.components.icon", ["material.core"])
        }(),
        function() {
            function e(e, t) {
                function n(t, n, r) {
                    e(n)
                }

                function r(e, n, r) {
                    var i = this;
                    i.isErrorGetter = r.mdIsError && t(r.mdIsError), i.delegateClick = function() {
                        i.input.focus()
                    }, i.element = n, i.setFocused = function(e) {
                        n.toggleClass("md-input-focused", !!e)
                    }, i.setHasValue = function(e) {
                        n.toggleClass("md-input-has-value", !!e)
                    }, i.setHasMessages = function(e) {
                        n.toggleClass("md-input-has-messages", !!e)
                    }, i.setHasPlaceholder = function(e) {
                        n.toggleClass("md-input-has-placeholder", !!e)
                    }, i.setInvalid = function(e) {
                        n.toggleClass("md-input-invalid", !!e)
                    }, e.$watch(function() {
                        return i.label && i.input
                    }, function(e) {
                        e && !i.label.attr("for") && i.label.attr("for", i.input.attr("id"))
                    })
                }
                return r.$inject = ["$scope", "$element", "$attrs"], {
                    restrict: "E",
                    link: n,
                    controller: r
                }
            }

            function n() {
                return {
                    restrict: "E",
                    require: "^?mdInputContainer",
                    link: function(e, t, n, r) {
                        r && !n.mdNoFloat && (r.label = t, e.$on("$destroy", function() {
                            r.label = null
                        }))
                    }
                }
            }

            function r(e, n, r) {
                function i(i, o, a, s) {
                    function c(e) {
                        return u.setHasValue(!f.$isEmpty(e)), e
                    }

                    function l() {
                        u.setHasValue(o.val().length > 0 || (o[0].validity || {}).badInput)
                    }

                    function d() {
                        function r(e) {
                            return p(), e
                        }

                        function a() {
                            if (d.style.height = d.offsetHeight + "px", o.addClass("md-no-flex"), isNaN(m)) {
                                l.style.height = "auto", l.scrollTop = 0;
                                var e = s();
                                e && (l.style.height = e + "px")
                            } else {
                                l.setAttribute("rows", 1), h || (l.style.minHeight = "0", h = o.prop("clientHeight"), l.style.minHeight = null);
                                var t = Math.max(m, Math.round(l.scrollHeight / h));
                                l.setAttribute("rows", t)
                            }
                            o.removeClass("md-no-flex"), d.style.height = "auto"
                        }

                        function s() {
                            var e = l.scrollHeight - l.offsetHeight;
                            return l.offsetHeight + (e > 0 ? e : 0)
                        }

                        function c(e) {
                            l.scrollTop = 0;
                            var t = l.scrollHeight - l.offsetHeight,
                                n = l.offsetHeight + t;
                            l.style.height = n + "px"
                        }
                        if (!t.isDefined(o.attr("md-no-autogrow"))) {
                            var l = o[0],
                                d = u.element[0],
                                m = 0 / 0,
                                h = null;
                            l.hasAttribute("rows") && (m = parseInt(l.getAttribute("rows")));
                            var p = e.debounce(a, 1);
                            if (f ? (f.$formatters.push(r), f.$viewChangeListeners.push(r)) : p(), o.on("keydown input", p), isNaN(m) && (o.attr("rows", "1"), o.on("scroll", c)), t.element(n).on("resize", p), i.$on("$destroy", function() {
                                    t.element(n).off("resize", p)
                                }), t.isDefined(o.attr("md-detect-hidden"))) {
                                var g = function() {
                                    var e = !1;
                                    return function() {
                                        var t = 0 === l.offsetHeight;
                                        t === !1 && e === !0 && a(), e = t
                                    }
                                }();
                                i.$watch(function() {
                                    return e.nextTick(g, !1), !0
                                })
                            }
                        }
                    }
                    var u = s[0],
                        m = !!s[1],
                        f = s[1] || e.fakeNgModel(),
                        h = t.isDefined(a.readonly);
                    if (u) {
                        if (u.input) throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");
                        u.input = o, u.label || r.expect(o, "aria-label", o.attr("placeholder")), o.addClass("md-input"), o.attr("id") || o.attr("id", "input_" + e.nextUid()), "textarea" === o[0].tagName.toLowerCase() && d(), m || l();
                        var p = u.isErrorGetter || function() {
                            return f.$invalid && f.$touched
                        };
                        i.$watch(p, u.setInvalid), f.$parsers.push(c), f.$formatters.push(c), o.on("input", l), h || o.on("focus", function(e) {
                            u.setFocused(!0)
                        }).on("blur", function(e) {
                            u.setFocused(!1), l()
                        }), i.$on("$destroy", function() {
                            u.setFocused(!1), u.setHasValue(!1), u.input = null
                        })
                    }
                }
                return {
                    restrict: "E",
                    require: ["^?mdInputContainer", "?ngModel"],
                    link: i
                }
            }

            function i(e) {
                function n(n, r, i, o) {
                    function a(e) {
                        return d.text(String(r.val() || e || "").length + "/" + s), e
                    }
                    var s, c = o[0],
                        l = o[1],
                        d = t.element('<div class="md-char-counter">'),
                        u = t.element(l.element[0].querySelector("[md-maxlength]"));
                    i.$set("ngTrim", "false");
                    var m = ["ng-messages", "data-ng-messages", "x-ng-messages", "[ng-messages]", "[data-ng-messages]", "[x-ng-messages]"],
                        f = l.element[0].querySelector(m.join(","));
                    f ? t.element(f).prepend(d) : u.after(d), c.$formatters.push(a), c.$viewChangeListeners.push(a), r.on("input keydown keyup", function() {
                        a()
                    }), n.$watch(i.mdMaxlength, function(n) {
                        s = n, t.isNumber(n) && n > 0 ? (d.parent().length || e.enter(d, l.element, u), a()) : e.leave(d)
                    }), c.$validators["md-maxlength"] = function(e, n) {
                        return !t.isNumber(s) || 0 > s ? !0 : (e || r.val() || n || "").length <= s
                    }
                }
                return {
                    restrict: "A",
                    require: ["ngModel", "^mdInputContainer"],
                    link: n
                }
            }

            function o(e) {
                function n(e, n, r, i) {
                    if (i) {
                        var o = i.element.find("label"),
                            a = t.isDefined(i.element.attr("md-no-float"));
                        if (o && o.length || a) return void i.setHasPlaceholder(!0);
                        var s = r.placeholder;
                        if (n.removeAttr("placeholder"), i.input && "MD-SELECT" != i.input[0].nodeName) {
                            var c = '<label ng-click="delegateClick()">' + s + "</label>";
                            i.element.addClass("md-icon-float"), i.element.prepend(c)
                        }
                    }
                }
                return {
                    restrict: "A",
                    require: "^^?mdInputContainer",
                    priority: 200,
                    link: n
                }
            }

            function a() {
                function e(e, t, n, r) {
                    r && (r.setHasMessages(!0), e.$on("$destroy", function() {
                        r.setHasMessages(!1)
                    }))
                }
                return {
                    restrict: "EA",
                    link: e,
                    require: "^^?mdInputContainer"
                }
            }
            t.module("material.components.input", ["material.core"]).directive("mdInputContainer", e).directive("label", n).directive("input", r).directive("textarea", r).directive("mdMaxlength", i).directive("placeholder", o).directive("ngMessages", a), e.$inject = ["$mdTheming", "$parse"], r.$inject = ["$mdUtil", "$window", "$mdAria"], i.$inject = ["$animate"], o.$inject = ["$log"]
        }(),
        function() {
            function e(e) {
                return {
                    restrict: "E",
                    compile: function(t) {
                        return t[0].setAttribute("role", "list"), e
                    }
                }
            }

            function n(e, n, r, i) {
                var o = ["md-checkbox", "md-switch"];
                return {
                    restrict: "E",
                    controller: "MdListController",
                    compile: function(a, s) {
                        function c() {
                            for (var e, t, n = ["md-switch", "md-checkbox"], r = 0; t = n[r]; ++r)
                                if ((e = a.find(t)[0]) && !e.hasAttribute("aria-label")) {
                                    var i = a.find("p")[0];
                                    if (!i) return;
                                    e.setAttribute("aria-label", "Toggle " + i.textContent)
                                }
                        }

                        function l(n) {
                            var r;
                            if ("div" == n) r = t.element('<div class="md-no-style md-list-item-inner">'), r.append(a.contents()), a.addClass("md-proxy-focus");
                            else {
                                r = t.element('<md-button class="md-no-style"><div class="md-list-item-inner"></div></md-button>');
                                var i = ["ng-click", "aria-label", "ng-disabled"];
                                t.forEach(i, function(e) {
                                    a[0].hasAttribute(e) && (r[0].setAttribute(e, a[0].getAttribute(e)), a[0].removeAttribute(e))
                                }), r.children().eq(0).append(a.contents())
                            }
                            if (a[0].setAttribute("tabindex", "-1"), a.append(r), h && h.hasAttribute("ng-click")) {
                                e.expect(h, "aria-label");
                                var o = t.element('<md-button class="md-secondary-container md-icon-button">');
                                o.attr("ng-click", h.getAttribute("ng-click")), h.removeAttribute("ng-click"), h.setAttribute("tabindex", "-1"), h.classList.remove("md-secondary"), o.append(h), h = o[0]
                            }
                            h && (h.hasAttribute("ng-click") || s.ngClick && d(h)) && (a.addClass("md-with-secondary"), a.append(h))
                        }

                        function d(e) {
                            return -1 != o.indexOf(e.nodeName.toLowerCase())
                        }

                        function u(e, a, s, c) {
                            function l() {
                                var e = a.children();
                                e.length && !e[0].hasAttribute("ng-click") && t.forEach(o, function(e) {
                                    t.forEach(m.querySelectorAll(e), function(e) {
                                        u.push(e)
                                    })
                                })
                            }

                            function d() {
                                (u.length || f) && (a.addClass("md-clickable"), c.attachRipple(e, t.element(a[0].querySelector(".md-no-style"))))
                            }
                            var u = [],
                                m = a[0].firstElementChild,
                                f = m && m.hasAttribute("ng-click");
                            l(), d(), a.hasClass("md-proxy-focus") && u.length && t.forEach(u, function(n) {
                                n = t.element(n), e.mouseActive = !1, n.on("mousedown", function() {
                                    e.mouseActive = !0, i(function() {
                                        e.mouseActive = !1
                                    }, 100)
                                }).on("focus", function() {
                                    e.mouseActive === !1 && a.addClass("md-focused"), n.on("blur", function t() {
                                        a.removeClass("md-focused"), n.off("blur", t)
                                    })
                                })
                            }), f || u.length || m && m.addEventListener("keypress", function(e) {
                                if ("INPUT" != e.target.nodeName && "TEXTAREA" != e.target.nodeName) {
                                    var t = e.which || e.keyCode;
                                    t == n.KEY_CODE.SPACE && m && (m.click(), e.preventDefault(), e.stopPropagation())
                                }
                            }), a.off("click"), a.off("keypress"), u.length && m && a.children().eq(0).on("click", function(e) {
                                var n = r.getClosest(e.target, "BUTTON");
                                !n && m.contains(e.target) && t.forEach(u, function(n) {
                                    e.target === n || n.contains(e.target) || t.element(n).triggerHandler("click")
                                })
                            })
                        }
                        var m, f, h = a[0].querySelector(".md-secondary");
                        if (a[0].setAttribute("role", "listitem"), s.ngClick) l("button");
                        else {
                            for (var p, g = 0; p = o[g]; ++g)
                                if (f = a[0].querySelector(p)) {
                                    m = !0;
                                    break
                                }
                            m ? l("div") : a[0].querySelector("md-button") || a.addClass("md-no-proxy")
                        }
                        return c(), u
                    }
                }
            }

            function r(e, t, n) {
                function r(e, t) {
                    var r = {};
                    n.attach(e, t, r)
                }
                var i = this;
                i.attachRipple = r
            }
            t.module("material.components.list", ["material.core"]).controller("MdListController", r).directive("mdList", e).directive("mdListItem", n), e.$inject = ["$mdTheming"], n.$inject = ["$mdAria", "$mdConstant", "$mdUtil", "$timeout"], r.$inject = ["$scope", "$element", "$mdListInkRipple"]
        }(),
        function() {
            t.module("material.components.menu", ["material.core", "material.components.backdrop"])
        }(),
        function() {
            t.module("material.components.menuBar", ["material.core", "material.components.menu"])
        }(),
        function() {
            function e(e, r, i) {
                function o(e) {
                    return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), a
                }

                function a(o, a, f) {
                    function h() {
                        f.$observe("value", function(e) {
                            var t = s(e);
                            a.attr("aria-valuenow", t), b() == u && v(t)
                        }), f.$observe("mdMode", function(e) {
                            switch (e) {
                                case u:
                                case m:
                                    M.removeClass("ng-hide"), M.removeClass(E), M.addClass(E = "md-mode-" + e);
                                    break;
                                default:
                                    M.removeClass(E), M.addClass("ng-hide"), E = n
                            }
                        })
                    }

                    function p() {
                        y.css(C({
                            transform: r.supplant("scale( {0} )", [$()])
                        }))
                    }

                    function g() {
                        if (t.isUndefined(f.mdMode)) {
                            var e = t.isDefined(f.value),
                                n = e ? u : m,
                                o = "Auto-adding the missing md-mode='{0}' to the ProgressCircular element";
                            i.debug(r.supplant(o, [n])), a.attr("md-mode", n), f.mdMode = n
                        }
                    }

                    function v(e) {
                        if (b()) {
                            w = w || t.element(a[0].querySelector(".md-left > .md-half-circle")), x = x || t.element(a[0].querySelector(".md-right > .md-half-circle")), A = A || t.element(a[0].querySelector(".md-gap"));
                            var n = c({
                                    borderBottomColor: 50 >= e ? "transparent !important" : "",
                                    transition: 50 >= e ? "" : "borderBottomColor 0.1s linear"
                                }),
                                i = c({
                                    transition: 50 >= e ? "transform 0.1s linear" : "",
                                    transform: r.supplant("rotate({0}deg)", [50 >= e ? 135 : (e - 50) / 50 * 180 + 135])
                                }),
                                o = c({
                                    transition: e >= 50 ? "transform 0.1s linear" : "",
                                    transform: r.supplant("rotate({0}deg)", [e >= 50 ? 45 : e / 50 * 180 - 135])
                                });
                            w.css(C(i)), x.css(C(o)), A.css(C(n))
                        }
                    }

                    function $() {
                        if (!f.mdDiameter) return d;
                        var e = /([0-9]*)%/.exec(f.mdDiameter),
                            t = Math.max(0, e && e[1] / 100 || parseFloat(f.mdDiameter));
                        return t > 1 ? t / l : t
                    }

                    function b() {
                        var e = (f.mdMode || "").trim();
                        if (e) switch (e) {
                            case u:
                            case m:
                                break;
                            default:
                                e = n
                        }
                        return e
                    }
                    e(a);
                    var E, y = a,
                        M = t.element(a.children()[0]),
                        C = r.dom.animator.toCss;
                    a.attr("md-mode", b()), p(), g(), h();
                    var w, x, A
                }

                function s(e) {
                    return Math.max(0, Math.min(e || 0, 100))
                }

                function c(e) {
                    for (var t in e) e.hasOwnProperty(t) && "" == e[t] && delete e[t];
                    return e
                }
                var l = 100,
                    d = .5,
                    u = "determinate",
                    m = "indeterminate";
                return {
                    restrict: "E",
                    scope: !0,
                    template: '<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',
                    compile: o
                }
            }
            t.module("material.components.progressCircular", ["material.core"]).directive("mdProgressCircular", e), e.$inject = ["$mdTheming", "$mdUtil", "$log"]
        }(),
        function() {
            function e(e, n, r, i) {
                function o(o, a, s, c) {
                    function l() {
                        a.hasClass("md-focused") || a.addClass("md-focused")
                    }

                    function d(r) {
                        var i = r.which || r.keyCode;
                        switch (i) {
                            case n.KEY_CODE.LEFT_ARROW:
                            case n.KEY_CODE.UP_ARROW:
                                r.preventDefault(), u.selectPrevious(), l();
                                break;
                            case n.KEY_CODE.RIGHT_ARROW:
                            case n.KEY_CODE.DOWN_ARROW:
                                r.preventDefault(), u.selectNext(), l();
                                break;
                            case n.KEY_CODE.ENTER:
                                var o = t.element(e.getClosest(a[0], "form"));
                                o.length > 0 && o.triggerHandler("submit")
                        }
                    }
                    r(a);
                    var u = c[0],
                        m = c[1] || e.fakeNgModel();
                    u.init(m), o.mouseActive = !1, a.attr({
                        role: "radiogroup",
                        tabIndex: a.attr("tabindex") || "0"
                    }).on("keydown", d).on("mousedown", function(e) {
                        o.mouseActive = !0, i(function() {
                            o.mouseActive = !1
                        }, 100)
                    }).on("focus", function() {
                        o.mouseActive === !1 && u.$element.addClass("md-focused")
                    }).on("blur", function() {
                        u.$element.removeClass("md-focused")
                    })
                }

                function a(e) {
                    this._radioButtonRenderFns = [], this.$element = e
                }

                function s() {
                    return {
                        init: function(e) {
                            this._ngModelCtrl = e, this._ngModelCtrl.$render = t.bind(this, this.render)
                        },
                        add: function(e) {
                            this._radioButtonRenderFns.push(e)
                        },
                        remove: function(e) {
                            var t = this._radioButtonRenderFns.indexOf(e); - 1 !== t && this._radioButtonRenderFns.splice(t, 1)
                        },
                        render: function() {
                            this._radioButtonRenderFns.forEach(function(e) {
                                e()
                            })
                        },
                        setViewValue: function(e, t) {
                            this._ngModelCtrl.$setViewValue(e, t), this.render()
                        },
                        getViewValue: function() {
                            return this._ngModelCtrl.$viewValue
                        },
                        selectNext: function() {
                            return c(this.$element, 1)
                        },
                        selectPrevious: function() {
                            return c(this.$element, -1)
                        },
                        setActiveDescendant: function(e) {
                            this.$element.attr("aria-activedescendant", e)
                        }
                    }
                }

                function c(n, r) {
                    var i = e.iterator(n[0].querySelectorAll("md-radio-button"), !0);
                    if (i.count()) {
                        var o = function(e) {
                                return !t.element(e).attr("disabled")
                            },
                            a = n[0].querySelector("md-radio-button.md-checked"),
                            s = i[0 > r ? "previous" : "next"](a, o) || i.first();
                        t.element(s).triggerHandler("click")
                    }
                }
                return a.prototype = s(), {
                    restrict: "E",
                    controller: ["$element", a],
                    require: ["mdRadioGroup", "?ngModel"],
                    link: {
                        pre: o
                    }
                }
            }

            function n(e, t, n) {
                function r(r, o, a, s) {
                    function c(e) {
                        if (!s) throw "RadioGroupController not found.";
                        s.add(d), a.$observe("value", d), o.on("click", l).on("$destroy", function() {
                            s.remove(d)
                        })
                    }

                    function l(e) {
                        o[0].hasAttribute("disabled") || r.$apply(function() {
                            s.setViewValue(a.value, e && e.type)
                        })
                    }

                    function d() {
                        function e(e) {
                            "MD-RADIO-GROUP" != o.parent()[0].nodeName && o.parent()[e ? "addClass" : "removeClass"](i)
                        }
                        var t = s.getViewValue() == a.value;
                        t !== m && (m = t, o.attr("aria-checked", t), t ? (e(!0), o.addClass(i), s.setActiveDescendant(o.attr("id"))) : (e(!1), o.removeClass(i)))
                    }

                    function u(n, r) {
                        function i() {
                            return a.id || "radio_" + t.nextUid()
                        }
                        r.ariaId = i(), n.attr({
                            id: r.ariaId,
                            role: "radio",
                            "aria-checked": "false"
                        }), e.expectWithText(n, "aria-label")
                    }
                    var m;
                    n(o), u(o, r), c()
                }
                var i = "md-checked";
                return {
                    restrict: "E",
                    require: "^mdRadioGroup",
                    transclude: !0,
                    template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',
                    link: r
                }
            }
            t.module("material.components.radioButton", ["material.core"]).directive("mdRadioGroup", e).directive("mdRadioButton", n), e.$inject = ["$mdUtil", "$mdConstant", "$mdTheming", "$timeout"], n.$inject = ["$mdAria", "$mdUtil", "$mdTheming"]
        }(),
        function() {
            function e(e, r, i) {
                function o(e, t, n) {
                    return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), a
                }

                function a(o, a, m) {
                    function f() {
                        m.$observe("value", function(e) {
                            var t = s(e);
                            a.attr("aria-valuenow", t), p() != u && g(E, t)
                        }), m.$observe("mdBufferValue", function(e) {
                            g(b, s(e))
                        }), m.$observe("mdMode", function(e) {
                            switch (e) {
                                case u:
                                case d:
                                case c:
                                case l:
                                    y.removeClass("ng-hide " + v), y.addClass(v = "md-mode-" + e);
                                    break;
                                default:
                                    y.removeClass(v), y.addClass("ng-hide"), v = n
                            }
                        })
                    }

                    function h() {
                        if (t.isUndefined(m.mdMode)) {
                            var e = t.isDefined(m.value),
                                n = e ? c : l,
                                o = "Auto-adding the missing md-mode='{0}' to the ProgressLinear element";
                            i.debug(r.supplant(o, [n])), a.attr("md-mode", n), m.mdMode = n
                        }
                    }

                    function p() {
                        var e = (m.mdMode || "").trim();
                        if (e) switch (e) {
                            case c:
                            case l:
                            case d:
                            case u:
                                break;
                            default:
                                e = n
                        }
                        return e
                    }

                    function g(e, n) {
                        if (p()) {
                            var i = r.supplant("translateX({0}%) scale({1},1)", [(n - 100) / 2, n / 100]),
                                o = $({
                                    transform: i
                                });
                            t.element(e).css(o)
                        }
                    }
                    e(a);
                    var v, $ = r.dom.animator.toCss,
                        b = t.element(a[0].querySelector(".md-bar1")),
                        E = t.element(a[0].querySelector(".md-bar2")),
                        y = t.element(a[0].querySelector(".md-container"));
                    a.attr("md-mode", p()), h(), f()
                }

                function s(e) {
                    return Math.max(0, Math.min(e || 0, 100))
                }
                var c = "determinate",
                    l = "indeterminate",
                    d = "buffer",
                    u = "query";
                return {
                    restrict: "E",
                    template: '<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',
                    compile: o
                }
            }
            t.module("material.components.progressLinear", ["material.core"]).directive("mdProgressLinear", e), e.$inject = ["$mdTheming", "$mdUtil", "$log"]
        }(),
        function() {
            function e(e, r, i, o, a, s) {
                function c(c, l) {
                    var d = t.element("<md-select-value><span></span></md-select-value>");
                    if (d.append('<span class="md-select-icon" aria-hidden="true"></span>'), d.addClass("md-select-value"), d[0].hasAttribute("id") || d.attr("id", "select_value_label_" + r.nextUid()), c.find("md-content").length || c.append(t.element("<md-content>").append(c.contents())), l.mdOnOpen && (c.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="{{progressMode}}" ng-hide="$$loadingAsyncDone"></md-progress-circular></div>')), c.find("md-option").attr("ng-show", "$$loadingAsyncDone")), l.name) {
                        var u = t.element('<select class="md-visually-hidden">');
                        u.attr({
                            name: "." + l.name,
                            "ng-model": l.ngModel,
                            "aria-hidden": "true",
                            tabindex: "-1"
                        });
                        var m = c.find("md-option");
                        t.forEach(m, function(e) {
                            var n = t.element("<option>" + e.innerHTML + "</option>");
                            e.hasAttribute("ng-value") ? n.attr("ng-value", e.getAttribute("ng-value")) : e.hasAttribute("value") && n.attr("value", e.getAttribute("value")), u.append(n)
                        }), c.parent().append(u)
                    }
                    var f = t.isDefined(l.multiple) ? "multiple" : "",
                        h = '<div class="md-select-menu-container"><md-select-menu {0}>{1}</md-select-menu></div>';
                    return h = r.supplant(h, [f, c.html()]), c.empty().append(d), l.tabindex = l.tabindex || "0",
                        function(c, l, d, u) {
                            function m() {
                                var e = l.attr("placeholder");
                                !e && E && E.label && (e = E.label.text()), o.expect(l, "aria-label", e)
                            }

                            function f() {
                                k && (S = S || k.find("md-select-menu").controller("mdSelectMenu"), y.setLabelText(S.selectedLabels()))
                            }

                            function p() {
                                E && E.setHasValue(S.selectedLabels().length > 0 || (l[0].validity || {}).badInput)
                            }

                            function g() {
                                k = t.element(h);
                                var e = k.find("md-select-menu");
                                if (e.data("$ngModelController", M), e.data("$mdSelectController", y), T = c.$new(), i.inherit(k, l), l.attr("md-container-class")) {
                                    var n = k[0].getAttribute("class") + " " + l.attr("md-container-class");
                                    k[0].setAttribute("class", n)
                                }
                                k = a(k)(T), S = k.find("md-select-menu").controller("mdSelectMenu")
                            }

                            function v(e) {
                                var n = [32, 13, 38, 40];
                                if (-1 != n.indexOf(e.keyCode)) e.preventDefault(), $(e);
                                else if (e.keyCode <= 90 && e.keyCode >= 31) {
                                    e.preventDefault();
                                    var r = S.optNodeForKeyboardSearch(e);
                                    if (!r) return;
                                    var i = t.element(r).controller("mdOption");
                                    S.isMultiple || S.deselect(Object.keys(S.selected)[0]), S.select(i.hashKey, i.value), S.refreshViewValue(), M.$render()
                                }
                            }

                            function $() {
                                T.isOpen = !0, e.show({
                                    scope: T,
                                    preserveScope: !0,
                                    skipCompile: !0,
                                    element: k,
                                    target: l[0],
                                    hasBackdrop: !0,
                                    loadingAsync: d.mdOnOpen ? c.$eval(d.mdOnOpen) || !0 : !1
                                }).then(function() {
                                    T.isOpen = !1
                                })
                            }
                            var b, E = u[0],
                                y = u[1],
                                M = u[2],
                                C = u[3],
                                w = l.find("md-select-value"),
                                x = t.isDefined(d.readonly);
                            if (E) {
                                var A = E.isErrorGetter || function() {
                                    return M.$invalid && M.$touched
                                };
                                if (E.input) throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");
                                E.input = l, E.label || o.expect(l, "aria-label", l.attr("placeholder")), c.$watch(A, E.setInvalid)
                            }
                            var k, T, S;
                            if (g(), i(l), d.name && C) {
                                var N = l.parent()[0].querySelector('select[name=".' + d.name + '"]'),
                                    D = t.element(N).controller();
                                D && C.$removeControl(D)
                            }
                            C && r.nextTick(function() {
                                C.$setPristine()
                            });
                            var _ = M.$render;
                            M.$render = function() {
                                _(), f(), p()
                            }, d.$observe("placeholder", M.$render), y.setLabelText = function(e) {
                                y.setIsPlaceholder(!e);
                                var t = d.placeholder || (E && E.label ? E.label.text() : "");
                                e = e || t || "";
                                var n = w.children().eq(0);
                                n.text(e)
                            }, y.setIsPlaceholder = function(e) {
                                e ? (w.addClass("md-select-placeholder"), E && E.label && E.label.addClass("md-placeholder md-static")) : (w.removeClass("md-select-placeholder"), E && E.label && E.label.removeClass("md-placeholder"))
                            }, x || l.on("focus", function(e) {
                                E && E.element.hasClass("md-input-has-value") && E.setFocused(!0)
                            }).on("blur", function(e) {
                                E && E.setFocused(!1), p()
                            }), y.triggerClose = function() {
                                s(d.mdOnClose)(c)
                            }, c.$$postDigest(function() {
                                m(), f()
                            });
                            var O;
                            d.$observe("ngMultiple", function(e) {
                                O && O();
                                var t = s(e);
                                O = c.$watch(function() {
                                    return t(c)
                                }, function(e, t) {
                                    (e !== n || t !== n) && (e ? l.attr("multiple", "multiple") : l.removeAttr("multiple"), k && (S.setMultiple(e), _ = M.$render, M.$render = function() {
                                        _(), f()
                                    }, S.refreshViewValue(), M.$render()))
                                })
                            }), d.$observe("disabled", function(e) {
                                t.isString(e) && (e = !0), (b === n || b !== e) && (b = e, e ? (l.attr({
                                    tabindex: -1,
                                    "aria-disabled": "true"
                                }), l.off("click", $), l.off("keydown", v)) : (l.attr({
                                    tabindex: d.tabindex,
                                    "aria-disabled": "false"
                                }), l.on("click", $), l.on("keydown", v)))
                            }), d.disabled || d.ngDisabled || (l.attr({
                                tabindex: d.tabindex,
                                "aria-disabled": "false"
                            }), l.on("click", $), l.on("keydown", v));
                            var H = {
                                role: "combobox",
                                "aria-expanded": "false"
                            };
                            l[0].hasAttribute("id") || (H.id = "select_" + r.nextUid()), l.attr(H), c.$on("$destroy", function() {
                                e.destroy()["finally"](function() {
                                    k && k.remove(), E && (E.setFocused(!1), E.setHasValue(!1), E.input = null)
                                })
                            })
                        }
                }
                return {
                    restrict: "E",
                    require: ["^?mdInputContainer", "mdSelect", "ngModel", "?^form"],
                    compile: c,
                    controller: function() {}
                }
            }

            function r(e, r, i) {
                function o(e, n, o, a) {
                    function s() {
                        n.attr({
                            id: "select_menu_" + r.nextUid(),
                            role: "listbox",
                            "aria-multiselectable": d.isMultiple ? "true" : "false"
                        })
                    }

                    function c(e) {
                        (13 == e.keyCode || 32 == e.keyCode) && l(e)
                    }

                    function l(n) {
                        var i = r.getClosest(n.target, "md-option"),
                            o = i && t.element(i).data("$mdOptionController");
                        if (i && o) {
                            if (i.hasAttribute("disabled")) return n.stopImmediatePropagation(), !1;
                            var a = d.hashGetter(o.value),
                                s = t.isDefined(d.selected[a]);
                            e.$apply(function() {
                                d.isMultiple ? s ? d.deselect(a) : d.select(a, o.value) : s || (d.deselect(Object.keys(d.selected)[0]), d.select(a, o.value)), d.refreshViewValue()
                            })
                        }
                    }
                    var d = a[0],
                        u = a[1];
                    i(n), n.on("click", l), n.on("keypress", c), u && d.init(u), s()
                }

                function a(i, o, a) {
                    function s() {
                        var e = d.ngModel.$modelValue || d.ngModel.$viewValue || [];
                        if (t.isArray(e)) {
                            var n = Object.keys(d.selected),
                                r = e.map(d.hashGetter),
                                i = n.filter(function(e) {
                                    return -1 === r.indexOf(e)
                                });
                            i.forEach(d.deselect), r.forEach(function(t, n) {
                                d.select(t, e[n])
                            })
                        }
                    }

                    function l() {
                        var e = d.ngModel.$viewValue || d.ngModel.$modelValue;
                        Object.keys(d.selected).forEach(d.deselect), d.select(d.hashGetter(e), e)
                    }
                    var d = this;
                    d.isMultiple = t.isDefined(o.multiple), d.selected = {}, d.options = {}, i.$watch(function() {
                        return d.options
                    }, function() {
                        d.ngModel.$render()
                    }, !0);
                    var u;
                    d.setMultiple = function(e) {
                        function n(e, n) {
                            return t.isArray(e || n || [])
                        }
                        var r = d.ngModel;
                        d.isMultiple = e, u && u(), d.isMultiple ? (r.$validators["md-multiple"] = n, r.$render = s, i.$watchCollection(o.ngModel, function(e) {
                            n(e) && s(e), d.ngModel.$setPristine()
                        })) : (delete r.$validators["md-multiple"], r.$render = l)
                    };
                    var m, f, h, p = "",
                        g = 300;
                    d.optNodeForKeyboardSearch = function(e) {
                        m && clearTimeout(m), m = setTimeout(function() {
                            m = n, p = "", h = n, f = n
                        }, g), p += String.fromCharCode(e.keyCode);
                        var r = new RegExp("^" + p, "i");
                        f || (f = a.find("md-option"), h = new Array(f.length), t.forEach(f, function(e, t) {
                            h[t] = e.textContent.trim()
                        }));
                        for (var i = 0; i < h.length; ++i)
                            if (r.test(h[i])) return f[i]
                    }, d.init = function(n) {
                        if (d.ngModel = n, n.$options && n.$options.trackBy) {
                            var r = {},
                                o = e(n.$options.trackBy);
                            d.hashGetter = function(e, t) {
                                return r.$value = e, o(t || i, r)
                            }
                        } else d.hashGetter = function(e) {
                            return t.isObject(e) ? "object_" + (e.$$mdSelectId || (e.$$mdSelectId = ++c)) : e
                        };
                        d.setMultiple(d.isMultiple)
                    }, d.selectedLabels = function() {
                        var e = r.nodesToArray(a[0].querySelectorAll("md-option[selected]"));
                        return e.length ? e.map(function(e) {
                            return e.textContent
                        }).join(", ") : ""
                    }, d.select = function(e, t) {
                        var n = d.options[e];
                        n && n.setSelected(!0), d.selected[e] = t
                    }, d.deselect = function(e) {
                        var t = d.options[e];
                        t && t.setSelected(!1), delete d.selected[e]
                    }, d.addOption = function(e, n) {
                        if (t.isDefined(d.options[e])) throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "' + n.value + '" found.');
                        d.options[e] = n, t.isDefined(d.selected[e]) && (d.select(e, n.value), d.refreshViewValue())
                    }, d.removeOption = function(e) {
                        delete d.options[e]
                    }, d.refreshViewValue = function() {
                        var e, t = [];
                        for (var n in d.selected) t.push((e = d.options[n]) ? e.value : d.selected[n]);
                        d.ngModel.$setViewValue(d.isMultiple ? t : t[0])
                    }
                }
                return a.$inject = ["$scope", "$attrs", "$element"], {
                    restrict: "E",
                    require: ["mdSelectMenu", "?ngModel"],
                    controller: a,
                    link: {
                        pre: o
                    }
                }
            }

            function i(e, n) {
                function r(e, n) {
                    return e.append(t.element('<div class="md-text">').append(e.contents())), e.attr("tabindex", n.tabindex || "0"), i
                }

                function i(r, i, o, a) {
                    function s(e, t) {
                        var n = d.hashGetter(t, r),
                            i = d.hashGetter(e, r);
                        l.hashKey = i, l.value = e, d.removeOption(n, l), d.addOption(i, l)
                    }

                    function c() {
                        var e = {
                            role: "option",
                            "aria-selected": "false"
                        };
                        i[0].hasAttribute("id") || (e.id = "select_option_" + n.nextUid()), i.attr(e)
                    }
                    var l = a[0],
                        d = a[1];
                    t.isDefined(o.ngValue) ? r.$watch(o.ngValue, s) : t.isDefined(o.value) ? s(o.value) : r.$watch(function() {
                        return i.text()
                    }, s), o.$observe("disabled", function(e) {
                        e ? i.attr("tabindex", "-1") : i.attr("tabindex", "0")
                    }), r.$$postDigest(function() {
                        o.$observe("selected", function(e) {
                            t.isDefined(e) && ("string" == typeof e && (e = !0), e ? (d.isMultiple || d.deselect(Object.keys(d.selected)[0]), d.select(l.hashKey, l.value)) : d.deselect(l.hashKey), d.refreshViewValue(), d.ngModel.$render())
                        })
                    }), e.attach(r, i), c(), r.$on("$destroy", function() {
                        d.removeOption(l.hashKey, l)
                    })
                }

                function o(e) {
                    this.selected = !1, this.setSelected = function(t) {
                        t && !this.selected ? e.attr({
                            selected: "selected",
                            "aria-selected": "true"
                        }) : !t && this.selected && (e.removeAttr("selected"), e.attr("aria-selected", "false")), this.selected = t
                    }
                }
                return o.$inject = ["$element"], {
                    restrict: "E",
                    require: ["mdOption", "^^mdSelectMenu"],
                    controller: o,
                    compile: r
                }
            }

            function o() {
                function e(e, n) {
                    var r = e.find("label");
                    r.length || (r = t.element("<label>"), e.prepend(r)), n.label && r.text(n.label)
                }
                return {
                    restrict: "E",
                    compile: e
                }
            }

            function a(e) {
                function r(e, r, c, l, d, u, m, f) {
                    function h(e, t, n) {
                        function r() {
                            return m(t, {
                                addClass: "md-leave"
                            }).start()
                        }

                        function i() {
                            g(n.target, !1), t.attr("opacity", 0), t.removeClass("md-active"), $(t, n), v(n), !n.$destroy && n.restoreFocus && n.target.focus()
                        }
                        return n = n || {}, n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? i() : r().then(i)
                    }

                    function p(i, o, a) {
                        function s(e, t, n) {
                            return n.parent.append(t), d(function(e, n) {
                                try {
                                    m(t, {
                                        removeClass: "md-leave",
                                        duration: 0
                                    }).start().then(h).then(e);
                                } catch (r) {
                                    n(r)
                                }
                            })
                        }

                        function h() {
                            return d(function(e) {
                                if (a.isRemoved) return d.reject(!1);
                                var t = b(i, o, a);
                                t.container.element.css(y.toCss(t.container.styles)), t.dropDown.element.css(y.toCss(t.dropDown.styles)), u(function() {
                                    o.addClass("md-active"), t.dropDown.element.css(y.toCss({
                                        transform: ""
                                    })), v(a.focusedNode), e()
                                })
                            })
                        }

                        function p(e, t, n) {
                            return n.disableParentScroll && !c.getClosest(n.target, "MD-DIALOG") ? n.restoreScroll = c.disableScrollAround(n.element, n.parent) : n.disableParentScroll = !1, n.hasBackdrop && (n.backdrop = c.createBackdrop(e, "md-select-backdrop md-click-catcher"), f.enter(n.backdrop, n.parent, null, {
                                    duration: 0
                                })),
                                function() {
                                    n.backdrop && n.backdrop.remove(), n.disableParentScroll && n.restoreScroll(), delete n.restoreScroll
                                }
                        }

                        function v(e) {
                            e && !e.hasAttribute("disabled") && e.focus()
                        }

                        function $(e, n) {
                            var r = o.find("md-select-menu");
                            if (!n.target) throw new Error(c.supplant(E, [n.target]));
                            t.extend(n, {
                                isRemoved: !1,
                                target: t.element(n.target),
                                parent: t.element(n.parent),
                                selectEl: r,
                                contentEl: o.find("md-content"),
                                optionNodes: r[0].getElementsByTagName("md-option")
                            })
                        }

                        function M() {
                            var e = function(e, t, n) {
                                    return function() {
                                        if (!n.isRemoved) {
                                            var r = b(e, t, n),
                                                i = r.container,
                                                o = r.dropDown;
                                            i.element.css(y.toCss(i.styles)), o.element.css(y.toCss(o.styles))
                                        }
                                    }
                                }(i, o, a),
                                n = t.element(l);
                            return n.on("resize", e), n.on("orientationchange", e),
                                function() {
                                    n.off("resize", e), n.off("orientationchange", e)
                                }
                        }

                        function C() {
                            a.loadingAsync && !a.isRemoved && (i.$$loadingAsyncDone = !1, i.progressMode = "indeterminate", d.when(a.loadingAsync).then(function() {
                                i.$$loadingAsyncDone = !0, i.progressMode = "", delete a.loadingAsync
                            }).then(function() {
                                u(h)
                            }))
                        }

                        function w() {
                            function t(t) {
                                t.preventDefault(), t.stopPropagation(), a.restoreFocus = !1, c.nextTick(e.hide, !0)
                            }

                            function i(t) {
                                var n = r.KEY_CODE;
                                switch (t.keyCode) {
                                    case n.UP_ARROW:
                                        return d();
                                    case n.DOWN_ARROW:
                                        return l();
                                    case n.SPACE:
                                    case n.ENTER:
                                        var i = c.getClosest(t.target, "md-option");
                                        i && (m.triggerHandler({
                                            type: "click",
                                            target: i
                                        }), t.preventDefault()), u(t);
                                        break;
                                    case n.TAB:
                                    case n.ESCAPE:
                                        t.preventDefault(), a.restoreFocus = !0, c.nextTick(e.hide, !0);
                                        break;
                                    default:
                                        if (t.keyCode >= 31 && t.keyCode <= 90) {
                                            var o = m.controller("mdSelectMenu").optNodeForKeyboardSearch(t);
                                            a.focusedNode = o || a.focusedNode, o && o.focus()
                                        }
                                }
                            }

                            function s(e) {
                                var t, r = c.nodesToArray(a.optionNodes),
                                    i = r.indexOf(a.focusedNode);
                                do -1 === i ? i = 0 : "next" === e && i < r.length - 1 ? i++ : "prev" === e && i > 0 && i--, t = r[i], t.hasAttribute("disabled") && (t = n); while (!t && i < r.length - 1 && i > 0);
                                t && t.focus(), a.focusedNode = t
                            }

                            function l() {
                                s("next")
                            }

                            function d() {
                                s("prev")
                            }

                            function u(t) {
                                function n() {
                                    var e = !1;
                                    if (t && t.currentTarget.children.length > 0) {
                                        var n = t.currentTarget.children[0],
                                            r = n.scrollHeight > n.clientHeight;
                                        if (r && n.children.length > 0) {
                                            var i = t.pageX - t.currentTarget.getBoundingClientRect().left;
                                            i > n.querySelector("md-option").offsetWidth && (e = !0)
                                        }
                                    }
                                    return e
                                }
                                t && "mouseup" == t.type && t.currentTarget != m[0] || n() || f.isMultiple || (a.restoreFocus = !0, c.nextTick(function() {
                                    e.hide(f.ngModel.$viewValue)
                                }, !0))
                            }
                            if (!a.isRemoved) {
                                var m = a.selectEl,
                                    f = m.controller("mdSelectMenu") || {};
                                return o.addClass("md-clickable"), a.backdrop && a.backdrop.on("click", t), m.on("keydown", i), m.on("mouseup", u),
                                    function() {
                                        a.backdrop && a.backdrop.off("click", t), m.off("keydown", i), m.off("mouseup", u), o.removeClass("md-clickable"), a.isRemoved = !0
                                    }
                            }
                        }
                        return C(), $(i, a), g(a.target), a.hideBackdrop = p(i, o, a), s(i, o, a).then(function(e) {
                            return a.alreadyOpen = !0, a.cleanupInteraction = w(), a.cleanupResizing = M(), e
                        }, a.hideBackdrop)
                    }

                    function g(e, n) {
                        n = t.isUndefined(n) ? "true" : "false", e && e.attr("aria-expanded", n)
                    }

                    function v(e) {
                        var t = e.selectEl.controller("mdSelect");
                        if (t) {
                            var n = e.selectEl.controller("mdSelectMenu");
                            t.setLabelText(n.selectedLabels()), t.triggerClose()
                        }
                    }

                    function $(e, t) {
                        e[0].parentNode === t.parent[0] && t.parent[0].removeChild(e[0])
                    }

                    function b(e, n, r) {
                        var d, u, m = n[0],
                            f = r.target[0].firstElementChild,
                            h = r.parent[0],
                            p = r.selectEl[0],
                            g = r.contentEl[0],
                            v = h.getBoundingClientRect(),
                            $ = f.getBoundingClientRect(),
                            b = !1,
                            E = {
                                left: v.left + s,
                                top: s,
                                bottom: v.height - s,
                                right: v.width - s - (c.floatingScrollbars() ? 16 : 0)
                            },
                            y = {
                                top: $.top - E.top,
                                left: $.left - E.left,
                                right: E.right - ($.left + $.width),
                                bottom: E.bottom - ($.top + $.height)
                            },
                            M = v.width - 2 * s,
                            C = g.scrollHeight > g.offsetHeight,
                            w = p.querySelector("md-option[selected]"),
                            d = p.getElementsByTagName("md-option"),
                            x = p.getElementsByTagName("md-optgroup"),
                            A = i(r.loadingAsync);
                        u = A ? g.firstElementChild || g : w ? w : x.length ? x[0] : d.length ? d[0] : g.firstElementChild || g, g.offsetWidth > M && (g.style["max-width"] = M + "px"), b && (g.style["min-width"] = $.width + "px"), C && p.classList.add("md-overflow");
                        var k = u;
                        "MD-OPTGROUP" === (k.tagName || "").toUpperCase() && (k = d[0] || g.firstElementChild || g, u = k), r.focusedNode = k;
                        var T = p.getBoundingClientRect(),
                            S = a(u);
                        if (u) {
                            var N = l.getComputedStyle(u);
                            S.paddingLeft = parseInt(N.paddingLeft, 10) || 0, S.paddingRight = parseInt(N.paddingRight, 10) || 0
                        }
                        if (C) {
                            var D = g.offsetHeight / 2;
                            g.scrollTop = S.top + S.height / 2 - D, y.top < D ? g.scrollTop = Math.min(S.top, g.scrollTop + D - y.top) : y.bottom < D && (g.scrollTop = Math.max(S.top + S.height - T.height, g.scrollTop - D + y.bottom))
                        }
                        var _, O, H, I;
                        b ? (_ = $.left, O = $.top + $.height, H = "50% 0", O + T.height > E.bottom && (O = $.top - T.height, H = "50% 100%")) : (_ = $.left + S.left - S.paddingLeft + 2, O = Math.floor($.top + $.height / 2 - S.height / 2 - S.top + g.scrollTop) + 2, H = S.left + $.width / 2 + "px " + (S.top + S.height / 2 - g.scrollTop) + "px 0px", I = $.width + S.paddingLeft + S.paddingRight);
                        var R = m.getBoundingClientRect(),
                            P = Math.round(100 * Math.min($.width / T.width, 1)) / 100,
                            L = Math.round(100 * Math.min($.height / T.height, 1)) / 100;
                        return {
                            container: {
                                element: t.element(m),
                                styles: {
                                    left: Math.floor(o(E.left, _, E.right - R.width)),
                                    top: Math.floor(o(E.top, O, E.bottom - R.height)),
                                    "min-width": I
                                }
                            },
                            dropDown: {
                                element: t.element(p),
                                styles: {
                                    transformOrigin: H,
                                    transform: r.alreadyOpen ? "" : c.supplant("scale({0},{1})", [P, L])
                                }
                            }
                        }
                    }
                    var E = "$mdSelect.show() expected a target element in options.target but got '{0}'!",
                        y = c.dom.animator;
                    return {
                        parent: "body",
                        themable: !0,
                        onShow: p,
                        onRemove: h,
                        hasBackdrop: !0,
                        disableParentScroll: !0
                    }
                }

                function i(e) {
                    return e && t.isFunction(e.then)
                }

                function o(e, t, n) {
                    return Math.max(e, Math.min(t, n))
                }

                function a(e) {
                    return e ? {
                        left: e.offsetLeft,
                        top: e.offsetTop,
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    } : {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    }
                }
                return r.$inject = ["$mdSelect", "$mdConstant", "$mdUtil", "$window", "$q", "$$rAF", "$animateCss", "$animate"], e("$mdSelect").setDefaults({
                    methods: ["target"],
                    options: r
                })
            }
            var s = 8,
                c = 0;
            t.module("material.components.select", ["material.core", "material.components.backdrop"]).directive("mdSelect", e).directive("mdSelectMenu", r).directive("mdOption", i).directive("mdOptgroup", o).provider("$mdSelect", a), e.$inject = ["$mdSelect", "$mdUtil", "$mdTheming", "$mdAria", "$compile", "$parse"], r.$inject = ["$parse", "$mdUtil", "$mdTheming"], i.$inject = ["$mdButtonInkRipple", "$mdUtil"], a.$inject = ["$$interimElementProvider"]
        }(),
        function() {
            function e(e, n) {
                return function(r) {
                    function i() {
                        return e.when(r).then(function(e) {
                            return s = e, e
                        })
                    }
                    var o, a = "SideNav '" + r + "' is not available!",
                        s = e.get(r);
                    return s || e.notFoundError(r), o = {
                        isOpen: function() {
                            return s && s.isOpen()
                        },
                        isLockedOpen: function() {
                            return s && s.isLockedOpen()
                        },
                        toggle: function() {
                            return s ? s.toggle() : n.reject(a)
                        },
                        open: function() {
                            return s ? s.open() : n.reject(a)
                        },
                        close: function() {
                            return s ? s.close() : n.reject(a)
                        },
                        then: function(e) {
                            var r = s ? n.when(s) : i();
                            return r.then(e || t.noop)
                        }
                    }
                }
            }

            function r() {
                return {
                    restrict: "A",
                    require: "^mdSidenav",
                    link: function(e, t, n, r) {}
                }
            }

            function i(e, r, i, o, a, s, c, l, d, u) {
                function m(s, m, f, h) {
                    function p(e, t) {
                        s.isLockedOpen = e, e === t ? m.toggleClass("md-locked-open", !!e) : a[e ? "addClass" : "removeClass"](m, "md-locked-open"), A.toggleClass("md-locked-open", !!e)
                    }

                    function g(e) {
                        var t = r.findFocusTarget(m) || r.findFocusTarget(m, "[md-sidenav-focus]") || m,
                            n = m.parent();
                        return n[e ? "on" : "off"]("keydown", b), A[e ? "on" : "off"]("click", E), e && (M = u[0].activeElement), v(e), C = d.all([e ? a.enter(A, n) : a.leave(A), a[e ? "removeClass" : "addClass"](m, "md-closed")]).then(function() {
                            s.isOpen && t && t.focus()
                        })
                    }

                    function v(e) {
                        var r = m.parent();
                        e && !y ? (y = r.css("overflow"), r.css("overflow", "hidden")) : t.isDefined(y) && (r.css("overflow", y), y = n)
                    }

                    function $(e) {
                        return s.isOpen == e ? d.when(!0) : d(function(t) {
                            s.isOpen = e, r.nextTick(function() {
                                C.then(function(e) {
                                    s.isOpen || (M && M.focus(), M = null), t(e)
                                })
                            })
                        })
                    }

                    function b(e) {
                        var t = e.keyCode === i.KEY_CODE.ESCAPE;
                        return t ? E(e) : d.when(!0)
                    }

                    function E(e) {
                        return e.preventDefault(), e.stopPropagation(), h.close()
                    }
                    var y, M = null,
                        C = d.when(!0),
                        w = c(f.mdIsLockedOpen),
                        x = function() {
                            return w(s.$parent, {
                                $media: function(t) {
                                    return l.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."), e(t)
                                },
                                $mdMedia: e
                            })
                        },
                        A = r.createBackdrop(s, "md-sidenav-backdrop md-opaque ng-enter");
                    o.inherit(A, m), m.on("$destroy", function() {
                        A.remove(), h.destroy()
                    }), s.$on("$destroy", function() {
                        A.remove()
                    }), s.$watch(x, p), s.$watch("isOpen", g), h.$toggleOpen = $
                }
                return {
                    restrict: "E",
                    scope: {
                        isOpen: "=?mdIsOpen"
                    },
                    controller: "$mdSidenavController",
                    compile: function(e) {
                        return e.addClass("md-closed"), e.attr("tabIndex", "-1"), m
                    }
                }
            }

            function o(e, t, n, r, i) {
                var o = this;
                o.isOpen = function() {
                    return !!e.isOpen
                }, o.isLockedOpen = function() {
                    return !!e.isLockedOpen
                }, o.open = function() {
                    return o.$toggleOpen(!0)
                }, o.close = function() {
                    return o.$toggleOpen(!1)
                }, o.toggle = function() {
                    return o.$toggleOpen(!e.isOpen)
                }, o.$toggleOpen = function(t) {
                    return i.when(e.isOpen = t)
                }, o.destroy = r.register(o, n.mdComponentId)
            }
            t.module("material.components.sidenav", ["material.core", "material.components.backdrop"]).factory("$mdSidenav", e).directive("mdSidenav", i).directive("mdSidenavFocus", r).controller("$mdSidenavController", o), e.$inject = ["$mdComponentRegistry", "$q"], i.$inject = ["$mdMedia", "$mdUtil", "$mdConstant", "$mdTheming", "$animate", "$compile", "$parse", "$log", "$q", "$document"], o.$inject = ["$scope", "$element", "$attrs", "$mdComponentRegistry", "$q"]
        }(),
        function() {
            function e(e, n, r, i, o, a, s, c, l) {
                function d(e, t) {
                    return e.attr({
                        tabIndex: 0,
                        role: "slider"
                    }), r.expect(e, "aria-label"), u
                }

                function u(r, d, u, m) {
                    function f() {
                        b(), C(), $()
                    }

                    function h(e) {
                        K = parseFloat(e), d.attr("aria-valuemin", e), f()
                    }

                    function p(e) {
                        G = parseFloat(e), d.attr("aria-valuemax", e), f()
                    }

                    function g(e) {
                        X = parseFloat(e), $()
                    }

                    function v(e) {
                        d.attr("aria-disabled", !!e)
                    }

                    function $() {
                        if (t.isDefined(u.mdDiscrete) && !t.isUndefined(X)) {
                            if (0 >= X) {
                                var e = "Slider step value must be greater than zero when in discrete mode";
                                throw l.error(e), new Error(e)
                            }
                            var r = Math.floor((G - K) / X);
                            if (!J) {
                                J = t.element('<canvas style="position:absolute;">'), U.append(J);
                                var i = n.getComputedStyle(U[0]);
                                Z = J[0].getContext("2d"), Z.fillStyle = i.backgroundColor || "black"
                            }
                            var o = E();
                            J[0].width = o.width, J[0].height = o.height;
                            for (var a, s = 0; r >= s; s++) a = Math.floor(o.width * (s / r)), Z.fillRect(a - 1, 0, 2, o.height)
                        }
                    }

                    function b() {
                        Q = q[0].getBoundingClientRect()
                    }

                    function E() {
                        return z(), Q
                    }

                    function y(e) {
                        if (!d[0].hasAttribute("disabled")) {
                            var t;
                            e.keyCode === o.KEY_CODE.LEFT_ARROW ? t = -X : e.keyCode === o.KEY_CODE.RIGHT_ARROW && (t = X), t && ((e.metaKey || e.ctrlKey || e.altKey) && (t *= 4), e.preventDefault(), e.stopPropagation(), r.$evalAsync(function() {
                                M(m.$viewValue + t)
                            }))
                        }
                    }

                    function M(e) {
                        m.$setViewValue(w(x(e)))
                    }

                    function C() {
                        isNaN(m.$viewValue) && (m.$viewValue = m.$modelValue);
                        var e = (m.$viewValue - K) / (G - K);
                        r.modelValue = m.$viewValue, d.attr("aria-valuenow", m.$viewValue), A(e), j.text(m.$viewValue)
                    }

                    function w(e) {
                        return t.isNumber(e) ? Math.max(K, Math.min(G, e)) : void 0
                    }

                    function x(e) {
                        if (t.isNumber(e)) {
                            var n = Math.round(e / X) * X;
                            return Math.round(1e3 * n) / 1e3
                        }
                    }

                    function A(e) {
                        var t = 100 * e + "%";
                        B.css("width", t), F.css("left", t), d.toggleClass("md-min", 0 === e), d.toggleClass("md-max", 1 === e)
                    }

                    function k(e) {
                        if (!L()) {
                            d.addClass("md-active"), d[0].focus(), b();
                            var t = R(I(e.pointer.x)),
                                n = w(x(t));
                            r.$apply(function() {
                                M(n), A(P(n))
                            })
                        }
                    }

                    function T(e) {
                        if (!L()) {
                            d.removeClass("md-dragging md-active");
                            var t = R(I(e.pointer.x)),
                                n = w(x(t));
                            r.$apply(function() {
                                M(n), C()
                            })
                        }
                    }

                    function S(e) {
                        L() || (ee = !0, e.stopPropagation(), d.addClass("md-dragging"), _(e))
                    }

                    function N(e) {
                        ee && (e.stopPropagation(), _(e))
                    }

                    function D(e) {
                        ee && (e.stopPropagation(), ee = !1)
                    }

                    function _(e) {
                        te ? H(e.pointer.x) : O(e.pointer.x)
                    }

                    function O(e) {
                        r.$evalAsync(function() {
                            M(R(I(e)))
                        })
                    }

                    function H(e) {
                        var t = R(I(e)),
                            n = w(x(t));
                        A(I(e)), j.text(n)
                    }

                    function I(e) {
                        return Math.max(0, Math.min(1, (e - Q.left) / Q.width))
                    }

                    function R(e) {
                        return K + e * (G - K)
                    }

                    function P(e) {
                        return (e - K) / (G - K)
                    }
                    a(d), m = m || {
                        $setViewValue: function(e) {
                            this.$viewValue = e, this.$viewChangeListeners.forEach(function(e) {
                                e()
                            })
                        },
                        $parsers: [],
                        $formatters: [],
                        $viewChangeListeners: []
                    };
                    var L = t.noop;
                    null != u.disabled ? L = function() {
                        return !0
                    } : u.ngDisabled && (L = t.bind(null, c(u.ngDisabled), r.$parent));
                    var V = t.element(d[0].querySelector(".md-thumb")),
                        j = t.element(d[0].querySelector(".md-thumb-text")),
                        F = V.parent(),
                        q = t.element(d[0].querySelector(".md-track-container")),
                        B = t.element(d[0].querySelector(".md-track-fill")),
                        U = t.element(d[0].querySelector(".md-track-ticks")),
                        z = i.throttle(b, 5e3);
                    t.isDefined(u.min) ? u.$observe("min", h) : h(0), t.isDefined(u.max) ? u.$observe("max", p) : p(100), t.isDefined(u.step) ? u.$observe("step", g) : g(1);
                    var W = t.noop;
                    u.ngDisabled && (W = r.$parent.$watch(u.ngDisabled, v)), s.register(d, "drag"), d.on("keydown", y).on("$md.pressdown", k).on("$md.pressup", T).on("$md.dragstart", S).on("$md.drag", N).on("$md.dragend", D), setTimeout(f, 0);
                    var Y = e.throttle(f);
                    t.element(n).on("resize", Y), r.$on("$destroy", function() {
                        t.element(n).off("resize", Y), W()
                    }), m.$render = C, m.$viewChangeListeners.push(C), m.$formatters.push(w), m.$formatters.push(x);
                    var K, G, X, J, Z, Q = {};
                    b();
                    var ee = !1,
                        te = t.isDefined(u.mdDiscrete)
                }
                return {
                    scope: {},
                    require: "?ngModel",
                    template: '<div class="md-slider-wrapper"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div>',
                    compile: d
                }
            }
            t.module("material.components.slider", ["material.core"]).directive("mdSlider", e), e.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse", "$log"]
        }(),
        function() {
            function e(e, r, i, o) {
                function a(e) {
                    function t(e, t) {
                        t.addClass("md-sticky-clone");
                        var n = {
                            element: e,
                            clone: t
                        };
                        return p.items.push(n), o.nextTick(function() {
                                f.prepend(n.clone)
                            }), h(),
                            function() {
                                p.items.forEach(function(t, n) {
                                    t.element[0] === e[0] && (p.items.splice(n, 1), t.clone.remove())
                                }), h()
                            }
                    }

                    function a() {
                        p.items.forEach(s), p.items = p.items.sort(function(e, t) {
                            return e.top < t.top ? -1 : 1
                        });
                        for (var e, t = f.prop("scrollTop"), n = p.items.length - 1; n >= 0; n--)
                            if (t > p.items[n].top) {
                                e = p.items[n];
                                break
                            }
                        d(e)
                    }

                    function s(e) {
                        var t = e.element[0];
                        for (e.top = 0, e.left = 0; t && t !== f[0];) e.top += t.offsetTop, e.left += t.offsetLeft, t = t.offsetParent;
                        e.height = e.element.prop("offsetHeight"), e.clone.css("margin-left", e.left + "px"), o.floatingScrollbars() && e.clone.css("margin-right", "0")
                    }

                    function l() {
                        var e = f.prop("scrollTop"),
                            t = e > (l.prevScrollTop || 0);
                        if (l.prevScrollTop = e, 0 === e) return void d(null);
                        if (t) {
                            if (p.next && p.next.top <= e) return void d(p.next);
                            if (p.current && p.next && p.next.top - e <= p.next.height) return void m(p.current, e + (p.next.top - p.next.height - e))
                        }
                        if (!t) {
                            if (p.current && p.prev && e < p.current.top) return void d(p.prev);
                            if (p.next && p.current && e >= p.next.top - p.current.height) return void m(p.current, e + (p.next.top - e - p.current.height))
                        }
                        p.current && m(p.current, e)
                    }

                    function d(e) {
                        if (p.current !== e) {
                            p.current && (m(p.current, null), u(p.current, null)), e && u(e, "active"), p.current = e;
                            var t = p.items.indexOf(e);
                            p.next = p.items[t + 1], p.prev = p.items[t - 1], u(p.next, "next"), u(p.prev, "prev")
                        }
                    }

                    function u(e, t) {
                        e && e.state !== t && (e.state && (e.clone.attr("sticky-prev-state", e.state), e.element.attr("sticky-prev-state", e.state)), e.clone.attr("sticky-state", t), e.element.attr("sticky-state", t), e.state = t)
                    }

                    function m(e, t) {
                        e && (null === t || t === n ? e.translateY && (e.translateY = null, e.clone.css(r.CSS.TRANSFORM, "")) : (e.translateY = t, e.clone.css(r.CSS.TRANSFORM, "translate3d(" + e.left + "px," + t + "px,0)")))
                    }
                    var f = e.$element,
                        h = i.throttle(a);
                    c(f), f.on("$scrollstart", h), f.on("$scroll", l);
                    var p;
                    return p = {
                        prev: null,
                        current: null,
                        next: null,
                        items: [],
                        add: t,
                        refreshElements: a
                    }
                }

                function s(n) {
                    var r, i = t.element("<div>");
                    e[0].body.appendChild(i[0]);
                    for (var o = ["sticky", "-webkit-sticky"], a = 0; a < o.length; ++a)
                        if (i.css({
                                position: o[a],
                                top: 0,
                                "z-index": 2
                            }), i.css("position") == o[a]) {
                            r = o[a];
                            break
                        }
                    return i.remove(), r
                }

                function c(e) {
                    function t() {
                        +o.now() - r > a ? (n = !1, e.triggerHandler("$scrollend")) : (e.triggerHandler("$scroll"), i.throttle(t))
                    }
                    var n, r, a = 200;
                    e.on("scroll touchmove", function() {
                        n || (n = !0, i.throttle(t), e.triggerHandler("$scrollstart")), e.triggerHandler("$scroll"), r = +o.now()
                    })
                }
                var l = s();
                return function(e, t, n) {
                    var r = t.controller("mdContent");
                    if (r)
                        if (l) t.css({
                            position: l,
                            top: 0,
                            "z-index": 2
                        });
                        else {
                            var i = r.$element.data("$$sticky");
                            i || (i = a(r), r.$element.data("$$sticky", i));
                            var o = i.add(t, n || t.clone());
                            e.$on("$destroy", o)
                        }
                }
            }
            t.module("material.components.sticky", ["material.core", "material.components.content"]).factory("$mdSticky", e), e.$inject = ["$document", "$mdConstant", "$$rAF", "$mdUtil"]
        }(),
        function() {
            function e(e, n, r, i) {
                return {
                    restrict: "E",
                    replace: !0,
                    transclude: !0,
                    template: '<div class="md-subheader">  <div class="md-subheader-inner">    <span class="md-subheader-content"></span>  </div></div>',
                    link: function(o, a, s, c, l) {
                        function d(e) {
                            return t.element(e[0].querySelector(".md-subheader-content"))
                        }
                        r(a);
                        var u = a[0].outerHTML;
                        l(o, function(e) {
                            d(a).append(e)
                        }), a.hasClass("md-no-sticky") || l(o, function(t) {
                            var r = '<div class="md-subheader-wrapper">' + u + "</div>",
                                s = n(r)(o);
                            e(o, a, s), i.nextTick(function() {
                                d(s).append(t)
                            })
                        })
                    }
                }
            }
            t.module("material.components.subheader", ["material.core", "material.components.sticky"]).directive("mdSubheader", e), e.$inject = ["$mdSticky", "$compile", "$mdTheming", "$mdUtil"]
        }(),
        function() {
            function e(e) {
                function t(e) {
                    function t(t, i, o) {
                        var a = e(o[n]);
                        i.on(r, function(e) {
                            t.$apply(function() {
                                a(t, {
                                    $event: e
                                })
                            })
                        })
                    }
                    return {
                        restrict: "A",
                        link: t
                    }
                }
                var n = "md" + e,
                    r = "$md." + e.toLowerCase();
                return t.$inject = ["$parse"], t
            }
            t.module("material.components.swipe", ["material.core"]).directive("mdSwipeLeft", e("SwipeLeft")).directive("mdSwipeRight", e("SwipeRight"))
        }(),
        function() {
            function e(e, n, r, i, o, a) {
                function s(e, s) {
                    var l = c.compile(e, s);
                    return e.addClass("md-dragging"),
                        function(e, s, c, d) {
                            function u(t) {
                                p && p(e) || (t.stopPropagation(), s.addClass("md-dragging"), $ = {
                                    width: g.prop("offsetWidth")
                                }, s.removeClass("transition"))
                            }

                            function m(e) {
                                if ($) {
                                    e.stopPropagation(), e.srcEvent && e.srcEvent.preventDefault();
                                    var t = e.pointer.distanceX / $.width,
                                        n = d.$viewValue ? 1 + t : t;
                                    n = Math.max(0, Math.min(1, n)), g.css(r.CSS.TRANSFORM, "translate3d(" + 100 * n + "%,0,0)"), $.translate = n
                                }
                            }

                            function f(e) {
                                if ($) {
                                    e.stopPropagation(), s.removeClass("md-dragging"), g.css(r.CSS.TRANSFORM, "");
                                    var t = d.$viewValue ? $.translate > .5 : $.translate < .5;
                                    t && h(!d.$viewValue), $ = null
                                }
                            }

                            function h(t) {
                                e.$apply(function() {
                                    d.$setViewValue(t), d.$render()
                                })
                            }
                            d = d || n.fakeNgModel();
                            var p = null;
                            null != c.disabled ? p = function() {
                                return !0
                            } : c.ngDisabled && (p = i(c.ngDisabled));
                            var g = t.element(s[0].querySelector(".md-thumb-container")),
                                v = t.element(s[0].querySelector(".md-container"));
                            o(function() {
                                s.removeClass("md-dragging")
                            }), l(e, s, c, d), p && e.$watch(p, function(e) {
                                s.attr("tabindex", e ? -1 : 0)
                            }), a.register(v, "drag"), v.on("$md.dragstart", u).on("$md.drag", m).on("$md.dragend", f);
                            var $
                        }
                }
                var c = e[0];
                return {
                    restrict: "E",
                    priority: 210,
                    transclude: !0,
                    template: '<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',
                    require: "?ngModel",
                    compile: s
                }
            }
            t.module("material.components.switch", ["material.core", "material.components.checkbox"]).directive("mdSwitch", e), e.$inject = ["mdCheckboxDirective", "$mdUtil", "$mdConstant", "$parse", "$$rAF", "$mdGesture"]
        }(),
        function() {
            function e(e) {
                return {
                    restrict: "E",
                    link: function(t, n, r) {
                        t.$on("$destroy", function() {
                            e.destroy()
                        })
                    }
                }
            }

            function n(e) {
                function t(e, t, r) {
                    function i(i, o, c) {
                        return n = c.content, o = r.extractElementByName(o, "md-toast", !0), c.onSwipe = function(e, n) {
                            o.addClass("md-" + e.type.replace("$md.", "")), r.nextTick(t.cancel)
                        }, c.openClass = a(c.position), c.parent.addClass(c.openClass), o.on(s, c.onSwipe), o.addClass(c.position.split(" ").map(function(e) {
                            return "md-" + e
                        }).join(" ")), e.enter(o, c.parent)
                    }

                    function o(t, n, r) {
                        return n.off(s, r.onSwipe), r.parent.removeClass(r.openClass), 1 == r.$destroy ? n.remove() : e.leave(n)
                    }

                    function a(e) {
                        return "md-toast-open-" + (e.indexOf("top") > -1 ? "top" : "bottom")
                    }
                    var s = "$md.swipeleft $md.swiperight";
                    return {
                        onShow: i,
                        onRemove: o,
                        position: "bottom left",
                        themable: !0,
                        hideDelay: 3e3
                    }
                }
                var n, r = "ok",
                    i = e("$mdToast").setDefaults({
                        methods: ["position", "hideDelay", "capsule", "parent"],
                        options: t
                    }).addPreset("simple", {
                        argOption: "content",
                        methods: ["content", "action", "highlightAction", "theme", "parent"],
                        options: ["$mdToast", "$mdTheming", function(e, t) {
                            var i = {
                                template: ['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">', "<span flex>{{ toast.content }}</span>", '<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">', "{{ toast.action }}", "</md-button>", "</md-toast>"].join(""),
                                controller: ["$scope", function(t) {
                                    var i = this;
                                    t.$watch(function() {
                                        return n
                                    }, function() {
                                        i.content = n
                                    }), this.resolve = function() {
                                        e.hide(r)
                                    }
                                }],
                                theme: t.defaultTheme(),
                                controllerAs: "toast",
                                bindToController: !0
                            };
                            return i
                        }]
                    }).addMethod("updateContent", function(e) {
                        n = e
                    });
                return t.$inject = ["$animate", "$mdToast", "$mdUtil"], i
            }
            t.module("material.components.toast", ["material.core", "material.components.button"]).directive("mdToast", e).provider("$mdToast", n), e.$inject = ["$mdToast"], n.$inject = ["$$interimElementProvider"]
        }(),
        function() {
            t.module("material.components.tabs", ["material.core", "material.components.icon"])
        }(),
        function() {
            function e(e, n, r, i, o) {
                var a = t.bind(null, r.supplant, "translate3d(0,{0}px,0)");
                return {
                    restrict: "E",
                    link: function(s, c, l) {
                        function d() {
                            function i(e) {
                                var t = c.parent().find("md-content");
                                !p && t.length && d(null, t), e = s.$eval(e), e === !1 ? g() : g = m()
                            }

                            function d(e, t) {
                                t && c.parent()[0] === t.parent()[0] && (p && p.off("scroll", E), p = t, g = m())
                            }

                            function u(e) {
                                var t = e ? e.target.scrollTop : $;
                                y(), v = Math.min(h / b, Math.max(0, v + t - $)), c.css(n.CSS.TRANSFORM, a([-v * b])), p.css(n.CSS.TRANSFORM, a([(h - v) * b])), $ = t, r.nextTick(function() {
                                    var e = c.hasClass("md-whiteframe-z1");
                                    e && !v ? o.removeClass(c, "md-whiteframe-z1") : !e && v && o.addClass(c, "md-whiteframe-z1")
                                })
                            }

                            function m() {
                                return p ? (p.on("scroll", E), p.attr("scroll-shrink", "true"), e(f), function() {
                                    p.off("scroll", E), p.attr("scroll-shrink", "false"), e(f)
                                }) : t.noop
                            }

                            function f() {
                                h = c.prop("offsetHeight");
                                var e = -h * b + "px";
                                p.css({
                                    "margin-top": e,
                                    "margin-bottom": e
                                }), u()
                            }
                            var h, p, g = t.noop,
                                v = 0,
                                $ = 0,
                                b = l.mdShrinkSpeedFactor || .5,
                                E = e.throttle(u),
                                y = r.debounce(f, 5e3);
                            s.$on("$mdContentLoaded", d), l.$observe("mdScrollShrink", i), s.$on("$destroy", g)
                        }
                        i(c), t.isDefined(l.mdScrollShrink) && d()
                    }
                }
            }
            t.module("material.components.toolbar", ["material.core", "material.components.content"]).directive("mdToolbar", e), e.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming", "$animate"]
        }(),
        function() {
            function e(e, n, r, i, o, a, s, c, l) {
                function d(d, f, h) {
                    function p() {
                        t.isDefined(h.mdDelay) || (d.delay = u)
                    }

                    function g() {
                        d.$on("$destroy", function() {
                            d.visible = !1, f.remove(), t.element(n).off("resize", O)
                        }), d.$watch("visible", function(e) {
                            e ? w() : x()
                        })
                    }

                    function v() {
                        k.attr("aria-label") || k.text().trim() || k.attr("aria-label", f.text().trim())
                    }

                    function $() {
                        f.detach(), f.attr("role", "tooltip")
                    }

                    function b() {
                        for (var e = f.parent(); y("pointer-events", "none", e);) e = e.parent();
                        return e
                    }

                    function E() {
                        for (var e = f.parent()[0]; e && e !== s[0] && e !== document.body;) e = e.parentNode;
                        return e
                    }

                    function y(e, r, i) {
                        var o = !1;
                        if (i && i.length) {
                            e = h.$normalize(e), i = i[0] || f[0];
                            var a = n.getComputedStyle(i);
                            o = t.isDefined(a[e]) && a[e] == r
                        }
                        return o
                    }

                    function M() {
                        var e = !1,
                            r = t.element(n),
                            o = function() {
                                a = document.activeElement === k[0]
                            },
                            a = !1;
                        r.on("blur", o), d.$on("$destroy", function() {
                            r.off("blur", o)
                        });
                        var s = function(e) {
                                return "focus" === e.type && a ? void(a = !1) : (k.on("blur mouseleave touchend touchcancel", c), void C(!0))
                            },
                            c = function() {
                                var t = d.hasOwnProperty("autohide") ? d.autohide : h.hasOwnProperty("mdAutohide");
                                (t || e || i[0].activeElement !== k[0]) && (k.off("blur mouseleave touchend touchcancel", c), k.triggerHandler("blur"), C(!1)), e = !1
                            };
                        k.on("mousedown", function() {
                            e = !0
                        }), k.on("focus mouseenter touchstart", s), t.element(n).on("resize", O)
                    }

                    function C(t) {
                        C.value = !!t, C.queued || (t ? (C.queued = !0, e(function() {
                            d.visible = C.value, C.queued = !1
                        }, d.delay)) : o.nextTick(function() {
                            d.visible = !1
                        }))
                    }

                    function w() {
                        return _.append(f), y("display", "none") ? (d.visible = !1, void f.detach()) : (A(), void t.forEach([f, T, S], function(e) {
                            c.addClass(e, "md-show")
                        }))
                    }

                    function x() {
                        var e = [];
                        t.forEach([f, T, S], function(t) {
                            t.parent() && t.hasClass("md-show") && e.push(c.removeClass(t, "md-show"))
                        }), l.all(e).then(function() {
                            d.visible || f.detach()
                        })
                    }

                    function A() {
                        function e() {
                            var e = "left" === N || "right" === N ? 2 * Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height / 2, 2)) : 2 * Math.sqrt(Math.pow(r.width / 2, 2) + Math.pow(r.height, 2)),
                                t = "left" === N ? {
                                    left: 100,
                                    top: 50
                                } : "right" === N ? {
                                    left: 0,
                                    top: 50
                                } : "top" === N ? {
                                    left: 50,
                                    top: 100
                                } : {
                                    left: 50,
                                    top: 0
                                };
                            T.css({
                                width: e + "px",
                                height: e + "px",
                                left: t.left + "%",
                                top: t.top + "%"
                            })
                        }

                        function t(e) {
                            var t = {
                                left: e.left,
                                top: e.top
                            };
                            return t.left = Math.min(t.left, _.prop("scrollWidth") - r.width - m), t.left = Math.max(t.left, m), t.top = Math.min(t.top, _.prop("scrollHeight") - r.height - m), t.top = Math.max(t.top, m), t
                        }

                        function n(e) {
                            return "left" === e ? {
                                left: i.left - r.width - m,
                                top: i.top + i.height / 2 - r.height / 2
                            } : "right" === e ? {
                                left: i.left + i.width + m,
                                top: i.top + i.height / 2 - r.height / 2
                            } : "top" === e ? {
                                left: i.left + i.width / 2 - r.width / 2,
                                top: i.top - r.height - m
                            } : {
                                left: i.left + i.width / 2 - r.width / 2,
                                top: i.top + i.height + m
                            }
                        }
                        var r = o.offsetRect(f, _),
                            i = o.offsetRect(k, _),
                            a = n(N);
                        N ? a = t(a) : a.top > f.prop("offsetParent").scrollHeight - r.height - m && (a = t(n("top"))), f.css({
                            top: a.top + "px",
                            left: a.left + "px"
                        }), e()
                    }
                    a(f);
                    var k = b(),
                        T = t.element(f[0].getElementsByClassName("md-background")[0]),
                        S = t.element(f[0].getElementsByClassName("md-content")[0]),
                        N = h.mdDirection,
                        D = E(),
                        _ = t.element(D || document.body),
                        O = r.throttle(function() {
                            d.visible && A()
                        });
                    p(), $(), M(), g(), v()
                }
                var u = 300,
                    m = 8;
                return {
                    restrict: "E",
                    transclude: !0,
                    priority: 210,
                    template: '<div class="md-background"></div><div class="md-content" ng-transclude></div>',
                    scope: {
                        visible: "=?mdVisible",
                        delay: "=?mdDelay",
                        autohide: "=?mdAutohide"
                    },
                    link: d
                }
            }
            t.module("material.components.tooltip", ["material.core"]).directive("mdTooltip", e), e.$inject = ["$timeout", "$window", "$$rAF", "$document", "$mdUtil", "$mdTheming", "$rootElement", "$animate", "$q"]
        }(),
        function() {
            function e() {
                return {
                    controller: r,
                    template: n,
                    compile: function(e, t) {
                        e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal") ? "md-orient-horizontal" : "md-orient-vertical")
                    }
                }
            }

            function n(e) {
                return '<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">' + e[0].innerHTML + "</div></div>"
            }

            function r(e, n, r, i, o) {
                this.$scope = r, this.$element = i, this.$attrs = o, this.size = 0, this.scrollSize = 0, this.scrollOffset = 0, this.horizontal = this.$attrs.hasOwnProperty("mdOrientHorizontal"), this.repeater = null, this.autoShrink = this.$attrs.hasOwnProperty("mdAutoShrink"), this.autoShrinkMin = parseInt(this.$attrs.mdAutoShrinkMin, 10) || 0, this.originalSize = null, this.offsetSize = parseInt(this.$attrs.mdOffsetSize, 10) || 0, this.$attrs.mdTopIndex ? (this.bindTopIndex = n(this.$attrs.mdTopIndex), this.topIndex = this.bindTopIndex(this.$scope), t.isDefined(this.topIndex) || (this.topIndex = 0, this.bindTopIndex.assign(this.$scope, 0)), this.$scope.$watch(this.bindTopIndex, t.bind(this, function(e) {
                    e !== this.topIndex && this.scrollToIndex(e)
                }))) : this.topIndex = 0, this.scroller = i[0].getElementsByClassName("md-virtual-repeat-scroller")[0], this.sizer = this.scroller.getElementsByClassName("md-virtual-repeat-sizer")[0], this.offsetter = this.scroller.getElementsByClassName("md-virtual-repeat-offsetter")[0], e(t.bind(this, this.updateSize)), o.ngHide && r.$watch(o.ngHide, t.bind(this, function(n) {
                    n || e(t.bind(this, this.updateSize))
                }))
            }

            function i(e) {
                return {
                    controller: o,
                    priority: 1e3,
                    require: ["mdVirtualRepeat", "^^mdVirtualRepeatContainer"],
                    restrict: "A",
                    terminal: !0,
                    transclude: "element",
                    compile: function(t, n) {
                        var r = n.mdVirtualRepeat,
                            i = r.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),
                            o = i[1],
                            a = e(i[2]),
                            s = n.mdExtraName && e(n.mdExtraName);
                        return function(e, t, n, r, i) {
                            r[0].link_(r[1], i, o, a, s)
                        }
                    }
                }
            }

            function o(e, n, r, i, o, a) {
                this.$scope = e, this.$element = n, this.$attrs = r, this.$browser = i, this.$document = o, this.$$rAF = a, this.onDemand = r.hasOwnProperty("mdOnDemand"), this.browserCheckUrlChange = i.$$checkUrlChange, this.newStartIndex = 0, this.newEndIndex = 0, this.newVisibleEnd = 0, this.startIndex = 0, this.endIndex = 0, this.itemSize = e.$eval(r.mdItemSize) || null, this.isFirstRender = !0, this.itemsLength = 0, this.unwatchItemSize_ = t.noop, this.blocks = {}, this.pooledBlocks = []
            }

            function a(e) {
                if (!t.isFunction(e.getItemAtIndex) || !t.isFunction(e.getLength)) throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");
                this.model = e
            }
            t.module("material.components.virtualRepeat", ["material.core"]).directive("mdVirtualRepeatContainer", e).directive("mdVirtualRepeat", i);
            var s = 1533917,
                c = 3;
            r.$inject = ["$$rAF", "$parse", "$scope", "$element", "$attrs"], r.prototype.register = function(e) {
                this.repeater = e, t.element(this.scroller).on("scroll wheel touchmove touchend", t.bind(this, this.handleScroll_))
            }, r.prototype.isHorizontal = function() {
                return this.horizontal
            }, r.prototype.getSize = function() {
                return this.size
            }, r.prototype.setSize_ = function(e) {
                this.size = e, this.$element[0].style[this.isHorizontal() ? "width" : "height"] = e + "px"
            }, r.prototype.updateSize = function() {
                this.originalSize || (this.size = this.isHorizontal() ? this.$element[0].clientWidth : this.$element[0].clientHeight, this.repeater && this.repeater.containerUpdated())
            }, r.prototype.getScrollSize = function() {
                return this.scrollSize
            }, r.prototype.sizeScroller_ = function(e) {
                var t = this.isHorizontal() ? "width" : "height",
                    n = this.isHorizontal() ? "height" : "width";
                if (s > e) this.sizer.style[t] = e + "px";
                else {
                    this.sizer.innerHTML = "", this.sizer.style[t] = "auto", this.sizer.style[n] = "auto";
                    var r = Math.floor(e / s),
                        i = document.createElement("div");
                    i.style[t] = s + "px", i.style[n] = "1px";
                    for (var o = 0; r > o; o++) this.sizer.appendChild(i.cloneNode(!1));
                    i.style[t] = e - r * s + "px", this.sizer.appendChild(i)
                }
            }, r.prototype.autoShrink_ = function(e) {
                var t = Math.max(e, this.autoShrinkMin * this.repeater.getItemSize());
                this.autoShrink && t !== this.size && (t < (this.originalSize || this.size) ? (this.originalSize || (this.originalSize = this.size), this.setSize_(t)) : this.originalSize && (this.setSize_(this.originalSize), this.originalSize = null))
            }, r.prototype.setScrollSize = function(e) {
                var t = e + this.offsetSize;
                this.scrollSize !== t && (this.sizeScroller_(t), this.autoShrink_(t), this.scrollSize = t)
            }, r.prototype.getScrollOffset = function() {
                return this.scrollOffset
            }, r.prototype.scrollTo = function(e) {
                this.scroller[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = e, this.handleScroll_()
            }, r.prototype.scrollToIndex = function(e) {
                var t = this.repeater.getItemSize(),
                    n = this.repeater.itemsLength;
                e > n && (e = n - 1), this.scrollTo(t * e)
            }, r.prototype.resetScroll = function() {
                this.scrollTo(0)
            }, r.prototype.handleScroll_ = function() {
                var e = this.isHorizontal() ? this.scroller.scrollLeft : this.scroller.scrollTop;
                if (e !== this.scrollOffset) {
                    var t = this.repeater.getItemSize();
                    if (t) {
                        var n = Math.max(0, Math.floor(e / t) - c),
                            r = this.isHorizontal() ? "translateX(" : "translateY(";
                        if (r += n * t + "px)", this.scrollOffset = e, this.offsetter.style.webkitTransform = r, this.offsetter.style.transform = r, this.bindTopIndex) {
                            var i = Math.floor(e / t);
                            i !== this.topIndex && i < this.repeater.itemsLength && (this.topIndex = i, this.bindTopIndex.assign(this.$scope, i), this.$scope.$root.$$phase || this.$scope.$digest())
                        }
                        this.repeater.containerUpdated()
                    }
                }
            }, i.$inject = ["$parse"], o.$inject = ["$scope", "$element", "$attrs", "$browser", "$document", "$$rAF"], o.Block, o.prototype.link_ = function(e, n, r, i, o) {
                this.container = e, this.transclude = n, this.repeatName = r, this.rawRepeatListExpression = i, this.extraName = o, this.sized = !1, this.repeatListExpression = t.bind(this, this.repeatListExpression_), this.container.register(this)
            }, o.prototype.readItemSize_ = function() {
                if (!this.itemSize) {
                    this.items = this.repeatListExpression(this.$scope), this.parentNode = this.$element[0].parentNode;
                    var e = this.getBlock_(0);
                    e.element[0].parentNode || this.parentNode.appendChild(e.element[0]), this.itemSize = e.element[0][this.container.isHorizontal() ? "offsetWidth" : "offsetHeight"] || null, this.blocks[0] = e, this.poolBlock_(0),
                        this.itemSize && this.containerUpdated()
                }
            }, o.prototype.repeatListExpression_ = function(e) {
                var t = this.rawRepeatListExpression(e);
                if (this.onDemand && t) {
                    var n = new a(t);
                    return n.$$includeIndexes(this.newStartIndex, this.newVisibleEnd), n
                }
                return t
            }, o.prototype.containerUpdated = function() {
                return this.itemSize ? (this.sized || (this.items = this.repeatListExpression(this.$scope)), this.sized || (this.unwatchItemSize_(), this.sized = !0, this.$scope.$watchCollection(this.repeatListExpression, t.bind(this, this.virtualRepeatUpdate_))), this.updateIndexes_(), void((this.newStartIndex !== this.startIndex || this.newEndIndex !== this.endIndex || this.container.getScrollOffset() > this.container.getScrollSize()) && (this.items instanceof a && this.items.$$includeIndexes(this.newStartIndex, this.newEndIndex), this.virtualRepeatUpdate_(this.items, this.items)))) : (this.unwatchItemSize_ = this.$scope.$watchCollection(this.repeatListExpression, t.bind(this, function(e) {
                    e && e.length && this.$$rAF(t.bind(this, this.readItemSize_))
                })), void(this.$scope.$root.$$phase || this.$scope.$digest()))
            }, o.prototype.getItemSize = function() {
                return this.itemSize
            }, o.prototype.virtualRepeatUpdate_ = function(e, n) {
                var r = e && e.length || 0,
                    i = !1;
                if (this.items && r < this.items.length && 0 !== this.container.getScrollOffset()) return this.items = e, void this.container.resetScroll();
                if (r !== this.itemsLength && (i = !0, this.itemsLength = r), this.items = e, (e !== n || i) && this.updateIndexes_(), this.parentNode = this.$element[0].parentNode, i && this.container.setScrollSize(r * this.itemSize), this.isFirstRender) {
                    this.isFirstRender = !1;
                    var o = this.$attrs.mdStartIndex ? this.$scope.$eval(this.$attrs.mdStartIndex) : this.container.topIndex;
                    this.container.scrollToIndex(o)
                }
                Object.keys(this.blocks).forEach(function(e) {
                    var t = parseInt(e, 10);
                    (t < this.newStartIndex || t >= this.newEndIndex) && this.poolBlock_(t)
                }, this), this.$browser.$$checkUrlChange = t.noop;
                var a, s, c = [],
                    l = [];
                for (a = this.newStartIndex; a < this.newEndIndex && null == this.blocks[a]; a++) s = this.getBlock_(a), this.updateBlock_(s, a), c.push(s);
                for (; null != this.blocks[a]; a++) this.updateBlock_(this.blocks[a], a);
                for (var d = a - 1; a < this.newEndIndex; a++) s = this.getBlock_(a), this.updateBlock_(s, a), l.push(s);
                c.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(c), this.$element[0].nextSibling), l.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(l), this.blocks[d] && this.blocks[d].element[0].nextSibling), this.$browser.$$checkUrlChange = this.browserCheckUrlChange, this.startIndex = this.newStartIndex, this.endIndex = this.newEndIndex
            }, o.prototype.getBlock_ = function(e) {
                if (this.pooledBlocks.length) return this.pooledBlocks.pop();
                var n;
                return this.transclude(t.bind(this, function(t, r) {
                    n = {
                        element: t,
                        "new": !0,
                        scope: r
                    }, this.updateScope_(r, e), this.parentNode.appendChild(t[0])
                })), n
            }, o.prototype.updateBlock_ = function(e, t) {
                this.blocks[t] = e, (e["new"] || e.scope.$index !== t || e.scope[this.repeatName] !== this.items[t]) && (e["new"] = !1, this.updateScope_(e.scope, t), this.$scope.$root.$$phase || e.scope.$digest())
            }, o.prototype.updateScope_ = function(e, t) {
                e.$index = t, e[this.repeatName] = this.items && this.items[t], this.extraName && (e[this.extraName(this.$scope)] = this.items[t])
            }, o.prototype.poolBlock_ = function(e) {
                this.pooledBlocks.push(this.blocks[e]), this.parentNode.removeChild(this.blocks[e].element[0]), delete this.blocks[e]
            }, o.prototype.domFragmentFromBlocks_ = function(e) {
                var t = this.$document[0].createDocumentFragment();
                return e.forEach(function(e) {
                    t.appendChild(e.element[0])
                }), t
            }, o.prototype.updateIndexes_ = function() {
                var e = this.items ? this.items.length : 0,
                    t = Math.ceil(this.container.getSize() / this.itemSize);
                this.newStartIndex = Math.max(0, Math.min(e - t, Math.floor(this.container.getScrollOffset() / this.itemSize))), this.newVisibleEnd = this.newStartIndex + t + c, this.newEndIndex = Math.min(e, this.newVisibleEnd), this.newStartIndex = Math.max(0, this.newStartIndex - c)
            }, a.prototype.$$includeIndexes = function(e, t) {
                for (var n = e; t > n; n++) this.hasOwnProperty(n) || (this[n] = this.model.getItemAtIndex(n));
                this.length = this.model.getLength()
            }
        }(),
        function() {
            t.module("material.components.whiteframe", [])
        }(),
        function() {
            function e(e, r, a, s, c, l, d, u, m, f) {
                function h() {
                    a.initOptionalProperties(e, m, {
                        searchText: null,
                        selectedItem: null
                    }), c(r), $(), a.nextTick(function() {
                        E(), g(), v(), r.on("focus", v)
                    })
                }

                function p() {
                    function t() {
                        var e = de.scrollContainer.getBoundingClientRect(),
                            t = {};
                        e.right > s.right - o && (t.left = n.right - e.width + "px"), de.$.scrollContainer.css(t)
                    }
                    if (!de) return a.nextTick(p, !1, e);
                    var n = de.wrap.getBoundingClientRect(),
                        r = de.snap.getBoundingClientRect(),
                        s = de.root.getBoundingClientRect(),
                        c = r.bottom - s.top,
                        l = s.bottom - r.top,
                        d = n.left - s.left,
                        u = n.width,
                        m = {
                            left: d + "px",
                            minWidth: u + "px",
                            maxWidth: Math.max(n.right - s.left, s.right - n.left) - o + "px"
                        };
                    c > l && s.height - n.bottom - o < i ? (m.top = "auto", m.bottom = l + "px", m.maxHeight = Math.min(i, n.top - s.top - o) + "px") : (m.top = c + "px", m.bottom = "auto", m.maxHeight = Math.min(i, s.bottom - n.bottom - o) + "px"), de.$.scrollContainer.css(m), a.nextTick(t, !1)
                }

                function g() {
                    de.$.root.length && (c(de.$.scrollContainer), de.$.scrollContainer.detach(), de.$.root.append(de.$.scrollContainer), d.pin && d.pin(de.$.scrollContainer, u))
                }

                function v() {
                    e.autofocus && de.input.focus()
                }

                function $() {
                    var n = parseInt(e.delay, 10) || 0;
                    m.$observe("disabled", function(e) {
                        se.isDisabled = e
                    }), m.$observe("required", function(e) {
                        se.isRequired = null !== e
                    }), e.$watch("searchText", n ? a.debounce(O, n) : O), e.$watch("selectedItem", k), t.element(l).on("resize", p), e.$on("$destroy", b)
                }

                function b() {
                    if (t.element(l).off("resize", p), de) {
                        var e = "ul scroller scrollContainer input".split(" ");
                        t.forEach(e, function(e) {
                            de.$[e].remove()
                        })
                    }
                }

                function E() {
                    de = {
                        main: r[0],
                        scrollContainer: r[0].getElementsByClassName("md-virtual-repeat-container")[0],
                        scroller: r[0].getElementsByClassName("md-virtual-repeat-scroller")[0],
                        ul: r.find("ul")[0],
                        input: r.find("input")[0],
                        wrap: r.find("md-autocomplete-wrap")[0],
                        root: document.body
                    }, de.li = de.ul.getElementsByTagName("li"), de.snap = y(), de.$ = M(de)
                }

                function y() {
                    for (var e = r; e.length; e = e.parent())
                        if (t.isDefined(e.attr("md-autocomplete-snap"))) return e[0];
                    return de.wrap
                }

                function M(e) {
                    var n = {};
                    for (var r in e) e.hasOwnProperty(r) && (n[r] = t.element(e[r]));
                    return n
                }

                function C(t, n) {
                    !t && n ? (p(), de && a.nextTick(function() {
                        a.disableScrollAround(de.ul)
                    }, !1, e)) : t && !n && a.nextTick(function() {
                        a.enableScrolling()
                    }, !1, e)
                }

                function w() {
                    me = !0
                }

                function x() {
                    me = !1, se.hidden = B()
                }

                function A() {
                    de.input.focus()
                }

                function k(t, n) {
                    t && V(t).then(function(r) {
                        e.searchText = r, N(t, n)
                    }), t !== n && T()
                }

                function T() {
                    t.isFunction(e.itemChange) && e.itemChange(j(e.selectedItem))
                }

                function S() {
                    t.isFunction(e.textChange) && e.textChange()
                }

                function N(e, t) {
                    fe.forEach(function(n) {
                        n(e, t)
                    })
                }

                function D(e) {
                    -1 == fe.indexOf(e) && fe.push(e)
                }

                function _(e) {
                    var t = fe.indexOf(e); - 1 != t && fe.splice(t, 1)
                }

                function O(t, n) {
                    se.index = F(), t !== n && V(e.selectedItem).then(function(r) {
                        t !== r && (e.selectedItem = null, t !== n && S(), G() ? oe() : (se.matches = [], q(!1), ee()))
                    })
                }

                function H() {
                    me || (he = !1, se.hidden = B())
                }

                function I(e) {
                    e && (me = !1), de.input.blur()
                }

                function R() {
                    he = !0, t.isString(e.searchText) || (e.searchText = ""), se.hidden = B(), se.hidden || oe()
                }

                function P(e) {
                    switch (e.keyCode) {
                        case s.KEY_CODE.DOWN_ARROW:
                            if (se.loading) return;
                            e.stopPropagation(), e.preventDefault(), se.index = Math.min(se.index + 1, se.matches.length - 1), ne(), ee();
                            break;
                        case s.KEY_CODE.UP_ARROW:
                            if (se.loading) return;
                            e.stopPropagation(), e.preventDefault(), se.index = se.index < 0 ? se.matches.length - 1 : Math.max(0, se.index - 1), ne(), ee();
                            break;
                        case s.KEY_CODE.TAB:
                        case s.KEY_CODE.ENTER:
                            if (se.hidden || se.loading || se.index < 0 || se.matches.length < 1) return;
                            e.stopPropagation(), e.preventDefault(), J(se.index);
                            break;
                        case s.KEY_CODE.ESCAPE:
                            e.stopPropagation(), e.preventDefault(), Z(), I(!0)
                    }
                }

                function L() {
                    return t.isNumber(e.minLength) ? e.minLength : 1
                }

                function V(t) {
                    function n(t) {
                        return t && e.itemText ? e.itemText(j(t)) : null
                    }
                    return f.when(n(t) || t)
                }

                function j(e) {
                    if (!e) return n;
                    var t = {};
                    return se.itemName && (t[se.itemName] = e), t
                }

                function F() {
                    return e.autoselect ? 0 : -1
                }

                function q(e) {
                    se.loading != e && (se.loading = e), se.hidden = B()
                }

                function B() {
                    return se.loading && !z() || W() || !he ? !0 : !U()
                }

                function U() {
                    return G() && z() || ie()
                }

                function z() {
                    return se.matches.length ? !0 : !1
                }

                function W() {
                    return se.scope.selectedItem ? !0 : !1
                }

                function Y() {
                    return se.loading && !W()
                }

                function K() {
                    return V(se.matches[se.index])
                }

                function G() {
                    return (e.searchText || "").length >= L()
                }

                function X(e, t, n) {
                    Object.defineProperty(se, e, {
                        get: function() {
                            return n
                        },
                        set: function(e) {
                            var r = n;
                            n = e, t(e, r)
                        }
                    })
                }

                function J(t) {
                    a.nextTick(function() {
                        V(se.matches[t]).then(function(e) {
                            var t = de.$.input.controller("ngModel");
                            t.$setViewValue(e), t.$render()
                        })["finally"](function() {
                            e.selectedItem = se.matches[t], q(!1)
                        })
                    }, !1)
                }

                function Z() {
                    q(!0), se.index = 0, se.matches = [], e.searchText = "", J(-1);
                    var t = document.createEvent("CustomEvent");
                    t.initCustomEvent("input", !0, !0, {
                        value: e.searchText
                    }), de.input.dispatchEvent(t), de.input.focus()
                }

                function Q(n) {
                    function r(t) {
                        ue[o] = t, (n || "") === (e.searchText || "") && (se.matches = t, se.hidden = B(), e.selectOnMatch && ae(), ee(), p())
                    }
                    var i = e.$parent.$eval(le),
                        o = n.toLowerCase();
                    t.isArray(i) ? r(i) : i && (q(!0), a.nextTick(function() {
                        i.success && i.success(r), i.then && i.then(r), i["finally"] && i["finally"](function() {
                            q(!1)
                        })
                    }, !0, e))
                }

                function ee() {
                    K().then(function(e) {
                        se.messages = [te(), e]
                    })
                }

                function te() {
                    if (pe === se.matches.length) return "";
                    switch (pe = se.matches.length, se.matches.length) {
                        case 0:
                            return "There are no matches available.";
                        case 1:
                            return "There is 1 match available.";
                        default:
                            return "There are " + se.matches.length + " matches available."
                    }
                }

                function ne() {
                    if (de.li[0]) {
                        var e = de.li[0].offsetHeight,
                            t = e * se.index,
                            n = t + e,
                            r = de.scroller.clientHeight,
                            i = de.scroller.scrollTop;
                        i > t ? re(t) : n > i + r && re(n - r)
                    }
                }

                function re(e) {
                    de.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)
                }

                function ie() {
                    var e = (se.scope.searchText || "").length;
                    return se.hasNotFound && !z() && !se.loading && e >= L() && he && !W()
                }

                function oe() {
                    var t = e.searchText,
                        n = t.toLowerCase();
                    !e.noCache && ue[n] ? (se.matches = ue[n], ee()) : Q(t), se.hidden = B()
                }

                function ae() {
                    var t = e.searchText,
                        n = se.matches,
                        r = n[0];
                    1 === n.length && V(r).then(function(e) {
                        t == e && J(0)
                    })
                }
                var se = this,
                    ce = e.itemsExpr.split(/ in /i),
                    le = ce[1],
                    de = null,
                    ue = {},
                    me = !1,
                    fe = [],
                    he = !1,
                    pe = 0;
                return X("hidden", C, !0), se.scope = e, se.parent = e.$parent, se.itemName = ce[0], se.matches = [], se.loading = !1, se.hidden = !0, se.index = null, se.messages = [], se.id = a.nextUid(), se.isDisabled = null, se.isRequired = null, se.hasNotFound = !1, se.keydown = P, se.blur = H, se.focus = R, se.clear = Z, se.select = J, se.listEnter = w, se.listLeave = x, se.mouseUp = A, se.getCurrentDisplayValue = K, se.registerSelectedItemWatcher = D, se.unregisterSelectedItemWatcher = _, se.notFoundVisible = ie, se.loadingIsVisible = Y, h()
            }
            t.module("material.components.autocomplete").controller("MdAutocompleteCtrl", e);
            var r = 41,
                i = 5.5 * r,
                o = 8;
            e.$inject = ["$scope", "$element", "$mdUtil", "$mdConstant", "$mdTheming", "$window", "$animate", "$rootElement", "$attrs", "$q"]
        }(),
        function() {
            function e() {
                var e = !1;
                return {
                    controller: "MdAutocompleteCtrl",
                    controllerAs: "$mdAutocompleteCtrl",
                    scope: {
                        inputName: "@mdInputName",
                        inputMinlength: "@mdInputMinlength",
                        inputMaxlength: "@mdInputMaxlength",
                        searchText: "=?mdSearchText",
                        selectedItem: "=?mdSelectedItem",
                        itemsExpr: "@mdItems",
                        itemText: "&mdItemText",
                        placeholder: "@placeholder",
                        noCache: "=?mdNoCache",
                        selectOnMatch: "=?mdSelectOnMatch",
                        itemChange: "&?mdSelectedItemChange",
                        textChange: "&?mdSearchTextChange",
                        minLength: "=?mdMinLength",
                        delay: "=?mdDelay",
                        autofocus: "=?mdAutofocus",
                        floatingLabel: "@?mdFloatingLabel",
                        autoselect: "=?mdAutoselect",
                        menuClass: "@?mdMenuClass",
                        inputId: "@?mdInputId"
                    },
                    link: function(t, n, r, i) {
                        i.hasNotFound = e
                    },
                    template: function(t, n) {
                        function r() {
                            var e = t.find("md-item-template").detach(),
                                n = e.length ? e.html() : t.html();
                            return e.length || t.empty(), "<md-autocomplete-parent-scope md-autocomplete-replace>" + n + "</md-autocomplete-parent-scope>"
                        }

                        function i() {
                            var e = t.find("md-not-found").detach(),
                                n = e.length ? e.html() : "";
                            return n ? '<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>' + n + "</li>" : ""
                        }

                        function o() {
                            return n.mdFloatingLabel ? '            <md-input-container flex ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  ' + (null != l ? 'tabindex="' + l + '"' : "") + '                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  ng-focus="$mdAutocompleteCtrl.focus()"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>' + c + "</div>            </md-input-container>" : '            <input flex type="search"                ' + (null != l ? 'tabindex="' + l + '"' : "") + '                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus()"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear()">              <md-icon md-svg-icon="md-close"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                '
                        }
                        var a = i(),
                            s = r(),
                            c = t.html(),
                            l = n.tabindex;
                        return a && (e = !0), n.hasOwnProperty("tabindex") && t.attr("tabindex", "-1"), '        <md-autocomplete-wrap            layout="row"            ng-class="{ \'md-whiteframe-z1\': !floatingLabel, \'md-menu-showing\': !$mdAutocompleteCtrl.hidden }"            role="listbox">          ' + o() + '          <md-progress-linear              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}"                ng-mouseenter="$mdAutocompleteCtrl.listEnter()"                ng-mouseleave="$mdAutocompleteCtrl.listLeave()"                ng-mouseup="$mdAutocompleteCtrl.mouseUp()">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  ' + s + "                  </li>" + a + '            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>'
                    }
                }
            }
            t.module("material.components.autocomplete").directive("mdAutocomplete", e)
        }(),
        function() {
            function e(e, t) {
                function n(n, r, i) {
                    function o(e, r) {
                        s[r] = n[e], n.$watch(e, function(e) {
                            t.nextTick(function() {
                                s[r] = e
                            })
                        })
                    }
                    var a = n.$mdAutocompleteCtrl,
                        s = a.parent.$new(),
                        c = a.itemName;
                    o("$index", "$index"), o("item", c), e(r.contents())(s), i.hasOwnProperty("mdAutocompleteReplace") && (r.after(r.contents()), r.remove())
                }
                return {
                    restrict: "AE",
                    link: n,
                    terminal: !0
                }
            }
            t.module("material.components.autocomplete").directive("mdAutocompleteParentScope", e), e.$inject = ["$compile", "$mdUtil"]
        }(),
        function() {
            function e(e, n, r) {
                function i(i, o) {
                    var s = null,
                        c = null,
                        l = r.mdHighlightFlags || "",
                        d = e.$watch(function(e) {
                            return {
                                term: i(e),
                                unsafeText: o(e)
                            }
                        }, function(e, r) {
                            (null === s || e.unsafeText !== r.unsafeText) && (s = t.element("<div>").text(e.unsafeText).html()), (null === c || e.term !== r.term) && (c = a(e.term, l)), n.html(s.replace(c, '<span class="highlight">$&</span>'))
                        }, !0);
                    n.on("$destroy", function() {
                        d()
                    })
                }

                function o(e) {
                    return e && e.replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g, "\\$&")
                }

                function a(e, t) {
                    var n = "";
                    return t.indexOf("^") >= 1 && (n += "^"), n += e, t.indexOf("$") >= 1 && (n += "$"), new RegExp(o(n), t.replace(/[\$\^]/g, ""))
                }
                this.init = i
            }
            t.module("material.components.autocomplete").controller("MdHighlightCtrl", e), e.$inject = ["$scope", "$element", "$attrs"]
        }(),
        function() {
            function e(e, t) {
                return {
                    terminal: !0,
                    controller: "MdHighlightCtrl",
                    compile: function(n, r) {
                        var i = t(r.mdHighlightText),
                            o = e(n.html());
                        return function(e, t, n, r) {
                            r.init(i, o)
                        }
                    }
                }
            }
            t.module("material.components.autocomplete").directive("mdHighlightText", e), e.$inject = ["$interpolate", "$parse"]
        }(),
        function() {
            function e(e, r) {
                function i(n, i) {
                    return n.append(r.processTemplate(o)),
                        function(n, r, i, o) {
                            r.addClass("md-chip"), e(r), o && t.element(r[0].querySelector(".md-chip-content")).on("blur", function() {
                                o.selectedChip = -1
                            })
                        }
                }
                var o = r.processTemplate(n);
                return {
                    restrict: "E",
                    require: "^?mdChips",
                    compile: i
                }
            }
            t.module("material.components.chips").directive("mdChip", e);
            var n = '    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';
            e.$inject = ["$mdTheming", "$mdUtil"]
        }(),
        function() {
            function e(e) {
                function t(t, n, r, i) {
                    n.on("click", function(e) {
                        t.$apply(function() {
                            i.removeChip(t.$$replacedScope.$index)
                        })
                    }), e(function() {
                        n.attr({
                            tabindex: -1,
                            ariaHidden: !0
                        }), n.find("button").attr("tabindex", "-1")
                    })
                }
                return {
                    restrict: "A",
                    require: "^mdChips",
                    scope: !1,
                    link: t
                }
            }
            t.module("material.components.chips").directive("mdChipRemove", e), e.$inject = ["$timeout"]
        }(),
        function() {
            function e(e) {
                function t(t, n, r) {
                    var i = t.$parent.$mdChipsCtrl,
                        o = i.parent.$new(!1, i.parent);
                    o.$$replacedScope = t, o.$chip = t.$chip, o.$index = t.$index, o.$mdChipsCtrl = i;
                    var a = i.$scope.$eval(r.mdChipTransclude);
                    n.html(a), e(n.contents())(o)
                }
                return {
                    restrict: "EA",
                    terminal: !0,
                    link: t,
                    scope: !1
                }
            }
            t.module("material.components.chips").directive("mdChipTransclude", e), e.$inject = ["$compile"]
        }(),
        function() {
            function e(e, t, n, r, i) {
                this.$timeout = i, this.$mdConstant = t, this.$scope = e, this.parent = e.$parent, this.$log = n, this.$element = r, this.ngModelCtrl = null, this.userInputNgModelCtrl = null, this.userInputElement = null, this.items = [], this.selectedChip = -1, this.hasAutocomplete = !1, this.deleteHint = "Press delete to remove this chip.", this.deleteButtonLabel = "Remove", this.chipBuffer = "", this.useOnAppend = !1, this.useOnSelect = !1
            }
            t.module("material.components.chips").controller("MdChipsCtrl", e), e.$inject = ["$scope", "$mdConstant", "$log", "$element", "$timeout"], e.prototype.inputKeydown = function(e) {
                var t = this.getChipBuffer();
                switch (e.keyCode) {
                    case this.$mdConstant.KEY_CODE.ENTER:
                        if (this.hasAutocomplete && this.requireMatch || !t) break;
                        e.preventDefault(), this.appendChip(t), this.resetChipBuffer();
                        break;
                    case this.$mdConstant.KEY_CODE.BACKSPACE:
                        if (t) break;
                        e.preventDefault(), e.stopPropagation(), this.items.length && this.selectAndFocusChipSafe(this.items.length - 1)
                }
            }, e.prototype.chipKeydown = function(e) {
                if (!this.getChipBuffer()) switch (e.keyCode) {
                    case this.$mdConstant.KEY_CODE.BACKSPACE:
                    case this.$mdConstant.KEY_CODE.DELETE:
                        if (this.selectedChip < 0) return;
                        e.preventDefault(), this.removeAndSelectAdjacentChip(this.selectedChip);
                        break;
                    case this.$mdConstant.KEY_CODE.LEFT_ARROW:
                        e.preventDefault(), this.selectedChip < 0 && (this.selectedChip = this.items.length), this.items.length && this.selectAndFocusChipSafe(this.selectedChip - 1);
                        break;
                    case this.$mdConstant.KEY_CODE.RIGHT_ARROW:
                        e.preventDefault(), this.selectAndFocusChipSafe(this.selectedChip + 1);
                        break;
                    case this.$mdConstant.KEY_CODE.ESCAPE:
                    case this.$mdConstant.KEY_CODE.TAB:
                        if (this.selectedChip < 0) return;
                        e.preventDefault(), this.onFocus()
                }
            }, e.prototype.getPlaceholder = function() {
                var e = this.items.length && ("" == this.secondaryPlaceholder || this.secondaryPlaceholder);
                return e ? this.placeholder : this.secondaryPlaceholder
            }, e.prototype.removeAndSelectAdjacentChip = function(e) {
                var n = this.getAdjacentChipIndex(e);
                this.removeChip(e), this.$timeout(t.bind(this, function() {
                    this.selectAndFocusChipSafe(n)
                }))
            }, e.prototype.resetSelectedChip = function() {
                this.selectedChip = -1
            }, e.prototype.getAdjacentChipIndex = function(e) {
                var t = this.items.length - 1;
                return 0 == t ? -1 : e == t ? e - 1 : e
            }, e.prototype.appendChip = function(e) {
                this.useOnAppend && this.onAppend && (e = this.onAppend({
                    $chip: e
                })), this.items.indexOf(e) + 1 || this.items.push(e)
            }, e.prototype.useOnAppendExpression = function() {
                this.useOnAppend = !0
            }, e.prototype.useOnRemoveExpression = function() {
                this.useOnRemove = !0
            }, e.prototype.useOnSelectExpression = function() {
                this.useOnSelect = !0
            }, e.prototype.getChipBuffer = function() {
                return this.userInputElement ? this.userInputNgModelCtrl ? this.userInputNgModelCtrl.$viewValue : this.userInputElement[0].value : this.chipBuffer
            }, e.prototype.resetChipBuffer = function() {
                this.userInputElement ? this.userInputNgModelCtrl ? (this.userInputNgModelCtrl.$setViewValue(""), this.userInputNgModelCtrl.$render()) : this.userInputElement[0].value = "" : this.chipBuffer = ""
            }, e.prototype.removeChip = function(e) {
                var t = this.items.splice(e, 1);
                t && t.length && this.useOnRemove && this.onRemove && this.onRemove({
                    $chip: t[0],
                    $index: e
                })
            }, e.prototype.removeChipAndFocusInput = function(e) {
                this.removeChip(e), this.onFocus()
            }, e.prototype.selectAndFocusChipSafe = function(e) {
                return this.items.length ? e === this.items.length ? this.onFocus() : (e = Math.max(e, 0), e = Math.min(e, this.items.length - 1), this.selectChip(e), void this.focusChip(e)) : (this.selectChip(-1), void this.onFocus())
            }, e.prototype.selectChip = function(e) {
                e >= -1 && e <= this.items.length ? (this.selectedChip = e, this.useOnSelect && this.onSelect && this.onSelect({
                    $chip: this.items[this.selectedChip]
                })) : this.$log.warn("Selected Chip index out of bounds; ignoring.")
            }, e.prototype.selectAndFocusChip = function(e) {
                this.selectChip(e), -1 != e && this.focusChip(e)
            }, e.prototype.focusChip = function(e) {
                this.$element[0].querySelector('md-chip[index="' + e + '"] .md-chip-content').focus()
            }, e.prototype.configureNgModel = function(e) {
                this.ngModelCtrl = e;
                var t = this;
                e.$render = function() {
                    t.items = t.ngModelCtrl.$viewValue
                }
            }, e.prototype.onFocus = function() {
                var e = this.$element[0].querySelector("input");
                e && e.focus(), this.resetSelectedChip()
            }, e.prototype.onInputFocus = function() {
                this.inputHasFocus = !0, this.resetSelectedChip()
            }, e.prototype.onInputBlur = function() {
                this.inputHasFocus = !1
            }, e.prototype.configureUserInput = function(e) {
                this.userInputElement = e;
                var n = e.controller("ngModel");
                n != this.ngModelCtrl && (this.userInputNgModelCtrl = n);
                var r = this.$scope,
                    i = this,
                    o = function(e, n) {
                        r.$evalAsync(t.bind(i, n, e))
                    };
                e.attr({
                    tabindex: 0
                }).on("keydown", function(e) {
                    o(e, i.inputKeydown)
                }).on("focus", function(e) {
                    o(e, i.onInputFocus)
                }).on("blur", function(e) {
                    o(e, i.onInputBlur)
                })
            }, e.prototype.configureAutocomplete = function(e) {
                e && (this.hasAutocomplete = !0, e.registerSelectedItemWatcher(t.bind(this, function(e) {
                    e && (this.appendChip(e), this.resetChipBuffer())
                })), this.$element.find("input").on("focus", t.bind(this, this.onInputFocus)).on("blur", t.bind(this, this.onInputBlur)))
            }, e.prototype.hasFocus = function() {
                return this.inputHasFocus || this.selectedChip >= 0
            }
        }(),
        function() {
            function e(e, t, a, s, c) {
                function l(n, r) {
                    function i(e) {
                        if (r.ngModel) {
                            var t = o[0].querySelector(e);
                            return t && t.outerHTML
                        }
                    }
                    var o = r.$mdUserTemplate;
                    r.$mdUserTemplate = null;
                    var l = i("md-chips>*[md-chip-remove]") || u.remove,
                        d = i("md-chips>md-chip-template") || u["default"],
                        m = i("md-chips>md-autocomplete") || i("md-chips>input") || u.input,
                        f = o.find("md-chip");
                    return o[0].querySelector("md-chip-template>*[md-chip-remove]") && s.warn("invalid placement of md-chip-remove within md-chip-template."),
                        function(n, i, o, s) {
                            t.initOptionalProperties(n, r), e(i);
                            var h = s[0];
                            if (h.chipContentsTemplate = d, h.chipRemoveTemplate = l, h.chipInputTemplate = m, i.attr({
                                    ariaHidden: !0,
                                    tabindex: -1
                                }).on("focus", function() {
                                    h.onFocus()
                                }), r.ngModel && (h.configureNgModel(i.controller("ngModel")), o.mdOnAppend && h.useOnAppendExpression(), o.mdOnRemove && h.useOnRemoveExpression(), o.mdOnSelect && h.useOnSelectExpression(), m != u.input && n.$watch("$mdChipsCtrl.readonly", function(e) {
                                    e || t.nextTick(function() {
                                        0 === m.indexOf("<md-autocomplete") && h.configureAutocomplete(i.find("md-autocomplete").controller("mdAutocomplete")), h.configureUserInput(i.find("input"))
                                    })
                                })), f.length > 0) {
                                var p = a(f.clone())(n.$parent);
                                c(function() {
                                    i.find("md-chips-wrap").prepend(p)
                                })
                            }
                        }
                }

                function d() {
                    return {
                        chips: t.processTemplate(n),
                        input: t.processTemplate(r),
                        "default": t.processTemplate(i),
                        remove: t.processTemplate(o)
                    }
                }
                var u = d();
                return {
                    template: function(e, t) {
                        return t.$mdUserTemplate = e.clone(), u.chips
                    },
                    require: ["mdChips"],
                    restrict: "E",
                    controller: "MdChipsCtrl",
                    controllerAs: "$mdChipsCtrl",
                    bindToController: !0,
                    compile: l,
                    scope: {
                        readonly: "=readonly",
                        placeholder: "@",
                        secondaryPlaceholder: "@",
                        onAppend: "&mdOnAppend",
                        onRemove: "&mdOnRemove",
                        onSelect: "&mdOnSelect",
                        deleteHint: "@",
                        deleteButtonLabel: "@",
                        requireMatch: "=?mdRequireMatch"
                    }
                }
            }
            t.module("material.components.chips").directive("mdChips", e);
            var n = '      <md-chips-wrap          ng-if="!$mdChipsCtrl.readonly || $mdChipsCtrl.items.length > 0"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(), \'md-readonly\': !$mdChipsCtrl.ngModelCtrl }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="!$mdChipsCtrl.readonly"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl"            class="md-chip-input-container"            md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',
                r = '        <input            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',
                i = "      <span>{{$chip}}</span>",
                o = '      <button          class="md-chip-remove"          ng-if="!$mdChipsCtrl.readonly"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-icon="md-close"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';
            e.$inject = ["$mdTheming", "$mdUtil", "$compile", "$log", "$timeout"]
        }(),
        function() {
            function e() {
                this.selectedItem = null, this.searchText = ""
            }
            t.module("material.components.chips").controller("MdContactChipsCtrl", e), e.prototype.queryContact = function(e) {
                var n = this.contactQuery({
                    $query: e
                });
                return this.filterSelected ? n.filter(t.bind(this, this.filterSelectedContacts)) : n
            }, e.prototype.itemName = function(e) {
                return e[this.contactName]
            }, e.prototype.filterSelectedContacts = function(e) {
                return -1 == this.contacts.indexOf(e)
            }
        }(),
        function() {
            function e(e, t) {
                function r(n, r) {
                    return function(n, i, o, a) {
                        t.initOptionalProperties(n, r), e(i), i.attr("tabindex", "-1")
                    }
                }
                return {
                    template: function(e, t) {
                        return n
                    },
                    restrict: "E",
                    controller: "MdContactChipsCtrl",
                    controllerAs: "$mdContactChipsCtrl",
                    bindToController: !0,
                    compile: r,
                    scope: {
                        contactQuery: "&mdContacts",
                        placeholder: "@",
                        secondaryPlaceholder: "@",
                        contactName: "@mdContactName",
                        contactImage: "@mdContactImage",
                        contactEmail: "@mdContactEmail",
                        contacts: "=ngModel",
                        requireMatch: "=?mdRequireMatch",
                        highlightFlags: "@?mdHighlightFlags"
                    }
                }
            }
            t.module("material.components.chips").directive("mdContactChips", e);
            var n = '      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';
            e.$inject = ["$mdTheming", "$mdUtil"]
        }(),
        function() {
            function e(e, t, n) {
                function r(r, i, o) {
                    function a() {
                        var e = i.parent();
                        return e.attr("aria-label") || e.text() ? !0 : e.parent().attr("aria-label") || e.parent().text() ? !0 : !1
                    }

                    function s() {
                        r.svgIcon || r.svgSrc || (r.fontIcon && i.addClass("md-font " + r.fontIcon), i.addClass(e.fontSet(r.fontSet)))
                    }
                    t(i), s();
                    var c = o.alt || r.fontIcon || r.svgIcon || i.text(),
                        l = o.$normalize(o.$attr.mdSvgIcon || o.$attr.mdSvgSrc || "");
                    o["aria-label"] || ("" == c || a() ? i.text() || n.expect(i, "aria-hidden", "true") : (n.expect(i, "aria-label", c), n.expect(i, "role", "img"))), l && o.$observe(l, function(t) {
                        i.empty(), t && e(t).then(function(e) {
                            i.append(e)
                        })
                    })
                }
                return {
                    scope: {
                        fontSet: "@mdFontSet",
                        fontIcon: "@mdFontIcon",
                        svgIcon: "@mdSvgIcon",
                        svgSrc: "@mdSvgSrc"
                    },
                    restrict: "E",
                    link: r
                }
            }
            t.module("material.components.icon").directive("mdIcon", ["$mdIcon", "$mdTheming", "$mdAria", e])
        }(),
        function() {
            function e() {}

            function n(e, t) {
                this.url = e, this.viewBoxSize = t || i.defaultViewBoxSize
            }

            function r(e, n, r, i, o) {
                function a(t) {
                    if (t = t || "", v[t]) return r.when(v[t].clone());
                    if ($.test(t)) return u(t).then(c(t)); - 1 == t.indexOf(":") && (t = "$default:" + t);
                    var n = e[t] ? l : d;
                    return n(t).then(c(t))
                }

                function s(n) {
                    var r = t.isUndefined(n) || !(n && n.length);
                    if (r) return e.defaultFontSet;
                    var i = n;
                    return t.forEach(e.fontSets, function(e) {
                        e.alias == n && (i = e.fontSet || i);
                    }), i
                }

                function c(t) {
                    return function(n) {
                        return v[t] = f(n) ? n : new h(n, e[t]), v[t].clone()
                    }
                }

                function l(t) {
                    var n = e[t];
                    return u(n.url).then(function(e) {
                        return new h(e, n)
                    })
                }

                function d(t) {
                    function n(e) {
                        var n = t.slice(t.lastIndexOf(":") + 1),
                            r = e.querySelector("#" + n);
                        return r ? new h(r, s) : o(t)
                    }

                    function o(e) {
                        var t = "icon " + e + " not found";
                        return i.warn(t), r.reject(t || e)
                    }
                    var a = t.substring(0, t.lastIndexOf(":")) || "$default",
                        s = e[a];
                    return s ? u(s.url).then(n) : o(t)
                }

                function u(e) {
                    return n.get(e, {
                        cache: o
                    }).then(function(e) {
                        return t.element("<div>").append(e.data).find("svg")[0]
                    })["catch"](m)
                }

                function m(e) {
                    var n = t.isString(e) ? e : e.message || e.data || e.statusText;
                    return i.warn(n), r.reject(n)
                }

                function f(e) {
                    return t.isDefined(e.element) && t.isDefined(e.config)
                }

                function h(e, n) {
                    e && "svg" != e.tagName && (e = t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]), e.getAttribute("xmlns") || e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.element = e, this.config = n, this.prepare()
                }

                function p() {
                    var n = this.config ? this.config.viewBoxSize : e.defaultViewBoxSize;
                    t.forEach({
                        fit: "",
                        height: "100%",
                        width: "100%",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: this.element.getAttribute("viewBox") || "0 0 " + n + " " + n
                    }, function(e, t) {
                        this.element.setAttribute(t, e)
                    }, this), t.forEach({
                        "pointer-events": "none",
                        display: "block"
                    }, function(e, t) {
                        this.element.style[t] = e
                    }, this)
                }

                function g() {
                    return this.element.cloneNode(!0)
                }
                var v = {},
                    $ = /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/i;
                return h.prototype = {
                    clone: g,
                    prepare: p
                }, a.fontSet = s, a
            }
            t.module("material.components.icon").provider("$mdIcon", e);
            var i = {
                defaultViewBoxSize: 24,
                defaultFontSet: "material-icons",
                fontSets: []
            };
            e.prototype = {
                icon: function(e, t, r) {
                    return -1 == e.indexOf(":") && (e = "$default:" + e), i[e] = new n(t, r), this
                },
                iconSet: function(e, t, r) {
                    return i[e] = new n(t, r), this
                },
                defaultIconSet: function(e, t) {
                    var r = "$default";
                    return i[r] || (i[r] = new n(e, t)), i[r].viewBoxSize = t || i.defaultViewBoxSize, this
                },
                defaultViewBoxSize: function(e) {
                    return i.defaultViewBoxSize = e, this
                },
                fontSet: function(e, t) {
                    return i.fontSets.push({
                        alias: e,
                        fontSet: t || e
                    }), this
                },
                defaultFontSet: function(e) {
                    return i.defaultFontSet = e ? e : "", this
                },
                defaultIconSize: function(e) {
                    return i.defaultIconSize = e, this
                },
                preloadIcons: function(e) {
                    var t = this,
                        n = [{
                            id: "md-tabs-arrow",
                            url: "md-tabs-arrow.svg",
                            svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'
                        }, {
                            id: "md-close",
                            url: "md-close.svg",
                            svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'
                        }, {
                            id: "md-cancel",
                            url: "md-cancel.svg",
                            svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'
                        }, {
                            id: "md-menu",
                            url: "md-menu.svg",
                            svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>'
                        }, {
                            id: "md-toggle-arrow",
                            url: "md-toggle-arrow-svg",
                            svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'
                        }, {
                            id: "md-calendar",
                            url: "md-calendar.svg",
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>'
                        }];
                    n.forEach(function(n) {
                        t.icon(n.id, n.url), e.put(n.url, n.svg)
                    })
                },
                $get: ["$http", "$q", "$log", "$templateCache", function(e, t, n, o) {
                    return this.preloadIcons(o), r(i, e, t, n, o)
                }]
            }, r.$inject = ["config", "$http", "$q", "$log", "$templateCache"]
        }(),
        function() {
            function e(e, r, i, o, a, s) {
                var c, l, d = this;
                this.nestLevel = parseInt(r.mdNestLevel, 10) || 0, this.init = function(e, t) {
                    t = t || {}, c = e, l = i[0].querySelector("[ng-click],[ng-mouseenter]"), this.isInMenuBar = t.isInMenuBar, this.nestedMenus = a.nodesToArray(c[0].querySelectorAll(".md-nested-menu")), this.enableHoverListener(), c.on("$mdInterimElementRemove", function() {
                        d.isOpen = !1
                    })
                }, this.enableHoverListener = function() {
                    o.$on("$mdMenuOpen", function(e, t) {
                        c[0].contains(t[0]) && (d.currentlyOpenMenu = t.controller("mdMenu"), d.isAlreadyOpening = !1, d.currentlyOpenMenu.registerContainerProxy(d.triggerContainerProxy.bind(d)))
                    }), o.$on("$mdMenuClose", function(e, t) {
                        c[0].contains(t[0]) && (d.currentlyOpenMenu = n)
                    });
                    var e, r = t.element(a.nodesToArray(c[0].querySelectorAll("md-menu-item")));
                    r.on("mouseenter", function(n) {
                        if (!d.isAlreadyOpening) {
                            var r = n.target.querySelector("md-menu") || a.getClosest(n.target, "MD-MENU");
                            e = s(function() {
                                if (r && (r = t.element(r).controller("mdMenu")), d.currentlyOpenMenu && d.currentlyOpenMenu != r) {
                                    var e = d.nestLevel + 1;
                                    d.currentlyOpenMenu.close(!0, {
                                        closeTo: e
                                    })
                                } else r && !r.isOpen && r.open && (d.isAlreadyOpening = !0, r.open())
                            }, r ? 100 : 250);
                            var i = n.currentTarget.querySelector("button:not([disabled])");
                            i && i.focus()
                        }
                    }), r.on("mouseleave", function(t) {
                        e && (s.cancel(e), e = n)
                    })
                }, this.open = function(t) {
                    t && t.stopPropagation(), t && t.preventDefault(), d.isOpen || (d.isOpen = !0, l = l || (t ? t.target : i[0]), o.$emit("$mdMenuOpen", i), e.show({
                        scope: o,
                        mdMenuCtrl: d,
                        nestLevel: d.nestLevel,
                        element: c,
                        target: l,
                        preserveElement: d.isInMenuBar || d.nestedMenus.length > 0,
                        parent: d.isInMenuBar ? i : "body"
                    }))
                }, o.$mdOpenMenu = this.open, o.$watch(function() {
                    return d.isOpen
                }, function(e) {
                    e ? (l.setAttribute("aria-expanded", "true"), i[0].classList.add("md-open"), t.forEach(d.nestedMenus, function(e) {
                        e.classList.remove("md-open")
                    })) : (l && l.setAttribute("aria-expanded", "false"), i[0].classList.remove("md-open")), o.$mdMenuIsOpen = d.isOpen
                }), this.focusMenuContainer = function() {
                    var e = c[0].querySelector("[md-menu-focus-target]");
                    e || (e = c[0].querySelector(".md-button")), e.focus()
                }, this.registerContainerProxy = function(e) {
                    this.containerProxy = e
                }, this.triggerContainerProxy = function(e) {
                    this.containerProxy && this.containerProxy(e)
                }, this.destroy = function() {
                    return e.destroy()
                }, this.close = function(n, r) {
                    if (d.isOpen) {
                        d.isOpen = !1;
                        var a = t.extend({}, r, {
                            skipFocus: n
                        });
                        if (o.$emit("$mdMenuClose", i, a), e.hide(null, r), !n) {
                            var s = d.restoreFocusTo || i.find("button")[0];
                            s instanceof t.element && (s = s[0]), s && s.focus()
                        }
                    }
                }, this.positionMode = function() {
                    var e = (r.mdPositionMode || "target").split(" ");
                    return 1 == e.length && e.push(e[0]), {
                        left: e[0],
                        top: e[1]
                    }
                }, this.offsets = function() {
                    var e = (r.mdOffset || "0 0").split(" ").map(parseFloat);
                    if (2 == e.length) return {
                        left: e[0],
                        top: e[1]
                    };
                    if (1 == e.length) return {
                        top: e[0],
                        left: e[0]
                    };
                    throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")
                }
            }
            t.module("material.components.menu").controller("mdMenuCtrl", e), e.$inject = ["$mdMenu", "$attrs", "$element", "$scope", "$mdUtil", "$timeout"]
        }(),
        function() {
            function e(e) {
                function r(n) {
                    n.addClass("md-menu");
                    var r = n.children()[0];
                    if (r.hasAttribute("ng-click") || (r = r.querySelector("[ng-click],[ng-mouseenter]") || r), !r || "MD-BUTTON" != r.nodeName && "BUTTON" != r.nodeName || r.hasAttribute("type") || r.setAttribute("type", "button"), 2 != n.children().length) throw Error(o + "Expected two children elements.");
                    r && r.setAttribute("aria-haspopup", "true");
                    var a = n[0].querySelectorAll("md-menu"),
                        s = parseInt(n[0].getAttribute("md-nest-level"), 10) || 0;
                    return a && t.forEach(e.nodesToArray(a), function(e) {
                        e.hasAttribute("md-position-mode") || e.setAttribute("md-position-mode", "cascade"), e.classList.add("md-nested-menu"), e.setAttribute("md-nest-level", s + 1), e.setAttribute("role", "menu")
                    }), i
                }

                function i(e, r, i, o) {
                    var a = o[0],
                        s = o[1] != n,
                        c = t.element('<div class="md-open-menu-container md-whiteframe-z2"></div>'),
                        l = r.children()[1];
                    c.append(l), s && (r.append(c), c[0].style.display = "none"), a.init(c, {
                        isInMenuBar: s
                    }), e.$on("$destroy", function() {
                        a.destroy()["finally"](function() {
                            c.remove()
                        })
                    })
                }
                var o = "Invalid HTML for md-menu: ";
                return {
                    restrict: "E",
                    require: ["mdMenu", "?^mdMenuBar"],
                    controller: "mdMenuCtrl",
                    scope: !0,
                    compile: r
                }
            }
            t.module("material.components.menu").directive("mdMenu", e), e.$inject = ["$mdUtil"]
        }(),
        function() {
            function e(e) {
                function r(e, r, a, s, c, l, d, u, m) {
                    function f(n, r, i) {
                        return i.nestLevel ? t.noop : (i.disableParentScroll && !e.getClosest(i.target, "MD-DIALOG") ? i.restoreScroll = e.disableScrollAround(i.element, i.parent) : i.disableParentScroll = !1, i.hasBackdrop && (i.backdrop = e.createBackdrop(n, "md-menu-backdrop md-click-catcher"), m.enter(i.backdrop, i.parent)), function() {
                            i.backdrop && i.backdrop.remove(), i.disableParentScroll && i.restoreScroll()
                        })
                    }

                    function h(e, t, n) {
                        function r() {
                            return u(t, {
                                addClass: "md-leave"
                            }).start()
                        }

                        function i() {
                            t.removeClass("md-active"), $(t, n), n.alreadyOpen = !1
                        }
                        return n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? i() : r().then(i)
                    }

                    function p(n, i, o) {
                        function s() {
                            return o.preserveElement ? i[0].style.display = "" : o.parent.append(i), l(function(e) {
                                var t = b(i, o);
                                i.removeClass("md-leave"), u(i, {
                                    addClass: "md-active",
                                    from: E.toCss(t),
                                    to: E.toCss({
                                        transform: ""
                                    })
                                }).start().then(e)
                            })
                        }

                        function m() {
                            if (!o.target) throw Error("$mdMenu.show() expected a target to animate from in options.target");
                            t.extend(o, {
                                alreadyOpen: !1,
                                isRemoved: !1,
                                target: t.element(o.target),
                                parent: t.element(o.parent),
                                menuContentEl: t.element(i[0].querySelector("md-menu-content"))
                            })
                        }

                        function h() {
                            var e = function(e, t) {
                                return d.throttle(function() {
                                    if (!o.isRemoved) {
                                        var n = b(e, t);
                                        e.css(E.toCss(n))
                                    }
                                })
                            }(i, o);
                            return c.addEventListener("resize", e), c.addEventListener("orientationchange", e),
                                function() {
                                    c.removeEventListener("resize", e), c.removeEventListener("orientationchange", e)
                                }
                        }

                        function p() {
                            function t(t) {
                                var n;
                                switch (t.keyCode) {
                                    case a.KEY_CODE.ESCAPE:
                                        o.mdMenuCtrl.close(!1, {
                                            closeAll: !0
                                        }), n = !0;
                                        break;
                                    case a.KEY_CODE.UP_ARROW:
                                        g(t, o.menuContentEl, o, -1) || o.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                                        break;
                                    case a.KEY_CODE.DOWN_ARROW:
                                        g(t, o.menuContentEl, o, 1) || o.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                                        break;
                                    case a.KEY_CODE.LEFT_ARROW:
                                        o.nestLevel ? o.mdMenuCtrl.close() : o.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                                        break;
                                    case a.KEY_CODE.RIGHT_ARROW:
                                        var r = e.getClosest(t.target, "MD-MENU");
                                        r && r != o.parent[0] ? t.target.click() : o.mdMenuCtrl.triggerContainerProxy(t), n = !0
                                }
                                n && (t.preventDefault(), t.stopImmediatePropagation())
                            }

                            function r(e) {
                                e.preventDefault(), e.stopPropagation(), n.$apply(function() {
                                    o.mdMenuCtrl.close(!0, {
                                        closeAll: !0
                                    })
                                })
                            }

                            function s(t) {
                                function r() {
                                    n.$apply(function() {
                                        o.mdMenuCtrl.close(!0, {
                                            closeAll: !0
                                        })
                                    })
                                }

                                function i(e, t) {
                                    if (!e) return !1;
                                    for (var n, r = 0; n = t[r]; ++r)
                                        for (var i, o = [n, "data-" + n, "x-" + n], a = 0; i = o[a]; ++a)
                                            if (e.hasAttribute(i)) return !0;
                                    return !1
                                }
                                var a = t.target;
                                do {
                                    if (a == o.menuContentEl[0]) return;
                                    if (i(a, ["ng-click", "ng-href", "ui-sref"]) || "BUTTON" == a.nodeName || "MD-BUTTON" == a.nodeName) {
                                        var s = e.getClosest(a, "MD-MENU");
                                        a.hasAttribute("disabled") || s && s != o.parent[0] || r();
                                        break
                                    }
                                } while (a = a.parentNode)
                            }
                            i.addClass("md-clickable"), o.backdrop && o.backdrop.on("click", r), o.menuContentEl.on("keydown", t), o.menuContentEl[0].addEventListener("click", s, !0);
                            var c = o.menuContentEl[0].querySelector("[md-menu-focus-target]");
                            if (!c) {
                                var l = o.menuContentEl[0].firstElementChild;
                                c = l && (l.querySelector(".md-button:not([disabled])") || l.firstElementChild)
                            }
                            return c && c.focus(),
                                function() {
                                    i.removeClass("md-clickable"), o.backdrop && o.backdrop.off("click", r), o.menuContentEl.off("keydown", t), o.menuContentEl[0].removeEventListener("click", s, !0)
                                }
                        }
                        return m(o), r.inherit(o.menuContentEl, o.target), o.cleanupResizing = h(), o.hideBackdrop = f(n, i, o), s().then(function(e) {
                            return o.alreadyOpen = !0, o.cleanupInteraction = p(), e
                        })
                    }

                    function g(t, n, r, i) {
                        for (var o, a = e.getClosest(t.target, "MD-MENU-ITEM"), s = e.nodesToArray(n[0].children), c = s.indexOf(a), l = c + i; l >= 0 && l < s.length; l += i) {
                            var d = s[l].querySelector(".md-button");
                            if (o = v(d)) break
                        }
                        return o
                    }

                    function v(e) {
                        return e && -1 != e.getAttribute("tabindex") ? (e.focus(), s[0].activeElement == e) : void 0
                    }

                    function $(e, t) {
                        t.preserveElement ? i(e).style.display = "none" : i(e).parentNode === i(t.parent) && i(t.parent).removeChild(i(e))
                    }

                    function b(t, r) {
                        function i(e) {
                            e.top = Math.max(Math.min(e.top, $.bottom - d.offsetHeight), $.top), e.left = Math.max(Math.min(e.left, $.right - d.offsetWidth), $.left)
                        }

                        function a() {
                            for (var e = 0; e < u.children.length; ++e)
                                if ("none" != c.getComputedStyle(u.children[e]).display) return u.children[e]
                        }
                        var l, d = t[0],
                            u = t[0].firstElementChild,
                            m = u.getBoundingClientRect(),
                            f = s[0].body,
                            h = f.getBoundingClientRect(),
                            p = c.getComputedStyle(u),
                            g = r.target[0].querySelector("[md-menu-origin]") || r.target[0],
                            v = g.getBoundingClientRect(),
                            $ = {
                                left: h.left + o,
                                top: Math.max(h.top, 0) + o,
                                bottom: Math.max(h.bottom, Math.max(h.top, 0) + h.height) - o,
                                right: h.right - o
                            },
                            b = {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            },
                            E = {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            },
                            y = r.mdMenuCtrl.positionMode();
                        ("target" == y.top || "target" == y.left || "target-right" == y.left) && (l = a(), l && (l = l.firstElementChild || l, l = l.querySelector("[md-menu-align-target]") || l, b = l.getBoundingClientRect(), E = {
                            top: parseFloat(d.style.top || 0),
                            left: parseFloat(d.style.left || 0)
                        }));
                        var M = {},
                            C = "top ";
                        switch (y.top) {
                            case "target":
                                M.top = E.top + v.top - b.top;
                                break;
                            case "cascade":
                                M.top = v.top - parseFloat(p.paddingTop) - g.style.top;
                                break;
                            case "bottom":
                                M.top = v.top + v.height;
                                break;
                            default:
                                throw new Error('Invalid target mode "' + y.top + '" specified for md-menu on Y axis.')
                        }
                        switch (y.left) {
                            case "target":
                                M.left = E.left + v.left - b.left, C += "left";
                                break;
                            case "target-right":
                                M.left = v.right - m.width + (m.right - b.right), C += "right";
                                break;
                            case "cascade":
                                var w = v.right + m.width < $.right;
                                M.left = w ? v.right - g.style.left : v.left - g.style.left - m.width, C += w ? "left" : "right";
                                break;
                            case "left":
                                M.left = v.left, C += "left";
                                break;
                            default:
                                throw new Error('Invalid target mode "' + y.left + '" specified for md-menu on X axis.')
                        }
                        var x = r.mdMenuCtrl.offsets();
                        M.top += x.top, M.left += x.left, i(M);
                        var A = Math.round(100 * Math.min(v.width / d.offsetWidth, 1)) / 100,
                            k = Math.round(100 * Math.min(v.height / d.offsetHeight, 1)) / 100;
                        return {
                            top: Math.round(M.top),
                            left: Math.round(M.left),
                            transform: r.alreadyOpen ? n : e.supplant("scale({0},{1})", [A, k]),
                            transformOrigin: C
                        }
                    }
                    var E = e.dom.animator;
                    return {
                        parent: "body",
                        onShow: p,
                        onRemove: h,
                        hasBackdrop: !0,
                        disableParentScroll: !0,
                        skipCompile: !0,
                        preserveScope: !0,
                        skipHide: !0,
                        themable: !0
                    }
                }

                function i(e) {
                    return e instanceof t.element && (e = e[0]), e
                }
                var o = 8;
                return r.$inject = ["$mdUtil", "$mdTheming", "$mdConstant", "$document", "$window", "$q", "$$rAF", "$animateCss", "$animate"], e("$mdMenu").setDefaults({
                    methods: ["target"],
                    options: r
                })
            }
            t.module("material.components.menu").provider("$mdMenu", e), e.$inject = ["$$interimElementProvider"]
        }(),
        function() {
            function e(e, n, i, o, a, s, c) {
                this.$element = n, this.$attrs = i, this.$mdConstant = o, this.$mdUtil = s, this.$document = a, this.$scope = e, this.$timeout = c;
                var l = this;
                t.forEach(r, function(e) {
                    l[e] = t.bind(l, l[e])
                })
            }
            t.module("material.components.menuBar").controller("MenuBarController", e);
            var r = ["handleKeyDown", "handleMenuHover", "scheduleOpenHoveredMenu", "cancelScheduledOpen"];
            e.$inject = ["$scope", "$element", "$attrs", "$mdConstant", "$document", "$mdUtil", "$timeout"], e.prototype.init = function() {
                var e = this.$element,
                    r = this.$mdUtil,
                    i = this.$scope,
                    o = this;
                e.on("keydown", this.handleKeyDown), this.parentToolbar = r.getClosest(e, "MD-TOOLBAR"), i.$on("$mdMenuOpen", function(t, n) {
                    -1 != o.getMenus().indexOf(n[0]) && (e[0].classList.add("md-open"), n[0].classList.add("md-open"), o.currentlyOpenMenu = n.controller("mdMenu"), o.currentlyOpenMenu.registerContainerProxy(o.handleKeyDown), o.enableOpenOnHover())
                }), i.$on("$mdMenuClose", function(t, i, a) {
                    var s = o.getMenus();
                    if (-1 != s.indexOf(i[0]) && (e[0].classList.remove("md-open"), i[0].classList.remove("md-open")), a.closeAll && e[0].contains(i[0])) {
                        for (var c = i[0]; c && -1 == s.indexOf(c);) c = r.getClosest(c, "MD-MENU", !0);
                        c && (a.skipFocus || c.querySelector("button:not([disabled])").focus(), o.currentlyOpenMenu = n, o.disableOpenOnHover(), o.setKeyboardMode(!0))
                    }
                }), t.element(this.getMenus()).on("mouseenter", this.handleMenuHover), this.setKeyboardMode(!0)
            }, e.prototype.setKeyboardMode = function(e) {
                e ? this.$element[0].classList.add("md-keyboard-mode") : this.$element[0].classList.remove("md-keyboard-mode")
            }, e.prototype.enableOpenOnHover = function() {
                if (!this.openOnHoverEnabled) {
                    this.openOnHoverEnabled = !0;
                    var e;
                    (e = this.parentToolbar) && (e.dataset.mdRestoreStyle = e.getAttribute("style"), e.style.position = "relative", e.style.zIndex = 100)
                }
            }, e.prototype.handleMenuHover = function(e) {
                this.setKeyboardMode(!1), this.openOnHoverEnabled && this.scheduleOpenHoveredMenu(e)
            }, e.prototype.disableOpenOnHover = function() {
                if (this.openOnHoverEnabled) {
                    this.openOnHoverEnabled = !1;
                    var e;
                    (e = this.parentToolbar) && e.setAttribute("style", e.dataset.mdRestoreStyle || "")
                }
            }, e.prototype.scheduleOpenHoveredMenu = function(e) {
                var n = t.element(e.currentTarget),
                    r = n.controller("mdMenu");
                this.setKeyboardMode(!1), this.scheduleOpenMenu(r)
            }, e.prototype.scheduleOpenMenu = function(e) {
                var t = this,
                    r = this.$timeout;
                e != t.currentlyOpenMenu && (r.cancel(t.pendingMenuOpen), t.pendingMenuOpen = r(function() {
                    t.pendingMenuOpen = n, t.currentlyOpenMenu && t.currentlyOpenMenu.close(!0, {
                        closeAll: !0
                    }), e.open()
                }, 200, !1))
            }, e.prototype.handleKeyDown = function(e) {
                var n = this.$mdConstant.KEY_CODE,
                    r = this.currentlyOpenMenu,
                    i = r && r.isOpen;
                this.setKeyboardMode(!0);
                var o, a, s;
                switch (e.keyCode) {
                    case n.DOWN_ARROW:
                        r ? r.focusMenuContainer() : this.openFocusedMenu(), o = !0;
                        break;
                    case n.UP_ARROW:
                        r && r.close(), o = !0;
                        break;
                    case n.LEFT_ARROW:
                        a = this.focusMenu(-1), i && (s = t.element(a).controller("mdMenu"), this.scheduleOpenMenu(s)), o = !0;
                        break;
                    case n.RIGHT_ARROW:
                        a = this.focusMenu(1), i && (s = t.element(a).controller("mdMenu"), this.scheduleOpenMenu(s)), o = !0
                }
                o && (e && e.preventDefault && e.preventDefault(), e && e.stopImmediatePropagation && e.stopImmediatePropagation())
            }, e.prototype.focusMenu = function(e) {
                var t = this.getMenus(),
                    n = this.getFocusedMenuIndex(); - 1 == n && (n = this.getOpenMenuIndex());
                var r = !1;
                return -1 == n ? n = 0 : (0 > e && n > 0 || e > 0 && n < t.length - e) && (n += e, r = !0), r ? (t[n].querySelector("button").focus(), t[n]) : void 0
            }, e.prototype.openFocusedMenu = function() {
                var e = this.getFocusedMenu();
                e && t.element(e).controller("mdMenu").open()
            }, e.prototype.getMenus = function() {
                var e = this.$element;
                return this.$mdUtil.nodesToArray(e[0].children).filter(function(e) {
                    return "MD-MENU" == e.nodeName
                })
            }, e.prototype.getFocusedMenu = function() {
                return this.getMenus()[this.getFocusedMenuIndex()]
            }, e.prototype.getFocusedMenuIndex = function() {
                var e = this.$mdUtil,
                    t = e.getClosest(this.$document[0].activeElement, "MD-MENU");
                if (!t) return -1;
                var n = this.getMenus().indexOf(t);
                return n
            }, e.prototype.getOpenMenuIndex = function() {
                for (var e = this.getMenus(), t = 0; t < e.length; ++t)
                    if (e[t].classList.contains("md-open")) return t;
                return -1
            }
        }(),
        function() {
            function e(e, n) {
                return {
                    restrict: "E",
                    require: "mdMenuBar",
                    controller: "MenuBarController",
                    compile: function(r, i) {
                        return i.ariaRole || r[0].setAttribute("role", "menubar"), t.forEach(r[0].children, function(n) {
                                if ("MD-MENU" == n.nodeName) {
                                    n.hasAttribute("md-position-mode") || n.setAttribute("md-position-mode", "left bottom"), n.setAttribute("role", "menu");
                                    var r = e.nodesToArray(n.querySelectorAll("md-menu-content"));
                                    t.forEach(r, function(e) {
                                        e.classList.add("md-menu-bar-menu"), e.classList.add("md-dense"), e.hasAttribute("width") || e.setAttribute("width", 5)
                                    })
                                }
                            }),
                            function(e, t, r, i) {
                                n(e, t), i.init()
                            }
                    }
                }
            }
            t.module("material.components.menuBar").directive("mdMenuBar", e), e.$inject = ["$mdUtil", "$mdTheming"]
        }(),
        function() {
            function e() {
                return {
                    restrict: "E",
                    compile: function(e, t) {
                        t.role || e[0].setAttribute("role", "separator")
                    }
                }
            }
            t.module("material.components.menuBar").directive("mdMenuDivider", e)
        }(),
        function() {
            function e(e, t, n) {
                this.$element = t, this.$attrs = n, this.$scope = e
            }
            t.module("material.components.menuBar").controller("MenuItemController", e), e.$inject = ["$scope", "$element", "$attrs"], e.prototype.init = function(e) {
                var t = this.$element,
                    n = this.$attrs;
                this.ngModel = e, ("checkbox" == n.type || "radio" == n.type) && (this.mode = n.type, this.iconEl = t[0].children[0], this.buttonEl = t[0].children[1], e && this.initClickListeners())
            }, e.prototype.initClickListeners = function() {
                function e() {
                    if ("radio" == s) {
                        var e = o.ngValue ? i.$eval(o.ngValue) : o.value;
                        return r.$modelValue == e
                    }
                    return r.$modelValue
                }

                function n(e) {
                    e ? l.off("click", d) : l.on("click", d)
                }
                var r = this.ngModel,
                    i = this.$scope,
                    o = this.$attrs,
                    a = this.$element,
                    s = this.mode;
                this.handleClick = t.bind(this, this.handleClick);
                var c = this.iconEl,
                    l = t.element(this.buttonEl),
                    d = this.handleClick;
                o.$observe("disabled", n), n(o.disabled), r.$render = function() {
                    e() ? (c.style.display = "", a.attr("aria-checked", "true")) : (c.style.display = "none", a.attr("aria-checked", "false"))
                }, i.$$postDigest(r.$render)
            }, e.prototype.handleClick = function(e) {
                var t, n = this.mode,
                    r = this.ngModel,
                    i = this.$attrs;
                "checkbox" == n ? t = !r.$modelValue : "radio" == n && (t = i.ngValue ? this.$scope.$eval(i.ngValue) : i.value), r.$setViewValue(t), r.$render()
            }
        }(),
        function() {
            function e() {
                return {
                    require: ["mdMenuItem", "?ngModel"],
                    compile: function(e, n) {
                        function r(t, n) {
                            e[0].hasAttribute(t) || e[0].setAttribute(t, n)
                        }

                        function i(t) {
                            if (e[0].hasAttribute(t)) {
                                var n = e[0].getAttribute(t);
                                a[0].setAttribute(t, n), e[0].removeAttribute(t)
                            }
                        }
                        if ("checkbox" == n.type || "radio" == n.type) {
                            var o = e[0].textContent,
                                a = t.element('<md-button type="button"></md-button>');
                            a.html(o), a.attr("tabindex", "0"), e.html(""), e.append(t.element('<md-icon md-svg-icon="check"></md-icon>')), e.append(a), e[0].classList.add("md-indent"), r("role", "checkbox" == n.type ? "menuitemcheckbox" : "menuitemradio"), t.forEach(["ng-disabled"], i)
                        } else r("role", "menuitem");
                        return function(e, t, n, r) {
                            var i = r[0],
                                o = r[1];
                            i.init(o)
                        }
                    },
                    controller: "MenuItemController"
                }
            }
            t.module("material.components.menuBar").directive("mdMenuItem", e)
        }(),
        function() {
            function e() {
                function e(e, n, r, i) {
                    if (i) {
                        var o = i.getTabElementIndex(n),
                            a = n.find("md-tab-body").eq(0).remove(),
                            s = n.find("md-tab-label").eq(0).remove(),
                            c = i.insertTab({
                                scope: e,
                                parent: e.$parent,
                                index: o,
                                element: n,
                                template: a.html(),
                                label: s.html()
                            }, o);
                        e.select = e.select || t.noop, e.deselect = e.deselect || t.noop, e.$watch("active", function(e) {
                            e && i.select(c.getIndex())
                        }), e.$watch("disabled", function() {
                            i.refreshIndex()
                        }), e.$watch(function() {
                            return i.getTabElementIndex(n)
                        }, function(e) {
                            c.index = e, i.updateTabOrder()
                        }), e.$on("$destroy", function() {
                            i.removeTab(c)
                        })
                    }
                }
                return {
                    require: "^?mdTabs",
                    terminal: !0,
                    compile: function(n, r) {
                        var i = n.find("md-tab-label"),
                            o = n.find("md-tab-body");
                        if (0 == i.length && (i = t.element("<md-tab-label></md-tab-label>"), r.label ? i.text(r.label) : i.append(n.contents()), 0 == o.length)) {
                            var a = n.contents().detach();
                            o = t.element("<md-tab-body></md-tab-body>"), o.append(a)
                        }
                        return n.append(i), o.html() && n.append(o), e
                    },
                    scope: {
                        active: "=?mdActive",
                        disabled: "=?ngDisabled",
                        select: "&?mdOnSelect",
                        deselect: "&?mdOnDeselect"
                    }
                }
            }
            t.module("material.components.tabs").directive("mdTab", e)
        }(),
        function() {
            function e() {
                return {
                    require: "^?mdTabs",
                    link: function(e, t, n, r) {
                        r && r.attachRipple(e, t)
                    }
                }
            }
            t.module("material.components.tabs").directive("mdTabItem", e)
        }(),
        function() {
            function e() {
                return {
                    terminal: !0
                }
            }
            t.module("material.components.tabs").directive("mdTabLabel", e)
        }(),
        function() {
            function e(e) {
                return {
                    restrict: "A",
                    compile: function(t, n) {
                        var r = e(n.mdTabScroll, null, !0);
                        return function(e, t) {
                            t.on("mousewheel", function(t) {
                                e.$apply(function() {
                                    r(e, {
                                        $event: t
                                    })
                                })
                            })
                        }
                    }
                }
            }
            t.module("material.components.tabs").directive("mdTabScroll", e), e.$inject = ["$parse"]
        }(),
        function() {
            function e(e, r, i, o, a, s, c, l, d, u) {
                function m() {
                    ce.selectedIndex = ce.selectedIndex || 0, f(), p(), h(), u(r), s.nextTick(function() {
                        re(), Q(), ie(), ce.tabs[ce.selectedIndex] && ce.tabs[ce.selectedIndex].scope.select(), fe = !0, Y()
                    })
                }

                function f() {
                    var e = l.$mdTabsTemplate,
                        n = t.element(de.data);
                    n.html(e), d(n.contents())(ce.parent), delete l.$mdTabsTemplate
                }

                function h() {
                    t.element(i).on("resize", H), e.$on("$destroy", $)
                }

                function p() {
                    e.$watch("$mdTabsCtrl.selectedIndex", A)
                }

                function g(e, t) {
                    var n = l.$normalize("md-" + e);
                    t && W(e, t), l.$observe(n, function(t) {
                        ce[e] = t
                    })
                }

                function v(e, t) {
                    function n(t) {
                        ce[e] = "false" !== t
                    }
                    var r = l.$normalize("md-" + e);
                    t && W(e, t), l.hasOwnProperty(r) && n(l[r]), l.$observe(r, n)
                }

                function $() {
                    me = !0, t.element(i).off("resize", H)
                }

                function b(e) {
                    t.element(de.wrapper).toggleClass("md-stretch-tabs", q()), ie()
                }

                function E(e) {
                    ce.shouldCenterTabs = B()
                }

                function y(e, t) {
                    e !== t && s.nextTick(ce.updateInkBarStyles)
                }

                function M(e, t) {
                    e !== t && (ce.maxTabWidth = G(), ce.shouldCenterTabs = B(), s.nextTick(function() {
                        ce.maxTabWidth = G(), Q(ce.selectedIndex)
                    }))
                }

                function C(e) {
                    r[e ? "removeClass" : "addClass"]("md-no-tab-content")
                }

                function w(n) {
                    var r = ce.shouldCenterTabs ? "" : "-" + n + "px";
                    t.element(de.paging).css(o.CSS.TRANSFORM, "translate3d(" + r + ", 0, 0)"), e.$broadcast("$mdTabsPaginationChanged")
                }

                function x(e, t) {
                    e !== t && de.tabs[e] && (Q(), Z())
                }

                function A(t, n) {
                    t !== n && (ce.selectedIndex = z(t), ce.lastSelectedIndex = n, ce.updateInkBarStyles(), re(), Q(t), e.$broadcast("$mdTabsChanged"), ce.tabs[n] && ce.tabs[n].scope.deselect(), ce.tabs[t] && ce.tabs[t].scope.select())
                }

                function k(e) {
                    var t = r[0].getElementsByTagName("md-tab");
                    return Array.prototype.indexOf.call(t, e[0])
                }

                function T() {
                    T.watcher || (T.watcher = e.$watch(function() {
                        s.nextTick(function() {
                            T.watcher && r.prop("offsetParent") && (T.watcher(), T.watcher = null, H())
                        }, !1)
                    }))
                }

                function S(e) {
                    switch (e.keyCode) {
                        case o.KEY_CODE.LEFT_ARROW:
                            e.preventDefault(), J(-1, !0);
                            break;
                        case o.KEY_CODE.RIGHT_ARROW:
                            e.preventDefault(), J(1, !0);
                            break;
                        case o.KEY_CODE.SPACE:
                        case o.KEY_CODE.ENTER:
                            e.preventDefault(), le || (ce.selectedIndex = ce.focusIndex)
                    }
                    ce.lastClick = !1
                }

                function N(e) {
                    le || (ce.focusIndex = ce.selectedIndex = e), ce.lastClick = !0, s.nextTick(function() {
                        ce.tabs[e].element.triggerHandler("click")
                    }, !1)
                }

                function D(e) {
                    ce.shouldPaginate && (e.preventDefault(), ce.offsetLeft = ae(ce.offsetLeft - e.wheelDelta))
                }

                function _() {
                    var e, t, n = de.canvas.clientWidth,
                        r = n + ce.offsetLeft;
                    for (e = 0; e < de.tabs.length && (t = de.tabs[e], !(t.offsetLeft + t.offsetWidth > r)); e++);
                    ce.offsetLeft = ae(t.offsetLeft)
                }

                function O() {
                    var e, t;
                    for (e = 0; e < de.tabs.length && (t = de.tabs[e], !(t.offsetLeft + t.offsetWidth >= ce.offsetLeft)); e++);
                    ce.offsetLeft = ae(t.offsetLeft + t.offsetWidth - de.canvas.clientWidth)
                }

                function H() {
                    ce.lastSelectedIndex = ce.selectedIndex, ce.offsetLeft = ae(ce.offsetLeft), s.nextTick(function() {
                        ce.updateInkBarStyles(), Y()
                    })
                }

                function I(e) {
                    t.element(de.inkBar).toggleClass("ng-hide", e)
                }

                function R(e) {
                    r.toggleClass("md-dynamic-height", e)
                }

                function P(e) {
                    if (!me) {
                        var t = ce.selectedIndex,
                            n = ce.tabs.splice(e.getIndex(), 1)[0];
                        ne(), ce.selectedIndex === t && (n.scope.deselect(), ce.tabs[ce.selectedIndex] && ce.tabs[ce.selectedIndex].scope.select()), s.nextTick(function() {
                            Y(), ce.offsetLeft = ae(ce.offsetLeft)
                        })
                    }
                }

                function L(e, n) {
                    var r = fe,
                        i = {
                            getIndex: function() {
                                return ce.tabs.indexOf(o)
                            },
                            isActive: function() {
                                return this.getIndex() === ce.selectedIndex
                            },
                            isLeft: function() {
                                return this.getIndex() < ce.selectedIndex
                            },
                            isRight: function() {
                                return this.getIndex() > ce.selectedIndex
                            },
                            shouldRender: function() {
                                return !ce.noDisconnect || this.isActive()
                            },
                            hasFocus: function() {
                                return !ce.lastClick && ce.hasFocus && this.getIndex() === ce.focusIndex
                            },
                            id: s.nextUid()
                        },
                        o = t.extend(i, e);
                    return t.isDefined(n) ? ce.tabs.splice(n, 0, o) : ce.tabs.push(o), ee(), te(), s.nextTick(function() {
                        Y(), r && ce.autoselect && s.nextTick(function() {
                            s.nextTick(function() {
                                N(ce.tabs.indexOf(o))
                            })
                        })
                    }), o
                }

                function V() {
                    var e = {};
                    return e.wrapper = r[0].getElementsByTagName("md-tabs-wrapper")[0], e.data = r[0].getElementsByTagName("md-tab-data")[0], e.canvas = e.wrapper.getElementsByTagName("md-tabs-canvas")[0], e.paging = e.canvas.getElementsByTagName("md-pagination-wrapper")[0], e.tabs = e.paging.getElementsByTagName("md-tab-item"), e.dummies = e.canvas.getElementsByTagName("md-dummy-tab"), e.inkBar = e.paging.getElementsByTagName("md-ink-bar")[0], e.contentsWrapper = r[0].getElementsByTagName("md-tabs-content-wrapper")[0], e.contents = e.contentsWrapper.getElementsByTagName("md-tab-content"), e
                }

                function j() {
                    return ce.offsetLeft > 0
                }

                function F() {
                    var e = de.tabs[de.tabs.length - 1];
                    return e && e.offsetLeft + e.offsetWidth > de.canvas.clientWidth + ce.offsetLeft
                }

                function q() {
                    switch (ce.stretchTabs) {
                        case "always":
                            return !0;
                        case "never":
                            return !1;
                        default:
                            return !ce.shouldPaginate && i.matchMedia("(max-width: 600px)").matches
                    }
                }

                function B() {
                    return ce.centerTabs && !ce.shouldPaginate
                }

                function U() {
                    if (ce.noPagination || !fe) return !1;
                    var e = r.prop("clientWidth");
                    return t.forEach(de.dummies, function(t) {
                        e -= t.offsetWidth
                    }), 0 > e
                }

                function z(e) {
                    if (-1 === e) return -1;
                    var t, n, r = Math.max(ce.tabs.length - e, e);
                    for (t = 0; r >= t; t++) {
                        if (n = ce.tabs[e + t], n && n.scope.disabled !== !0) return n.getIndex();
                        if (n = ce.tabs[e - t], n && n.scope.disabled !== !0) return n.getIndex()
                    }
                    return e
                }

                function W(e, t, n) {
                    Object.defineProperty(ce, e, {
                        get: function() {
                            return n
                        },
                        set: function(e) {
                            var r = n;
                            n = e, t && t(e, r)
                        }
                    })
                }

                function Y() {
                    q() || K(), ce.maxTabWidth = G(), ce.shouldPaginate = U()
                }

                function K() {
                    var e = 1;
                    t.forEach(de.dummies, function(t) {
                        e += t.offsetWidth
                    }), t.element(de.paging).css("width", e + "px")
                }

                function G() {
                    return r.prop("clientWidth")
                }

                function X() {
                    var e = ce.tabs[ce.selectedIndex],
                        t = ce.tabs[ce.focusIndex];
                    ce.tabs = ce.tabs.sort(function(e, t) {
                        return e.index - t.index
                    }), ce.selectedIndex = ce.tabs.indexOf(e), ce.focusIndex = ce.tabs.indexOf(t)
                }

                function J(e, t) {
                    var n, r = t ? "focusIndex" : "selectedIndex",
                        i = ce[r];
                    for (n = i + e; ce.tabs[n] && ce.tabs[n].scope.disabled; n += e);
                    ce.tabs[n] && (ce[r] = n)
                }

                function Z() {
                    de.dummies[ce.focusIndex].focus()
                }

                function Q(e) {
                    if (null == e && (e = ce.focusIndex), de.tabs[e] && !ce.shouldCenterTabs) {
                        var t = de.tabs[e],
                            n = t.offsetLeft,
                            r = t.offsetWidth + n;
                        ce.offsetLeft = Math.max(ce.offsetLeft, ae(r - de.canvas.clientWidth + 64)), ce.offsetLeft = Math.min(ce.offsetLeft, ae(n))
                    }
                }

                function ee() {
                    ue.forEach(function(e) {
                        s.nextTick(e)
                    }), ue = []
                }

                function te() {
                    var e = !1;
                    t.forEach(ce.tabs, function(t) {
                        t.template && (e = !0)
                    }), ce.hasContent = e
                }

                function ne() {
                    ce.selectedIndex = z(ce.selectedIndex), ce.focusIndex = z(ce.focusIndex)
                }

                function re() {
                    if (!ce.dynamicHeight) return r.css("height", "");
                    if (!ce.tabs.length) return ue.push(re);
                    var e = de.contents[ce.selectedIndex],
                        t = e ? e.offsetHeight : 0,
                        i = de.wrapper.offsetHeight,
                        o = t + i,
                        a = r.prop("offsetHeight");
                    if ("bottom" === r.attr("md-align-tabs") && (a -= i, o -= i, r.attr("md-border-bottom") !== n && ++a), a !== o) {
                        le = !0;
                        var l = {
                                height: a + "px"
                            },
                            d = {
                                height: o + "px"
                            };
                        r.css(l), c(r, {
                            from: l,
                            to: d,
                            easing: "cubic-bezier(0.35, 0, 0.25, 1)",
                            duration: .5
                        }).start().done(function() {
                            r.css({
                                transition: "none",
                                height: ""
                            }), s.nextTick(function() {
                                r.css("transition", "")
                            }), le = !1
                        })
                    }
                }

                function ie() {
                    if (!de.tabs[ce.selectedIndex]) return void t.element(de.inkBar).css({
                        left: "auto",
                        right: "auto"
                    });
                    if (!ce.tabs.length) return ue.push(ce.updateInkBarStyles);
                    if (!r.prop("offsetParent")) return T();
                    var e, n = ce.selectedIndex,
                        i = de.paging.offsetWidth,
                        o = de.tabs[n],
                        a = o.offsetLeft,
                        c = i - a - o.offsetWidth;
                    ce.shouldCenterTabs && (e = Array.prototype.slice.call(de.tabs).reduce(function(e, t) {
                        return e + t.offsetWidth
                    }, 0), i > e && s.nextTick(ie, !1)), oe(), t.element(de.inkBar).css({
                        left: a + "px",
                        right: c + "px"
                    })
                }

                function oe() {
                    var e = ce.selectedIndex,
                        n = ce.lastSelectedIndex,
                        r = t.element(de.inkBar);
                    t.isNumber(n) && r.toggleClass("md-left", n > e).toggleClass("md-right", e > n)
                }

                function ae(e) {
                    if (!de.tabs.length || !ce.shouldPaginate) return 0;
                    var t = de.tabs[de.tabs.length - 1],
                        n = t.offsetLeft + t.offsetWidth;
                    return e = Math.max(0, e), e = Math.min(n - de.canvas.clientWidth, e)
                }

                function se(e, n) {
                    var r = {
                        colorElement: t.element(de.inkBar)
                    };
                    a.attach(e, n, r)
                }
                var ce = this,
                    le = !1,
                    de = V(),
                    ue = [],
                    me = !1,
                    fe = !1;
                g("stretchTabs", b), W("focusIndex", x, ce.selectedIndex || 0), W("offsetLeft", w, 0), W("hasContent", C, !1), W("maxTabWidth", y, G()), W("shouldPaginate", M, !1), v("noInkBar", I), v("dynamicHeight", R), v("noPagination"), v("swipeContent"), v("noDisconnect"), v("autoselect"), v("centerTabs", E, !1), v("enableDisconnect"), ce.scope = e, ce.parent = e.$parent, ce.tabs = [], ce.lastSelectedIndex = null, ce.hasFocus = !1, ce.lastClick = !0, ce.shouldCenterTabs = B(), ce.updatePagination = s.debounce(Y, 100), ce.redirectFocus = Z, ce.attachRipple = se, ce.insertTab = L, ce.removeTab = P, ce.select = N, ce.scroll = D, ce.nextPage = _, ce.previousPage = O, ce.keydown = S, ce.canPageForward = F, ce.canPageBack = j, ce.refreshIndex = ne, ce.incrementIndex = J, ce.getTabElementIndex = k, ce.updateInkBarStyles = s.debounce(ie, 100), ce.updateTabOrder = s.debounce(X, 100), m()
            }
            t.module("material.components.tabs").controller("MdTabsController", e), e.$inject = ["$scope", "$element", "$window", "$mdConstant", "$mdTabInkRipple", "$mdUtil", "$animateCss", "$attrs", "$compile", "$mdTheming"]
        }(),
        function() {
            function e() {
                return {
                    scope: {
                        selectedIndex: "=?mdSelected"
                    },
                    template: function(e, t) {
                        return t.$mdTabsTemplate = e.html(), '<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-next-button> <md-tabs-canvas tabindex="0" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" style="max-width: {{ $mdTabsCtrl.maxTabWidth + \'px\' }}" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <div class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </div> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0"> <md-tab-content id="tab-content-{{::tab.id}}" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>';
                    },
                    controller: "MdTabsController",
                    controllerAs: "$mdTabsCtrl",
                    bindToController: !0
                }
            }
            t.module("material.components.tabs").directive("mdTabs", e)
        }(),
        function() {
            function e(e, t) {
                function n(n, r, i, o) {
                    function a() {
                        n.$watch("connected", function(e) {
                            e === !1 ? s() : c()
                        }), n.$on("$destroy", c)
                    }

                    function s() {
                        o.enableDisconnect && t.disconnectScope(l)
                    }

                    function c() {
                        o.enableDisconnect && t.reconnectScope(l)
                    }
                    if (o) {
                        var l = o.enableDisconnect ? n.compileScope.$new() : n.compileScope;
                        return r.html(n.template), e(r.contents())(l), r.on("DOMSubtreeModified", function() {
                            o.updatePagination(), o.updateInkBarStyles()
                        }), t.nextTick(a)
                    }
                }
                return {
                    restrict: "A",
                    link: n,
                    scope: {
                        template: "=mdTabsTemplate",
                        connected: "=?mdConnectedIf",
                        compileScope: "=mdScope"
                    },
                    require: "^?mdTabs"
                }
            }
            t.module("material.components.tabs").directive("mdTabsTemplate", e), e.$inject = ["$compile", "$mdUtil"]
        }(),
        function() {
            t.module("material.core").constant("$MD_THEME_CSS", "md-autocomplete.md-THEME_NAME-theme {  background: '{{background-50}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled] {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-50}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover, .md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab md-icon, .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-primary, .md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  a.md-button.md-THEME_NAME-theme.md-primary.md-raised, a.md-button.md-THEME_NAME-theme.md-primary.md-fab, .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  a.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-raised, .md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-contrast}}';  background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon {    color: '{{background-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }a.md-button.md-THEME_NAME-theme.md-warn, .md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  a.md-button.md-THEME_NAME-theme.md-warn.md-raised, a.md-button.md-THEME_NAME-theme.md-warn.md-fab, .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-700}}'; }  a.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }a.md-button.md-THEME_NAME-theme.md-accent, .md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-accent.md-raised, a.md-button.md-THEME_NAME-theme.md-accent.md-fab, .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-700}}'; }  a.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }a.md-button.md-THEME_NAME-theme[disabled], a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], a.md-button.md-THEME_NAME-theme.md-accent[disabled], a.md-button.md-THEME_NAME-theme.md-warn[disabled], .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}';  cursor: not-allowed; }  a.md-button.md-THEME_NAME-theme[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon, .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }a.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }md-card.md-THEME_NAME-theme {  background-color: '{{background-color}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{background-300}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }md-chips.md-THEME_NAME-theme .md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme .md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme .md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-color}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  color: '{{foreground-1}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-hue-1}}';  color: '{{foreground-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-THEME_NAME-theme .md-calendar-date.md-focus .md-calendar-date-selection-indicator {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator, .md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled, .md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{foreground-3}}'; }/** Theme styles for mdDatepicker. */md-datepicker.md-THEME_NAME-theme {  background: '{{background-color}}'; }.md-THEME_NAME-theme .md-datepicker-input {  color: '{{background-contrast}}';  background: '{{background-color}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder, .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{background-300}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-500}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-500}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-300}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  fill: '{{primary-500}}'; }.md-THEME_NAME-theme .md-datepicker-calendar, .md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  background: '{{background-color}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme ng-messages :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-messages] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme data-ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme x-ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [data-ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [x-ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-message-exp] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [data-ng-message-exp] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [x-ng-message-exp] :not(.md-char-counter) {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid.md-input-focused label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], md-input-container.md-THEME_NAME-theme .md-input [disabled] {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-3}}' 0%, '{{foreground-3}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-3}}' 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item > .md-avatar-icon {  background-color: '{{foreground-3}}';  color: '{{background-color}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-list.md-THEME_NAME-theme md-list-item button {  background-color: '{{background-color}}'; }  md-list.md-THEME_NAME-theme md-list-item button.md-button:not([disabled]):hover {    background-color: '{{background-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{foreground-4}}'; }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu.md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover, md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{foreground-2}}'; }md-menu-content.md-THEME_NAME-theme .md-menu.md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-color}}';  color: '{{foreground-1}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{primary-contrast}}'; }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled], md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple {  color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple, md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple {  color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple {  color: '{{warn-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked:not([disabled]).md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, '{{foreground-3}}' 0%, '{{foreground-3}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-3}}' 100%); }md-select.md-THEME_NAME-theme .md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme.ng-invalid.ng-dirty .md-select-value {  color: '{{warn-500}}' !important;  border-bottom-color: '{{warn-500}}' !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-option[disabled] {  color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  color: '{{primary-500}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    color: '{{primary-600}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    color: '{{accent-500}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      color: '{{accent-600}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-ink-ripple {  color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple {  color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple {  color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-toast.md-THEME_NAME-theme {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled], md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon, md-tabs.md-THEME_NAME-theme .md-tab.md-focused, md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }");
        }()
    }(window, window.angular),
    function(e, t) {
        "use strict";

        function n(e) {
            if (!("clientX" in e || "clientY" in e)) {
                var t = e.touches || e.originalEvent.touches;
                t && t.length && (e.clientX = t[0].clientX, e.clientY = t[0].clientY), e.preventDefault()
            }
        }

        function r(e) {
            if (e = e[0], e.previousElementSibling) return t.element(e.previousElementSibling);
            for (var n = e.previousSibling; null != n && 1 != n.nodeType;) n = n.previousSibling;
            return t.element(n)
        }

        function i(e, t) {
            var n = r(e);
            n.length > 0 ? n.after(t) : e.parent().prepend(t)
        }

        function o(e, n) {
            return e instanceof t.element && (e = e[0]), null !== c ? e[c](n) : void 0
        }
        var a = t.module("angular-sortable-view", []);
        a.directive("svRoot", [function() {
            function e(e, t, n) {
                return n ? e.x - t.x < 0 : e.y - t.y < 0
            }

            function t(e) {
                return a[e]
            }

            function n(e) {
                delete a[e]
            }
            var r, a = Object.create(null);
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", "$interpolate", "$parse", function(s, c, l, d) {
                    var u = l(c.svRoot)(s) || s.$id;
                    a[u] || (a[u] = []);
                    var m, f, h, p, g, v, $ = !1,
                        b = d(c.svOnSort);
                    c.svOnStart = c.$$element[0].attributes["sv-on-start"], c.svOnStart = c.svOnStart && c.svOnStart.value, c.svOnStop = c.$$element[0].attributes["sv-on-stop"], c.svOnStop = c.svOnStop && c.svOnStop.value;
                    var E = d(c.svOnStart),
                        y = d(c.svOnStop);
                    if (this.sortingInProgress = function() {
                            return r
                        }, c.svGrid) {
                        if ($ = "true" === c.svGrid ? !0 : "false" === c.svGrid ? !1 : null, null === $) throw "Invalid value of sv-grid attribute"
                    } else s.$watchCollection(function() {
                        return t(u)
                    }, function(e) {
                        $ = !1;
                        var t = e.filter(function(e) {
                                return !e.container
                            }).map(function(e) {
                                return {
                                    part: e.getPart().id,
                                    y: e.element[0].getBoundingClientRect().top
                                }
                            }),
                            n = Object.create(null);
                        t.forEach(function(e) {
                            n[e.part] ? n[e.part].push(e.y) : n[e.part] = [e.y]
                        }), Object.keys(n).forEach(function(e) {
                            n[e].sort(), n[e].forEach(function(t, r) {
                                r < n[e].length - 1 && t > 0 && t === n[e][r + 1] && ($ = !0)
                            })
                        })
                    });
                    this.$moveUpdate = function(n, a, c, l, d, b, y) {
                        var M = c[0].getBoundingClientRect();
                        "element" === n.tolerance && (a = {
                            x: ~~(M.left + M.width / 2),
                            y: ~~(M.top + M.height / 2)
                        }), r = !0, m = [], f || (d ? (f = d.clone(), f.removeClass("ng-hide")) : (f = l.clone(), f.addClass("sv-visibility-hidden"), f.addClass("sv-placeholder"), f.css({
                            height: M.height + "px",
                            width: M.width + "px"
                        })), l.after(f), l.addClass("ng-hide"), g = l, h = n, p = c, E(s, {
                            $helper: {
                                element: p
                            },
                            $part: b.model(b.scope),
                            $index: y,
                            $item: b.model(b.scope)[y]
                        }), s.$root && s.$root.$$phase || s.$apply()), p[0].reposition({
                            x: a.x + document.body.scrollLeft - a.offset.x * M.width,
                            y: a.y + document.body.scrollTop - a.offset.y * M.height
                        }), t(u).forEach(function(t, r) {
                            if (null == n.containment || o(t.element, n.containment) || o(t.element, n.containment + " *")) {
                                var i = t.element[0].getBoundingClientRect(),
                                    s = {
                                        x: ~~(i.left + i.width / 2),
                                        y: ~~(i.top + i.height / 2)
                                    };
                                t.container || !t.element[0].scrollHeight && !t.element[0].scrollWidth || m.push({
                                    element: t.element,
                                    q: (s.x - a.x) * (s.x - a.x) + (s.y - a.y) * (s.y - a.y),
                                    view: t.getPart(),
                                    targetIndex: t.getIndex(),
                                    after: e(s, a, $)
                                }), t.container && !t.element[0].querySelector("[sv-element]:not(.sv-placeholder):not(.sv-source)") && m.push({
                                    element: t.element,
                                    q: (s.x - a.x) * (s.x - a.x) + (s.y - a.y) * (s.y - a.y),
                                    view: t.getPart(),
                                    targetIndex: 0,
                                    container: !0
                                })
                            }
                        });
                        var C = f[0].getBoundingClientRect(),
                            w = {
                                x: ~~(C.left + C.width / 2),
                                y: ~~(C.top + C.height / 2)
                            };
                        m.push({
                            q: (w.x - a.x) * (w.x - a.x) + (w.y - a.y) * (w.y - a.y),
                            element: f,
                            placeholder: !0
                        }), m.sort(function(e, t) {
                            return e.q - t.q
                        }), m.forEach(function(e, t) {
                            0 !== t || e.placeholder || e.container ? 0 === t && e.container ? (v = e, e.element.append(f)) : e.element.removeClass("sv-candidate") : (v = e, e.element.addClass("sv-candidate"), e.after ? e.element.after(f) : i(e.element, f))
                        })
                    }, this.$drop = function(e, t, n) {
                        function i() {
                            if (r = !1, f.remove(), p.remove(), g.removeClass("ng-hide"), m = void 0, f = void 0, n = void 0, p = void 0, g = void 0, y(s, {
                                    $part: e.model(e.scope),
                                    $index: t,
                                    $item: e.model(e.scope)[t]
                                }), v) {
                                v.element.removeClass("sv-candidate");
                                var i = e.model(e.scope).splice(t, 1),
                                    o = v.targetIndex;
                                v.view === e && v.targetIndex > t && o--, v.after && o++, v.view.model(v.view.scope).splice(o, 0, i[0]), (v.view !== e || t !== o) && b(s, {
                                    $partTo: v.view.model(v.view.scope),
                                    $partFrom: e.model(e.scope),
                                    $item: i[0],
                                    $indexTo: o,
                                    $indexFrom: t
                                })
                            }
                            v = void 0, s.$root && s.$root.$$phase || s.$apply()
                        }
                        if (f)
                            if (n.revert) {
                                var o = f[0].getBoundingClientRect(),
                                    a = p[0].getBoundingClientRect(),
                                    c = Math.sqrt(Math.pow(a.top - o.top, 2) + Math.pow(a.left - o.left, 2)),
                                    l = +n.revert * c / 200;
                                l = Math.min(l, +n.revert), ["-webkit-", "-moz-", "-ms-", "-o-", ""].forEach(function(e) {
                                    "undefined" != typeof p[0].style[e + "transition"] && (p[0].style[e + "transition"] = "all " + l + "ms ease")
                                }), setTimeout(i, l), p.css({
                                    top: o.top + document.body.scrollTop + "px",
                                    left: o.left + document.body.scrollLeft + "px"
                                })
                            } else i()
                    }, this.addToSortableElements = function(e) {
                        t(u).push(e)
                    }, this.removeFromSortableElements = function(e) {
                        var r = t(u),
                            i = r.indexOf(e);
                        i > -1 && (r.splice(i, 1), 0 === r.length && n(u))
                    }
                }]
            }
        }]), a.directive("svPart", ["$parse", function(e) {
            return {
                restrict: "A",
                require: "^svRoot",
                controller: ["$scope", function(e) {
                    e.$ctrl = this, this.getPart = function() {
                        return e.part
                    }, this.$drop = function(t, n) {
                        e.$sortableRoot.$drop(e.part, t, n)
                    }
                }],
                scope: !0,
                link: function(t, n, r, i) {
                    if (!r.svPart) throw new Error("no model provided");
                    var o = e(r.svPart);
                    if (!o.assign) throw new Error("model not assignable");
                    t.part = {
                        id: t.$id,
                        element: n,
                        model: o,
                        scope: t
                    }, t.$sortableRoot = i;
                    var a = {
                        element: n,
                        getPart: t.$ctrl.getPart,
                        container: !0
                    };
                    i.addToSortableElements(a), t.$on("$destroy", function() {
                        i.removeFromSortableElements(a)
                    })
                }
            }
        }]), a.directive("svElement", ["$parse", function(e) {
            return {
                restrict: "A",
                require: ["^svPart", "^svRoot"],
                controller: ["$scope", function(e) {
                    e.$ctrl = this
                }],
                link: function(r, i, o, a) {
                    function s(s) {
                        function c(e) {
                            n(e), f || (i.parent().prepend(g), f = !0), a[1].$moveUpdate(d, {
                                x: e.clientX,
                                y: e.clientY,
                                offset: b
                            }, g, i, m, a[0].getPart(), r.$index)
                        }
                        if (n(s), !a[1].sortingInProgress() && (0 == s.button || "mousedown" !== s.type)) {
                            f = !1;
                            var d = e(o.svElement)(r);
                            if (d = t.extend({}, {
                                    tolerance: "pointer",
                                    revert: 200,
                                    containment: "html"
                                }, d), d.containment) var p = l.call(i, d.containment)[0].getBoundingClientRect();
                            var g, v = i,
                                $ = i[0].getBoundingClientRect();
                            u || (u = a[0].helper), m || (m = a[0].placeholder), u ? (g = u.clone(), g.removeClass("ng-hide"), g.css({
                                left: $.left + document.body.scrollLeft + "px",
                                top: $.top + document.body.scrollTop + "px"
                            }), v.addClass("sv-visibility-hidden")) : (g = v.clone(), g.addClass("sv-helper").css({
                                left: $.left + document.body.scrollLeft + "px",
                                top: $.top + document.body.scrollTop + "px",
                                width: $.width + "px"
                            })), g[0].reposition = function(e) {
                                var t = e.x,
                                    n = e.y,
                                    r = g[0].getBoundingClientRect(),
                                    i = document.body;
                                p && (n < p.top + i.scrollTop && (n = p.top + i.scrollTop), n + r.height > p.top + i.scrollTop + p.height && (n = p.top + i.scrollTop + p.height - r.height), t < p.left + i.scrollLeft && (t = p.left + i.scrollLeft), t + r.width > p.left + i.scrollLeft + p.width && (t = p.left + i.scrollLeft + p.width - r.width)), this.style.left = t - i.scrollLeft + "px", this.style.top = n - i.scrollTop + "px"
                            };
                            var b = {
                                x: (s.clientX - $.left) / $.width,
                                y: (s.clientY - $.top) / $.height
                            };
                            h.addClass("sv-sorting-in-progress"), h.on("mousemove touchmove", c).on("mouseup touchend touchcancel", function E(e) {
                                h.off("mousemove touchmove", c), h.off("mouseup touchend touchcancel", E), h.removeClass("sv-sorting-in-progress"), f && a[0].$drop(r.$index, d), i.removeClass("sv-visibility-hidden")
                            })
                        }
                    }
                    var c = {
                        element: i,
                        getPart: a[0].getPart,
                        getIndex: function() {
                            return r.$index
                        }
                    };
                    a[1].addToSortableElements(c), r.$on("$destroy", function() {
                        a[1].removeFromSortableElements(c)
                    });
                    var d = i;
                    d.on("mousedown touchstart", s), r.$watch("$ctrl.handle", function(e) {
                        e && (d.off("mousedown touchstart", s), d = e, d.on("mousedown touchstart", s))
                    });
                    var u;
                    r.$watch("$ctrl.helper", function(e) {
                        e && (u = e)
                    });
                    var m;
                    r.$watch("$ctrl.placeholder", function(e) {
                        e && (m = e)
                    });
                    var f, h = (t.element(document.body), t.element(document.documentElement))
                }
            }
        }]), a.directive("svHandle", function() {
            return {
                require: "?^svElement",
                link: function(e, t, n, r) {
                    r && (r.handle = t.add(r.handle))
                }
            }
        }), a.directive("svHelper", function() {
            return {
                require: ["?^svPart", "?^svElement"],
                link: function(e, t, n, r) {
                    t.addClass("sv-helper").addClass("ng-hide"), r[1] ? r[1].helper = t : r[0] && (r[0].helper = t)
                }
            }
        }), a.directive("svPlaceholder", function() {
            return {
                require: ["?^svPart", "?^svElement"],
                link: function(e, t, n, r) {
                    t.addClass("sv-placeholder").addClass("ng-hide"), r[1] ? r[1].placeholder = t : r[0] && (r[0].placeholder = t)
                }
            }
        }), t.element(document.head).append(["<style>.sv-helper{position: fixed !important;z-index: 99999;margin: 0 !important;}.sv-candidate{}.sv-placeholder{}.sv-sorting-in-progress{-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.sv-visibility-hidden{visibility: hidden !important;opacity: 0 !important;}</style>"].join(""));
        var s = document.documentElement,
            c = s.matches ? "matches" : s.matchesSelector ? "matchesSelector" : s.webkitMatches ? "webkitMatches" : s.webkitMatchesSelector ? "webkitMatchesSelector" : s.msMatches ? "msMatches" : s.msMatchesSelector ? "msMatchesSelector" : s.mozMatches ? "mozMatches" : s.mozMatchesSelector ? "mozMatchesSelector" : null;
        if (null == c) throw "This browser doesn't support the HTMLElement.matches method";
        var l = t.element.prototype.closest || function(e) {
            for (var n = this[0].parentNode; n !== document.documentElement && !n[c](e);) n = n.parentNode;
            return n[c](e) ? t.element(n) : t.element()
        };
        "function" != typeof t.element.prototype.add && (t.element.prototype.add = function(e) {
            var n, r = t.element();
            for (e = t.element(e), n = 0; n < this.length; n++) r.push(this[n]);
            for (n = 0; n < e.length; n++) r.push(e[n]);
            return r
        })
    }(window, window.angular),
    /**
     * @license AngularJS v1.4.14
     * (c) 2010-2015 Google, Inc. http://angularjs.org
     * License: MIT
     */
    function(e, t, n) {
        "use strict";

        function r(e) {
            function t(e, t) {
                return e ? i(e) ? e.indexOf(t) >= 0 : e.hasOwnProperty(t) : void 0
            }
            return ["$animate", function(e) {
                return {
                    restrict: "AE",
                    transclude: "element",
                    terminal: !0,
                    require: "^^ngMessages",
                    link: function(n, r, o, a, s) {
                        var c, l = r[0],
                            d = o.ngMessage || o.when,
                            u = o.ngMessageExp || o.whenExp,
                            m = function(e) {
                                c = e ? i(e) ? e : e.split(/[\s,]+/) : null, a.reRender()
                            };
                        u ? (m(n.$eval(u)), n.$watchCollection(u, m)) : m(d);
                        var f, h;
                        a.register(l, h = {
                            test: function(e) {
                                return t(c, e)
                            },
                            attach: function() {
                                f || s(n, function(t) {
                                    e.enter(t, null, r), f = t;
                                    var n = f.$$attachId = a.getAttachId();
                                    f.on("$destroy", function() {
                                        f && f.$$attachId === n && (a.deregister(l), h.detach())
                                    })
                                })
                            },
                            detach: function() {
                                if (f) {
                                    var t = f;
                                    f = null, e.leave(t)
                                }
                            }
                        })
                    }
                }
            }]
        }
        var i = t.isArray,
            o = t.forEach,
            a = t.isString,
            s = t.element;
        t.module("ngMessages", []).directive("ngMessages", ["$animate", function(e) {
            function t(e, t) {
                return a(t) && 0 === t.length || n(e.$eval(t))
            }

            function n(e) {
                return a(e) ? e.length : !!e
            }
            var r = "ng-active",
                i = "ng-inactive";
            return {
                require: "ngMessages",
                restrict: "AE",
                controller: ["$element", "$scope", "$attrs", function(a, s, c) {
                    function l(e, t) {
                        for (var n = t, r = []; n && n !== e;) {
                            var i = n.$$ngMessageNode;
                            if (i && i.length) return v[i];
                            n.childNodes.length && -1 == r.indexOf(n) ? (r.push(n), n = n.childNodes[n.childNodes.length - 1]) : n.previousSibling ? n = n.previousSibling : (n = n.parentNode, r.push(n))
                        }
                    }

                    function d(e, t, n) {
                        var r = v[n];
                        if (m.head) {
                            var i = l(e, t);
                            i ? (r.next = i.next, i.next = r) : (r.next = m.head, m.head = r)
                        } else m.head = r
                    }

                    function u(e, t, n) {
                        var r = v[n],
                            i = l(e, t);
                        i ? i.next = r.next : m.head = r.next
                    }
                    var m = this,
                        f = 0,
                        h = 0;
                    this.getAttachId = function() {
                        return h++
                    };
                    var p, g, v = this.messages = {};
                    this.render = function(l) {
                        l = l || {}, p = !1, g = l;
                        for (var d = t(s, c.ngMessagesMultiple) || t(s, c.multiple), u = [], f = {}, h = m.head, v = !1, $ = 0; null != h;) {
                            $++;
                            var b = h.message,
                                E = !1;
                            v || o(l, function(e, t) {
                                if (!E && n(e) && b.test(t)) {
                                    if (f[t]) return;
                                    f[t] = !0, E = !0, b.attach()
                                }
                            }), E ? v = !d : u.push(b), h = h.next
                        }
                        o(u, function(e) {
                            e.detach()
                        }), u.length !== $ ? e.setClass(a, r, i) : e.setClass(a, i, r)
                    }, s.$watchCollection(c.ngMessages || c["for"], m.render), a.on("$destroy", function() {
                        o(v, function(e) {
                            e.message.detach()
                        })
                    }), this.reRender = function() {
                        p || (p = !0, s.$evalAsync(function() {
                            p && g && m.render(g)
                        }))
                    }, this.register = function(e, t) {
                        var n = f.toString();
                        v[n] = {
                            message: t
                        }, d(a[0], e, n), e.$$ngMessageNode = n, f++, m.reRender()
                    }, this.deregister = function(e) {
                        var t = e.$$ngMessageNode;
                        delete e.$$ngMessageNode, u(a[0], e, t), delete v[t], m.reRender()
                    }
                }]
            }
        }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function(e, t, n) {
            return {
                restrict: "AE",
                require: "^^ngMessages",
                link: function(r, i, o) {
                    var a = o.ngMessagesInclude || o.src;
                    e(a).then(function(e) {
                        n(e)(r, function(e) {
                            i.after(e);
                            var n = s(t[0].createComment(" ngMessagesInclude: " + a + " "));
                            i.after(n), i.remove()
                        })
                    })
                }
            }
        }]).directive("ngMessage", r("AE")).directive("ngMessageExp", r("A"))
    }(window, window.angular);