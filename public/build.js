!function (e) {
    function t(n) {
        if (a[n]) return a[n].exports;
        var r = a[n] = {i: n, l: !1, exports: {}};
        return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }

    var a = {};
    t.m = e, t.c = a, t.d = function (e, a, n) {
        t.o(e, a) || Object.defineProperty(e, a, {enumerable: !0, get: n})
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t.t = function (e, a) {
        if (1 & a && (e = t(e)), 8 & a) return e;
        if (4 & a && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & a && "string" != typeof e) for (var r in e) t.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, t.n = function (e) {
        var a = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(a, "a", a), a
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "/", t(t.s = 143)
}([function (e, t, a) {
    var n = Math.floor;
    (function (e) {//! moment.js
//! version : 2.28.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
        !function (t, a) {
            e.exports = a()
        }(0, (function () {
            "use strict";

            function t() {
                return yt.apply(null, arguments)
            }

            function r(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function s(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function d(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function i(e) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                for (var t in e) if (d(e, t)) return !1;
                return !0
            }

            function o(e) {
                return void 0 === e
            }

            function u(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function m(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function l(e, t) {
                var a, n = [];
                for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
                return n
            }

            function c(e, t) {
                for (var a in t) d(t, a) && (e[a] = t[a]);
                return d(t, "toString") && (e.toString = t.toString), d(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function h(e, t, a, n) {
                return be(e, t, a, n, !0).utc()
            }

            function M(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), e._pf
            }

            function f(e) {
                if (null == e._isValid) {
                    var t = M(e), a = Yt.call(t.parsedDateParts, (function (e) {
                            return null != e
                        })),
                        n = !isNaN(e._d.getTime()) && 0 > t.overflow && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
                    if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                    e._isValid = n
                }
                return e._isValid
            }

            function L(e) {
                var t = h(NaN);
                return null == e ? M(t).userInvalidated = !0 : c(M(t), e), t
            }

            function y(e, t) {
                var a, n, r;
                if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = M(t)), o(t._locale) || (e._locale = t._locale), 0 < Tt.length) for (a = 0; a < Tt.length; a++) o(r = t[n = Tt[a]]) || (e[n] = r);
                return e
            }

            function Y(e) {
                y(this, e), this._d = new Date(null == e._d ? NaN : e._d.getTime()), this.isValid() || (this._d = new Date(NaN)), !1 === wt && (wt = !0, t.updateOffset(this), wt = !1)
            }

            function k(e) {
                return e instanceof Y || null != e && null != e._isAMomentObject
            }

            function D(e) {
                !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function g(e, a) {
                var n = !0;
                return c((function () {
                    if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                        var r, s, i, o = [];
                        for (s = 0; s < arguments.length; s++) {
                            if (r = "", "object" == typeof arguments[s]) {
                                for (i in r += "\n[" + s + "] ", arguments[0]) d(arguments[0], i) && (r += i + ": " + arguments[0][i] + ", ");
                                r = r.slice(0, -2)
                            } else r = arguments[s];
                            o.push(r)
                        }
                        D(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return a.apply(this, arguments)
                }), a)
            }

            function p(e, a) {
                null != t.deprecationHandler && t.deprecationHandler(e, a), vt[e] || (D(a), vt[e] = !0)
            }

            function T(e) {
                return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function w(e, t) {
                var a, n = c({}, e);
                for (a in t) d(t, a) && (s(e[a]) && s(t[a]) ? (n[a] = {}, c(n[a], e[a]), c(n[a], t[a])) : null == t[a] ? delete n[a] : n[a] = t[a]);
                for (a in e) d(e, a) && !d(t, a) && s(e[a]) && (n[a] = c({}, n[a]));
                return n
            }

            function v(e) {
                null != e && this.set(e)
            }

            function b(e, t, a) {
                var n = "" + pt(e), r = t - n.length;
                return (0 <= e ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
            }

            function S(e, t, a, n) {
                var r = n;
                "string" == typeof n && (r = function () {
                    return this[n]()
                }), e && (_t[e] = r), t && (_t[t[0]] = function () {
                    return b(r.apply(this, arguments), t[1], t[2])
                }), a && (_t[a] = function () {
                    return this.localeData().ordinal(r.apply(this, arguments), e)
                })
            }

            function H(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function j(e, t) {
                return e.isValid() ? (t = x(t, e.localeData()), xt[t] = xt[t] || function (e) {
                    var t, a, n = e.match(Ht);
                    for (t = 0, a = n.length; t < a; t++) n[t] = _t[n[t]] ? _t[n[t]] : H(n[t]);
                    return function (t) {
                        var r, s = "";
                        for (r = 0; r < a; r++) s += T(n[r]) ? n[r].call(t, e) : n[r];
                        return s
                    }
                }(t), xt[t](e)) : e.localeData().invalidDate()
            }

            function x(e, t) {
                function a(e) {
                    return t.longDateFormat(e) || e
                }

                var n = 5;
                for (jt.lastIndex = 0; 0 <= n && jt.test(e);) e = e.replace(jt, a), jt.lastIndex = 0, n -= 1;
                return e
            }

            function _(e, t) {
                var a = e.toLowerCase();
                Ot[a] = Ot[a + "s"] = Ot[t] = e
            }

            function O(e) {
                return "string" == typeof e ? Ot[e] || Ot[e.toLowerCase()] : void 0
            }

            function P(e) {
                var t, a, n = {};
                for (a in e) d(e, a) && ((t = O(a)) && (n[t] = e[a]));
                return n
            }

            function W(e, t) {
                Pt[e] = t
            }

            function E(e) {
                return 0 == e % 4 && 0 != e % 100 || 0 == e % 400
            }

            function A(e) {
                return 0 > e ? gt(e) || 0 : n(e)
            }

            function F(e) {
                var t = +e, a = 0;
                return 0 != t && isFinite(t) && (a = A(t)), a
            }

            function z(e, a) {
                return function (n) {
                    return null == n ? N(this, e) : (R(this, e, n), t.updateOffset(this, a), this)
                }
            }

            function N(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function R(e, t, a) {
                e.isValid() && !isNaN(a) && ("FullYear" === t && E(e.year()) && 1 === e.month() && 29 === e.date() ? (a = F(a), e._d["set" + (e._isUTC ? "UTC" : "") + t](a, e.month(), B(a, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a))
            }

            function J(e, t, a) {
                bt[e] = T(t) ? t : function (e) {
                    return e && a ? a : t
                }
            }

            function C(e, t) {
                return d(bt, e) ? bt[e](t._strict, t._locale) : new RegExp(function (e) {
                    return I(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function (e, t, a, n, r) {
                        return t || a || n || r
                    })))
                }(e))
            }

            function I(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function U(e, t) {
                var a, n = t;
                for ("string" == typeof e && (e = [e]), u(t) && (n = function (e, a) {
                    a[t] = F(e)
                }), a = 0; a < e.length; a++) Zt[e[a]] = n
            }

            function G(e, t) {
                U(e, (function (e, a, n, r) {
                    n._w = n._w || {}, t(e, n._w, n, r)
                }))
            }

            function V(e, t, a) {
                null != t && d(Zt, e) && Zt[e](t, a._a, a, e)
            }

            function B(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var a = function (e, t) {
                    return (e % t + t) % t
                }(t, 12);
                return e += (t - a) / 12, 1 === a ? E(e) ? 29 : 28 : 31 - a % 7 % 2
            }

            function q(e, t, a) {
                var n, r, s, d = e.toLocaleLowerCase();
                if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; 12 > n; ++n) s = h([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(s, "").toLocaleLowerCase();
                return a ? "MMM" === t ? -1 === (r = $t.call(this._shortMonthsParse, d)) ? null : r : -1 === (r = $t.call(this._longMonthsParse, d)) ? null : r : "MMM" === t ? -1 !== (r = $t.call(this._shortMonthsParse, d)) ? r : -1 === (r = $t.call(this._longMonthsParse, d)) ? null : r : -1 !== (r = $t.call(this._longMonthsParse, d)) ? r : -1 === (r = $t.call(this._shortMonthsParse, d)) ? null : r
            }

            function K(e, t) {
                var a;
                if (!e.isValid()) return e;
                if ("string" == typeof t) if (/^\d+$/.test(t)) t = F(t); else if (!u(t = e.localeData().monthsParse(t))) return e;
                return a = Dt(e.date(), B(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
            }

            function $(e) {
                return null == e ? N(this, "Month") : (K(this, e), t.updateOffset(this, !0), this)
            }

            function Z() {
                function e(e, t) {
                    return t.length - e.length
                }

                var t, a, n = [], r = [], s = [];
                for (t = 0; 12 > t; t++) a = h([2e3, t]), n.push(this.monthsShort(a, "")), r.push(this.months(a, "")), s.push(this.months(a, "")), s.push(this.monthsShort(a, ""));
                for (n.sort(e), r.sort(e), s.sort(e), t = 0; 12 > t; t++) n[t] = I(n[t]), r[t] = I(r[t]);
                for (t = 0; 24 > t; t++) s[t] = I(s[t]);
                this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }

            function Q(e) {
                return E(e) ? 366 : 365
            }

            function X(e, t, a, n, r, s, d) {
                var i;
                return 100 > e && 0 <= e ? (i = new Date(e + 400, t, a, n, r, s, d), isFinite(i.getFullYear()) && i.setFullYear(e)) : i = new Date(e, t, a, n, r, s, d), i
            }

            function ee(e) {
                var t, a;
                return 100 > e && 0 <= e ? ((a = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, a)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
            }

            function te(e, t, a) {
                var n = 7 + t - a;
                return -((7 + ee(e, 0, n).getUTCDay() - t) % 7) + n - 1
            }

            function ae(e, t, a, n, r) {
                var s, d, i = 1 + 7 * (t - 1) + (7 + a - n) % 7 + te(e, n, r);
                return 0 >= i ? d = Q(s = e - 1) + i : i > Q(e) ? (s = e + 1, d = i - Q(e)) : (s = e, d = i), {
                    year: s,
                    dayOfYear: d
                }
            }

            function ne(e, t, a) {
                var r, s, d = te(e.year(), t, a), i = n((e.dayOfYear() - d - 1) / 7) + 1;
                return 1 > i ? r = i + re(s = e.year() - 1, t, a) : i > re(e.year(), t, a) ? (r = i - re(e.year(), t, a), s = e.year() + 1) : (s = e.year(), r = i), {
                    week: r,
                    year: s
                }
            }

            function re(e, t, a) {
                var n = te(e, t, a), r = te(e + 1, t, a);
                return (Q(e) - n + r) / 7
            }

            function se(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t))
            }

            function de(e, t, a) {
                var n, r, s, d = e.toLocaleLowerCase();
                if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; 7 > n; ++n) s = h([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(s, "").toLocaleLowerCase();
                return a ? "dddd" === t ? -1 === (r = $t.call(this._weekdaysParse, d)) ? null : r : "ddd" === t ? -1 === (r = $t.call(this._shortWeekdaysParse, d)) ? null : r : -1 === (r = $t.call(this._minWeekdaysParse, d)) ? null : r : "dddd" === t ? -1 !== (r = $t.call(this._weekdaysParse, d)) ? r : -1 !== (r = $t.call(this._shortWeekdaysParse, d)) ? r : -1 === (r = $t.call(this._minWeekdaysParse, d)) ? null : r : "ddd" === t ? -1 !== (r = $t.call(this._shortWeekdaysParse, d)) ? r : -1 !== (r = $t.call(this._weekdaysParse, d)) ? r : -1 === (r = $t.call(this._minWeekdaysParse, d)) ? null : r : -1 !== (r = $t.call(this._minWeekdaysParse, d)) ? r : -1 !== (r = $t.call(this._weekdaysParse, d)) ? r : -1 === (r = $t.call(this._shortWeekdaysParse, d)) ? null : r
            }

            function ie() {
                function e(e, t) {
                    return t.length - e.length
                }

                var t, a, n, r, s, d = [], i = [], o = [], u = [];
                for (t = 0; 7 > t; t++) a = h([2e3, 1]).day(t), n = I(this.weekdaysMin(a, "")), r = I(this.weekdaysShort(a, "")), s = I(this.weekdays(a, "")), d.push(n), i.push(r), o.push(s), u.push(n), u.push(r), u.push(s);
                d.sort(e), i.sort(e), o.sort(e), u.sort(e), this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
            }

            function oe() {
                return this.hours() % 12 || 12
            }

            function ue(e, t) {
                S(e, 0, 0, (function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                }))
            }

            function me(e, t) {
                return t._meridiemParse
            }

            function le(e, t) {
                var a, n = Dt(e.length, t.length);
                for (a = 0; a < n; a += 1) if (e[a] !== t[a]) return a;
                return n
            }

            function ce(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function he(t) {
                var n = null;
                if (void 0 === Ma[t] && void 0 !== e && e && e.exports) try {
                    n = la._abbr, void 0, a(167)("./" + t), Me(n)
                } catch (e) {
                    Ma[t] = null
                }
                return Ma[t]
            }

            function Me(e, t) {
                var a;
                return e && ((a = o(t) ? Le(e) : fe(e, t)) ? la = a : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), la._abbr
            }

            function fe(e, t) {
                if (null !== t) {
                    var a, n = ha;
                    if (t.abbr = e, null != Ma[e]) p("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Ma[e]._config; else if (null != t.parentLocale) if (null != Ma[t.parentLocale]) n = Ma[t.parentLocale]._config; else {
                        if (null == (a = he(t.parentLocale))) return fa[t.parentLocale] || (fa[t.parentLocale] = []), fa[t.parentLocale].push({
                            name: e,
                            config: t
                        }), null;
                        n = a._config
                    }
                    return Ma[e] = new v(w(n, t)), fa[e] && fa[e].forEach((function (e) {
                        fe(e.name, e.config)
                    })), Me(e), Ma[e]
                }
                return delete Ma[e], null
            }

            function Le(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return la;
                if (!r(e)) {
                    if (t = he(e)) return t;
                    e = [e]
                }
                return function (e) {
                    for (var t, a, n, r, s = 0; s < e.length;) {
                        for (t = (r = ce(e[s]).split("-")).length, a = (a = ce(e[s + 1])) ? a.split("-") : null; 0 < t;) {
                            if (n = he(r.slice(0, t).join("-"))) return n;
                            if (a && a.length >= t && le(r, a) >= t - 1) break;
                            t--
                        }
                        s++
                    }
                    return la
                }(e)
            }

            function ye(e) {
                var t, a = e._a;
                return a && -2 === M(e).overflow && (t = 0 > a[Xt] || 11 < a[Xt] ? Xt : 1 > a[ea] || a[ea] > B(a[Qt], a[Xt]) ? ea : 0 > a[ta] || 24 < a[ta] || 24 === a[ta] && (0 !== a[aa] || 0 !== a[na] || 0 !== a[ra]) ? ta : 0 > a[aa] || 59 < a[aa] ? aa : 0 > a[na] || 59 < a[na] ? na : 0 > a[ra] || 999 < a[ra] ? ra : -1, M(e)._overflowDayOfYear && (t < Qt || t > ea) && (t = ea), M(e)._overflowWeeks && -1 === t && (t = sa), M(e)._overflowWeekday && -1 === t && (t = da), M(e).overflow = t), e
            }

            function Ye(e) {
                var t, a, n, r, s, d, i = e._i, o = La.exec(i) || ya.exec(i);
                if (o) {
                    for (M(e).iso = !0, t = 0, a = ka.length; t < a; t++) if (ka[t][1].exec(o[1])) {
                        r = ka[t][0], n = !1 !== ka[t][2];
                        break
                    }
                    if (null == r) return void (e._isValid = !1);
                    if (o[3]) {
                        for (t = 0, a = Da.length; t < a; t++) if (Da[t][1].exec(o[3])) {
                            s = (o[2] || " ") + Da[t][0];
                            break
                        }
                        if (null == s) return void (e._isValid = !1)
                    }
                    if (!n && null != s) return void (e._isValid = !1);
                    if (o[4]) {
                        if (!Ya.exec(o[4])) return void (e._isValid = !1);
                        d = "Z"
                    }
                    e._f = r + (s || "") + (d || ""), we(e)
                } else e._isValid = !1
            }

            function ke(e) {
                var t = parseInt(e, 10);
                return 49 >= t ? 2e3 + t : 999 >= t ? 1900 + t : t
            }

            function De(e) {
                var t, a = pa.exec(function (e) {
                    return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                }(e._i));
                if (a) {
                    if (t = function (e, t, a, n, r, s) {
                        var d = [ke(e), ia.indexOf(t), parseInt(a, 10), parseInt(n, 10), parseInt(r, 10)];
                        return s && d.push(parseInt(s, 10)), d
                    }(a[4], a[3], a[2], a[5], a[6], a[7]), !function (e, t, a) {
                        return !e || ma.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (M(a).weekdayMismatch = !0, a._isValid = !1, !1)
                    }(a[1], t, e)) return;
                    e._a = t, e._tzm = function (e, t, a) {
                        if (e) return Ta[e];
                        if (t) return 0;
                        var n = parseInt(a, 10), r = n % 100;
                        return (n - r) / 100 * 60 + r
                    }(a[8], a[9], a[10]), e._d = ee.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), M(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function ge(e, t, a) {
                return null == e ? null == t ? a : t : e
            }

            function pe(e) {
                var a = new Date(t.now());
                return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()]
            }

            function Te(e) {
                var t, a, n, r, s, d = [];
                if (!e._d) {
                    for (n = pe(e), e._w && null == e._a[ea] && null == e._a[Xt] && function (e) {
                        var t, a, n, r, s, d, i, o, u;
                        null != (t = e._w).GG || null != t.W || null != t.E ? (s = 1, d = 4, a = ge(t.GG, e._a[Qt], ne(Se(), 1, 4).year), n = ge(t.W, 1), (1 > (r = ge(t.E, 1)) || 7 < r) && (o = !0)) : (s = e._locale._week.dow, d = e._locale._week.doy, u = ne(Se(), s, d), a = ge(t.gg, e._a[Qt], u.year), n = ge(t.w, u.week), null == t.d ? null == t.e ? r = s : (r = t.e + s, (0 > t.e || 6 < t.e) && (o = !0)) : (0 > (r = t.d) || 6 < r) && (o = !0)), 1 > n || n > re(a, s, d) ? M(e)._overflowWeeks = !0 : null == o ? (i = ae(a, n, r, s, d), e._a[Qt] = i.year, e._dayOfYear = i.dayOfYear) : M(e)._overflowWeekday = !0
                    }(e), null != e._dayOfYear && (s = ge(e._a[Qt], n[Qt]), (e._dayOfYear > Q(s) || 0 === e._dayOfYear) && (M(e)._overflowDayOfYear = !0), a = ee(s, 0, e._dayOfYear), e._a[Xt] = a.getUTCMonth(), e._a[ea] = a.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = d[t] = n[t];
                    for (; 7 > t; t++) e._a[t] = d[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[ta] && 0 === e._a[aa] && 0 === e._a[na] && 0 === e._a[ra] && (e._nextDay = !0, e._a[ta] = 0), e._d = (e._useUTC ? ee : X).apply(null, d), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ta] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (M(e).weekdayMismatch = !0)
                }
            }

            function we(e) {
                if (e._f !== t.ISO_8601) if (e._f !== t.RFC_2822) {
                    e._a = [], M(e).empty = !0;
                    var a, n, r, s, d, i, o = "" + e._i, u = o.length, m = 0;
                    for (r = x(e._f, e._locale).match(Ht) || [], a = 0; a < r.length; a++) s = r[a], (n = (o.match(C(s, e)) || [])[0]) && (0 < (d = o.substr(0, o.indexOf(n))).length && M(e).unusedInput.push(d), o = o.slice(o.indexOf(n) + n.length), m += n.length), _t[s] ? (n ? M(e).empty = !1 : M(e).unusedTokens.push(s), V(s, n, e)) : e._strict && !n && M(e).unusedTokens.push(s);
                    M(e).charsLeftOver = u - m, 0 < o.length && M(e).unusedInput.push(o), 12 >= e._a[ta] && !0 === M(e).bigHour && 0 < e._a[ta] && (M(e).bigHour = void 0), M(e).parsedDateParts = e._a.slice(0), M(e).meridiem = e._meridiem, e._a[ta] = function (e, t, a) {
                        var n;
                        return null == a ? t : null == e.meridiemHour ? (null == e.isPM || ((n = e.isPM(a)) && 12 > t && (t += 12), n || 12 !== t || (t = 0)), t) : e.meridiemHour(t, a)
                    }(e._locale, e._a[ta], e._meridiem), null !== (i = M(e).era) && (e._a[Qt] = e._locale.erasConvertYear(i, e._a[Qt])), Te(e), ye(e)
                } else De(e); else Ye(e)
            }

            function ve(e) {
                var a = e._i, n = e._f;
                return e._locale = e._locale || Le(e._l), null === a || void 0 === n && "" === a ? L({nullInput: !0}) : ("string" == typeof a && (e._i = a = e._locale.preparse(a)), k(a) ? new Y(ye(a)) : (m(a) ? e._d = a : r(n) ? function (e) {
                    var t, a, n, r, s, d, i = !1;
                    if (0 === e._f.length) return M(e).invalidFormat = !0, void (e._d = new Date(NaN));
                    for (r = 0; r < e._f.length; r++) s = 0, d = !1, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], we(t), f(t) && (d = !0), s += M(t).charsLeftOver, s += 10 * M(t).unusedTokens.length, M(t).score = s, i ? s < n && (n = s, a = t) : (null == n || s < n || d) && (n = s, a = t, d && (i = !0));
                    c(e, a || t)
                }(e) : n ? we(e) : function (e) {
                    var a = e._i;
                    o(a) ? e._d = new Date(t.now()) : m(a) ? e._d = new Date(a.valueOf()) : "string" == typeof a ? function (e) {
                        var a = ga.exec(e._i);
                        null === a ? (Ye(e), !1 === e._isValid && (delete e._isValid, De(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : t.createFromInputFallback(e)))) : e._d = new Date(+a[1])
                    }(e) : r(a) ? (e._a = l(a.slice(0), (function (e) {
                        return parseInt(e, 10)
                    })), Te(e)) : s(a) ? function (e) {
                        if (!e._d) {
                            var t = P(e._i), a = void 0 === t.day ? t.date : t.day;
                            e._a = l([t.year, t.month, a, t.hour, t.minute, t.second, t.millisecond], (function (e) {
                                return e && parseInt(e, 10)
                            })), Te(e)
                        }
                    }(e) : u(a) ? e._d = new Date(a) : t.createFromInputFallback(e)
                }(e), f(e) || (e._d = null), e))
            }

            function be(e, t, a, n, d) {
                var o = {};
                return (!0 === t || !1 === t) && (n = t, t = void 0), (!0 === a || !1 === a) && (n = a, a = void 0), (s(e) && i(e) || r(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = d, o._l = a, o._i = e, o._f = t, o._strict = n, function (e) {
                    var t = new Y(ye(ve(e)));
                    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                }(o)
            }

            function Se(e, t, a, n) {
                return be(e, t, a, n, !1)
            }

            function He(e, t) {
                var a, n;
                if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return Se();
                for (a = t[0], n = 1; n < t.length; ++n) (!t[n].isValid() || t[n][e](a)) && (a = t[n]);
                return a
            }

            function je(e) {
                var t, a, n = !1;
                for (t in e) if (d(e, t) && (-1 === $t.call(ba, t) || null != e[t] && isNaN(e[t]))) return !1;
                for (a = 0; a < ba.length; ++a) if (e[ba[a]]) {
                    if (n) return !1;
                    parseFloat(e[ba[a]]) !== F(e[ba[a]]) && (n = !0)
                }
                return !0
            }

            function xe(e) {
                var t = P(e), a = t.year || 0, n = t.quarter || 0, r = t.month || 0, s = t.week || t.isoWeek || 0,
                    d = t.day || 0, i = t.hour || 0, o = t.minute || 0, u = t.second || 0, m = t.millisecond || 0;
                this._isValid = je(t), this._milliseconds = +m + 1e3 * u + 6e4 * o + 1e3 * i * 60 * 60, this._days = +d + 7 * s, this._months = +r + 3 * n + 12 * a, this._data = {}, this._locale = Le(), this._bubble()
            }

            function _e(e) {
                return e instanceof xe
            }

            function Oe(e) {
                return 0 > e ? -1 * kt(-1 * e) : kt(e)
            }

            function Pe(e, t) {
                S(e, 0, 0, (function () {
                    var e = this.utcOffset(), a = "+";
                    return 0 > e && (e = -e, a = "-"), a + b(~~(e / 60), 2) + t + b(~~e % 60, 2)
                }))
            }

            function We(e, t) {
                var a, n, r = (t || "").match(e);
                return null === r ? null : 0 === (n = 60 * (a = ((r[r.length - 1] || []) + "").match(Sa) || ["-", 0, 0])[1] + F(a[2])) ? 0 : "+" === a[0] ? n : -n
            }

            function Ee(e, a) {
                var n, r;
                return a._isUTC ? (n = a.clone(), r = (k(e) || m(e) ? e.valueOf() : Se(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), t.updateOffset(n, !1), n) : Se(e).local()
            }

            function Ae(e) {
                return -kt(e._d.getTimezoneOffset())
            }

            function Fe() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }

            function ze(e, t) {
                var a, n, r, s = e, i = null;
                return _e(e) ? s = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : u(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (i = Ha.exec(e)) ? (a = "-" === i[1] ? -1 : 1, s = {
                    y: 0,
                    d: F(i[ea]) * a,
                    h: F(i[ta]) * a,
                    m: F(i[aa]) * a,
                    s: F(i[na]) * a,
                    ms: F(Oe(1e3 * i[ra])) * a
                }) : (i = ja.exec(e)) ? (a = "-" === i[1] ? -1 : 1, s = {
                    y: Ne(i[2], a),
                    M: Ne(i[3], a),
                    w: Ne(i[4], a),
                    d: Ne(i[5], a),
                    h: Ne(i[6], a),
                    m: Ne(i[7], a),
                    s: Ne(i[8], a)
                }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (r = function (e, t) {
                    var a;
                    return e.isValid() && t.isValid() ? (t = Ee(t, e), e.isBefore(t) ? a = Re(e, t) : ((a = Re(t, e)).milliseconds = -a.milliseconds, a.months = -a.months), a) : {
                        milliseconds: 0,
                        months: 0
                    }
                }(Se(s.from), Se(s.to)), (s = {}).ms = r.milliseconds, s.M = r.months), n = new xe(s), _e(e) && d(e, "_locale") && (n._locale = e._locale), _e(e) && d(e, "_isValid") && (n._isValid = e._isValid), n
            }

            function Ne(e, t) {
                var a = e && parseFloat(e.replace(",", "."));
                return (isNaN(a) ? 0 : a) * t
            }

            function Re(e, t) {
                var a = {};
                return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
            }

            function Je(e, t) {
                return function (a, n) {
                    var r;
                    return null === n || isNaN(+n) || (p(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = a, a = n, n = r), Ce(this, ze(a, n), e), this
                }
            }

            function Ce(e, a, n, r) {
                var s = a._milliseconds, d = Oe(a._days), i = Oe(a._months);
                e.isValid() && (r = null == r || r, i && K(e, N(e, "Month") + i * n), d && R(e, "Date", N(e, "Date") + d * n), s && e._d.setTime(e._d.valueOf() + s * n), r && t.updateOffset(e, d || i))
            }

            function Ie(e) {
                return "string" == typeof e || e instanceof String
            }

            function Ue(e) {
                return k(e) || m(e) || Ie(e) || u(e) || function (e) {
                    var t = r(e), a = !1;
                    return t && (a = 0 === e.filter((function (t) {
                        return !u(t) && Ie(e)
                    })).length), t && a
                }(e) || function (e) {
                    var t, a, n = s(e) && !i(e), r = !1,
                        o = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
                    for (t = 0; t < o.length; t += 1) a = o[t], r = r || d(e, a);
                    return n && r
                }(e) || null == e
            }

            function Ge(e) {
                var t, a = s(e) && !i(e), n = !1,
                    r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                for (t = 0; t < r.length; t += 1) n = n || d(e, r[t]);
                return a && n
            }

            function Ve(e, t) {
                if (e.date() < t.date()) return -Ve(t, e);
                var a, n = 12 * (t.year() - e.year()) + (t.month() - e.month()), r = e.clone().add(n, "months");
                return 0 > t - r ? a = (t - r) / (r - e.clone().add(n - 1, "months")) : a = (t - r) / (e.clone().add(n + 1, "months") - r), -(n + a) || 0
            }

            function Be(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = Le(e)) && (this._locale = t), this)
            }

            function qe() {
                return this._locale
            }

            function Ke(e, t) {
                return (e % t + t) % t
            }

            function $e(e, t, a) {
                return 100 > e && 0 <= e ? new Date(e + 400, t, a) - Ea : new Date(e, t, a).valueOf()
            }

            function Ze(e, t, a) {
                return 100 > e && 0 <= e ? Date.UTC(e + 400, t, a) - Ea : Date.UTC(e, t, a)
            }

            function Qe(e, t) {
                return t.erasAbbrRegex(e)
            }

            function Xe() {
                var e, t, a = [], n = [], r = [], s = [], d = this.eras();
                for (e = 0, t = d.length; e < t; ++e) n.push(I(d[e].name)), a.push(I(d[e].abbr)), r.push(I(d[e].narrow)), s.push(I(d[e].name)), s.push(I(d[e].abbr)), s.push(I(d[e].narrow));
                this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function et(e, t) {
                S(0, [e, e.length], 0, t)
            }

            function tt(e, t, a, n, r) {
                var s;
                return null == e ? ne(this, n, r).year : (t > (s = re(e, n, r)) && (t = s), at.call(this, e, t, a, n, r))
            }

            function at(e, t, a, n, r) {
                var s = ae(e, t, a, n, r), d = ee(s.year, 0, s.dayOfYear);
                return this.year(d.getUTCFullYear()), this.month(d.getUTCMonth()), this.date(d.getUTCDate()), this
            }

            function nt(e, t) {
                t[ra] = F(1e3 * ("0." + e))
            }

            function rt(e) {
                return e
            }

            function st(e, t, a, n) {
                var r = Le(), s = h().set(n, t);
                return r[a](s, e)
            }

            function dt(e, t, a) {
                if (u(e) && (t = e, e = void 0), e = e || "", null != t) return st(e, t, a, "month");
                var n, r = [];
                for (n = 0; 12 > n; n++) r[n] = st(e, n, a, "month");
                return r
            }

            function it(e, t, a, n) {
                "boolean" == typeof e ? (u(t) && (a = t, t = void 0), t = t || "") : (a = t = e, e = !1, u(t) && (a = t, t = void 0), t = t || "");
                var r, s = Le(), d = e ? s._week.dow : 0, i = [];
                if (null != a) return st(t, (a + d) % 7, n, "day");
                for (r = 0; 7 > r; r++) i[r] = st(t, (r + d) % 7, n, "day");
                return i
            }

            function ot(e, t, a, n) {
                var r = ze(t, a);
                return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
            }

            function ut(e) {
                return 0 > e ? n(e) : gt(e)
            }

            function mt(e) {
                return 4800 * e / 146097
            }

            function lt(e) {
                return 146097 * e / 4800
            }

            function ct(e) {
                return function () {
                    return this.as(e)
                }
            }

            function ht(e) {
                return function () {
                    return this.isValid() ? this._data[e] : NaN
                }
            }

            function Mt(e, t, a, n, r) {
                return r.relativeTime(t || 1, !!a, e, n)
            }

            function ft(e) {
                return (0 < e) - (0 > e) || +e
            }

            function Lt() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, a, n, r, s, d, i, o = un(this._milliseconds) / 1e3, u = un(this._days), m = un(this._months),
                    l = this.asSeconds();
                return l ? (e = A(o / 60), t = A(e / 60), o %= 60, e %= 60, a = A(m / 12), m %= 12, n = o ? o.toFixed(3).replace(/\.?0+$/, "") : "", r = 0 > l ? "-" : "", s = ft(this._months) === ft(l) ? "" : "-", d = ft(this._days) === ft(l) ? "" : "-", i = ft(this._milliseconds) === ft(l) ? "" : "-", r + "P" + (a ? s + a + "Y" : "") + (m ? s + m + "M" : "") + (u ? d + u + "D" : "") + (t || e || o ? "T" : "") + (t ? i + t + "H" : "") + (e ? i + e + "M" : "") + (o ? i + n + "S" : "")) : "P0D"
            }

            var yt, Yt, kt = Math.round, Dt = Math.min, gt = Math.ceil, pt = Math.abs;
            Yt = Array.prototype.some ? Array.prototype.some : function (e) {
                var t, a = Object(this), n = a.length >>> 0;
                for (t = 0; t < n; t++) if (t in a && e.call(this, a[t], t, a)) return !0;
                return !1
            };
            var Tt = t.momentProperties = [], wt = !1, vt = {};
            t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
            var bt, St = Object.keys ? Object.keys : function (e) {
                    var t, a = [];
                    for (t in e) d(e, t) && a.push(t);
                    return a
                },
                Ht = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                jt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, xt = {}, _t = {}, Ot = {}, Pt = {}, Wt = /\d/,
                Et = /\d\d/, At = /\d{3}/, Ft = /\d{4}/, zt = /[+-]?\d{6}/, Nt = /\d\d?/, Rt = /\d\d\d\d?/,
                Jt = /\d\d\d\d\d\d?/, Ct = /\d{1,3}/, It = /\d{1,4}/, Ut = /[+-]?\d{1,6}/, Gt = /\d+/, Vt = /[+-]?\d+/,
                Bt = /Z|[+-]\d\d:?\d\d/gi, qt = /Z|[+-]\d\d(?::?\d\d)?/gi,
                Kt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
            bt = {};
            var $t, Zt = {}, Qt = 0, Xt = 1, ea = 2, ta = 3, aa = 4, na = 5, ra = 6, sa = 7, da = 8;
            $t = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1
            }, S("M", ["MM", 2], "Mo", (function () {
                return this.month() + 1
            })), S("MMM", 0, 0, (function (e) {
                return this.localeData().monthsShort(this, e)
            })), S("MMMM", 0, 0, (function (e) {
                return this.localeData().months(this, e)
            })), _("month", "M"), W("month", 8), J("M", Nt), J("MM", Nt, Et), J("MMM", (function (e, t) {
                return t.monthsShortRegex(e)
            })), J("MMMM", (function (e, t) {
                return t.monthsRegex(e)
            })), U(["M", "MM"], (function (e, t) {
                t[Xt] = F(e) - 1
            })), U(["MMM", "MMMM"], (function (e, t, a, n) {
                var r = a._locale.monthsParse(e, n, a._strict);
                null == r ? M(a).invalidMonth = e : t[Xt] = r
            }));
            var ia = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                oa = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
            S("Y", 0, 0, (function () {
                var e = this.year();
                return 9999 >= e ? b(e, 4) : "+" + e
            })), S(0, ["YY", 2], 0, (function () {
                return this.year() % 100
            })), S(0, ["YYYY", 4], 0, "year"), S(0, ["YYYYY", 5], 0, "year"), S(0, ["YYYYYY", 6, !0], 0, "year"), _("year", "y"), W("year", 1), J("Y", Vt), J("YY", Nt, Et), J("YYYY", It, Ft), J("YYYYY", Ut, zt), J("YYYYYY", Ut, zt), U(["YYYYY", "YYYYYY"], Qt), U("YYYY", (function (e, a) {
                a[Qt] = 2 === e.length ? t.parseTwoDigitYear(e) : F(e)
            })), U("YY", (function (e, a) {
                a[Qt] = t.parseTwoDigitYear(e)
            })), U("Y", (function (e, t) {
                t[Qt] = parseInt(e, 10)
            })), t.parseTwoDigitYear = function (e) {
                return F(e) + (68 < F(e) ? 1900 : 2e3)
            };
            var ua = z("FullYear", !0);
            S("w", ["ww", 2], "wo", "week"), S("W", ["WW", 2], "Wo", "isoWeek"), _("week", "w"), _("isoWeek", "W"), W("week", 5), W("isoWeek", 5), J("w", Nt), J("ww", Nt, Et), J("W", Nt), J("WW", Nt, Et), G(["w", "ww", "W", "WW"], (function (e, t, a, n) {
                t[n.substr(0, 1)] = F(e)
            })), S("d", 0, "do", "day"), S("dd", 0, 0, (function (e) {
                return this.localeData().weekdaysMin(this, e)
            })), S("ddd", 0, 0, (function (e) {
                return this.localeData().weekdaysShort(this, e)
            })), S("dddd", 0, 0, (function (e) {
                return this.localeData().weekdays(this, e)
            })), S("e", 0, 0, "weekday"), S("E", 0, 0, "isoWeekday"), _("day", "d"), _("weekday", "e"), _("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), J("d", Nt), J("e", Nt), J("E", Nt), J("dd", (function (e, t) {
                return t.weekdaysMinRegex(e)
            })), J("ddd", (function (e, t) {
                return t.weekdaysShortRegex(e)
            })), J("dddd", (function (e, t) {
                return t.weekdaysRegex(e)
            })), G(["dd", "ddd", "dddd"], (function (e, t, a, n) {
                var r = a._locale.weekdaysParse(e, n, a._strict);
                null == r ? M(a).invalidWeekday = e : t.d = r
            })), G(["d", "e", "E"], (function (e, t, a, n) {
                t[n] = F(e)
            }));
            var ma = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            S("H", ["HH", 2], 0, "hour"), S("h", ["hh", 2], 0, oe), S("k", ["kk", 2], 0, (function () {
                return this.hours() || 24
            })), S("hmm", 0, 0, (function () {
                return "" + oe.apply(this) + b(this.minutes(), 2)
            })), S("hmmss", 0, 0, (function () {
                return "" + oe.apply(this) + b(this.minutes(), 2) + b(this.seconds(), 2)
            })), S("Hmm", 0, 0, (function () {
                return "" + this.hours() + b(this.minutes(), 2)
            })), S("Hmmss", 0, 0, (function () {
                return "" + this.hours() + b(this.minutes(), 2) + b(this.seconds(), 2)
            })), ue("a", !0), ue("A", !1), _("hour", "h"), W("hour", 13), J("a", me), J("A", me), J("H", Nt), J("h", Nt), J("k", Nt), J("HH", Nt, Et), J("hh", Nt, Et), J("kk", Nt, Et), J("hmm", Rt), J("hmmss", Jt), J("Hmm", Rt), J("Hmmss", Jt), U(["H", "HH"], ta), U(["k", "kk"], (function (e, t) {
                var a = F(e);
                t[ta] = 24 === a ? 0 : a
            })), U(["a", "A"], (function (e, t, a) {
                a._isPm = a._locale.isPM(e), a._meridiem = e
            })), U(["h", "hh"], (function (e, t, a) {
                t[ta] = F(e), M(a).bigHour = !0
            })), U("hmm", (function (e, t, a) {
                var n = e.length - 2;
                t[ta] = F(e.substr(0, n)), t[aa] = F(e.substr(n)), M(a).bigHour = !0
            })), U("hmmss", (function (e, t, a) {
                var n = e.length - 4, r = e.length - 2;
                t[ta] = F(e.substr(0, n)), t[aa] = F(e.substr(n, 2)), t[na] = F(e.substr(r)), M(a).bigHour = !0
            })), U("Hmm", (function (e, t) {
                var a = e.length - 2;
                t[ta] = F(e.substr(0, a)), t[aa] = F(e.substr(a))
            })), U("Hmmss", (function (e, t) {
                var a = e.length - 4, n = e.length - 2;
                t[ta] = F(e.substr(0, a)), t[aa] = F(e.substr(a, 2)), t[na] = F(e.substr(n))
            }));
            var la, ca = z("Hours", !0), ha = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        w: "a week",
                        ww: "%d weeks",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ia,
                    week: {dow: 0, doy: 6},
                    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekdaysShort: ma,
                    meridiemParse: /[ap]\.?m?\.?/i
                }, Ma = {}, fa = {},
                La = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                ya = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Ya = /Z|[+-]\d\d(?::?\d\d)?/,
                ka = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]],
                Da = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                ga = /^\/?Date\((-?\d+)/i,
                pa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                Ta = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };
            t.createFromInputFallback = g("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function (e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            })), t.ISO_8601 = function () {
            }, t.RFC_2822 = function () {
            };
            var wa = g("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                    var e = Se.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : L()
                })),
                va = g("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                    var e = Se.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : L()
                })), ba = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            Pe("Z", ":"), Pe("ZZ", ""), J("Z", qt), J("ZZ", qt), U(["Z", "ZZ"], (function (e, t, a) {
                a._useUTC = !0, a._tzm = We(qt, e)
            }));
            var Sa = /([\+\-]|\d\d)/gi;
            t.updateOffset = function () {
            };
            var Ha = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                ja = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            ze.fn = xe.prototype, ze.invalid = function () {
                return ze(NaN)
            };
            var xa = Je(1, "add"), _a = Je(-1, "subtract");
            t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Oa = g("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function (e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            })), Pa = 6e4, Wa = 60 * Pa, Ea = 3506328 * Wa;
            S("N", 0, 0, "eraAbbr"), S("NN", 0, 0, "eraAbbr"), S("NNN", 0, 0, "eraAbbr"), S("NNNN", 0, 0, "eraName"), S("NNNNN", 0, 0, "eraNarrow"), S("y", ["y", 1], "yo", "eraYear"), S("y", ["yy", 2], 0, "eraYear"), S("y", ["yyy", 3], 0, "eraYear"), S("y", ["yyyy", 4], 0, "eraYear"), J("N", Qe), J("NN", Qe), J("NNN", Qe), J("NNNN", (function (e, t) {
                return t.erasNameRegex(e)
            })), J("NNNNN", (function (e, t) {
                return t.erasNarrowRegex(e)
            })), U(["N", "NN", "NNN", "NNNN", "NNNNN"], (function (e, t, a, n) {
                var r = a._locale.erasParse(e, n, a._strict);
                r ? M(a).era = r : M(a).invalidEra = e
            })), J("y", Gt), J("yy", Gt), J("yyy", Gt), J("yyyy", Gt), J("yo", (function (e, t) {
                return t._eraYearOrdinalRegex || Gt
            })), U(["y", "yy", "yyy", "yyyy"], Qt), U(["yo"], (function (e, t, a) {
                var n;
                a._locale._eraYearOrdinalRegex && (n = e.match(a._locale._eraYearOrdinalRegex)), t[Qt] = a._locale.eraYearOrdinalParse ? a._locale.eraYearOrdinalParse(e, n) : parseInt(e, 10)
            })), S(0, ["gg", 2], 0, (function () {
                return this.weekYear() % 100
            })), S(0, ["GG", 2], 0, (function () {
                return this.isoWeekYear() % 100
            })), et("gggg", "weekYear"), et("ggggg", "weekYear"), et("GGGG", "isoWeekYear"), et("GGGGG", "isoWeekYear"), _("weekYear", "gg"), _("isoWeekYear", "GG"), W("weekYear", 1), W("isoWeekYear", 1), J("G", Vt), J("g", Vt), J("GG", Nt, Et), J("gg", Nt, Et), J("GGGG", It, Ft), J("gggg", It, Ft), J("GGGGG", Ut, zt), J("ggggg", Ut, zt), G(["gggg", "ggggg", "GGGG", "GGGGG"], (function (e, t, a, n) {
                t[n.substr(0, 2)] = F(e)
            })), G(["gg", "GG"], (function (e, a, n, r) {
                a[r] = t.parseTwoDigitYear(e)
            })), S("Q", 0, "Qo", "quarter"), _("quarter", "Q"), W("quarter", 7), J("Q", Wt), U("Q", (function (e, t) {
                t[Xt] = 3 * (F(e) - 1)
            })), S("D", ["DD", 2], "Do", "date"), _("date", "D"), W("date", 9), J("D", Nt), J("DD", Nt, Et), J("Do", (function (e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            })), U(["D", "DD"], ea), U("Do", (function (e, t) {
                t[ea] = F(e.match(Nt)[0])
            }));
            var Aa = z("Date", !0);
            S("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), _("dayOfYear", "DDD"), W("dayOfYear", 4), J("DDD", Ct), J("DDDD", At), U(["DDD", "DDDD"], (function (e, t, a) {
                a._dayOfYear = F(e)
            })), S("m", ["mm", 2], 0, "minute"), _("minute", "m"), W("minute", 14), J("m", Nt), J("mm", Nt, Et), U(["m", "mm"], aa);
            var Fa = z("Minutes", !1);
            S("s", ["ss", 2], 0, "second"), _("second", "s"), W("second", 15), J("s", Nt), J("ss", Nt, Et), U(["s", "ss"], na);
            var za, Na, Ra = z("Seconds", !1);
            for (S("S", 0, 0, (function () {
                return ~~(this.millisecond() / 100)
            })), S(0, ["SS", 2], 0, (function () {
                return ~~(this.millisecond() / 10)
            })), S(0, ["SSS", 3], 0, "millisecond"), S(0, ["SSSS", 4], 0, (function () {
                return 10 * this.millisecond()
            })), S(0, ["SSSSS", 5], 0, (function () {
                return 100 * this.millisecond()
            })), S(0, ["SSSSSS", 6], 0, (function () {
                return 1e3 * this.millisecond()
            })), S(0, ["SSSSSSS", 7], 0, (function () {
                return 1e4 * this.millisecond()
            })), S(0, ["SSSSSSSS", 8], 0, (function () {
                return 1e5 * this.millisecond()
            })), S(0, ["SSSSSSSSS", 9], 0, (function () {
                return 1e6 * this.millisecond()
            })), _("millisecond", "ms"), W("millisecond", 16), J("S", Ct, Wt), J("SS", Ct, Et), J("SSS", Ct, At), za = "SSSS"; 9 >= za.length; za += "S") J(za, Gt);
            for (za = "S"; 9 >= za.length; za += "S") U(za, nt);
            Na = z("Milliseconds", !1), S("z", 0, 0, "zoneAbbr"), S("zz", 0, 0, "zoneName");
            var Ja = Y.prototype;
            Ja.add = xa, Ja.calendar = function (e, a) {
                1 === arguments.length && (Ue(arguments[0]) ? (e = arguments[0], a = void 0) : Ge(arguments[0]) && (a = arguments[0], e = void 0));
                var n = e || Se(), r = Ee(n, this).startOf("day"), s = t.calendarFormat(this, r) || "sameElse",
                    d = a && (T(a[s]) ? a[s].call(this, n) : a[s]);
                return this.format(d || this.localeData().calendar(s, this, Se(n)))
            }, Ja.clone = function () {
                return new Y(this)
            }, Ja.diff = function (e, t, a) {
                var n, r, s;
                return this.isValid() ? (n = Ee(e, this)).isValid() ? (r = 6e4 * (n.utcOffset() - this.utcOffset()), s = "year" === (t = O(t)) ? Ve(this, n) / 12 : "month" === t ? Ve(this, n) : "quarter" === t ? Ve(this, n) / 3 : "second" === t ? (this - n) / 1e3 : "minute" === t ? (this - n) / 6e4 : "hour" === t ? (this - n) / 36e5 : "day" === t ? (this - n - r) / 864e5 : "week" === t ? (this - n - r) / 6048e5 : this - n, a ? s : A(s)) : NaN : NaN
            }, Ja.endOf = function (e) {
                var a, n;
                return void 0 !== (e = O(e)) && "millisecond" !== e && this.isValid() ? (n = this._isUTC ? Ze : $e, "year" === e ? a = n(this.year() + 1, 0, 1) - 1 : "quarter" === e ? a = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1 : "month" === e ? a = n(this.year(), this.month() + 1, 1) - 1 : "week" === e ? a = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1 : "isoWeek" === e ? a = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1 : "day" === e || "date" === e ? a = n(this.year(), this.month(), this.date() + 1) - 1 : "hour" === e ? (a = this._d.valueOf(), a += Wa - Ke(a + (this._isUTC ? 0 : this.utcOffset() * Pa), Wa) - 1) : "minute" === e ? (a = this._d.valueOf(), a += Pa - Ke(a, Pa) - 1) : "second" === e && (a = this._d.valueOf(), a += 1e3 - Ke(a, 1e3) - 1), this._d.setTime(a), t.updateOffset(this, !0), this) : this
            }, Ja.format = function (e) {
                e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                var a = j(this, e);
                return this.localeData().postformat(a)
            }, Ja.from = function (e, t) {
                return this.isValid() && (k(e) && e.isValid() || Se(e).isValid()) ? ze({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, Ja.fromNow = function (e) {
                return this.from(Se(), e)
            }, Ja.to = function (e, t) {
                return this.isValid() && (k(e) && e.isValid() || Se(e).isValid()) ? ze({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, Ja.toNow = function (e) {
                return this.to(Se(), e)
            }, Ja.get = function (e) {
                return T(this[e = O(e)]) ? this[e]() : this
            }, Ja.invalidAt = function () {
                return M(this).overflow
            }, Ja.isAfter = function (e, t) {
                var a = k(e) ? e : Se(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = O(t) || "millisecond") ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
            }, Ja.isBefore = function (e, t) {
                var a = k(e) ? e : Se(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = O(t) || "millisecond") ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
            }, Ja.isBetween = function (e, t, a, n) {
                var r = k(e) ? e : Se(e), s = k(t) ? t : Se(t);
                return !!(this.isValid() && r.isValid() && s.isValid()) && (("(" === (n = n || "()")[0] ? this.isAfter(r, a) : !this.isBefore(r, a)) && (")" === n[1] ? this.isBefore(s, a) : !this.isAfter(s, a)))
            }, Ja.isSame = function (e, t) {
                var a, n = k(e) ? e : Se(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(t) || "millisecond") ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
            }, Ja.isSameOrAfter = function (e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }, Ja.isSameOrBefore = function (e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }, Ja.isValid = function () {
                return f(this)
            }, Ja.lang = Oa, Ja.locale = Be, Ja.localeData = qe, Ja.max = va, Ja.min = wa, Ja.parsingFlags = function () {
                return c({}, M(this))
            }, Ja.set = function (e, t) {
                if ("object" == typeof e) {
                    var a, n = function (e) {
                        var t, a = [];
                        for (t in e) d(e, t) && a.push({unit: t, priority: Pt[t]});
                        return a.sort((function (e, t) {
                            return e.priority - t.priority
                        })), a
                    }(e = P(e));
                    for (a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit])
                } else if (T(this[e = O(e)])) return this[e](t);
                return this
            }, Ja.startOf = function (e) {
                var a, n;
                return void 0 !== (e = O(e)) && "millisecond" !== e && this.isValid() ? (n = this._isUTC ? Ze : $e, "year" === e ? a = n(this.year(), 0, 1) : "quarter" === e ? a = n(this.year(), this.month() - this.month() % 3, 1) : "month" === e ? a = n(this.year(), this.month(), 1) : "week" === e ? a = n(this.year(), this.month(), this.date() - this.weekday()) : "isoWeek" === e ? a = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)) : "day" === e || "date" === e ? a = n(this.year(), this.month(), this.date()) : "hour" === e ? (a = this._d.valueOf(), a -= Ke(a + (this._isUTC ? 0 : this.utcOffset() * Pa), Wa)) : "minute" === e ? (a = this._d.valueOf(), a -= Ke(a, Pa)) : "second" === e && (a = this._d.valueOf(), a -= Ke(a, 1e3)), this._d.setTime(a), t.updateOffset(this, !0), this) : this
            }, Ja.subtract = _a, Ja.toArray = function () {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, Ja.toObject = function () {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, Ja.toDate = function () {
                return new Date(this.valueOf())
            }, Ja.toISOString = function (e) {
                if (!this.isValid()) return null;
                var t = !0 !== e, a = t ? this.clone().utc() : this;
                return 0 > a.year() || 9999 < a.year() ? j(a, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : T(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", j(a, "Z")) : j(a, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, Ja.inspect = function () {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e, t, a, n = "moment", r = "";
                return this.isLocal() || (n = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", r = "Z"), e = "[" + n + '("]', t = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY", "-MM-DD[T]HH:mm:ss.SSS", a = r + '[")]', this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + a)
            }, "undefined" != typeof Symbol && null != Symbol.for && (Ja[Symbol.for("nodejs.util.inspect.custom")] = function () {
                return "Moment<" + this.format() + ">"
            }), Ja.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
            }, Ja.toString = function () {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, Ja.unix = function () {
                return n(this.valueOf() / 1e3)
            }, Ja.valueOf = function () {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, Ja.creationData = function () {
                return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
            }, Ja.eraName = function () {
                var e, t, a, n = this.localeData().eras();
                for (e = 0, t = n.length; e < t; ++e) {
                    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until) return n[e].name;
                    if (n[e].until <= a && a <= n[e].since) return n[e].name
                }
                return ""
            }, Ja.eraNarrow = function () {
                var e, t, a, n = this.localeData().eras();
                for (e = 0, t = n.length; e < t; ++e) {
                    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until) return n[e].narrow;
                    if (n[e].until <= a && a <= n[e].since) return n[e].narrow
                }
                return ""
            }, Ja.eraAbbr = function () {
                var e, t, a, n = this.localeData().eras();
                for (e = 0, t = n.length; e < t; ++e) {
                    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until) return n[e].abbr;
                    if (n[e].until <= a && a <= n[e].since) return n[e].abbr
                }
                return ""
            }, Ja.eraYear = function () {
                var e, a, n, r, s = this.localeData().eras();
                for (e = 0, a = s.length; e < a; ++e) if (n = s[e].since <= s[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since) return (this.year() - t(s[e].since).year()) * n + s[e].offset;
                return this.year()
            }, Ja.year = ua, Ja.isLeapYear = function () {
                return E(this.year())
            }, Ja.weekYear = function (e) {
                return tt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, Ja.isoWeekYear = function (e) {
                return tt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, Ja.quarter = Ja.quarters = function (e) {
                return null == e ? gt((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }, Ja.month = $, Ja.daysInMonth = function () {
                return B(this.year(), this.month())
            }, Ja.week = Ja.weeks = function (e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }, Ja.isoWeek = Ja.isoWeeks = function (e) {
                var t = ne(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }, Ja.weeksInYear = function () {
                var e = this.localeData()._week;
                return re(this.year(), e.dow, e.doy)
            }, Ja.weeksInWeekYear = function () {
                var e = this.localeData()._week;
                return re(this.weekYear(), e.dow, e.doy)
            }, Ja.isoWeeksInYear = function () {
                return re(this.year(), 1, 4)
            }, Ja.isoWeeksInISOWeekYear = function () {
                return re(this.isoWeekYear(), 1, 4)
            }, Ja.date = Aa, Ja.day = Ja.days = function (e) {
                if (!this.isValid()) return null == e ? NaN : this;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null == e ? t : (e = function (e, t) {
                    return "string" == typeof e ? isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10) : e
                }(e, this.localeData()), this.add(e - t, "d"))
            }, Ja.weekday = function (e) {
                if (!this.isValid()) return null == e ? NaN : this;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }, Ja.isoWeekday = function (e) {
                if (!this.isValid()) return null == e ? NaN : this;
                if (null != e) {
                    var t = function (e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }, Ja.dayOfYear = function (e) {
                var t = kt((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }, Ja.hour = Ja.hours = ca, Ja.minute = Ja.minutes = Fa, Ja.second = Ja.seconds = Ra, Ja.millisecond = Ja.milliseconds = Na, Ja.utcOffset = function (e, a, n) {
                var r, s = this._offset || 0;
                if (!this.isValid()) return null == e ? NaN : this;
                if (null != e) {
                    if ("string" != typeof e) 16 > pt(e) && !n && (e *= 60); else if (null === (e = We(qt, e))) return this;
                    return !this._isUTC && a && (r = Ae(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), s !== e && (!a || this._changeInProgress ? Ce(this, ze(e - s, "m"), 1, !1) : !this._changeInProgress && (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? s : Ae(this)
            }, Ja.utc = function (e) {
                return this.utcOffset(0, e)
            }, Ja.local = function (e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ae(this), "m")), this
            }, Ja.parseZone = function () {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
                    var e = We(Bt, this._i);
                    null == e ? this.utcOffset(0, !0) : this.utcOffset(e)
                }
                return this
            }, Ja.hasAlignedHourOffset = function (e) {
                return !!this.isValid() && (e = e ? Se(e).utcOffset() : 0, 0 == (this.utcOffset() - e) % 60)
            }, Ja.isDST = function () {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, Ja.isLocal = function () {
                return !!this.isValid() && !this._isUTC
            }, Ja.isUtcOffset = function () {
                return !!this.isValid() && this._isUTC
            }, Ja.isUtc = Fe, Ja.isUTC = Fe, Ja.zoneAbbr = function () {
                return this._isUTC ? "UTC" : ""
            }, Ja.zoneName = function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, Ja.dates = g("dates accessor is deprecated. Use date instead.", Aa), Ja.months = g("months accessor is deprecated. Use month instead", $), Ja.years = g("years accessor is deprecated. Use year instead", ua), Ja.zone = g("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function (e, t) {
                return null == e ? -this.utcOffset() : ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
            })), Ja.isDSTShifted = g("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function () {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e, t = {};
                return y(t, this), (t = ve(t))._a ? (e = t._isUTC ? h(t._a) : Se(t._a), this._isDSTShifted = this.isValid() && 0 < function (e, t, a) {
                    var n, r = Dt(e.length, t.length), s = pt(e.length - t.length), d = 0;
                    for (n = 0; n < r; n++) (a && e[n] !== t[n] || !a && F(e[n]) !== F(t[n])) && d++;
                    return d + s
                }(t._a, e.toArray())) : this._isDSTShifted = !1, this._isDSTShifted
            }));
            var Ca = v.prototype;
            Ca.calendar = function (e, t, a) {
                var n = this._calendar[e] || this._calendar.sameElse;
                return T(n) ? n.call(t, a) : n
            }, Ca.longDateFormat = function (e) {
                var t = this._longDateFormat[e], a = this._longDateFormat[e.toUpperCase()];
                return t || !a ? t : (this._longDateFormat[e] = a.match(Ht).map((function (e) {
                    return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
                })).join(""), this._longDateFormat[e])
            }, Ca.invalidDate = function () {
                return this._invalidDate
            }, Ca.ordinal = function (e) {
                return this._ordinal.replace("%d", e)
            }, Ca.preparse = rt, Ca.postformat = rt, Ca.relativeTime = function (e, t, a, n) {
                var r = this._relativeTime[a];
                return T(r) ? r(e, t, a, n) : r.replace(/%d/i, e)
            }, Ca.pastFuture = function (e, t) {
                var a = this._relativeTime[0 < e ? "future" : "past"];
                return T(a) ? a(t) : a.replace(/%s/i, t)
            }, Ca.set = function (e) {
                var t, a;
                for (a in e) d(e, a) && (T(t = e[a]) ? this[a] = t : this["_" + a] = t);
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, Ca.eras = function () {
                var e, a, n, r = this._eras || Le("en")._eras;
                for (e = 0, a = r.length; e < a; ++e) {
                    switch (typeof r[e].since) {
                        case"string":
                            n = t(r[e].since).startOf("day"), r[e].since = n.valueOf()
                    }
                    switch (typeof r[e].until) {
                        case"undefined":
                            r[e].until = 1 / 0;
                            break;
                        case"string":
                            n = t(r[e].until).startOf("day").valueOf(), r[e].until = n.valueOf()
                    }
                }
                return r
            }, Ca.erasParse = function (e, t, a) {
                var n, r, s, d, i, o = this.eras();
                for (e = e.toUpperCase(), n = 0, r = o.length; n < r; ++n) if (s = o[n].name.toUpperCase(), d = o[n].abbr.toUpperCase(), i = o[n].narrow.toUpperCase(), a) switch (t) {
                    case"N":
                    case"NN":
                    case"NNN":
                        if (d === e) return o[n];
                        break;
                    case"NNNN":
                        if (s === e) return o[n];
                        break;
                    case"NNNNN":
                        if (i === e) return o[n]
                } else if (0 <= [s, d, i].indexOf(e)) return o[n]
            }, Ca.erasConvertYear = function (e, a) {
                var n = e.since <= e.until ? 1 : -1;
                return void 0 === a ? t(e.since).year() : t(e.since).year() + (a - e.offset) * n
            }, Ca.erasAbbrRegex = function (e) {
                return d(this, "_erasAbbrRegex") || Xe.call(this), e ? this._erasAbbrRegex : this._erasRegex
            }, Ca.erasNameRegex = function (e) {
                return d(this, "_erasNameRegex") || Xe.call(this), e ? this._erasNameRegex : this._erasRegex
            }, Ca.erasNarrowRegex = function (e) {
                return d(this, "_erasNarrowRegex") || Xe.call(this), e ? this._erasNarrowRegex : this._erasRegex
            }, Ca.months = function (e, t) {
                return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || oa).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
            }, Ca.monthsShort = function (e, t) {
                return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[oa.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, Ca.monthsParse = function (e, t, a) {
                var n, r, s;
                if (this._monthsParseExact) return q.call(this, e, t, a);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; 12 > n; n++) {
                    if (r = h([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(s.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                    if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                    if (!a && this._monthsParse[n].test(e)) return n
                }
            }, Ca.monthsRegex = function (e) {
                return this._monthsParseExact ? (d(this, "_monthsRegex") || Z.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = Kt), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, Ca.monthsShortRegex = function (e) {
                return this._monthsParseExact ? (d(this, "_monthsRegex") || Z.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = Kt), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, Ca.week = function (e) {
                return ne(e, this._week.dow, this._week.doy).week
            }, Ca.firstDayOfYear = function () {
                return this._week.doy
            }, Ca.firstDayOfWeek = function () {
                return this._week.dow
            }, Ca.weekdays = function (e, t) {
                var a = r(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? se(a, this._week.dow) : e ? a[e.day()] : a
            }, Ca.weekdaysMin = function (e) {
                return !0 === e ? se(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }, Ca.weekdaysShort = function (e) {
                return !0 === e ? se(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }, Ca.weekdaysParse = function (e, t, a) {
                var n, r, s;
                if (this._weekdaysParseExact) return de.call(this, e, t, a);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; 7 > n; n++) {
                    if (r = h([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(s.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                    if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                    if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                    if (!a && this._weekdaysParse[n].test(e)) return n
                }
            }, Ca.weekdaysRegex = function (e) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || ie.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Kt), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, Ca.weekdaysShortRegex = function (e) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || ie.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, Ca.weekdaysMinRegex = function (e) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || ie.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Kt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, Ca.isPM = function (e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }, Ca.meridiem = function (e, t, a) {
                return 11 < e ? a ? "pm" : "PM" : a ? "am" : "AM"
            }, Me("en", {
                eras: [{
                    since: "0001-01-01",
                    until: 1 / 0,
                    offset: 1,
                    name: "Anno Domini",
                    narrow: "AD",
                    abbr: "AD"
                }, {since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC"}],
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 === F(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
                }
            }), t.lang = g("moment.lang is deprecated. Use moment.locale instead.", Me), t.langData = g("moment.langData is deprecated. Use moment.localeData instead.", Le);
            var Ia = pt, Ua = ct("ms"), Ga = ct("s"), Va = ct("m"), Ba = ct("h"), qa = ct("d"), Ka = ct("w"),
                $a = ct("M"), Za = ct("Q"), Qa = ct("y"), Xa = ht("milliseconds"), en = ht("seconds"),
                tn = ht("minutes"), an = ht("hours"), nn = ht("days"), rn = ht("months"), sn = ht("years"), dn = kt,
                on = {ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11}, un = pt, mn = xe.prototype;
            return mn.isValid = function () {
                return this._isValid
            }, mn.abs = function () {
                var e = this._data;
                return this._milliseconds = Ia(this._milliseconds), this._days = Ia(this._days), this._months = Ia(this._months), e.milliseconds = Ia(e.milliseconds), e.seconds = Ia(e.seconds), e.minutes = Ia(e.minutes), e.hours = Ia(e.hours), e.months = Ia(e.months), e.years = Ia(e.years), this
            }, mn.add = function (e, t) {
                return ot(this, e, t, 1)
            }, mn.subtract = function (e, t) {
                return ot(this, e, t, -1)
            }, mn.as = function (e) {
                if (!this.isValid()) return NaN;
                var t, a, r = this._milliseconds;
                if ("month" === (e = O(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, a = this._months + mt(t), e) {
                    case"month":
                        return a;
                    case"quarter":
                        return a / 3;
                    case"year":
                        return a / 12
                } else switch (t = this._days + kt(lt(this._months)), e) {
                    case"week":
                        return t / 7 + r / 6048e5;
                    case"day":
                        return t + r / 864e5;
                    case"hour":
                        return 24 * t + r / 36e5;
                    case"minute":
                        return 1440 * t + r / 6e4;
                    case"second":
                        return 86400 * t + r / 1e3;
                    case"millisecond":
                        return n(864e5 * t) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, mn.asMilliseconds = Ua, mn.asSeconds = Ga, mn.asMinutes = Va, mn.asHours = Ba, mn.asDays = qa, mn.asWeeks = Ka, mn.asMonths = $a, mn.asQuarters = Za, mn.asYears = Qa, mn.valueOf = function () {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * F(this._months / 12) : NaN
            }, mn._bubble = function () {
                var e, t, a, n, r, s = this._milliseconds, d = this._days, i = this._months, o = this._data;
                return 0 <= s && 0 <= d && 0 <= i || 0 >= s && 0 >= d && 0 >= i || (s += 864e5 * ut(lt(i) + d), d = 0, i = 0), o.milliseconds = s % 1e3, e = A(s / 1e3), o.seconds = e % 60, t = A(e / 60), o.minutes = t % 60, a = A(t / 60), o.hours = a % 24, d += A(a / 24), i += r = A(mt(d)), d -= ut(lt(r)), n = A(i / 12), i %= 12, o.days = d, o.months = i, o.years = n, this
            }, mn.clone = function () {
                return ze(this)
            }, mn.get = function (e) {
                return e = O(e), this.isValid() ? this[e + "s"]() : NaN
            }, mn.milliseconds = Xa, mn.seconds = en, mn.minutes = tn, mn.hours = an, mn.days = nn, mn.weeks = function () {
                return A(this.days() / 7)
            }, mn.months = rn, mn.years = sn, mn.humanize = function (e, t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var a, n, r = !1, s = on;
                return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (r = e), "object" == typeof t && (s = Object.assign({}, on, t), null != t.s && null == t.ss && (s.ss = t.s - 1)), n = function (e, t, a, n) {
                    var r = ze(e).abs(), s = dn(r.as("s")), d = dn(r.as("m")), i = dn(r.as("h")), o = dn(r.as("d")),
                        u = dn(r.as("M")), m = dn(r.as("w")), l = dn(r.as("y")),
                        c = s <= a.ss && ["s", s] || s < a.s && ["ss", s] || 1 >= d && ["m"] || d < a.m && ["mm", d] || 1 >= i && ["h"] || i < a.h && ["hh", i] || 1 >= o && ["d"] || o < a.d && ["dd", o];
                    return null != a.w && (c = c || 1 >= m && ["w"] || m < a.w && ["ww", m]), (c = c || 1 >= u && ["M"] || u < a.M && ["MM", u] || 1 >= l && ["y"] || ["yy", l])[2] = t, c[3] = 0 < +e, c[4] = n, Mt.apply(null, c)
                }(this, !r, s, a = this.localeData()), r && (n = a.pastFuture(+this, n)), a.postformat(n)
            }, mn.toISOString = Lt, mn.toString = Lt, mn.toJSON = Lt, mn.locale = Be, mn.localeData = qe, mn.toIsoString = g("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Lt), mn.lang = Oa, S("X", 0, 0, "unix"), S("x", 0, 0, "valueOf"), J("x", Vt), J("X", /[+-]?\d+(\.\d{1,3})?/), U("X", (function (e, t, a) {
                a._d = new Date(1e3 * parseFloat(e))
            })), U("x", (function (e, t, a) {
                a._d = new Date(F(e))
            })), t.version = "2.28.0", function (e) {
                yt = e
            }(Se), t.fn = Ja, t.min = function () {
                var e = [].slice.call(arguments, 0);
                return He("isBefore", e)
            }, t.max = function () {
                var e = [].slice.call(arguments, 0);
                return He("isAfter", e)
            }, t.now = function () {
                return Date.now ? Date.now() : +new Date
            }, t.utc = h, t.unix = function (e) {
                return Se(1e3 * e)
            }, t.months = function (e, t) {
                return dt(e, t, "months")
            }, t.isDate = m, t.locale = Me, t.invalid = L, t.duration = ze, t.isMoment = k, t.weekdays = function (e, t, a) {
                return it(e, t, a, "weekdays")
            }, t.parseZone = function () {
                return Se.apply(null, arguments).parseZone()
            }, t.localeData = Le, t.isDuration = _e, t.monthsShort = function (e, t) {
                return dt(e, t, "monthsShort")
            }, t.weekdaysMin = function (e, t, a) {
                return it(e, t, a, "weekdaysMin")
            }, t.defineLocale = fe, t.updateLocale = function (e, t) {
                if (null != t) {
                    var a, n, r = ha;
                    null != Ma[e] && null != Ma[e].parentLocale ? Ma[e].set(w(Ma[e]._config, t)) : (null != (n = he(e)) && (r = n._config), t = w(r, t), null == n && (t.abbr = e), (a = new v(t)).parentLocale = Ma[e], Ma[e] = a), Me(e)
                } else null != Ma[e] && (null == Ma[e].parentLocale ? null != Ma[e] && delete Ma[e] : (Ma[e] = Ma[e].parentLocale, e === Me() && Me(e)));
                return Ma[e]
            }, t.locales = function () {
                return St(Ma)
            }, t.weekdaysShort = function (e, t, a) {
                return it(e, t, a, "weekdaysShort")
            }, t.normalizeUnits = O, t.relativeTimeRounding = function (e) {
                return void 0 === e ? dn : "function" == typeof e && (dn = e, !0)
            }, t.relativeTimeThreshold = function (e, t) {
                return void 0 !== on[e] && (void 0 === t ? on[e] : (on[e] = t, "s" === e && (on.ss = t - 1), !0))
            }, t.calendarFormat = function (e, t) {
                var a = e.diff(t, "days", !0);
                return -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse"
            }, t.prototype = Ja, t.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, t
        }))
    }).call(this, a(166)(e))
}, function (e, t, a) {
    "use strict";

    function n(e) {
        return "[object Array]" === m.call(e)
    }

    function r(e) {
        return void 0 === e
    }

    function s(e) {
        return null !== e && "object" == typeof e
    }

    function d(e) {
        if ("[object Object]" !== m.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
    }

    function i(e) {
        return "[object Function]" === m.call(e)
    }

    function o(e, t) {
        if (null != e) if ("object" != typeof e && (e = [e]), n(e)) for (var a = 0, r = e.length; a < r; a++) t.call(null, e[a], a, e); else for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e)
    }

    var u = a(2), m = Object.prototype.toString;
    e.exports = {
        isArray: n, isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === m.call(e)
        }, isBuffer: function (e) {
            return null !== e && !r(e) && null !== e.constructor && !r(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }, isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }, isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }, isString: function (e) {
            return "string" == typeof e
        }, isNumber: function (e) {
            return "number" == typeof e
        }, isObject: s, isPlainObject: d, isUndefined: r, isDate: function (e) {
            return "[object Date]" === m.call(e)
        }, isFile: function (e) {
            return "[object File]" === m.call(e)
        }, isBlob: function (e) {
            return "[object Blob]" === m.call(e)
        }, isFunction: i, isStream: function (e) {
            return s(e) && i(e.pipe)
        }, isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }, isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        }, forEach: o, merge: function e() {
            function t(t, r) {
                a[r] = d(a[r]) && d(t) ? e(a[r], t) : d(t) ? e({}, t) : n(t) ? t.slice() : t
            }

            for (var a = {}, r = 0, s = arguments.length; r < s; r++) o(arguments[r], t);
            return a
        }, extend: function (e, t, a) {
            return o(t, (function (t, n) {
                e[n] = a && "function" == typeof t ? u(t, a) : t
            })), e
        }, trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }, stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
        }
    }
}, function (e) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var a = Array(arguments.length), n = 0; n < a.length; n++) a[n] = arguments[n];
            return e.apply(t, a)
        }
    }
}, function (e, t, a) {
    "use strict";

    function n(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    var r = a(1);
    e.exports = function (e, t, a) {
        if (!t) return e;
        var s;
        if (a) s = a(t); else if (r.isURLSearchParams(t)) s = t.toString(); else {
            var d = [];
            r.forEach(t, (function (e, t) {
                null == e || (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function (e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), d.push(n(t) + "=" + n(e))
                })))
            })), s = d.join("&")
        }
        if (s) {
            var i = e.indexOf("#");
            -1 !== i && (e = e.slice(0, i)), e += (-1 === e.indexOf("?") ? "?" : "&") + s
        }
        return e
    }
}, function (e) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, a) {
    "use strict";
    (function (t) {
        function n(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }

        var r = a(1), s = a(155), d = {"Content-Type": "application/x-www-form-urlencoded"}, i = {
            adapter: function () {
                var e;
                return "undefined" == typeof XMLHttpRequest ? void 0 !== t && "[object process]" === Object.prototype.toString.call(t) && (e = a(6)) : e = a(6), e
            }(),
            transformRequest: [function (e, t) {
                return s(t, "Accept"), s(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (n(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (n(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function (e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (e) {
                return 200 <= e && 300 > e
            },
            headers: {common: {Accept: "application/json, text/plain, */*"}}
        };
        r.forEach(["delete", "get", "head"], (function (e) {
            i.headers[e] = {}
        })), r.forEach(["post", "put", "patch"], (function (e) {
            i.headers[e] = r.merge(d)
        })), e.exports = i
    }).call(this, a(154))
}, function (e, t, a) {
    "use strict";
    var n = a(1), r = a(156), s = a(158), d = a(3), i = a(159), o = a(162), u = a(163), m = a(7);
    e.exports = function (e) {
        return new Promise((function (t, a) {
            var l = e.data, c = e.headers;
            n.isFormData(l) && delete c["Content-Type"], (n.isBlob(l) || n.isFile(l)) && l.type && delete c["Content-Type"];
            var h = new XMLHttpRequest;
            if (e.auth) {
                var M = e.auth.username || "", f = unescape(encodeURIComponent(e.auth.password)) || "";
                c.Authorization = "Basic " + btoa(M + ":" + f)
            }
            var L = i(e.baseURL, e.url);
            if (h.open(e.method.toUpperCase(), d(L, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h.onreadystatechange = function () {
                if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders" in h ? o(h.getAllResponseHeaders()) : null, s = {
                        data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                        status: h.status,
                        statusText: h.statusText,
                        headers: n,
                        config: e,
                        request: h
                    };
                    r(t, a, s), h = null
                }
            }, h.onabort = function () {
                h && (a(m("Request aborted", e, "ECONNABORTED", h)), h = null)
            }, h.onerror = function () {
                a(m("Network Error", e, null, h)), h = null
            }, h.ontimeout = function () {
                var t = "timeout of " + e.timeout + "ms exceeded";
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), a(m(t, e, "ECONNABORTED", h)), h = null
            }, n.isStandardBrowserEnv()) {
                var y = (e.withCredentials || u(L)) && e.xsrfCookieName ? s.read(e.xsrfCookieName) : void 0;
                y && (c[e.xsrfHeaderName] = y)
            }
            if ("setRequestHeader" in h && n.forEach(c, (function (e, t) {
                void 0 === l && "content-type" === t.toLowerCase() ? delete c[t] : h.setRequestHeader(t, e)
            })), n.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), e.responseType) try {
                h.responseType = e.responseType
            } catch (a) {
                if ("json" !== e.responseType) throw a
            }
            "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function (e) {
                h && (h.abort(), a(e), h = null)
            })), l || (l = null), h.send(l)
        }))
    }
}, function (e, t, a) {
    "use strict";
    var n = a(157);
    e.exports = function (e, t, a, r, s) {
        var d = new Error(e);
        return n(d, t, a, r, s)
    }
}, function (e, t, a) {
    "use strict";
    var n = a(1);
    e.exports = function (e, t) {
        function a(e, t) {
            return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t
        }

        function r(r) {
            n.isUndefined(t[r]) ? !n.isUndefined(e[r]) && (s[r] = a(void 0, e[r])) : s[r] = a(e[r], t[r])
        }

        t = t || {};
        var s = {}, d = ["url", "method", "data"], i = ["headers", "auth", "proxy", "params"],
            o = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
            u = ["validateStatus"];
        n.forEach(d, (function (e) {
            n.isUndefined(t[e]) || (s[e] = a(void 0, t[e]))
        })), n.forEach(i, r), n.forEach(o, (function (r) {
            n.isUndefined(t[r]) ? !n.isUndefined(e[r]) && (s[r] = a(void 0, e[r])) : s[r] = a(void 0, t[r])
        })), n.forEach(u, (function (n) {
            n in t ? s[n] = a(e[n], t[n]) : n in e && (s[n] = a(void 0, e[n]))
        }));
        var m = d.concat(i).concat(o).concat(u), l = Object.keys(e).concat(Object.keys(t)).filter((function (e) {
            return -1 === m.indexOf(e)
        }));
        return n.forEach(l, r), s
    }
}, function (e) {
    "use strict";

    function t(e) {
        this.message = e
    }

    t.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, t.prototype.__CANCEL__ = !0, e.exports = t
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("af", {
            months: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"],
            monthsShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            weekdays: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
            weekdaysShort: ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"],
            weekdaysMin: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"],
            meridiemParse: /vm|nm/i,
            isPM: function (e) {
                return /^nm$/i.test(e)
            },
            meridiem: function (e, t, a) {
                return 12 > e ? a ? "vm" : "VM" : a ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Afrikaans [af]
//! author : Werner Mollentze : https://github.com/wernerm
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
            a = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"},
            n = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && 10 >= e % 100 ? 3 : 11 <= e % 100 ? 4 : 5
            }, r = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, s = function (e) {
                return function (t, a) {
                    var s = n(t), d = r[e][n(t)];
                    return 2 === s && (d = d[a ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            d = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar", {
            months: d,
            monthsShort: d,
            weekdays: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            weekdaysShort: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            weekdaysMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: s("s"),
                ss: s("s"),
                m: s("m"),
                mm: s("m"),
                h: s("h"),
                hh: s("h"),
                d: s("d"),
                dd: s("d"),
                M: s("M"),
                MM: s("M"),
                y: s("y"),
                yy: s("y")
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                    return a[e]
                })).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && 10 >= e % 100 ? 3 : 11 <= e % 100 ? 4 : 5
            }, a = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, n = function (e) {
                return function (n, r) {
                    var s = t(n), d = a[e][t(n)];
                    return 2 === s && (d = d[r ? 0 : 1]), d.replace(/%d/i, n)
                }
            },
            r = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-dz", {
            months: r,
            monthsShort: r,
            weekdays: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            weekdaysShort: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            weekdaysMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: n("s"),
                ss: n("s"),
                m: n("m"),
                mm: n("m"),
                h: n("h"),
                hh: n("h"),
                d: n("d"),
                dd: n("d"),
                M: n("M"),
                MM: n("M"),
                y: n("y"),
                yy: n("y")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 0, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Arabic (Algeria) [ar-dz]
//! author : Amine Roukh: https://github.com/Amine27
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
//! author : Noureddine LOUAHEDJ : https://github.com/noureddinem
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ar-kw", {
            months: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"],
            monthsShort: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"],
            weekdays: ["الأحد", "الإتنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            weekdaysShort: ["احد", "اتنين", "ثلاثاء", "اربعاء", "خميس", "جمعة", "سبت"],
            weekdaysMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 0, doy: 12}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Arabic (Kuwait) [ar-kw]
//! author : Nusret Parlak: https://github.com/nusretparlak
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0"}, a = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && 10 >= e % 100 ? 3 : 11 <= e % 100 ? 4 : 5
            }, n = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, r = function (e) {
                return function (t, r) {
                    var s = a(t), d = n[e][a(t)];
                    return 2 === s && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-ly", {
            months: s,
            monthsShort: s,
            weekdays: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            weekdaysShort: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            weekdaysMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Arabic (Lybia) [ar-ly]
//! author : Ali Hmer: https://github.com/kikoanis
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ar-ma", {
            months: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"],
            monthsShort: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"],
            weekdays: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            weekdaysShort: ["احد", "اثنين", "ثلاثاء", "اربعاء", "خميس", "جمعة", "سبت"],
            weekdaysMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 6, doy: 12}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Arabic (Morocco) [ar-ma]
//! author : ElFadili Yassine : https://github.com/ElFadiliY
//! author : Abdel Said : https://github.com/abdelsaid
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
            a = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"};
        e.defineLocale("ar-sa", {
            months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthsShort: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            weekdays: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            weekdaysShort: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            weekdaysMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                    return a[e]
                })).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Arabic (Saudi Arabia) [ar-sa]
//! author : Suhail Alkowaileet : https://github.com/xsoh
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ar-tn", {
            months: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthsShort: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            weekdays: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            weekdaysShort: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            weekdaysMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale  :  Arabic (Tunisia) [ar-tn]
//! author : Nader Toukabri : https://github.com/naderio
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        e.defineLocale("az", {
            months: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
            monthsShort: ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avq", "sen", "okt", "noy", "dek"],
            weekdays: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
            weekdaysShort: ["Baz", "BzE", "ÇAx", "Çər", "CAx", "Cüm", "Şən"],
            weekdaysMin: ["Bz", "BE", "ÇA", "Çə", "CA", "Cü", "Şə"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "bir neçə saniyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function (e) {
                return 4 > e ? "gecə" : 12 > e ? "səhər" : 17 > e ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (e) {
                if (0 === e) return e + "-ıncı";
                var a = e % 10;
                return e + (t[a] || t[e % 100 - a] || t[100 <= e ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Azerbaijani [az]
//! author : topchiyev : https://github.com/topchiyev
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + function (e, t) {
                var a = e.split("_");
                return 1 == t % 10 && 11 != t % 100 ? a[0] : 2 <= t % 10 && 4 >= t % 10 && (10 > t % 100 || 20 <= t % 100) ? a[1] : a[2]
            }({
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            }[a], +e)
        }

        e.defineLocale("be", {
            months: {
                format: ["студзеня", "лютага", "сакавіка", "красавіка", "траўня", "чэрвеня", "ліпеня", "жніўня", "верасня", "кастрычніка", "лістапада", "снежня"],
                standalone: ["студзень", "люты", "сакавік", "красавік", "травень", "чэрвень", "ліпень", "жнівень", "верасень", "кастрычнік", "лістапад", "снежань"]
            },
            monthsShort: ["студ", "лют", "сак", "крас", "трав", "чэрв", "ліп", "жнів", "вер", "каст", "ліст", "снеж"],
            weekdays: {
                format: ["нядзелю", "панядзелак", "аўторак", "сераду", "чацвер", "пятніцу", "суботу"],
                standalone: ["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"],
                isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: ["нд", "пн", "ат", "ср", "чц", "пт", "сб"],
            weekdaysMin: ["нд", "пн", "ат", "ср", "чц", "пт", "сб"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function () {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "дзень",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function (e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function (e) {
                return 4 > e ? "ночы" : 12 > e ? "раніцы" : 17 > e ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function (e, t) {
                return "M" === t || "d" === t || "DDD" === t || "w" === t || "W" === t ? 2 != e % 10 && 3 != e % 10 || 12 == e % 100 || 13 == e % 100 ? e + "-ы" : e + "-і" : "D" === t ? e + "-га" : e
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Belarusian [be]
//! author : Dmitry Demidov : https://github.com/demidov91
//! author: Praleska: http://praleska.pro/
//! Author : Menelion Elensúle : https://github.com/Oire
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("bg", {
            months: ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"],
            monthsShort: ["яну", "фев", "мар", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"],
            weekdays: ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"],
            weekdaysShort: ["нед", "пон", "вто", "сря", "чет", "пет", "съб"],
            weekdaysMin: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Миналата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Миналия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10, a = e % 100;
                return 0 === e ? e + "-ев" : 0 == a ? e + "-ен" : 10 < a && 20 > a ? e + "-ти" : 1 == t ? e + "-ви" : 2 == t ? e + "-ри" : 7 == t || 8 == t ? e + "-ми" : e + "-ти"
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Krasen Borisov : https://github.com/kraz
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("bm", {
            months: ["Zanwuyekalo", "Fewuruyekalo", "Marisikalo", "Awirilikalo", "Mɛkalo", "Zuwɛnkalo", "Zuluyekalo", "Utikalo", "Sɛtanburukalo", "ɔkutɔburukalo", "Nowanburukalo", "Desanburukalo"],
            monthsShort: ["Zan", "Few", "Mar", "Awi", "Mɛ", "Zuw", "Zul", "Uti", "Sɛt", "ɔku", "Now", "Des"],
            weekdays: ["Kari", "Ntɛnɛn", "Tarata", "Araba", "Alamisa", "Juma", "Sibiri"],
            weekdaysShort: ["Kar", "Ntɛ", "Tar", "Ara", "Ala", "Jum", "Sib"],
            weekdaysMin: ["Ka", "Nt", "Ta", "Ar", "Al", "Ju", "Si"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Bambara [bm]
//! author : Estelle Comment : https://github.com/estellecomment
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০"},
            a = {"১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0"};
        e.defineLocale("bn", {
            months: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
            monthsShort: ["জানু", "ফেব্রু", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্ট", "অক্টো", "নভে", "ডিসে"],
            weekdays: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
            weekdaysShort: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"],
            weekdaysMin: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"],
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function (e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function (e) {
                    return a[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "রাত" === t && 4 <= e || "দুপুর" === t && 5 > e || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function (e) {
                return 4 > e ? "রাত" : 10 > e ? "সকাল" : 17 > e ? "দুপুর" : 20 > e ? "বিকাল" : "রাত"
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Bengali [bn]
//! author : Kaushik Gandhi : https://github.com/kaushikgandhi
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠"},
            a = {"༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0"};
        e.defineLocale("bo", {
            months: ["ཟླ་བ་དང་པོ", "ཟླ་བ་གཉིས་པ", "ཟླ་བ་གསུམ་པ", "ཟླ་བ་བཞི་པ", "ཟླ་བ་ལྔ་པ", "ཟླ་བ་དྲུག་པ", "ཟླ་བ་བདུན་པ", "ཟླ་བ་བརྒྱད་པ", "ཟླ་བ་དགུ་པ", "ཟླ་བ་བཅུ་པ", "ཟླ་བ་བཅུ་གཅིག་པ", "ཟླ་བ་བཅུ་གཉིས་པ"],
            monthsShort: ["ཟླ་1", "ཟླ་2", "ཟླ་3", "ཟླ་4", "ཟླ་5", "ཟླ་6", "ཟླ་7", "ཟླ་8", "ཟླ་9", "ཟླ་10", "ཟླ་11", "ཟླ་12"],
            monthsShortRegex: /^(ཟླ་\d{1,2})/,
            monthsParseExact: !0,
            weekdays: ["གཟའ་ཉི་མ་", "གཟའ་ཟླ་བ་", "གཟའ་མིག་དམར་", "གཟའ་ལྷག་པ་", "གཟའ་ཕུར་བུ", "གཟའ་པ་སངས་", "གཟའ་སྤེན་པ་"],
            weekdaysShort: ["ཉི་མ་", "ཟླ་བ་", "མིག་དམར་", "ལྷག་པ་", "ཕུར་བུ", "པ་སངས་", "སྤེན་པ་"],
            weekdaysMin: ["ཉི", "ཟླ", "མིག", "ལྷག", "ཕུར", "སངས", "སྤེན"],
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function (e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function (e) {
                    return a[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && 4 <= e || "ཉིན་གུང" === t && 5 > e || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function (e) {
                return 4 > e ? "མཚན་མོ" : 10 > e ? "ཞོགས་ཀས" : 17 > e ? "ཉིན་གུང" : 20 > e ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Tibetan [bo]
//! author : Thupten N. Chakrishar : https://github.com/vajradog
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            return e + " " + function (e, t) {
                return 2 === t ? function (e) {
                    var t = {m: "v", b: "v", d: "z"};
                    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({mm: "munutenn", MM: "miz", dd: "devezh"}[a], e)
        }

        var a = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
            n = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            r = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
        e.defineLocale("br", {
            months: ["Genver", "Cʼhwevrer", "Meurzh", "Ebrel", "Mae", "Mezheven", "Gouere", "Eost", "Gwengolo", "Here", "Du", "Kerzu"],
            monthsShort: ["Gen", "Cʼhwe", "Meu", "Ebr", "Mae", "Eve", "Gou", "Eos", "Gwe", "Her", "Du", "Ker"],
            weekdays: ["Sul", "Lun", "Meurzh", "Mercʼher", "Yaou", "Gwener", "Sadorn"],
            weekdaysShort: ["Sul", "Lun", "Meu", "Mer", "Yao", "Gwe", "Sad"],
            weekdaysMin: ["Su", "Lu", "Me", "Mer", "Ya", "Gw", "Sa"],
            weekdaysParse: r,
            fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
            shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
            minWeekdaysParse: r,
            monthsRegex: n,
            monthsShortRegex: n,
            monthsStrictRegex: /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
            monthsShortStrictRegex: /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY HH:mm",
                LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warcʼhoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Decʼh da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s ʼzo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function (e) {
                    switch (function e(t) {
                        return 9 < t ? e(t % 10) : t
                    }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {dow: 1, doy: 4},
            meridiemParse: /a.m.|g.m./,
            isPM: function (e) {
                return "g.m." === e
            },
            meridiem: function (e) {
                return 12 > e ? "a.m." : "g.m."
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Breton [br]
//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            var n = e + " ";
            return "ss" === a ? n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi" : "m" === a ? t ? "jedna minuta" : "jedne minute" : "mm" === a ? n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta" : "h" === a ? t ? "jedan sat" : "jednog sata" : "hh" === a ? n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati" : "dd" === a ? n += 1 === e ? "dan" : "dana" : "MM" === a ? n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci" : "yy" === a ? n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina" : void 0
        }

        e.defineLocale("bs", {
            months: ["januar", "februar", "mart", "april", "maj", "juni", "juli", "august", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj.", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
            monthsParseExact: !0,
            weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[jučer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Bosnian [bs]
//! author : Nedim Cholich : https://github.com/frontyard
//! based on (hr) translation by Bojan Marković
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ca", {
            months: {
                standalone: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
                format: ["de gener", "de febrer", "de març", "d'abril", "de maig", "de juny", "de juliol", "d'agost", "de setembre", "d'octubre", "de novembre", "de desembre"],
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."],
            monthsParseExact: !0,
            weekdays: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
            weekdaysShort: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
            weekdaysMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 === this.hours() ? "la" : "les") + "] LT"
                }, nextDay: function () {
                    return "[demà a " + (1 === this.hours() ? "la" : "les") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a " + (1 === this.hours() ? "la" : "les") + "] LT"
                }, lastDay: function () {
                    return "[ahir a " + (1 === this.hours() ? "la" : "les") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [passat a " + (1 === this.hours() ? "la" : "les") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
                var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return ("w" === t || "W" === t) && (a = "a"), e + a
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Juan G. Hurtado : https://github.com/juanghurtado
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e) {
            return 1 < e && 5 > e && 1 != ~~(e / 10)
        }

        function a(e, a, n, r) {
            var s = e + " ";
            return "s" === n ? a || r ? "pár sekund" : "pár sekundami" : "ss" === n ? a || r ? s + (t(e) ? "sekundy" : "sekund") : s + "sekundami" : "m" === n ? a ? "minuta" : r ? "minutu" : "minutou" : "mm" === n ? a || r ? s + (t(e) ? "minuty" : "minut") : s + "minutami" : "h" === n ? a ? "hodina" : r ? "hodinu" : "hodinou" : "hh" === n ? a || r ? s + (t(e) ? "hodiny" : "hodin") : s + "hodinami" : "d" === n ? a || r ? "den" : "dnem" : "dd" === n ? a || r ? s + (t(e) ? "dny" : "dní") : s + "dny" : "M" === n ? a || r ? "měsíc" : "měsícem" : "MM" === n ? a || r ? s + (t(e) ? "měsíce" : "měsíců") : s + "měsíci" : "y" === n ? a || r ? "rok" : "rokem" : "yy" === n ? a || r ? s + (t(e) ? "roky" : "let") : s + "lety" : void 0
        }

        var n = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
            r = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
        e.defineLocale("cs", {
            months: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
            monthsShort: ["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"],
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
            weekdaysShort: ["ne", "po", "út", "st", "čt", "pá", "so"],
            weekdaysMin: ["ne", "po", "út", "st", "čt", "pá", "so"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                }, lastDay: "[včera v] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("cv", {
            months: ["кӑрлач", "нарӑс", "пуш", "ака", "май", "ҫӗртме", "утӑ", "ҫурла", "авӑн", "юпа", "чӳк", "раштав"],
            monthsShort: ["кӑр", "нар", "пуш", "ака", "май", "ҫӗр", "утӑ", "ҫур", "авн", "юпа", "чӳк", "раш"],
            weekdays: ["вырсарникун", "тунтикун", "ытларикун", "юнкун", "кӗҫнерникун", "эрнекун", "шӑматкун"],
            weekdaysShort: ["выр", "тун", "ытл", "юн", "кӗҫ", "эрн", "шӑм"],
            weekdaysMin: ["вр", "тн", "ыт", "юн", "кҫ", "эр", "шм"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Chuvash [cv]
//! author : Anatoly Mironov : https://github.com/mirontoli
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("cy", {
            months: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"],
            monthsShort: ["Ion", "Chwe", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rhag"],
            weekdays: ["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"],
            weekdaysShort: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
            weekdaysMin: ["Su", "Ll", "Ma", "Me", "Ia", "Gw", "Sa"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (e) {
                var t = "";
                return 20 < e ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : 0 < e && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Welsh [cy]
//! author : Robert Allen : https://github.com/robgallen
//! author : https://github.com/ryangreaves
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("da", {
            months: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"],
            monthsShort: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            weekdays: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
            weekdaysShort: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
            weekdaysMin: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Danish [da]
//! author : Ulrik Nielsen : https://github.com/mrbase
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            var n = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? n[a][0] : n[a][1]
        }

        e.defineLocale("de", {
            months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthsShort: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
            monthsParseExact: !0,
            weekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            weekdaysShort: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
            weekdaysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            var n = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? n[a][0] : n[a][1]
        }

        e.defineLocale("de-at", {
            months: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthsShort: ["Jän.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
            monthsParseExact: !0,
            weekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            weekdaysShort: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
            weekdaysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : German (Austria) [de-at]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Martin Groller : https://github.com/MadMG
//! author : Mikolaj Dadela : https://github.com/mik01aj
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            var n = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? n[a][0] : n[a][1]
        }

        e.defineLocale("de-ch", {
            months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthsShort: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
            monthsParseExact: !0,
            weekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            weekdaysShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekdaysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : German (Switzerland) [de-ch]
//! author : sschueller : https://github.com/sschueller
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: ["އާދި", "ހޯމަ", "އަން", "ބުދަ", "ބުރާ", "ހުކު", "ހޮނި"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (e) {
                return "މފ" === e
            },
            meridiem: function (e) {
                return 12 > e ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 7, doy: 12}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Maldivian [dv]
//! author : Jawish Hameed : https://github.com/jawish
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("el", {
            monthsNominativeEl: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            monthsGenitiveEl: ["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"],
            months: function (e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαϊ", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            weekdays: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            weekdaysShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            weekdaysMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
            meridiem: function (e, t, a) {
                return 11 < e ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ"
            },
            isPM: function (e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (e, t) {
                var a = this._calendarEl[e], n = t && t.hours();
                return function (e) {
                    return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }(a) && (a = a.apply(t)), a.replace("{}", 1 == n % 12 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Greek [el]
//! author : Aggelos Karalias : https://github.com/mehiel
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("en-au", {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            },
            week: {dow: 0, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : English (Australia) [en-au]
//! author : Jared Morse : https://github.com/jarcoal
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("en-ca", {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : English (Canada) [en-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("en-gb", {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("en-ie", {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : English (Ireland) [en-ie]
//! author : Chris Cartlidge : https://github.com/chriscartlidge
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("en-il", {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : English (Israel) [en-il]
//! author : Chris Gedrim : https://github.com/chrisgedrim
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("en-in", {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : English (India) [en-in]
//! author : Jatin Agrawal : https://github.com/jatinag22
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("en-nz", {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : English (New Zealand) [en-nz]
//! author : Luke McGregor : https://github.com/lukemcgregor
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("en-sg", {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : English (Singapore) [en-sg]
//! author : Matthew Castrillon-Madrigal : https://github.com/techdimension
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("eo", {
            months: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "aŭgusto", "septembro", "oktobro", "novembro", "decembro"],
            monthsShort: ["jan", "feb", "mart", "apr", "maj", "jun", "jul", "aŭg", "sept", "okt", "nov", "dec"],
            weekdays: ["dimanĉo", "lundo", "mardo", "merkredo", "ĵaŭdo", "vendredo", "sabato"],
            weekdaysShort: ["dim", "lun", "mard", "merk", "ĵaŭ", "ven", "sab"],
            weekdaysMin: ["di", "lu", "ma", "me", "ĵa", "ve", "sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "[la] D[-an de] MMMM, YYYY",
                LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function (e, t, a) {
                return 11 < e ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd[n je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasintan] dddd[n je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "kelkaj sekundoj",
                ss: "%d sekundoj",
                m: "unu minuto",
                mm: "%d minutoj",
                h: "unu horo",
                hh: "%d horoj",
                d: "unu tago",
                dd: "%d tagoj",
                M: "unu monato",
                MM: "%d monatoj",
                y: "unu jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Esperanto [eo]
//! author : Colin Dean : https://github.com/colindean
//! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
//! comment : miestasmia corrected the translation by colindean
//! comment : Vivakvo corrected the translation by colindean and miestasmia
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."],
            a = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            weekdaysShort: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
            weekdaysMin: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4},
            invalidDate: "Fecha inválida"
        })
    }(a(0));//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."],
            a = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            weekdaysShort: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
            weekdaysMin: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."],
            a = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            weekdaysShort: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
            weekdaysMin: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 === this.hours() ? "" : "s") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
//! author : chrisrodz : https://github.com/chrisrodz
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a, n) {
            var r = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? r[a][2] ? r[a][2] : r[a][1] : n ? r[a][0] : r[a][1]
        }

        e.defineLocale("et", {
            months: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
            monthsShort: ["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"],
            weekdays: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"],
            weekdaysShort: ["P", "E", "T", "K", "N", "R", "L"],
            weekdaysMin: ["P", "E", "T", "K", "N", "R", "L"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Henry Kehlmann : https://github.com/madhenry
//! improvements : Illimar Tambek : https://github.com/ragulka
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("eu", {
            months: ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"],
            monthsShort: ["urt.", "ots.", "mar.", "api.", "mai.", "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe."],
            monthsParseExact: !0,
            weekdays: ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"],
            weekdaysShort: ["ig.", "al.", "ar.", "az.", "og.", "ol.", "lr."],
            weekdaysMin: ["ig", "al", "ar", "az", "og", "ol", "lr"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Basque [eu]
//! author : Eneko Illarramendi : https://github.com/eillarra
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰"},
            a = {"۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0"};
        e.defineLocale("fa", {
            months: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
            monthsShort: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
            weekdays: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
            weekdaysShort: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
            weekdaysMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function (e) {
                return 12 > e ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "%d ثانیه",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/[۰-۹]/g, (function (e) {
                    return a[e]
                })).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {dow: 6, doy: 12}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Persian [fa]
//! author : Ebrahim Byagowi : https://github.com/ebraminio
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, n, r) {
            var s = "";
            switch (n) {
                case"s":
                    return r ? "muutaman sekunnin" : "muutama sekunti";
                case"ss":
                    s = r ? "sekunnin" : "sekuntia";
                    break;
                case"m":
                    return r ? "minuutin" : "minuutti";
                case"mm":
                    s = r ? "minuutin" : "minuuttia";
                    break;
                case"h":
                    return r ? "tunnin" : "tunti";
                case"hh":
                    s = r ? "tunnin" : "tuntia";
                    break;
                case"d":
                    return r ? "päivän" : "päivä";
                case"dd":
                    s = r ? "päivän" : "päivää";
                    break;
                case"M":
                    return r ? "kuukauden" : "kuukausi";
                case"MM":
                    s = r ? "kuukauden" : "kuukautta";
                    break;
                case"y":
                    return r ? "vuoden" : "vuosi";
                case"yy":
                    s = r ? "vuoden" : "vuotta"
            }
            return s = a(e, r) + " " + s
        }

        function a(e, t) {
            return 10 > e ? t ? r[e] : n[e] : e
        }

        var n = ["nolla", "yksi", "kaksi", "kolme", "neljä", "viisi", "kuusi", "seitsemän", "kahdeksan", "yhdeksän"],
            r = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", n[7], n[8], n[9]];
        e.defineLocale("fi", {
            months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
            monthsShort: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"],
            weekdays: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
            weekdaysShort: ["su", "ma", "ti", "ke", "to", "pe", "la"],
            weekdaysMin: ["su", "ma", "ti", "ke", "to", "pe", "la"],
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Finnish [fi]
//! author : Tarmo Aidantausta : https://github.com/bleadof
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("fil", {
            months: ["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"],
            monthsShort: ["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"],
            weekdays: ["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"],
            weekdaysShort: ["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"],
            weekdaysMin: ["Li", "Lu", "Ma", "Mi", "Hu", "Bi", "Sab"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Filipino [fil]
//! author : Dan Hagman : https://github.com/hagmandan
//! author : Matthew Co : https://github.com/matthewdeeco
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("fo", {
            months: ["januar", "februar", "mars", "apríl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            monthsShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
            weekdays: ["sunnudagur", "mánadagur", "týsdagur", "mikudagur", "hósdagur", "fríggjadagur", "leygardagur"],
            weekdaysShort: ["sun", "mán", "týs", "mik", "hós", "frí", "ley"],
            weekdaysMin: ["su", "má", "tý", "mi", "hó", "fr", "le"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaður",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Faroese [fo]
//! author : Ragnar Johannesen : https://github.com/ragnar123
//! author : Kristian Sakarisson : https://github.com/sakarisson
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
            a = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
        e.defineLocale("fr", {
            months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthsShort: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            monthsRegex: t,
            monthsShortRegex: t,
            monthsStrictRegex: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
            monthsShortStrictRegex: /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            weekdaysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            weekdaysMin: ["di", "lu", "ma", "me", "je", "ve", "sa"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("fr-ca", {
            months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthsShort: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            monthsParseExact: !0,
            weekdays: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            weekdaysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            weekdaysMin: ["di", "lu", "ma", "me", "je", "ve", "sa"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
                switch (t) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : French (Canada) [fr-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("fr-ch", {
            months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthsShort: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            monthsParseExact: !0,
            weekdays: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            weekdaysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            weekdaysMin: ["di", "lu", "ma", "me", "je", "ve", "sa"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
                switch (t) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : French (Switzerland) [fr-ch]
//! author : Gaspard Bucher : https://github.com/gaspard
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = ["jan.", "feb.", "mrt.", "apr.", "mai", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "des."],
            a = ["jan", "feb", "mrt", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"];
        e.defineLocale("fy", {
            months: ["jannewaris", "febrewaris", "maart", "april", "maaie", "juny", "july", "augustus", "septimber", "oktober", "novimber", "desimber"],
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: ["snein", "moandei", "tiisdei", "woansdei", "tongersdei", "freed", "sneon"],
            weekdaysShort: ["si.", "mo.", "ti.", "wo.", "to.", "fr.", "so."],
            weekdaysMin: ["Si", "Mo", "Ti", "Wo", "To", "Fr", "So"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Frisian [fy]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ga", {
            months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"],
            monthsShort: ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"],
            monthsParseExact: !0,
            weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
            weekdaysShort: ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
            weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[Amárach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[Inné ag] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s ó shin",
                s: "cúpla soicind",
                ss: "%d soicind",
                m: "nóiméad",
                mm: "%d nóiméad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "lá",
                dd: "%d lá",
                M: "mí",
                MM: "%d míonna",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                return e + (1 === e ? "d" : 2 == e % 10 ? "na" : "mh")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Irish or Irish Gaelic [ga]
//! author : André Silva : https://github.com/askpt
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            monthsParseExact: !0,
            weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                return e + (1 === e ? "d" : 2 == e % 10 ? "na" : "mh")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Scottish Gaelic [gd]
//! author : Jon Ashdown : https://github.com/jonashdown
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("gl", {
            months: ["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"],
            monthsShort: ["xan.", "feb.", "mar.", "abr.", "mai.", "xuñ.", "xul.", "ago.", "set.", "out.", "nov.", "dec."],
            monthsParseExact: !0,
            weekdays: ["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"],
            weekdaysShort: ["dom.", "lun.", "mar.", "mér.", "xov.", "ven.", "sáb."],
            weekdaysMin: ["do", "lu", "ma", "mé", "xo", "ve", "sá"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (1 === this.hours() ? "á" : "ás") + "] LT"
                }, nextDay: function () {
                    return "[mañá " + (1 === this.hours() ? "á" : "ás") + "] LT"
                }, nextWeek: function () {
                    return "dddd [" + (1 === this.hours() ? "a" : "ás") + "] LT"
                }, lastDay: function () {
                    return "[onte " + (1 === this.hours() ? "a" : "á") + "] LT"
                }, lastWeek: function () {
                    return "[o] dddd [pasado " + (1 === this.hours() ? "a" : "ás") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Juan G. Hurtado : https://github.com/juanghurtado
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a, n) {
            var r = {
                s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
                ss: [e + " सॅकंडांनी", e + " सॅकंड"],
                m: ["एका मिणटान", "एक मिनूट"],
                mm: [e + " मिणटांनी", e + " मिणटां"],
                h: ["एका वरान", "एक वर"],
                hh: [e + " वरांनी", e + " वरां"],
                d: ["एका दिसान", "एक दीस"],
                dd: [e + " दिसांनी", e + " दीस"],
                M: ["एका म्हयन्यान", "एक म्हयनो"],
                MM: [e + " म्हयन्यानी", e + " म्हयने"],
                y: ["एका वर्सान", "एक वर्स"],
                yy: [e + " वर्सांनी", e + " वर्सां"]
            };
            return n ? r[a][0] : r[a][1]
        }

        e.defineLocale("gom-deva", {
            months: {
                standalone: ["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रील", "मे", "जून", "जुलय", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"],
                format: ["जानेवारीच्या", "फेब्रुवारीच्या", "मार्चाच्या", "एप्रीलाच्या", "मेयाच्या", "जूनाच्या", "जुलयाच्या", "ऑगस्टाच्या", "सप्टेंबराच्या", "ऑक्टोबराच्या", "नोव्हेंबराच्या", "डिसेंबराच्या"],
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: ["जाने.", "फेब्रु.", "मार्च", "एप्री.", "मे", "जून", "जुल.", "ऑग.", "सप्टें.", "ऑक्टो.", "नोव्हें.", "डिसें."],
            monthsParseExact: !0,
            weekdays: ["आयतार", "सोमार", "मंगळार", "बुधवार", "बिरेस्तार", "सुक्रार", "शेनवार"],
            weekdaysShort: ["आयत.", "सोम.", "मंगळ.", "बुध.", "ब्रेस्त.", "सुक्र.", "शेन."],
            weekdaysMin: ["आ", "सो", "मं", "बु", "ब्रे", "सु", "शे"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [वाजतां]",
                LTS: "A h:mm:ss [वाजतां]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [वाजतां]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
                llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
            },
            calendar: {
                sameDay: "[आयज] LT",
                nextDay: "[फाल्यां] LT",
                nextWeek: "[फुडलो] dddd[,] LT",
                lastDay: "[काल] LT",
                lastWeek: "[फाटलो] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s आदीं",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"D":
                        return e + "वेर";
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                    case"w":
                    case"W":
                        return e
                }
            },
            week: {dow: 0, doy: 3},
            meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "राती" === t ? 4 > e ? e : e + 12 : "सकाळीं" === t ? e : "दनपारां" === t ? 12 < e ? e : e + 12 : "सांजे" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "राती" : 12 > e ? "सकाळीं" : 16 > e ? "दनपारां" : 20 > e ? "सांजे" : "राती"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Konkani Devanagari script [gom-deva]
//! author : The Discoverer : https://github.com/WikiDiscoverer
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a, n) {
            var r = {
                s: ["thoddea sekondamni", "thodde sekond"],
                ss: [e + " sekondamni", e + " sekond"],
                m: ["eka mintan", "ek minut"],
                mm: [e + " mintamni", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voramni", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disamni", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineamni", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsamni", e + " vorsam"]
            };
            return n ? r[a][0] : r[a][1]
        }

        e.defineLocale("gom-latn", {
            months: {
                standalone: ["Janer", "Febrer", "Mars", "Abril", "Mai", "Jun", "Julai", "Agost", "Setembr", "Otubr", "Novembr", "Dezembr"],
                format: ["Janerachea", "Febrerachea", "Marsachea", "Abrilachea", "Maiachea", "Junachea", "Julaiachea", "Agostachea", "Setembrachea", "Otubrachea", "Novembrachea", "Dezembrachea"],
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: ["Jan.", "Feb.", "Mars", "Abr.", "Mai", "Jun", "Jul.", "Ago.", "Set.", "Otu.", "Nov.", "Dez."],
            monthsParseExact: !0,
            weekdays: ["Aitar", "Somar", "Mongllar", "Budhvar", "Birestar", "Sukrar", "Son'var"],
            weekdaysShort: ["Ait.", "Som.", "Mon.", "Bud.", "Bre.", "Suk.", "Son."],
            weekdaysMin: ["Ai", "Sm", "Mo", "Bu", "Br", "Su", "Sn"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Fuddlo] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fattlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"D":
                        return e + "er";
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                    case"w":
                    case"W":
                        return e
                }
            },
            week: {dow: 0, doy: 3},
            meridiemParse: /rati|sokallim|donparam|sanje/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "rati" === t ? 4 > e ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? 12 < e ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "rati" : 12 > e ? "sokallim" : 16 > e ? "donparam" : 20 > e ? "sanje" : "rati"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Konkani Latin script [gom-latn]
//! author : The Discoverer : https://github.com/WikiDiscoverer
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "૧", 2: "૨", 3: "૩", 4: "૪", 5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯", 0: "૦"},
            a = {"૧": "1", "૨": "2", "૩": "3", "૪": "4", "૫": "5", "૬": "6", "૭": "7", "૮": "8", "૯": "9", "૦": "0"};
        e.defineLocale("gu", {
            months: ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટેમ્બર", "ઑક્ટ્બર", "નવેમ્બર", "ડિસેમ્બર"],
            monthsShort: ["જાન્યુ.", "ફેબ્રુ.", "માર્ચ", "એપ્રિ.", "મે", "જૂન", "જુલા.", "ઑગ.", "સપ્ટે.", "ઑક્ટ્.", "નવે.", "ડિસે."],
            monthsParseExact: !0,
            weekdays: ["રવિવાર", "સોમવાર", "મંગળવાર", "બુધ્વાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"],
            weekdaysShort: ["રવિ", "સોમ", "મંગળ", "બુધ્", "ગુરુ", "શુક્ર", "શનિ"],
            weekdaysMin: ["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"],
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પહેલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function (e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function (e) {
                    return a[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "રાત" === t ? 4 > e ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? 10 <= e ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "રાત" : 10 > e ? "સવાર" : 17 > e ? "બપોર" : 20 > e ? "સાંજ" : "રાત"
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Gujarati [gu]
//! author : Kaushik Thanki : https://github.com/Kaushik1987
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("he", {
            months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            monthsShort: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"],
            weekdays: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
            weekdaysShort: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
            weekdaysMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function (e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function (e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function (e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function (e) {
                    return 2 === e ? "שנתיים" : 0 == e % 10 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function (e, t, a) {
                return 5 > e ? "לפנות בוקר" : 10 > e ? "בבוקר" : 12 > e ? a ? 'לפנה"צ' : "לפני הצהריים" : 18 > e ? a ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            a = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        e.defineLocale("hi", {
            months: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
            monthsShort: ["जन.", "फ़र.", "मार्च", "अप्रै.", "मई", "जून", "जुल.", "अग.", "सित.", "अक्टू.", "नव.", "दिस."],
            monthsParseExact: !0,
            weekdays: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरूवार", "शुक्रवार", "शनिवार"],
            weekdaysShort: ["रवि", "सोम", "मंगल", "बुध", "गुरू", "शुक्र", "शनि"],
            weekdaysMin: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                    return a[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात" === t ? 4 > e ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? 10 <= e ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "रात" : 10 > e ? "सुबह" : 17 > e ? "दोपहर" : 20 > e ? "शाम" : "रात"
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            var n = e + " ";
            return "ss" === a ? n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi" : "m" === a ? t ? "jedna minuta" : "jedne minute" : "mm" === a ? n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta" : "h" === a ? t ? "jedan sat" : "jednog sata" : "hh" === a ? n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati" : "dd" === a ? n += 1 === e ? "dan" : "dana" : "MM" === a ? n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci" : "yy" === a ? n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina" : void 0
        }

        e.defineLocale("hr", {
            months: {
                format: ["siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenoga", "prosinca"],
                standalone: ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"]
            },
            monthsShort: ["sij.", "velj.", "ožu.", "tra.", "svi.", "lip.", "srp.", "kol.", "ruj.", "lis.", "stu.", "pro."],
            monthsParseExact: !0,
            weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM YYYY",
                LLL: "Do MMMM YYYY H:mm",
                LLLL: "dddd, Do MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[jučer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prošlu] [nedjelju] [u] LT";
                        case 3:
                            return "[prošlu] [srijedu] [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Bojan Marković : https://github.com/bmarkovic
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a, n) {
            return "s" === a ? n || t ? "néhány másodperc" : "néhány másodperce" : "ss" === a ? e + (n || t) ? " másodperc" : " másodperce" : "m" === a ? "egy" + (n || t ? " perc" : " perce") : "mm" === a ? e + (n || t ? " perc" : " perce") : "h" === a ? "egy" + (n || t ? " óra" : " órája") : "hh" === a ? e + (n || t ? " óra" : " órája") : "d" === a ? "egy" + (n || t ? " nap" : " napja") : "dd" === a ? e + (n || t ? " nap" : " napja") : "M" === a ? "egy" + (n || t ? " hónap" : " hónapja") : "MM" === a ? e + (n || t ? " hónap" : " hónapja") : "y" === a ? "egy" + (n || t ? " év" : " éve") : "yy" === a ? e + (n || t ? " év" : " éve") : ""
        }

        function a(e) {
            return (e ? "" : "[múlt] ") + "[" + n[this.day()] + "] LT[-kor]"
        }

        var n = ["vasárnap", "hétfőn", "kedden", "szerdán", "csütörtökön", "pénteken", "szombaton"];
        e.defineLocale("hu", {
            months: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
            monthsShort: ["jan", "feb", "márc", "ápr", "máj", "jún", "júl", "aug", "szept", "okt", "nov", "dec"],
            weekdays: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
            weekdaysShort: ["vas", "hét", "kedd", "sze", "csüt", "pén", "szo"],
            weekdaysMin: ["v", "h", "k", "sze", "cs", "p", "szo"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function (e, t, a) {
                return 12 > e ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                    return a.call(this, !0)
                }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                    return a.call(this, !1)
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("hy-am", {
            months: {
                format: ["հունվարի", "փետրվարի", "մարտի", "ապրիլի", "մայիսի", "հունիսի", "հուլիսի", "օգոստոսի", "սեպտեմբերի", "հոկտեմբերի", "նոյեմբերի", "դեկտեմբերի"],
                standalone: ["հունվար", "փետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս", "հուլիս", "օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր"]
            },
            monthsShort: ["հնվ", "փտր", "մրտ", "ապր", "մյս", "հնս", "հլս", "օգս", "սպտ", "հկտ", "նմբ", "դկտ"],
            weekdays: ["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"],
            weekdaysShort: ["կրկ", "երկ", "երք", "չրք", "հնգ", "ուրբ", "շբթ"],
            weekdaysMin: ["կրկ", "երկ", "երք", "չրք", "հնգ", "ուրբ", "շբթ"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () {
                    return "dddd [օրը ժամը] LT"
                }, lastWeek: function () {
                    return "[անցած] dddd [օրը ժամը] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function (e) {
                return 4 > e ? "գիշերվա" : 12 > e ? "առավոտվա" : 17 > e ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (e, t) {
                return "DDD" === t || "w" === t || "W" === t || "DDDo" === t ? 1 === e ? e + "-ին" : e + "-րդ" : e
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Armenian [hy-am]
//! author : Armendarabyan : https://github.com/armendarabyan
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("id", {
            months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"],
            weekdays: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
            weekdaysShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
            weekdaysMin: ["Mg", "Sn", "Sl", "Rb", "Km", "Jm", "Sb"],
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? 11 <= e ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Indonesian [id]
//! author : Mohammad Satrio Utomo : https://github.com/tyok
//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e) {
            return 11 == e % 100 || 1 != e % 10
        }

        function a(e, a, n, r) {
            var s = e + " ";
            switch (n) {
                case"s":
                    return a || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case"ss":
                    return t(e) ? s + (a || r ? "sekúndur" : "sekúndum") : s + "sekúnda";
                case"m":
                    return a ? "mínúta" : "mínútu";
                case"mm":
                    return t(e) ? s + (a || r ? "mínútur" : "mínútum") : a ? s + "mínúta" : s + "mínútu";
                case"hh":
                    return t(e) ? s + (a || r ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                case"d":
                    return a ? "dagur" : r ? "dag" : "degi";
                case"dd":
                    return t(e) ? a ? s + "dagar" : s + (r ? "daga" : "dögum") : a ? s + "dagur" : s + (r ? "dag" : "degi");
                case"M":
                    return a ? "mánuður" : r ? "mánuð" : "mánuði";
                case"MM":
                    return t(e) ? a ? s + "mánuðir" : s + (r ? "mánuði" : "mánuðum") : a ? s + "mánuður" : s + (r ? "mánuð" : "mánuði");
                case"y":
                    return a || r ? "ár" : "ári";
                case"yy":
                    return t(e) ? s + (a || r ? "ár" : "árum") : s + (a || r ? "ár" : "ári")
            }
        }

        e.defineLocale("is", {
            months: ["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"],
            monthsShort: ["jan", "feb", "mar", "apr", "maí", "jún", "júl", "ágú", "sep", "okt", "nóv", "des"],
            weekdays: ["sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur", "fimmtudagur", "föstudagur", "laugardagur"],
            weekdaysShort: ["sun", "mán", "þri", "mið", "fim", "fös", "lau"],
            weekdaysMin: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: "klukkustund",
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Icelandic [is]
//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("it", {
            months: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
            monthsShort: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
            weekdays: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
            weekdaysShort: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
            weekdaysMin: ["do", "lu", "ma", "me", "gi", "ve", "sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[Oggi a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, nextDay: function () {
                    return "[Domani a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, nextWeek: function () {
                    return "dddd [a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, lastDay: function () {
                    return "[Ieri a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[La scorsa] dddd [a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
                        default:
                            return "[Lo scorso] dddd [a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "tra %s",
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
//! author: Marco : https://github.com/Manfre98
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("it-ch", {
            months: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
            monthsShort: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
            weekdays: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
            weekdaysShort: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
            weekdaysMin: ["do", "lu", "ma", "me", "gi", "ve", "sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Italian (Switzerland) [it-ch]
//! author : xfh : https://github.com/xfh
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ja", {
            eras: [{since: "2019-05-01", offset: 1, name: "令和", narrow: "㋿", abbr: "R"}, {
                since: "1989-01-08",
                until: "2019-04-30",
                offset: 1,
                name: "平成",
                narrow: "㍻",
                abbr: "H"
            }, {
                since: "1926-12-25",
                until: "1989-01-07",
                offset: 1,
                name: "昭和",
                narrow: "㍼",
                abbr: "S"
            }, {
                since: "1912-07-30",
                until: "1926-12-24",
                offset: 1,
                name: "大正",
                narrow: "㍽",
                abbr: "T"
            }, {
                since: "1873-01-01",
                until: "1912-07-29",
                offset: 6,
                name: "明治",
                narrow: "㍾",
                abbr: "M"
            }, {
                since: "0001-01-01",
                until: "1873-12-31",
                offset: 1,
                name: "西暦",
                narrow: "AD",
                abbr: "AD"
            }, {since: "0000-12-31", until: -1 / 0, offset: 1, name: "紀元前", narrow: "BC", abbr: "BC"}],
            eraYearOrdinalRegex: /(元|\d+)年/,
            eraYearOrdinalParse: function (e, t) {
                return "元" === t[1] ? 1 : parseInt(t[1] || e, 10)
            },
            months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            weekdays: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
            weekdaysShort: ["日", "月", "火", "水", "木", "金", "土"],
            weekdaysMin: ["日", "月", "火", "水", "木", "金", "土"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日(ddd) HH:mm"
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
                return "午後" === e
            },
            meridiem: function (e) {
                return 12 > e ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: function (e) {
                    return e.week() === this.week() ? "dddd LT" : "[来週]dddd LT"
                }, lastDay: "[昨日] LT", lastWeek: function (e) {
                    return this.week() === e.week() ? "dddd LT" : "[先週]dddd LT"
                }, sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function (e, t) {
                return "y" === t ? 1 === e ? "元年" : e + "年" : "d" === t || "D" === t || "DDD" === t ? e + "日" : e
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("jv", {
            months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nop", "Des"],
            weekdays: ["Minggu", "Senen", "Seloso", "Rebu", "Kemis", "Jemuwah", "Septu"],
            weekdaysShort: ["Min", "Sen", "Sel", "Reb", "Kem", "Jem", "Sep"],
            weekdaysMin: ["Mg", "Sn", "Sl", "Rb", "Km", "Jm", "Sp"],
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? 11 <= e ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 11 > e ? "enjing" : 15 > e ? "siyang" : 19 > e ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Javanese [jv]
//! author : Rony Lantip : https://github.com/lantip
//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ka", {
            months: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
            monthsShort: ["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"],
            weekdays: {
                standalone: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
                format: ["კვირას", "ორშაბათს", "სამშაბათს", "ოთხშაბათს", "ხუთშაბათს", "პარასკევს", "შაბათს"],
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
            weekdaysMin: ["კვ", "ორ", "სა", "ოთ", "ხუ", "პა", "შა"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function (e, t, a) {
                        return "ი" === a ? t + "ში" : t + a + "ში"
                    }))
                },
                past: function (e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : e
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : 20 > e || 100 >= e && 0 == e % 20 || 0 == e % 100 ? "მე-" + e : e + "-ე"
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Georgian [ka]
//! author : Irakli Janiashvili : https://github.com/IrakliJani
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        e.defineLocale("kk", {
            months: ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"],
            monthsShort: ["қаң", "ақп", "нау", "сәу", "мам", "мау", "шіл", "там", "қыр", "қаз", "қар", "жел"],
            weekdays: ["жексенбі", "дүйсенбі", "сейсенбі", "сәрсенбі", "бейсенбі", "жұма", "сенбі"],
            weekdaysShort: ["жек", "дүй", "сей", "сәр", "бей", "жұм", "сен"],
            weekdaysMin: ["жк", "дй", "сй", "ср", "бй", "жм", "сн"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
                return e + (t[e] || t[e % 10] || t[100 <= e ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Kazakh [kk]
//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "១", 2: "២", 3: "៣", 4: "៤", 5: "៥", 6: "៦", 7: "៧", 8: "៨", 9: "៩", 0: "០"},
            a = {"១": "1", "២": "2", "៣": "3", "៤": "4", "៥": "5", "៦": "6", "៧": "7", "៨": "8", "៩": "9", "០": "0"};
        e.defineLocale("km", {
            months: ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"],
            monthsShort: ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"],
            weekdays: ["អាទិត្យ", "ច័ន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"],
            weekdaysShort: ["អា", "ច", "អ", "ព", "ព្រ", "សុ", "ស"],
            weekdaysMin: ["អា", "ច", "អ", "ព", "ព្រ", "សុ", "ស"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function (e) {
                return "ល្ងាច" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ព្រឹក" : "ល្ងាច"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function (e) {
                return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function (e) {
                    return a[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Cambodian [km]
//! author : Kruy Vanna : https://github.com/kruyvanna
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦"},
            a = {"೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0"};
        e.defineLocale("kn", {
            months: ["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"],
            monthsShort: ["ಜನ", "ಫೆಬ್ರ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂ", "ಅಕ್ಟೋ", "ನವೆಂ", "ಡಿಸೆಂ"],
            monthsParseExact: !0,
            weekdays: ["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"],
            weekdaysShort: ["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"],
            weekdaysMin: ["ಭಾ", "ಸೋ", "ಮಂ", "ಬು", "ಗು", "ಶು", "ಶ"],
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function (e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function (e) {
                    return a[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? 4 > e ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? 10 <= e ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "ರಾತ್ರಿ" : 10 > e ? "ಬೆಳಿಗ್ಗೆ" : 17 > e ? "ಮಧ್ಯಾಹ್ನ" : 20 > e ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function (e) {
                return e + "ನೇ"
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Kannada [kn]
//! author : Rajeev Naik : https://github.com/rajeevnaikte
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ko", {
            months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            weekdays: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
            weekdaysMin: ["일", "월", "화", "수", "목", "금", "토"],
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function (e, t) {
                return "d" === t || "D" === t || "DDD" === t ? e + "일" : "M" === t ? e + "월" : "w" === t || "W" === t ? e + "주" : e
            },
            meridiemParse: /오전|오후/,
            isPM: function (e) {
                return "오후" === e
            },
            meridiem: function (e) {
                return 12 > e ? "오전" : "오후"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
            a = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"},
            n = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
        e.defineLocale("ku", {
            months: n,
            monthsShort: n,
            weekdays: ["یه‌كشه‌ممه‌", "دووشه‌ممه‌", "سێشه‌ممه‌", "چوارشه‌ممه‌", "پێنجشه‌ممه‌", "هه‌ینی", "شه‌ممه‌"],
            weekdaysShort: ["یه‌كشه‌م", "دووشه‌م", "سێشه‌م", "چوارشه‌م", "پێنجشه‌م", "هه‌ینی", "شه‌ممه‌"],
            weekdaysMin: ["ی", "د", "س", "چ", "پ", "ه", "ش"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function (e) {
                return /ئێواره‌/.test(e)
            },
            meridiem: function (e) {
                return 12 > e ? "به‌یانی" : "ئێواره‌"
            },
            calendar: {
                sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                nextDay: "[به‌یانی كاتژمێر] LT",
                nextWeek: "dddd [كاتژمێر] LT",
                lastDay: "[دوێنێ كاتژمێر] LT",
                lastWeek: "dddd [كاتژمێر] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "له‌ %s",
                past: "%s",
                s: "چه‌ند چركه‌یه‌ك",
                ss: "چركه‌ %d",
                m: "یه‌ك خوله‌ك",
                mm: "%d خوله‌ك",
                h: "یه‌ك كاتژمێر",
                hh: "%d كاتژمێر",
                d: "یه‌ك ڕۆژ",
                dd: "%d ڕۆژ",
                M: "یه‌ك مانگ",
                MM: "%d مانگ",
                y: "یه‌ك ساڵ",
                yy: "%d ساڵ"
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                    return a[e]
                })).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Kurdish [ku]
//! author : Shahram Mebashar : https://github.com/ShahramMebashar
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        e.defineLocale("ky", {
            months: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
            monthsShort: ["янв", "фев", "март", "апр", "май", "июнь", "июль", "авг", "сен", "окт", "ноя", "дек"],
            weekdays: ["Жекшемби", "Дүйшөмбү", "Шейшемби", "Шаршемби", "Бейшемби", "Жума", "Ишемби"],
            weekdaysShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
            weekdaysMin: ["Жк", "Дй", "Шй", "Шр", "Бй", "Жм", "Иш"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кечээ саат] LT",
                lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (e) {
                return e + (t[e] || t[e % 10] || t[100 <= e ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Kyrgyz [ky]
//! author : Chyngyz Arystan uulu : https://github.com/chyngyz
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            var n = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? n[a][0] : n[a][1]
        }

        function a(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (0 > e) return !0;
            if (10 > e) return !!(4 <= e && 7 >= e);
            if (100 > e) {
                var t = e % 10;
                return a(0 == t ? e / 10 : t)
            }
            if (1e4 > e) {
                for (; 10 <= e;) e /= 10;
                return a(e)
            }
            return a(e /= 1e3)
        }

        e.defineLocale("lb", {
            months: ["Januar", "Februar", "Mäerz", "Abrëll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthsShort: ["Jan.", "Febr.", "Mrz.", "Abr.", "Mee", "Jun.", "Jul.", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."],
            monthsParseExact: !0,
            weekdays: ["Sonndeg", "Méindeg", "Dënschdeg", "Mëttwoch", "Donneschdeg", "Freideg", "Samschdeg"],
            weekdaysShort: ["So.", "Mé.", "Dë.", "Më.", "Do.", "Fr.", "Sa."],
            weekdaysMin: ["So", "Mé", "Dë", "Më", "Do", "Fr", "Sa"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function (e) {
                    return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function (e) {
                    return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Luxembourgish [lb]
//! author : mweimerskirch : https://github.com/mweimerskirch
//! author : David Raison : https://github.com/kwisatz
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("lo", {
            months: ["ມັງກອນ", "ກຸມພາ", "ມີນາ", "ເມສາ", "ພຶດສະພາ", "ມິຖຸນາ", "ກໍລະກົດ", "ສິງຫາ", "ກັນຍາ", "ຕຸລາ", "ພະຈິກ", "ທັນວາ"],
            monthsShort: ["ມັງກອນ", "ກຸມພາ", "ມີນາ", "ເມສາ", "ພຶດສະພາ", "ມິຖຸນາ", "ກໍລະກົດ", "ສິງຫາ", "ກັນຍາ", "ຕຸລາ", "ພະຈິກ", "ທັນວາ"],
            weekdays: ["ອາທິດ", "ຈັນ", "ອັງຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ", "ເສົາ"],
            weekdaysShort: ["ທິດ", "ຈັນ", "ອັງຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ", "ເສົາ"],
            weekdaysMin: ["ທ", "ຈ", "ອຄ", "ພ", "ພຫ", "ສກ", "ສ"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (e) {
                return "ທີ່" + e
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Lao [lo]
//! author : Ryan Hart : https://github.com/ryanhart2
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a, r) {
            return t ? n(a)[0] : r ? n(a)[1] : n(a)[2]
        }

        function a(e) {
            return 0 == e % 10 || 10 < e && 20 > e
        }

        function n(e) {
            return s[e].split("_")
        }

        function r(e, r, s, d) {
            var i = e + " ";
            return 1 === e ? i + t(0, r, s[0], d) : r ? i + (a(e) ? n(s)[1] : n(s)[0]) : d ? i + n(s)[1] : i + (a(e) ? n(s)[1] : n(s)[2])
        }

        var s = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };
        e.defineLocale("lt", {
            months: {
                format: ["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio", "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"],
                standalone: ["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", "rugsėjis", "spalis", "lapkritis", "gruodis"],
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: ["sau", "vas", "kov", "bal", "geg", "bir", "lie", "rgp", "rgs", "spa", "lap", "grd"],
            weekdays: {
                format: ["sekmadienį", "pirmadienį", "antradienį", "trečiadienį", "ketvirtadienį", "penktadienį", "šeštadienį"],
                standalone: ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"],
            weekdaysMin: ["S", "P", "A", "T", "K", "Pn", "Š"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s", past: "prieš %s", s: function (e, t, a, n) {
                    return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
                }, ss: r, m: t, mm: r, h: t, hh: r, d: t, dd: r, M: t, MM: r, y: t, yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
                return e + "-oji"
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Mindaugas Mozūras : https://github.com/mmozuras
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            return a ? 1 == t % 10 && 11 != t % 100 ? e[2] : e[3] : 1 == t % 10 && 11 != t % 100 ? e[0] : e[1]
        }

        function a(e, a, n) {
            return e + " " + t(r[n], e, a)
        }

        function n(e, a, n) {
            return t(r[n], e, a)
        }

        var r = {
            ss: ["sekundes", "sekundēm", "sekunde", "sekundes"],
            m: ["minūtes", "minūtēm", "minūte", "minūtes"],
            mm: ["minūtes", "minūtēm", "minūte", "minūtes"],
            h: ["stundas", "stundām", "stunda", "stundas"],
            hh: ["stundas", "stundām", "stunda", "stundas"],
            d: ["dienas", "dienām", "diena", "dienas"],
            dd: ["dienas", "dienām", "diena", "dienas"],
            M: ["mēneša", "mēnešiem", "mēnesis", "mēneši"],
            MM: ["mēneša", "mēnešiem", "mēnesis", "mēneši"],
            y: ["gada", "gadiem", "gads", "gadi"],
            yy: ["gada", "gadiem", "gads", "gadi"]
        };
        e.defineLocale("lv", {
            months: ["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", "septembris", "oktobris", "novembris", "decembris"],
            monthsShort: ["jan", "feb", "mar", "apr", "mai", "jūn", "jūl", "aug", "sep", "okt", "nov", "dec"],
            weekdays: ["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"],
            weekdaysShort: ["Sv", "P", "O", "T", "C", "Pk", "S"],
            weekdaysMin: ["Sv", "P", "O", "T", "C", "Pk", "S"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s", past: "pirms %s", s: function (e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm"
                }, ss: a, m: n, mm: a, h: n, hh: a, d: n, dd: a, M: n, MM: a, y: n, yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Kristaps Karlsons : https://github.com/skakri
//! author : Jānis Elmeris : https://github.com/JanisE
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : 2 <= e && 4 >= e ? t[1] : t[2]
            }, translate: function (e, a, n) {
                var r = t.words[n];
                return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
        };
        e.defineLocale("me", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            monthsParseExact: !0,
            weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juče u] LT", lastWeek: function () {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Montenegrin [me]
//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("mi", {
            months: ["Kohi-tāte", "Hui-tanguru", "Poutū-te-rangi", "Paenga-whāwhā", "Haratua", "Pipiri", "Hōngoingoi", "Here-turi-kōkā", "Mahuru", "Whiringa-ā-nuku", "Whiringa-ā-rangi", "Hakihea"],
            monthsShort: ["Kohi", "Hui", "Pou", "Pae", "Hara", "Pipi", "Hōngoi", "Here", "Mahu", "Whi-nu", "Whi-ra", "Haki"],
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: ["Rātapu", "Mane", "Tūrei", "Wenerei", "Tāite", "Paraire", "Hātarei"],
            weekdaysShort: ["Ta", "Ma", "Tū", "We", "Tāi", "Pa", "Hā"],
            weekdaysMin: ["Ta", "Ma", "Tū", "We", "Tāi", "Pa", "Hā"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Maori [mi]
//! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("mk", {
            months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
            monthsShort: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"],
            weekdays: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
            weekdaysShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
            weekdaysMin: ["нe", "пo", "вт", "ср", "че", "пе", "сa"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "една минута",
                mm: "%d минути",
                h: "еден час",
                hh: "%d часа",
                d: "еден ден",
                dd: "%d дена",
                M: "еден месец",
                MM: "%d месеци",
                y: "една година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10, a = e % 100;
                return 0 === e ? e + "-ев" : 0 == a ? e + "-ен" : 10 < a && 20 > a ? e + "-ти" : 1 == t ? e + "-ви" : 2 == t ? e + "-ри" : 7 == t || 8 == t ? e + "-ми" : e + "-ти"
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Macedonian [mk]
//! author : Borislav Mickov : https://github.com/B0k0
//! author : Sashko Todorov : https://github.com/bkyceh
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ml", {
            months: ["ജനുവരി", "ഫെബ്രുവരി", "മാർച്ച്", "ഏപ്രിൽ", "മേയ്", "ജൂൺ", "ജൂലൈ", "ഓഗസ്റ്റ്", "സെപ്റ്റംബർ", "ഒക്ടോബർ", "നവംബർ", "ഡിസംബർ"],
            monthsShort: ["ജനു.", "ഫെബ്രു.", "മാർ.", "ഏപ്രി.", "മേയ്", "ജൂൺ", "ജൂലൈ.", "ഓഗ.", "സെപ്റ്റ.", "ഒക്ടോ.", "നവം.", "ഡിസം."],
            monthsParseExact: !0,
            weekdays: ["ഞായറാഴ്ച", "തിങ്കളാഴ്ച", "ചൊവ്വാഴ്ച", "ബുധനാഴ്ച", "വ്യാഴാഴ്ച", "വെള്ളിയാഴ്ച", "ശനിയാഴ്ച"],
            weekdaysShort: ["ഞായർ", "തിങ്കൾ", "ചൊവ്വ", "ബുധൻ", "വ്യാഴം", "വെള്ളി", "ശനി"],
            weekdaysMin: ["ഞാ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"],
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && 4 <= e || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function (e) {
                return 4 > e ? "രാത്രി" : 12 > e ? "രാവിലെ" : 17 > e ? "ഉച്ച കഴിഞ്ഞ്" : 20 > e ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Malayalam [ml]
//! author : Floyd Pink : https://github.com/floydpink
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            return "s" === a ? t ? "хэдхэн секунд" : "хэдхэн секундын" : "ss" === a ? e + (t ? " секунд" : " секундын") : "m" === a || "mm" === a ? e + (t ? " минут" : " минутын") : "h" === a || "hh" === a ? e + (t ? " цаг" : " цагийн") : "d" === a || "dd" === a ? e + (t ? " өдөр" : " өдрийн") : "M" === a || "MM" === a ? e + (t ? " сар" : " сарын") : "y" === a || "yy" === a ? e + (t ? " жил" : " жилийн") : e
        }

        e.defineLocale("mn", {
            months: ["Нэгдүгээр сар", "Хоёрдугаар сар", "Гуравдугаар сар", "Дөрөвдүгээр сар", "Тавдугаар сар", "Зургадугаар сар", "Долдугаар сар", "Наймдугаар сар", "Есдүгээр сар", "Аравдугаар сар", "Арван нэгдүгээр сар", "Арван хоёрдугаар сар"],
            monthsShort: ["1 сар", "2 сар", "3 сар", "4 сар", "5 сар", "6 сар", "7 сар", "8 сар", "9 сар", "10 сар", "11 сар", "12 сар"],
            monthsParseExact: !0,
            weekdays: ["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"],
            weekdaysShort: ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"],
            weekdaysMin: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY оны MMMMын D",
                LLL: "YYYY оны MMMMын D HH:mm",
                LLLL: "dddd, YYYY оны MMMMын D HH:mm"
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function (e) {
                return "ҮХ" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ҮӨ" : "ҮХ"
            },
            calendar: {
                sameDay: "[Өнөөдөр] LT",
                nextDay: "[Маргааш] LT",
                nextWeek: "[Ирэх] dddd LT",
                lastDay: "[Өчигдөр] LT",
                lastWeek: "[Өнгөрсөн] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s дараа",
                past: "%s өмнө",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function (e, t) {
                return "d" === t || "D" === t || "DDD" === t ? e + " өдөр" : e
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Mongolian [mn]
//! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            var n = "";
            return t ? "s" === a ? n = "काही सेकंद" : "ss" === a ? n = "%d सेकंद" : "m" === a ? n = "एक मिनिट" : "mm" === a ? n = "%d मिनिटे" : "h" === a ? n = "एक तास" : "hh" === a ? n = "%d तास" : "d" === a ? n = "एक दिवस" : "dd" === a ? n = "%d दिवस" : "M" === a ? n = "एक महिना" : "MM" === a ? n = "%d महिने" : "y" === a ? n = "एक वर्ष" : "yy" === a && (n = "%d वर्षे") : "s" === a ? n = "काही सेकंदां" : "ss" === a ? n = "%d सेकंदां" : "m" === a ? n = "एका मिनिटा" : "mm" === a ? n = "%d मिनिटां" : "h" === a ? n = "एका तासा" : "hh" === a ? n = "%d तासां" : "d" === a ? n = "एका दिवसा" : "dd" === a ? n = "%d दिवसां" : "M" === a ? n = "एका महिन्या" : "MM" === a ? n = "%d महिन्यां" : "y" === a ? n = "एका वर्षा" : "yy" === a && (n = "%d वर्षां"), n.replace(/%d/i, e)
        }

        var a = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        e.defineLocale("mr", {
            months: ["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"],
            monthsShort: ["जाने.", "फेब्रु.", "मार्च.", "एप्रि.", "मे.", "जून.", "जुलै.", "ऑग.", "सप्टें.", "ऑक्टो.", "नोव्हें.", "डिसें."],
            monthsParseExact: !0,
            weekdays: ["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरूवार", "शुक्रवार", "शनिवार"],
            weekdaysShort: ["रवि", "सोम", "मंगळ", "बुध", "गुरू", "शुक्र", "शनि"],
            weekdaysMin: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return a[e]
                }))
            },
            meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "पहाटे" === t || "सकाळी" === t ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? 12 <= e ? e : e + 12 : void 0
            },
            meridiem: function (e) {
                return 0 <= e && 6 > e ? "पहाटे" : 12 > e ? "सकाळी" : 17 > e ? "दुपारी" : 20 > e ? "सायंकाळी" : "रात्री"
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Marathi [mr]
//! author : Harshad Kale : https://github.com/kalehv
//! author : Vivek Athalye : https://github.com/vnathalye
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ms", {
            months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
            monthsShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogs", "Sep", "Okt", "Nov", "Dis"],
            weekdays: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
            weekdaysShort: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
            weekdaysMin: ["Ah", "Is", "Sl", "Rb", "Km", "Jm", "Sb"],
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? 11 <= e ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Malay [ms]
//! author : Weldan Jamili : https://github.com/weldan
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ms-my", {
            months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
            monthsShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogs", "Sep", "Okt", "Nov", "Dis"],
            weekdays: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
            weekdaysShort: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
            weekdaysMin: ["Ah", "Is", "Sl", "Rb", "Km", "Jm", "Sb"],
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? 11 <= e ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Malay [ms-my]
//! note : DEPRECATED, the correct one is [ms]
//! author : Weldan Jamili : https://github.com/weldan
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("mt", {
            months: ["Jannar", "Frar", "Marzu", "April", "Mejju", "Ġunju", "Lulju", "Awwissu", "Settembru", "Ottubru", "Novembru", "Diċembru"],
            monthsShort: ["Jan", "Fra", "Mar", "Apr", "Mej", "Ġun", "Lul", "Aww", "Set", "Ott", "Nov", "Diċ"],
            weekdays: ["Il-Ħadd", "It-Tnejn", "It-Tlieta", "L-Erbgħa", "Il-Ħamis", "Il-Ġimgħa", "Is-Sibt"],
            weekdaysShort: ["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"],
            weekdaysMin: ["Ħa", "Tn", "Tl", "Er", "Ħa", "Ġi", "Si"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Maltese (Malta) [mt]
//! author : Alessandro Maruccia : https://github.com/alesma
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀"},
            a = {"၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0"};
        e.defineLocale("my", {
            months: ["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "သြဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ"],
            monthsShort: ["ဇန်", "ဖေ", "မတ်", "ပြီ", "မေ", "ဇွန်", "လိုင်", "သြ", "စက်", "အောက်", "နို", "ဒီ"],
            weekdays: ["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"],
            weekdaysShort: ["နွေ", "လာ", "ဂါ", "ဟူး", "ကြာ", "သော", "နေ"],
            weekdaysMin: ["နွေ", "လာ", "ဂါ", "ဟူး", "ကြာ", "သော", "နေ"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function (e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function (e) {
                    return a[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Burmese [my]
//! author : Squar team, mysquar.com
//! author : David Rossellat : https://github.com/gholadr
//! author : Tin Aung Lin : https://github.com/thanyawzinmin
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("nb", {
            months: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            monthsShort: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."],
            monthsParseExact: !0,
            weekdays: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
            weekdaysShort: ["sø.", "ma.", "ti.", "on.", "to.", "fr.", "lø."],
            weekdaysMin: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga
//!           Stephen Ramthun : https://github.com/stephenramthun
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            a = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        e.defineLocale("ne", {
            months: ["जनवरी", "फेब्रुवरी", "मार्च", "अप्रिल", "मई", "जुन", "जुलाई", "अगष्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"],
            monthsShort: ["जन.", "फेब्रु.", "मार्च", "अप्रि.", "मई", "जुन", "जुलाई.", "अग.", "सेप्ट.", "अक्टो.", "नोभे.", "डिसे."],
            monthsParseExact: !0,
            weekdays: ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"],
            weekdaysShort: ["आइत.", "सोम.", "मङ्गल.", "बुध.", "बिहि.", "शुक्र.", "शनि."],
            weekdaysMin: ["आ.", "सो.", "मं.", "बु.", "बि.", "शु.", "श."],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                    return a[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "राति" === t ? 4 > e ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? 10 <= e ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 3 > e ? "राति" : 12 > e ? "बिहान" : 16 > e ? "दिउँसो" : 20 > e ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Nepalese [ne]
//! author : suvash : https://github.com/suvash
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
            a = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            weekdaysShort: ["zo.", "ma.", "di.", "wo.", "do.", "vr.", "za."],
            weekdaysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
            a = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            weekdaysShort: ["zo.", "ma.", "di.", "wo.", "do.", "vr.", "za."],
            weekdaysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("nn", {
            months: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            monthsShort: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."],
            monthsParseExact: !0,
            weekdays: ["sundag", "måndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"],
            weekdaysShort: ["su.", "må.", "ty.", "on.", "to.", "fr.", "lau."],
            weekdaysMin: ["su", "må", "ty", "on", "to", "fr", "la"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Nynorsk [nn]
//! authors : https://github.com/mechuwind
//!           Stephen Ramthun : https://github.com/stephenramthun
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("oc-lnc", {
            months: {
                standalone: ["genièr", "febrièr", "març", "abril", "mai", "junh", "julhet", "agost", "setembre", "octòbre", "novembre", "decembre"],
                format: ["de genièr", "de febrièr", "de març", "d'abril", "de mai", "de junh", "de julhet", "d'agost", "de setembre", "d'octòbre", "de novembre", "de decembre"],
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: ["gen.", "febr.", "març", "abr.", "mai", "junh", "julh.", "ago.", "set.", "oct.", "nov.", "dec."],
            monthsParseExact: !0,
            weekdays: ["dimenge", "diluns", "dimars", "dimècres", "dijòus", "divendres", "dissabte"],
            weekdaysShort: ["dg.", "dl.", "dm.", "dc.", "dj.", "dv.", "ds."],
            weekdaysMin: ["dg", "dl", "dm", "dc", "dj", "dv", "ds"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: "[uèi a] LT",
                nextDay: "[deman a] LT",
                nextWeek: "dddd [a] LT",
                lastDay: "[ièr a] LT",
                lastWeek: "dddd [passat a] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "unas segondas",
                ss: "%d segondas",
                m: "una minuta",
                mm: "%d minutas",
                h: "una ora",
                hh: "%d oras",
                d: "un jorn",
                dd: "%d jorns",
                M: "un mes",
                MM: "%d meses",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
                var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return ("w" === t || "W" === t) && (a = "a"), e + a
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Occitan, lengadocian dialecte [oc-lnc]
//! author : Quentin PAGÈS : https://github.com/Quenty31
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦"},
            a = {"੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0"};
        e.defineLocale("pa-in", {
            months: ["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ"],
            monthsShort: ["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ"],
            weekdays: ["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨੀਚਰਵਾਰ"],
            weekdaysShort: ["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁਧ", "ਵੀਰ", "ਸ਼ੁਕਰ", "ਸ਼ਨੀ"],
            weekdaysMin: ["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁਧ", "ਵੀਰ", "ਸ਼ੁਕਰ", "ਸ਼ਨੀ"],
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "[ਅਗਲਾ] dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function (e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function (e) {
                    return a[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? 4 > e ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? 10 <= e ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "ਰਾਤ" : 10 > e ? "ਸਵੇਰ" : 17 > e ? "ਦੁਪਹਿਰ" : 20 > e ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Punjabi (India) [pa-in]
//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e) {
            return 5 > e % 10 && 1 < e % 10 && 1 != ~~(e / 10) % 10
        }

        function a(e, a, n) {
            var r = e + " ";
            return "ss" === n ? r + (t(e) ? "sekundy" : "sekund") : "m" === n ? a ? "minuta" : "minutę" : "mm" === n ? r + (t(e) ? "minuty" : "minut") : "h" === n ? a ? "godzina" : "godzinę" : "hh" === n ? r + (t(e) ? "godziny" : "godzin") : "MM" === n ? r + (t(e) ? "miesiące" : "miesięcy") : "yy" === n ? r + (t(e) ? "lata" : "lat") : void 0
        }

        var n = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
            r = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
        e.defineLocale("pl", {
            months: function (e, t) {
                return e ? "" === t ? "(" + r[e.month()] + "|" + n[e.month()] + ")" : /D MMMM/.test(t) ? r[e.month()] : n[e.month()] : n
            },
            monthsShort: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
            weekdays: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
            weekdaysShort: ["ndz", "pon", "wt", "śr", "czw", "pt", "sob"],
            weekdaysMin: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                }, lastDay: "[Wczoraj o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: a,
                y: "rok",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("pt", {
            months: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
            monthsShort: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
            weekdays: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            weekdaysMin: ["Do", "2ª", "3ª", "4ª", "5ª", "6ª", "Sá"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Portuguese [pt]
//! author : Jefferson : https://github.com/jalex79
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("pt-br", {
            months: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
            monthsShort: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
            weekdays: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
            weekdaysShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
            weekdaysMin: ["do", "2ª", "3ª", "4ª", "5ª", "6ª", "sá"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    }(a(0));//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            var n = " ";
            return (20 <= e % 100 || 100 <= e && 0 == e % 100) && (n = " de "), e + n + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[a]
        }

        e.defineLocale("ro", {
            months: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"],
            monthsShort: ["ian.", "feb.", "mart.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."],
            monthsParseExact: !0,
            weekdays: ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"],
            weekdaysShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
            weekdaysMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
//! author : Emanuel Cepoi : https://github.com/cepem
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            return "m" === a ? t ? "минута" : "минуту" : e + " " + function (e, t) {
                var a = e.split("_");
                return 1 == t % 10 && 11 != t % 100 ? a[0] : 2 <= t % 10 && 4 >= t % 10 && (10 > t % 100 || 20 <= t % 100) ? a[1] : a[2]
            }({
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[a], +e)
        }

        var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        e.defineLocale("ru", {
            months: {
                format: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
                standalone: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
            },
            monthsShort: {
                format: ["янв.", "февр.", "мар.", "апр.", "мая", "июня", "июля", "авг.", "сент.", "окт.", "нояб.", "дек."],
                standalone: ["янв.", "февр.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."]
            },
            weekdays: {
                standalone: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
                format: ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"],
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
            },
            weekdaysShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            weekdaysMin: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня, в] LT",
                nextDay: "[Завтра, в] LT",
                lastDay: "[Вчера, в] LT",
                nextWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT"
                    }
                },
                lastWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: t,
                m: t,
                mm: t,
                h: "час",
                hh: t,
                d: "день",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function (e) {
                return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
                return "M" === t || "d" === t || "DDD" === t ? e + "-й" : "D" === t ? e + "-го" : "w" === t || "W" === t ? e + "-я" : e
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: a,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
                return "شام" === e
            },
            meridiem: function (e) {
                return 12 > e ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Sindhi [sd]
//! author : Narain Sagar : https://github.com/narainsagar
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("se", {
            months: ["ođđajagemánnu", "guovvamánnu", "njukčamánnu", "cuoŋománnu", "miessemánnu", "geassemánnu", "suoidnemánnu", "borgemánnu", "čakčamánnu", "golggotmánnu", "skábmamánnu", "juovlamánnu"],
            monthsShort: ["ođđj", "guov", "njuk", "cuo", "mies", "geas", "suoi", "borg", "čakč", "golg", "skáb", "juov"],
            weekdays: ["sotnabeaivi", "vuossárga", "maŋŋebárga", "gaskavahkku", "duorastat", "bearjadat", "lávvardat"],
            weekdaysShort: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
            weekdaysMin: ["s", "v", "m", "g", "d", "b", "L"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Northern Sami [se]
//! authors : Bård Rolstad Henriksen : https://github.com/karamell
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("si", {
            months: ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"],
            monthsShort: ["ජන", "පෙබ", "මාර්", "අප්", "මැයි", "ජූනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"],
            weekdays: ["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"],
            weekdaysShort: ["ඉරි", "සඳු", "අඟ", "බදා", "බ්‍රහ", "සිකු", "සෙන"],
            weekdaysMin: ["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function (e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function (e, t, a) {
                return 11 < e ? a ? "ප.ව." : "පස් වරු" : a ? "පෙ.ව." : "පෙර වරු"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Sinhalese [si]
//! author : Sampath Sitinamaluwa : https://github.com/sampathsris
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e) {
            return 1 < e && 5 > e
        }

        function a(e, a, n, r) {
            var s = e + " ";
            return "s" === n ? a || r ? "pár sekúnd" : "pár sekundami" : "ss" === n ? a || r ? s + (t(e) ? "sekundy" : "sekúnd") : s + "sekundami" : "m" === n ? a ? "minúta" : r ? "minútu" : "minútou" : "mm" === n ? a || r ? s + (t(e) ? "minúty" : "minút") : s + "minútami" : "h" === n ? a ? "hodina" : r ? "hodinu" : "hodinou" : "hh" === n ? a || r ? s + (t(e) ? "hodiny" : "hodín") : s + "hodinami" : "d" === n ? a || r ? "deň" : "dňom" : "dd" === n ? a || r ? s + (t(e) ? "dni" : "dní") : s + "dňami" : "M" === n ? a || r ? "mesiac" : "mesiacom" : "MM" === n ? a || r ? s + (t(e) ? "mesiace" : "mesiacov") : s + "mesiacmi" : "y" === n ? a || r ? "rok" : "rokom" : "yy" === n ? a || r ? s + (t(e) ? "roky" : "rokov") : s + "rokmi" : void 0
        }

        e.defineLocale("sk", {
            months: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
            monthsShort: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"],
            weekdays: ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"],
            weekdaysShort: ["ne", "po", "ut", "st", "št", "pi", "so"],
            weekdaysMin: ["ne", "po", "ut", "st", "št", "pi", "so"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                }, lastDay: "[včera o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Martin Minka : https://github.com/k2s
//! based on work of petrbela : https://github.com/petrbela
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a, n) {
            var r = e + " ";
            return "s" === a ? t || n ? "nekaj sekund" : "nekaj sekundami" : "ss" === a ? r += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || n ? "sekundi" : "sekundah" : 5 > e ? t || n ? "sekunde" : "sekundah" : "sekund" : "m" === a ? t ? "ena minuta" : "eno minuto" : "mm" === a ? r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : 5 > e ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami" : "h" === a ? t ? "ena ura" : "eno uro" : "hh" === a ? r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : 5 > e ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami" : "d" === a ? t || n ? "en dan" : "enim dnem" : "dd" === a ? r += 1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi" : "M" === a ? t || n ? "en mesec" : "enim mesecem" : "MM" === a ? r += 1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : 5 > e ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci" : "y" === a ? t || n ? "eno leto" : "enim letom" : "yy" === a ? r += 1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : 5 > e ? t || n ? "leta" : "leti" : t || n ? "let" : "leti" : void 0
        }

        e.defineLocale("sl", {
            months: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj.", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."],
            monthsParseExact: !0,
            weekdays: ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"],
            weekdaysShort: ["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."],
            weekdaysMin: ["ne", "po", "to", "sr", "če", "pe", "so"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                }, lastDay: "[včeraj ob] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : Robert Sedovšek : https://github.com/sedovsek
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("sq", {
            months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
            monthsShort: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "Nën", "Dhj"],
            weekdays: ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"],
            weekdaysShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Sht"],
            weekdaysMin: ["D", "H", "Ma", "Më", "E", "P", "Sh"],
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (e) {
                return "M" === e.charAt(0)
            },
            meridiem: function (e) {
                return 12 > e ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Albanian [sq]
//! author : Flakërim Ismani : https://github.com/flakerimi
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Oerd Cukalla : https://github.com/oerd
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : 2 <= e && 4 >= e ? t[1] : t[2]
            }, translate: function (e, a, n) {
                var r = t.words[n];
                return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
        };
        e.defineLocale("sr", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            monthsParseExact: !0,
            weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juče u] LT", lastWeek: function () {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Serbian [sr]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : 2 <= e && 4 >= e ? t[1] : t[2]
            }, translate: function (e, a, n) {
                var r = t.words[n];
                return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
            monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
            monthsParseExact: !0,
            weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
            weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
            weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                }, lastDay: "[јуче у] LT", lastWeek: function () {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Serbian Cyrillic [sr-cyrl]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ss", {
            months: ["Bhimbidvwane", "Indlovana", "Indlov'lenkhulu", "Mabasa", "Inkhwekhweti", "Inhlaba", "Kholwane", "Ingci", "Inyoni", "Imphala", "Lweti", "Ingongoni"],
            monthsShort: ["Bhi", "Ina", "Inu", "Mab", "Ink", "Inh", "Kho", "Igc", "Iny", "Imp", "Lwe", "Igo"],
            weekdays: ["Lisontfo", "Umsombuluko", "Lesibili", "Lesitsatfu", "Lesine", "Lesihlanu", "Umgcibelo"],
            weekdaysShort: ["Lis", "Umb", "Lsb", "Les", "Lsi", "Lsh", "Umg"],
            weekdaysMin: ["Li", "Us", "Lb", "Lt", "Ls", "Lh", "Ug"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (e) {
                return 11 > e ? "ekuseni" : 15 > e ? "emini" : 19 > e ? "entsambama" : "ebusuku"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? 11 <= e ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : siSwati [ss]
//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("sv", {
            months: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
            monthsShort: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            weekdays: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
            weekdaysShort: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"],
            weekdaysMin: ["sö", "må", "ti", "on", "to", "fr", "lö"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 == t || 2 == t ? ":a" : ":e")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("sw", {
            months: ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"],
            monthsShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ago", "Sep", "Okt", "Nov", "Des"],
            weekdays: ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
            weekdaysShort: ["Jpl", "Jtat", "Jnne", "Jtan", "Alh", "Ijm", "Jmos"],
            weekdaysMin: ["J2", "J3", "J4", "J5", "Al", "Ij", "J1"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "hh:mm A",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "siku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Swahili [sw]
//! author : Fahad Kassim : https://github.com/fadsel
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦"},
            a = {"௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0"};
        e.defineLocale("ta", {
            months: ["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டெம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"],
            monthsShort: ["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டெம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"],
            weekdays: ["ஞாயிற்றுக்கிழமை", "திங்கட்கிழமை", "செவ்வாய்கிழமை", "புதன்கிழமை", "வியாழக்கிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை"],
            weekdaysShort: ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
            weekdaysMin: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
                return e + "வது"
            },
            preparse: function (e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function (e) {
                    return a[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e) {
                return 2 > e ? " யாமம்" : 6 > e ? " வைகறை" : 10 > e ? " காலை" : 14 > e ? " நண்பகல்" : 18 > e ? " எற்பாடு" : 22 > e ? " மாலை" : " யாமம்"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? 2 > e ? e : e + 12 : "வைகறை" === t || "காலை" === t || "நண்பகல்" === t && 10 <= e ? e : e + 12
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Tamil [ta]
//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("te", {
            months: ["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జులై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"],
            monthsShort: ["జన.", "ఫిబ్ర.", "మార్చి", "ఏప్రి.", "మే", "జూన్", "జులై", "ఆగ.", "సెప్.", "అక్టో.", "నవ.", "డిసె."],
            monthsParseExact: !0,
            weekdays: ["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"],
            weekdaysShort: ["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"],
            weekdaysMin: ["ఆ", "సో", "మం", "బు", "గు", "శు", "శ"],
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? 4 > e ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? 10 <= e ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "రాత్రి" : 10 > e ? "ఉదయం" : 17 > e ? "మధ్యాహ్నం" : 20 > e ? "సాయంత్రం" : "రాత్రి"
            },
            week: {dow: 0, doy: 6}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Telugu [te]
//! author : Krishna Chaitanya Thota : https://github.com/kcthota
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("tet", {
            months: ["Janeiru", "Fevereiru", "Marsu", "Abril", "Maiu", "Juñu", "Jullu", "Agustu", "Setembru", "Outubru", "Novembru", "Dezembru"],
            monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            weekdays: ["Domingu", "Segunda", "Tersa", "Kuarta", "Kinta", "Sesta", "Sabadu"],
            weekdaysShort: ["Dom", "Seg", "Ters", "Kua", "Kint", "Sest", "Sab"],
            weekdaysMin: ["Do", "Seg", "Te", "Ku", "Ki", "Ses", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "segundu balun",
                ss: "segundu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Tetun Dili (East Timor) [tet]
//! author : Joshua Brooks : https://github.com/joshbrooks
//! author : Onorio De J. Afonso : https://github.com/marobo
//! author : Sonia Simoes : https://github.com/soniasimoes
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум"
        };
        e.defineLocale("tg", {
            months: ["январ", "феврал", "март", "апрел", "май", "июн", "июл", "август", "сентябр", "октябр", "ноябр", "декабр"],
            monthsShort: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
            weekdays: ["якшанбе", "душанбе", "сешанбе", "чоршанбе", "панҷшанбе", "ҷумъа", "шанбе"],
            weekdaysShort: ["яшб", "дшб", "сшб", "чшб", "пшб", "ҷум", "шнб"],
            weekdaysMin: ["яш", "дш", "сш", "чш", "пш", "ҷм", "шб"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Имрӯз соати] LT",
                nextDay: "[Пагоҳ соати] LT",
                lastDay: "[Дирӯз соати] LT",
                nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "баъди %s",
                past: "%s пеш",
                s: "якчанд сония",
                m: "як дақиқа",
                mm: "%d дақиқа",
                h: "як соат",
                hh: "%d соат",
                d: "як рӯз",
                dd: "%d рӯз",
                M: "як моҳ",
                MM: "%d моҳ",
                y: "як сол",
                yy: "%d сол"
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "шаб" === t ? 4 > e ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? 11 <= e ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "шаб" : 11 > e ? "субҳ" : 16 > e ? "рӯз" : 19 > e ? "бегоҳ" : "шаб"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function (e) {
                return e + (t[e] || t[e % 10] || t[100 <= e ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Tajik [tg]
//! author : Orif N. Jr. : https://github.com/orif-jr
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("th", {
            months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            monthsShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
            monthsParseExact: !0,
            weekdays: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
            weekdaysShort: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์"],
            weekdaysMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Thai [th]
//! author : Kridsada Thanabulpong : https://github.com/sirn
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {
            1: "'inji",
            5: "'inji",
            8: "'inji",
            70: "'inji",
            80: "'inji",
            2: "'nji",
            7: "'nji",
            20: "'nji",
            50: "'nji",
            3: "'ünji",
            4: "'ünji",
            100: "'ünji",
            6: "'njy",
            9: "'unjy",
            10: "'unjy",
            30: "'unjy",
            60: "'ynjy",
            90: "'ynjy"
        };
        e.defineLocale("tk", {
            months: ["Ýanwar", "Fewral", "Mart", "Aprel", "Maý", "Iýun", "Iýul", "Awgust", "Sentýabr", "Oktýabr", "Noýabr", "Dekabr"],
            monthsShort: ["Ýan", "Few", "Mar", "Apr", "Maý", "Iýn", "Iýl", "Awg", "Sen", "Okt", "Noý", "Dek"],
            weekdays: ["Ýekşenbe", "Duşenbe", "Sişenbe", "Çarşenbe", "Penşenbe", "Anna", "Şenbe"],
            weekdaysShort: ["Ýek", "Duş", "Siş", "Çar", "Pen", "Ann", "Şen"],
            weekdaysMin: ["Ýk", "Dş", "Sş", "Çr", "Pn", "An", "Şn"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün sagat] LT",
                nextDay: "[ertir sagat] LT",
                nextWeek: "[indiki] dddd [sagat] LT",
                lastDay: "[düýn] LT",
                lastWeek: "[geçen] dddd [sagat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s soň",
                past: "%s öň",
                s: "birnäçe sekunt",
                m: "bir minut",
                mm: "%d minut",
                h: "bir sagat",
                hh: "%d sagat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir aý",
                MM: "%d aý",
                y: "bir ýyl",
                yy: "%d ýyl"
            },
            ordinal: function (e, a) {
                switch (a) {
                    case"d":
                    case"D":
                    case"Do":
                    case"DD":
                        return e;
                    default:
                        if (0 === e) return e + "'unjy";
                        var n = e % 10;
                        return e + (t[n] || t[e % 100 - n] || t[100 <= e ? 100 : null])
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Turkmen [tk]
//! author : Atamyrat Abdyrahmanov : https://github.com/atamyratabdy
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("tl-ph", {
            months: ["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"],
            monthsShort: ["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"],
            weekdays: ["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"],
            weekdaysShort: ["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"],
            weekdaysMin: ["Li", "Lu", "Ma", "Mi", "Hu", "Bi", "Sab"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Tagalog (Philippines) [tl-ph]
//! author : Dan Hagman : https://github.com/hagmandan
}, function (e, t, a) {
    var n = Math.floor;//! moment.js locale configuration
//! locale : Klingon [tlh]
//! author : Dominika Kruk : https://github.com/amaranthrose
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, n) {
            var r = a(e);
            return "ss" === n ? r + " lup" : "mm" === n ? r + " tup" : "hh" === n ? r + " rep" : "dd" === n ? r + " jaj" : "MM" === n ? r + " jar" : "yy" === n ? r + " DIS" : void 0
        }

        function a(e) {
            var t = n(e % 1e3 / 100), a = n(e % 100 / 10), s = e % 10, d = "";
            return 0 < t && (d += r[t] + "vatlh"), 0 < a && (d += ("" == d ? "" : " ") + r[a] + "maH"), 0 < s && (d += ("" == d ? "" : " ") + r[s]), "" == d ? "pagh" : d
        }

        var r = ["pagh", "wa’", "cha’", "wej", "loS", "vagh", "jav", "Soch", "chorgh", "Hut"];
        e.defineLocale("tlh", {
            months: ["tera’ jar wa’", "tera’ jar cha’", "tera’ jar wej", "tera’ jar loS", "tera’ jar vagh", "tera’ jar jav", "tera’ jar Soch", "tera’ jar chorgh", "tera’ jar Hut", "tera’ jar wa’maH", "tera’ jar wa’maH wa’", "tera’ jar wa’maH cha’"],
            monthsShort: ["jar wa’", "jar cha’", "jar wej", "jar loS", "jar vagh", "jar jav", "jar Soch", "jar chorgh", "jar Hut", "jar wa’maH", "jar wa’maH wa’", "jar wa’maH cha’"],
            monthsParseExact: !0,
            weekdays: ["lojmItjaj", "DaSjaj", "povjaj", "ghItlhjaj", "loghjaj", "buqjaj", "ghInjaj"],
            weekdaysShort: ["lojmItjaj", "DaSjaj", "povjaj", "ghItlhjaj", "loghjaj", "buqjaj", "ghInjaj"],
            weekdaysMin: ["lojmItjaj", "DaSjaj", "povjaj", "ghItlhjaj", "loghjaj", "buqjaj", "ghInjaj"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    var t = e;
                    return t = -1 === e.indexOf("jaj") ? -1 === e.indexOf("jar") ? -1 === e.indexOf("DIS") ? t + " pIq" : t.slice(0, -3) + "nem" : t.slice(0, -3) + "waQ" : t.slice(0, -3) + "leS"
                },
                past: function (e) {
                    var t = e;
                    return t = -1 === e.indexOf("jaj") ? -1 === e.indexOf("jar") ? -1 === e.indexOf("DIS") ? t + " ret" : t.slice(0, -3) + "ben" : t.slice(0, -3) + "wen" : t.slice(0, -3) + "Hu’"
                },
                s: "puS lup",
                ss: t,
                m: "wa’ tup",
                mm: t,
                h: "wa’ rep",
                hh: t,
                d: "wa’ jaj",
                dd: t,
                M: "wa’ jar",
                MM: t,
                y: "wa’ DIS",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0))
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        e.defineLocale("tr", {
            months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthsShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            weekdays: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            weekdaysShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
            weekdaysMin: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            meridiem: function (e, t, a) {
                return 12 > e ? a ? "öö" : "ÖÖ" : a ? "ös" : "ÖS"
            },
            meridiemParse: /öö|ÖÖ|ös|ÖS/,
            isPM: function (e) {
                return "ös" === e || "ÖS" === e
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function (e, a) {
                switch (a) {
                    case"d":
                    case"D":
                    case"Do":
                    case"DD":
                        return e;
                    default:
                        if (0 === e) return e + "'ıncı";
                        var n = e % 10;
                        return e + (t[n] || t[e % 100 - n] || t[100 <= e ? 100 : null])
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a, n) {
            var r = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return n || t ? r[a][0] : r[a][1]
        }

        e.defineLocale("tzl", {
            months: ["Januar", "Fevraglh", "Març", "Avrïu", "Mai", "Gün", "Julia", "Guscht", "Setemvar", "Listopäts", "Noemvar", "Zecemvar"],
            monthsShort: ["Jan", "Fev", "Mar", "Avr", "Mai", "Gün", "Jul", "Gus", "Set", "Lis", "Noe", "Zec"],
            weekdays: ["Súladi", "Lúneçi", "Maitzi", "Márcuri", "Xhúadi", "Viénerçi", "Sáturi"],
            weekdaysShort: ["Súl", "Lún", "Mai", "Már", "Xhú", "Vié", "Sát"],
            weekdaysMin: ["Sú", "Lú", "Ma", "Má", "Xh", "Vi", "Sá"],
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function (e, t, a) {
                return 11 < e ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Talossan [tzl]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v
//! author : Iustì Canun
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("tzm", {
            months: ["ⵉⵏⵏⴰⵢⵔ", "ⴱⵕⴰⵢⵕ", "ⵎⴰⵕⵚ", "ⵉⴱⵔⵉⵔ", "ⵎⴰⵢⵢⵓ", "ⵢⵓⵏⵢⵓ", "ⵢⵓⵍⵢⵓⵣ", "ⵖⵓⵛⵜ", "ⵛⵓⵜⴰⵏⴱⵉⵔ", "ⴽⵟⵓⴱⵕ", "ⵏⵓⵡⴰⵏⴱⵉⵔ", "ⴷⵓⵊⵏⴱⵉⵔ"],
            monthsShort: ["ⵉⵏⵏⴰⵢⵔ", "ⴱⵕⴰⵢⵕ", "ⵎⴰⵕⵚ", "ⵉⴱⵔⵉⵔ", "ⵎⴰⵢⵢⵓ", "ⵢⵓⵏⵢⵓ", "ⵢⵓⵍⵢⵓⵣ", "ⵖⵓⵛⵜ", "ⵛⵓⵜⴰⵏⴱⵉⵔ", "ⴽⵟⵓⴱⵕ", "ⵏⵓⵡⴰⵏⴱⵉⵔ", "ⴷⵓⵊⵏⴱⵉⵔ"],
            weekdays: ["ⴰⵙⴰⵎⴰⵙ", "ⴰⵢⵏⴰⵙ", "ⴰⵙⵉⵏⴰⵙ", "ⴰⴽⵔⴰⵙ", "ⴰⴽⵡⴰⵙ", "ⴰⵙⵉⵎⵡⴰⵙ", "ⴰⵙⵉⴹⵢⴰⵙ"],
            weekdaysShort: ["ⴰⵙⴰⵎⴰⵙ", "ⴰⵢⵏⴰⵙ", "ⴰⵙⵉⵏⴰⵙ", "ⴰⴽⵔⴰⵙ", "ⴰⴽⵡⴰⵙ", "ⴰⵙⵉⵎⵡⴰⵙ", "ⴰⵙⵉⴹⵢⴰⵙ"],
            weekdaysMin: ["ⴰⵙⴰⵎⴰⵙ", "ⴰⵢⵏⴰⵙ", "ⴰⵙⵉⵏⴰⵙ", "ⴰⴽⵔⴰⵙ", "ⴰⴽⵡⴰⵙ", "ⴰⵙⵉⵎⵡⴰⵙ", "ⴰⵙⵉⴹⵢⴰⵙ"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {dow: 6, doy: 12}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Central Atlas Tamazight [tzm]
//! author : Abdel Said : https://github.com/abdelsaid
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("tzm-latn", {
            months: ["innayr", "brˤayrˤ", "marˤsˤ", "ibrir", "mayyw", "ywnyw", "ywlywz", "ɣwšt", "šwtanbir", "ktˤwbrˤ", "nwwanbir", "dwjnbir"],
            monthsShort: ["innayr", "brˤayrˤ", "marˤsˤ", "ibrir", "mayyw", "ywnyw", "ywlywz", "ɣwšt", "šwtanbir", "ktˤwbrˤ", "nwwanbir", "dwjnbir"],
            weekdays: ["asamas", "aynas", "asinas", "akras", "akwas", "asimwas", "asiḍyas"],
            weekdaysShort: ["asamas", "aynas", "asinas", "akras", "akwas", "asimwas", "asiḍyas"],
            weekdaysMin: ["asamas", "aynas", "asinas", "akras", "akwas", "asimwas", "asiḍyas"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {dow: 6, doy: 12}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Central Atlas Tamazight Latin [tzm-latn]
//! author : Abdel Said : https://github.com/abdelsaid
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("ug-cn", {
            months: ["يانۋار", "فېۋرال", "مارت", "ئاپرېل", "ماي", "ئىيۇن", "ئىيۇل", "ئاۋغۇست", "سېنتەبىر", "ئۆكتەبىر", "نويابىر", "دېكابىر"],
            monthsShort: ["يانۋار", "فېۋرال", "مارت", "ئاپرېل", "ماي", "ئىيۇن", "ئىيۇل", "ئاۋغۇست", "سېنتەبىر", "ئۆكتەبىر", "نويابىر", "دېكابىر"],
            weekdays: ["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"],
            weekdaysShort: ["يە", "دۈ", "سە", "چا", "پە", "جۈ", "شە"],
            weekdaysMin: ["يە", "دۈ", "سە", "چا", "پە", "جۈ", "شە"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : 11 <= e ? e : e + 12
            },
            meridiem: function (e, t) {
                var a = 100 * e + t;
                return 600 > a ? "يېرىم كېچە" : 900 > a ? "سەھەر" : 1130 > a ? "چۈشتىن بۇرۇن" : 1230 > a ? "چۈش" : 1800 > a ? "چۈشتىن كېيىن" : "كەچ"
            },
            calendar: {
                sameDay: "[بۈگۈن سائەت] LT",
                nextDay: "[ئەتە سائەت] LT",
                nextWeek: "[كېلەركى] dddd [سائەت] LT",
                lastDay: "[تۆنۈگۈن] LT",
                lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s كېيىن",
                past: "%s بۇرۇن",
                s: "نەچچە سېكونت",
                ss: "%d سېكونت",
                m: "بىر مىنۇت",
                mm: "%d مىنۇت",
                h: "بىر سائەت",
                hh: "%d سائەت",
                d: "بىر كۈن",
                dd: "%d كۈن",
                M: "بىر ئاي",
                MM: "%d ئاي",
                y: "بىر يىل",
                yy: "%d يىل"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function (e, t) {
                return "d" === t || "D" === t || "DDD" === t ? e + "-كۈنى" : "w" === t || "W" === t ? e + "-ھەپتە" : e
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Uyghur (China) [ug-cn]
//! author: boyaq : https://github.com/boyaq
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        function t(e, t, a) {
            return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + function (e, t) {
                var a = e.split("_");
                return 1 == t % 10 && 11 != t % 100 ? a[0] : 2 <= t % 10 && 4 >= t % 10 && (10 > t % 100 || 20 <= t % 100) ? a[1] : a[2]
            }({
                ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            }[a], +e)
        }

        function a(e) {
            return function () {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }

        e.defineLocale("uk", {
            months: {
                format: ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"],
                standalone: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"]
            },
            monthsShort: ["січ", "лют", "бер", "квіт", "трав", "черв", "лип", "серп", "вер", "жовт", "лист", "груд"],
            weekdays: function (e, t) {
                var a = {
                    nominative: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
                    accusative: ["неділю", "понеділок", "вівторок", "середу", "четвер", "п’ятницю", "суботу"],
                    genitive: ["неділі", "понеділка", "вівторка", "середи", "четверга", "п’ятниці", "суботи"]
                };
                return !0 === e ? a.nominative.slice(1, 7).concat(a.nominative.slice(0, 1)) : e ? a[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : a.nominative
            },
            weekdaysShort: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
            weekdaysMin: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: a("[Сьогодні "),
                nextDay: a("[Завтра "),
                lastDay: a("[Вчора "),
                nextWeek: a("[У] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return a("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return a("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: t,
                m: t,
                mm: t,
                h: "годину",
                hh: t,
                d: "день",
                dd: t,
                M: "місяць",
                MM: t,
                y: "рік",
                yy: t
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function (e) {
                return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
                return "M" === t || "d" === t || "DDD" === t || "w" === t || "W" === t ? e + "-й" : "D" === t ? e + "-го" : e
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elensúle : https://github.com/Oire
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
            a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: a,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
                return "شام" === e
            },
            meridiem: function (e) {
                return 12 > e ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Urdu [ur]
//! author : Sawood Alam : https://github.com/ibnesayeed
//! author : Zack : https://github.com/ZackVision
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("uz", {
            months: ["январ", "феврал", "март", "апрел", "май", "июн", "июл", "август", "сентябр", "октябр", "ноябр", "декабр"],
            monthsShort: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
            weekdays: ["Якшанба", "Душанба", "Сешанба", "Чоршанба", "Пайшанба", "Жума", "Шанба"],
            weekdaysShort: ["Якш", "Душ", "Сеш", "Чор", "Пай", "Жум", "Шан"],
            weekdaysMin: ["Як", "Ду", "Се", "Чо", "Па", "Жу", "Ша"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Uzbek [uz]
//! author : Sardor Muminov : https://github.com/muminoff
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("uz-latn", {
            months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
            monthsShort: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"],
            weekdays: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"],
            weekdaysShort: ["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"],
            weekdaysMin: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {dow: 1, doy: 7}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Uzbek Latin [uz-latn]
//! author : Rasulbek Mirzayev : github.com/Rasulbeeek
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("vi", {
            months: ["tháng 1", "tháng 2", "tháng 3", "tháng 4", "tháng 5", "tháng 6", "tháng 7", "tháng 8", "tháng 9", "tháng 10", "tháng 11", "tháng 12"],
            monthsShort: ["Thg 01", "Thg 02", "Thg 03", "Thg 04", "Thg 05", "Thg 06", "Thg 07", "Thg 08", "Thg 09", "Thg 10", "Thg 11", "Thg 12"],
            monthsParseExact: !0,
            weekdays: ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"],
            weekdaysShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            weekdaysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (e) {
                return /^ch$/i.test(e)
            },
            meridiem: function (e, t, a) {
                return 12 > e ? a ? "sa" : "SA" : a ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần trước lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Vietnamese [vi]
//! author : Bang Nguyen : https://github.com/bangnk
//! author : Chien Kira : https://github.com/chienkira
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("x-pseudo", {
            months: ["J~áñúá~rý", "F~ébrú~árý", "~Márc~h", "Áp~ríl", "~Máý", "~Júñé~", "Júl~ý", "Áú~gúst~", "Sép~témb~ér", "Ó~ctób~ér", "Ñ~óvém~bér", "~Décé~mbér"],
            monthsShort: ["J~áñ", "~Féb", "~Már", "~Ápr", "~Máý", "~Júñ", "~Júl", "~Áúg", "~Sép", "~Óct", "~Ñóv", "~Déc"],
            monthsParseExact: !0,
            weekdays: ["S~úñdá~ý", "Mó~ñdáý~", "Túé~sdáý~", "Wéd~ñésd~áý", "T~húrs~dáý", "~Fríd~áý", "S~átúr~dáý"],
            weekdaysShort: ["S~úñ", "~Móñ", "~Túé", "~Wéd", "~Thú", "~Frí", "~Sát"],
            weekdaysMin: ["S~ú", "Mó~", "Tú", "~Wé", "T~h", "Fr~", "Sá"],
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Pseudo [x-pseudo]
//! author : Andrew Hood : https://github.com/andrewhood125
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("yo", {
            months: ["Sẹ́rẹ́", "Èrèlè", "Ẹrẹ̀nà", "Ìgbé", "Èbibi", "Òkùdu", "Agẹmo", "Ògún", "Owewe", "Ọ̀wàrà", "Bélú", "Ọ̀pẹ̀̀"],
            monthsShort: ["Sẹ́r", "Èrl", "Ẹrn", "Ìgb", "Èbi", "Òkù", "Agẹ", "Ògú", "Owe", "Ọ̀wà", "Bél", "Ọ̀pẹ̀̀"],
            weekdays: ["Àìkú", "Ajé", "Ìsẹ́gun", "Ọjọ́rú", "Ọjọ́bọ", "Ẹtì", "Àbámẹ́ta"],
            weekdaysShort: ["Àìk", "Ajé", "Ìsẹ́", "Ọjr", "Ọjb", "Ẹtì", "Àbá"],
            weekdaysMin: ["Àì", "Aj", "Ìs", "Ọr", "Ọb", "Ẹt", "Àb"],
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Yoruba Nigeria [yo]
//! author : Atolagbe Abisoye : https://github.com/andela-batolagbe
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("zh-cn", {
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            weekdaysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            weekdaysMin: ["日", "一", "二", "三", "四", "五", "六"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : 11 <= e ? e : e + 12
            },
            meridiem: function (e, t) {
                var a = 100 * e + t;
                return 600 > a ? "凌晨" : 900 > a ? "早上" : 1130 > a ? "上午" : 1230 > a ? "中午" : 1800 > a ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: function (e) {
                    return e.week() === this.week() ? "[本]dddLT" : "[下]dddLT"
                }, lastDay: "[昨天]LT", lastWeek: function (e) {
                    return this.week() === e.week() ? "[本]dddLT" : "[上]dddLT"
                }, sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
                return "d" === t || "D" === t || "DDD" === t ? e + "日" : "M" === t ? e + "月" : "w" === t || "W" === t ? e + "周" : e
            },
            relativeTime: {
                future: "%s后",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {dow: 1, doy: 4}
        })
    }(a(0));//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
//! author : uu109 : https://github.com/uu109
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("zh-hk", {
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            weekdaysShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
            weekdaysMin: ["日", "一", "二", "三", "四", "五", "六"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t) {
                var a = 100 * e + t;
                return 600 > a ? "凌晨" : 900 > a ? "早上" : 1200 > a ? "上午" : 1200 === a ? "中午" : 1800 > a ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                return "d" === t || "D" === t || "DDD" === t ? e + "日" : "M" === t ? e + "月" : "w" === t || "W" === t ? e + "週" : e
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Chinese (Hong Kong) [zh-hk]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Konstantin : https://github.com/skfd
//! author : Anthony : https://github.com/anthonylau
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("zh-mo", {
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            weekdaysShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
            weekdaysMin: ["日", "一", "二", "三", "四", "五", "六"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "D/M/YYYY",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t) {
                var a = 100 * e + t;
                return 600 > a ? "凌晨" : 900 > a ? "早上" : 1130 > a ? "上午" : 1230 > a ? "中午" : 1800 > a ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                return "d" === t || "D" === t || "DDD" === t ? e + "日" : "M" === t ? e + "月" : "w" === t || "W" === t ? e + "週" : e
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Chinese (Macau) [zh-mo]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Tan Yuanhong : https://github.com/le0tan
}, function (e, t, a) {
    !function (e) {
        "use strict";//! moment.js locale configuration
        e.defineLocale("zh-tw", {
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            weekdaysShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
            weekdaysMin: ["日", "一", "二", "三", "四", "五", "六"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t) {
                var a = 100 * e + t;
                return 600 > a ? "凌晨" : 900 > a ? "早上" : 1130 > a ? "上午" : 1230 > a ? "中午" : 1800 > a ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                return "d" === t || "D" === t || "DDD" === t ? e + "日" : "M" === t ? e + "月" : "w" === t || "W" === t ? e + "週" : e
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(a(0));//! moment.js locale configuration
//! locale : Chinese (Taiwan) [zh-tw]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
}, function (e, t, a) {
    "use strict";
    var n = a(144), r = n(a(145)), s = n(a(147)), d = n(a(148)), i = n(a(0));
    a(168);
    var o = [];
    if (document.getElementById("app")) {
        var u = function () {
            var e = (0, s.default)(r.default.mark((function e(t, a, n) {
                var s;
                return r.default.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            s = 0, n && (s = 5e3 * Math.random()), setTimeout((function () {
                                var e = document.getElementById("emWr"), n = o.filter((function (e) {
                                    return e.id == t
                                }))[0];
                                console.log("item", n.url);
                                var r = document.createElement("div");
                                r.classList.add("emItem");
                                var s = document.createElement("div");
                                s.classList.add("emItemWr"), e.appendChild(r), r.appendChild(s), s.innerHTML = "<image src='" + n.url + "'></image>";
                                var d = document.createElement("div");
                                d.classList.add("emCount"), d.innerHTML = "+" + a, s.appendChild(d), setTimeout((function () {
                                    r.parentNode.removeChild(r)
                                }), 2e3)
                            }), s);
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function () {
                return e.apply(this, arguments)
            }
        }();
        new Vue({
            el: "#app",
            data: {a: 1, emos: [], chat: [], frazeIsExpand: !1, frazes: [], feedbackIsShow: !1, fbName: "", fbText: ""},
            methods: {
                emoClick: function () {
                    var e = (0, s.default)(r.default.mark((function e(t, a) {
                        return r.default.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return console.log("emoClick", a), a.target.classList.add("clicked"), u(t.id, 1), e.next = 5, d.default.post("/api/addEmo/", {id: t.id});
                                case 5:
                                    setTimeout((function () {
                                        a.target.classList.remove("clicked")
                                    }), 1500);
                                case 6:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), sendForm: function () {
                    var e = (0, s.default)(r.default.mark((function e() {
                        return r.default.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, d.default.post("/api/feedBack", {
                                        name: this.fbName,
                                        text: this.fbText
                                    });
                                case 2:
                                    this.feedbackIsShow = !1, this.fbText = "";
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), clickChatItem: function () {
                    var e = (0, s.default)(r.default.mark((function e(t) {
                        var a;
                        return r.default.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, d.default.post("/api/chat", {frazeId: t.id});
                                case 2:
                                    a = e.sent, this.chat.push(a.data), this.frazeIsExpand = !1, setTimeout((function () {
                                        var e = document.getElementById("chat");
                                        e.scrollTop = e.scrollHeight, console.log("objDiv", e.scrollHeight)
                                    }), 0);
                                case 6:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), formatTime: function (e) {
                    return (0, i.default)(e).format("hh:mm")
                }, findChatText: function (e) {
                    return this.frazes.filter((function (t) {
                        return t.id == e.frazeId
                    }))[0].text
                }, chatRenew: function () {
                    var e = (0, s.default)(r.default.mark((function e(t) {
                        var a;
                        return r.default.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, d.default.get("/api/chat/");
                                case 2:
                                    a = e.sent, console.log("dt ", a.data), a.data.forEach((function (e) {
                                        0 == t.chat.filter((function (t) {
                                            return t.id == e.id
                                        })).length && (t.chat.push(e), setTimeout((function () {
                                            var e = document.getElementById("chat");
                                            e.scrollTop = e.scrollHeight
                                        }), 0))
                                    }));
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), emRenew: function () {
                    var e = (0, s.default)(r.default.mark((function e() {
                        return r.default.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, d.default.get("/api/currentEmo/");
                                case 2:
                                    e.sent.data.forEach((function (e) {
                                        0 < e.count && u(e.id, e.count, !0)
                                    }));
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            },
            created: function () {
            },
            mounted: function () {
                var e = (0, s.default)(r.default.mark((function e() {
                    var t, a;
                    return r.default.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = this, e.next = 3, d.default.get("/api/emos/");
                            case 3:
                                return a = e.sent, this.emos = a.data, o = a.data, e.next = 8, d.default.get("/api/frazes/");
                            case 8:
                                a = e.sent, this.frazes = a.data, t.chatRenew(t), setInterval((0, s.default)(r.default.mark((function e() {
                                    return r.default.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                t.chatRenew(t);
                                            case 1:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), 5e3), setInterval((0, s.default)(r.default.mark((function e() {
                                    return r.default.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                t.emRenew(t);
                                            case 1:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), 5e3), document.getElementById("bonusBox").style.display = "none", document.getElementById("bonus1").style.display = "none", document.getElementById("bonus2").style.display = "none", document.body.style.opacity = 1, setTimeout((function () {
                                    document.getElementById("bonusBox").style.display = null, document.getElementById("bonus1").style.display = null
                                }), 2e4), setTimeout((function () {
                                    document.getElementById("bonus2").style.display = null
                                }), 4e4);
                            case 19:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }()
        })
    } else document.addEventListener("DOMContentLoaded", (function () {
        document.body.style.opacity = 1
    }))
}, function (e) {
    e.exports = function (e) {
        return e && e.__esModule ? e : {default: e}
    }
}, function (e, t, a) {
    e.exports = a(146)
}, function (e) {
    var t = function (e) {
        "use strict";

        function t(e, t, a) {
            return Object.defineProperty(e, t, {value: a, enumerable: !0, configurable: !0, writable: !0}), e[t]
        }

        function a(e, t, a, n) {
            var s = t && t.prototype instanceof r ? t : r, d = Object.create(s.prototype), i = new h(n || []);
            return d._invoke = u(e, a, i), d
        }

        function n(e, t, a) {
            try {
                return {type: "normal", arg: e.call(t, a)}
            } catch (e) {
                return {type: "throw", arg: e}
            }
        }

        function r() {
        }

        function s() {
        }

        function d() {
        }

        function i(e) {
            ["next", "throw", "return"].forEach((function (a) {
                t(e, a, (function (e) {
                    return this._invoke(a, e)
                }))
            }))
        }

        function o(e, t) {
            function a(r, s, d, i) {
                var o = n(e[r], e, s);
                if ("throw" !== o.type) {
                    var u = o.arg, m = u.value;
                    return m && "object" == typeof m && y.call(m, "__await") ? t.resolve(m.__await).then((function (e) {
                        a("next", e, d, i)
                    }), (function (e) {
                        a("throw", e, d, i)
                    })) : t.resolve(m).then((function (e) {
                        u.value = e, d(u)
                    }), (function (e) {
                        return a("throw", e, d, i)
                    }))
                }
                i(o.arg)
            }

            var r;
            this._invoke = function (e, n) {
                function s() {
                    return new t((function (t, r) {
                        a(e, n, t, r)
                    }))
                }

                return r = r ? r.then(s, s) : s()
            }
        }

        function u(e, t, a) {
            var r = p;
            return function (s, d) {
                if (r === w) throw new Error("Generator is already running");
                if (r === v) {
                    if ("throw" === s) throw d;
                    return {value: void 0, done: !0}
                }
                for (a.method = s, a.arg = d; ;) {
                    var i = a.delegate;
                    if (i) {
                        var o = m(i, a);
                        if (o) {
                            if (o === b) continue;
                            return o
                        }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg; else if ("throw" === a.method) {
                        if (r === p) throw r = v, a.arg;
                        a.dispatchException(a.arg)
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    r = w;
                    var u = n(e, t, a);
                    if ("normal" === u.type) {
                        if (r = a.done ? v : T, u.arg === b) continue;
                        return {value: u.arg, done: a.done}
                    }
                    "throw" === u.type && (r = v, a.method = "throw", a.arg = u.arg)
                }
            }
        }

        function m(e, t) {
            var a = e.iterator[t.method];
            if (void 0 === a) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, m(e, t), "throw" === t.method)) return b;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return b
            }
            var r = n(a, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, b;
            var s = r.arg;
            return s ? s.done ? (t[e.resultName] = s.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, b) : s : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, b)
        }

        function l(e) {
            var t = {tryLoc: e[0]};
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function c(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function h(e) {
            this.tryEntries = [{tryLoc: "root"}], e.forEach(l, this), this.reset(!0)
        }

        function M(e) {
            if (e) {
                var t = e[k];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var a = -1, n = function t() {
                        for (; ++a < e.length;) if (y.call(e, a)) return t.value = e[a], t.done = !1, t;
                        return t.value = void 0, t.done = !0, t
                    };
                    return n.next = n
                }
            }
            return {next: f}
        }

        function f() {
            return {value: void 0, done: !0}
        }

        var L = Object.prototype, y = L.hasOwnProperty, Y = "function" == typeof Symbol ? Symbol : {},
            k = Y.iterator || "@@iterator", D = Y.asyncIterator || "@@asyncIterator",
            g = Y.toStringTag || "@@toStringTag";
        try {
            t({}, "")
        } catch (e) {
            t = function (e, t, a) {
                return e[t] = a
            }
        }
        e.wrap = a;
        var p = "suspendedStart", T = "suspendedYield", w = "executing", v = "completed", b = {}, S = {};
        S[k] = function () {
            return this
        };
        var H = Object.getPrototypeOf, j = H && H(H(M([])));
        j && j !== L && y.call(j, k) && (S = j);
        var x = d.prototype = r.prototype = Object.create(S);
        return s.prototype = x.constructor = d, d.constructor = s, s.displayName = t(d, g, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === s || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, t(e, g, "GeneratorFunction")), e.prototype = Object.create(x), e
        }, e.awrap = function (e) {
            return {__await: e}
        }, i(o.prototype), o.prototype[D] = function () {
            return this
        }, e.AsyncIterator = o, e.async = function (t, n, r, s, d) {
            void 0 === d && (d = Promise);
            var i = new o(a(t, n, r, s), d);
            return e.isGeneratorFunction(n) ? i : i.next().then((function (e) {
                return e.done ? e.value : i.next()
            }))
        }, i(x), t(x, g, "Generator"), x[k] = function () {
            return this
        }, x.toString = function () {
            return "[object Generator]"
        }, e.keys = function (e) {
            var t = [];
            for (var a in e) t.push(a);
            return t.reverse(), function a() {
                for (; t.length;) {
                    var n = t.pop();
                    if (n in e) return a.value = n, a.done = !1, a
                }
                return a.done = !0, a
            }
        }, e.values = M, h.prototype = {
            constructor: h, reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(c), !e) for (var t in this) "t" === t.charAt(0) && y.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            }, stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            }, dispatchException: function (e) {
                function t(t, n) {
                    return s.type = "throw", s.arg = e, a.next = t, n && (a.method = "next", a.arg = void 0), !!n
                }

                if (this.done) throw e;
                for (var a = this, n = this.tryEntries.length - 1; 0 <= n; --n) {
                    var r = this.tryEntries[n], s = r.completion;
                    if ("root" === r.tryLoc) return t("end");
                    if (r.tryLoc <= this.prev) {
                        var d = y.call(r, "catchLoc"), i = y.call(r, "finallyLoc");
                        if (d && i) {
                            if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                            if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                        } else if (d) {
                            if (this.prev < r.catchLoc) return t(r.catchLoc, !0)
                        } else {
                            if (!i) throw new Error("try statement without catch or finally");
                            if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                        }
                    }
                }
            }, abrupt: function (e, t) {
                for (var a, n = this.tryEntries.length - 1; 0 <= n; --n) if ((a = this.tryEntries[n]).tryLoc <= this.prev && y.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                    var r = a;
                    break
                }
                r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                var s = r ? r.completion : {};
                return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, b) : this.complete(s)
            }, complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), b
            }, finish: function (e) {
                for (var t, a = this.tryEntries.length - 1; 0 <= a; --a) if ((t = this.tryEntries[a]).finallyLoc === e) return this.complete(t.completion, t.afterLoc), c(t), b
            }, catch: function (e) {
                for (var t, a = this.tryEntries.length - 1; 0 <= a; --a) if ((t = this.tryEntries[a]).tryLoc === e) {
                    var n = t.completion;
                    if ("throw" === n.type) {
                        var r = n.arg;
                        c(t)
                    }
                    return r
                }
                throw new Error("illegal catch attempt")
            }, delegateYield: function (e, t, a) {
                return this.delegate = {
                    iterator: M(e),
                    resultName: t,
                    nextLoc: a
                }, "next" === this.method && (this.arg = void 0), b
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = t
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(t)
    }
}, function (e) {
    function t(e, t, a, n, r, s, d) {
        try {
            var i = e[s](d), o = i.value
        } catch (e) {
            return void a(e)
        }
        i.done ? t(o) : Promise.resolve(o).then(n, r)
    }

    e.exports = function (e) {
        return function () {
            var a = this, n = arguments;
            return new Promise((function (r, s) {
                function d(e) {
                    t(o, r, s, d, i, "next", e)
                }

                function i(e) {
                    t(o, r, s, d, i, "throw", e)
                }

                var o = e.apply(a, n);
                d(void 0)
            }))
        }
    }
}, function (e, t, a) {
    e.exports = a(149)
}, function (e, t, a) {
    "use strict";

    function n(e) {
        var t = new d(e), a = s(d.prototype.request, t);
        return r.extend(a, d.prototype, t), r.extend(a, t), a
    }

    var r = a(1), s = a(2), d = a(150), i = a(8), o = n(a(5));
    o.Axios = d, o.create = function (e) {
        return n(i(o.defaults, e))
    }, o.Cancel = a(9), o.CancelToken = a(164), o.isCancel = a(4), o.all = function (e) {
        return Promise.all(e)
    }, o.spread = a(165), e.exports = o, e.exports.default = o
}, function (e, t, a) {
    "use strict";

    function n(e) {
        this.defaults = e, this.interceptors = {request: new d, response: new d}
    }

    var r = a(1), s = a(3), d = a(151), i = a(152), o = a(8);
    n.prototype.request = function (e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = o(this.defaults, e)).method = e.method ? e.method.toLowerCase() : this.defaults.method ? this.defaults.method.toLowerCase() : "get";
        var t = [i, void 0], a = Promise.resolve(e);
        for (this.interceptors.request.forEach((function (e) {
            t.unshift(e.fulfilled, e.rejected)
        })), this.interceptors.response.forEach((function (e) {
            t.push(e.fulfilled, e.rejected)
        })); t.length;) a = a.then(t.shift(), t.shift());
        return a
    }, n.prototype.getUri = function (e) {
        return e = o(this.defaults, e), s(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, r.forEach(["delete", "get", "head", "options"], (function (e) {
        n.prototype[e] = function (t, a) {
            return this.request(o(a || {}, {method: e, url: t}))
        }
    })), r.forEach(["post", "put", "patch"], (function (e) {
        n.prototype[e] = function (t, a, n) {
            return this.request(o(n || {}, {method: e, url: t, data: a}))
        }
    })), e.exports = n
}, function (e, t, a) {
    "use strict";

    function n() {
        this.handlers = []
    }

    var r = a(1);
    n.prototype.use = function (e, t) {
        return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, n.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, n.prototype.forEach = function (e) {
        r.forEach(this.handlers, (function (t) {
            null !== t && e(t)
        }))
    }, e.exports = n
}, function (e, t, a) {
    "use strict";

    function n(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }

    var r = a(1), s = a(153), d = a(4), i = a(5);
    e.exports = function (e) {
        return n(e), e.headers = e.headers || {}, e.data = s(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (t) {
            delete e.headers[t]
        })), (e.adapter || i.adapter)(e).then((function (t) {
            return n(e), t.data = s(t.data, t.headers, e.transformResponse), t
        }), (function (t) {
            return d(t) || (n(e), t && t.response && (t.response.data = s(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        }))
    }
}, function (e, t, a) {
    "use strict";
    var n = a(1);
    e.exports = function (e, t, a) {
        return n.forEach(a, (function (a) {
            e = a(e, t)
        })), e
    }
}, function (e) {
    function t() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function n(e) {
        if (o === setTimeout) return setTimeout(e, 0);
        if ((o === t || !o) && setTimeout) return o = setTimeout, setTimeout(e, 0);
        try {
            return o(e, 0)
        } catch (t) {
            try {
                return o.call(null, e, 0)
            } catch (t) {
                return o.call(this, e, 0)
            }
        }
    }

    function r() {
        h && l && (h = !1, l.length ? c = l.concat(c) : M = -1, c.length && s())
    }

    function s() {
        if (!h) {
            var e = n(r);
            h = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++M < t;) l && l[M].run();
                M = -1, t = c.length
            }
            l = null, h = !1, function (e) {
                if (u === clearTimeout) return clearTimeout(e);
                if ((u === a || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);
                try {
                    u(e)
                } catch (t) {
                    try {
                        return u.call(null, e)
                    } catch (t) {
                        return u.call(this, e)
                    }
                }
            }(e)
        }
    }

    function d(e, t) {
        this.fun = e, this.array = t
    }

    function i() {
    }

    var o, u, m = e.exports = {};
    !function () {
        try {
            o = "function" == typeof setTimeout ? setTimeout : t
        } catch (e) {
            o = t
        }
        try {
            u = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            u = a
        }
    }();
    var l, c = [], h = !1, M = -1;
    m.nextTick = function (e) {
        var t = Array(arguments.length - 1);
        if (1 < arguments.length) for (var a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
        c.push(new d(e, t)), 1 !== c.length || h || n(s)
    }, d.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = i, m.addListener = i, m.once = i, m.off = i, m.removeListener = i, m.removeAllListeners = i, m.emit = i, m.prependListener = i, m.prependOnceListener = i, m.listeners = function () {
        return []
    }, m.binding = function () {
        throw new Error("process.binding is not supported")
    }, m.cwd = function () {
        return "/"
    }, m.chdir = function () {
        throw new Error("process.chdir is not supported")
    }, m.umask = function () {
        return 0
    }
}, function (e, t, a) {
    "use strict";
    var n = a(1);
    e.exports = function (e, t) {
        n.forEach(e, (function (a, n) {
            n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = a, delete e[n])
        }))
    }
}, function (e, t, a) {
    "use strict";
    var n = a(7);
    e.exports = function (e, t, a) {
        var r = a.config.validateStatus;
        a.status && r && !r(a.status) ? t(n("Request failed with status code " + a.status, a.config, null, a.request, a)) : e(a)
    }
}, function (e) {
    "use strict";
    e.exports = function (e, t, a, n, r) {
        return e.config = t, a && (e.code = a), e.request = n, e.response = r, e.isAxiosError = !0, e.toJSON = function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, e
    }
}, function (e, t, a) {
    "use strict";
    var n = a(1);
    e.exports = n.isStandardBrowserEnv() ? {
        write: function (e, t, a, r, s, d) {
            var i = [];
            i.push(e + "=" + encodeURIComponent(t)), n.isNumber(a) && i.push("expires=" + new Date(a).toGMTString()), n.isString(r) && i.push("path=" + r), n.isString(s) && i.push("domain=" + s), !0 === d && i.push("secure"), document.cookie = i.join("; ")
        }, read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        }, remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }
}, function (e, t, a) {
    "use strict";
    var n = a(160), r = a(161);
    e.exports = function (e, t) {
        return e && !n(t) ? r(e, t) : t
    }
}, function (e) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, a) {
    "use strict";
    var n = a(1),
        r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, a, s, d = {};
        return e ? (n.forEach(e.split("\n"), (function (e) {
            if (s = e.indexOf(":"), t = n.trim(e.substr(0, s)).toLowerCase(), a = n.trim(e.substr(s + 1)), t) {
                if (d[t] && 0 <= r.indexOf(t)) return;
                d[t] = "set-cookie" === t ? (d[t] ? d[t] : []).concat([a]) : d[t] ? d[t] + ", " + a : a
            }
        })), d) : d
    }
}, function (e, t, a) {
    "use strict";
    var n = a(1);
    e.exports = n.isStandardBrowserEnv() ? function () {
        function e(e) {
            var t = e;
            return a && (r.setAttribute("href", t), t = r.href), r.setAttribute("href", t), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            }
        }

        var t, a = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
        return t = e(window.location.href), function (a) {
            var r = n.isString(a) ? e(a) : a;
            return r.protocol === t.protocol && r.host === t.host
        }
    }() : function () {
        return !0
    }
}, function (e, t, a) {
    "use strict";

    function n(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function (e) {
            t = e
        }));
        var a = this;
        e((function (e) {
            a.reason || (a.reason = new r(e), t(a.reason))
        }))
    }

    var r = a(9);
    n.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, n.source = function () {
        var e;
        return {
            token: new n((function (t) {
                e = t
            })), cancel: e
        }
    }, e.exports = n
}, function (e) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, function (e) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], !e.children && (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, a) {
    function n(e) {
        var t = r(e);
        return a(t)
    }

    function r(e) {
        if (!a.o(s, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
    }

    var s = {
        "./af": 10,
        "./af.js": 10,
        "./ar": 11,
        "./ar-dz": 12,
        "./ar-dz.js": 12,
        "./ar-kw": 13,
        "./ar-kw.js": 13,
        "./ar-ly": 14,
        "./ar-ly.js": 14,
        "./ar-ma": 15,
        "./ar-ma.js": 15,
        "./ar-sa": 16,
        "./ar-sa.js": 16,
        "./ar-tn": 17,
        "./ar-tn.js": 17,
        "./ar.js": 11,
        "./az": 18,
        "./az.js": 18,
        "./be": 19,
        "./be.js": 19,
        "./bg": 20,
        "./bg.js": 20,
        "./bm": 21,
        "./bm.js": 21,
        "./bn": 22,
        "./bn.js": 22,
        "./bo": 23,
        "./bo.js": 23,
        "./br": 24,
        "./br.js": 24,
        "./bs": 25,
        "./bs.js": 25,
        "./ca": 26,
        "./ca.js": 26,
        "./cs": 27,
        "./cs.js": 27,
        "./cv": 28,
        "./cv.js": 28,
        "./cy": 29,
        "./cy.js": 29,
        "./da": 30,
        "./da.js": 30,
        "./de": 31,
        "./de-at": 32,
        "./de-at.js": 32,
        "./de-ch": 33,
        "./de-ch.js": 33,
        "./de.js": 31,
        "./dv": 34,
        "./dv.js": 34,
        "./el": 35,
        "./el.js": 35,
        "./en-au": 36,
        "./en-au.js": 36,
        "./en-ca": 37,
        "./en-ca.js": 37,
        "./en-gb": 38,
        "./en-gb.js": 38,
        "./en-ie": 39,
        "./en-ie.js": 39,
        "./en-il": 40,
        "./en-il.js": 40,
        "./en-in": 41,
        "./en-in.js": 41,
        "./en-nz": 42,
        "./en-nz.js": 42,
        "./en-sg": 43,
        "./en-sg.js": 43,
        "./eo": 44,
        "./eo.js": 44,
        "./es": 45,
        "./es-do": 46,
        "./es-do.js": 46,
        "./es-us": 47,
        "./es-us.js": 47,
        "./es.js": 45,
        "./et": 48,
        "./et.js": 48,
        "./eu": 49,
        "./eu.js": 49,
        "./fa": 50,
        "./fa.js": 50,
        "./fi": 51,
        "./fi.js": 51,
        "./fil": 52,
        "./fil.js": 52,
        "./fo": 53,
        "./fo.js": 53,
        "./fr": 54,
        "./fr-ca": 55,
        "./fr-ca.js": 55,
        "./fr-ch": 56,
        "./fr-ch.js": 56,
        "./fr.js": 54,
        "./fy": 57,
        "./fy.js": 57,
        "./ga": 58,
        "./ga.js": 58,
        "./gd": 59,
        "./gd.js": 59,
        "./gl": 60,
        "./gl.js": 60,
        "./gom-deva": 61,
        "./gom-deva.js": 61,
        "./gom-latn": 62,
        "./gom-latn.js": 62,
        "./gu": 63,
        "./gu.js": 63,
        "./he": 64,
        "./he.js": 64,
        "./hi": 65,
        "./hi.js": 65,
        "./hr": 66,
        "./hr.js": 66,
        "./hu": 67,
        "./hu.js": 67,
        "./hy-am": 68,
        "./hy-am.js": 68,
        "./id": 69,
        "./id.js": 69,
        "./is": 70,
        "./is.js": 70,
        "./it": 71,
        "./it-ch": 72,
        "./it-ch.js": 72,
        "./it.js": 71,
        "./ja": 73,
        "./ja.js": 73,
        "./jv": 74,
        "./jv.js": 74,
        "./ka": 75,
        "./ka.js": 75,
        "./kk": 76,
        "./kk.js": 76,
        "./km": 77,
        "./km.js": 77,
        "./kn": 78,
        "./kn.js": 78,
        "./ko": 79,
        "./ko.js": 79,
        "./ku": 80,
        "./ku.js": 80,
        "./ky": 81,
        "./ky.js": 81,
        "./lb": 82,
        "./lb.js": 82,
        "./lo": 83,
        "./lo.js": 83,
        "./lt": 84,
        "./lt.js": 84,
        "./lv": 85,
        "./lv.js": 85,
        "./me": 86,
        "./me.js": 86,
        "./mi": 87,
        "./mi.js": 87,
        "./mk": 88,
        "./mk.js": 88,
        "./ml": 89,
        "./ml.js": 89,
        "./mn": 90,
        "./mn.js": 90,
        "./mr": 91,
        "./mr.js": 91,
        "./ms": 92,
        "./ms-my": 93,
        "./ms-my.js": 93,
        "./ms.js": 92,
        "./mt": 94,
        "./mt.js": 94,
        "./my": 95,
        "./my.js": 95,
        "./nb": 96,
        "./nb.js": 96,
        "./ne": 97,
        "./ne.js": 97,
        "./nl": 98,
        "./nl-be": 99,
        "./nl-be.js": 99,
        "./nl.js": 98,
        "./nn": 100,
        "./nn.js": 100,
        "./oc-lnc": 101,
        "./oc-lnc.js": 101,
        "./pa-in": 102,
        "./pa-in.js": 102,
        "./pl": 103,
        "./pl.js": 103,
        "./pt": 104,
        "./pt-br": 105,
        "./pt-br.js": 105,
        "./pt.js": 104,
        "./ro": 106,
        "./ro.js": 106,
        "./ru": 107,
        "./ru.js": 107,
        "./sd": 108,
        "./sd.js": 108,
        "./se": 109,
        "./se.js": 109,
        "./si": 110,
        "./si.js": 110,
        "./sk": 111,
        "./sk.js": 111,
        "./sl": 112,
        "./sl.js": 112,
        "./sq": 113,
        "./sq.js": 113,
        "./sr": 114,
        "./sr-cyrl": 115,
        "./sr-cyrl.js": 115,
        "./sr.js": 114,
        "./ss": 116,
        "./ss.js": 116,
        "./sv": 117,
        "./sv.js": 117,
        "./sw": 118,
        "./sw.js": 118,
        "./ta": 119,
        "./ta.js": 119,
        "./te": 120,
        "./te.js": 120,
        "./tet": 121,
        "./tet.js": 121,
        "./tg": 122,
        "./tg.js": 122,
        "./th": 123,
        "./th.js": 123,
        "./tk": 124,
        "./tk.js": 124,
        "./tl-ph": 125,
        "./tl-ph.js": 125,
        "./tlh": 126,
        "./tlh.js": 126,
        "./tr": 127,
        "./tr.js": 127,
        "./tzl": 128,
        "./tzl.js": 128,
        "./tzm": 129,
        "./tzm-latn": 130,
        "./tzm-latn.js": 130,
        "./tzm.js": 129,
        "./ug-cn": 131,
        "./ug-cn.js": 131,
        "./uk": 132,
        "./uk.js": 132,
        "./ur": 133,
        "./ur.js": 133,
        "./uz": 134,
        "./uz-latn": 135,
        "./uz-latn.js": 135,
        "./uz.js": 134,
        "./vi": 136,
        "./vi.js": 136,
        "./x-pseudo": 137,
        "./x-pseudo.js": 137,
        "./yo": 138,
        "./yo.js": 138,
        "./zh-cn": 139,
        "./zh-cn.js": 139,
        "./zh-hk": 140,
        "./zh-hk.js": 140,
        "./zh-mo": 141,
        "./zh-mo.js": 141,
        "./zh-tw": 142,
        "./zh-tw.js": 142
    };
    n.keys = function () {
        return Object.keys(s)
    }, n.resolve = r, e.exports = n, n.id = 167
}, function () {
}]);