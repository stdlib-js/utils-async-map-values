// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),e.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):f.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function O(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,l,f,s,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",f=1,s=0;s<e.length;s++)if(c(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,i;for(t=[],i=0,n=A.exec(e);n;)(r=e.slice(i,A.lastIndex-n[0].length)).length&&t.push(r),t.push(P(n)),i=A.lastIndex,n=A.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){return"string"==typeof e}function V(e){var r,t,n;if(!I(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=x(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var F,N=Object.prototype,C=N.toString,L=N.__defineGetter__,$=N.__defineSetter__,B=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};var G=F;function M(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function X(e){return"boolean"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&z.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"",q=Y()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[J]=t:delete e[J],n}:function(e){return U.call(e)},K=Boolean,Q=Boolean.prototype.toString,ee=Y();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function te(e){return X(e)||re(e)}function ne(){return new Function("return this;")()}M(te,"isPrimitive",X),M(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ue=function(e){if(arguments.length){if(!X(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ae)return ae;if(ie)return ie;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=ue.document&&ue.document.childNodes,le=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;M(fe,"REGEXP",se);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function ge(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return ge(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge));var de="function"==typeof W||"object"==typeof le||"function"==typeof ce?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ye(e).toLowerCase():r};function be(e){return"function"===de(e)}var he,ve=Number.POSITIVE_INFINITY,me=Object,we=Object.getPrototypeOf;he=be(Object.getPrototypeOf)?we:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var je=he,Oe=Object.prototype;function _e(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!pe(e)}(e)&&(r=function(e){return null==e?null:(e=me(e),je(e))}(e),!r||!D(e,"constructor")&&D(r,"constructor")&&be(r.constructor)&&"[object Function]"===q(r.constructor)&&D(r,"isPrototypeOf")&&be(r.isPrototypeOf)&&(r===Oe||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function Ee(e){return"number"==typeof e}var Se=Number,Te=Se.prototype.toString,ke=Y();function Ae(e){return"object"==typeof e&&(e instanceof Se||(ke?function(e){try{return Te.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function Pe(e){return Ee(e)||Ae(e)}M(Pe,"isPrimitive",Ee),M(Pe,"isObject",Ae);var xe=Se.NEGATIVE_INFINITY,Ie=Math.floor;function Ve(e){return Ie(e)===e}function Fe(e){return e<ve&&e>xe&&Ve(e)}function Ne(e){return Ee(e)&&Fe(e)}function Ce(e){return Ae(e)&&Fe(e.valueOf())}function Le(e){return Ne(e)||Ce(e)}function $e(e){return Ne(e)&&e>0}function Be(e){return Ce(e)&&e.valueOf()>0}function Re(e){return $e(e)||Be(e)}function Ge(e,r){return _e(r)?(D(r,"thisArg")&&(e.thisArg=r.thisArg),D(r,"series")&&(e.series=r.series,!X(e.series))?new TypeError(V("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):D(r,"limit")&&(e.limit=r.limit,!$e(e.limit))?new TypeError(V("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Me(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}M(Le,"isPrimitive",Ne),M(Le,"isObject",Ce),M(Re,"isPrimitive",$e),M(Re,"isObject",Be);var We=Me(Object.freeze({__proto__:null,default:()=>()=>{}}));function Xe(e){return Object.keys(Object(e))}var Ze,Ye=void 0!==Object.keys;function Ue(e){return"[object Arguments]"===q(e)}Ze=function(){return Ue(arguments)}();var ze=Ze;function De(e){return"string"==typeof e}var He=String.prototype.valueOf,Je=Y();function qe(e){return"object"==typeof e&&(e instanceof String||(Je?function(e){try{return He.call(e),!0}catch(e){return!1}}(e):"[object String]"===q(e)))}function Ke(e){return De(e)||qe(e)}function Qe(e){return e!=e}function er(e){return Ee(e)&&Qe(e)}function rr(e){return Ae(e)&&Qe(e.valueOf())}function tr(e){return er(e)||rr(e)}M(Ke,"isPrimitive",De),M(Ke,"isObject",qe),M(tr,"isPrimitive",er),M(tr,"isObject",rr);var nr=Object.prototype.propertyIsEnumerable,ir=!nr.call("beep","0");function or(e,r){var t;return null!=e&&(!(t=nr.call(e,r))&&ir&&Ke(e)?!er(r=+r)&&Ne(r)&&r>=0&&r<e.length:t)}var ar=ze?Ue:function(e){return null!==e&&"object"==typeof e&&!pe(e)&&"number"==typeof e.length&&Ve(e.length)&&e.length>=0&&e.length<=4294967295&&D(e,"callee")&&!or(e,"callee")},ur=Array.prototype.slice,cr=or((function(){}),"prototype"),lr=!or({toString:null},"toString");function fr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ve(e.length)&&e.length>=0&&e.length<=9007199254740991}function sr(e,r,t){var n,i;if(!fr(e)&&!De(e))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Ne(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(tr(r)){for(;i<n;i++)if(tr(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}function pr(e){return e.constructor&&e.constructor.prototype===e}var gr,yr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],dr="undefined"==typeof window?void 0:window,br=function(){var e;if("undefined"===de(dr))return!1;for(e in dr)try{-1===sr(yr,e)&&D(dr,e)&&null!==dr[e]&&"object"===de(dr[e])&&pr(dr[e])}catch(e){return!0}return!1}(),hr="undefined"!=typeof window,vr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];gr=Ye?function(){return 2!==(Xe(arguments)||"").length}(1,2)?function(e){return ar(e)?Xe(ur.call(e)):Xe(e)}:Xe:function(e){var r,t,n,i,o,a,u;if(i=[],ar(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!D(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!ge(e))return i;t=cr&&n}for(o in e)t&&"prototype"===o||!D(e,o)||i.push(String(o));if(lr)for(r=function(e){if(!1===hr&&!br)return pr(e);try{return pr(e)}catch(e){return!1}}(e),u=0;u<vr.length;u++)a=vr[u],r&&"constructor"===a||!D(e,a)||i.push(String(a));return i};var mr=gr,wr=We("map-values-async:limit");function jr(e,r,t,n){var i,o,a,u,c,l,f,s,p;if(a=mr(e),l=a.length,wr("Number of keys: %d",l),s={},0===l)return wr("Finished processing an object."),n(null,s);for(c=l<r.limit?l:r.limit,wr("Concurrency limit: %d",c),wr("Number of arguments: %d",t.length),i=l-1,o=0,f=-1,p=0;p<c;p++)f<i&&g();function g(){var n;function i(e,r){if(!u){if(e)return u=!0,y(e);wr("Transform result => %s: %s",n,JSON.stringify(r)),s[n]=r,y()}}n=a[f+=1],wr("%s: %s",n,JSON.stringify(e[n])),2===t.length?t.call(r.thisArg,e[n],i):3===t.length?t.call(r.thisArg,e[n],n,i):t.call(r.thisArg,e[n],n,e,i)}function y(e){return e?(wr("Encountered an error: %s",e.message),n(e)):(wr("Processed %d of %d properties.",o+=1,l),f<i?g():o===l?(wr("Finished processing an object."),n(null,s)):void 0)}}function Or(e,r){var t,n,i;if(t={},arguments.length>1){if(n=Ge(t,e))throw n;i=r}else i=e;if(!be(i))throw new TypeError(V("invalid argument. Last argument must be a function. Value: `%s`.",i));return t.series?t.limit=1:t.limit||(t.limit=ve),o;function o(e,r){if("object"!=typeof e||null===e)throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if(!be(r))throw new TypeError(V("invalid argument. Last argument must be a function. Value: `%s`.",r));return jr(e,t,i,(function(e,t){if(e)return r(e);r(null,t)}))}}function _r(e,r,t,n){if(arguments.length<4)return Or(r)(e,t);Or(r,t)(e,n)}return M(_r,"factory",Or),_r},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).mapValuesAsync=r();
//# sourceMappingURL=browser.js.map
