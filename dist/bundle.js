!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=8)}([function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function c(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function u(n,r){for(var e={},t=[],o=0;o<n.length;o++){var i=n[o],u=r.base?i[0]+r.base:i[0],s=e[u]||0,l="".concat(u," ").concat(s);e[u]=s+1;var p=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:l,updater:m(f,r),references:1}),t.push(l)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,p=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function f(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=p(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function d(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var h=null,v=0;function m(n,r){var e,t,o;if(r.singleton){var i=v++;e=h||(h=s(r)),t=f.bind(null,e,i,!1),o=f.bind(null,e,i,!0)}else e=s(r),t=d.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=u(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=c(e[t]);a[o].references--}for(var i=u(n,r),s=0;s<e.length;s++){var l=c(e[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,u;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);t&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),r.push(u))}},r}},function(n,r,e){(function(n){function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var e=function(n){"use strict";var e=Object.prototype,t=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(n,r,e){return Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[r]}try{u({},"")}catch(n){u=function(n,r,e){return n[r]=e}}function s(n,r,e,t){var o=r&&r.prototype instanceof f?r:f,i=Object.create(o.prototype),a=new E(t||[]);return i._invoke=function(n,r,e){var t="suspendedStart";return function(o,i){if("executing"===t)throw new Error("Generator is already running");if("completed"===t){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=w(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===t)throw t="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);t="executing";var u=l(n,r,e);if("normal"===u.type){if(t=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(t="completed",e.method="throw",e.arg=u.arg)}}}(n,e,a),i}function l(n,r,e){try{return{type:"normal",arg:n.call(r,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=s;var p={};function f(){}function d(){}function h(){}var v={};u(v,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==e&&t.call(g,i)&&(v=g);var y=h.prototype=f.prototype=Object.create(v);function b(n){["next","throw","return"].forEach((function(r){u(n,r,(function(n){return this._invoke(r,n)}))}))}function _(n,e){var o;this._invoke=function(i,a){function c(){return new e((function(o,c){!function o(i,a,c,u){var s=l(n[i],n,a);if("throw"!==s.type){var p=s.arg,f=p.value;return f&&"object"===r(f)&&t.call(f,"__await")?e.resolve(f.__await).then((function(n){o("next",n,c,u)}),(function(n){o("throw",n,c,u)})):e.resolve(f).then((function(n){p.value=n,c(p)}),(function(n){return o("throw",n,c,u)}))}u(s.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function w(n,r){var e=n.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(n.iterator.return&&(r.method="return",r.arg=void 0,w(n,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var t=l(e,n.iterator,r.arg);if("throw"===t.type)return r.method="throw",r.arg=t.arg,r.delegate=null,p;var o=t.arg;return o?o.done?(r[n.resultName]=o.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function x(n){var r={tryLoc:n[0]};1 in n&&(r.catchLoc=n[1]),2 in n&&(r.finallyLoc=n[2],r.afterLoc=n[3]),this.tryEntries.push(r)}function L(n){var r=n.completion||{};r.type="normal",delete r.arg,n.completion=r}function E(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(x,this),this.reset(!0)}function k(n){if(n){var r=n[i];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,o=function r(){for(;++e<n.length;)if(t.call(n,e))return r.value=n[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=h,u(y,"constructor",h),u(h,"constructor",d),d.displayName=u(h,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var r="function"==typeof n&&n.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,h):(n.__proto__=h,u(n,c,"GeneratorFunction")),n.prototype=Object.create(y),n},n.awrap=function(n){return{__await:n}},b(_.prototype),u(_.prototype,a,(function(){return this})),n.AsyncIterator=_,n.async=function(r,e,t,o,i){void 0===i&&(i=Promise);var a=new _(s(r,e,t,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},b(y),u(y,c,"Generator"),u(y,i,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var r=[];for(var e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},n.values=k,E.prototype={constructor:E,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!n)for(var r in this)"t"===r.charAt(0)&&t.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return a.type="throw",a.arg=n,r.next=e,t&&(r.method="next",r.arg=void 0),!!t}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=t.call(i,"catchLoc"),u=t.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(n,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(n,r){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&r&&(this.next=r),p},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),L(e),p}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===n){var t=e.completion;if("throw"===t.type){var o=t.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:k(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},n}("object"===r(n)?n.exports:{});try{regeneratorRuntime=e}catch(n){"object"===("undefined"==typeof globalThis?"undefined":r(globalThis))?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}).call(this,e(3)(n))},function(n,r){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,r,e){var t=e(0),o=e(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,r,e){(r=e(1)(!1)).push([n.i,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n/*\r\n  AppBar\r\n*/\r\n\r\n.app-bar {\r\n    padding: 8px 16px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 99;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n    color: #db0000;\r\n    text-transform: uppercase;\r\n    font-size: 22px;\r\n    user-select: none;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: white;\r\n    overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 8px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n}\r\n\r\n/*\r\n  Main Content\r\n*/\r\n\r\nmain {\r\n    padding: 32px;\r\n    flex: 1;\r\n}\r\n\r\n.content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n/*\r\n  Movies\r\n*/\r\n\r\n.movies {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n}\r\n\r\n\r\n/*\r\n  Movie Item\r\n*/\r\n\r\n.movie-item {\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n}\r\n\r\n.movie-item__header {\r\n    position: relative;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__poster {\r\n    width: 100%;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {\r\n    margin-left: 10px;\r\n}\r\n\r\n.movie-item .movie-item__content {\r\n    padding: 16px;\r\n}\r\n\r\n.movie-item .movie-item__content h3 {\r\n    margin: 0 0 10px 0;\r\n}\r\n\r\n.movie-item .movie-item__content h3 a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n}\r\n\r\n.movie-item .movie-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4; /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n}\r\n\r\n\r\n/*\r\n  Movie\r\n*/\r\n\r\n.movie {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n}\r\n\r\n.movie .movie__poster {\r\n    width: 100%;\r\n    max-width: 400px;\r\n}\r\n\r\n.movie .movie__info h4 {\r\n    margin: 8px 0;\r\n}\r\n\r\n\r\n\r\n/*\r\n  Footer\r\n*/\r\n\r\nfooter {\r\n    padding: 16px;\r\n}\r\n\r\nfooter p {\r\n    text-align: center;\r\n    color: #aaaaaa;\r\n}\r\n\r\nfooter p a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n}",""]),n.exports=r},function(n,r,e){var t=e(0),o=e(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,r,e){(r=e(1)(!1)).push([n.i,"@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n        grid-template-columns: 1fr auto;\r\n        padding: 8px 32px;\r\n    }\r\n\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 1.5em;\r\n    }\r\n\r\n    .app-bar .app-bar__menu {\r\n        display: none;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation {\r\n        position: static;\r\n        width: 100%;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul li {\r\n        display: inline-block;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul li a {\r\n        display: inline-block;\r\n        width: 120px;\r\n        text-align: center;\r\n        margin: 0;\r\n    }\r\n\r\n    .movies {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .movie {\r\n        grid-template-columns: auto 1fr;\r\n    }\r\n\r\n    .movie .movie__title {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n\r\n    .movie .movie__overview {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 2em;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n    .movies {\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .movies {\r\n        grid-template-columns: repeat(4, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n    .movies {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    }\r\n}",""]),n.exports=r},function(n,r,e){"use strict";e.r(r);e(2),e(4),e(6);var t={init:function(n){var r=this,e=n.button,t=n.drawer,o=n.content;e.addEventListener("click",(function(n){r._toggleDrawer(n,t)})),o.addEventListener("click",(function(n){r._closeDrawer(n,t)}))},_toggleDrawer:function(n,r){n.stopPropagation(),r.classList.toggle("open")},_closeDrawer:function(n,r){n.stopPropagation(),r.classList.remove("open")}},o={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),r=this._urlSplitter(n);return this._urlCombiner(r)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var r=n.split("/");return{resource:r[1]||null,id:r[2]||null,verb:r[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},i={KEY:"171b1d2c0a8f4366a4ecae103eb6f4e9",BASE_URL:"https://api.themoviedb.org/3/",BASE_IMAGE_URL:"https://image.tmdb.org/t/p/w500/",DEFAULT_LANGUAGE:"en-us"},a={NOW_PLAYING:"".concat(i.BASE_URL,"movie/now_playing?api_key=").concat(i.KEY,"&language=").concat(i.DEFAULT_LANGUAGE,"&page=1"),UPCOMING:"".concat(i.BASE_URL,"movie/upcoming?api_key=").concat(i.KEY,"&language=").concat(i.DEFAULT_LANGUAGE,"&page=1"),DETAIL:function(n){return"".concat(i.BASE_URL,"movie/").concat(n,"?api_key=").concat(i.KEY)}};function c(n,r,e,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,o)}function u(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var i=n.apply(r,e);function a(n){c(i,t,o,a,u,"next",n)}function u(n){c(i,t,o,a,u,"throw",n)}a(void 0)}))}}function s(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var l=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,e,t,o,i,c;return r=n,e=null,t=[{key:"nowPlayingMovies",value:(c=u(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a.NOW_PLAYING);case 2:return r=n.sent,n.next=5,r.json();case 5:return e=n.sent,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)}))),function(){return c.apply(this,arguments)})},{key:"upcomingMovies",value:(i=u(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a.UPCOMING);case 2:return r=n.sent,n.next=5,r.json();case 5:return e=n.sent,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)}))),function(){return i.apply(this,arguments)})},{key:"detailMovie",value:(o=u(regeneratorRuntime.mark((function n(r){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a.DETAIL(r));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)}))),function(n){return o.apply(this,arguments)})}],e&&s(r.prototype,e),t&&s(r,t),n}(),p=function(n){return'\n    <h2 class="movie__title">'.concat(n.title,'</h2>\n    <img class="movie__poster" src="').concat(i.BASE_IMAGE_URL+n.poster_path,'" alt="').concat(n.title,'" />\n    <div class="movie__info">\n    <h3>Information</h3>\n      <h4>Tagline</h4>\n      <p>').concat(n.tagline,"</p>\n      <h4>Release Date</h4>\n      <p>").concat(n.release_date,"</p>\n      <h4>Duration</h4>\n      <p>").concat(n.runtime," minutes</p>\n      <h4>Rating</h4>\n      <p>").concat(n.vote_average,'</p>\n    </div>\n    <div class="movie__overview">\n      <h3>Overview</h3>\n      <p>').concat(n.overview,"</p>\n    </div>\n  ")},f=function(n){return'\n    <div class="movie-item">\n      <div class="movie-item__header">\n          <img class="movie-item__header__poster" alt="'.concat(n.title,'"\n              src="').concat(n.backdrop_path?i.BASE_IMAGE_URL+n.backdrop_path:"https://picsum.photos/id/666/800/450?grayscale",'">\n          <div class="movie-item__header__rating">\n              <p>⭐️<span class="movie-item__header__rating__score">').concat(n.vote_average,'</span></p>\n          </div>\n      </div>\n      <div class="movie-item__content">\n          <h3><a href="',"/#/detail/".concat(n.id),'">').concat(n.title,"</a></h3>\n          <p>").concat(n.overview,"</p>\n      </div>\n    </div>\n  ")};function d(n,r,e,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,o)}function h(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var i=n.apply(r,e);function a(n){d(i,t,o,a,c,"next",n)}function c(n){d(i,t,o,a,c,"throw",n)}a(void 0)}))}}var v={render:function(){return h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Now Playing in Cinema</h2>\n        <div id="movies" class="movies">\n \n        </div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return h(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.nowPlayingMovies();case 2:r=n.sent,e=document.querySelector("#movies"),r.forEach((function(n){e.innerHTML+=f(n)}));case 5:case"end":return n.stop()}}),n)})))()}};function m(n,r,e,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,o)}function g(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var i=n.apply(r,e);function a(n){m(i,t,o,a,c,"next",n)}function c(n){m(i,t,o,a,c,"throw",n)}a(void 0)}))}}function y(n,r,e,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,o)}function b(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var i=n.apply(r,e);function a(n){y(i,t,o,a,c,"next",n)}function c(n){y(i,t,o,a,c,"throw",n)}a(void 0)}))}}var _={"/":v,"/now-playing":v,"/upcoming":{render:function(){return g(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Upcoming in Cinema</h2>\n        <div id="movies" class="movies">\n  \n        </div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return g(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.upcomingMovies();case 2:r=n.sent,e=document.querySelector("#movies"),r.forEach((function(n){e.innerHTML+=f(n)}));case 5:case"end":return n.stop()}}),n)})))()}},"/detail/:id":{render:function(){return b(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div id="movie" class="movie"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return b(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o.parseActiveUrlWithoutCombiner(),n.next=3,l.detailMovie(r.id);case 3:e=n.sent,document.querySelector("#movie").innerHTML=p(e);case 6:case"end":return n.stop()}}),n)})))()}}};function w(n,r,e,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void e(n)}c.done?r(u):Promise.resolve(u).then(t,o)}function x(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var L=new(function(){function n(r){var e=r.button,t=r.drawer,o=r.content;!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=e,this._drawer=t,this._content=o,this._initialAppShell()}var r,e,i,a,c;return r=n,(e=[{key:"_initialAppShell",value:function(){t.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(a=regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o.parseActiveUrlWithCombiner(),e=_[r],n.next=4,e.render();case 4:return this._content.innerHTML=n.sent,n.next=7,e.afterRender();case 7:case"end":return n.stop()}}),n,this)})),c=function(){var n=this,r=arguments;return new Promise((function(e,t){var o=a.apply(n,r);function i(n){w(o,e,t,i,c,"next",n)}function c(n){w(o,e,t,i,c,"throw",n)}i(void 0)}))},function(){return c.apply(this,arguments)})}])&&x(r.prototype,e),i&&x(r,i),n}())({button:document.querySelector("#hamburgerButton"),drawer:document.querySelector("#navigationDrawer"),content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){L.renderPage()})),window.addEventListener("load",(function(){L.renderPage()}))}]);