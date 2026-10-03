(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function A0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xm={exports:{}},Ll={},ym={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),C0=Symbol.for("react.portal"),R0=Symbol.for("react.fragment"),b0=Symbol.for("react.strict_mode"),N0=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),D0=Symbol.for("react.suspense"),U0=Symbol.for("react.memo"),F0=Symbol.for("react.lazy"),eh=Symbol.iterator;function O0(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,Em={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tm(){}Tm.prototype=Ns.prototype;function Od(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}var kd=Od.prototype=new Tm;kd.constructor=Od;Mm(kd,Ns.prototype);kd.isPureReactComponent=!0;var th=Array.isArray,wm=Object.prototype.hasOwnProperty,zd={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)wm.call(e,i)&&!Am.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ka,type:t,key:s,ref:a,props:r,_owner:zd.current}}function k0(t,e){return{$$typeof:ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ka}function z0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nh=/\/+/g;function Jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z0(""+t.key):e.toString(36)}function ko(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ka:case C0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Jl(a,0):i,th(r)?(n="",t!=null&&(n=t.replace(nh,"$&/")+"/"),ko(r,e,n,"",function(c){return c})):r!=null&&(Bd(r)&&(r=k0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(nh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",th(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Jl(s,o);a+=ko(s,e,n,l,r)}else if(l=O0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Jl(s,o++),a+=ko(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function $a(t,e,n){if(t==null)return t;var i=[],r=0;return ko(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},zo={transition:null},H0={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:zo,ReactCurrentOwner:zd};function Rm(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Ns;Ge.Fragment=R0;Ge.Profiler=N0;Ge.PureComponent=Od;Ge.StrictMode=b0;Ge.Suspense=D0;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;Ge.act=Rm;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=zd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)wm.call(e,l)&&!Am.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:ka,type:t.type,key:r,ref:s,props:i,_owner:a}};Ge.createContext=function(t){return t={$$typeof:L0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P0,_context:t},t.Consumer=t};Ge.createElement=Cm;Ge.createFactory=function(t){var e=Cm.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:I0,render:t}};Ge.isValidElement=Bd;Ge.lazy=function(t){return{$$typeof:F0,_payload:{_status:-1,_result:t},_init:B0}};Ge.memo=function(t,e){return{$$typeof:U0,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=zo.transition;zo.transition={};try{t()}finally{zo.transition=e}};Ge.unstable_act=Rm;Ge.useCallback=function(t,e){return Kt.current.useCallback(t,e)};Ge.useContext=function(t){return Kt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return Kt.current.useEffect(t,e)};Ge.useId=function(){return Kt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Kt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};Ge.useRef=function(t){return Kt.current.useRef(t)};Ge.useState=function(t){return Kt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Kt.current.useTransition()};Ge.version="18.3.1";ym.exports=Ge;var be=ym.exports;const V0=A0(be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0=be,W0=Symbol.for("react.element"),j0=Symbol.for("react.fragment"),X0=Object.prototype.hasOwnProperty,Y0=G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q0={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)X0.call(e,i)&&!q0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:W0,type:t,key:s,ref:a,props:r,_owner:Y0.current}}Ll.Fragment=j0;Ll.jsx=bm;Ll.jsxs=bm;xm.exports=Ll;var g=xm.exports,nu={},Nm={exports:{}},vn={},Pm={exports:{}},Lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,j){var K=L.length;L.push(j);e:for(;0<K;){var oe=K-1>>>1,ye=L[oe];if(0<r(ye,j))L[oe]=j,L[K]=ye,K=oe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var j=L[0],K=L.pop();if(K!==j){L[0]=K;e:for(var oe=0,ye=L.length,Xe=ye>>>1;oe<Xe;){var W=2*(oe+1)-1,se=L[W],fe=W+1,le=L[fe];if(0>r(se,K))fe<ye&&0>r(le,se)?(L[oe]=le,L[fe]=K,oe=fe):(L[oe]=se,L[W]=K,oe=W);else if(fe<ye&&0>r(le,K))L[oe]=le,L[fe]=K,oe=fe;else break e}}return j}function r(L,j){var K=L.sortIndex-j.sortIndex;return K!==0?K:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,p=!1,_=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=L)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function y(L){if(S=!1,x(L),!_)if(n(l)!==null)_=!0,Y(N);else{var j=n(c);j!==null&&J(y,j.startTime-L)}}function N(L,j){_=!1,S&&(S=!1,u(b),b=-1),p=!0;var K=d;try{for(x(j),h=n(l);h!==null&&(!(h.expirationTime>j)||L&&!P());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var ye=oe(h.expirationTime<=j);j=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&i(l),x(j)}else i(l);h=n(l)}if(h!==null)var Xe=!0;else{var W=n(c);W!==null&&J(y,W.startTime-j),Xe=!1}return Xe}finally{h=null,d=K,p=!1}}var C=!1,A=null,b=-1,w=5,M=-1;function P(){return!(t.unstable_now()-M<w)}function V(){if(A!==null){var L=t.unstable_now();M=L;var j=!0;try{j=A(!0,L)}finally{j?B():(C=!1,A=null)}}else C=!1}var B;if(typeof m=="function")B=function(){m(V)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ee=$.port2;$.port1.onmessage=V,B=function(){ee.postMessage(null)}}else B=function(){v(V,0)};function Y(L){A=L,C||(C=!0,B())}function J(L,j){b=v(function(){L(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Y(N))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var K=d;d=j;try{return L()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=d;d=L;try{return j()}finally{d=K}},t.unstable_scheduleCallback=function(L,j,K){var oe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?oe+K:oe):K=oe,L){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=K+ye,L={id:f++,callback:j,priorityLevel:L,startTime:K,expirationTime:ye,sortIndex:-1},K>oe?(L.sortIndex=K,e(c,L),n(l)===null&&L===n(c)&&(S?(u(b),b=-1):S=!0,J(y,K-oe))):(L.sortIndex=ye,e(l,L),_||p||(_=!0,Y(N))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var j=d;return function(){var K=d;d=j;try{return L.apply(this,arguments)}finally{d=K}}}})(Lm);Pm.exports=Lm;var $0=Pm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0=be,gn=$0;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Im=new Set,xa={};function br(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(xa[t]=e,t=0;t<e.length;t++)Im.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=Object.prototype.hasOwnProperty,K0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},rh={};function Q0(t){return iu.call(rh,t)?!0:iu.call(ih,t)?!1:K0.test(t)?rh[t]=!0:(ih[t]=!0,!1)}function J0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function e_(t,e,n,i){if(e===null||typeof e>"u"||J0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hd=/[\-:]([a-z])/g;function Vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hd,Vd);Ot[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hd,Vd);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hd,Vd);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e_(e,n,r,i)&&(n=null),i||r===null?Q0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=Z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Um=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),au=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),Fm=Symbol.for("react.offscreen"),sh=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=sh&&t[sh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,ec;function ea(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||""}return`
`+ec+t}var tc=!1;function nc(t,e){if(!t||tc)return"";tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function t_(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=nc(t.type,!1),t;case 11:return t=nc(t.type.render,!1),t;case 1:return t=nc(t.type,!0),t;default:return""}}function ou(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zr:return"Fragment";case $r:return"Portal";case ru:return"Profiler";case Wd:return"StrictMode";case su:return"Suspense";case au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Um:return(t.displayName||"Context")+".Consumer";case Dm:return(t._context.displayName||"Context")+".Provider";case jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:ou(t.type)||"Memo";case Pi:e=t._payload,t=t._init;try{return ou(t(e))}catch{}}return null}function n_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Om(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i_(t){var e=Om(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=i_(t))}function km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Om(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ah(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zm(t,e){e=e.checked,e!=null&&Gd(t,"checked",e,!1)}function cu(t,e){zm(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&uu(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function oh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uu(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ta(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function Bm(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,Vm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r_=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){r_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function Gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function Wm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Gm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var s_=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(t,e){if(e){if(s_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function Yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gu=null,cs=null,us=null;function uh(t){if(t=Ha(t)){if(typeof gu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Ol(e),gu(t.stateNode,t.type,e))}}function jm(t){cs?us?us.push(t):us=[t]:cs=t}function Xm(){if(cs){var t=cs,e=us;if(us=cs=null,uh(t),e)for(t=0;t<e.length;t++)uh(e[t])}}function Ym(t,e){return t(e)}function qm(){}var ic=!1;function $m(t,e,n){if(ic)return t(e,n);ic=!0;try{return Ym(t,e,n)}finally{ic=!1,(cs!==null||us!==null)&&(qm(),Xm())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=Ol(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var vu=!1;if(gi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){vu=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{vu=!1}function a_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var oa=!1,il=null,rl=!1,_u=null,o_={onError:function(t){oa=!0,il=t}};function l_(t,e,n,i,r,s,a,o,l){oa=!1,il=null,a_.apply(o_,arguments)}function c_(t,e,n,i,r,s,a,o,l){if(l_.apply(this,arguments),oa){if(oa){var c=il;oa=!1,il=null}else throw Error(re(198));rl||(rl=!0,_u=c)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dh(t){if(Nr(t)!==t)throw Error(re(188))}function u_(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return dh(r),t;if(s===i)return dh(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Km(t){return t=u_(t),t!==null?Qm(t):null}function Qm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qm(t);if(e!==null)return e;t=t.sibling}return null}var Jm=gn.unstable_scheduleCallback,fh=gn.unstable_cancelCallback,d_=gn.unstable_shouldYield,f_=gn.unstable_requestPaint,St=gn.unstable_now,h_=gn.unstable_getCurrentPriorityLevel,qd=gn.unstable_ImmediatePriority,eg=gn.unstable_UserBlockingPriority,sl=gn.unstable_NormalPriority,p_=gn.unstable_LowPriority,tg=gn.unstable_IdlePriority,Il=null,Kn=null;function m_(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Il,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:__,g_=Math.log,v_=Math.LN2;function __(t){return t>>>=0,t===0?32:31-(g_(t)/v_|0)|0}var Ja=64,eo=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=na(o):(s&=a,s!==0&&(i=na(s)))}else a=n&~r,a!==0?i=na(a):s!==0&&(i=na(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function x_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=x_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ng(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function S_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function $d(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function ig(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rg,Zd,sg,ag,og,yu=!1,to=[],ki=null,zi=null,Bi=null,Ma=new Map,Ea=new Map,Ii=[],M_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function E_(t,e,n,i,r){switch(e){case"focusin":return ki=Vs(ki,t,e,n,i,r),!0;case"dragenter":return zi=Vs(zi,t,e,n,i,r),!0;case"mouseover":return Bi=Vs(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ma.set(s,Vs(Ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,Vs(Ea.get(s)||null,t,e,n,i,r)),!0}return!1}function lg(t){var e=pr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zm(n),e!==null){t.blockedOn=e,og(t.priority,function(){sg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Su(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mu=i,n.target.dispatchEvent(i),mu=null}else return e=Ha(n),e!==null&&Zd(e),t.blockedOn=n,!1;e.shift()}return!0}function ph(t,e,n){Bo(t)&&n.delete(e)}function T_(){yu=!1,ki!==null&&Bo(ki)&&(ki=null),zi!==null&&Bo(zi)&&(zi=null),Bi!==null&&Bo(Bi)&&(Bi=null),Ma.forEach(ph),Ea.forEach(ph)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,yu||(yu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,T_)))}function Ta(t){function e(r){return Gs(r,t)}if(0<to.length){Gs(to[0],t);for(var n=1;n<to.length;n++){var i=to[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Gs(ki,t),zi!==null&&Gs(zi,t),Bi!==null&&Gs(Bi,t),Ma.forEach(e),Ea.forEach(e),n=0;n<Ii.length;n++)i=Ii[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ii.length&&(n=Ii[0],n.blockedOn===null);)lg(n),n.blockedOn===null&&Ii.shift()}var ds=Si.ReactCurrentBatchConfig,ol=!0;function w_(t,e,n,i){var r=et,s=ds.transition;ds.transition=null;try{et=1,Kd(t,e,n,i)}finally{et=r,ds.transition=s}}function A_(t,e,n,i){var r=et,s=ds.transition;ds.transition=null;try{et=4,Kd(t,e,n,i)}finally{et=r,ds.transition=s}}function Kd(t,e,n,i){if(ol){var r=Su(t,e,n,i);if(r===null)pc(t,e,i,ll,n),hh(t,i);else if(E_(r,t,e,n,i))i.stopPropagation();else if(hh(t,i),e&4&&-1<M_.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&rg(s),s=Su(t,e,n,i),s===null&&pc(t,e,i,ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pc(t,e,i,null,n)}}var ll=null;function Su(t,e,n,i){if(ll=null,t=Yd(i),t=pr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function cg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h_()){case qd:return 1;case eg:return 4;case sl:case p_:return 16;case tg:return 536870912;default:return 16}default:return 16}}var Fi=null,Qd=null,Ho=null;function ug(){if(Ho)return Ho;var t,e=Qd,n=e.length,i,r="value"in Fi?Fi.value:Fi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ho=r.slice(t,1<i?1-i:void 0)}function Vo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function mh(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:mh,this.isPropagationStopped=mh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jd=_n(Ps),Ba=_t({},Ps,{view:0,detail:0}),C_=_n(Ba),sc,ac,Ws,Dl=_t({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(sc=t.screenX-Ws.screenX,ac=t.screenY-Ws.screenY):ac=sc=0,Ws=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),gh=_n(Dl),R_=_t({},Dl,{dataTransfer:0}),b_=_n(R_),N_=_t({},Ba,{relatedTarget:0}),oc=_n(N_),P_=_t({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=_n(P_),I_=_t({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D_=_n(I_),U_=_t({},Ps,{data:0}),vh=_n(U_),F_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=k_[t])?!!e[t]:!1}function ef(){return z_}var B_=_t({},Ba,{key:function(t){if(t.key){var e=F_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H_=_n(B_),V_=_t({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_h=_n(V_),G_=_t({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),W_=_n(G_),j_=_t({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),X_=_n(j_),Y_=_t({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=_n(Y_),$_=[9,13,27,32],tf=gi&&"CompositionEvent"in window,la=null;gi&&"documentMode"in document&&(la=document.documentMode);var Z_=gi&&"TextEvent"in window&&!la,dg=gi&&(!tf||la&&8<la&&11>=la),xh=" ",yh=!1;function fg(t,e){switch(t){case"keyup":return $_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function K_(t,e){switch(t){case"compositionend":return hg(e);case"keypress":return e.which!==32?null:(yh=!0,xh);case"textInput":return t=e.data,t===xh&&yh?null:t;default:return null}}function Q_(t,e){if(Kr)return t==="compositionend"||!tf&&fg(t,e)?(t=ug(),Ho=Qd=Fi=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dg&&e.locale!=="ko"?null:e.data;default:return null}}var J_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J_[t.type]:e==="textarea"}function pg(t,e,n,i){jm(i),e=cl(e,"onChange"),0<e.length&&(n=new Jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ca=null,wa=null;function ex(t){wg(t,0)}function Ul(t){var e=es(t);if(km(e))return t}function tx(t,e){if(t==="change")return e}var mg=!1;if(gi){var lc;if(gi){var cc="oninput"in document;if(!cc){var Mh=document.createElement("div");Mh.setAttribute("oninput","return;"),cc=typeof Mh.oninput=="function"}lc=cc}else lc=!1;mg=lc&&(!document.documentMode||9<document.documentMode)}function Eh(){ca&&(ca.detachEvent("onpropertychange",gg),wa=ca=null)}function gg(t){if(t.propertyName==="value"&&Ul(wa)){var e=[];pg(e,wa,t,Yd(t)),$m(ex,e)}}function nx(t,e,n){t==="focusin"?(Eh(),ca=e,wa=n,ca.attachEvent("onpropertychange",gg)):t==="focusout"&&Eh()}function ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(wa)}function rx(t,e){if(t==="click")return Ul(e)}function sx(t,e){if(t==="input"||t==="change")return Ul(e)}function ax(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:ax;function Aa(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!iu.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function Th(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wh(t,e){var n=Th(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Th(n)}}function vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _g(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ox(t){var e=_g(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vg(n.ownerDocument.documentElement,n)){if(i!==null&&nf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wh(n,s);var a=wh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lx=gi&&"documentMode"in document&&11>=document.documentMode,Qr=null,Mu=null,ua=null,Eu=!1;function Ah(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eu||Qr==null||Qr!==nl(i)||(i=Qr,"selectionStart"in i&&nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ua&&Aa(ua,i)||(ua=i,i=cl(Mu,"onSelect"),0<i.length&&(e=new Jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},uc={},xg={};gi&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Fl(t){if(uc[t])return uc[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xg)return uc[t]=e[n];return t}var yg=Fl("animationend"),Sg=Fl("animationiteration"),Mg=Fl("animationstart"),Eg=Fl("transitionend"),Tg=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){Tg.set(t,e),br(e,[t])}for(var dc=0;dc<Ch.length;dc++){var fc=Ch[dc],cx=fc.toLowerCase(),ux=fc[0].toUpperCase()+fc.slice(1);Qi(cx,"on"+ux)}Qi(yg,"onAnimationEnd");Qi(Sg,"onAnimationIteration");Qi(Mg,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(Eg,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Rh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,c_(i,e,void 0,t),t.currentTarget=null}function wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Rh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Rh(r,o,c),s=l}}}if(rl)throw t=_u,rl=!1,_u=null,t}function ut(t,e){var n=e[Ru];n===void 0&&(n=e[Ru]=new Set);var i=t+"__bubble";n.has(i)||(Ag(e,t,2,!1),n.add(i))}function hc(t,e,n){var i=0;e&&(i|=4),Ag(n,t,i,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[ro]){t[ro]=!0,Im.forEach(function(n){n!=="selectionchange"&&(dx.has(n)||hc(n,!1,t),hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,hc("selectionchange",!1,e))}}function Ag(t,e,n,i){switch(cg(e)){case 1:var r=w_;break;case 4:r=A_;break;default:r=Kd}n=r.bind(null,e,n,t),r=void 0,!vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=pr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}$m(function(){var c=s,f=Yd(n),h=[];e:{var d=Tg.get(t);if(d!==void 0){var p=Jd,_=t;switch(t){case"keypress":if(Vo(n)===0)break e;case"keydown":case"keyup":p=H_;break;case"focusin":_="focus",p=oc;break;case"focusout":_="blur",p=oc;break;case"beforeblur":case"afterblur":p=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=b_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=W_;break;case yg:case Sg:case Mg:p=L_;break;case Eg:p=X_;break;case"scroll":p=C_;break;case"wheel":p=q_;break;case"copy":case"cut":case"paste":p=D_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=_h}var S=(e&4)!==0,v=!S&&t==="scroll",u=S?d!==null?d+"Capture":null:d;S=[];for(var m=c,x;m!==null;){x=m;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=Sa(m,u),y!=null&&S.push(Ra(m,y,x)))),v)break;m=m.return}0<S.length&&(d=new p(d,_,null,n,f),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==mu&&(_=n.relatedTarget||n.fromElement)&&(pr(_)||_[vi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?pr(_):null,_!==null&&(v=Nr(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(S=gh,y="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=_h,y="onPointerLeave",u="onPointerEnter",m="pointer"),v=p==null?d:es(p),x=_==null?d:es(_),d=new S(y,m+"leave",p,n,f),d.target=v,d.relatedTarget=x,y=null,pr(f)===c&&(S=new S(u,m+"enter",_,n,f),S.target=x,S.relatedTarget=v,y=S),v=y,p&&_)t:{for(S=p,u=_,m=0,x=S;x;x=Ir(x))m++;for(x=0,y=u;y;y=Ir(y))x++;for(;0<m-x;)S=Ir(S),m--;for(;0<x-m;)u=Ir(u),x--;for(;m--;){if(S===u||u!==null&&S===u.alternate)break t;S=Ir(S),u=Ir(u)}S=null}else S=null;p!==null&&bh(h,d,p,S,!1),_!==null&&v!==null&&bh(h,v,_,S,!0)}}e:{if(d=c?es(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var N=tx;else if(Sh(d))if(mg)N=sx;else{N=ix;var C=nx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=rx);if(N&&(N=N(t,c))){pg(h,N,n,f);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&uu(d,"number",d.value)}switch(C=c?es(c):window,t){case"focusin":(Sh(C)||C.contentEditable==="true")&&(Qr=C,Mu=c,ua=null);break;case"focusout":ua=Mu=Qr=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Ah(h,n,f);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":Ah(h,n,f)}var A;if(tf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Kr?fg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(dg&&n.locale!=="ko"&&(Kr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Kr&&(A=ug()):(Fi=f,Qd="value"in Fi?Fi.value:Fi.textContent,Kr=!0)),C=cl(c,b),0<C.length&&(b=new vh(b,t,null,n,f),h.push({event:b,listeners:C}),A?b.data=A:(A=hg(n),A!==null&&(b.data=A)))),(A=Z_?K_(t,n):Q_(t,n))&&(c=cl(c,"onBeforeInput"),0<c.length&&(f=new vh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=A))}wg(h,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Sa(n,s),l!=null&&a.unshift(Ra(n,l,o))):r||(l=Sa(n,s),l!=null&&a.push(Ra(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var fx=/\r\n?/g,hx=/\u0000|\uFFFD/g;function Nh(t){return(typeof t=="string"?t:""+t).replace(fx,`
`).replace(hx,"")}function so(t,e,n){if(e=Nh(e),Nh(t)!==e&&n)throw Error(re(425))}function ul(){}var Tu=null,wu=null;function Au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph<"u"?function(t){return Ph.resolve(null).then(t).catch(gx)}:Cu;function gx(t){setTimeout(function(){throw t})}function mc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ta(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ls,ba="__reactProps$"+Ls,vi="__reactContainer$"+Ls,Ru="__reactEvents$"+Ls,vx="__reactListeners$"+Ls,_x="__reactHandles$"+Ls;function pr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lh(t);t!==null;){if(n=t[qn])return n;t=Lh(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[qn]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Ol(t){return t[ba]||null}var bu=[],ts=-1;function Ji(t){return{current:t}}function dt(t){0>ts||(t.current=bu[ts],bu[ts]=null,ts--)}function at(t,e){ts++,bu[ts]=t.current,t.current=e}var $i={},Xt=Ji($i),nn=Ji(!1),Mr=$i;function _s(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function dl(){dt(nn),dt(Xt)}function Ih(t,e,n){if(Xt.current!==$i)throw Error(re(168));at(Xt,e),at(nn,n)}function Cg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,n_(t)||"Unknown",r));return _t({},n,i)}function fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Mr=Xt.current,at(Xt,t),at(nn,nn.current),!0}function Dh(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Cg(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,dt(nn),dt(Xt),at(Xt,t)):dt(nn),at(nn,n)}var ci=null,kl=!1,gc=!1;function Rg(t){ci===null?ci=[t]:ci.push(t)}function xx(t){kl=!0,Rg(t)}function er(){if(!gc&&ci!==null){gc=!0;var t=0,e=et;try{var n=ci;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ci=null,kl=!1}catch(r){throw ci!==null&&(ci=ci.slice(t+1)),Jm(qd,er),r}finally{et=e,gc=!1}}return null}var ns=[],is=0,hl=null,pl=0,Mn=[],En=0,Er=null,ui=1,di="";function lr(t,e){ns[is++]=pl,ns[is++]=hl,hl=t,pl=e}function bg(t,e,n){Mn[En++]=ui,Mn[En++]=di,Mn[En++]=Er,Er=t;var i=ui;t=di;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ui=1<<32-Bn(e)+r|n<<r|i,di=s+t}else ui=1<<s|n<<r|i,di=t}function rf(t){t.return!==null&&(lr(t,1),bg(t,1,0))}function sf(t){for(;t===hl;)hl=ns[--is],ns[is]=null,pl=ns[--is],ns[is]=null;for(;t===Er;)Er=Mn[--En],Mn[En]=null,di=Mn[--En],Mn[En]=null,ui=Mn[--En],Mn[En]=null}var mn=null,pn=null,pt=!1,On=null;function Ng(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:ui,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Nu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pu(t){if(pt){var e=pn;if(e){var n=e;if(!Uh(t,e)){if(Nu(t))throw Error(re(418));e=Hi(n.nextSibling);var i=mn;e&&Uh(t,e)?Ng(i,n):(t.flags=t.flags&-4097|2,pt=!1,mn=t)}}else{if(Nu(t))throw Error(re(418));t.flags=t.flags&-4097|2,pt=!1,mn=t}}}function Fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function ao(t){if(t!==mn)return!1;if(!pt)return Fh(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Au(t.type,t.memoizedProps)),e&&(e=pn)){if(Nu(t))throw Pg(),Error(re(418));for(;e;)Ng(t,e),e=Hi(e.nextSibling)}if(Fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Hi(t.stateNode.nextSibling):null;return!0}function Pg(){for(var t=pn;t;)t=Hi(t.nextSibling)}function xs(){pn=mn=null,pt=!1}function af(t){On===null?On=[t]:On.push(t)}var yx=Si.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function oo(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oh(t){var e=t._init;return e(t._payload)}function Lg(t){function e(u,m){if(t){var x=u.deletions;x===null?(u.deletions=[m],u.flags|=16):x.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=ji(u,m),u.index=0,u.sibling=null,u}function s(u,m,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<m?(u.flags|=2,m):x):(u.flags|=2,m)):(u.flags|=1048576,m)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,m,x,y){return m===null||m.tag!==6?(m=Ec(x,u.mode,y),m.return=u,m):(m=r(m,x),m.return=u,m)}function l(u,m,x,y){var N=x.type;return N===Zr?f(u,m,x.props.children,y,x.key):m!==null&&(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Pi&&Oh(N)===m.type)?(y=r(m,x.props),y.ref=js(u,m,x),y.return=u,y):(y=$o(x.type,x.key,x.props,null,u.mode,y),y.ref=js(u,m,x),y.return=u,y)}function c(u,m,x,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Tc(x,u.mode,y),m.return=u,m):(m=r(m,x.children||[]),m.return=u,m)}function f(u,m,x,y,N){return m===null||m.tag!==7?(m=Sr(x,u.mode,y,N),m.return=u,m):(m=r(m,x),m.return=u,m)}function h(u,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ec(""+m,u.mode,x),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Za:return x=$o(m.type,m.key,m.props,null,u.mode,x),x.ref=js(u,null,m),x.return=u,x;case $r:return m=Tc(m,u.mode,x),m.return=u,m;case Pi:var y=m._init;return h(u,y(m._payload),x)}if(ta(m)||Bs(m))return m=Sr(m,u.mode,x,null),m.return=u,m;oo(u,m)}return null}function d(u,m,x,y){var N=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return N!==null?null:o(u,m,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:return x.key===N?l(u,m,x,y):null;case $r:return x.key===N?c(u,m,x,y):null;case Pi:return N=x._init,d(u,m,N(x._payload),y)}if(ta(x)||Bs(x))return N!==null?null:f(u,m,x,y,null);oo(u,x)}return null}function p(u,m,x,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,o(m,u,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:return u=u.get(y.key===null?x:y.key)||null,l(m,u,y,N);case $r:return u=u.get(y.key===null?x:y.key)||null,c(m,u,y,N);case Pi:var C=y._init;return p(u,m,x,C(y._payload),N)}if(ta(y)||Bs(y))return u=u.get(x)||null,f(m,u,y,N,null);oo(m,y)}return null}function _(u,m,x,y){for(var N=null,C=null,A=m,b=m=0,w=null;A!==null&&b<x.length;b++){A.index>b?(w=A,A=null):w=A.sibling;var M=d(u,A,x[b],y);if(M===null){A===null&&(A=w);break}t&&A&&M.alternate===null&&e(u,A),m=s(M,m,b),C===null?N=M:C.sibling=M,C=M,A=w}if(b===x.length)return n(u,A),pt&&lr(u,b),N;if(A===null){for(;b<x.length;b++)A=h(u,x[b],y),A!==null&&(m=s(A,m,b),C===null?N=A:C.sibling=A,C=A);return pt&&lr(u,b),N}for(A=i(u,A);b<x.length;b++)w=p(A,u,b,x[b],y),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?b:w.key),m=s(w,m,b),C===null?N=w:C.sibling=w,C=w);return t&&A.forEach(function(P){return e(u,P)}),pt&&lr(u,b),N}function S(u,m,x,y){var N=Bs(x);if(typeof N!="function")throw Error(re(150));if(x=N.call(x),x==null)throw Error(re(151));for(var C=N=null,A=m,b=m=0,w=null,M=x.next();A!==null&&!M.done;b++,M=x.next()){A.index>b?(w=A,A=null):w=A.sibling;var P=d(u,A,M.value,y);if(P===null){A===null&&(A=w);break}t&&A&&P.alternate===null&&e(u,A),m=s(P,m,b),C===null?N=P:C.sibling=P,C=P,A=w}if(M.done)return n(u,A),pt&&lr(u,b),N;if(A===null){for(;!M.done;b++,M=x.next())M=h(u,M.value,y),M!==null&&(m=s(M,m,b),C===null?N=M:C.sibling=M,C=M);return pt&&lr(u,b),N}for(A=i(u,A);!M.done;b++,M=x.next())M=p(A,u,b,M.value,y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?b:M.key),m=s(M,m,b),C===null?N=M:C.sibling=M,C=M);return t&&A.forEach(function(V){return e(u,V)}),pt&&lr(u,b),N}function v(u,m,x,y){if(typeof x=="object"&&x!==null&&x.type===Zr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:e:{for(var N=x.key,C=m;C!==null;){if(C.key===N){if(N=x.type,N===Zr){if(C.tag===7){n(u,C.sibling),m=r(C,x.props.children),m.return=u,u=m;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Pi&&Oh(N)===C.type){n(u,C.sibling),m=r(C,x.props),m.ref=js(u,C,x),m.return=u,u=m;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===Zr?(m=Sr(x.props.children,u.mode,y,x.key),m.return=u,u=m):(y=$o(x.type,x.key,x.props,null,u.mode,y),y.ref=js(u,m,x),y.return=u,u=y)}return a(u);case $r:e:{for(C=x.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(u,m.sibling),m=r(m,x.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Tc(x,u.mode,y),m.return=u,u=m}return a(u);case Pi:return C=x._init,v(u,m,C(x._payload),y)}if(ta(x))return _(u,m,x,y);if(Bs(x))return S(u,m,x,y);oo(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,x),m.return=u,u=m):(n(u,m),m=Ec(x,u.mode,y),m.return=u,u=m),a(u)):n(u,m)}return v}var ys=Lg(!0),Ig=Lg(!1),ml=Ji(null),gl=null,rs=null,of=null;function lf(){of=rs=gl=null}function cf(t){var e=ml.current;dt(ml),t._currentValue=e}function Lu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){gl=t,of=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(gl===null)throw Error(re(308));rs=t,gl.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var mr=null;function uf(t){mr===null?mr=[t]:mr.push(t)}function Dg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,uf(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Li=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,uf(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function Go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$d(t,n)}}function kh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vl(t,e,n,i){var r=t.updateQueue;Li=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(d=e,p=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=_t({},h,d);break e;case 2:Li=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=a,t.lanes=a,t.memoizedState=h}}function zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Va={},Qn=Ji(Va),Na=Ji(Va),Pa=Ji(Va);function gr(t){if(t===Va)throw Error(re(174));return t}function ff(t,e){switch(at(Pa,e),at(Na,t),at(Qn,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fu(e,t)}dt(Qn),at(Qn,e)}function Ss(){dt(Qn),dt(Na),dt(Pa)}function Fg(t){gr(Pa.current);var e=gr(Qn.current),n=fu(e,t.type);e!==n&&(at(Na,t),at(Qn,n))}function hf(t){Na.current===t&&(dt(Qn),dt(Na))}var gt=Ji(0);function _l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function pf(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var Wo=Si.ReactCurrentDispatcher,_c=Si.ReactCurrentBatchConfig,Tr=0,vt=null,At=null,Pt=null,xl=!1,da=!1,La=0,Sx=0;function zt(){throw Error(re(321))}function mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function gf(t,e,n,i,r,s){if(Tr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wo.current=t===null||t.memoizedState===null?wx:Ax,t=n(i,r),da){s=0;do{if(da=!1,La=0,25<=s)throw Error(re(301));s+=1,Pt=At=null,e.updateQueue=null,Wo.current=Cx,t=n(i,r)}while(da)}if(Wo.current=yl,e=At!==null&&At.next!==null,Tr=0,Pt=At=vt=null,xl=!1,e)throw Error(re(300));return t}function vf(){var t=La!==0;return La=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?vt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Rn(){if(At===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Pt===null?vt.memoizedState:Pt.next;if(e!==null)Pt=e,At=t;else{if(t===null)throw Error(re(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Pt===null?vt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Ia(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Tr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,vt.lanes|=f,wr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Gn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Gn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Og(){}function kg(t,e){var n=vt,i=Rn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,_f(Hg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Da(9,Bg.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(re(349));Tr&30||zg(n,e,r)}return r}function zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bg(t,e,n,i){e.value=n,e.getSnapshot=i,Vg(e)&&Gg(t)}function Hg(t,e,n){return n(function(){Vg(e)&&Gg(t)})}function Vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function Gg(t){var e=_i(t,1);e!==null&&Hn(e,t,1,-1)}function Bh(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=Tx.bind(null,vt,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Wg(){return Rn().memoizedState}function jo(t,e,n,i){var r=Xn();vt.flags|=t,r.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function zl(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(At!==null){var a=At.memoizedState;if(s=a.destroy,i!==null&&mf(i,a.deps)){r.memoizedState=Da(e,n,s,i);return}}vt.flags|=t,r.memoizedState=Da(1|e,n,s,i)}function Hh(t,e){return jo(8390656,8,t,e)}function _f(t,e){return zl(2048,8,t,e)}function jg(t,e){return zl(4,2,t,e)}function Xg(t,e){return zl(4,4,t,e)}function Yg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,zl(4,4,Yg.bind(null,e,t),n)}function xf(){}function $g(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kg(t,e,n){return Tr&21?(Gn(n,e)||(n=ng(),vt.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function Mx(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=_c.transition;_c.transition={};try{t(!1),e()}finally{et=n,_c.transition=i}}function Qg(){return Rn().memoizedState}function Ex(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jg(t))ev(e,n);else if(n=Dg(t,e,n,i),n!==null){var r=Zt();Hn(n,t,i,r),tv(n,e,i)}}function Tx(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jg(t))ev(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Gn(o,a)){var l=e.interleaved;l===null?(r.next=r,uf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dg(t,e,r,i),n!==null&&(r=Zt(),Hn(n,t,i,r),tv(n,e,i))}}function Jg(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function ev(t,e){da=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$d(t,n)}}var yl={readContext:Cn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},wx={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Hh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jo(4194308,4,Yg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return jo(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ex.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Bh,useDebugValue:xf,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Bh(!1),e=t[0];return t=Mx.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=Xn();if(pt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Lt===null)throw Error(re(349));Tr&30||zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Hh(Hg.bind(null,i,s,t),[t]),i.flags|=2048,Da(9,Bg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Lt.identifierPrefix;if(pt){var n=di,i=ui;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ax={readContext:Cn,useCallback:$g,useContext:Cn,useEffect:_f,useImperativeHandle:qg,useInsertionEffect:jg,useLayoutEffect:Xg,useMemo:Zg,useReducer:xc,useRef:Wg,useState:function(){return xc(Ia)},useDebugValue:xf,useDeferredValue:function(t){var e=Rn();return Kg(e,At.memoizedState,t)},useTransition:function(){var t=xc(Ia)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Og,useSyncExternalStore:kg,useId:Qg,unstable_isNewReconciler:!1},Cx={readContext:Cn,useCallback:$g,useContext:Cn,useEffect:_f,useImperativeHandle:qg,useInsertionEffect:jg,useLayoutEffect:Xg,useMemo:Zg,useReducer:yc,useRef:Wg,useState:function(){return yc(Ia)},useDebugValue:xf,useDeferredValue:function(t){var e=Rn();return At===null?e.memoizedState=t:Kg(e,At.memoizedState,t)},useTransition:function(){var t=yc(Ia)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Og,useSyncExternalStore:kg,useId:Qg,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Iu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Wi(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Hn(e,t,r,i),Go(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Wi(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Hn(e,t,r,i),Go(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Wi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(Hn(e,t,i,n),Go(e,t,i))}};function Vh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,i)||!Aa(r,s):!0}function nv(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=rn(e)?Mr:Xt.current,i=e.contextTypes,s=(i=i!=null)?_s(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bl.enqueueReplaceState(e,e.state,null)}function Du(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},df(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=rn(e)?Mr:Xt.current,r.context=_s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Iu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bl.enqueueReplaceState(r,r.state,null),vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",i=e;do n+=t_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rx=typeof WeakMap=="function"?WeakMap:Map;function iv(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ml||(Ml=!0,ju=i),Uu(t,e)},n}function rv(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uu(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Wh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Rx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Vx.bind(null,t,e,n),e.then(t,t))}function jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var bx=Si.ReactCurrentOwner,tn=!1;function $t(t,e,n,i){e.child=t===null?Ig(e,null,n,i):ys(e,t.child,n,i)}function Yh(t,e,n,i,r){n=n.render;var s=e.ref;return fs(e,r),i=gf(t,e,n,i,s,r),n=vf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(pt&&n&&rf(e),e.flags|=1,$t(t,e,i,r),e.child)}function qh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sv(t,e,s,i,r)):(t=$o(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(a,i)&&t.ref===e.ref)return xi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function sv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Aa(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,xi(t,e,r)}return Fu(t,e,n,i,r)}function av(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(as,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(as,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(as,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(as,fn),fn|=i;return $t(t,e,r,n),e.child}function ov(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fu(t,e,n,i,r){var s=rn(n)?Mr:Xt.current;return s=_s(e,s),fs(e,r),n=gf(t,e,n,i,s,r),i=vf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(pt&&i&&rf(e),e.flags|=1,$t(t,e,n,r),e.child)}function $h(t,e,n,i,r){if(rn(n)){var s=!0;fl(e)}else s=!1;if(fs(e,r),e.stateNode===null)Xo(t,e),nv(e,n,i),Du(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=rn(n)?Mr:Xt.current,c=_s(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Gh(e,a,i,c),Li=!1;var d=e.memoizedState;a.state=d,vl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||nn.current||Li?(typeof f=="function"&&(Iu(e,n,f,i),l=e.memoizedState),(o=Li||Vh(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ug(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Un(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=rn(n)?Mr:Xt.current,l=_s(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&Gh(e,a,i,l),Li=!1,d=e.memoizedState,a.state=d,vl(e,i,a,r);var _=e.memoizedState;o!==h||d!==_||nn.current||Li?(typeof p=="function"&&(Iu(e,n,p,i),_=e.memoizedState),(c=Li||Vh(e,n,c,i,d,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ou(t,e,n,i,s,r)}function Ou(t,e,n,i,r,s){ov(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Dh(e,n,!1),xi(t,e,s);i=e.stateNode,bx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,o,s)):$t(t,e,o,s),e.memoizedState=i.state,r&&Dh(e,n,!0),e.child}function lv(t){var e=t.stateNode;e.pendingContext?Ih(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ih(t,e.context,!1),ff(t,e.containerInfo)}function Zh(t,e,n,i,r){return xs(),af(r),e.flags|=256,$t(t,e,n,i),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function cv(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(gt,r&1),t===null)return Pu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Gl(a,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zu(n),e.memoizedState=ku,t):yf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Nx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ji(o,s):(s=Sr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?zu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ku,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yf(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lo(t,e,n,i){return i!==null&&af(i),ys(e,t.child,null,n),t=yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Sc(Error(re(422))),lo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gl({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ys(e,t.child,null,a),e.child.memoizedState=zu(a),e.memoizedState=ku,s);if(!(e.mode&1))return lo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=Sc(s,i,void 0),lo(t,e,a,i)}if(o=(a&t.childLanes)!==0,tn||o){if(i=Lt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),Hn(i,t,r,-1))}return Af(),i=Sc(Error(re(421))),lo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Gx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Hi(r.nextSibling),mn=e,pt=!0,On=null,t!==null&&(Mn[En++]=ui,Mn[En++]=di,Mn[En++]=Er,ui=t.id,di=t.overflow,Er=e),e=yf(e,i.children),e.flags|=4096,e)}function Kh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Lu(t.return,e,n)}function Mc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function uv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,n,e);else if(t.tag===19)Kh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&_l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&_l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mc(e,!0,n,null,s);break;case"together":Mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Px(t,e,n){switch(e.tag){case 3:lv(e),xs();break;case 5:Fg(e);break;case 1:rn(e.type)&&fl(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?cv(t,e,n):(at(gt,gt.current&1),t=xi(t,e,n),t!==null?t.sibling:null);at(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return uv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,av(t,e,n)}return xi(t,e,n)}var dv,Bu,fv,hv;dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bu=function(){};fv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(Qn.current);var s=null;switch(n){case"input":r=lu(t,r),i=lu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=du(t,r),i=du(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ul)}hu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};hv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xs(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Lx(t,e,n){var i=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return rn(e.type)&&dl(),Bt(e),null;case 3:return i=e.stateNode,Ss(),dt(nn),dt(Xt),pf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(qu(On),On=null))),Bu(t,e),Bt(e),null;case 5:hf(e);var r=gr(Pa.current);if(n=e.type,t!==null&&e.stateNode!=null)fv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Bt(e),null}if(t=gr(Qn.current),ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<ia.length;r++)ut(ia[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":ah(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":lh(i,s),ut("invalid",i)}hu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",""+o]):xa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":Ka(i),oh(i,s,!0);break;case"textarea":Ka(i),ch(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[qn]=e,t[ba]=i,dv(t,e,!1,!1),e.stateNode=t;e:{switch(a=pu(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<ia.length;r++)ut(ia[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":ah(t,i),r=lu(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ut("invalid",t);break;case"textarea":lh(t,i),r=du(t,i),ut("invalid",t);break;default:r=i}hu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Wm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&Gd(t,s,l,a))}switch(n){case"input":Ka(t),oh(t,i,!1);break;case"textarea":Ka(t),ch(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)hv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=gr(Pa.current),gr(Qn.current),ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:so(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Bt(e),null;case 13:if(dt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&pn!==null&&e.mode&1&&!(e.flags&128))Pg(),xs(),e.flags|=98560,s=!1;else if(s=ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[qn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else On!==null&&(qu(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Ct===0&&(Ct=3):Af())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Ss(),Bu(t,e),t===null&&Ca(e.stateNode.containerInfo),Bt(e),null;case 10:return cf(e.type._context),Bt(e),null;case 17:return rn(e.type)&&dl(),Bt(e),null;case 19:if(dt(gt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Xs(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=_l(t),a!==null){for(e.flags|=128,Xs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Es&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304)}else{if(!i)if(t=_l(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return Bt(e),null}else 2*St()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=gt.current,at(gt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return wf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Ix(t,e){switch(sf(e),e.tag){case 1:return rn(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),dt(nn),dt(Xt),pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hf(e),null;case 13:if(dt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(gt),null;case 4:return Ss(),null;case 10:return cf(e.type._context),null;case 22:case 23:return wf(),null;case 24:return null;default:return null}}var co=!1,Wt=!1,Dx=typeof WeakSet=="function"?WeakSet:Set,ve=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Hu(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Qh=!1;function Ux(t,e){if(Tu=ol,t=_g(),nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:t,selectionRange:n},ol=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,v=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Un(e.type,S),v);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){yt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return _=Qh,Qh=!1,_}function fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hu(e,n,s)}r=r.next}while(r!==i)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pv(t){var e=t.alternate;e!==null&&(t.alternate=null,pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[ba],delete e[Ru],delete e[vx],delete e[_x])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mv(t){return t.tag===5||t.tag===3||t.tag===4}function Jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(t=t.child,t!==null))for(Gu(t,e,n),t=t.sibling;t!==null;)Gu(t,e,n),t=t.sibling}function Wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Ut=null,Fn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)gv(t,e,n),n=n.sibling}function gv(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:Wt||ss(n,e);case 6:var i=Ut,r=Fn;Ut=null,Ti(t,e,n),Ut=i,Fn=r,Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?mc(t.parentNode,n):t.nodeType===1&&mc(t,n),Ta(t)):mc(Ut,n.stateNode));break;case 4:i=Ut,r=Fn,Ut=n.stateNode.containerInfo,Fn=!0,Ti(t,e,n),Ut=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Hu(n,e,a),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Wt&&(ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ti(t,e,n),Wt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dx),e.forEach(function(i){var r=Wx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,Fn=!1;break e;case 3:Ut=o.stateNode.containerInfo,Fn=!0;break e;case 4:Ut=o.stateNode.containerInfo,Fn=!0;break e}o=o.return}if(Ut===null)throw Error(re(160));gv(s,a,r),Ut=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vv(e,t),e=e.sibling}function vv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),jn(t),i&4){try{fa(3,t,t.return),Hl(3,t)}catch(S){yt(t,t.return,S)}try{fa(5,t,t.return)}catch(S){yt(t,t.return,S)}}break;case 1:Pn(e,t),jn(t),i&512&&n!==null&&ss(n,n.return);break;case 5:if(Pn(e,t),jn(t),i&512&&n!==null&&ss(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(S){yt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&zm(r,s),pu(o,a);var c=pu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Wm(r,h):f==="dangerouslySetInnerHTML"?Vm(r,h):f==="children"?ya(r,h):Gd(r,f,h,c)}switch(o){case"input":cu(r,s);break;case"textarea":Bm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ls(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ls(r,!!s.multiple,s.defaultValue,!0):ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(S){yt(t,t.return,S)}}break;case 6:if(Pn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){yt(t,t.return,S)}}break;case 3:if(Pn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(S){yt(t,t.return,S)}break;case 4:Pn(e,t),jn(t);break;case 13:Pn(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ef=St())),i&4&&ep(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||f,Pn(e,t),Wt=c):Pn(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ve=t,f=t.child;f!==null;){for(h=ve=f;ve!==null;){switch(d=ve,p=d.child,d.tag){case 0:case 11:case 14:case 15:fa(4,d,d.return);break;case 1:ss(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){yt(i,n,S)}}break;case 5:ss(d,d.return);break;case 22:if(d.memoizedState!==null){np(h);continue}}p!==null?(p.return=d,ve=p):np(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Gm("display",a))}catch(S){yt(t,t.return,S)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){yt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pn(e,t),jn(t),i&4&&ep(t);break;case 21:break;default:Pn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mv(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=Jh(t);Wu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Jh(t);Gu(t,o,a);break;default:throw Error(re(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fx(t,e,n){ve=t,_v(t)}function _v(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||co;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Wt;o=co;var c=Wt;if(co=a,(Wt=l)&&!c)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?ip(r):l!==null?(l.return=a,ve=l):ip(r);for(;s!==null;)ve=s,_v(s),s=s.sibling;ve=r,co=o,Wt=c}tp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):tp(t)}}function tp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Hl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ta(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Wt||e.flags&512&&Vu(e)}catch(d){yt(e,e.return,d)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function np(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function ip(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Vu(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{Vu(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var Ox=Math.ceil,Sl=Si.ReactCurrentDispatcher,Sf=Si.ReactCurrentOwner,wn=Si.ReactCurrentBatchConfig,qe=0,Lt=null,Tt=null,Ft=0,fn=0,as=Ji(0),Ct=0,Ua=null,wr=0,Vl=0,Mf=0,ha=null,en=null,Ef=0,Es=1/0,li=null,Ml=!1,ju=null,Gi=null,uo=!1,Oi=null,El=0,pa=0,Xu=null,Yo=-1,qo=0;function Zt(){return qe&6?St():Yo!==-1?Yo:Yo=St()}function Wi(t){return t.mode&1?qe&2&&Ft!==0?Ft&-Ft:yx.transition!==null?(qo===0&&(qo=ng()),qo):(t=et,t!==0||(t=window.event,t=t===void 0?16:cg(t.type)),t):1}function Hn(t,e,n,i){if(50<pa)throw pa=0,Xu=null,Error(re(185));za(t,n,i),(!(qe&2)||t!==Lt)&&(t===Lt&&(!(qe&2)&&(Vl|=n),Ct===4&&Di(t,Ft)),sn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Es=St()+500,kl&&er()))}function sn(t,e){var n=t.callbackNode;y_(t,e);var i=al(t,t===Lt?Ft:0);if(i===0)n!==null&&fh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fh(n),e===1)t.tag===0?xx(rp.bind(null,t)):Rg(rp.bind(null,t)),mx(function(){!(qe&6)&&er()}),n=null;else{switch(ig(i)){case 1:n=qd;break;case 4:n=eg;break;case 16:n=sl;break;case 536870912:n=tg;break;default:n=sl}n=Av(n,xv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xv(t,e){if(Yo=-1,qo=0,qe&6)throw Error(re(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=al(t,t===Lt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tl(t,i);else{e=i;var r=qe;qe|=2;var s=Sv();(Lt!==t||Ft!==e)&&(li=null,Es=St()+500,yr(t,e));do try{Bx();break}catch(o){yv(t,o)}while(!0);lf(),Sl.current=s,qe=r,Tt!==null?e=0:(Lt=null,Ft=0,e=Ct)}if(e!==0){if(e===2&&(r=xu(t),r!==0&&(i=r,e=Yu(t,r))),e===1)throw n=Ua,yr(t,0),Di(t,i),sn(t,St()),n;if(e===6)Di(t,i);else{if(r=t.current.alternate,!(i&30)&&!kx(r)&&(e=Tl(t,i),e===2&&(s=xu(t),s!==0&&(i=s,e=Yu(t,s))),e===1))throw n=Ua,yr(t,0),Di(t,i),sn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:cr(t,en,li);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=Ef+500-St(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cu(cr.bind(null,t,en,li),e);break}cr(t,en,li);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ox(i/1960))-i,10<i){t.timeoutHandle=Cu(cr.bind(null,t,en,li),i);break}cr(t,en,li);break;case 5:cr(t,en,li);break;default:throw Error(re(329))}}}return sn(t,St()),t.callbackNode===n?xv.bind(null,t):null}function Yu(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=en,en=n,e!==null&&qu(e)),t}function qu(t){en===null?en=t:en.push.apply(en,t)}function kx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~Mf,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function rp(t){if(qe&6)throw Error(re(327));hs();var e=al(t,0);if(!(e&1))return sn(t,St()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var i=xu(t);i!==0&&(e=i,n=Yu(t,i))}if(n===1)throw n=Ua,yr(t,0),Di(t,e),sn(t,St()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,en,li),sn(t,St()),null}function Tf(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Es=St()+500,kl&&er())}}function Ar(t){Oi!==null&&Oi.tag===0&&!(qe&6)&&hs();var e=qe;qe|=1;var n=wn.transition,i=et;try{if(wn.transition=null,et=1,t)return t()}finally{et=i,wn.transition=n,qe=e,!(qe&6)&&er()}}function wf(){fn=as.current,dt(as)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,px(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(sf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dl();break;case 3:Ss(),dt(nn),dt(Xt),pf();break;case 5:hf(i);break;case 4:Ss();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:cf(i.type._context);break;case 22:case 23:wf()}n=n.return}if(Lt=t,Tt=t=ji(t.current,null),Ft=fn=e,Ct=0,Ua=null,Mf=Vl=wr=0,en=ha=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}mr=null}return t}function yv(t,e){do{var n=Tt;try{if(lf(),Wo.current=yl,xl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}xl=!1}if(Tr=0,Pt=At=vt=null,da=!1,La=0,Sf.current=null,n===null||n.return===null){Ct=1,Ua=e,Tt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ft,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=jh(a);if(p!==null){p.flags&=-257,Xh(p,a,o,s,e),p.mode&1&&Wh(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){Wh(s,c,e),Af();break e}l=Error(re(426))}}else if(pt&&o.mode&1){var v=jh(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Xh(v,a,o,s,e),af(Ms(l,o));break e}}s=l=Ms(l,o),Ct!==4&&(Ct=2),ha===null?ha=[s]:ha.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=iv(s,l,e);kh(s,u);break e;case 1:o=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Gi===null||!Gi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=rv(s,o,e);kh(s,y);break e}}s=s.return}while(s!==null)}Ev(n)}catch(N){e=N,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function Sv(){var t=Sl.current;return Sl.current=yl,t===null?yl:t}function Af(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Lt===null||!(wr&268435455)&&!(Vl&268435455)||Di(Lt,Ft)}function Tl(t,e){var n=qe;qe|=2;var i=Sv();(Lt!==t||Ft!==e)&&(li=null,yr(t,e));do try{zx();break}catch(r){yv(t,r)}while(!0);if(lf(),qe=n,Sl.current=i,Tt!==null)throw Error(re(261));return Lt=null,Ft=0,Ct}function zx(){for(;Tt!==null;)Mv(Tt)}function Bx(){for(;Tt!==null&&!d_();)Mv(Tt)}function Mv(t){var e=wv(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?Ev(t):Tt=e,Sf.current=null}function Ev(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ix(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Tt=null;return}}else if(n=Lx(n,e,fn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Ct===0&&(Ct=5)}function cr(t,e,n){var i=et,r=wn.transition;try{wn.transition=null,et=1,Hx(t,e,n,i)}finally{wn.transition=r,et=i}return null}function Hx(t,e,n,i){do hs();while(Oi!==null);if(qe&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(S_(t,s),t===Lt&&(Tt=Lt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,Av(sl,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var a=et;et=1;var o=qe;qe|=4,Sf.current=null,Ux(t,n),vv(n,t),ox(wu),ol=!!Tu,wu=Tu=null,t.current=n,Fx(n),f_(),qe=o,et=a,wn.transition=s}else t.current=n;if(uo&&(uo=!1,Oi=t,El=r),s=t.pendingLanes,s===0&&(Gi=null),m_(n.stateNode),sn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ml)throw Ml=!1,t=ju,ju=null,t;return El&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===Xu?pa++:(pa=0,Xu=t):pa=0,er(),null}function hs(){if(Oi!==null){var t=ig(El),e=wn.transition,n=et;try{if(wn.transition=null,et=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,El=0,qe&6)throw Error(re(331));var r=qe;for(qe|=4,ve=t.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var f=ve;switch(f.tag){case 0:case 11:case 15:fa(8,f,s)}var h=f.child;if(h!==null)h.return=f,ve=h;else for(;ve!==null;){f=ve;var d=f.sibling,p=f.return;if(pv(f),f===c){ve=null;break}if(d!==null){d.return=p,ve=d;break}ve=p}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var v=S.sibling;S.sibling=null,S=v}while(S!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ve=u;break e}ve=s.return}}var m=t.current;for(ve=m;ve!==null;){a=ve;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ve=x;else e:for(a=m;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Hl(9,o)}}catch(N){yt(o,o.return,N)}if(o===a){ve=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ve=y;break e}ve=o.return}}if(qe=r,er(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Il,t)}catch{}i=!0}return i}finally{et=n,wn.transition=e}}return!1}function sp(t,e,n){e=Ms(n,e),e=iv(t,e,1),t=Vi(t,e,1),e=Zt(),t!==null&&(za(t,1,e),sn(t,e))}function yt(t,e,n){if(t.tag===3)sp(t,t,n);else for(;e!==null;){if(e.tag===3){sp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=Ms(n,t),t=rv(e,t,1),e=Vi(e,t,1),t=Zt(),e!==null&&(za(e,1,t),sn(e,t));break}}e=e.return}}function Vx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ft&n)===n&&(Ct===4||Ct===3&&(Ft&130023424)===Ft&&500>St()-Ef?yr(t,0):Mf|=n),sn(t,e)}function Tv(t,e){e===0&&(t.mode&1?(e=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):e=1);var n=Zt();t=_i(t,e),t!==null&&(za(t,e,n),sn(t,n))}function Gx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Tv(t,n)}function Wx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Tv(t,n)}var wv;wv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,Px(t,e,n);tn=!!(t.flags&131072)}else tn=!1,pt&&e.flags&1048576&&bg(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xo(t,e),t=e.pendingProps;var r=_s(e,Xt.current);fs(e,n),r=gf(null,e,i,t,r,n);var s=vf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,df(e),r.updater=Bl,e.stateNode=r,r._reactInternals=e,Du(e,i,t,n),e=Ou(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&rf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Xx(i),t=Un(i,t),r){case 0:e=Fu(null,e,i,t,n);break e;case 1:e=$h(null,e,i,t,n);break e;case 11:e=Yh(null,e,i,t,n);break e;case 14:e=qh(null,e,i,Un(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Fu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),$h(t,e,i,r,n);case 3:e:{if(lv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ug(t,e),vl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error(re(423)),e),e=Zh(t,e,i,n,r);break e}else if(i!==r){r=Ms(Error(re(424)),e),e=Zh(t,e,i,n,r);break e}else for(pn=Hi(e.stateNode.containerInfo.firstChild),mn=e,pt=!0,On=null,n=Ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),i===r){e=xi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return Fg(e),t===null&&Pu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Au(i,r)?a=null:s!==null&&Au(i,s)&&(e.flags|=32),ov(t,e),$t(t,e,a,n),e.child;case 6:return t===null&&Pu(e),null;case 13:return cv(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ys(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Yh(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,at(ml,i._currentValue),i._currentValue=a,s!==null)if(Gn(s.value,a)){if(s.children===r.children&&!nn.current){e=xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Lu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fs(e,n),r=Cn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),qh(t,e,i,r,n);case 15:return sv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Xo(t,e),e.tag=1,rn(i)?(t=!0,fl(e)):t=!1,fs(e,n),nv(e,i,r),Du(e,i,r,n),Ou(null,e,i,!0,t,n);case 19:return uv(t,e,n);case 22:return av(t,e,n)}throw Error(re(156,e.tag))};function Av(t,e){return Jm(t,e)}function jx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new jx(t,e,n,i)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xx(t){if(typeof t=="function")return Cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jd)return 11;if(t===Xd)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $o(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Cf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Zr:return Sr(n.children,r,s,e);case Wd:a=8,r|=8;break;case ru:return t=Tn(12,n,e,r|2),t.elementType=ru,t.lanes=s,t;case su:return t=Tn(13,n,e,r),t.elementType=su,t.lanes=s,t;case au:return t=Tn(19,n,e,r),t.elementType=au,t.lanes=s,t;case Fm:return Gl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dm:a=10;break e;case Um:a=9;break e;case jd:a=11;break e;case Xd:a=14;break e;case Pi:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Tn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Gl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=Fm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ec(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rf(t,e,n,i,r,s,a,o,l){return t=new Yx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(s),t}function qx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Cv(t){if(!t)return $i;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(rn(n))return Cg(t,n,e)}return e}function Rv(t,e,n,i,r,s,a,o,l){return t=Rf(n,i,!0,t,r,s,a,o,l),t.context=Cv(null),n=t.current,i=Zt(),r=Wi(n),s=pi(i,r),s.callback=e??null,Vi(n,s,r),t.current.lanes=r,za(t,r,i),sn(t,i),t}function Wl(t,e,n,i){var r=e.current,s=Zt(),a=Wi(r);return n=Cv(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,a),t!==null&&(Hn(t,r,a,s),Go(t,r,a)),a}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ap(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bf(t,e){ap(t,e),(t=t.alternate)&&ap(t,e)}function $x(){return null}var bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}jl.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Wl(t,e,null,null)};jl.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){Wl(null,t,null,null)}),e[vi]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ii.length&&e!==0&&e<Ii[n].priority;n++);Ii.splice(n,0,t),n===0&&lg(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function op(){}function Zx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=wl(a);s.call(c)}}var a=Rv(e,i,t,0,null,!1,!1,"",op);return t._reactRootContainer=a,t[vi]=a.current,Ca(t.nodeType===8?t.parentNode:t),Ar(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=wl(l);o.call(c)}}var l=Rf(t,0,!1,null,null,!1,!1,"",op);return t._reactRootContainer=l,t[vi]=l.current,Ca(t.nodeType===8?t.parentNode:t),Ar(function(){Wl(e,l,n,i)}),l}function Yl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=wl(a);o.call(l)}}Wl(e,a,t,r)}else a=Zx(n,e,t,r,i);return wl(a)}rg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&($d(e,n|1),sn(e,St()),!(qe&6)&&(Es=St()+500,er()))}break;case 13:Ar(function(){var i=_i(t,1);if(i!==null){var r=Zt();Hn(i,t,1,r)}}),bf(t,1)}};Zd=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=Zt();Hn(e,t,134217728,n)}bf(t,134217728)}};sg=function(t){if(t.tag===13){var e=Wi(t),n=_i(t,e);if(n!==null){var i=Zt();Hn(n,t,e,i)}bf(t,e)}};ag=function(){return et};og=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};gu=function(t,e,n){switch(e){case"input":if(cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ol(i);if(!r)throw Error(re(90));km(i),cu(i,r)}}}break;case"textarea":Bm(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};Ym=Tf;qm=Ar;var Kx={usingClientEntryPoint:!1,Events:[Ha,es,Ol,jm,Xm,Tf]},Ys={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qx={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Km(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||$x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Il=fo.inject(Qx),Kn=fo}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(re(200));return qx(t,e,null,n)};vn.createRoot=function(t,e){if(!Pf(t))throw Error(re(299));var n=!1,i="",r=bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rf(t,1,!1,null,null,n,!1,i,r),t[vi]=e.current,Ca(t.nodeType===8?t.parentNode:t),new Nf(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Km(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Ar(t)};vn.hydrate=function(t,e,n){if(!Xl(e))throw Error(re(200));return Yl(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=bv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Rv(e,null,t,1,n??null,r,!1,s,a),t[vi]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new jl(e)};vn.render=function(t,e,n){if(!Xl(e))throw Error(re(200));return Yl(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(re(40));return t._reactRootContainer?(Ar(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1};vn.unstable_batchedUpdates=Tf;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xl(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Yl(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function Nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv)}catch(t){console.error(t)}}Nv(),Nm.exports=vn;var Jx=Nm.exports,lp=Jx;nu.createRoot=lp.createRoot,nu.hydrateRoot=lp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lf="170",ey=0,cp=1,ty=2,Pv=1,Lv=2,oi=3,Zi=0,an=1,$n=2,Xi=0,ps=1,$u=2,up=3,dp=4,ny=5,fr=100,iy=101,ry=102,sy=103,ay=104,oy=200,ly=201,cy=202,uy=203,Zu=204,Ku=205,dy=206,fy=207,hy=208,py=209,my=210,gy=211,vy=212,_y=213,xy=214,Qu=0,Ju=1,ed=2,Ts=3,td=4,nd=5,id=6,rd=7,Iv=0,yy=1,Sy=2,Yi=0,My=1,Ey=2,Ty=3,Dv=4,wy=5,Ay=6,Cy=7,Uv=300,ws=301,As=302,sd=303,ad=304,ql=306,od=1e3,vr=1001,ld=1002,Vn=1003,Ry=1004,ho=1005,Zn=1006,wc=1007,_r=1008,yi=1009,Fv=1010,Ov=1011,Fa=1012,If=1013,Cr=1014,fi=1015,Ga=1016,Df=1017,Uf=1018,Cs=1020,kv=35902,zv=1021,Bv=1022,zn=1023,Hv=1024,Vv=1025,ms=1026,Rs=1027,Gv=1028,Ff=1029,Wv=1030,Of=1031,kf=1033,Zo=33776,Ko=33777,Qo=33778,Jo=33779,cd=35840,ud=35841,dd=35842,fd=35843,hd=36196,pd=37492,md=37496,gd=37808,vd=37809,_d=37810,xd=37811,yd=37812,Sd=37813,Md=37814,Ed=37815,Td=37816,wd=37817,Ad=37818,Cd=37819,Rd=37820,bd=37821,el=36492,Nd=36494,Pd=36495,jv=36283,Ld=36284,Id=36285,Dd=36286,by=3200,Ny=3201,Xv=0,Py=1,Ui="",Sn="srgb",Is="srgb-linear",$l="linear",nt="srgb",Dr=7680,fp=519,Ly=512,Iy=513,Dy=514,Yv=515,Uy=516,Fy=517,Oy=518,ky=519,hp=35044,pp="300 es",hi=2e3,Al=2001;class Ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mp=1234567;const ma=Math.PI/180,Oa=180/Math.PI;function Us(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function zf(t,e){return(t%e+e)%e}function zy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function By(t,e,n){return t!==e?(n-t)/(e-t):0}function ga(t,e,n){return(1-n)*t+n*e}function Hy(t,e,n,i){return ga(t,e,1-Math.exp(-n*i))}function Vy(t,e=1){return e-Math.abs(zf(t,e*2)-e)}function Gy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Wy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function jy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Xy(t,e){return t+Math.random()*(e-t)}function Yy(t){return t*(.5-Math.random())}function qy(t){t!==void 0&&(mp=t);let e=mp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $y(t){return t*ma}function Zy(t){return t*Oa}function Ky(t){return(t&t-1)===0&&t!==0}function Qy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Jy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function eS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*h,l*d,o*c);break;case"YZY":t.set(l*d,o*f,l*h,o*c);break;case"ZXZ":t.set(l*h,l*d,o*f,o*c);break;case"XZX":t.set(o*f,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*f,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Mt={DEG2RAD:ma,RAD2DEG:Oa,generateUUID:Us,clamp:jt,euclideanModulo:zf,mapLinear:zy,inverseLerp:By,lerp:ga,damp:Hy,pingpong:Vy,smoothstep:Gy,smootherstep:Wy,randInt:jy,randFloat:Xy,randFloatSpread:Yy,seededRandom:qy,degToRad:$y,radToDeg:Zy,isPowerOfTwo:Ky,ceilPowerOfTwo:Qy,floorPowerOfTwo:Jy,setQuaternionFromProperEuler:eS,normalize:Yt,denormalize:qr};class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],_=i[8],S=r[0],v=r[3],u=r[6],m=r[1],x=r[4],y=r[7],N=r[2],C=r[5],A=r[8];return s[0]=a*S+o*m+l*N,s[3]=a*v+o*x+l*C,s[6]=a*u+o*y+l*A,s[1]=c*S+f*m+h*N,s[4]=c*v+f*x+h*C,s[7]=c*u+f*y+h*A,s[2]=d*S+p*m+_*N,s[5]=d*v+p*x+_*C,s[8]=d*u+p*y+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,p=c*s-a*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ac.makeScale(e,n)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ac.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new Oe;function qv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tS(){const t=Cl("canvas");return t.style.display="block",t}const gp={};function ra(t){t in gp||(gp[t]=!0,console.warn(t))}function nS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function iS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===nt&&(t.r=mi(t.r),t.g=mi(t.g),t.b=mi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===nt&&(t.r=gs(t.r),t.g=gs(t.g),t.b=gs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ui?$l:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function mi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const vp=[.64,.33,.3,.6,.15,.06],_p=[.2126,.7152,.0722],xp=[.3127,.329],yp=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sp=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Is]:{primaries:vp,whitePoint:xp,transfer:$l,toXYZ:yp,fromXYZ:Sp,luminanceCoefficients:_p,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:vp,whitePoint:xp,transfer:nt,toXYZ:yp,fromXYZ:Sp,luminanceCoefficients:_p,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}});let Ur;class sS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=Cl("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mi(n[i]/255)*255):n[i]=mi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aS=0;class $v{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Cc(r[a].image)):s.push(Cc(r[a]))}else s=Cc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oS=0;class on extends Ds{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=vr,r=vr,s=Zn,a=_r,o=zn,l=yi,c=on.DEFAULT_ANISOTROPY,f=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Us(),this.name="",this.source=new $v(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case od:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case od:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Uv;on.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,n=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],_=l[9],S=l[2],v=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-S)<.01&&Math.abs(_-v)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+S)<.1&&Math.abs(_+v)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,N=(u+1)/2,C=(f+d)/4,A=(h+S)/4,b=(_+v)/4;return x>y&&x>N?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=A/i):y>N?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=b/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=A/s,r=b/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-_)*(v-_)+(h-S)*(h-S)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(v-_)/m,this.y=(h-S)/m,this.z=(d-f)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lS extends Ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new it(0,0,e,n),this.scissorTest=!1,this.viewport=new it(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $v(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends lS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zv extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cS extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=S;return}if(h!==S||l!==d||c!==p||f!==_){let v=1-o;const u=l*d+c*p+f*_+h*S,m=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const N=Math.sqrt(x),C=Math.atan2(N,u*m);v=Math.sin(v*C)/N,o=Math.sin(o*C)/N}const y=o*m;if(l=l*v+d*y,c=c*v+p*y,f=f*v+_*y,h=h*v+S*y,v===1-o){const N=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=N,c*=N,f*=N,h*=N}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+f*h+l*p-c*d,e[n+1]=l*_+f*d+c*h-o*p,e[n+2]=c*_+f*p+o*d-l*h,e[n+3]=f*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h-d*p*_;break;case"YXZ":this._x=d*f*h+c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h+d*p*_;break;case"ZXY":this._x=d*f*h-c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h-d*p*_;break;case"ZYX":this._x=d*f*h-c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h+d*p*_;break;case"YZX":this._x=d*f*h+c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h-d*p*_;break;case"XZY":this._x=d*f*h-c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new U,Mp=new Wa;class ja{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),mo.subVectors(this.max,qs),Fr.subVectors(e.a,qs),Or.subVectors(e.b,qs),kr.subVectors(e.c,qs),wi.subVectors(Or,Fr),Ai.subVectors(kr,Or),nr.subVectors(Fr,kr);let n=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-nr.z,nr.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,nr.z,0,-nr.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-nr.y,nr.x,0];return!bc(n,Fr,Or,kr,mo)||(n=[1,0,0,0,1,0,0,0,1],!bc(n,Fr,Or,kr,mo))?!1:(go.crossVectors(wi,Ai),n=[go.x,go.y,go.z],bc(n,Fr,Or,kr,mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new U,new U,new U,new U,new U,new U,new U,new U],Ln=new U,po=new ja,Fr=new U,Or=new U,kr=new U,wi=new U,Ai=new U,nr=new U,qs=new U,mo=new U,go=new U,ir=new U;function bc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ir.fromArray(t,s);const o=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=n.dot(ir),f=i.dot(ir);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const uS=new ja,$s=new U,Nc=new U;class Xa{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const n=$s.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Nc)),this.expandByPoint($s.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new U,Pc=new U,vo=new U,Ci=new U,Lc=new U,_o=new U,Ic=new U;class Bf{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pc.copy(e).add(n).multiplyScalar(.5),vo.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(Pc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(vo),o=Ci.dot(this.direction),l=-Ci.dot(vo),c=Ci.lengthSq(),f=Math.abs(1-a*a);let h,d,p,_;if(f>0)if(h=a*l-o,d=a*o-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const S=1/f;h*=S,d*=S,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Pc).addScaledVector(vo,d),p}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){Lc.subVectors(n,e),_o.subVectors(i,e),Ic.crossVectors(Lc,_o);let a=this.direction.dot(Ic),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const l=o*this.direction.dot(_o.crossVectors(Ci,_o));if(l<0)return null;const c=o*this.direction.dot(Lc.cross(Ci));if(c<0||l+c>a)return null;const f=-o*Ci.dot(Ic);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,a,o,l,c,f,h,d,p,_,S,v){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,p,_,S,v)}set(e,n,i,r,s,a,o,l,c,f,h,d,p,_,S,v){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=_,u[11]=S,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,p=a*h,_=o*f,S=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,_=c*f,S=c*h;n[0]=d+S*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=p*o-_,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,_=c*f,S=c*h;n[0]=d-S*o,n[4]=-a*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*f,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,p=a*h,_=o*f,S=o*h;n[0]=l*f,n[4]=_*c-p,n[8]=d*c+S,n[1]=l*h,n[5]=S*c+d,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,S=o*c;n[0]=l*f,n[4]=S-d*h,n[8]=_*h+p,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*h+_,n[10]=d-S*h}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,S=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+S,n[5]=a*f,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*f,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dS,e,fS)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ri.crossVectors(i,un),Ri.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ri.crossVectors(i,un)),Ri.normalize(),xo.crossVectors(un,Ri),r[0]=Ri.x,r[4]=xo.x,r[8]=un.x,r[1]=Ri.y,r[5]=xo.y,r[9]=un.y,r[2]=Ri.z,r[6]=xo.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],_=i[2],S=i[6],v=i[10],u=i[14],m=i[3],x=i[7],y=i[11],N=i[15],C=r[0],A=r[4],b=r[8],w=r[12],M=r[1],P=r[5],V=r[9],B=r[13],$=r[2],ee=r[6],Y=r[10],J=r[14],L=r[3],j=r[7],K=r[11],oe=r[15];return s[0]=a*C+o*M+l*$+c*L,s[4]=a*A+o*P+l*ee+c*j,s[8]=a*b+o*V+l*Y+c*K,s[12]=a*w+o*B+l*J+c*oe,s[1]=f*C+h*M+d*$+p*L,s[5]=f*A+h*P+d*ee+p*j,s[9]=f*b+h*V+d*Y+p*K,s[13]=f*w+h*B+d*J+p*oe,s[2]=_*C+S*M+v*$+u*L,s[6]=_*A+S*P+v*ee+u*j,s[10]=_*b+S*V+v*Y+u*K,s[14]=_*w+S*B+v*J+u*oe,s[3]=m*C+x*M+y*$+N*L,s[7]=m*A+x*P+y*ee+N*j,s[11]=m*b+x*V+y*Y+N*K,s[15]=m*w+x*B+y*J+N*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],_=e[3],S=e[7],v=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*p-i*l*p)+S*(+n*l*p-n*c*d+s*a*d-r*a*p+r*c*f-s*l*f)+v*(+n*c*h-n*o*p-s*a*h+i*a*p+s*o*f-i*c*f)+u*(-r*o*f-n*l*h+n*o*d+r*a*h-i*a*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],_=e[12],S=e[13],v=e[14],u=e[15],m=h*v*c-S*d*c+S*l*p-o*v*p-h*l*u+o*d*u,x=_*d*c-f*v*c-_*l*p+a*v*p+f*l*u-a*d*u,y=f*S*c-_*h*c+_*o*p-a*S*p-f*o*u+a*h*u,N=_*h*l-f*S*l-_*o*d+a*S*d+f*o*v-a*h*v,C=n*m+i*x+r*y+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=m*A,e[1]=(S*d*s-h*v*s-S*r*p+i*v*p+h*r*u-i*d*u)*A,e[2]=(o*v*s-S*l*s+S*r*c-i*v*c-o*r*u+i*l*u)*A,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*p-i*l*p)*A,e[4]=x*A,e[5]=(f*v*s-_*d*s+_*r*p-n*v*p-f*r*u+n*d*u)*A,e[6]=(_*l*s-a*v*s-_*r*c+n*v*c+a*r*u-n*l*u)*A,e[7]=(a*d*s-f*l*s+f*r*c-n*d*c-a*r*p+n*l*p)*A,e[8]=y*A,e[9]=(_*h*s-f*S*s-_*i*p+n*S*p+f*i*u-n*h*u)*A,e[10]=(a*S*s-_*o*s+_*i*c-n*S*c-a*i*u+n*o*u)*A,e[11]=(f*o*s-a*h*s-f*i*c+n*h*c+a*i*p-n*o*p)*A,e[12]=N*A,e[13]=(f*S*r-_*h*r+_*i*d-n*S*d-f*i*v+n*h*v)*A,e[14]=(_*o*r-a*S*r-_*i*l+n*S*l+a*i*v-n*o*v)*A,e[15]=(a*h*r-f*o*r+f*i*l-n*h*l-a*i*d+n*o*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,p=s*f,_=s*h,S=a*f,v=a*h,u=o*h,m=l*c,x=l*f,y=l*h,N=i.x,C=i.y,A=i.z;return r[0]=(1-(S+u))*N,r[1]=(p+y)*N,r[2]=(_-x)*N,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(d+u))*C,r[6]=(v+m)*C,r[7]=0,r[8]=(_+x)*A,r[9]=(v-m)*A,r[10]=(1-(d+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const a=zr.set(r[4],r[5],r[6]).length(),o=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,f=1/a,h=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=f,In.elements[5]*=f,In.elements[6]*=f,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,n.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=hi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(o===hi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Al)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(a-s),d=(n+e)*c,p=(i+r)*f;let _,S;if(o===hi)_=(a+s)*h,S=-2*h;else if(o===Al)_=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new U,In=new ft,dS=new U(0,0,0),fS=new U(1,1,1),Ri=new U,xo=new U,un=new U,Ep=new ft,Tp=new Wa;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";let Kv=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hS=0;const wp=new U,Br=new Wa,ri=new ft,yo=new U,Zs=new U,pS=new U,mS=new Wa,Ap=new U(1,0,0),Cp=new U(0,1,0),Rp=new U(0,0,1),bp={type:"added"},gS={type:"removed"},Hr={type:"childadded",child:null},Dc={type:"childremoved",child:null};class It extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new U,n=new Jn,i=new Wa,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Oe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Rp,e)}translateOnAxis(e,n){return wp.copy(e).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yo.copy(e):yo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Zs,yo,this.up):ri.lookAt(yo,Zs,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(ri),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gS),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,pS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,mS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new U(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new U,si=new U,Uc=new U,ai=new U,Vr=new U,Gr=new U,Np=new U,Fc=new U,Oc=new U,kc=new U,zc=new it,Bc=new it,Hc=new it;class kn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),si.subVectors(i,n),Uc.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(si),l=Dn.dot(Uc),c=si.dot(si),f=si.dot(Uc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return zc.setScalar(0),Bc.setScalar(0),Hc.setScalar(0),zc.fromBufferAttribute(e,n),Bc.fromBufferAttribute(e,i),Hc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(zc,s.x),a.addScaledVector(Bc,s.y),a.addScaledVector(Hc,s.z),a}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),si.subVectors(e,n),Dn.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Dn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Vr.subVectors(r,i),Gr.subVectors(s,i),Fc.subVectors(e,i);const l=Vr.dot(Fc),c=Gr.dot(Fc);if(l<=0&&c<=0)return n.copy(i);Oc.subVectors(e,r);const f=Vr.dot(Oc),h=Gr.dot(Oc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Vr,a);kc.subVectors(e,s);const p=Vr.dot(kc),_=Gr.dot(kc);if(_>=0&&p<=_)return n.copy(s);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Gr,o);const v=f*_-p*h;if(v<=0&&h-f>=0&&p-_>=0)return Np.subVectors(s,r),o=(h-f)/(h-f+(p-_)),n.copy(r).addScaledVector(Np,o);const u=1/(v+S+d);return a=S*u,o=d*u,n.copy(i).addScaledVector(Vr,a).addScaledVector(Gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},So={h:0,s:0,l:0};function Vc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=zf(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Vc(a,s,e+1/3),this.g=Vc(a,s,e),this.b=Vc(a,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,n=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sn){const i=Qv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Ye.fromWorkingColorSpace(Vt.copy(this),e),Math.round(jt(Vt.r*255,0,255))*65536+Math.round(jt(Vt.g*255,0,255))*256+Math.round(jt(Vt.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Sn){Ye.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==Sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(So);const i=ga(bi.h,So.h,n),r=ga(bi.s,So.s,n),s=ga(bi.l,So.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Be;Be.NAMES=Qv;let vS=0;class Pr extends Ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Us(),this.name="",this.blending=ps,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Ku,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ku&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class va extends Pr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new U,Mo=new je;class An{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hp,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mo.fromBufferAttribute(this,n),Mo.applyMatrix3(e),this.setXY(n,Mo.x,Mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hp&&(e.usage=this.usage),e}}class Jv extends An{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class e0 extends An{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dt extends An{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _S=0;const yn=new ft,Gc=new It,Wr=new U,dn=new ja,Ks=new ja,Nt=new U;class ln extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qv(e)?e0:Jv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(dn.min,Ks.min),dn.expandByPoint(Nt),Nt.addVectors(dn.max,Ks.max),dn.expandByPoint(Nt)):(dn.expandByPoint(Ks.min),dn.expandByPoint(Ks.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Nt.fromBufferAttribute(o,c),l&&(Wr.fromBufferAttribute(e,c),Nt.add(Wr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new U,l[b]=new U;const c=new U,f=new U,h=new U,d=new je,p=new je,_=new je,S=new U,v=new U;function u(b,w,M){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,M),f.sub(c),h.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),v.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(P),o[b].add(S),o[w].add(S),o[M].add(S),l[b].add(v),l[w].add(v),l[M].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let b=0,w=m.length;b<w;++b){const M=m[b],P=M.start,V=M.count;for(let B=P,$=P+V;B<$;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new U,y=new U,N=new U,C=new U;function A(b){N.fromBufferAttribute(r,b),C.copy(N);const w=o[b];x.copy(w),x.sub(N.multiplyScalar(N.dot(w))).normalize(),y.crossVectors(C,w);const P=y.dot(l[b])<0?-1:1;a.setXYZW(b,x.x,x.y,x.z,P)}for(let b=0,w=m.length;b<w;++b){const M=m[b],P=M.start,V=M.count;for(let B=P,$=P+V;B<$;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,f=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),S=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,v),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,v),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let p=0,_=0;for(let S=0,v=l.length;S<v;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*f;for(let u=0;u<f;u++)d[_++]=c[p++]}return new An(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ln,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new ft,rr=new Bf,Eo=new Xa,Lp=new U,To=new U,wo=new U,Ao=new U,Wc=new U,Co=new U,Ip=new U,Ro=new U;class Gt extends It{constructor(e=new ln,n=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Co.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(Wc.fromBufferAttribute(h,e),a?Co.addScaledVector(Wc,f):Co.addScaledVector(Wc.sub(n),f))}n.add(Co)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(Eo.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Eo,Lp)===null||rr.origin.distanceToSquared(Lp)>(e.far-e.near)**2))&&(Pp.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Pp),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const v=d[_],u=a[v.materialIndex],m=Math.max(v.start,p.start),x=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let y=m,N=x;y<N;y+=3){const C=o.getX(y),A=o.getX(y+1),b=o.getX(y+2);r=bo(this,u,e,i,c,f,h,C,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let v=_,u=S;v<u;v+=3){const m=o.getX(v),x=o.getX(v+1),y=o.getX(v+2);r=bo(this,a,e,i,c,f,h,m,x,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const v=d[_],u=a[v.materialIndex],m=Math.max(v.start,p.start),x=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let y=m,N=x;y<N;y+=3){const C=y,A=y+1,b=y+2;r=bo(this,u,e,i,c,f,h,C,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let v=_,u=S;v<u;v+=3){const m=v,x=v+1,y=v+2;r=bo(this,a,e,i,c,f,h,m,x,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function xS(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zi,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ro);return c<n.near||c>n.far?null:{distance:c,point:Ro.clone(),object:t}}function bo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,To),t.getVertexPosition(l,wo),t.getVertexPosition(c,Ao);const f=xS(t,e,n,i,To,wo,Ao,Ip);if(f){const h=new U;kn.getBarycoord(Ip,To,wo,Ao,h),r&&(f.uv=kn.getInterpolatedAttribute(r,o,l,c,h,new je)),s&&(f.uv1=kn.getInterpolatedAttribute(s,o,l,c,h,new je)),a&&(f.normal=kn.getInterpolatedAttribute(a,o,l,c,h,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};kn.getNormal(To,wo,Ao,d.normal),f.face=d,f.barycoord=h}return f}class Fs extends ln{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(h,2));function _(S,v,u,m,x,y,N,C,A,b,w){const M=y/A,P=N/b,V=y/2,B=N/2,$=C/2,ee=A+1,Y=b+1;let J=0,L=0;const j=new U;for(let K=0;K<Y;K++){const oe=K*P-B;for(let ye=0;ye<ee;ye++){const Xe=ye*M-V;j[S]=Xe*m,j[v]=oe*x,j[u]=$,c.push(j.x,j.y,j.z),j[S]=0,j[v]=0,j[u]=C>0?1:-1,f.push(j.x,j.y,j.z),h.push(ye/A),h.push(1-K/b),J+=1}}for(let K=0;K<b;K++)for(let oe=0;oe<A;oe++){const ye=d+oe+ee*K,Xe=d+oe+ee*(K+1),W=d+(oe+1)+ee*(K+1),se=d+(oe+1)+ee*K;l.push(ye,Xe,se),l.push(Xe,W,se),L+=6}o.addGroup(p,L,w),p+=L,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=bs(t[n]);for(const r in i)e[r]=i[r]}return e}function yS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function t0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const SS={clone:bs,merge:qt};var MS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ES=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Pr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MS,this.fragmentShader=ES,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=yS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class n0 extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new U,Dp=new je,Up=new je;class hn extends n0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,Dp,Up),n.subVectors(Up,Dp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Xr=1;class TS extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(jr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new hn(jr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new hn(jr,Xr,e,n);a.layers=this.layers,this.add(a);const o=new hn(jr,Xr,e,n);o.layers=this.layers,this.add(o);const l=new hn(jr,Xr,e,n);l.layers=this.layers,this.add(l);const c=new hn(jr,Xr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class i0 extends on{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:ws,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wS extends Rr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new i0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fs(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Xi});s.uniforms.tEquirect.value=n;const a=new Gt(r,s),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=Zn),new TS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const jc=new U,AS=new U,CS=new Oe;class ur{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jc.subVectors(i,n).cross(AS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CS.getNormalMatrix(e),r=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Xa,No=new U;class Hf{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],p=r[8],_=r[9],S=r[10],v=r[11],u=r[12],m=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,v-p,y-u).normalize(),i[1].setComponents(l+s,d+c,v+p,y+u).normalize(),i[2].setComponents(l+a,d+f,v+_,y+m).normalize(),i[3].setComponents(l-a,d-f,v-_,y-m).normalize(),i[4].setComponents(l-o,d-h,v-S,y-x).normalize(),n===hi)i[5].setComponents(l+o,d+h,v+S,y+x).normalize();else if(n===Al)i[5].setComponents(o,h,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function r0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function RS(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],S=h[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const S=h[p];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Zl extends ln{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,p=[],_=[],S=[],v=[];for(let u=0;u<f;u++){const m=u*d-a;for(let x=0;x<c;x++){const y=x*h-s;_.push(y,-m,0),S.push(0,0,1),v.push(x/o),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<o;m++){const x=m+c*u,y=m+c*(u+1),N=m+1+c*(u+1),C=m+1+c*u;p.push(x,y,C),p.push(y,N,C)}this.setIndex(p),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(S,3)),this.setAttribute("uv",new Dt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var bS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,US=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sM="gl_FragColor = linearToOutputTexel( gl_FragColor );",aM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:bS,alphahash_pars_fragment:NS,alphamap_fragment:PS,alphamap_pars_fragment:LS,alphatest_fragment:IS,alphatest_pars_fragment:DS,aomap_fragment:US,aomap_pars_fragment:FS,batching_pars_vertex:OS,batching_vertex:kS,begin_vertex:zS,beginnormal_vertex:BS,bsdfs:HS,iridescence_fragment:VS,bumpmap_pars_fragment:GS,clipping_planes_fragment:WS,clipping_planes_pars_fragment:jS,clipping_planes_pars_vertex:XS,clipping_planes_vertex:YS,color_fragment:qS,color_pars_fragment:$S,color_pars_vertex:ZS,color_vertex:KS,common:QS,cube_uv_reflection_fragment:JS,defaultnormal_vertex:eM,displacementmap_pars_vertex:tM,displacementmap_vertex:nM,emissivemap_fragment:iM,emissivemap_pars_fragment:rM,colorspace_fragment:sM,colorspace_pars_fragment:aM,envmap_fragment:oM,envmap_common_pars_fragment:lM,envmap_pars_fragment:cM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:SM,envmap_vertex:dM,fog_vertex:fM,fog_pars_vertex:hM,fog_fragment:pM,fog_pars_fragment:mM,gradientmap_pars_fragment:gM,lightmap_pars_fragment:vM,lights_lambert_fragment:_M,lights_lambert_pars_fragment:xM,lights_pars_begin:yM,lights_toon_fragment:MM,lights_toon_pars_fragment:EM,lights_phong_fragment:TM,lights_phong_pars_fragment:wM,lights_physical_fragment:AM,lights_physical_pars_fragment:CM,lights_fragment_begin:RM,lights_fragment_maps:bM,lights_fragment_end:NM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:LM,logdepthbuf_pars_vertex:IM,logdepthbuf_vertex:DM,map_fragment:UM,map_pars_fragment:FM,map_particle_fragment:OM,map_particle_pars_fragment:kM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:BM,morphinstance_vertex:HM,morphcolor_vertex:VM,morphnormal_vertex:GM,morphtarget_pars_vertex:WM,morphtarget_vertex:jM,normal_fragment_begin:XM,normal_fragment_maps:YM,normal_pars_fragment:qM,normal_pars_vertex:$M,normal_vertex:ZM,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:QM,clearcoat_normal_fragment_maps:JM,clearcoat_pars_fragment:eE,iridescence_pars_fragment:tE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:aE,dithering_pars_fragment:oE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:dE,shadowmap_vertex:fE,shadowmask_pars_fragment:hE,skinbase_vertex:pE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:vE,specularmap_fragment:_E,specularmap_pars_fragment:xE,tonemapping_fragment:yE,tonemapping_pars_fragment:SE,transmission_fragment:ME,transmission_pars_fragment:EE,uv_pars_fragment:TE,uv_pars_vertex:wE,uv_vertex:AE,worldpos_vertex:CE,background_vert:RE,background_frag:bE,backgroundCube_vert:NE,backgroundCube_frag:PE,cube_vert:LE,cube_frag:IE,depth_vert:DE,depth_frag:UE,distanceRGBA_vert:FE,distanceRGBA_frag:OE,equirect_vert:kE,equirect_frag:zE,linedashed_vert:BE,linedashed_frag:HE,meshbasic_vert:VE,meshbasic_frag:GE,meshlambert_vert:WE,meshlambert_frag:jE,meshmatcap_vert:XE,meshmatcap_frag:YE,meshnormal_vert:qE,meshnormal_frag:$E,meshphong_vert:ZE,meshphong_frag:KE,meshphysical_vert:QE,meshphysical_frag:JE,meshtoon_vert:e1,meshtoon_frag:t1,points_vert:n1,points_frag:i1,shadow_vert:r1,shadow_frag:s1,sprite_vert:a1,sprite_frag:o1},ue={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Yn={basic:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:qt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:qt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:qt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:qt([ue.common,ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:qt([ue.lights,ue.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Yn.physical={uniforms:qt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Po={r:0,b:0,g:0},ar=new Jn,l1=new ft;function c1(t,e,n,i,r,s,a){const o=new Be(0);let l=s===!0?0:1,c,f,h=null,d=0,p=null;function _(m){let x=m.isScene===!0?m.background:null;return x&&x.isTexture&&(x=(m.backgroundBlurriness>0?n:e).get(x)),x}function S(m){let x=!1;const y=_(m);y===null?u(o,l):y&&y.isColor&&(u(y,1),x=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(m,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===ql)?(f===void 0&&(f=new Gt(new Fs(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:bs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ar.copy(x.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(l1.makeRotationFromEuler(ar)),f.material.toneMapped=Ye.getTransfer(y.colorSpace)!==nt,(h!==y||d!==y.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=y,d=y.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Gt(new Zl(2,2),new Ki({name:"BackgroundMaterial",uniforms:bs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function u(m,x){m.getRGB(Po,t0(t)),i.buffers.color.setClear(Po.r,Po.g,Po.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,u(o,l)},render:S,addToRenderList:v}}function u1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,P,V,B,$){let ee=!1;const Y=h(B,V,P);s!==Y&&(s=Y,c(s.object)),ee=p(M,B,V,$),ee&&_(M,B,V,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,y(M,P,V,B),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function h(M,P,V){const B=V.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let ee=$[P.id];ee===void 0&&(ee={},$[P.id]=ee);let Y=ee[B];return Y===void 0&&(Y=d(l()),ee[B]=Y),Y}function d(M){const P=[],V=[],B=[];for(let $=0;$<n;$++)P[$]=0,V[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,P,V,B){const $=s.attributes,ee=P.attributes;let Y=0;const J=V.getAttributes();for(const L in J)if(J[L].location>=0){const K=$[L];let oe=ee[L];if(oe===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==B}function _(M,P,V,B){const $={},ee=P.attributes;let Y=0;const J=V.getAttributes();for(const L in J)if(J[L].location>=0){let K=ee[L];K===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),$[L]=oe,Y++}s.attributes=$,s.attributesNum=Y,s.index=B}function S(){const M=s.newAttributes;for(let P=0,V=M.length;P<V;P++)M[P]=0}function v(M){u(M,0)}function u(M,P){const V=s.newAttributes,B=s.enabledAttributes,$=s.attributeDivisors;V[M]=1,B[M]===0&&(t.enableVertexAttribArray(M),B[M]=1),$[M]!==P&&(t.vertexAttribDivisor(M,P),$[M]=P)}function m(){const M=s.newAttributes,P=s.enabledAttributes;for(let V=0,B=P.length;V<B;V++)P[V]!==M[V]&&(t.disableVertexAttribArray(V),P[V]=0)}function x(M,P,V,B,$,ee,Y){Y===!0?t.vertexAttribIPointer(M,P,V,$,ee):t.vertexAttribPointer(M,P,V,B,$,ee)}function y(M,P,V,B){S();const $=B.attributes,ee=V.getAttributes(),Y=P.defaultAttributeValues;for(const J in ee){const L=ee[J];if(L.location>=0){let j=$[J];if(j===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const K=j.normalized,oe=j.itemSize,ye=e.get(j);if(ye===void 0)continue;const Xe=ye.buffer,W=ye.type,se=ye.bytesPerElement,fe=W===t.INT||W===t.UNSIGNED_INT||j.gpuType===If;if(j.isInterleavedBufferAttribute){const le=j.data,Ae=le.stride,Ne=j.offset;if(le.isInstancedInterleavedBuffer){for(let ke=0;ke<L.locationSize;ke++)u(L.location+ke,le.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<L.locationSize;ke++)v(L.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let ke=0;ke<L.locationSize;ke++)x(L.location+ke,oe/L.locationSize,W,K,Ae*se,(Ne+oe/L.locationSize*ke)*se,fe)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)u(L.location+le,j.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<L.locationSize;le++)v(L.location+le);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let le=0;le<L.locationSize;le++)x(L.location+le,oe/L.locationSize,W,K,oe*se,oe/L.locationSize*le*se,fe)}}else if(Y!==void 0){const K=Y[J];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(L.location,K);break;case 3:t.vertexAttrib3fv(L.location,K);break;case 4:t.vertexAttrib4fv(L.location,K);break;default:t.vertexAttrib1fv(L.location,K)}}}}m()}function N(){b();for(const M in i){const P=i[M];for(const V in P){const B=P[V];for(const $ in B)f(B[$].object),delete B[$];delete P[V]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const V in P){const B=P[V];for(const $ in B)f(B[$].object),delete B[$];delete P[V]}delete i[M.id]}function A(M){for(const P in i){const V=i[P];if(V[M.id]===void 0)continue;const B=V[M.id];for(const $ in B)f(B[$].object),delete B[$];delete V[M.id]}}function b(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:v,disableUnusedAttributes:m}}function d1(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function o(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=f[_];n.update(p,i,1)}function l(c,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],f[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let _=0;for(let S=0;S<h;S++)_+=f[S]*d[S];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function f1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===Ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:v,maxAttributes:u,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:N,maxSamples:C}}function h1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ur,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,S=h.clipIntersection,v=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!v)s?f(null):c();else{const m=s?0:i,x=m*4;let y=u.clippingState||null;l.value=y,y=f(_,d,x,p);for(let N=0;N!==x;++N)y[N]=n[N];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,_){const S=h!==null?h.length:0;let v=null;if(S!==0){if(v=l.value,_!==!0||v===null){const u=p+S*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(v===null||v.length<u)&&(v=new Float32Array(u));for(let x=0,y=p;x!==S;++x,y+=4)a.copy(h[x]).applyMatrix4(m,o),a.normal.toArray(v,y),v[y+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,v}}function p1(t){let e=new WeakMap;function n(a,o){return o===sd?a.mapping=ws:o===ad&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===sd||o===ad)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class s0 extends n0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const os=4,Fp=[.125,.215,.35,.446,.526,.582],hr=20,Xc=new s0,Op=new Be;let Yc=null,qc=0,$c=0,Zc=!1;const dr=(1+Math.sqrt(5))/2,Yr=1/dr,kp=[new U(-dr,Yr,0),new U(dr,Yr,0),new U(-Yr,0,dr),new U(Yr,0,dr),new U(0,dr,-Yr),new U(0,dr,Yr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,qc,$c),this._renderer.xr.enabled=Zc,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Ga,format:zn,colorSpace:Is,depthBuffer:!1},r=Bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m1(s)),this._blurMaterial=g1(s,e,n)}return r}_compileMaterial(e){const n=new Gt(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,r){const o=new hn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Op),f.toneMapping=Yi,f.autoClear=!1;const p=new va({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new Gt(new Fs,p);let S=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,S=!0):(p.color.copy(Op),S=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):m===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;Lo(r,m*x,u>2?x:0,x,x),f.setRenderTarget(r),S&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ws||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Lo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=kp[(r-s-1)%kp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Gt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hr-1),S=s/_,v=isFinite(s)?1+Math.floor(f*S):hr;v>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${hr}`);const u=[];let m=0;for(let A=0;A<hr;++A){const b=A/S,w=Math.exp(-b*b/2);u.push(w),A===0?m+=w:A<v&&(m+=2*w)}for(let A=0;A<u.length;A++)u[A]=u[A]/m;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const y=this._sizeLods[r],N=3*y*(r>x-os?r-x+os:0),C=4*(this._cubeSize-y);Lo(n,N,C,3*y,2*y),l.setRenderTarget(n),l.render(h,Xc)}}function m1(t){const e=[],n=[],i=[];let r=t;const s=t-os+1+Fp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-os?l=Fp[a-t+os-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,S=3,v=2,u=1,m=new Float32Array(S*_*p),x=new Float32Array(v*_*p),y=new Float32Array(u*_*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,b=C>2?0:-1,w=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];m.set(w,S*_*C),x.set(d,v*_*C);const M=[C,C,C,C,C,C];y.set(M,u*_*C)}const N=new ln;N.setAttribute("position",new An(m,S)),N.setAttribute("uv",new An(x,v)),N.setAttribute("faceIndex",new An(y,u)),e.push(N),r>os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bp(t,e,n){const i=new Rr(t,e,n);return i.texture.mapping=ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function g1(t,e,n){const i=new Float32Array(hr),r=new U(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Hp(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Vp(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===sd||l===ad,f=l===ws||l===As;if(c||f){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new zp(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new zp(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function _1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ra("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function x1(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const S=d.morphAttributes[_];for(let v=0,u=S.length;v<u;v++)e.remove(S[v])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const S=p[_];for(let v=0,u=S.length;v<u;v++)e.update(S[v],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let S=0;if(p!==null){const m=p.array;S=p.version;for(let x=0,y=m.length;x<y;x+=3){const N=m[x+0],C=m[x+1],A=m[x+2];d.push(N,C,C,A,A,N)}}else if(_!==void 0){const m=_.array;S=_.version;for(let x=0,y=m.length/3-1;x<y;x+=3){const N=x+0,C=x+1,A=x+2;d.push(N,C,C,A,A,N)}}else return;const v=new(qv(d)?e0:Jv)(d,1);v.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,v)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function y1(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*a),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*a,_),n.update(p,i,_))}function f(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let v=0;for(let u=0;u<_;u++)v+=p[u];n.update(v,i,1)}function h(d,p,_,S){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<d.length;u++)c(d[u]/a,p[u],S[u]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,S,0,_);let u=0;for(let m=0;m<_;m++)u+=p[m]*S[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function S1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function M1(t,e,n){const i=new WeakMap,r=new it;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),S===!0&&(y=2),v===!0&&(y=3);let N=o.attributes.position.count*y,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const A=new Float32Array(N*C*4*h),b=new Zv(A,N,C,h);b.type=fi,b.needsUpdate=!0;const w=y*4;for(let P=0;P<h;P++){const V=u[P],B=m[P],$=x[P],ee=N*C*4*P;for(let Y=0;Y<V.count;Y++){const J=Y*w;_===!0&&(r.fromBufferAttribute(V,Y),A[ee+J+0]=r.x,A[ee+J+1]=r.y,A[ee+J+2]=r.z,A[ee+J+3]=0),S===!0&&(r.fromBufferAttribute(B,Y),A[ee+J+4]=r.x,A[ee+J+5]=r.y,A[ee+J+6]=r.z,A[ee+J+7]=0),v===!0&&(r.fromBufferAttribute($,Y),A[ee+J+8]=r.x,A[ee+J+9]=r.y,A[ee+J+10]=r.z,A[ee+J+11]=$.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new je(N,C)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let v=0;v<c.length;v++)_+=c[v];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function E1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class a0 extends on{constructor(e,n,i,r,s,a,o,l,c,f=ms){if(f!==ms&&f!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ms&&(i=Cr),i===void 0&&f===Rs&&(i=Cs),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const o0=new on,Gp=new a0(1,1),l0=new Zv,c0=new cS,u0=new i0,Wp=[],jp=[],Xp=new Float32Array(16),Yp=new Float32Array(9),qp=new Float32Array(4);function Os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wp[r];if(s===void 0&&(s=new Float32Array(r),Wp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kl(t,e){let n=jp[e];n===void 0&&(n=new Int32Array(e),jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function T1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function C1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function R1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;qp.set(i),t.uniformMatrix2fv(this.addr,!1,qp),bt(n,i)}}function b1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Yp.set(i),t.uniformMatrix3fv(this.addr,!1,Yp),bt(n,i)}}function N1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Xp.set(i),t.uniformMatrix4fv(this.addr,!1,Xp),bt(n,i)}}function P1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function U1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function z1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Gp.compareFunction=Yv,s=Gp):s=o0,n.setTexture2D(e||s,r)}function B1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c0,r)}function H1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||u0,r)}function V1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||l0,r)}function G1(t){switch(t){case 5126:return T1;case 35664:return w1;case 35665:return A1;case 35666:return C1;case 35674:return R1;case 35675:return b1;case 35676:return N1;case 5124:case 35670:return P1;case 35667:case 35671:return L1;case 35668:case 35672:return I1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return F1;case 36295:return O1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return V1}}function W1(t,e){t.uniform1fv(this.addr,e)}function j1(t,e){const n=Os(e,this.size,2);t.uniform2fv(this.addr,n)}function X1(t,e){const n=Os(e,this.size,3);t.uniform3fv(this.addr,n)}function Y1(t,e){const n=Os(e,this.size,4);t.uniform4fv(this.addr,n)}function q1(t,e){const n=Os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $1(t,e){const n=Os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Z1(t,e){const n=Os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function K1(t,e){t.uniform1iv(this.addr,e)}function Q1(t,e){t.uniform2iv(this.addr,e)}function J1(t,e){t.uniform3iv(this.addr,e)}function eT(t,e){t.uniform4iv(this.addr,e)}function tT(t,e){t.uniform1uiv(this.addr,e)}function nT(t,e){t.uniform2uiv(this.addr,e)}function iT(t,e){t.uniform3uiv(this.addr,e)}function rT(t,e){t.uniform4uiv(this.addr,e)}function sT(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o0,s[a])}function aT(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||c0,s[a])}function oT(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||u0,s[a])}function lT(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||l0,s[a])}function cT(t){switch(t){case 5126:return W1;case 35664:return j1;case 35665:return X1;case 35666:return Y1;case 35674:return q1;case 35675:return $1;case 35676:return Z1;case 5124:case 35670:return K1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return lT}}class uT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=G1(n.type)}}class dT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cT(n.type)}}class fT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function $p(t,e){t.seq.push(e),t.map[e.id]=e}function hT(t,e,n){const i=t.name,r=i.length;for(Kc.lastIndex=0;;){const s=Kc.exec(i),a=Kc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$p(n,c===void 0?new uT(o,t,e):new dT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new fT(o),$p(n,h)),n=h}}}class tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);hT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Zp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pT=37297;let mT=0;function gT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Kp=new Oe;function vT(t){Ye._getMatrix(Kp,Ye.workingColorSpace,t);const e=`mat3( ${Kp.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case $l:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Qp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+gT(t.getShaderSource(e),a)}else return r}function _T(t,e){const n=vT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function xT(t,e){let n;switch(e){case My:n="Linear";break;case Ey:n="Reinhard";break;case Ty:n="Cineon";break;case Dv:n="ACESFilmic";break;case Ay:n="AgX";break;case Cy:n="Neutral";break;case wy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Io=new U;function yT(){Ye.getLuminanceCoefficients(Io);const t=Io.x.toFixed(4),e=Io.y.toFixed(4),n=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ST(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function MT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ET(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function sa(t){return t!==""}function Jp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(t){return t.replace(TT,AT)}const wT=new Map;function AT(t,e){let n=ze[e];if(n===void 0){const i=wT.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ud(n)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(t){return t.replace(CT,RT)}function RT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Pv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Lv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function NT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ws:case As:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function LT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Iv:e="ENVMAP_BLENDING_MULTIPLY";break;case yy:e="ENVMAP_BLENDING_MIX";break;case Sy:e="ENVMAP_BLENDING_ADD";break}return e}function IT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function DT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=bT(n),c=NT(n),f=PT(n),h=LT(n),d=IT(n),p=ST(n),_=MT(s),S=r.createProgram();let v,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(sa).join(`
`),v.length>0&&(v+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(sa).join(`
`),u.length>0&&(u+=`
`)):(v=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),u=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?ze.tonemapping_pars_fragment:"",n.toneMapping!==Yi?xT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,_T("linearToOutputTexel",n.outputColorSpace),yT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),a=Ud(a),a=Jp(a,n),a=em(a,n),o=Ud(o),o=Jp(o,n),o=em(o,n),a=tm(a),o=tm(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,u=["#define varying in",n.glslVersion===pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=m+v+a,y=m+u+o,N=Zp(r,r.VERTEX_SHADER,x),C=Zp(r,r.FRAGMENT_SHADER,y);r.attachShader(S,N),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(P){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(S).trim(),B=r.getShaderInfoLog(N).trim(),$=r.getShaderInfoLog(C).trim();let ee=!0,Y=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,N,C);else{const J=Qp(r,N,"vertex"),L=Qp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+J+`
`+L)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||$==="")&&(Y=!1);Y&&(P.diagnostics={runnable:ee,programLog:V,vertexShader:{log:B,prefix:v},fragmentShader:{log:$,prefix:u}})}r.deleteShader(N),r.deleteShader(C),b=new tl(r,S),w=ET(r,S)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,pT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=N,this.fragmentShader=C,this}let UT=0;class FT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OT(e),n.set(e,i)),i}}class OT{constructor(e){this.id=UT++,this.code=e,this.usedTimes=0}}function kT(t,e,n,i,r,s,a){const o=new Kv,l=new FT,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return c.add(w),w===0?"uv":`uv${w}`}function v(w,M,P,V,B){const $=V.fog,ee=B.geometry,Y=w.isMeshStandardMaterial?V.environment:null,J=(w.isMeshStandardMaterial?n:e).get(w.envMap||Y),L=J&&J.mapping===ql?J.image.height:null,j=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const K=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,oe=K!==void 0?K.length:0;let ye=0;ee.morphAttributes.position!==void 0&&(ye=1),ee.morphAttributes.normal!==void 0&&(ye=2),ee.morphAttributes.color!==void 0&&(ye=3);let Xe,W,se,fe;if(j){const Je=Yn[j];Xe=Je.vertexShader,W=Je.fragmentShader}else Xe=w.vertexShader,W=w.fragmentShader,l.update(w),se=l.getVertexShaderID(w),fe=l.getFragmentShaderID(w);const le=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Ne=B.isInstancedMesh===!0,ke=B.isBatchedMesh===!0,ot=!!w.map,We=!!w.matcap,mt=!!J,O=!!w.aoMap,wt=!!w.lightMap,Ve=!!w.bumpMap,He=!!w.normalMap,Re=!!w.displacementMap,tt=!!w.emissiveMap,Ce=!!w.metalnessMap,R=!!w.roughnessMap,E=w.anisotropy>0,k=w.clearcoat>0,Z=w.dispersion>0,te=w.iridescence>0,X=w.sheen>0,xe=w.transmission>0,q=E&&!!w.anisotropyMap,ie=k&&!!w.clearcoatMap,Pe=k&&!!w.clearcoatNormalMap,ne=k&&!!w.clearcoatRoughnessMap,ce=te&&!!w.iridescenceMap,Te=te&&!!w.iridescenceThicknessMap,Le=X&&!!w.sheenColorMap,ge=X&&!!w.sheenRoughnessMap,_e=!!w.specularMap,De=!!w.specularColorMap,rt=!!w.specularIntensityMap,I=xe&&!!w.transmissionMap,de=xe&&!!w.thicknessMap,G=!!w.gradientMap,Q=!!w.alphaMap,me=w.alphaTest>0,he=!!w.alphaHash,Ue=!!w.extensions;let xt=Yi;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(xt=t.toneMapping);const kt={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:Xe,fragmentShader:W,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:fe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ke,batchingColor:ke&&B._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&B.instanceColor!==null,instancingMorph:Ne&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Is,alphaToCoverage:!!w.alphaToCoverage,map:ot,matcap:We,envMap:mt,envMapMode:mt&&J.mapping,envMapCubeUVHeight:L,aoMap:O,lightMap:wt,bumpMap:Ve,normalMap:He,displacementMap:d&&Re,emissiveMap:tt,normalMapObjectSpace:He&&w.normalMapType===Py,normalMapTangentSpace:He&&w.normalMapType===Xv,metalnessMap:Ce,roughnessMap:R,anisotropy:E,anisotropyMap:q,clearcoat:k,clearcoatMap:ie,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ne,dispersion:Z,iridescence:te,iridescenceMap:ce,iridescenceThicknessMap:Te,sheen:X,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:De,specularIntensityMap:rt,transmission:xe,transmissionMap:I,thicknessMap:de,gradientMap:G,opaque:w.transparent===!1&&w.blending===ps&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:me,alphaHash:he,combine:w.combine,mapUv:ot&&S(w.map.channel),aoMapUv:O&&S(w.aoMap.channel),lightMapUv:wt&&S(w.lightMap.channel),bumpMapUv:Ve&&S(w.bumpMap.channel),normalMapUv:He&&S(w.normalMap.channel),displacementMapUv:Re&&S(w.displacementMap.channel),emissiveMapUv:tt&&S(w.emissiveMap.channel),metalnessMapUv:Ce&&S(w.metalnessMap.channel),roughnessMapUv:R&&S(w.roughnessMap.channel),anisotropyMapUv:q&&S(w.anisotropyMap.channel),clearcoatMapUv:ie&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:ge&&S(w.sheenRoughnessMap.channel),specularMapUv:_e&&S(w.specularMap.channel),specularColorMapUv:De&&S(w.specularColorMap.channel),specularIntensityMapUv:rt&&S(w.specularIntensityMap.channel),transmissionMapUv:I&&S(w.transmissionMap.channel),thicknessMapUv:de&&S(w.thicknessMap.channel),alphaMapUv:Q&&S(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(He||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ee.attributes.uv&&(ot||Q),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:B.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:ot&&w.map.isVideoTexture===!0&&Ye.getTransfer(w.map.colorSpace)===nt,decodeVideoTextureEmissive:tt&&w.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(w.emissiveMap.colorSpace)===nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$n,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ue&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&w.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function u(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(m(M,w),x(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function m(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){const M=_[w.type];let P;if(M){const V=Yn[M];P=SS.clone(V.uniforms)}else P=w.uniforms;return P}function N(w,M){let P;for(let V=0,B=f.length;V<B;V++){const $=f[V];if($.cacheKey===M){P=$,++P.usedTimes;break}}return P===void 0&&(P=new DT(t,M,w,s),f.push(P)),P}function C(w){if(--w.usedTimes===0){const M=f.indexOf(w);f[M]=f[f.length-1],f.pop(),w.destroy()}}function A(w){l.remove(w)}function b(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:y,acquireProgram:N,releaseProgram:C,releaseShaderCache:A,programs:f,dispose:b}}function zT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function BT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,p,_,S,v){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:S,group:v},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=S,u.group=v),e++,u}function o(h,d,p,_,S,v){const u=a(h,d,p,_,S,v);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,d,p,_,S,v){const u=a(h,d,p,_,S,v);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||BT),i.length>1&&i.sort(d||im),r.length>1&&r.sort(d||im)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function HT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new rm,t.set(i,[a])):r>=s.length?(a=new rm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function VT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Be};break;case"SpotLight":n={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function GT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WT=0;function jT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XT(t){const e=new VT,n=GT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new ft,a=new ft;function o(c){let f=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,S=0,v=0,u=0,m=0,x=0,y=0,N=0,C=0,A=0;c.sort(jT);for(let w=0,M=c.length;w<M;w++){const P=c[w],V=P.color,B=P.intensity,$=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=V.r*B,h+=V.g*B,d+=V.b*B;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],B);A++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,L=n.get(P);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(V).multiplyScalar(B),Y.distance=$,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[S]=Y;const J=P.shadow;if(P.map&&(i.spotLightMap[N]=P.map,N++,J.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[S]=J.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.spotShadow[S]=L,i.spotShadowMap[S]=ee,y++}S++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(V).multiplyScalar(B),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=Y,v++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const J=P.shadow,L=n.get(P);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,L.shadowCameraNear=J.camera.near,L.shadowCameraFar=J.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(B),Y.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[u]=Y,u++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==S||b.rectAreaLength!==v||b.hemiLength!==u||b.numDirectionalShadows!==m||b.numPointShadows!==x||b.numSpotShadows!==y||b.numSpotMaps!==N||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=v,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+N-C,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,b.directionalLength=p,b.pointLength=_,b.spotLength=S,b.rectAreaLength=v,b.hemiLength=u,b.numDirectionalShadows=m,b.numPointShadows=x,b.numSpotShadows=y,b.numSpotMaps=N,b.numLightProbes=A,i.version=WT++)}function l(c,f){let h=0,d=0,p=0,_=0,S=0;const v=f.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const x=c[u];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(v),h++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(v),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(v),a.identity(),s.copy(x.matrixWorld),s.premultiply(v),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(v),d++}else if(x.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(v),S++}}}return{setup:o,setupView:l,state:i}}function sm(t){const e=new XT(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function YT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new sm(t),e.set(r,[o])):s>=a.length?(o=new sm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class qT extends Pr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $T extends Pr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QT(t,e,n){let i=new Hf;const r=new je,s=new je,a=new it,o=new qT({depthPacking:Ny}),l=new $T,c={},f=n.maxTextureSize,h={[Zi]:an,[an]:Zi,[$n]:$n},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:ZT,fragmentShader:KT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ln;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Gt(_,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pv;let u=this.type;this.render=function(C,A,b){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Xi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=u!==oi&&this.type===oi,$=u===oi&&this.type!==oi;for(let ee=0,Y=C.length;ee<Y;ee++){const J=C[ee],L=J.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const j=L.getFrameExtents();if(r.multiply(j),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,L.mapSize.y=s.y)),L.map===null||B===!0||$===!0){const oe=this.type!==oi?{minFilter:Vn,magFilter:Vn}:{};L.map!==null&&L.map.dispose(),L.map=new Rr(r.x,r.y,oe),L.map.texture.name=J.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const K=L.getViewportCount();for(let oe=0;oe<K;oe++){const ye=L.getViewport(oe);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),V.viewport(a),L.updateMatrices(J,oe),i=L.getFrustum(),y(A,b,L.camera,J,this.type)}L.isPointLightShadow!==!0&&this.type===oi&&m(L,b),L.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(w,M,P)};function m(C,A){const b=e.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Rr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,b,d,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,b,p,S,null)}function x(C,A,b,w){let M=null;const P=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=b.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=M.uuid,B=A.uuid;let $=c[V];$===void 0&&($={},c[V]=$);let ee=$[B];ee===void 0&&(ee=M.clone(),$[B]=ee,A.addEventListener("dispose",N)),M=ee}if(M.visible=A.visible,M.wireframe=A.wireframe,w===oi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=t.properties.get(M);V.light=b}return M}function y(C,A,b,w,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===oi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const B=e.update(C),$=C.material;if(Array.isArray($)){const ee=B.groups;for(let Y=0,J=ee.length;Y<J;Y++){const L=ee[Y],j=$[L.materialIndex];if(j&&j.visible){const K=x(C,j,w,M);C.onBeforeShadow(t,C,A,b,B,K,L),t.renderBufferDirect(b,null,B,K,C,L),C.onAfterShadow(t,C,A,b,B,K,L)}}}else if($.visible){const ee=x(C,$,w,M);C.onBeforeShadow(t,C,A,b,B,ee,null),t.renderBufferDirect(b,null,B,ee,C,null),C.onAfterShadow(t,C,A,b,B,ee,null)}}const V=C.children;for(let B=0,$=V.length;B<$;B++)y(V[B],A,b,w,M)}function N(C){C.target.removeEventListener("dispose",N);for(const b in c){const w=c[b],M=C.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const JT={[Qu]:Ju,[ed]:id,[td]:rd,[Ts]:nd,[Ju]:Qu,[id]:ed,[rd]:td,[nd]:Ts};function ew(t,e){function n(){let I=!1;const de=new it;let G=null;const Q=new it(0,0,0,0);return{setMask:function(me){G!==me&&!I&&(t.colorMask(me,me,me,me),G=me)},setLocked:function(me){I=me},setClear:function(me,he,Ue,xt,kt){kt===!0&&(me*=xt,he*=xt,Ue*=xt),de.set(me,he,Ue,xt),Q.equals(de)===!1&&(t.clearColor(me,he,Ue,xt),Q.copy(de))},reset:function(){I=!1,G=null,Q.set(-1,0,0,0)}}}function i(){let I=!1,de=!1,G=null,Q=null,me=null;return{setReversed:function(he){if(de!==he){const Ue=e.get("EXT_clip_control");de?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const xt=me;me=null,this.setClear(xt)}de=he},getReversed:function(){return de},setTest:function(he){he?le(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(he){G!==he&&!I&&(t.depthMask(he),G=he)},setFunc:function(he){if(de&&(he=JT[he]),Q!==he){switch(he){case Qu:t.depthFunc(t.NEVER);break;case Ju:t.depthFunc(t.ALWAYS);break;case ed:t.depthFunc(t.LESS);break;case Ts:t.depthFunc(t.LEQUAL);break;case td:t.depthFunc(t.EQUAL);break;case nd:t.depthFunc(t.GEQUAL);break;case id:t.depthFunc(t.GREATER);break;case rd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=he}},setLocked:function(he){I=he},setClear:function(he){me!==he&&(de&&(he=1-he),t.clearDepth(he),me=he)},reset:function(){I=!1,G=null,Q=null,me=null,de=!1}}}function r(){let I=!1,de=null,G=null,Q=null,me=null,he=null,Ue=null,xt=null,kt=null;return{setTest:function(Je){I||(Je?le(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(Je){de!==Je&&!I&&(t.stencilMask(Je),de=Je)},setFunc:function(Je,bn,ei){(G!==Je||Q!==bn||me!==ei)&&(t.stencilFunc(Je,bn,ei),G=Je,Q=bn,me=ei)},setOp:function(Je,bn,ei){(he!==Je||Ue!==bn||xt!==ei)&&(t.stencilOp(Je,bn,ei),he=Je,Ue=bn,xt=ei)},setLocked:function(Je){I=Je},setClear:function(Je){kt!==Je&&(t.clearStencil(Je),kt=Je)},reset:function(){I=!1,de=null,G=null,Q=null,me=null,he=null,Ue=null,xt=null,kt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,p=[],_=null,S=!1,v=null,u=null,m=null,x=null,y=null,N=null,C=null,A=new Be(0,0,0),b=0,w=!1,M=null,P=null,V=null,B=null,$=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(L)[1]),Y=J>=1):L.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),Y=J>=2);let j=null,K={};const oe=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),Xe=new it().fromArray(oe),W=new it().fromArray(ye);function se(I,de,G,Q){const me=new Uint8Array(4),he=t.createTexture();t.bindTexture(I,he),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<G;Ue++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(de+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return he}const fe={};fe[t.TEXTURE_2D]=se(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(t.DEPTH_TEST),a.setFunc(Ts),Ve(!1),He(cp),le(t.CULL_FACE),O(Xi);function le(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function Ae(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function Ne(I,de){return h[I]!==de?(t.bindFramebuffer(I,de),h[I]=de,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=de),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=de),!0):!1}function ke(I,de){let G=p,Q=!1;if(I){G=d.get(de),G===void 0&&(G=[],d.set(de,G));const me=I.textures;if(G.length!==me.length||G[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ue=me.length;he<Ue;he++)G[he]=t.COLOR_ATTACHMENT0+he;G.length=me.length,Q=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,Q=!0);Q&&t.drawBuffers(G)}function ot(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const We={[fr]:t.FUNC_ADD,[iy]:t.FUNC_SUBTRACT,[ry]:t.FUNC_REVERSE_SUBTRACT};We[sy]=t.MIN,We[ay]=t.MAX;const mt={[oy]:t.ZERO,[ly]:t.ONE,[cy]:t.SRC_COLOR,[Zu]:t.SRC_ALPHA,[my]:t.SRC_ALPHA_SATURATE,[hy]:t.DST_COLOR,[dy]:t.DST_ALPHA,[uy]:t.ONE_MINUS_SRC_COLOR,[Ku]:t.ONE_MINUS_SRC_ALPHA,[py]:t.ONE_MINUS_DST_COLOR,[fy]:t.ONE_MINUS_DST_ALPHA,[gy]:t.CONSTANT_COLOR,[vy]:t.ONE_MINUS_CONSTANT_COLOR,[_y]:t.CONSTANT_ALPHA,[xy]:t.ONE_MINUS_CONSTANT_ALPHA};function O(I,de,G,Q,me,he,Ue,xt,kt,Je){if(I===Xi){S===!0&&(Ae(t.BLEND),S=!1);return}if(S===!1&&(le(t.BLEND),S=!0),I!==ny){if(I!==v||Je!==w){if((u!==fr||y!==fr)&&(t.blendEquation(t.FUNC_ADD),u=fr,y=fr),Je)switch(I){case ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $u:t.blendFunc(t.ONE,t.ONE);break;case up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $u:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,x=null,N=null,C=null,A.set(0,0,0),b=0,v=I,w=Je}return}me=me||de,he=he||G,Ue=Ue||Q,(de!==u||me!==y)&&(t.blendEquationSeparate(We[de],We[me]),u=de,y=me),(G!==m||Q!==x||he!==N||Ue!==C)&&(t.blendFuncSeparate(mt[G],mt[Q],mt[he],mt[Ue]),m=G,x=Q,N=he,C=Ue),(xt.equals(A)===!1||kt!==b)&&(t.blendColor(xt.r,xt.g,xt.b,kt),A.copy(xt),b=kt),v=I,w=!1}function wt(I,de){I.side===$n?Ae(t.CULL_FACE):le(t.CULL_FACE);let G=I.side===an;de&&(G=!G),Ve(G),I.blending===ps&&I.transparent===!1?O(Xi):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){M!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),M=I)}function He(I){I!==ey?(le(t.CULL_FACE),I!==P&&(I===cp?t.cullFace(t.BACK):I===ty?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),P=I}function Re(I){I!==V&&(Y&&t.lineWidth(I),V=I)}function tt(I,de,G){I?(le(t.POLYGON_OFFSET_FILL),(B!==de||$!==G)&&(t.polygonOffset(de,G),B=de,$=G)):Ae(t.POLYGON_OFFSET_FILL)}function Ce(I){I?le(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+ee-1),j!==I&&(t.activeTexture(I),j=I)}function E(I,de,G){G===void 0&&(j===null?G=t.TEXTURE0+ee-1:G=j);let Q=K[G];Q===void 0&&(Q={type:void 0,texture:void 0},K[G]=Q),(Q.type!==I||Q.texture!==de)&&(j!==G&&(t.activeTexture(G),j=G),t.bindTexture(I,de||fe[I]),Q.type=I,Q.texture=de)}function k(){const I=K[j];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){Xe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Xe.copy(I))}function ge(I){W.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),W.copy(I))}function _e(I,de){let G=c.get(de);G===void 0&&(G=new WeakMap,c.set(de,G));let Q=G.get(I);Q===void 0&&(Q=t.getUniformBlockIndex(de,I.name),G.set(I,Q))}function De(I,de){const Q=c.get(de).get(I);l.get(de)!==Q&&(t.uniformBlockBinding(de,Q,I.__bindingPointIndex),l.set(de,Q))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},j=null,K={},h={},d=new WeakMap,p=[],_=null,S=!1,v=null,u=null,m=null,x=null,y=null,N=null,C=null,A=new Be(0,0,0),b=0,w=!1,M=null,P=null,V=null,B=null,$=null,Xe.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Ae,bindFramebuffer:Ne,drawBuffers:ke,useProgram:ot,setBlending:O,setMaterial:wt,setFlipSided:Ve,setCullFace:He,setLineWidth:Re,setPolygonOffset:tt,setScissorTest:Ce,activeTexture:R,bindTexture:E,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:ce,texImage3D:Te,updateUBOMapping:_e,uniformBlockBinding:De,texStorage2D:Pe,texStorage3D:ne,texSubImage2D:X,texSubImage3D:xe,compressedTexSubImage2D:q,compressedTexSubImage3D:ie,scissor:Le,viewport:ge,reset:rt}}function am(t,e,n,i){const r=tw(i);switch(n){case zv:return t*e;case Hv:return t*e;case Vv:return t*e*2;case Gv:return t*e/r.components*r.byteLength;case Ff:return t*e/r.components*r.byteLength;case Wv:return t*e*2/r.components*r.byteLength;case Of:return t*e*2/r.components*r.byteLength;case Bv:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case kf:return t*e*4/r.components*r.byteLength;case Zo:case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qo:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ud:case fd:return Math.max(t,16)*Math.max(e,8)/4;case cd:case dd:return Math.max(t,8)*Math.max(e,8)/2;case hd:case pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Td:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case el:case Nd:case Pd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jv:case Ld:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Id:case Dd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tw(t){switch(t){case yi:case Fv:return{byteLength:1,components:1};case Fa:case Ov:case Ga:return{byteLength:2,components:1};case Df:case Uf:return{byteLength:2,components:4};case Cr:case If:case fi:return{byteLength:4,components:1};case kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function nw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return p?new OffscreenCanvas(R,E):Cl("canvas")}function S(R,E,k){let Z=1;const te=Ce(R);if((te.width>k||te.height>k)&&(Z=k/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(Z*te.width),xe=Math.floor(Z*te.height);h===void 0&&(h=_(X,xe));const q=E?_(X,xe):h;return q.width=X,q.height=xe,q.getContext("2d").drawImage(R,0,0,X,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+X+"x"+xe+")."),q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function v(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function m(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,E,k,Z,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=E;if(E===t.RED&&(k===t.FLOAT&&(X=t.R32F),k===t.HALF_FLOAT&&(X=t.R16F),k===t.UNSIGNED_BYTE&&(X=t.R8)),E===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.R8UI),k===t.UNSIGNED_SHORT&&(X=t.R16UI),k===t.UNSIGNED_INT&&(X=t.R32UI),k===t.BYTE&&(X=t.R8I),k===t.SHORT&&(X=t.R16I),k===t.INT&&(X=t.R32I)),E===t.RG&&(k===t.FLOAT&&(X=t.RG32F),k===t.HALF_FLOAT&&(X=t.RG16F),k===t.UNSIGNED_BYTE&&(X=t.RG8)),E===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.RG8UI),k===t.UNSIGNED_SHORT&&(X=t.RG16UI),k===t.UNSIGNED_INT&&(X=t.RG32UI),k===t.BYTE&&(X=t.RG8I),k===t.SHORT&&(X=t.RG16I),k===t.INT&&(X=t.RG32I)),E===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.RGB8UI),k===t.UNSIGNED_SHORT&&(X=t.RGB16UI),k===t.UNSIGNED_INT&&(X=t.RGB32UI),k===t.BYTE&&(X=t.RGB8I),k===t.SHORT&&(X=t.RGB16I),k===t.INT&&(X=t.RGB32I)),E===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),k===t.UNSIGNED_INT&&(X=t.RGBA32UI),k===t.BYTE&&(X=t.RGBA8I),k===t.SHORT&&(X=t.RGBA16I),k===t.INT&&(X=t.RGBA32I)),E===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),E===t.RGBA){const xe=te?$l:Ye.getTransfer(Z);k===t.FLOAT&&(X=t.RGBA32F),k===t.HALF_FLOAT&&(X=t.RGBA16F),k===t.UNSIGNED_BYTE&&(X=xe===nt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(R,E){let k;return R?E===null||E===Cr||E===Cs?k=t.DEPTH24_STENCIL8:E===fi?k=t.DEPTH32F_STENCIL8:E===Fa&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cr||E===Cs?k=t.DEPTH_COMPONENT24:E===fi?k=t.DEPTH_COMPONENT32F:E===Fa&&(k=t.DEPTH_COMPONENT16),k}function N(R,E){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vn&&R.minFilter!==Zn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),b(E),E.isVideoTexture&&f.delete(E)}function A(R){const E=R.target;E.removeEventListener("dispose",A),M(E)}function b(R){const E=i.get(R);if(E.__webglInit===void 0)return;const k=R.source,Z=d.get(k);if(Z){const te=Z[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(R),Object.keys(Z).length===0&&d.delete(k)}i.remove(R)}function w(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const k=R.source,Z=d.get(k);delete Z[E.__cacheKey],a.memory.textures--}function M(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let te=0;te<E.__webglFramebuffer[Z].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[Z][te]);else t.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)t.deleteFramebuffer(E.__webglFramebuffer[Z]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=R.textures;for(let Z=0,te=k.length;Z<te;Z++){const X=i.get(k[Z]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(k[Z])}i.remove(R)}let P=0;function V(){P=0}function B(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function $(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function ee(R,E){const k=i.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,R,E);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+E)}function Y(R,E){const k=i.get(R);if(R.version>0&&k.__version!==R.version){W(k,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+E)}function J(R,E){const k=i.get(R);if(R.version>0&&k.__version!==R.version){W(k,R,E);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+E)}function L(R,E){const k=i.get(R);if(R.version>0&&k.__version!==R.version){se(k,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+E)}const j={[od]:t.REPEAT,[vr]:t.CLAMP_TO_EDGE,[ld]:t.MIRRORED_REPEAT},K={[Vn]:t.NEAREST,[Ry]:t.NEAREST_MIPMAP_NEAREST,[ho]:t.NEAREST_MIPMAP_LINEAR,[Zn]:t.LINEAR,[wc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},oe={[Ly]:t.NEVER,[ky]:t.ALWAYS,[Iy]:t.LESS,[Yv]:t.LEQUAL,[Dy]:t.EQUAL,[Oy]:t.GEQUAL,[Uy]:t.GREATER,[Fy]:t.NOTEQUAL};function ye(R,E){if(E.type===fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zn||E.magFilter===wc||E.magFilter===ho||E.magFilter===_r||E.minFilter===Zn||E.minFilter===wc||E.minFilter===ho||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,j[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,j[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,j[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vn||E.minFilter!==ho&&E.minFilter!==_r||E.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Xe(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const Z=E.source;let te=d.get(Z);te===void 0&&(te={},d.set(Z,te));const X=$(E);if(X!==R.__cacheKey){te[X]===void 0&&(te[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[X].usedTimes++;const xe=te[R.__cacheKey];xe!==void 0&&(te[R.__cacheKey].usedTimes--,xe.usedTimes===0&&w(E)),R.__cacheKey=X,R.__webglTexture=te[X].texture}return k}function W(R,E,k){let Z=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=t.TEXTURE_3D);const te=Xe(R,E),X=E.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+k);const xe=i.get(X);if(X.version!==xe.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const q=Ye.getPrimaries(Ye.workingColorSpace),ie=E.colorSpace===Ui?null:Ye.getPrimaries(E.colorSpace),Pe=E.colorSpace===Ui||q===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ne=S(E.image,!1,r.maxTextureSize);ne=tt(E,ne);const ce=s.convert(E.format,E.colorSpace),Te=s.convert(E.type);let Le=x(E.internalFormat,ce,Te,E.colorSpace,E.isVideoTexture);ye(Z,E);let ge;const _e=E.mipmaps,De=E.isVideoTexture!==!0,rt=xe.__version===void 0||te===!0,I=X.dataReady,de=N(E,ne);if(E.isDepthTexture)Le=y(E.format===Rs,E.type),rt&&(De?n.texStorage2D(t.TEXTURE_2D,1,Le,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Le,ne.width,ne.height,0,ce,Te,null));else if(E.isDataTexture)if(_e.length>0){De&&rt&&n.texStorage2D(t.TEXTURE_2D,de,Le,_e[0].width,_e[0].height);for(let G=0,Q=_e.length;G<Q;G++)ge=_e[G],De?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ge.width,ge.height,ce,Te,ge.data):n.texImage2D(t.TEXTURE_2D,G,Le,ge.width,ge.height,0,ce,Te,ge.data);E.generateMipmaps=!1}else De?(rt&&n.texStorage2D(t.TEXTURE_2D,de,Le,ne.width,ne.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,ce,Te,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ne.width,ne.height,0,ce,Te,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){De&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Le,_e[0].width,_e[0].height,ne.depth);for(let G=0,Q=_e.length;G<Q;G++)if(ge=_e[G],E.format!==zn)if(ce!==null)if(De){if(I)if(E.layerUpdates.size>0){const me=am(ge.width,ge.height,E.format,E.type);for(const he of E.layerUpdates){const Ue=ge.data.subarray(he*me/ge.data.BYTES_PER_ELEMENT,(he+1)*me/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,he,ge.width,ge.height,1,ce,Ue)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,ne.depth,ce,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Le,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,ne.depth,ce,Te,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Le,ge.width,ge.height,ne.depth,0,ce,Te,ge.data)}else{De&&rt&&n.texStorage2D(t.TEXTURE_2D,de,Le,_e[0].width,_e[0].height);for(let G=0,Q=_e.length;G<Q;G++)ge=_e[G],E.format!==zn?ce!==null?De?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,ge.width,ge.height,ce,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ge.width,ge.height,ce,Te,ge.data):n.texImage2D(t.TEXTURE_2D,G,Le,ge.width,ge.height,0,ce,Te,ge.data)}else if(E.isDataArrayTexture)if(De){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Le,ne.width,ne.height,ne.depth),I)if(E.layerUpdates.size>0){const G=am(ne.width,ne.height,E.format,E.type);for(const Q of E.layerUpdates){const me=ne.data.subarray(Q*G/ne.data.BYTES_PER_ELEMENT,(Q+1)*G/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,ce,Te,me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ce,Te,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,ce,Te,ne.data);else if(E.isData3DTexture)De?(rt&&n.texStorage3D(t.TEXTURE_3D,de,Le,ne.width,ne.height,ne.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ce,Te,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,ce,Te,ne.data);else if(E.isFramebufferTexture){if(rt)if(De)n.texStorage2D(t.TEXTURE_2D,de,Le,ne.width,ne.height);else{let G=ne.width,Q=ne.height;for(let me=0;me<de;me++)n.texImage2D(t.TEXTURE_2D,me,Le,G,Q,0,ce,Te,null),G>>=1,Q>>=1}}else if(_e.length>0){if(De&&rt){const G=Ce(_e[0]);n.texStorage2D(t.TEXTURE_2D,de,Le,G.width,G.height)}for(let G=0,Q=_e.length;G<Q;G++)ge=_e[G],De?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ce,Te,ge):n.texImage2D(t.TEXTURE_2D,G,Le,ce,Te,ge);E.generateMipmaps=!1}else if(De){if(rt){const G=Ce(ne);n.texStorage2D(t.TEXTURE_2D,de,Le,G.width,G.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Te,ne)}else n.texImage2D(t.TEXTURE_2D,0,Le,ce,Te,ne);v(E)&&u(Z),xe.__version=X.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function se(R,E,k){if(E.image.length!==6)return;const Z=Xe(R,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const X=i.get(te);if(te.version!==X.__version||Z===!0){n.activeTexture(t.TEXTURE0+k);const xe=Ye.getPrimaries(Ye.workingColorSpace),q=E.colorSpace===Ui?null:Ye.getPrimaries(E.colorSpace),ie=E.colorSpace===Ui||xe===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let Q=0;Q<6;Q++)!Pe&&!ne?ce[Q]=S(E.image[Q],!0,r.maxCubemapSize):ce[Q]=ne?E.image[Q].image:E.image[Q],ce[Q]=tt(E,ce[Q]);const Te=ce[0],Le=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),_e=x(E.internalFormat,Le,ge,E.colorSpace),De=E.isVideoTexture!==!0,rt=X.__version===void 0||Z===!0,I=te.dataReady;let de=N(E,Te);ye(t.TEXTURE_CUBE_MAP,E);let G;if(Pe){De&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,_e,Te.width,Te.height);for(let Q=0;Q<6;Q++){G=ce[Q].mipmaps;for(let me=0;me<G.length;me++){const he=G[me];E.format!==zn?Le!==null?De?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,he.width,he.height,Le,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,he.width,he.height,Le,ge,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,_e,he.width,he.height,0,Le,ge,he.data)}}}else{if(G=E.mipmaps,De&&rt){G.length>0&&de++;const Q=Ce(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,_e,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ce[Q].width,ce[Q].height,Le,ge,ce[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,_e,ce[Q].width,ce[Q].height,0,Le,ge,ce[Q].data);for(let me=0;me<G.length;me++){const Ue=G[me].image[Q].image;De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Ue.width,Ue.height,Le,ge,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,_e,Ue.width,Ue.height,0,Le,ge,Ue.data)}}else{De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,ge,ce[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,_e,Le,ge,ce[Q]);for(let me=0;me<G.length;me++){const he=G[me];De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Le,ge,he.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,_e,Le,ge,he.image[Q])}}}v(E)&&u(t.TEXTURE_CUBE_MAP),X.__version=te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function fe(R,E,k,Z,te,X){const xe=s.convert(k.format,k.colorSpace),q=s.convert(k.type),ie=x(k.internalFormat,xe,q,k.colorSpace),Pe=i.get(E),ne=i.get(k);if(ne.__renderTarget=E,!Pe.__hasExternalTextures){const ce=Math.max(1,E.width>>X),Te=Math.max(1,E.height>>X);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,X,ie,ce,Te,E.depth,0,xe,q,null):n.texImage2D(te,X,ie,ce,Te,0,xe,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),He(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,te,ne.__webglTexture,0,Ve(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,te,ne.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(R,E,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const Z=E.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,X=y(E.stencilBuffer,te),xe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=Ve(E);He(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,X,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,X,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,X,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,R)}else{const Z=E.textures;for(let te=0;te<Z.length;te++){const X=Z[te],xe=s.convert(X.format,X.colorSpace),q=s.convert(X.type),ie=x(X.internalFormat,xe,q,X.colorSpace),Pe=Ve(E);k&&He(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ie,E.width,E.height):He(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,ie,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ie,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ee(E.depthTexture,0);const te=Z.__webglTexture,X=Ve(E);if(E.depthTexture.format===ms)He(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(E.depthTexture.format===Rs)He(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const E=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Z}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,R)}else if(k){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=t.createRenderbuffer(),le(E.__webglDepthbuffer[Z],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,X)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),le(E.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(R,E,k){const Z=i.get(R);E!==void 0&&fe(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ne(R)}function ot(R){const E=R.texture,k=i.get(R),Z=i.get(E);R.addEventListener("dispose",A);const te=R.textures,X=R.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=E.version,a.memory.textures++),X){k.__webglFramebuffer=[];for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[q]=[];for(let ie=0;ie<E.mipmaps.length;ie++)k.__webglFramebuffer[q][ie]=t.createFramebuffer()}else k.__webglFramebuffer[q]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)k.__webglFramebuffer[q]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(xe)for(let q=0,ie=te.length;q<ie;q++){const Pe=i.get(te[q]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&He(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let q=0;q<te.length;q++){const ie=te[q];k.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[q]);const Pe=s.convert(ie.format,ie.colorSpace),ne=s.convert(ie.type),ce=x(ie.internalFormat,Pe,ne,ie.colorSpace,R.isXRRenderTarget===!0),Te=Ve(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,ce,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,k.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),le(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ye(t.TEXTURE_CUBE_MAP,E);for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)fe(k.__webglFramebuffer[q][ie],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie);else fe(k.__webglFramebuffer[q],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);v(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let q=0,ie=te.length;q<ie;q++){const Pe=te[q],ne=i.get(Pe);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),ye(t.TEXTURE_2D,Pe),fe(k.__webglFramebuffer,R,Pe,t.COLOR_ATTACHMENT0+q,t.TEXTURE_2D,0),v(Pe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,Z.__webglTexture),ye(q,E),E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)fe(k.__webglFramebuffer[ie],R,E,t.COLOR_ATTACHMENT0,q,ie);else fe(k.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,q,0);v(E)&&u(q),n.unbindTexture()}R.depthBuffer&&Ne(R)}function We(R){const E=R.textures;for(let k=0,Z=E.length;k<Z;k++){const te=E[k];if(v(te)){const X=m(R),xe=i.get(te).__webglTexture;n.bindTexture(X,xe),u(X),n.unbindTexture()}}}const mt=[],O=[];function wt(R){if(R.samples>0){if(He(R)===!1){const E=R.textures,k=R.width,Z=R.height;let te=t.COLOR_BUFFER_BIT;const X=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(R),q=E.length>1;if(q)for(let ie=0;ie<E.length;ie++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ie]);const Pe=i.get(E[ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,k,Z,0,0,k,Z,te,t.NEAREST),l===!0&&(mt.length=0,O.length=0,mt.push(t.COLOR_ATTACHMENT0+ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(mt.push(X),O.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,O)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let ie=0;ie<E.length;ie++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ie]);const Pe=i.get(E[ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ve(R){return Math.min(r.maxSamples,R.samples)}function He(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(R){const E=a.render.frame;f.get(R)!==E&&(f.set(R,E),R.update())}function tt(R,E){const k=R.colorSpace,Z=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Is&&k!==Ui&&(Ye.getTransfer(k)===nt?(Z!==zn||te!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=L,this.rebindTextures=ke,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=He}function iw(t,e){function n(i,r=Ui){let s;const a=Ye.getTransfer(r);if(i===yi)return t.UNSIGNED_BYTE;if(i===Df)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Uf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===kv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Fv)return t.BYTE;if(i===Ov)return t.SHORT;if(i===Fa)return t.UNSIGNED_SHORT;if(i===If)return t.INT;if(i===Cr)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===Ga)return t.HALF_FLOAT;if(i===zv)return t.ALPHA;if(i===Bv)return t.RGB;if(i===zn)return t.RGBA;if(i===Hv)return t.LUMINANCE;if(i===Vv)return t.LUMINANCE_ALPHA;if(i===ms)return t.DEPTH_COMPONENT;if(i===Rs)return t.DEPTH_STENCIL;if(i===Gv)return t.RED;if(i===Ff)return t.RED_INTEGER;if(i===Wv)return t.RG;if(i===Of)return t.RG_INTEGER;if(i===kf)return t.RGBA_INTEGER;if(i===Zo||i===Ko||i===Qo||i===Jo)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cd||i===ud||i===dd||i===fd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ud)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hd||i===pd||i===md)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hd||i===pd)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===md)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gd||i===vd||i===_d||i===xd||i===yd||i===Sd||i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Cd||i===Rd||i===bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_d)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Md)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ed)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Td)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ad)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===el||i===Nd||i===Pd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===el)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jv||i===Ld||i===Id||i===Dd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===el)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ld)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Id)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class rw extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xr extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sw={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const v=n.getJointPose(S,i),u=this._getHandJoint(c,S);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const aw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ow=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ki({vertexShader:aw,fragmentShader:ow,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gt(new Zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cw extends Ds{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,_=null;const S=new lw,v=n.getContextAttributes();let u=null,m=null;const x=[],y=[],N=new je;let C=null;const A=new hn;A.viewport=new it;const b=new hn;b.viewport=new it;const w=[A,b],M=new rw;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let se=x[W];return se===void 0&&(se=new Qc,x[W]=se),se.getTargetRaySpace()},this.getControllerGrip=function(W){let se=x[W];return se===void 0&&(se=new Qc,x[W]=se),se.getGripSpace()},this.getHand=function(W){let se=x[W];return se===void 0&&(se=new Qc,x[W]=se),se.getHandSpace()};function B(W){const se=y.indexOf(W.inputSource);if(se===-1)return;const fe=x[se];fe!==void 0&&(fe.update(W.inputSource,W.frame,c||a),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ee);for(let W=0;W<x.length;W++){const se=y[W];se!==null&&(y[W]=null,x[W].disconnect(se))}P=null,V=null,S.reset(),e.setRenderTarget(u),p=null,d=null,h=null,r=null,m=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new Rr(p.framebufferWidth,p.framebufferHeight,{format:zn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let se=null,fe=null,le=null;v.depth&&(le=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=v.stencil?Rs:ms,fe=v.stencil?Cs:Cr);const Ae={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Rr(d.textureWidth,d.textureHeight,{format:zn,type:yi,depthTexture:new a0(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ee(W){for(let se=0;se<W.removed.length;se++){const fe=W.removed[se],le=y.indexOf(fe);le>=0&&(y[le]=null,x[le].disconnect(fe))}for(let se=0;se<W.added.length;se++){const fe=W.added[se];let le=y.indexOf(fe);if(le===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=y.length){y.push(fe),le=Ne;break}else if(y[Ne]===null){y[Ne]=fe,le=Ne;break}if(le===-1)break}const Ae=x[le];Ae&&Ae.connect(fe)}}const Y=new U,J=new U;function L(W,se,fe){Y.setFromMatrixPosition(se.matrixWorld),J.setFromMatrixPosition(fe.matrixWorld);const le=Y.distanceTo(J),Ae=se.projectionMatrix.elements,Ne=fe.projectionMatrix.elements,ke=Ae[14]/(Ae[10]-1),ot=Ae[14]/(Ae[10]+1),We=(Ae[9]+1)/Ae[5],mt=(Ae[9]-1)/Ae[5],O=(Ae[8]-1)/Ae[0],wt=(Ne[8]+1)/Ne[0],Ve=ke*O,He=ke*wt,Re=le/(-O+wt),tt=Re*-O;if(se.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(tt),W.translateZ(Re),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ae[10]===-1)W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ce=ke+Re,R=ot+Re,E=Ve-tt,k=He+(le-tt),Z=We*ot/R*Ce,te=mt*ot/R*Ce;W.projectionMatrix.makePerspective(E,k,Z,te,Ce,R),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function j(W,se){se===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(se.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let se=W.near,fe=W.far;S.texture!==null&&(S.depthNear>0&&(se=S.depthNear),S.depthFar>0&&(fe=S.depthFar)),M.near=b.near=A.near=se,M.far=b.far=A.far=fe,(P!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,V=M.far),A.layers.mask=W.layers.mask|2,b.layers.mask=W.layers.mask|4,M.layers.mask=A.layers.mask|b.layers.mask;const le=W.parent,Ae=M.cameras;j(M,le);for(let Ne=0;Ne<Ae.length;Ne++)j(Ae[Ne],le);Ae.length===2?L(M,A,b):M.projectionMatrix.copy(A.projectionMatrix),K(W,M,le)};function K(W,se,fe){fe===null?W.matrix.copy(se.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(se.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Oa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let oe=null;function ye(W,se){if(f=se.getViewerPose(c||a),_=se,f!==null){const fe=f.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let le=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Ne=0;Ne<fe.length;Ne++){const ke=fe[Ne];let ot=null;if(p!==null)ot=p.getViewport(ke);else{const mt=h.getViewSubImage(d,ke);ot=mt.viewport,Ne===0&&(e.setRenderTargetTextures(m,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(m))}let We=w[Ne];We===void 0&&(We=new hn,We.layers.enable(Ne),We.viewport=new it,w[Ne]=We),We.matrix.fromArray(ke.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ke.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ot.x,ot.y,ot.width,ot.height),Ne===0&&(M.matrix.copy(We.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(We)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ne=h.getDepthInformation(fe[0]);Ne&&Ne.isValid&&Ne.texture&&S.init(e,Ne,r.renderState)}}for(let fe=0;fe<x.length;fe++){const le=y[fe],Ae=x[fe];le!==null&&Ae!==void 0&&Ae.update(le,se,c||a)}oe&&oe(W,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}const Xe=new r0;Xe.setAnimationLoop(ye),this.setAnimationLoop=function(W){oe=W},this.dispose=function(){}}}const or=new Jn,uw=new ft;function dw(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,t0(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,m,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),h(v,u)):u.isMeshPhongMaterial?(s(v,u),f(v,u)):u.isMeshStandardMaterial?(s(v,u),d(v,u),u.isMeshPhysicalMaterial&&p(v,u,y)):u.isMeshMatcapMaterial?(s(v,u),_(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),S(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(a(v,u),u.isLineDashedMaterial&&o(v,u)):u.isPointsMaterial?l(v,u,m,x):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===an&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===an&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const m=e.get(u),x=m.envMap,y=m.envMapRotation;x&&(v.envMap.value=x,or.copy(y),or.x*=-1,or.y*=-1,or.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),v.envMapRotation.value.setFromMatrix4(uw.makeRotationFromEuler(or)),v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap&&(v.lightMap.value=u.lightMap,v.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,v.lightMapTransform)),u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function a(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function o(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,m,x){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*m,v.scale.value=x*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function f(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function h(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function d(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),u.envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function p(v,u,m){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&v.clearcoatNormalScale.value.negate())),u.dispersion>0&&(v.dispersion.value=u.dispersion),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,u){u.matcap&&(v.matcap.value=u.matcap)}function S(v,u){const m=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const y=x.program;i.uniformBlockBinding(m,y)}function c(m,x){let y=r[m.id];y===void 0&&(_(m),y=f(m),r[m.id]=y,m.addEventListener("dispose",v));const N=x.program;i.updateUBOMapping(m,N);const C=e.render.frame;s[m.id]!==C&&(d(m),s[m.id]=C)}function f(m){const x=h();m.__bindingPointIndex=x;const y=t.createBuffer(),N=m.__size,C=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,N,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function h(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const x=r[m.id],y=m.uniforms,N=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,A=y.length;C<A;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,M=b.length;w<M;w++){const P=b[w];if(p(P,C,w,N)===!0){const V=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let ee=0;ee<B.length;ee++){const Y=B[ee],J=S(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,V+$,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,y,N){const C=m.value,A=x+"_"+y;if(N[A]===void 0)return typeof C=="number"||typeof C=="boolean"?N[A]=C:N[A]=C.clone(),!0;{const b=N[A];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return N[A]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function _(m){const x=m.uniforms;let y=0;const N=16;for(let A=0,b=x.length;A<b;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,P=w.length;M<P;M++){const V=w[M],B=Array.isArray(V.value)?V.value:[V.value];for(let $=0,ee=B.length;$<ee;$++){const Y=B[$],J=S(Y),L=y%N,j=L%J.boundary,K=L+j;y+=j,K!==0&&N-K<J.storage&&(y+=N-K),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=J.storage}}}const C=y%N;return C>0&&(y+=N-C),m.__size=y,m.__cache={},this}function S(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),x}function v(m){const x=m.target;x.removeEventListener("dispose",v);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class hw{constructor(e={}){const{canvas:n=tS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),S=new Int32Array(4);let v=null,u=null;const m=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=Yi,this.toneMappingExposure=1;const y=this;let N=!1,C=0,A=0,b=null,w=-1,M=null;const P=new it,V=new it;let B=null;const $=new Be(0);let ee=0,Y=n.width,J=n.height,L=1,j=null,K=null;const oe=new it(0,0,Y,J),ye=new it(0,0,Y,J);let Xe=!1;const W=new Hf;let se=!1,fe=!1;const le=new ft,Ae=new ft,Ne=new U,ke=new it,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function mt(){return b===null?L:1}let O=i;function wt(T,D){return n.getContext(T,D)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lf}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",he,!1),O===null){const D="webgl2";if(O=wt(D,T),O===null)throw wt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ve,He,Re,tt,Ce,R,E,k,Z,te,X,xe,q,ie,Pe,ne,ce,Te,Le,ge,_e,De,rt,I;function de(){Ve=new _1(O),Ve.init(),De=new iw(O,Ve),He=new f1(O,Ve,e,De),Re=new ew(O,Ve),He.reverseDepthBuffer&&d&&Re.buffers.depth.setReversed(!0),tt=new S1(O),Ce=new zT,R=new nw(O,Ve,Re,Ce,He,De,tt),E=new p1(y),k=new v1(y),Z=new RS(O),rt=new u1(O,Z),te=new x1(O,Z,tt,rt),X=new E1(O,te,Z,tt),Le=new M1(O,He,R),ne=new h1(Ce),xe=new kT(y,E,k,Ve,He,rt,ne),q=new dw(y,Ce),ie=new HT,Pe=new YT(Ve),Te=new c1(y,E,k,Re,X,p,l),ce=new QT(y,X,He),I=new fw(O,tt,He,Re),ge=new d1(O,Ve,tt),_e=new y1(O,Ve,tt),tt.programs=xe.programs,y.capabilities=He,y.extensions=Ve,y.properties=Ce,y.renderLists=ie,y.shadowMap=ce,y.state=Re,y.info=tt}de();const G=new cw(y,O);this.xr=G,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(T){T!==void 0&&(L=T,this.setSize(Y,J,!1))},this.getSize=function(T){return T.set(Y,J)},this.setSize=function(T,D,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,J=D,n.width=Math.floor(T*L),n.height=Math.floor(D*L),z===!0&&(n.style.width=T+"px",n.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(Y*L,J*L).floor()},this.setDrawingBufferSize=function(T,D,z){Y=T,J=D,L=z,n.width=Math.floor(T*z),n.height=Math.floor(D*z),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,D,z,H){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,D,z,H),Re.viewport(P.copy(oe).multiplyScalar(L).round())},this.getScissor=function(T){return T.copy(ye)},this.setScissor=function(T,D,z,H){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,D,z,H),Re.scissor(V.copy(ye).multiplyScalar(L).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(T){Re.setScissorTest(Xe=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(T=!0,D=!0,z=!0){let H=0;if(T){let F=!1;if(b!==null){const ae=b.texture.format;F=ae===kf||ae===Of||ae===Ff}if(F){const ae=b.texture.type,pe=ae===yi||ae===Cr||ae===Fa||ae===Cs||ae===Df||ae===Uf,Se=Te.getClearColor(),Me=Te.getClearAlpha(),Ie=Se.r,Fe=Se.g,Ee=Se.b;pe?(_[0]=Ie,_[1]=Fe,_[2]=Ee,_[3]=Me,O.clearBufferuiv(O.COLOR,0,_)):(S[0]=Ie,S[1]=Fe,S[2]=Ee,S[3]=Me,O.clearBufferiv(O.COLOR,0,S))}else H|=O.COLOR_BUFFER_BIT}D&&(H|=O.DEPTH_BUFFER_BIT),z&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",he,!1),ie.dispose(),Pe.dispose(),Ce.dispose(),E.dispose(),k.dispose(),X.dispose(),rt.dispose(),I.dispose(),xe.dispose(),G.dispose(),G.removeEventListener("sessionstart",Xf),G.removeEventListener("sessionend",Yf),tr.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const T=tt.autoReset,D=ce.enabled,z=ce.autoUpdate,H=ce.needsUpdate,F=ce.type;de(),tt.autoReset=T,ce.enabled=D,ce.autoUpdate=z,ce.needsUpdate=H,ce.type=F}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ue(T){const D=T.target;D.removeEventListener("dispose",Ue),xt(D)}function xt(T){kt(T),Ce.remove(T)}function kt(T){const D=Ce.get(T).programs;D!==void 0&&(D.forEach(function(z){xe.releaseProgram(z)}),T.isShaderMaterial&&xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,z,H,F,ae){D===null&&(D=ot);const pe=F.isMesh&&F.matrixWorld.determinant()<0,Se=E0(T,D,z,H,F);Re.setMaterial(H,pe);let Me=z.index,Ie=1;if(H.wireframe===!0){if(Me=te.getWireframeAttribute(z),Me===void 0)return;Ie=2}const Fe=z.drawRange,Ee=z.attributes.position;let $e=Fe.start*Ie,st=(Fe.start+Fe.count)*Ie;ae!==null&&($e=Math.max($e,ae.start*Ie),st=Math.min(st,(ae.start+ae.count)*Ie)),Me!==null?($e=Math.max($e,0),st=Math.min(st,Me.count)):Ee!=null&&($e=Math.max($e,0),st=Math.min(st,Ee.count));const lt=st-$e;if(lt<0||lt===1/0)return;rt.setup(F,H,Se,z,Me);let Jt,Ke=ge;if(Me!==null&&(Jt=Z.get(Me),Ke=_e,Ke.setIndex(Jt)),F.isMesh)H.wireframe===!0?(Re.setLineWidth(H.wireframeLinewidth*mt()),Ke.setMode(O.LINES)):Ke.setMode(O.TRIANGLES);else if(F.isLine){let we=H.linewidth;we===void 0&&(we=1),Re.setLineWidth(we*mt()),F.isLineSegments?Ke.setMode(O.LINES):F.isLineLoop?Ke.setMode(O.LINE_LOOP):Ke.setMode(O.LINE_STRIP)}else F.isPoints?Ke.setMode(O.POINTS):F.isSprite&&Ke.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ke.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,ti=F._multiDrawCounts,Qe=F._multiDrawCount,Nn=Me?Z.get(Me).bytesPerElement:1,Lr=Ce.get(H).currentProgram.getUniforms();for(let cn=0;cn<Qe;cn++)Lr.setValue(O,"_gl_DrawID",cn),Ke.render(we[cn]/Nn,ti[cn])}else if(F.isInstancedMesh)Ke.renderInstances($e,lt,F.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ti=Math.min(z.instanceCount,we);Ke.renderInstances($e,lt,ti)}else Ke.render($e,lt)};function Je(T,D,z){T.transparent===!0&&T.side===$n&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,qa(T,D,z),T.side=Zi,T.needsUpdate=!0,qa(T,D,z),T.side=$n):qa(T,D,z)}this.compile=function(T,D,z=null){z===null&&(z=T),u=Pe.get(z),u.init(D),x.push(u),z.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const H=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const Se=ae[pe];Je(Se,z,F),H.add(Se)}else Je(ae,z,F),H.add(ae)}),x.pop(),u=null,H},this.compileAsync=function(T,D,z=null){const H=this.compile(T,D,z);return new Promise(F=>{function ae(){if(H.forEach(function(pe){Ce.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){F(T);return}setTimeout(ae,10)}Ve.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let bn=null;function ei(T){bn&&bn(T)}function Xf(){tr.stop()}function Yf(){tr.start()}const tr=new r0;tr.setAnimationLoop(ei),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(T){bn=T,G.setAnimationLoop(T),T===null?tr.stop():tr.start()},G.addEventListener("sessionstart",Xf),G.addEventListener("sessionend",Yf),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,D,b),u=Pe.get(T,x.length),u.init(D),x.push(u),Ae.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(Ae),fe=this.localClippingEnabled,se=ne.init(this.clippingPlanes,fe),v=ie.get(T,m.length),v.init(),m.push(v),G.enabled===!0&&G.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&Ql(ae,D,-1/0,y.sortObjects)}Ql(T,D,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(j,K),We=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,We&&Te.addToRenderList(v,T),this.info.render.frame++,se===!0&&ne.beginShadows();const z=u.state.shadowsArray;ce.render(z,T,D),se===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=v.opaque,F=v.transmissive;if(u.setupLights(),D.isArrayCamera){const ae=D.cameras;if(F.length>0)for(let pe=0,Se=ae.length;pe<Se;pe++){const Me=ae[pe];$f(H,F,T,Me)}We&&Te.render(T);for(let pe=0,Se=ae.length;pe<Se;pe++){const Me=ae[pe];qf(v,T,Me,Me.viewport)}}else F.length>0&&$f(H,F,T,D),We&&Te.render(T),qf(v,T,D);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(y,T,D),rt.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],se===!0&&ne.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Ql(T,D,z,H){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){H&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);const pe=X.update(T),Se=T.material;Se.visible&&v.push(T,pe,Se,z,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const pe=X.update(T),Se=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ke.copy(pe.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(Se)){const Me=pe.groups;for(let Ie=0,Fe=Me.length;Ie<Fe;Ie++){const Ee=Me[Ie],$e=Se[Ee.materialIndex];$e&&$e.visible&&v.push(T,pe,$e,z,ke.z,Ee)}}else Se.visible&&v.push(T,pe,Se,z,ke.z,null)}}const ae=T.children;for(let pe=0,Se=ae.length;pe<Se;pe++)Ql(ae[pe],D,z,H)}function qf(T,D,z,H){const F=T.opaque,ae=T.transmissive,pe=T.transparent;u.setupLightsView(z),se===!0&&ne.setGlobalState(y.clippingPlanes,z),H&&Re.viewport(P.copy(H)),F.length>0&&Ya(F,D,z),ae.length>0&&Ya(ae,D,z),pe.length>0&&Ya(pe,D,z),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function $f(T,D,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Rr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Ga:yi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ae=u.state.transmissionRenderTarget[H.id],pe=H.viewport||P;ae.setSize(pe.z,pe.w);const Se=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor($),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),We&&Te.render(z);const Me=y.toneMapping;y.toneMapping=Yi;const Ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),se===!0&&ne.setGlobalState(y.clippingPlanes,H),Ya(T,z,H),R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ee=0,$e=D.length;Ee<$e;Ee++){const st=D[Ee],lt=st.object,Jt=st.geometry,Ke=st.material,we=st.group;if(Ke.side===$n&&lt.layers.test(H.layers)){const ti=Ke.side;Ke.side=an,Ke.needsUpdate=!0,Zf(lt,z,H,Jt,Ke,we),Ke.side=ti,Ke.needsUpdate=!0,Fe=!0}}Fe===!0&&(R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae))}y.setRenderTarget(Se),y.setClearColor($,ee),Ie!==void 0&&(H.viewport=Ie),y.toneMapping=Me}function Ya(T,D,z){const H=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ae=T.length;F<ae;F++){const pe=T[F],Se=pe.object,Me=pe.geometry,Ie=H===null?pe.material:H,Fe=pe.group;Se.layers.test(z.layers)&&Zf(Se,D,z,Me,Ie,Fe)}}function Zf(T,D,z,H,F,ae){T.onBeforeRender(y,D,z,H,F,ae),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(y,D,z,H,T,ae),F.transparent===!0&&F.side===$n&&F.forceSinglePass===!1?(F.side=an,F.needsUpdate=!0,y.renderBufferDirect(z,D,H,F,T,ae),F.side=Zi,F.needsUpdate=!0,y.renderBufferDirect(z,D,H,F,T,ae),F.side=$n):y.renderBufferDirect(z,D,H,F,T,ae),T.onAfterRender(y,D,z,H,F,ae)}function qa(T,D,z){D.isScene!==!0&&(D=ot);const H=Ce.get(T),F=u.state.lights,ae=u.state.shadowsArray,pe=F.state.version,Se=xe.getParameters(T,F.state,ae,D,z),Me=xe.getProgramCacheKey(Se);let Ie=H.programs;H.environment=T.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(T.isMeshStandardMaterial?k:E).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",Ue),Ie=new Map,H.programs=Ie);let Fe=Ie.get(Me);if(Fe!==void 0){if(H.currentProgram===Fe&&H.lightsStateVersion===pe)return Qf(T,Se),Fe}else Se.uniforms=xe.getUniforms(T),T.onBeforeCompile(Se,y),Fe=xe.acquireProgram(Se,Me),Ie.set(Me,Fe),H.uniforms=Se.uniforms;const Ee=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),Qf(T,Se),H.needsLights=w0(T),H.lightsStateVersion=pe,H.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Fe,H.uniformsList=null,Fe}function Kf(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=tl.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function Qf(T,D){const z=Ce.get(T);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function E0(T,D,z,H,F){D.isScene!==!0&&(D=ot),R.resetTextureUnits();const ae=D.fog,pe=H.isMeshStandardMaterial?D.environment:null,Se=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Is,Me=(H.isMeshStandardMaterial?k:E).get(H.envMap||pe),Ie=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Fe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!z.morphAttributes.position,$e=!!z.morphAttributes.normal,st=!!z.morphAttributes.color;let lt=Yi;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(lt=y.toneMapping);const Jt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=Jt!==void 0?Jt.length:0,we=Ce.get(H),ti=u.state.lights;if(se===!0&&(fe===!0||T!==M)){const xn=T===M&&H.id===w;ne.setState(H,T,xn)}let Qe=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ti.state.version||we.outputColorSpace!==Se||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==Me||H.fog===!0&&we.fog!==ae||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ne.numPlanes||we.numIntersection!==ne.numIntersection)||we.vertexAlphas!==Ie||we.vertexTangents!==Fe||we.morphTargets!==Ee||we.morphNormals!==$e||we.morphColors!==st||we.toneMapping!==lt||we.morphTargetsCount!==Ke)&&(Qe=!0):(Qe=!0,we.__version=H.version);let Nn=we.currentProgram;Qe===!0&&(Nn=qa(H,D,F));let Lr=!1,cn=!1,ks=!1;const ct=Nn.getUniforms(),Wn=we.uniforms;if(Re.useProgram(Nn.program)&&(Lr=!0,cn=!0,ks=!0),H.id!==w&&(w=H.id,cn=!0),Lr||M!==T){Re.buffers.depth.getReversed()?(le.copy(T.projectionMatrix),iS(le),rS(le),ct.setValue(O,"projectionMatrix",le)):ct.setValue(O,"projectionMatrix",T.projectionMatrix),ct.setValue(O,"viewMatrix",T.matrixWorldInverse);const Mi=ct.map.cameraPosition;Mi!==void 0&&Mi.setValue(O,Ne.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&ct.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,cn=!0,ks=!0)}if(F.isSkinnedMesh){ct.setOptional(O,F,"bindMatrix"),ct.setOptional(O,F,"bindMatrixInverse");const xn=F.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),ct.setValue(O,"boneTexture",xn.boneTexture,R))}F.isBatchedMesh&&(ct.setOptional(O,F,"batchingTexture"),ct.setValue(O,"batchingTexture",F._matricesTexture,R),ct.setOptional(O,F,"batchingIdTexture"),ct.setValue(O,"batchingIdTexture",F._indirectTexture,R),ct.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&ct.setValue(O,"batchingColorTexture",F._colorsTexture,R));const zs=z.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0)&&Le.update(F,z,Nn),(cn||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,ct.setValue(O,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Wn.envMap.value=Me,Wn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Wn.envMapIntensity.value=D.environmentIntensity),cn&&(ct.setValue(O,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&T0(Wn,ks),ae&&H.fog===!0&&q.refreshFogUniforms(Wn,ae),q.refreshMaterialUniforms(Wn,H,L,J,u.state.transmissionRenderTarget[T.id]),tl.upload(O,Kf(we),Wn,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(tl.upload(O,Kf(we),Wn,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(O,"center",F.center),ct.setValue(O,"modelViewMatrix",F.modelViewMatrix),ct.setValue(O,"normalMatrix",F.normalMatrix),ct.setValue(O,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const xn=H.uniformsGroups;for(let Mi=0,Ei=xn.length;Mi<Ei;Mi++){const Jf=xn[Mi];I.update(Jf,Nn),I.bind(Jf,Nn)}}return Nn}function T0(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function w0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,D,z){Ce.get(T.texture).__webglTexture=D,Ce.get(T.depthTexture).__webglTexture=z;const H=Ce.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const z=Ce.get(T);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,z=0){b=T,C=D,A=z;let H=!0,F=null,ae=!1,pe=!1;if(T){const Me=Ce.get(T);if(Me.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(O.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Me.__hasExternalTextures)R.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ee=T.depthTexture;if(Me.__boundDepthTexture!==Ee){if(Ee!==null&&Ce.has(Ee)&&(T.width!==Ee.image.width||T.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(pe=!0);const Fe=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?F=Fe[D][z]:F=Fe[D],ae=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?F=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?F=Fe[z]:F=Fe,P.copy(T.viewport),V.copy(T.scissor),B=T.scissorTest}else P.copy(oe).multiplyScalar(L).floor(),V.copy(ye).multiplyScalar(L).floor(),B=Xe;if(Re.bindFramebuffer(O.FRAMEBUFFER,F)&&H&&Re.drawBuffers(T,F),Re.viewport(P),Re.scissor(V),Re.setScissorTest(B),ae){const Me=Ce.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me.__webglTexture,z)}else if(pe){const Me=Ce.get(T.texture),Ie=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.__webglTexture,z||0,Ie)}w=-1},this.readRenderTargetPixels=function(T,D,z,H,F,ae,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){Re.bindFramebuffer(O.FRAMEBUFFER,Se);try{const Me=T.texture,Ie=Me.format,Fe=Me.type;if(!He.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-H&&z>=0&&z<=T.height-F&&O.readPixels(D,z,H,F,De.convert(Ie),De.convert(Fe),ae)}finally{const Me=b!==null?Ce.get(b).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,D,z,H,F,ae,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){const Me=T.texture,Ie=Me.format,Fe=Me.type;if(!He.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-H&&z>=0&&z<=T.height-F){Re.bindFramebuffer(O.FRAMEBUFFER,Se);const Ee=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.bufferData(O.PIXEL_PACK_BUFFER,ae.byteLength,O.STREAM_READ),O.readPixels(D,z,H,F,De.convert(Ie),De.convert(Fe),0);const $e=b!==null?Ce.get(b).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,$e);const st=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await nS(O,st,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ae),O.deleteBuffer(Ee),O.deleteSync(st),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,D=null,z=0){T.isTexture!==!0&&(ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(T.image.width*H),ae=Math.floor(T.image.height*H),pe=D!==null?D.x:0,Se=D!==null?D.y:0;R.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,pe,Se,F,ae),Re.unbindTexture()},this.copyTextureToTexture=function(T,D,z=null,H=null,F=0){T.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],D=arguments[2],F=arguments[3]||0,z=null);let ae,pe,Se,Me,Ie,Fe,Ee,$e,st;const lt=T.isCompressedTexture?T.mipmaps[F]:T.image;z!==null?(ae=z.max.x-z.min.x,pe=z.max.y-z.min.y,Se=z.isBox3?z.max.z-z.min.z:1,Me=z.min.x,Ie=z.min.y,Fe=z.isBox3?z.min.z:0):(ae=lt.width,pe=lt.height,Se=lt.depth||1,Me=0,Ie=0,Fe=0),H!==null?(Ee=H.x,$e=H.y,st=H.z):(Ee=0,$e=0,st=0);const Jt=De.convert(D.format),Ke=De.convert(D.type);let we;D.isData3DTexture?(R.setTexture3D(D,0),we=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(R.setTexture2DArray(D,0),we=O.TEXTURE_2D_ARRAY):(R.setTexture2D(D,0),we=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const ti=O.getParameter(O.UNPACK_ROW_LENGTH),Qe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Nn=O.getParameter(O.UNPACK_SKIP_PIXELS),Lr=O.getParameter(O.UNPACK_SKIP_ROWS),cn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,lt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,lt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Me),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ie),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Fe);const ks=T.isDataArrayTexture||T.isData3DTexture,ct=D.isDataArrayTexture||D.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Wn=Ce.get(T),zs=Ce.get(D),xn=Ce.get(Wn.__renderTarget),Mi=Ce.get(zs.__renderTarget);Re.bindFramebuffer(O.READ_FRAMEBUFFER,xn.__webglFramebuffer),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Ei=0;Ei<Se;Ei++)ks&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.get(T).__webglTexture,F,Fe+Ei),T.isDepthTexture?(ct&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.get(D).__webglTexture,F,st+Ei),O.blitFramebuffer(Me,Ie,ae,pe,Ee,$e,ae,pe,O.DEPTH_BUFFER_BIT,O.NEAREST)):ct?O.copyTexSubImage3D(we,F,Ee,$e,st+Ei,Me,Ie,ae,pe):O.copyTexSubImage2D(we,F,Ee,$e,st+Ei,Me,Ie,ae,pe);Re.bindFramebuffer(O.READ_FRAMEBUFFER,null),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ct?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(we,F,Ee,$e,st,ae,pe,Se,Jt,Ke,lt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(we,F,Ee,$e,st,ae,pe,Se,Jt,lt.data):O.texSubImage3D(we,F,Ee,$e,st,ae,pe,Se,Jt,Ke,lt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,Ee,$e,ae,pe,Jt,Ke,lt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,Ee,$e,lt.width,lt.height,Jt,lt.data):O.texSubImage2D(O.TEXTURE_2D,F,Ee,$e,ae,pe,Jt,Ke,lt);O.pixelStorei(O.UNPACK_ROW_LENGTH,ti),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Nn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Lr),O.pixelStorei(O.UNPACK_SKIP_IMAGES,cn),F===0&&D.generateMipmaps&&O.generateMipmap(we),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,D,z=null,H=null,F=0){return T.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,T=arguments[2],D=arguments[3],F=arguments[4]||0),ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,D,z,H,F)},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,Re.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}class pw extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class d0 extends Pr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new U,bl=new U,om=new ft,Qs=new Bf,Do=new Xa,Jc=new U,lm=new U;class mw extends It{constructor(e=new ln,n=new d0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Rl.fromBufferAttribute(n,r-1),bl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Rl.distanceTo(bl);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;om.copy(r).invert(),Qs.copy(e.ray).applyMatrix4(om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=p,v=_-1;S<v;S+=c){const u=f.getX(S),m=f.getX(S+1),x=Uo(this,e,Qs,l,u,m);x&&n.push(x)}if(this.isLineLoop){const S=f.getX(_-1),v=f.getX(p),u=Uo(this,e,Qs,l,S,v);u&&n.push(u)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let S=p,v=_-1;S<v;S+=c){const u=Uo(this,e,Qs,l,S,S+1);u&&n.push(u)}if(this.isLineLoop){const S=Uo(this,e,Qs,l,_-1,p);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Uo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Rl.fromBufferAttribute(a,r),bl.fromBufferAttribute(a,s),n.distanceSqToSegment(Rl,bl,Jc,lm)>i)return;Jc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Jc);if(!(l<e.near||l>e.far))return{distance:l,point:lm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const cm=new U,um=new U;class gw extends mw{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)cm.fromBufferAttribute(n,r),um.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+cm.distanceTo(um);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class f0 extends Pr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dm=new ft,Fd=new Bf,Fo=new Xa,Oo=new U;class vw extends It{constructor(e=new ln,n=new f0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),Fo.radius+=s,e.ray.intersectsSphere(Fo)===!1)return;dm.copy(r).invert(),Fd.copy(e.ray).applyMatrix4(dm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,S=p;_<S;_++){const v=c.getX(_);Oo.fromBufferAttribute(h,v),fm(Oo,v,l,r,e,n,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,S=p;_<S;_++)Oo.fromBufferAttribute(h,_),fm(Oo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fm(t,e,n,i,r,s,a){const o=Fd.distanceSqToPoint(t);if(o<n){const l=new U;Fd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Gf extends ln{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const x=new U,y=new U,N=new U;for(let C=0;C<n.length;C+=3)p(n[C+0],x),p(n[C+1],y),p(n[C+2],N),l(x,y,N,m)}function l(m,x,y,N){const C=N+1,A=[];for(let b=0;b<=C;b++){A[b]=[];const w=m.clone().lerp(y,b/C),M=x.clone().lerp(y,b/C),P=C-b;for(let V=0;V<=P;V++)V===0&&b===C?A[b][V]=w:A[b][V]=w.clone().lerp(M,V/P)}for(let b=0;b<C;b++)for(let w=0;w<2*(C-b)-1;w++){const M=Math.floor(w/2);w%2===0?(d(A[b][M+1]),d(A[b+1][M]),d(A[b][M])):(d(A[b][M+1]),d(A[b+1][M+1]),d(A[b+1][M]))}}function c(m){const x=new U;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(m),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function f(){const m=new U;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];const y=v(m)/2/Math.PI+.5,N=u(m)/Math.PI+.5;a.push(y,1-N)}_(),h()}function h(){for(let m=0;m<a.length;m+=6){const x=a[m+0],y=a[m+2],N=a[m+4],C=Math.max(x,y,N),A=Math.min(x,y,N);C>.9&&A<.1&&(x<.2&&(a[m+0]+=1),y<.2&&(a[m+2]+=1),N<.2&&(a[m+4]+=1))}}function d(m){s.push(m.x,m.y,m.z)}function p(m,x){const y=m*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const m=new U,x=new U,y=new U,N=new U,C=new je,A=new je,b=new je;for(let w=0,M=0;w<s.length;w+=9,M+=6){m.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),C.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),b.set(a[M+4],a[M+5]),N.copy(m).add(x).add(y).divideScalar(3);const P=v(N);S(C,M+0,m,P),S(A,M+2,x,P),S(b,M+4,y,P)}}function S(m,x,y,N){N<0&&m.x===1&&(a[x]=m.x-1),y.x===0&&y.z===0&&(a[x]=N/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gf(e.vertices,e.indices,e.radius,e.details)}}class Wf extends Gf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Wf(e.radius,e.detail)}}class Nl extends ln{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new U,d=new U,p=[],_=[],S=[],v=[];for(let u=0;u<=i;u++){const m=[],x=u/i;let y=0;u===0&&a===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let N=0;N<=n;N++){const C=N/n;h.x=-e*Math.cos(r+C*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+x*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),S.push(d.x,d.y,d.z),v.push(C+y,1-x),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const x=f[u][m+1],y=f[u][m],N=f[u+1][m],C=f[u+1][m+1];(u!==0||a>0)&&p.push(x,y,C),(u!==i-1||l<Math.PI)&&p.push(y,N,C)}this.setIndex(p),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(S,3)),this.setAttribute("uv",new Dt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _a extends ln{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],f=new U,h=new U,d=new U;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const S=_/r*s,v=p/i*Math.PI*2;h.x=(e+n*Math.cos(v))*Math.cos(S),h.y=(e+n*Math.cos(v))*Math.sin(S),h.z=n*Math.sin(v),o.push(h.x,h.y,h.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const S=(r+1)*p+_-1,v=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,m=(r+1)*p+_;a.push(S,v,m),a.push(v,u,m)}this.setIndex(a),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class h0 extends Pr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xv,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _w extends h0{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jf extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const eu=new ft,hm=new U,pm=new U;class p0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hf,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(hm),pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pm),n.updateMatrixWorld(),eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mm=new ft,Js=new U,tu=new U;class xw extends p0{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),i.position.copy(Js),tu.copy(i.position),tu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(tu),i.updateMatrixWorld(),r.makeTranslation(-Js.x,-Js.y,-Js.z),mm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mm)}}class gm extends jf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new xw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yw extends p0{constructor(){super(new s0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vm extends jf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new yw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sw extends jf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_m(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=_m();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function _m(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lf);function Ew({activeMode:t="titanium",onSceneReady:e,interactiveShowcase:n=!1}){const i=be.useRef(null),r=be.useRef(null),s=be.useRef(null),a=be.useRef(null),o=be.useRef({}),l=be.useRef({x:0,y:0,targetX:0,targetY:0,isDown:!1,prevX:0,prevY:0}),c=be.useRef({current:0,target:0}),f=be.useRef(null),[h,d]=be.useState({fps:60,polyCount:"18.4K",activeShader:"PBR Physical"});return be.useEffect(()=>{const p=i.current;if(!p)return;let _;try{_=new hw({antialias:!0,alpha:!0,powerPreference:"high-performance",stencil:!1})}catch{console.warn("WebGL initialization failed");return}const S=p.clientWidth||window.innerWidth,v=p.clientHeight||window.innerHeight;_.setSize(S,v),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.toneMapping=Dv,_.toneMappingExposure=1.15,_.shadowMap.enabled=!0,_.shadowMap.type=Lv,p.appendChild(_.domElement),s.current=_;const u=new pw;r.current=u;const m=new hn(45,S/v,.1,100);m.position.set(2.2,.4,6.5),a.current=m;const x=new xr;u.add(x),o.current.masterGroup=x;const y=new Wf(1.35,1),N=new _w({color:1185052,roughness:.18,metalness:.92,clearcoat:.8,clearcoatRoughness:.1,reflectivity:.85,flatShading:!0,wireframe:!1}),C=new Gt(y,N);C.castShadow=!0,C.receiveShadow=!0,x.add(C),o.current.coreMesh=C,o.current.coreMaterial=N;const A=new Nl(.7,32,32),b=new va({color:62206,wireframe:!0,transparent:!0,opacity:.35}),w=new Gt(A,b);x.add(w),o.current.innerMesh=w,o.current.innerMat=b;const M=new xr;x.add(M),o.current.ringsGroup=M;const P=new h0({color:9741240,roughness:.25,metalness:.9,side:$n}),V=new Gt(new _a(2,.022,16,100),P),B=new Gt(new _a(2.35,.016,16,100),P),$=new Gt(new _a(2.7,.012,16,100),P);V.rotation.x=Math.PI/3,B.rotation.y=Math.PI/4,$.rotation.z=Math.PI/6,M.add(V),M.add(B),M.add($),o.current.rings=[V,B,$];const ee=new Fs(3.2,3.2,3.2),Y=new va({color:3718648,wireframe:!0,transparent:!0,opacity:.12}),J=new Gt(ee,Y);x.add(J),o.current.cageMesh=J;const L=1400,j=new ln,K=new Float32Array(L*3),oe=new Float32Array(L*3),ye=new Be(62206),Xe=new Be(11032055),W=new Be(16777215);for(let q=0;q<L;q++){const ie=3+Math.random()*12,Pe=Math.random()*Math.PI*2,ne=Math.acos(2*Math.random()-1);K[q*3]=ie*Math.sin(ne)*Math.cos(Pe),K[q*3+1]=ie*Math.sin(ne)*Math.sin(Pe),K[q*3+2]=ie*Math.cos(ne);const ce=Math.random()>.5?ye:Math.random()>.5?Xe:W;oe[q*3]=ce.r,oe[q*3+1]=ce.g,oe[q*3+2]=ce.b}j.setAttribute("position",new An(K,3)),j.setAttribute("color",new An(oe,3));const se=new f0({size:.04,vertexColors:!0,transparent:!0,opacity:.6,blending:$u}),fe=new vw(j,se);u.add(fe),o.current.particles=fe;const le=14,Ae=[],Ne=new xr;x.add(Ne),o.current.nodeGroup=Ne;for(let q=0;q<le;q++){const ie=new U((Math.random()-.5)*4.5,(Math.random()-.5)*4.5,(Math.random()-.5)*4.5);Ae.push(ie);const Pe=new Nl(.04,12,12),ne=new va({color:3718648}),ce=new Gt(Pe,ne);ce.position.copy(ie),Ne.add(ce)}const ke=[];for(let q=0;q<le;q++)for(let ie=q+1;ie<le;ie++)Ae[q].distanceTo(Ae[ie])<2.5&&ke.push(Ae[q],Ae[ie]);const ot=new ln().setFromPoints(ke),We=new d0({color:62206,transparent:!0,opacity:.15}),mt=new gw(ot,We);Ne.add(mt);const O=new Sw(658967,1.8);u.add(O);const wt=new gm(62206,3.2,14);wt.position.set(3,2,4),u.add(wt),o.current.cursorPointLight=wt;const Ve=new vm(11032055,2.4);Ve.position.set(-4,-2,-3),u.add(Ve);const He=new vm(14742270,2.2);He.position.set(5,6,6),He.castShadow=!0,u.add(He);const Re=new gm(3718648,1.2,8);Re.position.set(0,-3.5,2),u.add(Re);const tt=q=>{const ie=q.clientX/window.innerWidth*2-1,Pe=-(q.clientY/window.innerHeight)*2+1;if(l.current.targetX=ie,l.current.targetY=Pe,l.current.isDown){const ne=q.clientX-l.current.prevX,ce=q.clientY-l.current.prevY;x.rotation.y+=ne*.005,x.rotation.x+=ce*.005,l.current.prevX=q.clientX,l.current.prevY=q.clientY}},Ce=q=>{l.current.isDown=!0,l.current.prevX=q.clientX,l.current.prevY=q.clientY},R=()=>{l.current.isDown=!1},E=()=>{const q=window.scrollY||document.documentElement.scrollTop,ie=Math.max(document.documentElement.scrollHeight-window.innerHeight,1);c.current.target=Math.min(Math.max(q/ie,0),1)},k=()=>{if(!p||!_||!m)return;const q=p.clientWidth||window.innerWidth,ie=p.clientHeight||window.innerHeight;m.aspect=q/ie,m.updateProjectionMatrix(),_.setSize(q,ie)};window.addEventListener("mousemove",tt,{passive:!0}),window.addEventListener("mousedown",Ce),window.addEventListener("mouseup",R),window.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",k),E(),e&&e();let Z=new Mw,te=0,X=0;const xe=()=>{f.current=requestAnimationFrame(xe),Z.getDelta();const q=Z.getElapsedTime();if(te++,q-X>.5){const _e=Math.round(te/(q-X));d(De=>({...De,fps:_e})),te=0,X=q}l.current.x+=(l.current.targetX-l.current.x)*.06,l.current.y+=(l.current.targetY-l.current.y)*.06,c.current.current+=(c.current.target-c.current.current)*.05;const ie=c.current.current;let Pe=2.2,ne=.4,ce=6.5,Te=1,Le=0;if(ie<.15){const _e=ie/.15;Pe=Mt.lerp(2.2,0,_e),ne=Mt.lerp(.4,.2,_e),ce=Mt.lerp(6.5,5.6,_e),Te=Mt.lerp(1.2,0,_e)}else if(ie<.35){const _e=(ie-.15)/.2;Pe=Mt.lerp(0,-1.8,_e),ne=Mt.lerp(.2,-.1,_e),ce=Mt.lerp(5.6,6,_e),Te=Mt.lerp(0,-.8,_e)}else if(ie<.55){const _e=(ie-.35)/.2;Pe=Mt.lerp(-1.8,0,_e),ne=Mt.lerp(-.1,.4,_e),ce=Mt.lerp(6,5.2,_e),Te=Mt.lerp(-.8,0,_e)}else if(ie<.75){const _e=(ie-.55)/.2;Pe=Mt.lerp(0,1.4,_e),ne=Mt.lerp(.4,.8,_e),ce=Mt.lerp(5.2,6.8,_e),Te=Mt.lerp(0,.7,_e)}else{const _e=(ie-.75)/.25;Pe=Mt.lerp(1.4,0,_e),ne=Mt.lerp(.8,-.3,_e),ce=Mt.lerp(6.8,6,_e),Te=Mt.lerp(.7,0,_e)}m.position.x+=(Pe+l.current.x*.45-m.position.x)*.06,m.position.y+=(ne+l.current.y*.35-m.position.y)*.06,m.position.z+=(ce-m.position.z)*.06,m.lookAt(Te*.5,Le,0),x.position.x+=(Te-x.position.x)*.06,x.position.y=Math.sin(q*.8)*.12,l.current.isDown||(C.rotation.y+=.006,C.rotation.x=Math.sin(q*.5)*.15,V.rotation.x+=.008,V.rotation.y+=.004,B.rotation.y+=.01,B.rotation.z+=.006,$.rotation.z-=.009,$.rotation.x+=.005,J.rotation.y-=.003,J.rotation.x-=.002,Ne.rotation.y+=.004);const ge=1+Math.sin(q*2.4)*.12;w.scale.set(ge,ge,ge),fe.rotation.y=q*.02,fe.rotation.x=Math.sin(q*.015)*.1,wt.position.x=l.current.x*5,wt.position.y=l.current.y*3.5,wt.position.z=3.5+Math.sin(q)*.5,_.render(u,m)};return xe(),()=>{f.current&&cancelAnimationFrame(f.current),window.removeEventListener("mousemove",tt),window.removeEventListener("mousedown",Ce),window.removeEventListener("mouseup",R),window.removeEventListener("scroll",E),window.removeEventListener("resize",k),_.domElement&&p.contains(_.domElement)&&p.removeChild(_.domElement),_.dispose()}},[]),be.useEffect(()=>{const{coreMesh:p,coreMaterial:_,innerMesh:S,innerMat:v,cageMesh:u}=o.current;!p||!_||!S||!v||!u||(t==="titanium"?(_.wireframe=!1,_.color.setHex(1185052),_.metalness=.92,_.roughness=.18,v.opacity=.35,v.color.setHex(62206),u.visible=!0,d(m=>({...m,activeShader:"Titanium PBR Physical"}))):t==="quantum"?(_.wireframe=!1,_.color.setHex(135977),_.metalness=.5,_.roughness=.1,v.opacity=.85,v.color.setHex(3718648),u.visible=!0,d(m=>({...m,activeShader:"Quantum Luminescent"}))):t==="wireframe"?(_.wireframe=!0,_.color.setHex(62206),v.opacity=.7,v.color.setHex(11032055),u.visible=!0,d(m=>({...m,activeShader:"Laser Holographic Wireframe"}))):t==="neural"&&(_.wireframe=!1,_.color.setHex(1839146),_.metalness=.95,_.roughness=.3,v.opacity=.9,v.color.setHex(14239471),u.visible=!1,d(m=>({...m,activeShader:"Neural Synapse Grid"}))))},[t]),g.jsx("div",{ref:i,className:`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${n?"pointer-events-auto cursor-grab active:cursor-grabbing":""}`,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,overflow:"hidden"},children:g.jsxs("div",{className:"webgl-render-telemetry",children:[g.jsx("span",{className:"telemetry-fps-dot"}),g.jsxs("span",{className:"telemetry-stat-text",children:[h.fps," FPS"]}),g.jsx("span",{className:"telemetry-sep",children:"/"}),g.jsxs("span",{className:"telemetry-stat-text",children:["GL: ",h.polyCount]}),g.jsx("span",{className:"telemetry-sep",children:"/"}),g.jsx("span",{className:"telemetry-shader-name",children:h.activeShader})]})})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m0=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ww={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=be.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>be.createElement("svg",{ref:l,...ww,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:m0("lucide",r),...o},[...a.map(([c,f])=>be.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=(t,e)=>{const n=be.forwardRef(({className:i,...r},s)=>be.createElement(Aw,{ref:s,iconNode:e,className:m0(`lucide-${Tw(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=ht("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=ht("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=ht("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=ht("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=ht("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=ht("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=ht("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=ht("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=ht("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=ht("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=ht("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=ht("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=ht("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=ht("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=ht("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=ht("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=ht("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=ht("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=ht("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=ht("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=ht("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=ht("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=ht("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=ht("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=ht("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);class Ww{constructor(){this.ctx=null,this.enabled=!1}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggle(){return this.init(),this.enabled=!this.enabled,this.enabled&&this.playActivate(),this.enabled}playHover(){if(!(!this.enabled||!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine";const i=this.ctx.currentTime;e.frequency.setValueAtTime(1400,i),e.frequency.exponentialRampToValueAtTime(800,i+.04),n.gain.setValueAtTime(.015,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.04),e.connect(n),n.connect(this.ctx.destination),e.start(i),e.stop(i+.04)}catch{}}playClick(){if(!(!this.enabled||!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle";const i=this.ctx.currentTime;e.frequency.setValueAtTime(600,i),e.frequency.exponentialRampToValueAtTime(1800,i+.06),n.gain.setValueAtTime(.04,i),n.gain.exponentialRampToValueAtTime(.001,i+.07),e.connect(n),n.connect(this.ctx.destination),e.start(i),e.stop(i+.07)}catch{}}playModeShift(){if(!(!this.enabled||!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createBiquadFilter(),r=this.ctx.createGain(),s=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(220,s),e.frequency.exponentialRampToValueAtTime(440,s+.25),n.type="sawtooth",n.frequency.setValueAtTime(110,s),n.frequency.exponentialRampToValueAtTime(220,s+.25),i.type="lowpass",i.frequency.setValueAtTime(400,s),i.frequency.linearRampToValueAtTime(1800,s+.15),i.frequency.linearRampToValueAtTime(300,s+.3),r.gain.setValueAtTime(.03,s),r.gain.exponentialRampToValueAtTime(.001,s+.3),e.connect(i),n.connect(i),i.connect(r),r.connect(this.ctx.destination),e.start(s),n.start(s),e.stop(s+.3),n.stop(s+.3)}catch{}}playActivate(){if(this.ctx)try{const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.frequency.setValueAtTime(n,e+i*.05),s.gain.setValueAtTime(.02,e+i*.05),s.gain.exponentialRampToValueAtTime(1e-4,e+(i+1)*.08),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.05),r.stop(e+(i+1)*.08)})}catch{}}}const Ze=new Ww;function jw({activeSection:t,onNavigate:e}){const[n,i]=be.useState(!1),[r,s]=be.useState(!1),[a,o]=be.useState(!1);be.useEffect(()=>{const h=()=>{i(window.scrollY>40)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]);const l=[{id:"hero",label:"Home"},{id:"about",label:"About"},{id:"solutions",label:"Solutions"},{id:"showcase",label:"3D Lab"},{id:"work",label:"Work"},{id:"contact",label:"Contact"}],c=h=>{if(Ze.playClick(),s(!1),e)e(h);else{const d=document.getElementById(h);d&&d.scrollIntoView({behavior:"smooth"})}},f=()=>{const h=Ze.toggle();o(h)};return g.jsxs("header",{className:`navbar-container ${n?"navbar-scrolled":""}`,children:[g.jsxs("div",{className:"navbar-inner",children:[g.jsxs("a",{href:"#hero",onClick:h=>{h.preventDefault(),c("hero")},className:"brand-logo",onMouseEnter:()=>Ze.playHover(),children:[g.jsxs("div",{className:"brand-mark",children:[g.jsx("span",{className:"brand-dot"}),g.jsx("svg",{viewBox:"0 0 24 24",className:"brand-svg",children:g.jsx("path",{d:"M4 6L12 14M12 14L20 6M12 14L4 22M12 14L20 22",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})})]}),g.jsxs("div",{className:"brand-text",children:[g.jsx("span",{className:"brand-title",children:"XYZ"}),g.jsx("span",{className:"brand-badge",children:"STUDIO"})]})]}),g.jsx("nav",{className:"desktop-nav",children:l.map(h=>{const d=t===h.id;return g.jsxs("button",{onClick:()=>c(h.id),onMouseEnter:()=>Ze.playHover(),className:`nav-link-btn ${d?"active":""}`,children:[g.jsx("span",{className:"nav-link-text",children:h.label}),d&&g.jsx("span",{className:"nav-link-indicator"})]},h.id)})}),g.jsxs("div",{className:"nav-actions",children:[g.jsxs("button",{onClick:f,onMouseEnter:()=>Ze.playHover(),className:`sound-toggle-btn ${a?"active":""}`,title:a?"Mute Audio FX":"Enable Generative Audio FX","aria-label":"Toggle procedural sound FX",children:[a?g.jsxs("div",{className:"sound-eq",children:[g.jsx("span",{className:"eq-bar bar-1"}),g.jsx("span",{className:"eq-bar bar-2"}),g.jsx("span",{className:"eq-bar bar-3"})]}):g.jsx(Vw,{size:15,className:"sound-icon-muted"}),g.jsx("span",{className:"sound-label",children:a?"SFX ON":"SFX"})]}),g.jsxs("button",{onClick:()=>c("contact"),onMouseEnter:()=>Ze.playHover(),className:"nav-cta-btn",children:[g.jsx("span",{children:"Initiate"}),g.jsx(Pl,{size:14})]}),g.jsx("button",{onClick:()=>{Ze.playClick(),s(!r)},className:"mobile-menu-btn","aria-label":"Toggle navigation menu",children:r?g.jsx(M0,{size:20}):g.jsx(Fw,{size:20})})]})]}),r&&g.jsx("div",{className:"mobile-drawer",children:g.jsxs("div",{className:"mobile-drawer-inner",children:[g.jsx("div",{className:"mobile-nav-list",children:l.map((h,d)=>g.jsxs("button",{onClick:()=>c(h.id),className:"mobile-nav-item",style:{animationDelay:`${d*.05}s`},children:[g.jsxs("span",{className:"mobile-nav-index",children:["0",d+1]}),g.jsx("span",{className:"mobile-nav-label",children:h.label})]},h.id))}),g.jsxs("div",{className:"mobile-drawer-footer",children:[g.jsxs("div",{className:"mobile-status-tag",children:[g.jsx("span",{className:"pulse-dot"}),g.jsx("span",{children:"SYSTEM STATUS // ONLINE"})]}),g.jsx("p",{className:"mobile-copyright",children:"© 2026 XYZ SYSTEMS INC."})]})]})})]})}function Xw({onExplore:t,onViewExperience:e}){return g.jsxs("section",{id:"hero",className:"hero-section",children:[g.jsxs("div",{className:"hero-container",children:[g.jsxs("div",{className:"hero-content",children:[g.jsxs("div",{className:"hero-tag-badge",children:[g.jsx("span",{className:"pulse-dot"}),g.jsx("span",{className:"badge-text",children:"AUTONOMOUS SPATIAL ARCHITECTURE // V4.8"})]}),g.jsxs("h1",{className:"hero-headline",children:[g.jsx("span",{className:"hero-headline-line",children:"BUILDING"}),g.jsx("span",{className:"hero-headline-line gradient-text",children:"WHAT COMES"}),g.jsx("span",{className:"hero-headline-line outline-text",children:"NEXT."})]}),g.jsx("p",{className:"hero-description",children:"XYZ pioneers the convergence of high-order spatial computing, physical-digital architecture, and neuromorphic interfaces. We design transcendent digital artifacts for world-defining brands and visionary systems."}),g.jsxs("div",{className:"hero-cta-group",children:[g.jsxs("button",{onClick:()=>{Ze.playClick(),t&&t()},onMouseEnter:()=>Ze.playHover(),className:"btn-primary",children:[g.jsx("span",{children:"Explore XYZ"}),g.jsx("div",{className:"btn-arrow-wrap",children:g.jsx(g0,{size:16})})]}),g.jsxs("button",{onClick:()=>{Ze.playClick(),e&&e()},onMouseEnter:()=>Ze.playHover(),className:"btn-secondary",children:[g.jsx("div",{className:"play-icon-wrap",children:g.jsx(zw,{size:12,fill:"currentColor"})}),g.jsx("span",{children:"View Experience"})]})]}),g.jsxs("div",{className:"hero-telemetry-grid",children:[g.jsxs("div",{className:"telemetry-item",children:[g.jsx("span",{className:"telemetry-value",children:"99.98%"}),g.jsx("span",{className:"telemetry-label",children:"NEURAL FIDELITY"})]}),g.jsx("div",{className:"telemetry-divider"}),g.jsxs("div",{className:"telemetry-item",children:[g.jsx("span",{className:"telemetry-value",children:"< 1.2ms"}),g.jsx("span",{className:"telemetry-label",children:"SPATIAL LATENCY"})]}),g.jsx("div",{className:"telemetry-divider"}),g.jsxs("div",{className:"telemetry-item",children:[g.jsx("span",{className:"telemetry-value",children:"ZERO"}),g.jsx("span",{className:"telemetry-label",children:"COMPROMISE"})]})]})]}),g.jsx("div",{className:"hero-3d-hint-container","data-dragzone":"true",children:g.jsxs("div",{className:"hero-3d-reticle",children:[g.jsx("div",{className:"reticle-corner corner-tl"}),g.jsx("div",{className:"reticle-corner corner-tr"}),g.jsx("div",{className:"reticle-corner corner-bl"}),g.jsx("div",{className:"reticle-corner corner-br"}),g.jsxs("div",{className:"reticle-label",children:[g.jsx(S0,{size:12,className:"text-cyan-400"}),g.jsx("span",{children:"CORE ARTIFACT // INTERACTIVE 3D"})]})]})})]}),g.jsxs("div",{className:"hero-scroll-indicator",children:[g.jsx("div",{className:"mouse-icon",children:g.jsx("div",{className:"mouse-wheel"})}),g.jsx("span",{className:"scroll-hint-text",children:"SCROLL TO TRAVERSE"})]})]})}function Yw(){const t=[{icon:x0,num:"01",title:"Spatial Synthesis",desc:"Dissolving the boundaries between physical environment and digital dimension through real-time ray-traced optics."},{icon:_0,num:"02",title:"Cognitive Aesthetics",desc:"Interfaces crafted with psychoacoustic precision and mathematical elegance, commanding immediate focus."},{icon:v0,num:"03",title:"Neuromorphic Scale",desc:"High-frequency systems engineered to process complex generative state machines without latency artifacts."}];return g.jsxs("section",{id:"about",className:"section-container about-section",children:[g.jsx("div",{className:"section-ambient-glow"}),g.jsxs("div",{className:"content-wrapper",children:[g.jsxs("div",{className:"section-eyebrow",children:[g.jsx("span",{className:"eyebrow-index",children:"01"}),g.jsx("span",{className:"eyebrow-divider",children:"/"}),g.jsx("span",{className:"eyebrow-text",children:"GENESIS & PHILOSOPHY"})]}),g.jsxs("h2",{className:"about-headline",children:[g.jsx("span",{className:"reveal-line",children:"WE TURN IDEAS"}),g.jsx("span",{className:"reveal-line gradient-text",children:"INTO EXPERIENCES."})]}),g.jsxs("div",{className:"about-grid",children:[g.jsxs("div",{className:"about-lead",children:[g.jsx("p",{className:"about-lead-text",children:"XYZ was founded on a singular conviction: the next era of digital computing will not live behind flat glass squares. It will exist as a continuous, ambient layer woven into the fabric of space itself."}),g.jsx("p",{className:"about-sub-text",children:"We operate at the volatile intersection of spatial computing, generative artificial intelligence, and cinematic digital craft. We do not design static pages; we architect living worlds that react, breathe, and evolve with every human interaction."}),g.jsxs("div",{className:"about-stats-row",children:[g.jsxs("div",{className:"about-stat-box",children:[g.jsx("span",{className:"about-stat-num",children:"14+"}),g.jsx("span",{className:"about-stat-label",children:"AWARDS & RECOGNITIONS"})]}),g.jsxs("div",{className:"about-stat-box",children:[g.jsx("span",{className:"about-stat-num",children:"42"}),g.jsx("span",{className:"about-stat-label",children:"GLOBAL PATENTS FILED"})]}),g.jsxs("div",{className:"about-stat-box",children:[g.jsx("span",{className:"about-stat-num",children:"100%"}),g.jsx("span",{className:"about-stat-label",children:"BESPOKE CODEBASES"})]})]})]}),g.jsx("div",{className:"about-pillars",children:t.map((e,n)=>{const i=e.icon;return g.jsxs("div",{className:"pillar-card glass-panel",onMouseEnter:()=>Ze.playHover(),children:[g.jsxs("div",{className:"pillar-header",children:[g.jsx("div",{className:"pillar-icon-box",children:g.jsx(i,{size:18,className:"text-cyan-400"})}),g.jsx("span",{className:"pillar-num",children:e.num})]}),g.jsx("h3",{className:"pillar-title",children:e.title}),g.jsx("p",{className:"pillar-desc",children:e.desc}),g.jsx("div",{className:"pillar-shimmer"})]},n)})})]})]})]})}function qw(){const[t,e]=be.useState(0),n=[{id:"digital-experiences",icon:Ow,title:"Digital Experiences",subtitle:"SPATIAL & REAL-TIME WEBGL",description:"We construct hyper-immersive digital realms that obliterate the boundary between cinema, software, and physical reality. Leveraging custom GLSL shaders and real-time physics engines.",deliverables:["Real-Time WebGL & WebGPU Systems","Spatial Computing & VisionOS Architectures","Interactive Generative Landscapes","Micro-Perceptual Haptic Feedback"],metrics:{latency:"0.8ms",framerate:"120 FPS",pipeline:"Direct WebGL2"}},{id:"innovation",icon:Iw,title:"Innovation",subtitle:"NEUROMORPHIC & GENERATIVE AI",description:"We invent proprietary cognitive layers and autonomous interaction primitives. Translating complex model weights into intuitive, kinetic user interfaces that adapt dynamically to human intent.",deliverables:["Proprietary Spatial UI Frameworks","Autonomous Agent Orchestration","Predictive Intent Mapping","Zero-Latency Edge Inference"],metrics:{latency:"1.4ms",framerate:"90 FPS",pipeline:"Tensor RT Edge"}},{id:"design",icon:kw,title:"Design",subtitle:"PRECISION KINETIC SYSTEMS",description:"Design is not cosmetic veneer; it is the fundamental architecture of human perception. Every curve, font weight, reflection coefficient, and micro-transition is calculated with algorithmic rigor.",deliverables:["Cinematic Brand Identifiers","Harmonic Kinetic Design Systems","Custom Micro-Typography Engines","Volumetric Interface Libraries"],metrics:{latency:"0.1ms",framerate:"240 FPS",pipeline:"Vector Fluidity"}},{id:"technology",icon:Hw,title:"Technology",subtitle:"ENTERPRISE-GRADE ARCHITECTURES",description:"Behind the breathtaking visuals lies uncompromising engineering. Bulletproof distributed architectures, sub-millisecond data pipes, and cryptographic verification for mission-critical operations.",deliverables:["High-Frequency Distributed Web Services","Cryptographic Identity & Ledger Stacks","Zero-Trust Security Perimeters","Cloud-Native Scalable GPU Clusters"],metrics:{latency:"0.4ms",framerate:"60 FPS",pipeline:"Rust & WASM Core"}}],i=(s,a)=>{const o=s.currentTarget,l=o.getBoundingClientRect(),c=s.clientX-l.left,f=s.clientY-l.top,h=l.width/2,d=l.height/2,p=(f-d)/d*-12,_=(c-h)/h*12;o.style.transform=`perspective(1000px) rotateX(${p}deg) rotateY(${_}deg) translateZ(10px)`,o.style.setProperty("--mouse-x",`${c/l.width*100}%`),o.style.setProperty("--mouse-y",`${f/l.height*100}%`)},r=s=>{const a=s.currentTarget;a.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"};return g.jsx("section",{id:"solutions",className:"section-container capabilities-section",children:g.jsxs("div",{className:"content-wrapper",children:[g.jsxs("div",{className:"section-header-flex",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"section-eyebrow",children:[g.jsx("span",{className:"eyebrow-index",children:"02"}),g.jsx("span",{className:"eyebrow-divider",children:"/"}),g.jsx("span",{className:"eyebrow-text",children:"CAPABILITIES & SPECIALTIES"})]}),g.jsxs("h2",{className:"section-title",children:["WHAT ",g.jsx("span",{className:"gradient-text",children:"XYZ DOES."})]})]}),g.jsx("p",{className:"section-lead-inline",children:"Four interconnected disciplines operating in concert to manufacture unprecedented digital artifacts."})]}),g.jsx("div",{className:"capabilities-grid",children:n.map((s,a)=>{const o=s.icon,l=t===a;return g.jsxs("div",{className:`capability-card-3d glass-panel ${l?"selected":""}`,onMouseMove:c=>i(c),onMouseLeave:r,onClick:()=>{Ze.playClick(),e(a)},onMouseEnter:()=>Ze.playHover(),"data-interactive":"true",children:[g.jsx("div",{className:"card-specular-glare"}),g.jsxs("div",{className:"cap-card-top",children:[g.jsx("div",{className:"cap-icon-wrapper",children:g.jsx(o,{size:20,className:"cap-icon"})}),g.jsxs("span",{className:"cap-index",children:["0",a+1]})]}),g.jsxs("div",{className:"cap-card-body",children:[g.jsx("span",{className:"cap-subtitle",children:s.subtitle}),g.jsx("h3",{className:"cap-title",children:s.title}),g.jsx("p",{className:"cap-desc",children:s.description})]}),g.jsxs("div",{className:"cap-deliverables",children:[g.jsx("div",{className:"cap-deliv-header",children:"KEY CAPABILITIES"}),g.jsx("ul",{className:"cap-deliv-list",children:s.deliverables.map((c,f)=>g.jsxs("li",{className:"cap-deliv-item",children:[g.jsx(Nw,{size:13,className:"text-cyan-400"}),g.jsx("span",{children:c})]},f))})]}),g.jsxs("div",{className:"cap-metrics-footer",children:[g.jsxs("div",{className:"metric-pill",children:[g.jsx("span",{className:"metric-key",children:"LATENCY"}),g.jsx("span",{className:"metric-val",children:s.metrics.latency})]}),g.jsxs("div",{className:"metric-pill",children:[g.jsx("span",{className:"metric-key",children:"TARGET"}),g.jsx("span",{className:"metric-val",children:s.metrics.framerate})]})]}),g.jsx("div",{className:"tech-corner corner-tl"}),g.jsx("div",{className:"tech-corner corner-br"})]},s.id)})})]})})}function $w({activeMode:t,onModeChange:e}){const[n,i]=be.useState(!1),r=[{id:"titanium",name:"Titanium Obsidian",tag:"PBR PHYSICAL",desc:"Specular physical reflectivity with anisotropic carbon and obsidian facets.",icon:_0},{id:"quantum",name:"Quantum Core",tag:"EMISSIVE LUMINESCENCE",desc:"Internal energy reactor pulsating with harmonic spatial frequencies.",icon:Gw},{id:"wireframe",name:"Laser Wireframe",tag:"HOLOGRAPHIC VECTOR",desc:"Ultra-fine cyan and magenta vector grid exposing topological geometry.",icon:x0},{id:"neural",name:"Neural Synapse",tag:"CONNECTED TOPOLOGY",desc:"Dynamic node cluster simulating cognitive synaptic firing pathways.",icon:v0}],s=a=>{Ze.playModeShift(),e&&e(a)};return g.jsx("section",{id:"showcase",className:"section-container showcase-section",children:g.jsxs("div",{className:"content-wrapper",children:[g.jsxs("div",{className:"section-header-center",children:[g.jsxs("div",{className:"section-eyebrow center",children:[g.jsx("span",{className:"eyebrow-index",children:"03"}),g.jsx("span",{className:"eyebrow-divider",children:"/"}),g.jsx("span",{className:"eyebrow-text",children:"INTERACTIVE 3D LAB"})]}),g.jsxs("h2",{className:"showcase-headline",children:["THE MONOLITHIC ",g.jsx("span",{className:"gradient-text",children:"XYZ CORE."})]}),g.jsx("p",{className:"showcase-subhead",children:"Traverse the architectural structure at the heart of XYZ. Rotate, explore topological wireframes, and test physical surface reflectance in real-time."})]}),g.jsxs("div",{className:`showcase-viewport-frame glass-panel ${n?"expanded":""}`,"data-dragzone":"true",children:[g.jsxs("div",{className:"hud-top-bar",children:[g.jsxs("div",{className:"hud-title-cluster",children:[g.jsx("span",{className:"hud-status-blink"}),g.jsx("span",{className:"hud-label font-mono",children:"OBJECT: ARTIFACT_XYZ_01"}),g.jsx("span",{className:"hud-divider",children:"/"}),g.jsxs("span",{className:"hud-spec font-mono text-cyan-400",children:["SHADER: ",t.toUpperCase()]})]}),g.jsx("div",{className:"hud-controls",children:g.jsxs("button",{onClick:()=>{Ze.playClick(),i(!n)},className:"hud-action-btn",title:"Toggle HUD Frame","aria-label":"Expand viewport frame",children:[g.jsx(Uw,{size:14}),g.jsx("span",{className:"hud-btn-text",children:n?"Normal":"Expand"})]})})]}),g.jsxs("div",{className:"hud-center-reticle",children:[g.jsx("div",{className:"reticle-circle-outer"}),g.jsx("div",{className:"reticle-circle-inner"}),g.jsx("div",{className:"reticle-axis-h"}),g.jsx("div",{className:"reticle-axis-v"}),g.jsxs("div",{className:"reticle-hint-bubble",children:[g.jsx(Pw,{size:14,className:"animate-spin text-cyan-400",style:{animationDuration:"8s"}}),g.jsx("span",{children:"CLICK & DRAG TO ORBIT IN 3D SPACE"})]})]}),g.jsx("div",{className:"hud-bottom-modes",children:g.jsx("div",{className:"mode-selector-tabs",children:r.map(a=>{const o=a.icon,l=t===a.id;return g.jsxs("button",{onClick:()=>s(a.id),onMouseEnter:()=>Ze.playHover(),className:`mode-tab-btn ${l?"active":""}`,children:[g.jsx("div",{className:"mode-tab-icon-wrap",children:g.jsx(o,{size:16})}),g.jsxs("div",{className:"mode-tab-info",children:[g.jsx("span",{className:"mode-tab-name",children:a.name}),g.jsx("span",{className:"mode-tab-tag",children:a.tag})]}),l&&g.jsx("div",{className:"mode-active-indicator"})]},a.id)})})}),g.jsx("div",{className:"hud-corner-bracket corner-tl"}),g.jsx("div",{className:"hud-corner-bracket corner-tr"}),g.jsx("div",{className:"hud-corner-bracket corner-bl"}),g.jsx("div",{className:"hud-corner-bracket corner-br"}),g.jsxs("div",{className:"hud-side-telemetry left",children:[g.jsxs("div",{className:"telemetry-row",children:[g.jsx("span",{children:"ROT_X:"}),g.jsx("span",{className:"font-mono text-white",children:"0.008 rad/s"})]}),g.jsxs("div",{className:"telemetry-row",children:[g.jsx("span",{children:"ROT_Y:"}),g.jsx("span",{className:"font-mono text-white",children:"0.012 rad/s"})]}),g.jsxs("div",{className:"telemetry-row",children:[g.jsx("span",{children:"VERTICES:"}),g.jsx("span",{className:"font-mono text-cyan-400",children:"18,432"})]})]}),g.jsxs("div",{className:"hud-side-telemetry right",children:[g.jsxs("div",{className:"telemetry-row",children:[g.jsx("span",{children:"LIGHT_REF:"}),g.jsx("span",{className:"font-mono text-white",children:"ACES Filmic"})]}),g.jsxs("div",{className:"telemetry-row",children:[g.jsx("span",{children:"DPI_SCALE:"}),g.jsx("span",{className:"font-mono text-white",children:"2.0 MAX"})]}),g.jsxs("div",{className:"telemetry-row",children:[g.jsx("span",{children:"OCCLUSION:"}),g.jsx("span",{className:"font-mono text-purple-400",children:"ACTIVE"})]})]})]})]})})}function Zw({project:t,onClose:e}){return t?g.jsx("div",{className:"project-modal-backdrop",onClick:e,children:g.jsxs("div",{className:"project-modal-dialog glass-panel",onClick:n=>n.stopPropagation(),children:[g.jsxs("div",{className:"modal-header",children:[g.jsxs("div",{className:"modal-meta-left",children:[g.jsx("span",{className:"modal-category font-mono",children:t.category}),g.jsx("span",{className:"modal-divider",children:"/"}),g.jsx("span",{className:"modal-year font-mono",children:t.year})]}),g.jsx("button",{onClick:()=>{Ze.playClick(),e()},className:"modal-close-btn","aria-label":"Close Case Study",children:g.jsx(M0,{size:18})})]}),g.jsxs("div",{className:"modal-body",children:[g.jsx("h2",{className:"modal-title",children:t.title}),g.jsx("p",{className:"modal-tagline",children:t.tagline}),g.jsx("div",{className:"modal-hero-visual",children:g.jsx("div",{className:"modal-visual-inner",style:{background:t.gradientBg},children:t.visualElement})}),g.jsxs("div",{className:"modal-specs-grid",children:[g.jsxs("div",{className:"modal-spec-card",children:[g.jsx("span",{className:"spec-label",children:"SYSTEM CORE"}),g.jsx("span",{className:"spec-value",children:t.specs.core})]}),g.jsxs("div",{className:"modal-spec-card",children:[g.jsx("span",{className:"spec-label",children:"LATENCY TARGET"}),g.jsx("span",{className:"spec-value text-cyan-400",children:t.specs.latency})]}),g.jsxs("div",{className:"modal-spec-card",children:[g.jsx("span",{className:"spec-label",children:"GRAPHICS PIPELINE"}),g.jsx("span",{className:"spec-value",children:t.specs.pipeline})]}),g.jsxs("div",{className:"modal-spec-card",children:[g.jsx("span",{className:"spec-label",children:"DEPLOYMENT REGION"}),g.jsx("span",{className:"spec-value",children:t.specs.region})]})]}),g.jsxs("div",{className:"modal-narrative",children:[g.jsx("h3",{className:"narrative-heading",children:"ENGINEERING ARCHITECTURE"}),g.jsx("p",{className:"narrative-p",children:t.fullDescription}),g.jsx("h3",{className:"narrative-heading",children:"TECHNICAL ACHIEVEMENTS"}),g.jsx("ul",{className:"narrative-list",children:t.achievements.map((n,i)=>g.jsxs("li",{className:"narrative-list-item",children:[g.jsx(y0,{size:16,className:"text-cyan-400 flex-shrink-0"}),g.jsx("span",{children:n})]},i))})]})]}),g.jsxs("div",{className:"modal-footer",children:[g.jsxs("div",{className:"modal-status-badge",children:[g.jsx("span",{className:"pulse-dot"}),g.jsx("span",{children:"VERIFIED PRODUCTION SYSTEM"})]}),g.jsxs("button",{onClick:()=>{Ze.playClick(),e()},className:"btn-primary",children:[g.jsx("span",{children:"Return to Portfolio"}),g.jsx(g0,{size:14})]})]})]})}):null}function Kw(){const[t,e]=be.useState(null),n=[{id:"aura",title:"PROJECT AURA",tagline:"Autonomous Neuromorphic Interface & Spatial Computing OS",category:"SPATIAL OS // AI",year:"2026",shortDescription:"A zero-latency spatial operating environment designed for next-generation volumetric optics. Features real-time fluid ocular tracking, ambient dimensional windows, and predictive acoustic feedback.",fullDescription:"Project AURA represents a paradigm shift in human-machine communion. By bypassing traditional 2D window managers in favor of an egocentric spatial graph, AURA models user intent through continuous eye-gaze vectors and micro-gestural acceleration. Built directly on custom Vulkan and WebGPU pipelines, it operates with less than 1.1ms of spatial motion-to-photon latency.",specs:{core:"Neuromorphic Graph Runtime v2",latency:"< 1.1ms Motion-to-Photon",pipeline:"Direct WebGPU / Vulkan Compute",region:"Global Distributed Clusters"},achievements:["Over 99.8% gaze-vector prediction accuracy under high cognitive load","Dynamic spatial audio rendering across 64 virtual acoustic zones","Awarded Best in Spatial Design at Global Interface Summit 2026"],gradientBg:"radial-gradient(circle at 60% 40%, rgba(0, 242, 254, 0.18), rgba(6, 7, 9, 0.95))",visualElement:g.jsxs("div",{className:"project-visual-canvas aura-canvas",children:[g.jsx("div",{className:"aura-ring ring-1"}),g.jsx("div",{className:"aura-ring ring-2"}),g.jsx("div",{className:"aura-ring ring-3"}),g.jsx("div",{className:"aura-core-glow"}),g.jsx("div",{className:"aura-grid-lines"}),g.jsxs("div",{className:"visual-badge",children:[g.jsx("span",{className:"pulse-dot"}),g.jsx("span",{children:"GAZE TRACKING ACTIVE"})]})]})},{id:"kairos",title:"KAIROS TOPOGRAPHY",tagline:"Cryptographic Quantum State Visualization Engine",category:"SYSTEMS // VISUALIZATION",year:"2026",shortDescription:"An architectural real-time 3D telemetry platform mapping global distributed compute clusters into a kinetic topological landmass. Translating millions of micro-transactions into living geometric flows.",fullDescription:"KAIROS transforms hyper-dense financial and cryptographic telemetry into an intuitive physical-digital topography. Through dynamic heightmap displacement and real-time volumetric raymarching, system architects can perceive throughput bottlenecks, cluster desynchronizations, and latency waves as organic geological phenomena.",specs:{core:"Dynamic Heightmap Tessellator",latency:"3.4ms Global Stream Sync",pipeline:"Custom GLSL Raymarching Shader",region:"Zurich // Tokyo // NYC"},achievements:["Real-time simulation of 12M+ concurrent telemetry events with zero frame drops","Adaptive LOD tessellation reducing memory bandwidth by 74%","Integrated into 18 Fortune 100 mission control rooms worldwide"],gradientBg:"radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.18), rgba(6, 7, 9, 0.95))",visualElement:g.jsxs("div",{className:"project-visual-canvas kairos-canvas",children:[g.jsx("div",{className:"kairos-mesh"}),g.jsx("div",{className:"kairos-nodes",children:[...Array(8)].map((i,r)=>g.jsx("span",{className:`node-point node-${r}`},r))}),g.jsxs("div",{className:"visual-badge",children:[g.jsx(Cw,{size:12,className:"text-purple-400"}),g.jsx("span",{children:"12.4M OPS/SEC"})]})]})},{id:"synapse",title:"SYNAPSE PAVILION",tagline:"Biosensing Kinetic Architectural Installation",category:"IMMERSIVE // HARDWARE",year:"2025–2026",shortDescription:"A monumental architectural pavilion in Tokyo that responds to collective biometric data from visitors. Translates respiratory rhythm, heart rate variability, and spatial movement into kinetic acoustic lighting waves.",fullDescription:"SYNAPSE synthesizes architecture, biometric telemetry, and generative spatial composition. Standing 14 meters tall in the heart of Shibuya, the structure utilizes 480 custom carbon-fiber articulating louvers and 1,200 addressable laser-etched light guides that ripple in sync with biometric inputs captured from ambient sensor floors.",specs:{core:"Biometric Collective Ingestion Bus",latency:"8.2ms Sensor-to-Mechanical Actuation",pipeline:"Spatial Audio Array + DMX512 Rig",region:"Tokyo, Japan"},achievements:["Synchronized mechanical actuation across 480 physical carbon louvers","Ambient biometric acoustic mapping tested with over 250,000 visitors","Grand Prix in Experimental Spatial Architecture 2025"],gradientBg:"radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15), rgba(6, 7, 9, 0.95))",visualElement:g.jsxs("div",{className:"project-visual-canvas synapse-canvas",children:[g.jsx("div",{className:"synapse-pillars",children:[...Array(6)].map((i,r)=>g.jsx("div",{className:"synapse-bar",style:{animationDelay:`${r*.15}s`}},r))}),g.jsxs("div",{className:"visual-badge",children:[g.jsx("span",{className:"pulse-dot"}),g.jsx("span",{children:"BIOMETRIC MATRIX LIVE"})]})]})}];return g.jsxs("section",{id:"work",className:"section-container work-section",children:[g.jsxs("div",{className:"content-wrapper",children:[g.jsxs("div",{className:"section-header-flex",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"section-eyebrow",children:[g.jsx("span",{className:"eyebrow-index",children:"04"}),g.jsx("span",{className:"eyebrow-divider",children:"/"}),g.jsx("span",{className:"eyebrow-text",children:"SELECTED INITIATIVES"})]}),g.jsxs("h2",{className:"section-title",children:["FLAGSHIP ",g.jsx("span",{className:"gradient-text",children:"PROJECTS."})]})]}),g.jsx("p",{className:"section-lead-inline",children:"A curated portfolio of radical digital engineering, spatial interfaces, and living architectural systems."})]}),g.jsx("div",{className:"projects-editorial-list",children:n.map((i,r)=>{const s=r%2===1;return g.jsxs("article",{className:`editorial-project-item ${s?"layout-reversed":""}`,onMouseEnter:()=>Ze.playHover(),children:[g.jsxs("div",{className:"editorial-visual-wrapper glass-panel",onClick:()=>{Ze.playClick(),e(i)},"data-interactive":"true",children:[g.jsx("div",{className:"editorial-visual-inner",style:{background:i.gradientBg},children:i.visualElement}),g.jsx("div",{className:"visual-hover-overlay",children:g.jsxs("span",{className:"hover-cta-pill",children:[g.jsx("span",{children:"Inspect Spec & Case Study"}),g.jsx(Pl,{size:14})]})})]}),g.jsxs("div",{className:"editorial-info-wrapper",children:[g.jsxs("div",{className:"editorial-meta-row",children:[g.jsx("span",{className:"meta-category font-mono",children:i.category}),g.jsx("span",{className:"meta-divider",children:"/"}),g.jsx("span",{className:"meta-year font-mono",children:i.year})]}),g.jsx("h3",{className:"editorial-project-title",children:i.title}),g.jsx("p",{className:"editorial-project-tagline",children:i.tagline}),g.jsx("p",{className:"editorial-project-desc",children:i.shortDescription}),g.jsxs("div",{className:"editorial-highlights-grid",children:[g.jsxs("div",{className:"highlight-pill",children:[g.jsx("span",{className:"highlight-label",children:"CORE:"}),g.jsx("span",{className:"highlight-value font-mono",children:i.specs.core.split(" ")[0]})]}),g.jsxs("div",{className:"highlight-pill",children:[g.jsx("span",{className:"highlight-label",children:"LATENCY:"}),g.jsx("span",{className:"highlight-value font-mono text-cyan-400",children:i.specs.latency.split(" ")[0]})]})]}),g.jsx("div",{className:"editorial-actions",children:g.jsxs("button",{onClick:()=>{Ze.playClick(),e(i)},className:"btn-editorial-explore",children:[g.jsx("span",{children:"Explore Case Study"}),g.jsx(Pl,{size:16})]})})]})]},i.id)})})]}),t&&g.jsx(Zw,{project:t,onClose:()=>e(null)})]})}function Qw(){const t=be.useRef(null),[e,n]=be.useState(0);be.useEffect(()=>{const s=()=>{if(!t.current)return;const a=t.current.getBoundingClientRect(),o=window.innerHeight,l=(o-a.top)/(o+a.height);n(Math.min(Math.max(l,0),1))};return window.addEventListener("scroll",s,{passive:!0}),s(),()=>window.removeEventListener("scroll",s)},[]);const i=["DON'T","FOLLOW","THE","FUTURE."],r=["CREATE","IT."];return g.jsxs("section",{id:"philosophy",ref:t,className:"section-container philosophy-section",children:[g.jsxs("div",{className:"philosophy-depth-grid",children:[g.jsx("div",{className:"depth-radial-gradient"}),g.jsx("div",{className:"depth-iso-lines"})]}),g.jsxs("div",{className:"content-wrapper philosophy-content",children:[g.jsxs("div",{className:"section-eyebrow center",children:[g.jsx("span",{className:"eyebrow-index",children:"05"}),g.jsx("span",{className:"eyebrow-divider",children:"/"}),g.jsx("span",{className:"eyebrow-text",children:"THE XYZ THESIS"})]}),g.jsxs("div",{className:"philosophy-statement",children:[g.jsx("div",{className:"statement-line line-1",children:i.map((s,a)=>{const o=.2+a*.08,l=e>=o;return g.jsx("span",{className:`statement-word ${l?"illuminated":""}`,onMouseEnter:()=>Ze.playHover(),children:s},a)})}),g.jsx("div",{className:"statement-line line-2",children:r.map((s,a)=>{const o=.52+a*.1,l=e>=o;return g.jsx("span",{className:`statement-word highlight ${l?"illuminated":""}`,onMouseEnter:()=>Ze.playHover(),children:s},a)})})]}),g.jsxs("div",{className:"philosophy-manifesto-box glass-panel",children:[g.jsx("p",{className:"philosophy-lead-p",children:"Most digital experiences replicate what already exists. They inherit the conventions, the templates, and the limitations of previous decades. At XYZ, we reject the passive acceptance of predetermined trajectories."}),g.jsx("p",{className:"philosophy-sub-p",children:"The next computational reality is an unrendered volume. It is up to visionary creators, mathematicians, and engineers to define its geometry, calibrate its physics, and imbue it with timeless human soul."}),g.jsxs("div",{className:"philosophy-author-row",children:[g.jsxs("div",{className:"author-sig",children:[g.jsx("span",{className:"sig-title",children:"XYZ ARCHITECTURAL FOUNDATION"}),g.jsx("span",{className:"sig-sub font-mono",children:"GLOBAL DISPATCH // 2026"})]}),g.jsx("div",{className:"author-coords font-mono text-xs text-zinc-500",children:"35.6762° N, 139.6503° E // TOKYO LAB"})]})]})]})]})}function Jw(){const[t,e]=be.useState({name:"",email:"",scope:"Spatial Experience",message:""}),[n,i]=be.useState(!1),[r,s]=be.useState(!1),[a,o]=be.useState(!1),l=()=>{var d;Ze.playClick(),(d=navigator.clipboard)==null||d.writeText("initiatives@xyz-systems.io"),i(!0),setTimeout(()=>i(!1),2200)},c=d=>{d.preventDefault(),!(!t.name||!t.email)&&(Ze.playModeShift(),s(!0),setTimeout(()=>{s(!1),o(!0),Ze.playActivate(),setTimeout(()=>{o(!1),e({name:"",email:"",scope:"Spatial Experience",message:""})},5e3)},1200))},f=[{city:"Tokyo",coord:"35.6762° N, 139.6503° E",address:"Roppongi Hills Mori Tower 48F"},{city:"Zurich",coord:"47.3769° N, 8.5417° E",address:"Limmatquai 114, 8001 Zürich"},{city:"San Francisco",coord:"37.7749° N, 122.4194° W",address:"Pier 1, The Embarcadero"}],h=[{name:"X / Twitter",url:"https://twitter.com"},{name:"GitHub",url:"https://github.com"},{name:"Linear",url:"https://linear.app"},{name:"Discord",url:"https://discord.com"},{name:"LinkedIn",url:"https://linkedin.com"}];return g.jsxs("section",{id:"contact",className:"section-container contact-section",children:[g.jsxs("div",{className:"contact-bg-emblem",children:[g.jsx("div",{className:"emblem-ring ring-outer"}),g.jsx("div",{className:"emblem-ring ring-middle"}),g.jsx("div",{className:"emblem-ring ring-inner"}),g.jsx("div",{className:"emblem-symbol",children:"XYZ"})]}),g.jsxs("div",{className:"content-wrapper",children:[g.jsxs("div",{className:"section-eyebrow",children:[g.jsx("span",{className:"eyebrow-index",children:"06"}),g.jsx("span",{className:"eyebrow-divider",children:"/"}),g.jsx("span",{className:"eyebrow-text",children:"INITIATION & CONTACT"})]}),g.jsxs("h2",{className:"contact-headline",children:["LET’S BUILD SOMETHING ",g.jsx("br",{}),g.jsx("span",{className:"gradient-text",children:"UNEXPECTED."})]}),g.jsxs("div",{className:"contact-layout-grid",children:[g.jsxs("div",{className:"contact-info-col",children:[g.jsx("p",{className:"contact-lead-desc",children:"We collaborate with forward-thinking enterprises, boundary-pushing founders, and cultural institutions ready to abandon the conventional."}),g.jsxs("div",{className:"contact-email-card glass-panel",children:[g.jsxs("div",{className:"email-meta-top",children:[g.jsx("span",{className:"font-mono text-xs text-zinc-400",children:"DIRECT ENCRYPTED TRANSMISSION"}),g.jsxs("span",{className:"channel-status-pill",children:[g.jsx("span",{className:"pulse-dot"}),g.jsx("span",{children:"OPEN FOR COMMISSIONS"})]})]}),g.jsxs("div",{className:"email-address-row",children:[g.jsx("span",{className:"email-address-text font-mono",children:"initiatives@xyz-systems.io"}),g.jsxs("button",{type:"button",onClick:l,className:"copy-email-btn",title:"Copy email to clipboard","aria-label":"Copy email",children:[n?g.jsx(bw,{size:16,className:"text-emerald-400"}):g.jsx(Lw,{size:16}),g.jsx("span",{className:"copy-label",children:n?"COPIED":"COPY"})]})]})]}),g.jsxs("div",{className:"contact-studios-block",children:[g.jsx("div",{className:"studios-title font-mono text-xs text-zinc-400",children:"GLOBAL STUDIO NODES"}),g.jsx("div",{className:"studios-list",children:f.map((d,p)=>g.jsxs("div",{className:"studio-item",children:[g.jsxs("div",{className:"studio-city-row",children:[g.jsx(Dw,{size:13,className:"text-cyan-400"}),g.jsx("span",{className:"studio-city-name",children:d.city}),g.jsx("span",{className:"studio-coord font-mono",children:d.coord})]}),g.jsx("div",{className:"studio-addr",children:d.address})]},p))})]}),g.jsxs("div",{className:"contact-socials-block",children:[g.jsx("span",{className:"socials-label font-mono text-xs text-zinc-400",children:"CONNECT ON PROTOCOLS"}),g.jsx("div",{className:"social-links-wrap",children:h.map((d,p)=>g.jsxs("a",{href:d.url,target:"_blank",rel:"noreferrer",onMouseEnter:()=>Ze.playHover(),className:"social-pill-link",children:[g.jsx("span",{children:d.name}),g.jsx(Pl,{size:12})]},p))})]})]}),g.jsx("div",{className:"contact-form-col",children:g.jsxs("form",{onSubmit:c,className:"contact-form-card glass-panel",children:[g.jsxs("div",{className:"form-header",children:[g.jsxs("div",{className:"form-title-group",children:[g.jsx(S0,{size:16,className:"text-cyan-400"}),g.jsx("span",{className:"form-title",children:"TRANSMIT INQUIRY"})]}),g.jsx("span",{className:"font-mono text-xs text-zinc-500",children:"PGP 256-BIT"})]}),a?g.jsxs("div",{className:"form-success-box",children:[g.jsx("div",{className:"success-icon-wrap",children:g.jsx(y0,{size:36,className:"text-cyan-400"})}),g.jsx("h3",{className:"success-title",children:"TRANSMISSION RECEIVED"}),g.jsx("p",{className:"success-desc",children:"Your parameters have been logged into the XYZ dispatch queue. A partner will establish contact within 12 hours."}),g.jsxs("span",{className:"font-mono text-xs text-zinc-500",children:["REF: XYZ-",Math.random().toString(36).substring(2,8).toUpperCase()]})]}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{className:"form-label",htmlFor:"form-name",children:[g.jsx("span",{children:"IDENTITY / NAME"}),g.jsx("span",{className:"form-required",children:"*"})]}),g.jsx("input",{id:"form-name",type:"text",required:!0,placeholder:"e.g. Dr. Elena Vance",value:t.name,onChange:d=>e({...t,name:d.target.value}),className:"form-input"})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{className:"form-label",htmlFor:"form-email",children:[g.jsx("span",{children:"CORRESPONDENCE / EMAIL"}),g.jsx("span",{className:"form-required",children:"*"})]}),g.jsx("input",{id:"form-email",type:"email",required:!0,placeholder:"e.g. elena@nova-ventures.co",value:t.email,onChange:d=>e({...t,email:d.target.value}),className:"form-input"})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{className:"form-label",children:g.jsx("span",{children:"INITIATIVE SCOPE"})}),g.jsx("div",{className:"scope-pills-row",children:["Spatial Experience","Generative AI","Kinetic Design","System Architecture"].map(d=>g.jsx("button",{type:"button",onClick:()=>{Ze.playHover(),e({...t,scope:d})},className:`scope-pill-btn ${t.scope===d?"active":""}`,children:d},d))})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{className:"form-label",htmlFor:"form-message",children:g.jsx("span",{children:"BRIEF / OBJECTIVES"})}),g.jsx("textarea",{id:"form-message",rows:4,placeholder:"Outline the vision, desired technological threshold, and target deployment timeline...",value:t.message,onChange:d=>e({...t,message:d.target.value}),className:"form-textarea"})]}),g.jsxs("button",{type:"submit",disabled:r,onMouseEnter:()=>Ze.playHover(),className:"btn-submit",children:[g.jsx("span",{children:r?"TRANSMITTING PACKETS...":"SEND INQUIRY"}),g.jsx(Bw,{size:15})]})]})]})})]})]})]})}function eA(){const[t,e]=be.useState("");be.useEffect(()=>{const i=()=>{e(new Date().toUTCString().replace("GMT","UTC"))};i();const r=setInterval(i,1e3);return()=>clearInterval(r)},[]);const n=()=>{Ze.playClick(),window.scrollTo({top:0,behavior:"smooth"})};return g.jsx("footer",{className:"footer-container",children:g.jsxs("div",{className:"content-wrapper footer-content",children:[g.jsxs("div",{className:"footer-top-row",children:[g.jsxs("div",{className:"footer-brand",children:[g.jsxs("div",{className:"brand-mark small",children:[g.jsx("span",{className:"brand-dot"}),g.jsx("svg",{viewBox:"0 0 24 24",className:"brand-svg",children:g.jsx("path",{d:"M4 6L12 14M12 14L20 6M12 14L4 22M12 14L20 22",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})})]}),g.jsx("span",{className:"footer-brand-name",children:"XYZ"}),g.jsx("span",{className:"footer-tagline",children:"ARCHITECTURAL COMPUTING GROUP"})]}),g.jsxs("button",{onClick:n,onMouseEnter:()=>Ze.playHover(),className:"back-to-top-btn","aria-label":"Back to top",children:[g.jsx("span",{children:"TOP OF WORLD"}),g.jsx(Rw,{size:14})]})]}),g.jsxs("div",{className:"footer-bottom-row",children:[g.jsxs("div",{className:"footer-meta-cluster",children:[g.jsxs("span",{className:"font-mono text-xs text-zinc-500",children:["TIME: ",g.jsx("span",{className:"text-zinc-300",children:t||"SYNCHRONIZING..."})]}),g.jsx("span",{className:"footer-dot-divider",children:"•"}),g.jsxs("span",{className:"font-mono text-xs text-zinc-500",children:["BUILD: ",g.jsx("span",{className:"text-cyan-400",children:"XYZ-2026.10-PROD"})]})]}),g.jsx("div",{className:"footer-copy font-mono text-xs text-zinc-500",children:"© 2026 XYZ SYSTEMS INC. ALL RIGHTS RESERVED. BEYOND CONVENTION."})]})]})})}function tA(){const[t,e]=be.useState({x:-100,y:-100}),[n,i]=be.useState({x:-100,y:-100}),[r,s]=be.useState("default"),[a,o]=be.useState(!1);return be.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;let l,c=-100,f=-100,h=-100,d=-100;const p=u=>{c=u.clientX,f=u.clientY,e({x:u.clientX,y:u.clientY}),a||o(!0);const m=u.target;if(!m)return;const x=m.closest('button, a, input, textarea, select, [data-interactive="true"]'),y=m.closest('[data-dragzone="true"]');s(y?"drag":x?"hover":"default")},_=()=>{o(!1)},S=()=>{o(!0)},v=()=>{h+=(c-h)*.18,d+=(f-d)*.18,i({x:h,y:d}),l=requestAnimationFrame(v)};return window.addEventListener("mousemove",p),document.addEventListener("mouseleave",_),document.addEventListener("mouseenter",S),l=requestAnimationFrame(v),()=>{window.removeEventListener("mousemove",p),document.removeEventListener("mouseleave",_),document.removeEventListener("mouseenter",S),l&&cancelAnimationFrame(l)}},[a]),a?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"custom-cursor-dot",style:{transform:`translate3d(${t.x}px, ${t.y}px, 0) translate(-50%, -50%)`}}),g.jsx("div",{className:`custom-cursor-ring ${r}`,style:{transform:`translate3d(${n.x}px, ${n.y}px, 0) translate(-50%, -50%)`},children:r==="drag"&&g.jsx("span",{className:"cursor-drag-label",children:"DRAG"})})]}):null}function nA({onLoaded:t}){const[e,n]=be.useState(0),[i,r]=be.useState("INITIALIZING QUANTUM RUNTIME..."),[s,a]=be.useState(!1);return be.useEffect(()=>{const o=[{at:20,text:"COMPILING SHADER PIPELINES..."},{at:50,text:"GENERATING PHYSICAL MESH HIERARCHY..."},{at:80,text:"CALIBRATING SPATIAL LIGHTING & CAMERA..."},{at:98,text:"SYNCHRONIZING NEURAL MESH..."},{at:100,text:"READY."}];let l=0;const c=setInterval(()=>{if(l+=Math.floor(Math.random()*8)+4,l>=100)l=100,clearInterval(c),r("SYSTEM READY // ENTERING WORLD"),setTimeout(()=>{a(!0),setTimeout(()=>{t&&t()},600)},300);else{const f=o.find(h=>l<=h.at);f&&r(f.text)}n(l)},45);return()=>clearInterval(c)},[t]),g.jsx("div",{className:`loading-screen ${s?"fade-out":""}`,children:g.jsxs("div",{className:"loading-content",children:[g.jsxs("div",{className:"loading-monogram",children:[g.jsxs("svg",{viewBox:"0 0 100 100",className:"loading-svg",children:[g.jsx("polygon",{points:"50,5 90,25 90,75 50,95 10,75 10,25",className:"loading-hex"}),g.jsx("path",{d:"M30 35 L70 65 M70 35 L30 65",className:"loading-x"})]}),g.jsx("div",{className:"loading-glow"})]}),g.jsx("div",{className:"loading-title",children:"XYZ ARCHITECTURE"}),g.jsx("div",{className:"loading-bar-wrap",children:g.jsx("div",{className:"loading-bar-fill",style:{width:`${e}%`}})}),g.jsxs("div",{className:"loading-meta",children:[g.jsx("span",{className:"loading-status",children:i}),g.jsxs("span",{className:"loading-percent",children:[e,"%"]})]})]})})}function iA(){const[t,e]=be.useState(!1),[n,i]=be.useState("titanium"),[r,s]=be.useState("hero"),[a,o]=be.useState(0);be.useEffect(()=>{const c=["hero","about","solutions","showcase","work","philosophy","contact"],f=[];c.forEach(d=>{const p=document.getElementById(d);if(!p)return;const _=new IntersectionObserver(S=>{S.forEach(v=>{v.isIntersecting&&s(d)})},{threshold:.3});_.observe(p),f.push(_)});const h=()=>{const d=window.scrollY||document.documentElement.scrollTop,p=document.documentElement.scrollHeight-window.innerHeight,_=p>0?d/p*100:0;o(_)};return window.addEventListener("scroll",h,{passive:!0}),()=>{f.forEach(d=>d.disconnect()),window.removeEventListener("scroll",h)}},[t]);const l=c=>{const f=document.getElementById(c);f&&f.scrollIntoView({behavior:"smooth"})};return g.jsxs("div",{className:"xyz-app-root",children:[!t&&g.jsx(nA,{onLoaded:()=>e(!0)}),g.jsx("div",{className:"scroll-progress-bar",style:{transform:`scaleX(${a/100})`}}),g.jsx(tA,{}),g.jsx(Ew,{activeMode:n,interactiveShowcase:r==="showcase"}),g.jsx(jw,{activeSection:r,onNavigate:l}),g.jsxs("main",{className:"main-content-flow",children:[g.jsx(Xw,{onExplore:()=>l("about"),onViewExperience:()=>l("showcase")}),g.jsx(Yw,{}),g.jsx(qw,{}),g.jsx($w,{activeMode:n,onModeChange:i}),g.jsx(Kw,{}),g.jsx(Qw,{}),g.jsx(Jw,{})]}),g.jsx(eA,{})]})}nu.createRoot(document.getElementById("root")).render(g.jsx(V0.StrictMode,{children:g.jsx(iA,{})}));
