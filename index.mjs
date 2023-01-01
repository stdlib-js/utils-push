// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil2@esm/index.mjs";function o(e,t){var r;for(r=0;r<t.length;r++)e.push(t[r]);return e}function l(e,t){var r,s;for(r=e.length,s=0;s<t.length;s++)e[r+s]=t[s];return e.length=r+t.length,e}function f(e,t){var r,s,o,l,f,m;if(s=e.length,l=t.length,r=s*e.BYTES_PER_ELEMENT+l*e.BYTES_PER_ELEMENT+e.byteOffset,e.buffer.byteLength<r)for(o=new n(i(r+1)),f=new e.constructor(o,0,s+l),m=0;m<s;m++)f[m]=e[m];else f=new e.constructor(e.buffer,e.byteOffset,s+l);for(m=0;m<l;m++)f[s+m]=t[m];return f}function m(n){var i,m;for(i=[],m=0;m<arguments.length-1;m++)i.push(arguments[m+1]);if(e(n))return o(n,i);if(t(n))return f(n,i);if(null!==n&&"object"==typeof n&&"number"==typeof n.length&&r(n.length)&&n.length>=0)return l(n,i);throw new TypeError(s("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",n))}export{m as default};
//# sourceMappingURL=index.mjs.map
