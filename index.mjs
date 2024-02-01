// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.1.0-esm/index.mjs";function u(e,t){return n(t)?(s(t,"thisArg")&&(e.thisArg=t.thisArg),s(t,"series")&&(e.series=t.series,!o(e.series))?new TypeError(i("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):s(t,"limit")&&(e.limit=t.limit,!l(e.limit))?new TypeError(i("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):null):new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",t))}function m(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var r=Function.bind.apply(t,i);return new r}return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),i}var p=m(Object.freeze({__proto__:null,default:()=>()=>{}}))("map-values-async:limit");function d(e,t,i,r){var n,s,o,l,u,m,d,f,c;if(o=a(e),m=o.length,p("Number of keys: %d",m),f={},0===m)return p("Finished processing an object."),r(null,f);for(u=m<t.limit?m:t.limit,p("Concurrency limit: %d",u),p("Number of arguments: %d",i.length),n=m-1,s=0,d=-1,c=0;c<u;c++)d<n&&g();function g(){var r;function n(e,t){if(!l){if(e)return l=!0,h(e);p("Transform result => %s: %s",r,JSON.stringify(t)),f[r]=t,h()}}r=o[d+=1],p("%s: %s",r,JSON.stringify(e[r])),2===i.length?i.call(t.thisArg,e[r],n):3===i.length?i.call(t.thisArg,e[r],r,n):i.call(t.thisArg,e[r],r,e,n)}function h(e){return e?(p("Encountered an error: %s",e.message),r(e)):(p("Processed %d of %d properties.",s+=1,m),d<n?g():s===m?(p("Finished processing an object."),r(null,f)):void 0)}}function f(e,n){var s,o,l;if(s={},arguments.length>1){if(o=u(s,e))throw o;l=n}else l=e;if(!t(l))throw new TypeError(i("invalid argument. Last argument must be a function. Value: `%s`.",l));return s.series?s.limit=1:s.limit||(s.limit=r),a;function a(e,r){if("object"!=typeof e||null===e)throw new TypeError(i("invalid argument. First argument must be an object. Value: `%s`.",e));if(!t(r))throw new TypeError(i("invalid argument. Last argument must be a function. Value: `%s`.",r));return d(e,s,l,(function(e,t){if(e)return r(e);r(null,t)}))}}function c(e,t,i,r){if(arguments.length<4)return f(t)(e,i);f(t,i)(e,r)}e(c,"factory",f);export{c as default,f as factory};
//# sourceMappingURL=index.mjs.map
