"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=i(function(Y,p){
function w(r,e){var t;for(t=0;t<e.length;t++)r.push(e[t]);return r}p.exports=w
});var E=i(function(l,g){
function x(r,e){var t,n;for(t=r.length,n=0;n<e.length;n++)r[t+n]=e[n];return r.length=t+e.length,r}g.exports=x
});var q=i(function(F,b){
var A=require('@stdlib/array-buffer/dist'),d=require('@stdlib/math-base-special-ceil2/dist');function o(r,e){var t,n,v,s,h,a,f,u;if(s=r.length,a=e.length,t=s*r.BYTES_PER_ELEMENT,n=a*r.BYTES_PER_ELEMENT,v=t+n+r.byteOffset,r.buffer.byteLength<v)for(h=new A(d(v+1)),f=new r.constructor(h,0,s+a),u=0;u<s;u++)f[u]=r[u];else f=new r.constructor(r.buffer,r.byteOffset,s+a);for(u=0;u<a;u++)f[s+u]=e[u];return f}b.exports=o
});var m=i(function(I,T){
var L=require('@stdlib/assert-is-array/dist'),_=require('@stdlib/assert-is-typed-array-like/dist'),B=require('@stdlib/assert-is-integer/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist'),k=y(),M=E(),N=q();function P(r){var e,t;for(e=[],t=0;t<arguments.length-1;t++)e.push(arguments[t+1]);if(L(r))return k(r,e);if(_(r))return N(r,e);if(r!==null&&typeof r=="object"&&typeof r.length=="number"&&B(r.length)&&r.length>=0)return M(r,e);throw new TypeError(O('1X9Ai',r))}T.exports=P
});var R=m();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
