!function() {
    var t, e, l = ["https://aq.qq.com/cn2/manage/mbtoken/hijack_sec_js_report", "https://zyjc.sec.qq.com/dom", "https://aq.qq.com/cn2/manage/mbtoken/hijack_pv_report", "https://aq.qq.com/cn2/manage/mbtoken/hijack_xss_report", "https://aq.qq.com/cn2/manage/mbtoken/hijack_mv_js_report"], r = Math.random(), c = .01, u = !1;
    function f(t, e) {
        for (var n = new Array, o = 0; o < t.length; o++)
            if ("&" == t.charAt(o)) {
                var a = [3, 4, 5, 9]
                  , r = 0;
                for (var c in a) {
                    var i = a[c];
                    if (o + i <= t.length) {
                        var m = t.substr(o, i).toLowerCase();
                        if (e[m]) {
                            n.push(e[m]),
                            o = o + i - 1,
                            r = 1;
                            break
                        }
                    }
                }
                0 == r && n.push(t.charAt(o))
            } else
                n.push(t.charAt(o));
        return n.join("")
    }
    function g(t) {
        return document.createElement(t)
    }
    function q(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    }
    function d(t) {
        var e, n, o, a, r, c, i, m, p, s = t.url, u = t.data, d = "aq_form" + 1e17 * Math.random(), h = (e = s,
        n = d,
        o = "post",
        (a = g("form")).action = e,
        a.method = o,
        a.target = n,
        a.style.display = "none",
        a), l = (r = d,
        (c = g("iframe")).name = r,
        c.src = "javascript:void(0);",
        c.style.display = "none",
        c);
        for (var f in document.body.appendChild(l),
        l.contentWindow.name = d,
        u)
            h.appendChild((m = u[i = f],
            p = void 0,
            (p = g("input")).name = i,
            p.value = m,
            p));
        document.body.appendChild(h),
        h && h.submit(),
        setTimeout(function() {
            q(h),
            q(l)
        }, 2e3)
    }
    function v(t) {
        (new Image).src = t
    }
    !function() {
        for (var t = new Object, e = "'\"<>`script:daex/hml;bs64,", n = 0; n < e.length; n++) {
            for (var o = e.charAt(n), a = o.charCodeAt(), r = a, c = a.toString(16), i = 0; i < 7 - a.toString().length; i++)
                r = "0" + r;
            t["&#" + a + ";"] = o,
            t["&#" + r] = o,
            t["&#x" + c] = o
        }
        t["&lt"] = "<",
        t["&gt"] = ">",
        t["&quot"] = '"';
        var m = location.href
          , p = document.referrer;
        m = decodeURIComponent(f(m, t)),
        p = decodeURIComponent(f(p, t));
        var s = new RegExp("['\"<>`]|script:|data:text/html;base64,");
        if (s.test(m) || s.test(p)) {
            var u = l[1]
              , d = new Image;
            Math.random() < .1 && v(l[3] + "?v=2&u=" + encodeURIComponent(m) + "&r=" + encodeURIComponent(p)),
            d.src = u + "?v=2&u=" + encodeURIComponent(m) + "&r=" + encodeURIComponent(p),
            h = location.host,
            (/(\.|^)(wegame|tgp\.qq)\.com$/i.test(h) || /(\.|^)we\.game$/i.test(h)) && !/(\.|^)developer\.wegame\.com$/i.test(h) || (m = (m = m.replace(/['\"<>`]|script:/gi, "M")).replace(/data:text\/html;base64,/gi, "data:text/plain;base64,"),
            location.href = encodeURI(m))
        }
        var h
    }(),
    function(i, m, p) {
        function t(t, e, n) {
            var o, a, r, c = {
                bid: e,
                childUrl: "",
                parentUrl: ""
            };
            try {
                c.childUrl = p.href
            } catch (t) {}
            try {
                c.parentUrl = parent.location.href
            } catch (t) {}
            if (1 == n)
                try {
                    parent != i && s(parent.document, "datapp", c)
                } catch (t) {}
            else {
                try {
                    s(m, "datapt", c),
                    parent != i && (o = parent.document,
                    a = "datapp",
                    void (x((r = c).parentUrl) && s(o, a, r)))
                } catch (t) {}
                try {
                    parent != i && function(t) {
                        if (x(t.parentUrl)) {
                            var e = [];
                            e.push("beframed::url"),
                            y(e, "beframed", t)
                        }
                    }(c)
                } catch (t) {}
            }
        }
        function y(t, e, n) {
            var o;
            l[0],
            new Image;
            if (t.push("childUrl::" + encodeURIComponent(n.childUrl)),
            t.push("parentUrl::" + encodeURIComponent(n.parentUrl)),
            !u && r < c && (o = t.join("|"),
            v(l[2] + "?host=" + encodeURIComponent(location.host) + "&data=" + o + "&hp=1&tk=" + +new Date),
            u = !0),
            Math.random() < .9)
                return !1;
            var a = {
                id: n.bid,
                imark: e,
                data: t.join("|")
            };
            return Math.random() < 1 && (a.dom = encodeURIComponent(document.documentElement.outerHTML),
            a.plgs = encodeURIComponent(function() {
                var t = navigator.plugins
                  , e = "";
                if (t && t.length) {
                    e = [];
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n].name
                          , a = t[n].description;
                        e.push(o + "::" + a)
                    }
                    e = e.join(";")
                }
                return e
            }())),
            d({
                data: a,
                url: l[0]
            }),
            !0
        }
        function s(t, e, n) {
            var o, a, r, c, i, m, p, s, u = function(t) {
                for (var e, n, o, a, r = t.getElementsByTagName("script"), c = [], i = 0; i < r.length; i++)
                    e = r[i],
                    (n = e.src) && c.push(n);
                return o = b(c, x),
                a = U("script"),
                C(o, a)
            }(t), d = (o = t,
            a = U("iframe"),
            j(o, "IFRAME", function(t) {
                return t.src
            }, x, a)), h = (r = t,
            c = U("frame"),
            j(r, "FRAME", function(t) {
                return t.src
            }, x, c)), l = (i = t,
            m = U("embed"),
            j(i, "EMBED", function(t) {
                return t.src
            }, x, m)), f = (p = t,
            s = U("img"),
            j(p, "IMG", function(t) {
                return t.src
            }, x, s)), g = function(t) {
                for (var e, n, o, a, r = t.getElementsByTagName("source"), c = [], i = 0; i < r.length; i++)
                    e = r[i],
                    (n = e.src) && c.push(n);
                return o = b(c, x),
                a = U("source"),
                C(o, a)
            }(t), q = function(t) {
                for (var e, n, o, a, r = t.getElementsByTagName("video"), c = [], i = 0; i < r.length; i++)
                    e = r[i],
                    (n = e.src) && c.push(n);
                return o = b(c, x),
                a = U("video"),
                C(o, a)
            }(t), v = function(t) {
                for (var e, n, o, a, r = t.getElementsByTagName("object"), c = [], i = 0; i < r.length; i++)
                    e = r[i],
                    (n = e.data) && c.push(n);
                return o = b(c, x),
                a = U("object"),
                C(o, a)
            }(t), w = u.concat(d, h, f, l, g, q, v);
            if (w.length <= 0)
                return !1;
            y(w = function(t) {
                var e = t.slice(0)
                  , n = [];
                e.sort(),
                n.push(e[0]);
                for (var o = 1; o < e.length; o += 1)
                    e[o] != e[o - 1] && n.push(e[o]);
                return n
            }(w), e, n)
        }
        function b(t, e) {
            for (var n = [], o = 0; o < t.length; ++o) {
                var a = t[o];
                e(a) && n.push(a)
            }
            return n
        }
        function x(t) {
            var e, n, o, a, r = function(t) {
                var e = /^https?:\/\/([\w\-]+\.[\w\-.]+)/i.exec(t);
                if (!e)
                    return;
                return e[1]
            }(t);
            return !!r && (e = /(\.|^)(hm\.baidu|fyeds[0-9]|cpcwe|qq|paipai|soso|wenwen|tenpay|macromedia|gtimg|qstatic|qqmail|paipaiimg|qqgames|pengyou|foxmail|qzoneapp|qzone|qplus|imqq|tqapp|tencent|3366|21mmo|taotao|imrworldwide|idqqimg|17roco|expo2010china|fangqq|tencentmind|tencity|yingkebicheng|zhangzhongxing|expovol|otaworld|gzyunxun|heyyo|himoral|himorale|myrtx|qqwinner|redian|sjkx|rtxonline|nbaso|paipai\.500wan|qqjapan|qq\.salewell|sogou|weiyun|flzhan|wechat|webplat\.ied|qcloud)\.com$/i,
            n = /(\.|^)(qgsk\.yximg|flzhan|qq\.com|gtimg|gtimg\.com|qlogo|foxmail\.com|gtimg\.com|url|qpic|tencent\.com|expo2010|expo|himorale\.com|nbaso\.com|qqtest\.com|qq\.ucar|rtx\.com|soso\.com|tcimage|taoche)\.cn$/i,
            o = /(\.|^)(5999|gongyi)\.net$/i,
            a = /(\.|^)(himorale\.com\.hk|api\.cpcwe\.com|tencent\.com\.hk|qq\.chinacache\.net|qq\.com\.fastcdn\.com|qq\.com\.lxdns\.com|qq\.fastcdn\.com|soso\.com\.lxdns\.com|motu\.pagechoice\.net|ope\.tanx\.com|dap\.gentags\.net|widget\.weibo\.com)$/i,
            !(/^xui.ptlogin2?\.?$/i.test(r) || e.test(r) || n.test(r) || o.test(r) || a.test(r)))
        }
        function U(e) {
            return function(t) {
                return e + "::" + encodeURIComponent(t)
            }
        }
        function C(t, e) {
            for (var n, o = [], a = 0; a < t.length; ++a)
                n = e(t[a]),
                o.push(n);
            return o
        }
        function j(t, e, n, o, a) {
            return C(b(C(t.getElementsByTagName(e), n), o), a)
        }
        try {
            setTimeout(function() {
                t(0, 100, 0),
                function(t) {
                    function e(t) {
                        var e = document.createElement("script");
                        e.src = "https://captcha.gtimg.com/public/2/web-token.0.0.1.js",
                        e.defer = !0,
                        e.onerror = t || function() {}
                        ,
                        document.body ? document.body.appendChild(e) : document.head.appendChild(e)
                    }
                    try {
                        var n = location.host;
                        if ("zj.qq.com" != n && "sh.qq.com" != n && "hb.qq.com" != n && "henan.qq.com" != n && "auto.qq.com" != n && "js.qq.com" != n && "www.qq.com" != n)
                            return;
                        if (Math.random() > t)
                            return;
                        e(function() {
                            e()
                        })
                    } catch (t) {}
                }(1)
            }, 5e3)
        } catch (t) {}
    }(window, document, location),
    r < c && (t = location.protocol,
    e = "",
    e = 0 <= t.indexOf("https") || 0 <= t.indexOf("HTTPS") ? "https" : 0 <= t.indexOf("http") || 0 <= t.indexOf("HTTP") ? "http" : t,
    v(l[2] + "?host=" + encodeURIComponent(location.host) + "&p=" + encodeURIComponent(e) + "&hp=0&tk=" + +new Date))
}();
