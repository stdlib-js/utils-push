// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil2@v0.1.0-esm/index.mjs";function o(e,t){var r;for(r=0;r<t.length;r++)e.push(t[r]);return e}function f(e,t){var r,n;for(r=e.length,n=0;n<t.length;n++)e[r+n]=t[n];return e.length=r+t.length,e}function l(e,t){var r,n,o,f,l,a;if(n=e.length,f=t.length,r=n*e.BYTES_PER_ELEMENT+f*e.BYTES_PER_ELEMENT+e.byteOffset,e.buffer.byteLength<r)for(o=new s(i(r+1)),l=new e.constructor(o,0,n+f),a=0;a<n;a++)l[a]=e[a];else l=new e.constructor(e.buffer,e.byteOffset,n+f);for(a=0;a<f;a++)l[n+a]=t[a];return l}function a(s){var i,a;for(i=[],a=0;a<arguments.length-1;a++)i.push(arguments[a+1]);if(e(s))return o(s,i);if(t(s))return l(s,i);if(null!==s&&"object"==typeof s&&"number"==typeof s.length&&r(s.length)&&s.length>=0)return f(s,i);throw new TypeError(n("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",s))}export{a as default};
//# sourceMappingURL=index.mjs.map
