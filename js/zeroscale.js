function t396_scaleBlock(t){var e=t396_isOnlyScalableBrowser(),a=t396_detectResolution(t),r=document.getElementById("rec"+t);if(r){var l=r.querySelector(".t396__artboard"),o=t396_scale__getElementsToScale(l);if(l&&0!==o.length){var _;"function"==typeof window.t396__getCurrentScaleFactor?_=t396__getCurrentScaleFactor(t):(_=window.tn&&window.tn["ab"+t]&&window.tn["ab"+t].scaleFactor)||(_=window.tn_scale_factor);var i=t396_ab__getFieldValue(l,"height"),s=Math.floor(i*_),n;if(t396_ab__getFieldValue(l,"height_vh")){var c=t396_ab__getFieldValue(l,"height"),d=t396_ab__getHeight(l),u=c*_;s=u>=d?u:d}t396_scale__updateArtboardState(l,s),o.forEach((function(t){var r=t.querySelector(".tn-molecule, .tn-atom"),l=t396_scale__getElementType(t),o=t396_elem__getFieldValue(t,"container");if(o||"group"!==l||(o="grid"),r&&"grid"===o)if(e){var i=r.closest(".tn-atom__scale-wrapper");i||(t396_scale__wrapElement(r,_,"tn-atom__scale-wrapper"),i=r.closest(".tn-atom__scale-wrapper")),t.style.zoom="",t396_scale__processBackdropFilter(t,r,i),t396_scale__processBackgroundForShape(t,r,l,_)}else{var s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(("text"===l||"button"===l)&&s){t.style.zoom="";var n=parseFloat(getComputedStyle(r).fontSize),c=r.style.webkitTextSizeAdjust;r.style.webkitTextSizeAdjust="none",t.style.zoom=_;var d=Math.round(parseFloat(getComputedStyle(r).fontSize)),u=Math.abs(n-d);r.style.webkitTextSizeAdjust=c,u>=1&&(r.style.fontSize=Math.round(n*_)+"px",r.style.webkitTextSizeAdjust="none")}if("yes"!==t.getAttribute("data-scale-off")&&(t.style.zoom=_),"shape"===l){var p=t396_elem__getFieldValue(t,"height");p=t396_elem__getHeight(t,p),p=t396_elem__convertPosition__Local__toAbsolute(t,"height",p);var g=t396_elem__getFieldValue(t,"width");g=t396_elem__getWidth(t,g),g=t396_elem__convertPosition__Local__toAbsolute(t,"width",g);var m=parseFloat(t396_elem__getFieldValue(t,"top"));m=t396_elem__convertPosition__Local__toAbsolute(t,"top",m);var f=parseFloat(t396_elem__getFieldValue(t,"left"));f=t396_elem__convertPosition__Local__toAbsolute(t,"left",f);var h=window.getComputedStyle(r),b=h.borderWidth,y="none"!==h.backgroundImage,v=t.getAttribute("data-animate-sbs-event");if((p<=2||g<=2)&&"0px"===b&&!y&&!v){t.style.removeProperty("zoom");var w=g*_,F=p*_,S=m*_,x=f*_;t.style.width=parseFloat(w)+"px",t.style.height=parseFloat(F)+"px",t.style.top=Math.round(S)+"px",t.style.left=Math.round(x)+"px",t.setAttribute("data-scale-off","yes")}}"text"===l&&a<1200&&r&&!s&&(r.style.webkitTextSizeAdjust="auto"),r&&(r.style.transformOrigin="center")}}))}}}function t396_scale__getElementsToScale(t){return t?Array.prototype.slice.call(t.children).filter((function(t){return t&&(t.classList.contains("t396__elem")||t.classList.contains("t396__group"))})):[]}function t396_scale__updateArtboardState(t,e){t.classList.add("t396__artboard_scale");var a=t.getAttribute("data-artboard-recid"),r='<style class="t396__scale-style">.t-rec#rec'+a+" { overflow: visible; }#rec"+a+" .t396__artboard:not(.t396__artboard-flex),#rec"+a+" .t396__artboard:not(.t396__artboard-flex) .t396__carrier,#rec"+a+" .t396__artboard:not(.t396__artboard-flex) .t396__filter { width: 100vw !important; max-width: 100%;}#rec"+a+" .t396__carrier,#rec"+a+" .t396__filter,#rec"+a+" .t396__artboard {height: "+e+"px !important;}</style>";t.insertAdjacentHTML("beforeend",r)}function t396_scale__wrapElement(t,e,a){if(t){var r=t.parentNode;if(r){var l=document.createElement("div");l.classList.add(a),l.style.transform="scale("+e+")",l.appendChild(t),r.appendChild(l)}}}function t396_scale__processBackdropFilter(t,e,a){"none"===t.style.backdropFilter&&(t.style.backdropFilter="");var r=getComputedStyle(t).backdropFilter;if(r){t.style.backdropFilter="none",a.style.backdropFilter=r;var l=getComputedStyle(e).borderRadius;"0px"!==l&&(a.style.borderRadius=l)}}function t396_scale__processBackgroundForShape(t,e,a,r){if("shape"===a){var l=e&&getComputedStyle(e),o;if(l)if((l&&l.backgroundImage||e.getAttribute("data-original"))&&"fixed"===l.backgroundAttachment){t.removeChild(e.parentNode),t.appendChild(e);var _=t396_elem__getFieldValue(t,"height");_=t396_elem__getHeight(t,_),_=t396_elem__convertPosition__Local__toAbsolute(t,"height",_);var i=t396_elem__getFieldValue(t,"width");i=t396_elem__getWidth(t,i),i=t396_elem__convertPosition__Local__toAbsolute(t,"width",i);var s=parseFloat(t396_elem__getFieldValue(t,"top")),n=parseFloat(t396_elem__getFieldValue(t,"left"));t.style.top=s*r+"px",t.style.left=n*r+"px",t.style.height=_*r+"px",t.style.width=i*r+"px",t.setAttribute("data-scale-off","yes")}}}function t396_scale__getElementType(t){var e=t.getAttribute("data-elem-type");return!e&&t.classList.contains("tn-group")&&(e="group"),e}window.t396_initialScale||(window.t396_initialScale=function(){});