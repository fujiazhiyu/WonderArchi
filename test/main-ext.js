/****** FILE: mir/javascript/libs/jquery-1.9.0.min.js *****/

(function(e, t) {
    "use strict";
    function n(e) {
        var t = e.length,
        n = st.type(e);
        return st.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = Tt[e] = {};
        return st.each(e.match(lt) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function i(e, n, r, i) {
        if (st.acceptData(e)) {
            var o, a, s = st.expando,
            u = "string" == typeof n,
            l = e.nodeType,
            c = l ? st.cache: e,
            f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = K.pop() || st.guid++:f = s),
            c[f] || (c[f] = {},
            l || (c[f].toJSON = st.noop)),
            ("object" == typeof n || "function" == typeof n) && (i ? c[f] = st.extend(c[f], n) : c[f].data = st.extend(c[f].data, n)),
            o = c[f],
            i || (o.data || (o.data = {}), o = o.data),
            r !== t && (o[st.camelCase(n)] = r),
            u ? (a = o[n], null == a && (a = o[st.camelCase(n)])) : a = o,
            a
        }
    }
    function o(e, t, n) {
        if (st.acceptData(e)) {
            var r, i, o, a = e.nodeType,
            u = a ? st.cache: e,
            l = a ? e[st.expando] : st.expando;
            if (u[l]) {
                if (t && (r = n ? u[l] : u[l].data)) {
                    st.isArray(t) ? t = t.concat(st.map(t, st.camelCase)) : t in r ? t = [t] : (t = st.camelCase(t), t = t in r ? [t] : t.split(" "));
                    for (i = 0, o = t.length; o > i; i++) delete r[t[i]];
                    if (! (n ? s: st.isEmptyObject)(r)) return
                } (n || (delete u[l].data, s(u[l]))) && (a ? st.cleanData([e], !0) : st.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Nt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: wt.test(r) ? st.parseJSON(r) : r
                } catch(o) {}
                st.data(e, n, r)
            } else r = t
        }
        return r
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !st.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function u() {
        return ! 0
    }
    function l() {
        return ! 1
    }
    function c(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function f(e, t, n) {
        if (t = t || 0, st.isFunction(t)) return st.grep(e,
        function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return st.grep(e,
        function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = st.grep(e,
            function(e) {
                return 1 === e.nodeType
            });
            if (Wt.test(t)) return st.filter(t, r, !n);
            t = st.filter(t, r)
        }
        return st.grep(e,
        function(e) {
            return st.inArray(e, t) >= 0 === n
        })
    }
    function p(e) {
        var t = zt.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type,
        e
    }
    function g(e) {
        var t = nn.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) st._data(n, "globalEval", !t || st._data(t[r], "globalEval"))
    }
    function y(e, t) {
        if (1 === t.nodeType && st.hasData(e)) {
            var n, r, i, o = st._data(e),
            a = st._data(t, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) st.event.add(t, n, s[n][r])
            }
            a.data && (a.data = st.extend({},
            a.data))
        }
    }
    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !st.support.noCloneEvent && t[st.expando]) {
                r = st._data(t);
                for (i in r.events) st.removeEvent(t, i, r.handle);
                t.removeAttribute(st.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), st.support.html5Clone && e.innerHTML && !st.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Zt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function b(e, n) {
        var r, i, o = 0,
        a = e.getElementsByTagName !== t ? e.getElementsByTagName(n || "*") : e.querySelectorAll !== t ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) ! n || st.nodeName(i, n) ? a.push(i) : st.merge(a, b(i, n));
        return n === t || n && st.nodeName(e, n) ? st.merge([e], a) : a
    }
    function x(e) {
        Zt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function T(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nn.length; i--;) if (t = Nn[i] + n, t in e) return t;
        return r
    }
    function w(e, t) {
        return e = t || e,
        "none" === st.css(e, "display") || !st.contains(e.ownerDocument, e)
    }
    function N(e, t) {
        for (var n, r = [], i = 0, o = e.length; o > i; i++) n = e[i],
        n.style && (r[i] = st._data(n, "olddisplay"), t ? (r[i] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && w(n) && (r[i] = st._data(n, "olddisplay", S(n.nodeName)))) : r[i] || w(n) || st._data(n, "olddisplay", st.css(n, "display")));
        for (i = 0; o > i; i++) n = e[i],
        n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[i] || "": "none"));
        return e
    }
    function C(e, t, n) {
        var r = mn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += st.css(e, n + wn[o], !0, i)),
        r ? ("content" === n && (a -= st.css(e, "padding" + wn[o], !0, i)), "margin" !== n && (a -= st.css(e, "border" + wn[o] + "Width", !0, i))) : (a += st.css(e, "padding" + wn[o], !0, i), "padding" !== n && (a += st.css(e, "border" + wn[o] + "Width", !0, i)));
        return a
    }
    function E(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = ln(e),
        a = st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = un(e, t, o), (0 > i || null == i) && (i = e.style[t]), yn.test(i)) return i;
            r = a && (st.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border": "content"), r, o) + "px"
    }
    function S(e) {
        var t = V,
        n = bn[e];
        return n || (n = A(e, t), "none" !== n && n || (cn = (cn || st("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), cn.detach()), bn[e] = n),
        n
    }
    function A(e, t) {
        var n = st(t.createElement(e)).appendTo(t.body),
        r = st.css(n[0], "display");
        return n.remove(),
        r
    }
    function j(e, t, n, r) {
        var i;
        if (st.isArray(t)) st.each(t,
        function(t, i) {
            n || kn.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== st.type(t)) r(e, t);
        else for (i in t) j(e + "[" + i + "]", t[i], n, r)
    }
    function D(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(lt) || [];
            if (st.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function L(e, n, r, i) {
        function o(u) {
            var l;
            return a[u] = !0,
            st.each(e[u] || [],
            function(e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || s || a[c] ? s ? !(l = c) : t: (n.dataTypes.unshift(c), o(c), !1)
            }),
            l
        }
        var a = {},
        s = e === $n;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }
    function H(e, n) {
        var r, i, o = st.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e: i || (i = {}))[r] = n[r]);
        return i && st.extend(!0, e, i),
        e
    }
    function M(e, n, r) {
        var i, o, a, s, u = e.contents,
        l = e.dataTypes,
        c = e.responseFields;
        for (o in c) o in r && (n[c[o]] = r[o]);
        for (;
        "*" === l[0];) l.shift(),
        i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i) for (o in u) if (u[o] && u[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in r) a = l[0];
        else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }
    function q(e, t) {
        var n, r, i, o, a = {},
        s = 0,
        u = e.dataTypes.slice(),
        l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = u[++s];) if ("*" !== i) {
            if ("*" !== l && l !== i) {
                if (n = a[l + " " + i] || a["* " + i], !n) for (r in a) if (o = r.split(" "), o[1] === i && (n = a[l + " " + o[0]] || a["* " + o[0]])) {
                    n === !0 ? n = a[r] : a[r] !== !0 && (i = o[0], u.splice(s--, 0, i));
                    break
                }
                if (n !== !0) if (n && e["throws"]) t = n(t);
                else try {
                    t = n(t)
                } catch(c) {
                    return {
                        state: "parsererror",
                        error: n ? c: "No conversion from " + l + " to " + i
                    }
                }
            }
            l = i
        }
        return {
            state: "success",
            data: t
        }
    }
    function _() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function O() {
        return setTimeout(function() {
            Qn = t
        }),
        Qn = st.now()
    }
    function B(e, t) {
        st.each(t,
        function(t, n) {
            for (var r = (rr[t] || []).concat(rr["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return
        })
    }
    function P(e, t, n) {
        var r, i, o = 0,
        a = nr.length,
        s = st.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) return ! 1;
            for (var t = Qn || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n: (s.resolveWith(e, [l]), !1)
        },
        l = s.promise({
            elem: e,
            props: st.extend({},
            t),
            opts: st.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qn || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = st.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? l.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for (R(c, l.opts.specialEasing); a > o; o++) if (r = nr[o].call(l, e, c, l.opts)) return r;
        return B(l, c),
        st.isFunction(l.opts.start) && l.opts.start.call(e, l),
        st.fx.timer(st.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function R(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = st.camelCase(n), i = t[r], o = e[n], st.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = st.cssHooks[r], a && "expand" in a) {
            o = a.expand(o),
            delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function W(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this,
        d = e.style,
        h = {},
        g = [],
        m = e.nodeType && w(e);
        n.queue || (c = st._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() {
            c.unqueued || f()
        }), c.unqueued++, p.always(function() {
            p.always(function() {
                c.unqueued--,
                st.queue(e, "fx").length || c.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === st.css(e, "display") && "none" === st.css(e, "float") && (st.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden", st.support.shrinkWrapBlocks || p.done(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (r in t) if (o = t[r], Zn.exec(o)) {
            if (delete t[r], u = u || "toggle" === o, o === (m ? "hide": "show")) continue;
            g.push(r)
        }
        if (a = g.length) {
            s = st._data(e, "fxshow") || st._data(e, "fxshow", {}),
            "hidden" in s && (m = s.hidden),
            u && (s.hidden = !m),
            m ? st(e).show() : p.done(function() {
                st(e).hide()
            }),
            p.done(function() {
                var t;
                st._removeData(e, "fxshow");
                for (t in h) st.style(e, t, h[t])
            });
            for (r = 0; a > r; r++) i = g[r],
            l = p.createTween(i, m ? s[i] : 0),
            h[i] = s[i] || st.style(e, i),
            i in s || (s[i] = l.start, m && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i)
    }
    function I(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = wn[i],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function z(e) {
        return st.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var X, U, V = e.document,
    Y = e.location,
    J = e.jQuery,
    G = e.$,
    Q = {},
    K = [],
    Z = "1.9.0",
    et = K.concat,
    tt = K.push,
    nt = K.slice,
    rt = K.indexOf,
    it = Q.toString,
    ot = Q.hasOwnProperty,
    at = Z.trim,
    st = function(e, t) {
        return new st.fn.init(e, t, X)
    },
    ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    lt = /\S+/g,
    ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ft = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    dt = /^[\],:{}\s]*$/,
    ht = /(?:^|:|,)(?:\s*\[)+/g,
    gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    mt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    yt = /^-ms-/,
    vt = /-([\da-z])/gi,
    bt = function(e, t) {
        return t.toUpperCase()
    },
    xt = function() {
        V.addEventListener ? (V.removeEventListener("DOMContentLoaded", xt, !1), st.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", xt), st.ready())
    };
    st.fn = st.prototype = {
        jquery: Z,
        constructor: st,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !i || !i[1] && n) return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof st ? n[0] : n, st.merge(this, st.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: V, !0)), pt.test(i[1]) && st.isPlainObject(n)) for (i in n) st.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = V.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = V,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : st.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), st.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return nt.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = st.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return st.each(this, e, t)
        },
        ready: function(e) {
            return st.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(nt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(st.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: tt,
        sort: [].sort,
        splice: [].splice
    },
    st.fn.init.prototype = st.fn,
    st.extend = st.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
        u = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {},
        u = 2), "object" == typeof s || st.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (e = arguments[u])) for (n in e) r = s[n],
        i = e[n],
        s !== i && (c && i && (st.isPlainObject(i) || (o = st.isArray(i))) ? (o ? (o = !1, a = r && st.isArray(r) ? r: []) : a = r && st.isPlainObject(r) ? r: {},
        s[n] = st.extend(c, a, i)) : i !== t && (s[n] = i));
        return s
    },
    st.extend({
        noConflict: function(t) {
            return e.$ === st && (e.$ = G),
            t && e.jQuery === st && (e.jQuery = J),
            st
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? st.readyWait++:st.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--st.readyWait: !st.isReady) {
                if (!V.body) return setTimeout(st.ready);
                st.isReady = !0,
                e !== !0 && --st.readyWait > 0 || (U.resolveWith(V, [st]), st.fn.trigger && st(V).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === st.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === st.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? Q[it.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== st.type(e) || e.nodeType || st.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !ot.call(e, "constructor") && !ot.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            var r;
            for (r in e);
            return r === t || ot.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || V;
            var r = pt.exec(e),
            i = !n && [];
            return r ? [t.createElement(r[1])] : (r = st.buildFragment([e], t, i), i && st(i).remove(), st.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = st.trim(n), n && dt.test(n.replace(gt, "@").replace(mt, "]").replace(ht, ""))) ? Function("return " + n)() : (st.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && st.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(yt, "ms-").replace(vt, bt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e);
            if (r) {
                if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: at && !at.call("\ufeff\u00a0") ?
        function(e) {
            return null == e ? "": at.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(ct, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? st.merge(r, "string" == typeof e ? [e] : e) : tt.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (rt) return rt.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, n) {
            var r = n.length,
            i = e.length,
            o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
            else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [],
            o = 0,
            a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o),
            n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e),
            u = [];
            if (s) for (; a > o; o++) i = t(e[o], o, r),
            null != i && (u[u.length] = i);
            else for (o in e) i = t(e[o], o, r),
            null != i && (u[u.length] = i);
            return et.apply([], u)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r),
            st.isFunction(e) ? (i = nt.call(arguments, 2), o = function() {
                return e.apply(n || this, i.concat(nt.call(arguments)))
            },
            o.guid = e.guid = e.guid || st.guid++, o) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0,
            l = e.length,
            c = null == r;
            if ("object" === st.type(r)) {
                o = !0;
                for (u in r) st.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, st.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                return c.call(st(e), n)
            })), n)) for (; l > u; u++) n(e[u], r, s ? i: i.call(e[u], u, n(e[u], r)));
            return o ? e: c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    st.ready.promise = function(t) {
        if (!U) if (U = st.Deferred(), "complete" === V.readyState) setTimeout(st.ready);
        else if (V.addEventListener) V.addEventListener("DOMContentLoaded", xt, !1),
        e.addEventListener("load", st.ready, !1);
        else {
            V.attachEvent("onreadystatechange", xt),
            e.attachEvent("onload", st.ready);
            var n = !1;
            try {
                n = null == e.frameElement && V.documentElement
            } catch(r) {}
            n && n.doScroll &&
            function i() {
                if (!st.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(i, 50)
                    }
                    st.ready()
                }
            } ()
        }
        return U.promise(t)
    },
    st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    }),
    X = st(V);
    var Tt = {};
    st.Callbacks = function(e) {
        e = "string" == typeof e ? Tt[e] || r(e) : st.extend({},
        e);
        var n, i, o, a, s, u, l = [],
        c = !e.once && [],
        f = function(t) {
            for (n = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++) if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            o = !1,
            l && (c ? c.length && f(c.shift()) : n ? l = [] : p.disable())
        },
        p = {
            add: function() {
                if (l) {
                    var t = l.length; (function r(t) {
                        st.each(t,
                        function(t, n) {
                            var i = st.type(n);
                            "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    })(arguments),
                    o ? s = l.length: n && (a = t, f(n))
                }
                return this
            },
            remove: function() {
                return l && st.each(arguments,
                function(e, t) {
                    for (var n; (n = st.inArray(t, l, n)) > -1;) l.splice(n, 1),
                    o && (s >= n && s--, u >= n && u--)
                }),
                this
            },
            has: function(e) {
                return st.inArray(e, l) > -1
            },
            empty: function() {
                return l = [],
                this
            },
            disable: function() {
                return l = c = n = t,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return c = t,
                n || p.disable(),
                this
            },
            locked: function() {
                return ! c
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !l || i && !c || (o ? c.push(t) : f(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! i
            }
        };
        return p
    },
    st.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", st.Callbacks("once memory"), "resolved"], ["reject", "fail", st.Callbacks("once memory"), "rejected"], ["notify", "progress", st.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return st.Deferred(function(n) {
                        st.each(t,
                        function(t, o) {
                            var a = o[0],
                            s = st.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && st.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? st.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            st.each(t,
            function(e, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0,
            o = nt.call(arguments),
            a = o.length,
            s = 1 !== a || e && st.isFunction(e.promise) ? a: 0,
            u = 1 === s ? e: st.Deferred(),
            l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? nt.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && st.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o),
            u.promise()
        }
    }),
    st.support = function() {
        var n, r, i, o, a, s, u, l, c, f, p = V.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = p.getElementsByTagName("*"), i = p.getElementsByTagName("a")[0], !r || !i || !r.length) return {};
        o = V.createElement("select"),
        a = o.appendChild(V.createElement("option")),
        s = p.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px;float:left;opacity:.5",
        n = {
            getSetAttribute: "t" !== p.className,
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: !!s.value,
            optSelected: a.selected,
            enctype: !!V.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === V.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        s.checked = !0,
        n.noCloneChecked = s.cloneNode(!0).checked,
        o.disabled = !0,
        n.optDisabled = !a.disabled;
        try {
            delete p.test
        } catch(d) {
            n.deleteExpando = !1
        }
        s = V.createElement("input"),
        s.setAttribute("value", ""),
        n.input = "" === s.getAttribute("value"),
        s.value = "t",
        s.setAttribute("type", "radio"),
        n.radioValue = "t" === s.value,
        s.setAttribute("checked", "t"),
        s.setAttribute("name", "t"),
        u = V.createDocumentFragment(),
        u.appendChild(s),
        n.appendChecked = s.checked,
        n.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked,
        p.attachEvent && (p.attachEvent("onclick",
        function() {
            n.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + f, "t"),
        n[f + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box",
        p.cloneNode(!0).style.backgroundClip = "",
        n.clearCloneStyle = "content-box" === p.style.backgroundClip,
        st(function() {
            var r, i, o, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            s = V.getElementsByTagName("body")[0];
            s && (r = V.createElement("div"), r.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(r).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", n.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", n.boxSizing = 4 === p.offsetWidth, n.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (n.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, n.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width, i = p.appendChild(V.createElement("div")), i.style.cssText = p.style.cssText = a, i.style.marginRight = i.style.width = "0", p.style.width = "1px", n.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), p.style.zoom !== t && (p.innerHTML = "", p.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", n.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", n.shrinkWrapBlocks = 3 !== p.offsetWidth, s.style.zoom = 1), s.removeChild(r), r = p = o = i = null)
        }),
        r = o = u = a = i = s = null,
        n
    } ();
    var wt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Nt = /([A-Z])/g;
    st.extend({
        cache: {},
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? st.cache[e[st.expando]] : e[st.expando],
            !!e && !s(e)
        },
        data: function(e, t, n) {
            return i(e, t, n, !1)
        },
        removeData: function(e, t) {
            return o(e, t, !1)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && st.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    st.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
            s = 0,
            u = null;
            if (e === t) {
                if (this.length && (u = st.data(o), 1 === o.nodeType && !st._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > s; s++) i = r[s].name,
                    i.indexOf("data-") || (i = st.camelCase(i.substring(5)), a(o, i, u[i]));
                    st._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function() {
                st.data(this, e)
            }) : st.access(this,
            function(n) {
                return n === t ? o ? a(o, e, st.data(o, e)) : null: (this.each(function() {
                    st.data(this, e, n)
                }), t)
            },
            null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                st.removeData(this, e)
            })
        }
    }),
    st.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = st._data(e, n), r && (!i || st.isArray(r) ? i = st._data(e, n, st.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = st.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = st._queueHooks(e, t),
            a = function() {
                st.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            o.cur = i,
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return st._data(e, n) || st._data(e, n, {
                empty: st.Callbacks("once memory").add(function() {
                    st._removeData(e, t + "queue"),
                    st._removeData(e, n)
                })
            })
        }
    }),
    st.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--),
            r > arguments.length ? st.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = st.queue(this, e, n);
                st._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && st.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                st.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = st.fx ? st.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
            o = st.Deferred(),
            a = this,
            s = this.length,
            u = function() {--i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = st._data(a[s], e + "queueHooks"),
            r && r.empty && (i++, r.empty.add(u));
            return u(),
            o.promise(n)
        }
    });
    var Ct, kt, Et = /[\t\r\n]/g,
    St = /\r/g,
    At = /^(?:input|select|textarea|button|object)$/i,
    jt = /^(?:a|area)$/i,
    Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    Lt = /^(?:checked|selected)$/i,
    Ht = st.support.getSetAttribute,
    Mt = st.support.input;
    st.fn.extend({
        attr: function(e, t) {
            return st.access(this, st.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                st.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return st.access(this, st.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = st.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = "string" == typeof e && e;
            if (st.isFunction(e)) return this.each(function(t) {
                st(this).addClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(lt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = st.trim(r)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = 0 === arguments.length || "string" == typeof e && e;
            if (st.isFunction(e)) return this.each(function(t) {
                st(this).removeClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(lt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                n.className = e ? st.trim(r) : ""
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
            r = "boolean" == typeof t;
            return st.isFunction(e) ? this.each(function(n) {
                st(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) for (var i, o = 0,
                a = st(this), s = t, u = e.match(lt) || []; i = u[o++];) s = r ? s: !a.hasClass(i),
                a[s ? "addClass": "removeClass"](i);
                else("undefined" === n || "boolean" === n) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": st._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = st.isFunction(e),
                this.each(function(r) {
                    var o, a = st(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "": "number" == typeof o ? o += "": st.isArray(o) && (o = st.map(o,
                    function(e) {
                        return null == e ? "": e + ""
                    })), n = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return n = st.valHooks[o.type] || st.valHooks[o.nodeName.toLowerCase()],
                n && "get" in n && (r = n.get(o, "value")) !== t ? r: (r = o.value, "string" == typeof r ? r.replace(St, "") : null == r ? "": r)
            }
        }
    }),
    st.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return ! t || t.specified ? e.value: e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    a = o ? null: [], s = o ? i + 1 : r.length, u = 0 > i ? s: o ? i: 0; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (st.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && st.nodeName(n.parentNode, "optgroup"))) {
                        if (t = st(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    var n = st.makeArray(t);
                    return st(e).find("option").each(function() {
                        this.selected = st.inArray(st(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return e.getAttribute === t ? st.prop(e, n, r) : (a = 1 !== s || !st.isXMLDoc(e), a && (n = n.toLowerCase(), o = st.attrHooks[n] || (Dt.test(n) ? kt: Ct)), r === t ? o && a && "get" in o && null !== (i = o.get(e, n)) ? i: (e.getAttribute !== t && (i = e.getAttribute(n)), null == i ? t: i) : null !== r ? o && a && "set" in o && (i = o.set(e, r, n)) !== t ? i: (e.setAttribute(n, r + ""), r) : (st.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(lt);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = st.propFix[n] || n,
            Dt.test(n) ? !Ht && Lt.test(n) ? e[st.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : st.attr(e, n, ""),
            e.removeAttribute(Ht ? n: r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!st.support.radioValue && "radio" === t && st.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !st.isXMLDoc(e),
            a && (n = st.propFix[n] || n, o = st.propHooks[n]),
            r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get" in o && null !== (i = o.get(e, n)) ? i: e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : At.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    kt = {
        get: function(e, n) {
            var r = st.prop(e, n),
            i = "boolean" == typeof r && e.getAttribute(n),
            o = "boolean" == typeof r ? Mt && Ht ? null != i: Lt.test(n) ? e[st.camelCase("default-" + n)] : !!i: e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? st.removeAttr(e, n) : Mt && Ht || !Lt.test(n) ? e.setAttribute(!Ht && st.propFix[n] || n, n) : e[st.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    Mt && Ht || (st.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return st.nodeName(e, "input") ? e.defaultValue: r && r.specified ? r.value: t
        },
        set: function(e, n, r) {
            return st.nodeName(e, "input") ? (e.defaultValue = n, t) : Ct && Ct.set(e, n, r)
        }
    }),
    Ht || (Ct = st.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value: r.specified) ? r.value: t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n: t
        }
    },
    st.attrHooks.contenteditable = {
        get: Ct.get,
        set: function(e, t, n) {
            Ct.set(e, "" === t ? !1 : t, n)
        }
    },
    st.each(["width", "height"],
    function(e, n) {
        st.attrHooks[n] = st.extend(st.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })),
    st.support.hrefNormalized || (st.each(["href", "src", "width", "height"],
    function(e, n) {
        st.attrHooks[n] = st.extend(st.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t: r
            }
        })
    }), st.each(["href", "src"],
    function(e, t) {
        st.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })),
    st.support.style || (st.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    st.support.optSelected || (st.propHooks.selected = st.extend(st.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    st.support.enctype || (st.propFix.enctype = "encoding"),
    st.support.checkOn || st.each(["radio", "checkbox"],
    function() {
        st.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            }
        }
    }),
    st.each(["radio", "checkbox"],
    function() {
        st.valHooks[this] = st.extend(st.valHooks[this], {
            set: function(e, n) {
                return st.isArray(n) ? e.checked = st.inArray(st(e).val(), n) >= 0 : t
            }
        })
    });
    var qt = /^(?:input|select|textarea)$/i,
    _t = /^key/,
    Ft = /^(?:mouse|contextmenu)|click/,
    Ot = /^(?:focusinfocus|focusoutblur)$/,
    Bt = /^([^.]*)(?:\.(.+)|)$/;
    st.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = 3 !== e.nodeType && 8 !== e.nodeType && st._data(e);
            if (y) {
                for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = st.guid++), (l = y.events) || (l = y.events = {}), (s = y.handle) || (s = y.handle = function(e) {
                    return st === t || e && st.event.triggered === e.type ? t: st.event.dispatch.apply(s.elem, arguments)
                },
                s.elem = e), n = (n || "").match(lt) || [""], c = n.length; c--;) u = Bt.exec(n[c]) || [],
                h = m = u[1],
                g = (u[2] || "").split(".").sort(),
                p = st.event.special[h] || {},
                h = (o ? p.delegateType: p.bindType) || h,
                p = st.event.special[h] || {},
                f = st.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && st.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                },
                a),
                (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, g, s) !== !1 || (e.addEventListener ? e.addEventListener(h, s, !1) : e.attachEvent && e.attachEvent("on" + h, s))),
                p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)),
                o ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                st.event.global[h] = !0;
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = st.hasData(e) && st._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(lt) || [""], l = t.length; l--;) if (s = Bt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = st.event.special[d] || {},
                    d = (r ? f.delegateType: f.bindType) || d, p = u[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o],
                    !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || st.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u) st.event.remove(e, d + t[l], n, r, !0);
                st.isEmptyObject(u) && (delete m.handle, st._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, u, l, c, f, p, d = [i || V],
            h = n.type || n,
            g = n.namespace ? n.namespace.split(".") : [];
            if (s = u = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !Ot.test(h + st.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = 0 > h.indexOf(":") && "on" + h, n = n[st.expando] ? n: new st.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : st.makeArray(r, [n]), p = st.event.special[h] || {},
            o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !st.isWindow(i)) {
                    for (l = p.delegateType || h, Ot.test(l + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s),
                    u = s;
                    u === (i.ownerDocument || V) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0; (s = d[a++]) && !n.isPropagationStopped();) n.type = a > 1 ? l: p.bindType || h,
                f = (st._data(s, "events") || {})[n.type] && st._data(s, "handle"),
                f && f.apply(s, r),
                f = c && s[c],
                f && st.acceptData(s) && f.apply && f.apply(s, r) === !1 && n.preventDefault();
                if (n.type = h, !(o || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === h && st.nodeName(i, "a") || !st.acceptData(i) || !c || !i[h] || st.isWindow(i))) {
                    u = i[c],
                    u && (i[c] = null),
                    st.event.triggered = h;
                    try {
                        i[h]()
                    } catch(m) {}
                    st.event.triggered = t,
                    u && (i[c] = u)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = st.event.fix(e);
            var n, r, i, o, a, s = [],
            u = nt.call(arguments),
            l = (st._data(this, "events") || {})[e.type] || [],
            c = st.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = st.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, r = 0; (a = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, i = ((st.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
            u = n.delegateCount,
            l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== e.type) {
                for (i = [], r = 0; u > r; r++) a = n[r],
                o = a.selector + " ",
                i[o] === t && (i[o] = a.needsContext ? st(o, this).index(l) >= 0 : st.find(o, this, null, [l]).length),
                i[o] && i.push(a);
                i.length && s.push({
                    elem: l,
                    handlers: i
                })
            }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }),
            s
        },
        fix: function(e) {
            if (e[st.expando]) return e;
            var t, n, r = e,
            i = st.event.fixHooks[e.type] || {},
            o = i.props ? this.props.concat(i.props) : this.props;
            for (e = new st.Event(r), t = o.length; t--;) n = o[t],
            e[n] = r[n];
            return e.target || (e.target = r.srcElement || V),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            i.filter ? i.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button,
                s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || V, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function() {
                    if (this !== V.activeElement && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === V.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = st.extend(new st.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? st.event.trigger(i, null, t) : st.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    st.removeEvent = V.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, n, r) {
        var i = "on" + n;
        e.detachEvent && (e[i] === t && (e[i] = null), e.detachEvent(i, r))
    },
    st.Event = function(e, n) {
        return this instanceof st.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u: l) : this.type = e, n && st.extend(this, n), this.timeStamp = e && e.timeStamp || st.now(), this[st.expando] = !0, t) : new st.Event(e, n)
    },
    st.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = u,
            this.stopPropagation()
        }
    },
    st.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        st.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !st.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    st.support.submitBubbles || (st.event.special.submit = {
        setup: function() {
            return st.nodeName(this, "form") ? !1 : (st.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = st.nodeName(n, "input") || st.nodeName(n, "button") ? n.form: t;
                r && !st._data(r, "submitBubbles") && (st.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), st._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && st.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return st.nodeName(this, "form") ? !1 : (st.event.remove(this, "._submit"), t)
        }
    }),
    st.support.changeBubbles || (st.event.special.change = {
        setup: function() {
            return qt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), st.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                st.event.simulate("change", this, e, !0)
            })), !1) : (st.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                qt.test(t.nodeName) && !st._data(t, "changeBubbles") && (st.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || st.event.simulate("change", this.parentNode, e, !0)
                }), st._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return st.event.remove(this, "._change"),
            !qt.test(this.nodeName)
        }
    }),
    st.support.focusinBubbles || st.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function(e) {
            st.event.simulate(t, e.target, st.event.fix(e), !0)
        };
        st.event.special[t] = {
            setup: function() {
                0 === n++&&V.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && V.removeEventListener(e, r, !0)
            }
        }
    }),
    st.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (s in e) this.on(s, n, r, e[s], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
            else if (!i) return this;
            return 1 === o && (a = i, i = function(e) {
                return st().off(e),
                a.apply(this, arguments)
            },
            i.guid = a.guid || (a.guid = st.guid++)),
            this.each(function() {
                st.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            st(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t),
            r === !1 && (r = l),
            this.each(function() {
                st.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                st.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? st.event.trigger(e, n, r, !0) : t
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        st.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        },
        _t.test(t) && (st.event.fixHooks[t] = st.event.keyHooks),
        Ft.test(t) && (st.event.fixHooks[t] = st.event.mouseHooks)
    }),
    function(e, t) {
        function n(e) {
            return ht.test(e + "")
        }
        function r() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > C.cacheLength && delete e[t.shift()],
                e[n] = r
            }
        }
        function i(e) {
            return e[P] = !0,
            e
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return e(t)
            } catch(n) {
                return ! 1
            } finally {
                t = null
            }
        }
        function a(e, t, n, r) {
            var i, o, a, s, u, l, c, d, h, g;
            if ((t ? t.ownerDocument || t: R) !== L && D(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!M && !r) {
                if (i = gt.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o),
                        n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o),
                    n
                } else {
                    if (i[2]) return Q.apply(n, K.call(t.getElementsByTagName(e), 0)),
                    n;
                    if ((a = i[3]) && W.getByClassName && t.getElementsByClassName) return Q.apply(n, K.call(t.getElementsByClassName(a), 0)),
                    n
                }
                if (W.qsa && !q.test(e)) {
                    if (c = !0, d = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(vt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = dt.test(e) && t.parentNode || t,
                        g = l.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, K.call(h.querySelectorAll(g), 0)),
                        n
                    } catch(m) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(at, "$1"), t, n, r)
        }
        function s(e, t) {
            for (var n = e && t && e.nextSibling; n; n = n.nextSibling) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function f(e, t) {
            var n, r, i, o, s, u, l, c = X[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s;) { (!n || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])),
                n = !1,
                (r = lt.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }), s = s.slice(n.length));
                for (o in C.filter) ! (r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length: s ? a.error(e) : X(e, u).slice(0)
        }
        function p(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === t.dir,
            o = I++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            }: function(t, n, a) {
                var s, u, l, c = $ + " " + o;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
                    if ((s = u[1]) === !0 || s === N) return s === !0
                } else if (u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0) return ! 0
            }
        }
        function h(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }
        function m(e, t, n, r, o, a) {
            return r && !r[P] && (r = m(r)),
            o && !o[P] && (o = m(o, a)),
            i(function(i, a, s, u) {
                var l, c, f, p = [],
                d = [],
                h = a.length,
                m = i || b(t || "*", s.nodeType ? [s] : s, []),
                y = !e || !i && t ? m: g(m, p, e, s, u),
                v = n ? o || (i ? e: h || r) ? [] : a: y;
                if (n && n(y, v, s, u), r) for (l = g(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else v = g(v === a ? v.splice(h, v.length) : v),
                o ? o(null, a, v, u) : Q.apply(a, v)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length,
            o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                return e === t
            },
            a, !0), l = d(function(e) {
                return Z.call(t, e) > -1
            },
            a, !0), c = [function(e, n, r) {
                return ! o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > s; s++) if (n = C.relative[e[s].type]) c = [d(h(c), n)];
            else {
                if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                    return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }
        function v(e, t) {
            var n = 0,
            r = t.length > 0,
            o = e.length > 0,
            s = function(i, s, u, l, c) {
                var f, p, d, h = [],
                m = 0,
                y = "0",
                v = i && [],
                b = null != c,
                x = j,
                T = i || o && C.find.TAG("*", c && s.parentNode || s),
                w = $ += null == x ? 1 : Math.E;
                for (b && (j = s !== L && s, N = n); null != (f = T[y]); y++) {
                    if (o && f) {
                        for (p = 0; d = e[p]; p++) if (d(f, s, u)) {
                            l.push(f);
                            break
                        }
                        b && ($ = w, N = ++n)
                    }
                    r && ((f = !d && f) && m--, i && v.push(f))
                }
                if (m += y, r && y !== m) {
                    for (p = 0; d = t[p]; p++) d(v, h, s, u);
                    if (i) {
                        if (m > 0) for (; y--;) v[y] || h[y] || (h[y] = G.call(l));
                        h = g(h)
                    }
                    Q.apply(l, h),
                    b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                }
                return b && ($ = w, j = x),
                v
            };
            return r ? i(s) : s
        }
        function b(e, t, n) {
            for (var r = 0,
            i = t.length; i > r; r++) a(e, t[r], n);
            return n
        }
        function x(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !M && C.relative[o[1].type]) {
                    if (t = C.find.ID(a.matches[0].replace(xt, Tt), t)[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e) ? -1 : o.length - 1; i >= 0 && (a = o[i], !C.relative[s = a.type]); i--) if ((u = C.find[s]) && (r = u(a.matches[0].replace(xt, Tt), dt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, K.call(r, 0)),
                    n;
                    break
                }
            }
            return S(e, l)(r, t, M, n, dt.test(e)),
            n
        }
        function T() {}
        var w, N, C, k, E, S, A, j, D, L, H, M, q, _, F, O, B, P = "sizzle" + -new Date,
        R = e.document,
        W = {},
        $ = 0,
        I = 0,
        z = r(),
        X = r(),
        U = r(),
        V = typeof t,
        Y = 1 << 31,
        J = [],
        G = J.pop,
        Q = J.push,
        K = J.slice,
        Z = J.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        et = "[\\x20\\t\\r\\n\\f]",
        tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        nt = tt.replace("w", "w#"),
        rt = "([*^$|!~]?=)",
        it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
        ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)",
        at = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
        ut = RegExp("^" + et + "*," + et + "*"),
        lt = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
        ct = RegExp(ot),
        ft = RegExp("^" + nt + "$"),
        pt = {
            ID: RegExp("^#(" + tt + ")"),
            CLASS: RegExp("^\\.(" + tt + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
            TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + it),
            PSEUDO: RegExp("^" + ot),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        },
        dt = /[\x20\t\r\n\f]*[+~]/,
        ht = /\{\s*\[native code\]\s*\}/,
        gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        mt = /^(?:input|select|textarea|button)$/i,
        yt = /^h\d$/i,
        vt = /'|\\/g,
        bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        Tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
        };
        try {
            K.call(H.childNodes, 0)[0].nodeType
        } catch(wt) {
            K = function(e) {
                for (var t, n = []; t = this[e]; e++) n.push(t);
                return n
            }
        }
        E = a.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        D = a.setDocument = function(e) {
            var r = e ? e.ownerDocument || e: R;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, M = E(r), W.tagNameNoComments = o(function(e) {
                return e.appendChild(r.createComment("")),
                !e.getElementsByTagName("*").length
            }), W.attributes = o(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), W.getByClassName = o(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), W.getByName = o(function(e) {
                e.id = P + 0,
                e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>",
                H.insertBefore(e, H.firstChild);
                var t = r.getElementsByName && r.getElementsByName(P).length === 2 + r.getElementsByName(P + 0).length;
                return W.getIdNotName = !r.getElementById(P),
                H.removeChild(e),
                t
            }), C.attrHandle = o(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
            }) ? {}: {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            W.getIdNotName ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && !M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (C.find.ID = function(e, n) {
                if (typeof n.getElementById !== V && !M) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t: []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = W.tagNameNoComments ?
            function(e, n) {
                return typeof n.getElementsByTagName !== V ? n.getElementsByTagName(e) : t
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i]; i++) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            C.find.NAME = W.getByName &&
            function(e, n) {
                return typeof n.getElementsByName !== V ? n.getElementsByName(name) : t
            },
            C.find.CLASS = W.getByClassName &&
            function(e, n) {
                return typeof n.getElementsByClassName === V || M ? t: n.getElementsByClassName(e)
            },
            _ = [], q = [":focus"], (W.qsa = n(r.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || q.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || q.push(":checked")
            }), o(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>",
                e.querySelectorAll("[i^='']").length && q.push("[*^$]=" + et + "*(?:\"\"|'')"),
                e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                q.push(",.*:")
            })), (W.matchesSelector = n(F = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                W.disconnectedMatch = F.call(e, "div"),
                F.call(e, "[s!='']:x"),
                _.push("!=", ot)
            }), q = RegExp(q.join("|")), _ = RegExp(_.join("|")), O = n(H.contains) || H.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            B = H.compareDocumentPosition ?
            function(e, t) {
                var n;
                return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || O(R, e) ? -1 : t === r || O(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, t) {
                var n, i = 0,
                o = e.parentNode,
                a = t.parentNode,
                u = [e],
                l = [t];
                if (e === t) return A = !0,
                0;
                if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || Y) - (O(R, e) && ~e.sourceIndex || Y);
                if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return s(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            },
            A = !1, [0, 0].sort(B), W.detectDuplicates = A, L) : L
        },
        a.matches = function(e, t) {
            return a(e, null, null, t)
        },
        a.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== L && D(e), t = t.replace(bt, "='$1']"), !(!W.matchesSelector || M || _ && _.test(t) || q.test(t))) try {
                var n = F.call(e, t);
                if (n || W.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch(r) {}
            return a(t, L, null, [e]).length > 0
        },
        a.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && D(e),
            O(e, t)
        },
        a.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== L && D(e),
            M || (t = t.toLowerCase()),
            (n = C.attrHandle[t]) ? n(e) : M || W.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
        },
        a.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        },
        a.uniqueSort = function(e) {
            var t, n = [],
            r = 1,
            i = 0;
            if (A = !W.detectDuplicates, e.sort(B), A) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return e
        },
        k = a.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += k(t);
            return n
        },
        C = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
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
                    return e[1] = e[1].replace(xt, Tt),
                    e[3] = (e[4] || e[5] || "").replace(xt, Tt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: (e = e.replace(xt, Tt).toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e,
                    function(e) {
                        return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t: t ? (i += "", "=" === t ? i === n: "!=" === t ? i !== n: "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.substr(i.length - n.length) === n: "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.substr(0, n.length + 1) === n + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        v = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === y: 1 === f.nodeType) return ! 1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? m.firstChild: m.lastChild], a && v) {
                                for (c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === $ && l[1], p = l[0] === $ && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [$, d, p];
                                    break
                                }
                            } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === $) p = l[1];
                            else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y: 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [$, p]), f !== t)););
                            return p -= i,
                            p === r || 0 === p % r && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[P] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]),
                        e[i] = !(n[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                    n = [],
                    r = S(e.replace(at, "$1"));
                    return r[P] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(t) {
                        return a(e, t).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return ft.test(e || "") || a.error("unsupported lang: " + e),
                    e = e.replace(xt, Tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = M ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! C.pseudos.empty(e)
                },
                header: function(e) {
                    return yt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[w] = u(w);
        for (w in {
            submit: !0,
            reset: !0
        }) C.pseudos[w] = l(w);
        S = a.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = U[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;) o = y(t[n]),
                o[P] ? r.push(o) : i.push(o);
                o = U(e, v(i, r))
            }
            return o
        },
        C.pseudos.nth = C.pseudos.eq,
        C.filters = T.prototype = C.pseudos,
        C.setFilters = new T,
        D(),
        a.attr = st.attr,
        st.find = a,
        st.expr = a.selectors,
        st.expr[":"] = st.expr.pseudos,
        st.unique = a.uniqueSort,
        st.text = a.getText,
        st.isXMLDoc = a.isXML,
        st.contains = a.contains
    } (e);
    var Pt = /Until$/,
    Rt = /^(?:parents|prev(?:Until|All))/,
    Wt = /^.[^:#\[\.,]*$/,
    $t = st.expr.match.needsContext,
    It = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    st.fn.extend({
        find: function(e) {
            var t, n, r;
            if ("string" != typeof e) return r = this,
            this.pushStack(st(e).filter(function() {
                for (t = 0; r.length > t; t++) if (st.contains(r[t], this)) return ! 0
            }));
            for (n = [], t = 0; this.length > t; t++) st.find(e, this[t], n);
            return n = this.pushStack(st.unique(n)),
            n.selector = (this.selector ? this.selector + " ": "") + e,
            n
        },
        has: function(e) {
            var t, n = st(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (st.contains(this, n[t])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(f(this, e, !0))
        },
        is: function(e) {
            return !! e && ("string" == typeof e ? $t.test(e) ? st(e, this.context).index(this[0]) >= 0 : st.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = $t.test(e) || "string" != typeof e ? st(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? a.index(n) > -1 : st.find.matchesSelector(n, e)) {
                    o.push(n);
                    break
                }
                n = n.parentNode
            }
            return this.pushStack(o.length > 1 ? st.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? st.inArray(this[0], st(e)) : st.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? st(e, t) : st.makeArray(e && e.nodeType ? [e] : e),
            r = st.merge(this.get(), n);
            return this.pushStack(st.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    st.fn.andSelf = st.fn.addBack,
    st.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return st.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return st.dir(e, "parentNode", n)
        },
        next: function(e) {
            return c(e, "nextSibling")
        },
        prev: function(e) {
            return c(e, "previousSibling")
        },
        nextAll: function(e) {
            return st.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return st.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return st.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return st.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return st.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return st.sibling(e.firstChild)
        },
        contents: function(e) {
            return st.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: st.merge([], e.childNodes)
        }
    },
    function(e, t) {
        st.fn[e] = function(n, r) {
            var i = st.map(this, t, n);
            return Pt.test(e) || (r = n),
            r && "string" == typeof r && (i = st.filter(r, i)),
            i = this.length > 1 && !It[e] ? st.unique(i) : i,
            this.length > 1 && Rt.test(e) && (i = i.reverse()),
            this.pushStack(i)
        }
    }),
    st.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? st.find.matchesSelector(t[0], e) ? [t[0]] : [] : st.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !st(o).is(r));) 1 === o.nodeType && i.push(o),
            o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Xt = / jQuery\d+="(?:null|\d+)"/g,
    Ut = RegExp("<(?:" + zt + ")[\\s/>]", "i"),
    Vt = /^\s+/,
    Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Jt = /<([\w:]+)/,
    Gt = /<tbody/i,
    Qt = /<|&#?\w+;/,
    Kt = /<(?:script|style|link)/i,
    Zt = /^(?:checkbox|radio)$/i,
    en = /checked\s*(?:[^=]|=\s*.checked.)/i,
    tn = /^$|\/(?:java|ecma)script/i,
    nn = /^true\/(.*)/,
    rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    on = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: st.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    an = p(V),
    sn = an.appendChild(V.createElement("div"));
    on.optgroup = on.option,
    on.tbody = on.tfoot = on.colgroup = on.caption = on.thead,
    on.th = on.td,
    st.fn.extend({
        text: function(e) {
            return st.access(this,
            function(e) {
                return e === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
            },
            null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (st.isFunction(e)) return this.each(function(t) {
                st(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = st(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return st.isFunction(e) ? this.each(function(t) {
                st(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = st(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = st.isFunction(e);
            return this.each(function(n) {
                st(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || st.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || st.cleanData(b(n)), n.parentNode && (t && st.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && st.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && st.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return st.clone(this, e, t)
            })
        },
        html: function(e) {
            return st.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : t;
                if (! ("string" != typeof e || Kt.test(e) || !st.support.htmlSerialize && Ut.test(e) || !st.support.leadingWhitespace && Vt.test(e) || on[(Jt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Yt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {},
                        1 === n.nodeType && (st.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(o) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = st.isFunction(e);
            return t || "string" == typeof e || (e = st(e).not(this).detach()),
            this.domManip([e], !0,
            function(e) {
                var t = this.nextSibling,
                n = this.parentNode; (n && 1 === this.nodeType || 11 === this.nodeType) && (st(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = et.apply([], e);
            var i, o, a, s, u, l, c = 0,
            f = this.length,
            p = this,
            m = f - 1,
            y = e[0],
            v = st.isFunction(y);
            if (v || !(1 >= f || "string" != typeof y || st.support.checkClone) && en.test(y)) return this.each(function(i) {
                var o = p.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)),
                o.domManip(e, n, r)
            });
            if (f && (i = st.buildFragment(e, this[0].ownerDocument, !1, this), o = i.firstChild, 1 === i.childNodes.length && (i = o), o)) {
                for (n = n && st.nodeName(o, "tr"), a = st.map(b(i, "script"), h), s = a.length; f > c; c++) u = i,
                c !== m && (u = st.clone(u, !0, !0), s && st.merge(a, b(u, "script"))),
                r.call(n && st.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], u, c);
                if (s) for (l = a[a.length - 1].ownerDocument, st.map(a, g), c = 0; s > c; c++) u = a[c],
                tn.test(u.type || "") && !st._data(u, "globalEval") && st.contains(l, u) && (u.src ? st.ajax({
                    url: u.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : st.globalEval((u.text || u.textContent || u.innerHTML || "").replace(rn, "")));
                i = o = null
            }
            return this
        }
    }),
    st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        st.fn[e] = function(e) {
            for (var n, r = 0,
            i = [], o = st(e), a = o.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
            st(o[r])[t](n),
            tt.apply(i, n.get());
            return this.pushStack(i)
        }
    }),
    st.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = st.contains(e.ownerDocument, e);
            if (st.support.html5Clone || st.isXMLDoc(e) || !Ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (sn.innerHTML = e.outerHTML, sn.removeChild(s = sn.firstChild)), !(st.support.noCloneEvent && st.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || st.isXMLDoc(e))) for (r = b(s), i = b(e), a = 0; null != (o = i[a]); ++a) r[a] && v(o, r[a]);
            if (t) if (n) for (i = i || b(e), r = r || b(s), a = 0; null != (o = i[a]); a++) y(o, r[a]);
            else y(e, s);
            return r = b(s, "script"),
            r.length > 0 && m(r, !u && b(e, "script")),
            r = i = o = null,
            s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length,
            d = p(t), h = [], g = 0; f > g; g++) if (o = e[g], o || 0 === o) if ("object" === st.type(o)) st.merge(h, o.nodeType ? [o] : o);
            else if (Qt.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (Jt.exec(o) || ["", ""])[1].toLowerCase(), u = on[a] || on._default, s.innerHTML = u[1] + o.replace(Yt, "<$1></$2>") + u[2], c = u[0]; c--;) s = s.lastChild;
                if (!st.support.leadingWhitespace && Vt.test(o) && h.push(t.createTextNode(Vt.exec(o)[0])), !st.support.tbody) for (o = "table" !== a || Gt.test(o) ? "<table>" !== u[1] || Gt.test(o) ? 0 : s: s.firstChild, c = o && o.childNodes.length; c--;) st.nodeName(l = o.childNodes[c], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (st.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), st.support.appendChecked || st.grep(b(h, "input"), x), g = 0; o = h[g++];) if ((!r || -1 === st.inArray(o, r)) && (i = st.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), i && m(s), n)) for (c = 0; o = s[c++];) tn.test(o.type || "") && n.push(o);
            return s = null,
            d
        },
        cleanData: function(e, n) {
            for (var r, i, o, a, s = 0,
            u = st.expando,
            l = st.cache,
            c = st.support.deleteExpando,
            f = st.event.special; null != (o = e[s]); s++) if ((n || st.acceptData(o)) && (i = o[u], r = i && l[i])) {
                if (r.events) for (a in r.events) f[a] ? st.event.remove(o, a) : st.removeEvent(o, a, r.handle);
                l[i] && (delete l[i], c ? delete o[u] : o.removeAttribute !== t ? o.removeAttribute(u) : o[u] = null, K.push(i))
            }
        }
    });
    var un, ln, cn, fn = /alpha\([^)]*\)/i,
    pn = /opacity\s*=\s*([^)]*)/,
    dn = /^(top|right|bottom|left)$/,
    hn = /^(none|table(?!-c[ea]).+)/,
    gn = /^margin/,
    mn = RegExp("^(" + ut + ")(.*)$", "i"),
    yn = RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"),
    vn = RegExp("^([+-])=(" + ut + ")", "i"),
    bn = {
        BODY: "block"
    },
    xn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Tn = {
        letterSpacing: 0,
        fontWeight: 400
    },
    wn = ["Top", "Right", "Bottom", "Left"],
    Nn = ["Webkit", "O", "Moz", "ms"];
    st.fn.extend({
        css: function(e, n) {
            return st.access(this,
            function(e, n, r) {
                var i, o, a = {},
                s = 0;
                if (st.isArray(n)) {
                    for (i = ln(e), o = n.length; o > s; s++) a[n[s]] = st.css(e, n[s], !1, i);
                    return a
                }
                return r !== t ? st.style(e, n, r) : st.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() { (t ? e: w(this)) ? st(this).show() : st(this).hide()
            })
        }
    }),
    st.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = un(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": st.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = st.camelCase(n),
                l = e.style;
                if (n = st.cssProps[u] || (st.cssProps[u] = T(l, u)), s = st.cssHooks[n] || st.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o: l[n];
                if (a = typeof r, "string" === a && (o = vn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(st.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || st.cssNumber[u] || (r += "px"), st.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch(c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = st.camelCase(n);
            return n = st.cssProps[u] || (st.cssProps[u] = T(e.style, u)),
            s = st.cssHooks[n] || st.cssHooks[u],
            s && "get" in s && (o = s.get(e, !0, r)),
            o === t && (o = un(e, n, i)),
            "normal" === o && n in Tn && (o = Tn[n]),
            r ? (a = parseFloat(o), r === !0 || st.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o],
            e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }),
    e.getComputedStyle ? (ln = function(t) {
        return e.getComputedStyle(t, null)
    },
    un = function(e, n, r) {
        var i, o, a, s = r || ln(e),
        u = s ? s.getPropertyValue(n) || s[n] : t,
        l = e.style;
        return s && ("" !== u || st.contains(e.ownerDocument, e) || (u = st.style(e, n)), yn.test(u) && gn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)),
        u
    }) : V.documentElement.currentStyle && (ln = function(e) {
        return e.currentStyle
    },
    un = function(e, n, r) {
        var i, o, a, s = r || ln(e),
        u = s ? s[n] : t,
        l = e.style;
        return null == u && l && l[n] && (u = l[n]),
        yn.test(u) && !dn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em": u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)),
        "" === u ? "auto": u
    }),
    st.each(["height", "width"],
    function(e, n) {
        st.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && hn.test(st.css(e, "display")) ? st.swap(e, xn,
                function() {
                    return E(e, n, i)
                }) : E(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && ln(e);
                return C(e, t, r ? k(e, n, r, st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    st.support.opacity || (st.cssHooks.opacity = {
        get: function(e, t) {
            return pn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = st.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === st.trim(o.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = fn.test(o) ? o.replace(fn, i) : o + " " + i)
        }
    }),
    st(function() {
        st.support.reliableMarginRight || (st.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? st.swap(e, {
                    display: "inline-block"
                },
                un, [e, "marginRight"]) : t
            }
        }),
        !st.support.pixelPosition && st.fn.position && st.each(["top", "left"],
        function(e, n) {
            st.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = un(e, n), yn.test(r) ? st(e).position()[n] + "px": r) : t
                }
            }
        })
    }),
    st.expr && st.expr.filters && (st.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !st.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || st.css(e, "display"))
    },
    st.expr.filters.visible = function(e) {
        return ! st.expr.filters.hidden(e)
    }),
    st.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        st.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + wn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        gn.test(e) || (st.cssHooks[e + t].set = C)
    });
    var Cn = /%20/g,
    kn = /\[\]$/,
    En = /\r?\n/g,
    Sn = /^(?:submit|button|image|reset)$/i,
    An = /^(?:input|select|textarea|keygen)/i;
    st.fn.extend({
        serialize: function() {
            return st.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = st.prop(this, "elements");
                return e ? st.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !st(this).is(":disabled") && An.test(this.nodeName) && !Sn.test(e) && (this.checked || !Zt.test(e))
            }).map(function(e, t) {
                var n = st(this).val();
                return null == n ? null: st.isArray(n) ? st.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(En, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(En, "\r\n")
                }
            }).get()
        }
    }),
    st.param = function(e, n) {
        var r, i = [],
        o = function(e, t) {
            t = st.isFunction(t) ? t() : null == t ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(e) || e.jquery && !st.isPlainObject(e)) st.each(e,
        function() {
            o(this.name, this.value)
        });
        else for (r in e) j(r, e[r], n, o);
        return i.join("&").replace(Cn, "+")
    };
    var jn, Dn, Ln = st.now(),
    Hn = /\?/,
    Mn = /#.*$/,
    qn = /([?&])_=[^&]*/,
    _n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    On = /^(?:GET|HEAD)$/,
    Bn = /^\/\//,
    Pn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Rn = st.fn.load,
    Wn = {},
    $n = {},
    In = "*/".concat("*");
    try {
        Dn = Y.href
    } catch(zn) {
        Dn = V.createElement("a"),
        Dn.href = "",
        Dn = Dn.href
    }
    jn = Pn.exec(Dn.toLowerCase()) || [],
    st.fn.load = function(e, n, r) {
        if ("string" != typeof e && Rn) return Rn.apply(this, arguments);
        var i, o, a, s = this,
        u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)),
        st.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"),
        s.length > 0 && st.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            a = arguments,
            s.html(i ? st("<div>").append(st.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function(e, t) {
            s.each(r, a || [e.responseText, t, e])
        }),
        this
    },
    st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        st.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    st.each(["get", "post"],
    function(e, n) {
        st[n] = function(e, r, i, o) {
            return st.isFunction(r) && (o = o || i, i = r, r = t),
            st.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }),
    st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dn,
            type: "GET",
            isLocal: Fn.test(jn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": In,
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
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": st.parseJSON,
                "text xml": st.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, st.ajaxSettings), t) : H(st.ajaxSettings, e)
        },
        ajaxPrefilter: D(Wn),
        ajaxTransport: D($n),
        ajax: function(e, n) {
            function r(e, n, r, s) {
                var l, f, v, b, T, N = n;
                2 !== x && (x = 2, u && clearTimeout(u), i = t, a = s || "", w.readyState = e > 0 ? 4 : 0, r && (b = M(p, w, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (st.lastModified[o] = T), T = w.getResponseHeader("etag"), T && (st.etag[o] = T)), 304 === e ? (l = !0, N = "notmodified") : (l = q(p, b), N = l.state, f = l.data, v = l.error, l = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || N) + "", l ? g.resolveWith(d, [f, N, w]) : g.rejectWith(d, [w, N, v]), w.statusCode(y), y = t, c && h.trigger(l ? "ajaxSuccess": "ajaxError", [w, p, l ? f: v]), m.fireWith(d, [w, N]), c && (h.trigger("ajaxComplete", [w, p]), --st.active || st.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var i, o, a, s, u, l, c, f, p = st.ajaxSetup({},
            n),
            d = p.context || p,
            h = p.context && (d.nodeType || d.jquery) ? st(d) : st.event,
            g = st.Deferred(),
            m = st.Callbacks("once memory"),
            y = p.statusCode || {},
            v = {},
            b = {},
            x = 0,
            T = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s) for (s = {}; t = _n.exec(a);) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) y[t] = [y[t], e[t]];
                    else w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return i && i.abort(t),
                    r(0, t),
                    this
                }
            };
            if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Dn) + "").replace(Mn, "").replace(Bn, jn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = st.trim(p.dataType || "*").toLowerCase().match(lt) || [""], null == p.crossDomain && (l = Pn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === jn[1] && l[2] === jn[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (jn[3] || ("http:" === jn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = st.param(p.data, p.traditional)), L(Wn, p, n, w), 2 === x) return w;
            c = p.global,
            c && 0 === st.active++&&st.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !On.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (Hn.test(o) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = qn.test(o) ? o.replace(qn, "$1_=" + Ln++) : o + (Hn.test(o) ? "&": "?") + "_=" + Ln++)),
            p.ifModified && (st.lastModified[o] && w.setRequestHeader("If-Modified-Since", st.lastModified[o]), st.etag[o] && w.setRequestHeader("If-None-Match", st.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType),
            w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + In + "; q=0.01": "") : p.accepts["*"]);
            for (f in p.headers) w.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x)) return w.abort();
            T = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](p[f]);
            if (i = L($n, p, n, w)) {
                w.readyState = 1,
                c && h.trigger("ajaxSend", [w, p]),
                p.async && p.timeout > 0 && (u = setTimeout(function() {
                    w.abort("timeout")
                },
                p.timeout));
                try {
                    x = 1,
                    i.send(v, r)
                } catch(N) {
                    if (! (2 > x)) throw N;
                    r( - 1, N)
                }
            } else r( - 1, "No Transport");
            return w
        },
        getScript: function(e, n) {
            return st.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return st.get(e, t, n, "json")
        }
    }),
    st.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return st.globalEval(e),
                e
            }
        }
    }),
    st.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    st.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, r = V.head || st("head")[0] || V.documentElement;
            return {
                send: function(t, i) {
                    n = V.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    },
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Xn = [],
    Un = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xn.pop() || st.expando + "_" + Ln++;
            return this[e] = !0,
            e
        }
    }),
    st.ajaxPrefilter("json jsonp",
    function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Un.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Un.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = st.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Un, "$1" + o) : n.jsonp !== !1 && (n.url += (Hn.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || st.error(o + " was not called"),
            s[0]
        },
        n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        },
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback, Xn.push(o)),
            s && st.isFunction(a) && a(s[0]),
            s = a = t
        }), "script") : t
    });
    var Vn, Yn, Jn = 0,
    Gn = e.ActiveXObject &&
    function() {
        var e;
        for (e in Vn) Vn[e](t, !0)
    };
    st.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && _() || F()
    }: _,
    Yn = st.ajaxSettings.xhr(),
    st.support.cors = !!Yn && "withCredentials" in Yn,
    Yn = st.support.ajax = !!Yn,
    Yn && st.ajaxTransport(function(n) {
        if (!n.crossDomain || st.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch(l) {}
                    u.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, l, c, f, p;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = st.noop, Gn && delete Vn[a]), i) 4 !== u.readyState && u.abort();
                            else {
                                f = {},
                                s = u.status,
                                p = u.responseXML,
                                c = u.getAllResponseHeaders(),
                                p && p.documentElement && (f.xml = p),
                                "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    l = u.statusText
                                } catch(d) {
                                    l = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch(h) {
                            i || o( - 1, h)
                        }
                        f && o(s, l, f, c)
                    },
                    n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Jn, Gn && (Vn || (Vn = {},
                    st(e).unload(Gn)), Vn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Qn, Kn, Zn = /^(?:toggle|show|hide)$/,
    er = RegExp("^(?:([+-])=|)(" + ut + ")([a-z%]*)$", "i"),
    tr = /queueHooks$/,
    nr = [W],
    rr = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t),
            o = er.exec(t),
            a = i.cur(),
            s = +a || 0,
            u = 1,
            l = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (st.cssNumber[e] ? "": "px"), "px" !== r && s) {
                    s = st.css(i.elem, e, !0) || n || 1;
                    do u = u || ".5",
                    s /= u,
                    st.style(i.elem, e, s + r);
                    while (u !== (u = i.cur() / a) && 1 !== u && --l)
                }
                i.unit = r,
                i.start = s,
                i.end = o[1] ? s + (o[1] + 1) * n: n
            }
            return i
        }]
    };
    st.Animation = st.extend(P, {
        tweener: function(e, t) {
            st.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            rr[n] = rr[n] || [],
            rr[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? nr.unshift(e) : nr.push(e)
        }
    }),
    st.Tween = $,
    $.prototype = {
        constructor: $,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (st.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? st.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : $.propHooks._default.set(this),
            this
        }
    },
    $.prototype.init.prototype = $.prototype,
    $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = st.css(e.elem, e.prop, "auto"), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                st.fx.step[e.prop] ? st.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[st.cssProps[e.prop]] || st.cssHooks[e.prop]) ? st.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    st.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = st.fn[t];
        st.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }),
    st.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(w).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = st.isEmptyObject(e),
            o = st.speed(t, n, r),
            a = function() {
                var t = P(this, st.extend({},
                e), o);
                a.finish = function() {
                    t.stop(!0)
                },
                (i || st._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                o = st.timers,
                a = st._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else for (n in a) a[n] && a[n].stop && tr.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && st.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = st._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = st.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, st.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    st.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        st.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    st.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? st.extend({},
        e) : {
            complete: n || !n && t || st.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !st.isFunction(t) && t
        };
        return r.duration = st.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in st.fx.speeds ? st.fx.speeds[r.duration] : st.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            st.isFunction(r.old) && r.old.call(this),
            r.queue && st.dequeue(this, r.queue)
        },
        r
    },
    st.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    st.timers = [],
    st.fx = $.prototype.init,
    st.fx.tick = function() {
        var e, n = st.timers,
        r = 0;
        for (Qn = st.now(); n.length > r; r++) e = n[r],
        e() || n[r] !== e || n.splice(r--, 1);
        n.length || st.fx.stop(),
        Qn = t
    },
    st.fx.timer = function(e) {
        e() && st.timers.push(e) && st.fx.start()
    },
    st.fx.interval = 13,
    st.fx.start = function() {
        Kn || (Kn = setInterval(st.fx.tick, st.fx.interval))
    },
    st.fx.stop = function() {
        clearInterval(Kn),
        Kn = null
    },
    st.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    st.fx.step = {},
    st.expr && st.expr.filters && (st.expr.filters.animated = function(e) {
        return st.grep(st.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    st.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            st.offset.setOffset(this, e, t)
        });
        var n, r, i = {
            top: 0,
            left: 0
        },
        o = this[0],
        a = o && o.ownerDocument;
        if (a) return n = a.documentElement,
        st.contains(n, o) ? (o.getBoundingClientRect !== t && (i = o.getBoundingClientRect()), r = z(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    },
    st.offset = {
        setOffset: function(e, t, n) {
            var r = st.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = st(e),
            s = a.offset(),
            u = st.css(e, "top"),
            l = st.css(e, "left"),
            c = ("absolute" === r || "fixed" === r) && st.inArray("auto", [u, l]) > -1,
            f = {},
            p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0),
            st.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + i),
            null != t.left && (f.left = t.left - s.left + o),
            "using" in t ? t.using.call(e, f) : a.css(f)
        }
    },
    st.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === st.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), st.nodeName(e[0], "html") || (n = e.offset()), n.top += st.css(e[0], "borderTopWidth", !0), n.left += st.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - st.css(r, "marginTop", !0),
                    left: t.left - n.left - st.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || V.documentElement; e && !st.nodeName(e, "html") && "static" === st.css(e, "position");) e = e.offsetParent;
                return e || V.documentElement
            })
        }
    }),
    st.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        st.fn[e] = function(i) {
            return st.access(this,
            function(e, i, o) {
                var a = z(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? st(a).scrollLeft() : o, r ? o: st(a).scrollTop()) : e[i] = o, t)
            },
            e, i, arguments.length, null)
        }
    }),
    st.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        st.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(r, i) {
            st.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                s = r || (i === !0 || o === !0 ? "margin": "border");
                return st.access(this,
                function(n, r, i) {
                    var o;
                    return st.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? st.css(n, r, s) : st.style(n, r, i, s)
                },
                n, a ? i: t, a, null)
            }
        })
    }),
    e.jQuery = e.$ = st,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return st
    })
})(window);;

/****** FILE: mir/javascript/libs/handlebars-v1.3.0.js *****/

var Handlebars = (function() {
    var __module4__ = (function() {
        "use strict";
        var __exports__;
        function SafeString(string) {
            this.string = string;
        }
        SafeString.prototype.toString = function() {
            return "" + this.string;
        };
        __exports__ = SafeString;
        return __exports__;
    })();
    var __module3__ = (function(__dependency1__) {
        "use strict";
        var __exports__ = {};
        var SafeString = __dependency1__;
        var escape = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        };
        var badChars = /[&<>"'`]/g;
        var possible = /[&<>"'`]/;
        function escapeChar(chr) {
            return escape[chr] || "&amp;";
        }
        function extend(obj, value) {
            for (var key in value) {
                if (Object.prototype.hasOwnProperty.call(value, key)) {
                    obj[key] = value[key];
                }
            }
        }
        __exports__.extend = extend;
        var toString = Object.prototype.toString;
        __exports__.toString = toString;
        var isFunction = function(value) {
            return typeof value === 'function';
        };
        if (isFunction(/x/)) {
            isFunction = function(value) {
                return typeof value === 'function' && toString.call(value) === '[object Function]';
            };
        }
        var isFunction;
        __exports__.isFunction = isFunction;
        var isArray = Array.isArray ||
        function(value) {
            return (value && typeof value === 'object') ? toString.call(value) === '[object Array]': false;
        };
        __exports__.isArray = isArray;
        function escapeExpression(string) {
            if (string instanceof SafeString) {
                return string.toString();
            } else if (!string && string !== 0) {
                return "";
            }
            string = "" + string;
            if (!possible.test(string)) {
                return string;
            }
            return string.replace(badChars, escapeChar);
        }
        __exports__.escapeExpression = escapeExpression;
        function isEmpty(value) {
            if (!value && value !== 0) {
                return true;
            } else if (isArray(value) && value.length === 0) {
                return true;
            } else {
                return false;
            }
        }
        __exports__.isEmpty = isEmpty;
        return __exports__;
    })(__module4__);
    var __module5__ = (function() {
        "use strict";
        var __exports__;
        var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
        function Exception(message, node) {
            var line;
            if (node && node.firstLine) {
                line = node.firstLine;
                message += ' - ' + line + ':' + node.firstColumn;
            }
            var tmp = Error.prototype.constructor.call(this, message);
            for (var idx = 0; idx < errorProps.length; idx++) {
                this[errorProps[idx]] = tmp[errorProps[idx]];
            }
            if (line) {
                this.lineNumber = line;
                this.column = node.firstColumn;
            }
        }
        Exception.prototype = new Error();
        __exports__ = Exception;
        return __exports__;
    })();
    var __module2__ = (function(__dependency1__, __dependency2__) {
        "use strict";
        var __exports__ = {};
        var Utils = __dependency1__;
        var Exception = __dependency2__;
        var VERSION = "1.3.0";
        __exports__.VERSION = VERSION;
        var COMPILER_REVISION = 4;
        __exports__.COMPILER_REVISION = COMPILER_REVISION;
        var REVISION_CHANGES = {
            1 : '<= 1.0.rc.2',
            2 : '== 1.0.0-rc.3',
            3 : '== 1.0.0-rc.4',
            4 : '>= 1.0.0'
        };
        __exports__.REVISION_CHANGES = REVISION_CHANGES;
        var isArray = Utils.isArray,
        isFunction = Utils.isFunction,
        toString = Utils.toString,
        objectType = '[object Object]';
        function HandlebarsEnvironment(helpers, partials) {
            this.helpers = helpers || {};
            this.partials = partials || {};
            registerDefaultHelpers(this);
        }
        __exports__.HandlebarsEnvironment = HandlebarsEnvironment;
        HandlebarsEnvironment.prototype = {
            constructor: HandlebarsEnvironment,
            logger: logger,
            log: log,
            registerHelper: function(name, fn, inverse) {
                if (toString.call(name) === objectType) {
                    if (inverse || fn) {
                        throw new Exception('Arg not supported with multiple helpers');
                    }
                    Utils.extend(this.helpers, name);
                } else {
                    if (inverse) {
                        fn.not = inverse;
                    }
                    this.helpers[name] = fn;
                }
            },
            registerPartial: function(name, str) {
                if (toString.call(name) === objectType) {
                    Utils.extend(this.partials, name);
                } else {
                    this.partials[name] = str;
                }
            }
        };
        function registerDefaultHelpers(instance) {
            instance.registerHelper('helperMissing',
            function(arg) {
                if (arguments.length === 2) {
                    return undefined;
                } else {
                    throw new Exception("Missing helper: '" + arg + "'");
                }
            });
            instance.registerHelper('blockHelperMissing',
            function(context, options) {
                var inverse = options.inverse ||
                function() {},
                fn = options.fn;
                if (isFunction(context)) {
                    context = context.call(this);
                }
                if (context === true) {
                    return fn(this);
                } else if (context === false || context == null) {
                    return inverse(this);
                } else if (isArray(context)) {
                    if (context.length > 0) {
                        return instance.helpers.each(context, options);
                    } else {
                        return inverse(this);
                    }
                } else {
                    return fn(context);
                }
            });
            instance.registerHelper('each',
            function(context, options) {
                var fn = options.fn,
                inverse = options.inverse;
                var i = 0,
                ret = "",
                data;
                if (isFunction(context)) {
                    context = context.call(this);
                }
                if (options.data) {
                    data = createFrame(options.data);
                }
                if (context && typeof context === 'object') {
                    if (isArray(context)) {
                        for (var j = context.length; i < j; i++) {
                            if (data) {
                                data.index = i;
                                data.first = (i === 0);
                                data.last = (i === (context.length - 1));
                            }
                            ret = ret + fn(context[i], {
                                data: data
                            });
                        }
                    } else {
                        for (var key in context) {
                            if (context.hasOwnProperty(key)) {
                                if (data) {
                                    data.key = key;
                                    data.index = i;
                                    data.first = (i === 0);
                                }
                                ret = ret + fn(context[key], {
                                    data: data
                                });
                                i++;
                            }
                        }
                    }
                }
                if (i === 0) {
                    ret = inverse(this);
                }
                return ret;
            });
            instance.registerHelper('if',
            function(conditional, options) {
                if (isFunction(conditional)) {
                    conditional = conditional.call(this);
                }
                if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
                    return options.inverse(this);
                } else {
                    return options.fn(this);
                }
            });
            instance.registerHelper('unless',
            function(conditional, options) {
                return instance.helpers['if'].call(this, conditional, {
                    fn: options.inverse,
                    inverse: options.fn,
                    hash: options.hash
                });
            });
            instance.registerHelper('with',
            function(context, options) {
                if (isFunction(context)) {
                    context = context.call(this);
                }
                if (!Utils.isEmpty(context)) return options.fn(context);
            });
            instance.registerHelper('log',
            function(context, options) {
                var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
                instance.log(level, context);
            });
        }
        var logger = {
            methodMap: {
                0 : 'debug',
                1 : 'info',
                2 : 'warn',
                3 : 'error'
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(level, obj) {
                if (logger.level <= level) {
                    var method = logger.methodMap[level];
                    if (typeof console !== 'undefined' && console[method]) {
                        console[method].call(console, obj);
                    }
                }
            }
        };
        __exports__.logger = logger;
        function log(level, obj) {
            logger.log(level, obj);
        }
        __exports__.log = log;
        var createFrame = function(object) {
            var obj = {};
            Utils.extend(obj, object);
            return obj;
        };
        __exports__.createFrame = createFrame;
        return __exports__;
    })(__module3__, __module5__);
    var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
        "use strict";
        var __exports__ = {};
        var Utils = __dependency1__;
        var Exception = __dependency2__;
        var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
        var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;
        function checkRevision(compilerInfo) {
            var compilerRevision = compilerInfo && compilerInfo[0] || 1,
            currentRevision = COMPILER_REVISION;
            if (compilerRevision !== currentRevision) {
                if (compilerRevision < currentRevision) {
                    var runtimeVersions = REVISION_CHANGES[currentRevision],
                    compilerVersions = REVISION_CHANGES[compilerRevision];
                    throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. " + "Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
                } else {
                    throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. " + "Please update your runtime to a newer version (" + compilerInfo[1] + ").");
                }
            }
        }
        __exports__.checkRevision = checkRevision;
        function template(templateSpec, env) {
            if (!env) {
                throw new Exception("No environment passed to template");
            }
            var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
                var result = env.VM.invokePartial.apply(this, arguments);
                if (result != null) {
                    return result;
                }
                if (env.compile) {
                    var options = {
                        helpers: helpers,
                        partials: partials,
                        data: data
                    };
                    partials[name] = env.compile(partial, {
                        data: data !== undefined
                    },
                    env);
                    return partials[name](context, options);
                } else {
                    throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
                }
            };
            var container = {
                escapeExpression: Utils.escapeExpression,
                invokePartial: invokePartialWrapper,
                programs: [],
                program: function(i, fn, data) {
                    var programWrapper = this.programs[i];
                    if (data) {
                        programWrapper = program(i, fn, data);
                    } else if (!programWrapper) {
                        programWrapper = this.programs[i] = program(i, fn);
                    }
                    return programWrapper;
                },
                merge: function(param, common) {
                    var ret = param || common;
                    if (param && common && (param !== common)) {
                        ret = {};
                        Utils.extend(ret, common);
                        Utils.extend(ret, param);
                    }
                    return ret;
                },
                programWithDepth: env.VM.programWithDepth,
                noop: env.VM.noop,
                compilerInfo: null
            };
            return function(context, options) {
                options = options || {};
                var namespace = options.partial ? options: env,
                helpers,
                partials;
                if (!options.partial) {
                    helpers = options.helpers;
                    partials = options.partials;
                }
                var result = templateSpec.call(container, namespace, context, helpers, partials, options.data);
                if (!options.partial) {
                    env.VM.checkRevision(container.compilerInfo);
                }
                return result;
            };
        }
        __exports__.template = template;
        function programWithDepth(i, fn, data) {
            var args = Array.prototype.slice.call(arguments, 3);
            var prog = function(context, options) {
                options = options || {};
                return fn.apply(this, [context, options.data || data].concat(args));
            };
            prog.program = i;
            prog.depth = args.length;
            return prog;
        }
        __exports__.programWithDepth = programWithDepth;
        function program(i, fn, data) {
            var prog = function(context, options) {
                options = options || {};
                return fn(context, options.data || data);
            };
            prog.program = i;
            prog.depth = 0;
            return prog;
        }
        __exports__.program = program;
        function invokePartial(partial, name, context, helpers, partials, data) {
            var options = {
                partial: true,
                helpers: helpers,
                partials: partials,
                data: data
            };
            if (partial === undefined) {
                throw new Exception("The partial " + name + " could not be found");
            } else if (partial instanceof Function) {
                return partial(context, options);
            }
        }
        __exports__.invokePartial = invokePartial;
        function noop() {
            return "";
        }
        __exports__.noop = noop;
        return __exports__;
    })(__module3__, __module5__, __module2__);
    var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
        "use strict";
        var __exports__;
        var base = __dependency1__;
        var SafeString = __dependency2__;
        var Exception = __dependency3__;
        var Utils = __dependency4__;
        var runtime = __dependency5__;
        var create = function() {
            var hb = new base.HandlebarsEnvironment();
            Utils.extend(hb, base);
            hb.SafeString = SafeString;
            hb.Exception = Exception;
            hb.Utils = Utils;
            hb.VM = runtime;
            hb.template = function(spec) {
                return runtime.template(spec, hb);
            };
            return hb;
        };
        var Handlebars = create();
        Handlebars.create = create;
        __exports__ = Handlebars;
        return __exports__;
    })(__module2__, __module4__, __module5__, __module3__, __module6__);
    var __module7__ = (function(__dependency1__) {
        "use strict";
        var __exports__;
        var Exception = __dependency1__;
        function LocationInfo(locInfo) {
            locInfo = locInfo || {};
            this.firstLine = locInfo.first_line;
            this.firstColumn = locInfo.first_column;
            this.lastColumn = locInfo.last_column;
            this.lastLine = locInfo.last_line;
        }
        var AST = {
            ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
                var inverseLocationInfo, firstInverseNode;
                if (arguments.length === 3) {
                    locInfo = inverse;
                    inverse = null;
                } else if (arguments.length === 2) {
                    locInfo = inverseStrip;
                    inverseStrip = null;
                }
                LocationInfo.call(this, locInfo);
                this.type = "program";
                this.statements = statements;
                this.strip = {};
                if (inverse) {
                    firstInverseNode = inverse[0];
                    if (firstInverseNode) {
                        inverseLocationInfo = {
                            first_line: firstInverseNode.firstLine,
                            last_line: firstInverseNode.lastLine,
                            last_column: firstInverseNode.lastColumn,
                            first_column: firstInverseNode.firstColumn
                        };
                        this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
                    } else {
                        this.inverse = new AST.ProgramNode(inverse, inverseStrip);
                    }
                    this.strip.right = inverseStrip.left;
                } else if (inverseStrip) {
                    this.strip.left = inverseStrip.right;
                }
            },
            MustacheNode: function(rawParams, hash, open, strip, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "mustache";
                this.strip = strip;
                if (open != null && open.charAt) {
                    var escapeFlag = open.charAt(3) || open.charAt(2);
                    this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
                } else {
                    this.escaped = !!open;
                }
                if (rawParams instanceof AST.SexprNode) {
                    this.sexpr = rawParams;
                } else {
                    this.sexpr = new AST.SexprNode(rawParams, hash);
                }
                this.sexpr.isRoot = true;
                this.id = this.sexpr.id;
                this.params = this.sexpr.params;
                this.hash = this.sexpr.hash;
                this.eligibleHelper = this.sexpr.eligibleHelper;
                this.isHelper = this.sexpr.isHelper;
            },
            SexprNode: function(rawParams, hash, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "sexpr";
                this.hash = hash;
                var id = this.id = rawParams[0];
                var params = this.params = rawParams.slice(1);
                var eligibleHelper = this.eligibleHelper = id.isSimple;
                this.isHelper = eligibleHelper && (params.length || hash);
            },
            PartialNode: function(partialName, context, strip, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "partial";
                this.partialName = partialName;
                this.context = context;
                this.strip = strip;
            },
            BlockNode: function(mustache, program, inverse, close, locInfo) {
                LocationInfo.call(this, locInfo);
                if (mustache.sexpr.id.original !== close.path.original) {
                    throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
                }
                this.type = 'block';
                this.mustache = mustache;
                this.program = program;
                this.inverse = inverse;
                this.strip = {
                    left: mustache.strip.left,
                    right: close.strip.right
                }; (program || inverse).strip.left = mustache.strip.right; (inverse || program).strip.right = close.strip.left;
                if (inverse && !program) {
                    this.isInverse = true;
                }
            },
            ContentNode: function(string, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "content";
                this.string = string;
            },
            HashNode: function(pairs, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "hash";
                this.pairs = pairs;
            },
            IdNode: function(parts, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "ID";
                var original = "",
                dig = [],
                depth = 0;
                for (var i = 0,
                l = parts.length; i < l; i++) {
                    var part = parts[i].part;
                    original += (parts[i].separator || '') + part;
                    if (part === ".." || part === "." || part === "this") {
                        if (dig.length > 0) {
                            throw new Exception("Invalid path: " + original, this);
                        } else if (part === "..") {
                            depth++;
                        } else {
                            this.isScoped = true;
                        }
                    } else {
                        dig.push(part);
                    }
                }
                this.original = original;
                this.parts = dig;
                this.string = dig.join('.');
                this.depth = depth;
                this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;
                this.stringModeValue = this.string;
            },
            PartialNameNode: function(name, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "PARTIAL_NAME";
                this.name = name.original;
            },
            DataNode: function(id, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "DATA";
                this.id = id;
            },
            StringNode: function(string, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "STRING";
                this.original = this.string = this.stringModeValue = string;
            },
            IntegerNode: function(integer, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "INTEGER";
                this.original = this.integer = integer;
                this.stringModeValue = Number(integer);
            },
            BooleanNode: function(bool, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "BOOLEAN";
                this.bool = bool;
                this.stringModeValue = bool === "true";
            },
            CommentNode: function(comment, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "comment";
                this.comment = comment;
            }
        };
        __exports__ = AST;
        return __exports__;
    })(__module5__);
    var __module9__ = (function() {
        "use strict";
        var __exports__;
        var handlebars = (function() {
            var parser = {
                trace: function trace() {},
                yy: {},
                symbols_: {
                    "error": 2,
                    "root": 3,
                    "statements": 4,
                    "EOF": 5,
                    "program": 6,
                    "simpleInverse": 7,
                    "statement": 8,
                    "openInverse": 9,
                    "closeBlock": 10,
                    "openBlock": 11,
                    "mustache": 12,
                    "partial": 13,
                    "CONTENT": 14,
                    "COMMENT": 15,
                    "OPEN_BLOCK": 16,
                    "sexpr": 17,
                    "CLOSE": 18,
                    "OPEN_INVERSE": 19,
                    "OPEN_ENDBLOCK": 20,
                    "path": 21,
                    "OPEN": 22,
                    "OPEN_UNESCAPED": 23,
                    "CLOSE_UNESCAPED": 24,
                    "OPEN_PARTIAL": 25,
                    "partialName": 26,
                    "partial_option0": 27,
                    "sexpr_repetition0": 28,
                    "sexpr_option0": 29,
                    "dataName": 30,
                    "param": 31,
                    "STRING": 32,
                    "INTEGER": 33,
                    "BOOLEAN": 34,
                    "OPEN_SEXPR": 35,
                    "CLOSE_SEXPR": 36,
                    "hash": 37,
                    "hash_repetition_plus0": 38,
                    "hashSegment": 39,
                    "ID": 40,
                    "EQUALS": 41,
                    "DATA": 42,
                    "pathSegments": 43,
                    "SEP": 44,
                    "$accept": 0,
                    "$end": 1
                },
                terminals_: {
                    2 : "error",
                    5 : "EOF",
                    14 : "CONTENT",
                    15 : "COMMENT",
                    16 : "OPEN_BLOCK",
                    18 : "CLOSE",
                    19 : "OPEN_INVERSE",
                    20 : "OPEN_ENDBLOCK",
                    22 : "OPEN",
                    23 : "OPEN_UNESCAPED",
                    24 : "CLOSE_UNESCAPED",
                    25 : "OPEN_PARTIAL",
                    32 : "STRING",
                    33 : "INTEGER",
                    34 : "BOOLEAN",
                    35 : "OPEN_SEXPR",
                    36 : "CLOSE_SEXPR",
                    40 : "ID",
                    41 : "EQUALS",
                    42 : "DATA",
                    44 : "SEP"
                },
                productions_: [0, [3, 2], [3, 1], [6, 2], [6, 3], [6, 2], [6, 1], [6, 1], [6, 0], [4, 1], [4, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 4], [7, 2], [17, 3], [17, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 3], [37, 1], [39, 3], [26, 1], [26, 1], [26, 1], [30, 2], [21, 1], [43, 3], [43, 1], [27, 0], [27, 1], [28, 0], [28, 2], [29, 0], [29, 1], [38, 1], [38, 2]],
                performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
                    var $0 = $$.length - 1;
                    switch (yystate) {
                    case 1:
                        return new yy.ProgramNode($$[$0 - 1], this._$);
                        break;
                    case 2:
                        return new yy.ProgramNode([], this._$);
                        break;
                    case 3:
                        this.$ = new yy.ProgramNode([], $$[$0 - 1], $$[$0], this._$);
                        break;
                    case 4:
                        this.$ = new yy.ProgramNode($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                        break;
                    case 5:
                        this.$ = new yy.ProgramNode($$[$0 - 1], $$[$0], [], this._$);
                        break;
                    case 6:
                        this.$ = new yy.ProgramNode($$[$0], this._$);
                        break;
                    case 7:
                        this.$ = new yy.ProgramNode([], this._$);
                        break;
                    case 8:
                        this.$ = new yy.ProgramNode([], this._$);
                        break;
                    case 9:
                        this.$ = [$$[$0]];
                        break;
                    case 10:
                        $$[$0 - 1].push($$[$0]);
                        this.$ = $$[$0 - 1];
                        break;
                    case 11:
                        this.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1].inverse, $$[$0 - 1], $$[$0], this._$);
                        break;
                    case 12:
                        this.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1], $$[$0 - 1].inverse, $$[$0], this._$);
                        break;
                    case 13:
                        this.$ = $$[$0];
                        break;
                    case 14:
                        this.$ = $$[$0];
                        break;
                    case 15:
                        this.$ = new yy.ContentNode($$[$0], this._$);
                        break;
                    case 16:
                        this.$ = new yy.CommentNode($$[$0], this._$);
                        break;
                    case 17:
                        this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                        break;
                    case 18:
                        this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                        break;
                    case 19:
                        this.$ = {
                            path: $$[$0 - 1],
                            strip: stripFlags($$[$0 - 2], $$[$0])
                        };
                        break;
                    case 20:
                        this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                        break;
                    case 21:
                        this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                        break;
                    case 22:
                        this.$ = new yy.PartialNode($$[$0 - 2], $$[$0 - 1], stripFlags($$[$0 - 3], $$[$0]), this._$);
                        break;
                    case 23:
                        this.$ = stripFlags($$[$0 - 1], $$[$0]);
                        break;
                    case 24:
                        this.$ = new yy.SexprNode([$$[$0 - 2]].concat($$[$0 - 1]), $$[$0], this._$);
                        break;
                    case 25:
                        this.$ = new yy.SexprNode([$$[$0]], null, this._$);
                        break;
                    case 26:
                        this.$ = $$[$0];
                        break;
                    case 27:
                        this.$ = new yy.StringNode($$[$0], this._$);
                        break;
                    case 28:
                        this.$ = new yy.IntegerNode($$[$0], this._$);
                        break;
                    case 29:
                        this.$ = new yy.BooleanNode($$[$0], this._$);
                        break;
                    case 30:
                        this.$ = $$[$0];
                        break;
                    case 31:
                        $$[$0 - 1].isHelper = true;
                        this.$ = $$[$0 - 1];
                        break;
                    case 32:
                        this.$ = new yy.HashNode($$[$0], this._$);
                        break;
                    case 33:
                        this.$ = [$$[$0 - 2], $$[$0]];
                        break;
                    case 34:
                        this.$ = new yy.PartialNameNode($$[$0], this._$);
                        break;
                    case 35:
                        this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
                        break;
                    case 36:
                        this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
                        break;
                    case 37:
                        this.$ = new yy.DataNode($$[$0], this._$);
                        break;
                    case 38:
                        this.$ = new yy.IdNode($$[$0], this._$);
                        break;
                    case 39:
                        $$[$0 - 2].push({
                            part: $$[$0],
                            separator: $$[$0 - 1]
                        });
                        this.$ = $$[$0 - 2];
                        break;
                    case 40:
                        this.$ = [{
                            part: $$[$0]
                        }];
                        break;
                    case 43:
                        this.$ = [];
                        break;
                    case 44:
                        $$[$0 - 1].push($$[$0]);
                        break;
                    case 47:
                        this.$ = [$$[$0]];
                        break;
                    case 48:
                        $$[$0 - 1].push($$[$0]);
                        break;
                    }
                },
                table: [{
                    3 : 1,
                    4 : 2,
                    5 : [1, 3],
                    8 : 4,
                    9 : 5,
                    11 : 6,
                    12 : 7,
                    13 : 8,
                    14 : [1, 9],
                    15 : [1, 10],
                    16 : [1, 12],
                    19 : [1, 11],
                    22 : [1, 13],
                    23 : [1, 14],
                    25 : [1, 15]
                },
                {
                    1 : [3]
                },
                {
                    5 : [1, 16],
                    8 : 17,
                    9 : 5,
                    11 : 6,
                    12 : 7,
                    13 : 8,
                    14 : [1, 9],
                    15 : [1, 10],
                    16 : [1, 12],
                    19 : [1, 11],
                    22 : [1, 13],
                    23 : [1, 14],
                    25 : [1, 15]
                },
                {
                    1 : [2, 2]
                },
                {
                    5 : [2, 9],
                    14 : [2, 9],
                    15 : [2, 9],
                    16 : [2, 9],
                    19 : [2, 9],
                    20 : [2, 9],
                    22 : [2, 9],
                    23 : [2, 9],
                    25 : [2, 9]
                },
                {
                    4 : 20,
                    6 : 18,
                    7 : 19,
                    8 : 4,
                    9 : 5,
                    11 : 6,
                    12 : 7,
                    13 : 8,
                    14 : [1, 9],
                    15 : [1, 10],
                    16 : [1, 12],
                    19 : [1, 21],
                    20 : [2, 8],
                    22 : [1, 13],
                    23 : [1, 14],
                    25 : [1, 15]
                },
                {
                    4 : 20,
                    6 : 22,
                    7 : 19,
                    8 : 4,
                    9 : 5,
                    11 : 6,
                    12 : 7,
                    13 : 8,
                    14 : [1, 9],
                    15 : [1, 10],
                    16 : [1, 12],
                    19 : [1, 21],
                    20 : [2, 8],
                    22 : [1, 13],
                    23 : [1, 14],
                    25 : [1, 15]
                },
                {
                    5 : [2, 13],
                    14 : [2, 13],
                    15 : [2, 13],
                    16 : [2, 13],
                    19 : [2, 13],
                    20 : [2, 13],
                    22 : [2, 13],
                    23 : [2, 13],
                    25 : [2, 13]
                },
                {
                    5 : [2, 14],
                    14 : [2, 14],
                    15 : [2, 14],
                    16 : [2, 14],
                    19 : [2, 14],
                    20 : [2, 14],
                    22 : [2, 14],
                    23 : [2, 14],
                    25 : [2, 14]
                },
                {
                    5 : [2, 15],
                    14 : [2, 15],
                    15 : [2, 15],
                    16 : [2, 15],
                    19 : [2, 15],
                    20 : [2, 15],
                    22 : [2, 15],
                    23 : [2, 15],
                    25 : [2, 15]
                },
                {
                    5 : [2, 16],
                    14 : [2, 16],
                    15 : [2, 16],
                    16 : [2, 16],
                    19 : [2, 16],
                    20 : [2, 16],
                    22 : [2, 16],
                    23 : [2, 16],
                    25 : [2, 16]
                },
                {
                    17 : 23,
                    21 : 24,
                    30 : 25,
                    40 : [1, 28],
                    42 : [1, 27],
                    43 : 26
                },
                {
                    17 : 29,
                    21 : 24,
                    30 : 25,
                    40 : [1, 28],
                    42 : [1, 27],
                    43 : 26
                },
                {
                    17 : 30,
                    21 : 24,
                    30 : 25,
                    40 : [1, 28],
                    42 : [1, 27],
                    43 : 26
                },
                {
                    17 : 31,
                    21 : 24,
                    30 : 25,
                    40 : [1, 28],
                    42 : [1, 27],
                    43 : 26
                },
                {
                    21 : 33,
                    26 : 32,
                    32 : [1, 34],
                    33 : [1, 35],
                    40 : [1, 28],
                    43 : 26
                },
                {
                    1 : [2, 1]
                },
                {
                    5 : [2, 10],
                    14 : [2, 10],
                    15 : [2, 10],
                    16 : [2, 10],
                    19 : [2, 10],
                    20 : [2, 10],
                    22 : [2, 10],
                    23 : [2, 10],
                    25 : [2, 10]
                },
                {
                    10 : 36,
                    20 : [1, 37]
                },
                {
                    4 : 38,
                    8 : 4,
                    9 : 5,
                    11 : 6,
                    12 : 7,
                    13 : 8,
                    14 : [1, 9],
                    15 : [1, 10],
                    16 : [1, 12],
                    19 : [1, 11],
                    20 : [2, 7],
                    22 : [1, 13],
                    23 : [1, 14],
                    25 : [1, 15]
                },
                {
                    7 : 39,
                    8 : 17,
                    9 : 5,
                    11 : 6,
                    12 : 7,
                    13 : 8,
                    14 : [1, 9],
                    15 : [1, 10],
                    16 : [1, 12],
                    19 : [1, 21],
                    20 : [2, 6],
                    22 : [1, 13],
                    23 : [1, 14],
                    25 : [1, 15]
                },
                {
                    17 : 23,
                    18 : [1, 40],
                    21 : 24,
                    30 : 25,
                    40 : [1, 28],
                    42 : [1, 27],
                    43 : 26
                },
                {
                    10 : 41,
                    20 : [1, 37]
                },
                {
                    18 : [1, 42]
                },
                {
                    18 : [2, 43],
                    24 : [2, 43],
                    28 : 43,
                    32 : [2, 43],
                    33 : [2, 43],
                    34 : [2, 43],
                    35 : [2, 43],
                    36 : [2, 43],
                    40 : [2, 43],
                    42 : [2, 43]
                },
                {
                    18 : [2, 25],
                    24 : [2, 25],
                    36 : [2, 25]
                },
                {
                    18 : [2, 38],
                    24 : [2, 38],
                    32 : [2, 38],
                    33 : [2, 38],
                    34 : [2, 38],
                    35 : [2, 38],
                    36 : [2, 38],
                    40 : [2, 38],
                    42 : [2, 38],
                    44 : [1, 44]
                },
                {
                    21 : 45,
                    40 : [1, 28],
                    43 : 26
                },
                {
                    18 : [2, 40],
                    24 : [2, 40],
                    32 : [2, 40],
                    33 : [2, 40],
                    34 : [2, 40],
                    35 : [2, 40],
                    36 : [2, 40],
                    40 : [2, 40],
                    42 : [2, 40],
                    44 : [2, 40]
                },
                {
                    18 : [1, 46]
                },
                {
                    18 : [1, 47]
                },
                {
                    24 : [1, 48]
                },
                {
                    18 : [2, 41],
                    21 : 50,
                    27 : 49,
                    40 : [1, 28],
                    43 : 26
                },
                {
                    18 : [2, 34],
                    40 : [2, 34]
                },
                {
                    18 : [2, 35],
                    40 : [2, 35]
                },
                {
                    18 : [2, 36],
                    40 : [2, 36]
                },
                {
                    5 : [2, 11],
                    14 : [2, 11],
                    15 : [2, 11],
                    16 : [2, 11],
                    19 : [2, 11],
                    20 : [2, 11],
                    22 : [2, 11],
                    23 : [2, 11],
                    25 : [2, 11]
                },
                {
                    21 : 51,
                    40 : [1, 28],
                    43 : 26
                },
                {
                    8 : 17,
                    9 : 5,
                    11 : 6,
                    12 : 7,
                    13 : 8,
                    14 : [1, 9],
                    15 : [1, 10],
                    16 : [1, 12],
                    19 : [1, 11],
                    20 : [2, 3],
                    22 : [1, 13],
                    23 : [1, 14],
                    25 : [1, 15]
                },
                {
                    4 : 52,
                    8 : 4,
                    9 : 5,
                    11 : 6,
                    12 : 7,
                    13 : 8,
                    14 : [1, 9],
                    15 : [1, 10],
                    16 : [1, 12],
                    19 : [1, 11],
                    20 : [2, 5],
                    22 : [1, 13],
                    23 : [1, 14],
                    25 : [1, 15]
                },
                {
                    14 : [2, 23],
                    15 : [2, 23],
                    16 : [2, 23],
                    19 : [2, 23],
                    20 : [2, 23],
                    22 : [2, 23],
                    23 : [2, 23],
                    25 : [2, 23]
                },
                {
                    5 : [2, 12],
                    14 : [2, 12],
                    15 : [2, 12],
                    16 : [2, 12],
                    19 : [2, 12],
                    20 : [2, 12],
                    22 : [2, 12],
                    23 : [2, 12],
                    25 : [2, 12]
                },
                {
                    14 : [2, 18],
                    15 : [2, 18],
                    16 : [2, 18],
                    19 : [2, 18],
                    20 : [2, 18],
                    22 : [2, 18],
                    23 : [2, 18],
                    25 : [2, 18]
                },
                {
                    18 : [2, 45],
                    21 : 56,
                    24 : [2, 45],
                    29 : 53,
                    30 : 60,
                    31 : 54,
                    32 : [1, 57],
                    33 : [1, 58],
                    34 : [1, 59],
                    35 : [1, 61],
                    36 : [2, 45],
                    37 : 55,
                    38 : 62,
                    39 : 63,
                    40 : [1, 64],
                    42 : [1, 27],
                    43 : 26
                },
                {
                    40 : [1, 65]
                },
                {
                    18 : [2, 37],
                    24 : [2, 37],
                    32 : [2, 37],
                    33 : [2, 37],
                    34 : [2, 37],
                    35 : [2, 37],
                    36 : [2, 37],
                    40 : [2, 37],
                    42 : [2, 37]
                },
                {
                    14 : [2, 17],
                    15 : [2, 17],
                    16 : [2, 17],
                    19 : [2, 17],
                    20 : [2, 17],
                    22 : [2, 17],
                    23 : [2, 17],
                    25 : [2, 17]
                },
                {
                    5 : [2, 20],
                    14 : [2, 20],
                    15 : [2, 20],
                    16 : [2, 20],
                    19 : [2, 20],
                    20 : [2, 20],
                    22 : [2, 20],
                    23 : [2, 20],
                    25 : [2, 20]
                },
                {
                    5 : [2, 21],
                    14 : [2, 21],
                    15 : [2, 21],
                    16 : [2, 21],
                    19 : [2, 21],
                    20 : [2, 21],
                    22 : [2, 21],
                    23 : [2, 21],
                    25 : [2, 21]
                },
                {
                    18 : [1, 66]
                },
                {
                    18 : [2, 42]
                },
                {
                    18 : [1, 67]
                },
                {
                    8 : 17,
                    9 : 5,
                    11 : 6,
                    12 : 7,
                    13 : 8,
                    14 : [1, 9],
                    15 : [1, 10],
                    16 : [1, 12],
                    19 : [1, 11],
                    20 : [2, 4],
                    22 : [1, 13],
                    23 : [1, 14],
                    25 : [1, 15]
                },
                {
                    18 : [2, 24],
                    24 : [2, 24],
                    36 : [2, 24]
                },
                {
                    18 : [2, 44],
                    24 : [2, 44],
                    32 : [2, 44],
                    33 : [2, 44],
                    34 : [2, 44],
                    35 : [2, 44],
                    36 : [2, 44],
                    40 : [2, 44],
                    42 : [2, 44]
                },
                {
                    18 : [2, 46],
                    24 : [2, 46],
                    36 : [2, 46]
                },
                {
                    18 : [2, 26],
                    24 : [2, 26],
                    32 : [2, 26],
                    33 : [2, 26],
                    34 : [2, 26],
                    35 : [2, 26],
                    36 : [2, 26],
                    40 : [2, 26],
                    42 : [2, 26]
                },
                {
                    18 : [2, 27],
                    24 : [2, 27],
                    32 : [2, 27],
                    33 : [2, 27],
                    34 : [2, 27],
                    35 : [2, 27],
                    36 : [2, 27],
                    40 : [2, 27],
                    42 : [2, 27]
                },
                {
                    18 : [2, 28],
                    24 : [2, 28],
                    32 : [2, 28],
                    33 : [2, 28],
                    34 : [2, 28],
                    35 : [2, 28],
                    36 : [2, 28],
                    40 : [2, 28],
                    42 : [2, 28]
                },
                {
                    18 : [2, 29],
                    24 : [2, 29],
                    32 : [2, 29],
                    33 : [2, 29],
                    34 : [2, 29],
                    35 : [2, 29],
                    36 : [2, 29],
                    40 : [2, 29],
                    42 : [2, 29]
                },
                {
                    18 : [2, 30],
                    24 : [2, 30],
                    32 : [2, 30],
                    33 : [2, 30],
                    34 : [2, 30],
                    35 : [2, 30],
                    36 : [2, 30],
                    40 : [2, 30],
                    42 : [2, 30]
                },
                {
                    17 : 68,
                    21 : 24,
                    30 : 25,
                    40 : [1, 28],
                    42 : [1, 27],
                    43 : 26
                },
                {
                    18 : [2, 32],
                    24 : [2, 32],
                    36 : [2, 32],
                    39 : 69,
                    40 : [1, 70]
                },
                {
                    18 : [2, 47],
                    24 : [2, 47],
                    36 : [2, 47],
                    40 : [2, 47]
                },
                {
                    18 : [2, 40],
                    24 : [2, 40],
                    32 : [2, 40],
                    33 : [2, 40],
                    34 : [2, 40],
                    35 : [2, 40],
                    36 : [2, 40],
                    40 : [2, 40],
                    41 : [1, 71],
                    42 : [2, 40],
                    44 : [2, 40]
                },
                {
                    18 : [2, 39],
                    24 : [2, 39],
                    32 : [2, 39],
                    33 : [2, 39],
                    34 : [2, 39],
                    35 : [2, 39],
                    36 : [2, 39],
                    40 : [2, 39],
                    42 : [2, 39],
                    44 : [2, 39]
                },
                {
                    5 : [2, 22],
                    14 : [2, 22],
                    15 : [2, 22],
                    16 : [2, 22],
                    19 : [2, 22],
                    20 : [2, 22],
                    22 : [2, 22],
                    23 : [2, 22],
                    25 : [2, 22]
                },
                {
                    5 : [2, 19],
                    14 : [2, 19],
                    15 : [2, 19],
                    16 : [2, 19],
                    19 : [2, 19],
                    20 : [2, 19],
                    22 : [2, 19],
                    23 : [2, 19],
                    25 : [2, 19]
                },
                {
                    36 : [1, 72]
                },
                {
                    18 : [2, 48],
                    24 : [2, 48],
                    36 : [2, 48],
                    40 : [2, 48]
                },
                {
                    41 : [1, 71]
                },
                {
                    21 : 56,
                    30 : 60,
                    31 : 73,
                    32 : [1, 57],
                    33 : [1, 58],
                    34 : [1, 59],
                    35 : [1, 61],
                    40 : [1, 28],
                    42 : [1, 27],
                    43 : 26
                },
                {
                    18 : [2, 31],
                    24 : [2, 31],
                    32 : [2, 31],
                    33 : [2, 31],
                    34 : [2, 31],
                    35 : [2, 31],
                    36 : [2, 31],
                    40 : [2, 31],
                    42 : [2, 31]
                },
                {
                    18 : [2, 33],
                    24 : [2, 33],
                    36 : [2, 33],
                    40 : [2, 33]
                }],
                defaultActions: {
                    3 : [2, 2],
                    16 : [2, 1],
                    50 : [2, 42]
                },
                parseError: function parseError(str, hash) {
                    throw new Error(str);
                },
                parse: function parse(input) {
                    var self = this,
                    stack = [0],
                    vstack = [null],
                    lstack = [],
                    table = this.table,
                    yytext = "",
                    yylineno = 0,
                    yyleng = 0,
                    recovering = 0,
                    TERROR = 2,
                    EOF = 1;
                    this.lexer.setInput(input);
                    this.lexer.yy = this.yy;
                    this.yy.lexer = this.lexer;
                    this.yy.parser = this;
                    if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
                    var yyloc = this.lexer.yylloc;
                    lstack.push(yyloc);
                    var ranges = this.lexer.options && this.lexer.options.ranges;
                    if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
                    function popStack(n) {
                        stack.length = stack.length - 2 * n;
                        vstack.length = vstack.length - n;
                        lstack.length = lstack.length - n;
                    }
                    function lex() {
                        var token;
                        token = self.lexer.lex() || 1;
                        if (typeof token !== "number") {
                            token = self.symbols_[token] || token;
                        }
                        return token;
                    }
                    var symbol, preErrorSymbol, state, action, a, r, yyval = {},
                    p, len, newState, expected;
                    while (true) {
                        state = stack[stack.length - 1];
                        if (this.defaultActions[state]) {
                            action = this.defaultActions[state];
                        } else {
                            if (symbol === null || typeof symbol == "undefined") {
                                symbol = lex();
                            }
                            action = table[state] && table[state][symbol];
                        }
                        if (typeof action === "undefined" || !action.length || !action[0]) {
                            var errStr = "";
                            if (!recovering) {
                                expected = [];
                                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                                    expected.push("'" + this.terminals_[p] + "'");
                                }
                                if (this.lexer.showPosition) {
                                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                                } else {
                                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input": "'" + (this.terminals_[symbol] || symbol) + "'");
                                }
                                this.parseError(errStr, {
                                    text: this.lexer.match,
                                    token: this.terminals_[symbol] || symbol,
                                    line: this.lexer.yylineno,
                                    loc: yyloc,
                                    expected: expected
                                });
                            }
                        }
                        if (action[0] instanceof Array && action.length > 1) {
                            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                        }
                        switch (action[0]) {
                        case 1:
                            stack.push(symbol);
                            vstack.push(this.lexer.yytext);
                            lstack.push(this.lexer.yylloc);
                            stack.push(action[1]);
                            symbol = null;
                            if (!preErrorSymbol) {
                                yyleng = this.lexer.yyleng;
                                yytext = this.lexer.yytext;
                                yylineno = this.lexer.yylineno;
                                yyloc = this.lexer.yylloc;
                                if (recovering > 0) recovering--;
                            } else {
                                symbol = preErrorSymbol;
                                preErrorSymbol = null;
                            }
                            break;
                        case 2:
                            len = this.productions_[action[1]][1];
                            yyval.$ = vstack[vstack.length - len];
                            yyval._$ = {
                                first_line: lstack[lstack.length - (len || 1)].first_line,
                                last_line: lstack[lstack.length - 1].last_line,
                                first_column: lstack[lstack.length - (len || 1)].first_column,
                                last_column: lstack[lstack.length - 1].last_column
                            };
                            if (ranges) {
                                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                            }
                            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                            if (typeof r !== "undefined") {
                                return r;
                            }
                            if (len) {
                                stack = stack.slice(0, -1 * len * 2);
                                vstack = vstack.slice(0, -1 * len);
                                lstack = lstack.slice(0, -1 * len);
                            }
                            stack.push(this.productions_[action[1]][0]);
                            vstack.push(yyval.$);
                            lstack.push(yyval._$);
                            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                            stack.push(newState);
                            break;
                        case 3:
                            return true;
                        }
                    }
                    return true;
                }
            };
            function stripFlags(open, close) {
                return {
                    left: open.charAt(2) === '~',
                    right: close.charAt(0) === '~' || close.charAt(1) === '~'
                };
            }
            var lexer = (function() {
                var lexer = ({
                    EOF: 1,
                    parseError: function parseError(str, hash) {
                        if (this.yy.parser) {
                            this.yy.parser.parseError(str, hash);
                        } else {
                            throw new Error(str);
                        }
                    },
                    setInput: function(input) {
                        this._input = input;
                        this._more = this._less = this.done = false;
                        this.yylineno = this.yyleng = 0;
                        this.yytext = this.matched = this.match = '';
                        this.conditionStack = ['INITIAL'];
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        };
                        if (this.options.ranges) this.yylloc.range = [0, 0];
                        this.offset = 0;
                        return this;
                    },
                    input: function() {
                        var ch = this._input[0];
                        this.yytext += ch;
                        this.yyleng++;
                        this.offset++;
                        this.match += ch;
                        this.matched += ch;
                        var lines = ch.match(/(?:\r\n?|\n).*/g);
                        if (lines) {
                            this.yylineno++;
                            this.yylloc.last_line++;
                        } else {
                            this.yylloc.last_column++;
                        }
                        if (this.options.ranges) this.yylloc.range[1]++;
                        this._input = this._input.slice(1);
                        return ch;
                    },
                    unput: function(ch) {
                        var len = ch.length;
                        var lines = ch.split(/(?:\r\n?|\n)/g);
                        this._input = ch + this._input;
                        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                        this.offset -= len;
                        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1);
                        this.matched = this.matched.substr(0, this.matched.length - 1);
                        if (lines.length - 1) this.yylineno -= lines.length - 1;
                        var r = this.yylloc.range;
                        this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column: 0) + oldLines[oldLines.length - lines.length].length - lines[0].length: this.yylloc.first_column - len
                        };
                        if (this.options.ranges) {
                            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                        }
                        return this;
                    },
                    more: function() {
                        this._more = true;
                        return this;
                    },
                    less: function(n) {
                        this.unput(this.match.slice(n));
                    },
                    pastInput: function() {
                        var past = this.matched.substr(0, this.matched.length - this.match.length);
                        return (past.length > 20 ? '...': '') + past.substr( - 20).replace(/\n/g, "");
                    },
                    upcomingInput: function() {
                        var next = this.match;
                        if (next.length < 20) {
                            next += this._input.substr(0, 20 - next.length);
                        }
                        return (next.substr(0, 20) + (next.length > 20 ? '...': '')).replace(/\n/g, "");
                    },
                    showPosition: function() {
                        var pre = this.pastInput();
                        var c = new Array(pre.length + 1).join("-");
                        return pre + this.upcomingInput() + "\n" + c + "^";
                    },
                    next: function() {
                        if (this.done) {
                            return this.EOF;
                        }
                        if (!this._input) this.done = true;
                        var token, match, tempMatch, index, col, lines;
                        if (!this._more) {
                            this.yytext = '';
                            this.match = '';
                        }
                        var rules = this._currentRules();
                        for (var i = 0; i < rules.length; i++) {
                            tempMatch = this._input.match(this.rules[rules[i]]);
                            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                                match = tempMatch;
                                index = i;
                                if (!this.options.flex) break;
                            }
                        }
                        if (match) {
                            lines = match[0].match(/(?:\r\n?|\n).*/g);
                            if (lines) this.yylineno += lines.length;
                            this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length: this.yylloc.last_column + match[0].length
                            };
                            this.yytext += match[0];
                            this.match += match[0];
                            this.matches = match;
                            this.yyleng = this.yytext.length;
                            if (this.options.ranges) {
                                this.yylloc.range = [this.offset, this.offset += this.yyleng];
                            }
                            this._more = false;
                            this._input = this._input.slice(match[0].length);
                            this.matched += match[0];
                            token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                            if (this.done && this._input) this.done = false;
                            if (token) return token;
                            else return;
                        }
                        if (this._input === "") {
                            return this.EOF;
                        } else {
                            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            });
                        }
                    },
                    lex: function lex() {
                        var r = this.next();
                        if (typeof r !== 'undefined') {
                            return r;
                        } else {
                            return this.lex();
                        }
                    },
                    begin: function begin(condition) {
                        this.conditionStack.push(condition);
                    },
                    popState: function popState() {
                        return this.conditionStack.pop();
                    },
                    _currentRules: function _currentRules() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2];
                    },
                    pushState: function begin(condition) {
                        this.begin(condition);
                    }
                });
                lexer.options = {};
                lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                    function strip(start, end) {
                        return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
                    }
                    var YYSTATE = YY_START
                    switch ($avoiding_name_collisions) {
                    case 0:
                        if (yy_.yytext.slice( - 2) === "\\\\") {
                            strip(0, 1);
                            this.begin("mu");
                        } else if (yy_.yytext.slice( - 1) === "\\") {
                            strip(0, 1);
                            this.begin("emu");
                        } else {
                            this.begin("mu");
                        }
                        if (yy_.yytext) return 14;
                        break;
                    case 1:
                        return 14;
                        break;
                    case 2:
                        this.popState();
                        return 14;
                        break;
                    case 3:
                        strip(0, 4);
                        this.popState();
                        return 15;
                        break;
                    case 4:
                        return 35;
                        break;
                    case 5:
                        return 36;
                        break;
                    case 6:
                        return 25;
                        break;
                    case 7:
                        return 16;
                        break;
                    case 8:
                        return 20;
                        break;
                    case 9:
                        return 19;
                        break;
                    case 10:
                        return 19;
                        break;
                    case 11:
                        return 23;
                        break;
                    case 12:
                        return 22;
                        break;
                    case 13:
                        this.popState();
                        this.begin('com');
                        break;
                    case 14:
                        strip(3, 5);
                        this.popState();
                        return 15;
                        break;
                    case 15:
                        return 22;
                        break;
                    case 16:
                        return 41;
                        break;
                    case 17:
                        return 40;
                        break;
                    case 18:
                        return 40;
                        break;
                    case 19:
                        return 44;
                        break;
                    case 20:
                        break;
                    case 21:
                        this.popState();
                        return 24;
                        break;
                    case 22:
                        this.popState();
                        return 18;
                        break;
                    case 23:
                        yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                        return 32;
                        break;
                    case 24:
                        yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                        return 32;
                        break;
                    case 25:
                        return 42;
                        break;
                    case 26:
                        return 34;
                        break;
                    case 27:
                        return 34;
                        break;
                    case 28:
                        return 33;
                        break;
                    case 29:
                        return 40;
                        break;
                    case 30:
                        yy_.yytext = strip(1, 2);
                        return 40;
                        break;
                    case 31:
                        return 'INVALID';
                        break;
                    case 32:
                        return 5;
                        break;
                    }
                };
                lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
                lexer.conditions = {
                    "mu": {
                        "rules": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                        "inclusive": false
                    },
                    "emu": {
                        "rules": [2],
                        "inclusive": false
                    },
                    "com": {
                        "rules": [3],
                        "inclusive": false
                    },
                    "INITIAL": {
                        "rules": [0, 1, 32],
                        "inclusive": true
                    }
                };
                return lexer;
            })() parser.lexer = lexer;
            function Parser() {
                this.yy = {};
            }
            Parser.prototype = parser;
            parser.Parser = Parser;
            return new Parser;
        })();
        __exports__ = handlebars;
        return __exports__;
    })();
    var __module8__ = (function(__dependency1__, __dependency2__) {
        "use strict";
        var __exports__ = {};
        var parser = __dependency1__;
        var AST = __dependency2__;
        __exports__.parser = parser;
        function parse(input) {
            if (input.constructor === AST.ProgramNode) {
                return input;
            }
            parser.yy = AST;
            return parser.parse(input);
        }
        __exports__.parse = parse;
        return __exports__;
    })(__module9__, __module7__);
    var __module10__ = (function(__dependency1__) {
        "use strict";
        var __exports__ = {};
        var Exception = __dependency1__;
        function Compiler() {}
        __exports__.Compiler = Compiler;
        Compiler.prototype = {
            compiler: Compiler,
            disassemble: function() {
                var opcodes = this.opcodes,
                opcode, out = [],
                params,
                param;
                for (var i = 0,
                l = opcodes.length; i < l; i++) {
                    opcode = opcodes[i];
                    if (opcode.opcode === 'DECLARE') {
                        out.push("DECLARE " + opcode.name + "=" + opcode.value);
                    } else {
                        params = [];
                        for (var j = 0; j < opcode.args.length; j++) {
                            param = opcode.args[j];
                            if (typeof param === "string") {
                                param = "\"" + param.replace("\n", "\\n") + "\"";
                            }
                            params.push(param);
                        }
                        out.push(opcode.opcode + " " + params.join(" "));
                    }
                }
                return out.join("\n");
            },
            equals: function(other) {
                var len = this.opcodes.length;
                if (other.opcodes.length !== len) {
                    return false;
                }
                for (var i = 0; i < len; i++) {
                    var opcode = this.opcodes[i],
                    otherOpcode = other.opcodes[i];
                    if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
                        return false;
                    }
                    for (var j = 0; j < opcode.args.length; j++) {
                        if (opcode.args[j] !== otherOpcode.args[j]) {
                            return false;
                        }
                    }
                }
                len = this.children.length;
                if (other.children.length !== len) {
                    return false;
                }
                for (i = 0; i < len; i++) {
                    if (!this.children[i].equals(other.children[i])) {
                        return false;
                    }
                }
                return true;
            },
            guid: 0,
            compile: function(program, options) {
                this.opcodes = [];
                this.children = [];
                this.depths = {
                    list: []
                };
                this.options = options;
                var knownHelpers = this.options.knownHelpers;
                this.options.knownHelpers = {
                    'helperMissing': true,
                    'blockHelperMissing': true,
                    'each': true,
                    'if': true,
                    'unless': true,
                    'with': true,
                    'log': true
                };
                if (knownHelpers) {
                    for (var name in knownHelpers) {
                        this.options.knownHelpers[name] = knownHelpers[name];
                    }
                }
                return this.accept(program);
            },
            accept: function(node) {
                var strip = node.strip || {},
                ret;
                if (strip.left) {
                    this.opcode('strip');
                }
                ret = this[node.type](node);
                if (strip.right) {
                    this.opcode('strip');
                }
                return ret;
            },
            program: function(program) {
                var statements = program.statements;
                for (var i = 0,
                l = statements.length; i < l; i++) {
                    this.accept(statements[i]);
                }
                this.isSimple = l === 1;
                this.depths.list = this.depths.list.sort(function(a, b) {
                    return a - b;
                });
                return this;
            },
            compileProgram: function(program) {
                var result = new this.compiler().compile(program, this.options);
                var guid = this.guid++,
                depth;
                this.usePartial = this.usePartial || result.usePartial;
                this.children[guid] = result;
                for (var i = 0,
                l = result.depths.list.length; i < l; i++) {
                    depth = result.depths.list[i];
                    if (depth < 2) {
                        continue;
                    } else {
                        this.addDepth(depth - 1);
                    }
                }
                return guid;
            },
            block: function(block) {
                var mustache = block.mustache,
                program = block.program,
                inverse = block.inverse;
                if (program) {
                    program = this.compileProgram(program);
                }
                if (inverse) {
                    inverse = this.compileProgram(inverse);
                }
                var sexpr = mustache.sexpr;
                var type = this.classifySexpr(sexpr);
                if (type === "helper") {
                    this.helperSexpr(sexpr, program, inverse);
                } else if (type === "simple") {
                    this.simpleSexpr(sexpr);
                    this.opcode('pushProgram', program);
                    this.opcode('pushProgram', inverse);
                    this.opcode('emptyHash');
                    this.opcode('blockValue');
                } else {
                    this.ambiguousSexpr(sexpr, program, inverse);
                    this.opcode('pushProgram', program);
                    this.opcode('pushProgram', inverse);
                    this.opcode('emptyHash');
                    this.opcode('ambiguousBlockValue');
                }
                this.opcode('append');
            },
            hash: function(hash) {
                var pairs = hash.pairs,
                pair, val;
                this.opcode('pushHash');
                for (var i = 0,
                l = pairs.length; i < l; i++) {
                    pair = pairs[i];
                    val = pair[1];
                    if (this.options.stringParams) {
                        if (val.depth) {
                            this.addDepth(val.depth);
                        }
                        this.opcode('getContext', val.depth || 0);
                        this.opcode('pushStringParam', val.stringModeValue, val.type);
                        if (val.type === 'sexpr') {
                            this.sexpr(val);
                        }
                    } else {
                        this.accept(val);
                    }
                    this.opcode('assignToHash', pair[0]);
                }
                this.opcode('popHash');
            },
            partial: function(partial) {
                var partialName = partial.partialName;
                this.usePartial = true;
                if (partial.context) {
                    this.ID(partial.context);
                } else {
                    this.opcode('push', 'depth0');
                }
                this.opcode('invokePartial', partialName.name);
                this.opcode('append');
            },
            content: function(content) {
                this.opcode('appendContent', content.string);
            },
            mustache: function(mustache) {
                this.sexpr(mustache.sexpr);
                if (mustache.escaped && !this.options.noEscape) {
                    this.opcode('appendEscaped');
                } else {
                    this.opcode('append');
                }
            },
            ambiguousSexpr: function(sexpr, program, inverse) {
                var id = sexpr.id,
                name = id.parts[0],
                isBlock = program != null || inverse != null;
                this.opcode('getContext', id.depth);
                this.opcode('pushProgram', program);
                this.opcode('pushProgram', inverse);
                this.opcode('invokeAmbiguous', name, isBlock);
            },
            simpleSexpr: function(sexpr) {
                var id = sexpr.id;
                if (id.type === 'DATA') {
                    this.DATA(id);
                } else if (id.parts.length) {
                    this.ID(id);
                } else {
                    this.addDepth(id.depth);
                    this.opcode('getContext', id.depth);
                    this.opcode('pushContext');
                }
                this.opcode('resolvePossibleLambda');
            },
            helperSexpr: function(sexpr, program, inverse) {
                var params = this.setupFullMustacheParams(sexpr, program, inverse),
                name = sexpr.id.parts[0];
                if (this.options.knownHelpers[name]) {
                    this.opcode('invokeKnownHelper', params.length, name);
                } else if (this.options.knownHelpersOnly) {
                    throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
                } else {
                    this.opcode('invokeHelper', params.length, name, sexpr.isRoot);
                }
            },
            sexpr: function(sexpr) {
                var type = this.classifySexpr(sexpr);
                if (type === "simple") {
                    this.simpleSexpr(sexpr);
                } else if (type === "helper") {
                    this.helperSexpr(sexpr);
                } else {
                    this.ambiguousSexpr(sexpr);
                }
            },
            ID: function(id) {
                this.addDepth(id.depth);
                this.opcode('getContext', id.depth);
                var name = id.parts[0];
                if (!name) {
                    this.opcode('pushContext');
                } else {
                    this.opcode('lookupOnContext', id.parts[0]);
                }
                for (var i = 1,
                l = id.parts.length; i < l; i++) {
                    this.opcode('lookup', id.parts[i]);
                }
            },
            DATA: function(data) {
                this.options.data = true;
                if (data.id.isScoped || data.id.depth) {
                    throw new Exception('Scoped data references are not supported: ' + data.original, data);
                }
                this.opcode('lookupData');
                var parts = data.id.parts;
                for (var i = 0,
                l = parts.length; i < l; i++) {
                    this.opcode('lookup', parts[i]);
                }
            },
            STRING: function(string) {
                this.opcode('pushString', string.string);
            },
            INTEGER: function(integer) {
                this.opcode('pushLiteral', integer.integer);
            },
            BOOLEAN: function(bool) {
                this.opcode('pushLiteral', bool.bool);
            },
            comment: function() {},
            opcode: function(name) {
                this.opcodes.push({
                    opcode: name,
                    args: [].slice.call(arguments, 1)
                });
            },
            declare: function(name, value) {
                this.opcodes.push({
                    opcode: 'DECLARE',
                    name: name,
                    value: value
                });
            },
            addDepth: function(depth) {
                if (depth === 0) {
                    return;
                }
                if (!this.depths[depth]) {
                    this.depths[depth] = true;
                    this.depths.list.push(depth);
                }
            },
            classifySexpr: function(sexpr) {
                var isHelper = sexpr.isHelper;
                var isEligible = sexpr.eligibleHelper;
                var options = this.options;
                if (isEligible && !isHelper) {
                    var name = sexpr.id.parts[0];
                    if (options.knownHelpers[name]) {
                        isHelper = true;
                    } else if (options.knownHelpersOnly) {
                        isEligible = false;
                    }
                }
                if (isHelper) {
                    return "helper";
                } else if (isEligible) {
                    return "ambiguous";
                } else {
                    return "simple";
                }
            },
            pushParams: function(params) {
                var i = params.length,
                param;
                while (i--) {
                    param = params[i];
                    if (this.options.stringParams) {
                        if (param.depth) {
                            this.addDepth(param.depth);
                        }
                        this.opcode('getContext', param.depth || 0);
                        this.opcode('pushStringParam', param.stringModeValue, param.type);
                        if (param.type === 'sexpr') {
                            this.sexpr(param);
                        }
                    } else {
                        this[param.type](param);
                    }
                }
            },
            setupFullMustacheParams: function(sexpr, program, inverse) {
                var params = sexpr.params;
                this.pushParams(params);
                this.opcode('pushProgram', program);
                this.opcode('pushProgram', inverse);
                if (sexpr.hash) {
                    this.hash(sexpr.hash);
                } else {
                    this.opcode('emptyHash');
                }
                return params;
            }
        };
        function precompile(input, options, env) {
            if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
                throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
            }
            options = options || {};
            if (! ('data' in options)) {
                options.data = true;
            }
            var ast = env.parse(input);
            var environment = new env.Compiler().compile(ast, options);
            return new env.JavaScriptCompiler().compile(environment, options);
        }
        __exports__.precompile = precompile;
        function compile(input, options, env) {
            if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
                throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
            }
            options = options || {};
            if (! ('data' in options)) {
                options.data = true;
            }
            var compiled;
            function compileInput() {
                var ast = env.parse(input);
                var environment = new env.Compiler().compile(ast, options);
                var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
                return env.template(templateSpec);
            }
            return function(context, options) {
                if (!compiled) {
                    compiled = compileInput();
                }
                return compiled.call(this, context, options);
            };
        }
        __exports__.compile = compile;
        return __exports__;
    })(__module5__);
    var __module11__ = (function(__dependency1__, __dependency2__) {
        "use strict";
        var __exports__;
        var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
        var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
        var log = __dependency1__.log;
        var Exception = __dependency2__;
        function Literal(value) {
            this.value = value;
        }
        function JavaScriptCompiler() {}
        JavaScriptCompiler.prototype = {
            nameLookup: function(parent, name) {
                var wrap, ret;
                if (parent.indexOf('depth') === 0) {
                    wrap = true;
                }
                if (/^[0-9]+$/.test(name)) {
                    ret = parent + "[" + name + "]";
                } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
                    ret = parent + "." + name;
                } else {
                    ret = parent + "['" + name + "']";
                }
                if (wrap) {
                    return '(' + parent + ' && ' + ret + ')';
                } else {
                    return ret;
                }
            },
            compilerInfo: function() {
                var revision = COMPILER_REVISION,
                versions = REVISION_CHANGES[revision];
                return "this.compilerInfo = [" + revision + ",'" + versions + "'];\n";
            },
            appendToBuffer: function(string) {
                if (this.environment.isSimple) {
                    return "return " + string + ";";
                } else {
                    return {
                        appendToBuffer: true,
                        content: string,
                        toString: function() {
                            return "buffer += " + string + ";";
                        }
                    };
                }
            },
            initializeBuffer: function() {
                return this.quotedString("");
            },
            namespace: "Handlebars",
            compile: function(environment, options, context, asObject) {
                this.environment = environment;
                this.options = options || {};
                log('debug', this.environment.disassemble() + "\n\n");
                this.name = this.environment.name;
                this.isChild = !!context;
                this.context = context || {
                    programs: [],
                    environments: [],
                    aliases: {}
                };
                this.preamble();
                this.stackSlot = 0;
                this.stackVars = [];
                this.registers = {
                    list: []
                };
                this.hashes = [];
                this.compileStack = [];
                this.inlineStack = [];
                this.compileChildren(environment, options);
                var opcodes = environment.opcodes,
                opcode;
                this.i = 0;
                for (var l = opcodes.length; this.i < l; this.i++) {
                    opcode = opcodes[this.i];
                    if (opcode.opcode === 'DECLARE') {
                        this[opcode.name] = opcode.value;
                    } else {
                        this[opcode.opcode].apply(this, opcode.args);
                    }
                    if (opcode.opcode !== this.stripNext) {
                        this.stripNext = false;
                    }
                }
                this.pushSource('');
                if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
                    throw new Exception('Compile completed with content left on stack');
                }
                return this.createFunctionContext(asObject);
            },
            preamble: function() {
                var out = [];
                if (!this.isChild) {
                    var namespace = this.namespace;
                    var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
                    if (this.environment.usePartial) {
                        copies = copies + " partials = this.merge(partials, " + namespace + ".partials);";
                    }
                    if (this.options.data) {
                        copies = copies + " data = data || {};";
                    }
                    out.push(copies);
                } else {
                    out.push('');
                }
                if (!this.environment.isSimple) {
                    out.push(", buffer = " + this.initializeBuffer());
                } else {
                    out.push("");
                }
                this.lastContext = 0;
                this.source = out;
            },
            createFunctionContext: function(asObject) {
                var locals = this.stackVars.concat(this.registers.list);
                if (locals.length > 0) {
                    this.source[1] = this.source[1] + ", " + locals.join(", ");
                }
                if (!this.isChild) {
                    for (var alias in this.context.aliases) {
                        if (this.context.aliases.hasOwnProperty(alias)) {
                            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
                        }
                    }
                }
                if (this.source[1]) {
                    this.source[1] = "var " + this.source[1].substring(2) + ";";
                }
                if (!this.isChild) {
                    this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
                }
                if (!this.environment.isSimple) {
                    this.pushSource("return buffer;");
                }
                var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
                for (var i = 0,
                l = this.environment.depths.list.length; i < l; i++) {
                    params.push("depth" + this.environment.depths.list[i]);
                }
                var source = this.mergeSource();
                if (!this.isChild) {
                    source = this.compilerInfo() + source;
                }
                if (asObject) {
                    params.push(source);
                    return Function.apply(this, params);
                } else {
                    var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
                    log('debug', functionSource + "\n\n");
                    return functionSource;
                }
            },
            mergeSource: function() {
                var source = '',
                buffer;
                for (var i = 0,
                len = this.source.length; i < len; i++) {
                    var line = this.source[i];
                    if (line.appendToBuffer) {
                        if (buffer) {
                            buffer = buffer + '\n    + ' + line.content;
                        } else {
                            buffer = line.content;
                        }
                    } else {
                        if (buffer) {
                            source += 'buffer += ' + buffer + ';\n  ';
                            buffer = undefined;
                        }
                        source += line + '\n  ';
                    }
                }
                return source;
            },
            blockValue: function() {
                this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';
                var params = ["depth0"];
                this.setupParams(0, params);
                this.replaceStack(function(current) {
                    params.splice(1, 0, current);
                    return "blockHelperMissing.call(" + params.join(", ") + ")";
                });
            },
            ambiguousBlockValue: function() {
                this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';
                var params = ["depth0"];
                this.setupParams(0, params);
                var current = this.topStack();
                params.splice(1, 0, current);
                this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
            },
            appendContent: function(content) {
                if (this.pendingContent) {
                    content = this.pendingContent + content;
                }
                if (this.stripNext) {
                    content = content.replace(/^\s+/, '');
                }
                this.pendingContent = content;
            },
            strip: function() {
                if (this.pendingContent) {
                    this.pendingContent = this.pendingContent.replace(/\s+$/, '');
                }
                this.stripNext = 'strip';
            },
            append: function() {
                this.flushInline();
                var local = this.popStack();
                this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
                if (this.environment.isSimple) {
                    this.pushSource("else { " + this.appendToBuffer("''") + " }");
                }
            },
            appendEscaped: function() {
                this.context.aliases.escapeExpression = 'this.escapeExpression';
                this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
            },
            getContext: function(depth) {
                if (this.lastContext !== depth) {
                    this.lastContext = depth;
                }
            },
            lookupOnContext: function(name) {
                this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
            },
            pushContext: function() {
                this.pushStackLiteral('depth' + this.lastContext);
            },
            resolvePossibleLambda: function() {
                this.context.aliases.functionType = '"function"';
                this.replaceStack(function(current) {
                    return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
                });
            },
            lookup: function(name) {
                this.replaceStack(function(current) {
                    return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
                });
            },
            lookupData: function() {
                this.pushStackLiteral('data');
            },
            pushStringParam: function(string, type) {
                this.pushStackLiteral('depth' + this.lastContext);
                this.pushString(type);
                if (type !== 'sexpr') {
                    if (typeof string === 'string') {
                        this.pushString(string);
                    } else {
                        this.pushStackLiteral(string);
                    }
                }
            },
            emptyHash: function() {
                this.pushStackLiteral('{}');
                if (this.options.stringParams) {
                    this.push('{}');
                    this.push('{}');
                }
            },
            pushHash: function() {
                if (this.hash) {
                    this.hashes.push(this.hash);
                }
                this.hash = {
                    values: [],
                    types: [],
                    contexts: []
                };
            },
            popHash: function() {
                var hash = this.hash;
                this.hash = this.hashes.pop();
                if (this.options.stringParams) {
                    this.push('{' + hash.contexts.join(',') + '}');
                    this.push('{' + hash.types.join(',') + '}');
                }
                this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
            },
            pushString: function(string) {
                this.pushStackLiteral(this.quotedString(string));
            },
            push: function(expr) {
                this.inlineStack.push(expr);
                return expr;
            },
            pushLiteral: function(value) {
                this.pushStackLiteral(value);
            },
            pushProgram: function(guid) {
                if (guid != null) {
                    this.pushStackLiteral(this.programExpression(guid));
                } else {
                    this.pushStackLiteral(null);
                }
            },
            invokeHelper: function(paramSize, name, isRoot) {
                this.context.aliases.helperMissing = 'helpers.helperMissing';
                this.useRegister('helper');
                var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
                var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
                var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
                if (helper.paramsInit) {
                    lookup += ',' + helper.paramsInit;
                }
                this.push('(' + lookup + ',helper ' + '? helper.call(' + helper.callParams + ') ' + ': helperMissing.call(' + helper.helperMissingParams + '))');
                if (!isRoot) {
                    this.flushInline();
                }
            },
            invokeKnownHelper: function(paramSize, name) {
                var helper = this.setupHelper(paramSize, name);
                this.push(helper.name + ".call(" + helper.callParams + ")");
            },
            invokeAmbiguous: function(name, helperCall) {
                this.context.aliases.functionType = '"function"';
                this.useRegister('helper');
                this.emptyHash();
                var helper = this.setupHelper(0, name, helperCall);
                var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
                var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
                var nextStack = this.nextStack();
                if (helper.paramsInit) {
                    this.pushSource(helper.paramsInit);
                }
                this.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
                this.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
            },
            invokePartial: function(name) {
                var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];
                if (this.options.data) {
                    params.push("data");
                }
                this.context.aliases.self = "this";
                this.push("self.invokePartial(" + params.join(", ") + ")");
            },
            assignToHash: function(key) {
                var value = this.popStack(),
                context,
                type;
                if (this.options.stringParams) {
                    type = this.popStack();
                    context = this.popStack();
                }
                var hash = this.hash;
                if (context) {
                    hash.contexts.push("'" + key + "': " + context);
                }
                if (type) {
                    hash.types.push("'" + key + "': " + type);
                }
                hash.values.push("'" + key + "': (" + value + ")");
            },
            compiler: JavaScriptCompiler,
            compileChildren: function(environment, options) {
                var children = environment.children,
                child, compiler;
                for (var i = 0,
                l = children.length; i < l; i++) {
                    child = children[i];
                    compiler = new this.compiler();
                    var index = this.matchExistingProgram(child);
                    if (index == null) {
                        this.context.programs.push('');
                        index = this.context.programs.length;
                        child.index = index;
                        child.name = 'program' + index;
                        this.context.programs[index] = compiler.compile(child, options, this.context);
                        this.context.environments[index] = child;
                    } else {
                        child.index = index;
                        child.name = 'program' + index;
                    }
                }
            },
            matchExistingProgram: function(child) {
                for (var i = 0,
                len = this.context.environments.length; i < len; i++) {
                    var environment = this.context.environments[i];
                    if (environment && environment.equals(child)) {
                        return i;
                    }
                }
            },
            programExpression: function(guid) {
                this.context.aliases.self = "this";
                if (guid == null) {
                    return "self.noop";
                }
                var child = this.environment.children[guid],
                depths = child.depths.list,
                depth;
                var programParams = [child.index, child.name, "data"];
                for (var i = 0,
                l = depths.length; i < l; i++) {
                    depth = depths[i];
                    if (depth === 1) {
                        programParams.push("depth0");
                    } else {
                        programParams.push("depth" + (depth - 1));
                    }
                }
                return (depths.length === 0 ? "self.program(": "self.programWithDepth(") + programParams.join(", ") + ")";
            },
            register: function(name, val) {
                this.useRegister(name);
                this.pushSource(name + " = " + val + ";");
            },
            useRegister: function(name) {
                if (!this.registers[name]) {
                    this.registers[name] = true;
                    this.registers.list.push(name);
                }
            },
            pushStackLiteral: function(item) {
                return this.push(new Literal(item));
            },
            pushSource: function(source) {
                if (this.pendingContent) {
                    this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
                    this.pendingContent = undefined;
                }
                if (source) {
                    this.source.push(source);
                }
            },
            pushStack: function(item) {
                this.flushInline();
                var stack = this.incrStack();
                if (item) {
                    this.pushSource(stack + " = " + item + ";");
                }
                this.compileStack.push(stack);
                return stack;
            },
            replaceStack: function(callback) {
                var prefix = '',
                inline = this.isInline(),
                stack,
                createdStack,
                usedLiteral;
                if (inline) {
                    var top = this.popStack(true);
                    if (top instanceof Literal) {
                        stack = top.value;
                        usedLiteral = true;
                    } else {
                        createdStack = !this.stackSlot;
                        var name = !createdStack ? this.topStackName() : this.incrStack();
                        prefix = '(' + this.push(name) + ' = ' + top + '),';
                        stack = this.topStack();
                    }
                } else {
                    stack = this.topStack();
                }
                var item = callback.call(this, stack);
                if (inline) {
                    if (!usedLiteral) {
                        this.popStack();
                    }
                    if (createdStack) {
                        this.stackSlot--;
                    }
                    this.push('(' + prefix + item + ')');
                } else {
                    if (!/^stack/.test(stack)) {
                        stack = this.nextStack();
                    }
                    this.pushSource(stack + " = (" + prefix + item + ");");
                }
                return stack;
            },
            nextStack: function() {
                return this.pushStack();
            },
            incrStack: function() {
                this.stackSlot++;
                if (this.stackSlot > this.stackVars.length) {
                    this.stackVars.push("stack" + this.stackSlot);
                }
                return this.topStackName();
            },
            topStackName: function() {
                return "stack" + this.stackSlot;
            },
            flushInline: function() {
                var inlineStack = this.inlineStack;
                if (inlineStack.length) {
                    this.inlineStack = [];
                    for (var i = 0,
                    len = inlineStack.length; i < len; i++) {
                        var entry = inlineStack[i];
                        if (entry instanceof Literal) {
                            this.compileStack.push(entry);
                        } else {
                            this.pushStack(entry);
                        }
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length;
            },
            popStack: function(wrapped) {
                var inline = this.isInline(),
                item = (inline ? this.inlineStack: this.compileStack).pop();
                if (!wrapped && (item instanceof Literal)) {
                    return item.value;
                } else {
                    if (!inline) {
                        if (!this.stackSlot) {
                            throw new Exception('Invalid stack pop');
                        }
                        this.stackSlot--;
                    }
                    return item;
                }
            },
            topStack: function(wrapped) {
                var stack = (this.isInline() ? this.inlineStack: this.compileStack),
                item = stack[stack.length - 1];
                if (!wrapped && (item instanceof Literal)) {
                    return item.value;
                } else {
                    return item;
                }
            },
            quotedString: function(str) {
                return '"' + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029') + '"';
            },
            setupHelper: function(paramSize, name, missingParams) {
                var params = [],
                paramsInit = this.setupParams(paramSize, params, missingParams);
                var foundHelper = this.nameLookup('helpers', name, 'helper');
                return {
                    params: params,
                    paramsInit: paramsInit,
                    name: foundHelper,
                    callParams: ["depth0"].concat(params).join(", "),
                    helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
                };
            },
            setupOptions: function(paramSize, params) {
                var options = [],
                contexts = [],
                types = [],
                param,
                inverse,
                program;
                options.push("hash:" + this.popStack());
                if (this.options.stringParams) {
                    options.push("hashTypes:" + this.popStack());
                    options.push("hashContexts:" + this.popStack());
                }
                inverse = this.popStack();
                program = this.popStack();
                if (program || inverse) {
                    if (!program) {
                        this.context.aliases.self = "this";
                        program = "self.noop";
                    }
                    if (!inverse) {
                        this.context.aliases.self = "this";
                        inverse = "self.noop";
                    }
                    options.push("inverse:" + inverse);
                    options.push("fn:" + program);
                }
                for (var i = 0; i < paramSize; i++) {
                    param = this.popStack();
                    params.push(param);
                    if (this.options.stringParams) {
                        types.push(this.popStack());
                        contexts.push(this.popStack());
                    }
                }
                if (this.options.stringParams) {
                    options.push("contexts:[" + contexts.join(",") + "]");
                    options.push("types:[" + types.join(",") + "]");
                }
                if (this.options.data) {
                    options.push("data:data");
                }
                return options;
            },
            setupParams: function(paramSize, params, useRegister) {
                var options = '{' + this.setupOptions(paramSize, params).join(',') + '}';
                if (useRegister) {
                    this.useRegister('options');
                    params.push('options');
                    return 'options=' + options;
                } else {
                    params.push(options);
                    return '';
                }
            }
        };
        var reservedWords = ("break else new var" + " case finally return void" + " catch for switch while" + " continue function this with" + " default if throw" + " delete in try" + " do instanceof typeof" + " abstract enum int short" + " boolean export interface static" + " byte extends long super" + " char final native synchronized" + " class float package throws" + " const goto private transient" + " debugger implements protected volatile" + " double import public let yield").split(" ");
        var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
        for (var i = 0,
        l = reservedWords.length; i < l; i++) {
            compilerWords[reservedWords[i]] = true;
        }
        JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
            if (!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)) {
                return true;
            }
            return false;
        };
        __exports__ = JavaScriptCompiler;
        return __exports__;
    })(__module2__, __module5__);
    var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
        "use strict";
        var __exports__;
        var Handlebars = __dependency1__;
        var AST = __dependency2__;
        var Parser = __dependency3__.parser;
        var parse = __dependency3__.parse;
        var Compiler = __dependency4__.Compiler;
        var compile = __dependency4__.compile;
        var precompile = __dependency4__.precompile;
        var JavaScriptCompiler = __dependency5__;
        var _create = Handlebars.create;
        var create = function() {
            var hb = _create();
            hb.compile = function(input, options) {
                return compile(input, options, hb);
            };
            hb.precompile = function(input, options) {
                return precompile(input, options, hb);
            };
            hb.AST = AST;
            hb.Compiler = Compiler;
            hb.JavaScriptCompiler = JavaScriptCompiler;
            hb.Parser = Parser;
            hb.parse = parse;
            return hb;
        };
        Handlebars = create();
        Handlebars.create = create;
        __exports__ = Handlebars;
        return __exports__;
    })(__module1__, __module7__, __module8__, __module10__, __module11__);
    return __module0__;
})();;

/****** FILE: mir/javascript/libs/imagesloaded.js *****/

(function() {
    function e() {}
    function t(e, t) {
        for (var n = e.length; n--;) if (e[n].listener === t) return n;
        return - 1
    }
    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
    r = this,
    o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    },
    i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    },
    i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {},
        t[e] = n),
        t || n
    },
    i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
        o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n: {
            listener: n,
            once: !1
        });
        return this
    },
    i.on = n("addListener"),
    i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    },
    i.once = n("addOnceListener"),
    i.defineEvent = function(e) {
        return this.getListeners(e),
        this
    },
    i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    },
    i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    },
    i.off = n("removeListener"),
    i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    },
    i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    },
    i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener: this.addListener,
        s = e ? this.removeListeners: this.addListeners;
        if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) o.call(this, t, n[i]);
        else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    },
    i.removeEvent = function(e) {
        var t, n = typeof e,
        i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    },
    i.removeAllListeners = n("removeEvent"),
    i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s) if (s.hasOwnProperty(r)) for (i = s[r].length; i--;) n = s[r][i],
        n.once === !0 && this.removeListener(e, n.listener),
        o = n.listener.apply(this, t || []),
        o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    },
    i.trigger = n("emitEvent"),
    i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    },
    i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e,
        this
    },
    i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue: !0
    },
    i._getEvents = function() {
        return this._events || (this._events = {})
    },
    e.noConflict = function() {
        return r.EventEmitter = o,
        e
    },
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [],
    function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e: this.EventEmitter = e
}).call(this),
function(e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t,
        n
    }
    var n = document.documentElement,
    i = function() {};
    n.addEventListener ? i = function(e, t, n) {
        e.addEventListener(t, n, !1)
    }: n.attachEvent && (i = function(e, n, i) {
        e[n + i] = i.handleEvent ?
        function() {
            var n = t(e);
            i.handleEvent.call(i, n)
        }: function() {
            var n = t(e);
            i.call(e, n)
        },
        e.attachEvent("on" + n, e[n + i])
    });
    var r = function() {};
    n.removeEventListener ? r = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    }: n.detachEvent && (r = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch(i) {
            e[t + n] = void 0
        }
    });
    var o = {
        bind: i,
        unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
} (this),
function(e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"],
    function(n, i) {
        return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
} (window,
function(e, t, n) {
    function i(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    function r(e) {
        return "[object Array]" === d.call(e)
    }
    function o(e) {
        var t = [];
        if (r(e)) t = e;
        else if ("number" == typeof e.length) for (var n = 0,
        i = e.length; i > n; n++) t.push(e[n]);
        else t.push(e);
        return t
    }
    function s(e, t, n) {
        if (! (this instanceof s)) return new s(e, t);
        "string" == typeof e && (e = document.querySelectorAll(e)),
        this.elements = o(e),
        this.options = i({},
        this.options),
        "function" == typeof t ? n = t: i(this.options, t),
        n && this.on("always", n),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred);
        var r = this;
        setTimeout(function() {
            r.check()
        })
    }
    function c(e) {
        this.img = e
    }
    function f(e) {
        this.src = e,
        v[e] = this
    }
    var a = e.jQuery,
    u = e.console,
    h = u !== void 0,
    d = Object.prototype.toString;
    s.prototype = new t,
    s.prototype.options = {},
    s.prototype.getImages = function() {
        this.images = [];
        for (var e = 0,
        t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            var i = n.nodeType;
            if (i && (1 === i || 9 === i || 11 === i)) for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                var c = r[o];
                this.addImage(c)
            }
        }
    },
    s.prototype.addImage = function(e) {
        var t = new c(e);
        this.images.push(t)
    },
    s.prototype.check = function() {
        function e(e, r) {
            return t.options.debug && h && u.log("confirm", e, r),
            t.progress(e),
            n++,
            n === i && t.complete(),
            !0
        }
        var t = this,
        n = 0,
        i = this.images.length;
        if (this.hasAnyBroken = !1, !i) return this.complete(),
        void 0;
        for (var r = 0; i > r; r++) {
            var o = this.images[r];
            o.on("confirm", e),
            o.check()
        }
    },
    s.prototype.progress = function(e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function() {
            t.emit("progress", t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
    },
    s.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail": "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function() {
            if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                var n = t.hasAnyBroken ? "reject": "resolve";
                t.jqDeferred[n](t)
            }
        })
    },
    a && (a.fn.imagesLoaded = function(e, t) {
        var n = new s(this, e, t);
        return n.jqDeferred.promise(a(this))
    }),
    c.prototype = new t,
    c.prototype.check = function() {
        var e = v[this.img.src] || new f(this.img.src);
        if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"),
        void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        void 0;
        var t = this;
        e.on("confirm",
        function(e, n) {
            return t.confirm(e.isLoaded, n),
            !0
        }),
        e.check()
    },
    c.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emit("confirm", this, t)
    };
    var v = {};
    return f.prototype = new t,
    f.prototype.check = function() {
        if (!this.isChecked) {
            var e = new Image;
            n.bind(e, "load", this),
            n.bind(e, "error", this),
            e.src = this.src,
            this.isChecked = !0
        }
    },
    f.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    },
    f.prototype.onload = function(e) {
        this.confirm(!0, "onload"),
        this.unbindProxyEvents(e)
    },
    f.prototype.onerror = function(e) {
        this.confirm(!1, "onerror"),
        this.unbindProxyEvents(e)
    },
    f.prototype.confirm = function(e, t) {
        this.isConfirmed = !0,
        this.isLoaded = e,
        this.emit("confirm", this, t)
    },
    f.prototype.unbindProxyEvents = function(e) {
        n.unbind(e.target, "load", this),
        n.unbind(e.target, "error", this)
    },
    s
});;

/****** FILE: mir/javascript/libs/masonry.pkgd.min.js *****/
!
function(a) {
    function b() {}
    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }
        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                        k = a.data(j, b);
                        if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                            var l = k[e].apply(k, g);
                            if (void 0 !== l) return l
                        } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b: function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b),
                e(a, b)
            },
            a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
} (window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b,
        c
    }
    var c = document.documentElement,
    d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    }: c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ?
        function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        }: function() {
            var c = b(a);
            d.call(a, c)
        },
        a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    }: c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch(d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f: a.eventie = f
} (this),
function(a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a))
    }
    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d()
    }
    function d() {
        b.isReady = !0;
        for (var a = 0,
        c = g.length; c > a; a++) {
            var d = g[a];
            d()
        }
    }
    function e(e) {
        return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)),
        b
    }
    var f = a.document,
    g = [];
    b.isReady = !1,
    "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
} (window),
function() {
    function a() {}
    function b(a, b) {
        for (var c = a.length; c--;) if (a[c].listener === b) return c;
        return - 1
    }
    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
    e = this,
    f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    },
    d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    },
    d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {},
        b[a] = c),
        b || c
    },
    d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
        f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c: {
            listener: c,
            once: !1
        });
        return this
    },
    d.on = c("addListener"),
    d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    },
    d.once = c("addOnceListener"),
    d.defineEvent = function(a) {
        return this.getListeners(a),
        this
    },
    d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    },
    d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    },
    d.off = c("removeListener"),
    d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    },
    d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    },
    d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener: this.addListener,
        g = a ? this.removeListeners: this.addListeners;
        if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;) f.call(this, b, c[d]);
        else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    },
    d.removeEvent = function(a) {
        var b, c = typeof a,
        d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    },
    d.removeAllListeners = c("removeEvent"),
    d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;) c = g[e][d],
        c.once === !0 && this.removeListener(a, c.listener),
        f = c.listener.apply(this, b || []),
        f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    },
    d.trigger = c("emitEvent"),
    d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    },
    d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a,
        this
    },
    d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue: !0
    },
    d._getEvents = function() {
        return this._events || (this._events = {})
    },
    a.noConflict = function() {
        return e.EventEmitter = f,
        a
    },
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [],
    function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a: e.EventEmitter = a
}.call(this),
function(a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a]) return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0,
            f = c.length; f > e; e++) if (b = c[e] + a, "string" == typeof d[b]) return b
        }
    }
    var c = "Webkit Moz ms Ms O".split(" "),
    d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [],
    function() {
        return b
    }) : "object" == typeof exports ? module.exports = b: a.getStyleProperty = b
} (window),
function(a) {
    function b(a) {
        var b = parseFloat(a),
        c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }
    function c() {}
    function d() {
        for (var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        },
        b = 0, c = g.length; c > b; b++) {
            var d = g[b];
            a[d] = 0
        }
        return a
    }
    function e(c) {
        function e() {
            if (!m) {
                m = !0;
                var d = a.getComputedStyle;
                if (j = function() {
                    var a = d ?
                    function(a) {
                        return d(a, null)
                    }: function(a) {
                        return a.currentStyle
                    };
                    return function(b) {
                        var c = a(b);
                        return c || f("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                        c
                    }
                } (), k = c("boxSizing")) {
                    var e = document.createElement("div");
                    e.style.width = "200px",
                    e.style.padding = "1px 2px 3px 4px",
                    e.style.borderStyle = "solid",
                    e.style.borderWidth = "1px 2px 3px 4px",
                    e.style[k] = "border-box";
                    var g = document.body || document.documentElement;
                    g.appendChild(e);
                    var h = j(e);
                    l = 200 === b(h.width),
                    g.removeChild(e)
                }
            }
        }
        function h(a) {
            if (e(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                var c = j(a);
                if ("none" === c.display) return d();
                var f = {};
                f.width = a.offsetWidth,
                f.height = a.offsetHeight;
                for (var h = f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k]), m = 0, n = g.length; n > m; m++) {
                    var o = g[m],
                    p = c[o];
                    p = i(a, p);
                    var q = parseFloat(p);
                    f[o] = isNaN(q) ? 0 : q
                }
                var r = f.paddingLeft + f.paddingRight,
                s = f.paddingTop + f.paddingBottom,
                t = f.marginLeft + f.marginRight,
                u = f.marginTop + f.marginBottom,
                v = f.borderLeftWidth + f.borderRightWidth,
                w = f.borderTopWidth + f.borderBottomWidth,
                x = h && l,
                y = b(c.width);
                y !== !1 && (f.width = y + (x ? 0 : r + v));
                var z = b(c.height);
                return z !== !1 && (f.height = z + (x ? 0 : s + w)),
                f.innerWidth = f.width - (r + v),
                f.innerHeight = f.height - (s + w),
                f.outerWidth = f.width + t,
                f.outerHeight = f.height + u,
                f
            }
        }
        function i(b, c) {
            if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
            var d = b.style,
            e = d.left,
            f = b.runtimeStyle,
            g = f && f.left;
            return g && (f.left = b.currentStyle.left),
            d.left = c,
            c = d.pixelLeft,
            d.left = e,
            g && (f.left = g),
            c
        }
        var j, k, l, m = !1;
        return h
    }
    var f = "undefined" == typeof console ? c: function(a) {
        console.error(a)
    },
    g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property")) : a.getSize = e(a.getStyleProperty)
} (window),
function(a) {
    function b(a, b) {
        return a[g](b)
    }
    function c(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }
    function d(a, b) {
        c(a);
        for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++) if (d[e] === a) return ! 0;
        return ! 1
    }
    function e(a, d) {
        return c(a),
        b(a, d)
    }
    var f, g = function() {
        if (a.matchesSelector) return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
            var e = b[c],
            f = e + "MatchesSelector";
            if (a[f]) return f
        }
    } ();
    if (g) {
        var h = document.createElement("div"),
        i = b(h, "div");
        f = i ? b: e
    } else f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [],
    function() {
        return f
    }) : "object" == typeof exports ? module.exports = f: window.matchesSelector = f
} (Element.prototype),
function(a) {
    function b(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }
    function c(a) {
        for (var b in a) return ! 1;
        return b = null,
        !0
    }
    function d(a) {
        return a.replace(/([A-Z])/g,
        function(a) {
            return "-" + a.toLowerCase()
        })
    }
    function e(a, e, f) {
        function h(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            },
            this._create())
        }
        var i = f("transition"),
        j = f("transform"),
        k = i && j,
        l = !!f("perspective"),
        m = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        } [i],
        n = ["transform", "transition", "transitionDuration", "transitionProperty"],
        o = function() {
            for (var a = {},
            b = 0,
            c = n.length; c > b; b++) {
                var d = n[b],
                e = f(d);
                e && e !== d && (a[d] = e)
            }
            return a
        } ();
        b(h.prototype, a.prototype),
        h.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            },
            this.css({
                position: "absolute"
            })
        },
        h.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        },
        h.prototype.getSize = function() {
            this.size = e(this.element)
        },
        h.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = o[c] || c;
                b[d] = a[c]
            }
        },
        h.prototype.getPosition = function() {
            var a = g(this.element),
            b = this.layout.options,
            c = b.isOriginLeft,
            d = b.isOriginTop,
            e = parseInt(a[c ? "left": "right"], 10),
            f = parseInt(a[d ? "top": "bottom"], 10);
            e = isNaN(e) ? 0 : e,
            f = isNaN(f) ? 0 : f;
            var h = this.layout.size;
            e -= c ? h.paddingLeft: h.paddingRight,
            f -= d ? h.paddingTop: h.paddingBottom,
            this.position.x = e,
            this.position.y = f
        },
        h.prototype.layoutPosition = function() {
            var a = this.layout.size,
            b = this.layout.options,
            c = {};
            b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""),
            b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""),
            this.css(c),
            this.emitEvent("layout", [this])
        };
        var p = l ?
        function(a, b) {
            return "translate3d(" + a + "px, " + b + "px, 0)"
        }: function(a, b) {
            return "translate(" + a + "px, " + b + "px)"
        };
        h.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
            d = this.position.y,
            e = parseInt(a, 10),
            f = parseInt(b, 10),
            g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
            i = b - d,
            j = {},
            k = this.layout.options;
            h = k.isOriginLeft ? h: -h,
            i = k.isOriginTop ? i: -i,
            j.transform = p(h, i),
            this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        },
        h.prototype.goTo = function(a, b) {
            this.setPosition(a, b),
            this.layoutPosition()
        },
        h.prototype.moveTo = k ? h.prototype._transitionTo: h.prototype.goTo,
        h.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10),
            this.position.y = parseInt(b, 10)
        },
        h.prototype._nonTransition = function(a) {
            this.css(a.to),
            a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        },
        h.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0,
            a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to),
            this.css(a.to),
            this.isTransitioning = !0
        };
        var q = j && d(j) + ",opacity";
        h.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: q,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(m, this, !1))
        },
        h.prototype.transition = h.prototype[i ? "_transition": "_nonTransition"],
        h.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        },
        h.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var r = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        h.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                d = r[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                    var e = b.onEnd[d];
                    e.call(this),
                    delete b.onEnd[d]
                }
                this.emitEvent("transitionEnd", [this])
            }
        },
        h.prototype.disableTransition = function() {
            this.removeTransitionStyles(),
            this.element.removeEventListener(m, this, !1),
            this.isTransitioning = !1
        },
        h.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var s = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return h.prototype.removeTransitionStyles = function() {
            this.css(s)
        },
        h.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element),
            this.emitEvent("remove", [this])
        },
        h.prototype.remove = function() {
            if (!i || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.on("transitionEnd",
            function() {
                return a.removeElem(),
                !0
            }),
            this.hide()
        },
        h.prototype.reveal = function() {
            delete this.isHidden,
            this.css({
                display: ""
            });
            var a = this.layout.options;
            this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0
            })
        },
        h.prototype.hide = function() {
            this.isHidden = !0,
            this.css({
                display: ""
            });
            var a = this.layout.options;
            this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function() {
                        this.isHidden && this.css({
                            display: "none"
                        })
                    }
                }
            })
        },
        h.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        },
        h
    }
    var f = a.getComputedStyle,
    g = f ?
    function(a) {
        return f(a, null)
    }: function(a) {
        return a.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (a.Outlayer = {},
    a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
} (window),
function(a) {
    function b(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }
    function c(a) {
        return "[object Array]" === l.call(a)
    }
    function d(a) {
        var b = [];
        if (c(a)) b = a;
        else if (a && "number" == typeof a.length) for (var d = 0,
        e = a.length; e > d; d++) b.push(a[d]);
        else b.push(a);
        return b
    }
    function e(a, b) {
        var c = n(b, a); - 1 !== c && b.splice(c, 1)
    }
    function f(a) {
        return a.replace(/(.)([A-Z])/g,
        function(a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    }
    function g(c, g, l, n, o, p) {
        function q(a, c) {
            if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return void(i && i.error("Bad " + this.constructor.namespace + " element: " + a));
            this.element = a,
            this.options = b({},
            this.constructor.defaults),
            this.option(c);
            var d = ++r;
            this.element.outlayerGUID = d,
            s[d] = this,
            this._create(),
            this.options.isInitLayout && this.layout()
        }
        var r = 0,
        s = {};
        return q.namespace = "outlayer",
        q.Item = p,
        q.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        },
        b(q.prototype, l.prototype),
        q.prototype.option = function(a) {
            b(this.options, a)
        },
        q.prototype._create = function() {
            this.reloadItems(),
            this.stamps = [],
            this.stamp(this.options.stamp),
            b(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize()
        },
        q.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        },
        q.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                h = new c(g, this);
                d.push(h)
            }
            return d
        },
        q.prototype._filterFindItemElements = function(a) {
            a = d(a);
            for (var b = this.options.itemSelector,
            c = [], e = 0, f = a.length; f > e; e++) {
                var g = a[e];
                if (m(g)) if (b) {
                    o(g, b) && c.push(g);
                    for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i])
                } else c.push(g)
            }
            return c
        },
        q.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        },
        q.prototype.layout = function() {
            this._resetLayout(),
            this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant: !this._isLayoutInited;
            this.layoutItems(this.items, a),
            this._isLayoutInited = !0
        },
        q.prototype._init = q.prototype.layout,
        q.prototype._resetLayout = function() {
            this.getSize()
        },
        q.prototype.getSize = function() {
            this.size = n(this.element)
        },
        q.prototype._getMeasurement = function(a, b) {
            var c, d = this.options[a];
            d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0
        },
        q.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a),
            this._layoutItems(a, b),
            this._postLayout()
        },
        q.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        },
        q.prototype._layoutItems = function(a, b) {
            function c() {
                d.emitEvent("layoutComplete", [d, a])
            }
            var d = this;
            if (!a || !a.length) return void c();
            this._itemsOn(a, "layout", c);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f],
                i = this._getItemLayoutPosition(h);
                i.item = h,
                i.isInstant = b || h.isLayoutInstant,
                e.push(i)
            }
            this._processLayoutQueue(e)
        },
        q.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        },
        q.prototype._processLayoutQueue = function(a) {
            for (var b = 0,
            c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        },
        q.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        },
        q.prototype._postLayout = function() {
            this.resizeContainer()
        },
        q.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        },
        q.prototype._getContainerSize = k,
        q.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth: c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth),
                a = Math.max(a, 0),
                this.element.style[b ? "width": "height"] = a + "px"
            }
        },
        q.prototype._itemsOn = function(a, b, c) {
            function d() {
                return e++,
                e === f && c.call(g),
                !0
            }
            for (var e = 0,
            f = a.length,
            g = this,
            h = 0,
            i = a.length; i > h; h++) {
                var j = a[h];
                j.on(b, d)
            }
        },
        q.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        },
        q.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        },
        q.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0,
                c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        },
        q.prototype.unstamp = function(a) {
            if (a = this._find(a)) for (var b = 0,
            c = a.length; c > b; b++) {
                var d = a[b];
                e(d, this.stamps),
                this.unignore(d)
            }
        },
        q.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
        },
        q.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0,
                b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        },
        q.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
            b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        },
        q.prototype._manageStamp = k,
        q.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
            c = this._boundingRect,
            d = n(a),
            e = {
                left: b.left - c.left - d.marginLeft,
                top: b.top - c.top - d.marginTop,
                right: c.right - b.right - d.marginRight,
                bottom: c.bottom - b.bottom - d.marginBottom
            };
            return e
        },
        q.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        },
        q.prototype.bindResize = function() {
            this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0)
        },
        q.prototype.unbindResize = function() {
            this.isResizeBound && c.unbind(a, "resize", this),
            this.isResizeBound = !1
        },
        q.prototype.onresize = function() {
            function a() {
                b.resize(),
                delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        },
        q.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        },
        q.prototype.needsResizeLayout = function() {
            var a = n(this.element),
            b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        },
        q.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)),
            b
        },
        q.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        },
        q.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(b, !0),
                this.reveal(b),
                this.layoutItems(c)
            }
        },
        q.prototype.reveal = function(a) {
            var b = a && a.length;
            if (b) for (var c = 0; b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        },
        q.prototype.hide = function(a) {
            var b = a && a.length;
            if (b) for (var c = 0; b > c; c++) {
                var d = a[c];
                d.hide()
            }
        },
        q.prototype.getItem = function(a) {
            for (var b = 0,
            c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        },
        q.prototype.getItems = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c],
                    f = this.getItem(e);
                    f && b.push(f)
                }
                return b
            }
        },
        q.prototype.remove = function(a) {
            a = d(a);
            var b = this.getItems(a);
            if (b && b.length) {
                this._itemsOn(b, "remove",
                function() {
                    this.emitEvent("removeComplete", [this, b])
                });
                for (var c = 0,
                f = b.length; f > c; c++) {
                    var g = b[c];
                    g.remove(),
                    e(g, this.items)
                }
            }
        },
        q.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "",
            a.position = "",
            a.width = "";
            for (var b = 0,
            c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete s[e],
            delete this.element.outlayerGUID,
            j && j.removeData(this.element, this.constructor.namespace)
        },
        q.data = function(a) {
            var b = a && a.outlayerGUID;
            return b && s[b]
        },
        q.create = function(a, c) {
            function d() {
                q.apply(this, arguments)
            }
            return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype),
            d.prototype.constructor = d,
            d.defaults = b({},
            q.defaults),
            b(d.defaults, c),
            d.prototype.settings = {},
            d.namespace = a,
            d.data = q.data,
            d.Item = function() {
                p.apply(this, arguments)
            },
            d.Item.prototype = new p,
            g(function() {
                for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                    var l, m = c[g],
                    n = m.getAttribute(e);
                    try {
                        l = n && JSON.parse(n)
                    } catch(o) {
                        i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id: "") + ": " + o);
                        continue
                    }
                    var p = new d(m, l);
                    j && j.data(m, a, p)
                }
            }),
            j && j.bridget && j.bridget(a, d),
            d
        },
        q.Item = p,
        q
    }
    var h = a.document,
    i = a.console,
    j = a.jQuery,
    k = function() {},
    l = Object.prototype.toString,
    m = "function" == typeof HTMLElement || "object" == typeof HTMLElement ?
    function(a) {
        return a instanceof HTMLElement
    }: function(a) {
        return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
    },
    n = Array.prototype.indexOf ?
    function(a, b) {
        return a.indexOf(b)
    }: function(a, b) {
        for (var c = 0,
        d = a.length; d > c; c++) if (a[c] === b) return c;
        return - 1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : "object" == typeof exports ? module.exports = g(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
} (window),
function(a) {
    function b(a, b) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        },
        d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter,
            this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth),
            this.cols = Math.max(this.cols, 1)
        },
        d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode: this.element,
            c = b(a);
            this.containerWidth = c && c.innerWidth
        },
        d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
            d = b && 1 > b ? "round": "ceil",
            e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = {
                x: this.columnWidth * h,
                y: g
            },
            j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        },
        d.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        },
        d.prototype._manageStamp = function(a) {
            var c = b(a),
            d = this._getElementOffset(a),
            e = this.options.isOriginLeft ? d.left: d.right,
            f = e + c.outerWidth,
            g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1,
            h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top: d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        },
        d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()),
            a
        },
        d.prototype._getContainerFitWidth = function() {
            for (var a = 0,
            b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        },
        d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(),
            a !== this.containerWidth
        },
        d
    }
    var c = Array.prototype.indexOf ?
    function(a, b) {
        return a.indexOf(b)
    }: function(a, b) {
        for (var c = 0,
        d = a.length; d > c; c++) {
            var e = a[c];
            if (e === b) return c
        }
        return - 1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size")) : a.Masonry = b(a.Outlayer, a.getSize)
} (window);;

/****** FILE: mir/javascript/libs/picturefill.js *****/

(function(w) {
    "use strict";
    w.picturefillLoaded = false;
    w.picturefillCallback = null;
    w.picturefill = function() {
        var ps = w.document.getElementsByTagName("span");
        var switched = false;
        for (var i = 0,
        il = ps.length; i < il; i++) {
            if (ps[i].getAttribute("data-picture") !== null) {
                var sources = ps[i].getElementsByTagName("span"),
                matches = [];
                for (var j = 0,
                jl = sources.length; j < jl; j++) {
                    var media = sources[j].getAttribute("data-media");
                    if (!media || (w.matchMedia && w.matchMedia(media).matches)) {
                        matches.push(sources[j]);
                    }
                }
                var picImg = ps[i].getElementsByTagName("img")[0];
                if (matches.length) {
                    var matchedEl = matches.pop();
                    if (!picImg || picImg.parentNode.nodeName === "NOSCRIPT") {
                        picImg = w.document.createElement("img");
                        picImg.alt = ps[i].parentNode.getAttribute("data-alt");
                    } else if (matchedEl === picImg.parentNode) {
                        continue;
                    }
                    if (matchedEl.getAttribute("data-width")) {
                        picImg.width = matchedEl.getAttribute("data-width");
                    }
                    if (matchedEl.getAttribute("data-height")) {
                        picImg.height = matchedEl.getAttribute("data-height");
                    }
                    picImg.setAttribute("itemprop", "image");
                    picImg.removeAttribute("style");
                    picImg.src = matchedEl.getAttribute("data-src");
                    matchedEl.appendChild(picImg);
                    switched = true;
                    if (picturefillCallback) {
                        picturefillCallback();
                    }
                } else if (picImg) {
                    picImg.parentNode.removeChild(picImg);
                }
            }
        }
    };
    w.load = function() {
        w.picturefill();
        w.picturefillLoaded = true;
    };
    if (w.addEventListener) {
        w.addEventListener("resize", w.picturefill, false);
        w.addEventListener("DOMContentLoaded",
        function() {
            w.load();
            w.removeEventListener("load", w.load, false);
        },
        false);
        w.addEventListener("load", w.load, false);
    } else if (w.attachEvent) {
        w.attachEvent("onload", w.load);
    }
} (this));
window.matchMedia = window.matchMedia || (function(e, f) {
    var c, a = e.documentElement,
    b = a.firstElementChild || a.firstChild,
    d = e.createElement("body"),
    g = e.createElement("div");
    g.id = "mq-test-1";
    g.style.cssText = "position:absolute;top:-100em";
    d.appendChild(g);
    return function(h) {
        g.innerHTML = '&shy;<style media="' + h + '"> #mq-test-1 { width: 42px; }</style>';
        a.insertBefore(d, b);
        c = g.offsetWidth == 42;
        a.removeChild(d);
        return {
            matches: c,
            media: h
        }
    }
})(document);;

/****** FILE: mir/javascript/libs/jsclock-0.8.min.js *****/

(function() {
    var $;
    $ = jQuery;
    $.fn.jsclock = function(sTime, oConfig) {
        var sCurrentTime, that;
        that = this;
        sCurrentTime = "";
        if (oConfig == null) {
            oConfig = {};
        }
        $.fn.jsclock.getTime = function() {
            return sCurrentTime;
        };
        $.fn.jsclock.stopClock = function() {
            return oConfig.stopClock = true;
        };
        $.fn.jsclock.startClock = function() {
            if (oConfig.stopClock === true) {
                oConfig.stopClock = false;
                if (sTime === null) {
                    return that.jsclock(sTime, oConfig);
                } else {
                    return that.jsclock(sCurrentTime, oConfig);
                }
            }
        };
        $.fn.jsclock.toggleClock = function() {
            if (oConfig.stopClock === true) {
                return that.jsclock.startClock();
            } else {
                return that.jsclock.stopClock();
            }
        };
        return this.each(function() {
            var aTime, clientClock, clockwork, iCurrentCenti, iCurrentHour, iCurrentMinute, iCurrentSecond, rValidateTimeString, reverseClockwork, updateTimeString;
            if (typeof sTime === "object") {
                oConfig = sTime;
                sTime = null;
            }
            iCurrentHour = 0;
            iCurrentMinute = 0;
            iCurrentSecond = 0;
            iCurrentCenti = 0;
            updateTimeString = function() {
                var addLeadingZero;
                addLeadingZero = function(iTimeStringFragment) {
                    if (iTimeStringFragment < 10 && iTimeStringFragment.length !== 2) {
                        iTimeStringFragment = "0" + iTimeStringFragment;
                    }
                    return iTimeStringFragment;
                };
                iCurrentHour = addLeadingZero(iCurrentHour);
                iCurrentMinute = addLeadingZero(iCurrentMinute);
                iCurrentSecond = addLeadingZero(iCurrentSecond);
                iCurrentCenti = addLeadingZero(iCurrentCenti);
                if (oConfig.showCenti === true) {
                    sCurrentTime = "" + iCurrentHour + ":" + iCurrentMinute + ":" + iCurrentSecond + ":" + iCurrentCenti;
                } else {
                    sCurrentTime = "" + iCurrentHour + ":" + iCurrentMinute + ":" + iCurrentSecond;
                }
                that.html(sCurrentTime);
                if (oConfig.stopClock === true) {
                    return clearTimeout(clockLoop);
                }
            };
            rValidateTimeString = /^(([01][0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9](:[0-9][0-9])?$/i;
            if (oConfig.countdown != null) {
                if (typeof oConfig.countdown !== "boolean") {
                    that.html('countdown value must either be "true" or "false".');
                    return false;
                }
            }
            if (oConfig.showCenti != null) {
                if (typeof oConfig.showCenti !== "boolean") {
                    that.html('showCenti value must either be "true" or "false".');
                    return false;
                }
            }
            if (oConfig.callback != null) {
                if (typeof oConfig.callback !== "function") {
                    that.html('callback must be a function!');
                    return false;
                }
            }
            if (sTime) {
                if (rValidateTimeString.test(sTime)) {
                    aTime = sTime.split(':');
                    iCurrentHour = aTime[0];
                    iCurrentMinute = aTime[1];
                    iCurrentSecond = aTime[2];
                    iCurrentCenti = aTime[3];
                    if (oConfig.countdown === true) {
                        reverseClockwork = function() {
                            var baseclock, fullclock, simpleclock;
                            baseclock = function() {
                                if (iCurrentSecond > 0) {
                                    return iCurrentSecond--;
                                } else {
                                    iCurrentSecond = 59;
                                    if (iCurrentMinute > 0) {
                                        return iCurrentMinute--;
                                    } else {
                                        iCurrentMinute = 59;
                                        if (iCurrentHour > 0) {
                                            return iCurrentHour--;
                                        } else {
                                            if (typeof oConfig.callback === "function") {
                                                oConfig.callback.call(that);
                                                return clearTimeout(clockloop);
                                            } else {
                                                return iCurrentHour = 23;
                                            }
                                        }
                                    }
                                }
                            };
                            simpleclock = function() {
                                var clockloop;
                                updateTimeString();
                                baseclock();
                                return clockloop = setTimeout(simpleclock, 1000);
                            };
                            fullclock = function() {
                                var clockloop;
                                if (iCurrentCenti > 0) {
                                    iCurrentCenti--;
                                } else {
                                    iCurrentCenti = 99;
                                    baseclock();
                                }
                                updateTimeString();
                                return clockloop = setTimeout(fullclock, 10);
                            };
                            if (oConfig.showCenti === true) {
                                return fullclock();
                            } else {
                                return simpleclock();
                            }
                        };
                        return reverseClockwork();
                    } else {
                        clockwork = function() {
                            var baseclock, fullclock, simpleclock;
                            baseclock = function() {
                                if (iCurrentSecond < 59) {
                                    return iCurrentSecond++;
                                } else {
                                    iCurrentSecond = 0;
                                    if (iCurrentMinute < 59) {
                                        return iCurrentMinute++;
                                    } else {
                                        iCurrentMinute = 0;
                                        if (iCurrentHour < 23) {
                                            return iCurrentHour++;
                                        } else {
                                            return iCurrentHour = 0;
                                        }
                                    }
                                }
                            };
                            simpleclock = function() {
                                var clockLoop;
                                baseclock();
                                updateTimeString();
                                return clockLoop = setTimeout(simpleclock, 1000);
                            };
                            fullclock = function() {
                                var clockLoop;
                                if (iCurrentCenti < 99) {
                                    iCurrentCenti++;
                                } else {
                                    iCurrentCenti = 0;
                                    baseclock();
                                }
                                updateTimeString();
                                return clockLoop = setTimeout(fullclock, 10);
                            };
                            if (oConfig.showCenti === true) {
                                return fullclock();
                            } else {
                                return simpleclock();
                            }
                        };
                        return clockwork();
                    }
                } else {
                    return that.html('Time string <strong>must</strong> be either in the format "HH:MM:SS" or in the "HH:MM:SS:CC" format. Hours, minutes and seconds are all <strong>REQUIRED</strong>, as are the leading zeros, if any. Centiseconds are entirely optional, even if showCenti is true.');
                }
            } else {
                if (oConfig.countdown === true) {
                    that.html('You must specify a time string to countdown from!');
                    return false;
                } else {
                    clientClock = function() {
                        var baseclock, fullclock, simpleclock;
                        baseclock = function() {
                            var oCurrentDate;
                            oCurrentDate = new Date();
                            iCurrentHour = oCurrentDate.getHours();
                            iCurrentMinute = oCurrentDate.getMinutes();
                            return iCurrentSecond = oCurrentDate.getSeconds();
                        };
                        simpleclock = function() {
                            var clockLoop;
                            baseclock();
                            updateTimeString();
                            return clockLoop = setTimeout(simpleclock, 1000);
                        };
                        fullclock = function() {
                            var bFirstTime, oCurrentDate;
                            if (typeof bFirstTime != "undefined" && bFirstTime !== null) {
                                if (iCurrentCenti < 99) {
                                    iCurrentCenti++;
                                } else {
                                    iCurrentCenti = 0;
                                    baseclock();
                                }
                            } else {
                                baseclock();
                                oCurrentDate = new Date();
                                iCurrentCenti = oCurrentDate.getMilliseconds().toString().substr(0, 2);
                                bFirstTime = true;
                            }
                            updateTimeString();
                            return setTimeout(fullclock, 10);
                        };
                        if (oConfig.showCenti === true) {
                            return fullclock();
                        } else {
                            return simpleclock();
                        }
                    };
                    return clientClock();
                }
            }
        });
    };
}).call(this);;

/****** FILE: mir/javascript/Hero.js *****/

var Hero = function() {
    var container;
    var images;
    var callback;
    var total;
    var index = -1;
    var current = 0;
    var init = function(callbackFunc) {
        callback = callbackFunc;
        container = $(".hero");
        if (container.is("*")) {
            images = container.find(".hero-image");
            total = images.size();
            if (total > 1) {
                container.css("cursor", "pointer").click(function() {
                    swap();
                });
            }
            $(window).on('resize', invalidate);
            $('body').focus(invalidate).blur(invalidate);
            swap();
        } else {
            callbackFunc();
        }
    };
    function invalidate() {
        images.each(function() {
            center($(this));
        });
    }
    var swap = function() {
        index++;
        current = index % total;
        images.each(function(i) {
            if (i === current) {
                fadeInn($(this));
            } else {
                fadeOut($(this));
            }
        });
    };
    var center = function(item) {
        var offset = container.width() - item.find("img").width();
        item.css("margin-left", Math.round(offset / 2));
    };
    var fadeInn = function(item) {
        if (item.hasClass('loaded')) {
            center(item);
            if (Modernizr.csstransitions) {
                item.removeClass('fade--out').addClass('fade--inn');
            } else {
                item.stop().animate({
                    opacity: 1
                },
                {
                    duration: tweenSpeed * 1000,
                    ease: tweenEase
                });
            }
        } else {
            Loader.add();
            item.attr('data-picture', '').addClass('loaded');
            window.picturefill();
            item.imagesLoaded().always(function() {
                center(item);
                if (Modernizr.csstransitions) {
                    item.removeClass('fade').removeClass('fade--out').addClass('fade--inn');
                } else {
                    item.stop().animate({
                        opacity: 1
                    },
                    {
                        duration: tweenSpeed * 1000,
                        ease: tweenEase
                    });
                }
                if (callback != undefined) {
                    callback();
                    callback = undefined;
                }
                Loader.force();
            });
        }
    };
    var fadeOut = function fadeOut(item) {
        if (Modernizr.csstransitions) {
            item.removeClass('fade--inn').addClass("fade--out");
        } else {
            item.stop().animate({
                opacity: 0
            },
            {
                duration: tweenSpeed * 1000,
                ease: tweenEase
            });
        }
    };
    return {
        init: init,
        invalidate: invalidate
    };
} ();;

/****** FILE: mir/javascript/Grid.js *****/

var Grid = function() {
    var grid;
    var stage;
    var columns;
    var threshold = 600;
    var lazyTotal;
    var init = function() {
        grid = $('.grid');
        if (grid.is("*")) {
            stage = $(window);
            lazyTotal = $('.grid .lazy').size();
            if ($(".ss_class_WorkHolder").is("*")) {
                columns = [4, 2];
            }
            if ($(".ss_class_GalleryPage").is("*")) {
                columns = [2, 2];
            }
            stage.on('resize', invalidate).scroll(findVisible);
            $('body').focus(invalidate).blur(invalidate);
            invalidate();
        }
    };
    var invalidate = function() {
        findVisible();
        if (stage.width() > 568) {
            currentColumns = columns[0];
        } else {
            currentColumns = columns[1];
        }
        grid.masonry({
            transitionDuration: "0.0s",
            columnWidth: grid.width() / currentColumns
        });
    };
    var findVisible = function() {
        if (lazyTotal > 0) {
            var elementY;
            var windowHeight = stage.height();
            var scrollTop = stage.scrollTop();
            $('.grid .lazy').each(function(i, e) {
                elementY = $(e).offset().top;
                if (elementY > (scrollTop - threshold) && elementY < (scrollTop + windowHeight + threshold)) {
                    lazyTotal--;
                    loadVisible($(e));
                }
            });
        }
    };
    var loadVisible = function(item) {
        Loader.add();
        item.removeClass("lazy").find(".image").attr("data-picture", "");
        window.picturefill();
        item.imagesLoaded().progress(function(instance, image) {
            if (image.isLoaded) {
                fadeInn(item);
            } else {
                item.remove();
            }
        }).always(function() {
            Loader.force();
        });
    };
    var fadeInn = function(item) {
        if (Modernizr.csstransitions) {
            item.removeClass('fade').removeClass('fade--out').addClass('fade--inn');
        } else {
            element.stop().animate({
                opacity: 1
            },
            {
                duration: tweenSpeed * 1000,
                ease: tweenEase
            });
        }
    };
    return {
        init: init
    }
} ();;

/****** FILE: mir/javascript/script.js *****/

var tweenEase = "easeInOutQuad";
var tweenSpeed = 1.00;
var Handheld = function() {
    var handheldState = false;
    var menu;
    var init = function() {
        menu = $(".handheld-menu");
        $(".handheld-menu-button").click(function() {
            if (handheldState) {
                hide();
            } else {
                show();
            }
        });
    };
    var show = function() {
        menu.stop().show().animate({
            opacity: 1
        },
        {
            duration: 600,
            ease: tweenEase
        });
        window.addEventListener("touchmove", onWindowScroll, false);
        handheldState = true;
    };
    var hide = function() {
        menu.stop().animate({
            opacity: 0
        },
        {
            duration: 600,
            ease: tweenEase,
            complete: onHide
        });
        window.removeEventListener("touchmove", onWindowScroll);
        handheldState = false;
    };
    var onHide = function() {
        $(".handheld-menu").hide();
    };
    var onWindowScroll = function(event) {
        event.preventDefault();
    };
    return {
        init: init
    };
} ();
var Loader = function() {
    var currentAlpha = 0;
    var hasLoader = false;
    var loader;
    var addItr = 0;
    var add = function() {
        addItr++;
        if (hasLoader) {
            return;
        }
        loader = $('page--loader');
        hasLoader = true;
        currentAlpha = 0;
        onAddLoader();
    };
    var onAddLoader = function() {
        if (hasLoader) {
            if (Modernizr.cssanimations) {
                $(".page--loader").addClass("flash");
            } else {
                currentAlpha = currentAlpha === 0 ? 1 : 0;
                loader.animate({
                    opacity: currentAlpha
                },
                {
                    duration: tweenSpeed * 1000,
                    delay: 2000,
                    ease: tweenEase,
                    complete: onAddLoader
                });
            }
        }
    };
    var kill = function() {
        addItr--;
        if (addItr <= 1) {
            if (Modernizr.cssanimations) {
                $(".page--loader").removeClass("flash");
            } else {
                $(".page--loader").stop().animate({
                    opacity: 0
                },
                {
                    duration: tweenSpeed * 1000,
                    ease: tweenEase
                });
            }
            hasLoader = false;
        }
    };
    var force = function() {
        addItr = 0;
        kill();
    };
    return {
        add: add,
        kill: kill,
        force: force
    };
} ();
var Lightning = function() {
    var CONST_MARGIN = 48;
    var isOn = false;
    var isLoaded;
    var data;
    var lightning;
    var frame;
    var image;
    var stage;
    var body;
    var html;
    var imageWidth;
    var imageHeight;
    var ratio;
    var margin;
    var newWidth;
    var newHeight;
    var captionHeight;
    var init = function() {
        if ($(".ss_class_WorkHolder").is("*") && !Modernizr.touch) {
            $(".grid .item a").click(onOpen);
            window.onpopstate = onAddressChange;
            html = $('html');
            stage = $(window);
            stage.on("resize", invalidate);
            body = $('body');
            body.focus(invalidate);
            body.blur(invalidate);
        }
    };
    var invalidate = function() {
        if (isOn) {
            if (isLoaded) {
                if (imageWidth >= imageHeight) {
                    newWidth = stage.width() - margin;
                    newHeight = newWidth / ratio;
                    if (newHeight + margin > stage.height()) {
                        newHeight = stage.height() - margin;
                        newWidth = newHeight * ratio;
                    }
                } else {
                    newHeight = stage.height() - margin;
                    newWidth = newHeight * ratio;
                    if (newWidth > stage.width()) {
                        newWidth = stage.width() - margin;
                        newHeight = newWidth / ratio;
                    }
                }
                newWidth = Math.round(newWidth);
                newHeight = Math.round(newHeight);
                image.css({
                    "width": newWidth,
                    "height": newHeight
                });
                frame.css({
                    "width": newWidth,
                    "height": newHeight + captionHeight,
                    "left": ((stage.width() - newWidth) / 2) + 14,
                    "top": (stage.height() - newHeight - captionHeight) / 2
                });
            } else {
                if (stage.width() < stage.height()) {
                    newWidth = stage.width() - CONST_MARGIN;
                } else {
                    newWidth = stage.height() - CONST_MARGIN;
                }
                if (newWidth > 960) {
                    newWidth = 960;
                }
                newHeight = Math.round((newWidth / 16) * 9) + captionHeight;
                frame.css({
                    "width": newWidth,
                    "height": newHeight,
                    "left": ((stage.width() - newWidth) / 2) + 14,
                    "top": (stage.height() - newHeight) / 2
                });
            }
        }
    };
    var onOpen = function(event) {
        event.preventDefault();
        data = {
            id: $(this).parent().attr("id"),
            url: $(this).attr("data-href"),
            title: $(this).attr("data-title"),
            client: $(this).attr("data-client"),
            year: $(this).attr("data-year"),
            uri: $(this).attr("data-url"),
            videoID: $(this).attr("data-videoID"),
            isVideo: $(this).attr("data-isVideo") === "1",
            template: $(this).attr("data-isVideo") === "1" ? "#lightning-video": "#lightning-image"
        };
        Loader.add();
        if (Modernizr.history) {
            history.pushState(null, null, data.uri);
        }
        try {
            ga('send', 'pageview', {
                'page': data.uri,
                'title': data.title
            });
        } catch(e) {}
        var source = $(data.template).html();
        var template = Handlebars.compile(source);
        body.append(template(data));
        if ($(document).height() > stage.height()) {
            var scrollTop = (html.scrollTop()) ? html.scrollTop() : body.scrollTop();
            html.addClass('no-scroll').css('top', -scrollTop);
            body.css("margin-right", $.scrollbarWidth());
        }
        lightning = $(".lightning");
        frame = lightning.find(".frame");
        captionHeight = lightning.find(".caption").height() + 14;
        margin = captionHeight + CONST_MARGIN;
        lightning.css({
            "top": scrollTop
        });
        stage.bind('keyup', onKeyUp);
        lightning.bind('click touchend', onClose);
        show();
        isOn = true;
        if (data.isVideo) {
            invalidate();
            onLoadedComplete();
        } else {
            lightning.imagesLoaded(onLoaded);
        }
    };
    function show() {
        if (Modernizr.csstransitions) {
            lightning.removeClass("fade--out").addClass('fade--inn');
        } else {
            lightning.animate({
                opacity: 1
            },
            {
                duration: tweenSpeed * 1000,
                ease: tweenEase
            });
        }
    }
    var _hideTimeout;
    function hide() {
        var scrollTop = parseInt(html.css('top'));
        html.removeClass('no-scroll').scrollTop( - scrollTop);
        body.css("margin-right", 0).scrollTop( - scrollTop);
        if (Modernizr.csstransitions) {
            lightning.removeClass('fade--inn').addClass("fade--out");
            _hideTimeout = setTimeout(onHideEnd, 1200);
        } else {
            lightning.animate({
                opacity: 0
            },
            {
                duration: tweenSpeed * 1000,
                ease: tweenEase,
                complete: onHideEnd
            });
        }
    }
    var onHideEnd = function() {
        if (Modernizr.csstransitions) {
            clearTimeout(_hideTimeout);
        }
        lightning.remove();
        lightning = null;
        image = null;
        margin = -1;
        captionHeight = -1;
        imageWidth = -1;
        imageHeight = -1;
        ratio = -1;
    };
    var onLoaded = function() {
        image = $(".lightning .image img");
        imageWidth = image.width();
        imageHeight = image.height();
        ratio = imageWidth / imageHeight;
        isLoaded = true;
        onLoadedComplete();
    };
    var onLoadedComplete = function() {
        invalidate($(window).width(), $(window).height());
        Loader.force();
        if (Modernizr.csstransitions) {
            frame.addClass('fade--inn');
        } else {
            frame.animate({
                opacity: 1
            },
            {
                duration: tweenSpeed * 1000,
                ease: tweenEase
            });
        }
    };
    var onClose = function() {
        isOn = false;
        isLoaded = false;
        $(window).unbind('keyup');
        lightning.unbind('touchend');
        lightning.unbind('click');
        if (Modernizr.history) {
            history.pushState(null, null, "/work/#" + data.id);
        }
        hide();
    };
    var onAddressChange = function() {
        if (isOn) {
            onClose();
        }
    };
    var onKeyUp = function(event) {
        if (event.keyCode == 27) {
            onClose();
        }
    };
    return {
        init: init,
        invalidate: invalidate
    };
} ();
var ImagePage = function() {
    var init = function() {
        if ($(".ss_class_StaffPage").is("*") || $(".ss_class_ErrorPage").is("*") || $(".ss_class_WorkPage").is("*")) {
            var main = $(".main");
            main.find(".image").attr("data-picture", "");
            window.picturefill();
            main.imagesLoaded().always(function() {
                if (Modernizr.csstransitions) {
                    main.removeClass('fade').removeClass('fade--out').addClass('fade--inn');
                } else {
                    main.animate({
                        opacity: 1
                    },
                    {
                        duration: tweenSpeed * 1000,
                        ease: tweenEase
                    });
                }
            });
        }
    };
    return {
        init: init
    };
} ();
var StaffLazy = function() {
    var threshold = 500;
    var init = function() {
        if ($(".ss_class_StaffHolder").is("*")) {
            $(window).scroll(onScroll);
            findVisible();
        }
    };
    var findVisible = function() {
        var windowHeight = $(window).height(),
        scrollTop = $(window).scrollTop(),
        element,
        elementY,
        top,
        bottom;
        $('.mobil .lazy').each(function(i, e) {
            element = $(e);
            elementY = element.offset().top;
            top = scrollTop - threshold;
            bottom = scrollTop + windowHeight + threshold;
            if (elementY > top && elementY < bottom) {
                loadVisible(element);
            }
        });
    };
    function onScroll() {
        findVisible();
    }
    function loadVisible(element) {
        Loader.add();
        element.removeClass("lazy");
        var image = element.find(".image");
        image.attr("data-picture", "");
        window.picturefill();
        image.imagesLoaded().progress(function(instance, image) {
            if (image.isLoaded) {
                element.animate({
                    opacity: 1
                },
                {
                    duration: tweenSpeed * 1000,
                    ease: tweenEase
                });
            } else {
                element.remove();
            }
        }).always(function(instance) {
            Loader.force();
        });
    }
    return {
        init: init
    }
} ();
$(document).ready(function() {
    Hero.init(heroDone);
    function heroDone() {
        Handheld.init();
        Lightning.init();
        Grid.init();
        ImagePage.init();
        StaffLazy.init();
    }
    var clock = $(".current-time span");
    if (clock.is("*")) {
        clock.load("info/philosophy/time/", null,
        function(response, status) {
            if (status == "error") {
                $(".current-time").remove();
            } else {
                var json = JSON.parse(response);
                $(this).jsclock(json.time);
            }
        });
    }
}); (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] ||
    function() { (i[r].q = i[r].q || []).push(arguments)
    },
    i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-11393387-1', 'auto');
ga('send', 'pageview');
$.scrollbarWidth = function() {
    var a, b, c;
    if (c === undefined) {
        a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
        b = a.children();
        c = b.innerWidth() - b.height(99).innerWidth();
        a.remove()
    }
    return c
};;