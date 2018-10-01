"use strict";

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))),
            i.forEach(function (e) {
                _defineProperty(t, e, n[e])
            })
    }
    return t
}

function _defineProperty(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
}

function _defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
    }
}

function _createClass(t, e, n) {
    return e && _defineProperties(t.prototype, e),
        n && _defineProperties(t, n),
        t
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))),
            i.forEach(function (e) {
                _defineProperty(t, e, n[e])
            })
    }
    return t
}

function _defineProperty(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
}

function _defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
    }
}

function _createClass(t, e, n) {
    return e && _defineProperties(t.prototype, e),
        n && _defineProperties(t, n),
        t
}

function home() {
    function t() {
        $("#line-web").addClass("animate"),
            $("#blob-1").addClass("animate"),
            setTimeout(function () {
                $("#line-mobile").addClass("animate"),
                    $("#blob-2").addClass("animate")
            }, 1e3),
            setTimeout(function () {
                $("#line-dev").addClass("animate"),
                    $("#blob-3").addClass("animate")
            }, 1800)
    }
    var e = $(".poster-home").outerHeight() - 300,
        n = !1;
    $(window).scroll(function () {
        var i = $(window).scrollTop();
        0 == n && i > e && (n = !0,
            t())
    })
}

function work() {
    $(".project").tilt({
        glare: !0,
        maxGlare: .4,
        perspective: 5e3,
        scale: 1.01,
        speed: 3e3
    });
    var t = $(".work-areas").offset().top - 500,
        e = !1;
    $(window).scroll(function () {
        var n = $(window).scrollTop();
        0 == e && n > t && ($(".work-map svg").addClass("animate"),
            e = !0)
    })
}

function project() {
    $.featherlight.defaults.afterClose = function (t) {
            $("body").removeClass("modal-open")
        },
        $.featherlight.defaults.openSpeed = 400,
        $.featherlight.defaults.closeSpeed = 400,
        $(".gallery").featherlightGallery({
            galleryFadeIn: 200,
            galleryFadeOut: 250
        }),
        $(".gallery").on("click", function () {
            $("body").addClass("modal-open")
        })
}

function addScript(t, e) {
    var n = document.getElementById("disqus_thread"),
        i = document.createElement("script");
    i.innerHTML = e,
        n.appendChild(i)
}

function fusionMove() {
    $(window).width() < 1024 ? $("#fusionattach").append($(".wg")) : $("#fusionorigin").append($(".wg"))
}

function article() {
    var t = $(".adsbox"),
        e = document.createElement("script");
    e.setAttribute("id", "_carbonads_js"),
        e.setAttribute("src", "//cdn.carbonads.com/carbon.js?serve=CKYIV5QJ&placement=ivomynttinencom"),
        t.append(e),
        fusionMove(),
        $(window).on("resize", function () {
            fusionMove()
        }),
        $("#wrapfabtest").height() <= 0 && $(".no-fusion").removeClass("d-none"),
        $("body").scrollspy({
            target: "#toc",
            offset: 100
        })
}

function faq() {
    $(".question").click(function () {
        $(this).toggleClass("expanded").next().slideToggle(300)
    })
}

function main() {
    function t() {
        function t() {
            $(".carousel-item").each(function () {
                    window.heights.push($(this).outerHeight())
                }),
                window.tallest = Math.max.apply(null, window.heights),
                $(".carousel-item").each(function () {
                    $(this).css("min-height", tallest + "px")
                })
        }
        window.heights = [],
            window.tallest,
            t(),
            $(window).on("resize orientationchange", function () {
                window.tallest = 0,
                    window.heights.length = 0,
                    $(".carousel-item").each(function () {
                        $(this).css("min-height", "0")
                    }),
                    t()
            })
    }
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href="mailto"]').not(".no-scroll").click(function (t) {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"),
                    e.length && (t.preventDefault(),
                        $("html, body").animate({
                            scrollTop: e.offset().top
                        }, 700, function () {
                            var t = $(e);
                            if (t.focus(),
                                t.is(":focus"))
                                return !1;
                            t.attr("tabindex", "-1"),
                                t.focus()
                        }))
            }
        }),
        $("a[data-go]").click(function () {
            var t = $(this).attr("data-go");
            $(".barba-navigation a").removeClass("active"),
                $(".view-" + t).addClass("active")
        }),
        setTimeout(function () {
            t()
        }, 100)
}! function t(e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("Barba", [], n) : "object" == typeof exports ? exports.Barba = n() : e.Barba = n()
}(this, function () {
    return function (t) {
        function e(i) {
            if (n[i])
                return n[i].exports;
            var o = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(o.exports, o, o.exports, e),
                o.loaded = !0,
                o.exports
        }
        var n = {};
        return e.m = t,
            e.c = n,
            e.p = "http://localhost:8080/dist",
            e(0)
    }([function (t, e, n) {
        "function" != typeof Promise && (window.Promise = n(1));
        var i = {
            version: "1.0.0",
            BaseTransition: n(4),
            BaseView: n(6),
            BaseCache: n(8),
            Dispatcher: n(7),
            HistoryManager: n(9),
            Pjax: n(10),
            Prefetch: n(13),
            Utils: n(5)
        };
        t.exports = i
    }, function (t, e, n) {
        (function (e) {
            ! function (n) {
                function i() {}

                function o(t, e) {
                    return function () {
                        t.apply(e, arguments)
                    }
                }

                function r(t) {
                    if ("object" != typeof this)
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t)
                        throw new TypeError("not a function");
                    this._state = 0,
                        this._handled = !1,
                        this._value = void 0,
                        this._deferreds = [],
                        h(t, this)
                }

                function s(t, e) {
                    for (; 3 === t._state;)
                        t = t._value;
                    if (0 === t._state)
                        return void t._deferreds.push(e);
                    t._handled = !0,
                        f(function () {
                            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                            if (null === n)
                                return void(1 === t._state ? a : l)(e.promise, t._value);
                            var i;
                            try {
                                i = n(t._value)
                            } catch (t) {
                                return void l(e.promise, t)
                            }
                            a(e.promise, i)
                        })
                }

                function a(t, e) {
                    try {
                        if (e === t)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof r)
                                return t._state = 3,
                                    t._value = e,
                                    void c(t);
                            if ("function" == typeof n)
                                return void h(o(n, e), t)
                        }
                        t._state = 1,
                            t._value = e,
                            c(t)
                    } catch (e) {
                        l(t, e)
                    }
                }

                function l(t, e) {
                    t._state = 2,
                        t._value = e,
                        c(t)
                }

                function c(t) {
                    2 === t._state && 0 === t._deferreds.length && f(function () {
                        t._handled || p(t._value)
                    });
                    for (var e = 0, n = t._deferreds.length; e < n; e++)
                        s(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function u(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null,
                        this.onRejected = "function" == typeof e ? e : null,
                        this.promise = n
                }

                function h(t, e) {
                    var n = !1;
                    try {
                        t(function (t) {
                            n || (n = !0,
                                a(e, t))
                        }, function (t) {
                            n || (n = !0,
                                l(e, t))
                        })
                    } catch (t) {
                        if (n)
                            return;
                        n = !0,
                            l(e, t)
                    }
                }
                var d = setTimeout,
                    f = "function" == typeof e && e || function (t) {
                        d(t, 0)
                    },
                    p = function t(e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                    };
                r.prototype.catch = function (t) {
                        return this.then(null, t)
                    },
                    r.prototype.then = function (t, e) {
                        var n = new this.constructor(i);
                        return s(this, new u(t, e, n)),
                            n
                    },
                    r.all = function (t) {
                        var e = Array.prototype.slice.call(t);
                        return new r(function (t, n) {
                            function i(r, s) {
                                try {
                                    if (s && ("object" == typeof s || "function" == typeof s)) {
                                        var a = s.then;
                                        if ("function" == typeof a)
                                            return void a.call(s, function (t) {
                                                i(r, t)
                                            }, n)
                                    }
                                    e[r] = s,
                                        0 == --o && t(e)
                                } catch (t) {
                                    n(t)
                                }
                            }
                            if (0 === e.length)
                                return t([]);
                            for (var o = e.length, r = 0; r < e.length; r++)
                                i(r, e[r])
                        })
                    },
                    r.resolve = function (t) {
                        return t && "object" == typeof t && t.constructor === r ? t : new r(function (e) {
                            e(t)
                        })
                    },
                    r.reject = function (t) {
                        return new r(function (e, n) {
                            n(t)
                        })
                    },
                    r.race = function (t) {
                        return new r(function (e, n) {
                            for (var i = 0, o = t.length; i < o; i++)
                                t[i].then(e, n)
                        })
                    },
                    r._setImmediateFn = function t(e) {
                        f = e
                    },
                    r._setUnhandledRejectionFn = function t(e) {
                        p = e
                    },
                    void 0 !== t && t.exports ? t.exports = r : n.Promise || (n.Promise = r)
            }(this)
        }).call(e, n(2).setImmediate)
    }, function (t, e, n) {
        (function (t, i) {
            function o(t, e) {
                this._id = t,
                    this._clearFn = e
            }
            var r = n(3).nextTick,
                s = Function.prototype.apply,
                a = Array.prototype.slice,
                l = {},
                c = 0;
            e.setTimeout = function () {
                    return new o(s.call(setTimeout, window, arguments), clearTimeout)
                },
                e.setInterval = function () {
                    return new o(s.call(setInterval, window, arguments), clearInterval)
                },
                e.clearTimeout = e.clearInterval = function (t) {
                    t.close()
                },
                o.prototype.unref = o.prototype.ref = function () {},
                o.prototype.close = function () {
                    this._clearFn.call(window, this._id)
                },
                e.enroll = function (t, e) {
                    clearTimeout(t._idleTimeoutId),
                        t._idleTimeout = e
                },
                e.unenroll = function (t) {
                    clearTimeout(t._idleTimeoutId),
                        t._idleTimeout = -1
                },
                e._unrefActive = e.active = function (t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 && (t._idleTimeoutId = setTimeout(function e() {
                        t._onTimeout && t._onTimeout()
                    }, e))
                },
                e.setImmediate = "function" == typeof t ? t : function (t) {
                    var n = c++,
                        i = !(arguments.length < 2) && a.call(arguments, 1);
                    return l[n] = !0,
                        r(function o() {
                            l[n] && (i ? t.apply(null, i) : t.call(null),
                                e.clearImmediate(n))
                        }),
                        n
                },
                e.clearImmediate = "function" == typeof i ? i : function (t) {
                    delete l[t]
                }
        }).call(e, n(2).setImmediate, n(2).clearImmediate)
    }, function (t, e) {
        function n() {
            u && h && (u = !1,
                h.length ? c = h.concat(c) : d = -1,
                c.length && i())
        }

        function i() {
            if (!u) {
                var t = a(n);
                u = !0;
                for (var e = c.length; e;) {
                    for (h = c,
                        c = []; ++d < e;)
                        h && h[d].run();
                    d = -1,
                        e = c.length
                }
                h = null,
                    u = !1,
                    l(t)
            }
        }

        function o(t, e) {
            this.fun = t,
                this.array = e
        }

        function r() {}
        var s = t.exports = {},
            a, l;
        ! function () {
            try {
                a = setTimeout
            } catch (t) {
                a = function () {
                    throw new Error("setTimeout is not defined")
                }
            }
            try {
                l = clearTimeout
            } catch (t) {
                l = function () {
                    throw new Error("clearTimeout is not defined")
                }
            }
        }();
        var c = [],
            u = !1,
            h, d = -1;
        s.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                c.push(new o(t, e)),
                    1 !== c.length || u || a(i, 0)
            },
            o.prototype.run = function () {
                this.fun.apply(null, this.array)
            },
            s.title = "browser",
            s.browser = !0,
            s.env = {},
            s.argv = [],
            s.version = "",
            s.versions = {},
            s.on = r,
            s.addListener = r,
            s.once = r,
            s.off = r,
            s.removeListener = r,
            s.removeAllListeners = r,
            s.emit = r,
            s.binding = function (t) {
                throw new Error("process.binding is not supported")
            },
            s.cwd = function () {
                return "/"
            },
            s.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            },
            s.umask = function () {
                return 0
            }
    }, function (t, e, n) {
        var i = n(5),
            o = {
                oldContainer: void 0,
                newContainer: void 0,
                newContainerLoading: void 0,
                extend: function (t) {
                    return i.extend(this, t)
                },
                init: function (t, e) {
                    var n = this;
                    return this.oldContainer = t,
                        this._newContainerPromise = e,
                        this.deferred = i.deferred(),
                        this.newContainerReady = i.deferred(),
                        this.newContainerLoading = this.newContainerReady.promise,
                        this.start(),
                        this._newContainerPromise.then(function (t) {
                            n.newContainer = t,
                                n.newContainerReady.resolve()
                        }),
                        this.deferred.promise
                },
                done: function () {
                    this.oldContainer.parentNode.removeChild(this.oldContainer),
                        this.newContainer.style.visibility = "visible",
                        this.deferred.resolve()
                },
                start: function () {}
            };
        t.exports = o
    }, function (t, e) {
        var n = {
            getCurrentUrl: function () {
                return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
            },
            cleanLink: function (t) {
                return t.replace(/#.*/, "")
            },
            xhrTimeout: 5e3,
            xhr: function (t) {
                var e = this.deferred(),
                    n = new XMLHttpRequest;
                return n.onreadystatechange = function () {
                        if (4 === n.readyState)
                            return 200 === n.status ? e.resolve(n.responseText) : e.reject(new Error("xhr: HTTP code is not 200"))
                    },
                    n.ontimeout = function () {
                        return e.reject(new Error("xhr: Timeout exceeded"))
                    },
                    n.open("GET", t),
                    n.timeout = this.xhrTimeout,
                    n.setRequestHeader("x-barba", "yes"),
                    n.send(),
                    e.promise
            },
            extend: function (t, e) {
                var n = Object.create(t);
                for (var i in e)
                    e.hasOwnProperty(i) && (n[i] = e[i]);
                return n
            },
            deferred: function () {
                return new function () {
                    this.resolve = null,
                        this.reject = null,
                        this.promise = new Promise(function (t, e) {
                                this.resolve = t,
                                    this.reject = e
                            }
                            .bind(this))
                }
            },
            getPort: function (t) {
                var e = void 0 !== t ? t : window.location.port,
                    n = window.location.protocol;
                return "" != e ? parseInt(e) : "http:" === n ? 80 : "https:" === n ? 443 : void 0
            }
        };
        t.exports = n
    }, function (t, e, n) {
        var i = n(7),
            o = n(5),
            r = {
                namespace: null,
                extend: function (t) {
                    return o.extend(this, t)
                },
                init: function () {
                    var t = this;
                    i.on("initStateChange", function (e, n) {
                            n && n.namespace === t.namespace && t.onLeave()
                        }),
                        i.on("newPageReady", function (e, n, i) {
                            t.container = i,
                                e.namespace === t.namespace && t.onEnter()
                        }),
                        i.on("transitionCompleted", function (e, n) {
                            e.namespace === t.namespace && t.onEnterCompleted(),
                                n && n.namespace === t.namespace && t.onLeaveCompleted()
                        })
                },
                onEnter: function () {},
                onEnterCompleted: function () {},
                onLeave: function () {},
                onLeaveCompleted: function () {}
            };
        t.exports = r
    }, function (t, e) {
        var n = {
            events: {},
            on: function (t, e) {
                this.events[t] = this.events[t] || [],
                    this.events[t].push(e)
            },
            off: function (t, e) {
                t in this.events != !1 && this.events[t].splice(this.events[t].indexOf(e), 1)
            },
            trigger: function (t) {
                if (t in this.events != !1)
                    for (var e = 0; e < this.events[t].length; e++)
                        this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        t.exports = n
    }, function (t, e, n) {
        var i = n(5),
            o = {
                data: {},
                extend: function (t) {
                    return i.extend(this, t)
                },
                set: function (t, e) {
                    this.data[t] = e
                },
                get: function (t) {
                    return this.data[t]
                },
                reset: function () {
                    this.data = {}
                }
            };
        t.exports = o
    }, function (t, e) {
        var n = {
            history: [],
            add: function (t, e) {
                e || (e = void 0),
                    this.history.push({
                        url: t,
                        namespace: e
                    })
            },
            currentStatus: function () {
                return this.history[this.history.length - 1]
            },
            prevStatus: function () {
                var t = this.history;
                return t.length < 2 ? null : t[t.length - 2]
            }
        };
        t.exports = n
    }, function (t, e, n) {
        var i = n(5),
            o = n(7),
            r = n(11),
            s = n(8),
            a = n(9),
            l = n(12),
            c = {
                Dom: l,
                History: a,
                Cache: s,
                cacheEnabled: !0,
                transitionProgress: !1,
                ignoreClassLink: "no-barba",
                start: function () {
                    this.init()
                },
                init: function () {
                    var t = this.Dom.getContainer();
                    this.Dom.getWrapper().setAttribute("aria-live", "polite"),
                        this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)),
                        o.trigger("initStateChange", this.History.currentStatus()),
                        o.trigger("newPageReady", this.History.currentStatus(), {}, t, this.Dom.currentHTML),
                        o.trigger("transitionCompleted", this.History.currentStatus()),
                        this.bindEvents()
                },
                bindEvents: function () {
                    document.addEventListener("click", this.onLinkClick.bind(this)),
                        window.addEventListener("popstate", this.onStateChange.bind(this))
                },
                getCurrentUrl: function () {
                    return i.cleanLink(i.getCurrentUrl())
                },
                goTo: function (t) {
                    window.history.pushState(null, null, t),
                        this.onStateChange()
                },
                forceGoTo: function (t) {
                    window.location = t
                },
                load: function (t) {
                    var e = i.deferred(),
                        n = this,
                        o;
                    return o = this.Cache.get(t),
                        o || (o = i.xhr(t),
                            this.Cache.set(t, o)),
                        o.then(function (t) {
                            var i = n.Dom.parseResponse(t);
                            n.Dom.putContainer(i),
                                n.cacheEnabled || n.Cache.reset(),
                                e.resolve(i)
                        }, function () {
                            n.forceGoTo(t),
                                e.reject()
                        }),
                        e.promise
                },
                getHref: function (t) {
                    if (t)
                        return t.getAttribute && "string" == typeof t.getAttribute("xlink:href") ? t.getAttribute("xlink:href") : "string" == typeof t.href ? t.href : void 0
                },
                onLinkClick: function (t) {
                    for (var e = t.target; e && !this.getHref(e);)
                        e = e.parentNode;
                    if (this.preventCheck(t, e)) {
                        t.stopPropagation(),
                            t.preventDefault(),
                            o.trigger("linkClicked", e, t);
                        var n = this.getHref(e);
                        this.goTo(n)
                    }
                },
                preventCheck: function (t, e) {
                    if (!window.history.pushState)
                        return !1;
                    var n = this.getHref(e);
                    return !(!e || !n) && (!(t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) && ((!e.target || "_blank" !== e.target) && (window.location.protocol === e.protocol && window.location.hostname === e.hostname && (i.getPort() === i.getPort(e.port) && (!(n.indexOf("#") > -1) && ((!e.getAttribute || "string" != typeof e.getAttribute("download")) && (i.cleanLink(n) != i.cleanLink(location.href) && !e.classList.contains(this.ignoreClassLink))))))))
                },
                getTransition: function () {
                    return r
                },
                onStateChange: function () {
                    var t = this.getCurrentUrl();
                    if (this.transitionProgress && this.forceGoTo(t),
                        this.History.currentStatus().url === t)
                        return !1;
                    this.History.add(t);
                    var e = this.load(t),
                        n = Object.create(this.getTransition());
                    this.transitionProgress = !0,
                        o.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                    var i = n.init(this.Dom.getContainer(), e);
                    e.then(this.onNewContainerLoaded.bind(this)),
                        i.then(this.onTransitionEnd.bind(this))
                },
                onNewContainerLoaded: function (t) {
                    this.History.currentStatus().namespace = this.Dom.getNamespace(t),
                        o.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t, this.Dom.currentHTML)
                },
                onTransitionEnd: function () {
                    this.transitionProgress = !1,
                        o.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
                }
            };
        t.exports = c
    }, function (t, e, n) {
        var i = n(4),
            o = i.extend({
                start: function () {
                    this.newContainerLoading.then(this.finish.bind(this))
                },
                finish: function () {
                    document.body.scrollTop = 0,
                        this.done()
                }
            });
        t.exports = o
    }, function (t, e) {
        var n = {
            dataNamespace: "namespace",
            wrapperId: "barba-wrapper",
            containerClass: "barba-container",
            currentHTML: document.documentElement.innerHTML,
            parseResponse: function (t) {
                this.currentHTML = t;
                var e = document.createElement("div");
                e.innerHTML = t;
                var n = e.querySelector("title");
                return n && (document.title = n.textContent),
                    this.getContainer(e)
            },
            getWrapper: function () {
                var t = document.getElementById(this.wrapperId);
                if (!t)
                    throw new Error("Barba.js: wrapper not found!");
                return t
            },
            getContainer: function (t) {
                if (t || (t = document.body),
                    !t)
                    throw new Error("Barba.js: DOM not ready!");
                var e = this.parseContainer(t);
                if (e && e.jquery && (e = e[0]),
                    !e)
                    throw new Error("Barba.js: no container found");
                return e
            },
            getNamespace: function (t) {
                return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null
            },
            putContainer: function (t) {
                t.style.visibility = "hidden",
                    this.getWrapper().appendChild(t)
            },
            parseContainer: function (t) {
                return t.querySelector("." + this.containerClass)
            }
        };
        t.exports = n
    }, function (t, e, n) {
        var i = n(5),
            o = n(10),
            r = {
                ignoreClassLink: "no-barba-prefetch",
                init: function () {
                    if (!window.history.pushState)
                        return !1;
                    document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)),
                        document.body.addEventListener("touchstart", this.onLinkEnter.bind(this))
                },
                onLinkEnter: function (t) {
                    for (var e = t.target; e && !o.getHref(e);)
                        e = e.parentNode;
                    if (e && !e.classList.contains(this.ignoreClassLink)) {
                        var n = o.getHref(e);
                        if (o.preventCheck(t, e) && !o.Cache.get(n)) {
                            var r = i.xhr(n);
                            o.Cache.set(n, r)
                        }
                    }
                }
            };
        t.exports = r
    }])
});
var Util = function ($) {
        function t(t) {
            return {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()
        }

        function e() {
            return {
                bindType: o,
                delegateType: o,
                handle: function t(e) {
                    if ($(e.target).is(this))
                        return e.handleObj.handler.apply(this, arguments)
                }
            }
        }

        function n(t) {
            var e = this,
                n = !1;
            return $(this).one(a.TRANSITION_END, function () {
                    n = !0
                }),
                setTimeout(function () {
                    n || a.triggerTransitionEnd(e)
                }, t),
                this
        }

        function i() {
            $.fn.emulateTransitionEnd = n,
                $.event.special[a.TRANSITION_END] = e()
        }
        var o = "transitionend",
            r = 1e6,
            s = 1e3,
            a = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function t(e) {
                    do {
                        e += ~~(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function t(e) {
                    var n = e.getAttribute("data-target");
                    n && "#" !== n || (n = e.getAttribute("href") || "");
                    try {
                        return $(document).find(n).length > 0 ? n : null
                    } catch (t) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function t(e) {
                    if (!e)
                        return 0;
                    var n = $(e).css("transition-duration");
                    return parseFloat(n) ? (n = n.split(",")[0],
                        1e3 * parseFloat(n)) : 0
                },
                reflow: function t(e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function t(e) {
                    $(e).trigger(o)
                },
                supportsTransitionEnd: function t() {
                    return Boolean(o)
                },
                isElement: function t(e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function e(n, i, o) {
                    for (var r in o)
                        if (Object.prototype.hasOwnProperty.call(o, r)) {
                            var s = o[r],
                                l = i[r],
                                c = l && a.isElement(l) ? "element" : t(l);
                            if (!new RegExp(s).test(c))
                                throw new Error(n.toUpperCase() + ': Option "' + r + '" provided type "' + c + '" but expected type "' + s + '".')
                        }
                }
            };
        return i(),
            a
    }($),
    ScrollSpy = function ($) {
        var t = "scrollspy",
            e = "4.1.1",
            n = "bs.scrollspy",
            i = "." + n,
            o = ".data-api",
            r = $.fn[t],
            s = {
                offset: 10,
                method: "auto",
                target: ""
            },
            a = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            l = {
                ACTIVATE: "activate" + i,
                SCROLL: "scroll" + i,
                LOAD_DATA_API: "load.bs.scrollspy.data-api"
            },
            c = {
                DROPDOWN_ITEM: "dropdown-item",
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active"
            },
            u = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            },
            h = {
                OFFSET: "offset",
                POSITION: "position"
            },
            d = function () {
                function e(t, e) {
                    var n = this;
                    this._element = t,
                        this._scrollElement = "BODY" === t.tagName ? window : t,
                        this._config = this._getConfig(e),
                        this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS,
                        this._offsets = [],
                        this._targets = [],
                        this._activeTarget = null,
                        this._scrollHeight = 0,
                        $(this._scrollElement).on(l.SCROLL, function (t) {
                            return n._process(t)
                        }),
                        this.refresh(),
                        this._process()
                }
                var o = e.prototype;
                return o.refresh = function t() {
                        var e = this,
                            n = this._scrollElement === this._scrollElement.window ? h.OFFSET : h.POSITION,
                            i = "auto" === this._config.method ? n : this._config.method,
                            o = i === h.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [],
                            this._targets = [],
                            this._scrollHeight = this._getScrollHeight(),
                            [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                                var e, n = Util.getSelectorFromElement(t);
                                if (n && (e = document.querySelector(n)),
                                    e) {
                                    var r = e.getBoundingClientRect();
                                    if (r.width || r.height)
                                        return [$(e)[i]().top + o, n]
                                }
                                return null
                            }).filter(function (t) {
                                return t
                            }).sort(function (t, e) {
                                return t[0] - e[0]
                            }).forEach(function (t) {
                                e._offsets.push(t[0]),
                                    e._targets.push(t[1])
                            })
                    },
                    o.dispose = function t() {
                        $.removeData(this._element, n),
                            $(this._scrollElement).off(i),
                            this._element = null,
                            this._scrollElement = null,
                            this._config = null,
                            this._selector = null,
                            this._offsets = null,
                            this._targets = null,
                            this._activeTarget = null,
                            this._scrollHeight = null
                    },
                    o._getConfig = function e(n) {
                        if (n = _objectSpread({}, s, "object" == typeof n && n ? n : {}),
                            "string" != typeof n.target) {
                            var i = $(n.target).attr("id");
                            i || (i = Util.getUID(t),
                                    $(n.target).attr("id", i)),
                                n.target = "#" + i
                        }
                        return Util.typeCheckConfig(t, n, a),
                            n
                    },
                    o._getScrollTop = function t() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    },
                    o._getScrollHeight = function t() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    },
                    o._getOffsetHeight = function t() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    },
                    o._process = function t() {
                        var e = this._getScrollTop() + this._config.offset,
                            n = this._getScrollHeight(),
                            i = this._config.offset + n - this._getOffsetHeight();
                        if (this._scrollHeight !== n && this.refresh(),
                            e >= i) {
                            var o = this._targets[this._targets.length - 1];
                            return void(this._activeTarget !== o && this._activate(o))
                        }
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                            return this._activeTarget = null,
                                void this._clear();
                        for (var r = this._offsets.length, s = r; s--;) {
                            this._activeTarget !== this._targets[s] && e >= this._offsets[s] && (void 0 === this._offsets[s + 1] || e < this._offsets[s + 1]) && this._activate(this._targets[s])
                        }
                    },
                    o._activate = function t(e) {
                        this._activeTarget = e,
                            this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        });
                        var i = $([].slice.call(document.querySelectorAll(n.join(","))));
                        i.hasClass(c.DROPDOWN_ITEM) ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE),
                                i.addClass(c.ACTIVE)) : (i.addClass(c.ACTIVE),
                                i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(c.ACTIVE),
                                i.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(c.ACTIVE)),
                            $(this._scrollElement).trigger(l.ACTIVATE, {
                                relatedTarget: e
                            })
                    },
                    o._clear = function t() {
                        var e = [].slice.call(document.querySelectorAll(this._selector));
                        $(e).filter(u.ACTIVE).removeClass(c.ACTIVE)
                    },
                    e._jQueryInterface = function t(i) {
                        return this.each(function () {
                            var t = $(this).data(n),
                                o = "object" == typeof i && i;
                            if (t || (t = new e(this, o),
                                    $(this).data(n, t)),
                                "string" == typeof i) {
                                if (void 0 === t[i])
                                    throw new TypeError('No method named "' + i + '"');
                                t[i]()
                            }
                        })
                    },
                    _createClass(e, null, [{
                        key: "VERSION",
                        get: function t() {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default",
                        get: function t() {
                            return s
                        }
                    }]),
                    e
            }();
        return $(window).on(l.LOAD_DATA_API, function () {
                for (var t = [].slice.call(document.querySelectorAll(u.DATA_SPY)), e = t.length, n = e; n--;) {
                    var i = $(t[n]);
                    d._jQueryInterface.call(i, i.data())
                }
            }),
            $.fn[t] = d._jQueryInterface,
            $.fn[t].Constructor = d,
            $.fn[t].noConflict = function () {
                return $.fn[t] = r,
                    d._jQueryInterface
            },
            d
    }($),
    Carousel = function ($) {
        var t = "carousel",
            e = "4.1.1",
            n = "bs.carousel",
            i = "." + n,
            o = ".data-api",
            r = $.fn[t],
            s = 37,
            a = 39,
            l = 500,
            c = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0
            },
            u = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            },
            h = {
                NEXT: "next",
                PREV: "prev",
                LEFT: "left",
                RIGHT: "right"
            },
            d = {
                SLIDE: "slide" + i,
                SLID: "slid" + i,
                KEYDOWN: "keydown" + i,
                MOUSEENTER: "mouseenter" + i,
                MOUSELEAVE: "mouseleave" + i,
                TOUCHEND: "touchend" + i,
                LOAD_DATA_API: "load.bs.carousel.data-api",
                CLICK_DATA_API: "click.bs.carousel.data-api"
            },
            f = {
                CAROUSEL: "carousel",
                ACTIVE: "active",
                SLIDE: "slide",
                RIGHT: "carousel-item-right",
                LEFT: "carousel-item-left",
                NEXT: "carousel-item-next",
                PREV: "carousel-item-prev",
                ITEM: "carousel-item"
            },
            p = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            },
            m = function () {
                function e(t, e) {
                    this._items = null,
                        this._interval = null,
                        this._activeElement = null,
                        this._isPaused = !1,
                        this._isSliding = !1,
                        this.touchTimeout = null,
                        this._config = this._getConfig(e),
                        this._element = $(t)[0],
                        this._indicatorsElement = $(this._element).find(p.INDICATORS)[0],
                        this._addEventListeners()
                }
                var o = e.prototype;
                return o.next = function t() {
                        this._isSliding || this._slide(h.NEXT)
                    },
                    o.nextWhenVisible = function t() {
                        !document.hidden && $(this._element).is(":visible") && "hidden" !== $(this._element).css("visibility") && this.next()
                    },
                    o.prev = function t() {
                        this._isSliding || this._slide(h.PREV)
                    },
                    o.pause = function t(e) {
                        e || (this._isPaused = !0),
                            $(this._element).find(p.NEXT_PREV)[0] && (Util.triggerTransitionEnd(this._element),
                                this.cycle(!0)),
                            clearInterval(this._interval),
                            this._interval = null
                    },
                    o.cycle = function t(e) {
                        e || (this._isPaused = !1),
                            this._interval && (clearInterval(this._interval),
                                this._interval = null),
                            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    },
                    o.to = function t(e) {
                        var n = this;
                        this._activeElement = $(this._element).find(p.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0)) {
                            if (this._isSliding)
                                return void $(this._element).one(d.SLID, function () {
                                    return n.to(e)
                                });
                            if (i === e)
                                return this.pause(),
                                    void this.cycle();
                            var o = e > i ? h.NEXT : h.PREV;
                            this._slide(o, this._items[e])
                        }
                    },
                    o.dispose = function t() {
                        $(this._element).off(i),
                            $.removeData(this._element, n),
                            this._items = null,
                            this._config = null,
                            this._element = null,
                            this._interval = null,
                            this._isPaused = null,
                            this._isSliding = null,
                            this._activeElement = null,
                            this._indicatorsElement = null
                    },
                    o._getConfig = function e(n) {
                        return n = _objectSpread({}, c, n),
                            Util.typeCheckConfig(t, n, u),
                            n
                    },
                    o._addEventListeners = function t() {
                        var e = this;
                        this._config.keyboard && $(this._element).on(d.KEYDOWN, function (t) {
                                return e._keydown(t)
                            }),
                            "hover" === this._config.pause && ($(this._element).on(d.MOUSEENTER, function (t) {
                                    return e.pause(t)
                                }).on(d.MOUSELEAVE, function (t) {
                                    return e.cycle(t)
                                }),
                                "ontouchstart" in document.documentElement && $(this._element).on(d.TOUCHEND, function () {
                                    e.pause(),
                                        e.touchTimeout && clearTimeout(e.touchTimeout),
                                        e.touchTimeout = setTimeout(function (t) {
                                            return e.cycle(t)
                                        }, 500 + e._config.interval)
                                }))
                    },
                    o._keydown = function t(e) {
                        if (!/input|textarea/i.test(e.target.tagName))
                            switch (e.which) {
                                case 37:
                                    e.preventDefault(),
                                        this.prev();
                                    break;
                                case 39:
                                    e.preventDefault(),
                                        this.next();
                                    break;
                                default:
                            }
                    },
                    o._getItemIndex = function t(e) {
                        return this._items = $.makeArray($(e).parent().find(p.ITEM)),
                            this._items.indexOf(e)
                    },
                    o._getItemByDirection = function t(e, n) {
                        var i = e === h.NEXT,
                            o = e === h.PREV,
                            r = this._getItemIndex(n),
                            s = this._items.length - 1;
                        if ((o && 0 === r || i && r === s) && !this._config.wrap)
                            return n;
                        var a = e === h.PREV ? -1 : 1,
                            l = (r + a) % this._items.length;
                        return -1 === l ? this._items[this._items.length - 1] : this._items[l]
                    },
                    o._triggerSlideEvent = function t(e, n) {
                        var i = this._getItemIndex(e),
                            o = this._getItemIndex($(this._element).find(p.ACTIVE_ITEM)[0]),
                            r = $.Event(d.SLIDE, {
                                relatedTarget: e,
                                direction: n,
                                from: o,
                                to: i
                            });
                        return $(this._element).trigger(r),
                            r
                    },
                    o._setActiveIndicatorElement = function t(e) {
                        if (this._indicatorsElement) {
                            $(this._indicatorsElement).find(p.ACTIVE).removeClass(f.ACTIVE);
                            var n = this._indicatorsElement.children[this._getItemIndex(e)];
                            n && $(n).addClass(f.ACTIVE)
                        }
                    },
                    o._slide = function t(e, n) {
                        var i = this,
                            o = $(this._element).find(p.ACTIVE_ITEM)[0],
                            r = this._getItemIndex(o),
                            s = n || o && this._getItemByDirection(e, o),
                            a = this._getItemIndex(s),
                            l = Boolean(this._interval),
                            c, u, m;
                        if (e === h.NEXT ? (c = f.LEFT,
                                u = f.NEXT,
                                m = h.LEFT) : (c = f.RIGHT,
                                u = f.PREV,
                                m = h.RIGHT),
                            s && $(s).hasClass(f.ACTIVE))
                            return void(this._isSliding = !1);
                        if (!this._triggerSlideEvent(s, m).isDefaultPrevented() && o && s) {
                            this._isSliding = !0,
                                l && this.pause(),
                                this._setActiveIndicatorElement(s);
                            var g = $.Event(d.SLID, {
                                relatedTarget: s,
                                direction: m,
                                from: r,
                                to: a
                            });
                            if ($(this._element).hasClass(f.SLIDE)) {
                                $(s).addClass(u),
                                    Util.reflow(s),
                                    $(o).addClass(c),
                                    $(s).addClass(c);
                                var v = Util.getTransitionDurationFromElement(o);
                                $(o).one(Util.TRANSITION_END, function () {
                                    $(s).removeClass(c + " " + u).addClass(f.ACTIVE),
                                        $(o).removeClass(f.ACTIVE + " " + u + " " + c),
                                        i._isSliding = !1,
                                        setTimeout(function () {
                                            return $(i._element).trigger(g)
                                        }, 0)
                                }).emulateTransitionEnd(v)
                            } else
                                $(o).removeClass(f.ACTIVE),
                                $(s).addClass(f.ACTIVE),
                                this._isSliding = !1,
                                $(this._element).trigger(g);
                            l && this.cycle()
                        }
                    },
                    e._jQueryInterface = function t(i) {
                        return this.each(function () {
                            var t = $(this).data(n),
                                o = _objectSpread({}, c, $(this).data());
                            "object" == typeof i && (o = _objectSpread({}, o, i));
                            var r = "string" == typeof i ? i : o.slide;
                            if (t || (t = new e(this, o),
                                    $(this).data(n, t)),
                                "number" == typeof i)
                                t.to(i);
                            else if ("string" == typeof r) {
                                if (void 0 === t[r])
                                    throw new TypeError('No method named "' + r + '"');
                                t[r]()
                            } else
                                o.interval && (t.pause(),
                                    t.cycle())
                        })
                    },
                    e._dataApiClickHandler = function t(i) {
                        var o = Util.getSelectorFromElement(this);
                        if (o) {
                            var r = $(o)[0];
                            if (r && $(r).hasClass(f.CAROUSEL)) {
                                var s = _objectSpread({}, $(r).data(), $(this).data()),
                                    a = this.getAttribute("data-slide-to");
                                a && (s.interval = !1),
                                    e._jQueryInterface.call($(r), s),
                                    a && $(r).data(n).to(a),
                                    i.preventDefault()
                            }
                        }
                    },
                    _createClass(e, null, [{
                        key: "VERSION",
                        get: function t() {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default",
                        get: function t() {
                            return c
                        }
                    }]),
                    e
            }();
        return $(document).on(d.CLICK_DATA_API, p.DATA_SLIDE, m._dataApiClickHandler),
            $(window).on(d.LOAD_DATA_API, function () {
                $(p.DATA_RIDE).each(function () {
                    var t = $(this);
                    m._jQueryInterface.call(t, t.data())
                })
            }),
            $.fn[t] = m._jQueryInterface,
            $.fn[t].Constructor = m,
            $.fn[t].noConflict = function () {
                return $.fn[t] = r,
                    m._jQueryInterface
            },
            m
    }($),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } :
    function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, n) {
            return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)),
                t(n),
                n
        } :
        t(jQuery)
}(function ($) {
    return $.fn.tilt = function (t) {
            var e = function t() {
                    this.ticking || (requestAnimationFrame(c.bind(this)),
                        this.ticking = !0)
                },
                n = function t() {
                    var e = this;
                    $(this).on("mousemove", s),
                        $(this).on("mouseenter", o),
                        this.settings.reset && $(this).on("mouseleave", a),
                        this.settings.glare && $(window).on("resize", h.bind(e))
                },
                i = function t() {
                    var e = this;
                    void 0 !== this.timeout && clearTimeout(this.timeout),
                        $(this).css({
                            transition: this.settings.speed + "ms " + this.settings.easing
                        }),
                        this.settings.glare && this.glareElement.css({
                            transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
                        }),
                        this.timeout = setTimeout(function () {
                            $(e).css({
                                    transition: ""
                                }),
                                e.settings.glare && e.glareElement.css({
                                    transition: ""
                                })
                        }, this.settings.speed)
                },
                o = function t(e) {
                    this.ticking = !1,
                        $(this).css({
                            "will-change": "transform"
                        }),
                        i.call(this),
                        $(this).trigger("tilt.mouseEnter")
                },
                r = function t(e) {
                    return void 0 === e && (e = {
                        pageX: $(this).offset().left + $(this).outerWidth() / 2,
                        pageY: $(this).offset().top + $(this).outerHeight() / 2
                    }), {
                        x: e.pageX,
                        y: e.pageY
                    }
                },
                s = function t(n) {
                    this.mousePositions = r(n),
                        e.call(this)
                },
                a = function t() {
                    i.call(this),
                        this.reset = !0,
                        e.call(this),
                        $(this).trigger("tilt.mouseLeave")
                },
                l = function t() {
                    this.mousePositions || (this.mousePositions = r.call(this));
                    var e = $(this).outerWidth(),
                        n = $(this).outerHeight(),
                        i = $(this).offset().left,
                        o = $(this).offset().top,
                        s = (this.mousePositions.x - i) / e,
                        a = (this.mousePositions.y - o) / n;
                    return {
                        tiltX: (this.settings.maxTilt / 2 - s * this.settings.maxTilt).toFixed(2),
                        tiltY: (a * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                        percentageX: 100 * s,
                        percentageY: 100 * a,
                        angle: Math.atan2(this.mousePositions.x - (i + e / 2), -(this.mousePositions.y - (o + n / 2))) * (180 / Math.PI)
                    }
                },
                c = function t() {
                    if (this.transforms = l.call(this),
                        this.reset)
                        return this.reset = !1,
                            $(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"),
                            void(this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"),
                                this.glareElement.css("opacity", "0")));
                    $(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"),
                        this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"),
                            this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)),
                        $(this).trigger("change", [this.transforms]),
                        this.ticking = !1
                },
                u = function t() {
                    var e = this.settings.glarePrerender;
                    if (e || $(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),
                        this.glareElementWrapper = $(this).find(".js-tilt-glare"),
                        this.glareElement = $(this).find(".js-tilt-glare-inner"),
                        !e) {
                        var n = {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%"
                        };
                        this.glareElementWrapper.css(n).css({
                                overflow: "hidden",
                                "pointer-events": "none"
                            }),
                            this.glareElement.css({
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                                width: "" + 2 * $(this).outerWidth(),
                                height: "" + 2 * $(this).outerWidth(),
                                transform: "rotate(180deg) translate(-50%, -50%)",
                                "transform-origin": "0% 0%",
                                opacity: "0"
                            })
                    }
                },
                h = function t() {
                    this.glareElement.css({
                        width: "" + 2 * $(this).outerWidth(),
                        height: "" + 2 * $(this).outerWidth()
                    })
                };
            return $.fn.tilt.destroy = function () {
                    $(this).each(function () {
                        $(this).find(".js-tilt-glare").remove(),
                            $(this).css({
                                "will-change": "",
                                transform: ""
                            }),
                            $(this).off("mousemove mouseenter mouseleave")
                    })
                },
                $.fn.tilt.getValues = function () {
                    var t = [];
                    return $(this).each(function () {
                            this.mousePositions = r.call(this),
                                t.push(l.call(this))
                        }),
                        t
                },
                $.fn.tilt.reset = function () {
                    $(this).each(function () {
                        var t = this;
                        this.mousePositions = r.call(this),
                            this.settings = $(this).data("settings"),
                            a.call(this),
                            setTimeout(function () {
                                t.reset = !1
                            }, this.settings.transition)
                    })
                },
                this.each(function () {
                    var e = this;
                    this.settings = $.extend({
                            maxTilt: $(this).is("[data-tilt-max]") ? $(this).data("tilt-max") : 20,
                            perspective: $(this).is("[data-tilt-perspective]") ? $(this).data("tilt-perspective") : 300,
                            easing: $(this).is("[data-tilt-easing]") ? $(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                            scale: $(this).is("[data-tilt-scale]") ? $(this).data("tilt-scale") : "1",
                            speed: $(this).is("[data-tilt-speed]") ? $(this).data("tilt-speed") : "400",
                            transition: !$(this).is("[data-tilt-transition]") || $(this).data("tilt-transition"),
                            disableAxis: $(this).is("[data-tilt-disable-axis]") ? $(this).data("tilt-disable-axis") : null,
                            axis: $(this).is("[data-tilt-axis]") ? $(this).data("tilt-axis") : null,
                            reset: !$(this).is("[data-tilt-reset]") || $(this).data("tilt-reset"),
                            glare: !!$(this).is("[data-tilt-glare]") && $(this).data("tilt-glare"),
                            maxGlare: $(this).is("[data-tilt-maxglare]") ? $(this).data("tilt-maxglare") : 1
                        }, t),
                        null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),
                            this.settings.disableAxis = this.settings.axis),
                        this.init = function () {
                            $(e).data("settings", e.settings),
                                e.settings.glare && u.call(e),
                                n.call(e)
                        },
                        this.init()
                })
        },
        $("[data-tilt]").tilt(),
        !0
}),
function (t, e) {
    var n = e(t, t.document);
    t.lazySizes = n,
        "object" == typeof module && module.exports && (module.exports = n)
}(window, function t(e, n) {
    if (n.getElementsByClassName) {
        var i, o, r = n.documentElement,
            s = e.Date,
            a = e.HTMLPictureElement,
            l = "addEventListener",
            c = "getAttribute",
            u = e[l],
            h = e.setTimeout,
            d = e.requestAnimationFrame || h,
            f = e.requestIdleCallback,
            p = /^picture$/i,
            m = ["load", "error", "lazyincluded", "_lazyloaded"],
            g = {},
            v = Array.prototype.forEach,
            y = function (t, e) {
                return g[e] || (g[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
                    g[e].test(t[c]("class") || "") && g[e]
            },
            w = function (t, e) {
                y(t, e) || t.setAttribute("class", (t[c]("class") || "").trim() + " " + e)
            },
            b = function (t, e) {
                var n;
                (n = y(t, e)) && t.setAttribute("class", (t[c]("class") || "").replace(n, " "))
            },
            _ = function (t, e, n) {
                var i = n ? l : "removeEventListener";
                n && _(t, e),
                    m.forEach(function (n) {
                        t[i](n, e)
                    })
            },
            T = function (t, e, o, r, s) {
                var a = n.createEvent("CustomEvent");
                return o || (o = {}),
                    o.instance = i,
                    a.initCustomEvent(e, !r, !s, o),
                    t.dispatchEvent(a),
                    a
            },
            C = function (t, n) {
                var i;
                !a && (i = e.picturefill || o.pf) ? i({
                    reevaluate: !0,
                    elements: [t]
                }) : n && n.src && (t.src = n.src)
            },
            E = function (t, e) {
                return (getComputedStyle(t, null) || {})[e]
            },
            x = function (t, e, n) {
                for (n = n || t.offsetWidth; n < o.minSize && e && !t._lazysizesWidth;)
                    n = e.offsetWidth,
                    e = e.parentNode;
                return n
            },
            I = function () {
                var t, e, i = [],
                    o = [],
                    r = i,
                    s = function () {
                        var n = r;
                        for (r = i.length ? o : i,
                            t = !0,
                            e = !1; n.length;)
                            n.shift()();
                        t = !1
                    },
                    a = function (i, o) {
                        t && !o ? i.apply(this, arguments) : (r.push(i),
                            e || (e = !0,
                                (n.hidden ? h : d)(s)))
                    };
                return a._lsFlush = s,
                    a
            }(),
            A = function (t, e) {
                return e ? function () {
                        I(t)
                    } :
                    function () {
                        var e = this,
                            n = arguments;
                        I(function () {
                            t.apply(e, n)
                        })
                    }
            },
            S = function (t) {
                var e, n = 0,
                    i = o.throttleDelay,
                    r = o.ricTimeout,
                    a = function () {
                        e = !1,
                            n = s.now(),
                            t()
                    },
                    l = f && r > 49 ? function () {
                        f(a, {
                                timeout: r
                            }),
                            r !== o.ricTimeout && (r = o.ricTimeout)
                    } :
                    A(function () {
                        h(a)
                    }, !0);
                return function (t) {
                    var o;
                    (t = !0 === t) && (r = 33),
                    e || (e = !0,
                        o = i - (s.now() - n),
                        o < 0 && (o = 0),
                        t || o < 9 ? l() : h(l, o))
                }
            },
            O = function (t) {
                var e, n, i = 99,
                    o = function () {
                        e = null,
                            t()
                    },
                    r = function () {
                        var t = s.now() - n;
                        t < 99 ? h(r, 99 - t) : (f || o)(o)
                    };
                return function () {
                    n = s.now(),
                        e || (e = h(r, 99))
                }
            };
        ! function () {
            var t, n = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            o = e.lazySizesConfig || e.lazysizesConfig || {};
            for (t in n)
                t in o || (o[t] = n[t]);
            e.lazySizesConfig = o,
                h(function () {
                    o.init && k()
                })
        }();
        var P = function () {
                var t, a, d, f, m, g, x, P, k, j, L, N, H, R, V = /^img$/i,
                    z = /^iframe$/i,
                    B = "onscroll" in e && !/glebot/.test(navigator.userAgent),
                    M = 0,
                    F = 0,
                    W = 0,
                    U = -1,
                    q = function (t) {
                        W--,
                        t && t.target && _(t.target, q),
                            (!t || W < 0 || !t.target) && (W = 0)
                    },
                    Y = function (t, e) {
                        var i, o = t,
                            s = "hidden" == E(n.body, "visibility") || "hidden" != E(t, "visibility");
                        for (P -= e,
                            L += e,
                            k -= e,
                            j += e; s && (o = o.offsetParent) && o != n.body && o != r;)
                            (s = (E(o, "opacity") || 1) > 0) && "visible" != E(o, "overflow") && (i = o.getBoundingClientRect(),
                                s = j > i.left && k < i.right && L > i.top - 1 && P < i.bottom + 1);
                        return s
                    },
                    K = function () {
                        var e, s, l, u, h, d, p, m, v, y = i.elements;
                        if ((f = o.loadMode) && W < 8 && (e = y.length)) {
                            s = 0,
                                U++,
                                null == H && ("expand" in o || (o.expand = r.clientHeight > 500 && r.clientWidth > 500 ? 500 : 370),
                                    N = o.expand,
                                    H = N * o.expFactor),
                                F < H && W < 1 && U > 2 && f > 2 && !n.hidden ? (F = H,
                                    U = 0) : F = f > 1 && U > 1 && W < 6 ? N : 0;
                            for (; s < e; s++)
                                if (y[s] && !y[s]._lazyRace)
                                    if (B)
                                        if ((m = y[s][c]("data-expand")) && (d = 1 * m) || (d = F),
                                            v !== d && (g = innerWidth + d * R,
                                                x = innerHeight + d,
                                                p = -1 * d,
                                                v = d),
                                            l = y[s].getBoundingClientRect(),
                                            (L = l.bottom) >= p && (P = l.top) <= x && (j = l.right) >= p * R && (k = l.left) <= g && (L || j || k || P) && (o.loadHidden || "hidden" != E(y[s], "visibility")) && (a && W < 3 && !m && (f < 3 || U < 4) || Y(y[s], d))) {
                                            if (nt(y[s]),
                                                h = !0,
                                                W > 9)
                                                break
                                        } else
                                            !h && a && !u && W < 4 && U < 4 && f > 2 && (t[0] || o.preloadAfterLoad) && (t[0] || !m && (L || j || k || P || "auto" != y[s][c](o.sizesAttr))) && (u = t[0] || y[s]);
                            else
                                nt(y[s]);
                            u && !h && nt(u)
                        }
                    },
                    G = S(K),
                    X = function (t) {
                        w(t.target, o.loadedClass),
                            b(t.target, o.loadingClass),
                            _(t.target, Z),
                            T(t.target, "lazyloaded")
                    },
                    Q = A(X),
                    Z = function (t) {
                        Q({
                            target: t.target
                        })
                    },
                    J = function (t, e) {
                        try {
                            t.contentWindow.location.replace(e)
                        } catch (n) {
                            t.src = e
                        }
                    },
                    tt = function (t) {
                        var e, n = t[c](o.srcsetAttr);
                        (e = o.customMedia[t[c]("data-media") || t[c]("media")]) && t.setAttribute("media", e),
                            n && t.setAttribute("srcset", n)
                    },
                    et = A(function (t, e, n, i, r) {
                        var s, a, l, u, f, m;
                        (f = T(t, "lazybeforeunveil", e)).defaultPrevented || (i && (n ? w(t, o.autosizesClass) : t.setAttribute("sizes", i)),
                                a = t[c](o.srcsetAttr),
                                s = t[c](o.srcAttr),
                                r && (l = t.parentNode,
                                    u = l && p.test(l.nodeName || "")),
                                m = e.firesLoad || "src" in t && (a || s || u),
                                f = {
                                    target: t
                                },
                                m && (_(t, q, !0),
                                    clearTimeout(d),
                                    d = h(q, 2500),
                                    w(t, o.loadingClass),
                                    _(t, Z, !0)),
                                u && v.call(l.getElementsByTagName("source"), tt),
                                a ? t.setAttribute("srcset", a) : s && !u && (z.test(t.nodeName) ? J(t, s) : t.src = s),
                                r && (a || u) && C(t, {
                                    src: s
                                })),
                            t._lazyRace && delete t._lazyRace,
                            b(t, o.lazyClass),
                            I(function () {
                                (!m || t.complete && t.naturalWidth > 1) && (m ? q(f) : W--,
                                    X(f))
                            }, !0)
                    }),
                    nt = function (t) {
                        var e, n = V.test(t.nodeName),
                            i = n && (t[c](o.sizesAttr) || t[c]("sizes")),
                            r = "auto" == i;
                        (!r && a || !n || !t[c]("src") && !t.srcset || t.complete || y(t, o.errorClass) || !y(t, o.lazyClass)) && (e = T(t, "lazyunveilread").detail,
                            r && D.updateElem(t, !0, t.offsetWidth),
                            t._lazyRace = !0,
                            W++,
                            et(t, e, r, i, n))
                    },
                    it = function () {
                        if (!a) {
                            if (s.now() - m < 999)
                                return void h(it, 999);
                            var t = O(function () {
                                o.loadMode = 3,
                                    G()
                            });
                            a = !0,
                                o.loadMode = 3,
                                G(),
                                u("scroll", function () {
                                    3 == o.loadMode && (o.loadMode = 2),
                                        t()
                                }, !0)
                        }
                    };
                return {
                    _: function () {
                        m = s.now(),
                            i.elements = n.getElementsByClassName(o.lazyClass),
                            t = n.getElementsByClassName(o.lazyClass + " " + o.preloadClass),
                            R = o.hFac,
                            u("scroll", G, !0),
                            u("resize", G, !0),
                            e.MutationObserver ? new MutationObserver(G).observe(r, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (r[l]("DOMNodeInserted", G, !0),
                                r[l]("DOMAttrModified", G, !0),
                                setInterval(G, 999)),
                            u("hashchange", G, !0),
                            ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (t) {
                                n[l](t, G, !0)
                            }),
                            /d$|^c/.test(n.readyState) ? it() : (u("load", it),
                                n[l]("DOMContentLoaded", G),
                                h(it, 2e4)),
                            i.elements.length ? (K(),
                                I._lsFlush()) : G()
                    },
                    checkElems: G,
                    unveil: nt
                }
            }(),
            D = function () {
                var t, e = A(function (t, e, n, i) {
                        var o, r, s;
                        if (t._lazysizesWidth = i,
                            i += "px",
                            t.setAttribute("sizes", i),
                            p.test(e.nodeName || ""))
                            for (o = e.getElementsByTagName("source"),
                                r = 0,
                                s = o.length; r < s; r++)
                                o[r].setAttribute("sizes", i);
                        n.detail.dataAttr || C(t, n.detail)
                    }),
                    i = function (t, n, i) {
                        var o, r = t.parentNode;
                        r && (i = x(t, r, i),
                            o = T(t, "lazybeforesizes", {
                                width: i,
                                dataAttr: !!n
                            }),
                            o.defaultPrevented || (i = o.detail.width) && i !== t._lazysizesWidth && e(t, r, o, i))
                    },
                    r = function () {
                        var e, n = t.length;
                        if (n)
                            for (e = 0; e < n; e++)
                                i(t[e])
                    },
                    s = O(r);
                return {
                    _: function () {
                        t = n.getElementsByClassName(o.autosizesClass),
                            u("resize", s)
                    },
                    checkElems: s,
                    updateElem: i
                }
            }(),
            k = function () {
                k.i || (k.i = !0,
                    D._(),
                    P._())
            };
        return i = {
            cfg: o,
            autoSizer: D,
            loader: P,
            init: k,
            uP: C,
            aC: w,
            rC: b,
            hC: y,
            fire: T,
            gW: x,
            rAF: I
        }
    }
}),
function (t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.Headroom = e()
}(this, function () {
    function t(t) {
        this.callback = t,
            this.ticking = !1
    }

    function e(t) {
        return t && "undefined" != typeof window && (t === window || t.nodeType)
    }

    function n(t) {
        if (arguments.length <= 0)
            throw new Error("Missing arguments in extend function");
        var i, o, r = t || {};
        for (o = 1; o < arguments.length; o++) {
            var s = arguments[o] || {};
            for (i in s)
                "object" != typeof r[i] || e(r[i]) ? r[i] = r[i] || s[i] : r[i] = n(r[i], s[i])
        }
        return r
    }

    function i(t) {
        return t === Object(t) ? t : {
            down: t,
            up: t
        }
    }

    function o(t, e) {
        e = n(e, o.options),
            this.lastKnownScrollY = 0,
            this.elem = t,
            this.tolerance = i(e.tolerance),
            this.classes = e.classes,
            this.offset = e.offset,
            this.scroller = e.scroller,
            this.initialised = !1,
            this.onPin = e.onPin,
            this.onUnpin = e.onUnpin,
            this.onTop = e.onTop,
            this.onNotTop = e.onNotTop,
            this.onBottom = e.onBottom,
            this.onNotBottom = e.onNotBottom
    }
    var r = {
        bind: !! function () {}
            .bind,
        classList: "classList" in document.documentElement,
        rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
    };
    return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
        t.prototype = {
            constructor: t,
            update: function () {
                this.callback && this.callback(),
                    this.ticking = !1
            },
            requestTick: function () {
                this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))),
                    this.ticking = !0)
            },
            handleEvent: function () {
                this.requestTick()
            }
        },
        o.prototype = {
            constructor: o,
            init: function () {
                if (o.cutsTheMustard)
                    return this.debouncer = new t(this.update.bind(this)),
                        this.elem.classList.add(this.classes.initial),
                        setTimeout(this.attachEvent.bind(this), 100),
                        this
            },
            destroy: function () {
                var t = this.classes;
                this.initialised = !1;
                for (var e in t)
                    t.hasOwnProperty(e) && this.elem.classList.remove(t[e]);
                this.scroller.removeEventListener("scroll", this.debouncer, !1)
            },
            attachEvent: function () {
                this.initialised || (this.lastKnownScrollY = this.getScrollY(),
                    this.initialised = !0,
                    this.scroller.addEventListener("scroll", this.debouncer, !1),
                    this.debouncer.handleEvent())
            },
            unpin: function () {
                var t = this.elem.classList,
                    e = this.classes;
                !t.contains(e.pinned) && t.contains(e.unpinned) || (t.add(e.unpinned),
                    t.remove(e.pinned),
                    this.onUnpin && this.onUnpin.call(this))
            },
            pin: function () {
                var t = this.elem.classList,
                    e = this.classes;
                t.contains(e.unpinned) && (t.remove(e.unpinned),
                    t.add(e.pinned),
                    this.onPin && this.onPin.call(this))
            },
            top: function () {
                var t = this.elem.classList,
                    e = this.classes;
                t.contains(e.top) || (t.add(e.top),
                    t.remove(e.notTop),
                    this.onTop && this.onTop.call(this))
            },
            notTop: function () {
                var t = this.elem.classList,
                    e = this.classes;
                t.contains(e.notTop) || (t.add(e.notTop),
                    t.remove(e.top),
                    this.onNotTop && this.onNotTop.call(this))
            },
            bottom: function () {
                var t = this.elem.classList,
                    e = this.classes;
                t.contains(e.bottom) || (t.add(e.bottom),
                    t.remove(e.notBottom),
                    this.onBottom && this.onBottom.call(this))
            },
            notBottom: function () {
                var t = this.elem.classList,
                    e = this.classes;
                t.contains(e.notBottom) || (t.add(e.notBottom),
                    t.remove(e.bottom),
                    this.onNotBottom && this.onNotBottom.call(this))
            },
            getScrollY: function () {
                return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop
            },
            getViewportHeight: function () {
                return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            },
            getElementPhysicalHeight: function (t) {
                return Math.max(t.offsetHeight, t.clientHeight)
            },
            getScrollerPhysicalHeight: function () {
                return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller)
            },
            getDocumentHeight: function () {
                var t = document.body,
                    e = document.documentElement;
                return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight)
            },
            getElementHeight: function (t) {
                return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
            },
            getScrollerHeight: function () {
                return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
            },
            isOutOfBounds: function (t) {
                var e = t < 0,
                    n = t + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
                return e || n
            },
            toleranceExceeded: function (t, e) {
                return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e]
            },
            shouldUnpin: function (t, e) {
                var n = t > this.lastKnownScrollY,
                    i = t >= this.offset;
                return n && i && e
            },
            shouldPin: function (t, e) {
                var n = t < this.lastKnownScrollY,
                    i = t <= this.offset;
                return n && e || i
            },
            update: function () {
                var t = this.getScrollY(),
                    e = t > this.lastKnownScrollY ? "down" : "up",
                    n = this.toleranceExceeded(t, e);
                this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(),
                    t + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(),
                    this.shouldUnpin(t, n) ? this.unpin() : this.shouldPin(t, n) && this.pin(),
                    this.lastKnownScrollY = t)
            }
        },
        o.options = {
            tolerance: {
                up: 0,
                down: 0
            },
            offset: 0,
            scroller: window,
            classes: {
                pinned: "headroom--pinned",
                unpinned: "headroom--unpinned",
                top: "headroom--top",
                notTop: "headroom--not-top",
                bottom: "headroom--bottom",
                notBottom: "headroom--not-bottom",
                initial: "headroom"
            }
        },
        o.cutsTheMustard = void 0 !== r && r.rAF && r.bind && r.classList,
        o
}),
function ($) {
    $ && ($.fn.headroom = function (t) {
            return this.each(function () {
                var e = $(this),
                    n = e.data("headroom"),
                    i = "object" == typeof t && t;
                i = $.extend(!0, {}, Headroom.options, i),
                    n || (n = new Headroom(this, i),
                        n.init(),
                        e.data("headroom", n)),
                    "string" == typeof t && (n[t](),
                        "destroy" === t && e.removeData("headroom"))
            })
        },
        $("[data-headroom]").each(function () {
            var t = $(this);
            t.headroom(t.data())
        }))
}(window.Zepto || window.jQuery),
function ($) {
    function t(e, n) {
        if (!(this instanceof t)) {
            var i = new t(e, n);
            return i.open(),
                i
        }
        this.id = t.id++,
            this.setup(e, n),
            this.chainCallbacks(t._callbackChain)
    }

    function e(t, e) {
        var n = {};
        for (var i in t)
            i in e && (n[i] = t[i],
                delete t[i]);
        return n
    }

    function n(t, e) {
        var n = {},
            i = new RegExp("^" + e + "([A-Z])(.*)");
        for (var o in t) {
            var r = o.match(i);
            if (r) {
                n[(r[1] + r[2].replace(/([A-Z])/g, "-$1")).toLowerCase()] = t[o]
            }
        }
        return n
    }
    if (void 0 === $)
        return void("console" in window && window.console.info("Too much lightness, Featherlight needs jQuery."));
    var i = [],
        o = function (t) {
            return i = $.grep(i, function (e) {
                return e !== t && e.$instance.closest("body").length > 0
            })
        },
        r = {
            allowfullscreen: 1,
            frameborder: 1,
            height: 1,
            longdesc: 1,
            marginheight: 1,
            marginwidth: 1,
            name: 1,
            referrerpolicy: 1,
            scrolling: 1,
            sandbox: 1,
            src: 1,
            srcdoc: 1,
            width: 1
        },
        s = {
            keyup: "onKeyUp",
            resize: "onResize"
        },
        a = function (e) {
            $.each(t.opened().reverse(), function () {
                if (!e.isDefaultPrevented() && !1 === this[s[e.type]](e))
                    return e.preventDefault(),
                        e.stopPropagation(),
                        !1
            })
        },
        l = function (e) {
            if (e !== t._globalHandlerInstalled) {
                t._globalHandlerInstalled = e;
                var n = $.map(s, function (e, n) {
                    return n + "." + t.prototype.namespace
                }).join(" ");
                $(window)[e ? "on" : "off"](n, a)
            }
        };
    t.prototype = {
            constructor: t,
            namespace: "featherlight",
            targetAttr: "data-featherlight",
            variant: null,
            resetCss: !1,
            background: null,
            openTrigger: "click",
            closeTrigger: "click",
            filter: null,
            root: "body",
            openSpeed: 250,
            closeSpeed: 250,
            closeOnClick: "background",
            closeOnEsc: !0,
            closeIcon: "&#10005;",
            loading: "",
            persist: !1,
            otherClose: null,
            beforeOpen: $.noop,
            beforeContent: $.noop,
            beforeClose: $.noop,
            afterOpen: $.noop,
            afterContent: $.noop,
            afterClose: $.noop,
            onKeyUp: $.noop,
            onResize: $.noop,
            type: null,
            contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
            setup: function (t, e) {
                "object" != typeof t || t instanceof $ != !1 || e || (e = t,
                    t = void 0);
                var n = $.extend(this, e, {
                        target: t
                    }),
                    i = n.resetCss ? n.namespace + "-reset" : n.namespace,
                    o = $(n.background || ['<div class="' + i + "-loading " + i + '">', '<div class="' + i + '-content">', '<button class="' + i + "-close-icon " + n.namespace + '-close" aria-label="Close">', n.closeIcon, "</button>", '<div class="' + n.namespace + '-inner">' + n.loading + "</div>", "</div>", "</div>"].join("")),
                    r = "." + n.namespace + "-close" + (n.otherClose ? "," + n.otherClose : "");
                return n.$instance = o.clone().addClass(n.variant),
                    n.$instance.on(n.closeTrigger + "." + n.namespace, function (t) {
                        var e = $(t.target);
                        ("background" === n.closeOnClick && e.is("." + n.namespace) || "anywhere" === n.closeOnClick || e.closest(r).length) && (n.close(t),
                            t.preventDefault())
                    }),
                    this
            },
            getContent: function () {
                if (!1 !== this.persist && this.$content)
                    return this.$content;
                var t = this,
                    e = this.constructor.contentFilters,
                    n = function (e) {
                        return t.$currentTarget && t.$currentTarget.attr(e)
                    },
                    i = n(t.targetAttr),
                    o = t.target || i || "",
                    r = e[t.type];
                if (!r && o in e && (r = e[o],
                        o = t.target && i),
                    o = o || n("href") || "",
                    !r)
                    for (var s in e)
                        t[s] && (r = e[s],
                            o = t[s]);
                if (!r) {
                    var a = o;
                    if (o = null,
                        $.each(t.contentFilters, function () {
                            return r = e[this],
                                r.test && (o = r.test(a)),
                                !o && r.regex && a.match && a.match(r.regex) && (o = a),
                                !o
                        }),
                        !o)
                        return "console" in window && window.console.error("Featherlight: no content filter found " + (a ? ' for "' + a + '"' : " (no target specified)")),
                            !1
                }
                return r.process.call(t, o)
            },
            setContent: function (t) {
                var e = this;
                return t.is("iframe") && e.$instance.addClass(e.namespace + "-iframe"),
                    e.$instance.removeClass(e.namespace + "-loading"),
                    e.$instance.find("." + e.namespace + "-inner").not(t).slice(1).remove().end().replaceWith($.contains(e.$instance[0], t[0]) ? "" : t),
                    e.$content = t.addClass(e.namespace + "-inner"),
                    e
            },
            open: function (t) {
                var e = this;
                if (e.$instance.hide().appendTo(e.root),
                    !(t && t.isDefaultPrevented() || !1 === e.beforeOpen(t))) {
                    t && t.preventDefault();
                    var n = e.getContent();
                    if (n)
                        return i.push(e),
                            l(!0),
                            e.$instance.fadeIn(e.openSpeed),
                            e.beforeContent(t),
                            $.when(n).always(function (n) {
                                e.setContent(n),
                                    e.afterContent(t)
                            }).then(e.$instance.promise()).done(function () {
                                e.afterOpen(t)
                            })
                }
                return e.$instance.detach(),
                    $.Deferred().reject().promise()
            },
            close: function (t) {
                var e = this,
                    n = $.Deferred();
                return !1 === e.beforeClose(t) ? n.reject() : (0 === o(e).length && l(!1),
                        e.$instance.fadeOut(e.closeSpeed, function () {
                            e.$instance.detach(),
                                e.afterClose(t),
                                n.resolve()
                        })),
                    n.promise()
            },
            resize: function (t, e) {
                if (t && e) {
                    this.$content.css("width", "").css("height", "");
                    var n = Math.max(t / (parseInt(this.$content.parent().css("width"), 10) - 1), e / (parseInt(this.$content.parent().css("height"), 10) - 1));
                    n > 1 && (n = e / Math.floor(e / n),
                        this.$content.css("width", t / n + "px").css("height", e / n + "px"))
                }
            },
            chainCallbacks: function (t) {
                for (var e in t)
                    this[e] = $.proxy(t[e], this, $.proxy(this[e], this))
            }
        },
        $.extend(t, {
            id: 0,
            autoBind: "[data-featherlight]",
            defaults: t.prototype,
            contentFilters: {
                jquery: {
                    regex: /^[#.]\w/,
                    test: function (t) {
                        return t instanceof $ && t
                    },
                    process: function (t) {
                        return !1 !== this.persist ? $(t) : $(t).clone(!0)
                    }
                },
                image: {
                    regex: /\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,
                    process: function (t) {
                        var e = this,
                            n = $.Deferred(),
                            i = new Image,
                            o = $('<img src="' + t + '" alt="" class="' + e.namespace + '-image" />');
                        return i.onload = function () {
                                o.naturalWidth = i.width,
                                    o.naturalHeight = i.height,
                                    n.resolve(o)
                            },
                            i.onerror = function () {
                                n.reject(o)
                            },
                            i.src = t,
                            n.promise()
                    }
                },
                html: {
                    regex: /^\s*<[\w!][^<]*>/,
                    process: function (t) {
                        return $(t)
                    }
                },
                ajax: {
                    regex: /./,
                    process: function (t) {
                        var e = this,
                            n = $.Deferred(),
                            i = $("<div></div>").load(t, function (t, e) {
                                "error" !== e && n.resolve(i.contents()),
                                    n.fail()
                            });
                        return n.promise()
                    }
                },
                iframe: {
                    process: function (t) {
                        var i = new $.Deferred,
                            o = $("<iframe/>"),
                            s = n(this, "iframe"),
                            a = e(s, r);
                        return o.hide().attr("src", t).attr(a).css(s).on("load", function () {
                                i.resolve(o.show())
                            }).appendTo(this.$instance.find("." + this.namespace + "-content")),
                            i.promise()
                    }
                },
                text: {
                    process: function (t) {
                        return $("<div>", {
                            text: t
                        })
                    }
                }
            },
            functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
            readElementConfig: function (t, e) {
                var n = this,
                    i = new RegExp("^data-" + e + "-(.*)"),
                    o = {};
                return t && t.attributes && $.each(t.attributes, function () {
                        var t = this.name.match(i);
                        if (t) {
                            var e = this.value,
                                r = $.camelCase(t[1]);
                            if ($.inArray(r, n.functionAttributes) >= 0)
                                e = new Function(e);
                            else
                                try {
                                    e = JSON.parse(e)
                                } catch (t) {}
                            o[r] = e
                        }
                    }),
                    o
            },
            extend: function (t, e) {
                var n = function () {
                    this.constructor = t
                };
                return n.prototype = this.prototype,
                    t.prototype = new n,
                    t.__super__ = this.prototype,
                    $.extend(t, this, e),
                    t.defaults = t.prototype,
                    t
            },
            attach: function (t, e, n) {
                var i = this;
                "object" != typeof e || e instanceof $ != !1 || n || (n = e,
                        e = void 0),
                    n = $.extend({}, n);
                var o = n.namespace || i.defaults.namespace,
                    r = $.extend({}, i.defaults, i.readElementConfig(t[0], o), n),
                    s, a = function (o) {
                        var a = $(o.currentTarget),
                            l = $.extend({
                                $source: t,
                                $currentTarget: a
                            }, i.readElementConfig(t[0], r.namespace), i.readElementConfig(o.currentTarget, r.namespace), n),
                            c = s || a.data("featherlight-persisted") || new i(e, l);
                        "shared" === c.persist ? s = c : !1 !== c.persist && a.data("featherlight-persisted", c),
                            l.$currentTarget.blur && l.$currentTarget.blur(),
                            c.open(o)
                    };
                return t.on(r.openTrigger + "." + r.namespace, r.filter, a),
                    a
            },
            current: function () {
                var t = this.opened();
                return t[t.length - 1] || null
            },
            opened: function () {
                var t = this;
                return o(),
                    $.grep(i, function (e) {
                        return e instanceof t
                    })
            },
            close: function (t) {
                var e = this.current();
                if (e)
                    return e.close(t)
            },
            _onReady: function () {
                var t = this;
                t.autoBind && ($(t.autoBind).each(function () {
                        t.attach($(this))
                    }),
                    $(document).on("click", t.autoBind, function (e) {
                        if (!e.isDefaultPrevented()) {
                            t.attach($(e.currentTarget))(e)
                        }
                    }))
            },
            _callbackChain: {
                onKeyUp: function (t, e) {
                    return 27 === e.keyCode ? (this.closeOnEsc && $.featherlight.close(e),
                        !1) : t(e)
                },
                beforeOpen: function (t, e) {
                    return this._previouslyActive = document.activeElement,
                        this._$previouslyTabbable = $("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")),
                        this._$previouslyWithTabIndex = $("[tabindex]").not('[tabindex="-1"]'),
                        this._previousWithTabIndices = this._$previouslyWithTabIndex.map(function (t, e) {
                            return $(e).attr("tabindex")
                        }),
                        this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex", -1),
                        document.activeElement.blur && document.activeElement.blur(),
                        t(e)
                },
                afterClose: function (t, e) {
                    var n = t(e),
                        i = this;
                    return this._$previouslyTabbable.removeAttr("tabindex"),
                        this._$previouslyWithTabIndex.each(function (t, e) {
                            $(e).attr("tabindex", i._previousWithTabIndices[t])
                        }),
                        this._previouslyActive.focus(),
                        n
                },
                onResize: function (t, e) {
                    return this.resize(this.$content.naturalWidth, this.$content.naturalHeight),
                        t(e)
                },
                afterContent: function (t, e) {
                    var n = t(e);
                    return this.$instance.find("[autofocus]:not([disabled])").focus(),
                        this.onResize(e),
                        n
                }
            }
        }),
        $.featherlight = t,
        $.fn.featherlight = function (e, n) {
            return t.attach(this, e, n),
                this
        },
        $(document).ready(function () {
            t._onReady()
        })
}(jQuery),
function ($) {
    function t(e, n) {
        if (!(this instanceof t)) {
            var i = new t($.extend({
                $source: e,
                $currentTarget: e.first()
            }, n));
            return i.open(),
                i
        }
        $.featherlight.apply(this, arguments),
            this.chainCallbacks(s)
    }
    var e = function (t) {
            window.console && window.console.warn && window.console.warn("FeatherlightGallery: " + t)
        },
        n = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        i = $.event && $.event.special.swipeleft && $,
        o = window.Hammer && function (t) {
            var e = new window.Hammer.Manager(t[0]);
            return e.add(new window.Hammer.Swipe),
                e
        },
        r = n && (i || o);
    n && !r && e("No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.");
    var s = {
        afterClose: function (t, e) {
            var n = this;
            return n.$instance.off("next." + n.namespace + " previous." + n.namespace),
                n._swiper && (n._swiper.off("swipeleft", n._swipeleft).off("swiperight", n._swiperight),
                    n._swiper = null),
                t(e)
        },
        beforeOpen: function (t, e) {
            var n = this;
            return n.$instance.on("next." + n.namespace + " previous." + n.namespace, function (t) {
                    var e = "next" === t.type ? 1 : -1;
                    n.navigateTo(n.currentNavigation() + e)
                }),
                r && (n._swiper = r(n.$instance).on("swipeleft", n._swipeleft = function () {
                        n.$instance.trigger("next")
                    }).on("swiperight", n._swiperight = function () {
                        n.$instance.trigger("previous")
                    }),
                    n.$instance.addClass(this.namespace + "-swipe-aware", r)),
                n.$instance.find("." + n.namespace + "-content").append(n.createNavigation("previous")).append(n.createNavigation("next")),
                t(e)
        },
        beforeContent: function (t, e) {
            var n = this.currentNavigation(),
                i = this.slides().length;
            return this.$instance.toggleClass(this.namespace + "-first-slide", 0 === n).toggleClass(this.namespace + "-last-slide", n === i - 1),
                t(e)
        },
        onKeyUp: function (t, e) {
            var n = {
                37: "previous",
                39: "next"
            } [e.keyCode];
            return n ? (this.$instance.trigger(n),
                !1) : t(e)
        }
    };
    $.featherlight.extend(t, {
            autoBind: "[data-featherlight-gallery]"
        }),
        $.extend(t.prototype, {
            previousIcon: "&#9664;",
            nextIcon: "&#9654;",
            galleryFadeIn: 250,
            galleryFadeOut: 300,
            slides: function () {
                return this.filter ? this.$source.find(this.filter) : this.$source
            },
            images: function () {
                return e("images is deprecated, please use slides instead"),
                    this.slides()
            },
            currentNavigation: function () {
                return this.slides().index(this.$currentTarget)
            },
            navigateTo: function (t) {
                var e = this,
                    n = e.slides(),
                    i = n.length,
                    o = e.$instance.find("." + e.namespace + "-inner");
                return t = (t % i + i) % i,
                    e.$currentTarget = n.eq(t),
                    e.beforeContent(),
                    $.when(e.getContent(), o.fadeTo(e.galleryFadeOut, 0)).always(function (t) {
                        t.css("opacity", 0),
                            e.setContent(t),
                            e.afterContent(),
                            t.fadeTo(e.galleryFadeIn, 1)
                    })
            },
            createNavigation: function (t) {
                var e = this;
                return $('<span title="' + t + '" class="' + this.namespace + "-" + t + '"><span>' + this[t + "Icon"] + "</span></span>").click(function () {
                    $(this).trigger(t + "." + e.namespace)
                })
            }
        }),
        $.featherlightGallery = t,
        $.fn.featherlightGallery = function (e) {
            return t.attach(this, e),
                this
        },
        $(document).ready(function () {
            t._onReady()
        })
}(jQuery);
var homeView = Barba.BaseView.extend({
    namespace: "home",
    onEnterCompleted: function () {
        home()
    }
});
homeView.init();
var workView = Barba.BaseView.extend({
    namespace: "work",
    onEnterCompleted: function () {
        work()
    }
});
workView.init();
var projectView = Barba.BaseView.extend({
    namespace: "project",
    onEnterCompleted: function () {
        project()
    }
});
projectView.init();
var contactView = Barba.BaseView.extend({
    namespace: "contact"
});
contactView.init();
var articleView = Barba.BaseView.extend({
    namespace: "article",
    onEnterCompleted: function () {
        article(),
            $("#disqus_thread").length && addScript("inject", "var disqus_config=function(){this.page.url=$('#disqus_thread').attr('data-url')};!function(){var t=document,e=t.createElement('script');e.src='https://ivomynttinendesign.disqus.com/embed.js',e.setAttribute('data-timestamp',+new Date),(t.head||t.body).appendChild(e)}();")
    }
});
articleView.init();
var faqView = Barba.BaseView.extend({
    namespace: "faq",
    onEnterCompleted: function () {
        faq()
    }
});
faqView.init(),
    $(".header").clone().appendTo("#headroom"),
    $("#headroom").headroom({
        offset: 600,
        tolerance: {
            up: 20,
            down: 0
        }
    }),
    $(".mobile-menu-button").click(function () {
        $("body").addClass("menu-open"),
            $(".mobile-menu").fadeIn(300).addClass("in")
    }),
    $(".mobile-menu-close").click(function () {
        $("body").removeClass("menu-open"),
            $(".mobile-menu").fadeOut(300).removeClass("in")
    }),
    $("[data-expand]").click(function () {
        var t = $(this).attr("data-expand");
        $(this).toggleClass("collapsed"),
            $(t).slideToggle(300).toggleClass("expand")
    }),
    main(),
    Barba.Pjax.start(),
    Barba.Prefetch.init(),
    Barba.Dispatcher.on("newPageReady", function (t, e, n) {
        main()
    }),
    Barba.Dispatcher.on("initStateChange", function () {
        "function" == typeof ga && ga("send", "pageview", location.pathname)
    });
var FadeTransition = Barba.BaseTransition.extend({
    start: function () {
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this))
    },
    fadeOut: function () {
        return $(".barba-layer").css({
                transform: "translateY(0)"
            }),
            $("body").removeClass("menu-open"),
            $(".mobile-menu").fadeOut(300).removeClass("in"),
            $(this.oldContainer).delay(500).promise()
    },
    fadeIn: function () {
        var t = this,
            e = $(this.newContainer);
        $(".barba-layer").css({
                transform: "translateY(-100%)"
            }),
            $(this.oldContainer).hide(),
            $("html, body").scrollTop(0),
            e.css({
                visibility: "visible",
                opacity: 0
            }),
            e.animate({
                opacity: 1
            }, 600, function () {
                t.done(),
                    $(".barba-layer").remove(),
                    $("body").append('<div class="barba-layer" style="transform:translateY(100%)"></div>')
            })
    }
});
Barba.Pjax.getTransition = function () {
    return FadeTransition
};
