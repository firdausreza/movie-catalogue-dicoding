!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=9)}([function(e,n,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),a=[];function c(e){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===e){n=r;break}return n}function u(e,n){for(var r={},t=[],o=0;o<e.length;o++){var i=e[o],u=n.base?i[0]+n.base:i[0],s=r[u]||0,l="".concat(u," ").concat(s);r[u]=s+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:m(p,n),references:1}),t.push(l)}return t}function s(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function d(e,n,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var v=null,h=0;function m(e,n){var r,t,o;if(n.singleton){var i=h++;r=v||(v=s(n)),t=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=s(n),t=d.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var r=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=c(r[t]);a[o].references--}for(var i=u(e,n),s=0;s<r.length;s++){var l=c(r[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=i}}}},function(e,n,r){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=function(e,n){var r=e[1]||"",t=e[3];if(!t)return r;if(n&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,u;return[r].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);t&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),n.push(u))}},n}},function(e,n){var r="\\sw.js";Object.defineProperty(n,"__esModule",{value:!0}),n.default={register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!navigator.serviceWorker&&navigator.serviceWorker.register(r,e)}},e.exports=n.default},function(e,n,r){(function(e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e){"use strict";var r=Object.prototype,t=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,n,r){return Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{u({},"")}catch(e){u=function(e,n,r){return e[n]=r}}function s(e,n,r,t){var o=n&&n.prototype instanceof p?n:p,i=Object.create(o.prototype),a=new E(t||[]);return i._invoke=function(e,n,r){var t="suspendedStart";return function(o,i){if("executing"===t)throw new Error("Generator is already running");if("completed"===t){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===t)throw t="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);t="executing";var u=l(e,n,r);if("normal"===u.type){if(t=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(t="completed",r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function l(e,n,r){try{return{type:"normal",arg:e.call(n,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f={};function p(){}function d(){}function v(){}var h={};u(h,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(L([])));g&&g!==r&&t.call(g,i)&&(h=g);var y=v.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(n){u(e,n,(function(e){return this._invoke(n,e)}))}))}function w(e,r){var o;this._invoke=function(i,a){function c(){return new r((function(o,c){!function o(i,a,c,u){var s=l(e[i],e,a);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===n(p)&&t.call(p,"__await")?r.resolve(p.__await).then((function(e){o("next",e,c,u)}),(function(e){o("throw",e,c,u)})):r.resolve(p).then((function(e){f.value=e,c(f)}),(function(e){return o("throw",e,c,u)}))}u(s.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function _(e,n){var r=e.iterator[n.method];if(void 0===r){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=void 0,_(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var t=l(r,e.iterator,n.arg);if("throw"===t.type)return n.method="throw",n.arg=t.arg,n.delegate=null,f;var o=t.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function x(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function k(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(t.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return d.prototype=v,u(y,"constructor",v),u(v,"constructor",d),d.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),u(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(n,r,t,o,i){void 0===i&&(i=Promise);var a=new w(s(n,r,t,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(y),u(y,c,"Generator"),u(y,i,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var n=[];for(var r in e)n.push(r);return n.reverse(),function r(){for(;n.length;){var t=n.pop();if(t in e)return r.value=t,r.done=!1,r}return r.done=!0,r}},e.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&t.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,t){return a.type="throw",a.arg=e,n.next=r,t&&(n.method="next",n.arg=void 0),!!t}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=t.call(i,"catchLoc"),u=t.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),f},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===e){var t=r.completion;if("throw"===t.type){var o=t.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}("object"===n(e)?e.exports:{});try{regeneratorRuntime=r}catch(e){"object"===("undefined"==typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}).call(this,r(4)(e))},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,r){var t=r(0),o=r(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);e.exports=o.locals||{}},function(e,n,r){(n=r(1)(!1)).push([e.i,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n/*\r\n  AppBar\r\n*/\r\n\r\n.app-bar {\r\n    padding: 8px 16px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 99;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n    color: #db0000;\r\n    text-transform: uppercase;\r\n    font-size: 22px;\r\n    user-select: none;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: white;\r\n    overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 8px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n}\r\n\r\n/*\r\n  Main Content\r\n*/\r\n\r\nmain {\r\n    padding: 32px;\r\n    flex: 1;\r\n}\r\n\r\n.content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n/*\r\n  Movies\r\n*/\r\n\r\n.movies {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n}\r\n\r\n\r\n/*\r\n  Movie Item\r\n*/\r\n\r\n.movie-item {\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n}\r\n\r\n.movie-item__header {\r\n    position: relative;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__poster {\r\n    width: 100%;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {\r\n    margin-left: 10px;\r\n}\r\n\r\n.movie-item .movie-item__content {\r\n    padding: 16px;\r\n}\r\n\r\n.movie-item .movie-item__content h3 {\r\n    margin: 0 0 10px 0;\r\n}\r\n\r\n.movie-item .movie-item__content h3 a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n}\r\n\r\n.movie-item .movie-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4; /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n}\r\n\r\n\r\n/*\r\n  Movie\r\n*/\r\n\r\n.movie {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n}\r\n\r\n.movie .movie__poster {\r\n    width: 100%;\r\n    max-width: 400px;\r\n}\r\n\r\n.movie .movie__info h4 {\r\n    margin: 8px 0;\r\n}\r\n\r\n\r\n\r\n/*\r\n  Footer\r\n*/\r\n\r\nfooter {\r\n    padding: 16px;\r\n}\r\n\r\nfooter p {\r\n    text-align: center;\r\n    color: #aaaaaa;\r\n}\r\n\r\nfooter p a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n}\r\n\r\n.like {\r\n    font-size: 18px;\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    background-color: #db0000;\r\n    color: white;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    width: 55px;\r\n    height: 55px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}",""]),e.exports=n},function(e,n,r){var t=r(0),o=r(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);e.exports=o.locals||{}},function(e,n,r){(n=r(1)(!1)).push([e.i,"@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n        grid-template-columns: 1fr auto;\r\n        padding: 8px 32px;\r\n    }\r\n\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 1.5em;\r\n    }\r\n\r\n    .app-bar .app-bar__menu {\r\n        display: none;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation {\r\n        position: static;\r\n        width: 100%;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul li {\r\n        display: inline-block;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul li a {\r\n        display: inline-block;\r\n        width: 120px;\r\n        text-align: center;\r\n        margin: 0;\r\n    }\r\n\r\n    .movies {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .movie {\r\n        grid-template-columns: auto 1fr;\r\n    }\r\n\r\n    .movie .movie__title {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n\r\n    .movie .movie__overview {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 2em;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n    .movies {\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .movies {\r\n        grid-template-columns: repeat(4, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n    .movies {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    }\r\n}",""]),e.exports=n},function(e,n,r){"use strict";r.r(n);r(3),r(5),r(7);var t={init:function(e){var n=this,r=e.button,t=e.drawer,o=e.content;r.addEventListener("click",(function(e){n._toggleDrawer(e,t)})),o.addEventListener("click",(function(e){n._closeDrawer(e,t)}))},_toggleDrawer:function(e,n){e.stopPropagation(),n.classList.toggle("open")},_closeDrawer:function(e,n){e.stopPropagation(),n.classList.remove("open")}},o={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),n=this._urlSplitter(e);return this._urlCombiner(n)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var n=e.split("/");return{resource:n[1]||null,id:n[2]||null,verb:n[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}},i={KEY:"171b1d2c0a8f4366a4ecae103eb6f4e9",BASE_URL:"https://api.themoviedb.org/3/",BASE_IMAGE_URL:"https://image.tmdb.org/t/p/w500/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"movie-catalogue-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"movies",WEB_SOCKET_SERVER:"wss://movies-feed.dicoding.dev"},a={NOW_PLAYING:"".concat(i.BASE_URL,"movie/now_playing?api_key=").concat(i.KEY,"&language=").concat(i.DEFAULT_LANGUAGE,"&page=1"),UPCOMING:"".concat(i.BASE_URL,"movie/upcoming?api_key=").concat(i.KEY,"&language=").concat(i.DEFAULT_LANGUAGE,"&page=1"),DETAIL:function(e){return"".concat(i.BASE_URL,"movie/").concat(e,"?api_key=").concat(i.KEY)}};function c(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){c(i,t,o,a,u,"next",e)}function u(e){c(i,t,o,a,u,"throw",e)}a(void 0)}))}}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,t,o,i,c;return n=e,r=null,t=[{key:"nowPlayingMovies",value:(c=u(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.NOW_PLAYING);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})},{key:"upcomingMovies",value:(i=u(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.UPCOMING);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)})},{key:"detailMovie",value:(o=u(regeneratorRuntime.mark((function e(n){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.DETAIL(n));case 2:return r=e.sent,e.next=5,r.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})}],r&&s(n.prototype,r),t&&s(n,t),e}(),f=function(e){return'\n    <h2 class="movie__title">'.concat(e.title,'</h2>\n    <img class="movie__poster" src="').concat(i.BASE_IMAGE_URL+e.poster_path,'" alt="').concat(e.title,'" />\n    <div class="movie__info">\n    <h3>Information</h3>\n      <h4>Tagline</h4>\n      <p>').concat(e.tagline,"</p>\n      <h4>Release Date</h4>\n      <p>").concat(e.release_date,"</p>\n      <h4>Duration</h4>\n      <p>").concat(e.runtime," minutes</p>\n      <h4>Rating</h4>\n      <p>").concat(e.vote_average,'</p>\n    </div>\n    <div class="movie__overview">\n      <h3>Overview</h3>\n      <p>').concat(e.overview,"</p>\n    </div>\n  ")},p=function(e){var n=window.location.pathname.split("/")[1];return'\n    <div class="movie-item">\n      <div class="movie-item__header">\n          <img class="movie-item__header__poster" alt="'.concat(e.title,'"\n              src="').concat(e.backdrop_path?i.BASE_IMAGE_URL+e.backdrop_path:"https://picsum.photos/id/666/800/450?grayscale",'">\n          <div class="movie-item__header__rating">\n              <p>⭐️<span class="movie-item__header__rating__score">').concat(e.vote_average,'</span></p>\n          </div>\n      </div>\n      <div class="movie-item__content">\n          <h3><a href="').concat("/"===window.location.pathname?"/#/detail/".concat(e.id):"/".concat(n,"/#/detail/").concat(e.id),'">').concat(e.title,"</a></h3>\n          <p>").concat(e.overview,"</p>\n      </div>\n    </div>\n  ")};function d(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}function v(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){d(i,t,o,a,c,"next",e)}function c(e){d(i,t,o,a,c,"throw",e)}a(void 0)}))}}var h={render:function(){return v(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Now Playing in Cinema</h2>\n        <div id="movies" class="movies">\n \n        </div>\n      </div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return v(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.nowPlayingMovies();case 2:n=e.sent,r=document.querySelector("#movies"),n.forEach((function(e){r.innerHTML+=p(e)}));case 5:case"end":return e.stop()}}),e)})))()}};function m(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}function g(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){m(i,t,o,a,c,"next",e)}function c(e){m(i,t,o,a,c,"throw",e)}a(void 0)}))}}var y,b,w={render:function(){return g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Upcoming in Cinema</h2>\n        <div id="movies" class="movies">\n  \n        </div>\n      </div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return g(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.upcomingMovies();case 2:n=e.sent,r=document.querySelector("#movies"),n.forEach((function(e){r.innerHTML+=p(e)}));case 5:case"end":return e.stop()}}),e)})))()}};var _=new WeakMap,x=new WeakMap,k=new WeakMap,E=new WeakMap,L=new WeakMap;var R={get:function(e,n,r){if(e instanceof IDBTransaction){if("done"===n)return x.get(e);if("objectStoreNames"===n)return e.objectStoreNames||k.get(e);if("store"===n)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return A(e[n])},set:function(e,n,r){return e[n]=r,!0},has:function(e,n){return e instanceof IDBTransaction&&("done"===n||"store"===n)||n in e}};function S(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(b||(b=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e.apply(O(this),r),A(_.get(this))}:function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return A(e.apply(O(this),r))}:function(n){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];var i=e.call.apply(e,[O(this),n].concat(t));return k.set(i,n.sort?n.sort():[n]),A(i)}}function P(e){return"function"==typeof e?S(e):(e instanceof IDBTransaction&&function(e){if(!x.has(e)){var n=new Promise((function(n,r){var t=function(){e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=function(){n(),t()},i=function(){r(e.error||new DOMException("AbortError","AbortError")),t()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));x.set(e,n)}}(e),n=e,(y||(y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return n instanceof e}))?new Proxy(e,R):e);var n}function A(e){if(e instanceof IDBRequest)return n=e,(r=new Promise((function(e,r){var t=function(){n.removeEventListener("success",o),n.removeEventListener("error",i)},o=function(){e(A(n.result)),t()},i=function(){r(n.error),t()};n.addEventListener("success",o),n.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&_.set(e,n)})).catch((function(){})),L.set(r,n),r;var n,r;if(E.has(e))return E.get(e);var t=P(e);return t!==e&&(E.set(e,t),L.set(t,e)),t}var O=function(e){return L.get(e)};function M(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?M(Object(r),!0).forEach((function(n){B(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function B(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function N(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}var T=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],C=new Map;function I(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(C.get(n))return C.get(n);var r=n.replace(/FromIndex$/,""),t=n!==r,o=D.includes(r);if(r in(t?IDBIndex:IDBObjectStore).prototype&&(o||T.includes(r))){var i=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var i,a,c,u,s,l,f=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=this.transaction(n,o?"readwrite":"readonly"),c=a.store,u=f.length,s=new Array(u>1?u-1:0),l=1;l<u;l++)s[l-1]=f[l];return t&&(c=c.index(s.shift())),e.next=6,Promise.all([(i=c)[r].apply(i,s),o&&a.done]);case 6:return e.abrupt("return",e.sent[0]);case 7:case"end":return e.stop()}}),e,this)})),function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){N(i,t,o,a,c,"next",e)}function c(e){N(i,t,o,a,c,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();return C.set(n,i),i}}}function U(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}function G(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){U(i,t,o,a,c,"next",e)}function c(e){U(i,t,o,a,c,"throw",e)}a(void 0)}))}}R=function(e){return j(j({},e),{},{get:function(n,r,t){return I(n,r)||e.get(n,r,t)},has:function(n,r){return!!I(n,r)||e.has(n,r)}})}(R);var W=i.OBJECT_STORE_NAME,q=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=r.blocked,o=r.upgrade,i=r.blocking,a=r.terminated,c=indexedDB.open(e,n),u=A(c);return o&&c.addEventListener("upgradeneeded",(function(e){o(A(c.result),e.oldVersion,e.newVersion,A(c.transaction))})),t&&c.addEventListener("blocked",(function(){return t()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),u}(i.DATABASE_NAME,i.DATABASE_VERSION,{upgrade:function(e,n,r,t){e.createObjectStore(W,{keyPath:"id"})}}),F={getMovie:function(e){return G(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q;case 2:return n.abrupt("return",n.sent.get(W,e));case 3:case"end":return n.stop()}}),n)})))()},getAllMovies:function(){return G(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q;case 2:return e.abrupt("return",e.sent.getAll(W));case 3:case"end":return e.stop()}}),e)})))()},editMovie:function(e){return G(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q;case 2:return n.abrupt("return",n.sent.put(W,e));case 3:case"end":return n.stop()}}),n)})))()},deleteMovie:function(e){return G(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q;case 2:return n.abrupt("return",n.sent.delete(W,e));case 3:case"end":return n.stop()}}),n)})))()}};function H(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}function K(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){H(i,t,o,a,c,"next",e)}function c(e){H(i,t,o,a,c,"throw",e)}a(void 0)}))}}var Y={init:function(e){var n=this;return K(regeneratorRuntime.mark((function r(){var t,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.likeButtonContainer,o=e.movie,n._likeButtonContainer=t,n._movie=o,r.next=5,n._renderButton();case 5:case"end":return r.stop()}}),r)})))()},_renderButton:function(){var e=this;return K(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e._movie.id,n.next=3,e._movieExists(r);case 3:if(!n.sent){n.next=7;break}e._renderLiked(),n.next=8;break;case 7:e._renderLike();case 8:case"end":return n.stop()}}),n)})))()},_movieExists:function(e){return K(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.getMovie(e);case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this movie" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",K(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.editMovie(e._movie);case 2:e._renderButton();case 3:case"end":return n.stop()}}),n)}))))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this movie" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",K(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.deleteMovie(e._movie.id);case 2:e._renderButton();case 3:case"end":return n.stop()}}),n)}))))}};function z(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}function V(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){z(i,t,o,a,c,"next",e)}function c(e){z(i,t,o,a,c,"throw",e)}a(void 0)}))}}function J(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}function $(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){J(i,t,o,a,c,"next",e)}function c(e){J(i,t,o,a,c,"throw",e)}a(void 0)}))}}var Q={"/":h,"/now-playing":h,"/upcoming":w,"/detail/:id":{render:function(){return V(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div id="movie" class="movie"></div>\n      <div id="likeButtonContainer"></div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return V(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.parseActiveUrlWithoutCombiner(),console.log(n,"after render"),e.next=4,l.detailMovie(n.id);case 4:r=e.sent,document.querySelector("#movie").innerHTML=f(r,n.pathname),Y.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),movie:{id:r.id,title:r.title,overview:r.overview,backdrop_path:r.backdrop_path,vote_average:r.vote_average}});case 8:case"end":return e.stop()}}),e)})))()}},"/like":{render:function(){return $(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Your Liked Movie</h2>\n        <div id="movies" class="movies">\n   \n        </div>\n      </div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return $(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getAllMovies();case 2:n=e.sent,r=document.querySelector("#movies"),n.forEach((function(e){r.innerHTML+=p(e)}));case 5:case"end":return e.stop()}}),e)})))()}}};function X(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}function Z(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var ee=function(){function e(n){var r=n.button,t=n.drawer,o=n.content;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._button=r,this._drawer=t,this._content=o,this._initialAppShell()}var n,r,i,a,c;return n=e,(r=[{key:"_initialAppShell",value:function(){t.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(a=regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.parseActiveUrlWithCombiner(),r=Q[n],e.next=4,r.render();case 4:return this._content.innerHTML=e.sent,e.next=7,r.afterRender();case 7:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,n=arguments;return new Promise((function(r,t){var o=a.apply(e,n);function i(e){X(o,r,t,i,c,"next",e)}function c(e){X(o,r,t,i,c,"throw",e)}i(void 0)}))},function(){return c.apply(this,arguments)})}])&&Z(n.prototype,r),i&&Z(n,i),e}(),ne=r(2),re=r.n(ne);function te(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}var oe=function(){var e,n=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=5;break}return e.next=3,re.a.register();case 3:e.next=6;break;case 5:console.log("Service worker not supported");case 6:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){te(i,t,o,a,c,"next",e)}function c(e){te(i,t,o,a,c,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();function ie(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?n(u):Promise.resolve(u).then(t,o)}function ae(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){ie(i,t,o,a,c,"next",e)}function c(e){ie(i,t,o,a,c,"throw",e)}a(void 0)}))}}var ce={sendNotification:function(e){var n=e.title,r=e.options;if(this._checkAvailability())return this._checkPermission()?void this._showNotification({title:n,options:r}):(console.log("Permission denied"),void this._requestPermission());console.log("Notification is not supported in this browser")},_checkAvailability:function(){return!!("Notification"in window)},_checkPermission:function(){return"granted"===Notification.permission},_requestPermission:function(){return ae(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:"denied"===(n=e.sent)&&console.log("Notification Denied"),"default"===n&&console.log("Permission closed");case 5:case"end":return e.stop()}}),e)})))()},_showNotification:function(e){return ae(regeneratorRuntime.mark((function n(){var r,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.title,t=e.options,n.next=3,navigator.serviceWorker.ready;case 3:n.sent.showNotification(r,t);case 5:case"end":return n.stop()}}),n)})))()}},ue={init:function(e){new WebSocket(e).onmessage=this._onMessageHandler},_onMessageHandler:function(e){console.log(e.data);var n=JSON.parse(e.data);ce.sendNotification({title:"".concat(n.title," is on cinema!"),options:{body:n.overview,image:"".concat(i.BASE_IMAGE_URL+n.poster_path)}})}},se=new ee({button:document.querySelector("#hamburgerButton"),drawer:document.querySelector("#navigationDrawer"),content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){se.renderPage()})),window.addEventListener("load",(function(){se.renderPage(),oe(),ue.init(i.WEB_SOCKET_SERVER)}))}]);