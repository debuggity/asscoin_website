
function t_onReady(func) {
    if (document.readyState != 'loading') {
        func();
    } else {
        document.addEventListener('DOMContentLoaded', func);
    }
}
function t_onFuncLoad(funcName, okFunc, time) {
    if (typeof window[funcName] === 'function') {
        okFunc();
    } else {
        setTimeout(function () {
            t_onFuncLoad(funcName, okFunc, time);
        }, (time || 100));
    }
}
function t396_initialScale(t) {
    t = document.getElementById("rec" + t);
    if (t) {
        t = t.querySelector(".t396__artboard");
        if (t) {
            var e, r = document.documentElement.clientWidth, a = [];
            if (i = t.getAttribute("data-artboard-screens"))
                for (var i = i.split(","), l = 0; l < i.length; l++)
                    a[l] = parseInt(i[l], 10);
            else
                a = [320, 480, 640, 960, 1200];
            for (l = 0; l < a.length; l++) {
                var n = a[l];
                n <= r && (e = n)
            }
            var o = "edit" === window.allrecords.getAttribute("data-tilda-mode")
                , d = "center" === t396_getFieldValue(t, "valign", e, a)
                , c = "grid" === t396_getFieldValue(t, "upscale", e, a)
                , s = t396_getFieldValue(t, "height_vh", e, a)
                , u = t396_getFieldValue(t, "height", e, a)
                , g = !!window.opr && !!window.opr.addons || !!window.opera || -1 !== navigator.userAgent.indexOf(" OPR/");
            if (!o && d && !c && !s && u && !g) {
                for (var _ = parseFloat((r / e).toFixed(3)), f = [t, t.querySelector(".t396__carrier"), t.querySelector(".t396__filter")], l = 0; l < f.length; l++)
                    f[l].style.height = Math.floor(parseInt(u, 10) * _) + "px";
                t396_scaleInitial__getElementsToScale(t).forEach(function (t) {
                    t.style.zoom = _
                })
            }
        }
    }
}
function t396_scaleInitial__getElementsToScale(t) {
    return t ? Array.prototype.slice.call(t.children).filter(function (t) {
        return t && (t.classList.contains("t396__elem") || t.classList.contains("t396__group"))
    }) : []
}
function t396_getFieldValue(t, e, r, a) {
    var i = a[a.length - 1]
        , l = r === i ? t.getAttribute("data-artboard-" + e) : t.getAttribute("data-artboard-" + e + "-res-" + r);
    if (!l)
        for (var n = 0; n < a.length; n++) {
            var o = a[n];
            if (!(o <= r) && (l = o === i ? t.getAttribute("data-artboard-" + e) : t.getAttribute("data-artboard-" + e + "-res-" + o)))
                break
        }
    return l
}




(function () {
    function annexxAddStyle(numberMod, codestyle, idblock) {
        let styleBlock = document.querySelector('head > #annexxStyle' + numberMod + (idblock ? idblock : ''));
        if (!styleBlock) {
            document.querySelector('head').insertAdjacentHTML('beforeend', '<style id="annexxStyle' + numberMod + (idblock ? idblock : '') + '"></style>');
            styleBlock = document.querySelector('head > #annexxStyle' + numberMod + (idblock ? idblock : ''));
        }
        let t = (function () {
            return !Array.from(styleBlock.childNodes).some(function (e) {
                if (e.textContent === codestyle) {
                    return true;
                }
            });
        }());
        if (t)
            styleBlock.insertAdjacentHTML('beforeend', codestyle);
    }
    function annexxRemoveStyle(numberMod, idblock) {
        let block = document.querySelectorAll('head > #annexxStyle' + numberMod + (idblock ? idblock : ''));
        if (block)
            block.forEach(e => e.remove());
    }
    let arrWidth = "0-479,480-639,640-959,960-1199,1200-20000".split(/,\s|,/g).map(e => e.split('-').map(e => +e))
        , windowWidth = navigator.maxTouchPoints ? window.outerWidth : window.innerWidth
        , d = Date.now()
        , isMobile = (function () {
            let ua = navigator.userAgent;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) || (!/windows/i.test(ua) && /safari/i.test(ua) && navigator.maxTouchPoints > 1))
                return true;
            else
                return false;
        }());
    annexxAddStyle('014', ` #rec825055167 { opacity: 0 !important; } `, d + 'annexx-014-hidepreload');
    if (arrWidth.some(e => e[0] <= windowWidth && windowWidth <= e[1])) {
        if (isMobile && true) {
            document.body.insertAdjacentHTML("afterbegin", `<div id="annexx-prepreloader"><img src="https://static.tildacdn.net/tild6536-3034-4563-b863-316666316664/annexx-preloader.png"></div>`);
            annexxAddStyle('014', ` #annexx-prepreloader { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 999999999999; display: flex; justify-content: center; align-items: center; background-color: rgba(255, 255, 255, 1); } #annexx-prepreloader img { width: 80px; height: 80px; } ${true ? "#annexx-prepreloader img {animation: r 2s linear infinite;} @keyframes r {to{transform: rotate(360deg)}}" : ""} `, d + 'annexx-014-prepreloader');
        }
        let blockPreload = '#rec825055167'
            , timeoutHideBlock = 1500
            , transAnimHideBlock = 0
            , typeAnimHideBlock = 'animate__fadeOut'
            , limitShowDay = 0
            , zIndexBlock = 99999999999999
            , blockRestartAnim = ''
            , loadingProgressElement = '.tn-elem__8250551671731471602490'
            , timeoutLoadingProgressElement = 0
            , timeoutShowAllrecords = 0
            , transAnimShowAllrecords = 0
            , transAnimHideAllrecords = 0
            , typeAnimShowAllrecords = 'animate__fadeIn'
            , typeAnimHideAllrecords = 'animate__fadeOut'
            , noAnimHideAllrecordsAnotherSite = false
            , noUrlShow = '' ? ''.replace(/\s+/g, '').split(',') : false
            , hr = 'href';
        if (!(noUrlShow && (noUrlShow.some(e => e === location.href) || noUrlShow.map(e => e.replace(/http\w*\:\/+|#.+/gi, '')).some(e => e === location.host + location.pathname)))) {
            annexxRemoveStyle('014', d + 'annexx-014-hidepreload');
            if (loadingProgressElement) {
                annexxAddStyle('014', ` .tn-elem__8250551671731471602490 { display: none !important; } `, d + 'hide-progress-element');
            }
            annexxAddStyle('014', ` #rec825055167 .t396__elem { display: none !important; } `, d + 'hide-all-element');
            function blockscroll(e) {
                e.preventDefault();
                if (navigator.maxTouchPoints) {
                    allrecords.scrollTop += e.deltaY;
                    allrecords.style.overflow = '';
                    allrecords.style.overflowX = 'hidden';
                }
            }
            if (transAnimShowAllrecords) {
                allrecords.addEventListener('wheel', blockscroll);
                annexxAddStyle('014', ` #allrecords, .annexx-anx021-footer { pointer-events: none; } body.t-body { ${(function () {
                    return true ? "overflow-x: hidden !important; position: fixed;" : "";
                }())} top: 0; width: 100%; } `, d + 'hide-allrecord');
                annexxAddStyle('014', ` #allrecords, .annexx-anx021-footer { opacity: 0 !important; } `, d + 'hide-allrecord2');
            }
            if (!localStorage.getItem("annexx-014-limit-show"))
                localStorage.setItem("annexx-014-limit-show", JSON.stringify({
                    count: 0,
                    time: Date.now()
                }));
            let limitShowObj = JSON.parse(localStorage.getItem("annexx-014-limit-show"));
            if (limitShowDay) {
                if (limitShowObj.time + 24 * 60 * 60 * 1000 <= Date.now())
                    localStorage.setItem("annexx-014-limit-show", JSON.stringify({
                        count: 1,
                        time: Date.now()
                    }));
                else if (limitShowDay <= limitShowObj.count)
                    limitShowDay = "n";
                else
                    localStorage.setItem("annexx-014-limit-show", JSON.stringify({
                        count: limitShowObj.count + 1,
                        time: Date.now()
                    }));
            }
            setTimeout(function () {
                if (blockPreload && limitShowDay !== "n") {
                    let int = setInterval(function () {
                        if (!isMobile || window.isMobile || (/safari/i.test(navigator.userAgent) && navigator.maxTouchPoints)) {
                            clearInterval(int);
                            annexxAddStyle('014', ` ${blockPreload},#annexx-wrap-preloader { pointer-events: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden !important; z-index: ${zIndexBlock}!important; animation-duration: ${transAnimHideBlock}ms !important; --animate-duration: ${transAnimHideBlock}ms !important; } `);
                        }
                    }, window.isMobile ? 200 : 0);
                    allrecords.addEventListener('wheel', blockscroll);
                    annexxAddStyle('014', ` body.t-body { ${(function () {
                        return true ? "overflow-x: hidden !important; position: fixed;" : "";
                    }())} top: 0; width: 100%; } `, d + 'body-overflow');
                }
                if (transAnimShowAllrecords) {
                    annexxAddStyle('014', ` #allrecords { animation-duration: ${transAnimShowAllrecords}ms !important; --animate-duration: ${transAnimShowAllrecords}ms !important; } `, d + 'trans-show-allrecord');
                }
                function process() {
                    let int = setInterval(function () {
                        if (!isMobile || (window.isMobile || false) || (/safari/i.test(navigator.userAgent) && navigator.maxTouchPoints)) {
                            clearInterval(int);
                            annexxRemoveStyle('014', d + 'hide-all-element');
                            annexxRemoveStyle('014', d + 'annexx-014-prepreloader');
                            if (document.querySelector("#annexx-prepreloader"))
                                document.querySelector("#annexx-prepreloader").remove();
                            let allrecords = document.querySelector('#allrecords'), progressEl = loadingProgressElement ? Array.from(document.querySelectorAll(loadingProgressElement)).map(e => e.querySelector('.tn-atom')) : false, progressEnd = false, block = blockPreload && limitShowDay !== "n" && document.querySelector(blockPreload) ? document.querySelector(blockPreload) : false, wrapPreloader, isSafari = (function () {
                                let ua = navigator.userAgent;
                                if (/safari/gi.test(ua) && !/chrome/gi.test(ua))
                                    return true;
                                else
                                    return false;
                            }
                            )();
                            if (block && (/instagram/i.test(navigator.userAgent) || (isSafari && !isMobile))) {
                                document.body.style.opacity = 0;
                                document.body.style.pointerEvents = "none";
                                let int = setInterval(function () {
                                    if (typeof t396_init === "function") {
                                        clearInterval(int);
                                        t396_init(block.getAttribute("id").replace(/\D/gi, ''));
                                        document.body.style.opacity = "";
                                        document.body.style.pointerEvents = "";
                                        processBlock();
                                    }
                                }, 50);
                            } else
                                processBlock();
                            function processBlock() {
                                if (blockPreload && limitShowDay === "n")
                                    document.querySelector(blockPreload).remove();
                                let init396 = setInterval(() => {
                                    if (typeof t396_init === 'function') {
                                        clearInterval(init396);
                                        t396_init('#rec825055167'.replaceAll(/\D+/gi, ''));
                                    }
                                }
                                    , 20);
                                if (false && block) {
                                    let int = setInterval(function () {
                                        let vid = block.querySelectorAll("video");
                                        if (vid.length) {
                                            clearInterval(int);
                                            let vidcount = vid.length;
                                            vid.forEach(e => {
                                                if (e.readyState > 2)
                                                    vidcount -= 1;
                                                else {
                                                    e.addEventListener("canplay", function () {
                                                        vidcount -= 1;
                                                    });
                                                }
                                            }
                                            );
                                            let int2 = setInterval(function () {
                                                if (!vidcount) {
                                                    clearInterval(int2);
                                                    startProcess();
                                                }
                                            }, 500);
                                        }
                                    }, 200);
                                } else
                                    startProcess();
                                function startProcess() {
                                    if (document.querySelector("#annexx-014-hideallrecords"))
                                        document.querySelectorAll("#annexx-014-hideallrecords").forEach(e => e.remove());
                                    let timeoutProgress = timeoutHideBlock - timeoutLoadingProgressElement > 0 ? timeoutHideBlock - timeoutLoadingProgressElement : 0;
                                    if (progressEl) {
                                        let array = [0, 100];
                                        for (let i = 0; i < 30; i++) {
                                            array.push(Math.random() * ((100) + 1))
                                        }
                                        array = array.map(e => Math.floor(e)).sort((a, b) => a > b ? 1 : -1);
                                        let i = 0
                                            , s = array.length
                                            , step = timeoutProgress / s;
                                        annexxRemoveStyle('014', d + 'hide-progress-element');
                                        setTimeout(function () {
                                            let int = setInterval(function () {
                                                progressEl.forEach(el => el.textContent = "" + array[i] + "%");
                                                i += 1;
                                                if (i === s) {
                                                    progressEnd = true;
                                                    clearInterval(int);
                                                }
                                            }, step);
                                        }, timeoutLoadingProgressElement);
                                    }
                                    if (block) {
                                        allrecords.insertAdjacentHTML('beforebegin', '<div id="annexx-wrap-preloader"></div>');
                                        wrapPreloader = document.querySelector('#annexx-wrap-preloader');
                                        block.classList.add('annexx-preloader');
                                        wrapPreloader.insertAdjacentElement("afterbegin", block);
                                    }
                                    setTimeout(function () {
                                        if (blockRestartAnim) {
                                            setTimeout(function () {
                                                document.querySelectorAll(blockRestartAnim).forEach(bl => {
                                                    bl.querySelectorAll('.t396__elem').forEach(el => {
                                                        if (el.classList.contains('t-sbs-anim_started') || el.getAttribute("data-animate-sbs-event")) {
                                                            el.classList.remove('t-sbs-anim_started');
                                                            t_animationSBS__playAnimation(el, false);
                                                        }
                                                    }
                                                    );
                                                }
                                                );
                                            }, timeoutHideBlock + 1e3);
                                        }
                                        if (transAnimShowAllrecords) {
                                            allrecords.classList.add('animate__animated', typeAnimShowAllrecords);
                                            annexxRemoveStyle('014', d + 'hide-allrecord2');
                                            /*window.dispatchEvent(new CustomEvent('resize'));*/
                                            let s = false;
                                            function remove() {
                                                if (s)
                                                    return false;
                                                s = true;
                                                annexxRemoveStyle('014', d + 'trans-show-allrecord');
                                                allrecords.removeEventListener('wheel', blockscroll);
                                                /*allrecords.style.overflowX = '';*/
                                                allrecords.style.overflowY = document.querySelector('.t951__sidebar_sticky') ? 'clip' : 'hidden';
                                                annexxRemoveStyle('014', d + 'hide-allrecord');
                                                allrecords.classList.remove('animate__animated', typeAnimShowAllrecords);
                                            }
                                            allrecords.addEventListener('animationend', remove, {
                                                once: true
                                            });
                                            if (false) {
                                                annexxRemoveStyle('014', d + 'trans-show-allrecord');
                                                allrecords.removeEventListener('wheel', blockscroll);
                                            }
                                            setTimeout(remove, transAnimShowAllrecords + 500);
                                        } else if (transAnimHideBlock + timeoutHideBlock) {
                                            setTimeout(() => {/*window.dispatchEvent(new CustomEvent('resize'));*/
                                            }
                                                , transAnimHideBlock + timeoutHideBlock)
                                        }
                                        let pageBack = false;
                                        window.addEventListener("pageshow", function (e) {
                                            allrecords.classList.remove(typeAnimHideAllrecords);
                                            if (document.querySelector(".annexx-anx021-footer"))
                                                document.querySelector(".annexx-anx021-footer").style.opacity = '';
                                            document.body.style.overflow = '';
                                            pageBack = false;
                                            if (e.persisted) {
                                                pageBack = true;
                                            }
                                        });
                                        document.addEventListener('click', function (e) {
                                            if (!e.target.closest('.js-product')) {
                                                let href = e.target.href ? e.target.href : e.target.closest("a") ? e.target.closest("a").href : null
                                                    , target = e.target.href ? e.target.target : e.target.closest("a") ? e.target.closest("a").target : null;
                                                if (href && !/void\(0\)/i.test(href) && !/dikidi\.ru\/\#widget/i.test(href) && new URL(href).origin + new URL(href).pathname !== location.origin + location.pathname && target !== '_blank') {
                                                    e.preventDefault();
                                                    e.stopImmediatePropagation();
                                                    if (transAnimHideAllrecords && !pageBack && !(noAnimHideAllrecordsAnotherSite && new URL(href).host !== location.host)) {
                                                        annexxAddStyle('014', ` #allrecords { animation-duration: ${transAnimHideAllrecords}ms !important; --animate-duration: ${transAnimHideAllrecords}ms !important; } `);
                                                        document.body.style.overflow = 'hidden';
                                                        allrecords.addEventListener('animationstart', () => {
                                                            setTimeout(function () {
                                                                location[hr] = href;
                                                            }, transAnimHideAllrecords);
                                                        }
                                                            , {
                                                                once: true
                                                            });
                                                        allrecords.classList.add('animate__animated', typeAnimHideAllrecords);
                                                        if (document.querySelector(".annexx-anx021-footer"))
                                                            document.querySelector(".annexx-anx021-footer").style.opacity = 0;
                                                    } else {
                                                        document.body.overflow = 'hidden';
                                                        location[hr] = href;
                                                    }
                                                    return false;
                                                }
                                            }
                                        }, true);
                                    }, timeoutShowAllrecords);
                                    if (block) {
                                        setTimeout(function () {
                                            annexxAddStyle('014', ` #annexx-wrap-preloader { animation-name: opacityAnimation; animation-delay: ${transAnimHideAllrecords / 2}ms; animation-duration: ${transAnimHideAllrecords}ms; } @keyframes opacityAnimation { 0% {opacity:1;} 100% {opacity:0;} } `, d + 'hide-wrap-preloader');
                                            let s = false;
                                            function remove() {
                                                if (s)
                                                    return false;
                                                s = true;
                                                function remove2() {
                                                    block.classList.add('animate__animated', typeAnimHideBlock);
                                                    wrapPreloader.remove();
                                                    allrecords.removeEventListener('wheel', blockscroll);
                                                    /*allrecords.style.overflowX = '';*/
                                                    allrecords.style.overflowY = document.querySelector('.t951__sidebar_sticky') ? 'clip' : 'hidden';
                                                    annexxRemoveStyle('014', d + 'body-overflow');
                                                    /*window.dispatchEvent(new CustomEvent('resize'));*/
                                                    if (window.location.hash)
                                                        t270_scroll(window.location.hash, 0);
                                                    if (true) {
                                                        let locpath = location.origin + location.pathname
                                                            , hash = location.hash
                                                            , sessionScrollY = sessionStorage.getItem("annexx-014-scrolly-" + locpath);
                                                        if (!hash && sessionScrollY)
                                                            window.scrollTo(0, +sessionScrollY);
                                                        window.addEventListener("scroll", function () {
                                                            sessionStorage.setItem("annexx-014-scrolly-" + locpath, window.scrollY);
                                                        });
                                                        function removeScrollData() {
                                                            for (let i in sessionStorage) {
                                                                if (/annexx\-014\-scrolly/i.test(i) && i !== "annexx-014-scrolly-" + locpath) {
                                                                    sessionStorage.removeItem(i);
                                                                }
                                                            }
                                                        }
                                                        removeScrollData();
                                                        window.addEventListener("click", function (e) {
                                                            let a = e.target.closest("a");
                                                            if (a)
                                                                sessionStorage.removeItem("annexx-014-scrolly-" + locpath);
                                                        });
                                                    }
                                                }
                                                if (progressEl) {
                                                    let int = setInterval(() => {
                                                        if (progressEnd) {
                                                            remove2();
                                                            clearInterval(int);
                                                        }
                                                    }
                                                        , 100);
                                                } else
                                                    remove2();
                                            }
                                            if (false) {
                                                annexxRemoveStyle('014', d + 'trans-show-allrecord');
                                                allrecords.removeEventListener('wheel', blockscroll);
                                                annexxRemoveStyle('014', d + 'body-overflow');
                                            }
                                            setTimeout(remove, transAnimHideBlock);
                                        }, timeoutHideBlock);
                                    } else {
                                        allrecords.removeEventListener('wheel', blockscroll);
                                        /*allrecords.style.overflowX = '';*/
                                        allrecords.style.overflowY = 'hidden';
                                        annexxRemoveStyle('014', d + 'body-overflow');
                                    }
                                    document.querySelectorAll("div[bgimgfield^='img']").forEach(e => {
                                        let st = e.getAttribute("style");
                                        if (st && st.indexOf("resize") !== -1) {
                                            e.setAttribute("style", st.replace(/\-\/resize\w?\/20x/gi, ''));
                                        }
                                    }
                                    );
                                }
                            }
                            if (!document.querySelector('div[data-record-type="270"]')) {
                                t_onReady(function () {
                                    var hash = window.location.hash;
                                    t_onFuncLoad('t270_scroll', function () {
                                        t270_scroll(hash, -3);
                                    });
                                    setTimeout(function () {
                                        var curPath = window.location.pathname;
                                        var curFullPath = window.location.origin + curPath;
                                        var recs = document.querySelectorAll('.r');
                                        Array.prototype.forEach.call(recs, function (rec) {
                                            var selects = 'a[href^="#"] :not([href="#"]) :not(.carousel-control) :not(.t-carousel__control) :not([href^="#price"]) :not([href^="#submenu"]) :not([href^="#popup"]) :not([href*="#zeropopup"]) :not([href*="#closepopup"]) :not([href*="#closeallpopup"]) :not([href^="#prodpopup"]) :not([href^="#order"]) :not([href^="#!"]) :not([target="_blank"]),' + 'a[href^="' + curPath + '#"] :not([href*="#!/tfeeds/"]) :not([href*="#!/tproduct/"]) :not([href*="#!/tab/"]) :not([href*="#popup"]) :not([href*="#zeropopup"]) :not([href*="#closepopup"]) :not([href*="#closeallpopup"]) :not([target="_blank"]),' + 'a[href^="' + curFullPath + '#"] :not([href*="#!/tfeeds/"]) :not([href*="#!/tproduct/"]) :not([href*="#!/tab/"]) :not([href*="#popup"]) :not([href*="#zeropopup"]) :not([href*="#closepopup"]) :not([href*="#closeallpopup"]) :not([target="_blank"])';
                                            var elements = rec.querySelectorAll(selects);
                                            Array.prototype.forEach.call(elements, function (element) {
                                                element.addEventListener('click', function (event) {
                                                    event.preventDefault();
                                                    var hash = this.hash.trim();
                                                    t_onFuncLoad('t270_scroll', function () {
                                                        t270_scroll(hash, -3);
                                                    });
                                                });
                                            });
                                        });
                                        if (document.querySelectorAll('.js-store').length > 0 || document.querySelectorAll('.js-feed').length > 0) {
                                            t_onFuncLoad('t270_scroll', function () {
                                                t270_scroll(hash, -3, 1);
                                            });
                                        }
                                    }, 500);
                                    setTimeout(function () {
                                        var hash = window.location.hash;
                                        if (hash && document.querySelectorAll('a[name="' + hash.slice(1) + '"]').length > 0) {
                                            if (window.isMobile) {
                                                t_onFuncLoad('t270_scroll', function () {
                                                    t270_scroll(hash, 0);
                                                });
                                            } else {
                                                t_onFuncLoad('t270_scroll', function () {
                                                    t270_scroll(hash, 0);
                                                });
                                            }
                                        }
                                    }, 1000);
                                    window.addEventListener('popstate', function () {
                                        var hash = window.location.hash;
                                        if (hash && document.querySelectorAll('a[name="' + hash.slice(1) + '"]').length > 0) {
                                            if (window.isMobile) {
                                                t_onFuncLoad('t270_scroll', function () {
                                                    t270_scroll(hash, 0);
                                                });
                                            } else {
                                                t_onFuncLoad('t270_scroll', function () {
                                                    t270_scroll(hash, 0);
                                                });
                                            }
                                        }
                                    });
                                });
                                t270_scroll = function (hash, offset) {
                                    if (!hash)
                                        return;
                                    t270_checkLoad(hash, offset);
                                    if (hash.indexOf('#!/tproduct/') !== -1 || hash.indexOf('#!/tab/') !== -1) {
                                        return !0
                                    }
                                    var isHistoryChangeAllowed = window.location.hash !== hash;
                                    var wrapperBlock = document.querySelector('.t270');
                                    var dontChangeHistory = wrapperBlock ? Boolean(wrapperBlock.getAttribute('data-history-disabled')) : !1;
                                    t270_scrollToEl(hash, offset);
                                    if (!dontChangeHistory && isHistoryChangeAllowed) {
                                        if (history.pushState) {
                                            history.pushState(null, null, hash)
                                        } else {
                                            window.location.hash = hash
                                        }
                                        isHistoryChangeAllowed = !1
                                    }
                                    return !0
                                }
                                    ;
                                t270_checkLoad = function (hash, offset) {
                                    if (window.t270_loadChecked)
                                        return;
                                    var sliderWrappers = document.body.querySelectorAll('.t-slds__items-wrapper');
                                    if (!sliderWrappers.length)
                                        return;
                                    var lastWrapper = sliderWrappers[sliderWrappers.length - 1];
                                    var sliderImgs = lastWrapper ? lastWrapper.querySelectorAll('.t-slds__bgimg') : [];
                                    var lastImg = sliderImgs[sliderImgs.length - 1];
                                    var imageUrl = lastImg ? window.getComputedStyle(lastImg).backgroundImage : '';
                                    imageUrl = imageUrl.substring(5, imageUrl.length - 2);
                                    var preloaderImg = document.createElement('img');
                                    preloaderImg.src = imageUrl ? imageUrl : '';
                                    preloaderImg.addEventListener('load', function () {
                                        t270_scroll(hash, offset);
                                        window.t270_loadChecked = !0
                                    })
                                }
                                    ;
                                t270_getTarget = function (hash, offset) {
                                    var target;
                                    try {
                                        if (hash.substring(0, 1) === '#') {
                                            target = document.getElementById(hash.substring(1))
                                        } else {
                                            target = document.querySelector(hash)
                                        }
                                    } catch (event) {
                                        console.log('Exception t270: ' + event.message);
                                        return
                                    }
                                    if (!target) {
                                        target = document.querySelector('a[name="' + hash.substr(1) + '"]');
                                        if (!target)
                                            return
                                    }
                                    target = parseInt((target.getBoundingClientRect().top + window.pageYOffset) - offset, 10);
                                    target = Math.max(target, 0);
                                    return target
                                }
                                    ;
                                t270_scrollToEl = function (hash, offset) {
                                    if (document.body.getAttribute('data-scroll'))
                                        return;
                                    var scrollTargetY = t270_getTarget(hash, offset);
                                    if (isNaN(scrollTargetY))
                                        return;
                                    var body = document.body;
                                    var canSmoothScroll = window.CSS && window.CSS.supports('scroll-behavior', 'smooth');
                                    if (window.isMobile && canSmoothScroll && 'scrollBehavior' in document.documentElement.style) {
                                        body.setAttribute('data-scroll', 'true');
                                        window.scrollTo({
                                            left: 0,
                                            top: scrollTargetY,
                                            behavior: 'instant'
                                        });
                                        setTimeout(function () {
                                            body.removeAttribute('data-scroll')
                                        }, 500)
                                    } else {
                                        var html = document.querySelector('html');
                                        var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight, html.offsetHeight);
                                        var scrollY = window.scrollY || document.documentElement.scrollTop;
                                        var speed = 2000;
                                        var time = 0;
                                        var currentTime = 0;
                                        function t270_easeInQuad(pos) {
                                            return Math.pow(pos, 2)
                                        }
                                        function t270_animationScroll() {
                                            currentTime += 1 / 60;
                                            var newDocumentHeight = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight, html.offsetHeight);
                                            if (documentHeight < newDocumentHeight) {
                                                documentHeight = newDocumentHeight;
                                                scrollTargetY = t270_getTarget(hash, offset);
                                                scrollY = window.scrollY || document.documentElement.scrollTop;
                                                time = 0
                                            }
                                            var difference = currentTime / time;
                                            var animation = t270_easeInQuad(difference);
                                            if (difference < 1) {
                                                requestAnimationFrame(t270_animationScroll);
                                                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * animation))
                                            } else {
                                                body.removeAttribute('data-scroll');
                                                body.removeAttribute('data-scrollable');
                                                window.scrollTo(0, scrollTargetY)
                                            }
                                        }
                                        body.setAttribute('data-scroll', 'true');
                                        body.setAttribute('data-scrollable', 'true');
                                        t270_animationScroll()
                                    }
                                }
                                    ;
                            }
                        }
                    }, window.isMobile ? 200 : 0);
                }
                if ((window.isMobile && !false)) {
                    if (document.readyState !== "loading") {
                        if (document.readyState === "complete")
                            process();
                        else
                            window.addEventListener("load", process);
                    }
                } else if (document.readyState !== "loading")
                    process();
                else
                    document.addEventListener("DOMContentLoaded", process);
            }, window.isMobile ? 500 : 0);
        } else {
            document.addEventListener("DOMContentLoaded", function () {
                document.querySelector('#rec825055167').remove();
                if (document.querySelector("#annexx-prepreloader"))
                    document.querySelector("#annexx-prepreloader").remove();
                if (document.querySelector("#annexx-014-hideallrecords"))
                    document.querySelectorAll("#annexx-014-hideallrecords").forEach(e => e.remove());
                annexxRemoveStyle('014', d + 'annexx-014-hidepreload');
            });
        }
    } else {
        if (document.querySelector("#annexx-014-hideallrecords"))
            document.querySelectorAll("#annexx-014-hideallrecords").forEach(e => e.remove());
    }
}());
