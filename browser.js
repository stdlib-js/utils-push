// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,o="function"==typeof i?i.toStringTag:"",a=e()?function(r){var e,i,a,u,f;if(null==r)return n.call(r);i=r[o],f=o,e=null!=(u=r)&&t.call(u,f);try{r[o]=void 0}catch(e){return n.call(r)}return a=n.call(r),e?r[o]=i:delete r[o],a}:function(r){return n.call(r)},u=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)},f="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty;function s(r){return"number"==typeof r}function l(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function p(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+l(i):l(i)+r,t&&(r="-"+r)),r}var y=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function h(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!s(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===g.call(r.specifier)?g.call(n):y.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function d(r){return"string"==typeof r}var b=Math.abs,v=String.prototype.toLowerCase,w=String.prototype.toUpperCase,m=String.prototype.replace,A=/e\+(\d)$/,E=/e-(\d)$/,_=/^(\d+)$/,j=/^(\d+)e/,S=/\.0$/,T=/\.0*e/,U=/(\..*[^0])0*e/;function I(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":b(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=m.call(n,U,"$1e"),n=m.call(n,T,"e"),n=m.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=m.call(n,A,"e+0$1"),n=m.call(n,E,"e-0$1"),r.alternate&&(n=m.call(n,_,"$1."),n=m.call(n,j,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===w.call(r.specifier)?w.call(n):v.call(n)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function O(r,e,n){var t=e-r.length;return t<0?r:r=n?r+N(t):N(t)+r}var x=String.fromCharCode,k=isNaN,F=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function L(r){var e,n,t,i,o,a,u,f,c;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(d(t=r[f]))a+=t;else{if(e=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,k(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=h(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!k(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=I(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=p(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=O(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,n,t,i;for(n=[],i=0,t=P.exec(r);t;)(e=r.slice(i,P.lastIndex-t[0].length)).length&&n.push(e),n.push(B(t)),i=P.lastIndex,t=P.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function G(r){return"string"==typeof r}function R(r){var e,n,t;if(!G(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=$(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return L.apply(null,n)}var H=Object.prototype,M=H.toString,W=H.__defineGetter__,C=H.__defineSetter__,Y=H.__lookupGetter__,Z=H.__lookupSetter__,X=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===M.call(n))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Y.call(r,e)||Z.call(r,e)?(t=r.__proto__,r.__proto__=H,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&W&&W.call(r,e,n.get),a&&C&&C.call(r,e,n.set),r};function q(r,e,n){X(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function z(r){return"number"==typeof r}var D=Number,J=D.prototype.toString,K=e();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===a(r)))}function rr(r){return z(r)||Q(r)}q(rr,"isPrimitive",z),q(rr,"isObject",Q);var er=Number.POSITIVE_INFINITY,nr=D.NEGATIVE_INFINITY,tr=Math.floor;function ir(r){return tr(r)===r}function or(r){return r<er&&r>nr&&ir(r)}function ar(r){return z(r)&&or(r)}function ur(r){return Q(r)&&or(r.valueOf())}function fr(r){return ar(r)||ur(r)}function cr(r){return ar(r)&&r>=0}function sr(r){return ur(r)&&r.valueOf()>=0}function lr(r){return cr(r)||sr(r)}function pr(r){return null!==r&&"object"==typeof r&&cr(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function yr(r,e){var n;for(n=0;n<e.length;n++)r.push(e[n]);return r}function gr(r,e){var n,t;for(n=r.length,t=0;t<e.length;t++)r[n+t]=e[t];return r.length=n+e.length,r}q(fr,"isPrimitive",ar),q(fr,"isObject",ur),q(lr,"isPrimitive",cr),q(lr,"isObject",sr);var hr,dr="function"==typeof ArrayBuffer,br="function"==typeof Float64Array,vr="function"==typeof Float64Array?Float64Array:null,wr="function"==typeof Float64Array?Float64Array:void 0;hr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,NaN]),n=e,r=(br&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr,Ar=hr,Er="function"==typeof ArrayBuffer?ArrayBuffer:null,_r="function"==typeof ArrayBuffer?ArrayBuffer:void 0;mr=function(){var r,e,n,t;if("function"!=typeof Er)return!1;try{n=new Er(16),t=n,(r=(dr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===a(t))&&"function"==typeof Er.isView)&&((e=new Ar(n))[0]=-3.14,e[1]=NaN,r=r&&Er.isView(e)&&16===n.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var jr=mr;function Sr(r){return r!=r}function Tr(r){return r===er||r===nr}function Ur(r){return ir(r/2)}function Ir(r){return Ur(r>0?r-1:r+1)}var Nr=Math.sqrt;function Or(r){return Math.abs(r)}var xr,kr="function"==typeof Uint32Array,Fr="function"==typeof Uint32Array?Uint32Array:null,Vr="function"==typeof Uint32Array?Uint32Array:void 0;xr=function(){var r,e,n;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(kr&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Lr,Pr=xr,Br="function"==typeof Uint8Array,$r="function"==typeof Uint8Array?Uint8Array:null,Gr="function"==typeof Uint8Array?Uint8Array:void 0;Lr=function(){var r,e,n;if("function"!=typeof $r)return!1;try{e=new $r(e=[1,3.14,-3.14,256,257]),n=e,r=(Br&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Rr,Hr=Lr,Mr="function"==typeof Uint16Array,Wr="function"==typeof Uint16Array?Uint16Array:null,Cr="function"==typeof Uint16Array?Uint16Array:void 0;Rr=function(){var r,e,n;if("function"!=typeof Wr)return!1;try{e=new Wr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Mr&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Yr,Zr={uint16:Rr,uint8:Hr};(Yr=new Zr.uint16(1))[0]=4660;var Xr,qr,zr=52===new Zr.uint8(Yr.buffer)[0];!0===zr?(Xr=1,qr=0):(Xr=0,qr=1);var Dr={HIGH:Xr,LOW:qr},Jr=new Ar(1),Kr=new Pr(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,n,t){return Jr[0]=r,e[t]=Kr[Qr],e[t+n]=Kr[re],e}function ne(r){return ee(r,[0,0],1,0)}q(ne,"assign",ee);var te=!0===zr?0:1,ie=new Ar(1),oe=new Pr(ie.buffer);function ae(r,e){return ie[0]=r,oe[te]=e>>>0,ie[0]}function ue(r){return 0|r}var fe,ce,se=2147483647,le=!0===zr?1:0,pe=new Ar(1),ye=new Pr(pe.buffer);function ge(r){return pe[0]=r,ye[le]}!0===zr?(fe=1,ce=0):(fe=0,ce=1);var he={HIGH:fe,LOW:ce},de=new Ar(1),be=new Pr(de.buffer),ve=he.HIGH,we=he.LOW;function me(r,e){return be[ve]=r,be[we]=e,de[0]}var Ae=[0,0];function Ee(r,e){var n,t;return ne.assign(r,Ae,1,0),n=Ae[0],n&=se,t=ge(e),me(n|=t&=2147483648,Ae[1])}var _e=!0===zr?1:0,je=new Ar(1),Se=new Pr(je.buffer);function Te(r,e){return je[0]=r,Se[_e]=e>>>0,je[0]}var Ue=1023,Ie=1048576,Ne=[1,1.5],Oe=[0,.5849624872207642],xe=[0,1.350039202129749e-8];function ke(r,e,n,t){return Sr(r)||Tr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Or(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}q((function(r){return ke(r,[0,0],1,0)}),"assign",ke);var Fe=[0,0],Ve=[0,0];function Le(r,e){var n,t;return 0===e||0===r||Sr(r)||Tr(r)?r:(ke(r,Fe,1,0),e+=Fe[1],e+=function(r){var e=ge(r);return(e=(2146435072&e)>>>20)-Ue|0}(r=Fe[0]),e<-1074?Ee(0,r):e>1023?r<0?nr:er:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ne.assign(r,Ve,1,0),n=Ve[0],n&=2148532223,t*me(n|=e+Ue<<20,Ve[1])))}var Pe=1048575,Be=1048576,$e=1083179008,Ge=1e300,Re=1e-300,He=[0,0],Me=[0,0];function We(r,e){var n,t,i,o,a,u,f,c,s,l,p,y,g,h;if(Sr(r)||Sr(e))return NaN;if(ne.assign(e,He,1,0),a=He[0],0===He[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Nr(r);if(-.5===e)return 1/Nr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Tr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Or(r)<1==(e===er)?0:er}(r,e)}if(ne.assign(r,He,1,0),o=He[0],0===He[1]){if(0===o)return function(r,e){return e===nr?er:e===er?0:e>0?Ir(e)?r:0:Ir(e)?Ee(er,r):er}(r,e);if(1===r)return 1;if(-1===r&&Ir(e))return-1;if(Tr(r))return r===nr?We(-0,-e):e<0?0:er}if(r<0&&!1===ir(e))return(r-r)/(r-r);if(i=Or(r),n=o&se|0,t=a&se|0,f=a>>>31|0,u=(u=o>>>31|0)&&Ir(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(ge(r)&se)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Ge*Ge:u*Re*Re;if(n>1072693248)return 0===f?u*Ge*Ge:u*Re*Re;p=function(r,e){var n,t,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ae(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=n,r}(Me,i)}else p=function(r,e,n){var t,i,o,a,u,f,c,s,l,p,y,g,h,d,b,v,w,m,A,E,_;return m=0,n<Ie&&(m-=53,n=ge(e*=9007199254740992)),m+=(n>>20)-Ue|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=Ie),a=ae(i=(v=(e=Te(e,n))-(c=Ne[E]))*(w=1/(e+c)),0),t=524288+(n>>1|536870912),f=Te(0,t+=E<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ae(f=3+(o=a*a)+(b+=(u=w*(v-a*f-a*(e-(f-c))))*(a+i)),0),h=(y=-7.028461650952758e-9*(l=ae(l=(v=a*f)+(w=u*f+(b-(f-3-o))*i),0))+.9617966939259756*(w-(l-v))+xe[E])-((g=ae(g=(p=.9617967009544373*l)+y+(s=Oe[E])+(d=m),0))-d-s-p),r[0]=g,r[1]=h,r}(Me,i,n);if(y=(l=(e-(c=ae(e,0)))*p[0]+e*p[1])+(s=c*p[0]),ne.assign(y,He,1,0),g=ue(He[0]),h=ue(He[1]),g>=$e){if(0!=(g-$e|h))return u*Ge*Ge;if(l+8008566259537294e-32>y-s)return u*Ge*Ge}else if((g&se)>=1083231232){if(0!=(g-3230714880|h))return u*Re*Re;if(l<=y-s)return u*Re*Re}return y=function(r,e,n){var t,i,o,a,u,f,c,s,l,p;return l=((s=r&se|0)>>20)-Ue|0,c=0,s>1071644672&&(i=Te(0,((c=r+(Be>>l+1)>>>0)&~(Pe>>(l=((c&se)>>20)-Ue|0)))>>>0),c=(c&Pe|Be)>>20-l>>>0,r<0&&(c=-c),e-=i),r=ue(r=ge(f=1-((f=(o=.6931471824645996*(i=ae(i=n+e,0)))+(a=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Le(f,c):Te(f,r)}(g,s,l),u*y}var Ce=Math.ceil,Ye=1048575,Ze=1.4426950407214463,Xe=[0,0];function qe(r){var e,n,t,i,o;if(Sr(r)||r<0)return NaN;if(ne.assign(r,Xe,1,0),o=0,(n=Xe[0])<1048576){if(0==(n&se|Xe[1]))return nr;o-=54,n=ge(r*=0x40000000000000)}return n>=2146435072?r+r:(o+=(n>>20)-Ue|0,o+=(i=614244+(n&=Pe)&1048576|0)>>20|0,t=function(r){var e,n,t,i,o,a,u,f,c,s,l;return i=ge(r),o=r-1,(Ye&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(s=(i&=Ye)-398458|0,l=440401-i|0,n=(c=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),t=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=t+n,(s|=l)>0?a*((e=.5*o*o)+f)-e:a*(f-o))}(r=Te(r,n|1072693248^i)),1.6751713164886512e-10*((r-=1)+t)+(r-(e=ae(r,0))+t)*Ze+e*Ze+o)}function ze(r,e){var n,t,i,o,a,u,f,c,s;if(t=r.length,o=e.length,n=t*r.BYTES_PER_ELEMENT+o*r.BYTES_PER_ELEMENT+r.byteOffset,r.buffer.byteLength<n)for(i=new jr(Sr(f=n+1)||Tr(f)||0===f?f:(f<0?(f=-f,c=-1):c=1,-1074===(s=qe(f))?f:(s=-1===c?tr(s):Ce(s))>1023?er:c*We(2,s))),a=new r.constructor(i,0,t+o),u=0;u<t;u++)a[u]=r[u];else a=new r.constructor(r.buffer,r.byteOffset,t+o);for(u=0;u<o;u++)a[t+u]=e[u];return a}return function(r){var e,n;for(e=[],n=0;n<arguments.length-1;n++)e.push(arguments[n+1]);if(u(r))return yr(r,e);if(pr(r))return ze(r,e);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&fr(r.length)&&r.length>=0)return gr(r,e);throw new TypeError(R("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).push=e();
//# sourceMappingURL=browser.js.map
