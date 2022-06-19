"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[875],{27875:function(e,t,n){n.d(t,{Z:function(){return vn}});var r=n(1413),o=n(45987),i=n(46123),a=n.n(i),s=n(47313),c=n(70885),u=Function.prototype.bind.call(Function.prototype.call,[].slice);function f(e,t){return u(e.querySelectorAll(t))}var l=n(55506),d=n(66227),p=n(97238);var v=n(89722),m=n(29650),h=s.createContext(null),g=n(6994),b=n(42982),y=n(40181);function w(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,y.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}var x=Object.prototype.hasOwnProperty;function O(e,t,n){var r,o=w(e.keys());try{for(o.s();!(r=o.n()).done;)if(C(n=r.value,t))return n}catch(i){o.e(i)}finally{o.f()}}function C(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&C(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;var i,a=w(e);try{for(a.s();!(i=a.n()).done;){if((o=r=i.value)&&"object"===typeof o&&!(o=O(t,o)))return!1;if(!t.has(o))return!1}}catch(u){a.e(u)}finally{a.f()}return!0}if(n===Map){if(e.size!==t.size)return!1;var s,c=w(e);try{for(c.s();!(s=c.n()).done;){if((o=(r=s.value)[0])&&"object"===typeof o&&!(o=O(t,o)))return!1;if(!C(r[1],t.get(o)))return!1}}catch(u){c.e(u)}finally{c.f()}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"===typeof e){for(n in r=0,e){if(x.call(e,n)&&++r&&!x.call(t,n))return!1;if(!(n in t)||!C(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!==e&&t!==t}var E=n(77901);var j=function(e){var t=(0,E.Z)();return[e[0],(0,s.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function Z(e){return e.split("-")[0]}function k(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function P(e){return e instanceof k(e).Element||e instanceof Element}function D(e){return e instanceof k(e).HTMLElement||e instanceof HTMLElement}function A(e){return"undefined"!==typeof ShadowRoot&&(e instanceof k(e).ShadowRoot||e instanceof ShadowRoot)}var S=Math.max,M=Math.min,N=Math.round;function T(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(D(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=N(n.width)/a||1),i>0&&(o=N(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function R(e){var t=T(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function L(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&A(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function B(e){return e?(e.nodeName||"").toLowerCase():null}function W(e){return k(e).getComputedStyle(e)}function I(e){return["table","td","th"].indexOf(B(e))>=0}function H(e){return((P(e)?e.ownerDocument:e.document)||window.document).documentElement}function F(e){return"html"===B(e)?e:e.assignedSlot||e.parentNode||(A(e)?e.host:null)||H(e)}function V(e){return D(e)&&"fixed"!==W(e).position?e.offsetParent:null}function q(e){for(var t=k(e),n=V(e);n&&I(n)&&"static"===W(n).position;)n=V(n);return n&&("html"===B(n)||"body"===B(n)&&"static"===W(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&D(e)&&"fixed"===W(e).position)return null;var n=F(e);for(A(n)&&(n=n.host);D(n)&&["html","body"].indexOf(B(n))<0;){var r=W(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function U(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z(e,t,n){return S(e,M(t,n))}function K(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function _(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var X="top",Y="bottom",$="right",G="left",J="auto",Q=[X,Y,$,G],ee="start",te="end",ne="viewport",re="popper",oe=Q.reduce((function(e,t){return e.concat([t+"-"+ee,t+"-"+te])}),[]),ie=[].concat(Q,[J]).reduce((function(e,t){return e.concat([t,t+"-"+ee,t+"-"+te])}),[]),ae=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var se={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Z(n.placement),c=U(s),u=[G,$].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return K("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:_(e,Q))}(o.padding,n),l=R(i),d="y"===c?X:G,p="y"===c?Y:$,v=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],m=a[c]-n.rects.reference[c],h=q(i),g=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,b=v/2-m/2,y=f[d],w=g-l[u]-f[p],x=g/2-l[u]/2+b,O=z(y,x,w),C=c;n.modifiersData[r]=((t={})[C]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&L(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(e){return e.split("-")[1]}var ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fe(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,l=e.isFixed,d=a.x,p=void 0===d?0:d,v=a.y,m=void 0===v?0:v,h="function"===typeof f?f({x:p,y:m}):{x:p,y:m};p=h.x,m=h.y;var g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),y=G,w=X,x=window;if(u){var O=q(n),C="clientHeight",E="clientWidth";if(O===k(n)&&"static"!==W(O=H(n)).position&&"absolute"===s&&(C="scrollHeight",E="scrollWidth"),o===X||(o===G||o===$)&&i===te)w=Y,m-=(l&&O===x&&x.visualViewport?x.visualViewport.height:O[C])-r.height,m*=c?1:-1;if(o===G||(o===X||o===Y)&&i===te)y=$,p-=(l&&O===x&&x.visualViewport?x.visualViewport.width:O[E])-r.width,p*=c?1:-1}var j,Z=Object.assign({position:s},u&&ue),P=!0===f?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:N(t*r)/r||0,y:N(n*r)/r||0}}({x:p,y:m}):{x:p,y:m};return p=P.x,m=P.y,c?Object.assign({},Z,((j={})[w]=b?"0":"",j[y]=g?"0":"",j.transform=(x.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",j)):Object.assign({},Z,((t={})[w]=b?m+"px":"",t[y]=g?p+"px":"",t.transform="",t))}var le={passive:!0};var de={left:"right",right:"left",bottom:"top",top:"bottom"};function pe(e){return e.replace(/left|right|bottom|top/g,(function(e){return de[e]}))}var ve={start:"end",end:"start"};function me(e){return e.replace(/start|end/g,(function(e){return ve[e]}))}function he(e){var t=k(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ge(e){return T(H(e)).left+he(e).scrollLeft}function be(e){var t=W(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ye(e){return["html","body","#document"].indexOf(B(e))>=0?e.ownerDocument.body:D(e)&&be(e)?e:ye(F(e))}function we(e,t){var n;void 0===t&&(t=[]);var r=ye(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=k(r),a=o?[i].concat(i.visualViewport||[],be(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(we(F(a)))}function xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Oe(e,t){return t===ne?xe(function(e){var t=k(e),n=H(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+ge(e),y:s}}(e)):P(t)?function(e){var t=T(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):xe(function(e){var t,n=H(e),r=he(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=S(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=S(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+ge(e),c=-r.scrollTop;return"rtl"===W(o||n).direction&&(s+=S(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(H(e)))}function Ce(e,t,n){var r="clippingParents"===t?function(e){var t=we(F(e)),n=["absolute","fixed"].indexOf(W(e).position)>=0&&D(e)?q(e):e;return P(n)?t.filter((function(e){return P(e)&&L(e,n)&&"body"!==B(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=Oe(e,n);return t.top=S(r.top,t.top),t.right=M(r.right,t.right),t.bottom=M(r.bottom,t.bottom),t.left=S(r.left,t.left),t}),Oe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ee(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Z(o):null,a=o?ce(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case X:t={x:s,y:n.y-r.height};break;case Y:t={x:s,y:n.y+n.height};break;case $:t={x:n.x+n.width,y:c};break;case G:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?U(i):null;if(null!=u){var f="y"===u?"height":"width";switch(a){case ee:t[u]=t[u]-(n[f]/2-r[f]/2);break;case te:t[u]=t[u]+(n[f]/2-r[f]/2)}}return t}function je(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?ne:s,u=n.elementContext,f=void 0===u?re:u,l=n.altBoundary,d=void 0!==l&&l,p=n.padding,v=void 0===p?0:p,m=K("number"!==typeof v?v:_(v,Q)),h=f===re?"reference":re,g=e.rects.popper,b=e.elements[d?h:f],y=Ce(P(b)?b:b.contextElement||H(e.elements.popper),a,c),w=T(e.elements.reference),x=Ee({reference:w,element:g,strategy:"absolute",placement:o}),O=xe(Object.assign({},g,x)),C=f===re?O:w,E={top:y.top-C.top+m.top,bottom:C.bottom-y.bottom+m.bottom,left:y.left-C.left+m.left,right:C.right-y.right+m.right},j=e.modifiersData.offset;if(f===re&&j){var Z=j[o];Object.keys(E).forEach((function(e){var t=[$,Y].indexOf(e)>=0?1:-1,n=[X,Y].indexOf(e)>=0?"y":"x";E[e]+=Z[n]*t}))}return E}function Ze(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ke(e){return[X,$,Y,G].some((function(t){return e[t]>=0}))}var Pe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=ie.reduce((function(e,n){return e[n]=function(e,t,n){var r=Z(e),o=[G,X].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[G,$].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}};var De={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,f=n.altBoundary,l=n.padding,d=n.tether,p=void 0===d||d,v=n.tetherOffset,m=void 0===v?0:v,h=je(t,{boundary:c,rootBoundary:u,padding:l,altBoundary:f}),g=Z(t.placement),b=ce(t.placement),y=!b,w=U(g),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,C=t.rects.reference,E=t.rects.popper,j="function"===typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,k="number"===typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(O){if(i){var A,N="y"===w?X:G,T="y"===w?Y:$,L="y"===w?"height":"width",B=O[w],W=B+h[N],I=B-h[T],H=p?-E[L]/2:0,F=b===ee?C[L]:E[L],V=b===ee?-E[L]:-C[L],K=t.elements.arrow,_=p&&K?R(K):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=J[N],te=J[T],ne=z(0,C[L],_[L]),re=y?C[L]/2-H-ne-Q-k.mainAxis:F-ne-Q-k.mainAxis,oe=y?-C[L]/2+H+ne+te+k.mainAxis:V+ne+te+k.mainAxis,ie=t.elements.arrow&&q(t.elements.arrow),ae=ie?"y"===w?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(A=null==P?void 0:P[w])?A:0,ue=B+oe-se,fe=z(p?M(W,B+re-se-ae):W,B,p?S(I,ue):I);O[w]=fe,D[w]=fe-B}if(s){var le,de="x"===w?X:G,pe="x"===w?Y:$,ve=O[x],me="y"===x?"height":"width",he=ve+h[de],ge=ve-h[pe],be=-1!==[X,G].indexOf(g),ye=null!=(le=null==P?void 0:P[x])?le:0,we=be?he:ve-C[me]-E[me]-ye+k.altAxis,xe=be?ve+C[me]+E[me]-ye-k.altAxis:ge,Oe=p&&be?function(e,t,n){var r=z(e,t,n);return r>n?n:r}(we,ve,xe):z(p?we:he,ve,p?xe:ge);O[x]=Oe,D[x]=Oe-ve}t.modifiersData[r]=D}},requiresIfExists:["offset"]};function Ae(e,t,n){void 0===n&&(n=!1);var r=D(t),o=D(t)&&function(e){var t=e.getBoundingClientRect(),n=N(t.width)/e.offsetWidth||1,r=N(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=H(t),a=T(e,o),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==B(t)||be(i))&&(s=function(e){return e!==k(e)&&D(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:he(e);var t}(t)),D(t)?((c=T(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=ge(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function Se(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function Me(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Ne={placement:"bottom",modifiers:[],strategy:"absolute"};function Te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Re(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Ne:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ne,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;u(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:P(e)?we(e):e.contextElement?we(e.contextElement):[],popper:we(t)};var f=function(e){var t=Se(e);return ae.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),u=function(){};a.push(s||u)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(Te(t,n)){o.rects={reference:Ae(t,q(n),"fixed"===o.options.strategy),popper:R(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,u=i.options,f=void 0===u?{}:u,l=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:l,instance:c})||o)}else o.reset=!1,r=-1}}},update:Me((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),s=!0}};if(!Te(e,t))return c;function u(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var Le=Re({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=je(t,{elementContext:"reference"}),s=je(t,{altBoundary:!0}),c=Ze(a,r),u=Ze(s,o,i),f=ke(c),l=ke(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Ee({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:Z(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,fe(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,fe(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=k(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,le)})),s&&c.addEventListener("resize",n.update,le),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,le)})),s&&c.removeEventListener("resize",n.update,le)}},data:{}},Pe,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,f=n.boundary,l=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,v=void 0===p||p,m=n.allowedAutoPlacements,h=t.options.placement,g=Z(h),b=c||(g===h||!v?[pe(h)]:function(e){if(Z(e)===J)return[];var t=pe(e);return[me(e),t,me(t)]}(h)),y=[h].concat(b).reduce((function(e,n){return e.concat(Z(n)===J?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?ie:c,f=ce(r),l=f?s?oe:oe.filter((function(e){return ce(e)===f})):Q,d=l.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=l);var p=d.reduce((function(t,n){return t[n]=je(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Z(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:f,rootBoundary:l,padding:u,flipVariations:v,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,C=!0,E=y[0],j=0;j<y.length;j++){var k=y[j],P=Z(k),D=ce(k)===ee,A=[X,Y].indexOf(P)>=0,S=A?"width":"height",M=je(t,{placement:k,boundary:f,rootBoundary:l,altBoundary:d,padding:u}),N=A?D?$:G:D?Y:X;w[S]>x[S]&&(N=pe(N));var T=pe(N),R=[];if(i&&R.push(M[P]<=0),s&&R.push(M[N]<=0,M[T]<=0),R.every((function(e){return e}))){E=k,C=!1;break}O.set(k,R)}if(C)for(var L=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},B=v?3:1;B>0;B--){if("break"===L(B))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},De,se]}),Be=["enabled","placement","strategy","modifiers"];function We(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var Ie={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:function(){}},He={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",a?"".concat(a,",").concat(r.id):r.id)}}},Fe=[];var Ve=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.enabled,o=void 0===r||r,i=n.placement,a=void 0===i?"bottom":i,u=n.strategy,f=void 0===u?"absolute":u,l=n.modifiers,d=void 0===l?Fe:l,p=We(n,Be),v=(0,s.useRef)(d),m=(0,s.useRef)(),h=(0,s.useCallback)((function(){var e;null==(e=m.current)||e.update()}),[]),g=(0,s.useCallback)((function(){var e;null==(e=m.current)||e.forceUpdate()}),[]),y=j((0,s.useState)({placement:a,update:h,forceUpdate:g,attributes:{},styles:{popper:{},arrow:{}}})),w=(0,c.Z)(y,2),x=w[0],O=w[1],E=(0,s.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),O({state:t,styles:n,attributes:r,update:h,forceUpdate:g,placement:t.placement})}}}),[h,g,O]),Z=(0,s.useMemo)((function(){return C(v.current,d)||(v.current=d),v.current}),[d]);return(0,s.useEffect)((function(){m.current&&o&&m.current.setOptions({placement:a,strategy:f,modifiers:[].concat((0,b.Z)(Z),[E,Ie])})}),[f,a,E,o,Z]),(0,s.useEffect)((function(){if(o&&null!=e&&null!=t)return m.current=Le(e,t,Object.assign({},p,{placement:a,strategy:f,modifiers:[].concat((0,b.Z)(Z),[He,E])})),function(){null!=m.current&&(m.current.destroy(),m.current=void 0,O((function(e){return Object.assign({},e,{attributes:{},styles:{popper:{}}})})))}}),[o,e,t]),x};function qe(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var Ue=n(26255),ze=n(14987),Ke=n(21024),_e=n.n(Ke),Xe=function(){};function Ye(e){return 0===e.button}function $e(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var Ge=function(e){return e&&("current"in e?e.current:e)},Je={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};var Qe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Xe,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.disabled,o=n.clickTrigger,i=void 0===o?"click":o,a=(0,s.useRef)(!1),c=(0,s.useRef)(!1),u=(0,s.useCallback)((function(t){var n=Ge(e);_e()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),a.current=!n||$e(t)||!Ye(t)||!!qe(n,t.target)||c.current,c.current=!1}),[e]),f=(0,m.Z)((function(t){var n=Ge(e);n&&qe(n,t.target)&&(c.current=!0)})),l=(0,m.Z)((function(e){a.current||t(e)}));(0,s.useEffect)((function(){if(!r&&null!=e){var t=(0,ze.Z)(Ge(e)),n=(t.defaultView||window).event,o=null;Je[i]&&(o=(0,Ue.Z)(t,Je[i],f,!0));var a=(0,Ue.Z)(t,i,u,!0),s=(0,Ue.Z)(t,i,(function(e){e!==n?l(e):n=void 0})),c=[];return"ontouchstart"in t.documentElement&&(c=[].slice.call(t.body.children).map((function(e){return(0,Ue.Z)(e,"mousemove",Xe)}))),function(){null==o||o(),a(),s(),c.forEach((function(e){return e()}))}}}),[e,r,i,u,f,l])};function et(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t].name=t,e[t]}))}function tt(e){var t,n,r,o,i=e.enabled,a=e.enableEvents,s=e.placement,c=e.flip,u=e.offset,f=e.fixed,l=e.containerPadding,d=e.arrowElement,p=e.popperConfig,v=void 0===p?{}:p,m=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(v.modifiers);return Object.assign({},v,{placement:s,enabled:i,strategy:f?"fixed":v.strategy,modifiers:et(Object.assign({},m,{eventListeners:{enabled:a},preventOverflow:Object.assign({},m.preventOverflow,{options:l?Object.assign({padding:l},null==(t=m.preventOverflow)?void 0:t.options):null==(n=m.preventOverflow)?void 0:n.options}),offset:{options:Object.assign({offset:u},null==(r=m.offset)?void 0:r.options)},arrow:Object.assign({},m.arrow,{enabled:!!d,options:Object.assign({},null==(o=m.arrow)?void 0:o.options,{element:d})}),flip:Object.assign({enabled:!!c},m.flip)}))})}var nt=n(46417),rt=["children"];var ot=function(){};function it(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.useContext)(h),n=(0,g.Z)(),r=(0,c.Z)(n,2),o=r[0],i=r[1],a=(0,s.useRef)(!1),u=e.flip,f=e.offset,l=e.rootCloseEvent,d=e.fixed,p=void 0!==d&&d,v=e.placement,m=e.popperConfig,b=void 0===m?{}:m,y=e.enableEventListeners,w=void 0===y||y,x=e.usePopper,O=void 0===x?!!t:x,C=null==(null==t?void 0:t.show)?!!e.show:t.show;C&&!a.current&&(a.current=!0);var E=function(e){null==t||t.toggle(!1,e)},j=t||{},Z=j.placement,k=j.setMenu,P=j.menuElement,D=j.toggleElement,A=Ve(D,P,tt({placement:v||Z||"bottom-start",enabled:O,enableEvents:null==w?C:w,offset:f,flip:u,fixed:p,arrowElement:o,popperConfig:b})),S=Object.assign({ref:k||ot,"aria-labelledby":null==D?void 0:D.id},A.attributes.popper,{style:A.styles.popper}),M={show:C,placement:Z,hasShown:a.current,toggle:null==t?void 0:t.toggle,popper:O?A:null,arrowProps:O?Object.assign({ref:i},A.attributes.arrow,{style:A.styles.arrow}):{}};return Qe(P,E,{clickTrigger:l,disabled:!C}),[S,M]}function at(e){var t=e.children,n=it(function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,rt)),r=(0,c.Z)(n,2),o=r[0],i=r[1];return(0,nt.jsx)(nt.Fragment,{children:t(o,i)})}at.displayName="DropdownMenu",at.defaultProps={usePopper:!0};var st=at;function ct(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var ut={};ct(ut,"SSRProvider",(function(){return dt})),ct(ut,"useSSRSafeId",(function(){return vt})),ct(ut,"useIsSSR",(function(){return mt}));var ft={prefix:String(Math.round(1e10*Math.random())),current:0},lt=s.createContext(ft);function dt(e){var t=(0,s.useContext)(lt),n=(0,s.useMemo)((function(){return{prefix:t===ft?"":"".concat(t.prefix,"-").concat(++t.current),current:0}}),[t]);return s.createElement(lt.Provider,{value:n},e.children)}var pt=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);function vt(e){var t=(0,s.useContext)(lt);return t!==ft||pt||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,s.useMemo)((function(){return e||"react-aria".concat(t.prefix,"-").concat(++t.current)}),[e])}function mt(){var e=(0,s.useContext)(lt)!==ft,t=(0,s.useState)(e),n=(0,c.Z)(t,2),r=n[0],o=n[1];return"undefined"!==typeof window&&e&&(0,s.useLayoutEffect)((function(){o(!1)}),[]),r}var ht=function(e){var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},gt=function(){};function bt(){var e=vt(),t=(0,s.useContext)(h)||{},n=t.show,r=void 0!==n&&n,o=t.toggle,i=void 0===o?gt:o,a=t.setToggle,c=t.menuElement,u=(0,s.useCallback)((function(e){i(!r,e)}),[r,i]),f={id:e,ref:a||gt,onClick:u,"aria-expanded":!!r};return c&&ht(c)&&(f["aria-haspopup"]=!0),[f,{show:r,toggle:i}]}function yt(e){var t=e.children,n=bt(),r=(0,c.Z)(n,2),o=r[0],i=r[1];return(0,nt.jsx)(nt.Fragment,{children:t(o,i)})}yt.displayName="DropdownToggle";var wt=yt,xt=n(4942),Ot=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},Ct=s.createContext(null),Et=s.createContext(null);Et.displayName="NavContext";var jt=Et,Zt=n(16184);function kt(e){return"".concat("data-rr-ui-").concat(e)}var Pt=["eventKey","disabled","onClick","active","as"];function Dt(e){var t=e.key,n=e.href,r=e.active,o=e.disabled,i=e.onClick,a=(0,s.useContext)(Ct),c=((0,s.useContext)(jt)||{}).activeKey,u=Ot(t,n),f=null==r&&null!=t?Ot(c)===u:r,l=(0,m.Z)((function(e){o||(null==i||i(e),a&&!e.isPropagationStopped()&&a(u,e))}));return[(0,xt.Z)({onClick:l,"aria-disabled":o||void 0,"aria-selected":f},kt("dropdown-item"),""),{isActive:f}]}var At=s.forwardRef((function(e,t){var n=e.eventKey,r=e.disabled,o=e.onClick,i=e.active,a=e.as,s=void 0===a?Zt.ZP:a,u=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Pt),f=Dt({key:n,href:u.href,disabled:r,onClick:o,active:i}),l=(0,c.Z)(f,1)[0];return(0,nt.jsx)(s,Object.assign({},u,{ref:t},l))}));At.displayName="DropdownItem";var St=At,Mt=n(78532),Nt=(0,s.createContext)(Mt.Z?window:void 0);Nt.Provider;function Tt(){var e=(0,s.useReducer)((function(e){return!e}),!1)[1],t=(0,s.useRef)(null),n=(0,s.useCallback)((function(n){t.current=n,e()}),[e]);return[t,n]}function Rt(e){var t=e.defaultShow,n=e.show,r=e.onSelect,o=e.onToggle,i=e.itemSelector,a=void 0===i?"* [".concat(kt("dropdown-item"),"]"):i,u=e.focusFirstItemOnShow,g=e.placement,b=void 0===g?"bottom-start":g,y=e.children,w=(0,s.useContext)(Nt),x=(0,d.$c)(n,t,o),O=(0,c.Z)(x,2),C=O[0],E=O[1],j=Tt(),Z=(0,c.Z)(j,2),k=Z[0],P=Z[1],D=k.current,A=Tt(),S=(0,c.Z)(A,2),M=S[0],N=S[1],T=M.current,R=(0,p.Z)(C),L=(0,s.useRef)(null),B=(0,s.useRef)(!1),W=(0,s.useContext)(Ct),I=(0,s.useCallback)((function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null==t?void 0:t.type;E(e,{originalEvent:t,source:n})}),[E]),H=(0,m.Z)((function(e,t){null==r||r(e,t),I(!1,t,"select"),t.isPropagationStopped()||null==W||W(e,t)})),F=(0,s.useMemo)((function(){return{toggle:I,placement:b,show:C,menuElement:D,toggleElement:T,setMenu:P,setToggle:N}}),[I,b,C,D,T,P,N]);D&&R&&!C&&(B.current=D.contains(D.ownerDocument.activeElement));var V=(0,m.Z)((function(){T&&T.focus&&T.focus()})),q=(0,m.Z)((function(){var e=L.current,t=u;if(null==t&&(t=!(!k.current||!ht(k.current))&&"keyboard"),!1!==t&&("keyboard"!==t||/^key.+$/.test(e))){var n=f(k.current,a)[0];n&&n.focus&&n.focus()}}));(0,s.useEffect)((function(){C?q():B.current&&(B.current=!1,V())}),[C,B,V,q]),(0,s.useEffect)((function(){L.current=null}));var U=function(e,t){if(!k.current)return null;var n=f(k.current,a),r=n.indexOf(e)+t;return n[r=Math.max(0,Math.min(r,n.length))]};return(0,v.Z)((0,s.useCallback)((function(){return w.document}),[w]),"keydown",(function(e){var t,n,r=e.key,o=e.target,i=null==(t=k.current)?void 0:t.contains(o),a=null==(n=M.current)?void 0:n.contains(o);if((!/input|textarea/i.test(o.tagName)||!(" "===r||"Escape"!==r&&i||"Escape"===r&&"search"===o.type))&&(i||a)&&("Tab"!==r||k.current&&C)){L.current=e.type;var s={originalEvent:e,source:e.type};switch(r){case"ArrowUp":var c=U(o,-1);return c&&c.focus&&c.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),C){var u=U(o,1);u&&u.focus&&u.focus()}else E(!0,s);return;case"Tab":(0,l.ZP)(o.ownerDocument,"keyup",(function(e){var t;("Tab"!==e.key||e.target)&&null!=(t=k.current)&&t.contains(e.target)||E(!1,s)}),{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),E(!1,s)}}})),(0,nt.jsx)(Ct.Provider,{value:H,children:(0,nt.jsx)(h.Provider,{value:F,children:y})})}Rt.displayName="Dropdown",Rt.Menu=st,Rt.Toggle=wt,Rt.Item=St;var Lt=Rt,Bt=s.createContext({});Bt.displayName="DropdownContext";var Wt=Bt,It=n(48091),Ht=n(68524),Ft=["bsPrefix","className","eventKey","disabled","onClick","active","as"],Vt=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.eventKey,u=e.disabled,f=void 0!==u&&u,l=e.onClick,d=e.active,p=e.as,v=void 0===p?It.Z:p,m=(0,o.Z)(e,Ft),h=(0,Ht.vE)(n,"dropdown-item"),g=Dt({key:s,href:m.href,disabled:f,onClick:l,active:d}),b=(0,c.Z)(g,2),y=b[0],w=b[1];return(0,nt.jsx)(v,(0,r.Z)((0,r.Z)((0,r.Z)({},m),y),{},{ref:t,className:a()(i,h,w.isActive&&"active",f&&"disabled")}))}));Vt.displayName="DropdownItem";var qt=Vt,Ut=n(81444),zt=n(21369),Kt=s.createContext(null);Kt.displayName="InputGroupContext";var _t=Kt,Xt=s.createContext(null);Xt.displayName="NavbarContext";var Yt=Xt;n(36993);function $t(e,t){return e}var Gt=["bsPrefix","className","align","rootCloseEvent","flip","show","renderOnMount","as","popperConfig","variant"];function Jt(e,t,n){var r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t&&(r=e?n?"right-end":"left-end":n?"right-start":"left-start"),r}var Qt=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,u=e.align,f=e.rootCloseEvent,l=e.flip,d=e.show,p=e.renderOnMount,v=e.as,m=void 0===v?"div":v,h=e.popperConfig,g=e.variant,b=(0,o.Z)(e,Gt),y=!1,w=(0,s.useContext)(Yt),x=(0,Ht.vE)(n,"dropdown-menu"),O=(0,s.useContext)(Wt),C=O.align,E=O.drop,j=O.isRTL;u=u||C;var Z=(0,s.useContext)(_t),k=[];if(u)if("object"===typeof u){var P=Object.keys(u);if(P.length){var D=P[0],A=u[D];y="start"===A,k.push("".concat(x,"-").concat(D,"-").concat(A))}}else"end"===u&&(y=!0);var S=Jt(y,E,j),M=it({flip:l,rootCloseEvent:f,show:d,usePopper:!w&&0===k.length,offset:[0,2],popperConfig:h,placement:S}),N=(0,c.Z)(M,2),T=N[0],R=N[1],L=R.hasShown,B=R.popper,W=R.show,I=R.toggle;if(T.ref=(0,zt.Z)($t(t),T.ref),(0,Ut.Z)((function(){W&&(null==B||B.update())}),[W]),!L&&!p&&!Z)return null;"string"!==typeof m&&(T.show=W,T.close=function(){return null==I?void 0:I(!1)},T.align=u);var H=b.style;return null!=B&&B.placement&&(H=(0,r.Z)((0,r.Z)({},b.style),T.style),b["x-placement"]=B.placement),(0,nt.jsx)(m,(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},b),T),{},{style:H},(k.length||w)&&{"data-bs-popper":"static"}),{},{className:a().apply(void 0,[i,x,W&&"show",y&&"".concat(x,"-end"),g&&"".concat(x,"-").concat(g)].concat(k))}))}));Qt.displayName="DropdownMenu",Qt.defaultProps={flip:!0};var en=Qt,tn=["as","bsPrefix","variant","size","active","className"],nn=s.forwardRef((function(e,t){var n=e.as,i=e.bsPrefix,s=e.variant,u=e.size,f=e.active,l=e.className,d=(0,o.Z)(e,tn),p=(0,Ht.vE)(i,"btn"),v=(0,Zt.FT)((0,r.Z)({tagName:n},d)),m=(0,c.Z)(v,2),h=m[0],g=m[1].tagName;return(0,nt.jsx)(g,(0,r.Z)((0,r.Z)((0,r.Z)({},h),d),{},{ref:t,className:a()(l,p,f&&"active",s&&"".concat(p,"-").concat(s),u&&"".concat(p,"-").concat(u),d.href&&d.disabled&&"disabled")}))}));nn.displayName="Button",nn.defaultProps={variant:"primary",active:!1,disabled:!1};var rn=nn,on=["bsPrefix","split","className","childBsPrefix","as"],an=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.split,u=e.className,f=e.childBsPrefix,l=e.as,d=void 0===l?rn:l,p=(0,o.Z)(e,on),v=(0,Ht.vE)(n,"dropdown-toggle"),m=(0,s.useContext)(h),g=(0,s.useContext)(_t);void 0!==f&&(p.bsPrefix=f);var b=bt(),y=(0,c.Z)(b,1)[0];return y.ref=(0,zt.Z)(y.ref,$t(t)),(0,nt.jsx)(d,(0,r.Z)((0,r.Z)({className:a()(u,v,i&&"".concat(v,"-split"),!!g&&(null==m?void 0:m.show)&&"show")},y),p))}));an.displayName="DropdownToggle";var sn=an,cn=n(28864),un=["bsPrefix","drop","show","className","align","onSelect","onToggle","focusFirstItemOnShow","as","navbar","autoClose"],fn=(0,cn.Z)("dropdown-header",{defaultProps:{role:"heading"}}),ln=(0,cn.Z)("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),dn=(0,cn.Z)("dropdown-item-text",{Component:"span"}),pn=s.forwardRef((function(e,t){var n=(0,d.Ch)(e,{show:"onToggle"}),i=n.bsPrefix,c=n.drop,u=n.show,f=n.className,l=n.align,p=n.onSelect,v=n.onToggle,h=n.focusFirstItemOnShow,g=n.as,b=void 0===g?"div":g,y=(n.navbar,n.autoClose),w=(0,o.Z)(n,un),x=(0,s.useContext)(_t),O=(0,Ht.vE)(i,"dropdown"),C=(0,Ht.SC)(),E=(0,m.Z)((function(e,t){var n;t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),n=t.source,(!1===y?"click"===n:"inside"===y?"rootClose"!==n:"outside"!==y||"select"!==n)&&(null==v||v(e,t))})),j=Jt("end"===l,c,C),Z=(0,s.useMemo)((function(){return{align:l,drop:c,isRTL:C}}),[l,c,C]);return(0,nt.jsx)(Wt.Provider,{value:Z,children:(0,nt.jsx)(Lt,{placement:j,show:u,onSelect:p,onToggle:E,focusFirstItemOnShow:h,itemSelector:".".concat(O,"-item:not(.disabled):not(:disabled)"),children:x?w.children:(0,nt.jsx)(b,(0,r.Z)((0,r.Z)({},w),{},{ref:t,className:a()(f,u&&"show",(!c||"down"===c)&&O,"up"===c&&"dropup","end"===c&&"dropend","start"===c&&"dropstart")}))})})}));pn.displayName="Dropdown",pn.defaultProps={navbar:!1,align:"start",autoClose:!0};var vn=Object.assign(pn,{Toggle:sn,Menu:en,Item:qt,ItemText:dn,Divider:ln,Header:fn})},21024:function(e){var t=function(){};e.exports=t}}]);