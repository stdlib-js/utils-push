// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,o="function"==typeof i?i.toStringTag:"",a=t()?function(r){var t,i,a,f,u;if(null==r)return n.call(r);i=r[o],u=o,t=null!=(f=r)&&e.call(f,u);try{r[o]=void 0}catch(t){return n.call(r)}return a=n.call(r),t?r[o]=i:delete r[o],a}:function(r){return n.call(r)},f=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)},u="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty;function l(r){return"number"==typeof r}function y(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function p(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+y(i):y(i)+r,e&&(r="-"+r)),r}var s=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function v(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!l(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===h.call(r.specifier)?h.call(n):s.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function g(r){return"string"==typeof r}var d=Math.abs,w=String.prototype.toLowerCase,A=String.prototype.toUpperCase,b=String.prototype.replace,m=/e\+(\d)$/,F=/e-(\d)$/,E=/^(\d+)$/,U=/^(\d+)e/,N=/\.0$/,I=/\.0*e/,_=/(\..*[^0])0*e/;function j(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!l(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":d(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=b.call(n,_,"$1e"),n=b.call(n,I,"e"),n=b.call(n,N,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=b.call(n,m,"e+0$1"),n=b.call(n,F,"e-0$1"),r.alternate&&(n=b.call(n,E,"$1."),n=b.call(n,U,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===A.call(r.specifier)?A.call(n):w.call(n)}function T(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function S(r,t,n){var e=t-r.length;return e<0?r:r=n?r+T(e):T(e)+r}var O=String.fromCharCode,x=isNaN,V=Array.isArray;function k(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function P(r){var t,n,e,i,o,a,f,u,c;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",f=1,u=0;u<r.length;u++)if(g(e=r[u]))a+=e;else{if(t=void 0!==e.precision,!(e=k(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,x(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,x(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=v(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!x(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=x(o)?String(e.arg):O(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=j(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=p(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=S(e.arg,e.width,e.padRight)),a+=e.arg||"",f+=1}return a}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function $(r){var t,n,e,i;for(n=[],i=0,e=L.exec(r);e;)(t=r.slice(i,L.lastIndex-e[0].length)).length&&n.push(t),n.push(B(e)),i=L.lastIndex,e=L.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function G(r){return"string"==typeof r}function R(r){var t,n;if(!G(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[$(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return P.apply(null,t)}var Y=Object.prototype,H=Y.toString,M=Y.__defineGetter__,W=Y.__defineSetter__,C=Y.__lookupGetter__,Z=Y.__lookupSetter__,X=function(){try{return u({},"x",{}),!0}catch(r){return!1}}()?c:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===H.call(n))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(C.call(r,t)||Z.call(r,t)?(e=r.__proto__,r.__proto__=Y,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(r,t,n.get),a&&W&&W.call(r,t,n.set),r};function q(r,t,n){X(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function z(r){return"number"==typeof r}var D=Number,J=D.prototype.toString,K=t();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===a(r)))}function rr(r){return z(r)||Q(r)}q(rr,"isPrimitive",z),q(rr,"isObject",Q);var tr=Number.POSITIVE_INFINITY,nr=D.NEGATIVE_INFINITY,er=Math.floor;function ir(r){return er(r)===r}function or(r){return r<tr&&r>nr&&ir(r)}function ar(r){return z(r)&&or(r)}function fr(r){return Q(r)&&or(r.valueOf())}function ur(r){return ar(r)||fr(r)}function cr(r){return ar(r)&&r>=0}function lr(r){return fr(r)&&r.valueOf()>=0}function yr(r){return cr(r)||lr(r)}function pr(r){return null!==r&&"object"==typeof r&&cr(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function sr(r,t){var n;for(n=0;n<t.length;n++)r.push(t[n]);return r}function hr(r,t){var n,e;for(n=r.length,e=0;e<t.length;e++)r[n+e]=t[e];return r.length=n+t.length,r}q(ur,"isPrimitive",ar),q(ur,"isObject",fr),q(yr,"isPrimitive",cr),q(yr,"isObject",lr);var vr,gr="function"==typeof ArrayBuffer,dr="function"==typeof Float64Array,wr="function"==typeof Float64Array?Float64Array:null,Ar="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr([1,3.14,-3.14,NaN]),n=t,r=(dr&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var br,mr=vr,Fr="function"==typeof ArrayBuffer?ArrayBuffer:null,Er="function"==typeof ArrayBuffer?ArrayBuffer:void 0;br=function(){var r,t,n,e;if("function"!=typeof Fr)return!1;try{n=new Fr(16),e=n,(r=(gr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===a(e))&&"function"==typeof Fr.isView)&&((t=new mr(n))[0]=-3.14,t[1]=NaN,r=r&&Fr.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Ur=br;function Nr(r){return r!=r}var Ir=Number.POSITIVE_INFINITY;function _r(r){return r===Ir||r===nr}function jr(r){return ir(r/2)}function Tr(r){return jr(r>0?r-1:r+1)}var Sr=Math.sqrt;function Or(r){return Math.abs(r)}var xr,Vr="function"==typeof Uint32Array,kr="function"==typeof Uint32Array?Uint32Array:null,Pr="function"==typeof Uint32Array?Uint32Array:void 0;xr=function(){var r,t,n;if("function"!=typeof kr)return!1;try{t=new kr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Vr&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Lr,Br=xr,$r="function"==typeof Float64Array,Gr="function"==typeof Float64Array?Float64Array:null,Rr="function"==typeof Float64Array?Float64Array:void 0;Lr=function(){var r,t,n;if("function"!=typeof Gr)return!1;try{t=new Gr([1,3.14,-3.14,NaN]),n=t,r=($r&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Yr,Hr=Lr,Mr="function"==typeof Uint8Array,Wr="function"==typeof Uint8Array?Uint8Array:null,Cr="function"==typeof Uint8Array?Uint8Array:void 0;Yr=function(){var r,t,n;if("function"!=typeof Wr)return!1;try{t=new Wr(t=[1,3.14,-3.14,256,257]),n=t,r=(Mr&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Zr,Xr=Yr,qr="function"==typeof Uint16Array,zr="function"==typeof Uint16Array?Uint16Array:null,Dr="function"==typeof Uint16Array?Uint16Array:void 0;Zr=function(){var r,t,n;if("function"!=typeof zr)return!1;try{t=new zr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(qr&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var Jr,Kr={uint16:Zr,uint8:Xr};(Jr=new Kr.uint16(1))[0]=4660;var Qr,rt,tt=52===new Kr.uint8(Jr.buffer)[0];!0===tt?(Qr=1,rt=0):(Qr=0,rt=1);var nt={HIGH:Qr,LOW:rt},et=new Hr(1),it=new Br(et.buffer),ot=nt.HIGH,at=nt.LOW;function ft(r,t,n,e){return et[0]=r,t[e]=it[ot],t[e+n]=it[at],t}function ut(r){return ft(r,[0,0],1,0)}q(ut,"assign",ft);var ct,lt="function"==typeof Uint32Array,yt="function"==typeof Uint32Array?Uint32Array:null,pt="function"==typeof Uint32Array?Uint32Array:void 0;ct=function(){var r,t,n;if("function"!=typeof yt)return!1;try{t=new yt(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(lt&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pt:function(){throw new Error("not implemented")};var st,ht=ct,vt="function"==typeof Float64Array,gt="function"==typeof Float64Array?Float64Array:null,dt="function"==typeof Float64Array?Float64Array:void 0;st=function(){var r,t,n;if("function"!=typeof gt)return!1;try{t=new gt([1,3.14,-3.14,NaN]),n=t,r=(vt&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?dt:function(){throw new Error("not implemented")};var wt=!0===tt?0:1,At=new st(1),bt=new ht(At.buffer);function mt(r,t){return At[0]=r,bt[wt]=t>>>0,At[0]}function Ft(r){return 0|r}var Et,Ut=Number.POSITIVE_INFINITY,Nt=2147483647,It="function"==typeof Uint32Array,_t="function"==typeof Uint32Array?Uint32Array:null,jt="function"==typeof Uint32Array?Uint32Array:void 0;Et=function(){var r,t,n;if("function"!=typeof _t)return!1;try{t=new _t(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(It&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?jt:function(){throw new Error("not implemented")};var Tt,St=Et,Ot="function"==typeof Float64Array,xt="function"==typeof Float64Array?Float64Array:null,Vt="function"==typeof Float64Array?Float64Array:void 0;Tt=function(){var r,t,n;if("function"!=typeof xt)return!1;try{t=new xt([1,3.14,-3.14,NaN]),n=t,r=(Ot&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Vt:function(){throw new Error("not implemented")};var kt=!0===tt?1:0,Pt=new Tt(1),Lt=new St(Pt.buffer);function Bt(r){return Pt[0]=r,Lt[kt]}var $t,Gt="function"==typeof Uint32Array,Rt="function"==typeof Uint32Array?Uint32Array:null,Yt="function"==typeof Uint32Array?Uint32Array:void 0;$t=function(){var r,t,n;if("function"!=typeof Rt)return!1;try{t=new Rt(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Gt&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yt:function(){throw new Error("not implemented")};var Ht,Mt,Wt,Ct=$t,Zt="function"==typeof Float64Array,Xt="function"==typeof Float64Array?Float64Array:null,qt="function"==typeof Float64Array?Float64Array:void 0;Ht=function(){var r,t,n;if("function"!=typeof Xt)return!1;try{t=new Xt([1,3.14,-3.14,NaN]),n=t,r=(Zt&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?qt:function(){throw new Error("not implemented")},!0===tt?(Mt=1,Wt=0):(Mt=0,Wt=1);var zt={HIGH:Mt,LOW:Wt},Dt=new Ht(1),Jt=new Ct(Dt.buffer),Kt=zt.HIGH,Qt=zt.LOW;function rn(r,t){return Jt[Kt]=r,Jt[Qt]=t,Dt[0]}var tn=[0,0];function nn(r,t){var n,e;return ut.assign(r,tn,1,0),n=tn[0],n&=Nt,e=Bt(t),rn(n|=e&=2147483648,tn[1])}var en,on="function"==typeof Uint32Array,an="function"==typeof Uint32Array?Uint32Array:null,fn="function"==typeof Uint32Array?Uint32Array:void 0;en=function(){var r,t,n;if("function"!=typeof an)return!1;try{t=new an(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(on&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fn:function(){throw new Error("not implemented")};var un,cn=en,ln="function"==typeof Float64Array,yn="function"==typeof Float64Array?Float64Array:null,pn="function"==typeof Float64Array?Float64Array:void 0;un=function(){var r,t,n;if("function"!=typeof yn)return!1;try{t=new yn([1,3.14,-3.14,NaN]),n=t,r=(ln&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pn:function(){throw new Error("not implemented")};var sn=!0===tt?1:0,hn=new un(1),vn=new cn(hn.buffer);function gn(r,t){return hn[0]=r,vn[sn]=t>>>0,hn[0]}var dn=1023,wn=1048576,An=[1,1.5],bn=[0,.5849624872207642],mn=[0,1.350039202129749e-8],Fn=Number.POSITIVE_INFINITY;function En(r,t,n,e){return Nr(r)||_r(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Or(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}q((function(r){return En(r,[0,0],1,0)}),"assign",En);var Un=[0,0],Nn=[0,0];function In(r,t){var n,e;return 0===t||0===r||Nr(r)||_r(r)?r:(En(r,Un,1,0),t+=Un[1],t+=function(r){var t=Bt(r);return(t=(2146435072&t)>>>20)-dn|0}(r=Un[0]),t<-1074?nn(0,r):t>1023?r<0?nr:Fn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ut.assign(r,Nn,1,0),n=Nn[0],n&=2148532223,e*rn(n|=t+dn<<20,Nn[1])))}var _n=1048575,jn=1048576,Tn=1083179008,Sn=1e300,On=1e-300,xn=[0,0],Vn=[0,0];function kn(r,t){var n,e,i,o,a,f,u,c,l,y,p,s,h,v;if(Nr(r)||Nr(t))return NaN;if(ut.assign(t,xn,1,0),a=xn[0],0===xn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Sr(r);if(-.5===t)return 1/Sr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(_r(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Or(r)<1==(t===Ut)?0:Ut}(r,t)}if(ut.assign(r,xn,1,0),o=xn[0],0===xn[1]){if(0===o)return function(r,t){return t===nr?Ut:t===Ut?0:t>0?Tr(t)?r:0:Tr(t)?nn(Ut,r):Ut}(r,t);if(1===r)return 1;if(-1===r&&Tr(t))return-1;if(_r(r))return r===nr?kn(-0,-t):t<0?0:Ut}if(r<0&&!1===ir(t))return(r-r)/(r-r);if(i=Or(r),n=o&Nt|0,e=a&Nt|0,u=a>>>31|0,f=(f=o>>>31|0)&&Tr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(Bt(r)&Nt)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===u?f*Sn*Sn:f*On*On;if(n>1072693248)return 0===u?f*Sn*Sn:f*On*On;p=function(r,t){var n,e,i,o,a,f;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=mt(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(Vn,i)}else p=function(r,t,n){var e,i,o,a,f,u,c,l,y,p,s,h,v,g,d,w,A,b,m,F,E;return b=0,n<wn&&(b-=53,n=Bt(t*=9007199254740992)),b+=(n>>20)-dn|0,n=1072693248|(m=1048575&n|0),m<=235662?F=0:m<767610?F=1:(F=0,b+=1,n-=wn),a=mt(i=(w=(t=gn(t,n))-(c=An[F]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),u=gn(0,e+=F<<18),d=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),u=mt(u=3+(o=a*a)+(d+=(f=A*(w-a*u-a*(t-(u-c))))*(a+i)),0),v=(s=-7.028461650952758e-9*(y=mt(y=(w=a*u)+(A=f*u+(d-(u-3-o))*i),0))+.9617966939259756*(A-(y-w))+mn[F])-((h=mt(h=(p=.9617967009544373*y)+s+(l=bn[F])+(g=b),0))-g-l-p),r[0]=h,r[1]=v,r}(Vn,i,n);if(s=(y=(t-(c=mt(t,0)))*p[0]+t*p[1])+(l=c*p[0]),ut.assign(s,xn,1,0),h=Ft(xn[0]),v=Ft(xn[1]),h>=Tn){if(0!=(h-Tn|v))return f*Sn*Sn;if(y+8008566259537294e-32>s-l)return f*Sn*Sn}else if((h&Nt)>=1083231232){if(0!=(h-3230714880|v))return f*On*On;if(y<=s-l)return f*On*On}return s=function(r,t,n){var e,i,o,a,f,u,c,l,y,p;return y=((l=r&Nt|0)>>20)-dn|0,c=0,l>1071644672&&(i=gn(0,((c=r+(jn>>y+1)>>>0)&~(_n>>(y=((c&Nt)>>20)-dn|0)))>>>0),c=(c&_n|jn)>>20-y>>>0,r<0&&(c=-c),t-=i),r=Ft(r=Bt(u=1-((u=(o=.6931471824645996*(i=mt(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=u-(i=u*u)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=a-(u-o))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?In(u,c):gn(u,r)}(h,l,y),f*s}var Pn=Math.ceil,Ln=1048575,Bn=1.4426950407214463,$n=[0,0];function Gn(r){var t,n,e,i,o;if(Nr(r)||r<0)return NaN;if(ut.assign(r,$n,1,0),o=0,(n=$n[0])<1048576){if(0==(n&Nt|$n[1]))return nr;o-=54,n=Bt(r*=0x40000000000000)}return n>=2146435072?r+r:(o+=(n>>20)-dn|0,o+=(i=614244+(n&=_n)&1048576|0)>>20|0,e=function(r){var t,n,e,i,o,a,f,u,c,l,y;return i=Bt(r),o=r-1,(Ln&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(l=(i&=Ln)-398458|0,y=440401-i|0,n=(c=(f=(a=o/(2+o))*a)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),u=e+n,(l|=y)>0?a*((t=.5*o*o)+u)-t:a*(u-o))}(r=gn(r,n|1072693248^i)),1.6751713164886512e-10*((r-=1)+e)+(r-(t=mt(r,0))+e)*Bn+t*Bn+o)}var Rn=Number.POSITIVE_INFINITY;function Yn(r,t){var n,e,i,o,a,f,u,c,l;if(e=r.length,o=t.length,n=e*r.BYTES_PER_ELEMENT+o*r.BYTES_PER_ELEMENT+r.byteOffset,r.buffer.byteLength<n)for(i=new Ur(Nr(u=n+1)||_r(u)||0===u?u:(u<0?(u=-u,c=-1):c=1,-1074===(l=Gn(u))?u:(l=-1===c?er(l):Pn(l))>1023?Rn:c*kn(2,l))),a=new r.constructor(i,0,e+o),f=0;f<e;f++)a[f]=r[f];else a=new r.constructor(r.buffer,r.byteOffset,e+o);for(f=0;f<o;f++)a[e+f]=t[f];return a}return function(r){var t,n;for(t=[],n=0;n<arguments.length-1;n++)t.push(arguments[n+1]);if(f(r))return sr(r,t);if(pr(r))return Yn(r,t);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&ur(r.length)&&r.length>=0)return hr(r,t);throw new TypeError(R("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).push=t();
//# sourceMappingURL=index.js.map
