webpackJsonp([2], {
    278: function(t, exports, e) {
        var s, i, a;
        !function(o, r) {
            i = [e(264)],
            s = r,
            a = "function" == typeof s ? s.apply(exports, i) : s,
            !(void 0 !== a && (t.exports = a))
        }(this, function($, t) {
            window.jQuery = $,
            $.fn.jPlayer = function(e) {
                var s = "jPlayer"
                  , i = "string" == typeof e
                  , a = Array.prototype.slice.call(arguments, 1)
                  , o = this;
                return e = !i && a.length ? $.extend.apply(null, [!0, e].concat(a)) : e,
                i && "_" === e.charAt(0) ? o : (i ? this.each(function() {
                    var i = $(this).data(s)
                      , r = i && $.isFunction(i[e]) ? i[e].apply(i, a) : i;
                    if (r !== i && r !== t)
                        return o = r,
                        !1
                }) : this.each(function() {
                    var t = $(this).data(s);
                    t ? t.option(e || {}) : $(this).data(s, new $.jPlayer(e,this))
                }),
                o)
            }
            ,
            $.jPlayer = function(t, e) {
                if (arguments.length) {
                    this.element = $(e),
                    this.options = $.extend(!0, {}, this.options, t);
                    var s = this;
                    this.element.bind("remove.jPlayer", function() {
                        s.destroy()
                    }),
                    this._init()
                }
            }
            ,
            "function" != typeof $.fn.stop && ($.fn.stop = function() {}
            ),
            $.jPlayer.emulateMethods = "load play pause",
            $.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate",
            $.jPlayer.emulateOptions = "muted volume",
            $.jPlayer.reservedEvent = "ready flashreset resize repeat error warning",
            $.jPlayer.event = {},
            $.each(["ready", "setmedia", "flashreset", "resize", "repeat", "click", "error", "warning", "loadstart", "progress", "suspend", "abort", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"], function() {
                $.jPlayer.event[this] = "jPlayer_" + this
            }),
            $.jPlayer.htmlEvent = ["loadstart", "abort", "emptied", "stalled", "loadedmetadata", "canplay", "canplaythrough"],
            $.jPlayer.pause = function() {
                $.jPlayer.prototype.destroyRemoved(),
                $.each($.jPlayer.prototype.instances, function(t, e) {
                    e.data("jPlayer").status.srcSet && e.jPlayer("pause")
                })
            }
            ,
            $.jPlayer.timeFormat = {
                showHour: !1,
                showMin: !0,
                showSec: !0,
                padHour: !1,
                padMin: !0,
                padSec: !0,
                sepHour: ":",
                sepMin: ":",
                sepSec: ""
            };
            var e = function() {
                this.init()
            };
            e.prototype = {
                init: function() {
                    this.options = {
                        timeFormat: $.jPlayer.timeFormat
                    }
                },
                time: function(t) {
                    t = t && "number" == typeof t ? t : 0;
                    var e = new Date(1e3 * t)
                      , s = e.getUTCHours()
                      , i = this.options.timeFormat.showHour ? e.getUTCMinutes() : e.getUTCMinutes() + 60 * s
                      , a = this.options.timeFormat.showMin ? e.getUTCSeconds() : e.getUTCSeconds() + 60 * i
                      , o = this.options.timeFormat.padHour && s < 10 ? "0" + s : s
                      , r = this.options.timeFormat.padMin && i < 10 ? "0" + i : i
                      , n = this.options.timeFormat.padSec && a < 10 ? "0" + a : a
                      , l = "";
                    return l += this.options.timeFormat.showHour ? o + this.options.timeFormat.sepHour : "",
                    l += this.options.timeFormat.showMin ? r + this.options.timeFormat.sepMin : "",
                    l += this.options.timeFormat.showSec ? n + this.options.timeFormat.sepSec : ""
                }
            };
            var s = new e;
            $.jPlayer.convertTime = function(t) {
                return s.time(t)
            }
            ,
            $.jPlayer.uaBrowser = function(t) {
                var e = t.toLowerCase()
                  , s = /(webkit)[ \/]([\w.]+)/
                  , i = /(opera)(?:.*version)?[ \/]([\w.]+)/
                  , a = /(msie) ([\w.]+)/
                  , o = /(mozilla)(?:.*? rv:([\w.]+))?/
                  , r = s.exec(e) || i.exec(e) || a.exec(e) || e.indexOf("compatible") < 0 && o.exec(e) || [];
                return {
                    browser: r[1] || "",
                    version: r[2] || "0"
                }
            }
            ,
            $.jPlayer.uaPlatform = function(t) {
                var e = t.toLowerCase()
                  , s = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/
                  , i = /(ipad|playbook)/
                  , a = /(android)/
                  , o = /(mobile)/
                  , r = s.exec(e) || []
                  , n = i.exec(e) || !o.exec(e) && a.exec(e) || [];
                return r[1] && (r[1] = r[1].replace(/\s/g, "_")),
                {
                    platform: r[1] || "",
                    tablet: n[1] || ""
                }
            }
            ,
            $.jPlayer.browser = {},
            $.jPlayer.platform = {};
            var i = $.jPlayer.uaBrowser(navigator.userAgent);
            i.browser && ($.jPlayer.browser[i.browser] = !0,
            $.jPlayer.browser.version = i.version);
            var a = $.jPlayer.uaPlatform(navigator.userAgent);
            a.platform && ($.jPlayer.platform[a.platform] = !0,
            $.jPlayer.platform.mobile = !a.tablet,
            $.jPlayer.platform.tablet = !!a.tablet),
            $.jPlayer.getDocMode = function() {
                var t;
                return $.jPlayer.browser.msie && (document.documentMode ? t = document.documentMode : (t = 5,
                document.compatMode && "CSS1Compat" === document.compatMode && (t = 7))),
                t
            }
            ,
            $.jPlayer.browser.documentMode = $.jPlayer.getDocMode(),
            $.jPlayer.nativeFeatures = {
                init: function() {
                    var t, e, s, i = document, a = i.createElement("video"), o = {
                        w3c: ["fullscreenEnabled", "fullscreenElement", "requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenerror"],
                        moz: ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror"],
                        webkit: ["", "webkitCurrentFullScreenElement", "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", ""],
                        webkitVideo: ["webkitSupportsFullscreen", "webkitDisplayingFullscreen", "webkitEnterFullscreen", "webkitExitFullscreen", "", ""],
                        ms: ["", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError"]
                    }, r = ["w3c", "moz", "webkit", "webkitVideo", "ms"];
                    for (this.fullscreen = t = {
                        support: {
                            w3c: !!i[o.w3c[0]],
                            moz: !!i[o.moz[0]],
                            webkit: "function" == typeof i[o.webkit[3]],
                            webkitVideo: "function" == typeof a[o.webkitVideo[2]],
                            ms: "function" == typeof a[o.ms[2]]
                        },
                        used: {}
                    },
                    e = 0,
                    s = r.length; e < s; e++) {
                        var n = r[e];
                        if (t.support[n]) {
                            t.spec = n,
                            t.used[n] = !0;
                            break
                        }
                    }
                    if (t.spec) {
                        var l = o[t.spec];
                        t.api = {
                            fullscreenEnabled: !0,
                            fullscreenElement: function(t) {
                                return t = t ? t : i,
                                t[l[1]]
                            },
                            requestFullscreen: function(t) {
                                return t[l[2]]()
                            },
                            exitFullscreen: function(t) {
                                return t = t ? t : i,
                                t[l[3]]()
                            }
                        },
                        t.event = {
                            fullscreenchange: l[4],
                            fullscreenerror: l[5]
                        }
                    } else
                        t.api = {
                            fullscreenEnabled: !1,
                            fullscreenElement: function() {
                                return null
                            },
                            requestFullscreen: function() {},
                            exitFullscreen: function() {}
                        },
                        t.event = {}
                }
            },
            $.jPlayer.nativeFeatures.init(),
            $.jPlayer.focus = null,
            $.jPlayer.keyIgnoreElementNames = "A INPUT TEXTAREA SELECT BUTTON";
            var o = function(t) {
                var e, s = $.jPlayer.focus;
                s && ($.each($.jPlayer.keyIgnoreElementNames.split(/\s+/g), function(s, i) {
                    if (t.target.nodeName.toUpperCase() === i.toUpperCase())
                        return e = !0,
                        !1
                }),
                e || $.each(s.options.keyBindings, function(e, i) {
                    if (i && $.isFunction(i.fn) && ("number" == typeof i.key && t.which === i.key || "string" == typeof i.key && t.key === i.key))
                        return t.preventDefault(),
                        i.fn(s),
                        !1
                }))
            };
            $.jPlayer.keys = function(t) {
                var e = "keydown.jPlayer";
                $(document.documentElement).unbind(e),
                t && $(document.documentElement).bind(e, o)
            }
            ,
            $.jPlayer.keys(!0),
            $.jPlayer.prototype = {
                count: 0,
                version: {
                    script: "2.9.2",
                    needFlash: "2.9.0",
                    flash: "unknown"
                },
                options: {
                    swfPath: "js",
                    solution: "html, flash",
                    supplied: "mp3",
                    auroraFormats: "wav",
                    preload: "metadata",
                    volume: .8,
                    muted: !1,
                    remainingDuration: !1,
                    toggleDuration: !1,
                    captureDuration: !0,
                    playbackRate: 1,
                    defaultPlaybackRate: 1,
                    minPlaybackRate: .5,
                    maxPlaybackRate: 4,
                    wmode: "opaque",
                    backgroundColor: "#000000",
                    cssSelectorAncestor: "#jp_container_1",
                    cssSelector: {
                        videoPlay: ".jp-video-play",
                        play: ".jp-play",
                        pause: ".jp-pause",
                        stop: ".jp-stop",
                        seekBar: ".jp-seek-bar",
                        playBar: ".jp-play-bar",
                        mute: ".jp-mute",
                        unmute: ".jp-unmute",
                        volumeBar: ".jp-volume-bar",
                        volumeBarValue: ".jp-volume-bar-value",
                        volumeMax: ".jp-volume-max",
                        playbackRateBar: ".jp-playback-rate-bar",
                        playbackRateBarValue: ".jp-playback-rate-bar-value",
                        currentTime: ".jp-current-time",
                        duration: ".jp-duration",
                        title: ".jp-title",
                        fullScreen: ".jp-full-screen",
                        restoreScreen: ".jp-restore-screen",
                        repeat: ".jp-repeat",
                        repeatOff: ".jp-repeat-off",
                        gui: ".jp-gui",
                        noSolution: ".jp-no-solution"
                    },
                    stateClass: {
                        playing: "jp-state-playing",
                        seeking: "jp-state-seeking",
                        muted: "jp-state-muted",
                        looped: "jp-state-looped",
                        fullScreen: "jp-state-full-screen",
                        noVolume: "jp-state-no-volume"
                    },
                    useStateClassSkin: !1,
                    autoBlur: !0,
                    smoothPlayBar: !1,
                    fullScreen: !1,
                    fullWindow: !1,
                    autohide: {
                        restored: !1,
                        full: !0,
                        fadeIn: 200,
                        fadeOut: 600,
                        hold: 1e3
                    },
                    loop: !1,
                    repeat: function(t) {
                        t.jPlayer.options.loop ? $(this).unbind(".jPlayerRepeat").bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
                            $(this).jPlayer("play")
                        }) : $(this).unbind(".jPlayerRepeat")
                    },
                    nativeVideoControls: {},
                    noFullWindow: {
                        msie: /msie [0-6]\./,
                        ipad: /ipad.*?os [0-4]\./,
                        iphone: /iphone/,
                        ipod: /ipod/,
                        android_pad: /android [0-3]\.(?!.*?mobile)/,
                        android_phone: /(?=.*android)(?!.*chrome)(?=.*mobile)/,
                        blackberry: /blackberry/,
                        windows_ce: /windows ce/,
                        iemobile: /iemobile/,
                        webos: /webos/
                    },
                    noVolume: {
                        ipad: /ipad/,
                        iphone: /iphone/,
                        ipod: /ipod/,
                        android_pad: /android(?!.*?mobile)/,
                        android_phone: /android.*?mobile/,
                        blackberry: /blackberry/,
                        windows_ce: /windows ce/,
                        iemobile: /iemobile/,
                        webos: /webos/,
                        playbook: /playbook/
                    },
                    timeFormat: {},
                    keyEnabled: !1,
                    audioFullScreen: !1,
                    keyBindings: {
                        play: {
                            key: 80,
                            fn: function(t) {
                                t.status.paused ? t.play() : t.pause()
                            }
                        },
                        fullScreen: {
                            key: 70,
                            fn: function(t) {
                                (t.status.video || t.options.audioFullScreen) && t._setOption("fullScreen", !t.options.fullScreen)
                            }
                        },
                        muted: {
                            key: 77,
                            fn: function(t) {
                                t._muted(!t.options.muted)
                            }
                        },
                        volumeUp: {
                            key: 190,
                            fn: function(t) {
                                t.volume(t.options.volume + .1)
                            }
                        },
                        volumeDown: {
                            key: 188,
                            fn: function(t) {
                                t.volume(t.options.volume - .1)
                            }
                        },
                        loop: {
                            key: 76,
                            fn: function(t) {
                                t._loop(!t.options.loop)
                            }
                        }
                    },
                    verticalVolume: !1,
                    verticalPlaybackRate: !1,
                    globalVolume: !1,
                    idPrefix: "jp",
                    noConflict: "jQuery",
                    emulateHtml: !1,
                    consoleAlerts: !0,
                    errorAlerts: !1,
                    warningAlerts: !1
                },
                optionsAudio: {
                    size: {
                        width: "0px",
                        height: "0px",
                        cssClass: ""
                    },
                    sizeFull: {
                        width: "0px",
                        height: "0px",
                        cssClass: ""
                    }
                },
                optionsVideo: {
                    size: {
                        width: "480px",
                        height: "270px",
                        cssClass: "jp-video-270p"
                    },
                    sizeFull: {
                        width: "100%",
                        height: "100%",
                        cssClass: "jp-video-full"
                    }
                },
                instances: {},
                status: {
                    src: "",
                    media: {},
                    paused: !0,
                    format: {},
                    formatType: "",
                    waitForPlay: !0,
                    waitForLoad: !0,
                    srcSet: !1,
                    video: !1,
                    seekPercent: 0,
                    currentPercentRelative: 0,
                    currentPercentAbsolute: 0,
                    currentTime: 0,
                    duration: 0,
                    remaining: 0,
                    videoWidth: 0,
                    videoHeight: 0,
                    readyState: 0,
                    networkState: 0,
                    playbackRate: 1,
                    ended: 0
                },
                internal: {
                    ready: !1
                },
                solution: {
                    html: !0,
                    aurora: !0,
                    flash: !0
                },
                format: {
                    mp3: {
                        codec: "audio/mpeg",
                        flashCanPlay: !0,
                        media: "audio"
                    },
                    m4a: {
                        codec: 'audio/mp4; codecs="mp4a.40.2"',
                        flashCanPlay: !0,
                        media: "audio"
                    },
                    m3u8a: {
                        codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
                        flashCanPlay: !1,
                        media: "audio"
                    },
                    m3ua: {
                        codec: "audio/mpegurl",
                        flashCanPlay: !1,
                        media: "audio"
                    },
                    oga: {
                        codec: 'audio/ogg; codecs="vorbis, opus"',
                        flashCanPlay: !1,
                        media: "audio"
                    },
                    flac: {
                        codec: "audio/x-flac",
                        flashCanPlay: !1,
                        media: "audio"
                    },
                    wav: {
                        codec: 'audio/wav; codecs="1"',
                        flashCanPlay: !1,
                        media: "audio"
                    },
                    webma: {
                        codec: 'audio/webm; codecs="vorbis"',
                        flashCanPlay: !1,
                        media: "audio"
                    },
                    fla: {
                        codec: "audio/x-flv",
                        flashCanPlay: !0,
                        media: "audio"
                    },
                    rtmpa: {
                        codec: 'audio/rtmp; codecs="rtmp"',
                        flashCanPlay: !0,
                        media: "audio"
                    },
                    m4v: {
                        codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                        flashCanPlay: !0,
                        media: "video"
                    },
                    m3u8v: {
                        codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
                        flashCanPlay: !1,
                        media: "video"
                    },
                    m3uv: {
                        codec: "audio/mpegurl",
                        flashCanPlay: !1,
                        media: "video"
                    },
                    ogv: {
                        codec: 'video/ogg; codecs="theora, vorbis"',
                        flashCanPlay: !1,
                        media: "video"
                    },
                    webmv: {
                        codec: 'video/webm; codecs="vorbis, vp8"',
                        flashCanPlay: !1,
                        media: "video"
                    },
                    flv: {
                        codec: "video/x-flv",
                        flashCanPlay: !0,
                        media: "video"
                    },
                    rtmpv: {
                        codec: 'video/rtmp; codecs="rtmp"',
                        flashCanPlay: !0,
                        media: "video"
                    }
                },
                _init: function() {
                    var e = this;
                    if (this.element.empty(),
                    this.status = $.extend({}, this.status),
                    this.internal = $.extend({}, this.internal),
                    this.options.timeFormat = $.extend({}, $.jPlayer.timeFormat, this.options.timeFormat),
                    this.internal.cmdsIgnored = $.jPlayer.platform.ipad || $.jPlayer.platform.iphone || $.jPlayer.platform.ipod,
                    this.internal.domNode = this.element.get(0),
                    this.options.keyEnabled && !$.jPlayer.focus && ($.jPlayer.focus = this),
                    this.androidFix = {
                        setMedia: !1,
                        play: !1,
                        pause: !1,
                        time: NaN
                    },
                    $.jPlayer.platform.android && (this.options.preload = "auto" !== this.options.preload ? "metadata" : "auto"),
                    this.formats = [],
                    this.solutions = [],
                    this.require = {},
                    this.htmlElement = {},
                    this.html = {},
                    this.html.audio = {},
                    this.html.video = {},
                    this.aurora = {},
                    this.aurora.formats = [],
                    this.aurora.properties = [],
                    this.flash = {},
                    this.css = {},
                    this.css.cs = {},
                    this.css.jq = {},
                    this.ancestorJq = [],
                    this.options.volume = this._limitValue(this.options.volume, 0, 1),
                    $.each(this.options.supplied.toLowerCase().split(","), function(t, s) {
                        var i = s.replace(/^\s+|\s+$/g, "");
                        if (e.format[i]) {
                            var a = !1;
                            $.each(e.formats, function(t, e) {
                                if (i === e)
                                    return a = !0,
                                    !1
                            }),
                            a || e.formats.push(i)
                        }
                    }),
                    $.each(this.options.solution.toLowerCase().split(","), function(t, s) {
                        var i = s.replace(/^\s+|\s+$/g, "");
                        if (e.solution[i]) {
                            var a = !1;
                            $.each(e.solutions, function(t, e) {
                                if (i === e)
                                    return a = !0,
                                    !1
                            }),
                            a || e.solutions.push(i)
                        }
                    }),
                    $.each(this.options.auroraFormats.toLowerCase().split(","), function(t, s) {
                        var i = s.replace(/^\s+|\s+$/g, "");
                        if (e.format[i]) {
                            var a = !1;
                            $.each(e.aurora.formats, function(t, e) {
                                if (i === e)
                                    return a = !0,
                                    !1
                            }),
                            a || e.aurora.formats.push(i)
                        }
                    }),
                    this.internal.instance = "jp_" + this.count,
                    this.instances[this.internal.instance] = this.element,
                    this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count),
                    this.internal.self = $.extend({}, {
                        id: this.element.attr("id"),
                        jq: this.element
                    }),
                    this.internal.audio = $.extend({}, {
                        id: this.options.idPrefix + "_audio_" + this.count,
                        jq: t
                    }),
                    this.internal.video = $.extend({}, {
                        id: this.options.idPrefix + "_video_" + this.count,
                        jq: t
                    }),
                    this.internal.flash = $.extend({}, {
                        id: this.options.idPrefix + "_flash_" + this.count,
                        jq: t,
                        swf: this.options.swfPath + (".swf" !== this.options.swfPath.toLowerCase().slice(-4) ? (this.options.swfPath && "/" !== this.options.swfPath.slice(-1) ? "/" : "") + "jquery.jplayer.swf" : "")
                    }),
                    this.internal.poster = $.extend({}, {
                        id: this.options.idPrefix + "_poster_" + this.count,
                        jq: t
                    }),
                    $.each($.jPlayer.event, function(s, i) {
                        e.options[s] !== t && (e.element.bind(i + ".jPlayer", e.options[s]),
                        e.options[s] = t)
                    }),
                    this.require.audio = !1,
                    this.require.video = !1,
                    $.each(this.formats, function(t, s) {
                        e.require[e.format[s].media] = !0
                    }),
                    this.require.video ? this.options = $.extend(!0, {}, this.optionsVideo, this.options) : this.options = $.extend(!0, {}, this.optionsAudio, this.options),
                    this._setSize(),
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls),
                    this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow),
                    this.status.noVolume = this._uaBlocklist(this.options.noVolume),
                    $.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners(),
                    this._restrictNativeVideoControls(),
                    this.htmlElement.poster = document.createElement("img"),
                    this.htmlElement.poster.id = this.internal.poster.id,
                    this.htmlElement.poster.onload = function() {
                        e.status.video && !e.status.waitForPlay || e.internal.poster.jq.show()
                    }
                    ,
                    this.element.append(this.htmlElement.poster),
                    this.internal.poster.jq = $("#" + this.internal.poster.id),
                    this.internal.poster.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    }),
                    this.internal.poster.jq.hide(),
                    this.internal.poster.jq.bind("click.jPlayer", function() {
                        e._trigger($.jPlayer.event.click)
                    }),
                    this.html.audio.available = !1,
                    this.require.audio && (this.htmlElement.audio = document.createElement("audio"),
                    this.htmlElement.audio.id = this.internal.audio.id,
                    this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio)),
                    this.html.video.available = !1,
                    this.require.video && (this.htmlElement.video = document.createElement("video"),
                    this.htmlElement.video.id = this.internal.video.id,
                    this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video)),
                    this.flash.available = this._checkForFlash(10.1),
                    this.html.canPlay = {},
                    this.aurora.canPlay = {},
                    this.flash.canPlay = {},
                    $.each(this.formats, function(t, s) {
                        e.html.canPlay[s] = e.html[e.format[s].media].available && "" !== e.htmlElement[e.format[s].media].canPlayType(e.format[s].codec),
                        e.aurora.canPlay[s] = $.inArray(s, e.aurora.formats) > -1,
                        e.flash.canPlay[s] = e.format[s].flashCanPlay && e.flash.available
                    }),
                    this.html.desired = !1,
                    this.aurora.desired = !1,
                    this.flash.desired = !1,
                    $.each(this.solutions, function(t, s) {
                        if (0 === t)
                            e[s].desired = !0;
                        else {
                            var i = !1
                              , a = !1;
                            $.each(e.formats, function(t, s) {
                                e[e.solutions[0]].canPlay[s] && ("video" === e.format[s].media ? a = !0 : i = !0)
                            }),
                            e[s].desired = e.require.audio && !i || e.require.video && !a
                        }
                    }),
                    this.html.support = {},
                    this.aurora.support = {},
                    this.flash.support = {},
                    $.each(this.formats, function(t, s) {
                        e.html.support[s] = e.html.canPlay[s] && e.html.desired,
                        e.aurora.support[s] = e.aurora.canPlay[s] && e.aurora.desired,
                        e.flash.support[s] = e.flash.canPlay[s] && e.flash.desired
                    }),
                    this.html.used = !1,
                    this.aurora.used = !1,
                    this.flash.used = !1,
                    $.each(this.solutions, function(t, s) {
                        $.each(e.formats, function(t, i) {
                            if (e[s].support[i])
                                return e[s].used = !0,
                                !1
                        })
                    }),
                    this._resetActive(),
                    this._resetGate(),
                    this._cssSelectorAncestor(this.options.cssSelectorAncestor),
                    this.html.used || this.aurora.used || this.flash.used ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide() : (this._error({
                        type: $.jPlayer.error.NO_SOLUTION,
                        context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
                        message: $.jPlayer.errorMsg.NO_SOLUTION,
                        hint: $.jPlayer.errorHint.NO_SOLUTION
                    }),
                    this.css.jq.noSolution.length && this.css.jq.noSolution.show()),
                    this.flash.used) {
                        var s, i = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
                        if ($.jPlayer.browser.msie && (Number($.jPlayer.browser.version) < 9 || $.jPlayer.browser.documentMode < 9)) {
                            var a = '<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>'
                              , o = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + i + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                            s = document.createElement(a);
                            for (var r = 0; r < o.length; r++)
                                s.appendChild(document.createElement(o[r]))
                        } else {
                            var n = function(t, e, s) {
                                var i = document.createElement("param");
                                i.setAttribute("name", e),
                                i.setAttribute("value", s),
                                t.appendChild(i)
                            };
                            s = document.createElement("object"),
                            s.setAttribute("id", this.internal.flash.id),
                            s.setAttribute("name", this.internal.flash.id),
                            s.setAttribute("data", this.internal.flash.swf),
                            s.setAttribute("type", "application/x-shockwave-flash"),
                            s.setAttribute("width", "1"),
                            s.setAttribute("height", "1"),
                            s.setAttribute("tabindex", "-1"),
                            n(s, "flashvars", i),
                            n(s, "allowscriptaccess", "always"),
                            n(s, "bgcolor", this.options.backgroundColor),
                            n(s, "wmode", this.options.wmode)
                        }
                        this.element.append(s),
                        this.internal.flash.jq = $(s)
                    }
                    this.html.used && !this.flash.used ? this.status.playbackRateEnabled = this._testPlaybackRate("audio") : this.status.playbackRateEnabled = !1,
                    this._updatePlaybackRate(),
                    this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio),
                    this.element.append(this.htmlElement.audio),
                    this.internal.audio.jq = $("#" + this.internal.audio.id)),
                    this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video),
                    this.element.append(this.htmlElement.video),
                    this.internal.video.jq = $("#" + this.internal.video.id),
                    this.status.nativeVideoControls ? this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    }) : this.internal.video.jq.css({
                        width: "0px",
                        height: "0px"
                    }),
                    this.internal.video.jq.bind("click.jPlayer", function() {
                        e._trigger($.jPlayer.event.click)
                    }))),
                    this.aurora.used,
                    this.options.emulateHtml && this._emulateHtmlBridge(),
                    !this.html.used && !this.aurora.used || this.flash.used || setTimeout(function() {
                        e.internal.ready = !0,
                        e.version.flash = "n/a",
                        e._trigger($.jPlayer.event.repeat),
                        e._trigger($.jPlayer.event.ready)
                    }, 100),
                    this._updateNativeVideoControls(),
                    this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(),
                    $.jPlayer.prototype.count++
                },
                destroy: function() {
                    this.clearMedia(),
                    this._removeUiClass(),
                    this.css.jq.currentTime.length && this.css.jq.currentTime.text(""),
                    this.css.jq.duration.length && this.css.jq.duration.text(""),
                    $.each(this.css.jq, function(t, e) {
                        e.length && e.unbind(".jPlayer")
                    }),
                    this.internal.poster.jq.unbind(".jPlayer"),
                    this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer"),
                    this._fullscreenRemoveEventListeners(),
                    this === $.jPlayer.focus && ($.jPlayer.focus = null),
                    this.options.emulateHtml && this._destroyHtmlBridge(),
                    this.element.removeData("jPlayer"),
                    this.element.unbind(".jPlayer"),
                    this.element.empty(),
                    delete this.instances[this.internal.instance]
                },
                destroyRemoved: function() {
                    var t = this;
                    $.each(this.instances, function(e, s) {
                        t.element !== s && (s.data("jPlayer") || (s.jPlayer("destroy"),
                        delete t.instances[e]))
                    })
                },
                enable: function() {},
                disable: function() {},
                _testCanPlayType: function(t) {
                    try {
                        return t.canPlayType(this.format.mp3.codec),
                        !0
                    } catch (t) {
                        return !1
                    }
                },
                _testPlaybackRate: function(t) {
                    var e, s = .5;
                    t = "string" == typeof t ? t : "audio",
                    e = document.createElement(t);
                    try {
                        return "playbackRate"in e && (e.playbackRate = s,
                        e.playbackRate === s)
                    } catch (t) {
                        return !1
                    }
                },
                _uaBlocklist: function(t) {
                    var e = navigator.userAgent.toLowerCase()
                      , s = !1;
                    return $.each(t, function(t, i) {
                        if (i && i.test(e))
                            return s = !0,
                            !1
                    }),
                    s
                },
                _restrictNativeVideoControls: function() {
                    this.require.audio && this.status.nativeVideoControls && (this.status.nativeVideoControls = !1,
                    this.status.noFullWindow = !0)
                },
                _updateNativeVideoControls: function() {
                    this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls,
                    this._updateAutohide(),
                    this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(),
                    this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    })) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(),
                    this.internal.video.jq.css({
                        width: "0px",
                        height: "0px"
                    })))
                },
                _addHtmlEventListeners: function(t, e) {
                    var s = this;
                    t.preload = this.options.preload,
                    t.muted = this.options.muted,
                    t.volume = this.options.volume,
                    this.status.playbackRateEnabled && (t.defaultPlaybackRate = this.options.defaultPlaybackRate,
                    t.playbackRate = this.options.playbackRate),
                    t.addEventListener("progress", function() {
                        e.gate && (s.internal.cmdsIgnored && this.readyState > 0 && (s.internal.cmdsIgnored = !1),
                        s._getHtmlStatus(t),
                        s._updateInterface(),
                        s._trigger($.jPlayer.event.progress))
                    }, !1),
                    t.addEventListener("loadeddata", function() {
                        e.gate && (s.androidFix.setMedia = !1,
                        s.androidFix.play && (s.androidFix.play = !1,
                        s.play(s.androidFix.time)),
                        s.androidFix.pause && (s.androidFix.pause = !1,
                        s.pause(s.androidFix.time)),
                        s._trigger($.jPlayer.event.loadeddata))
                    }, !1),
                    t.addEventListener("timeupdate", function() {
                        e.gate && (s._getHtmlStatus(t),
                        s._updateInterface(),
                        s._trigger($.jPlayer.event.timeupdate))
                    }, !1),
                    t.addEventListener("durationchange", function() {
                        e.gate && (s._getHtmlStatus(t),
                        s._updateInterface(),
                        s._trigger($.jPlayer.event.durationchange))
                    }, !1),
                    t.addEventListener("play", function() {
                        e.gate && (s._updateButtons(!0),
                        s._html_checkWaitForPlay(),
                        s._trigger($.jPlayer.event.play))
                    }, !1),
                    t.addEventListener("playing", function() {
                        e.gate && (s._updateButtons(!0),
                        s._seeked(),
                        s._trigger($.jPlayer.event.playing))
                    }, !1),
                    t.addEventListener("pause", function() {
                        e.gate && (s._updateButtons(!1),
                        s._trigger($.jPlayer.event.pause))
                    }, !1),
                    t.addEventListener("waiting", function() {
                        e.gate && (s._seeking(),
                        s._trigger($.jPlayer.event.waiting))
                    }, !1),
                    t.addEventListener("seeking", function() {
                        e.gate && (s._seeking(),
                        s._trigger($.jPlayer.event.seeking))
                    }, !1),
                    t.addEventListener("seeked", function() {
                        e.gate && (s._seeked(),
                        s._trigger($.jPlayer.event.seeked))
                    }, !1),
                    t.addEventListener("volumechange", function() {
                        e.gate && (s.options.volume = t.volume,
                        s.options.muted = t.muted,
                        s._updateMute(),
                        s._updateVolume(),
                        s._trigger($.jPlayer.event.volumechange))
                    }, !1),
                    t.addEventListener("ratechange", function() {
                        e.gate && (s.options.defaultPlaybackRate = t.defaultPlaybackRate,
                        s.options.playbackRate = t.playbackRate,
                        s._updatePlaybackRate(),
                        s._trigger($.jPlayer.event.ratechange))
                    }, !1),
                    t.addEventListener("suspend", function() {
                        e.gate && (s._seeked(),
                        s._trigger($.jPlayer.event.suspend))
                    }, !1),
                    t.addEventListener("ended", function() {
                        e.gate && ($.jPlayer.browser.webkit || (s.htmlElement.media.currentTime = 0),
                        s.htmlElement.media.pause(),
                        s._updateButtons(!1),
                        s._getHtmlStatus(t, !0),
                        s._updateInterface(),
                        s._trigger($.jPlayer.event.ended))
                    }, !1),
                    t.addEventListener("error", function() {
                        e.gate && (s._updateButtons(!1),
                        s._seeked(),
                        s.status.srcSet && (clearTimeout(s.internal.htmlDlyCmdId),
                        s.status.waitForLoad = !0,
                        s.status.waitForPlay = !0,
                        s.status.video && !s.status.nativeVideoControls && s.internal.video.jq.css({
                            width: "0px",
                            height: "0px"
                        }),
                        s._validString(s.status.media.poster) && !s.status.nativeVideoControls && s.internal.poster.jq.show(),
                        s.css.jq.videoPlay.length && s.css.jq.videoPlay.show(),
                        s._error({
                            type: $.jPlayer.error.URL,
                            context: s.status.src,
                            message: $.jPlayer.errorMsg.URL,
                            hint: $.jPlayer.errorHint.URL
                        })))
                    }, !1),
                    $.each($.jPlayer.htmlEvent, function(i, a) {
                        t.addEventListener(this, function() {
                            e.gate && s._trigger($.jPlayer.event[a])
                        }, !1)
                    })
                },
                _addAuroraEventListeners: function(t, e) {
                    var s = this;
                    t.volume = 100 * this.options.volume,
                    t.on("progress", function() {
                        e.gate && (s.internal.cmdsIgnored && this.readyState > 0 && (s.internal.cmdsIgnored = !1),
                        s._getAuroraStatus(t),
                        s._updateInterface(),
                        s._trigger($.jPlayer.event.progress),
                        t.duration > 0 && s._trigger($.jPlayer.event.timeupdate))
                    }, !1),
                    t.on("ready", function() {
                        e.gate && s._trigger($.jPlayer.event.loadeddata)
                    }, !1),
                    t.on("duration", function() {
                        e.gate && (s._getAuroraStatus(t),
                        s._updateInterface(),
                        s._trigger($.jPlayer.event.durationchange))
                    }, !1),
                    t.on("end", function() {
                        e.gate && (s._updateButtons(!1),
                        s._getAuroraStatus(t, !0),
                        s._updateInterface(),
                        s._trigger($.jPlayer.event.ended))
                    }, !1),
                    t.on("error", function() {
                        e.gate && (s._updateButtons(!1),
                        s._seeked(),
                        s.status.srcSet && (s.status.waitForLoad = !0,
                        s.status.waitForPlay = !0,
                        s.status.video && !s.status.nativeVideoControls && s.internal.video.jq.css({
                            width: "0px",
                            height: "0px"
                        }),
                        s._validString(s.status.media.poster) && !s.status.nativeVideoControls && s.internal.poster.jq.show(),
                        s.css.jq.videoPlay.length && s.css.jq.videoPlay.show(),
                        s._error({
                            type: $.jPlayer.error.URL,
                            context: s.status.src,
                            message: $.jPlayer.errorMsg.URL,
                            hint: $.jPlayer.errorHint.URL
                        })))
                    }, !1)
                },
                _getHtmlStatus: function(t, e) {
                    var s = 0
                      , i = 0
                      , a = 0
                      , o = 0;
                    isFinite(t.duration) && (this.status.duration = t.duration),
                    s = t.currentTime,
                    i = this.status.duration > 0 ? 100 * s / this.status.duration : 0,
                    "object" == typeof t.seekable && t.seekable.length > 0 ? (a = this.status.duration > 0 ? 100 * t.seekable.end(t.seekable.length - 1) / this.status.duration : 100,
                    o = this.status.duration > 0 ? 100 * t.currentTime / t.seekable.end(t.seekable.length - 1) : 0) : (a = 100,
                    o = i),
                    e && (s = 0,
                    o = 0,
                    i = 0),
                    this.status.seekPercent = a,
                    this.status.currentPercentRelative = o,
                    this.status.currentPercentAbsolute = i,
                    this.status.currentTime = s,
                    this.status.remaining = this.status.duration - this.status.currentTime,
                    this.status.videoWidth = t.videoWidth,
                    this.status.videoHeight = t.videoHeight,
                    this.status.readyState = t.readyState,
                    this.status.networkState = t.networkState,
                    this.status.playbackRate = t.playbackRate,
                    this.status.ended = t.ended
                },
                _getAuroraStatus: function(t, e) {
                    var s = 0
                      , i = 0
                      , a = 0
                      , o = 0;
                    this.status.duration = t.duration / 1e3,
                    s = t.currentTime / 1e3,
                    i = this.status.duration > 0 ? 100 * s / this.status.duration : 0,
                    t.buffered > 0 ? (a = this.status.duration > 0 ? t.buffered * this.status.duration / this.status.duration : 100,
                    o = this.status.duration > 0 ? s / (t.buffered * this.status.duration) : 0) : (a = 100,
                    o = i),
                    e && (s = 0,
                    o = 0,
                    i = 0),
                    this.status.seekPercent = a,
                    this.status.currentPercentRelative = o,
                    this.status.currentPercentAbsolute = i,
                    this.status.currentTime = s,
                    this.status.remaining = this.status.duration - this.status.currentTime,
                    this.status.readyState = 4,
                    this.status.networkState = 0,
                    this.status.playbackRate = 1,
                    this.status.ended = !1
                },
                _resetStatus: function() {
                    this.status = $.extend({}, this.status, $.jPlayer.prototype.status)
                },
                _trigger: function(t, e, s) {
                    var i = $.Event(t);
                    i.jPlayer = {},
                    i.jPlayer.version = $.extend({}, this.version),
                    i.jPlayer.options = $.extend(!0, {}, this.options),
                    i.jPlayer.status = $.extend(!0, {}, this.status),
                    i.jPlayer.html = $.extend(!0, {}, this.html),
                    i.jPlayer.aurora = $.extend(!0, {}, this.aurora),
                    i.jPlayer.flash = $.extend(!0, {}, this.flash),
                    e && (i.jPlayer.error = $.extend({}, e)),
                    s && (i.jPlayer.warning = $.extend({}, s)),
                    this.element.trigger(i)
                },
                jPlayerFlashEvent: function(t, e) {
                    if (t === $.jPlayer.event.ready)
                        if (this.internal.ready) {
                            if (this.flash.gate) {
                                if (this.status.srcSet) {
                                    var s = this.status.currentTime
                                      , i = this.status.paused;
                                    this.setMedia(this.status.media),
                                    this.volumeWorker(this.options.volume),
                                    s > 0 && (i ? this.pause(s) : this.play(s))
                                }
                                this._trigger($.jPlayer.event.flashreset)
                            }
                        } else
                            this.internal.ready = !0,
                            this.internal.flash.jq.css({
                                width: "0px",
                                height: "0px"
                            }),
                            this.version.flash = e.version,
                            this.version.needFlash !== this.version.flash && this._error({
                                type: $.jPlayer.error.VERSION,
                                context: this.version.flash,
                                message: $.jPlayer.errorMsg.VERSION + this.version.flash,
                                hint: $.jPlayer.errorHint.VERSION
                            }),
                            this._trigger($.jPlayer.event.repeat),
                            this._trigger(t);
                    if (this.flash.gate)
                        switch (t) {
                        case $.jPlayer.event.progress:
                            this._getFlashStatus(e),
                            this._updateInterface(),
                            this._trigger(t);
                            break;
                        case $.jPlayer.event.timeupdate:
                            this._getFlashStatus(e),
                            this._updateInterface(),
                            this._trigger(t);
                            break;
                        case $.jPlayer.event.play:
                            this._seeked(),
                            this._updateButtons(!0),
                            this._trigger(t);
                            break;
                        case $.jPlayer.event.pause:
                            this._updateButtons(!1),
                            this._trigger(t);
                            break;
                        case $.jPlayer.event.ended:
                            this._updateButtons(!1),
                            this._trigger(t);
                            break;
                        case $.jPlayer.event.click:
                            this._trigger(t);
                            break;
                        case $.jPlayer.event.error:
                            this.status.waitForLoad = !0,
                            this.status.waitForPlay = !0,
                            this.status.video && this.internal.flash.jq.css({
                                width: "0px",
                                height: "0px"
                            }),
                            this._validString(this.status.media.poster) && this.internal.poster.jq.show(),
                            this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show(),
                            this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media),
                            this._updateButtons(!1),
                            this._error({
                                type: $.jPlayer.error.URL,
                                context: e.src,
                                message: $.jPlayer.errorMsg.URL,
                                hint: $.jPlayer.errorHint.URL
                            });
                            break;
                        case $.jPlayer.event.seeking:
                            this._seeking(),
                            this._trigger(t);
                            break;
                        case $.jPlayer.event.seeked:
                            this._seeked(),
                            this._trigger(t);
                            break;
                        case $.jPlayer.event.ready:
                            break;
                        default:
                            this._trigger(t)
                        }
                    return !1
                },
                _getFlashStatus: function(t) {
                    this.status.seekPercent = t.seekPercent,
                    this.status.currentPercentRelative = t.currentPercentRelative,
                    this.status.currentPercentAbsolute = t.currentPercentAbsolute,
                    this.status.currentTime = t.currentTime,
                    this.status.duration = t.duration,
                    this.status.remaining = t.duration - t.currentTime,
                    this.status.videoWidth = t.videoWidth,
                    this.status.videoHeight = t.videoHeight,
                    this.status.readyState = 4,
                    this.status.networkState = 0,
                    this.status.playbackRate = 1,
                    this.status.ended = !1
                },
                _updateButtons: function(e) {
                    e === t ? e = !this.status.paused : this.status.paused = !e,
                    e ? this.addStateClass("playing") : this.removeStateClass("playing"),
                    !this.status.noFullWindow && this.options.fullWindow ? this.addStateClass("fullScreen") : this.removeStateClass("fullScreen"),
                    this.options.loop ? this.addStateClass("looped") : this.removeStateClass("looped"),
                    this.css.jq.play.length && this.css.jq.pause.length && (e ? (this.css.jq.play.hide(),
                    this.css.jq.pause.show()) : (this.css.jq.play.show(),
                    this.css.jq.pause.hide())),
                    this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(),
                    this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(),
                    this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(),
                    this.css.jq.restoreScreen.hide())),
                    this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(),
                    this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(),
                    this.css.jq.repeatOff.hide()))
                },
                _updateInterface: function() {
                    this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%"),
                    this.css.jq.playBar.length && (this.options.smoothPlayBar ? this.css.jq.playBar.stop().animate({
                        width: this.status.currentPercentAbsolute + "%"
                    }, 250, "linear") : this.css.jq.playBar.width(this.status.currentPercentRelative + "%"));
                    var t = "";
                    this.css.jq.currentTime.length && (t = this._convertTime(this.status.currentTime),
                    t !== this.css.jq.currentTime.text() && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)));
                    var e = ""
                      , s = this.status.duration
                      , i = this.status.remaining;
                    this.css.jq.duration.length && ("string" == typeof this.status.media.duration ? e = this.status.media.duration : ("number" == typeof this.status.media.duration && (s = this.status.media.duration,
                    i = s - this.status.currentTime),
                    e = this.options.remainingDuration ? (i > 0 ? "-" : "") + this._convertTime(i) : this._convertTime(s)),
                    e !== this.css.jq.duration.text() && this.css.jq.duration.text(e))
                },
                _convertTime: e.prototype.time,
                _seeking: function() {
                    this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg"),
                    this.addStateClass("seeking")
                },
                _seeked: function() {
                    this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg"),
                    this.removeStateClass("seeking")
                },
                _resetGate: function() {
                    this.html.audio.gate = !1,
                    this.html.video.gate = !1,
                    this.aurora.gate = !1,
                    this.flash.gate = !1
                },
                _resetActive: function() {
                    this.html.active = !1,
                    this.aurora.active = !1,
                    this.flash.active = !1
                },
                _escapeHtml: function(t) {
                    return t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;");
                },
                _qualifyURL: function(t) {
                    var e = document.createElement("div");
                    return e.innerHTML = '<a href="' + this._escapeHtml(t) + '">x</a>',
                    e.firstChild.href
                },
                _absoluteMediaUrls: function(t) {
                    var e = this;
                    return $.each(t, function(s, i) {
                        i && e.format[s] && "data:" !== i.substr(0, 5) && (t[s] = e._qualifyURL(i))
                    }),
                    t
                },
                addStateClass: function(t) {
                    this.ancestorJq.length && this.ancestorJq.addClass(this.options.stateClass[t])
                },
                removeStateClass: function(t) {
                    this.ancestorJq.length && this.ancestorJq.removeClass(this.options.stateClass[t])
                },
                setMedia: function(t) {
                    var e = this
                      , s = !1
                      , i = this.status.media.poster !== t.poster;
                    this._resetMedia(),
                    this._resetGate(),
                    this._resetActive(),
                    this.androidFix.setMedia = !1,
                    this.androidFix.play = !1,
                    this.androidFix.pause = !1,
                    t = this._absoluteMediaUrls(t),
                    $.each(this.formats, function(i, a) {
                        var o = "video" === e.format[a].media;
                        if ($.each(e.solutions, function(i, r) {
                            if (e[r].support[a] && e._validString(t[a])) {
                                var n = "html" === r
                                  , l = "aurora" === r;
                                return o ? (n ? (e.html.video.gate = !0,
                                e._html_setVideo(t),
                                e.html.active = !0) : (e.flash.gate = !0,
                                e._flash_setVideo(t),
                                e.flash.active = !0),
                                e.css.jq.videoPlay.length && e.css.jq.videoPlay.show(),
                                e.status.video = !0) : (n ? (e.html.audio.gate = !0,
                                e._html_setAudio(t),
                                e.html.active = !0,
                                $.jPlayer.platform.android && (e.androidFix.setMedia = !0)) : l ? (e.aurora.gate = !0,
                                e._aurora_setAudio(t),
                                e.aurora.active = !0) : (e.flash.gate = !0,
                                e._flash_setAudio(t),
                                e.flash.active = !0),
                                e.css.jq.videoPlay.length && e.css.jq.videoPlay.hide(),
                                e.status.video = !1),
                                s = !0,
                                !1
                            }
                        }),
                        s)
                            return !1
                    }),
                    s ? (this.status.nativeVideoControls && this.html.video.gate || this._validString(t.poster) && (i ? this.htmlElement.poster.src = t.poster : this.internal.poster.jq.show()),
                    "string" == typeof t.title && (this.css.jq.title.length && this.css.jq.title.html(t.title),
                    this.htmlElement.audio && this.htmlElement.audio.setAttribute("title", t.title),
                    this.htmlElement.video && this.htmlElement.video.setAttribute("title", t.title)),
                    this.status.srcSet = !0,
                    this.status.media = $.extend({}, t),
                    this._updateButtons(!1),
                    this._updateInterface(),
                    this._trigger($.jPlayer.event.setmedia)) : this._error({
                        type: $.jPlayer.error.NO_SUPPORT,
                        context: "{supplied:'" + this.options.supplied + "'}",
                        message: $.jPlayer.errorMsg.NO_SUPPORT,
                        hint: $.jPlayer.errorHint.NO_SUPPORT
                    })
                },
                _resetMedia: function() {
                    this._resetStatus(),
                    this._updateButtons(!1),
                    this._updateInterface(),
                    this._seeked(),
                    this.internal.poster.jq.hide(),
                    clearTimeout(this.internal.htmlDlyCmdId),
                    this.html.active ? this._html_resetMedia() : this.aurora.active ? this._aurora_resetMedia() : this.flash.active && this._flash_resetMedia()
                },
                clearMedia: function() {
                    this._resetMedia(),
                    this.html.active ? this._html_clearMedia() : this.aurora.active ? this._aurora_clearMedia() : this.flash.active && this._flash_clearMedia(),
                    this._resetGate(),
                    this._resetActive()
                },
                load: function() {
                    this.status.srcSet ? this.html.active ? this._html_load() : this.aurora.active ? this._aurora_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
                },
                focus: function() {
                    this.options.keyEnabled && ($.jPlayer.focus = this)
                },
                play: function(t) {
                    var e = "object" == typeof t;
                    e && this.options.useStateClassSkin && !this.status.paused ? this.pause(t) : (t = "number" == typeof t ? t : NaN,
                    this.status.srcSet ? (this.focus(),
                    this.html.active ? this._html_play(t) : this.aurora.active ? this._aurora_play(t) : this.flash.active && this._flash_play(t)) : this._urlNotSetError("play"))
                },
                videoPlay: function() {
                    this.play()
                },
                pause: function(t) {
                    t = "number" == typeof t ? t : NaN,
                    this.status.srcSet ? this.html.active ? this._html_pause(t) : this.aurora.active ? this._aurora_pause(t) : this.flash.active && this._flash_pause(t) : this._urlNotSetError("pause")
                },
                tellOthers: function(t, e) {
                    var s = this
                      , i = "function" == typeof e
                      , a = Array.prototype.slice.call(arguments);
                    "string" == typeof t && (i && a.splice(1, 1),
                    $.jPlayer.prototype.destroyRemoved(),
                    $.each(this.instances, function() {
                        s.element !== this && (i && !e.call(this.data("jPlayer"), s) || this.jPlayer.apply(this, a))
                    }))
                },
                pauseOthers: function(t) {
                    this.tellOthers("pause", function() {
                        return this.status.srcSet
                    }, t)
                },
                stop: function() {
                    this.status.srcSet ? this.html.active ? this._html_pause(0) : this.aurora.active ? this._aurora_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
                },
                playHead: function(t) {
                    t = this._limitValue(t, 0, 100),
                    this.status.srcSet ? this.html.active ? this._html_playHead(t) : this.aurora.active ? this._aurora_playHead(t) : this.flash.active && this._flash_playHead(t) : this._urlNotSetError("playHead")
                },
                _muted: function(t) {
                    this.mutedWorker(t),
                    this.options.globalVolume && this.tellOthers("mutedWorker", function() {
                        return this.options.globalVolume
                    }, t)
                },
                mutedWorker: function(t) {
                    this.options.muted = t,
                    this.html.used && this._html_setProperty("muted", t),
                    this.aurora.used && this._aurora_mute(t),
                    this.flash.used && this._flash_mute(t),
                    this.html.video.gate || this.html.audio.gate || (this._updateMute(t),
                    this._updateVolume(this.options.volume),
                    this._trigger($.jPlayer.event.volumechange))
                },
                mute: function(e) {
                    var s = "object" == typeof e;
                    s && this.options.useStateClassSkin && this.options.muted ? this._muted(!1) : (e = e === t || !!e,
                    this._muted(e))
                },
                unmute: function(e) {
                    e = e === t || !!e,
                    this._muted(!e)
                },
                _updateMute: function(e) {
                    e === t && (e = this.options.muted),
                    e ? this.addStateClass("muted") : this.removeStateClass("muted"),
                    this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(),
                    this.css.jq.unmute.hide()) : e ? (this.css.jq.mute.hide(),
                    this.css.jq.unmute.show()) : (this.css.jq.mute.show(),
                    this.css.jq.unmute.hide()))
                },
                volume: function(t) {
                    this.volumeWorker(t),
                    this.options.globalVolume && this.tellOthers("volumeWorker", function() {
                        return this.options.globalVolume
                    }, t)
                },
                volumeWorker: function(t) {
                    t = this._limitValue(t, 0, 1),
                    this.options.volume = t,
                    this.html.used && this._html_setProperty("volume", t),
                    this.aurora.used && this._aurora_volume(t),
                    this.flash.used && this._flash_volume(t),
                    this.html.video.gate || this.html.audio.gate || (this._updateVolume(t),
                    this._trigger($.jPlayer.event.volumechange))
                },
                volumeBar: function(t) {
                    if (this.css.jq.volumeBar.length) {
                        var e = $(t.currentTarget)
                          , s = e.offset()
                          , i = t.pageX - s.left
                          , a = e.width()
                          , o = e.height() - t.pageY + s.top
                          , r = e.height();
                        this.options.verticalVolume ? this.volume(o / r) : this.volume(i / a)
                    }
                    this.options.muted && this._muted(!1)
                },
                _updateVolume: function(e) {
                    e === t && (e = this.options.volume),
                    e = this.options.muted ? 0 : e,
                    this.status.noVolume ? (this.addStateClass("noVolume"),
                    this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(),
                    this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(),
                    this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.removeStateClass("noVolume"),
                    this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(),
                    this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(),
                    this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](100 * e + "%")),
                    this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
                },
                volumeMax: function() {
                    this.volume(1),
                    this.options.muted && this._muted(!1)
                },
                _cssSelectorAncestor: function(t) {
                    var e = this;
                    this.options.cssSelectorAncestor = t,
                    this._removeUiClass(),
                    this.ancestorJq = t ? $(t) : [],
                    t && 1 !== this.ancestorJq.length && this._warning({
                        type: $.jPlayer.warning.CSS_SELECTOR_COUNT,
                        context: t,
                        message: $.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
                        hint: $.jPlayer.warningHint.CSS_SELECTOR_COUNT
                    }),
                    this._addUiClass(),
                    $.each(this.options.cssSelector, function(t, s) {
                        e._cssSelector(t, s)
                    }),
                    this._updateInterface(),
                    this._updateButtons(),
                    this._updateAutohide(),
                    this._updateVolume(),
                    this._updateMute()
                },
                _cssSelector: function(t, e) {
                    var s = this;
                    if ("string" == typeof e)
                        if ($.jPlayer.prototype.options.cssSelector[t]) {
                            if (this.css.jq[t] && this.css.jq[t].length && this.css.jq[t].unbind(".jPlayer"),
                            this.options.cssSelector[t] = e,
                            this.css.cs[t] = this.options.cssSelectorAncestor + " " + e,
                            e ? this.css.jq[t] = $(this.css.cs[t]) : this.css.jq[t] = [],
                            this.css.jq[t].length && this[t]) {
                                var i = function(e) {
                                    e.preventDefault(),
                                    s[t](e),
                                    s.options.autoBlur ? $(this).blur() : $(this).focus()
                                };
                                this.css.jq[t].bind("click.jPlayer", i)
                            }
                            e && 1 !== this.css.jq[t].length && this._warning({
                                type: $.jPlayer.warning.CSS_SELECTOR_COUNT,
                                context: this.css.cs[t],
                                message: $.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[t].length + " found for " + t + " method.",
                                hint: $.jPlayer.warningHint.CSS_SELECTOR_COUNT
                            })
                        } else
                            this._warning({
                                type: $.jPlayer.warning.CSS_SELECTOR_METHOD,
                                context: t,
                                message: $.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
                                hint: $.jPlayer.warningHint.CSS_SELECTOR_METHOD
                            });
                    else
                        this._warning({
                            type: $.jPlayer.warning.CSS_SELECTOR_STRING,
                            context: e,
                            message: $.jPlayer.warningMsg.CSS_SELECTOR_STRING,
                            hint: $.jPlayer.warningHint.CSS_SELECTOR_STRING
                        })
                },
                duration: function(t) {
                    this.options.toggleDuration && (this.options.captureDuration && t.stopPropagation(),
                    this._setOption("remainingDuration", !this.options.remainingDuration))
                },
                seekBar: function(t) {
                    if (this.css.jq.seekBar.length) {
                        var e = $(t.currentTarget)
                          , s = e.offset()
                          , i = t.pageX - s.left
                          , a = e.width()
                          , o = 100 * i / a;
                        this.playHead(o)
                    }
                },
                playbackRate: function(t) {
                    this._setOption("playbackRate", t)
                },
                playbackRateBar: function(t) {
                    if (this.css.jq.playbackRateBar.length) {
                        var e, s, i = $(t.currentTarget), a = i.offset(), o = t.pageX - a.left, r = i.width(), n = i.height() - t.pageY + a.top, l = i.height();
                        e = this.options.verticalPlaybackRate ? n / l : o / r,
                        s = e * (this.options.maxPlaybackRate - this.options.minPlaybackRate) + this.options.minPlaybackRate,
                        this.playbackRate(s)
                    }
                },
                _updatePlaybackRate: function() {
                    var t = this.options.playbackRate
                      , e = (t - this.options.minPlaybackRate) / (this.options.maxPlaybackRate - this.options.minPlaybackRate);
                    this.status.playbackRateEnabled ? (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.show(),
                    this.css.jq.playbackRateBarValue.length && (this.css.jq.playbackRateBarValue.show(),
                    this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate ? "height" : "width"](100 * e + "%"))) : (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.hide(),
                    this.css.jq.playbackRateBarValue.length && this.css.jq.playbackRateBarValue.hide())
                },
                repeat: function(t) {
                    var e = "object" == typeof t;
                    e && this.options.useStateClassSkin && this.options.loop ? this._loop(!1) : this._loop(!0)
                },
                repeatOff: function() {
                    this._loop(!1)
                },
                _loop: function(t) {
                    this.options.loop !== t && (this.options.loop = t,
                    this._updateButtons(),
                    this._trigger($.jPlayer.event.repeat))
                },
                option: function(e, s) {
                    var i = e;
                    if (0 === arguments.length)
                        return $.extend(!0, {}, this.options);
                    if ("string" == typeof e) {
                        var a = e.split(".");
                        if (s === t) {
                            for (var o = $.extend(!0, {}, this.options), r = 0; r < a.length; r++) {
                                if (o[a[r]] === t)
                                    return this._warning({
                                        type: $.jPlayer.warning.OPTION_KEY,
                                        context: e,
                                        message: $.jPlayer.warningMsg.OPTION_KEY,
                                        hint: $.jPlayer.warningHint.OPTION_KEY
                                    }),
                                    t;
                                o = o[a[r]]
                            }
                            return o
                        }
                        i = {};
                        for (var n = i, l = 0; l < a.length; l++)
                            l < a.length - 1 ? (n[a[l]] = {},
                            n = n[a[l]]) : n[a[l]] = s
                    }
                    return this._setOptions(i),
                    this
                },
                _setOptions: function(t) {
                    var e = this;
                    return $.each(t, function(t, s) {
                        e._setOption(t, s)
                    }),
                    this
                },
                _setOption: function(t, e) {
                    var s = this;
                    switch (t) {
                    case "volume":
                        this.volume(e);
                        break;
                    case "muted":
                        this._muted(e);
                        break;
                    case "globalVolume":
                        this.options[t] = e;
                        break;
                    case "cssSelectorAncestor":
                        this._cssSelectorAncestor(e);
                        break;
                    case "cssSelector":
                        $.each(e, function(t, e) {
                            s._cssSelector(t, e)
                        });
                        break;
                    case "playbackRate":
                        this.options[t] = e = this._limitValue(e, this.options.minPlaybackRate, this.options.maxPlaybackRate),
                        this.html.used && this._html_setProperty("playbackRate", e),
                        this._updatePlaybackRate();
                        break;
                    case "defaultPlaybackRate":
                        this.options[t] = e = this._limitValue(e, this.options.minPlaybackRate, this.options.maxPlaybackRate),
                        this.html.used && this._html_setProperty("defaultPlaybackRate", e),
                        this._updatePlaybackRate();
                        break;
                    case "minPlaybackRate":
                        this.options[t] = e = this._limitValue(e, .1, this.options.maxPlaybackRate - .1),
                        this._updatePlaybackRate();
                        break;
                    case "maxPlaybackRate":
                        this.options[t] = e = this._limitValue(e, this.options.minPlaybackRate + .1, 16),
                        this._updatePlaybackRate();
                        break;
                    case "fullScreen":
                        if (this.options[t] !== e) {
                            var i = $.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
                            (!i || i && !this.status.waitForPlay) && (i || (this.options[t] = e),
                            e ? this._requestFullscreen() : this._exitFullscreen(),
                            i || this._setOption("fullWindow", e))
                        }
                        break;
                    case "fullWindow":
                        this.options[t] !== e && (this._removeUiClass(),
                        this.options[t] = e,
                        this._refreshSize());
                        break;
                    case "size":
                        this.options.fullWindow || this.options[t].cssClass === e.cssClass || this._removeUiClass(),
                        this.options[t] = $.extend({}, this.options[t], e),
                        this._refreshSize();
                        break;
                    case "sizeFull":
                        this.options.fullWindow && this.options[t].cssClass !== e.cssClass && this._removeUiClass(),
                        this.options[t] = $.extend({}, this.options[t], e),
                        this._refreshSize();
                        break;
                    case "autohide":
                        this.options[t] = $.extend({}, this.options[t], e),
                        this._updateAutohide();
                        break;
                    case "loop":
                        this._loop(e);
                        break;
                    case "remainingDuration":
                        this.options[t] = e,
                        this._updateInterface();
                        break;
                    case "toggleDuration":
                        this.options[t] = e;
                        break;
                    case "nativeVideoControls":
                        this.options[t] = $.extend({}, this.options[t], e),
                        this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls),
                        this._restrictNativeVideoControls(),
                        this._updateNativeVideoControls();
                        break;
                    case "noFullWindow":
                        this.options[t] = $.extend({}, this.options[t], e),
                        this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls),
                        this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow),
                        this._restrictNativeVideoControls(),
                        this._updateButtons();
                        break;
                    case "noVolume":
                        this.options[t] = $.extend({}, this.options[t], e),
                        this.status.noVolume = this._uaBlocklist(this.options.noVolume),
                        this._updateVolume(),
                        this._updateMute();
                        break;
                    case "emulateHtml":
                        this.options[t] !== e && (this.options[t] = e,
                        e ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
                        break;
                    case "timeFormat":
                        this.options[t] = $.extend({}, this.options[t], e);
                        break;
                    case "keyEnabled":
                        this.options[t] = e,
                        e || this !== $.jPlayer.focus || ($.jPlayer.focus = null);
                        break;
                    case "keyBindings":
                        this.options[t] = $.extend(!0, {}, this.options[t], e);
                        break;
                    case "audioFullScreen":
                        this.options[t] = e;
                        break;
                    case "autoBlur":
                        this.options[t] = e
                    }
                    return this
                },
                _refreshSize: function() {
                    this._setSize(),
                    this._addUiClass(),
                    this._updateSize(),
                    this._updateButtons(),
                    this._updateAutohide(),
                    this._trigger($.jPlayer.event.resize)
                },
                _setSize: function() {
                    this.options.fullWindow ? (this.status.width = this.options.sizeFull.width,
                    this.status.height = this.options.sizeFull.height,
                    this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width,
                    this.status.height = this.options.size.height,
                    this.status.cssClass = this.options.size.cssClass),
                    this.element.css({
                        width: this.status.width,
                        height: this.status.height
                    })
                },
                _addUiClass: function() {
                    this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
                },
                _removeUiClass: function() {
                    this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
                },
                _updateSize: function() {
                    this.internal.poster.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    }),
                    !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    }) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    })
                },
                _updateAutohide: function() {
                    var t = this
                      , e = "mousemove.jPlayer"
                      , s = ".jPlayerAutohide"
                      , i = e + s
                      , a = function(e) {
                        var s, i, a = !1;
                        "undefined" != typeof t.internal.mouse ? (s = t.internal.mouse.x - e.pageX,
                        i = t.internal.mouse.y - e.pageY,
                        a = Math.floor(s) > 0 || Math.floor(i) > 0) : a = !0,
                        t.internal.mouse = {
                            x: e.pageX,
                            y: e.pageY
                        },
                        a && t.css.jq.gui.fadeIn(t.options.autohide.fadeIn, function() {
                            clearTimeout(t.internal.autohideId),
                            t.internal.autohideId = setTimeout(function() {
                                t.css.jq.gui.fadeOut(t.options.autohide.fadeOut)
                            }, t.options.autohide.hold)
                        })
                    };
                    this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0),
                    clearTimeout(this.internal.autohideId),
                    delete this.internal.mouse,
                    this.element.unbind(s),
                    this.css.jq.gui.unbind(s),
                    this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind(i, a),
                    this.css.jq.gui.bind(i, a),
                    this.css.jq.gui.hide()) : this.css.jq.gui.show())
                },
                fullScreen: function(t) {
                    var e = "object" == typeof t;
                    e && this.options.useStateClassSkin && this.options.fullScreen ? this._setOption("fullScreen", !1) : this._setOption("fullScreen", !0)
                },
                restoreScreen: function() {
                    this._setOption("fullScreen", !1)
                },
                _fullscreenAddEventListeners: function() {
                    var t = this
                      , e = $.jPlayer.nativeFeatures.fullscreen;
                    e.api.fullscreenEnabled && e.event.fullscreenchange && ("function" != typeof this.internal.fullscreenchangeHandler && (this.internal.fullscreenchangeHandler = function() {
                        t._fullscreenchange()
                    }
                    ),
                    document.addEventListener(e.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
                },
                _fullscreenRemoveEventListeners: function() {
                    var t = $.jPlayer.nativeFeatures.fullscreen;
                    this.internal.fullscreenchangeHandler && document.removeEventListener(t.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
                },
                _fullscreenchange: function() {
                    this.options.fullScreen && !$.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
                },
                _requestFullscreen: function() {
                    var t = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0]
                      , e = $.jPlayer.nativeFeatures.fullscreen;
                    e.used.webkitVideo && (t = this.htmlElement.video),
                    e.api.fullscreenEnabled && e.api.requestFullscreen(t)
                },
                _exitFullscreen: function() {
                    var t, e = $.jPlayer.nativeFeatures.fullscreen;
                    e.used.webkitVideo && (t = this.htmlElement.video),
                    e.api.fullscreenEnabled && e.api.exitFullscreen(t)
                },
                _html_initMedia: function(t) {
                    var e = $(this.htmlElement.media).empty();
                    $.each(t.track || [], function(t, s) {
                        var i = document.createElement("track");
                        i.setAttribute("kind", s.kind ? s.kind : ""),
                        i.setAttribute("src", s.src ? s.src : ""),
                        i.setAttribute("srclang", s.srclang ? s.srclang : ""),
                        i.setAttribute("label", s.label ? s.label : ""),
                        s.def && i.setAttribute("default", s.def),
                        e.append(i)
                    }),
                    this.htmlElement.media.src = this.status.src,
                    "none" !== this.options.preload && this._html_load(),
                    this._trigger($.jPlayer.event.timeupdate)
                },
                _html_setFormat: function(t) {
                    var e = this;
                    $.each(this.formats, function(s, i) {
                        if (e.html.support[i] && t[i])
                            return e.status.src = t[i],
                            e.status.format[i] = !0,
                            e.status.formatType = i,
                            !1
                    })
                },
                _html_setAudio: function(t) {
                    this._html_setFormat(t),
                    this.htmlElement.media = this.htmlElement.audio,
                    this._html_initMedia(t)
                },
                _html_setVideo: function(t) {
                    this._html_setFormat(t),
                    this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(t.poster) ? t.poster : ""),
                    this.htmlElement.media = this.htmlElement.video,
                    this._html_initMedia(t)
                },
                _html_resetMedia: function() {
                    this.htmlElement.media && (this.htmlElement.media.id !== this.internal.video.id || this.status.nativeVideoControls || this.internal.video.jq.css({
                        width: "0px",
                        height: "0px"
                    }),
                    this.htmlElement.media.pause())
                },
                _html_clearMedia: function() {
                    this.htmlElement.media && (this.htmlElement.media.src = "about:blank",
                    this.htmlElement.media.load())
                },
                _html_load: function() {
                    this.status.waitForLoad && (this.status.waitForLoad = !1,
                    this.htmlElement.media.load()),
                    clearTimeout(this.internal.htmlDlyCmdId)
                },
                _html_play: function(t) {
                    var e = this
                      , s = this.htmlElement.media;
                    if (this.androidFix.pause = !1,
                    this._html_load(),
                    this.androidFix.setMedia)
                        this.androidFix.play = !0,
                        this.androidFix.time = t;
                    else if (isNaN(t))
                        s.play();
                    else {
                        this.internal.cmdsIgnored && s.play();
                        try {
                            if (s.seekable && !("object" == typeof s.seekable && s.seekable.length > 0))
                                throw 1;
                            s.currentTime = t,
                            s.play()
                        } catch (s) {
                            return void (this.internal.htmlDlyCmdId = setTimeout(function() {
                                e.play(t)
                            }, 250))
                        }
                    }
                    this._html_checkWaitForPlay()
                },
                _html_pause: function(t) {
                    var e = this
                      , s = this.htmlElement.media;
                    if (this.androidFix.play = !1,
                    t > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId),
                    s.pause(),
                    this.androidFix.setMedia)
                        this.androidFix.pause = !0,
                        this.androidFix.time = t;
                    else if (!isNaN(t))
                        try {
                            if (s.seekable && !("object" == typeof s.seekable && s.seekable.length > 0))
                                throw 1;
                            s.currentTime = t
                        } catch (s) {
                            return void (this.internal.htmlDlyCmdId = setTimeout(function() {
                                e.pause(t)
                            }, 250))
                        }
                    t > 0 && this._html_checkWaitForPlay()
                },
                _html_playHead: function(t) {
                    var e = this
                      , s = this.htmlElement.media;
                    this._html_load();
                    try {
                        if ("object" == typeof s.seekable && s.seekable.length > 0)
                            s.currentTime = t * s.seekable.end(s.seekable.length - 1) / 100;
                        else {
                            if (!(s.duration > 0) || isNaN(s.duration))
                                throw "e";
                            s.currentTime = t * s.duration / 100
                        }
                    } catch (s) {
                        return void (this.internal.htmlDlyCmdId = setTimeout(function() {
                            e.playHead(t)
                        }, 250))
                    }
                    this.status.waitForLoad || this._html_checkWaitForPlay()
                },
                _html_checkWaitForPlay: function() {
                    this.status.waitForPlay && (this.status.waitForPlay = !1,
                    this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(),
                    this.status.video && (this.internal.poster.jq.hide(),
                    this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    })))
                },
                _html_setProperty: function(t, e) {
                    this.html.audio.available && (this.htmlElement.audio[t] = e),
                    this.html.video.available && (this.htmlElement.video[t] = e)
                },
                _aurora_setAudio: function(t) {
                    var e = this;
                    $.each(this.formats, function(s, i) {
                        if (e.aurora.support[i] && t[i])
                            return e.status.src = t[i],
                            e.status.format[i] = !0,
                            e.status.formatType = i,
                            !1
                    }),
                    this.aurora.player = new AV.Player.fromURL(this.status.src),
                    this._addAuroraEventListeners(this.aurora.player, this.aurora),
                    "auto" === this.options.preload && (this._aurora_load(),
                    this.status.waitForLoad = !1)
                },
                _aurora_resetMedia: function() {
                    this.aurora.player && this.aurora.player.stop()
                },
                _aurora_clearMedia: function() {},
                _aurora_load: function() {
                    this.status.waitForLoad && (this.status.waitForLoad = !1,
                    this.aurora.player.preload())
                },
                _aurora_play: function(t) {
                    this.status.waitForLoad || isNaN(t) || this.aurora.player.seek(t),
                    this.aurora.player.playing || this.aurora.player.play(),
                    this.status.waitForLoad = !1,
                    this._aurora_checkWaitForPlay(),
                    this._updateButtons(!0),
                    this._trigger($.jPlayer.event.play)
                },
                _aurora_pause: function(t) {
                    isNaN(t) || this.aurora.player.seek(1e3 * t),
                    this.aurora.player.pause(),
                    t > 0 && this._aurora_checkWaitForPlay(),
                    this._updateButtons(!1),
                    this._trigger($.jPlayer.event.pause)
                },
                _aurora_playHead: function(t) {
                    this.aurora.player.duration > 0 && this.aurora.player.seek(t * this.aurora.player.duration / 100),
                    this.status.waitForLoad || this._aurora_checkWaitForPlay()
                },
                _aurora_checkWaitForPlay: function() {
                    this.status.waitForPlay && (this.status.waitForPlay = !1)
                },
                _aurora_volume: function(t) {
                    this.aurora.player.volume = 100 * t
                },
                _aurora_mute: function(t) {
                    t ? (this.aurora.properties.lastvolume = this.aurora.player.volume,
                    this.aurora.player.volume = 0) : this.aurora.player.volume = this.aurora.properties.lastvolume,
                    this.aurora.properties.muted = t
                },
                _flash_setAudio: function(t) {
                    var e = this;
                    try {
                        $.each(this.formats, function(s, i) {
                            if (e.flash.support[i] && t[i]) {
                                switch (i) {
                                case "m4a":
                                case "fla":
                                    e._getMovie().fl_setAudio_m4a(t[i]);
                                    break;
                                case "mp3":
                                    e._getMovie().fl_setAudio_mp3(t[i]);
                                    break;
                                case "rtmpa":
                                    e._getMovie().fl_setAudio_rtmp(t[i])
                                }
                                return e.status.src = t[i],
                                e.status.format[i] = !0,
                                e.status.formatType = i,
                                !1
                            }
                        }),
                        "auto" === this.options.preload && (this._flash_load(),
                        this.status.waitForLoad = !1)
                    } catch (t) {
                        this._flashError(t)
                    }
                },
                _flash_setVideo: function(t) {
                    var e = this;
                    try {
                        $.each(this.formats, function(s, i) {
                            if (e.flash.support[i] && t[i]) {
                                switch (i) {
                                case "m4v":
                                case "flv":
                                    e._getMovie().fl_setVideo_m4v(t[i]);
                                    break;
                                case "rtmpv":
                                    e._getMovie().fl_setVideo_rtmp(t[i])
                                }
                                return e.status.src = t[i],
                                e.status.format[i] = !0,
                                e.status.formatType = i,
                                !1
                            }
                        }),
                        "auto" === this.options.preload && (this._flash_load(),
                        this.status.waitForLoad = !1)
                    } catch (t) {
                        this._flashError(t)
                    }
                },
                _flash_resetMedia: function() {
                    this.internal.flash.jq.css({
                        width: "0px",
                        height: "0px"
                    }),
                    this._flash_pause(NaN)
                },
                _flash_clearMedia: function() {
                    try {
                        this._getMovie().fl_clearMedia()
                    } catch (t) {
                        this._flashError(t)
                    }
                },
                _flash_load: function() {
                    try {
                        this._getMovie().fl_load()
                    } catch (t) {
                        this._flashError(t)
                    }
                    this.status.waitForLoad = !1
                },
                _flash_play: function(t) {
                    try {
                        this._getMovie().fl_play(t)
                    } catch (t) {
                        this._flashError(t)
                    }
                    this.status.waitForLoad = !1,
                    this._flash_checkWaitForPlay()
                },
                _flash_pause: function(t) {
                    try {
                        this._getMovie().fl_pause(t)
                    } catch (t) {
                        this._flashError(t)
                    }
                    t > 0 && (this.status.waitForLoad = !1,
                    this._flash_checkWaitForPlay())
                },
                _flash_playHead: function(t) {
                    try {
                        this._getMovie().fl_play_head(t)
                    } catch (t) {
                        this._flashError(t)
                    }
                    this.status.waitForLoad || this._flash_checkWaitForPlay()
                },
                _flash_checkWaitForPlay: function() {
                    this.status.waitForPlay && (this.status.waitForPlay = !1,
                    this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(),
                    this.status.video && (this.internal.poster.jq.hide(),
                    this.internal.flash.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    })))
                },
                _flash_volume: function(t) {
                    try {
                        this._getMovie().fl_volume(t)
                    } catch (t) {
                        this._flashError(t)
                    }
                },
                _flash_mute: function(t) {
                    try {
                        this._getMovie().fl_mute(t)
                    } catch (t) {
                        this._flashError(t)
                    }
                },
                _getMovie: function() {
                    return document[this.internal.flash.id]
                },
                _getFlashPluginVersion: function() {
                    var t, e = 0;
                    if (window.ActiveXObject)
                        try {
                            if (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                                var s = t.GetVariable("$version");
                                s && (s = s.split(" ")[1].split(","),
                                e = parseInt(s[0], 10) + "." + parseInt(s[1], 10))
                            }
                        } catch (t) {}
                    else
                        navigator.plugins && navigator.mimeTypes.length > 0 && (t = navigator.plugins["Shockwave Flash"],
                        t && (e = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1")));
                    return 1 * e
                },
                _checkForFlash: function(t) {
                    var e = !1;
                    return this._getFlashPluginVersion() >= t && (e = !0),
                    e
                },
                _validString: function(t) {
                    return t && "string" == typeof t
                },
                _limitValue: function(t, e, s) {
                    return t < e ? e : t > s ? s : t
                },
                _urlNotSetError: function(t) {
                    this._error({
                        type: $.jPlayer.error.URL_NOT_SET,
                        context: t,
                        message: $.jPlayer.errorMsg.URL_NOT_SET,
                        hint: $.jPlayer.errorHint.URL_NOT_SET
                    })
                },
                _flashError: function(t) {
                    var e;
                    e = this.internal.ready ? "FLASH_DISABLED" : "FLASH",
                    this._error({
                        type: $.jPlayer.error[e],
                        context: this.internal.flash.swf,
                        message: $.jPlayer.errorMsg[e] + t.message,
                        hint: $.jPlayer.errorHint[e]
                    }),
                    this.internal.flash.jq.css({
                        width: "1px",
                        height: "1px"
                    })
                },
                _error: function(t) {
                    this._trigger($.jPlayer.event.error, t),
                    this.options.errorAlerts && this._alert("Error!" + (t.message ? "\n" + t.message : "") + (t.hint ? "\n" + t.hint : "") + "\nContext: " + t.context)
                },
                _warning: function(e) {
                    this._trigger($.jPlayer.event.warning, t, e),
                    this.options.warningAlerts && this._alert("Warning!" + (e.message ? "\n" + e.message : "") + (e.hint ? "\n" + e.hint : "") + "\nContext: " + e.context)
                },
                _alert: function(t) {
                    var e = "jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + t;
                    this.options.consoleAlerts ? window.console && window.console.log && window.console.log(e) : alert(e)
                },
                _emulateHtmlBridge: function() {
                    var t = this;
                    $.each($.jPlayer.emulateMethods.split(/\s+/g), function(e, s) {
                        t.internal.domNode[s] = function(e) {
                            t[s](e)
                        }
                    }),
                    $.each($.jPlayer.event, function(e, s) {
                        var i = !0;
                        $.each($.jPlayer.reservedEvent.split(/\s+/g), function(t, s) {
                            if (s === e)
                                return i = !1,
                                !1
                        }),
                        i && t.element.bind(s + ".jPlayer.jPlayerHtml", function() {
                            t._emulateHtmlUpdate();
                            var s = document.createEvent("Event");
                            s.initEvent(e, !1, !0),
                            t.internal.domNode.dispatchEvent(s)
                        })
                    })
                },
                _emulateHtmlUpdate: function() {
                    var t = this;
                    $.each($.jPlayer.emulateStatus.split(/\s+/g), function(e, s) {
                        t.internal.domNode[s] = t.status[s]
                    }),
                    $.each($.jPlayer.emulateOptions.split(/\s+/g), function(e, s) {
                        t.internal.domNode[s] = t.options[s]
                    })
                },
                _destroyHtmlBridge: function() {
                    var t = this;
                    this.element.unbind(".jPlayerHtml");
                    var e = $.jPlayer.emulateMethods + " " + $.jPlayer.emulateStatus + " " + $.jPlayer.emulateOptions;
                    $.each(e.split(/\s+/g), function(e, s) {
                        delete t.internal.domNode[s]
                    })
                }
            },
            $.jPlayer.error = {
                FLASH: "e_flash",
                FLASH_DISABLED: "e_flash_disabled",
                NO_SOLUTION: "e_no_solution",
                NO_SUPPORT: "e_no_support",
                URL: "e_url",
                URL_NOT_SET: "e_url_not_set",
                VERSION: "e_version"
            },
            $.jPlayer.errorMsg = {
                FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
                FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
                NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
                NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
                URL: "Media URL could not be loaded.",
                URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
                VERSION: "jPlayer " + $.jPlayer.prototype.version.script + " needs Jplayer.swf version " + $.jPlayer.prototype.version.needFlash + " but found "
            },
            $.jPlayer.errorHint = {
                FLASH: "Check your swfPath option and that Jplayer.swf is there.",
                FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
                NO_SOLUTION: "Review the jPlayer options: support and supplied.",
                NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
                URL: "Check media URL is valid.",
                URL_NOT_SET: "Use setMedia() to set the media URL.",
                VERSION: "Update jPlayer files."
            },
            $.jPlayer.warning = {
                CSS_SELECTOR_COUNT: "e_css_selector_count",
                CSS_SELECTOR_METHOD: "e_css_selector_method",
                CSS_SELECTOR_STRING: "e_css_selector_string",
                OPTION_KEY: "e_option_key"
            },
            $.jPlayer.warningMsg = {
                CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
                CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
                CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
                OPTION_KEY: "The option requested in jPlayer('option') is undefined."
            },
            $.jPlayer.warningHint = {
                CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
                CSS_SELECTOR_METHOD: "Check your method name.",
                CSS_SELECTOR_STRING: "Check your css selector is a string.",
                OPTION_KEY: "Check your option name."
            }
        })
    }
});
