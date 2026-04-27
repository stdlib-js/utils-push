"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=i(function(Y,p){"use strict";function w(r,e){var t;for(t=0;t<e.length;t++)r.push(e[t]);return r}p.exports=w});var E=i(function(l,g){"use strict";function x(r,e){var t,n;for(t=r.length,n=0;n<e.length;n++)r[t+n]=e[n];return r.length=t+e.length,r}g.exports=x});var q=i(function(F,b){"use strict";var A=require("@stdlib/array-buffer"),d=require("@stdlib/math-base-special-ceil2");function o(r,e){var t,n,v,s,h,a,f,u;if(s=r.length,a=e.length,t=s*r.BYTES_PER_ELEMENT,n=a*r.BYTES_PER_ELEMENT,v=t+n+r.byteOffset,r.buffer.byteLength<v)for(h=new A(d(v+1)),f=new r.constructor(h,0,s+a),u=0;u<s;u++)f[u]=r[u];else f=new r.constructor(r.buffer,r.byteOffset,s+a);for(u=0;u<a;u++)f[s+u]=e[u];return f}b.exports=o});var m=i(function(I,T){"use strict";var L=require("@stdlib/assert-is-array"),_=require("@stdlib/assert-is-typed-array-like"),B=require("@stdlib/assert-is-integer"),O=require("@stdlib/string-format"),k=y(),M=E(),N=q();function P(r){var e,t;for(e=[],t=0;t<arguments.length-1;t++)e.push(arguments[t+1]);if(L(r))return k(r,e);if(_(r))return N(r,e);if(r!==null&&typeof r=="object"&&typeof r.length=="number"&&B(r.length)&&r.length>=0)return M(r,e);throw new TypeError(O("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",r))}T.exports=P});var R=m();module.exports=R;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
