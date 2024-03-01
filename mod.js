// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var o=e()?function(r){var e,i,o,u,f;if(null==r)return n.call(r);i=r[a],f=a,e=null!=(u=r)&&t.call(u,f);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=i:delete r[a],o}:function(r){return n.call(r)};var u=Array.isArray?Array.isArray:function(r){return"[object Array]"===o(r)},f="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function s(r){return"number"==typeof r}function l(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function p(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+l(i):l(i)+r,t&&(r="-"+r)),r}var y=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function g(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!s(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===v.call(r.specifier)?v.call(n):y.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var h=Math.abs,b=String.prototype.toLowerCase,d=String.prototype.toUpperCase,w=String.prototype.replace,m=/e\+(\d)$/,A=/e-(\d)$/,E=/^(\d+)$/,_=/^(\d+)e/,j=/\.0$/,S=/\.0*e/,U=/(\..*[^0])0*e/;function I(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":h(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=w.call(n,U,"$1e"),n=w.call(n,S,"e"),n=w.call(n,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=w.call(n,m,"e+0$1"),n=w.call(n,A,"e-0$1"),r.alternate&&(n=w.call(n,E,"$1."),n=w.call(n,_,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===d.call(r.specifier)?d.call(n):b.call(n)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var O=String.fromCharCode,T=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,n,t,i,a,o,u,f,c,s,l,y,v;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(t=r[f],"string"==typeof t)o+=t;else{if(e=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,T(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,T(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=g(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!T(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=T(a)?String(t.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=I(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=p(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,y=t.padRight,v=void 0,(v=l-s.length)<0?s:s=y?s+N(v):N(v)+s)),o+=t.arg||"",u+=1}return o}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,n,t,i;for(n=[],i=0,t=V.exec(r);t;)(e=r.slice(i,V.lastIndex-t[0].length)).length&&n.push(e),n.push(L(t)),i=V.lastIndex,t=V.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function B(r){var e,n;if("string"!=typeof r)throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return F.apply(null,e)}var R=Object.prototype,$=R.toString,G=R.__defineGetter__,C=R.__defineSetter__,H=R.__lookupGetter__,M=R.__lookupSetter__;var W=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===$.call(n))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||M.call(r,e)?(t=r.__proto__,r.__proto__=R,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(r,e,n.get),o&&C&&C.call(r,e,n.set),r};function Y(r,e,n){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Z(r){return"number"==typeof r}var X=Number,q=X.prototype.toString;var z=e();function D(r){return"object"==typeof r&&(r instanceof X||(z?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===o(r)))}function J(r){return Z(r)||D(r)}Y(J,"isPrimitive",Z),Y(J,"isObject",D);var K=Number.POSITIVE_INFINITY,Q=X.NEGATIVE_INFINITY,rr=Math.floor;function er(r){return rr(r)===r}function nr(r){return r<K&&r>Q&&er(r)}function tr(r){return Z(r)&&nr(r)}function ir(r){return D(r)&&nr(r.valueOf())}function ar(r){return tr(r)||ir(r)}function or(r){return tr(r)&&r>=0}function ur(r){return ir(r)&&r.valueOf()>=0}function fr(r){return or(r)||ur(r)}Y(ar,"isPrimitive",tr),Y(ar,"isObject",ir),Y(fr,"isPrimitive",or),Y(fr,"isObject",ur);var cr=9007199254740991;var sr="function"==typeof ArrayBuffer;var lr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var yr,vr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,NaN]),n=e,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var gr=yr,hr="function"==typeof ArrayBuffer?ArrayBuffer:null;var br,dr="function"==typeof ArrayBuffer?ArrayBuffer:void 0;br=function(){var r,e,n,t;if("function"!=typeof hr)return!1;try{n=new hr(16),t=n,(r=(sr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===o(t))&&"function"==typeof hr.isView)&&((e=new gr(n))[0]=-3.14,e[1]=NaN,r=r&&hr.isView(e)&&16===n.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var wr=br;function mr(r){return r!=r}function Ar(r){return r===K||r===Q}function Er(r){return er(r/2)}function _r(r){return Er(r>0?r-1:r+1)}var jr=Math.sqrt;function Sr(r){return Math.abs(r)}var Ur="function"==typeof Uint32Array;var Ir="function"==typeof Uint32Array?Uint32Array:null;var Nr,Or="function"==typeof Uint32Array?Uint32Array:void 0;Nr=function(){var r,e,n;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Ur&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var Tr=Nr,xr="function"==typeof Uint8Array;var kr="function"==typeof Uint8Array?Uint8Array:null;var Fr,Vr="function"==typeof Uint8Array?Uint8Array:void 0;Fr=function(){var r,e,n;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,256,257]),n=e,r=(xr&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Lr=Fr,Pr="function"==typeof Uint16Array;var Br="function"==typeof Uint16Array?Uint16Array:null;var Rr,$r="function"==typeof Uint16Array?Uint16Array:void 0;Rr=function(){var r,e,n;if("function"!=typeof Br)return!1;try{e=new Br(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Pr&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Gr,Cr={uint16:Rr,uint8:Lr};(Gr=new Cr.uint16(1))[0]=4660;var Hr,Mr,Wr=52===new Cr.uint8(Gr.buffer)[0];!0===Wr?(Hr=1,Mr=0):(Hr=0,Mr=1);var Yr={HIGH:Hr,LOW:Mr},Zr=new gr(1),Xr=new Tr(Zr.buffer),qr=Yr.HIGH,zr=Yr.LOW;function Dr(r,e,n,t){return Zr[0]=r,e[t]=Xr[qr],e[t+n]=Xr[zr],e}function Jr(r){return Dr(r,[0,0],1,0)}Y(Jr,"assign",Dr);var Kr=!0===Wr?0:1,Qr=new gr(1),re=new Tr(Qr.buffer);function ee(r,e){return Qr[0]=r,re[Kr]=e>>>0,Qr[0]}function ne(r){return 0|r}var te,ie,ae=2147483647,oe=2147483648,ue=!0===Wr?1:0,fe=new gr(1),ce=new Tr(fe.buffer);function se(r){return fe[0]=r,ce[ue]}!0===Wr?(te=1,ie=0):(te=0,ie=1);var le={HIGH:te,LOW:ie},pe=new gr(1),ye=new Tr(pe.buffer),ve=le.HIGH,ge=le.LOW;function he(r,e){return ye[ve]=r,ye[ge]=e,pe[0]}var be=[0,0];function de(r,e){var n,t;return Jr.assign(r,be,1,0),n=be[0],n&=ae,t=se(e),he(n|=t&=oe,be[1])}var we=1072693247,me=1e300,Ae=1e-300;var Ee=!0===Wr?1:0,_e=new gr(1),je=new Tr(_e.buffer);function Se(r,e){return _e[0]=r,je[Ee]=e>>>0,_e[0]}var Ue=1023;var Ie=1048575,Ne=1048576,Oe=1072693248,Te=536870912,xe=524288,ke=20,Fe=9007199254740992,Ve=.9617966939259756,Le=.9617967009544373,Pe=-7.028461650952758e-9,Be=[1,1.5],Re=[0,.5849624872207642],$e=[0,1.350039202129749e-8];var Ge=1.4426950408889634,Ce=1.4426950216293335,He=1.9259629911266175e-8;var Me=1023,We=-1023,Ye=-1074,Ze=22250738585072014e-324,Xe=4503599627370496;function qe(r,e,n,t){return mr(r)||Ar(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Sr(r)<Ze?(e[t]=r*Xe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}Y((function(r){return qe(r,[0,0],1,0)}),"assign",qe);var ze=2146435072;var De=2220446049250313e-31,Je=2148532223,Ke=[0,0],Qe=[0,0];function rn(r,e){var n,t;return 0===e||0===r||mr(r)||Ar(r)?r:(qe(r,Ke,1,0),r=Ke[0],e+=Ke[1],e+=function(r){var e=se(r);return(e=(e&ze)>>>20)-Ue|0}(r),e<Ye?de(0,r):e>Me?r<0?Q:K:(e<=We?(e+=52,t=De):t=1,Jr.assign(r,Qe,1,0),n=Qe[0],n&=Je,t*he(n|=e+Ue<<20,Qe[1])))}var en=.6931471805599453,nn=1048575;var tn=1048576,an=1071644672,on=20,un=.6931471824645996,fn=-1.904654299957768e-9;var cn=1072693247,sn=1105199104,ln=1139802112,pn=1083179008,yn=1072693248,vn=1083231232,gn=3230714880,hn=31,bn=1e300,dn=1e-300,wn=8008566259537294e-32,mn=[0,0],An=[0,0];function En(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,v,g;if(mr(r)||mr(e))return NaN;if(Jr.assign(e,mn,1,0),o=mn[0],0===mn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return jr(r);if(-.5===e)return 1/jr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Ar(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Sr(r)<1==(e===K)?0:K}(r,e)}if(Jr.assign(r,mn,1,0),a=mn[0],0===mn[1]){if(0===a)return function(r,e){return e===Q?K:e===K?0:e>0?_r(e)?r:0:_r(e)?de(K,r):K}(r,e);if(1===r)return 1;if(-1===r&&_r(e))return-1;if(Ar(r))return r===Q?En(-0,-e):e<0?0:K}if(r<0&&!1===er(e))return(r-r)/(r-r);if(i=Sr(r),n=a&ae|0,t=o&ae|0,f=o>>>hn|0,u=(u=a>>>hn|0)&&_r(e)?-1:1,t>sn){if(t>ln)return function(r,e){return(se(r)&ae)<=we?e<0?me*me:Ae*Ae:e>0?me*me:Ae*Ae}(r,e);if(n<cn)return 1===f?u*bn*bn:u*dn*dn;if(n>yn)return 0===f?u*bn*bn:u*dn*dn;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*He-a*Ge)-((t=ee(t=(o=Ce*i)+u,0))-o),r[0]=t,r[1]=n,r}(An,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,v,g,h,b,d,w,m,A,E,_;return m=0,n<Ne&&(m-=53,n=se(e*=Fe)),m+=(n>>ke)-Ue|0,n=(A=n&Ie|0)|Oe|0,A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=Ne),o=ee(i=(d=(e=Se(e,n))-(c=Be[E]))*(w=1/(e+c)),0),t=(n>>1|Te)+xe,f=Se(0,t+=E<<18),b=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ee(f=3+(a=o*o)+(b+=(u=w*(d-o*f-o*(e-(f-c))))*(o+i)),0),l=ee(l=(d=o*f)+(w=u*f+(b-(f-3-a))*i),0),p=Le*l,g=(y=Pe*l+(w-(l-d))*Ve+$e[E])-((v=ee(v=p+y+(s=Re[E])+(h=m),0))-h-s-p),r[0]=v,r[1]=g,r}(An,i,n);if(y=(l=(e-(c=ee(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Jr.assign(y,mn,1,0),v=ne(mn[0]),g=ne(mn[1]),v>=pn){if(0!=(v-pn|g))return u*bn*bn;if(l+wn>y-s)return u*bn*bn}else if((v&ae)>=vn){if(0!=(v-gn|g))return u*dn*dn;if(l<=y-s)return u*dn*dn}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&ae|0)>>on)-Ue|0,c=0,s>an&&(i=Se(0,((c=r+(tn>>l+1)>>>0)&~(nn>>(l=((c&ae)>>on)-Ue|0)))>>>0),c=(c&nn|tn)>>on-l>>>0,r<0&&(c=-c),e-=i),r=ne(r=se(f=1-((f=(a=(i=ee(i=n+e,0))*un)+(o=(n-(i-e))*en+i*fn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<on>>>0)>>on<=0?rn(f,c):Se(f,r)}(v,s,l),u*y}var _n=Math.ceil;var jn=1048575,Sn=.3333333333333333;var Un=0x40000000000000,In=1.4426950407214463,Nn=1.6751713164886512e-10,On=2146435072,Tn=1048576,xn=1072693248,kn=[0,0];function Fn(r){var e,n,t,i,a,o;if(mr(r)||r<0)return NaN;if(Jr.assign(r,kn,1,0),n=kn[0],t=kn[1],o=0,n<Tn){if(0==(n&ae|t))return Q;o-=54,n=se(r*=Un)}return n>=On?r+r:(o+=(n>>20)-Ue|0,o+=(a=(n&=nn)+614244&1048576|0)>>20|0,i=function(r){var e,n,t,i,a,o,u,f,c,s,l;return i=se(r),a=r-1,(jn&2+i)<3?0===a?0:a*a*(Sn*a-.5):(s=(i&=jn)-398458|0,l=440401-i|0,n=(c=(u=(o=a/(2+a))*o)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),t=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=t+n,(s|=l)>0?o*((e=.5*a*a)+f)-e:o*(f-a))}(r=Se(r,n|a^xn)),e=ee(r-=1,0),(r+i)*Nn+(r-e+i)*In+e*In+o)}function Vn(r,e){var n,t,i,a,o,u,f,c,s;if(t=r.length,a=e.length,n=t*r.BYTES_PER_ELEMENT+a*r.BYTES_PER_ELEMENT+r.byteOffset,r.buffer.byteLength<n)for(i=new wr(mr(f=n+1)||Ar(f)||0===f?f:(f<0?(f=-f,c=-1):c=1,(s=Fn(f))===Ye?f:(s=-1===c?rr(s):_n(s))>Me?K:c*En(2,s))),o=new r.constructor(i,0,t+a),u=0;u<t;u++)o[u]=r[u];else o=new r.constructor(r.buffer,r.byteOffset,t+a);for(u=0;u<a;u++)o[t+u]=e[u];return o}function Ln(r){var e,n,t;for(e=[],n=0;n<arguments.length-1;n++)e.push(arguments[n+1]);if(u(r))return function(r,e){var n;for(n=0;n<e.length;n++)r.push(e[n]);return r}(r,e);if(null!==(t=r)&&"object"==typeof t&&or(t.length)&&t.length<=cr&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength)return Vn(r,e);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&ar(r.length)&&r.length>=0)return function(r,e){var n,t;for(n=r.length,t=0;t<e.length;t++)r[n+t]=e[t];return r.length=n+e.length,r}(r,e);throw new TypeError(function(){var r,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}("1X9Ai",r))}export{Ln as default};
//# sourceMappingURL=mod.js.map
