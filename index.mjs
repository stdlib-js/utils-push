// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil2@v0.3.0-esm/index.mjs";function o(o){var f,l;for(f=[],l=0;l<arguments.length-1;l++)f.push(arguments[l+1]);if(t(o))return function(t,e){var r;for(r=0;r<e.length;r++)t.push(e[r]);return t}(o,f);if(e(o))return function(t,e){var r,s,o,f,l,h;if(s=t.length,f=e.length,r=s*t.BYTES_PER_ELEMENT+f*t.BYTES_PER_ELEMENT+t.byteOffset,t.buffer.byteLength<r)for(o=new n(i(r+1)),l=new t.constructor(o,0,s+f),h=0;h<s;h++)l[h]=t[h];else l=new t.constructor(t.buffer,t.byteOffset,s+f);for(h=0;h<f;h++)l[s+h]=e[h];return l}(o,f);if(null!==o&&"object"==typeof o&&"number"==typeof o.length&&r(o.length)&&o.length>=0)return function(t,e){var r,s;for(r=t.length,s=0;s<e.length;s++)t[r+s]=e[s];return t.length=r+e.length,t}(o,f);throw new TypeError(s("1X9Ai",o))}export{o as default};
//# sourceMappingURL=index.mjs.map