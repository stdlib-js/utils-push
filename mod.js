// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var o=e()?function(r){var e,i,o,u,f;if(null==r)return n.call(r);i=r[a],f=a,e=null!=(u=r)&&t.call(u,f);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=i:delete r[a],o}:function(r){return n.call(r)};var u=Array.isArray?Array.isArray:function(r){return"[object Array]"===o(r)},f="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function s(r){return"number"==typeof r}function l(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function p(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+l(i):l(i)+r,t&&(r="-"+r)),r}var y=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function v(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!s(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===g.call(r.specifier)?g.call(n):y.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function h(r){return"string"==typeof r}var b=Math.abs,d=String.prototype.toLowerCase,w=String.prototype.toUpperCase,m=String.prototype.replace,A=/e\+(\d)$/,E=/e-(\d)$/,_=/^(\d+)$/,j=/^(\d+)e/,S=/\.0$/,U=/\.0*e/,I=/(\..*[^0])0*e/;function O(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":b(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=m.call(n,I,"$1e"),n=m.call(n,U,"e"),n=m.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=m.call(n,A,"e+0$1"),n=m.call(n,E,"e-0$1"),r.alternate&&(n=m.call(n,_,"$1."),n=m.call(n,j,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===w.call(r.specifier)?w.call(n):d.call(n)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function T(r,e,n){var t=e-r.length;return t<0?r:r=n?r+N(t):N(t)+r}var x=String.fromCharCode,k=isNaN,F=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function L(r){var e,n,t,i,a,o,u,f,c;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(h(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,k(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=v(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!k(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(a)?String(t.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=O(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=p(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=T(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,n,t,i;for(n=[],i=0,t=P.exec(r);t;)(e=r.slice(i,P.lastIndex-t[0].length)).length&&n.push(e),n.push(B(t)),i=P.lastIndex,t=P.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function $(r){return"string"==typeof r}function G(r){var e,n,t;if(!$(r))throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return L.apply(null,n)}var C=Object.prototype,H=C.toString,M=C.__defineGetter__,W=C.__defineSetter__,Y=C.__lookupGetter__,Z=C.__lookupSetter__;var X=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===H.call(n))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Y.call(r,e)||Z.call(r,e)?(t=r.__proto__,r.__proto__=C,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&M&&M.call(r,e,n.get),o&&W&&W.call(r,e,n.set),r};function q(r,e,n){X(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function z(r){return"number"==typeof r}var D=Number,J=D.prototype.toString;var K=e();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===o(r)))}function rr(r){return z(r)||Q(r)}q(rr,"isPrimitive",z),q(rr,"isObject",Q);var er=Number.POSITIVE_INFINITY,nr=D.NEGATIVE_INFINITY,tr=Math.floor;function ir(r){return tr(r)===r}function ar(r){return r<er&&r>nr&&ir(r)}function or(r){return z(r)&&ar(r)}function ur(r){return Q(r)&&ar(r.valueOf())}function fr(r){return or(r)||ur(r)}function cr(r){return or(r)&&r>=0}function sr(r){return ur(r)&&r.valueOf()>=0}function lr(r){return cr(r)||sr(r)}q(fr,"isPrimitive",or),q(fr,"isObject",ur),q(lr,"isPrimitive",cr),q(lr,"isObject",sr);function pr(r){return null!==r&&"object"==typeof r&&cr(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function yr(){var r,e=arguments,n=e[0],t="https://stdlib.io/e/"+n+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function gr(r,e){var n;for(n=0;n<e.length;n++)r.push(e[n]);return r}function vr(r,e){var n,t;for(n=r.length,t=0;t<e.length;t++)r[n+t]=e[t];return r.length=n+e.length,r}var hr="function"==typeof ArrayBuffer;var br="function"==typeof Float64Array;var dr="function"==typeof Float64Array?Float64Array:null;var wr,mr="function"==typeof Float64Array?Float64Array:void 0;wr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr([1,3.14,-3.14,NaN]),n=e,r=(br&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Ar=wr,Er="function"==typeof ArrayBuffer?ArrayBuffer:null;var _r,jr="function"==typeof ArrayBuffer?ArrayBuffer:void 0;_r=function(){var r,e,n,t;if("function"!=typeof Er)return!1;try{n=new Er(16),t=n,(r=(hr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===o(t))&&"function"==typeof Er.isView)&&((e=new Ar(n))[0]=-3.14,e[1]=NaN,r=r&&Er.isView(e)&&16===n.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Sr=_r;function Ur(r){return r!=r}function Ir(r){return r===er||r===nr}function Or(r){return ir(r/2)}function Nr(r){return Or(r>0?r-1:r+1)}var Tr=Math.sqrt;function xr(r){return Math.abs(r)}var kr="function"==typeof Uint32Array;var Fr="function"==typeof Uint32Array?Uint32Array:null;var Vr,Lr="function"==typeof Uint32Array?Uint32Array:void 0;Vr=function(){var r,e,n;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(kr&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Pr=Vr,Br="function"==typeof Uint8Array;var Rr="function"==typeof Uint8Array?Uint8Array:null;var $r,Gr="function"==typeof Uint8Array?Uint8Array:void 0;$r=function(){var r,e,n;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,256,257]),n=e,r=(Br&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Cr=$r,Hr="function"==typeof Uint16Array;var Mr="function"==typeof Uint16Array?Uint16Array:null;var Wr,Yr="function"==typeof Uint16Array?Uint16Array:void 0;Wr=function(){var r,e,n;if("function"!=typeof Mr)return!1;try{e=new Mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Hr&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var Zr,Xr={uint16:Wr,uint8:Cr};(Zr=new Xr.uint16(1))[0]=4660;var qr,zr,Dr=52===new Xr.uint8(Zr.buffer)[0];!0===Dr?(qr=1,zr=0):(qr=0,zr=1);var Jr={HIGH:qr,LOW:zr},Kr=new Ar(1),Qr=new Pr(Kr.buffer),re=Jr.HIGH,ee=Jr.LOW;function ne(r,e,n,t){return Kr[0]=r,e[t]=Qr[re],e[t+n]=Qr[ee],e}function te(r){return ne(r,[0,0],1,0)}q(te,"assign",ne);var ie=!0===Dr?0:1,ae=new Ar(1),oe=new Pr(ae.buffer);function ue(r,e){return ae[0]=r,oe[ie]=e>>>0,ae[0]}function fe(r){return 0|r}var ce,se,le=!0===Dr?1:0,pe=new Ar(1),ye=new Pr(pe.buffer);function ge(r){return pe[0]=r,ye[le]}!0===Dr?(ce=1,se=0):(ce=0,se=1);var ve={HIGH:ce,LOW:se},he=new Ar(1),be=new Pr(he.buffer),de=ve.HIGH,we=ve.LOW;function me(r,e){return be[de]=r,be[we]=e,he[0]}var Ae=[0,0];function Ee(r,e){var n,t;return te.assign(r,Ae,1,0),n=Ae[0],n&=2147483647,t=ge(e),me(n|=t&=2147483648,Ae[1])}var _e=!0===Dr?1:0,je=new Ar(1),Se=new Pr(je.buffer);function Ue(r,e){return je[0]=r,Se[_e]=e>>>0,je[0]}var Ie=[1,1.5],Oe=[0,.5849624872207642],Ne=[0,1.350039202129749e-8];function Te(r,e,n,t){return Ur(r)||Ir(r)?(e[t]=r,e[t+n]=0,e):0!==r&&xr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}q((function(r){return Te(r,[0,0],1,0)}),"assign",Te);var xe=[0,0],ke=[0,0];function Fe(r,e){var n,t;return 0===e||0===r||Ur(r)||Ir(r)?r:(Te(r,xe,1,0),e+=xe[1],e+=function(r){var e=ge(r);return(e=(2146435072&e)>>>20)-1023|0}(r=xe[0]),e<-1074?Ee(0,r):e>1023?r<0?nr:er:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,te.assign(r,ke,1,0),n=ke[0],n&=2148532223,t*me(n|=e+1023<<20,ke[1])))}var Ve=1e300,Le=1e-300,Pe=[0,0],Be=[0,0];function Re(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,v;if(Ur(r)||Ur(e))return NaN;if(te.assign(e,Pe,1,0),o=Pe[0],0===Pe[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Tr(r);if(-.5===e)return 1/Tr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Ir(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:xr(r)<1==(e===er)?0:er}(r,e)}if(te.assign(r,Pe,1,0),a=Pe[0],0===Pe[1]){if(0===a)return function(r,e){return e===nr?er:e===er?0:e>0?Nr(e)?r:0:Nr(e)?Ee(er,r):er}(r,e);if(1===r)return 1;if(-1===r&&Nr(e))return-1;if(Ir(r))return r===nr?Re(-0,-e):e<0?0:er}if(r<0&&!1===ir(e))return(r-r)/(r-r);if(i=xr(r),n=2147483647&a|0,t=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&Nr(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&ge(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Ve*Ve:u*Le*Le;if(n>1072693248)return 0===f?u*Ve*Ve:u*Le*Le;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ue(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Be,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,v,h,b,d,w,m,A,E,_;return m=0,n<1048576&&(m-=53,n=ge(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=1048576),o=ue(i=(d=(e=Ue(e,n))-(c=Ie[E]))*(w=1/(e+c)),0),t=524288+(n>>1|536870912),f=Ue(0,t+=E<<18),b=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ue(f=3+(a=o*o)+(b+=(u=w*(d-o*f-o*(e-(f-c))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=ue(l=(d=o*f)+(w=u*f+(b-(f-3-a))*i),0))+.9617966939259756*(w-(l-d))+Ne[E])-((g=ue(g=(p=.9617967009544373*l)+y+(s=Oe[E])+(h=m),0))-h-s-p),r[0]=g,r[1]=v,r}(Be,i,n);if(y=(l=(e-(c=ue(e,0)))*p[0]+e*p[1])+(s=c*p[0]),te.assign(y,Pe,1,0),g=fe(Pe[0]),v=fe(Pe[1]),g>=1083179008){if(0!=(g-1083179008|v))return u*Ve*Ve;if(l+8008566259537294e-32>y-s)return u*Ve*Ve}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|v))return u*Le*Le;if(l<=y-s)return u*Le*Le}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=Ue(0,t)),r=fe(r=ge(c=1-((c=(o=.6931471824645996*(a=ue(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?Fe(c,s):Ue(c,r)}(g,s,l),u*y}var $e=Math.ceil;var Ge=[0,0];function Ce(r){var e,n,t,i,a;if(Ur(r)||r<0)return NaN;if(te.assign(r,Ge,1,0),a=0,(n=Ge[0])<1048576){if(0==(2147483647&n|Ge[1]))return nr;a-=54,n=ge(r*=0x40000000000000)}return n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(i=(n&=1048575)+614244&1048576|0)>>20|0,t=function(r){var e,n,t,i,a,o,u,f,c,s,l;return a=r-1,(1048575&2+(i=ge(r)))<3?0===a?0:a*a*(.3333333333333333*a-.5):(s=(i&=1048575)-398458|0,l=440401-i|0,n=(c=(u=(o=a/(2+a))*o)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),t=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=t+n,(s|=l)>0?o*((e=.5*a*a)+f)-e:o*(f-a))}(r=Ue(r,n|1072693248^i)),1.6751713164886512e-10*((r-=1)+t)+1.4426950407214463*(r-(e=ue(r,0))+t)+1.4426950407214463*e+a)}function He(r,e){var n,t,i,a,o,u,f,c,s;if(t=r.length,a=e.length,n=t*r.BYTES_PER_ELEMENT+a*r.BYTES_PER_ELEMENT+r.byteOffset,r.buffer.byteLength<n)for(i=new Sr(Ur(f=n+1)||Ir(f)||0===f?f:(f<0?(f=-f,c=-1):c=1,-1074===(s=Ce(f))?f:(s=-1===c?tr(s):$e(s))>1023?er:c*Re(2,s))),o=new r.constructor(i,0,t+a),u=0;u<t;u++)o[u]=r[u];else o=new r.constructor(r.buffer,r.byteOffset,t+a);for(u=0;u<a;u++)o[t+u]=e[u];return o}function Me(r){var e,n;for(e=[],n=0;n<arguments.length-1;n++)e.push(arguments[n+1]);if(u(r))return gr(r,e);if(pr(r))return He(r,e);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&fr(r.length)&&r.length>=0)return vr(r,e);throw new TypeError(yr("1X9Ai,Og",r))}export{Me as default};
//# sourceMappingURL=mod.js.map
