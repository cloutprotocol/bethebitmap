/*!
 * Cropper.js v1.5.6
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-10-04T04:33:48.372Z
 */ !function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t=t||self).Cropper=i()}(this,function(){"use strict";function t(i){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(i)}function i(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,a)}return e}function a(t){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?e(a,!0).forEach(function(i){var e,n,o;e=t,o=a[n=i],n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(a).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()}var o="undefined"!=typeof window&&void 0!==window.document,r=o?window:{},s=o&&"ontouchstart"in r.document.documentElement,h=o&&"PointerEvent"in r,c="cropper",l="crop",d="move",p="zoom",g="".concat(c,"-crop"),m="".concat(c,"-disabled"),u="".concat(c,"-hidden"),f="".concat(c,"-hide"),v="".concat(c,"-invisible"),$="".concat(c,"-modal"),w="".concat(c,"-move"),x="".concat(c,"Action"),y="".concat(c,"Preview"),b="crop",_="move",C="none",D="crop",B="cropend",k="cropmove",T="cropstart",W="dblclick",E=h?"pointerdown":s?"touchstart":"mousedown",H=h?"pointermove":s?"touchmove":"mousemove",L=h?"pointerup pointercancel":s?"touchend touchcancel":"mouseup",z="ready",Y="zoom",X="image/jpeg",R=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,O=/^data:/,M=/^data:image\/jpeg;base64,/,S=/^img|canvas$/i,P={viewMode:0,dragMode:b,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},I=Number.isNaN||r.isNaN;function N(t){return"number"==typeof t&&!I(t)}var A=function(t){return 0<t&&t<1/0};function U(t){return void 0===t}function q(i){return"object"===t(i)&&null!==i}var j=Object.prototype.hasOwnProperty;function Q(t){if(!q(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&j.call(e,"isPrototypeOf")}catch(a){return!1}}function K(t){return"function"==typeof t}var Z=Array.prototype.slice;function G(t){return Array.from?Array.from(t):Z.call(t)}function F(t,i){return t&&K(i)&&(Array.isArray(t)||N(t.length)?G(t).forEach(function(e,a){i.call(t,e,a,t)}):q(t)&&Object.keys(t).forEach(function(e){i.call(t,t[e],e,t)})),t}var J=Object.assign||function(t){for(var i=arguments.length,e=Array(1<i?i-1:0),a=1;a<i;a++)e[a-1]=arguments[a];return q(t)&&0<e.length&&e.forEach(function(i){q(i)&&Object.keys(i).forEach(function(e){t[e]=i[e]})}),t},V=/\.\d*(?:0|9){12}\d*$/;function tt(t,i){var e=1<arguments.length&&void 0!==i?i:1e11;return V.test(t)?Math.round(t*e)/e:t}var ti=/^width|height|left|top|marginLeft|marginTop$/;function te(t,i){var e=t.style;F(i,function(t,i){ti.test(i)&&N(t)&&(t="".concat(t,"px")),e[i]=t})}function ta(t,i){if(i){if(N(t.length))F(t,function(t){ta(t,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?0>e.indexOf(i)&&(t.className="".concat(e," ").concat(i)):t.className=i}}}function tn(t,i){i&&(N(t.length)?F(t,function(t){tn(t,i)}):t.classList?t.classList.remove(i):0<=t.className.indexOf(i)&&(t.className=t.className.replace(i,"")))}function to(t,i,e){i&&(N(t.length)?F(t,function(t){to(t,i,e)}):e?ta(t,i):tn(t,i))}var tr=/([a-z\d])([A-Z])/g;function ts(t){return t.replace(tr,"$1-$2").toLowerCase()}function th(t,i){return q(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-".concat(ts(i)))}function tc(t,i,e){q(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-".concat(ts(i)),e)}var tl=/\s\s*/,td=function(){var t=!1;if(o){var i=!1,e=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,i},set:function(t){i=t}});r.addEventListener("test",e,a),r.removeEventListener("test",e,a)}return t}();function tp(t,i,e,a){var n=3<arguments.length&&void 0!==a?a:{},o=e;i.trim().split(tl).forEach(function(i){if(!td){var a=t.listeners;a&&a[i]&&a[i][e]&&(o=a[i][e],delete a[i][e],0===Object.keys(a[i]).length&&delete a[i],0===Object.keys(a).length&&delete t.listeners)}t.removeEventListener(i,o,n)})}function tg(t,i,e,a){var n=3<arguments.length&&void 0!==a?a:{},o=e;i.trim().split(tl).forEach(function(i){if(n.once&&!td){var a=t.listeners,r=void 0===a?{}:a;o=function(){delete r[i][e],t.removeEventListener(i,o,n);for(var a=arguments.length,s=Array(a),h=0;h<a;h++)s[h]=arguments[h];e.apply(t,s)},r[i]||(r[i]={}),r[i][e]&&t.removeEventListener(i,r[i][e],n),r[i][e]=o,t.listeners=r}t.addEventListener(i,o,n)})}function tm(t,i,e){var a;return K(Event)&&K(CustomEvent)?a=new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(i,!0,!0,e),t.dispatchEvent(a)}function tu(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}var tf=r.location,tv=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function t$(t){var i=t.match(tv);return null!==i&&(i[1]!==tf.protocol||i[2]!==tf.hostname||i[3]!==tf.port)}function tw(t){var i="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+i}function tx(t){var i=t.rotate,e=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];N(n)&&0!==n&&r.push("translateX(".concat(n,"px)")),N(o)&&0!==o&&r.push("translateY(".concat(o,"px)")),N(i)&&0!==i&&r.push("rotate(".concat(i,"deg)")),N(e)&&1!==e&&r.push("scaleX(".concat(e,")")),N(a)&&1!==a&&r.push("scaleY(".concat(a,")"));var s=r.length?r.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function ty(t,i){var e=t.pageX,n=t.pageY,o={endX:e,endY:n};return i?o:a({startX:e,startY:n},o)}function tb(t,i){var e=t.aspectRatio,a=t.height,n=t.width,o=1<arguments.length&&void 0!==i?i:"contain",r=A(n),s=A(a);if(r&&s){var h=a*e;"contain"===o&&n<h||"cover"===o&&h<n?a=n/e:n=a*e}else r?a=n/e:s&&(n=a*e);return{width:n,height:a}}var t_=String.fromCharCode,tC=/^data:.*,/,tD=r.Cropper,tB=function(){var t,e,a;function n(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(t,i){if(!(t instanceof i))throw TypeError("Cannot call a class as a function")}(this,n),!t||!S.test(t.tagName))throw Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=J({},P,Q(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return t=n,e=[{key:"init",value:function(){var t,i=this.element,e=i.tagName.toLowerCase();if(!i[c]){if(i[c]=this,"img"===e){if(this.isImg=!0,t=i.getAttribute("src")||"",!(this.originalUrl=t))return;t=i.src}else"canvas"===e&&window.HTMLCanvasElement&&(t=i.toDataURL());this.load(t)}}},{key:"load",value:function(t){var i=this;if(t){this.url=t,this.imageData={};var e,a,n,o,r,s=this.element,h=this.options;if(h.rotatable||h.scalable||(h.checkOrientation=!1),h.checkOrientation&&window.ArrayBuffer){if(O.test(t))M.test(t)?this.read((a=(e=t).replace(tC,""),n=atob(a),o=new ArrayBuffer(n.length),r=new Uint8Array(o),F(r,function(t,i){r[i]=n.charCodeAt(i)}),o)):this.clone();else{var c=new XMLHttpRequest,l=this.clone.bind(this);this.reloading=!0,(this.xhr=c).onabort=l,c.onerror=l,c.ontimeout=l,c.onprogress=function(){c.getResponseHeader("content-type")!==X&&c.abort()},c.onload=function(){i.read(c.response)},c.onloadend=function(){i.reloading=!1,i.xhr=null},h.checkCrossOrigin&&t$(t)&&s.crossOrigin&&(t=tw(t)),c.open("GET",t),c.responseType="arraybuffer",c.withCredentials="use-credentials"===s.crossOrigin,c.send()}}else this.clone()}}},{key:"read",value:function(t){var i=this.options,e=this.imageData,a=function t(i){var e,a=new DataView(i);try{if(255===a.getUint8(0)&&216===a.getUint8(1))for(var n=a.byteLength,o=2;o+1<n;){if(255===a.getUint8(o)&&225===a.getUint8(o+1)){l=o;break}o+=1}if(l){var r=l+10;if("Exif"===function(t,i,e){var a="";e+=i;for(var n=i;n<e;n+=1)a+=t_(t.getUint8(n));return a}(a,l+4,4)){var s=a.getUint16(r);if(((c=18761===s)||19789===s)&&42===a.getUint16(r+2,c)){var h=a.getUint32(r+4,c);8<=h&&(d=r+h)}}}if(d){var c,l,d,p,g,m=a.getUint16(d,c);for(g=0;g<m;g+=1)if(p=d+12*g+2,274===a.getUint16(p,c)){p+=8,e=a.getUint16(p,c),a.setUint16(p,1,c);break}}}catch(u){e=1}return e}(t),n=0,o=1,r=1;if(1<a){this.url=function(t,i){for(var e=[],a=new Uint8Array(t);0<a.length;)e.push(t_.apply(null,G(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(i,";base64,").concat(btoa(e.join("")))}(t,X);var s=function(t){var i=0,e=1,a=1;switch(t){case 2:e=-1;break;case 3:i=-180;break;case 4:a=-1;break;case 5:i=90,a=-1;break;case 6:i=90;break;case 7:i=90,e=-1;break;case 8:i=-90}return{rotate:i,scaleX:e,scaleY:a}}(a);n=s.rotate,o=s.scaleX,r=s.scaleY}i.rotatable&&(e.rotate=n),i.scalable&&(e.scaleX=o,e.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,i=this.url,e=t.crossOrigin,a=i;this.options.checkCrossOrigin&&t$(i)&&(e=e||"anonymous",a=tw(i)),this.crossOrigin=e,this.crossOriginUrl=a;var n=document.createElement("img");e&&(n.crossOrigin=e),n.src=a||i,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),ta(n,f),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var t=this,i=this.image;function e(i,e){J(t.imageData,{naturalWidth:i,naturalHeight:e,aspectRatio:i/e}),t.sizing=!1,t.sized=!0,t.build()}i.onload=null,i.onerror=null,this.sizing=!0;var a=r.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(r.navigator.userAgent);if(!i.naturalWidth||a){var n=document.createElement("img"),o=document.body||document.documentElement;(this.sizingImage=n).onload=function(){e(n.width,n.height),a||o.removeChild(n)},n.src=i.src,a||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else e(i.naturalWidth,i.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,i=this.options,e=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".".concat(c,"-container")),r=o.querySelector(".".concat(c,"-canvas")),s=o.querySelector(".".concat(c,"-drag-box")),h=o.querySelector(".".concat(c,"-crop-box")),l=h.querySelector(".".concat(c,"-face"));this.container=a,this.cropper=o,this.canvas=r,this.dragBox=s,this.cropBox=h,this.viewBox=o.querySelector(".".concat(c,"-view-box")),this.face=l,r.appendChild(e),ta(t,u),a.insertBefore(o,t.nextSibling),this.isImg||tn(e,f),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,ta(h,u),i.guides||ta(h.getElementsByClassName("".concat(c,"-dashed")),u),i.center||ta(h.getElementsByClassName("".concat(c,"-center")),u),i.background&&ta(o,"".concat(c,"-bg")),i.highlight||ta(l,v),i.cropBoxMovable&&(ta(l,w),tc(l,x,"all")),i.cropBoxResizable||(ta(h.getElementsByClassName("".concat(c,"-line")),u),ta(h.getElementsByClassName("".concat(c,"-point")),u)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),K(i.ready)&&tg(t,z,i.ready,{once:!0}),tm(t,z)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),tn(this.element,u))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],a=[{key:"noConflict",value:function(){return window.Cropper=tD,n}},{key:"setDefaults",value:function(t){J(P,Q(t)&&t)}}],e&&i(t.prototype,e),a&&i(t,a),n}();return J(tB.prototype,{render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,a=this.cropper;ta(a,u),tn(t,u);var n={width:Math.max(e.offsetWidth,Number(i.minContainerWidth)||200),height:Math.max(e.offsetHeight,Number(i.minContainerHeight)||100)};te(a,{width:(this.containerData=n).width,height:n.height}),ta(t,u),tn(a,u)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,a=Math.abs(i.rotate)%180==90,n=a?i.naturalHeight:i.naturalWidth,o=a?i.naturalWidth:i.naturalHeight,r=n/o,s=t.width,h=t.height;t.height*r>t.width?3===e?s=t.height*r:h=t.width/r:3===e?h=t.width/r:s=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:s,height:h};c.left=(t.width-s)/2,c.top=(t.height-h)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===e||2===e,this.limitCanvas(!0,!0),this.initialImageData=J({},i),this.initialCanvasData=J({},c)},limitCanvas:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=e.viewMode,s=n.aspectRatio,h=this.cropped&&o;if(t){var c=Number(e.minCanvasWidth)||0,l=Number(e.minCanvasHeight)||0;1<r?(c=Math.max(c,a.width),l=Math.max(l,a.height),3===r&&(c<l*s?c=l*s:l=c/s)):0<r&&(c?c=Math.max(c,h?o.width:0):l?l=Math.max(l,h?o.height:0):h&&((c=o.width)<(l=o.height)*s?c=l*s:l=c/s));var d=tb({aspectRatio:s,width:c,height:l});c=d.width,l=d.height,n.minWidth=c,n.minHeight=l,n.maxWidth=1/0,n.maxHeight=1/0}if(i){if((h?0:1)<r){var p=a.width-n.width,g=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,g),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,g),h&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,g),n.maxTop=Math.max(0,g))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height}},renderCanvas:function(t,i){var e=this.canvasData,a=this.imageData;if(i){var n=function(t){var i=t.width,e=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:e,height:i};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),s=i*r+e*o,h=i*o+e*r;return 90<a?{width:h,height:s}:{width:s,height:h}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,s=e.width*(o/e.naturalWidth),h=e.height*(r/e.naturalHeight);e.left-=(s-e.width)/2,e.top-=(h-e.height)/2,e.width=s,e.height=h,e.aspectRatio=o/r,e.naturalWidth=o,e.naturalHeight=r,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,te(this.canvas,J({width:e.width,height:e.height},tx({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,a=e.naturalWidth*(i.width/i.naturalWidth),n=e.naturalHeight*(i.height/i.naturalHeight);J(e,{width:a,height:n,left:(i.width-a)/2,top:(i.height-n)/2}),te(this.image,J({width:e.width,height:e.height},tx(J({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:i.width,height:i.height};e&&(i.height*e>i.width?n.height=n.width/e:n.width=n.height*e),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=i.left+(i.width-n.width)/2,n.top=i.top+(i.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=J({},n)},limitCropBox:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,s=e.aspectRatio;if(t){var h=Number(e.minCropBoxWidth)||0,c=Number(e.minCropBoxHeight)||0,l=r?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,d=r?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;h=Math.min(h,a.width),c=Math.min(c,a.height),s&&(h&&c?h<c*s?c=h/s:h=c*s:h?c=h/s:c&&(h=c*s),l<d*s?d=l/s:l=d*s),o.minWidth=Math.min(h,l),o.minHeight=Math.min(c,d),o.maxWidth=l,o.maxHeight=d}i&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&tc(this.face,x,e.width>=i.width&&e.height>=i.height?d:"all"),te(this.cropBox,J({width:e.width,height:e.height},tx({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),tm(this.element,D,this.getData())}},{initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,a=i?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");if(i&&(o.crossOrigin=i),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,e){var r=e;"string"==typeof e?r=t.ownerDocument.querySelectorAll(e):e.querySelector&&(r=[e]),F(this.previews=r,function(t){var e=document.createElement("img");tc(t,y,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=a,e.alt=n,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)})}},resetPreview:function(){F(this.previews,function(t){var i=th(t,y);te(t,{width:i.width,height:i.height}),t.innerHTML=i.html,function(t,i){if(q(t[i]))try{delete t[i]}catch(e){t[i]=void 0}else if(t.dataset)try{delete t.dataset[i]}catch(a){t.dataset[i]=void 0}else t.removeAttribute("data-".concat(ts(i)))}(t,y)})},preview:function(){var t=this.imageData,i=this.canvasData,e=this.cropBoxData,a=e.width,n=e.height,o=t.width,r=t.height,s=e.left-i.left-t.left,h=e.top-i.top-t.top;this.cropped&&!this.disabled&&(te(this.viewBoxImage,J({width:o,height:r},tx(J({translateX:-s,translateY:-h},t)))),F(this.previews,function(i){var e=th(i,y),c=e.width,l=e.height,d=c,p=l,g=1;a&&(p=n*(g=c/a)),n&&l<p&&(d=a*(g=l/n),p=l),te(i,{width:d,height:p}),te(i.getElementsByTagName("img")[0],J({width:o*g,height:r*g},tx(J({translateX:-s*g,translateY:-h*g},t))))}))}},{bind:function(){var t=this.element,i=this.options,e=this.cropper;K(i.cropstart)&&tg(t,T,i.cropstart),K(i.cropmove)&&tg(t,k,i.cropmove),K(i.cropend)&&tg(t,B,i.cropend),K(i.crop)&&tg(t,D,i.crop),K(i.zoom)&&tg(t,Y,i.zoom),tg(e,E,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&tg(e,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&tg(e,W,this.onDblclick=this.dblclick.bind(this)),tg(t.ownerDocument,H,this.onCropMove=this.cropMove.bind(this)),tg(t.ownerDocument,L,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&tg(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;K(i.cropstart)&&tp(t,T,i.cropstart),K(i.cropmove)&&tp(t,k,i.cropmove),K(i.cropend)&&tp(t,B,i.cropend),K(i.crop)&&tp(t,D,i.crop),K(i.zoom)&&tp(t,Y,i.zoom),tp(e,E,this.onCropStart),i.zoomable&&i.zoomOnWheel&&tp(e,"wheel",this.onWheel,{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&tp(e,W,this.onDblclick),tp(t.ownerDocument,H,this.onCropMove),tp(t.ownerDocument,L,this.onCropEnd),i.responsive&&tp(window,"resize",this.onResize)}},{resize:function(){var t=this.options,i=this.container,e=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||e.width<=a||e.height<=n)){var o,r,s=i.offsetWidth/e.width;(1!=s||i.offsetHeight!==e.height)&&(t.restore&&(o=this.getCanvasData(),r=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(F(o,function(t,i){o[i]=t*s})),this.setCropBoxData(F(r,function(t,i){r[i]=t*s}))))}},dblclick:function(){var t,i;this.disabled||this.options.dragMode===C||this.setDragMode((t=this.dragBox,i=g,t.classList?t.classList.contains(i):-1<t.className.indexOf(i))?_:b)},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*e,t)))},cropStart:function(t){var i=t.buttons,e=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(N(i)&&1!==i||N(e)&&0!==e||t.ctrlKey))){var a,n=this.options,o=this.pointers;t.changedTouches?F(t.changedTouches,function(t){o[t.identifier]=ty(t)}):o[t.pointerId||0]=ty(t),a=1<Object.keys(o).length&&n.zoomable&&n.zoomOnTouch?p:th(t.target,x),R.test(a)&&!1!==tm(this.element,T,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===l&&(this.cropping=!0,ta(this.dragBox,$)))}},cropMove:function(t){var i=this.action;if(!this.disabled&&i){var e=this.pointers;t.preventDefault(),!1!==tm(this.element,k,{originalEvent:t,action:i})&&(t.changedTouches?F(t.changedTouches,function(t){J(e[t.identifier]||{},ty(t,!0))}):J(e[t.pointerId||0]||{},ty(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?F(t.changedTouches,function(t){delete e[t.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,to(this.dragBox,$,this.cropped&&this.options.modal)),tm(this.element,B,{originalEvent:t,action:i}))}}},{change:function(t){var i,e,n,o,r=this.options,s=this.canvasData,h=this.containerData,c=this.cropBoxData,g=this.pointers,m=this.action,f=r.aspectRatio,v=c.left,$=c.top,w=c.width,x=c.height,y=v+w,b=$+x,_=0,C=0,D=h.width,B=h.height,k=!0;function T(t){switch(t){case"e":y+E.x>D&&(E.x=D-y);break;case"w":v+E.x<_&&(E.x=_-v);break;case"n":$+E.y<C&&(E.y=C-$);break;case"s":b+E.y>B&&(E.y=B-b)}}!f&&t.shiftKey&&(f=w&&x?w/x:1),this.limited&&(_=c.minLeft,C=c.minTop,D=_+Math.min(h.width,s.width,s.left+s.width),B=C+Math.min(h.height,s.height,s.top+s.height));var W=g[Object.keys(g)[0]],E={x:W.endX-W.startX,y:W.endY-W.startY};switch(m){case"all":v+=E.x,$+=E.y;break;case"e":if(0<=E.x&&(D<=y||f&&($<=C||B<=b))){k=!1;break}T("e"),(w+=E.x)<0&&(m="w",v-=w=-w),f&&(x=w/f,$+=(c.height-x)/2);break;case"n":if(E.y<=0&&($<=C||f&&(v<=_||D<=y))){k=!1;break}T("n"),x-=E.y,$+=E.y,x<0&&(m="s",$-=x=-x),f&&(w=x*f,v+=(c.width-w)/2);break;case"w":if(E.x<=0&&(v<=_||f&&($<=C||B<=b))){k=!1;break}T("w"),w-=E.x,v+=E.x,w<0&&(m="e",v-=w=-w),f&&(x=w/f,$+=(c.height-x)/2);break;case"s":if(0<=E.y&&(B<=b||f&&(v<=_||D<=y))){k=!1;break}T("s"),(x+=E.y)<0&&(m="n",$-=x=-x),f&&(w=x*f,v+=(c.width-w)/2);break;case"ne":if(f){if(E.y<=0&&($<=C||D<=y)){k=!1;break}T("n"),x-=E.y,$+=E.y,w=x*f}else T("n"),T("e"),0<=E.x?y<D?w+=E.x:E.y<=0&&$<=C&&(k=!1):w+=E.x,E.y<=0?C<$&&(x-=E.y,$+=E.y):(x-=E.y,$+=E.y);w<0&&x<0?(m="sw",$-=x=-x,v-=w=-w):w<0?(m="nw",v-=w=-w):x<0&&(m="se",$-=x=-x);break;case"nw":if(f){if(E.y<=0&&($<=C||v<=_)){k=!1;break}T("n"),x-=E.y,$+=E.y,w=x*f,v+=c.width-w}else T("n"),T("w"),E.x<=0?_<v?(w-=E.x,v+=E.x):E.y<=0&&$<=C&&(k=!1):(w-=E.x,v+=E.x),E.y<=0?C<$&&(x-=E.y,$+=E.y):(x-=E.y,$+=E.y);w<0&&x<0?(m="se",$-=x=-x,v-=w=-w):w<0?(m="ne",v-=w=-w):x<0&&(m="sw",$-=x=-x);break;case"sw":if(f){if(E.x<=0&&(v<=_||B<=b)){k=!1;break}T("w"),w-=E.x,v+=E.x,x=w/f}else T("s"),T("w"),E.x<=0?_<v?(w-=E.x,v+=E.x):0<=E.y&&B<=b&&(k=!1):(w-=E.x,v+=E.x),0<=E.y?b<B&&(x+=E.y):x+=E.y;w<0&&x<0?(m="ne",$-=x=-x,v-=w=-w):w<0?(m="se",v-=w=-w):x<0&&(m="nw",$-=x=-x);break;case"se":if(f){if(0<=E.x&&(D<=y||B<=b)){k=!1;break}T("e"),x=(w+=E.x)/f}else T("s"),T("e"),0<=E.x?y<D?w+=E.x:0<=E.y&&B<=b&&(k=!1):w+=E.x,0<=E.y?b<B&&(x+=E.y):x+=E.y;w<0&&x<0?(m="nw",$-=x=-x,v-=w=-w):w<0?(m="sw",v-=w=-w):x<0&&(m="ne",$-=x=-x);break;case d:this.move(E.x,E.y),k=!1;break;case p:this.zoom((e=a({},i=g),n=[],F(i,function(t,i){delete e[i],F(e,function(i){var e=Math.abs(t.startX-i.startX),a=Math.abs(t.startY-i.startY),o=Math.abs(t.endX-i.endX),r=Math.abs(t.endY-i.endY),s=Math.sqrt(e*e+a*a);n.push((Math.sqrt(o*o+r*r)-s)/s)})}),n.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),n[0]),t),k=!1;break;case l:if(!E.x||!E.y){k=!1;break}o=tu(this.cropper),v=W.startX-o.left,$=W.startY-o.top,w=c.minWidth,x=c.minHeight,0<E.x?m=0<E.y?"se":"ne":E.x<0&&(v-=w,m=0<E.y?"sw":"nw"),E.y<0&&($-=x),this.cropped||(tn(this.cropBox,u),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}k&&(c.width=w,c.height=x,c.left=v,c.top=$,this.action=m,this.renderCropBox()),F(g,function(t){t.startX=t.endX,t.startY=t.endY})}},{crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&ta(this.dragBox,$),tn(this.cropBox,u),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=J({},this.initialImageData),this.canvasData=J({},this.initialCanvasData),this.cropBoxData=J({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(J(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),tn(this.dragBox,$),ta(this.cropBox,u)),this},replace:function(t,i){var e=1<arguments.length&&void 0!==i&&i;return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,F(this.previews,function(i){i.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,tn(this.cropper,m)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,ta(this.cropper,m)),this},destroy:function(){var t=this.element;return t[c]&&(t[c]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t,i){var e=1<arguments.length&&void 0!==i?i:t,a=this.canvasData,n=a.left,o=a.top;return this.moveTo(U(t)?t:n+Number(t),U(e)?e:o+Number(e))},moveTo:function(t,i){var e=1<arguments.length&&void 0!==i?i:t,a=this.canvasData,n=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(N(t)&&(a.left=t,n=!0),N(e)&&(a.top=e,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var a=this.options,n=this.canvasData,o=n.width,r=n.height,s=n.naturalWidth,h=n.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&a.zoomable){var c=s*t,l=h*t;if(!1===tm(this.element,Y,{ratio:t,oldRatio:o/s,originalEvent:e}))return this;if(e){var d,p,g,m,u=this.pointers,f=tu(this.cropper),v=u&&Object.keys(u).length?(d=u,p=0,g=0,m=0,F(d,function(t){var i=t.startX,e=t.startY;p+=i,g+=e,m+=1}),{pageX:p/=m,pageY:g/=m}):{pageX:e.pageX,pageY:e.pageY};n.left-=(c-o)*((v.pageX-f.left-n.left)/o),n.top-=(l-r)*((v.pageY-f.top-n.top)/r)}else Q(i)&&N(i.x)&&N(i.y)?(n.left-=(c-o)*((i.x-n.left)/o),n.top-=(l-r)*((i.y-n.top)/r)):(n.left-=(c-o)/2,n.top-=(l-r)/2);n.width=c,n.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return N(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,N(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(N(i)?i:1,t)},scale:function(t,i){var e=1<arguments.length&&void 0!==i?i:t,a=this.imageData,n=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(N(t)&&(a.scaleX=t,n=!0),N(e)&&(a.scaleY=e,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(t){var i,e=0<arguments.length&&void 0!==t&&t,a=this.options,n=this.imageData,o=this.canvasData,r=this.cropBoxData;if(this.ready&&this.cropped){i={x:r.left-o.left,y:r.top-o.top,width:r.width,height:r.height};var s=n.width/n.naturalWidth;if(F(i,function(t,e){i[e]=t/s}),e){var h=Math.round(i.y+i.height),c=Math.round(i.x+i.width);i.x=Math.round(i.x),i.y=Math.round(i.y),i.width=c-i.x,i.height=h-i.y}}else i={x:0,y:0,width:0,height:0};return a.rotatable&&(i.rotate=n.rotate||0),a.scalable&&(i.scaleX=n.scaleX||1,i.scaleY=n.scaleY||1),i},setData:function(t){var i=this.options,e=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&Q(t)){var o=!1;i.rotatable&&N(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,o=!0),i.scalable&&(N(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,o=!0),N(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=e.width/e.naturalWidth;N(t.x)&&(n.left=t.x*r+a.left),N(t.y)&&(n.top=t.y*r+a.top),N(t.width)&&(n.width=t.width*r),N(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?J({},this.containerData):{}},getImageData:function(){return this.sized?J({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,i={};return this.ready&&F(["left","top","width","height","naturalWidth","naturalHeight"],function(e){i[e]=t[e]}),i},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&Q(t)&&(N(t.left)&&(i.left=t.left),N(t.top)&&(i.top=t.top),N(t.width)?(i.width=t.width,i.height=t.width/e):N(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,i=this.cropBoxData;return this.ready&&this.cropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(t){var i,e,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&Q(t)&&(N(t.left)&&(a.left=t.left),N(t.top)&&(a.top=t.top),N(t.width)&&t.width!==a.width&&(i=!0,a.width=t.width),N(t.height)&&t.height!==a.height&&(e=!0,a.height=t.height),n&&(i?a.height=a.width/n:e&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(t){var i=0<arguments.length&&void 0!==t?t:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e,a,o,r,s,h,c,l,d,p,g,m,u,f,v,$,w,x,y,b,_,C,D,B,k,T,W,E,H,L,z,Y,X,R,O=this.canvasData,M=(e=this.image,a=this.imageData,o=O,r=i,s=a.aspectRatio,h=a.naturalWidth,c=a.naturalHeight,l=a.rotate,d=a.scaleX,p=a.scaleY,g=o.aspectRatio,m=o.naturalWidth,u=o.naturalHeight,f=r.fillColor,v=r.imageSmoothingEnabled,$=r.imageSmoothingQuality,x=void 0===(w=r.maxWidth)?1/0:w,b=void 0===(y=r.maxHeight)?1/0:y,C=void 0===(_=r.minWidth)?0:_,B=void 0===(D=r.minHeight)?0:D,T=(k=document.createElement("canvas")).getContext("2d"),W=tb({aspectRatio:g,width:x,height:b}),E=tb({aspectRatio:g,width:C,height:B},"cover"),H=Math.min(W.width,Math.max(E.width,m)),L=Math.min(W.height,Math.max(E.height,u)),z=tb({aspectRatio:s,width:x,height:b}),Y=tb({aspectRatio:s,width:C,height:B},"cover"),X=Math.min(z.width,Math.max(Y.width,h)),R=Math.min(z.height,Math.max(Y.height,c)),k.width=tt(H),k.height=tt(L),T.fillStyle=void 0===f?"transparent":f,T.fillRect(0,0,H,L),T.save(),T.translate(H/2,L/2),T.rotate((void 0===l?0:l)*Math.PI/180),T.scale(void 0===d?1:d,void 0===p?1:p),T.imageSmoothingEnabled=void 0===v||v,T.imageSmoothingQuality=void 0===$?"low":$,T.drawImage.apply(T,[e].concat(n([-X/2,-R/2,X,R].map(function(t){return Math.floor(tt(t))})))),T.restore(),k);if(!this.cropped)return M;var S=this.getData(),P=S.x,I=S.y,N=S.width,A=S.height,U=M.width/Math.floor(O.naturalWidth);1!=U&&(P*=U,I*=U,N*=U,A*=U);var q=N/A,j=tb({aspectRatio:q,width:i.maxWidth||1/0,height:i.maxHeight||1/0}),Q=tb({aspectRatio:q,width:i.minWidth||0,height:i.minHeight||0},"cover"),K=tb({aspectRatio:q,width:i.width||(1!=U?M.width:N),height:i.height||(1!=U?M.height:A)}),Z=K.width,G=K.height;Z=Math.min(j.width,Math.max(Q.width,Z)),G=Math.min(j.height,Math.max(Q.height,G));var F=document.createElement("canvas"),J=F.getContext("2d");F.width=tt(Z),F.height=tt(G),J.fillStyle=i.fillColor||"transparent",J.fillRect(0,0,Z,G);var V=i.imageSmoothingEnabled,ti=i.imageSmoothingQuality;J.imageSmoothingEnabled=void 0===V||V,ti&&(J.imageSmoothingQuality=ti);var te,ta,tn,to,tr,ts,th=M.width,tc=M.height,tl=P,td=I;tl<=-N||th<tl?tr=tn=te=tl=0:tl<=0?(tn=-tl,tr=te=Math.min(th,N+(tl=0))):tl<=th&&(tn=0,tr=te=Math.min(N,th-tl)),te<=0||td<=-A||tc<td?ts=to=ta=td=0:td<=0?(to=-td,ts=ta=Math.min(tc,A+(td=0))):td<=tc&&(to=0,ts=ta=Math.min(A,tc-td));var tp=[tl,td,te,ta];if(0<tr&&0<ts){var tg=Z/N;tp.push(tn*tg,to*tg,tr*tg,ts*tg)}return J.drawImage.apply(J,[M].concat(n(tp.map(function(t){return Math.floor(tt(t))})))),F},setAspectRatio:function(t){var i=this.options;return this.disabled||U(t)||(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===b,o=i.movable&&t===_;t=n||o?t:C,i.dragMode=t,tc(e,x,t),to(e,g,n),to(e,w,o),i.cropBoxMovable||(tc(a,x,t),to(a,g,n),to(a,w,o))}return this}}),tB});