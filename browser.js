// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",u=t()?function(r){var t,u,i,f,a;if(null==r)return n.call(r);u=r[o],a=o,t=null!=(f=r)&&e.call(f,a);try{r[o]=void 0}catch(t){return n.call(r)}return i=n.call(r),t?r[o]=u:delete r[o],i}:function(r){return n.call(r)},i=Array.isArray?Array.isArray:function(r){return"[object Array]"===u(r)},f="function"==typeof Object.defineProperty?Object.defineProperty:null,a=Object.defineProperty,c=Object.prototype,y=c.toString,l=c.__defineGetter__,p=c.__defineSetter__,b=c.__lookupGetter__,v=c.__lookupSetter__,s=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?a:function(r,t,n){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===y.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(b.call(r,t)||v.call(r,t)?(e=r.__proto__,r.__proto__=c,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),u="get"in n,i="set"in n,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&l&&l.call(r,t,n.get),i&&p&&p.call(r,t,n.set),r};function h(r,t,n){s(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function w(r){return"number"==typeof r}var m=Number,A=m.prototype.toString,d=t();function g(r){return"object"==typeof r&&(r instanceof m||(d?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function _(r){return w(r)||g(r)}h(_,"isPrimitive",w),h(_,"isObject",g);var j=Number.POSITIVE_INFINITY,E=m.NEGATIVE_INFINITY,U=Math.floor;function O(r){return U(r)===r}function N(r){return r<j&&r>E&&O(r)}function T(r){return w(r)&&N(r)}function S(r){return g(r)&&N(r.valueOf())}function I(r){return T(r)||S(r)}function P(r){return T(r)&&r>=0}function F(r){return S(r)&&r.valueOf()>=0}function B(r){return P(r)||F(r)}function L(r){return null!==r&&"object"==typeof r&&P(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function H(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function G(r,t){var n;for(n=0;n<t.length;n++)r.push(t[n]);return r}function M(r,t){var n,e;for(n=r.length,e=0;e<t.length;e++)r[n+e]=t[e];return r.length=n+t.length,r}h(I,"isPrimitive",T),h(I,"isObject",S),h(B,"isPrimitive",P),h(B,"isObject",F);var V,Y="function"==typeof ArrayBuffer,x="function"==typeof Float64Array,R="function"==typeof Float64Array?Float64Array:null,W="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,t,n;if("function"!=typeof R)return!1;try{t=new R([1,3.14,-3.14,NaN]),n=t,r=(x&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,C=V,q="function"==typeof ArrayBuffer?ArrayBuffer:null,z="function"==typeof ArrayBuffer?ArrayBuffer:void 0;k=function(){var r,t,n,e;if("function"!=typeof q)return!1;try{n=new q(16),e=n,(r=(Y&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===u(e))&&"function"==typeof q.isView)&&((t=new C(n))[0]=-3.14,t[1]=NaN,r=r&&q.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?z:function(){throw new Error("not implemented")};var D=k;function J(r){return r!=r}function K(r){return r===j||r===E}function Q(r){return O(r/2)}function X(r){return Q(r>0?r-1:r+1)}var Z=Math.sqrt;function $(r){return Math.abs(r)}var rr,tr="function"==typeof Uint32Array,nr="function"==typeof Uint32Array?Uint32Array:null,er="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or,ur=rr,ir="function"==typeof Uint8Array,fr="function"==typeof Uint8Array?Uint8Array:null,ar="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,t,n;if("function"!=typeof fr)return!1;try{t=new fr(t=[1,3.14,-3.14,256,257]),n=t,r=(ir&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr,yr=or,lr="function"==typeof Uint16Array,pr="function"==typeof Uint16Array?Uint16Array:null,br="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(lr&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?br:function(){throw new Error("not implemented")};var vr,sr={uint16:cr,uint8:yr};(vr=new sr.uint16(1))[0]=4660;var hr,wr,mr=52===new sr.uint8(vr.buffer)[0];!0===mr?(hr=1,wr=0):(hr=0,wr=1);var Ar={HIGH:hr,LOW:wr},dr=new C(1),gr=new ur(dr.buffer),_r=Ar.HIGH,jr=Ar.LOW;function Er(r,t){return dr[0]=t,r[0]=gr[_r],r[1]=gr[jr],r}function Ur(r,t){return 1===arguments.length?Er([0,0],r):Er(r,t)}var Or=!0===mr?0:1,Nr=new C(1),Tr=new ur(Nr.buffer);function Sr(r,t){return Nr[0]=r,Tr[Or]=t>>>0,Nr[0]}function Ir(r){return 0|r}var Pr,Fr,Br=!0===mr?1:0,Lr=new C(1),Hr=new ur(Lr.buffer);function Gr(r){return Lr[0]=r,Hr[Br]}!0===mr?(Pr=1,Fr=0):(Pr=0,Fr=1);var Mr={HIGH:Pr,LOW:Fr},Vr=new C(1),Yr=new ur(Vr.buffer),xr=Mr.HIGH,Rr=Mr.LOW;function Wr(r,t){return Yr[xr]=r,Yr[Rr]=t,Vr[0]}var kr=[0,0];function Cr(r,t){var n,e;return Ur(kr,r),n=kr[0],n&=2147483647,e=Gr(t),Wr(n|=e&=2147483648,kr[1])}var qr=!0===mr?1:0,zr=new C(1),Dr=new ur(zr.buffer);function Jr(r,t){return zr[0]=r,Dr[qr]=t>>>0,zr[0]}var Kr=1023,Qr=1048576,Xr=[1,1.5],Zr=[0,.5849624872207642],$r=[0,1.350039202129749e-8];function rt(r,t){return J(t)||K(t)?(r[0]=t,r[1]=0,r):0!==t&&$(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var tt=[0,0],nt=[0,0];function et(r,t){var n,e;return 0===t||0===r||J(r)||K(r)?r:(function(r,t){1===arguments.length?rt([0,0],r):rt(r,t)}(tt,r),t+=tt[1],t+=function(r){var t=Gr(r);return(t=(2146435072&t)>>>20)-Kr|0}(r=tt[0]),t<-1074?Cr(0,r):t>1023?r<0?E:j:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Ur(nt,r),n=nt[0],n&=2148532223,e*Wr(n|=t+Kr<<20,nt[1])))}var ot=2147483647,ut=1048575,it=1048576,ft=2147483647,at=1083179008,ct=1e300,yt=1e-300,lt=[0,0],pt=[0,0];function bt(r,t){var n,e,o,u,i,f,a,c,y,l,p,b,v,s;if(J(r)||J(t))return NaN;if(Ur(lt,t),i=lt[0],0===lt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Z(r);if(-.5===t)return 1/Z(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(K(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:$(r)<1==(t===j)?0:j}(r,t)}if(Ur(lt,r),u=lt[0],0===lt[1]){if(0===u)return function(r,t){return t===E?j:t===j?0:t>0?X(t)?r:0:X(t)?Cr(j,r):j}(r,t);if(1===r)return 1;if(-1===r&&X(t))return-1;if(K(r))return r===E?bt(-0,-t):t<0?0:j}if(r<0&&!1===O(t))return(r-r)/(r-r);if(o=$(r),n=u&ft|0,e=i&ft|0,a=i>>>31|0,f=(f=u>>>31|0)&&X(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Gr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*ct*ct:f*yt*yt;if(n>1072693248)return 0===a?f*ct*ct:f*yt*yt;p=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Sr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(pt,o)}else p=function(r,t,n){var e,o,u,i,f,a,c,y,l,p,b,v,s,h,w,m,A,d,g,_,j;return d=0,n<Qr&&(d-=53,n=Gr(t*=9007199254740992)),d+=(n>>20)-Kr|0,n=1072693248|(g=1048575&n|0),g<=235662?_=0:g<767610?_=1:(_=0,d+=1,n-=Qr),i=Sr(o=(m=(t=Jr(t,n))-(c=Xr[_]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),a=Jr(0,e+=_<<18),w=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Sr(a=3+(u=i*i)+(w+=(f=A*(m-i*a-i*(t-(a-c))))*(i+o)),0),s=(b=-7.028461650952758e-9*(l=Sr(l=(m=i*a)+(A=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(A-(l-m))+$r[_])-((v=Sr(v=(p=.9617967009544373*l)+b+(y=Zr[_])+(h=d),0))-h-y-p),r[0]=v,r[1]=s,r}(pt,o,n);if(l=(t-(c=Sr(t,0)))*p[0]+t*p[1],y=c*p[0],Ur(lt,b=l+y),v=Ir(lt[0]),s=Ir(lt[1]),v>=at){if(0!=(v-at|s))return f*ct*ct;if(l+8008566259537294e-32>b-y)return f*ct*ct}else if((v&ft)>=1083231232){if(0!=(v-3230714880|s))return f*yt*yt;if(l<=b-y)return f*yt*yt}return b=function(r,t,n){var e,o,u,i,f,a,c,y,l,p;return l=((y=r&ot|0)>>20)-Kr|0,c=0,y>1071644672&&(o=Jr(0,((c=r+(it>>l+1)>>>0)&~(ut>>(l=((c&ot)>>20)-Kr|0)))>>>0),c=(c&ut|it)>>20-l>>>0,r<0&&(c=-c),t-=o),r=Ir(r=Gr(a=1-((a=(u=.6931471824645996*(o=Sr(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?et(a,c):Jr(a,r)}(v,y,l),f*b}var vt=Math.ceil,st=1048575,ht=1.4426950407214463,wt=[0,0];function mt(r){var t,n,e,o,u;if(J(r)||r<0)return NaN;if(Ur(wt,r),u=0,(n=wt[0])<1048576){if(0==(2147483647&n|wt[1]))return E;u-=54,n=Gr(r*=0x40000000000000)}return n>=2146435072?r+r:(u+=(n>>20)-Kr|0,u+=(o=614244+(n&=1048575)&1048576|0)>>20|0,e=function(r){var t,n,e,o,u,i,f,a,c,y,l;return o=Gr(r),u=r-1,(st&2+o)<3?0===u?0:u*u*(.3333333333333333*u-.5):(y=(o&=st)-398458|0,l=440401-o|0,n=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+n,(y|=l)>0?i*((t=.5*u*u)+a)-t:i*(a-u))}(r=Jr(r,n|1072693248^o)),1.6751713164886512e-10*((r-=1)+e)+(r-(t=Sr(r,0))+e)*ht+t*ht+u)}function At(r,t){var n,e,o,u,i,f,a,c,y;if(e=r.length,u=t.length,n=e*r.BYTES_PER_ELEMENT+u*r.BYTES_PER_ELEMENT+r.byteOffset,r.buffer.byteLength<n)for(o=new D(J(a=n+1)||K(a)||0===a?a:(a<0?(a=-a,c=-1):c=1,-1074===(y=mt(a))?a:(y=-1===c?U(y):vt(y))>1023?j:c*bt(2,y))),i=new r.constructor(o,0,e+u),f=0;f<e;f++)i[f]=r[f];else i=new r.constructor(r.buffer,r.byteOffset,e+u);for(f=0;f<u;f++)i[e+f]=t[f];return i}return function(r){var t,n;for(t=[],n=0;n<arguments.length-1;n++)t.push(arguments[n+1]);if(i(r))return G(r,t);if(L(r))return At(r,t);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&I(r.length)&&r.length>=0)return M(r,t);throw new TypeError(H("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).push=t();
//# sourceMappingURL=browser.js.map
