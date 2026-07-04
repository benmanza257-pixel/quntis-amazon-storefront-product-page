(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))u(_);new MutationObserver(_=>{for(const M of _)if(M.type==="childList")for(const N of M.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&u(N)}).observe(document,{childList:!0,subtree:!0});function f(_){const M={};return _.integrity&&(M.integrity=_.integrity),_.referrerPolicy&&(M.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?M.credentials="include":_.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function u(_){if(_.ep)return;_.ep=!0;const M=f(_);fetch(_.href,M)}})();function Cf(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Ls={exports:{}},W={};var Gd;function wf(){if(Gd)return W;Gd=1;var c=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),N=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),Z=Symbol.iterator;function fe(g){return g===null||typeof g!="object"?null:(g=Z&&g[Z]||g["@@iterator"],typeof g=="function"?g:null)}var ye={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,Me={};function De(g,z,k){this.props=g,this.context=z,this.refs=Me,this.updater=k||ye}De.prototype.isReactComponent={},De.prototype.setState=function(g,z){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,z,"setState")},De.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function G(){}G.prototype=De.prototype;function ze(g,z,k){this.props=g,this.context=z,this.refs=Me,this.updater=k||ye}var I=ze.prototype=new G;I.constructor=ze,ne(I,De.prototype),I.isPureReactComponent=!0;var Y=Array.isArray;function xe(){}var ee={H:null,A:null,T:null,S:null},Ye=Object.prototype.hasOwnProperty;function ot(g,z,k){var j=k.ref;return{$$typeof:c,type:g,key:z,ref:j!==void 0?j:null,props:k}}function nt(g,z){return ot(g.type,z,g.props)}function We(g){return typeof g=="object"&&g!==null&&g.$$typeof===c}function ke(g){var z={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(k){return z[k]})}var ht=/\/+/g;function Ue(g,z){return typeof g=="object"&&g!==null&&g.key!=null?ke(""+g.key):z.toString(36)}function Fe(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(xe,xe):(g.status="pending",g.then(function(z){g.status==="pending"&&(g.status="fulfilled",g.value=z)},function(z){g.status==="pending"&&(g.status="rejected",g.reason=z)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function T(g,z,k,j,J){var ae=typeof g;(ae==="undefined"||ae==="boolean")&&(g=null);var ue=!1;if(g===null)ue=!0;else switch(ae){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(g.$$typeof){case c:case m:ue=!0;break;case q:return ue=g._init,T(ue(g._payload),z,k,j,J)}}if(ue)return J=J(g),ue=j===""?"."+Ue(g,0):j,Y(J)?(k="",ue!=null&&(k=ue.replace(ht,"$&/")+"/"),T(J,z,k,"",function(sn){return sn})):J!=null&&(We(J)&&(J=nt(J,k+(J.key==null||g&&g.key===J.key?"":(""+J.key).replace(ht,"$&/")+"/")+ue)),z.push(J)),1;ue=0;var Ve=j===""?".":j+":";if(Y(g))for(var Te=0;Te<g.length;Te++)j=g[Te],ae=Ve+Ue(j,Te),ue+=T(j,z,k,ae,J);else if(Te=fe(g),typeof Te=="function")for(g=Te.call(g),Te=0;!(j=g.next()).done;)j=j.value,ae=Ve+Ue(j,Te++),ue+=T(j,z,k,ae,J);else if(ae==="object"){if(typeof g.then=="function")return T(Fe(g),z,k,j,J);throw z=String(g),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return ue}function C(g,z,k){if(g==null)return g;var j=[],J=0;return T(g,j,"","",function(ae){return z.call(k,ae,J++)}),j}function D(g){if(g._status===-1){var z=g._result;z=z(),z.then(function(k){(g._status===0||g._status===-1)&&(g._status=1,g._result=k)},function(k){(g._status===0||g._status===-1)&&(g._status=2,g._result=k)}),g._status===-1&&(g._status=0,g._result=z)}if(g._status===1)return g._result.default;throw g._result}var V=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},le={map:C,forEach:function(g,z,k){C(g,function(){z.apply(this,arguments)},k)},count:function(g){var z=0;return C(g,function(){z++}),z},toArray:function(g){return C(g,function(z){return z})||[]},only:function(g){if(!We(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return W.Activity=K,W.Children=le,W.Component=De,W.Fragment=f,W.Profiler=_,W.PureComponent=ze,W.StrictMode=u,W.Suspense=R,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,W.__COMPILER_RUNTIME={__proto__:null,c:function(g){return ee.H.useMemoCache(g)}},W.cache=function(g){return function(){return g.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(g,z,k){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var j=ne({},g.props),J=g.key;if(z!=null)for(ae in z.key!==void 0&&(J=""+z.key),z)!Ye.call(z,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&z.ref===void 0||(j[ae]=z[ae]);var ae=arguments.length-2;if(ae===1)j.children=k;else if(1<ae){for(var ue=Array(ae),Ve=0;Ve<ae;Ve++)ue[Ve]=arguments[Ve+2];j.children=ue}return ot(g.type,J,j)},W.createContext=function(g){return g={$$typeof:N,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:M,_context:g},g},W.createElement=function(g,z,k){var j,J={},ae=null;if(z!=null)for(j in z.key!==void 0&&(ae=""+z.key),z)Ye.call(z,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(J[j]=z[j]);var ue=arguments.length-2;if(ue===1)J.children=k;else if(1<ue){for(var Ve=Array(ue),Te=0;Te<ue;Te++)Ve[Te]=arguments[Te+2];J.children=Ve}if(g&&g.defaultProps)for(j in ue=g.defaultProps,ue)J[j]===void 0&&(J[j]=ue[j]);return ot(g,ae,J)},W.createRef=function(){return{current:null}},W.forwardRef=function(g){return{$$typeof:x,render:g}},W.isValidElement=We,W.lazy=function(g){return{$$typeof:q,_payload:{_status:-1,_result:g},_init:D}},W.memo=function(g,z){return{$$typeof:E,type:g,compare:z===void 0?null:z}},W.startTransition=function(g){var z=ee.T,k={};ee.T=k;try{var j=g(),J=ee.S;J!==null&&J(k,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(xe,V)}catch(ae){V(ae)}finally{z!==null&&k.types!==null&&(z.types=k.types),ee.T=z}},W.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},W.use=function(g){return ee.H.use(g)},W.useActionState=function(g,z,k){return ee.H.useActionState(g,z,k)},W.useCallback=function(g,z){return ee.H.useCallback(g,z)},W.useContext=function(g){return ee.H.useContext(g)},W.useDebugValue=function(){},W.useDeferredValue=function(g,z){return ee.H.useDeferredValue(g,z)},W.useEffect=function(g,z){return ee.H.useEffect(g,z)},W.useEffectEvent=function(g){return ee.H.useEffectEvent(g)},W.useId=function(){return ee.H.useId()},W.useImperativeHandle=function(g,z,k){return ee.H.useImperativeHandle(g,z,k)},W.useInsertionEffect=function(g,z){return ee.H.useInsertionEffect(g,z)},W.useLayoutEffect=function(g,z){return ee.H.useLayoutEffect(g,z)},W.useMemo=function(g,z){return ee.H.useMemo(g,z)},W.useOptimistic=function(g,z){return ee.H.useOptimistic(g,z)},W.useReducer=function(g,z,k){return ee.H.useReducer(g,z,k)},W.useRef=function(g){return ee.H.useRef(g)},W.useState=function(g){return ee.H.useState(g)},W.useSyncExternalStore=function(g,z,k){return ee.H.useSyncExternalStore(g,z,k)},W.useTransition=function(){return ee.H.useTransition()},W.version="19.2.7",W}var Id;function Qs(){return Id||(Id=1,Ls.exports=wf()),Ls.exports}var he=Qs();const o=Cf(he);var Ms={exports:{}},Ul={},Ds={exports:{}},Rs={};var Qd;function Ef(){return Qd||(Qd=1,(function(c){function m(T,C){var D=T.length;T.push(C);e:for(;0<D;){var V=D-1>>>1,le=T[V];if(0<_(le,C))T[V]=C,T[D]=le,D=V;else break e}}function f(T){return T.length===0?null:T[0]}function u(T){if(T.length===0)return null;var C=T[0],D=T.pop();if(D!==C){T[0]=D;e:for(var V=0,le=T.length,g=le>>>1;V<g;){var z=2*(V+1)-1,k=T[z],j=z+1,J=T[j];if(0>_(k,D))j<le&&0>_(J,k)?(T[V]=J,T[j]=D,V=j):(T[V]=k,T[z]=D,V=z);else if(j<le&&0>_(J,D))T[V]=J,T[j]=D,V=j;else break e}}return C}function _(T,C){var D=T.sortIndex-C.sortIndex;return D!==0?D:T.id-C.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;c.unstable_now=function(){return M.now()}}else{var N=Date,x=N.now();c.unstable_now=function(){return N.now()-x}}var R=[],E=[],q=1,K=null,Z=3,fe=!1,ye=!1,ne=!1,Me=!1,De=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,ze=typeof setImmediate<"u"?setImmediate:null;function I(T){for(var C=f(E);C!==null;){if(C.callback===null)u(E);else if(C.startTime<=T)u(E),C.sortIndex=C.expirationTime,m(R,C);else break;C=f(E)}}function Y(T){if(ne=!1,I(T),!ye)if(f(R)!==null)ye=!0,xe||(xe=!0,ke());else{var C=f(E);C!==null&&Fe(Y,C.startTime-T)}}var xe=!1,ee=-1,Ye=5,ot=-1;function nt(){return Me?!0:!(c.unstable_now()-ot<Ye)}function We(){if(Me=!1,xe){var T=c.unstable_now();ot=T;var C=!0;try{e:{ye=!1,ne&&(ne=!1,G(ee),ee=-1),fe=!0;var D=Z;try{t:{for(I(T),K=f(R);K!==null&&!(K.expirationTime>T&&nt());){var V=K.callback;if(typeof V=="function"){K.callback=null,Z=K.priorityLevel;var le=V(K.expirationTime<=T);if(T=c.unstable_now(),typeof le=="function"){K.callback=le,I(T),C=!0;break t}K===f(R)&&u(R),I(T)}else u(R);K=f(R)}if(K!==null)C=!0;else{var g=f(E);g!==null&&Fe(Y,g.startTime-T),C=!1}}break e}finally{K=null,Z=D,fe=!1}C=void 0}}finally{C?ke():xe=!1}}}var ke;if(typeof ze=="function")ke=function(){ze(We)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Ue=ht.port2;ht.port1.onmessage=We,ke=function(){Ue.postMessage(null)}}else ke=function(){De(We,0)};function Fe(T,C){ee=De(function(){T(c.unstable_now())},C)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(T){T.callback=null},c.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ye=0<T?Math.floor(1e3/T):5},c.unstable_getCurrentPriorityLevel=function(){return Z},c.unstable_next=function(T){switch(Z){case 1:case 2:case 3:var C=3;break;default:C=Z}var D=Z;Z=C;try{return T()}finally{Z=D}},c.unstable_requestPaint=function(){Me=!0},c.unstable_runWithPriority=function(T,C){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=Z;Z=T;try{return C()}finally{Z=D}},c.unstable_scheduleCallback=function(T,C,D){var V=c.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?V+D:V):D=V,T){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=D+le,T={id:q++,callback:C,priorityLevel:T,startTime:D,expirationTime:le,sortIndex:-1},D>V?(T.sortIndex=D,m(E,T),f(R)===null&&T===f(E)&&(ne?(G(ee),ee=-1):ne=!0,Fe(Y,D-V))):(T.sortIndex=le,m(R,T),ye||fe||(ye=!0,xe||(xe=!0,ke()))),T},c.unstable_shouldYield=nt,c.unstable_wrapCallback=function(T){var C=Z;return function(){var D=Z;Z=C;try{return T.apply(this,arguments)}finally{Z=D}}}})(Rs)),Rs}var Kd;function Af(){return Kd||(Kd=1,Ds.exports=Ef()),Ds.exports}var Ns={exports:{}},at={};var Hd;function zf(){if(Hd)return at;Hd=1;var c=Qs();function m(R){var E="https://react.dev/errors/"+R;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var q=2;q<arguments.length;q++)E+="&args[]="+encodeURIComponent(arguments[q])}return"Minified React error #"+R+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(m(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},_=Symbol.for("react.portal");function M(R,E,q){var K=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:K==null?null:""+K,children:R,containerInfo:E,implementation:q}}var N=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(R,E){if(R==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,at.createPortal=function(R,E){var q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(m(299));return M(R,E,null,q)},at.flushSync=function(R){var E=N.T,q=u.p;try{if(N.T=null,u.p=2,R)return R()}finally{N.T=E,u.p=q,u.d.f()}},at.preconnect=function(R,E){typeof R=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,u.d.C(R,E))},at.prefetchDNS=function(R){typeof R=="string"&&u.d.D(R)},at.preinit=function(R,E){if(typeof R=="string"&&E&&typeof E.as=="string"){var q=E.as,K=x(q,E.crossOrigin),Z=typeof E.integrity=="string"?E.integrity:void 0,fe=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;q==="style"?u.d.S(R,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:K,integrity:Z,fetchPriority:fe}):q==="script"&&u.d.X(R,{crossOrigin:K,integrity:Z,fetchPriority:fe,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},at.preinitModule=function(R,E){if(typeof R=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var q=x(E.as,E.crossOrigin);u.d.M(R,{crossOrigin:q,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&u.d.M(R)},at.preload=function(R,E){if(typeof R=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var q=E.as,K=x(q,E.crossOrigin);u.d.L(R,q,{crossOrigin:K,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},at.preloadModule=function(R,E){if(typeof R=="string")if(E){var q=x(E.as,E.crossOrigin);u.d.m(R,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:q,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else u.d.m(R)},at.requestFormReset=function(R){u.d.r(R)},at.unstable_batchedUpdates=function(R,E){return R(E)},at.useFormState=function(R,E,q){return N.H.useFormState(R,E,q)},at.useFormStatus=function(){return N.H.useHostTransitionStatus()},at.version="19.2.7",at}var Fd;function Lf(){if(Fd)return Ns.exports;Fd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(m){console.error(m)}}return c(),Ns.exports=zf(),Ns.exports}var Vd;function Mf(){if(Vd)return Ul;Vd=1;var c=Af(),m=Qs(),f=Lf();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function M(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function N(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(M(e)!==e)throw Error(u(188))}function E(e){var t=e.alternate;if(!t){if(t=M(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return R(l),e;if(i===a)return R(l),t;i=i.sibling}throw Error(u(188))}if(n.return!==a.return)n=l,a=i;else{for(var r=!1,s=l.child;s;){if(s===n){r=!0,n=l,a=i;break}if(s===a){r=!0,a=l,n=i;break}s=s.sibling}if(!r){for(s=i.child;s;){if(s===n){r=!0,n=i,a=l;break}if(s===a){r=!0,a=i,n=l;break}s=s.sibling}if(!r)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function q(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=q(e),t!==null)return t;e=e.sibling}return null}var K=Object.assign,Z=Symbol.for("react.element"),fe=Symbol.for("react.transitional.element"),ye=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),Me=Symbol.for("react.strict_mode"),De=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),ze=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),ot=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),We=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=We&&e[We]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function Ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ne:return"Fragment";case De:return"Profiler";case Me:return"StrictMode";case Y:return"Suspense";case xe:return"SuspenseList";case ot:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ye:return"Portal";case ze:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:Ue(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return Ue(e(t))}catch{}}return null}var Fe=Array.isArray,T=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},V=[],le=-1;function g(e){return{current:e}}function z(e){0>le||(e.current=V[le],V[le]=null,le--)}function k(e,t){le++,V[le]=e.current,e.current=t}var j=g(null),J=g(null),ae=g(null),ue=g(null);function Ve(e,t){switch(k(ae,t),k(J,e),k(j,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sd(t),e=cd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(j),k(j,e)}function Te(){z(j),z(J),z(ae)}function sn(e){e.memoizedState!==null&&k(ue,e);var t=j.current,n=cd(t,e.type);t!==n&&(k(J,e),k(j,n))}function ea(e){J.current===e&&(z(j),z(J)),ue.current===e&&(z(ue),kl._currentValue=D)}var Ka,Ha;function Ut(e){if(Ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ka=t&&t[1]||"",Ha=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ka+e+Ha}var cn=!1;function ta(e,t){if(!e||cn)return"";cn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(B){var v=B}Reflect.construct(e,[],L)}else{try{L.call()}catch(B){v=B}e.call(L.prototype)}}else{try{throw Error()}catch(B){v=B}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(B){if(B&&v&&typeof B.stack=="string")return[B.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],s=i[1];if(r&&s){var d=r.split(`
`),y=s.split(`
`);for(l=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;if(a===d.length||l===y.length)for(a=d.length-1,l=y.length-1;1<=a&&0<=l&&d[a]!==y[l];)l--;for(;1<=a&&0<=l;a--,l--)if(d[a]!==y[l]){if(a!==1||l!==1)do if(a--,l--,0>l||d[a]!==y[l]){var w=`
`+d[a].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=a&&0<=l);break}}}finally{cn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ut(n):""}function mo(e,t){switch(e.tag){case 26:case 27:case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return e.child!==t&&t!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return ta(e.type,!1);case 11:return ta(e.type.render,!1);case 1:return ta(e.type,!0);case 31:return Ut("Activity");default:return""}}function Kl(e){try{var t="",n=null;do t+=mo(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Fa=Object.prototype.hasOwnProperty,na=c.unstable_scheduleCallback,Va=c.unstable_cancelCallback,go=c.unstable_shouldYield,ho=c.unstable_requestPaint,S=c.unstable_now,O=c.unstable_getCurrentPriorityLevel,H=c.unstable_ImmediatePriority,te=c.unstable_UserBlockingPriority,Ce=c.unstable_NormalPriority,kt=c.unstable_LowPriority,On=c.unstable_IdlePriority,fo=c.log,po=c.unstable_setDisableYieldValue,Xa=null,ft=null;function un(e){if(typeof fo=="function"&&po(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Xa,e)}catch{}}var pt=Math.clz32?Math.clz32:cg,rg=Math.log,sg=Math.LN2;function cg(e){return e>>>=0,e===0?32:31-(rg(e)/sg|0)|0}var Hl=256,Fl=262144,Vl=4194304;function jn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xl(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?l=jn(a):(r&=s,r!==0?l=jn(r):n||(n=s&~e,n!==0&&(l=jn(n))))):(s=a&~i,s!==0?l=jn(s):r!==0?l=jn(r):n||(n=a&~e,n!==0&&(l=jn(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Ya(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ug(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hs(){var e=Vl;return Vl<<=1,(Vl&62914560)===0&&(Vl=4194304),e}function bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mg(e,t,n,a,l,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,d=e.expirationTimes,y=e.hiddenUpdates;for(n=r&~n;0<n;){var w=31-pt(n),L=1<<w;s[w]=0,d[w]=-1;var v=y[w];if(v!==null)for(y[w]=null,w=0;w<v.length;w++){var B=v[w];B!==null&&(B.lane&=-536870913)}n&=~L}a!==0&&Fs(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function Fs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-pt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Vs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-pt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Xs(e,t){var n=t&-t;return n=(n&42)!==0?1:yo(n),(n&(e.suspendedLanes|t))!==0?0:n}function yo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ys(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:Rd(e.type))}function qs(e,t){var n=C.p;try{return C.p=e,t()}finally{C.p=n}}var mn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+mn,rt="__reactProps$"+mn,aa="__reactContainer$"+mn,_o="__reactEvents$"+mn,dg="__reactListeners$"+mn,gg="__reactHandles$"+mn,Js="__reactResources$"+mn,Ja="__reactMarker$"+mn;function Bo(e){delete e[Ze],delete e[rt],delete e[_o],delete e[dg],delete e[gg]}function la(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[aa]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pd(e);e!==null;){if(n=e[Ze])return n;e=pd(e)}return t}e=n,n=e.parentNode}return null}function ia(e){if(e=e[Ze]||e[aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function oa(e){var t=e[Js];return t||(t=e[Js]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[Ja]=!0}var Ws=new Set,Zs={};function xn(e,t){ra(e,t),ra(e+"Capture",t)}function ra(e,t){for(Zs[e]=t,e=0;e<t.length;e++)Ws.add(t[e])}var hg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ps={},$s={};function fg(e){return Fa.call($s,e)?!0:Fa.call(Ps,e)?!1:hg.test(e)?$s[e]=!0:(Ps[e]=!0,!1)}function Yl(e,t,n){if(fg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ql(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ht(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pg(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){if(!e._valueTracker){var t=ec(e)?"checked":"value";e._valueTracker=pg(e,t,""+e[t])}}function tc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ec(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bg=/[\n"\\]/g;function wt(e){return e.replace(bg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function To(e,t,n,a,l,i,r,s){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ct(t)):e.value!==""+Ct(t)&&(e.value=""+Ct(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Co(e,r,Ct(t)):n!=null?Co(e,r,Ct(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Ct(s):e.removeAttribute("name")}function nc(e,t,n,a,l,i,r,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){So(e);return}n=n!=null?""+Ct(n):"",t=t!=null?""+Ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),So(e)}function Co(e,t,n){t==="number"&&Jl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function sa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ac(e,t,n){if(t!=null&&(t=""+Ct(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ct(n):""}function lc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Fe(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ct(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),So(e)}function ca(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ic(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||yg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function oc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&ic(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&ic(e,i,t[i])}function wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_g=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wl(e){return _g.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ft(){}var Eo=null;function Ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,ma=null;function rc(e){var t=ia(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(To(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[rt]||null;if(!l)throw Error(u(90));To(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&tc(a)}break e;case"textarea":ac(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&sa(e,!!n.multiple,t,!1)}}}var zo=!1;function sc(e,t,n){if(zo)return e(t,n);zo=!0;try{var a=e(t);return a}finally{if(zo=!1,(ua!==null||ma!==null)&&(xi(),ua&&(t=ua,e=ma,ma=ua=null,rc(t),e)))for(t=0;t<e.length;t++)rc(e[t])}}function Za(e,t){var n=e.stateNode;if(n===null)return null;var a=n[rt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lo=!1;if(Vt)try{var Pa={};Object.defineProperty(Pa,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",Pa,Pa),window.removeEventListener("test",Pa,Pa)}catch{Lo=!1}var dn=null,Mo=null,Zl=null;function cc(){if(Zl)return Zl;var e,t=Mo,n=t.length,a,l="value"in dn?dn.value:dn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var r=n-e;for(a=1;a<=r&&t[n-a]===l[i-a];a++);return Zl=l.slice(e,1<a?1-a:void 0)}function Pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $l(){return!0}function uc(){return!1}function st(e){function t(n,a,l,i,r){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$l:uc,this.isPropagationStopped=uc,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=st(Un),$a=K({},Un,{view:0,detail:0}),Bg=st($a),Do,Ro,el,ti=K({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==el&&(el&&e.type==="mousemove"?(Do=e.screenX-el.screenX,Ro=e.screenY-el.screenY):Ro=Do=0,el=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),mc=st(ti),Sg=K({},ti,{dataTransfer:0}),Tg=st(Sg),Cg=K({},$a,{relatedTarget:0}),No=st(Cg),wg=K({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Eg=st(wg),Ag=K({},Un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zg=st(Ag),Lg=K({},Un,{data:0}),dc=st(Lg),Mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rg[e])?!!t[e]:!1}function ko(){return Ng}var kg=K({},$a,{key:function(e){if(e.key){var t=Mg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ko,charCode:function(e){return e.type==="keypress"?Pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Og=st(kg),jg=K({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gc=st(jg),xg=K({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ko}),Ug=st(xg),Gg=K({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=st(Gg),Qg=K({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kg=st(Qg),Hg=K({},Un,{newState:0,oldState:0}),Fg=st(Hg),Vg=[9,13,27,32],Oo=Vt&&"CompositionEvent"in window,tl=null;Vt&&"documentMode"in document&&(tl=document.documentMode);var Xg=Vt&&"TextEvent"in window&&!tl,hc=Vt&&(!Oo||tl&&8<tl&&11>=tl),fc=" ",pc=!1;function bc(e,t){switch(e){case"keyup":return Vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var da=!1;function Yg(e,t){switch(e){case"compositionend":return yc(t);case"keypress":return t.which!==32?null:(pc=!0,fc);case"textInput":return e=t.data,e===fc&&pc?null:e;default:return null}}function qg(e,t){if(da)return e==="compositionend"||!Oo&&bc(e,t)?(e=cc(),Zl=Mo=dn=null,da=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hc&&t.locale!=="ko"?null:t.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jg[e.type]:t==="textarea"}function _c(e,t,n,a){ua?ma?ma.push(a):ma=[a]:ua=a,t=Fi(t,"onChange"),0<t.length&&(n=new ei("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var nl=null,al=null;function Wg(e){nd(e,0)}function ni(e){var t=Wa(e);if(tc(t))return e}function Bc(e,t){if(e==="change")return t}var Sc=!1;if(Vt){var jo;if(Vt){var xo="oninput"in document;if(!xo){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),xo=typeof Tc.oninput=="function"}jo=xo}else jo=!1;Sc=jo&&(!document.documentMode||9<document.documentMode)}function Cc(){nl&&(nl.detachEvent("onpropertychange",wc),al=nl=null)}function wc(e){if(e.propertyName==="value"&&ni(al)){var t=[];_c(t,al,e,Ao(e)),sc(Wg,t)}}function Zg(e,t,n){e==="focusin"?(Cc(),nl=t,al=n,nl.attachEvent("onpropertychange",wc)):e==="focusout"&&Cc()}function Pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(al)}function $g(e,t){if(e==="click")return ni(t)}function eh(e,t){if(e==="input"||e==="change")return ni(t)}function th(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:th;function ll(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Fa.call(t,l)||!bt(e[l],t[l]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ac(e,t){var n=Ec(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ec(n)}}function zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jl(e.document)}return t}function Uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var nh=Vt&&"documentMode"in document&&11>=document.documentMode,ga=null,Go=null,il=null,Io=!1;function Mc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Io||ga==null||ga!==Jl(a)||(a=ga,"selectionStart"in a&&Uo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),il&&ll(il,a)||(il=a,a=Fi(Go,"onSelect"),0<a.length&&(t=new ei("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ga)))}function Gn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ha={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionrun:Gn("Transition","TransitionRun"),transitionstart:Gn("Transition","TransitionStart"),transitioncancel:Gn("Transition","TransitionCancel"),transitionend:Gn("Transition","TransitionEnd")},Qo={},Dc={};Vt&&(Dc=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function In(e){if(Qo[e])return Qo[e];if(!ha[e])return e;var t=ha[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dc)return Qo[e]=t[n];return e}var Rc=In("animationend"),Nc=In("animationiteration"),kc=In("animationstart"),ah=In("transitionrun"),lh=In("transitionstart"),ih=In("transitioncancel"),Oc=In("transitionend"),jc=new Map,Ko="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ko.push("scrollEnd");function Ot(e,t){jc.set(e,t),xn(t,[e])}var ai=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],fa=0,Ho=0;function li(){for(var e=fa,t=Ho=fa=0;t<e;){var n=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var i=Et[t];if(Et[t++]=null,a!==null&&l!==null){var r=a.pending;r===null?l.next=l:(l.next=r.next,r.next=l),a.pending=l}i!==0&&xc(n,l,i)}}function ii(e,t,n,a){Et[fa++]=e,Et[fa++]=t,Et[fa++]=n,Et[fa++]=a,Ho|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Fo(e,t,n,a){return ii(e,t,n,a),oi(e)}function Qn(e,t){return ii(e,null,null,t),oi(e)}function xc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-pt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function oi(e){if(50<Al)throw Al=0,$r=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pa={};function oh(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,a){return new oh(e,t,n,a)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xt(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Uc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ri(e,t,n,a,l,i){var r=0;if(a=e,typeof e=="function")Vo(e)&&(r=1);else if(typeof e=="string")r=df(e,n,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ot:return e=yt(31,n,t,l),e.elementType=ot,e.lanes=i,e;case ne:return Kn(n.children,l,i,t);case Me:r=8,l|=24;break;case De:return e=yt(12,n,t,l|2),e.elementType=De,e.lanes=i,e;case Y:return e=yt(13,n,t,l),e.elementType=Y,e.lanes=i,e;case xe:return e=yt(19,n,t,l),e.elementType=xe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ze:r=10;break e;case G:r=9;break e;case I:r=11;break e;case ee:r=14;break e;case Ye:r=16,a=null;break e}r=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=yt(r,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Kn(e,t,n,a){return e=yt(7,e,a,t),e.lanes=n,e}function Xo(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Gc(e){var t=yt(18,null,null,0);return t.stateNode=e,t}function Yo(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ic=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var n=Ic.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Kl(t)},Ic.set(e,t),t)}return{value:e,source:t,stack:Kl(t)}}var ba=[],ya=0,si=null,ol=0,zt=[],Lt=0,gn=null,Gt=1,It="";function Yt(e,t){ba[ya++]=ol,ba[ya++]=si,si=e,ol=t}function Qc(e,t,n){zt[Lt++]=Gt,zt[Lt++]=It,zt[Lt++]=gn,gn=e;var a=Gt;e=It;var l=32-pt(a)-1;a&=~(1<<l),n+=1;var i=32-pt(t)+l;if(30<i){var r=l-l%5;i=(a&(1<<r)-1).toString(32),a>>=r,l-=r,Gt=1<<32-pt(t)+l|n<<l|a,It=i+e}else Gt=1<<i|n<<l|a,It=e}function qo(e){e.return!==null&&(Yt(e,1),Qc(e,1,0))}function Jo(e){for(;e===si;)si=ba[--ya],ba[ya]=null,ol=ba[--ya],ba[ya]=null;for(;e===gn;)gn=zt[--Lt],zt[Lt]=null,It=zt[--Lt],zt[Lt]=null,Gt=zt[--Lt],zt[Lt]=null}function Kc(e,t){zt[Lt++]=Gt,zt[Lt++]=It,zt[Lt++]=gn,Gt=t.id,It=t.overflow,gn=e}var Pe=null,we=null,ce=!1,hn=null,Mt=!1,Wo=Error(u(519));function fn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rl(At(t,e)),Wo}function Hc(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ze]=e,t[rt]=a,n){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(n=0;n<Ll.length;n++)oe(Ll[n],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),nc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),lc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||od(t.textContent,n)?(a.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),a.onScroll!=null&&oe("scroll",t),a.onScrollEnd!=null&&oe("scrollend",t),a.onClick!=null&&(t.onclick=Ft),t=!0):t=!1,t||fn(e,!0)}function Fc(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:Pe=Pe.return}}function va(e){if(e!==Pe)return!1;if(!ce)return Fc(e),ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||hs(e.type,e.memoizedProps)),n=!n),n&&we&&fn(e),Fc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));we=fd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));we=fd(e)}else t===27?(t=we,Ln(e.type)?(e=vs,vs=null,we=e):we=t):we=Pe?Rt(e.stateNode.nextSibling):null;return!0}function Hn(){we=Pe=null,ce=!1}function Zo(){var e=hn;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),hn=null),e}function rl(e){hn===null?hn=[e]:hn.push(e)}var Po=g(null),Fn=null,qt=null;function pn(e,t,n){k(Po,t._currentValue),t._currentValue=n}function Jt(e){e._currentValue=Po.current,z(Po)}function $o(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function er(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var r=l.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=l;for(var d=0;d<t.length;d++)if(s.context===t[d]){i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),$o(i.return,n,e),a||(r=null);break e}i=s.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(u(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),$o(r,n,e),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function _a(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var s=l.type;bt(l.pendingProps.value,r.value)||(e!==null?e.push(s):e=[s])}}else if(l===ue.current){if(r=l.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(kl):e=[kl])}l=l.return}e!==null&&er(t,e,n,a),t.flags|=262144}function ci(e){for(e=e.firstContext;e!==null;){if(!bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vn(e){Fn=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return Vc(Fn,e)}function ui(e,t){return Fn===null&&Vn(e),Vc(e,t)}function Vc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qt===null){if(e===null)throw Error(u(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return n}var rh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},sh=c.unstable_scheduleCallback,ch=c.unstable_NormalPriority,Ge={$$typeof:ze,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tr(){return{controller:new rh,data:new Map,refCount:0}}function sl(e){e.refCount--,e.refCount===0&&sh(ch,function(){e.controller.abort()})}var cl=null,nr=0,Ba=0,Sa=null;function uh(e,t){if(cl===null){var n=cl=[];nr=0,Ba=is(),Sa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return nr++,t.then(Xc,Xc),t}function Xc(){if(--nr===0&&cl!==null){Sa!==null&&(Sa.status="fulfilled");var e=cl;cl=null,Ba=0,Sa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function mh(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Yc=T.S;T.S=function(e,t){Mm=S(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&uh(e,t),Yc!==null&&Yc(e,t)};var Xn=g(null);function ar(){var e=Xn.current;return e!==null?e:Se.pooledCache}function mi(e,t){t===null?k(Xn,Xn.current):k(Xn,t.pool)}function qc(){var e=ar();return e===null?null:{parent:Ge._currentValue,pool:e}}var Ta=Error(u(460)),lr=Error(u(474)),di=Error(u(542)),gi={then:function(){}};function Jc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ft,Ft),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pc(e),e;default:if(typeof t.status=="string")t.then(Ft,Ft);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pc(e),e}throw qn=t,Ta}}function Yn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(qn=n,Ta):n}}var qn=null;function Zc(){if(qn===null)throw Error(u(459));var e=qn;return qn=null,e}function Pc(e){if(e===Ta||e===di)throw Error(u(483))}var Ca=null,ul=0;function hi(e){var t=ul;return ul+=1,Ca===null&&(Ca=[]),Wc(Ca,e,t)}function ml(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function fi(e,t){throw t.$$typeof===Z?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $c(e){function t(p,h){if(e){var b=p.deletions;b===null?(p.deletions=[h],p.flags|=16):b.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function a(p){for(var h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function l(p,h){return p=Xt(p,h),p.index=0,p.sibling=null,p}function i(p,h,b){return p.index=b,e?(b=p.alternate,b!==null?(b=b.index,b<h?(p.flags|=67108866,h):b):(p.flags|=67108866,h)):(p.flags|=1048576,h)}function r(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function s(p,h,b,A){return h===null||h.tag!==6?(h=Xo(b,p.mode,A),h.return=p,h):(h=l(h,b),h.return=p,h)}function d(p,h,b,A){var F=b.type;return F===ne?w(p,h,b.props.children,A,b.key):h!==null&&(h.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ye&&Yn(F)===h.type)?(h=l(h,b.props),ml(h,b),h.return=p,h):(h=ri(b.type,b.key,b.props,null,p.mode,A),ml(h,b),h.return=p,h)}function y(p,h,b,A){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=Yo(b,p.mode,A),h.return=p,h):(h=l(h,b.children||[]),h.return=p,h)}function w(p,h,b,A,F){return h===null||h.tag!==7?(h=Kn(b,p.mode,A,F),h.return=p,h):(h=l(h,b),h.return=p,h)}function L(p,h,b){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Xo(""+h,p.mode,b),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fe:return b=ri(h.type,h.key,h.props,null,p.mode,b),ml(b,h),b.return=p,b;case ye:return h=Yo(h,p.mode,b),h.return=p,h;case Ye:return h=Yn(h),L(p,h,b)}if(Fe(h)||ke(h))return h=Kn(h,p.mode,b,null),h.return=p,h;if(typeof h.then=="function")return L(p,hi(h),b);if(h.$$typeof===ze)return L(p,ui(p,h),b);fi(p,h)}return null}function v(p,h,b,A){var F=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return F!==null?null:s(p,h,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fe:return b.key===F?d(p,h,b,A):null;case ye:return b.key===F?y(p,h,b,A):null;case Ye:return b=Yn(b),v(p,h,b,A)}if(Fe(b)||ke(b))return F!==null?null:w(p,h,b,A,null);if(typeof b.then=="function")return v(p,h,hi(b),A);if(b.$$typeof===ze)return v(p,h,ui(p,b),A);fi(p,b)}return null}function B(p,h,b,A,F){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return p=p.get(b)||null,s(h,p,""+A,F);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case fe:return p=p.get(A.key===null?b:A.key)||null,d(h,p,A,F);case ye:return p=p.get(A.key===null?b:A.key)||null,y(h,p,A,F);case Ye:return A=Yn(A),B(p,h,b,A,F)}if(Fe(A)||ke(A))return p=p.get(b)||null,w(h,p,A,F,null);if(typeof A.then=="function")return B(p,h,b,hi(A),F);if(A.$$typeof===ze)return B(p,h,b,ui(h,A),F);fi(h,A)}return null}function U(p,h,b,A){for(var F=null,me=null,Q=h,$=h=0,se=null;Q!==null&&$<b.length;$++){Q.index>$?(se=Q,Q=null):se=Q.sibling;var de=v(p,Q,b[$],A);if(de===null){Q===null&&(Q=se);break}e&&Q&&de.alternate===null&&t(p,Q),h=i(de,h,$),me===null?F=de:me.sibling=de,me=de,Q=se}if($===b.length)return n(p,Q),ce&&Yt(p,$),F;if(Q===null){for(;$<b.length;$++)Q=L(p,b[$],A),Q!==null&&(h=i(Q,h,$),me===null?F=Q:me.sibling=Q,me=Q);return ce&&Yt(p,$),F}for(Q=a(Q);$<b.length;$++)se=B(Q,p,$,b[$],A),se!==null&&(e&&se.alternate!==null&&Q.delete(se.key===null?$:se.key),h=i(se,h,$),me===null?F=se:me.sibling=se,me=se);return e&&Q.forEach(function(kn){return t(p,kn)}),ce&&Yt(p,$),F}function X(p,h,b,A){if(b==null)throw Error(u(151));for(var F=null,me=null,Q=h,$=h=0,se=null,de=b.next();Q!==null&&!de.done;$++,de=b.next()){Q.index>$?(se=Q,Q=null):se=Q.sibling;var kn=v(p,Q,de.value,A);if(kn===null){Q===null&&(Q=se);break}e&&Q&&kn.alternate===null&&t(p,Q),h=i(kn,h,$),me===null?F=kn:me.sibling=kn,me=kn,Q=se}if(de.done)return n(p,Q),ce&&Yt(p,$),F;if(Q===null){for(;!de.done;$++,de=b.next())de=L(p,de.value,A),de!==null&&(h=i(de,h,$),me===null?F=de:me.sibling=de,me=de);return ce&&Yt(p,$),F}for(Q=a(Q);!de.done;$++,de=b.next())de=B(Q,p,$,de.value,A),de!==null&&(e&&de.alternate!==null&&Q.delete(de.key===null?$:de.key),h=i(de,h,$),me===null?F=de:me.sibling=de,me=de);return e&&Q.forEach(function(Tf){return t(p,Tf)}),ce&&Yt(p,$),F}function Be(p,h,b,A){if(typeof b=="object"&&b!==null&&b.type===ne&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case fe:e:{for(var F=b.key;h!==null;){if(h.key===F){if(F=b.type,F===ne){if(h.tag===7){n(p,h.sibling),A=l(h,b.props.children),A.return=p,p=A;break e}}else if(h.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ye&&Yn(F)===h.type){n(p,h.sibling),A=l(h,b.props),ml(A,b),A.return=p,p=A;break e}n(p,h);break}else t(p,h);h=h.sibling}b.type===ne?(A=Kn(b.props.children,p.mode,A,b.key),A.return=p,p=A):(A=ri(b.type,b.key,b.props,null,p.mode,A),ml(A,b),A.return=p,p=A)}return r(p);case ye:e:{for(F=b.key;h!==null;){if(h.key===F)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){n(p,h.sibling),A=l(h,b.children||[]),A.return=p,p=A;break e}else{n(p,h);break}else t(p,h);h=h.sibling}A=Yo(b,p.mode,A),A.return=p,p=A}return r(p);case Ye:return b=Yn(b),Be(p,h,b,A)}if(Fe(b))return U(p,h,b,A);if(ke(b)){if(F=ke(b),typeof F!="function")throw Error(u(150));return b=F.call(b),X(p,h,b,A)}if(typeof b.then=="function")return Be(p,h,hi(b),A);if(b.$$typeof===ze)return Be(p,h,ui(p,b),A);fi(p,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,h!==null&&h.tag===6?(n(p,h.sibling),A=l(h,b),A.return=p,p=A):(n(p,h),A=Xo(b,p.mode,A),A.return=p,p=A),r(p)):n(p,h)}return function(p,h,b,A){try{ul=0;var F=Be(p,h,b,A);return Ca=null,F}catch(Q){if(Q===Ta||Q===di)throw Q;var me=yt(29,Q,null,p.mode);return me.lanes=A,me.return=p,me}}}var Jn=$c(!0),eu=$c(!1),bn=!1;function ir(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function or(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ge&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=oi(e),xc(e,null,n),t}return ii(e,a,t,n),oi(e)}function dl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vs(e,n)}}function rr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var sr=!1;function gl(){if(sr){var e=Sa;if(e!==null)throw e}}function hl(e,t,n,a){sr=!1;var l=e.updateQueue;bn=!1;var i=l.firstBaseUpdate,r=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var d=s,y=d.next;d.next=null,r===null?i=y:r.next=y,r=d;var w=e.alternate;w!==null&&(w=w.updateQueue,s=w.lastBaseUpdate,s!==r&&(s===null?w.firstBaseUpdate=y:s.next=y,w.lastBaseUpdate=d))}if(i!==null){var L=l.baseState;r=0,w=y=d=null,s=i;do{var v=s.lane&-536870913,B=v!==s.lane;if(B?(re&v)===v:(a&v)===v){v!==0&&v===Ba&&(sr=!0),w!==null&&(w=w.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var U=e,X=s;v=t;var Be=n;switch(X.tag){case 1:if(U=X.payload,typeof U=="function"){L=U.call(Be,L,v);break e}L=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=X.payload,v=typeof U=="function"?U.call(Be,L,v):U,v==null)break e;L=K({},L,v);break e;case 2:bn=!0}}v=s.callback,v!==null&&(e.flags|=64,B&&(e.flags|=8192),B=l.callbacks,B===null?l.callbacks=[v]:B.push(v))}else B={lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},w===null?(y=w=B,d=L):w=w.next=B,r|=v;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;B=s,s=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);w===null&&(d=L),l.baseState=d,l.firstBaseUpdate=y,l.lastBaseUpdate=w,i===null&&(l.shared.lanes=0),Cn|=r,e.lanes=r,e.memoizedState=L}}function tu(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function nu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)tu(n[e],t)}var wa=g(null),pi=g(0);function au(e,t){e=ln,k(pi,e),k(wa,t),ln=e|t.baseLanes}function cr(){k(pi,ln),k(wa,wa.current)}function ur(){ln=pi.current,z(wa),z(pi)}var vt=g(null),Dt=null;function _n(e){var t=e.alternate;k(Oe,Oe.current&1),k(vt,e),Dt===null&&(t===null||wa.current!==null||t.memoizedState!==null)&&(Dt=e)}function mr(e){k(Oe,Oe.current),k(vt,e),Dt===null&&(Dt=e)}function lu(e){e.tag===22?(k(Oe,Oe.current),k(vt,e),Dt===null&&(Dt=e)):Bn()}function Bn(){k(Oe,Oe.current),k(vt,vt.current)}function _t(e){z(vt),Dt===e&&(Dt=null),z(Oe)}var Oe=g(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||bs(n)||ys(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wt=0,P=null,ve=null,Ie=null,yi=!1,Ea=!1,Wn=!1,vi=0,fl=0,Aa=null,dh=0;function Re(){throw Error(u(321))}function dr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function gr(e,t,n,a,l,i){return Wt=i,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Qu:zr,Wn=!1,i=n(a,l),Wn=!1,Ea&&(i=ou(t,n,a,l)),iu(e),i}function iu(e){T.H=yl;var t=ve!==null&&ve.next!==null;if(Wt=0,Ie=ve=P=null,yi=!1,fl=0,Aa=null,t)throw Error(u(300));e===null||Qe||(e=e.dependencies,e!==null&&ci(e)&&(Qe=!0))}function ou(e,t,n,a){P=e;var l=0;do{if(Ea&&(Aa=null),fl=0,Ea=!1,25<=l)throw Error(u(301));if(l+=1,Ie=ve=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Ku,i=t(n,a)}while(Ea);return i}function gh(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?pl(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(P.flags|=1024),t}function hr(){var e=vi!==0;return vi=0,e}function fr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function pr(e){if(yi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yi=!1}Wt=0,Ie=ve=P=null,Ea=!1,fl=vi=0,Aa=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?P.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function je(){if(ve===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=Ie===null?P.memoizedState:Ie.next;if(t!==null)Ie=t,ve=e;else{if(e===null)throw P.alternate===null?Error(u(467)):Error(u(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ie===null?P.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function _i(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pl(e){var t=fl;return fl+=1,Aa===null&&(Aa=[]),e=Wc(Aa,e,t),t=P,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Qu:zr),e}function Bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pl(e);if(e.$$typeof===ze)return $e(e)}throw Error(u(438,String(e)))}function br(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=P.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=_i(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=nt;return t.index++,n}function Zt(e,t){return typeof t=="function"?t(e):t}function Si(e){var t=je();return yr(t,ve,e)}function yr(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var r=l.next;l.next=i.next,i.next=r}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var s=r=null,d=null,y=t,w=!1;do{var L=y.lane&-536870913;if(L!==y.lane?(re&L)===L:(Wt&L)===L){var v=y.revertLane;if(v===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),L===Ba&&(w=!0);else if((Wt&v)===v){y=y.next,v===Ba&&(w=!0);continue}else L={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},d===null?(s=d=L,r=i):d=d.next=L,P.lanes|=v,Cn|=v;L=y.action,Wn&&n(i,L),i=y.hasEagerState?y.eagerState:n(i,L)}else v={lane:L,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},d===null?(s=d=v,r=i):d=d.next=v,P.lanes|=L,Cn|=L;y=y.next}while(y!==null&&y!==t);if(d===null?r=i:d.next=s,!bt(i,e.memoizedState)&&(Qe=!0,w&&(n=Sa,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=d,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function vr(e){var t=je(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var r=l=l.next;do i=e(i,r.action),r=r.next;while(r!==l);bt(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function ru(e,t,n){var a=P,l=je(),i=ce;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=t();var r=!bt((ve||l).memoizedState,n);if(r&&(l.memoizedState=n,Qe=!0),l=l.queue,Sr(uu.bind(null,a,l,e),[e]),l.getSnapshot!==t||r||Ie!==null&&Ie.memoizedState.tag&1){if(a.flags|=2048,za(9,{destroy:void 0},cu.bind(null,a,l,n,t),null),Se===null)throw Error(u(349));i||(Wt&127)!==0||su(a,t,n)}return n}function su(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=_i(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cu(e,t,n,a){t.value=n,t.getSnapshot=a,mu(t)&&du(e)}function uu(e,t,n){return n(function(){mu(t)&&du(e)})}function mu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function du(e){var t=Qn(e,2);t!==null&&gt(t,e,2)}function _r(e){var t=lt();if(typeof e=="function"){var n=e;if(e=n(),Wn){un(!0);try{n()}finally{un(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},t}function gu(e,t,n,a){return e.baseState=n,yr(e,ve,typeof a=="function"?a:Zt)}function hh(e,t,n,a,l){if(wi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};T.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,hu(t,i)):(i.next=n.next,t.pending=n.next=i)}}function hu(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=T.T,r={};T.T=r;try{var s=n(l,a),d=T.S;d!==null&&d(r,s),fu(e,t,s)}catch(y){Br(e,t,y)}finally{i!==null&&r.types!==null&&(i.types=r.types),T.T=i}}else try{i=n(l,a),fu(e,t,i)}catch(y){Br(e,t,y)}}function fu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){pu(e,t,a)},function(a){return Br(e,t,a)}):pu(e,t,n)}function pu(e,t,n){t.status="fulfilled",t.value=n,bu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,hu(e,n)))}function Br(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,bu(t),t=t.next;while(t!==a)}e.action=null}function bu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yu(e,t){return t}function vu(e,t){if(ce){var n=Se.formState;if(n!==null){e:{var a=P;if(ce){if(we){t:{for(var l=we,i=Mt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Rt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){we=Rt(l.nextSibling),a=l.data==="F!";break e}}fn(a)}a=!1}a&&(t=n[0])}}return n=lt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yu,lastRenderedState:t},n.queue=a,n=Uu.bind(null,P,a),a.dispatch=n,a=_r(!1),i=Ar.bind(null,P,!1,a.queue),a=lt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=hh.bind(null,P,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function _u(e){var t=je();return Bu(t,ve,e)}function Bu(e,t,n){if(t=yr(e,t,yu)[0],e=Si(Zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=pl(t)}catch(r){throw r===Ta?di:r}else a=t;t=je();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(P.flags|=2048,za(9,{destroy:void 0},fh.bind(null,l,n),null)),[a,i,e]}function fh(e,t){e.action=t}function Su(e){var t=je(),n=ve;if(n!==null)return Bu(t,n,e);je(),t=t.memoizedState,n=je();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function za(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=P.updateQueue,t===null&&(t=_i(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Tu(){return je().memoizedState}function Ti(e,t,n,a){var l=lt();P.flags|=e,l.memoizedState=za(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ci(e,t,n,a){var l=je();a=a===void 0?null:a;var i=l.memoizedState.inst;ve!==null&&a!==null&&dr(a,ve.memoizedState.deps)?l.memoizedState=za(t,i,n,a):(P.flags|=e,l.memoizedState=za(1|t,i,n,a))}function Cu(e,t){Ti(8390656,8,e,t)}function Sr(e,t){Ci(2048,8,e,t)}function ph(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=_i(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function wu(e){var t=je().memoizedState;return ph({ref:t,nextImpl:e}),function(){if((ge&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Eu(e,t){return Ci(4,2,e,t)}function Au(e,t){return Ci(4,4,e,t)}function zu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lu(e,t,n){n=n!=null?n.concat([e]):null,Ci(4,4,zu.bind(null,t,e),n)}function Tr(){}function Mu(e,t){var n=je();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&dr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Du(e,t){var n=je();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&dr(t,a[1]))return a[0];if(a=e(),Wn){un(!0);try{e()}finally{un(!1)}}return n.memoizedState=[a,t],a}function Cr(e,t,n){return n===void 0||(Wt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Rm(),P.lanes|=e,Cn|=e,n)}function Ru(e,t,n,a){return bt(n,t)?n:wa.current!==null?(e=Cr(e,n,a),bt(e,t)||(Qe=!0),e):(Wt&42)===0||(Wt&1073741824)!==0&&(re&261930)===0?(Qe=!0,e.memoizedState=n):(e=Rm(),P.lanes|=e,Cn|=e,t)}function Nu(e,t,n,a,l){var i=C.p;C.p=i!==0&&8>i?i:8;var r=T.T,s={};T.T=s,Ar(e,!1,t,n);try{var d=l(),y=T.S;if(y!==null&&y(s,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var w=mh(d,a);bl(e,t,w,Tt(e))}else bl(e,t,a,Tt(e))}catch(L){bl(e,t,{then:function(){},status:"rejected",reason:L},Tt())}finally{C.p=i,r!==null&&s.types!==null&&(r.types=s.types),T.T=r}}function bh(){}function wr(e,t,n,a){if(e.tag!==5)throw Error(u(476));var l=ku(e).queue;Nu(e,l,t,D,n===null?bh:function(){return Ou(e),n(a)})}function ku(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:D},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ou(e){var t=ku(e);t.next===null&&(t=e.alternate.memoizedState),bl(e,t.next.queue,{},Tt())}function Er(){return $e(kl)}function ju(){return je().memoizedState}function xu(){return je().memoizedState}function yh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Tt();e=yn(n);var a=vn(t,e,n);a!==null&&(gt(a,t,n),dl(a,t,n)),t={cache:tr()},e.payload=t;return}t=t.return}}function vh(e,t,n){var a=Tt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wi(e)?Gu(t,n):(n=Fo(e,t,n,a),n!==null&&(gt(n,e,a),Iu(n,t,a)))}function Uu(e,t,n){var a=Tt();bl(e,t,n,a)}function bl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wi(e))Gu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,s=i(r,n);if(l.hasEagerState=!0,l.eagerState=s,bt(s,r))return ii(e,t,l,0),Se===null&&li(),!1}catch{}if(n=Fo(e,t,l,a),n!==null)return gt(n,e,a),Iu(n,t,a),!0}return!1}function Ar(e,t,n,a){if(a={lane:2,revertLane:is(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wi(e)){if(t)throw Error(u(479))}else t=Fo(e,n,a,2),t!==null&&gt(t,e,2)}function wi(e){var t=e.alternate;return e===P||t!==null&&t===P}function Gu(e,t){Ea=yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Iu(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vs(e,n)}}var yl={readContext:$e,use:Bi,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};yl.useEffectEvent=Re;var Qu={readContext:$e,use:Bi,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Cu,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ti(4194308,4,zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){Ti(4,2,e,t)},useMemo:function(e,t){var n=lt();t=t===void 0?null:t;var a=e();if(Wn){un(!0);try{e()}finally{un(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=lt();if(n!==void 0){var l=n(t);if(Wn){un(!0);try{n(t)}finally{un(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=vh.bind(null,P,e),[a.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=_r(e);var t=e.queue,n=Uu.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Tr,useDeferredValue:function(e,t){var n=lt();return Cr(n,e,t)},useTransition:function(){var e=_r(!1);return e=Nu.bind(null,P,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=P,l=lt();if(ce){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Se===null)throw Error(u(349));(re&127)!==0||su(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Cu(uu.bind(null,a,i,e),[e]),a.flags|=2048,za(9,{destroy:void 0},cu.bind(null,a,i,n,t),null),n},useId:function(){var e=lt(),t=Se.identifierPrefix;if(ce){var n=It,a=Gt;n=(a&~(1<<32-pt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=dh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Er,useFormState:vu,useActionState:vu,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ar.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:br,useCacheRefresh:function(){return lt().memoizedState=yh.bind(null,P)},useEffectEvent:function(e){var t=lt(),n={impl:e};return t.memoizedState=n,function(){if((ge&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},zr={readContext:$e,use:Bi,useCallback:Mu,useContext:$e,useEffect:Sr,useImperativeHandle:Lu,useInsertionEffect:Eu,useLayoutEffect:Au,useMemo:Du,useReducer:Si,useRef:Tu,useState:function(){return Si(Zt)},useDebugValue:Tr,useDeferredValue:function(e,t){var n=je();return Ru(n,ve.memoizedState,e,t)},useTransition:function(){var e=Si(Zt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:pl(e),t]},useSyncExternalStore:ru,useId:ju,useHostTransitionStatus:Er,useFormState:_u,useActionState:_u,useOptimistic:function(e,t){var n=je();return gu(n,ve,e,t)},useMemoCache:br,useCacheRefresh:xu};zr.useEffectEvent=wu;var Ku={readContext:$e,use:Bi,useCallback:Mu,useContext:$e,useEffect:Sr,useImperativeHandle:Lu,useInsertionEffect:Eu,useLayoutEffect:Au,useMemo:Du,useReducer:vr,useRef:Tu,useState:function(){return vr(Zt)},useDebugValue:Tr,useDeferredValue:function(e,t){var n=je();return ve===null?Cr(n,e,t):Ru(n,ve.memoizedState,e,t)},useTransition:function(){var e=vr(Zt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:pl(e),t]},useSyncExternalStore:ru,useId:ju,useHostTransitionStatus:Er,useFormState:Su,useActionState:Su,useOptimistic:function(e,t){var n=je();return ve!==null?gu(n,ve,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:br,useCacheRefresh:xu};Ku.useEffectEvent=wu;function Lr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mr={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Tt(),l=yn(a);l.payload=t,n!=null&&(l.callback=n),t=vn(e,l,a),t!==null&&(gt(t,e,a),dl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Tt(),l=yn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=vn(e,l,a),t!==null&&(gt(t,e,a),dl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tt(),a=yn(n);a.tag=2,t!=null&&(a.callback=t),t=vn(e,a,n),t!==null&&(gt(t,e,n),dl(t,e,n))}};function Hu(e,t,n,a,l,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!ll(n,a)||!ll(l,i):!0}function Fu(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Mr.enqueueReplaceState(t,t.state,null)}function Zn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=K({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Vu(e){ai(e)}function Xu(e){console.error(e)}function Yu(e){ai(e)}function Ei(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function qu(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Dr(e,t,n){return n=yn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ei(e,t)},n}function Ju(e){return e=yn(e),e.tag=3,e}function Wu(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){qu(t,n,a)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){qu(t,n,a),typeof l!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function _h(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&_a(t,n,l,!0),n=vt.current,n!==null){switch(n.tag){case 31:case 13:return Dt===null?Ui():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===gi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ns(e,a,l)),!1;case 22:return n.flags|=65536,a===gi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ns(e,a,l)),!1}throw Error(u(435,n.tag))}return ns(e,a,l),Ui(),!1}if(ce)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Wo&&(e=Error(u(422),{cause:a}),rl(At(e,n)))):(a!==Wo&&(t=Error(u(423),{cause:a}),rl(At(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=At(a,n),l=Dr(e.stateNode,a,l),rr(e,l),Ne!==4&&(Ne=2)),!1;var i=Error(u(520),{cause:a});if(i=At(i,n),El===null?El=[i]:El.push(i),Ne!==4&&(Ne=2),t===null)return!0;a=At(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Dr(n.stateNode,a,e),rr(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(wn===null||!wn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Ju(l),Wu(l,e,n,a),rr(n,l),!1}n=n.return}while(n!==null);return!1}var Rr=Error(u(461)),Qe=!1;function et(e,t,n,a){t.child=e===null?eu(t,null,n,a):Jn(t,e.child,n,a)}function Zu(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var r={};for(var s in a)s!=="ref"&&(r[s]=a[s])}else r=a;return Vn(t),a=gr(e,t,n,r,i,l),s=hr(),e!==null&&!Qe?(fr(e,t,l),Pt(e,t,l)):(ce&&s&&qo(t),t.flags|=1,et(e,t,a,l),t.child)}function Pu(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Vo(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,$u(e,t,i,a,l)):(e=ri(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ir(e,l)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:ll,n(r,a)&&e.ref===t.ref)return Pt(e,t,l)}return t.flags|=1,e=Xt(i,a),e.ref=t.ref,e.return=t,t.child=e}function $u(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(ll(i,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=i,Ir(e,l))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Pt(e,t,l)}return Nr(e,t,n,a,l)}function em(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return tm(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&mi(t,i!==null?i.cachePool:null),i!==null?au(t,i):cr(),lu(t);else return a=t.lanes=536870912,tm(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(mi(t,i.cachePool),au(t,i),Bn(),t.memoizedState=null):(e!==null&&mi(t,null),cr(),Bn());return et(e,t,l,n),t.child}function vl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function tm(e,t,n,a,l){var i=ar();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&mi(t,null),cr(),lu(t),e!==null&&_a(e,t,a,!0),t.childLanes=l,null}function Ai(e,t){return t=Li({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function nm(e,t,n){return Jn(t,e.child,null,n),e=Ai(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function Bh(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(a.mode==="hidden")return e=Ai(t,a),t.lanes=536870912,vl(null,e);if(mr(t),(e=we)?(e=hd(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:gn!==null?{id:Gt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},n=Gc(e),n.return=t,t.child=n,Pe=t,we=null)):e=null,e===null)throw fn(t);return t.lanes=536870912,null}return Ai(t,a)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(mr(t),l)if(t.flags&256)t.flags&=-257,t=nm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Qe||_a(e,t,n,!1),l=(n&e.childLanes)!==0,Qe||l){if(a=Se,a!==null&&(r=Xs(a,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,Qn(e,r),gt(a,e,r),Rr;Ui(),t=nm(e,t,n)}else e=i.treeContext,we=Rt(r.nextSibling),Pe=t,ce=!0,hn=null,Mt=!1,e!==null&&Kc(t,e),t=Ai(t,a),t.flags|=4096;return t}return e=Xt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Nr(e,t,n,a,l){return Vn(t),n=gr(e,t,n,a,void 0,l),a=hr(),e!==null&&!Qe?(fr(e,t,l),Pt(e,t,l)):(ce&&a&&qo(t),t.flags|=1,et(e,t,n,l),t.child)}function am(e,t,n,a,l,i){return Vn(t),t.updateQueue=null,n=ou(t,a,n,l),iu(e),a=hr(),e!==null&&!Qe?(fr(e,t,i),Pt(e,t,i)):(ce&&a&&qo(t),t.flags|=1,et(e,t,n,i),t.child)}function lm(e,t,n,a,l){if(Vn(t),t.stateNode===null){var i=pa,r=n.contextType;typeof r=="object"&&r!==null&&(i=$e(r)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Mr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},ir(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?$e(r):pa,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Lr(t,n,r,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Mr.enqueueReplaceState(i,i.state,null),hl(t,a,i,l),gl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,d=Zn(n,s);i.props=d;var y=i.context,w=n.contextType;r=pa,typeof w=="object"&&w!==null&&(r=$e(w));var L=n.getDerivedStateFromProps;w=typeof L=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,w||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||y!==r)&&Fu(t,i,a,r),bn=!1;var v=t.memoizedState;i.state=v,hl(t,a,i,l),gl(),y=t.memoizedState,s||v!==y||bn?(typeof L=="function"&&(Lr(t,n,L,a),y=t.memoizedState),(d=bn||Hu(t,n,d,a,v,y,r))?(w||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=r,a=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,or(e,t),r=t.memoizedProps,w=Zn(n,r),i.props=w,L=t.pendingProps,v=i.context,y=n.contextType,d=pa,typeof y=="object"&&y!==null&&(d=$e(y)),s=n.getDerivedStateFromProps,(y=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==L||v!==d)&&Fu(t,i,a,d),bn=!1,v=t.memoizedState,i.state=v,hl(t,a,i,l),gl();var B=t.memoizedState;r!==L||v!==B||bn||e!==null&&e.dependencies!==null&&ci(e.dependencies)?(typeof s=="function"&&(Lr(t,n,s,a),B=t.memoizedState),(w=bn||Hu(t,n,w,a,v,B,d)||e!==null&&e.dependencies!==null&&ci(e.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,B,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,B,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=B),i.props=a,i.state=B,i.context=d,a=w):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,zi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Jn(t,e.child,null,l),t.child=Jn(t,null,n,l)):et(e,t,n,l),t.memoizedState=i.state,e=t.child):e=Pt(e,t,l),e}function im(e,t,n,a){return Hn(),t.flags|=256,et(e,t,n,a),t.child}var kr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Or(e){return{baseLanes:e,cachePool:qc()}}function jr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=St),e}function om(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(l?_n(t):Bn(),(e=we)?(e=hd(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:gn!==null?{id:Gt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},n=Gc(e),n.return=t,t.child=n,Pe=t,we=null)):e=null,e===null)throw fn(t);return ys(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,l?(Bn(),l=t.mode,s=Li({mode:"hidden",children:s},l),a=Kn(a,l,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=Or(n),a.childLanes=jr(e,r,n),t.memoizedState=kr,vl(null,a)):(_n(t),xr(t,s))}var d=e.memoizedState;if(d!==null&&(s=d.dehydrated,s!==null)){if(i)t.flags&256?(_n(t),t.flags&=-257,t=Ur(e,t,n)):t.memoizedState!==null?(Bn(),t.child=e.child,t.flags|=128,t=null):(Bn(),s=a.fallback,l=t.mode,a=Li({mode:"visible",children:a.children},l),s=Kn(s,l,n,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,Jn(t,e.child,null,n),a=t.child,a.memoizedState=Or(n),a.childLanes=jr(e,r,n),t.memoizedState=kr,t=vl(null,a));else if(_n(t),ys(s)){if(r=s.nextSibling&&s.nextSibling.dataset,r)var y=r.dgst;r=y,a=Error(u(419)),a.stack="",a.digest=r,rl({value:a,source:null,stack:null}),t=Ur(e,t,n)}else if(Qe||_a(e,t,n,!1),r=(n&e.childLanes)!==0,Qe||r){if(r=Se,r!==null&&(a=Xs(r,n),a!==0&&a!==d.retryLane))throw d.retryLane=a,Qn(e,a),gt(r,e,a),Rr;bs(s)||Ui(),t=Ur(e,t,n)}else bs(s)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,we=Rt(s.nextSibling),Pe=t,ce=!0,hn=null,Mt=!1,e!==null&&Kc(t,e),t=xr(t,a.children),t.flags|=4096);return t}return l?(Bn(),s=a.fallback,l=t.mode,d=e.child,y=d.sibling,a=Xt(d,{mode:"hidden",children:a.children}),a.subtreeFlags=d.subtreeFlags&65011712,y!==null?s=Xt(y,s):(s=Kn(s,l,n,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,vl(null,a),a=t.child,s=e.child.memoizedState,s===null?s=Or(n):(l=s.cachePool,l!==null?(d=Ge._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=qc(),s={baseLanes:s.baseLanes|n,cachePool:l}),a.memoizedState=s,a.childLanes=jr(e,r,n),t.memoizedState=kr,vl(e.child,a)):(_n(t),n=e.child,e=n.sibling,n=Xt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function xr(e,t){return t=Li({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Li(e,t){return e=yt(22,e,null,t),e.lanes=0,e}function Ur(e,t,n){return Jn(t,e.child,null,n),e=xr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rm(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),$o(e.return,t,n)}function Gr(e,t,n,a,l,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l,r.treeForkCount=i)}function sm(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var r=Oe.current,s=(r&2)!==0;if(s?(r=r&1|2,t.flags|=128):r&=1,k(Oe,r),et(e,t,a,n),a=ce?ol:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rm(e,n,t);else if(e.tag===19)rm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&bi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Gr(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&bi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Gr(t,!0,n,null,i,a);break;case"together":Gr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(_a(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ir(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ci(e)))}function Sh(e,t,n){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),pn(t,Ge,e.memoizedState.cache),Hn();break;case 27:case 5:sn(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:pn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(_n(t),t.flags|=128,null):(n&t.child.childLanes)!==0?om(e,t,n):(_n(t),e=Pt(e,t,n),e!==null?e.sibling:null);_n(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(_a(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return sm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),k(Oe,Oe.current),a)break;return null;case 22:return t.lanes=0,em(e,t,n,t.pendingProps);case 24:pn(t,Ge,e.memoizedState.cache)}return Pt(e,t,n)}function cm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Ir(e,n)&&(t.flags&128)===0)return Qe=!1,Sh(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,ce&&(t.flags&1048576)!==0&&Qc(t,ol,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Yn(t.elementType),t.type=e,typeof e=="function")Vo(e)?(a=Zn(e,a),t.tag=1,t=lm(null,t,e,a,n)):(t.tag=0,t=Nr(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===I){t.tag=11,t=Zu(null,t,e,a,n);break e}else if(l===ee){t.tag=14,t=Pu(null,t,e,a,n);break e}}throw t=Ue(e)||e,Error(u(306,t,""))}}return t;case 0:return Nr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Zn(a,t.pendingProps),lm(e,t,a,l,n);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,or(e,t),hl(t,a,null,n);var r=t.memoizedState;if(a=r.cache,pn(t,Ge,a),a!==i.cache&&er(t,[Ge],n,!0),gl(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=im(e,t,a,n);break e}else if(a!==l){l=At(Error(u(424)),t),rl(l),t=im(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=Rt(e.firstChild),Pe=t,ce=!0,hn=null,Mt=!0,n=eu(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),a===l){t=Pt(e,t,n);break e}et(e,t,a,n)}t=t.child}return t;case 26:return zi(e,t),e===null?(n=_d(t.type,null,t.pendingProps,null))?t.memoizedState=n:ce||(n=t.type,e=t.pendingProps,a=Vi(ae.current).createElement(n),a[Ze]=t,a[rt]=e,tt(a,n,e),qe(a),t.stateNode=a):t.memoizedState=_d(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return sn(t),e===null&&ce&&(a=t.stateNode=bd(t.type,t.pendingProps,ae.current),Pe=t,Mt=!0,l=we,Ln(t.type)?(vs=l,we=Rt(a.firstChild)):we=l),et(e,t,t.pendingProps.children,n),zi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((l=a=we)&&(a=Ph(a,t.type,t.pendingProps,Mt),a!==null?(t.stateNode=a,Pe=t,we=Rt(a.firstChild),Mt=!1,l=!0):l=!1),l||fn(t)),sn(t),l=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,hs(l,i)?a=null:r!==null&&hs(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=gr(e,t,gh,null,null,n),kl._currentValue=l),zi(e,t),et(e,t,a,n),t.child;case 6:return e===null&&ce&&((e=n=we)&&(n=$h(n,t.pendingProps,Mt),n!==null?(t.stateNode=n,Pe=t,we=null,e=!0):e=!1),e||fn(t)),null;case 13:return om(e,t,n);case 4:return Ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Jn(t,null,a,n):et(e,t,a,n),t.child;case 11:return Zu(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,pn(t,t.type,a.value),et(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Vn(t),l=$e(l),a=a(l),t.flags|=1,et(e,t,a,n),t.child;case 14:return Pu(e,t,t.type,t.pendingProps,n);case 15:return $u(e,t,t.type,t.pendingProps,n);case 19:return sm(e,t,n);case 31:return Bh(e,t,n);case 22:return em(e,t,n,t.pendingProps);case 24:return Vn(t),a=$e(Ge),e===null?(l=ar(),l===null&&(l=Se,i=tr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},ir(t),pn(t,Ge,l)):((e.lanes&n)!==0&&(or(e,t),hl(t,null,null,n),gl()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),pn(t,Ge,a)):(a=i.cache,pn(t,Ge,a),a!==l.cache&&er(t,[Ge],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function $t(e){e.flags|=4}function Qr(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(jm())e.flags|=8192;else throw qn=gi,lr}else e.flags&=-16777217}function um(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wd(t))if(jm())e.flags|=8192;else throw qn=gi,lr}function Mi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hs():536870912,e.lanes|=t,Ra|=t)}function _l(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Th(e,t,n){var a=t.pendingProps;switch(Jo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Jt(Ge),Te(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(va(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zo())),Ee(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?($t(t),i!==null?(Ee(t),um(t,i)):(Ee(t),Qr(t,l,null,a,n))):i?i!==e.memoizedState?($t(t),Ee(t),um(t,i)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&$t(t),Ee(t),Qr(t,l,e,a,n)),null;case 27:if(ea(t),n=ae.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&$t(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ee(t),null}e=j.current,va(t)?Hc(t):(e=bd(l,a,n),t.stateNode=e,$t(t))}return Ee(t),null;case 5:if(ea(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&$t(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ee(t),null}if(i=j.current,va(t))Hc(t);else{var r=Vi(ae.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?r.createElement(l,{is:a.is}):r.createElement(l)}}i[Ze]=t,i[rt]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(tt(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&$t(t)}}return Ee(t),Qr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&$t(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,va(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Pe,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||od(e.nodeValue,n)),e||fn(t,!0)}else e=Vi(e).createTextNode(a),e[Ze]=t,t.stateNode=e}return Ee(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=va(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ze]=t}else Hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else n=Zo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ee(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=va(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Ze]=t}else Hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),l=!1}else l=Zo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Mi(t,t.updateQueue),Ee(t),null);case 4:return Te(),e===null&&cs(t.stateNode.containerInfo),Ee(t),null;case 10:return Jt(t.type),Ee(t),null;case 19:if(z(Oe),a=t.memoizedState,a===null)return Ee(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)_l(a,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=bi(e),i!==null){for(t.flags|=128,_l(a,!1),e=i.updateQueue,t.updateQueue=e,Mi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Uc(n,e),n=n.sibling;return k(Oe,Oe.current&1|2),ce&&Yt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&S()>Oi&&(t.flags|=128,l=!0,_l(a,!1),t.lanes=4194304)}else{if(!l)if(e=bi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Mi(t,e),_l(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ce)return Ee(t),null}else 2*S()-a.renderingStartTime>Oi&&n!==536870912&&(t.flags|=128,l=!0,_l(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=S(),e.sibling=null,n=Oe.current,k(Oe,l?n&1|2:n&1),ce&&Yt(t,a.treeForkCount),e):(Ee(t),null);case 22:case 23:return _t(t),ur(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),n=t.updateQueue,n!==null&&Mi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&z(Xn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Jt(Ge),Ee(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Ch(e,t){switch(Jo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jt(Ge),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ea(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(u(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(Oe),null;case 4:return Te(),null;case 10:return Jt(t.type),null;case 22:case 23:return _t(t),ur(),e!==null&&z(Xn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jt(Ge),null;case 25:return null;default:return null}}function mm(e,t){switch(Jo(t),t.tag){case 3:Jt(Ge),Te();break;case 26:case 27:case 5:ea(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:z(Oe);break;case 10:Jt(t.type);break;case 22:case 23:_t(t),ur(),e!==null&&z(Xn);break;case 24:Jt(Ge)}}function Bl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,r=n.inst;a=i(),r.destroy=a}n=n.next}while(n!==l)}}catch(s){be(t,t.return,s)}}function Sn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var r=a.inst,s=r.destroy;if(s!==void 0){r.destroy=void 0,l=t;var d=n,y=s;try{y()}catch(w){be(l,d,w)}}}a=a.next}while(a!==i)}}catch(w){be(t,t.return,w)}}function dm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{nu(t,n)}catch(a){be(e,e.return,a)}}}function gm(e,t,n){n.props=Zn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){be(e,t,a)}}function Sl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){be(e,t,l)}}function Qt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){be(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){be(e,t,l)}else n.current=null}function hm(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){be(e,e.return,l)}}function Kr(e,t,n){try{var a=e.stateNode;Xh(a,e.type,n,t),a[rt]=t}catch(l){be(e,e.return,l)}}function fm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ln(e.type)||e.tag===4}function Hr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ln(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ft));else if(a!==4&&(a===27&&Ln(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Fr(e,t,n),e=e.sibling;e!==null;)Fr(e,t,n),e=e.sibling}function Di(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Ln(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}function pm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);tt(t,a,n),t[Ze]=e,t[rt]=n}catch(i){be(e,e.return,i)}}var en=!1,Ke=!1,Vr=!1,bm=typeof WeakSet=="function"?WeakSet:Set,Je=null;function wh(e,t){if(e=e.containerInfo,ds=Pi,e=Lc(e),Uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,s=-1,d=-1,y=0,w=0,L=e,v=null;t:for(;;){for(var B;L!==n||l!==0&&L.nodeType!==3||(s=r+l),L!==i||a!==0&&L.nodeType!==3||(d=r+a),L.nodeType===3&&(r+=L.nodeValue.length),(B=L.firstChild)!==null;)v=L,L=B;for(;;){if(L===e)break t;if(v===n&&++y===l&&(s=r),v===i&&++w===a&&(d=r),(B=L.nextSibling)!==null)break;L=v,v=L.parentNode}L=B}n=s===-1||d===-1?null:{start:s,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(gs={focusedElem:e,selectionRange:n},Pi=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var U=Zn(n.type,l);e=a.getSnapshotBeforeUpdate(U,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(X){be(n,n.return,X)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ps(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ps(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function ym(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:nn(e,n),a&4&&Bl(5,n);break;case 1:if(nn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){be(n,n.return,r)}else{var l=Zn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){be(n,n.return,r)}}a&64&&dm(n),a&512&&Sl(n,n.return);break;case 3:if(nn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{nu(e,t)}catch(r){be(n,n.return,r)}}break;case 27:t===null&&a&4&&pm(n);case 26:case 5:nn(e,n),t===null&&a&4&&hm(n),a&512&&Sl(n,n.return);break;case 12:nn(e,n);break;case 31:nn(e,n),a&4&&Bm(e,n);break;case 13:nn(e,n),a&4&&Sm(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=kh.bind(null,n),ef(e,n))));break;case 22:if(a=n.memoizedState!==null||en,!a){t=t!==null&&t.memoizedState!==null||Ke,l=en;var i=Ke;en=a,(Ke=t)&&!i?an(e,n,(n.subtreeFlags&8772)!==0):nn(e,n),en=l,Ke=i}break;case 30:break;default:nn(e,n)}}function vm(e){var t=e.alternate;t!==null&&(e.alternate=null,vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,ct=!1;function tn(e,t,n){for(n=n.child;n!==null;)_m(e,t,n),n=n.sibling}function _m(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Xa,n)}catch{}switch(n.tag){case 26:Ke||Qt(n,t),tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||Qt(n,t);var a=Le,l=ct;Ln(n.type)&&(Le=n.stateNode,ct=!1),tn(e,t,n),Dl(n.stateNode),Le=a,ct=l;break;case 5:Ke||Qt(n,t);case 6:if(a=Le,l=ct,Le=null,tn(e,t,n),Le=a,ct=l,Le!==null)if(ct)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(n.stateNode)}catch(i){be(n,t,i)}else try{Le.removeChild(n.stateNode)}catch(i){be(n,t,i)}break;case 18:Le!==null&&(ct?(e=Le,dd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ia(e)):dd(Le,n.stateNode));break;case 4:a=Le,l=ct,Le=n.stateNode.containerInfo,ct=!0,tn(e,t,n),Le=a,ct=l;break;case 0:case 11:case 14:case 15:Sn(2,n,t),Ke||Sn(4,n,t),tn(e,t,n);break;case 1:Ke||(Qt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&gm(n,t,a)),tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:Ke=(a=Ke)||n.memoizedState!==null,tn(e,t,n),Ke=a;break;default:tn(e,t,n)}}function Bm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ia(e)}catch(n){be(t,t.return,n)}}}function Sm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ia(e)}catch(n){be(t,t.return,n)}}function Eh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bm),t;default:throw Error(u(435,e.tag))}}function Ri(e,t){var n=Eh(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=Oh.bind(null,e,a);a.then(l,l)}})}function ut(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 27:if(Ln(s.type)){Le=s.stateNode,ct=!1;break e}break;case 5:Le=s.stateNode,ct=!1;break e;case 3:case 4:Le=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(Le===null)throw Error(u(160));_m(i,r,l),Le=null,ct=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tm(t,e),t=t.sibling}var jt=null;function Tm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),mt(e),a&4&&(Sn(3,e,e.return),Bl(3,e),Sn(5,e,e.return));break;case 1:ut(t,e),mt(e),a&512&&(Ke||n===null||Qt(n,n.return)),a&64&&en&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=jt;if(ut(t,e),mt(e),a&512&&(Ke||n===null||Qt(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ja]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),tt(i,a,n),i[Ze]=e,qe(i),a=i;break e;case"link":var r=Td("link","href",l).get(a+(n.href||""));if(r){for(var s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(s,1);break t}}i=l.createElement(a),tt(i,a,n),l.head.appendChild(i);break;case"meta":if(r=Td("meta","content",l).get(a+(n.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(s,1);break t}}i=l.createElement(a),tt(i,a,n),l.head.appendChild(i);break;default:throw Error(u(468,a))}i[Ze]=e,qe(i),a=i}e.stateNode=a}else Cd(l,e.type,e.stateNode);else e.stateNode=Sd(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Cd(l,e.type,e.stateNode):Sd(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Kr(e,e.memoizedProps,n.memoizedProps)}break;case 27:ut(t,e),mt(e),a&512&&(Ke||n===null||Qt(n,n.return)),n!==null&&a&4&&Kr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ut(t,e),mt(e),a&512&&(Ke||n===null||Qt(n,n.return)),e.flags&32){l=e.stateNode;try{ca(l,"")}catch(U){be(e,e.return,U)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Kr(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Vr=!0);break;case 6:if(ut(t,e),mt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(U){be(e,e.return,U)}}break;case 3:if(qi=null,l=jt,jt=Xi(t.containerInfo),ut(t,e),jt=l,mt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ia(t.containerInfo)}catch(U){be(e,e.return,U)}Vr&&(Vr=!1,Cm(e));break;case 4:a=jt,jt=Xi(e.stateNode.containerInfo),ut(t,e),mt(e),jt=a;break;case 12:ut(t,e),mt(e);break;case 31:ut(t,e),mt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ri(e,a)));break;case 13:ut(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ki=S()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ri(e,a)));break;case 22:l=e.memoizedState!==null;var d=n!==null&&n.memoizedState!==null,y=en,w=Ke;if(en=y||l,Ke=w||d,ut(t,e),Ke=w,en=y,mt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||d||en||Ke||Pn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){d=n=t;try{if(i=d.stateNode,l)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=d.stateNode;var L=d.memoizedProps.style,v=L!=null&&L.hasOwnProperty("display")?L.display:null;s.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(U){be(d,d.return,U)}}}else if(t.tag===6){if(n===null){d=t;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(U){be(d,d.return,U)}}}else if(t.tag===18){if(n===null){d=t;try{var B=d.stateNode;l?gd(B,!0):gd(d.stateNode,!1)}catch(U){be(d,d.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ri(e,n))));break;case 19:ut(t,e),mt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ri(e,a)));break;case 30:break;case 21:break;default:ut(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(fm(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,i=Hr(e);Di(e,i,l);break;case 5:var r=n.stateNode;n.flags&32&&(ca(r,""),n.flags&=-33);var s=Hr(e);Di(e,s,r);break;case 3:case 4:var d=n.stateNode.containerInfo,y=Hr(e);Fr(e,y,d);break;default:throw Error(u(161))}}catch(w){be(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ym(e,t.alternate,t),t=t.sibling}function Pn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Sn(4,t,t.return),Pn(t);break;case 1:Qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&gm(t,t.return,n),Pn(t);break;case 27:Dl(t.stateNode);case 26:case 5:Qt(t,t.return),Pn(t);break;case 22:t.memoizedState===null&&Pn(t);break;case 30:Pn(t);break;default:Pn(t)}e=e.sibling}}function an(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:an(l,i,n),Bl(4,i);break;case 1:if(an(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(y){be(a,a.return,y)}if(a=i,l=a.updateQueue,l!==null){var s=a.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)tu(d[l],s)}catch(y){be(a,a.return,y)}}n&&r&64&&dm(i),Sl(i,i.return);break;case 27:pm(i);case 26:case 5:an(l,i,n),n&&a===null&&r&4&&hm(i),Sl(i,i.return);break;case 12:an(l,i,n);break;case 31:an(l,i,n),n&&r&4&&Bm(l,i);break;case 13:an(l,i,n),n&&r&4&&Sm(l,i);break;case 22:i.memoizedState===null&&an(l,i,n),Sl(i,i.return);break;case 30:break;default:an(l,i,n)}t=t.sibling}}function Xr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sl(n))}function Yr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sl(e))}function xt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wm(e,t,n,a),t=t.sibling}function wm(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:xt(e,t,n,a),l&2048&&Bl(9,t);break;case 1:xt(e,t,n,a);break;case 3:xt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sl(e)));break;case 12:if(l&2048){xt(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,s=i.onPostCommit;typeof s=="function"&&s(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){be(t,t.return,d)}}else xt(e,t,n,a);break;case 31:xt(e,t,n,a);break;case 13:xt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?xt(e,t,n,a):Tl(e,t):i._visibility&2?xt(e,t,n,a):(i._visibility|=2,La(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Xr(r,t);break;case 24:xt(e,t,n,a),l&2048&&Yr(t.alternate,t);break;default:xt(e,t,n,a)}}function La(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,s=n,d=a,y=r.flags;switch(r.tag){case 0:case 11:case 15:La(i,r,s,d,l),Bl(8,r);break;case 23:break;case 22:var w=r.stateNode;r.memoizedState!==null?w._visibility&2?La(i,r,s,d,l):Tl(i,r):(w._visibility|=2,La(i,r,s,d,l)),l&&y&2048&&Xr(r.alternate,r);break;case 24:La(i,r,s,d,l),l&&y&2048&&Yr(r.alternate,r);break;default:La(i,r,s,d,l)}t=t.sibling}}function Tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Tl(n,a),l&2048&&Xr(a.alternate,a);break;case 24:Tl(n,a),l&2048&&Yr(a.alternate,a);break;default:Tl(n,a)}t=t.sibling}}var Cl=8192;function Ma(e,t,n){if(e.subtreeFlags&Cl)for(e=e.child;e!==null;)Em(e,t,n),e=e.sibling}function Em(e,t,n){switch(e.tag){case 26:Ma(e,t,n),e.flags&Cl&&e.memoizedState!==null&&gf(n,jt,e.memoizedState,e.memoizedProps);break;case 5:Ma(e,t,n);break;case 3:case 4:var a=jt;jt=Xi(e.stateNode.containerInfo),Ma(e,t,n),jt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Cl,Cl=16777216,Ma(e,t,n),Cl=a):Ma(e,t,n));break;default:Ma(e,t,n)}}function Am(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Je=a,Lm(a,e)}Am(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 0:case 11:case 15:wl(e),e.flags&2048&&Sn(9,e,e.return);break;case 3:wl(e);break;case 12:wl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ni(e)):wl(e);break;default:wl(e)}}function Ni(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Je=a,Lm(a,e)}Am(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sn(8,t,t.return),Ni(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ni(t));break;default:Ni(t)}e=e.sibling}}function Lm(e,t){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:Sn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:sl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Je=a;else e:for(n=e;Je!==null;){a=Je;var l=a.sibling,i=a.return;if(vm(a),a===n){Je=null;break e}if(l!==null){l.return=i,Je=l;break e}Je=i}}}var Ah={getCacheForType:function(e){var t=$e(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(Ge).controller.signal}},zh=typeof WeakMap=="function"?WeakMap:Map,ge=0,Se=null,ie=null,re=0,pe=0,Bt=null,Tn=!1,Da=!1,qr=!1,ln=0,Ne=0,Cn=0,$n=0,Jr=0,St=0,Ra=0,El=null,dt=null,Wr=!1,ki=0,Mm=0,Oi=1/0,ji=null,wn=null,Xe=0,En=null,Na=null,on=0,Zr=0,Pr=null,Dm=null,Al=0,$r=null;function Tt(){return(ge&2)!==0&&re!==0?re&-re:T.T!==null?is():Ys()}function Rm(){if(St===0)if((re&536870912)===0||ce){var e=Fl;Fl<<=1,(Fl&3932160)===0&&(Fl=262144),St=e}else St=536870912;return e=vt.current,e!==null&&(e.flags|=32),St}function gt(e,t,n){(e===Se&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(ka(e,0),An(e,re,St,!1)),qa(e,n),((ge&2)===0||e!==Se)&&(e===Se&&((ge&2)===0&&($n|=n),Ne===4&&An(e,re,St,!1)),Kt(e))}function Nm(e,t,n){if((ge&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ya(e,t),l=a?Dh(e,t):ts(e,t,!0),i=a;do{if(l===0){Da&&!a&&An(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!Lh(n)){l=ts(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var s=e;l=El;var d=s.current.memoizedState.isDehydrated;if(d&&(ka(s,r).flags|=256),r=ts(s,r,!1),r!==2){if(qr&&!d){s.errorRecoveryDisabledLanes|=i,$n|=i,l=4;break e}i=dt,dt=l,i!==null&&(dt===null?dt=i:dt.push.apply(dt,i))}l=r}if(i=!1,l!==2)continue}}if(l===1){ka(e,0),An(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:An(a,t,St,!Tn);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=ki+300-S(),10<l)){if(An(a,t,St,!Tn),Xl(a,0,!0)!==0)break e;on=t,a.timeoutHandle=ud(km.bind(null,a,n,dt,ji,Wr,t,St,$n,Ra,Tn,i,"Throttled",-0,0),l);break e}km(a,n,dt,ji,Wr,t,St,$n,Ra,Tn,i,null,-0,0)}}break}while(!0);Kt(e)}function km(e,t,n,a,l,i,r,s,d,y,w,L,v,B){if(e.timeoutHandle=-1,L=t.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ft},Em(t,i,L);var U=(i&62914560)===i?ki-S():(i&4194048)===i?Mm-S():0;if(U=hf(L,U),U!==null){on=i,e.cancelPendingCommit=U(Km.bind(null,e,t,i,n,a,l,r,s,d,w,L,null,v,B)),An(e,i,r,!y);return}}Km(e,t,i,n,a,l,r,s,d)}function Lh(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!bt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t,n,a){t&=~Jr,t&=~$n,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-pt(l),r=1<<i;a[i]=-1,l&=~r}n!==0&&Fs(e,n,t)}function xi(){return(ge&6)===0?(zl(0),!1):!0}function es(){if(ie!==null){if(pe===0)var e=ie.return;else e=ie,qt=Fn=null,pr(e),Ca=null,ul=0,e=ie;for(;e!==null;)mm(e.alternate,e),e=e.return;ie=null}}function ka(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jh(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),on=0,es(),Se=e,ie=n=Xt(e.current,null),re=t,pe=0,Bt=null,Tn=!1,Da=Ya(e,t),qr=!1,Ra=St=Jr=$n=Cn=Ne=0,dt=El=null,Wr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-pt(a),i=1<<l;t|=e[l],a&=~i}return ln=t,li(),n}function Om(e,t){P=null,T.H=yl,t===Ta||t===di?(t=Zc(),pe=3):t===lr?(t=Zc(),pe=4):pe=t===Rr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,ie===null&&(Ne=1,Ei(e,At(t,e.current)))}function jm(){var e=vt.current;return e===null?!0:(re&4194048)===re?Dt===null:(re&62914560)===re||(re&536870912)!==0?e===Dt:!1}function xm(){var e=T.H;return T.H=yl,e===null?yl:e}function Um(){var e=T.A;return T.A=Ah,e}function Ui(){Ne=4,Tn||(re&4194048)!==re&&vt.current!==null||(Da=!0),(Cn&134217727)===0&&($n&134217727)===0||Se===null||An(Se,re,St,!1)}function ts(e,t,n){var a=ge;ge|=2;var l=xm(),i=Um();(Se!==e||re!==t)&&(ji=null,ka(e,t)),t=!1;var r=Ne;e:do try{if(pe!==0&&ie!==null){var s=ie,d=Bt;switch(pe){case 8:es(),r=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var y=pe;if(pe=0,Bt=null,Oa(e,s,d,y),n&&Da){r=0;break e}break;default:y=pe,pe=0,Bt=null,Oa(e,s,d,y)}}Mh(),r=Ne;break}catch(w){Om(e,w)}while(!0);return t&&e.shellSuspendCounter++,qt=Fn=null,ge=a,T.H=l,T.A=i,ie===null&&(Se=null,re=0,li()),r}function Mh(){for(;ie!==null;)Gm(ie)}function Dh(e,t){var n=ge;ge|=2;var a=xm(),l=Um();Se!==e||re!==t?(ji=null,Oi=S()+500,ka(e,t)):Da=Ya(e,t);e:do try{if(pe!==0&&ie!==null){t=ie;var i=Bt;t:switch(pe){case 1:pe=0,Bt=null,Oa(e,t,i,1);break;case 2:case 9:if(Jc(i)){pe=0,Bt=null,Im(t);break}t=function(){pe!==2&&pe!==9||Se!==e||(pe=7),Kt(e)},i.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:Jc(i)?(pe=0,Bt=null,Im(t)):(pe=0,Bt=null,Oa(e,t,i,7));break;case 5:var r=null;switch(ie.tag){case 26:r=ie.memoizedState;case 5:case 27:var s=ie;if(r?wd(r):s.stateNode.complete){pe=0,Bt=null;var d=s.sibling;if(d!==null)ie=d;else{var y=s.return;y!==null?(ie=y,Gi(y)):ie=null}break t}}pe=0,Bt=null,Oa(e,t,i,5);break;case 6:pe=0,Bt=null,Oa(e,t,i,6);break;case 8:es(),Ne=6;break e;default:throw Error(u(462))}}Rh();break}catch(w){Om(e,w)}while(!0);return qt=Fn=null,T.H=a,T.A=l,ge=n,ie!==null?0:(Se=null,re=0,li(),Ne)}function Rh(){for(;ie!==null&&!go();)Gm(ie)}function Gm(e){var t=cm(e.alternate,e,ln);e.memoizedProps=e.pendingProps,t===null?Gi(e):ie=t}function Im(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=am(n,t,t.pendingProps,t.type,void 0,re);break;case 11:t=am(n,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:pr(t);default:mm(n,t),t=ie=Uc(t,ln),t=cm(n,t,ln)}e.memoizedProps=e.pendingProps,t===null?Gi(e):ie=t}function Oa(e,t,n,a){qt=Fn=null,pr(t),Ca=null,ul=0;var l=t.return;try{if(_h(e,l,t,n,re)){Ne=1,Ei(e,At(n,e.current)),ie=null;return}}catch(i){if(l!==null)throw ie=l,i;Ne=1,Ei(e,At(n,e.current)),ie=null;return}t.flags&32768?(ce||a===1?e=!0:Da||(re&536870912)!==0?e=!1:(Tn=e=!0,(a===2||a===9||a===3||a===6)&&(a=vt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Qm(t,e)):Gi(t)}function Gi(e){var t=e;do{if((t.flags&32768)!==0){Qm(t,Tn);return}e=t.return;var n=Th(t.alternate,t,ln);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ne===0&&(Ne=5)}function Qm(e,t){do{var n=Ch(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);Ne=6,ie=null}function Km(e,t,n,a,l,i,r,s,d){e.cancelPendingCommit=null;do Ii();while(Xe!==0);if((ge&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Ho,mg(e,n,i,r,s,d),e===Se&&(ie=Se=null,re=0),Na=t,En=e,on=n,Zr=i,Pr=l,Dm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jh(Ce,function(){return Ym(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,l=C.p,C.p=2,r=ge,ge|=4;try{wh(e,t,n)}finally{ge=r,C.p=l,T.T=a}}Xe=1,Hm(),Fm(),Vm()}}function Hm(){if(Xe===1){Xe=0;var e=En,t=Na,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null;var a=C.p;C.p=2;var l=ge;ge|=4;try{Tm(t,e);var i=gs,r=Lc(e.containerInfo),s=i.focusedElem,d=i.selectionRange;if(r!==s&&s&&s.ownerDocument&&zc(s.ownerDocument.documentElement,s)){if(d!==null&&Uo(s)){var y=d.start,w=d.end;if(w===void 0&&(w=y),"selectionStart"in s)s.selectionStart=y,s.selectionEnd=Math.min(w,s.value.length);else{var L=s.ownerDocument||document,v=L&&L.defaultView||window;if(v.getSelection){var B=v.getSelection(),U=s.textContent.length,X=Math.min(d.start,U),Be=d.end===void 0?X:Math.min(d.end,U);!B.extend&&X>Be&&(r=Be,Be=X,X=r);var p=Ac(s,X),h=Ac(s,Be);if(p&&h&&(B.rangeCount!==1||B.anchorNode!==p.node||B.anchorOffset!==p.offset||B.focusNode!==h.node||B.focusOffset!==h.offset)){var b=L.createRange();b.setStart(p.node,p.offset),B.removeAllRanges(),X>Be?(B.addRange(b),B.extend(h.node,h.offset)):(b.setEnd(h.node,h.offset),B.addRange(b))}}}}for(L=[],B=s;B=B.parentNode;)B.nodeType===1&&L.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<L.length;s++){var A=L[s];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Pi=!!ds,gs=ds=null}finally{ge=l,C.p=a,T.T=n}}e.current=t,Xe=2}}function Fm(){if(Xe===2){Xe=0;var e=En,t=Na,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=T.T,T.T=null;var a=C.p;C.p=2;var l=ge;ge|=4;try{ym(e,t.alternate,t)}finally{ge=l,C.p=a,T.T=n}}Xe=3}}function Vm(){if(Xe===4||Xe===3){Xe=0,ho();var e=En,t=Na,n=on,a=Dm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Na=En=null,Xm(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(wn=null),vo(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Xa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=T.T,l=C.p,C.p=2,T.T=null;try{for(var i=e.onRecoverableError,r=0;r<a.length;r++){var s=a[r];i(s.value,{componentStack:s.stack})}}finally{T.T=t,C.p=l}}(on&3)!==0&&Ii(),Kt(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===$r?Al++:(Al=0,$r=e):Al=0,zl(0)}}function Xm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sl(t)))}function Ii(){return Hm(),Fm(),Vm(),Ym()}function Ym(){if(Xe!==5)return!1;var e=En,t=Zr;Zr=0;var n=vo(on),a=T.T,l=C.p;try{C.p=32>n?32:n,T.T=null,n=Pr,Pr=null;var i=En,r=on;if(Xe=0,Na=En=null,on=0,(ge&6)!==0)throw Error(u(331));var s=ge;if(ge|=4,zm(i.current),wm(i,i.current,r,n),ge=s,zl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Xa,i)}catch{}return!0}finally{C.p=l,T.T=a,Xm(e,t)}}function qm(e,t,n){t=At(n,t),t=Dr(e.stateNode,t,2),e=vn(e,t,2),e!==null&&(qa(e,2),Kt(e))}function be(e,t,n){if(e.tag===3)qm(e,e,n);else for(;t!==null;){if(t.tag===3){qm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(wn===null||!wn.has(a))){e=At(n,e),n=Ju(2),a=vn(t,n,2),a!==null&&(Wu(n,a,t,e),qa(a,2),Kt(a));break}}t=t.return}}function ns(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new zh;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(qr=!0,l.add(n),e=Nh.bind(null,e,t,n),t.then(e,e))}function Nh(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Se===e&&(re&n)===n&&(Ne===4||Ne===3&&(re&62914560)===re&&300>S()-ki?(ge&2)===0&&ka(e,0):Jr|=n,Ra===re&&(Ra=0)),Kt(e)}function Jm(e,t){t===0&&(t=Hs()),e=Qn(e,t),e!==null&&(qa(e,t),Kt(e))}function kh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jm(e,n)}function Oh(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Jm(e,n)}function jh(e,t){return na(e,t)}var Qi=null,ja=null,as=!1,Ki=!1,ls=!1,zn=0;function Kt(e){e!==ja&&e.next===null&&(ja===null?Qi=ja=e:ja=ja.next=e),Ki=!0,as||(as=!0,Uh())}function zl(e,t){if(!ls&&Ki){ls=!0;do for(var n=!1,a=Qi;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var r=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=l&~(r&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,$m(a,i))}else i=re,i=Xl(a,a===Se?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ya(a,i)||(n=!0,$m(a,i));a=a.next}while(n);ls=!1}}function xh(){Wm()}function Wm(){Ki=as=!1;var e=0;zn!==0&&qh()&&(e=zn);for(var t=S(),n=null,a=Qi;a!==null;){var l=a.next,i=Zm(a,t);i===0?(a.next=null,n===null?Qi=l:n.next=l,l===null&&(ja=n)):(n=a,(e!==0||(i&3)!==0)&&(Ki=!0)),a=l}Xe!==0&&Xe!==5||zl(e),zn!==0&&(zn=0)}function Zm(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-pt(i),s=1<<r,d=l[r];d===-1?((s&n)===0||(s&a)!==0)&&(l[r]=ug(s,t)):d<=t&&(e.expiredLanes|=s),i&=~s}if(t=Se,n=re,n=Xl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Va(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ya(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Va(a),vo(n)){case 2:case 8:n=te;break;case 32:n=Ce;break;case 268435456:n=On;break;default:n=Ce}return a=Pm.bind(null,e),n=na(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Va(a),e.callbackPriority=2,e.callbackNode=null,2}function Pm(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ii()&&e.callbackNode!==n)return null;var a=re;return a=Xl(e,e===Se?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Nm(e,a,t),Zm(e,S()),e.callbackNode!=null&&e.callbackNode===n?Pm.bind(null,e):null)}function $m(e,t){if(Ii())return null;Nm(e,t,!0)}function Uh(){Wh(function(){(ge&6)!==0?na(H,xh):Wm()})}function is(){if(zn===0){var e=Ba;e===0&&(e=Hl,Hl<<=1,(Hl&261888)===0&&(Hl=256)),zn=e}return zn}function ed(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wl(""+e)}function td(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Gh(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=ed((l[rt]||null).action),r=a.submitter;r&&(t=(t=r[rt]||null)?ed(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var s=new ei("action","action",null,a,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(zn!==0){var d=r?td(l,r):new FormData(l);wr(n,{pending:!0,data:d,method:l.method,action:i},null,d)}}else typeof i=="function"&&(s.preventDefault(),d=r?td(l,r):new FormData(l),wr(n,{pending:!0,data:d,method:l.method,action:i},i,d))},currentTarget:l}]})}}for(var os=0;os<Ko.length;os++){var rs=Ko[os],Ih=rs.toLowerCase(),Qh=rs[0].toUpperCase()+rs.slice(1);Ot(Ih,"on"+Qh)}Ot(Rc,"onAnimationEnd"),Ot(Nc,"onAnimationIteration"),Ot(kc,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(ah,"onTransitionRun"),Ot(lh,"onTransitionStart"),Ot(ih,"onTransitionCancel"),Ot(Oc,"onTransitionEnd"),ra("onMouseEnter",["mouseout","mouseover"]),ra("onMouseLeave",["mouseout","mouseover"]),ra("onPointerEnter",["pointerout","pointerover"]),ra("onPointerLeave",["pointerout","pointerover"]),xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ll));function nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var s=a[r],d=s.instance,y=s.currentTarget;if(s=s.listener,d!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=y;try{i(l)}catch(w){ai(w)}l.currentTarget=null,i=d}else for(r=0;r<a.length;r++){if(s=a[r],d=s.instance,y=s.currentTarget,s=s.listener,d!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=y;try{i(l)}catch(w){ai(w)}l.currentTarget=null,i=d}}}}function oe(e,t){var n=t[_o];n===void 0&&(n=t[_o]=new Set);var a=e+"__bubble";n.has(a)||(ad(t,e,2,!1),n.add(a))}function ss(e,t,n){var a=0;t&&(a|=4),ad(n,e,a,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function cs(e){if(!e[Hi]){e[Hi]=!0,Ws.forEach(function(n){n!=="selectionchange"&&(Kh.has(n)||ss(n,!1,e),ss(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,ss("selectionchange",!1,t))}}function ad(e,t,n,a){switch(Rd(t)){case 2:var l=bf;break;case 8:l=yf;break;default:l=Cs}n=l.bind(null,t,n,e),l=void 0,!Lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function us(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var s=a.stateNode.containerInfo;if(s===l)break;if(r===4)for(r=a.return;r!==null;){var d=r.tag;if((d===3||d===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;s!==null;){if(r=la(s),r===null)return;if(d=r.tag,d===5||d===6||d===26||d===27){a=i=r;continue e}s=s.parentNode}}a=a.return}sc(function(){var y=i,w=Ao(n),L=[];e:{var v=jc.get(e);if(v!==void 0){var B=ei,U=e;switch(e){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":B=Og;break;case"focusin":U="focus",B=No;break;case"focusout":U="blur",B=No;break;case"beforeblur":case"afterblur":B=No;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Ug;break;case Rc:case Nc:case kc:B=Eg;break;case Oc:B=Ig;break;case"scroll":case"scrollend":B=Bg;break;case"wheel":B=Kg;break;case"copy":case"cut":case"paste":B=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=gc;break;case"toggle":case"beforetoggle":B=Fg}var X=(t&4)!==0,Be=!X&&(e==="scroll"||e==="scrollend"),p=X?v!==null?v+"Capture":null:v;X=[];for(var h=y,b;h!==null;){var A=h;if(b=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||b===null||p===null||(A=Za(h,p),A!=null&&X.push(Ml(h,A,b))),Be)break;h=h.return}0<X.length&&(v=new B(v,U,null,n,w),L.push({event:v,listeners:X}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",v&&n!==Eo&&(U=n.relatedTarget||n.fromElement)&&(la(U)||U[aa]))break e;if((B||v)&&(v=w.window===w?w:(v=w.ownerDocument)?v.defaultView||v.parentWindow:window,B?(U=n.relatedTarget||n.toElement,B=y,U=U?la(U):null,U!==null&&(Be=M(U),X=U.tag,U!==Be||X!==5&&X!==27&&X!==6)&&(U=null)):(B=null,U=y),B!==U)){if(X=mc,A="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(X=gc,A="onPointerLeave",p="onPointerEnter",h="pointer"),Be=B==null?v:Wa(B),b=U==null?v:Wa(U),v=new X(A,h+"leave",B,n,w),v.target=Be,v.relatedTarget=b,A=null,la(w)===y&&(X=new X(p,h+"enter",U,n,w),X.target=b,X.relatedTarget=Be,A=X),Be=A,B&&U)t:{for(X=Hh,p=B,h=U,b=0,A=p;A;A=X(A))b++;A=0;for(var F=h;F;F=X(F))A++;for(;0<b-A;)p=X(p),b--;for(;0<A-b;)h=X(h),A--;for(;b--;){if(p===h||h!==null&&p===h.alternate){X=p;break t}p=X(p),h=X(h)}X=null}else X=null;B!==null&&ld(L,v,B,X,!1),U!==null&&Be!==null&&ld(L,Be,U,X,!0)}}e:{if(v=y?Wa(y):window,B=v.nodeName&&v.nodeName.toLowerCase(),B==="select"||B==="input"&&v.type==="file")var me=Bc;else if(vc(v))if(Sc)me=eh;else{me=Pg;var Q=Zg}else B=v.nodeName,!B||B.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?y&&wo(y.elementType)&&(me=Bc):me=$g;if(me&&(me=me(e,y))){_c(L,me,n,w);break e}Q&&Q(e,v,y),e==="focusout"&&y&&v.type==="number"&&y.memoizedProps.value!=null&&Co(v,"number",v.value)}switch(Q=y?Wa(y):window,e){case"focusin":(vc(Q)||Q.contentEditable==="true")&&(ga=Q,Go=y,il=null);break;case"focusout":il=Go=ga=null;break;case"mousedown":Io=!0;break;case"contextmenu":case"mouseup":case"dragend":Io=!1,Mc(L,n,w);break;case"selectionchange":if(nh)break;case"keydown":case"keyup":Mc(L,n,w)}var $;if(Oo)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else da?bc(e,n)&&(se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(se="onCompositionStart");se&&(hc&&n.locale!=="ko"&&(da||se!=="onCompositionStart"?se==="onCompositionEnd"&&da&&($=cc()):(dn=w,Mo="value"in dn?dn.value:dn.textContent,da=!0)),Q=Fi(y,se),0<Q.length&&(se=new dc(se,e,null,n,w),L.push({event:se,listeners:Q}),$?se.data=$:($=yc(n),$!==null&&(se.data=$)))),($=Xg?Yg(e,n):qg(e,n))&&(se=Fi(y,"onBeforeInput"),0<se.length&&(Q=new dc("onBeforeInput","beforeinput",null,n,w),L.push({event:Q,listeners:se}),Q.data=$)),Gh(L,e,y,n,w)}nd(L,t)})}function Ml(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fi(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Za(e,n),l!=null&&a.unshift(Ml(e,l,i)),l=Za(e,t),l!=null&&a.push(Ml(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Hh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ld(e,t,n,a,l){for(var i=t._reactName,r=[];n!==null&&n!==a;){var s=n,d=s.alternate,y=s.stateNode;if(s=s.tag,d!==null&&d===a)break;s!==5&&s!==26&&s!==27||y===null||(d=y,l?(y=Za(n,i),y!=null&&r.unshift(Ml(n,y,d))):l||(y=Za(n,i),y!=null&&r.push(Ml(n,y,d)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Fh=/\r\n?/g,Vh=/\u0000|\uFFFD/g;function id(e){return(typeof e=="string"?e:""+e).replace(Fh,`
`).replace(Vh,"")}function od(e,t){return t=id(t),id(e)===t}function _e(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ca(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ca(e,""+a);break;case"className":ql(e,"class",a);break;case"tabIndex":ql(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ql(e,n,a);break;case"style":oc(e,a,i);break;case"data":if(t!=="object"){ql(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Wl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",l.name,l,null),_e(e,t,"formEncType",l.formEncType,l,null),_e(e,t,"formMethod",l.formMethod,l,null),_e(e,t,"formTarget",l.formTarget,l,null)):(_e(e,t,"encType",l.encType,l,null),_e(e,t,"method",l.method,l,null),_e(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Wl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ft);break;case"onScroll":a!=null&&oe("scroll",e);break;case"onScrollEnd":a!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Wl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":oe("beforetoggle",e),oe("toggle",e),Yl(e,"popover",a);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=vg.get(n)||n,Yl(e,n,a))}}function ms(e,t,n,a,l,i){switch(n){case"style":oc(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ca(e,a):(typeof a=="number"||typeof a=="bigint")&&ca(e,""+a);break;case"onScroll":a!=null&&oe("scroll",e);break;case"onScrollEnd":a!=null&&oe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ft);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[rt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Yl(e,n,a)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:_e(e,t,i,r,n,null)}}l&&_e(e,t,"srcSet",n.srcSet,n,null),a&&_e(e,t,"src",n.src,n,null);return;case"input":oe("invalid",e);var s=i=r=l=null,d=null,y=null;for(a in n)if(n.hasOwnProperty(a)){var w=n[a];if(w!=null)switch(a){case"name":l=w;break;case"type":r=w;break;case"checked":d=w;break;case"defaultChecked":y=w;break;case"value":i=w;break;case"defaultValue":s=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:_e(e,t,a,w,n,null)}}nc(e,i,s,d,y,r,l,!1);return;case"select":oe("invalid",e),a=r=i=null;for(l in n)if(n.hasOwnProperty(l)&&(s=n[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":r=s;break;case"multiple":a=s;default:_e(e,t,l,s,n,null)}t=i,n=r,e.multiple=!!a,t!=null?sa(e,!!a,t,!1):n!=null&&sa(e,!!a,n,!0);return;case"textarea":oe("invalid",e),i=l=a=null;for(r in n)if(n.hasOwnProperty(r)&&(s=n[r],s!=null))switch(r){case"value":a=s;break;case"defaultValue":l=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:_e(e,t,r,s,n,null)}lc(e,a,l,i);return;case"option":for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null)&&(d==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":_e(e,t,d,a,n,null));return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(a=0;a<Ll.length;a++)oe(Ll[a],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:_e(e,t,y,a,n,null)}return;default:if(wo(t)){for(w in n)n.hasOwnProperty(w)&&(a=n[w],a!==void 0&&ms(e,t,w,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(a=n[s],a!=null&&_e(e,t,s,a,n,null))}function Xh(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,r=null,s=null,d=null,y=null,w=null;for(B in n){var L=n[B];if(n.hasOwnProperty(B)&&L!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":d=L;default:a.hasOwnProperty(B)||_e(e,t,B,null,a,L)}}for(var v in a){var B=a[v];if(L=n[v],a.hasOwnProperty(v)&&(B!=null||L!=null))switch(v){case"type":i=B;break;case"name":l=B;break;case"checked":y=B;break;case"defaultChecked":w=B;break;case"value":r=B;break;case"defaultValue":s=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(u(137,t));break;default:B!==L&&_e(e,t,v,B,a,L)}}To(e,r,s,d,y,w,i,l);return;case"select":B=r=s=v=null;for(i in n)if(d=n[i],n.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":B=d;default:a.hasOwnProperty(i)||_e(e,t,i,null,a,d)}for(l in a)if(i=a[l],d=n[l],a.hasOwnProperty(l)&&(i!=null||d!=null))switch(l){case"value":v=i;break;case"defaultValue":s=i;break;case"multiple":r=i;default:i!==d&&_e(e,t,l,i,a,d)}t=s,n=r,a=B,v!=null?sa(e,!!n,v,!1):!!a!=!!n&&(t!=null?sa(e,!!n,t,!0):sa(e,!!n,n?[]:"",!1));return;case"textarea":B=v=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:_e(e,t,s,null,a,l)}for(r in a)if(l=a[r],i=n[r],a.hasOwnProperty(r)&&(l!=null||i!=null))switch(r){case"value":v=l;break;case"defaultValue":B=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==i&&_e(e,t,r,l,a,i)}ac(e,v,B);return;case"option":for(var U in n)v=n[U],n.hasOwnProperty(U)&&v!=null&&!a.hasOwnProperty(U)&&(U==="selected"?e.selected=!1:_e(e,t,U,null,a,v));for(d in a)v=a[d],B=n[d],a.hasOwnProperty(d)&&v!==B&&(v!=null||B!=null)&&(d==="selected"?e.selected=v&&typeof v!="function"&&typeof v!="symbol":_e(e,t,d,v,a,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in n)v=n[X],n.hasOwnProperty(X)&&v!=null&&!a.hasOwnProperty(X)&&_e(e,t,X,null,a,v);for(y in a)if(v=a[y],B=n[y],a.hasOwnProperty(y)&&v!==B&&(v!=null||B!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(137,t));break;default:_e(e,t,y,v,a,B)}return;default:if(wo(t)){for(var Be in n)v=n[Be],n.hasOwnProperty(Be)&&v!==void 0&&!a.hasOwnProperty(Be)&&ms(e,t,Be,void 0,a,v);for(w in a)v=a[w],B=n[w],!a.hasOwnProperty(w)||v===B||v===void 0&&B===void 0||ms(e,t,w,v,a,B);return}}for(var p in n)v=n[p],n.hasOwnProperty(p)&&v!=null&&!a.hasOwnProperty(p)&&_e(e,t,p,null,a,v);for(L in a)v=a[L],B=n[L],!a.hasOwnProperty(L)||v===B||v==null&&B==null||_e(e,t,L,v,a,B)}function rd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,r=l.initiatorType,s=l.duration;if(i&&s&&rd(r)){for(r=0,s=l.responseEnd,a+=1;a<n.length;a++){var d=n[a],y=d.startTime;if(y>s)break;var w=d.transferSize,L=d.initiatorType;w&&rd(L)&&(d=d.responseEnd,r+=w*(d<s?1:(s-y)/(d-y)))}if(--a,t+=8*(i+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ds=null,gs=null;function Vi(e){return e.nodeType===9?e:e.ownerDocument}function sd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fs=null;function qh(){var e=window.event;return e&&e.type==="popstate"?e===fs?!1:(fs=e,!0):(fs=null,!1)}var ud=typeof setTimeout=="function"?setTimeout:void 0,Jh=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,Wh=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(e){return md.resolve(null).then(e).catch(Zh)}:ud;function Zh(e){setTimeout(function(){throw e})}function Ln(e){return e==="head"}function dd(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Ia(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Dl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Dl(n);for(var i=n.firstChild;i;){var r=i.nextSibling,s=i.nodeName;i[Ja]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&Dl(e.ownerDocument.body);n=l}while(n);Ia(t)}function gd(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function ps(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ps(n),Bo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ph(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ja])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function $h(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Rt(e.nextSibling),e===null))return null;return e}function hd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function bs(e){return e.data==="$?"||e.data==="$~"}function ys(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ef(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vs=null;function fd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Rt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function bd(e,t,n){switch(t=Vi(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Dl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bo(e)}var Nt=new Map,yd=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rn=C.d;C.d={f:tf,r:nf,D:af,C:lf,L:of,m:rf,X:cf,S:sf,M:uf};function tf(){var e=rn.f(),t=xi();return e||t}function nf(e){var t=ia(e);t!==null&&t.tag===5&&t.type==="form"?Ou(t):rn.r(e)}var xa=typeof document>"u"?null:document;function vd(e,t,n){var a=xa;if(a&&typeof t=="string"&&t){var l=wt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),yd.has(l)||(yd.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),tt(t,"link",e),qe(t),a.head.appendChild(t)))}}function af(e){rn.D(e),vd("dns-prefetch",e,null)}function lf(e,t){rn.C(e,t),vd("preconnect",e,t)}function of(e,t,n){rn.L(e,t,n);var a=xa;if(a&&e&&t){var l='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+wt(n.imageSizes)+'"]')):l+='[href="'+wt(e)+'"]';var i=l;switch(t){case"style":i=Ua(e);break;case"script":i=Ga(e)}Nt.has(i)||(e=K({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Nt.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Rl(i))||t==="script"&&a.querySelector(Nl(i))||(t=a.createElement("link"),tt(t,"link",e),qe(t),a.head.appendChild(t)))}}function rf(e,t){rn.m(e,t);var n=xa;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+wt(a)+'"][href="'+wt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ga(e)}if(!Nt.has(i)&&(e=K({rel:"modulepreload",href:e},t),Nt.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Nl(i)))return}a=n.createElement("link"),tt(a,"link",e),qe(a),n.head.appendChild(a)}}}function sf(e,t,n){rn.S(e,t,n);var a=xa;if(a&&e){var l=oa(a).hoistableStyles,i=Ua(e);t=t||"default";var r=l.get(i);if(!r){var s={loading:0,preload:null};if(r=a.querySelector(Rl(i)))s.loading=5;else{e=K({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Nt.get(i))&&_s(e,n);var d=r=a.createElement("link");qe(d),tt(d,"link",e),d._p=new Promise(function(y,w){d.onload=y,d.onerror=w}),d.addEventListener("load",function(){s.loading|=1}),d.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Yi(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:s},l.set(i,r)}}}function cf(e,t){rn.X(e,t);var n=xa;if(n&&e){var a=oa(n).hoistableScripts,l=Ga(e),i=a.get(l);i||(i=n.querySelector(Nl(l)),i||(e=K({src:e,async:!0},t),(t=Nt.get(l))&&Bs(e,t),i=n.createElement("script"),qe(i),tt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function uf(e,t){rn.M(e,t);var n=xa;if(n&&e){var a=oa(n).hoistableScripts,l=Ga(e),i=a.get(l);i||(i=n.querySelector(Nl(l)),i||(e=K({src:e,async:!0,type:"module"},t),(t=Nt.get(l))&&Bs(e,t),i=n.createElement("script"),qe(i),tt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function _d(e,t,n,a){var l=(l=ae.current)?Xi(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ua(n.href),n=oa(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ua(n.href);var i=oa(l).hoistableStyles,r=i.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=l.querySelector(Rl(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Nt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Nt.set(e,n),i||mf(l,e,n,r.state))),t&&a===null)throw Error(u(528,""));return r}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ga(n),n=oa(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ua(e){return'href="'+wt(e)+'"'}function Rl(e){return'link[rel="stylesheet"]['+e+"]"}function Bd(e){return K({},e,{"data-precedence":e.precedence,precedence:null})}function mf(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),tt(t,"link",n),qe(t),e.head.appendChild(t))}function Ga(e){return'[src="'+wt(e)+'"]'}function Nl(e){return"script[async]"+e}function Sd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+wt(n.href)+'"]');if(a)return t.instance=a,qe(a),a;var l=K({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),qe(a),tt(a,"style",l),Yi(a,n.precedence,e),t.instance=a;case"stylesheet":l=Ua(n.href);var i=e.querySelector(Rl(l));if(i)return t.state.loading|=4,t.instance=i,qe(i),i;a=Bd(n),(l=Nt.get(l))&&_s(a,l),i=(e.ownerDocument||e).createElement("link"),qe(i);var r=i;return r._p=new Promise(function(s,d){r.onload=s,r.onerror=d}),tt(i,"link",a),t.state.loading|=4,Yi(i,n.precedence,e),t.instance=i;case"script":return i=Ga(n.src),(l=e.querySelector(Nl(i)))?(t.instance=l,qe(l),l):(a=n,(l=Nt.get(i))&&(a=K({},n),Bs(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),qe(l),tt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Yi(a,n.precedence,e));return t.instance}function Yi(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,r=0;r<a.length;r++){var s=a[r];if(s.dataset.precedence===t)i=s;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function _s(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qi=null;function Td(e,t,n){if(qi===null){var a=new Map,l=qi=new Map;l.set(n,a)}else l=qi,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Ja]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var s=a.get(r);s?s.push(i):a.set(r,[i])}}return a}function Cd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function df(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gf(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Ua(a.href),i=t.querySelector(Rl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ji.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,qe(i);return}i=t.ownerDocument||t,a=Bd(a),(l=Nt.get(l))&&_s(a,l),i=i.createElement("link"),qe(i);var r=i;r._p=new Promise(function(s,d){r.onload=s,r.onerror=d}),tt(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ji.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ss=0;function hf(e,t){return e.stylesheets&&e.count===0&&Zi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Zi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ss===0&&(Ss=62500*Yh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ss?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Ji(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wi=null;function Zi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wi=new Map,t.forEach(ff,e),Wi=null,Ji.call(e))}function ff(e,t){if(!(t.state.loading&4)){var n=Wi.get(e);if(n)var a=n.get(null);else{n=new Map,Wi.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var r=l[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),a=r)}a&&n.set(null,a)}l=t.instance,r=l.getAttribute("data-precedence"),i=n.get(r)||a,i===a&&n.set(null,l),n.set(r,l),this.count++,a=Ji.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var kl={$$typeof:ze,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function pf(e,t,n,a,l,i,r,s,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.hiddenUpdates=bo(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Ed(e,t,n,a,l,i,r,s,d,y,w,L){return e=new pf(e,t,n,r,d,y,w,L,s),t=1,i===!0&&(t|=24),i=yt(3,null,null,t),e.current=i,i.stateNode=e,t=tr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},ir(i),e}function Ad(e){return e?(e=pa,e):pa}function zd(e,t,n,a,l,i){l=Ad(l),a.context===null?a.context=l:a.pendingContext=l,a=yn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=vn(e,a,t),n!==null&&(gt(n,e,t),dl(n,e,t))}function Ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ts(e,t){Ld(e,t),(e=e.alternate)&&Ld(e,t)}function Md(e){if(e.tag===13||e.tag===31){var t=Qn(e,67108864);t!==null&&gt(t,e,67108864),Ts(e,67108864)}}function Dd(e){if(e.tag===13||e.tag===31){var t=Tt();t=yo(t);var n=Qn(e,t);n!==null&&gt(n,e,t),Ts(e,t)}}var Pi=!0;function bf(e,t,n,a){var l=T.T;T.T=null;var i=C.p;try{C.p=2,Cs(e,t,n,a)}finally{C.p=i,T.T=l}}function yf(e,t,n,a){var l=T.T;T.T=null;var i=C.p;try{C.p=8,Cs(e,t,n,a)}finally{C.p=i,T.T=l}}function Cs(e,t,n,a){if(Pi){var l=ws(a);if(l===null)us(e,t,a,$i,n),Nd(e,a);else if(_f(l,e,t,n,a))a.stopPropagation();else if(Nd(e,a),t&4&&-1<vf.indexOf(e)){for(;l!==null;){var i=ia(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=jn(i.pendingLanes);if(r!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;r;){var d=1<<31-pt(r);s.entanglements[1]|=d,r&=~d}Kt(i),(ge&6)===0&&(Oi=S()+500,zl(0))}}break;case 31:case 13:s=Qn(i,2),s!==null&&gt(s,i,2),xi(),Ts(i,2)}if(i=ws(a),i===null&&us(e,t,a,$i,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else us(e,t,a,null,n)}}function ws(e){return e=Ao(e),Es(e)}var $i=null;function Es(e){if($i=null,e=la(e),e!==null){var t=M(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=N(t),e!==null)return e;e=null}else if(n===31){if(e=x(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $i=e,null}function Rd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(O()){case H:return 2;case te:return 8;case Ce:case kt:return 32;case On:return 268435456;default:return 32}default:return 32}}var As=!1,Mn=null,Dn=null,Rn=null,Ol=new Map,jl=new Map,Nn=[],vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nd(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Ol.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(t.pointerId)}}function xl(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ia(t),t!==null&&Md(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _f(e,t,n,a,l){switch(t){case"focusin":return Mn=xl(Mn,e,t,n,a,l),!0;case"dragenter":return Dn=xl(Dn,e,t,n,a,l),!0;case"mouseover":return Rn=xl(Rn,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return Ol.set(i,xl(Ol.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,jl.set(i,xl(jl.get(i)||null,e,t,n,a,l)),!0}return!1}function kd(e){var t=la(e.target);if(t!==null){var n=M(t);if(n!==null){if(t=n.tag,t===13){if(t=N(n),t!==null){e.blockedOn=t,qs(e.priority,function(){Dd(n)});return}}else if(t===31){if(t=x(n),t!==null){e.blockedOn=t,qs(e.priority,function(){Dd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Eo=a,n.target.dispatchEvent(a),Eo=null}else return t=ia(n),t!==null&&Md(t),e.blockedOn=n,!1;t.shift()}return!0}function Od(e,t,n){eo(e)&&n.delete(t)}function Bf(){As=!1,Mn!==null&&eo(Mn)&&(Mn=null),Dn!==null&&eo(Dn)&&(Dn=null),Rn!==null&&eo(Rn)&&(Rn=null),Ol.forEach(Od),jl.forEach(Od)}function to(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Bf)))}var no=null;function jd(e){no!==e&&(no=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){no===e&&(no=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Es(a||n)===null)continue;break}var i=ia(n);i!==null&&(e.splice(t,3),t-=3,wr(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Ia(e){function t(d){return to(d,e)}Mn!==null&&to(Mn,e),Dn!==null&&to(Dn,e),Rn!==null&&to(Rn,e),Ol.forEach(t),jl.forEach(t);for(var n=0;n<Nn.length;n++){var a=Nn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)kd(n),n.blockedOn===null&&Nn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],r=l[rt]||null;if(typeof i=="function")r||jd(n);else if(r){var s=null;if(i&&i.hasAttribute("formAction")){if(l=i,r=i[rt]||null)s=r.formAction;else if(Es(l)!==null)continue}else s=r.action;typeof s=="function"?n[a+1]=s:(n.splice(a,3),a-=3),jd(n)}}}function xd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function zs(e){this._internalRoot=e}ao.prototype.render=zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Tt();zd(n,a,e,t,null,null)},ao.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zd(e.current,2,null,e,null,null),xi(),t[aa]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ys();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&kd(e)}};var Ud=m.version;if(Ud!=="19.2.7")throw Error(u(527,Ud,"19.2.7"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=E(t),e=e!==null?q(e):null,e=e===null?null:e.stateNode,e};var Sf={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Xa=lo.inject(Sf),ft=lo}catch{}}return Ul.createRoot=function(e,t){if(!_(e))throw Error(u(299));var n=!1,a="",l=Vu,i=Xu,r=Yu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Ed(e,1,!1,null,null,n,a,null,l,i,r,xd),e[aa]=t.current,cs(e),new zs(t)},Ul.hydrateRoot=function(e,t,n){if(!_(e))throw Error(u(299));var a=!1,l="",i=Vu,r=Xu,s=Yu,d=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(d=n.formState)),t=Ed(e,1,!0,t,n??null,a,l,d,i,r,s,xd),t.context=Ad(null),n=t.current,a=Tt(),a=yo(a),l=yn(a),l.callback=null,vn(n,l,a),n=a,t.current.lanes=n,qa(t,n),Kt(t),e[aa]=t.current,cs(e),new ao(t)},Ul.version="19.2.7",Ul}var Xd;function Df(){if(Xd)return Ms.exports;Xd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(m){console.error(m)}}return c(),Ms.exports=Mf(),Ms.exports}var Rf=Df();const lg=(...c)=>c.filter((m,f,u)=>!!m&&m.trim()!==""&&u.indexOf(m)===f).join(" ").trim();const Nf=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const kf=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(m,f,u)=>u?u.toUpperCase():f.toLowerCase());const Yd=c=>{const m=kf(c);return m.charAt(0).toUpperCase()+m.slice(1)};var ks={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Of=c=>{for(const m in c)if(m.startsWith("aria-")||m==="role"||m==="title")return!0;return!1},jf=he.createContext({}),xf=()=>he.useContext(jf),Uf=he.forwardRef(({color:c,size:m,strokeWidth:f,absoluteStrokeWidth:u,className:_="",children:M,iconNode:N,...x},R)=>{const{size:E=24,strokeWidth:q=2,absoluteStrokeWidth:K=!1,color:Z="currentColor",className:fe=""}=xf()??{},ye=u??K?Number(f??q)*24/Number(m??E):f??q;return he.createElement("svg",{ref:R,...ks,width:m??E??ks.width,height:m??E??ks.height,stroke:c??Z,strokeWidth:ye,className:lg("lucide",fe,_),...!M&&!Of(x)&&{"aria-hidden":"true"},...x},[...N.map(([ne,Me])=>he.createElement(ne,Me)),...Array.isArray(M)?M:[M]])});const He=(c,m)=>{const f=he.forwardRef(({className:u,..._},M)=>he.createElement(Uf,{ref:M,iconNode:m,className:lg(`lucide-${Nf(Yd(c))}`,`lucide-${c}`,u),..._}));return f.displayName=Yd(c),f};const Gf=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],qd=He("arrow-down-to-line",Gf);const If=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Qf=He("chart-column",If);const Kf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Hf=He("circle-check",Kf);const Ff=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Vf=He("clipboard-list",Ff);const Xf=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Yf=He("file-spreadsheet",Xf);const qf=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],so=He("image-off",qf);const Jf=[["path",{d:"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",key:"9kzy35"}],["path",{d:"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",key:"1t0f0t"}],["circle",{cx:"13",cy:"7",r:"1",fill:"currentColor",key:"1obus6"}],["rect",{x:"8",y:"2",width:"14",height:"14",rx:"2",key:"1gvhby"}]],Ql=He("images",Jf);const Wf=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Zf=He("layers",Wf);const Pf=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],$f=He("layout-list",Pf);const ep=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],tp=He("monitor",ep);const np=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ap=He("plus",np);const lp=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ip=He("rotate-ccw",lp);const op=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],rp=He("save",op);const sp=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],cp=He("search",sp);const up=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ig=He("shield-check",up);const mp=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],dp=He("sliders-horizontal",mp);const gp=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],hp=He("square-check-big",gp);const fp=[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],pp=He("square-split-horizontal",fp);const bp=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],yp=He("trash-2",bp);const vp=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_p=He("triangle-alert",vp),Bp=JSON.parse('[{"ASIN":"B08DKQ3JG1","Image Slot":"01","Role":"MAIN","Local File Name":"B08DKQ3JG1_01.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B08DKQ3JG1/B08DKQ3JG1_01.jpg","Amazon Image ID":"51p1Ui5sa7L","Original Image URL":"https://m.media-amazon.com/images/I/51p1Ui5sa7L._AC_SL1500_.jpg"},{"ASIN":"B08DKQ3JG1","Image Slot":"02","Role":"PT01","Local File Name":"B08DKQ3JG1_02.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B08DKQ3JG1/B08DKQ3JG1_02.jpg","Amazon Image ID":"716VMxg-p8L","Original Image URL":"https://m.media-amazon.com/images/I/716VMxg-p8L._AC_SL1500_.jpg"},{"ASIN":"B08DKQ3JG1","Image Slot":"03","Role":"PT02","Local File Name":"B08DKQ3JG1_03.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B08DKQ3JG1/B08DKQ3JG1_03.jpg","Amazon Image ID":"71Mrf31yJdL","Original Image URL":"https://m.media-amazon.com/images/I/71Mrf31yJdL._AC_SL1500_.jpg"},{"ASIN":"B08DKQ3JG1","Image Slot":"04","Role":"PT03","Local File Name":"B08DKQ3JG1_04.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B08DKQ3JG1/B08DKQ3JG1_04.jpg","Amazon Image ID":"71DRpnyOrEL","Original Image URL":"https://m.media-amazon.com/images/I/71DRpnyOrEL._AC_SL1500_.jpg"},{"ASIN":"B08DKQ3JG1","Image Slot":"05","Role":"PT04","Local File Name":"B08DKQ3JG1_05.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B08DKQ3JG1/B08DKQ3JG1_05.jpg","Amazon Image ID":"71G1mSjUvNL","Original Image URL":"https://m.media-amazon.com/images/I/71G1mSjUvNL._AC_SL1500_.jpg"},{"ASIN":"B08DKQ3JG1","Image Slot":"06","Role":"PT05","Local File Name":"B08DKQ3JG1_06.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B08DKQ3JG1/B08DKQ3JG1_06.jpg","Amazon Image ID":"71QOQzBo2xL","Original Image URL":"https://m.media-amazon.com/images/I/71QOQzBo2xL._AC_SL1500_.jpg"},{"ASIN":"B08DKQ3JG1","Image Slot":"07","Role":"PT06","Local File Name":"B08DKQ3JG1_07.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B08DKQ3JG1/B08DKQ3JG1_07.jpg","Amazon Image ID":"71ybTWOoHcL","Original Image URL":"https://m.media-amazon.com/images/I/71ybTWOoHcL._AC_SL1500_.jpg"},{"ASIN":"B08DKQ3JG1","Image Slot":"08","Role":"PT07","Local File Name":"B08DKQ3JG1_08.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B08DKQ3JG1/B08DKQ3JG1_08.jpg","Amazon Image ID":"715maOIkNuL","Original Image URL":"https://m.media-amazon.com/images/I/715maOIkNuL._AC_SL1500_.jpg"},{"ASIN":"B08DKQ3JG1","Image Slot":"09","Role":"PT08","Local File Name":"B08DKQ3JG1_09.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B08DKQ3JG1/B08DKQ3JG1_09.jpg","Amazon Image ID":"714ttBMce2L","Original Image URL":"https://m.media-amazon.com/images/I/714ttBMce2L._AC_SL1500_.jpg"},{"ASIN":"B0F2DGNX7D","Image Slot":"01","Role":"MAIN","Local File Name":"B0F2DGNX7D_01.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F2DGNX7D/B0F2DGNX7D_01.jpg","Amazon Image ID":"51eonlX0beL","Original Image URL":"https://m.media-amazon.com/images/I/51eonlX0beL._AC_SL1500_.jpg"},{"ASIN":"B0F2DGNX7D","Image Slot":"02","Role":"PT01","Local File Name":"B0F2DGNX7D_02.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F2DGNX7D/B0F2DGNX7D_02.jpg","Amazon Image ID":"71TdHv83j2L","Original Image URL":"https://m.media-amazon.com/images/I/71TdHv83j2L._AC_SL1500_.jpg"},{"ASIN":"B0F2DGNX7D","Image Slot":"03","Role":"PT02","Local File Name":"B0F2DGNX7D_03.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F2DGNX7D/B0F2DGNX7D_03.jpg","Amazon Image ID":"712qSURxZUL","Original Image URL":"https://m.media-amazon.com/images/I/712qSURxZUL._AC_SL1500_.jpg"},{"ASIN":"B0F2DGNX7D","Image Slot":"04","Role":"PT03","Local File Name":"B0F2DGNX7D_04.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F2DGNX7D/B0F2DGNX7D_04.jpg","Amazon Image ID":"71LD+cYtjgL","Original Image URL":"https://m.media-amazon.com/images/I/71LD+cYtjgL._AC_SL1500_.jpg"},{"ASIN":"B0F2DGNX7D","Image Slot":"05","Role":"PT04","Local File Name":"B0F2DGNX7D_05.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F2DGNX7D/B0F2DGNX7D_05.jpg","Amazon Image ID":"71jXIpM7QzL","Original Image URL":"https://m.media-amazon.com/images/I/71jXIpM7QzL._AC_SL1500_.jpg"},{"ASIN":"B0F2DGNX7D","Image Slot":"06","Role":"PT05","Local File Name":"B0F2DGNX7D_06.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F2DGNX7D/B0F2DGNX7D_06.jpg","Amazon Image ID":"71BbxN1a-DL","Original Image URL":"https://m.media-amazon.com/images/I/71BbxN1a-DL._AC_SL1500_.jpg"},{"ASIN":"B0F2DGNX7D","Image Slot":"07","Role":"PT06","Local File Name":"B0F2DGNX7D_07.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F2DGNX7D/B0F2DGNX7D_07.jpg","Amazon Image ID":"71JnT53O-7L","Original Image URL":"https://m.media-amazon.com/images/I/71JnT53O-7L._AC_SL1500_.jpg"},{"ASIN":"B0F9LBFHJZ","Image Slot":"01","Role":"MAIN","Local File Name":"B0F9LBFHJZ_01.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F9LBFHJZ/B0F9LBFHJZ_01.jpg","Amazon Image ID":"71ENh9a9frL","Original Image URL":"https://m.media-amazon.com/images/I/71ENh9a9frL._AC_SL1500_.jpg"},{"ASIN":"B0F9LBFHJZ","Image Slot":"02","Role":"PT01","Local File Name":"B0F9LBFHJZ_02.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F9LBFHJZ/B0F9LBFHJZ_02.jpg","Amazon Image ID":"71qORx8TY5L","Original Image URL":"https://m.media-amazon.com/images/I/71qORx8TY5L._AC_SL1500_.jpg"},{"ASIN":"B0F9LBFHJZ","Image Slot":"03","Role":"PT02","Local File Name":"B0F9LBFHJZ_03.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F9LBFHJZ/B0F9LBFHJZ_03.jpg","Amazon Image ID":"71WNV+0fAeL","Original Image URL":"https://m.media-amazon.com/images/I/71WNV+0fAeL._AC_SL1500_.jpg"},{"ASIN":"B0F9LBFHJZ","Image Slot":"04","Role":"PT03","Local File Name":"B0F9LBFHJZ_04.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F9LBFHJZ/B0F9LBFHJZ_04.jpg","Amazon Image ID":"71edPDkAr5L","Original Image URL":"https://m.media-amazon.com/images/I/71edPDkAr5L._AC_SL1500_.jpg"},{"ASIN":"B0F9LBFHJZ","Image Slot":"05","Role":"PT04","Local File Name":"B0F9LBFHJZ_05.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F9LBFHJZ/B0F9LBFHJZ_05.jpg","Amazon Image ID":"81xuF3gQGJL","Original Image URL":"https://m.media-amazon.com/images/I/81xuF3gQGJL._AC_SL1500_.jpg"},{"ASIN":"B0F9LBFHJZ","Image Slot":"06","Role":"PT05","Local File Name":"B0F9LBFHJZ_06.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F9LBFHJZ/B0F9LBFHJZ_06.jpg","Amazon Image ID":"71eqJldJwOL","Original Image URL":"https://m.media-amazon.com/images/I/71eqJldJwOL._AC_SL1500_.jpg"},{"ASIN":"B0F9LBFHJZ","Image Slot":"07","Role":"PT06","Local File Name":"B0F9LBFHJZ_07.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F9LBFHJZ/B0F9LBFHJZ_07.jpg","Amazon Image ID":"81v8flcDD4L","Original Image URL":"https://m.media-amazon.com/images/I/81v8flcDD4L._AC_SL1500_.jpg"},{"ASIN":"B0F9LBFHJZ","Image Slot":"08","Role":"PT07","Local File Name":"B0F9LBFHJZ_08.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F9LBFHJZ/B0F9LBFHJZ_08.jpg","Amazon Image ID":"719OXIyU-pL","Original Image URL":"https://m.media-amazon.com/images/I/719OXIyU-pL._AC_SL1500_.jpg"},{"ASIN":"B0F9LBFHJZ","Image Slot":"09","Role":"PT08","Local File Name":"B0F9LBFHJZ_09.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0F9LBFHJZ/B0F9LBFHJZ_09.jpg","Amazon Image ID":"71LCgdZDB+L","Original Image URL":"https://m.media-amazon.com/images/I/71LCgdZDB+L._AC_SL1500_.jpg"},{"ASIN":"B0FDPXHQW8","Image Slot":"01","Role":"MAIN","Local File Name":"B0FDPXHQW8_01.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0FDPXHQW8/B0FDPXHQW8_01.jpg","Amazon Image ID":"71eYXJknJGL","Original Image URL":"https://m.media-amazon.com/images/I/71eYXJknJGL._AC_SL1500_.jpg"},{"ASIN":"B0FDPXHQW8","Image Slot":"02","Role":"PT01","Local File Name":"B0FDPXHQW8_02.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0FDPXHQW8/B0FDPXHQW8_02.jpg","Amazon Image ID":"81vDprjFiOL","Original Image URL":"https://m.media-amazon.com/images/I/81vDprjFiOL._AC_SL1500_.jpg"},{"ASIN":"B0FDPXHQW8","Image Slot":"03","Role":"PT02","Local File Name":"B0FDPXHQW8_03.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0FDPXHQW8/B0FDPXHQW8_03.jpg","Amazon Image ID":"717UgjGLZpL","Original Image URL":"https://m.media-amazon.com/images/I/717UgjGLZpL._AC_SL1500_.jpg"},{"ASIN":"B0FDPXHQW8","Image Slot":"04","Role":"PT03","Local File Name":"B0FDPXHQW8_04.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0FDPXHQW8/B0FDPXHQW8_04.jpg","Amazon Image ID":"71099+YPUkL","Original Image URL":"https://m.media-amazon.com/images/I/71099+YPUkL._AC_SL1500_.jpg"},{"ASIN":"B0FDPXHQW8","Image Slot":"05","Role":"PT04","Local File Name":"B0FDPXHQW8_05.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0FDPXHQW8/B0FDPXHQW8_05.jpg","Amazon Image ID":"81OHEpPBsBL","Original Image URL":"https://m.media-amazon.com/images/I/81OHEpPBsBL._AC_SL1500_.jpg"},{"ASIN":"B0FDPXHQW8","Image Slot":"06","Role":"PT05","Local File Name":"B0FDPXHQW8_06.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0FDPXHQW8/B0FDPXHQW8_06.jpg","Amazon Image ID":"713DUCbiYKL","Original Image URL":"https://m.media-amazon.com/images/I/713DUCbiYKL._AC_SL1500_.jpg"},{"ASIN":"B0FDPXHQW8","Image Slot":"07","Role":"PT06","Local File Name":"B0FDPXHQW8_07.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0FDPXHQW8/B0FDPXHQW8_07.jpg","Amazon Image ID":"71eZzscpAOL","Original Image URL":"https://m.media-amazon.com/images/I/71eZzscpAOL._AC_SL1500_.jpg"},{"ASIN":"B0FDPXHQW8","Image Slot":"08","Role":"PT07","Local File Name":"B0FDPXHQW8_08.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0FDPXHQW8/B0FDPXHQW8_08.jpg","Amazon Image ID":"71QyZA9we+L","Original Image URL":"https://m.media-amazon.com/images/I/71QyZA9we+L._AC_SL1500_.jpg"},{"ASIN":"B0FDPXHQW8","Image Slot":"09","Role":"PT08","Local File Name":"B0FDPXHQW8_09.jpg","Local File Path":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/gallery_only/B0FDPXHQW8/B0FDPXHQW8_09.jpg","Amazon Image ID":"814l-TxxvHL","Original Image URL":"https://m.media-amazon.com/images/I/814l-TxxvHL._AC_SL1500_.jpg"}]'),Sp=JSON.parse(`[{"asin":"B08DKQ3JG1","sourceUrl":"https://www.amazon.com/dp/B08DKQ3JG1","htmlSnapshot":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/B08DKQ3JG1.html","title":"Quntis Computer Monitor Lamp, Screen Monitor Light Bar for Eye Caring, USB Reading LED Task Lamp with Auto-Dimming, Dimmable Light Bar, Touch Control, No Glare Space Saving Home Office Desk Lamps","bullets":["No Blue Light Hazard & Flicker-Free Lighting: Certified to meet the IEC/TR 62778 and IEC/EN 62471 standards, Quntis monitor light bar effectively eliminates harmful blue light that may affect vision, reducing eye irritation and providing optimal eye protection. Enjoy our flicker-free illumination that provides a stable light source without worrying about eye discomfort. Experience a truly comfortable and eye-friendly illumination with Quntis computer monitor light.","No Screen Glare & Space Saving: The innovative asymmetrical optical design only illuminates your desk area, enhancing immersion and focus while ensuring no reflected glare on your screen. Our scientifically designed weighted clip easily mounts on top of the monitor, saving valuable desk space.","Auto-Dimming & Stepless Dimming: The built-in ambient light sensor continuously monitors the surrounding brightness and intelligently adjusts the existing light to 900 lux, preventing visual fatigue by avoiding excessive or insufficient lighting. The ScreenLinear monitor lamp also allows manual adjustments for both brightness and color temperature (3000K-6500K), so you can customize the lighting to your preference for optimal comfort.","Close to Natural Light & Ultra-High Ra98 Color Rendering Index: Our computer light bar features 78 high-quality LED beads, offering uniform and adequate lighting while minimizing shadows and glare, creating a comfortable lighting environment for reading, working, and gaming. High CRI enhances vibrant and true-to-life colors, making objects on your screen appear vivid and realistic. Perfect for professionals engaged in color work, ensuring color accuracy and minimizing eye fatigue.","Masterful Illumination, Empowering Eye Care: Quntis monitor reading lamp surpasses normal desk lamps by providing exceptional, eye-friendly illumination. It helps develop healthier visual habits during screen time and reduces the risk of myopia. Ideal for students, designers, and office workers, the ScreenLinear is a great solution for a comfortable visual experience, whether you’re reading, gaming, or spending long hours in front of a screen."],"aplus":[{"id":"aplusBrandStory_feature_div","label":"Brand Story","modules":[{"source":"Brand Story","moduleIndex":1,"class":"aplus-v2 desktop celwidget","celWidgetId":"aplus","texts":["ScreenLinear Light Bar Series","Precision Lighting · Immersive Glow · Lasting Vision Comfort","Quntis: Space Lit","Quntis specializes in desk‑centered lighting.","Space Lit is our vision of a well‑lit desk: a three‑layer lighting ecosystem that blends eye‑care science and desk‑setup aesthetics.","For The Hours That Add Up , Quntis delivers lighting that helps reduce eye fatigue while naturally enhancing the atmosphere of your space.","Explore Quntis LumeEase for home, festive, and outdoor lighting.","ScreenLinear Focus","Fit for 15-22'' Monitor","ScreenLinear Glow","Front Back Dual Light","ScreenLinear IM","Immersive RGB Ambiance"],"images":[{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/9ae44649-21ae-4401-b752-4afe3890c764.__CR0,0,1464,625_PT0_SX1464_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/15b7b68d-d378-4c5c-8011-4011547e5f07.__CR0,7,350,161_PT0_SX315_V1___.jpg"},{"alt":"quntis after sales","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/5280a0a6-e351-4679-b25d-26853b37d0ce.__CR0,0,362,453_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/e181fcb0-4c9f-4920-abb2-6952549c5f47.__CR4,0,3996,5000_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/9a2cc248-7fe4-4c69-997d-a803955b2bcb.__CR334,224,836,1046_PT0_SX362_V1___.png"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/647606bb-a705-46ff-adb8-c1d807dd0185.__CR81,0,1185,1483_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/445e4888-8b22-4bcc-805c-4c96d17588ac.__CR0,170,1365,1708_PT0_SX362_V1___.jpg"},{"alt":"monitor light bar white","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/21899771-5ad3-4268-929b-a1914ae8bd19.__CR2,0,3816,4775_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/90f30708-e6da-410e-a641-cafaaefc1ed8.__CR899,512,2046,2560_PT0_SX362_V1___.png"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/2652b233-78f2-4590-93e6-f24564d3c871.__CR455,0,2417,3024_PT0_SX362_V1___.jpeg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b7fc9ac7-fa0c-4f5a-a0a8-776bb7669cfe.__CR0,170,1365,1708_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/36748089-fc51-450e-9dc9-d70f36a8bb6e.__CR0,194,1565,1958_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/46a2b8d3-e741-47a3-9663-fff37a55b6fb.__CR0,105,2556,3199_PT0_SX362_V1___.jpeg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/96cc96e3-0094-40ad-9960-5f99d75a9e76.__CR167,388,3775,4725_PT0_SX362_V1___.jpg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/18781915-ccf5-46a6-8bb0-ca179687cfac.__CR0,44,1080,1351_PT0_SX362_V1___.jpeg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ddfa44e0-2c52-4d2f-9da8-4d10b3a82010.__CR108,0,863,1080_PT0_SX362_V1___.jpg"},{"alt":"lamo monitor","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/78f67c7c-e56b-47bf-aad6-da2e605dbf5a.__CR145,0,1151,1440_PT0_SX362_V1___.jpg"},{"alt":"curved monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/09711181-f986-4ff3-8702-0e07d9ae2dd2.__CR1,0,1534,1920_PT0_SX362_V1___.jpg"}]}]},{"id":"aplusSustainabilityStory_feature_div","label":"Sustainability Story","modules":[]},{"id":"aplus_feature_div","label":"Product A+","modules":[{"source":"Product A+","moduleIndex":1,"class":"aplus-v2 desktop celwidget","celWidgetId":"aplus","texts":["Precision Lighting · Lasting Vision Comfort · Quntis ScreenLinear Monitor Light","From creative professionals to late-night experts, everyone deserves a workspace tailored for focus. Whether you’re coding, designing, or deep in a study session, ScreenLinear provides the essential lighting foundation for a more comfortable and productive experience.","Quntis specializes in desk‑centered lighting. For The Hours That Add Up, Quntis delivers lighting that helps reduce eye fatigue while naturally enhancing the atmosphere of your space.","Empowering Eye Care with Quntis Computer Monitor Light Bar","Your digital workspace requires lighting tailored for screens. The ScreenLinear computer monitor desk lamp helps you build healthier visual habits and ensures lasting comfort, hour after hour.","1 No Screen Glare 2 Benefits of Our Light Bar 3 Comfortable Illumination 4 Close to Natural Light","1 Ultimate Stability 2 Auto Dimming 3 Manual Stepless Dimming","Quntis ScreenLinear Monitor Light Bar Series","ScreenLinear Basic Pro","ScreenLinear Glow Pro","ScreenLinear Glow Pink","ScreenLinear Glow Plus","ScreenLinear Classic","ScreenLinear Classic Pro","ScreenLinear RGB","4.6 out of 5 stars 13,607","4.3 out of 5 stars 146","4.7 out of 5 stars 964","4.6 out of 5 stars 531","4.7 out of 5 stars 207","4.4 out of 5 stars 2,384","4.5 out of 5 stars 1,183","$39.95 $ 39 . 95","$55.99 $ 55 . 99","$49.99 $ 49 . 99","$56.99 $ 56 . 99","$31.99 $ 31 . 99","$69.99 $ 69 . 99","Shade Color","Gray","Pink","Black","Lamp Length","16.1'' / 41cm","16.7'' / 42.5cm","16.1' / 41cm","20.1'' / 51cm","15.7'' / 40cm","Use Settings","Touch & Remote","Remote Control","Touch Buttons","Fit for Curved Monitors","Eye Caring","Memory Function","Auto-Dimming Function","2H Timer Function","Backlight Function","Supports Stepless Dimming","Color Temperature","3000K~ 6500K","Gift Guide","Father’s/Mother’s Day/Birthday"],"images":[{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/a2a068fc-3f1f-4d30-bc81-7a99bbc693dd.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/fec877af-587b-45d5-8bcc-9b7156f25e20.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/91851c2e-b1fa-4fe0-9568-dad4ea359ac5.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/0970b1a6-4bc5-493e-8f6b-086368299476.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/30b060a3-67b5-48e5-b365-b05d1ff8d676.__CR0,0,1464,600_PT0_SX1464_V1___.png"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/e9fe4f42-94f7-478e-8539-452791981c30.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/1231ddd7-06d1-483e-9ca0-4ee7b186b898.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"quntis moitor lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/808dee2d-9e0d-4d4e-9ad7-f96c2242030d.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8d0414be-eda5-4cc3-9443-808d6e60de9f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/7489ce39-3e62-454a-aba6-91bbfd800c9a.__CR0,0,1464,600_PT0_SX1464_V1___.png"},{"alt":"monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/d0492cd4-18d9-4259-a2e3-f8a78df07140.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/4dc65ca9-5830-42b3-ba25-be94c9018831.__CR0,0,1464,600_PT0_SX1464_V1___.png"},{"alt":"computer monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/92545a6f-388d-479a-b5e7-49025ddeb2d4.__CR0,0,1464,600_PT0_SX1464_V1___.png"},{"alt":"monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/860bf709-0187-4e17-8057-87bb18e3023a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/684b4279-879f-4724-9176-4d4f7ce64d3f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"quntis monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/30a8a2ed-49ee-4302-affd-ecc3a8f1b90f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"quntis monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/9209f2a8-c25e-4e33-b924-2299ca9ba093.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light curved","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/92fd3d0f-daaa-46c4-a6c2-2bda88984e56.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"quntis computer monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/6d001ccc-a258-49d9-b82e-8f2da6209d71.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/2b0a3103-c171-413e-b44e-cb77b7173d17.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/e0247c94-ea57-43cc-b4e2-81f5263c0910.__CR0,0,200,225_PT0_SX200_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/e6670796-4639-41ad-95db-856183783342.__CR0,0,200,225_PT0_SX200_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/54d9dc90-7a91-48b3-9e04-cfef544f2e31.__CR0,0,200,225_PT0_SX200_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/34b1c1e3-d1af-4199-8d0d-36278e57029d.__CR0,0,200,225_PT0_SX200_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/a1207a72-1ff5-425f-8a4a-8a075fdd842f.__CR0,0,200,225_PT0_SX200_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/16a26fc1-16d3-4ad8-9569-bd0a4c966d49.__CR0,0,200,225_PT0_SX200_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/440d1f66-1552-4880-a023-d0db8a7f3a71.__CR0,0,200,225_PT0_SX200_V1___.jpg"}]}]}],"extractionNote":"A+ text is HTML-visible text plus image alt/src from the Amazon page snapshot; text embedded inside images is not OCR-extracted in this file."},{"asin":"B0F9LBFHJZ","sourceUrl":"https://www.amazon.com/dp/B0F9LBFHJZ","htmlSnapshot":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/B0F9LBFHJZ.html","title":"Quntis Curved Monitor Light Bar 15 RGB Backlight for 34\\"+ Screens, Computer Bar Lights Foldable Dual Light with Color Temperature Brightness Stepless Dimming, No Glare Desk Lamp for Home Office Gaming","bullets":["Designed for Large Ultrawide Curved Monitors: Quntis ScreenLinear Curved RGB monitor light bar extends up to 26\\", designed for curved monitors over 34\\" with 1000R to 3000R curvature or large flat screens. Its patented clamps accommodate ultra-thin to thick screens (up to 3.35\\"). Minimizing dark corners and glare, it contours your monitor’s curve for a seamless, custom-built fit","Versatile Lighting for Every Need: Foldable dual light bar design allows flexible lighting angles. Whether you're engaged in creative design, analyzing multi-screen data, joining video conference, or diving into focused study sessions—from precision-focused work to wide-area desk illumination, with up to 1400 lux at the center and 500 lux across a wider area. Quntis delivers bright, even desk lighting for professional workflows and everyday tasks, making it an ideal lighting solution for curved monitor setups with no screen glare","Eye Care for Long Hours: Prolonged exposure to glare or environments with poor color rendering may cause eye fatigue or discomfort. Quntis desk light bar has passed the IEC/TR 62778 anti-blue light certification(RG0). The 45° asymmetrical optical design directs light onto your desk—not into your eyes or onto the screen. With an ultra-high RA98 CRI, it helps render colors more accurately, effectively reducing the eye strain caused by your eyes constantly adapting to changing brightness","Customize Your Ambiance: The front light offers stepless brightness and color temperature adjustment from 3000K to 6500K, plus 4 preset brightness levels for quick control. Late at night, choose from 15 RGB backlight modes to spark your creativity or immerse yourself in movies and games. This dual lighting creates a soft bias light to the harsh contrast between screen and ambient light. A top pick for late-night gamers and night owls","Smart Desk Lamp Companion: Computer light bar features a precision light sensor that automatically adjusts to an optimal brightness level based on ambient light changes based on ambient light changes. Eliminate distractions from overly bright or dim lighting hands-free, maintaining focus from dusk to late night while protecting your eyes. The power-off memory function restores your last settings after restart. Designed for uninterrupted workflow efficiency","Stable and Space-Saving Monitor Lamp Bar: The reinforced 3-section adjustable clamp with a silicone anti-slip pad provides a secure grip without damaging your screen. Simply adjust the angle and hang it above your monitor. Designed to fit different monitor thicknesses, irregular monitor backs, and 34\\"+ curved monitors, it stays stable on a variety of setups. The included right-angle USB-C cable leaves plenty of room for your webcam, freeing up nearly 90% of your desk space for a clean, minimalist setup","Quntis Curved Monitor Light Bar IM 26 inch (66 cm ) Black"],"aplus":[{"id":"aplusBrandStory_feature_div","label":"Brand Story","modules":[{"source":"Brand Story","moduleIndex":1,"class":"aplus-v2 desktop celwidget","celWidgetId":"aplus","texts":["Quntis Screenlinear Curved RGB","Sculpted for lmmersion","Quntis: Space Lit","Quntis specializes in desk‑centered lighting.","Space Lit is our vision of a well‑lit desk: a three‑layer lighting ecosystem that blends eye‑care science and desk‑setup aesthetics.","For The Hours That Add Up , Quntis delivers lighting that helps reduce eye fatigue while naturally enhancing the atmosphere of your space.","Explore Quntis LumeEase for home, festive, and outdoor lighting.","Quntis IM - Immersed in You","Quntis IM 20.1\\" Grey","240 RGB Lighting Combinations","Quntis IM 15.7\\" Black","Dual-light Immersive Ambiance"],"images":[{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/6b014286-0517-4df2-ae0d-bdde453c76d2.__CR0,0,1919,819_PT0_SX1464_V1___.png"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/5a53be07-658a-4484-91d0-3d9847741186.__CR0,162,600,276_PT0_SX315_V1___.jpg"},{"alt":"Quntis promises","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/bdd6e193-8939-4cf3-bf28-4b2c2400e249.__CR0,1,1120,1402_PT0_SX362_V1___.png"},{"alt":"Award-winning by Quntis","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/d979e4a3-6c08-409c-8d94-6fa1809305c5.__CR0,0,362,453_PT0_SX362_V1___.jpg"},{"alt":"Quntis RGB Pro+ Monitor Light Bar with Remote, 15 Modes Gaming Backlight, 4 Colors & Brightness D...","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/dd9e4533-3db3-4897-a703-df7111f7fc51.__AC_SR166,182___.jpg"},{"alt":"Quntis Monitor Light RGB Backlight, Eye-Care Computer Lights Bar Gaming Office Desk Lamp, 15 Mode...","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/7e4fe21d-4111-4a3c-b6c2-fc8b2cbce897.__AC_SR166,182___.jpg"},{"alt":"Quntis 20\\" Pink RGB Monitor Light Bar, 15 Gaming Backlight Modes, Eye-Care No Glare, Adjustable F...","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8faff461-4c79-4efb-a1dc-e87f2cad1965.__AC_SR166,182___.jpg"},{"alt":"Quntis Monitor Light RGB PRO Backlight, Eye-Care Dual Light Computer Light Bar Gaming Office Desk...","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/202a5654-f6ad-495b-9791-8780aa5c60f3.__AC_SR166,182___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/e046b357-2665-4c33-89b8-ed10d64f226e.__CR0,0,724,906_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/00166e6d-322c-4226-82dc-9b3aa5f95f3a.__CR0,0,724,906_PT0_SX362_V1___.jpg"}]}]},{"id":"aplusSustainabilityStory_feature_div","label":"Sustainability Story","modules":[]},{"id":"aplus_feature_div","label":"Product A+","modules":[{"source":"Product A+","moduleIndex":1,"class":"aplus-v2 desktop celwidget","celWidgetId":"aplus","texts":["The video showcases the product in use. The video guides you through product setup. The video compares multiple products. The video shows the product being unpacked.","monitor light bar","ScreenLinear Curved RGB - Lighting Director of Your Life.","Designed Specifically for 34\\"+ Ultrawide Curved Screens","Advanced Eye Comfort for Marathon Screen Sessions","Will it fit my monitor?","ScreenLinear Curved RGB fits ultrawide curved monitors from 1000R to 3000R, large flat monitors, and multi-monitor setups. The adjustable clamp fits screens up to 3.35\\" thick, while anti-slip silicone pads on the base help keep the light bar stable","Can it help reduce eye strain in low-light environments?","Yes. Quntis uses a 45° asymmetrical optical design to direct light onto your desk, not into your eyes or screen. Its RGB backlighting helps reduce the harsh contrast between your screen and surroundings—ideal for late-night work, gaming","Can the remote control multiple light bars at the same time?","The included remote is pre-paired with the light bar and ready to use out of the box. It can also be paired with multiple light bars of the same model—simply follow our guide to sync your entire setup in under a minute","How adjustable are the brightness and color temperature?","The front light delivers 500–1400 lux, with both brightness and color temperature (3000K–6500K) supporting stepless adjustment and 4 preset levels. The RGB backlight features 15 preset modes; its brightness and color temperature are fixed","Why does the light automatically brighten or dim?","This is Quntis Smart Auto-Dimming. When the light sensor is active, the light bar automatically adjusts brightness based on room’s ambient light, helping maintain consistent eye comfort for hands-free. You can turn this feature off with the remote","Quntis IM Series - Immersed in You.","Quntis Curved IM 26\\"Black","Quntis IM 20.1\\" Grey","Quntis IM 20.1\\" Pink","Quntis IM 15.7\\" Black","Quntis IM 19.7\\" Black","4.7 out of 5 stars 250","4.5 out of 5 stars 408","4.5 out of 5 stars 1,183","4.3 out of 5 stars 291","$59.99 $ 59 . 99","$61.99 $ 61 . 99","$31.99 $ 31 . 99","$42.99 $ 42 . 99","Shade Color","Black","Grey","Pink","Lamp Length","26\\" / 66cm","20.1\\" / 51cm","15.7“ / 40cm","19.7\\" / 50cm","Use Settings","Remote Control","Touch Buttons","Color Temperature","3000K~ 6500K","Color Rendering Index","98Ra",">95Ra","RGB Backlight Modes","15 Modes","24 Modes","Eye Caring","Fit for Curved Monitors","Memory Function","Supports Stepless Dimming","Auto-Dimming Function"],"images":[{"alt":"monitor light bar rgb","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/d884e2ed-4ca1-486f-939d-6684779d5bb0.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light bar with backlight","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/1dc02d76-107f-4fe9-8fa3-c90de5886043.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"computer light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/3d5edfe3-b2ab-4710-88ff-55e980b4639d.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"curved monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/1630ba83-cc80-43e6-83ab-bd7ac8df2d82.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"180° Adjustable Illumination","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/19eba5bb-d8ac-4a0e-aed9-dbce8401aba7.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"Upgraded Curved-Fold Desig","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/fc064040-a8b4-4a57-b716-b94d5e50ccf4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"curved monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/60ef2230-8b26-42bf-8490-1bc65b54b3c2.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"4 Color/Brightness Adjustment","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/a3771b3b-8590-4534-9883-22f76af7512c.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"Smart Auto-dimming","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/2c5f585a-1a11-4325-a356-59c5c499faca.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"Remote Control","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/c508408c-c309-45a8-bcd0-9aae6e413f34.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"remote pairing","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/82af0f32-422d-4da7-9861-916831f48ea2.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"Ra98 CRI","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/9da351c7-be7a-4dac-b9d9-9f4b97d9f666.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"Eye care monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/26eaa0a8-22a0-4135-984f-9457c7a74114.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"No glare","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3f2b2b0-d97f-48e9-82a9-b277f307b090.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/85238f95-b825-4b23-9858-6c85ebae2899.__AC_SR200,225___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/dd9e4533-3db3-4897-a703-df7111f7fc51.__AC_SR200,225___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8faff461-4c79-4efb-a1dc-e87f2cad1965.__AC_SR200,225___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/I/41tMqPuB%2BuL.__AC_SR200,225___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/I/41bGVYwaTVL.__AC_SR200,225___.jpg"}]}]}],"extractionNote":"A+ text is HTML-visible text plus image alt/src from the Amazon page snapshot; text embedded inside images is not OCR-extracted in this file."},{"asin":"B0FDPXHQW8","sourceUrl":"https://www.amazon.com/dp/B0FDPXHQW8","htmlSnapshot":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/B0FDPXHQW8.html","title":"Quntis 32.5\\" Architect Desk Lamps for Office Home Dorm - Eye Care 3 Light Bar 1100LM Bright, Ambient Backlight, Radar Sensor, Remote Control, 2H Timer, Workbench Drafting Reading Video Conference Task","bullets":["Versatile Precision Lighting for Workspaces: Engineered for professionals who demand focus and comfort, the Quntis desk light features a 3-stage adjustable light bar with five pivot points for vertical and horizontal rotation. Dual side bars fully extend to 32.5\\" to uniformly light a 39.37\\" × 70.87\\" workspace or pivot inward to concentrate 1100 LM on tasks. Tailored for multi-monitor setups, drafting, modeling, video calls, or streaming, it delivers a seamless, productivity-driven workflow.","Balanced Front Light + Ambient Backlight for All-Day Comfort: For engineers, programmers, designers, and anyone who spends hours in front of a screen, bright front lighting alone can feel harsh in a dark room. This desk lamp features a wide, dimmable ambient backlight that helps reduce the contrast between your monitor and surrounding space, creating a softer, more balanced lighting environment. The result is a workspace that feels more comfortable, more immersive, and easier to stay focused in during long work sessions.","Seamless Start with Smart Radar Sensing: Begin working the moment you sit down. The sensitive radar sensor detects motion within 29.5 ± 3.9 inches of the monitor light bar, automatically turning it on as you sit and off after 5 minutes when you leave. Perfect for those who move between tasks or step away often, keeping your workspace efficient and distraction-free. Save energy with intelligence that works alongside you.","Effortless Desk Lighting with Dual Control Flexibility: No need to stand up or reach for the adjustable desk lamp—when you don’t want to use the touch panel, simply tap the intuitive desk remote to adjust brightness, color temperature (3000K–6500K), and modes. Easily switch lighting for reading, studying, gaming, or video chatting, and let the 2-hour timer gently remind you to rest your eyes. From crisp cool light for focus to soft warm light for relaxing. (The backlight can only be adjusted for brightness)","Eye-Care, Glare-Free Front Light: 182 precision LEDs with a 45° anti-glare design and a PC diffusion cover deliver ultra-bright, soft, and shadow-free light across your workspace—without reflecting on your screen or shining into your eyes. With a high CRI of 95, the Quntis desktop light renders colors with exceptional accuracy, meeting the demands of professional creators who require true-to-life color representation.","More Than a Lamp, A Professional Lighting Partner: Built with reliable quality to ensure years of use without dimming, flickering, or damage. Smart sensing and advanced optics are seamlessly integrated for exceptional performance. Our table lamp can clamp to most desks up to 2.8 inches thick, freeing up valuable desk space. A thoughtful gift for programmers, crafters, and creators who spend long hours at their desks, it offers the ideal lighting to keep you focused and your eyes healthy.","Quntis 3-Stage Foldable Desk Lamp Studio 32.3 inch (82 cm) Black"],"aplus":[{"id":"aplusBrandStory_feature_div","label":"Brand Story","modules":[]},{"id":"aplusSustainabilityStory_feature_div","label":"Sustainability Story","modules":[]},{"id":"aplus_feature_div","label":"Product A+","modules":[{"source":"Product A+","moduleIndex":1,"class":"aplus-v2 desktop celwidget","celWidgetId":"aplus","texts":["The video showcases the product in use. The video guides you through product setup. The video compares multiple products. The video shows the product being unpacked.","Led Desk Lamp","1 3-Way Foldable 2 Stepless Dimming Light 3 Ultra-Wide Lighting Range 4 Different Modes 5 Multi-Angle Adjustment","How does the radar sensor work?","The radar sensor detects your presence and movement. The lamp turns on automatically when you sit at your desk and switches off after about 5 minutes of inactivity when you leave, offering convenient hands-free operation and helping save energy.","How bright is the Desk Fold Plus?","The Desk Fold Plus delivers 1100 lumens of soft, even, flicker-free light with 182 high-quality LEDs—bright for reading, studying, and daily tasks, yet perfect for long coding sessions or focused work, keeping eyes comfortable and strain-free.","Why is the backlight of Desk Fold Plus important?","Backlighting reduces the contrast between the screen and its surroundings, helping ease visual fatigue. It also adds a soft ambient glow that creates a more immersive and comfortable experience for work or entertainment.","What is the brightness and color temperature range of the Desk Fold Plus?","The front light of offers adjustable brightness and a color temperature range from 3000K to 6500K. The backlight adjusts brightness only. Long-pressing the buttons on the lamp buttons or remote enables stepless dimming for precise control.","Is the Desk Fold Plus easy to install?","Yes. The Desk Fold Plus is easy to install with a removable clamp that fits desks up to 2.8 inches thick. No tools are required, and it can be easily removed and reinstalled wherever needed."],"images":[{"alt":"desk lamp for college dorm room","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/c72bdf43-2c77-4196-b4d9-d9661a4d9436.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"led lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/140f2434-373f-4354-838f-19dec4db0a3b.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"led desk lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/2bfc964f-891c-49b0-9dec-ef0ddb82b03f.__CR0,0,1464,600_PT0_SX1464_V1___.png"},{"alt":"desk lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/137336c1-64bb-432e-a940-610c5989cce3.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/6333918d-c7bf-4c31-b05d-bc7c94cd11e0.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"desk lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ed781912-4a09-45c7-801e-e9861d297219.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"desk light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b0cd1a1d-794d-48d4-a54e-2122b2d02d4f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"motion sensor desk lamps","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/49277ed7-260a-47d8-ae56-ab8c688ec93a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"desk light for video calls","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/015c13b9-c5c4-4a4e-8e86-09f016638f06.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"desk lamps for office","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/32e7e11a-da0f-4f09-8cac-88ba5b8c2802.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"desk lights for home offic","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/05e764dd-53f3-422a-9ad9-5088fec6cb7e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"desk lamp with clamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/25873163-5ca8-409f-a046-afcf2fc9478a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"desk lamp for home","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/a73f7cbb-2bba-4e3d-96cd-ca4fbc82915e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"desk lamp with clamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/49e97093-8de4-4482-8767-5a27d84087d1.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"computer desk light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/4af2ea47-4491-4925-acf2-ebcad38174fe.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"clamp desk lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/c7653073-9d66-4813-a14e-cd5d4d42f56b.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"clip on desk light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/7d8ec79f-e8c0-45a8-aa5b-ae4ae8dab778.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"clamp desk lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/96481f47-1955-42fa-b372-a6784ce0e750.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"college desk lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/61edd4bf-2263-4268-a484-96c32865370a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"dimmable desk lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/eba0ae10-b6b1-4fcb-bfcc-ff29dd6a9664.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"adjustable desk lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/69a576ee-ab05-474f-983a-53eae6de55d7.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/8be481d6-656a-4726-9092-3466aaf7e549.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"adjustable desk lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/e3a1c60a-73cb-45b1-acea-7d424c082cbb.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"led desk lamp with clamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/fac012ce-d567-44e2-b087-448f10117b10.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"computer desk light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/2c5d70cc-b803-44da-a5c5-2af1bbe0338d.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"father day gift","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/5a874570-f13a-4fec-9bd4-5a310d9751a9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"}]}]}],"extractionNote":"A+ text is HTML-visible text plus image alt/src from the Amazon page snapshot; text embedded inside images is not OCR-extracted in this file."},{"asin":"B0F2DGNX7D","sourceUrl":"https://www.amazon.com/dp/B0F2DGNX7D","htmlSnapshot":"/Users/binsmac/Documents/Quntis vi/amazon_product_images/B0F2DGNX7D.html","title":"Quntis Monitor Light Bar with Remote, Eye-Care No Glare, Space Saving Home Office Desk Lamp, White, Stepless Dimming, Easy Setup LED Computer Light Backlight for Curved Gaming Monitors Reading Study","bullets":["Effortless Lighting, Elevated Workspace: Quntis ScreenLinear monitor light bar blends functionality with beauty. Say goodbye to bulky desk lamps and switch to our chic and minimalist screen light bar, embracing minimalism while enjoying enhanced productivity and eye comfort","Two-Way Lighting, One Glare-Free Glow: Our front light and innovative backlight reduce glare from high contrast, ensuring eye comfort. Featuring upgraded eye-care technology, they help eliminate glare and reflections. Whether you're working late or gaming, experience glare-free brightness with over 900 lux of center illumination","CRI 95 - True Colors Day & Night: As night falls, our white monitor lamp becomes your guiding light. Crafted with 84 high-quality LED beads, our computer monitor light delivers even and ample illumination, whether you're reading, gaming, or drawing. Experience more than just comfort with our desk lamp-it restores the true colors of your screen. Whether you're enjoying the nuanced colors of a movie or the vivid visuals of gaming, our desktop light promises the most authentic color experience","Minimalist Lighting - Maximum Space: Our newly designed sliding weighted clip lamp not only saves desk space but also delivers a stylish and tidy lighting experience. It securely hangs damage-free on various monitors, making it a suitable addition to your desktop setup. Whether you're using a sleek white or pink ultra-thin monitor or a 1000R curved monitor, the Quntis curved monitor light enhances the aesthetic appeal and personality of your gaming space","White Remote - Smooth Dimming Magic: The remote boasts a clean design, with each button emitting a soft orange glow that creates a warm feeling. Easily adjust the color temperature and brightness to suit your tasks and moods, from focused mornings to relaxing evenings. Simply long-press the backlight button for an instant boost in backlight brightness (the backlight can only be adjusted for brightness), caring for your eyes as you immerse yourself in a cozy atmosphere for watching movies or reading","Smart Memory, Seamless Lighting Every Time: Our desk light features an intelligent memory function that automatically restores your last brightness and color temperature after a power cut or restart. No repetitive resets—just instant, consistent, and eye-caring illumination for work, study, or relaxation. Designed to save you time and reduce eye strain, it fits perfectly in home, office, or study spaces.","Quntis Monitor Light Bar Glow 16.1 inch (41 cm) White"],"aplus":[{"id":"aplusBrandStory_feature_div","label":"Brand Story","modules":[{"source":"Brand Story","moduleIndex":1,"class":"aplus-v2 desktop celwidget","celWidgetId":"aplus","texts":["ScreenLinear Light Bar Series","Precision Lighting · Immersive Glow · Lasting Vision Comfort","Quntis: Space Lit","Quntis specializes in desk‑centered lighting.","Space Lit is our vision of a well‑lit desk: a three‑layer lighting ecosystem that blends eye‑care science and desk‑setup aesthetics.","For The Hours That Add Up , Quntis delivers lighting that helps reduce eye fatigue while naturally enhancing the atmosphere of your space.","Explore Quntis LumeEase for home, festive, and outdoor lighting.","ScreenLinear Focus","Fit for 15-22'' Monitor","ScreenLinear Glow","Front Back Dual Light","ScreenLinear IM","Immersive RGB Ambiance"],"images":[{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/9ae44649-21ae-4401-b752-4afe3890c764.__CR0,0,1464,625_PT0_SX1464_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/15b7b68d-d378-4c5c-8011-4011547e5f07.__CR0,7,350,161_PT0_SX315_V1___.jpg"},{"alt":"quntis after sales","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/5280a0a6-e351-4679-b25d-26853b37d0ce.__CR0,0,362,453_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/e181fcb0-4c9f-4920-abb2-6952549c5f47.__CR4,0,3996,5000_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/9a2cc248-7fe4-4c69-997d-a803955b2bcb.__CR334,224,836,1046_PT0_SX362_V1___.png"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/647606bb-a705-46ff-adb8-c1d807dd0185.__CR81,0,1185,1483_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/445e4888-8b22-4bcc-805c-4c96d17588ac.__CR0,170,1365,1708_PT0_SX362_V1___.jpg"},{"alt":"monitor light bar white","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/21899771-5ad3-4268-929b-a1914ae8bd19.__CR2,0,3816,4775_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/90f30708-e6da-410e-a641-cafaaefc1ed8.__CR899,512,2046,2560_PT0_SX362_V1___.png"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/2652b233-78f2-4590-93e6-f24564d3c871.__CR455,0,2417,3024_PT0_SX362_V1___.jpeg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/b7fc9ac7-fa0c-4f5a-a0a8-776bb7669cfe.__CR0,170,1365,1708_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/36748089-fc51-450e-9dc9-d70f36a8bb6e.__CR0,194,1565,1958_PT0_SX362_V1___.jpg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/46a2b8d3-e741-47a3-9663-fff37a55b6fb.__CR0,105,2556,3199_PT0_SX362_V1___.jpeg"},{"alt":"","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/96cc96e3-0094-40ad-9960-5f99d75a9e76.__CR167,388,3775,4725_PT0_SX362_V1___.jpg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/18781915-ccf5-46a6-8bb0-ca179687cfac.__CR0,44,1080,1351_PT0_SX362_V1___.jpeg"},{"alt":"monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ddfa44e0-2c52-4d2f-9da8-4d10b3a82010.__CR108,0,863,1080_PT0_SX362_V1___.jpg"},{"alt":"lamo monitor","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/78f67c7c-e56b-47bf-aad6-da2e605dbf5a.__CR145,0,1151,1440_PT0_SX362_V1___.jpg"},{"alt":"curved monitor light","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/09711181-f986-4ff3-8702-0e07d9ae2dd2.__CR1,0,1534,1920_PT0_SX362_V1___.jpg"}]}]},{"id":"aplusSustainabilityStory_feature_div","label":"Sustainability Story","modules":[]},{"id":"aplus_feature_div","label":"Product A+","modules":[{"source":"Product A+","moduleIndex":1,"class":"aplus-v2 desktop celwidget","celWidgetId":"aplus","texts":["Biomimetic Sun Rhythm – 4 Natural Light Stages to Optimize & Sync Your Vision","Enhances Overall Eye Comfort Whether You're Relaxing Or Working"],"images":[{"alt":"light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/4308b8ce-7937-4d66-968b-7a1594996133.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"computer monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/6533a234-4d78-4115-b3cc-fcb53139293f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"Ra95 High CRI","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/f8cdddf7-40c5-4d6a-ae70-c8d079540712.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"4 color brightness adjustment","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/c68cfd80-ef96-4358-95e1-f8acfee9be49.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"Eye-Care No Glare","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/908a7072-6302-4c22-82ee-42fcfa48f679.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"computer desk lamp","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ca38248d-c5e3-4f6e-a0e5-15c4881f20c4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"office home light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/4303b1dd-aab3-438d-8217-c0b348d472c8.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"wokr light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/177daa8a-86f5-4bad-a4ab-eceb891710c4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"Curved Gaming Monitor light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/c887f847-d2bf-4bbf-8208-bb669b866de0.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"computer light bar","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/cec5c91d-14c0-4b27-a3fe-cea1df2ec5b0.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"light bar with remote","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/9f5dba9a-6a1b-4b77-85ee-da632e96ba28.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},{"alt":"monitor light bar white","src":"https://m.media-amazon.com/images/S/aplus-media-library-service-media/c3ba1d9d-8086-4387-b624-b06042edffb1.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"}]}]}],"extractionNote":"A+ text is HTML-visible text plus image alt/src from the Amazon page snapshot; text embedded inside images is not OCR-extracted in this file."}]`),Os=`# Quntis 产品视频字幕内容

# 产品视频片头 \\& 片尾构思

### 方案一

https://www\\.amazon\\.com/vdp/00e6bdd168764c04b4c944ca2303813e?aci=amzn1\\.ive\\.vendor\\.video\\.00e6bdd168764c04b4c944ca2303813e\\&product=B0CRMP3RQT\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_Dhnd6OWYCeOkh

![image\\.png](图片和附件/image%208.png)

![image\\.png](图片和附件/image%2010.png)

00:00 \\- 00:01  Quntis logo 展示，可参考外包装设计

![image\\.png](图片和附件/image%2015.png)

![image\\.png](图片和附件/image%2013.png)

00:01 \\- 00:03  logo从中心消失/由包装上的那条光线变形，变成产品展示图，搭配产品名描述，2218需
                     配上获奖logo。产品名排版如下：
                     *For 17"–34" Various Monitors（字体中等）*
*                     Quntis Monitor Light Bar （字体最大）*
*                     Focus（字体中等）\\- 40 cm \\(15\\.7 inch\\) Black （字体最小*）

![image\\.png](图片和附件/image.png)

![image\\.png](图片和附件/image%209.png)

片尾  Quntis logo 展示，呼应开头，可参考外包装设计



### 方案二

https://youtu\\.be/b1drEOS6AOU?si=RU2Y4aohtUROpmaE

![image\\.png](图片和附件/image%2011.png)

![image\\.png](图片和附件/image%202.png)

![image\\.png](图片和附件/image%207.png)

00:00 \\- 00:08  “聚焦产品灯\\+虚化背景” → “ 灯条逐渐归位至使用场景，全镜头虚化” → “定格照明场景，
                     无虚化，搭配产品名\\+产品描述”。 产品名\\+产品描述排版如下：

*For 17"–34" Various Monitors（字体中等）*
*                     Quntis \\(logo\\) Monitor Light Bar（字体最大）*
*                     Focus \\- 40 cm \\(15\\.7 inch\\) Black （字体最小）*
*                     该产品卖点（一句话，可加可不加）*

![image\\.png](图片和附件/image%2014.png)

![image\\.png](图片和附件/image%206.png)

片尾  先介绍 Quntis 的其他系列，传统模式结尾
        Focus Series – Eye\\-care lighting for long focused hours\\.（用系列色色块）
        Glow Series – Eye\\-care front light with soft ambient backlight glow\\.（用系列色色块）
        IM Series – Eye‑care front light with immersive RGB backlight\\.（用系列色色块）
        Studio Series – Even task lighting for creative workstations\\.（用系列色色块）



### 方案三

87 【🤯Remotion\\+Claude｜小白也能出高级宣传片 \\- 长着熊猫眼的大熊 \\| 小红书 \\- 你的生活兴趣社区】 😆 KCKM0uNuNiki6CK 😆 https://www\\.xiaohongshu\\.com/discovery/item/698d93fa000000001b0142c1?source=webshare\\&xhsshare=pc\\_web\\&xsec\\_token=ABa4AbnIlUVFWPRGRX9ndWfD0D\\-n2wNku7UtHCA54dL7Y=\\&xsec\\_source=pc\\_share

![image\\.png](图片和附件/image%201.png)

![image\\.png](图片和附件/image%204.png)

00:00 \\- 00:04  用用户痛点\\+场景的句子引入
                     “Why compromise on light while focusing？” 
                     “Your space deserves better lighting"
或
00:00 \\- 00:08  用用户痛点\\+场景的句子引入，每个句子后加对应的场景片段

![image\\.png](图片和附件/image%2012.png)

![image\\.png](图片和附件/image%203.png)

00:04 \\- 00:06  转场，跳出 Quntis \\(logo\\) 的 Q；
                     Q 左移，展开变成 Quntis \\(logo\\) \\+ 产品名，如 Quntis Monitor Light Bar Focus 40 cm 
                     \\(15\\.7 inch\\) Black

![image\\.png](图片和附件/image%2016.png)

![image\\.png](图片和附件/image%205.png)

片尾   Quntis \\(logo\\) \\+ 产品名，如 Quntis Monitor Light Bar Focus 40 cm \\(15\\.7 inch\\) Black；
         Q 右移至中心，产品名收缩消失，只剩 Quntis \\(logo\\) 的 Q 在中间 
         或
         Quntis \\(logo\\) 右移至中心，产品名收缩消失，只剩 Quntis \\(logo\\) 在中间 



# Focus 系列

## 2205：Quntis Monitor Light Bar Focus 40 cm \\(15\\.7 inch\\) Black

### 产品视频

https://www\\.amazon\\.com/vdp/00184b2ebeb244e09f8d1c7841f29c04?aci=amzn1\\.ive\\.seller\\.video\\.00184b2ebeb244e09f8d1c7841f29c04\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_NOtzP1ljbZ2Dy

- 场景一：产品视频统一专有片头

- 场景二：普通台灯太刺眼
"Traditional desk lamps are too harsh?"

- 场景三：产品展示
"For 17"–34" curved/flat monitors with 2 adjustment covers"
"To scientifically fit the different thickness of the monitor"
"6\\.6 ft USB\\-C EASY power cable"

- 场景四：灯条按键展示
Brightness Button
Light Sensor
On/Off Button
Color Temperature Button
Auto Dimming Button

- 场景五：产品优点描述
"Asymmetric light source design
 No reflected light effectively reduces eye fatigue" （搭配45°展示）
"Improve Work Efficiency \\& Relieve Eye Strain"

- 场景六：产品视频统一专有片尾


### 开箱

https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_QC6BhH2Q3Bpr8

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
USB\\-C Cable x 1
Hex Key x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Focus 40 cm \\(15\\.7 inch\\) Black

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–86 cm \\(17–34 inch\\) curved / flat monitors
"After Installation: Adjust the proper angle to illuminate the tabletop"

- 场景五：灯条操作演示
"**On/Off Button**: Tap to turn on/off"
"Timer Function: Hold On/Off button for 3s \\(light flash\\) to start 2hr timer, hold again mid\\-countdown to reset\\. One tap off cancels timer"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold to adjust the brightness levels continuously"
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously"
**"Auto Dimming Button**: Tap to activate auto dimming"

### 调节亮度 \\& 色温

https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_stWhnXOFuI84I

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap【Brightness Button】\\- 5%
Tap【Brightness Button】\\- 15%
Tap【Brightness Button】\\- 40%
Tap【Brightness Button】\\- 70%
Tap【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 5%——100%"

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap【Color Temperature Button】\\- 3000K–Warm Light
Tap【Color Temperature Button】\\- 4000K–Neutral Light
Tap【Color Temperature Button】\\- 5000K–Neutral Light
Tap【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K"

- 场景三：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

### 真实桌搭

改名字：https://www\\.amazon\\.com/vdp/0d56e98f0a564b5e8b684b4c6a4a911e?aci=amzn1\\.ive\\.seller\\.video\\.0d56e98f0a564b5e8b684b4c6a4a911e\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_0ASSozWkJAQ77



## 2206：Quntis Monitor Light Bar Focus 52 cm \\(20\\.5 inch\\) Black

### 产品视频

https://www\\.amazon\\.ca/vdp/05f565727f334d3f979b71277a47e875?aci=amzn1\\.ive\\.video\\.05f565727f334d3f979b71277a47e875\\&product=B08HMLKS2N\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_u0BoILCCRucc0

- 场景一：产品视频统一专有片头

- 场景二：片头
"Quntis Monitor Light Bar Focus 52 cm \\(20\\.5 inch\\) Black
For 17"–49" curved / flat monitors
And Thickness of ?"

- 场景三：产品优点描述
"Asymmetric light source design
 No reflected light effectively reduces eye fatigue" （搭配45°展示）

- 场景四：产品使用说明
"1\\. Tap and hold【Brightness Button】
 2\\. Brightness will be steplessly adjusted from 5%\\-100%"
"Color temperature adjustment range from 3000 K–6500 K
 Steplessly adjustment supported
 Warm Light——Cold Light   3000 K–6500 K"

- 场景五：产品宣传语
"Tailored for designers
 Make ideas happen"

- 场景六：片尾\\+展示其他相关产品
"Quntis, Enrich Your Smart Life"

- 场景七：产品视频统一专有片尾


### 开箱 

无视频，参考2205：https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_QC6BhH2Q3Bpr8

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
USB\\-C Cable x 1
Hex Key x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Focus 52 cm \\(20\\.5 inch\\) Black

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–124 cm \\(17–49 inch\\) curved / flat monitors
"After Installation: Adjust the proper angle to illuminate the tabletop"

- 场景五：灯条操作演示
"**On/Off Button**: Tap to turn on/off"
"Timer Function: Hold On/Off button for 3s \\(light flash\\) to start 2hr timer, hold again mid\\-countdown to reset\\. One tap off cancels timer"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold to adjust the brightness levels continuously"
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously"
**"Auto Dimming Button**: Tap to activate auto dimming"

### 调节亮度 \\& 色温

无视频，参考2205：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_stWhnXOFuI84I

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap【Brightness Button】\\- 5%
Tap【Brightness Button】\\- 15%
Tap【Brightness Button】\\- 40%
Tap【Brightness Button】\\- 70%
Tap【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 5%——100%"

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap【Color Temperature Button】\\- 3000K–Warm Light
Tap【Color Temperature Button】\\- 4000K–Neutral Light
Tap【Color Temperature Button】\\- 5000K–Neutral Light
Tap【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K"

- 场景三：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

### 真实桌搭

改名字，找更好的视频补充：https://www\\.amazon\\.ca/vdp/064ad55b83624f67a7798275963dd65d?aci=amzn1\\.ive\\.seller\\.video\\.064ad55b83624f67a7798275963dd65d\\&product=B08HMLKS2N\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_YK5qy7rsO0YaK



## 2213灰：Quntis Monitor Light Bar Focus Dual\\-Control 41 cm \\(16\\.1 inch\\) Grey

### 产品视频

https://www\\.amazon\\.com/vdp/00184b2ebeb244e09f8d1c7841f29c04?aci=amzn1\\.ive\\.seller\\.video\\.00184b2ebeb244e09f8d1c7841f29c04\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_7ewS6c1ioGpkk

- 场景一：产品视频统一专有片头

- 场景二：普通台灯太刺眼
"Traditional desk lamps are too harsh?"

- 场景三：产品展示
"For 17"–21" flat monitors with 2 adjustment covers"
"To scientifically fit the different thickness of the monitor"
"6\\.6 ft USB\\-C EASY power cable"

- 场景四：灯条按键展示
Brightness Button
Light Sensor
On/Off Button
Color Temperature Button
Auto Dimming Button

- 场景五：产品优点描述
"Asymmetric light source design
 No reflected light effectively reduces eye fatigue" （搭配45°展示）
"Improve Work Efficiency \\& Relieve Eye Strain"

- 场景六：产品视频统一专有片尾


### 开箱

https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_ALPvlvZatVIox

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
Wireless Controller x 1
AAA Battery x 2
USB\\-C Cable x 1
Hex Key x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Focus Dual\\-Control 41 cm \\(16\\.1 inch\\) Grey

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
"After Installation: Adjust the proper angle to illuminate the tabletop"

- 场景五：操作演示（2213有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"Timer Function: Hold On/Off button for 3s \\(light flash\\) to start 2hr timer, hold again mid\\-countdown to reset\\. One tap off cancels timer"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold to adjust the brightness levels continuously"
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously"
**"Auto Dimming Button**: Tap to activate auto dimming"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\."

### 调节亮度 \\& 色温

https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 5%
Tap "\\+/–" or【Brightness Button】\\- 15%
Tap "\\+/–" or【Brightness Button】\\- 40%
Tap "\\+/–" or【Brightness Button】\\- 70%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 5%——100%"

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K"

- 场景三：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Focus Dual\\-Control 41 cm \\(16\\.1 inch\\) Grey

- 场景二：连接操作展示
The first one will connect automatically to the remote, the second light needs to connect manually
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\.

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means unpairing complete\\. Adjust brightness/color temp to test\\.

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

改名字：https://www\\.amazon\\.com/vdp/0d56e98f0a564b5e8b684b4c6a4a911e?aci=amzn1\\.ive\\.seller\\.video\\.0d56e98f0a564b5e8b684b4c6a4a911e\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_MFBgjOuIfNTvN



## 2213白：Quntis Monitor Light Bar Focus Dual\\-Control 41 cm \\(16\\.1 inch\\) White

### 产品视频

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/00184b2ebeb244e09f8d1c7841f29c04?aci=amzn1\\.ive\\.seller\\.video\\.00184b2ebeb244e09f8d1c7841f29c04\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_7ewS6c1ioGpkk

- 场景一：产品视频统一专有片头

- 场景二：普通台灯太刺眼
"Traditional desk lamps are too harsh?"

- 场景三：产品展示
"For 17"–21" flat monitors with 2 adjustment covers"
"To scientifically fit the different thickness of the monitor"
"6\\.6 ft USB\\-C EASY power cable"

- 场景四：灯条按键展示
Brightness Button
Light Sensor
On/Off Button
Color Temperature Button
Auto Dimming Button

- 场景五：产品优点描述
"Asymmetric light source design
 No reflected light effectively reduces eye fatigue" （搭配45°展示）
"Improve Work Efficiency \\& Relieve Eye Strain"

- 场景六：产品视频统一专有片尾


### 开箱

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_ALPvlvZatVIox

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
Wireless Controller x 1
AAA Battery x 2
USB\\-C Cable x 1
Hex Key x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Focus Dual\\-Control 41 cm \\(16\\.1 inch\\) White

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
"After Installation: Adjust the proper angle to illuminate the tabletop"

- 场景五：操作演示（2213有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"Timer Function: Hold On/Off button for 3s \\(light flash\\) to start 2hr timer, hold again mid\\-countdown to reset\\. One tap off cancels timer"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold to adjust the brightness levels continuously"
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously"
**"Auto Dimming Button**: Tap to activate auto dimming"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\."

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 5%
Tap "\\+/–" or【Brightness Button】\\- 15%
Tap "\\+/–" or【Brightness Button】\\- 40%
Tap "\\+/–" or【Brightness Button】\\- 70%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 5%——100%"

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K"

- 场景三：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Focus Dual\\-Control 41 cm \\(16\\.1 inch\\) White

- 场景二：连接操作展示
The first one will connect automatically to the remote, the second light needs to connect manually
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\.

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means unpairing complete\\. Adjust brightness/color temp to test\\.

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

改名字：
https://www\\.amazon\\.com/vdp/0c76e94064d44749b6380e9a04c7a1df?aci=amzn1\\.ive\\.seller\\.video\\.0c76e94064d44749b6380e9a04c7a1df\\&product=B0FT2NN862\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_fkRKgDyITiH8J
https://www\\.amazon\\.com/vdp/02f1802d48e340588ea2b6381680956f?aci=amzn1\\.ive\\.seller\\.video\\.02f1802d48e340588ea2b6381680956f\\&product=B0FT2NN862\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_nQ7AKDsQyIgml
https://www\\.amazon\\.com/vdp/0c34cae1133e4ddea8e036d5e6577df3?aci=amzn1\\.ive\\.seller\\.video\\.0c34cae1133e4ddea8e036d5e6577df3\\&product=B0FT2NN862\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_ijxILdRNGt9aK

https://www\\.amazon\\.com/vdp/08d24997fbe64b1f8fb109426510c46d?aci=amzn1\\.ive\\.seller\\.video\\.08d24997fbe64b1f8fb109426510c46d\\&product=B0FT2NN862\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_LQiukpH1pEfJj

https://www\\.amazon\\.com/vdp/087ce2f6bdde43c5a8c3e389f9c6190d?aci=amzn1\\.ive\\.seller\\.video\\.087ce2f6bdde43c5a8c3e389f9c6190d\\&product=B0FT2NN862\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_kSbC9yUTf42d3



## 2208：Quntis Monitor Light Bar Focus 51 cm \\(20\\.1 inch\\) Black

### 产品视频

https://www\\.amazon\\.com/vdp/067638c3a2c24bd8b7601aaad06b6d8b?aci=amzn1\\.ive\\.seller\\.video\\.067638c3a2c24bd8b7601aaad06b6d8b\\&product=B0B6P9J3J5\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_5vqt9L8TkKQ2I

- 场景一：产品视频统一专有片头

- 场景二：桌面灯使用对比
Error   Correct

- 场景三：产品展示
"Asymmetric Light"（搭配45°展示）
"No Screen Glare
 Protect Your Eyes Effectively"
"**100 High Quality LEDs**
 Uniform and Soft Light, No Flare Light"
"51 cm \\(20\\.1 inch\\)"
"Patent Version Upgrade Clip
 Suitable for 17"–49" curved / flat monitors"
"Mini Remote Control"
"Manual Stepless Dimming"（搭配3000 K–6500K 色温条展示）
"Tap to Turn On/Off Auto Dimming Mode"
"Play Games"
"Do Office Work"

- 场景四：产品视频统一专有片尾


### 开箱

https://www\\.amazon\\.com/vdp/04e730010f7a45e9a807aa3937615352?aci=amzn1\\.ive\\.seller\\.video\\.04e730010f7a45e9a807aa3937615352\\&product=B0B6P9J3J5\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_8L5TiLy8lEeXR

- 场景一：外包装盒推出

- 场景二：配件展示

- 场景三：安装展示
"Install the Lamp \\& Adjust the Angle"
"For Irregular Monitors"
"For Irregular Monitor \\(Top View\\)"
"For Thick Monitor"
"For Thin Monitor"
"For Curved\\-Back Monitor \\(Mac Compatible\\)"
"Compatible with 43–124 cm \\(17–49 inch\\) curved / flat monitors"

- 场景四：Wireless controller使用展示
"Tap the CENTER once to turn on/off the light"
"Rotate the OUTER RING to adjust the brightness"
"Rotate the TOP COVER continuously from 3000 K to 6500 K"

- 场景五：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Within 5s of powering on the light bar, hold the top cover and twist the outer ring\\.
2\\. Light flash = pairing complete\\."

### 调节亮度 \\& 色温

无视频，可参考以下脚本

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Rotate the OUTER RING to adjust the brightness"
"Counterclockwise for dimmer, Clockwise for brighter"

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Rotate the TOP COVER continuously from 3000 K to 6500 K"
"Counterclockwise for warmer light, Clockwise for cooler light"

- 场景三：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Focus 51 cm \\(20\\.1 inch\\) Black

- 场景二：连接操作展示
The first one will connect automatically to the remote, the second light needs to connect manually
1\\. Within 5s of powering on light bars, hold the top cover and twist the outer ring\\.
2\\. Light flash = pairing complete\\.

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Within 5s of powering on light bars, hold the top cover and twist the outer ring\\.
2\\. Light flash = unpairing complete\\.

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 如何调节配重夹

考虑找红人重新拍摄 https://www\\.amazon\\.com/vdp/0afedfa92e0f46a982937fcd5aaac0f3?aci=amzn1\\.ive\\.seller\\.video\\.0afedfa92e0f46a982937fcd5aaac0f3\\&product=B0B6P9J3J5\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_TBQZ0ZQRbVTAc

- 步骤演示
Take off the cover
Use Hex Key to tighten the locked screw
Put the cover back

### 真实桌搭

改名字：https://www\\.amazon\\.com/vdp/0fbce18aa48141d7ac1f87ce9596d870?aci=amzn1\\.ive\\.seller\\.video\\.0fbce18aa48141d7ac1f87ce9596d870\\&product=B0B6P9J3J5\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_yVKhfL7na8aeL



## 2212：Quntis Monitor Light Bar Focus 41 cm \\(16\\.1 inch\\) Grey

### 产品视频

https://www\\.amazon\\.com/vdp/01e43260402e46ef8047dac14d5471f2?aci=amzn1\\.ive\\.seller\\.video\\.01e43260402e46ef8047dac14d5471f2\\&product=B0CLNGTPLW\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_51bYPBbSiBtN3

- 场景一：产品视频统一专有片头

- 场景二：开头宣传
"**One Remote Solves It All**
 Control Multiple Monitor Light Bars"

- 场景三：产品展示
"Exclusive Triple\\-Section Clamp"
"**Multi\\-Angle Adjustment**
fit for various screens"
"Irregular Monitors
 Irregular Monitor \\(Top View\\)
 Thick Monitor
 Thin Monitor"
"**Adjustable Pad**
 Designed for Curved\\-Back Monitor
"**Suitable for Almost All Curved Monitors**
Up to 1000R"

- 场景三：产品组装
"Just Seconds for Installation"
"**L\\-Shaped USB C Cable**
 Webcam\\-Friendly Placement Design"（搭配以前的图做对比展示）

- 场景四：Wireless Controller使用展示
"**Wireless Controller LED Display**
 Touch Slide Control"
"**Adjustable Brightness     \\|     Adjustable Color Temperature**
 Touch Slide Control"
"**Auto Dimming**
Tap to activate the optimal brightness"

- 场景五：产品优点展示
"45° Asymmetric Light Sources"（搭配45°展示）
"**84 High\\-Quality LED Beads**
 Blue Light Hazard Free"
"**Ultimate Eye Protection** —— No flicker

- 场景六：产品视频统一专有片尾


### 开箱

https://www\\.amazon\\.com/vdp/0138f0297c7d4e5b8a08558adcfc8984?aci=amzn1\\.ive\\.seller\\.video\\.0138f0297c7d4e5b8a08558adcfc8984\\&product=B0CLNGTPLW\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_AnVdHFMuFMit6

- 场景一：How to Properly Control Montior Light Bar?

- 场景二：遥控电池安装
"Ensure that batteries are installed"

- 场景三：遥控使用展示
"Tap to turn the light bar on/off"
**Brightness Adjustment**
Tap【Brightness Button 图标】to activate brightness mode
"Tap to switch between 5 preset brightness levels"
"Tap and hold to adjust the brightness continuously"
**Color Temperature Adjustment**
Tap【Brightness Button 图标】to activate color temperature mode
"Tap to switch between 4 preset color temperatures"
"Tap and hold to adjust the color temperature continuously from 3000 K to 6500 K"
**Auto Dimming Mode**
Tap【Auto Dimming Button 图标】to activate auto dimming

- 场景四：**How to Pair Light Bar with** A New Remote Control? 
"1\\. Unplug and then plug it back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test

### 调节亮度 \\& 色温

无视频，参考以下脚本或2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 5%
Tap "\\+/–" or【Brightness Button】\\- 15%
Tap "\\+/–" or【Brightness Button】\\- 40%
Tap "\\+/–" or【Brightness Button】\\- 70%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 5%——100%"

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K"

- 场景三：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Focus 41 cm \\(16\\.1 inch\\) Grey

- 场景二：连接操作展示
The first one will connect automatically to the remote, the second light needs to connect manually
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\.

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means unpairing complete\\. Adjust brightness/color temp to test\\.

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

改名字：

https://www\\.amazon\\.com/vdp/0957b07be48c4168931906799b8f49c1?aci=amzn1\\.ive\\.seller\\.video\\.0957b07be48c4168931906799b8f49c1\\&product=B0CLNGTPLW\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_GxZHxEKwt8w7V

https://www\\.amazon\\.com/vdp/03bf9199e97047a1bd0ba76543616186?aci=amzn1\\.ive\\.seller\\.video\\.03bf9199e97047a1bd0ba76543616186\\&product=B0CLNGTPLW\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_7dsuuHBeTJCjG

可采用这个的名字：https://www\\.amazon\\.com/vdp/08724ec1afb747649bf3d1977f2f6ca2?aci=amzn1\\.ive\\.seller\\.video\\.08724ec1afb747649bf3d1977f2f6ca2\\&product=B0CLNGTPLW\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_DzrSu9gXP8kzA



## 3002：Quntis Curved Monitor Light Bar Focus 45 cm \\(17\\.7 inch\\) Black

### 产品视频

https://www\\.amazon\\.com\\.au/vdp/2755288d891d48fe94b69fbd18806a99?aci=amzn1\\.ive\\.seller\\.video\\.2755288d891d48fe94b69fbd18806a99\\&product=B0DBLS9T91\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_1OYxkSD1f5uII

- 场景一：产品视频统一专有片头

- 场景二：开头宣传
"Dual Manipulation
 Light Bar Button Touch Control
 Remote Control"

- 场景三：产品展示
"Four levels of adjustable color temperature
 Five levels of adjustable brightness"
"Auto Sensing Ambient Light Brightness"

- 场景四：简易安装展示
"Flexible and adjustable clamps
Supports screens with a maximum curvature of 1000R"
"L\\-Shaped Power Cord
Maximizing Space for Your Webcam"

- 场景五：产品优点展示
"45° asymmetric light source design"
"Display Index Ra 95
 Restore colours to their true form
 Flicker\\-Free Lighting"

- 场景六：产品视频统一专有片尾


### 开箱

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_ALPvlvZatVIox

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Wireless Controller x 1
AAA Battery x 3
USB\\-C Cable x 1
Hex Key x 1 
User Manual x 1

- 场景三：**How to install** Quntis Curved Monitor Light Bar Focus 45 cm \\(17\\.7 inch\\) Black

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 60–124 cm \\(24–49 inch\\) curved / flat monitors
"After Installation: Adjust the proper angle to illuminate the tabletop"

- 场景五：操作演示（有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"Timer Function: Hold On/Off button for 3s \\(light flash\\) to start 2hr timer, hold again mid\\-countdown to reset\\. One tap off cancels timer"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold the light bar button to stepless adjust brightness
Or slide along the dots on controller for stepless adjustment\\."
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold the light bar button to adjust the color temperature continuously
Or slide along the dots on controller for stepless adjustment\\."
**"Auto Dimming Button**: Tap to activate auto dimming"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Within 5s of power\\-up, tap and hold【Color Temperature Button】and【Brightness Button】on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\."

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap【Brightness Button】\\- 5%
Tap【Brightness Button】\\- 15%
Tap【Brightness Button】\\- 40%
Tap【Brightness Button】\\- 70%
Tap【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 5%——100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap【Color Temperature Button】\\- 3000K–Warm Light
Tap【Color Temperature Button】\\- 4000K–Neutral Light
Tap【Color Temperature Button】\\- 5000K–Neutral Light
Tap【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K–6500K
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Curved Monitor Light Bar Focus 45 cm \\(17\\.7 inch\\) Black

- 场景二：连接操作展示
The first one will connect automatically to the remote, the second light needs to connect manually
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\.

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means unpairing complete\\. Adjust brightness/color temp to test\\.

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

改名字：

[https://www\\.amazon\\.com\\.au/vdp/2a2dc2a359a548b09d85d97ab3b9fe7d?aci=amzn1\\.ive\\.seller\\.video\\.2a2dc2a359a548b09d85d97ab3b9fe7d\\&product=B0DBLS9T91\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_Z8amNpFim9HZu](https://www.amazon.com.au/vdp/2a2dc2a359a548b09d85d97ab3b9fe7d?aci=amzn1.ive.seller.video.2a2dc2a359a548b09d85d97ab3b9fe7d&product=B0DBLS9T91&ref=cm_sw_cp_r_ib_dt_RDBfvs01lMMEi)

https://www\\.amazon\\.com\\.au/vdp/21775355cb37499cbb60b0b462573a70?aci=amzn1\\.ive\\.seller\\.video\\.21775355cb37499cbb60b0b462573a70\\&product=B0DBLS9T91\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_mFk1d9iclgCQj



## 3003：Quntis Monitor Light Bar Focus Radar 52 cm \\(20\\.5 inch\\) Grey

### 产品视频

https://www\\.amazon\\.com/vdp/03fbadee2e194ba19c76b85e9c1346df?aci=amzn1\\.ive\\.seller\\.video\\.03fbadee2e194ba19c76b85e9c1346df\\&product=B0F6C6LGVB\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_sCrptRUaPxOow

- 场景一：产品视频统一专有片头

- 场景二：开头宣传
"**Quntis**
 Monitor Light Bar Focus Radar“

- 场景三：产品展示
"**Eye\\-Care Technology**
 Masterful Illumination"
"**Tap to Glow**
Wireless Operation"
"High Transparency Not Dazzling"
 Five levels of adjustable brightness"
"900 lux Center
 700 lux Area
 500 lux Area"（三层光圈展示）
"No\\-Touch Needed\\!" （搭配距离标注 19\\.7 inch \\| 23\\.6±3\\.9）
移动变形↓
"Smart Radar Auto\\-Sensing
 **No\\-Touch Needed\\!**
 Auto Lighting On/Off"（搭配距离标注 19\\.7 inch \\| 23\\.6±3\\.9）
"Smart Remote Control"（搭配 brightness level 10%–100%，color temperature level 3000 K–6500 K）
"Internal Optical Architecture"

- 场景四：产品优点展示
"**Bright, Uniform Lighting**
 Truly Eye\\-Friendly"（搭配45°展示）
"**Ultra\\-Precise Optical Sensor**
 Effortlessly Adapts to Ambient Light"
"**Ultra\\-Precise Optical Sensor**
 Effortlessly Adapts to Ambient Light"
"**Universal Screen Compatibility**
 Secure \\& Reliable"
"**Smart Radar Sensing**
 Walk Away \\& Lights Turns Off"（搭配 5 min 倒计时）

- 场景五：产品视频统一专有片尾


### 开箱

https://www\\.amazon\\.com/vdp/000fbf37dff9488ab62986cd7ace7753?aci=amzn1\\.ive\\.seller\\.video\\.000fbf37dff9488ab62986cd7ace7753\\&product=B0F6C6LGVB\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_XWMUZjE8zbxpH

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Spacer x 1
Wireless Controller x 1
AAA Battery x 3
USB\\-C Cable x 1
Hex Key x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Focus Radar 52 cm \\(20\\.5 inch\\) Grey
"Remove Film"
"Press and rotate the bottom cover to open"
"Insert 3 AAA batteries"
"Adjustable Clamp"
"Mounted on Screen"
"Insert the Cable"
"Tap to turn the light bar on/off"
"Tap to switch between preset brightness levels" \\| "Slide along the dots for stepless brightness adjustment"
"Tap to switch between preset color temperatures" \\| "Slide along the dots for stepless brightness adjustment"
"Tap to enable the auto dimming"
"Touch【Radar human body sensing 图标】to turn on the Radar Function"
"**Auto\\-On with Motion**
 85±10 cm"
"Auto\\-Off When No Motion"（搭配 5 min 倒计时）

- 场景四：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Within 5s of power\\-up, tap and hold【Color Temperature Button】and【Brightness Button】on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\."

### 调节亮度 \\& 色温

无视频，可参考以下脚本

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap【Brightness Button】\\- 10%
Tap【Brightness Button】\\- 20%
Tap【Brightness Button】\\- 40%
Tap【Brightness Button】\\- 65%
Tap【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 10%–100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap【Color Temperature Button】\\- 3000K–Warm Light
Tap【Color Temperature Button】\\- 3800K–Neutral Light
Tap【Color Temperature Button】\\- 4500K–Neutral Light
Tap【Color Temperature Button】\\- 5500K–Neutral Light
Tap【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K–6500K
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

- 场景四：雷达调节展示
Unique Radar Human Body Sensing Design（固定不动）
"Tap【Radar human body sensing 图标】to turn on the Radar Function\\. 
 Auto on within 75±10 cm, Auto off 5 mins after leaving\\. 
 Tap【Radar human body sensing 图标】again to turn off"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Focus Radar 52 cm \\(20\\.5 inch\\) Grey

- 场景二：连接操作展示
The first one will connect automatically to the remote, the second light needs to connect manually
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold【Color Temperature Button】and【Brightness Button】on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\.

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold【Color Temperature Button】and【Brightness Button】on the controller together\\.
3\\. Wait for the light to flash; steady light means unpairing complete\\. Adjust brightness/color temp to test\\.

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 雷达功能

无视频，可参考以下脚本

- 场景一：功能介绍
"This light bar supports radar human body sensing\\.
 Smart radar body detection offers truly hands\\-free operation\\."

- 场景二：操作步骤
"Tap【Radar human body sensing 图标】to turn on the Radar Function\\. 
 Auto on within 75±10 cm, Auto off 5 mins after leaving\\. 
 Tap【Radar human body sensing 图标】again to turn off"

- 场景三：效果展示
"Auto on \\& off with smart radar detection\\."

### 真实桌搭

缺失视频，找红人拍



## 1214：Quntis Monitor Light Bar Focus 41 cm \\(16\\.1 inch\\) Grey

### 产品视频

无视频，参考2214粉：https://www\\.amazon\\.com/vdp/0bb7e1abc12e4de69955eb20d458933e?aci=amzn1\\.ive\\.seller\\.video\\.0bb7e1abc12e4de69955eb20d458933e\\&product=B0D1RCTJ29\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_6cfRmhckUceDE

- 场景一：产品视频统一专有片头

- 场景二：产品展示
"Adjust Color Temperature"
"Tap 
 4 Levels Color Temperature"
"Tap and hold
 Stepless Dimming"
"Adjust Brightness"
"Tap 
 4 Levels Brightness"
"Tap and hold
 Stepless Dimming"
SECURELY MOUNTING ON VARIOUS MONITORS
"Irregular Monitors
Thick Monitor
Thin Monitor
Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–86 cm \\(17–34 inch\\) curved / flat monitors"

- 场景三：产品优点描述
"No Screen Glare
 Comfort Your Eyes"
"Eye\\-Care Hood Design"
"Minimizing Glare Caused by
Screen\\-Environment Contrast"
"Easy Assembly
Adjustable Lamp Angle"

- 场景四：使用场景展示

- 场景五：产品视频统一专有片尾

### 开箱

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_ALPvlvZatVIox

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
Wireless Controller x 1
AA Battery x 3
USB\\-C Cable x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Focus 41 cm \\(16\\.1 inch\\) Grey

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–86 cm \\(17–34 inch\\) curved / flat monitors
"After Installation: Adjust clip length to fit your monitor\\. Place its front near the screen\\."

- 场景五：操作演示（有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"**Backlight Button**: Tap to turn the backlight on/off\\. 
 Tap and hold to adjust brightness continuously\\. 
 Double\\-tap to cycle through the color temperatures"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold to adjust the brightness continuously"
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Hold【On/Off 图标】\\(4s\\) within 12s to pair\\.
3\\. Front light blinks = pairing done\\. 
4\\. Adjust brightness/color temp to test\\.
5\\. Hold【Brightness Button 图标】\\(7s\\) to unpair"

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 5%
Tap "\\+/–" or【Brightness Button】\\- 15%
Tap "\\+/–" or【Brightness Button】\\- 40%
Tap "\\+/–" or【Brightness Button】\\- 70%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 5%——100%"

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K–6500K"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Focus 41 cm \\(16\\.1 inch\\) Grey

- 场景二：连接操作展示
1\\. Plug in both light bars
    The first one will connect automatically to the remote, the second light needs to 
    connect manually
2\\. Unplug the second light and plug it back in
3\\. Within 12s, tap and hold the power button on the same remote for about 4s
4\\. If the light responds or flashes, the second light is connected
5\\. Now both lights are synced to one remote

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug and plug it back in again
2\\. Within 12s, tap and hold the brightness button for 7s
3\\. If the light responds or flashes, the second light is disconnected

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

无视频，找红人拍摄



# Glow 系列

## 2214灰：Quntis Monitor Light Bar Glow 41 cm \\(16\\.1 inch\\) Grey

### 产品视频

https://www\\.amazon\\.com/vdp/032aa053a216461492f5749724e7ea75?aci=amzn1\\.ive\\.seller\\.video\\.032aa053a216461492f5749724e7ea75\\&product=B0CKRJZBTX\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_GnPveG6YnLLoF

- 场景一：产品视频统一专有片头

- 场景二：开头宣传
"Multi\\-Lamp with one remote"
"Upgraded Backlight Mode"
"ALWAYS PROTECT YOUR EYES
 **3 LIGHT MODES**"
"Design Mode
 Work Mode
 Immersive Mode"

- 场景三：产品展示
"**Patented Sliding Wighted Clip**（固定不动）
For Irregular Monitors
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–53 cm \\(17–21 inch\\) curved / flat monitors

- 场景四：产品功能展示
"Unique Asymmetrical Optical Sources"（搭配45°展示）
"Optimal Uniform Illumation
Bright and Uniform \\| Truly Eye Friendly"
"874 lux Center \\| 500 lux Area \\| 300 lux Area"（三层光圈展示）
"Hood Deisgn"
"Shields eyes from direct glare"
"Brightness Adjustable \\| Color Temperature Adjustable"
"Backlight Brightness Adjustable"

- 场景五：产品视频统一专有片尾


### 开箱

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_ALPvlvZatVIox

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
Wireless Controller x 1
AA Battery x 3
USB\\-C Cable x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Glow 41 cm \\(16\\.1 inch\\) Grey

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–53 cm \\(17–21 inch\\) curved / flat monitors
"After Installation: Adjust clip length to fit your monitor\\. Place its front near the screen\\."

- 场景五：操作演示（有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"**Backlight Button**: Tap to turn the backlight on/off\\. 
 Tap and hold to adjust brightness continuously\\. 
 Double\\-tap to cycle through the color temperatures"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold the light bar button to stepless adjust brightness
Or slide along the dots on controller for stepless adjustment\\."
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold the light bar button to adjust the color temperature continuously
Or slide along the dots on controller for stepless adjustment\\."
**"\\+/– Button**: Tap to increase/decrease brightness or color temperature
Tap and hold for continuous adjustment"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Hold【On/Off 图标】\\(4s\\) within 12s to pair\\.
3\\. Front light blinks = pairing done\\. 
4\\. Adjust brightness/color temp to test\\.
5\\. Hold【Brightness Button 图标】\\(7s\\) to unpair"

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：背光调节展示
Backlight Adjustment（固定不动）
"Tap【Backlight Button 图标】to turn on/off
Double Tap【Backlight Button 图标】\\- 3000K–Warm Light
Double Tap【Backlight Button 图标】\\- 4000K–Neutral Light
Double Tap【Backlight Button 图标】\\- 5000K–Neutral Light
Double Tap【Backlight Button 图标】\\- 6500K–Cool Light"
"Tap and hold【Backlight Button 图标】\\- 3000K——6500K"

- 场景二：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 10%
Tap "\\+/–" or【Brightness Button】\\- 50%
Tap "\\+/–" or【Brightness Button】\\- 75%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 10%——100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K
Or slide along the dots on controller for stepless adjustment\\."

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Glow 41 cm \\(16\\.1 inch\\) Grey

- 场景二：连接操作展示
1\\. Plug in both light bars
    The first one will connect automatically to the remote, the second light needs to 
    connect manually
2\\. Unplug the second light and plug it back in
3\\. Within 12s, tap and hold the power button on the same remote for about 4s
4\\. If the light responds or flashes, the second light is connected
5\\. Now both lights are synced to one remote

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug and plug it back in again
2\\. Within 12s, tap and hold the brightness button for 7s
3\\. If the light responds or flashes, the second light is disconnected

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

命名优化：

https://www\\.amazon\\.com/vdp/022ff1b73431473db68d6784c5484b68?aci=amzn1\\.ive\\.seller\\.video\\.022ff1b73431473db68d6784c5484b68\\&product=B0CKRJZBTX\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_NaUnBDHcE5FnX

https://www\\.amazon\\.com/vdp/0ed1fedfd8de41ed8cbf5ed09f665fac?aci=amzn1\\.ive\\.seller\\.video\\.0ed1fedfd8de41ed8cbf5ed09f665fac\\&product=B0CKRJZBTX\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_sMSJjS7TzUwY3

https://www\\.amazon\\.com/vdp/0d537b3c16c3483390bfcdef0b541fa2?aci=amzn1\\.ive\\.seller\\.video\\.0d537b3c16c3483390bfcdef0b541fa2\\&product=B0CKRJZBTX\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_jU2GIOWdaqSo5

https://www\\.amazon\\.com/vdp/05947df2b09c47a783a99dee67472e74?aci=amzn1\\.ive\\.seller\\.video\\.05947df2b09c47a783a99dee67472e74\\&product=B0CKRJZBTX\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_TQTIsJmSQu3Pm



## 2214粉：Quntis Monitor Light Bar Glow 41 cm \\(16\\.1 inch\\) Pink

### 产品视频

https://www\\.amazon\\.com/vdp/0bb7e1abc12e4de69955eb20d458933e?aci=amzn1\\.ive\\.seller\\.video\\.0bb7e1abc12e4de69955eb20d458933e\\&product=B0D1RCTJ29\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_6cfRmhckUceDE

- 场景一：产品视频统一专有片头

- 场景二：产品展示
"Adjust Color Temperature"
"Tap 
 4 Levels Color Temperature"
"Tap and hold
 Stepless Dimming"
"Adjust Brightness"
"Tap 
 4 Levels Brightness"
"Tap and hold
 Stepless Dimming"
SECURELY MOUNTING ON VARIOUS MONITORS
"Irregular Monitors
Thick Monitor
Thin Monitor
Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–53 cm \\(17–21 inch\\) curved / flat monitors"

- 场景三：产品优点描述
"No Screen Glare
 Comfort Your Eyes"
"Eye\\-Care Hood Design"
"Minimizing Glare Caused by
Screen\\-Environment Contrast"
"Easy Assembly
Adjustable Lamp Angle"

- 场景四：使用场景展示

- 场景五：产品视频统一专有片尾


### 开箱

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_ALPvlvZatVIox

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
Wireless Controller x 1
AA Battery x 3
USB\\-C Cable x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Glow 41 cm \\(16\\.1 inch\\) Pink

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–53 cm \\(17–21 inch\\) curved / flat monitors
"After Installation: Adjust clip length to fit your monitor\\. Place its front near the screen\\."

- 场景五：操作演示（有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"**Backlight Button**: Tap to turn the backlight on/off\\. 
 Tap and hold to adjust brightness continuously\\. 
 Double\\-tap to cycle through the color temperatures"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold the light bar button to stepless adjust brightness
Or slide along the dots on controller for stepless adjustment\\."
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold the light bar button to adjust the color temperature continuously
Or slide along the dots on controller for stepless adjustment\\."
**"\\+/– Button**: Tap to increase/decrease brightness or color temperature
Tap and hold for continuous adjustment"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Hold【On/Off 图标】\\(4s\\) within 12s to pair\\.
3\\. Front light blinks = pairing done\\. 
4\\. Adjust brightness/color temp to test\\.
5\\. Hold【Brightness Button 图标】\\(7s\\) to unpair"

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：背光调节展示
Backlight Adjustment（固定不动）
"Tap【Backlight Button 图标】to turn on/off
Double Tap【Backlight Button 图标】\\- 3000K–Warm Light
Double Tap【Backlight Button 图标】\\- 4000K–Neutral Light
Double Tap【Backlight Button 图标】\\- 5000K–Neutral Light
Double Tap【Backlight Button 图标】\\- 6500K–Cool Light"
"Tap and hold【Backlight Button 图标】\\- 3000K——6500K"

- 场景二：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 10%
Tap "\\+/–" or【Brightness Button】\\- 50%
Tap "\\+/–" or【Brightness Button】\\- 75%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 10%——100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K
Or slide along the dots on controller for stepless adjustment\\."

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Glow 41 cm \\(16\\.1 inch\\) Pink

- 场景二：连接操作展示
1\\. Plug in both light bars
    The first one will connect automatically to the remote, the second light needs to 
    connect manually
2\\. Unplug the second light and plug it back in
3\\. Within 12s, tap and hold the power button on the same remote for about 4s
4\\. If the light responds or flashes, the second light is connected
5\\. Now both lights are synced to one remote

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug and plug it back in again
2\\. Within 12s, tap and hold the brightness button for 7s
3\\. If the light responds or flashes, the second light is disconnected

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

命名优化：https://www\\.amazon\\.com/vdp/0f41e633ba9f4ea8a84daa1a58d229b0?aci=amzn1\\.ive\\.seller\\.video\\.0f41e633ba9f4ea8a84daa1a58d229b0\\&product=B0D1RCTJ29\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_w0T8ZbdqXIL4m



## 2214白：Quntis Monitor Light Bar Glow 41 cm \\(16\\.1 inch\\) White

### 产品视频

https://www\\.amazon\\.com/vdp/0f874f7544f144e1b25fac6a7b945c89?aci=amzn1\\.ive\\.seller\\.video\\.0f874f7544f144e1b25fac6a7b945c89\\&product=B0F2DGNX7D\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_pRQCYWIHPXaxI

- 场景一：产品视频统一专有片头

- 场景二：开头宣传
"**Quntis**
**Glow White**
Monitor Light Bar"
"**Eye\\-Care Technology**
 Masterful Illumination"

- 场景三：产品使用\\&功能
"**Tap to Glow**
Remote Operation"
"High Transparency Not Dazzling"
"Work Mode
 Design Mode
 Immersive Mode"
"**Secure \\& Reliable**
Universal Screen Compatibility
Irregular Monitors
Thick Monitor
Thin Monitor
Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–53 cm \\(17–21 inch\\) curved / flat monitors"
"**Remote Control**
Effortless Brightness \\& Color Control" （搭配 brightness level 10%–100%，color temperature level 3000 K–6500 K）
"**Backlight Ajustment**
Tap and Hold for Stepless Dimming"
"900 lux Center
 500 lux Area
 300 lux Area"（三层光圈展示）
"    **Quntis √     \\|    Other ×**
Gentle On Eyes \\| Harsh No Glare"（搭配45°展示）
"Ultimate Eye Protection \\-\\- No Flicker"

- 场景五：产品视频统一专有片尾

### 开箱

https://www\\.amazon\\.com/vdp/0da8f2bb223345bda2956bed2cdd9809?aci=amzn1\\.ive\\.seller\\.video\\.0da8f2bb223345bda2956bed2cdd9809\\&product=B0F2DGNX7D\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_rZrDG8rr4nlOJ

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
Wireless Controller x 1
AA Battery x 3
USB\\-C Cable x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Glow 41 cm \\(16\\.1 inch\\) Pink
"Installation of Lamps"
"Clamp Adjustable"
"Remove Film"
"Mounted on Screen"
"Adjusting Lamp Angle"
Three Working Modes（保持不动）
"Turn on the light
 Turn on the Frontlight
 Turn on the Backlight"
"Tap Button to Adjust Color Temperature \\| Tap and Hold for Stepless Color Temperature"
"Tap Button to Adjust Brightness \\| Tap and Hold for Stepless Color Brightness"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Hold【On/Off 图标】\\(4s\\) within 12s to pair\\.
3\\. Front light blinks = pairing done\\. 
4\\. Adjust brightness/color temp to test\\.
5\\. Hold【Brightness Button 图标】\\(7s\\) to unpair"

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：背光调节展示
Backlight Adjustment（固定不动）
"Tap【Backlight Button 图标】to turn on/off
Double Tap【Backlight Button 图标】\\- 3000K–Warm Light
Double Tap【Backlight Button 图标】\\- 4000K–Neutral Light
Double Tap【Backlight Button 图标】\\- 5000K–Neutral Light
Double Tap【Backlight Button 图标】\\- 6500K–Cool Light"
"Tap and hold【Backlight Button 图标】\\- 3000K——6500K"

- 场景二：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 10%
Tap "\\+/–" or【Brightness Button】\\- 50%
Tap "\\+/–" or【Brightness Button】\\- 75%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 10%——100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K
Or slide along the dots on controller for stepless adjustment\\."

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Glow 41 cm \\(16\\.1 inch\\) White

- 场景二：连接操作展示
1\\. Plug in both light bars
    The first one will connect automatically to the remote, the second light needs to 
    connect manually
2\\. Unplug the second light and plug it back in
3\\. Within 12s, tap and hold the power button on the same remote for about 4s
4\\. If the light responds or flashes, the second light is connected
5\\. Now both lights are synced to one remote

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug and plug it back in again
2\\. Within 12s, tap and hold the brightness button for 7s
3\\. If the light responds or flashes, the second light is disconnected

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

命名优化

https://www\\.amazon\\.com/vdp/01fbcb188506455197529e67b55a87d9?aci=amzn1\\.ive\\.seller\\.video\\.01fbcb188506455197529e67b55a87d9\\&product=B0F2DGNX7D\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_4XiB1cP1ZM7KM
https://www\\.amazon\\.com/vdp/098c1a23544d4f3695d28581e589cf80?aci=amzn1\\.ive\\.seller\\.video\\.098c1a23544d4f3695d28581e589cf80\\&product=B0F2DGNX7D\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_nVs0BhPr3Tqop

https://www\\.amazon\\.com/vdp/0c96f19d6cbc486ab542e74a99c5fca0?aci=amzn1\\.ive\\.seller\\.video\\.0c96f19d6cbc486ab542e74a99c5fca0\\&product=B0F2DGNX7D\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_4ukdimCVEsXLP



## 2215：Quntis Monitor Light Bar Glow 51 cm \\(20\\.1 inch\\) Grey

### 产品视频

https://www\\.amazon\\.com/vdp/0bc715a921994b1b920da022b0dd9cb1?aci=amzn1\\.ive\\.seller\\.video\\.0bc715a921994b1b920da022b0dd9cb1\\&product=B0CSJSG5CB\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_xGkhdNTFSnl4K

- 场景一：产品视频统一专有片头

- 场景二：开头宣传
"Illuminate Your Desk with Monitor Light Bar
"Upgrade Backlight Mode"
"ALWAYS PROTECT YOUR EYES
 **3 LIGHT MODES**"
"Design Mode
 Work Mode
 Immersive Mode"

- 场景三：产品展示
"**Patented Sliding Wighted Clip**（固定不动）
For Irregular Monitors
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–124 cm \\(17–49 inch\\) curved / flat monitors

- 场景四：产品功能展示
"Unique Asymmetrical Optical Sources"（搭配45°展示）
"Optimal Uniform Illumation
Bright and Uniform \\| Truly Eye Friendly"
"874 lux Center \\| 500 lux Area \\| 300 lux Area"（三层光圈展示）
"Hood Deisgn"
"Shields eyes from direct glare"
"Brightness Adjustable \\| Color Temperature Adjustable"
"Backlight Brightness Adjustable"

- 场景五：产品视频统一专有片尾

### 开箱

https://www\\.amazon\\.com/vdp/0d8e4f4208e24b5badb1b7380a1d2839?aci=amzn1\\.ive\\.seller\\.video\\.0d8e4f4208e24b5badb1b7380a1d2839\\&product=B0CSJSG5CB\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_HM5wJXoF3Gvih

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
Wireless Controller x 1
AA Battery x 3
USB\\-C Cable x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Glow 51 cm \\(20\\.1 inch\\) Grey
"Slide the light bar into the clip"
"For Thin Monitor
 Slide Clip to minimum width"
"For Thick Monitor
 Slide Clip to maximum width"
"For Curved\\-Back Monitor \\(Mac Compatible\\)
 Extend the clamp"
"Compatible with 43–124 cm \\(17–49 inch\\) curved / flat monitors"

- 场景四：操作演示（有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold to adjust the brightness continuously
Or slide along the dots on controller for stepless adjustment\\."
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously
Or slide along the dots on controller for stepless adjustment\\."
**"\\+/– Button**: Tap to increase/decrease brightness or color temperature
Tap and hold for continuous adjustment"
"**Backlight Button**: Tap to turn the backlight on/off\\. 
 Tap and hold to adjust brightness continuously\\. 
 Double\\-tap to cycle through the color temperatures"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Hold【On/Off 图标】\\(4s\\) within 12s to pair\\.
3\\. Front light blinks = pairing done\\. 
4\\. Adjust brightness/color temp to test\\.
5\\. Hold【Brightness Button 图标】\\(7s\\) to unpair"

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：背光调节展示
Backlight Adjustment（固定不动）
"Tap【Backlight Button 图标】to turn on/off
Double Tap【Backlight Button 图标】\\- 3000K–Warm Light
Double Tap【Backlight Button 图标】\\- 4000K–Neutral Light
Double Tap【Backlight Button 图标】\\- 5000K–Neutral Light
Double Tap【Backlight Button 图标】\\- 6500K–Cool Light"
"Tap and hold【Backlight Button 图标】\\- 3000K——6500K"

- 场景二：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 10%
Tap "\\+/–" or【Brightness Button】\\- 50%
Tap "\\+/–" or【Brightness Button】\\- 75%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 10%——100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K
Or slide along the dots on controller for stepless adjustment\\."

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Glow 51 cm \\(20\\.1 inch\\) Grey

- 场景二：连接操作展示
1\\. Plug in both light bars
    The first one will connect automatically to the remote, the second light needs to 
    connect manually
2\\. Unplug the second light and plug it back in
3\\. Within 12s, tap and hold the power button on the same remote for about 4s
4\\. If the light responds or flashes, the second light is connected
5\\. Now both lights are synced to one remote

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug and plug it back in again
2\\. Within 12s, tap and hold the brightness button for 7s
3\\. If the light responds or flashes, the second light is disconnected

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

命名优化：

https://www\\.amazon\\.com/vdp/06e3abdb878d4c428a123b993a9a3840?aci=amzn1\\.ive\\.seller\\.video\\.06e3abdb878d4c428a123b993a9a3840\\&product=B0CSJSG5CB\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_Dadu4pOePfo1Z

https://www\\.amazon\\.com/vdp/05818d21dd4a49c6b21513a4f0f06629?aci=amzn1\\.ive\\.seller\\.video\\.05818d21dd4a49c6b21513a4f0f06629\\&product=B0CSJSG5CB\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_IJ5rSJbojqEnG



## 3001：Quntis Monitor Light Bar Glow 42\\.5 cm \\(16\\.7 inch\\) Grey

### 产品视频

https://www\\.amazon\\.com/vdp/0d81cd63bc584276a2eff85be3417897?aci=amzn1\\.ive\\.seller\\.video\\.0d81cd63bc584276a2eff85be3417897\\&product=B0D6VB9V8C\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_6H5dEYzxmAiun

- 场景一：产品视频统一专有片头

- 场景二：开头宣传
"**Eye\\-Care Technology**
 Masterful Illumination"

- 场景三：产品功能展示
"**Integrated Back Light**
Minimizing Glare Caused by Screen\\-Environment Contrast"
"**Wide Lighting**
Bright and Uniform"（搭配展示 900 lux \\| 700 lux）
"Exclusive Triple\\-Section Clamp"
"Curved Monitor Above 1000R"
"**Securely Mounting on Various Monitors**
Irregular Monitors
Thick Monitor
Thin Monitor
Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–86 cm \\(17–34 inch\\) curved / flat monitors"
"**L\\-Shaped Power Cord**
 Maximizing Space for Your Webcam"
"Backlight Brightness Adjustable"
"Auto Sensing Ambient Light Brightness"
"2 Hr Auto\\-Off Rest Reminder"
"**Flicker\\-Free Lighting**
No Blue Light Hazard \\& No Screen Glare"

- 场景四：产品视频统一专有片尾

### 开箱

重新拍摄，参考以下脚本并加入这段：https://www\\.amazon\\.com/vdp/0cdf6dec832046c4ad6899f0dfbd3c72?aci=amzn1\\.ive\\.seller\\.video\\.0cdf6dec832046c4ad6899f0dfbd3c72\\&product=B0D6VB9V8C\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_U8fkxo4XfeNYx

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Spacer x 1
Wireless Controller x 1
AAA Battery x 3 
USB\\-C Cable x 1
Hex Key x 1 
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar Glow 42\\.5 cm \\(16\\.7 inch\\) Grey

- 场景四：wireless controller电池安装
"To unlock it, make sure thearrow point to the unlocked symbol"
"Method 1: Apply some downward pressure and give it a clockwise twist\\. And\\.\\.\\.click\\! It's open\\."
"Twist counter\\-clockwise to lock it in place\\."
"Method 2: Cradle the remote in one hand\\."
"Press your other palm down and twist clockwise\\."
"And\\.\\.\\.click\\! It's open\\."
"Twist counter\\-clockwise to lock it in place\\."
"Method 3: Press and rotate the bottom cover to open the wireless controller, then lift it off\\."
"Insert 3 AAA batteries, making sure the polarity \\(\\+/−\\) is correct\\."
"Rotate the cover in the opposite direction until it locks"

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–86 cm \\(17–34 inch\\) curved / flat monitors
"After Installation: Adjust the proper angle to illuminate the tabletop"

- 场景五：操作演示（有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"**Backlight Button**: Tap to turn the backlight \\(3000K\\) on/off\\. 
 Tap to switch preset brightness 
 Tap and hold to adjust brightness continuously from 10%–100%\\."
"**Brightness Button**: Tap to switch preset brightness
Slide along the dots for stepless adjustment\\."
"**Color Temperature Button**: Tap to switch preset color temperature
Slide along the dots for stepless adjustment\\."
**"Auto Dimming Button**: Tap to activate auto dimming"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Within 5s of power\\-up, tap and hold【Color Temperature Button图标】and【Brightness Button图标】on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\."

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：背光调节展示
Backlight Adjustment（固定不动）
"Tap【Backlight Button 图标】to turn on/off
 Tap【Backlight Button 图标】\\- on
 Tap【Backlight Button 图标】\\- 20%
 Tap【Backlight Button 图标】\\- 60%
 Tap【Backlight Button 图标】\\- 100%
"Tap and hold【Backlight Button 图标】\\- 10%——100%"

- 场景二：亮度调节展示
Brightness Adjustment（固定不动）
"Tap【Brightness Button】\\- 10%
Tap【Brightness Button】\\- 20%
Tap【Brightness Button】\\- 40%
Tap【Brightness Button】\\- 65%
Tap【Brightness Button】\\- 100%"
"Slide along the dots for stepless adjustment \\- 10%——100%"

- 场景三：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap【Color Temperature Button】\\- 3000K–Warm Light
Tap【Color Temperature Button】\\- 3800K–Neutral Light
Tap【Color Temperature Button】\\- 4500K–Neutral Light
Tap【Color Temperature Button】\\- 5500K–Neutral Light
Tap【Color Temperature Button】\\- 6500K–Cool Light"
"Slide along the dots for stepless adjustment \\- 3000K——6500K"

- 场景四：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar Glow 42\\.5 cm \\(16\\.7 inch\\) Grey

- 场景二：连接操作展示
The first one will connect automatically to the remote, the second light needs to connect manually
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\.

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold "\\+" and "\\-" on the controller together\\.
3\\. Wait for the light to flash; steady light means unpairing complete\\. Adjust brightness/color temp to test\\.

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

无视频，找红人拍摄



## 2217：Quntis Curved Monitor Light Bar Glow 66 cm \\(26 inch\\) Black

### 产品视频

https://www\\.amazon\\.com/vdp/04cef41eccc04b9eb47c6f352486258f?aci=amzn1\\.ive\\.seller\\.video\\.04cef41eccc04b9eb47c6f352486258f\\&product=B0F9L9377N\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_uj3dELvmEKe7b

- 场景一：产品视频统一专有片头

- 场景二：开头产品名
"Quntis Curved Monitor Light Bar Glow"

- 场景三：产品功能展示
"Backlight Design"
"**Eye\\-Care Technology**
 Masterful Illumination"
"**Tap to Glow**
 Wireless Operation"
"**Foldable Dual Head Design**
 Easily Illuminate Desktop Areas
500 lux \\| 800 lux \\| 1100 lux \\| 1400 lux（四层光环展示）
"**Three Working Modes**
 Design Mode
 Work Mode
 Immersive Mode"
"**Smart Remote Control**
 Effortless Color \\& Brightness Control" （搭配 brightness level 10%–100%，color temperature level 3000 K–6500 K）
"Internal Optical Architecture"
"**Gentle** on Eyes"（搭配45°光展示）
"**Ultra\\-Precise Optical Sensor**
 Effortlessly Adapts to Ambient Light"
"**Universal** screen Compatibility
 Secure \\& Reliable"
"Ultimate Eye Protection \\-\\- No Flicker"

- 场景四：产品视频统一专有片尾

### 开箱

https://www\\.amazon\\.com/vdp/02535cf3751743eca9837c3e5a88e388?aci=amzn1\\.ive\\.seller\\.video\\.02535cf3751743eca9837c3e5a88e388\\&product=B0F9L9377N\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_hIvO68fcy4n1B

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Wireless Controller x 1
AA Battery x 3
USB\\-C Cable x 1
Power Adapter x 1
User Manual x 1

- 场景三：**How to install** Quntis Curved Monitor Light Bar Glow 66 cm \\(26 inch\\) Black
"Remove Film"
"Press and rotate the bottom cover to open"
"Insert 3 AA batteries"
"Rotate the cover to lock"
"Insert the cable into the adapter"
"Adjustable Clamp"
"Expanding Light Bar Head
"Mounted on Screen"
"Insert the Cable"
"Plug in the Power Supply"

- 场景四：操作演示（有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"**Three Working Modes**
 Turn on the Light
 Turn on the Frontlight
 Turn on the Backlight"
"**Color Temperature Button**: Tap to switch preset color temperature
Slide along the dots for stepless adjustment\\."
"**Brightness Button**: Tap to switch preset brightness
Slide along the dots for stepless adjustment\\."
"**Backlight Button**: Tap to turn the backlight on/off\\. 
 Tap and hold to adjust brightness continuously
 Or Double\\-tap to cycle through the color temperatures"
**"\\+/– Button**: Tap to increase/decrease brightness or color temperature
Tap and hold for continuous adjustment"
**"Auto Dimming Button**: Tap to activate auto dimming"

- 场景五：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Hold【On/Off 图标】\\(4s\\) within 12s to pair\\.
3\\. Front light blinks = pairing done\\. 
4\\. Adjust brightness/color temp to test\\.
5\\. Hold【Brightness Button 图标】\\(7s\\) to unpair"

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：背光调节展示
Backlight Adjustment（固定不动）
"Tap【Backlight Button 图标】to turn on/off
Double Tap【Backlight Button 图标】\\- 3000K–Warm Light
Double Tap【Backlight Button 图标】\\- 4000K–Neutral Light
Double Tap【Backlight Button 图标】\\- 5000K–Neutral Light
Double Tap【Backlight Button 图标】\\- 6500K–Cool Light"
"Tap and hold【Backlight Button 图标】\\- 3000K——6500K"

- 场景二：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 10%
Tap "\\+/–" or【Brightness Button】\\- 50%
Tap "\\+/–" or【Brightness Button】\\- 75%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 10%——100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K
Or slide along the dots on controller for stepless adjustment\\."

- 场景四：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Curved Monitor Light Bar Glow 66 cm \\(26 inch\\) Black

- 场景二：连接操作展示
1\\. Plug in both light bars
    The first one will connect automatically to the remote, the second light needs to 
    connect manually
2\\. Unplug the second light and plug it back in
3\\. Within 12s, tap and hold the power button on the same remote for about 4s
4\\. If the light responds or flashes, the second light is connected
5\\. Now both lights are synced to one remote

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug and plug it back in again
2\\. Within 12s, tap and hold the brightness button for 7s
3\\. If the light responds or flashes, the second light is disconnected

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

无视频，找红人拍摄



# IM 系列

## 1201：Quntis Monitor Light Bar IM 40 cm \\(15\\.7 inch\\) Black

### 产品视频

https://www\\.amazon\\.com/vdp/0a49ad159a51438a99940c7aa9885b8a?aci=amzn1\\.ive\\.seller\\.video\\.0a49ad159a51438a99940c7aa9885b8a\\&product=B0C5JMWZC9\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_6FoX51E4ryRG8

- 场景一：产品视频统一专有片头

- 场景二：开头产品名
"Quntis Monitor Light Bar IM"

- 场景三：产品功能使用展示
"Working \\| Leisure"
"EASY TO INSTALL"
"FRONT \\& BACK
DUAL LIGHT SOURCE"
"Exciting Lighting Experience"
"Minimizing Light\\-Dark Contrast
 Enhanced Eye Comfort"
"No Blue Light Hazard
 No Screen Glare
 Flicker\\-Free Lighting"
"6500K \\| 4000K \\| 3000K"
"MULTICOLOR GRADIENT
 MONOCHROME
 DUAL\\-COLOR GTADIENT"

- 场景四：产品视频统一专有片尾

### 开箱

https://www\\.amazon\\.com/vdp/0270940a57804873a86c5213e4628363?aci=amzn1\\.ive\\.seller\\.video\\.0270940a57804873a86c5213e4628363\\&product=B0C5JMWZC9\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_XzTez83g2VmWv

- 场景一：外包装盒推出

- 场景二：配件展示
Accessory List：
Light Bar x 1
Hex Key x 1
USB\\-C Cable x 1
User Manual x 1

- 场景三：安装
"1s Installation"
"Plug in USB\\-C"

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
"After Installation: Adjust the proper angle to illuminate the tabletop"

- 场景五：操作演示
"**RGB Button**: Tap to turn on"
Tap again to switch between the 15 RGB modes
Tap and hold to turn off"
"**On/Off Button**: Tap to turn on/off
Tap and hold to change the color temperature
Tap twice to adjust the brightness\\."

### 调节亮度 \\& 色温

https://www\\.amazon\\.com/vdp/010c0745524c4103ae7af56192de608f?aci=amzn1\\.ive\\.seller\\.video\\.010c0745524c4103ae7af56192de608f\\&product=B0C5JMWZC9\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_TY4Yhb7e4mvLo

- 场景一：色温调节展示
"Color Temperature Adjustment（固定不动）
 Tap【On/Off Button】（固定不动）
 3000K–Warm Light
 4000K–Neutral Light
 6500K–Cool Light"

- 场景二：亮度调节展示
"Brightness Adjustment（固定不动）
 Quick Double Tap【On/Off Button】（固定不动）
 100%
 50%
 25%"

- 场景三：RGB背光调节展示
"RGB Backlight Adjustment（固定不动）
 Tap【RGB Button 图标】（固定不动）
 Multicolor Gradient Mode
 Dual\\-Color Gradient
 Monochrome

### 真实桌搭

命名更新：https://www\\.amazon\\.com/vdp/02be43e4257c46fbaf9f8fbacd7ba4b8?aci=amzn1\\.ive\\.seller\\.video\\.02be43e4257c46fbaf9f8fbacd7ba4b8\\&product=B0C5JMWZC9\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_rl1RTmUy77pXk



## 0211：Quntis Monitor Light Bar IM 50 cm \\(19\\.7 inch\\) Black

### 产品视频

https://www\\.amazon\\.com/vdp/0d98e183f7ac43a3b63eddc7df576122?aci=amzn1\\.ive\\.seller\\.video\\.0d98e183f7ac43a3b63eddc7df576122\\&product=B0CSNK9C16\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_7VSEVyxi6Vzui

- 场景一：产品视频统一专有片头

- 场景二：开头产品名
"Quntis Monitor Light Bar IM"

- 场景三：产品功能使用展示
"Working \\| Leisure"
"EASY TO INSTALL"
"FRONT \\& BACK
DUAL LIGHT SOURCE"
"Exciting Lighting Experience"
"Minimizing Light\\-Dark Contrast
 Enhanced Eye Comfort"
"No Blue Light Hazard
 No Screen Glare
 Flicker\\-Free Lighting"
"Warm White \\| Neutral White \\| Cool White"
"MULTICOLOR GRADIENT
 MONOCHROME
 DUAL\\-COLOR GTADIENT"

- 场景四：产品视频统一专有片尾

### 开箱

无视频，参考1201：https://www\\.amazon\\.com/vdp/0270940a57804873a86c5213e4628363?aci=amzn1\\.ive\\.seller\\.video\\.0270940a57804873a86c5213e4628363\\&product=B0C5JMWZC9\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_XzTez83g2VmWv

- 场景一：外包装盒推出

- 场景二：配件展示
Accessory List：
Light Bar x 1
USB\\-C Cable x 1
User Manual x 1

- 场景三：安装
1\\. Thread the cable through the hole in the clip\\. 
2\\. Snap the light bar into the clip\\. 
3\\. Plug into 5V/1A or higher power source
4\\. After Installation: Adjust the proper angle to illuminate the tabletop
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
"After Installation: Adjust the proper angle to illuminate the tabletop"

- 场景五：操作演示
"**RGB Button**: Tap to turn on"
Tap again to switch between the 15 RGB modes
Tap and hold to turn off"
"**W On/Off Button**: Tap to turn on/off
Tap and hold to change the color temperature
Tap twice to adjust the brightness\\.
Tap and hold to turn off\\."

### 调节亮度 \\& 色温

无视频，参考1201：https://www\\.amazon\\.com/vdp/010c0745524c4103ae7af56192de608f?aci=amzn1\\.ive\\.seller\\.video\\.010c0745524c4103ae7af56192de608f\\&product=B0C5JMWZC9\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_TY4Yhb7e4mvLo

- 场景一：色温调节展示
"Color Temperature Adjustment（固定不动）
 Tap【W On/Off Button】（固定不动）
 Warm White
 Neutral White
 Cool White"

- 场景二：亮度调节展示
"Brightness Adjustment（固定不动）
 Quick Double Tap【W On/Off Button】（固定不动）
 30%
 50%
 100%"

- 场景三：RGB背光调节展示
"RGB Backlight Adjustment（固定不动）
 Tap【RGB Button 图标】（固定不动）
 15 RGB Modes"

### 真实桌搭

无视频，找红人拍摄



## 2216灰：Quntis Monitor Light Bar IM 51 cm \\(20\\.1 inch\\) Grey

### 产品视频

https://www\\.amazon\\.com/vdp/07045d520be0465eaad46205ba2fbf8b?aci=amzn1\\.ive\\.seller\\.video\\.07045d520be0465eaad46205ba2fbf8b\\&product=B0D5BBPJ23\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_sqpaSzerGEzAX

- 场景一：产品视频统一专有片头

- 场景二：开头产品名
"Quntis Monitor Light Bar IM"

- 场景三：产品功能使用、场景展示
"874 lux Center \\| 500 lux Area \\| 300 lux Area"
"Multicolor Backlight
 Dual\\-Color Backlight
 Monochrome Backlight"
"Designed for PC Gaming
 Atmosphere Enhance"（搭配展示灯管长度 51 cm）
"Help You Win Each Gaming Competition"
"3000K, Immersive Mode \\| 4000K, Reading Mode \\| 
 5000K, Watching Mode \\| 6500K, Working Mode"
"**Patented Sliding Weighted Clip**
Irregular Monitors
Thick Monitor
Thin Monitor
Curved\\-Back Monitor \\(Mac Compatible\\)"
"Asymmetrical Optical Design
 No Glare Free, Not Dazzling"（搭配45°展示）
"88 No Flicker LED Beads
 Ra\\>95, Reproduce True\\-to\\-life Colors"
"Stepless Brightness Adjustable \\| Color Temperature Adjustable"
"No Blue Light Hazard
 No Screen Glare
 Flicker\\-Free Lighting"

- 场景四：产品视频统一专有片尾

### 开箱

无视频，参考2215：https://www\\.amazon\\.com/vdp/0d8e4f4208e24b5badb1b7380a1d2839?aci=amzn1\\.ive\\.seller\\.video\\.0d8e4f4208e24b5badb1b7380a1d2839\\&product=B0CSJSG5CB\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_HM5wJXoF3Gvih

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
Wireless Controller x 1
AA Battery x 3
USB\\-C Cable x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar IM 51 cm \\(20\\.1 inch\\) Grey
"Slide the light bar into the clip"
"For Thin Monitor
 Slide Clip to minimum width"
"For Thick Monitor
 Slide Clip to maximum width"
"For Curved\\-Back Monitor \\(Mac Compatible\\)
 Extend the clamp"
"Compatible with 43–124 cm \\(17–49 inch\\) curved / flat monitors"

- 场景四：操作演示（有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold to adjust brightness continuously
Or slide along the dots on controller for stepless adjustment\\."
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously
Or slide along the dots on controller for stepless adjustment\\."
**"\\+/– Button**: Tap to increase/decrease brightness or color temperature
Tap and hold for continuous adjustment"
"**Backlight Button**: Tap to turn the backlight on\\.
 Tap again to switch between the RGB modes\\.
 Tap and hold to turn the backlight off"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Hold【On/Off 图标】\\(4s\\) within 12s to pair\\.
3\\. Front light blinks = pairing done\\. 
4\\. Adjust brightness/color temp to test\\.
5\\. Hold【Brightness Button 图标】\\(7s\\) to unpair"

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 10%
Tap "\\+/–" or【Brightness Button】\\- 50%
Tap "\\+/–" or【Brightness Button】\\- 75%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 10%——100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：RGB背光调节展示
"RGB Backlight Adjustment（固定不动）
 Tap【Backlight Button 图标】（固定不动）
 Tap again to switch between the 15 RGB modes"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar IM 51 cm \\(20\\.1 inch\\) Grey

- 场景二：连接操作展示
1\\. Plug in both light bars
    The first one will connect automatically to the remote, the second light needs to 
    connect manually
2\\. Unplug the second light and plug it back in
3\\. Within 12s, tap and hold the power button on the same remote for about 4s
4\\. If the light responds or flashes, the second light is connected
5\\. Now both lights are synced to one remote

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug and plug it back in again
2\\. Within 12s, tap and hold the brightness button for 7s
3\\. If the light responds or flashes, the second light is disconnected

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

命名优化：https://www\\.amazon\\.com/vdp/094a407847024df2910c0fd7e12e58ee?aci=amzn1\\.ive\\.seller\\.video\\.094a407847024df2910c0fd7e12e58ee\\&product=B0D5BBPJ23\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_E9yGwVqeoM1Es



## 2216粉：Quntis Monitor Light Bar IM 51 cm \\(20\\.1 inch\\) Pink

### 产品视频

https://www\\.amazon\\.com/vdp/019d99dfd26c4583b65c5763e9db165f?aci=amzn1\\.ive\\.seller\\.video\\.019d99dfd26c4583b65c5763e9db165f\\&product=B0F62SCN6Q\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_Szlin78zgfOyL

- 场景一：产品视频统一专有片头

- 场景二：开头产品名
"Quntis Monitor Light Bar IM Pink"

- 场景三：产品功能使用、场景展示
"**88 Premium LEDs**
 400lm Bright Output"
"**15 RGB Effects**
 More Immersive Gaming \\&
 Media Experience"
"**15 **
 RGB Effects
 · Monochrome
 · Dual\\-Color Gradient
 · Multicolor Gradient"
"**Retractable Clamp Arm**
Irregular Monitors
Thick Monitor
Thin Monitor
Curved\\-Back Monitor \\(Mac Compatible\\)"
"**45° Asymmetrical Optics**
Glare free design for zero screen reflection
with UGR\\<16"
"**High Brightness for Any Task**
 900 lux \\| 657 lux \\| 440 lux"（三层光圈展示）
"**Ra\\>95 **High Color Rendering Index"
"**2\\.4 GHz** Remote
 Controls Multiple Devices Simultaneously"
"**4 Brightness Levels**
 Stepless Control
 10%, 50%, 75%, 100%"
"**4 Color Temperature**
 3000K \\| 4000K \\| 5000K \\| 6500K"

- 场景四：产品视频统一专有片尾

### 开箱

无视频，参考2215：https://www\\.amazon\\.com/vdp/0d8e4f4208e24b5badb1b7380a1d2839?aci=amzn1\\.ive\\.seller\\.video\\.0d8e4f4208e24b5badb1b7380a1d2839\\&product=B0CSJSG5CB\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_HM5wJXoF3Gvih

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Clip x 1
Wireless Controller x 1
AA Battery x 3
USB\\-C Cable x 1
User Manual x 1

- 场景三：**How to install** Quntis Monitor Light Bar IM 51 cm \\(20\\.1 inch\\) Pink
"Slide the light bar into the clip"
"For Thin Monitor
 Slide Clip to minimum width"
"For Thick Monitor
 Slide Clip to maximum width"
"For Curved\\-Back Monitor \\(Mac Compatible\\)
 Extend the clamp"
"Compatible with 43–124 cm \\(17–49 inch\\) curved / flat monitors"

- 场景四：操作演示（有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold to adjust brightness continuously
Or slide along the dots on controller for stepless adjustment\\."
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously
Or slide along the dots on controller for stepless adjustment\\."
**"\\+/– Button**: Tap to increase/decrease brightness or color temperature
Tap and hold for continuous adjustment"
"**Backlight Button**: Tap to turn the backlight on\\.
 Tap again to switch between the RGB modes\\.
 Tap and hold to turn the backlight off"

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Hold【On/Off 图标】\\(4s\\) within 12s to pair\\.
3\\. Front light blinks = pairing done\\. 
4\\. Adjust brightness/color temp to test\\.
5\\. Hold【Brightness Button 图标】\\(7s\\) to unpair"

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 10%
Tap "\\+/–" or【Brightness Button】\\- 50%
Tap "\\+/–" or【Brightness Button】\\- 75%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 10%——100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：RGB背光调节展示
"RGB Backlight Adjustment（固定不动）
 Tap【Backlight Button 图标】（固定不动）
 Tap again to switch between the 15 RGB modes"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Monitor Light Bar IM 51 cm \\(20\\.1 inch\\) Pink

- 场景二：连接操作展示
1\\. Plug in both light bars
    The first one will connect automatically to the remote, the second light needs to 
    connect manually
2\\. Unplug the second light and plug it back in
3\\. Within 12s, tap and hold the power button on the same remote for about 4s
4\\. If the light responds or flashes, the second light is connected
5\\. Now both lights are synced to one remote

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug and plug it back in again
2\\. Within 12s, tap and hold the brightness button for 7s
3\\. If the light responds or flashes, the second light is disconnected

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

无视频，找红人拍摄



## 2218：Quntis Curved Monitor Light Bar IM 66 cm \\(26 inch\\) Black

### 产品视频

https://www\\.amazon\\.com/vdp/00a2f9538e0a48b0a811669d9247dd02?aci=amzn1\\.ive\\.seller\\.video\\.00a2f9538e0a48b0a811669d9247dd02\\&product=B0F9LBFHJZ\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_hB57HFl8WfZw1

- 场景一：产品视频统一专有片头

- 场景二：开头产品名
"Quntis Curved Monitor Light Bar IM 66 cm \\(26 inch\\) Black"

- 场景三：功能展示
"**Two Light **Bar Options for You"
"**Eye\\-Care Technology**
 Masterful Illumination"
"**Tap to Glow**
 Wireless Operation"
"**Foldable Dual Head Design**
 Easily Illuminate Desktop Areas
500 lux \\| 800 lux \\| 1100 lux \\| 1400 lux（四层光环展示）
"**Three Working Modes**
 Design Mode
 Work Mode
 Immersive Mode"
"**Smart Remote Control**
 Effortless Color \\& Brightness Control" （搭配 brightness level 10%–100%，color temperature level 3000 K–6500 K）
"Internal Optical Architecture"
"**Gentle** on Eyes"（搭配45°光展示）
"**Ultra\\-Precise Optical Sensor**
 Effortlessly Adapts to Ambient Light"
"**Universal** screen Compatibility
 Secure \\& Reliable"
"Ultimate Eye Protection \\-\\- No Flicker"

- 场景四：产品视频统一专有片尾

### 开箱

无视频，参考2217：https://www\\.amazon\\.com/vdp/02535cf3751743eca9837c3e5a88e388?aci=amzn1\\.ive\\.seller\\.video\\.02535cf3751743eca9837c3e5a88e388\\&product=B0F9L9377N\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_hIvO68fcy4n1B

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Wireless Controller x 1
AA Battery x 3
USB\\-C Cable x 1
Adapter x 1
User Manual x 1

- 场景三：**How to install** Quntis Curved Monitor Light Bar IM 66 cm \\(26 inch\\) Black
"Remove Film"
"Press and rotate the bottom cover to open"
"Insert 3 AA batteries"
"Rotate the cover to lock"
"Insert the cable into the adapter"
"Adjustable Clamp"
"Expanding Light Bar Head
"Mounted on Screen"
"Insert the Cable"
"Plug in the Power Supply"

- 场景四：操作演示（有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"**Three Working Modes**
 Turn on the Light
 Turn on the Frontlight
 Turn on the Backlight"
"**Color Temperature Button**: Tap to switch preset color temperature
Slide along the dots for stepless adjustment\\."
"**Brightness Button**: Tap to switch preset brightness
Slide along the dots for stepless adjustment\\."
"**Backlight Button**: Tap to turn the backlight on
 Tap again to switch between the RGB modes
 Tap and hold to turn the backlight off"
 Or Double\\-tap to cycle through the color temperatures"
**"\\+/– Button**: Tap to increase/decrease brightness or color temperature
Tap and hold for continuous adjustment"
**"Auto Dimming Button**: Tap to activate auto dimming"

- 场景五：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Hold【On/Off 图标】\\(4s\\) within 12s to pair\\.
3\\. Front light blinks = pairing done\\. 
4\\. Adjust brightness/color temp to test\\.
5\\. Hold【Brightness Button 图标】\\(5s\\) to unpair"

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：RGB背光调节展示
"RGB Backlight Adjustment（固定不动）
 Tap【Backlight Button 图标】（固定不动）
 Tap again to switch between the 15 RGB modes"

- 场景二：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 10%
Tap "\\+/–" or【Brightness Button】\\- 50%
Tap "\\+/–" or【Brightness Button】\\- 75%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 10%——100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 4000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5000K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K
Or slide along the dots on controller for stepless adjustment\\."

- 场景四：自动调节展示
Unique Automatic Dimming Design（固定不动）
"Tap【Auto Dimming Button】\\- Automatically adjust brightness according to surrounding light"

### 多灯联控

https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Curved Monitor Light Bar IM 66 cm \\(26 inch\\) Black

- 场景二：连接操作展示
1\\. Plug in both light bars
    The first one will connect automatically to the remote, the second light needs to 
    connect manually
2\\. Unplug the second light and plug it back in
3\\. Within 12s, tap and hold the power button on the same remote for about 4s
4\\. If the light responds or flashes, the second light is connected
5\\. Now both lights are synced to one remote

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug and plug it back in again
2\\. Within 12s, tap and hold the brightness button for 5s
3\\. If the light responds or flashes, the second light is disconnected

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

命名更新：https://www\\.amazon\\.com/vdp/0b4e24bfa0d7432ea65504dbf0213356?aci=amzn1\\.ive\\.seller\\.video\\.0b4e24bfa0d7432ea65504dbf0213356\\&product=B0F9LBFHJZ\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_TYpfxgXyndZO0

这个可以不改名：

https://www\\.amazon\\.com/vdp/050ba521ca5f485b9efc2b716ebc3f53?aci=amzn1\\.ive\\.seller\\.video\\.050ba521ca5f485b9efc2b716ebc3f53\\&product=B0F9LBFHJZ\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_EvqP5NxSD8Xpk

https://www\\.amazon\\.com/vdp/06211c9015fc4090832493f90ff191e9?aci=amzn1\\.ive\\.seller\\.video\\.06211c9015fc4090832493f90ff191e9\\&product=B0F9LBFHJZ\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_rOkZ6L9yutBEK



## 3006：Quntis Curved Monitor Light Bar IM Music Sync 45 cm \\(17\\.7 inch\\) Black

### 产品视频

https://www\\.amazon\\.ca/vdp/0f0f870a5fb24876acbbce64d41f6416?aci=amzn1\\.ive\\.seller\\.video\\.0f0f870a5fb24876acbbce64d41f6416\\&product=B0G4QXNFHD\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_for3Ru3aLFFTF

- 场景一：产品视频统一专有片头

- 场景二：开头功能展示
"**All\\-in\\-One Value**
Working \\| Leisure"
"**Ultra\\-Wide Backlight**
 Light Moves to the Beat"
"Healthy \\+ Efficiency Double Improvement"
"Activate emotions and render the battle situation"
"**Suitable for 21"–49" Various Monitors**
 Curved Screen
 Flat Screen
 Alien Screen"
"Webcam Friendly"
"Optimal Viewing Angle"
"Enjoy Carnival \\| Efficient Work"
"**Tap to Glow**
 Wireless Operation"
"**Smart Remote Control**
 Effortless Color \\& Brightness Control" （搭配 brightness level 10%–100%，color temperature level 3000 K–6500 K）
"**Asymmetric Light**
** **Glare\\-Free 45° Beam"

- 场景四：产品视频统一专有片尾

### 开箱

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_ALPvlvZatVIox

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Wireless Controller x 1
AAA Battery x 3
USB\\-C Cable x 1
Hex Key x 1
User Manual x 1

- 场景三：**How to install** Quntis Curved Monitor Light Bar IM Music Sync 45 cm \\(17\\.7 inch\\) Black

- 场景四：适配屏幕展示
For Irregular Monitors
For Irregular Monitor \\(Top View\\)
For Thick Monitor
For Thin Monitor
For Curved\\-Back Monitor \\(Mac Compatible\\)
Compatible with 43–86 cm \\(17–34 inch\\) curved / flat monitors
"After Installation: Adjust the proper angle to illuminate the tabletop"

- 场景五：操作演示（2213有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"Timer Function: Hold On/Off button for 3s \\(light flash\\) to start 2hr timer, hold again mid\\-countdown to reset\\. One tap off cancels timer"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold the light bar button for stepless dimming
Or slide along the dots for stepless adjustment\\."
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold the light bar button to adjust the color temperature continuously
Or slide along the dots for stepless adjustment"
"**Music Sync/RGB Mode Button**: Long press to switch between Music Sync Mode and RGB Mode\\. 
Tap to cycle through the available Music Sync modes or RGB modes\\. 
Double tap to turn the backlight off\\.

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Unplug and then plug it back to restart\\.
2\\. Within 5s of power\\-up, tap and hold【Color Temperature Button 图标】and【Brightness Button 图标】on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\."

### 调节亮度 \\& 色温

无视频，参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap "\\+/–" or【Brightness Button】\\- 10%
Tap "\\+/–" or【Brightness Button】\\- 20%
Tap "\\+/–" or【Brightness Button】\\- 40%
Tap "\\+/–" or【Brightness Button】\\- 65%
Tap "\\+/–" or【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 10%——100%
Or slide along the dots on controller for stepless adjustment\\."

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap "\\+/–" or【Color Temperature Button】\\- 3000K–Warm Light
Tap "\\+/–" or【Color Temperature Button】\\- 3800K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 4500K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 5500K–Neutral Light
Tap "\\+/–" or【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K
Or slide along the dots on controller for stepless adjustment\\."

- 场景三：RGB背光调节展示
"RGB Backlight Adjustment（固定不动）
 Tap【Backlight Button 图标】to switch between the 13 RGB modes
 Tap and hold to adjust the speed in dynamic modes, or the brightness in solid color modes\\.
Double tap to turn the backlight off"

### 多灯联控

无视频，可参考2218: https://www\\.youtube\\.com/watch?v=tAm\\-d1j5uJg

- 开头：
In this video I'll show you how to pair two light bars with one remote
The model I'm using is the Quntis Curved Monitor Light Bar IM Music Sync 45 cm \\(17\\.7 inch\\) Black

- 场景二：连接操作展示
The first one will connect automatically to the remote, the second light needs to connect manually
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold【Color Temperature Button】and【Brightness Button】on the controller together\\.
3\\. Wait for the light to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\.

- 场景三：断连操作
If you want to disconnect the second light, it's almost the same process
1\\. Unplug lights and plug them back to restart\\.
2\\. Within 5s of power\\-up, tap and hold【Color Temperature Button】and【Brightness Button】on the controller together\\.
3\\. Wait for the light to flash; steady light means unpairing complete\\. Adjust brightness/color temp to test\\.

- 场景四：售后联系
If you still having trouble after watching the video, feel free to check the guide in the description or drop a comment, we will help you out\\.

### 真实桌搭

无视频，找红人拍摄



# Studio 系列

## 0002：Quntis Piano Light Studio 60 cm \\(23\\.6 inch\\) Black

### 产品视频

是否需要改名：https://www\\.amazon\\.com/vdp/03889dc7ce9946f7a0f6f23eb705618f?aci=amzn1\\.ive\\.seller\\.video\\.03889dc7ce9946f7a0f6f23eb705618f\\&product=B09PYPSXT9\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_QtcP9vjNWWcg5

### 开箱

无视频，不确定是否需要，需要可参考2213灰：https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_ALPvlvZatVIox

- 场景一：外包装盒推出

- 场景二：配件展示
Piano Light Bar \\(Light Bar \\+ Base\\) x 1
Power Adapter x 1
User Manual x 1

- 场景三：**How to install** Quntis Piano Light Studio 60 cm \\(23\\.6 inch\\) Black

- 场景四：安装灯条
1\\. Slide the light bar until it clicks
2\\. Plug power cord into the lamp
3\\. Press release button to remove

- 场景五：操作演示（2213有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"Timer Function: Hold On/Off button for 3s \\(light flash\\) to start 2hr timer, hold again mid\\-countdown to reset\\. One tap off cancels timer"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold for stepless dimming"
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously"
"**Light Sensor Button**: Tap to enable the light sensor\\."

### 调节亮度 \\& 色温

无视频，不确定是否需要，需要可参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap【Brightness Button】\\- 5%
Tap【Brightness Button】\\- 30%
Tap【Brightness Button】\\- 60%
Tap【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 5%——100%"

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap【Color Temperature Button】\\- 3000K–Warm Light
Tap【Color Temperature Button】\\- 4000K–Neutral Light
Tap【Color Temperature Button】\\- 5000K–Neutral Light
Tap【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K"

- 场景三：light sensor展示
"Light Sensor Design（固定不动）
 Tap【Light Sensor Button】to enable \\- Automatically adjust brightness according to surrounding light"

### 真实桌搭

命名更新：

https://www\\.amazon\\.com/vdp/0c98448510034a308b57fe641371e65a?aci=amzn1\\.ive\\.seller\\.video\\.0c98448510034a308b57fe641371e65a\\&product=B09PYPSXT9\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_PSdmdbAgqjk0d

https://www\\.amazon\\.com/vdp/09c42bb2290e426290ca93c4b0dfbd82?aci=amzn1\\.ive\\.seller\\.video\\.09c42bb2290e426290ca93c4b0dfbd82\\&product=B09PYPSXT9\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_lLA4R9wFlI7uz



## 3004：Quntis 3\\-Stage Foldable Desk Lamp Studio 82 cm \\(32\\.3 inch\\) Black

### 产品视频

https://www\\.amazon\\.com/vdp/0366a4ee2aaa42d9a8610c16ead0e6e5?aci=amzn1\\.ive\\.seller\\.video\\.0366a4ee2aaa42d9a8610c16ead0e6e5\\&product=B0FDPXHQW8\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_5wxrdb147d5qi

- 场景一：产品视频统一专有片头

- 场景二：痛点描述
"Working for long periods of time in a dimly lit room
 can cause eye strain and reduce work efficiency

- 场景三：产品安装\\&功能展示
"**Clamp** onto the desk"
"**Connect the supplied**
 adapter to the desk lamp"
"**Plug the AC adapter**
 into the power socket"
"**Ultra\\-Wide Lighting Area**
 Covers a larger space with a single light"
"**Tap to Glow**
 Wireless Operation"
"**Ultra\\-Wide Front and Back Lighting**
 Balanced Lighting for Focused Work"（搭配展示 1600 lux）
"3\\-Stage Foldable
 Full\\-Desktop Eye\\-Caring Light
 Reading \\| Working \\| Drawing"
"Tap and Hold for Stepless Dimming"（搭配 brightness level 10%–100%，color temperature level 3000 K–6500 K）
"Tap and Hold to continuously adjust the backlight brightness"
"On/Off Button
Radar Sensor Indicator \\(Function Starts, Light Turns Blue\\)
Backlight Button
Brightness Button
Color Temperature Button"
"**Radar Motion Sensor **
Detects motion within 29\\.5±3\\.9 inch to auto light up"（标出高度 29\\.7 inch 和距离 29\\.5±3\\.9 inch）
"TURNS OFF AFTER
5 MINUTES OF NO ACTIVITY"（搭配 5 min 倒计时）

- 场景四：产品视频统一专有片尾

### 开箱

无视频，可参考2213灰：https://www\\.amazon\\.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1\\.ive\\.seller\\.video\\.03bdc6f619144853a5a58581f8c27e77\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_ALPvlvZatVIox

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Pole x 1
Clamp x 1
AAA Battery x 2
Wireless Controller x 1
Power Adapter x 1
User Manual x 1

- 场景三：**How to install** Quntis 3\\-Stage Foldable Desk Lamp Studio 82 cm \\(32\\.3 inch\\) Black

- 场景四：安装灯条
1\\. Fix the clamp to the edge of the desk and tighten the screw\\.
2\\. Insert the pole into the clamp base \\& lock with screw
3\\. Slide the light bar till it clicks

- 场景五：操作演示（2213有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn on/off"
"Timer Function: Hold On/Off button for 3s \\(light flash\\) to start 2hr timer, hold again mid\\-countdown to reset\\. One tap off cancels timer"
"**Brightness Button**: Tap to switch preset brightness
Tap and hold for stepless dimming"
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously"
**"Backlight Button: **Tap to turn the backlight on/off\\. 
 Tap and hold to adjust brightness steplessly"
"**Section Lighting Mode Button \\(on wireless controller\\)**: Tap to switch: 
 All sections on \\| Left and right sections on \\| Middle section on\\. 

- 场景六：灯条和遥控按键配对展示
"All light bars come pre\\-paired with the included wireless remote"
"If control fails or you replace the remote, re\\-pair below:
1\\. Within 5s of power\\-up, tap and hold【Color Temperature Button 图标】and【Brightness Button 图标】on the controller together\\.
2\\. Wait for the lamp to flash; steady light means pairing complete\\. Adjust brightness/color temp to test\\."

### 调节亮度 \\& 色温

无视频，不确定是否需要，需要可参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap【Brightness Button】\\- 5%
Tap【Brightness Button】\\- 15%
Tap【Brightness Button】\\- 40%
Tap【Brightness Button】\\- 70%
Tap【Brightness Button】\\- 100%"
"Tap and hold【Brightness Button】\\- 5%——100%"

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap【Color Temperature Button】\\- 3000K–Warm Light
Tap【Color Temperature Button】\\- 4000K–Neutral Light
Tap【Color Temperature Button】\\- 5000K–Neutral Light
Tap【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 3000K——6500K"

- 场景三：背光调节展示
"Backlight Adjustment（固定不动）
 Tap【Backlight Button 图标】to turn the backlight on/off
 Tap and hold to adjust brightness steplessly"

- 场景三：light sensor展示
"Light Sensor Design（固定不动）
 Tap【Light Sensor Button】to enable \\- Automatically adjust brightness according to surrounding light"

### 真实桌搭

命名更新：

https://www\\.amazon\\.com/vdp/0f7c8374ae9d4268ac6dd91f05fb5303?aci=amzn1\\.ive\\.seller\\.video\\.0f7c8374ae9d4268ac6dd91f05fb5303\\&product=B0FDPXHQW8\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_nhBmQVNyaPdNt

https://www\\.amazon\\.com/vdp/004916becb8646e1b89df9442316fd7c?aci=amzn1\\.ive\\.seller\\.video\\.004916becb8646e1b89df9442316fd7c\\&product=B0FDPXHQW8\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_kheJbhYHEvTFh

https://www\\.amazon\\.com/vdp/0e83bce1015d4217b34817cea51a7fdd?aci=amzn1\\.ive\\.seller\\.video\\.0e83bce1015d4217b34817cea51a7fdd\\&product=B0FDPXHQW8\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_xkpJwoIjq6Bo4



## 6001：Quntis Flex Desk Lamp Studio 78 cm \\(30\\.7 inch\\) Grey

### 产品视频

https://www\\.amazon\\.com/vdp/0b95a1d98ff045c69a0b300c87234399?aci=amzn1\\.ive\\.seller\\.video\\.0b95a1d98ff045c69a0b300c87234399\\&product=B0CSYNGGD7\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_G8SLmtrrkgh6g

- 场景一：产品视频统一专有片头

- 场景二：开头产品名
"**Quntis Flex Desk Lamp Studio**
 Eye Care Lighting Illuminate Your Space"

- 场景三：产品安装\\&功能展示
"Flicker\\-free Lighting"
"Dual\\-Headed Workspace Lighting"
"**24W**
WIDE\\-AREA ILLUMINATION
1600 lux \\| 1237 lux \\| 1175 lux \\| 1121 lux"
"Upgraded Prismatic Optical"
"Meetings, Scene Fill Light"
"Gentle high\\-brightness
 illumination without harsh glare"
"CRI ≥ Ra 95
Eusuring color accuracy and minimizing eye fatigue"
"Quntis \\| OTHER
 Shadowless Lighting"
"5 COLOR TEMPERATURE
2700K \\| 3500K \\|  4000K \\| 5300K \\| 6500K"
"Tap and hold to stepless adjust the color temperature"（搭配 color temperature level 2700 K–6500 K）
" 5 BRIGHTNESS LEVELS
 100% \\| 75% \\| 50% \\| 25% \\| 5%"
"Tap and hold to stepless adjust the brightness levels"（搭配 brightness level 100%–5%）
"30\\.7 inch Ideal for Collaborative Work"
"Multiple Rotational Zones for Customized Illumination"

- 场景四：产品视频统一专有片尾

### 开箱

https://www\\.amazon\\.com/vdp/03e8539e121544daa48c2c579300c5b7?aci=amzn1\\.ive\\.seller\\.video\\.03e8539e121544daa48c2c579300c5b7\\&product=B0CSYNGGD7\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_L0GArvYq5nNqR

- 场景一：外包装盒推出

- 场景二：配件展示
Light Bar x 1
Gooseneck Upper Pole x 1
Lower Pole x 1
Clamp x 1
Power Adapter x 1
User Manual x 1

- 场景三：安装灯具
1\\. Fix the clamp to the edge of the desk and tighten the screw\\.
2\\. Insert the lower pole into the clamp\\. Adjust the light bar to your preferred angle, then tighten the screw to secure it\\.
3\\. Insert the gooseneck upper pole into the lower pole until it clicks into place\\.
4\\. Slide the light bar onto the top of the pole until it locks securely\\.

- 场景四：调整灯具
Once assembled, adjust the lamp to your preferred position\\.
**• Gooseneck**: 180° multi\\-directional 
**• Light bar segments**: 85° swivel \\(each side\\) \\+ 90° inward fold 
**• Lower pole**: 360° rotation

- 场景五：操作演示（2213有wireless controller，要搭配wireless controller一起）
"**On/Off Button**: Tap to turn the lamp on/off"
"**Brightness \\+**: Tap to step up through the preset brightness levels
Tap and hold to increase brightness continuously"（搭配展示 5% / 25% / 50% / 75% / 100%）
"**Brightness −**: Tap to step down through the preset brightness levels
Tap and hold to decrease brightness continuously"（搭配展示 100% / 75% / 50% / 25% / 5%）
"**Color Temperature Button**: Tap to switch preset color temperature
Tap and hold to adjust the color temperature continuously"（搭配展示 2700 K / 3500 K / 4000 K / 5300 K / 6500 K）

- 场景六：灯具多方位照明展示
"Multiple Rotational Zones for Customized Illumination

### 调节亮度 \\& 色温

无视频，可参考2213灰：https://www\\.amazon\\.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1\\.ive\\.seller\\.video\\.091943e71bf14836ac2d8170802aedb0\\&product=B08DKQ3JG1\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_RsPXi8Qv3CgBl

- 场景一：亮度调节展示
Brightness Adjustment（固定不动）
"Tap【Brightness \\+ Button】\\- 5%
Tap【Brightness \\+ Button】\\- 25%
Tap【Brightness \\+ Button】\\- 50%
Tap【Brightness \\+ Button】\\- 75%
Tap【Brightness \\+ Button】\\- 100%"
"Tap and hold【Brightness \\+ Button】\\- 5%——100%"

"Tap【Brightness − Button】\\- 100%
Tap【Brightness − Button】\\- 75%
Tap【Brightness − Button】\\- 50%
Tap【Brightness − Button】\\- 25%
Tap【Brightness − Button】\\- 5%"
"Tap and hold【Brightness − Button】\\-100%——5%"

- 场景二：色温调节展示
Color Temperature Adjustment（固定不动）
"Tap【Color Temperature Button】\\- 2700K–Warm Light
Tap【Color Temperature Button】\\- 3500K–Warm Light
Tap【Color Temperature Button】\\- 4000K–Neutral Light
Tap【Color Temperature Button】\\- 5300K–Neutral Light
Tap【Color Temperature Button】\\- 6500K–Cool Light"
"Tap and hold【Color Temperature Button】\\- 2700K——6500K"

### 真实桌搭

命名更新：
https://www\\.amazon\\.com/vdp/041f7a99ca2943d69c79a3e2a8e44751?aci=amzn1\\.ive\\.seller\\.video\\.041f7a99ca2943d69c79a3e2a8e44751\\&product=B0CSYNGGD7\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_H71z0NUuvR1ez

https://www\\.amazon\\.com/vdp/09d899e52ac749f28a0c5d45e1b72ab9?aci=amzn1\\.ive\\.seller\\.video\\.09d899e52ac749f28a0c5d45e1b72ab9\\&product=B0CSYNGGD7\\&ref=cm\\_sw\\_cp\\_r\\_ib\\_dt\\_3Bu0wEH5yoZV0

`,Ae={sku:"LI-HY-2214-GY-QU",model:"LI-HY-0214-GY",variant:"G41GY",standardName:"Quntis Monitor Light Bar Glow 41 cm (16.1 inch) Grey",series:"Glow",control:"Remote Control",cri:"Ra95",colorTemp:"3000K-6500K",illuminance:"900 lux",material:"Aluminum, ABS",power:"7.5W",input:"5V/1.5A",amazon:"https://www.amazon.com/dp/B0CKRJZBTX",site:"https://www.quntis.com/products/screenlinear-hy214-backlight-monitor-light-bar-with-desk-top-dial"},Tp=["Brand: Quntis","Series: Glow = front eye-care lighting + soft backlight","Preferred product type: Monitor Light Bar","Use Grey consistently for this SKU","Use Ra95, 3000K-6500K, 900 lux, 7.5W, 5V/1.5A","Avoid medicalized or absolute claims such as protects eyes, cures strain, zero glare, 100% safe","Use specific mechanisms instead of vague claims like premium or advanced"],co=[{id:"product",label:"Main Images",description:"Amazon carousel and product image copy",tab:"evidence"},{id:"aplus",label:"A+ Images",description:"A+ module image text and logic",tab:"evidence"},{id:"brand",label:"Brand Images",description:"Brand support and trust-proof assets",tab:"evidence"},{id:"naming",label:"Naming & Terms",description:"Product name, terminology, specs, and compatibility",tab:"issues"},{id:"missing",label:"Missing Assets",description:"Assets or wording that still need confirmation",tab:"missing"}],Cp=[{series:"Glow",definition:"Front eye-care lighting + soft backlight",products:[{sku:Ae.sku,model:Ae.model,variant:Ae.variant,name:Ae.standardName,sections:co}]}];function wp(c){const m=`${c.location||""} ${c.type||""} ${c.evidence||""}`.toLowerCase();return m.includes("missing")?"missing":m.includes("brand")?"brand":m.includes("a+")||m.includes("aplus")?"aplus":m.includes("main image")||m.includes("product/image")||m.includes("amazon main")?"product":"naming"}function uo(c){return co.find(m=>m.id===c)?.label||c}const Ep=[{id:crypto.randomUUID(),priority:"P0",location:"Amazon A+ / Main image set",currentCopy:"Image copy not fully readable from Amazon due to access/CAPTCHA risk",type:"Missing asset",issue:"Amazon page is listed in the naming table, but automated access can return CAPTCHA. Full image-text audit needs screenshots or an accessible browser session.",suggestion:"Request US Amazon main image, carousel image, and A+ screenshots for B0CKRJZBTX before final copy QA.",basis:"Source access check / Amazon link in naming table",needsImage:"Yes",status:"Need image",notes:"Ask user for images if browser access is blocked."},{id:crypto.randomUUID(),priority:"P0",location:"Product name / Page title",currentCopy:"Quntis Monitor Light Bar Glow 41 cm (16.1 inch) Grey, Wireless Remote",type:"Product naming",issue:"Independent-site title is close, but should be checked against the standard product name and feature-order rules before being reused in A+.",suggestion:"Use: Quntis Monitor Light Bar Glow 41 cm (16.1 inch) Grey. Put Remote Control / Backlight / compatibility in supporting copy, not the core product name.",basis:"Product naming table / terminology glossary",needsImage:"No",status:"Open",notes:"Detected from independent-site title."},{id:crypto.randomUUID(),priority:"P1",location:"Feature copy",currentCopy:"Eye-Care / Anti-Blue Light",type:"Compliance wording",issue:"Eye-care language is allowed as a category, but medicalized promises should be avoided unless supported by exact evidence.",suggestion:"Prefer: Designed for comfortable desk lighting with reduced screen glare and soft backlight. Avoid: protects your eyes, prevents eye strain, cures fatigue.",basis:"Terminology glossary / Amazon compliance risk",needsImage:"No",status:"Open",notes:"Apply to image headlines, A+ captions, and Q&A."},{id:crypto.randomUUID(),priority:"P1",location:"Specs / Color temperature",currentCopy:"3000K-6500K",type:"Unit format",issue:"The naming table uses hyphen in raw data, while brand-facing documents often use an en dash style for ranges. Choose one display standard.",suggestion:"Use 3000K-6500K consistently in SKU data tables; use 3000K-6500K or 3000K to 6500K consistently in customer-facing copy.",basis:"Naming table / terminology consistency",needsImage:"No",status:"Open",notes:"Final typography can decide whether dash or 'to' is more readable in image text."},{id:crypto.randomUUID(),priority:"P1",location:"Compatibility",currentCopy:'Fits Monitors 17"-21"',type:"Parameter",issue:"Compatibility is a purchase-decision field and must not drift between A+, images, independent site, and package.",suggestion:'Use: Fits Curved/Flat Monitors; Fits Monitors 17"-21". If images show a different range, flag as P0 parameter conflict.',basis:"Product naming table",needsImage:"Yes",status:"Open",notes:"Needs Amazon image/A+ verification."},{id:crypto.randomUUID(),priority:"P1",location:"Function naming",currentCopy:"Multi-Light Pairing / Multi-Light Control",type:"Terminology",issue:"Naming table uses Multi-Light Control; A+ planning mentions Multi-Light Pairing in Product Information. This needs one display rule.",suggestion:"Use Multi-Light Control as the primary feature label for this SKU unless the final glossary chooses Multi-Light Pairing for customer-facing copy.",basis:"Naming table / A+ planning page",needsImage:"No",status:"Open",notes:"Keep consistent across comparison table and Q&A."},{id:crypto.randomUUID(),priority:"P2",location:"A+ module copy",currentCopy:"Premium / advanced / high quality",type:"Vague claim",issue:"Generic adjectives do not explain the benefit and weaken Quntis' technical positioning.",suggestion:"Replace vague claims with concrete mechanism + benefit, e.g. Ra95 color rendering for more natural desk colors.",basis:"A+ planning rule: avoid empty expressions",needsImage:"No",status:"Open",notes:"Apply after screenshots are available."}],Ap=[{id:crypto.randomUUID(),priority:"P1",location:"Amazon main image / image_3",currentCopy:"Optimal Front and Back Lighting; Bright and Uniform, Truly Eye Friendly; 900Lux Center / 300Lux / 500Lux; 90x50cm / 63x40cm",type:"Compliance wording / Unit format",issue:'"Truly Eye Friendly" is too absolute and eye-health coded. Lux and size units are not in the preferred display style.',suggestion:'Replace with mechanism-first comfort copy. Format values as "900 lux center illuminance", "300 lux", "500 lux", "90 x 50 cm", and "63 x 40 cm".',basis:"Quntis terminology glossary / unit rules / Amazon claim-risk guardrail",evidence:"public/evidence/2214gy/product/image_3.jpg",evidenceImage:"/evidence/2214gy/product/image_3.jpg",replacementCopy:"Balanced front and back lighting. Bright, even desk illumination designed for comfortable screen-side work.",impact:"Reduces compliance risk and fixes visible unit inconsistency.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:"Confirm whether 300/500 lux values are measured areas before keeping them."},{id:crypto.randomUUID(),priority:"P1",location:"Amazon main image / image_4",currentCopy:"Unique Asymmetrical optical Design; Total immersion, perfect illumination.",type:"Grammar / Absolute claim",issue:'Capitalization is inconsistent, and "perfect illumination" is an unsupported absolute claim.',suggestion:'Use "Asymmetric Optical Design" and describe the beam result without using "perfect".',basis:"Terminology glossary / avoid absolute claims",evidence:"public/evidence/2214gy/product/image_4.jpg",evidenceImage:"/evidence/2214gy/product/image_4.jpg",replacementCopy:"Asymmetric Optical Design. Directs light toward the desk area while helping reduce screen glare.",impact:"Makes the optical claim clearer and safer for Amazon review.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:"Also align image_9 and A+ image_12 with the same term."},{id:crypto.randomUUID(),priority:"P2",location:"Amazon main image / image_5",currentCopy:"Unleash Creativity with Backlight Mode; Backlit immersion to spark your ideas.",type:"Translation polish",issue:'"Backlit immersion" sounds unnatural in English and does not explain the Glow-series front light + soft backlight benefit.',suggestion:"Rewrite around soft backlight and desk atmosphere instead of abstract inspiration language.",basis:"Glossary: Glow = front eye-care lighting + soft backlight",evidence:"public/evidence/2214gy/product/image_5.jpg",evidenceImage:"/evidence/2214gy/product/image_5.jpg",replacementCopy:"Soft Backlight for Creative Desk Setups. Add ambient depth behind the monitor while you work or create.",impact:"Improves readability and keeps the feature tied to the series definition.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:""},{id:crypto.randomUUID(),priority:"P1",location:"Amazon main image / image_6 and A+ / image_9",currentCopy:"Backlight Dimmable; 4 Color/Brightness Adjustment; Long press for stepless adjustment",type:"Terminology / Feature clarity",issue:'"Backlight Dimmable" is awkward, and "4 Color/Brightness Adjustment" is unclear because color temperature and brightness are different controls.',suggestion:"Use a natural feature label and split color temperature from brightness adjustment.",basis:"Naming table: Backlight / Stepless Dimming / 3000K-6500K",evidence:"public/evidence/2214gy/product/image_6.jpg; public/evidence/2214gy/aplus/image_9.jpg",evidenceImage:"/evidence/2214gy/aplus/image_9.jpg",replacementCopy:"Dimmable Backlight. Adjust brightness and color temperature; long-press for stepless brightness control.",impact:"Prevents control-feature confusion and improves customer comprehension.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:"Confirm whether this SKU has 4 presets, stepless control, or both."},{id:crypto.randomUUID(),priority:"P1",location:"Amazon main image / image_7 and A+ / image_15",currentCopy:"Patented Sliding Weighted Clip; Irregular Monitor / Ordinary Monitor / Curved Monitor; fit most monitors",type:"Claim verification / Compatibility",issue:'"Patented" needs legal/product proof. "Irregular Monitor" and "Ordinary Monitor" are unnatural, and "fit most monitors" is broader than the naming-table compatibility.',suggestion:'Use exact compatibility and neutral monitor-back labels. Keep "Patented" only if patent proof is approved.',basis:'Naming table: Fits Curved/Flat Monitors; Fits Monitors 17"-21"',evidence:"public/evidence/2214gy/product/image_7.jpg; public/evidence/2214gy/aplus/image_15.jpg",evidenceImage:"/evidence/2214gy/aplus/image_15.jpg",replacementCopy:'Sliding Weighted Clip. Designed for curved and flat monitors from 17"-21".',impact:"Avoids unsupported legal claims and purchase-decision mismatch.",needsImage:"No",status:"Open",owner:"Product",updatedAt:"2026-06-24",notes:"Need final clip thickness range from product/manual before publishing."},{id:crypto.randomUUID(),priority:"P2",location:"Amazon main image / image_8",currentCopy:"2.4GHz; Back Light Brightness On / Off; Main Power On / Off",type:"Unit format / Terminology",issue:'"2.4GHz" needs a space, and "Back Light" should be the standard single-word feature term "Backlight".',suggestion:'Use "2.4 GHz", "Backlight Brightness On/Off", and "Power On/Off" if these match the manual.',basis:"Terminology glossary / unit spacing",evidence:"public/evidence/2214gy/product/image_8.jpg",evidenceImage:"/evidence/2214gy/product/image_8.jpg",replacementCopy:"2.4 GHz Remote Control; Backlight Brightness On/Off; Power On/Off",impact:"Aligns remote-control wording across main image, A+, manual, and video subtitles.",needsImage:"No",status:"Open",owner:"Terminology",updatedAt:"2026-06-24",notes:"Button labels should be checked against the final manual."},{id:crypto.randomUUID(),priority:"P1",location:"A+ hero / image_1 and image_3",currentCopy:"Quntis Screenlinear Glow with Front & Back Lighting; Screenlinear Glow",type:"Product naming",issue:'"Screenlinear Glow" is old/non-standard naming and does not match the product naming table for this SKU.',suggestion:"Use the standard product type and series naming. Keep the full standard name once in the Product Overview module.",basis:"Product naming table / Quntis terminology glossary",evidence:"public/evidence/2214gy/aplus/image_1.png; public/evidence/2214gy/aplus/image_3.jpg",evidenceImage:"/evidence/2214gy/aplus/image_1.png",replacementCopy:"Quntis Monitor Light Bar Glow 41 cm (16.1 inch) Grey",impact:"Prevents old naming from spreading into Listing, A+, packaging, and video assets.",needsImage:"No",status:"Open",owner:"Terminology",updatedAt:"2026-06-24",notes:"Independent-site URL still contains screenlinear; page copy should not repeat it as product naming."},{id:crypto.randomUUID(),priority:"P2",location:"A+ award module / image_2",currentCopy:"Design by Quntis",type:"Grammar",issue:"The phrase is grammatically incomplete for a brand design credit.",suggestion:'Use "Designed by Quntis" or remove the phrase if the module already carries the Quntis brand mark.',basis:"English grammar / brand copy polish",evidence:"public/evidence/2214gy/aplus/image_2.jpg",evidenceImage:"/evidence/2214gy/aplus/image_2.jpg",replacementCopy:"Designed by Quntis",impact:"Improves professionalism in a high-trust award module.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:"Also verify award logo usage permissions and current validity."},{id:crypto.randomUUID(),priority:"P1",location:"A+ comfort module / image_7",currentCopy:"Achieve Gentle, Soft, and Immersive Lighting Enhanced Eye Comfort",type:"Grammar / Compliance wording",issue:"The headline is not grammatical and leans into eye-comfort claims without a clear mechanism.",suggestion:"Rewrite as mechanism + result, focusing on front lighting and soft backlight.",basis:"Terminology glossary / avoid medicalized claims",evidence:"public/evidence/2214gy/aplus/image_7.jpg",evidenceImage:"/evidence/2214gy/aplus/image_7.jpg",replacementCopy:"Gentle Front Light with Soft Backlight. Designed for a more comfortable desk-lighting experience.",impact:"Reduces claim risk while keeping the comfort value proposition.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:""},{id:crypto.randomUUID(),priority:"P1",location:"A+ remote module / image_11",currentCopy:"Back Light Brightness On / Off; standby sleep mode; control interface; button's orange light",type:"Terminology / Translation polish",issue:'"Back Light" conflicts with the glossary term "Backlight"; the operation paragraph is redundant and reads like direct translation.',suggestion:"Use standard button labels and simplify the standby explanation.",basis:"Terminology glossary / manual-video consistency",evidence:"public/evidence/2214gy/aplus/image_11.jpg",evidenceImage:"/evidence/2214gy/aplus/image_11.jpg",replacementCopy:"The remote enters standby mode when not in use. Press any button to wake it. When the orange indicator turns on, press the desired button again to adjust the light bar.",impact:"Improves remote-control comprehension and aligns wording for future video subtitles.",needsImage:"No",status:"Open",owner:"Terminology",updatedAt:"2026-06-24",notes:"Final button labels should match the manual exactly."},{id:crypto.randomUUID(),priority:"P0",location:"A+ optical claim / image_12",currentCopy:"Asymmetric Light Source; 100% Glare Free",type:"Absolute claim",issue:'"100% Glare Free" is an absolute performance claim and should not be used without very strong substantiation.',suggestion:'Replace with "glare-reducing" or "helps reduce direct screen glare" and show the 45-degree beam mechanism.',basis:"Amazon claim-risk guardrail / terminology glossary",evidence:"public/evidence/2214gy/aplus/image_12.jpg",evidenceImage:"/evidence/2214gy/aplus/image_12.jpg",replacementCopy:"Glare-Reducing Asymmetric Light Source. Helps direct light toward the desk area instead of the screen.",impact:"Removes a likely compliance risk from a prominent A+ module.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:"Use the same claim standard in hero, before/after, video subtitles, and package."},{id:crypto.randomUUID(),priority:"P1",location:"A+ CRI module / image_14",currentCopy:"95 CRI / 80 CRI / 60 CRI; OTHER",type:"Specification format",issue:"The naming table standard is Ra95. The competitor labels are visually loud and inconsistent in capitalization.",suggestion:'Use "Ra95" or "CRI Ra95" for Quntis, and neutral labels such as "Other lamps" if comparison is retained.',basis:"Product naming table / terminology glossary",evidence:"public/evidence/2214gy/aplus/image_14.jpg",evidenceImage:"/evidence/2214gy/aplus/image_14.jpg",replacementCopy:"Quntis: Ra95 color rendering. Other lamps: lower CRI comparison.",impact:"Keeps the key spec aligned across A+, Listing, packaging, and comparison table.",needsImage:"No",status:"Open",owner:"Terminology",updatedAt:"2026-06-24",notes:"Confirm whether comparison images/data are approved for Amazon use."},{id:crypto.randomUUID(),priority:"P1",location:"A+ problem module / image_16",currentCopy:"Is your desktop lighting comfortable for your eyes?; Insufficient outdoor natural light may cause eye discomfort; Overuse of the eyes lead to fatigue",type:"Grammar / Medicalized wording",issue:"The copy contains grammar errors and implies eye-health causality. It should be softened into desk-lighting discomfort language.",suggestion:"Avoid direct medical or fatigue-causation phrasing. Use plain lighting pain points.",basis:"Amazon compliance risk / terminology guardrail",evidence:"public/evidence/2214gy/aplus/image_16.jpg",evidenceImage:"/evidence/2214gy/aplus/image_16.jpg",replacementCopy:"Is your desk lighting working for long screen sessions? Uneven lighting, limited natural light, and screen-side glare can make the setup feel less comfortable.",impact:"Fixes grammar and reduces medicalized claim risk.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:""},{id:crypto.randomUUID(),priority:"P1",location:"A+ comparison module / image_17",currentCopy:"Quntis Computer Monitor Lamps; 45°Asymmetric lighting concentrated on the keyboard area; Widely dispersed, lacks concentration",type:"Product naming / Grammar",issue:'"Quntis Computer Monitor Lamps" is not the standard product type. There is also a missing space after 45° and awkward comparison wording.',suggestion:'Use "Quntis Monitor Light Bar", "45° asymmetric lighting", and more natural competitor wording.',basis:"Terminology glossary / product naming table",evidence:"public/evidence/2214gy/aplus/image_17.jpg",evidenceImage:"/evidence/2214gy/aplus/image_17.jpg",replacementCopy:"Quntis Monitor Light Bar. 45° asymmetric lighting helps focus light on the keyboard and desk area.",impact:"Improves naming consistency and makes the comparison easier to trust.",needsImage:"No",status:"Open",owner:"Terminology",updatedAt:"2026-06-24",notes:"Use neutral competitor language where possible."},{id:crypto.randomUUID(),priority:"P2",location:"A+ curved monitor module / image_18",currentCopy:"Designed For Curved Monitors; Please pull apart the hook",type:"Grammar / Usage instruction",issue:'"For" should not be capitalized in title case here, and "pull apart the hook" sounds mechanical and unclear.',suggestion:"Rewrite the instruction as a user action with the exact part name from the manual.",basis:"English copy polish / manual consistency",evidence:"public/evidence/2214gy/aplus/image_18.jpg",evidenceImage:"/evidence/2214gy/aplus/image_18.jpg",replacementCopy:"Designed for Curved Monitors. Gently open the clip and place it on the monitor edge.",impact:"Makes installation copy clearer and more premium.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:"Confirm the exact component name: hook, clip, or clamp."},{id:crypto.randomUUID(),priority:"P2",location:"A+ webcam module / image_19",currentCopy:"The L-Type C cable doesn't obstruct the overhead space,providing an elegant solution for camera placement.",type:"Grammar / Translation polish",issue:"The sentence has a missing space after the comma and the phrase 'overhead space' is awkward for monitor webcam placement.",suggestion:"Focus on leaving room above the monitor, and only mention the cable if it is truly the reason.",basis:"English copy polish / feature clarity",evidence:"public/evidence/2214gy/aplus/image_19.jpg",evidenceImage:"/evidence/2214gy/aplus/image_19.jpg",replacementCopy:"The L-shaped Type-C cable helps leave room above the monitor for webcam placement.",impact:"Improves readability and makes the webcam-friendly benefit clearer.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:"If the clip shape, not cable, creates the space, rewrite around the clip instead."},{id:crypto.randomUUID(),priority:"P2",location:"A+ multi-light module / image_20",currentCopy:"Reinsert the power cord from this position and complete the operation within 12 seconds.; Hold this button for 4 seconds to pair. (The front light will flash twice to indicate successful pairing. )",type:"Instruction polish",issue:"The steps are readable but wordy, and parentheses/spacing are inconsistent.",suggestion:"Simplify into step-style copy and remove extra spaces before closing parentheses.",basis:"Manual-video consistency / English copy polish",evidence:"public/evidence/2214gy/aplus/image_20.jpg",evidenceImage:"/evidence/2214gy/aplus/image_20.jpg",replacementCopy:"Reconnect the power cord, then complete pairing within 12 seconds. Hold the button for 4 seconds to pair; the front light flashes twice when pairing succeeds.",impact:"Makes setup instructions easier to scan in an image module.",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:"2026-06-24",notes:"Check whether 'pair' should be 'bind' or 'connect' in the final manual terminology."},{id:crypto.randomUUID(),priority:"P1",location:"Brand support image / image_29",currentCopy:"NO WORRIES AFTER SALE; 1 YEAR No fix, change only; 24 HOURS Response within; 30 DAYS Free return & exchange",type:"Brand trust / Grammar",issue:"The after-sales copy is grammatically weak and may overpromise unless the exact policy is confirmed.",suggestion:"Rewrite as clean support-policy copy and verify the policy terms before using in Amazon assets.",basis:"Brand tone / claim verification",evidence:"public/evidence/2214gy/brand/image_29.jpg",evidenceImage:"/evidence/2214gy/brand/image_29.jpg",replacementCopy:"Worry-Free After-Sales Support. 1-year replacement support. Response within 24 hours. 30-day free returns and exchanges.",impact:"Improves trust and avoids unclear service-policy promises.",needsImage:"No",status:"Open",owner:"Brand",updatedAt:"2026-06-24",notes:"Confirm US policy wording before publication."}],zp=[...Ep.slice(1),...Ap],Lp=[{name:"From the Brand",purpose:"Establish Quntis as a desk-centered lighting expert before the product details.",ratio:"970 x 600 or wide brand banner",headline:"Quntis - Space Lit.",subhead:"For the hours that add up.",copy:"Quntis designs lighting for the hours that add up, from focused work to after-hours desk setups.",visual:"Brand-led image with clean desk environment, Quntis logo, Space Lit line, and restrained award/proof area.",checklist:"Logo, brand line, one desk-lighting scene, no overclaim.",notes:"Keep this light; do not turn A+ into a storefront homepage."},{name:"Product Overview",purpose:"Let shoppers immediately understand what the product is.",ratio:"970 x 600 hero/product module",headline:Ae.standardName,subhead:"Front light plus soft backlight for compact monitor setups.",copy:"Quntis Monitor Light Bar Glow 41 cm (16.1 inch) Grey combines front desk lighting with a soft backlight for compact monitor setups.",visual:"Product render, standard product name, 3-4 compact selling-point chips.",checklist:"Full standard name appears once; feature chips use naming table terms.",notes:"Use the full standard name once. Keep feature labels consistent with naming table."},{name:"Experience Video",purpose:"Help shoppers imagine the product on their own desk.",ratio:"Video thumbnail + short caption",headline:"See the Glow 41 Grey in a real desk setup",subhead:"Front lighting and soft backlight across work, study, and evening desk time.",copy:"See how front lighting and backlight work together across work, study, and evening desk time.",visual:"Video thumbnail with real desk setup; no oral endorsement required, subtitles only.",checklist:"Subtitle terms match manual and video terminology.",notes:"Video subtitle order should match operation/manual terminology."},{name:"Eye-Care Lighting Experience / Before & After",purpose:"Build comfort and optical experience before technical claims.",ratio:"Before/after split image or two stacked mobile-friendly panels",headline:"Desk-focused lighting without direct screen glare",subhead:"Show the beam direction and desktop result, not a medical promise.",copy:"Asymmetric front lighting helps illuminate the desk area while reducing direct screen glare.",visual:"Before/after desk comparison plus beam direction diagram.",checklist:"Avoid protects eyes/cures strain/zero glare. Show mechanism.",notes:"Avoid medicalized claims. Show mechanism and visual result."},{name:"Smart Features",purpose:"Explain what makes Glow 41 Grey different.",ratio:"Four feature tiles or icon + product detail strip",headline:"Smart features for changing desk routines",subhead:"Backlight, stepless dimming, webcam-friendly setup, and multi-light control.",copy:"Soft backlight, stepless dimming, webcam-friendly setup, and multi-light control help the light adapt to different desk routines.",visual:"Icon row or small feature panels with concise benefit lines.",checklist:"Only include features confirmed for this SKU.",notes:"Only include features confirmed for this SKU."},{name:"Easy Operation",purpose:"Reduce setup and usage hesitation.",ratio:"Operation diagram, remote close-up, setup sequence",headline:"Adjust lighting without reaching for the bar",subhead:"Remote control for brightness and color temperature changes.",copy:"Use the wireless remote to adjust brightness and color temperature without reaching for the light bar.",visual:"Remote-control diagram, light-bar angle, clip placement, simple operation sequence.",checklist:"Button names and operation order match manual.",notes:"Keep button labels aligned with manual terminology."},{name:"Technical Excellence",purpose:"Convert specs into trust and user benefits.",ratio:"Spec band + benefit captions",headline:"Specs that explain the lighting experience",subhead:"Ra95, 3000K-6500K, 900 lux, 7.5W, 5V/1.5A.",copy:"Ra95 color rendering, 3000K-6500K color temperature, and 900 lux center illuminance support clear, comfortable desk lighting.",visual:"Spec band with benefit captions; include CRI, CCT, lux, power/input.",checklist:"Every spec has a user-facing benefit.",notes:"Do not show specs without explaining why they matter."},{name:"Solve Your Concerns",purpose:"Address purchase blockers.",ratio:"Compatibility diagram + callout labels",headline:"Will it fit my monitor?",subhead:'Designed for curved and flat monitors from 17"-21".',copy:'Fits curved and flat monitors from 17"-21", supports webcam-friendly placement, and mounts on the monitor edge.',visual:"Compatibility diagram with monitor type, camera area, and clip contact points.",checklist:"Confirm image text does not show a conflicting monitor range.",notes:"Needs screenshot/data confirmation if live images differ."},{name:"Product Comparison",purpose:"Help shoppers decide whether Glow 41 Grey is the right model.",ratio:"Mobile-friendly comparison table",headline:"Compare Glow 41 Grey with related Quntis models",subhead:"Use only decision-making fields, not every SKU parameter.",copy:"Compare Glow 41 Grey with Focus and IM models by backlight, RGB, control, screen fit, CRI, and size.",visual:"Mobile-friendly comparison table with only decision-making fields.",checklist:"Keep columns readable on mobile.",notes:"Avoid too many columns on mobile."},{name:"Q&A + Product Information",purpose:"Answer doubts and support indexing.",ratio:"FAQ + standardized product information table",headline:"Questions shoppers ask before choosing a monitor light bar",subhead:"Repeat the full product name naturally in key answers.",copy:"Will the Quntis Monitor Light Bar Glow 41 cm (16.1 inch) Grey fit my monitor? It is designed for curved and flat monitors from 17 to 21 inches.",visual:"FAQ accordion plus standardized product information table.",checklist:"Fields match product naming table and final manual/package wording.",notes:"Repeat full product name naturally in key answers."}],Mp=[{before:"A+ audit depends on scattered screenshots, links, and notes.",after:"Single review site with editable issue table, structure, mockup, and comparison.",why:"Keeps US copy cleanup, designer feedback, and later multilingual sync in one workflow.",evidence:"Current project consolidates issue report, A+ structure, mockup, comparison, and missing assets.",impact:"Reduces forgotten feedback and makes designer handoff easier to track."},{before:"Product names can drift between old ScreenLinear language, independent-site title, and A+ image text.",after:"Use the standard name: Quntis Monitor Light Bar Glow 41 cm (16.1 inch) Grey.",why:"Improves product recognition and keeps naming aligned with glossary and SKU table.",evidence:"Naming table row 13 / SKU LI-HY-2214-GY-QU.",impact:"Improves consistency across Listing, A+, packaging, video, and comparison table."},{before:"Specs may appear as isolated numbers such as Ra95, 900 lux, 3000K-6500K.",after:"Specs appear with user benefit captions in Technical Excellence.",why:"Makes technical proof understandable and avoids empty premium-style language.",evidence:"A+ planning rule: parameters should explain user benefits.",impact:"Makes technical credibility easier for shoppers to understand."},{before:"Eye-care claims risk becoming too absolute or medicalized.",after:"Use mechanism-first copy: reduced screen glare, asymmetric front lighting, soft backlight.",why:"Keeps claims clearer and safer for Amazon review.",evidence:"Terminology guardrail: avoid unsupported medicalized and absolute claims.",impact:"Lowers compliance risk while preserving the comfort benefit."},{before:"A+ modules can jump from feature to feature without a conversion logic.",after:"Experience first, differentiation second, operation third, technical proof fourth, concerns later.",why:"Matches the planned A+ logic and makes the page easier to scan.",evidence:"A+ planning order: Product Overview → Experience → Features → Operation → Technical → Concerns.",impact:"Creates a cleaner shopping narrative and reduces cognitive load."}],Dp=[{item:"US Amazon main image set",reason:"Received from /Users/binsmac/Downloads/护眼灯Amazon图片.zip and copied into the review site.",neededFor:"Image-text spelling, parameter, and claim audit",status:"Received; high-priority issues added to the editable report"},{item:"US Amazon A+ full screenshots",reason:"Received as B0CKRJZBTX-A+-images.zip inside the Amazon image package.",neededFor:"Current A+ issue report and before/after evidence",status:"Received; image evidence thumbnails added"},{item:"Current 214 Grey video subtitles, if used in A+",reason:"Experience Video module needs subtitle terminology alignment.",neededFor:"Video copy optimization",status:"Optional for first page draft"},{item:"Packaging / manual final wording for this SKU",reason:"Controls, included accessories, and compatibility should match A+.",neededFor:"What's in the Box and Product Information",status:"Confirm before final designer handoff"}],Rp=[{title:"Amazon Main Image Set",source:"B0CKRJZBTX-product-images.zip / 2214GY",images:Array.from({length:9},(c,m)=>({name:`Product image_${m+1}.jpg`,href:`/evidence/2214gy/product/image_${m+1}.jpg`}))},{title:"Amazon A+ Images",source:"B0CKRJZBTX-A+-images.zip / A+-images",images:["image_1.png","image_2.jpg","image_3.jpg","image_4.jpg","image_5.jpeg","image_6.jpg","image_7.jpg","image_8.png",...Array.from({length:12},(c,m)=>`image_${m+9}.jpg`),...Array.from({length:7},(c,m)=>`image_${m+21}.jpg`)].map(c=>({name:`A+ ${c}`,href:`/evidence/2214gy/aplus/${c}`}))},{title:"Brand Images",source:"B0CKRJZBTX-A+-images.zip / brand-image",images:["image_28.jpg","image_29.jpg","image_30.jpg","image_31.png","image_32.jpg","image_33.jpg","image_34.jpg","image_35.png","image_36.jpeg","image_37.jpg","image_38.jpg","image_39.jpeg","image_40.jpg","image_41.jpeg","image_42.jpg","image_43.jpg","image_44.jpg"].map(c=>({name:`Brand ${c}`,href:`/evidence/2214gy/brand/${c}`}))}],Np=[{name:"Module 1｜Product Hero",imageCount:1,size:"1464 x 600 px",layout:"full",slots:[{label:"Hero / Product overview",function:"首屏说明标准产品名、核心外观和主要购买理由。"}]},{name:"Module 2｜Experience Video",imageCount:1,size:"Video cover: 1464 x 600 px",layout:"video",slots:[{label:"Video cover / embed area",function:"承接视频内容，展示真实桌面场景和视频主题。"}]},{name:"Module 3｜Before & After",imageCount:2,size:"Each panel: 732 x 600 px",layout:"split",slots:[{label:"Before",function:"展示未使用前的桌面光线或痛点状态。"},{label:"After",function:"展示使用后的照明变化和可见改善。"}]},{name:"Module 4｜Smart Features Carousel",imageCount:4,size:"Each slide: 1464 x 600 px",layout:"carousel",slots:[{label:"Feature 1",function:"讲一个主功能，不混入无关卖点。"},{label:"Feature 2",function:"讲一个辅助功能，并配对应场景图。"},{label:"Feature 3",function:"讲操作或控制方式，避免说明书长文。"},{label:"Feature 4",function:"讲兼容或使用差异，帮助用户做选择。"}]},{name:"Module 5｜Easy Operation",imageCount:3,size:"Step cards: 488 x 420 px",layout:"steps",slots:[{label:"Step 1",function:"安装第一步，说明放置或夹持位置。"},{label:"Step 2",function:"操作第二步，说明控制方式或按键逻辑。"},{label:"Step 3",function:"使用第三步，说明调光、调色或日常使用。"}]},{name:"Module 6｜Technical Excellence",imageCount:4,size:"Spec tiles: 366 x 366 px",layout:"grid",slots:[{label:"Ra / CRI",function:"说明显色指数，不写无法证明的护眼承诺。"},{label:"CCT",function:"说明色温范围和适用场景。"},{label:"Lux",function:"说明照度数据和测试位置。"},{label:"Power / Input",function:"说明功率、输入和供电兼容。"}]},{name:"Module 7｜Comparison / Q&A",imageCount:1,size:"1464 x 600 px",layout:"full",slots:[{label:"Comparison or FAQ visual",function:"集中回答型号选择、兼容、包装和售后疑问。"}]}],kp={B08DKQ3JG1:9,B0F9LBFHJZ:9,B0FDPXHQW8:9,B0F2DGNX7D:7},Op=Bp.reduce((c,m)=>{const f=m.ASIN;return c[f]||(c[f]=[]),c[f].push(m),c[f].sort((u,_)=>Number(u["Image Slot"])-Number(_["Image Slot"])),c},{}),jp=Sp.reduce((c,m)=>(c[m.asin]=m,c),{}),Il=[{label:"第 1 张：主图",role:"主图（纯白底）",purpose:"作为 Amazon 合规主图方案，清楚展示实际售卖产品主体。",buyerLogic:"买家第一眼先确认“这是不是我要买的产品”。主图建议固定为白底合规版本，优先保证搜索结果页、移动端和详情页首屏的产品识别；如业务需要非白底场景主图，只作为销售备选方案另行确认，不替代合规主图规则。",filenameToken:"MainImage"},{label:"第 2 张：场景图 / 系列身份",role:"使用场景图 + 系列标签 + 完整产品名 + 核心人群 + 奖项 logo",purpose:"建立使用场景代入，并固定呈现系列标签和完整产品名。",buyerLogic:"第二张建议固定不调整位置。它负责让潜在买家快速代入自己的桌面、屏幕或工作状态，同时承担系列身份入口的作用：展示系列标签、完整产品名、核心使用人群和可核实奖项信息，帮助建立产品型号识别。奖项 logo 必须确认授权和适用产品后再使用。",filenameToken:"Lifestyle"},{label:"第 3 张：核心功能",role:"该产品最主要的功能卖点或使用方式",purpose:"优先讲清该型号最重要、最容易影响购买判断的核心价值。",buyerLogic:"买家被场景吸引后，可能会立刻想知道“它具体解决什么问题、主要功能是什么”。第三张只定义为核心功能位，不固定等于 Dual Control、Auto Dimming 或任何单一卖点；每个系列都应根据真实功能和购买决策优先级选择最核心的内容。",filenameToken:"CoreFunction"},{label:"第 4 张：智能/差异化功能",role:"自动调光、雷达感应、RGB/背光、音乐同步、多灯联控等差异化功能",purpose:"承接核心功能，说明该型号区别于普通灯条的关键功能。",buyerLogic:"核心功能说清后，第四张用于补充该型号的差异化功能。有 Auto Dimming、Radar Sensing、RGB Backlight、Multi-Light Sync 等功能的产品，可以选择其中最能推动购买判断的一项；没有对应功能的产品不要硬套，改放该型号真实存在的差异化卖点。",filenameToken:"SmartFeature"},{label:"第 5 张：调节/模式",role:"亮度、色温、RGB/背光、模式切换或控制入口",purpose:"说明该型号的可调范围、模式选择和日常使用状态。",buyerLogic:"核心和差异化功能说清后，再展示亮度、色温、背光、RGB、场景模式或控制入口如何使用，买家可能会更容易把功能转换成自己的使用场景。所有档位、范围、模式数量和按钮名称必须与说明书和参数表一致。",filenameToken:"AdjustModes"},{label:"第 6 张：舒适/光质可信",role:"频闪、眩光、蓝光、稳定光输出、显色或其他光质依据",purpose:"用机制、参数或认证解释视觉舒适和光质可信度，降低空泛护眼承诺。",buyerLogic:"核心、差异化和调节方式讲完后，买家可能会开始判断长时间使用是否舒服可信。第六张适合用光路、稳定光输出、Flicker-Free、No Screen Glare、Ra/CRI 或其他可核实依据解释体验，不写绝对护眼、治疗疲劳或无法证明的健康承诺。若多个光质点可以在同一张图里清楚表达，可合并呈现。",filenameToken:"ComfortLightQuality"},{label:"第 7 张：效果补充/产品细节",role:"照明覆盖、结构细节、控制细节、使用模式或局部特写",purpose:"补充该型号还需要解释的实际效果、结构细节或使用细节。",buyerLogic:"主要卖点和光质可信度建立后，买家可能会关心更具体的体验细节。第七张是可替换补充位，可根据产品特点放照明覆盖、结构局部、遥控/按键、摄像头兼容、多灯同步、使用模式或其他辅助理解信息；如果兼容性和配件已经放到第 8 张，这一张应避免重复。",filenameToken:"DetailSupport"},{label:"第 8 张：安装适配 + 配件",role:"屏幕/安装兼容性 + 包装内容物",purpose:"同时确认能否安装、适配哪些屏幕，以及到手包含哪些配件。",buyerLogic:"临近决策时，买家可能会排除最后的购买风险：能不能装、是否适配自己的屏幕、盒里有什么。把兼容性和配件放在同一张后段确认图，可以节省图片位，同时服务下单前确认。适配尺寸、厚度、曲率、夹具结构和包装清单必须以说明书、包装和实拍资料为准。",filenameToken:"FitAccessories"},{label:"第 9 张：技术参数 / 决策补充",role:"关键技术参数、稳定光证明、兼容补充或下单前疑虑补充",purpose:"补足专业参数或最后一个购买疑虑，作为整套图的收尾确认。",buyerLogic:"最后一张服务已经进入比较阶段的买家，可以放 Ra/CRI、lux、色温、功率、认证占位、稳定光证明，也可以放摄像头友好、多灯同步等更能解决当前型号购买疑虑的信息。若第 9 张不放参数表，参数信息需要在其他图片或 A+ 中有稳定入口。",filenameToken:"DecisionSupport"}],xp=["内部备注：主图位优先服务 Amazon 合规和搜索结果识别。优化图需先确认白底版本是否完整展示实际售卖产品、配件是否允许同框、产品占比是否足够、阴影是否克制；如使用场景主图，只作为销售备选方向，不替代合规主图规则。","内部备注：第 2 张负责建立系列身份、完整产品名和核心使用场景，建议位置固定不动。优化图需检查系列标签、产品全名、奖项 logo、核心 icon 条、Anti-Blue Light、屏幕类型和桌面道具是否同时符合 VI、说明书和真实销售型号。","内部备注：第 3 张是核心功能位，但不固定等于某一个功能。优化图需检查该产品最重要的购买理由是否被优先表达，标题、icon、按键、局部图和引线是否足够清楚，是否避免把其他系列专属功能误写进来。","内部备注：第 4 张用于智能或差异化功能。优化图需核实 Auto Dimming、Radar Sensing、RGB Backlight、Multi-Light Control 等功能是否真实支持；光圈、波纹、传感器、渐变和环境光表现要克制，避免做成无法证明的功能效果。","内部备注：第 5 张用于调节/模式说明。优化图需核对亮度、色温、背光、RGB、模式数量、操作入口和按键图案是否与说明书一致；滑杆、档位、小图对比和参数单位需要统一，不要创造不存在的模式名。","内部备注：第 6 张用于舒适/光质可信。优化图可承接 Flicker-Free、Anti-Blue Light、No Screen Glare、CRI/Ra、稳定光输出或 45° 光路等内容，但必须用可解释、可核验的表达，不写绝对护眼、治疗疲劳或医疗化承诺。","内部备注：第 7 张是效果补充/产品细节位。优化图需避免与第 8 张安装适配重复；如展示 lux 或覆盖范围，数值应放在桌面光照范围中并配照度圈，不要把数字孤立放侧边。","内部备注：第 8 张承担安装适配和包装内容确认。优化图需核实屏幕厚度、直屏/曲面/超宽/双屏、桌夹结构、曲率范围、线缆、遥控器、电池、说明书和适配器等信息是否与说明书、包装和实物一致。","内部备注：第 9 张用于技术参数或最终决策补充。优化图需检查是否解决最后一个购买疑虑，例如 Camera Friendly、Multi-Light Control、Webcam Friendly、参数表、稳定光或 Ra/CRI；如果这里不放参数，参数必须在其他图片或 A+ 中有稳定入口。"],Up=Il.map((c,m)=>({currentIndex:m,optimizedIndex:m})),Gp={"focus-dual-control-grey":[{currentIndex:0,optimizedIndex:0},{currentIndex:1,optimizedIndex:1},{currentIndex:2,optimizedIndex:2},{currentIndex:5,optimizedIndex:3,topic:"Auto Dimming / 智能调光"},{currentIndex:6,optimizedIndex:4,topic:"Brightness + CCT / 调节说明"},{currentIndex:3,optimizedIndex:5,topic:"Flicker-Free / 稳定光"},{currentIndex:4,optimizedIndex:6,topic:"Even Desk Coverage / 覆盖效果"},{currentIndex:7,optimizedIndex:7},{currentIndex:8,optimizedIndex:8}],"im-curved-black":[{currentIndex:0,optimizedIndex:0},{currentIndex:1,optimizedIndex:1},{currentIndex:8,optimizedIndex:2,topic:"Control / 控制方式"},{currentIndex:5,optimizedIndex:3,topic:"Auto Dimming / 智能调光"},{currentIndex:7,optimizedIndex:4,topic:"RGB Backlight Modes / RGB 背光模式"},{currentIndex:2,optimizedIndex:5,topic:"45 Degree Optical Design / 非对称光路"},{currentIndex:4,optimizedIndex:6,topic:"Curved & Ultrawide Coverage / 曲面宽屏覆盖"},{currentIndex:3,optimizedIndex:7,topic:"Monitor Fit + Box / 安装适配与配件"},{currentIndex:null,optimizedIndex:8,topic:"Webcam Friendly + Multi-Light Control / 摄像头友好 + 多灯控制",currentSlot:"当前无独立合并图"}],"studio-foldable-black":[{currentIndex:0,optimizedIndex:0,topic:"Main Product Scene / 主视觉"},{currentIndex:null,optimizedIndex:1,topic:"Series Scene / 系列身份",currentSlot:"当前无独立系列身份图"},{currentIndex:1,optimizedIndex:2,topic:"Wide Desk Coverage / 大桌面覆盖"},{currentIndex:2,optimizedIndex:3,topic:"Radar Sensing / 雷达感应"},{currentIndex:4,optimizedIndex:4,topic:"Brightness + CCT + Backlight / 调节说明"},{currentIndex:5,optimizedIndex:5,topic:"3-Section Lighting Modes + Timer / Memory / 三段照明模式 + 定时与记忆"},{currentIndex:6,optimizedIndex:6,topic:"Dual Control / 控制细节"},{currentIndex:7,optimizedIndex:7,topic:"Fit + Installation / 安装适配"},{currentIndex:8,optimizedIndex:8,topic:"Use Cases + Specs / 场景与参数"}],"glow-white":[{currentIndex:0,optimizedIndex:0,topic:"Main Product / 主图"},{currentIndex:1,optimizedIndex:1,topic:"Series Scene / 系列身份"},{currentIndex:2,optimizedIndex:2,topic:"Remote Control / 遥控器"},{currentIndex:3,optimizedIndex:4,topic:"Brightness + CCT + Backlight / 调节说明"},{currentIndex:null,optimizedIndex:5,topic:"Even Desk Coverage / 覆盖效果",currentSlot:"当前无独立覆盖效果图"},{currentIndex:4,optimizedIndex:7,topic:"Monitor Fit + What's in the Box / 安装适配与配件"},{currentIndex:5,optimizedIndex:null,topic:"L-Shaped Power / 空间细节",optimizedSlot:"优化方向暂无同功能图"},{currentIndex:6,optimizedIndex:null,topic:"Three Modes / 场景模式",optimizedSlot:"优化方向暂无同功能图"},{currentIndex:null,optimizedIndex:8,topic:"Camera Friendly + Multi-Light Control / 摄像头友好 + 多灯控制",currentSlot:"当前无独立同功能图"}]};function Ip(c){return Gp[c]||Up}const Qp={"focus-dual-control-grey":[`位置判断：恰当。当前白底图能承担主图职责，买家能快速识别灯条、夹具和遥控器。
VI调整：保留纯白背景；后续重出图时统一产品角度、阴影和留白，避免加入任何文字、logo、图标或场景道具。若加品牌露出，只能放在辅图而不是主图。`,`位置判断：恰当。第 2 张用真实桌面场景承接买家代入是合适的；顶部一排核心卖点 icon 可以保留，因为它能让买家快速扫到 No Screen Glare、900 lux、Flicker-Free、Dual Control 等关键信息。
VI调整：需要请设计师按新 VI 做统一 icon design，包括图标线宽、圆形容器、发光效果、文字大小和间距；“Empowering Eye Care” 偏强保护表达，建议改成 Focus Series 的标准系列语气；No Screen Glare / Eye Care 等词要按术语库和 Amazon 合规降风险。品牌色建议收敛到 Manrope 字体、品牌蓝 #1E3A8A 和橙色 #F55625 点缀。`,`位置判断：基本恰当。双控、开关、亮度和色温是核心购买理由，放在前段合理。
VI调整：信息层级过满，建议按 VI 规范减少小字说明，统一图标线宽和按钮标注；“Dual Control” 与命名表保持一致，避免不同图里出现 Touch & Remote / Dual-Control 等多套说法。`,`位置判断：内容本身更像护眼技术证明，放在第 4 张“特殊功能”位置不够准确；建议移到第 5 张或并入护眼技术图。
VI调整：“Comfortable Your Eyes” 英文不自然，且 Flicker-Free / IEEE / IEC 等认证表达要核实证书；避免把护眼写成医疗或绝对保护。视觉上改为品牌系统的克制信息图，不用旧式认证堆叠。`,`位置判断：恰当。照度分布和均匀照明能解释护眼/用光体验，适合第 5 张。
VI调整：“Truly Eye-Friendly” 偏绝对，建议改为 Eye-friendly lighting / visual comfort 这类术语库表达；900 lux 等参数格式需统一，版面颜色应从灰黑旧风格改为 VI 的白、浅灰、品牌蓝体系。`,`位置判断：建议归位。当前图重点讲 Auto Dimming，更适合放在智能/差异化功能或核心功能相关位置；第 6 张可补屏幕厚度、曲面/平面、Mac/厚屏等适配信息。
VI调整：Auto Dimming 文案保留前需核实产品支持；文字层级和箭头视觉需按 VI 统一。`,`位置判断：部分恰当。亮度/色温调节属于使用细节，但更偏控制说明；如果第 3 张已经讲控制，这张可精简为“实际操作细节”。
VI调整：5 brightness / 4 color temperature 的表达要与说明书和术语库一致；色温范围用 en dash，线上图保持 3000K–6500K；减少过多小图和渐变条。`,`位置判断：建议归位。当前图重点是 Patented Clamp / 兼容安装，更适合承担安装适配信息；第 8 张可在保留兼容性的同时补包装内容物、遥控器、线缆、说明书等。
VI调整：专利、兼容和尺寸数字要核实；Patented 相关表达需确认可用，版面改为 VI 的规格卡样式。`,`位置判断：恰当。Ra/CRI 参数适合放最后，服务专业买家查证。
VI调整：避免用 “Quntis vs Other” 的直接对比式促销表达，改成客观参数说明；Ra 98 / CRI 形式统一，同一图内不要混用；使用 VI 的参数表或对比卡组件，而不是大面积蓝色促销块。`],"glow-white":[`位置判断：恰当。白底主图能清楚识别白色灯条和遥控器，符合主图基本方向。
VI调整：继续保持纯白背景和无文字；需检查产品占画面比例是否接近 Amazon 主图要求，白色产品边缘要增强清晰度，避免过淡导致搜索结果页识别弱。`,`位置判断：基本恰当。它展示了屏幕上方使用效果和背光氛围，适合第 2 张场景图。
VI调整：“Timeless Light, Enduring Brilliance” 偏泛，不如用 Glow Series 的标准定位；参数和场景说明需用 VI 的品牌蓝/浅灰体系，减少灰底促销感。`,`位置判断：基本恰当。遥控器和 2.4GHz 控制是买家关心的核心/特殊功能，放前段可以。
VI调整：2.4GHz 字号过大，容易抢过产品利益点；按钮标注需要统一图标、线条和英文大小写，Back Light / Color Temperature 等术语按术语库规范。`,`位置判断：恰当但可精简。背光、亮度和色温调节属于重要功能，适合第 4 张特殊功能。
VI调整：小字太多，移动端和缩略图不易读；4 Color Brightness Adjustment 表达不自然，需改为明确的 Brightness levels / Color temperature presets；统一色温格式。`,`位置判断：建议归位。当前图重点是兼容性，更适合放到安装适配位置；第 5 张可补低眩光、均匀照明、蓝光/频闪证书等有依据的护眼技术。
VI调整：High Compatibility 可以保留但要降调，Clip Fit for All Screen 过绝对，建议改为具体适配范围。`,`位置判断：可进一步优化。L-shaped power design 更偏产品细节/空间利用，可调整到第 7 张或作为补充图，和兼容性信息形成互补。
VI调整：“Conquer Tight Spaces Easily” 语气偏营销化，可改为更克制的空间节省表达；玩偶道具如不服务卖点可减少，以免偏离 VI 的专业桌面感。`,`位置判断：可优化。三种模式图能解释使用场景，但不等同于产品细节；如果保留，建议作为场景补充而不是第 7 张细节。
VI调整：三宫格照片风格和灰色遮罩需要统一；Work / Immersive / Design Mode 是否为真实产品模式需核实，避免创造不存在的功能命名。`,`位置判断：当前缺失。第 8 张应补配件和包装内容物，帮助买家确认到手包含遥控器、线缆、说明书等。
VI调整：建议用 VI 的清爽白底物料平铺方式，配件名称与说明书一致，避免过度装饰。`,`位置判断：当前缺失。第 9 张应补技术参数，服务专业买家查照度、Ra、色温、功率、输入等。
VI调整：建议使用 VI 参数卡样式；线上图统一 3000K–6500K、Ra95/Ra98、900 lux 这类格式，数值必须和说明书/包装一致。`],"im-curved-black":[`位置判断：需沟通确认。当前主图使用黑色/场景式背景和 RGB 效果，可能是出于销售点击率、氛围展示或差异化考虑；但 Amazon 合规主方案仍建议准备纯白底版本。建议保留这张作为场景主图备选，同时和业务确认是否继续使用非白底主图。
VI调整：若作为销售备选图使用，需统一品牌字体、色彩和系列标识；若作为合规主图使用，应另做纯白底图，清楚展示产品主体、遥控器和配件关系。`,`位置判断：恰当。游戏/沉浸场景能快速解释 IM 系列定位，适合第 2 张。
VI调整：奖项 logo 需核实真实授权和适用产品；“Sculpted for Immersion” 可保留方向，但要加入 IM Series 标识，并用 VI 的暗色背景规范和橙色点缀，避免奖项堆叠成促销感。`,`位置判断：基本恰当。曲面屏覆盖、Ra98 和宽角度是 IM 的核心购买理由，放第 3 张合理。
VI调整：小字和箭头太多，建议拆成清晰的核心功能层级；“Precision Focus” 要与 Focus 系列名区分，避免让买家误以为是 Focus 系列产品。`,`位置判断：建议归位。当前图重点是兼容性，适合放到安装适配位置。
VI调整：兼容说明建议按屏幕类型、厚度、曲率范围拆分；“Patented Clamp” 与专利表达需核实；紫绿高亮字不符合新 VI 的克制风格。`,`位置判断：可优化。它讲照度和覆盖范围，适合核心功能或技术参数，但不是典型护眼技术图。
VI调整：大面积彩虹渐变和 58 × 40 cm 的巨大字样需收敛；lux、cm 等格式统一，图中参数必须与标题、五点、说明书一致。`,`位置判断：建议归位。当前图重点讲 Auto Dimming，更适合放到智能/差异化功能位置。
VI调整：Auto-balancing / 500 lux 等说法需核实技术依据；暗场照片上文字需加纯色底板或提高对比，符合 VI 对复杂照片背景的处理规则。`,`位置判断：建议归位。当前图重点是眼部舒适/技术证明，更适合放在舒适/光质可信位置。
VI调整：“Reduce eye discomfort and fatigue” 属于敏感健康收益，建议改成更克制的 visual comfort / reduced glare 语气；人物头像素材风格需检查是否与 VI 的专业桌面视觉一致。`,`位置判断：建议归位。当前图讲 RGB 背光模式和色温/亮度，可移到差异化功能、调节/模式或操作细节位置；第 8 张可补实际包装内容。
VI调整：15 RGB Backlight Modes 等数字需与说明书一致；RGB 色块可以保留，但应放入 VI 统一的系列色彩系统。`,`位置判断：可作为补充。当前图是配对和睡眠模式，更适合作为操作/支持图；第 9 张可补专业参数表。
VI调整：Quick Pairing / Sleep Mode 操作步骤建议用说明书式图标系统重画，按钮图标和遥控器标注统一。`],"studio-foldable-black":[`位置判断：需沟通确认。当前图是桌面场景图，可能是为了让买家快速理解 Studio 的大桌面照明效果和使用场景；但 Amazon 合规主方案仍建议准备纯白底版本。建议把这张作为场景主图备选或第 2 张使用，并和业务确认是否继续采用非白底主图。
VI调整：若保留为销售备选图，需统一 Studio Series 视觉、字体和信息层级；若作为合规主图使用，应另做纯白底图，展示灯体、支架、夹具和遥控器。`,`位置判断：基本恰当。它展示大范围照明和前/背光覆盖，适合用作场景/体验图。
VI调整：紫色参数和强光晕需要收敛；“For Balanced, Relaxed Vision” 偏健康化，建议改为 Studio Series 的 even task lighting / broad coverage 方向。`,`位置判断：更适合第 4 张特殊功能。Radar Sensing 是差异化功能，不应作为第 3 张核心泛功能图。
VI调整：Radar / Motion Sensor 的术语需要和说明书确认；Hands-Free Lighting 可以保留方向，但画面里紫色光圈和多层小图需按 VI 简化。`,`位置判断：恰当。三段折叠和多角度使用是 Studio 的核心结构差异，放在特殊功能/结构说明位置合理。
VI调整：标题 “3-Way Foldable” 与标准产品名里的 3-Stage Foldable 是否一致需统一；图中场景太多，可用更清楚的结构示意和角度标注。`,`位置判断：建议归位。当前图讲色温、亮度和背光调节，更适合放到调节/模式、操作细节或核心功能位置。
VI调整：4-Level / 5-Level 等档位需和说明书一致；色温图标和小图统一为 VI 规范的控件样式。`,`位置判断：建议归位。当前图是 Smart Timer / Memory 的场景化说明，可放到差异化功能或操作支持位置；安装适配位可补桌夹厚度、安装空间、桌面适配限制。
VI调整：人物场景可保留但需要更专业的桌面环境；文字放在复杂照片上应加纯色底板，避免可读性不足。`,`位置判断：恰当。遥控器和灯体按键细节适合第 7 张产品细节。
VI调整：Dual Control Options 的方向合理，但 Remote & Touch Control / Dual Control 需要统一；紫色背景可保留 Studio 差异，但应纳入 VI 色彩比例，不要压过品牌蓝和橙色。`,`位置判断：建议归位。当前图是安装尺寸/调节角度，更适合放到安装适配或安装说明位置，并可与配件内容组合。
VI调整：尺寸标注需统一单位格式，结构线和箭头重画；第 8 张仍需补包装内容物图。`,`位置判断：可作为补充。当前图是多场景用途，更适合作为场景补充图；第 9 张可补照度、Ra、色温、功率、输入、材质等专业参数。
VI调整：Super Bright to Multiple Occasions 语气偏泛，建议改为具体场景 + Studio 系列定位；紫色标签和多图拼贴需简化。`]},Kp=["第 1 张主图：请明确 Amazon 合规主图与销售备选主图的两套规则。白底图需规定产品角度、阴影强度、主体占比、边缘清晰度、配件是否同框；非白底场景主图如保留，需要给出可用边界、审批条件和不延展到其他 model 的判断条件。","第 2 张场景/系列身份图：请明确人物/桌面/屏幕的构图比例、系列标签和完整产品名的固定呈现方式、奖项 logo 的尺寸/位置/安全边距/授权核验规则，以及场景图与产品图、卖点文案之间的关系。核心卖点 icon 条需要统一 icon design；所有护眼灯产品的 02 图 icon 条默认加入 Anti-Blue Light，再根据各型号真实功能选择 No Screen Glare、CRI/Ra、Auto Dimming、Dual Control、Backlight、Eye Care 等，不要为了凑数量加入说明书不支持的功能。","第 3 张核心功能图：请给出不同系列如何选择第 3 张主卖点的规则，明确主标题/副标题/功能标签最大字数、对齐方式、箭头/引线样式、产品局部和 icon 绘制规范；同一含义的 icon 在不同系列中必须同源，只根据系列色调整高亮色。","第 4 张智能/差异化功能图：请定义 Auto Dimming、Radar Sensing、RGB/Backlight、Music Sync、Multi-Light Control 等功能的视觉边界，包括传感器、环境光、雷达、音乐同步、多灯联控是否用光圈/波纹/渐变表现，以及哪些高饱和色、光效和色块不能用。","第 5 张调节/模式图：请明确亮度、色温、RGB、背光、场景模式或控制入口如何统一；滑杆、档位、小图对比、渐变条、遥控器/触控入口和参数单位格式必须与说明书一致，按键图标、按键名称、操作时长和产品外形表现不能自行改写。","第 6 张舒适/光质可信图：请明确护眼、稳定光、Anti-Blue Light、Flicker-Free、No Screen Glare、CRI/Ra、认证/证书 logo、参数卡和光路示意的尺寸、位置、证据边界与合规表达；健康类表达必须降级为 visual comfort / reduced glare / stable light 这类可解释语气。","第 7 张效果补充/产品细节图：请明确光照覆盖、结构局部、遥控/按键细节、使用模式、照度点位或其他补充信息如何选择；lux 数值永远放在桌面光照范围中心附近，不放侧边，并用照度圈或光照范围一起解释。","第 8 张安装适配 + 配件图：请定义屏幕厚度、直屏/曲面/超宽/双屏、Mac/厚屏、桌夹厚度、夹具结构和包装内容物如何分组。多场景展示时，若该型号适配直屏、曲面、超宽或双屏，整套图中应尽量覆盖这些类型，不要只展示单一屏幕形态。","第 9 张技术参数/决策补充图：请给出参数表字段顺序、Ra/CRI、lux、K、W、V/A 的格式；Camera Friendly、Multi-Light Control、Webcam Friendly 等如果是该型号卖点，Listing 辅图和 A+ 都要有稳定入口，不只在一处一笔带过。"],Hp="本页是 Amazon Listing 图片系统的视觉规范与方向稿，用于明确图片顺序、版式模板、系列色使用、icon 规范、文字层级和合规边界；不是要求立即为所有 SKU 逐张输出最终成图。具体功能、参数、认证、奖项和包装内容必须以说明书、参数表、合同交付范围和已授权素材为准。若涉及额外 SKU 延展、最终渲染、认证核验或大批量出图，应另行确认工作范围。",Fp="请按照本页面列出的第 1-9 张图片顺序，将其写入 VI 规范，作为建议的 Listing 图片排列顺序。备注：建议按照这个逻辑顺序排列；如有特殊销售需求需调整顺序，第 1 张主图和第 2 张场景/系列身份图不要调整位置，第 3-9 张可在不改变图片内容和功能真实性的情况下灵活调整。页面底部“全套图效果一览”仅用于把同一张图或同一功能主题放在一起做当前 / 优化对比，不代表最终上架排序。",Vp=[Hp,Fp],Xp=[{title:"版式与文字层级",items:["Listing 功能/场景辅图的大标题默认居中；深色背景大标题统一白色。白底/浅底说明图如需黑色标题，必须在 VI 中作为例外单独定义。","请给出所有内容的字号、字重、行高和最长字数，包括大标题、副标题、功能标签、参数数字、说明小字、icon 下方文字和产品全名。","复杂照片背景上的文字需有明确安全区、遮罩或纯色底板规则，移动端缩略图也要可读。"]},{title:"Icon 与图形组件",items:["相同功能在不同系列中使用同一套 icon 设计语言，只按系列色调整高亮；需规定线宽、圆角、容器尺寸、发光程度、是否允许双色组合。","所有护眼灯产品的第 2 张场景图 icon 条默认包含 Anti-Blue Light；其他 icon 再根据产品真实功能选择 No Screen Glare、Eye Care/Visual Comfort、CRI/Ra、Auto Dimming、Control、Backlight 等。","表示照度范围的圈、框线、虚线、光束、光晕和渐变都要统一规范，明确是否发光、发光半径、透明度和系列色使用比例。"]},{title:"产品与场景一致性",items:["屏保画面、桌面氛围和系列色要一致：例如 Studio 系列色为蓝色时，不优先选择暖色沙漠屏保；IM 可使用更强 RGB 氛围；Glow 白色款保持浅色、柔和、低饱和。","白色或粉色灯条应搭配对应颜色的显示器、键盘、鼠标和遥控器，不默认使用黑色外设。","桌面配件需要有高级感，避免塑料感绿植、假书、廉价摆件或与使用场景无关的装饰。","做多场景展示时，如果产品适配直屏、曲面、超宽、双屏，应在整套图里尽量覆盖这些屏幕类型。"]},{title:"说明书与参数真实性",items:["所有按键图案、按键名称、操作方式、操作时长、产品外形、夹具结构和功能描述必须与说明书、参数表、包装一致。","lux 数值放在桌面光照范围中心或对应区域内，并同时展示照明范围；不要把 lux 单独挪到侧边变成无上下文数字。","Camera Friendly、Multi-Light Control、Webcam Friendly、Anti-Blue Light、Flicker-Free、Ra/CRI、Auto Dimming 等功能必须在说明书/参数或授权资料中可追溯。"]},{title:"合规与交付",items:["奖项 logo、认证标、专利、对比图和保修承诺必须确认授权、年份、适用产品和平台合规边界，不能虚构或改写。","请明确 1:1 Listing 图、A+ 模块图、视频封面和站外页面的导出尺寸、文件大小、色彩模式、留白、安全区和压缩标准。","请建立最终验收清单：产品是否真实、参数是否一致、文字是否可读、移动端是否可读、系列色是否正确、icon 是否统一、Amazon 风险词是否降级。"]}],Yp={0:"说明书核对：产品为 Quntis Monitor Light Bar Focus Dual-Control 41 cm (16.1 inch) Grey，型号 LI-HY-0214-BK / FDC41GY。主图需确认产品、夹具、无线遥控器外观与说明书一致；如果用于 Amazon 主图，需另确认白底、产品占比、无多余文字和无场景元素。",1:"说明书核对：Focus 支持 Auto Dimming、Touch Control & Remote Control、Ra 98、Anti-Blue Light、Multi-Light Pairing。第 2 张 icon 条可保留 No Screen Glare、Uniform Desk Lighting、Auto Dimming、Dual Control、Ra 98；建议补充或替换出 Anti-Blue Light / Eye Care 的说明，并核实奖项 logo 授权、年份和适用产品。",2:"说明书核对：On/Off 为 tap 开关，hold 3s 启动 2-hour timer；Brightness 由 + / - 控制；Color Temperature 为 3000 K / 4000 K / 5000 K / 6500 K；Auto Dimming 为单独按钮。图中按键名称和操作时长基本方向正确，但请把 press 类动作统一改为 tap / tap and hold，并确保遥控器图标与说明书一致。",3:"说明书核对：Auto Dimming 逻辑为环境暗时自动调亮、环境亮时自动调暗；再次点击 Auto Dimming 或手动调节亮度会退出自动调光。图中 Bright Environment / Dim Environment 方向合理，正式图需把“自动调亮/调暗”的文案和传感器位置表达清楚。",4:"说明书核对：前光亮度预设为 5% / 15% / 40% / 70% / 100%，不是 5% / 25% / 50% / 75% / 100%。色温预设为 3000 K / 4000 K / 5000 K / 6500 K，同时支持 3000 K-6500 K 连续调节；如果图中出现额外 5500 K / 5700 K / 6000 K 等档位，需要删除或改成连续调节表达。",5:"说明书核对：说明书确认 Anti-Blue Light，但没有直接给出具体 Flicker-Free / Stroboscopic Safety / TÜV / IEEE / IEC 认证 logo。图中的 TEST PASSED、TÜV Rheinland、Test Mark 等必须有证书或授权资料；没有证明时请改为“Anti-Blue Light / Stable Light Source”等更稳妥表达。",6:"说明书核对：Focus 参数表只明确 center illuminance 为 900 lux。图中 657 lux / 440 lux 需要测试报告或实测依据；如果没有测试资料，建议只保留 900 lux center，或将其他数值改成非数字化的光照范围示意。",7:'说明书核对：Focus 包装内容为 Light Bar x1、Clip x1、Wireless Controller x1、AAA Battery x2、USB-C Cable x1、Hex Key x1、User Manual x1。参数表写的是 17"-21" flat monitors；图中如果写 Curved / Ultra-wide / Curved Back，需要额外证据，否则应改回 flat monitor 适配范围。',8:"说明书核对：Ra 98 写法正确，适合用来说明高显色。注意不要写成 Ra > 98；如加入对比图、颜色还原百分比或竞品比较，需要有测试依据。"},qp={0:"说明书核对：产品为 Quntis 3-Stage Foldable Desk Lamp Studio 82 cm (32.3 inch) Black，型号 HT8885 / S82BK。主图需确认三段灯体、夹桌结构、无线遥控器和电源适配器关系；Amazon 白底主图需另出合规版本。",1:"说明书核对：Studio 支持 Touch Control & Remote Control、Radar Sensor、Ra 95、3000 K-6500 K、1600 lux、Backlight、2-hour timer、Memory Function。当前第 2 张如出现 Auto Dimming icon，应改为 Radar Sensor / Auto On/Off；说明书没有 Auto Dimming 功能。",2:"说明书核对：Studio 参数表明确 center illuminance 为 1600 lux。图中 1300 lux、800 lux 或其他区域照度必须有测试报告或实测依据；没有证据时只保留 1600 lux center，其他改成非数字化光照范围。",3:"说明书核对：Radar Sensor 为 75 ± 10 cm 范围内有人自动亮灯；离开且距离超过 75 ± 10 cm 后，约 5 分钟自动关闭。开启时灯闪一次且蓝色指示灯闪 5 次，关闭时灯闪两次。图中 75 ± 10 cm 和 5 min 可保留，但请用 Radar Sensor / Auto On/Off，不要写 Auto Dimming。",4:"说明书核对：前光亮度预设为 5% / 15% / 40% / 70% / 100%，不是 5% / 25% / 50% / 75% / 100%。色温预设为 3000 K / 4000 K / 5000 K / 6500 K，图中如出现 5700 K 需要删除。背光支持 tap on/off 和 hold stepless brightness，但说明书没有给出 0% / 25% / 50% / 75% / 100% 固定档位。",5:"说明书核对：3-section lighting modes 正确：All Sections On、Left & Right Sections On、Middle Section On。On/Off hold 3s 启动 2-hour timer。Memory Function 说明书明确记忆 brightness 和 color temperature；如果图中写 last used section mode 也会被记忆，需要说明书外证据，否则删除 section mode memory。",6:"说明书核对：这张控制图里如出现 Auto Dimmer Switch / Smart Auto-Dimming，需要改为 Radar Sensor / Auto On/Off。按键名称建议按说明书统一为 On/Off Button、Brightness Button、Color Temperature Button、Backlight Button、Radar Sensor Indicator、Section Lighting Mode Button。",7:"说明书核对：说明书里的关键尺寸包括 82 cm 灯体、75.5 cm 高度，以及 37.8 cm / 25 cm / 9 cm / 2.8 cm / 6.7 cm 等结构尺寸。图中 320°、180°、360°、7.1 cm working height / clamp thickness 等参数如果来自实测或包装资料可保留；若只来自生成图，需要设计师/产品确认后再上架。",8:"说明书核对：若第 9 张用于多场景展示，请避免把场景写成产品“模式”。Backlight、multi-monitor、workbench、video call 等可作为使用场景表达；不要加入说明书没有的自动调光、AI、护眼治疗等功能。若当前图位为空，请补 What's in the Box 或关键场景图。"},Jp={0:"说明书核对：产品为 Quntis Monitor Light Bar Glow 41 cm (16.1 inch) White，型号 LI-HY-0214-WT / G41WT。主图用白色灯条、夹具和无线遥控器方向正确；Amazon 主图需确认白底、产品占比、无文字、无额外装饰。",1:"说明书核对：Glow 支持 Remote Control、Ra 95、3000 K-6500 K、900 lux、Backlight、Anti-Blue Light、Multi-Light Pairing、Webcam Friendly。第 2 张如果出现 Auto Dimming icon，需要删除或替换为 Backlight / Webcam Friendly / Multi-Light Control；说明书没有 Auto Dimming。",2:"说明书核对：Glow 说明书没有 2-hour timer，也没有 Smart Auto-Dimming。第 3 张遥控图应删除 Timer / Auto-Dimming 相关文案，改为正确说明 On/Off、Brightness、Color Temperature、Backlight、+ / - 的操作关系。",3:"说明书核对：若第 4 张用于 Remote Control 或 Backlight 细节，请重点讲清背光按钮：tap on/off，tap and hold 连续调节背光亮度，double-tap 切换背光色温 3000 K / 4000 K / 5000 K / 6500 K。不要把背光写成只有亮度可调。",4:"说明书核对：前光亮度预设为 10% / 50% / 75% / 100%；前光色温为 3000 K / 4000 K / 5000 K / 6500 K。图中如出现 6000 K 需要改掉。背光同样支持亮度和色温调节，背光色温为 3000 K / 4000 K / 5000 K / 6500 K；请在内部备注里要求设计师逐项对照说明书。",5:"说明书核对：Glow 参数表明确 center illuminance 为 900 lux。图中 500 lux / 300 lux 需要测试报告或实测依据；没有证据时，保留 900 lux center，其他改成光照范围示意。",6:"说明书核对：如果第 7 张讲 backlight / ambient glow，请确保机身、显示器、灯条、遥控器全部为白色版本；Glow 系列色用低饱和薄荷色，不要混入 IM 的橙红色或 Focus/Studio 的蓝色。",7:'说明书核对：Glow 包装内容为 Light Bar x1、Clip x1、Wireless Controller x1、AA Battery x3、USB-C Cable x1、User Manual x1。图中若写 AAA Battery x2、Power Adapter、Hex Key 或 Up to 3.35 in，需要改掉或提供额外证明。屏幕适配为 17"-21" curved/flat monitors，未见 Ultra-wide 说明。',8:"说明书核对：Webcam Friendly 和 Multi-Light Pairing 可保留。配对操作为重启后 12 秒内长按约 4 秒完成 pairing；unpair 为长按约 7 秒。图中摄像头平台、右角 USB-C 线缆和多灯同步表达需确认与产品真实结构一致。"},Wp={0:"说明书核对：产品为 Quntis Curved Monitor Light Bar IM 66 cm (26 inch) Black，型号 LI-HY-0201-GY / I66BK。主图需体现曲面灯体、黑色机身、无线遥控器和 IM 系列 RGB 气质；Amazon 白底主图需另确认合规版本。",1:"说明书核对：IM 支持 RGB Backlight、Auto Dimming、Ra 98、Anti-Blue Light、Multi-Light Pairing、Webcam Friendly，适合突出 gaming / curved ultrawide / immersive RGB。第 2 张 icon 条可以保留 RGB Backlight、Auto Dimming、Front + Back Lighting、Ra 98；如有空间建议加入 Webcam Friendly 或 Multi-Light Control。",2:"说明书核对：IM 参数表控制方式为 Remote Control。图中如果写 Touch Bar Control，需要确认实物/包装是否确实支持；仅按说明书时应以 wireless remote 为主。按键功能应核对 On/Off、Backlight、Brightness、Color Temperature、Auto Dimming、+ / -。",3:"说明书核对：IM 支持 Auto Dimming，方向为环境暗时调亮、环境亮时调暗；手动亮度调节或再次点击自动调光会退出。图中 Smart Auto-Dimming 可保留，但传感器位置和操作方式需按说明书确认。",4:"说明书核对：亮度预设为 10% / 50% / 75% / 100%，不是 5% 起步。色温为 3000 K / 4000 K / 5000 K / 6500 K。RGB 背光说明书只写 tap backlight button switches RGB modes、tap and hold turns backlight off；“15 ambient modes”或具体模式名称需要额外资料证明。",5:"说明书核对：45° asymmetrical / glare reduction 属于重要卖点，但说明书未给出 45° 数值的完整参数依据。图中可讲 no screen glare / focused desk lighting，但 45°、beam angle、cut-off 等数字或专业术语需要产品资料或测试图支持。",6:"说明书核对：IM 参数表明确 center illuminance 为 1400 lux。图中 1100 lux / 800 lux / 500 lux 需要测试报告或实测依据；没有证据时，建议只保留 1400 lux center 或改成非数字化覆盖范围。",7:'说明书核对：IM 屏幕适配为 21"-49" curved/flat monitors。图中 34"+、1000R-3000R、Up to 3.35 in 等需要额外证明。包装内容为 Light Bar x1、Wireless Controller x1、AA Battery x3、USB-C Cable x1、Power Adapter x1、User Manual x1；说明书未列 Clip x1。',8:"说明书核对：Webcam Friendly 和 Multi-Light Control 可保留。配对为重启后 12 秒内长按约 4 秒；IM 说明书 unpair 为长按约 5 秒，不是 7 秒。图中如果写 7 seconds unpair，需要改成 5 seconds；同时确认 L-shaped Type-C cable 和摄像头留位描述与产品结构一致。"},Jd={"focus-dual-control-grey":Yp,"im-curved-black":Wp,"studio-foldable-black":qp,"glow-white":Jp},Zp=[{name:"IDA Design Awards Bronze 2025",file:"ida-design-awards-bronze-2025.png",src:"/assets/awards/ida-design-awards-bronze-2025.png",dimensions:"662 x 607",status:"需确认是否可用于当前产品。"},{name:"New York Product Design Awards",file:"new-york-product-design-awards.png",src:"/assets/awards/new-york-product-design-awards.png",dimensions:"1176 x 607",status:"需确认是否可用于当前产品。"},{name:"Tokyo Design Awards Gold 2026",file:"tokyo-design-awards-gold-2026.png",src:"/assets/awards/tokyo-design-awards-gold-2026.png",dimensions:"518 x 566",status:"需确认是否可用于当前产品。",pending:!0},{name:"A' Design Award Bronze 2026",file:"a-design-award-bronze-2026.png",src:"/assets/awards/a-design-award-bronze-2026.png",dimensions:"300 x 250",status:"需确认是否可用于当前产品。",pending:!0}],Pp={title:"请明确标题在视觉物料中的排版规则：产品标准名、系列名、尺寸/颜色、销售关键词的层级如何拆分；英文标题大小写、最大行数、换行位置和字号范围需要固定。",bullets:"请明确五点对应的图片化信息层级：每个卖点在辅图/A+中如何变成标题、功能标签和证据参数；需要给出 icon、功能色和短文案长度上限。",video:"请明确视频片头片尾规则：logo 动效、产品名排版、系列色块、奖项 logo 出现方式、字幕字号/安全区、Amazon 视频中复杂背景上的纯色底板规则。"},$p=["请明确 Brand + Product Overview 模块的品牌露出规则：logo 使用形式、Space Lit 是否出现、系列名和产品名的层级。","请明确 Experience Video 模块的视频封面规则：播放按钮、产品名、场景图、奖项 logo 是否可出现，以及安全区。","请明确 Before & After / Real-Life Scenes 的对比图规范：分割线、标签、亮度/场景表达的允许方式。","请明确 Feature Carousel 的横向滑动卡片规则：每张卡的 icon、标题、参数、背景色和系列色比例。","请明确 Easy Operation / What's in the Box 的步骤图与配件图模板：编号、箭头、图标、配件命名和说明文字上限。","请明确 Technical Excellence / Trust Proof 的证书、奖项、参数卡规范，尤其是证书 logo 和奖项 logo 的使用边界。","请明确 Comparison / Q&A / Product Information / Manual 的表格样式、字段顺序、二维码/说明书入口是否允许，以及多语种延展规则。"],e0=[{title:"A+ 内容池完整性",items:["除光效、控制、适配、配件外，需要固定检查 Camera Friendly、Multi-Light Control、是否伤屏幕、是否遮挡内置摄像头这四类顾虑是否已被覆盖。","有 Camera Friendly 和 Multi-Light Control 功能的产品，Listing 辅图和 A+ 都需要出现；没有该功能的产品不得借用同系列其他型号表达。","A+ 中所有功能顺序要与 Listing 图片逻辑一致：先建立产品身份，再讲使用场景、核心功能、适配/配件、疑虑解除和参数表。"]},{title:"模块视觉规范",items:["Premium A+ 建议按 7 个模块规划；Basic A+ 若只能使用 5 个模块，需要合并但不删掉核心顾虑信息。","每个模块需明确图片数量、画面比例、文字安全区、移动端裁切风险和模块之间的留白规则。","A+ 的系列色只用于系列名、关键线条和功能高亮，不要把整页做成单一色调。"]},{title:"产品信息字段",items:["Product Information 字段需对照说明书、包装和参数表逐项核对，不能为了版面好看省略适配范围、输入方式、控制方式、配件、型号、颜色等字段。","不同系列的字段顺序保持一致；某款没有的功能写 Not applicable 或不展示，不要混用其他型号功能。","电子说明书入口、二维码、保修和认证信息需先确认 Amazon 是否允许出现，以及目标站点是否有对应页面。"]}],t0={"focus-dual-control-grey":{original:"Quntis Computer Monitor Lamp, Screen Monitor Light Bar for Eye Caring, USB Reading LED Task Lamp with Auto-Dimming, Dimmable Light Bar, Touch Control, No Glare Space Saving Home Office Desk Lamps",proposed:"Quntis Monitor Light Bar Focus Dual-Control 41 cm (16.1 inch) Grey, Eye-Care Computer Monitor Lamp, Auto-Dimming, Touch & Remote Control, No Glare, Fits Flat Monitors, Desk Lamp For Home Office"},"im-curved-black":{original:'Quntis Curved Monitor Light Bar 15 RGB Backlight for 34"+ Screens, Computer Bar Lights Foldable Dual Light with Color Temperature Brightness Stepless Dimming, No Glare Desk Lamp for Home Office Gaming',proposed:"Quntis Curved Monitor Light Bar IM 66 cm (26 inch) Black, Eye-Care Monitor Lamp, RGB Backlight, Auto-Dimming, Remote Control, No Glare, Fits Curved/Flat Monitors, For Home Office & Gaming"},"studio-foldable-black":{original:'Quntis 32.5" Architect Desk Lamps for Office Home Dorm - Eye Care 3 Light Bar 1100LM Bright, Ambient Backlight, Radar Sensor, Remote Control, 2H Timer, Workbench Drafting Reading Video Conference Task',proposed:"Quntis 3-Stage Foldable Desk Lamp Studio 82 cm (32.3 inch) Black, Eye-Care Architect Desk Light, Radar Sensor, Backlight, Stepless Dimming, Touch & Remote Control, No Glare, For Workbench, Drafting & Reading"},"glow-white":{original:"Quntis Monitor Light Bar with Remote, Eye-Care No Glare, Space Saving Home Office Desk Lamp, White, Stepless Dimming, Easy Setup LED Computer Light Backlight for Curved Gaming Monitors Reading Study",proposed:"Quntis Monitor Light Bar Glow 41 cm (16.1 inch) White, Eye-Care Desk Lamp, Backlight, Stepless Dimming, Remote Control, No Glare, Fits Curved/Flat Monitors, For Home Office & Gaming"}},n0={"focus-dual-control-grey":{standardName:"Quntis Monitor Light Bar Focus Dual-Control 41 cm (16.1 inch) Grey",customKeywords:["Auto-Dimming","Touch & Remote Control","No Screen Glare","Ra 98","3000 K-6500 K","Home Office"],title200:"Quntis Monitor Light Bar Focus Dual-Control 41 cm (16.1 inch) Grey, Auto-Dimming Computer Lamp, Touch & Remote Control, No Screen Glare, Ra 98, 3000 K-6500 K, For Home Office",title75:"Quntis Monitor Light Bar Focus Dual-Control 41 cm Grey"},"im-curved-black":{standardName:"Quntis Curved Monitor Light Bar IM 66 cm (26 inch) Black",customKeywords:["RGB Backlight","Auto-Dimming","No Screen Glare","Ra 98","Curved / Ultrawide Screens","Gaming Setup"],title200:"Quntis Curved Monitor Light Bar IM 66 cm (26 inch) Black, Eye-Care Monitor Lamp, RGB Backlight, Auto-Dimming, No Screen Glare, Ra 98, For Curved and Ultrawide Gaming Setups",title75:"Quntis Curved Monitor Light Bar IM 66 cm Black"},"studio-foldable-black":{standardName:"Quntis 3-Stage Foldable Desk Lamp Studio 82 cm (32.3 inch) Black",customKeywords:["3-Stage Light Bar","Wide Desk Coverage","Radar Sensing","Ambient Backlight","Touch & Remote Control","Creative Workstation"],title200:"Quntis 3-Stage Foldable Desk Lamp Studio 82 cm (32.3 inch) Black, Wide-Area Task Light, Radar Sensing, Ambient Backlight, Touch & Remote Control, For Creative Workstations",title75:"Quntis 3-Stage Foldable Desk Lamp Studio 82 cm Black"},"glow-white":{standardName:"Quntis Monitor Light Bar Glow 41 cm (16.1 inch) White",customKeywords:["Remote Control","Soft Backlight","Auto-Dimming","No Screen Glare","Camera Friendly","Multi-Light Control"],title200:"Quntis Monitor Light Bar Glow 41 cm (16.1 inch) White, Eye-Care Computer Lamp, Soft Backlight, Remote Control, Auto-Dimming, Camera Friendly, For Clean Home Office Setups",title75:"Quntis Monitor Light Bar Glow 41 cm White"}},a0=[{code:"WHAT",title:"解决什么问题",body:"说明长时间看屏幕时的桌面照明问题，使用 reduced screen glare、balanced desk lighting、front/backlight balance 等机制表达。"},{code:"WHO / WHERE",title:"适合谁和什么场景",body:"明确 remote workers、students、designers、gamers 等人群，以及 home office、study、gaming setup 等场景。"},{code:"WHY",title:"为什么选择它",body:"写清楚核心差异，如 auto dimming、wireless control、motion sensor、RGB backlight、multi-light control。"},{code:"PROOF",title:"专业支撑证据",body:"放 Ra/CRI、color temperature、lux、power/input、certification 等可核验信息，避免空泛的 premium/high quality。"},{code:"FIT-RISK",title:"适配与疑虑",body:"说明屏幕尺寸、厚度、曲率、webcam 兼容、包装内容和售后入口，减少买错型号的风险。"}],l0=["From the Brand","Product Overview","Experience Video","Eye-Care Lighting Experience / Before & After","Camera Friendly","Multi-Light Control","Screen Safety / No Damage Reminder","Built-in Camera Clearance","Smart Features","Easy Operation","Technical Excellence","Solve Your Concerns","Real-Life Scenes","What's in the Box","Trust Proof","Product Comparison","Q&A","Product Information","Electronic User Manual"],i0=[["Module 1","Brand + Product Overview","From the Brand / Product Overview","1 image · Premium 1464 x 600 px","先建立品牌、系列、产品型号和使用场景。"],["Module 2","Experience Video","Experience Video","1 video cover · 16:9 / 1920 x 1080 px","用视频承接真实使用场景，并统一片头片尾。"],["Module 3","Lighting Experience","Before & After / Real-Life Scenes","2 images · 1464 x 600 px / module crop","先让用户看到照明变化，再讲参数。"],["Module 4","Feature Carousel","Smart Features / Solve Your Concerns","4 carousel slides · per backend module","差异化功能放横向滑动，包含 Camera Friendly / Multi-Light Control 等顾虑点。"],["Module 5","Easy Operation","Easy Operation / What's in the Box","3 images · per backend module","安装、控制、配件合并讲清楚。"],["Module 6","Technical Proof","Technical Excellence / Trust Proof","4 images · per backend module","规格、认证、奖项和可信证据放在信任层。"],["Module 7","Decision Support","Comparison / Q&A / Product Information / Manual","1 image + text/table · per backend module","最后解决型号选择、FAQ、字段模板和说明书入口。"]],o0=[["Amazon 模块数量","Basic A+ 通常按最多 5 个模块规划；Premium A+ 按最多 7 个模块规划。最终可用模块、图片裁切和上传限制以 A+ Content Manager 后台提示为准。"],["Amazon 图片尺寸","常用 Premium 全宽模块按 1464 x 600 px 规划；Basic 全宽图常见 970 x 300 px。其他图文、轮播、对比、规格模块需按后台所选模块的精确像素导出。"],["Amazon 图片格式","JPG / PNG / BMP，RGB 色彩模式，单图不超过 2 MB；避免低清、拉伸、压缩噪点和文字过小。"],["Amazon 视频封面","建议 16:9，1920 x 1080 px 源文件；若用于 A+ 视频模块封面，可按 1464 x 600 px 的展示区另导一版安全裁切图。"],["站外/独立站复用","官网/独立站可从同一视觉母版导出：桌面横幅建议 1920 x 900 px 或 1920 x 1080 px，移动端建议 1080 x 1350 px；格式用 WebP/JPG，单图尽量控制在 300 KB-800 KB。"]],r0=["内部备注：当前 A+ 文本和图片链接已读取，但图片内嵌文字仍需 OCR 或人工复核。优化方向是先建立品牌、系列、完整产品名和使用场景，不急着堆功能点；品牌 logo、系列名和产品名层级需与 Listing 第 2 张一致。","内部备注：视频模块需要和视频页的命名、字幕、片头片尾一致。若当前产品只有参考视频或借用其他型号视频，需要标为 Reference only，不要当作当前 SKU 已完成素材。","内部备注：体验模块优先展示真实照明变化和使用场景。对比图应解释光线如何照到桌面、如何减少屏幕反光，不写治疗疲劳、保护眼睛等强健康承诺。","内部备注：功能轮播需要覆盖真实差异化功能，也要补足购买疑虑：Camera Friendly、Multi-Light Control、是否伤屏幕、是否遮挡内置摄像头。没有对应功能的型号不要借用其他系列内容。","内部备注：安装、控制和配件模块需对照说明书。按钮名称、按键图案、操作时长、线缆、电池、适配器、夹具和包装内容物必须逐项核对。","内部备注：技术证明模块只放可核验参数和已确认授权的奖项/认证。Ra/CRI、lux、K、W、V/A、Anti-Blue Light、Flicker-Free 等都需要有说明书、参数表或证据来源。","内部备注：最后的决策支持模块用于型号比较、FAQ、Product Information 和电子说明书入口。字段顺序要跨系列统一；如果二维码/说明书入口或保修信息要出现在 Amazon，需先确认平台规则。"],s0=["Brand","Series","Product Type","Model Name","Model Number","Variant Code","ASIN","Color","Finish Types","Material Type","Dimensions","Weight","Light Source Type","Color Temperature","Brightness / Dimming Range","Illuminance / Lux","CRI / Ra","Anti-Blue Light","Flicker-Free","No Screen Glare / Optical Design","Backlight / RGB Backlight","Auto-Dimming","Control Method","Power Source / Input","Cable Type","Wattage","Voltage","Mounting / Clamp Type","Compatible Screen Size","Compatible Screen Type","Compatible Screen Thickness","Curvature Range","Camera Friendly","Built-in Camera Clearance","Multi-Light Control","Included Components","Room Type","Recommended Uses For Product","Number of Items","Unit Count","Manufacturer","Warranty"],c0=[{name:"主视频",role:"产品体验与核心卖点",content:"暗桌面到点亮、桌面照明效果、屏幕不眩光、场景 montage、特殊功能、Quntis logo + Space Lit。如果产品具备 Camera Friendly 和 Multi-Light Control 功能，需要在主视频中展示出来。"},{name:"开箱 + 操作",role:"包装、内容物、基础安装和基础操作",content:"包装正反面、灯条/夹子/遥控/线缆/说明书、快速组装、开关、调亮度、调色温；只用字幕，不口播。"},{name:"调节亮度和色温",role:"功能教学",content:"展示亮度档位、连续调光、色温档位、连续调色温；按钮名和顺序与说明书一致。"},{name:"灯条配对操作",role:"售后和多灯联控支持",content:"展示插电、12 秒内配对、灯光反馈、断连/重配流程；适合放支持页和产品页视频区。"},{name:"Real Desk Setup",role:"真实桌搭和生活化场景",content:"真实用户桌面、办公/学习/游戏氛围、产品在真实环境中的比例和光线效果；字幕和产品名统一检查。"}],u0="https://ncnxawq3dodh.feishu.cn/wiki/PTH6wPNr6iITMnkWDepcC380nib",Qa={B08DKQ3JG1:{sourceMarker:"## 2205：",directionNote:"修改方向合理：Focus 视频需要先软化健康/眼疲劳相关表达，真实桌搭视频先做命名更新；产品视频本身可作为当前素材，但字幕需按术语库和 Amazon 合规重审。待 VI/术语库确认：No reflected light、relieve eye strain、reduce eye fatigue 等表达的最终替换口径。",reviewSummary:[["产品名核对","页面当前产品名是 Quntis Monitor Light Bar Focus Dual-Control 41 cm (16.1 inch) Grey，但字幕源段落标为 2205 / Focus 40 cm (15.7 inch) Black，和新命名不一致。页面标题卡、开箱标题和片尾应统一写为：Quntis Monitor Light Bar Focus Dual-Control 41 cm (16.1 inch) Grey。"],["参数核对",'问题：字幕源仍有 17-34 inch curved / flat、缺少 Wireless Controller、5%——100% / 3000K——6500K 等旧写法。正确写法：Fits 17"-21" flat monitors；900 lux center illuminance；Ra 98；Dual-Control / Touch Control & Remote Control；Auto Dimming；Brightness: 5% / 15% / 40% / 70% / 100%；Stepless brightness: 5%-100%；Color Temperature: 3000K / 4000K / 5000K / 6500K；Stepless color temperature: 3000K-6500K；Light Bar x 1 / Clip x 1 / Wireless Controller x 1 / AAA Battery x 2 / USB-C Cable x 1 / Hex Key x 1 / User Manual x 1。'],["卖点缺失","如果当前产品确认为 Dual-Control Grey，主视频还需要表达 Dual-Control、Smart Auto-Dimming、Ra98 / Anti-Blue Light / No Screen Glare 等经核实卖点；现有 2205 脚本更像旧款 Focus 基础视频。"],["错误表达","No reflected light effectively reduces eye fatigue、Relieve Eye Strain、Improve Work Efficiency 都偏健康或结果承诺；To scientifically fit、6.6 ft USB-C EASY power cable 也需要语法清洗。"],["五类视频覆盖","主视频、开箱、亮度/色温和 Real Desk Setup 有当前素材；灯条配对/多灯联控没有产品专属视频，只能列为 Reference only / missing。Real Desk Setup 还标注改名字。"]],assets:[{type:"产品视频",status:["Current live video","Needs compliance review"],url:"https://www.amazon.com/vdp/00184b2ebeb244e09f8d1c7841f29c04?aci=amzn1.ive.seller.video.00184b2ebeb244e09f8d1c7841f29c04&product=B08DKQ3JG1"},{type:"开箱 + 安装",status:["Current live video","Needs grammar cleanup"],url:"https://www.amazon.com/vdp/03bdc6f619144853a5a58581f8c27e77?aci=amzn1.ive.seller.video.03bdc6f619144853a5a58581f8c27e77&product=B08DKQ3JG1"},{type:"调节亮度和色温",status:["Current live video","Needs unit format cleanup"],url:"https://www.amazon.com/vdp/091943e71bf14836ac2d8170802aedb0?aci=amzn1.ive.seller.video.091943e71bf14836ac2d8170802aedb0&product=B08DKQ3JG1"},{type:"真实桌搭",status:["Current live video","Needs rename"],url:"https://www.amazon.com/vdp/0d56e98f0a564b5e8b684b4c6a4a911e?aci=amzn1.ive.seller.video.0d56e98f0a564b5e8b684b4c6a4a911e&product=B08DKQ3JG1"}],issues:[["High","## 2205：Quntis Monitor Light Bar Focus 40 cm (15.7 inch) Black","字幕源段落名和页面新命名不一致，不能继续沿用旧产品名、旧尺寸和旧颜色。","Quntis Monitor Light Bar Focus Dual-Control 41 cm (16.1 inch) Grey"],["Medium",'For 17"–34" curved/flat monitors with 2 adjustment covers；配件展示缺 Wireless Controller / AAA Battery x 2',"适配范围和配件来自旧段落，和 Focus Dual-Control Grey 的说明书核对项不一致。",'Fits 17"-21" flat monitors；Light Bar x 1 / Clip x 1 / Wireless Controller x 1 / AAA Battery x 2 / USB-C Cable x 1 / Hex Key x 1 / User Manual x 1'],["Medium","Brightness Button / Light Sensor / On/Off Button / Color Temperature Button / Auto Dimming Button","当前只列灯条按键，Dual-Control 和 wireless remote 的操作关系表达不足。","Touch Control & Remote Control；On/Off Button；Brightness Button；Color Temperature Button；Auto Dimming Button；Wireless Controller"],["Medium","无产品专属灯条配对/多灯联控视频","五类视频里第 4 类缺少 Focus Dual-Control Grey 专属支持视频。","新增第 4 类：Light Bar Pairing / Multi-Light Control。脚本包含：restart power；within 5s of power-up；tap and hold + and - together；light flash / steady light means pairing complete。"],["High","No reflected light effectively reduces eye fatigue","健康/眼疲劳承诺偏强，需要合规审查。","改为说明非对称光学把光导向桌面、帮助减少屏幕反光。"],["High","Improve Work Efficiency & Relieve Eye Strain","Relieve eye strain 和效率提升都偏泛。","改为支持长时间桌面使用的视觉舒适体验。"],["Medium","Tap and hold【Brightness Button】- 5%——100%；Tap and hold【Color Temperature Button】- 3000K——6500K","范围符号不符合术语库格式；参数行应直接给出标准写法。","Stepless brightness: 5%-100%；Stepless color temperature: 3000K-6500K"],["Medium","真实桌搭：改名字","真实桌搭资产状态未完成，标题需要跟新命名一致。","Quntis Focus Dual-Control 41 cm Grey | Real Desk Setup"]]},B0F2DGNX7D:{sourceMarker:"## 2214白：",directionNote:"修改方向合理：Glow White 需要先核对字幕整理文档第 1595 行的 Pink 记录；你已确认实际视频未见 Pink，因此页面只标为字幕源记录和新命名不一致，不再定性为实际视频画面错误。无视频/参考视频标成 Reference only；Eye-Care Technology、Ultimate Eye Protection、Backlight Ajustment 等需要进入合规和术语清洗。待 VI/术语库确认：Glow 系列前光 + 柔和背光的最终视频表达。",reviewSummary:[["产品名核对","标准名应为 Quntis Monitor Light Bar Glow 41 cm (16.1 inch) White。Pink 的来源是字幕整理文档第 1595 行的记录；实际视频如已核对未出现 Pink，则只把该记录标为和新命名不一致，后台标题、页面标题和视频标题卡统一写 White。"],["参数核对","问题：字幕源里有 43–53 cm / 17–21 inch、3000 K-6500 K、Backlight Ajustment、500 lux / 300 lux 等写法需要清洗或证据确认。正确写法：Compatible with 43-53 cm (17-21 inch) curved / flat monitors；900 lux center illuminance；500 lux area / 300 lux area 仅在有测试报告时保留；Ra 95；3000K-6500K；Backlight；Backlight Adjustment；Remote Control；Wireless Controller x 1 / AA Battery x 3 / USB-C Cable x 1 / User Manual x 1；Light Bar x 1 / Clip x 1。"],["卖点缺失","Glow White 应突出 clean white setup、remote control、soft backlight、Webcam Friendly、Multi-Light Control；当前产品视频有 remote/backlight，但 webcam-friendly 和 multi-light control 不是稳定入口。"],["错误表达","Ultimate Eye Protection、Eye-Care Technology、Gentle On Eyes | Harsh No Glare 都偏强或逻辑不清；High Transparency Not Dazzling 也不自然。"],["五类视频覆盖","主视频和开箱有当前素材；亮度/色温、Multi-Light Control 是参考视频/无产品专属视频；Real Desk Setup 有素材但需命名优化。"]],assets:[{type:"产品视频",status:["Current live video","Needs compliance review"],url:"https://www.amazon.com/vdp/0f874f7544f144e1b25fac6a7b945c89?product=B0F2DGNX7D"},{type:"开箱 + 安装",status:["Current live video","Source doc needs verification"],url:"https://www.amazon.com/vdp/0da8f2bb223345bda2956bed2cdd9809?product=B0F2DGNX7D"},{type:"调节亮度和色温",status:["Reference only","Product-specific video missing"],note:"原文标注无视频，参考 2213 / 2205 视频，不能当作 Glow White 已完成素材。"},{type:"多灯联控",status:["Reference only","Product-specific video missing"],url:"https://www.youtube.com/watch?v=tAm-d1j5uJg"},{type:"真实桌搭",status:["Current live video","Needs rename"],note:"原文标注命名优化，需统一新产品命名后再发布。"}],issues:[["Medium","字幕整理文档第 1595 行：How to install Quntis Monitor Light Bar Glow 41 cm (16.1 inch) Pink","该 Pink 记录来自字幕整理文档，不直接等同于实际视频画面；你已反馈实际视频未见 Pink。页面应标为源记录和新命名不一致。","How to install Quntis Monitor Light Bar Glow 41 cm (16.1 inch) White"],["Medium","Compatible with 43–53 cm (17–21 inch) curved / flat monitors；Effortless Brightness & Color Control（3000 K–6500 K）；Backlight Ajustment；900 lux Center / 500 lux Area / 300 lux Area","范围符号、K 写法、Backlight 拼写和 lux 说明需要统一；500 lux / 300 lux 只有有测试报告时才保留。","Compatible with 43-53 cm (17-21 inch) curved / flat monitors；3000K-6500K；Backlight Adjustment；900 lux center illuminance；500 lux area / 300 lux area 仅在有测试报告时保留"],["Medium","Light Bar x 1 / Clip x 1 / Wireless Controller x 1 / AA Battery x 3 / USB-C Cable x 1 / User Manual x 1","配件写法方向正确，但需要统一空格和数量格式，避免 AA / AAA 或 Power Adapter 混入。","Light Bar x 1；Clip x 1；Wireless Controller x 1；AA Battery x 3；USB-C Cable x 1；User Manual x 1"],["Medium","主视频有 Remote Control / Backlight，但 Webcam Friendly 和 Multi-Light Control 没有稳定展示入口","Glow White 的可视化卖点缺口会影响主视频完整性。","在主视频补两个镜头：Webcam-Friendly Setup；Multi-Light Control / Multi-Light Pairing。若说明书未确认，不写成已具备功能。"],["Medium","亮度/色温、Multi-Light Control：Reference only / Product-specific video missing","这两类不是产品专属视频，不能在页面里算作已完成素材。","标 Reference only，并补 Glow White 专属：Brightness & Color Temperature；Multi-Light Control；Real Desk Setup。"],["High","Ultimate Eye Protection / Eye-Care Technology","保护类和护眼类表达偏强。","改成 Flicker-free lighting designed for comfortable desk use 等更克制表达。"],["Medium","Backlight Ajustment","拼写错误。","改为 Backlight Adjustment。"],["Medium","If you still having trouble","语法错误。","改为 If you're still having trouble。"]]},B0F9LBFHJZ:{sourceMarker:"## 2218：",directionNote:"修改方向合理：IM 66 cm Black 要把借用 2217 / 2213 的视频明确标为 Reference only，并对强保护表达做合规降调；真实桌搭视频命名更新方向合理。待 VI/术语库确认：IM 系列应强调 eye-care front light + immersive RGB backlight，避免和 Focus / Glow 的表达混淆。",reviewSummary:[["产品名核对","字幕主视频产品名 Quntis Curved Monitor Light Bar IM 66 cm (26 inch) Black 与页面标准名一致；但开箱/调节引用 2217、2213 灰，不能视为本产品专属脚本。"],["参数核对",'问题：开箱/调节借用 2217、2213 灰，控制器流程、屏幕适配、RGB 模式数量和配件不能直接套用。正确写法：Quntis Curved Monitor Light Bar IM 66 cm (26 inch) Black；RGB Backlight；Auto Dimming；1400 lux center illuminance；Ra 98；3000K-6500K；Brightness: 10% / 50% / 75% / 100%；Compatible with 21"-49" curved / flat monitors；Light Bar x 1 / Wireless Controller x 1 / AA Battery x 3 / USB-C Cable x 1 / Power Adapter x 1 / User Manual x 1；Multi-Light Pairing: restart, pair within 12s, hold about 4s；unpair: hold about 5s。15 RGB modes 只有在产品资料确认后才保留。'],["卖点缺失","IM 应表达 immersive RGB backlight、curved / ultrawide fit、Webcam Friendly、Multi-Light Control；当前主视频有 RGB 和 optical sensor，但 Webcam Friendly / Multi-Light Control 入口不足。"],["错误表达","Ultimate Eye Protection、Eye-Care Technology 偏强；Two Light **Bar Options for You 有格式错误；Universal screen Compatibility 大小写不统一。"],["五类视频覆盖","主视频有当前素材；开箱和亮度/色温为 Reference only；Multi-Light Control 有 YouTube 参考但需功能验证；Real Desk Setup 有素材但至少一个需命名更新。"]],assets:[{type:"产品视频",status:["Current live video","Needs compliance review"],url:"https://www.amazon.com/vdp/00a2f9538e0a48b0a811669d9247dd02?product=B0F9LBFHJZ"},{type:"开箱 + 安装",status:["Reference only","Product-specific video missing"],note:"原文标注无视频，参考 2217，需核实控制器、尺寸和安装方式是否一致。"},{type:"调节亮度和色温",status:["Reference only","Product-specific video missing"],note:"原文标注参考 2213 灰，不能直接作为当前产品视频。"},{type:"多灯联控",status:["Reference only","Needs feature verification"],url:"https://www.youtube.com/watch?v=tAm-d1j5uJg"},{type:"真实桌搭",status:["Current live video","Needs rename"],note:"至少一个真实桌搭视频标注命名更新。"}],issues:[["Medium","开箱 / 调节视频：参考 2217、2213 灰","主视频产品名正确，但开箱和调节视频借用其他型号，不能直接作为 IM 66 cm Black 专属脚本。","所有标题卡、开头口播和片尾统一为：Quntis Curved Monitor Light Bar IM 66 cm (26 inch) Black。借用素材标 Reference only。"],["Medium","RGB Backlight / 15 RGB modes / 3000K-6500K / 10%-100% / Adapter x 1 / 配对秒数","RGB 模式数量、Auto Dimming、屏幕适配、配件和配对秒数需要从 IM 说明书重写。",'RGB Backlight；Auto Dimming；1400 lux center illuminance；3000K-6500K；Brightness: 10% / 50% / 75% / 100%；Compatible with 21"-49" curved / flat monitors；Light Bar x 1 / Wireless Controller x 1 / AA Battery x 3 / USB-C Cable x 1 / Power Adapter x 1 / User Manual x 1；pair within 12s, hold about 4s；unpair about 5s'],["Medium","主视频有 RGB / optical sensor，但 Webcam Friendly 和 Multi-Light Control 不稳定","这两个是 IM 的购买判断点，不能只散落在标题或参考视频里。","主视频补：Webcam-Friendly Setup；Multi-Light Control。画面展示摄像头留位、多灯同步和遥控联动。"],["Medium","开箱、亮度/色温不是产品专属；Multi-Light Control 是 YouTube 参考视频","五类视频没有完整产品专属覆盖。","补 IM 66 cm Black 专属开箱、Brightness & Color Temperature、Multi-Light Control；现有 YouTube 多灯视频只标 Reference only。"],["High","Ultimate Eye Protection / Eye-Care Technology","强保护类表达需要合规审查。","改为 Flicker-free front lighting for comfortable desk use。"],["Medium","Two Light **Bar Options for You","格式破损且表达不自然。","改为 Two light bar positions for flexible desk lighting。"],["Medium","Universal screen Compatibility","大小写不统一。","按标题式或句式统一。"],["Medium","参考 2217 / 2213 灰","借用视频可能与当前 IM 66 cm 功能不完全一致。","标记 Reference only，需产品专属验证。"]]},B0FDPXHQW8:{sourceMarker:"## 3004：",directionNote:"修改方向合理：Studio 是桌面工作灯，不应直接套用 2213 灰款 monitor light bar 的脚本；Eye-Caring、Radar Motion Sensor、Light Sensor Button 等术语需要先核实产品功能和 VI 命名。待 VI/术语库确认：Studio 系列主表达应偏 wide-area task lighting / creative workstations，而不是 monitor light bar 逻辑。",reviewSummary:[["产品名核对","主视频产品名 Quntis 3-Stage Foldable Desk Lamp Studio 82 cm (32.3 inch) Black 与页面一致；但开箱/调节参考 2213 灰 monitor light bar，产品类型不匹配。"],["参数核对","问题：主视频写 10%-100%，调节脚本写 5%-100%；Radar/Light Sensor、29.5±3.9 inch、5 min、2 hr timer 等需要按 Studio 说明书统一。正确写法：Quntis 3-Stage Foldable Desk Lamp Studio 82 cm (32.3 inch) Black；1600 lux center illuminance；Ra 95；3000K-6500K；Brightness: 5% / 15% / 40% / 70% / 100%；Stepless brightness: 5%-100%；Color Temperature: 3000K / 4000K / 5000K / 6500K；Radar Sensor / Auto On/Off；Sensor range: 75 ± 10 cm；Auto off: about 5 min；2-hour timer；Backlight；Memory Function；Touch Control & Remote Control；AAA Battery x 2 / Power Adapter x 1。"],["卖点缺失","Studio 应突出 3-stage foldable、wide desk coverage、radar sensing、backlight、section lighting、remote/touch control、creative workstation；当前主视频有部分表达，但开箱和调节缺产品专属支撑。"],["错误表达","Full-Desktop Eye-Caring Light、can cause eye strain and reduce work efficiency 偏健康/结果承诺；Light Sensor Button 和 Radar Motion Sensor 术语需确认；调节视频重复场景编号。"],["五类视频覆盖","主视频和 Real Desk Setup 有当前素材；开箱和亮度/色温为 Reference only；第 4 类对 Studio 应改成遥控配对/售后支持，不是 Multi-Light Control，目前没有独立完整视频。"]],assets:[{type:"产品视频",status:["Current live video","Needs compliance review","Needs feature verification"],url:"https://www.amazon.com/vdp/0366a4ee2aaa42d9a8610c16ead0e6e5?product=B0FDPXHQW8"},{type:"开箱 + 安装",status:["Reference only","Product mismatch"],note:"原文标注无视频，参考 2213 灰；Studio 产品结构不同，不能直接复用。"},{type:"调节亮度和色温",status:["Reference only","Product-specific video missing","Needs feature verification"],note:"原文写是否需要不确定，且参考 2213 灰。需确认 Studio 真实按钮和传感器。"},{type:"真实桌搭",status:["Current live video","Needs rename"],note:"三个真实桌搭链接均标注命名更新。"}],issues:[["High","开箱 / 调节：参考 2213 灰 monitor light bar","Studio 是桌面工作灯，不能套 monitor light bar 的安装、夹具和遥控脚本。","重做 Studio 专属：Unboxing；Installation；Remote / Touch Control；Radar Sensor；Section Lighting。"],["High","主视频写 10%-100%；调节脚本写 5%-100%；Radar/Light Sensor；29.5±3.9 inch；5 min；2 hr timer","参数和术语需要统一到 Studio 说明书，不要混用 monitor light bar 逻辑。","1600 lux center illuminance；3000K-6500K；Brightness: 5% / 15% / 40% / 70% / 100%；Stepless brightness: 5%-100%；Radar Sensor / Auto On/Off；75 ± 10 cm；about 5 min auto off；2-hour timer；AAA Battery x 2；Power Adapter x 1"],["Medium","Section Lighting / Timer / Memory Function / Radar Sensing / Wide Desk Coverage 只零散出现","Studio 的核心卖点还没有形成完整视频体系。","主视频：Wide-Area Desk Lighting + 3-Stage Foldable；教程：Brightness / CCT / Section Lighting；支持视频：Radar Sensor / Remote Support；桌搭：Creative Workstation Setup。"],["Medium","第 4 类缺少 Studio 专属遥控配对 / 传感器支持视频","Studio 不应写 Multi-Light Control，第 4 类应改为售后支持型内容。","Studio remote pairing / sensor support：Remote pairing；Radar Sensor on/off；5 min auto off；2-hour timer。"],["High","Full-Desktop Eye-Caring Light","Eye-Caring 英文不自然且偏健康化。","改为 Full-Desktop Task Lighting 或 Wide-Area Desk Lighting。"],["High","can cause eye strain and reduce work efficiency","健康和效率承诺偏强。","改为 Dim lighting can make detailed work less comfortable。"],["Medium","Radar Motion Sensor","功能词需与产品规格一致。","核实官方术语是 Radar Sensor、Motion Sensor 还是 Presence Sensor。"],["High","参考 2213 灰款","Studio 与 monitor light bar 产品类型不匹配。","只能作为参考，不可作为当前产品已完成视频。"]]}},m0={"focus-dual-control-grey":Qa.B08DKQ3JG1.directionNote,"glow-white":Qa.B0F2DGNX7D.directionNote,"im-curved-black":Qa.B0F9LBFHJZ.directionNote,"studio-foldable-black":Qa.B0FDPXHQW8.directionNote},d0={"focus-dual-control-grey":'已按 1 WHAT / 2 WHO-WHERE / 3 WHY / 4 PROOF / 5 FIT-RISK 重排：先讲长时间桌面照明问题，再讲适用人群和场景，第三条放 Dual-Control / Auto Dimming 等差异功能，第四条集中 Ra 98、Anti-Blue Light、900 lux、3000 K-6500 K 等证据，最后处理 17"-21" flat monitor 适配和包装内容。原因：旧方向只是功能清单，购买逻辑不够清楚；现在更符合 Amazon 五点的扫描阅读和决策顺序。',"im-curved-black":'已按 1 WHAT / 2 WHO-WHERE / 3 WHY / 4 PROOF / 5 FIT-RISK 重排：先讲曲面/超宽屏桌面的照明痛点，再讲 gaming、creator 和 21"-49" curved/flat monitor 场景，第三条放 RGB Backlight、Auto Dimming、Remote Control、Webcam Friendly、Multi-Light Control，第四条放 Ra 98、Anti-Blue Light、1400 lux、3000 K-6500 K，最后核对屏幕适配、包装内容和配对秒数。原因：IM 的购买动机先来自屏幕形态和氛围需求，不能一开始就堆参数。',"studio-foldable-black":"已按 1 WHAT / 2 WHO-WHERE / 3 WHY / 4 PROOF / 5 FIT-RISK 重排：先讲宽桌面/工作台需要更大范围任务照明，再讲 creative workstation、drafting、video call、workbench 等场景，第三条放 3-stage foldable、section modes、Radar Sensor、touch & remote、backlight，第四条放 Ra 95、1600 lux、3000 K-6500 K、timer、memory function，最后核对夹具、尺寸、包装和禁止写 Auto Dimming。原因：Studio 不是 monitor light bar，五点必须先把品类和使用空间讲清楚。","glow-white":'已按 1 WHAT / 2 WHO-WHERE / 3 WHY / 4 PROOF / 5 FIT-RISK 重排：先讲 clean setup 中 front light + soft backlight 解决桌面光线平衡，再讲 home office、study、gaming 和白色桌搭场景，第三条放 Remote Control、Backlight、Webcam Friendly、Multi-Light Control，第四条放 Ra 95、Anti-Blue Light、900 lux、3000 K-6500 K，最后核对 17"-21" curved/flat monitor、AA Battery x3、USB-C Cable，并删除 Auto Dimming / 2-hour timer。原因：白色 Glow 的核心决策是外观和背光体验，随后才是参数和适配风险。'},g0={"focus-dual-control-grey":[{target:"Eye Caring、No Blue Light Hazard、optimal eye protection 等护眼承诺过重。",reason:"第 1 条应先回答长时间屏幕工作时的桌面照明痛点；当前更像认证和护眼承诺堆叠，合规风险偏高。",changeTo:"改成 Comfort-focused desk lighting / stable front light / reduced screen glare；认证只在有证据时作为补充。"},{target:"No Screen Glare & Space Saving 可保留，但缺少具体使用场景。",reason:"第 2 条应承接 WHO / WHERE，让买家快速判断是否适合自己的桌面、显示器和使用场景。",changeTo:"改成适合 home office、study、reading、typing 的屏幕挂灯，并说明不占桌面空间和照明只落在桌面区域。"},{target:"Auto-Dimming 和调光信息需要更聚焦。",reason:"这是 Focus 的核心选择理由，应作为 WHY，而不是只罗列传感器和参数。",changeTo:"突出 Smart Auto-Dimming、Touch & Remote Control、亮度/色温调节、2-hour timer；操作词与说明书一致。"},{target:"Ra98、照度、色温等证据分散且表达偏长。",reason:"PROOF 应集中放可验证参数，减少 high quality / professional 等空泛表达。",changeTo:"集中写 Ra 98、900 lux center、3000 K-6500 K、Anti-Blue Light；额外 lux 数值没有测试报告就不写。"},{target:"Masterful Illumination / myopia 等表达不稳。",reason:"最后一条应解决 FIT-RISK，而不是扩大健康承诺；myopia 风险词不适合 Amazon 五点。",changeTo:'改成 17"-21" flat monitor 适配、包装内容、USB-C cable、battery、安装确认；无证据不写 curved / ultrawide。'}],"im-curved-black":[{target:"先把 curved / ultrawide 的桌面痛点讲清楚。",reason:"IM 的购买入口是屏幕形态和沉浸氛围，不能一开始只堆护眼或 RGB 参数。",changeTo:"改成 front + back lighting for curved / ultrawide setups，解释前光照桌面、背光增强氛围。"},{target:"人群和场景需要前置。",reason:"WHO / WHERE 能让 gamer、creator、remote worker 判断这款是不是自己要的型号。",changeTo:'写 gaming setup、creator desk、video call、ultrawide workstation，并明确 21"-49" curved/flat monitor。'},{target:"RGB、Auto Dimming、Remote Control 需要成为核心 WHY。",reason:"这些是 IM 区分 Focus / Glow 的关键功能，应独立成一条选择理由。",changeTo:"写 RGB Backlight、Auto Dimming、Remote Control、Webcam Friendly、Multi-Light Control；RGB 模式数量无资料不写死。"},{target:"技术证据需要集中且可核验。",reason:"PROOF 应服务信任建立，不应和场景、安装、配件混在一起。",changeTo:"集中写 Ra 98、Anti-Blue Light、1400 lux center、3000 K-6500 K；没有报告的 1100/800/500 lux 不写。"},{target:"适配、配件、配对秒数要统一。",reason:"这是减少退货和买错型号的最后防线，也最容易与说明书冲突。",changeTo:'写 21"-49" 适配、包装内容、pairing 4 seconds、unpair 5 seconds；曲率/厚度需有资料再写。'}],"studio-foldable-black":[{target:"不要套用 monitor light bar 逻辑。",reason:"Studio 是桌边夹灯/宽桌面任务灯，第一条要先建立品类和痛点。",changeTo:"改成 wide-area task lighting for workbench / large desks，说明三段灯体覆盖更大桌面。"},{target:"场景应围绕大桌面专业工作。",reason:"Studio 的购买场景不是普通屏幕挂灯，而是 drafting、creative workstation、多屏、视频会议等。",changeTo:"写 creative workstation、drafting、reading、video conference、workbench，避免泛泛 home office。"},{target:"核心差异功能要准确。",reason:"说明书没有 Auto Dimming；如果写错，会影响 Listing、视频、A+ 的一致性。",changeTo:"写 3-stage foldable light bar、section lighting modes、Radar Sensor auto on/off、backlight、touch & remote control。"},{target:"参数和证明集中展示。",reason:"1600 lux、Ra95、3000 K-6500 K 是信任层，应放在 PROOF，而不是散落各条。",changeTo:"集中写 Ra 95、1600 lux center、3000 K-6500 K、2-hour timer、Memory Function，并按说明书命名。"},{target:"安装尺寸和夹具风险要收尾。",reason:"桌边夹灯买错多发生在夹具、桌厚、高度、空间关系上，最后一条必须消除疑虑。",changeTo:"写 clamp / height / lamp size / included components；所有角度和厚度参数没有产品资料时先标待确认。"}],"glow-white":[{target:"先讲 clean setup 的光线平衡痛点。",reason:"白色 Glow 的购买动机先来自外观、桌搭和前光 + 背光体验，不应先堆功能词。",changeTo:"改成 front light + soft backlight for clean desk setups，讲桌面照明和屏幕后方柔和氛围。"},{target:"场景与外观一致性要清楚。",reason:"白色款要让用户判断它适合浅色桌搭、学习、办公、游戏，而不是黑色/IM 氛围。",changeTo:'写 home office、study、reading、gaming setup、white / light-color desk setup，并明确 17"-21" curved/flat monitor。'},{target:"删除说明书没有的 Auto Dimming / timer。",reason:"当前方向里如果继续出现 Auto Dimming 或 2-hour timer，会和说明书冲突。",changeTo:"改成 Remote Control、Backlight brightness/color temperature control、Webcam Friendly、Multi-Light Control。"},{target:"参数证据集中写。",reason:"Ra95、900 lux、3000 K-6500 K 是 PROOF，不要和场景、适配、包装混写。",changeTo:"集中写 Ra 95、Anti-Blue Light、900 lux center、3000 K-6500 K、7.5W / 5V 1.5A。"},{target:"适配和包装内容必须核对。",reason:"Glow 白色款容易和 Focus / IM 的配件、电池数量、适配范围混淆。",changeTo:'写 17"-21" curved/flat monitor、AA Battery x3、USB-C Cable；删除 AAA x2、Power Adapter、Hex Key 等错误配件。'}]},h0={"focus-dual-control-grey":"优化方向：Focus 视频可保留现有产品视频、开箱、亮度/色温、真实桌搭四类素材，但要统一新命名并降级健康承诺。YouTube 建议标题：Quntis Monitor Light Bar Focus Dual-Control 41 cm Grey | Product Overview；Quntis Focus Dual-Control | Unboxing & Setup；Quntis Focus Dual-Control | Brightness, CCT & Auto-Dimming；Quntis Focus Series | Real Desk Setup。播放列表建议放入 Quntis Focus Series、Monitor Light Bar Setup Guides、Desk Lighting Inspiration。片尾由内部统一准备，建议 3-5 秒 logo + 系列名 + 官网/播放列表引导；Remotion 适合做批量统一片头片尾、字幕条和系列色模板，实拍剪辑可用 Premiere / DaVinci / CapCut 完成。","im-curved-black":"优化方向：IM 视频需要把 reference-only 的开箱和调节视频标清楚，不要当成已完成素材；产品视频重点讲 eye-care front light + immersive RGB backlight + curved / ultrawide fit。YouTube 建议标题：Quntis Curved Monitor Light Bar IM 66 cm Black | RGB Backlight Overview；Quntis IM Series | RGB Backlight Modes；Quntis IM 66 cm | Curved & Ultrawide Setup；Quntis IM Series | Webcam-Friendly & Multi-Light Control。播放列表建议放入 Quntis IM Series、Gaming Desk Lighting、Monitor Light Bar Setup Guides。片尾同样内部统一；Remotion 用于批量模板，实拍和游戏场景剪辑用剪辑软件处理。","studio-foldable-black":"优化方向：Studio 视频不能套用 2213 灰款 monitor light bar 脚本，需重做产品专属脚本：3-stage foldable task light、wide desk coverage、radar sensing、backlight、section lighting、remote/touch control。YouTube 建议标题：Quntis Studio 3-Stage Foldable Desk Lamp 82 cm Black | Product Overview；Quntis Studio Series | Wide Desk Coverage；Quntis Studio Desk Lamp | Radar Sensing & Backlight；Quntis Studio Series | Creative Workstation Setup。播放列表建议放入 Quntis Studio Series、Creative Workspace Lighting、Desk Lamp Setup Guides。片尾内部统一；Remotion 适合做产品名卡、参数卡和系列色字幕模板，实际多机位演示建议用 Premiere / DaVinci。","glow-white":"优化方向：Glow 视频先核对字幕整理文档第 1595 行的 Pink 记录；实际视频如已确认未出现 Pink，只把源文档记录标为待修订，后台标题和视频标题卡统一为 Glow 41 cm White。无视频/参考视频标为 Reference only。视频主线应强调 white clean desk setup、remote control、soft backlight、webcam-friendly placement 和 multi-light control。YouTube 建议标题：Quntis Monitor Light Bar Glow 41 cm White | Product Overview；Quntis Glow Series | Remote Control & Backlight；Quntis Glow White | Webcam-Friendly Setup；Quntis Glow Series | Multi-Light Control。播放列表建议放入 Quntis Glow Series、Clean Desk Setup、Monitor Light Bar Setup Guides。片尾内部统一；Remotion 适合统一浅色系标题卡、字幕和收尾，实拍白色产品需要手动调色避免过曝。"},f0={B08DKQ3JG1:["先确认 ASIN 对应标准名：字幕源是 2205 Focus 40 cm Black，页面是 Focus Dual-Control 41 cm Grey；未确认前只做审查，不做最终字幕定稿。","按五类视频补齐：保留主视频、开箱、亮度/色温、Real Desk Setup；补产品专属灯条配对/多灯联控支持视频。","把健康承诺改为机制表达：减少 direct screen glare、desk-focused asymmetric lighting、comfortable screen-side setup。","如果说明书确认 Dual-Control、Smart Auto-Dimming、Ra98 等卖点，主视频要有可视化演示。"],B0F2DGNX7D:["先核对字幕整理文档第 1595 行的 Pink 记录；实际视频如已确认未出现 Pink，只修正文档记录和页面备注，所有标题卡统一为 Glow 41 cm White。","按五类视频补齐：主视频和开箱可进入修订；亮度/色温、多灯联控目前是 Reference only；Real Desk Setup 需命名优化。","主视频补 Webcam Friendly 和 Multi-Light Control；如果说明书未确认，不写成已具备功能。","把 Ultimate Eye Protection / Eye-Care Technology 改成 comfort-focused lighting、soft backlight、reduced harsh glare。"],B0F9LBFHJZ:["保留 IM 66 cm Black 标准名，但所有参考 2217 / 2213 的视频都要标 Reference only，不能当作产品专属素材。","按五类视频补齐：主视频可修订；开箱和亮度/色温需补产品专属；Multi-Light Control 需功能验证；Real Desk Setup 需命名更新。","主视频重点表达 IM Series：eye-care front light + immersive RGB backlight、curved / ultrawide fit、Webcam Friendly、Multi-Light Control。","所有 RGB 模式数量、Auto Dimming、配对秒数、Adapter 和屏幕适配参数按说明书复核。"],B0FDPXHQW8:["Studio 不套 monitor light bar 脚本；开箱、调节和支持视频都要重做 Studio 专属版本。","按五类视频改写：主视频和 Real Desk Setup 可修订；开箱、调节缺产品专属；第 4 类应为 remote pairing / sensor support，不写 Multi-Light Control。","主视频重点表达 Studio Series：3-stage foldable、wide desk coverage、radar sensing、backlight、section lighting、creative workstation。","先统一 1600 lux、5%-100% / 10%-100%、3000K-6500K、29.5±3.9 inch、5 min auto off、2 hr timer 等说明书参数。"]},p0=[["素材命名","按平台-语种-Quntis-[产品名和SKU]-内容类型-序号命名，图片、A+、视频封面和说明书统一口径。"],["单位规则","尺寸优先 inch + cm 同时展示；重量按 g / kg / lb 统一，具体展示随站点本地习惯调整。"],["术语统一","产品名、系列名、型号、控制方式、功能词必须与术语库、命名表、包装和说明书一致。"],["跨页面一致","标题、主图、五点、A+、视频、包装、说明书中的参数、适配范围、配件和功能不能互相冲突。"],["谨慎表达","Eye-care、protect eyes、No Blue Light、certified、award、warranty 等需按证据和 Amazon 合规口径复核。"]],Wd="quntis-214-grey-issue-report-v2",Gl="quntis-listing-review-edit-state-v1",Zd="quntis-listing-workspace-notes-v1",og="quntis-listing-view-state-v1",js="v1";function Pd(){if(typeof window>"u")return{};try{return JSON.parse(window.localStorage.getItem(og)||"{}")||{}}catch{return{}}}const b0={series:Ae.series,productSku:Ae.sku,productName:Ae.standardName,section:"",owner:"Copy QA",evidence:"",evidenceImage:"",replacementCopy:"",impact:"",updatedAt:"2026-06-24"};function ro(c){const m={...b0,...c};return{...m,section:m.section||wp(m)}}const $d=zp.map((c,m)=>ro({...c,owner:c.owner||(m===0?"Quntis":m===3?"Product":m===4?"Terminology":"Copy QA"),evidence:c.evidence||(m===0?"Independent-site page title":m===2?"Naming table field W":m===3?"Naming table fields O/P":c.basis),replacementCopy:c.replacementCopy||(m===0?"Quntis Monitor Light Bar Glow 41 cm (16.1 inch) Grey":m===1?"Designed for comfortable desk lighting with reduced screen glare and soft backlight.":m===4?"Multi-Light Control":c.suggestion),impact:c.impact||(m===0?"Keeps product naming consistent across A+, Listing, packaging, and video":m===1?"Reduces Amazon compliance risk and avoids unsupported medical claims":m===3?"Avoids purchase confusion and parameter conflicts":"Improves terminology consistency and designer execution clarity")}));function xs(c,m,f){const u=new Blob([m],{type:f}),_=URL.createObjectURL(u),M=document.createElement("a");M.href=_,M.download=c,M.click(),URL.revokeObjectURL(_)}function y0(c){const m=["priority","fixed","series","productSku","productName","section","location","currentCopy","type","issue","suggestion","basis","evidence","evidenceImage","replacementCopy","impact","needsImage","status","owner","updatedAt","notes"],f=u=>`"${String(u??"").replaceAll('"','""')}"`;return[m.join(","),...c.map(u=>m.map(_=>f(_==="fixed"?u.status==="Done"?"Yes":"No":_==="section"?uo(u.section):u[_])).join(","))].join(`
`)}function v0(c){return c.map((m,f)=>[`## ${f+1}. ${m.priority} - ${m.location}`,"",`- Fixed: ${m.status==="Done"?"Yes":"No"}`,`- Series: ${m.series||"/"}`,`- Product: ${m.productName||m.productSku||"/"}`,`- Section: ${uo(m.section)||"/"}`,`- Current copy: ${m.currentCopy||"/"}`,`- Issue type: ${m.type||"/"}`,`- Problem: ${m.issue||"/"}`,`- Suggested fix: ${m.suggestion||"/"}`,`- Replacement copy: ${m.replacementCopy||"/"}`,`- Basis: ${m.basis||"/"}`,`- Evidence: ${m.evidence||"/"}`,`- Evidence image: ${m.evidenceImage||"/"}`,`- Impact: ${m.impact||"/"}`,`- Need image: ${m.needsImage||"/"}`,`- Status: ${m.status||"/"}`,`- Owner: ${m.owner||"/"}`,`- Updated: ${m.updatedAt||"/"}`,`- Notes: ${m.notes||"/"}`].join(`
`)).join(`

`)}function _0(){const c=["listing","issues","structure","mockup","compare","evidence","missing"],m=c.includes(window.location.hash.replace("#",""))?window.location.hash.replace("#",""):"issues",[f,u]=he.useState(m),[_,M]=he.useState(()=>{const C=localStorage.getItem(Wd);return C?JSON.parse(C).map(ro):$d}),[N,x]=he.useState(""),[R,E]=he.useState("All"),[q,K]=he.useState("All"),[Z,fe]=he.useState("All"),[ye,ne]=he.useState("All");he.useEffect(()=>{localStorage.setItem(Wd,JSON.stringify(_))},[_]),he.useEffect(()=>{const C=()=>{const D=window.location.hash.replace("#","");c.includes(D)&&u(D)};return window.addEventListener("hashchange",C),()=>window.removeEventListener("hashchange",C)},[]);const Me=C=>{u(C),window.history.replaceState(null,"",`#${C}`)},De=he.useMemo(()=>{const C=N.trim().toLowerCase();return _.filter(D=>{const V=!C||Object.values(D).some(j=>String(j).toLowerCase().includes(C)),le=R==="All"||D.status===R,g=q==="All"||D.priority===q,z=Z==="All"||D.type===Z,k=ye==="All"||D.section===ye;return V&&le&&g&&z&&k})},[_,N,R,q,Z,ye]),G=he.useMemo(()=>{const C=D=>_.filter(D).length;return{total:_.length,p0:C(D=>D.priority==="P0"),needImage:C(D=>D.needsImage==="Yes"||D.status==="Need image"),open:C(D=>D.status!=="Done"),done:C(D=>D.status==="Done")}},[_]),ze=he.useMemo(()=>co.map(C=>{const D=_.filter(V=>V.section===C.id);return{...C,total:D.length,open:D.filter(V=>V.status!=="Done").length,done:D.filter(V=>V.status==="Done").length}}),[_]),I=he.useMemo(()=>{const C=D=>["All",...Array.from(new Set(_.map(V=>V[D]).filter(Boolean)))];return{statuses:C("status"),priorities:C("priority"),types:C("type")}},[_]),Y=(C,D,V)=>{M(le=>le.map(g=>g.id===C?ro({...g,[D]:V,updatedAt:new Date().toISOString().slice(0,10)}):g))},xe=(C,D)=>{M(V=>V.map(le=>le.id===C?{...le,status:D?"Done":"Open",updatedAt:new Date().toISOString().slice(0,10)}:le))},ee=()=>{M(C=>[...C,ro({id:crypto.randomUUID(),priority:"P2",location:"",currentCopy:"",type:"Terminology",issue:"",suggestion:"",basis:"Glossary / naming table",evidence:"",evidenceImage:"",replacementCopy:"",impact:"",needsImage:"No",status:"Open",owner:"Copy QA",updatedAt:new Date().toISOString().slice(0,10),notes:""})])},Ye=C=>M(D=>D.filter(V=>V.id!==C)),ot=()=>M($d),nt=[["images","图片（包含需designer确认的信息）"],["aplus","A+（包含需designer确认的信息）"],["title","标题"],["bullets","五点"],["video","视频"]],We=[{id:"focus-dual-control-grey",series:"Focus",name:"Quntis Monitor Light Bar Focus Dual-Control 41 cm (16.1 inch) Grey",asin:"B08DKQ3JG1",amazon:"https://www.amazon.com/dp/B08DKQ3JG1"},{id:"im-curved-black",series:"IM",name:"Quntis Curved Monitor Light Bar IM 66 cm (26 inch) Black",asin:"B0F9LBFHJZ",amazon:"https://www.amazon.com/dp/B0F9LBFHJZ"},{id:"studio-foldable-black",series:"Studio",name:"Quntis 3-Stage Foldable Desk Lamp Studio 82 cm (32.3 inch) Black",asin:"B0FDPXHQW8",amazon:"https://www.amazon.com/dp/B0FDPXHQW8"},{id:"glow-white",series:"Glow",name:"Quntis Monitor Light Bar Glow 41 cm (16.1 inch) White",asin:"B0F2DGNX7D",amazon:"https://www.amazon.com/dp/B0F2DGNX7D"}],[ke,ht]=he.useState(()=>{const C=Pd(),D=C.listingSection||C.activeSection;return nt.some(([V])=>V===D)?D:"images"}),[Ue,Fe]=he.useState(()=>{const C=Pd(),D=C.listingProduct||C.activeProduct;return We.some(V=>V.id===D)?D:"focus-dual-control-grey"});he.useEffect(()=>{localStorage.setItem(og,JSON.stringify({listingSection:ke,listingProduct:Ue}))},[ke,Ue]);const T=[["listing","Listing + A+",$f],["issues","Issue Report",Yf],["structure","New A+ Structure",Zf],["mockup","Visual Mockup",tp],["compare","Before / After",pp],["evidence","Image Links",Ql],["missing","Missing Assets",so]];return o.createElement("div",{className:"app-shell"},o.createElement("aside",{className:"sidebar"},o.createElement("div",{className:"brand-mark"},o.createElement("img",{className:"mark",src:"/assets/quntis-app-icon.png",alt:"Quntis"}),o.createElement("div",null,o.createElement("strong",null,"Listing 及 A+ 页面"))),f==="listing"?o.createElement("nav",{className:"nav-list listing-side-nav"},nt.map(([C,D])=>o.createElement("button",{key:C,className:ke===C?"active":"",onClick:()=>ht(C)},o.createElement("span",null,D)))):o.createElement("nav",{className:"nav-list"},T.map(([C,D,V])=>o.createElement("button",{key:C,className:f===C?"active":"",onClick:()=>Me(C)},o.createElement(V,{size:17}),o.createElement("span",null,D)))),f==="listing"?o.createElement("div",{className:"listing-purpose-card"},o.createElement("span",{className:"eyeline"},"说明"),o.createElement("p",null,"此处是在 Focus、Glow、IM、Studio 中，各取一个产品，目的是做页面效果优化的方案。 等方案确认后，将会做每个 model 的页面，也会有目前和优化后的视觉对比，方便讨论。")):o.createElement("div",{className:"source-card"},o.createElement("span",{className:"eyeline"},"Source facts"),o.createElement("strong",null,Ae.standardName),o.createElement("dl",null,o.createElement("dt",null,"SKU"),o.createElement("dd",null,Ae.sku),o.createElement("dt",null,"Variant"),o.createElement("dd",null,Ae.variant),o.createElement("dt",null,"Series"),o.createElement("dd",null,Ae.series)))),o.createElement("main",{className:"main"},f!=="listing"&&o.createElement("header",{className:"topbar"},o.createElement("div",null,o.createElement("h1",null,"LI-HY-2214-GY-QU A+ Review Workspace"),o.createElement("p",null,"Editable US-first issue report, A+ structure, visual mockup, before/after notes, and missing assets.")),o.createElement("div",{className:"top-actions"},o.createElement("a",{href:Ae.amazon,target:"_blank",rel:"noreferrer"},"Amazon"),o.createElement("a",{href:Ae.site,target:"_blank",rel:"noreferrer"},"Independent site"))),f==="listing"&&o.createElement(B0,{sections:nt,products:We,activeSection:ke,activeProduct:Ue,setActiveSection:ht,setActiveProduct:Fe}),f==="issues"&&o.createElement(J0,{issues:_,filteredIssues:De,stats:G,filterOptions:I,query:N,setQuery:x,statusFilter:R,setStatusFilter:E,priorityFilter:q,setPriorityFilter:K,typeFilter:Z,setTypeFilter:fe,sectionFilter:ye,setSectionFilter:ne,sectionStats:ze,updateIssue:Y,toggleFixed:xe,addIssue:ee,removeIssue:Ye,resetIssues:ot}),f==="structure"&&o.createElement(t1,null),f==="mockup"&&o.createElement(n1,null),f==="compare"&&o.createElement(a1,null),f==="evidence"&&o.createElement(l1,null),f==="missing"&&o.createElement(i1,null),o.createElement("footer",{className:"footer-note"},"等 US 的全部完成后，再做其他语种同步。")))}function B0({sections:c,products:m,activeSection:f,activeProduct:u,setActiveSection:_,setActiveProduct:M}){const N=o.useRef(null),x=o.useRef(null),R=o.useRef(null),E=o.useRef([]),q=o.useRef(0),K=o.useRef(!1),Z=o.useRef(null),fe=o.useRef(null),ye=o.useRef(null),[ne,Me]=he.useState(""),De=c.find(([S])=>S===f)?.[1]||"主图",G=m.find(S=>S.id===u)||m[0],ze=G.id==="focus-dual-control-grey",I=f!=="images"&&f!=="title",Y=ze,xe=jp[G.asin],ee=kp[G.asin]||0,Ye=Array.from({length:ee},(S,O)=>{const H=String(O+1).padStart(2,"0");return`/assets/listing-gallery/${G.asin}/${G.asin}_${H}.jpg`}),ot=Op[G.asin]||[],nt=S=>Ye[S]||"",We=S=>{const O={0:nt(S),1:"/assets/optimized-listing/focus/focus-optimized-02-scene.png",2:"/assets/optimized-listing/focus/focus-optimized-03-dual-control.png",3:"/assets/optimized-listing/focus/focus-optimized-06-auto-dimming.png",4:"/assets/optimized-listing/focus/focus-optimized-07-light-controls.png",5:"/assets/optimized-listing/focus/focus-optimized-04-flicker-free-lighting.png",6:"/assets/optimized-listing/focus/focus-optimized-05-desk-coverage.png",7:"/assets/optimized-listing/focus/focus-optimized-08-monitor-fit-box.png",8:"/assets/optimized-listing/focus/focus-optimized-09-ra98-color-rendering.png"},H={0:"/assets/optimized-listing/studio/studio-optimized-01-main.png",1:"/assets/optimized-listing/studio/studio-optimized-02-scene.png",2:"/assets/optimized-listing/studio/studio-optimized-03-wide-desk-coverage.png",3:"/assets/optimized-listing/studio/studio-optimized-04-radar-sensing.png",4:"/assets/optimized-listing/studio/studio-optimized-05-light-controls.png",5:"/assets/optimized-listing/studio/studio-optimized-06-section-modes-timer-memory.png",6:"/assets/optimized-listing/studio/studio-optimized-07-easy-dual-control.png",7:"/assets/optimized-listing/studio/studio-optimized-08-flexible-angle-adjustment.png",8:"/assets/optimized-listing/studio/studio-optimized-09-use-cases.png"},te={0:nt(S),1:"/assets/optimized-listing/im/im-optimized-02-scene.png",2:"/assets/optimized-listing/im/im-optimized-03-dual-control.png",3:"/assets/optimized-listing/im/im-optimized-04-auto-dimming.png",4:"/assets/optimized-listing/im/im-optimized-05-rgb-modes.png",5:"/assets/optimized-listing/im/im-optimized-06-asymmetrical-optical-design.png",6:"/assets/optimized-listing/im/im-optimized-07-curved-ultrawide-coverage.png",7:"/assets/optimized-listing/im/im-optimized-08-monitor-fit-box.png",8:"/assets/optimized-listing/im/im-optimized-09-webcam-multi-light-control.png"};return{"focus-dual-control-grey":O,"im-curved-black":te,"studio-foldable-black":H,"glow-white":{0:"/assets/optimized-listing/glow/glow-optimized-01-main.png",1:"/assets/optimized-listing/glow/glow-optimized-02b-scene-light.png",2:"/assets/optimized-listing/glow/glow-optimized-03-remote-control.png",4:"/assets/optimized-listing/glow/glow-optimized-05-light-controls.png",5:"/assets/optimized-listing/glow/glow-optimized-06-even-desk-coverage.png",7:"/assets/optimized-listing/glow/glow-optimized-08-flexible-monitor-fit.png",8:"/assets/optimized-listing/glow/glow-optimized-09-camera-multi-light-control.png"}}[G.id]?.[S]||""},ke=S=>ot[S],ht=(S,O)=>`Amazon-US-Quntis-[${G.name}]-${S.filenameToken}-${String(O+1).padStart(2,"0")}.jpg`,[Ue,Fe]=he.useState(()=>{const S=localStorage.getItem(Gl)||localStorage.getItem(Zd);if(!S)return{};try{const O=JSON.parse(S);return O?.editState||O||{}}catch{return{}}}),T=Ue[G.asin]||Ue[G.id]||{};he.useEffect(()=>{localStorage.setItem(Gl,JSON.stringify(Ue))},[Ue]);const C=S=>{Me(S),window.setTimeout(()=>Me(""),3600)},D=()=>{const S=m.reduce((O,H)=>(O[H.asin]=Ue[H.asin]||Ue[H.id]||{},O),{});return{exportedAt:new Date().toISOString(),pageVersion:js,storageKey:Gl,currentProductId:G.id,currentAsin:G.asin,activeSection:f,products:m.map(({id:O,series:H,name:te,asin:Ce,amazon:kt})=>({id:O,series:H,name:te,asin:Ce,amazon:kt})),editState:S}},V=()=>{const S=new Date,O=`${S.getFullYear()}-${String(S.getMonth()+1).padStart(2,"0")}-${String(S.getDate()).padStart(2,"0")}-${String(S.getHours()).padStart(2,"0")}-${String(S.getMinutes()).padStart(2,"0")}`,H=new Blob([JSON.stringify(D(),null,2)],{type:"application/json"}),te=URL.createObjectURL(H),Ce=document.createElement("a");Ce.href=te,Ce.download=`quntis-listing-edit-state-${O}.json`,document.body.appendChild(Ce),Ce.click(),Ce.remove(),URL.revokeObjectURL(te),C("已导出当前编辑内容 JSON。")},le=S=>{const O=S.target.files?.[0];if(S.target.value="",!O)return;const H=new FileReader;H.onload=()=>{try{const te=JSON.parse(String(H.result||"{}"));if(te.pageVersion&&te.pageVersion!==js){C(`版本不匹配：当前 ${js}，文件 ${te.pageVersion}。`);return}const Ce=te.editState||te;if(!Ce||typeof Ce!="object"||Array.isArray(Ce)){C("导入失败：JSON 格式不正确。");return}Fe(Ce),localStorage.setItem(Gl,JSON.stringify(Ce)),C(`已导入 ${Object.keys(Ce).length} 个产品的编辑内容。`)}catch{C("导入失败：无法解析 JSON 文件。")}},H.readAsText(O)},g=()=>{window.confirm("确认清除本地编辑内容？这只会清除 localStorage 里的手动编辑，不会删除默认数据和素材。")&&(Fe({}),localStorage.removeItem(Gl),localStorage.removeItem(Zd),C("已清除本地手动编辑，页面回到默认内容。"))},z=(S,O,H)=>{Fe(te=>({...te,[G.asin]:{...te[G.asin]||te[G.id]||{},images:{...(te[G.asin]||te[G.id]||{}).images||{},[S]:{...((te[G.asin]||te[G.id]||{}).images||{})[S]||{},[O]:H}}}}))},k=(S,O)=>Object.prototype.hasOwnProperty.call(T.images?.[S]||{},O),j=(S,O)=>k(S,O)&&T.images?.[S]?.[O]||"",J=S=>k(S,"reason")?T.images?.[S]?.reason||"":Jd[G.id]?.[S]?Jd[G.id][S]:xp[S]||"",ae=S=>Qp[G.id]?.[S]||"",ue=Ip(G.id).map((S,O)=>{const H=Number.isInteger(S.currentIndex),te=Number.isInteger(S.optimizedIndex),Ce=H?Il[S.currentIndex]:null,kt=te?Il[S.optimizedIndex]:null,On=Il[O],fo=H?j(S.currentIndex,"currentImage")||nt(S.currentIndex):"",po=te?j(S.optimizedIndex,"optimizedImage")||We(S.optimizedIndex):"";return{key:`${S.currentIndex}-${S.optimizedIndex}-${O}`,title:S.topic||Ce?.role||kt?.role||On?.role||`图片 ${O+1}`,currentSlot:S.currentSlot||Ce?.label||"当前无对应图",optimizedSlot:S.optimizedSlot||kt?.label||"优化后无对应图",currentImage:fo,optimizedImage:po,currentPlaceholder:H?S.currentIndex<ee?"当前 Amazon 图片待补":"当前页面暂无这一张":"当前页面暂无同功能图",optimizedPlaceholder:te?"按 VI 规范更新后的效果图待补":"按 VI 规范更新后暂无同功能图",isReordered:S.currentIndex!==S.optimizedIndex}}),Ve=(S,O)=>{Fe(H=>({...H,[G.asin]:{...H[G.asin]||H[G.id]||{},sections:{...(H[G.asin]||H[G.id]||{}).sections||{},[f]:{...((H[G.asin]||H[G.id]||{}).sections||{})[f]||{},[S]:O}}}}))},Te=S=>T.sections?.[f]?.[S]||"",sn=S=>f==="video"&&S==="current"?m0[G.id]||"":f==="bullets"&&S==="optimized"?d0[G.id]||"":f==="video"&&S==="optimized"&&h0[G.id]||"",ea=(S,O,H)=>{Fe(te=>({...te,[G.asin]:{...te[G.asin]||te[G.id]||{},aplusModules:{...(te[G.asin]||te[G.id]||{}).aplusModules||{},[S]:{...((te[G.asin]||te[G.id]||{}).aplusModules||{})[S]||{},[O]:H}}}}))},Ka=(S,O)=>T.aplusModules?.[S]?.[O]||"",Ha={images:{note:"亚马逊总共可以有 1 张主图 + 最多 8 张辅图。建议优先规划为 1 主图 + 6 辅图，第 8、第 9 张作为补充 / 备用。",specs:[["主图背景","主图背景必须为纯白色 RGB 255, 255, 255；不要使用灰底、场景底、色块或渐变背景。白底主图作为 Amazon 合规主方案；因目前部分产品使用非白底主图，可同步做一套场景主图备选，仅先覆盖这四款示例供内部讨论。若讨论后确认不采用，后续其他 model 不再延展非白底主图方案。"],["主图内容","主图只展示实际售卖产品本体；不放文字、logo、水印、边框、道具、包装盒或未售卖配件。"],["主体占比","产品通常需占画面至少 85%；建议 2000 x 2000 px 或以上，保持 1:1 方图，便于缩放查看。"],["辅图边界","辅图可以做场景图、功能图、文字说明图、兼容性和配件信息；这些内容不要放在主图。"],["清晰度","图片必须清晰，避免模糊、低分辨率、像素化、拉伸、压缩噪点或边缘发虚。"],["格式 / 大小","JPG / PNG / BMP，RGB 色彩模式；单张图片建议不超过 2 MB。"]]},title:{note:"标题按 Amazon 合规、搜索展示和 AI 可解析性检查：前段优先使用标准产品名，确保品牌、产品类型、系列/型号、尺寸和颜色清晰一致；后段关键差异点根据销售需求灵活调整。备注：这里的新命名是建议方案，因为包装、说明书、站外页面会逐步开始使用新命名，标题中加入标准命名有利于搜索、AI 识别和多渠道一致性；同时第 2 张图片也已经使用新命名。如果出于 Amazon 站内销售表现或现有流量考虑暂不完全更换标题命名，也可以保留部分原有表达，在多渠道一致性和销售实际之间做平衡。",specs:[["Amazon 上限","当前规则按不超过 200 characters 检查；同时预留 2026-07-27 后 75 characters 收紧版本。"],["AI 可读结构","Brand + Product Type + Series / Model + Size + Color + Defining Feature，避免让 Rufus 把控制方式、尺寸或系列识别错。"],["合规风险","不放价格、促销词、排名词、主观夸张词；避免禁用特殊字符和同一关键词机械重复。"],["跨页面一致","标题中的系列名、尺寸、颜色、控制方式、适配范围要和主图、五点、A+、视频、包装同源。"]]},bullets:{note:"五点按 Amazon Bullet Points / Item Highlights 要求检查：信息必须准确、简洁、可验证，优先承接标题放不下的关键购买信息；每点明确说明一个具体信息，例如适配范围、尺寸参数、控制方式、安装方式、光效/背光、包装或售后。",specs:[["数量 / 长度","通常规划 5 条；Amazon 官方 bullet point 长度为每条 10-255 characters；如类目后台限制更短，以后台为准。"],["内容标准","优先写可核验信息：规格、兼容、控制方式、安装/操作、场景差异和包装内容。"],["禁用风险","避免特殊字符、emoji、全大写、促销价格、外部导流、退款保证、无依据排名或奖项。"],["跨页面一致","五点中的系列名、型号、尺寸、颜色、参数和功能词要与标题、主图、A+、视频、包装一致。"]]},aplus:{note:"A+ 按 Amazon A+ Content Manager 的模块、图片和内容审核限制检查：素材尺寸需匹配所选模块，单图不超过 2 MB，避免模糊、低清、动图、价格促销、外部导流、保修承诺和与 ASIN 不匹配的信息。特别检查内容池是否覆盖 Camera Friendly、Multi-Light Control、是否伤屏幕、是否遮挡内置摄像头等购买疑虑。",specs:[["模块数量","Basic A+ 最多 5 个模块；Premium A+ 最多 7 个模块，具体可用模块以后台权限为准。"],["常用尺寸","Basic A+ 全宽图常见 970 x 300 px；Premium A+ 全宽图常见 1464 x 600 px；具体按后台模块提示输出。"],["模块小图","图文模块常见 300 x 300 px、220 x 220 px、135 x 135 px 等规格；不要混用不同模块尺寸。"],["图片规格","JPG / PNG / BMP，RGB 色彩模式；每张图片不超过 2 MB，至少 72 dpi；建议按 2x 底稿导出，避免上传后被裁切或压缩变糊。"],["内容限制","不放价格、折扣、限时促销、外部链接、二维码、联系方式、客户评价或竞品攻击。"],["声明风险","保修、退款、认证、奖项、环保、医疗/护眼效果等声明必须有依据，且不能与标题、五点、图片、视频冲突。"]]},video:{note:"视频按 Amazon Listing 产品视频上传要求检查：文件建议使用最高可用清晰度，最高到 1080p；格式使用 .mp4 或 .mov；文件不超过 5 GB。若用于 Sponsored Brands / Ads 或 Storefront 视频，需另按对应广告位规则检查。",specs:[["尺寸 / 清晰度","Listing 产品视频建议 1920 x 1080 px；最低按 1280 x 720 px 检查，避免低清、拉伸、黑边和过度压缩。"],["格式 / 大小","Product video 使用 .mp4 或 .mov；文件大小不超过 5 GB。广告视频常见限制为 500 MB，需按投放入口复核。"],["时长","产品页视频建议控制在 30-60 秒内；广告视频常见要求为 6-45 秒，具体以对应上传入口为准。"],["画面 / 字幕","画面稳定、亮度正常、文字可读；字幕术语需与命名表、标题、五点、A+、说明书一致。"],["内容限制","不放价格促销、外部导流、竞品攻击、医疗化/绝对化承诺、无法证明的认证奖项或与 ASIN 不匹配的信息。"]]}},Ut=t0[G.id],cn=(S,...O)=>{S&&O.forEach(H=>{H&&Math.abs(H.scrollLeft-S.scrollLeft)>1&&(H.scrollLeft=S.scrollLeft)})},ta=S=>{const O=S.currentTarget;cn(O,N.current,x.current,R.current)},mo=S=>{const O=S.currentTarget;cn(O,x.current,R.current)},Kl=S=>{const O=S.currentTarget;cn(O,Z.current,fe.current)},Fa=S=>{const O=S.currentTarget;cn(O,fe.current)},na=(S,O)=>o.createElement("nav",{className:S,"aria-label":O},m.map(H=>o.createElement("button",{className:u===H.id?"active":"",key:H.id,onClick:()=>{go(),M(H.id)}},o.createElement("span",null,H.series),o.createElement("strong",null,H.name),o.createElement("a",{href:H.amazon,target:"_blank",rel:"noreferrer",onClick:te=>te.stopPropagation()},"View on Amazon")))),Va=()=>{const S=Math.min(Math.max(window.innerHeight*.3,180),360);let O=q.current||0,H=Number.POSITIVE_INFINITY;return E.current.forEach((te,Ce)=>{if(!te)return;const kt=te.getBoundingClientRect();if(kt.bottom<120||kt.top>window.innerHeight-80)return;const On=Math.abs(kt.top-S);On<H&&(H=On,O=Ce)}),O},go=()=>{f==="images"&&(q.current=Va(),K.current=!0)};he.useEffect(()=>{if(f!=="images")return;const S=N.current;S&&(x.current&&(x.current.scrollLeft=S.scrollLeft),R.current&&(R.current.scrollLeft=S.scrollLeft))},[f,u]),he.useEffect(()=>{if(f!=="images"||!K.current)return;const S=q.current||0;window.requestAnimationFrame(()=>{const O=E.current[S];O&&O.scrollIntoView({block:"start",inline:"nearest",behavior:"auto"}),K.current=!1})},[u,f]),he.useEffect(()=>{if(!I)return;const S=Z.current;S&&fe.current&&(fe.current.scrollLeft=S.scrollLeft)},[I,f,u]);const ho=()=>f==="aplus"?o.createElement(S0,{modules:Np,getNote:Ka,onNoteChange:ea,currentContent:xe,product:G}):o.createElement(o.Fragment,null,f==="bullets"?o.createElement(Q0,null):null,f==="video"?o.createElement(X0,null):null,o.createElement("div",{className:`listing-compare-grid ${f==="bullets"||f==="video"?"no-designer-card":""}`},o.createElement(Us,{title:"目前页面的内容和情况",currentContent:xe,activeSection:f,product:G,note:Te("current")||sn("current"),placeholder:"下方注释：记录当前页面内容、问题或需要确认的点",onNoteChange:S=>Ve("current",S)}),o.createElement(Us,{title:"优化方向",variant:"optimized",currentContent:xe,activeSection:f,product:G,note:Te("optimized")||sn("optimized"),placeholder:"下方注释：记录优化方向、调整原因或待讨论点",onNoteChange:S=>Ve("optimized",S)}),f==="bullets"||f==="video"?null:o.createElement(Us,{title:"to designer",variant:"designer",note:Te("designer")||Pp[f]||"",placeholder:"给设计师：需要明确的 VI 规则、组件规范或设计边界",onNoteChange:S=>Ve("designer",S)})));return o.createElement("section",{className:"listing-workspace"},o.createElement("div",{className:"listing-sticky-stack"},o.createElement(Y0,null),f==="images"?o.createElement(ag,{requirement:Ha.images,collapsible:!0,title:"图片说明",subtitle:"Amazon 主图 / 辅图规格、边界和限制"}):null,f==="images"?o.createElement(A0,null):null,na("listing-product-tabs","Product selection"),o.createElement("div",{className:"listing-edit-toolbar"},o.createElement("div",null,o.createElement("strong",null,"编辑内容"),o.createElement("span",null,ne||"自动保存到本地浏览器")),o.createElement("button",{type:"button",onClick:V},"导出当前编辑内容"),o.createElement("button",{type:"button",onClick:()=>ye.current?.click()},"导入编辑内容"),o.createElement("button",{type:"button",className:"quiet",onClick:g},"清除本地编辑"),o.createElement("input",{ref:ye,type:"file",accept:"application/json,.json",onChange:le,hidden:!0}))),o.createElement("section",{className:"listing-decision-panel"},o.createElement("div",{className:"listing-panel-head"},o.createElement("h3",null,De)),f==="images"?null:o.createElement(ag,{requirement:Ha[f],collapsible:!0,title:`${De}说明`,subtitle:"展开查看规格、边界和限制"}),f==="title"&&Ut?o.createElement(I0,{product:G,decision:Ut}):null,f==="images"?o.createElement(o.Fragment,null,o.createElement(D0,null),Y?o.createElement("div",{className:"image-plan-lock-notice"},"Focus 当前页面情况注释已锁定；优化方向注释可继续编辑。"):null,o.createElement("div",{className:"image-plan-x-scrollbar",ref:x,"aria-label":"图片表横向滑动条",onScroll:ta},o.createElement("div",{className:"image-plan-x-scrollbar-inner"})),o.createElement("div",{className:"image-plan-scroll"},o.createElement("div",{className:"image-plan-scroll-track",ref:N,onScroll:mo},o.createElement("div",{className:"image-plan-table"},o.createElement("div",{className:"image-plan-head"},"图片位置"),o.createElement("div",{className:"image-plan-head"},"目前页面 / 内部备注"),o.createElement("div",{className:"image-plan-head"},"优化方向 / 内部备注"),Il.map((S,O)=>o.createElement(o.Fragment,{key:S.label},o.createElement("div",{className:"image-plan-slot",ref:H=>{E.current[O]=H}},o.createElement("strong",null,S.label),o.createElement("span",null,S.role),o.createElement("p",null,S.purpose),o.createElement("p",{className:"image-plan-buyer-logic"},S.buyerLogic),o.createElement("small",null,"为方便后续查看、检索和 AI 辅助整理，素材命名格式规范如下："),o.createElement("code",null,ht(S,O))),o.createElement(ng,{imageUrl:j(O,"currentImage")||nt(O),inputValue:j(O,"currentImage"),imageAlt:`${G.name} ${S.label} 当前 Amazon 图片`,currentMeta:ke(O),hideImageInput:!0,note:j(O,"current")||ae(O),imagePlaceholder:nt(O)?"当前 Amazon 图片":"暂无当前 Amazon 图片",notePlaceholder:"内部备注：目前情况、风险或待确认点",noteReadOnly:Y,onImageChange:H=>z(O,"currentImage",H),onNoteChange:H=>z(O,"current",H)}),o.createElement(ng,{imageUrl:j(O,"optimizedImage")||We(O),inputValue:j(O,"optimizedImage")||We(O),imageAlt:`${G.name} ${S.label} 优化方向图片`,currentMeta:null,suggestedName:ht(S,O),note:J(O),imagePlaceholder:"粘贴优化图链接后显示",notePlaceholder:"内部备注：优化原因、位置判断或待确认点",noteReadOnly:!1,onImageChange:H=>z(O,"optimizedImage",H),onNoteChange:H=>z(O,"reason",H)})))))),o.createElement(z0,{product:G,rows:ue}),o.createElement("div",{className:"image-plan-fixed-scrollbar"},o.createElement("span",null,"左右拖动图片表"),o.createElement("div",{className:"image-plan-fixed-scrollbar-track",ref:R,"aria-label":"固定底部图片表横向滑动条",onScroll:ta},o.createElement("div",{className:"image-plan-fixed-scrollbar-inner"})))):I?o.createElement(o.Fragment,null,o.createElement("div",{className:`listing-general-scroll listing-general-scroll-${f}`},o.createElement("div",{className:"listing-general-scroll-track",ref:Z,onScroll:Fa},o.createElement("div",{className:"listing-general-scroll-content"},ho()))),o.createElement("div",{className:`listing-general-fixed-scrollbar listing-general-fixed-scrollbar-${f}`},o.createElement("span",null,"左右拖动当前页面"),o.createElement("div",{className:"listing-general-fixed-scrollbar-track",ref:fe,"aria-label":"固定底部当前页面横向滑动条",onScroll:Kl},o.createElement("div",{className:"listing-general-fixed-scrollbar-inner"})))):null,na(`listing-product-tabs listing-product-fixed-tabs ${I||f==="images"?"":"listing-product-fixed-tabs-low"}`,"固定产品切换")))}function S0({modules:c,getNote:m,onNoteChange:f,currentContent:u,product:_}){const M=c.reduce((N,x)=>N+x.imageCount,0);return o.createElement("section",{className:"premium-aplus-comparison"},o.createElement(E0,{product:_}),o.createElement(R0,null),o.createElement(T0,{modules:c,currentContent:u,product:_}),o.createElement("div",{className:"premium-map-head"},o.createElement("div",null,o.createElement("h4",null,"Premium A+ 模块级内部备注"),o.createElement("p",null,"每个模块只保留目前 / 优化后两列；To designer 已集中到上方汇总。")),o.createElement("strong",null,M," images total")),o.createElement("div",{className:"premium-module-stack"},c.map((N,x)=>o.createElement("article",{className:`premium-module-comparison-card layout-${N.layout}`,key:N.name},o.createElement("div",{className:"premium-module-meta"},o.createElement("span",null,String(x+1).padStart(2,"0")),o.createElement("div",null,o.createElement("h5",null,N.name),o.createElement("p",null,N.imageCount," image",N.imageCount>1?"s":""," · ",N.size))),o.createElement("div",{className:"premium-before-after-grid"},o.createElement(tg,{module:N,title:"目前页面",mode:"current",currentContent:x===0?u:null,note:m(x,"current")||(x===0?"当前 A+ 内容已读取在本模块中；其他模块需根据后台截图继续补充对应图片内文字和真实模块位置。":"当前模块与线上 A+ 的一一对应关系需继续补截图确认；先记录该模块当前缺失、错位、术语不一致或图片内文字问题。"),placeholder:"注释：记录当前 A+ 这一模块的截图、问题、缺失图片或术语不一致",onNoteChange:R=>f(x,"current",R)}),o.createElement(tg,{module:N,title:"优化后方向",mode:"optimized",note:m(x,"optimized")||r0[x]||"",placeholder:"注释：记录新版模块的图片方向、文案调整原因或待设计确认点",onNoteChange:R=>f(x,"optimized",R)}))))))}function T0({modules:c,currentContent:m,product:f}){const u=(m?.aplus||[]).flatMap(_=>(_.modules||[]).map(M=>({...M,sectionLabel:_.label,sectionId:_.id}))).slice(0,c.length);return o.createElement("section",{className:"image-set-summary aplus-set-summary"},o.createElement("div",{className:"image-set-summary-head"},o.createElement("div",null,o.createElement("h5",null,"A+ 全模块效果一览"),o.createElement("p",null,"左边是当前 A+ 页面模块，右边是按 VI 和 Premium A+ 顺序规划后的模块；下方继续保留逐模块备注。")),o.createElement("span",null,c.length," modules")),o.createElement("div",{className:"image-set-summary-compare"},o.createElement("article",{className:"image-set-summary-column current"},o.createElement("div",{className:"image-set-summary-column-head"},o.createElement("strong",null,"当前 A+ 页面"),o.createElement("span",null,"从当前页面提取的模块缩略、文本和图片入口")),o.createElement("div",{className:"aplus-set-grid"},c.map((_,M)=>o.createElement(C0,{key:`current-aplus-${_.name}`,module:u[M],index:M,product:f})))),o.createElement("article",{className:"image-set-summary-column optimized"},o.createElement("div",{className:"image-set-summary-column-head"},o.createElement("strong",null,"按 VI 规范更新后"),o.createElement("span",null,"按品牌 VI、系列信息和购买逻辑统一后的 A+ 模块顺序")),o.createElement("div",{className:"aplus-set-grid"},c.map((_,M)=>o.createElement(w0,{key:`optimized-aplus-${_.name}`,module:_,index:M}))))))}function C0({module:c,index:m,product:f}){const u=c?.images?.[0],_=c?.texts?.find(M=>M&&M.trim().length>0);return o.createElement("article",{className:"aplus-set-card"},o.createElement("span",{className:"image-set-thumb-index"},String(m+1).padStart(2,"0")),o.createElement("div",{className:"aplus-set-card-media"},u?.src?o.createElement("img",{src:u.src,alt:u.alt||`${f.name} current A+ module ${m+1}`,loading:"lazy"}):o.createElement("div",{className:"image-set-thumb-empty","aria-label":"当前 A+ 模块待补"},o.createElement(so,{size:18}),o.createElement("span",null,"当前模块待补"))),o.createElement("div",{className:"aplus-set-card-body"},o.createElement("strong",null,c?`${c.sectionLabel||"A+ Section"} · Module ${c.moduleIndex||m+1}`:"当前无对应模块"),o.createElement("span",null,_||"当前页面暂无可读文本；需继续截图 / OCR 确认。")))}function w0({module:c,index:m}){return o.createElement("article",{className:"aplus-set-card optimized"},o.createElement("span",{className:"image-set-thumb-index"},String(m+1).padStart(2,"0")),o.createElement("div",{className:"aplus-set-plan-media"},o.createElement("strong",null,c.name.replace(/^Module\s+\d+｜/,"")),o.createElement("span",null,c.size)),o.createElement("div",{className:"aplus-set-card-body"},o.createElement("strong",null,c.imageCount," image",c.imageCount>1?"s":""),o.createElement("span",null,c.slots.map(f=>f.label).join(" / "))))}function E0({product:c}){return o.createElement("details",{className:"designer-guideline-summary aplus-designer-summary",open:!0},o.createElement("summary",null,o.createElement("span",null,"To designer 汇总"),o.createElement("strong",null,c.series," Series · A+ 模块、尺寸、内容池和字段规则集中在这里。")),o.createElement("div",{className:"designer-guideline-body"},o.createElement("div",{className:"designer-guideline-scope"},o.createElement("p",null,"A+ 页面需要和 Listing 图片、标题、五点、视频、包装和说明书同源。请先按本页内容池确认信息没有遗漏，再按 7 个模块落地；若后台只能使用 Basic A+，可以合并模块，但不要删除核心顾虑信息。")),o.createElement("div",{className:"designer-guideline-grid"},e0.map(m=>o.createElement("article",{key:m.title},o.createElement("h5",null,m.title),o.createElement("ul",null,m.items.map(f=>o.createElement("li",{key:f},f)))))),o.createElement("details",{className:"designer-image-position-rules"},o.createElement("summary",null,"原每个模块 to designer 内容已提取到汇总规则"),o.createElement("ol",null,$p.map(m=>o.createElement("li",{key:m},m))))))}function A0(){return o.createElement("details",{className:"award-assets-panel"},o.createElement("summary",null,o.createElement("span",null,"奖项 logo 素材"),o.createElement("strong",null,"展开查看 4 个 PNG，版本/年份/奖项等级需确认")),o.createElement("div",{className:"award-assets-note"},"GPT / 设计师可以预留或引用这些真实素材，但不能虚构奖项，不能自行修改奖项等级、年份或 logo 文字。第 3、第 4 个 logo 与截图版本不完全一致，必须先确认。"),o.createElement("div",{className:"award-logo-grid"},Zp.map(c=>o.createElement("article",{className:c.pending?"pending":"",key:c.file},o.createElement("div",{className:"award-logo-frame"},o.createElement("img",{src:c.src,alt:c.name,loading:"lazy"})),o.createElement("div",null,o.createElement("strong",null,c.name),o.createElement("span",null,c.dimensions),o.createElement("p",null,c.status))))))}function z0({product:c,rows:m}){return o.createElement("section",{className:"image-overview-panel"},o.createElement("div",{className:"listing-rule-head"},o.createElement("h4",null,"全套图效果一览"),o.createElement("span",null,c.series," Series")),o.createElement(L0,{product:c,rows:m}),o.createElement("div",{className:"image-overview-grid"},m.map((f,u)=>o.createElement("article",{className:"image-overview-card",key:f.key},o.createElement("div",{className:"image-overview-card-head"},o.createElement("strong",null,`图 ${String(u+1).padStart(2,"0")}`)),o.createElement("div",{className:"image-overview-pair"},o.createElement(eg,{imageUrl:f.currentImage,imageAlt:`当前 ${c.name} ${String(u+1).padStart(2,"0")}`,label:"当前页面",placeholder:f.currentPlaceholder}),o.createElement(eg,{imageUrl:f.optimizedImage,imageAlt:`按 VI 规范更新后 ${c.name} ${String(u+1).padStart(2,"0")}`,label:"按 VI 规范更新后",placeholder:f.optimizedPlaceholder}))))))}function L0({product:c,rows:m}){const f=u=>{const _=u==="current",M=_?"当前页面":"按 VI 规范更新后",N=_?"现在 Amazon 页面中的套图顺序和内容":"按系列 VI、命名和功能逻辑统一后的效果";return o.createElement("article",{className:`image-set-summary-column ${_?"current":"optimized"}`},o.createElement("div",{className:"image-set-summary-column-head"},o.createElement("strong",null,M),o.createElement("span",null,N)),o.createElement("div",{className:"image-set-summary-grid"},m.map((x,R)=>o.createElement(M0,{key:`${x.key}-${u}`,imageUrl:_?x.currentImage:x.optimizedImage,imageAlt:`${M} ${c.name} 图 ${String(R+1).padStart(2,"0")}`,label:String(R+1).padStart(2,"0"),title:x.title,placeholder:_?x.currentPlaceholder:x.optimizedPlaceholder}))))};return o.createElement("div",{className:"image-set-summary"},o.createElement("div",{className:"image-set-summary-head"},o.createElement("div",null,o.createElement("h5",null,"九张图合集"),o.createElement("p",null,"左边是当前页面，右边是按 VI 规范更新后；下方仍保留逐张大图对比，方便看细节和缺口。")),o.createElement("span",null,m.length," slots")),o.createElement("div",{className:"image-set-summary-compare"},f("current"),f("optimized")))}function M0({imageUrl:c,imageAlt:m,label:f,title:u,placeholder:_}){const M=(c||"").trim();return o.createElement("div",{className:"image-set-thumb",title:u},o.createElement("span",{className:"image-set-thumb-index"},f),M?o.createElement("img",{src:M,alt:m,loading:"lazy"}):o.createElement("div",{className:"image-set-thumb-empty","aria-label":"图片待补"},o.createElement(so,{size:18}),o.createElement("span",null,_)))}function D0(){return o.createElement("details",{className:"designer-guideline-summary",open:!0},o.createElement("summary",null,o.createElement("span",null,"To designer 汇总"),o.createElement("strong",null,"把应写入 VI 的共性规则集中在这里；每张图下方只保留内部备注。")),o.createElement("div",{className:"designer-guideline-body"},o.createElement("div",{className:"designer-guideline-scope"},Vp.map(c=>o.createElement("p",{key:c},c))),o.createElement("div",{className:"designer-guideline-grid"},Xp.map(c=>o.createElement("article",{key:c.title},o.createElement("h5",null,c.title),o.createElement("ul",null,c.items.map(m=>o.createElement("li",{key:m},m)))))),o.createElement("details",{className:"designer-image-position-rules"},o.createElement("summary",null,"按第 1-9 张图片位置沉淀的执行规则"),o.createElement("ol",null,Kp.map(c=>o.createElement("li",{key:c},c))))))}function eg({imageUrl:c,imageAlt:m,label:f,placeholder:u}){const _=(c||"").trim();return o.createElement("div",{className:"image-overview-side"},o.createElement("div",{className:"image-overview-side-head"},o.createElement("strong",null,f)),o.createElement("div",{className:"image-overview-frame"},_?o.createElement("img",{src:_,alt:m,loading:"lazy"}):o.createElement("div",{className:"image-overview-empty","aria-label":"图片待补"},o.createElement(so,{size:22}),o.createElement("span",null,u))))}function R0(){return o.createElement("div",{className:"aplus-strategy-map"},o.createElement("article",null,o.createElement("h4",null,"完整内容池"),o.createElement("div",{className:"aplus-chip-list"},l0.map(c=>o.createElement("span",{key:c},c)))),o.createElement("article",null,o.createElement("h4",null,"Premium 7 模块落地版"),o.createElement("div",{className:"aplus-logic-table"},i0.map(([c,m,f,u,_])=>o.createElement(o.Fragment,{key:c},o.createElement("strong",null,c),o.createElement("span",null,m),o.createElement("span",null,f),o.createElement("span",null,u),o.createElement("span",null,_))))),o.createElement("article",null,o.createElement("h4",null,"尺寸 / 格式 / 像素要求"),o.createElement("div",{className:"aplus-logic-table aplus-spec-table"},o0.map(([c,m])=>o.createElement(o.Fragment,{key:c},o.createElement("strong",null,c),o.createElement("span",null,m))))),o.createElement("article",null,o.createElement("h4",null,"Product Information 字段模板"),o.createElement("div",{className:"product-info-field-list"},s0.map(c=>o.createElement("span",{key:c},c)))))}function Ks({title:c,meta:m,children:f}){return o.createElement("section",{className:"current-content-panel"},o.createElement("div",{className:"current-content-head"},o.createElement("h4",null,c),o.createElement("span",null,m)),f)}function N0({content:c,embedded:m=!1}){if(!c)return null;const f=o.createElement("div",{className:"copyable-current-text title-current-text"},c.title||"未提取到标题");return m?o.createElement("div",{className:"embedded-current-content"},f):o.createElement(Ks,{title:"当前页面标题",meta:c.asin},f)}function k0({content:c,embedded:m=!1}){if(!c)return null;const f=o.createElement("ol",{className:"current-bullet-list"},(c.bullets||[]).map((u,_)=>o.createElement("li",{key:`${c.asin}-bullet-${_}`},o.createElement("span",null,"Bullet ",_+1),o.createElement("p",{className:"copyable-current-text"},u))));return m?o.createElement("div",{className:"embedded-current-content"},f):o.createElement(Ks,{title:"当前页面五点",meta:`${c.asin} · ${c.bullets?.length||0} bullets`},f)}function O0(c){if(!c)return"";const m=Os.indexOf(c);if(m===-1)return"";const f=Os.indexOf(`
## `,m+c.length);return Os.slice(m,f===-1?void 0:f).trim()}function j0(c){return c.replace(/\\([._&?=#:/-])/g,"$1")}function x0(c){if(!c)return[];const m=[],f=c.split(`
`);let u=null;return f.forEach(_=>{if(_.startsWith("### ")){u&&m.push(u),u={title:_.replace(/^###\s+/,"").trim(),lines:[]};return}u&&u.lines.push(_)}),u&&m.push(u),m.map((_,M)=>{const N=_.lines.join(`
`).trim(),x=N.match(/https?:\/\/\S+/)?.[0]||"";return{id:`${_.title}-${M}`,title:_.title,sourceUrl:x?j0(x):"",text:N}})}function U0({content:c}){const m=Qa[c?.asin];if(!c||!m)return o.createElement("div",{className:"listing-content-placeholder"},o.createElement("span",null,"未接入当前产品视频资料"));const f=O0(m.sourceMarker),u=x0(f);return o.createElement("div",{className:"embedded-current-content current-video-content"},o.createElement("div",{className:"video-source-note"},o.createElement("strong",null,c.asin),o.createElement("span",null,"视频资料来自字幕整理文件；这里只做审查层，不生成最终字幕定稿。")),o.createElement("section",{className:"current-video-section"},o.createElement("h5",null,"当前视频素材"),o.createElement("div",{className:"video-asset-list"},m.assets.map(_=>o.createElement("article",{key:`${c.asin}-${_.type}`},o.createElement("div",null,o.createElement("strong",null,_.type),o.createElement("div",{className:"video-status-tags"},_.status.map(M=>o.createElement("span",{key:M},M)))),_.url?o.createElement("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",onClick:M=>{M.preventDefault(),window.open(_.url,"_blank","noopener,noreferrer")}},_.url):null,_.note?o.createElement("p",null,_.note):null)))),o.createElement("section",{className:"current-video-section"},o.createElement("h5",null,"视频内容审查"),m.reviewSummary?o.createElement("details",{className:"video-review-summary-details"},o.createElement("summary",null,"核对总览：产品名 / 参数 / 卖点 / 五类视频覆盖"),o.createElement("div",{className:"video-review-summary"},m.reviewSummary.map(([_,M])=>o.createElement("article",{key:_},o.createElement("strong",null,_),o.createElement("p",null,M))))):null,o.createElement("div",{className:"video-script-review-grid"},o.createElement("strong",null,"从原视频提取的当前字幕 / 脚本"),o.createElement("strong",null,"为什么要改 / 删 / 补"),o.createElement("strong",null,"优化后版本"),m.issues.map(([,_,M,N])=>o.createElement(o.Fragment,{key:_},o.createElement("p",{className:"copyable-current-text"},_),o.createElement("p",null,M),o.createElement("p",null,N))))),o.createElement("details",{className:"video-raw-script"},o.createElement("summary",null,"提取自原视频（按视频拆分）"),u.length?o.createElement("div",{className:"video-raw-entry-list"},u.map((_,M)=>o.createElement("details",{className:"video-raw-entry",key:_.id},o.createElement("summary",null,o.createElement("span",null,M+1),o.createElement("strong",null,_.title),o.createElement("em",null,"提取自原视频")),_.sourceUrl?o.createElement("a",{href:_.sourceUrl,target:"_blank",rel:"noopener noreferrer"},_.sourceUrl):null,o.createElement("pre",null,_.text)))):o.createElement("pre",null,"未在原始字幕文件中定位到对应段落。")))}function G0({content:c,compact:m=!1}){if(!c)return null;const f=(c.aplus||[]).flatMap(N=>(N.modules||[]).map(x=>({sectionLabel:N.label,sectionId:N.id,...x}))),u=f.reduce((N,x)=>N+(x.texts||[]).length,0),_=f.reduce((N,x)=>N+(x.images||[]).length,0),M=o.createElement(o.Fragment,null,o.createElement("div",{className:"aplus-ocr-note"},m?"A+ 当前内容已接入；图片内文字待 OCR / 人工确认。":"A+ HTML 可读文本、图片链接和 alt 已接入；图片像素内嵌文字待 OCR / 人工确认。"),o.createElement("div",{className:"current-aplus-stack"},f.map((N,x)=>o.createElement("details",{className:"current-aplus-module",key:`${N.sectionId}-${N.moduleIndex}-${x}`},o.createElement("summary",null,o.createElement("strong",null,N.sectionLabel||"A+ Section"," · Module ",N.moduleIndex||x+1),o.createElement("span",null,N.texts?.length||0," texts · ",N.images?.length||0," images")),o.createElement("div",{className:"current-aplus-module-body"},(N.texts||[]).length?o.createElement("div",{className:"current-aplus-texts"},(N.texts||[]).map((R,E)=>o.createElement("p",{className:"copyable-current-text",key:`${N.celWidgetId||"module"}-text-${E}`},R))):o.createElement("p",{className:"current-empty-note"},"未提取到 HTML 可读文本。"),(N.images||[]).length?o.createElement("div",{className:"current-aplus-images"},(N.images||[]).map((R,E)=>o.createElement("div",{className:"current-aplus-image-row",key:`${R.src}-${E}`},o.createElement("img",{src:R.src,alt:R.alt||`A+ image ${E+1}`,loading:"lazy"}),o.createElement("div",null,o.createElement("span",null,"Image ",E+1),o.createElement("a",{href:R.src,target:"_blank",rel:"noopener noreferrer"},R.src),o.createElement("code",null,"alt: ",R.alt||"空"))))):null)))));return m?o.createElement("div",{className:"embedded-current-content current-aplus-embedded"},M):o.createElement(Ks,{title:"当前 A+ 内容",meta:`${c.asin} · ${f.length} modules · ${u} texts · ${_} images`},M)}function I0({product:c,decision:m}){const f=n0[c.id]||{standardName:c.name,customKeywords:[],title200:m.proposed,title75:c.name};return o.createElement("section",{className:"listing-rule-panel title-decision-panel"},o.createElement("div",{className:"listing-rule-head"},o.createElement("h4",null,"标题决策表"),o.createElement("span",null,c.asin)),o.createElement("div",{className:"title-decision-grid"},o.createElement("strong",null,"原标题"),o.createElement("p",null,m.original),o.createElement("strong",null,"建议结构"),o.createElement("p",null,"前半段使用标准命名：",o.createElement("b",null,f.standardName),"；后半段由销售根据站内策略补充业务自定义关键词。 这样做的原因是包装、说明书和站外页面会逐步使用新命名，标准命名有利于搜索、AI 解析和多渠道一致性；但最终是否采用，以各平台站内销售策略为准。"),o.createElement("strong",null,"可选关键词"),o.createElement("p",null,f.customKeywords.join(" / "),o.createElement("br",null),"这些词只作为参数词和使用场景词建议，不是必须全部加入标题。"),o.createElement("strong",null,"200 character 建议版"),o.createElement("p",null,f.title200),o.createElement("strong",null,"75 character 建议版"),o.createElement("p",null,f.title75),o.createElement("strong",null,"采用说明"),o.createElement("p",null,"以上标题仅为建议版本。最终是否采用完整新命名、保留旧关键词或调整自定义部分，由销售人员根据站内搜索、转化和类目限制决定。")))}function Q0(){return o.createElement("details",{className:"listing-rule-panel bullet-framework-panel",open:!0},o.createElement("summary",{className:"listing-rule-head collapsible-rule-summary"},o.createElement("h4",null,"五点撰写框架"),o.createElement("span",null,"WHAT / WHO-WHERE / WHY / PROOF / FIT-RISK · 点击展开 / 收起")),o.createElement("div",{className:"bullet-framework-list"},a0.map((c,m)=>o.createElement("details",{className:"video-structure-row bullet-framework-row",key:c.code},o.createElement("summary",null,o.createElement("span",{className:"video-structure-index"},m+1),o.createElement("strong",null,c.code),o.createElement("em",null,c.title)),o.createElement("p",null,c.body)))))}function tg({module:c,title:m,mode:f,currentContent:u,note:_,placeholder:M,onNoteChange:N}){return o.createElement("div",{className:"premium-module-side"},o.createElement("h6",null,m),f==="current"&&u?o.createElement(G0,{content:u,compact:!0}):o.createElement(K0,{module:c,mode:f}),o.createElement("textarea",{value:_,onChange:x=>N(x.target.value),placeholder:M}))}function K0({module:c,mode:m}){const f=c.slots.map((u,_)=>o.createElement("div",{className:"premium-slot-item",key:u.label},o.createElement("div",{className:"premium-image-slot"},o.createElement(Ql,{size:20}),o.createElement("strong",null,u.label),o.createElement("span",null,"Image ",_+1)),o.createElement("p",null,m==="current"?"读取当前 A+ 图片后填写这一槽位实际在讲什么。":u.function)));return c.layout==="carousel"?o.createElement("div",{className:"premium-carousel-strip"},f):o.createElement("div",{className:"premium-slot-grid"},f)}function Us({title:c,currentContent:m,activeSection:f,product:u,note:_,placeholder:M,onNoteChange:N,variant:x}){return o.createElement("article",{className:`listing-compare-card ${x==="designer"?"to-designer-panel":""}`},o.createElement("h4",null,c),x==="designer"?o.createElement("div",{className:"designer-note-static"},o.createElement("strong",null,"需要设计师明确"),o.createElement("p",null,"这里记录应沉淀成 VI / Listing / A+ / 视频组件规则的设计问题。")):f==="video"&&x==="optimized"?o.createElement(F0,{content:m,note:_}):f==="bullets"&&x==="optimized"?o.createElement(H0,{product:u,note:_}):o.createElement(V0,{content:m,activeSection:f}),o.createElement("textarea",{value:_,onChange:R=>N(R.target.value),placeholder:M}))}function H0({product:c,note:m}){const f=g0[c?.id]||[];return o.createElement("div",{className:"bullet-optimization-direction"},o.createElement("div",{className:"video-source-note"},o.createElement("strong",null,"优化方向按 Bullet 1-5 对照修改"),o.createElement("span",null,"右侧不再复用当前页面五点；每条对应左侧同序号，说明哪里需改、为什么、改成什么。")),o.createElement("ol",{className:"current-bullet-list bullet-optimization-list","aria-label":"五点优化方向"},f.map((u,_)=>o.createElement("li",{key:`${c?.id}-bullet-fix-${_}`},o.createElement("span",null,"Bullet ",_+1),o.createElement("div",{className:"bullet-optimization-row-grid"},o.createElement("div",null,o.createElement("strong",null,"哪里需改"),o.createElement("p",null,u.target)),o.createElement("div",null,o.createElement("strong",null,"为什么"),o.createElement("p",null,u.reason)),o.createElement("div",null,o.createElement("strong",null,"改成什么"),o.createElement("p",null,u.changeTo)))))),m?o.createElement("div",{className:"bullet-optimization-change-note"},o.createElement("strong",null,"整体顺序判断"),o.createElement("p",null,m)):null)}function F0({content:c,note:m}){const f=Qa[c?.asin],u=f0[c?.asin]||[];return o.createElement("div",{className:"video-optimization-direction"},o.createElement("a",{className:"video-subtitle-document-link",href:u0,target:"_blank",rel:"noopener noreferrer"},"飞书视频字幕文档"),o.createElement("div",{className:"video-source-note"},o.createElement("strong",null,"整理依据"),o.createElement("span",null,"结合飞书链接、本地字幕源 outputs/video_subtitles/video_subtitles.md、术语表、说明书待确认项和当前四个产品资料。飞书正文当前需登录，页面先保留链接入口。")),f?o.createElement("div",{className:"video-optimization-summary"},o.createElement("strong",null,"优化方向整理"),o.createElement("p",null,m)):null,u.length?o.createElement("ol",{className:"video-optimization-actions"},u.map(_=>o.createElement("li",{key:_},_))):null)}function V0({content:c,activeSection:m}){return m==="title"?o.createElement(N0,{content:c,embedded:!0}):m==="bullets"?o.createElement(k0,{content:c,embedded:!0}):m==="video"?o.createElement(U0,{content:c}):o.createElement("div",{className:"listing-content-placeholder"},o.createElement("span",null,"内容待填充"))}function X0(){return o.createElement("section",{className:"listing-rule-panel"},o.createElement("div",{className:"listing-rule-head"},o.createElement("h4",null,"视频结构"),o.createElement("span",null,"5 种视频类型，可展开 / 折叠")),o.createElement("div",{className:"video-structure-list"},c0.map((c,m)=>o.createElement("details",{className:"video-structure-row",key:c.name},o.createElement("summary",null,o.createElement("span",{className:"video-structure-index"},m+1),o.createElement("strong",null,c.name),o.createElement("em",null,c.role)),o.createElement("p",null,c.content)))))}function Y0(){return o.createElement("details",{className:"cross-section-rules"},o.createElement("summary",{className:"cross-rule-title"},o.createElement(ig,{size:16}),o.createElement("strong",null,"跨板块规范提醒"),o.createElement("span",null,"点击展开")),o.createElement("div",{className:"cross-rule-grid"},p0.map(([c,m])=>o.createElement("div",{key:c},o.createElement("span",null,c),o.createElement("p",null,m)))))}function ng({imageUrl:c,inputValue:m,imageAlt:f,currentMeta:u,suggestedName:_,alternateSuggestedName:M,alternateImageUrl:N="",alternateInputValue:x="",hideImageInput:R=!1,note:E,imagePlaceholder:q,notePlaceholder:K,noteReadOnly:Z=!1,onImageChange:fe,onAlternateImageChange:ye,onNoteChange:ne}){const Me=c.trim(),De=N.trim(),G=!!M;return o.createElement("div",{className:"image-plan-cell"},G?o.createElement("div",{className:"optimized-main-options"},o.createElement("div",{className:"optimized-main-option"},o.createElement("strong",null,"白底合规主图"),o.createElement("div",{className:"image-preview-frame"},Me?o.createElement("img",{src:Me,alt:`${f}：白底合规主图`}):o.createElement("div",{className:"image-preview-empty"},o.createElement(Ql,{size:24}),o.createElement("span",null,"粘贴白底主图链接后显示"))),o.createElement(Gs,{value:m,onChange:fe,label:"白底主图链接"}),o.createElement(Is,{name:_})),o.createElement("div",{className:"optimized-main-option"},o.createElement("strong",null,"场景备选主图"),o.createElement("div",{className:"image-preview-frame"},De?o.createElement("img",{src:De,alt:`${f}：场景备选主图`}):o.createElement("div",{className:"image-preview-empty"},o.createElement(Ql,{size:24}),o.createElement("span",null,"粘贴场景主图链接后显示"))),o.createElement(Gs,{value:x,onChange:ye,label:"场景主图链接"}),o.createElement(Is,{name:M}))):o.createElement(o.Fragment,null,o.createElement("div",{className:"image-preview-frame"},Me?o.createElement("img",{src:Me,alt:f}):o.createElement("div",{className:"image-preview-empty"},o.createElement(Ql,{size:24}),o.createElement("span",null,q))),R?null:o.createElement(Gs,{value:m,onChange:fe,label:"优化图链接"}),u?o.createElement(q0,{meta:u}):null,_?o.createElement(Is,{name:_}):null),o.createElement("textarea",{className:Z?"locked-note":"",value:E,onChange:ze=>{Z||ne(ze.target.value)},placeholder:K,readOnly:Z}))}function Gs({value:c,onChange:m,label:f}){return o.createElement("div",{className:"optimized-image-link-slot"},o.createElement("span",null,f),o.createElement("input",{type:"text",value:c,onChange:u=>m(u.target.value),placeholder:"图片链接"}))}function Is({name:c}){return o.createElement("div",{className:"suggested-image-name","aria-label":"建议图片命名"},o.createElement("span",null,"建议图片命名"),o.createElement("code",null,c))}function q0({meta:c}){const m=c["Original Image URL"];return o.createElement("div",{className:"current-image-meta","aria-label":"当前页面图片链接与命名"},o.createElement("div",{className:"current-image-meta-row"},o.createElement("span",null,"当前页面原图链接"),o.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer",onClick:f=>{f.preventDefault(),window.open(m,"_blank","noopener,noreferrer")}},m)),o.createElement("div",{className:"current-image-meta-row"},o.createElement("span",null,"当前图片命名"),o.createElement("code",null,c["Local File Name"])))}function ag({requirement:c,collapsible:m=!1,title:f="板块说明",subtitle:u="展开查看规格、边界和限制"}){const _=o.createElement(o.Fragment,null,o.createElement("div",{className:"listing-note"},c.note),o.createElement("div",{className:"listing-spec-grid"},c.specs.map(([M,N])=>o.createElement("div",{key:M},o.createElement("strong",null,M),o.createElement("span",null,N)))));return m?o.createElement("details",{className:"requirement-cards-panel"},o.createElement("summary",null,o.createElement("span",null,f),o.createElement("strong",null,u)),_):_}function J0({issues:c,filteredIssues:m,stats:f,filterOptions:u,query:_,setQuery:M,statusFilter:N,setStatusFilter:x,priorityFilter:R,setPriorityFilter:E,typeFilter:q,setTypeFilter:K,sectionFilter:Z,setSectionFilter:fe,sectionStats:ye,updateIssue:ne,toggleFixed:Me,addIssue:De,removeIssue:G,resetIssues:ze}){return o.createElement("section",{className:"workspace"},o.createElement("div",{className:"section-head"},o.createElement("div",null,o.createElement("h2",null,"1. Current A+ Issue Report"),o.createElement("p",null,"Editable table. Image copy is checked against the Quntis terminology glossary, product naming table, unit rules, and Amazon claim-risk guardrails.")),o.createElement("div",{className:"button-row"},o.createElement("button",{onClick:De},o.createElement(ap,{size:16})," Add row"),o.createElement("button",{onClick:()=>xs("214-grey-a-plus-issues.csv",y0(c),"text/csv")},o.createElement(qd,{size:16})," CSV"),o.createElement("button",{onClick:()=>xs("214-grey-a-plus-issues.md",v0(c),"text/markdown")},o.createElement(qd,{size:16})," MD"),o.createElement("button",{onClick:()=>xs("214-grey-a-plus-issues.json",JSON.stringify(c,null,2),"application/json")},o.createElement(rp,{size:16})," JSON"),o.createElement("button",{className:"quiet",onClick:ze},o.createElement(ip,{size:16})," Reset"))),o.createElement("div",{className:"stats-row"},o.createElement(io,{label:"Total issues",value:f.total,tone:"blue"}),o.createElement(io,{label:"P0 blockers",value:f.p0,tone:"red"}),o.createElement(io,{label:"Need images",value:f.needImage,tone:"amber"}),o.createElement(io,{label:"Open / fixed",value:`${f.open} / ${f.done}`,tone:"green"})),o.createElement(W0,{sectionStats:ye,sectionFilter:Z,setSectionFilter:fe}),o.createElement("div",{className:"review-grid"},o.createElement("div",{className:"table-panel"},o.createElement("div",{className:"filter-bar"},o.createElement("label",{className:"search-box"},o.createElement(cp,{size:16}),o.createElement("input",{value:_,onChange:I=>M(I.target.value),placeholder:"Search issues, modules, terms..."})),o.createElement(oo,{icon:o.createElement(dp,{size:15}),value:R,onChange:E,options:u.priorities}),o.createElement(oo,{value:N,onChange:x,options:u.statuses}),o.createElement(oo,{value:q,onChange:K,options:u.types}),o.createElement(oo,{value:Z,onChange:fe,options:["All",...co.map(I=>I.id)],labeler:uo})),o.createElement("div",{className:"editable-table"},o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Fixed"),o.createElement("th",null,"Priority"),o.createElement("th",null,"Section"),o.createElement("th",null,"Position / Module"),o.createElement("th",null,"Current Copy"),o.createElement("th",null,"Issue Type"),o.createElement("th",null,"Problem"),o.createElement("th",null,"Suggested Fix"),o.createElement("th",null,"Basis"),o.createElement("th",null,"Preview"),o.createElement("th",null,"Evidence"),o.createElement("th",null,"Replacement Copy"),o.createElement("th",null,"Impact"),o.createElement("th",null,"Need Image"),o.createElement("th",null,"Status"),o.createElement("th",null,"Owner"),o.createElement("th",null,"Updated"),o.createElement("th",null,"Notes"),o.createElement("th",null))),o.createElement("tbody",null,m.map(I=>o.createElement("tr",{key:I.id},o.createElement("td",null,o.createElement(Z0,{checked:I.status==="Done",onChange:Y=>Me(I.id,Y)})),o.createElement("td",null,o.createElement(it,{value:I.priority,onChange:Y=>ne(I.id,"priority",Y),short:!0})),o.createElement("td",null,o.createElement(P0,{section:I.section})),o.createElement("td",null,o.createElement(it,{value:I.location,onChange:Y=>ne(I.id,"location",Y)})),o.createElement("td",null,o.createElement(it,{value:I.currentCopy,onChange:Y=>ne(I.id,"currentCopy",Y)})),o.createElement("td",null,o.createElement(it,{value:I.type,onChange:Y=>ne(I.id,"type",Y),short:!0})),o.createElement("td",null,o.createElement(it,{value:I.issue,onChange:Y=>ne(I.id,"issue",Y)})),o.createElement("td",null,o.createElement(it,{value:I.suggestion,onChange:Y=>ne(I.id,"suggestion",Y)})),o.createElement("td",null,o.createElement(it,{value:I.basis,onChange:Y=>ne(I.id,"basis",Y)})),o.createElement("td",null,o.createElement($0,{src:I.evidenceImage,label:I.location})),o.createElement("td",null,o.createElement(it,{value:I.evidence,onChange:Y=>ne(I.id,"evidence",Y)})),o.createElement("td",null,o.createElement(it,{value:I.replacementCopy,onChange:Y=>ne(I.id,"replacementCopy",Y)})),o.createElement("td",null,o.createElement(it,{value:I.impact,onChange:Y=>ne(I.id,"impact",Y)})),o.createElement("td",null,o.createElement(it,{value:I.needsImage,onChange:Y=>ne(I.id,"needsImage",Y),short:!0})),o.createElement("td",null,o.createElement(it,{value:I.status,onChange:Y=>ne(I.id,"status",Y),short:!0})),o.createElement("td",null,o.createElement(it,{value:I.owner,onChange:Y=>ne(I.id,"owner",Y),short:!0})),o.createElement("td",null,o.createElement(it,{value:I.updatedAt,onChange:Y=>ne(I.id,"updatedAt",Y),short:!0})),o.createElement("td",null,o.createElement(it,{value:I.notes,onChange:Y=>ne(I.id,"notes",Y)})),o.createElement("td",null,o.createElement("button",{className:"icon-button",onClick:()=>G(I.id),"aria-label":"Delete row"},o.createElement(yp,{size:15}))))))))),o.createElement(e1,null)))}function W0({sectionStats:c,sectionFilter:m,setSectionFilter:f}){return o.createElement("div",{className:"hierarchy-map"},Cp.map(u=>o.createElement("section",{className:"series-block",key:u.series},o.createElement("div",{className:"series-head"},o.createElement("span",null,"Series"),o.createElement("strong",null,u.series),o.createElement("p",null,u.definition)),o.createElement("div",{className:"product-stack"},u.products.map(_=>o.createElement("article",{className:"product-node",key:_.sku},o.createElement("div",{className:"product-node-head"},o.createElement("span",null,"Product"),o.createElement("strong",null,_.name),o.createElement("p",null,_.sku," / ",_.variant," / ",_.model)),o.createElement("div",{className:"section-chip-grid"},o.createElement("button",{className:m==="All"?"active":"",onClick:()=>f("All")},o.createElement("span",null,"All Sections"),o.createElement("strong",null,c.reduce((M,N)=>M+N.open,0)," open")),_.sections.map(M=>{const N=c.find(x=>x.id===M.id)||{open:0,done:0};return o.createElement("button",{key:M.id,className:m===M.id?"active":"",onClick:()=>f(M.id)},o.createElement("span",null,M.label),o.createElement("strong",null,N.open," open / ",N.done," fixed"))}))))))))}function Z0({checked:c,onChange:m}){return o.createElement("label",{className:`fixed-check ${c?"checked":""}`},o.createElement("input",{type:"checkbox",checked:c,onChange:f=>m(f.target.checked)}),o.createElement(hp,{size:16}),o.createElement("span",null,c?"Fixed":"Open"))}function P0({section:c}){return o.createElement("span",{className:`section-badge section-${c}`},uo(c))}function $0({src:c,label:m}){return c?o.createElement("a",{className:"evidence-preview",href:c,target:"_blank",rel:"noreferrer","aria-label":`Open evidence for ${m}`},o.createElement("img",{src:c,alt:`Evidence for ${m}`,loading:"lazy"})):o.createElement("span",{className:"no-preview"},"No image")}function it({value:c,onChange:m,short:f}){return o.createElement("textarea",{className:f?"cell short":"cell",value:c,onChange:u=>m(u.target.value),spellCheck:"false"})}function io({label:c,value:m,tone:f}){return o.createElement("div",{className:`stat-card ${f}`},o.createElement(Qf,{size:17}),o.createElement("strong",null,m),o.createElement("span",null,c))}function oo({icon:c,value:m,onChange:f,options:u,labeler:_=M=>M}){return o.createElement("label",{className:"filter-select"},c,o.createElement("select",{value:m,onChange:M=>f(M.target.value)},u.map(M=>o.createElement("option",{key:M,value:M},_(M)))))}function e1(){return o.createElement("aside",{className:"rule-panel"},o.createElement("h3",null,o.createElement(ig,{size:18})," Terminology guardrails"),o.createElement("ul",null,Tp.map(c=>o.createElement("li",{key:c},c))),o.createElement("div",{className:"mini-note"},o.createElement(_p,{size:17}),o.createElement("span",null,"Image text that cannot be read is marked as Need image instead of guessed.")))}function t1(){return o.createElement("section",{className:"workspace"},o.createElement("div",{className:"section-head"},o.createElement("div",null,o.createElement("h2",null,"2. New A+ Structure"),o.createElement("p",null,"US-first structure for the 214 Grey sample, aligned to the A+ planning order and product naming table."))),o.createElement("div",{className:"module-list"},Lp.map((c,m)=>o.createElement("article",{className:"module-row",key:c.name},o.createElement("div",{className:"module-index"},m+1),o.createElement("div",null,o.createElement("h3",null,c.name),o.createElement("p",{className:"purpose"},c.purpose),o.createElement("div",{className:"module-meta"},o.createElement("span",null,o.createElement("strong",null,"Image/module format:")," ",c.ratio),o.createElement("span",null,o.createElement("strong",null,"Headline:")," ",c.headline),o.createElement("span",null,o.createElement("strong",null,"Subhead:")," ",c.subhead)),o.createElement("p",null,o.createElement("strong",null,"Draft copy:")," ",c.copy),o.createElement("p",null,o.createElement("strong",null,"Visual direction:")," ",c.visual),o.createElement("p",null,o.createElement("strong",null,"Execution check:")," ",c.checklist),o.createElement("p",{className:"notes"},o.createElement("strong",null,"Designer note:")," ",c.notes))))))}function n1(){return o.createElement("section",{className:"workspace mockup-workspace"},o.createElement("div",{className:"section-head"},o.createElement("div",null,o.createElement("h2",null,"3. Visual A+ Mockup"),o.createElement("p",null,"Readable web mockup for design review. It is not Amazon code; it shows module order, copy density, and visual rhythm."))),o.createElement("div",{className:"a-plus-page"},o.createElement("section",{className:"mock-hero"},o.createElement("div",null,o.createElement("h3",null,Ae.standardName),o.createElement("p",null,"Front lighting for focused desk work, plus soft backlight for a calmer monitor setup."),o.createElement("div",{className:"spec-strip"},o.createElement("span",null,Ae.cri),o.createElement("span",null,Ae.colorTemp),o.createElement("span",null,Ae.illuminance),o.createElement("span",null,Ae.control))),o.createElement("img",{src:"/assets/214-grey-product.png",alt:"Quntis 214 Grey product"})),o.createElement("section",{className:"mock-band two-col"},o.createElement("div",null,o.createElement("h3",null,"Eye-Care Lighting Experience"),o.createElement("p",null,"Asymmetric front lighting helps illuminate the desk area while reducing direct screen glare.")),o.createElement("div",{className:"beam-card"},o.createElement("div",{className:"monitor-shape"}),o.createElement("div",{className:"light-beam"}),o.createElement("span",null,"Desk-focused beam"))),o.createElement("section",{className:"feature-grid"},[["Soft Backlight","Adds ambient depth behind the monitor without replacing the front light."],["Stepless Dimming","Fine-tune brightness for daytime work or evening desk time."],["Webcam Friendly","Designed to leave room for a webcam-friendly setup."],["Multi-Light Control","Control compatible multi-light setups with less friction."]].map(([c,m])=>o.createElement("article",{key:c},o.createElement(Hf,{size:20}),o.createElement("h4",null,c),o.createElement("p",null,m)))),o.createElement("section",{className:"mock-band"},o.createElement("h3",null,"Technical Excellence"),o.createElement("div",{className:"tech-row"},o.createElement("span",null,o.createElement("strong",null,"Ra95"),"More natural color rendering"),o.createElement("span",null,o.createElement("strong",null,"3000K-6500K"),"Warm to cool lighting range"),o.createElement("span",null,o.createElement("strong",null,"900 lux"),"Clear center illuminance"),o.createElement("span",null,o.createElement("strong",null,"7.5W"),"Power for front light + backlight"))),o.createElement("section",{className:"mock-band two-col"},o.createElement("div",null,o.createElement("h3",null,"Solve Your Concerns"),o.createElement("p",null,'Fits curved and flat monitors from 17"-21", mounts on the monitor edge, and supports webcam-friendly placement.')),o.createElement("div",{className:"concern-list"},o.createElement("span",null,"Curved / flat monitors"),o.createElement("span",null,'17"-21" screen range'),o.createElement("span",null,"Remote control operation"))),o.createElement("section",{className:"mock-band"},o.createElement("h3",null,"Product Comparison"),o.createElement("p",{className:"mock-intro"},"Keep only decision-making fields so the table stays readable on mobile."),o.createElement("div",{className:"comparison-table"},o.createElement("div",{className:"comparison-head"},"Model"),o.createElement("div",{className:"comparison-head"},"Best for"),o.createElement("div",{className:"comparison-head"},"Backlight"),o.createElement("div",{className:"comparison-head"},"Control"),o.createElement("div",{className:"comparison-head"},"Screen fit"),o.createElement("div",null,Ae.variant),o.createElement("div",null,"Soft backlight desk setups"),o.createElement("div",null,"Backlight"),o.createElement("div",null,"Remote Control"),o.createElement("div",null,'17"-21"'),o.createElement("div",null,"F41GY"),o.createElement("div",null,"Front light only"),o.createElement("div",null,"Front Light Only"),o.createElement("div",null,"Remote Control"),o.createElement("div",null,'17"-21"'),o.createElement("div",null,"I51GY"),o.createElement("div",null,"RGB gaming setups"),o.createElement("div",null,"RGB Backlight"),o.createElement("div",null,"Remote Control"),o.createElement("div",null,'17"-49"'))),o.createElement("section",{className:"mock-band faq-grid"},o.createElement("div",null,o.createElement("h3",null,"Q&A"),o.createElement("article",{className:"faq-item"},o.createElement("strong",null,"Will the Quntis Monitor Light Bar Glow 41 cm (16.1 inch) Grey fit my monitor?"),o.createElement("p",null,"It is designed for curved and flat monitors from 17 to 21 inches. Confirm the final clip-thickness wording before publishing.")),o.createElement("article",{className:"faq-item"},o.createElement("strong",null,"Is it camera friendly?"),o.createElement("p",null,"Yes. The setup is designed to support webcam-friendly placement when the camera is positioned above the monitor."))),o.createElement("div",null,o.createElement("h3",null,"Product Information"),o.createElement("dl",{className:"info-list"},o.createElement("dt",null,"Model Name"),o.createElement("dd",null,Ae.standardName),o.createElement("dt",null,"Model Number"),o.createElement("dd",null,Ae.model),o.createElement("dt",null,"Material"),o.createElement("dd",null,Ae.material),o.createElement("dt",null,"Power / Input"),o.createElement("dd",null,Ae.power,"; ",Ae.input))))))}function a1(){return o.createElement("section",{className:"workspace"},o.createElement("div",{className:"section-head"},o.createElement("div",null,o.createElement("h2",null,"4. Before / After Comparison"),o.createElement("p",null,"Use this as the narrative for manager review and designer handoff."))),o.createElement("div",{className:"comparison-list"},Mp.map(c=>o.createElement("article",{className:"comparison-card",key:c.before},o.createElement("div",null,o.createElement("span",{className:"label bad"},"Before"),o.createElement("p",null,c.before)),o.createElement("div",null,o.createElement("span",{className:"label good"},"After"),o.createElement("p",null,c.after)),o.createElement("div",null,o.createElement("span",{className:"label why"},"Why"),o.createElement("p",null,c.why)),o.createElement("div",null,o.createElement("span",{className:"label evidence"},"Evidence"),o.createElement("p",null,c.evidence)),o.createElement("div",null,o.createElement("span",{className:"label impact"},"Impact"),o.createElement("p",null,c.impact))))))}function l1(){return o.createElement("section",{className:"workspace"},o.createElement("div",{className:"section-head"},o.createElement("div",null,o.createElement("h2",null,"5. Image Links / Evidence Map"),o.createElement("p",null,"All 2214GY Amazon images are linked here. Click any image to open the original asset used for copy QA."))),o.createElement("div",{className:"evidence-groups"},Rp.map(c=>o.createElement("section",{className:"evidence-group",key:c.title},o.createElement("div",{className:"evidence-group-head"},o.createElement("h3",null,c.title),o.createElement("span",null,c.source)),o.createElement("div",{className:"image-link-grid"},c.images.map(m=>o.createElement("a",{href:m.href,target:"_blank",rel:"noreferrer",key:m.href},o.createElement("img",{src:m.href,alt:m.name,loading:"lazy"}),o.createElement("span",null,m.name))))))))}function i1(){return o.createElement("section",{className:"workspace"},o.createElement("div",{className:"section-head"},o.createElement("div",null,o.createElement("h2",null,"6. Missing Assets / To Confirm"),o.createElement("p",null,"Everything blocked by unreadable images, Amazon access, or final SKU data is listed here."))),o.createElement("div",{className:"missing-grid"},Dp.map(c=>o.createElement("article",{className:"missing-card",key:c.item},o.createElement("div",{className:"missing-icon"},o.createElement(Vf,{size:19})),o.createElement("h3",null,c.item),o.createElement("p",null,o.createElement("strong",null,"Why:")," ",c.reason),o.createElement("p",null,o.createElement("strong",null,"Needed for:")," ",c.neededFor),o.createElement("span",null,c.status)))))}Rf.createRoot(document.getElementById("root")).render(o.createElement(_0,null));
