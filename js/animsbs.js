function t_animationSBS__checkVisibilityPage(){"visible"===document.visibilityState&&(t_animationSBS__onReady(t_animationSBS__init),document.removeEventListener("visibilitychange",t_animationSBS__checkVisibilityPage))}function t_animationSBS__onReady(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}function t_animationSBS__init(){var t=document.getElementById("allrecords"),e=t?"edit"===t.getAttribute("data-tilda-mode"):null;e||(e=Boolean(document.getElementById("for_redactor_toolbar"))),/Bot/i.test(navigator.userAgent)||document.documentMode<11||e||(document.querySelector('[data-animate-sbs-event="scroll"]')&&(t.style.overflowX="hidden"),t_animationSBS__isZeroBlocksRendered((function(){t_animationSBS_isInstagramRendered((function(){var t;t_animationSBS__setAutoScaleInfo(),t_animationSBS__wrapAndUpdateEls(Array.prototype.slice.call(document.querySelectorAll("[data-animate-sbs-event]"))),t_animationSBS__initAllRes(e)}))})))}function t_animationSBS__setAutoScaleInfo(){if(void 0===window.shouldUseScaleFactor){var t=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),e=t?parseInt(t[1],10):126,n=window.navigator.userAgent.match(/Chrome\/([0-9]+)\./),i=n&&parseInt(n[1],10)||0;window.isOnlyScalable=e<126,window.shouldUseScaleFactor=!window.isOnlyScalable&&!t&&i<=127}}function t_animationSBS__isZeroBlocksRendered(t){var e=t_animationSBS__getArtboards("396");if(e.length||(e=t_animationSBS__getArtboards("121")),e.length){var n=!1;if(e.every((function(t){return t.classList.contains("rendered")})))t();else if(document.querySelectorAll('script[src*="tilda-blocks-2"], script[src*="tilda-blocks-1"]').length)t_animationSBS__backwardCompatibilityWait(e,Date.now(),t);else{var i=e.filter((function(t){return t.classList.contains("rendered")}));e.forEach((function(a){a.classList.contains("rendered")||a.addEventListener("artBoardRendered",(function(){i.push(a),i.length!==e.length||n||t()}))})),setTimeout((function(){n=!0,i.length!==e.length&&t()}),3e3)}}}function t_animationSBS__getArtboards(t){var e='.r[data-record-type="'+t+'"]:not(.t397__off):not(.t395__off):not(.t400__off) .t396__artboard';return Array.prototype.slice.call(document.querySelectorAll(e))}function t_animationSBS__backwardCompatibilityWait(t,e,n){if(t.every((function(t){return t.classList.contains("rendered")})))n();else{if(Date.now()-e>1e4)return void console.warn("all zero-blocks can't be rendered");setTimeout((function(){t_animationSBS__backwardCompatibilityWait(t,e,n)}),500)}}function t_animationSBS_isInstagramRendered(t){if(window.animationSBS__isIOS&&-1!==navigator.userAgent.indexOf("Instagram"))var e=setTimeout((function(){window.innerWidth!==screen.width&&window.innerHeight>window.innerWidth?t_animationSBS_isInstagramRendered(t):(clearTimeout(e),t())}),100);else t()}function t_animationSBS__wrapAndUpdateEls(t){var e=-1!==navigator.userAgent.indexOf("Chrome");t.forEach((function(t){var n=t.querySelector(".tn-molecule, .tn-atom");if(n){-1===navigator.userAgent.indexOf("Chrome")&&(n.style.WebkitBackfaceVisibility="hidden",n.style.backfaceVisibility="hidden");var i=t.querySelector(".tn-atom__sbs-anim-wrapper"),a=t_animationSBS__getAnimOptions(t,"published",null);if(!i&&a){var r=getComputedStyle(n).display,o;n.classList.contains("tn-molecule")&&"flex"!==r&&(n.style.display="inherit");var s=t_animationSBS__getScaleWrapper(n),l=t.style.transform,_;l&&-1!==l.indexOf("matrix(")&&(t_animationSBS__wrapEl(s||n,"tn-atom__sbs-transform-wrapper"),(_=t.querySelector(".tn-atom__sbs-transform-wrapper")).style.transform=l,t.style.transform=""),t_animationSBS__wrapEl((_=t.querySelector(".tn-atom__sbs-transform-wrapper"))||s||n,"tn-atom__sbs-anim-wrapper"),i=t.querySelector(".tn-atom__sbs-anim-wrapper"),t_animationSBS__updateStylesAfterWrapping(t,_||i,e)}}}))}function t_animationSBS__getScaleWrapper(t){if(!t)return null;var e=t.closest(".t396__group"),n=t.classList.contains("tn-atom");return e&&n?null:t.closest(".tn-atom__scale-wrapper")}function t_animationSBS__wrapAndUpdateElOnResize(t){if(t.length){var e=t.filter((function(t){return!t.querySelector(".tn-atom__sbs-anim-wrapper")}));e.length&&t_animationSBS__wrapAndUpdateEls(e)}}function t_animationSBS__updateStylesAfterWrapping(t,e,n){var i=t.getAttribute("data-elem-type"),a=getComputedStyle(t),r=a.getPropertyValue("border-radius");"shape"!==i&&"button"!==i&&"image"!==i||!parseInt(r,10)||(e.style.borderRadius=r);var o=["filter","backdrop-filter"];o=(o=o.map((function(t){var e="-webkit-"+t,n=a.getPropertyValue(t);if("none"!==n&&""!==n||(n=a.getPropertyValue(e)),"none"!==n&&""!==n)return{filter:t,webkitFilter:e,value:n}}))).filter((function(t){return t}));var s=t.querySelector(".tn-molecule, .tn-atom"),l=getComputedStyle(s).transform,_=document.createEvent("Event");_.initEvent("backdropFilterImgWrappered",!0,!0),o.forEach((function(a){window.t_animationSBS__isFirefox&&(e.style.backfaceVisibility="visible"),e.style[a.webkitFilter]=a.value,e.style[a.filter]=a.value,t.style[a.webkitFilter]="none",t.style[a.filter]="none","image"===i&&window.t_animationSBS__isSafari&&(t.dispatchEvent(_),t.classList.add("t396__elem--backdrop-filter-img-wrappered")),n&&"backdrop-filter"===a.filter&&(s.style[a.webkitFilter]="inherit",s.style[a.filter]="inherit"),"none"===l&&(s.style.transform="translateZ(0)")}));var c=o.some((function(t){return"backdrop-filter"===t.filter}));n&&c&&t_animationSBS__chromeFixBackdropFilter(s,e)}function t_animationSBS__chromeFixBackdropFilter(t,e){var n=getComputedStyle(t),i=n.getPropertyValue("background-color"),a=n.getPropertyValue("opacity"),r=n.getPropertyValue("box-shadow");if("rgba(0, 0, 0, 0)"!==i&&"1"!==a){var o=i.substring(i.indexOf("(")+1,i.indexOf(")")),s=t_animationSBS__processBoxShadowRGB(r,a);s&&(e.style.boxShadow=s,t.style.boxShadow="none"),e.style.backgroundColor="rgba("+o+","+a+")",t.style.opacity="1",t.style.backgroundColor="transparent",t.style.backdropFilter="initial",t.style.WebkitBackdropFilter="initial"}}function t_animationSBS__processBoxShadowRGB(t,e){if(!t)return!1;if(-1===t.indexOf("rgba")&&-1===t.indexOf("rgb")||"1"===e)return!1;var n=t.substring(t.indexOf("(")+1,t.indexOf(")")),i=n.split(", ");3===i.length?i.push(e):i[3]*=e;var a=t.replace(n,i.join(", "));return-1!==a.indexOf("rgb(")&&(a=a.replace("rgb(","rgba(")),a}function t_animationSBS__initAllRes(t){var e={elements:Array.prototype.slice.call(document.querySelectorAll("[data-animate-sbs-event]")),scrollTop:window.pageYOffset,isEditMode:t,clickedTriggerEls:[],hoverTriggerEls:[]};if(e.elements.length){t_animationSBS__cacheAndSetData(e),t_animationSBS__generateKeyframes(e);var n=document.getElementById("allrecords"),i=!!n&&"yes"===n.getAttribute("data-tilda-lazy");("y"===window.lazy||i)&&t_onFuncLoad("t_lazyload_update",(function(){t_lazyload_update()}));var a=t_animationSBS__getAnimElsOnView(e.elements),r,o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if("ResizeObserver"in window){var s=t_animationSBS__getAllBreakpoints(),l;t_animationSBS__createResizeObserver({breakpoints:s,currentRes:t_animationSBS__getCurrentRes(s,o),isMobile:o},d)}else o?window.addEventListener("orientationchange",(function(){setTimeout((function(){d()}),300)})):window.addEventListener("resize",d);var _=document.querySelectorAll(".t396"),c;if(Array.prototype.forEach.call(_,(function(t){t.addEventListener("displayChanged",d)})),window.t_animationSBS__isSafari){function m(){0!==window.pageYOffset&&d(),window.removeEventListener("scroll",m)}window.addEventListener("scroll",m)}t_animationSBS__triggerNoScrollAnimation(e,a),document.querySelectorAll('[data-animate-sbs-event="scroll"]').length&&(t_animationSBS__triggerScrollAnim(e),t_animationSBS__checkFrame(e)),window.addEventListener("load",(function(){t_animationSBS__changeElValues(e)})),setTimeout((function(){"complete"!==document.readyState&&t_animationSBS__changeElValues(e)}),3e3)}function d(){clearTimeout(r),r=setTimeout((function(){var t=Array.prototype.slice.call(document.querySelectorAll("[data-animate-sbs-event]"));t_animationSBS__updateAnimatedObjectState(e,"elements",t),t_animationSBS__wrapAndUpdateElOnResize(e.elements),t_animationSBS__cacheAndSetData(e),t_animationSBS__triggerScrollAnim(e),a=t_animationSBS__getAnimElsOnView(e.elements),t_animationSBS__triggerNoScrollAnimation(e,a),t_animationSBS__generateKeyframes(e)}),500)}}function t_animationSBS__getAnimElsOnView(t){return t.filter((function(t){var e="data-animate-sbs-event";return"intoview"===t.getAttribute(e)||"blockintoview"===t.getAttribute(e)}))}function t_animationSBS__getAllBreakpoints(){var t=Array.prototype.slice.call(document.querySelectorAll(".r .t396__artboard")),e=[];return t.forEach((function(t){var n=t_animationSBS__getResOpts(t),i=n.breakpoints.filter((function(t){return-1===e.indexOf(t)}));-1===(e=e.concat(i)).indexOf(n.resMax)&&e.push(n.resMax)})),e.sort((function(t,e){return e-t}))}function t_animationSBS__getCurrentRes(t,e){var n,i=e||"ontouchend"in document&&-1!==navigator.userAgent.indexOf("AppleWebKit")?document.documentElement.clientWidth:window.innerWidth;return t.find((function(t){return i>t}))}function t_animationSBS__updateAnimatedObjectState(t,e,n){t[e]=n}function t_animationSBS__setKeyForAnimatedObject(t,e,n){t[e]||t_animationSBS__updateAnimatedObjectState(t,e,n)}function t_animationSBS__createResizeObserver(t,e){var n=document.body.getClientRects(),i=n[0].height,a;new ResizeObserver((function(a){a.forEach((function(a){if(!document.body.classList.contains("t-body_scroll-locked")&&!document.body.classList.contains("t-body_popupshowed")){var r=t_animationSBS__getCurrentRes(t.breakpoints,t.isMobile);a.contentRect.height===i&&t.currentRes===r||(t.currentRes=r,i=n[0].height,e())}}))})).observe(document.body)}function t_animationSBS__changeElValues(t){t.elements.forEach((function(e){t_animationSBS__setAndCacheElTopPos(e,t),"scroll"===e.animType&&t_animationSBS__updateStepsValues(e)}))}function t_animationSBS__checkFrame(t){var e;"function"==typeof window.requestAnimationFrame&&(t_animationSBS__checkPosChanges(t)&&t_animationSBS__triggerScrollAnim(t),requestAnimationFrame((function(){t_animationSBS__checkFrame(t)})))}function t_animationSBS__checkPosChanges(t){var e=t.scrollTop,n=window.pageYOffset;return n<0&&window.t_animationSBS__isSafari&&(n=0),t_animationSBS__updateAnimatedObjectState(t,"scrollTop",n),e!==n}function t_animationSBS__triggerScrollAnim(t){t.elements.forEach((function(e){if("scroll"===e.animType){var n={opacity:1,blur:0,fix:!1,fixedShiftY:0,translateX:0,translateY:0,scaleX:1,scaleY:1,rotate:0};t_animationSBS__scrollAnimationCheckSteps(t,e,n),t_animationSBS__scrollAnimationUpdateTransform(e,n)}}))}function t_animationSBS__scrollAnimationCheckSteps(t,e,n){e.steps.forEach((function(i,a){var r=t.scrollTop+e.triggerOffset,o=t_animationSBS__getZoom(e);e.scaledDifference&&(r+=e.scaledDifference);var s=r>=i.start,l=r<i.start,_=i.end<=r,c=i.end>r;if(s&&c){i.state="started",e.wrapperEl&&(e.wrapperEl.style.willChange="transform");var m=r-i.start,d=0===i.dist?1:m/i.dist;n.prevUnfixedDist=i.prevUnfixedDist,t_animationSBS__scrollAnimationCalcStepStyles(n,i,d,a,o)}_&&(i.state="finished",e.wrapperEl&&(e.wrapperEl.style.willChange=""),t_animationSBS__scrollAnimationCalcStepStyles(n,i,1,a,o)),!l||"started"!==i.state&&"finished"!==i.state||(i.state="unactive",e.wrapperEl&&(e.wrapperEl.style.willChange=""),t_animationSBS__scrollAnimationCalcStepStyles(n,i,0,a,o))})),e.classList.remove("t396__elem--anim-hidden"),e.steps[1]&&0===e.steps[1].dist&&0===e.steps[1].styles.opacity&&"unactive"===e.steps[1].state&&(n.opacity=0)}function t_animationSBS__scrollAnimationCalcStepStyles(t,e,n,i,a){if(!0===e.styles.fix&&"started"===e.state&&(t.fix=!0,t.fixedShiftY=0),!0===e.styles.fix&&"finished"===e.state&&(t.fix=!1,t.fixedShiftY+=e.dist/a),!0===e.styles.fix&&"unactive"===e.state){if(i>0&&!0===t.fix)return;t.fix=!1}t.opacity+=n*(e.styles.opacity-t.opacity),t.blur+=n*(e.styles.blur-t.blur),t.translateX+=n*e.styles.moveX,t.translateY+=n*e.styles.moveY,t.scaleX+=n*(e.styles.scaleX-t.scaleX),t.scaleY+=n*(e.styles.scaleY-t.scaleY),t.rotate+=n*e.styles.rotate}function t_animationSBS__scrollAnimationUpdateTransform(t,e){if(t.wrapperEl){var n=t_animationSBS__getZoom(t),i=getComputedStyle(t).willChange,a=window.isOnlyScalable;if(!0===e.fix&&"fixed"!==t.wrapperEl.style.position){var r=t.triggerOffset-e.prevUnfixedDist;a||(r/=n),t.scaledDifference&&(r+=t.scaledDifference),t.wrapperEl.style.top=r+"px",t.wrapperEl.style.position="fixed",i&&"auto"!==i&&(t.style.willChange="unset"),t.zIndex&&(t.wrapperEl.style.zIndex=t.zIndex)}!1===e.fix&&"fixed"===t.wrapperEl.style.position&&(t.wrapperEl.style.position="",t.wrapperEl.style.top="",t.wrapperEl.style.zIndex="",t.zIndex&&(t.style.zIndex=t.zIndex),t.style.willChange=""),t.wrapperEl.style.opacity=e.opacity.toString();var o="";if(e.translateX){var s=e.translateX;a&&(s*=n),o+="translateX("+s.toFixed(2)+"px)"}if(0!==e.translateY||0!==e.fixedShiftY){var l=e.translateY+e.fixedShiftY;a&&(l*=n),o+="translateY("+l.toFixed(2)+"px)"}1===e.scaleX&&1===e.scaleY||(o+="scale("+e.scaleX+","+e.scaleY+")"),0!==e.rotate&&(o+="rotate("+e.rotate+"deg)"),t.wrapperEl.style.transform=o||"scale(1)"}}function t_animationSBS__generateKeyframes(t){var e="";if(t.elements.forEach((function(t){if("scroll"!==t.animType){var n={timeDuration:0},i=[],a=t_animationSBS__createEmptyStyleOptionsForKeyframes(t.steps);t_animationSBS__generateKeyframes__combineObjects(t.steps,i,n,a),t_animationSBS__generateKeyframes__correctFrames(i),t_animationSBS__generateKeyframes__countPercent(i,n),t_animationSBS__generateKeyframes__correctOpacityOnFirstStep(t,i);var r=t_animationSBS__generateKeyframes__getTxtStyles(t,i),o;if(n.timeDuration/=1e3,r)if(e+=t_animationSBS__generateKeyframes__getFinalCss(t,n,r),"hover"===t.animType||"click"===t.animType)(!t.loop||"loopwithreverse"===t.loop)&&(e+=t_animationSBS__generateKeyframes__getReverseAnim(t))}})),e){if(t.isEditMode)return e;var n=document.querySelector(".sbs-anim-keyframes");n?n.textContent!==e&&(n.textContent=e):((n=document.createElement("style")).classList.add("sbs-anim-keyframes"),n.textContent=e,document.head.insertAdjacentElement("beforeend",n))}}function t_animationSBS__createEmptyStyleOptionsForKeyframes(t){return{moveX:t.every((function(t){return 0===t.styles.moveX})),moveY:t.every((function(t){return 0===t.styles.moveY})),scaleX:t.every((function(t){return 1===t.styles.scaleX})),scaleY:t.every((function(t){return 1===t.styles.scaleY})),rotate:t.every((function(t){return 0===t.styles.rotate})),blur:t.every((function(t){return 0===t.styles.blur})),opacity:t.every((function(t){return 1===t.styles.opacity})),fix:t.every((function(t){return!1===t.styles.fix}))}}function t_animationSBS__generateKeyframes__combineObjects(t,e,n,i){t.forEach((function(a,r){var o={};for(var s in o.styles=a.styles,i)i[s]&&delete o.styles[s];"{}"!==JSON.stringify(o.styles)&&(o.time=1*a.time||0,r!==t.length-1&&(o.ease=t[r+1].ease),e.push(o),n.timeDuration+=o.time)}))}function t_animationSBS__generateKeyframes__correctFrames(t){t.forEach((function(e,n){var i=n===t.length-1,a=0===n,r=i?null:t[n+1],o=a?null:t[n-1];for(var s in e.styles)a||s in o.styles||t_animationSBS__generateKeyframes__addStyleToKeyframe(e,o,s,0),i||(s in r.styles?"moveX"!==s&&"moveY"!==s&&"rotate"!==s||t_animationSBS__generateKeyframes__recalculateValue(e,r,s):t_animationSBS__generateKeyframes__addStyleToKeyframe(e,r,s,1))}))}function t_animationSBS__generateKeyframes__addStyleToKeyframe(t,e,n,i){"blur"!==n&&"rotate"!==n&&"moveX"!==n&&"moveY"!==n||(e.styles[n]=0===i?0:t.styles[n]),"opacity"!==n&&"scaleX"!==n&&"scaleY"!==n||(e.styles[n]=0===i?1:t.styles[n])}function t_animationSBS__generateKeyframes__recalculateValue(t,e,n){switch(n){case"rotate":e.styles.rotate+=t.styles.rotate;break;case"moveX":e.styles.moveX+=t.styles.moveX;break;case"moveY":e.styles.moveY+=t.styles.moveY}}function t_animationSBS__generateKeyframes__countPercent(t,e){for(var n=0;n<t.length;n++){var i=t[n],a;if(0===n)0===e.timeDuration?i.percent=0:(a=(100*i.time/e.timeDuration).toFixed(2),i.percent=parseInt(a,10));else if(n===t.length-1)i.percent=100;else{var r=t[n-1].percent;if(0===e.timeDuration)i.percent=0;else{if(a=(100*i.time/e.timeDuration+r).toFixed(2),100===parseInt(a,10)&&n===t.length-2&&0!==n)continue;i.percent=parseInt(a,10)}i.percent===r&&(i.percent+=1),i.percent>100&&(i.percent=99)}}}function t_animationSBS__generateKeyframes__correctOpacityOnFirstStep(t,e){var n=e[1];if(t&&t.classList.remove("t396__elem--anim-hidden"),n&&0===n.time&&0===n.styles.opacity){var i=t?t.querySelector(".tn-atom__sbs-anim-wrapper"):null;i&&(i.style.opacity="0"),e[0].styles.opacity=0}}function t_animationSBS__generateKeyframes__getTxtStyles(t,e){var n="";return e.forEach((function(e){e.changes||(e.changes=t_animationSBS__generateKeyframes__getFrameChanges(t,e)),n+="number"==typeof e.percent?e.percent+"% {"+e.changes+"}\n":""})),n}function t_animationSBS__generateKeyframes__getFrameChanges(t,e){var n="",i="",a={x:1,y:1,changed:!1},r=1;window.isOnlyScalable&&(r=t_animationSBS__getZoom(t));var o,s=t_animationSBS__getScaleWrapper(t.querySelector(".tn-molecule, .tn-atom"));for(var l in 1===r||s||(r=1),e.styles)switch(l){case"opacity":n+="opacity:"+e.styles.opacity+";";break;case"scaleX":a.x=e.styles.scaleX,a.changed=!0;break;case"scaleY":a.y=e.styles.scaleY,a.changed=!0;break;case"moveX":i+="translateX("+Math.round(e.styles.moveX*r)+"px)";break;case"moveY":i+="translateY("+Math.round(e.styles.moveY*r)+"px)";break;case"rotate":i+="rotate("+e.styles.rotate+"deg)"}if(!0===a.changed&&(i+="scale("+a.x+","+a.y+")"),""!==i&&(n+="transform:"+i+";"),void 0!==e.ease)switch(n+="animation-timing-function:",e.ease){case"easeIn":n+="ease-in;";break;case"easeOut":n+="ease-out;";break;case"easeInOut":n+="ease-in-out;";break;case"bounceFin":n+="cubic-bezier(0.34,1.61,0.7,1);";break;default:n+=""===e.ease.trim()?"linear;":e.ease+";"}return n}function t_animationSBS__generateKeyframes__getFinalCss(t,e,n){var i="",a=t.uniqueID,r=".t-sbs-anim_started #"+t.uniqueID,o;"published"!==window.tildamode&&(t.timeDuration=e.timeDuration),i+=r+" {\nanimation: "+a+" "+(0===e.timeDuration?1e-5:e.timeDuration)+"s";var s=t.loop&&-1!==t.loop.indexOf("loop");return s&&(i+=" infinite"),i+=" linear",s?"loopwithreverse"===t.loop&&(i+=" alternate"):i+=" forwards",i+=";\nbackface-visibility: hidden;\n}\n\n@keyframes "+a+" {\n"+n+"}\n\n"}function t_animationSBS__generateKeyframes__getReverseAnim(t){var e=t.classList.contains("tn-group"),n=e?"data-group-id":"data-elem-id",i=t.getAttribute(n)||t.id,a=e?'[data-group-id="'+i+'"]':'[data-elem-id="'+i+'"]',r,o="";return o+="#"+(t.closest(".t-rec")?t.closest(".t-rec").getAttribute("id"):"")+" ",o+=a+".t-sbs-anim_started.t-sbs-anim_reversed .tn-atom__sbs-anim-wrapper ",o+="{\n-webkit-animation-direction: reverse;\nanimation-direction: reverse;\n}\n\n"}function t_animationSBS__getAnimOptions(t,e,n){if(!t)return"";var i=["sbs","opts"];n||(n="edit"===e?i.join(""):i.join("-"));var a="edit"===e?"field":"animate",r="edit"===e?"-value":"",o="edit"===e?"data-field-animmobile-value":"data-animate-mobile",s="y"===t.getAttribute(o),l,_=t_animationSBS__getResOpts(t.closest(".t396__artboard")),c=t_animationSBS__generateAttr(a,n,r,!1);if(_.res===_.resMax)return t.getAttribute(c);if(!s&&"edit"!==e&&_.res<1200)return t.style.transition="none",t.classList.remove("t396__elem--anim-hidden"),"";var m=t_animationSBS__generateAttr(a,n,r,_.res),d=t.getAttribute(m);return d||(_.breakpoints.forEach((function(e){if(!(e<=_.res||d)){var i=t_animationSBS__generateAttr(a,n,r,e);d=t.getAttribute(i)}})),d||t.getAttribute(c)||"")}function t_animationSBS__generateAttr(t,e,n,i){var a="data-"+t+"-"+e;return i&&(a+="-res-"+i),a+=n}function t_animationSBS__getResOpts(t){if(!window.tn){var e=[1200,960,640,480,320],n,i=window.innerWidth;return e.forEach((function(t){n||i>=t&&(n=t)})),{res:n||320,resMax:1200,breakpoints:[320,480,640,960]}}var a=t?t.getAttribute("data-artboard-recid"):"";return a&&window.tn["ab"+a]?{res:window.t396_detectResolution?t396_detectResolution(a):window.tn["ab"+a].curResolution,resMax:window.tn["ab"+a].curResolution_max,breakpoints:window.tn["ab"+a].screens.slice(0,-1)}:window.tn.screens?{res:window.tn.curResolution,resMax:window.tn.topResolution,breakpoints:window.tn.screens.slice(0,-1)}:{res:window.tn.curResolution,resMax:1200,breakpoints:[320,480,640,960]}}function t_animationSBS__cacheAndSetData(t){t.elements.forEach((function(e){var n=e.closest(".t396__artboard");if("scroll"!==e.animType||!n||"fixed"!==t396_ab__getFieldValue(n,"pos")){var i=t.isEditMode?"data-field-sbsevent-value":"data-animate-sbs-event";e.animType=e.getAttribute(i);var a=t.isEditMode?"data-field-sbstrg-value":"data-animate-sbs-trg";e.trigger=parseFloat(e.getAttribute(a)),isNaN(e.trigger)&&(e.trigger=1),e.triggerElems=t_animationSBS__getAnimOptions(e,"published","sbs-trgels"),e.wrapperEl=e.querySelector(".tn-atom__sbs-anim-wrapper");var r=t_animationSBS__getAnimOptions(e,t.isEditMode?"edit":"published",null);if(e.status=r?"active":"innactive","innactive"!==e.status){-1!==r.indexOf("fixed")&&(e.zIndex=getComputedStyle(e).getPropertyValue("z-index")),r=r.replace(/'/g,'"'),t_animationSBS__addDelayToSteps(r=JSON.parse(r));var o=t.isEditMode?"data-field-sbsloop-value":"data-animate-sbs-loop";e.loop=e.getAttribute(o)||"",t_animationSBS__setAndCacheElTopPos(e,t);var s=t_animationSBS__getZoom(e);e.steps=[];var l=0;r.forEach((function(t,n){var i={state:"unactive"};i.styles=t_animationSBS__createStepStyles(t),"scroll"===e.animType?(i.prevUnfixedDist=l,i.dist=t.di*s,!1===i.styles.fix&&(l+=i.dist),i.start=0===n?e.topOffset:e.steps[n-1].end,i.end=i.start+i.dist):(i.time=t.ti,i.ease=t.ea),e.steps.push(i)})),e.wrapperEl&&!e.wrapperEl.id&&t_animationSBS__generateUniqueIDForEl(e),t_animationSBS__updateInfoOnImgLoad(e,t),t_animationSBS__updateMoveAndRotateStepsStyles(e.steps)}}}));var e=t.elements.filter((function(t){return"innactive"===t.status&&(t.wrapperEl&&t.wrapperEl.removeAttribute("style"),t.wrapperEl&&(t.wrapperEl.style.display="table"),t.wrapperEl&&(t.wrapperEl.style.width="inherit"),t.wrapperEl&&(t.wrapperEl.style.height="inherit")),"innactive"!==t.status}));t_animationSBS__updateAnimatedObjectState(t,"elements",e)}function t_animationSBS__generateUniqueIDForEl(t){var e=t.closest(".t396__artboard, .tn-artboard"),n="";e&&(n=e.getAttribute("data-record-id")||e.getAttribute("data-artboard-recid"));var i=t.getAttribute("data-elem-id")||t.getAttribute("data-group-id")||t.id;t.uniqueID="sbs-"+n+"-"+i,t.wrapperEl.id=t.uniqueID}function t_animationSBS__updateInfoOnImgLoad(t,e){var n=t.querySelector("img");n&&(n.addEventListener("load",(function(){t_animationSBS__updateValuesAterIMGLoading(t,e)})),n.complete&&t_animationSBS__updateValuesAterIMGLoading(t,e))}function t_animationSBS__updateValuesAterIMGLoading(t,e){t_animationSBS__setAndCacheElTopPos(t,e),"scroll"===t.animType&&t_animationSBS__updateStepsValues(t)}function t_animationSBS__updateStepsValues(t){t.steps.forEach((function(e,n){e.start=0===n?t.topOffset:t.steps[n-1].end,e.end=e.start+e.dist}))}function t_animationSBS__setAndCacheElTopPos(t,e){var n=t_animationSBS__getZoom(t),i,a=["scroll","intoview","blockintoview"].every((function(e){return t.animType!==e}));if(!e.isEditMode&&!a){var r=parseInt(t.style.top,10);Number.isNaN(r)&&(r=t.offsetTop);var o=t.closest(".t396__group");o&&o!==t&&(r+=parseInt(o.style.top,10)||0),"scroll"!==t.animType&&"intoview"!==t.animType||window.isOnlyScalable||(r*=n);var s=t.closest(".r"),l=s?s.getBoundingClientRect().top+window.pageYOffset:0,_=s&&parseInt(s.style.paddingTop,10)||0;t.parentRecTopPos=l,t.topOffset=l+r+_,t_animationSBS__setScaledDifference(t,n),t_animationSBS__setTriggerOffset(t)}}function t_animationSBS__setScaledDifference(t,e){if(!t.scaledDifference&&window.isOnlyScalable&&"fixed"!==t.wrapperEl.style.position){var n=t.wrapperEl?t.wrapperEl.getBoundingClientRect().height:0,i=Math.abs((n*e-n)/2);i=Math.round(i),t.scaledDifference=i}}function t_animationSBS__addDelayToSteps(t){for(var e=0;e<t.length;e++){var n=t[e];if(0!==e&&(parseInt(n.dd,10)||parseInt(n.dt,10))){var i=Object.create(t[e-1]);void 0!==n.dt?i.ti=n.dt:i.di=n.dd,t.splice(e,0,i),e++}}}function t_animationSBS__updateMoveAndRotateStepsStyles(t){var e=t[0].styles.moveX,n=t[0].styles.moveY,i=t[0].styles.rotate;t.forEach((function(t){var a=t.styles;a.moveX-=e,e+=a.moveX,a.moveY-=n,n+=a.moveY,a.rotate-=i,i+=a.rotate}))}function t_animationSBS__createStepStyles(t){return{moveX:parseInt(t.mx,10)||0,moveY:parseInt(t.my,10)||0,scaleX:isNaN(parseFloat(t.sx))?1:parseFloat(t.sx),scaleY:isNaN(parseFloat(t.sy))?1:parseFloat(t.sy),opacity:isNaN(parseFloat(t.op))?1:parseFloat(t.op),rotate:parseInt(t.ro,10)||0,blur:parseInt(t.bl,10)||0,fix:"fixed"===t.fi}}function t_animationSBS__setTriggerOffset(t){var e=window.innerHeight,n=t_animationSBS__getZoom(t);t.triggerOffset=parseInt(t_animationSBS__getAnimOptions(t,"published","sbs-trgofst"),10),(window.isOnlyScalable||"scroll"===t.animType)&&(t.triggerOffset*=n),t.triggerOffset||(t.triggerOffset=0),.5!==t.trigger&&1!==t.trigger||(t.triggerOffset+=e*t.trigger,("intoview"===t.animType||"scroll"===t.animType)&&t.triggerOffset>t.topOffset&&t.triggerOffset<=e*t.trigger&&(t.triggerOffset=t.topOffset,t.scaledDifference&&(t.triggerOffset<0||t.triggerOffset===t.scaledDifference)&&(t.scaledDifference=0)),"blockintoview"===t.animType&&t.triggerOffset>t.parentRecTopPos&&t.triggerOffset<=e*t.trigger&&(t.triggerOffset=t.parentRecTopPos))}function t_animationSBS__triggerNoScrollAnimation(t,e){t_animationSBS__processElsIntoView(t,e),t_animationSBS__removeHoverClickTriggers(t),t_animationSBS__initClickTriggers(t),t_animationSBS__initHoverTriggers(t)}function t_animationSBS__processElsIntoView(t,e){t_animationSBS__updateIntoViewElsState(e);var n=0;t_animationSBS__setKeyForAnimatedObject(t,"onScrollUpdateElsIntoView",(function(){n||(n=setTimeout((function(){t_animationSBS__updateIntoViewElsState(e),n=0}),200))})),window.removeEventListener("scroll",t.onScrollUpdateElsIntoView),window.addEventListener("scroll",t.onScrollUpdateElsIntoView)}function t_animationSBS__removeHoverClickTriggers(t){var e=["js-sbs-anim-trigger_click","js-sbs-anim-trigger_hover"],n=document.querySelectorAll("."+e.join(", ."));n.length&&((n=Array.prototype.slice.call(n)).forEach((function(t){e.forEach((function(e){t.classList.remove(e)}))})),t.clickedTriggerEls.forEach((function(t){t.removeEventListener("click",t_animationSBS__initClickCallback),t_animationSBS__removeTriggerList(t,"click")})),t.hoverTriggerEls.forEach((function(t){t.removeEventListener("click",t_animationSBS__initHoverTrigger),t.removeEventListener("mouseenter",t_animationSBS__initHoverTrigger),t.removeEventListener("mouseleave",t_animationSBS__initHoverTrigger),t_animationSBS__removeTriggerList(t,"hover")})),t_animationSBS__updateAnimatedObjectState(t,"clickedTriggerEls",[]),t_animationSBS__updateAnimatedObjectState(t,"hoverTriggerEls",[]))}function t_animationSBS__removeTriggerList(t,e){t["triggerList-on-"+e]&&(t["triggerList-on-"+e]=[]),t["triggerOnceList-on-"+e]&&(t["triggerOnceList-on-"+e]=[])}function t_animationSBS__initClickTriggers(t){var e=t.elements.filter((function(t){return"click"===t.getAttribute("data-animate-sbs-event")}));if(e.length){t_animationSBS__connectTriggersWithAnimEls(e);var n=Array.prototype.slice.call(document.querySelectorAll(".js-sbs-anim-trigger_click"));if(n.length){if(!document.getElementById("js-sbs-anim-trigger-styles")){var i=document.createElement("style");i.id="js-sbs-anim-trigger-styles",i.textContent=".js-sbs-anim-trigger_click { cursor: pointer; }",document.head.insertAdjacentElement("beforeend",i)}t.clickedTriggerEls=n,n.forEach((function(t){t_animationSBS__preventAnimatedParentTrigger(t),t.removeEventListener("click",t_animationSBS__initClickCallback),t.addEventListener("click",t_animationSBS__initClickCallback)}))}}}function t_animationSBS__initClickCallback(){var t=this["triggerList-on-click"]||[],e=this["triggerOnceList-on-click"]||[];(t.length||e.length)&&(t_animationSBS__playOnceAnimation(this,e,"click"),t.forEach((function(t){t.classList.contains("t-sbs-anim_started")&&!t.classList.contains("t-sbs-anim_reversed")?t_animationSBS__setActionOnEnd(t):t_animationSBS__setActionOnStart(t)})))}function t_animationSBS__playOnceAnimation(t,e,n){if(e&&e.length){t_animationSBS__actionOnStart(e);var i=document.createEvent("Event");i.initEvent("updateAnimOnce",!0,!0),e.forEach((function(t){t.dispatchEvent(i)})),t["triggerOnceList-on-"+n]=[]}}function t_animationSBS__initHoverTriggers(t){var e=t.elements.filter((function(t){return"hover"===t.getAttribute("data-animate-sbs-event")}));if(e.length){t_animationSBS__connectTriggersWithAnimEls(e);var n=document.querySelectorAll(".js-sbs-anim-trigger_hover");n=Array.prototype.slice.call(n),t.hoverTriggerEls=n,n.forEach((function(t){t_animationSBS__preventAnimatedParentTrigger(t),window.animationSBS__isIOS?(t.removeEventListener("click",t_animationSBS__initHoverTrigger),t.addEventListener("click",t_animationSBS__initHoverTrigger)):(t.removeEventListener("mouseenter",t_animationSBS__initHoverTrigger),t.removeEventListener("mouseleave",t_animationSBS__initHoverTrigger),t.addEventListener("mouseenter",t_animationSBS__initHoverTrigger),t.addEventListener("mouseleave",t_animationSBS__initHoverTrigger))}))}}function t_animationSBS__preventAnimatedParentTrigger(t){if("none"!==getComputedStyle(t).pointerEvents){var e=t.querySelector(".tn-molecule, .tn-atom");e&&(t.style.pointerEvents="none",e.style.pointerEvents="auto")}}function t_animationSBS__initHoverTrigger(t){var e=t.currentTarget,n=t.currentTarget["triggerList-on-hover"],i=t.currentTarget["triggerOnceList-on-hover"];function a(t){e.closest(".t396__elem")!==t.target.closest(".t396__elem")&&(t_animationSBS__actionOnEnd(n),e.classList.remove("t-hover-mob-active"),document.removeEventListener("click",a))}(n&&n.length||i&&i.length)&&(t_animationSBS__playOnceAnimation(e,i,"hover"),n&&n.length&&("mouseenter"===t.type&&t_animationSBS__actionOnStart(n),"mouseleave"===t.type&&t_animationSBS__actionOnEnd(n),"click"===t.type&&(e.classList.contains("t-hover-mob-active")||(setTimeout((function(){t_animationSBS__actionOnStart(n),e.classList.add("t-hover-mob-active")})),setTimeout((function(){document.addEventListener("click",a)}))))))}function t_animationSBS__connectTriggersWithAnimEls(t){var e=t[0].getAttribute("data-animate-sbs-event");t.forEach((function(t){var n=t.triggerElems;if(n){var i=n?n.split(","):[],a=t.closest(".t396__artboard"),r=a?a.getAttribute("data-artboard-recid"):"";i.forEach((function(n){var i=r+n,a;t_animationSBS__processTriggersElemList(document.querySelector(".tn-elem__"+i+", .tn-group__"+i),t,e)}))}else{var o;t_animationSBS__processTriggersElemList(t.querySelector(".tn-atom__sbs-anim-wrapper"),t,e)}}))}function t_animationSBS__processTriggersElemList(t,e,n){var i;t&&("once"===e.loop?e.classList.contains("t-sbs-anim_started")||t_animationSBS__initTriggersList(t,"triggerOnceList",n,e):t_animationSBS__initTriggersList(t,"triggerList",n,e))}function t_animationSBS__initTriggersList(t,e,n,i){t[e+"-on-"+n]?-1===t[e+"-on-"+n].indexOf(i)&&t[e+"-on-"+n].push(i):t[e+"-on-"+n]=[i],t[e+"-on-"+n].length&&!t.classList.contains("js-sbs-anim-trigger_"+n)&&t.classList.add("js-sbs-anim-trigger_"+n),i.addEventListener("updateAnimOnce",(function(){t[e+"-on-"+n]=t[e+"-on-"+n].filter((function(t){return t!==i})),t["triggerList-on-"+n]&&t["triggerList-on-"+n].length||t.classList.remove("js-sbs-anim-trigger_"+n)}))}function t_animationSBS__actionOnStart(t){t.forEach(t_animationSBS__setActionOnStart)}function t_animationSBS__setActionOnStart(t){t.classList.contains("t-sbs-anim_playing")?t.setAttribute("data-planned-dir","play"):t_animationSBS__playAnimation(t,!1)}function t_animationSBS__actionOnEnd(t){t.forEach(t_animationSBS__setActionOnEnd)}function t_animationSBS__setActionOnEnd(t){var e=t.loop,n="noreverse"===e&&"hover"===t.getAttribute("data-animate-sbs-event");e&&-1!==e.indexOf("loop")?t.addEventListener("animationiteration",t_animationSBS__setIterationAnimation):t.classList.contains("t-sbs-anim_playing")&&!n?t.setAttribute("data-planned-dir","reverse"):n||t_animationSBS__playAnimation(t,!0)}function t_animationSBS__setIterationAnimation(t){var e=t.target.closest(".t396__elem");if(e){if("loopwithreverse"===e.loop){var n=t_animationSBS__getAnimationFullTime(e,!0),i,a;if(1e3*t.elapsedTime/n%2!=0)return}e.classList.remove("t-sbs-anim_started"),e.classList.remove("t-sbs-anim_reversed"),e.classList.remove("t-sbs-anim_playing"),e.removeEventListener("animationiteration",t_animationSBS__setIterationAnimation)}}function t_animationSBS__animationEnd(t){t.removeEventListener("animationend",t_animationSBS__animationEndingEvent),t.addEventListener("animationend",t_animationSBS__animationEndingEvent)}function t_animationSBS__animationEndingEvent(){this.classList.remove("t-sbs-anim_playing");var t=this.getAttribute("data-planned-dir");"play"===t&&this.classList.contains("t-sbs-anim_reversed")?t_animationSBS__playAnimation(this,!1):"reverse"!==t||this.classList.contains("t-sbs-anim_reversed")||t_animationSBS__playAnimation(this,!0),this.setAttribute("data-planned-dir","")}function t_animationSBS__getAnimationFullTime(t,e){var n,i;return t.getAttribute("data-animate-sbs-opts")?JSON.parse(t.getAttribute("data-animate-sbs-opts").split("'").join('"')).reduce((function(t,n){return e&&(t+=parseInt(n.dt,10)||0),t+(parseInt(n.ti,10)||0)}),0):0}function t_animationSBS__playAnimation(t,e){t.classList.remove("t-sbs-anim_started"),e||t.classList.remove("t-sbs-anim_reversed"),t_animationSBS__forceRepaint(t);var n=t_animationSBS__getAnimationFullTime(t,!1),i=["t-sbs-anim_started"];e&&i.push("t-sbs-anim_reversed"),n>0&&i.push("t-sbs-anim_playing"),i.forEach((function(e){t.classList.add(e)})),t_animationSBS__animationEnd(t)}function t_animationSBS__forceRepaint(t){t.offsetWidth}function t_animationSBS__updateIntoViewElsState(t){t&&t.length&&t.forEach((function(t){var e=window.pageYOffset+t.triggerOffset,n="blockintoview"===t.animType?e>=t.parentRecTopPos:e>=t.topOffset,i=t.closest(".t396").parentElement,a,r=["t397__off","t395__off","t400__off"].some((function(t){return i.classList.contains(t)}));n&&!r&&(t.classList.contains("t-sbs-anim_started")||t.classList.add("t-sbs-anim_started"))}))}function t_animationSBS__getZoom(t){if(void 0!==t.scaleFactor)return t.scaleFactor;var e=t.closest(".t396__artboard");if(!e)return 1;var n=e.getAttribute("data-artboard-recid");return e.classList.contains("t396__artboard_scale")||!window.animationSBS__isOldPage&&"undefined"!=typeof t396_ab__getFieldValue&&"window"===t396_ab__getFieldValue(e,"upscale")?n&&window.tn["ab"+n]&&window.tn["ab"+n].scaleFactor||window.tn_scale_factor:1}function t_animateSbs__wrapAtomEls(){var t=document.querySelectorAll("[data-animate-sbs-event]");Array.prototype.forEach.call(t,(function(t){var e=t.querySelector(".tn-atom");if(e&&!e.closest(".tn-atom__sbs-anim-wrapper")){t_animationSBS__wrapEl(e,"tn-atom__sbs-anim-wrapper");var n=t.getAttribute("data-elem-type"),i=window.getComputedStyle(t).getPropertyValue("border-radius");if("shape"===n&&i&&parseInt(i)){var a=t.querySelector(".tn-atom__sbs-anim-wrapper");a&&(a.style.borderRadius=i)}}}))}function t_animateSbs__cashElsInfo(t){var e=t.els;t.triggerElemsAttrName="edit"===t.mode?"data-field-sbstrgels-value":"data-animate-sbs-trgels",Array.prototype.forEach.call(e,(function(e){e.state="unactive",e.animType="edit"===t.mode?e.getAttribute("data-field-sbsevent-value"):e.getAttribute("data-animate-sbs-event"),e.changeType="scroll"===e.animType?"scroll":"time",e.trigger="edit"===t.mode?e.getAttribute("data-field-sbstrg-value"):e.getAttribute("data-animate-sbs-trg"),e.trigger=e.trigger?e.trigger:1,e.triggerElems=e.getAttribute(t.triggerElemsAttrName),e.wrapperEl=e.querySelector(".tn-atom__sbs-anim-wrapper"),e.steps=[];var n="edit"===t.mode?e.getAttribute("data-field-sbsopts-value"):e.getAttribute("data-animate-sbs-opts");if(n){-1!==n.indexOf("fixed")&&(e.zIndex=window.getComputedStyle(e).getPropertyValue("z-index")),n=n.replace(/'/g,'"');var i=JSON.parse(n);t_animationSBS__addDelayToSteps(i),e.loop="edit"===t.mode?e.getAttribute("data-field-sbsloop-value"):e.getAttribute("data-animate-sbs-loop"),t_animationSBS__setAndCacheElTopPos(e,t);for(var a=0,r=0;r<i.length;r++){var o={state:"unactive"};o.styles=t_animationSBS__createStepStyles(i[r]),"scroll"===e.changeType?(o.prevUnfixedDist=a,o.dist=i[r].di,!1===o.styles.fix&&(a+=Number(o.dist)),o.start=0===r?e.topOffset:e.steps[r-1].end,o.end=o.start+1*o.dist):(o.time=i[r].ti,o.ease=i[r].ea),e.steps.push(o)}t_animationSBS__updateInfoOnImgLoad(e,t),t_animationSBS__updateMoveAndRotateStepsStyles(e.steps)}}))}function t_animateSbs__reset(t){for(var e=t.els,n=0;n<e.length;n++){var i=e[n].animType;if("intoview"===i||"blockintoview"===i||"click"===i||"hover"===i){e[n].classList.remove("t-sbs-anim_started");var a=e[n].querySelector(".tn-atom__sbs-anim-wrapper");a&&(a.style.opacity="")}else{e[n].state="reseted";var r=e[n].wrapperEl;r&&(r.style.transform="",r.style.position="",r.style.top="",r.style.opacity="")}}}function t_animationSBS__wrapEl(t,e){if(!t)return!1;var n=t.parentNode,i=document.createElement("div");"string"==typeof e?i.classList.add(e):e.forEach((function(t){i.classList.add(t)})),i.style.display="table",i.style.width="inherit",i.style.height="inherit",i.appendChild(t),n&&n.appendChild(i)}window.t_animationSBS__isFirefox=-1!==navigator.userAgent.search("Firefox"),window.t_animationSBS__isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),window.animationSBS__isIOS=/iPhone|iPad|iPod/i.test(navigator.userAgent)||"ontouchend"in document&&/Macintosh/.test(navigator.userAgent),window.animationSBS__isOldPage=Boolean(document.querySelector('script[src*="tilda-blocks-2.7"]')),"visible"===document.visibilityState?"loading"!==document.readyState?t_animationSBS__init():document.addEventListener("DOMContentLoaded",t_animationSBS__init):document.addEventListener("visibilitychange",t_animationSBS__checkVisibilityPage);