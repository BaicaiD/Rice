(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], Array(25).concat([function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) { n(71), t.exports = n(160) }, function(t, e, n) { n(72), n(91) }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) { t.exports = n.p + "logo/google.png" }, function(t, e, n) { t.exports = n.p + "logo/bing.png" }, function(t, e, n) { t.exports = n.p + "logo/bilibili.png" }, function(t, e, n) { t.exports = n.p + "logo/github.png" }, function(t, e, n) { t.exports = n.p + "logo/zhihu.png" }, function(t, e, n) { t.exports = n.p + "logo/aiqiyi.png" }, function(t, e, n) { t.exports = n.p + "logo/weibo.png" }, function(t, e, n) { t.exports = n.p + "logo/toutiao.png" }, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(19),
            r = n(69),
            o = n.n(r),
            s = {
                install: function(t) {
                    Avatar.push({ appKey: "X2H3RPZB4013", pageId: "Edge", serverUrl: "#", channel: "index", versionName: "1.0.0", versionCode: "100" }), t.DataReport = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var i in n) n[i] = encodeURIComponent(n[i]);
                        Avatar.push(["track", ["HAO_EDGE_NEWPAGE", t, e, n]])
                    }, t.prototype.$dataReport = t.DataReport
                }
            },
            a = (n(122), function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", { staticClass: "App" }, [e("CommonSite"), this._v(" ")], 1)
            });
        a._withStripped = !0;
        var c = function() {};
        c._withStripped = !0;
        var l = {},
            u = (n(124), n(9)),
            p = Object(u.a)(l, c, [], !1, null, "0b1f3c5b", null);
        p.options.__file = "src/components/Search/index.vue";
        var f = p.exports,
            h = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { class: { CommonSite: !0, hide: t.hide } }, [n("nav", [t._l(t.sites, (function(e, i) { return n("a", { key: e.url, style: { visibility: t.dragInfo && t.dragInfo.moving && t.dragInfo.url === e.url ? "hidden" : "visible" }, attrs: { href: e.url, target: "_blank" }, on: { click: function(n) { return t.report(e) }, contextmenu: function(e) { return e.preventDefault(), t.showMenuPop(i, e) }, mousedown: function(n) { return n.preventDefault(), t.dragStart(e, n) }, mouseenter: function(e) { return t.dragEnter(i) } } }, [e.icon ? n("img", { attrs: { src: e.icon, alt: "" } }) : n("div", { staticClass: "icon", style: { backgroundColor: e.color || "#132d23" } }, [t._v(t._s(e.initials))]), t._v(" "), n("p", [t._v(t._s(e.name))]), t._v(" "), n("i", { staticClass: "iconfont", on: { mousedown: function(t) { t.stopPropagation() }, click: function(e) { return e.stopPropagation(), e.preventDefault(), t.showPop(i, e) } } }, [t._v("")])]) })), t._v(" "), t.sites.length <= 7 ? n("div", { staticClass: "add", on: { click: function(e) { return e.stopPropagation(), t.addSite(e) } } }, [n("i", { staticClass: "iconfont" }, [t._v("")])]) : t._e(), t._v(" "), n("span", { on: { click: t.toggleShow } }, [t._v("\r\n      " + t._s(t.hide ? "我的收藏 " : "") + "\r\n      "), n("i", { staticClass: "iconfont" }, [t._v("")])])], 2), t._v(" "), t.dragInfo && t.dragInfo.moving ? n("div", { staticClass: "dragPop", style: { left: t.dragInfo.left, top: t.dragInfo.top } }, [t.dragInfo.icon ? n("img", { attrs: { src: t.dragInfo.icon, alt: "" } }) : n("div", { staticClass: "icon", style: { backgroundColor: t.dragInfo.color || "#132d23" } }, [t._v(t._s(t.dragInfo.initials))]), t._v(" "), n("p", [t._v(t._s(t.dragInfo.name))])]) : t._e(), t._v(" "), n("ul", { directives: [{ name: "show", rawName: "v-show", value: t.pop.show, expression: "pop.show" }], staticClass: "popup", style: { left: t.pop.left, top: t.pop.top } }, [n("li", { on: { click: function(e) { return e.stopPropagation(), t.editSite(e) } } }, [n("i", { staticClass: "iconfont" }, [t._v("")]), t._v("重命名")]), t._v(" "), n("li", { on: { click: t.delSite } }, [n("i", { staticClass: "iconfont" }, [t._v("")]), t._v("删除")])]), t._v(" "), n("div", { directives: [{ name: "show", rawName: "v-show", value: 0 !== t.siteModal.type, expression: "siteModal.type !== 0" }], staticClass: "modal", style: { left: t.siteModal.left, top: t.siteModal.top }, on: { click: function(t) { t.stopPropagation() } } }, [n("i", { staticClass: "iconfont", on: { click: t.hideModal } }, [t._v("")]), t._v(" "), n("h1", [t._v(t._s(1 === t.siteModal.type ? "添加网址" : "重命名网址"))]), t._v(" "), n("label", [t._v("名称")]), t._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model.trim", value: t.siteModal.name, expression: "siteModal.name", modifiers: { trim: !0 } }], ref: "modalName", attrs: { type: "text" }, domProps: { value: t.siteModal.name }, on: { keydown: function(e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.submit(e) }, input: function(e) { e.target.composing || t.$set(t.siteModal, "name", e.target.value.trim()) }, blur: function(e) { return t.$forceUpdate() } } }), t._v(" "), n("label", { directives: [{ name: "show", rawName: "v-show", value: 1 === t.siteModal.type, expression: "siteModal.type === 1" }] }, [t._v("URL")]), t._v(" "), n("input", { directives: [{ name: "show", rawName: "v-show", value: 1 === t.siteModal.type, expression: "siteModal.type === 1" }, { name: "model", rawName: "v-model.trim", value: t.siteModal.url, expression: "siteModal.url", modifiers: { trim: !0 } }], attrs: { type: "text" }, domProps: { value: t.siteModal.url }, on: { keydown: function(e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.submit(e) }, input: function(e) { e.target.composing || t.$set(t.siteModal, "url", e.target.value.trim()) }, blur: function(e) { return t.$forceUpdate() } } }), t._v(" "), n("div", [n("button", { on: { click: t.submit } }, [t._v(t._s(1 === t.siteModal.type ? "添加" : "保存"))]), t._v(" "), n("button", { on: { click: t.hideModal } }, [t._v("取消")])])])])
            };
        h._withStripped = !0;
        var d = [{ name: "Google", icon: n(125), url: "https://www.google.com/" }, { name: "Bing", icon: n(126), url: "https://cn.bing.com/" }, { name: "BiliBili", icon: n(127), url: "https://www.bilibili.com/" }, { name: "Github", icon: n(128), url: "https://github.com/" }, ];

        function m(t) { return function(t) { if (Array.isArray(t)) return g(t) }(t) || function(t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" == typeof t) return g(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(t, e) }(t) || null }

        function g(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i
        }

        function v(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, i)
            }
            return n
        }

        function A(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? v(Object(n), !0).forEach((function(e) { _(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) }))
            }
            return t
        }

        function _(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }
        var w = [],
            k = {
                name: "CommonSite",
                data: function() { return { hide: !1, sites: [], siteModal: { type: 0, left: 0, top: 0, index: -1, name: "", url: "" }, pop: { show: !1, left: 0, top: 0, modalInfo: null }, dragInfo: null } },
                computed: { isDrag: function() { var t = navigator.userAgent; return !(t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1) } },
                created: function() { this.hidePop = this.hidePop.bind(this), this.dragMove = this.dragMove.bind(this), "1" === localStorage.getItem("CommonSiteHide") && (this.hide = !0); var t = JSON.parse(localStorage.getItem("CommonSite"));!t || t.length <= 0 ? this.sites = d : this.sites = t },
                mounted: function() { document.addEventListener("click", this.hidePop, !1), document.addEventListener("keydown", this.hidePop, !1), document.addEventListener("mousemove", this.dragMove, !1), document.addEventListener("mouseup", this.dragEnd, !1) },
                beforeDestroy: function() { document.removeEventListener("click", this.hidePop, !1), document.removeEventListener("keydown", this.hidePop, !1), document.removeEventListener("mousemove", this.dragMove, !1), document.removeEventListener("mouseup", this.dragEnd, !1) },
                methods: {
                    toggleShow: function() { this.hide = !this.hide, localStorage.setItem("CommonSiteHide", this.hide ? "1" : "0") },
                    hideModal: function() { this.siteModal = { type: 0, left: 0, top: 0, index: -1, name: "", url: "" } },
                    addSite: function(t) {
                        var e = this,
                            n = t.currentTarget.getBoundingClientRect(),
                            i = document.documentElement.clientWidth,
                            r = n.left + 210 > i ? i - 210 : n.left;
                        this.siteModal = { type: 1, left: r + "px", top: n.top + "px", index: -1, name: "", url: "" }, setTimeout((function() { e.$refs.modalName.select() }))
                    },
                    submit: function() {
                        if (this.siteModal.name && this.siteModal.url) {
                            if (-1 === this.siteModal.index) { var t = { name: this.siteModal.name, url: this.siteModal.url }; if (-1 !== this.sites.findIndex((function(e) { return e.url.replace(/^https?:\/\//, "") === t.url.replace(/^https?:\/\//, "") }))) return void this.hideModal(); /^https?:\/\//.test(t.url) || (t.url = "http://" + t.url), t.initials = t.url.replace(/^https?:\/\/(www\.)?/, "").substring(0, 1).toUpperCase(), t.color = w[Math.floor(Math.random() * w.length)], this.sites.push(t) } else {
                                var e = A({}, this.sites[this.siteModal.index]);
                                e.name = this.siteModal.name, this.sites.splice(this.siteModal.index, 1, e)
                            }
                            localStorage.setItem("CommonSite", JSON.stringify(this.sites)), this.hideModal()
                        }
                    },
                    showPop: function(t, e) {
                        var n = e.currentTarget.getBoundingClientRect(),
                            i = e.currentTarget.parentNode.getBoundingClientRect(),
                            r = document.documentElement.clientWidth,
                            o = n.left + 86 > r ? r - 86 : n.left;
                        this.pop = { show: !0, left: o + "px", top: n.top + "px", modalInfo: { index: t, left: i.left, top: i.top } }
                    },
                    showMenuPop: function(t, e) {
                        var n = e.currentTarget.getBoundingClientRect(),
                            i = document.documentElement.clientWidth,
                            r = e.clientX + 86 > i ? i - 86 : e.clientX;
                        this.pop = { show: !0, left: r + "px", top: e.clientY + "px", modalInfo: { index: t, left: n.left, top: n.top } }
                    },
                    hidePop: function(t) { "keydown" === t.type && 27 !== t.keyCode || (this.pop = { show: !1, left: 0, top: 0, modalInfo: null }, this.hideModal()) },
                    delSite: function() { this.sites.splice(this.pop.modalInfo.index, 1), localStorage.setItem("CommonSite", JSON.stringify(this.sites)) },
                    editSite: function() {
                        var t = this,
                            e = document.documentElement.clientWidth,
                            n = this.pop.modalInfo.left + 210 > e ? e - 210 : this.pop.modalInfo.left;
                        this.siteModal = { type: 2, left: n + "px", top: this.pop.modalInfo.top + "px", index: this.pop.modalInfo.index, name: this.sites[this.pop.modalInfo.index].name, url: this.sites[this.pop.modalInfo.index].url }, this.pop = { show: !1, left: 0, top: 0, modalInfo: null }, setTimeout((function() { t.$refs.modalName.select() }))
                    },
                    dragStart: function(t, e) {
                        if (0 === e.button && this.isDrag) {
                            var n = e.currentTarget.getBoundingClientRect();
                            this.dragInfo = A(A({}, t), {}, { moving: !1, left: n.left + "px", top: n.top + "px", offsetX: e.clientX - n.left, offsetY: e.clientY - n.top })
                        }
                    },
                    dragMove: function(t) {
                        if (this.dragInfo) {
                            var e = t.clientX - this.dragInfo.offsetX,
                                n = t.clientY - this.dragInfo.offsetY;
                            if (this.dragInfo.moving) this.dragInfo = A(A({}, this.dragInfo), {}, { left: e + "px", top: n + "px" });
                            else {
                                var i = Number(this.dragInfo.left.replace("px", "")),
                                    r = Number(this.dragInfo.top.replace("px", ""));
                                Math.sqrt(Math.pow(e - i, 2) + Math.pow(n - r, 2)) > 3 && (this.dragInfo = A(A({}, this.dragInfo), {}, { moving: !0, left: e + "px", top: n + "px" }))
                            }
                        }
                    },
                    dragEnd: function(t) { this.dragInfo && (this.dragInfo.moving && localStorage.setItem("CommonSite", JSON.stringify(this.sites)), this.dragInfo = null) },
                    dragEnter: function(t) {
                        var e = this;
                        if (this.dragInfo && this.dragInfo.moving) {
                            var n = m(this.sites),
                                i = n.findIndex((function(t) { return t.url === e.dragInfo.url }));
                            t > i ? (n.splice(t + 1, 0, n[i]), n.splice(i, 1)) : (n.splice(t, 0, n[i]), n.splice(i + 1, 1)), this.sites = n
                        }
                    },
                }
            },
            b = (n(1), Object(u.a)(k, h, [], !1, null, "0adcae05", null));
        var y = b.exports,
            x = function() {},
            I = [];
        x._withStripped = !0;
        var E = {},
            C = (n(2), Object(u.a));
        var S = { name: "App", components: { Search: f, CommonSite: y, }, },
            D = (n(3), n(4), Object(u.a)(S, a, [], !1, null));
        var M = D.exports;
        i.a.config.productionTip = !1, i.a.use(o.a), i.a.use(s), new i.a({ el: "#app", render: function(t) { return t(M) } })
    }]), [
        [70, 1, 2]
    ]
]);