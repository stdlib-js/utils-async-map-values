// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function O(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,f,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(c(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=A.exec(r);n;)(e=r.slice(i,A.lastIndex-n[0].length)).length&&t.push(e),t.push(P(n)),i=A.lastIndex,n=A.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){return"string"==typeof r}function V(r){var e,t,n;if(!I(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var F,N=Object.prototype,C=N.toString,L=N.__defineGetter__,$=N.__defineSetter__,B=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var G=F;function M(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function X(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&z.call(r,e)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var q=Y()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[J],e=D(r,J);try{r[J]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[J]=t:delete r[J],n}:function(r){return U.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Y();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function tr(r){return X(r)||er(r)}function nr(){return new Function("return this;")()}M(tr,"isPrimitive",X),M(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!X(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(ir)return ir;if(or)return or;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=lr.document&&lr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var gr=/^\s*function\s*([^(]*)/i;M(pr,"REGEXP",gr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function dr(r){return null!==r&&"object"==typeof r}function br(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return dr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var hr="function"==typeof W||"object"==typeof sr||"function"==typeof fr?function(r){return br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e};function vr(r){return"function"===hr(r)}var mr=Number.POSITIVE_INFINITY;var wr,jr=Object,Or=Object.getPrototypeOf;wr=vr(Object.getPrototypeOf)?Or:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr;var Er=Object.prototype;function Sr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!e||!D(r,"constructor")&&D(e,"constructor")&&vr(e.constructor)&&"[object Function]"===q(e.constructor)&&D(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!D(r,e))return!1;return!0}(r)))}function Tr(r){return"number"==typeof r}var kr=Number,Ar=kr.prototype.toString;var Pr=Y();function xr(r){return"object"==typeof r&&(r instanceof kr||(Pr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Ir(r){return Tr(r)||xr(r)}M(Ir,"isPrimitive",Tr),M(Ir,"isObject",xr);var Vr=kr.NEGATIVE_INFINITY,Fr=Math.floor;function Nr(r){return Fr(r)===r}function Cr(r){return r<mr&&r>Vr&&Nr(r)}function Lr(r){return Tr(r)&&Cr(r)}function $r(r){return xr(r)&&Cr(r.valueOf())}function Br(r){return Lr(r)||$r(r)}function Rr(r){return Lr(r)&&r>0}function Gr(r){return $r(r)&&r.valueOf()>0}function Mr(r){return Rr(r)||Gr(r)}function Wr(r,e){return Sr(e)?(D(e,"thisArg")&&(r.thisArg=e.thisArg),D(e,"series")&&(r.series=e.series,!X(r.series))?new TypeError(V("invalid option. `%s` option must be a boolean. Option: `%s`.","series",r.series)):D(e,"limit")&&(r.limit=e.limit,!Rr(r.limit))?new TypeError(V("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",r.limit)):null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Xr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}M(Br,"isPrimitive",Lr),M(Br,"isObject",$r),M(Mr,"isPrimitive",Rr),M(Mr,"isObject",Gr);var Zr=Xr(Object.freeze({__proto__:null,default:()=>()=>{}}));function Yr(r){return Object.keys(Object(r))}var Ur=void 0!==Object.keys;function zr(r){return"[object Arguments]"===q(r)}var Dr=function(){return zr(arguments)}();function Hr(r){return"string"==typeof r}var Jr=String.prototype.valueOf;var qr=Y();function Kr(r){return"object"==typeof r&&(r instanceof String||(qr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function Qr(r){return Hr(r)||Kr(r)}function re(r){return r!=r}function ee(r){return Tr(r)&&re(r)}function te(r){return xr(r)&&re(r.valueOf())}function ne(r){return ee(r)||te(r)}M(Qr,"isPrimitive",Hr),M(Qr,"isObject",Kr),M(ne,"isPrimitive",ee),M(ne,"isObject",te);var ie=Object.prototype.propertyIsEnumerable;var oe=!ie.call("beep","0");function ae(r,e){var t;return null!=r&&(!(t=ie.call(r,e))&&oe&&Qr(r)?!ee(e=+e)&&Lr(e)&&e>=0&&e<r.length:t)}var ue=Dr?zr:function(r){return null!==r&&"object"==typeof r&&!yr(r)&&"number"==typeof r.length&&Nr(r.length)&&r.length>=0&&r.length<=4294967295&&D(r,"callee")&&!ae(r,"callee")},ce=Array.prototype.slice;var le=ae((function(){}),"prototype"),fe=!ae({toString:null},"toString");function se(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Nr(r.length)&&r.length>=0&&r.length<=9007199254740991}function pe(r,e,t){var n,i;if(!se(r)&&!Hr(r))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Lr(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(ne(e)){for(;i<n;i++)if(ne(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function ge(r){return r.constructor&&r.constructor.prototype===r}var ye=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],de="undefined"==typeof window?void 0:window;var be=function(){var r;if("undefined"===hr(de))return!1;for(r in de)try{-1===pe(ye,r)&&D(de,r)&&null!==de[r]&&"object"===hr(de[r])&&ge(de[r])}catch(r){return!0}return!1}(),he="undefined"!=typeof window;var ve=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var me=Ur?function(){return 2!==(Yr(arguments)||"").length}(1,2)?function(r){return ue(r)?Yr(ce.call(r)):Yr(r)}:Yr:function(r){var e,t,n,i,o,a,u;if(i=[],ue(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!D(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!dr(r))return i;t=le&&n}for(o in r)t&&"prototype"===o||!D(r,o)||i.push(String(o));if(fe)for(e=function(r){if(!1===he&&!be)return ge(r);try{return ge(r)}catch(r){return!1}}(r),u=0;u<ve.length;u++)a=ve[u],e&&"constructor"===a||!D(r,a)||i.push(String(a));return i},we=Zr("map-values-async:limit");function je(r,e,t,n){var i,o,a,u,c,l,f,s,p;if(a=me(r),l=a.length,we("Number of keys: %d",l),s={},0===l)return we("Finished processing an object."),n(null,s);for(c=l<e.limit?l:e.limit,we("Concurrency limit: %d",c),we("Number of arguments: %d",t.length),i=l-1,o=0,f=-1,p=0;p<c;p++)f<i&&g();function g(){var n;function i(r,e){if(!u){if(r)return u=!0,y(r);we("Transform result => %s: %s",n,JSON.stringify(e)),s[n]=e,y()}}n=a[f+=1],we("%s: %s",n,JSON.stringify(r[n])),2===t.length?t.call(e.thisArg,r[n],i):3===t.length?t.call(e.thisArg,r[n],n,i):t.call(e.thisArg,r[n],n,r,i)}function y(r){return r?(we("Encountered an error: %s",r.message),n(r)):(we("Processed %d of %d properties.",o+=1,l),f<i?g():o===l?(we("Finished processing an object."),n(null,s)):void 0)}}function Oe(r,e){var t,n,i;if(t={},arguments.length>1){if(n=Wr(t,r))throw n;i=e}else i=r;if(!vr(i))throw new TypeError(V("invalid argument. Last argument must be a function. Value: `%s`.",i));return t.series?t.limit=1:t.limit||(t.limit=mr),o;function o(r,e){if("object"!=typeof r||null===r)throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if(!vr(e))throw new TypeError(V("invalid argument. Last argument must be a function. Value: `%s`.",e));return je(r,t,i,(function(r,t){if(r)return e(r);e(null,t)}))}}function _e(r,e,t,n){if(arguments.length<4)return Oe(e)(r,t);Oe(e,t)(r,n)}M(_e,"factory",Oe);export{_e as default,Oe as factory};
//# sourceMappingURL=mod.js.map
