webpackJsonp([1],{130:function(n,t,e){e(250);var r=e(16)(e(246),e(259),"data-v-3f680344",null);n.exports=r.exports},244:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(3),i=e.n(r);t.default={methods:{cambiarIdioma:function(){"es"==i.a.config.lang?i.a.config.lang="en":i.a.config.lang="es"}},data:function(){return{links:[{route:"/",name:"inicio"},{route:"/contact",name:"contact"},{route:"/about",name:"about"}]}}}},246:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(63),i=e.n(r),o=e(3),a=e.n(o),c=e(254),u=e.n(c),l=e(255),f=e.n(l),s=e(253),d={es:{message:{contacto:"Contacto",acercaDe:"Acerca de mi",inicio:"Inicio",indexTitle:"Titulo Pagina Inicio",aboutTitle:"Titulo pagina Acerca De",contactTitle:"Titulo Pagina de Contacto",welcomeText:"Bivendido a mi sitio hecho en VUE!",cambiarIdioma:"Cambiar Idioma [EN]"}},en:{message:{contacto:"Contact",acercaDe:"About me",inicio:"Index",indexTitle:"Index Page Title",aboutTitle:"About Page Title",contactTitle:"Contact Page Title",welcomeText:"Welcome to my VUE site!",cambiarIdioma:"Change language [ES]"}}};a.a.use(s),a.a.config.lang="es",i()(d).forEach(function(n){a.a.locale(n,d[n])}),t.default={ready:function(){console.log("started")},data:function(){return{who:"its me"}},components:{MyHeader:u.a,MyMenu:f.a}}},249:function(n,t){},250:function(n,t){},253:function(n,t,e){"use strict";function r(n,t){window.console&&(console.warn("[vue-i18n] "+n),t&&console.warn(t.stack))}function i(n,t){n.locale=function(n,e,i){return void 0===e?t.locales[n]:void(null===e?(t.locales[n]=void 0,delete t.locales[n]):o(n,e,function(e){e?t.locales[n]=e:r("failed set `"+n+"` locale"),i&&i()}))}}function o(n,t,e){var r=this;"object"===("undefined"==typeof t?"undefined":$.typeof(t))?e(t):!function(){var n=t.call(r);"function"==typeof n?n.resolved?e(n.resolved):n.requested?n.pendingCallbacks.push(e):!function(){n.requested=!0;var t=n.pendingCallbacks=[e];n(function(e){n.resolved=e;for(var r=0,i=t.length;r<i;r++)t[r](e)},function(){e()})}():a(n)&&n.then(function(n){e(n)},function(){e()}).catch(function(n){console.error(n),e()})}()}function a(n){return n&&"function"==typeof n.then}function c(n,t){var e=n.prototype._init;n.prototype._init=function(n){var r=this;e.call(this,n),this.$parent||(this._$lang=t,this._langUnwatch=this._$lang.$watch("$data",function(n,t){r.$forceUpdate()},{deep:!0}))};var r=n.prototype._destroy;n.prototype._destroy=function(){!this.$parent&&this._langUnwatch&&(this._langUnwatch(),this._langUnwatch=null,this._$lang=null),r.apply(this,arguments)}}function u(n){if(!x){var t=n.$watch("__watcher__",function(n){});x=n._watchers[0].constructor,t()}return x}function l(n){return!k&&n&&n._data&&n._data.__ob__&&n._data.__ob__.dep&&(k=n._data.__ob__.dep.constructor),k}function f(n,t,e){function r(n,t){var e=new o(t,n,null,{lazy:!0});return function(){return e.dirty&&e.evaluate(),a&&a.target&&e.depend(),e.value}}var i=n.util.bind,o=u(t),a=l(t);Object.defineProperty(n.config,"lang",{enumerable:!0,configurable:!0,get:r(function(){return t.lang},t),set:i(function(n){t.lang=n},t)}),O=e,Object.defineProperty(n.config,"fallbackLang",{enumerable:!0,configurable:!0,get:function(){return O},set:function(n){O=n}}),Object.defineProperty(n.config,"missingHandler",{enumerable:!0,configurable:!0,get:function(){return T},set:function(n){T=n}}),Object.defineProperty(n.config,"i18nFormatter",{enumerable:!0,configurable:!0,get:function(){return P},set:function(n){P=n}})}function s(n){return null===n||void 0===n}function d(n){function t(n){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return r=1===r.length&&"object"===$.typeof(r[0])?r[0]:{},r&&r.hasOwnProperty||(r={}),n.replace(j,function(t,i,o,a){var c=void 0;return"{"===n[a-1]&&"}"===n[a+t.length]?o:(c=e(r,o)?r[o]:t,s(c)?"":c)})}var e=n.util.hasOwn;return t}function v(n){return B.test(n)}function g(n){var t=n.charCodeAt(0),e=n.charCodeAt(n.length-1);return t!==e||34!==t&&39!==t?n:n.slice(1,-1)}function p(n){if(void 0===n)return"eof";var t=n.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:case 48:return n;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return t>=97&&t<=122||t>=65&&t<=90?"ident":t>=49&&t<=57?"number":"else"}function h(n){var t=n.trim();return("0"!==n.charAt(0)||!isNaN(n))&&(v(t)?g(t):"*"+t)}function y(n){function t(){var t=n[r+1];if(i===R&&"'"===t||i===D&&'"'===t)return r++,c="\\"+t,v[I](),!0}var e=[],r=-1,i=V,o=0,a=void 0,c=void 0,u=void 0,l=void 0,f=void 0,s=void 0,d=void 0,v=[];for(v[E]=function(){void 0!==u&&(e.push(u),u=void 0)},v[I]=function(){void 0===u?u=c:u+=c},v[M]=function(){v[I](),o++},v[U]=function(){if(o>0)o--,i=H,v[I]();else{if(o=0,u=h(u),u===!1)return!1;v[E]()}};null!=i;)if(r++,a=n[r],"\\"!==a||!t()){if(l=p(a),d=L[i],f=d[l]||d.else||z,f===z)return;if(i=f[0],s=v[f[1]],s&&(c=f[2],c=void 0===c?a:c,s()===!1))return;if(i===q)return e.raw=n,e}}function m(n){var t=C[n];return t||(t=y(n),t&&(C[n]=t)),t}function b(n){function t(n){if(null===n||void 0===n)return!0;if(Array.isArray(n)){if(n.length>0)return!1;if(0===n.length)return!0}else if(o(n))for(var t in n)if(a(n,t))return!1;return!0}function e(n,e){if(!i(n))return null;var r=m(e);if(t(r))return null;for(var o=r.length,a=null,c=n,u=0;u<o;){var l=c[r[u]];if(void 0===l){c=null;break}c=l,u++}return a=c}var r=n.util,i=r.isObject,o=r.isPlainObject,a=r.hasOwn;return e}function _(n){function t(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var i=n.config.lang,o=n.config.fallbackLang;return 1===e.length?p(e[0])||Array.isArray(e[0])?e=e[0]:"string"==typeof e[0]&&(i=e[0]):2===e.length&&("string"==typeof e[0]&&(i=e[0]),(p(e[1])||Array.isArray(e[1]))&&(e=e[1])),{lang:i,fallback:o,params:e}}function e(n,t){return!(!n||!t)&&!s(m(n,t))}function i(t,e,o){if(!t)return null;var a=m(t,e);if(Array.isArray(a))return a;if(s(a)&&(a=t[e]),s(a))return null;if("string"!=typeof a)return r("Value of key '"+e+"' is not a string!"),null;if(a.indexOf("@:")>=0){var c=a.match(/(@:[\w|.]+)/g);for(var u in c){var l=c[u],f=l.substr(2),d=i(t,f,o);a=a.replace(l,d)}}return o?n.config.i18nFormatter?n.config.i18nFormatter.apply(null,[a].concat(o)):y(a,o):a}function o(n,t,e,r,o){var a=null;return a=i(n(t),r,o),s(a)?(a=i(n(e),r,o),s(a)?null:a):a}function a(t,e,r,i){return s(i)?(n.config.missingHandler&&n.config.missingHandler.apply(null,[t,e,r]),e):i}function c(t){return n.locale(t)}function u(n){return this.$options.locales[n]}function l(n){return n?n>1?1:0:1}function f(n,t){return n=Math.abs(n),2===t?l(n):n?Math.min(n,2):0}function v(n,t){if(!n&&"string"!=typeof n)return null;var e=n.split("|");return t=f(t,e.length),e[t]?e[t].trim():n}var g=n.util,p=g.isObject,h=g.bind,y=d(n),m=b(n);return n.t=function(n){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];if(!n)return"";var u=t.apply(void 0,r),l=u.lang,f=u.fallback,s=u.params;return a(l,n,null,o(c,l,f,n,s))},n.tc=function(t,e){for(var r=arguments.length,i=Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];return v(n.t.apply(n,[t].concat(i)),e)},n.te=function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a=t.apply(void 0,i),u=a.lang;return e(c(u),n)},n.prototype.$t=function(n){if(!n)return"";for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];var l=t.apply(void 0,r),f=l.lang,s=l.fallback,d=l.params,v=null;return this.$options.locales&&(v=o(h(u,this),f,s,n,d))?v:a(f,n,this,o(c,f,s,n,d))},n.prototype.$tc=function(n,t){if("number"!=typeof t&&"undefined"!=typeof t)return n;for(var e=arguments.length,r=Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];return v(this.$t.apply(this,[n].concat(r)),t)},n.prototype.$te=function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a=t.apply(void 0,i),l=a.lang,f=!1;return this.$options.locales&&(f=e(h(u)(l),n)),f||(f=e(c(l),n)),f},n.mixin({computed:{$lang:function(){return n.config.lang}}}),n}function w(n){var t=(arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n.version&&Number(n.version.split(".")[0])||-1,"en");A(n,t),i(n,J),c(n,J),f(n,J,t),_(n)}function A(n,t){var e=n.config.silent;n.config.silent=!0,J||(J=new n({data:{lang:t,locales:{}}})),n.config.silent=e}/*!
 * vue-i18n v5.0.0
 * (c) 2017 kazuya kawaguchi
 * Released under the MIT License.
 */
var $={};$.typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};var x=void 0,k=void 0,O=void 0,T=null,P=null,j=/(%|)\{([0-9a-zA-Z_]+)\}/g,C=Object.create(null),I=0,E=1,M=2,U=3,V=0,F=1,S=2,N=3,H=4,R=5,D=6,q=7,z=8,L=[];L[V]={ws:[V],ident:[N,I],"[":[H],eof:[q]},L[F]={ws:[F],".":[S],"[":[H],eof:[q]},L[S]={ws:[S],ident:[N,I],0:[N,I],number:[N,I]},L[N]={ident:[N,I],0:[N,I],number:[N,I],ws:[F,E],".":[S,E],"[":[H,E],eof:[q,E]},L[H]={"'":[R,I],'"':[D,I],"[":[H,M],"]":[F,U],eof:z,else:[H,I]},L[R]={"'":[H,I],eof:z,else:[R,I]},L[D]={'"':[H,I],eof:z,else:[D,I]};var B=/^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,J=void 0;w.version="__VERSION__","undefined"!=typeof window&&window.Vue&&window.Vue.use(w),n.exports=w},254:function(n,t,e){var r=e(16)(null,e(264),null,null);n.exports=r.exports},255:function(n,t,e){e(249);var r=e(16)(e(244),e(258),"data-v-36085c81",null);n.exports=r.exports},258:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"mainMenu"}},[e("h1",[n._v("Menu")]),e("h1",{on:{click:n.cambiarIdioma}},[n._v(n._s(n.$t("message.cambiarIdioma")))]),e("ul",n._l(n.links,function(t){return e("li",[e("router-link",{attrs:{to:t.route}},[n._v("\n        "+n._s(t.name)+"\n      ")])],1)}))])},staticRenderFns:[]}},259:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("my-header"),e("my-menu"),e("router-view",{attrs:{id:"mainView"}})],1)},staticRenderFns:[]}},264:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("h1",[n._v("This is the header")])},staticRenderFns:[]}}});