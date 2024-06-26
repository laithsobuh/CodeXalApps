/*!
 * TinyMCE
 *
 * Copyright (c) 2022 Ephox Corporation DBA Tiny Technologies, Inc.
 * Licensed under the Tiny commercial license. See https://www.tiny.cloud/legal/
 *
 * Version: 6.0.2
 */
! function() {
    "use strict";
    var e = function(e) { if (null === e) return "null"; if (void 0 === e) return "undefined"; var t = typeof e; return "object" === t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" === t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t },
        t = function(e) { return { eq: e } },
        n = t((function(e, t) { return e === t })),
        o = function(e) {
            return t((function(t, n) {
                if (t.length !== n.length) return !1;
                for (var o = t.length, r = 0; r < o; r++)
                    if (!e.eq(t[r], n[r])) return !1;
                return !0
            }))
        },
        r = function(e) {
            return t((function(r, s) {
                var a = Object.keys(r),
                    i = Object.keys(s);
                if (! function(e, n) { return function(e, n) { return t((function(t, o) { return e.eq(n(t), n(o)) })) }(o(e), (function(e) { return function(e, t) { return Array.prototype.slice.call(e).sort(t) }(e, n) })) }(n).eq(a, i)) return !1;
                for (var l = a.length, d = 0; d < l; d++) { var c = a[d]; if (!e.eq(r[c], s[c])) return !1 }
                return !0
            }))
        },
        s = t((function(t, n) { if (t === n) return !0; var a = e(t); return a === e(n) && (function(e) { return -1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(e) }(a) ? t === n : "array" === a ? o(s).eq(t, n) : "object" === a && r(s).eq(t, n)) }));
    const a = Object.getPrototypeOf,
        i = (e, t, n) => { var o; return !!n(e, t.prototype) || (null === (o = e.constructor) || void 0 === o ? void 0 : o.name) === t.name },
        l = e => t => (e => { const t = typeof e; return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && i(e, String, ((e, t) => t.isPrototypeOf(e))) ? "string" : t })(t) === e,
        d = e => t => typeof t === e,
        c = e => t => e === t,
        u = (e, t) => f(e) && i(e, t, ((e, t) => a(e) === t)),
        m = l("string"),
        f = l("object"),
        g = e => u(e, Object),
        p = l("array"),
        h = c(null),
        b = d("boolean"),
        v = c(void 0),
        y = e => null == e,
        C = e => !y(e),
        x = d("function"),
        w = d("number"),
        k = (e, t) => {
            if (p(e)) {
                for (let n = 0, o = e.length; n < o; ++n)
                    if (!t(e[n])) return !1;
                return !0
            }
            return !1
        },
        S = () => {},
        _ = (e, t) => (...n) => e(t.apply(null, n)),
        E = (e, t) => n => e(t(n)),
        N = e => () => e,
        R = e => e,
        A = (e, t) => e === t;

    function O(e, ...t) { return (...n) => { const o = t.concat(n); return e.apply(null, o) } }
    const T = e => t => !e(t),
        B = e => e(),
        D = e => { e() },
        L = N(!1),
        P = N(!0);
    class M {
        constructor(e, t) { this.tag = e, this.value = t }
        static some(e) { return new M(!0, e) }
        static none() { return M.singletonNone }
        fold(e, t) { return this.tag ? t(this.value) : e() }
        isSome() { return this.tag }
        isNone() { return !this.tag }
        map(e) { return this.tag ? M.some(e(this.value)) : M.none() }
        bind(e) { return this.tag ? e(this.value) : M.none() }
        exists(e) { return this.tag && e(this.value) }
        forall(e) { return !this.tag || e(this.value) }
        filter(e) { return !this.tag || e(this.value) ? this : M.none() }
        getOr(e) { return this.tag ? this.value : e }
        or(e) { return this.tag ? this : e }
        getOrThunk(e) { return this.tag ? this.value : e() }
        orThunk(e) { return this.tag ? this : e() }
        getOrDie(e) { if (this.tag) return this.value; throw new Error(null != e ? e : "Called getOrDie on None") }
        static from(e) { return C(e) ? M.some(e) : M.none() }
        getOrNull() { return this.tag ? this.value : null }
        getOrUndefined() { return this.value }
        each(e) { this.tag && e(this.value) }
        toArray() { return this.tag ? [this.value] : [] }
        toString() { return this.tag ? `some(${this.value})` : "none()" }
    }
    M.singletonNone = new M(!1);
    const I = Array.prototype.slice,
        F = Array.prototype.indexOf,
        U = Array.prototype.push,
        z = (e, t) => F.call(e, t),
        j = (e, t) => z(e, t) > -1,
        V = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++)
                if (t(e[n], n)) return !0;
            return !1
        },
        H = (e, t) => {
            const n = e.length,
                o = new Array(n);
            for (let r = 0; r < n; r++) {
                const n = e[r];
                o[r] = t(n, r)
            }
            return o
        },
        $ = (e, t) => { for (let n = 0, o = e.length; n < o; n++) t(e[n], n) },
        q = (e, t) => { for (let n = e.length - 1; n >= 0; n--) t(e[n], n) },
        W = (e, t) => {
            const n = [],
                o = [];
            for (let r = 0, s = e.length; r < s; r++) {
                const s = e[r];
                (t(s, r) ? n : o).push(s)
            }
            return { pass: n, fail: o }
        },
        K = (e, t) => {
            const n = [];
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                t(r, o) && n.push(r)
            }
            return n
        },
        G = (e, t, n) => (q(e, ((e, o) => { n = t(n, e, o) })), n),
        Y = (e, t, n) => ($(e, ((e, o) => { n = t(n, e, o) })), n),
        X = (e, t, n) => { for (let o = 0, r = e.length; o < r; o++) { const r = e[o]; if (t(r, o)) return M.some(r); if (n(r, o)) break } return M.none() },
        Q = (e, t) => X(e, t, L),
        J = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++)
                if (t(e[n], n)) return M.some(n);
            return M.none()
        },
        Z = e => {
            const t = [];
            for (let n = 0, o = e.length; n < o; ++n) {
                if (!p(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                U.apply(t, e[n])
            }
            return t
        },
        ee = (e, t) => Z(H(e, t)),
        te = (e, t) => {
            for (let n = 0, o = e.length; n < o; ++n)
                if (!0 !== t(e[n], n)) return !1;
            return !0
        },
        ne = e => { const t = I.call(e, 0); return t.reverse(), t },
        oe = (e, t) => K(e, (e => !j(t, e))),
        re = (e, t) => {
            const n = {};
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                n[String(r)] = t(r, o)
            }
            return n
        },
        se = (e, t) => { const n = I.call(e, 0); return n.sort(t), n },
        ae = (e, t) => t >= 0 && t < e.length ? M.some(e[t]) : M.none(),
        ie = e => ae(e, 0),
        le = e => ae(e, e.length - 1),
        de = x(Array.from) ? Array.from : e => I.call(e),
        ce = (e, t) => { for (let n = 0; n < e.length; n++) { const o = t(e[n], n); if (o.isSome()) return o } return M.none() },
        ue = Object.keys,
        me = Object.hasOwnProperty,
        fe = (e, t) => {
            const n = ue(e);
            for (let o = 0, r = n.length; o < r; o++) {
                const r = n[o];
                t(e[r], r)
            }
        },
        ge = (e, t) => pe(e, ((e, n) => ({ k: n, v: t(e, n) }))),
        pe = (e, t) => {
            const n = {};
            return fe(e, ((e, o) => {
                const r = t(e, o);
                n[r.k] = r.v
            })), n
        },
        he = e => (t, n) => { e[n] = t },
        be = (e, t, n, o) => (fe(e, ((e, r) => {
            (t(e, r) ? n : o)(e, r)
        })), {}),
        ve = (e, t) => { const n = {}; return be(e, t, he(n), S), n },
        ye = (e, t) => { const n = []; return fe(e, ((e, o) => { n.push(t(e, o)) })), n },
        Ce = e => ye(e, R),
        xe = (e, t) => we(e, t) ? M.from(e[t]) : M.none(),
        we = (e, t) => me.call(e, t),
        ke = (e, t) => we(e, t) && void 0 !== e[t] && null !== e[t],
        Se = e => { const t = {}; return $(e, (e => { t[e] = {} })), ue(t) },
        _e = Array.isArray,
        Ee = (e, t, n) => {
            let o, r;
            if (!e) return !1;
            if (n = n || e, void 0 !== e.length) {
                for (o = 0, r = e.length; o < r; o++)
                    if (!1 === t.call(n, e[o], o, e)) return !1
            } else
                for (o in e)
                    if (we(e, o) && !1 === t.call(n, e[o], o, e)) return !1; return !0
        },
        Ne = (e, t) => { const n = []; return Ee(e, ((o, r) => { n.push(t(o, r, e)) })), n },
        Re = (e, t) => { const n = []; return Ee(e, ((o, r) => { t && !t(o, r, e) || n.push(o) })), n },
        Ae = (e, t) => {
            if (e)
                for (let n = 0, o = e.length; n < o; n++)
                    if (e[n] === t) return n;
            return -1
        },
        Oe = (e, t, n, o) => { let r = v(n) ? e[0] : n; for (let n = 0; n < e.length; n++) r = t.call(o, r, e[n], n); return r },
        Te = (e, t, n) => {
            let o, r;
            for (o = 0, r = e.length; o < r; o++)
                if (t.call(n, e[o], o, e)) return o;
            return -1
        },
        Be = e => e[e.length - 1],
        De = e => { let t, n = !1; return (...o) => (n || (n = !0, t = e.apply(null, o)), t) },
        Le = () => Pe(0, 0),
        Pe = (e, t) => ({ major: e, minor: t }),
        Me = { nu: Pe, detect: (e, t) => { const n = String(t).toLowerCase(); return 0 === e.length ? Le() : ((e, t) => { const n = ((e, t) => { for (let n = 0; n < e.length; n++) { const o = e[n]; if (o.test(t)) return o } })(e, t); if (!n) return { major: 0, minor: 0 }; const o = e => Number(t.replace(n, "$" + e)); return Pe(o(1), o(2)) })(e, n) }, unknown: Le },
        Ie = (e, t) => { const n = String(t).toLowerCase(); return Q(e, (e => e.search(n))) },
        Fe = (e, t, n) => "" === t || e.length >= t.length && e.substr(n, n + t.length) === t,
        Ue = (e, t) => -1 !== e.indexOf(t),
        ze = (e, t) => Fe(e, t, 0),
        je = (e, t) => Fe(e, t, e.length - t.length),
        Ve = e => t => t.replace(e, ""),
        He = Ve(/^\s+|\s+$/g),
        $e = Ve(/^\s+/g),
        qe = Ve(/\s+$/g),
        We = e => e.length > 0,
        Ke = e => !We(e),
        Ge = (e, t = 10) => { const n = parseInt(e, t); return isNaN(n) ? M.none() : M.some(n) },
        Ye = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        Xe = e => t => Ue(t, e),
        Qe = [{ name: "Edge", versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/], search: e => Ue(e, "edge/") && Ue(e, "chrome") && Ue(e, "safari") && Ue(e, "applewebkit") }, { name: "Chromium", brand: "Chromium", versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Ye], search: e => Ue(e, "chrome") && !Ue(e, "chromeframe") }, { name: "IE", versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/], search: e => Ue(e, "msie") || Ue(e, "trident") }, { name: "Opera", versionRegexes: [Ye, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: Xe("opera") }, { name: "Firefox", versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/], search: Xe("firefox") }, { name: "Safari", versionRegexes: [Ye, /.*?cpu os ([0-9]+)_([0-9]+).*/], search: e => (Ue(e, "safari") || Ue(e, "mobile/")) && Ue(e, "applewebkit") }],
        Je = [{ name: "Windows", search: Xe("win"), versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/] }, { name: "iOS", search: e => Ue(e, "iphone") || Ue(e, "ipad"), versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/] }, { name: "Android", search: Xe("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/] }, { name: "macOS", search: Xe("mac os x"), versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/] }, { name: "Linux", search: Xe("linux"), versionRegexes: [] }, { name: "Solaris", search: Xe("sunos"), versionRegexes: [] }, { name: "FreeBSD", search: Xe("freebsd"), versionRegexes: [] }, { name: "ChromeOS", search: Xe("cros"), versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/] }],
        Ze = { browsers: N(Qe), oses: N(Je) },
        et = "Edge",
        tt = "Chromium",
        nt = "Opera",
        ot = "Firefox",
        rt = "Safari",
        st = e => {
            const t = e.current,
                n = e.version,
                o = e => () => t === e;
            return { current: t, version: n, isEdge: o(et), isChromium: o(tt), isIE: o("IE"), isOpera: o(nt), isFirefox: o(ot), isSafari: o(rt) }
        },
        at = () => st({ current: void 0, version: Me.unknown() }),
        it = st,
        lt = (N(et), N(tt), N("IE"), N(nt), N(ot), N(rt), "Windows"),
        dt = "Android",
        ct = "Linux",
        ut = "macOS",
        mt = "Solaris",
        ft = "FreeBSD",
        gt = "ChromeOS",
        pt = e => {
            const t = e.current,
                n = e.version,
                o = e => () => t === e;
            return { current: t, version: n, isWindows: o(lt), isiOS: o("iOS"), isAndroid: o(dt), isMacOS: o(ut), isLinux: o(ct), isSolaris: o(mt), isFreeBSD: o(ft), isChromeOS: o(gt) }
        },
        ht = () => pt({ current: void 0, version: Me.unknown() }),
        bt = pt,
        vt = (N(lt), N("iOS"), N(dt), N(ct), N(ut), N(mt), N(ft), N(gt), e => window.matchMedia(e).matches);
    let yt = De((() => ((e, t, n) => {
        const o = Ze.browsers(),
            r = Ze.oses(),
            s = t.bind((e => ((e, t) => ce(t.brands, (t => { const n = t.brand.toLowerCase(); return Q(e, (e => { var t; return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase()) })).map((e => ({ current: e.name, version: Me.nu(parseInt(t.version, 10), 0) }))) })))(o, e))).orThunk((() => ((e, t) => Ie(e, t).map((e => { const n = Me.detect(e.versionRegexes, t); return { current: e.name, version: n } })))(o, e))).fold(at, it),
            a = ((e, t) => Ie(e, t).map((e => { const n = Me.detect(e.versionRegexes, t); return { current: e.name, version: n } })))(r, e).fold(ht, bt),
            i = ((e, t, n, o) => {
                const r = e.isiOS() && !0 === /ipad/i.test(n),
                    s = e.isiOS() && !r,
                    a = e.isiOS() || e.isAndroid(),
                    i = a || o("(pointer:coarse)"),
                    l = r || !s && a && o("(min-device-width:768px)"),
                    d = s || a && !l,
                    c = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n),
                    u = !d && !l && !c;
                return { isiPad: N(r), isiPhone: N(s), isTablet: N(l), isPhone: N(d), isTouch: N(i), isAndroid: e.isAndroid, isiOS: e.isiOS, isWebView: N(c), isDesktop: N(u) }
            })(a, s, e, n);
        return { browser: s, os: a, deviceType: i }
    })(navigator.userAgent, M.from(navigator.userAgentData), vt)));
    const Ct = () => yt(),
        xt = navigator.userAgent,
        wt = Ct(),
        kt = wt.browser,
        St = wt.os,
        _t = wt.deviceType,
        Et = -1 !== xt.indexOf("Windows Phone"),
        Nt = { transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", documentMode: kt.isIE() ? document.documentMode || 7 : 10, cacheSuffix: null, container: null, canHaveCSP: !kt.isIE(), windowsPhone: Et, browser: { current: kt.current, version: kt.version, isChromium: kt.isChromium, isEdge: kt.isEdge, isFirefox: kt.isFirefox, isIE: kt.isIE, isOpera: kt.isOpera, isSafari: kt.isSafari }, os: { current: St.current, version: St.version, isAndroid: St.isAndroid, isChromeOS: St.isChromeOS, isFreeBSD: St.isFreeBSD, isiOS: St.isiOS, isLinux: St.isLinux, isMacOS: St.isMacOS, isSolaris: St.isSolaris, isWindows: St.isWindows }, deviceType: { isDesktop: _t.isDesktop, isiPad: _t.isiPad, isiPhone: _t.isiPhone, isPhone: _t.isPhone, isTablet: _t.isTablet, isTouch: _t.isTouch, isWebView: _t.isWebView } },
        Rt = /^\s*|\s*$/g,
        At = e => null == e ? "" : ("" + e).replace(Rt, ""),
        Ot = (e, t) => t ? !("array" !== t || !_e(e)) || typeof e === t : void 0 !== e,
        Tt = function(e, t, n, o) {
            o = o || this, e && (n && (e = e[n]), Ee(e, ((e, r) => {
                if (!1 === t.call(o, e, r, n)) return !1;
                Tt(e, t, n, o)
            })))
        },
        Bt = {
            trim: At,
            isArray: _e,
            is: Ot,
            toArray: e => { if (_e(e)) return e; { const t = []; for (let n = 0, o = e.length; n < o; n++) t[n] = e[n]; return t } },
            makeMap: (e, t, n) => { let o; for (t = t || ",", "string" == typeof(e = e || []) && (e = e.split(t)), n = n || {}, o = e.length; o--;) n[e[o]] = {}; return n },
            each: Ee,
            map: Ne,
            grep: Re,
            inArray: Ae,
            hasOwn: we,
            extend: (e, ...t) => {
                for (let n = 0; n < t.length; n++) {
                    const o = t[n];
                    for (const t in o)
                        if (we(o, t)) {
                            const n = o[t];
                            void 0 !== n && (e[t] = n)
                        }
                }
                return e
            },
            walk: Tt,
            resolve: (e, t) => { let n, o; for (t = t || window, n = 0, o = (e = e.split(".")).length; n < o && (t = t[e[n]]); n++); return t },
            explode: (e, t) => !e || Ot(e, "array") ? e : Ne(e.split(t || ","), At),
            _addCacheSuffix: e => { const t = Nt.cacheSuffix; return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e }
        },
        Dt = (e, t, n = A) => e.exists((e => n(e, t))),
        Lt = (e, t, n) => e.isSome() && t.isSome() ? M.some(n(e.getOrDie(), t.getOrDie())) : M.none(),
        Pt = (e, t) => e ? M.some(t) : M.none();
    "undefined" != typeof window ? window : Function("return this;")();
    const Mt = e => e.dom.nodeName.toLowerCase(),
        It = e => e.dom.nodeType,
        Ft = e => t => It(t) === e,
        Ut = Ft(1),
        zt = Ft(3),
        jt = Ft(9),
        Vt = Ft(11),
        Ht = (e, t, n) => {
            if (!(m(n) || b(n) || w(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "")
        },
        $t = (e, t, n) => { Ht(e.dom, t, n) },
        qt = (e, t) => {
            const n = e.dom;
            fe(t, ((e, t) => { Ht(n, t, e) }))
        },
        Wt = (e, t) => { const n = e.dom.getAttribute(t); return null === n ? void 0 : n },
        Kt = (e, t) => M.from(Wt(e, t)),
        Gt = (e, t) => { const n = e.dom; return !(!n || !n.hasAttribute) && n.hasAttribute(t) },
        Yt = (e, t) => { e.dom.removeAttribute(t) },
        Xt = e => Y(e.dom.attributes, ((e, t) => (e[t.name] = t.value, e)), {}),
        Qt = (e, t) => { const n = Wt(e, t); return void 0 === n || "" === n ? [] : n.split(" ") },
        Jt = e => void 0 !== e.dom.classList,
        Zt = e => Qt(e, "class"),
        en = (e, t) => ((e, t, n) => { const o = Qt(e, t).concat([n]); return $t(e, t, o.join(" ")), !0 })(e, "class", t),
        tn = (e, t) => ((e, t, n) => { const o = K(Qt(e, t), (e => e !== n)); return o.length > 0 ? $t(e, t, o.join(" ")) : Yt(e, t), !1 })(e, "class", t),
        nn = (e, t) => { Jt(e) ? e.dom.classList.add(t) : en(e, t) },
        on = e => { 0 === (Jt(e) ? e.dom.classList : Zt(e)).length && Yt(e, "class") },
        rn = (e, t) => { Jt(e) ? e.dom.classList.remove(t) : tn(e, t), on(e) },
        sn = (e, t) => Jt(e) && e.dom.classList.contains(t),
        an = e => void 0 !== e.style && x(e.style.getPropertyValue),
        ln = e => { if (null == e) throw new Error("Node cannot be null or undefined"); return { dom: e } },
        dn = (e, t) => { const n = (t || document).createElement("div"); if (n.innerHTML = e, !n.hasChildNodes() || n.childNodes.length > 1) { const t = "HTML does not have a single root node"; throw console.error(t, e), new Error(t) } return ln(n.childNodes[0]) },
        cn = (e, t) => { const n = (t || document).createElement(e); return ln(n) },
        un = (e, t) => { const n = (t || document).createTextNode(e); return ln(n) },
        mn = ln,
        fn = (e, t, n) => M.from(e.dom.elementFromPoint(t, n)).map(ln),
        gn = (e, t) => {
            const n = [],
                o = e => (n.push(e), t(e));
            let r = t(e);
            do { r = r.bind(o) } while (r.isSome());
            return n
        },
        pn = (e, t) => { const n = e.dom; if (1 !== n.nodeType) return !1; { const e = n; if (void 0 !== e.matches) return e.matches(t); if (void 0 !== e.msMatchesSelector) return e.msMatchesSelector(t); if (void 0 !== e.webkitMatchesSelector) return e.webkitMatchesSelector(t); if (void 0 !== e.mozMatchesSelector) return e.mozMatchesSelector(t); throw new Error("Browser lacks native selectors") } },
        hn = e => 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount,
        bn = (e, t) => e.dom === t.dom,
        vn = (e, t) => {
            const n = e.dom,
                o = t.dom;
            return n !== o && n.contains(o)
        },
        yn = e => mn(e.dom.ownerDocument),
        Cn = e => jt(e) ? e : yn(e),
        xn = e => mn(Cn(e).dom.defaultView),
        wn = e => M.from(e.dom.parentNode).map(mn),
        kn = e => M.from(e.dom.previousSibling).map(mn),
        Sn = e => M.from(e.dom.nextSibling).map(mn),
        _n = e => ne(gn(e, kn)),
        En = e => gn(e, Sn),
        Nn = e => H(e.dom.childNodes, mn),
        Rn = (e, t) => { const n = e.dom.childNodes; return M.from(n[t]).map(mn) },
        An = e => Rn(e, 0),
        On = e => Rn(e, e.dom.childNodes.length - 1),
        Tn = e => e.dom.childNodes.length,
        Bn = e => Vt(e) && C(e.dom.host),
        Dn = x(Element.prototype.attachShadow) && x(Node.prototype.getRootNode),
        Ln = N(Dn),
        Pn = Dn ? e => mn(e.dom.getRootNode()) : Cn,
        Mn = e => Bn(e) ? e : (e => { const t = e.dom.head; if (null == t) throw new Error("Head is not available yet"); return mn(t) })(Cn(e)),
        In = e => mn(e.dom.host),
        Fn = e => { if (Ln() && C(e.target)) { const t = mn(e.target); if (Ut(t) && Un(t) && e.composed && e.composedPath) { const t = e.composedPath(); if (t) return ie(t) } } return M.from(e.target) },
        Un = e => C(e.dom.shadowRoot),
        zn = e => { const t = zt(e) ? e.dom.parentNode : e.dom; if (null == t || null === t.ownerDocument) return !1; const n = t.ownerDocument; return (e => { const t = Pn(e); return Bn(t) ? M.some(t) : M.none() })(mn(t)).fold((() => n.body.contains(t)), E(zn, In)) },
        jn = (e, t, n) => {
            if (!m(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
            an(e) && e.style.setProperty(t, n)
        },
        Vn = (e, t, n) => {
            const o = e.dom;
            jn(o, t, n)
        },
        Hn = (e, t) => {
            const n = e.dom;
            fe(t, ((e, t) => { jn(n, t, e) }))
        },
        $n = (e, t) => {
            const n = e.dom,
                o = window.getComputedStyle(n).getPropertyValue(t);
            return "" !== o || zn(e) ? o : qn(n, t)
        },
        qn = (e, t) => an(e) ? e.style.getPropertyValue(t) : "",
        Wn = (e, t) => {
            const n = e.dom,
                o = qn(n, t);
            return M.from(o).filter((e => e.length > 0))
        },
        Kn = e => {
            const t = {},
                n = e.dom;
            if (an(n))
                for (let e = 0; e < n.style.length; e++) {
                    const o = n.style.item(e);
                    t[o] = n.style[o]
                }
            return t
        },
        Gn = (e, t) => {
            ((e, t) => { an(e) && e.style.removeProperty(t) })(e.dom, t), Dt(Kt(e, "style").map(He), "") && Yt(e, "style")
        },
        Yn = (e, t) => { wn(e).each((n => { n.dom.insertBefore(t.dom, e.dom) })) },
        Xn = (e, t) => { Sn(e).fold((() => { wn(e).each((e => { Jn(e, t) })) }), (e => { Yn(e, t) })) },
        Qn = (e, t) => { An(e).fold((() => { Jn(e, t) }), (n => { e.dom.insertBefore(t.dom, n.dom) })) },
        Jn = (e, t) => { e.dom.appendChild(t.dom) },
        Zn = (e, t) => { $(t, (t => { Jn(e, t) })) },
        eo = e => { e.dom.textContent = "", $(Nn(e), (e => { to(e) })) },
        to = e => {
            const t = e.dom;
            null !== t.parentNode && t.parentNode.removeChild(t)
        },
        no = e => {
            const t = Nn(e);
            var n, o;
            t.length > 0 && (n = e, $(o = t, ((e, t) => {
                const r = 0 === t ? n : o[t - 1];
                Xn(r, e)
            }))), to(e)
        },
        oo = e => e.dom.innerHTML,
        ro = (e, t) => {
            const n = yn(e).dom,
                o = mn(n.createDocumentFragment()),
                r = ((e, t) => { const n = (t || document).createElement("div"); return n.innerHTML = e, Nn(mn(n)) })(t, n);
            Zn(o, r), eo(e), Jn(e, o)
        },
        so = (e, t, n, o) => ((e, t, n, o, r) => {
            const s = ((e, t) => n => {
                e(n) && t((e => {
                    const t = mn(Fn(e).getOr(e.target)),
                        n = () => e.stopPropagation(),
                        o = () => e.preventDefault(),
                        r = _(o, n);
                    return ((e, t, n, o, r, s, a) => ({ target: e, x: t, y: n, stop: o, prevent: r, kill: s, raw: a }))(t, e.clientX, e.clientY, n, o, r, e)
                })(n))
            })(n, o);
            return e.dom.addEventListener(t, s, false), { unbind: O(ao, e, t, s, false) }
        })(e, t, n, o),
        ao = (e, t, n, o) => { e.dom.removeEventListener(t, n, o) },
        io = (e, t) => ({ left: e, top: t, translate: (n, o) => io(e + n, t + o) }),
        lo = io,
        co = (e, t) => void 0 !== e ? e : void 0 !== t ? t : 0,
        uo = e => {
            const t = e.dom,
                n = t.ownerDocument.body;
            return n === t ? lo(n.offsetLeft, n.offsetTop) : zn(e) ? (e => { const t = e.getBoundingClientRect(); return lo(t.left, t.top) })(t) : lo(0, 0)
        },
        mo = e => {
            const t = void 0 !== e ? e.dom : document,
                n = t.body.scrollLeft || t.documentElement.scrollLeft,
                o = t.body.scrollTop || t.documentElement.scrollTop;
            return lo(n, o)
        },
        fo = (e, t, n) => {
            const o = (void 0 !== n ? n.dom : document).defaultView;
            o && o.scrollTo(e, t)
        },
        go = (e, t) => { Ct().browser.isSafari() && x(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t) },
        po = (e, t, n, o) => ({ x: e, y: t, width: n, height: o, right: e + n, bottom: t + o }),
        ho = e => {
            const t = void 0 === e ? window : e,
                n = t.document,
                o = mo(mn(n));
            return (e => { const t = void 0 === e ? window : e; return Ct().browser.isFirefox() ? M.none() : M.from(t.visualViewport) })(t).fold((() => {
                const e = t.document.documentElement,
                    n = e.clientWidth,
                    r = e.clientHeight;
                return po(o.left, o.top, n, r)
            }), (e => po(Math.max(e.pageLeft, o.left), Math.max(e.pageTop, o.top), e.width, e.height)))
        },
        bo = e => t => !!t && t.nodeType === e,
        vo = e => !!e && !Object.getPrototypeOf(e),
        yo = bo(1),
        Co = e => { const t = e.map((e => e.toLowerCase())); return e => { if (e && e.nodeName) { const n = e.nodeName.toLowerCase(); return j(t, n) } return !1 } },
        xo = (e, t) => {
            const n = t.toLowerCase().split(" ");
            return t => {
                if (yo(t))
                    for (let o = 0; o < n.length; o++) { const r = t.ownerDocument.defaultView.getComputedStyle(t, null); if ((r ? r.getPropertyValue(e) : null) === n[o]) return !0 }
                return !1
            }
        },
        wo = e => t => yo(t) && t.hasAttribute(e),
        ko = e => yo(e) && e.hasAttribute("data-mce-bogus"),
        So = e => yo(e) && "TABLE" === e.tagName,
        _o = e => t => { if (yo(t)) { if (t.contentEditable === e) return !0; if (t.getAttribute("data-mce-contenteditable") === e) return !0 } return !1 },
        Eo = Co(["textarea", "input"]),
        No = bo(3),
        Ro = bo(4),
        Ao = bo(7),
        Oo = bo(8),
        To = bo(9),
        Bo = bo(11),
        Do = Co(["br"]),
        Lo = Co(["img"]),
        Po = _o("true"),
        Mo = _o("false"),
        Io = Co(["td", "th"]),
        Fo = Co(["video", "audio", "object", "embed"]),
        Uo = Ct().browser,
        zo = e => Q(e, Ut),
        jo = (e, t) => e.children && j(e.children, t);
    var Vo = (e, t, n, o, r) => e(n, o) ? M.some(n) : x(r) && r(n) ? M.none() : t(n, o, r);
    const Ho = (e, t, n) => { let o = e.dom; const r = x(n) ? n : L; for (; o.parentNode;) { o = o.parentNode; const e = mn(o); if (t(e)) return M.some(e); if (r(e)) break } return M.none() },
        $o = (e, t, n) => Vo(((e, t) => t(e)), Ho, e, t, n),
        qo = (e, t, n) => Ho(e, (e => pn(e, t)), n),
        Wo = (e, t) => ((e, t) => { const n = void 0 === t ? document : t.dom; return hn(n) ? M.none() : M.from(n.querySelector(e)).map(mn) })(t, e),
        Ko = (e, t, n) => Vo(((e, t) => pn(e, t)), qo, e, t, n),
        Go = (e, t = {}) => {
            let n = 0;
            const o = {},
                r = mn(e),
                s = Cn(r),
                a = t.maxLoadTime || 5e3,
                i = i => new Promise(((l, d) => {
                    let c;
                    const u = Bt._addCacheSuffix(i),
                        m = (e => xe(o, e).getOrThunk((() => ({ id: "mce-u" + n++, passed: [], failed: [], count: 0 }))))(u);
                    o[u] = m, m.count++;
                    const f = (e, t) => { $(e, D), m.status = t, m.passed = [], m.failed = [], c && (c.onload = null, c.onerror = null, c = null) },
                        g = () => f(m.passed, 2),
                        p = () => f(m.failed, 3),
                        h = () => {
                            var t;
                            t = h, (() => { const t = e.styleSheets; let n = t.length; for (; n--;) { const e = t[n].ownerNode; if (e && e.id === c.id) return g(), !0 } return !1 })() || (Date.now() - v < a ? setTimeout(t) : p())
                        };
                    if (l && m.passed.push(l), d && m.failed.push(d), 1 === m.status) return;
                    if (2 === m.status) return void g();
                    if (3 === m.status) return void p();
                    m.status = 1;
                    const b = cn("link", s.dom);
                    qt(b, { rel: "stylesheet", type: "text/css", id: m.id });
                    const v = Date.now();
                    var y;
                    t.contentCssCors && $t(b, "crossOrigin", "anonymous"), t.referrerPolicy && $t(b, "referrerpolicy", t.referrerPolicy), c = b.dom, c.onload = h, c.onerror = p, y = b, Jn(Mn(r), y), $t(b, "href", u)
                })),
                l = e => {
                    const t = Bt._addCacheSuffix(e);
                    xe(o, t).each((e => {
                        0 == --e.count && (delete o[t], (e => {
                            const t = Mn(r);
                            Wo(t, "#" + e).each(to)
                        })(e.id))
                    }))
                };
            return { load: i, loadAll: e => Promise.allSettled(H(e, (e => i(e).then(N(e))))).then((e => { const t = W(e, (e => "fulfilled" === e.status)); return t.fail.length > 0 ? Promise.reject(H(t.fail, (e => e.reason))) : H(t.pass, (e => e.value)) })), unload: l, unloadAll: e => { $(e, (e => { l(e) })) }, _setReferrerPolicy: e => { t.referrerPolicy = e } }
        },
        Yo = (() => { const e = new WeakMap; return { forElement: (t, n) => { const o = Pn(t).dom; return M.from(e.get(o)).getOrThunk((() => { const t = Go(o, n); return e.set(o, t), t })) } } })();
    class Xo {
        constructor(e, t) { this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this) }
        current() { return this.node }
        next(e) { return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node }
        prev(e) { return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node }
        prev2(e) { return this.node = this.findPreviousNode(this.node, "lastChild", "previousSibling", e), this.node }
        findSibling(e, t, n, o) {
            let r, s;
            if (e) {
                if (!o && e[t]) return e[t];
                if (e !== this.rootNode) {
                    if (r = e[n], r) return r;
                    for (s = e.parentNode; s && s !== this.rootNode; s = s.parentNode)
                        if (r = s[n], r) return r
                }
            }
        }
        findPreviousNode(e, t, n, o) {
            let r, s, a;
            if (e) {
                if (r = e[n], this.rootNode && r === this.rootNode) return;
                if (r) {
                    if (!o)
                        for (a = r[t]; a; a = a[t])
                            if (!a[t]) return a;
                    return r
                }
                if (s = e.parentNode, s && s !== this.rootNode) return s
            }
        }
    }
    const Qo = e => { let t; return n => (t = t || re(e, P), we(t, Mt(n))) },
        Jo = Qo(["h1", "h2", "h3", "h4", "h5", "h6"]),
        Zo = Qo(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        er = e => Ut(e) && !Zo(e),
        tr = e => Ut(e) && "br" === Mt(e),
        nr = Qo(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        or = Qo(["ul", "ol", "dl"]),
        rr = Qo(["li", "dd", "dt"]),
        sr = Qo(["thead", "tbody", "tfoot"]),
        ar = Qo(["td", "th"]),
        ir = Qo(["pre", "script", "textarea", "style"]),
        lr = "\ufeff",
        dr = "\xa0",
        cr = e => e === lr,
        ur = lr,
        mr = cr,
        fr = e => e.replace(/\uFEFF/g, ""),
        gr = yo,
        pr = No,
        hr = e => (pr(e) && (e = e.parentNode), gr(e) && e.hasAttribute("data-mce-caret")),
        br = e => pr(e) && mr(e.data),
        vr = e => hr(e) || br(e),
        yr = e => e.firstChild !== e.lastChild || !Do(e.firstChild),
        Cr = e => { const t = e.container(); return !!No(t) && (t.data.charAt(e.offset()) === ur || e.isAtStart() && br(t.previousSibling)) },
        xr = e => { const t = e.container(); return !!No(t) && (t.data.charAt(e.offset() - 1) === ur || e.isAtEnd() && br(t.nextSibling)) },
        wr = e => pr(e) && e.data[0] === ur,
        kr = e => pr(e) && e.data[e.data.length - 1] === ur,
        Sr = e => e && e.hasAttribute("data-mce-caret") ? ((e => {
            const t = e.getElementsByTagName("br"),
                n = t[t.length - 1];
            ko(n) && n.parentNode.removeChild(n)
        })(e), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("data-mce-style"), e.removeAttribute("_moz_abspos"), e) : null,
        _r = e => hr(e.startContainer),
        Er = Po,
        Nr = Mo,
        Rr = Do,
        Ar = No,
        Or = Co(["script", "style", "textarea"]),
        Tr = Co(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]),
        Br = Co(["table"]),
        Dr = vr,
        Lr = e => !Dr(e) && (Ar(e) ? !Or(e.parentNode) : Tr(e) || Rr(e) || Br(e) || Pr(e)),
        Pr = e => !1 === (e => yo(e) && "true" === e.getAttribute("unselectable"))(e) && Nr(e),
        Mr = (e, t) => Lr(e) && ((e, t) => { for (e = e.parentNode; e && e !== t; e = e.parentNode) { if (Pr(e)) return !1; if (Er(e)) return !0 } return !0 })(e, t),
        Ir = /^[ \t\r\n]*$/,
        Fr = e => Ir.test(e),
        Ur = e => "\n" === e || "\r" === e,
        zr = (e, t = 4, n = !0, o = !0) => {
            const r = ((e, t) => t <= 0 ? "" : new Array(t + 1).join(" "))(0, t),
                s = e.replace(/\t/g, r),
                a = Y(s, ((e, t) => (e => -1 !== " \f\t\v".indexOf(e))(t) || t === dr ? e.pcIsSpace || "" === e.str && n || e.str.length === s.length - 1 && o || ((e, t) => t < e.length && t >= 0 && Ur(e[t]))(s, e.str.length + 1) ? { pcIsSpace: !1, str: e.str + dr } : { pcIsSpace: !0, str: e.str + " " } : { pcIsSpace: Ur(t), str: e.str + t }), { pcIsSpace: !1, str: "" });
            return a.str
        },
        jr = (e, t) => Lr(e) && !1 === ((e, t) => No(e) && Fr(e.data) && !1 === ((e, t) => { const n = mn(t); return o = mn(e), r = O(bn, n), qo(o, "pre,code", r).isSome(); var o, r })(e, t))(e, t) || (e => yo(e) && "A" === e.nodeName && !e.hasAttribute("href") && (e.hasAttribute("name") || e.hasAttribute("id")))(e) || Vr(e),
        Vr = wo("data-mce-bookmark"),
        Hr = wo("data-mce-bogus"),
        $r = ("data-mce-bogus", "all", e => yo(e) && "all" === e.getAttribute("data-mce-bogus"));
    const qr = (e, t = !0) => ((e, t) => {
            let n = 0;
            if (jr(e, e)) return !1; {
                let o = e.firstChild;
                if (!o) return !0;
                const r = new Xo(o, e);
                do {
                    if (t) { if ($r(o)) { o = r.next(!0); continue } if (Hr(o)) { o = r.next(); continue } }
                    if (Do(o)) n++, o = r.next();
                    else {
                        if (jr(o, e)) return !1;
                        o = r.next()
                    }
                } while (o);
                return n <= 1
            }
        })(e.dom, t),
        Wr = (e, t) => C(e) && (jr(e, t) || er(mn(e))),
        Kr = e => (e => "span" === e.nodeName.toLowerCase())(e) && "bookmark" === e.getAttribute("data-mce-type"),
        Gr = (e, t, n) => {
            const o = n || t;
            if (yo(t) && Kr(t)) return t;
            const r = t.childNodes;
            for (let t = r.length - 1; t >= 0; t--) Gr(e, r[t], o);
            if (yo(t)) {
                const e = t.childNodes;
                1 === e.length && Kr(e[0]) && t.parentNode.insertBefore(e[0], t)
            }
            return (e => Bo(e) || To(e))(t) || jr(t, o) || (e => !!yo(e) && e.childNodes.length > 0)(t) || ((e, t) => No(e) && e.data.length > 0 && ((e, t) => {
                const n = new Xo(e, t).prev(!1),
                    o = new Xo(e, t).next(!1),
                    r = v(n) || Wr(n, t),
                    s = v(o) || Wr(o, t);
                return r && s
            })(e, t))(t, o) || e.remove(t), t
        },
        Yr = Bt.makeMap,
        Xr = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Qr = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Jr = /[<>&\"\']/g,
        Zr = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        es = { 128: "\u20ac", 130: "\u201a", 131: "\u0192", 132: "\u201e", 133: "\u2026", 134: "\u2020", 135: "\u2021", 136: "\u02c6", 137: "\u2030", 138: "\u0160", 139: "\u2039", 140: "\u0152", 142: "\u017d", 145: "\u2018", 146: "\u2019", 147: "\u201c", 148: "\u201d", 149: "\u2022", 150: "\u2013", 151: "\u2014", 152: "\u02dc", 153: "\u2122", 154: "\u0161", 155: "\u203a", 156: "\u0153", 158: "\u017e", 159: "\u0178" },
        ts = { '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;" },
        ns = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'" },
        os = (e, t) => { let n, o, r; const s = {}; if (e) { for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) o = String.fromCharCode(parseInt(e[n], t)), ts[o] || (r = "&" + e[n + 1] + ";", s[o] = r, s[r] = o); return s } },
        rs = os("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32),
        ss = (e, t) => e.replace(t ? Xr : Qr, (e => ts[e] || e)),
        as = (e, t) => e.replace(t ? Xr : Qr, (e => e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : ts[e] || "&#" + e.charCodeAt(0) + ";")),
        is = (e, t, n) => (n = n || rs, e.replace(t ? Xr : Qr, (e => ts[e] || n[e] || e))),
        ls = {
            encodeRaw: ss,
            encodeAllRaw: e => ("" + e).replace(Jr, (e => ts[e] || e)),
            encodeNumeric: as,
            encodeNamed: is,
            getEncodeFunc: (e, t) => {
                const n = os(t) || rs,
                    o = Yr(e.replace(/\+/g, ","));
                return o.named && o.numeric ? (e, t) => e.replace(t ? Xr : Qr, (e => void 0 !== ts[e] ? ts[e] : void 0 !== n[e] ? n[e] : e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";")) : o.named ? t ? (e, t) => is(e, t, n) : is : o.numeric ? as : ss
            },
            decode: e => e.replace(Zr, ((e, t) => t ? (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) > 65535 ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : es[t] || String.fromCharCode(t) : ns[e] || rs[e] || (e => { const t = cn("div").dom; return t.innerHTML = e, t.textContent || t.innerText || e })(e)))
        },
        ds = {},
        cs = {},
        us = Bt.makeMap,
        ms = Bt.each,
        fs = Bt.extend,
        gs = Bt.explode,
        ps = Bt.inArray,
        hs = (e, t) => (e = Bt.trim(e)) ? e.split(t || " ") : [],
        bs = (e, t) => { let n; return e && (n = {}, "string" == typeof e && (e = { "*": e }), ms(e, ((e, o) => { n[o] = n[o.toUpperCase()] = "map" === t ? us(e, /[, ]/) : gs(e, /[, ]/) }))), n },
        vs = e => {
            var t;
            const n = {},
                o = {};
            let r = [];
            const s = {},
                a = {},
                i = (t, n, o) => { let r = e[t]; return r ? r = us(r, /[, ]/, us(r.toUpperCase(), /[, ]/)) : (r = ds[t], r || (r = us(n, " ", us(n.toUpperCase(), " ")), r = fs(r, o), ds[t] = r)), r },
                l = null !== (t = (e = e || {}).schema) && void 0 !== t ? t : "html5",
                d = (e => {
                    const t = {};
                    let n, o, r, s, a, i;
                    const l = (e, o = "", r = "") => {
                            const s = hs(r),
                                a = hs(e);
                            let i = a.length;
                            for (; i--;) {
                                const e = hs([n, o].join(" "));
                                t[a[i]] = { attributes: re(e, (() => ({}))), attributesOrder: e, children: re(s, N(cs)) }
                            }
                        },
                        d = (e, n) => {
                            const o = hs(e),
                                r = hs(n);
                            let s = o.length;
                            for (; s--;) { const e = t[o[s]]; for (let t = 0, n = r.length; t < n; t++) e.attributes[r[t]] = {}, e.attributesOrder.push(r[t]) }
                        };
                    return ds[e] ? ds[e] : (n = "id accesskey class dir lang style tabindex title role", o = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", r = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (n += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", o += " article aside details dialog figure main header footer hgroup section nav", r += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (n += " xml:lang", i = "acronym applet basefont big font strike tt", r = [r, i].join(" "), ms(hs(i), (e => { l(e, "", r) })), a = "center dir isindex noframes", o = [o, a].join(" "), s = [o, r].join(" "), ms(hs(a), (e => { l(e, "", s) }))), s = s || [o, r].join(" "), l("html", "manifest", "head body"), l("head", "", "base command link meta noscript script style title"), l("title hr noscript br"), l("base", "href target"), l("link", "href rel media hreflang type sizes hreflang"), l("meta", "name http-equiv content charset"), l("style", "media type scoped"), l("script", "src async defer type charset"), l("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", s), l("address dt dd div caption", "", s), l("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", r), l("blockquote", "cite", s), l("ol", "reversed start type", "li"), l("ul", "", "li"), l("li", "value", s), l("dl", "", "dt dd"), l("a", "href target rel media hreflang type", r), l("q", "cite", r), l("ins del", "cite datetime", s), l("img", "src sizes srcset alt usemap ismap width height"), l("iframe", "src name width height", s), l("embed", "src type width height"), l("object", "data type typemustmatch name usemap form width height", [s, "param"].join(" ")), l("param", "name value"), l("map", "name", [s, "area"].join(" ")), l("area", "alt coords shape href target rel media hreflang type"), l("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), l("colgroup", "span", "col"), l("col", "span"), l("tbody thead tfoot", "", "tr"), l("tr", "", "td th"), l("td", "colspan rowspan headers", s), l("th", "colspan rowspan headers scope abbr", s), l("form", "accept-charset action autocomplete enctype method name novalidate target", s), l("fieldset", "disabled form name", [s, "legend"].join(" ")), l("label", "form for", r), l("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), l("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? s : r), l("select", "disabled form multiple name required size", "option optgroup"), l("optgroup", "disabled label", "option"), l("option", "disabled label selected value"), l("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), l("menu", "type label", [s, "li"].join(" ")), l("noscript", "", s), "html4" !== e && (l("wbr"), l("ruby", "", [r, "rt rp"].join(" ")), l("figcaption", "", s), l("mark rt rp summary bdi", "", r), l("canvas", "width height", s), l("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [s, "track source"].join(" ")), l("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [s, "track source"].join(" ")), l("picture", "", "img source"), l("source", "src srcset type media sizes"), l("track", "kind src srclang label default"), l("datalist", "", [r, "option"].join(" ")), l("article section nav aside main header footer", "", s), l("hgroup", "", "h1 h2 h3 h4 h5 h6"), l("figure", "", [s, "figcaption"].join(" ")), l("time", "datetime", r), l("dialog", "open", s), l("command", "type label icon disabled checked radiogroup command"), l("output", "for form name", r), l("progress", "value max", r), l("meter", "value min max low high optimum", r), l("details", "open", [s, "summary"].join(" ")), l("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (d("script", "language xml:space"), d("style", "xml:space"), d("object", "declare classid code codebase codetype archive standby align border hspace vspace"), d("embed", "align name hspace vspace"), d("param", "valuetype type"), d("a", "charset name rev shape coords"), d("br", "clear"), d("applet", "codebase archive code object alt name width height align hspace vspace"), d("img", "name longdesc align border hspace vspace"), d("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), d("font basefont", "size color face"), d("input", "usemap align"), d("select"), d("textarea"), d("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), d("ul", "type compact"), d("li", "type"), d("ol dl menu dir", "compact"), d("pre", "width xml:space"), d("hr", "align noshade size width"), d("isindex", "prompt"), d("table", "summary width frame rules cellspacing cellpadding align bgcolor"), d("col", "width align char charoff valign"), d("colgroup", "width align char charoff valign"), d("thead", "align char charoff valign"), d("tr", "align char charoff valign bgcolor"), d("th", "axis align char charoff valign nowrap bgcolor width height"), d("form", "accept"), d("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), d("tfoot", "align char charoff valign"), d("tbody", "align char charoff valign"), d("area", "nohref"), d("body", "background bgcolor text link vlink alink")), "html4" !== e && (d("input button select textarea", "autofocus"), d("input textarea", "placeholder"), d("a", "download"), d("link script img", "crossorigin"), d("img", "loading"), d("iframe", "sandbox seamless allowfullscreen loading")), "html4" !== e && $([t.video, t.audio], (e => { delete e.children.audio, delete e.children.video })), ms(hs("a form meter progress dfn"), (e => { t[e] && delete t[e].children[e] })), delete t.caption.children.table, delete t.script, ds[e] = t, t)
                })(l);
            !1 === e.verify_html && (e.valid_elements = "*[*]");
            const c = bs(e.valid_styles),
                u = bs(e.invalid_styles, "map"),
                m = bs(e.valid_classes, "map"),
                f = i("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
                g = i("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
                p = i("void_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
                h = i("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen"),
                b = "td th iframe video audio object script code",
                v = i("non_empty_elements", b + " pre", p),
                y = i("move_caret_before_on_enter_elements", b + " table", p),
                C = i("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
                x = i("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", C),
                w = i("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp");
            ms("script noscript iframe noframes noembed title style textarea xmp plaintext".split(" "), (e => { a[e] = new RegExp("</" + e + "[^>]*>", "gi") }));
            const k = e => new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$"),
                S = e => {
                    let t, o, s, a, i, l, d, c, u, m, f, g, p, h, b, v, y, C;
                    const x = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
                        w = /^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/,
                        S = /[*?+]/;
                    if (e) {
                        const _ = hs(e, ",");
                        for (n["@"] && (v = n["@"].attributes, y = n["@"].attributesOrder), t = 0, o = _.length; t < o; t++)
                            if (i = x.exec(_[t]), i) {
                                if (h = i[1], u = i[2], b = i[3], c = i[5], g = {}, p = [], l = { attributes: g, attributesOrder: p }, "#" === h && (l.paddEmpty = !0), "-" === h && (l.removeEmpty = !0), "!" === i[4] && (l.removeEmptyAttrs = !0), v && (fe(v, ((e, t) => { g[t] = e })), p.push.apply(p, y)), c)
                                    for (c = hs(c, "|"), s = 0, a = c.length; s < a; s++)
                                        if (i = w.exec(c[s]), i) {
                                            if (d = {}, f = i[1], m = i[2].replace(/[\\:]:/g, ":"), h = i[3], C = i[4], "!" === f && (l.attributesRequired = l.attributesRequired || [], l.attributesRequired.push(m), d.required = !0), "-" === f) { delete g[m], p.splice(ps(p, m), 1); continue }
                                            h && ("=" === h && (l.attributesDefault = l.attributesDefault || [], l.attributesDefault.push({ name: m, value: C }), d.defaultValue = C), "~" === h && (l.attributesForced = l.attributesForced || [], l.attributesForced.push({ name: m, value: C }), d.forcedValue = C), "<" === h && (d.validValues = us(C, "?"))), S.test(m) ? (l.attributePatterns = l.attributePatterns || [], d.pattern = k(m), l.attributePatterns.push(d)) : (g[m] || p.push(m), g[m] = d)
                                        }
                                v || "@" !== u || (v = g, y = p), b && (l.outputName = u, n[b] = l), S.test(u) ? (l.pattern = k(u), r.push(l)) : n[u] = l
                            }
                    }
                },
                _ = e => { r = [], $(ue(n), (e => { delete n[e] })), S(e), ms(d, ((e, t) => { o[t] = e.children })) },
                E = e => {
                    const t = /^(~)?(.+)$/;
                    e && (ds.text_block_elements = ds.block_elements = null, ms(hs(e, ","), (e => {
                        const r = t.exec(e),
                            a = "~" === r[1],
                            i = a ? "span" : "div",
                            l = r[2];
                        if (o[l] = o[i], s[l] = i, a || (x[l.toUpperCase()] = {}, x[l] = {}), !n[l]) {
                            let e = n[i];
                            e = fs({}, e), delete e.removeEmptyAttrs, delete e.removeEmpty, n[l] = e
                        }
                        ms(o, ((e, t) => { e[i] && (o[t] = e = fs({}, o[t]), e[l] = e[i]) }))
                    })))
                },
                R = e => {
                    const t = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
                    ds[l] = null, e && ms(hs(e, ","), (e => {
                        const n = t.exec(e);
                        let r, s;
                        n && (s = n[1], r = s ? o[n[2]] : o[n[2]] = { "#comment": {} }, r = o[n[2]], ms(hs(n[3], "|"), (e => { "-" === s ? delete r[e] : r[e] = {} })))
                    }))
                },
                A = e => {
                    let t, o = n[e];
                    if (o) return o;
                    for (t = r.length; t--;)
                        if (o = r[t], o.pattern.test(e)) return o
                };
            e.valid_elements ? _(e.valid_elements) : (ms(d, ((e, t) => { n[t] = { attributes: e.attributes, attributesOrder: e.attributesOrder }, o[t] = e.children })), ms(hs("strong/b em/i"), (e => {
                const t = hs(e, "/");
                n[t[1]].outputName = t[0]
            })), ms(hs("ol ul sub sup blockquote span font a table tbody strong em b i"), (e => { n[e] && (n[e].removeEmpty = !0) })), ms(hs("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), (e => { n[e].paddEmpty = !0 })), ms(hs("span"), (e => { n[e].removeEmptyAttrs = !0 }))), E(e.custom_elements), R(e.valid_children), S(e.extended_valid_elements), R("+ol[ul|ol],+ul[ul|ol]"), ms({ dd: "dl", dt: "dl", li: "ul ol", td: "tr", th: "tr", tr: "tbody thead tfoot", tbody: "table", thead: "table", tfoot: "table", legend: "fieldset", area: "map", param: "video audio object" }, ((e, t) => { n[t] && (n[t].parentsRequired = hs(e)) })), e.invalid_elements && ms(gs(e.invalid_elements), (e => { n[e] && delete n[e] })), A("span") || S("span[!data-mce-type|*]");
            const O = N(c),
                T = N(u),
                B = N(m),
                D = N(h),
                L = N(x),
                P = N(C),
                M = N(w),
                I = N(Object.seal(p)),
                F = N(g),
                U = N(v),
                z = N(y),
                j = N(f),
                V = N(Object.seal(a)),
                H = N(s);
            return {
                type: l,
                children: o,
                elements: n,
                getValidStyles: O,
                getValidClasses: B,
                getBlockElements: L,
                getInvalidStyles: T,
                getVoidElements: I,
                getTextBlockElements: P,
                getTextInlineElements: M,
                getBoolAttrs: D,
                getElementRule: A,
                getSelfClosingElements: F,
                getNonEmptyElements: U,
                getMoveCaretBeforeOnEnterElements: z,
                getWhitespaceElements: j,
                getSpecialElements: V,
                isValidChild: (e, t) => { const n = o[e.toLowerCase()]; return !(!n || !n[t.toLowerCase()]) },
                isValid: (e, t) => {
                    let n, o;
                    const r = A(e);
                    if (r) {
                        if (!t) return !0;
                        if (r.attributes[t]) return !0;
                        if (n = r.attributePatterns, n)
                            for (o = n.length; o--;)
                                if (n[o].pattern.test(t)) return !0
                    }
                    return !1
                },
                getCustomElements: H,
                addValidElements: S,
                setValidElements: _,
                addCustomElements: E,
                addValidChildren: R
            }
        },
        ys = (e, t) => {
            const n = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                o = /\s*([^:]+):\s*([^;]+);?/g,
                r = /\s+$/;
            let s;
            const a = {};
            let i, l;
            e = e || {}, t && (i = t.getValidStyles(), l = t.getInvalidStyles());
            const d = "\\\" \\' \\; \\: ; : \ufeff".split(" ");
            for (s = 0; s < d.length; s++) a[d[s]] = "\ufeff" + s, a["\ufeff" + s] = d[s];
            const c = {
                parse: t => {
                    const i = {};
                    let l, d, u, m;
                    const f = e.url_converter,
                        g = e.url_converter_scope || c,
                        p = (e, t, n) => {
                            const o = i[e + "-top" + t];
                            if (!o) return;
                            const r = i[e + "-right" + t];
                            if (!r) return;
                            const a = i[e + "-bottom" + t];
                            if (!a) return;
                            const l = i[e + "-left" + t];
                            if (!l) return;
                            const d = [o, r, a, l];
                            for (s = d.length - 1; s-- && d[s] === d[s + 1];);
                            s > -1 && n || (i[e + t] = -1 === s ? d[0] : d.join(" "), delete i[e + "-top" + t], delete i[e + "-right" + t], delete i[e + "-bottom" + t], delete i[e + "-left" + t])
                        },
                        h = e => {
                            let t, n = i[e];
                            if (n) {
                                for (n = n.split(" "), t = n.length; t--;)
                                    if (n[t] !== n[0]) return !1;
                                return i[e] = n[0], !0
                            }
                        },
                        b = e => (m = !0, a[e]),
                        v = (e, t) => (m && (e = e.replace(/\uFEFF[0-9]/g, (e => a[e]))), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e),
                        y = e => String.fromCharCode(parseInt(e.slice(1), 16)),
                        C = e => e.replace(/\\[0-9a-f]+/gi, y),
                        x = (t, n, o, r, s, a) => { if (s = s || a) return "'" + (s = v(s)).replace(/\'/g, "\\'") + "'"; if (n = v(n || o || r), !e.allow_script_urls) { const t = n.replace(/[\s\r\n]+/g, ""); if (/(java|vb)script:/i.test(t)) return ""; if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(t)) return "" } return f && (n = f.call(g, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')" };
                    if (t) {
                        for (t = (t = t.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, b).replace(/\"[^\"]+\"|\'[^\']+\'/g, (e => e.replace(/[;:]/g, b))); l = o.exec(t);)
                            if (o.lastIndex = l.index + l[0].length, d = l[1].replace(r, "").toLowerCase(), u = l[2].replace(r, ""), d && u) { if (d = C(d), u = C(u), -1 !== d.indexOf("\ufeff") || -1 !== d.indexOf('"')) continue; if (!e.allow_script_urls && ("behavior" === d || /expression\s*\(|\/\*|\*\//.test(u))) continue; "font-weight" === d && "700" === u ? u = "bold" : "color" !== d && "background-color" !== d || (u = u.toLowerCase()), u = u.replace(n, x), i[d] = m ? v(u, !0) : u }
                        p("border", "", !0), p("border", "-width"), p("border", "-color"), p("border", "-style"), p("padding", ""), p("margin", ""), "border", k = "border-style", S = "border-color", h(w = "border-width") && h(k) && h(S) && (i.border = i[w] + " " + i[k] + " " + i[S], delete i[w], delete i[k], delete i[S]), "medium none" === i.border && delete i.border, "none" === i["border-image"] && delete i["border-image"]
                    }
                    var w, k, S;
                    return i
                },
                serialize: (e, t) => {
                    let n = "";
                    const o = t => {
                        let o;
                        const r = i[t];
                        if (r)
                            for (let s = 0, a = r.length; s < a; s++) t = r[s], o = e[t], o && (n += (n.length > 0 ? " " : "") + t + ": " + o + ";")
                    };
                    return t && i ? (o("*"), o(t)) : fe(e, ((e, o) => {!e || l && !((e, t) => { let n = l["*"]; return !(n && n[e] || (n = l[t], n && n[e])) })(o, t) || (n += (n.length > 0 ? " " : "") + o + ": " + e + ";") })), n
                }
            };
            return c
        },
        Cs = { keyLocation: !0, layerX: !0, layerY: !0, returnValue: !0, webkitMovementX: !0, webkitMovementY: !0, keyIdentifier: !0, mozPressure: !0 },
        xs = (e, t) => { const n = null != t ? t : {}; for (const t in e) we(Cs, t) || (n[t] = e[t]); return C(n.composedPath) && (n.composedPath = () => e.composedPath()), n },
        ws = (e, t, n, o) => { var r; const s = xs(t, o); return s.type = e, y(s.target) && (s.target = null !== (r = s.srcElement) && void 0 !== r ? r : n), (e => y(e.preventDefault) || (e => e instanceof Event || x(e.initEvent))(e))(t) && (s.preventDefault = () => { s.defaultPrevented = !0, s.isDefaultPrevented = P, x(t.preventDefault) && t.preventDefault() }, s.stopPropagation = () => { s.cancelBubble = !0, s.isPropagationStopped = P, x(t.stopPropagation) && t.stopPropagation() }, s.stopImmediatePropagation = () => { s.isImmediatePropagationStopped = P, s.stopPropagation() }, (e => e.isDefaultPrevented === P || e.isDefaultPrevented === L)(s) || (s.isDefaultPrevented = !0 === s.defaultPrevented ? P : L, s.isPropagationStopped = !0 === s.cancelBubble ? P : L, s.isImmediatePropagationStopped = L)), s },
        ks = /^(?:mouse|contextmenu)|click/,
        Ss = (e, t, n, o) => { e.addEventListener ? e.addEventListener(t, n, o || !1) : e.attachEvent && e.attachEvent("on" + t, n) },
        _s = (e, t, n, o) => { e.removeEventListener ? e.removeEventListener(t, n, o || !1) : e.detachEvent && e.detachEvent("on" + t, n) },
        Es = (e, t) => {
            const n = ws(e.type, e, document, t);
            if ((e => C(e) && ks.test(e.type))(e) && v(e.pageX) && !v(e.clientX)) {
                const t = n.target.ownerDocument || document,
                    o = t.documentElement,
                    r = t.body,
                    s = n;
                s.pageX = e.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), s.pageY = e.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)
            }
            return n
        },
        Ns = (e, t, n) => {
            const o = e.document,
                r = { type: "ready" };
            if (n.domLoaded) return void t(r);
            const s = () => { _s(e, "DOMContentLoaded", s), _s(e, "load", s), n.domLoaded || (n.domLoaded = !0, t(r)), e = null };
            "complete" === o.readyState || "interactive" === o.readyState && o.body ? s() : Ss(e, "DOMContentLoaded", s), n.domLoaded || Ss(e, "load", s)
        };
    class Rs {
        constructor() { this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date).toString(32), this.hasMouseEnterLeave = "onmouseenter" in document.documentElement, this.hasFocusIn = "onfocusin" in document.documentElement, this.count = 1 }
        bind(e, t, n, o) {
            const r = this;
            let s, a, i, l, d, c, u;
            const m = window,
                f = e => { r.executeHandlers(Es(e || m.event), s) };
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return;
            e[r.expando] ? s = e[r.expando] : (s = r.count++, e[r.expando] = s, r.events[s] = {}), o = o || e;
            const g = t.split(" ");
            for (i = g.length; i--;) l = g[i], c = f, d = u = !1, "DOMContentLoaded" === l && (l = "ready"), r.domLoaded && "ready" === l && "complete" === e.readyState ? n.call(o, Es({ type: l })) : (r.hasMouseEnterLeave || (d = r.mouseEnterLeave[l], d && (c = e => {
                const t = e.currentTarget;
                let n = e.relatedTarget;
                if (n && t.contains) n = t.contains(n);
                else
                    for (; n && n !== t;) n = n.parentNode;
                n || ((e = Es(e || m.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, r.executeHandlers(e, s))
            })), r.hasFocusIn || "focusin" !== l && "focusout" !== l || (u = !0, d = "focusin" === l ? "focus" : "blur", c = e => {
                (e = Es(e || m.event)).type = "focus" === e.type ? "focusin" : "focusout", r.executeHandlers(e, s)
            }), a = r.events[s][l], a ? "ready" === l && r.domLoaded ? n(Es({ type: l })) : a.push({ func: n, scope: o }) : (r.events[s][l] = a = [{ func: n, scope: o }], a.fakeName = d, a.capture = u, a.nativeHandler = c, "ready" === l ? Ns(e, c, r) : Ss(e, d || l, c, u)));
            return e = a = null, n
        }
        unbind(e, t, n) {
            let o, r, s, a, i;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            const l = e[this.expando];
            if (l) {
                if (i = this.events[l], t) {
                    const l = t.split(" ");
                    for (r = l.length; r--;)
                        if (a = l[r], o = i[a], o) {
                            if (n)
                                for (s = o.length; s--;)
                                    if (o[s].func === n) {
                                        const e = o.nativeHandler,
                                            t = o.fakeName,
                                            n = o.capture;
                                        o = o.slice(0, s).concat(o.slice(s + 1)), o.nativeHandler = e, o.fakeName = t, o.capture = n, i[a] = o
                                    }
                            n && 0 !== o.length || (delete i[a], _s(e, o.fakeName || a, o.nativeHandler, o.capture))
                        }
                } else fe(i, ((t, n) => { _s(e, t.fakeName || n, t.nativeHandler, t.capture) })), i = {};
                for (a in i)
                    if (we(i, a)) return this;
                delete this.events[l];
                try { delete e[this.expando] } catch (t) { e[this.expando] = null }
            }
            return this
        }
        fire(e, t, n) { return this.dispatch(e, t, n) }
        dispatch(e, t, n) {
            let o;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            const r = Es({ type: t, target: e }, n);
            do { o = e[this.expando], o && this.executeHandlers(r, o), e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow } while (e && !r.isPropagationStopped());
            return this
        }
        clean(e) {
            let t, n;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            if (e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)
                for (this.unbind(e), n = e.getElementsByTagName("*"), t = n.length; t--;)(e = n[t])[this.expando] && this.unbind(e);
            return this
        }
        destroy() { this.events = {} }
        cancel(e) { return e && (e.preventDefault(), e.stopImmediatePropagation()), !1 }
        executeHandlers(e, t) {
            const n = this.events[t],
                o = n && n[e.type];
            if (o)
                for (let t = 0, n = o.length; t < n; t++) { const n = o[t]; if (n && !1 === n.func.call(n.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return }
        }
    }
    Rs.Event = new Rs;
    const As = Bt.each,
        Os = Bt.grep,
        Ts = "data-mce-style",
        Bs = (e, t, n) => { y(n) || "" === n ? Yt(e, t) : $t(e, t, n) },
        Ds = (e, t) => {
            const n = Wt(t, "style"),
                o = e.serialize(e.parse(n), Mt(t));
            Bs(t, Ts, o)
        },
        Ls = (e, t) => {
            let n, o, r = 0;
            if (e)
                for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) o = e.nodeType, (!t || 3 !== o || o !== n && e.nodeValue.length) && (r++, n = o);
            return r
        },
        Ps = Bt.makeMap("fill-opacity font-weight line-height opacity orphans widows z-index zoom", " "),
        Ms = e => e.replace(/[A-Z]/g, (e => "-" + e.toLowerCase())),
        Is = (e, t = {}) => {
            const n = {},
                o = window,
                r = {};
            let s = 0;
            const a = Yo.forElement(mn(e), { contentCssCors: t.contentCssCors, referrerPolicy: t.referrerPolicy }),
                i = [],
                l = t.schema ? t.schema : vs({}),
                d = ys({ url_converter: t.url_converter, url_converter_scope: t.url_converter_scope }, t.schema),
                c = t.ownEvents ? new Rs : Rs.Event,
                u = l.getBlockElements(),
                g = t => t && e && m(t) ? e.getElementById(t) : t,
                h = e => { const t = g(e); return C(t) ? mn(t) : null },
                b = (e, t, n) => {
                    let o;
                    const r = h(e);
                    if (C(r) && Ut(r)) {
                        const e = J[t];
                        o = e && e.get ? e.get(r.dom, t) : Wt(r, t)
                    }
                    return C(o) ? o : null != n ? n : ""
                },
                v = e => { const t = g(e); return y(t) ? [] : t.attributes },
                k = (e, n, o) => {
                    L(e, (e => {
                        if (yo(e)) {
                            const r = mn(e);
                            "" === o && (o = null);
                            const s = Wt(r, n),
                                a = J[n];
                            a && a.set ? a.set(r.dom, o, n) : Bs(r, n, o), s !== o && t.onSetAttrib && t.onSetAttrib({ attrElm: r, attrName: n, attrValue: o })
                        }
                    }))
                },
                _ = () => t.root_element || e.body,
                E = (t, n) => ((e, t, n) => {
                    let o = 0,
                        r = 0;
                    const s = e.ownerDocument;
                    if (n = n || e, t) {
                        if (n === e && t.getBoundingClientRect && "static" === $n(mn(e), "position")) { const n = t.getBoundingClientRect(); return o = n.left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft, r = n.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop, { x: o, y: r } }
                        let a = t;
                        for (; a && a !== n && a.nodeType && !jo(a, n);) {
                            const e = a;
                            o += e.offsetLeft || 0, r += e.offsetTop || 0, a = e.offsetParent
                        }
                        for (a = t.parentNode; a && a !== n && a.nodeType && !jo(a, n);) o -= a.scrollLeft || 0, r -= a.scrollTop || 0, a = a.parentNode;
                        r += (e => Uo.isFirefox() && "table" === Mt(e) ? zo(Nn(e)).filter((e => "caption" === Mt(e))).bind((e => zo(En(e)).map((t => {
                            const n = t.dom.offsetTop,
                                o = e.dom.offsetTop,
                                r = e.dom.offsetHeight;
                            return n <= o ? -r : 0
                        })))).getOr(0) : 0)(mn(t))
                    }
                    return { x: o, y: r }
                })(e.body, g(t), n),
                R = (e, n, o) => {
                    const r = (e, t) => m(e) ? e : w(e) ? we(Ps, t) ? e + "" : e + "px" : ge(e, r),
                        s = (e, t, n) => {
                            const o = Ms(t);
                            y(n) || "" === n ? Gn(e, o) : Vn(e, o, r(n, o))
                        };
                    L(e, (e => {
                        const r = mn(e);
                        m(n) ? s(r, n, o) : fe(n, ((e, t) => { s(r, t, e) })), t.update_styles && Ds(d, r)
                    }))
                },
                A = (e, t, n) => { const o = g(e); if (!y(o) && yo(o)) return n ? $n(mn(o), Ms(t)) : ("float" === (t = t.replace(/-(\D)/g, ((e, t) => t.toUpperCase()))) && (t = "cssFloat"), o.style ? o.style[t] : void 0) },
                O = e => { let t, n; const o = g(e); return t = A(o, "width"), n = A(o, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), { w: parseInt(t, 10) || o.offsetWidth || o.clientWidth, h: parseInt(n, 10) || o.offsetHeight || o.clientHeight } },
                T = (e, t) => { if (!e) return !1; const n = p(e) ? e : [e]; return V(n, (e => pn(mn(e), t))) },
                B = (e, t, n, o) => {
                    const r = [];
                    let s, a = g(e);
                    for (o = void 0 === o, n = n || ("BODY" !== _().nodeName ? _().parentNode : null), m(t) && (s = t, t = "*" === t ? yo : e => T(e, s)); a && !(a === n || y(a.nodeType) || To(a) || Bo(a));) {
                        if (!t || t(a)) {
                            if (!o) return [a];
                            r.push(a)
                        }
                        a = a.parentNode
                    }
                    return o ? r : null
                },
                D = (e, t, n) => {
                    let o = t;
                    if (e)
                        for (m(t) && (o = e => T(e, t)), e = e[n]; e; e = e[n])
                            if (x(o) && o(e)) return e;
                    return null
                },
                L = function(e, t, n) {
                    const o = null != n ? n : this,
                        r = m(e) ? g(e) : e;
                    if (!r) return !1;
                    if (p(r) && (r.length || 0 === r.length)) { const e = []; return As(r, ((n, r) => { n && e.push(t.call(o, m(n) ? g(n) : n, r)) })), e }
                    return t.call(o, r)
                },
                P = (e, t) => { L(e, (e => { fe(t, ((t, n) => { k(e, n, t) })) })) },
                M = (e, t) => {
                    L(e, (e => {
                        const n = mn(e);
                        ro(n, t)
                    }))
                },
                I = (t, n, o, r, s) => L(t, (t => { const a = m(n) ? e.createElement(n) : n; return C(o) && P(a, o), r && (!m(r) && r.nodeType ? a.appendChild(r) : m(r) && M(a, r)), s ? a : t.appendChild(a) })),
                F = (t, n, o) => I(e.createElement(t), t, n, o, !0),
                U = ls.encodeAllRaw,
                z = (e, t) => L(e, (e => { const n = mn(e); return t && $(Nn(n), (e => { zt(e) && 0 === e.dom.length ? to(e) : Yn(n, e) })), to(n), n.dom })),
                H = (e, t, n) => {
                    L(e, (e => {
                        if (yo(e)) {
                            const o = mn(e),
                                r = t.split(" ");
                            $(r, (e => {
                                C(n) ? (n ? nn : rn)(o, e) : ((e, t) => {
                                    const n = Jt(e) ? e.dom.classList.toggle(t) : ((e, t) => j(Zt(e), t) ? tn(e, t) : en(e, t))(e, t);
                                    on(e)
                                })(o, e)
                            }))
                        }
                    }))
                },
                q = (e, t, n) => L(t, (t => (p(t) && (e = e.cloneNode(!0)), n && As(Os(t.childNodes), (t => { e.appendChild(t) })), t.parentNode.replaceChild(e, t)))),
                W = e => { if (yo(e)) { const t = "a" === e.nodeName.toLowerCase() && !b(e, "href") && b(e, "id"); if (b(e, "name") || b(e, "data-mce-bookmark") || t) return !0 } return !1 },
                K = () => e.createRange(),
                G = (n, r, s, a) => { if (p(n)) { let e = n.length; const t = []; for (; e--;) t[e] = G(n[e], r, s, a); return t } return !t.collect || n !== e && n !== o || i.push([n, r, s, a]), c.bind(n, r, s, a || Q) },
                Y = (t, n, r) => {
                    if (p(t)) { let e = t.length; const o = []; for (; e--;) o[e] = Y(t[e], n, r); return o }
                    if (i.length > 0 && (t === e || t === o)) {
                        let e = i.length;
                        for (; e--;) {
                            const o = i[e];
                            t !== o[0] || n && n !== o[1] || r && r !== o[2] || c.unbind(o[0], o[1], o[2])
                        }
                    }
                    return c.unbind(t, n, r)
                },
                X = e => { if (e && yo(e)) { const t = e.getAttribute("data-mce-contenteditable"); return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null } return null },
                Q = {
                    doc: e,
                    settings: t,
                    win: o,
                    files: r,
                    stdMode: !0,
                    boxModel: !0,
                    styleSheetLoader: a,
                    boundEvents: i,
                    styles: d,
                    schema: l,
                    events: c,
                    isBlock: e => m(e) ? we(u, e) : yo(e) && we(u, e.nodeName),
                    root: null,
                    clone: (e, t) => e.cloneNode(t),
                    getRoot: _,
                    getViewPort: e => { const t = ho(e); return { x: t.x, y: t.y, w: t.width, h: t.height } },
                    getRect: e => {
                        const t = g(e),
                            n = E(t),
                            o = O(t);
                        return { x: n.x, y: n.y, w: o.w, h: o.h }
                    },
                    getSize: O,
                    getParent: (e, t, n) => { const o = B(e, t, n, !1); return o && o.length > 0 ? o[0] : null },
                    getParents: B,
                    get: g,
                    getNext: (e, t) => D(e, t, "nextSibling"),
                    getPrev: (e, t) => D(e, t, "previousSibling"),
                    select: (n, o) => { var r, s; const a = null !== (s = null !== (r = g(o)) && void 0 !== r ? r : t.root_element) && void 0 !== s ? s : e; return de(a.querySelectorAll(n)) },
                    is: T,
                    add: I,
                    create: F,
                    createHTML: (e, t, n = "") => { let o, r = ""; for (o in r += "<" + e, t) ke(t, o) && (r += " " + o + '="' + U(t[o]) + '"'); return Ke(n) && we(l.getVoidElements(), e) ? r + " />" : r + ">" + n + "</" + e + ">" },
                    createFragment: t => {
                        let n;
                        const o = e.createElement("div"),
                            r = e.createDocumentFragment();
                        for (r.appendChild(o), t && (o.innerHTML = t); n = o.firstChild;) r.appendChild(n);
                        return r.removeChild(o), r
                    },
                    remove: z,
                    setStyle: R,
                    getStyle: A,
                    setStyles: (e, t) => { R(e, t) },
                    removeAllAttribs: e => L(e, (e => { const t = e.attributes; for (let n = t.length - 1; n >= 0; n--) e.removeAttributeNode(t.item(n)) })),
                    setAttrib: k,
                    setAttribs: P,
                    getAttrib: b,
                    getPos: E,
                    parseStyle: e => d.parse(e),
                    serializeStyle: (e, t) => d.serialize(e, t),
                    addStyle: t => {
                        let o, r;
                        if (Q !== Is.DOM && e === document) {
                            if (n[t]) return;
                            n[t] = !0
                        }
                        r = e.getElementById("mceDefaultStyles"), r || (r = e.createElement("style"), r.id = "mceDefaultStyles", r.type = "text/css", o = e.getElementsByTagName("head")[0], o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r)), r.styleSheet ? r.styleSheet.cssText += t : r.appendChild(e.createTextNode(t))
                    },
                    loadCSS: e => { e || (e = ""), $(e.split(","), (e => { r[e] = !0, a.load(e).catch(S) })) },
                    addClass: (e, t) => { H(e, t, !0) },
                    removeClass: (e, t) => { H(e, t, !1) },
                    hasClass: (e, t) => {
                        const n = h(e),
                            o = t.split(" ");
                        return te(o, (e => sn(n, e)))
                    },
                    toggleClass: H,
                    show: e => { L(e, (e => Gn(mn(e), "display"))) },
                    hide: e => { L(e, (e => Vn(mn(e), "display", "none"))) },
                    isHidden: e => { const t = h(e); return Dt(Wn(t, "display"), "none") },
                    uniqueId: e => (e || "mce_") + s++,
                    setHTML: M,
                    getOuterHTML: e => {
                        const t = h(e);
                        return yo(t.dom) ? t.dom.outerHTML : (e => {
                            const t = cn("div"),
                                n = mn(e.dom.cloneNode(!0));
                            return Jn(t, n), oo(t)
                        })(t)
                    },
                    setOuterHTML: (e, t) => { L(e, (e => { yo(e) && (e.outerHTML = t) })) },
                    decode: ls.decode,
                    encode: U,
                    insertAfter: (e, t) => {
                        const n = g(t);
                        return L(e, (e => {
                            const t = n.parentNode,
                                o = n.nextSibling;
                            return o ? t.insertBefore(e, o) : t.appendChild(e), e
                        }))
                    },
                    replace: q,
                    rename: (e, t) => { let n; return e.nodeName !== t.toUpperCase() && (n = F(t), As(v(e), (t => { k(n, t.nodeName, b(e, t.nodeName)) })), q(n, e, !0)), n || e },
                    findCommonAncestor: (e, t) => {
                        let n, o = e;
                        for (; o;) {
                            for (n = t; n && o !== n;) n = n.parentNode;
                            if (o === n) break;
                            o = o.parentNode
                        }
                        return !o && e.ownerDocument ? e.ownerDocument.documentElement : o
                    },
                    run: L,
                    getAttribs: v,
                    isEmpty: (e, t) => {
                        let n, o, r = 0;
                        if (W(e)) return !1;
                        if (e = e.firstChild) {
                            const s = new Xo(e, e.parentNode),
                                a = l ? l.getWhitespaceElements() : {};
                            t = t || (l ? l.getNonEmptyElements() : null);
                            do {
                                if (n = e.nodeType, yo(e)) { const n = e.getAttribute("data-mce-bogus"); if (n) { e = s.next("all" === n); continue } if (o = e.nodeName.toLowerCase(), t && t[o]) { if ("br" === o) { r++, e = s.next(); continue } return !1 } if (W(e)) return !1 }
                                if (8 === n) return !1;
                                if (3 === n && !Fr(e.nodeValue)) return !1;
                                if (3 === n && e.parentNode && a[e.parentNode.nodeName] && Fr(e.nodeValue)) return !1;
                                e = s.next()
                            } while (e)
                        }
                        return r <= 1
                    },
                    createRng: K,
                    nodeIndex: Ls,
                    split: (e, t, n) => { let o, r, s, a = K(); if (e && t) return a.setStart(e.parentNode, Ls(e)), a.setEnd(t.parentNode, Ls(t)), o = a.extractContents(), a = K(), a.setStart(t.parentNode, Ls(t) + 1), a.setEnd(e.parentNode, Ls(e) + 1), r = a.extractContents(), s = e.parentNode, s.insertBefore(Gr(Q, o), e), n ? s.insertBefore(n, e) : s.insertBefore(t, e), s.insertBefore(Gr(Q, r), e), z(e), n || t },
                    bind: G,
                    unbind: Y,
                    fire: (e, t, n) => c.dispatch(e, t, n),
                    dispatch: (e, t, n) => c.dispatch(e, t, n),
                    getContentEditable: X,
                    getContentEditableParent: e => { const t = _(); let n = null; for (; e && e !== t && (n = X(e), null === n); e = e.parentNode); return n },
                    destroy: () => {
                        if (i.length > 0) {
                            let e = i.length;
                            for (; e--;) {
                                const t = i[e];
                                c.unbind(t[0], t[1], t[2])
                            }
                        }
                        fe(r, ((e, t) => { a.unload(t), delete r[t] }))
                    },
                    isChildOf: (e, t) => e === t || t.contains(e),
                    dumpRng: e => "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
                },
                J = ((e, t, n) => {
                    const o = t.keep_values,
                        r = {
                            set: (e, o, r) => {
                                const s = mn(e);
                                x(t.url_converter) && C(o) && (o = t.url_converter.call(t.url_converter_scope || n(), o, r, e[0])), Bs(s, "data-mce-" + r, o), Bs(s, r, o)
                            },
                            get: (e, t) => { const n = mn(e); return Wt(n, "data-mce-" + t) || Wt(n, t) }
                        },
                        s = {
                            style: {
                                set: (t, n) => {
                                    const r = mn(t);
                                    f(n) ? Hn(r, n) : (o && Bs(r, Ts, n), Yt(r, "style"), m(n) && Hn(r, e.parse(n)))
                                },
                                get: t => {
                                    const n = mn(t),
                                        o = Wt(n, Ts) || Wt(n, "style");
                                    return e.serialize(e.parse(o), Mt(n))
                                }
                            }
                        };
                    return o && (s.href = s.src = r), s
                })(d, t, N(Q));
            return Q
        };
    Is.DOM = Is(document), Is.nodeIndex = Ls;
    const Fs = Is.DOM;
    class Us {
        constructor(e = {}) { this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = !1, this.settings = e }
        _setReferrerPolicy(e) { this.settings.referrerPolicy = e }
        loadScript(e) {
            return new Promise(((t, n) => {
                const o = Fs;
                let r;
                const s = () => { o.remove(a), r && (r.onerror = r.onload = r = null) },
                    a = o.uniqueId();
                r = document.createElement("script"), r.id = a, r.type = "text/javascript", r.src = Bt._addCacheSuffix(e), this.settings.referrerPolicy && o.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy), r.onload = () => { s(), t() }, r.onerror = () => { s(), n("Failed to load script: " + e) }, (document.getElementsByTagName("head")[0] || document.body).appendChild(r)
            }))
        }
        isDone(e) { return 2 === this.states[e] }
        markDone(e) { this.states[e] = 2 }
        add(e) { const t = this; return t.queue.push(e), void 0 === t.states[e] && (t.states[e] = 0), new Promise(((n, o) => { t.scriptLoadedCallbacks[e] || (t.scriptLoadedCallbacks[e] = []), t.scriptLoadedCallbacks[e].push({ resolve: n, reject: o }) })) }
        load(e) { return this.add(e) }
        remove(e) { delete this.states[e], delete this.scriptLoadedCallbacks[e] }
        loadQueue() { const e = this.queue; return this.queue = [], this.loadScripts(e) }
        loadScripts(e) {
            const t = this,
                n = (e, n) => { xe(t.scriptLoadedCallbacks, n).each((t => { $(t, (t => t[e](n))) })), delete t.scriptLoadedCallbacks[n] },
                o = e => { const t = K(e, (e => "rejected" === e.status)); return t.length > 0 ? Promise.reject(ee(t, (({ reason: e }) => p(e) ? e : [e]))) : Promise.resolve() },
                r = e => Promise.allSettled(H(e, (e => 2 === t.states[e] ? (n("resolve", e), Promise.resolve()) : 3 === t.states[e] ? (n("reject", e), Promise.reject(e)) : (t.states[e] = 1, t.loadScript(e).then((() => { t.states[e] = 2, n("resolve", e); const s = t.queue; if (s.length > 0) return t.queue = [], r(s).then(o) }), (() => (t.states[e] = 3, n("reject", e), Promise.reject(e)))))))),
                s = e => (t.loading = !0, r(e).then((e => { t.loading = !1; const n = t.queueLoadedCallbacks.shift(); return M.from(n).each(D), o(e) }))),
                a = Se(e);
            return t.loading ? new Promise(((e, n) => { t.queueLoadedCallbacks.push((() => s(a).then(e, n))) })) : s(a)
        }
    }
    Us.ScriptLoader = new Us;
    const zs = e => { let t = e; return { get: () => t, set: e => { t = e } } },
        js = {},
        Vs = zs("en"),
        Hs = () => xe(js, Vs.get()),
        $s = {
            getData: () => ge(js, (e => ({...e }))),
            setCode: e => { e && Vs.set(e) },
            getCode: () => Vs.get(),
            add: (e, t) => {
                let n = js[e];
                n || (js[e] = n = {}), fe(t, ((e, t) => { n[t.toLowerCase()] = e }))
            },
            translate: e => {
                const t = Hs().getOr({}),
                    n = e => x(e) ? Object.prototype.toString.call(e) : o(e) ? "" : "" + e,
                    o = e => "" === e || null == e,
                    r = e => { const o = n(e); return xe(t, o.toLowerCase()).map(n).getOr(o) },
                    s = e => e.replace(/{context:\w+}$/, "");
                if (o(e)) return "";
                if (f(a = e) && we(a, "raw")) return n(e.raw);
                var a;
                if ((e => p(e) && e.length > 1)(e)) { const t = e.slice(1); return s(r(e[0]).replace(/\{([0-9]+)\}/g, ((e, o) => we(t, o) ? n(t[o]) : e))) }
                return s(r(e))
            },
            isRtl: () => Hs().bind((e => xe(e, "_dir"))).exists((e => "rtl" === e)),
            hasCode: e => we(js, e)
        },
        qs = () => {
            const e = [],
                t = {},
                n = {},
                o = [],
                r = (e, t) => {
                    const n = K(o, (n => n.name === e && n.state === t));
                    $(n, (e => e.resolve()))
                },
                s = e => we(t, e),
                a = (e, n) => { const o = $s.getCode();!o || n && -1 === ("," + (n || "") + ",").indexOf("," + o + ",") || Us.ScriptLoader.add(t[e] + "/langs/" + o + ".js") },
                i = (e, t = "added") => "added" === t && (e => we(n, e))(e) || "loaded" === t && s(e) ? Promise.resolve() : new Promise((n => { o.push({ name: e, state: t, resolve: n }) }));
            return {
                items: e,
                urls: t,
                lookup: n,
                get: e => { if (n[e]) return n[e].instance },
                requireLangPack: (e, t) => {!1 !== qs.languageLoad && (s(e) ? a(e, t) : i(e, "loaded").then((() => a(e, t)))) },
                add: (t, o) => (e.push(o), n[t] = { instance: o }, r(t, "added"), o),
                remove: e => { delete t[e], delete n[e] },
                createUrl: (e, t) => m(t) ? m(e) ? { prefix: "", resource: t, suffix: "" } : { prefix: e.prefix, resource: t, suffix: e.suffix } : t,
                load: (e, o) => {
                    if (t[e]) return Promise.resolve();
                    let s = m(o) ? o : o.prefix + o.resource + o.suffix;
                    0 !== s.indexOf("/") && -1 === s.indexOf("://") && (s = qs.baseURL + "/" + s), t[e] = s.substring(0, s.lastIndexOf("/"));
                    const a = () => (r(e, "loaded"), Promise.resolve());
                    return n[e] ? a() : Us.ScriptLoader.add(s).then(a)
                },
                waitFor: i
            }
        };
    qs.languageLoad = !0, qs.baseURL = "", qs.PluginManager = qs(), qs.ThemeManager = qs(), qs.ModelManager = qs();
    const Ws = () => {
            const e = (e => {
                const t = zs(M.none()),
                    n = () => t.get().each(e);
                return { clear: () => { n(), t.set(M.none()) }, isSet: () => t.get().isSome(), get: () => t.get(), set: e => { n(), t.set(M.some(e)) } }
            })(S);
            return {...e, on: t => e.get().each(t) }
        },
        Ks = (e, t) => { let n = null; return { cancel: () => { h(n) || (clearTimeout(n), n = null) }, throttle: (...o) => { h(n) && (n = setTimeout((() => { n = null, e.apply(null, o) }), t)) } } },
        Gs = (e, t) => { let n = null; const o = () => { h(n) || (clearTimeout(n), n = null) }; return { cancel: o, throttle: (...r) => { o(), n = setTimeout((() => { n = null, e.apply(null, r) }), t) } } },
        Ys = (e, t) => { let n = []; return $(Nn(e), (e => { t(e) && (n = n.concat([e])), n = n.concat(Ys(e, t)) })), n },
        Xs = (e, t) => ((e, t) => { const n = void 0 === t ? document : t.dom; return hn(n) ? [] : H(n.querySelectorAll(e), mn) })(t, e),
        Qs = N("mce-annotation"),
        Js = N("data-mce-annotation"),
        Zs = N("data-mce-annotation-uid"),
        ea = N("data-mce-annotation-active"),
        ta = (e, t) => {
            const n = e.selection.getRng(),
                o = mn(n.startContainer),
                r = mn(e.getBody()),
                s = t.fold((() => "." + Qs()), (e => `[${Js()}="${e}"]`)),
                a = Rn(o, n.startOffset).getOr(o),
                i = Ko(a, s, (e => bn(e, r))),
                l = (e, t) => Gt(e, t) ? M.some(Wt(e, t)) : M.none();
            return i.bind((t => l(t, `${Zs()}`).bind((n => l(t, `${Js()}`).map((t => { const o = na(e, n); return { uid: n, name: t, elements: o } }))))))
        },
        na = (e, t) => { const n = mn(e.getBody()); return Xs(n, `[${Zs()}="${t}"]`) },
        oa = (e, t) => {
            const n = mn(e.getBody()),
                o = Xs(n, `[${Js()}="${t}"]`),
                r = {};
            return $(o, (e => {
                const t = Wt(e, Zs()),
                    n = xe(r, t).getOr([]);
                r[t] = n.concat([e])
            })), r
        };
    let ra = 0;
    const sa = e => {
            const t = (new Date).getTime(),
                n = Math.floor(1e9 * Math.random());
            return ra++, e + "_" + n + ra + String(t)
        },
        aa = (e, t) => mn(e.dom.cloneNode(t)),
        ia = e => aa(e, !1),
        la = e => aa(e, !0),
        da = (e, t, n = L) => {
            const o = new Xo(e, t),
                r = e => {
                    let t;
                    do { t = o[e]() } while (t && !No(t) && !n(t));
                    return M.from(t).filter(No)
                };
            return { current: () => M.from(o.current()).filter(No), next: () => r("next"), prev: () => r("prev"), prev2: () => r("prev2") }
        },
        ca = (e, t) => {
            const n = t || (t => e.isBlock(t) || Do(t) || Mo(t)),
                o = (e, t, n, r) => { if (No(e)) { const n = r(e, t, e.data); if (-1 !== n) return M.some({ container: e, offset: n }) } return n().bind((e => o(e.container, e.offset, n, r))) };
            return { backwards: (e, t, r, s) => { const a = da(e, s, n); return o(e, t, (() => a.prev().map((e => ({ container: e, offset: e.length })))), r).getOrNull() }, forwards: (e, t, r, s) => { const a = da(e, s, n); return o(e, t, (() => a.next().map((e => ({ container: e, offset: 0 })))), r).getOrNull() } }
        },
        ua = Math.round,
        ma = e => e ? { left: ua(e.left), top: ua(e.top), bottom: ua(e.bottom), right: ua(e.right), width: ua(e.width), height: ua(e.height) } : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 },
        fa = (e, t) => (e = ma(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e),
        ga = (e, t, n) => e >= 0 && e <= Math.min(t.height, n.height) / 2,
        pa = (e, t) => { const n = Math.min(t.height / 2, e.height / 2); return e.bottom - n < t.top || !(e.top > t.bottom) && ga(t.top - e.bottom, e, t) },
        ha = (e, t) => e.top > t.bottom || !(e.bottom < t.top) && ga(t.bottom - e.top, e, t),
        ba = (e, t, n) => {
            const o = Math.max(Math.min(t, e.left + e.width), e.left),
                r = Math.max(Math.min(n, e.top + e.height), e.top);
            return Math.sqrt((t - o) * (t - o) + (n - r) * (n - r))
        },
        va = e => {
            const t = e.startContainer,
                n = e.startOffset;
            return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
        },
        ya = (e, t) => {
            if (yo(e) && e.hasChildNodes()) {
                const n = e.childNodes,
                    o = ((e, t, n) => Math.min(Math.max(e, 0), n))(t, 0, n.length - 1);
                return n[o]
            }
            return e
        },
        Ca = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        xa = e => "string" == typeof e && e.charCodeAt(0) >= 768 && Ca.test(e),
        wa = yo,
        ka = Lr,
        Sa = xo("display", "block table"),
        _a = xo("float", "left right"),
        Ea = ((...e) => t => {
            for (let n = 0; n < e.length; n++)
                if (!e[n](t)) return !1;
            return !0
        })(wa, ka, T(_a)),
        Na = T(xo("white-space", "pre pre-line pre-wrap")),
        Ra = No,
        Aa = Do,
        Oa = Is.nodeIndex,
        Ta = (e, t) => t < 0 && yo(e) && e.hasChildNodes() ? void 0 : ya(e, t),
        Ba = e => "createRange" in e ? e.createRange() : Is.DOM.createRng(),
        Da = e => e && /[\r\n\t ]/.test(e),
        La = e => !!e.setStart && !!e.setEnd,
        Pa = e => {
            const t = e.startContainer,
                n = e.startOffset;
            if (Da(e.toString()) && Na(t.parentNode) && No(t)) { const e = t.data; if (Da(e[n - 1]) || Da(e[n + 1])) return !0 }
            return !1
        },
        Ma = e => 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom,
        Ia = e => {
            let t;
            const n = e.getClientRects();
            return t = n.length > 0 ? ma(n[0]) : ma(e.getBoundingClientRect()), !La(e) && Aa(e) && Ma(t) ? (e => {
                const t = e.ownerDocument,
                    n = Ba(t),
                    o = t.createTextNode(dr),
                    r = e.parentNode;
                r.insertBefore(o, e), n.setStart(o, 0), n.setEnd(o, 1);
                const s = ma(n.getBoundingClientRect());
                return r.removeChild(o), s
            })(e) : Ma(t) && La(e) ? (e => {
                const t = e.startContainer,
                    n = e.endContainer,
                    o = e.startOffset,
                    r = e.endOffset;
                if (t === n && No(n) && 0 === o && 1 === r) { const t = e.cloneRange(); return t.setEndAfter(n), Ia(t) }
                return null
            })(e) : t
        },
        Fa = (e, t) => { const n = fa(e, t); return n.width = 1, n.right = n.left + 1, n },
        Ua = (e, t, n) => {
            const o = () => (n || (n = (e => {
                const t = [],
                    n = e => {
                        var n, o;
                        0 !== e.height && (t.length > 0 && (n = e, o = t[t.length - 1], n.left === o.left && n.top === o.top && n.bottom === o.bottom && n.right === o.right) || t.push(e))
                    },
                    o = (e, o) => {
                        const r = Ba(e.ownerDocument);
                        if (o < e.data.length) { if (xa(e.data[o])) return t; if (xa(e.data[o - 1]) && (r.setStart(e, o), r.setEnd(e, o + 1), !Pa(r))) return n(Fa(Ia(r), !1)), t }
                        o > 0 && (r.setStart(e, o - 1), r.setEnd(e, o), Pa(r) || n(Fa(Ia(r), !1))), o < e.data.length && (r.setStart(e, o), r.setEnd(e, o + 1), Pa(r) || n(Fa(Ia(r), !0)))
                    },
                    r = e.container(),
                    s = e.offset();
                if (Ra(r)) return o(r, s), t;
                if (wa(r))
                    if (e.isAtEnd()) {
                        const e = Ta(r, s);
                        Ra(e) && o(e, e.data.length), Ea(e) && !Aa(e) && n(Fa(Ia(e), !1))
                    } else {
                        const a = Ta(r, s);
                        if (Ra(a) && o(a, 0), Ea(a) && e.isAtEnd()) return n(Fa(Ia(a), !1)), t;
                        const i = Ta(e.container(), e.offset() - 1);
                        Ea(i) && !Aa(i) && (Sa(i) || Sa(a) || !Ea(a)) && n(Fa(Ia(i), !1)), Ea(a) && n(Fa(Ia(a), !0))
                    }
                return t
            })(Ua(e, t))), n);
            return { container: N(e), offset: N(t), toRange: () => { const n = Ba(e.ownerDocument); return n.setStart(e, t), n.setEnd(e, t), n }, getClientRects: o, isVisible: () => o().length > 0, isAtStart: () => (Ra(e), 0 === t), isAtEnd: () => Ra(e) ? t >= e.data.length : t >= e.childNodes.length, isEqual: n => n && e === n.container() && t === n.offset(), getNode: n => Ta(e, n ? t - 1 : t) }
        };
    Ua.fromRangeStart = e => Ua(e.startContainer, e.startOffset), Ua.fromRangeEnd = e => Ua(e.endContainer, e.endOffset), Ua.after = e => Ua(e.parentNode, Oa(e) + 1), Ua.before = e => Ua(e.parentNode, Oa(e)), Ua.isAbove = (e, t) => Lt(ie(t.getClientRects()), le(e.getClientRects()), pa).getOr(!1), Ua.isBelow = (e, t) => Lt(le(t.getClientRects()), ie(e.getClientRects()), ha).getOr(!1), Ua.isAtStart = e => !!e && e.isAtStart(), Ua.isAtEnd = e => !!e && e.isAtEnd(), Ua.isTextPosition = e => !!e && No(e.container()), Ua.isElementPosition = e => !1 === Ua.isTextPosition(e);
    const za = (e, t) => { No(t) && 0 === t.data.length && e.remove(t) },
        ja = (e, t, n) => {
            Bo(n) ? ((e, t, n) => {
                const o = M.from(n.firstChild),
                    r = M.from(n.lastChild);
                t.insertNode(n), o.each((t => za(e, t.previousSibling))), r.each((t => za(e, t.nextSibling)))
            })(e, t, n) : ((e, t, n) => { t.insertNode(n), za(e, n.previousSibling), za(e, n.nextSibling) })(e, t, n)
        },
        Va = No,
        Ha = ko,
        $a = Is.nodeIndex,
        qa = e => { const t = e.parentNode; return Ha(t) ? qa(t) : t },
        Wa = e => e ? Oe(e.childNodes, ((e, t) => (Ha(t) && "BR" !== t.nodeName ? e = e.concat(Wa(t)) : e.push(t), e)), []) : [],
        Ka = e => t => e === t,
        Ga = e => {
            let t;
            return t = Va(e) ? "text()" : e.nodeName.toLowerCase(), t + "[" + (e => {
                let t, n;
                t = Wa(qa(e)), n = Te(t, Ka(e), e), t = t.slice(0, n + 1);
                const o = Oe(t, ((e, n, o) => (Va(n) && Va(t[o - 1]) && e++, e)), 0);
                return t = Re(t, Co([e.nodeName])), n = Te(t, Ka(e), e), n - o
            })(e) + "]"
        },
        Ya = (e, t) => {
            let n, o, r, s, a, i = [];
            return n = t.container(), o = t.offset(), Va(n) ? r = ((e, t) => {
                for (;
                    (e = e.previousSibling) && Va(e);) t += e.data.length;
                return t
            })(n, o) : (s = n.childNodes, o >= s.length ? (r = "after", o = s.length - 1) : r = "before", n = s[o]), i.push(Ga(n)), a = ((e, t, n) => { const o = []; for (t = t.parentNode; t !== e; t = t.parentNode) o.push(t); return o })(e, n), a = Re(a, T(ko)), i = i.concat(Ne(a, (e => Ga(e)))), i.reverse().join("/") + "," + r
        },
        Xa = (e, t) => {
            let n;
            if (!t) return null;
            const o = t.split(","),
                r = o[0].split("/");
            n = o.length > 1 ? o[1] : "before";
            const s = Oe(r, ((e, t) => { const n = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t); return n ? ("text()" === n[1] && (n[1] = "#text"), ((e, t, n) => { let o = Wa(e); return o = Re(o, ((e, t) => !Va(e) || !Va(o[t - 1]))), o = Re(o, Co([t])), o[n] })(e, n[1], parseInt(n[2], 10))) : null }), e);
            return s ? Va(s) ? ((e, t) => {
                let n, o = e,
                    r = 0;
                for (; Va(o);) {
                    if (n = o.data.length, t >= r && t <= r + n) { e = o, t -= r; break }
                    if (!Va(o.nextSibling)) { e = o, t = n; break }
                    r += n, o = o.nextSibling
                }
                return Va(e) && t > e.data.length && (t = e.data.length), Ua(e, t)
            })(s, parseInt(n, 10)) : (n = "after" === n ? $a(s) + 1 : $a(s), Ua(s.parentNode, n)) : null
        },
        Qa = Mo,
        Ja = (e, t, n, o, r) => {
            let s = o[r ? "startContainer" : "endContainer"],
                a = o[r ? "startOffset" : "endOffset"];
            const i = [];
            let l, d = 0;
            const c = e.getRoot();
            for (No(s) ? i.push(n ? ((e, t, n) => { let o, r; for (r = e(t.data.slice(0, n)).length, o = t.previousSibling; o && No(o); o = o.previousSibling) r += e(o.data).length; return r })(t, s, a) : a) : (l = s.childNodes, a >= l.length && l.length && (d = 1, a = Math.max(0, l.length - 1)), i.push(e.nodeIndex(l[a], n) + d)); s && s !== c; s = s.parentNode) i.push(e.nodeIndex(s, n));
            return i
        },
        Za = (e, t, n) => { let o = 0; return Bt.each(e.select(t), (e => { if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void o++ })), o },
        ei = (e, t) => {
            let n, o, r;
            const s = t ? "start" : "end";
            n = e[s + "Container"], o = e[s + "Offset"], yo(n) && "TR" === n.nodeName && (r = n.childNodes, n = r[Math.min(t ? o : o - 1, r.length - 1)], n && (o = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, o)))
        },
        ti = e => (ei(e, !0), ei(e, !1), e),
        ni = (e, t) => { let n; if (yo(e) && (e = ya(e, t), Qa(e))) return e; if (vr(e)) { if (No(e) && hr(e) && (e = e.parentNode), n = e.previousSibling, Qa(n)) return n; if (n = e.nextSibling, Qa(n)) return n } },
        oi = (e, t, n) => {
            const o = n.getNode();
            let r = o ? o.nodeName : null;
            const s = n.getRng();
            if (Qa(o) || "IMG" === r) return { name: r, index: Za(n.dom, r, o) };
            const a = (e => ni(e.startContainer, e.startOffset) || ni(e.endContainer, e.endOffset))(s);
            return a ? (r = a.tagName, { name: r, index: Za(n.dom, r, a) }) : ((e, t, n, o) => {
                const r = t.dom,
                    s = {};
                return s.start = Ja(r, e, n, o, !0), t.isCollapsed() || (s.end = Ja(r, e, n, o, !1)), _r(o) && (s.isFakeCaret = !0), s
            })(e, n, t, s)
        },
        ri = (e, t, n) => { const o = { "data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px" }; return n ? e.create("span", o, "&#xFEFF;") : e.create("span", o) },
        si = (e, t) => {
            const n = e.dom;
            let o = e.getRng();
            const r = n.uniqueId(),
                s = e.isCollapsed(),
                a = e.getNode(),
                i = a.nodeName;
            if ("IMG" === i) return { name: i, index: Za(n, i, a) };
            const l = ti(o.cloneRange());
            if (!s) {
                l.collapse(!1);
                const e = ri(n, r + "_end", t);
                ja(n, l, e)
            }
            o = ti(o), o.collapse(!0);
            const d = ri(n, r + "_start", t);
            return ja(n, o, d), e.moveToBookmark({ id: r, keep: !0 }), { id: r }
        },
        ai = O(oi, R, !0),
        ii = e => {
            const t = t => t(e),
                n = N(e),
                o = () => r,
                r = { tag: !0, inner: e, fold: (t, n) => n(e), isValue: P, isError: L, map: t => di.value(t(e)), mapError: o, bind: t, exists: t, forall: t, getOr: n, or: o, getOrThunk: n, orThunk: o, getOrDie: n, each: t => { t(e) }, toOptional: () => M.some(e) };
            return r
        },
        li = e => {
            const t = () => n,
                n = { tag: !1, inner: e, fold: (t, n) => t(e), isValue: L, isError: P, map: t, mapError: t => di.error(t(e)), bind: t, exists: L, forall: P, getOr: R, or: R, getOrThunk: B, orThunk: B, getOrDie: (o = String(e), () => { throw new Error(o) }), each: S, toOptional: M.none };
            var o;
            return n
        },
        di = { value: ii, error: li, fromOption: (e, t) => e.fold((() => li(t)), ii) },
        ci = e => {
            if (!p(e)) throw new Error("cases must be an array");
            if (0 === e.length) throw new Error("there must be at least one case");
            const t = [],
                n = {};
            return $(e, ((o, r) => {
                const s = ue(o);
                if (1 !== s.length) throw new Error("one and only one name per case");
                const a = s[0],
                    i = o[a];
                if (void 0 !== n[a]) throw new Error("duplicate key detected:" + a);
                if ("cata" === a) throw new Error("cannot have a case named cata (sorry)");
                if (!p(i)) throw new Error("case arguments must be an array");
                t.push(a), n[a] = (...n) => { const o = n.length; if (o !== i.length) throw new Error("Wrong number of arguments to case " + a + ". Expected " + i.length + " (" + i + "), got " + o); return { fold: (...t) => { if (t.length !== e.length) throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length); return t[r].apply(null, n) }, match: e => { const o = ue(e); if (t.length !== o.length) throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + o.join(",")); if (!te(t, (e => j(o, e)))) throw new Error("Not all branches were specified when using match. Specified: " + o.join(", ") + "\nRequired: " + t.join(", ")); return e[a].apply(null, n) }, log: e => { console.log(e, { constructors: t, constructor: a, params: n }) } } }
            })), n
        };
    ci([{ bothErrors: ["error1", "error2"] }, { firstError: ["error1", "value2"] }, { secondError: ["value1", "error2"] }, { bothValues: ["value1", "value2"] }]);
    const ui = e => "inline-command" === e.type || "inline-format" === e.type,
        mi = e => "block-command" === e.type || "block-format" === e.type,
        fi = e => {
            const t = t => di.error({ message: t, pattern: e }),
                n = (n, o, r) => {
                    if (void 0 !== e.format) {
                        let r;
                        if (p(e.format)) {
                            if (!te(e.format, m)) return t(n + " pattern has non-string items in the `format` array");
                            r = e.format
                        } else {
                            if (!m(e.format)) return t(n + " pattern has non-string `format` parameter");
                            r = [e.format]
                        }
                        return di.value(o(r))
                    }
                    return void 0 !== e.cmd ? m(e.cmd) ? di.value(r(e.cmd, e.value)) : t(n + " pattern has non-string `cmd` parameter") : t(n + " pattern is missing both `format` and `cmd` parameters")
                };
            if (!f(e)) return t("Raw pattern is not an object");
            if (!m(e.start)) return t("Raw pattern is missing `start` parameter");
            if (void 0 !== e.end) {
                if (!m(e.end)) return t("Inline pattern has non-string `end` parameter");
                if (0 === e.start.length && 0 === e.end.length) return t("Inline pattern has empty `start` and `end` parameters");
                let o = e.start,
                    r = e.end;
                return 0 === r.length && (r = o, o = ""), n("Inline", (e => ({ type: "inline-format", start: o, end: r, format: e })), ((e, t) => ({ type: "inline-command", start: o, end: r, cmd: e, value: t })))
            }
            return void 0 !== e.replacement ? m(e.replacement) ? 0 === e.start.length ? t("Replacement pattern has empty `start` parameter") : di.value({ type: "inline-command", start: "", end: e.start, cmd: "mceInsertContent", value: e.replacement }) : t("Replacement pattern has non-string `replacement` parameter") : 0 === e.start.length ? t("Block pattern has empty `start` parameter") : n("Block", (t => ({ type: "block-format", start: e.start, format: t[0] })), ((t, n) => ({ type: "block-command", start: e.start, cmd: t, value: n })))
        },
        gi = e => (e => se(e, ((e, t) => e.start.length === t.start.length ? 0 : e.start.length > t.start.length ? -1 : 1)))(K(e, mi)),
        pi = e => K(e, ui),
        hi = e => {
            const t = (e => {
                const t = [],
                    n = [];
                return $(e, (e => { e.fold((e => { t.push(e) }), (e => { n.push(e) })) })), { errors: t, values: n }
            })(H(e, fi));
            return $(t.errors, (e => console.error(e.message, e.pattern))), t.values
        },
        bi = Ct().deviceType,
        vi = bi.isTouch(),
        yi = Is.DOM,
        Ci = e => u(e, RegExp),
        xi = e => t => t.options.get(e),
        wi = e => m(e) || f(e),
        ki = (e, t = "") => n => {
            const o = m(n);
            if (o) {
                if (-1 !== n.indexOf("=")) {
                    const r = (e => {
                        const t = e.indexOf("=") > 0 ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/) : e.split(",");
                        return Y(t, ((e, t) => {
                            const n = t.split("="),
                                o = n[0],
                                r = n.length > 1 ? n[1] : o;
                            return e[He(o)] = He(r), e
                        }), {})
                    })(n);
                    return { value: xe(r, e.id).getOr(t), valid: o }
                }
                return { value: n, valid: o }
            }
            return { valid: !1, message: "Must be a string." }
        },
        Si = xi("iframe_attrs"),
        _i = xi("doctype"),
        Ei = xi("document_base_url"),
        Ni = xi("body_id"),
        Ri = xi("body_class"),
        Ai = xi("content_security_policy"),
        Oi = xi("br_in_pre"),
        Ti = xi("forced_root_block"),
        Bi = xi("forced_root_block_attrs"),
        Di = xi("br_newline_selector"),
        Li = xi("no_newline_selector"),
        Pi = xi("keep_styles"),
        Mi = xi("end_container_on_empty_block"),
        Ii = xi("automatic_uploads"),
        Fi = xi("images_reuse_filename"),
        Ui = xi("images_replace_blob_uris"),
        zi = xi("icons"),
        ji = xi("icons_url"),
        Vi = xi("images_upload_url"),
        Hi = xi("images_upload_base_path"),
        $i = xi("images_upload_credentials"),
        qi = xi("images_upload_handler"),
        Wi = xi("content_css_cors"),
        Ki = xi("referrer_policy"),
        Gi = xi("language"),
        Yi = xi("language_url"),
        Xi = xi("indent_use_margin"),
        Qi = xi("indentation"),
        Ji = xi("content_css"),
        Zi = xi("content_style"),
        el = xi("font_css"),
        tl = xi("directionality"),
        nl = xi("inline_boundaries_selector"),
        ol = xi("object_resizing"),
        rl = xi("resize_img_proportional"),
        sl = xi("placeholder"),
        al = xi("event_root"),
        il = xi("service_message"),
        ll = xi("theme"),
        dl = xi("theme_url"),
        cl = xi("model"),
        ul = xi("model_url"),
        ml = xi("inline_boundaries"),
        fl = xi("formats"),
        gl = xi("preview_styles"),
        pl = xi("format_empty_lines"),
        hl = xi("custom_ui_selector"),
        bl = xi("inline"),
        vl = xi("hidden_input"),
        yl = xi("submit_patch"),
        Cl = xi("add_form_submit_trigger"),
        xl = xi("add_unload_trigger"),
        wl = xi("custom_undo_redo_levels"),
        kl = xi("disable_nodechange"),
        Sl = xi("readonly"),
        _l = xi("content_css_cors"),
        El = xi("plugins"),
        Nl = xi("external_plugins"),
        Rl = xi("block_unsupported_drop"),
        Al = xi("visual"),
        Ol = xi("visual_table_class"),
        Tl = xi("visual_anchor_class"),
        Bl = xi("iframe_aria_text"),
        Dl = xi("setup"),
        Ll = xi("init_instance_callback"),
        Pl = xi("urlconverter_callback"),
        Ml = xi("auto_focus"),
        Il = xi("browser_spellcheck"),
        Fl = xi("protect"),
        Ul = xi("paste_block_drop"),
        zl = xi("paste_data_images"),
        jl = xi("paste_preprocess"),
        Vl = xi("paste_postprocess"),
        Hl = xi("paste_webkit_styles"),
        $l = xi("paste_remove_styles_if_webkit"),
        ql = xi("paste_merge_formats"),
        Wl = xi("smart_paste"),
        Kl = xi("paste_as_text"),
        Gl = xi("paste_tab_spaces"),
        Yl = xi("allow_html_data_urls"),
        Xl = xi("text_patterns"),
        Ql = xi("noneditable_class"),
        Jl = xi("editable_class"),
        Zl = xi("noneditable_regexp"),
        ed = e => Bt.explode(e.options.get("images_file_types")),
        td = xi("table_tab_navigation"),
        nd = yo,
        od = No,
        rd = e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        sd = e => { const t = fr(e); return { count: e.length - t.length, text: t } },
        ad = e => { let t; for (; - 1 !== (t = e.data.lastIndexOf(ur));) e.deleteData(t, 1) },
        id = (e, t) => (dd(e), t),
        ld = (e, t) => Ua.isTextPosition(t) ? ((e, t) => od(e) && t.container() === e ? ((e, t) => {
            const n = sd(e.data.substr(0, t.offset())),
                o = sd(e.data.substr(t.offset()));
            return (n.text + o.text).length > 0 ? (ad(e), Ua(e, t.offset() - n.count)) : t
        })(e, t) : id(e, t))(e, t) : ((e, t) => t.container() === e.parentNode ? ((e, t) => {
            const n = t.container(),
                o = ((e, t) => { const n = z(e, t); return -1 === n ? M.none() : M.some(n) })(de(n.childNodes), e).map((e => e < t.offset() ? Ua(n, t.offset() - 1) : t)).getOr(t);
            return dd(e), o
        })(e, t) : id(e, t))(e, t),
        dd = e => { nd(e) && vr(e) && (yr(e) ? e.removeAttribute("data-mce-caret") : rd(e)), od(e) && (ad(e), 0 === e.data.length && rd(e)) },
        cd = Mo,
        ud = Fo,
        md = Io,
        fd = (e, t, n) => {
            const o = fa(t.getBoundingClientRect(), n);
            let r, s;
            if ("BODY" === e.tagName) {
                const t = e.ownerDocument.documentElement;
                r = e.scrollLeft || t.scrollLeft, s = e.scrollTop || t.scrollTop
            } else {
                const t = e.getBoundingClientRect();
                r = e.scrollLeft - t.left, s = e.scrollTop - t.top
            }
            o.left += r, o.right += r, o.top += s, o.bottom += s, o.width = 1;
            let a = t.offsetWidth - t.clientWidth;
            return a > 0 && (n && (a *= -1), o.left += a, o.right += a), o
        },
        gd = (e, t, n, o) => {
            const r = Ws();
            let s, a;
            const i = Ti(e),
                l = e.dom,
                d = () => {
                    (e => {
                        const t = Xs(mn(e), "*[contentEditable=false],video,audio,embed,object");
                        for (let e = 0; e < t.length; e++) {
                            const n = t[e].dom;
                            let o = n.previousSibling;
                            if (kr(o)) {
                                const e = o.data;
                                1 === e.length ? o.parentNode.removeChild(o) : o.deleteData(e.length - 1, 1)
                            }
                            o = n.nextSibling, wr(o) && (1 === o.data.length ? o.parentNode.removeChild(o) : o.deleteData(0, 1))
                        }
                    })(t), a && (dd(a), a = null), r.on((e => { l.remove(e.caret), r.clear() })), s && (clearInterval(s), s = void 0)
                };
            return {
                show: (e, c) => {
                    let u;
                    if (d(), md(c)) return null;
                    if (!n(c)) return a = ((e, t) => {
                        const n = e.ownerDocument.createTextNode(ur),
                            o = e.parentNode;
                        if (t) {
                            const t = e.previousSibling;
                            if (pr(t)) { if (vr(t)) return t; if (kr(t)) return t.splitText(t.data.length - 1) }
                            o.insertBefore(n, e)
                        } else {
                            const t = e.nextSibling;
                            if (pr(t)) { if (vr(t)) return t; if (wr(t)) return t.splitText(1), t }
                            e.nextSibling ? o.insertBefore(n, e.nextSibling) : o.appendChild(n)
                        }
                        return n
                    })(c, e), u = c.ownerDocument.createRange(), hd(a.nextSibling) ? (u.setStart(a, 0), u.setEnd(a, 0)) : (u.setStart(a, 1), u.setEnd(a, 1)), u; {
                        a = ((e, t, n) => {
                            const o = t.ownerDocument.createElement(e);
                            o.setAttribute("data-mce-caret", n ? "before" : "after"), o.setAttribute("data-mce-bogus", "all"), o.appendChild((() => { const e = document.createElement("br"); return e.setAttribute("data-mce-bogus", "1"), e })());
                            const r = t.parentNode;
                            return n ? r.insertBefore(o, t) : t.nextSibling ? r.insertBefore(o, t.nextSibling) : r.appendChild(o), o
                        })(i, c, e);
                        const n = fd(t, c, e);
                        l.setStyle(a, "top", n.top);
                        const d = l.create("div", { class: "mce-visual-caret", "data-mce-bogus": "all" });
                        l.setStyles(d, {...n }), l.add(t, d), r.set({ caret: d, element: c, before: e }), e && l.addClass(d, "mce-visual-caret-before"), s = setInterval((() => { r.on((e => { o() ? l.toggleClass(e.caret, "mce-visual-caret-hidden") : l.addClass(e.caret, "mce-visual-caret-hidden") })) }), 500), u = c.ownerDocument.createRange(), u.setStart(a, 0), u.setEnd(a, 0)
                    }
                    return u
                },
                hide: d,
                getCss: () => ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}",
                reposition: () => {
                    r.on((e => {
                        const n = fd(t, e.element, e.before);
                        l.setStyles(e.caret, {...n })
                    }))
                },
                destroy: () => clearInterval(s)
            }
        },
        pd = () => Nt.browser.isFirefox(),
        hd = e => cd(e) || ud(e),
        bd = e => hd(e) || So(e) && pd(),
        vd = Po,
        yd = Mo,
        Cd = Fo,
        xd = xo("display", "block table table-cell table-caption list-item"),
        wd = vr,
        kd = hr,
        Sd = yo,
        _d = Lr,
        Ed = e => e > 0,
        Nd = e => e < 0,
        Rd = (e, t) => {
            let n;
            for (; n = e(t);)
                if (!kd(n)) return n;
            return null
        },
        Ad = (e, t, n, o, r) => {
            const s = new Xo(e, o),
                a = yd(e) || kd(e);
            if (Nd(t)) {
                if (a && n(e = Rd(s.prev.bind(s), !0))) return e;
                for (; e = Rd(s.prev.bind(s), r);)
                    if (n(e)) return e
            }
            if (Ed(t)) {
                if (a && n(e = Rd(s.next.bind(s), !0))) return e;
                for (; e = Rd(s.next.bind(s), r);)
                    if (n(e)) return e
            }
            return null
        },
        Od = (e, t) => {
            for (; e && e !== t;) {
                if (xd(e)) return e;
                e = e.parentNode
            }
            return null
        },
        Td = (e, t, n) => Od(e.container(), n) === Od(t.container(), n),
        Bd = (e, t) => {
            if (!t) return null;
            const n = t.container(),
                o = t.offset();
            return Sd(n) ? n.childNodes[o + e] : null
        },
        Dd = (e, t) => { const n = t.ownerDocument.createRange(); return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n },
        Ld = (e, t, n) => Od(t, e) === Od(n, e),
        Pd = (e, t, n) => {
            const o = e ? "previousSibling" : "nextSibling";
            for (; n && n !== t;) {
                let e = n[o];
                if (wd(e) && (e = e[o]), yd(e) || Cd(e)) { if (Ld(t, e, n)) return e; break }
                if (_d(e)) break;
                n = n.parentNode
            }
            return null
        },
        Md = O(Dd, !0),
        Id = O(Dd, !1),
        Fd = (e, t, n) => {
            let o;
            const r = O(Pd, !0, t),
                s = O(Pd, !1, t);
            let a = n.startContainer;
            const i = n.startOffset;
            if (hr(a)) { Sd(a) || (a = a.parentNode); const e = a.getAttribute("data-mce-caret"); if ("before" === e && (o = a.nextSibling, bd(o))) return Md(o); if ("after" === e && (o = a.previousSibling, bd(o))) return Id(o) }
            if (!n.collapsed) return n;
            if (No(a)) { if (wd(a)) { if (1 === e) { if (o = s(a), o) return Md(o); if (o = r(a), o) return Id(o) } if (-1 === e) { if (o = r(a), o) return Id(o); if (o = s(a), o) return Md(o) } return n } if (kr(a) && i >= a.data.length - 1) return 1 === e && (o = s(a), o) ? Md(o) : n; if (wr(a) && i <= 1) return -1 === e && (o = r(a), o) ? Id(o) : n; if (i === a.data.length) return o = s(a), o ? Md(o) : n; if (0 === i) return o = r(a), o ? Id(o) : n }
            return n
        },
        Ud = (e, t) => M.from(Bd(e ? 0 : -1, t)).filter(yd),
        zd = (e, t, n) => { const o = Fd(e, t, n); return -1 === e ? Ua.fromRangeStart(o) : Ua.fromRangeEnd(o) },
        jd = e => M.from(e.getNode()).map(mn),
        Vd = (e, t) => {
            for (; t = e(t);)
                if (t.isVisible()) return t;
            return t
        },
        Hd = (e, t) => { const n = Td(e, t); return !(n || !Do(e.getNode())) || n };
    var $d;
    ! function(e) { e[e.Backwards = -1] = "Backwards", e[e.Forwards = 1] = "Forwards" }($d || ($d = {}));
    const qd = Mo,
        Wd = No,
        Kd = yo,
        Gd = Do,
        Yd = Lr,
        Xd = e => Tr(e) || (e => !!Pr(e) && !0 !== Y(de(e.getElementsByTagName("*")), ((e, t) => e || Er(t)), !1))(e),
        Qd = Mr,
        Jd = (e, t) => e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null,
        Zd = (e, t) => { if (Ed(e)) { if (Yd(t.previousSibling) && !Wd(t.previousSibling)) return Ua.before(t); if (Wd(t)) return Ua(t, 0) } if (Nd(e)) { if (Yd(t.nextSibling) && !Wd(t.nextSibling)) return Ua.after(t); if (Wd(t)) return Ua(t, t.data.length) } return Nd(e) ? Gd(t) ? Ua.before(t) : Ua.after(t) : Ua.before(t) },
        ec = (e, t, n) => {
            let o, r, s, a;
            if (!Kd(n) || !t) return null;
            if (t.isEqual(Ua.after(n)) && n.lastChild) { if (a = Ua.after(n.lastChild), Nd(e) && Yd(n.lastChild) && Kd(n.lastChild)) return Gd(n.lastChild) ? Ua.before(n.lastChild) : a } else a = t;
            const i = a.container();
            let l = a.offset();
            if (Wd(i)) {
                if (Nd(e) && l > 0) return Ua(i, --l);
                if (Ed(e) && l < i.length) return Ua(i, ++l);
                o = i
            } else {
                if (Nd(e) && l > 0 && (r = Jd(i, l - 1), Yd(r))) return !Xd(r) && (s = Ad(r, e, Qd, r), s) ? Wd(s) ? Ua(s, s.data.length) : Ua.after(s) : Wd(r) ? Ua(r, r.data.length) : Ua.before(r);
                if (Ed(e) && l < i.childNodes.length && (r = Jd(i, l), Yd(r))) return Gd(r) ? ((e, t) => { const n = t.nextSibling; return n && Yd(n) ? Wd(n) ? Ua(n, 0) : Ua.before(n) : ec($d.Forwards, Ua.after(t), e) })(n, r) : !Xd(r) && (s = Ad(r, e, Qd, r), s) ? Wd(s) ? Ua(s, 0) : Ua.before(s) : Wd(r) ? Ua(r, 0) : Ua.after(r);
                o = r || a.getNode()
            }
            if ((Ed(e) && a.isAtEnd() || Nd(e) && a.isAtStart()) && (o = Ad(o, e, P, n, !0), Qd(o, n))) return Zd(e, o);
            r = Ad(o, e, Qd, n);
            const d = Be(K(((e, t) => { const n = []; for (; e && e !== t;) n.push(e), e = e.parentNode; return n })(i, n), qd));
            return !d || r && d.contains(r) ? r ? Zd(e, r) : null : (a = Ed(e) ? Ua.after(d) : Ua.before(d), a)
        },
        tc = e => ({ next: t => ec($d.Forwards, t, e), prev: t => ec($d.Backwards, t, e) }),
        nc = e => Ua.isTextPosition(e) ? 0 === e.offset() : Lr(e.getNode()),
        oc = e => { if (Ua.isTextPosition(e)) { const t = e.container(); return e.offset() === t.data.length } return Lr(e.getNode(!0)) },
        rc = (e, t) => !Ua.isTextPosition(e) && !Ua.isTextPosition(t) && e.getNode() === t.getNode(!0),
        sc = (e, t, n) => { const o = tc(t); return M.from(e ? o.next(n) : o.prev(n)) },
        ac = (e, t, n) => sc(e, t, n).bind((o => Td(n, o, t) && ((e, t, n) => { return e ? !rc(t, n) && (o = t, !(!Ua.isTextPosition(o) && Do(o.getNode()))) && oc(t) && nc(n) : !rc(n, t) && nc(t) && oc(n); var o })(e, n, o) ? sc(e, t, o) : M.some(o))),
        ic = (e, t, n, o) => ac(e, t, n).bind((n => o(n) ? ic(e, t, n, o) : M.some(n))),
        lc = (e, t) => { const n = e ? t.firstChild : t.lastChild; return No(n) ? M.some(Ua(n, e ? 0 : n.data.length)) : n ? Lr(n) ? M.some(e ? Ua.before(n) : Do(o = n) ? Ua.before(o) : Ua.after(o)) : ((e, t, n) => { const o = e ? Ua.before(n) : Ua.after(n); return sc(e, t, o) })(e, t, n) : M.none(); var o },
        dc = O(sc, !0),
        cc = O(sc, !1),
        uc = O(lc, !0),
        mc = O(lc, !1),
        fc = "_mce_caret",
        gc = e => yo(e) && e.id === fc,
        pc = (e, t) => {
            for (; t && t !== e;) {
                if (t.id === fc) return t;
                t = t.parentNode
            }
            return null
        },
        hc = e => Bt.isArray(e.start),
        bc = (e, t) => (yo(t) && e.isBlock(t) && !t.innerHTML && (t.innerHTML = '<br data-mce-bogus="1" />'), t),
        vc = (e, t) => mc(e).fold(L, (e => (t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0))),
        yc = (e, t, n) => !(!(e => !1 === e.hasChildNodes())(t) || !pc(e, t) || (((e, t) => {
            const n = e.ownerDocument.createTextNode(ur);
            e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0)
        })(t, n), 0)),
        Cc = (e, t, n, o) => {
            const r = n[t ? "start" : "end"];
            let s, a, i, l;
            const d = e.getRoot();
            if (r) {
                for (i = r[0], a = d, s = r.length - 1; s >= 1; s--) {
                    if (l = a.childNodes, yc(d, a, o)) return !0;
                    if (r[s] > l.length - 1) return !!yc(d, a, o) || vc(a, o);
                    a = l[r[s]]
                }
                3 === a.nodeType && (i = Math.min(r[0], a.nodeValue.length)), 1 === a.nodeType && (i = Math.min(r[0], a.childNodes.length)), t ? o.setStart(a, i) : o.setEnd(a, i)
            }
            return !0
        },
        xc = e => No(e) && e.data.length > 0,
        wc = (e, t, n) => {
            let o, r, s, a, i = e.get(n.id + "_" + t);
            const l = n.keep;
            let d, c;
            if (i) {
                if (o = i.parentNode, "start" === t ? (l ? i.hasChildNodes() ? (o = i.firstChild, r = 1) : xc(i.nextSibling) ? (o = i.nextSibling, r = 0) : xc(i.previousSibling) ? (o = i.previousSibling, r = i.previousSibling.data.length) : (o = i.parentNode, r = e.nodeIndex(i) + 1) : r = e.nodeIndex(i), d = o, c = r) : (l ? i.hasChildNodes() ? (o = i.firstChild, r = 1) : xc(i.previousSibling) ? (o = i.previousSibling, r = i.previousSibling.data.length) : (o = i.parentNode, r = e.nodeIndex(i)) : r = e.nodeIndex(i), d = o, c = r), !l) {
                    for (a = i.previousSibling, s = i.nextSibling, Bt.each(Bt.grep(i.childNodes), (e => { No(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, "")) })); i = e.get(n.id + "_" + t);) e.remove(i, !0);
                    a && s && a.nodeType === s.nodeType && No(a) && !Nt.browser.isOpera() && (r = a.nodeValue.length, a.appendData(s.nodeValue), e.remove(s), d = a, c = r)
                }
                return M.some(Ua(d, c))
            }
            return M.none()
        },
        kc = (e, t, n) => ((e, t, n) => 2 === t ? oi(fr, n, e) : 3 === t ? (e => { const t = e.getRng(); return { start: Ya(e.dom.getRoot(), Ua.fromRangeStart(t)), end: Ya(e.dom.getRoot(), Ua.fromRangeEnd(t)) } })(e) : t ? (e => ({ rng: e.getRng() }))(e) : si(e, !1))(e, t, n),
        Sc = (e, t) => {
            ((e, t) => {
                const n = e.dom;
                if (t) {
                    if (hc(t)) return ((e, t) => { const n = e.createRng(); return Cc(e, !0, t, n) && Cc(e, !1, t, n) ? M.some(n) : M.none() })(n, t);
                    if ((e => m(e.start))(t)) return M.some(((e, t) => { let n; const o = e.createRng(); return n = Xa(e.getRoot(), t.start), o.setStart(n.container(), n.offset()), n = Xa(e.getRoot(), t.end), o.setEnd(n.container(), n.offset()), o })(n, t));
                    if ((e => we(e, "id"))(t)) return ((e, t) => {
                        const n = wc(e, "start", t),
                            o = wc(e, "end", t);
                        return Lt(n, o.or(n), ((t, n) => { const o = e.createRng(); return o.setStart(bc(e, t.container()), t.offset()), o.setEnd(bc(e, n.container()), n.offset()), o }))
                    })(n, t);
                    if ((e => we(e, "name"))(t)) return ((e, t) => M.from(e.select(t.name)[t.index]).map((t => { const n = e.createRng(); return n.selectNode(t), n })))(n, t);
                    if ((e => we(e, "rng"))(t)) return M.some(t.rng)
                }
                return M.none()
            })(e, t).each((t => { e.setRng(t) }))
        },
        _c = e => yo(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type"),
        Ec = (dr, e => "\xa0" === e);
    const Nc = e => "" !== e && -1 !== " \f\n\r\t\v".indexOf(e),
        Rc = e => !Nc(e) && !Ec(e) && !cr(e),
        Ac = e => { const t = e.toString(16); return (1 === t.length ? "0" + t : t).toUpperCase() },
        Oc = e => (e => ({ value: e }))(Ac(e.red) + Ac(e.green) + Ac(e.blue)),
        Tc = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,
        Bc = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,
        Dc = (e, t, n, o) => ({ red: e, green: t, blue: n, alpha: o }),
        Lc = (e, t, n, o) => {
            const r = parseInt(e, 10),
                s = parseInt(t, 10),
                a = parseInt(n, 10),
                i = parseFloat(o);
            return Dc(r, s, a, i)
        },
        Pc = e => (e => { if ("transparent" === e) return M.some(Dc(0, 0, 0, 0)); const t = Tc.exec(e); if (null !== t) return M.some(Lc(t[1], t[2], t[3], "1")); const n = Bc.exec(e); return null !== n ? M.some(Lc(n[1], n[2], n[3], n[4])) : M.none() })(e).map(Oc).map((e => "#" + e.value)).getOr(e),
        Mc = e => !!e.nodeType,
        Ic = (e, t, n) => {
            const o = n.startOffset;
            let r = n.startContainer;
            var s;
            if ((r !== n.endContainer || !(s = r.childNodes[o]) || !/^(IMG)$/.test(s.nodeName)) && yo(r)) {
                const s = r.childNodes;
                let a;
                o < s.length ? (r = s[o], a = new Xo(r, e.getParent(r, e.isBlock))) : (r = s[s.length - 1], a = new Xo(r, e.getParent(r, e.isBlock)), a.next(!0));
                for (let e = a.current(); e; e = a.next())
                    if (No(e) && !jc(e)) return n.setStart(e, 0), void t.setRng(n)
            }
        },
        Fc = (e, t, n) => {
            if (e) {
                const o = t ? "nextSibling" : "previousSibling";
                for (e = n ? e : e[o]; e; e = e[o])
                    if (yo(e) || !jc(e)) return e
            }
        },
        Uc = (e, t) => (Mc(t) && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()]),
        zc = (e, t, n) => e.schema.isValidChild(t, n),
        jc = (e, t = !1) => { if (C(e) && No(e)) { const n = t ? e.data.replace(/ /g, "\xa0") : e.data; return Fr(n) } return !1 },
        Vc = (e, t) => (x(e) ? e = e(t) : C(t) && (e = e.replace(/%(\w+)/g, ((e, n) => t[n] || e))), e),
        Hc = (e, t) => (t = t || "", e = "" + ((e = e || "").nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase()),
        $c = (e, t) => ("color" !== t && "backgroundColor" !== t || (e = Pc(e)), "fontWeight" === t && 700 === e && (e = "bold"), "fontFamily" === t && (e = e.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + e),
        qc = (e, t, n) => $c(e.getStyle(t, n), n),
        Wc = (e, t) => { let n; return e.getParent(t, (t => (n = e.getStyle(t, "text-decoration"), n && "none" !== n))), n },
        Kc = (e, t, n) => e.getParents(t, n, e.getRoot()),
        Gc = e => ke(e, "block"),
        Yc = e => ke(e, "selector"),
        Xc = e => ke(e, "inline"),
        Qc = e => Yc(e) && !1 !== e.expand && !Xc(e),
        Jc = _c,
        Zc = Kc,
        eu = jc,
        tu = Uc,
        nu = (e, t) => {
            let n = t;
            for (; n;) {
                if (yo(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode
            }
            return t
        },
        ou = (e, t, n, o) => {
            const r = t.data;
            for (let t = n; e ? t >= 0 : t < r.length; e ? t-- : t++)
                if (o(r.charAt(t))) return e ? t + 1 : t;
            return -1
        },
        ru = (e, t, n) => ou(e, t, n, (e => Ec(e) || Nc(e))),
        su = (e, t, n) => ou(e, t, n, Rc),
        au = (e, t, n, o, r, s) => {
            let a;
            const i = e.getParent(n, e.isBlock) || t,
                l = (t, n, o) => {
                    const s = ca(e),
                        l = r ? s.backwards : s.forwards;
                    return M.from(l(t, n, ((e, t) => Jc(e.parentNode) ? -1 : (a = e, o(r, e, t))), i))
                };
            return l(n, o, ru).bind((e => s ? l(e.container, e.offset + (r ? -1 : 0), su) : M.some(e))).orThunk((() => a ? M.some({ container: a, offset: r ? 0 : a.length }) : M.none()))
        },
        iu = (e, t, n, o, r) => {
            No(o) && Ke(o.data) && o[r] && (o = o[r]);
            const s = Zc(e, o);
            for (let o = 0; o < s.length; o++)
                for (let r = 0; r < t.length; r++) { const a = t[r]; if ((!C(a.collapsed) || a.collapsed === n.collapsed) && Yc(a) && e.is(s[o], a.selector)) return s[o] }
            return o
        },
        lu = (e, t, n, o) => {
            let r = n;
            const s = e.dom,
                a = s.getRoot(),
                i = t[0];
            if (Gc(i) && (r = i.wrapper ? null : s.getParent(n, i.block, a)), !r) {
                const t = s.getParent(n, "LI,TD,TH");
                r = s.getParent(No(n) ? n.parentNode : n, (t => t !== a && tu(e, t)), t)
            }
            if (r && Gc(i) && i.wrapper && (r = Zc(s, r, "ul,ol").reverse()[0] || r), !r)
                for (r = n; r[o] && !s.isBlock(r[o]) && (r = r[o], !Hc(r, "br")););
            return r || n
        },
        du = (e, t, n, o) => { const r = n.parentNode; return !C(n[o]) && (!(r !== t && !y(r) && !e.isBlock(r)) || du(e, t, r, o)) },
        cu = (e, t, n, o, r) => {
            let s = n;
            const a = r ? "previousSibling" : "nextSibling",
                i = e.getRoot();
            if (No(n) && !eu(n) && (r ? o > 0 : o < n.data.length)) return n;
            for (;;) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (let t = s[a]; t; t = t[a]) { const n = No(t) && !du(e, i, t, a); if (!Jc(t) && (!Do(l = t) || !l.getAttribute("data-mce-bogus") || l.nextSibling) && !eu(t, n)) return s }
                if (s === i || s.parentNode === i) { n = s; break }
                s = s.parentNode
            }
            var l;
            return n
        },
        uu = e => Jc(e.parentNode) || Jc(e),
        mu = (e, t, n, o = !1) => {
            let { startContainer: r, startOffset: s, endContainer: a, endOffset: i } = t;
            const l = e.dom,
                d = n[0];
            return yo(r) && r.hasChildNodes() && (r = ya(r, s), No(r) && (s = 0)), yo(a) && a.hasChildNodes() && (a = ya(a, t.collapsed ? i : i - 1), No(a) && (i = a.nodeValue.length)), r = nu(l, r), a = nu(l, a), uu(r) && (r = Jc(r) ? r : r.parentNode, r = t.collapsed ? r.previousSibling || r : r.nextSibling || r, No(r) && (s = t.collapsed ? r.length : 0)), uu(a) && (a = Jc(a) ? a : a.parentNode, a = t.collapsed ? a.nextSibling || a : a.previousSibling || a, No(a) && (i = t.collapsed ? 0 : a.length)), t.collapsed && (au(l, e.getBody(), r, s, !0, o).each((({ container: e, offset: t }) => { r = e, s = t })), au(l, e.getBody(), a, i, !1, o).each((({ container: e, offset: t }) => { a = e, i = t }))), (Xc(d) || d.block_expand) && (Xc(d) && No(r) && 0 !== s || (r = cu(l, n, r, s, !0)), Xc(d) && No(a) && i !== a.nodeValue.length || (a = cu(l, n, a, i, !1))), Qc(d) && (r = iu(l, n, t, r, "previousSibling"), a = iu(l, n, t, a, "nextSibling")), (Gc(d) || Yc(d)) && (r = lu(e, n, r, "previousSibling"), a = lu(e, n, a, "nextSibling"), Gc(d) && (l.isBlock(r) || (r = cu(l, n, r, s, !0)), l.isBlock(a) || (a = cu(l, n, a, i, !1)))), yo(r) && (s = l.nodeIndex(r), r = r.parentNode), yo(a) && (i = l.nodeIndex(a) + 1, a = a.parentNode), { startContainer: r, startOffset: s, endContainer: a, endOffset: i }
        },
        fu = (e, t, n) => {
            const o = t.startOffset,
                r = ya(t.startContainer, o),
                s = t.endOffset,
                a = ya(t.endContainer, s - 1),
                i = e => {
                    const t = e[0];
                    No(t) && t === r && o >= t.data.length && e.splice(0, 1);
                    const n = e[e.length - 1];
                    return 0 === s && e.length > 0 && n === a && No(n) && e.splice(e.length - 1, 1), e
                },
                l = (e, t, n) => { const o = []; for (; e && e !== n; e = e[t]) o.push(e); return o },
                d = (t, n) => e.getParent(t, (e => e.parentNode === n), n),
                c = (e, t, o) => {
                    const r = o ? "nextSibling" : "previousSibling";
                    for (let s = e, a = s.parentNode; s && s !== t; s = a) {
                        a = s.parentNode;
                        const t = l(s === e ? s : s[r], r);
                        t.length && (o || t.reverse(), n(i(t)))
                    }
                };
            if (r === a) return n(i([r]));
            const u = e.findCommonAncestor(r, a);
            if (e.isChildOf(r, a)) return c(r, u, !0);
            if (e.isChildOf(a, r)) return c(a, u);
            const m = d(r, u) || r,
                f = d(a, u) || a;
            c(r, m, !0);
            const g = l(m === r ? m : m.nextSibling, "nextSibling", f === a ? f.nextSibling : f);
            g.length && n(i(g)), c(a, f)
        },
        gu = e => {
            const t = [];
            if (e)
                for (let n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t
        },
        pu = (e, t) => { const n = Xs(t, "td[data-mce-selected],th[data-mce-selected]"); return n.length > 0 ? n : (e => K((e => ee(e, (e => { const t = va(e); return t ? [mn(t)] : [] })))(e), ar))(e) },
        hu = e => pu(gu(e.selection.getSel()), mn(e.getBody())),
        bu = (e, t) => qo(e, "table", t),
        vu = e => An(e).fold(N([e]), (t => [e].concat(vu(t)))),
        yu = e => On(e).fold(N([e]), (t => "br" === Mt(t) ? kn(t).map((t => [e].concat(yu(t)))).getOr([]) : [e].concat(yu(t)))),
        Cu = (e, t) => Lt((e => {
            const t = e.startContainer,
                n = e.startOffset;
            return No(t) ? 0 === n ? M.some(mn(t)) : M.none() : M.from(t.childNodes[n]).map(mn)
        })(t), (e => {
            const t = e.endContainer,
                n = e.endOffset;
            return No(t) ? n === t.data.length ? M.some(mn(t)) : M.none() : M.from(t.childNodes[n - 1]).map(mn)
        })(t), ((t, n) => {
            const o = Q(vu(e), O(bn, t)),
                r = Q(yu(e), O(bn, n));
            return o.isSome() && r.isSome()
        })).getOr(!1),
        xu = (e, t, n, o) => {
            const r = n,
                s = new Xo(n, r),
                a = ve(e.schema.getMoveCaretBeforeOnEnterElements(), ((e, t) => !j(["td", "th", "table"], t.toLowerCase())));
            do { if (No(n) && 0 !== Bt.trim(n.nodeValue).length) return void(o ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length)); if (a[n.nodeName]) return void(o ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n)) } while (n = o ? s.next() : s.prev());
            "BODY" === r.nodeName && (o ? t.setStart(r, 0) : t.setEnd(r, r.childNodes.length))
        },
        wu = e => { const t = e.selection.getSel(); return t && t.rangeCount > 0 },
        ku = (e, t) => {
            const n = hu(e);
            n.length > 0 ? $(n, (n => {
                const o = n.dom,
                    r = e.dom.createRng();
                r.setStartBefore(o), r.setEndAfter(o), t(r, !0)
            })) : t(e.selection.getRng(), !1)
        },
        Su = (e, t, n) => {
            const o = si(e, t);
            n(o), e.moveToBookmark(o)
        },
        _u = ((e, t) => {
            const n = t => e(t) ? M.from(t.dom.nodeValue) : M.none();
            return {
                get: t => { if (!e(t)) throw new Error("Can only get text value of a text node"); return n(t).getOr("") },
                getOption: n,
                set: (t, n) => {
                    if (!e(t)) throw new Error("Can only set raw text value of a text node");
                    t.dom.nodeValue = n
                }
            }
        })(zt),
        Eu = e => _u.get(e),
        Nu = e => _u.getOption(e),
        Ru = (e, { uid: t = sa("mce-annotation"), ...n }, o, r) => {
            const s = cn("span", e);
            nn(s, Qs()), $t(s, `${Zs()}`, t), $t(s, `${Js()}`, o);
            const { attributes: a = {}, classes: i = [] } = r(t, n);
            return qt(s, a), ((e, t) => { $(t, (t => { nn(e, t) })) })(s, i), s
        },
        Au = (e, t, n, o, r) => {
            const s = [],
                a = Ru(e.getDoc(), r, n, o),
                i = Ws(),
                l = () => { i.clear() },
                d = e => { $(e, c) },
                c = t => {
                    switch (((e, t, n, o) => wn(t).fold((() => "skipping"), (r => "br" === o || (e => zt(e) && Eu(e) === ur)(t) ? "valid" : (e => Ut(e) && sn(e, Qs()))(t) ? "existing" : gc(t.dom) ? "caret" : zc(e, n, o) && zc(e, Mt(r), n) ? "valid" : "invalid-child")))(e, t, "span", Mt(t))) {
                        case "invalid-child":
                            { l(); const e = Nn(t);d(e), l(); break }
                        case "valid":
                            {
                                const e = i.get().getOrThunk((() => { const e = ia(a); return s.push(e), i.set(e), e }));
                                ((e, t) => { Yn(e, t), Jn(t, e) })(t, e);
                                break
                            }
                    }
                };
            return fu(e.dom, t, (e => {
                l(), (e => {
                    const t = H(e, mn);
                    d(t)
                })(e)
            })), s
        },
        Ou = e => {
            const t = (() => { const e = {}; return { register: (t, n) => { e[t] = { name: t, settings: n } }, lookup: t => xe(e, t).map((e => e.settings)), getNames: () => ue(e) } })();
            ((e, t) => {
                e.serializer.addTempAttr(ea()), e.serializer.addNodeFilter("span", (e => {
                    $(e, (e => {
                        (e => M.from(e.attr(Js())).bind(t.lookup))(e).each((t => {!1 === t.persistent && e.unwrap() }))
                    }))
                }))
            })(e, t);
            const n = ((e, t) => {
                const n = zs({}),
                    o = () => ({ listeners: [], previous: Ws() }),
                    r = (e, t) => { s(e, (e => (t(e), e))) },
                    s = (e, t) => {
                        const r = n.get(),
                            s = t(xe(r, e).getOrThunk(o));
                        r[e] = s, n.set(r)
                    },
                    a = (t, n) => { $(na(e, t), (e => { n ? $t(e, ea(), "true") : Yt(e, ea()) })) },
                    i = Gs((() => {
                        const n = se(t.getNames());
                        $(n, (t => {
                            s(t, (n => {
                                const o = n.previous.get();
                                return ta(e, M.some(t)).fold((() => {
                                    o.each((e => {
                                        (e => { r(e, (t => { $(t.listeners, (t => t(!1, e))) })) })(t), n.previous.clear(), a(e, !1)
                                    }))
                                }), (({ uid: e, name: t, elements: s }) => { Dt(o, e) || (o.each((e => a(e, !1))), ((e, t, n) => { r(e, (o => { $(o.listeners, (o => o(!0, e, { uid: t, nodes: H(n, (e => e.dom)) }))) })) })(t, e, s), n.previous.set(e), a(e, !0)) })), { previous: n.previous, listeners: n.listeners }
                            }))
                        }))
                    }), 30);
                return e.on("remove", (() => { i.cancel() })), e.on("NodeChange", (() => { i.throttle() })), { addListener: (e, t) => { s(e, (e => ({ previous: e.previous, listeners: e.listeners.concat([t]) }))) } }
            })(e, t);
            return {
                register: (e, n) => { t.register(e, n) },
                annotate: (n, o) => {
                    t.lookup(n).each((t => {
                        ((e, t, n, o) => {
                            e.undoManager.transact((() => {
                                const r = e.selection,
                                    s = r.getRng(),
                                    a = hu(e).length > 0;
                                if (s.collapsed && !a && ((e, t) => {
                                        const n = mu(e, t, [{ inline: "span" }]);
                                        t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)
                                    })(e, s), r.getRng().collapsed && !a) {
                                    const s = Ru(e.getDoc(), o, t, n.decorate);
                                    ro(s, dr), r.getRng().insertNode(s.dom), r.select(s.dom)
                                } else Su(r, !1, (() => { ku(e, (r => { Au(e, r, t, n.decorate, o) })) }))
                            }))
                        })(e, n, t, o)
                    }))
                },
                annotationChanged: (e, t) => { n.addListener(e, t) },
                remove: t => {
                    const n = e.selection.getBookmark();
                    ta(e, M.some(t)).each((({ elements: e }) => { $(e, no) })), e.selection.moveToBookmark(n)
                },
                removeAll: t => {
                    const n = e.selection.getBookmark();
                    fe(oa(e, t), ((e, t) => $(e, no))), e.selection.moveToBookmark(n)
                },
                getAll: t => { const n = oa(e, t); return ge(n, (e => H(e, (e => e.dom)))) }
            }
        },
        Tu = e => ({ getBookmark: O(kc, e), moveToBookmark: O(Sc, e) });
    Tu.isBookmarkNode = _c;
    const Bu = (e, t, n) => !n.collapsed && V(n.getClientRects(), (n => ((e, t, n) => t >= e.left && t <= e.right && n >= e.top && n <= e.bottom)(n, e, t))),
        Du = (e, t, n) => e.dispatch(t, n),
        Lu = (e, t, n, o) => e.dispatch("FormatApply", { format: t, node: n, vars: o }),
        Pu = (e, t, n, o) => e.dispatch("FormatRemove", { format: t, node: n, vars: o }),
        Mu = (e, t) => e.dispatch("SetContent", t),
        Iu = (e, t) => e.dispatch("GetContent", t),
        Fu = (e, t) => e.dispatch("PastePlainTextToggle", { state: t }),
        Uu = { BACKSPACE: 8, DELETE: 46, DOWN: 40, ENTER: 13, ESC: 27, LEFT: 37, RIGHT: 39, SPACEBAR: 32, TAB: 9, UP: 38, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, modifierPressed: e => e.shiftKey || e.ctrlKey || e.altKey || Uu.metaKeyPressed(e), metaKeyPressed: e => Nt.os.isMacOS() || Nt.os.isiOS() ? e.metaKey : e.ctrlKey && !e.altKey },
        zu = (e, t) => {
            const n = "data-mce-selected",
                o = t.dom,
                r = Bt.each;
            let s, a, i, l, d, c, u, m, f, g, p, h, b;
            const v = t.getDoc(),
                y = document,
                x = Math.abs,
                w = Math.round,
                k = t.getBody();
            let S, _;
            const E = { nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1] },
                N = e => C(e) && (Lo(e) || t.dom.is(e, "figure.image")),
                R = e => Fo(e) || o.hasClass(e, "mce-preview-object"),
                A = e => {
                    const n = e.target;
                    ((e, t) => { if ("longpress" === e.type || 0 === e.type.indexOf("touch")) { const n = e.touches[0]; return N(e.target) && !Bu(n.clientX, n.clientY, t) } return N(e.target) && !Bu(e.clientX, e.clientY, t) })(e, t.selection.getRng()) && !e.isDefaultPrevented() && t.selection.select(n)
                },
                O = e => o.is(e, "figure.image") ? [e.querySelector("img")] : o.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? [e, e.firstElementChild] : [e],
                T = e => { const n = ol(t); return !!n && "false" !== e.getAttribute("data-mce-resize") && e !== t.getBody() && (o.hasClass(e, "mce-preview-object") ? pn(mn(e.firstElementChild), n) : pn(mn(e), n)) },
                B = (e, n, r) => {
                    if (C(r)) {
                        const s = O(e);
                        $(s, (e => { e.style[n] || !t.schema.isValid(e.nodeName.toLowerCase(), n) ? o.setStyle(e, n, r) : o.setAttrib(e, n, "" + r) }))
                    }
                },
                D = (e, t, n) => { B(e, "width", t), B(e, "height", n) },
                L = e => {
                    let n, r, d, v, y;
                    n = e.screenX - c, r = e.screenY - u, h = n * l[2] + m, b = r * l[3] + f, h = h < 5 ? 5 : h, b = b < 5 ? 5 : b, d = (N(s) || R(s)) && !1 !== rl(t) ? !Uu.modifierPressed(e) : Uu.modifierPressed(e), d && (x(n) > x(r) ? (b = w(h * g), h = w(b / g)) : (h = w(b / g), b = w(h * g))), D(a, h, b), v = l.startPos.x + n, y = l.startPos.y + r, v = v > 0 ? v : 0, y = y > 0 ? y : 0, o.setStyles(i, { left: v, top: y, display: "block" }), i.innerHTML = h + " &times; " + b, l[2] < 0 && a.clientWidth <= h && o.setStyle(a, "left", void 0 + (m - h)), l[3] < 0 && a.clientHeight <= b && o.setStyle(a, "top", void 0 + (f - b)), n = k.scrollWidth - S, r = k.scrollHeight - _, n + r !== 0 && o.setStyles(i, { left: v - n, top: y - r }), p || (((e, t, n, o, r) => { e.dispatch("ObjectResizeStart", { target: t, width: n, height: o, origin: r }) })(t, s, m, f, "corner-" + l.name), p = !0)
                },
                P = () => {
                    const e = p;
                    p = !1, e && (B(s, "width", h), B(s, "height", b)), o.unbind(v, "mousemove", L), o.unbind(v, "mouseup", P), y !== v && (o.unbind(y, "mousemove", L), o.unbind(y, "mouseup", P)), o.remove(a), o.remove(i), o.remove(d), M(s), e && (((e, t, n, o, r) => { e.dispatch("ObjectResized", { target: t, width: n, height: o, origin: r }) })(t, s, h, b, "corner-" + l.name), o.setAttrib(s, "style", o.getAttrib(s, "style"))), t.nodeChanged()
                },
                M = e => {
                    U();
                    const p = o.getPos(e, k),
                        C = p.x,
                        x = p.y,
                        w = e.getBoundingClientRect(),
                        N = w.width || w.right - w.left,
                        A = w.height || w.bottom - w.top;
                    s !== e && (I(), s = e, h = b = 0);
                    const B = t.dispatch("ObjectSelected", { target: e }),
                        M = o.getAttrib(s, n, "1");
                    T(e) && !B.isDefaultPrevented() ? r(E, ((e, t) => {
                        let r;
                        r = o.get("mceResizeHandle" + t), r && o.remove(r), r = o.add(k, "div", { id: "mceResizeHandle" + t, "data-mce-bogus": "all", class: "mce-resizehandle", unselectable: !0, style: "cursor:" + t + "-resize; margin:0; padding:0" }), o.bind(r, "mousedown", (r => {
                            r.stopImmediatePropagation(), r.preventDefault(), (r => {
                                const p = O(s)[0];
                                var h;
                                c = r.screenX, u = r.screenY, m = p.clientWidth, f = p.clientHeight, g = f / m, l = e, l.name = t, l.startPos = { x: N * e[0] + C, y: A * e[1] + x }, S = k.scrollWidth, _ = k.scrollHeight, d = o.add(k, "div", { class: "mce-resize-backdrop", "data-mce-bogus": "all" }), o.setStyles(d, { position: "fixed", left: "0", top: "0", width: "100%", height: "100%" }), a = R(h = s) ? o.create("img", { src: Nt.transparentSrc }) : h.cloneNode(!0), o.addClass(a, "mce-clonedresizable"), o.setAttrib(a, "data-mce-bogus", "all"), a.contentEditable = "false", o.setStyles(a, { left: C, top: x, margin: 0 }), D(a, N, A), a.removeAttribute(n), k.appendChild(a), o.bind(v, "mousemove", L), o.bind(v, "mouseup", P), y !== v && (o.bind(y, "mousemove", L), o.bind(y, "mouseup", P)), i = o.add(k, "div", { class: "mce-resize-helper", "data-mce-bogus": "all" }, m + " &times; " + f)
                            })(r)
                        })), e.elm = r, o.setStyles(r, { left: N * e[0] + C - r.offsetWidth / 2, top: A * e[1] + x - r.offsetHeight / 2 })
                    })) : I(), o.getAttrib(s, n) || s.setAttribute(n, M)
                },
                I = () => {
                    U(), s && s.removeAttribute(n), fe(E, ((e, t) => {
                        const n = o.get("mceResizeHandle" + t);
                        n && (o.unbind(n), o.remove(n))
                    }))
                },
                F = s => {
                    var a;
                    let i, l;
                    const d = (e, t) => {
                        if (e)
                            do { if (e === t) return !0 } while (e = e.parentNode)
                    };
                    p || t.removed || (r(o.select("img[data-mce-selected],hr[data-mce-selected]"), (e => { e.removeAttribute(n) })), l = "mousedown" === s.type ? s.target : e.getNode(), l = null === (a = Ko(mn(l), "table,img,figure.image,hr,video,span.mce-preview-object").getOrUndefined()) || void 0 === a ? void 0 : a.dom, d(l, k) && (z(), i = e.getStart(!0), d(i, l) && d(e.getEnd(!0), l)) ? M(l) : I())
                },
                U = () => { fe(E, (e => { e.elm && (o.unbind(e.elm), delete e.elm) })) },
                z = () => { try { t.getDoc().execCommand("enableObjectResizing", !1, "false") } catch (e) {} };
            return t.on("init", (() => {
                z();
                const e = Ks((e => { t.composing || F(e) }), 0);
                t.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged", e.throttle), t.on("keyup compositionend", (t => { s && "TABLE" === s.nodeName && e.throttle(t) })), t.on("hide blur", I), t.on("contextmenu longpress", A, !0)
            })), t.on("remove", U), { isResizable: T, showResizeRect: M, hideResizeRect: I, updateResizeRect: F, destroy: () => { s = a = d = null } }
        },
        ju = (e, t, n) => { const o = e.document.createRange(); var r; return r = o, t.fold((e => { r.setStartBefore(e.dom) }), ((e, t) => { r.setStart(e.dom, t) }), (e => { r.setStartAfter(e.dom) })), ((e, t) => { t.fold((t => { e.setEndBefore(t.dom) }), ((t, n) => { e.setEnd(t.dom, n) }), (t => { e.setEndAfter(t.dom) })) })(o, n), o },
        Vu = (e, t, n, o, r) => { const s = e.document.createRange(); return s.setStart(t.dom, n), s.setEnd(o.dom, r), s },
        Hu = ci([{ ltr: ["start", "soffset", "finish", "foffset"] }, { rtl: ["start", "soffset", "finish", "foffset"] }]),
        $u = (e, t, n) => t(mn(n.startContainer), n.startOffset, mn(n.endContainer), n.endOffset);
    Hu.ltr, Hu.rtl;
    const qu = (e, t, n, o) => ({ start: e, soffset: t, finish: n, foffset: o }),
        Wu = document.caretPositionFromPoint ? (e, t, n) => { var o, r; return M.from(null === (r = (o = e.dom).caretPositionFromPoint) || void 0 === r ? void 0 : r.call(o, t, n)).bind((t => { if (null === t.offsetNode) return M.none(); const n = e.dom.createRange(); return n.setStart(t.offsetNode, t.offset), n.collapse(), M.some(n) })) } : document.caretRangeFromPoint ? (e, t, n) => { var o, r; return M.from(null === (r = (o = e.dom).caretRangeFromPoint) || void 0 === r ? void 0 : r.call(o, t, n)) } : M.none,
        Ku = ci([{ before: ["element"] }, { on: ["element", "offset"] }, { after: ["element"] }]),
        Gu = { before: Ku.before, on: Ku.on, after: Ku.after, cata: (e, t, n, o) => e.fold(t, n, o), getStart: e => e.fold(R, R, R) },
        Yu = ci([{ domRange: ["rng"] }, { relative: ["startSitu", "finishSitu"] }, { exact: ["start", "soffset", "finish", "foffset"] }]),
        Xu = { domRange: Yu.domRange, relative: Yu.relative, exact: Yu.exact, exactFromRange: e => Yu.exact(e.start, e.soffset, e.finish, e.foffset), getWin: e => { const t = (e => e.match({ domRange: e => mn(e.startContainer), relative: (e, t) => Gu.getStart(e), exact: (e, t, n, o) => e }))(e); return xn(t) }, range: qu },
        Qu = (e, t) => { const n = Mt(e); return "input" === n ? Gu.after(e) : j(["br", "img"], n) ? 0 === t ? Gu.before(e) : Gu.after(e) : Gu.on(e, t) },
        Ju = (e, t) => {
            const n = e.fold(Gu.before, Qu, Gu.after),
                o = t.fold(Gu.before, Qu, Gu.after);
            return Xu.relative(n, o)
        },
        Zu = (e, t, n, o) => {
            const r = Qu(e, t),
                s = Qu(n, o);
            return Xu.relative(r, s)
        },
        em = (e, t) => { const n = (t || document).createDocumentFragment(); return $(e, (e => { n.appendChild(e.dom) })), mn(n) },
        tm = e => {
            const t = Xu.getWin(e).dom,
                n = (e, n, o, r) => Vu(t, e, n, o, r),
                o = (e => e.match({
                    domRange: e => {
                        const t = mn(e.startContainer),
                            n = mn(e.endContainer);
                        return Zu(t, e.startOffset, n, e.endOffset)
                    },
                    relative: Ju,
                    exact: Zu
                }))(e);
            return ((e, t) => { const n = ((e, t) => t.match({ domRange: e => ({ ltr: N(e), rtl: M.none }), relative: (t, n) => ({ ltr: De((() => ju(e, t, n))), rtl: De((() => M.some(ju(e, n, t)))) }), exact: (t, n, o, r) => ({ ltr: De((() => Vu(e, t, n, o, r))), rtl: De((() => M.some(Vu(e, o, r, t, n)))) }) }))(e, t); return ((e, t) => { const n = t.ltr(); return n.collapsed ? t.rtl().filter((e => !1 === e.collapsed)).map((e => Hu.rtl(mn(e.endContainer), e.endOffset, mn(e.startContainer), e.startOffset))).getOrThunk((() => $u(0, Hu.ltr, n))) : $u(0, Hu.ltr, n) })(0, n) })(t, o).match({ ltr: n, rtl: n })
        },
        nm = (e, t, n) => { return (o = n.defaultView, r = e, s = t, ((e, t, n) => { const o = mn(e.document); return Wu(o, t, n).map((e => qu(mn(e.startContainer), e.startOffset, mn(e.endContainer), e.endOffset))) })(o, r, s)).map((e => { const t = n.createRange(); return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), t })).getOrUndefined(); var o, r, s },
        om = (e, t) => e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset,
        rm = (e, t, n) => null !== ((e, t, n) => {
            for (; e && e !== t;) {
                if (n(e)) return e;
                e = e.parentNode
            }
            return null
        })(e, t, n),
        sm = (e, t, n) => rm(e, t, (e => e.nodeName === n)),
        am = e => e && "TABLE" === e.nodeName,
        im = e => e && /^(TD|TH|CAPTION)$/.test(e.nodeName),
        lm = (e, t) => vr(e) && !1 === rm(e, t, gc),
        dm = (e, t, n) => {
            const o = new Xo(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot());
            for (; t = o[n ? "prev" : "next"]();)
                if (Do(t)) return !0
        },
        cm = (e, t, n, o, r) => {
            let s;
            const a = e.getRoot();
            let i;
            const l = e.schema.getNonEmptyElements(),
                d = e.getParent(r.parentNode, e.isBlock) || a;
            if (o && Do(r) && t && e.isEmpty(d)) return M.some(Ua(r.parentNode, e.nodeIndex(r)));
            const c = new Xo(r, d);
            for (; i = c[o ? "prev" : "next"]();) {
                if ("false" === e.getContentEditableParent(i) || lm(i, a)) return M.none();
                if (No(i) && i.nodeValue.length > 0) return !1 === sm(i, a, "A") ? M.some(Ua(i, o ? i.nodeValue.length : 0)) : M.none();
                if (e.isBlock(i) || l[i.nodeName.toLowerCase()]) return M.none();
                s = i
            }
            return n && s ? M.some(Ua(s, 0)) : M.none()
        },
        um = (e, t, n, o) => {
            let r, s;
            const a = e.getRoot();
            let i, l, d = !1;
            r = o[(n ? "start" : "end") + "Container"], s = o[(n ? "start" : "end") + "Offset"];
            const c = yo(r) && s === r.childNodes.length,
                u = e.schema.getNonEmptyElements();
            if (l = n, vr(r)) return M.none();
            if (yo(r) && s > r.childNodes.length - 1 && (l = !1), To(r) && (r = a, s = 0), r === a) {
                if (l && (i = r.childNodes[s > 0 ? s - 1 : 0], i)) { if (vr(i)) return M.none(); if (u[i.nodeName] || am(i)) return M.none() }
                if (r.hasChildNodes()) {
                    if (s = Math.min(!l && s > 0 ? s - 1 : s, r.childNodes.length - 1), r = r.childNodes[s], s = No(r) && c ? r.data.length : 0, !t && r === a.lastChild && am(r)) return M.none();
                    if (((e, t) => {
                            for (; t && t !== e;) {
                                if (Mo(t)) return !0;
                                t = t.parentNode
                            }
                            return !1
                        })(a, r) || vr(r)) return M.none();
                    if (r.hasChildNodes() && !1 === am(r)) {
                        i = r;
                        const t = new Xo(r, a);
                        do { if (Mo(i) || vr(i)) { d = !1; break } if (No(i) && i.nodeValue.length > 0) { s = l ? 0 : i.nodeValue.length, r = i, d = !0; break } if (u[i.nodeName.toLowerCase()] && !im(i)) { s = e.nodeIndex(i), r = i.parentNode, l || s++, d = !0; break } } while (i = l ? t.next() : t.prev())
                    }
                }
            }
            return t && (No(r) && 0 === s && cm(e, c, t, !0, r).each((e => { r = e.container(), s = e.offset(), d = !0 })), yo(r) && (i = r.childNodes[s], i || (i = r.childNodes[s - 1]), !i || !Do(i) || ((e, t) => e.previousSibling && "A" === e.previousSibling.nodeName)(i) || dm(e, i, !1) || dm(e, i, !0) || cm(e, c, t, !0, i).each((e => { r = e.container(), s = e.offset(), d = !0 })))), l && !t && No(r) && s === r.nodeValue.length && cm(e, c, t, !1, r).each((e => { r = e.container(), s = e.offset(), d = !0 })), d ? M.some(Ua(r, s)) : M.none()
        },
        mm = (e, t) => {
            const n = t.collapsed,
                o = t.cloneRange(),
                r = Ua.fromRangeStart(t);
            return um(e, n, !0, o).each((e => { n && Ua.isAbove(r, e) || o.setStart(e.container(), e.offset()) })), n || um(e, n, !1, o).each((e => { o.setEnd(e.container(), e.offset()) })), n && o.collapse(!0), om(t, o) ? M.none() : M.some(o)
        },
        fm = (e, t) => e.splitText(t),
        gm = e => {
            let t = e.startContainer,
                n = e.startOffset,
                o = e.endContainer,
                r = e.endOffset;
            return t === o && No(t) ? n > 0 && n < t.nodeValue.length && (o = fm(t, n), t = o.previousSibling, r > n ? (r -= n, t = o = fm(o, r).previousSibling, r = o.nodeValue.length, n = 0) : r = 0) : (No(t) && n > 0 && n < t.nodeValue.length && (t = fm(t, n), n = 0), No(o) && r > 0 && r < o.nodeValue.length && (o = fm(o, r).previousSibling, r = o.nodeValue.length)), { startContainer: t, startOffset: n, endContainer: o, endOffset: r }
        },
        pm = e => ({ walk: (t, n) => fu(e, t, n), split: gm, normalize: t => mm(e, t).fold(L, (e => (t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0))) });
    pm.compareRanges = om, pm.getCaretRangeFromPoint = nm, pm.getSelectedNode = va, pm.getNode = ya;
    const hm = ((e, t) => {
            const n = t => { const n = (e => { const t = e.dom; return zn(e) ? t.getBoundingClientRect().height : t.offsetHeight })(t); if (n <= 0 || null === n) { const n = $n(t, e); return parseFloat(n) || 0 } return n },
                o = (e, t) => Y(t, ((t, n) => {
                    const o = $n(e, n),
                        r = void 0 === o ? 0 : parseInt(o, 10);
                    return isNaN(r) ? t : t + r
                }), 0);
            return {
                set: (t, n) => {
                    if (!w(n) && !n.match(/^[0-9]+$/)) throw new Error(e + ".set accepts only positive integer values. Value was " + n);
                    const o = t.dom;
                    an(o) && (o.style[e] = n + "px")
                },
                get: n,
                getOuter: n,
                aggregate: o,
                max: (e, t, n) => { const r = o(e, n); return t > r ? t - r : 0 }
            }
        })("height"),
        bm = () => mn(document),
        vm = (e, t) => e.view(t).fold(N([]), (t => {
            const n = e.owner(t),
                o = vm(e, n);
            return [t].concat(o)
        }));
    var ym = Object.freeze({ __proto__: null, view: e => { var t; return (e.dom === document ? M.none() : M.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(mn) }, owner: e => Cn(e) });
    const Cm = e => "textarea" === Mt(e),
        xm = (e, t) => {
            const n = (e => {
                    const t = e.dom.ownerDocument,
                        n = t.body,
                        o = t.defaultView,
                        r = t.documentElement;
                    if (n === e.dom) return lo(n.offsetLeft, n.offsetTop);
                    const s = co(null == o ? void 0 : o.pageYOffset, r.scrollTop),
                        a = co(null == o ? void 0 : o.pageXOffset, r.scrollLeft),
                        i = co(r.clientTop, n.clientTop),
                        l = co(r.clientLeft, n.clientLeft);
                    return uo(e).translate(a - l, s - i)
                })(e),
                o = (e => hm.get(e))(e);
            return { element: e, bottom: n.top + o, height: o, pos: n, cleanup: t }
        },
        wm = (e, t, n, o) => { Em(e, ((r, s) => Sm(e, t, n, o)), n) },
        km = (e, t, n, o, r) => {
            const s = { elm: o.element.dom, alignToTop: r };
            ((e, t) => e.dispatch("ScrollIntoView", t).isDefaultPrevented())(e, s) || (n(t, mo(t).top, o, r), ((e, t) => { e.dispatch("AfterScrollIntoView", t) })(e, s))
        },
        Sm = (e, t, n, o) => {
            const r = mn(e.getBody()),
                s = mn(e.getDoc());
            r.dom.offsetWidth;
            const a = ((e, t) => {
                const n = ((e, t) => { const n = Nn(e); if (0 === n.length || Cm(e)) return { element: e, offset: t }; if (t < n.length && !Cm(n[t])) return { element: n[t], offset: 0 }; { const o = n[n.length - 1]; return Cm(o) ? { element: e, offset: t } : "img" === Mt(o) ? { element: o, offset: 1 } : zt(o) ? { element: o, offset: Eu(o).length } : { element: o, offset: Nn(o).length } } })(e, t),
                    o = dn('<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>');
                return Yn(n.element, o), xm(o, (() => to(o)))
            })(mn(n.startContainer), n.startOffset);
            km(e, s, t, a, o), a.cleanup()
        },
        _m = (e, t, n, o) => {
            const r = mn(e.getDoc());
            km(e, r, n, (e => xm(mn(e), S))(t), o)
        },
        Em = (e, t, n) => {
            const o = n.startContainer,
                r = n.startOffset,
                s = n.endContainer,
                a = n.endOffset;
            t(mn(o), mn(s));
            const i = e.dom.createRng();
            i.setStart(o, r), i.setEnd(s, a), e.selection.setRng(n)
        },
        Nm = (e, t, n, o) => {
            const r = e.pos;
            if (n) fo(r.left, r.top, o);
            else {
                const n = r.top - t + e.height;
                fo(r.left, n, o)
            }
        },
        Rm = (e, t, n, o, r) => {
            const s = n + t,
                a = o.pos.top,
                i = o.bottom,
                l = i - a >= n;
            a < t ? Nm(o, n, !1 !== r, e) : a > s ? Nm(o, n, l ? !1 !== r : !0 === r, e) : i > s && !l && Nm(o, n, !0 === r, e)
        },
        Am = (e, t, n, o) => {
            const r = e.dom.defaultView.innerHeight;
            Rm(e, t, r, n, o)
        },
        Om = (e, t, n, o) => {
            const r = e.dom.defaultView.innerHeight;
            Rm(e, t, r, n, o);
            const s = (e => {
                    const t = bm(),
                        n = mo(t),
                        o = ((e, t) => { const n = t.owner(e); return vm(t, n) })(e, ym),
                        r = uo(e),
                        s = G(o, ((e, t) => { const n = uo(t); return { left: e.left + n.left, top: e.top + n.top } }), { left: 0, top: 0 });
                    return lo(s.left + r.left + n.left, s.top + r.top + n.top)
                })(n.element),
                a = ho(window);
            s.top < a.y ? go(n.element, !1 !== o) : s.top > a.bottom && go(n.element, !0 === o)
        },
        Tm = (e, t, n) => wm(e, Am, t, n),
        Bm = (e, t, n) => _m(e, t, Am, n),
        Dm = (e, t, n) => wm(e, Om, t, n),
        Lm = (e, t, n) => _m(e, t, Om, n),
        Pm = (e, t, n) => {
            (e.inline ? Tm : Dm)(e, t, n)
        },
        Mm = e => e.dom.focus(),
        Im = e => { const t = Pn(e).dom; return e.dom === t.activeElement },
        Fm = (e = bm()) => M.from(e.dom.activeElement).map(mn),
        Um = (e, t) => { const n = zt(t) ? Eu(t).length : Nn(t).length + 1; return e > n ? n : e < 0 ? 0 : e },
        zm = e => Xu.range(e.start, Um(e.soffset, e.start), e.finish, Um(e.foffset, e.finish)),
        jm = (e, t) => !vo(t.dom) && (vn(e, t) || bn(e, t)),
        Vm = e => t => jm(e, t.start) && jm(e, t.finish),
        Hm = e => Xu.range(mn(e.startContainer), e.startOffset, mn(e.endContainer), e.endOffset),
        $m = e => { const t = document.createRange(); try { return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), M.some(t) } catch (e) { return M.none() } },
        qm = e => {
            const t = (e => e.inline)(e) ? (n = mn(e.getBody()), (e => { const t = e.getSelection(); return (t && 0 !== t.rangeCount ? M.from(t.getRangeAt(0)) : M.none()).map(Hm) })(xn(n).dom).filter(Vm(n))) : M.none();
            var n;
            e.bookmark = t.isSome() ? t : e.bookmark
        },
        Wm = e => (e.bookmark ? e.bookmark : M.none()).bind((t => { return n = mn(e.getBody()), o = t, M.from(o).filter(Vm(n)).map(zm); var n, o })).bind($m),
        Km = { isEditorUIElement: e => { const t = e.className.toString(); return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-") } },
        Gm = { setEditorTimeout: (e, t, n) => ((e, t) => (w(t) || (t = 0), setTimeout(e, t)))((() => { e.removed || t() }), n), setEditorInterval: (e, t, n) => { const o = ((e, t) => (w(t) || (t = 0), setInterval(e, t)))((() => { e.removed ? clearInterval(o) : t() }), n); return o } };
    let Ym;
    const Xm = Is.DOM,
        Qm = (e, t) => {
            const n = hl(e),
                o = Xm.getParent(t, (t => (e => Km.isEditorUIElement(e))(t) || !!n && e.dom.is(t, n)));
            return null !== o
        },
        Jm = (e, t) => {
            const n = t.editor;
            (e => {
                const t = Ks((() => { qm(e) }), 0);
                e.on("init", (() => {
                    e.inline && ((e, t) => {
                        const n = () => { t.throttle() };
                        Is.DOM.bind(document, "mouseup", n), e.on("remove", (() => { Is.DOM.unbind(document, "mouseup", n) }))
                    })(e, t), ((e, t) => {
                        ((e, t) => { e.on("mouseup touchend", (e => { t.throttle() })) })(e, t), e.on("keyup NodeChange AfterSetSelectionRange", (t => {
                            (e => "nodechange" === e.type && e.selectionChange)(t) || qm(e)
                        }))
                    })(e, t)
                })), e.on("remove", (() => { t.cancel() }))
            })(n), n.on("focusin", (() => {
                const t = e.focusedEditor;
                t !== n && (t && t.dispatch("blur", { focusedEditor: n }), e.setActive(n), e.focusedEditor = n, n.dispatch("focus", { blurredEditor: t }), n.focus(!0))
            })), n.on("focusout", (() => {
                Gm.setEditorTimeout(n, (() => {
                    const t = e.focusedEditor;
                    Qm(n, (e => { try { const t = Pn(mn(e.getElement())); return Fm(t).fold((() => document.body), (e => e.dom)) } catch (e) { return document.body } })(n)) || t !== n || (n.dispatch("blur", { focusedEditor: null }), e.focusedEditor = null)
                }))
            })), Ym || (Ym = t => {
                const n = e.activeEditor;
                n && Fn(t).each((t => { t.ownerDocument === document && (t === document.body || Qm(n, t) || e.focusedEditor !== n || (n.dispatch("blur", { focusedEditor: null }), e.focusedEditor = null)) }))
            }, Xm.bind(document, "focusin", Ym))
        },
        Zm = (e, t) => { e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (Xm.unbind(document, "focusin", Ym), Ym = null) },
        ef = (e, t) => {
            ((e, t) => (e => e.collapsed ? M.from(ya(e.startContainer, e.startOffset)).map(mn) : M.none())(t).bind((t => sr(t) ? M.some(t) : !1 === vn(e, t) ? M.some(e) : M.none())))(mn(e.getBody()), t).bind((e => uc(e.dom))).fold((() => { e.selection.normalize() }), (t => e.selection.setRng(t.toRange())))
        },
        tf = e => { if (e.setActive) try { e.setActive() } catch (t) { e.focus() } else e.focus() },
        nf = e => e.inline ? (e => { const t = e.getBody(); return t && (n = mn(t), Im(n) || (o = n, Fm(Pn(o)).filter((e => o.dom.contains(e.dom)))).isSome()); var n, o })(e) : (e => e.iframeElement && Im(mn(e.iframeElement)))(e),
        of = e => e.editorManager.setActive(e),
        rf = (e, t, n, o, r) => {
            const s = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
            return M.from(s).map(mn).map((e => o && t.collapsed ? e : Rn(e, r(e, a)).getOr(e))).bind((e => Ut(e) ? M.some(e) : wn(e).filter(Ut))).map((e => e.dom)).getOr(e)
        },
        sf = (e, t, n) => rf(e, t, !0, n, ((e, t) => Math.min(Tn(e), t))),
        af = (e, t, n) => rf(e, t, !1, n, ((e, t) => t > 0 ? t - 1 : t)),
        lf = (e, t) => { const n = e; for (; e && No(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling; return e || n },
        df = (e, t) => H(t, (t => { const n = e.dispatch("GetSelectionRange", { range: t }); return n.range !== t ? n.range : t })),
        cf = ["img", "br"],
        uf = e => { const t = Nu(e).filter((e => 0 !== e.trim().length || e.indexOf(dr) > -1)).isSome(); return t || j(cf, Mt(e)) },
        mf = "[data-mce-autocompleter]",
        ff = (e, t) => {
            if (gf(mn(e.getBody())).isNone()) {
                const o = dn('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>', e.getDoc());
                Jn(o, mn(t.extractContents())), t.insertNode(o.dom), wn(o).each((e => e.dom.normalize())), (n = o, ((e, t) => { const n = e => { const o = Nn(e); for (let e = o.length - 1; e >= 0; e--) { const r = o[e]; if (t(r)) return M.some(r); const s = n(r); if (s.isSome()) return s } return M.none() }; return n(e) })(n, uf)).map((t => { e.selection.setCursorLocation(t.dom, (e => "img" === Mt(e) ? 1 : Nu(e).fold((() => Nn(e).length), (e => e.length)))(t)) }))
            }
            var n
        },
        gf = e => Wo(e, mf),
        pf = { "#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11 },
        hf = (e, t, n) => {
            const o = n ? "lastChild" : "firstChild",
                r = n ? "prev" : "next";
            if (e[o]) return e[o];
            if (e !== t) {
                let n = e[r];
                if (n) return n;
                for (let o = e.parent; o && o !== t; o = o.parent)
                    if (n = o[r], n) return n
            }
        },
        bf = e => { if (!Fr(e.value)) return !1; const t = e.parent; return !t || "span" === t.name && !t.attr("style") || !/^[ ]+$/.test(e.value) },
        vf = e => { const t = "a" === e.name && !e.attr("href") && e.attr("id"); return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t };
    class yf {
        constructor(e, t) { this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {}) }
        static create(e, t) { const n = new yf(e, pf[e] || 1); return t && fe(t, ((e, t) => { n.attr(t, e) })), n }
        replace(e) { const t = this; return e.parent && e.remove(), t.insert(e, t), t.remove(), t }
        attr(e, t) {
            const n = this;
            let o;
            if ("string" != typeof e) return null != e && fe(e, ((e, t) => { n.attr(t, e) })), n;
            if (o = n.attributes) {
                if (void 0 !== t) {
                    if (null === t) {
                        if (e in o.map) {
                            delete o.map[e];
                            let t = o.length;
                            for (; t--;)
                                if (o[t].name === e) return o.splice(t, 1), n
                        }
                        return n
                    }
                    if (e in o.map) {
                        let n = o.length;
                        for (; n--;)
                            if (o[n].name === e) { o[n].value = t; break }
                    } else o.push({ name: e, value: t });
                    return o.map[e] = t, n
                }
                return o.map[e]
            }
        }
        clone() {
            const e = this,
                t = new yf(e.name, e.type);
            let n;
            if (n = e.attributes) {
                const e = [];
                e.map = {};
                for (let t = 0, o = n.length; t < o; t++) { const o = n[t]; "id" !== o.name && (e[e.length] = { name: o.name, value: o.value }, e.map[o.name] = o.value) }
                t.attributes = e
            }
            return t.value = e.value, t
        }
        wrap(e) { const t = this; return t.parent.insert(e, t), e.append(t), t }
        unwrap() {
            const e = this;
            for (let t = e.firstChild; t;) {
                const n = t.next;
                e.insert(t, e, !0), t = n
            }
            e.remove()
        }
        remove() {
            const e = this,
                t = e.parent,
                n = e.next,
                o = e.prev;
            return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : o.next = n, t.lastChild === e ? (t.lastChild = o, o && (o.next = null)) : n.prev = o, e.parent = e.next = e.prev = null), e
        }
        append(e) {
            const t = this;
            e.parent && e.remove();
            const n = t.lastChild;
            return n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, e.parent = t, e
        }
        insert(e, t, n) { e.parent && e.remove(); const o = t.parent || this; return n ? (t === o.firstChild ? o.firstChild = e : t.prev.next = e, e.prev = t.prev, e.next = t, t.prev = e) : (t === o.lastChild ? o.lastChild = e : t.next.prev = e, e.next = t.next, e.prev = t, t.next = e), e.parent = o, e }
        getAll(e) {
            const t = this,
                n = [];
            for (let o = t.firstChild; o; o = hf(o, t)) o.name === e && n.push(o);
            return n
        }
        children() { const e = []; for (let t = this.firstChild; t; t = t.next) e.push(t); return e }
        empty() {
            const e = this;
            if (e.firstChild) {
                const t = [];
                for (let n = e.firstChild; n; n = hf(n, e)) t.push(n);
                let n = t.length;
                for (; n--;) {
                    const e = t[n];
                    e.parent = e.firstChild = e.lastChild = e.next = e.prev = null
                }
            }
            return e.firstChild = e.lastChild = null, e
        }
        isEmpty(e, t = {}, n) {
            const o = this;
            let r = o.firstChild;
            if (vf(o)) return !1;
            if (r)
                do { if (1 === r.type) { if (r.attr("data-mce-bogus")) continue; if (e[r.name]) return !1; if (vf(r)) return !1 } if (8 === r.type) return !1; if (3 === r.type && !bf(r)) return !1; if (3 === r.type && r.parent && t[r.parent.name] && Fr(r.value)) return !1; if (n && n(r)) return !1 } while (r = hf(r, o));
            return !0
        }
        walk(e) { return hf(this, null, e) }
    }
    const Cf = (e, t, n = 0) => {
            const o = e.toLowerCase();
            if (-1 !== o.indexOf("[if ", n) && ((e, t) => /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t)))(o, n)) { const e = o.indexOf("[endif]", n); return o.indexOf(">", e) }
            if (t) { const e = o.indexOf(">", n); return -1 !== e ? e : o.length } {
                const t = /--!?>/g;
                t.lastIndex = n;
                const r = t.exec(e);
                return r ? r.index + r[0].length : o.length
            }
        },
        xf = (e, t, n) => {
            const o = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g,
                r = /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g,
                s = e.getVoidElements();
            let a = 1,
                i = n;
            for (; 0 !== a;)
                for (o.lastIndex = i;;) { const e = o.exec(t); if (null === e) return i; if ("!" === e[1]) { i = ze(e[2], "--") ? Cf(t, !1, e.index + "!--".length) : Cf(t, !0, e.index + 1); break } { r.lastIndex = o.lastIndex; const n = r.exec(t); if (h(n) || n.index !== o.lastIndex) continue; "/" === e[1] ? a -= 1 : we(s, e[2]) || (a += 1), i = o.lastIndex + n[0].length; break } }
            return i
        },
        wf = (e, t) => {
            const n = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                o = e.schema;
            let r = ((e, t) => { const n = new RegExp(["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"), "gi"); return t.replace(n, "") })(e.getTempAttrs(), t);
            const s = o.getVoidElements();
            let a;
            for (; a = n.exec(r);) {
                const e = n.lastIndex,
                    t = a[0].length;
                let i;
                i = s[a[1]] ? e : xf(o, r, e), r = r.substring(0, e - t) + r.substring(i), n.lastIndex = e - t
            }
            return fr(r)
        },
        kf = wf,
        Sf = Bt.each,
        _f = e => ({
            compare: (t, n) => {
                if (t.nodeName !== n.nodeName) return !1;
                const o = t => {
                        const n = {};
                        return Sf(e.getAttribs(t), (o => {
                            const r = o.nodeName.toLowerCase();
                            0 !== r.indexOf("_") && "style" !== r && 0 !== r.indexOf("data-") && (n[r] = e.getAttrib(t, r))
                        })), n
                    },
                    r = (e, t) => {
                        let n, o;
                        for (o in e)
                            if (we(e, o)) {
                                if (n = t[o], void 0 === n) return !1;
                                if (e[o] !== n) return !1;
                                delete t[o]
                            }
                        for (o in t)
                            if (we(t, o)) return !1;
                        return !0
                    };
                return !(!r(o(t), o(n)) || !r(e.parseStyle(e.getAttrib(t, "style")), e.parseStyle(e.getAttrib(n, "style"))) || _c(t) || _c(n))
            }
        }),
        Ef = Bt.makeMap,
        Nf = e => {
            const t = [],
                n = (e = e || {}).indent,
                o = Ef(e.indent_before || ""),
                r = Ef(e.indent_after || ""),
                s = ls.getEncodeFunc(e.entity_encoding || "raw", e.entities),
                a = "xhtml" !== e.element_format;
            return {
                start: (e, i, l) => {
                    let d, c, u, m;
                    if (n && o[e] && t.length > 0 && (m = t[t.length - 1], m.length > 0 && "\n" !== m && t.push("\n")), t.push("<", e), i)
                        for (d = 0, c = i.length; d < c; d++) u = i[d], t.push(" ", u.name, '="', s(u.value, !0), '"');
                    t[t.length] = !l || a ? ">" : " />", l && n && r[e] && t.length > 0 && (m = t[t.length - 1], m.length > 0 && "\n" !== m && t.push("\n"))
                },
                end: e => {
                    let o;
                    t.push("</", e, ">"), n && r[e] && t.length > 0 && (o = t[t.length - 1], o.length > 0 && "\n" !== o && t.push("\n"))
                },
                text: (e, n) => { e.length > 0 && (t[t.length] = n ? e : s(e)) },
                cdata: e => { t.push("<![CDATA[", e, "]]>") },
                comment: e => { t.push("\x3c!--", e, "--\x3e") },
                pi: (e, o) => { o ? t.push("<?", e, " ", s(o), "?>") : t.push("<?", e, "?>"), n && t.push("\n") },
                doctype: e => { t.push("<!DOCTYPE", e, ">", n ? "\n" : "") },
                reset: () => { t.length = 0 },
                getContent: () => t.join("").replace(/\n$/, "")
            }
        },
        Rf = (e, t = vs()) => {
            const n = Nf(e);
            return (e = e || {}).validate = !("validate" in e) || e.validate, {
                serialize: o => {
                    const r = e.validate,
                        s = {
                            3: e => { n.text(e.value, e.raw) },
                            8: e => { n.comment(e.value) },
                            7: e => { n.pi(e.name, e.value) },
                            10: e => { n.doctype(e.value) },
                            4: e => { n.cdata(e.value) },
                            11: e => {
                                if (e = e.firstChild)
                                    do { a(e) } while (e = e.next)
                            }
                        };
                    n.reset();
                    const a = e => {
                        const o = s[e.type];
                        if (o) o(e);
                        else {
                            const o = e.name,
                                s = o in t.getVoidElements();
                            let i = e.attributes;
                            if (r && i && i.length > 1) {
                                const n = [];
                                n.map = {};
                                const o = t.getElementRule(e.name);
                                if (o) {
                                    for (let e = 0, t = o.attributesOrder.length; e < t; e++) {
                                        const t = o.attributesOrder[e];
                                        if (t in i.map) {
                                            const e = i.map[t];
                                            n.map[t] = e, n.push({ name: t, value: e })
                                        }
                                    }
                                    for (let e = 0, t = i.length; e < t; e++) {
                                        const t = i[e].name;
                                        if (!(t in n.map)) {
                                            const e = i.map[t];
                                            n.map[t] = e, n.push({ name: t, value: e })
                                        }
                                    }
                                    i = n
                                }
                            }
                            if (n.start(o, i, s), !s) {
                                let t = e.firstChild;
                                if (t) {
                                    "pre" !== o && "textarea" !== o || 3 !== t.type || "\n" !== t.value[0] || n.text("\n", !0);
                                    do { a(t) } while (t = t.next)
                                }
                                n.end(o)
                            }
                        }
                    };
                    return 1 !== o.type || e.inner ? 3 === o.type ? s[3](o) : s[11](o) : a(o), n.getContent()
                }
            }
        },
        Af = new Set;
    $(["margin", "margin-left", "margin-right", "margin-top", "margin-bottom", "padding", "padding-left", "padding-right", "padding-top", "padding-bottom", "border", "border-width", "border-style", "border-color", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "float", "position", "left", "right", "top", "bottom", "z-index", "display", "transform", "width", "max-width", "min-width", "height", "max-height", "min-height", "overflow", "overflow-x", "overflow-y", "text-overflow", "vertical-align", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function"], (e => { Af.add(e) }));
    const Of = ["font", "text-decoration", "text-emphasis"],
        Tf = (e, t) => ue(e.parseStyle(e.getAttrib(t, "style"))),
        Bf = (e, t, n) => {
            const o = Tf(e, t),
                r = Tf(e, n),
                s = o => {
                    var r, s;
                    const a = null !== (r = e.getStyle(t, o)) && void 0 !== r ? r : "",
                        i = null !== (s = e.getStyle(n, o)) && void 0 !== s ? s : "";
                    return We(a) && We(i) && a !== i
                };
            return V(o, (e => { const t = t => V(t, (t => t === e)); if (!t(r) && t(Of)) { const e = K(r, (e => V(Of, (t => ze(e, t))))); return V(e, s) } return s(e) }))
        },
        Df = (e, t, n) => M.from(n.container()).filter(No).exists((o => { const r = e ? 0 : -1; return t(o.data.charAt(n.offset() + r)) })),
        Lf = O(Df, !0, Nc),
        Pf = O(Df, !1, Nc),
        Mf = e => { const t = e.container(); return No(t) && (0 === t.data.length || mr(t.data) && Tu.isBookmarkNode(t.parentNode)) },
        If = (e, t) => n => M.from(Bd(e ? 0 : -1, n)).filter(t).isSome(),
        Ff = e => Lo(e) && "block" === $n(mn(e), "display"),
        Uf = e => Mo(e) && !(e => yo(e) && "all" === e.getAttribute("data-mce-bogus"))(e),
        zf = If(!0, Ff),
        jf = If(!1, Ff),
        Vf = If(!0, Fo),
        Hf = If(!1, Fo),
        $f = If(!0, So),
        qf = If(!1, So),
        Wf = If(!0, Uf),
        Kf = If(!1, Uf),
        Gf = e => { eo(e), Jn(e, dn('<br data-mce-bogus="1">')) },
        Yf = e => { On(e).each((t => { kn(t).each((n => { Zo(e) && tr(t) && Zo(n) && to(t) })) })) },
        Xf = (e, t) => ((e, t, n) => {
            return vn(t, e) ? (o = ((e, t) => {
                const n = x(t) ? t : L;
                let o = e.dom;
                const r = [];
                for (; null !== o.parentNode && void 0 !== o.parentNode;) {
                    const e = o.parentNode,
                        t = mn(e);
                    if (r.push(t), !0 === n(t)) break;
                    o = e
                }
                return r
            })(e, (e => n(e) || bn(e, t))), o.slice(0, -1)) : [];
            var o
        })(e, t, L),
        Qf = (e, t) => [e].concat(Xf(e, t)),
        Jf = (e, t, n) => ic(e, t, n, Mf),
        Zf = (e, t) => Q(Qf(mn(t.container()), e), Zo),
        eg = (e, t, n) => Jf(e, t.dom, n).forall((e => Zf(t, n).fold((() => !1 === Td(e, n, t.dom)), (o => !1 === Td(e, n, t.dom) && vn(o, mn(e.container())))))),
        tg = (e, t, n) => Zf(t, n).fold((() => Jf(e, t.dom, n).forall((e => !1 === Td(e, n, t.dom)))), (t => Jf(e, t.dom, n).isNone())),
        ng = O(tg, !1),
        og = O(tg, !0),
        rg = O(eg, !1),
        sg = O(eg, !0),
        ag = e => jd(e).exists(tr),
        ig = (e, t, n) => {
            const o = K(Qf(mn(n.container()), t), Zo),
                r = ie(o).getOr(t);
            return sc(e, r.dom, n).filter(ag)
        },
        lg = (e, t) => jd(t).exists(tr) || ig(!0, e, t).isSome(),
        dg = (e, t) => (e => M.from(e.getNode(!0)).map(mn))(t).exists(tr) || ig(!1, e, t).isSome(),
        cg = O(ig, !1),
        ug = O(ig, !0),
        mg = e => Ua.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd(),
        fg = (e, t) => { const n = K(Qf(mn(t.container()), e), Zo); return ie(n).getOr(e) },
        gg = (e, t) => mg(t) ? Pf(t) : Pf(t) || cc(fg(e, t).dom, t).exists(Pf),
        pg = (e, t) => mg(t) ? Lf(t) : Lf(t) || dc(fg(e, t).dom, t).exists(Lf),
        hg = e => jd(e).bind((e => $o(e, Ut))).exists((e => (e => j(["pre", "pre-wrap"], e))($n(e, "white-space")))),
        bg = (e, t) => !hg(t) && (ng(e, t) || rg(e, t) || dg(e, t) || gg(e, t)),
        vg = (e, t) => !hg(t) && (og(e, t) || sg(e, t) || lg(e, t) || pg(e, t)),
        yg = (e, t) => bg(e, t) || vg(e, (e => {
            const t = e.container(),
                n = e.offset();
            return No(t) && n < t.data.length ? Ua(t, n + 1) : e
        })(t)),
        Cg = (e, t) => Ec(e.charAt(t)),
        xg = e => { const t = e.container(); return No(t) && Ue(t.data, dr) },
        wg = (e, t) => M.some(t).filter(xg).bind((t => {
            const n = t.container(),
                o = ((e, t) => {
                    const n = t.data,
                        o = Ua(t, 0);
                    return !(!Cg(n, 0) || yg(e, o) || (t.data = " " + n.slice(1), 0))
                })(e, n) || (e => {
                    const t = e.data,
                        n = (e => { const t = e.split(""); return H(t, ((e, n) => Ec(e) && n > 0 && n < t.length - 1 && Rc(t[n - 1]) && Rc(t[n + 1]) ? " " : e)).join("") })(t);
                    return n !== t && (e.data = n, !0)
                })(n) || ((e, t) => {
                    const n = t.data,
                        o = Ua(t, n.length - 1);
                    return !(!Cg(n, n.length - 1) || yg(e, o) || (t.data = n.slice(0, -1) + " ", 0))
                })(e, n);
            return o ? M.some(t) : M.none()
        })),
        kg = (e, t, n) => {
            if (0 === n) return;
            const o = mn(e),
                r = Ho(o, Zo).getOr(o),
                s = e.data.slice(t, t + n),
                a = t + n >= e.data.length && vg(r, Ua(e, e.data.length)),
                i = 0 === t && bg(r, Ua(e, 0));
            e.replaceData(t, n, zr(s, 4, i, a))
        },
        Sg = (e, t) => {
            const n = e.data.slice(t),
                o = n.length - $e(n).length;
            kg(e, t, o)
        },
        _g = (e, t) => {
            const n = e.data.slice(0, t),
                o = n.length - qe(n).length;
            kg(e, t - o, o)
        },
        Eg = (e, t, n, o = !0) => {
            const r = qe(e.data).length,
                s = o ? e : t,
                a = o ? t : e;
            return o ? s.appendData(a.data) : s.insertData(0, a.data), to(mn(a)), n && Sg(s, r), s
        },
        Ng = (e, t) => ((e, t) => {
            const n = e.container(),
                o = e.offset();
            return !1 === Ua.isTextPosition(e) && n === t.parentNode && o > Ua.before(t).offset()
        })(t, e) ? Ua(t.container(), t.offset() - 1) : t,
        Rg = e => { return Lr(e.previousSibling) ? M.some((t = e.previousSibling, No(t) ? Ua(t, t.data.length) : Ua.after(t))) : e.previousSibling ? mc(e.previousSibling) : M.none(); var t },
        Ag = e => { return Lr(e.nextSibling) ? M.some((t = e.nextSibling, No(t) ? Ua(t, 0) : Ua.before(t))) : e.nextSibling ? uc(e.nextSibling) : M.none(); var t },
        Og = (e, t, n) => ((e, t, n) => e ? ((e, t) => Ag(t).orThunk((() => Rg(t))).orThunk((() => ((e, t) => dc(e, Ua.after(t)).fold((() => cc(e, Ua.before(t))), M.some))(e, t))))(t, n) : ((e, t) => Rg(t).orThunk((() => Ag(t))).orThunk((() => ((e, t) => { const n = Ua.before(t.previousSibling ? t.previousSibling : t.parentNode); return cc(e, n).fold((() => dc(e, Ua.after(t))), M.some) })(e, t))))(t, n))(e, t, n).map(O(Ng, n)),
        Tg = (e, t, n) => { n.fold((() => { e.focus() }), (n => { e.selection.setRng(n.toRange(), t) })) },
        Bg = (e, t) => t && we(e.schema.getBlockElements(), Mt(t)),
        Dg = e => { if (qr(e)) { const t = dn('<br data-mce-bogus="1">'); return eo(e), Jn(e, t), M.some(Ua.before(t.dom)) } return M.none() },
        Lg = (e, t, n, o = !0) => {
            const r = Og(t, e.getBody(), n.dom),
                s = Ho(n, O(Bg, e), (a = e.getBody(), e => e.dom === a));
            var a;
            const i = ((e, t, n) => {
                const o = kn(e).filter(zt),
                    r = Sn(e).filter(zt);
                return to(e), (s = o, a = r, i = t, l = (e, t, o) => {
                    const r = e.dom,
                        s = t.dom,
                        a = r.data.length;
                    return Eg(r, s, n), o.container() === s ? Ua(r, a) : o
                }, s.isSome() && a.isSome() && i.isSome() ? M.some(l(s.getOrDie(), a.getOrDie(), i.getOrDie())) : M.none()).orThunk((() => (n && (o.each((e => _g(e.dom, e.dom.length))), r.each((e => Sg(e.dom, 0)))), t)));
                var s, a, i, l
            })(n, r, ((e, t) => we(e.schema.getTextInlineElements(), Mt(t)))(e, n));
            e.dom.isEmpty(e.getBody()) ? (e.setContent(""), e.selection.setCursorLocation()) : s.bind(Dg).fold((() => { o && Tg(e, t, i) }), (n => { o && Tg(e, t, M.some(n)) }))
        },
        Pg = e => Xs(e, "td,th"),
        Mg = (e, t) => ({ start: e, end: t }),
        Ig = ci([{ singleCellTable: ["rng", "cell"] }, { fullTable: ["table"] }, { partialTable: ["cells", "outsideDetails"] }, { multiTable: ["startTableCells", "endTableCells", "betweenRng"] }]),
        Fg = (e, t) => Ko(mn(e), "td,th", t),
        Ug = e => !bn(e.start, e.end),
        zg = (e, t) => bu(e.start, t).bind((n => bu(e.end, t).bind((e => Pt(bn(n, e), n))))),
        jg = e => t => zg(t, e).map((e => ((e, t, n) => ({ rng: e, table: t, cells: n }))(t, e, Pg(e)))),
        Vg = (e, t, n, o) => {
            if (n.collapsed || !e.forall(Ug)) return M.none();
            if (t.isSameTable) { const t = e.bind(jg(o)); return M.some({ start: t, end: t }) } {
                const e = Fg(n.startContainer, o),
                    t = Fg(n.endContainer, o),
                    r = e.bind((e => t => bu(t, e).bind((e => le(Pg(e)).map((e => Mg(t, e))))))(o)).bind(jg(o)),
                    s = t.bind((e => t => bu(t, e).bind((e => ie(Pg(e)).map((e => Mg(e, t))))))(o)).bind(jg(o));
                return M.some({ start: r, end: s })
            }
        },
        Hg = (e, t) => J(e, (e => bn(e, t))),
        $g = e => Lt(Hg(e.cells, e.rng.start), Hg(e.cells, e.rng.end), ((t, n) => e.cells.slice(t, n + 1))),
        qg = (e, t) => { const { startTable: n, endTable: o } = t, r = e.cloneRange(); return n.each((e => r.setStartAfter(e.dom))), o.each((e => r.setEndBefore(e.dom))), r },
        Wg = (e, t) => {
            const n = (e => t => bn(e, t))(e),
                o = ((e, t) => {
                    const n = Fg(e.startContainer, t),
                        o = Fg(e.endContainer, t);
                    return Lt(n, o, Mg)
                })(t, n),
                r = ((e, t) => {
                    const n = e => bu(mn(e), t),
                        o = n(e.startContainer),
                        r = n(e.endContainer),
                        s = o.isSome(),
                        a = r.isSome(),
                        i = Lt(o, r, bn).getOr(!1);
                    return { startTable: o, endTable: r, isStartInTable: s, isEndInTable: a, isSameTable: i, isMultiTable: !i && s && a }
                })(t, n);
            return ((e, t, n) => e.exists((e => ((e, t) => !Ug(e) && zg(e, t).exists((e => { const t = e.dom.rows; return 1 === t.length && 1 === t[0].cells.length })))(e, n) && Cu(e.start, t))))(o, t, n) ? o.map((e => Ig.singleCellTable(t, e.start))) : r.isMultiTable ? ((e, t, n, o) => Vg(e, t, n, o).bind((({ start: e, end: o }) => {
                const r = e.bind($g).getOr([]),
                    s = o.bind($g).getOr([]);
                if (r.length > 0 && s.length > 0) { const e = qg(n, t); return M.some(Ig.multiTable(r, s, e)) }
                return M.none()
            })))(o, r, t, n) : ((e, t, n, o) => Vg(e, t, n, o).bind((({ start: e, end: t }) => e.or(t))).bind((e => { const { isSameTable: o } = t, r = $g(e).getOr([]); if (o && e.cells.length === r.length) return M.some(Ig.fullTable(e.table)); if (r.length > 0) { if (o) return M.some(Ig.partialTable(r, M.none())); { const e = qg(n, t); return M.some(Ig.partialTable(r, M.some({...t, rng: e }))) } } return M.none() })))(o, r, t, n)
        },
        Kg = e => { var t; return (8 === It(t = e) || "#comment" === Mt(t) ? kn(e) : On(e)).bind(Kg).orThunk((() => M.some(e))) },
        Gg = e => $(e, (e => { Yt(e, "contenteditable"), Gf(e) })),
        Yg = (e, t, n, o) => {
            const r = n.cloneRange();
            o ? (r.setStart(n.startContainer, n.startOffset), r.setEndAfter(t.dom.lastChild)) : (r.setStartBefore(t.dom.firstChild), r.setEnd(n.endContainer, n.endOffset)), Zg(e, r, t, !1).each((e => e()))
        },
        Xg = e => {
            const t = hu(e),
                n = mn(e.selection.getNode());
            Io(n.dom) && qr(n) ? e.selection.setCursorLocation(n.dom, 0) : e.selection.collapse(!0), t.length > 1 && V(t, (e => bn(e, n))) && $t(n, "data-mce-selected", "1")
        },
        Qg = (e, t, n) => M.some((() => {
            const o = e.selection.getRng(),
                r = n.bind((({ rng: n, isStartInTable: r }) => {
                    const s = ((e, t) => M.from(e.dom.getParent(t, e.dom.isBlock)).map(mn))(e, r ? n.endContainer : n.startContainer);
                    n.deleteContents(), ((e, t, n) => { n.each((n => { t ? to(n) : (Gf(n), e.selection.setCursorLocation(n.dom, 0)) })) })(e, r, s.filter(qr));
                    const a = r ? t[0] : t[t.length - 1];
                    return Yg(e, a, o, r), qr(a) ? M.none() : M.some(r ? t.slice(1) : t.slice(0, -1))
                })).getOr(t);
            Gg(r), Xg(e)
        })),
        Jg = (e, t, n, o) => M.some((() => {
            const r = e.selection.getRng(),
                s = t[0],
                a = n[n.length - 1];
            Yg(e, s, r, !0), Yg(e, a, r, !1);
            const i = qr(s) ? t : t.slice(1),
                l = qr(a) ? n : n.slice(0, -1);
            Gg(i.concat(l)), o.deleteContents(), Xg(e)
        })),
        Zg = (e, t, n, o = !0) => M.some((() => {
            t.deleteContents();
            const r = Kg(n).getOr(n),
                s = mn(e.dom.getParent(r.dom, e.dom.isBlock));
            if (qr(s) && (Gf(s), o && e.selection.setCursorLocation(s.dom, 0)), !bn(n, s)) {
                const e = Dt(wn(s), n) ? [] : wn(a = s).map(Nn).map((e => K(e, (e => !bn(a, e))))).getOr([]);
                $(e.concat(Nn(n)), (e => { bn(e, s) || vn(e, s) || !qr(e) || to(e) }))
            }
            var a
        })),
        ep = (e, t) => M.some((() => Lg(e, !1, t))),
        tp = (e, t) => Q(Qf(t, e), ar),
        np = (e, t) => Q(Qf(t, e), ("caption", e => Ut(e) && "caption" === Mt(e))),
        op = (e, t) => M.some((() => { Gf(t), e.selection.setCursorLocation(t.dom, 0) })),
        rp = (e, t) => e ? $f(t) : qf(t),
        sp = (e, t, n) => { const o = mn(e.getBody()); return np(o, n).fold((() => ((e, t, n, o) => { const r = Ua.fromRangeStart(e.selection.getRng()); return tp(n, o).bind((o => qr(o) ? op(e, o) : ((e, t, n, o, r) => ac(n, e.getBody(), r).bind((e => tp(t, mn(e.getNode())).bind((e => bn(e, o) ? M.none() : M.some(S))))))(e, n, t, o, r))) })(e, t, o, n).orThunk((() => Pt(((e, t) => { const n = Ua.fromRangeStart(e.selection.getRng()); return rp(t, n) || sc(t, e.getBody(), n).exists((e => rp(t, e))) })(e, t), S)))), (n => ((e, t, n, o) => { const r = Ua.fromRangeStart(e.selection.getRng()); return qr(o) ? op(e, o) : ((e, t, n, o, r) => ac(n, e.getBody(), r).fold((() => M.some(S)), (s => ((e, t, n, o) => uc(e.dom).bind((r => mc(e.dom).map((e => t ? n.isEqual(r) && o.isEqual(e) : n.isEqual(e) && o.isEqual(r))))).getOr(!0))(o, n, r, s) ? ((e, t) => op(e, t))(e, o) : ((e, t, n) => np(e, mn(n.getNode())).fold((() => M.some(S)), (e => Pt(!bn(e, t), S))))(t, o, s))))(e, n, t, o, r) })(e, t, o, n))) },
        ap = (e, t) => {
            const n = mn(e.selection.getStart(!0)),
                o = hu(e);
            return e.selection.isCollapsed() && 0 === o.length ? sp(e, t, n) : ((e, t, n) => {
                const o = mn(e.getBody()),
                    r = e.selection.getRng();
                return 0 !== n.length ? Qg(e, n, M.none()) : ((e, t, n, o) => np(t, o).fold((() => ((e, t, n) => Wg(t, n).bind((t => t.fold(O(Zg, e), O(ep, e), O(Qg, e), O(Jg, e)))))(e, t, n)), (t => ((e, t) => op(e, t))(e, t))))(e, o, r, t)
            })(e, n, o)
        },
        ip = (e, t) => {
            for (; t && t !== e;) {
                if (Po(t) || Mo(t)) return t;
                t = t.parentNode
            }
            return null
        },
        lp = (e, t) => { t(e), e.firstChild && lp(e.firstChild, t), e.next && lp(e.next, t) },
        dp = (e, t, n, o) => {
            const r = n.name;
            for (let t = 0, s = e.length; t < s; t++) {
                const s = e[t];
                if (s.name === r) {
                    const e = o.nodes[r];
                    e ? e.nodes.push(n) : o.nodes[r] = { filter: s, nodes: [n] }
                }
            }
            if (n.attributes)
                for (let e = 0, r = t.length; e < r; e++) {
                    const r = t[e],
                        s = r.name;
                    if (s in n.attributes.map) {
                        const e = o.attributes[s];
                        e ? e.nodes.push(n) : o.attributes[s] = { filter: r, nodes: [n] }
                    }
                }
        },
        cp = (e, t) => {
            const n = e => {
                fe(e, (e => {
                    const n = K(e.nodes, (e => C(e.parent)));
                    $(e.filter.callbacks, (o => { o(n, e.filter.name, t) }))
                }))
            };
            n(e.nodes), n(e.attributes)
        },
        up = (e, t, n, o = {}) => {
            const r = ((e, t, n) => { const o = { nodes: {}, attributes: {} }; return n.firstChild && lp(n.firstChild, (n => { dp(e, t, n, o) })), o })(e, t, n);
            cp(r, o)
        },
        mp = (e, t, n, o) => { t.insert && n[o.name] ? o.empty().append(new yf("br", 1)) : o.empty().append(new yf("#text", 3)).value = dr },
        fp = (e, t) => e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t,
        gp = (e, t, n, o) => o.isEmpty(t, n, (t => ((e, t) => { const n = e.getElementRule(t.name); return n && n.paddEmpty })(e, t))),
        pp = (e, t, n = e.parent) => {
            if (t.getSpecialElements()[e.name]) e.empty().remove();
            else {
                const o = e.children();
                for (const e of o) t.isValidChild(n.name, e.name) || pp(e, t, n);
                e.unwrap()
            }
        },
        hp = (e, t, n = S) => {
            const o = t.getTextBlockElements(),
                r = t.getNonEmptyElements(),
                s = t.getWhitespaceElements(),
                a = Bt.makeMap("tr,td,th,tbody,thead,tfoot,table"),
                i = new Set;
            for (let l = 0; l < e.length; l++) {
                const d = e[l];
                let c, u, m;
                if (!d.parent || i.has(d)) continue;
                if (o[d.name] && "li" === d.parent.name) {
                    let e = d.next;
                    for (; e && o[e.name];) e.name = "li", i.add(e), d.parent.insert(e, d.parent), e = e.next;
                    d.unwrap();
                    continue
                }
                const f = [d];
                for (c = d.parent; c && !t.isValidChild(c.name, d.name) && !a[c.name]; c = c.parent) f.push(c);
                if (c && f.length > 1)
                    if (t.isValidChild(c.name, d.name)) {
                        f.reverse(), u = f[0].clone(), n(u);
                        let e = u;
                        for (let o = 0; o < f.length - 1; o++) {
                            t.isValidChild(e.name, f[o].name) ? (m = f[o].clone(), n(m), e.append(m)) : m = e;
                            for (let e = f[o].firstChild; e && e !== f[o + 1];) {
                                const t = e.next;
                                m.append(e), e = t
                            }
                            e = m
                        }
                        gp(t, r, s, u) ? c.insert(d, f[0], !0) : (c.insert(u, f[0], !0), c.insert(d, u)), c = f[0], (gp(t, r, s, c) || fp(c, "br")) && c.empty().remove()
                    } else pp(d, t);
                else if (d.parent) {
                    if ("li" === d.name) {
                        let e = d.prev;
                        if (e && ("ul" === e.name || "ol" === e.name)) { e.append(d); continue }
                        if (e = d.next, e && ("ul" === e.name || "ol" === e.name)) { e.insert(d, e.firstChild, !0); continue }
                        const t = new yf("ul", 1);
                        n(t), d.wrap(t);
                        continue
                    }
                    if (t.isValidChild(d.parent.name, "div") && t.isValidChild("div", d.name)) {
                        const e = new yf("div", 1);
                        n(e), d.wrap(e)
                    } else pp(d, t)
                }
            }
        },
        bp = e => e.collapsed ? e : (e => {
            const t = Ua.fromRangeStart(e),
                n = Ua.fromRangeEnd(e),
                o = e.commonAncestorContainer;
            return sc(!1, o, n).map((r => !Td(t, n, o) && Td(t, r, o) ? ((e, t, n, o) => { const r = document.createRange(); return r.setStart(e, t), r.setEnd(n, o), r })(t.container(), t.offset(), r.container(), r.offset()) : e)).getOr(e)
        })(e),
        vp = (e, t) => {
            let n = t.firstChild,
                o = t.lastChild;
            return n && "meta" === n.name && (n = n.next), o && "mce_marker" === o.attr("id") && (o = o.prev), ((e, t) => { const n = e.getNonEmptyElements(); return t && (t.isEmpty(n) || ((e, t) => e.getBlockElements()[t.name] && (e => e.firstChild && e.firstChild === e.lastChild)(t) && (e => "br" === e.name || e.value === dr)(t.firstChild))(e, t)) })(e, o) && (o = o.prev), !(!n || n !== o || "ul" !== n.name && "ol" !== n.name)
        },
        yp = e => { return e.length > 0 && (!(n = e[e.length - 1]).firstChild || (t = n) && t.firstChild && t.firstChild === t.lastChild && (e => e.data === dr || Do(e))(t.firstChild)) ? e.slice(0, -1) : e; var t, n },
        Cp = (e, t) => { const n = e.getParent(t, e.isBlock); return n && "LI" === n.nodeName ? n : null },
        xp = (e, t) => {
            const n = Ua.after(e),
                o = tc(t).prev(n);
            return o ? o.toRange() : null
        },
        wp = (e, t, n, o) => {
            const r = ((e, t, n) => {
                    const o = t.serialize(n);
                    return (e => {
                        const t = e.firstChild,
                            n = e.lastChild;
                        return t && "META" === t.nodeName && t.parentNode.removeChild(t), n && "mce_marker" === n.id && n.parentNode.removeChild(n), e
                    })(e.createFragment(o))
                })(t, e, o),
                s = Cp(t, n.startContainer),
                a = yp((i = r.firstChild, K(i.childNodes, (e => "LI" === e.nodeName))));
            var i;
            const l = t.getRoot(),
                d = e => {
                    const o = Ua.fromRangeStart(n),
                        r = tc(t.getRoot()),
                        a = 1 === e ? r.prev(o) : r.next(o);
                    return !a || Cp(t, a.getNode()) !== s
                };
            return d(1) ? ((e, t, n) => {
                const o = e.parentNode;
                return Bt.each(t, (t => { o.insertBefore(t, e) })), ((e, t) => {
                    const n = Ua.before(e),
                        o = tc(t).next(n);
                    return o ? o.toRange() : null
                })(e, n)
            })(s, a, l) : d(2) ? ((e, t, n, o) => (o.insertAfter(t.reverse(), e), xp(t[0], n)))(s, a, l, t) : ((e, t, n, o) => {
                const r = ((e, t) => {
                        const n = t.cloneRange(),
                            o = t.cloneRange();
                        return n.setStartBefore(e), o.setEndAfter(e), [n.cloneContents(), o.cloneContents()]
                    })(e, o),
                    s = e.parentNode;
                return s.insertBefore(r[0], e), Bt.each(t, (t => { s.insertBefore(t, e) })), s.insertBefore(r[1], e), s.removeChild(e), xp(t[t.length - 1], n)
            })(s, a, l, n)
        },
        kp = Io,
        Sp = (e, t, n) => {
            let o, r, s;
            const a = e.selection,
                i = e.dom,
                l = e.parser,
                d = n.merge,
                c = Rf({ validate: !0 }, e.schema),
                u = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>'; - 1 === t.indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, u), r = a.getRng();
            const m = r.startContainer || (r.parentElement ? r.parentElement() : null),
                f = e.getBody();
            m === f && a.isCollapsed() && i.isBlock(f.firstChild) && ((e, t) => t && !e.schema.getVoidElements()[t.nodeName])(e, f.firstChild) && i.isEmpty(f.firstChild) && (r = i.createRng(), r.setStart(f.firstChild, 0), r.setEnd(f.firstChild, 0), a.setRng(r)), a.isCollapsed() || (e => {
                const t = e.dom,
                    n = bp(e.selection.getRng());
                e.selection.setRng(n);
                const o = t.getParent(n.startContainer, kp);
                ((e, t, n) => null !== n && n === e.getParent(t.endContainer, kp) && Cu(mn(n), t))(t, n, o) ? Zg(e, n, mn(o)): e.getDoc().execCommand("Delete", !1, null)
            })(e), o = a.getNode();
            const g = { context: o.nodeName.toLowerCase(), data: n.data, insert: !0 },
                p = l.parse(t, g);
            if (!0 === n.paste && vp(e.schema, p) && ((e, t) => !!Cp(e, t))(i, o)) return r = wp(c, i, a.getRng(), p), a.setRng(r), t;
            if ((e => { let t = e; for (; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1") })(p), s = p.lastChild, "mce_marker" === s.attr("id")) {
                const t = s;
                for (s = s.prev; s; s = s.walk(!0))
                    if (3 === s.type || !i.isBlock(s.name)) { e.schema.isValidChild(s.parent.name, "span") && s.parent.insert(t, s, "br" === s.name); break }
            }
            if (e._selectionOverrides.showBlockCaretContainer(o), g.invalid) {
                e.selection.setContent(u), o = a.getNode();
                const n = e.getBody();
                for (9 === o.nodeType ? o = s = n : s = o; s !== n;) o = s, s = s.parentNode;
                t = o === n ? n.innerHTML : i.getOuterHTML(o);
                const r = l.parse(t);
                for (let e = r; e; e = e.walk())
                    if ("mce_marker" === e.attr("id")) { e.replace(p); break }
                const d = p.children(),
                    m = p.parent.name;
                p.unwrap();
                const f = K(d, (t => !e.schema.isValidChild(m, t.name)));
                hp(f, e.schema), up(l.getNodeFilters(), l.getAttributeFilters(), r), t = c.serialize(r), o === n ? i.setHTML(n, t) : i.setOuterHTML(o, t)
            } else t = c.serialize(p), ((e, t, n) => {
                if ("all" === n.getAttribute("data-mce-bogus")) n.parentNode.insertBefore(e.dom.createFragment(t), n);
                else {
                    const o = n.firstChild,
                        r = n.lastChild;
                    !o || o === r && "BR" === o.nodeName ? e.dom.setHTML(n, t) : e.selection.setContent(t, { no_events: !0 })
                }
            })(e, t, o);
            var h;
            return ((e, t) => {
                const n = e.schema.getTextInlineElements(),
                    o = e.dom;
                if (t) {
                    const t = e.getBody(),
                        r = _f(o);
                    Bt.each(o.select("*[data-mce-fragment]"), (e => {
                        if (C(n[e.nodeName.toLowerCase()]) && ((e, t) => te(Tf(e, t), (e => !(e => Af.has(e))(e))))(o, e))
                            for (let n = e.parentNode; C(n) && n !== t && !Bf(o, e, n); n = n.parentNode)
                                if (r.compare(n, e)) { o.remove(e, !0); break }
                    }))
                }
            })(e, d), ((e, t) => {
                let n;
                const o = e.dom,
                    r = e.selection;
                if (!t) return;
                r.scrollIntoView(t);
                const s = ip(e.getBody(), t);
                if ("false" === o.getContentEditable(s)) return o.remove(t), void r.select(s);
                let a = o.createRng();
                const i = t.previousSibling;
                if (No(i)) {
                    a.setStart(i, i.nodeValue.length);
                    const e = t.nextSibling;
                    No(e) && (i.appendData(e.data), e.parentNode.removeChild(e))
                } else a.setStartBefore(t), a.setEndBefore(t);
                const l = o.getParent(t, o.isBlock);
                o.remove(t), l && o.isEmpty(l) && (eo(mn(l)), a.setStart(l, 0), a.setEnd(l, 0), kp(l) || (e => !!e.getAttribute("data-mce-fragment"))(l) || !(n = (t => { let n = Ua.fromRangeStart(t); if (n = tc(e.getBody()).next(n), n) return n.toRange() })(a)) ? o.add(l, o.create("br", { "data-mce-bogus": "1" })) : (a = n, o.remove(l))), r.setRng(a)
            })(e, i.get("mce_marker")), h = e.getBody(), Bt.each(h.getElementsByTagName("*"), (e => { e.removeAttribute("data-mce-fragment") })), ((e, t) => { M.from(e.getParent(t, "td,th")).map(mn).each(Yf) })(i, a.getStart()), t
        },
        _p = e => e instanceof yf,
        Ep = (e, t, n) => {
            e.dom.setHTML(e.getBody(), t), !0 !== n && (e => {
                nf(e) && uc(e.getBody()).each((t => {
                    const n = t.getNode(),
                        o = So(n) ? uc(n).getOr(t) : t;
                    e.selection.setRng(o.toRange())
                }))
            })(e)
        },
        Np = (e, t) => ((e, t) => { const n = e.dom; return n.parentNode ? ((e, t) => Q(e.dom.childNodes, (e => t(mn(e)))).map(mn))(mn(n.parentNode), (n => !bn(e, n) && t(n))) : M.none() })(e, t).isSome(),
        Rp = e => x(e) ? e : L,
        Ap = (e, t, n) => {
            const o = t(e),
                r = Rp(n);
            return o.orThunk((() => r(e) ? M.none() : ((e, t, n) => {
                let o = e.dom;
                const r = Rp(n);
                for (; o.parentNode;) {
                    o = o.parentNode;
                    const e = mn(o),
                        n = t(e);
                    if (n.isSome()) return n;
                    if (r(e)) break
                }
                return M.none()
            })(e, t, r)))
        },
        Op = Hc,
        Tp = (e, t, n) => {
            const o = e.formatter.get(n);
            if (o)
                for (let n = 0; n < o.length; n++) { const r = o[n]; if (Yc(r) && !1 === r.inherit && e.dom.is(t, r.selector)) return !0 }
            return !1
        },
        Bp = (e, t, n, o, r) => { const s = e.dom.getRoot(); return t !== s && (t = e.dom.getParent(t, (t => !!Tp(e, t, n) || t.parentNode === s || !!Pp(e, t, n, o, !0))), !!Pp(e, t, n, o, r)) },
        Dp = (e, t, n) => !(!Xc(n) || !Op(t, n.inline)) || !(!Gc(n) || !Op(t, n.block)) || !!Yc(n) && yo(t) && e.is(t, n.selector),
        Lp = (e, t, n, o, r, s) => {
            const a = n[o];
            if (x(n.onmatch)) return n.onmatch(t, n, o);
            if (a)
                if (v(a.length)) {
                    for (const i in a)
                        if (we(a, i)) {
                            const l = "attributes" === o ? e.getAttrib(t, i) : qc(e, t, i),
                                d = Vc(a[i], s),
                                c = y(l) || Ke(l);
                            if (c && y(d)) continue;
                            if (r && c && !n.exact) return !1;
                            if ((!r || n.exact) && !Op(l, $c(d, i))) return !1
                        }
                } else
                    for (let n = 0; n < a.length; n++)
                        if ("attributes" === o ? e.getAttrib(t, a[n]) : qc(e, t, a[n])) return !0;
            return !0
        },
        Pp = (e, t, n, o, r) => {
            const s = e.formatter.get(n),
                a = e.dom;
            if (s && t)
                for (let n = 0; n < s.length; n++) {
                    const i = s[n];
                    if (Dp(e.dom, t, i) && Lp(a, t, i, "attributes", r, o) && Lp(a, t, i, "styles", r, o)) {
                        const n = i.classes;
                        if (n)
                            for (let r = 0; r < n.length; r++)
                                if (!e.dom.hasClass(t, Vc(n[r], o))) return;
                        return i
                    }
                }
        },
        Mp = (e, t, n, o, r) => { if (o) return Bp(e, o, t, n, r); if (o = e.selection.getNode(), Bp(e, o, t, n, r)) return !0; const s = e.selection.getStart(); return !(s === o || !Bp(e, s, t, n, r)) },
        Ip = ur,
        Fp = "_mce_caret",
        Up = e => (e => {
            const t = [];
            for (; e;) {
                if (3 === e.nodeType && e.nodeValue !== Ip || e.childNodes.length > 1) return [];
                1 === e.nodeType && t.push(e), e = e.firstChild
            }
            return t
        })(e).length > 0,
        zp = e => {
            if (e) {
                const t = new Xo(e, e);
                for (e = t.current(); e; e = t.next())
                    if (No(e)) return e
            }
            return null
        },
        jp = e => { const t = cn("span"); return qt(t, { id: Fp, "data-mce-bogus": "1", "data-mce-type": "format-caret" }), e && Jn(t, un(Ip)), t },
        Vp = (e, t, n = !0) => {
            const o = e.dom,
                r = e.selection;
            if (Up(t)) Lg(e, !1, mn(t), n);
            else {
                const e = r.getRng(),
                    n = o.getParent(t, o.isBlock),
                    s = e.startContainer,
                    a = e.startOffset,
                    i = e.endContainer,
                    l = e.endOffset,
                    d = (e => { const t = zp(e); return t && t.nodeValue.charAt(0) === Ip && t.deleteData(0, 1), t })(t);
                o.remove(t, !0), s === d && a > 0 && e.setStart(d, a - 1), i === d && l > 0 && e.setEnd(d, l - 1), n && o.isEmpty(n) && Gf(mn(n)), r.setRng(e)
            }
        },
        Hp = (e, t, n = !0) => {
            const o = e.dom,
                r = e.selection;
            if (t) Vp(e, t, n);
            else if (!(t = pc(e.getBody(), r.getStart())))
                for (; t = o.get(Fp);) Vp(e, t, !1)
        },
        $p = (e, t) => (e.appendChild(t), t),
        qp = (e, t) => { const n = G(e, ((e, t) => $p(e, t.cloneNode(!1))), t); return $p(n, n.ownerDocument.createTextNode(Ip)) },
        Wp = (e, t, n, o) => {
            const a = e.dom,
                i = e.selection;
            let l, d, c;
            const u = [],
                m = i.getRng(),
                f = m.startContainer,
                g = m.startOffset;
            for (d = f, 3 === f.nodeType && (g !== f.nodeValue.length && (l = !0), d = d.parentNode); d;) {
                if (Pp(e, d, t, n, o)) { c = d; break }
                d.nextSibling && (l = !0), u.push(d), d = d.parentNode
            }
            if (c)
                if (l) {
                    const r = i.getBookmark();
                    m.collapse(!0);
                    let s = mu(e, m, e.formatter.get(t), !0);
                    s = gm(s), e.formatter.remove(t, n, s, o), i.moveToBookmark(r)
                } else {
                    const l = pc(e.getBody(), c),
                        d = jp(!1).dom;
                    ((e, t, n) => {
                        const o = e.dom,
                            r = o.getParent(n, O(Uc, e));
                        r && o.isEmpty(r) ? n.parentNode.replaceChild(t, n) : ((e => {
                            const t = Xs(e, "br"),
                                n = K((e => { const t = []; let n = e.dom; for (; n;) t.push(mn(n)), n = n.lastChild; return t })(e).slice(-1), tr);
                            t.length === n.length && $(n, to)
                        })(mn(n)), o.isEmpty(n) ? n.parentNode.replaceChild(t, n) : o.insertAfter(t, n))
                    })(e, d, null !== l ? l : c);
                    const m = ((e, t, n, o, a, i) => {
                            const l = e.formatter,
                                d = e.dom,
                                c = K(ue(l.get()), (e => e !== o && !Ue(e, "removeformat"))),
                                u = ((e, t, n) => Y(n, ((n, o) => { const r = ((e, t) => V(e.formatter.get(t), (e => { const t = e => e.length > 1 && "%" === e.charAt(0); return V(["styles", "attributes"], (n => xe(e, n).exists((e => { const n = p(e) ? e : Ce(e); return V(n, t) })))) })))(e, o); return e.formatter.matchNode(t, o, {}, r) ? n.concat([o]) : n }), []))(e, n, c);
                            if (K(u, (t => !((e, t, n) => {
                                    const o = ["inline", "block", "selector", "attributes", "styles", "classes"],
                                        a = e => ve(e, ((e, t) => V(o, (e => e === t))));
                                    return V(e.formatter.get(t), (t => { const o = a(t); return V(e.formatter.get(n), (e => { const t = a(e); return ((e, t, n = s) => r(n).eq(e, t))(o, t) })) }))
                                })(e, t, o))).length > 0) { const e = n.cloneNode(!1); return d.add(t, e), l.remove(o, a, e, i), d.remove(e), M.some(e) }
                            return M.none()
                        })(e, d, c, t, n, o),
                        f = qp(u.concat(m.toArray()), d);
                    Vp(e, l, !1), i.setCursorLocation(f, 1), a.isEmpty(c) && a.remove(c)
                }
        },
        Kp = (e, t) => { const n = e.schema.getTextInlineElements(); return we(n, Mt(t)) && !gc(t.dom) && !ko(t.dom) },
        Gp = {},
        Yp = Re,
        Xp = Ee;
    Gp.pre || (Gp.pre = []), Gp.pre.push((e => {
        const t = e.selection.getRng();
        let n;
        const o = e => r(e.previousSibling) && -1 !== Ae(n, e.previousSibling),
            r = Co(["pre"]);
        t.collapsed || (n = e.selection.getSelectedBlocks(), Xp(Yp(Yp(n, r), o), (e => {
            ((e, t) => {
                const n = mn(t),
                    o = Cn(n).dom;
                to(n), Zn(mn(e), [cn("br", o), cn("br", o), ...Nn(n)])
            })(e.previousSibling, e)
        })))
    }));
    const Qp = Bt.each,
        Jp = e => yo(e) && !_c(e) && !gc(e) && !ko(e),
        Zp = (e, t) => { for (let n = e; n; n = n[t]) { if (No(n) && We(n.data)) return e; if (yo(n) && !_c(n)) return n } return e },
        eh = (e, t, n) => {
            const o = _f(e);
            if (t && n && (t = Zp(t, "previousSibling"), n = Zp(n, "nextSibling"), o.compare(t, n))) {
                for (let e = t.nextSibling; e && e !== n;) {
                    const n = e;
                    e = e.nextSibling, t.appendChild(n)
                }
                return e.remove(n), Bt.each(Bt.grep(n.childNodes), (e => { t.appendChild(e) })), t
            }
            return n
        },
        th = (e, t, n, o) => {
            if (o && !1 !== t.merge_siblings) {
                const t = eh(e, Fc(o), o);
                eh(e, t, Fc(t, !0))
            }
        },
        nh = (e, t, n) => { Qp(e.childNodes, (e => { Jp(e) && (t(e) && n(e), e.hasChildNodes() && nh(e, t, n)) })) },
        oh = (e, t) => n => !(!n || !qc(e, n, t)),
        rh = (e, t, n) => o => { e.setStyle(o, t, n), "" === o.getAttribute("style") && o.removeAttribute("style"), ((e, t) => { "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0) })(e, o) },
        sh = ci([{ keep: [] }, { rename: ["name"] }, { removed: [] }]),
        ah = /^(src|href|style)$/,
        ih = Bt.each,
        lh = Hc,
        dh = (e, t, n) => e.isChildOf(t, n) && t !== n && !e.isBlock(n),
        ch = (e, t, n) => {
            let o = t[n ? "startContainer" : "endContainer"],
                r = t[n ? "startOffset" : "endOffset"];
            if (yo(o)) { const e = o.childNodes.length - 1;!n && r && r--, o = o.childNodes[r > e ? e : r] }
            return No(o) && n && r >= o.nodeValue.length && (o = new Xo(o, e.getBody()).next() || o), No(o) && !n && 0 === r && (o = new Xo(o, e.getBody()).prev() || o), o
        },
        uh = (e, t) => { const n = t ? "firstChild" : "lastChild"; if ((e => /^(TR|TH|TD)$/.test(e.nodeName))(e) && e[n]) { const t = e[n]; return "TR" === e.nodeName && t[n] || t } return e },
        mh = (e, t, n, o) => { const r = e.create(n, o); return t.parentNode.insertBefore(r, t), r.appendChild(t), r },
        fh = (e, t, n, o, r) => {
            const s = mn(t),
                a = mn(e.create(o, r)),
                i = n ? En(s) : _n(s);
            return Zn(a, i), n ? (Yn(s, a), Qn(a, s)) : (Xn(s, a), Jn(a, s)), a.dom
        },
        gh = (e, t, n, o, r) => {
            let s;
            const a = e.dom;
            if (!Dp(a, o, t) && !((e, t) => t.links && "A" === e.nodeName)(o, t)) return sh.keep();
            const i = o;
            if (Xc(t) && "all" === t.remove && p(t.preserve_attributes)) { const e = K(a.getAttribs(i), (e => j(t.preserve_attributes, e.name.toLowerCase()))); if (a.removeAllAttribs(i), $(e, (e => a.setAttrib(i, e.name, e.value))), e.length > 0) return sh.rename("span") }
            if ("all" !== t.remove) { ih(t.styles, ((e, o) => { e = $c(Vc(e, n), o + ""), w(o) && (o = e, r = null), (t.remove_similar || !r || lh(qc(a, r, o), e)) && a.setStyle(i, o, ""), s = !0 })), s && "" === a.getAttrib(i, "style") && (i.removeAttribute("style"), i.removeAttribute("data-mce-style")), ih(t.attributes, ((e, o) => { let s; if (e = Vc(e, n), w(o) && (o = e, r = null), t.remove_similar || !r || lh(a.getAttrib(r, o), e)) { if ("class" === o && (e = a.getAttrib(i, o)) && (s = "", $(e.split(/\s+/), (e => { /mce\-\w+/.test(e) && (s += (s ? " " : "") + e) })), s)) return void a.setAttrib(i, o, s); if (ah.test(o) && i.removeAttribute("data-mce-" + o), "style" === o && Co(["li"])(i) && "none" === a.getStyle(i, "list-style-type")) return i.removeAttribute(o), void a.setStyle(i, "list-style-type", "none"); "class" === o && i.removeAttribute("className"), i.removeAttribute(o) } })), ih(t.classes, (e => { e = Vc(e, n), r && !a.hasClass(r, e) || a.removeClass(i, e) })); const e = a.getAttribs(i); for (let t = 0; t < e.length; t++) { const n = e[t].nodeName; if (0 !== n.indexOf("_") && 0 !== n.indexOf("data-")) return sh.keep() } }
            return "none" !== t.remove ? (((e, t, n) => {
                const o = t.parentNode;
                let r;
                const s = e.dom,
                    a = Ti(e);
                Gc(n) && o === s.getRoot() && (n.list_block && lh(t, n.list_block) || $(de(t.childNodes), (t => { zc(e, a, t.nodeName.toLowerCase()) ? r ? r.appendChild(t) : (r = mh(s, t, a), s.setAttribs(r, Bi(e))) : r = null }))), (e => Yc(e) && Xc(e) && Dt(xe(e, "mixed"), !0))(n) && !lh(n.inline, t) || s.remove(t, !0)
            })(e, i, t), sh.removed()) : sh.keep()
        },
        ph = (e, t, n, o, r) => gh(e, t, n, o, r).fold(L, (t => (e.dom.rename(o, t), !0)), P),
        hh = (e, t, n, o) => gh(e, t, n, o, o).fold(N(o), (t => (e.dom.createFragment().appendChild(o), e.dom.rename(o, t))), N(null)),
        bh = (e, t, n, o, r) => {
            const s = e.formatter.get(t),
                a = s[0];
            let i = !0;
            const l = e.dom,
                d = e.selection,
                c = o => {
                    const i = ((e, t, n, o, r) => {
                        let s;
                        return $(Kc(e.dom, t.parentNode).reverse(), (t => {
                            if (!s && "_start" !== t.id && "_end" !== t.id) {
                                const a = Pp(e, t, n, o, r);
                                a && !1 !== a.split && (s = t)
                            }
                        })), s
                    })(e, o, t, n, r);
                    return ((e, t, n, o, r, s, a, i) => {
                        let l, d, c;
                        const u = e.dom;
                        if (n) {
                            const s = n.parentNode;
                            for (let n = o.parentNode; n && n !== s; n = n.parentNode) {
                                l = u.clone(n, !1);
                                for (let n = 0; n < t.length && (l = hh(e, t[n], i, l), null !== l); n++);
                                l && (d && l.appendChild(d), c || (c = l), d = l)
                            }
                            a.mixed && u.isBlock(n) || (o = u.split(n, o)), d && (r.parentNode.insertBefore(d, r), c.appendChild(r), Xc(a) && th(u, a, 0, d))
                        }
                        return o
                    })(e, s, i, o, o, 0, a, n)
                },
                u = t => V(s, (o => ph(e, o, n, t, t))),
                m = t => {
                    let n = !0,
                        o = !1;
                    yo(t) && l.getContentEditable(t) && (n = i, i = "true" === l.getContentEditable(t), o = !0);
                    const r = de(t.childNodes);
                    if (i && !o) {
                        const e = u(t) || V(s, (e => Dp(l, t, e))),
                            n = t.parentNode;
                        !e && C(n) && Qc(a) && u(n)
                    }
                    if (a.deep && r.length) {
                        for (let e = 0; e < r.length; e++) m(r[e]);
                        o && (i = n)
                    }
                    $(["underline", "line-through", "overline"], (n => { yo(t) && e.dom.getStyle(t, "text-decoration") === n && t.parentNode && Wc(l, t.parentNode) === n && ph(e, { deep: !1, exact: !0, inline: "span", styles: { textDecoration: n } }, null, t) }))
                },
                f = e => { const t = l.get(e ? "_start" : "_end"); let n = t[e ? "firstChild" : "lastChild"]; return (e => _c(e) && yo(e) && ("_start" === e.id || "_end" === e.id))(n) && (n = n[e ? "firstChild" : "lastChild"]), No(n) && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling), l.remove(t, !0), n },
                g = t => {
                    let n, o, r = mu(e, t, s, t.collapsed);
                    if (a.split) {
                        if (r = gm(r), n = ch(e, r, !0), o = ch(e, r), n !== o) {
                            if (n = uh(n, !0), o = uh(o, !1), dh(l, n, o)) { const e = M.from(n.firstChild).getOr(n); return c(fh(l, e, !0, "span", { id: "_start", "data-mce-type": "bookmark" })), void f(!0) }
                            if (dh(l, o, n)) { const e = M.from(o.lastChild).getOr(o); return c(fh(l, e, !1, "span", { id: "_end", "data-mce-type": "bookmark" })), void f(!1) }
                            n = mh(l, n, "span", { id: "_start", "data-mce-type": "bookmark" }), o = mh(l, o, "span", { id: "_end", "data-mce-type": "bookmark" });
                            const e = l.createRng();
                            e.setStartAfter(n), e.setEndBefore(o), fu(l, e, (e => { $(e, (e => { _c(e) || _c(e.parentNode) || c(e) })) })), c(n), c(o), n = f(!0), o = f()
                        } else n = o = c(n);
                        r.startContainer = n.parentNode ? n.parentNode : n, r.startOffset = l.nodeIndex(n), r.endContainer = o.parentNode ? o.parentNode : o, r.endOffset = l.nodeIndex(o) + 1
                    }
                    fu(l, r, (e => { $(e, m) }))
                };
            if (o) {
                if (Mc(o)) {
                    const e = l.createRng();
                    e.setStartBefore(o), e.setEndAfter(o), g(e)
                } else g(o);
                Pu(e, t, o, n)
            } else if ("false" !== l.getContentEditable(d.getNode())) d.isCollapsed() && Xc(a) && !hu(e).length ? Wp(e, t, n, r) : (Su(d, !0, (() => { ku(e, g) })), Xc(a) && Mp(e, t, n, d.getStart()) && Ic(l, d, d.getRng()), e.nodeChanged()), Pu(e, t, o, n);
            else {
                o = d.getNode();
                for (let t = 0; t < s.length && (!s[t].ceFalseOverride || !ph(e, s[t], n, o, o)); t++);
                Pu(e, t, o, n)
            }
        },
        vh = Bt.each,
        yh = Bt.each,
        Ch = e => yo(e) && !_c(e) && !gc(e) && !ko(e),
        xh = (e, t, n, o) => {
            const r = e.formatter.get(t),
                s = r[0],
                a = !o && e.selection.isCollapsed(),
                i = e.dom,
                l = e.selection,
                d = (e, t = s) => {
                    if (x(t.onformat) && t.onformat(e, t, n, o), yh(t.styles, ((t, o) => { i.setStyle(e, o, Vc(t, n)) })), t.styles) {
                        const t = i.getAttrib(e, "style");
                        t && i.setAttrib(e, "data-mce-style", t)
                    }
                    yh(t.attributes, ((t, o) => { i.setAttrib(e, o, Vc(t, n)) })), yh(t.classes, (t => { t = Vc(t, n), i.hasClass(e, t) || i.addClass(e, t) }))
                },
                c = (e, t) => { let n = !1; return yh(e, (e => !!Yc(e) && (C(e.collapsed) && e.collapsed !== a ? void 0 : i.is(t, e.selector) && !gc(t) ? (d(t, e), n = !0, !1) : void 0))), n },
                u = e => { if (m(e)) { const t = i.create(e); return d(t), t } return null },
                f = (o, a, i) => {
                    const l = [];
                    let m = !0;
                    const f = s.inline || s.block,
                        g = u(f);
                    fu(o, a, (a => {
                        let u;
                        const p = a => {
                            let h = !1,
                                b = m;
                            const v = a.nodeName.toLowerCase(),
                                y = a.parentNode,
                                x = y.nodeName.toLowerCase();
                            if (yo(a) && o.getContentEditable(a) && (b = m, m = "true" === o.getContentEditable(a), h = !0), Do(a) && !((e, t, n, o) => {
                                    if (pl(e) && Xc(t)) {
                                        const t = {...e.schema.getTextBlockElements(), td: {}, th: {}, li: {}, dt: {}, dd: {}, figcaption: {}, caption: {}, details: {}, summary: {} },
                                            r = Np(mn(n), (e => gc(e.dom)));
                                        return ke(t, o) && qr(mn(n.parentNode), !1) && !r
                                    }
                                    return !1
                                })(e, s, a, x)) return u = null, void(Gc(s) && o.remove(a));
                            if (Gc(s) && s.wrapper && Pp(e, a, t, n)) u = null;
                            else { if (m && !h && Gc(s) && !s.wrapper && Uc(e, v) && zc(e, x, f)) { const e = o.rename(a, f); return d(e), l.push(e), void(u = null) } if (Yc(s)) { let e = c(r, a); if (!e && C(y) && Qc(s) && (e = c(r, y)), !Xc(s) || e) return void(u = null) }!m || h || !zc(e, f, v) || !zc(e, x, f) || !i && No(a) && mr(a.data) || gc(a) || Xc(s) && o.isBlock(a) ? (u = null, $(de(a.childNodes), p), h && (m = b), u = null) : (u || (u = o.clone(g, !1), a.parentNode.insertBefore(u, a), l.push(u)), u.appendChild(a)) }
                        };
                        $(a, p)
                    })), !0 === s.links && $(l, (e => {
                        const t = e => { "A" === e.nodeName && d(e, s), $(de(e.childNodes), t) };
                        t(e)
                    })), $(l, (a => {
                        const i = (e => {
                            let t = 0;
                            return $(e.childNodes, (e => {
                                (e => C(e) && No(e) && 0 === e.length)(e) || _c(e) || t++
                            })), t
                        })(a);
                        !(l.length > 1) && o.isBlock(a) || 0 !== i ? (Xc(s) || Gc(s) && s.wrapper) && (s.exact || 1 !== i || (a = (e => { const t = Q(e.childNodes, Ch).filter((e => Dp(o, e, s))); return t.map((t => { const n = o.clone(t, !1); return d(n), o.replace(n, e, !0), o.remove(t, !0), n })).getOr(e) })(a)), ((e, t, n, o) => {
                            vh(t, (t => {
                                Xc(t) && vh(e.dom.select(t.inline, o), (o => { Jp(o) && ph(e, t, n, o, t.exact ? o : null) })), ((e, t, n) => {
                                    if (t.clear_child_styles) {
                                        const o = t.links ? "*:not(a)" : "*";
                                        Qp(e.select(o, n), (n => { Jp(n) && Qp(t.styles, ((t, o) => { e.setStyle(n, o, "") })) }))
                                    }
                                })(e.dom, t, o)
                            }))
                        })(e, r, n, a), ((e, t, n, o, r) => { Pp(e, r.parentNode, n, o) && ph(e, t, o, r) || t.merge_with_parents && e.dom.getParent(r.parentNode, (s => { if (Pp(e, s, n, o)) return ph(e, t, o, r), !0 })) })(e, s, t, n, a), ((e, t, n, o) => { t.styles && t.styles.backgroundColor && nh(o, oh(e, "fontSize"), rh(e, "backgroundColor", Vc(t.styles.backgroundColor, n))) })(o, s, n, a), ((e, t, n, o) => {
                            const r = t => {
                                if (1 === t.nodeType && t.parentNode && 1 === t.parentNode.nodeType) {
                                    const n = Wc(e, t.parentNode);
                                    e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null)
                                }
                            };
                            t.styles && (t.styles.color || t.styles.textDecoration) && (Bt.walk(o, r, "childNodes"), r(o))
                        })(o, s, 0, a), ((e, t, n, o) => {!Xc(t) || "sub" !== t.inline && "sup" !== t.inline || (nh(o, oh(e, "fontSize"), rh(e, "fontSize", "")), e.remove(e.select("sup" === t.inline ? "sub" : "sup", o), !0)) })(o, s, 0, a), th(o, s, 0, a)) : o.remove(a, !0)
                    }))
                };
            if ("false" !== i.getContentEditable(l.getNode())) {
                if (s) {
                    if (o)
                        if (Mc(o)) {
                            if (!c(r, o)) {
                                const t = i.createRng();
                                t.setStartBefore(o), t.setEndAfter(o), f(i, mu(e, t, r), !0)
                            }
                        } else f(i, o, !0);
                    else a && Xc(s) && !hu(e).length ? ((e, t, n) => {
                        let o, r;
                        const s = e.selection,
                            a = s.getRng();
                        let i = a.startOffset;
                        const l = a.startContainer.nodeValue;
                        o = pc(e.getBody(), s.getStart()), o && (r = zp(o));
                        const d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                        if (l && i > 0 && i < l.length && d.test(l.charAt(i)) && d.test(l.charAt(i - 1))) {
                            const o = s.getBookmark();
                            a.collapse(!0);
                            let r = mu(e, a, e.formatter.get(t));
                            r = gm(r), e.formatter.apply(t, n, r), s.moveToBookmark(o)
                        } else o && r.nodeValue === Ip || (c = e.getDoc(), u = jp(!0).dom, o = c.importNode(u, !0), r = o.firstChild, a.insertNode(o), i = 1), e.formatter.apply(t, n, o), s.setCursorLocation(r, i);
                        var c, u
                    })(e, t, n) : (l.setRng(bp(l.getRng())), Su(l, !0, (() => {
                        ku(e, ((t, n) => {
                            const o = n ? t : mu(e, t, r);
                            f(i, o, !1)
                        }))
                    })), Ic(i, l, l.getRng()), e.nodeChanged());
                    ((e, t) => { Xp(Gp[e], (e => { e(t) })) })(t, e)
                }
                Lu(e, t, o, n)
            } else {
                o = l.getNode();
                for (let e = 0, t = r.length; e < t; e++) { const t = r[e]; if (t.ceFalseOverride && Yc(t) && i.is(o, t.selector)) { d(o, t); break } }
                Lu(e, t, o, n)
            }
        },
        wh = e => we(e, "vars"),
        kh = e => e.selection.getStart(),
        Sh = (e, t, n, o, r) => X(t, (t => { const s = e.formatter.matchNode(t, n, null != r ? r : {}, o); return !v(s) }), (t => !!Tp(e, t, n) || !o && C(e.formatter.matchNode(t, n, r, !0)))),
        _h = (e, t) => { const n = null != t ? t : kh(e); return K(Kc(e.dom, n), (e => yo(e) && !ko(e))) },
        Eh = (e, t, n) => {
            const o = _h(e, t);
            fe(n, ((n, r) => {
                const s = n => {
                    const s = Sh(e, o, r, n.similar, wh(n) ? n.vars : void 0),
                        a = s.isSome();
                    if (n.state.get() !== a) {
                        n.state.set(a);
                        const e = s.getOr(t);
                        wh(n) ? n.callback(a, { node: e, format: r, parents: o }) : $(n.callbacks, (t => t(a, { node: e, format: r, parents: o })))
                    }
                };
                $([n.withSimilar, n.withoutSimilar], s), $(n.withVars, s)
            }))
        };
    var Nh = Object.hasOwnProperty,
        Rh = Object.setPrototypeOf,
        Ah = Object.isFrozen,
        Oh = Object.getPrototypeOf,
        Th = Object.getOwnPropertyDescriptor,
        Bh = Object.freeze,
        Dh = Object.seal,
        Lh = Object.create,
        Ph = "undefined" != typeof Reflect && Reflect,
        Mh = Ph.apply,
        Ih = Ph.construct;
    Mh || (Mh = function(e, t, n) { return e.apply(t, n) }), Bh || (Bh = function(e) { return e }), Dh || (Dh = function(e) { return e }), Ih || (Ih = function(e, t) { return new(Function.prototype.bind.apply(e, [null].concat(function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }(t)))) });
    var Fh, Uh = Yh(Array.prototype.forEach),
        zh = Yh(Array.prototype.pop),
        jh = Yh(Array.prototype.push),
        Vh = Yh(String.prototype.toLowerCase),
        Hh = Yh(String.prototype.match),
        $h = Yh(String.prototype.replace),
        qh = Yh(String.prototype.indexOf),
        Wh = Yh(String.prototype.trim),
        Kh = Yh(RegExp.prototype.test),
        Gh = (Fh = TypeError, function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Ih(Fh, t) });

    function Yh(e) { return function(t) { for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r]; return Mh(e, t, o) } }

    function Xh(e, t) {
        Rh && Rh(e, null);
        for (var n = t.length; n--;) {
            var o = t[n];
            if ("string" == typeof o) {
                var r = Vh(o);
                r !== o && (Ah(t) || (t[n] = r), o = r)
            }
            e[o] = !0
        }
        return e
    }

    function Qh(e) {
        var t = Lh(null),
            n = void 0;
        for (n in e) Mh(Nh, e, [n]) && (t[n] = e[n]);
        return t
    }

    function Jh(e, t) {
        for (; null !== e;) {
            var n = Th(e, t);
            if (n) { if (n.get) return Yh(n.get); if ("function" == typeof n.value) return Yh(n.value) }
            e = Oh(e)
        }
        return function(e) { return console.warn("fallback value for", e), null }
    }
    var Zh = Bh(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
        eb = Bh(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
        tb = Bh(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
        nb = Bh(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
        ob = Bh(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
        rb = Bh(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
        sb = Bh(["#text"]),
        ab = Bh(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
        ib = Bh(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
        lb = Bh(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
        db = Bh(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        cb = Dh(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        ub = Dh(/<%[\s\S]*|[\s\S]*%>/gm),
        mb = Dh(/^data-[\-\w.\u00B7-\uFFFF]/),
        fb = Dh(/^aria-[\-\w]+$/),
        gb = Dh(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        pb = Dh(/^(?:\w+script|data):/i),
        hb = Dh(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        bb = Dh(/^html$/i),
        vb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function yb(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }
    var Cb = function() { return "undefined" == typeof window ? null : window },
        xb = function(e, t) {
            if ("object" !== (void 0 === e ? "undefined" : vb(e)) || "function" != typeof e.createPolicy) return null;
            var n = null,
                o = "data-tt-policy-suffix";
            t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
            var r = "dompurify" + (n ? "#" + n : "");
            try { return e.createPolicy(r, { createHTML: function(e) { return e } }) } catch (e) { return console.warn("TrustedTypes policy " + r + " could not be created."), null }
        },
        wb = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cb(),
                n = function(t) { return e(t) };
            if (n.version = "2.3.6", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
            var o = t.document,
                r = t.document,
                s = t.DocumentFragment,
                a = t.HTMLTemplateElement,
                i = t.Node,
                l = t.Element,
                d = t.NodeFilter,
                c = t.NamedNodeMap,
                u = void 0 === c ? t.NamedNodeMap || t.MozNamedAttrMap : c,
                m = t.HTMLFormElement,
                f = t.DOMParser,
                g = t.trustedTypes,
                p = l.prototype,
                h = Jh(p, "cloneNode"),
                b = Jh(p, "nextSibling"),
                v = Jh(p, "childNodes"),
                y = Jh(p, "parentNode");
            if ("function" == typeof a) {
                var C = r.createElement("template");
                C.content && C.content.ownerDocument && (r = C.content.ownerDocument)
            }
            var x = xb(g, o),
                w = x ? x.createHTML("") : "",
                k = r,
                S = k.implementation,
                _ = k.createNodeIterator,
                E = k.createDocumentFragment,
                N = k.getElementsByTagName,
                R = o.importNode,
                A = {};
            try { A = Qh(r).documentMode ? r.documentMode : {} } catch (e) {}
            var O = {};
            n.isSupported = "function" == typeof y && S && void 0 !== S.createHTMLDocument && 9 !== A;
            var T = cb,
                B = ub,
                D = mb,
                L = fb,
                P = pb,
                M = hb,
                I = gb,
                F = null,
                U = Xh({}, [].concat(yb(Zh), yb(eb), yb(tb), yb(ob), yb(sb))),
                z = null,
                j = Xh({}, [].concat(yb(ab), yb(ib), yb(lb), yb(db))),
                V = Object.seal(Object.create(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })),
                H = null,
                $ = null,
                q = !0,
                W = !0,
                K = !1,
                G = !1,
                Y = !1,
                X = !1,
                Q = !1,
                J = !1,
                Z = !1,
                ee = !1,
                te = !0,
                ne = !0,
                oe = !1,
                re = {},
                se = null,
                ae = Xh({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                ie = null,
                le = Xh({}, ["audio", "video", "img", "source", "image", "track"]),
                de = null,
                ce = Xh({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                ue = "http://www.w3.org/1998/Math/MathML",
                me = "http://www.w3.org/2000/svg",
                fe = "http://www.w3.org/1999/xhtml",
                ge = fe,
                pe = !1,
                he = void 0,
                be = ["application/xhtml+xml", "text/html"],
                ve = "text/html",
                ye = void 0,
                Ce = null,
                xe = r.createElement("form"),
                we = function(e) { return e instanceof RegExp || e instanceof Function },
                ke = function(e) { Ce && Ce === e || (e && "object" === (void 0 === e ? "undefined" : vb(e)) || (e = {}), e = Qh(e), F = "ALLOWED_TAGS" in e ? Xh({}, e.ALLOWED_TAGS) : U, z = "ALLOWED_ATTR" in e ? Xh({}, e.ALLOWED_ATTR) : j, de = "ADD_URI_SAFE_ATTR" in e ? Xh(Qh(ce), e.ADD_URI_SAFE_ATTR) : ce, ie = "ADD_DATA_URI_TAGS" in e ? Xh(Qh(le), e.ADD_DATA_URI_TAGS) : le, se = "FORBID_CONTENTS" in e ? Xh({}, e.FORBID_CONTENTS) : ae, H = "FORBID_TAGS" in e ? Xh({}, e.FORBID_TAGS) : {}, $ = "FORBID_ATTR" in e ? Xh({}, e.FORBID_ATTR) : {}, re = "USE_PROFILES" in e && e.USE_PROFILES, q = !1 !== e.ALLOW_ARIA_ATTR, W = !1 !== e.ALLOW_DATA_ATTR, K = e.ALLOW_UNKNOWN_PROTOCOLS || !1, G = e.SAFE_FOR_TEMPLATES || !1, Y = e.WHOLE_DOCUMENT || !1, J = e.RETURN_DOM || !1, Z = e.RETURN_DOM_FRAGMENT || !1, ee = e.RETURN_TRUSTED_TYPE || !1, Q = e.FORCE_BODY || !1, te = !1 !== e.SANITIZE_DOM, ne = !1 !== e.KEEP_CONTENT, oe = e.IN_PLACE || !1, I = e.ALLOWED_URI_REGEXP || I, ge = e.NAMESPACE || fe, e.CUSTOM_ELEMENT_HANDLING && we(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && we(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (V.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), he = he = -1 === be.indexOf(e.PARSER_MEDIA_TYPE) ? ve : e.PARSER_MEDIA_TYPE, ye = "application/xhtml+xml" === he ? function(e) { return e } : Vh, G && (W = !1), Z && (J = !0), re && (F = Xh({}, [].concat(yb(sb))), z = [], !0 === re.html && (Xh(F, Zh), Xh(z, ab)), !0 === re.svg && (Xh(F, eb), Xh(z, ib), Xh(z, db)), !0 === re.svgFilters && (Xh(F, tb), Xh(z, ib), Xh(z, db)), !0 === re.mathMl && (Xh(F, ob), Xh(z, lb), Xh(z, db))), e.ADD_TAGS && (F === U && (F = Qh(F)), Xh(F, e.ADD_TAGS)), e.ADD_ATTR && (z === j && (z = Qh(z)), Xh(z, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && Xh(de, e.ADD_URI_SAFE_ATTR), e.FORBID_CONTENTS && (se === ae && (se = Qh(se)), Xh(se, e.FORBID_CONTENTS)), ne && (F["#text"] = !0), Y && Xh(F, ["html", "head", "body"]), F.table && (Xh(F, ["tbody"]), delete H.tbody), Bh && Bh(e), Ce = e) },
                Se = Xh({}, ["mi", "mo", "mn", "ms", "mtext"]),
                _e = Xh({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                Ee = Xh({}, ["title", "style", "font", "a", "script"]),
                Ne = Xh({}, eb);
            Xh(Ne, tb), Xh(Ne, nb);
            var Re = Xh({}, ob);
            Xh(Re, rb);
            var Ae = function(e) {
                    var t = y(e);
                    t && t.tagName || (t = { namespaceURI: fe, tagName: "template" });
                    var n = Vh(e.tagName),
                        o = Vh(t.tagName);
                    return e.namespaceURI === me ? t.namespaceURI === fe ? "svg" === n : t.namespaceURI === ue ? "svg" === n && ("annotation-xml" === o || Se[o]) : Boolean(Ne[n]) : e.namespaceURI === ue ? t.namespaceURI === fe ? "math" === n : t.namespaceURI === me ? "math" === n && _e[o] : Boolean(Re[n]) : e.namespaceURI === fe && !(t.namespaceURI === me && !_e[o]) && !(t.namespaceURI === ue && !Se[o]) && !Re[n] && (Ee[n] || !Ne[n])
                },
                Oe = function(e) { jh(n.removed, { element: e }); try { e.parentNode.removeChild(e) } catch (t) { try { e.outerHTML = w } catch (t) { e.remove() } } },
                Te = function(e, t) {
                    try { jh(n.removed, { attribute: t.getAttributeNode(e), from: t }) } catch (e) { jh(n.removed, { attribute: null, from: t }) }
                    if (t.removeAttribute(e), "is" === e && !z[e])
                        if (J || Z) try { Oe(t) } catch (e) {} else try { t.setAttribute(e, "") } catch (e) {}
                },
                Be = function(e) {
                    var t = void 0,
                        n = void 0;
                    if (Q) e = "<remove></remove>" + e;
                    else {
                        var o = Hh(e, /^[\r\n\t ]+/);
                        n = o && o[0]
                    }
                    "application/xhtml+xml" === he && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                    var s = x ? x.createHTML(e) : e;
                    if (ge === fe) try { t = (new f).parseFromString(s, he) } catch (e) {}
                    if (!t || !t.documentElement) { t = S.createDocument(ge, "template", null); try { t.documentElement.innerHTML = pe ? "" : s } catch (e) {} }
                    var a = t.body || t.documentElement;
                    return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), ge === fe ? N.call(t, Y ? "html" : "body")[0] : Y ? t.documentElement : a
                },
                De = function(e) { return _.call(e.ownerDocument || e, e, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT, null, !1) },
                Le = function(e) { return e instanceof m && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof u) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore) },
                Pe = function(e) { return "object" === (void 0 === i ? "undefined" : vb(i)) ? e instanceof i : e && "object" === (void 0 === e ? "undefined" : vb(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName },
                Me = function(e, t, o) { O[e] && Uh(O[e], (function(e) { e.call(n, t, o, Ce) })) },
                Ie = function(e) {
                    var t = void 0;
                    if (Me("beforeSanitizeElements", e, null), Le(e)) return Oe(e), !0;
                    if (Kh(/[\u0080-\uFFFF]/, e.nodeName)) return Oe(e), !0;
                    var o = ye(e.nodeName);
                    if (Me("uponSanitizeElement", e, { tagName: o, allowedTags: F }), e.hasChildNodes() && !Pe(e.firstElementChild) && (!Pe(e.content) || !Pe(e.content.firstElementChild)) && Kh(/<[/\w]/g, e.innerHTML) && Kh(/<[/\w]/g, e.textContent)) return Oe(e), !0;
                    if ("select" === o && Kh(/<template/i, e.innerHTML)) return Oe(e), !0;
                    if (!F[o] || H[o]) {
                        if (!H[o] && Ue(o)) { if (V.tagNameCheck instanceof RegExp && Kh(V.tagNameCheck, o)) return !1; if (V.tagNameCheck instanceof Function && V.tagNameCheck(o)) return !1 }
                        if (ne && !se[o]) {
                            var r = y(e) || e.parentNode,
                                s = v(e) || e.childNodes;
                            if (s && r)
                                for (var a = s.length - 1; a >= 0; --a) r.insertBefore(h(s[a], !0), b(e))
                        }
                        return Oe(e), !0
                    }
                    return e instanceof l && !Ae(e) ? (Oe(e), !0) : "noscript" !== o && "noembed" !== o || !Kh(/<\/no(script|embed)/i, e.innerHTML) ? (G && 3 === e.nodeType && (t = e.textContent, t = $h(t, T, " "), t = $h(t, B, " "), e.textContent !== t && (jh(n.removed, { element: e.cloneNode() }), e.textContent = t)), Me("afterSanitizeElements", e, null), !1) : (Oe(e), !0)
                },
                Fe = function(e, t, n) {
                    if (te && ("id" === t || "name" === t) && (n in r || n in xe)) return !1;
                    if (W && !$[t] && Kh(D, t));
                    else if (q && Kh(L, t));
                    else if (!z[t] || $[t]) { if (!(Ue(e) && (V.tagNameCheck instanceof RegExp && Kh(V.tagNameCheck, e) || V.tagNameCheck instanceof Function && V.tagNameCheck(e)) && (V.attributeNameCheck instanceof RegExp && Kh(V.attributeNameCheck, t) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(t)) || "is" === t && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && Kh(V.tagNameCheck, n) || V.tagNameCheck instanceof Function && V.tagNameCheck(n)))) return !1 } else if (de[t]);
                    else if (Kh(I, $h(n, M, "")));
                    else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== qh(n, "data:") || !ie[e])
                        if (K && !Kh(P, $h(n, M, "")));
                        else if (n) return !1;
                    return !0
                },
                Ue = function(e) { return e.indexOf("-") > 0 },
                ze = function(e) {
                    var t = void 0,
                        n = void 0,
                        o = void 0,
                        r = void 0;
                    Me("beforeSanitizeAttributes", e, null);
                    var s = e.attributes;
                    if (s) {
                        var a = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: z };
                        for (r = s.length; r--;) {
                            var i = t = s[r],
                                l = i.name,
                                d = i.namespaceURI;
                            n = Wh(t.value), o = ye(l);
                            var c = n;
                            if (a.attrName = o, a.attrValue = n, a.keepAttr = !0, a.forceKeepAttr = void 0, Me("uponSanitizeAttribute", e, a), n = a.attrValue, !a.forceKeepAttr)
                                if (a.keepAttr)
                                    if (Kh(/\/>/i, n)) Te(l, e);
                                    else { G && (n = $h(n, T, " "), n = $h(n, B, " ")); var u = ye(e.nodeName); if (Fe(u, o, n)) { if (n !== c) try { d ? e.setAttributeNS(d, l, n) : e.setAttribute(l, n) } catch (t) { Te(l, e) } } else Te(l, e) }
                            else Te(l, e)
                        }
                        Me("afterSanitizeAttributes", e, null)
                    }
                },
                je = function e(t) {
                    var n = void 0,
                        o = De(t);
                    for (Me("beforeSanitizeShadowDOM", t, null); n = o.nextNode();) Me("uponSanitizeShadowNode", n, null), Ie(n) || (n.content instanceof s && e(n.content), ze(n));
                    Me("afterSanitizeShadowDOM", t, null)
                };
            return n.sanitize = function(e, r) {
                var a = void 0,
                    l = void 0,
                    d = void 0,
                    c = void 0,
                    u = void 0;
                if ((pe = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !Pe(e)) { if ("function" != typeof e.toString) throw Gh("toString is not a function"); if ("string" != typeof(e = e.toString())) throw Gh("dirty is not a string, aborting") }
                if (!n.isSupported) { if ("object" === vb(t.toStaticHTML) || "function" == typeof t.toStaticHTML) { if ("string" == typeof e) return t.toStaticHTML(e); if (Pe(e)) return t.toStaticHTML(e.outerHTML) } return e }
                if (X || ke(r), n.removed = [], "string" == typeof e && (oe = !1), oe) { if (e.nodeName) { var m = ye(e.nodeName); if (!F[m] || H[m]) throw Gh("root node is forbidden and cannot be sanitized in-place") } } else if (e instanceof i) 1 === (l = (a = Be("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === l.nodeName || "HTML" === l.nodeName ? a = l : a.appendChild(l);
                else { if (!J && !G && !Y && -1 === e.indexOf("<")) return x && ee ? x.createHTML(e) : e; if (!(a = Be(e))) return J ? null : ee ? w : "" }
                a && Q && Oe(a.firstChild);
                for (var f = De(oe ? e : a); d = f.nextNode();) 3 === d.nodeType && d === c || Ie(d) || (d.content instanceof s && je(d.content), ze(d), c = d);
                if (c = null, oe) return e;
                if (J) {
                    if (Z)
                        for (u = E.call(a.ownerDocument); a.firstChild;) u.appendChild(a.firstChild);
                    else u = a;
                    return z.shadowroot && (u = R.call(o, u, !0)), u
                }
                var g = Y ? a.outerHTML : a.innerHTML;
                return Y && F["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && Kh(bb, a.ownerDocument.doctype.name) && (g = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + g), G && (g = $h(g, T, " "), g = $h(g, B, " ")), x && ee ? x.createHTML(g) : g
            }, n.setConfig = function(e) { ke(e), X = !0 }, n.clearConfig = function() { Ce = null, X = !1 }, n.isValidAttribute = function(e, t, n) {
                Ce || ke({});
                var o = ye(e),
                    r = ye(t);
                return Fe(o, r, n)
            }, n.addHook = function(e, t) { "function" == typeof t && (O[e] = O[e] || [], jh(O[e], t)) }, n.removeHook = function(e) { O[e] && zh(O[e]) }, n.removeHooks = function(e) { O[e] && (O[e] = []) }, n.removeAllHooks = function() { O = {} }, n
        }();
    const kb = (e, t, n) => {
            const o = ys();
            t.convert_fonts_to_spans && ((e, t, n) => {
                e.addNodeFilter("font", (e => {
                    $(e, (e => {
                        const o = t.parse(e.attr("style")),
                            r = e.attr("color"),
                            s = e.attr("face"),
                            a = e.attr("size");
                        r && (o.color = r), s && (o["font-family"] = s), a && (o["font-size"] = n[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", t.serialize(o)), ((e, t) => { $(["color", "face", "size"], (t => { e.attr(t, null) })) })(e)
                    }))
                }))
            })(e, o, Bt.explode(t.font_size_legacy_values)), ((e, t, n) => {
                e.addNodeFilter("strike", (e => {
                    const o = "html4" !== t.type;
                    $(e, (e => {
                        if (o) e.name = "s";
                        else {
                            const t = n.parse(e.attr("style"));
                            t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
                        }
                    }))
                }))
            })(e, n, o)
        },
        Sb = e => {
            let t;
            const n = decodeURIComponent(e).split(","),
                o = /data:([^;]+)/.exec(n[0]);
            return o && (t = o[1]), { type: t, data: n[1] }
        },
        _b = (e, t) => { let n; try { n = atob(t) } catch (e) { return M.none() } const o = new Uint8Array(n.length); for (let e = 0; e < o.length; e++) o[e] = n.charCodeAt(e); return M.some(new Blob([o], { type: e })) },
        Eb = e => {
            return 0 === e.indexOf("blob:") ? (e => new Promise(((t, n) => {
                const o = () => { n("Cannot convert " + e + " to Blob. Resource might not exist or is inaccessible.") };
                try {
                    const n = new XMLHttpRequest;
                    n.open("GET", e, !0), n.responseType = "blob", n.onload = () => { 200 === n.status ? t(n.response) : o() }, n.onerror = o, n.send()
                } catch (e) { o() }
            })))(e) : 0 === e.indexOf("data:") ? (t = e, new Promise((e => {
                const { type: n, data: o } = Sb(t);
                _b(n, o).fold((() => e(new Blob([]))), e)
            }))) : null;
            var t
        },
        Nb = e => new Promise((t => {
            const n = new FileReader;
            n.onloadend = () => { t(n.result) }, n.readAsDataURL(e)
        }));
    let Rb = 0;
    const Ab = e => (e || "blobid") + Rb++,
        Ob = Bt.each,
        Tb = Bt.trim,
        Bb = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        Db = { ftp: 21, http: 80, https: 443, mailto: 25 },
        Lb = ["img", "video"],
        Pb = (e, t, n) => { const o = (e => { try { return decodeURIComponent(e) } catch (t) { return unescape(e) } })(t); return !e.allow_script_urls && (!!/((java|vb)script|mhtml):/i.test(o) || !e.allow_html_data_urls && (/^data:image\//i.test(o) ? ((e, t) => C(e) ? !e : !C(t) || !j(Lb, t))(e.allow_svg_data_urls, n) && /^data:image\/svg\+xml/i.test(o) : /^data:/i.test(o))) };
    class Mb {
        constructor(e, t) {
            e = Tb(e), this.settings = t || {};
            const n = this.settings.base_uri,
                o = this;
            if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) return void(o.source = e);
            const r = 0 === e.indexOf("//");
            if (0 !== e.indexOf("/") || r || (e = (n && n.protocol || "http") + "://mce_host" + e), !/^[\w\-]*:?\/\//.test(e)) {
                const t = this.settings.base_uri ? this.settings.base_uri.path : new Mb(document.location.href).directory;
                if (this.settings.base_uri && "" == this.settings.base_uri.protocol) e = "//mce_host" + o.toAbsPath(t, e);
                else {
                    const r = /([^#?]*)([#?]?.*)/.exec(e);
                    e = (n && n.protocol || "http") + "://mce_host" + o.toAbsPath(t, r[1]) + r[2]
                }
            }
            e = e.replace(/@@/g, "(mce_at)");
            const s = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);
            Ob(Bb, ((e, t) => {
                let n = s[t];
                n && (n = n.replace(/\(mce_at\)/g, "@@")), o[e] = n
            })), n && (o.protocol || (o.protocol = n.protocol), o.userInfo || (o.userInfo = n.userInfo), o.port || "mce_host" !== o.host || (o.port = n.port), o.host && "mce_host" !== o.host || (o.host = n.host), o.source = ""), r && (o.protocol = "")
        }
        static parseDataUri(e) {
            let t;
            const n = decodeURIComponent(e).split(","),
                o = /data:([^;]+)/.exec(n[0]);
            return o && (t = o[1]), { type: t, data: n[1] }
        }
        static isDomSafe(e, t, n = {}) { if (n.allow_script_urls) return !0; { const o = ls.decode(e).replace(/[\s\u0000-\u001F]+/g, ""); return !Pb(n, o, t) } }
        static getDocumentBaseUrl(e) { let t; return t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t }
        setPath(e) {
            const t = /^(.*?)\/?(\w+)?$/.exec(e);
            this.path = t[0], this.directory = t[1], this.file = t[2], this.source = "", this.getURI()
        }
        toRelative(e) {
            let t;
            if ("./" === e) return e;
            const n = new Mb(e, { base_uri: this });
            if ("mce_host" !== n.host && this.host !== n.host && n.host || this.port !== n.port || this.protocol !== n.protocol && "" !== n.protocol) return n.getURI();
            const o = this.getURI(),
                r = n.getURI();
            return o === r || "/" === o.charAt(o.length - 1) && o.substr(0, o.length - 1) === r ? o : (t = this.toRelPath(this.path, n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t)
        }
        toAbsolute(e, t) { const n = new Mb(e, { base_uri: this }); return n.getURI(t && this.isSameOrigin(n)) }
        isSameOrigin(e) { if (this.host == e.host && this.protocol == e.protocol) { if (this.port == e.port) return !0; const t = Db[this.protocol]; if (t && (this.port || t) == (e.port || t)) return !0 } return !1 }
        toRelPath(e, t) {
            let n, o, r = 0,
                s = "";
            const a = e.substring(0, e.lastIndexOf("/")).split("/"),
                i = t.split("/");
            if (a.length >= i.length)
                for (n = 0, o = a.length; n < o; n++)
                    if (n >= i.length || a[n] !== i[n]) { r = n + 1; break }
            if (a.length < i.length)
                for (n = 0, o = i.length; n < o; n++)
                    if (n >= a.length || a[n] !== i[n]) { r = n + 1; break }
            if (1 === r) return t;
            for (n = 0, o = a.length - (r - 1); n < o; n++) s += "../";
            for (n = r - 1, o = i.length; n < o; n++) s += n !== r - 1 ? "/" + i[n] : i[n];
            return s
        }
        toAbsPath(e, t) {
            let n, o, r = 0,
                s = [];
            const a = /\/$/.test(t) ? "/" : "";
            let i = e.split("/");
            const l = t.split("/");
            for (Ob(i, (e => { e && s.push(e) })), i = s, n = l.length - 1, s = []; n >= 0; n--) 0 !== l[n].length && "." !== l[n] && (".." !== l[n] ? r > 0 ? r-- : s.push(l[n]) : r++);
            return n = i.length - r, o = n <= 0 ? ne(s).join("/") : i.slice(0, n).join("/") + "/" + ne(s).join("/"), 0 !== o.indexOf("/") && (o = "/" + o), a && o.lastIndexOf("/") !== o.length - 1 && (o += a), o
        }
        getURI(e = !1) { let t; return this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source }
    }
    const Ib = Bt.makeMap,
        Fb = Bt.each,
        Ub = Bt.explode,
        zb = Bt.extend,
        jb = { IN_PLACE: !0, ALLOW_UNKNOWN_PROTOCOLS: !0, ALLOWED_TAGS: ["#comment", "#cdata-section", "body"], ALLOWED_ATTR: [] },
        Vb = Bt.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),
        Hb = "data-mce-type",
        $b = (e, t) => {
            const n = wb(),
                o = e.validate;
            let r = 0;
            return n.addHook("uponSanitizeElement", ((n, s) => {
                var a, i;
                8 === n.nodeType && !e.allow_conditional_comments && /^\[if/i.test(n.nodeValue) && (n.nodeValue = " " + n.nodeValue);
                const l = s.tagName;
                if (1 !== n.nodeType || "body" === l) return;
                const d = mn(n),
                    c = Gt(d, Hb),
                    u = Wt(d, "data-mce-bogus");
                if (!c && m(u)) return void("all" === u ? to(d) : no(d));
                const f = t.getElementRule(l.toLowerCase());
                if (!o || f) {
                    if (s.allowedTags[l] = !0, o && !c) {
                        if ($(null !== (a = f.attributesForced) && void 0 !== a ? a : [], (e => { $t(d, e.name, "{$uid}" === e.value ? "mce_" + r++ : e.value) })), $(null !== (i = f.attributesDefault) && void 0 !== i ? i : [], (e => { Gt(d, e.name) || $t(d, e.name, "{$uid}" === e.value ? "mce_" + r++ : e.value) })), f.attributesRequired && !V(f.attributesRequired, (e => Gt(d, e)))) return void no(d);
                        if (f.removeEmptyAttrs && (e => { const t = e.dom.attributes; return null == t || 0 === t.length })(d)) return void no(d);
                        f.outputName && f.outputName !== l.toLowerCase() && ((e, t) => {
                            const n = ((e, t) => {
                                const n = cn(t),
                                    o = Xt(e);
                                return qt(n, o), n
                            })(e, t);
                            Xn(e, n);
                            const o = Nn(e);
                            Zn(n, o), to(e)
                        })(d, f.outputName)
                    }
                } else no(d)
            })), n.addHook("uponSanitizeAttribute", ((n, r) => {
                const s = n.tagName.toLowerCase(),
                    { attrName: a, attrValue: i } = r;
                r.keepAttr = !o || t.isValid(s, a) || ze(a, "data-") || ze(a, "aria-"), a in Vb && Pb(e, i, s) && (r.keepAttr = !1), r.keepAttr ? (r.allowedAttributes[a] = !0, a in t.getBoolAttrs() && (r.attrValue = a), e.allow_svg_data_urls && ze(i, "data:image/svg+xml") && (r.forceKeepAttr = !0)) : !n.hasAttribute(Hb) || "id" !== a && "class" !== a && "style" !== a || (r.forceKeepAttr = !0)
            })), n
        },
        qb = (e, t, n) => {
            const o = e.name,
                r = o in n && "title" !== o && "textarea" !== o,
                s = t.childNodes;
            for (let t = 0, o = s.length; t < o; t++) {
                const o = s[t],
                    a = new yf(o.nodeName.toLowerCase(), o.nodeType);
                if (yo(o)) {
                    const e = o.attributes;
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        a.attr(n.name, n.value)
                    }
                } else No(o) ? (a.value = o.data, r && (a.raw = !0)) : (Oo(o) || Ro(o) || Ao(o)) && (a.value = o.data);
                qb(a, o, n), e.append(a)
            }
        },
        Wb = (e = {}, t = vs()) => {
            const n = {},
                o = [],
                r = { validate: !0, root_name: "body", ...e },
                s = new DOMParser,
                a = $b(r, t),
                i = () => { const e = []; for (const t in n) we(n, t) && e.push({ name: t, callbacks: n[t] }); return e },
                l = {
                    schema: t,
                    addAttributeFilter: (e, t) => {
                        Fb(Ub(e), (e => {
                            let n;
                            for (n = 0; n < o.length; n++)
                                if (o[n].name === e) return void o[n].callbacks.push(t);
                            o.push({ name: e, callbacks: [t] })
                        }))
                    },
                    getAttributeFilters: () => [].concat(o),
                    addNodeFilter: (e, t) => {
                        Fb(Ub(e), (e => {
                            let o = n[e];
                            o || (n[e] = o = []), o.push(t)
                        }))
                    },
                    getNodeFilters: i,
                    parse: (e, n = {}) => {
                        var l;
                        const d = r.validate,
                            c = null !== (l = n.context) && void 0 !== l ? l : r.root_name,
                            u = ((e, n, o = "html") => {
                                const i = "xhtml" === o ? "application/xhtml+xml" : "text/html",
                                    l = we(t.getSpecialElements(), n.toLowerCase()),
                                    d = l ? `<${n}>${e}</${n}>` : e,
                                    c = "xhtml" === o ? `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>${d}</body></html>` : `<body>${d}</body>`,
                                    u = s.parseFromString(c, i).body;
                                return a.sanitize(u, ((e, t) => { const n = {...jb }; return n.PARSER_MEDIA_TYPE = t, e.allow_script_urls ? n.ALLOWED_URI_REGEXP = /.*/ : e.allow_html_data_urls && (n.ALLOWED_URI_REGEXP = /^(?!(\w+script|mhtml):)/i), n })(r, i)), a.removed = [], l ? u.firstChild : u
                            })(e, c, n.format),
                            m = new yf(c, 11);
                        qb(m, u, t.getSpecialElements());
                        const [f, g] = ((e, t, n, o) => {
                            const r = n.validate,
                                s = t.getNonEmptyElements(),
                                a = t.getWhitespaceElements(),
                                i = zb(Ib("script,style,head,html,body,title,meta,param"), t.getBlockElements()),
                                l = /[ \t\r\n]+/g,
                                d = /^[ \t\r\n]+/,
                                c = /[ \t\r\n]+$/,
                                u = e => {
                                    for (e = e.parent; C(e);) {
                                        if (e.name in a) return !0;
                                        e = e.parent
                                    }
                                    return !1
                                },
                                m = (t, n) => { const r = n ? t.prev : t.next; return !C(r) && t.parent.name in i && (t.parent !== e || o.isRootContent) };
                            return [e => {
                                if (3 === e.type && !u(e)) {
                                    let t = e.value;
                                    t = t.replace(l, " "), (((e, t) => e && (e.name in t || "br" === e.name))(e.prev, i) || m(e, !0)) && (t = t.replace(d, "")), 0 === t.length ? e.remove() : e.value = t
                                }
                            }, e => {
                                var n;
                                if (1 === e.type) {
                                    const n = t.getElementRule(e.name);
                                    if (r && n) {
                                        const r = gp(t, s, a, e);
                                        n.removeEmpty && r ? i[e.name] ? e.remove() : e.unwrap() : n.paddEmpty && (r || (e => fp(e, "#text") && e.firstChild.value === dr)(e)) && mp(0, o, i, e)
                                    }
                                } else if (3 === e.type && !u(e)) {
                                    let t = e.value;
                                    (i[null === (n = e.next) || void 0 === n ? void 0 : n.name] || m(e, !1)) && (t = t.replace(c, "")), 0 === t.length ? e.remove() : e.value = t
                                }
                            }]
                        })(m, t, r, n), p = [], h = d ? e => ((e, n) => {
                            const o = e.parent;
                            o && t.children[e.name] && !t.isValidChild(o.name, e.name) && n.push(e)
                        })(e, p) : S, b = i(), v = { nodes: {}, attributes: {} }, x = e => dp(b, o, e, v);
                        if (((e, t, n) => {
                                const o = [];
                                for (let n = e, r = n; C(n); r = n, n = n.walk()) $(t, (e => e(n))), y(n.parent) && n !== e ? n = r : o.push(n);
                                for (let e = o.length - 1; e >= 0; e--) {
                                    const t = o[e];
                                    $(n, (e => e(t)))
                                }
                            })(m, [f, x], [g, h]), p.reverse(), d && p.length > 0)
                            if (n.context) {
                                const { pass: e, fail: o } = W(p, (e => e.parent === m));
                                hp(o, t, x), n.invalid = e.length > 0
                            } else hp(p, t, x);
                        const w = ((e, t) => { var n; const o = null !== (n = t.forced_root_block) && void 0 !== n ? n : e.forced_root_block; return !1 === o ? "" : !0 === o ? "p" : o })(r, n);
                        return w && ("body" === m.name || n.isRootContent) && ((e, n) => {
                            const o = zb(Ib("script,style,head,html,body,title,meta,param"), t.getBlockElements()),
                                s = /^[ \t\r\n]+/,
                                a = /[ \t\r\n]+$/;
                            let i = e.firstChild,
                                l = null;
                            const d = e => { e && (i = e.firstChild, i && 3 === i.type && (i.value = i.value.replace(s, "")), i = e.lastChild, i && 3 === i.type && (i.value = i.value.replace(a, ""))) };
                            if (t.isValidChild(e.name, n.toLowerCase())) {
                                for (; i;) {
                                    const t = i.next;
                                    3 === i.type || 1 === i.type && "p" !== i.name && !o[i.name] && !i.attr(Hb) ? (l || (l = new yf(n, 1), l.attr(r.forced_root_block_attrs), e.insert(l, i)), l.append(i)) : (d(l), l = null), i = t
                                }
                                d(l)
                            }
                        })(m, w), n.invalid || cp(v, n), m
                    }
                };
            return ((e, t) => {
                const n = e.schema;
                t.remove_trailing_brs && e.addNodeFilter("br", ((e, t, o) => {
                    const r = Bt.extend({}, n.getBlockElements()),
                        s = n.getNonEmptyElements(),
                        a = n.getWhitespaceElements();
                    r.body = 1;
                    for (let t = 0, i = e.length; t < i; t++) {
                        let i = e[t],
                            l = i.parent;
                        if (r[i.parent.name] && i === l.lastChild) {
                            let e = i.prev;
                            for (; e;) {
                                const t = e.name;
                                if ("span" !== t || "bookmark" !== e.attr("data-mce-type")) { "br" === t && (i = null); break }
                                e = e.prev
                            }
                            if (i && (i.remove(), gp(n, s, a, l))) {
                                const e = n.getElementRule(l.name);
                                e && (e.removeEmpty ? l.remove() : e.paddEmpty && mp(0, o, r, l))
                            }
                        } else {
                            let e = i;
                            for (; l && l.firstChild === e && l.lastChild === e && (e = l, !r[l.name]);) l = l.parent;
                            if (e === l) {
                                const e = new yf("#text", 3);
                                e.value = dr, i.replace(e)
                            }
                        }
                    }
                })), e.addAttributeFilter("href", (e => {
                    let n = e.length;
                    const o = e => { const t = e ? Bt.trim(e) : ""; return /\b(noopener)\b/g.test(t) ? t : (e => e.split(" ").filter((e => e.length > 0)).concat(["noopener"]).sort().join(" "))(t) };
                    if (!t.allow_unsafe_link_target)
                        for (; n--;) { const t = e[n]; "a" === t.name && "_blank" === t.attr("target") && t.attr("rel", o(t.attr("rel"))) }
                })), t.allow_html_in_named_anchor || e.addAttributeFilter("id,name", (e => {
                    let t, n, o, r, s = e.length;
                    for (; s--;)
                        if (r = e[s], "a" === r.name && r.firstChild && !r.attr("href")) {
                            o = r.parent, t = r.lastChild;
                            do { n = t.prev, o.insert(t, r), t = n } while (t)
                        }
                })), t.fix_list_elements && e.addNodeFilter("ul,ol", (e => {
                    let t, n, o = e.length;
                    for (; o--;)
                        if (t = e[o], n = t.parent, "ul" === n.name || "ol" === n.name)
                            if (t.prev && "li" === t.prev.name) t.prev.append(t);
                            else {
                                const e = new yf("li", 1);
                                e.attr("style", "list-style-type: none"), t.wrap(e)
                            }
                })), t.validate && n.getValidClasses() && e.addAttributeFilter("class", (e => {
                    const t = n.getValidClasses();
                    let o = e.length;
                    for (; o--;) {
                        const n = e[o],
                            r = n.attr("class").split(" ");
                        let s = "";
                        for (let e = 0; e < r.length; e++) {
                            const o = r[e];
                            let a = !1,
                                i = t["*"];
                            i && i[o] && (a = !0), i = t[n.name], !a && i && i[o] && (a = !0), a && (s && (s += " "), s += o)
                        }
                        s.length || (s = null), n.attr("class", s)
                    }
                })), ((e, t) => {
                    const { blob_cache: n } = t, o = e => {
                        const t = e.attr("src");
                        (e => e.attr("src") === Nt.transparentSrc || C(e.attr("data-mce-placeholder")))(e) || (e => C(e.attr("data-mce-bogus")))(e) || (e => { const t = /data:([^;]+);base64,([a-z0-9\+\/=\s]+)/i.exec(e); return t ? M.some({ type: t[1], data: decodeURIComponent(t[2]) }) : M.none() })(t).bind((({ type: e, data: t }) => M.from(n.getByData(t, e)).orThunk((() => _b(e, t).map((e => { const o = n.create(Ab(), e, t); return n.add(o), o })))))).each((t => { e.attr("src", t.blobUri()) }))
                    };
                    n && e.addAttributeFilter("src", (e => $(e, o)))
                })(e, t)
            })(l, r), ((e, t, n) => { t.inline_styles && kb(e, t, n) })(l, r, t), l
        },
        Kb = (e, t) => {
            const n = (e => _p(e) ? Rf({ validate: !1 }).serialize(e) : e)(e),
                o = t(n);
            if (o.isDefaultPrevented()) return o;
            if (_p(e)) { if (o.content !== n) { const t = Wb({ validate: !1, forced_root_block: !1 }).parse(o.content, { context: e.name }); return {...o, content: t } } return {...o, content: e } }
            return o
        },
        Gb = (e, t) => { if (t.no_events) return di.value(t); { const n = ((e, t) => e.dispatch("BeforeGetContent", t))(e, t); return n.isDefaultPrevented() ? di.error(Iu(e, { content: "", ...n }).content) : di.value(n) } },
        Yb = (e, t, n) => n.no_events ? t : Kb(t, (t => Iu(e, {...n, content: t }))).content,
        Xb = (e, t) => { if (t.no_events) return di.value(t); { const n = Kb(t.content, (n => ((e, t) => e.dispatch("BeforeSetContent", t))(e, {...t, content: n }))); return n.isDefaultPrevented() ? (Mu(e, n), di.error(void 0)) : di.value(n) } },
        Qb = (e, t, n) => { n.no_events || Mu(e, {...n, content: t }) },
        Jb = (e, t, n) => ({ element: e, width: t, rows: n }),
        Zb = (e, t) => ({ element: e, cells: t }),
        ev = (e, t) => ({ x: e, y: t }),
        tv = (e, t) => { const n = parseInt(Wt(e, t), 10); return isNaN(n) ? 1 : n },
        nv = (e, t, n) => { const o = e.rows; return !!(o[n] ? o[n].cells : [])[t] },
        ov = e => Y(e, ((e, t) => t.cells.length > e ? t.cells.length : e), 0),
        rv = (e, t) => {
            const n = e.rows;
            for (let e = 0; e < n.length; e++) {
                const o = n[e].cells;
                for (let n = 0; n < o.length; n++)
                    if (bn(o[n], t)) return M.some(ev(n, e))
            }
            return M.none()
        },
        sv = (e, t, n, o, r) => {
            const s = [],
                a = e.rows;
            for (let e = n; e <= r; e++) {
                const n = a[e].cells,
                    r = t < o ? n.slice(t, o + 1) : n.slice(o, t + 1);
                s.push(Zb(a[e].element, r))
            }
            return s
        },
        av = e => ((e, t) => {
            const n = ia(e.element),
                o = cn("tbody");
            return Zn(o, t), Jn(n, o), n
        })(e, (e => H(e.rows, (e => {
            const t = H(e.cells, (e => { const t = la(e); return Yt(t, "colspan"), Yt(t, "rowspan"), t })),
                n = ia(e.element);
            return Zn(n, t), n
        })))(e)),
        iv = (e, t) => {
            const n = mn(t.commonAncestorContainer),
                o = Qf(n, e),
                r = K(o, (e => er(e) || Jo(e))),
                s = ((e, t) => Q(e, (e => "li" === Mt(e) && Cu(e, t))).fold(N([]), (t => (e => Q(e, (e => "ul" === Mt(e) || "ol" === Mt(e))))(e).map((e => {
                    const t = cn(Mt(e)),
                        n = ve(Kn(e), ((e, t) => ze(t, "list-style")));
                    return Hn(t, n), [cn("li"), t]
                })).getOr([]))))(o, t),
                a = r.concat(s.length ? s : (e => rr(e) ? wn(e).filter(or).fold(N([]), (t => [e, t])) : or(e) ? [e] : [])(n));
            return H(a, ia)
        },
        lv = () => em([]),
        dv = (e, t) => ((e, t) => qo(t, "table", O(bn, e)))(e, t[0]).bind((e => {
            const n = t[0],
                o = t[t.length - 1],
                r = (e => {
                    const t = Jb(ia(e), 0, []);
                    return $(Xs(e, "tr"), ((e, n) => {
                        $(Xs(e, "td,th"), ((o, r) => {
                            ((e, t, n, o, r) => {
                                const s = tv(r, "rowspan"),
                                    a = tv(r, "colspan"),
                                    i = e.rows;
                                for (let e = n; e < n + s; e++) { i[e] || (i[e] = Zb(la(o), [])); for (let o = t; o < t + a; o++) i[e].cells[o] = e === n && o === t ? r : ia(r) }
                            })(t, ((e, t, n) => { for (; nv(e, t, n);) t++; return t })(t, r, n), n, e, o)
                        }))
                    })), Jb(t.element, ov(t.rows), t.rows)
                })(e);
            return ((e, t, n) => rv(e, t).bind((t => rv(e, n).map((n => ((e, t, n) => {
                const o = t.x,
                    r = t.y,
                    s = n.x,
                    a = n.y,
                    i = r < a ? sv(e, o, r, s, a) : sv(e, o, a, s, r);
                return Jb(e.element, ov(i), i)
            })(e, t, n))))))(r, n, o).map((e => em([av(e)])))
        })).getOrThunk(lv),
        cv = (e, t) => { const n = pu(t, e); return n.length > 0 ? dv(e, n) : ((e, t) => t.length > 0 && t[0].collapsed ? lv() : ((e, t) => ((e, t) => { const n = Y(t, ((e, t) => (Jn(t, e), t)), e); return t.length > 0 ? em([n]) : n })(mn(t.cloneContents()), iv(e, t)))(e, t[0]))(e, t) },
        uv = (e, t) => t >= 0 && t < e.length && Nc(e.charAt(t)),
        mv = e => fr(e.innerText),
        fv = e => yo(e) ? e.outerHTML : No(e) ? ls.encodeRaw(e.data, !1) : Oo(e) ? "\x3c!--" + e.data + "--\x3e" : "",
        gv = (e, t) => (((e, t) => {
            let n = 0;
            $(e, (e => {
                0 === e[0] ? n++ : 1 === e[0] ? (((e, t, n) => {
                    const o = (e => {
                        let t;
                        const n = document.createElement("div"),
                            o = document.createDocumentFragment();
                        for (e && (n.innerHTML = e); t = n.firstChild;) o.appendChild(t);
                        return o
                    })(t);
                    if (e.hasChildNodes() && n < e.childNodes.length) {
                        const t = e.childNodes[n];
                        t.parentNode.insertBefore(o, t)
                    } else e.appendChild(o)
                })(t, e[1], n), n++) : 2 === e[0] && ((e, t) => {
                    if (e.hasChildNodes() && t < e.childNodes.length) {
                        const n = e.childNodes[t];
                        n.parentNode.removeChild(n)
                    }
                })(t, n)
            }))
        })(((e, t) => {
            const n = e.length + t.length + 2,
                o = new Array(n),
                r = new Array(n),
                s = (n, o, r, a, l) => {
                    const d = i(n, o, r, a);
                    if (null === d || d.start === o && d.diag === o - a || d.end === n && d.diag === n - r) {
                        let s = n,
                            i = r;
                        for (; s < o || i < a;) s < o && i < a && e[s] === t[i] ? (l.push([0, e[s]]), ++s, ++i) : o - n > a - r ? (l.push([2, e[s]]), ++s) : (l.push([1, t[i]]), ++i)
                    } else {
                        s(n, d.start, r, d.start - d.diag, l);
                        for (let t = d.start; t < d.end; ++t) l.push([0, e[t]]);
                        s(d.end, o, d.end - d.diag, a, l)
                    }
                },
                a = (n, o, r, s) => { let a = n; for (; a - o < s && a < r && e[a] === t[a - o];) ++a; return ((e, t, n) => ({ start: e, end: t, diag: n }))(n, a, o) },
                i = (n, s, i, l) => {
                    const d = s - n,
                        c = l - i;
                    if (0 === d || 0 === c) return null;
                    const u = d - c,
                        m = c + d,
                        f = (m % 2 == 0 ? m : m + 1) / 2;
                    let g, p, h, b, v;
                    for (o[1 + f] = n, r[1 + f] = s + 1, g = 0; g <= f; ++g) { for (p = -g; p <= g; p += 2) { for (h = p + f, p === -g || p !== g && o[h - 1] < o[h + 1] ? o[h] = o[h + 1] : o[h] = o[h - 1] + 1, b = o[h], v = b - n + i - p; b < s && v < l && e[b] === t[v];) o[h] = ++b, ++v; if (u % 2 != 0 && u - g <= p && p <= u + g && r[h - u] <= o[h]) return a(r[h - u], p + n - i, s, l) } for (p = u - g; p <= u + g; p += 2) { for (h = p + f - u, p === u - g || p !== u + g && r[h + 1] <= r[h - 1] ? r[h] = r[h + 1] - 1 : r[h] = r[h - 1], b = r[h] - 1, v = b - n + i - p; b >= n && v >= i && e[b] === t[v];) r[h] = b--, v--; if (u % 2 == 0 && -g <= p && p <= g && r[h] <= o[h + u]) return a(r[h], p + n - i, s, l) } }
                },
                l = [];
            return s(0, e.length, 0, t.length, l), l
        })(H(de(t.childNodes), fv), e), t), t),
        pv = De((() => document.implementation.createHTMLDocument("undo"))),
        hv = e => {
            const t = (n = e.getBody(), K(H(de(n.childNodes), fv), (e => e.length > 0)));
            var n;
            const o = ee(t, (t => { const n = wf(e.serializer, t); return n.length > 0 ? [n] : [] })),
                r = o.join("");
            return (e => -1 !== e.indexOf("</iframe>"))(r) ? (e => ({ type: "fragmented", fragments: e, content: "", bookmark: null, beforeBookmark: null }))(o) : (e => ({ type: "complete", fragments: null, content: e, bookmark: null, beforeBookmark: null }))(r)
        },
        bv = (e, t, n) => { const o = n ? t.beforeBookmark : t.bookmark; "fragmented" === t.type ? gv(t.fragments, e.getBody()) : e.setContent(t.content, { format: "raw", no_selection: !C(o) || !hc(o) || !o.isFakeCaret }), e.selection.moveToBookmark(o) },
        vv = e => "fragmented" === e.type ? e.fragments.join("") : e.content,
        yv = e => { const t = cn("body", pv()); return ro(t, vv(e)), $(Xs(t, "*[data-mce-bogus]"), no), oo(t) },
        Cv = (e, t) => !(!e || !t) && (!!((e, t) => vv(e) === vv(t))(e, t) || ((e, t) => yv(e) === yv(t))(e, t)),
        xv = e => 0 === e.get(),
        wv = (e, t, n) => { xv(n) && (e.typing = t) },
        kv = (e, t) => { e.typing && (wv(e, !1, t), e.add()) },
        Sv = e => ({
            init: { bindEvents: S },
            undoManager: {
                beforeChange: (t, n) => ((e, t, n) => { xv(t) && n.set(ai(e.selection)) })(e, t, n),
                add: (t, n, o, r, s, a) => ((e, t, n, o, r, s, a) => {
                    const i = hv(e);
                    if (s = s || {}, s = Bt.extend(s, i), !1 === xv(o) || e.removed) return null;
                    const l = t.data[n.get()];
                    if (e.dispatch("BeforeAddUndo", { level: s, lastLevel: l, originalEvent: a }).isDefaultPrevented()) return null;
                    if (l && Cv(l, s)) return null;
                    t.data[n.get()] && r.get().each((e => { t.data[n.get()].beforeBookmark = e }));
                    const d = wl(e);
                    if (d && t.data.length > d) {
                        for (let e = 0; e < t.data.length - 1; e++) t.data[e] = t.data[e + 1];
                        t.data.length--, n.set(t.data.length)
                    }
                    s.bookmark = ai(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(s), n.set(t.data.length - 1);
                    const c = { level: s, lastLevel: l, originalEvent: a };
                    return n.get() > 0 ? (e.setDirty(!0), e.dispatch("AddUndo", c), e.dispatch("change", c)) : e.dispatch("AddUndo", c), s
                })(e, t, n, o, r, s, a),
                undo: (t, n, o) => ((e, t, n, o) => { let r; return t.typing && (t.add(), t.typing = !1, wv(t, !1, n)), o.get() > 0 && (o.set(o.get() - 1), r = t.data[o.get()], bv(e, r, !0), e.setDirty(!0), e.dispatch("Undo", { level: r })), r })(e, t, n, o),
                redo: (t, n) => ((e, t, n) => { let o; return t.get() < n.length - 1 && (t.set(t.get() + 1), o = n[t.get()], bv(e, o, !1), e.setDirty(!0), e.dispatch("Redo", { level: o })), o })(e, t, n),
                clear: (t, n) => ((e, t, n) => { t.data = [], n.set(0), t.typing = !1, e.dispatch("ClearUndos") })(e, t, n),
                reset: e => (e => { e.clear(), e.add() })(e),
                hasUndo: (t, n) => ((e, t, n) => n.get() > 0 || t.typing && t.data[0] && !Cv(hv(e), t.data[0]))(e, t, n),
                hasRedo: (e, t) => ((e, t) => t.get() < e.data.length - 1 && !e.typing)(e, t),
                transact: (e, t, n) => ((e, t, n) => (kv(e, t), e.beforeChange(), e.ignore(n), e.add()))(e, t, n),
                ignore: (e, t) => ((e, t) => { try { e.set(e.get() + 1), t() } finally { e.set(e.get() - 1) } })(e, t),
                extra: (t, n, o, r) => ((e, t, n, o, r) => {
                    if (t.transact(o)) {
                        const o = t.data[n.get()].bookmark,
                            s = t.data[n.get() - 1];
                        bv(e, s, !0), t.transact(r) && (t.data[n.get() - 1].beforeBookmark = o)
                    }
                })(e, t, n, o, r)
            },
            formatter: {
                match: (t, n, o, r) => Mp(e, t, n, o, r),
                matchAll: (t, n) => ((e, t, n) => {
                    const o = [],
                        r = {},
                        s = e.selection.getStart();
                    return e.dom.getParent(s, (s => { for (let a = 0; a < t.length; a++) { const i = t[a];!r[i] && Pp(e, s, i, n) && (r[i] = !0, o.push(i)) } }), e.dom.getRoot()), o
                })(e, t, n),
                matchNode: (t, n, o, r) => Pp(e, t, n, o, r),
                canApply: t => ((e, t) => {
                    const n = e.formatter.get(t),
                        o = e.dom;
                    if (n) {
                        const t = e.selection.getStart(),
                            r = Kc(o, t);
                        for (let e = n.length - 1; e >= 0; e--) {
                            const t = n[e];
                            if (!Yc(t)) return !0;
                            for (let e = r.length - 1; e >= 0; e--)
                                if (o.is(r[e], t.selector)) return !0
                        }
                    }
                    return !1
                })(e, t),
                closest: t => ((e, t) => { const n = t => bn(t, mn(e.getBody())); return M.from(e.selection.getStart(!0)).bind((o => Ap(mn(o), (n => ce(t, (t => ((t, n) => Pp(e, t.dom, n) ? M.some(n) : M.none())(n, t)))), n))).getOrNull() })(e, t),
                apply: (t, n, o) => xh(e, t, n, o),
                remove: (t, n, o, r) => bh(e, t, n, o, r),
                toggle: (t, n, o) => ((e, t, n, o) => { const r = e.formatter.get(t);!Mp(e, t, n, o) || "toggle" in r[0] && !r[0].toggle ? xh(e, t, n, o) : bh(e, t, n, o) })(e, t, n, o),
                formatChanged: (t, n, o, r, s) => ((e, t, n, o, r, s) => (null === t.get() && ((e, t) => {
                    e.set({}), t.on("NodeChange", (n => { Eh(t, n.element, e.get()) })), t.on("FormatApply FormatRemove", (n => {
                        const o = M.from(n.node).map((e => Mc(e) ? e : e.startContainer)).bind((e => yo(e) ? M.some(e) : M.from(e.parentElement))).getOrThunk((() => kh(t)));
                        Eh(t, o, e.get())
                    }))
                })(t, e), ((e, t, n, o, r, s) => {
                    const a = t.get();
                    $(n.split(","), (t => {
                        const n = xe(a, t).getOrThunk((() => { const e = { withSimilar: { state: zs(!1), similar: !0, callbacks: [] }, withoutSimilar: { state: zs(!1), similar: !1, callbacks: [] }, withVars: [] }; return a[t] = e, e })),
                            i = () => { const n = _h(e); return Sh(e, n, t, r, s).isSome() };
                        if (v(s)) {
                            const e = r ? n.withSimilar : n.withoutSimilar;
                            e.callbacks.push(o), 1 === e.callbacks.length && e.state.set(i())
                        } else n.withVars.push({ state: zs(i()), similar: r, vars: s, callback: o })
                    })), t.set(a)
                })(e, t, n, o, r, s), {
                    unbind: () => ((e, t, n) => {
                        const o = e.get();
                        $(t.split(","), (e => xe(o, e).each((t => { o[e] = { withSimilar: {...t.withSimilar, callbacks: K(t.withSimilar.callbacks, (e => e !== n)) }, withoutSimilar: {...t.withoutSimilar, callbacks: K(t.withoutSimilar.callbacks, (e => e !== n)) }, withVars: K(t.withVars, (e => e.callback !== n)) } })))), e.set(o)
                    })(t, n, o)
                }))(e, t, n, o, r, s)
            },
            editor: {
                getContent: t => ((e, t) => M.from(e.getBody()).fold(N("tree" === t.format ? new yf("body", 11) : ""), (n => ((e, t, n) => {
                    let o;
                    return o = "raw" === t.format ? Bt.trim(kf(e.serializer, n.innerHTML)) : "text" === t.format ? e.dom.isEmpty(n) ? "" : fr(n.innerText || n.textContent) : "tree" === t.format ? e.serializer.serialize(n, t) : ((e, t) => {
                        const n = Ti(e),
                            o = new RegExp(`^(<${n}[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/${n}>[\r\n]*|<br \\/>[\r\n]*)$`);
                        return t.replace(o, "")
                    })(e, e.serializer.serialize(n, t)), "text" !== t.format && !ir(mn(n)) && m(o) ? Bt.trim(o) : o
                })(e, t, n))))(e, t),
                setContent: (t, n) => ((e, t, n) => M.from(e.getBody()).map((o => _p(t) ? ((e, t, n, o) => {
                    up(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                    const r = Rf({ validate: !1 }, e.schema).serialize(n),
                        s = ir(mn(t)) ? r : Bt.trim(r);
                    return Ep(e, s, o.no_selection), { content: n, html: s }
                })(e, o, t, n) : ((e, t, n, o) => { if (0 === n.length || /^\s+$/.test(n)) { const r = '<br data-mce-bogus="1">'; "TABLE" === t.nodeName ? n = "<tr><td>" + r + "</td></tr>" : /^(UL|OL)$/.test(t.nodeName) && (n = "<li>" + r + "</li>"); const s = Ti(e); return e.schema.isValidChild(t.nodeName.toLowerCase(), s.toLowerCase()) ? (n = r, n = e.dom.createHTML(s, Bi(e), n)) : n || (n = r), Ep(e, n, o.no_selection), { content: n, html: n } } { "raw" !== o.format && (n = Rf({ validate: !1 }, e.schema).serialize(e.parser.parse(n, { isRootContent: !0, insert: !0 }))); const r = ir(mn(t)) ? n : Bt.trim(n); return Ep(e, r, o.no_selection), { content: r, html: r } } })(e, o, t, n))).getOr({ content: t, html: _p(n.content) ? "" : n.content }))(e, t, n),
                insertContent: (t, n) => Sp(e, t, n),
                addVisual: t => ((e, t) => {
                    const n = e.dom,
                        o = C(t) ? t : e.getBody();
                    v(e.hasVisual) && (e.hasVisual = Al(e)), $(n.select("table,a", o), (t => {
                        switch (t.nodeName) {
                            case "TABLE":
                                const o = Ol(e),
                                    r = n.getAttrib(t, "border");
                                r && "0" !== r || !e.hasVisual ? n.removeClass(t, o) : n.addClass(t, o);
                                break;
                            case "A":
                                if (!n.getAttrib(t, "href")) {
                                    const o = n.getAttrib(t, "name") || t.id,
                                        r = Tl(e);
                                    o && e.hasVisual ? n.addClass(t, r) : n.removeClass(t, r)
                                }
                        }
                    })), e.dispatch("VisualAid", { element: t, hasVisual: e.hasVisual })
                })(e, t)
            },
            selection: {
                getContent: (t, n) => ((e, t, n = {}) => {
                    const o = ((e, t) => ({...e, format: t, get: !0, selection: !0, getInner: !0 }))(n, t);
                    return Gb(e, o).fold(R, (t => {
                        const n = ((e, t) => {
                            if ("text" === t.format) return (e => M.from(e.selection.getRng()).map((t => {
                                const n = M.from(e.dom.getParent(t.commonAncestorContainer, e.dom.isBlock)),
                                    o = e.getBody(),
                                    r = (e => e.map((e => e.nodeName)).getOr("div").toLowerCase())(n),
                                    s = e.dom.add(o, r, { "data-mce-bogus": "all", style: "overflow: hidden; opacity: 0;" }, t.cloneContents()),
                                    a = mv(s),
                                    i = fr(s.textContent);
                                if (e.dom.remove(s), uv(i, 0) || uv(i, i.length - 1)) {
                                    const e = n.getOr(o),
                                        t = mv(e),
                                        r = t.indexOf(a);
                                    return -1 === r ? a : (uv(t, r - 1) ? " " : "") + a + (uv(t, r + a.length) ? " " : "")
                                }
                                return a
                            })).getOr(""))(e); {
                                const n = ((e, t) => {
                                    const n = e.selection.getRng(),
                                        o = e.dom.create("body"),
                                        r = e.selection.getSel(),
                                        s = df(e, gu(r)),
                                        a = t.contextual ? cv(mn(e.getBody()), s).dom : n.cloneContents();
                                    return a && o.appendChild(a), e.selection.serializer.serialize(o, t)
                                })(e, t);
                                return "tree" === t.format ? n : e.selection.isCollapsed() ? "" : n
                            }
                        })(e, t);
                        return Yb(e, n, t)
                    }))
                })(e, t, n)
            },
            autocompleter: {
                addDecoration: t => ff(e, t),
                removeDecoration: () => ((e, t) => gf(t).each((t => {
                    const n = e.selection.getBookmark();
                    no(t), e.selection.moveToBookmark(n)
                })))(e, mn(e.getBody()))
            },
            raw: { getModel: () => M.none() }
        }),
        _v = e => we(e.plugins, "rtc"),
        Ev = e => e.rtcInstance ? e.rtcInstance : Sv(e),
        Nv = e => { const t = e.rtcInstance; if (t) return t; throw new Error("Failed to get RTC instance not yet initialized.") },
        Rv = e => Nv(e).init.bindEvents(),
        Av = e => 0 === e.dom.length ? (to(e), M.none()) : M.some(e),
        Ov = (e, t, n, o) => {
            e.bind((e => ((o ? _g : Sg)(e.dom, o ? e.dom.length : 0), t.filter(zt).map((t => ((e, t, n, o) => {
                const r = e.dom,
                    s = t.dom,
                    a = o ? r.length : s.length;
                o ? (Eg(r, s, !1, !o), n.setStart(s, a)) : (Eg(s, r, !1, !o), n.setEnd(s, a))
            })(e, t, n, o)))))).orThunk((() => {
                const e = ((e, t) => e.filter((e => Tu.isBookmarkNode(e.dom))).bind(t ? Sn : kn))(t, o).or(t).filter(zt);
                return e.map((e => ((e, t) => {
                    wn(e).each((n => {
                        const o = e.dom;
                        t && bg(n, Ua(o, 0)) ? Sg(o, 0) : !t && vg(n, Ua(o, o.length)) && _g(o, o.length)
                    }))
                })(e, o)))
            }))
        },
        Tv = (e, t, n) => {
            if (e && we(e, t)) {
                const o = K(e[t], (e => e !== n));
                0 === o.length ? delete e[t] : e[t] = o
            }
        },
        Bv = e => !(!e || !e.ownerDocument) && vn(mn(e.ownerDocument), mn(e)),
        Dv = (e, t, n, o) => {
            let r, s;
            const { selectorChangedWithUnbind: a } = ((e, t) => {
                let n, o;
                const r = (t, n) => Q(n, (n => e.is(n, t))),
                    s = t => e.getParents(t, null, e.getRoot());
                return {
                    selectorChangedWithUnbind: (e, a) => (n || (n = {}, o = {}, t.on("NodeChange", (e => {
                        const t = e.element,
                            a = s(t),
                            i = {};
                        Bt.each(n, ((e, t) => { r(t, a).each((n => { o[t] || ($(e, (e => { e(!0, { node: n, selector: t, parents: a }) })), o[t] = e), i[t] = e })) })), Bt.each(o, ((e, n) => { i[n] || (delete o[n], Bt.each(e, (e => { e(!1, { node: t, selector: n, parents: a }) }))) }))
                    }))), n[e] || (n[e] = []), n[e].push(a), r(e, s(t.selection.getStart())).each((() => { o[e] = n[e] })), { unbind: () => { Tv(n, e, a), Tv(o, e, a) } })
                }
            })(e, o), i = (e, t) => ((e, t, n = {}) => {
                const o = ((e, t) => ({ format: "html", ...e, set: !0, selection: !0, content: t }))(n, t);
                Xb(e, o).each((t => {
                    const n = ((e, t) => {
                            if ("raw" !== t.format) {
                                const n = e.selection.getRng(),
                                    o = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                                    r = o ? { context: o.nodeName.toLowerCase() } : {},
                                    s = e.parser.parse(t.content, { forced_root_block: !1, ...r, ...t });
                                return Rf({ validate: !1 }, e.schema).serialize(s)
                            }
                            return t.content
                        })(e, t),
                        o = e.selection.getRng();
                    ((e, t) => {
                        const n = M.from(t.firstChild).map(mn),
                            o = M.from(t.lastChild).map(mn);
                        e.deleteContents(), e.insertNode(t);
                        const r = n.bind(kn).filter(zt).bind(Av),
                            s = o.bind(Sn).filter(zt).bind(Av);
                        Ov(r, n, e, !0), Ov(s, o, e, !1), e.collapse(!1)
                    })(o, o.createContextualFragment(n)), e.selection.setRng(o), Pm(e, o), Qb(e, n, t)
                }))
            })(o, e, t), l = e => {
                const t = c();
                t.collapse(!!e), u(t)
            }, d = () => t.getSelection ? t.getSelection() : t.document.selection, c = () => {
                let n, a, i;
                const l = (e, t, n) => { try { return t.compareBoundaryPoints(e, n) } catch (e) { return -1 } },
                    c = t.document;
                if (void 0 !== o.bookmark && !1 === nf(o)) { const e = Wm(o); if (e.isSome()) return e.map((e => df(o, [e])[0])).getOr(c.createRange()) }
                try {
                    (n = d()) && !vo(n.anchorNode) && (a = n.rangeCount > 0 ? n.getRangeAt(0) : n.createRange ? n.createRange() : c.createRange(), a = df(o, [a])[0])
                } catch (e) {}
                return a || (a = c.createRange()), a.setStart && 9 === a.startContainer.nodeType && a.collapsed && (i = e.getRoot(), a.setStart(i, 0), a.setEnd(i, 0)), r && s && (0 === l(a.START_TO_START, a, r) && 0 === l(a.END_TO_END, a, r) ? a = s : (r = null, s = null)), a
            }, u = (e, t) => { let n; if (!(e => !!e && Bv(e.startContainer) && Bv(e.endContainer))(e)) return; const a = d(); if (e = o.dispatch("SetSelectionRange", { range: e, forward: t }).range, a) { s = e; try { a.removeAllRanges(), a.addRange(e) } catch (e) {}!1 === t && a.extend && (a.collapse(e.endContainer, e.endOffset), a.extend(e.startContainer, e.startOffset)), r = a.rangeCount > 0 ? a.getRangeAt(0) : null }!e.collapsed && e.startContainer === e.endContainer && a.setBaseAndExtent && e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (n = e.startContainer.childNodes[e.startOffset], n && "IMG" === n.tagName && (a.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), a.anchorNode === e.startContainer && a.focusNode === e.endContainer || a.setBaseAndExtent(n, 0, n, 1))), o.dispatch("AfterSetSelectionRange", { range: e, forward: t }) }, m = () => {
                const t = d(),
                    n = null == t ? void 0 : t.anchorNode,
                    o = null == t ? void 0 : t.focusNode;
                if (!t || !n || !o || vo(n) || vo(o)) return !0;
                const r = e.createRng();
                r.setStart(n, t.anchorOffset), r.collapse(!0);
                const s = e.createRng();
                return s.setStart(o, t.focusOffset), s.collapse(!0), r.compareBoundaryPoints(r.START_TO_START, s) <= 0
            }, f = {
                bookmarkManager: null,
                controlSelection: null,
                dom: e,
                win: t,
                serializer: n,
                editor: o,
                collapse: l,
                setCursorLocation: (t, n) => {
                    const r = e.createRng();
                    C(t) && C(n) ? (r.setStart(t, n), r.setEnd(t, n), u(r), l(!1)) : (xu(e, r, o.getBody(), !0), u(r))
                },
                getContent: e => ((e, t = {}) => ((e, t, n) => Nv(e).selection.getContent(t, n))(e, t.format ? t.format : "html", t))(o, e),
                setContent: i,
                getBookmark: (e, t) => g.getBookmark(e, t),
                moveToBookmark: e => g.moveToBookmark(e),
                select: (t, n) => (((e, t, n) => M.from(t).map((t => {
                    const o = e.nodeIndex(t),
                        r = e.createRng();
                    return r.setStart(t.parentNode, o), r.setEnd(t.parentNode, o + 1), n && (xu(e, r, t, !0), xu(e, r, t, !1)), r
                })))(e, t, n).each(u), t),
                isCollapsed: () => {
                    const e = c(),
                        t = d();
                    return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
                },
                isForward: m,
                setNode: t => (i(e.getOuterHTML(t)), t),
                getNode: () => ((e, t) => {
                    let n, o, r;
                    if (!t) return e;
                    o = t.startContainer, r = t.endContainer;
                    const s = t.startOffset,
                        a = t.endOffset;
                    return n = t.commonAncestorContainer, !t.collapsed && (o === r && a - s < 2 && o.hasChildNodes() && (n = o.childNodes[s]), 3 === o.nodeType && 3 === r.nodeType && (o = o.length === s ? lf(o.nextSibling, !0) : o.parentNode, r = 0 === a ? lf(r.previousSibling, !1) : r.parentNode, o && o === r)) ? o : n && 3 === n.nodeType ? n.parentNode : n
                })(o.getBody(), c()),
                getSel: d,
                setRng: u,
                getRng: c,
                getStart: e => sf(o.getBody(), c(), e),
                getEnd: e => af(o.getBody(), c(), e),
                getSelectedBlocks: (t, n) => ((e, t, n, o) => {
                    let r;
                    const s = [],
                        a = e.getRoot();
                    if (n = e.getParent(n || sf(a, t, t.collapsed), e.isBlock), o = e.getParent(o || af(a, t, t.collapsed), e.isBlock), n && n !== a && s.push(n), n && o && n !== o) {
                        r = n;
                        const t = new Xo(n, a);
                        for (;
                            (r = t.next()) && r !== o;) e.isBlock(r) && s.push(r)
                    }
                    return o && n !== o && o !== a && s.push(o), s
                })(e, c(), t, n),
                normalize: () => {
                    const t = c(),
                        n = d();
                    if (!(gu(n).length > 1) && wu(o)) { const n = mm(e, t); return n.each((e => { u(e, m()) })), n.getOr(t) }
                    return t
                },
                selectorChanged: (e, t) => (a(e, t), f),
                selectorChangedWithUnbind: a,
                getScrollContainer: () => {
                    let t, n = e.getRoot();
                    for (; n && "BODY" !== n.nodeName;) {
                        if (n.scrollHeight > n.clientHeight) { t = n; break }
                        n = n.parentNode
                    }
                    return t
                },
                scrollIntoView: (e, t) => {
                    C(e) ? ((e, t, n) => {
                        (e.inline ? Bm : Lm)(e, t, n)
                    })(o, e, t) : Pm(o, c(), t)
                },
                placeCaretAt: (e, t) => u(nm(e, t, o.getDoc())),
                getBoundingClientRect: () => { const e = c(); return e.collapsed ? Ua.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect() },
                destroy: () => { t = r = s = null, p.destroy() }
            }, g = Tu(f), p = zu(f, o);
            return f.bookmarkManager = g, f.controlSelection = p, f
        },
        Lv = (e, t, n) => {-1 === Bt.inArray(t, n) && (e.addAttributeFilter(n, ((e, t) => { let n = e.length; for (; n--;) e[n].attr(t, null) })), t.push(n)) },
        Pv = (e, t) => {
            const n = ["data-mce-selected"],
                o = t && t.dom ? t.dom : Is.DOM,
                r = t && t.schema ? t.schema : vs(e);
            e.entity_encoding = e.entity_encoding || "named", e.remove_trailing_brs = !("remove_trailing_brs" in e) || e.remove_trailing_brs;
            const s = Wb(e, r);
            return ((e, t, n) => {
                e.addAttributeFilter("data-mce-tabindex", ((e, t) => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        o.attr("tabindex", o.attr("data-mce-tabindex")), o.attr(t, null)
                    }
                })), e.addAttributeFilter("src,href,style", ((e, o) => {
                    const r = "data-mce-" + o,
                        s = t.url_converter,
                        a = t.url_converter_scope;
                    let i = e.length;
                    for (; i--;) {
                        const t = e[i];
                        let l = t.attr(r);
                        void 0 !== l ? (t.attr(o, l.length > 0 ? l : null), t.attr(r, null)) : (l = t.attr(o), "style" === o ? l = n.serializeStyle(n.parseStyle(l), t.name) : s && (l = s.call(a, l, o, t.name)), t.attr(o, l.length > 0 ? l : null))
                    }
                })), e.addAttributeFilter("class", (e => {
                    let t = e.length;
                    for (; t--;) {
                        const n = e[t];
                        let o = n.attr("class");
                        o && (o = n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), n.attr("class", o.length > 0 ? o : null))
                    }
                })), e.addAttributeFilter("data-mce-type", ((e, t, n) => {
                    let o = e.length;
                    for (; o--;) {
                        const t = e[o];
                        if ("bookmark" === t.attr("data-mce-type") && !n.cleanup) {
                            const e = M.from(t.firstChild).exists((e => !mr(e.value)));
                            e ? t.unwrap() : t.remove()
                        }
                    }
                })), e.addNodeFilter("noscript", (e => {
                    let t = e.length;
                    for (; t--;) {
                        const n = e[t].firstChild;
                        n && (n.value = ls.decode(n.value))
                    }
                })), e.addNodeFilter("script,style", ((e, n) => {
                    const o = e => e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
                    let r = e.length;
                    for (; r--;) {
                        const s = e[r],
                            a = s.firstChild ? s.firstChild.value : "";
                        if ("script" === n) {
                            const e = s.attr("type");
                            e && s.attr("type", "mce-no/type" === e ? null : e.replace(/^mce\-/, "")), "xhtml" === t.element_format && a.length > 0 && (s.firstChild.value = "// <![CDATA[\n" + o(a) + "\n// ]]>")
                        } else "xhtml" === t.element_format && a.length > 0 && (s.firstChild.value = "\x3c!--\n" + o(a) + "\n--\x3e")
                    }
                })), e.addNodeFilter("#comment", (e => {
                    let o = e.length;
                    for (; o--;) {
                        const r = e[o];
                        t.preserve_cdata && 0 === r.value.indexOf("[CDATA[") ? (r.name = "#cdata", r.type = 4, r.value = n.decode(r.value.replace(/^\[CDATA\[|\]\]$/g, ""))) : 0 === r.value.indexOf("mce:protected ") && (r.name = "#text", r.type = 3, r.raw = !0, r.value = unescape(r.value).substr(14))
                    }
                })), e.addNodeFilter("xml:namespace,input", ((e, t) => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        7 === o.type ? o.remove() : 1 === o.type && ("input" !== t || o.attr("type") || o.attr("type", "text"))
                    }
                })), e.addAttributeFilter("data-mce-type", (t => { $(t, (t => { "format-caret" === t.attr("data-mce-type") && (t.isEmpty(e.schema.getNonEmptyElements()) ? t.remove() : t.unwrap()) })) })), e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder", ((e, t) => { let n = e.length; for (; n--;) e[n].attr(t, null) }))
            })(s, e, o), {
                schema: r,
                addNodeFilter: s.addNodeFilter,
                addAttributeFilter: s.addAttributeFilter,
                serialize: (n, a = {}) => {
                    const i = { format: "html", ...a },
                        l = ((e, t, n) => ((e, t) => e && e.hasEventListeners("PreProcess") && !t.no_events)(e, n) ? ((e, t, n) => {
                            let o;
                            const r = e.dom;
                            let s = t.cloneNode(!0);
                            const a = document.implementation;
                            if (a.createHTMLDocument) {
                                const e = a.createHTMLDocument("");
                                Bt.each("BODY" === s.nodeName ? s.childNodes : [s], (t => { e.body.appendChild(e.importNode(t, !0)) })), s = "BODY" !== s.nodeName ? e.body.firstChild : e.body, o = r.doc, r.doc = e
                            }
                            return ((e, t) => { e.dispatch("PreProcess", t) })(e, {...n, node: s }), o && (r.doc = o), s
                        })(e, t, n) : t)(t, n, i),
                        d = ((e, t, n) => { const o = fr(n.getInner ? t.innerHTML : e.getOuterHTML(t)); return n.selection || ir(mn(t)) ? o : Bt.trim(o) })(o, l, i),
                        c = ((e, t, n) => {
                            const o = n.selection ? { forced_root_block: !1, ...n } : n,
                                r = e.parse(t, o);
                            return (e => {
                                const t = e => e && "br" === e.name,
                                    n = e.lastChild;
                                if (t(n)) {
                                    const e = n.prev;
                                    t(e) && (n.remove(), e.remove())
                                }
                            })(r), r
                        })(s, d, i);
                    return "tree" === i.format ? c : ((e, t, n, o, r) => { const s = ((e, t, n) => Rf(e, t).serialize(n))(t, n, o); return ((e, t, n) => { if (!t.no_events && e) { const o = ((e, t) => e.dispatch("PostProcess", t))(e, {...t, content: n }); return o.content } return n })(e, r, s) })(t, e, r, c, i)
                },
                addRules: r.addValidElements,
                setRules: r.setValidElements,
                addTempAttr: O(Lv, s, n),
                getTempAttrs: N(n),
                getNodeFilters: s.getNodeFilters,
                getAttributeFilters: s.getAttributeFilters
            }
        },
        Mv = (e, t) => { const n = Pv(e, t); return { schema: n.schema, addNodeFilter: n.addNodeFilter, addAttributeFilter: n.addAttributeFilter, serialize: n.serialize, addRules: n.addRules, setRules: n.setRules, addTempAttr: n.addTempAttr, getTempAttrs: n.getTempAttrs, getNodeFilters: n.getNodeFilters, getAttributeFilters: n.getAttributeFilters } },
        Iv = (e, t, n = {}) => { const o = ((e, t) => ({ format: "html", ...e, set: !0, content: t }))(n, t); return Xb(e, o).map((t => { const n = ((e, t, n) => Ev(e).editor.setContent(t, n))(e, t.content, t); return Qb(e, n.html, t), n.content })).getOr(t) },
        Fv = "autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(","),
        Uv = "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","),
        zv = e => {
            const t = K(Fv, (t => we(e, t))),
                n = e.forced_root_block;
            return !1 !== n && "" !== n || t.push("forced_root_block (false only)"), se(t)
        },
        jv = e => {
            const t = Bt.makeMap(e.plugins, " "),
                n = K(Uv, (e => we(t, e)));
            return se(n)
        },
        Vv = Is.DOM,
        Hv = e => M.from(e).each((e => e.destroy())),
        $v = (() => { const e = {}; return { add: (t, n) => { e[t] = n }, get: t => e[t] ? e[t] : { icons: {} }, has: t => we(e, t) } })(),
        qv = qs.ModelManager,
        Wv = (e, t) => t.dom[e],
        Kv = (e, t) => parseInt($n(t, e), 10),
        Gv = O(Wv, "clientWidth"),
        Yv = O(Wv, "clientHeight"),
        Xv = O(Kv, "margin-top"),
        Qv = O(Kv, "margin-left"),
        Jv = e => {
            const t = [],
                n = () => { const t = e.theme; return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : (() => { const e = () => { throw new Error("Theme did not provide a NotificationManager implementation.") }; return { open: e, close: e, getArgs: e } })() },
                o = () => M.from(t[0]),
                r = () => { $(t, (e => { e.reposition() })) },
                s = e => { J(t, (t => t === e)).each((e => { t.splice(e, 1) })) },
                a = (a, i = !0) => { if (!e.removed && (e => { return (t = e.inline ? e.getBody() : e.getContentAreaContainer(), M.from(t).map(mn)).map(zn).getOr(!1); var t })(e)) return i && e.dispatch("BeforeOpenNotification", { notification: a }), Q(t, (e => { return t = n().getArgs(e), o = a, !(t.type !== o.type || t.text !== o.text || t.progressBar || t.timeout || o.progressBar || o.timeout); var t, o })).getOrThunk((() => { e.editorManager.setActive(e); const i = n().open(a, (() => { s(i), r(), o().fold((() => e.focus()), (e => Mm(mn(e.getEl())))) })); return (e => { t.push(e) })(i), r(), e.dispatch("OpenNotification", { notification: {...i } }), i })) },
                i = N(t);
            return (e => {
                e.on("SkinLoaded", (() => {
                    const t = il(e);
                    t && a({ text: t, type: "warning", timeout: 0 }, !1), r()
                })), e.on("show ResizeEditor ResizeWindow NodeChange", (() => { requestAnimationFrame(r) })), e.on("remove", (() => { $(t.slice(), (e => { n().close(e) })) }))
            })(e), { open: a, close: () => { o().each((e => { n().close(e), s(e), r() })) }, getNotifications: i }
        },
        Zv = qs.PluginManager,
        ey = qs.ThemeManager,
        ty = e => {
            let t = [];
            const n = () => { const t = e.theme; return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : (() => { const e = () => { throw new Error("Theme did not provide a WindowManager implementation.") }; return { open: e, openUrl: e, alert: e, confirm: e, close: e, getParams: e, setParams: e } })() },
                o = (e, t) => (...n) => t ? t.apply(e, n) : void 0,
                r = n => {
                    (t => { e.dispatch("CloseWindow", { dialog: t }) })(n), t = K(t, (e => e !== n)), 0 === t.length && e.focus()
                },
                s = n => { e.editorManager.setActive(e), qm(e), e.ui.show(); const o = n(); return (n => { t.push(n), (t => { e.dispatch("OpenWindow", { dialog: t }) })(n) })(o), o };
            return e.on("remove", (() => { $(t, (e => { n().close(e) })) })), {
                open: (e, t) => s((() => n().open(e, t, r))),
                openUrl: e => s((() => n().openUrl(e, r))),
                alert: (e, t, r) => {
                    const s = n();
                    s.alert(e, o(r || s, t))
                },
                confirm: (e, t, r) => {
                    const s = n();
                    s.confirm(e, o(r || s, t))
                },
                close: () => { M.from(t[t.length - 1]).each((e => { n().close(e), r(e) })) }
            }
        },
        ny = (e, t) => { e.notificationManager.open({ type: "error", text: t }) },
        oy = (e, t) => { e._skinLoaded ? ny(e, t) : e.on("SkinLoaded", (() => { ny(e, t) })) },
        ry = (e, t, n) => { Du(e, t, { message: n }), console.error(n) },
        sy = (e, t, n) => n ? `Failed to load ${e}: ${n} from url ${t}` : `Failed to load ${e} url: ${t}`,
        ay = (e, ...t) => {
            const n = window.console;
            n && (n.error ? n.error(e, ...t) : n.log(e, ...t))
        },
        iy = (e, t) => {
            const n = e.editorManager.baseURL + "/skins/content",
                o = `content${e.editorManager.suffix}.css`,
                r = !0 === e.inline;
            return H(t, (t => (e => /^[a-z0-9\-]+$/i.test(e))(t) && !r ? `${n}/${t}/${o}` : e.documentBaseURI.toAbsolute(t)))
        },
        ly = P,
        dy = () => {
            let e = {};
            const t = (e, t) => ({ status: e, resultUri: t }),
                n = t => t in e;
            return { hasBlobUri: n, getResultUri: t => { const n = e[t]; return n ? n.resultUri : null }, isPending: t => !!n(t) && 1 === e[t].status, isUploaded: t => !!n(t) && 2 === e[t].status, markPending: n => { e[n] = t(1, null) }, markUploaded: (n, o) => { e[n] = t(2, o) }, removeFailed: t => { delete e[t] }, destroy: () => { e = {} } }
        };
    let cy = 0;
    const uy = (e, t) => {
            const n = {},
                o = (e, n) => new Promise(((o, r) => {
                    const s = new XMLHttpRequest;
                    s.open("POST", t.url), s.withCredentials = t.credentials, s.upload.onprogress = e => { n(e.loaded / e.total * 100) }, s.onerror = () => { r("Image upload failed due to a XHR Transport error. Code: " + s.status) }, s.onload = () => {
                        if (s.status < 200 || s.status >= 300) return void r("HTTP Error: " + s.status);
                        const e = JSON.parse(s.responseText);
                        var n, a;
                        e && m(e.location) ? o((n = t.basePath, a = e.location, n ? n.replace(/\/$/, "") + "/" + a.replace(/^\//, "") : a)) : r("Invalid JSON: " + s.responseText)
                    };
                    const a = new FormData;
                    a.append("file", e.blob(), e.filename()), s.send(a)
                })),
                r = (e, t) => ({ url: t, blobInfo: e, status: !0 }),
                s = (e, t) => ({ url: "", blobInfo: e, status: !1, error: t }),
                a = (e, t) => { Bt.each(n[e], (e => { e(t) })), delete n[e] };
            return !1 === x(t.handler) && (t.handler = o), {
                upload: (i, l) => t.url || t.handler !== o ? ((o, i) => (o = Bt.grep(o, (t => !e.isUploaded(t.blobUri()))), Promise.all(Bt.map(o, (o => e.isPending(o.blobUri()) ? (e => { const t = e.blobUri(); return new Promise((e => { n[t] = n[t] || [], n[t].push(e) })) })(o) : ((t, n, o) => (e.markPending(t.blobUri()), new Promise((i => {
                    let l, d;
                    try {
                        const c = () => { l && (l.close(), d = S) },
                            u = n => { c(), e.markUploaded(t.blobUri(), n), a(t.blobUri(), r(t, n)), i(r(t, n)) },
                            f = n => { c(), e.removeFailed(t.blobUri()), a(t.blobUri(), s(t, n)), i(s(t, n)) };
                        d = e => { e < 0 || e > 100 || M.from(l).orThunk((() => M.from(o).map(B))).each((t => { l = t, t.progressBar.value(e) })) }, n(t, d).then(u, (e => { f(m(e) ? { message: e } : e) }))
                    } catch (e) { i(s(t, e)) }
                }))))(o, t.handler, i))))))(i, l) : new Promise((e => { e([]) }))
            }
        },
        my = e => () => e.notificationManager.open({ text: e.translate("Image uploading..."), type: "info", timeout: -1, progressBar: !0 }),
        fy = (e, t) => uy(t, { url: Vi(e), basePath: Hi(e), credentials: $i(e), handler: qi(e) }),
        gy = e => {
            const t = (() => {
                let e = [];
                const t = e => {
                        if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                        const t = e.id || "blobid" + cy++ + (() => { const e = () => Math.round(4294967295 * Math.random()).toString(36); return "s" + (new Date).getTime().toString(36) + e() + e() + e() })(),
                            n = e.name || t,
                            o = e.blob;
                        var r;
                        return { id: N(t), name: N(n), filename: N(e.filename || n + "." + (r = o.type, { "image/jpeg": "jpg", "image/jpg": "jpg", "image/gif": "gif", "image/png": "png", "image/apng": "apng", "image/avif": "avif", "image/svg+xml": "svg", "image/webp": "webp", "image/bmp": "bmp", "image/tiff": "tiff" }[r.toLowerCase()] || "dat")), blob: N(o), base64: N(e.base64), blobUri: N(e.blobUri || URL.createObjectURL(o)), uri: N(e.uri) }
                    },
                    n = t => Q(e, t).getOrUndefined(),
                    o = e => n((t => t.id() === e));
                return { create: (e, n, o, r, s) => { if (m(e)) return t({ id: e, name: r, filename: s, blob: n, base64: o }); if (f(e)) return t(e); throw new Error("Unknown input type") }, add: t => { o(t.id()) || e.push(t) }, get: o, getByUri: e => n((t => t.blobUri() === e)), getByData: (e, t) => n((n => n.base64() === e && n.blob().type === t)), findFirst: n, removeByUri: t => { e = K(e, (e => e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()), !1))) }, destroy: () => { $(e, (e => { URL.revokeObjectURL(e.blobUri()) })), e = [] } }
            })();
            let n, o;
            const r = dy(),
                s = [],
                a = (e => {
                    const t = zs(null);
                    return e.on("change AddUndo", (e => { t.set({...e.level }) })), {
                        fireIfChanged: () => {
                            const n = e.undoManager.data;
                            le(n).filter((e => !Cv(t.get(), e))).each((t => { e.setDirty(!0), e.dispatch("change", { level: t, lastLevel: ae(n, n.length - 2).getOrNull() }) }))
                        }
                    }
                })(e),
                i = t => n => e.selection ? t(n) : [],
                l = (e, t, n) => {
                    let o = 0;
                    do { o = e.indexOf(t, o), -1 !== o && (e = e.substring(0, o) + n + e.substr(o + t.length), o += n.length - t.length + 1) } while (-1 !== o);
                    return e
                },
                d = (e, t, n) => { const o = `src="${n}"${n===Nt.transparentSrc?' data-mce-placeholder="1"':""}`; return e = l(e, `src="${t}"`, o), l(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"') },
                c = (t, n) => { $(e.undoManager.data, (e => { "fragmented" === e.type ? e.fragments = H(e.fragments, (e => d(e, t, n))) : e.content = d(e.content, t, n) })) },
                u = () => (n || (n = fy(e, r)), h().then(i((o => {
                    const r = H(o, (e => e.blobInfo));
                    return n.upload(r, my(e)).then(i((n => {
                        const r = [],
                            s = H(n, ((n, s) => {
                                const a = o[s].blobInfo,
                                    i = o[s].image;
                                let l = !1;
                                return n.status && Ui(e) ? (t.removeByUri(i.src), _v(e) || ((t, n) => {
                                    const o = e.convertURL(n, "src");
                                    var r;
                                    c(t.src, n), qt(mn(t), { src: Fi(e) ? (r = n, r + (-1 === r.indexOf("?") ? "?" : "&") + (new Date).getTime()) : n, "data-mce-src": o })
                                })(i, n.url)) : n.error && (n.error.remove && (c(i.getAttribute("src"), Nt.transparentSrc), r.push(i), l = !0), ((e, t) => { oy(e, $s.translate(["Failed to upload image: {0}", t])) })(e, n.error.message)), { element: i, status: n.status, uploadUri: n.url, blobInfo: a, removed: l }
                            }));
                        return s.length > 0 && a.fireIfChanged(), r.length > 0 && !_v(e) && e.undoManager.transact((() => { $(r, (n => { e.dom.remove(n), t.removeByUri(n.src) })) })), s
                    })))
                })))),
                g = () => Ii(e) ? u() : Promise.resolve([]),
                p = e => te(s, (t => t(e))),
                h = () => (o || (o = ((e, t) => {
                    const n = {};
                    return {
                        findAll: (o, r) => {
                            r || (r = P);
                            const s = K((e => e ? de(e.getElementsByTagName("img")) : [])(o), (t => { const n = t.src; return !t.hasAttribute("data-mce-bogus") && !t.hasAttribute("data-mce-placeholder") && !(!n || n === Nt.transparentSrc) && (0 === n.indexOf("blob:") ? !e.isUploaded(n) && r(t) : 0 === n.indexOf("data:") && r(t)) })),
                                a = H(s, (e => {
                                    if (void 0 !== n[e.src]) return new Promise((t => {
                                        n[e.src].then((n => {
                                            if ("string" == typeof n) return n;
                                            t({ image: e, blobInfo: n.blobInfo })
                                        }))
                                    }));
                                    const o = new Promise(((n, o) => {
                                        ((e, t, n, o) => {
                                            let r, s;
                                            if (0 === t.src.indexOf("blob:")) return s = e.getByUri(t.src), void(s ? n({ image: t, blobInfo: s }) : Eb(t.src).then((o => { Nb(o).then((a => { r = Sb(a).data, s = e.create(Ab(), o, r), e.add(s), n({ image: t, blobInfo: s }) })) }), (e => { o(e) })));
                                            const { data: a, type: i } = Sb(t.src);
                                            r = a, s = e.getByData(r, i), s ? n({ image: t, blobInfo: s }) : Eb(t.src).then((o => { s = e.create(Ab(), o, r), e.add(s), n({ image: t, blobInfo: s }) }), (e => { o(e) }))
                                        })(t, e, n, o)
                                    })).then((e => (delete n[e.image.src], e))).catch((t => (delete n[e.src], t)));
                                    return n[e.src] = o, o
                                }));
                            return Promise.all(a)
                        }
                    }
                })(r, t)), o.findAll(e.getBody(), p).then(i((t => (t = K(t, (t => "string" != typeof t || (oy(e, t), !1))), _v(e) || $(t, (e => { c(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src") })), t))))),
                b = n => n.replace(/src="(blob:[^"]+)"/g, ((n, o) => { const s = r.getResultUri(o); if (s) return 'src="' + s + '"'; let a = t.getByUri(o); return a || (a = Y(e.editorManager.get(), ((e, t) => e || t.editorUpload && t.editorUpload.blobCache.getByUri(o)), null)), a ? 'src="data:' + a.blob().type + ";base64," + a.base64() + '"' : n }));
            return e.on("SetContent", (() => { Ii(e) ? g() : h() })), e.on("RawSaveContent", (e => { e.content = b(e.content) })), e.on("GetContent", (e => { e.source_view || "raw" === e.format || "tree" === e.format || (e.content = b(e.content)) })), e.on("PostRender", (() => {
                e.parser.addNodeFilter("img", (e => {
                    $(e, (e => {
                        const n = e.attr("src");
                        if (t.getByUri(n)) return;
                        const o = r.getResultUri(n);
                        o && e.attr("src", o)
                    }))
                }))
            })), { blobCache: t, addFilter: e => { s.push(e) }, uploadImages: u, uploadImagesAuto: g, scanForImages: h, destroy: () => { t.destroy(), r.destroy(), o = n = null } }
        },
        py = { remove_similar: !0, inherit: !1 },
        hy = { selector: "td,th", ...py },
        by = { tablecellbackgroundcolor: { styles: { backgroundColor: "%value" }, ...hy }, tablecellverticalalign: { styles: { "vertical-align": "%value" }, ...hy }, tablecellbordercolor: { styles: { borderColor: "%value" }, ...hy }, tablecellclass: { classes: ["%value"], ...hy }, tableclass: { selector: "table", classes: ["%value"], ...py }, tablecellborderstyle: { styles: { borderStyle: "%value" }, ...hy }, tablecellborderwidth: { styles: { borderWidth: "%value" }, ...hy } },
        vy = N(by),
        yy = Bt.each,
        Cy = Is.DOM,
        xy = (e, t) => {
            let n, o, r;
            const s = t && t.schema || vs({}),
                a = e => { o = "string" == typeof e ? { name: e, classes: [], attrs: {} } : e; const t = Cy.create(o.name); return ((e, t) => { t.classes.length && Cy.addClass(e, t.classes.join(" ")), Cy.setAttribs(e, t.attrs) })(t, o), t },
                i = (e, t, n) => {
                    let o, r;
                    const l = t.length > 0 && t[0],
                        d = l && l.name,
                        c = ((e, t) => {
                            const n = "string" != typeof e ? e.nodeName.toLowerCase() : e,
                                o = s.getElementRule(n),
                                r = o && o.parentsRequired;
                            return !(!r || !r.length) && (t && -1 !== Bt.inArray(r, t) ? t : r[0])
                        })(e, d);
                    if (c) d === c ? (r = t[0], t = t.slice(1)) : r = c;
                    else if (l) r = t[0], t = t.slice(1);
                    else if (!n) return e;
                    return r && (o = a(r), o.appendChild(e)), n && (o || (o = Cy.create("div"), o.appendChild(e)), Bt.each(n, (t => {
                        const n = a(t);
                        o.insertBefore(n, e)
                    }))), i(o, t, r && r.siblings)
                };
            return e && e.length ? (o = e[0], n = a(o), r = Cy.create("div"), r.appendChild(i(n, e.slice(1), o.siblings)), r) : ""
        },
        wy = e => {
            let t;
            const n = { classes: [], attrs: {} };
            return "*" !== (e = n.selector = Bt.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, ((e, t, o, r, s) => {
                switch (t) {
                    case "#":
                        n.attrs.id = o;
                        break;
                    case ".":
                        n.classes.push(o);
                        break;
                    case ":":
                        -1 !== Bt.inArray("checked disabled enabled read-only required".split(" "), o) && (n.attrs[o] = o)
                }
                if ("[" === r) {
                    const e = s.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                    e && (n.attrs[e[1]] = e[2])
                }
                return ""
            }))), n.name = t || "div", n
        },
        ky = (e, t) => {
            let n, o, r, s = "",
                a = gl(e);
            if ("" === a) return "";
            const i = e => e.replace(/%(\w+)/g, "");
            if ("string" == typeof t) {
                if (!(t = e.formatter.get(t))) return;
                t = t[0]
            }
            if ("preview" in t) {
                const e = xe(t, "preview");
                if (Dt(e, !1)) return "";
                a = e.getOr(a)
            }
            n = t.block || t.inline || "span";
            const l = (d = t.selector) && "string" == typeof d ? (d = (d = d.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), Bt.map(d.split(/(?:>|\s+(?![^\[\]]+\]))/), (e => {
                const t = Bt.map(e.split(/(?:~\+|~|\+)/), wy),
                    n = t.pop();
                return t.length && (n.siblings = t), n
            })).reverse()) : [];
            var d;
            l.length ? (l[0].name || (l[0].name = n), n = t.selector, o = xy(l, e)) : o = xy([n], e);
            const c = Cy.select(n, o)[0] || o.firstChild;
            return yy(t.styles, ((e, t) => {
                const n = i(e);
                n && Cy.setStyle(c, t, n)
            })), yy(t.attributes, ((e, t) => {
                const n = i(e);
                n && Cy.setAttrib(c, t, n)
            })), yy(t.classes, (e => {
                const t = i(e);
                Cy.hasClass(c, t) || Cy.addClass(c, t)
            })), e.dispatch("PreviewFormats"), Cy.setStyles(o, { position: "absolute", left: -65535 }), e.getBody().appendChild(o), r = Cy.getStyle(e.getBody(), "fontSize", !0), r = /px$/.test(r) ? parseInt(r, 10) : 0, yy(a.split(" "), (t => {
                let n = Cy.getStyle(c, t, !0);
                if (!("background-color" === t && /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) && (n = Cy.getStyle(e.getBody(), t, !0), "#ffffff" === Pc(n).toLowerCase()) || "color" === t && "#000000" === Pc(n).toLowerCase())) {
                    if ("font-size" === t && /em|%$/.test(n)) {
                        if (0 === r) return;
                        n = parseFloat(n) / (/%$/.test(n) ? 100 : 1) * r + "px"
                    }
                    "border" === t && n && (s += "padding:0 2px;"), s += t + ":" + n + ";"
                }
            })), e.dispatch("AfterPreviewFormats"), Cy.remove(o), s
        },
        Sy = e => {
            const t = (e => {
                    const t = {},
                        n = (e, o) => { e && (m(e) ? (p(o) || (o = [o]), $(o, (e => { v(e.deep) && (e.deep = !Yc(e)), v(e.split) && (e.split = !Yc(e) || Xc(e)), v(e.remove) && Yc(e) && !Xc(e) && (e.remove = "none"), Yc(e) && Xc(e) && (e.mixed = !0, e.block_expand = !0), m(e.classes) && (e.classes = e.classes.split(/\s+/)) })), t[e] = o) : fe(e, ((e, t) => { n(t, e) }))) };
                    return n((e => {
                        const t = e.dom,
                            n = e.schema.type,
                            o = {
                                valigntop: [{ selector: "td,th", styles: { verticalAlign: "top" } }],
                                valignmiddle: [{ selector: "td,th", styles: { verticalAlign: "middle" } }],
                                valignbottom: [{ selector: "td,th", styles: { verticalAlign: "bottom" } }],
                                alignleft: [{ selector: "figure.image", collapsed: !1, classes: "align-left", ceFalseOverride: !0, preview: "font-family font-size" }, { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "left" }, inherit: !1, preview: !1 }, { selector: "img,audio,video", collapsed: !1, styles: { float: "left" }, preview: "font-family font-size" }, { selector: "table", collapsed: !1, styles: { marginLeft: "0px", marginRight: "auto" }, onformat: e => { t.setStyle(e, "float", null) }, preview: "font-family font-size" }],
                                aligncenter: [{ selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "center" }, inherit: !1, preview: "font-family font-size" }, { selector: "figure.image", collapsed: !1, classes: "align-center", ceFalseOverride: !0, preview: "font-family font-size" }, { selector: "img,audio,video", collapsed: !1, styles: { display: "block", marginLeft: "auto", marginRight: "auto" }, preview: !1 }, { selector: "table", collapsed: !1, styles: { marginLeft: "auto", marginRight: "auto" }, preview: "font-family font-size" }],
                                alignright: [{ selector: "figure.image", collapsed: !1, classes: "align-right", ceFalseOverride: !0, preview: "font-family font-size" }, { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "right" }, inherit: !1, preview: "font-family font-size" }, { selector: "img,audio,video", collapsed: !1, styles: { float: "right" }, preview: "font-family font-size" }, { selector: "table", collapsed: !1, styles: { marginRight: "0px", marginLeft: "auto" }, onformat: e => { t.setStyle(e, "float", null) }, preview: "font-family font-size" }],
                                alignjustify: [{ selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "justify" }, inherit: !1, preview: "font-family font-size" }],
                                bold: [{ inline: "strong", remove: "all", preserve_attributes: ["class", "style"] }, { inline: "span", styles: { fontWeight: "bold" } }, { inline: "b", remove: "all", preserve_attributes: ["class", "style"] }],
                                italic: [{ inline: "em", remove: "all", preserve_attributes: ["class", "style"] }, { inline: "span", styles: { fontStyle: "italic" } }, { inline: "i", remove: "all", preserve_attributes: ["class", "style"] }],
                                underline: [{ inline: "span", styles: { textDecoration: "underline" }, exact: !0 }, { inline: "u", remove: "all", preserve_attributes: ["class", "style"] }],
                                strikethrough: (() => {
                                    const e = { inline: "span", styles: { textDecoration: "line-through" }, exact: !0 },
                                        t = { inline: "strike", remove: "all", preserve_attributes: ["class", "style"] },
                                        o = { inline: "s", remove: "all", preserve_attributes: ["class", "style"] };
                                    return "html4" !== n ? [o, e, t] : [e, o, t]
                                })(),
                                forecolor: { inline: "span", styles: { color: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 },
                                hilitecolor: { inline: "span", styles: { backgroundColor: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 },
                                fontname: { inline: "span", toggle: !1, styles: { fontFamily: "%value" }, clear_child_styles: !0 },
                                fontsize: { inline: "span", toggle: !1, styles: { fontSize: "%value" }, clear_child_styles: !0 },
                                lineheight: { selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div", styles: { lineHeight: "%value" } },
                                fontsize_class: { inline: "span", attributes: { class: "%value" } },
                                blockquote: { block: "blockquote", wrapper: !0, remove: "all" },
                                subscript: { inline: "sub" },
                                superscript: { inline: "sup" },
                                code: { inline: "code" },
                                link: { inline: "a", selector: "a", remove: "all", split: !0, deep: !0, onmatch: (e, t, n) => yo(e) && e.hasAttribute("href"), onformat: (e, n, o) => { Bt.each(o, ((n, o) => { t.setAttrib(e, o, n) })) } },
                                lang: { inline: "span", clear_child_styles: !0, remove_similar: !0, attributes: { lang: "%value", "data-mce-lang": e => { var t; return null !== (t = null == e ? void 0 : e.customValue) && void 0 !== t ? t : null } } },
                                removeformat: [{ selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small", remove: "all", split: !0, expand: !1, block_expand: !0, deep: !0 }, { selector: "span", attributes: ["style", "class"], remove: "empty", split: !0, expand: !1, deep: !0 }, { selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0 }]
                            };
                        return Bt.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), (e => { o[e] = { block: e, remove: "all" } })), o
                    })(e)), n(vy()), n(fl(e)), { get: e => C(e) ? t[e] : t, has: e => we(t, e), register: n, unregister: e => (e && t[e] && delete t[e], t) }
                })(e),
                n = zs(null);
            return (e => {
                e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
                for (let t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
                e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
            })(e), (e => {
                e.on("mouseup keydown", (t => {
                    ((e, t) => {
                        const n = e.selection,
                            o = e.getBody();
                        Hp(e, null, !1), 8 !== t && 46 !== t || !n.isCollapsed() || n.getStart().innerHTML !== Ip || Hp(e, pc(o, n.getStart())), 37 !== t && 39 !== t || Hp(e, pc(o, n.getStart()))
                    })(e, t.keyCode)
                }))
            })(e), {
                get: t.get,
                has: t.has,
                register: t.register,
                unregister: t.unregister,
                apply: (t, n, o) => {
                    ((e, t, n, o) => { Nv(e).formatter.apply(t, n, o) })(e, t, n, o)
                },
                remove: (t, n, o, r) => {
                    ((e, t, n, o, r) => { Nv(e).formatter.remove(t, n, o, r) })(e, t, n, o, r)
                },
                toggle: (t, n, o) => {
                    ((e, t, n, o) => { Nv(e).formatter.toggle(t, n, o) })(e, t, n, o)
                },
                match: (t, n, o, r) => ((e, t, n, o, r) => Nv(e).formatter.match(t, n, o, r))(e, t, n, o, r),
                closest: t => ((e, t) => Nv(e).formatter.closest(t))(e, t),
                matchAll: (t, n) => ((e, t, n) => Nv(e).formatter.matchAll(t, n))(e, t, n),
                matchNode: (t, n, o, r) => ((e, t, n, o, r) => Nv(e).formatter.matchNode(t, n, o, r))(e, t, n, o, r),
                canApply: t => ((e, t) => Nv(e).formatter.canApply(t))(e, t),
                formatChanged: (t, o, r, s) => ((e, t, n, o, r, s) => Nv(e).formatter.formatChanged(t, n, o, r, s))(e, n, t, o, r, s),
                getCssText: O(ky, e)
            }
        },
        _y = e => {
            switch (e.toLowerCase()) {
                case "undo":
                case "redo":
                case "mcefocus":
                    return !0;
                default:
                    return !1
            }
        },
        Ey = e => {
            const t = Ws(),
                n = zs(0),
                o = zs(0),
                r = {
                    data: [],
                    typing: !1,
                    beforeChange: () => {
                        ((e, t, n) => { Nv(e).undoManager.beforeChange(t, n) })(e, n, t)
                    },
                    add: (s, a) => ((e, t, n, o, r, s, a) => Nv(e).undoManager.add(t, n, o, r, s, a))(e, r, o, n, t, s, a),
                    undo: () => ((e, t, n, o) => Nv(e).undoManager.undo(t, n, o))(e, r, n, o),
                    redo: () => ((e, t, n) => Nv(e).undoManager.redo(t, n))(e, o, r.data),
                    clear: () => {
                        ((e, t, n) => { Nv(e).undoManager.clear(t, n) })(e, r, o)
                    },
                    reset: () => {
                        ((e, t) => { Nv(e).undoManager.reset(t) })(e, r)
                    },
                    hasUndo: () => ((e, t, n) => Nv(e).undoManager.hasUndo(t, n))(e, r, o),
                    hasRedo: () => ((e, t, n) => Nv(e).undoManager.hasRedo(t, n))(e, r, o),
                    transact: t => ((e, t, n, o) => Nv(e).undoManager.transact(t, n, o))(e, r, n, t),
                    ignore: t => {
                        ((e, t, n) => { Nv(e).undoManager.ignore(t, n) })(e, n, t)
                    },
                    extra: (t, n) => {
                        ((e, t, n, o, r) => { Nv(e).undoManager.extra(t, n, o, r) })(e, r, o, t, n)
                    }
                };
            return _v(e) || ((e, t, n) => {
                const o = zs(!1),
                    r = e => { wv(t, !1, n), t.add({}, e) };
                e.on("init", (() => { t.add() })), e.on("BeforeExecCommand", (e => {
                    const o = e.command;
                    _y(o) || (kv(t, n), t.beforeChange())
                })), e.on("ExecCommand", (e => {
                    const t = e.command;
                    _y(t) || r(e)
                })), e.on("ObjectResizeStart cut", (() => { t.beforeChange() })), e.on("SaveContent ObjectResized blur", r), e.on("dragend", r), e.on("keyup", (n => {
                    const s = n.keyCode;
                    n.isDefaultPrevented() || ((s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s || n.ctrlKey) && (r(), e.nodeChanged()), 46 !== s && 8 !== s || e.nodeChanged(), o.get() && t.typing && !1 === Cv(hv(e), t.data[0]) && (!1 === e.isDirty() && e.setDirty(!0), e.dispatch("TypingUndo"), o.set(!1), e.nodeChanged()))
                })), e.on("keydown", (e => { const s = e.keyCode; if (e.isDefaultPrevented()) return; if (s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s) return void(t.typing && r(e)); const a = e.ctrlKey && !e.altKey || e.metaKey;!(s < 16 || s > 20) || 224 === s || 91 === s || t.typing || a || (t.beforeChange(), wv(t, !0, n), t.add({}, e), o.set(!0)) })), e.on("mousedown", (e => { t.typing && r(e) })), e.on("input", (e => {
                    var t;
                    e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data || (e => "insertFromPaste" === e.inputType || "insertFromDrop" === e.inputType)(e)) && r(e)
                })), e.on("AddUndo Undo Redo ClearUndos", (t => { t.isDefaultPrevented() || e.nodeChanged() }))
            })(e, r, n), (e => { e.addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo") })(e), r
        },
        Ny = [9, 27, Uu.HOME, Uu.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, Uu.DOWN, Uu.UP, Uu.LEFT, Uu.RIGHT].concat(Nt.browser.isFirefox() ? [224] : []),
        Ry = "data-mce-placeholder",
        Ay = e => "keydown" === e.type || "keyup" === e.type,
        Oy = e => { const t = e.keyCode; return t === Uu.BACKSPACE || t === Uu.DELETE },
        Ty = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        By = (e, t) => pn(mn(t), nl(e)),
        Dy = (e, t, n) => { const o = ((e, t, n) => K(Is.DOM.getParents(n.container(), "*", t), e))(e, t, n); return M.from(o[o.length - 1]) },
        Ly = (e, t) => {
            if (!t) return t;
            const n = t.container(),
                o = t.offset();
            return e ? br(n) ? No(n.nextSibling) ? Ua(n.nextSibling, 0) : Ua.after(n) : Cr(t) ? Ua(n, o + 1) : t : br(n) ? No(n.previousSibling) ? Ua(n.previousSibling, n.previousSibling.data.length) : Ua.before(n) : xr(t) ? Ua(n, o - 1) : t
        },
        Py = O(Ly, !0),
        My = O(Ly, !1),
        Iy = (e, t) => {
            const n = e => e.stopImmediatePropagation();
            e.on("beforeinput input", n, !0), e.getDoc().execCommand(t), e.off("beforeinput input", n)
        },
        Fy = e => Iy(e, "Delete"),
        Uy = e => nr(e) || rr(e),
        zy = (e, t) => vn(e, t) ? $o(t, Uy, (e => t => bn(e, mn(t.dom.parentNode)))(e)) : M.none(),
        jy = e => {
            e.dom.isEmpty(e.getBody()) && (e.setContent(""), (e => {
                const t = e.getBody(),
                    n = t.firstChild && e.dom.isBlock(t.firstChild) ? t.firstChild : t;
                e.selection.setCursorLocation(n, 0)
            })(e))
        },
        Vy = (e, t) => ({ from: e, to: t }),
        Hy = (e, t) => {
            const n = mn(e),
                o = mn(t.container());
            return zy(n, o).map((e => ((e, t) => ({ block: e, position: t }))(e, t)))
        },
        $y = e => { const t = Nn(e); return J(t, Zo).fold(N(t), (e => t.slice(0, e))) },
        qy = e => { const t = $y(e); return $(t, to), t },
        Wy = (e, t) => { const n = Qf(t, e); return Q(n.reverse(), (e => qr(e))).each(to) },
        Ky = (e, t, n, o) => {
            if (qr(n)) return Gf(n), uc(n.dom);
            0 === K(_n(o), (e => !qr(e))).length && qr(t) && Yn(o, cn("br"));
            const r = cc(n.dom, Ua.before(o.dom));
            return $(qy(t), (e => { Yn(o, e) })), Wy(e, t), r
        },
        Gy = (e, t, n) => { if (qr(n)) return to(n), qr(t) && Gf(t), uc(t.dom); const o = mc(n.dom); return $(qy(t), (e => { Jn(n, e) })), Wy(e, t), o },
        Yy = (e, t) => { lc(e, t.dom).map((e => e.getNode())).map(mn).filter(tr).each(to) },
        Xy = (e, t, n) => (Yy(!0, t), Yy(!1, n), ((e, t) => vn(t, e) ? ((e, t) => { const n = Qf(t, e); return M.from(n[n.length - 1]) })(t, e) : M.none())(t, n).fold(O(Gy, e, t, n), O(Ky, e, t, n))),
        Qy = (e, t, n, o) => t ? Xy(e, o, n) : Xy(e, n, o),
        Jy = (e, t) => {
            const n = mn(e.getBody()),
                o = ((e, t, n) => n.collapsed ? ((e, t, n) => {
                    const o = Hy(e, Ua.fromRangeStart(n)),
                        r = o.bind((n => sc(t, e, n.position).bind((n => Hy(e, n).map((n => ((e, t, n) => Do(n.position.getNode()) && !1 === qr(n.block) ? lc(!1, n.block.dom).bind((o => o.isEqual(n.position) ? sc(t, e, o).bind((t => Hy(e, t))) : M.some(n))).getOr(n) : n)(e, t, n)))))));
                    return Lt(o, r, Vy).filter((e => (e => !1 === bn(e.from.block, e.to.block))(e) && (e => wn(e.from.block).bind((t => wn(e.to.block).filter((e => bn(t, e))))).isSome())(e) && (e => !1 === Mo(e.from.block.dom) && !1 === Mo(e.to.block.dom))(e)))
                })(e, t, n) : M.none())(n.dom, t, e.selection.getRng()).map((o => () => { Qy(n, t, o.from.block, o.to.block).each((t => { e.selection.setRng(t.toRange()) })) }));
            return o
        },
        Zy = (e, t) => {
            const n = mn(t),
                o = O(bn, e);
            return Ho(n, ar, o).isSome()
        },
        eC = e => {
            const t = mn(e.getBody());
            return ((e, t) => {
                const n = cc(e.dom, Ua.fromRangeStart(t)).isNone(),
                    o = dc(e.dom, Ua.fromRangeEnd(t)).isNone();
                return !((e, t) => Zy(e, t.startContainer) || Zy(e, t.endContainer))(e, t) && n && o
            })(t, e.selection.getRng()) ? (e => M.some((() => { e.setContent(""), e.selection.setCursorLocation() })))(e) : ((e, t) => { const n = t.getRng(); return Lt(zy(e, mn(n.startContainer)), zy(e, mn(n.endContainer)), ((o, r) => !1 === bn(o, r) ? M.some((() => { n.deleteContents(), Qy(e, !0, o, r).each((e => { t.setRng(e.toRange()) })) })) : M.none())).getOr(M.none()) })(t, e.selection)
        },
        tC = (e, t) => e.selection.isCollapsed() ? M.none() : eC(e),
        nC = Po,
        oC = Mo,
        rC = (e, t, n, o, r) => M.from(t._selectionOverrides.showCaret(e, n, o, r)),
        sC = (e, t) => e.dispatch("BeforeObjectSelected", { target: t }).isDefaultPrevented() ? M.none() : M.some((e => { const t = e.ownerDocument.createRange(); return t.selectNode(e), t })(t)),
        aC = (e, t, n) => t.collapsed ? ((e, t, n) => {
            const o = Fd(1, e.getBody(), t),
                r = Ua.fromRangeStart(o),
                s = r.getNode();
            if (hd(s)) return rC(1, e, s, !r.isAtEnd(), !1);
            const a = r.getNode(!0);
            if (hd(a)) return rC(1, e, a, !1, !1);
            const i = e.dom.getParent(r.getNode(), (e => oC(e) || nC(e)));
            return hd(i) ? rC(1, e, i, !1, n) : M.none()
        })(e, t, n).getOr(t) : t,
        iC = e => Wf(e) || Vf(e),
        lC = e => Kf(e) || Hf(e),
        dC = (e, t, n, o, r, s) => {
            rC(o, e, s.getNode(!r), r, !0).each((n => {
                if (t.collapsed) {
                    const e = t.cloneRange();
                    r ? e.setEnd(n.startContainer, n.startOffset) : e.setStart(n.endContainer, n.endOffset), e.deleteContents()
                } else t.deleteContents();
                e.selection.setRng(n)
            })), ((e, t) => { No(t) && 0 === t.data.length && e.remove(t) })(e.dom, n)
        },
        cC = (e, t) => ((e, t) => {
            const n = e.selection.getRng();
            if (!No(n.commonAncestorContainer)) return M.none();
            const o = t ? $d.Forwards : $d.Backwards,
                r = tc(e.getBody()),
                s = O(Vd, t ? r.next : r.prev),
                a = t ? iC : lC,
                i = zd(o, e.getBody(), n),
                l = Ly(t, s(i));
            if (!l || !Hd(i, l)) return M.none();
            if (a(l)) return M.some((() => dC(e, n, i.getNode(), o, t, l)));
            const d = s(l);
            return d && a(d) && Hd(l, d) ? M.some((() => dC(e, n, i.getNode(), o, t, d))) : M.none()
        })(e, t),
        uC = ci([{ remove: ["element"] }, { moveToElement: ["element"] }, { moveToPosition: ["position"] }]),
        mC = (e, t, n) => sc(t, e, n).bind((o => { return r = o.getNode(), ar(mn(r)) || rr(mn(r)) || ((e, t, n, o) => { const r = t => er(mn(t)) && !Td(n, o, e); return Ud(!t, n).fold((() => Ud(t, o).fold(L, r)), r) })(e, t, n, o) ? M.none() : t && Mo(o.getNode()) || !1 === t && Mo(o.getNode(!0)) ? ((e, t, n, o) => { const r = o.getNode(!1 === t); return zy(mn(e), mn(n.getNode())).map((e => qr(e) ? uC.remove(e.dom) : uC.moveToElement(r))).orThunk((() => M.some(uC.moveToElement(r)))) })(e, t, n, o) : t && Kf(n) || !1 === t && Wf(n) ? M.some(uC.moveToPosition(o)) : M.none(); var r })),
        fC = (e, t) => M.from(ip(e.getBody(), t)),
        gC = (e, t) => {
            const n = e.selection.getNode();
            return fC(e, n).filter(Mo).fold((() => ((e, t, n) => {
                const o = Fd(t ? 1 : -1, e, n),
                    r = Ua.fromRangeStart(o),
                    s = mn(e);
                return !1 === t && Kf(r) ? M.some(uC.remove(r.getNode(!0))) : t && Wf(r) ? M.some(uC.remove(r.getNode())) : !1 === t && Wf(r) && dg(s, r) ? cg(s, r).map((e => uC.remove(e.getNode()))) : t && Kf(r) && lg(s, r) ? ug(s, r).map((e => uC.remove(e.getNode()))) : ((e, t, n) => ((e, t) => {
                    const n = t.getNode(!1 === e),
                        o = e ? "after" : "before";
                    return yo(n) && n.getAttribute("data-mce-caret") === o
                })(t, n) ? ((e, t) => e && Mo(t.nextSibling) ? M.some(uC.moveToElement(t.nextSibling)) : !1 === e && Mo(t.previousSibling) ? M.some(uC.moveToElement(t.previousSibling)) : M.none())(t, n.getNode(!1 === t)).fold((() => mC(e, t, n)), M.some) : mC(e, t, n).bind((t => ((e, t, n) => n.fold((e => M.some(uC.remove(e))), (e => M.some(uC.moveToElement(e))), (n => Td(t, n, e) ? M.none() : M.some(uC.moveToPosition(n)))))(e, n, t))))(e, t, r)
            })(e.getBody(), t, e.selection.getRng()).map((n => () => n.fold(((e, t) => n => (e._selectionOverrides.hideFakeCaret(), Lg(e, t, mn(n)), !0))(e, t), ((e, t) => n => { const o = t ? Ua.before(n) : Ua.after(n); return e.selection.setRng(o.toRange()), !0 })(e, t), (e => t => (e.selection.setRng(t.toRange()), !0))(e))))), (() => M.some(S)))
        },
        pC = e => {
            const t = e.dom,
                n = e.selection,
                o = ip(e.getBody(), n.getNode());
            if (Po(o) && t.isBlock(o) && t.isEmpty(o)) {
                const e = t.create("br", { "data-mce-bogus": "1" });
                t.setHTML(o, ""), o.appendChild(e), n.setRng(Ua.before(e).toRange())
            }
            return !0
        },
        hC = (e, t) => e.selection.isCollapsed() ? gC(e, t) : ((e, t) => {
            const n = e.selection.getNode();
            return Mo(n) && !Io(n) ? fC(e, n.parentNode).filter(Mo).fold((() => M.some((() => {
                var n;
                n = mn(e.getBody()), $(Xs(n, ".mce-offscreen-selection"), to), Lg(e, t, mn(e.selection.getNode())), jy(e)
            }))), (() => M.some(S))) : M.none()
        })(e, t),
        bC = (e, t) => e.selection.isCollapsed() ? ((e, t) => { const n = Ua.fromRangeStart(e.selection.getRng()); return sc(t, e.getBody(), n).filter((e => t ? zf(e) : jf(e))).bind((e => M.from(Bd(t ? 0 : -1, e)))).map((t => () => e.selection.select(t))) })(e, t) : M.none(),
        vC = No,
        yC = e => vC(e) && e.data[0] === ur,
        CC = e => vC(e) && e.data[e.data.length - 1] === ur,
        xC = e => e.ownerDocument.createTextNode(ur),
        wC = (e, t) => e ? (e => { if (vC(e.previousSibling)) return CC(e.previousSibling) || e.previousSibling.appendData(ur), e.previousSibling; if (vC(e)) return yC(e) || e.insertData(0, ur), e; { const t = xC(e); return e.parentNode.insertBefore(t, e), t } })(t) : (e => { if (vC(e.nextSibling)) return yC(e.nextSibling) || e.nextSibling.insertData(0, ur), e.nextSibling; if (vC(e)) return CC(e) || e.appendData(ur), e; { const t = xC(e); return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t } })(t),
        kC = O(wC, !0),
        SC = O(wC, !1),
        _C = (e, t) => No(e.container()) ? wC(t, e.container()) : wC(t, e.getNode()),
        EC = (e, t) => { const n = t.get(); return n && e.container() === n && br(n) },
        NC = (e, t) => t.fold((t => { dd(e.get()); const n = kC(t); return e.set(n), M.some(Ua(n, n.length - 1)) }), (t => uc(t).map((t => { if (EC(t, e)) return Ua(e.get(), 1); { dd(e.get()); const n = _C(t, !0); return e.set(n), Ua(n, 1) } }))), (t => mc(t).map((t => { if (EC(t, e)) return Ua(e.get(), e.get().length - 1); { dd(e.get()); const n = _C(t, !1); return e.set(n), Ua(n, n.length - 1) } }))), (t => { dd(e.get()); const n = SC(t); return e.set(n), M.some(Ua(n, 1)) })),
        RC = (e, t) => { for (let n = 0; n < e.length; n++) { const o = e[n].apply(null, t); if (o.isSome()) return o } return M.none() },
        AC = ci([{ before: ["element"] }, { start: ["element"] }, { end: ["element"] }, { after: ["element"] }]),
        OC = (e, t) => Od(t, e) || e,
        TC = (e, t, n) => {
            const o = Py(n),
                r = OC(t, o.container());
            return Dy(e, r, o).fold((() => dc(r, o).bind(O(Dy, e, r)).map((e => AC.before(e)))), M.none)
        },
        BC = (e, t) => null === pc(e, t),
        DC = (e, t, n) => Dy(e, t, n).filter(O(BC, t)),
        LC = (e, t, n) => { const o = My(n); return DC(e, t, o).bind((e => cc(e, o).isNone() ? M.some(AC.start(e)) : M.none())) },
        PC = (e, t, n) => { const o = Py(n); return DC(e, t, o).bind((e => dc(e, o).isNone() ? M.some(AC.end(e)) : M.none())) },
        MC = (e, t, n) => {
            const o = My(n),
                r = OC(t, o.container());
            return Dy(e, r, o).fold((() => cc(r, o).bind(O(Dy, e, r)).map((e => AC.after(e)))), M.none)
        },
        IC = e => { return !1 === (t = UC(e), "rtl" === Is.DOM.getStyle(t, "direction", !0) || (e => Ty.test(e))(t.textContent)); var t },
        FC = (e, t, n) => RC([TC, LC, PC, MC], [e, t, n]).filter(IC),
        UC = e => e.fold(R, R, R, R),
        zC = e => e.fold(N("before"), N("start"), N("end"), N("after")),
        jC = e => e.fold(AC.before, AC.before, AC.after, AC.after),
        VC = e => e.fold(AC.start, AC.start, AC.end, AC.end),
        HC = (e, t, n, o, r, s) => Lt(Dy(t, n, o), Dy(t, n, r), ((t, o) => t !== o && ((e, t, n) => {
            const o = Od(t, e),
                r = Od(n, e);
            return o && o === r
        })(n, t, o) ? AC.after(e ? t : o) : s)).getOr(s),
        $C = (e, t) => e.fold(P, (e => { return o = t, !(zC(n = e) === zC(o) && UC(n) === UC(o)); var n, o })),
        qC = (e, t) => e ? t.fold(_(M.some, AC.start), M.none, _(M.some, AC.after), M.none) : t.fold(M.none, _(M.some, AC.before), M.none, _(M.some, AC.end)),
        WC = (e, t, n) => { const o = e ? 1 : -1; return t.setRng(Ua(n.container(), n.offset() + o).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0 };
    var KC;
    ! function(e) { e[e.Br = 0] = "Br", e[e.Block = 1] = "Block", e[e.Wrap = 2] = "Wrap", e[e.Eol = 3] = "Eol" }(KC || (KC = {}));
    const GC = (e, t) => e === $d.Backwards ? ne(t) : t,
        YC = (e, t, n) => e === $d.Forwards ? t.next(n) : t.prev(n),
        XC = (e, t, n, o) => Do(o.getNode(t === $d.Forwards)) ? KC.Br : !1 === Td(n, o) ? KC.Block : KC.Wrap,
        QC = (e, t, n, o) => {
            const r = tc(n);
            let s = o;
            const a = [];
            for (; s;) {
                const n = YC(t, r, s);
                if (!n) break;
                if (Do(n.getNode(!1))) return t === $d.Forwards ? { positions: GC(t, a).concat([n]), breakType: KC.Br, breakAt: M.some(n) } : { positions: GC(t, a), breakType: KC.Br, breakAt: M.some(n) };
                if (n.isVisible()) {
                    if (e(s, n)) { const e = XC(0, t, s, n); return { positions: GC(t, a), breakType: e, breakAt: M.some(n) } }
                    a.push(n), s = n
                } else s = n
            }
            return { positions: GC(t, a), breakType: KC.Eol, breakAt: M.none() }
        },
        JC = (e, t, n, o) => t(n, o).breakAt.map((o => { const r = t(n, o).positions; return e === $d.Backwards ? r.concat(o) : [o].concat(r) })).getOr([]),
        ZC = (e, t) => Y(e, ((e, n) => e.fold((() => M.some(n)), (o => Lt(ie(o.getClientRects()), ie(n.getClientRects()), ((e, r) => { const s = Math.abs(t - e.left); return Math.abs(t - r.left) <= s ? n : o })).or(e)))), M.none()),
        ex = (e, t) => ie(t.getClientRects()).bind((t => ZC(e, t.left))),
        tx = O(QC, Ua.isAbove, -1),
        nx = O(QC, Ua.isBelow, 1),
        ox = O(JC, -1, tx),
        rx = O(JC, 1, nx),
        sx = Mo,
        ax = (e, t) => Math.abs(e.left - t),
        ix = (e, t) => Math.abs(e.right - t),
        lx = (e, t) => Oe(e, ((e, n) => {
            const o = Math.min(ax(e, t), ix(e, t)),
                r = Math.min(ax(n, t), ix(n, t));
            return r === o && ke(n, "node") && sx(n.node) || r < o ? n : e
        })),
        dx = e => { const t = t => H(t, (t => { const n = ma(t); return n.node = e, n })); if (yo(e)) return t(e.getClientRects()); if (No(e)) { const n = e.ownerDocument.createRange(); return n.setStart(e, 0), n.setEnd(e, e.data.length), t(n.getClientRects()) } return [] },
        cx = e => ee(e, dx);
    var ux;
    ! function(e) { e[e.Up = -1] = "Up", e[e.Down = 1] = "Down" }(ux || (ux = {}));
    const mx = (e, t, n, o, r, s) => {
            let a = 0;
            const i = [],
                l = o => {
                    let s = cx([o]); - 1 === e && (s = s.reverse());
                    for (let e = 0; e < s.length; e++) {
                        const o = s[e];
                        if (!n(o, d)) {
                            if (i.length > 0 && t(o, Be(i)) && a++, o.line = a, r(o)) return !0;
                            i.push(o)
                        }
                    }
                },
                d = Be(s.getClientRects());
            if (!d) return i;
            const c = s.getNode();
            return l(c), ((e, t, n, o) => {
                for (; o = Ad(o, e, Mr, t);)
                    if (n(o)) return
            })(e, o, l, c), i
        },
        fx = O(mx, ux.Up, pa, ha),
        gx = O(mx, ux.Down, ha, pa),
        px = e => t => ((e, t) => t.line > e)(e, t),
        hx = e => t => ((e, t) => t.line === e)(e, t),
        bx = (e, t) => { e.selection.setRng(t), Pm(e, e.selection.getRng()) },
        vx = (e, t, n) => M.some(aC(e, t, n)),
        yx = (e, t, n, o, r, s) => {
            const a = t === $d.Forwards,
                i = tc(e.getBody()),
                l = O(Vd, a ? i.next : i.prev),
                d = a ? o : r;
            if (!n.collapsed) { const o = va(n); if (s(o)) return rC(t, e, o, t === $d.Backwards, !1) }
            const c = zd(t, e.getBody(), n);
            if (d(c)) return sC(e, c.getNode(!a));
            const u = Ly(a, l(c)),
                m = _r(n);
            if (!u) return m ? M.some(n) : M.none();
            if (d(u)) return rC(t, e, u.getNode(!a), a, !1);
            const f = l(u);
            return f && d(f) && Hd(u, f) ? rC(t, e, f.getNode(!a), a, !1) : m ? vx(e, u.toRange(), !1) : M.none()
        },
        Cx = (e, t, n, o, r, s) => {
            const a = zd(t, e.getBody(), n),
                i = Be(a.getClientRects()),
                l = t === ux.Down;
            if (!i) return M.none();
            const d = (l ? gx : fx)(e.getBody(), px(1), a),
                c = K(d, hx(1)),
                u = i.left,
                m = lx(c, u);
            if (m && s(m.node)) {
                const n = Math.abs(u - m.left),
                    o = Math.abs(u - m.right);
                return rC(t, e, m.node, n < o, !1)
            }
            let f;
            if (f = o(a) ? a.getNode() : r(a) ? a.getNode(!0) : va(n), f) {
                const n = ((e, t, n, o) => {
                    const r = tc(t);
                    let s, a, i, l;
                    const d = [];
                    let c = 0;
                    const u = e => Be(e.getClientRects());
                    1 === e ? (s = r.next, a = ha, i = pa, l = Ua.after(o)) : (s = r.prev, a = pa, i = ha, l = Ua.before(o));
                    const m = u(l);
                    do {
                        if (!l.isVisible()) continue;
                        const e = u(l);
                        if (i(e, m)) continue;
                        d.length > 0 && a(e, Be(d)) && c++;
                        const t = ma(e);
                        if (t.position = l, t.line = c, n(t)) return d;
                        d.push(t)
                    } while (l = s(l));
                    return d
                })(t, e.getBody(), px(1), f);
                let o = lx(K(n, hx(1)), u);
                if (o) return vx(e, o.position.toRange(), !1);
                if (o = Be(K(n, hx(0))), o) return vx(e, o.position.toRange(), !1)
            }
            return 0 === c.length ? xx(e, l).filter(l ? r : o).map((t => aC(e, t.toRange(), !1))) : M.none()
        },
        xx = (e, t) => {
            const n = e.selection.getRng(),
                o = t ? Ua.fromRangeEnd(n) : Ua.fromRangeStart(n),
                r = (s = o.container(), a = e.getBody(), Ho(mn(s), (e => vd(e.dom)), (e => e.dom === a)).map((e => e.dom)).getOr(a));
            var s, a;
            if (t) { const e = nx(r, o); return le(e.positions) } { const e = tx(r, o); return ie(e.positions) }
        },
        wx = (e, t, n) => xx(e, t).filter(n).exists((t => (e.selection.setRng(t.toRange()), !0))),
        kx = (e, t) => {
            const n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
        },
        Sx = (e, t) => { e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected") },
        _x = (e, t, n) => NC(t, n).map((t => (kx(e, t), n))),
        Ex = (e, t, n) => !!ml(e) && ((e, t, n) => {
            const o = e.getBody(),
                r = Ua.fromRangeStart(e.selection.getRng());
            return ((e, t, n, o) => {
                const r = Ly(e, o),
                    s = FC(t, n, r);
                return FC(t, n, r).bind(O(qC, e)).orThunk((() => ((e, t, n, o, r) => { const s = Ly(e, r); return sc(e, n, s).map(O(Ly, e)).fold((() => o.map(jC)), (r => FC(t, n, r).map(O(HC, e, t, n, s, r)).filter(O($C, o)))).filter(IC) })(e, t, n, s, o)))
            })(n, O(By, e), o, r).bind((n => _x(e, t, n)))
        })(e, t, n).isSome(),
        Nx = (e, t, n) => !!ml(t) && ((e, t) => {
            const n = t.selection.getRng(),
                o = e ? Ua.fromRangeEnd(n) : Ua.fromRangeStart(n);
            return !!(e => x(e.selection.getSel().modify))(t) && (e && Cr(o) ? WC(!0, t.selection, o) : !(e || !xr(o)) && WC(!1, t.selection, o))
        })(e, t),
        Rx = e => {
            const t = zs(null),
                n = O(By, e);
            return e.on("NodeChange", (o => {
                ml(e) && (((e, t, n) => {
                    const o = H(Xs(mn(t.getRoot()), '*[data-mce-selected="inline-boundary"]'), (e => e.dom)),
                        r = K(o, e),
                        s = K(n, e);
                    $(oe(r, s), O(Sx, !1)), $(oe(s, r), O(Sx, !0))
                })(n, e.dom, o.parents), ((e, t) => {
                    if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
                        const n = Ua.fromRangeStart(e.selection.getRng());
                        Ua.isTextPosition(n) && !1 === (e => Cr(e) || xr(e))(n) && (kx(e, ld(t.get(), n)), t.set(null))
                    }
                })(e, t), ((e, t, n, o) => {
                    if (t.selection.isCollapsed()) {
                        const r = K(o, e);
                        $(r, (o => {
                            const r = Ua.fromRangeStart(t.selection.getRng());
                            FC(e, t.getBody(), r).bind((e => _x(t, n, e)))
                        }))
                    }
                })(n, e, t, o.parents))
            })), t
        },
        Ax = O(Nx, !0),
        Ox = O(Nx, !1),
        Tx = (e, t, n) => { if (ml(e)) { const o = xx(e, t).getOrThunk((() => { const n = e.selection.getRng(); return t ? Ua.fromRangeEnd(n) : Ua.fromRangeStart(n) })); return FC(O(By, e), e.getBody(), o).exists((t => { const o = jC(t); return NC(n, o).exists((t => (kx(e, t), !0))) })) } return !1 },
        Bx = (e, t) => n => NC(t, n).map((t => () => kx(e, t))),
        Dx = (e, t, n, o) => {
            const r = e.getBody(),
                s = O(By, e);
            e.undoManager.ignore((() => { e.selection.setRng(((e, t) => { const n = document.createRange(); return n.setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n })(n, o)), Fy(e), FC(s, r, Ua.fromRangeStart(e.selection.getRng())).map(VC).bind(Bx(e, t)).each(D) })), e.nodeChanged()
        },
        Lx = (e, t, n) => {
            if (e.selection.isCollapsed() && ml(e)) {
                const o = Ua.fromRangeStart(e.selection.getRng());
                return ((e, t, n, o) => {
                    const r = ((e, t) => Od(t, e) || e)(e.getBody(), o.container()),
                        s = O(By, e),
                        a = FC(s, r, o);
                    return a.bind((e => n ? e.fold(N(M.some(VC(e))), M.none, N(M.some(jC(e))), M.none) : e.fold(M.none, N(M.some(jC(e))), M.none, N(M.some(VC(e)))))).map(Bx(e, t)).getOrThunk((() => {
                        const i = ac(n, r, o),
                            l = i.bind((e => FC(s, r, e)));
                        return Lt(a, l, (() => Dy(s, r, o).bind((t => (e => Lt(uc(e), mc(e), ((t, n) => {
                            const o = Ly(!0, t),
                                r = Ly(!1, n);
                            return dc(e, o).forall((e => e.isEqual(r)))
                        })).getOr(!0))(t) ? M.some((() => { Lg(e, n, mn(t)) })) : M.none())))).getOrThunk((() => l.bind((() => i.map((r => () => { n ? Dx(e, t, o, r) : Dx(e, t, r, o) }))))))
                    }))
                })(e, t, n, o)
            }
            return M.none()
        },
        Px = e => 1 === Tn(e),
        Mx = (e, t) => {
            const n = mn(e.getBody()),
                o = mn(e.selection.getStart()),
                r = K(((e, t) => { const n = Qf(t, e); return J(n, Zo).fold(N(n), (e => n.slice(0, e))) })(n, o), Px);
            return le(r).bind((n => {
                const o = Ua.fromRangeStart(e.selection.getRng());
                return !((e, t, n) => Lt(uc(n), mc(n), ((o, r) => {
                    const s = Ly(!0, o),
                        a = Ly(!1, r),
                        i = Ly(!1, t);
                    return e ? dc(n, i).exists((e => e.isEqual(a) && t.isEqual(s))) : cc(n, i).exists((e => e.isEqual(s) && t.isEqual(a)))
                })).getOr(!0))(t, o, n.dom) || gc((s = n).dom) && Up(s.dom) ? M.none() : M.some((() => ((e, t, n, o) => {
                    const r = O(Kp, t),
                        s = H(K(o, r), (e => e.dom));
                    if (0 === s.length) Lg(t, e, n);
                    else {
                        const e = ((e, t) => {
                            const n = jp(!1),
                                o = qp(t, n.dom);
                            return Yn(mn(e), n), to(mn(e)), Ua(o, 0)
                        })(n.dom, s);
                        t.selection.setRng(e.toRange())
                    }
                })(t, e, n, r)));
                var s
            }))
        },
        Ix = (e, t) => e.selection.isCollapsed() ? Mx(e, t) : M.none(),
        Fx = (e, t, n) => M.some((() => { e._selectionOverrides.hideFakeCaret(), Lg(e, t, mn(n)) })),
        Ux = (e, t) => e.selection.isCollapsed() ? ((e, t) => {
            const n = t ? Vf : Hf,
                o = t ? $d.Forwards : $d.Backwards,
                r = zd(o, e.getBody(), e.selection.getRng());
            return n(r) ? Fx(e, t, r.getNode(!t)) : M.from(Ly(t, r)).filter((e => n(e) && Hd(r, e))).map((n => () => Fx(e, t, n.getNode(!t))))
        })(e, t) : ((e, t) => { const n = e.selection.getNode(); return Fo(n) ? Fx(e, t, n) : M.none() })(e, t),
        zx = e => { const t = parseInt(e, 10); return isNaN(t) ? 0 : t },
        jx = (e, t) => (e || "table" === Mt(t) ? "margin" : "padding") + ("rtl" === $n(t, "direction") ? "-right" : "-left"),
        Vx = e => {
            const t = $x(e);
            return !e.mode.isReadOnly() && (t.length > 1 || ((e, t) => te(t, (t => {
                const n = jx(Xi(e), t),
                    o = Wn(t, n).map(zx).getOr(0);
                return "false" !== e.dom.getContentEditable(t.dom) && o > 0
            })))(e, t))
        },
        Hx = e => or(e) || rr(e),
        $x = e => { return K((t = e.selection.getSelectedBlocks(), H(t, mn)), (e => !Hx(e) && !(e => wn(e).exists(Hx))(e) && $o(e, (e => Po(e.dom) || Mo(e.dom))).exists((e => Po(e.dom))))); var t },
        qx = (e, t) => {
            const { dom: n } = e, o = Qi(e), r = /[a-z%]+$/i.exec(o)[0], s = parseInt(o, 10), a = Xi(e);
            $($x(e), (e => {
                ((e, t, n, o, r, s) => {
                    const a = jx(n, mn(s));
                    if ("outdent" === t) {
                        const t = Math.max(0, zx(s.style[a]) - o);
                        e.setStyle(s, a, t ? t + r : "")
                    } else {
                        const t = zx(s.style[a]) + o + r;
                        e.setStyle(s, a, t)
                    }
                })(n, t, a, s, r, e.dom)
            }))
        },
        Wx = e => qx(e, "outdent"),
        Kx = e => {
            if (e.selection.isCollapsed() && Vx(e)) {
                const t = e.dom,
                    n = e.selection.getRng(),
                    o = Ua.fromRangeStart(n),
                    r = t.getParent(n.startContainer, t.isBlock);
                if (null !== r && ng(mn(r), o)) return M.some((() => Wx(e)))
            }
            return M.none()
        },
        Gx = (e, t, n) => ce([Kx, hC, cC, (e, n) => Lx(e, t, n), Jy, ap, bC, Ux, tC, Ix], (t => t(e, n))),
        Yx = (e, t) => {
            e.addCommand("delete", (() => {
                ((e, t) => { Gx(e, t, !1).fold((() => { Fy(e), jy(e) }), D) })(e, t)
            })), e.addCommand("forwardDelete", (() => {
                ((e, t) => { Gx(e, t, !0).fold((() => (e => Iy(e, "ForwardDelete"))(e)), D) })(e, t)
            }))
        },
        Xx = e => void 0 === e.touches || 1 !== e.touches.length ? M.none() : M.some(e.touches[0]),
        Qx = (e, t) => we(e, t.nodeName),
        Jx = (e, t) => !!No(t) || !!yo(t) && !Qx(e, t) && !_c(t),
        Zx = (e, t) => { if (No(t)) { if (0 === t.nodeValue.length) return !0; if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || Qx(e, t.nextSibling))) return !0 } return !1 },
        ew = e => {
            const t = e.dom,
                n = e.selection,
                o = e.schema,
                r = o.getBlockElements();
            let s = n.getStart();
            const a = e.getBody();
            let i, l, d;
            const c = Ti(e);
            if (!s || !yo(s)) return;
            const u = a.nodeName.toLowerCase();
            if (!o.isValidChild(u, c.toLowerCase()) || ((e, t, n) => V(Xf(mn(n), mn(t)), (t => Qx(e, t.dom))))(r, a, s)) return;
            const m = n.getRng(),
                f = m.startContainer,
                g = m.startOffset,
                p = m.endContainer,
                h = m.endOffset,
                b = nf(e);
            for (s = a.firstChild; s;)
                if (Jx(r, s)) {
                    if (Zx(r, s)) { l = s, s = s.nextSibling, t.remove(l); continue }
                    i || (i = t.create(c, Bi(e)), s.parentNode.insertBefore(i, s), d = !0), l = s, s = s.nextSibling, i.appendChild(l)
                } else i = null, s = s.nextSibling;
            d && b && (m.setStart(f, g), m.setEnd(p, h), n.setRng(m), e.nodeChanged())
        },
        tw = e => t => -1 !== (" " + t.attr("class") + " ").indexOf(e),
        nw = (e, t, n) => function(o) {
            const r = arguments,
                s = r[r.length - 2],
                a = s > 0 ? t.charAt(s - 1) : "";
            if ('"' === a) return o;
            if (">" === a) { const e = t.lastIndexOf("<", s); if (-1 !== e && -1 !== t.substring(e, s).indexOf('contenteditable="false"')) return o }
            return '<span class="' + n + '" data-mce-content="' + e.dom.encode(r[0]) + '">' + e.dom.encode("string" == typeof r[1] ? r[1] : r[0]) + "</span>"
        },
        ow = (e, t) => { t.hasAttribute("data-mce-caret") && (Sr(t), e.selection.setRng(e.selection.getRng()), e.selection.scrollIntoView(t)) },
        rw = (e, t) => { const n = (e => Wo(mn(e.getBody()), "*[data-mce-caret]").map((e => e.dom)).getOrNull())(e); if (n) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void ow(e, n)) : void(yr(n) && (ow(e, n), e.undoManager.add())) },
        sw = Mo,
        aw = (e, t, n) => {
            const o = tc(e.getBody()),
                r = O(Vd, 1 === t ? o.next : o.prev);
            if (n.collapsed) {
                const o = e.dom.getParent(n.startContainer, "PRE");
                if (!o) return;
                if (!r(Ua.fromRangeStart(n))) {
                    const n = mn((e => { const t = e.dom.create(Ti(e)); return t.innerHTML = '<br data-mce-bogus="1">', t })(e));
                    1 === t ? Xn(mn(o), n) : Yn(mn(o), n), e.selection.select(n.dom, !0), e.selection.collapse()
                }
            }
        },
        iw = (e, t) => ((e, t) => {
            const n = t ? $d.Forwards : $d.Backwards,
                o = e.selection.getRng();
            return ((e, t, n) => yx(t, e, n, Wf, Kf, sw))(n, e, o).orThunk((() => (aw(e, n, o), M.none())))
        })(e, t).exists((t => (bx(e, t), !0))),
        lw = (e, t) => ((e, t) => {
            const n = t ? 1 : -1,
                o = e.selection.getRng();
            return ((e, t, n) => Cx(t, e, n, (e => Wf(e) || $f(e)), (e => Kf(e) || qf(e)), sw))(n, e, o).orThunk((() => (aw(e, n, o), M.none())))
        })(e, t).exists((t => (bx(e, t), !0))),
        dw = (e, t) => wx(e, t, t ? Kf : Wf),
        cw = e => j(["figcaption"], Mt(e)),
        uw = (e, t) => {
            const n = mn(e.getBody()),
                o = Ua.fromRangeStart(e.selection.getRng()),
                r = Ti(e),
                s = Bi(e);
            return ((e, t) => { const n = O(bn, t); return $o(mn(e.container()), Zo, n).filter(cw) })(o, n).exists((() => {
                if (((e, t, n) => t ? ((e, t) => nx(e, t).breakAt.isNone())(e.dom, n) : ((e, t) => tx(e, t).breakAt.isNone())(e.dom, n))(n, t, o)) {
                    const o = ((e, t, n, o) => {
                        const r = cn(n),
                            s = cn("br");
                        return qt(r, o), Jn(r, s), ((e, t, n) => { n ? Jn(e, t) : Qn(e, t) })(e, r, t), (e => { const t = document.createRange(); return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t })(s)
                    })(n, t, r, s);
                    return e.selection.setRng(o), !0
                }
                return !1
            }))
        },
        mw = (e, t) => !!e.selection.isCollapsed() && uw(e, t),
        fw = { shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0 },
        gw = (e, t) => t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey && t.metaKey === e.metaKey,
        pw = (e, ...t) => () => e.apply(null, t),
        hw = (e, t) => Q(((e, t) => ee((e => H(e, (e => ({...fw, action: S, ...e }))))(e), (e => gw(e, t) ? [e] : [])))(e, t), (e => e.action())),
        bw = (e, t) => ce(((e, t) => ee((e => H(e, (e => ({...fw, action: () => M.none(), ...e }))))(e), (e => gw(e, t) ? [e] : [])))(e, t), (e => e.action())),
        vw = (e, t) => {
            const n = t ? $d.Forwards : $d.Backwards,
                o = e.selection.getRng();
            return yx(e, n, o, Vf, Hf, Fo).exists((t => (bx(e, t), !0)))
        },
        yw = (e, t) => {
            const n = t ? 1 : -1,
                o = e.selection.getRng();
            return Cx(e, n, o, Vf, Hf, Fo).exists((t => (bx(e, t), !0)))
        },
        Cw = (e, t) => wx(e, t, t ? Hf : Vf),
        xw = ci([{ none: ["current"] }, { first: ["current"] }, { middle: ["current", "target"] }, { last: ["current"] }]),
        ww = {...xw, none: e => xw.none(e) },
        kw = (e, t, n) => ee(Nn(e), (e => pn(e, t) ? n(e) ? [e] : [] : kw(e, t, n))),
        Sw = (e, t) => Ko(e, "table", t),
        _w = (e, t, n, o, r = P) => {
            const s = 1 === o;
            if (!s && n <= 0) return ww.first(e[0]);
            if (s && n >= e.length - 1) return ww.last(e[e.length - 1]); {
                const s = n + o,
                    a = e[s];
                return r(a) ? ww.middle(t, a) : _w(e, t, s, o, r)
            }
        },
        Ew = (e, t) => Sw(e, t).bind((t => { const n = kw(t, "th,td", P); return J(n, (t => bn(e, t))).map((e => ({ index: e, all: n }))) })),
        Nw = (e, t = !1) => { return zn(e) ? e.dom.isContentEditable : (n = e, Ko(n, "[contenteditable]")).fold(N(t), (e => "true" === Rw(e))); var n },
        Rw = e => e.dom.contentEditable,
        Aw = (e, t, n, o, r) => {
            const s = Xs(mn(n), "td,th,caption").map((e => e.dom)),
                a = K(((e, t) => ee(t, (t => { const n = ((e, t) => ({ left: e.left - t, top: e.top - t, right: e.right + -2, bottom: e.bottom + -2, width: e.width + t, height: e.height + t }))(ma(t.getBoundingClientRect()), -1); return [{ x: n.left, y: e(n), cell: t }, { x: n.right, y: e(n), cell: t }] })))(e, s), (e => t(e, r)));
            return ((e, t, n) => Y(e, ((e, o) => e.fold((() => M.some(o)), (e => {
                const r = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
                    s = Math.sqrt(Math.abs(o.x - t) + Math.abs(o.y - n));
                return M.some(s < r ? o : e)
            }))), M.none()))(a, o, r).map((e => e.cell))
        },
        Ow = O(Aw, (e => e.bottom), ((e, t) => e.y < t)),
        Tw = O(Aw, (e => e.top), ((e, t) => e.y > t)),
        Bw = (e, t, n) => { const o = e(t, n); return (e => e.breakType === KC.Wrap && 0 === e.positions.length)(o) || !Do(n.getNode()) && (e => e.breakType === KC.Br && 1 === e.positions.length)(o) ? !((e, t, n) => n.breakAt.exists((n => e(t, n).breakAt.isSome())))(e, t, o) : o.breakAt.isNone() },
        Dw = O(Bw, tx),
        Lw = O(Bw, nx),
        Pw = (e, t, n, o) => {
            const r = e.selection.getRng(),
                s = t ? 1 : -1;
            return !(!pd() || !((e, t, n) => { const o = Ua.fromRangeStart(t); return lc(!e, n).exists((e => e.isEqual(o))) })(t, r, n) || (rC(s, e, n, !t, !1).each((t => { bx(e, t) })), 0))
        },
        Mw = (e, t, n) => {
            const o = ((e, t) => { const n = t.getNode(e); return yo(n) && "TABLE" === n.nodeName ? M.some(n) : M.none() })(!!t, n),
                r = !1 === t;
            o.fold((() => bx(e, n.toRange())), (o => lc(r, e.getBody()).filter((e => e.isEqual(n))).fold((() => bx(e, n.toRange())), (n => ((e, t, n) => {
                const o = Ti(t);
                t.undoManager.transact((() => {
                    const r = cn(o);
                    qt(r, Bi(t)), Jn(r, cn("br")), e ? Xn(mn(n), r) : Yn(mn(n), r);
                    const s = t.dom.createRng();
                    s.setStart(r.dom, 0), s.setEnd(r.dom, 0), bx(t, s)
                }))
            })(t, e, o)))))
        },
        Iw = (e, t, n, o) => {
            const r = e.selection.getRng(),
                s = Ua.fromRangeStart(r),
                a = e.getBody();
            if (!t && Dw(o, s)) { const o = ((e, t, n) => ((e, t) => ie(t.getClientRects()).bind((t => Ow(e, t.left, t.top))).bind((e => { return ex(mc(n = e).map((e => tx(n, e).positions.concat(e))).getOr([]), t); var n })))(t, n).orThunk((() => ie(n.getClientRects()).bind((n => ZC(ox(e, Ua.before(t)), n.left))))).getOr(Ua.before(t)))(a, n, s); return Mw(e, t, o), !0 }
            if (t && Lw(o, s)) { const o = ((e, t, n) => ((e, t) => le(t.getClientRects()).bind((t => Tw(e, t.left, t.top))).bind((e => { return ex(uc(n = e).map((e => [e].concat(nx(n, e).positions))).getOr([]), t); var n })))(t, n).orThunk((() => ie(n.getClientRects()).bind((n => ZC(rx(e, Ua.after(t)), n.left))))).getOr(Ua.after(t)))(a, n, s); return Mw(e, t, o), !0 }
            return !1
        },
        Fw = (e, t, n) => M.from(e.dom.getParent(e.selection.getNode(), "td,th")).bind((o => M.from(e.dom.getParent(o, "table")).map((r => n(e, t, r, o))))).getOr(!1),
        Uw = (e, t) => Fw(e, t, Pw),
        zw = (e, t) => Fw(e, t, Iw),
        jw = (e, t, n) => n.fold(M.none, M.none, ((e, t) => { return (n = t, ((e, t) => { const n = e => { for (let o = 0; o < e.childNodes.length; o++) { const r = mn(e.childNodes[o]); if (t(r)) return M.some(r); const s = n(e.childNodes[o]); if (s.isSome()) return s } return M.none() }; return n(e.dom) })(n, uf)).map((e => (e => { const t = Xu.exact(e, 0, e, 0); return tm(t) })(e))); var n }), (n => (e.execCommand("mceTableInsertRowAfter"), Vw(e, t, n)))),
        Vw = (e, t, n) => { return jw(e, t, (r = Nw, Ew(o = n, void 0).fold((() => ww.none(o)), (e => _w(e.all, o, e.index, 1, r))))); var o, r },
        Hw = (e, t, n) => { return jw(e, t, (r = Nw, Ew(o = n, void 0).fold((() => ww.none()), (e => _w(e.all, o, e.index, -1, r))))); var o, r },
        $w = (e, t) => {
            const n = ["table", "li", "dl"],
                o = mn(e.getBody()),
                r = e => { const t = Mt(e); return bn(e, o) || j(n, t) },
                s = e.selection.getRng();
            return ((e, t) => ((e, t, n = L) => n(t) ? M.none() : j(e, Mt(t)) ? M.some(t) : qo(t, e.join(","), (e => pn(e, "table") || n(e))))(["td", "th"], e, t))(mn(t ? s.endContainer : s.startContainer), r).map((n => (Sw(n, r).each((t => { e.model.table.clearSelectedCells(t.dom) })), e.selection.collapse(!t), (t ? Vw : Hw)(e, r, n).each((t => { e.selection.setRng(t) })), !0))).getOr(!1)
        },
        qw = (e, t) => ({ container: e, offset: t }),
        Ww = Is.DOM,
        Kw = e => t => e === t ? -1 : 0,
        Gw = (e, t, n) => { if (No(e) && t >= 0) return M.some(qw(e, t)); { const o = ca(Ww); return M.from(o.backwards(e, t, Kw(e), n)).map((e => qw(e.container, e.container.data.length))) } },
        Yw = (e, t, n) => { if (!No(e)) return M.none(); const o = e.textContent; if (t >= 0 && t <= o.length) return M.some(qw(e, t)); { const o = ca(Ww); return M.from(o.backwards(e, t, Kw(e), n)).bind((e => { const o = e.container.data; return Yw(e.container, t + o.length, n) })) } },
        Xw = (e, t, n) => { if (!No(e)) return M.none(); const o = e.textContent; if (t <= o.length) return M.some(qw(e, t)); { const r = ca(Ww); return M.from(r.forwards(e, t, Kw(e), n)).bind((e => Xw(e.container, t - o.length, n))) } },
        Qw = (e, t, n, o, r) => { const s = ca(e, (e => t => e.isBlock(t) || j(["BR", "IMG", "HR", "INPUT"], t.nodeName) || "false" === e.getContentEditable(t))(e)); return M.from(s.backwards(t, n, o, r)) },
        Jw = e => e.toString().replace(/\u00A0/g, " ").replace(/\uFEFF/g, ""),
        Zw = e => "" !== e && -1 !== " \xa0\f\n\r\t\v".indexOf(e),
        ek = (e, t) => e.substring(t.length),
        tk = (e, t, n, o = 0) => {
            return (r = mn(t.startContainer), Ko(r, mf)).fold((() => ((e, t, n, o = 0) => { if (!(r = t).collapsed || 3 !== r.startContainer.nodeType) return M.none(); var r; const s = e.getParent(t.startContainer, e.isBlock) || e.getRoot(); return Qw(e, t.startContainer, t.startOffset, ((e, t, o) => ((e, t, n) => { let o; for (o = t - 1; o >= 0; o--) { const t = e.charAt(o); if (Zw(t)) return M.none(); if (t === n) break } return M.some(o) })(o, t, n).getOr(t)), s).bind((e => { const r = t.cloneRange(); if (r.setStart(e.container, e.offset), r.setEnd(t.endContainer, t.endOffset), r.collapsed) return M.none(); const s = Jw(r); return 0 !== s.lastIndexOf(n) || ek(s, n).length < o ? M.none() : M.some({ text: ek(s, n), range: r, triggerChar: n }) })) })(e, t, n, o)), (t => {
                const o = e.createRng();
                o.selectNode(t.dom);
                const r = Jw(o);
                return M.some({ range: o, text: ek(r, n), triggerChar: n })
            }));
            var r
        },
        nk = e => { if ((e => 3 === e.nodeType)(e)) return qw(e, e.data.length); { const t = e.childNodes; return t.length > 0 ? nk(t[t.length - 1]) : qw(e, t.length) } },
        ok = (e, t) => { const n = e.childNodes; return n.length > 0 && t < n.length ? ok(n[t], 0) : n.length > 0 && (e => 1 === e.nodeType)(e) && n.length === t ? nk(n[n.length - 1]) : qw(e, t) },
        rk = (e, t, n, o = {}) => {
            const r = t(),
                s = e.selection.getRng().startContainer.nodeValue,
                a = K(r.lookupByChar(n.triggerChar), (t => n.text.length >= t.minChars && t.matches.getOrThunk((() => (e => t => { const n = ok(t.startContainer, t.startOffset); return !((e, t) => Qw(e, t.container, t.offset, ((e, t) => 0 === t ? -1 : t), e.getRoot()).filter((e => { const t = e.container.data.charAt(e.offset - 1); return !Zw(t) })).isSome())(e, n) })(e.dom)))(n.range, s, n.text)));
            if (0 === a.length) return M.none();
            const i = Promise.all(H(a, (e => e.fetch(n.text, e.maxResults, o).then((t => ({ matchText: n.text, items: t, columns: e.columns, onAction: e.onAction, highlightOn: e.highlightOn }))))));
            return M.some({ lookupData: i, context: n })
        };
    var sk;
    ! function(e) { e[e.Error = 0] = "Error", e[e.Value = 1] = "Value" }(sk || (sk = {}));
    const ak = (e, t, n) => e.stype === sk.Error ? t(e.serror) : n(e.svalue),
        ik = e => ({ stype: sk.Value, svalue: e }),
        lk = e => ({ stype: sk.Error, serror: e }),
        dk = ak,
        ck = e => f(e) && ue(e).length > 100 ? " removed due to size" : JSON.stringify(e, null, 2),
        uk = (e, t) => lk([{ path: e, getErrorInfo: t }]),
        mk = (e, t) => ({ extract: (n, o) => xe(o, e).fold((() => ((e, t) => uk(e, (() => 'Choice schema did not contain choice key: "' + t + '"')))(n, e)), (e => ((e, t, n, o) => xe(n, o).fold((() => ((e, t, n) => uk(e, (() => 'The chosen schema: "' + n + '" did not exist in branches: ' + ck(t))))(e, n, o)), (n => n.extract(e.concat(["branch: " + o]), t))))(n, o, t, e))), toString: () => "chooseOn(" + e + "). Possible values: " + ue(t) }),
        fk = e => (...t) => { if (0 === t.length) throw new Error("Can't merge zero objects"); const n = {}; for (let o = 0; o < t.length; o++) { const r = t[o]; for (const t in r) we(r, t) && (n[t] = e(n[t], r[t])) } return n },
        gk = fk(((e, t) => g(e) && g(t) ? gk(e, t) : t)),
        pk = (fk(((e, t) => t)), e => ({ tag: "defaultedThunk", process: N(e) })),
        hk = e => {
            const t = (e => {
                const t = [],
                    n = [];
                return $(e, (e => { ak(e, (e => n.push(e)), (e => t.push(e))) })), { values: t, errors: n }
            })(e);
            return t.errors.length > 0 ? (n = t.errors, _(lk, Z)(n)) : ik(t.values);
            var n
        },
        bk = (e, t, n) => {
            switch (e.tag) {
                case "field":
                    return t(e.key, e.newKey, e.presence, e.prop);
                case "custom":
                    return n(e.newKey, e.instantiator)
            }
        },
        vk = e => ({ extract: (t, n) => { return o = e(n), r = e => ((e, t) => uk(e, N(t)))(t, e), o.stype === sk.Error ? r(o.serror) : o; var o, r }, toString: N("val") }),
        yk = vk(ik),
        Ck = (e, t, n, o) => o(xe(e, t).getOrThunk((() => n(e)))),
        xk = (e, t, n, o, r) => {
            const s = e => r.extract(t.concat([o]), e),
                a = e => e.fold((() => ik(M.none())), (e => { const n = r.extract(t.concat([o]), e); return s = n, a = M.some, s.stype === sk.Value ? { stype: sk.Value, svalue: a(s.svalue) } : s; var s, a }));
            switch (e.tag) {
                case "required":
                    return ((e, t, n, o) => xe(t, n).fold((() => ((e, t, n) => uk(e, (() => 'Could not find valid *required* value for "' + t + '" in ' + ck(n))))(e, n, t)), o))(t, n, o, s);
                case "defaultedThunk":
                    return Ck(n, o, e.process, s);
                case "option":
                    return ((e, t, n) => n(xe(e, t)))(n, o, a);
                case "defaultedOptionThunk":
                    return ((e, t, n, o) => o(xe(e, t).map((t => !0 === t ? n(e) : t))))(n, o, e.process, a);
                case "mergeWithThunk":
                    return Ck(n, o, N({}), (t => { const o = gk(e.process(n), t); return s(o) }))
            }
        },
        wk = e => ({
            extract: (t, n) => ((e, t, n) => {
                const o = {},
                    r = [];
                for (const s of n) bk(s, ((n, s, a, i) => {
                    const l = xk(a, e, t, n, i);
                    dk(l, (e => { r.push(...e) }), (e => { o[s] = e }))
                }), ((e, n) => { o[e] = n(t) }));
                return r.length > 0 ? lk(r) : ik(o)
            })(t, n, e),
            toString: () => { const t = H(e, (e => bk(e, ((e, t, n, o) => e + " -> " + o.toString()), ((e, t) => "state(" + e + ")")))); return "obj{\n" + t.join("\n") + "}" }
        }),
        kk = e => ({ extract: (t, n) => { const o = H(n, ((n, o) => e.extract(t.concat(["[" + o + "]"]), n))); return hk(o) }, toString: () => "array(" + e.toString() + ")" }),
        Sk = (e, t, n) => { return o = ((e, t, n) => ((e, t) => e.stype === sk.Error ? { stype: sk.Error, serror: t(e.serror) } : e)(t.extract([e], n), (e => ({ input: n, errors: e }))))(e, t, n), ak(o, di.error, di.value); var o },
        _k = (e, t) => mk(e, ge(t, wk)),
        Ek = N(yk),
        Nk = (e, t) => vk((n => { const o = typeof n; return e(n) ? ik(n) : lk(`Expected type: ${t} but got: ${o}`) })),
        Rk = Nk(w, "number"),
        Ak = Nk(m, "string"),
        Ok = Nk(b, "boolean"),
        Tk = Nk(x, "function"),
        Bk = (e, t, n, o) => ({ tag: "field", key: e, newKey: t, presence: n, prop: o }),
        Dk = (e, t) => ({ tag: "custom", newKey: e, instantiator: t }),
        Lk = (e, t) => Bk(e, e, { tag: "required", process: {} }, t),
        Pk = e => Lk(e, Ak),
        Mk = e => Lk(e, Tk),
        Ik = (e, t) => Bk(e, e, { tag: "option", process: {} }, t),
        Fk = e => Ik(e, Ak),
        Uk = (e, t, n) => Bk(e, e, pk(t), n),
        zk = (e, t) => Uk(e, t, Rk),
        jk = (e, t, n) => Uk(e, t, (e => { return t = t => j(e, t) ? di.value(t) : di.error(`Unsupported value: "${t}", choose one of "${e.join(", ")}".`), vk((e => t(e).fold(lk, ik))); var t })(n)),
        Vk = (e, t) => Uk(e, t, Ok),
        Hk = (e, t) => Uk(e, t, Tk),
        $k = Pk("type"),
        qk = Mk("fetch"),
        Wk = Mk("onAction"),
        Kk = Hk("onSetup", (() => S)),
        Gk = Fk("text"),
        Yk = Fk("icon"),
        Xk = Fk("tooltip"),
        Qk = Fk("label"),
        Jk = Vk("active", !1),
        Zk = Vk("enabled", !0),
        eS = Vk("primary", !1),
        tS = e => ((e, t) => Uk("type", t, Ak))(0, e),
        nS = wk([$k, Pk("ch"), zk("minChars", 1), (1, ((e, t) => Bk(e, e, pk(1), Ek()))("columns")), zk("maxResults", 10), ("matches", Ik("matches", Tk)), qk, Wk, (oS = Ak, Uk("highlightOn", [], kk(oS)))]);
    var oS;
    const rS = [Zk, Xk, Yk, Gk, Kk],
        sS = [Jk].concat(rS),
        aS = [Hk("predicate", L), jk("scope", "node", ["node", "editor"]), jk("position", "selection", ["node", "selection", "line"])],
        iS = rS.concat([tS("contextformbutton"), eS, Wk, Dk("original", R)]),
        lS = sS.concat([tS("contextformbutton"), eS, Wk, Dk("original", R)]),
        dS = rS.concat([tS("contextformbutton")]),
        cS = sS.concat([tS("contextformtogglebutton")]),
        uS = _k("type", { contextformbutton: iS, contextformtogglebutton: lS });
    wk([tS("contextform"), Hk("initValue", N("")), Qk, ((e, t) => Bk(e, e, { tag: "required", process: {} }, kk(t)))("commands", uS), Ik("launch", _k("type", { contextformbutton: dS, contextformtogglebutton: cS }))].concat(aS));
    const mS = e => {
            const t = e.ui.registry.getAll().popups,
                n = ge(t, (e => { return (t = e, Sk("Autocompleter", nS, t)).fold((e => { throw new Error("Errors: \n" + (e => { const t = e.length > 10 ? e.slice(0, 10).concat([{ path: [], getErrorInfo: N("... (only showing first ten failures)") }]) : e; return H(t, (e => "Failed path: (" + e.path.join(" > ") + ")\n" + e.getErrorInfo())) })((t = e).errors).join("\n") + "\n\nInput object: " + ck(t.input)); var t }), R); var t })),
                o = Se(ye(n, (e => e.ch))),
                r = Ce(n);
            return { dataset: n, triggerChars: o, lookupByChar: e => K(r, (t => t.ch === e)) }
        },
        fS = e => {
            const t = Ws(),
                n = zs(!1),
                o = t.isSet,
                r = () => { o() && ((e => { Nv(e).autocompleter.removeDecoration() })(e), (e => { e.dispatch("AutocompleterEnd") })(e), n.set(!1), t.clear()) },
                s = De((() => mS(e))),
                a = a => {
                    (n => t.get().map((t => tk(e.dom, e.selection.getRng(), t.triggerChar).bind((t => rk(e, s, t, n))))).getOrThunk((() => ((e, t) => {
                        const n = t(),
                            o = e.selection.getRng();
                        return ((e, t, n) => ce(n.triggerChars, (n => tk(e, t, n))))(e.dom, o, n).bind((n => rk(e, t, n)))
                    })(e, s))))(a).fold(r, (s => {
                        (n => { o() || (((e, t) => { Nv(e).autocompleter.addDecoration(t) })(e, n.range), t.set({ triggerChar: n.triggerChar, matchLength: n.text.length })) })(s.context), s.lookupData.then((o => {
                            t.get().map((a => {
                                const i = s.context;
                                a.triggerChar === i.triggerChar && (i.text.length - a.matchLength >= 10 ? r() : (t.set({...a, matchLength: i.text.length }), n.get() ? ((e, t) => { e.dispatch("AutocompleterUpdate", t) })(e, { lookupData: o }) : (n.set(!0), ((e, t) => { e.dispatch("AutocompleterStart", t) })(e, { lookupData: o }))))
                            }))
                        }))
                    }))
                };
            e.addCommand("mceAutocompleterReload", ((e, t) => {
                const n = f(t) ? t.fetchOptions : {};
                a(n)
            })), e.addCommand("mceAutocompleterClose", r), ((e, t) => {
                const n = Gs(t.load, 50);
                e.on("keypress compositionend", (e => { 27 !== e.which && n.throttle() })), e.on("keydown", (e => {
                    const o = e.which;
                    8 === o ? n.throttle() : 27 === o && t.cancelIfNecessary()
                })), e.on("remove", n.cancel)
            })(e, { cancelIfNecessary: r, load: a })
        },
        gS = e => (t, n, o = {}) => {
            const r = t.getBody(),
                s = { bubbles: !0, composed: !0, data: null, isComposing: !1, detail: 0, view: null, target: r, currentTarget: r, eventPhase: Event.AT_TARGET, originalTarget: r, explicitOriginalTarget: r, isTrusted: !1, srcElement: r, cancelable: !1, preventDefault: S, inputType: n },
                a = xs(new InputEvent(e));
            return t.dispatch(e, {...a, ...s, ...o })
        },
        pS = gS("input"),
        hS = gS("beforeinput"),
        bS = (e, t) => {
            let n, o = t;
            const r = e.dom,
                s = e.schema.getMoveCaretBeforeOnEnterElements();
            if (!t) return;
            if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                const e = (e => {
                    for (; e;) {
                        if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                        e = e.nextSibling
                    }
                })(t.firstChild);
                e && /^(UL|OL|DL)$/.test(e.nodeName) && t.insertBefore(r.doc.createTextNode(dr), t.firstChild)
            }
            const a = r.createRng();
            if (t.normalize(), t.hasChildNodes()) {
                const e = new Xo(t, t);
                for (; n = e.current();) {
                    if (No(n)) { a.setStart(n, 0), a.setEnd(n, 0); break }
                    if (s[n.nodeName.toLowerCase()]) { a.setStartBefore(n), a.setEndBefore(n); break }
                    o = n, n = e.next()
                }
                n || (a.setStart(o, 0), a.setEnd(o, 0))
            } else Do(t) ? t.nextSibling && r.isBlock(t.nextSibling) ? (a.setStartBefore(t), a.setEndBefore(t)) : (a.setStartAfter(t), a.setEndAfter(t)) : (a.setStart(t, 0), a.setEnd(t, 0));
            e.selection.setRng(a), Pm(e, a)
        },
        vS = e => M.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)),
        yS = (e, t) => e && e.parentNode && e.parentNode.nodeName === t,
        CS = e => e && /^(OL|UL|LI)$/.test(e.nodeName),
        xS = e => { const t = e.parentNode; return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e },
        wS = (e, t, n) => { let o = e[n ? "firstChild" : "lastChild"]; for (; o && !yo(o);) o = o[n ? "nextSibling" : "previousSibling"]; return o === t },
        kS = (e, t) => t && "A" === t.nodeName && e.isEmpty(t),
        SS = e => { e.innerHTML = '<br data-mce-bogus="1">' },
        _S = (e, t) => e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t,
        ES = (e, t) => t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t),
        NS = (e, t, n) => !1 === No(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === ur ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === ur ? t.data.length : n,
        RS = (e, t) => { const n = e.getRoot(); let o, r; for (o = t; o !== n && "false" !== e.getContentEditable(o);) "true" === e.getContentEditable(o) && (r = o), o = o.parentNode; return o !== n ? r : n },
        AS = (e, t) => {
            Ti(e).toLowerCase() === t.tagName.toLowerCase() && ((e, t, n) => {
                const o = e.dom;
                M.from(n.style).map(o.parseStyle).each((e => {
                    const n = {...Kn(mn(t)), ...e };
                    o.setStyles(t, n)
                }));
                const r = M.from(n.class).map((e => e.split(/\s+/))),
                    s = M.from(t.className).map((e => K(e.split(/\s+/), (e => "" !== e))));
                Lt(r, s, ((e, n) => {
                    const r = K(n, (t => !j(e, t))),
                        s = [...e, ...r];
                    o.setAttrib(t, "class", s.join(" "))
                }));
                const a = ["style", "class"],
                    i = ve(n, ((e, t) => !j(a, t)));
                o.setAttribs(t, i)
            })(e, t, Bi(e))
        },
        OS = (e, t) => {
            let n, o, r, s, a, i, l, d, c;
            const u = e.dom,
                m = e.schema,
                f = m.getNonEmptyElements(),
                g = e.selection.getRng(),
                p = Ti(e),
                h = t => {
                    let n, r, a, i = o;
                    const l = m.getTextInlineElements();
                    if (n = t || "TABLE" === d || "HR" === d ? u.create(t || p) : s.cloneNode(!1), a = n, !1 === Pi(e)) u.setAttrib(n, "style", null), u.setAttrib(n, "class", null);
                    else
                        do {
                            if (l[i.nodeName]) {
                                if (gc(i) || _c(i)) continue;
                                r = i.cloneNode(!1), u.setAttrib(r, "id", ""), n.hasChildNodes() ? (r.appendChild(n.firstChild), n.appendChild(r)) : (a = r, n.appendChild(r))
                            }
                        } while ((i = i.parentNode) && i !== x);
                    return AS(e, n), SS(a), n
                },
                b = e => {
                    let t, n;
                    const a = NS(e, o, r);
                    if (No(o) && (e ? a > 0 : a < o.nodeValue.length)) return !1;
                    if (o.parentNode === s && c && !e) return !0;
                    if (e && yo(o) && o === s.firstChild) return !0;
                    if (_S(o, "TABLE") || _S(o, "HR")) return c && !e || !c && e;
                    const i = new Xo(o, s);
                    for (No(o) && (e && 0 === a ? i.prev() : e || a !== o.nodeValue.length || i.next()); t = i.current();) {
                        if (yo(t)) { if (!t.getAttribute("data-mce-bogus") && (n = t.nodeName.toLowerCase(), f[n] && "br" !== n)) return !1 } else if (No(t) && !Fr(t.nodeValue)) return !1;
                        e ? i.prev() : i.next()
                    }
                    return !0
                },
                v = () => { a = /^(H[1-6]|PRE|FIGURE)$/.test(d) && "HGROUP" !== w ? h(p) : h(), Mi(e) && ES(u, l) && u.isEmpty(s) ? a = u.split(l, s) : u.insertAfter(a, s), bS(e, a) };
            mm(u, g).each((e => { g.setStart(e.startContainer, e.startOffset), g.setEnd(e.endContainer, e.endOffset) })), o = g.startContainer, r = g.startOffset;
            const y = !(!t || !t.shiftKey),
                C = !(!t || !t.ctrlKey);
            yo(o) && o.hasChildNodes() && (c = r > o.childNodes.length - 1, o = o.childNodes[Math.min(r, o.childNodes.length - 1)] || o, r = c && No(o) ? o.nodeValue.length : 0);
            const x = RS(u, o);
            if (!x) return;
            y || (o = ((e, t, n, o, r) => {
                let s, a, i, l, d, c;
                const u = e.dom,
                    m = RS(u, o);
                if (a = u.getParent(o, u.isBlock), !a || !ES(u, a)) {
                    if (a = a || m, c = a === e.getBody() || (e => e && /^(TD|TH|CAPTION)$/.test(e.nodeName))(a) ? a.nodeName.toLowerCase() : a.parentNode.nodeName.toLowerCase(), !a.hasChildNodes()) return s = u.create(t), AS(e, s), a.appendChild(s), n.setStart(s, 0), n.setEnd(s, 0), s;
                    for (l = o; l.parentNode !== a;) l = l.parentNode;
                    for (; l && !u.isBlock(l);) i = l, l = l.previousSibling;
                    if (i && e.schema.isValidChild(c, t.toLowerCase())) {
                        for (s = u.create(t), AS(e, s), i.parentNode.insertBefore(s, i), l = i; l && !u.isBlock(l);) d = l.nextSibling, s.appendChild(l), l = d;
                        n.setStart(o, r), n.setEnd(o, r)
                    }
                }
                return o
            })(e, p, g, o, r)), s = u.getParent(o, u.isBlock), l = s ? u.getParent(s.parentNode, u.isBlock) : null, d = s ? s.nodeName.toUpperCase() : "";
            const w = l ? l.nodeName.toUpperCase() : "";
            "LI" !== w || C || (s = l, l = l.parentNode, d = w), /^(LI|DT|DD)$/.test(d) && u.isEmpty(s) ? ((e, t, n, o, r) => {
                const s = e.dom,
                    a = e.selection.getRng();
                if (n === e.getBody()) return;
                var i;
                CS(i = n) && CS(i.parentNode) && (r = "LI");
                let l = t(r);
                if (wS(n, o, !0) && wS(n, o, !1))
                    if (yS(n, "LI")) {
                        const e = xS(n);
                        s.insertAfter(l, e), (e => { var t; return (null === (t = e.parentNode) || void 0 === t ? void 0 : t.firstChild) === e })(n) ? s.remove(e) : s.remove(n)
                    } else s.replace(l, n);
                else if (wS(n, o, !0)) yS(n, "LI") ? (s.insertAfter(l, xS(n)), l.appendChild(s.doc.createTextNode(" ")), l.appendChild(n)) : n.parentNode.insertBefore(l, n), s.remove(o);
                else if (wS(n, o, !1)) s.insertAfter(l, xS(n)), s.remove(o);
                else {
                    n = xS(n);
                    const e = a.cloneRange();
                    e.setStartAfter(o), e.setEndAfter(n);
                    const t = e.extractContents();
                    "LI" === r && ((e, t) => e.firstChild && "LI" === e.firstChild.nodeName)(t) ? (l = t.firstChild, s.insertAfter(t, n)) : (s.insertAfter(t, n), s.insertAfter(l, n)), s.remove(o)
                }
                bS(e, l)
            })(e, h, l, s, p) : s !== e.getBody() && (hr(s) ? (a = Sr(s), u.isEmpty(s) && SS(s), AS(e, a), bS(e, a)) : b() ? v() : b(!0) ? (a = s.parentNode.insertBefore(h(), s), bS(e, _S(s, "HR") ? a : s)) : (n = (e => { const t = e.cloneRange(); return t.setStart(e.startContainer, NS(!0, e.startContainer, e.startOffset)), t.setEnd(e.endContainer, NS(!1, e.endContainer, e.endOffset)), t })(g).cloneRange(), n.setEndAfter(s), i = n.extractContents(), (e => {
                $(Ys(mn(e), zt), (e => {
                    const t = e.dom;
                    t.nodeValue = fr(t.nodeValue)
                }))
            })(i), (e => { do { No(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild } while (e) })(i), a = i.firstChild, u.insertAfter(i, s), ((e, t, n) => {
                let o = n;
                const r = [];
                let s;
                if (o) {
                    for (; o = o.firstChild;) {
                        if (e.isBlock(o)) return;
                        yo(o) && !t[o.nodeName.toLowerCase()] && r.push(o)
                    }
                    for (s = r.length; s--;) o = r[s], (!o.hasChildNodes() || o.firstChild === o.lastChild && "" === o.firstChild.nodeValue || kS(e, o)) && e.remove(o)
                }
            })(u, f, a), ((e, t) => {
                t.normalize();
                const n = t.lastChild;
                n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0)) || e.add(t, "br")
            })(u, s), u.isEmpty(s) && SS(s), a.normalize(), u.isEmpty(a) ? (u.remove(a), v()) : (AS(e, a), bS(e, a))), u.setAttrib(a, "id", ""), e.dispatch("NewBlock", { newBlock: a }))
        },
        TS = (e, t, n) => {
            const o = e.dom.createRng();
            n ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), e.selection.setRng(o), Pm(e, o)
        },
        BS = (e, t) => {
            const n = cn("br");
            Yn(mn(t), n), e.undoManager.add()
        },
        DS = (e, t) => {
            LS(e.getBody(), t) || Xn(mn(t), cn("br"));
            const n = cn("br");
            Xn(mn(t), n), TS(e, n.dom, !1), e.undoManager.add()
        },
        LS = (e, t) => { return n = Ua.after(t), !!Do(n.getNode()) || dc(e, Ua.after(t)).map((e => Do(e.getNode()))).getOr(!1); var n },
        PS = e => e && "A" === e.nodeName && "href" in e,
        MS = e => e.fold(L, PS, PS, L),
        IS = (e, t) => { t.fold(S, O(BS, e), O(DS, e), S) },
        FS = (e, t) => {
            const n = (e => {
                const t = O(By, e),
                    n = Ua.fromRangeStart(e.selection.getRng());
                return FC(t, e.getBody(), n).filter(MS)
            })(e);
            n.isSome() ? n.each(O(IS, e)) : ((e, t) => {
                const n = e.selection,
                    o = e.dom,
                    r = n.getRng();
                let s, a;
                mm(o, r).each((e => { r.setStart(e.startContainer, e.startOffset), r.setEnd(e.endContainer, e.endOffset) }));
                let i = r.startOffset,
                    l = r.startContainer;
                if (1 === l.nodeType && l.hasChildNodes()) {
                    const e = i > l.childNodes.length - 1;
                    l = l.childNodes[Math.min(i, l.childNodes.length - 1)] || l, i = e && 3 === l.nodeType ? l.nodeValue.length : 0
                }
                let d = o.getParent(l, o.isBlock);
                const c = d ? o.getParent(d.parentNode, o.isBlock) : null,
                    u = c ? c.nodeName.toUpperCase() : "",
                    m = !(!t || !t.ctrlKey);
                "LI" !== u || m || (d = c), l && 3 === l.nodeType && i >= l.nodeValue.length && (((e, t, n) => {
                    const o = new Xo(t, n);
                    let r;
                    const s = e.getNonEmptyElements();
                    for (; r = o.next();)
                        if (s[r.nodeName.toLowerCase()] || r.length > 0) return !0
                })(e.schema, l, d) || (s = o.create("br"), r.insertNode(s), r.setStartAfter(s), r.setEndAfter(s), a = !0)), s = o.create("br"), ja(o, r, s), TS(e, s, a), e.undoManager.add()
            })(e, t)
        },
        US = (e, t) => vS(e).filter((e => t.length > 0 && pn(mn(e), t))).isSome(),
        zS = ci([{ br: [] }, { block: [] }, { none: [] }]),
        jS = (e, t) => (e => US(e, Li(e)))(e),
        VS = e => (t, n) => (e => vS(e).filter((e => rr(mn(e)))).isSome())(t) === e,
        HS = (e, t) => (n, o) => { const r = (e => vS(e).fold(N(""), (e => e.nodeName.toUpperCase())))(n) === e.toUpperCase(); return r === t },
        $S = e => HS("pre", e),
        qS = e => (t, n) => Oi(t) === e,
        WS = (e, t) => (e => US(e, Di(e)))(e),
        KS = (e, t) => t,
        GS = e => {
            const t = Ti(e),
                n = ((e, t) => { const n = e.getRoot(); let o, r; for (o = t; o !== n && "false" !== e.getContentEditable(o);) "true" === e.getContentEditable(o) && (r = o), o = o.parentNode; return o !== n ? r : n })(e.dom, e.selection.getStart());
            return n && e.schema.isValidChild(n.nodeName, t)
        },
        YS = (e, t) => (n, o) => Y(e, ((e, t) => e && t(n, o)), !0) ? M.some(t) : M.none(),
        XS = (e, t) => {
            ((e, t) => RC([YS([jS], zS.none()), YS([HS("summary", !0)], zS.br()), YS([$S(!0), qS(!1), KS], zS.br()), YS([$S(!0), qS(!1)], zS.block()), YS([$S(!0), qS(!0), KS], zS.block()), YS([$S(!0), qS(!0)], zS.br()), YS([VS(!0), KS], zS.br()), YS([VS(!0)], zS.block()), YS([WS], zS.br()), YS([KS], zS.br()), YS([GS], zS.block())], [e, !(!t || !t.shiftKey)]).getOr(zS.none()))(e, t).fold((() => { C(t) && hS(e, "insertLineBreak").isDefaultPrevented() || (FS(e, t), C(t) && pS(e, "insertLineBreak")) }), (() => { C(t) && hS(e, "insertParagraph").isDefaultPrevented() || (OS(e, t), C(t) && pS(e, "insertParagraph")) }), S)
        },
        QS = Ct(),
        JS = e => e.stopImmediatePropagation(),
        ZS = e => e.keyCode === Uu.PAGE_UP || e.keyCode === Uu.PAGE_DOWN,
        e_ = (e, t, n) => { n && !e.get() ? t.on("NodeChange", JS, !0) : !n && e.get() && t.off("NodeChange", JS), e.set(n) },
        t_ = (e, t) => {
            const n = t.container(),
                o = t.offset();
            return No(n) ? (n.insertData(o, e), M.some(Ua(n, o + e.length))) : jd(t).map((n => { const o = un(e); return t.isAtEnd() ? Xn(n, o) : Yn(n, o), Ua(o.dom, e.length) }))
        },
        n_ = O(t_, dr),
        o_ = O(t_, " "),
        r_ = (e, t) => n => ((e, t) => !hg(t) && (((e, t) => ((e, t) => cc(e.dom, t).isNone())(e, t) || ((e, t) => dc(e.dom, t).isNone())(e, t) || ng(e, t) || og(e, t) || dg(e, t) || lg(e, t))(e, t) || gg(e, t) || pg(e, t)))(e, n) ? n_(t) : o_(t),
        s_ = e => {
            const t = Ua.fromRangeStart(e.selection.getRng()),
                n = mn(e.getBody());
            if (e.selection.isCollapsed()) {
                const o = O(By, e),
                    r = Ua.fromRangeStart(e.selection.getRng());
                return FC(o, e.getBody(), r).bind((e => t => t.fold((t => cc(e.dom, Ua.before(t))), (e => uc(e)), (e => mc(e)), (t => dc(e.dom, Ua.after(t)))))(n)).map((o => () => r_(n, t)(o).each((e => t => (e.selection.setRng(t.toRange()), e.nodeChanged(), !0))(e))))
            }
            return M.none()
        },
        a_ = e => td(e) ? [{ keyCode: Uu.TAB, action: pw($w, e, !0) }, { keyCode: Uu.TAB, shiftKey: !0, action: pw($w, e, !1) }] : [],
        i_ = e => {
            if (e.addShortcut("Meta+P", "", "mcePrint"), fS(e), _v(e)) return zs(null); {
                const t = Rx(e);
                return (e => { e.on("keyup compositionstart", O(rw, e)) })(e), ((e, t) => {
                    e.on("keydown", (n => {
                        !1 === n.isDefaultPrevented() && ((e, t, n) => {
                            const o = Ct().os;
                            hw([{ keyCode: Uu.RIGHT, action: pw(iw, e, !0) }, { keyCode: Uu.LEFT, action: pw(iw, e, !1) }, { keyCode: Uu.UP, action: pw(lw, e, !1) }, { keyCode: Uu.DOWN, action: pw(lw, e, !0) }, { keyCode: Uu.RIGHT, action: pw(Uw, e, !0) }, { keyCode: Uu.LEFT, action: pw(Uw, e, !1) }, { keyCode: Uu.UP, action: pw(zw, e, !1) }, { keyCode: Uu.DOWN, action: pw(zw, e, !0) }, { keyCode: Uu.RIGHT, action: pw(vw, e, !0) }, { keyCode: Uu.LEFT, action: pw(vw, e, !1) }, { keyCode: Uu.UP, action: pw(yw, e, !1) }, { keyCode: Uu.DOWN, action: pw(yw, e, !0) }, { keyCode: Uu.RIGHT, action: pw(Ex, e, t, !0) }, { keyCode: Uu.LEFT, action: pw(Ex, e, t, !1) }, { keyCode: Uu.RIGHT, ctrlKey: !o.isMacOS(), altKey: o.isMacOS(), action: pw(Ax, e, t) }, { keyCode: Uu.LEFT, ctrlKey: !o.isMacOS(), altKey: o.isMacOS(), action: pw(Ox, e, t) }, { keyCode: Uu.UP, action: pw(mw, e, !1) }, { keyCode: Uu.DOWN, action: pw(mw, e, !0) }], n).each((e => { n.preventDefault() }))
                        })(e, t, n)
                    }))
                })(e, t), ((e, t) => {
                    e.on("keydown", (n => {
                        !1 === n.isDefaultPrevented() && ((e, t, n) => {
                            const o = n.keyCode === Uu.BACKSPACE ? "deleteContentBackward" : "deleteContentForward";
                            bw([{ keyCode: Uu.BACKSPACE, action: pw(Kx, e) }, { keyCode: Uu.BACKSPACE, action: pw(hC, e, !1) }, { keyCode: Uu.DELETE, action: pw(hC, e, !0) }, { keyCode: Uu.BACKSPACE, action: pw(cC, e, !1) }, { keyCode: Uu.DELETE, action: pw(cC, e, !0) }, { keyCode: Uu.BACKSPACE, action: pw(Lx, e, t, !1) }, { keyCode: Uu.DELETE, action: pw(Lx, e, t, !0) }, { keyCode: Uu.BACKSPACE, action: pw(ap, e, !1) }, { keyCode: Uu.DELETE, action: pw(ap, e, !0) }, { keyCode: Uu.BACKSPACE, action: pw(bC, e, !1) }, { keyCode: Uu.DELETE, action: pw(bC, e, !0) }, { keyCode: Uu.BACKSPACE, action: pw(Ux, e, !1) }, { keyCode: Uu.DELETE, action: pw(Ux, e, !0) }, { keyCode: Uu.BACKSPACE, action: pw(tC, e, !1) }, { keyCode: Uu.DELETE, action: pw(tC, e, !0) }, { keyCode: Uu.BACKSPACE, action: pw(Jy, e, !1) }, { keyCode: Uu.DELETE, action: pw(Jy, e, !0) }, { keyCode: Uu.BACKSPACE, action: pw(Ix, e, !1) }, { keyCode: Uu.DELETE, action: pw(Ix, e, !0) }], n).each((t => { n.preventDefault(), hS(e, o).isDefaultPrevented() || (t(), pS(e, o)) }))
                        })(e, t, n)
                    })), e.on("keyup", (t => {!1 === t.isDefaultPrevented() && ((e, t) => { hw([{ keyCode: Uu.BACKSPACE, action: pw(pC, e) }, { keyCode: Uu.DELETE, action: pw(pC, e) }], t) })(e, t) }))
                })(e, t), (e => {
                    e.on("keydown", (t => {
                        t.keyCode === Uu.ENTER && ((e, t) => {
                            var n;
                            t.isDefaultPrevented() || (t.preventDefault(), (n = e.undoManager).typing && (n.typing = !1, n.add()), e.undoManager.transact((() => {!1 === e.selection.isCollapsed() && Fy(e), XS(e, t) })))
                        })(e, t)
                    }))
                })(e), (e => { e.on("keydown", (t => {!1 === t.isDefaultPrevented() && ((e, t) => { bw([{ keyCode: Uu.SPACEBAR, action: pw(s_, e) }], t).each((n => { t.preventDefault(), hS(e, "insertText", { data: " " }).isDefaultPrevented() || (n(), pS(e, "insertText", { data: " " })) })) })(e, t) })) })(e), (e => {
                    e.on("input", (t => {
                        !1 === t.isComposing && (e => {
                            const t = mn(e.getBody());
                            e.selection.isCollapsed() && wg(t, Ua.fromRangeStart(e.selection.getRng())).each((t => { e.selection.setRng(t.toRange()) }))
                        })(e)
                    }))
                })(e), (e => { e.on("keydown", (t => {!1 === t.isDefaultPrevented() && ((e, t) => { hw([...a_(e)], t).each((e => { t.preventDefault() })) })(e, t) })) })(e), ((e, t) => { e.on("keydown", (n => {!1 === n.isDefaultPrevented() && ((e, t, n) => { hw([{ keyCode: Uu.END, action: pw(dw, e, !0) }, { keyCode: Uu.HOME, action: pw(dw, e, !1) }, { keyCode: Uu.END, action: pw(Cw, e, !0) }, { keyCode: Uu.HOME, action: pw(Cw, e, !1) }, { keyCode: Uu.END, action: pw(Tx, e, !0, t) }, { keyCode: Uu.HOME, action: pw(Tx, e, !1, t) }], n).each((e => { n.preventDefault() })) })(e, t, n) })) })(e, t), ((e, t) => {
                    if (QS.os.isMacOS()) return;
                    const n = zs(!1);
                    e.on("keydown", (t => { ZS(t) && e_(n, e, !0) })), e.on("keyup", (o => {!1 === o.isDefaultPrevented() && ((e, t, n) => { hw([{ keyCode: Uu.PAGE_UP, action: pw(Tx, e, !1, t) }, { keyCode: Uu.PAGE_DOWN, action: pw(Tx, e, !0, t) }], n) })(e, t, o), ZS(o) && n.get() && (e_(n, e, !1), e.nodeChanged()) }))
                })(e, t), t
            }
        };
    class l_ {
        constructor(e) {
            let t;
            this.lastPath = [], this.editor = e;
            const n = this;
            "onselectionchange" in e.getDoc() || e.on("NodeChange click mouseup keyup focus", (n => {
                const o = e.selection.getRng(),
                    r = { startContainer: o.startContainer, startOffset: o.startOffset, endContainer: o.endContainer, endOffset: o.endOffset };
                "nodechange" !== n.type && om(r, t) || e.dispatch("SelectionChange"), t = r
            })), e.on("contextmenu", (() => { e.dispatch("SelectionChange") })), e.on("SelectionChange", (() => {
                const t = e.selection.getStart(!0);
                t && wu(e) && !n.isSameElementPath(t) && e.dom.isChildOf(t, e.getBody()) && e.nodeChanged({ selectionChange: !0 })
            })), e.on("mouseup", (t => {!t.isDefaultPrevented() && wu(e) && ("IMG" === e.selection.getNode().nodeName ? Gm.setEditorTimeout(e, (() => { e.nodeChanged() })) : e.nodeChanged()) }))
        }
        nodeChanged(e) {
            const t = this.editor.selection;
            let n, o, r;
            this.editor.initialized && t && !kl(this.editor) && !this.editor.mode.isReadOnly() && (r = this.editor.getBody(), n = t.getStart(!0) || r, n.ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(n, r) || (n = r), o = [], this.editor.dom.getParent(n, (e => {
                if (e === r) return !0;
                o.push(e)
            })), (e = e || {}).element = n, e.parents = o, this.editor.dispatch("NodeChange", e))
        }
        isSameElementPath(e) {
            let t;
            const n = this.editor,
                o = ne(n.dom.getParents(e, P, n.getBody()));
            if (o.length === this.lastPath.length) { for (t = o.length; t >= 0 && o[t] === this.lastPath[t]; t--); if (-1 === t) return this.lastPath = o, !0 }
            return this.lastPath = o, !1
        }
    }
    const d_ = N("x-tinymce/html"),
        c_ = "\x3c!-- x-tinymce/html --\x3e",
        u_ = e => c_ + e,
        m_ = e => -1 !== e.indexOf(c_),
        f_ = "%MCEPASTEBIN%",
        g_ = e => e.dom.get("mcepastebin"),
        p_ = e => e && "mcepastebin" === e.id,
        h_ = e => e === f_,
        b_ = (e, t) => (Bt.each(t, (t => { e = u(t, RegExp) ? e.replace(t, "") : e.replace(t[0], t[1]) })), e),
        v_ = e => b_(e, [/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi, /<!--StartFragment-->|<!--EndFragment-->/g, [/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g, (e, t, n) => t || n ? dr : " "], /<br class="Apple-interchange-newline">/g, /<br>$/i]),
        y_ = (e, t) => ({ content: e, cancelled: t }),
        C_ = (e, t) => (e.insertContent(t, { merge: ql(e), paste: !0 }), !0),
        x_ = e => /^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e),
        w_ = (e, t, n) => !(e.selection.isCollapsed() || !x_(t)) && ((e, t, n) => (e.undoManager.extra((() => { n(e, t) }), (() => { e.execCommand("mceInsertLink", !1, t) })), !0))(e, t, n),
        k_ = (e, t, n) => !!((e, t) => x_(t) && V(ed(e), (e => je(t.toLowerCase(), `.${e.toLowerCase()}`))))(e, t) && ((e, t, n) => (e.undoManager.extra((() => { n(e, t) }), (() => { e.insertContent('<img src="' + t + '">') })), !0))(e, t, n),
        S_ = (e => { let t = 0; return () => "mceclip" + t++ })(),
        __ = (e, t, n, o) => {
            const r = ((e, t, n) => ((e, t, n) => {
                const o = ((e, t, n) => e.dispatch("PastePreProcess", { content: t, internal: n }))(e, t, n),
                    r = ((e, t) => {
                        const n = Wb({}, e.schema);
                        n.addNodeFilter("meta", (e => { Bt.each(e, (e => { e.remove() })) }));
                        const o = n.parse(t, { forced_root_block: !1, isRootContent: !0 });
                        return Rf({ validate: !0 }, e.schema).serialize(o)
                    })(e, o.content);
                return e.hasEventListeners("PastePostProcess") && !o.isDefaultPrevented() ? ((e, t, n) => {
                    const o = e.dom.create("div", { style: "display:none" }, t),
                        r = ((e, t, n) => e.dispatch("PastePostProcess", { node: t, internal: n }))(e, o, n);
                    return y_(r.node.innerHTML, r.isDefaultPrevented())
                })(e, r, n) : y_(r, o.isDefaultPrevented())
            })(e, t, n))(e, t, n);
            !1 === r.cancelled && ((e, t, n) => { n || !Wl(e) ? C_(e, t) : ((e, t) => { Bt.each([w_, k_, C_], (n => !0 !== n(e, t, C_))) })(e, t) })(e, r.content, o)
        },
        E_ = (e, t, n) => {
            const o = n || m_(t);
            __(e, (e => e.replace(c_, ""))(t), o, !1)
        },
        N_ = (e, t) => {
            const n = e.dom.encode(t).replace(/\r\n/g, "\n"),
                o = ((e, t, n) => {
                    const o = e.split(/\n\n/),
                        r = ((e, t) => { let n = "<" + e; const o = ye(t, ((e, t) => t + '="' + ls.encodeAllRaw(e) + '"')); return o.length && (n += " " + o.join(" ")), n + ">" })(t, n),
                        s = "</" + t + ">",
                        a = H(o, (e => e.split(/\n/).join("<br />")));
                    return 1 === a.length ? a[0] : H(a, (e => r + e + s)).join("")
                })(zr(n, Gl(e)), Ti(e), Bi(e));
            __(e, o, !1, !0)
        },
        R_ = e => {
            const t = {};
            if (e && e.types)
                for (let n = 0; n < e.types.length; n++) { const o = e.types[n]; try { t[o] = e.getData(o) } catch (e) { t[o] = "" } }
            return t
        },
        A_ = (e, t) => t in e && e[t].length > 0,
        O_ = e => A_(e, "text/html") || A_(e, "text/plain"),
        T_ = (e, t, n) => {
            const o = "paste" === t.type ? t.clipboardData : t.dataTransfer;
            var r;
            if (zl(e) && o) {
                const s = ((e, t) => {
                    const n = t.items ? ee(de(t.items), (e => "file" === e.kind ? [e.getAsFile()] : [])) : [],
                        o = t.files ? de(t.files) : [];
                    return K(n.length > 0 ? n : o, (e => {
                        const t = ed(e);
                        return e => ze(e.type, "image/") && V(t, (t => (e => {
                            const t = e.toLowerCase(),
                                n = { jpg: "jpeg", jpe: "jpeg", jfi: "jpeg", jif: "jpeg", jfif: "jpeg", pjpeg: "jpeg", pjp: "jpeg", svg: "svg+xml" };
                            return Bt.hasOwn(n, t) ? "image/" + n[t] : "image/" + t
                        })(t) === e.type))
                    })(e))
                })(e, o);
                if (s.length > 0) return t.preventDefault(), (r = s, Promise.all(H(r, (e => Nb(e).then((t => ({ file: e, uri: t }))))))).then((t => {
                    n && e.selection.setRng(n), $(t, (t => {
                        ((e, t) => {
                            const { data: n, type: o } = Sb(t.uri), r = t.file, s = e.editorUpload.blobCache, a = s.getByData(n, o), i = null != a ? a : ((e, t, n, o) => {
                                const r = S_(),
                                    s = Fi(e) && C(n.name),
                                    a = s ? ((e, t) => { const n = t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i); return C(n) ? e.dom.encode(n[1]) : null })(e, n.name) : r,
                                    i = s ? n.name : void 0,
                                    l = t.create(r, n, o, a, i);
                                return t.add(l), l
                            })(e, s, r, n);
                            E_(e, `<img src="${i.blobUri()}">`, !1)
                        })(e, t)
                    }))
                })), !0
            }
            return !1
        },
        B_ = (e, t, n, o) => {
            let r = v_(n);
            const s = A_(t, d_()) || m_(n),
                a = !s && (e => !/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e))(r),
                i = x_(r);
            (h_(r) || !r.length || a && !i) && (o = !0), (o || i) && (r = A_(t, "text/plain") && a ? t["text/plain"] : (e => {
                const t = vs(),
                    n = Wb({}, t);
                let o = "";
                const r = t.getVoidElements(),
                    s = Bt.makeMap("script noscript style textarea video audio iframe object", " "),
                    a = t.getBlockElements(),
                    i = e => {
                        const n = e.name,
                            l = e;
                        if ("br" !== n) {
                            if ("wbr" !== n)
                                if (r[n] && (o += " "), s[n]) o += " ";
                                else {
                                    if (3 === e.type && (o += e.value), !(e.name in t.getVoidElements()) && (e = e.firstChild))
                                        do { i(e) } while (e = e.next);
                                    a[n] && l.next && (o += "\n", "p" === n && (o += "\n"))
                                }
                        } else o += "\n"
                    };
                return e = b_(e, [/<!\[[^\]]+\]>/g]), i(n.parse(e)), o
            })(r)), h_(r) || (o ? N_(e, r) : E_(e, r, s))
        },
        D_ = (e, t, n) => {
            ((e, t, n) => {
                let o;
                e.on("keydown", (e => {
                    (e => Uu.metaKeyPressed(e) && 86 === e.keyCode || e.shiftKey && 45 === e.keyCode)(e) && !e.isDefaultPrevented() && (o = e.shiftKey && 86 === e.keyCode)
                })), e.on("paste", (r => {
                    if (r.isDefaultPrevented() || (e => { var t, n; return Nt.os.isAndroid() && 0 === (null === (n = null === (t = e.clipboardData) || void 0 === t ? void 0 : t.items) || void 0 === n ? void 0 : n.length) })(r)) return;
                    const s = "text" === n.get() || o;
                    o = !1;
                    const a = R_(r.clipboardData);
                    !O_(a) && T_(e, r, t.getLastRng() || e.selection.getRng()) || (A_(a, "text/html") ? (r.preventDefault(), B_(e, a, a["text/html"], s)) : (t.create(), Gm.setEditorTimeout(e, (() => {
                        const n = t.getHtml();
                        t.remove(), B_(e, a, n, s)
                    }), 0)))
                }))
            })(e, t, n), (e => {
                const t = e => ze(e, "webkit-fake-url"),
                    n = e => ze(e, "data:");
                e.parser.addNodeFilter("img", ((o, r, s) => {
                    if (!zl(e) && (e => { var t; return !0 === (null === (t = e.data) || void 0 === t ? void 0 : t.paste) })(s))
                        for (const r of o) {
                            const o = r.attr("src");
                            m(o) && !r.attr("data-mce-object") && o !== Nt.transparentSrc && (t(o) || !Yl(e) && n(o)) && r.remove()
                        }
                }))
            })(e)
        },
        L_ = (e, t, n, o) => {
            ((e, t, n) => { try { return e.clearData(), e.setData("text/html", t), e.setData("text/plain", n), e.setData(d_(), t), !0 } catch (e) { return !1 } })(e.clipboardData, t.html, t.text) ? (e.preventDefault(), o()) : n(t.html, o)
        },
        P_ = e => (t, n) => {
            const { dom: o, selection: r } = e, s = o.create("div", { contenteditable: "false", "data-mce-bogus": "all" }), a = o.create("div", { contenteditable: "true" }, t);
            o.setStyles(s, { position: "fixed", top: "0", left: "-3000px", width: "1000px", overflow: "hidden" }), s.appendChild(a), o.add(e.getBody(), s);
            const i = r.getRng();
            a.focus();
            const l = o.createRng();
            l.selectNodeContents(a), r.setRng(l), Gm.setEditorTimeout(e, (() => { r.setRng(i), o.remove(s), n() }), 0)
        },
        M_ = e => ({ html: u_(e.selection.getContent({ contextual: !0 })), text: e.selection.getContent({ format: "text" }) }),
        I_ = e => !e.selection.isCollapsed() || (e => !!e.dom.getParent(e.selection.getStart(), "td[data-mce-selected],th[data-mce-selected]", e.getBody()))(e),
        F_ = (e, t) => { var n, o; return pm.getCaretRangeFromPoint(null !== (n = t.clientX) && void 0 !== n ? n : 0, null !== (o = t.clientY) && void 0 !== o ? o : 0, e.getDoc()) },
        U_ = (e, t) => { e.focus(), t && e.selection.setRng(t) },
        z_ = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
        j_ = e => Bt.trim(e).replace(z_, Pc).toLowerCase(),
        V_ = (e, t, n) => {
            const o = Hl(e);
            if (n || "all" === o || !$l(e)) return t;
            const r = o ? o.split(/[, ]/) : [];
            if (r && "none" !== o) {
                const n = e.dom,
                    o = e.selection.getNode();
                t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, ((e, t, s, a) => {
                    const i = n.parseStyle(n.decode(s)),
                        l = {};
                    for (let e = 0; e < r.length; e++) {
                        const t = i[r[e]];
                        let s = t,
                            a = n.getStyle(o, r[e], !0);
                        /color/.test(r[e]) && (s = j_(s), a = j_(a)), a !== s && (l[r[e]] = t)
                    }
                    const d = n.serializeStyle(l, "span");
                    return d ? t + ' style="' + d + '"' + a : t + a
                }))
            } else t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");
            return t = t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, ((e, t, n, o) => t + ' style="' + n + '"' + o)), t
        },
        H_ = e => {
            const t = zs(!1),
                n = zs(Kl(e) ? "text" : "html"),
                o = (e => {
                    const t = zs(null);
                    return {
                        create: () => ((e, t) => {
                            const { dom: n, selection: o } = e, r = e.getBody();
                            t.set(o.getRng());
                            const s = n.add(e.getBody(), "div", { id: "mcepastebin", class: "mce-pastebin", contentEditable: !0, "data-mce-bogus": "all", style: "position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0" }, f_);
                            Nt.browser.isFirefox() && n.setStyle(s, "left", "rtl" === n.getStyle(r, "direction", !0) ? 65535 : -65535), n.bind(s, "beforedeactivate focusin focusout", (e => { e.stopPropagation() })), s.focus(), o.select(s, !0)
                        })(e, t),
                        remove: () => ((e, t) => {
                            const n = e.dom;
                            if (g_(e)) {
                                let o;
                                const r = t.get();
                                for (; o = g_(e);) n.remove(o), n.unbind(o);
                                r && e.selection.setRng(r)
                            }
                            t.set(null)
                        })(e, t),
                        getEl: () => g_(e),
                        getHtml: () => (e => {
                            const t = e.dom,
                                n = (e, n) => { e.appendChild(n), t.remove(n, !0) },
                                [o, ...r] = K(e.getBody().childNodes, p_);
                            $(r, (e => { n(o, e) }));
                            const s = t.select("div[id=mcepastebin]", o);
                            for (let e = s.length - 1; e >= 0; e--) {
                                const r = t.create("div");
                                o.insertBefore(r, s[e]), n(r, s[e])
                            }
                            return o ? o.innerHTML : ""
                        })(e),
                        getLastRng: t.get
                    }
                })(e);
            (e => {
                (Nt.browser.isChromium() || Nt.browser.isSafari()) && ((e, t) => { e.on("PastePreProcess", (n => { n.content = t(e, n.content, n.internal) })) })(e, V_)
            })(e), ((e, t) => {
                e.addCommand("mceTogglePlainTextPaste", (() => {
                    ((e, t) => { "text" === t.get() ? (t.set("html"), Fu(e, !1)) : (t.set("text"), Fu(e, !0)), e.focus() })(e, t)
                })), e.addCommand("mceInsertClipboardContent", ((t, n) => { n.html && E_(e, n.html, n.internal), n.text && N_(e, n.text) }))
            })(e, n), (e => {
                const t = t => n => { t(e, n) },
                    n = jl(e);
                x(n) && e.on("PastePreProcess", t(n));
                const o = Vl(e);
                x(o) && e.on("PastePostProcess", t(o))
            })(e), e.on("PreInit", (() => {
                (e => {
                    e.on("cut", (e => t => {
                        !t.isDefaultPrevented() && I_(e) && L_(t, M_(e), P_(e), (() => {
                            if (Nt.browser.isChromium() || Nt.browser.isFirefox()) {
                                const t = e.selection.getRng();
                                Gm.setEditorTimeout(e, (() => { e.selection.setRng(t), e.execCommand("Delete") }), 0)
                            } else e.execCommand("Delete")
                        }))
                    })(e)), e.on("copy", (e => t => {!t.isDefaultPrevented() && I_(e) && L_(t, M_(e), P_(e), S) })(e))
                })(e), ((e, t) => {
                    Ul(e) && e.on("dragend dragover draggesture dragdrop drop drag", (e => { e.preventDefault(), e.stopPropagation() })), zl(e) || e.on("drop", (e => {
                        const t = e.dataTransfer;
                        t && (e => V(e.files, (e => /^image\//.test(e.type))))(t) && e.preventDefault()
                    })), e.on("drop", (n => {
                        if (n.isDefaultPrevented() || t.get()) return;
                        const o = F_(e, n);
                        if (y(o)) return;
                        const r = R_(n.dataTransfer),
                            s = A_(r, d_());
                        if ((!O_(r) || (e => { const t = e["text/plain"]; return !!t && 0 === t.indexOf("file://") })(r)) && T_(e, n, o)) return;
                        const a = r[d_()],
                            i = a || r["text/html"] || r["text/plain"];
                        i && (n.preventDefault(), Gm.setEditorTimeout(e, (() => {
                            e.undoManager.transact((() => {
                                a && e.execCommand("Delete"), U_(e, o);
                                const t = v_(i);
                                r["text/html"] ? E_(e, t, s) : N_(e, t)
                            }))
                        })))
                    })), e.on("dragstart", (e => { t.set(!0) })), e.on("dragover dragend", (n => { zl(e) && !1 === t.get() && (n.preventDefault(), U_(e, F_(e, n))), "dragend" === n.type && t.set(!1) }))
                })(e, t), D_(e, o, n)
            }))
        },
        $_ = e => yo(e) && nr(mn(e));
    var q_;
    ! function(e) { e.Before = "before", e.After = "after" }(q_ || (q_ = {}));
    const W_ = (e, t) => Math.abs(e.left - t),
        K_ = (e, t) => Math.abs(e.right - t),
        G_ = (e, t) => (e => Y(e, ((e, t) => e.fold((() => M.some(t)), (e => {
            const n = Math.min(t.left, e.left),
                o = Math.min(t.top, e.top),
                r = Math.max(t.right, e.right),
                s = Math.max(t.bottom, e.bottom);
            return M.some({ top: o, right: r, bottom: s, left: n, width: r - n, height: s - o })
        }))), M.none()))(K(e, (e => { return (n = t) >= (o = e).top && n <= o.bottom; var n, o }))).fold((() => [
            [], e
        ]), (t => { const { pass: n, fail: o } = W(e, (e => ((e, t) => { const n = ((e, t) => Math.max(0, Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top)))(e, t) / Math.min(e.height, t.height); return ((e, t) => e.top < t.bottom && e.bottom > t.top)(e, t) && n > .5 })(e, t))); return [n, o] })),
        Y_ = (e, t, n) => t > e.left && t < e.right ? 0 : Math.min(Math.abs(e.left - t), Math.abs(e.right - t)),
        X_ = (e, t, n) => {
            const o = e => Lr(e.node) ? M.some(e) : yo(e.node) ? X_(de(e.node.childNodes), t, n) : M.none(),
                r = (e, r) => {
                    const s = se(e, ((e, o) => r(e, t, n) - r(o, t, n)));
                    return ((e, r) => {
                        if (e.length >= 2) {
                            const s = o(e[0]).getOr(e[0]),
                                a = o(e[1]).getOr(e[1]);
                            if (Math.abs(r(s, t, n) - r(a, t, n)) < 2) { if (No(s.node)) return M.some(s); if (No(a.node)) return M.some(a) }
                        }
                        return M.none()
                    })(s, r).orThunk((() => ce(s, o)))
                },
                [s, a] = G_(cx(e), n),
                { pass: i, fail: l } = W(a, (e => e.top < n));
            return r(s, Y_).orThunk((() => r(l, ba))).orThunk((() => r(i, ba)))
        },
        Q_ = (e, t, n) => ((e, t, n) => {
            const o = mn(e),
                r = Cn(o),
                s = fn(r, t, n).filter((e => vn(o, e))).getOr(o);
            return ((e, t, n, o) => { const r = (t, s) => s.fold((() => X_(de(t.dom.childNodes), n, o)), (e => { const r = K(de(t.dom.childNodes), (t => t !== e.dom)); return X_(r, n, o) })).orThunk((() => { var n; return (bn(t, e) ? M.none() : (n = t, M.from(n.dom.parentElement).map(mn))).bind((e => r(e, M.some(t)))) })); return r(t, M.none()) })(o, s, t, n)
        })(e, t, n).filter((e => bd(e.node))).map((e => ((e, t) => ({ node: e.node, position: W_(e, t) < K_(e, t) ? q_.Before : q_.After }))(e, t))),
        J_ = e => {
            const t = e.getBoundingClientRect(),
                n = e.ownerDocument,
                o = n.documentElement,
                r = n.defaultView;
            return { top: t.top + r.pageYOffset - o.clientTop, left: t.left + r.pageXOffset - o.clientLeft }
        },
        Z_ = Mo,
        eE = Po,
        tE = (e, t, n, o) => {
            const r = e.dom,
                s = t.cloneNode(!0);
            r.setStyles(s, { width: n, height: o }), r.setAttrib(s, "data-mce-selected", null);
            const a = r.create("div", { class: "mce-drag-container", "data-mce-bogus": "all", unselectable: "on", contenteditable: "false" });
            return r.setStyles(a, { position: "absolute", opacity: .5, overflow: "hidden", border: 0, padding: 0, margin: 0, width: n, height: o }), r.setStyles(s, { margin: 0, boxSizing: "border-box" }), a.appendChild(s), a
        },
        nE = e => { e && e.parentNode && e.parentNode.removeChild(e) },
        oE = e => { e.on((e => { nE(e.ghost) })), e.clear() },
        rE = e => {
            const t = Ws(),
                n = Is.DOM,
                o = document,
                r = ((e, t) => n => {
                    if ((e => 0 === e.button)(n)) {
                        const s = Q(t.dom.getParents(n.target), ((...e) => t => {
                            for (let n = 0; n < e.length; n++)
                                if (e[n](t)) return !0;
                            return !1
                        })(Z_, eE)).getOr(null);
                        if (o = t.getBody(), Z_(r = s) && r !== o) {
                            const o = t.dom.getPos(s),
                                r = t.getBody(),
                                a = t.getDoc().documentElement;
                            e.set({ element: s, dragging: !1, screenX: n.screenX, screenY: n.screenY, maxX: (t.inline ? r.scrollWidth : a.offsetWidth) - 2, maxY: (t.inline ? r.scrollHeight : a.offsetHeight) - 2, relX: n.pageX - o.x, relY: n.pageY - o.y, width: s.offsetWidth, height: s.offsetHeight, ghost: tE(t, s, s.offsetWidth, s.offsetHeight) })
                        }
                    }
                    var o, r
                })(t, e),
                s = ((e, t) => {
                    const n = Ks(((e, n) => { t._selectionOverrides.hideFakeCaret(), t.selection.placeCaretAt(e, n) }), 0);
                    return t.on("remove", n.cancel), o => e.on((e => {
                        const r = Math.max(Math.abs(o.screenX - e.screenX), Math.abs(o.screenY - e.screenY));
                        if (!e.dragging && r > 10) {
                            if (t.dispatch("dragstart", { target: e.element }).isDefaultPrevented()) return;
                            e.dragging = !0, t.focus()
                        }
                        if (e.dragging) {
                            const r = ((e, t) => ({ pageX: t.pageX - e.relX, pageY: t.pageY + 5 }))(e, ((e, t) => {
                                return n = (e => e.inline ? J_(e.getBody()) : { left: 0, top: 0 })(e), o = (e => { const t = e.getBody(); return e.inline ? { left: t.scrollLeft, top: t.scrollTop } : { left: 0, top: 0 } })(e), r = ((e, t) => {
                                    if (t.target.ownerDocument !== e.getDoc()) {
                                        const n = J_(e.getContentAreaContainer()),
                                            o = (e => {
                                                const t = e.getBody(),
                                                    n = e.getDoc().documentElement,
                                                    o = { left: t.scrollLeft, top: t.scrollTop },
                                                    r = { left: t.scrollLeft || n.scrollLeft, top: t.scrollTop || n.scrollTop };
                                                return e.inline ? o : r
                                            })(e);
                                        return { left: t.pageX - n.left + o.left, top: t.pageY - n.top + o.top }
                                    }
                                    return { left: t.pageX, top: t.pageY }
                                })(e, t), { pageX: r.left - n.left + o.left, pageY: r.top - n.top + o.top };
                                var n, o, r
                            })(t, o));
                            s = e.ghost, a = t.getBody(), s.parentNode !== a && a.appendChild(s), ((e, t, n, o, r, s) => {
                                let a = 0,
                                    i = 0;
                                e.style.left = t.pageX + "px", e.style.top = t.pageY + "px", t.pageX + n > r && (a = t.pageX + n - r), t.pageY + o > s && (i = t.pageY + o - s), e.style.width = n - a + "px", e.style.height = o - i + "px"
                            })(e.ghost, r, e.width, e.height, e.maxX, e.maxY), n.throttle(o.clientX, o.clientY)
                        }
                        var s, a
                    }))
                })(t, e),
                a = ((e, t) => n => {
                    e.on((e => {
                        if (e.dragging) {
                            if (((e, t, n) => t !== n && !e.dom.isChildOf(t, n) && !Z_(t))(t, (e => { const t = e.getSel().getRangeAt(0).startContainer; return 3 === t.nodeType ? t.parentNode : t })(t.selection), e.element)) {
                                const o = (e => { const t = e.cloneNode(!0); return t.removeAttribute("data-mce-selected"), t })(e.element);
                                t.dispatch("drop", { clientX: n.clientX, clientY: n.clientY }).isDefaultPrevented() || t.undoManager.transact((() => { nE(e.element), t.insertContent(t.dom.getOuterHTML(o)), t._selectionOverrides.hideFakeCaret() }))
                            }
                            t.dispatch("dragend")
                        }
                    })), oE(e)
                })(t, e),
                i = ((e, t) => () => { e.on((e => { e.dragging && t.dispatch("dragend") })), oE(e) })(t, e);
            e.on("mousedown", r), e.on("mousemove", s), e.on("mouseup", a), n.bind(o, "mousemove", s), n.bind(o, "mouseup", i), e.on("remove", (() => { n.unbind(o, "mousemove", s), n.unbind(o, "mouseup", i) })), e.on("keydown", (e => { e.keyCode === Uu.ESC && i() }))
        },
        sE = Mo,
        aE = (e, t) => ip(e.getBody(), t),
        iE = e => {
            const t = e.selection,
                n = e.dom,
                o = n.isBlock,
                r = e.getBody(),
                s = gd(e, r, o, (() => nf(e))),
                a = "sel-" + n.uniqueId(),
                i = "data-mce-selected";
            let l;
            const d = e => e !== r && (sE(e) || Fo(e)) && n.isChildOf(e, r),
                c = (n, o, r, a = !0) => e.dispatch("ShowCaret", { target: o, direction: n, before: r }).isDefaultPrevented() ? null : (a && t.scrollIntoView(o, -1 === n), s.show(r, o)),
                u = e => vr(e) || wr(e) || kr(e),
                m = e => u(e.startContainer) || u(e.endContainer),
                f = t => {
                    const o = e.schema.getVoidElements(),
                        r = n.createRng(),
                        s = t.startContainer,
                        a = t.startOffset,
                        i = t.endContainer,
                        l = t.endOffset;
                    return we(o, s.nodeName.toLowerCase()) ? 0 === a ? r.setStartBefore(s) : r.setStartAfter(s) : r.setStart(s, a), we(o, i.nodeName.toLowerCase()) ? 0 === l ? r.setEndBefore(i) : r.setEndAfter(i) : r.setEnd(i, l), r
                },
                g = (o, s) => {
                    if (!o) return null;
                    if (o.collapsed) {
                        if (!m(o)) {
                            const e = s ? 1 : -1,
                                t = zd(e, r, o),
                                n = t.getNode(!s);
                            if (bd(n)) return c(e, n, !!s && !t.isAtEnd(), !1);
                            const a = t.getNode(s);
                            if (bd(a)) return c(e, a, !s && !t.isAtEnd(), !1)
                        }
                        return null
                    }
                    let u = o.startContainer,
                        f = o.startOffset;
                    const g = o.endOffset;
                    if (3 === u.nodeType && 0 === f && sE(u.parentNode) && (u = u.parentNode, f = n.nodeIndex(u), u = u.parentNode), 1 !== u.nodeType) return null;
                    if (g === f + 1 && u === o.endContainer) {
                        const o = u.childNodes[f];
                        if (d(o)) return (o => {
                            const r = o.cloneNode(!0),
                                s = e.dispatch("ObjectSelected", { target: o, targetClone: r });
                            if (s.isDefaultPrevented()) return null;
                            const d = ((o, r) => {
                                    const s = mn(e.getBody()),
                                        i = e.getDoc(),
                                        l = Wo(s, "#" + a).getOrThunk((() => { const e = dn('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>', i); return $t(e, "id", a), Jn(s, e), e })),
                                        d = n.createRng();
                                    eo(l), Zn(l, [un(dr, i), mn(r), un(dr, i)]), d.setStart(l.dom.firstChild, 1), d.setEnd(l.dom.lastChild, 0), Hn(l, { top: n.getPos(o, e.getBody()).y + "px" }), Mm(l);
                                    const c = t.getSel();
                                    return c.removeAllRanges(), c.addRange(d), d
                                })(o, s.targetClone),
                                c = mn(o);
                            return $(Xs(mn(e.getBody()), "*[data-mce-selected]"), (e => { bn(c, e) || Yt(e, i) })), n.getAttrib(o, i) || o.setAttribute(i, "1"), l = o, h(), d
                        })(o)
                    }
                    return null
                },
                p = () => { l && l.removeAttribute(i), Wo(mn(e.getBody()), "#" + a).each(to), l = null },
                h = () => { s.hide() };
            return _v(e) || (e.on("click", (t => {
                const n = aE(e, t.target);
                n && sE(n) && (t.preventDefault(), e.focus())
            })), e.on("blur NewBlock", p), e.on("ResizeWindow FullscreenStateChanged", s.reposition), e.on("tap", (t => {
                const n = t.target,
                    o = aE(e, n);
                sE(o) ? (t.preventDefault(), sC(e, o).each(g)) : d(n) && sC(e, n).each(g)
            }), !0), e.on("mousedown", (o => {
                const s = o.target;
                if (s !== r && "HTML" !== s.nodeName && !n.isChildOf(s, r)) return;
                if (!1 === ((e, t, n) => {
                        const o = mn(e.getBody()),
                            r = e.inline ? o : mn(Cn(o).dom.documentElement),
                            s = ((e, t, n, o) => { const r = (e => e.dom.getBoundingClientRect())(t); return { x: n - (e ? r.left + t.dom.clientLeft + Qv(t) : 0), y: o - (e ? r.top + t.dom.clientTop + Xv(t) : 0) } })(e.inline, r, t, n);
                        return ((e, t, n) => {
                            const o = Gv(e),
                                r = Yv(e);
                            return t >= 0 && n >= 0 && t <= o && n <= r
                        })(r, s.x, s.y)
                    })(e, o.clientX, o.clientY)) return;
                p(), h();
                const a = aE(e, s);
                sE(a) ? (o.preventDefault(), sC(e, a).each(g)) : Q_(r, o.clientX, o.clientY).each((n => {
                    var r;
                    o.preventDefault(), (r = c(1, n.node, n.position === q_.Before, !1)) && t.setRng(r), yo(a) ? a.focus() : e.getBody().focus()
                }))
            })), e.on("keypress", (e => { Uu.modifierPressed(e) || sE(t.getNode()) && e.preventDefault() })), e.on("GetSelectionRange", (e => {
                let t = e.range;
                if (l) {
                    if (!l.parentNode) return void(l = null);
                    t = t.cloneRange(), t.selectNode(l), e.range = t
                }
            })), e.on("SetSelectionRange", (e => {
                e.range = f(e.range);
                const t = g(e.range, e.forward);
                t && (e.range = t)
            })), e.on("AfterSetSelectionRange", (e => {
                const t = e.range,
                    o = t.startContainer.parentNode;
                var r;
                m(t) || "mcepastebin" === o.id || h(), r = o, n.hasClass(r, "mce-offscreen-selection") || p()
            })), (e => {
                rE(e), Rl(e) && (e => {
                    const t = t => {
                            if (!t.isDefaultPrevented()) {
                                const n = t.dataTransfer;
                                n && (j(n.types, "Files") || n.files.length > 0) && (t.preventDefault(), "drop" === t.type && oy(e, "Dropped file type is not supported"))
                            }
                        },
                        n = n => { Qm(e, n.target) && t(n) },
                        o = () => {
                            const o = Is.DOM,
                                r = e.dom,
                                s = document,
                                a = e.inline ? e.getBody() : e.getDoc(),
                                i = ["drop", "dragover"];
                            $(i, (e => { o.bind(s, e, n), r.bind(a, e, t) })), e.on("remove", (() => { $(i, (e => { o.unbind(s, e, n), r.unbind(a, e, t) })) }))
                        };
                    e.on("init", (() => { Gm.setEditorTimeout(e, o, 0) }))
                })(e)
            })(e), (e => {
                const t = Ks((() => {
                    if (!e.removed && e.getBody().contains(document.activeElement)) {
                        const t = e.selection.getRng();
                        if (t.collapsed) {
                            const n = aC(e, t, !1);
                            e.selection.setRng(n)
                        }
                    }
                }), 0);
                e.on("focus", (() => { t.throttle() })), e.on("blur", (() => { t.cancel() }))
            })(e), (e => {
                e.on("init", (() => {
                    e.on("focusin", (t => {
                        const n = t.target;
                        if (Fo(n)) {
                            const t = ip(e.getBody(), n),
                                o = Mo(t) ? t : n;
                            e.selection.getNode() !== o && sC(e, o).each((t => e.selection.setRng(t)))
                        }
                    }))
                }))
            })(e)), { showCaret: c, showBlockCaretContainer: e => { e.hasAttribute("data-mce-caret") && (Sr(e), t.scrollIntoView(e)) }, hideFakeCaret: h, destroy: () => { s.destroy(), l = null } }
        },
        lE = (e, t, n) => {
            if (No(t) && (n < 0 || n > t.data.length)) return [];
            const o = [n];
            let r = t;
            for (; r !== e && r.parentNode;) {
                const e = r.parentNode;
                for (let t = 0; t < e.childNodes.length; t++)
                    if (e.childNodes[t] === r) { o.push(t); break }
                r = e
            }
            return r === e ? o.reverse() : []
        },
        dE = (e, t, n, o, r) => ({ start: lE(e, t, n), end: lE(e, o, r) }),
        cE = (e, t) => {
            const n = t.slice(),
                o = n.pop();
            return Y(n, ((e, t) => e.bind((e => M.from(e.childNodes[t])))), M.some(e)).bind((e => No(e) && (o < 0 || o > e.data.length) ? M.none() : M.some({ node: e, offset: o })))
        },
        uE = (e, t) => cE(e, t.start).bind((({ node: n, offset: o }) => cE(e, t.end).map((({ node: e, offset: t }) => { const r = document.createRange(); return r.setStart(n, o), r.setEnd(e, t), r })))),
        mE = (e, t, n) => {
            if (t && e.isEmpty(t) && !n(t)) {
                const o = t.parentNode;
                e.remove(t), mE(e, o, n)
            }
        },
        fE = (e, t, n, o = !0) => {
            const r = t.startContainer.parentNode,
                s = t.endContainer.parentNode;
            t.deleteContents(), o && !n(t.startContainer) && (No(t.startContainer) && 0 === t.startContainer.data.length && e.remove(t.startContainer), No(t.endContainer) && 0 === t.endContainer.data.length && e.remove(t.endContainer), mE(e, r, n), r !== s && mE(e, s, n))
        },
        gE = (e, t) => M.from(e.dom.getParent(t.startContainer, e.dom.isBlock)),
        pE = (e, t, n) => {
            ((e, t, n) => { if (No(e) && 0 >= e.length) return M.some(qw(e, 0)); { const t = ca(Ww); return M.from(t.forwards(e, 0, Kw(e), n)).map((e => qw(e.container, 0))) } })(t, 0, t).each((o => {
                const r = o.container;
                Xw(r, n.start.length, t).each((n => {
                    const o = e.createRng();
                    o.setStart(r, 0), o.setEnd(n.container, n.offset), fE(e, o, (e => e === t))
                }))
            }))
        },
        hE = (e, t) => e.create("span", { "data-mce-type": "bookmark", id: t }),
        bE = (e, t) => { const n = e.createRng(); return n.setStartAfter(t.start), n.setEndBefore(t.end), n },
        vE = (e, t, n) => {
            const o = uE(e.getRoot(), n).getOrDie("Unable to resolve path range"),
                r = o.startContainer,
                s = o.endContainer,
                a = 0 === o.endOffset ? s : s.splitText(o.endOffset),
                i = 0 === o.startOffset ? r : r.splitText(o.startOffset);
            return { prefix: t, end: a.parentNode.insertBefore(hE(e, t + "-end"), a), start: i.parentNode.insertBefore(hE(e, t + "-start"), i) }
        },
        yE = (e, t, n) => { mE(e, e.get(t.prefix + "-end"), n), mE(e, e.get(t.prefix + "-start"), n) },
        CE = e => 0 === e.start.length,
        xE = (e, t, n, o) => {
            const r = t.start;
            var s;
            return Qw(e, o.container, o.offset, (s = r, (e, t) => {
                const n = e.data.substring(0, t),
                    o = n.lastIndexOf(s.charAt(s.length - 1)),
                    r = n.lastIndexOf(s);
                return -1 !== r ? r + s.length : -1 !== o ? o + 1 : -1
            }), n).bind((o => { if (o.offset >= r.length) { const t = e.createRng(); return t.setStart(o.container, o.offset - r.length), t.setEnd(o.container, o.offset), M.some(t) } { const s = o.offset - r.length; return Yw(o.container, s, n).map((t => { const n = e.createRng(); return n.setStart(t.container, t.offset), n.setEnd(o.container, o.offset), n })).filter((e => e.toString() === r)).orThunk((() => xE(e, t, n, qw(o.container, 0)))) } }))
        },
        wE = (e, t, n) => {
            const o = e.dom,
                r = o.getRoot(),
                s = n.pattern,
                a = n.position.container,
                i = n.position.offset;
            return Yw(a, i - n.pattern.end.length, t).bind((l => {
                const d = dE(r, l.container, l.offset, a, i);
                if (CE(s)) return M.some({ matches: [{ pattern: s, startRng: d, endRng: d }], position: l }); {
                    const a = kE(e, n.remainingPatterns, l.container, l.offset, t),
                        i = a.getOr({ matches: [], position: l }),
                        c = i.position,
                        u = ((e, t, n, o, r, s = !1) => { if (0 === t.start.length && !s) { const t = e.createRng(); return t.setStart(n, o), t.setEnd(n, o), M.some(t) } return Gw(n, o, r).bind((n => xE(e, t, r, n).bind((e => { if (s) { if (e.endContainer === n.container && e.endOffset === n.offset) return M.none(); if (0 === n.offset && e.endContainer.textContent.length === e.endOffset) return M.none() } return M.some(e) })))) })(o, s, c.container, c.offset, t, a.isNone());
                    return u.map((e => { const t = ((e, t) => dE(e, t.startContainer, t.startOffset, t.endContainer, t.endOffset))(r, e); return { matches: i.matches.concat([{ pattern: s, startRng: t, endRng: d }]), position: qw(e.startContainer, e.startOffset) } }))
                }
            }))
        },
        kE = (e, t, n, o, r) => {
            const s = e.dom;
            return Gw(n, o, s.getRoot()).bind((a => {
                const i = s.createRng();
                i.setStart(r, 0), i.setEnd(n, o);
                const l = i.toString();
                for (let n = 0; n < t.length; n++) {
                    const o = t[n];
                    if (!je(l, o.end)) continue;
                    const s = t.slice();
                    s.splice(n, 1);
                    const i = wE(e, r, { pattern: o, remainingPatterns: s, position: a });
                    if (i.isSome()) return i
                }
                return M.none()
            }))
        },
        SE = (e, t, n) => { e.selection.setRng(n), "inline-format" === t.type ? $(t.format, (t => { e.formatter.apply(t) })) : e.execCommand(t.cmd, !1, t.value) },
        _E = (e, t, n) => { const o = e.selection.getRng(); return !1 === o.collapsed ? [] : gE(e, o).bind((r => { const s = Math.max(0, o.startOffset - (n ? 1 : 0)); return kE(e, t, o.startContainer, s, r) })).fold((() => []), (e => e.matches)) },
        EE = (e, t) => {
            if (0 === t.length) return;
            const n = e.dom,
                o = e.selection.getBookmark(),
                r = ((e, t) => {
                    const n = sa("mce_textpattern"),
                        o = G(t, ((t, o) => { const r = vE(e, n + `_end${t.length}`, o.endRng); return t.concat([{...o, endMarker: r }]) }), []);
                    return G(o, ((t, r) => {
                        const s = o.length - t.length - 1,
                            a = CE(r.pattern) ? r.endMarker : vE(e, n + `_start${s}`, r.startRng);
                        return t.concat([{...r, startMarker: a }])
                    }), [])
                })(n, t);
            $(r, (t => {
                const o = n.getParent(t.startMarker.start, n.isBlock),
                    r = e => e === o;
                CE(t.pattern) ? ((e, t, n, o) => {
                    const r = bE(e.dom, n);
                    fE(e.dom, r, o), SE(e, t, r)
                })(e, t.pattern, t.endMarker, r) : ((e, t, n, o, r) => {
                    const s = e.dom,
                        a = bE(s, o),
                        i = bE(s, n);
                    fE(s, i, r), fE(s, a, r);
                    const l = { prefix: n.prefix, start: n.end, end: o.start },
                        d = bE(s, l);
                    SE(e, t, d)
                })(e, t.pattern, t.startMarker, t.endMarker, r), yE(n, t.endMarker, r), yE(n, t.startMarker, r)
            })), e.selection.moveToBookmark(o)
        },
        NE = (e, t) => {
            if (!e.selection.isCollapsed() || !(e => e.inlinePatterns.length > 0 || e.blockPatterns.length > 0)(t)) return !1;
            const n = _E(e, t.inlinePatterns, !1),
                o = ((e, t) => {
                    const n = e.dom,
                        o = e.selection.getRng();
                    return gE(e, o).filter((t => {
                        const o = Ti(e),
                            r = n.is(t, o);
                        return null !== t && r
                    })).bind((e => {
                        const o = e.textContent,
                            r = ((e, t) => { const n = t.replace(dr, " "); return Q(e, (e => 0 === t.indexOf(e.start) || 0 === n.indexOf(e.start))) })(t, o);
                        return r.map((t => Bt.trim(o).length === t.start.length ? [] : [{ pattern: t, range: dE(n.getRoot(), e, 0, e, 0) }]))
                    })).getOr([])
                })(e, t.blockPatterns);
            return (o.length > 0 || n.length > 0) && (e.undoManager.add(), e.undoManager.extra((() => { e.execCommand("mceInsertNewLine") }), (() => {
                e.insertContent(lr), EE(e, n), ((e, t) => {
                    if (0 === t.length) return;
                    const n = e.selection.getBookmark();
                    $(t, (t => ((e, t) => {
                        const n = e.dom,
                            o = t.pattern,
                            r = uE(n.getRoot(), t.range).getOrDie("Unable to resolve path range");
                        return gE(e, r).each((t => { "block-format" === o.type ? ((e, t) => { const n = t.get(e); return p(n) && ie(n).exists((e => we(e, "block"))) })(o.format, e.formatter) && e.undoManager.transact((() => { pE(e.dom, t, o), e.formatter.apply(o.format) })) : "block-command" === o.type && e.undoManager.transact((() => { pE(e.dom, t, o), e.execCommand(o.cmd, !1, o.value) })) })), !0
                    })(e, t))), e.selection.moveToBookmark(n)
                })(e, o);
                const t = e.selection.getRng(),
                    r = Gw(t.startContainer, t.startOffset, e.dom.getRoot());
                e.execCommand("mceInsertNewLine"), r.each((t => {
                    const n = t.container;
                    n.data.charAt(t.offset - 1) === lr && (n.deleteData(t.offset - 1, 1), mE(e.dom, n.parentNode, (t => t === e.dom.getRoot())))
                }))
            })), !0)
        },
        RE = (e, t) => {
            if (t.length > 0) {
                const n = _E(e, t, !0);
                n.length > 0 && e.undoManager.transact((() => { EE(e, n) }))
            }
        },
        AE = (e, t, n) => {
            for (let o = 0; o < e.length; o++)
                if (n(e[o], t)) return !0;
            return !1
        },
        OE = e => {
            const t = [",", ".", ";", ":", "!", "?"],
                n = [32],
                o = () => pi(Xl(e));
            e.on("keydown", (t => {
                var n;
                13 !== t.keyCode || Uu.modifierPressed(t) || NE(e, (n = Xl(e), { inlinePatterns: pi(n), blockPatterns: gi(n) })) && t.preventDefault()
            }), !0), e.on("keyup", (t => { AE(n, t, ((e, t) => e === t.keyCode && !1 === Uu.modifierPressed(t))) && RE(e, o()) })), e.on("keypress", (n => { AE(t, n, ((e, t) => e.charCodeAt(0) === t.charCode)) && Gm.setEditorTimeout(e, (() => { RE(e, o()) })) }))
        },
        TE = e => {
            const t = Bt.each,
                n = Uu.BACKSPACE,
                o = Uu.DELETE,
                r = e.dom,
                s = e.selection,
                a = e.parser,
                i = Nt.browser,
                l = i.isFirefox(),
                d = i.isChromium() || i.isSafari(),
                c = Nt.deviceType.isiPhone() || Nt.deviceType.isiPad(),
                u = Nt.os.isMacOS() || Nt.os.isiOS(),
                m = (t, n) => { try { e.getDoc().execCommand(t, !1, n) } catch (e) {} },
                f = e => e.isDefaultPrevented(),
                g = () => { e.shortcuts.add("meta+a", null, "SelectAll") },
                p = () => {
                    e.inline || r.bind(e.getDoc(), "mousedown mouseup", (t => {
                        let n;
                        if (t.target === e.getDoc().documentElement)
                            if (n = s.getRng(), e.getBody().focus(), "mousedown" === t.type) {
                                if (vr(n.startContainer)) return;
                                s.placeCaretAt(t.clientX, t.clientY)
                            } else s.setRng(n)
                    }))
                },
                h = () => {
                    Range.prototype.getClientRects || e.on("mousedown", (t => {
                        if (!f(t) && "HTML" === t.target.nodeName) {
                            const t = e.getBody();
                            t.blur(), Gm.setEditorTimeout(e, (() => { t.focus() }))
                        }
                    }))
                },
                b = () => {
                    const t = Tl(e);
                    e.on("click", (n => { const o = n.target; /^(IMG|HR)$/.test(o.nodeName) && "false" !== r.getContentEditableParent(o) && (n.preventDefault(), e.selection.select(o), e.nodeChanged()), "A" === o.nodeName && r.hasClass(o, t) && 0 === o.childNodes.length && (n.preventDefault(), s.select(o)) }))
                },
                v = () => { e.on("keydown", (e => { if (!f(e) && e.keyCode === n && s.isCollapsed() && 0 === s.getRng().startOffset) { const t = s.getNode().previousSibling; if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1 } })) },
                y = () => { Sl(e) || e.on("BeforeExecCommand mousedown", (() => { m("StyleWithCSS", !1), m("enableInlineTableEditing", !1), ol(e) || m("enableObjectResizing", !1) })) },
                C = () => { e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}") },
                x = () => { e.inline || e.on("keydown", (() => { document.activeElement === document.body && e.getWin().focus() })) },
                w = () => { e.inline || (e.contentStyles.push("body {min-height: 150px}"), e.on("click", (t => { let n; "HTML" === t.target.nodeName && (n = e.selection.getRng(), e.getBody().focus(), e.selection.setRng(n), e.selection.normalize(), e.nodeChanged()) }))) },
                k = () => { u && e.on("keydown", (t => {!Uu.metaKeyPressed(t) || t.shiftKey || 37 !== t.keyCode && 39 !== t.keyCode || (t.preventDefault(), e.selection.getSel().modify("move", 37 === t.keyCode ? "backward" : "forward", "lineboundary")) })) },
                _ = () => {
                    e.on("click", (e => {
                        let t = e.target;
                        do { if ("A" === t.tagName) return void e.preventDefault() } while (t = t.parentNode)
                    })), e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
                },
                E = () => { e.on("init", (() => { e.dom.bind(e.getBody(), "submit", (e => { e.preventDefault() })) })) },
                N = S;
            return _v(e) ? (d && (p(), b(), E(), g(), c && (x(), w(), _())), l && (h(), y(), C(), k())) : (e.on("keydown", (t => {
                let n, o;
                if (f(t) || t.keyCode !== Uu.BACKSPACE) return;
                n = s.getRng();
                const a = n.startContainer,
                    i = n.startOffset,
                    l = r.getRoot();
                if (o = a, n.collapsed && 0 === i) { for (; o && o.parentNode && o.parentNode.firstChild === o && o.parentNode !== l;) o = o.parentNode; "BLOCKQUOTE" === o.tagName && (e.formatter.toggle("blockquote", null, o), n = r.createRng(), n.setStart(a, 0), n.setEnd(a, 0), s.setRng(n)) }
            })), (() => {
                const t = e => {
                    const t = r.create("body"),
                        n = e.cloneContents();
                    return t.appendChild(n), s.serializer.serialize(t, { format: "html" })
                };
                e.on("keydown", (s => {
                    const a = s.keyCode;
                    let i, l;
                    if (!f(s) && (a === o || a === n)) {
                        if (i = e.selection.isCollapsed(), l = e.getBody(), i && !r.isEmpty(l)) return;
                        if (!i && !(n => {
                                const o = t(n),
                                    s = r.createRng();
                                return s.selectNode(e.getBody()), o === t(s)
                            })(e.selection.getRng())) return;
                        s.preventDefault(), e.setContent(""), l.firstChild && r.isBlock(l.firstChild) ? e.selection.setCursorLocation(l.firstChild, 0) : e.selection.setCursorLocation(l, 0), e.nodeChanged()
                    }
                }))
            })(), Nt.windowsPhone || e.on("keyup focusin mouseup", (e => { Uu.modifierPressed(e) || s.normalize() }), !0), d && (p(), b(), e.on("init", (() => { m("DefaultParagraphSeparator", Ti(e)) })), E(), v(), a.addNodeFilter("br", (e => { let t = e.length; for (; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove() })), c ? (x(), w(), _()) : g()), l && (e.on("keydown", (t => {
                if (!f(t) && t.keyCode === n) {
                    if (!e.getBody().getElementsByTagName("hr").length) return;
                    if (s.isCollapsed() && 0 === s.getRng().startOffset) {
                        const e = s.getNode(),
                            n = e.previousSibling;
                        if ("HR" === e.nodeName) return r.remove(e), void t.preventDefault();
                        n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (r.remove(n), t.preventDefault())
                    }
                }
            })), h(), (() => {
                const n = () => {
                        const n = r.getAttribs(s.getStart().cloneNode(!1));
                        return () => {
                            const o = s.getStart();
                            o !== e.getBody() && (r.setAttrib(o, "style", null), t(n, (e => { o.setAttributeNode(e.cloneNode(!0)) })))
                        }
                    },
                    o = () => !s.isCollapsed() && r.getParent(s.getStart(), r.isBlock) !== r.getParent(s.getEnd(), r.isBlock);
                e.on("keypress", (t => { let r; if (!f(t) && (8 === t.keyCode || 46 === t.keyCode) && o()) return r = n(), e.getDoc().execCommand("delete", !1, null), r(), t.preventDefault(), !1 })), r.bind(e.getDoc(), "cut", (t => { let r;!f(t) && o() && (r = n(), Gm.setEditorTimeout(e, (() => { r() }))) }))
            })(), y(), e.on("SetContent ExecCommand", (e => {
                "setcontent" !== e.type && "mceInsertLink" !== e.command || t(r.select("a"), (e => {
                    let t = e.parentNode;
                    const n = r.getRoot();
                    if (t.lastChild === e) {
                        for (; t && !r.isBlock(t);) {
                            if (t.parentNode.lastChild !== t || t === n) return;
                            t = t.parentNode
                        }
                        r.add(t, "br", { "data-mce-bogus": 1 })
                    }
                }))
            })), C(), k(), v())), { refreshContentEditable: N, isHidden: () => { if (!l || e.removed) return !1; const t = e.selection.getSel(); return !t || !t.rangeCount || 0 === t.rangeCount } }
        },
        BE = Is.DOM,
        DE = e => e.inline ? e.getElement().nodeName.toLowerCase() : void 0,
        LE = e => ve(e, (e => !1 === v(e))),
        PE = e => {
            const t = e.options.get,
                n = e.editorUpload.blobCache;
            return LE({ allow_conditional_comments: t("allow_conditional_comments"), allow_html_data_urls: t("allow_html_data_urls"), allow_svg_data_urls: t("allow_svg_data_urls"), allow_html_in_named_anchor: t("allow_html_in_named_anchor"), allow_script_urls: t("allow_script_urls"), allow_unsafe_link_target: t("allow_unsafe_link_target"), convert_fonts_to_spans: t("convert_fonts_to_spans"), fix_list_elements: t("fix_list_elements"), font_size_legacy_values: t("font_size_legacy_values"), forced_root_block: t("forced_root_block"), forced_root_block_attrs: t("forced_root_block_attrs"), preserve_cdata: t("preserve_cdata"), remove_trailing_brs: t("remove_trailing_brs"), inline_styles: t("inline_styles"), root_name: DE(e), validate: !0, blob_cache: n, document: e.getDoc() })
        },
        ME = e => { const t = e.options.get; return LE({ custom_elements: t("custom_elements"), extended_valid_elements: t("extended_valid_elements"), invalid_elements: t("invalid_elements"), invalid_styles: t("invalid_styles"), schema: t("schema"), valid_children: t("valid_children"), valid_classes: t("valid_classes"), valid_elements: t("valid_elements"), valid_styles: t("valid_styles"), verify_html: t("verify_html") }) },
        IE = e => e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader,
        FE = e => {
            const t = IE(e),
                n = el(e),
                o = e.contentCSS,
                r = () => { t.unloadAll(o), e.inline || e.ui.styleSheetLoader.unloadAll(n) },
                s = () => { e.removed ? r() : e.on("remove", r) };
            if (e.contentStyles.length > 0) {
                let t = "";
                Bt.each(e.contentStyles, (e => { t += e + "\r\n" })), e.dom.addStyle(t)
            }
            const a = Promise.all(((e, t, n) => { const o = [IE(e).loadAll(t)]; return e.inline ? o : o.concat([e.ui.styleSheetLoader.loadAll(n)]) })(e, o, n)).then(s).catch(s),
                i = Zi(e);
            return i && ((e, t) => {
                const n = mn(e.getBody()),
                    o = Mn(Pn(n)),
                    r = cn("style");
                $t(r, "type", "text/css"), Jn(r, un(t)), Jn(o, r), e.on("remove", (() => { to(r) }))
            })(e, i), a
        },
        UE = e => {
            !0 !== e.removed && ((e => { _v(e) || e.load({ initial: !0, format: "html" }), e.startContent = e.getContent({ format: "raw" }) })(e), (e => {
                e.bindPendingEventDelegates(), e.initialized = !0, (e => { e.dispatch("Init") })(e), e.focus(!0), (e => {
                    const t = e.dom.getRoot();
                    e.inline || wu(e) && e.selection.getStart(!0) !== t || uc(t).each((t => {
                        const n = t.getNode(),
                            o = So(n) ? uc(n).getOr(t) : t;
                        e.selection.setRng(o.toRange())
                    }))
                })(e), e.nodeChanged({ initial: !0 });
                const t = Ll(e);
                x(t) && t.call(e, e), (e => {
                    const t = Ml(e);
                    t && Gm.setEditorTimeout(e, (() => {
                        let n;
                        n = !0 === t ? e : e.editorManager.get(t), n.destroyed || n.focus()
                    }), 100)
                })(e)
            })(e))
        },
        zE = e => {
            const t = e.getElement();
            let n = e.getDoc();
            e.inline && (BE.addClass(t, "mce-content-body"), e.contentDocument = n = document, e.contentWindow = window, e.bodyElement = t, e.contentAreaContainer = t);
            const o = e.getBody();
            o.disabled = !0, e.readonly = Sl(e), e.readonly || (e.inline && "static" === BE.getStyle(o, "position", !0) && (o.style.position = "relative"), o.contentEditable = "true"), o.disabled = !1, e.editorUpload = gy(e), e.schema = vs(ME(e)), e.dom = Is(n, { keep_values: !0, url_converter: e.convertURL, url_converter_scope: e, update_styles: !0, root_element: e.inline ? e.getBody() : null, collect: () => e.inline, schema: e.schema, contentCssCors: Wi(e), referrerPolicy: Ki(e), onSetAttrib: t => { e.dispatch("SetAttrib", t) } }), e.parser = (e => {
                const t = Wb(PE(e), e.schema);
                return t.addAttributeFilter("src,href,style,tabindex", ((t, n) => {
                    let o, r, s = t.length;
                    const a = e.dom,
                        i = "data-mce-" + n;
                    for (; s--;)
                        if (o = t[s], r = o.attr(n), r && !o.attr(i)) { if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue; "style" === n ? (r = a.serializeStyle(a.parseStyle(r), o.name), r.length || (r = null), o.attr(i, r), o.attr(n, r)) : "tabindex" === n ? (o.attr(i, r), o.attr(n, null)) : o.attr(i, e.convertURL(r, n, o.name)) }
                })), t.addNodeFilter("script", (e => {
                    let t = e.length;
                    for (; t--;) {
                        const n = e[t],
                            o = n.attr("type") || "no/type";
                        0 !== o.indexOf("mce-") && n.attr("type", "mce-" + o)
                    }
                })), e.options.get("preserve_cdata") && t.addNodeFilter("#cdata", (t => {
                    let n = t.length;
                    for (; n--;) {
                        const o = t[n];
                        o.type = 8, o.name = "#comment", o.value = "[CDATA[" + e.dom.encode(o.value) + "]]"
                    }
                })), t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", (t => {
                    let n = t.length;
                    const o = e.schema.getNonEmptyElements();
                    for (; n--;) {
                        const e = t[n];
                        e.isEmpty(o) && 0 === e.getAll("br").length && e.append(new yf("br", 1))
                    }
                })), t
            })(e), e.serializer = Mv((e => { const t = e.options.get; return {...PE(e), ...ME(e), ...LE({ url_converter: t("url_converter"), url_converter_scope: t("url_converter_scope"), element_format: t("element_format"), entities: t("entities"), entity_encoding: t("entity_encoding"), indent: t("indent"), indent_after: t("indent_after"), indent_before: t("indent_before") }) } })(e), e), e.selection = Dv(e.dom, e.getWin(), e.serializer, e), e.annotator = Ou(e), e.formatter = Sy(e), e.undoManager = Ey(e), e._nodeChangeDispatcher = new l_(e), e._selectionOverrides = iE(e), (e => {
                const t = Ws(),
                    n = zs(!1),
                    o = Gs((t => { e.dispatch("longpress", {...t, type: "longpress" }), n.set(!0) }), 400);
                e.on("touchstart", (e => {
                    Xx(e).each((r => {
                        o.cancel();
                        const s = { x: r.clientX, y: r.clientY, target: e.target };
                        o.throttle(e), n.set(!1), t.set(s)
                    }))
                }), !0), e.on("touchmove", (r => {
                    o.cancel(), Xx(r).each((o => {
                        t.on((r => {
                            ((e, t) => {
                                const n = Math.abs(e.clientX - t.x),
                                    o = Math.abs(e.clientY - t.y);
                                return n > 5 || o > 5
                            })(o, r) && (t.clear(), n.set(!1), e.dispatch("longpresscancel"))
                        }))
                    }))
                }), !0), e.on("touchend touchcancel", (r => { o.cancel(), "touchcancel" !== r.type && t.get().filter((e => e.target.isEqualNode(r.target))).each((() => { n.get() ? r.preventDefault() : e.dispatch("tap", {...r, type: "tap" }) })) }), !0)
            })(e), (e => {
                (e => { e.on("click", (t => { e.dom.getParent(t.target, "details") && t.preventDefault() })) })(e), (e => {
                    e.parser.addNodeFilter("details", (e => { $(e, (e => { e.attr("data-mce-open", e.attr("open")), e.attr("open", "open") })) })), e.serializer.addNodeFilter("details", (e => {
                        $(e, (e => {
                            const t = e.attr("data-mce-open");
                            e.attr("open", m(t) ? t : null), e.attr("data-mce-open", null)
                        }))
                    }))
                })(e)
            })(e), (e => {
                const t = "contenteditable",
                    n = " " + Bt.trim(Jl(e)) + " ",
                    o = " " + Bt.trim(Ql(e)) + " ",
                    r = tw(n),
                    s = tw(o),
                    a = Zl(e);
                a.length > 0 && e.on("BeforeSetContent", (t => {
                    ((e, t, n) => {
                        let o = t.length,
                            r = n.content;
                        if ("raw" !== n.format) {
                            for (; o--;) r = r.replace(t[o], nw(e, r, Ql(e)));
                            n.content = r
                        }
                    })(e, a, t)
                })), e.parser.addAttributeFilter("class", (e => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        r(o) ? o.attr(t, "true") : s(o) && o.attr(t, "false")
                    }
                })), e.serializer.addAttributeFilter(t, (e => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        (r(o) || s(o)) && (a.length > 0 && o.attr("data-mce-content") ? (o.name = "#text", o.type = 3, o.raw = !0, o.value = o.attr("data-mce-content")) : o.attr(t, null))
                    }
                }))
            })(e), _v(e) || ((e => {
                e.on("click", (t => {
                    t.detail >= 3 && (e => {
                        const t = e.selection.getRng(),
                            n = Ua.fromRangeStart(t),
                            o = Ua.fromRangeEnd(t);
                        if (Ua.isElementPosition(n)) {
                            const e = n.container();
                            $_(e) && uc(e).each((e => t.setStart(e.container(), e.offset())))
                        }
                        if (Ua.isElementPosition(o)) {
                            const e = n.container();
                            $_(e) && mc(e).each((e => t.setEnd(e.container(), e.offset())))
                        }
                        e.selection.setRng(bp(t))
                    })(e)
                }))
            })(e), (e => { OE(e) })(e));
            const r = i_(e);
            Yx(e, r), (e => { e.on("NodeChange", O(ew, e)) })(e), (e => {
                const t = e.dom,
                    n = Ti(e),
                    o = sl(e),
                    r = (s, a) => {
                        if ((e => { if (Ay(e)) { const t = e.keyCode; return !Oy(e) && (Uu.metaKeyPressed(e) || e.altKey || t >= 112 && t <= 123 || j(Ny, t)) } return !1 })(s)) return;
                        const i = e.getBody(),
                            l = !(e => Ay(e) && !(Oy(e) || "keyup" === e.type && 229 === e.keyCode))(s) && ((e, t, n) => { if (qr(mn(t), !1)) { const o = t.firstElementChild; return !o || !e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && n === o.nodeName.toLowerCase() } return !1 })(t, i, n);
                        ("" !== t.getAttrib(i, Ry) !== l || a) && (t.setAttrib(i, Ry, l ? o : null), t.setAttrib(i, "aria-placeholder", l ? o : null), ((e, t) => { e.dispatch("PlaceholderToggle", { state: t }) })(e, l), e.on(l ? "keydown" : "keyup", r), e.off(l ? "keyup" : "keydown", r))
                    };
                o && e.on("init", (t => { r(t, !0), e.on("change SetContent ExecCommand", r), e.on("paste", (t => Gm.setEditorTimeout(e, (() => r(t))))) }))
            })(e), H_(e);
            const s = (e => {
                const t = e;
                return (e => xe(e.plugins, "rtc").bind((e => M.from(e.setup))))(e).fold((() => (t.rtcInstance = Sv(e), M.none())), (e => (t.rtcInstance = (() => {
                    const e = N(null),
                        t = N("");
                    return { init: { bindEvents: S }, undoManager: { beforeChange: S, add: e, undo: e, redo: e, clear: S, reset: S, hasUndo: L, hasRedo: L, transact: e, ignore: S, extra: S }, formatter: { match: L, matchAll: N([]), matchNode: N(void 0), canApply: L, closest: t, apply: S, remove: S, toggle: S, formatChanged: N({ unbind: S }) }, editor: { getContent: t, setContent: N({ content: "", html: "" }), insertContent: N(""), addVisual: S }, selection: { getContent: t }, autocompleter: { addDecoration: S, removeDecoration: S }, raw: { getModel: N(M.none()) } }
                })(), M.some((() => e().then((e => (t.rtcInstance = (e => {
                    const t = e => f(e) ? e : {},
                        { init: n, undoManager: o, formatter: r, editor: s, selection: a, autocompleter: i, raw: l } = e;
                    return { init: { bindEvents: n.bindEvents }, undoManager: { beforeChange: o.beforeChange, add: o.add, undo: o.undo, redo: o.redo, clear: o.clear, reset: o.reset, hasUndo: o.hasUndo, hasRedo: o.hasRedo, transact: (e, t, n) => o.transact(n), ignore: (e, t) => o.ignore(t), extra: (e, t, n, r) => o.extra(n, r) }, formatter: { match: (e, n, o, s) => r.match(e, t(n), s), matchAll: r.matchAll, matchNode: r.matchNode, canApply: e => r.canApply(e), closest: e => r.closest(e), apply: (e, n, o) => r.apply(e, t(n)), remove: (e, n, o, s) => r.remove(e, t(n)), toggle: (e, n, o) => r.toggle(e, t(n)), formatChanged: (e, t, n, o, s) => r.formatChanged(t, n, o, s) }, editor: { getContent: e => s.getContent(e), setContent: (e, t) => ({ content: s.setContent(e, t), html: "" }), insertContent: (e, t) => (s.insertContent(e), ""), addVisual: s.addVisual }, selection: { getContent: (e, t) => a.getContent(t) }, autocompleter: { addDecoration: i.addDecoration, removeDecoration: i.removeDecoration }, raw: { getModel: () => M.some(l.getRawModel()) } }
                })(e), e.rtc.isRemote))))))))
            })(e);
            (e => {
                const t = e.getDoc(),
                    n = e.getBody();
                (e => { e.dispatch("PreInit") })(e), Il(e) || (t.body.spellcheck = !1, BE.setAttrib(n, "spellcheck", "false")), e.quirks = TE(e), (e => { e.dispatch("PostRender") })(e);
                const o = tl(e);
                void 0 !== o && (n.dir = o);
                const r = Fl(e);
                r && e.on("BeforeSetContent", (e => { Bt.each(r, (t => { e.content = e.content.replace(t, (e => "\x3c!--mce:protected " + escape(e) + "--\x3e")) })) })), e.on("SetContent", (() => { e.addVisual(e.getBody()) })), e.on("compositionstart compositionend", (t => { e.composing = "compositionstart" === t.type }))
            })(e), s.fold((() => { FE(e).then((() => UE(e))) }), (t => { e.setProgressState(!0), FE(e).then((() => { t().then((t => { e.setProgressState(!1), UE(e), Rv(e) }), (t => { e.notificationManager.open({ type: "error", text: String(t) }), UE(e), Rv(e) })) })) }))
        },
        jE = (e, t) => {
            if (e.inline || (e.getElement().style.visibility = e.orgVisibility), t || e.inline) zE(e);
            else {
                const t = e.iframeElement,
                    o = (n = mn(t), so(n, "load", ly, (() => { o.unbind(), e.contentDocument = t.contentDocument, zE(e) })));
                t.srcdoc = e.iframeHTML
            }
            var n
        },
        VE = Is.DOM,
        HE = Is.DOM,
        $E = e => ({ editorContainer: e, iframeContainer: e, api: {} }),
        qE = e => {
            const t = e.getElement();
            return e.orgDisplay = t.style.display, m(ll(e)) ? (e => e.theme.renderUI())(e) : x(ll(e)) ? (e => {
                const t = e.getElement(),
                    n = ll(e)(e, t);
                return n.editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || e.id + "_parent"), n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || e.id + "_iframecontainer"), n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight, n
            })(e) : (e => { const t = e.getElement(); return e.inline ? $E(null) : (e => { const t = HE.create("div"); return HE.insertAfter(t, e), $E(t) })(t) })(e)
        },
        WE = e => {
            e.dispatch("ScriptsLoaded"), (e => {
                const t = Bt.trim(zi(e)),
                    n = e.ui.registry.getAll().icons,
                    o = {...$v.get("default").icons, ...$v.get(t).icons };
                fe(o, ((t, o) => { we(n, o) || e.ui.registry.addIcon(o, t) }))
            })(e), (e => {
                const t = ll(e);
                if (m(t)) {
                    const n = ey.get(t);
                    e.theme = n(e, ey.urls[t]) || {}, x(e.theme.init) && e.theme.init(e, ey.urls[t] || e.documentBaseUrl.replace(/\/$/, ""))
                } else e.theme = {}
            })(e), (e => {
                const t = cl(e),
                    n = qv.get(t);
                e.model = n(e, qv.urls[t])
            })(e), (e => {
                const t = [];
                $(El(e), (n => {
                    ((e, t, n) => {
                        const o = Zv.get(n),
                            r = Zv.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
                        if (n = Bt.trim(n), o && -1 === Bt.inArray(t, n)) {
                            if (e.plugins[n]) return;
                            try {
                                const s = o(e, r) || {};
                                e.plugins[n] = s, x(s.init) && (s.init(e, r), t.push(n))
                            } catch (t) {
                                ((e, t, n) => {
                                    const o = $s.translate(["Failed to initialize plugin: {0}", t]);
                                    Du(e, "PluginLoadError", { message: o }), ay(o, n), oy(e, o)
                                })(e, n, t)
                            }
                        }
                    })(e, t, (e => e.replace(/^\-/, ""))(n))
                }))
            })(e);
            const t = qE(e);
            ((e, t) => {
                const n = { show: M.from(t.show).getOr(S), hide: M.from(t.hide).getOr(S), isEnabled: M.from(t.isEnabled).getOr(P), setEnabled: n => { e.mode.isReadOnly() || M.from(t.setEnabled).each((e => e(n))) } };
                e.ui = {...e.ui, ...n }
            })(e, M.from(t.api).getOr({}));
            const n = { editorContainer: t.editorContainer, iframeContainer: t.iframeContainer };
            return e.editorContainer = n.editorContainer ? n.editorContainer : null, (e => { e.contentCSS = e.contentCSS.concat((e => iy(e, Ji(e)))(e), (e => iy(e, el(e)))(e)) })(e), e.inline ? jE(e) : ((e, t) => {
                ((e, t) => {
                    const n = e.translate("Rich Text Area"),
                        o = Kt(mn(e.getElement()), "tabindex").bind(Ge),
                        r = ((e, t, n, o) => { const r = cn("iframe"); return o.each((e => $t(r, "tabindex", e))), qt(r, n), qt(r, { id: e + "_ifr", frameBorder: "0", allowTransparency: "true", title: t }), nn(r, "tox-edit-area__iframe"), r })(e.id, n, Si(e), o).dom;
                    r.onload = () => { r.onload = null, e.dispatch("load") }, e.contentAreaContainer = t.iframeContainer, e.iframeElement = r, e.iframeHTML = (e => {
                        let t = _i(e) + "<html><head>";
                        Ei(e) !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
                        const n = Ni(e),
                            o = Ri(e),
                            r = e.translate(Bl(e));
                        return Ai(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + Ai(e) + '" />'), t += `</head><body id="${n}" class="mce-content-body ${o}" data-id="${e.id}" aria-label="${r}"><br></body></html>`, t
                    })(e), VE.add(t.iframeContainer, r)
                })(e, t), t.editorContainer && (VE.get(t.editorContainer).style.display = e.orgDisplay, e.hidden = VE.isHidden(t.editorContainer)), e.getElement().style.display = "none", VE.setAttrib(e.id, "aria-hidden", "true"), jE(e)
            })(e, n)
        },
        KE = Is.DOM,
        GE = e => "-" === e.charAt(0),
        YE = (e, t, n) => M.from(t).filter((e => We(e) && !$v.has(e))).map((t => ({ url: `${e.editorManager.baseURL}/icons/${t}/icons${n}.js`, name: M.some(t) }))),
        XE = (e, t) => {
            const n = Us.ScriptLoader,
                o = () => {!e.removed && (e => { const t = ll(e); return !m(t) || C(ey.get(t)) })(e) && (e => { const t = cl(e); return C(qv.get(t)) })(e) && WE(e) };
            ((e, t) => {
                const n = ll(e);
                if (m(n) && !GE(n) && !we(ey.urls, n)) {
                    const o = dl(e),
                        r = o ? e.documentBaseURI.toAbsolute(o) : `themes/${n}/theme${t}.js`;
                    ey.load(n, r).catch((() => {
                        ((e, t, n) => { ry(e, "ThemeLoadError", sy("theme", t, n)) })(e, r, n)
                    }))
                }
            })(e, t), ((e, t) => {
                const n = cl(e);
                if ("plugin" !== n && !we(qv.urls, n)) {
                    const o = ul(e),
                        r = m(o) ? e.documentBaseURI.toAbsolute(o) : `models/${n}/model${t}.js`;
                    qv.load(n, r).catch((() => {
                        ((e, t, n) => { ry(e, "ModelLoadError", sy("model", t, n)) })(e, r, n)
                    }))
                }
            })(e, t), ((e, t) => {
                const n = Gi(t),
                    o = Yi(t);
                if (!1 === $s.hasCode(n) && "en" !== n) {
                    const r = We(o) ? o : `${t.editorManager.baseURL}/langs/${n}.js`;
                    e.add(r).catch((() => {
                        ((e, t, n) => { ry(e, "LanguageLoadError", sy("language", t, n)) })(t, r, n)
                    }))
                }
            })(n, e), ((e, t, n) => {
                const o = YE(t, "default", n),
                    r = (e => M.from(ji(e)).filter(We).map((e => ({ url: e, name: M.none() }))))(t).orThunk((() => YE(t, zi(t), "")));
                $((e => {
                    const t = [],
                        n = e => { t.push(e) };
                    for (let t = 0; t < e.length; t++) e[t].each(n);
                    return t
                })([o, r]), (n => {
                    e.add(n.url).catch((() => {
                        ((e, t, n) => { ry(e, "IconsLoadError", sy("icons", t, n)) })(t, n.url, n.name.getOrUndefined())
                    }))
                }))
            })(n, e, t), ((e, t) => {
                const n = (t, n) => {
                    Zv.load(t, n).catch((() => {
                        ((e, t, n) => { ry(e, "PluginLoadError", sy("plugin", t, n)) })(e, n, t)
                    }))
                };
                fe(Nl(e), ((t, o) => { n(o, t), e.options.set("plugins", El(e).concat(o)) })), $(El(e), (e => {!(e = Bt.trim(e)) || Zv.urls[e] || GE(e) || n(e, `plugins/${e}/plugin${t}.js`) }))
            })(e, t), n.loadQueue().then(o, o)
        },
        QE = Ct().deviceType,
        JE = QE.isPhone(),
        ZE = QE.isTablet(),
        eN = e => {
            if (y(e)) return []; {
                const t = p(e) ? e : e.split(/[ ,]/),
                    n = H(t, He);
                return K(n, We)
            }
        },
        tN = (e, t) => {
            const n = ((t, n) => {
                const o = {},
                    r = {};
                return be(t, ((t, n) => j(e, n)), he(o), he(r)), { t: o, f: r }
            })(t);
            return o = n.t, r = n.f, { sections: N(o), options: N(r) };
            var o, r
        },
        nN = (e, t) => we(e.sections(), t),
        oN = (e, t) => ({ table_grid: !1, object_resizing: !1, resize: !1, toolbar_mode: xe(e, "toolbar_mode").getOr("scrolling"), toolbar_sticky: !1, ...t ? { menubar: !1 } : {} }),
        rN = (e, t) => { var n; const o = null !== (n = t.external_plugins) && void 0 !== n ? n : {}; return e && e.external_plugins ? Bt.extend({}, e.external_plugins, o) : o },
        sN = (e, t, n, o, r) => {
            var s;
            const a = e ? { mobile: oN(null !== (s = r.mobile) && void 0 !== s ? s : {}, t) } : {},
                i = tN(["mobile"], gk(a, r)),
                l = Bt.extend(n, o, i.options(), ((e, t) => e && nN(t, "mobile"))(e, i) ? ((e, t, n = {}) => {
                    const o = e.sections(),
                        r = xe(o, t).getOr({});
                    return Bt.extend({}, n, r)
                })(i, "mobile") : {}, { external_plugins: rN(o, i.options()) });
            return ((e, t, n, o) => {
                const r = eN(n.forced_plugins),
                    s = eN(o.plugins),
                    a = ((e, t) => nN(e, t) ? e.sections()[t] : {})(t, "mobile"),
                    i = ((e, t, n, o) => e && nN(t, "mobile") ? o : n)(e, t, s, a.plugins ? eN(a.plugins) : s),
                    l = ((e, t) => [].concat(eN(e)).concat(eN(t)))(r, i);
                return Bt.extend(o, { forced_plugins: r, plugins: l })
            })(e, i, o, l)
        },
        aN = e => {
            (e => {
                const t = t => () => { $("left,center,right,justify".split(","), (n => { t !== n && e.formatter.remove("align" + n) })), "none" !== t && ((t, n) => { e.formatter.toggle(t, void 0), e.nodeChanged() })("align" + t) };
                e.editorCommands.addCommands({ JustifyLeft: t("left"), JustifyCenter: t("center"), JustifyRight: t("right"), JustifyFull: t("justify"), JustifyNone: t("none") })
            })(e), (e => {
                const t = t => () => {
                    const n = e.selection,
                        o = n.isCollapsed() ? [e.dom.getParent(n.getNode(), e.dom.isBlock)] : n.getSelectedBlocks();
                    return V(o, (n => C(e.formatter.matchNode(n, t))))
                };
                e.editorCommands.addCommands({ JustifyLeft: t("alignleft"), JustifyCenter: t("aligncenter"), JustifyRight: t("alignright"), JustifyFull: t("alignjustify") }, "state")
            })(e)
        },
        iN = (e, t) => {
            const n = e.selection,
                o = e.dom;
            return /^ | $/.test(t) ? ((e, t, n) => { const o = mn(e.getRoot()); return n = bg(o, Ua.fromRangeStart(t)) ? n.replace(/^ /, "&nbsp;") : n.replace(/^&nbsp;/, " "), vg(o, Ua.fromRangeEnd(t)) ? n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : n.replace(/&nbsp;(<br( \/)?>)?$/, " ") })(o, n.getRng(), t) : t
        },
        lN = (e, t) => {
            const { content: n, details: o } = (e => { if ("string" != typeof e) { const t = Bt.extend({ paste: e.paste, data: { paste: e.paste } }, e); return { content: e.content, details: t } } return { content: e, details: {} } })(t);
            Xb(e, { content: iN(e, n), format: "html", set: !1, selection: !0, paste: o.paste }).each((t => {
                const n = ((e, t, n) => Ev(e).editor.insertContent(t, n))(e, t.content, o);
                Qb(e, n, t), e.addVisual()
            }))
        },
        dN = { "font-size": "size", "font-family": "face" },
        cN = e => (t, n) => M.from(n).map(mn).filter(Ut).bind((n => ((e, t, n) => Ap(mn(n), (t => (t => Wn(t, e).orThunk((() => "font" === Mt(t) ? xe(dN, e).bind((e => Kt(t, e))) : M.none())))(t)), (e => bn(mn(t), e))))(e, t, n.dom).or(((e, t) => M.from(Is.DOM.getStyle(t, e, !0)))(e, n.dom)))).getOr(""),
        uN = cN("font-size"),
        mN = _((e => e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")), cN("font-family")),
        fN = e => uc(e.getBody()).map((e => { const t = e.container(); return No(t) ? t.parentNode : t })),
        gN = (e, t) => ((e, t) => (e => M.from(e.selection.getRng()).bind((t => { const n = e.getBody(); return t.startContainer === n && 0 === t.startOffset ? M.none() : M.from(e.selection.getStart(!0)) })))(e).orThunk(O(fN, e)).map(mn).filter(Ut).bind(t))(e, E(M.some, t)),
        pN = (e, t) => {
            if (/^[0-9.]+$/.test(t)) {
                const n = parseInt(t, 10);
                if (n >= 1 && n <= 7) {
                    const o = (e => Bt.explode(e.options.get("font_size_style_values")))(e),
                        r = (e => Bt.explode(e.options.get("font_size_classes")))(e);
                    return r ? r[n - 1] || t : o[n - 1] || t
                }
                return t
            }
            return t
        },
        hN = e => { const t = e.split(/\s*,\s*/); return H(t, (e => -1 === e.indexOf(" ") || ze(e, '"') || ze(e, "'") ? e : `'${e}'`)).join(",") },
        bN = e => {
            aN(e), (e => {
                e.editorCommands.addCommands({
                    "Cut,Copy,Paste": t => {
                        const n = e.getDoc();
                        let o;
                        try { n.execCommand(t) } catch (e) { o = !0 }
                        if ("paste" !== t || n.queryCommandEnabled(t) || (o = !0), o || !n.queryCommandSupported(t)) {
                            let t = e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                            (Nt.os.isMacOS() || Nt.os.isiOS()) && (t = t.replace(/Ctrl\+/g, "\u2318+")), e.notificationManager.open({ text: t, type: "error" })
                        }
                    }
                })
            })(e), (e => { e.editorCommands.addCommands({ mceAddUndoLevel: () => { e.undoManager.add() }, mceEndUndoLevel: () => { e.undoManager.add() }, Undo: () => { e.undoManager.undo() }, Redo: () => { e.undoManager.redo() } }) })(e), (e => {
                e.editorCommands.addCommands({
                    mceSelectNodeDepth: (t, n, o) => {
                        let r = 0;
                        e.dom.getParent(e.selection.getNode(), (t => { if (1 === t.nodeType && r++ === o) return e.selection.select(t), !1 }), e.getBody())
                    },
                    mceSelectNode: (t, n, o) => { e.selection.select(o) },
                    selectAll: () => {
                        const t = e.dom.getParent(e.selection.getStart(), Po);
                        if (t) {
                            const n = e.dom.createRng();
                            n.selectNodeContents(t), e.selection.setRng(n)
                        }
                    }
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    mceCleanup: () => {
                        const t = e.selection.getBookmark();
                        e.setContent(e.getContent()), e.selection.moveToBookmark(t)
                    },
                    insertImage: (t, n, o) => { lN(e, e.dom.createHTML("img", { src: o })) },
                    insertHorizontalRule: () => { e.execCommand("mceInsertContent", !1, "<hr>") },
                    insertText: (t, n, o) => { lN(e, e.dom.encode(o)) },
                    insertHTML: (t, n, o) => { lN(e, o) },
                    mceInsertContent: (t, n, o) => { lN(e, o) },
                    mceSetContent: (t, n, o) => { e.setContent(o) },
                    mceReplaceContent: (t, n, o) => { e.execCommand("mceInsertContent", !1, o.replace(/\{\$selection\}/g, e.selection.getContent({ format: "text" }))) },
                    mceNewDocument: () => { e.setContent("") }
                })
            })(e), (e => {
                const t = (t, n, o) => {
                    const r = m(o) ? { href: o } : o,
                        s = e.dom.getParent(e.selection.getNode(), "a");
                    f(r) && m(r.href) && (r.href = r.href.replace(/ /g, "%20"), s && r.href || e.formatter.remove("link"), r.href && e.formatter.apply("link", r, s))
                };
                e.editorCommands.addCommands({
                    unlink: () => {
                        if (e.selection.isCollapsed()) {
                            const t = e.dom.getParent(e.selection.getStart(), "a");
                            t && e.dom.remove(t, !0)
                        } else e.formatter.remove("link")
                    },
                    mceInsertLink: t,
                    createLink: t
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    Indent: () => {
                        (e => { qx(e, "indent") })(e)
                    },
                    Outdent: () => { Wx(e) }
                }), e.editorCommands.addCommands({ Outdent: () => Vx(e) }, "state")
            })(e), (e => { e.editorCommands.addCommands({ insertParagraph: () => { XS(e) }, mceInsertNewLine: (t, n, o) => { XS(e, o) }, InsertLineBreak: (t, n, o) => { FS(e, o) } }) })(e), (e => {
                (e => {
                    e.editorCommands.addCommands({
                        "InsertUnorderedList,InsertOrderedList": t => {
                            e.getDoc().execCommand(t);
                            const n = e.dom.getParent(e.selection.getNode(), "ol,ul");
                            if (n) {
                                const t = n.parentNode;
                                if (/^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName)) {
                                    const o = e.selection.getBookmark();
                                    e.dom.split(t, n), e.selection.moveToBookmark(o)
                                }
                            }
                        }
                    })
                })(e), (e => { e.editorCommands.addCommands({ "InsertUnorderedList,InsertOrderedList": t => { const n = e.dom.getParent(e.selection.getNode(), "ul,ol"); return n && ("insertunorderedlist" === t && "UL" === n.tagName || "insertorderedlist" === t && "OL" === n.tagName) } }, "state") })(e)
            })(e), (e => {
                (e => {
                    const t = (t, n) => { e.formatter.toggle(t, n), e.nodeChanged() };
                    e.editorCommands.addCommands({
                        "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": e => { t(e) },
                        "ForeColor,HiliteColor": (e, n, o) => { t(e, { value: o }) },
                        BackColor: (e, n, o) => { t("hilitecolor", { value: o }) },
                        FontName: (t, n, o) => {
                            ((e, t) => {
                                const n = pN(e, t);
                                e.formatter.toggle("fontname", { value: hN(n) }), e.nodeChanged()
                            })(e, o)
                        },
                        FontSize: (t, n, o) => {
                            ((e, t) => { e.formatter.toggle("fontsize", { value: pN(e, t) }), e.nodeChanged() })(e, o)
                        },
                        LineHeight: (t, n, o) => {
                            ((e, t) => { e.formatter.toggle("lineheight", { value: String(t) }), e.nodeChanged() })(e, o)
                        },
                        Lang: (e, n, o) => { t(e, { value: o.code, customValue: o.customCode }) },
                        RemoveFormat: t => { e.formatter.remove(t) },
                        mceBlockQuote: () => { t("blockquote") },
                        FormatBlock: (e, n, o) => { t(m(o) ? o : "p") },
                        mceToggleFormat: (e, n, o) => { t(o) }
                    })
                })(e), (e => {
                    const t = t => e.formatter.match(t);
                    e.editorCommands.addCommands({ "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": e => t(e), mceBlockQuote: () => t("blockquote") }, "state"), e.editorCommands.addQueryValueHandler("FontName", (() => (e => gN(e, (t => mN(e.getBody(), t.dom))).getOr(""))(e))), e.editorCommands.addQueryValueHandler("FontSize", (() => (e => gN(e, (t => uN(e.getBody(), t.dom))).getOr(""))(e))), e.editorCommands.addQueryValueHandler("LineHeight", (() => (e => gN(e, (t => {
                        const n = mn(e.getBody()),
                            o = Ap(t, (e => Wn(e, "line-height")), O(bn, n));
                        return o.getOrThunk((() => {
                            const e = parseFloat($n(t, "line-height")),
                                n = parseFloat($n(t, "font-size"));
                            return String(e / n)
                        }))
                    })).getOr(""))(e)))
                })(e)
            })(e), (e => {
                e.editorCommands.addCommands({
                    mceRemoveNode: (t, n, o) => {
                        const r = null != o ? o : e.selection.getNode();
                        if (r !== e.getBody()) {
                            const t = e.selection.getBookmark();
                            e.dom.remove(r, !0), e.selection.moveToBookmark(t)
                        }
                    },
                    mcePrint: () => { e.getWin().print() },
                    mceFocus: (t, n, o) => {
                        ((e, t) => {
                            e.removed || (t ? of(e) : (e => {
                                const t = e.selection,
                                    n = e.getBody();
                                let o = t.getRng();
                                e.quirks.refreshContentEditable(), void 0 !== e.bookmark && !1 === nf(e) && Wm(e).each((t => { e.selection.setRng(t), o = t }));
                                const r = ((e, t) => e.dom.getParent(t, (t => "true" === e.dom.getContentEditable(t))))(e, t.getNode());
                                if (e.dom.isChildOf(r, n)) return tf(r), ef(e, o), void of(e);
                                e.inline || (Nt.browser.isOpera() || tf(n), e.getWin().focus()), (Nt.browser.isFirefox() || e.inline) && (tf(n), ef(e, o)), of(e)
                            })(e))
                        })(e, o)
                    },
                    mceToggleVisualAid: () => { e.hasVisual = !e.hasVisual, e.addVisual() }
                })
            })(e)
        };
    class vN {
        constructor(e) { this.commands = { state: {}, exec: {}, value: {} }, this.editor = e }
        execCommand(e, t, n, o) {
            const r = this.editor,
                s = e.toLowerCase(),
                a = null == o ? void 0 : o.skip_focus;
            if (r.removed) return !1;
            if ("mcefocus" !== s && (/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(s) || a ? (e => { Wm(e).each((t => e.selection.setRng(t))) })(r) : r.focus()), r.dispatch("BeforeExecCommand", { command: e, ui: t, value: n }).isDefaultPrevented()) return !1;
            const i = this.commands.exec[s];
            return !!x(i) && (i(s, t, n), r.dispatch("ExecCommand", { command: e, ui: t, value: n }), !0)
        }
        queryCommandState(e) {
            if (this.editor.quirks.isHidden() || this.editor.removed) return !1;
            const t = e.toLowerCase(),
                n = this.commands.state[t];
            return !!x(n) && n(t)
        }
        queryCommandValue(e) {
            if (this.editor.quirks.isHidden() || this.editor.removed) return "";
            const t = e.toLowerCase(),
                n = this.commands.value[t];
            return x(n) ? n(t) : ""
        }
        addCommands(e, t = "exec") {
            const n = this.commands;
            fe(e, ((e, o) => { $(o.toLowerCase().split(","), (o => { n[t][o] = e })) }))
        }
        addCommand(e, t, n) {
            const o = e.toLowerCase();
            this.commands.exec[o] = (e, o, r) => t.call(null != n ? n : this.editor, o, r)
        }
        queryCommandSupported(e) { const t = e.toLowerCase(); return !!this.commands.exec[t] }
        addQueryStateHandler(e, t, n) { this.commands.state[e.toLowerCase()] = () => t.call(null != n ? n : this.editor) }
        addQueryValueHandler(e, t, n) { this.commands.value[e.toLowerCase()] = () => t.call(null != n ? n : this.editor) }
    }
    const yN = "data-mce-contenteditable",
        CN = (e, t, n) => { try { e.getDoc().execCommand(t, !1, String(n)) } catch (e) {} },
        xN = (e, t) => { e.dom.contentEditable = t ? "true" : "false" },
        wN = (e, t) => {
            const n = mn(e.getBody());
            ((e, t, n) => { sn(e, t) && !1 === n ? rn(e, t) : n && nn(e, t) })(n, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), (e => { M.from(e.selection.getNode()).each((e => { e.removeAttribute("data-mce-selected") })) })(e), e.readonly = !0, xN(n, !1), $(Xs(n, '*[contenteditable="true"]'), (e => { $t(e, yN, "true"), xN(e, !1) }))) : (e.readonly = !1, xN(n, !0), $(Xs(n, '*[data-mce-contenteditable="true"]'), (e => { Yt(e, yN), xN(e, !0) })), CN(e, "StyleWithCSS", !1), CN(e, "enableInlineTableEditing", !1), CN(e, "enableObjectResizing", !1), (e => nf(e) || (e => { const t = Pn(mn(e.getElement())); return Fm(t).filter((t => !(e => { const t = e.classList; return void 0 !== t && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body")) })(t.dom) && Qm(e, t.dom))).isSome() })(e))(e) && e.focus(), (e => { e.selection.setRng(e.selection.getRng()) })(e), e.nodeChanged())
        },
        kN = e => e.readonly,
        SN = e => { e.parser.addAttributeFilter("contenteditable", (t => { kN(e) && $(t, (e => { e.attr(yN, e.attr("contenteditable")), e.attr("contenteditable", "false") })) })), e.serializer.addAttributeFilter(yN, (t => { kN(e) && $(t, (e => { e.attr("contenteditable", e.attr(yN)) })) })), e.serializer.addTempAttr(yN) },
        _N = Bt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " ");
    class EN {
        constructor(e) { this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || L }
        static isNative(e) { return !!_N[e.toLowerCase()] }
        fire(e, t) { return this.dispatch(e, t) }
        dispatch(e, t) {
            const n = e.toLowerCase(),
                o = ws(n, null != t ? t : {}, this.scope);
            this.settings.beforeFire && this.settings.beforeFire(o);
            const r = this.bindings[n];
            if (r)
                for (let e = 0, t = r.length; e < t; e++) { const t = r[e]; if (!t.removed) { if (t.once && this.off(n, t.func), o.isImmediatePropagationStopped()) return o; if (!1 === t.func.call(this.scope, o)) return o.preventDefault(), o } }
            return o
        }
        on(e, t, n, o) {
            if (!1 === t && (t = L), t) {
                const r = { func: t, removed: !1 };
                o && Bt.extend(r, o);
                const s = e.toLowerCase().split(" ");
                let a = s.length;
                for (; a--;) {
                    const e = s[a];
                    let t = this.bindings[e];
                    t || (t = [], this.toggleEvent(e, !0)), t = n ? [r, ...t] : [...t, r], this.bindings[e] = t
                }
            }
            return this
        }
        off(e, t) {
            if (e) {
                const n = e.toLowerCase().split(" ");
                let o = n.length;
                for (; o--;) {
                    const r = n[o];
                    let s = this.bindings[r];
                    if (!r) return fe(this.bindings, ((e, t) => { this.toggleEvent(t, !1), delete this.bindings[t] })), this;
                    if (s) {
                        if (t) {
                            const e = W(s, (e => e.func === t));
                            s = e.fail, this.bindings[r] = s, $(e.pass, (e => { e.removed = !0 }))
                        } else s.length = 0;
                        s.length || (this.toggleEvent(e, !1), delete this.bindings[r])
                    }
                }
            } else fe(this.bindings, ((e, t) => { this.toggleEvent(t, !1) })), this.bindings = {};
            return this
        }
        once(e, t, n) { return this.on(e, t, n, { once: !0 }) }
        has(e) { return e = e.toLowerCase(), !(!this.bindings[e] || 0 === this.bindings[e].length) }
    }
    const NN = e => (e._eventDispatcher || (e._eventDispatcher = new EN({ scope: e, toggleEvent: (t, n) => { EN.isNative(t) && e.toggleNativeEvent && e.toggleNativeEvent(t, n) } })), e._eventDispatcher),
        RN = { fire(e, t, n) { return this.dispatch(e, t, n) }, dispatch(e, t, n) { const o = this; if (o.removed && "remove" !== e && "detach" !== e) return ws(e.toLowerCase(), null != t ? t : {}, o); const r = NN(o).dispatch(e, t); if (!1 !== n && o.parent) { let t = o.parent(); for (; t && !r.isPropagationStopped();) t.dispatch(e, r, !1), t = t.parent() } return r }, on(e, t, n) { return NN(this).on(e, t, n) }, off(e, t) { return NN(this).off(e, t) }, once(e, t) { return NN(this).once(e, t) }, hasEventListeners(e) { return NN(this).has(e) } },
        AN = Is.DOM;
    let ON;
    const TN = (e, t) => { if ("selectionchange" === t) return e.getDoc(); if (!e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)) return e.getDoc().documentElement; const n = al(e); return n ? (e.eventRoot || (e.eventRoot = AN.select(n)[0]), e.eventRoot) : e.getBody() },
        BN = (e, t, n) => {
            (e => !e.hidden && !kN(e))(e) ? e.dispatch(t, n): kN(e) && ((e, t) => {
                if ((e => "click" === e.type)(t) && !Uu.metaKeyPressed(t)) {
                    const n = mn(t.target);
                    ((e, t) => Ko(t, "a", (t => bn(t, mn(e.getBody())))).bind((e => Kt(e, "href"))))(e, n).each((n => {
                        if (t.preventDefault(), /^#/.test(n)) {
                            const t = e.dom.select(`${n},[name="${o=n,ze(o,"#")?((e,t)=>e.substring(t))(o,"#".length):o}"]`);
                            t.length && e.selection.scrollIntoView(t[0], !0)
                        } else window.open(n, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");
                        var o
                    }))
                }
            })(e, n)
        },
        DN = (e, t) => {
            let n;
            if (e.delegates || (e.delegates = {}), e.delegates[t] || e.removed) return;
            const o = TN(e, t);
            if (al(e)) {
                if (ON || (ON = {}, e.editorManager.on("removeEditor", (() => { e.editorManager.activeEditor || ON && (fe(ON, ((t, n) => { e.dom.unbind(TN(e, n)) })), ON = null) }))), ON[t]) return;
                n = n => {
                    const o = n.target,
                        r = e.editorManager.get();
                    let s = r.length;
                    for (; s--;) {
                        const e = r[s].getBody();
                        (e === o || AN.isChildOf(o, e)) && BN(r[s], t, n)
                    }
                }, ON[t] = n, AN.bind(o, t, n)
            } else n = n => { BN(e, t, n) }, AN.bind(o, t, n), e.delegates[t] = n
        },
        LN = {...RN,
            bindPendingEventDelegates() {
                const e = this;
                Bt.each(e._pendingNativeEvents, (t => { DN(e, t) }))
            },
            toggleNativeEvent(e, t) { const n = this; "focus" !== e && "blur" !== e && (n.removed || (t ? n.initialized ? DN(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(TN(n, e), e, n.delegates[e]), delete n.delegates[e]))) },
            unbindAllNativeEvents() {
                const e = this,
                    t = e.getBody(),
                    n = e.dom;
                e.delegates && (fe(e.delegates, ((t, n) => { e.dom.unbind(TN(e, n), n, t) })), delete e.delegates), !e.inline && t && n && (t.onload = null, n.unbind(e.getWin()), n.unbind(e.getDoc())), n && (n.unbind(t), n.unbind(e.getContainer()))
            }
        },
        PN = e => m(e) ? { value: e.split(/[ ,]/), valid: !0 } : k(e, m) ? { value: e, valid: !0 } : { valid: !1, message: "The value must be a string[] or a comma/space separated string." },
        MN = (e, t) => e + (Ke(t.message) ? "" : `. ${t.message}`),
        IN = e => e.valid,
        FN = (e, t, n = "") => { const o = t(e); return b(o) ? o ? { value: e, valid: !0 } : { valid: !1, message: n } : o },
        UN = ["design", "readonly"],
        zN = (e, t, n, o) => {
            const r = n[t.get()],
                s = n[o];
            try { s.activate() } catch (e) { return void console.error(`problem while activating editor mode ${o}:`, e) }
            r.deactivate(), r.editorReadOnly !== s.editorReadOnly && wN(e, s.editorReadOnly), t.set(o), ((e, t) => { e.dispatch("SwitchMode", { mode: t }) })(e, o)
        },
        jN = Bt.each,
        VN = Bt.explode,
        HN = { f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123 },
        $N = Bt.makeMap("alt,ctrl,shift,meta,access"),
        qN = e => {
            let t;
            const n = {},
                o = Nt.os.isMacOS() || Nt.os.isiOS();
            jN(VN(e.toLowerCase(), "+"), (e => { e in $N ? n[e] = !0 : /^[0-9]{2,}$/.test(e) ? n.keyCode = parseInt(e, 10) : (n.charCode = e.charCodeAt(0), n.keyCode = HN[e] || e.toUpperCase().charCodeAt(0)) }));
            const r = [n.keyCode];
            for (t in $N) n[t] ? r.push(t) : n[t] = !1;
            return n.id = r.join(","), n.access && (n.alt = !0, o ? n.ctrl = !0 : n.shift = !0), n.meta && (o ? n.meta = !0 : (n.ctrl = !0, n.meta = !1)), n
        };
    class WN {
        constructor(e) {
            this.shortcuts = {}, this.pendingPatterns = [], this.editor = e;
            const t = this;
            e.on("keyup keypress keydown", (e => {!t.hasModifier(e) && !t.isFunctionKey(e) || e.isDefaultPrevented() || (jN(t.shortcuts, (n => { if (t.matchShortcut(e, n)) return t.pendingPatterns = n.subpatterns.slice(0), "keydown" === e.type && t.executeShortcutAction(n), !0 })), t.matchShortcut(e, t.pendingPatterns[0]) && (1 === t.pendingPatterns.length && "keydown" === e.type && t.executeShortcutAction(t.pendingPatterns[0]), t.pendingPatterns.shift())) }))
        }
        add(e, t, n, o) {
            const r = this,
                s = r.normalizeCommandFunc(n);
            return jN(VN(Bt.trim(e)), (e => {
                const n = r.createShortcut(e, t, s, o);
                r.shortcuts[n.id] = n
            })), !0
        }
        remove(e) { const t = this.createShortcut(e); return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0) }
        normalizeCommandFunc(e) {
            const t = this,
                n = e;
            return "string" == typeof n ? () => { t.editor.execCommand(n, !1, null) } : Bt.isArray(n) ? () => { t.editor.execCommand(n[0], n[1], n[2]) } : n
        }
        createShortcut(e, t, n, o) { const r = Bt.map(VN(e, ">"), qN); return r[r.length - 1] = Bt.extend(r[r.length - 1], { func: n, scope: o || this.editor }), Bt.extend(r[0], { desc: this.editor.translate(t), subpatterns: r.slice(1) }) }
        hasModifier(e) { return e.altKey || e.ctrlKey || e.metaKey }
        isFunctionKey(e) { return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123 }
        matchShortcut(e, t) { return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0) }
        executeShortcutAction(e) { return e.func ? e.func.call(e.scope) : null }
    }
    const KN = () => {
            const e = (() => {
                const e = {},
                    t = {},
                    n = {},
                    o = {},
                    r = {},
                    s = {},
                    a = {},
                    i = (e, t) => (n, o) => e[n.toLowerCase()] = {...o, type: t };
                return { addButton: i(e, "button"), addGroupToolbarButton: i(e, "grouptoolbarbutton"), addToggleButton: i(e, "togglebutton"), addMenuButton: i(e, "menubutton"), addSplitButton: i(e, "splitbutton"), addMenuItem: i(t, "menuitem"), addNestedMenuItem: i(t, "nestedmenuitem"), addToggleMenuItem: i(t, "togglemenuitem"), addAutocompleter: i(n, "autocompleter"), addContextMenu: i(r, "contextmenu"), addContextToolbar: i(s, "contexttoolbar"), addContextForm: i(s, "contextform"), addSidebar: i(a, "sidebar"), addIcon: (e, t) => o[e.toLowerCase()] = t, getAll: () => ({ buttons: e, menuItems: t, icons: o, popups: n, contextMenus: r, contextToolbars: s, sidebars: a }) }
            })();
            return { addAutocompleter: e.addAutocompleter, addButton: e.addButton, addContextForm: e.addContextForm, addContextMenu: e.addContextMenu, addContextToolbar: e.addContextToolbar, addIcon: e.addIcon, addMenuButton: e.addMenuButton, addMenuItem: e.addMenuItem, addNestedMenuItem: e.addNestedMenuItem, addSidebar: e.addSidebar, addSplitButton: e.addSplitButton, addToggleButton: e.addToggleButton, addGroupToolbarButton: e.addGroupToolbarButton, addToggleMenuItem: e.addToggleMenuItem, getAll: e.getAll }
        },
        GN = Is.DOM,
        YN = Bt.extend,
        XN = Bt.each;
    class QN {
        constructor(e, t, n) {
            this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, YN(this, LN);
            const o = this;
            this.id = e, this.hidden = !1;
            const r = ((e, t) => sN(JE || ZE, JE, t, e, t))(n.defaultOptions, t);
            this.options = ((e, t) => {
                const n = {},
                    o = {},
                    r = (e, t, n) => { const r = FN(t, n); return IN(r) ? (o[e] = r.value, !0) : (console.warn(MN(`Invalid value passed for the ${e} option`, r)), !1) },
                    s = e => we(n, e);
                return {
                    register: (e, s) => {
                        const a = (e => m(e.processor))(s) ? (e => {
                                const t = (() => {
                                    switch (e) {
                                        case "array":
                                            return p;
                                        case "boolean":
                                            return b;
                                        case "function":
                                            return x;
                                        case "number":
                                            return w;
                                        case "object":
                                            return f;
                                        case "string":
                                            return m;
                                        case "string[]":
                                            return PN;
                                        case "object[]":
                                            return e => k(e, f);
                                        case "regexp":
                                            return e => u(e, RegExp)
                                    }
                                })();
                                return n => FN(n, t, `The value must be a ${e}.`)
                            })(s.processor) : s.processor,
                            i = ((e, t, n) => {
                                if (!v(t)) {
                                    const o = FN(t, n);
                                    if (IN(o)) return o.value;
                                    console.error(MN(`Invalid default value passed for the "${e}" option`, o))
                                }
                            })(e, s.default, a);
                        n[e] = {...s, default: i, processor: a }, xe(o, e).orThunk((() => xe(t, e))).each((t => r(e, t, a)))
                    },
                    isRegistered: s,
                    get: e => xe(o, e).orThunk((() => xe(n, e).map((e => e.default)))).getOrUndefined(),
                    set: (e, t) => { if (s(e)) { const o = n[e]; return o.immutable ? (console.error(`"${e}" is an immutable option and cannot be updated`), !1) : r(e, t, o.processor) } return console.warn(`"${e}" is not a registered option. Ensure the option has been registered before setting a value.`), !1 },
                    unset: e => { const t = s(e); return t && delete o[e], t },
                    isSet: e => we(o, e)
                }
            })(0, r), (e => {
                const t = e.options.register;
                t("id", { processor: "string", default: e.id }), t("selector", { processor: "string" }), t("target", { processor: "object" }), t("suffix", { processor: "string" }), t("cache_suffix", { processor: "string" }), t("base_url", { processor: "string" }), t("referrer_policy", { processor: "string", default: "" }), t("language_load", { processor: "boolean" }), t("inline", { processor: "boolean", default: !1 }), t("iframe_attrs", { processor: "object", default: {} }), t("doctype", { processor: "string", default: "<!DOCTYPE html>" }), t("document_base_url", { processor: "string", default: e.documentBaseUrl }), t("body_id", { processor: ki(e, "tinymce"), default: "tinymce" }), t("body_class", { processor: ki(e), default: "" }), t("content_security_policy", { processor: "string", default: "" }), t("br_in_pre", { processor: "boolean", default: !0 }), t("forced_root_block", { processor: e => { const t = m(e) && We(e); return t ? { value: e, valid: t } : { valid: !1, message: "Must be a non-empty string." } }, default: "p" }), t("forced_root_block_attrs", { processor: "object", default: {} }), t("br_newline_selector", { processor: "string", default: ".mce-toc h2,figcaption,caption" }), t("no_newline_selector", { processor: "string", default: "" }), t("keep_styles", { processor: "boolean", default: !0 }), t("end_container_on_empty_block", { processor: "boolean", default: !1 }), t("font_size_style_values", { processor: "string", default: "xx-small,x-small,small,medium,large,x-large,xx-large" }), t("font_size_legacy_values", { processor: "string", default: "xx-small,small,medium,large,x-large,xx-large,300%" }), t("font_size_classes", { processor: "string", default: "" }), t("automatic_uploads", { processor: "boolean", default: !0 }), t("images_reuse_filename", { processor: "boolean", default: !1 }), t("images_replace_blob_uris", { processor: "boolean", default: !0 }), t("icons", { processor: "string", default: "" }), t("icons_url", { processor: "string", default: "" }), t("images_upload_url", { processor: "string", default: "" }), t("images_upload_base_path", { processor: "string", default: "" }), t("images_upload_base_path", { processor: "string", default: "" }), t("images_upload_credentials", { processor: "boolean", default: !1 }), t("images_upload_handler", { processor: "function" }), t("language", { processor: "string", default: "en" }), t("language_url", { processor: "string", default: "" }), t("entity_encoding", { processor: "string", default: "named" }), t("indent", { processor: "boolean", default: !0 }), t("indent_before", { processor: "string", default: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist" }), t("indent_after", { processor: "string", default: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist" }), t("indent_use_margin", { processor: "boolean", default: !1 }), t("indentation", { processor: "string", default: "40px" }), t("content_css", { processor: e => { const t = !1 === e || m(e) || k(e, m); return t ? m(e) ? { value: H(e.split(","), He), valid: t } : p(e) ? { value: e, valid: t } : !1 === e ? { value: [], valid: t } : { value: e, valid: t } : { valid: !1, message: "Must be false, a string or an array of strings." } }, default: bl(e) ? [] : ["default"] }), t("content_style", { processor: "string" }), t("content_css_cors", { processor: "boolean", default: !1 }), t("font_css", { processor: e => { const t = m(e) || k(e, m); return t ? { value: p(e) ? e : H(e.split(","), He), valid: t } : { valid: !1, message: "Must be a string or an array of strings." } }, default: [] }), t("inline_boundaries", { processor: "boolean", default: !0 }), t("inline_boundaries_selector", { processor: "string", default: "a[href],code,.mce-annotation" }), t("object_resizing", { processor: e => { const t = b(e) || m(e); return t ? !1 === e || bi.isiPhone() || bi.isiPad() ? { value: "", valid: t } : { value: !0 === e ? "table,img,figure.image,div,video,iframe" : e, valid: t } : { valid: !1, message: "Must be boolean or a string" } }, default: !vi }), t("resize_img_proportional", { processor: "boolean", default: !0 }), t("event_root", { processor: "object" }), t("service_message", { processor: "string" }), t("theme", { processor: e => !1 === e || m(e) || x(e), default: "silver" }), t("theme_url", { processor: "string" }), t("formats", { processor: "object" }), t("format_empty_lines", { processor: "boolean", default: !1 }), t("preview_styles", { processor: e => { const t = !1 === e || m(e); return t ? { value: !1 === e ? "" : e, valid: t } : { valid: !1, message: "Must be false or a string" } }, default: "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow" }), t("custom_ui_selector", { processor: "string", default: "" }), t("hidden_input", { processor: "boolean", default: !0 }), t("submit_patch", { processor: "boolean", default: !0 }), t("encoding", { processor: "string" }), t("add_form_submit_trigger", { processor: "boolean", default: !0 }), t("add_unload_trigger", { processor: "boolean", default: !0 }), t("custom_undo_redo_levels", { processor: "number", default: 0 }), t("disable_nodechange", { processor: "boolean", default: !1 }), t("readonly", { processor: "boolean", default: !1 }), t("plugins", { processor: "string[]", default: [] }), t("external_plugins", { processor: "object" }), t("forced_plugins", { processor: "string[]" }), t("model", { processor: "string", default: e.hasPlugin("rtc") ? "plugin" : "dom" }), t("model_url", { processor: "string" }), t("block_unsupported_drop", { processor: "boolean", default: !0 }), t("visual", { processor: "boolean", default: !0 }), t("visual_table_class", { processor: "string", default: "mce-item-table" }), t("visual_anchor_class", { processor: "string", default: "mce-item-anchor" }), t("iframe_aria_text", { processor: "string", default: "Rich Text Area. Press ALT-0 for help." }), t("setup", { processor: "function" }), t("init_instance_callback", { processor: "function" }), t("url_converter", { processor: "function", default: e.convertURL }), t("url_converter_scope", { processor: "object", default: e }), t("urlconverter_callback", { processor: "function" }), t("allow_conditional_comments", { processor: "boolean", default: !1 }), t("allow_html_data_urls", { processor: "boolean", default: !1 }), t("allow_svg_data_urls", { processor: "boolean" }), t("allow_html_in_named_anchor", { processor: "boolean", default: !1 }), t("allow_script_urls", { processor: "boolean", default: !1 }), t("allow_unsafe_link_target", { processor: "boolean", default: !1 }), t("convert_fonts_to_spans", { processor: "boolean", default: !0, deprecated: !0 }), t("fix_list_elements", { processor: "boolean", default: !1 }), t("preserve_cdata", { processor: "boolean", default: !1 }), t("remove_trailing_brs", { processor: "boolean" }), t("inline_styles", { processor: "boolean", default: !0, deprecated: !0 }), t("element_format", { processor: "string", default: "html" }), t("entities", { processor: "string" }), t("schema", { processor: "string", default: "html5" }), t("convert_urls", { processor: "boolean", default: !0 }), t("relative_urls", { processor: "boolean", default: !0 }), t("remove_script_host", { processor: "boolean", default: !0 }), t("custom_elements", { processor: "string" }), t("extended_valid_elements", { processor: "string" }), t("invalid_elements", { processor: "string" }), t("invalid_styles", { processor: wi }), t("valid_children", { processor: "string" }), t("valid_classes", { processor: wi }), t("valid_elements", { processor: "string" }), t("valid_styles", { processor: wi }), t("verify_html", { processor: "boolean", default: !0 }), t("auto_focus", { processor: e => m(e) || !0 === e }), t("browser_spellcheck", { processor: "boolean", default: !1 }), t("protect", { processor: "array" }), t("images_file_types", { processor: "string", default: "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp" }), t("deprecation_warnings", { processor: "boolean", default: !0 }), t("a11y_advanced_options", { processor: "boolean", default: !1 }), t("api_key", { processor: "string" }), t("paste_block_drop", { processor: "boolean", default: !1 }), t("paste_data_images", { processor: "boolean", default: !0 }), t("paste_preprocess", { processor: "function" }), t("paste_postprocess", { processor: "function" }), t("paste_webkit_styles", { processor: "string", default: "none" }), t("paste_remove_styles_if_webkit", { processor: "boolean", default: !0 }), t("paste_merge_formats", { processor: "boolean", default: !0 }), t("smart_paste", { processor: "boolean", default: !0 }), t("paste_as_text", { processor: "boolean", default: !1 }), t("paste_tab_spaces", { processor: "number", default: 4 }), t("text_patterns", { processor: e => k(e, f) || !1 === e ? { value: hi(!1 === e ? [] : e), valid: !0 } : { valid: !1, message: "Must be an array of objects or false." }, default: [{ start: "*", end: "*", format: "italic" }, { start: "**", end: "**", format: "bold" }, { start: "#", format: "h1" }, { start: "##", format: "h2" }, { start: "###", format: "h3" }, { start: "####", format: "h4" }, { start: "#####", format: "h5" }, { start: "######", format: "h6" }, { start: "1. ", cmd: "InsertOrderedList" }, { start: "* ", cmd: "InsertUnorderedList" }, { start: "- ", cmd: "InsertUnorderedList" }] }), t("noneditable_class", { processor: "string", default: "mceNonEditable" }), t("editable_class", { processor: "string", default: "mceEditable" }), t("noneditable_regexp", { processor: e => k(e, Ci) ? { value: e, valid: !0 } : Ci(e) ? { value: [e], valid: !0 } : { valid: !1, message: "Must be a RegExp or an array of RegExp." }, default: [] }), t("table_tab_navigation", { processor: "boolean", default: !0 }), e.on("ScriptsLoaded", (() => { t("directionality", { processor: "string", default: $s.isRtl() ? "rtl" : void 0 }), t("placeholder", { processor: "string", default: yi.getAttrib(e.getElement(), "placeholder") }) }))
            })(o);
            const s = this.options.get;
            s("deprecation_warnings") && ((e, t) => {
                ((e, t) => {
                    const n = zv(e),
                        o = jv(t),
                        r = o.length > 0,
                        s = n.length > 0,
                        a = "mobile" === t.theme;
                    if (r || s || a) {
                        const e = "\n- ",
                            t = a ? `\n\nThemes:${e}mobile` : "",
                            i = r ? `\n\nPlugins:${e}${o.join(e)}` : "",
                            l = s ? `\n\nOptions:${e}${n.join(e)}` : "";
                        console.warn("The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information." + t + i + l)
                    }
                })(e, t)
            })(t, r);
            const a = s("suffix");
            a && (n.suffix = a), this.suffix = n.suffix;
            const i = s("base_url");
            i && n._setBaseUrl(i), this.baseUri = n.baseURI;
            const l = Ki(o);
            l && (Us.ScriptLoader._setReferrerPolicy(l), Is.DOM.styleSheetLoader._setReferrerPolicy(l)), qs.languageLoad = s("language_load"), qs.baseURL = n.baseURL, this.setDirty(!1), this.documentBaseURI = new Mb(Ei(o), { base_uri: this.baseUri }), this.baseURI = this.baseUri, this.inline = bl(o), this.shortcuts = new WN(this), this.editorCommands = new vN(this), bN(this);
            const d = s("cache_suffix");
            d && (Nt.cacheSuffix = d.replace(/^[\?\&]+/, "")), this.ui = { registry: KN(), styleSheetLoader: void 0, show: S, hide: S, setEnabled: S, isEnabled: P }, this.mode = (e => {
                const t = zs("design"),
                    n = zs({ design: { activate: S, deactivate: S, editorReadOnly: !1 }, readonly: { activate: S, deactivate: S, editorReadOnly: !0 } });
                return (e => { e.serializer ? SN(e) : e.on("PreInit", (() => { SN(e) })) })(e), (e => { e.on("ShowCaret", (t => { kN(e) && t.preventDefault() })), e.on("ObjectSelected", (t => { kN(e) && t.preventDefault() })) })(e), {
                    isReadOnly: () => kN(e),
                    set: o => ((e, t, n, o) => {
                        if (o !== n.get()) {
                            if (!we(t, o)) throw new Error(`Editor mode '${o}' is invalid`);
                            e.initialized ? zN(e, n, t, o) : e.on("init", (() => zN(e, n, t, o)))
                        }
                    })(e, n.get(), t, o),
                    get: () => t.get(),
                    register: (e, t) => { n.set(((e, t, n) => { if (j(UN, t)) throw new Error(`Cannot override default mode ${t}`); return {...e, [t]: {...n, deactivate: () => { try { n.deactivate() } catch (e) { console.error(`problem while deactivating editor mode ${t}:`, e) } } } } })(n.get(), e, t)) }
                }
            })(o), n.dispatch("SetupEditor", { editor: this });
            const c = Dl(o);
            x(c) && c.call(o, o)
        }
        render() {
            (e => {
                const t = e.id;
                $s.setCode(Gi(e));
                const n = () => { KE.unbind(window, "ready", n), e.render() };
                if (!Rs.Event.domLoaded) return void KE.bind(window, "ready", n);
                if (!e.getElement()) return;
                const o = mn(e.getElement()),
                    r = Xt(o);
                e.on("remove", (() => { q(o.dom.attributes, (e => Yt(o, e.name))), qt(o, r) })), e.ui.styleSheetLoader = ((e, t) => Yo.forElement(e, { contentCssCors: _l(t), referrerPolicy: Ki(t) }))(o, e), bl(e) ? e.inline = !0 : (e.orgVisibility = e.getElement().style.visibility, e.getElement().style.visibility = "hidden");
                const s = e.getElement().form || KE.getParent(t, "form");
                s && (e.formElement = s, vl(e) && !Eo(e.getElement()) && (KE.insertAfter(KE.create("input", { type: "hidden", name: t }), t), e.hasHiddenInput = !0), e.formEventDelegate = t => { e.dispatch(t.type, t) }, KE.bind(s, "submit reset", e.formEventDelegate), e.on("reset", (() => { e.resetContent() })), !yl(e) || s.submit.nodeType || s.submit.length || s._mceOldSubmit || (s._mceOldSubmit = s.submit, s.submit = () => (e.editorManager.triggerSave(), e.setDirty(!1), s._mceOldSubmit(s)))), e.windowManager = ty(e), e.notificationManager = Jv(e), (e => "xml" === e.options.get("encoding"))(e) && e.on("GetContent", (e => { e.save && (e.content = KE.encode(e.content)) })), Cl(e) && e.on("submit", (() => { e.initialized && e.save() })), xl(e) && (e._beforeUnload = () => {!e.initialized || e.destroyed || e.isHidden() || e.save({ format: "raw", no_events: !0, set_dirty: !1 }) }, e.editorManager.on("BeforeUnload", e._beforeUnload)), e.editorManager.add(e), XE(e, e.suffix)
            })(this)
        }
        focus(e) { this.execCommand("mceFocus", !1, e) }
        hasFocus() { return nf(this) }
        translate(e) { return $s.translate(e) }
        getParam(e, t, n) { const o = this.options; return o.isRegistered(e) || (C(n) ? o.register(e, { processor: n, default: t }) : o.register(e, { processor: P, default: t })), o.isSet(e) || v(t) ? o.get(e) : t }
        hasPlugin(e, t) { return !(!j(El(this), e) || t && void 0 === Zv.get(e)) }
        nodeChanged(e) { this._nodeChangeDispatcher.nodeChanged(e) }
        addCommand(e, t, n) { this.editorCommands.addCommand(e, t, n) }
        addQueryStateHandler(e, t, n) { this.editorCommands.addQueryStateHandler(e, t, n) }
        addQueryValueHandler(e, t, n) { this.editorCommands.addQueryValueHandler(e, t, n) }
        addShortcut(e, t, n, o) { this.shortcuts.add(e, t, n, o) }
        execCommand(e, t, n, o) { return this.editorCommands.execCommand(e, t, n, o) }
        queryCommandState(e) { return this.editorCommands.queryCommandState(e) }
        queryCommandValue(e) { return this.editorCommands.queryCommandValue(e) }
        queryCommandSupported(e) { return this.editorCommands.queryCommandSupported(e) }
        show() {
            const e = this;
            e.hidden && (e.hidden = !1, e.inline ? e.getBody().contentEditable = "true" : (GN.show(e.getContainer()), GN.hide(e.id)), e.load(), e.dispatch("show"))
        }
        hide() {
            const e = this;
            e.hidden || (e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (GN.hide(e.getContainer()), GN.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.dispatch("hide"))
        }
        isHidden() { return this.hidden }
        setProgressState(e, t) { this.dispatch("ProgressState", { state: e, time: t }) }
        load(e) {
            const t = this;
            let n, o = t.getElement();
            if (t.removed) return "";
            if (o) {
                (e = e || {}).load = !0;
                const r = Eo(o) ? o.value : o.innerHTML;
                return n = t.setContent(r, e), e.element = o, e.no_events || t.dispatch("LoadContent", e), e.element = o = null, n
            }
        }
        save(e) { const t = this; let n, o, r = t.getElement(); if (r && t.initialized && !t.removed) return (e = e || {}).save = !0, e.element = r, n = e.content = t.getContent(e), e.no_events || t.dispatch("SaveContent", e), "raw" === e.format && t.dispatch("RawSaveContent", e), n = e.content, Eo(r) ? r.value = n : (!e.is_removing && t.inline || (r.innerHTML = n), (o = GN.getParent(t.id, "form")) && XN(o.elements, (e => { if (e.name === t.id) return e.value = n, !1 }))), e.element = r = null, !1 !== e.set_dirty && t.setDirty(!1), n }
        setContent(e, t) { return Iv(this, e, t) }
        getContent(e) { return ((e, t = {}) => { const n = ((e, t) => ({...e, format: t, get: !0, getInner: !0 }))(t, t.format ? t.format : "html"); return Gb(e, n).fold(R, (t => { const n = ((e, t) => Ev(e).editor.getContent(t))(e, t); return Yb(e, n, t) })) })(this, e) }
        insertContent(e, t) { t && (e = YN({ content: e }, t)), this.execCommand("mceInsertContent", !1, e) }
        resetContent(e) { void 0 === e ? Iv(this, this.startContent, { format: "raw" }) : Iv(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged() }
        isDirty() { return !this.isNotDirty }
        setDirty(e) {
            const t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.dispatch("dirty")
        }
        getContainer() { const e = this; return e.container || (e.container = GN.get(e.editorContainer || e.id + "_parent")), e.container }
        getContentAreaContainer() { return this.contentAreaContainer }
        getElement() { return this.targetElm || (this.targetElm = GN.get(this.id)), this.targetElm }
        getWin() { const e = this; let t; return e.contentWindow || (t = e.iframeElement, t && (e.contentWindow = t.contentWindow)), e.contentWindow }
        getDoc() { const e = this; let t; return e.contentDocument || (t = e.getWin(), t && (e.contentDocument = t.document)), e.contentDocument }
        getBody() { const e = this.getDoc(); return this.bodyElement || (e ? e.body : null) }
        convertURL(e, t, n) {
            const o = this,
                r = o.options.get,
                s = Pl(o);
            return x(s) ? s.call(o, e, n, !0, t) : !r("convert_urls") || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r("relative_urls") ? o.documentBaseURI.toRelative(e) : e = o.documentBaseURI.toAbsolute(e, r("remove_script_host"))
        }
        addVisual(e) {
            ((e, t) => {
                ((e, t) => { Nv(e).editor.addVisual(t) })(e, t)
            })(this, e)
        }
        remove() {
            (e => {
                if (!e.removed) {
                    const { _selectionOverrides: t, editorUpload: n } = e, o = e.getBody(), r = e.getElement();
                    o && e.save({ is_removing: !0 }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && r && Vv.remove(r.nextSibling), (e => { e.dispatch("remove") })(e), e.editorManager.remove(e), !e.inline && o && (e => { Vv.setStyle(e.id, "display", e.orgDisplay) })(e), (e => { e.dispatch("detach") })(e), Vv.remove(e.getContainer()), Hv(t), Hv(n), e.destroy()
                }
            })(this)
        }
        destroy(e) {
            ((e, t) => {
                const { selection: n, dom: o } = e;
                e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), Hv(n), Hv(o)), (e => {
                    const t = e.formElement;
                    t && (t._mceOldSubmit && (t.submit = t._mceOldSubmit, t._mceOldSubmit = null), Vv.unbind(t, "submit reset", e.formEventDelegate))
                })(e), (e => { e.contentAreaContainer = e.formElement = e.container = e.editorContainer = null, e.bodyElement = e.contentDocument = e.contentWindow = null, e.iframeElement = e.targetElm = null, e.selection && (e.selection = e.selection.win = e.selection.dom = e.selection.dom.doc = null) })(e), e.destroyed = !0) : e.remove())
            })(this, e)
        }
        uploadImages() { return this.editorUpload.uploadImages() }
        _scanForImages() { return this.editorUpload.scanForImages() }
    }
    const JN = Is.DOM,
        ZN = Bt.each;
    let eR, tR = !1,
        nR = [];
    const oR = e => {
            const t = e.type;
            ZN(iR.get(), (n => {
                switch (t) {
                    case "scroll":
                        n.dispatch("ScrollWindow", e);
                        break;
                    case "resize":
                        n.dispatch("ResizeWindow", e)
                }
            }))
        },
        rR = e => {
            if (e !== tR) {
                const t = Is.DOM;
                e ? (t.bind(window, "resize", oR), t.bind(window, "scroll", oR)) : (t.unbind(window, "resize", oR), t.unbind(window, "scroll", oR)), tR = e
            }
        },
        sR = e => { const t = nR; return nR = K(nR, (t => e !== t)), iR.activeEditor === e && (iR.activeEditor = nR.length > 0 ? nR[0] : null), iR.focusedEditor === e && (iR.focusedEditor = null), t.length !== nR.length },
        aR = "CSS1Compat" !== document.compatMode,
        iR = {...RN,
            baseURI: null,
            baseURL: null,
            defaultOptions: {},
            documentBaseURL: null,
            suffix: null,
            majorVersion: "6",
            minorVersion: "0.2",
            releaseDate: "2022-04-27",
            i18n: $s,
            activeEditor: null,
            focusedEditor: null,
            setup() {
                const e = this;
                let t, n, o = "";
                n = Mb.getDocumentBaseUrl(document.location), /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/"));
                const r = window.tinymce || window.tinyMCEPreInit;
                if (r) t = r.base || r.baseURL, o = r.suffix;
                else { const e = document.getElementsByTagName("script"); for (let n = 0; n < e.length; n++) { const r = e[n].src || ""; if ("" === r) continue; const s = r.substring(r.lastIndexOf("/")); if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {-1 !== s.indexOf(".min") && (o = ".min"), t = r.substring(0, r.lastIndexOf("/")); break } } if (!t && document.currentScript) { const e = document.currentScript.src; - 1 !== e.indexOf(".min") && (o = ".min"), t = e.substring(0, e.lastIndexOf("/")) } }
                var s;
                e.baseURL = new Mb(n).toAbsolute(t), e.documentBaseURL = n, e.baseURI = new Mb(e.baseURL), e.suffix = o, (s = e).on("AddEditor", O(Jm, s)), s.on("RemoveEditor", O(Zm, s))
            },
            overrideDefaults(e) {
                const t = e.base_url;
                t && this._setBaseUrl(t);
                const n = e.suffix;
                e.suffix && (this.suffix = n), this.defaultOptions = e;
                const o = e.plugin_base_urls;
                void 0 !== o && fe(o, ((e, t) => { qs.PluginManager.urls[t] = e }))
            },
            init(e) {
                const t = this;
                let n;
                const o = Bt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " ");
                let r = e => { n = e };
                const s = () => {
                    let n = 0;
                    const a = [];
                    let i;
                    JN.unbind(window, "ready", s), (n => {
                        const o = e.onpageload;
                        o && o.apply(t, [])
                    })(), i = ((e, t) => {
                        const n = [],
                            o = x(t) ? e => V(n, (n => t(n, e))) : e => j(n, e);
                        for (let t = 0, r = e.length; t < r; t++) {
                            const r = e[t];
                            o(r) || n.push(r)
                        }
                        return n
                    })((e => Nt.browser.isIE() || Nt.browser.isEdge() ? (ay("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"), []) : aR ? (ay("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), []) : m(e.selector) ? JN.select(e.selector) : C(e.target) ? [e.target] : [])(e)), Bt.each(i, (e => {
                        var n;
                        (n = t.get(e.id)) && n.initialized && !(n.getContainer() || n.getBody()).parentNode && (sR(n), n.unbindAllNativeEvents(), n.destroy(!0), n.removed = !0, n = null)
                    })), i = Bt.grep(i, (e => !t.get(e.id))), 0 === i.length ? r([]) : ZN(i, (s => {
                        ((e, t) => e.inline && t.tagName.toLowerCase() in o)(e, s) ? ay("Could not initialize inline editor on invalid inline target element", s): ((e, o, s) => {
                            const l = new QN(e, o, t);
                            a.push(l), l.on("init", (() => {++n === i.length && r(a) })), l.targetElm = l.targetElm || s, l.render()
                        })((e => { let t = e.id; return t || (t = xe(e, "name").filter((e => !JN.get(e))).getOrThunk(JN.uniqueId), e.setAttribute("id", t)), t })(s), e, s)
                    }))
                };
                return JN.bind(window, "ready", s), new Promise((e => { n ? e(n) : r = t => { e(t) } }))
            },
            get(e) { return 0 === arguments.length ? nR.slice(0) : m(e) ? Q(nR, (t => t.id === e)).getOr(null) : w(e) && nR[e] ? nR[e] : null },
            add(e) {
                const t = this,
                    n = t.get(e.id);
                return n === e || (null === n && nR.push(e), rR(!0), t.activeEditor = e, t.dispatch("AddEditor", { editor: e }), eR || (eR = e => { const n = t.dispatch("BeforeUnload"); if (n.returnValue) return e.preventDefault(), e.returnValue = n.returnValue, n.returnValue }, window.addEventListener("beforeunload", eR))), e
            },
            createEditor(e, t) { return this.add(new QN(e, t, this)) },
            remove(e) {
                const t = this;
                let n, o;
                if (e) {
                    if (!m(e)) return o = e, h(t.get(o.id)) ? null : (sR(o) && t.dispatch("RemoveEditor", { editor: o }), 0 === nR.length && window.removeEventListener("beforeunload", eR), o.remove(), rR(nR.length > 0), o);
                    ZN(JN.select(e), (e => { o = t.get(e.id), o && t.remove(o) }))
                } else
                    for (n = nR.length - 1; n >= 0; n--) t.remove(nR[n])
            },
            execCommand(e, t, n) {
                var o;
                const r = this,
                    s = f(n) ? null !== (o = n.id) && void 0 !== o ? o : n.index : n;
                switch (e) {
                    case "mceAddEditor":
                        if (!r.get(s)) {
                            const e = n.options;
                            new QN(s, e, r).render()
                        }
                        return !0;
                    case "mceRemoveEditor":
                        { const e = r.get(s); return e && e.remove(), !0 }
                    case "mceToggleEditor":
                        { const e = r.get(s); return e ? (e.isHidden() ? e.show() : e.hide(), !0) : (r.execCommand("mceAddEditor", !1, n), !0) }
                }
                return !!r.activeEditor && r.activeEditor.execCommand(e, t, n)
            },
            triggerSave: () => { ZN(nR, (e => { e.save() })) },
            addI18n: (e, t) => { $s.add(e, t) },
            translate: e => $s.translate(e),
            setActive(e) {
                const t = this.activeEditor;
                this.activeEditor !== e && (t && t.dispatch("deactivate", { relatedTarget: e }), e.dispatch("activate", { relatedTarget: t })), this.activeEditor = e
            },
            _setBaseUrl(e) { this.baseURL = new Mb(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new Mb(this.baseURL) }
        };
    iR.setup();
    const lR = (() => { const e = Ws(); return { FakeClipboardItem: e => ({ items: e, types: ue(e), getType: t => xe(e, t).getOrUndefined() }), write: t => { e.set(t) }, read: () => e.get().getOrUndefined(), clear: e.clear } })(),
        dR = Math.min,
        cR = Math.max,
        uR = Math.round,
        mR = (e, t, n) => {
            let o = t.x,
                r = t.y;
            const s = e.w,
                a = e.h,
                i = t.w,
                l = t.h,
                d = (n || "").split("");
            return "b" === d[0] && (r += l), "r" === d[1] && (o += i), "c" === d[0] && (r += uR(l / 2)), "c" === d[1] && (o += uR(i / 2)), "b" === d[3] && (r -= a), "r" === d[4] && (o -= s), "c" === d[3] && (r -= uR(a / 2)), "c" === d[4] && (o -= uR(s / 2)), fR(o, r, s, a)
        },
        fR = (e, t, n, o) => ({ x: e, y: t, w: n, h: o }),
        gR = {
            inflate: (e, t, n) => fR(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n),
            relativePosition: mR,
            findBestRelativePosition: (e, t, n, o) => {
                let r, s;
                for (s = 0; s < o.length; s++)
                    if (r = mR(e, t, o[s]), r.x >= n.x && r.x + r.w <= n.w + n.x && r.y >= n.y && r.y + r.h <= n.h + n.y) return o[s];
                return null
            },
            intersect: (e, t) => {
                const n = cR(e.x, t.x),
                    o = cR(e.y, t.y),
                    r = dR(e.x + e.w, t.x + t.w),
                    s = dR(e.y + e.h, t.y + t.h);
                return r - n < 0 || s - o < 0 ? null : fR(n, o, r - n, s - o)
            },
            clamp: (e, t, n) => {
                let o = e.x,
                    r = e.y,
                    s = e.x + e.w,
                    a = e.y + e.h;
                const i = t.x + t.w,
                    l = t.y + t.h,
                    d = cR(0, t.x - o),
                    c = cR(0, t.y - r),
                    u = cR(0, s - i),
                    m = cR(0, a - l);
                return o += d, r += c, n && (s += d, a += c, o -= u, r -= m), s -= u, a -= m, fR(o, r, s - o, a - r)
            },
            create: fR,
            fromClientRect: e => fR(e.left, e.top, e.width, e.height)
        },
        pR = (() => {
            const e = {},
                t = {};
            return {
                load: (n, o) => {
                    const r = `Script at URL "${o}" failed to load`,
                        s = `Script at URL "${o}" did not call \`tinymce.Resource.add('${n}', data)\` within 1 second`;
                    if (void 0 !== e[n]) return e[n]; {
                        const a = new Promise(((e, a) => {
                            const i = ((e, t, n = 1e3) => {
                                let o = !1,
                                    r = null;
                                const s = e => (...t) => { o || (o = !0, null !== r && (clearTimeout(r), r = null), e.apply(null, t)) },
                                    a = s(e),
                                    i = s(t);
                                return { start: (...e) => { o || null !== r || (r = setTimeout((() => i.apply(null, e)), n)) }, resolve: a, reject: i }
                            })(e, a);
                            t[n] = i.resolve, Us.ScriptLoader.loadScript(o).then((() => i.start(s)), (() => i.reject(r)))
                        }));
                        return e[n] = a, a
                    }
                },
                add: (n, o) => { void 0 !== t[n] && (t[n](o), delete t[n]), e[n] = Promise.resolve(o) },
                unload: t => { delete e[t] }
            }
        })();
    let hR;
    try {
        const e = "__storage_test__";
        hR = window.localStorage, hR.setItem(e, e), hR.removeItem(e)
    } catch (e) {
        hR = (() => {
            let e = {},
                t = [];
            const n = { getItem: t => e[t] || null, setItem: (n, o) => { t.push(n), e[n] = String(o) }, key: e => t[e], removeItem: n => { t = t.filter((e => e === n)), delete e[n] }, clear: () => { t = [], e = {} }, length: 0 };
            return Object.defineProperty(n, "length", { get: () => t.length, configurable: !1, enumerable: !1 }), n
        })()
    }
    const bR = {
            geom: { Rect: gR },
            util: {
                Delay: Gm,
                Tools: Bt,
                VK: Uu,
                URI: Mb,
                EventDispatcher: EN,
                Observable: RN,
                I18n: $s,
                LocalStorage: hR,
                ImageUploader: e => {
                    const t = dy(),
                        n = fy(e, t);
                    return { upload: (t, o = !0) => n.upload(t, o ? my(e) : void 0) }
                }
            },
            dom: { EventUtils: Rs, TreeWalker: Xo, TextSeeker: ca, DOMUtils: Is, ScriptLoader: Us, RangeUtils: pm, Serializer: Mv, StyleSheetLoader: Go, ControlSelection: zu, BookmarkManager: Tu, Selection: Dv, Event: Rs.Event },
            html: { Styles: ys, Entities: ls, Node: yf, Schema: vs, DomParser: Wb, Writer: Nf, Serializer: Rf },
            Env: Nt,
            AddOnManager: qs,
            Annotator: Ou,
            Formatter: Sy,
            UndoManager: Ey,
            EditorCommands: vN,
            WindowManager: ty,
            NotificationManager: Jv,
            EditorObservable: LN,
            Shortcuts: WN,
            Editor: QN,
            FocusManager: Km,
            EditorManager: iR,
            DOM: Is.DOM,
            ScriptLoader: Us.ScriptLoader,
            PluginManager: Zv,
            ThemeManager: ey,
            ModelManager: qv,
            IconManager: $v,
            Resource: pR,
            FakeClipboard: lR,
            trim: Bt.trim,
            isArray: Bt.isArray,
            is: Bt.is,
            toArray: Bt.toArray,
            makeMap: Bt.makeMap,
            each: Bt.each,
            map: Bt.map,
            grep: Bt.grep,
            inArray: Bt.inArray,
            extend: Bt.extend,
            walk: Bt.walk,
            resolve: Bt.resolve,
            explode: Bt.explode,
            _addCacheSuffix: Bt._addCacheSuffix
        },
        vR = Bt.extend(iR, bR);
    (e => { window.tinymce = e, window.tinyMCE = e })(vR), (e => { if ("object" == typeof module) try { module.exports = e } catch (e) {} })(vR)
}();

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.6.0-14
 */

! function() {
    "use strict";

    function n(e) { return function(n) { return r = typeof(t = n), (null === t ? "null" : "object" == r && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == r && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : r) === e; var t, r } }

    function o(n) { return function() { return n } }

    function t(n) { return n }

    function r() { return p }
    var e, u = "undefined" != typeof window ? window : Function("return this;")(),
        i = function(n, t) { return { isRequired: n, applyPatch: t } },
        a = function(i, o) {
            return function() {
                for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                var r = o.apply(this, n),
                    e = void 0 === r ? n : r;
                return i.apply(this, e)
            }
        },
        c = function(n, t) {
            if (n)
                for (var r = 0; r < t.length; r++) t[r].isRequired(n) && t[r].applyPatch(n);
            return n
        },
        f = n("object"),
        l = n("array"),
        s = function(n) { return e === n },
        g = o(!1),
        d = o(!(e = void 0)),
        p = { fold: function(n, t) { return n() }, isSome: g, isNone: d, getOr: t, getOrThunk: v, getOrDie: function(n) { throw new Error(n || "error: getOrDie called on none.") }, getOrNull: o(null), getOrUndefined: o(void 0), or: t, orThunk: v, map: r, each: function() {}, bind: r, exists: g, forall: d, filter: function() { return p }, toArray: function() { return [] }, toString: o("none()") };

    function v(n) { return n() }

    function h(n, t) { return r = n, e = t, -1 < D.call(r, e); var r, e }

    function y(n, t) {
        return function(n) {
            for (var t = [], r = 0, e = n.length; r < e; ++r) {
                if (!l(n[r])) throw new Error("Arr.flatten item " + r + " was not an array, input: " + n);
                U.apply(t, n[r])
            }
            return t
        }(function(n, t) {
            for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
                var o = n[i];
                e[i] = t(o, i)
            }
            return e
        }(n, t))
    }

    function m(n, t) {
        for (var r = P(n), e = 0, i = r.length; e < i; e++) {
            var o = r[e];
            t(n[o], o)
        }
    }

    function E(r) { return function(n, t) { r[t] = n } }

    function w(n, t) {
        var r, e, i, o = {},
            u = {};
        return r = t, e = E(o), i = E(u), m(n, function(n, t) {
            (r(n, t) ? e : i)(n, t)
        }), { t: o, f: u }
    }

    function O(n, t) { return T(n, t) ? _(n[t]) : S() }

    function M(u) { return function() { for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t]; if (0 === n.length) throw new Error("Can't merge zero objects"); for (var r = {}, e = 0; e < n.length; e++) { var i = n[e]; for (var o in i) T(i, o) && (r[o] = u(r[o], i[o])) } return r } }

    function b(n) { if (s(n) || "" === n) return []; var t = l(n) ? y(n, function(n) { return n.split(/[\s+,]/) }) : n.split(/[\s+,]/); return y(t, function(n) { return 0 < n.length ? [n.trim()] : [] }) }

    function x(n) { var t; return null !== (t = n.defaultOptions) && void 0 !== t ? t : n.defaultSettings }

    function j(n, t) {
        var r = C(n, t),
            e = b(t.plugins),
            i = O(r, "custom_plugin_urls").getOr({}),
            o = w(i, function(n, t) { return h(e, t) }),
            u = O(r, "external_plugins").getOr({}),
            a = {};
        m(o.t, function(n, t) { a[t] = n });
        var c = I(a, u);
        return I(t, 0 === P(c).length ? {} : { external_plugins: c })
    }
    var A = function(r) {
            function n() { return i }

            function t(n) { return n(r) }
            var e = o(r),
                i = { fold: function(n, t) { return t(r) }, isSome: d, isNone: g, getOr: e, getOrThunk: e, getOrDie: e, getOrNull: e, getOrUndefined: e, or: n, orThunk: n, map: function(n) { return A(n(r)) }, each: function(n) { n(r) }, bind: t, exists: t, forall: t, filter: function(n) { return n(r) ? i : p }, toArray: function() { return [r] }, toString: function() { return "some(" + r + ")" } };
            return i
        },
        S = r,
        _ = function(n) { return null == n ? p : A(n) },
        D = Array.prototype.indexOf,
        U = Array.prototype.push,
        P = Object.keys,
        R = Object.hasOwnProperty,
        T = function(n, t) { return R.call(n, t) },
        C = M(function(n, t) { return f(n) && f(t) ? C(n, t) : t }),
        I = M(function(n, t) { return t }),
        N = { getCustomPluginUrls: j, patch: i(function() { return !0 }, function(r) { r.EditorManager.init = a(r.EditorManager.init, function(n) { return [j(x(r), n)] }), r.EditorManager.createEditor = a(r.EditorManager.createEditor, function(n, t) { return [n, j(x(r), t)] }) }) };

    function k(n, t, r) {
        if (r || 2 === arguments.length)
            for (var e, i = 0, o = t.length; i < o; i++) !e && i in t || ((e = e || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return n.concat(e || Array.prototype.slice.call(t))
    }

    function L(n, t) { return function(n, t) { for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e) r = r[n[e]]; return r }(n.split("."), t) }

    function q(n) { return parseInt(n, 10) }

    function V(n, t) { var r = n - t; return 0 == r ? 0 : 0 < r ? 1 : -1 }

    function z(n, t, r) { return { major: n, minor: t, patch: r } }

    function B(n) { var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n); return t ? z(q(t[1]), q(t[2]), q(t[3])) : z(0, 0, 0) }

    function F(n, t) { return !!n && -1 === function(n, t) { var r = V(n.major, t.major); if (0 !== r) return r; var e = V(n.minor, t.minor); if (0 !== e) return e; var i = V(n.patch, t.patch); return 0 !== i ? i : 0 }(B([(r = n).majorVersion, r.minorVersion].join(".").split(".").slice(0, 3).join(".")), B(t)); var r }

    function $(o) {
        return function(n) {
            var t = L("tinymce.util.Tools", u),
                r = b(n.plugins),
                e = x(o).forced_plugins || [],
                i = 0 < e.length ? r.concat(e) : r;
            return [t.extend({}, n, { plugins: i })]
        }
    }

    function G() { return (new Date).getTime() }

    function H(e) { return function() { var n, t, r = (t = "position", (((n = e).currentStyle ? n.currentStyle[t] : window.getComputedStyle(n, null)[t]) || "").toLowerCase()); return "absolute" === r || "fixed" === r } }

    function J(n) { n.parentNode.removeChild(n) }

    function K(n, t) { n.notificationManager ? n.notificationManager.open({ text: t, type: "warning", timeout: 0, icon: "" }) : n.windowManager.alert(t) }

    function Q(n) {
        var t, r, e = L("tinymce.util.URI", u);
        (t = n.base_url) && (this.baseURL = new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new e(this.baseURL)), r = n.suffix, n.suffix && (this.suffix = r), this.defaultSettings = n
    }

    function W(n) { return [L("tinymce.util.Tools", u).extend({}, this.defaultSettings, n)] }

    function X(n) { c(n, [rn.patch, en.patch, Y.patch, N.patch]) }
    var Y = { patch: i(function(n) { return F(n, "4.7.0") }, function(r) { r.EditorManager.init = a(r.EditorManager.init, $(r.EditorManager)), r.EditorManager.createEditor = a(r.EditorManager.createEditor, function(n, t) { return k([n], $(r.EditorManager)(t), !0) }) }) },
        Z = function(n, t, r, e, i) {
            var o, u = G();
            o = setInterval(function() { n() && (clearInterval(o), t()), G() - u > i && (clearInterval(o), r()) }, e)
        },
        nn = function(n, t) {
            var r, e = ((r = document.createElement("div")).style.display = "none", r.className = "mce-floatpanel", r);
            document.body.appendChild(e), Z(H(e), function() { J(e), n() }, function() { J(e), t() }, 10, 5e3)
        },
        tn = function(n) {
            n.EditorManager.on("AddEditor", function(n) {
                var t = n.editor,
                    r = t.settings.service_message;
                r && nn(function() { K(t, r) }, function() { alert(r) })
            })
        },
        rn = { patch: i(function(n) { return "function" != typeof n.overrideDefaults }, function(r) { tn(r), r.overrideDefaults = Q, r.EditorManager.init = a(r.EditorManager.init, W), r.EditorManager.createEditor = a(r.EditorManager.createEditor, function(n, t) { return k([n], W.call(r, t), !0) }) }) },
        en = {
            patch: i(function(n) { return F(n, "4.5.0") }, function(n) {
                var e;
                n.overrideDefaults = a(n.overrideDefaults, (e = n, function(n) { var t = n.plugin_base_urls; for (var r in t) e.PluginManager.urls[r] = t[r] }))
            })
        };
    X(u.tinymce)
}();

(function(cloudSettings) {
    tinymce.overrideDefaults(cloudSettings);
})({ "rtc_tenant_id": "no-api-key", "editimage_api_key": "no-api-key", "imagetools_proxy": "https://imageproxy.tiny.cloud/2/image", "suffix": ".min", "linkchecker_service_url": "https://hyperlinking.tiny.cloud", "spellchecker_rpc_url": "https://spelling.tiny.cloud", "spellchecker_api_key": "no-api-key", "tinydrive_service_url": "https://catalog.tiny.cloud", "api_key": "no-api-key", "imagetools_api_key": "no-api-key", "tinydrive_api_key": "no-api-key", "export_image_proxy_service_url": "https://imageproxy.tiny.cloud", "forced_plugins": ["chiffer"], "referrer_policy": "origin", "content_css_cors": true, "custom_plugin_urls": {}, "chiffer_snowplow_service_url": "https://sp.tinymce.com/i", "mediaembed_api_key": "no-api-key", "rtc_service_url": "https://rtc.tiny.cloud", "editimage_proxy_service_url": "https://imageproxy.tiny.cloud", "linkchecker_api_key": "no-api-key", "mediaembed_service_url": "https://hyperlinking.tiny.cloud", });
tinymce.baseURL = "https://cdn.tiny.cloud/1/no-api-key/tinymce/6.0.2-4"

/* Ephox chiffer plugin
 *
 * Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
 *
 * Version: 1.12.0-18
 */

! function() {
    "use strict";

    function n(t) { return !(null == t) }

    function o() {}

    function r(t, e) { return p.call(t, e) }

    function e(t) { var e = t.command; return r(S, e) ? function(t) { if (n(t.value) && r(t.value, "list-style-type")) { t = t.value["list-style-type"]; return "advlist_" + ("" === t ? "default" : t) } }(t) : r(g, e) ? g[e] : r(_, e) ? _[e] : r(v, e) ? v[e] : void 0 }

    function a() { return (new Date).getTime() }

    function t(t, e) {
        var r, i, n, e = (r = t, i = e, {
            send: function(t, e, n) {
                var t = "?aid=" + i + "&tna=tinymce_cloud&p=web&dtm=" + e + "&stm=" + a() + "&tz=" + ("undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA") + "&e=se&se_ca=" + t,
                    o = document.createElement("img");
                o.src = r.chiffer_snowplow_service_url + t;
                t = function(t) { return function() { o.onload = null, o.onerror = null, n(t) } };
                o.onload = t(!0), o.onerror = t(!1)
            }
        });
        return n = e, { sendStat: function(t) { n.send(t, a(), o) } }
    }
    var i, c, s, u, d, l, m = (i = "string", function(t) { return t = typeof(e = t), (null === e ? "null" : "object" == t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t) === i; var e }),
        f = (c = void 0, function(t) { return c === t }),
        p = Object.hasOwnProperty,
        _ = { mceInsertToc: "toc_insert", mceUpdateToc: "toc_update" },
        g = { mceEditImage: "imagetools_open_dialog", mceImageRotateLeft: "imagetools_rotate", mceImageRotateRight: "imagetools_rotate", mceImageFlipVertical: "imagetools_flip", mceImageFlipHorizontal: "imagetools_flip" },
        S = { InsertUnorderedList: !0, InsertOrderedList: !0 },
        v = { mceInsertTemplate: "template_insert", mceInsertDate: "insertdatetime_insert", mceInsertTime: "insertdatetime_insert", mcePreview: "preview_open_dialog", mceAnchor: "anchor_open_dialog" };
    u = null !== (d = tinymce.defaultOptions) && void 0 !== d ? d : tinymce.defaultSettings, d = { load: o }, l = function(t) { t = t.api_key; return m(t) ? t : void 0 }(u), d = void 0 === l ? d : ((s = t(u, l)).sendStat("script_load"), {
        load: function(t) {
            t.once("init", function() { return s.sendStat("init") }), t.once("focus", function() { return s.sendStat("focus") }), t.on("ExportPdf", function() { return s.sendStat("export_pdf") }), t.on("PastePreProcess PowerPasteTempStats", function(t) {
                t = t.source;
                n(t) && s.sendStat("powerpaste_" + t)
            }), t.on("VisualChars", function(t) {!0 === t.state && s.sendStat("visualchars_true") }), t.on("RtcSessionConnected", function(t) {
                var e = t.time;
                switch (e) {
                    case 0:
                        s.sendStat("rtc_started");
                        break;
                    case 5:
                    case 10:
                    case 20:
                        s.sendStat("rtc_connected_" + e + "min")
                }
            }), t.on("RtcSessionError", function() { return s.sendStat("rtc_error") }), t.on("RtcSessionDirty", function() { return s.sendStat("rtc_edited") }), t.on("SpellcheckerLanguageChanged", function(t) {
                t = t.language;
                s.sendStat("spellcheckerpro_language_changed_" + t)
            }), t.on("ExecCommand", function(t) {
                t = e(t);
                f(t) || s.sendStat(t)
            })
        }
    }), tinymce.PluginManager.add("chiffer", d.load)
}();