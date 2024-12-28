
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





