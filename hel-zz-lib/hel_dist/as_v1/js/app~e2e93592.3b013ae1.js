!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("Vue"));else if("function"==typeof define&&define.amd)define(["Vue"],t);else{var n="object"==typeof exports?t(require("Vue")):t(e.Vue);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(e){return function(e){function t(t){for(var n,r,i=t[0],a=t[1],u=0,c=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(p&&p(t);c.length;)c.shift()()}var n={},r={"app~e2e93592":0},o={"app~e2e93592":0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{"chunk-1587e475":1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-1587e475":"20511621"}[e]+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var p=(f=u[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(p===o||p===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){var f;if((p=(f=l[c]).getAttribute("data-href"))===o||p===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],s.parentNode.removeChild(s),n(i)},s.href=a,document.getElementsByTagName("head")[0].appendChild(s)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1587e475":"330fc6d3"}[e]+".js"}(e);var p=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",p.name="ChunkLoadError",p.type=r,p.request=i,n[1](p)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://huoshanxue.github.io/hel-zz-lib/hel_dist/",i.oe=function(e){throw console.error(e),e};var a=window["helJsonp_hel-zz-lib_1706949410986"]=window["helJsonp_hel-zz-lib_1706949410986"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var p=u;return i(i.s=0)}({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("c8a0"),o=n("8bbf");var i=n("7796");n("ed2c");o.config&&(o.config.productionTip=!1),async function(){const e=await n.e("chunk-1587e475").then(n.bind(null,"6c72"));Object(i.libReady)("hel-zz-lib",e.default),Object(r.a)()&&await n.e("chunk-1587e475").then(n.bind(null,"a581"))}().catch(console.error)},7796:function(e,t,n){!function(e,t){"use strict";var n=function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}(t),r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function o(e,n){var r=n||(null===t.getAppPlatform||void 0===t.getAppPlatform?void 0:t.getAppPlatform(e)),o=t.getSharedCache(r).appName2Lib;return o[e]||(o[e]={}),o[e]}var i="4.8.5";n.log("hel-lib-proxy ver ".concat(i));var a=n.getUserEventBus,u=n.helConsts,c=a();function p(e,t){var o=r({},t||{});return o.platform=u.DEFAULT_PLAT,n.getVerLib(e,o)}function l(e,r){var i,a=!0,c="";r&&("string"==typeof r?c=r:(c=r.platform||"",a=null===(i=r.asProxy)||void 0===i||i));var p=o(e,c=c||n.getAppPlatform(e)||u.DEFAULT_PLAT);return"function"==typeof Proxy&&a&&(p=function(e,n,r){return new Proxy(n,{get:function(n,i){var a=String(i);return t.log("[[getLibProxy]] call lib [".concat(e,"] method [").concat(a,"]")),Object.keys(n).length?n[a]:o(e,r)[a]}})}(e,p,c)),n.log("[[ exposeLib ]] libName, libObj",e,p),p}function f(e,o,i){var a=function(e){var n={allowDup:!1,platform:t.helConsts.DEFAULT_PLAT};return r(r({},n),e||{})}(i);n.libReady(e,o,a)}function s(e,t,r){n.appReady(e,t,r)}function d(e,t){return n.getVerApp(e,t)}var v=n.isSubApp;function m(){return!n.isSubApp()}var g=Object.freeze({__proto__:null,VER:i,eventBus:c,getLib:p,exposeLib:l,libReady:f,appReady:s,exposeApp:d,isSubApp:v,isMasterApp:m}),_=t.commonUtil.purify,h=["isMasterApp","isSubApp","eventBus"],y=["appReady","libReady"];function b(e,t){return t&&"object"==typeof t?r({platform:e},_(t)):t}function E(e){var t=function(e,t){var n={};return Object.keys(e).forEach((function(r){var o=e[r];if(h.includes(r))n[r]=o;else if(y.includes(r))n[r]=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=n[0],i=n[1],a=n[2];return e(o,i,b(t,void 0===a?{}:a))}}(o,t);else{var i="exposeLib"===r;n[r]=function(e,t,n){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var i=r[0],a=r[1];return e(i,n&&"string"==typeof a?a||t:b(t,a))}}(o,t,i)}})),n}(g,e);return t.createInstance=E,t}var A=i,S=f,L=l,N=p,O=v,I=m,T=c,C=s,P=d,D={VER:A,libReady:S,exposeLib:L,getLib:N,isSubApp:O,isMasterApp:I,eventBus:T,appReady:C,exposeApp:P,createInstance:E};e.VER=A,e.appReady=C,e.createInstance=E,e.default=D,e.eventBus=T,e.exposeApp=P,e.exposeLib=L,e.getLib=N,e.isMasterApp=I,e.isSubApp=O,e.libReady=S,Object.defineProperty(e,"__esModule",{value:!0})}(t,n("cfe4"))},"8bbf":function(t,n){t.exports=e},c8a0:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var r,o,i,a,u=(r=p(),o=r.__HEL_ISO_FLAG__,i=r.__MASTER_APP_LOADED__,{isFirstMod:void 0===o,isBeforeCore:void 0===i});void 0===(a=p()).__HEL_ISO_FLAG__&&(a.__HEL_ISO_FLAG__=1);var c=function(){var e=p(),t=e.location,n=e.__HEL_MICRO_SHARED__,r=u.isBeforeCore;if(!u.isFirstMod)return!1;if(r)return!0;var o=function(){var e="";try{throw new Error("codeHost")}catch(n){var t=n.stack.split("\n");e=t[t.length-1]||""}return(e.split("//")[1]||"").split("/")[0]}();if(t&&t.host===o)return!0;if(n){var i=n.cacheRoot,a=i.appGroupName2platform,c=i.appName2platform,l=a||c||{};if(!Object.keys(l).length)return!0}return!1}();function p(){return window||e}function l(){return c}var f=l}).call(this,n("c8ba"))},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},cfe4:function(e,t,n){"use strict";n.r(t),function(e){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,p=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){p=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw o}}return u}}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"allowLog",(function(){return ot})),n.d(t,"appReady",(function(){return kt})),n.d(t,"commonDataUtil",(function(){return bt})),n.d(t,"commonUtil",(function(){return $e})),n.d(t,"evName",(function(){return Vt})),n.d(t,"getAppMeta",(function(){return st})),n.d(t,"getAppPlatform",(function(){return Rt})),n.d(t,"getAppStyleStr",(function(){return Nt})),n.d(t,"getCommonData",(function(){return ht})),n.d(t,"getCustomData",(function(){return gt})),n.d(t,"getGlobalThis",(function(){return at})),n.d(t,"getHelDebug",(function(){return rt})),n.d(t,"getHelEventBus",(function(){return Gt})),n.d(t,"getPlatform",(function(){return tt})),n.d(t,"getPlatformConfig",(function(){return Dt})),n.d(t,"getSharedCache",(function(){return nt})),n.d(t,"getUserEventBus",(function(){return Ft})),n.d(t,"getVerApp",(function(){return ct})),n.d(t,"getVerExtraCssList",(function(){return It})),n.d(t,"getVerLib",(function(){return lt})),n.d(t,"getVerLoadStatus",(function(){return Et})),n.d(t,"getVerStyleStrStatus",(function(){return St})),n.d(t,"getVersion",(function(){return vt})),n.d(t,"helConsts",(function(){return Je})),n.d(t,"helEvents",(function(){return We})),n.d(t,"helLoadStatus",(function(){return qe})),n.d(t,"inectPlatToMod",(function(){return Qe})),n.d(t,"initGlobalConfig",(function(){return jt})),n.d(t,"initPlatformConfig",(function(){return wt})),n.d(t,"isSubApp",(function(){return Ze})),n.d(t,"libReady",(function(){return Kt})),n.d(t,"log",(function(){return it})),n.d(t,"originInit",(function(){return xt})),n.d(t,"resetGlobalThis",(function(){return et})),n.d(t,"setAppMeta",(function(){return dt})),n.d(t,"setAppPlatform",(function(){return Mt})),n.d(t,"setAppStyleStr",(function(){return Ot})),n.d(t,"setCommonData",(function(){return yt})),n.d(t,"setCustomData",(function(){return _t})),n.d(t,"setEmitApp",(function(){return pt})),n.d(t,"setEmitLib",(function(){return ft})),n.d(t,"setGlobalThis",(function(){return ut})),n.d(t,"setVerExtraCssList",(function(){return Tt})),n.d(t,"setVerLoadStatus",(function(){return At})),n.d(t,"setVerStyleStrStatus",(function(){return Lt})),n.d(t,"setVersion",(function(){return mt})),n.d(t,"tryGetAppName",(function(){return Pt})),n.d(t,"tryGetVersion",(function(){return Ct}));var f=null;function s(){return f||function(){if("undefined"==typeof window){if(void 0===e)throw new Error("unable to locate global object");f=e}else f=window}(),f}function d(){return s()}function v(e){return Object.keys(e)}function m(e){var t,n=null===(t=s())||void 0===t?void 0:t.localStorage;return null==n?void 0:n.getItem(e)}function g(e,t){var n,r=null===(n=s())||void 0===n?void 0:n.localStorage;return null==r?void 0:r.setItem(e,t)}function _(){var e=function(){var e=function(e){var t=(e||{}).search||"";if(!t){var n=(loc.hash||"").split("?")[1]||"";n&&(t="?".concat(n))}return t};try{var t,n;return e(null===(t=s())||void 0===t||null===(n=t.top)||void 0===n?void 0:n.location)}catch(t){var r;return e(null===(r=s())||void 0===r?void 0:r.location)}}(),t={};null!=e&&e.startsWith("?")&&e.substring(1).split("&").forEach((function(e){var n=u(e.split("="),2),r=n[0],o=n[1];t[r]=o}));return t}function h(){var e="";try{throw new Error("getJsRunLocation")}catch(r){var t=r.stack.split("\n"),n=t.length;e=t[n-1]||t[n-2]||""}return e}function y(e,t,n,r){b(e,t)[n]=r}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e[t];return r||(r=n,e[t]=r),r}function E(e,t){Object.keys(t).forEach((function(n){var r=t[n];[null,void 0,""].includes(r)||(e[n]=r)}))}function A(e,t){e.includes(t)||e.push(t)}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.nullValues,r=void 0===n?[null,void 0,""]:n,o=t.emptyObjIsNull,a=void 0===o||o,u=t.emptyArrIsNull,c=void 0===u||u,p=r.includes(e);if(p)return!0;if(Array.isArray(e))return!!c&&0===e.length;if("object"===i(e)){var l=v(e),f=l.length;return!!a&&0===f}return!1}function L(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}var N=S,O=A,I=v;function T(e,t){var n=t||function(e){return!N(e)},r={};return I(e).forEach((function(t){n(e[t])&&(r[t]=e[t])})),r}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MULTI",n=e.split("\n"),r=n.length-1,o=n.map((function(e,n){var o;if(!e&&(0===n||n===r))return"";var i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=e;return e.endsWith("<br/>")?(r=e.substring(0,r.length-5),"".concat(r).concat(t)):"".concat(r).concat(n)},a=(null===(o=e.trimStart)||void 0===o?void 0:o.call(e))||e;return"MULTI"===t?"".concat(i(a,""),"\n"):a=i(a,"\n"," ")})).join("");return o}function P(e){return C(e,"ONE")}function D(e,t,n){e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(t),n)}function R(e){D(e,"heldisabled","1"),e.disabled=!0}var M=Object.freeze({__proto__:null,noop:L,safeParse:function(e,t,n){if(e&&"string"!=typeof e)return e;try{return JSON.parse(e)||t}catch(e){if(void 0!==t)return t;if(n)throw new Error(n);throw e}},isNull:N,noDupPush:O,okeys:I,merge2List:function(e,t){var n=[];return e.forEach((function(e){return O(n,e)})),t.forEach((function(e){return O(n,e)})),n},purify:T,getObjsVal:function(e,t,n){var r,o=n,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=p(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(e);try{for(i.s();!(r=i.n()).done;){var a=r.value[t];if(![null,void 0,""].includes(a)){o=a;break}}}catch(e){i.e(e)}finally{i.f()}return o},pfstr:C,nbstr:P,nbalert:function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=s(),o=P(e),i=r.alert||L;n?(null===(t=r.location)||void 0===t?void 0:t.port)&&i(o):i(o)},setDataset:D,disableNode:R});var w="__default_online_ver__",x={CORE_VER:"4.8.12",DEFAULT_API_PREFIX:"https://unpkg.com",DEFAULT_API_URL:"/openapi/v1/app/info",DEFAULT_ONLINE_VER:w,DEFAULT_USER_LS_KEY:"HelUserRtxName",DEFAULT_PLAT:"unpkg",LS_LOG_MODE:"HelConfig.logMode",LS_LOG_FILTER:"HelConfig.logFilter",PLAT_HEL:"hel",PLAT_UNPKG:"unpkg",KEY_CSS_STR:"CSS_STR",KEY_ASSET_CTX:"ASSET_CTX",KEY_STYLE_TAG_ADDED:"STYLE_TAG_ADDED",KEY_CSS_LINK_TAG_ADDED:"CSS_LINK_TAG_ADDED",KEY_IGNORE_CSS_PREFIX_LIST:"IGNORE_CSS_PREFIX_LIST",KEY_IGNORE_STYLE_TAG_KEY:"IGNORE_STYLE_TAG_KEY",KEY_IGNORE_CSS_PREFIX_2_KEYS:"IGNORE_CSS_PREFIX_2_KEYS"},j={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched",STYLE_TAG_ADDED:"StyleTagAdded",CSS_LINK_TAG_ADDED:"CssLinkTagAdded"},G={NOT_LOAD:0,LOADING:1,LOADED:2},F=x.LS_LOG_FILTER,V=x.LS_LOG_MODE,K=0,k=1,U=2,Y={isIncludeFilter:function(e,t){return t.includes(",")?t.split(",").some((function(t){return e.includes(t)})):e.includes(t)},getLogFilter:function(){return X().logFilter},setLogFilter:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];X().logFilter=e,t&&g(F,e)},setLogMode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=parseInt(e,10);[K,k,U].includes(n)&&(X().logMode=n,t&&g(V,n))},getLogMode:function(){return X().logMode}},H={};function B(){if(S(H=d().__HEL_MICRO_DEBUG__)){H={logMode:K,logFilter:"",isInit:!1},d().__HEL_MICRO_DEBUG__=H;try{!function(){if(!X().isInit){X().isInit=!0;var e=_(),t=e.hellog,n=e.hellogf,r=t||m(V)||K;Y.setLogMode(r,!1);var o=n||m(F)||"";Y.setLogFilter(o,!1)}}()}catch(e){}}else void 0===H.logMode&&(H.logMode=K,H.logFilter="")}function z(){return Y.getLogMode()!==K}function X(){return H}var W="  %c--\x3e HEL LOG:",q="color:#ad4e00;font-weight:600";function J(){if(z()){for(var e=Y.getLogMode()===k?console.log:console.trace||console.log,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n[0],i=n.slice(1);if("string"!=typeof o)return e.apply(void 0,[W,q].concat(n));var a=Y.getLogFilter(),u=["".concat(W," ").concat(o),q].concat(c(i));a?Y.isIncludeFilter(o,a)&&e.apply(void 0,c(u)):e.apply(void 0,c(u))}}var Q=x.DEFAULT_API_URL,$=x.DEFAULT_USER_LS_KEY,Z=x.PLAT_HEL,ee=x.PLAT_UNPKG,te=x.DEFAULT_API_PREFIX,ne=x.CORE_VER,re=x.KEY_CSS_LINK_TAG_ADDED,oe=x.KEY_STYLE_TAG_ADDED,ie=x.KEY_IGNORE_CSS_PREFIX_LIST,ae=x.KEY_IGNORE_STYLE_TAG_KEY,ue=x.KEY_IGNORE_CSS_PREFIX_2_KEYS;function ce(e){return{apiMode:"get",apiPrefix:(e||{}).apiPrefix,apiSuffix:"",apiPathOfApp:Q,apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,onFetchMetaFailed:null,strictMatchVer:!0,getUserName:null,userLsKey:$,shouldUseGray:null,trustAppNames:null,semverApi:null,hook:{}}}function pe(e){return o(o({isConfigOverwrite:!1,platform:e,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verExtraCssList:{},appName2verAppVersion:{},appName2verCustomData:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{},isOriginInitCalled:!1},ce()),{},{origin:ce({apiPrefix:te})})}function le(){var e={};return{on:function(t,n){var r=e[t];if(!r){var o=[];e[t]=o,r=o}r.push(n)},emit:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=e[t];if(i){var a=i.slice();a.forEach((function(e){return e.apply(void 0,r)}))}},off:function(t,n){var r=e[t];if(r)for(var o=0,i=r.length;o<i;o++){if(r[o]===n){r.splice(o,1);break}}}}}function fe(e){[re,oe,ie,ae,ue].forEach((function(t){return b(e,t,function(e){return e===ie?[]:{}}(t))}))}function se(){var e=de();if(e){var t=e.cacheRoot;b(t,"appGroupName2platform"),b(t,"common");var n=t.caches;return Object.keys(n).forEach((function(e){var t=n[e];b(t,"appGroupName2firstVer"),b(t,"appName2isLibAssigned"),b(t,"appName2verExtraCssList"),b(t,"appName2verCustomData"),b(t,"hook"),b(t,"origin",ce()),b(t.origin,"hook")})),fe(t.common),void(e.userEventBus||(e.userEventBus=le()))}fe((e=function(){var e,t=pe(ee),n=pe(Z),r={platform:Z,platformHint:"the platform value here does not make any sense!",appName2platform:{},appGroupName2platform:{},caches:(e={},a(e,ee,t),a(e,Z,n),e),common:{}},o=le(),i=le();return{ver:ne,isStyleObInit:!1,nativeHeadAppend:null,nativeBodyAppend:null,patchedHeadAppend:null,patchedBodyAppend:null,createFeature:h(),eventBus:o,userEventBus:i,cacheRoot:r,unpkgCache:t,helCache:n,dev:{setLogMode:Y.setLogMode,setLogFilter:Y.setLogFilter}}}()).cacheRoot.common),d().__HEL_MICRO_SHARED__=e}function de(){return d().__HEL_MICRO_SHARED__}function ve(){return"unpkg"}function me(e){var t=e||"unpkg",n=ge(),r=n.caches[t];if(!r){var o=i(e);if("string"!==o)throw console.error("invalid plaform:",e),new Error("fatal error: platform only can be a string, now it is ".concat(o));var a=pe(e);n.caches[t]=a,r=a}return r}function ge(){return de().cacheRoot}var _e={getCustomData:function(e,t,n){var r=n.versionId,o=b(me(n.platform).appName2verCustomData,e);return b(o,t)[r||w]},getAppMeta:function(e,t){return me(t).appName2app[e]},setVerLoadStatus:function(e,t,n,r){var o=r||{},i=o.versionId;y(me(o.platform)[n],e,i||w,t)},getVerLoadStatus:function(e,t,n){var r,o=n||{},i=o.versionId,a=me(o.platform)[t],u=i||w;return(null===(r=a[e])||void 0===r?void 0:r[u])||G.NOT_LOAD},ensureOnlineModule:function(e,t,n){if(!e[w]){var r=_e.getAppMeta(t,n),o=e[null==r?void 0:r.online_version];o&&(e[w]=o)}}};function he(e,t){J("[[ core:setEmitApp ]] appName,emitApp:",e,t);var n=t.versionId,r=me(t.platform),o=r.appName2verEmitApp,i=r.appName2Comp,a=r.appName2EmitApp;b(o,e)[w]||(i[e]=t.Comp,a[e]=t,y(o,e,w,t)),n&&y(o,e,n,t)}var ye=x.KEY_CSS_LINK_TAG_ADDED,be=x.KEY_STYLE_TAG_ADDED,Ee=x.KEY_IGNORE_CSS_PREFIX_LIST,Ae=x.KEY_IGNORE_STYLE_TAG_KEY,Se=x.KEY_IGNORE_CSS_PREFIX_2_KEYS;function Le(e){return b(ge().common,e)}function Ne(e){return ge().common[e]}function Oe(e,t){var n=Le(e)[t];return void 0!==n?n:null}function Ie(e,t,n){Le(e)[t]=n}var Te={setIgnoreCssPrefix:function(e){A(Ne(Ee),e)},setIgnoreStyleTagKey:function(e){Te.getIgnoreStyleTagMap()[e]=1},getIgnoreStyleTagMap:function(){return Ne(Ae)},setIgnoreCssPrefixKey:function(e,t){var n=Oe(Se,e);n||Ie(Se,e,n=[]),A(n,t)},getIgnoreCssPrefixKeys:function(e){return Ne(Se)[e]||[]},getMatchedIgnoreCssPrefix:function(e){for(var t=Ne(Ee),n="",r=0;r<t.length;r++){var o=t[r];if(e.startsWith(o)){n=o;break}}return n},getIgnoreCssPrefixCssUrlList:function(e){var t=Oe(ye,e);return t||Ie(ye,e,t=[]),t},setIgnoreCssPrefixCssUrl:function(e,t){Te.getIgnoreCssPrefixCssUrlList(e).push(t)},getStyleTagText:function(e){return Oe(be,e)||""},clearStyleTagText:function(e){Ie(be,e,"")},appendStyleTagText:function(e,t){var n=Te.getStyleTagText(e);Ie(be,e,"".concat(n," ").concat(t))}};function Ce(e,t){var n=e.apiMode,r=e.apiPrefix,o=e.apiSuffix,i=e.apiPathOfApp,a=e.apiPathOfAppVersion,u=e.getSubAppAndItsVersionFn,c=e.onFetchMetaFailed,p=e.strictMatchVer,l=e.getUserName,f=e.userLsKey,s=e.shouldUseGray,d=e.getApiPrefix,v=e.trustAppNames,m=e.platform,g=e.origin,_={apiMode:n,apiPrefix:r,apiSuffix:o,apiPathOfApp:i,apiPathOfAppVersion:a,getSubAppAndItsVersionFn:u,onFetchMetaFailed:c,strictMatchVer:p,getUserName:l,userLsKey:f,shouldUseGray:s,getApiPrefix:d,trustAppNames:v,hook:e.hook,platform:m};return t&&(_.origin=g),_}function Pe(e){return ge().appGroupName2platform[e]||"unpkg"}function De(e,t){var n=t.customKey,r=b(me(t.platform).appName2verCustomData,e);return b(r,n)}var Re=j.STYLE_TAG_ADDED,Me=j.CSS_LINK_TAG_ADDED;function we(){return de().eventBus}var xe={styleTagAdded:function(e){return"".concat(Re,"/").concat(e)},cssLinkTagAdded:function(e){return"".concat(Me,"(").concat(e,")")}};function je(e,t,n){var r=(n||{}).appGroupName,o=t.versionId,a=t.appProperties,u=t.platform||n.platform,c=me(u),p=c.appName2verEmitLib,l=c.appName2Lib,f=c.appName2isLibAssigned,s=_e.getAppMeta(e,u),d=function(e){var t=l[e];t?"object"===i(t)&&0===Object.keys(t).length&&Object.assign(t,a):l[e]=a,f[e]=!0};d(e),r?d(r):s&&d(s.app_group_name),J("[[ core:setEmitLib ]] appMeta:",s),b(p,e)[w]||y(p,e,w,a),o&&y(p,e,o,a)}function Ge(e,t){return me(t).appName2app[e]}function Fe(e,t,n){_e.setVerLoadStatus(e,t,"appName2verLoadStatus",n)}function Ve(e,t){var n=h();J("[[ core:tryGetVersion ]] may include source > ".concat(n));var r=me(t).appGroupName2firstVer[e]||"";if(n.includes("https://")||n.includes("http://")){var o=u(n.split("//"),2)[1].split("/");if(r){if("unpkg"===t&&o.some((function(e){return e.includes(r)})))return r;if(o.includes(r))return r;if("static"===o[1]&&"js"===o[2]||"js"===o[1])return r}return"unpkg"===t?o[1].split("@")[1]||r:o[2]||r}return r}function Ke(e,t){return e===w?t||"":e.includes("_")?e.substring(0,e.length-15):t||""}var ke=!1,Ue=!1;var Ye=x.KEY_ASSET_CTX;function He(e,t){if(!t||!["LINK","SCRIPT"].includes(t.tagName))return e(t);var n=t.href,r=t.tagName,o=t.src,i="LINK"===r,a=Oe(Ye,n||o||"")||{},u=a.platform,c=a.groupName,p=a.name,l=a.ver,f=a.beforeAppend,s=t;if(f){var d=i?"href":"src",v=t.getAttribute(d);s=f({el:t,nativeAppend:e,setAssetUrl:function(e){return t.setAttribute(d,e)},url:v,tagName:r})||t}return u&&function(e,t){var n=t.platform,r=t.groupName,o=t.name,i=t.ver;D(e,"el",t.elName),D(e,"plat",n),D(e,"gname",r),D(e,"name",o),D(e,"ver",i)}(s,{platform:u,groupName:c,name:p,ver:l,elName:i?"HelLink":"HelScript"}),e(s)}var Be="/* @helstart ".length;function ze(e,t){var n=e.tagName,r=e.innerText,o=e.href;if(["STYLE","LINK"].includes(n)&&("STYLE"!==n||r))if("STYLE"===n){var i=r.indexOf("/* @helstart ");if(i<0)return;var a=r.indexOf(" @helend */");if(a<0)return;var u=r.substring(Be+i,a);if(u){var c=u.trim(),p="",l=c;if(c.includes("/")){var f=c.split("/");p=f[0],l=f[1]}D(e,"gname",l),p&&D(e,"plat",p),t[c]&&R(e);var s=we();Te.appendStyleTagText(c,r),s.emit(xe.styleTagAdded(c),{nodes:[e]})}}else{(function(e,t){var n=we(),r=Te.getMatchedIgnoreCssPrefix(t);return r&&(Te.setIgnoreCssPrefixCssUrl(r,t),n.emit(xe.cssLinkTagAdded(r),{nodes:[e]})),r})(e,o)&&R(e)}}function Xe(e,t){var n=e.tagName,r=e.src,o=void 0===r?"":r;if("SCRIPT"!==n)return!1;if(!o.endsWith(".hot-update.js"))return!1;var i=Te.getMatchedIgnoreCssPrefix(o);if(!i)return!1;var a=Te.getIgnoreCssPrefixKeys(i);if(!a.length)return!1;var u=!1;return a.forEach((function(e){t[e]&&(!function(e){var t=s();if(t){var n=t.document.head.querySelectorAll('style[data-gname="'.concat(e,'"]'));if(n.length)Te.clearStyleTagText(e),n.forEach((function(t){R(t),Te.appendStyleTagText(e,t.innerText)})),we().emit(xe.styleTagAdded(e),{nodes:n})}}(e),u=!0)})),u}et(),J("hel-micro-core ver ".concat(x.CORE_VER));var We=j,qe=G,Je=x,Qe=function e(t,n,r){var a=r||{},u=a.ignoreKeys,c=void 0===u?[]:u,p=a.arg1PlatObjFnKeys,l=void 0===p?[]:p,f={};return Object.keys(n).forEach((function(a){var u=n[a];if(c.includes(a))f[a]=u;else{var p=i(u);f[a]=p&&"object"===p?e(t,u,r):"function"!==p?u:function(e,t){var n=this,r=t.fn,i=t.fnName,a=t.arg1PlatObjFnKeys.includes(i);return function(){for(var t=function(t){return o({platform:e},T(t||{}))},i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];var p=u[0],l=u[1];return a?u[0]=t(p):u[1]=t(l),r.apply(n,u)}}(t,{arg1PlatObjFnKeys:l,fn:u,fnName:a})}})),f},$e=M,Ze=function(){return"more details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp",console.log("%c".concat("WARNING: calling isSubApp is unsafe, use hel-iso.isSubApp instead,\nmore details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp"),"color:red;"),!ke};function et(e){e&&ut(e),function(e){if(e&&(ke=!1,Ue=!1),!Ue){Ue=!0;var t=s();void 0===t.__MASTER_APP_LOADED__&&(t.__MASTER_APP_LOADED__=!0,ke=!0)}}(!!e),se(),B(),function(){var e=s();if(!e.__POWERED_BY_QIANKUN__){var t=de(),n=e.document,r=t.nativeHeadAppend,o=t.nativeBodyAppend;if(!r&&n){var i=n.head,a=n.body;r=i.appendChild.bind(i),o=a.appendChild.bind(a),t.nativeHeadAppend=r,t.nativeBodyAppend=o;var u=function(n,r,o){var i=t.patchedHeadAppend,a=t.patchedBodyAppend,u="head"===o;if(i&&u)return i;if(a&&!u)return a;if(e.__POWERED_BY_WUJIE__)return n;var c=e.Element;return c?c.prototype.appendChild.bind(r):n};n.head.appendChild=function(e){return He(u(r,i,"head"),e)},n.body.appendChild=function(e){return He(u(o,a,"body"),e)}}}}(),function(){var e=de(),t=s(),n=e.isStyleObInit,r=t.document;if(!n&&r){e.isStyleObInit=!0;var o=Te.getIgnoreStyleTagMap(),i=t.MutationObserver||t.WebKitMutationObserver||t.MozMutationObserver;if(i)new i((function(e){e.forEach((function(e){for(var t=e.addedNodes,n=e.removedNodes,r=t.length,i=0;i<r;i++)ze(t[i],o);for(var a=n.length,u=0;u<a&&!Xe(n[u],o);u++);}))})).observe(document.head,{childList:!0})}}()}var tt=ve,nt=me,rt=X,ot=z,it=J,at=s,ut=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=null;null!==(t=f)&&void 0!==t&&t.__HEL_MICRO_SHARED__&&(r=f.__HEL_MICRO_SHARED__),f=n?o(o({},f),e):e,r&&(f.__HEL_MICRO_SHARED__=r)},ct=function(e,t){var n,r=t||{},o=r.versionId,i=r.platform,a=me(i),u=a.appName2verEmitApp,c=a.appName2Comp,p=a.strictMatchVer,l=a.appName2EmitApp,f=null!==(n=r.strictMatchVer)&&void 0!==n?n:p,s=b(u,e);_e.ensureOnlineModule(s,e,i);var d=s[o||w],v=c[e],m=v?{Comp:v}:null,g=f?null:l[e]||m,_=d||g||null;return J("[[ core:getVerApp ]] appName,options,result:",e,r,_),_},pt=he,lt=function(e,t){var n,r=t||{},o=r.versionId,i=me(r.platform),a=i.appName2verEmitLib,u=i.appName2Lib,c=i.strictMatchVer,p=i.appName2isLibAssigned,l=null!==(n=r.strictMatchVer)&&void 0!==n?n:c,f=b(a,e);_e.ensureOnlineModule(f,e);var s=f[o||w],d=p[e]?u[e]:null,v=s||(l?null:d)||null;return J("[[ core:getVerLib ]] appName,options,result:",e,r,v),v},ft=je,st=Ge,dt=function(e,t){me(t).appName2app[e.name]=e},vt=function(e,t){var n,r=t||{},o=r.platform,i=r.versionId,a=me(o),u=a.appName2verAppVersion,c=a.appName2appVersion[e]||null;return i&&(null===(n=u[e])||void 0===n?void 0:n[i])||c},mt=function(e,t,n){var r=(n||{}).platform,o=me(r),i=o.appName2verAppVersion,a=o.appGroupName2firstVer,u=o.appName2appVersion,c=t.sub_app_version;if(c){var p=_e.getAppMeta(e,r);b(i,e)[w]||(y(i,e,w,t),u[e]=t),y(i,e,c,t),a[p.app_group_name]=c}},gt=function(e,t){var n=De(e,t)[t.versionId||w];return void 0!==n?n:null},_t=function(e,t){var n=t.customValue,r=t.versionId;De(e,t)[r||w]=n},ht=Oe,yt=Ie,bt=Te,Et=function(e,t){return _e.getVerLoadStatus(e,"appName2verLoadStatus",t)},At=Fe,St=function(e,t){return _e.getVerLoadStatus(e,"appName2verStyleFetched",t)},Lt=function(e,t,n){_e.setVerLoadStatus(e,t,"appName2verStyleFetched",n)},Nt=function(e,t){var n,r=t||{},o=r.platform,i=r.versionId,a=me(o),u=a.appName2verStyleStr,c=a.appName2styleStr[e]||"";return i?(null===(n=u[e])||void 0===n?void 0:n[i])||c||"":c},Ot=function(e,t,n){var r=n||{},o=r.platform,i=r.versionId,a=me(o),u=a.appName2verStyleStr,c=a.appName2verStyleFetched,p=a.appName2styleStr;i?(y(u,e,i,t),y(c,e,i,G.LOADED)):p[e]=t},It=function(e,t){var n=t||{},r=n.versionId,o=b(me(n.platform).appName2verExtraCssList,e),i=o[r]||o[w]||[];return J("[[ core:getVerExtraCssList ]] options,cssList:",n,i),i},Tt=function(e,t,n){var r=n||{},o=r.versionId,i=me(r.platform).appName2verExtraCssList;J("[[ core:setVerExtraCssList ]] cssList:",t),b(i,e)[w]||y(i,e,w,t),o&&y(i,e,o,t)},Ct=Ve,Pt=Ke,Dt=function(e){return Ce(me(e),!0)},Rt=Pe,Mt=function(e,t){return ge().appGroupName2platform[e]=t,Pe(e)},wt=function(e,t){var n=me(t),r=Ce(e);n.isConfigOverwrite||(n.isConfigOverwrite=!0,E(n,r))},xt=function(e,t){var n=me(e),r="[[ core:originInit ]] invalid call, it can only been called";if(n.isConfigOverwrite)J("".concat(r," before init"));else if(n.isOriginInitCalled)J("".concat(r," one time"));else{var o=Ce(t);n.isOriginInitCalled=!0,E(n.origin,o)}},jt=function(e){var t=de(),n=t.nativeHeadAppend,r=t.nativeBodyAppend,o=e.headAppend||null,i=e.bodyAppend||null,a=function(e){return"pass same ".concat(e," handle, hel will ignore it for avlid 'Maximum call stack size exceeded'")};o&&o===n?console.error(a("headAppend")):t.patchedHeadAppend=o,i&&i===r?console.error(a("bodyAppend")):t.patchedBodyAppend=i},Gt=we,Ft=function(){return de().userEventBus},Vt=xe,Kt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.platform||Pe(e),o=n.versionId||Ve(e,r),i=n.appName||Ke(o,e),a=Ge(i,r);null!=a&&a.__fromCust&&(o=n.versionId||a.online_version,i=a.name);var u={platform:r,appName:i,appGroupName:e,versionId:o,appProperties:t,Comp:function(){},lifecycle:{}};je(i,u,{appGroupName:e,platform:r}),Fe(i,G.LOADED,{versionId:o,platform:r});var c=we();c.emit(j.SUB_LIB_LOADED,u)},kt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.lifecycle,o=n.platform||Pe(e),i=n.versionId||Ve(e,o),a=n.appName||Ke(i,e),u={Comp:t,appName:a,appGroupName:e,lifecycle:r,platform:o,versionId:i,isLib:!1};he(a,u),Fe(a,G.LOADED,{versionId:i,platform:o});var c=we();c.emit(j.SUB_APP_LOADED,u)}}.call(this,n("c8ba"))},ed2c:function(e,t,n){}})}));
//# sourceMappingURL=app~e2e93592.3b013ae1.js.map