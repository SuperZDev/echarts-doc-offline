/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

/*

 JS Signals <http://millermedeiros.github.com/js-signals/>
 Released under the MIT license
 Author: Miller Medeiros
 Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
*/

/*!
 * Hasher <http://github.com/millermedeiros/hasher>
 * @author Miller Medeiros
 * @version 1.2.0 (2013/11/11 03:18 PM)
 * Released under the MIT License
 */

/* Copyright (c) 2015 Hyunje Alex Jun and other contributors
 * Licensed under the MIT License
 */

!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
     : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function g(e) {
        var t = "length" in e && e.length
          , n = h.type(e);
        return "function" === n || h.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function S(e, t, n) {
        if (h.isFunction(t))
            return h.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return h.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (E.test(t))
                return h.filter(t, e, n);
            t = h.filter(t, e)
        }
        return h.grep(e, function(e) {
            return h.inArray(e, t) >= 0 !== n
        })
    }
    function A(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    function _(e) {
        var t = M[e] = {};
        return h.each(e.match(O) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function P() {
        T.addEventListener ? (T.removeEventListener("DOMContentLoaded", H, !1),
        e.removeEventListener("load", H, !1)) : (T.detachEvent("onreadystatechange", H),
        e.detachEvent("onload", H))
    }
    function H() {
        (T.addEventListener || "load" === event.type || "complete" === T.readyState) && (P(),
        h.ready())
    }
    function q(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(I, "-$1").toLowerCase();
            if (n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null  : +n + "" === n ? +n : F.test(n) ? h.parseJSON(n) : n
                } catch (i) {}
                h.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function R(e) {
        var t;
        for (t in e)
            if (("data" !== t || !h.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function U(e, t, r, i) {
        if (h.acceptData(e)) {
            var s, o, u = h.expando, a = e.nodeType, f = a ? h.cache : e, l = a ? e[u] : e[u] && u;
            if (l && f[l] && (i || f[l].data) || void 0 !== r || "string" != typeof t)
                return l || (l = a ? e[u] = n.pop() || h.guid++ : u),
                f[l] || (f[l] = a ? {} : {
                    toJSON: h.noop
                }),
                ("object" == typeof t || "function" == typeof t) && (i ? f[l] = h.extend(f[l], t) : f[l].data = h.extend(f[l].data, t)),
                o = f[l],
                i || (o.data || (o.data = {}),
                o = o.data),
                void 0 !== r && (o[h.camelCase(t)] = r),
                "string" == typeof t ? (s = o[t],
                null  == s && (s = o[h.camelCase(t)])) : s = o,
                s
        }
    }
    function z(e, t, n) {
        if (h.acceptData(e)) {
            var r, i, s = e.nodeType, o = s ? h.cache : e, u = s ? e[h.expando] : h.expando;
            if (o[u]) {
                if (t && (r = n ? o[u] : o[u].data)) {
                    h.isArray(t) ? t = t.concat(h.map(t, h.camelCase)) : t in r ? t = [t] : (t = h.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    while (i--)
                        delete r[t[i]];
                    if (n ? !R(r) : !h.isEmptyObject(r))
                        return
                }
                (n || (delete o[u].data,
                R(o[u]))) && (s ? h.cleanData([e], !0) : l.deleteExpando || o != o.window ? delete o[u] : o[u] = null )
            }
        }
    }
    function et() {
        return !0
    }
    function tt() {
        return !1
    }
    function nt() {
        try {
            return T.activeElement
        } catch (e) {}
    }
    function rt(e) {
        var t = it.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    function wt(e, t) {
        var n, r, i = 0, s = typeof e.getElementsByTagName !== B ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== B ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [],
            n = e.childNodes || e; null  != (r = n[i]); i++)
                !t || h.nodeName(r, t) ? s.push(r) : h.merge(s, wt(r, t));
        return void 0 === t || t && h.nodeName(e, t) ? h.merge([e], s) : s
    }
    function Et(e) {
        J.test(e.type) && (e.defaultChecked = e.checked)
    }
    function St(e, t) {
        return h.nodeName(e, "table") && h.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function xt(e) {
        return e.type = (null  !== h.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function Tt(e) {
        var t = vt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function Nt(e, t) {
        for (var n, r = 0; null  != (n = e[r]); r++)
            h._data(n, "globalEval", !t || h._data(t[r], "globalEval"))
    }
    function Ct(e, t) {
        if (1 === t.nodeType && h.hasData(e)) {
            var n, r, i, s = h._data(e), o = h._data(t, s), u = s.events;
            if (u) {
                delete o.handle,
                o.events = {};
                for (n in u)
                    for (r = 0,
                    i = u[n].length; i > r; r++)
                        h.event.add(t, n, u[n][r])
            }
            o.data && (o.data = h.extend({}, o.data))
        }
    }
    function kt(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !l.noCloneEvent && t[h.expando]) {
                i = h._data(t);
                for (r in i.events)
                    h.removeEvent(t, r, i.handle);
                t.removeAttribute(h.expando)
            }
            "script" === n && t.text !== e.text ? (xt(t).text = e.text,
            Tt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            l.html5Clone && e.innerHTML && !h.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && J.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function Ot(t, n) {
        var r, i = h(n.createElement(t)).appendTo(n.body), s = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : h.css(i[0], "display");
        return i.detach(),
        s
    }
    function Mt(e) {
        var t = T
          , n = At[e];
        return n || (n = Ot(e, t),
        "none" !== n && n || (Lt = (Lt || h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (Lt[0].contentWindow || Lt[0].contentDocument).document,
        t.write(),
        t.close(),
        n = Ot(e, t),
        Lt.detach()),
        At[e] = n),
        n
    }
    function jt(e, t) {
        return {
            get: function() {
                var n = e();
                if (null  != n)
                    return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function Vt(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = Xt.length;
        while (i--)
            if (t = Xt[i] + n,
            t in e)
                return t;
        return r
    }
    function $t(e, t) {
        for (var n, r, i, s = [], o = 0, u = e.length; u > o; o++)
            r = e[o],
            r.style && (s[o] = h._data(r, "olddisplay"),
            n = r.style.display,
            t ? (s[o] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && V(r) && (s[o] = h._data(r, "olddisplay", Mt(r.nodeName)))) : (i = V(r),
            (n && "none" !== n || !i) && h._data(r, "olddisplay", i ? n : h.css(r, "display"))));
        for (o = 0; u > o; o++)
            r = e[o],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }
    function Jt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function Kt(e, t, n, r, i) {
        for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2)
            "margin" === n && (o += h.css(e, n + X[s], !0, i)),
            r ? ("content" === n && (o -= h.css(e, "padding" + X[s], !0, i)),
            "margin" !== n && (o -= h.css(e, "border" + X[s] + "Width", !0, i))) : (o += h.css(e, "padding" + X[s], !0, i),
            "padding" !== n && (o += h.css(e, "border" + X[s] + "Width", !0, i)));
        return o
    }
    function Qt(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , s = Pt(e)
          , o = l.boxSizing && "border-box" === h.css(e, "boxSizing", !1, s);
        if (0 >= i || null  == i) {
            if (i = Ht(e, t, s),
            (0 > i || null  == i) && (i = e.style[t]),
            Dt.test(i))
                return i;
            r = o && (l.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + Kt(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }
    function Gt(e, t, n, r, i) {
        return new Gt.prototype.init(e,t,n,r,i)
    }
    function on() {
        return setTimeout(function() {
            Yt = void 0
        }),
        Yt = h.now()
    }
    function un(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = X[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function an(e, t, n) {
        for (var r, i = (sn[t] || []).concat(sn["*"]), s = 0, o = i.length; o > s; s++)
            if (r = i[s].call(n, t, e))
                return r
    }
    function fn(e, t, n) {
        var r, i, s, o, u, a, f, c, p = this, d = {}, v = e.style, m = e.nodeType && V(e), g = h._data(e, "fxshow");
        n.queue || (u = h._queueHooks(e, "fx"),
        null  == u.unqueued && (u.unqueued = 0,
        a = u.empty.fire,
        u.empty.fire = function() {
            u.unqueued || a()
        }
        ),
        u.unqueued++,
        p.always(function() {
            p.always(function() {
                u.unqueued--,
                h.queue(e, "fx").length || u.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY],
        f = h.css(e, "display"),
        c = "none" === f ? h._data(e, "olddisplay") || Mt(e.nodeName) : f,
        "inline" === c && "none" === h.css(e, "float") && (l.inlineBlockNeedsLayout && "inline" !== Mt(e.nodeName) ? v.zoom = 1 : v.display = "inline-block")),
        n.overflow && (v.overflow = "hidden",
        l.shrinkWrapBlocks() || p.always(function() {
            v.overflow = n.overflow[0],
            v.overflowX = n.overflow[1],
            v.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            en.exec(i)) {
                if (delete t[r],
                s = s || "toggle" === i,
                i === (m ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;m = !0
                }
                d[r] = g && g[r] || h.style(e, r)
            } else
                f = void 0;
        if (h.isEmptyObject(d))
            "inline" === ("none" === f ? Mt(e.nodeName) : f) && (v.display = f);
        else {
            g ? "hidden" in g && (m = g.hidden) : g = h._data(e, "fxshow", {}),
            s && (g.hidden = !m),
            m ? h(e).show() : p.done(function() {
                h(e).hide()
            }),
            p.done(function() {
                var t;
                h._removeData(e, "fxshow");
                for (t in d)
                    h.style(e, t, d[t])
            });
            for (r in d)
                o = an(m ? g[r] : 0, r, p),
                r in g || (g[r] = o.start,
                m && (o.end = o.start,
                o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function ln(e, t) {
        var n, r, i, s, o;
        for (n in e)
            if (r = h.camelCase(n),
            i = t[r],
            s = e[n],
            h.isArray(s) && (i = s[1],
            s = e[n] = s[0]),
            n !== r && (e[r] = s,
            delete e[n]),
            o = h.cssHooks[r],
            o && "expand" in o) {
                s = o.expand(s),
                delete e[r];
                for (n in s)
                    n in e || (e[n] = s[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function cn(e, t, n) {
        var r, i, s = 0, o = rn.length, u = h.Deferred().always(function() {
            delete a.elem
        }), a = function() {
            if (i)
                return !1;
            for (var t = Yt || on(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length; a > o; o++)
                f.tweens[o].run(s);
            return u.notifyWith(e, [f, s, n]),
            1 > s && a ? n : (u.resolveWith(e, [f]),
            !1)
        }
        , f = u.promise({
            elem: e,
            props: h.extend({}, t),
            opts: h.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Yt || on(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = h.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? f.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]),
                this
            }
        }), l = f.props;
        for (ln(l, f.opts.specialEasing); o > s; s++)
            if (r = rn[s].call(f, e, l, f.opts))
                return r;
        return h.map(l, an, f),
        h.isFunction(f.opts.start) && f.opts.start.call(e, f),
        h.fx.timer(h.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function Fn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, s = t.toLowerCase().match(O) || [];
            if (h.isFunction(n))
                while (r = s[i++])
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function In(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0,
            h.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                return "string" != typeof f || s || i[f] ? s ? !(a = f) : void 0 : (t.dataTypes.unshift(f),
                o(f),
                !1)
            }),
            a
        }
        var i = {}
          , s = e === Hn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }
    function qn(e, t) {
        var n, r, i = h.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && h.extend(!0, e, n),
        e
    }
    function Rn(e, t, n) {
        var r, i, s, o, u = e.contents, a = e.dataTypes;
        while ("*" === a[0])
            a.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    a.unshift(o);
                    break
                }
        if (a[0] in n)
            s = a[0];
        else {
            for (o in n) {
                if (!a[0] || e.converters[o + " " + a[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== a[0] && a.unshift(s),
        n[s]) : void 0
    }
    function Un(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters)
                f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t),
            !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            a = s,
            s = l.shift())
                if ("*" === s)
                    s = a;
                else if ("*" !== a && a !== s) {
                    if (o = f[a + " " + s] || f["* " + s],
                    !o)
                        for (i in f)
                            if (u = i.split(" "),
                            u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                                o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0],
                                l.unshift(u[1]));
                                break
                            }
                    if (o !== !0)
                        if (o && e["throws"])
                            t = o(t);
                        else
                            try {
                                t = o(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: o ? c : "No conversion from " + a + " to " + s
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function Jn(e, t, n, r) {
        var i;
        if (h.isArray(t))
            h.each(t, function(t, i) {
                n || Wn.test(e) ? r(e, i) : Jn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== h.type(t))
            r(e, t);
        else
            for (i in t)
                Jn(e + "[" + i + "]", t[i], n, r)
    }
    function Yn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function Zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function ir(e) {
        return h.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var n = []
      , r = n.slice
      , i = n.concat
      , s = n.push
      , o = n.indexOf
      , u = {}
      , a = u.toString
      , f = u.hasOwnProperty
      , l = {}
      , c = "1.11.3"
      , h = function(e, t) {
        return new h.fn.init(e,t)
    }
      , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , d = /^-ms-/
      , v = /-([\da-z])/gi
      , m = function(e, t) {
        return t.toUpperCase()
    }
    ;
    h.fn = h.prototype = {
        jquery: c,
        constructor: h,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null  != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = h.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return h.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(h.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    h.extend = h.fn.extend = function() {
        var e, t, n, r, i, s, o = arguments[0] || {}, u = 1, a = arguments.length, f = !1;
        for ("boolean" == typeof o && (f = o,
        o = arguments[u] || {},
        u++),
        "object" == typeof o || h.isFunction(o) || (o = {}),
        u === a && (o = this,
        u--); a > u; u++)
            if (null  != (i = arguments[u]))
                for (r in i)
                    e = o[r],
                    n = i[r],
                    o !== n && (f && n && (h.isPlainObject(n) || (t = h.isArray(n))) ? (t ? (t = !1,
                    s = e && h.isArray(e) ? e : []) : s = e && h.isPlainObject(e) ? e : {},
                    o[r] = h.extend(f, s, n)) : void 0 !== n && (o[r] = n));
        return o
    }
    ,
    h.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === h.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === h.type(e)
        }
        ,
        isWindow: function(e) {
            return null  != e && e == e.window
        },
        isNumeric: function(e) {
            return !h.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== h.type(e) || e.nodeType || h.isWindow(e))
                return !1;
            try {
                if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (l.ownLast)
                for (t in e)
                    return f.call(e, t);
            for (t in e)
                ;
            return void 0 === t || f.call(e, t)
        },
        type: function(e) {
            return null  == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[a.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && h.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(d, "ms-").replace(v, m)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, s = e.length, o = g(e);
            if (n) {
                if (o) {
                    for (; s > i; i++)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
            } else if (o) {
                for (; s > i; i++)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null  == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null  != e && (g(Object(e)) ? h.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (o)
                    return o.call(t, e, n);
                for (r = t.length,
                n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            var n = +t.length
              , r = 0
              , i = e.length;
            while (n > r)
                e[i++] = t[r++];
            if (n !== n)
                while (void 0 !== t[r])
                    e[i++] = t[r++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++)
                r = !t(e[s], s),
                r !== u && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r, s = 0, o = e.length, u = g(e), a = [];
            if (u)
                for (; o > s; s++)
                    r = t(e[s], s, n),
                    null  != r && a.push(r);
            else
                for (s in e)
                    r = t(e[s], s, n),
                    null  != r && a.push(r);
            return i.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, s;
            return "string" == typeof t && (s = e[t],
            t = e,
            e = s),
            h.isFunction(e) ? (n = r.call(arguments, 2),
            i = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || h.guid++,
            i) : void 0
        },
        now: function() {
            return +(new Date)
        },
        support: l
    }),
    h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(e) {
        function ot(e, t, r, i) {
            var s, u, f, l, c, d, g, y, S, x;
            if ((t ? t.ownerDocument || t : E) !== p && h(t),
            t = t || p,
            r = r || [],
            l = t.nodeType,
            "string" != typeof e || !e || 1 !== l && 9 !== l && 11 !== l)
                return r;
            if (!i && v) {
                if (11 !== l && (s = Z.exec(e)))
                    if (f = s[1]) {
                        if (9 === l) {
                            if (u = t.getElementById(f),
                            !u || !u.parentNode)
                                return r;
                            if (u.id === f)
                                return r.push(u),
                                r
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f)
                            return r.push(u),
                            r
                    } else {
                        if (s[2])
                            return D.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((f = s[3]) && n.getElementsByClassName)
                            return D.apply(r, t.getElementsByClassName(f)),
                            r
                    }
                if (n.qsa && (!m || !m.test(e))) {
                    if (y = g = w,
                    S = t,
                    x = 1 !== l && e,
                    1 === l && "object" !== t.nodeName.toLowerCase()) {
                        d = o(e),
                        (g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y),
                        y = "[id='" + y + "'] ",
                        c = d.length;
                        while (c--)
                            d[c] = y + gt(d[c]);
                        S = et.test(e) && vt(t.parentNode) || t,
                        x = d.join(",")
                    }
                    if (x)
                        try {
                            return D.apply(r, S.querySelectorAll(x)),
                            r
                        } catch (T) {} finally {
                            g || t.removeAttribute("id")
                        }
                }
            }
            return a(e.replace(z, "$1"), t, r, i)
        }
        function ut() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            var e = [];
            return t
        }
        function at(e) {
            return e[w] = !0,
            e
        }
        function ft(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null 
            }
        }
        function lt(e, t) {
            var n = e.split("|")
              , i = e.length;
            while (i--)
                r.attrHandle[n[i]] = t
        }
        function ct(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || L) - (~e.sourceIndex || L);
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function ht(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function dt(e) {
            return at(function(t) {
                return t = +t,
                at(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)
                        n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function vt(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function mt() {}
        function gt(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function yt(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , s = x++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (1 === t.nodeType || i)
                        return e(t, n, s)
            }
             : function(t, n, o) {
                var u, a, f = [S, s];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || i) && e(t, n, o))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || i) {
                            if (a = t[w] || (t[w] = {}),
                            (u = a[r]) && u[0] === S && u[1] === s)
                                return f[2] = u[2];
                            if (a[r] = f,
                            f[2] = e(t, n, o))
                                return !0
                        }
            }
        }
        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
             : e[0]
        }
        function wt(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++)
                ot(e, t[r], n);
            return n
        }
        function Et(e, t, n, r, i) {
            for (var s, o = [], u = 0, a = e.length, f = null  != t; a > u; u++)
                (s = e[u]) && (!n || n(s, r, i)) && (o.push(s),
                f && t.push(u));
            return o
        }
        function St(e, t, n, r, i, s) {
            return r && !r[w] && (r = St(r)),
            i && !i[w] && (i = St(i, s)),
            at(function(s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || wt(t || "*", u.nodeType ? [u] : u, []), m = !e || !s && t ? v : Et(v, h, e, u, a), g = n ? i || (s ? e : d || r) ? [] : o : m;
                if (n && n(m, g, u, a),
                r) {
                    f = Et(g, p),
                    r(f, [], u, a),
                    l = f.length;
                    while (l--)
                        (c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [],
                            l = g.length;
                            while (l--)
                                (c = g[l]) && f.push(m[l] = c);
                            i(null , g = [], f, a)
                        }
                        l = g.length;
                        while (l--)
                            (c = g[l]) && (f = i ? H(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else
                    g = Et(g === o ? g.splice(d, g.length) : g),
                    i ? i(null , o, g, a) : D.apply(o, g)
            })
        }
        function xt(e) {
            for (var t, n, i, s = e.length, o = r.relative[e[0].type], u = o || r.relative[" "], a = o ? 1 : 0, l = yt(function(e) {
                return e === t
            }, u, !0), c = yt(function(e) {
                return H(t, e) > -1
            }, u, !0), h = [function(e, n, r) {
                var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                return t = null ,
                i
            }
            ]; s > a; a++)
                if (n = r.relative[e[a].type])
                    h = [yt(bt(h), n)];
                else {
                    if (n = r.filter[e[a].type].apply(null , e[a].matches),
                    n[w]) {
                        for (i = ++a; s > i; i++)
                            if (r.relative[e[i].type])
                                break;
                        return St(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, i > a && xt(e.slice(a, i)), s > i && xt(e = e.slice(i)), s > i && gt(e))
                    }
                    h.push(n)
                }
            return bt(h)
        }
        function Tt(e, t) {
            var n = t.length > 0
              , i = e.length > 0
              , s = function(s, o, u, a, l) {
                var c, h, d, v = 0, m = "0", g = s && [], y = [], b = f, w = s || i && r.find.TAG("*", l), E = S += null  == b ? 1 : Math.random() || .1, x = w.length;
                for (l && (f = o !== p && o); m !== x && null  != (c = w[m]); m++) {
                    if (i && c) {
                        h = 0;
                        while (d = e[h++])
                            if (d(c, o, u)) {
                                a.push(c);
                                break
                            }
                        l && (S = E)
                    }
                    n && ((c = !d && c) && v--,
                    s && g.push(c))
                }
                if (v += m,
                n && m !== v) {
                    h = 0;
                    while (d = t[h++])
                        d(g, y, o, u);
                    if (s) {
                        if (v > 0)
                            while (m--)
                                g[m] || y[m] || (y[m] = M.call(a));
                        y = Et(y)
                    }
                    D.apply(a, y),
                    l && !s && y.length > 0 && v + t.length > 1 && ot.uniqueSort(a)
                }
                return l && (S = E,
                f = b),
                g
            }
            ;
            return n ? at(s) : s
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date, E = e.document, S = 0, x = 0, T = ut(), N = ut(), C = ut(), k = function(e, t) {
            return e === t && (c = !0),
            0
        }
        , L = 1 << 31, A = {}.hasOwnProperty, O = [], M = O.pop, _ = O.push, D = O.push, P = O.slice, H = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }
        , B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", j = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", I = F.replace("w", "w#"), q = "\\[" + j + "*(" + F + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]", R = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)", U = new RegExp(j + "+","g"), z = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$","g"), W = new RegExp("^" + j + "*," + j + "*"), X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"), V = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]","g"), $ = new RegExp(R), J = new RegExp("^" + I + "$"), K = {
            ID: new RegExp("^#(" + F + ")"),
            CLASS: new RegExp("^\\.(" + F + ")"),
            TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + q),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)","i"),
            bool: new RegExp("^(?:" + B + ")$","i"),
            needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)","i")
        }, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /[+~]/, tt = /'|\\/g, nt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)","ig"), rt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }
        , it = function() {
            h()
        }
        ;
        try {
            D.apply(O = P.call(E.childNodes), E.childNodes),
            O[E.childNodes.length].nodeType
        } catch (st) {
            D = {
                apply: O.length ? function(e, t) {
                    _.apply(e, P.call(t))
                }
                 : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        n = ot.support = {},
        s = ot.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        h = ot.setDocument = function(e) {
            var t, i, o = e ? e.ownerDocument || e : E;
            return o !== p && 9 === o.nodeType && o.documentElement ? (p = o,
            d = o.documentElement,
            i = o.defaultView,
            i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)),
            v = !s(o),
            n.attributes = ft(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ft(function(e) {
                return e.appendChild(o.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = Y.test(o.getElementsByClassName),
            n.getById = ft(function(e) {
                return d.appendChild(e).id = w,
                !o.getElementsByName || !o.getElementsByName(w).length
            }),
            n.getById ? (r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && v) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            r.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete r.find.ID,
            r.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
             : function(e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = s[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                return v ? t.getElementsByClassName(e) : void 0
            }
            ,
            g = [],
            m = [],
            (n.qsa = Y.test(o.querySelectorAll)) && (ft(function(e) {
                d.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + B + ")"),
                e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
            }),
            ft(function(e) {
                var t = o.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ft(function(e) {
                n.disconnectedMatch = y.call(e, "div"),
                y.call(e, "[s!='']:x"),
                g.push("!=", R)
            }),
            m = m.length && new RegExp(m.join("|")),
            g = g.length && new RegExp(g.join("|")),
            t = Y.test(d.compareDocumentPosition),
            b = t || Y.test(d.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
            }
             : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            k = t ? function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === o || e.ownerDocument === E && b(E, e) ? -1 : t === o || t.ownerDocument === E && b(E, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & r ? -1 : 1)
            }
             : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n, r = 0, i = e.parentNode, s = t.parentNode, u = [e], a = [t];
                if (!i || !s)
                    return e === o ? -1 : t === o ? 1 : i ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
                if (i === s)
                    return ct(e, t);
                n = e;
                while (n = n.parentNode)
                    u.unshift(n);
                n = t;
                while (n = n.parentNode)
                    a.unshift(n);
                while (u[r] === a[r])
                    r++;
                return r ? ct(u[r], a[r]) : u[r] === E ? -1 : a[r] === E ? 1 : 0
            }
            ,
            o) : p
        }
        ,
        ot.matches = function(e, t) {
            return ot(e, null , null , t)
        }
        ,
        ot.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && h(e),
            t = t.replace(V, "='$1']"),
            !(!n.matchesSelector || !v || g && g.test(t) || m && m.test(t)))
                try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            return ot(t, p, null , [e]).length > 0
        }
        ,
        ot.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && h(e),
            b(e, t)
        }
        ,
        ot.attr = function(e, t) {
            (e.ownerDocument || e) !== p && h(e);
            var i = r.attrHandle[t.toLowerCase()]
              , s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
            return void 0 !== s ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null 
        }
        ,
        ot.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ot.uniqueSort = function(e) {
            var t, r = [], i = 0, s = 0;
            if (c = !n.detectDuplicates,
            l = !n.sortStable && e.slice(0),
            e.sort(k),
            c) {
                while (t = e[s++])
                    t === e[s] && (i = r.push(s));
                while (i--)
                    e.splice(r[i], 1)
            }
            return l = null ,
            e
        }
        ,
        i = ot.getText = function(e) {
            var t, n = "", r = 0, s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === s || 4 === s)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += i(t);
            return n
        }
        ,
        r = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(nt, rt),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return K.CHILD.test(e[0]) ? null  : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(nt, rt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                     : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ot.attr(r, e);
                        return null  == i ? "!=" === t : t ? (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3)
                      , o = "last" !== e.slice(-4)
                      , u = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                     : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
                                            return !1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? m.firstChild : m.lastChild],
                            o && y) {
                                l = m[w] || (m[w] = {}),
                                f = l[e] || [],
                                p = f[0] === S && f[1],
                                h = f[0] === S && f[2],
                                c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (1 === c.nodeType && ++h && c === t) {
                                        l[e] = [S, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S)
                                h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (y && ((c[w] || (c[w] = {}))[e] = [S, h]),
                                    c === t))
                                        break;
                            return h -= i,
                            h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                        var r, s = i(e, t), o = s.length;
                        while (o--)
                            r = H(e, s[o]),
                            e[r] = !(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: at(function(e) {
                    var t = []
                      , n = []
                      , r = u(e.replace(z, "$1"));
                    return r[w] ? at(function(e, t, n, i) {
                        var s, o = r(e, null , i, []), u = e.length;
                        while (u--)
                            (s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function(e, i, s) {
                        return t[0] = e,
                        r(t, null , s, n),
                        t[0] = null ,
                        !n.pop()
                    }
                }),
                has: at(function(e) {
                    return function(t) {
                        return ot(e, t).length > 0
                    }
                }),
                contains: at(function(e) {
                    return e = e.replace(nt, rt),
                    function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: at(function(e) {
                    return J.test(e || "") || ot.error("unsupported lang: " + e),
                    e = e.replace(nt, rt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null  == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: dt(function() {
                    return [0]
                }),
                last: dt(function(e, t) {
                    return [t - 1]
                }),
                eq: dt(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: dt(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: dt(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: dt(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: dt(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        r.pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = ht(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = pt(t);
        return mt.prototype = r.filters = r.pseudos,
        r.setFilters = new mt,
        o = ot.tokenize = function(e, t) {
            var n, i, s, o, u, a, f, l = N[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            u = e,
            a = [],
            f = r.preFilter;
            while (u) {
                (!n || (i = W.exec(u))) && (i && (u = u.slice(i[0].length) || u),
                a.push(s = [])),
                n = !1,
                (i = X.exec(u)) && (n = i.shift(),
                s.push({
                    value: n,
                    type: i[0].replace(z, " ")
                }),
                u = u.slice(n.length));
                for (o in r.filter)
                    !(i = K[o].exec(u)) || f[o] && !(i = f[o](i)) || (n = i.shift(),
                    s.push({
                        value: n,
                        type: o,
                        matches: i
                    }),
                    u = u.slice(n.length));
                if (!n)
                    break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        }
        ,
        u = ot.compile = function(e, t) {
            var n, r = [], i = [], s = C[e + " "];
            if (!s) {
                t || (t = o(e)),
                n = t.length;
                while (n--)
                    s = xt(t[n]),
                    s[w] ? r.push(s) : i.push(s);
                s = C(e, Tt(i, r)),
                s.selector = e
            }
            return s
        }
        ,
        a = ot.select = function(e, t, i, s) {
            var a, f, l, c, h, p = "function" == typeof e && e, d = !s && o(e = p.selector || e);
            if (i = i || [],
            1 === d.length) {
                if (f = d[0] = d[0].slice(0),
                f.length > 2 && "ID" === (l = f[0]).type && n.getById && 9 === t.nodeType && v && r.relative[f[1].type]) {
                    if (t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0],
                    !t)
                        return i;
                    p && (t = t.parentNode),
                    e = e.slice(f.shift().value.length)
                }
                a = K.needsContext.test(e) ? 0 : f.length;
                while (a--) {
                    if (l = f[a],
                    r.relative[c = l.type])
                        break;
                    if ((h = r.find[c]) && (s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && vt(t.parentNode) || t))) {
                        if (f.splice(a, 1),
                        e = s.length && gt(f),
                        !e)
                            return D.apply(i, s),
                            i;
                        break
                    }
                }
            }
            return (p || u(e, d))(s, t, !v, i, et.test(e) && vt(t.parentNode) || t),
            i
        }
        ,
        n.sortStable = w.split("").sort(k).join("") === w,
        n.detectDuplicates = !!c,
        h(),
        n.sortDetached = ft(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        }),
        ft(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ft(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || lt("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        ft(function(e) {
            return null  == e.getAttribute("disabled")
        }) || lt(B, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null 
        }),
        ot
    }(e);
    h.find = y,
    h.expr = y.selectors,
    h.expr[":"] = h.expr.pseudos,
    h.unique = y.uniqueSort,
    h.text = y.getText,
    h.isXMLDoc = y.isXML,
    h.contains = y.contains;
    var b = h.expr.match.needsContext
      , w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , E = /^.[^:#\[\.,]*$/;
    h.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? h.find.matchesSelector(r, e) ? [r] : [] : h.find.matches(e, h.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    h.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(h(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (h.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                h.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? h.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(S(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(S(this, e || [], !0))
        },
        is: function(e) {
            return !!S(this, "string" == typeof e && b.test(e) ? h(e) : e || [], !1).length
        }
    });
    var x, T = e.document, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = h.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : N.exec(e),
            !n || !n[1] && t)
                return !t || t.jquery ? (t || x).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof h ? t[0] : t,
                h.merge(this, h.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0)),
                w.test(n[1]) && h.isPlainObject(t))
                    for (n in t)
                        h.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (r = T.getElementById(n[2]),
            r && r.parentNode) {
                if (r.id !== n[2])
                    return x.find(e);
                this.length = 1,
                this[0] = r
            }
            return this.context = T,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : h.isFunction(e) ? "undefined" != typeof x.ready ? x.ready(e) : e(h) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        h.makeArray(e, this))
    }
    ;
    C.prototype = h.fn,
    x = h(T);
    var k = /^(?:parents|prev(?:Until|All))/
      , L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    h.extend({
        dir: function(e, t, n) {
            var r = []
              , i = e[t];
            while (i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !h(i).is(n)))
                1 === i.nodeType && r.push(i),
                i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    h.fn.extend({
        has: function(e) {
            var t, n = h(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (h.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, s = [], o = b.test(e) || "string" != typeof e ? h(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && h.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? h.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? h.inArray(this[0], h(e)) : h.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(h.unique(h.merge(this.get(), h(e, t))))
        },
        addBack: function(e) {
            return this.add(null  == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    h.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null 
        },
        parents: function(e) {
            return h.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h.dir(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return h.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return h.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return h.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return h.sibling(e.firstChild)
        },
        contents: function(e) {
            return h.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : h.merge([], e.childNodes)
        }
    }, function(e, t) {
        h.fn[e] = function(n, r) {
            var i = h.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = h.filter(r, i)),
            this.length > 1 && (L[e] || (i = h.unique(i)),
            k.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var O = /\S+/g
      , M = {};
    h.Callbacks = function(e) {
        e = "string" == typeof e ? M[e] || _(e) : h.extend({}, e);
        var t, n, r, i, s, o, u = [], a = !e.once && [], f = function(c) {
            for (n = e.memory && c,
            r = !0,
            s = o || 0,
            o = 0,
            i = u.length,
            t = !0; u && i > s; s++)
                if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            t = !1,
            u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
        }
        , l = {
            add: function() {
                if (u) {
                    var r = u.length;
                    !function s(t) {
                        h.each(t, function(t, n) {
                            var r = h.type(n);
                            "function" === r ? e.unique && l.has(n) || u.push(n) : n && n.length && "string" !== r && s(n)
                        })
                    }(arguments),
                    t ? i = u.length : n && (o = r,
                    f(n))
                }
                return this
            },
            remove: function() {
                return u && h.each(arguments, function(e, n) {
                    var r;
                    while ((r = h.inArray(n, u, r)) > -1)
                        u.splice(r, 1),
                        t && (i >= r && i--,
                        s >= r && s--)
                }),
                this
            },
            has: function(e) {
                return e ? h.inArray(e, u) > -1 : !!u && !!u.length
            },
            empty: function() {
                return u = [],
                i = 0,
                this
            },
            disable: function() {
                return u = a = n = void 0,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return a = void 0,
                n || l.disable(),
                this
            },
            locked: function() {
                return !a
            },
            fireWith: function(e, n) {
                return !u || r && !a || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                t ? a.push(n) : f(n)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ,
    h.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", h.Callbacks("once memory"), "resolved"], ["reject", "fail", h.Callbacks("once memory"), "rejected"], ["notify", "progress", h.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return h.Deferred(function(n) {
                        h.each(t, function(t, s) {
                            var o = h.isFunction(e[t]) && e[t];
                            i[s[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && h.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                            })
                        }),
                        e = null 
                    }).promise()
                },
                promise: function(e) {
                    return null  != e ? h.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            h.each(t, function(e, s) {
                var o = s[2]
                  , u = s[3];
                r[s[1]] = o.add,
                u && o.add(function() {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[s[0] + "With"] = o.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = r.call(arguments), i = n.length, s = 1 !== i || e && h.isFunction(e.promise) ? i : 0, o = 1 === s ? e : h.Deferred(), u = function(e, t, n) {
                return function(i) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? r.call(arguments) : i,
                    n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                }
            }
            , a, f, l;
            if (i > 1)
                for (a = new Array(i),
                f = new Array(i),
                l = new Array(i); i > t; t++)
                    n[t] && h.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s;
            return s || o.resolveWith(l, n),
            o.promise()
        }
    });
    var D;
    h.fn.ready = function(e) {
        return h.ready.promise().done(e),
        this
    }
    ,
    h.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? h.readyWait++ : h.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--h.readyWait : !h.isReady) {
                if (!T.body)
                    return setTimeout(h.ready);
                h.isReady = !0,
                e !== !0 && --h.readyWait > 0 || (D.resolveWith(T, [h]),
                h.fn.triggerHandler && (h(T).triggerHandler("ready"),
                h(T).off("ready")))
            }
        }
    }),
    h.ready.promise = function(t) {
        if (!D)
            if (D = h.Deferred(),
            "complete" === T.readyState)
                setTimeout(h.ready);
            else if (T.addEventListener)
                T.addEventListener("DOMContentLoaded", H, !1),
                e.addEventListener("load", H, !1);
            else {
                T.attachEvent("onreadystatechange", H),
                e.attachEvent("onload", H);
                var n = !1;
                try {
                    n = null  == e.frameElement && T.documentElement
                } catch (r) {}
                n && n.doScroll && !function i() {
                    if (!h.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        P(),
                        h.ready()
                    }
                }()
            }
        return D.promise(t)
    }
    ;
    var B = "undefined", j;
    for (j in h(l))
        break;
    l.ownLast = "0" !== j,
    l.inlineBlockNeedsLayout = !1,
    h(function() {
        var e, t, n, r;
        n = T.getElementsByTagName("body")[0],
        n && n.style && (t = T.createElement("div"),
        r = T.createElement("div"),
        r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(r).appendChild(t),
        typeof t.style.zoom !== B && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        l.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(r))
    }),
    function() {
        var e = T.createElement("div");
        if (null  == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                l.deleteExpando = !1
            }
        }
        e = null 
    }(),
    h.acceptData = function(e) {
        var t = h.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }
    ;
    var F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , I = /([A-Z])/g;
    h.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? h.cache[e[h.expando]] : e[h.expando],
            !!e && !R(e)
        },
        data: function(e, t, n) {
            return U(e, t, n)
        },
        removeData: function(e, t) {
            return z(e, t)
        },
        _data: function(e, t, n) {
            return U(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return z(e, t, !0)
        }
    }),
    h.fn.extend({
        data: function(e, t) {
            var n, r, i, s = this[0], o = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (i = h.data(s),
                1 === s.nodeType && !h._data(s, "parsedAttrs"))) {
                    n = o.length;
                    while (n--)
                        o[n] && (r = o[n].name,
                        0 === r.indexOf("data-") && (r = h.camelCase(r.slice(5)),
                        q(s, r, i[r])));
                    h._data(s, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                h.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                h.data(this, e, t)
            }) : s ? q(s, e, h.data(s, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                h.removeData(this, e)
            })
        }
    }),
    h.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue",
            r = h._data(e, t),
            n && (!r || h.isArray(n) ? r = h._data(e, t, h.makeArray(n)) : r.push(n)),
            r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = h.queue(e, t)
              , r = n.length
              , i = n.shift()
              , s = h._queueHooks(e, t)
              , o = function() {
                h.dequeue(e, t)
            }
            ;
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete s.stop,
            i.call(e, o, s)),
            !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return h._data(e, n) || h._data(e, n, {
                empty: h.Callbacks("once memory").add(function() {
                    h._removeData(e, t + "queue"),
                    h._removeData(e, n)
                })
            })
        }
    }),
    h.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? h.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = h.queue(this, e, t);
                h._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && h.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                h.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = h.Deferred(), s = this, o = this.length, u = function() {
                --r || i.resolveWith(s, [s])
            }
            ;
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (o--)
                n = h._data(s[o], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(u));
            return u(),
            i.promise(t)
        }
    });
    var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , X = ["Top", "Right", "Bottom", "Left"]
      , V = function(e, t) {
        return e = t || e,
        "none" === h.css(e, "display") || !h.contains(e.ownerDocument, e)
    }
      , $ = h.access = function(e, t, n, r, i, s, o) {
        var u = 0
          , a = e.length
          , f = null  == n;
        if ("object" === h.type(n)) {
            i = !0;
            for (u in n)
                h.access(e, t, u, n[u], !0, s, o)
        } else if (void 0 !== r && (i = !0,
        h.isFunction(r) || (o = !0),
        f && (o ? (t.call(e, r),
        t = null ) : (f = t,
        t = function(e, t, n) {
            return f.call(h(e), n)
        }
        )),
        t))
            for (; a > u; u++)
                t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
        return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
    }
      , J = /^(?:checkbox|radio)$/i;
    !function() {
        var e = T.createElement("input")
          , t = T.createElement("div")
          , n = T.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        l.leadingWhitespace = 3 === t.firstChild.nodeType,
        l.tbody = !t.getElementsByTagName("tbody").length,
        l.htmlSerialize = !!t.getElementsByTagName("link").length,
        l.html5Clone = "<:nav></:nav>" !== T.createElement("nav").cloneNode(!0).outerHTML,
        e.type = "checkbox",
        e.checked = !0,
        n.appendChild(e),
        l.appendChecked = e.checked,
        t.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        n.appendChild(t),
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        l.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        l.noCloneEvent = !0,
        t.attachEvent && (t.attachEvent("onclick", function() {
            l.noCloneEvent = !1
        }),
        t.cloneNode(!0).click()),
        null  == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                l.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, r = T.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (l[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"),
            l[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null 
    }();
    var K = /^(?:input|select|textarea)$/i
      , Q = /^key/
      , G = /^(?:mouse|pointer|contextmenu)|click/
      , Y = /^(?:focusinfocus|focusoutblur)$/
      , Z = /^([^.]*)(?:\.(.+)|)$/;
    h.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, p, d, v, m, g = h._data(e);
            if (g) {
                n.handler && (a = n,
                n = a.handler,
                i = a.selector),
                n.guid || (n.guid = h.guid++),
                (o = g.events) || (o = g.events = {}),
                (l = g.handle) || (l = g.handle = function(e) {
                    return typeof h === B || e && h.event.triggered === e.type ? void 0 : h.event.dispatch.apply(l.elem, arguments)
                }
                ,
                l.elem = e),
                t = (t || "").match(O) || [""],
                u = t.length;
                while (u--)
                    s = Z.exec(t[u]) || [],
                    d = m = s[1],
                    v = (s[2] || "").split(".").sort(),
                    d && (f = h.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = h.event.special[d] || {},
                    c = h.extend({
                        type: d,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && h.expr.match.needsContext.test(i),
                        namespace: v.join(".")
                    }, a),
                    (p = o[d]) || (p = o[d] = [],
                    p.delegateCount = 0,
                    f.setup && f.setup.call(e, r, v, l) !== !1 || (e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l))),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    h.event.global[d] = !0);
                e = null 
            }
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, p, d, v, m, g = h.hasData(e) && h._data(e);
            if (g && (l = g.events)) {
                t = (t || "").match(O) || [""],
                f = t.length;
                while (f--)
                    if (u = Z.exec(t[f]) || [],
                    d = m = u[1],
                    v = (u[2] || "").split(".").sort(),
                    d) {
                        c = h.event.special[d] || {},
                        d = (r ? c.delegateType : c.bindType) || d,
                        p = l[d] || [],
                        u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = s = p.length;
                        while (s--)
                            o = p[s],
                            !i && m !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (p.splice(s, 1),
                            o.selector && p.delegateCount--,
                            c.remove && c.remove.call(e, o));
                        a && !p.length && (c.teardown && c.teardown.call(e, v, g.handle) !== !1 || h.removeEvent(e, d, g.handle),
                        delete l[d])
                    } else
                        for (d in l)
                            h.event.remove(e, d + t[f], n, r, !0);
                h.isEmptyObject(l) && (delete g.handle,
                h._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var s, o, u, a, l, c, p, d = [r || T], v = f.call(t, "type") ? t.type : t, m = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (u = c = r = r || T,
            3 !== r.nodeType && 8 !== r.nodeType && !Y.test(v + h.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."),
            v = m.shift(),
            m.sort()),
            o = v.indexOf(":") < 0 && "on" + v,
            t = t[h.expando] ? t : new h.Event(v,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = m.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            t.result = void 0,
            t.target || (t.target = r),
            n = null  == n ? [t] : h.makeArray(n, [t]),
            l = h.event.special[v] || {},
            i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !h.isWindow(r)) {
                    for (a = l.delegateType || v,
                    Y.test(a + v) || (u = u.parentNode); u; u = u.parentNode)
                        d.push(u),
                        c = u;
                    c === (r.ownerDocument || T) && d.push(c.defaultView || c.parentWindow || e)
                }
                p = 0;
                while ((u = d[p++]) && !t.isPropagationStopped())
                    t.type = p > 1 ? a : l.bindType || v,
                    s = (h._data(u, "events") || {})[t.type] && h._data(u, "handle"),
                    s && s.apply(u, n),
                    s = o && u[o],
                    s && s.apply && h.acceptData(u) && (t.result = s.apply(u, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = v,
                !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && h.acceptData(r) && o && r[v] && !h.isWindow(r)) {
                    c = r[o],
                    c && (r[o] = null ),
                    h.event.triggered = v;
                    try {
                        r[v]()
                    } catch (g) {}
                    h.event.triggered = void 0,
                    c && (r[o] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = h.event.fix(e);
            var t, n, i, s, o, u = [], a = r.call(arguments), f = (h._data(this, "events") || {})[e.type] || [], l = h.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = h.event.handlers.call(this, e, f),
                t = 0;
                while ((s = u[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem,
                    o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                        e.data = i.data,
                        n = ((h.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a),
                        void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
                        e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, s, o = [], u = t.delegateCount, a = e.target;
            if (u && a.nodeType && (!e.button || "click" !== e.type))
                for (; a != this; a = a.parentNode || this)
                    if (1 === a.nodeType && (a.disabled !== !0 || "click" !== e.type)) {
                        for (i = [],
                        s = 0; u > s; s++)
                            r = t[s],
                            n = r.selector + " ",
                            void 0 === i[n] && (i[n] = r.needsContext ? h(n, this).index(a) >= 0 : h.find(n, this, null , [a]).length),
                            i[n] && i.push(r);
                        i.length && o.push({
                            elem: a,
                            handlers: i
                        })
                    }
            return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }),
            o
        },
        fix: function(e) {
            if (e[h.expando])
                return e;
            var t, n, r, i = e.type, s = e, o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = G.test(i) ? this.mouseHooks : Q.test(i) ? this.keyHooks : {}),
            r = o.props ? this.props.concat(o.props) : this.props,
            e = new h.Event(s),
            t = r.length;
            while (t--)
                n = r[t],
                e[n] = s[n];
            return e.target || (e.target = s.srcElement || T),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null  == e.which && (e.which = null  != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button, o = t.fromElement;
                return null  == e.pageX && null  != t.clientX && (r = e.target.ownerDocument || T,
                i = r.documentElement,
                n = r.body,
                e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
                e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== nt() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === nt() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return h.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return h.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = h.extend(new h.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? h.event.trigger(i, null , t) : h.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    h.removeEvent = T.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
     : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === B && (e[r] = null ),
        e.detachEvent(r, n))
    }
    ,
    h.Event = function(e, t) {
        return this instanceof h.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? et : tt) : this.type = e,
        t && h.extend(this, t),
        this.timeStamp = e && e.timeStamp || h.now(),
        void (this[h.expando] = !0)) : new h.Event(e,t)
    }
    ,
    h.Event.prototype = {
        isDefaultPrevented: tt,
        isPropagationStopped: tt,
        isImmediatePropagationStopped: tt,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = et,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = et,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = et,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    h.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        h.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj;
                return (!i || i !== r && !h.contains(r, i)) && (e.type = s.origType,
                n = s.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    l.submitBubbles || (h.event.special.submit = {
        setup: function() {
            return h.nodeName(this, "form") ? !1 : void h.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = h.nodeName(t, "input") || h.nodeName(t, "button") ? t.form : void 0;
                n && !h._data(n, "submitBubbles") && (h.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                h._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && h.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return h.nodeName(this, "form") ? !1 : void h.event.remove(this, "._submit")
        }
    }),
    l.changeBubbles || (h.event.special.change = {
        setup: function() {
            return K.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (h.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            h.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                h.event.simulate("change", this, e, !0)
            })),
            !1) : void h.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                K.test(t.nodeName) && !h._data(t, "changeBubbles") && (h.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || h.event.simulate("change", this.parentNode, e, !0)
                }),
                h._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return h.event.remove(this, "._change"),
            !K.test(this.nodeName)
        }
    }),
    l.focusinBubbles || h.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            h.event.simulate(t, e.target, h.event.fix(e), !0)
        }
        ;
        h.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = h._data(r, t);
                i || r.addEventListener(e, n, !0),
                h._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = h._data(r, t) - 1;
                i ? h._data(r, t, i) : (r.removeEventListener(e, n, !0),
                h._removeData(r, t))
            }
        }
    }),
    h.fn.extend({
        on: function(e, t, n, r, i) {
            var s, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t,
                t = void 0);
                for (s in e)
                    this.on(s, t, n, e[s], i);
                return this
            }
            if (null  == n && null  == r ? (r = t,
            n = t = void 0) : null  == r && ("string" == typeof t ? (r = n,
            n = void 0) : (r = n,
            n = t,
            t = void 0)),
            r === !1)
                r = tt;
            else if (!r)
                return this;
            return 1 === i && (o = r,
            r = function(e) {
                return h().off(e),
                o.apply(this, arguments)
            }
            ,
            r.guid = o.guid || (o.guid = h.guid++)),
            this.each(function() {
                h.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                h(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t,
            t = void 0),
            n === !1 && (n = tt),
            this.each(function() {
                h.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                h.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? h.event.trigger(e, t, n, !0) : void 0
        }
    });
    var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , st = / jQuery\d+="(?:null|\d+)"/g
      , ot = new RegExp("<(?:" + it + ")[\\s/>]","i")
      , ut = /^\s+/
      , at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , ft = /<([\w:]+)/
      , lt = /<tbody/i
      , ct = /<|&#?\w+;/
      , ht = /<(?:script|style|link)/i
      , pt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , dt = /^$|\/(?:java|ecma)script/i
      , vt = /^true\/(.*)/
      , mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , gt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , yt = rt(T)
      , bt = yt.appendChild(T.createElement("div"));
    gt.optgroup = gt.option,
    gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead,
    gt.th = gt.td,
    h.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = h.contains(e.ownerDocument, e);
            if (l.html5Clone || h.isXMLDoc(e) || !ot.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (bt.innerHTML = e.outerHTML,
            bt.removeChild(s = bt.firstChild)),
            !(l.noCloneEvent && l.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || h.isXMLDoc(e)))
                for (r = wt(s),
                u = wt(e),
                o = 0; null  != (i = u[o]); ++o)
                    r[o] && kt(i, r[o]);
            if (t)
                if (n)
                    for (u = u || wt(e),
                    r = r || wt(s),
                    o = 0; null  != (i = u[o]); o++)
                        Ct(i, r[o]);
                else
                    Ct(e, s);
            return r = wt(s, "script"),
            r.length > 0 && Nt(r, !a && wt(e, "script")),
            r = u = i = null ,
            s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, s, o, u, a, f, c, p = e.length, d = rt(t), v = [], m = 0; p > m; m++)
                if (s = e[m],
                s || 0 === s)
                    if ("object" === h.type(s))
                        h.merge(v, s.nodeType ? [s] : s);
                    else if (ct.test(s)) {
                        u = u || d.appendChild(t.createElement("div")),
                        a = (ft.exec(s) || ["", ""])[1].toLowerCase(),
                        c = gt[a] || gt._default,
                        u.innerHTML = c[1] + s.replace(at, "<$1></$2>") + c[2],
                        i = c[0];
                        while (i--)
                            u = u.lastChild;
                        if (!l.leadingWhitespace && ut.test(s) && v.push(t.createTextNode(ut.exec(s)[0])),
                        !l.tbody) {
                            s = "table" !== a || lt.test(s) ? "<table>" !== c[1] || lt.test(s) ? 0 : u : u.firstChild,
                            i = s && s.childNodes.length;
                            while (i--)
                                h.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                        }
                        h.merge(v, u.childNodes),
                        u.textContent = "";
                        while (u.firstChild)
                            u.removeChild(u.firstChild);
                        u = d.lastChild
                    } else
                        v.push(t.createTextNode(s));
            u && d.removeChild(u),
            l.appendChecked || h.grep(wt(v, "input"), Et),
            m = 0;
            while (s = v[m++])
                if ((!r || -1 === h.inArray(s, r)) && (o = h.contains(s.ownerDocument, s),
                u = wt(d.appendChild(s), "script"),
                o && Nt(u),
                n)) {
                    i = 0;
                    while (s = u[i++])
                        dt.test(s.type || "") && n.push(s)
                }
            return u = null ,
            d
        },
        cleanData: function(e, t) {
            for (var r, i, s, o, u = 0, a = h.expando, f = h.cache, c = l.deleteExpando, p = h.event.special; null  != (r = e[u]); u++)
                if ((t || h.acceptData(r)) && (s = r[a],
                o = s && f[s])) {
                    if (o.events)
                        for (i in o.events)
                            p[i] ? h.event.remove(r, i) : h.removeEvent(r, i, o.handle);
                    f[s] && (delete f[s],
                    c ? delete r[a] : typeof r.removeAttribute !== B ? r.removeAttribute(a) : r[a] = null ,
                    n.push(s))
                }
        }
    }),
    h.fn.extend({
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? h.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(e))
            }, null , e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = St(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = St(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? h.filter(e, this) : this, i = 0; null  != (n = r[i]); i++)
                t || 1 !== n.nodeType || h.cleanData(wt(n)),
                n.parentNode && (t && h.contains(n.ownerDocument, n) && Nt(wt(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null  != (e = this[t]); t++) {
                1 === e.nodeType && h.cleanData(wt(e, !1));
                while (e.firstChild)
                    e.removeChild(e.firstChild);
                e.options && h.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null  == e ? !1 : e,
            t = null  == t ? e : t,
            this.map(function() {
                return h.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(st, "") : void 0;
                if (!("string" != typeof e || ht.test(e) || !l.htmlSerialize && ot.test(e) || !l.leadingWhitespace && ut.test(e) || gt[(ft.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(at, "<$1></$2>");
                    try {
                        for (; r > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (h.cleanData(wt(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null , e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                h.cleanData(wt(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, s, o, u, a, f = 0, c = this.length, p = this, d = c - 1, v = e[0], m = h.isFunction(v);
            if (m || c > 1 && "string" == typeof v && !l.checkClone && pt.test(v))
                return this.each(function(n) {
                    var r = p.eq(n);
                    m && (e[0] = v.call(this, n, r.html())),
                    r.domManip(e, t)
                });
            if (c && (a = h.buildFragment(e, this[0].ownerDocument, !1, this),
            n = a.firstChild,
            1 === a.childNodes.length && (a = n),
            n)) {
                for (o = h.map(wt(a, "script"), xt),
                s = o.length; c > f; f++)
                    r = a,
                    f !== d && (r = h.clone(r, !0, !0),
                    s && h.merge(o, wt(r, "script"))),
                    t.call(this[f], r, f);
                if (s)
                    for (u = o[o.length - 1].ownerDocument,
                    h.map(o, Tt),
                    f = 0; s > f; f++)
                        r = o[f],
                        dt.test(r.type || "") && !h._data(r, "globalEval") && h.contains(u, r) && (r.src ? h._evalUrl && h._evalUrl(r.src) : h.globalEval((r.text || r.textContent || r.innerHTML || "").replace(mt, "")));
                a = n = null 
            }
            return this
        }
    }),
    h.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        h.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = h(e), u = o.length - 1; u >= r; r++)
                n = r === u ? this : this.clone(!0),
                h(o[r])[t](n),
                s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Lt, At = {};
    !function() {
        var e;
        l.shrinkWrapBlocks = function() {
            if (null  != e)
                return e;
            e = !1;
            var t, n, r;
            return n = T.getElementsByTagName("body")[0],
            n && n.style ? (t = T.createElement("div"),
            r = T.createElement("div"),
            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(r).appendChild(t),
            typeof t.style.zoom !== B && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(T.createElement("div")).style.width = "5px",
            e = 3 !== t.offsetWidth),
            n.removeChild(r),
            e) : void 0
        }
    }();
    var _t = /^margin/, Dt = new RegExp("^(" + W + ")(?!px)[a-z%]+$","i"), Pt, Ht, Bt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (Pt = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null ) : e.getComputedStyle(t, null )
    }
    ,
    Ht = function(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || Pt(e),
        o = n ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== o || h.contains(e.ownerDocument, e) || (o = h.style(e, t)),
        Dt.test(o) && _t.test(t) && (r = u.width,
        i = u.minWidth,
        s = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = o,
        o = n.width,
        u.width = r,
        u.minWidth = i,
        u.maxWidth = s)),
        void 0 === o ? o : o + ""
    }
    ) : T.documentElement.currentStyle && (Pt = function(e) {
        return e.currentStyle
    }
    ,
    Ht = function(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || Pt(e),
        o = n ? n[t] : void 0,
        null  == o && u && u[t] && (o = u[t]),
        Dt.test(o) && !Bt.test(t) && (r = u.left,
        i = e.runtimeStyle,
        s = i && i.left,
        s && (i.left = e.currentStyle.left),
        u.left = "fontSize" === t ? "1em" : o,
        o = u.pixelLeft + "px",
        u.left = r,
        s && (i.left = s)),
        void 0 === o ? o : o + "" || "auto"
    }
    ),
    !function() {
        var t, n, r, i, s, o, u;
        if (t = T.createElement("div"),
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        r = t.getElementsByTagName("a")[0],
        n = r && r.style) {
            n.cssText = "float:left;opacity:.5",
            l.opacity = "0.5" === n.opacity,
            l.cssFloat = !!n.cssFloat,
            t.style.backgroundClip = "content-box",
            t.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === t.style.backgroundClip,
            l.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing,
            h.extend(l, {
                reliableHiddenOffsets: function() {
                    return null  == o && a(),
                    o
                },
                boxSizingReliable: function() {
                    return null  == s && a(),
                    s
                },
                pixelPosition: function() {
                    return null  == i && a(),
                    i
                },
                reliableMarginRight: function() {
                    return null  == u && a(),
                    u
                }
            });
            function a() {
                var t, n, r, a;
                n = T.getElementsByTagName("body")[0],
                n && n.style && (t = T.createElement("div"),
                r = T.createElement("div"),
                r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                n.appendChild(r).appendChild(t),
                t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                i = s = !1,
                u = !0,
                e.getComputedStyle && (i = "1%" !== (e.getComputedStyle(t, null ) || {}).top,
                s = "4px" === (e.getComputedStyle(t, null ) || {
                    width: "4px"
                }).width,
                a = t.appendChild(T.createElement("div")),
                a.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                a.style.marginRight = a.style.width = "0",
                t.style.width = "1px",
                u = !parseFloat((e.getComputedStyle(a, null ) || {}).marginRight),
                t.removeChild(a)),
                t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                a = t.getElementsByTagName("td"),
                a[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                o = 0 === a[0].offsetHeight,
                o && (a[0].style.display = "",
                a[1].style.display = "none",
                o = 0 === a[0].offsetHeight),
                n.removeChild(r))
            }
        }
    }(),
    h.swap = function(e, t, n, r) {
        var i, s, o = {};
        for (s in t)
            o[s] = e.style[s],
            e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t)
            e.style[s] = o[s];
        return i
    }
    ;
    var Ft = /alpha\([^)]*\)/i
      , It = /opacity\s*=\s*([^)]*)/
      , qt = /^(none|table(?!-c[ea]).+)/
      , Rt = new RegExp("^(" + W + ")(.*)$","i")
      , Ut = new RegExp("^([+-])=(" + W + ")","i")
      , zt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Wt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Xt = ["Webkit", "O", "Moz", "ms"];
    h.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ht(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, s, o, u = h.camelCase(t), a = e.style;
                if (t = h.cssProps[u] || (h.cssProps[u] = Vt(a, u)),
                o = h.cssHooks[t] || h.cssHooks[u],
                void 0 === n)
                    return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : a[t];
                if (s = typeof n,
                "string" === s && (i = Ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(h.css(e, t)),
                s = "number"),
                null  != n && n === n && ("number" !== s || h.cssNumber[u] || (n += "px"),
                l.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (a[t] = "inherit"),
                !(o && "set" in o && void 0 === (n = o.set(e, n, r)))))
                    try {
                        a[t] = n
                    } catch (f) {}
            }
        },
        css: function(e, t, n, r) {
            var i, s, o, u = h.camelCase(t);
            return t = h.cssProps[u] || (h.cssProps[u] = Vt(e.style, u)),
            o = h.cssHooks[t] || h.cssHooks[u],
            o && "get" in o && (s = o.get(e, !0, n)),
            void 0 === s && (s = Ht(e, t, r)),
            "normal" === s && t in Wt && (s = Wt[t]),
            "" === n || n ? (i = parseFloat(s),
            n === !0 || h.isNumeric(i) ? i || 0 : s) : s
        }
    }),
    h.each(["height", "width"], function(e, t) {
        h.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? qt.test(h.css(e, "display")) && 0 === e.offsetWidth ? h.swap(e, zt, function() {
                    return Qt(e, t, r)
                }) : Qt(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && Pt(e);
                return Jt(e, n, r ? Kt(e, t, r, l.boxSizing && "border-box" === h.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    l.opacity || (h.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = h.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , s = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === h.trim(s.replace(Ft, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = Ft.test(s) ? s.replace(Ft, i) : s + " " + i)
        }
    }),
    h.cssHooks.marginRight = jt(l.reliableMarginRight, function(e, t) {
        return t ? h.swap(e, {
            display: "inline-block"
        }, Ht, [e, "marginRight"]) : void 0
    }),
    h.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        h.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + X[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        },
        _t.test(e) || (h.cssHooks[e + t].set = Jt)
    }),
    h.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, s = {}, o = 0;
                if (h.isArray(t)) {
                    for (r = Pt(e),
                    i = t.length; i > o; o++)
                        s[t[o]] = h.css(e, t[o], !1, r);
                    return s
                }
                return void 0 !== n ? h.style(e, t, n) : h.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return $t(this, !0)
        },
        hide: function() {
            return $t(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                V(this) ? h(this).show() : h(this).hide()
            })
        }
    }),
    h.Tween = Gt,
    Gt.prototype = {
        constructor: Gt,
        init: function(e, t, n, r, i, s) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = s || (h.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Gt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Gt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Gt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = h.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Gt.propHooks._default.set(this),
            this
        }
    },
    Gt.prototype.init.prototype = Gt.prototype,
    Gt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null  == e.elem[e.prop] || e.elem.style && null  != e.elem.style[e.prop] ? (t = h.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                h.fx.step[e.prop] ? h.fx.step[e.prop](e) : e.elem.style && (null  != e.elem.style[h.cssProps[e.prop]] || h.cssHooks[e.prop]) ? h.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    h.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    h.fx = Gt.prototype.init,
    h.fx.step = {};
    var Yt, Zt, en = /^(?:toggle|show|hide)$/, tn = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$","i"), nn = /queueHooks$/, rn = [fn], sn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = tn.exec(t)
              , s = i && i[3] || (h.cssNumber[e] ? "" : "px")
              , o = (h.cssNumber[e] || "px" !== s && +r) && tn.exec(h.css(n.elem, e))
              , u = 1
              , a = 20;
            if (o && o[3] !== s) {
                s = s || o[3],
                i = i || [],
                o = +r || 1;
                do
                    u = u || ".5",
                    o /= u,
                    h.style(n.elem, e, o + s);
                while (u !== (u = n.cur() / r) && 1 !== u && --a)
            }
            return i && (o = n.start = +o || +r || 0,
            n.unit = s,
            n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    h.Animation = h.extend(cn, {
        tweener: function(e, t) {
            h.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                sn[n] = sn[n] || [],
                sn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? rn.unshift(e) : rn.push(e)
        }
    }),
    h.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? h.extend({}, e) : {
            complete: n || !n && t || h.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !h.isFunction(t) && t
        };
        return r.duration = h.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in h.fx.speeds ? h.fx.speeds[r.duration] : h.fx.speeds._default,
        (null  == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            h.isFunction(r.old) && r.old.call(this),
            r.queue && h.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    h.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = h.isEmptyObject(e)
              , s = h.speed(t, n, r)
              , o = function() {
                var t = cn(this, h.extend({}, e), s);
                (i || h._data(this, "finish")) && t.stop(!0)
            }
            ;
            return o.finish = o,
            i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            }
            ;
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null  != e && e + "queueHooks"
                  , s = h.timers
                  , o = h._data(this);
                if (i)
                    o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o)
                        o[i] && o[i].stop && nn.test(i) && r(o[i]);
                for (i = s.length; i--; )
                    s[i].elem !== this || null  != e && s[i].queue !== e || (s[i].anim.stop(n),
                    t = !1,
                    s.splice(i, 1));
                (t || !n) && h.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = h._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = h.timers, o = r ? r.length : 0;
                for (n.finish = !0,
                h.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = s.length; t--; )
                    s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0),
                    s.splice(t, 1));
                for (t = 0; o > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    h.each(["toggle", "show", "hide"], function(e, t) {
        var n = h.fn[t];
        h.fn[t] = function(e, r, i) {
            return null  == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(un(t, !0), e, r, i)
        }
    }),
    h.each({
        slideDown: un("show"),
        slideUp: un("hide"),
        slideToggle: un("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        h.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    h.timers = [],
    h.fx.tick = function() {
        var e, t = h.timers, n = 0;
        for (Yt = h.now(); n < t.length; n++)
            e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
        t.length || h.fx.stop(),
        Yt = void 0
    }
    ,
    h.fx.timer = function(e) {
        h.timers.push(e),
        e() ? h.fx.start() : h.timers.pop()
    }
    ,
    h.fx.interval = 13,
    h.fx.start = function() {
        Zt || (Zt = setInterval(h.fx.tick, h.fx.interval))
    }
    ,
    h.fx.stop = function() {
        clearInterval(Zt),
        Zt = null 
    }
    ,
    h.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    h.fn.delay = function(e, t) {
        return e = h.fx ? h.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e, t, n, r, i;
        t = T.createElement("div"),
        t.setAttribute("className", "t"),
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        r = t.getElementsByTagName("a")[0],
        n = T.createElement("select"),
        i = n.appendChild(T.createElement("option")),
        e = t.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px",
        l.getSetAttribute = "t" !== t.className,
        l.style = /top/.test(r.getAttribute("style")),
        l.hrefNormalized = "/a" === r.getAttribute("href"),
        l.checkOn = !!e.value,
        l.optSelected = i.selected,
        l.enctype = !!T.createElement("form").enctype,
        n.disabled = !0,
        l.optDisabled = !i.disabled,
        e = T.createElement("input"),
        e.setAttribute("value", ""),
        l.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        l.radioValue = "t" === e.value
    }();
    var hn = /\r/g;
    h.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            if (arguments.length)
                return r = h.isFunction(e),
                this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, h(this).val()) : e,
                    null  == i ? i = "" : "number" == typeof i ? i += "" : h.isArray(i) && (i = h.map(i, function(e) {
                        return null  == e ? "" : e + ""
                    })),
                    t = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()],
                    t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
            if (i)
                return t = h.valHooks[i.type] || h.valHooks[i.nodeName.toLowerCase()],
                t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                "string" == typeof n ? n.replace(hn, "") : null  == n ? "" : n)
        }
    }),
    h.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = h.find.attr(e, "value");
                    return null  != t ? t : h.trim(h.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, o = s ? null  : [], u = s ? i + 1 : r.length, a = 0 > i ? u : s ? i : 0; u > a; a++)
                        if (n = r[a],
                        !(!n.selected && a !== i || (l.optDisabled ? n.disabled : null  !== n.getAttribute("disabled")) || n.parentNode.disabled && h.nodeName(n.parentNode, "optgroup"))) {
                            if (t = h(n).val(),
                            s)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options, s = h.makeArray(t), o = i.length;
                    while (o--)
                        if (r = i[o],
                        h.inArray(h.valHooks.option.get(r), s) >= 0)
                            try {
                                r.selected = n = !0
                            } catch (u) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    h.each(["radio", "checkbox"], function() {
        h.valHooks[this] = {
            set: function(e, t) {
                return h.isArray(t) ? e.checked = h.inArray(h(e).val(), t) >= 0 : void 0
            }
        },
        l.checkOn || (h.valHooks[this].get = function(e) {
            return null  === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var pn, dn, vn = h.expr.attrHandle, mn = /^(?:checked|selected)$/i, gn = l.getSetAttribute, yn = l.input;
    h.fn.extend({
        attr: function(e, t) {
            return $(this, h.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                h.removeAttr(this, e)
            })
        }
    }),
    h.extend({
        attr: function(e, t, n) {
            var r, i, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return typeof e.getAttribute === B ? h.prop(e, t, n) : (1 === s && h.isXMLDoc(e) || (t = t.toLowerCase(),
                r = h.attrHooks[t] || (h.expr.match.bool.test(t) ? dn : pn)),
                void 0 === n ? r && "get" in r && null  !== (i = r.get(e, t)) ? i : (i = h.find.attr(e, t),
                null  == i ? void 0 : i) : null  !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : void h.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, s = t && t.match(O);
            if (s && 1 === e.nodeType)
                while (n = s[i++])
                    r = h.propFix[n] || n,
                    h.expr.match.bool.test(n) ? yn && gn || !mn.test(n) ? e[r] = !1 : e[h.camelCase("default-" + n)] = e[r] = !1 : h.attr(e, n, ""),
                    e.removeAttribute(gn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!l.radioValue && "radio" === t && h.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    dn = {
        set: function(e, t, n) {
            return t === !1 ? h.removeAttr(e, n) : yn && gn || !mn.test(n) ? e.setAttribute(!gn && h.propFix[n] || n, n) : e[h.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    h.each(h.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = vn[t] || h.find.attr;
        vn[t] = yn && gn || !mn.test(t) ? function(e, t, r) {
            var i, s;
            return r || (s = vn[t],
            vn[t] = i,
            i = null  != n(e, t, r) ? t.toLowerCase() : null ,
            vn[t] = s),
            i
        }
         : function(e, t, n) {
            return n ? void 0 : e[h.camelCase("default-" + t)] ? t.toLowerCase() : null 
        }
    }),
    yn && gn || (h.attrHooks.value = {
        set: function(e, t, n) {
            return h.nodeName(e, "input") ? void (e.defaultValue = t) : pn && pn.set(e, t, n)
        }
    }),
    gn || (pn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
            r.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    vn.id = vn.name = vn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null 
    }
    ,
    h.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: pn.set
    },
    h.attrHooks.contenteditable = {
        set: function(e, t, n) {
            pn.set(e, "" === t ? !1 : t, n)
        }
    },
    h.each(["width", "height"], function(e, t) {
        h.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"),
                n) : void 0
            }
        }
    })),
    l.style || (h.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var bn = /^(?:input|select|textarea|button|object)$/i
      , wn = /^(?:a|area)$/i;
    h.fn.extend({
        prop: function(e, t) {
            return $(this, h.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = h.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (t) {}
            })
        }
    }),
    h.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, s, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return s = 1 !== o || !h.isXMLDoc(e),
                s && (t = h.propFix[t] || t,
                i = h.propHooks[t]),
                void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null  !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = h.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bn.test(e.nodeName) || wn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    l.hrefNormalized || h.each(["href", "src"], function(e, t) {
        h.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    l.optSelected || (h.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null 
        }
    }),
    h.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        h.propFix[this.toLowerCase()] = this
    }),
    l.enctype || (h.propFix.enctype = "encoding");
    var En = /[\t\r\n\f]/g;
    h.fn.extend({
        addClass: function(e) {
            var t, n, r, i, s, o, u = 0, a = this.length, f = "string" == typeof e && e;
            if (h.isFunction(e))
                return this.each(function(t) {
                    h(this).addClass(e.call(this, t, this.className))
                });
            if (f)
                for (t = (e || "").match(O) || []; a > u; u++)
                    if (n = this[u],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(En, " ") : " ")) {
                        s = 0;
                        while (i = t[s++])
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = h.trim(r),
                        n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o, u = 0, a = this.length, f = 0 === arguments.length || "string" == typeof e && e;
            if (h.isFunction(e))
                return this.each(function(t) {
                    h(this).removeClass(e.call(this, t, this.className))
                });
            if (f)
                for (t = (e || "").match(O) || []; a > u; u++)
                    if (n = this[u],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(En, " ") : "")) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        o = e ? h.trim(r) : "",
                        n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(h.isFunction(e) ? function(n) {
                h(this).toggleClass(e.call(this, n, this.className, t), t)
            }
             : function() {
                if ("string" === n) {
                    var t, r = 0, i = h(this), s = e.match(O) || [];
                    while (t = s[r++])
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else
                    (n === B || "boolean" === n) && (this.className && h._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : h._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(En, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    }),
    h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        h.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
        }
    }),
    h.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null , t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null , t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Sn = h.now()
      , xn = /\?/
      , Tn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    h.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, r = null , i = h.trim(t + "");
        return i && !h.trim(i.replace(Tn, function(e, t, i, s) {
            return n && t && (r = 0),
            0 === r ? e : (n = i || t,
            r += !s - !i,
            "")
        })) ? Function("return " + i)() : h.error("Invalid JSON: " + t)
    }
    ,
    h.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t)
            return null ;
        try {
            e.DOMParser ? (r = new DOMParser,
            n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + t),
        n
    }
    ;
    var Nn, Cn, kn = /#.*$/, Ln = /([?&])_=[^&]*/, An = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mn = /^(?:GET|HEAD)$/, _n = /^\/\//, Dn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Pn = {}, Hn = {}, Bn = "*/".concat("*");
    try {
        Cn = location.href
    } catch (jn) {
        Cn = T.createElement("a"),
        Cn.href = "",
        Cn = Cn.href
    }
    Nn = Dn.exec(Cn.toLowerCase()) || [],
    h.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Cn,
            type: "GET",
            isLocal: On.test(Nn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": h.parseJSON,
                "text xml": h.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? qn(qn(e, h.ajaxSettings), t) : qn(h.ajaxSettings, e)
        },
        ajaxPrefilter: Fn(Pn),
        ajaxTransport: Fn(Hn),
        ajax: function(e, t) {
            function x(e, t, n, r) {
                var f, g, y, w, S, x = t;
                2 !== b && (b = 2,
                o && clearTimeout(o),
                a = void 0,
                s = r || "",
                E.readyState = e > 0 ? 4 : 0,
                f = e >= 200 && 300 > e || 304 === e,
                n && (w = Rn(l, E, n)),
                w = Un(l, w, E, f),
                f ? (l.ifModified && (S = E.getResponseHeader("Last-Modified"),
                S && (h.lastModified[i] = S),
                S = E.getResponseHeader("etag"),
                S && (h.etag[i] = S)),
                204 === e || "HEAD" === l.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state,
                g = w.data,
                y = w.error,
                f = !y)) : (y = x,
                (e || !x) && (x = "error",
                0 > e && (e = 0))),
                E.status = e,
                E.statusText = (t || x) + "",
                f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]),
                E.statusCode(m),
                m = void 0,
                u && p.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]),
                v.fireWith(c, [E, x]),
                u && (p.trigger("ajaxComplete", [E, l]),
                --h.active || h.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var n, r, i, s, o, u, a, f, l = h.ajaxSetup({}, t), c = l.context || l, p = l.context && (c.nodeType || c.jquery) ? h(c) : h.event, d = h.Deferred(), v = h.Callbacks("once memory"), m = l.statusCode || {}, g = {}, y = {}, b = 0, w = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!f) {
                            f = {};
                            while (t = An.exec(s))
                                f[t[1].toLowerCase()] = t[2]
                        }
                        t = f[e.toLowerCase()]
                    }
                    return null  == t ? null  : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s : null 
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e,
                    g[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (l.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                m[t] = [m[t], e[t]];
                        else
                            E.always(e[E.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return a && a.abort(t),
                    x(0, t),
                    this
                }
            };
            if (d.promise(E).complete = v.add,
            E.success = E.done,
            E.error = E.fail,
            l.url = ((e || l.url || Cn) + "").replace(kn, "").replace(_n, Nn[1] + "//"),
            l.type = t.method || t.type || l.method || l.type,
            l.dataTypes = h.trim(l.dataType || "*").toLowerCase().match(O) || [""],
            null  == l.crossDomain && (n = Dn.exec(l.url.toLowerCase()),
            l.crossDomain = !(!n || n[1] === Nn[1] && n[2] === Nn[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Nn[3] || ("http:" === Nn[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = h.param(l.data, l.traditional)),
            In(Pn, l, t, E),
            2 === b)
                return E;
            u = h.event && l.global,
            u && 0 === h.active++ && h.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !Mn.test(l.type),
            i = l.url,
            l.hasContent || (l.data && (i = l.url += (xn.test(i) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = Ln.test(i) ? i.replace(Ln, "$1_=" + Sn++) : i + (xn.test(i) ? "&" : "?") + "_=" + Sn++)),
            l.ifModified && (h.lastModified[i] && E.setRequestHeader("If-Modified-Since", h.lastModified[i]),
            h.etag[i] && E.setRequestHeader("If-None-Match", h.etag[i])),
            (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", l.contentType),
            E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Bn + "; q=0.01" : "") : l.accepts["*"]);
            for (r in l.headers)
                E.setRequestHeader(r, l.headers[r]);
            if (!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && 2 !== b) {
                w = "abort";
                for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    E[r](l[r]);
                if (a = In(Hn, l, t, E)) {
                    E.readyState = 1,
                    u && p.trigger("ajaxSend", [E, l]),
                    l.async && l.timeout > 0 && (o = setTimeout(function() {
                        E.abort("timeout")
                    }, l.timeout));
                    try {
                        b = 1,
                        a.send(g, x)
                    } catch (S) {
                        if (!(2 > b))
                            throw S;
                        x(-1, S)
                    }
                } else
                    x(-1, "No Transport");
                return E
            }
            return E.abort()
        },
        getJSON: function(e, t, n) {
            return h.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return h.get(e, void 0, t, "script")
        }
    }),
    h.each(["get", "post"], function(e, t) {
        h[t] = function(e, n, r, i) {
            return h.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            h.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }),
    h._evalUrl = function(e) {
        return h.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    h.fn.extend({
        wrapAll: function(e) {
            if (h.isFunction(e))
                return this.each(function(t) {
                    h(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = h(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(h.isFunction(e) ? function(t) {
                h(this).wrapInner(e.call(this, t))
            }
             : function() {
                var t = h(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            )
        },
        wrap: function(e) {
            var t = h.isFunction(e);
            return this.each(function(n) {
                h(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    h.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (e.style && e.style.display || h.css(e, "display"))
    }
    ,
    h.expr.filters.visible = function(e) {
        return !h.expr.filters.hidden(e)
    }
    ;
    var zn = /%20/g
      , Wn = /\[\]$/
      , Xn = /\r?\n/g
      , Vn = /^(?:submit|button|image|reset|file)$/i
      , $n = /^(?:input|select|textarea|keygen)/i;
    h.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = h.isFunction(t) ? t() : null  == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        ;
        if (void 0 === t && (t = h.ajaxSettings && h.ajaxSettings.traditional),
        h.isArray(e) || e.jquery && !h.isPlainObject(e))
            h.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Jn(n, e[n], t, i);
        return r.join("&").replace(zn, "+")
    }
    ,
    h.fn.extend({
        serialize: function() {
            return h.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = h.prop(this, "elements");
                return e ? h.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !h(this).is(":disabled") && $n.test(this.nodeName) && !Vn.test(e) && (this.checked || !J.test(e))
            }).map(function(e, t) {
                var n = h(this).val();
                return null  == n ? null  : h.isArray(n) ? h.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Xn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Xn, "\r\n")
                }
            }).get()
        }
    }),
    h.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Yn() || Zn()
    }
     : Yn;
    var Kn = 0
      , Qn = {}
      , Gn = h.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Qn)
            Qn[e](void 0, !0)
    }),
    l.cors = !!Gn && "withCredentials" in Gn,
    Gn = l.ajax = !!Gn,
    Gn && h.ajaxTransport(function(e) {
        if (!e.crossDomain || l.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, s = e.xhr(), o = ++Kn;
                    if (s.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (i in e.xhrFields)
                            s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)
                        void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
                    s.send(e.hasContent && e.data || null ),
                    t = function(n, i) {
                        var u, a, f;
                        if (t && (i || 4 === s.readyState))
                            if (delete Qn[o],
                            t = void 0,
                            s.onreadystatechange = h.noop,
                            i)
                                4 !== s.readyState && s.abort();
                            else {
                                f = {},
                                u = s.status,
                                "string" == typeof s.responseText && (f.text = s.responseText);
                                try {
                                    a = s.statusText
                                } catch (l) {
                                    a = ""
                                }
                                u || !e.isLocal || e.crossDomain ? 1223 === u && (u = 204) : u = f.text ? 200 : 404
                            }
                        f && r(u, a, f, s.getAllResponseHeaders())
                    }
                    ,
                    e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = Qn[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
    h.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return h.globalEval(e),
                e
            }
        }
    }),
    h.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    h.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = T.head || h("head")[0] || T.documentElement;
            return {
                send: function(r, i) {
                    t = T.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null ,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null ,
                        n || i(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var er = []
      , tr = /(=)\?(?=&|$)|\?\?/;
    h.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = er.pop() || h.expando + "_" + Sn++;
            return this[e] = !0,
            e
        }
    }),
    h.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, s, o, u = t.jsonp !== !1 && (tr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tr.test(t.data) && "data");
        return u || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = h.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        u ? t[u] = t[u].replace(tr, "$1" + i) : t.jsonp !== !1 && (t.url += (xn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return o || h.error(i + " was not called"),
            o[0]
        }
        ,
        t.dataTypes[0] = "json",
        s = e[i],
        e[i] = function() {
            o = arguments
        }
        ,
        r.always(function() {
            e[i] = s,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            er.push(i)),
            o && h.isFunction(s) && s(o[0]),
            o = s = void 0
        }),
        "script") : void 0
    }),
    h.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null ;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || T;
        var r = w.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = h.buildFragment([e], t, i),
        i && i.length && h(i).remove(),
        h.merge([], r.childNodes))
    }
    ;
    var nr = h.fn.load;
    h.fn.load = function(e, t, n) {
        if ("string" != typeof e && nr)
            return nr.apply(this, arguments);
        var r, i, s, o = this, u = e.indexOf(" ");
        return u >= 0 && (r = h.trim(e.slice(u, e.length)),
        e = e.slice(0, u)),
        h.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (s = "POST"),
        o.length > 0 && h.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            o.html(r ? h("<div>").append(h.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, i || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    h.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        h.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    h.expr.filters.animated = function(e) {
        return h.grep(h.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var rr = e.document.documentElement;
    h.offset = {
        setOffset: function(e, t, n) {
            var r, i, s, o, u, a, f, l = h.css(e, "position"), c = h(e), p = {};
            "static" === l && (e.style.position = "relative"),
            u = c.offset(),
            s = h.css(e, "top"),
            a = h.css(e, "left"),
            f = ("absolute" === l || "fixed" === l) && h.inArray("auto", [s, a]) > -1,
            f ? (r = c.position(),
            o = r.top,
            i = r.left) : (o = parseFloat(s) || 0,
            i = parseFloat(a) || 0),
            h.isFunction(t) && (t = t.call(e, n, u)),
            null  != t.top && (p.top = t.top - u.top + o),
            null  != t.left && (p.left = t.left - u.left + i),
            "using" in t ? t.using.call(e, p) : c.css(p)
        }
    },
    h.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    h.offset.setOffset(this, e, t)
                });
            var t, n, r = {
                top: 0,
                left: 0
            }, i = this[0], s = i && i.ownerDocument;
            if (s)
                return t = s.documentElement,
                h.contains(t, i) ? (typeof i.getBoundingClientRect !== B && (r = i.getBoundingClientRect()),
                n = ir(s),
                {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === h.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                h.nodeName(e[0], "html") || (n = e.offset()),
                n.top += h.css(e[0], "borderTopWidth", !0),
                n.left += h.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - h.css(r, "marginTop", !0),
                    left: t.left - n.left - h.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || rr;
                while (e && !h.nodeName(e, "html") && "static" === h.css(e, "position"))
                    e = e.offsetParent;
                return e || rr
            })
        }
    }),
    h.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        h.fn[e] = function(r) {
            return $(this, function(e, r, i) {
                var s = ir(e);
                return void 0 === i ? s ? t in s ? s[t] : s.document.documentElement[r] : e[r] : void (s ? s.scrollTo(n ? h(s).scrollLeft() : i, n ? i : h(s).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null )
        }
    }),
    h.each(["top", "left"], function(e, t) {
        h.cssHooks[t] = jt(l.pixelPosition, function(e, n) {
            return n ? (n = Ht(e, t),
            Dt.test(n) ? h(e).position()[t] + "px" : n) : void 0
        })
    }),
    h.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        h.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            h.fn[r] = function(r, i) {
                var s = arguments.length && (n || "boolean" != typeof r)
                  , o = n || (r === !0 || i === !0 ? "margin" : "border");
                return $(this, function(t, n, r) {
                    var i;
                    return h.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? h.css(t, n, o) : h.style(t, n, r, o)
                }, t, s ? r : void 0, s, null )
            }
        })
    }),
    h.fn.size = function() {
        return this.length
    }
    ,
    h.fn.andSelf = h.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return h
    });
    var sr = e.jQuery
      , or = e.$;
    return h.noConflict = function(t) {
        return e.$ === h && (e.$ = or),
        t && e.jQuery === h && (e.jQuery = sr),
        h
    }
    ,
    typeof t === B && (e.jQuery = e.$ = h),
    h
}),
define("dt/lib/Set", ["require", "jquery"], function(e) {
    function i(e) {
        return Object(e) === e
    }
    var t = e("jquery")
      , n = "__isDTLibSet"
      , r = function(e) {
        this._valueSet = {},
        this[n] = !0,
        this.reset(e)
    }
    ;
    return r.getSet = function(e) {
        return r.isSet(e) ? e : new r(e)
    }
    ,
    r.isSet = function(e) {
        return i(e) && !!e[n]
    }
    ,
    r.prototype = {
        constructor: r,
        add: function(e) {
            return t.extend(this._valueSet, this._normalize(e)),
            this
        },
        union: function(e) {
            return this.add(e)
        },
        reset: function(e) {
            return this._valueSet = this._normalize(e),
            this
        },
        contains: function(e) {
            var t = this._normalize(e);
            for (var n in t)
                if (t.hasOwnProperty(n) && !this._valueSet.hasOwnProperty(n))
                    return !1;
            return !0
        },
        intersects: function(e) {
            var t = this._normalize(e)
              , n = [];
            for (var i in t)
                t.hasOwnProperty(i) && this._valueSet.hasOwnProperty(i) && n.push(i);
            return new r(n)
        },
        subtracts: function(e) {
            var t = this._normalize(e)
              , n = [];
            for (var i in this._valueSet)
                this._valueSet.hasOwnProperty(i) && !t.hasOwnProperty(i) && n.push(i);
            return new r(n)
        },
        isEmpty: function() {
            return this.count() === 0
        },
        count: function() {
            var e = 0;
            for (var t in this._valueSet)
                this._valueSet.hasOwnProperty(t) && e++;
            return e
        },
        list: function() {
            var e = this._valueSet
              , t = [];
            for (var n in e)
                e.hasOwnProperty(n) && t.push(n);
            return t
        },
        clone: function() {
            return new r(this)
        },
        filter: function(e) {
            var t = this._valueSet
              , n = [];
            for (var i in t)
                t.hasOwnProperty(i) && e(i) && n.push(i);
            return new r(n)
        },
        map: function(e) {
            var t = this._valueSet
              , n = [];
            for (var i in t)
                t.hasOwnProperty(i) && n.push(e(i));
            return new r(n)
        },
        classify: function(e, t) {
            var n = this._valueSet
              , s = {};
            for (var o in n)
                if (n.hasOwnProperty(o)) {
                    var u = e(o);
                    if (!i(u)) {
                        var a = {};
                        a[u] = o,
                        u = a
                    }
                    for (var f in u)
                        if (u.hasOwnProperty(f)) {
                            var l = s[f] || (s[f] = new r);
                            l.add(u[f])
                        }
                }
            for (var c = 0, h = (t || []).length; c < h; c++)
                s[t[c]] || (s[t[c]] = new r);
            return s
        },
        _normalize: function(e) {
            var n = {}
              , i = t.type(e);
            if (!e)
                return n;
            if (r.isSet(e))
                e = e.list();
            else if (i === "string") {
                e = e.split(",");
                for (var s = 0, o = e.length; s < o; s++)
                    e[s] = t.trim(e[s])
            } else if (i !== "array")
                throw new Error;
            for (var s = 0, o = e.length; s < o; s++)
                n[e[s]] = 1;
            return n
        }
    },
    r
}),
define("dt/lib/base", ["require", "jquery"], function(e) {
    function d(e) {
        var n = {}
          , r = t.type(e);
        if (r === "array")
            for (var i = 0, s = e.length; i < s; i++)
                n[e[i]] = e[i];
        else if (r === "object")
            for (var i in e)
                e.hasOwnProperty(i) && (n[e[i]] = i);
        return n
    }
    var t = e("jquery")
      , n = Array.prototype.slice
      , r = Array.prototype.indexOf
      , i = /^[\s\t\xa0\u3000]*$/
      , s = "-"
      , o = "-"
      , u = "__is__component__"
      , a = "__component__"
      , f = {}
      , l = 0
      , c = f.uncurry = function(e) {
        return function() {
            return Function.call.apply(e, arguments)
        }
    }
    ;
    f.arraySlice = c(n),
    f.curry = function(e) {
        var t = n.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(n.call(arguments)))
        }
    }
    ,
    f.ieVersion = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : undefined,
    f.encodeHTML = function(e) {
        return e == null  ? "" : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
    ,
    f.decodeHTML = function(e) {
        if (e == null )
            return "";
        var t = String(e).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        return t.replace(/&#([\d]+);/g, function(e, t) {
            return String.fromCharCode(parseInt(t, 10))
        })
    }
    ,
    f.assert = function(e, t) {
        if (!e)
            throw new Error(t || "assert fail!")
    }
    ,
    f.objForEach = function(e, t) {
        var n;
        for (n in e)
            e.hasOwnProperty(n) && t(n, e[n]);
        if (h)
            for (var r = 0; n = p[r++]; )
                e[n] !== Object.prototype[n] && t(n, e[n])
    }
    ;
    var h = !{
        toString: 1
    }.propertyIsEnumerable("toString")
      , p = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
    f.localUID = function() {
        return l++
    }
    ,
    f.makeInner = function() {
        var e = "__private_d_" + f.localUID()
          , t = function(t) {
            return t[e] || (t[e] = {})
        }
        ;
        return t.attach = function(t) {
            var n = "__private_s_"
              , r = "__private_attach_"
              , i = t.prototype;
            return i.hasOwnProperty(r) ? e = i[r] : i[r] ? e = i[r] = n + (Number(i[r].split("_s_")[1]) + 1) : e = i[r] = n + "0",
            t
        }
        ,
        t
    }
    ,
    f.isComponent = function(e, t) {
        return Object(e) !== e ? !1 : (t && (e[u] = 1),
        !!e[u])
    }
    ,
    f.getComponent = function(e) {
        return f.isJQuery(e) && (e = e[0]),
        e ? e[a] : !1
    }
    ,
    f.bindComponent = function(e, t) {
        return f.isJQuery(e) && (e = e[0]),
        e ? (f.isComponent(t) ? e[a] = t : t === !1 && (e[a] = null ),
        e[a]) : !1
    }
    ,
    f.isJQuery = function(e) {
        return e instanceof t
    }
    ,
    f.toInt = function(e) {
        return parseInt(e, 10)
    }
    ,
    f.assign = function(e, t, n, r, i) {
        var s = d(n)
          , o = d(r);
        for (var u in t)
            if (t.hasOwnProperty(u) && !o.hasOwnProperty(u)) {
                var a = null ;
                n ? s.hasOwnProperty(u) && (a = s[u]) : a = u;
                if (a != null ) {
                    if (i && e.hasOwnProperty(a))
                        throw new Error('Target attr "' + a + '" exists!');
                    e[a] = t[u]
                }
            }
        return e
    }
    ;
    var v = f.isObject = function(e) {
        return Object(e) === e
    }
    ;
    return f.isEmptyObj = function(e) {
        if (!v(e))
            return !1;
        for (var t in e)
            if (e.hasOwnProperty(t))
                return !1;
        return !0
    }
    ,
    f.isNaN = function(e) {
        return e !== e
    }
    ,
    f.arrayIndexOf = function(e, t, n) {
        if (!e)
            return -1;
        if (arguments.length < 3 && typeof r == "function")
            return r.call(e, t);
        for (var i = 0, s = e.length; i < s; i++)
            if (arguments.length < 3 && e[i] === t || v(e[i]) && e[i][n] === t)
                return i;
        return -1
    }
    ,
    f.arrayRemoveItem = function(e, t) {
        var n = f.arrayIndexOf(e, t);
        n > 0 ? e.splice(n, 1) : n === 0 && e.shift()
    }
    ,
    f.arrayMap = function(e, t) {
        var n = [];
        for (var r = 0, i = (e || []).length; r < i; r++)
            n.push(t(e[r]));
        return n
    }
    ,
    f.arrayEquals = function(e, n) {
        if (!t.isArray(e) || !t.isArray(n) || e.length !== n.length)
            return !1;
        for (var r = 0, i = e.length; r < i; r++)
            if (e[r] !== n[r])
                return !1;
        return !0
    }
    ,
    f.objectKeys = function(e) {
        var t = [];
        if (!f.isObject(e))
            return t;
        for (var n in e)
            e.hasOwnProperty(n) && t.push(n);
        return t
    }
    ,
    f.objHasAttr = function(e, n) {
        t.type(n) === "string" && (n = [n]);
        for (var r = 0, i = n.length; r < i; r++)
            if (e.hasOwnProperty[n[r]])
                return !0;
        return !1
    }
    ,
    f.diffObjects = function(e, n) {
        function p() {
            return r.push({
                path: i.join("."),
                obj1: e,
                obj2: n
            }),
            r
        }
        var r = arguments[2] || []
          , i = arguments[3] || []
          , s = t.type(e)
          , o = t.type(n);
        if (s !== o)
            return p();
        if (s === "array") {
            if (e.length !== n.length)
                return p();
            for (var u = 0, a = e.length; u < a; u++)
                i.push(u),
                f.diffObjects(e[u], n[u], r, i),
                i.pop()
        } else if (s === "object" && o === "object") {
            var l = f.objectKeys(e)
              , c = f.objectKeys(n);
            if (!f.arrayEquals(l, c))
                return p();
            for (var u = 0, a = l.length; u < a; u++) {
                var h = l[u];
                i.push(h),
                f.diffObjects(e[h], n[h], r, i),
                i.pop()
            }
        } else if (s === "date") {
            if (e.getTime() !== n.getTime())
                return p()
        } else if (s === "regexp") {
            if (e.toString() !== n.toString())
                return p()
        } else if (e !== n)
            return p();
        return r
    }
    ,
    f.isBlank = function(e) {
        return e == null  || i.test(e)
    }
    ,
    f.toEcValue = function(e) {
        return e == null  ? s : e
    }
    ,
    f.fromEcValue = function(e) {
        return e === s ? null  : e
    }
    ,
    f.toNotEmptyEcName = function(e) {
        return f.isBlank(e) ? o : e
    }
    ,
    f.isSupportBase64 = function() {
        var e = new Image
          , t = !0;
        return e.onload = e.onerror = function() {
            if (this.width !== 1 || this.height !== 1)
                t = !1
        }
        ,
        e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
        t
    }(),
    f.flashVersion = function() {
        var e;
        try {
            e = navigator.plugins["Shockwave Flash"],
            e = e.description
        } catch (t) {
            try {
                e = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
            } catch (n) {
                e = "0.0"
            }
        }
        return e = e.match(/\d+/g),
        parseFloat(e[0] + "." + e[1])
    }(),
    f.supportTransition = function() {
        var e = document.createElement("p").style
          , t = "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "OTransition" in e;
        return e = null ,
        t
    }(),
    f.noop = new Function,
    f.onlyHasProperty = function(e, n) {
        var r = !0;
        if (n == null )
            return !1;
        t.isArray(n) || (n = [n]);
        for (var i in e)
            e.hasOwnProperty(i) && f.arrayIndexOf(n, i) === -1 && (r = !1);
        return r
    }
    ,
    f
}),
define("dt/lib/json", ["require"], function(e) {
    var t = {};
    return t.parseJSONLaxly = function(e, t) {
        return (new Function("return (" + e + ");")).call(t)
    }
    ,
    t
}),
define("dt/lib/throttle", ["require"], function(e) {
    var t = {};
    return t.throttle = function(e, t, n, r) {
        function d(h) {
            function p() {
                o = (new Date).getTime(),
                u = null ,
                (c ? e : e[h]).apply(f, l || [])
            }
            return function() {
                i = (new Date).getTime(),
                f = this,
                l = arguments,
                a = i - (r ? s : o) - t,
                clearTimeout(u),
                r ? n ? u = setTimeout(p, t) : a >= 0 && p() : a >= 0 ? p() : n && (u = setTimeout(p, -a)),
                s = i
            }
        }
        var i = (new Date).getTime(), s = 0, o = 0, u = null , a, f, l, c = typeof e == "function";
        t = t || 0;
        if (c)
            return d();
        var h = [];
        for (var p = 0; p < e.length; p++)
            h[p] = d(p);
        return h
    }
    ,
    t.fixedRate = function(e, n) {
        return n != null  ? t.throttle(e, n, !0, !1) : e
    }
    ,
    t.debounce = function(e, n) {
        return n != null  ? t.throttle(e, n, !0, !0) : e
    }
    ,
    t
}),
define("dt/lib/dataDriven", ["require", "./base", "jquery", "./throttle"], function(e) {
    function p(e, t) {
        var r = e === null  || n.type(e) in h;
        return r ? e === t : !1
    }
    function y(e, t) {
        var n = [], r, i, s = this[u + "children"];
        for (r = 0; i = s[r]; r++)
            n.push(i.getCallback());
        n = t(n, e);
        for (r = 0; i = s[r]; r++)
            i.setCallback(n[r])
    }
    function w(e, t, n, r) {
        if (!(arguments.length > 1))
            return this()[e];
        this[u + "currValueInfo"] = n;
        var i = this();
        if (r && r.force || this.isDifferent(i[e], t))
            (!r || !r.silent) && this.valueWillMutate(),
            i[e] = t,
            (!r || !r.silent) && this.valueHasMutated();
        N(this, r)
    }
    function T(e) {
        return {
            ob: 1,
            obArray: 1,
            obHash: 1
        }.hasOwnProperty(x(e))
    }
    function N(e, t) {
        var n = t && t.volatiles || []
          , r = e[u + "currValueInfo"];
        for (var i = 0, s = n.length; i < s; i++)
            delete r[n[i]]
    }
    var t = e("./base"), n = e("jquery"), r = e("./throttle"), i = Array.prototype.slice, s = {}, o = "__ob__type__", u = "__prop__", a = "change", f = "arrayChange", l;
    s.subscribable = function(e) {
        t.assign(e, c),
        e._subscriptions = {}
    }
    ;
    var c = {
        subscribe: function(e, n, r) {
            r = r || a;
            var i = this._subscriptions[r] || (this._subscriptions[r] = [])
              , s = new d(e,n,function() {
                t.arrayRemoveItem(i, s)
            }
            );
            return i.push(s),
            s
        },
        notify: function(e, t) {
            t = t || a;
            if (!this.hasSubscriptionsForEvent(t))
                return;
            var n = this._subscriptions[t].slice();
            for (var r = 0, i; i = n[r]; r++)
                i.callback(e)
        },
        hasSubscriptionsForEvent: function(e) {
            return this._subscriptions[e] && this._subscriptions[e].length
        },
        isDifferent: function(e, t) {
            return !this.equalityComparer || !this.equalityComparer(e, t)
        },
        equalityComparer: p
    }
      , h = {
        "undefined": 1,
        "boolean": 1,
        number: 1,
        string: 1
    }
      , d = function(e, t, n) {
        this[u + "callback"] = e,
        this[u + "callbackScope"] = t,
        this[u + "disposeCallback"] = n,
        this[u + "isDisposed"] = !1
    }
      , v = d.prototype;
    v.callback = function(e) {
        return this[u + "isDisposed"] || this[u + "callback"].apply(this[u + "callbackScope"], e || []),
        this
    }
    ,
    v.setCallback = function(e) {
        return this[u + "callback"] = e,
        this
    }
    ,
    v.getCallback = function() {
        return this[u + "callback"]
    }
    ,
    v.dispose = function() {
        return this[u + "isDisposed"] = !0,
        this[u + "disposeCallback"](),
        this
    }
    ,
    v.throttle = function(e) {
        return this[u + "callback"] = r.fixedRate(this[u + "callback"], e),
        this
    }
    ,
    v.debounce = function(e) {
        return this[u + "callback"] = r.debounce(this[u + "callback"], e),
        this
    }
    ;
    var m = function(e) {
        this[u + "children"] = n.extend([], e)
    }
      , g = m.prototype;
    g.callback = function(e) {
        for (var t = 0, n; n = this[u + "children"][t]; t++)
            n.callback(e)
    }
    ,
    g.dispose = function() {
        for (var e = 0, t; t = this[u + "children"][e]; e++)
            t.dispose()
    }
    ,
    g.throttle = function(e) {
        return y.call(this, e, r.fixedRate),
        this
    }
    ,
    g.debounce = function(e) {
        return y.call(this, e, r.debounce),
        this
    }
    ,
    s.ob = s.observable = function(e, r, i) {
        function a(e, t, n) {
            if (arguments.length > 0) {
                a[u + "writer"](e, t, n);
                return
            }
            return a[u + "currValue"]
        }
        return x(e) && (e = e.peek(),
        r = e.peekValueInfo()),
        a[u + "currValue"] = e,
        a[u + "currValueInfo"] = r,
        a[u + "authKey"] = i ? i.authKey : null ,
        s.subscribable(a),
        t.assign(a, b),
        a[o] = "ob",
        a[u + "writer"] = function(e, r, i) {
            a.validateAuthKey(i ? i.authKey : null ),
            t.assert(r == null  || n.isPlainObject(r)),
            a[u + "currValueInfo"] = r;
            var s = i && i.force;
            if (s || a.isDifferent(a[u + "currValue"], e))
                (!i || !i.silent) && a.valueWillMutate(),
                a[u + "currValue"] = e,
                (!i || !i.silent) && a.valueHasMutated();
            N(this, i)
        }
        ,
        a
    }
    ;
    var b = {
        force: function(e, t, n) {
            n = n || {},
            n.force = !0,
            this[u + "writer"](e, t, n)
        },
        peek: function() {
            return this[u + "currValue"]
        },
        peekValueInfo: function(e) {
            if (arguments.length === 0) {
                var r = this[u + "currValueInfo"];
                return r && (r = n.extend({}, r)),
                r
            }
            if (t.isObject(this[u + "currValueInfo"]))
                return this[u + "currValueInfo"][e]
        },
        extendWriter: function(e) {
            var t = this
              , n = t[u + "writer"];
            return this[u + "writer"] = function(r, i, s) {
                t.validateAuthKey(s ? s.authKey : null ),
                e.call(t, n, r, i, s)
            }
            ,
            this
        },
        valueHasMutated: function() {
            this.notify([this[u + "currValue"], this])
        },
        valueWillMutate: function() {
            this.notify([this[u + "currValue"], this], "beforeChange")
        },
        validateAuthKey: function(e) {
            var t = this[u + "authKey"];
            if (t != null  && e !== t)
                throw new Error("AuthKey error: " + e)
        }
    };
    s.obHash = function(e) {
        var t = s.ob(e || {});
        return t[o] = "obHash",
        t.prop = w,
        t
    }
    ,
    s.obArray = function(e) {
        t.assert(e === l || n.isArray(e));
        var r = s.ob(e || []);
        return t.assign(r, E),
        r[o] = "obArray",
        r
    }
    ;
    var E = {
        remove: function(e) {
            var t = this(), n = [], r, i = [];
            for (var s = 0, o = t.length; s < o; )
                (typeof e == "function" ? e(t[s]) : t[s] === e) ? (r || (this.valueWillMutate(),
                r = !0),
                n.push(t.splice(s, 1)),
                i.push(s),
                o--) : s++;
            if (n.length) {
                var u = {
                    key: S.REMOVE,
                    indexes: i
                };
                this.notify([u, this], f),
                this.valueHasMutated()
            }
            return n
        },
        removeAll: function() {
            return this.splice(0, this.count())
        },
        indexOf: function(e) {
            return t.arrayIndexOf(this(), e)
        },
        pop: function() {
            return this.splice(this.count() - 1, 1)
        },
        push: function() {
            return this.splice.apply(this, [this.count(), 0].concat(i.call(arguments)))
        },
        shift: function() {
            return this.splice(0, 1)
        },
        unshift: function(e) {
            return this.splice(0, 0, e)
        },
        splice: function(e, t) {
            var n = this()
              , r = n.length
              , s = arguments.length;
            if (!!s && e >= 0 && e <= r) {
                s === 1 ? t = r : t >= 0 ? t > r - e && (t = r - e) : t = 0,
                this.valueWillMutate();
                var o = n.splice.apply(n, arguments)
                  , u = {
                    key: S.SPLICE,
                    index: e,
                    removeCount: t,
                    added: i.call(arguments, 2)
                };
                return this.notify([u, this], f),
                this.valueHasMutated(),
                o
            }
            return []
        },
        slice: function() {
            return i.apply(this(), arguments)
        },
        pushArray: function(e) {
            return this.push.apply(this, e || [])
        },
        count: function() {
            return this().length
        },
        move: function(e, t) {
            var n = this()
              , r = n.length;
            if (e < 0 || e >= r || t < 0 || t >= r || e === t)
                return;
            this.valueWillMutate();
            var i = n.splice(e, 1)[0];
            n.splice(t, 0, i);
            var s = {
                key: S.MOVE,
                originIndex: e,
                finalIndex: t
            };
            this.notify([s, this], f),
            this.valueHasMutated()
        }
    }
      , S = s.obArray.ChangeKey = {
        REMOVE: "remove",
        SPLICE: "splice",
        MOVE: "move"
    };
    s.obSubscribe = function(e, t, r, i) {
        if (x(e))
            return e.subscribe(t, r, i);
        if (n.isArray(e)) {
            var s = [];
            for (var o = 0, u = e.length; o < u; o++)
                x(e[o]) && s.push(e[o].subscribe(t, r, i));
            return new m(s)
        }
    }
    ,
    s.value = function(e) {
        return x(e) ? e() : e
    }
    ,
    s.peek = function(e) {
        return x(e) ? e.peek() : e
    }
    ,
    s.setValue = function(e, t, n) {
        return t = s.peek(t),
        T(e) ? (e(t, n),
        e) : t
    }
    ,
    s.valueInfo = function(e, n) {
        return t.isObject(e) ? t.assign({}, e, ["type", "info"]) : {
            type: e,
            info: n
        }
    }
    ,
    s.valueInfo.CONFIRMED = "confirmed",
    s.valueInfoForConfirmed = function(e, n) {
        var r = s.valueInfo(s.valueInfo.CONFIRMED, e);
        return n && t.assign(r, n, null , ["type", "info"]),
        r
    }
    ,
    s.checkValueInfo = function(e, n, r) {
        var i = s.obTypeOf(e) ? e.peekValueInfo() : e;
        return t.isObject(i) && (n == null  || i.type === n) && (r == null  || i.info === r)
    }
    ,
    s.checkValueInfoForConfirmed = function(e, t) {
        return s.checkValueInfo(e, s.valueInfo.CONFIRMED, t)
    }
    ;
    var x = s.obTypeOf = function(e) {
        return Object(e) === e && e[o]
    }
    ;
    return s
}),
define("dt/lib/model", ["require", "jquery", "./base", "./dataDriven"], function(e) {
    var t = e("jquery"), n = e("./base"), r = e("./dataDriven"), i = {}, s = "__atom__", o, u = i.isAtom = function(e, i) {
        return Object(e) !== e || !i && e[s] || r.obTypeOf(e) || n.isComponent(e) || !t.isPlainObject(e)
    }
    ;
    i.isPlain = function(e, n) {
        return t.isArray(e) || !u(e, n)
    }
    ,
    i.atom = function(e) {
        return Object(e) === e && !e[s] && (e[s] = 1),
        e
    }
    ,
    i.cloneAtom = function(e, i) {
        var o = t.type(e), f, l;
        if (!u(e, !0)) {
            if (e[s])
                return e[s] = 0,
                l = a({}, e, {
                    clone: !0
                }),
                l[s] = e[s] = 1,
                l;
            return
        }
        if (f = r.obTypeOf(e))
            return r[f](a({}, e.peek(), {
                clone: !0
            }));
        if (n.isComponent(e))
            return e.clone();
        if (o === "date")
            return new Date(e.getTime());
        if (o === "regexp")
            return new RegExp(e);
        if (o === "array") {
            l = [];
            for (var c in e)
                e.hasOwnProperty(c) && (l[c] = a({}, e[c], {
                    clone: !0
                }));
            return l
        }
        if (o in {
            "function": 1,
            "undefined": 1,
            "null": 1,
            "boolean": 1,
            number: 1,
            string: 1
        } || i && i.assignWhenCannotClone)
            return e
    }
    ;
    var a = i.merge = function(e, t, n) {
        if (t === o)
            return e;
        if (u(t))
            return n && n.clone ? i.cloneAtom(t, n) : t;
        u(e) && (e = {});
        var r = n && n.levelOneNeedMerge;
        n && (n.levelOneNeedMerge = null );
        for (var s in t) {
            if (!t.hasOwnProperty(s) || n && n.onlyMergeOwnPropertyInTarget && !e.hasOwnProperty(s))
                continue;e[s] = !r || r[s] ? a(e[s], t[s], n) : t[s]
        }
        return e
    }
    ;
    return i.clone = function(e, t) {
        return e === o ? o : a({}, e, {
            clone: !0,
            assignWhenCannotClone: t
        })
    }
    ,
    i
}),
define("dt/lib/objectAccess", ["require", "./model"], function(e) {
    function v(e) {
        return e === Object(e)
    }
    function m(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
    var t = {}, n = e("./model"), r, i = /[\.\[]/, s = /\[/g, o = /\]/g, u = t.getByPath = function(e, t, n) {
        if (e == null )
            return t;
        var r = m(e) ? e : u.parsePath(e)
          , n = n || l;
        t = {
            k: t
        },
        r.unshift("k");
        for (var i = 0, s = r.length; i < s; i++) {
            var o = r[i]
              , f = i ? n(t, o) : a.DRILL_DOWN;
            switch (f) {
            case a.DRILL_DOWN:
                t = t[o];
                break;
            case a.RETURN:
                return;
            default:
                throw new Error("path: " + o)
            }
        }
        return t
    }
    , a = u.Action = {
        DRILL_DOWN: "drillDown",
        THROW: "throw",
        RETURN: "return"
    }, f = u.actionChoice = {
        notObjectThrow: function(e) {
            return v(e) ? a.DRILL_DOWN : a.THROW
        },
        notObjectReturn: function(e) {
            return v(e) ? a.DRILL_DOWN : a.RETURN
        },
        atomThrow: function(e) {
            return v(e) && !n.isAtom(e) ? a.DRILL_DOWN : a.THROW
        },
        notPlainThrow: function(e) {
            return v(e) && n.isPlain(e) ? a.DRILL_DOWN : a.THROW
        },
        notPlainReturn: function(e) {
            return v(e) && n.isPlain(e) ? a.DRILL_DOWN : a.RETURN
        }
    }, l = f.notObjectThrow;
    u.normalizePath = function(e) {
        return e.replace(s, ".").replace(o, "")
    }
    ,
    u.parsePath = function(e) {
        return e.replace(o, "").split(i)
    }
    ;
    var c = t.setByPath = function(e, t, n, r, s) {
        if (e == null )
            return;
        var o = e.split(i), r = r || d, u, a;
        n = {
            k: n
        },
        o.unshift("k");
        for (var f = 0, l, c = o.length; f < c; f++) {
            a = o[f];
            var p = a.length;
            l = 0,
            a.indexOf("]") === p - 1 && (o[f] = a = a.slice(0, p - 1),
            l = 1);
            var v = f ? r(n, a) : h.DRILL_DOWN;
            switch (v) {
            case h.OVERLAP:
                u[o[f - 1]] = n = l ? [] : {};
                break;
            case h.DELETE:
                delete u[o[f - 1]];
                return;
            case h.DRILL_DOWN:
                break;
            case h.RETURN:
                return;
            default:
                throw new Error("path: " + a)
            }
            u = n,
            n = n[a]
        }
        return typeof s == "function" ? t = s(u, a, t) : u[a] = t,
        t
    }
      , h = c.Action = {
        DRILL_DOWN: "drillDown",
        THROW: "throw",
        RETURN: "return",
        OVERLAP: "overlap",
        DELETE: "delete"
    }
      , p = c.actionChoice = {
        notObjectOverlap: function(e) {
            return v(e) ? h.DRILL_DOWN : h.OVERLAP
        },
        notObjectThrow: function(e) {
            return v(e) ? h.DRILL_DOWN : e !== r ? h.THROW : h.OVERLAP
        },
        notObjectReturn: function(e) {
            return v(e) ? h.DRILL_DOWN : e !== r ? h.RETURN : h.OVERLAP
        },
        atomThrow: function(e) {
            return v(e) && !n.isAtom(e) ? h.DRILL_DOWN : e !== r ? h.THROW : h.OVERLAP
        },
        notPlainThrow: function(e) {
            return v(e) && n.isPlain(e) ? h.DRILL_DOWN : e !== r ? h.THROW : h.OVERLAP
        },
        notPlainOverlap: function(e) {
            return v(e) && n.isPlain(e) ? h.DRILL_DOWN : h.OVERLAP
        }
    }
      , d = p.notObjectThrow;
    return t.deleteByPath = function(e, t, n, i) {
        function o(e, t) {
            s = e[t],
            delete e[t]
        }
        var s;
        return c(e, r, t, n, o),
        s
    }
    ,
    t.reducePath = function(e, t) {
        var n = e.split(i)
          , r = []
          , s = 0;
        for (var o = n.length; s < o; s++) {
            var u = n[s]
              , a = u.length
              , f = !1;
            u.indexOf("]") === a - 1 && (f = !0,
            u = u.slice(0, a - 1));
            if (u !== t[s])
                break;
            r.push((s === 0 ? "" : f ? "[" : ".") + n[s])
        }
        return r.join("")
    }
    ,
    t
}),
define("dt/lib/objectOriented", ["require", "exports", "module", "./base"], function(e, t) {
    function r(e, t) {
        var n = this.constructor, r = this[e], i;
        while ((n = n.prototype._superClass) && (i = n.prototype[e]) && i === r)
            ;
        if (i)
            return i.apply(this, t || []);
        throw new Error("parent Class has no method named " + e)
    }
    function i(e) {
        var n = this
          , i = t.newClass({
            _define: n.defineProperties
        })
          , s = function() {}
        ;
        s.prototype = n.prototype;
        var u = i.prototype = new s;
        return o(i.defineProperties, e._define),
        e._define = null ,
        i.implement(e),
        u._applySuper = r,
        u._superClass = n,
        u.constructor = i,
        i
    }
    function s(e) {
        return o(this.prototype, e)
    }
    function o(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    function u(e) {
        return Object.prototype.toString.call(e) === "[object Function]"
    }
    var n = e("./base");
    return t.newClass = function(e) {
        var t = function() {
            return u(this._construct) ? this._construct.apply(this, arguments) : this
        }
        ;
        return t.extend = i,
        t.implement = s,
        o(t.defineProperties = {}, e._define),
        e._define = null ,
        t.implement(e),
        t.uid = "Class_" + n.localUID(),
        t
    }
    ,
    t.simpleInherit = function(e, t) {
        var n = e.prototype
          , i = new Function;
        i.prototype = t.prototype;
        var s = e.prototype = new i;
        return o(s, n),
        s._applySuper = r,
        s._superClass = t,
        s.constructor = e,
        e
    }
    ,
    t
}),
define("dt/lib/event", ["require", "jquery"], function(e) {
    function i(e) {
        return t.extend(e, s)
    }
    var t = e("jquery")
      , n = t.isFunction
      , r = t.inArray
      , s = {
        addEventListener: function(e, t) {
            n(e) && (t = e,
            e = "*"),
            this.__listeners = this.__listeners || {};
            var i = this.__listeners[e] || (this.__listeners[e] = []);
            return r(i, t) < 0 && i.push(t),
            this
        },
        removeEventListener: function(e, t) {
            n(e) && (t = e,
            e = "*"),
            this.__listeners = this.__listeners || {};
            var i = this.__listeners[e];
            if (i)
                if (t) {
                    var s = r(i, t);
                    ~s && delete i[s]
                } else
                    i.length = 0,
                    delete this.__listeners[e];
            return this
        },
        removeAllEventListener: function() {
            return this.__listeners = [],
            this
        },
        fire: function(e, n) {
            this.__listeners = this.__listeners || {};
            var r = this.__listeners[e]
              , i = this;
            return r && t.each(r, function(t, r) {
                n = n || {},
                n.type = e,
                r.call(i, n)
            }),
            e !== "*" && this.fire("*", n),
            this
        }
    };
    return {
        enableEvent: i
    }
}),
define("dt/lib/enumeration", ["require", "jquery"], function(e) {
    function s(e) {
        var n;
        if (t.type(e) === "array") {
            n = {};
            for (var r = 0, i = e.length; r < i; r++)
                n[e[r]] = e[r]
        } else
            n = e;
        return n
    }
    function o(e) {
        for (var t in e)
            if (e.hasOwnProperty(t) && !r.test(t))
                throw new Error('Key must be spelled like "AAAA_BBB".')
    }
    var t = e("jquery")
      , n = {}
      , r = /^[A-Z][A-Z_]*$/;
    n.makeEnum = function(e, n) {
        function r() {}
        return n = n || {},
        e = s(e),
        o(e),
        t.extend(r.prototype, i, n),
        t.extend(new r, e)
    }
    ;
    var i = {
        has: function(e) {
            return this.hasOwnProperty(e)
        },
        hasValue: function(e) {
            return this.getKeyByValue(e) != null 
        },
        get: function(e) {
            return this.hasOwnProperty(e) ? this[e] : null 
        },
        getKeyByValue: function(e) {
            for (var t in this)
                if (this.hasOwnProperty(t) && this[t] === e)
                    return t;
            return null 
        },
        contains: function(e, n) {
            n && !t.isArray(n) && (n = [n]);
            for (var r = 0, i = n.length; r < i; r++) {
                var s = !1;
                for (var o = 0, u = e.length; o < u; o++)
                    this[e[o]] === n[r] && (s = !0);
                if (!s)
                    return !1
            }
            return !0
        },
        forEachEnum: function(e, t) {
            for (var n in this)
                this.hasOwnProperty(n) && r.test(n) && e.call(t, n, this[n])
        }
    };
    return n
}),
define("dt/lib/disable", ["require", "jquery"], function(e) {
    function o(e, n, i) {
        e = e != null  ? e : "";
        var o = s[e];
        if (!o && i) {
            var u = n != null  ? r + "-" + n : "";
            o = s[e] = t('<div class="' + r + " " + u + '"></div>').appendTo(document.body)
        }
        return o
    }
    var t = e("jquery")
      , n = {}
      , r = "dt-global-mask"
      , i = "dtGlobalMask"
      , s = {};
    return n.globalDisable = function(e) {
        n.globalMask(e ? 0 : !1)
    }
    ,
    n.globalMask = function(e, t, n, r) {
        var s;
        if (e === !1)
            s = o(t),
            s && s.hide().off("." + i);
        else {
            e == null  && (e = .5),
            s = o(t, n, !0),
            s.css({
                opacity: e
            }).show();
            for (var u in r)
                r.hasOwnProperty(u) && s.on(u + "." + i, r[u])
        }
    }
    ,
    n.disposeGlobalMask = function(e) {
        var t = o(e);
        t && t.off().remove()
    }
    ,
    n
}),
define("dt/lib/number", ["require"], function(e) {
    var t = {}
      , n = /^(\d+)px$/
      , r = /^(\d+|\d+\.\d+)%$/;
    t.ordinalSuffix = function(e) {
        return e == 1 ? "st" : e == 2 ? "nd" : e == 3 ? "rd" : "th"
    }
    ,
    t.pad = function(e, t) {
        var n = ""
          , r = e < 0
          , i = String(Math.abs(e));
        return i.length < t && (n = (new Array(t - i.length + 1)).join("0")),
        (r ? "-" : "") + n + i
    }
    ,
    t.formatNumber = function(e, n, r, i, s) {
        if (!n)
            return e;
        s && /[ID]%/.test(n) && (e *= 100);
        var o = /D+/.exec(n)
          , u = o && o.length > 0 ? o[0].length : 0;
        e = t.fixNumber(e, u, i);
        var a, f = e.toString(), l = f.split("."), c = l[0], h = l.length > 1 ? l[1] : "";
        return a = n.replace(/I+,*I*/g, function() {
            var e = arguments[0], t = e.lastIndexOf(","), n, i, s = [];
            if (t >= 0 && t !== c.length - 1) {
                i = e.length - 1 - t;
                var o;
                while ((o = c.length - i) > 0 && i > 0)
                    s.push(c.substr(o, i)),
                    c = c.substring(0, o);
                s.push(c),
                s.reverse(),
                s[0] === "-" ? (s.shift(),
                n = "-" + s.join(",")) : n = s.join(",")
            } else
                n = c;
            return r && n && n.indexOf("-") < 0 && (n = "+" + n),
            n
        }),
        a = a.replace(/D+/g, function() {
            var e = arguments[0]
              , t = h;
            return t.length > e.length ? t = t.substr(0, e.length) : t += (new Array(e.length - t.length)).join("0"),
            t
        }),
        a
    }
    ,
    t.fixNumber = function(e, t, n) {
        e = i(e);
        if (t == null  || e == null )
            return e;
        if (!n) {
            var r = Math.pow(10, t);
            return Math.round(e * r) / r
        }
        return n == 2 ? Number(e).toFixed(t) : Number(e)
    }
    ;
    var i = t.getNumber = function(e) {
        var t = parseFloat(e);
        return e - t >= 0 ? t : null 
    }
    ;
    return t.refineNumber = function(e) {
        var t = [];
        for (var n = 0, r = e.length; n < r; n++) {
            var s = i(e[n]);
            s != null  && t.push(s)
        }
        return t
    }
    ,
    t.validateNumeric = function(e) {
        return e - parseFloat(e) >= 0
    }
    ,
    t.isInteger = function(e) {
        return t.validateNumeric(e) && e % 1 === 0
    }
    ,
    t.isPxStr = function(e) {
        return n.test(e)
    }
    ,
    t.parsePxStr = function(e) {
        return n.test(e) ? parseFloat(RegExp.$1) : null 
    }
    ,
    t.isPercentStr = function(e) {
        return r.test(e)
    }
    ,
    t.parsePercentStr = function(e) {
        return r.test(e) ? parseFloat(RegExp.$1) : null 
    }
    ,
    t
}),
define("dt/lib/htmlCleaner", ["require"], function(e) {
    function r(e, n) {
        switch (e.nodeType) {
        case 1:
            var i = e.tagName
              , s = e.attributes
              , o = n[i.toLowerCase()];
            if (!o)
                return t;
            var u = document.createElement(i);
            for (var a = 0, f = s.length; a < f; a++)
                ~o.indexOf(s[a].name) && u.setAttribute(s[a].name, s[a].value);
            var l = e.childNodes;
            for (var a = 0, f = l.length; a < f; a++) {
                var c = r(l[a], n);
                c !== t && u.appendChild(c)
            }
            return u;
        case 3:
            return document.createTextNode(e.nodeValue);
        default:
            return t
        }
    }
    function i(e) {
        try {
            return (new DOMParser).parseFromString(e, "text/html")
        } catch (t) {
            var n = new ActiveXObject("MSXML2.DOMDocument");
            return n.loadXML(e)
        }
    }
    function s(e, s) {
        s = s || {};
        var o = i(e)
          , u = s.htmlAllow || n.BASE
          , a = s.targetEl || document.createElement("div")
          , f = o.body.childNodes;
        a.innerHTML = "";
        for (var l = 0, c = f.length; l < c; l++) {
            var h = r(f[l], u);
            h !== t && a.appendChild(h)
        }
        return a.innerHTML
    }
    var t, n = {
        BASE: {
            a: ["title", "alt", "href", "class", "style"],
            b: ["class", "style"],
            em: ["class", "style"],
            strong: ["class", "style"],
            i: ["class", "style"],
            img: ["src", "class", "style"],
            div: ["class", "style"],
            p: ["class", "style"],
            br: []
        },
        EC_FORMATTER: {
            a: ["title", "alt", "href", "class", "style"],
            b: ["class", "style"],
            em: ["class", "style"],
            strong: ["class", "style"],
            i: ["class", "style"],
            img: ["src", "class", "style"],
            div: ["class", "style"],
            p: ["class", "style"],
            br: []
        }
    };
    return {
        htmlClean: s,
        HTMLCleanAllow: n
    }
}),
define("dt/lib/codeStringify", ["require", "jquery"], function(e) {
    function f(e, n, r, i) {
        var s = i.singleLineDepth, o = s != null  ? s <= r ? "single" : "multiple" : "auto", u = i.quotationMark, p = i.indentBase, d = i.lineBreak, v = i.inlineDelimiterSpace, m = t.type(e), g = (new Array(r * p + 1)).join(" "), y = (new Array((r + 1) * p + 1)).join(" "), b = !1, w = n != null  ? l(n, u) + ": " : "", E;
        switch (m) {
        case "function":
            b = o !== "single",
            E = w + a.printFunction(e, r, p);
            break;
        case "regexp":
            E = w + u + e + u;
            break;
        case "date":
            E = w + h(e, u);
            break;
        case "array":
            var S = [];
            for (var x = 0, T = e.length; x < T; x++) {
                var N = f(e[x], null , r + 1, i);
                S.push(N.str),
                N.hasLineBreak && (b = !0)
            }
            o === "multiple" && (b = !0);
            var C = b ? d : ""
              , k = "," + (b ? d + y : v)
              , L = b ? y : ""
              , A = b ? g : "";
            E = "" + w + "[" + C + L + S.join(k) + C + A + "]";
            break;
        case "object":
            var S = [];
            for (var x in e)
                if (e.hasOwnProperty(x)) {
                    var N = f(e[x], x, r + 1, i);
                    S.push(N.str)
                }
            b = o !== "single";
            var C = b ? d : ""
              , k = "," + (b ? d + y : v)
              , L = b ? y : ""
              , A = b ? g : "";
            E = "" + w + "{" + C + L + S.join(k) + C + A + "}";
            break;
        case "boolean":
        case "null":
        case "undefined":
            E = w + String(e);
            break;
        case "number":
            E = w + (isFinite(e) ? String(e) : "null");
            break;
        case "string":
            E = w + c(e, u);
            break;
        default:
            throw new Error('Illegal type "' + m + '" at "' + e + '"')
        }
        return {
            str: E,
            hasLineBreak: b
        }
    }
    function l(e, t) {
        return a.jsReservedWordsMap[e] ? t + e + t : /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(e) ? e : c(e, t)
    }
    function c(e, t) {
        var n = s[t];
        n.lastIndex = 0;
        var r = u[t]
          , i = n.test(e) ? e.replace(n, function(e) {
            var t = r[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) : e;
        return t + i + t
    }
    function h(e, t) {
        return isFinite(e.valueOf()) ? c(e.getUTCFullYear() + "-" + p(e.getUTCMonth() + 1) + "-" + p(e.getUTCDate()) + "T" + p(e.getUTCHours()) + ":" + p(e.getUTCMinutes()) + ":" + p(e.getUTCSeconds()) + "Z", t) : "null"
    }
    function p(e) {
        return e < 10 ? "0" + e : e
    }
    var t = e("jquery")
      , n = 4
      , r = "\n"
      , i = '"'
      , s = {
        '"': /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        "'": /[\\\'\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
    }
      , o = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        "\\": "\\\\"
    }
      , u = {
        '"': t.extend({}, o, {
            '"': '\\"'
        }),
        "'": t.extend({}, o, {
            "'": "\\'"
        })
    }
      , a = {};
    return a.jsReservedWords = ["break", "delete", "function", "return", "typeof", "case", "do", "if", "switch", "var", "catch", "else", "in", "this", "void", "continue", "false", "instanceof", "throw", "while", "debugger", "finally", "new", "true", "with", "default", "for", "null", "try", "abstract", "double", "goto", "native", "static", "boolean", "enum", "implements", "package", "super", "byte", "export", "import", "private", "synchronized", "char", "extends", "int", "protected", "throws", "class", "final", "interface", "public", "transient", "const", "float", "long", "short", "volatile"],
    a.jsReservedWordsMap = function(e) {
        var t = {};
        for (var n = 0, r = e.length; n < r; n++)
            t[e[n]] = 1;
        return t
    }(a.jsReservedWords),
    a.stringifyJSObject = function(e, t) {
        t = t || {},
        t.indentBase == null  && (t.indentBase = n),
        t.lineBreak == null  && (t.lineBreak = r),
        t.quotationMark == null  && (t.quotationMark = i);
        if (t.quotationMark !== '"' && t.quotationMark !== "'")
            throw new Error("Illegal quotation mark: " + t.quotationMark);
        t.compress && (t.indentBase = 0,
        t.lineBreak = ""),
        t.inlineDelimiterSpace = t.compress ? "" : " ";
        try {
            var s = f(e, null , 0, t);
            return s.str
        } catch (o) {
            return t.errorMessage || ""
        }
    }
    ,
    a.stringifyJSObject2HTML = function(e, t, n) {
        return "<pre>" + a.stringifyJSObject(e, t, n) + "</pre>"
    }
    ,
    a.printFunction = function(e, n, r) {
        var i = (new Array((n + 1) * r)).join(" ")
          , s = (e + "").split("\n")
          , o = "";
        return s.length > 1 && t.trim(s[s.length - 1]) === "}" && (s.pop(),
        o = "\n" + (new Array(n * r)).join(" ") + "}"),
        s.join("\n" + i) + o
    }
    ,
    a
}),
define("dt/lib/others", ["require", "jquery", "./base"], function(e) {
    var t = e("jquery")
      , n = e("./base")
      , r = {}
      , i = /#\{(.+?)\}/g;
    r.parseURL = function(e) {
        var t = [];
        if (!e)
            return t;
        var n = document.createElement("a");
        n.href = e;
        var r = (n.search || "").replace(/^\?/, "").split("&");
        for (var i = 0, s = r.length; i < s; i++) {
            var o = (r[i] || "").split("=");
            o.length > 1 && o[0] && t.push({
                name: o[0],
                value: o[1]
            })
        }
        return t
    }
    ,
    r.loadLazyImg = function(e, n) {
        !n && (n = "src-origin"),
        e.each(function(e, r) {
            r = t(r);
            var i = r.data(n);
            i && (r.attr("src", i),
            r.data(n, ""))
        })
    }
    ,
    r.parseInlineCss = function(e) {
        e = e || "";
        var n = {}
          , r = e.split(";");
        for (var i = 0, s = r.length; i < s; i++) {
            var o = r[i].split(":");
            n[t.trim(o[0])] = t.trim(o[1])
        }
        return n
    }
    ,
    r.showBalloonTip = function() {
        var e, n, i = "BAIDUHUI_BALLOON_TIP_SHOWN", s = "DNOT_SHOW_WHEN_CLOSE";
        return function(o, u, a, f) {
            function l() {
                e && e.hide(),
                n === s && r.cookie(i, 1),
                n = null 
            }
            if (o === !1)
                l();
            else {
                n = f;
                if (n === s && r.cookie(i))
                    return;
                e || (e = t(['<div class="balloon-tip">', '<div class="content"></div>', '<div class="triangle"><i></i><em></em></div>', '<div class="close-btn">X</div>', "</div>"].join("")).hide().appendTo(document.body),
                t(".close-btn", e).click(l)),
                t(".content", e).html(o),
                e.css({
                    position: "absolute",
                    left: u,
                    top: a
                }).show()
            }
        }
    }(),
    r.cookie = function(e, t) {
        if (t != null )
            return document.cookie = e + "=" + encodeURIComponent(t),
            t;
        var n = new RegExp("(^| )" + e + "=([^;]*)(;|$)")
          , r = n.exec(document.cookie);
        return r ? decodeURIComponent(r[2]) : null 
    }
    ,
    function() {
        var e = !1;
        r.enableWindowScroll = function(t) {
            e = !t
        }
        ,
        t(window).scroll(function(t) {
            e && (t.preventDefault(),
            t.stopPropagation())
        })
    }(),
    r.linkTargetBlank = function(e) {
        var t = document
          , n = t.body
          , r = t.createElement("a");
        r.style.display = "none",
        r.href = e || "#",
        r.target = "_blank",
        n.appendChild(r),
        r.click(),
        n.removeChild(r)
    }
    ;
    var s = r.appendParam = function(e, t) {
        return e + (e.indexOf("?") < 0 ? "?" : "&") + t
    }
    ;
    return r.replaceIntoParam = function(e, t, r) {
        if (!e || n.isBlank(e))
            return e;
        r = r != null  ? encodeURIComponent(r) : "";
        var i = new RegExp("([&~?])" + t + "=[^&]*")
          , o = t + "=" + r;
        return i.test(e) ? e = e.replace(i, "$1" + o) : e = s(e, o),
        e
    }
    ,
    r.strTemplate = function(e, r) {
        e = String(e);
        var s = Array.prototype.slice.call(arguments, 1);
        return s.length ? (s = s.length === 1 ? n.isObject(r) ? r : s : s,
        e.replace(i, function(e, n) {
            var r = s[n];
            return t.isFunction(r) && (r = r(n)),
            r == null  ? "" : r
        })) : e
    }
    ,
    r.enhanceContentEditable = function(e) {
        e.keypress(function(e) {
            (e.keyCode || e.witch) === 13 && e.preventDefault()
        })
    }
    ,
    r.getOpposite = function(e) {
        var n = ["top", "right", "bottom", "left"]
          , r = t.inArray(e, n);
        return r < 0 ? null  : r + 2 < n.length ? n[r + 2] : n[n.length - r - 2]
    }
    ,
    function() {
        var e = []
          , t = !1;
        r.enableBeforeUnloadCheck = function() {
            if (t)
                return;
            t = !0,
            window.onbeforeunload = function() {
                var t;
                for (var n = 0, r, i; r = e[n]; n++)
                    if (i = r())
                        t = i;
                t && (window.event.returnValue = t)
            }
        }
        ,
        r.addBeforeUnloadChecker = function(t) {
            e.push(t)
        }
        ,
        r.removeBeforeUnloadChecker = function(t) {
            var r = n.arrayIndexOf(e, t);
            return ~r && e.splice(r, 1),
            !!~r
        }
    }(),
    r
}),
define("dt/ui/tooltip", ["require", "jquery", "../lib/base", "../lib/model"], function(e) {
    function p(e) {
        var t = d()
          , n = e.x
          , r = e.y;
        n == null  && (n = 0),
        r == null  && (r = 0);
        var i = e.xAnchor || "center"
          , s = e.yAnchor || "top"
          , o = i === "left" ? 0 : t.outerWidth()
          , u = s === "top" ? 0 : t.outerHeight();
        t.css({
            left: Math.round(i === "left" ? n : i === "center" ? n - o / 2 : n - o) + "px",
            top: Math.round(s === "top" ? r : s === "center" ? r - u / 2 : r - u) + "px"
        })
    }
    function d() {
        return c || (c = t('<div class="' + u + '" ' + 'style="display:none;"></div>').appendTo(document.body)),
        c
    }
    var t = e("jquery")
      , n = e("../lib/base")
      , r = e("../lib/model")
      , i = t.isFunction
      , s = t.extend
      , o = ".dtui-global-tooltip-namespace"
      , u = "dtui-global-tooltip"
      , a = {
        x: 0,
        y: -5,
        xAnchor: "center",
        yAnchor: "bottom"
    }
      , f = {
        x: 0,
        y: -15,
        xAnchor: "center",
        yAnchor: "bottom"
    }
      , l = {}
      , c = null 
      , h = !1;
    return l.showTooltip = function(e) {
        if (h)
            return;
        e = e || {};
        var t = e.text;
        if (t == null ) {
            l.hideTooltip();
            return
        }
        t = e.encodeHTML !== !1 ? n.encodeHTML(t) : t,
        d().html(t).show(),
        p(e.location)
    }
    ,
    l.hideTooltip = function() {
        d().hide()
    }
    ,
    l.disableTooltip = function() {
        l.hideTooltip(),
        h = !0
    }
    ,
    l.enableTooltip = function() {
        h = !1
    }
    ,
    l.bindTooltip = function(e) {
        function b(e) {
            d = {
                currentTarget: e.currentTarget,
                pageX: e.pageX,
                pageY: e.pageY
            }
        }
        function w(t) {
            var n = e.text;
            return i(n) ? n(t.currentTarget) : n
        }
        function E(e) {
            var n = i(u) ? u(e.currentTarget) : s({}, u || (c ? f : a));
            if (c)
                n.x += e.pageX,
                n.y += e.pageY;
            else if (!u) {
                var r = t(e.currentTarget)
                  , o = r.offset();
                n.x += o.left + r.outerWidth() / 2,
                n.y += o.top
            }
            return n
        }
        e = r.merge({}, e, {
            clone: !0,
            assignWhenCannotClone: !0
        });
        var u = e.location
          , c = e.followMouse;
        n.assert(!n.isJQuery(e.bindEl));
        var h = t(e.bindEl), d, v = ["mouseenter" + o, function(t) {
            b(t),
            l.showTooltip({
                text: w(d),
                encodeHTML: e.encodeHTML,
                location: E(d)
            })
        }
        ], m = ["mouseleave" + o, function() {
            d = null ,
            l.hideTooltip()
        }
        ], g = ["mousemove" + o, function(e) {
            b(e),
            p(E(d))
        }
        ], y = e.selector;
        y && (v.splice(1, 0, y),
        m.splice(1, 0, y),
        g.splice(1, 0, y)),
        h.on.apply(h, v).on.apply(h, m),
        c && h.on.apply(h, g);
        var S = {
            refresh: function() {
                d && l.showTooltip({
                    text: w(d),
                    encodeHTML: e.encodeHTML,
                    location: E(d)
                })
            },
            setText: function(t) {
                d && l.showTooltip({
                    text: t,
                    encodeHTML: e.encodeHTML,
                    location: E(d)
                })
            },
            hide: function() {
                d && l.hideTooltip()
            },
            dispose: function() {
                d && (l.hideTooltip(),
                d = null ),
                h.off(o)
            }
        };
        return S
    }
    ,
    l
}),
define("dt/lib", ["require", "./lib/Set", "./lib/base", "./lib/json", "./lib/dataDriven", "./lib/objectAccess", "./lib/objectOriented", "./lib/model", "./lib/event", "./lib/enumeration", "./lib/disable", "./lib/number", "./lib/throttle", "./lib/htmlCleaner", "./lib/codeStringify", "./lib/others", "./ui/tooltip"], function(e) {
    function n(e) {
        for (var t = 1, n = arguments.length; t < n; t++) {
            var r = arguments[t];
            for (var i in r)
                if (r.hasOwnProperty(i)) {
                    if (e[i])
                        throw new Error("Duplicate key: " + i);
                    e[i] = r[i]
                }
        }
        return e
    }
    var t = {
        Set: e("./lib/Set")
    };
    return n(t, e("./lib/base"), e("./lib/json"), e("./lib/dataDriven"), e("./lib/objectAccess"), e("./lib/objectOriented"), e("./lib/model"), e("./lib/event"), e("./lib/enumeration"), e("./lib/disable"), e("./lib/number"), e("./lib/throttle"), e("./lib/htmlCleaner"), e("./lib/codeStringify"), e("./lib/others"), e("./ui/tooltip")),
    t
}),
!function(e) {
    function t(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    function n() {
        this.raw = [],
        this.length = 0
    }
    function r() {
        return "___" + A++
    }
    function i(e, t) {
        var n = new Function;
        n.prototype = t.prototype,
        e.prototype = new n,
        e.prototype.constructor = e
    }
    function s(e) {
        return O[e]
    }
    function o(e) {
        return '"' + e.replace(/\x5C/g, "\\\\").replace(/"/g, '\\"').replace(/\x0A/g, "\\n").replace(/\x09/g, "\\t").replace(/\x0D/g, "\\r") + '"'
    }
    function u(e) {
        return e.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+]/g, function(e) {
            return "\\" + e
        })
    }
    function a(e) {
        var t = arguments;
        return e.replace(/\{([0-9]+)\}/g, function(e, n) {
            return t[n - 0 + 1]
        })
    }
    function f(e) {
        return e = e.replace(/^\s*\*/, ""),
        a('gv({0},["{1}"])', o(e), e.replace(/\[['"]?([^'"]+)['"]?\]/g, function(e, t) {
            return "." + t
        }).split(".").join('","'))
    }
    function l(e, t, n, r, i, s) {
        for (var o = n.length, u = e.split(t), a = 0, f = [], l = 0, c = u.length; c > l; l++) {
            var h = u[l];
            if (l) {
                var p = 1;
                for (a++; ; ) {
                    var d = h.indexOf(n);
                    if (0 > d) {
                        f.push(a > 1 && p ? t : "", h);
                        break
                    }
                    if (a = r ? a - 1 : 0,
                    f.push(a > 0 && p ? t : "", h.slice(0, d), a > 0 ? n : ""),
                    h = h.slice(d + o),
                    p = 0,
                    0 === a)
                        break
                }
                0 === a && (i(f.join("")),
                s(h),
                f = [])
            } else
                h && s(h)
        }
        a > 0 && f.length > 0 && (s(t),
        s(f.join("")))
    }
    function c(e, t, n) {
        var r, i = [], s = t.options, u = "", a = "", h = "", p = "";
        return n && (u = "ts(",
        a = ")",
        h = D,
        p = P,
        r = s.defaultFilter),
        l(e, s.variableOpen, s.variableClose, 1, function(e) {
            n && e.indexOf("|") < 0 && r && (e += "|" + r);
            var s = e.indexOf("|")
              , o = (s > 0 ? e.slice(0, s) : e).replace(/^\s+/, "").replace(/\s+$/, "")
              , l = s > 0 ? e.slice(s + 1) : ""
              , d = 0 === o.indexOf("*")
              , v = [d ? "" : u, f(o), d ? "" : a];
            if (l) {
                l = c(l, t);
                for (var m = l.split("|"), g = 0, y = m.length; y > g; g++) {
                    var b = m[g];
                    /^\s*([a-z0-9_-]+)(\((.*)\))?\s*$/i.test(b) && (v.unshift('fs["' + RegExp.$1 + '"]('),
                    RegExp.$3 && v.push(",", RegExp.$3),
                    v.push(")"))
                }
            }
            i.push(h, v.join(""), p)
        }, function(e) {
            i.push(h, n ? o(e) : e, p)
        }),
        i.join("")
    }
    function h(e, t) {
        this.value = e,
        this.engine = t
    }
    function p(e, t) {
        this.value = e,
        this.engine = t,
        this.children = [],
        this.cloneProps = []
    }
    function d(e, t) {
        var n = e.stack
          , r = t ? n.find(function(e) {
            return e instanceof t
        }) : n.bottom();
        if (r) {
            for (var i; (i = n.top()) !== r; ) {
                if (!i.autoClose)
                    throw new Error(i.type + " must be closed manually: " + i.value);
                i.autoClose(e)
            }
            r.close(e)
        }
        return r
    }
    function v(e, t) {
        if (!/^\s*([a-z0-9\/_-]+)\s*(\(\s*master\s*=\s*([a-z0-9\/_-]+)\s*\))?\s*/i.test(e))
            throw new Error("Invalid " + this.type + " syntax: " + e);
        this.master = RegExp.$3,
        this.name = RegExp.$1,
        p.call(this, e, t),
        this.blocks = {}
    }
    function m(e, t) {
        if (!/^\s*([a-z0-9\/_-]+)\s*$/i.test(e))
            throw new Error("Invalid " + this.type + " syntax: " + e);
        this.name = RegExp.$1,
        p.call(this, e, t),
        this.cloneProps = ["name"]
    }
    function g(e, t) {
        if (!/^\s*([a-z0-9\/_-]+)\s*$/i.test(e))
            throw new Error("Invalid " + this.type + " syntax: " + e);
        this.name = RegExp.$1,
        p.call(this, e, t),
        this.cloneProps = ["name", "state", "blocks"],
        this.blocks = {}
    }
    function y(e, t) {
        if (!/^\s*([a-z0-9_]+)\s*=([\s\S]*)$/i.test(e))
            throw new Error("Invalid " + this.type + " syntax: " + e);
        this.name = RegExp.$1,
        this.expr = RegExp.$2,
        p.call(this, e, t),
        this.cloneProps = ["name", "expr"]
    }
    function b(e, t) {
        if (!/^\s*([a-z0-9_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(e))
            throw new Error("Invalid " + this.type + " syntax: " + e);
        this.name = RegExp.$1,
        this.args = RegExp.$3,
        p.call(this, e, t),
        this.cloneProps = ["name", "args"]
    }
    function w(e, t) {
        if (!/^\s*([a-z0-9\/_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(e))
            throw new Error("Invalid " + this.type + " syntax: " + e);
        this.name = RegExp.$1,
        this.args = RegExp.$3,
        p.call(this, e, t),
        this.cloneProps = ["name", "args"]
    }
    function E(e, t) {
        var n = new RegExp(a("^\\s*({0}[\\s\\S]+{1})\\s+as\\s+{0}([0-9a-z_]+){1}\\s*(,\\s*{0}([0-9a-z_]+){1})?\\s*$", u(t.options.variableOpen), u(t.options.variableClose)),"i");
        if (!n.test(e))
            throw new Error("Invalid " + this.type + " syntax: " + e);
        this.list = RegExp.$1,
        this.item = RegExp.$2,
        this.index = RegExp.$4,
        p.call(this, e, t),
        this.cloneProps = ["list", "item", "index"]
    }
    function S(e, t) {
        p.call(this, e, t)
    }
    function x(e, t) {
        S.call(this, e, t)
    }
    function T(e, t) {
        p.call(this, e, t)
    }
    function N(e, t) {
        t.target = e;
        var n = t.engine
          , r = e.name;
        if (n.targets[r])
            switch (n.options.namingConflict) {
            case "override":
                n.targets[r] = e,
                t.targets.push(r);
            case "ignore":
                break;
            default:
                throw new Error("Target exists: " + r)
            }
        else
            n.targets[r] = e,
            t.targets.push(r)
    }
    function C(e, t) {
        F[e] = t,
        t.prototype.type = e
    }
    function k(e) {
        this.options = {
            commandOpen: "<!--",
            commandClose: "-->",
            commandSyntax: /^\s*(\/)?([a-z]+)\s*(?::([\s\S]*))?$/,
            variableOpen: "${",
            variableClose: "}",
            defaultFilter: "html"
        },
        this.config(e),
        this.targets = {},
        this.filters = t({}, M)
    }
    function L(e, t) {
        function r() {
            var e;
            if (c.length > 0 && (e = c.join(""))) {
                var n = new h(e,t);
                n.beforeAdd(f),
                a.top().addChild(n),
                c = [],
                t.options.strip && f.current instanceof p && (n.value = e.replace(/^[\x20\t\r]*\n/, "")),
                f.current = n
            }
        }
        var i, s = t.options.commandOpen, o = t.options.commandClose, u = t.options.commandSyntax, a = new n, f = {
            engine: t,
            targets: [],
            stack: a,
            target: null 
        }, c = [];
        return l(e, s, o, 0, function(e) {
            var n = u.exec(e);
            if (n && (i = F[n[2].toLowerCase()]) && "function" == typeof i) {
                r();
                var a = f.current;
                t.options.strip && a instanceof h && (a.value = a.value.replace(/\r?\n[\x20\t]*$/, "\n")),
                n[1] ? a = d(f, i) : (a = new i(n[3],t),
                "function" == typeof a.beforeOpen && a.beforeOpen(f),
                a.open(f)),
                f.current = a
            } else
                /^\s*\/\//.test(e) || c.push(s, e, o);
            i = null 
        }, function(e) {
            c.push(e)
        }),
        r(),
        d(f),
        f.targets
    }
    n.prototype = {
        push: function(e) {
            this.raw[this.length++] = e
        },
        pop: function() {
            if (this.length > 0) {
                var e = this.raw[--this.length];
                return this.raw.length = this.length,
                e
            }
        },
        top: function() {
            return this.raw[this.length - 1]
        },
        bottom: function() {
            return this.raw[0]
        },
        find: function(e) {
            for (var t = this.length; t--; ) {
                var n = this.raw[t];
                if (e(n))
                    return n
            }
        }
    };
    var A = 178245
      , O = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }
      , M = {
        html: function(e) {
            return e.replace(/[&<>"']/g, s)
        },
        url: encodeURIComponent,
        raw: function(e) {
            return e
        }
    }
      , _ = 'var r="";'
      , D = "r+="
      , P = ";"
      , H = "return r;";
    "undefined" != typeof navigator && /msie\s*([0-9]+)/i.test(navigator.userAgent) && RegExp.$1 - 0 < 8 && (_ = "var r=[],ri=0;",
    D = "r[ri++]=",
    H = 'return r.join("");'),
    h.prototype = {
        getRendererBody: function() {
            var e = this.value
              , t = this.engine.options;
            return !e || t.strip && /^\s*$/.test(e) ? "" : c(e, this.engine, 1)
        },
        clone: function() {
            return this
        }
    },
    p.prototype = {
        addChild: function(e) {
            this.children.push(e)
        },
        open: function(e) {
            var t = e.stack.top();
            t && t.addChild(this),
            e.stack.push(this)
        },
        close: function(e) {
            e.stack.top() === this && e.stack.pop()
        },
        getRendererBody: function() {
            for (var e = [], t = this.children, n = 0; n < t.length; n++)
                e.push(t[n].getRendererBody());
            return e.join("")
        },
        clone: function() {
            for (var e = new this.constructor(this.value,this.engine), t = 0, n = this.children.length; n > t; t++)
                e.addChild(this.children[t].clone());
            for (var t = 0, n = this.cloneProps.length; n > t; t++) {
                var r = this.cloneProps[t];
                e[r] = this[r]
            }
            return e
        }
    };
    var B = 'data=data||{};var v={},fs=engine.filters,hg=typeof data.get=="function",gv=function(n,ps){var p=ps[0],d=v[p];if(d==null){if(hg){return data.get(n);}d=data[p];}for(var i=1,l=ps.length;i<l;i++)if(d!=null)d = d[ps[i]];return d;},ts=function(s){if(typeof s==="string"){return s;}if(s==null){s="";}return ""+s;};';
    i(v, p),
    i(m, p),
    i(g, p),
    i(y, p),
    i(b, p),
    i(w, p),
    i(E, p),
    i(S, p),
    i(x, S),
    i(T, S);
    var j = {
        READING: 1,
        READED: 2,
        APPLIED: 3,
        READY: 4
    };
    g.prototype.applyMaster = v.prototype.applyMaster = function(e) {
        function t(e) {
            var r = e.children;
            if (r instanceof Array)
                for (var i = 0, s = r.length; s > i; i++) {
                    var o = r[i];
                    o instanceof m && n[o.name] && (o = r[i] = n[o.name]),
                    t(o)
                }
        }
        if (this.state >= j.APPLIED)
            return 1;
        var n = this.blocks
          , r = this.engine.targets[e];
        return r && r.applyMaster(r.master) ? (this.children = r.clone().children,
        t(this),
        this.state = j.APPLIED,
        1) : void 0
    }
    ,
    v.prototype.isReady = function() {
        function e(r) {
            for (var i = 0, s = r.children.length; s > i; i++) {
                var o = r.children[i];
                if (o instanceof g) {
                    var u = t.targets[o.name];
                    n = n && u && u.isReady(t)
                } else
                    o instanceof p && e(o)
            }
        }
        if (this.state >= j.READY)
            return 1;
        var t = this.engine
          , n = 1;
        return this.applyMaster(this.master) ? (e(this),
        n && (this.state = j.READY),
        n) : void 0
    }
    ,
    v.prototype.getRenderer = function() {
        if (this.renderer)
            return this.renderer;
        if (this.isReady()) {
            var e = new Function("data","engine",[B, _, this.getRendererBody(), H].join("\n"))
              , t = this.engine;
            return this.renderer = function(n) {
                return e(n, t)
            }
            ,
            this.renderer
        }
        return null 
    }
    ,
    v.prototype.open = function(e) {
        d(e),
        p.prototype.open.call(this, e),
        this.state = j.READING,
        N(this, e)
    }
    ,
    y.prototype.open = w.prototype.open = function(e) {
        e.stack.top().addChild(this)
    }
    ,
    m.prototype.open = function(e) {
        p.prototype.open.call(this, e),
        (e.imp || e.target).blocks[this.name] = this
    }
    ,
    x.prototype.open = function(e) {
        var t = new T;
        t.open(e);
        var n = d(e, S);
        n.addChild(this),
        e.stack.push(this)
    }
    ,
    T.prototype.open = function(e) {
        var t = d(e, S);
        t.addChild(this),
        e.stack.push(this)
    }
    ,
    g.prototype.open = function(e) {
        this.parent = e.stack.top(),
        this.target = e.target,
        p.prototype.open.call(this, e),
        this.state = j.READING,
        e.imp = this
    }
    ,
    w.prototype.close = y.prototype.close = function() {}
    ,
    g.prototype.close = function(e) {
        p.prototype.close.call(this, e),
        this.state = j.READED,
        e.imp = null 
    }
    ,
    v.prototype.close = function(e) {
        p.prototype.close.call(this, e),
        this.state = this.master ? j.READED : j.APPLIED,
        e.target = null 
    }
    ,
    g.prototype.autoClose = function(e) {
        var t = this.parent.children;
        t.push.apply(t, this.children),
        this.children.length = 0;
        for (var n in this.blocks)
            this.target.blocks[n] = this.blocks[n];
        this.blocks = {},
        this.close(e)
    }
    ,
    w.prototype.beforeOpen = g.prototype.beforeOpen = y.prototype.beforeOpen = E.prototype.beforeOpen = b.prototype.beforeOpen = m.prototype.beforeOpen = S.prototype.beforeOpen = h.prototype.beforeAdd = function(e) {
        if (!e.stack.bottom()) {
            var t = new v(r(),e.engine);
            t.open(e)
        }
    }
    ,
    g.prototype.getRendererBody = function() {
        return this.applyMaster(this.name),
        p.prototype.getRendererBody.call(this)
    }
    ,
    w.prototype.getRendererBody = function() {
        return a("{0}engine.render({2},{{3}}){1}", D, P, o(this.name), c(this.args, this.engine).replace(/(^|,)\s*([a-z0-9_]+)\s*=/gi, function(e, t, n) {
            return (t || "") + o(n) + ":"
        }))
    }
    ,
    y.prototype.getRendererBody = function() {
        return this.expr ? a("v[{0}]={1};", o(this.name), c(this.expr, this.engine)) : ""
    }
    ,
    S.prototype.getRendererBody = function() {
        return a("if({0}){{1}}", c(this.value, this.engine), p.prototype.getRendererBody.call(this))
    }
    ,
    T.prototype.getRendererBody = function() {
        return a("}else{{0}", p.prototype.getRendererBody.call(this))
    }
    ,
    E.prototype.getRendererBody = function() {
        return a('var {0}={1};if({0} instanceof Array)for (var {4}=0,{5}={0}.length;{4}<{5};{4}++){v[{2}]={4};v[{3}]={0}[{4}];{6}}else if(typeof {0}==="object")for(var {4} in {0}){v[{2}]={4};v[{3}]={0}[{4}];{6}}', r(), c(this.list, this.engine), o(this.index || r()), o(this.item), r(), r(), p.prototype.getRendererBody.call(this))
    }
    ,
    b.prototype.getRendererBody = function() {
        var e = this.args;
        return a("{2}fs[{5}]((function(){{0}{4}{1}})(){6}){3}", _, H, D, P, p.prototype.getRendererBody.call(this), o(this.name), e ? "," + c(e, this.engine) : "")
    }
    ;
    var F = {};
    C("target", v),
    C("block", m),
    C("import", g),
    C("use", w),
    C("var", y),
    C("for", E),
    C("if", S),
    C("elif", x),
    C("else", T),
    C("filter", b),
    k.prototype.config = function(e) {
        t(this.options, e)
    }
    ,
    k.prototype.compile = k.prototype.parse = function(e) {
        if (e) {
            var t = L(e, this);
            if (t.length)
                return this.targets[t[0]].getRenderer()
        }
        return new Function('return ""')
    }
    ,
    k.prototype.getRenderer = function(e) {
        var t = this.targets[e];
        return t ? t.getRenderer() : void 0
    }
    ,
    k.prototype.render = function(e, t) {
        var n = this.getRenderer(e);
        return n ? n(t) : ""
    }
    ,
    k.prototype.addFilter = function(e, t) {
        "function" == typeof t && (this.filters[e] = t)
    }
    ;
    var I = new k;
    I.Engine = k,
    "object" == typeof exports && "object" == typeof module ? exports = module.exports = I : "function" == typeof define && define.amd ? define("etpl", I) : e.etpl = I
}(this),
define("dt/tpl", ["require", "etpl", "./lib"], function(e) {
    function i(e) {
        var t = !1
          , r = !1;
        for (var i = 1; i < arguments.length; i++)
            arguments[i] === "raw" && (t = !0),
            arguments[i] === "null" && (r = !0);
        return e == null  && !r && (e = ""),
        n.obTypeOf(e) && (e = e()),
        e = String(e),
        t ? e : n.encodeHTML(e)
    }
    function s(e) {
        return e == null  && (e = ""),
        String(e).replace(/^option\./, "")
    }
    var t = e("etpl")
      , n = e("./lib")
      , r = {};
    return t.config({
        commandOpen: "{{",
        commandClose: "}}",
        defaultFilter: "ob"
    }),
    t.addFilter("ob", i),
    t.addFilter("dsp", s),
    r.render = function(e, n, r) {
        return !t.getRenderer(e) && r && t.compile(r),
        t.render(e, n || {})
    }
    ,
    r
}),
define("dt/ui/Component", ["require", "jquery", "dt/lib", "dt/tpl"], function(e) {
    function l() {
        function r(t) {
            e.disabled(t)
        }
        var e = this._viewModel();
        e.visible = n.ob(!0);
        var t = e.disabled;
        e.disabled = n.ob(!1),
        t != null  && this._disposable(t.subscribe(r, this))
    }
    function c(e) {
        if (!e)
            return;
        var r = o(this);
        e = r.$el = t(e),
        r.el = e[0],
        n.bindComponent(e, this),
        e.addClass(this.getFullCss().join(" "));
        var i = this._viewModel()
          , s = i.disabled
          , u = i.visible;
        this._disposable(s.subscribe(h, this)),
        this._disposable(u.subscribe(p, this)),
        h.call(this, s()),
        u(e[0].style.display !== "none")
    }
    function h(e) {
        this.$el()[e ? "addClass" : "removeClass"](this.getFullCss("-disabled").join(" "))
    }
    function p(e) {
        this.$el()[e ? "show" : "hide"]()
    }
    function d() {
        var e = o(this).cptDef.tplTarget || this._getDefineProperty("tplTarget")
          , t = this.$el();
        e && t && t.length && this._renderTpl(e, null , t),
        !this._getDefineProperty("suppressConstructSub") && t && t.length && this._constructSub(t)
    }
    function v() {
        var e = this.$el()
          , t = o(this);
        e.off(t.eventNamespace),
        e.removeClass(this.getFullCss().join(" ")),
        t.viewModel = null ,
        t.el = null ,
        t.$el = null ,
        t.subComponents = null ,
        t.sub$Els = null ,
        n.bindComponent(e, !1)
    }
    function m(e, r, i) {
        if (!i && n.isComponent(e) || i && n.isJQuery(e))
            r(e);
        else if (t.type(e) === "object" && !n.isAtom(e))
            for (var s in e)
                e.hasOwnProperty(s) && e[s] != null  && m(e[s], r, i)
    }
    function g(e) {
        var t = o(this)
          , r = t.viewModel = {}
          , i = this;
        return this._traverseFromAncestor(function(e) {
            r = n.merge(r, e.defineProperties.viewModel.call(i), {
                onlyMergeOwnPropertyInTarget: !1,
                levelOneNeedMerge: null ,
                clone: !1
            })
        }),
        r = n.merge(r, e, {
            onlyMergeOwnPropertyInTarget: !!this._getDefineProperty("viewModelOnlyAccessDeclaredProperties"),
            levelOneNeedMerge: t.viewModelMergeMap || {}
        }),
        t.viewModel = r,
        r
    }
    function y() {
        var e = o(this)
          , t = e.viewModelPublicMap = {}
          , n = e.viewModelMergeMap = {};
        this._traverseFromAncestor(function(e) {
            var r = e.defineProperties.viewModelPublic || [];
            for (var i = 0, s = r.length; i < s; i++)
                t[r[i]] = 1;
            var o = e.defineProperties.viewModelMerge || [];
            for (var i = 0, s = o.length; i < s; i++)
                n[o[i]] = 1
        })
    }
    function b() {
        var e = this._viewModel()
          , n = o(this)
          , r = [];
        this._traverseFromAncestor(function(e) {
            var n = e.defineProperties.css;
            t.isArray(n) ? r.push.apply(r, n) : n && r.push(n)
        }),
        n.basicCss = r;
        var i = e && e.css || [];
        t.isArray(i) || (i = [i]),
        n.extraCss = i
    }
    function w(e) {
        return e = i.normalizePath(e),
        !!o(this).viewModelPublicMap[e]
    }
    function E(e) {
        if (e && t.isFunction(e.dispose))
            try {
                e.dispose()
            } catch (r) {
                if (f.debug)
                    throw r;
                f.printLog && f.printLog.error(r)
            }
        else
            e && n.isJQuery(e) && e.off(this._event())
    }
    function S(e) {
        e = e || o(this).subComponents,
        m(e, function(e) {
            try {
                e.dispose()
            } catch (t) {
                if (f.debug)
                    throw t;
                f.printLog && f.printLog.error(t)
            }
        });
        if (!n.isAtom(e))
            for (var t in e)
                e.hasOwnProperty(t) && (e[t] = null )
    }
    function x(e) {
        e = e || o(this).sub$els;
        var t = this._event();
        m(e, function(e) {
            e.off(t)
        }, !0);
        if (!n.isAtom(e))
            for (var r in e)
                e.hasOwnProperty(r) && (e[r] = null )
    }
    var t = e("jquery")
      , n = e("dt/lib")
      , r = e("dt/tpl")
      , i = n.getByPath
      , s = n.setByPath
      , o = n.makeInner()
      , u = "dtui-cpt"
      , a = "__originalHTML"
      , f = o.attach(n.newClass(n.enableEvent({
        _define: {
            tpl: "",
            tplTarget: "",
            css: "",
            viewModel: function() {
                return {
                    disabled: null ,
                    visible: null ,
                    css: "",
                    tplTarget: null ,
                    tplRenderMode: "html"
                }
            },
            viewModelPublic: ["disabled", "visible"],
            viewModelMerge: [],
            viewModelOnlyAccessDeclaredProperties: !0,
            suppressConstructSub: !1
        },
        _prepare: t.noop,
        _init: t.noop,
        _dispose: t.noop,
        _disposeFinally: t.noop,
        _run: t.noop,
        _event: function(e) {
            var t = o(this).eventNamespace;
            return (e != null  ? e : "") + t
        },
        _parseViewModel: function(e, t) {
            return e
        },
        _parseCptDef: function(e) {
            return e
        },
        _construct: function(e, r, i) {
            arguments.length > 0 && n.assert(e != null ),
            !e || t.isPlainObject(e) ? (i = r,
            r = e,
            e = null ) : e = t(e),
            i = t.extend({}, i),
            n.isComponent(this, !0);
            var s = o(this);
            s.cptDef = i,
            s.eventNamespace = ".namespace" + n.localUID(),
            s.subComponents = {},
            s.sub$Els = {},
            s.disposed = !1,
            s.cptDisposableArea = {},
            s.cptInstanceUID = "cpt-instance-" + n.localUID(),
            y.call(this),
            r = this._parseViewModel(r || {}, i) || {},
            g.call(this, r),
            b.call(this),
            l.call(this),
            c.call(this, e),
            this._prepare(),
            d.call(this),
            this._init()
        },
        dispose: function() {
            var e = o(this);
            if (!e.disposed) {
                var t = this.el()
                  , n = this[a] || "";
                this._dispose(),
                S.call(this),
                x.call(this),
                this._disposable(!1),
                v.call(this),
                this._disposeFinally(),
                t.innerHTML = n,
                e.disposed = !0
            }
        },
        isDisposed: function() {
            return !!o(this).disposed
        },
        isFrozen: function() {
            return this._viewModel().disabled() || this.isDisposed()
        },
        _disposable: function(e, r) {
            n.assert(e != null );
            var i = o(this).cptDisposableArea;
            if (e == null )
                return e;
            if (e === !1)
                for (var s in i)
                    i.hasOwnProperty(s) && (E.call(this, i[s]),
                    i[s] = null );
            else
                t.type(e) === "string" ? (E.call(this, i[e]),
                i[e] = null ) : (n.assert(t.isFunction(e.dispose) || n.isJQuery(e), "No dispose method nor not jQuery!"),
                r = r || "-component-anonymouse-disposable" + n.localUID(),
                i[r] = e);
            return e
        },
        resize: t.noop,
        _manuInitView: function(e) {
            c.call(this, e),
            this._constructSub(e)
        },
        _applyTpl: function(e, t) {
            t && (this._renderTpl(t, null , e),
            this._constructSub(e))
        },
        _renderTpl: function(e, n, i) {
            var s = {
                viewModel: n || this._viewModel(),
                lang: this.getLang(),
                constant: this.getConstant()
            }
              , o = r.render(e, s, this._getDefineProperty("tpl")) || "";
            return i && t(i)[this._viewModel().tplRenderMode](o),
            o
        },
        _constructSub: function(e, r) {
            var i = t(e);
            n.assert(i.length),
            r && i.data("cpt") && this._constructSubCpt.call(this, e);
            var s = this;
            t("*[data-cpt]", i).each(function(e, t) {
                s._constructSubCpt(t)
            })
        },
        _constructSubCpt: function(e) {
            var r = t(e)
              , s = e.innerHTML
              , o = this._viewModel()
              , u = this._parseCptDef((new Function("viewModel","lib","lang","constant","return {" + r.data("cpt") + "};")).call(this, o, n, this.getLang(), this.getConstant()))
              , f = this.getCptClass(u.type)
              , l = u.viewModelGet ? i(u.viewModelGet, o) : u.viewModel
              , c = new f(e,l,u);
            return c[a] = s,
            this._sub(u.name || "-sub-cpt-name-" + n.localUID(), c)
        },
        recreateSubCpt: function(e) {
            var t = this._sub(e);
            if (!t)
                return;
            var n = t.el();
            t.dispose(),
            this._sub(e, null ),
            this._constructSubCpt(n)
        },
        traversalRun: function(e) {
            m(o(this).subComponents, function(t) {
                t.traversalRun(e)
            }),
            this._run(e)
        },
        _sub: function(e, t, n) {
            var r = o(this).subComponents;
            return arguments.length < 2 ? i(e, r, i.actionChoice.notPlainReturn) : (s(e, t, r, n ? s.actionChoice.notPlainOverlap : s.actionChoice.notPlainThrow),
            t)
        },
        _getDefineProperty: function(e) {
            return this.constructor.defineProperties[e]
        },
        el: function() {
            return o(this).el
        },
        $el: function(e, t, n) {
            var r = o(this);
            return arguments.length === 0 ? r.$el : arguments.length === 1 ? i(e, r.sub$Els, i.actionChoice.notPlainReturn) : (s(e, t, r.sub$Els, n ? s.actionChoice.notPlainOverlap : s.actionChoice.notPlainThrow),
            t)
        },
        css: function() {
            return this._getDefineProperty("css") || ""
        },
        viewModel: function(e) {
            if (w.call(this, e))
                return i(e, o(this).viewModel);
            throw new Error(e + " is private!")
        },
        _viewModel: function() {
            return o(this).viewModel
        },
        getCptClass: function(e) {
            return f.cptClasses[e]
        },
        getCptDef: function(e) {
            return o(this).cptDef[e]
        },
        uid: function() {
            return o(this).cptInstanceUID
        },
        getFullCss: function(e) {
            var n = [u]
              , r = o(this);
            return n.push.apply(n, r.basicCss || []),
            n.push.apply(n, r.extraCss || []),
            t.map(n, function(t) {
                return t + (e || "")
            })
        },
        isDisabled: function() {
            return !!n.peek(this._viewModel().disabled)
        },
        getLang: function() {
            return f.defaultLanguageSet
        },
        getConstant: function() {
            return f.defaultConstant
        },
        clone: t.noop,
        _traverseFromAncestor: function(e) {
            var t = [];
            for (var n = this.constructor; n; n = n.prototype._superClass)
                t.push(n);
            for (var r = t.length; r--; )
                e.call(this, t[r])
        },
        localOb: function(e, t) {
            var r, i = o(this), s = i.localObRepo || (i.localObRepo = {});
            return arguments.length > 1 ? t === !1 ? (r = s[e],
            delete s[e]) : (n.assert(s[e] == null ),
            r = s[e] = t) : r = s[e],
            r
        },
        getAncestorLocalOb: function(e) {
            var t = this.$el(), r, i;
            while ((t = t && t.parent())[0] && !(i = (r = n.getComponent(t)) && r.localOb(e)) && t[0] !== document.body)
                ;
            return i
        }
    })));
    return f.cptClasses = {},
    f.defaultLanguageSet = {},
    f.defaultConstant = {},
    f.consoleLog = function(e) {
        var t = window.console;
        n.isObject(t) && typeof t.log == "function" && t.log(n.stringifyJSON(e))
    }
    ,
    f
}),
define("docTool/docUtil", ["require", "jquery", "globalArgs", "dt/lib"], function(e) {
    var t = e("jquery")
      , n = e("globalArgs")
      , r = e("dt/lib")
      , i = {};
    return i.getGlobalArg = function(e, t) {
        return n.hasOwnProperty(e) ? n[e] : t
    }
    ,
    i.addVersionArg = function(e) {
        return n.basePath + e + (e.indexOf("?") >= 0 ? "&" : "?") + "_v_=" + n.version
    }
    ,
    i.parseToObject = function(e) {
        var n = (new Function("return (" + e + ")"))()
          , i = t.type(n);
        return r.assert(i === "object" || i === "array"),
        n
    }
    ,
    i.contains = function(e, t) {
        return r.arrayIndexOf(e, t) >= 0
    }
    ,
    i.changeIterationSequence = function(e, t, n, r) {
        var i;
        for (var s in e)
            if (e.hasOwnProperty(s) && t === s) {
                i = e[s];
                break
            }
        var o = {};
        n === "first" && (o[t] = i);
        for (var s in e)
            e.hasOwnProperty(s) && s !== t && (n === "before" && s === r && (o[t] = i),
            o[s] = e[s],
            n === "after" && s === r && (o[t] = i));
        return n === "last" && (o[t] = i),
        o
    }
    ,
    i.normalizeToArray = function(e) {
        return e ? t.isArray(e) ? e : [e] : []
    }
    ,
    i.log = function(e) {
        console && t.isFunction(console.log) && console.log(e)
    }
    ,
    i
}),
define("docTool/schemaHelper", ["require", "jquery", "dt/lib", "./docUtil"], function(e) {
    function h(e) {
        var t = e.properties.type["default"];
        return p(t)
    }
    function p(e, t) {
        var n = e.match(u) || e.match(a);
        return n ? n[1] : t ? null  : e
    }
    function d(e, t) {
        function r(e) {
            return e.length > t ? e.slice(0, t) + "..." : e
        }
        var n = p(e, !0);
        return n != null  ? "'" + r(n) + "'" : r(e)
    }
    var t = e("jquery"), n = e("dt/lib"), r = e("./docUtil"), i = n.encodeHTML, s, o = 20, u = /^\s*'(.*)'\s*$/, a = /^\s*"(.*)"\s*$/, f = /^([^\[\]\-]+|i\])(\-([a-zA-Z_ \/,]*))?$/, l = {};
    l.EC_OPTION_TYPE = ["Array", "Object", "string", "number", "boolean", "color", "Function", "Date"],
    l.EC_AXIS_APPLICABLE = ["category", "value", "time", "log"],
    l.EC_SERIES_APPLICABLE = ["line", "bar", "scatter", "k", "pie", "radar", "chord", "force", "map", "gauge", "funnel", "eventRiver", "venn", "treemap", "tree", "wordCloud", "heatmap"],
    l.EC_ITEM_STYLE_APPLICABLE = l.EC_SERIES_APPLICABLE.concat(["markPoint", "markLine"]),
    l.parseOptionPath = function(e, r) {
        r = r || {};
        var i = "Path is illegal: '" + e + "'";
        n.assert(e && (e = t.trim(e)), i);
        var s = e.split(/\.|\[/)
          , o = [];
        for (var u = 0, a = s.length; u < a; u++) {
            var l = t.trim(s[u]);
            if (r.ignoreEmptyItem && l === "")
                continue;var c = l.match(f) || []
              , h = c[1]
              , p = c[2]
              , d = c[3]
              , v = {}
              , m = o[o.length - 1];
            h === "i]" ? v.arrayName = (m.arrayName || m.propertyName) + "[i]" : v.propertyName = h,
            p && (v.typeEnum = d),
            o.push(v)
        }
        if (r.arrayOnlyAtom)
            for (var u = 0, a = o.length; u < a; ) {
                var g = o[u]
                  , y = o[u + 1];
                y && y.arrayName ? (g.applicable && !y.applicable && (y.applicable = new n.Set(g.applicable)),
                o.splice(u, 1)) : u++
            }
        return o
    }
    ,
    l.stringifyOptionPath = function(e, t) {
        t = t || {};
        var r = [];
        for (var i = 0, s = e.length; i < s; i++) {
            var o = e[i]
              , u = o.arrayName;
            u != null  && !t.useSquareBrackets && (u = u.replace(/\[i\]/g, ""));
            var a = o.propertyName || u;
            o.typeEnum && (a += "-" + o.typeEnum),
            t.html && (a = n.encodeHTML(a || ""),
            i === e.length - 1 && (a = "<strong>" + a + "</strong>")),
            r.push(a)
        }
        return r.join(".")
    }
    ,
    l.queryDocTree = function(e, r) {
        function s(e, t, r) {
            if (!n.isObject(e))
                return;
            var i = (t.optionPath || t.fuzzyPath)[r]
              , o = (t.optionPath || t.fuzzyPath)[r - 1];
            if (!i) {
                (!e.isEnumParent || t.fuzzyPath || !o || !o.typeEnum) && t.result.push(e);
                if (!e.isEnumParent)
                    return
            }
            for (var f = 0, l = (e.children || []).length; f < l; f++) {
                var c = e.children[f]
                  , h = null ;
                if (e.isEnumParent) {
                    if (!o || !o.typeEnum || c.typeEnum === o.typeEnum)
                        h = r
                } else
                    t.optionPath && u(c, i.propertyName, i.arrayName) ? h = r + 1 : t.fuzzyPath && (a(c, i.propertyName, i.arrayName) ? h = r + 1 : h = r);
                h != null  && s(c, t, h)
            }
        }
        function o(e, t) {
            if (!n.isObject(e))
                return;
            if (t.anyText && (a(e, t.anyText) || e.descriptionCN && e.descriptionCN.indexOf(t.anyText) >= 0 || e.descriptionEN && e.descriptionEN.indexOf(t.anyText) >= 0)) {
                t.result.push(e);
                return
            }
            for (var r = 0, i = (e.children || []).length; r < i; r++)
                o(e.children[r], t)
        }
        function u(e, t, n) {
            return e.propertyName != null  && e.propertyName === t || e.arrayName != null  && f(n != null  ? n : t, e.arrayName)
        }
        function a(e, t, n) {
            return t != null  && (t = t.toLowerCase()),
            n != null  && (n = n.replace(/\[i\]/g, "").toLowerCase()),
            e.propertyName != null  && e.propertyName.toLowerCase().indexOf(t) >= 0 || e.arrayName != null  && e.arrayName.toLowerCase().indexOf(n != null  ? n : t) >= 0
        }
        function f(e, t) {
            return e && t && t.indexOf(e) === 0 && /^(\[i\])*$/.test(t.slice(e.length))
        }
        r = r || {};
        var i = {
            originalDocTree: e,
            result: [],
            optionPath: r.optionPath ? l.parseOptionPath(r.optionPath, {
                arrayOnlyAtom: !0
            }) : null ,
            fuzzyPath: r.fuzzyPath ? l.parseOptionPath(r.fuzzyPath, {
                arrayOnlyAtom: !0,
                ignoreEmptyItem: !0
            }) : null ,
            anyText: r.anyText && t.trim(r.anyText) || null 
        };
        return n.assert((i.optionPath || i.fuzzyPath || i.anyText) && (!!i.optionPath && !!i.fuzzyPath) == 0, "invalid query string!"),
        i.optionPath || i.fuzzyPath ? s(e, i, 0) : o(e, i),
        i.result
    }
    ,
    l.buildDoc = function(e, r, i) {
        function o(n) {
            return t.extend({
                originalSchema: e,
                docRenderer: i
            }, n)
        }
        function u(e, t, r) {
            if (!n.isObject(t))
                return;
            t.anyOf && r.enumInfo !== c.IS_ENUM_ITEM ? a(e, t, r) : t.items ? f(e, t, r) : t.properties ? p(e, t, r) : d(e, t, r)
        }
        function a(e, t, r) {
            r.enumInfo = c.IS_ENUM_PARENT;
            var i = r.docRenderer(e, t, r)
              , a = t.anyOf;
            for (var f = 0, l = a.length; f < l; f++) {
                var p;
                if (r.optionPath) {
                    p = n.clone(r.optionPath);
                    var d = v(p);
                    d.typeEnum = h(a[f])
                }
                u(i, a[f], o({
                    itemName: r.itemName,
                    relationInfo: r.relationInfo,
                    enumInfo: c.IS_ENUM_ITEM,
                    arrayFrom: r.arrayFrom ? r.arrayFrom.slice() : s,
                    optionPath: p
                }))
            }
        }
        function f(e, t, r) {
            r.selfInfo = c.HAS_ARRAY_ITEMS;
            var i = r.docRenderer(e, t, r), s = r.arrayFrom, a;
            if (r.optionPath) {
                a = n.clone(r.optionPath);
                var f = v(a);
                f.hasOwnProperty("propertyName") && (f.arrayName = f.propertyName,
                delete f.propertyName),
                f.arrayName += "[i]"
            }
            var l;
            r.schemaPath && (l = r.schemaPath.slice(),
            l.push("items")),
            u(i, t.items, o({
                itemName: r.itemName,
                relationInfo: c.IS_ARRAY_ITEM,
                arrayFrom: s ? (s.push(t),
                s) : [t],
                optionPath: a,
                schemaPath: l
            }))
        }
        function p(e, t, r) {
            r.selfInfo = c.HAS_OBJECT_PROPERTIES;
            var i = r.docRenderer(e, t, r)
              , a = t.properties;
            for (var f in a)
                if (a.hasOwnProperty(f)) {
                    var l;
                    r.optionPath && (l = n.clone(r.optionPath),
                    l.push({
                        propertyName: f
                    }));
                    var h;
                    r.schemaPath && (h = r.schemaPath.slice(),
                    h.push("properties", f)),
                    u(i, a[f], o({
                        itemName: f,
                        relationInfo: c.IS_OBJECT_ITEM,
                        arrayFrom: s,
                        optionPath: l,
                        schemaPath: h
                    }))
                }
        }
        function d(e, t, n) {
            n.selfInfo = c.IS_ATOM,
            n.docRenderer(e, t, n)
        }
        function v(e) {
            return e.length > 0 ? e[e.length - 1] : null 
        }
        return i = i || l.buildDoc.docJsonRenderer,
        u(r, e.option, o({
            optionPath: []
        })),
        r
    }
    ;
    var c = l.buildDoc.BuildDocInfo = {
        IS_OBJECT_ITEM: "isPropertyItem",
        IS_ARRAY_ITEM: "isArrayItem",
        IS_DEFINITION_ITEM: "isDefinitionItem",
        HAS_OBJECT_PROPERTIES: "hasObjectProperties",
        HAS_ARRAY_ITEMS: "hasArrayItems",
        IS_ATOM: "isAtom",
        IS_ENUM_ITEM: "isEnumItem",
        IS_ENUM_PARENT: "isEnumParent"
    };
    return l.buildDoc.docJsonRenderer = function(e, t, s) {
        function w(t, r) {
            var i = E(t, r)
              , s = r.selfInfo === c.HAS_OBJECT_PROPERTIES
              , o = r.enumInfo === c.IS_ENUM_PARENT
              , u = r.enumInfo === c.IS_ENUM_ITEM
              , a = {
                value: "ecapidocid-" + n.localUID(),
                hasObjectProperties: s,
                isEnumParent: o,
                type: t.type,
                typeEnum: u ? h(t) : null ,
                parent: e,
                descriptionCN: i.descriptionCN,
                descriptionEN: i.descriptionEN,
                defau: i.defau,
                optionPathForHash: l.stringifyOptionPath(r.optionPath, {
                    useSquareBrackets: !1
                }),
                optionPathHTML: l.stringifyOptionPath(r.optionPath, {
                    useSquareBrackets: !0,
                    html: !0
                }),
                defaultValueText: l.getDefaultValueText(i.defau),
                itemEncodeHTML: !1,
                tooltipEncodeHTML: !1
            };
            return r.relationInfo === c.IS_ARRAY_ITEM ? a.arrayName = r.itemName + (new Array(r.arrayFrom.length + 1)).join("[i]") : a.propertyName = r.itemName,
            a
        }
        function E(e, t) {
            var n = (t.arrayFrom || []).slice()
              , r = n.length && (t.enumInfo === c.IS_ENUM_PARENT || t.relationInfo === c.IS_ARRAY_ITEM && t.enumInfo !== c.IS_ENUM_ITEM) ? n[0] : e
              , i = {
                descriptionCN: r.descriptionCN,
                descriptionEN: r.descriptionEN,
                defau: {
                    type: r.type
                }
            };
            return r.hasOwnProperty("default") && (i.defau["default"] = r["default"]),
            i
        }
        var o = s.selfInfo
          , u = s.enumInfo
          , a = o === c.HAS_ARRAY_ITEMS ? e : w(t, s)
          , f = ""
          , p = ""
          , d = "...";
        if (s.enumInfo !== c.IS_ENUM_ITEM) {
            var v = s.itemName;
            v && (f = '<span class="ecdoc-api-tree-text-prop">' + i(v) + "</span>",
            r.getGlobalArg("pureTitle") || (f += ": "));
            var m = s.arrayFrom;
            if (m) {
                var g = new Array(m.length + 1);
                f += g.join("["),
                p += g.join("]")
            }
        } else
            d = "type: '" + i(h(t)) + "', ...";
        var y = [];
        if (o === c.HAS_OBJECT_PROPERTIES)
            a.childrenPre = f + "{",
            a.childrenPost = "}" + p + ",",
            a.childrenBrief = d,
            y.push(a);
        else if (o === c.IS_ATOM) {
            var b = l.getDefaultValueText(a.defau, {
                getBrief: !0
            });
            a.text = f,
            r.getGlobalArg("pureTitle") || (a.text += '<span class="ecdoc-api-tree-text-default">' + i(b) + "</span>" + p + ","),
            y.push(a)
        } else
            u === c.IS_ENUM_PARENT && (a.childrenPre = f,
            a.childrenPost = p + ",",
            a.childrenBrief = d,
            y.push(a));
        return y.length && (e.children = (e.children || []).concat(y)),
        a
    }
    ,
    l.isValidEcOptionType = function(e) {
        return n.arrayIndexOf(l.EC_OPTION_TYPE, e) !== -1
    }
    ,
    l.getEcOptionTypes = function() {
        return n.clone(l.EC_OPTION_TYPE)
    }
    ,
    l.getDefaultValueText = function(e, n) {
        n = n || {};
        var i = t.extend({
            object: "{...}",
            array: "[...]",
            regexp: "/.../",
            "function": "Function",
            "?": "..."
        }, n.briefMapping);
        if (!e.hasOwnProperty("default")) {
            if (n.getBrief) {
                var u = r.normalizeToArray(e.type);
                return u.length === 1 && i[u[0].toLowerCase()] || i["?"]
            }
            return ""
        }
        var s = e["default"]
          , u = t.type(s);
        if ("null,undefined,number,boolean".indexOf(u) >= 0)
            return s + "";
        if (u === "string")
            return n.getBrief ? d(s, o) : s;
        if (n.getBrief)
            return i[u] || i["?"];
        try {
            return JSON.stringify(s, null , 4)
        } catch (a) {
            return s + ""
        }
    }
    ,
    l
}),
define("docTool/lang", ["require", "jquery", "globalArgs"], function(e) {
    var t = e("jquery")
      , n = e("globalArgs")
      , r = {
        langCode: "cn",
        queryBoxPlaceholderFuzzyPath: "配置项模糊搜索（快捷键'/'）",
        queryBoxPlaceholderAnyText: "全文搜索（快捷键'/'）",
        queryBoxTextFuzzyPath: "配置项搜索",
        queryBoxTextAnyText: "全文搜索",
        descAreaLabelType: "类型",
        descAreaLabelDefaultValue: "默认值",
        collapseAll: "折叠",
        queryResultInfo: "共 #{count} 条结果",
        queryBoxNoResult: "没有搜索到信息",
        exampleCategory: "示例类型",
        apiMainTitle: "ECharts API检索工具",
        apiChartDesc: "使用说明：鼠标移动到<strong>箭头</strong>上，可以查看并定位到对应的<strong>ECharts配置项</strong>。"
    }
      , i = {
        langCode: "en",
        queryBoxPlaceholderFuzzyPath: "Search (Short cut:'/'). Try input: ser(line).border",
        queryBoxPlaceholderAnyText: "Search (Short cut:'/'). Try input: style",
        queryBoxTextFuzzyPath: "In properties",
        queryBoxTextAnyText: "Full-text",
        descAreaLabelType: "Type",
        descAreaLabelDefaultValue: "Default Value",
        collapseAll: "Collapse",
        queryResultInfo: "Got #{count} results.",
        queryBoxNoResult: "No result",
        exampleCategory: "Category",
        apiMainTitle: "ECharts API Tool",
        apiChartDesc: "Tip: Mouse hover on <strong>arrows</strong> to get <strong>option details</strong>."
    }
      , s = n.lang || {};
    return t.extend(r, s.cn || {}),
    t.extend(i, s.en || {}),
    (t("html").attr("lang") + "").toLowerCase() === "en" ? i : r
}),
function(e) {
    function t(e, t, n, r, i) {
        this._listener = t,
        this._isOnce = n,
        this.context = r,
        this._signal = e,
        this._priority = i || 0
    }
    function n(e, t) {
        if (typeof e != "function")
            throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", t))
    }
    function r() {
        this._bindings = [],
        this._prevParams = null ;
        var e = this;
        this.dispatch = function() {
            r.prototype.dispatch.apply(e, arguments)
        }
    }
    t.prototype = {
        active: !0,
        params: null ,
        execute: function(e) {
            var t;
            return this.active && this._listener && (e = this.params ? this.params.concat(e) : e,
            t = this._listener.apply(this.context, e),
            this._isOnce && this.detach()),
            t
        },
        detach: function() {
            return this.isBound() ? this._signal.remove(this._listener, this.context) : null 
        },
        isBound: function() {
            return !!this._signal && !!this._listener
        },
        isOnce: function() {
            return this._isOnce
        },
        getListener: function() {
            return this._listener
        },
        getSignal: function() {
            return this._signal
        },
        _destroy: function() {
            delete this._signal,
            delete this._listener,
            delete this.context
        },
        toString: function() {
            return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
        }
    },
    r.prototype = {
        VERSION: "1.0.0",
        memorize: !1,
        _shouldPropagate: !0,
        active: !0,
        _registerListener: function(e, n, r, i) {
            var s = this._indexOfListener(e, r);
            if (s !== -1) {
                if (e = this._bindings[s],
                e.isOnce() !== n)
                    throw Error("You cannot add" + (n ? "" : "Once") + "() then add" + (n ? "Once" : "") + "() the same listener without removing the relationship first.")
            } else
                e = new t(this,e,n,r,i),
                this._addBinding(e);
            return this.memorize && this._prevParams && e.execute(this._prevParams),
            e
        },
        _addBinding: function(e) {
            var t = this._bindings.length;
            do
                --t;
            while (this._bindings[t] && e._priority <= this._bindings[t]._priority);this._bindings.splice(t + 1, 0, e)
        },
        _indexOfListener: function(e, t) {
            for (var n = this._bindings.length, r; n--; )
                if (r = this._bindings[n],
                r._listener === e && r.context === t)
                    return n;
            return -1
        },
        has: function(e, t) {
            return this._indexOfListener(e, t) !== -1
        },
        add: function(e, t, r) {
            return n(e, "add"),
            this._registerListener(e, !1, t, r)
        },
        addOnce: function(e, t, r) {
            return n(e, "addOnce"),
            this._registerListener(e, !0, t, r)
        },
        remove: function(e, t) {
            n(e, "remove");
            var r = this._indexOfListener(e, t);
            return r !== -1 && (this._bindings[r]._destroy(),
            this._bindings.splice(r, 1)),
            e
        },
        removeAll: function() {
            for (var e = this._bindings.length; e--; )
                this._bindings[e]._destroy();
            this._bindings.length = 0
        },
        getNumListeners: function() {
            return this._bindings.length
        },
        halt: function() {
            this._shouldPropagate = !1
        },
        dispatch: function(e) {
            if (this.active) {
                var t = Array.prototype.slice.call(arguments), n = this._bindings.length, r;
                this.memorize && (this._prevParams = t);
                if (n) {
                    r = this._bindings.slice(),
                    this._shouldPropagate = !0;
                    do
                        n--;
                    while (r[n] && this._shouldPropagate && r[n].execute(t) !== !1)
                }
            }
        },
        forget: function() {
            this._prevParams = null 
        },
        dispose: function() {
            this.removeAll(),
            delete this._bindings,
            delete this._prevParams
        },
        toString: function() {
            return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
        }
    };
    var i = r;
    i.Signal = r,
    typeof define == "function" && define.amd ? define("signals", [], function() {
        return i
    }) : typeof module != "undefined" && module.exports ? module.exports = i : e.signals = i
}(this),
function() {
    var e = function(e) {
        var t = function(t) {
            function w(e) {
                return String(e || "").replace(/\W/g, "\\$&")
            }
            function E(e) {
                if (!e)
                    return "";
                var t = new RegExp("^" + w(o.prependHash) + "|" + w(o.appendHash) + "$","g");
                return e.replace(t, "")
            }
            function S() {
                var e = h.exec(o.getURL())
                  , t = e && e[1] || "";
                try {
                    return o.raw ? t : decodeURIComponent(t)
                } catch (n) {
                    return t
                }
            }
            function x() {
                return l ? l.contentWindow.frameHash : null 
            }
            function T() {
                l = r.createElement("iframe"),
                l.src = "about:blank",
                l.style.display = "none",
                r.body.appendChild(l)
            }
            function N() {
                if (l && u !== x()) {
                    var e = l.contentWindow.document;
                    e.open(),
                    e.write("<html><head><title>" + r.title + '</title><script type="text/javascript">var frameHash="' + u + '";</script></head><body>&nbsp;</body></html>'),
                    e.close()
                }
            }
            function C(e, t) {
                if (u !== e) {
                    var n = u;
                    u = e,
                    g && (t ? l.contentWindow.frameHash = e : N()),
                    o.changed.dispatch(E(e), E(n))
                }
            }
            function k(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            }
            function L(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }
            function A(e) {
                e = Array.prototype.slice.call(arguments);
                var t = e.join(o.separator);
                return t = t ? o.prependHash + t.replace(d, "") + o.appendHash : t,
                t
            }
            function O(e) {
                return e = encodeURI(e),
                v && y && (e = e.replace(/\?/, "%3F")),
                e
            }
            var n = 25, r = t.document, i = t.history, s = e.Signal, o, u, a, f, l, c, h = /#(.*)$/, p = /(\?.*)|(\#.*)/, d = /^\#/, v = !1, m = "onhashchange" in t && r.documentMode !== 7, g = v && !m, y = location.protocol === "file:";
            return g ? c = function() {
                var e = S()
                  , t = x();
                t !== u && t !== e ? o.setHash(E(t)) : e !== u && C(e)
            }
             : c = function() {
                var e = S();
                e !== u && C(e)
            }
            ,
            o = {
                VERSION: "1.2.0",
                raw: !1,
                appendHash: "",
                prependHash: "/",
                separator: "/",
                changed: new s,
                stopped: new s,
                initialized: new s,
                init: function() {
                    if (f)
                        return;
                    u = S(),
                    m ? k(t, "hashchange", c) : (g && (l || T(),
                    N()),
                    a = setInterval(c, n)),
                    f = !0,
                    o.initialized.dispatch(E(u))
                },
                stop: function() {
                    if (!f)
                        return;
                    m ? L(t, "hashchange", c) : (clearInterval(a),
                    a = null ),
                    f = !1,
                    o.stopped.dispatch(E(u))
                },
                isActive: function() {
                    return f
                },
                getURL: function() {
                    return t.location.href
                },
                getBaseURL: function() {
                    return o.getURL().replace(p, "")
                },
                setHash: function(e) {
                    e = A.apply(null , arguments),
                    e !== u && (C(e),
                    e === u && (o.raw || (e = O(e)),
                    t.location.hash = "#" + e))
                },
                replaceHash: function(e) {
                    e = A.apply(null , arguments),
                    e !== u && (C(e, !0),
                    e === u && (o.raw || (e = O(e)),
                    t.location.replace("#" + e)))
                },
                getHash: function() {
                    return E(u)
                },
                getHashAsArray: function() {
                    return o.getHash().split(o.separator)
                },
                dispose: function() {
                    o.stop(),
                    o.initialized.dispose(),
                    o.stopped.dispose(),
                    o.changed.dispose(),
                    l = o = t.hasher = null 
                },
                toString: function() {
                    return '[hasher version="' + o.VERSION + '" hash="' + o.getHash() + '"]'
                }
            },
            o.initialized.memorize = !0,
            o
        }(window);
        return t
    }
    ;
    typeof define == "function" && define.amd ? define("hasher", ["signals"], e) : typeof exports == "object" ? module.exports = e(require("signals")) : window.hasher = e(window.signals)
}(),
define("docTool/hashHelper", ["require", "hasher", "dt/lib"], function(e) {
    var t = e("hasher")
      , n = e("dt/lib")
      , r = {};
    return r.initHash = function(e) {
        t.prependHash = "",
        t.initialized.add(e),
        t.changed.add(e),
        t.init()
    }
    ,
    r.parseHash = function(e) {
        n.assert(t.isActive());
        var r = {};
        if (e) {
            var i = /^#?(?:([^~]*)~)?(.*)$/.exec(e);
            r.category = i[1],
            r.queryString = i[2]
        }
        return r
    }
    ,
    r.getHashInfo = function() {
        return r.parseHash(t.getHash())
    }
    ,
    r.hashRoute = function(e) {
        n.assert(t.isActive());
        var i = r.getHashInfo();
        n.assign(i, e);
        var s = "";
        i.category && (s += i.category + "~"),
        i.queryString && (s += i.queryString),
        t.setHash(s)
    }
    ,
    r
}),
function e(t, n, r) {
    function i(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a)
                    return a(o, !0);
                if (s)
                    return s(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND",
                f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return i(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var s = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)
        i(r[o]);
    return i
}({
    1: [function(e, t, n) {
        var r = e("../main");
        typeof define == "function" && define.amd ? define("perfectScrollbar", r) : (window.PerfectScrollbar = r,
        typeof window.Ps == "undefined" && (window.Ps = r))
    }
    , {
        "../main": 7
    }],
    2: [function(e, t, n) {
        function r(e, t) {
            var n = e.className.split(" ");
            n.indexOf(t) < 0 && n.push(t),
            e.className = n.join(" ")
        }
        function i(e, t) {
            var n = e.className.split(" ")
              , r = n.indexOf(t);
            r >= 0 && n.splice(r, 1),
            e.className = n.join(" ")
        }
        n.add = function(e, t) {
            e.classList ? e.classList.add(t) : r(e, t)
        }
        ,
        n.remove = function(e, t) {
            e.classList ? e.classList.remove(t) : i(e, t)
        }
        ,
        n.list = function(e) {
            return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
        }
    }
    , {}],
    3: [function(e, t, n) {
        function i(e, t) {
            return window.getComputedStyle(e)[t]
        }
        function s(e, t, n) {
            return typeof n == "number" && (n = n.toString() + "px"),
            e.style[t] = n,
            e
        }
        function o(e, t) {
            for (var n in t) {
                var r = t[n];
                typeof r == "number" && (r = r.toString() + "px"),
                e.style[n] = r
            }
            return e
        }
        var r = {};
        r.e = function(e, t) {
            var n = document.createElement(e);
            return n.className = t,
            n
        }
        ,
        r.appendTo = function(e, t) {
            return t.appendChild(e),
            e
        }
        ,
        r.css = function(e, t, n) {
            return typeof t == "object" ? o(e, t) : typeof n == "undefined" ? i(e, t) : s(e, t, n)
        }
        ,
        r.matches = function(e, t) {
            if (typeof e.matches != "undefined")
                return e.matches(t);
            if (typeof e.matchesSelector != "undefined")
                return e.matchesSelector(t);
            if (typeof e.webkitMatchesSelector != "undefined")
                return e.webkitMatchesSelector(t);
            if (typeof e.mozMatchesSelector != "undefined")
                return e.mozMatchesSelector(t);
            if (typeof e.msMatchesSelector != "undefined")
                return e.msMatchesSelector(t)
        }
        ,
        r.remove = function(e) {
            typeof e.remove != "undefined" ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
        }
        ,
        r.queryChildren = function(e, t) {
            return Array.prototype.filter.call(e.childNodes, function(e) {
                return r.matches(e, t)
            })
        }
        ,
        t.exports = r
    }
    , {}],
    4: [function(e, t, n) {
        var r = function(e) {
            this.element = e,
            this.events = {}
        }
        ;
        r.prototype.bind = function(e, t) {
            typeof this.events[e] == "undefined" && (this.events[e] = []),
            this.events[e].push(t),
            this.element.addEventListener(e, t, !1)
        }
        ,
        r.prototype.unbind = function(e, t) {
            var n = typeof t != "undefined";
            this.events[e] = this.events[e].filter(function(r) {
                return n && r !== t ? !0 : (this.element.removeEventListener(e, r, !1),
                !1)
            }, this)
        }
        ,
        r.prototype.unbindAll = function() {
            for (var e in this.events)
                this.unbind(e)
        }
        ;
        var i = function() {
            this.eventElements = []
        }
        ;
        i.prototype.eventElement = function(e) {
            var t = this.eventElements.filter(function(t) {
                return t.element === e
            })[0];
            return typeof t == "undefined" && (t = new r(e),
            this.eventElements.push(t)),
            t
        }
        ,
        i.prototype.bind = function(e, t, n) {
            this.eventElement(e).bind(t, n)
        }
        ,
        i.prototype.unbind = function(e, t, n) {
            this.eventElement(e).unbind(t, n)
        }
        ,
        i.prototype.unbindAll = function() {
            for (var e = 0; e < this.eventElements.length; e++)
                this.eventElements[e].unbindAll()
        }
        ,
        i.prototype.once = function(e, t, n) {
            var r = this.eventElement(e)
              , i = function(e) {
                r.unbind(t, i),
                n(e)
            }
            ;
            r.bind(t, i)
        }
        ,
        t.exports = i
    }
    , {}],
    5: [function(e, t, n) {
        t.exports = function() {
            function e() {
                return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
            }
            return function() {
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        }()
    }
    , {}],
    6: [function(e, t, n) {
        var r = e("./class")
          , i = e("./dom");
        n.toInt = function(e) {
            return parseInt(e, 10) || 0
        }
        ,
        n.clone = function(e) {
            if (e === null )
                return null ;
            if (typeof e == "object") {
                var t = {};
                for (var n in e)
                    t[n] = this.clone(e[n]);
                return t
            }
            return e
        }
        ,
        n.extend = function(e, t) {
            var n = this.clone(e);
            for (var r in t)
                n[r] = this.clone(t[r]);
            return n
        }
        ,
        n.isEditable = function(e) {
            return i.matches(e, "input,[contenteditable]") || i.matches(e, "select,[contenteditable]") || i.matches(e, "textarea,[contenteditable]") || i.matches(e, "button,[contenteditable]")
        }
        ,
        n.removePsClasses = function(e) {
            var t = r.list(e);
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.indexOf("ps-") === 0 && r.remove(e, i)
            }
        }
        ,
        n.outerWidth = function(e) {
            return this.toInt(i.css(e, "width")) + this.toInt(i.css(e, "paddingLeft")) + this.toInt(i.css(e, "paddingRight")) + this.toInt(i.css(e, "borderLeftWidth")) + this.toInt(i.css(e, "borderRightWidth"))
        }
        ,
        n.startScrolling = function(e, t) {
            r.add(e, "ps-in-scrolling"),
            typeof t != "undefined" ? r.add(e, "ps-" + t) : (r.add(e, "ps-x"),
            r.add(e, "ps-y"))
        }
        ,
        n.stopScrolling = function(e, t) {
            r.remove(e, "ps-in-scrolling"),
            typeof t != "undefined" ? r.remove(e, "ps-" + t) : (r.remove(e, "ps-x"),
            r.remove(e, "ps-y"))
        }
        ,
        n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: window.navigator.msMaxTouchPoints !== null 
        }
    }
    , {
        "./class": 2,
        "./dom": 3
    }],
    7: [function(e, t, n) {
        var r = e("./plugin/destroy")
          , i = e("./plugin/initialize")
          , s = e("./plugin/update");
        t.exports = {
            initialize: i,
            update: s,
            destroy: r
        }
    }
    , {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21
    }],
    8: [function(e, t, n) {
        t.exports = {
            maxScrollbarLength: null ,
            minScrollbarLength: null ,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            stopPropagationOnClick: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            useKeyboard: !0,
            useSelectionScroll: !1,
            wheelPropagation: !1,
            wheelSpeed: 1
        }
    }
    , {}],
    9: [function(e, t, n) {
        var r = e("../lib/dom")
          , i = e("../lib/helper")
          , s = e("./instances");
        t.exports = function(e) {
            var t = s.get(e);
            if (!t)
                return;
            t.event.unbindAll(),
            r.remove(t.scrollbarX),
            r.remove(t.scrollbarY),
            r.remove(t.scrollbarXRail),
            r.remove(t.scrollbarYRail),
            i.removePsClasses(e),
            s.remove(e)
        }
    }
    , {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10: [function(e, t, n) {
        function u(e, t) {
            function n(e) {
                return e.getBoundingClientRect()
            }
            var i = window.Event.prototype.stopPropagation.bind;
            t.settings.stopPropagationOnClick && t.event.bind(t.scrollbarY, "click", i),
            t.event.bind(t.scrollbarYRail, "click", function(i) {
                var u = r.toInt(t.scrollbarYHeight / 2)
                  , a = t.railYRatio * (i.pageY - window.pageYOffset - n(t.scrollbarYRail).top - u)
                  , f = t.railYRatio * (t.railYHeight - t.scrollbarYHeight)
                  , l = a / f;
                l < 0 ? l = 0 : l > 1 && (l = 1),
                o(e, "top", (t.contentHeight - t.containerHeight) * l),
                s(e),
                i.stopPropagation()
            }),
            t.settings.stopPropagationOnClick && t.event.bind(t.scrollbarX, "click", i),
            t.event.bind(t.scrollbarXRail, "click", function(i) {
                var u = r.toInt(t.scrollbarXWidth / 2)
                  , a = t.railXRatio * (i.pageX - window.pageXOffset - n(t.scrollbarXRail).left - u)
                  , f = t.railXRatio * (t.railXWidth - t.scrollbarXWidth)
                  , l = a / f;
                l < 0 ? l = 0 : l > 1 && (l = 1),
                o(e, "left", (t.contentWidth - t.containerWidth) * l - t.negativeScrollAdjustment),
                s(e),
                i.stopPropagation()
            })
        }
        var r = e("../../lib/helper")
          , i = e("../instances")
          , s = e("../update-geometry")
          , o = e("../update-scroll");
        t.exports = function(e) {
            var t = i.get(e);
            u(e, t)
        }
    }
    , {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    11: [function(e, t, n) {
        function a(e, t) {
            function a(r) {
                var s = n + r * t.railXRatio
                  , o = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                s < 0 ? t.scrollbarXLeft = 0 : s > o ? t.scrollbarXLeft = o : t.scrollbarXLeft = s;
                var a = i.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                u(e, "left", a)
            }
            var n = null 
              , s = null 
              , f = function(t) {
                a(t.pageX - s),
                o(e),
                t.stopPropagation(),
                t.preventDefault()
            }
              , l = function() {
                i.stopScrolling(e, "x"),
                t.event.unbind(t.ownerDocument, "mousemove", f)
            }
            ;
            t.event.bind(t.scrollbarX, "mousedown", function(o) {
                s = o.pageX,
                n = i.toInt(r.css(t.scrollbarX, "left")) * t.railXRatio,
                i.startScrolling(e, "x"),
                t.event.bind(t.ownerDocument, "mousemove", f),
                t.event.once(t.ownerDocument, "mouseup", l),
                o.stopPropagation(),
                o.preventDefault()
            })
        }
        function f(e, t) {
            function a(r) {
                var s = n + r * t.railYRatio
                  , o = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                s < 0 ? t.scrollbarYTop = 0 : s > o ? t.scrollbarYTop = o : t.scrollbarYTop = s;
                var a = i.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                u(e, "top", a)
            }
            var n = null 
              , s = null 
              , f = function(t) {
                a(t.pageY - s),
                o(e),
                t.stopPropagation(),
                t.preventDefault()
            }
              , l = function() {
                i.stopScrolling(e, "y"),
                t.event.unbind(t.ownerDocument, "mousemove", f)
            }
            ;
            t.event.bind(t.scrollbarY, "mousedown", function(o) {
                s = o.pageY,
                n = i.toInt(r.css(t.scrollbarY, "top")) * t.railYRatio,
                i.startScrolling(e, "y"),
                t.event.bind(t.ownerDocument, "mousemove", f),
                t.event.once(t.ownerDocument, "mouseup", l),
                o.stopPropagation(),
                o.preventDefault()
            })
        }
        var r = e("../../lib/dom")
          , i = e("../../lib/helper")
          , s = e("../instances")
          , o = e("../update-geometry")
          , u = e("../update-scroll");
        t.exports = function(e) {
            var t = s.get(e);
            a(e, t),
            f(e, t)
        }
    }
    , {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function(e, t, n) {
        function u(e, t) {
            function u(n, r) {
                var i = e.scrollTop;
                if (n === 0) {
                    if (!t.scrollbarYActive)
                        return !1;
                    if (i === 0 && r > 0 || i >= t.contentHeight - t.containerHeight && r < 0)
                        return !t.settings.wheelPropagation
                }
                var s = e.scrollLeft;
                if (r === 0) {
                    if (!t.scrollbarXActive)
                        return !1;
                    if (s === 0 && n < 0 || s >= t.contentWidth - t.containerWidth && n > 0)
                        return !t.settings.wheelPropagation
                }
                return !0
            }
            var n = !1;
            t.event.bind(e, "mouseenter", function() {
                n = !0
            }),
            t.event.bind(e, "mouseleave", function() {
                n = !1
            });
            var i = !1;
            t.event.bind(t.ownerDocument, "keydown", function(a) {
                if (a.isDefaultPrevented && a.isDefaultPrevented())
                    return;
                if (!n)
                    return;
                var f = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                if (f) {
                    while (f.shadowRoot)
                        f = f.shadowRoot.activeElement;
                    if (r.isEditable(f))
                        return
                }
                var l = 0
                  , c = 0;
                switch (a.which) {
                case 37:
                    l = -30;
                    break;
                case 38:
                    c = 30;
                    break;
                case 39:
                    l = 30;
                    break;
                case 40:
                    c = -30;
                    break;
                case 33:
                    c = 90;
                    break;
                case 32:
                    a.shiftKey ? c = 90 : c = -90;
                    break;
                case 34:
                    c = -90;
                    break;
                case 35:
                    a.ctrlKey ? c = -t.contentHeight : c = -t.containerHeight;
                    break;
                case 36:
                    a.ctrlKey ? c = e.scrollTop : c = t.containerHeight;
                    break;
                default:
                    return
                }
                o(e, "top", e.scrollTop - c),
                o(e, "left", e.scrollLeft + l),
                s(e),
                i = u(l, c),
                i && a.preventDefault()
            })
        }
        var r = e("../../lib/helper")
          , i = e("../instances")
          , s = e("../update-geometry")
          , o = e("../update-scroll");
        t.exports = function(e) {
            var t = i.get(e);
            u(e, t)
        }
    }
    , {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function(e, t, n) {
        function o(e, t) {
            function r(n, r) {
                var i = e.scrollTop;
                if (n === 0) {
                    if (!t.scrollbarYActive)
                        return !1;
                    if (i === 0 && r > 0 || i >= t.contentHeight - t.containerHeight && r < 0)
                        return !t.settings.wheelPropagation
                }
                var s = e.scrollLeft;
                if (r === 0) {
                    if (!t.scrollbarXActive)
                        return !1;
                    if (s === 0 && n < 0 || s >= t.contentWidth - t.containerWidth && n > 0)
                        return !t.settings.wheelPropagation
                }
                return !0
            }
            function o(e) {
                var t = e.deltaX
                  , n = -1 * e.deltaY;
                if (typeof t == "undefined" || typeof n == "undefined")
                    t = -1 * e.wheelDeltaX / 6,
                    n = e.wheelDeltaY / 6;
                return e.deltaMode && e.deltaMode === 1 && (t *= 10,
                n *= 10),
                t !== t && n !== n && (t = 0,
                n = e.wheelDelta),
                [t, n]
            }
            function u(t, n) {
                var r = e.querySelector("textarea:hover");
                if (r) {
                    var i = r.scrollHeight - r.clientHeight;
                    if (i > 0 && !(r.scrollTop === 0 && n > 0 || r.scrollTop === i && n < 0))
                        return !0;
                    var s = r.scrollLeft - r.clientWidth;
                    if (s > 0 && !(r.scrollLeft === 0 && t < 0) && !(r.scrollLeft === s && t > 0))
                        return !0
                }
                return !1
            }
            function a(a) {
                var f = o(a)
                  , l = f[0]
                  , c = f[1];
                if (u(l, c))
                    return;
                n = !1,
                t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (c ? s(e, "top", e.scrollTop - c * t.settings.wheelSpeed) : s(e, "top", e.scrollTop + l * t.settings.wheelSpeed),
                n = !0) : t.scrollbarXActive && !t.scrollbarYActive && (l ? s(e, "left", e.scrollLeft + l * t.settings.wheelSpeed) : s(e, "left", e.scrollLeft - c * t.settings.wheelSpeed),
                n = !0) : (s(e, "top", e.scrollTop - c * t.settings.wheelSpeed),
                s(e, "left", e.scrollLeft + l * t.settings.wheelSpeed)),
                i(e),
                n = n || r(l, c),
                n && (a.stopPropagation(),
                a.preventDefault())
            }
            var n = !1;
            typeof window.onwheel != "undefined" ? t.event.bind(e, "wheel", a) : typeof window.onmousewheel != "undefined" && t.event.bind(e, "mousewheel", a)
        }
        var r = e("../instances")
          , i = e("../update-geometry")
          , s = e("../update-scroll");
        t.exports = function(e) {
            var t = r.get(e);
            o(e, t)
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    14: [function(e, t, n) {
        function s(e, t) {
            t.event.bind(e, "scroll", function() {
                i(e)
            })
        }
        var r = e("../instances")
          , i = e("../update-geometry");
        t.exports = function(e) {
            var t = r.get(e);
            s(e, t)
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15: [function(e, t, n) {
        function u(e, t) {
            function n() {
                var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return e.toString().length === 0 ? null  : e.getRangeAt(0).commonAncestorContainer
            }
            function f() {
                u || (u = setInterval(function() {
                    if (!i.get(e)) {
                        clearInterval(u);
                        return
                    }
                    o(e, "top", e.scrollTop + a.top),
                    o(e, "left", e.scrollLeft + a.left),
                    s(e)
                }, 50))
            }
            function l() {
                u && (clearInterval(u),
                u = null ),
                r.stopScrolling(e)
            }
            var u = null 
              , a = {
                top: 0,
                left: 0
            }
              , c = !1;
            t.event.bind(t.ownerDocument, "selectionchange", function() {
                e.contains(n()) ? c = !0 : (c = !1,
                l())
            }),
            t.event.bind(window, "mouseup", function() {
                c && (c = !1,
                l())
            }),
            t.event.bind(window, "mousemove", function(t) {
                if (c) {
                    var n = {
                        x: t.pageX,
                        y: t.pageY
                    }
                      , i = {
                        left: e.offsetLeft,
                        right: e.offsetLeft + e.offsetWidth,
                        top: e.offsetTop,
                        bottom: e.offsetTop + e.offsetHeight
                    };
                    n.x < i.left + 3 ? (a.left = -5,
                    r.startScrolling(e, "x")) : n.x > i.right - 3 ? (a.left = 5,
                    r.startScrolling(e, "x")) : a.left = 0,
                    n.y < i.top + 3 ? (i.top + 3 - n.y < 5 ? a.top = -5 : a.top = -20,
                    r.startScrolling(e, "y")) : n.y > i.bottom - 3 ? (n.y - i.bottom + 3 < 5 ? a.top = 5 : a.top = 20,
                    r.startScrolling(e, "y")) : a.top = 0,
                    a.top === 0 && a.left === 0 ? l() : f()
                }
            })
        }
        var r = e("../../lib/helper")
          , i = e("../instances")
          , s = e("../update-geometry")
          , o = e("../update-scroll");
        t.exports = function(e) {
            var t = i.get(e);
            u(e, t)
        }
    }
    , {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    16: [function(e, t, n) {
        function o(e, t, n, o) {
            function u(n, r) {
                var i = e.scrollTop
                  , s = e.scrollLeft
                  , o = Math.abs(n)
                  , u = Math.abs(r);
                if (u > o) {
                    if (r < 0 && i === t.contentHeight - t.containerHeight || r > 0 && i === 0)
                        return !t.settings.swipePropagation
                } else if (o > u)
                    if (n < 0 && s === t.contentWidth - t.containerWidth || n > 0 && s === 0)
                        return !t.settings.swipePropagation;
                return !0
            }
            function a(t, n) {
                s(e, "top", e.scrollTop - n),
                s(e, "left", e.scrollLeft - t),
                i(e)
            }
            function v() {
                p = !0
            }
            function m() {
                p = !1
            }
            function g(e) {
                return e.targetTouches ? e.targetTouches[0] : e
            }
            function y(e) {
                return e.targetTouches && e.targetTouches.length === 1 ? !0 : e.pointerType && e.pointerType !== "mouse" && e.pointerType !== e.MSPOINTER_TYPE_MOUSE ? !0 : !1
            }
            function b(e) {
                if (y(e)) {
                    d = !0;
                    var t = g(e);
                    f.pageX = t.pageX,
                    f.pageY = t.pageY,
                    l = (new Date).getTime(),
                    h !== null  && clearInterval(h),
                    e.stopPropagation()
                }
            }
            function w(e) {
                if (!p && d && y(e)) {
                    var t = g(e)
                      , n = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    }
                      , r = n.pageX - f.pageX
                      , i = n.pageY - f.pageY;
                    a(r, i),
                    f = n;
                    var s = (new Date).getTime()
                      , o = s - l;
                    o > 0 && (c.x = r / o,
                    c.y = i / o,
                    l = s),
                    u(r, i) && (e.stopPropagation(),
                    e.preventDefault())
                }
            }
            function E() {
                !p && d && (d = !1,
                clearInterval(h),
                h = setInterval(function() {
                    if (!r.get(e)) {
                        clearInterval(h);
                        return
                    }
                    if (Math.abs(c.x) < .01 && Math.abs(c.y) < .01) {
                        clearInterval(h);
                        return
                    }
                    a(c.x * 30, c.y * 30),
                    c.x *= .8,
                    c.y *= .8
                }, 10))
            }
            var f = {}
              , l = 0
              , c = {}
              , h = null 
              , p = !1
              , d = !1;
            n && (t.event.bind(window, "touchstart", v),
            t.event.bind(window, "touchend", m),
            t.event.bind(e, "touchstart", b),
            t.event.bind(e, "touchmove", w),
            t.event.bind(e, "touchend", E)),
            o && (window.PointerEvent ? (t.event.bind(window, "pointerdown", v),
            t.event.bind(window, "pointerup", m),
            t.event.bind(e, "pointerdown", b),
            t.event.bind(e, "pointermove", w),
            t.event.bind(e, "pointerup", E)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", v),
            t.event.bind(window, "MSPointerUp", m),
            t.event.bind(e, "MSPointerDown", b),
            t.event.bind(e, "MSPointerMove", w),
            t.event.bind(e, "MSPointerUp", E)))
        }
        var r = e("../instances")
          , i = e("../update-geometry")
          , s = e("../update-scroll");
        t.exports = function(e, t, n) {
            var i = r.get(e);
            o(e, i, t, n)
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    17: [function(e, t, n) {
        var r = e("../lib/class")
          , i = e("../lib/helper")
          , s = e("./instances")
          , o = e("./update-geometry")
          , u = e("./handler/click-rail")
          , a = e("./handler/drag-scrollbar")
          , f = e("./handler/keyboard")
          , l = e("./handler/mouse-wheel")
          , c = e("./handler/native-scroll")
          , h = e("./handler/selection")
          , p = e("./handler/touch");
        t.exports = function(e, t) {
            t = typeof t == "object" ? t : {},
            r.add(e, "ps-container");
            var n = s.add(e);
            n.settings = i.extend(n.settings, t),
            u(e),
            a(e),
            l(e),
            c(e),
            n.settings.useSelectionScroll && h(e),
            (i.env.supportsTouch || i.env.supportsIePointer) && p(e, i.env.supportsTouch, i.env.supportsIePointer),
            n.settings.useKeyboard && f(e),
            o(e)
        }
    }
    , {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function(e, t, n) {
        function f(e) {
            var t = this;
            t.settings = u.clone(i),
            t.containerWidth = null ,
            t.containerHeight = null ,
            t.contentWidth = null ,
            t.contentHeight = null ,
            t.isRtl = r.css(e, "direction") === "rtl",
            t.isNegativeScroll = function() {
                var t = e.scrollLeft
                  , n = null ;
                return e.scrollLeft = -1,
                n = e.scrollLeft < 0,
                e.scrollLeft = t,
                n
            }(),
            t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0,
            t.event = new s,
            t.ownerDocument = e.ownerDocument || document,
            t.scrollbarXRail = r.appendTo(r.e("div", "ps-scrollbar-x-rail"), e),
            t.scrollbarX = r.appendTo(r.e("div", "ps-scrollbar-x"), t.scrollbarXRail),
            t.scrollbarX.setAttribute("tabindex", 0),
            t.scrollbarXActive = null ,
            t.scrollbarXWidth = null ,
            t.scrollbarXLeft = null ,
            t.scrollbarXBottom = u.toInt(r.css(t.scrollbarXRail, "bottom")),
            t.isScrollbarXUsingBottom = t.scrollbarXBottom === t.scrollbarXBottom,
            t.scrollbarXTop = t.isScrollbarXUsingBottom ? null  : u.toInt(r.css(t.scrollbarXRail, "top")),
            t.railBorderXWidth = u.toInt(r.css(t.scrollbarXRail, "borderLeftWidth")) + u.toInt(r.css(t.scrollbarXRail, "borderRightWidth")),
            r.css(t.scrollbarXRail, "display", "block"),
            t.railXMarginWidth = u.toInt(r.css(t.scrollbarXRail, "marginLeft")) + u.toInt(r.css(t.scrollbarXRail, "marginRight")),
            r.css(t.scrollbarXRail, "display", ""),
            t.railXWidth = null ,
            t.railXRatio = null ,
            t.scrollbarYRail = r.appendTo(r.e("div", "ps-scrollbar-y-rail"), e),
            t.scrollbarY = r.appendTo(r.e("div", "ps-scrollbar-y"), t.scrollbarYRail),
            t.scrollbarY.setAttribute("tabindex", 0),
            t.scrollbarYActive = null ,
            t.scrollbarYHeight = null ,
            t.scrollbarYTop = null ,
            t.scrollbarYRight = u.toInt(r.css(t.scrollbarYRail, "right")),
            t.isScrollbarYUsingRight = t.scrollbarYRight === t.scrollbarYRight,
            t.scrollbarYLeft = t.isScrollbarYUsingRight ? null  : u.toInt(r.css(t.scrollbarYRail, "left")),
            t.scrollbarYOuterWidth = t.isRtl ? u.outerWidth(t.scrollbarY) : null ,
            t.railBorderYWidth = u.toInt(r.css(t.scrollbarYRail, "borderTopWidth")) + u.toInt(r.css(t.scrollbarYRail, "borderBottomWidth")),
            r.css(t.scrollbarYRail, "display", "block"),
            t.railYMarginHeight = u.toInt(r.css(t.scrollbarYRail, "marginTop")) + u.toInt(r.css(t.scrollbarYRail, "marginBottom")),
            r.css(t.scrollbarYRail, "display", ""),
            t.railYHeight = null ,
            t.railYRatio = null 
        }
        function l(e) {
            return typeof e.dataset == "undefined" ? e.getAttribute("data-ps-id") : e.dataset.psId
        }
        function c(e, t) {
            typeof e.dataset == "undefined" ? e.setAttribute("data-ps-id", t) : e.dataset.psId = t
        }
        function h(e) {
            typeof e.dataset == "undefined" ? e.removeAttribute("data-ps-id") : delete e.dataset.psId
        }
        var r = e("../lib/dom")
          , i = e("./default-setting")
          , s = e("../lib/event-manager")
          , o = e("../lib/guid")
          , u = e("../lib/helper")
          , a = {};
        n.add = function(e) {
            var t = o();
            return c(e, t),
            a[t] = new f(e),
            a[t]
        }
        ,
        n.remove = function(e) {
            delete a[l(e)],
            h(e)
        }
        ,
        n.get = function(e) {
            return a[l(e)]
        }
    }
    , {
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function(e, t, n) {
        function a(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
            e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
            t
        }
        function f(e, t) {
            var n = {
                width: t.railXWidth
            };
            t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft,
            t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop,
            i.css(t.scrollbarXRail, n);
            var r = {
                top: e.scrollTop,
                height: t.railYHeight
            };
            t.isScrollbarYUsingRight ? t.isRtl ? r.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : r.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? r.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : r.left = t.scrollbarYLeft + e.scrollLeft,
            i.css(t.scrollbarYRail, r),
            i.css(t.scrollbarX, {
                left: t.scrollbarXLeft,
                width: t.scrollbarXWidth - t.railBorderXWidth
            }),
            i.css(t.scrollbarY, {
                top: t.scrollbarYTop,
                height: t.scrollbarYHeight - t.railBorderYWidth
            })
        }
        var r = e("../lib/class")
          , i = e("../lib/dom")
          , s = e("../lib/helper")
          , o = e("./instances")
          , u = e("./update-scroll");
        t.exports = function(e) {
            var t = o.get(e);
            t.containerWidth = e.clientWidth,
            t.containerHeight = e.clientHeight,
            t.contentWidth = e.scrollWidth,
            t.contentHeight = e.scrollHeight;
            var n;
            e.contains(t.scrollbarXRail) || (n = i.queryChildren(e, ".ps-scrollbar-x-rail"),
            n.length > 0 && n.forEach(function(e) {
                i.remove(e)
            }),
            i.appendTo(t.scrollbarXRail, e)),
            e.contains(t.scrollbarYRail) || (n = i.queryChildren(e, ".ps-scrollbar-y-rail"),
            n.length > 0 && n.forEach(function(e) {
                i.remove(e)
            }),
            i.appendTo(t.scrollbarYRail, e)),
            !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0,
            t.railXWidth = t.containerWidth - t.railXMarginWidth,
            t.railXRatio = t.containerWidth / t.railXWidth,
            t.scrollbarXWidth = a(t, s.toInt(t.railXWidth * t.containerWidth / t.contentWidth)),
            t.scrollbarXLeft = s.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1,
            !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0,
            t.railYHeight = t.containerHeight - t.railYMarginHeight,
            t.railYRatio = t.containerHeight / t.railYHeight,
            t.scrollbarYHeight = a(t, s.toInt(t.railYHeight * t.containerHeight / t.contentHeight)),
            t.scrollbarYTop = s.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1,
            t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
            t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
            f(e, t),
            t.scrollbarXActive ? r.add(e, "ps-active-x") : (r.remove(e, "ps-active-x"),
            t.scrollbarXWidth = 0,
            t.scrollbarXLeft = 0,
            u(e, "left", 0)),
            t.scrollbarYActive ? r.add(e, "ps-active-y") : (r.remove(e, "ps-active-y"),
            t.scrollbarYHeight = 0,
            t.scrollbarYTop = 0,
            u(e, "top", 0))
        }
    }
    , {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20
    }],
    20: [function(e, t, n) {
        var r = e("./instances"), i = document.createEvent("Event"), s = document.createEvent("Event"), o = document.createEvent("Event"), u = document.createEvent("Event"), a = document.createEvent("Event"), f = document.createEvent("Event"), l = document.createEvent("Event"), c = document.createEvent("Event"), h = document.createEvent("Event"), p = document.createEvent("Event"), d, v;
        i.initEvent("ps-scroll-up", !0, !0),
        s.initEvent("ps-scroll-down", !0, !0),
        o.initEvent("ps-scroll-left", !0, !0),
        u.initEvent("ps-scroll-right", !0, !0),
        a.initEvent("ps-scroll-y", !0, !0),
        f.initEvent("ps-scroll-x", !0, !0),
        l.initEvent("ps-x-reach-start", !0, !0),
        c.initEvent("ps-x-reach-end", !0, !0),
        h.initEvent("ps-y-reach-start", !0, !0),
        p.initEvent("ps-y-reach-end", !0, !0),
        t.exports = function(e, t, n) {
            if (typeof e == "undefined")
                throw "You must provide an element to the update-scroll function";
            if (typeof t == "undefined")
                throw "You must provide an axis to the update-scroll function";
            if (typeof n == "undefined")
                throw "You must provide a value to the update-scroll function";
            if (t === "top" && n <= 0) {
                e.scrollTop = 0,
                e.dispatchEvent(h);
                return
            }
            if (t === "left" && n <= 0) {
                e.scrollLeft = 0,
                e.dispatchEvent(l);
                return
            }
            var m = r.get(e);
            if (t === "top" && n >= m.contentHeight - m.containerHeight) {
                e.scrollTop = m.contentHeight - m.containerHeight,
                e.dispatchEvent(p);
                return
            }
            if (t === "left" && n >= m.contentWidth - m.containerWidth) {
                e.scrollLeft = m.contentWidth - m.containerWidth,
                e.dispatchEvent(c);
                return
            }
            d || (d = e.scrollTop),
            v || (v = e.scrollLeft),
            t === "top" && n < d && e.dispatchEvent(i),
            t === "top" && n > d && e.dispatchEvent(s),
            t === "left" && n < v && e.dispatchEvent(o),
            t === "left" && n > v && e.dispatchEvent(u),
            t === "top" && (e.scrollTop = d = n,
            e.dispatchEvent(a)),
            t === "left" && (e.scrollLeft = v = n,
            e.dispatchEvent(f))
        }
    }
    , {
        "./instances": 18
    }],
    21: [function(e, t, n) {
        var r = e("../lib/dom")
          , i = e("../lib/helper")
          , s = e("./instances")
          , o = e("./update-geometry")
          , u = e("./update-scroll");
        t.exports = function(e) {
            var t = s.get(e);
            if (!t)
                return;
            t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0,
            r.css(t.scrollbarXRail, "display", "block"),
            r.css(t.scrollbarYRail, "display", "block"),
            t.railXMarginWidth = i.toInt(r.css(t.scrollbarXRail, "marginLeft")) + i.toInt(r.css(t.scrollbarXRail, "marginRight")),
            t.railYMarginHeight = i.toInt(r.css(t.scrollbarYRail, "marginTop")) + i.toInt(r.css(t.scrollbarYRail, "marginBottom")),
            r.css(t.scrollbarXRail, "display", "none"),
            r.css(t.scrollbarYRail, "display", "none"),
            o(e),
            u(e, "top", e.scrollTop),
            u(e, "left", e.scrollLeft),
            r.css(t.scrollbarXRail, "display", ""),
            r.css(t.scrollbarYRail, "display", "")
        }
    }
    , {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20
    }]
}, {}, [1]),
define("dt/ui/Text", ["require", "../lib", "./Component"], function(e) {
    var t = e("../lib")
      , n = e("./Component")
      , r = n.extend({
        _define: {
            css: "dtui-tx",
            viewModel: function() {
                return {
                    value: t.ob(""),
                    encodeHTML: t.ob(!0)
                }
            },
            viewModelPublic: ["value", "encodeHTML"]
        },
        _init: function() {
            function i() {
                var e = n();
                r() && (e = t.encodeHTML(this._stringify(e))),
                this.el().innerHTML = e
            }
            var e = this._viewModel()
              , n = e.value
              , r = e.encodeHTML;
            e.value.subscribe(i, this),
            e.encodeHTML.subscribe(i, this),
            i.call(this)
        },
        _stringify: function(e) {
            return e == null  ? "" : String(e)
        },
        _dispose: function() {
            this.$el().html("")
        }
    });
    return r
}),
define("dt/ui/TextInput", ["require", "jquery", "../lib", "./Component"], function(e) {
    var t = e("jquery")
      , n = e("../lib")
      , r = e("./Component")
      , i = r.extend({
        _define: {
            css: "dtui-txipt",
            viewModel: function() {
                return {
                    value: n.ob(""),
                    mouseEnterSelect: !1,
                    type: "text",
                    placeholder: n.ob(""),
                    alert: n.ob(!1),
                    confirmPoint: {
                        pressEnter: !0,
                        blur: !0
                    }
                }
            },
            viewModelPublic: ["value", "placeholder", "text", "mouseEnterSelect", "type", "alert"]
        },
        _init: function() {
            var e = this._viewModel()
              , r = e.type = e.type || "text"
              , i = this.$el();
            i.addClass(this.getFullCss(r === "textarea" ? "-type-textarea" : "-type-text").join(" "));
            var s = "" + (r === "textarea" ? "<textarea></textarea>" : '<input type="text"/>') + '<span class="' + this.getFullCss("-alert-mark").join(" ") + '" style="display:none"></span>' + '<span class="' + this.getFullCss("-alert-text").join(" ") + '" style="display:none"></span>';
            this._$input = t(i.html(s)[0].firstChild),
            this._$input.on(this._event("mouseenter"), function() {
                n.peek(e.mouseEnterSelect) && this.select && this.select()
            }),
            this._initAlert(),
            this._initPlaceHolder(),
            this._initViewUpdater(),
            this._initModelUpdater()
        },
        focus: function() {
            this._$input.focus()
        },
        select: function() {
            this._$input.select()
        },
        _initAlert: function() {
            function u(e) {
                var r = this.$el()
                  , i = this.getFullCss("-alert").join(" ");
                e ? (r.addClass(i),
                t.type(e) === "string" && (o[0].innerHTML = n.encodeHTML(e),
                s.show())) : (r.removeClass(i),
                s.hide())
            }
            function a() {
                o.show()
            }
            function f() {
                o.hide()
            }
            var e = this.$el()
              , r = this.getFullCss("-alert-mark")
              , i = this.getFullCss("-alert-text")
              , s = this.$el("alertMark", e.find("." + r[r.length - 1]))
              , o = this.$el("alertText", e.find("." + i[i.length - 1]));
            s.on(this._event("mouseenter"), a),
            s.on(this._event("mouseleave"), f),
            this._disposable(this._viewModel().alert.subscribe(u, this))
        },
        _initPlaceHolder: function() {
            function t(e) {
                this._$input.attr("placeholder", e)
            }
            var e = this._viewModel().placeholder;
            n.obTypeOf(e) === "ob" ? (e.subscribe(t, this),
            t.call(this, e())) : e != null  && t.call(this, e)
        },
        _initViewUpdater: function() {
            function n(e) {
                t.val(e)
            }
            var e = this._viewModel()
              , t = this._$input;
            this._disposable(e.disabled.subscribe(function(e) {
                t[0].disabled = !!e
            }, this)),
            this._disposable(e.value.subscribe(n, this)),
            n(e.value())
        },
        _initModelUpdater: function() {
            function o(t) {
                if (i.isDisabled())
                    return;
                e.type === "text" && t.which === 13 && (u(),
                t.preventDefault())
            }
            function u() {
                if (i.isDisabled())
                    return;
                e.value(r.val(), n.valueInfoForConfirmed(t), {
                    force: !0
                }),
                r.val(e.value())
            }
            var e = this._viewModel()
              , t = this.uid()
              , r = this._$input
              , i = this
              , s = e.confirmPoint || {};
            s.blur && r.on(this._event("blur"), u),
            s.pressEnter && r.on(this._event("keypress"), o)
        },
        _dispose: function() {
            this._$input.off(this._event()),
            this._$input = null ,
            this.$el().html("")
        }
    });
    return i
}),
define("dt/ui/CheckButton", ["require", "jquery", "../lib", "./Component"], function(e) {
    var t = e("jquery")
      , n = e("../lib")
      , r = e("./Component")
      , i = n.encodeHTML
      , s = "value-index"
      , o = r.extend({
        _define: {
            css: "dtui-chkbtn",
            viewModel: function() {
                return {
                    checked: n.ob(),
                    dataList: []
                }
            },
            viewModelPublic: ["checked"]
        },
        getDataItem: function(e) {
            var r = this._viewModel().dataList
              , i = n.arrayIndexOf(r, e, "value");
            return i >= 0 ? t.extend({}, r[i]) : null 
        },
        _init: function() {
            n.assert(n.obTypeOf(this._viewModel().checked)),
            this._initContent(),
            this._initTooltip(),
            this._initChange(),
            this._initMouse()
        },
        _getItemCss: function(e) {
            var t = {
                "": "-i",
                hover: "-i-hover",
                active: "-i-active"
            }[e || ""];
            return this.css() + t
        },
        _initContent: function() {
            var e = this._viewModel().dataList
              , t = this._getItemCss()
              , n = [];
            for (var r = 0, o; o = e[r]; r++)
                n.push('<span class="', t, '" data-', s, '="', r, '">', i(o.text), "</span>");
            this.el().innerHTML = n.join("")
        },
        _initTooltip: function() {
            function o(n) {
                var r = e[t(n).data(s)]
                  , o = r.tooltip;
                if (o != null )
                    return r.tooltipEncodeHTML !== !1 ? i(o) : o
            }
            var e = this._viewModel().dataList
              , r = {
                x: 0,
                y: -15,
                xAnchor: "center",
                yAnchor: "bottom"
            };
            this._disposable(n.bindTooltip({
                bindEl: this.el(),
                followMouse: !0,
                selector: "." + this._getItemCss(),
                location: r,
                text: o,
                encodeHTML: !1
            }))
        },
        _initChange: function() {
            function o(o) {
                var u = n.obTypeOf(e.checked);
                r.each(function() {
                    var r = t(this)
                      , a = e.dataList[r.data(s)].value;
                    r[(u === "obArray" ? n.arrayIndexOf(o, a) >= 0 : a === o) ? "addClass" : "removeClass"](i)
                })
            }
            var e = this._viewModel()
              , r = this.$el().find("." + this._getItemCss())
              , i = this._getItemCss("active");
            this._disposable(n.obSubscribe(e.checked, o)),
            o(e.checked())
        },
        _initMouse: function() {
            function a() {
                if (r.disabled())
                    return;
                t(this).addClass(o)
            }
            function f() {
                t(this).removeClass(o)
            }
            function l() {
                if (r.disabled())
                    return;
                var e = r.dataList[t(this).data(s)]
                  , i = e.value;
                if (n.obTypeOf(r.checked) === "obArray") {
                    var o = r.checked()
                      , a = n.arrayIndexOf(o, i);
                    a >= 0 ? o.splice(a, 1) : o.push(i),
                    i = o
                }
                r.checked(i, n.valueInfoForConfirmed(u, {
                    dataItem: e
                }))
            }
            var e = this.$el()
              , r = this._viewModel()
              , i = this._getItemCss()
              , o = this._getItemCss("hover")
              , u = this.uid();
            e.on(this._event("mouseenter"), "." + i, a),
            e.on(this._event("mouseleave"), "." + i, f),
            e.on(this._event("click"), "." + i, l)
        }
    });
    return o
}),
define("dt/ui/TreeList", ["require", "jquery", "../lib", "./Component"], function(e) {
    function c(e) {
        return e
    }
    function h(e) {
        return e != null  ? e : ""
    }
    var t = e("jquery"), n = e("../lib"), r = e("./Component"), i = n.encodeHTML, s = "data-item-path", o = "data-item-level", u = "data-item-encode-html", a = 200, f, l = r.extend({
        _define: {
            css: "dtui-treelist",
            viewModel: function() {
                return {
                    selected: n.ob(),
                    enhanceSelected: !0,
                    hovered: n.ob(),
                    enhanceHovered: !0,
                    highlighted: n.obArray(),
                    enhanceHighlighted: !0,
                    datasource: [],
                    resizeEvent: n.ob()
                }
            },
            viewModelPublic: ["selected", "hovered", "highlighted", "resizeEvent"]
        },
        _init: function() {
            var e = this._viewModel();
            n.assert(n.obTypeOf(e.selected)),
            n.assert(n.obTypeOf(e.highlighted) === "obArray"),
            this._enhanceOb(),
            this._initContent(),
            this._initTooltip(),
            this._initChange(),
            this._initMouse(),
            this._initExpand()
        },
        _enhanceOb: function() {
            var e = this._viewModel();
            if (e.enhanceSelected) {
                var n = e.selected;
                n.getTreeDataItem = t.proxy(this.findDataItemByOb, this, n)
            }
            if (e.enhanceHighlighted) {
                var r = e.highlighted;
                r.getTreeDataItem = t.proxy(this.findDataItemByOb, this, r)
            }
            if (e.enhanceHovered) {
                var i = e.hovered;
                i.getTreeDataItem = t.proxy(this.findDataItemByOb, this, i)
            }
        },
        _getCss: function(e) {
            var t = {
                item: "-i",
                thumb: "-thumb",
                text: "-text",
                textActive: "-text-active",
                textHover: "-text-hover",
                textHighlight: "-text-highlight",
                list: "-list",
                parent: "-parent",
                collapsed: "-collapsed",
                expanded: "-expanded",
                post: "-post"
            }[e || ""];
            return this.css() + t
        },
        _initContent: function() {
            var e = this._getCss("item")
              , t = this._getCss("parent")
              , n = this._getCss("thumb")
              , r = this._getCss("collapsed")
              , a = this._getCss("text")
              , f = this._getCss("list")
              , l = this._getCss("post")
              , p = [];
            this._travelData(this._viewModel().datasource, {
                preList: function(e, t, n) {
                    var r = t === "" ? "" : "display:none";
                    p.push('<ul class="', f, '" style="', r, '">')
                },
                postList: function() {
                    p.push("</ul>")
                },
                preChildren: function(f, l, d, v, m) {
                    var g = f.children && f.children.length ? t + " " + r : ""
                      , y = " " + s + '="' + l + '" '
                      , b = " " + o + '="' + m + '" '
                      , w = " " + u + '="' + (f.itemEncodeHTML !== !1 ? "1" : "0") + '" '
                      , E = f.anchor ? ' name="' + f.anchor + '" ' : " "
                      , S = f.itemEncodeHTML !== !1 ? i : c
                      , x = S(h(f.text))
                      , T = S(h(f.childrenPre))
                      , N = S(h(f.childrenPost))
                      , C = S(h(f.childrenBrief));
                    p.push('<li class="', e, " ", g, '" ', y, b, w, ">", '<i class="', n, '"></i>', E, "<span ", ' class="', a, '" ', y, ">", x, T, C, N, "</span>")
                },
                postChildren: function(e, t, n, r) {
                    p.push("</li>");
                    var s = e.itemEncodeHTML !== !1 ? i : c;
                    r && n && n.childrenPost && p.push('<li class="', l, '">', s(n.childrenPost), "</li>")
                }
            }),
            this.el().innerHTML = p.join("")
        },
        _initTooltip: function() {
            function u(n) {
                if (o.isFrozen())
                    return;
                var r = o._findDataItemByPath(e, t(n).attr(s))
                  , u = (r || {}).tooltip;
                if (u != null )
                    return r.tooltipEncodeHTML !== !1 ? i(u) : u
            }
            var e = this._viewModel().datasource
              , r = {
                x: 0,
                y: -15,
                xAnchor: "center",
                yAnchor: "bottom"
            }
              , o = this;
            this._disposable(n.bindTooltip({
                bindEl: this.el(),
                followMouse: !0,
                selector: "." + this._getCss("text"),
                location: r,
                text: u,
                encodeHTML: !1
            }))
        },
        _initChange: function() {
            var e = this._viewModel()
              , t = e.selected;
            this._disposable(t.subscribe(this._updateSelectedByModel, this)),
            this._updateSelectedByModel(t(), t);
            var n = e.highlighted;
            this._disposable(n.subscribe(this._updateHighlightedByModel, this)),
            this._updateHighlightedByModel(n(), n)
        },
        _initMouse: function() {
            function c(e) {
                if (l.isFrozen())
                    return;
                var n = t(this);
                n.addClass(o);
                var i = l._findDataItemByPath(r.datasource, n.attr(s));
                r.hovered(i.value, {
                    dataItem: i
                })
            }
            function h(e) {
                if (l.isFrozen())
                    return;
                t(this).removeClass(o),
                r.hovered(f)
            }
            function p(e) {
                if (l.isFrozen())
                    return;
                var i = n.obTypeOf(r.selected)
                  , o = l._findDataItemByPath(r.datasource, t(this).attr(s))
                  , u = o.value;
                if (i === "obArray") {
                    var a = r.selected()
                      , f = n.arrayIndexOf(a, u);
                    f >= 0 ? a.splice(f, 1) : a.push(u),
                    u = a
                }
                r.selected(u, {
                    preventExpand: !0,
                    dataItem: o
                })
            }
            function d() {
                if (l.isFrozen())
                    return;
                l._toggleSingleItem(l._findItemEl(t(this)))
            }
            var e = this.$el()
              , r = this._viewModel()
              , i = this._getCss("item")
              , o = this._getCss("textHover")
              , u = this._getCss("text")
              , a = this._getCss("thumb")
              , l = this;
            e.on(this._event("mouseenter"), "." + u, "." + i, c),
            e.on(this._event("mouseleave"), "." + u, "." + i, h),
            e.on(this._event("click"), "." + u, p),
            e.on(this._event("click"), "." + a, d)
        },
        _initExpand: function() {
            var e = this
              , n = this._viewModel().datasource
              , r = this.$el().find("." + this._getCss("item")).filter(function() {
                return !!e._findDataItemByPath(n, t(this).attr(s)).expanded
            });
            this._expandOrCollapse(r, "expand", {
                noAnimation: !0
            })
        },
        _updateSelectedByModel: function(e, r) {
            var i = this._viewModel()
              , s = n.obTypeOf(i.selected)
              , o = this._getCss("textActive")
              , u = []
              , a = this;
            n.assert(s !== "obArray" || t.isArray(e)),
            this._travelItemText(function(t, i) {
                (s === "obArray" ? n.arrayIndexOf(e, i) >= 0 : i === e) ? (t.addClass(o),
                r.peekValueInfo("preventExpand") || u.push(a._findItemEl(t))) : t.removeClass(o)
            }),
            this._showItems(t(u), {
                noAnimation: r.peekValueInfo("noAnimation"),
                collapseLevel: r.peekValueInfo("collapseLevel"),
                always: r.peekValueInfo("always"),
                scrollToTarget: r.peekValueInfo("scrollToTarget")
            })
        },
        _updateHighlightedByModel: function(e, r) {
            var i = this._getCss("textHighlight")
              , s = []
              , o = this;
            this._travelItemText(function(t, u) {
                n.arrayIndexOf(e, u) >= 0 ? (t.addClass(i),
                r.peekValueInfo("preventExpand") || s.push(o._findItemEl(t))) : t.removeClass(i)
            }),
            this._showItems(t(s), {
                noAnimation: r.peekValueInfo("noAnimation"),
                collapseLevel: r.peekValueInfo("collapseLevel"),
                always: r.peekValueInfo("always"),
                scrollToTarget: r.peekValueInfo("scrollToTarget")
            })
        },
        _showItems: function(e, n) {
            function i() {
                if (this.isDisposed())
                    return;
                this._expandOrCollapse(r, "expand", {
                    noAnimation: n.noAnimation,
                    always: t.proxy(s, this)
                })
            }
            function s() {
                if (this.isDisposed())
                    return;
                var r = t(e[0])
                  , i = n.scrollToTarget;
                i && r.length && (i.container || t("html,body")).animate({
                    scrollTop: r.offset().top - (i.clientX || 30)
                }),
                n.always && n.always()
            }
            n = n || {};
            var r = this._getAncestorItems(e);
            this._collapseAll({
                collapseLevel: n.collapseLevel,
                noAnimation: n.noAnimation,
                always: t.proxy(i, this)
            })
        },
        _getAncestorItems: function(e) {
            var n = this
              , r = [];
            return e.each(function() {
                var e = t(this)
                  , i = n.css()
                  , s = n._getCss("item")
                  , o = e.parent();
                while (o && o.length && !o.hasClass(i))
                    o.hasClass(s) && r.push(o[0]),
                    o = o.parent()
            }),
            t(r)
        },
        _getParentItem: function(e) {
            return e.parent().closest("." + this._getCss("item"))
        },
        _travelItemText: function(e) {
            var n = this._viewModel()
              , r = this.$el().find("." + this._getCss("text"))
              , i = this;
            r.each(function() {
                var r = t(this)
                  , o = i._findDataItemByPath(n.datasource, r.attr(s)).value;
                e.call(i, r, o)
            })
        },
        _collapseAll: function(e) {
            function u() {
                !r.isDisposed() && e.always && e.always()
            }
            var n = e.collapseLevel
              , r = this;
            if (n == null  || n < 0)
                setTimeout(u, 0);
            else {
                var i = "." + this._getCss("item")
                  , s = this.$el().find(i).filter(function() {
                    return t(this).attr(o) >= n
                });
                this._expandOrCollapse(s, "collapse", {
                    noAnimation: e.noAnimation,
                    always: u
                })
            }
        },
        _expandOrCollapse: function(e, n, r) {
            function d(e) {
                if (u.isDisposed())
                    return;
                u._findElInItem(t(p.withAnimation), "list")[c](r.noAnimation ? 0 : a).promise().always(e)
            }
            function v(e) {
                if (u.isDisposed())
                    return;
                u._findElInItem(t(p.withoutAnimation), "list")[c](0).promise().always(e)
            }
            function m() {
                if (u.isDisposed())
                    return;
                n === "collapse" && u._resetItemText(h),
                o.resizeEvent({}),
                r.always && r.always()
            }
            r = r || {};
            var i = this._getCss("collapsed"), s = this._getCss("expanded"), o = this._viewModel(), u = this, f, l, c;
            n === "expand" ? (f = i,
            l = s,
            c = "slideDown") : (f = s,
            l = i,
            c = "slideUp");
            var h = e.filter("." + f)
              , p = {
                withAnimation: [],
                withoutAnimation: []
            };
            h.each(function() {
                u._getParentItem(t(this)).hasClass(s) ? p.withAnimation.push(this) : p.withoutAnimation.push(this)
            }),
            h.removeClass(f).addClass(l),
            n === "expand" && this._resetItemText(h),
            n === "expand" ? v(t.proxy(d, this, m)) : d(t.proxy(v, this, m))
        },
        _toggleSingleItem: function(e) {
            function o(t) {
                if (this.isDisposed())
                    return;
                t && this._resetItemText(e),
                i.resizeEvent({})
            }
            var n = this._getCss("collapsed")
              , r = this._getCss("expanded")
              , i = this._viewModel()
              , s = this._findElInItem(e, "list");
            e.hasClass(n) ? (e.removeClass(n).addClass(r),
            s.slideDown(a, t.proxy(o, this, !1)),
            this._resetItemText(e)) : e.hasClass(r) && (e.removeClass(r).addClass(n),
            s.slideUp(a, t.proxy(o, this, !0)))
        },
        hasValue: function(e) {
            function n(n) {
                n.value === e && (t = !0)
            }
            var t = !1;
            return this._travelData(this._viewModel().datasource, {
                preChildren: n
            }),
            t
        },
        findDataItemByOb: function(e, t) {
            var r = n.obTypeOf(e) === "obArray" ? e() : [e()];
            return this.findDataItemByValues(r, t)
        },
        findDataItemByValues: function(e, t) {
            function i(t) {
                n.arrayIndexOf(e, t.value) >= 0 && r.push(t)
            }
            var r = [];
            return this._travelData(this._viewModel().datasource, {
                preChildren: i
            }),
            t ? r[0] : r
        },
        travelData: function(e) {
            return this._travelData(this._viewModel().datasource, e)
        },
        _travelData: function(e, t, n, r, i) {
            n = n == null  || n === "" ? "" : n + ",",
            i == null  && (i = 0);
            if (e && e.length) {
                t.preList && t.preList(e, n, r);
                for (var s = 0, o = e.length; s < o; s++) {
                    var u = e[s]
                      , a = n + s
                      , f = s === o - 1;
                    t.preChildren && t.preChildren(u, a, r, f, i),
                    this._travelData(u.children, t, a, u, i + 1),
                    t.postChildren && t.postChildren(u, a, r, f, i)
                }
                t.postList && t.postList(e, n, r)
            }
        },
        _findDataItemByPath: function(e, t) {
            t = t.split(","),
            e = e || [];
            var n;
            for (var r = 0, i = t.length; r < i && e; r++)
                n = e[t[r]],
                e = (n || {}).children;
            return n
        },
        _findItemEl: function(e) {
            var t = this.css()
              , n = this._getCss("item");
            while (!e.hasClass(n)) {
                if (e.hasClass(t))
                    return null ;
                e = e.parent()
            }
            return e
        },
        _findElInItem: function(e, t) {
            return e.find("> ." + this._getCss(t))
        },
        _resetItemText: function(e) {
            var n = this
              , r = this._viewModel().datasource;
            e.each(function() {
                var e = t(this)
                  , o = n._findDataItemByPath(r, e.attr(s))
                  , a = e.attr(u) === "0" ? c : i
                  , f = n._findElInItem(e, "text");
                e.hasClass(n._getCss("collapsed")) ? f[0].innerHTML = a([h(o.text), h(o.childrenPre), h(o.childrenBrief), h(o.childrenPost)].join("")) : e.hasClass(n._getCss("expanded")) && (f[0].innerHTML = a([h(o.text), h(o.childrenPre)].join("")))
            })
        }
    });
    return l
}),
define("dt/config", ["require"], function(e) {
    function i(e) {
        if (n.hasOwnProperty(e))
            return n[e];
        if (r[t].hasOwnProperty(e))
            return r[t][e]
    }
    var t = "cn"
      , n = {
        panelBaseZIndex: 9e5,
        panelMastOpacity: .7,
        winPanelAnimationDuration: 300
    }
      , r = {
        cn: {
            langDialogConfirm: "确定",
            langDialogYes: "是",
            langDialogNo: "否",
            langDialogSave: "保存",
            langDialogDontSave: "不保存",
            langDialogCancel: "取消",
            langDialogSaveFail: "保存失败",
            langDialogRemove: "删除",
            langDialogConfirmRemove: "您确认要删除吗？一旦删除，不可恢复。"
        },
        en: {
            langDialogConfirm: "OK",
            langDialogYes: "Yes",
            langDialogNo: "No",
            langDialogSave: "Save",
            langDialogDontSave: "Don't Save",
            langDialogCancel: "Cancel",
            langDialogSaveFail: "Save Failed.",
            langDialogRemove: "Delete",
            langDialogConfirmRemove: "Confirm Deleting? Can not be restored when deleted."
        }
    };
    return i.setLang = function(e) {
        e = e
    }
    ,
    i
}),
define("dt/ui/BasePanel", ["require", "jquery", "../lib", "./Component"], function(e) {
    function u(e) {
        i(this)[o] = e
    }
    function a(e) {
        return ~n.arrayIndexOf(e, this.getPanelState())
    }
    var t = e("jquery")
      , n = e("../lib")
      , r = e("./Component")
      , i = n.makeInner()
      , s = i.attach(r.extend({
        _define: {
            viewModel: function() {
                return {
                    panelOpenStatus: null 
                }
            },
            viewModelPublic: ["panelOpenStatus"]
        },
        PanelState: {
            NONE: "NONE",
            CREATED: "CREATED",
            READY: "READY",
            DATA_FILLED: "DATA_FILLED",
            DISPOSED: "DISPOSED"
        },
        getPanelState: function() {
            return i(this)[o]
        },
        _construct: function() {
            u.call(this, this.PanelState.NONE);
            var e = this._applySuper("_construct", arguments);
            return u.call(this, this.PanelState.CREATED),
            e
        },
        dispose: function() {
            var e = this._applySuper("dispose", arguments);
            return u.call(this, this.PanelState.DISPOSED),
            e
        },
        enter: function(e) {
            if (!this.isOpened())
                return !1;
            this.getPanelState() === this.PanelState.CREATED && (this._fillContent(e),
            u.call(this, this.PanelState.READY)),
            this._enter(e),
            u.call(this, this.PanelState.DATA_FILLED)
        },
        _fillContent: t.noop,
        _enter: t.noop,
        clear: function() {
            if (!a.call(this, [this.PanelState.DATA_FILLED, this.PanelState.READY]))
                return;
            this._clear(),
            u.call(this, this.PanelState.READY)
        },
        _clear: t.noop,
        isOpened: function() {
            var e = this._viewModel().panelOpenStatus;
            return e ? e() === "opened" : !0
        }
    }))
      , o = "__panelState__" + s.uid;
    return s
}),
define("tpl", ["require", "exports", "module", "etpl"], function(e, t, n) {
    var r = e("etpl");
    return {
        load: function(e, t, i, s) {
            var o = t.toUrl(e);
            if (typeof window == "undefined") {
                i();
                return
            }
			//Add by JasonGSuperZDev
			if(o.indexOf('main.tpl.html') > -1){ 
				i('{{ target: APIMain }} <div class="ecdoc-api-left-area">      <div class="ecdoc-api-query-box">         <div data-cpt="             type: \'TextInput\',             name: \'queryInput\',             viewModel: {                 mouseEnterSelect: true,                 confirmPoint: {blur: false, pressEnter: true}             }">         </div>         <div data-cpt="             type: \'CheckButton\',             name: \'queryMode\',             viewModel: {                 css: \'query-mode\',                 checked: lib.ob(\'fuzzyPath\'),                 dataList: [                     {                         value: \'fuzzyPath\',                         placeholder: lang.queryBoxPlaceholderFuzzyPath,                         text: lang.queryBoxTextFuzzyPath                     },                     {                         value: \'anyText\',                         placeholder: lang.queryBoxPlaceholderAnyText,                         text: lang.queryBoxTextAnyText                     }                 ]             }">         </div>         <div data-cpt="             type: \'Button\',             name: \'collapseAll\',             text: lang.collapseAll,             css: \'collapse-all\'">         </div>         <span class="query-result-info"></span>     </div>      <div class="ecdoc-api-tree-area">         <div class="ecdoc-api-tree" data-cpt="             type: \'TreeList\',             name: \'apiDocTree\',             viewModel: {                 selected: viewModel.apiTreeSelected,                 highlighted: viewModel.apiTreeHighlighted,                 hovered: viewModel.apiTreeHovered,                 datasource: viewModel.apiTreeDatasource,                 resizeEvent: viewModel.apiTreeResize             }">         </div>     </div>  </div>  <div class="ecdoc-api-right-area">     <div class="ecdoc-api-doc-group-area">         <div class="ecdoc-api-doc-group-content">         </div>     </div> </div>  <div class="ecdoc-api-hover-desc" style="display:none"> </div> {{ /target }}   {{ target: descGroupTitle }} <div class="ecdoc-api-doc-group-title">${baseDescOptionPath|raw}</div> <div class="ecdoc-api-doc-group-title-desc">     ${descText|raw} </div> {{ /target }}   {{ target: descGroupLine }} <div class="ecdoc-api-doc-group-line ${highlightCSS}" data-tree-item-id="${idAttr}" >     <div data-tree-item-id="${idAttr}"         class="ecdoc-api-doc-line-expand iconfont"         {{ if: !${showExpandIcon} }}style="display:none"{{ /if }}>${expandIcon|raw}</div>     <div class="ecdoc-api-doc-line-head">        <span class="ecdoc-api-doc-line-label">${descItemOptionPath|raw}</span>        <span class="ecdoc-api-doc-line-type">${descItemType|raw}</span>     </div>     <div class="ecdoc-api-doc-line-default">        ${descItemContent|raw}     </div>     ${descItemDescText|raw}     {{ if: ${subGroupHTML} }}     <div style="display:none" class="ecdoc-api-doc-sub-group">         ${subGroupHTML|raw}     </div>     {{ /if }} </div> {{ /target }}');return;
			};
			if(o.indexOf('ui.tpl.html') > -1){ 
				i('{{ target: winPanel }}<div class="dtui-winpn"><div class="dtui-close-cross">X</div>    <div class="dtui-winpn-con"></div></div>{{ /target }}{{ target: dialogPanel }}<div class="dtui-dlg">    <div class="dtui-con">&nbsp;</div>    <div class="dtui-btns">        {{ for: ${viewModel.btnViewModels} as ${vm}, ${index} }}        <div data-cpt="            type: \'Button\',            name: \'btns[${index}]\',            viewModelGet: \'btnViewModels[${index}]\'"></div>        {{ /for }}    </div></div>');return;
			};
            var u = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            u.open("GET", o, !0),
            u.onreadystatechange = function() {
                if (u.readyState === 4) {
                    if (u.status >= 200 && u.status < 300) {
                        var e = u.responseText
                          , t = n.config();
                        (typeof t.autoCompile == "undefined" || t.autoCompile) && r.compile(e),
                        i(e)
                    }
                    u.onreadystatechange = new Function,
                    u = null 
                }
            }
            ,
            u.send(null )
        }
    }
}),
define("dt/ui/WinPanel", ["require", "jquery", "../lib", "../config", "./BasePanel", "tpl!./ui.tpl.html"], function(e) {
    var t = e("jquery"), n = e("../lib"), r = e("../config"), i = e("./BasePanel"), s = n.makeInner(), o = "winPanel", u = ".dtui-close-cross", a = ".dtui-winpn-con", f = "winpn", l, c = s.attach(i.extend({
        _define: {
            tpl: e("tpl!./ui.tpl.html"),
            tplTarget: "winPanel",
            closeWhenClickOther: !1
        },
        _init: function() {
            function i() {
                (!this._onCloseBtnClick || this._onCloseBtnClick() !== !1) && this.close()
            }
            var e = t(this._renderTpl(o)).appendTo(document.body).hide();
            l == null  && (l = r("panelBaseZIndex")),
            this._manuInitView(e);
            var n = s(this);
            n.mainEl = e,
            n.isOpen = !1,
            this.$el("winPanel$content", e.find(a)),
            n.maskKey = Math.random() + "",
            e.on(this._event("click"), u, t.proxy(i, this)),
            this._afterInit(this.$content())
        },
        _disposeFinally: function() {
            var e = s(this);
            n.disposeGlobalMask(e.maskKey),
            e.mainEl.remove(),
            e.mainEl = null 
        },
        open: function(e) {
            function a() {
                this._getDefineProperty("closeWhenClickOther") && this.close()
            }
            if (this.isOpen())
                return;
            var i = this.$el()
              , o = this.$content()
              , u = s(this);
            n.globalMask(r("panelMastOpacity"), u.maskKey, f, {
                click: t.proxy(a, this)
            }),
            u.isOpen = !0,
            this._beforeShow(o, e),
            i.show(),
            this._afterShow(o, e),
            i.css({
                top: 0 - Math.round(i.outerHeight()),
                marginLeft: 0 - Math.round(i.outerWidth() / 2),
                marginTop: 0,
                "z-index": l++
            });
            var c = this._getDefineProperty("noAnimate");
            i.animate({
                top: "50%",
                marginTop: 0 - Math.round(i.outerHeight() / 2)
            }, c ? 0 : r("winPanelAnimationDuration"))
        },
        close: function() {
            if (!this.isOpen())
                return;
            var e = this.$el()
              , t = s(this);
            t.isOpen = !1,
            this._beforeHide(this.$content());
            var i = this
              , o = this._getDefineProperty("noAnimate");
            e.animate({
                top: 0 - Math.round(e.outerHeight()),
                marginTop: 0
            }, o ? 0 : r("winPanelAnimationDuration"), "swing", function() {
                e.hide(),
                n.globalMask(!1, t.maskKey),
                i._afterHide(i.$content()),
                i.fire("close")
            })
        },
        $content: function() {
            return this.$el("winPanel$content")
        },
        isOpen: function() {
            return s(this).isOpen
        },
        _afterInit: t.noop,
        _beforeShow: t.noop,
        _afterShow: t.noop,
        _beforeHide: t.noop,
        _afterHide: t.noop,
        _onCloseBtnClick: t.noop
    }));
    return c
}),
define("dt/ui/Button", ["require", "jquery", "./Component", "../lib"], function(e) {
    var t = e("jquery")
      , n = e("./Component")
      , r = e("../lib")
      , i = "dtui-btn"
      , s = ["click", "mouseenter", "mouseleave"]
      , o = n.extend({
        _define: {
            viewModel: function() {
                return {
                    text: r.ob(""),
                    dontEncodeHTML: !1
                }
            },
            viewModelPublic: ["text"],
            css: i
        },
        _init: function() {
            function h() {
                if (e.disabled())
                    return;
                n.addClass(o),
                a && n.addClass(u)
            }
            function p() {
                n.removeClass(o),
                n.removeClass(u)
            }
            function d() {
                if (e.disabled())
                    return;
                n.addClass(u),
                a = !0,
                f.one(i._event("mouseup"), function() {
                    a = !1
                })
            }
            function v() {
                n.removeClass(u)
            }
            function m(t) {
                n.html(e.dontEncodeHTML ? t : r.encodeHTML(t))
            }
            var e = this._viewModel()
              , n = this.$el()
              , i = this
              , o = this.getFullCss("-hover").join(" ")
              , u = this.getFullCss("-active").join(" ")
              , a = !1
              , f = t(document);
            this._eventHandlerMap = {},
            n.on(this._event("mouseenter"), h),
            n.on(this._event("mouseleave"), p),
            n.on(this._event("mousedown"), d),
            n.on(this._event("mouseup"), v);
            var l = this;
            t.each(s, function(e, t) {
                n.on(l._event(t), function(e) {
                    l.trigger.call(l, t, e)
                })
            }),
            r.obTypeOf(e.text) === "ob" && this._disposable(e.text.subscribe(m, this));
            var c = r.value(e.text);
            n.html(e.dontEncodeHTML ? c : r.encodeHTML(c))
        },
        _parseViewModel: function(e, t) {
            return t.text != null  && (e.text = t.text),
            t.css != null  && (e.css = t.css),
            t.dontEncodeHTML != null  && (e.dontEncodeHTML = t.dontEncodeHTML),
            e
        },
        on: function(e, n) {
            r.assert(e.indexOf(".") < 0);
            var i = this._eventHandlerMap;
            t.inArray(e, s) >= 0 && (i[e] = i[e] || [],
            i[e].push(n))
        },
        trigger: function(e, n) {
            var r = this._viewModel()
              , i = this._eventHandlerMap[e];
            if (r.disabled())
                return;
            i && i.length && t.each(i, function(e, r) {
                t.isFunction(r) && r.call(this, n)
            })
        },
        _dispose: function() {
            this.$el().off(),
            this._eventHandlerMap = null 
        }
    });
    return o
}),
define("dt/ui/Foreach", ["require", "jquery", "../lib", "./Component"], function(e) {
    function a(e) {
        f[e.key].call(this, e)
    }
    function l(e, r) {
        var i = this._items()
          , s = this._getCommonConfig("itemTplTarget")
          , o = this._getCommonConfig("itemTplParam")
          , u = this._getCommonConfig("itemType")
          , a = u ? this.getCptClass(u) : this.Item;
        for (var f = 0, l = r.length; f < l; f++) {
            var c = r[f]
              , h = this.getCptDef("itemConfigAttr");
            if (h && c) {
                var d = c[h];
                d.itemType && (a = this.getCptClass(d.itemType)),
                d.itemTplTarget && (s = d.itemTplTarget),
                d.itemTplParam && (o = d.itemTplParam)
            }
            var v = t(s ? this._renderTpl(s, t.extend({
                index: e + f,
                itemTplParam: o
            }, c)) : "<div></div>");
            n.assert(v.length === 1, "MUST be only one root element in item tpl!"),
            p.call(this, v, e + f);
            var m = new a(v,c);
            i.splice(e + f, 0, m)
        }
    }
    function c(e, t) {
        var n = this._items()
          , r = n.splice(e, t);
        for (var i = 0, s = r.length; i < s; i++) {
            var o = r[i]
              , u = o.$el();
            o.dispose(),
            u.remove()
        }
    }
    function h(e, t) {
        var n = this._items()
          , r = n[e]
          , i = r.$el()
          , s = n[t].$el();
        t > e ? i.insertAfter(s) : i.insertBefore(s),
        n.splice(e, 1)[0],
        n.splice(t, 0, r)
    }
    function p(e, t) {
        var n = this._items();
        return !n.length || t >= n.length ? e.appendTo(s(this).$itemsContainer) : e.insertBefore(n[t].el())
    }
    var t = e("jquery")
      , n = e("../lib")
      , r = e("./Component")
      , i = n.obArray.ChangeKey
      , s = n.makeInner()
      , o = "-foreach-items-prop"
      , u = s.attach(r.extend({
        _define: {
            viewModel: function() {
                return {
                    data: n.obArray([])
                }
            },
            viewModelPublic: ["data"],
            css: "cpt-foreach"
        },
        _prepare: function() {
            var e = this._viewModel().data;
            this._sub(o, []),
            this._setItemsContainer(),
            this._disposable(e.subscribe(a, this, "arrayChange"));
            var t = {
                key: i.SPLICE,
                index: 0,
                removeCount: 0,
                added: []
            };
            for (var n = 0, r = e.peek(), s = r.length; n < s; n++)
                t.added.push(r[n]);
            a.call(this, t)
        },
        _dispose: function() {
            this.foreach(function(e, t) {
                t.dispose()
            })
        },
        _parseViewModel: function(e) {
            return n.assert(n.obTypeOf(e) === "obArray"),
            {
                data: e
            }
        },
        foreach: function(e) {
            var t = this._items();
            for (var n = 0, r = t.length; n < r; n++)
                e(n, t[n])
        },
        getItemAt: function(e) {
            return this._items()[e]
        },
        count: function() {
            return this._viewModel().data.count()
        },
        _items: function() {
            return this._sub(o)
        },
        _setItemsContainer: function() {
            s(this).$itemsContainer = this.$el()
        },
        _getCommonConfig: function(e) {
            return this.getCptDef(e) || this._getDefineProperty(e)
        }
    }))
      , f = {};
    return f[i.REMOVE] = function(e) {
        var t = e.indexes;
        for (var n = 0, r = t.length; n < r; n++)
            c.call(this, t[n], 1)
    }
    ,
    f[i.SPLICE] = function(e) {
        e.removeCount && c.call(this, e.index, e.removeCount),
        e.added.length && l.call(this, e.index, e.added)
    }
    ,
    f[i.MOVE] = function(e) {
        h.call(this, e.originIndex, e.finalIndex)
    }
    ,
    u.prototype.Item = r.extend({
        _define: {
            css: "dtui-foreach-item",
            viewModelOnlyAccessDeclaredProperties: !1
        }
    }),
    u
}),
define("dt/componentConfig", ["require", "./ui/Component", "./ui/Text", "./ui/TextInput", "./ui/CheckButton", "./ui/TreeList", "./ui/WinPanel", "./ui/Button", "./ui/Foreach"], function(e) {
    var t = e("./ui/Component")
      , n = t.cptClasses;
    n.Text = e("./ui/Text"),
    n.TextInput = e("./ui/TextInput"),
    n.CheckButton = e("./ui/CheckButton"),
    n.TreeList = e("./ui/TreeList"),
    n.WinPanel = e("./ui/WinPanel"),
    n.Button = e("./ui/Button"),
    n.Foreach = e("./ui/Foreach")
}),
define("docTool/main", ["require", "jquery", "dt/ui/Component", "./schemaHelper", "dt/lib", "dt/tpl", "./docUtil", "./lang", "./hashHelper", "perfectScrollbar", "prettyPrint", "dt/componentConfig", "tpl!./main.tpl.html"], function(e) {
    function M(e) {
        return e.defaultValueText ? "[ default: " + e.defaultValueText + " ]" : ""
    }
    function _(e) {
		//JasonGSuperZDev
		return;
        h(i.assign({
            page: o.getGlobalArg("pageName")
        }, e))
    }
    var t = e("jquery")
      , n = e("dt/ui/Component")
      , r = e("./schemaHelper")
      , i = e("dt/lib")
      , s = e("dt/tpl")
      , o = e("./docUtil")
      , u = e("./lang")
      , a = e("./hashHelper")
      , f = e("perfectScrollbar")
      , l = e("prettyPrint")
      , c = o.getGlobalArg("iconfont");
	  //JasonGSuperZDev
      //, h = e("ecLog");
    e("dt/componentConfig");
    var p = "APIMain", d = ".ecdoc-api-hover-desc", v = ".query-collapse-radio input[type=radio]", m = ".query-result-info", g = ".ecdoc-api-doc-group-content", y = ".ecdoc-api-tree-area", b = ".ecdoc-api-doc-group-area", w = "ecdoc-api-doc-line-expand", E = "ecdoc-api-doc-group-line-highlight", S = "ecdoc-api-doc-sub-group", x = c.down, T = c.left, N = "ecdoc-api-doc-group-line", C = /<iframe[^>]*>.*?<\/iframe>/g, k = !0, L = {}, A;
    L.init = function() {
        A = new O(t(".ecdoc-apidoc"))
    }
    ;
    var O = n.extend({
        _define: {
            tpl: e("tpl!./main.tpl.html"),
            css: "ecdoc-apidoc",
            viewModel: function() {
                return {
                    apiTreeDatasource: [],
                    apiTreeSelected: i.ob(),
                    apiTreeHighlighted: i.obArray(),
                    apiTreeHovered: i.ob(),
                    apiTreeResize: i.ob()
                }
            }
        },
        getLang: function() {
            return u
        },
        _initHash: function() {
            function t(t) {
                k && _({
                    key: "initHash",
                    data: t
                }),
                t || (t = o.getGlobalArg("initHash", "")),
                t && e._handleHashQuery(t),
                k = !1
            }
            var e = this;
            a.initHash(t)
        },
        _initScroll: function() {
            var e = this.$el()
              , t = {}
              , n = e.find(b);
            f.initialize(e.find(y)[0], t),
            f.initialize(n[0], t);
            var r = this;
            n.on("ps-scroll-y", function(e) {
                r._doLazyLoad()
            })
        },
        _prepare: function() {
            function e(e, t) {
                this._prepareDoc(e),
                this._applyTpl(this.$el(), p),
                this._initDoc(),
                this._initHash(),
                this._initScroll()
            }
			
            t.getJSON(o.addVersionArg(o.getGlobalArg("schemaUrl"))).done(t.proxy(e, this))
        },
        _prepareDoc: function(e) {
            var t = {};
            r.buildDoc(e, t);
            var n = this._docTree = {
                value: "root",
                text: o.getGlobalArg("docTreeRootText", ""),
                childrenPre: o.getGlobalArg("docTreeChildrenPre", "{"),
                childrenPost: o.getGlobalArg("docTreeChildrenPost", "}"),
                childrenBrief: "...",
                children: t.children[0].children,
                expanded: !0,
                optionPathHTML: "option",
                type: "Object",
                hasObjectProperties: !0
            };
            this._viewModel().apiTreeDatasource = o.getGlobalArg("hideTreeRoot") ? n.children : [n]
        },
        _initDoc: function() {
            this._initTree(),
            this._initQueryBox(),
            this._initDescArea()
        },
        _initTree: function() {
            function n(e, t, n) {
                var r = n.getTreeDataItem(!0);
                this._showHoverTargetDesc(r ? r : !1)
            }
            function r(e, t, n) {
                var r = n.getTreeDataItem(!0)
                  , s = this.$el();
                e && r && (this._updateDescArea(r),
                k || _({
                    key: "clickTreeItem",
                    data: r.optionPathForHash
                }),
                i.call(this, r),
                s.find("." + E).removeClass(E),
                this._findDescNode(r.value).addClass(E),
                r.optionPathForHash && a.hashRoute({
                    queryString: r.optionPathForHash
                }))
            }
            function i(e) {
                var t = this.$el()
                  , n = t.find(b)
                  , r = this._findDescNode(e.value)
                  , i = this.$el().find(g)
                  , s = r.length ? r.offset().top - i.offset().top : 0;
                n.animate({
                    scrollTop: s - 10
                }, 300).promise().always(function() {
                    f.update(n[0])
                })
            }
            function s(e, t, n) {
                f.update(this.$el().find(y)[0])
            }
            var e = this._viewModel();
            this._disposable(e.apiTreeHovered.subscribe(t.proxy(n, this, !1))),
            this._disposable(e.apiTreeSelected.subscribe(t.proxy(r, this, !0))),
            this._disposable(e.apiTreeResize.subscribe(t.proxy(s, this, !0)))
        },
        _initQueryBox: function() {
            function s(t) {
                _({
                    key: "changeSearchMode",
                    data: t
                });
                var r = n.getDataItem(t);
                e.viewModel("placeholder")(r.placeholder),
                o.call(this, !0)
            }
            function o(e) {
                var t = r();
                e || _({
                    key: "search",
                    data: t,
                    queryMode: i()
                }),
                t && this.doQuery(t, i(), !1, !0)
            }
            function u() {
                _({
                    key: "collapseAll"
                }),
                this._setResultInfo(null ),
                this._viewModel().apiTreeHighlighted([], {
                    collapseLevel: 1
                })
            }
            var e = this._sub("queryInput")
              , n = this._sub("queryMode")
              , r = e.viewModel("value");
            r.subscribe(t.proxy(o, this, !1));
            var i = n.viewModel("checked");
            i.subscribe(s, this),
            s.call(this, i()),
            this._sub("collapseAll").on("click", t.proxy(u, this)),
            t(document).keypress(function(t) {
                var n = (t.target.tagName || "").toLowerCase();
                t.which === 47 && n !== "input" && n !== "textarea" && (e.focus(),
                e.select(),
                t.preventDefault())
            })
        },
        _initDescArea: function() {
            function n(t) {
                var n = this._findDescNode(t.currentTarget.getAttribute("data-tree-item-id"))
                  , r = this._findElInDescNode(n);
                if (!r.subGroup.length)
                    return;
                var i = this._sub("apiDocTree").findDataItemByValues([r.expandBtn.attr("data-tree-item-id")], !0)
                  , s = i ? i.optionPathForHash : "";
                r.subGroup[0].style.display === "none" ? (_({
                    key: "expandDesc",
                    data: s
                }),
                r.expandBtn[0].innerHTML = x,
                r.subGroup.slideDown().promise().always(e)) : (_({
                    key: "collapseDesc",
                    data: s
                }),
                r.expandBtn[0].innerHTML = T,
                r.subGroup.slideUp().promise().always(e))
            }
            this.$el().find(g).on("click", "." + w, t.proxy(n, this));
            var e = t.proxy(function() {
                f.update(this.$el().find(b)[0])
            }, this)
        },
        _updateDescArea: function(e) {
            function c() {
                a.filter(function() {
                    var e = t(this);
                    if (e.attr("src"))
                        return !1;
                    var n = e.offset().top
                      , r = i.height()
                      , s = i.offset().top;
                    return n < r + s && n > s
                }).each(function() {
                    t(this).attr("src", t(this).data("src"))
                })
            }
            var n = this.$el()
              , r = n.find(g)
              , i = n.find(b)
              , s = this._getTraceToComponentRoot(e)
              , o = s[0]
              , u = "";
            o !== this._lastDescBase && (u = this._createDescHTML(o, e),
            r[0].innerHTML = u),
            this._lastDescBase = o,
            this._doExpand(s, r, e),
            r.find("pre code").each(function(e, n) {
                t(n).addClass("prettyprint")
            }),
            l(),
            f.update(n.find(b)[0]);
            var a = i.find("iframe");
            c(),
            this._doLazyLoad = c
        },
        _findDescNode: function(e) {
            var n = t.isArray(e)
              , r = {};
            if (n)
                for (var i = 0; i < e.length; i++)
                    r[e[i]] = 1;
            return this.$el().find("." + N).filter(function(t, i) {
                var s = i.getAttribute("data-tree-item-id");
                return n ? !!r[s] : s === e
            })
        },
        _findElInDescNode: function(e) {
            return {
                expandBtn: e.find("> ." + w),
                subGroup: e.find("> ." + S)
            }
        },
        _getTraceToComponentRoot: function(e) {
            var t = [], n, r = e;
            while (r && (n = r.parent) && n.parent && (!r.isEnumParent || r === e))
                t.push(r),
                r = n;
            return t.reverse()
        },
        _createDescHTML: function(e, t) {
            function o(e, t) {
                var r = e.children;
                if (!r)
                    return "";
                var i = [];
                for (var u = 0; u < r.length; u++) {
                    var a = n._wrapDesc(r[u])
                      , f = "";
                    r[u].hasObjectProperties && (f = o(r[u], t)),
                    i.push(s.render("descGroupLine", {
                        descItemOptionPath: a.optionPath,
                        descItemType: a.type,
                        descItemContent: M(a),
                        descItemDescText: a.descText,
                        showExpandIcon: !!f,
                        expandIcon: T,
                        highlightCSS: r[u] === t ? E : "",
                        idAttr: r[u].value,
                        subGroupHTML: f
                    }))
                }
                return i.join("")
            }
            if (!e)
                return "";
            var n = this
              , r = this._wrapDesc(e)
              , i = s.render("descGroupTitle", {
                baseDescOptionPath: r.optionPath,
                descText: r.descText
            });
            return i + o(e, t)
        },
        _doExpand: function(e, n, r) {
            var i = [];
            for (var s = 1; s < e.length; s++)
                i.push(e[s].value);
            var o = this._findDescNode(i)
              , u = this;
            o.each(function(e, n) {
                var r = u._findElInDescNode(t(n));
                if (!r.subGroup.length)
                    return;
                r.expandBtn[0].innerHTML = x,
                r.subGroup.show()
            })
        },
        _wrapDesc: function(e, n) {
            var r = e.type || "";
            t.isArray(r) && (r = r.join(", "));
            var s = u.langCode === "en" ? e.descriptionEN || "" : e.descriptionCN || "";
            return n && (s = s.replace(C, "")),
            {
                type: i.encodeHTML(r),
                descText: s,
                defaultValueText: i.encodeHTML(e.defaultValueText),
                optionPath: e.optionPathHTML
            }
        },
        _showHoverTargetDesc: function(e) {
            var t = this.$el()
              , n = t.find(d);
            if (e === !1) {
                n.stop().fadeOut(100);
                return
            }
            n.stop().css("opacity", 1).show();
            var r = this._wrapDesc(e, !0);
            n[0].innerHTML = s.render("descGroupLine", {
                descItemOptionPath: r.optionPath,
                descItemType: r.type,
                descItemContent: M(r),
                descItemDescText: r.descText
            })
        },
        _handleHashQuery: function(e) {
            var t = this._viewModel().apiTreeSelected.getTreeDataItem(!0);
            if (!t || e !== t.optionPathForHash)
                k || _({
                    key: "innerLinkChangeHash",
                    data: e
                }),
                this.doQuery(e, "optionPath", !0)
        },
        doQuery: function(e, n, i, s) {
            var o;
            try {
                var u = {};
                u[n] = e,
                o = r.queryDocTree(this._docTree, u)
            } catch (a) {
                alert(a);
                return
            }
            s && this._setResultInfo(o.length);
            var f = null ;
            t(v).each(function() {
                this.checked && this.value === "1" && (f = 2)
            });
            if (!o.length)
                return;
            var l = [];
            for (var c = 0, h = o.length; c < h; c++)
                l.push(o[c].value);
            var p = this._viewModel()
              , d = {
                scrollToTarget: {
                    container: this.$el().find(y),
                    clientX: 180
                },
                collapseLevel: f
            };
            i ? p.apiTreeSelected(o[0].value, d) : p.apiTreeHighlighted(l, d)
        },
        _setResultInfo: function(e) {
            var t = e == null  ? "" : e === 0 ? u.queryBoxNoResult : i.strTemplate(u.queryResultInfo, {
                count: e
            });
            this.$el().find(m)[0].innerHTML = t
        }
    });
    return L
});
