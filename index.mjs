// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";function d(i,t){return e(t)?(n(t,"thisArg")&&(i.thisArg=t.thisArg),n(t,"series")&&(i.series=t.series,!o(i.series))?new TypeError(r("0iZ30","series",i.series)):n(t,"limit")&&(i.limit=t.limit,!l(i.limit))?new TypeError(r("0iZ3b","limit",i.limit)):null):new TypeError(r("0iZ2h",t))}var f=()=>{};function h(i,t,r,s){var e,n,o,l,d,h,p,u,j;if(o=m(i),h=o.length,u={},0===h)return s(null,u);for(d=h<t.limit?h:t.limit,f("Number of arguments: %d",r.length),e=h-1,n=0,p=-1,j=0;j<d;j++)p<e&&a();function a(){var s;function e(i,t){if(!l){if(i)return l=!0,c(i);f("Transform result => %s: %s",s,JSON.stringify(t)),u[s]=t,c()}}s=o[p+=1],f("%s: %s",s,JSON.stringify(i[s])),2===r.length?r.call(t.thisArg,i[s],e):3===r.length?r.call(t.thisArg,i[s],s,e):r.call(t.thisArg,i[s],s,i,e)}function c(i){return i?(f("Encountered an error: %s",i.message),s(i)):(n+=1,p<e?a():n===h?s(null,u):void 0)}}function p(i,e){var n,o,l;if(n={},arguments.length>1){if(o=d(n,i))throw o;l=e}else l=i;if(!t(l))throw new TypeError(r("0iZ43",l));return n.series?n.limit=1:n.limit||(n.limit=s),m;function m(i,s){if("object"!=typeof i||null===i)throw new TypeError(r("0iZ3X",i));if(!t(s))throw new TypeError(r("0iZ43",s));return h(i,n,l,(function(i,t){if(i)return s(i);s(null,t)}))}}function u(i,t,r,s){if(arguments.length<4)return p(t)(i,r);p(t,r)(i,s)}i(u,"factory",p);export{u as default,p as factory};
//# sourceMappingURL=index.mjs.map
