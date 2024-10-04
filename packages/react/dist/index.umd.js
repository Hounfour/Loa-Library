(function(T,D){typeof exports=="object"&&typeof module<"u"?D(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],D):(T=typeof globalThis<"u"?globalThis:T||self,D(T["DollhouseDesigns/React"]={},T.React))})(this,function(T,D){"use strict";var K={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function we(){if(te)return W;te=1;var j=D,y=Symbol.for("react.element"),O=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,_=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function w(m,c,x){var f,g={},E=null,F=null;x!==void 0&&(E=""+x),c.key!==void 0&&(E=""+c.key),c.ref!==void 0&&(F=c.ref);for(f in c)h.call(c,f)&&!S.hasOwnProperty(f)&&(g[f]=c[f]);if(m&&m.defaultProps)for(f in c=m.defaultProps,c)g[f]===void 0&&(g[f]=c[f]);return{$$typeof:y,type:m,key:E,ref:F,props:g,_owner:_.current}}return W.Fragment=O,W.jsx=w,W.jsxs=w,W}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Pe(){return ne||(ne=1,process.env.NODE_ENV!=="production"&&function(){var j=D,y=Symbol.for("react.element"),O=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),m=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),ae=Symbol.iterator,Fe="@@iterator";function Ae(e){if(e===null||typeof e!="object")return null;var r=ae&&e[ae]||e[Fe];return typeof r=="function"?r:null}var A=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ie("error",e,t)}}function Ie(e,r,t){{var n=A.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var $e=!1,We=!1,Ye=!1,Le=!1,Ne=!1,ie;ie=Symbol.for("react.module.reference");function Me(e){return!!(typeof e=="string"||typeof e=="function"||e===h||e===S||Ne||e===_||e===x||e===f||Le||e===F||$e||We||Ye||typeof e=="object"&&e!==null&&(e.$$typeof===E||e.$$typeof===g||e.$$typeof===w||e.$$typeof===m||e.$$typeof===c||e.$$typeof===ie||e.getModuleId!==void 0))}function Ve(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function oe(e){return e.displayName||"Context"}function R(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case h:return"Fragment";case O:return"Portal";case S:return"Profiler";case _:return"StrictMode";case x:return"Suspense";case f:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m:var r=e;return oe(r)+".Consumer";case w:var t=e;return oe(t._context)+".Provider";case c:return Ve(e,e.render,"ForwardRef");case g:var n=e.displayName||null;return n!==null?n:R(e.type)||"Memo";case E:{var o=e,u=o._payload,i=o._init;try{return R(i(u))}catch{return null}}}return null}var P=Object.assign,L=0,ue,se,le,ce,fe,de,ve;function pe(){}pe.__reactDisabledLog=!0;function Ue(){{if(L===0){ue=console.log,se=console.info,le=console.warn,ce=console.error,fe=console.group,de=console.groupCollapsed,ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}L++}}function Be(){{if(L--,L===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:P({},e,{value:ue}),info:P({},e,{value:se}),warn:P({},e,{value:le}),error:P({},e,{value:ce}),group:P({},e,{value:fe}),groupCollapsed:P({},e,{value:de}),groupEnd:P({},e,{value:ve})})}L<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=A.ReactCurrentDispatcher,z;function V(e,r,t){{if(z===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+e}}var G=!1,U;{var Je=typeof WeakMap=="function"?WeakMap:Map;U=new Je}function he(e,r){if(!e||G)return"";{var t=U.get(e);if(t!==void 0)return t}var n;G=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Ue();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(p){n=p}Reflect.construct(e,[],i)}else{try{i.call()}catch(p){n=p}e.call(i.prototype)}}else{try{throw Error()}catch(p){n=p}e()}}catch(p){if(p&&n&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),v=n.stack.split(`
`),s=a.length-1,l=v.length-1;s>=1&&l>=0&&a[s]!==v[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==v[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==v[l]){var b=`
`+a[s].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),typeof e=="function"&&U.set(e,b),b}while(s>=1&&l>=0);break}}}finally{G=!1,q.current=u,Be(),Error.prepareStackTrace=o}var $=e?e.displayName||e.name:"",k=$?V($):"";return typeof e=="function"&&U.set(e,k),k}function Ke(e,r,t){return he(e,!1)}function qe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function B(e,r,t){if(e==null)return"";if(typeof e=="function")return he(e,qe(e));if(typeof e=="string")return V(e);switch(e){case x:return V("Suspense");case f:return V("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Ke(e.render);case g:return B(e.type,r,t);case E:{var n=e,o=n._payload,u=n._init;try{return B(u(o),r,t)}catch{}}}return""}var N=Object.prototype.hasOwnProperty,be={},ge=A.ReactDebugCurrentFrame;function J(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);ge.setExtraStackFrame(t)}else ge.setExtraStackFrame(null)}function ze(e,r,t,n,o){{var u=Function.call.bind(N);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var v=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(J(o),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),J(null)),a instanceof Error&&!(a.message in be)&&(be[a.message]=!0,J(o),d("Failed %s type: %s",t,a.message),J(null))}}}var Ge=Array.isArray;function H(e){return Ge(e)}function He(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return ye(e),!1}catch{return!0}}function ye(e){return""+e}function me(e){if(Xe(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",He(e)),ye(e)}var M=A.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},Re,_e,X;X={};function Qe(e){if(N.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(N.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&M.current&&r&&M.current.stateNode!==r){var t=R(M.current.type);X[t]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(M.current.type),e.ref),X[t]=!0)}}function tr(e,r){{var t=function(){Re||(Re=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){_e||(_e=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,o,u,i){var a={$$typeof:y,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ir(e,r,t,n,o){{var u,i={},a=null,v=null;t!==void 0&&(me(t),a=""+t),er(r)&&(me(r.key),a=""+r.key),Qe(r)&&(v=r.ref,rr(r,o));for(u in r)N.call(r,u)&&!Ze.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||v){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(i,l),v&&nr(i,l)}return ar(e,a,v,o,n,M.current,i)}}var Z=A.ReactCurrentOwner,Ee=A.ReactDebugCurrentFrame;function I(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var Q;Q=!1;function ee(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function Te(){{if(Z.current){var e=R(Z.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){return""}var Ce={};function ur(e){{var r=Te();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Oe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ur(r);if(Ce[t])return;Ce[t]=!0;var n="";e&&e._owner&&e._owner!==Z.current&&(n=" It was passed a child from "+R(e._owner.type)+"."),I(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),I(null)}}function Se(e,r){{if(typeof e!="object")return;if(H(e))for(var t=0;t<e.length;t++){var n=e[t];ee(n)&&Oe(n,r)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var o=Ae(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)ee(i.value)&&Oe(i.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=R(r);ze(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Q){Q=!0;var o=R(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function lr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){I(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),I(null);break}}e.ref!==null&&(I(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),I(null))}}var xe={};function je(e,r,t,n,o,u){{var i=Me(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=or();v?a+=v:a+=Te();var s;e===null?s="null":H(e)?s="array":e!==void 0&&e.$$typeof===y?(s="<"+(R(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=ir(e,r,t,o,u);if(l==null)return l;if(i){var b=r.children;if(b!==void 0)if(n)if(H(b)){for(var $=0;$<b.length;$++)Se(b[$],e);Object.freeze&&Object.freeze(b)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Se(b,e)}if(N.call(r,"key")){var k=R(e),p=Object.keys(r).filter(function(hr){return hr!=="key"}),re=p.length>0?"{key: someKey, "+p.join(": ..., ")+": ...}":"{key: someKey}";if(!xe[k+re]){var pr=p.length>0?"{"+p.join(": ..., ")+": ...}":"{}";d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,re,k,pr,k),xe[k+re]=!0}}return e===h?lr(l):sr(l),l}}function cr(e,r,t){return je(e,r,t,!0)}function fr(e,r,t){return je(e,r,t,!1)}var dr=fr,vr=cr;Y.Fragment=h,Y.jsx=dr,Y.jsxs=vr}()),Y}process.env.NODE_ENV==="production"?K.exports=we():K.exports=Pe();var C=K.exports;const ke=({label:j,type:y="primary",size:O="medium",icon:h,isLoading:_=!1,disabled:S=!1,fullWidth:w=!1,onClick:m})=>{const c=`btn-${y}`,x=`btn-${O}`,f=S||_,g=h?`icon-${h}`:"",E=F=>{!f&&m&&m(F)};return C.jsx("button",{className:`btn ${c} ${x} ${w?"btn-full-width":""}`,disabled:f,onClick:E,children:_?C.jsx("span",{children:"Loading..."}):C.jsxs(C.Fragment,{children:[h&&C.jsx("i",{className:g}),j]})})},De=({checked:j,value:y,onChange:O})=>{const h=_=>{const S=_.target.checked;O&&O(S)};return C.jsxs("label",{className:"checkbox-label",children:[C.jsx("input",{type:"checkbox",checked:j,onChange:h,className:"checkbox-input"}),y&&C.jsx("span",{className:"checkbox-value",children:y})]})};T.HF_Button=ke,T.HF_Checkbox=De,Object.defineProperty(T,Symbol.toStringTag,{value:"Module"})});
